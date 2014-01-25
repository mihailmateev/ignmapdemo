/*!
 * Infragistics.Web.ClientUI Grid Sorting 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */

/*global jQuery */
if (typeof (jQuery) !== "function") {
	throw new Error("jQuery is undefined");
}

(function ($) {
    // we will define a new widget for sorting. That kind of widget is completely independent one and doesn't subclass the grid 
    // it subscribes to grid events such as BodyRendering/BodyRendered, and has the grid instance (igGrid) injected into it
    // for sorting the this.element[0] will be the TR hosting the <TH>s 
    $.widget("ui.igGridSorting", {
		/* igGridSorting widget -  The widget is pluggable to the element where the grid is instantiated and the actual igGrid object doesn't know about this
			the sorting widget just attaches its functionality to the grid
			it supports single and multiple column sorting, with predefined sorting settings specified on a per column basis
			the sorted column headers have spefific appearance and icons applied based on the current sorting condition applied, also the column cells can receive special styling (configurable)
			the widget also implements has full keyboard support with the TAB , SPACE/ENTER keys. 
		*/
	    css: {
			/* classes applied to a sortable column header */
			"sortableColumnHeader": "ui-iggrid-sortableheader ui-state-default",
			/* classes appied to a sortable header when it's active (navigated with keyboard / clicked) */
			"sortableColumnHeaderActive": "ui-iggrid-sortableheaderactive ui-state-active",
			/* classes applied to a sortable column header when it is hovered */
			"sortableColumnHeaderHover": "ui-iggrid-sortableheaderhover ui-state-hover",
			/* classes applied to the sortable column header when it has focus */
			"sortableColumnHeaderFocus": "ui-iggrid-sortableheaderfocus ui-state-focus",
			/* classes applied to a column header when it's sorted ascending */
			"ascendingColumnHeader": "ui-iggrid-colheaderasc",
			/* classes applied to a column header when it's sorted descending */
			"descendingColumnHeader": "ui-iggrid-colheaderdesc",
			/* classes applied to a column's cells when it's sorted ascending */
			"ascendingColumn": "ui-iggrid-colasc ui-state-highlight",
			/* classes applied to a column's cells when it's sorted descending */
			"descendingColumn": "ui-iggrid-coldesc ui-state-highlight",
			/* classes applied to the sorting indicator SPAN rendered inside the column header */
			"sortIndicator": "ui-iggrid-colindicator",
			/* classes applied to the sorting indicator span when it's in ascending state */
			"sortIndicatorAscending": "ui-iggrid-colindicator-asc ui-icon ui-icon-arrowthick-1-n",
			/* classes applied to the sorting indicator span when it's in descending state */
			"sortIndicatorDescending": "ui-iggrid-colindicator-desc ui-icon ui-icon-arrowthick-1-s",
			/* classes applied to container of sorted columns in multiple sorting dialog */
			"dialogSortedColumns": "ui-iggrid-sorting-dialog-sortedcolumns",
			/* classes applied to container of unsorted columns in multiple sorting dialog */
			"dialogUnsortedColumns": "ui-iggrid-sorting-dialog-unsortedcolumns",
			/* classes applied to sort button for each colum in multiple sorting dialog */
			"dialogUnsortedColumnsSortByButton": "ui-iggrid-sorting-dialog-unsortedcolumns-sortbybutton",
			/* classes applied to ascending/descending button in multiple sorting dialog */
			"dialogAsdDescButton": "ui-iggrid-sorting-dialog-ascdescbutton",
			/* classes applied to sort by button in multiple sorting dialog */
			"modalDialogSortByColumn": "ui-iggrid-sorting-dialog-sortbybutton",
			/* classes applied to list item for each sorted column in multiple sorting dialog */
			"dialogSortedColumnsItem": "ui-widget-content",
			/* classes applied to list item for each unsorted column in multiple sorting dialog */
			"dialogUnsortedColumnsItem": "ui-widget-content",
			/* classes applied to ascending button for sorted column in multiple sorting dialog */
			"dialogButtonAsc": "ui-button ui-corner-all ui-button-icon-only ig-sorting-indicator",
			/* classes applied to ascending button icon for sorted column in multiple sorting dialog */
			"dialogButtonAscIcon": 'ui-button-icon-primary ui-icon ui-icon-arrowthick-1-n',
			/* classes applied to descending button icon for sorted column in multiple sorting dialog */
			"dialogButtonDesc": "ui-button ui-corner-all ui-button-icon-only ig-sorting-indicator",
			/* classes applied to descending button icon for sorted column in multiple sorting dialog */
			"dialogButtonDescIcon": 'ui-button-icon-primary ui-icon ui-icon-arrowthick-1-s',
			/* classes applied to remove sorting button for sorted column in multiple sorting dialog */
			"dialogButtonUnsort": "ui-iggrid-sorting-dialog-sortbybuttons ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-igbutton ui-widget-content ui-igbutton-remove",
			/* classes applied to remove sorting button for sorted column in multiple sorting dialog */
			"dialogButtonUnsortContainer": "ui-button-icon-primary ui-icon ui-icon-circle-close",
			/* classes applied to container which holds sorted column name in multiple sorting dialog */
			"dialogSortedColumnTextContainer": "ui-iggrid-dialog-text",
			/* classes applied to container which holds unsorted column name in multiple sorting dialog */
			"dialogItemText": "ui-iggrid-dialog-text",
//			"dialogButtonSlide": "ui-iggrid-sorting-dialog-button-slide ui-button ui-widget ui-state-default ui-corner-bottom ui-button-icon-only",
//			"dialogButtonSlideContainer": "ui-button-icon-primary ui-icon ui-icon-triangle-1-n",
//			"dialogButtonSlideUp": "ui-icon-triangle-1-s",
//			"dialogSlideArea": "ui-iggrid-multiplesorting-dialog-slide ui-widget-content",
//			"dialogSlideAreaContainer": "ui-iggrid-multiplesorting-dialog-slide-button-container",
			/* classes applied to hovered buttons - e.g. unsort button in multiple sorting dialog */
			"dialogButtonsHover": "ui-state-hover",
			/* Classes applied to the feature chooser icon to show multiple sorting dialog */
			"featureChooserModalDialogIcon": "ui-icon ui-icon-newwin"
		},
	    options: {
			/* type="remote|local" Defines local or remote sorting.
            remote type="string"
            local type="string"
            */
			type: null,
			/* type="bool" Case sensitivity of the sorting */
			caseSensitive: false,
			/* type="true|false" Enables/disables special styling for sorted columns.
                true type="bool"
                false type="bool" sorted column cells will not have any special sort-related styling
            */
			applySortedColumnCss: true,
			/* type="string" URL param name which specifies how sorting expressions will be encoded in the URL. Uses OData conventions. ex: ?sort(col1)=asc */
			sortUrlKey: null,
			/* type="string" URL param value for ascending type of sorting. Uses OData conventions. Example: ?sort(col1)=asc */
			sortUrlKeyAscValue: null,
			/* type="string" URL param value for descending type of sorting. Uses OData conventions */
			sortUrlKeyDescValue: null,
			/* type="single|multi" Defines single column sorting or multiple column sorting.
            single type="string"
            multi type="string" if enabled, previous sorted state for columns won't be cleared 
            */
			mode: "single",
			/* type="function" custom sort function accepting three parameters - the data to be sorted, an array of data source field definitions, and the direction to sort with (optional). The function should return the sorted data array */
			customSortFunction: null,
			/* type="ascending|descending" Specifies which direction to use on the first click / keydown, if the column hasn't been sorted before 
            ascending type="string"
            descending type="string"
            */
			firstSortDirection: 'ascending',
			/* type="string" custom sorted column tooltip in jQuery templating format */
			sortedColumnTooltip: $.ig.GridSorting.locale.sortedColumnTooltipFormat,
			/* type="bool" Specifies whether sorting to be applied immediately when click sort/unsort columns in multiple sorting dialog. When it is false Apply button shows and sorting is applied when the button is clicked */
			modalDialogSortOnClick: false,
			/* type="string" Specifies sortby button text for each unsorted column in multiple sorting dialog */
			modalDialogSortByButtonText: $.ig.GridSorting.locale.modalDialogSortByButtonText,
			/* type="string" Specifies sortby button label for each unsorted column in multiple sorting dialog */
			modalDialogResetButtonLabel: $.ig.GridSorting.locale.modalDialogResetButton,
			/* type="string" Specifies caption for each descending sorted column in multiple sorting dialog */
			modalDialogCaptionButtonDesc: $.ig.GridSorting.locale.modalDialogCaptionButtonDesc,
			/* type="string" Specifies caption for each ascending sorted column in multiple sorting dialog */
			modalDialogCaptionButtonAsc: $.ig.GridSorting.locale.modalDialogCaptionButtonAsc,
			/* type="string" Specifies caption for unsort button in multiple sorting dialog */
			modalDialogCaptionButtonUnsort: $.ig.GridSorting.locale.modalDialogCaptionButtonUnsort,
			//dialogButtonSlideCaption: $.ig.GridSorting.locale.modalDialogButtonSlideCaption,
			/* type="number" Specifies width of multiple sorting dialog */
			modalDialogWidth: 350,
			/* type="number" Specifies height of multiple sorting dialog */
			modalDialogHeight: '',
			/* type="number" Specifies time of milliseconds for animation duration to show/hide modal dialog */
			modalDialogAnimationDuration: 200,
			/* type="string" Specifies text in feature chooser */
			featureChooserText: $.ig.GridSorting.locale.featureChooserText,
			/* type="string" custom unsorted column tooltip in jQuery templating format */
			unsortedColumnTooltip: $.ig.GridSorting.locale.unsortedColumnTooltip,
			/* type="array" a list of custom column settings that specify custom sorting settings for a specific column (whether sorting is enabled / disabled, default sort direction, first sort direction, etc.) */
			columnSettings: [
				{
					/* type="string" column key. Either key or index must be set in every column setting */
					columnKey: null,
					/* type="number" column index. Either key or index must be set in every column setting */
					columnIndex: null,
					/* type="asc|desc" This will be the first sort direction when the column hasn't been sorted before 
                    asc type="string"
                    desc type="string"
                    */
					firstSortDirection: null,
					/* type="asc|desc" The current (or default) sort direction. If this setting is specified, the column will be rendered sorted according to this option. 
                    asc type="string"
                    desc type="string"
                    */
					currentSortDirection: null,
					/* type="bool" enables / disables sorting on the specified column. By default all columns are sortable */
					allowSorting: true
				}
			],
			/* type="string" Specifies caption text for multiple sorting dialog */
			modalDialogCaptionText: $.ig.GridSorting.locale.modalDialogCaptionText,
			/* type="string" Specifies text of button which apply changes in modal dialog */
			modalDialogButtonApplyText: $.ig.GridSorting.locale.modalDialogButtonApplyText,
			/* type="string" Specifies text of button which cancel changes in modal dialog */
			modalDialogButtonCancelText: $.ig.GridSorting.locale.modalDialogButtonCancelText

	    },
		renderInFeatureChooser: true,
		events: {
			/* cancel="true" Event fired before sorting is invoked for a certain column.
			Return false in order to cancel column sorting.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSorting.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.columnKey to get column key.
			Use ui.direction to get sorting direction.
			*/
			columnSorting: "columnSorting",
			/* cancel="false" Event fired after the column has already been sorted and data - re-rendered.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSorting.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.columnKey to get column key.
			Use ui.direction to get sorting direction.
			*/
			columnSorted: "columnSorted",
			/* cancel="true" event fired before the modal dialog is opened.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.columnChooserElement to get a reference to the modal dialog element. This is a jQuery object.
			*/
			modalDialogOpening: "modalDialogOpening",
			/* event fired after the modal dialog is already opened.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			*/
			modalDialogOpened: "modalDialogOpened",
			/* event fired every time the modal dialog changes its position.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			Use ui.originalPosition to get the original position of the modal dialog div as { top, left } object, relative to the page.
			Use ui.position to get the current position of the modal dialog div as { top, left } object, relative to the page.
			*/
			modalDialogMoving: "modalDialogMoving",
			/* cancel="true" event fired before the modal dialog is closed.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			*/
			modalDialogClosing: "modalDialogClosing",
			/* event fired after the modal dialog has been closed.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			*/
			modalDialogClosed: "modalDialogClosed",
			/* cancel="true" event fired before the contents of the modal dialog are rendered.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			*/
			modalDialogContentsRendering: "modalDialogContentsRendering",
			/* event fired after the contents of the modal dialog are rendered.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			*/
			modalDialogContentsRendered: "modalDialogContentsRendered",
			/* cancel="true" event fired when sorting of column is changed in modal dialog. Column should be sorted
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			Use ui.columnKey to get the column key
			Use ui.isAsc to get whether column should be ascending or not. If true it should be ascending
			*/
			modalDialogSortingChanged: "modalDialogSortingChanged",
			/* cancel="true" event fired when button to unsort column is clicked in modal dialog
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			Use ui.columnKey to get the column key
			*/
			modalDialogButtonUnsortClick: "modalDialogButtonUnsortClick",
			/* cancel="true" event fired when column(which is not sorted) is clicked to be sorted in modal dialog
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			Use ui.columnKey to get the column key
			*/
			modalDialogSortClick: "modalDialogSortClick",
			/* cancel="true" event fired when button Apply in modal dialog is clicked
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			Use ui.columnsToSort to get array of columns which should be sorted - array of objects of sort order - Asc/Desc and columnIdentifier
			*/
			modalDialogButtonApplyClick: "modalDialogButtonApplyClick",
			/* cancel="true" event fired when the button to reset sorting is clicked. 
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridSorting widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.modalDialogElement to get a reference to the modal dialog element. This is a jQuery object.
			*/
			modalDialogButtonResetClick: "modalDialogButtonResetClick"
		},
		_createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			this.options.columnSettings = [];
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
	    _create: function () {
			var self = this;
			this._headers = [];
			this._clickHandler = function (event) {
				var th, id;
				// A.T. 12 Sept. Fix for bug #87042
				id = $(event.target).closest(".ui-iggrid").attr("id").replace("_container", "");
				if (self.grid.element.attr("id") !== id) {
					return;
				}
				th = $(event.currentTarget).closest('th');
				if (th.attr("data-skip") !== "true" && (self.grid._isMultiColumnGrid !== true || th.attr("data-isheadercell") === "true")) {
					th.find('a').focus();
					self._handleSort(event);
					// sync the grid's scrollbar if the grid has width
					// check if there is a scrollLeft
					if ($('#' + self.grid.id() + '_hscroller').scrollLeft() > 0 && self.grid.options.fixedHeaders === true) {
						//set the new scrollLeft to the one of the header
						self.grid.headersTable().parent().scrollLeft($('#' + self.grid.id() + '_hscroller').scrollLeft());
					}
				}
			};
			this._dragStartHandler = function (event) {
				var id, noCancel = true;
				noCancel = self.grid._trigger("headercelldragcancel", event, {});
				if (noCancel) {
					id = $(event.target).closest(".ui-iggrid").attr("id").replace("_container", "");
					if (self.grid.element.attr("id") !== id) {
						return;
					}
					event.stopPropagation();
					event.preventDefault();
				} else {
					return true;
				}
				return false;
			};
			this._mouseOverHandler = function (event) {
				var id, $target = $(event.currentTarget), cs;
				id = $(event.target).closest(".ui-iggrid").attr("id").replace("_container", "");
				if (self.grid.element.attr("id") !== id) {
					return;
				}
				// check if the column is sortable
				cs = self._getColSettingFromElement(event.currentTarget);
				if (cs && cs.allowSorting !== false) {
					$target.addClass(self.css.sortableColumnHeaderHover);
				}
			};
			this._mouseOutHandler = function (event) {
				var id;
				id = $(event.target).closest(".ui-iggrid").attr("id").replace("_container", "");
				if (self.grid.element.attr("id") !== id) {
					return;
				}
				$(event.currentTarget).removeClass(self.css.sortableColumnHeaderHover);
			};
		    // bind events - we assume the <tr> holding the <th>s is already there
		    $('#' + this.element[0].id).delegate("thead th", {
			    click: this._clickHandler,
				//A.T. 21 Jan 2011 - Fix for bug #63737 - Droping a column in the filter row area results in displaying "javascript:void(0)" in the filter area
				//dragstart: this._dragStartHandler,
				mouseover: this._mouseOverHandler,
				mouseout: this._mouseOutHandler
		    });
			$('#' + this.element[0].id + ' thead th').bind("dragstart", this._dragStartHandler);
			$('#' + this.element[0].id + '_headers thead th').bind("dragstart", this._dragStartHandler);
			$(document).delegate("#" + this.element[0].id + "_headers thead th", {
			    click: this._clickHandler,
				//A.T. 21 Jan 2011 - Fix for bug #63737 - Droping a column in the filter row area results in displaying "javascript:void(0)" in the filter area
				//dragstart: this._dragStartHandler,
				mouseover: this._mouseOverHandler,
				mouseout: this._mouseOutHandler
		    });
			this._keyDownHandler = function (event) {
				self._handleSortKb(event);
			};
			this._focusHandler = function (event) {
				self._handleFocusKb(event);
			};
			this._blurHandler = function (event) {
				self._handleBlurKb(event);
			};
			// M.H. 22 March 2012 Fix for bug #105757
			$('#' + this.element[0].id).delegate("thead th a:not([th-remove-focus])", {
				keydown: this._keyDownHandler,
				focus: this._focusHandler,
				blur: this._blurHandler
			});
			// M.H. 22 March 2012 Fix for bug #105757
			$(document).delegate("#" + this.element[0].id + "_headers thead th a:not([th-remove-focus])", {
				keydown: this._keyDownHandler,
				focus: this._focusHandler,
				blur: this._blurHandler
			});
		},
		_setOption: function (key, value) {
			var i, col, featureChooserInstance, modalDialog = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog');
			// M.H. 20 March 2012 Fix for bug #105270
		    // handle new settings and update options hash
			$.Widget.prototype._setOption.apply(this, arguments);
			switch (key) {
			case 'type':
				// start by throwing an error for the options that aren't supported:
				throw new Error($.ig.Grid.locale.optionChangeNotSupported + ' ' + key);
			case 'caseSensitive':
				// reinitialize data source setting
				//A.T. 12 Feb 2011 - Fix for #66143 - igSorting caseSensitive option doesn't change case sensitivity
				this.grid.dataSource.settings.sorting.caseSensitive = this.options.caseSensitive;
				break;
			case 'modalDialogSortOnClick':
				modalDialog.remove();
				this._renderMultipleSortingDialog();
				break;
			case 'modalDialogAnimationDuration':
				modalDialog.igGridModalDialog('option', 'animationDuration', value);
				break;
			case 'modalDialogWidth':
				modalDialog.igGridModalDialog('option', 'modalDialogWidth', value);
				break;
			case 'modalDialogHeight':
				modalDialog.igGridModalDialog('option', 'modalDialogHeight', value);
				break;
			case 'modalDialogButtonApplyText':
				modalDialog.igGridModalDialog('option', 'buttonApplyText', value);
				break;
			case 'modalDialogButtonCancelText':
				modalDialog.igGridModalDialog('option', 'buttonCancelText', value);
				break;
			case 'modalDialogCaptionText':
				modalDialog.igGridModalDialog('option', 'modalDialogCaptionText', value);
				break;
			case 'featureChooserText':
				featureChooserInstance = this.grid.element.data('igGridFeatureChooser');
				if (featureChooserInstance) {
					for (i = 0; i < this.grid.options.columns.length; i++) {
						col = this.grid.options.columns[i].key;
						featureChooserInstance._setListItemText(col, 'Sorting', value);
					}
				}
				break;
			default:
				break;
			}
	    },
		_getColSettingFromElement: function (e) {
			var index, cs = this.options.columnSettings, $e = $(e);
			index = parseInt($e.data('columnIndex'), 10);
			return cs[index];
		},
		_handleSortKb: function (event) {
			var index = $(event.currentTarget).closest('th').data('columnIndex'), id;
			id = $(event.target).closest(".ui-iggrid").attr("id").replace("_container", "");
			if (this.grid.element.attr("id") !== id) {
				return;
			}
			if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
				if (this._currentActiveHeader) {
					this._currentActiveHeader.removeClass(this.css.sortableColumnHeaderActive);
				}
				$(event.currentTarget).closest('th').addClass(this.css.sortableColumnHeaderActive);
				this._currentActiveHeader = $(event.currentTarget).closest('th');
				// M.H. 22 March 2012 Fix for bug #105214
				if (event.shiftKey) {
					this.unsortColumn(index, $(event.currentTarget).closest('th'));
				} else {
					//A.T. 15 Feb 2011 - fix for bug #66140
					this.sortColumn(index, null, $(event.currentTarget).closest('th'));
					//A.T. 19 March 2012 - fix for bug #105209
					if ($.browser.msie) {
						$(event.currentTarget).focus();
					}
				}
				event.stopPropagation();
				event.preventDefault();
			}
		},
		_handleFocusKb: function (event) {
			var id = $(event.target).closest(".ui-iggrid").attr("id").replace("_container", "");
			if (this.grid.element.attr("id") !== id) {
				return;
			}
			$(event.currentTarget).closest('th').addClass(this.css.sortableColumnHeaderFocus);
		},
		_handleBlurKb: function (event) {
			var id = $(event.target).closest(".ui-iggrid").attr("id").replace("_container", "");
			if (this.grid.element.attr("id") !== id) {
				return;
			}
			$(event.currentTarget).closest('th').removeClass(this.css.sortableColumnHeaderFocus);
		},
		_handleSort: function (event) {
			var index = $(event.currentTarget).closest('th').data('columnIndex'), isShiftClicked = false;
			if (this._currentActiveHeader) {
				this._currentActiveHeader.removeClass(this.css.sortableColumnHeaderActive);
			}
			isShiftClicked = event.shiftKey;

			$(event.currentTarget).addClass(this.css.sortableColumnHeaderActive);
			this._currentActiveHeader = $(event.currentTarget).closest('th');
			if (isShiftClicked) {
				this._currentHeader = $(event.currentTarget).closest('th');
				this.unsortColumn(index, $(event.currentTarget).closest('th'));
			} else {
				this.sortColumn(index, null, $(event.currentTarget));
			}
			event.stopPropagation();
			event.preventDefault();
		},
		_initLoadingIndicator: function () {
			// attach loading indicator widget
			this._loadingIndicator = this.grid.container().length > 0 ? this.grid.container().igLoading().data("igLoading").indicator() : this.grid.element.igLoading().data("igLoading").indicator();
		},
	    sortColumn: function (index, direction, header) {
			/* sorts a grid column and updates the UI  
				paramType="object" Column key (string) or index (number). Specifies the column which we want to sort. If the mode is multiple, previous sorting states are not cleared. 
				paramType="asc|desc" Specifies sorting direction (ascending or descending) 
				paramType="object" excluded="true"
			*/
			var colKey, expr, noCancel = true, s, i, visualIndex, groupby, reset = true, se, newSE = [], apiCall = false;
			// M.H. 10 April 2012 Fix for bug #107671
			this._currentIdentifier = index;
			if ($.type(index) === 'number') {
				colKey = this.grid.options.columns[index].key;
			} else {
				colKey = index;
//				for (i = 0; i < this.grid.options.columns.length; i++) {
//					if (this.grid.options.columns[i].key === colKey) {
//						index = i;
//						break;
//					}
//				}
				if (header === null || header === undefined) {
					header = $('#' + this.grid.element[0].id + '_' + colKey);
				}
				index = header.data('columnIndex');
			}

			expr = this.grid.dataSource.settings.sorting.expressions;
			s = this._findColumnSetting(colKey);
			if (this.grid.options.virtualizationMode === 'fixed' && (this.grid.options.virtualization === true || this.grid.options.columnVirtualization === true)) {
				visualIndex = index - this.grid._startColIndex;
			} else {
				visualIndex = index;
			}

			if (header === null || header === undefined) {
				// programmatic sorting 
				//A.T. 11 Oct - Fix for bug #91033
				visualIndex += this.grid.headersTable().children("thead").children("tr").children("th[data-skip=true]").length;
				if (this._currentActiveHeader) {
					this._currentActiveHeader.removeClass(this.css.sortableColumnHeaderActive);
				}
				// M.H. 12 April 2012 Fix for bug #108488
				if (colKey) {
					header = $('#' + this.grid.element[0].id + '_' + colKey);
				} else {
					header = this.grid.headersTable().children("thead").children("tr").children('th:nth-child(' + (visualIndex + 1) + ')');
				}
				apiCall = true;
			}
			if (s && s.allowSorting === false) {
				return;
			}
			if (direction !== null && direction !== undefined) {
				s.currentSortDirection = direction;
			} else {
				if ((s.currentSortDirection !== undefined && s.currentSortDirection !== null && !s.currentSortDirection.startsWith('asc') && !s.currentSortDirection.startsWith('desc')) || s.currentSortDirection === undefined || s.currentSortDirection === null) {
					s.currentSortDirection = s.firstSortDirection === undefined ? this.options.firstSortDirection : s.firstSortDirection;
				} else {
					s.currentSortDirection = (s.currentSortDirection !== undefined && s.currentSortDirection !== null && s.currentSortDirection.indexOf('asc') !== -1) ? 'descending' : 'ascending';
				}
			}
			// fire sorting event
			if (!apiCall) {
				noCancel = this._trigger(this.events.columnSorting, null, {columnKey: colKey, direction: s.currentSortDirection, owner: this});
			}
			if (noCancel) {
				this._loadingIndicator.show();
				//  update title attributes
				header.attr('title', s.currentSortDirection.startsWith('asc') ? this.options.sortedColumnTooltip.replace('${direction}', $.ig.GridSorting.locale.ascending) : this.options.sortedColumnTooltip.replace('${direction}', $.ig.GridSorting.locale.descending));
				if (this.options.mode === "single") {
					this._clearSortStates(header, index);
					// check if we have group columns (GroupBy feature)
					for (i = 0; this.grid.options.features && i < this.grid.options.features.length; i++) {
						if (this.grid.options.features[i].name === "GroupBy") {
							// try getting the feature
							groupby = this.grid.element.data("igGridGroupBy");
							if (groupby && groupby.options.groupedColumns && groupby.options.groupedColumns.length > 0) {
								reset = false;
							}
						}
					}
					// A.T. 10 Oct 2011 if we have Grouped columns, even though the sorting is single, we shouldn't clear all existing sorting expressions
					// because essentially GroupBy is using the same sorting expressions for the groups
					if (reset) {
						this.grid.dataSource.settings.sorting.expressions = [{fieldName: colKey, dir: s.currentSortDirection.startsWith('asc') ? 'asc' : 'desc'}];
					} else {
						// replace the sorting expression which is for the current key
						// M.H. 21 May 2012 Fix for bug #112188
						// we should insert first groupby sorting expressions (those which are marked with flag groupBy) and then to push at the end of the array current sorting expression
						se = this.grid.dataSource.settings.sorting.expressions;
						for (i = 0; i < se.length; i++) {
							if (se[i].isGroupBy === true) {
								newSE.push(se[i]);
							}
						}
						newSE.push({fieldName: colKey, dir: s.currentSortDirection.startsWith('asc') ? 'asc' : 'desc'});
						this.grid.dataSource.settings.sorting.expressions = newSE;
					}
				} else {
					// multi-column sorting
					for (i = 0; i < expr.length; i++) {
						if (expr[i].fieldName === colKey) {
							expr.splice(i, 1);
						}
					}
					this.grid.dataSource.settings.sorting.expressions = expr.concat([{fieldName: colKey, dir: s.currentSortDirection.startsWith('asc') ? 'asc' : 'desc'}]);
				}
				// trigger DataBinding event on the grid
				noCancel = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
				if (noCancel) {
					// A.T. 13 April 2011 fix for bug #72284
					this.grid.element.trigger('iggriduisoftdirty', {owner: this});
					this._currentHeader = header;
					this._currentIndex = index;
					if (this.options.type === "remote") {
						if (!apiCall) {
							this._shouldFireColumnSorted = true;
						}
						this.grid.dataSource.dataBind();
					} else {
						this.grid.dataSource.sort(this.grid.dataSource.settings.sorting.expressions, s.currentSortDirection);
						// L.A. 07 August 2012 - Fixing bug #118388 The 'databound' event fires twice when sorting a column
						// _renderData fires again databound, therefore this call is not needed.
						//this.grid._trigger(this.grid.events.dataBound, null, {owner: this.grid});
						this.grid._renderData();
						if (!apiCall) {
							this._trigger(this.events.columnSorted, null, {columnKey: colKey, direction: s.currentSortDirection, owner: this});
						}
					}
					this._curColKey = colKey;
					this._curSortDir = s.currentSortDirection;
				}
			}
	    },
		sortMultiple: function () {
			// trigger DataBinding event on the grid
			var self = this,
				noCancel,
				expr = this.grid.dataSource.settings.sorting.expressions,
				header;

			noCancel = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
			if (noCancel) {
				$.each(this.grid.options.columns, function (index, column) {
					var i, cs, colKey = column.key;
					header = $('#' + self.grid.element[0].id + '_' + colKey);

					for (i = 0; i < expr.length; i++) {
						if (expr[i].fieldName === colKey) {
							break;
						}
					}
					cs = self._findColumnSetting(colKey);
					if (cs) {
						if (i === expr.length) {
							// remove sorting for the column
							cs.currentSortDirection = undefined;
						} else {
							cs.currentSortDirection = expr[i].dir;
						}
					}
					self._applySortStyles(header, index);
				});
				// A.T. 13 April 2011 fix for bug #72284
				this.grid.element.trigger('iggriduisoftdirty', {owner: this});
				// M.H. 18 July 2012 Fix for bug #105514
				if (this.options.type === "remote" || this._isResetClick === true) {
					this.grid.dataSource.dataBind();
					// M.H. 19 July 2012 Fix for bug #105514
					this._isResetClick = false;
				} else {
					this.grid.dataSource.sort(this.grid.dataSource.settings.sorting.expressions);
					this.grid._trigger(this.grid.events.dataBound, null, {owner: this.grid});
					this.grid._renderData();
				}
				// render Asc/Desc buttons
			}
		},
		unsortColumn: function (index, header) {
			if (this.options.mode === "single") {
				return;
			}
			var colKey, expr, noCancel = true, s, i, apiCall = false;
			if ($.type(index) === 'number') {
				colKey = this.grid.options.columns[index].key;
			} else {
				colKey = index;
				for (i = 0; i < this.grid.options.columns.length; i++) {
					if (this.grid.options.columns[i].key === colKey) {
						index = i;
						break;
					}
				}
			}
			expr = this.grid.dataSource.settings.sorting.expressions;
			s = this._findColumnSetting(colKey);
			if (s === null || s === undefined) {
				return;
			}
			if (s && s.allowSorting === false) {
				return;
			}
			s.currentSortDirection = undefined;
			for (i = 0; i < expr.length; i++) {
				if (expr[i].fieldName === colKey) {
					expr.splice(i, 1);
				}
			}
			// M.H. 18 April 2012 Fix for bug #109745
			this._currentIndex = null;
            this._currentHeader = null;

			// M.H. 16 March 2012 Fix for bug #105074
			this._applySortStyles($('#' + this.grid.element[0].id + '_' + colKey), index);
			noCancel = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
			if (noCancel) {
				this.grid.element.trigger('iggriduisoftdirty', {owner: this});
				// M.H. 10 April 2012 Fix for bug #107671 - it should not be set current index
				//this._currentIndex = index;
				this._currentHeader = header;
				if (this.options.type === "remote") {
					if (!apiCall) {
						this._shouldFireColumnSorted = true;
					}
					this.grid.dataSource.dataBind();
				} else {
					this.grid.dataSource.sort(this.grid.dataSource.settings.sorting.expressions);
					this.grid._trigger(this.grid.events.dataBound, null, {owner: this.grid});
					this.grid._renderData();
					if (!apiCall) {
						this._trigger(this.events.columnSorted, null, {columnKey: colKey, direction: s.currentSortDirection, owner: this});
					}
				}
				this._curColKey = colKey;
				this._curSortDir = s.currentSortDirection;
			}
		},
		/* A.T. fix for bug #73496 */
		_excludeExpr: function (key) {
			var expr = this.grid.dataSource.settings.sorting.expressions, i;
			for (i = 0; i < expr.length; i++) {
				if (expr[i].fieldName === key) {
					// remove the entry from the array
					//A.T. 8 March 2012 - Fix for bug #104244 
					//expr.remove(i);
					$.ig.removeFromArray(expr, i);
				}
			}
		},
		// M.H. 2 April 2012 Fix for bug #106392
		// M.H. 10 April 2012 Fix for bug #107671 - add ignore selected style
		_applySortStyles: function (header, index, columnKey, ignoreActiveSelection) {
			// M.H. 5 April 2012 Fix for bug #106392
			var span, col, indicatorContainer, visualIndex, indexResolved, i, tmpIndexResolved, currentColumnSetting, columnOption = this.grid.options.columns[index], dataSkipColumnCount = 0,
				// L.A. 21 September 2012 - fixing bug #121812 
				// Grid - Incorrect Tooltip in Multiple Sorting and Hiding Events with Modal Window sample
				toolTip = this.options.sortedColumnTooltip,
				sortAsc = toolTip.replace('${direction}', $.ig.GridSorting.locale.ascending),
				sortDesc = toolTip.replace('${direction}', $.ig.GridSorting.locale.descending);

			if (this.grid.options.virtualizationMode === 'fixed' && (this.grid.options.virtualization === true || this.grid.options.columnVirtualization === true)) {
				visualIndex = index - this.grid._startColIndex;
			} else {
				visualIndex = index;
			}
			// apply class to sorting indicator
			span = header.find('.ui-iggrid-colindicator');
			// S.S. Bug #108027 April 9, 2012 sorting indicator span hasn't been added yet
			if (span.length === 0) {
				span = $('<span></span>').addClass(this.css.sortIndicator);
			}
			indicatorContainer = header.find('.ui-iggrid-indicatorcontainer');
			if (indicatorContainer.length === 0) {
				indicatorContainer = $('<div></div>').appendTo(header).addClass('ui-iggrid-indicatorcontainer');
			}
			indicatorContainer.append(span);
			// A.T. check if we are running in a hierarchical grid context
			/*
			if (this._hc === true) {
				indexResolved = visualIndex + 2;
			} else {
				indexResolved = visualIndex + 1;
			}
			*/
			// M.H. 1 June 2012 Fix for bug #113186
			//dataSkipColumnCount = header.parent('thead').children("[data-skip=true]").length;
			// do not include in the count columns cells like filtering data skipped cells
			dataSkipColumnCount = header.closest('thead').find(".ui-iggrid-header[data-skip=true]").length;

			indexResolved = visualIndex + dataSkipColumnCount + 1;
			tmpIndexResolved = indexResolved;
			for (i = 0; i < this.grid.options.columns.length; i++) {
				// M.H. 8 May 2012 Fix for bug #107156 - indexResolved starts from 1 but it is compared to 0 starting value
				// M.H. 1 June 2012 Fix for bug #113186
				if (i + dataSkipColumnCount < indexResolved && this.grid.options.columns[i].hidden) {
					tmpIndexResolved--;
				}
			}

			indexResolved = tmpIndexResolved;
			// A.T. fix failing unit tests
			// M.H. 2 April 2012 Fix for bug #106392
			if (columnKey !== null && columnKey !== undefined) {
				for (i = 0; i < this.options.columnSettings.length; i++) {
					if (this.options.columnSettings[i].columnKey === columnKey) {
						currentColumnSetting = this.options.columnSettings[i];
						break;
					}
				}
			} else {
				// M.H. 2 April 2012 Fix for bug #106392
				currentColumnSetting = this.options.columnSettings[index];
			}

			if (this.grid.options.fixedHeaders !== true) {
				col = header.closest('thead').parent().find('tbody tr td:nth-child(' + indexResolved + ')');
			} else if (this.options.applySortedColumnCss !== false) {
				col = this.grid.element.find('tr td:nth-child(' + indexResolved + ')');
			}
			// M.H. 2 April 2012 Fix for bug #106392
			// do not apply sorting styles on a hidden column - indexResolved is not calculated properly
			// M.H. 5 April 2012 Fix for bug #106392
			if (currentColumnSetting !== undefined && currentColumnSetting.currentSortDirection !== undefined &&
					(!columnOption || (columnOption && columnOption.hidden !== true))) {
				if (currentColumnSetting.currentSortDirection.indexOf('asc') !== -1) {
					span.removeClass(this.css.sortIndicatorDescending).addClass(this.css.sortIndicatorAscending);
					header.removeClass(this.css.descendingColumnHeader).addClass(this.css.ascendingColumnHeader);
					// L.A. 21 September 2012 - fixing bug #121812 
					// Grid - Incorrect Tooltip in Multiple Sorting and Hiding Events with Modal Window sample
					header.attr('title', sortAsc);
					// change the CSS class for the column
					if (this.options.applySortedColumnCss !== false && ignoreActiveSelection !== true) {
						col.removeClass(this.css.descendingColumn).addClass(this.css.ascendingColumn);
					}
				} else {
					span.removeClass(this.css.sortIndicatorAscending).addClass(this.css.sortIndicatorDescending);
					header.removeClass(this.css.ascendingColumnHeader).addClass(this.css.descendingColumnHeader);
					// L.A. 21 September 2012 - fixing bug #121812 
					// Grid - Incorrect Tooltip in Multiple Sorting and Hiding Events with Modal Window sample
					header.attr('title', sortDesc);
					// change the css class for the column
					if (this.options.applySortedColumnCss !== false && ignoreActiveSelection !== true) {
						col.removeClass(this.css.ascendingColumn).addClass(this.css.descendingColumn);
					}
				}
			} else {
				// L.A. 21 September 2012 - fixing bug #121812 
				// Grid - Incorrect Tooltip in Multiple Sorting and Hiding Events with Modal Window sample
				header.attr('title', this.options.unsortedColumnTooltip);
				span = header.parent('tr').find('th:nth-child(' + indexResolved + ') .ui-iggrid-colindicator');
				span.removeClass(this.css.sortIndicatorAscending);
				span.removeClass(this.css.descendingColumnHeader);
			}
		},
		// will clear all sort states except the one specified as index. If none is specified will clear all
		_clearSortStates: function (header, index) {
			var i, cs = this.options.columnSettings, realIndex = index, hiddenCount = 0, isSingleMode = this.options.mode === 'single';
			// take into account all hidden columns with index below "index"
			for (i = 0; i < this.grid.options.columns.length; i++) {
				if (i < index && this.grid.options.columns[i].hidden) {
					realIndex--;
					hiddenCount++;
				}
			}
			index = realIndex;
			for (i = 0; i < this.options.columnSettings.length; i++) {
				if (cs[i].allowSorting !== false) {
					if (index !== undefined && cs[i].columnIndex !== index) {
						//cs[i].currentSortDirection = null;
						//if (cs[i].currentSortDirection) {
						//	cs[i].currentSortDirection = cs[i].userSet_currentSortDirection;
						//}
						delete cs[i].currentSortDirection;
						//this._clearSortState(header, i - hiddenCount < 0 ? 0 : i - hiddenCount);
						// M.H. 4 June 2012 Fix for bug #113187
						this._clearSortState(header, cs[i].columnIndex);
					}
					// M.H. 19 July 2012 Fix for bug #113505
					if (this.grid._detachedHeaderCells && isSingleMode && cs[i].columnKey && this.grid._detachedHeaderCells[cs[i].columnKey]) {
						if (cs[i].currentSortDirection !== undefined && cs[i].currentSortDirection !== null) {
							delete cs[i].currentSortDirection;
						}
						this._clearHeaderCellSortState(this.grid._detachedHeaderCells[cs[i].columnKey][0]);
					}
				}
			}
		},
		_clearSortState: function (header, i) {
			var spanHeader, col,
				th, ths;

			if (this.grid._isMultiColumnGrid === true) {
				// M.H. 10 Aug 2012 Fix for bug #118779
				ths = this.grid._headerCells;//headersTable().find("thead th[data-isheadercell=true]").not("[data-skip=true]");
				th = ths[i];
				if (th === undefined) {
					return;
				}
			} else {
				ths = this.grid.headersTable().find("thead > tr").first().find("th").not("[data-skip=true]");
				th = ths.eq(i);
			}

			// A.T. check if we are running in a hierarchical grid context
			/*
			if (this._hc === true) {
				i++;
			}
			*/
			spanHeader = th;
            this._clearHeaderCellSortState(spanHeader);
			//A.T. 12 Feb 2011 - Fix for bug #66082
			// reset tooltip
			//if (this._hc === true) {
			//	this._headers[i - 1].header.attr('title', this.options.unsortedColumnTooltip);
			//} else {
			if (this.options.columnSettings.length > i && this.options.columnSettings[i].allowSorting) {
				th.attr('title', this.options.unsortedColumnTooltip);
			} else {
				th.attr('title', '');
			}
			//}
			if (this.options.applySortedColumnCss !== false) {
				if (this.grid.options.fixedHeaders !== true) {
					col = header.closest('thead').parent().find('tbody tr td:nth-child(' + (i + 1) + ')');
				} else if (this.options.applySortedColumnCss !== false) {
					col = this.grid.element.find('tr td:nth-child(' + (i + 1) + ')');
				}
				// change the CSS class for the column
				col.removeClass(this.css.descendingColumn).removeClass(this.css.ascendingColumn);
			}
		},
		_clearHeaderCellSortState: function (spanHeader) {
			var span = spanHeader.find('.ui-iggrid-colindicator');
			if (span.hasClass('ui-iggrid-colindicator-desc') || span.hasClass('ui-iggrid-colindicator-asc')) {
				span.removeClass(this.css.sortIndicatorDescending).removeClass(this.css.sortIndicatorAscending);
				// we need to get the correct header, that corresponds to the span
				spanHeader.removeClass(this.css.ascendingColumnHeader).removeClass(this.css.descendingColumnHeader).removeClass(this.css.sortableColumnHeaderFocus);
			}
		},
		_initDefaultSettings: function () {
			// fill in default column settings, so that later on we can get the current sort state of every sortable column 
			// iterate through columns
			var settings = [], key, cs = this.options.columnSettings, i, j, k, colIndex = 0, defaultExpressions = [], defExpLength, isToSkipGroupBySortingExpr = false,
				allowSorting, isToCheckUnboundColumns = (this.grid._hasUnboundColumns === true && this.options.type === "remote");
			// M.H. 9 May 2012 Fix for bug #111339 - it is possible for instance to be set groupby with default settings and then sorting expressions will be overwritten
			if (this.grid.dataSource.settings.sorting.expressions !== null && this.grid.dataSource.settings.sorting.expressions !== undefined) {
				defaultExpressions = this.grid.dataSource.settings.sorting.expressions;
			}
			defExpLength = defaultExpressions.length;
			// initialize
			if (this.grid.options.columns && this.grid.options.columns.length > 0) {
				for (i = 0; i < this.grid.options.columns.length; i++) {
					allowSorting = true;
					if (isToCheckUnboundColumns && this.grid.getUnboundColumnByKey(this.grid.options.columns[i].key) !== null) {
						allowSorting = false;
					}
					settings[i] = {'columnIndex': colIndex, 'columnKey': this.grid.options.columns[i].key, 'allowSorting': allowSorting};
					// M.H. 19 May 2012 Fix for bug #112103
					// column index should be set properly when hiding is set on init. Otherwise clearsortstates does not clear the sort state for the proper column
					if (this.grid.options.columns[i].hidden !== true) {
						colIndex++;
					}
				}
			}
			for (i = 0; i < cs.length; i++) {
				for (key in cs[i]) {
					if (cs[i].hasOwnProperty(key) && key !== 'columnKey' && key !== 'columnIndex') {
						if (key === "userSet_currentSortDirection") {
							if (cs[i].userSet_currentSortDirection === "undefined") {
								delete cs[i].currentSortDirection;
								//delete cs[i]["userSet_currentSortDirection"];
							} else {
								cs[i].currentSortDirection = cs[i].userSet_currentSortDirection;
							}
						} else if (key === "userSet_allowSorting") {
							//A.T. 22 Feb 2012 - Fix for #102444 - The column which "allowSorting" option is false came to be sortable after dataSource is set.
							cs[i].allowSorting = cs[i][key];
							delete cs[i][key];
						}
					}
				}
			}
			for (i = 0; i < cs.length; i++) {
				for (j = 0; j < settings.length; j++) {
					if (settings[j].columnKey === cs[i].columnKey || settings[j].columnIndex === cs[i].columnIndex) {
						break;
					}
				}
				if (j === settings.length) {
					continue;
				}
				for (key in cs[i]) {
					if (cs[i].hasOwnProperty(key) && key !== 'columnKey' && key !== 'columnIndex' && !key.startsWith('userSet')) {
						settings[j][key] = cs[i][key];
						settings[j]['userSet_' + key] = cs[i][key]; // we need to do that so after rebind the original user defined settings are restored
						if (key === 'currentSortDirection' && cs[i][key]) {
							if ($.type(settings[j].columnKey) !== "number") {
								// M.H. 9 May 2012 Fix for bug #111339 - we should not include 2 objects with the same field names in defaultExpressions
								// M.H. 23 Aug 2012 Fix for bug #119413 - if there is sorting expression from group by ignore the sorting expression
								isToSkipGroupBySortingExpr = false;
								if (defExpLength > 0) {
									for (k = 0; k < defExpLength; k++) {
										if (defaultExpressions[k].fieldName === settings[j].columnKey) {
											// M.H. 11 Jun 2012 Fix for bug #111339 - groupby sorting expressions are with higher priority than sorting expressions of sorting
											if (defaultExpressions[k].isGroupBy === true) {
												isToSkipGroupBySortingExpr = true;
											} else {
												defaultExpressions.splice(k, 1);
											}
											break;
										}
									}
								}
								if (isToSkipGroupBySortingExpr === true) {
									continue;
								}
								defaultExpressions.push({fieldName: settings[j].columnKey, dir: cs[i][key].startsWith('asc') ? 'asc' : 'desc'});
							} else {
								defaultExpressions.push({fieldIndex: settings[j].columnKey, dir: cs[i][key].startsWith('asc') ? 'asc' : 'desc'});
							}
						}
					}
				}
			}
			for (i = 0; i < settings.length; i++) {
				if (!settings[i].hasOwnProperty("currentSortDirection")) {
					settings[i].userSet_currentSortDirection = "undefined";
				}
			}
			// copy
			this.options.columnSettings = settings;
			// store default expressions
			this.grid.dataSource.settings.sorting.expressions = defaultExpressions;
			this.grid.dataSource.settings.sorting.defaultFields = defaultExpressions;
		},
		// grid event handlers
		_headerCellRendered: function (event, ui) {
			// decorate sorting logic, apply CSS classes, etc. 
			// apply sortable CSS class
			var cs = this._findColumnSetting(ui.columnKey), i, col,
				featureChooserInstance = this.grid.element.data('igGridFeatureChooser');
			//A.T. if the event is fired from another grid, return ! (hierarchical grid scenarios where events are bubbling
			if (event.target.id !== this.grid.element[0].id) {
				return;
			}
			if (ui.isMultiColumnHeader === true) {
				return;
			}
			if (ui.columnKey && cs) {
				this._headers.push({header: ui.th, index: cs.columnIndex});
				if (cs.allowSorting !== false) {
					ui.th.addClass(this.css.sortableColumnHeader);
					// apply title attributes
					if (cs.currentSortDirection === undefined || cs.currentSortDirection === null) {
						ui.th.attr('title', this.options.unsortedColumnTooltip);
					} else {
						ui.th.attr('title', cs.currentSortDirection.startsWith('asc') ? this.options.sortedColumnTooltip.replace('${direction}', $.ig.GridSorting.locale.ascending) : this.options.sortedColumnTooltip.replace('${direction}', $.ig.GridSorting.locale.descending));
					}
					// render span
					$('<span></span>').appendTo(ui.th).addClass(this.css.sortIndicator);
					// keyboard navigation
					$(ui.th).wrapInner('<a href="#"></a>');
					// if the column has been initially sorted
					if (cs.currentSortDirection !== undefined) {
						this._applySortStyles(ui.th, cs.columnIndex);
					}
				} else {
					$(ui.th).wrapInner('<a href="#"></a>');
				}
			}
			// M.H. 21 March 2012 Fix for bug #105568
			if ((this.options.mode !== 'single') && !this._featureChooserInitialized) {
				this._featureChooserInitialized = true;
				this._hidingIconColumnKeys = [];

				for (i = 0; i < this.grid.options.columns.length; i++) {
					col = this.grid.options.columns[i];
					if (this._getColumnSettingsByIndex(i).allowSorting) {
						// M.H. 16 March 2012 Fix for bug #105037
						if (featureChooserInstance && featureChooserInstance._shouldRenderInFeatureChooser(col.key) === true) {
							featureChooserInstance._renderInFeatureChooser(
								col.key,
								{
									name: 'Sorting',
									text: this.options.featureChooserText,
									secondaryIconClass: this.css.featureChooserModalDialogIcon,
									method: $.proxy(this.openMultipleSortingDialog, this),
									groupName: 'modaldialog',
									groupOrder: 3,
									order: 2
								}
							);
						}
					}
				}
			}
		},
		_columnsRearranged: function (event, ui) {
			this._initDefaultSettings();
		},
		_columnMap: function () {
			// M.H. 26 March 2012 Fix for bug #105568
			var self = this, isMultiple = (self.options.mode !== 'single');

			/* function used by the FeatureChooser */
			return $.map(this.grid.options.columns, function (col, index) {
				//M.H. 14 Feb 2012 - Fix for #101696
				var allowSorting = false;
				if (isMultiple && self._getColumnSettingsByIndex(index).allowSorting) {
					allowSorting = true;
				}
				return { "columnKey": col.key, "enabled": allowSorting};
			});
		},
		_findColumnSetting: function (key) {
			var i;
			for (i = 0; i < this.options.columnSettings.length; i++) {
				if (this.options.columnSettings[i].columnKey === key) {
					return this.options.columnSettings[i];
				}
			}
		},
		_dataRendered: function () {
			if (!this._loadingIndicator) {
				this._initLoadingIndicator();
			}
			// fire column sorted if rendering has been triggered by sorting
			if (this._shouldFireColumnSorted) {
				this._trigger(this.events.columnSorted, null, {columnKey: this._curColKey, direction: this._curSortDir, owner: this});
				this._shouldFireColumnSorted = false;
			}
			this._loadingIndicator.hide();
			if (this._currentIndex !== undefined && this._currentIndex !== null && this._currentHeader !== undefined && this._currentHeader !== null) {
				this._applySortStyles(this._currentHeader, this._currentIndex);
			}
			if (this._hc === undefined) {
				this._hc = this.grid.container().find('.ui-iggrid-expandheadercell').length > 0;
			}
			// if there is virtualization enabled, set the scrolltop to 0. 
			//A.T. 2 March - fix for bug #99940
			if (this.grid.options.rowVirtualization || this.grid.options.virtualization) {
				$("#" + this.grid.element.attr('id') + "_scrollContainer").scrollTop(0);
			}
		},
        _onUIDirty: function (e, args) {
            // if sorting itself has triggered the event, return
			var i, j, exprs = this.grid.dataSource.settings.sorting.expressions, defaultExprs = this.grid.dataSource.settings.sorting.defaultFields,
				cs = this.options.columnSettings, skip = false;
			// A.T. 23 Aug 2011 - add additional checks so that events don't propagate across hierarchical grids
            if (args.owner === this || args.owner.element[0].id !== this.element[0].id) {
                return;
            }
			this._currentIdentifier = null;
			this._currentIndex = null;
            this._currentHeader = null;
            this._clearUi(true);

			//A.T. Fix for bug #91651
			// clear data source sorting expressions
			for (i = 0; i < exprs.length; i++) {
				skip = false;
				for (j = 0; j < cs.length; j++) {
					if (cs[j].columnKey === exprs[i].fieldName && cs[j].userSet_currentSortDirection) {
						skip = true;
						break;
					}
				}
				if (!skip) {
					if (exprs.length > i) {
						$.ig.removeFromArray(exprs, i);
					}
					if (defaultExprs.length > i) {
						$.ig.removeFromArray(defaultExprs, i);
					}
				}
			}
        },
        _clearUi: function (resetAll) {
			var i, header, csd;
            for (i = 0; this._headers && i < this._headers.length; i++) {
				// A.T. fix for bug 72281 - (Related to bug #67517)
				csd = this.options.columnSettings[i].userSet_currentSortDirection;
				if (csd === undefined || csd === null || csd === "undefined") {
					//this._clearSortStates(this._headers[i].header, resetAll === true ? null : this._headers[i].index);
					this._clearSortState(this._headers[i].header, i);
					//A.T. Fix for bug #73496
					// M.H. 26 March 2012 Fix for bug #105568
					if (this.options.mode !== "single") {
						delete this.options.columnSettings[i].currentSortDirection;
						// exclude the expression from the expressions in the data source
						this._excludeExpr(this.options.columnSettings[i].columnKey);
					}
				} else {
					// apply sort State
					this._applySortStyles(this._headers[i].header, i);
				}
				header = this._headers[i].header;
				header.removeClass(this.css.sortableColumnHeaderActive).removeClass(this.css.sortableColumnHeaderHover).removeClass(this.css.sortableColumnAscending).removeClass(this.css.sortableColumnDescending).addClass(this.grid.css.headerClass);
				// A.T. 3 May - fix for #102444
				if (this.options.columnSettings[i].allowSorting) {
					header.addClass(this.css.sortableColumnHeader);
				}
			}
        },
		_virtualHorizontalScroll: function (event, args) {
			// get the current col index from args, and reinitialize the header cells 
			var start = args.startColIndex, end = args.endColIndex, i, j, cs = this.options.columnSettings, header,
				ths = this.grid.headersTable().find("thead > tr").first().find("th").not("[data-skip=true]"),
				visibleColumns = this.grid._visibleColumns();
			for (i = 0; i < ths.length; i++) {
				header = ths.eq(i);
				// 1. clear && 2. apply styles
				// set correct key/values using data()
				this._clearSortState(header, i);
				header.removeClass(this.css.sortableColumnHeaderActive).removeClass(this.css.sortableColumnHeaderHover).removeClass(this.css.sortableColumnAscending).removeClass(this.css.sortableColumnDescending).addClass(this.grid.css.headerClass).addClass(this.css.sortableColumnHeader);
				//this._applySortStyles(this._headers[i].header, i);
				// remove the column styles
			}
			for (i = start; i <= end; i++) {
				header = ths.eq(i - start);
				header.data('columnIndex', i);
				for (j = 0; j < cs.length; j++) {
					if (cs[j].currentSortDirection && cs[j].columnKey === visibleColumns[i].key) {
						this._applySortStyles(header, i);
						// don't break cause it may be multi-col sorting
					}
				}
			}
		},
		_columnsCollectionModified: function (event, args) {
			// we need to reset column settings' indices
			var i, j, found, colKey, cs, col, colApplySelection, indexApplySelection;

			for (i = 0; i < this.options.columnSettings.length; i++) {
				// find the column corresponding to this column setting
				j = 0;
				found = false;
				for (j = 0; j < this.grid._visibleColumns().length; j++) {
					if (this.grid._visibleColumns()[j].key === this.options.columnSettings[i].columnKey) {
						found = true;
						colKey = this.grid._visibleColumns()[j].key;
						break;
					}
				}
				if (found) {
					this.options.columnSettings[i].columnIndex = j;
					// M.H. 28 March 2012 Fix for bug #106392
					cs = this._findColumnSetting(colKey);

					if (cs &&
							cs.currentSortDirection !== undefined &&
							this.options.applySortedColumnCss !== false) {
						// M.H. 30 March 2012 Fix for bug #106392
						col = $('#' + this.grid.element[0].id + '_' + colKey);

						this._applySortStyles(col, col.data('columnIndex'), colKey, true);
					}
				}
			}
			// M.H. 10 April 2012 Fix for bug #107671
			if (this._currentIdentifier) {
				if ($.type(this._currentIdentifier) === 'number') {
					if (this._currentIndex !== undefined && this._currentIndex !== null && this._currentHeader !== undefined && this._currentHeader !== null) {
						this._applySortStyles(this._currentHeader, this._currentIndex);
					}
				} else {
					colApplySelection = $('#' + this.grid.element[0].id + '_' + this._currentIdentifier);
					indexApplySelection = colApplySelection.data('columnIndex');
					if ($.type(indexApplySelection) === 'number') {
						this._applySortStyles(colApplySelection, indexApplySelection, this._currentIdentifier);
					}
				}
			}

			// A.T. 10 Oct Fix for #91161
			$('#' + this.element[0].id + ' thead th').removeClass(this.css.sortableColumnHeaderHover);
		},
	    destroy: function () {
			// unbind events, removes added sorting elements, etc. 
			var i, a, header, span, text, modalDialog = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog');
            if (!this.grid) {
                return;
            }
			$('#' + this.element[0].id).undelegate("thead th", "dragstart", this._dragStartHandler);
			$('#' + this.element[0].id).undelegate("thead th", "mouseover", this._mouseOverHandler);
			$('#' + this.element[0].id).undelegate("thead th", "mouseout", this._mouseOutHandler);
			$('#' + this.element[0].id).undelegate("thead th", "click", this._clickHandler);
			$(document).undelegate("#" + this.element[0].id + "_headers thead th", "dragstart", this._dragStartHandler);
			$(document).undelegate("#" + this.element[0].id + "_headers thead th", "mouseover", this._mouseOverHandler);
			$(document).undelegate("#" + this.element[0].id + "_headers thead th", "mouseout", this._mouseOutHandler);
			$(document).undelegate("#" + this.element[0].id + "_headers thead th", "click", this._clickHandler);
			$('#' + this.element[0].id).undelegate("thead th a", "keydown", this._keyDownHandler);
			$('#' + this.element[0].id).undelegate("thead th a", "focus", this._focusHandler);
			$('#' + this.element[0].id).undelegate("thead th a", "blur", this._blurHandler);
			$(document).undelegate("#" + this.element[0].id + "_headers thead th a", "keydown", this._keyDownHandler);
			$(document).undelegate("#" + this.element[0].id + "_headers thead th a", "focus", this._focusHandler);
			$(document).undelegate("#" + this.element[0].id + "_headers thead th a", "blur", this._blurHandler);
			this.grid.element.unbind('iggridheadercellrendered', this._headerCellRenderedHandler);
			this.grid.element.unbind('iggridvirtualhorizontalscroll', this._virtualHorizontalScrollHandler);
			this.grid.element.unbind('iggriduidirty', this._uiDirtyHandler);
			this.grid.element.unbind('iggridheaderrendered', this._headerRenderedHandler);
			this.grid.element.unbind('iggridcolumnmovingcolumnmoved', this._columnsRearangedHandler);
			delete this._blurHandler;
			delete this._clickHandler;
			delete this._headerCellRenderedHandler;
			delete this._focusHandler;
			delete this._keyDownHandler;
			delete this._mouseOutHandler;
			delete this._mouseOverHandler;
			delete this._dragStartHandler;
			delete this._uiDirtyHandler;
			delete this._virtualHorizontalScrollHandler;
			delete this._headerRenderedHandler;
			delete this._columnsRearangedHandler;
			// remove sorted classes for columns
			this.grid.element.find('.ui-iggrid-colasc').removeClass('ui-iggrid-colasc ui-state-highlight');
			this.grid.element.find('.ui-iggrid-coldesc').removeClass('ui-iggrid-coldesc ui-state-highlight');
			this._clearUi(true);
			// clear styling and markup
			for (i = 0; this._headers && i < this._headers.length; i++) {
				header = this._headers[i].header;
				header.removeClass('ui-iggrid-sortableheader ui-state-default ui-state-active ui-state-hover ui-state-focus');
				header.attr('title', '');
				span = header.find('a span');
				text = span.text();
				//span.remove();
				a = header.find('a');
				$('<span>' + text + '</span>').appendTo(header).addClass('ui-iggrid-headertext');
				a.remove();
				//delete header;
			}
			this._headers = null;
			modalDialog.igGridModalDialog('getCaptionButtonContainer');
			modalDialog.remove();

			$.Widget.prototype.destroy.apply(this, arguments);
			return this;
	    },
		_renderMultipleSortingDialog: function () {
			var $buttonOK,
				self = this,
				o = this.options,
				modalDialogId = this.grid.element[0].id + '_multiplesorting_modalDialog',
				$captionButtonContainer,
				modalDialog;

			$('#' + modalDialogId).remove();
			modalDialog = $('<div></div>')
				.appendTo("body")
				.attr('id', modalDialogId);

			modalDialog.igGridModalDialog({
				buttonApplyText: o.modalDialogButtonApplyText,
				buttonCancelText: o.modalDialogButtonCancelText,
				renderFooterButtons: !o.modalDialogSortOnClick,
				modalDialogCaptionText: o.modalDialogCaptionText,
				modalDialogWidth: o.modalDialogWidth,
				modalDialogHeight: o.modalDialogHeight,
				animationDuration: o.modalDialogAnimationDuration,
				// M.H. 8 May 2012 Fix for bug #110344
				gridContainer: this.grid.container(),
				modalDialogOpening: function (event, args) {
					// M.H. 21 March 2012 Fix for bug #105460
					var noCancel = self._trigger(self.events.modalDialogOpening, null, {modalDialogElement: modalDialog, owner: self});
					if (noCancel) {
						self._multiplesortingDialogOpening(event, args);
						self._trigger(self.events.modalDialogOpened, null, {modalDialogElement: modalDialog, owner: self});
					}
					return noCancel;
				},
				modalDialogMoving: function (e, ui) {
					self._trigger(self.events.modalDialogMoving, null,
						{
							modalDialogElement: e.target,
							owner: self,
							originalPosition: ui.originalPosition,
							position: ui.position
						});
				},
				modalDialogClosing: function (event, args) {
					return self._trigger(self.events.modalDialogClosing, null, {modalDialogElement: modalDialog, owner: self});
				},
				modalDialogClosed: function (event, args) {
					self._trigger(self.events.modalDialogClosed, null, {modalDialogElement: modalDialog, owner: self});
				}
			});
			if (o.modalDialogSortOnClick) {
				// show close button
				$captionButtonContainer = modalDialog.igGridModalDialog('getCaptionButtonContainer');

				$('<span></span>')
					.bind("click.hiding", function (event) {
						modalDialog.igGridModalDialog('closeModalDialog', true);
						event.preventDefault();
						event.stopPropagation();
						return false;
					})
					.addClass('ui-icon ui-icon-closethick')
					.appendTo(
						$('<a></a>')
							.appendTo($captionButtonContainer)
							.attr('title', $.ig.GridHiding.locale.columnChooserCloseButtonTooltip)
							.attr('href', '#')
							.attr('role', 'button')
							.addClass('ui-dialog-titlebar-close ui-corner-all')
					);
			} else {
				$captionButtonContainer = modalDialog.igGridModalDialog('getCaptionButtonContainer');
				$buttonOK = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog_footer_buttonok');
				$buttonOK.bind('igbuttonclick', function (e) { self._multiplesortingDialogButtonOKClick(e); });
			}
		},
		openMultipleSortingDialog: function () {
			/* Open multiple sorting dialog */
			var modalDialog = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog');
			modalDialog.igGridModalDialog('openModalDialog');
		},
		closeMultipleSortingDialog: function () {
			/* Close multiple sorting dialog */
			var modalDialog = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog');
			modalDialog.igGridModalDialog('closeModalDialog');
		},
		_multiplesortingDialogOpening: function () {
			this._tempExpr = this.grid.dataSource.settings.sorting.expressions.slice(0);
			this.renderMultipleSortingDialogContent(true);
		},
		renderMultipleSortingDialogContent: function (isToCallEvents) {
			/* Renders content of multiple sorting dialog - sorted and unsorted columns. */
			var $content, $sortedColumns, $unsortedColumns, i, j, noCancel = true,
				self = this,
				//o = this.options,
				columns = this.grid.options.columns,
				css = this.css,
				se = this.grid.dataSource.settings.sorting.expressions,
				seLength = se.length,
				sortedColumns = [],
				modalDialog = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog');
			if (isToCallEvents) {
				noCancel = this._trigger(this.events.modalDialogContentsRendering, null, {modalDialogElement: modalDialog, owner: this});
			}
			if (noCancel) {
				this.removeDialogClearButton();
				$content = modalDialog.igGridModalDialog('getContent');
				$content.empty();
				$sortedColumns = $('<div></div>')
					.attr('id', this.grid.element[0].id + "_multiplesorting_modalDialog_sortedcolumns")
					.addClass(css.dialogSortedColumns)
					.appendTo($content);
				$unsortedColumns = $('<div></div>')
					.attr('id', this.grid.element[0].id + "_multiplesorting_modalDialog_unsortedcolumns")
					.addClass(css.dialogUnsortedColumns)
					.appendTo($content);

				$('<ul></ul>')
					.addClass(css.dialogSortedColumnsList)
					.appendTo($sortedColumns);
				$('<ul></ul>')
					.addClass(css.dialogUnsortedColumnsList)
					.appendTo($unsortedColumns);

				$.each(columns, function (columnIndex, column) {
					var cs, columnIdentifier;
					cs = self._getColumnSettingsByIndex(columnIndex);
					if (cs === null || cs === undefined || cs.allowSorting === false) {
						return true;
					}
					columnIdentifier = cs.columnKey || cs.columnIndex || column.key;
					for (i = 0; i < self._tempExpr.length; i++) {
						if (self._tempExpr[i].fieldName === columnIdentifier) {
							break;
						}
					}
					if (i !== self._tempExpr.length) {
						sortedColumns.push({column: column, columnIndex: cs.columnIndex, dir: self._tempExpr[i].dir, columnIdentifier: columnIdentifier});
						//column.currentSortDirection.startsWith('asc')
					} else {
						self._renderDialogUnsortedColumn(column, cs.columnIndex, cs.currentSortDirection, columnIdentifier);
					}
				});
				// order of sorting depends on order in sort expressions - that's why show columns in modal dialog according to order in sorting expressions
				for (i = 0; i < seLength; i++) {
					for (j = 0; j < sortedColumns.length; j++) {
						if (se[i].fieldName === sortedColumns[j].columnIdentifier) {
							//orderedSortedColumns.push(sortedColumns[j]);
							self._renderDialogSortedColumn(sortedColumns[j].column, sortedColumns[j].columnIndex, sortedColumns[j].dir, sortedColumns[j].columnIdentifier);
							break;
						}
					}
				}

				//this._addSlideButtonSortingColumns();
				if (isToCallEvents) {
					this._trigger(this.events.modalDialogContentsRendered, null, {modalDialogElement: modalDialog, owner: this});
				}
				// M.H. 28 March 2012 Fix for bug #107039
				if (this._checkRenderButtonReset()) {
					this._renderDialogButtonClearAll();
				}
			}
		},
		_addSlideButtonSortingColumns: function () {
			var css = this.css,
				o = this.options,
				$sortedColumns = $('#' + this.grid.element[0].id + "_multiplesorting_modalDialog_sortedcolumns"),
				buttonId = this.grid.element[0].id + '_multiplesorting_modalDialog_slidebutton',
				$button,
				innerHTML;

			innerHTML = '<div class="' + css.dialogSlideArea + '">' +
				'	<div class="' + css.dialogSlideAreaContainer + '">' +
				'		<button id="' + buttonId + '" class="' + css.dialogButtonSlide + '" role="button" aria-disabled="false" title="' + o.dialogButtonSlideCaption + '">' +
				'			<span class="' + css.dialogButtonSlideContainer + '"></span>' +
				'			<span class="ui-button-text">' + o.dialogButtonSlideCaption + '</span>' +
				'		</button>' +
				'	</div>' +
				'</div>';
			$(innerHTML).insertAfter($sortedColumns);
			$button = $('#' + buttonId);
			$button.bind({
				click: function (e, args) {
					$sortedColumns.slideToggle("slow");
					$(this).find('span:eq(0)').toggleClass(css.dialogButtonSlideUp);
					return false;
				}
			});
		},
		_renderDialogSortedColumn: function (column, columnIndex, direction, columnIdentifier) {
			var	self = this, $li, css = this.css, $buttonAscDesc, $buttonUnsort, liHTML,
				o = this.options,
				buttonAscDescId = this.grid.element[0].id + "_" + columnIdentifier + "_multiplesorting_modalDialog_sortedcolumns_buttonascdesc",
				buttonUnsortId = this.grid.element[0].id + "_" + columnIdentifier + "_multiplesorting_modalDialog_sortedcolumns_buttonunsort",
				$ul = $('#' + this.grid.element[0].id + "_multiplesorting_modalDialog_sortedcolumns ul");

			$li = $('<li></li>')
				.attr('id', self.grid.element[0].id + '_' + columnIdentifier + '_multiplesorting_sorted_li')
				.addClass(css.dialogSortedColumnsItem);
			$li.appendTo($ul);
			//this._insertColumnModalDialog($ul, $li, columnIndex);
			if (columnIndex !== null && columnIndex !== undefined) {
				$li.attr('li-order', columnIndex);
			}
			liHTML = '<span id="' + buttonAscDescId + '" class="' + css.dialogButtonAsc + '" role="button" title="' + o.modalDialogCaptionButtonDesc + '" >' +
				'	<span class="' + css.dialogButtonAscIcon + '"></span>' +
				'</span>' +
				'<span class="' + css.dialogSortedColumnTextContainer + '">' + column.headerText + '</span>' +
				'<button id="' + buttonUnsortId + '" class="' + css.dialogButtonUnsort + '" role="button" title="' + o.modalDialogCaptionButtonUnsort + '" >' +
				'	<span class="' + css.dialogButtonUnsortContainer + '"></span>' +
				'	<span class="ui-button-text">' + o.modalDialogCaptionButtonUnsort + '</span>' +
				'</button>';
			$li.bind({
				click: function (e, args) {
					self._currentIdentifier = columnIdentifier;
					self._dialogButtonAscDescClick(columnIdentifier);
					// M.H. 28 March 2012 Fix for bug #107039
					if (self._checkRenderButtonReset()) {
						self._renderDialogButtonClearAll();
					} else {
						self.removeDialogClearButton();
					}

					e.preventDefault();
					e.stopPropagation();
				}
			});
			$li.html(liHTML);
			$buttonAscDesc = $('#' + buttonAscDescId);
			$buttonUnsort = $('#' + buttonUnsortId);
			if (direction !== undefined) {
				if (direction.indexOf('asc') !== -1) {
					self._setDialogButtonAscDesc(true, columnIdentifier);
					self._setTempExpr(columnIdentifier, 'asc');
				} else {
					self._setDialogButtonAscDesc(false, columnIdentifier);
					self._setTempExpr(columnIdentifier, 'desc');
				}
			} else {
				self._setDialogButtonAscDesc(true, columnIdentifier);
				self._setTempExpr(columnIdentifier, 'asc');
			}
			$buttonUnsort.bind({
				click: function (e, args) {
					var noCancel, modalDialog = $('#' + self.grid.element[0].id + '_multiplesorting_modalDialog');

					noCancel = self._trigger(self.events.modalDialogButtonUnsortClick, e, {modalDialogElement: modalDialog, owner: self, columnKey: columnIdentifier});
					if (noCancel) {
						$li.remove();
						if (o.modalDialogSortOnClick === true) {
							self.unsortColumn(columnIdentifier);
						} else {
							self._setTempExpr(columnIdentifier);
						}
						self._renderDialogUnsortedColumn(column, columnIndex, direction, columnIdentifier);
						// M.H. 28 March 2012 Fix for bug #107039
						if (self._checkRenderButtonReset()) {
							self._renderDialogButtonClearAll();
						} else {
							self.removeDialogClearButton();
						}
					}
					e.preventDefault();
					e.stopPropagation();
				},
				mouseover: function (e, args) {
					if (!$(this).hasClass(css.dialogButtonsHover)) {
						$(this).addClass(css.dialogButtonsHover);
					}
				},
				mouseout: function (e, args) {
					if ($(this).hasClass(css.dialogButtonsHover)) {
						$(this).removeClass(css.dialogButtonsHover);
					}
				}
			});
		},
		_dialogButtonAscDescClick: function (columnIdentifier) {
			var o = this.options,
				noCancel,
				modalDialog = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog'),
				$buttonAscDesc = $('#' + this.grid.element[0].id + "_" + columnIdentifier + "_multiplesorting_modalDialog_sortedcolumns_buttonascdesc"),
				isAsc = $buttonAscDesc.data('isAsc');

			noCancel = this._trigger(this.events.modalDialogSortingChanged, null, {modalDialogElement: modalDialog, owner: this, columnKey: columnIdentifier, isAsc: !isAsc});
			if (noCancel) {
				if (isAsc === true) {
					if (o.modalDialogSortOnClick === true) {
						this.sortColumn(columnIdentifier, "descending");
					} else {
						this._setTempExpr(columnIdentifier, 'desc');
					}
					this._setDialogButtonAscDesc(false, columnIdentifier);
				} else {
					if (o.modalDialogSortOnClick === true) {
						this.sortColumn(columnIdentifier, "ascending");
					} else {
						this._setTempExpr(columnIdentifier, 'asc');
					}
					this._setDialogButtonAscDesc(true, columnIdentifier);
				}

			}
		},
		_setDialogButtonAscDesc: function (isAsc, columnIdentifier) {
			var css = this.css,
				buttonAscDescId = this.grid.element[0].id + "_" + columnIdentifier + "_multiplesorting_modalDialog_sortedcolumns_buttonascdesc",
				$buttonAscDesc = $('#' + buttonAscDescId),
				$spanIcon = $buttonAscDesc.find('span:eq(0)');

			$buttonAscDesc.data('isAsc', isAsc);
			// M.H. 20 March 2012 Fix for bug #105078
			if (isAsc === true) {
				$buttonAscDesc
					.attr('title', this.options.modalDialogCaptionButtonDesc)
					.removeClass(css.dialogButtonDesc)
					.addClass(css.dialogButtonAsc);
				$spanIcon
					.removeClass(css.dialogButtonDescIcon)
					.addClass(css.dialogButtonAscIcon);
				this._setTempExpr(columnIdentifier, 'asc');
			} else {
				$buttonAscDesc
					.attr('title', this.options.modalDialogCaptionButtonAsc)
					.removeClass(css.dialogButtonAsc)
					.addClass(css.dialogButtonDesc);
				$spanIcon
					.removeClass(css.dialogButtonAscIcon)
					.addClass(css.dialogButtonDescIcon);
				this._setTempExpr(columnIdentifier, 'desc');
			}
		},
		_setTempExpr: function (colKey, dir) {
			var i, expr = this._tempExpr;

			for (i = 0; i < expr.length; i++) {
				if (expr[i].fieldName === colKey) {
					expr.splice(i, 1);
					if (dir === null || dir === undefined) {
						this._tempExpr = expr;
						return;
					}
				}
			}
			this._tempExpr = expr.concat([{fieldName: colKey, dir: dir}]);
		},
		_renderDialogUnsortedColumn: function (column, columnIndex, direction, columnIdentifier) {
			var self = this, $li, $a,
				o = this.options,
				css = this.css,
				$ul = $('#' + this.grid.element[0].id + "_multiplesorting_modalDialog_unsortedcolumns ul");

			$li = $('<li></li>')
				.attr('id', self.grid.element[0].id + '_' + columnIdentifier + '_multiplesorting_unsorted_li')
				.addClass(css.dialogUnsortedColumnsItem)
				.append('<span class="' + css.dialogUnsortedColumnsSortByButton + '"><a href="#"></a></span> <span class="' + css.dialogItemText + '">' + column.headerText + '</span>');
			this._insertColumnModalDialog($ul, $li, columnIndex);
			if (columnIndex !== null && columnIndex !== undefined) {
				$li.attr('li-order', columnIndex);
			}
			$a = $li.find('a:first');
			$a.addClass(css.modalDialogSortByColumn);
			$a.html(o.modalDialogSortByButtonText);
			$li.bind({
				click: function (e, args) {
					var noCancel, modalDialog = $('#' + self.grid.element[0].id + '_multiplesorting_modalDialog');
					noCancel = self._trigger(self.events.modalDialogSortClick, e, {modalDialogElement: modalDialog, owner: self, columnKey: columnIdentifier});

					if (noCancel) {
						$li.remove();
						self._renderDialogSortedColumn(column, columnIndex, direction, columnIdentifier);
						if (o.modalDialogSortOnClick) {
							// M.H. 9 April 2012 Fix for bug #108488
							self.sortColumn(columnIdentifier);
//							self.grid.dataSource.settings.sorting.expressions = self._tempExpr;
//							self.sortMultiple();
						} else {
							// M.H. 28 March 2012 Fix for bug #107039
							if (self._checkRenderButtonReset()) {
								self._renderDialogButtonClearAll();
							} else {
								self.removeDialogClearButton();
							}
						}
					}
					e.preventDefault();
					e.stopPropagation();
				}
			});
		},
		_checkRenderButtonReset: function () {
			// M.H. 28 March 2012 Fix for bug #107039
			var i, j, cs, columnKey,
				expr = this._tempExpr;
			// M.H. 19 July 2012 Fix for bug #105514
			this._isResetClick = false;
			for (i = 0; i < this.options.columnSettings.length; i++) {
				cs = this.options.columnSettings[i];
				if (cs.allowSorting === false) {
					continue;
				}
				columnKey = cs.columnKey;

				for (j = 0; j < expr.length; j++) {
					if (expr[j].fieldName === columnKey) {
						if (cs.userSet_currentSortDirection !== expr[j].dir) {
							return true;
						}
						break;
					}
				}
				if (j === expr.length && cs.userSet_currentSortDirection !== "undefined") {
					return true;
				}
			}
			// M.H. 19 July 2012 Fix for bug #105514
			this._isResetClick = true;
			return false;
		},
		removeDialogClearButton: function () {
			/* Remove clear button for multiple sorting dialog */
			$('#' + this.grid.element[0].id + '_sorting_modalDialog_reset_button').remove();


		},
		_renderDialogButtonClearAll: function () {
			if (this.options.modalDialogSortOnClick === true) {
				return;
			}
			var self = this,
				o = this.options,
				resetButtonId = self.grid.element[0].id + '_sorting_modalDialog_reset_button',
				modalDialog = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog'),
				$captionButtonContainer,
				$resetButton;

			if ($('#' + resetButtonId).length === 0) {
				$captionButtonContainer = modalDialog.igGridModalDialog('getCaptionButtonContainer');
				$resetButton = $('<button></button>')
					.attr('id', resetButtonId)
					.appendTo($captionButtonContainer);

				$resetButton.igButton({
					labelText: o.modalDialogResetButtonLabel,
					click: function (e) {
						var noCancel, i, cs = self.options.columnSettings;
						noCancel = self._trigger(self.events.modalDialogButtonResetClick, e, {modalDialogElement: modalDialog, owner: self});
						if (noCancel) {
							// M.H. 21 March 2012 Fix for bug #105464
							// M.H. 28 March 2012 Fix for bug #107039
							self._tempExpr = [];
							for (i = 0; i < cs.length; i++) {
								if (cs[i].allowSorting !== false && cs[i].userSet_currentSortDirection !== "undefined") {
									self._tempExpr.push({fieldName: cs[i].columnKey, dir: cs[i].userSet_currentSortDirection});
								}
							}
							self.renderMultipleSortingDialogContent(false);
							self.removeDialogClearButton();
							// M.H. 19 July 2012 Fix for bug #105514
							self._isResetClick = true;
						}
					}
				});
			}
		},
		_multiplesortingDialogButtonOKClick: function (e, args) {
			var noCancel, modalDialog = $('#' + this.grid.element[0].id + '_multiplesorting_modalDialog');

			noCancel = this._trigger(this.events.modalDialogButtonApplyClick, null, {modalDialogElement: modalDialog, owner: this, columnsToSort: this._tempExpr});
			if (noCancel) {
				this.grid.dataSource.settings.sorting.expressions = this._tempExpr;
				this.sortMultiple();
				modalDialog.igGridModalDialog('closeModalDialog');
			}
		},
		_insertColumnModalDialog: function ($ul, $li, pos) {
			var i, $currLi, currPos, listItems = $ul.find('li'), listItemsLength = listItems.length;
			if (listItemsLength === 0 || pos === null || pos === undefined) {
				$li.appendTo($ul);
				return;
			}
			for (i = 0; i < listItemsLength; i++) {
				$currLi = $(listItems[i]);
				currPos = $currLi.attr('li-order');
				if (currPos >= pos) {
					$li.insertBefore($currLi);
					break;
				}
			}
			if (i === listItemsLength) {
				$li.appendTo($ul);
			}
		},
		_getColumnSettings: function (index, key) {
			var i, foundByIndex = null;
			for (i = 0; i < this.options.columnSettings.length; i++) {
				if (this.options.columnSettings[i].columnKey === key) {
					foundByIndex = this.options.columnSettings[i];
					break;
				}

				if (this.options.columnSettings[i].columnIndex === index) {
					foundByIndex = this.options.columnSettings[i];
					break;
				}
			}
			return foundByIndex;
		},
		_getColumnSettingsByIndex: function (index) {
			var key = this.grid.options.columns[index].key;

			return this._getColumnSettings(index, key);
		},
		_headerRendered: function (event, ui) {
			//prevent handling of other grids' events in the case of hierarchical grid
			if (ui.owner.element.attr("id") !== this.grid.element.attr("id")) {
				return;
			}
			// M.H. 26 March 2012 Fix for bug #105568
			if (this.options.mode !== 'single') {
				this._renderMultipleSortingDialog();
				//this.openMultipleSortingDialog();
			}
		},
	    // every grid feature widget should implement this
	    _injectGrid: function (gridInstance, isRebind) {
		    this.grid = gridInstance;
			if (this.options.type === null) {
				// infer type
				this.options.type = this.grid._inferOpType();
			}
            if (this.options.type) {
                this.grid.dataSource.settings.sorting.type = this.options.type;
            } else {
                this.grid.dataSource.settings.sorting.type = "remote";
            }
			//A.T. 12 Feb 2011 - Fix for #66143 - igSorting caseSensitive option doesn't change case sensitivity
			this.grid.dataSource.settings.sorting.caseSensitive = this.options.caseSensitive;
			this.grid.dataSource.settings.sorting.defaultFields = this.grid.dataSource.settings.sorting.expressions;
			this.grid.dataSource.settings.sorting.enabled = true;
			this.grid.dataSource.settings.sorting.sortUrlKey = this.options.sortUrlKey;
			this.grid.dataSource.settings.sorting.sortUrlAscValueKey = this.options.sortUrlKeyAscValue;
			this.grid.dataSource.settings.sorting.sortUrlDescValueKey = this.options.sortUrlKeyDescValue;
			if ($.type(this.options.customSortFunction) === 'function') {
				this.grid.dataSource.settings.sorting.customFunc = this.options.customSortFunction;
			}
            if (this._headerCellRenderedHandler !== null && this._headerCellRenderedHandler !== undefined) {
				this.grid.element.unbind('iggridheadercellrendered', this._headerCellRenderedHandler);
			}
			if (this._uiDirtyHandler !== null) {
				this.grid.element.unbind('iggriduidirty', this._uiDirtyHandler);
			}
			if (this._headerRenderedHandler !== null && this._headerRenderedHandler !== undefined) {
				this.grid.element.unbind('iggridheaderrendered', this._headerRenderedHandler);
			}
			this._headerCellRenderedHandler = $.proxy(this._headerCellRendered, this);
			this._columnsCollectionModifiedHandler = $.proxy(this._columnsCollectionModified, this);
			this._uiDirtyHandler = $.proxy(this._onUIDirty, this);
			this._headerRenderedHandler = $.proxy(this._headerRendered, this);
			this._columnsRearangedHandler = $.proxy(this._columnsRearranged, this);
			this.grid.element.bind('iggridheadercellrendered', this._headerCellRenderedHandler);
			this._virtualHorizontalScrollHandler = $.proxy(this._virtualHorizontalScroll, this);
			this.grid.element.bind('iggridvirtualhorizontalscroll', this._virtualHorizontalScrollHandler);
            // register for uiDirty so that sorting states are cleared when dirty  event gets fired 
			this.grid.element.bind('iggriduidirty', this._uiDirtyHandler);
			this.grid.element.bind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
			this.grid.element.bind('iggridheaderrendered', this._headerRenderedHandler);
			this.grid.element.bind('iggridcolumnmovingcolumnmoved', this._columnsRearangedHandler);
			//if (!isRebind) {
			this._initDefaultSettings();
			//}
			this._clearUi();
			this._currentActiveHeader = null;
			this._currentHeader = null;
			this._currentIndex = null;
			this._currentIdentifier = null;
	    }
    });
    $.extend($.ui.igGridSorting, {version: '12.2.20122.1021'});
}(jQuery));
