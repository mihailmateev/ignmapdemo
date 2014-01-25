/*!
 * Infragistics.Web.ClientUI Grid Tooltips 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *  ig.ui.editors.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */

/*global jQuery, toStaticHTML */
if (typeof jQuery !== "function") {
	throw new Error("jQuery is undefined");
}
(function ($) {

	/*
		igGridRowSelectors widget.
		The widget is pluggable to the element where the grid is instantiated and the actual igGrid object doesn't know about this.
		The Row Selectors widget works as a grid feature and injects an additional column on the left side of the initial table
		The column cells can be clicked to expand children grids derriving from the expanded row.
	*/
    $.widget("ui.igGridRowSelectors", {
		options: {
			/* type="bool" determines whether the row selectors column should contain row numbering */
			enableRowNumbering: true,
			/* type="bool" determines whether the row selectors column should contain checkboxes */
			enableCheckBoxes: false,
			/* type="number" the seed to be added to the default numbering */
			rowNumberingSeed: 0,
			/* type="string|number|null"
				string The row selector column width can be set in pixels (px) and percentage (%)
				number The row selector width can be set as a number
				null type="object" will let the feature decide the best width depending on enabled contents
			*/
			rowSelectorColumnWidth: null,
			/* type="bool" determines whether the selection feature is required for the row selectors. If set to "false" 
			the widget will not check for Selection availability. If set to "true" an exception will be thrown if Selection is
			not available. */
			requireSelection: true,
			/* type="bool" determines whether checkboxes will be shown only if row selectors are on focus/selected.
			*/
			showCheckBoxesOnFocus: false
		},
		css: {
			/* Classes applied to the row selectors grid cells. */
			"rowSelectorCssClass": "ui-iggrid-rowselector-class",
			/* Classes applied to the row selectors header cells. */
			"headerRowSelectorCssClass": "ui-iggrid-rowselector-header",
			/* Classes applied to the row selectors footer cells. */
			"footerRowSelectorCssClass": "ui-iggrid-rowselector-footer",
			/* Classes applied to the checkbox container */
			"checkbox": 'ui-state-default ui-corner-all ui-igcheckbox-normal',
			/* Classes defining the unchecked state of the checkbox */
			"checkboxOff": 'ui-icon ui-icon-check ui-igcheckbox-normal-off',
			/* Classes defining the checked state of the checkbox */
			"checkboxOn": 'ui-icon ui-icon-check ui-igcheckbox-normal-on',
			/* Class defining the hover state style of the node */
			"nodeHovered": 'ui-state-hover'
		},
		events: {
			/* Event fired after a row selector is clicked. 
			Function takes arguments evt and ui.
			Use ui.row to get reference to the row the clicked row selector resides in.
			Use ui.rowIndex to get the index of the row the clicked row selector resides in.
			Use ui.rowKey to get the key of the row the clicked row selector resides in.
			Use ui.rowSelector to get reference to the row selector cell.
			Use ui.owner to get reference to igRowSelectors.
			Use ui.grid to get reference to the igGrid the igRowSelectors are initialized for.
			*/
			rowSelectorClicked: "rowSelectorClicked",
			/* cancel="true" Event fired when a row selector checkbox is changing.
			Function takes arguments evt and ui.
			Use ui.row to get reference to the row the clicked row selector resides in.
			Use ui.rowIndex to get the index of the row the clicked row selector resides in.
			Use ui.rowKey to get the key of the row the clicked row selector resides in.
			Use ui.rowSelector to get reference to the row selector cell.
			Use ui.owner to get reference to igRowSelectors.
			Use ui.grid to get reference to the igGrid the igRowSelectors are initialized for.
			Use ui.currentState to get the current state of the checkbox ("on","off").
			Use ui.newState to get the new state of the checkbox ("on","off").
			Use ui.isHeader to check if the header check box is the one being clicked. In this case no row related args are passed.
			*/
			checkBoxStateChanging: "checkBoxStateChanging",
			/* Event fired after a row selector checkbox had changed state.
			Function takes arguments evt and ui.
			Use ui.row to get reference to the row the clicked row selector resides in.
			Use ui.rowIndex to get the index of the row the clicked row selector resides in.
			Use ui.rowKey to get the key of the row the clicked row selector resides in.
			Use ui.rowSelector to get reference to the row selector cell.
			Use ui.owner to get reference to igRowSelectors.
			Use ui.grid to get reference to the igGrid the igRowSelectors are initialized for.
			Use ui.state to get the state of the checkbox ("on","off").
			Use ui.isHeader to check if the header check box is the one being clicked. In this case no row related args are passed.
			*/
			checkBoxStateChanged: "checkBoxStateChanged"
		},
		_createWidget: function (options, element) {
			$.Widget.prototype._createWidget.apply(this, arguments);
			if (this.options.rowSelectorColumnWidth === null) {
				this.options.rowSelectorColumnWidth = 45;
				if (this.options.enableCheckBoxes === true && this.options.enableRowNumbering === true) {
					this.options.rowSelectorColumnWidth += 15;
				}
			}
		},
		_create: function () {
			// current page index (persistant selection storage variable)
			this._cpIdx = 0;
			// all pages row selection (persistant selection storage variable)
			this._pSelection = {};
			// an array storing the generated dom for virtual row selectors
			this._vRsDom = [];
			// the the index of the last generated row selector
			this._cIdx = 0;
			// whether grid rendering functions have been replaced with rs ones
			this._functionsRedirected = false;
			// whether paging is enabled
			this._isPaging = false;
			// stores the hovered table row
			this._hovTR = null;
			// stores the original renderRecord function
			this._gridRenderRecord = null;
			// stores the original renderRecordInArray function
			this._gridRenderRecordInArray = null;
			// stores the checkboxes visibility status
			this._checkBoxesShown = false;
			// stores a template for getting number span when templating is enabled
			this._nTmpl = '{{html ig_rs_idx}}';
			// stores fixed v flag
			this._v = false;
			// stores ie7 flag for rendering
			this._ie7 = $.browser.msie && parseInt($.browser.version, 10) === 7;
		},
		destroy: function () {
			this._unregisterEvents();
			this._unregisterCellEvents();
			if (this._gridRenderRecordHandler !== undefined) {
				this.grid._renderColgroup = this._flatRenderColgroup;
				this.grid._renderRecord = this._gridRenderRecordHandler;
				this.grid._renderRecordInArray = this._gridRenderRecordInArrayHandler;
				this.grid._generateRowTemplate = this._gridRenderTemplateHandler;
			}
			if (this.options.enableCheckBoxes === true) {
				this._unregisterCheckBoxEvents();
			}
			this._cleanInterface(false);
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		_renderHeaderRowSelectors: function (owner) {
			var rows, i, cell, header, $thDataSkip;
			if (owner.id() !== this.grid.id()) {
				return;
			}
			if (this.grid.options.fixedHeaders === true) {
				rows = $("#" + this.grid.id() + "_headers thead").children();
			} else {
				rows = $("#" + this.grid.id() + " thead").children();
			}
			// creates the header cells for row selectors on each row
			if (rows.length > 0) {
				// getting the expand header cell
				cell = $(rows[0]).find("th.ui-iggrid-expandheadercell")[0];
				if (cell === undefined) {
					cell = $(rows[i]).children()[0];
					this._index = 0;
				} else {
					this._index = $(cell).index() + 1;
				}

				// add support for multi column headers
				if (this.grid._isMultiColumnGrid) {
					$thDataSkip = $('<th></th>').prependTo(this.grid.headersTable().find('thead tr:nth-child(1)'))
						.addClass(this.css.headerRowSelectorCssClass)
						.addClass(this.grid.css.headerClass)
						.attr("data-role", "rs")
						.attr("data-skip", "true");

					$thDataSkip.attr('rowspan', this.grid._maxLevel + 1);

					if (this.options.enableCheckBoxes === true) {
						// M.H. 13 Aug 2012 Fix for bug #118563
						$(this._getCheckBox(true)).appendTo($thDataSkip);
					}
				} else {
					for (i = 0; i < rows.length; i++) {
						// the row selector cell is already present
						if ($(rows[i]).find("th[data-role='rs']").length > 0) {
							continue;
						}
						// adding the header cell
						// S.S. April 9, 2012 Bug #103459 IE7 doesn't render empty cells, we need to add dummy data.
						header = $("<th>" + (this._ie7 ? "&nbsp;" : "") + "</th>")
							.addClass(this.css.headerRowSelectorCssClass)
							.addClass(i === 0 ? this.grid.css.headerClass : "")
							.attr("data-role", "rs")
							.attr("data-skip", "true")
							.insertBefore($($(rows[i]).children()[this._index]));
						if (this.options.enableCheckBoxes === true && i === 0) {
							$(this._getCheckBox(true)).appendTo(header);
						}
					}
				}
			}
		},
		_renderFooterRowSelectors: function (owner) {
			var rows, i, footer;
			if (owner.id() !== this.grid.id()) {
				return;
			}
			if (this.grid.options.fixedFooters === true) {
				rows = $("#" + this.grid.id() + "_footers tfoot").children();
			} else {
				rows = $("#" + this.grid.id() + " tfoot").children();
			}
			// creates the header cells for row selectors on each row
			if (rows.length > 0) {
				for (i = 0; i < rows.length; i++) {
					// the row selector cell is already present
					if ($(rows[i]).find("td[data-role='rs']").length > 0) {
						continue;
					}
					// adding the header cell
					// S.S. April 9, 2012 Bug #103459 IE7 doesn't render empty cells, we need to add dummy data.
					footer = $("<td>" + (this._ie7 ? "&nbsp;" : "") + "</td>")
						.addClass(this.css.footerRowSelectorCssClass)
						.attr("data-role", "rs")
						.attr("data-skip", "true")
						.insertBefore($($(rows[i]).children()[this._index]));
				}
			}
		},
		_headerRendered: function (event, ui) {
			this._renderHeaderRowSelectors(ui.owner);
		},
		_footerRendered: function (event, ui) {
			this._renderFooterRowSelectors(ui.owner);
		},
		_recordsRendering: function (event, ui) {
			if (this.grid.id() !== ui.owner.id()) {
				return;
			}
			// S.S. August 21, 2012, Bug #113279 Adding the continuous virtualization marker detection so that proper numbering can be
			// applied in the non-template case
			this._cIdx = ui.owner.cvSr && ui.owner.cvEr ? ui.owner.cvSr : 0;
			if (this._functionsRedirected === false) {
				// render record
				this._renderRecordHandler = $.proxy(this._rsRenderRecord, this);
				this._renderRecordInArrayHandler = $.proxy(this._rsRenderRecordInArray, this);
				this._gridRenderRecordHandler = $.proxy(this.grid._renderRecord, this.grid);
				this._gridRenderRecordInArrayHandler = $.proxy(this.grid._renderRecordInArray, this.grid);
				// render template
				this._renderTemplateHandler = $.proxy(this._rsRenderTemplate, this);
				this._gridRenderTemplateHandler = $.proxy(this.grid._generateRowTemplate, this.grid);
				// register for row rendering
				this._gridRenderRecord = this._gridRenderRecordHandler;
				this._gridRenderRecordInArray = this._gridRenderRecordInArrayHandler;
				this.grid._renderRecord = this._renderRecordHandler;
				this.grid._renderRecordInArray = this._renderRecordInArrayHandler;
				// register for row template
				this._gridGenerateRowTemplate = this._gridRenderTemplateHandler;
				this.grid._generateRowTemplate = this._renderTemplateHandler;
			}
			this._functionsRedirected = true;
		},
		_recordsRendered: function (event, ui) {
			if (this.grid.id() !== ui.owner.id()) {
				return;
			}
			if (this.options.enableCheckBoxes === true) {
				this._registerCheckBoxEvents();
			}
		},
		_gridRendered: function (event, ui) {
			if (ui === undefined) {
				return;
			}
			if (this.grid.id() !== ui.owner.id()) {
				return;
			}
			this._registerCellEvents();
			if (this.options.enableCheckBoxes === true) {
				this._registerCheckBoxEvents();
			}

            //I.I. bug fix for 107194
			//S.S. Bug #113287 - This code is no longer needed. Grid resizes correctly in the framework itself
            //if (this.grid.options.virtualization === true && this.grid.options.virtualizationMode === 'continuous' && this._vgRes === false) {
            //    this.grid._setDisplayContainerWidth(this.grid._getDisplayContainerWidth() + parseInt(this.options.rowSelectorColumnWidth, 10));
            //    this.grid._setVHeadersWidth(this.grid._getVHeadersWidth() + parseInt(this.options.rowSelectorColumnWidth, 10));
			//	this._vgRes = true;
            //}
		},
		_rsRenderColgroup: function (flatRenderColgroup, rs, table, isHeader, isFooter, autofitLastColumn) {
			var cgrp;
			flatRenderColgroup.apply(this, [table, isHeader, isFooter, autofitLastColumn]);
			cgrp = $(table).find("colgroup");
			if (cgrp.find("col[data-role='rs']").length === 0) {
				$("<col></col>")
					.prependTo(cgrp)
					.css('width', rs.options.rowSelectorColumnWidth)
					.attr('data-skip', 'true')
					.attr('data-role', 'rs');
			}
		},
		_rsRenderRecord: function (data, rowIndex) {
			var markup = this._gridRenderRecord(data, rowIndex), pre, app, idx,
				rs = this._getRowSelectorCellMarkup();
			idx = markup.indexOf('ui-iggrid-expandcolumn');
			if (idx >= 0) {
				app = markup.substr(idx);
				idx = idx + app.indexOf("</td>") + 4;
				pre = markup.substring(0, idx + 1);
				app = markup.substring(idx + 1);
			} else {
				idx = markup.indexOf('>') + 1;
				pre = markup.substring(0, idx);
				app = markup.substring(idx);
			}
			markup = pre + rs + app;
			return markup;
		},
		_rsRenderRecordInArray: function (darr, tbody, data, rowIndex) {
			var i, j;
			this._gridRenderRecordInArray(darr, tbody, data, rowIndex);
			for (i = darr.length - 1; i >= 0; i--) {
				if (darr[i].indexOf && darr[i].indexOf('<tr') !== -1) {
					for (j = i; j < darr.length; j++) {
						if (darr[j].indexOf && darr[j].indexOf('<td') !== -1) {
							if (darr[j].indexOf('ui-iggrid-expandcolumn') !== -1) {
								darr[j] += this._getRowSelectorCellMarkup();
								break;
							} else {
								darr[j] = this._getRowSelectorCellMarkup() + darr[j];
								break;
							}
						}
					}
					break;
				}
			}
		},
		_rsRenderTemplate: function () {
			var markup = this._gridGenerateRowTemplate(), pre, app, idx, self = this,
				rs = this._getRowSelectorCellMarkup(true);
			$.ig.rowNumberingFunctionDelegate = function (id) {
				return $('#' + self.grid.id()).data("igGridRowSelectors")._getCurrentNumber(id);
			};
			idx = markup.indexOf('ui-iggrid-expandcolumn');
			if (idx >= 0) {
				app = markup.substr(idx);
				idx = idx + app.indexOf("</td>") + 4;
				pre = markup.substring(0, idx + 1);
				app = markup.substring(idx + 1);
			} else {
				idx = markup.indexOf('>') + 1;
				pre = markup.substring(0, idx);
				app = markup.substring(idx);
			}
			markup = pre + rs + app;
			return markup;
		},
		_renderExtraHeaderCells: function (row, colgroup, prepend) {
			this._renderExtraCells(row, colgroup, prepend, true);
		},
		_renderExtraFooterCells: function (row, colgroup, prepend, cssClass) {
			this._renderExtraCells(row, colgroup, prepend, false, cssClass);
		},
		_renderExtraCells: function (row, colgroup, prepend, header, cssClass) {
			var rHeader, rCol, index, cell;
			// the row selector cell is already present
			// S.S. October 20, 2011 Bug #93127 Footer cells were changed to TD-s in an earlier stage and this selector should
			// work for both TH-s and TD-s so it can properly skip adding additional cells in both THEAD and TFOOT.
			if (row.find("[data-role='rs']").length > 0) {
				return;
			}
			if (header === true) {
				// S.S. April 9, 2012 Bug #103459 IE7 doesn't render empty cells, we need to add dummy data.
				rHeader = $('<th>' + (this._ie7 ? '&nbsp;' : '') + '</th>')
					.addClass(this.css.headerRowSelectorCssClass)
					.attr("data-role", "rs")
					.attr("data-skip", "true");
			} else {
				rHeader = $('<td>' + (this._ie7 ? '&nbsp;' : '') + '</td>')
					.addClass(this.css.footerRowSelectorCssClass)
					.addClass(cssClass)
					.attr("data-role", "rs")
					.attr("data-skip", "true");
			}
			cell = row.find("th.ui-iggrid-expandheadercell")[0];
			if (cell === undefined) {
				cell = row.children()[0];
				index = 0;
			} else {
				index = $(cell).index() + 1;
			}
			if (prepend === true || cell === undefined) {
				rHeader.prependTo(row);
				index = 0;
			} else {
				rHeader.insertBefore($(row.children()[index]));
			}
			if (colgroup) {
				rCol = $('<col></col>')
					.attr('data-skip', 'true')
					.attr('data-role', 'rs')
					.css('width', this.options.rowSelectorColumnWidth);
				rCol.insertBefore($(colgroup.children()[index]));
			}
		},
		_registerCellEvents: function () {
			$('#' + this.grid.id() + '>tbody>tr>th.' + this.css.rowSelectorCssClass)
				.bind({
					'click': this._rsClickHandler
				});
			$('#' + this.grid.id() + ' tbody')
				.bind({
					'mousemove': this._rrHoverHandler,
					'mouseleave': this._rrLeaveHandler
				});
		},
		_unregisterCellEvents: function () {
			$('#' + this.grid.id() + '>tbody>tr>th.' + this.css.rowSelectorCssClass)
				.unbind({
					'click': this._rsClickHandler
				});
			$('#' + this.grid.id() + ' tbody')
				.unbind({
					'mousemove': this._rrHoverHandler,
					'mouseleave': this._rrLeaveHandler
				});
		},
		_registerCheckBoxEvents: function () {
			var cbx = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]');
			if (cbx.length <= 0) {
				return;
			}
			cbx
				.unbind({
					'click': this._checkboxClickHandler,
					'mouseover': this._checkboxMouseOverHandler,
					'mouseout': this._checkboxMouseOutHandler
				})
				.bind({
					'click': this._checkboxClickHandler,
					'mouseover': this._checkboxMouseOverHandler,
					'mouseout': this._checkboxMouseOutHandler
				});
			$('#' + this.grid.id() + (this.grid.options.fixedHeaders === true ? '_headers' : '') + '>thead>tr>th span[name="hchk"] > span')
				.unbind({
					'click': this._hCheckboxClickHandler,
					'mouseover': this._checkboxMouseOverHandler,
					'mouseout': this._checkboxMouseOutHandler
				})
				.bind({
					'click': this._hCheckboxClickHandler,
					'mouseover': this._checkboxMouseOverHandler,
					'mouseout': this._checkboxMouseOutHandler
				});
		},
		_unregisterCheckBoxEvents: function () {
			$('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]')
				.unbind({
					'click': this._checkboxClickHandler,
					'mouseover': this._checkboxMouseOverHandler,
					'mouseout': this._checkboxMouseOutHandler
				});
			$('#' + this.grid.id() + (this.grid.options.fixedHeaders === true ? '_headers' : '') + '>thead>tr>th span[name="hchk"] > span')
				.unbind({
					'click': this._hCheckboxClickHandler,
					'mouseover': this._checkboxMouseOverHandler,
					'mouseout': this._checkboxMouseOutHandler
				});
		},
		_checkboxMouseOver: function (event) {
			$(event.target).closest('span[data-role="checkbox"]').addClass(this.css.nodeHovered);
		},
		_checkboxMouseOut: function (event) {
			$(event.target).closest('span[data-role="checkbox"]').removeClass(this.css.nodeHovered);
		},
		_checkBoxClicked: function (event) {
			var trg = $(event.target).closest("span[name='chk']"), rCell = trg.parent(), rRow = rCell.parent(), args,
				rIdx = this._getVisibleRowIndex(rRow), rKey = rRow.attr("data-id"), noCancel, state = trg.attr("data-chk");
			if (rKey === "" || rKey === null || rKey === undefined) {
				rKey = rIdx;
			}
			args = {
				row: rRow,
				rowIndex: rIdx,
				rowKey: rKey,
				rowSelector: rCell,
				owner: this,
				grid: this.grid,
				currentState: state,
				newState: state === 'off' ? 'on' : 'off',
				isHeader: false
			};
			noCancel = this._triggerCheckingEvent(args);
			if (noCancel === true) {
				this._handleCheck(trg);
				this._updateHeader();
				// modifying args to trigger checked event
				delete args.currentState;
				args.state = args.newState;
				delete args.newState;
				this._triggerCheckedEvent(args);
			}
			event.stopPropagation();
		},
		_headerCheckBoxClicked: function (event) {
			var trg = $(event.target).closest("span[name='hchk']"), args, noCancel, state = trg.attr("data-chk");
			args = {
				owner: this,
				grid: this.grid,
				currentState: state,
				newState: state === 'off' ? 'on' : 'off',
				isHeader: true
			};
			noCancel = this._triggerCheckingEvent(args);
			if (noCancel === true) {
				this._handleHcheck(trg);
				// modifying args to trigger checked event
				delete args.currentState;
				args.state = args.newState;
				delete args.newState;
				this._triggerCheckedEvent(args);
			}
			event.stopPropagation();
			event.preventDefault();
		},
		_handleCheck: function (checkbox) {
			var row = checkbox.parent().parent(), idx = this._getVisibleRowIndex(row), rIdx = this._getVisibleHRowIndex(row), offset = 0;
			if (checkbox === undefined || checkbox === null) {
				return;
			}
			if (this._v === true) {
				offset = this.grid._startRowIndex;
			}
			if (checkbox.attr("data-chk") === "off") {
				this._alterCheckbox(checkbox, true);
				// if selection is single we need to explicitly remove the styles
				if (this.grid.element.igGridSelection("option", "multipleSelection") !== true) {
					this._clearRowSelectorsSelection();
				}
				// selects the row using the igGridSelection method
				this.grid.element.igGridSelection("selectRow", rIdx);
				// add the selected row index to the current page row selection
				if (this._pSelection[this._cpIdx] === undefined) {
					this._pSelection[this._cpIdx] = {};
				}
				this._pSelection[this._cpIdx][idx + offset] = true;
				this._updateCheckBoxes(idx);
			} else {
				this._alterCheckbox(checkbox, false);
				// deselects the row using the igGridSelection method
				this.grid.element.igGridSelection("deselectRow", rIdx + offset);
				// deselects the row in the private array
				this._pSelection[this._cpIdx][idx + offset] = false;
			}
		},
		_handleHcheck: function (checkbox) {
			var checkBoxes = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]'), i, vfs;
			if (checkbox.attr("data-chk") === "off") {
				this._alterCheckbox(checkbox, true);
				for (i = 0; i < checkBoxes.length; i++) {
					if ($(checkBoxes[i]).attr("data-chk") === "off") {
						this._handleCheck($(checkBoxes[i]));
					}
				}
			} else {
				this._alterCheckbox(checkbox, false);
				for (i = 0; i < checkBoxes.length; i++) {
					if ($(checkBoxes[i]).attr("data-chk") === "on") {
						this._handleCheck($(checkBoxes[i]));
					}
				}
				if (this._v === true) {
					this.grid.element.igGridSelection("clearSelection");
				}
			}
			// if we have a virtual grid we need to extend the header checkbox
			// effect to checkboxes which cannot be immediately selected. we only 
			// mark them on the persistant selection storage and let other functions handle the rest
			vfs = checkbox.attr("data-chk") === "on" ? true : false;
			if (this._v === true) {
				for (i = 0; i < this.grid._totalRowCount; i++) {
					this._pSelection[this._cpIdx][i] = vfs;
				}
			}
		},
		_updateHeader: function () {
			var checkboxes = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]'), i, check = true,
				header = $('#' + this.grid.id() + (this.grid.options.fixedHeaders === true ? '_headers' : '') + '>thead>tr>th span[name="hchk"]');
			for (i = 0; i < checkboxes.length; i++) {
				if ($(checkboxes[i]).attr("data-chk") === "off") {
					check = false;
					break;
				}
			}
			this._alterCheckbox(header, check);
		},
		_updateCheckBoxes: function (idx) {
			var cb, self = this;
			if (this.grid.element.igGridSelection("option", "multipleSelection") === true) {
				return;
			}
			cb = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]');
			if (this._pSelection[this._cpIdx] !== undefined) {
				$.each(this._pSelection[this._cpIdx], function (key, value) {
					if (value === true && parseInt(key, 10) !== idx) {
						self._alterCheckbox($(cb[key]), false);
						self._pSelection[self._cpIdx][key] = false;
					}
				});
			}
		},
		_alterCheckbox: function (checkbox, check) {
			var $inner = $(checkbox.children()[0]);
			if (checkbox !== undefined && $inner !== undefined) {
				if (check === true) {
					checkbox.attr("data-chk", "on");
					$inner.removeClass(this.css.checkboxOff).addClass(this.css.checkboxOn);
				} else {
					checkbox.attr("data-chk", "off");
					$inner.removeClass(this.css.checkboxOn).addClass(this.css.checkboxOff);
				}
			}
		},
		_getRowSelectorCellMarkup: function (template) {
			return '<th class="' + this.css.rowSelectorCssClass + '">' +
				'<span class="ui-icon ui-icon-triangle-1-e" style="margin-left: -5px"> </span>' +
				(this.options.enableRowNumbering === true ? (template === true ? this._nTmpl : this._getCurrentNumber()) : '') +
				(this.options.enableCheckBoxes === true ? this._getCheckBox() : '') +
				'</th>';
		},
		_getCheckBox: function (header) {
			return '<span name="' + (header === true ? 'hchk' : 'chk') + '" data-chk="off" data-role="checkbox" class="' +
				this.css.checkbox + '"' + (this.options.showCheckBoxesOnFocus === true && this._checkBoxesShown === false ?
						' style="visibility: hidden;"' : '') + '><span class="' + this.css.checkboxOff + '"></span></span>';
		},
		_getCurrentNumber: function (id) {
			var seed;
			if (id !== undefined && id !== null) {
				seed = id;
			} else {
				seed = ++this._cIdx;
			}
			return '<span class="ui-iggrid-rowselector-row-number">' +
				(seed + this.options.rowNumberingSeed + this._getStartingIndexForPage()) +
				'</span>';
		},
		_getStartingIndexForPage: function () {
			if (this._isPaging === false) {
				return 0;
			}
			return (this.grid.element.igGridPaging("pageIndex") * this.grid.element.igGridPaging("pageSize"));
		},
		_rsRenderVirtualRecords: function (event, ui) {
			var i = 0, rs;
			// every time records are rerendered we need to clean rendering flags
			this._cIdx = 0;
			this._vRsDom = [];
			// generate rs dom and prepend to rows
			for (i; i < ui.rows.length; i++) {
				rs = $(this._getRowSelectorCellMarkup());
				this._vRsDom.push(rs);
				rs.prependTo($(ui.rows[i]));
			}
			// register events
			this._registerCellEvents();
			if (this.options.enableCheckBoxes === true) {
				this._registerCheckBoxEvents();
			}
		},
		_rrn: function (event, args) {
			var rsDom = this._vRsDom, i = 0, sri = this.grid._startRowIndex;
			if (this.options.enableRowNumbering === true) {
				for (i = 0; i < rsDom.length; i++) {
					$(rsDom[i]).children("span.ui-iggrid-rowselector-row-number").text(sri + i + this.options.rowNumberingSeed + 1);
				}
			}
			if (!this._skipRefresh) {
				this._refreshSelection();
			}
		},
		_rcn: function (event, args) {
			var i = 0, st = this._index + 1;
			if (args.startColIndex !== 0) {
				// hides the seperate table rs col
				if (this.grid.options.fixedHeaders === true) {
					$("#" + this.grid.id() + "_headers colgroup:nth-child(" + st + ")").hide();
				}
				// hides the inner table rs col
				$("#" + this.grid.id() + " colgroup:nth-child(" + st + ")").hide();
				// hides the thead cells
				$("#" + this.grid.id() + " thead th[data-role='rs']").hide();
				// hides the tfoot cells
				$("#" + this.grid.id() + " tfoot th[data-role='rs']").hide();
				// hides the rs dom cells
				for (i; i < this._vRsDom.length; i++) {
					this._vRsDom[i].hide();
				}
			} else {
				// shows the seperate table rs col
				if (this.grid.options.fixedHeaders === true) {
					$("#" + this.grid.id() + "_headers colgroup:nth-child(" + st + ")").css("display", "");
				}
				// shows the inner table rs col
				$("#" + this.grid.id() + " colgroup:nth-child(" + st + ")").css("display", "");
				// shows the thead cells
				$("#" + this.grid.id() + " thead th[data-role='rs']").css("display", "");
				// shows the tfoot cells
				$("#" + this.grid.id() + " tfoot th[data-role='rs']").css("display", "");
				// shows the rs dom cells
				for (i; i < this._vRsDom.length; i++) {
					this._vRsDom[i].css("display", "");
				}
			}
		},
		_cSelectionChanged: function (event, ui) {
			var cells, cog = false;
			if (ui.owner.grid.id() !== this.grid.id()) {
				cog = true;
			}
			if (ui.selectedCells.length === 0 && this.grid._selectedCell) {
				cells = [ this.grid._selectedCell ];
			} else {
				cells = ui.selectedCells;
			}
			this._selectionChanged(this.grid._selectedRows, cells, cog);
			// hierarchical
			this._populateSelectionChanges();
		},
		_rSelectionChanged: function (event, ui) {
			var rows, cog = false;
			if (ui.owner.grid.id() !== this.grid.id()) {
				cog = true;
			}
			if (ui.selectedRows.length === 0 && this.grid._selectedRow) {
				rows = [ this.grid._selectedRow ];
			} else {
				rows = ui.selectedRows;
			}
			this._selectionChanged(rows, this.grid._selectedCells, cog);
			// hierarchical
			this._populateSelectionChanges();
		},
		_populateSelectionChanges: function () {
			var childGrids, childGrid, i, childRows, childRow, childCells, childCell;
			childGrids = $("table[id*='" + this.grid.id() + "_']");
			for (i = 0; i < childGrids.length; i++) {
				childGrid = $(childGrids[i]);
				childRows = childGrid.igGridSelection("selectedRows");
				childRow = childGrid.igGridSelection("selectedRow");
				childCells = childGrid.igGridSelection("selectedCells");
				childCell = childGrid.igGridSelection("selectedCell");
				if (childRows.length === 0 && childRow) {
					childRows = [ childRow ];
				}
				if (childCells.length === 0 && childCell) {
					childCells = [ childCell ];
				}
				if (childGrid.data().igGridRowSelectors !== undefined) {
					childGrid.data().igGridRowSelectors._selectionChanged(childRows, childCells, false);
				}
			}
		},
		_selectionChanged: function (selRows, selCells, selectedOtherGrid) {
			var i, rowSelector, checkboxes;
			this._clearRowSelectorsSelection();
			if (this.options.enableCheckBoxes === true) {
				this._clearRowSelectorsCheckboxes();
				this._pSelection[this._cpIdx] = {};
			}
			if (selectedOtherGrid === true) {
				return;
			}
			if (this._checkBoxesShown === false && this.options.showCheckBoxesOnFocus === true) {
				this._animateCheckboxes(true);
			}
			for (i = 0; i < selRows.length; i++) {
				rowSelector = $($(selRows[i].element).children()[this._index]);
				if (rowSelector.hasClass("ui-iggrid-selectedcell ui-state-active") === false) {
					rowSelector.addClass("ui-iggrid-selectedcell ui-state-active");
				}
				if (this.options.enableCheckBoxes === true) {
					checkboxes = $($(selRows[i].element)).children().find("span[name='chk']");
					this._alterCheckbox(checkboxes, true);
					this._pSelection[this._cpIdx][selRows[i].index] = true;
				}
			}
			for (i = 0; i < selCells.length; i++) {
				rowSelector = $($(selCells[i].element).parent().children()[this._index]);
				if (rowSelector.hasClass("ui-iggrid-selectedcell ui-state-active") === false) {
					rowSelector.addClass("ui-iggrid-selectedcell ui-state-active");
				}
			}
			this._updateHeader();
		},
		_refreshSelection: function () {
			var srs, scs, rIdx, rs, i, checkboxes, cb;
			// clears selection
			this._clearRowSelectorsSelection(false);
			// clears cb selection
			if (this.options.enableCheckBoxes === true) {
				checkboxes = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]').attr("data-chk", "off");
				checkboxes
					.children("span")
					.removeClass(this.css.checkboxOn)
					.addClass(this.css.checkboxOff);
			}
			if (this.grid._selectedRows.length === 0 && this.grid._selectedRow) {
				srs = [ this.grid._selectedRow ];
			} else {
				srs	= this.grid._selectedRows;
			}
			if (this.grid._selectedCells.length === 0 && this.grid._selectedCell) {
				scs = [ this.grid._selectedCell ];
			} else {
				scs	= this.grid._selectedCells;
			}
			// reapplies row selection
			for (i = 0; i < srs.length; i++) {
				rIdx = srs[i].index - this.grid._startRowIndex;
				if (rIdx >= 0 && rIdx < this._vRsDom.length) {
					rs = this._vRsDom[rIdx];
					if (rs.hasClass("ui-iggrid-selectedcell ui-state-active") === false) {
						rs.addClass("ui-iggrid-selectedcell ui-state-active");
					}
					if (this.options.enableCheckBoxes === true) {
						cb = rs.find("span[name='chk']");
						this._alterCheckbox(cb, true);
						cb.closest("tr").children().addClass("ui-iggrid-selectedcell ui-state-active");
					}
				}
			}
			// reapplies cell selection
			for (i = 0; i < scs.length; i++) {
				rIdx = scs[i].rowIndex - this.grid._startRowIndex;
				if (rIdx >= 0 && rIdx < this._vRsDom.length) {
					rs = this._vRsDom[rIdx];
					if (rs.hasClass("ui-iggrid-selectedcell ui-state-active") === false) {
						rs.addClass("ui-iggrid-selectedcell ui-state-active");
					}
				}
			}
			// reapplies checkbox selection
			if (this.options.enableCheckBoxes === true && this._pSelection[this._cpIdx]) {
				checkboxes = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]')
					.attr("data-chk", "off");
				checkboxes
					.children("span")
					.removeClass(this.css.checkboxOn)
					.addClass(this.css.checkboxOff);
				for (i = this.grid._startRowIndex; i < this.grid._startRowIndex + checkboxes.length; i++) {
					if (this._pSelection[this._cpIdx][i]) {
						cb = $(checkboxes[i - this.grid._startRowIndex]);
						if (this._pSelection[this._cpIdx][i] === true) {
							this._alterCheckbox(cb, true);
							cb.closest("tr").children().addClass("ui-iggrid-selectedcell ui-state-active");
						}
					}
				}
			}
		},
		_clearSelection: function (evt, ui) {
			if (ui.owner.id() === this.grid.id()) {
				this._clearRowSelectorsSelection();
				this._clearRowSelectorsCheckboxes();
			}
			if (!ui.uiDirty || ui.uiDirty === false) {
				this._pSelection[this._cpIdx] = {};
			}
		},
		_clearRowSelectorsSelection: function () {
			var selectors, i;
			selectors = $("#" + this.grid.id() + ">tbody>tr>th." + this.css.rowSelectorCssClass);
			for (i = 0; i < selectors.length; i++) {
				$(selectors[i]).removeClass("ui-iggrid-selectedcell ui-state-active");
			}
			this._index = $(selectors[0]).index();
		},
		_clearRowSelectorsCheckboxes: function () {
			var cbs, $cbs, i;
			cbs = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]');
			for (i = 0; i < cbs.length; i++) {
				$cbs = $(cbs[i]);
				if ($cbs.attr("data-chk") === "on") {
					this._alterCheckbox($cbs, false);
				}
			}
			if (cbs.length > 0) {
				this._updateHeader();
			}
		},
		_cellClick: function (event, ui) {
			var args, rCell = $(event.target).closest("th"), rRow = rCell.parent(),
				rIdx = this._getVisibleRowIndex(rRow), rKey = rRow.attr("data-id");
			// Updating draws in the first cell. If it is the Row Selector cell unwanted events
			// are going to be thrown.
			if (this.options.showCheckBoxesOnFocus === true && this._checkBoxesShown === false) {
				this._animateCheckboxes(true);
			}
			if ($(event.target).is("span") && $(event.target).attr("unselectable")) {
				return;
			}
			if (rKey === "" || rKey === null || rKey === undefined) {
				rKey = rIdx;
			}
			args = {
				row: rRow,
				rowIndex: rIdx,
				rowKey: rKey,
				rowSelector: rCell,
				owner: this,
				grid: this.grid
			};
			this._triggerClickEvent(args);
		},
		_mouseHoverRow: function (event, ui) {
			var par, tag, tr = event.target;
			while (tr) {
				par = tr.parentNode;
				if ((tag = tr.nodeName) === 'TR' && par.nodeName === 'TBODY') {
					break;
				}
				tr = (tag === 'TABLE') ? null : par;
			}
			if (this._hovTR !== tr) {
				if (this._hovTR && $(this._hovTR).attr('data-container') !== "true") {
					$('th.' + this.css.rowSelectorCssClass, this._hovTR).removeClass(this.css.nodeHovered);
				}
				if (tr && $(tr).attr('data-container') !== "true") {
					$('th.' + this.css.rowSelectorCssClass, tr).addClass(this.css.nodeHovered);
				}
				this._hovTR = tr;
			}
		},
		_mouseLeaveRow: function (event, ui) {
			if (this._hovTR) {
				$('th', this._hovTR).removeClass(this.css.nodeHovered);
				this._hovTR = null;
			}
		},
		_triggerClickEvent: function (args) {
			this._trigger(this.events.rowSelectorClicked, this, args);
		},
		_triggerCheckingEvent: function (args) {
			return this._trigger(this.events.checkBoxStateChanging, this, args);
		},
		_triggerCheckedEvent: function (args) {
			this._trigger(this.events.checkBoxStateChanged, this, args);
		},
		_pageIndexChanging: function (event, ui) {
			if (ui.owner.grid.id() !== this.grid.id()) {
				return;
			}
			this._isPaging = true;
			this._cIdx = 0;
		},
		_pageIndexChanged: function (event, ui) {
			var self = this, idx = ui.pageIndex, checkboxes, iKey, cb;
			if (ui.owner.grid.id() !== this.grid.id()) {
				return;
			}
			this._cpIdx = idx;
			if (this._pSelection[idx] !== undefined && this._pSelection[idx] !== null) {
				checkboxes = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]');
				$.each(this._pSelection[idx], function (key, value) {
					if (self._pSelection[idx][key] === true) {
						iKey = parseInt(key, 10);
						cb = $(checkboxes[iKey]);
						self._alterCheckbox(cb, true);
						self.grid.element.igGridSelection("selectRow", cb.closest("tr").index());
					}
				});
			}
			if (this.options.enableCheckBoxes === true) {
				this._updateHeader();
			}
		},
		_getVisibleRowIndex: function (row) {
			return row.closest("tbody")
				.children("tr:not([data-container='true'],[data-grouprow='true'])")
				.index(row);
		},
		_getVisibleHRowIndex: function (row) {
			return row.closest("tbody")
				.children("tr:not([data-container='true'])")
				.index(row);
		},
		_animateCheckboxes: function (trans) {
			var h = $('#' + this.grid.id() + (this.grid.options.fixedHeaders === true ? '_headers' : '') + '>thead>tr>th span[name="hchk"]'),
				c = $('#' + this.grid.id() + '>tbody>tr>th span[name="chk"]'),
				all = h.add(c);
			if (trans === true) {
				all.css("visibility", "visible").css("opacity", 0).animate({opacity: 1}, 1000);
			} else {
				all.css("opacity", 1000).animate({opacity: 0}, 1000, function () { $(this).css("visibility", "hidden"); });
			}
			this._checkBoxesShown = trans;
		},
		_newRowAdded: function (event, ui) {
			this._unregisterCellEvents();
			this._registerCellEvents();
			if (this.options.enableCheckBoxes === true) {
				this._registerCheckBoxEvents();
			}
		},
		_cleanSelection: function (event, ui) {
			var header;
			header = $('#' + this.grid.id() + (this.grid.options.fixedHeaders === true ? '_headers' : '') + '>thead>tr>th span[name="hchk"]');
			this._alterCheckbox(header, false);
			this._pSelection = {};
		},
		_resetIndexing: function () {
			this._cIdx = 0;
		},
		_cleanInterface: function (isRebind) {
			var header, footer, cols, rsCells;
			// the function cleans all or some of the row selectors interface depending on context
			if (isRebind === true) {
				header = $('#' + this.grid.id() + (this.grid.options.fixedHeaders === true ? '_headers' : '') + '>thead>tr>th span[name="hchk"]');
				this._alterCheckbox(header, false);
				return;
			}
			cols = $("#" + this.grid.id() + " col[data-role='rs']");
			if (this.grid.options.fixedHeaders === true) {
				cols = cols.add("#" + this.grid.id() + "_headers col[data-role='rs']");
			}
			if (this.grid.options.fixedFooters === true) {
				cols = cols.add("#" + this.grid.id() + "_footers col[data-role='rs']");
			}
			footer = $("#" + this.grid.id() + (this.grid.options.fixedFooters === true ? '_footers' : '') + " td[data-role='rs']");
			header = $("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? '_headers' : '') + " th[data-role='rs']");
			rsCells = $("#" + this.grid.id() + " th.ui-iggrid-rowselector-class");
			cols.remove();
			footer.remove();
			header.remove();
			rsCells.remove();
		},
		_checkForSelection: function () {
			var i, isSelection = false;
			for (i = 0; i < this.grid.options.features.length; i++) {
				if (this.grid.options.features[i].name === "Selection") {
					isSelection = true;
					break;
				}
			}
			if (isSelection === false) {
				if (this.options.requireSelection === true) {
					throw new Error($.ig.GridRowSelectors.locale.selectionNotLoaded);
				} else {
					this._skipRefresh = true;
				}
			}
		},
		_createHandlers: function () {
			this._headerRenderedHandler = $.proxy(this._headerRendered, this);
			this._footerRenderedHandler = $.proxy(this._footerRendered, this);
			this._recordsRenderingHandler = $.proxy(this._recordsRendering, this);
			this._recordsRenderedHandler = $.proxy(this._recordsRendered, this);
			this._gridRenderedHandler = $.proxy(this._gridRendered, this);
			this._cellSelectionChangedHandler = $.proxy(this._cSelectionChanged, this);
			this._rowSelectionChangedHandler = $.proxy(this._rSelectionChanged, this);
			this._clearSelectionHandler = $.proxy(this._clearSelection, this);
			this._virtualDomBuiltHandler = $.proxy(this._rsRenderVirtualRecords, this);
			this._virtualRowsHandler = $.proxy(this._rrn, this);
			this._virtualColumnsHandler = $.proxy(this._rcn, this);
			this._pageIndexChangingHandler = $.proxy(this._pageIndexChanging, this);
			this._pageIndexChangedHandler = $.proxy(this._pageIndexChanged, this);
			this._groupedColumnsChangingHandler = $.proxy(this._resetIndexing, this);
			this._renderExtraHeaderCellHandler = $.proxy(this._renderExtraHeaderCells, this);
			this._renderExtraFooterCellHandler = $.proxy(this._renderExtraFooterCells, this);
			this._rsClickHandler = $.proxy(this._cellClick, this);
			this._rrHoverHandler = $.proxy(this._mouseHoverRow, this);
			this._rrLeaveHandler = $.proxy(this._mouseLeaveRow, this);
			this._newRowAddedHandler = $.proxy(this._newRowAdded, this);
			this._cleanHandler = $.proxy(this._cleanSelection, this);
			if (this.options.enableCheckBoxes === true) {
				this._checkboxMouseOverHandler = $.proxy(this._checkboxMouseOver, this);
				this._checkboxMouseOutHandler = $.proxy(this._checkboxMouseOut, this);
				this._checkboxClickHandler = $.proxy(this._checkBoxClicked, this);
				this._hCheckboxClickHandler = $.proxy(this._headerCheckBoxClicked, this);
			}
		},
		_registerEvents: function () {
			// these handle rendering of non-virtual grids
			this.grid.element.bind('iggridheaderrendered', this._headerRenderedHandler);
			this.grid.element.bind('iggridfooterrendered', this._footerRenderedHandler);
			this.grid.element.bind('iggridrowsrendering', this._recordsRenderingHandler);
			this.grid.element.bind('iggridrowsrendered', this._recordsRenderedHandler);
			this.grid.element.bind('iggriddatarendered', this._gridRenderedHandler);
			// these handle rendering of virtual grid
			this.grid.element.bind('iggridvirtualdombuilt', this._virtualDomBuiltHandler);
			this.grid.element.bind('iggridvirtualrecordsrender', this._virtualRowsHandler);
			this.grid.element.bind('iggridvirtualhorizontalscroll', this._virtualColumnsHandler);
			// these handle changing of row selectors selection state
			this.grid.element.bind('iggridselectioncellselectionchanged', this._cellSelectionChangedHandler);
			this.grid.element.bind('iggridselectionrowselectionchanged', this._rowSelectionChangedHandler);
			this.grid.element.bind('iggridselectioninternalrowselectionchanged', this._rowSelectionChangedHandler);
			this.grid.element.bind('iggridselectionselectioncleared', this._clearSelectionHandler);
			// these handle paging row selector generation
			this.grid.element.bind('iggridpagingpageindexchanging', this._pageIndexChangingHandler);
			this.grid.element.bind('iggridpagingpageindexchanged', this._pageIndexChangedHandler);
			// these handle cleaning checkbox selection on specific events
			this.grid.element.bind('iggridpagingpagesizechanged', this._cleanHandler);
			this.grid.element.bind('iggridfilteringdatafiltered', this._cleanHandler);
			this.grid.element.bind('iggridgroupbygroupedcolumnschanged', this._cleanHandler);
			this.grid.element.bind('iggriduidirty', this._cleanHandler);
			// these handle index reset events
			this.grid.element.bind('iggridgroupbygroupedcolumnschanging', this._groupedColumnsChangingHandler);
			// this handles new row updating row selector generation
			this.grid.element.bind('iggridupdatingrowadded', this._newRowAddedHandler);
		},
		_unregisterEvents: function () {
			this.grid.element.unbind('iggridheaderrendered', this._headerRenderedHandler);
			this.grid.element.unbind('iggridfooterrendered', this._footerRenderedHandler);
			this.grid.element.unbind('iggridrowsrendering', this._recordsRenderingHandler);
			this.grid.element.unbind('iggridrowsrendered', this._recordsRenderedHandler);
			this.grid.element.unbind('iggriddatarendered', this._gridRenderedHandler);
			this.grid.element.unbind('iggridvirtualdombuilt', this._virtualDomBuiltHandler);
			this.grid.element.unbind('iggridvirtualrecordsrender', this._virtualRowsHandler);
			this.grid.element.unbind('iggridvirtualhorizontalscroll', this._virtualColumnsHandler);
			this.grid.element.unbind('iggridselectioncellselectionchanged', this._cellSelectionChangedHandler);
			this.grid.element.unbind('iggridselectionrowselectionchanged', this._rowSelectionChangedHandler);
			this.grid.element.unbind('iggridselectioninternalrowselectionchanged', this._rowSelectionChangedHandler);
			this.grid.element.unbind('iggridselectioncleared', this._clearSelectionHandler);
			this.grid.element.unbind('iggridpagingpageindexchanging', this._pageIndexChangingHandler);
			this.grid.element.unbind('iggridpagingpageindexchanged', this._pageIndexChangedHandler);
			this.grid.element.unbind('iggridpagingpagesizechanged', this._cleanHandler);
			this.grid.element.unbind('iggridfilteringdatafiltered', this._cleanHandler);
			this.grid.element.unbind('iggridgroupbygroupedcolumnschanged', this._cleanHandler);
			this.grid.element.unbind('iggriduidirty', this._cleanHandler);
			this.grid.element.unbind('iggridgroupbygroupedcolumnschanging', this._groupedColumnsChangingHandler);
			this.grid.element.unbind('iggridupdatingrowadded', this._newRowAddedHandler);
		},
		_injectGrid: function (gridInstance, isRebind) {
			if (isRebind === true) {
				this._cleanInterface(true);
				return;
			}
			var self = this;
			this.grid = gridInstance;
			this._v = (this.grid.options.virtualization === true || this.grid.options.rowVirtualization === true) &&
				(this.grid.options.virtualizationMode !== "continuous");
			this._flatRenderColgroup = this.grid._renderColgroup;
			this._createHandlers();
			// adds cells rendering logic for other features
			this.grid._headerInitCallbacks.push({type: "RowSelectors", func: this._renderExtraHeaderCellHandler});
			this.grid._footerInitCallbacks.push({type: "RowSelectors", func: this._renderExtraFooterCellHandler});
			this._registerEvents();
			// register for colgroup creation
			this.grid._renderColgroup = function () {
				if (self._flatRenderColgroup !== undefined) {
					self._rsRenderColgroup.apply(self.grid, $.merge([self._flatRenderColgroup, self], arguments));
				}
			};
			this._checkForSelection();
		}
	});
	$.extend($.ui.igGridRowSelectors, {version: '12.2.20122.1021'});
}(jQuery));
