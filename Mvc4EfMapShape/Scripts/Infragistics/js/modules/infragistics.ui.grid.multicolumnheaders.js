/*!
 * Infragistics.Web.ClientUI Grid Multi Headers 12.2.20122.1021
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
    $.widget("ui.igGridMultiColumnHeaders", {
		/* 
        igGridMultiHeaders widget 
        The widget is pluggable to the element where the grid is instantiated and the actual igGrid object doesn't know about it.
        */
		css: {
			multiHeaderCell: 'ui-iggrid-multiheader-cell'
	    },
        options: {
        },
        _createWidget: function () {
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
        _create: function () {
        },
		_renderingMultiColumnHeader: function () {
			// internal event multi column headers
			this._renderHeaderColumns(this.grid._headerParent);
			this.grid._trigger(this.grid.events.headerRendered, null, {owner: this.grid, table: this.grid.headersTable()});
			this.grid._headerRenderCancel = false;
		},
		_analyzeRowspanRows: function (oldCols, level) {
			// analyze rowspans for each cell
			// if header is at level 0 set its rowspan if it is rendered on row which is not on level 0
			// if rowspan is set for some of the column cells through column options generates custom spans and sets the correct level at which columns should be rendered
			var i, col, groups = [], ml = this.grid._maxLevel - level, rowspan;

			for (i = 0; i < oldCols.length; i++) {
				rowspan = 1;
				col = oldCols[i];
				// M.H. 4 July 2012 Fix for bug #116205
				if ($.type(col.rowspan) === "string") {
					col.rowspan = parseInt(col.rowspan, 10);
				}
				if (col.rowspan > 0) {
					rowspan = col.rowspan;
				}
				if (col.group !== undefined && col.group !== null) {
					groups.push({group: col.group, level: level + rowspan});
				} else {
					if (col.level === 0) {
						// M.H. 4 July 2012 Fix for bug #116205
						if (col.rowspan === null || col.rowspan === undefined || isNaN(col.rowspan)) {
							if (ml + 1 - col.level > 0) {
								col.rowspan = ml + 1 - col.level;
							}
						}
					}
				}

				if (this._rows[ml] === undefined || this._rows[ml] === null) {
					this._rows[ml] = [];
				}
				this._rows[ml].push(col);
			}

			for (i = 0; i < groups.length; i++) {
				this._analyzeRowspanRows(groups[i].group, groups[i].level);
			}
		},
		_renderRow: function (headerContainer, row, level) {
			// render each row
			var col, i, $headerCell, $tr = $('<tr data-mch-level="' + level + '"></tr>').appendTo(headerContainer);

			for (i = 0; i < row.length; i++) {
				col = row[i];
				$headerCell = this._createHeaderColumnMarkup(col.headerText, col.colspan, col.key, col.level, col.identifier, col.rowspan);
				$headerCell.appendTo($tr);
			}
		},
		_renderHeaderColumns: function ($container) {
			// function is called when the internal event _renderingMultiColumnHeader is called
			// analyze multicolumn headers - set for each row the necessary header cells and renders header columns
			var $th, i, oldCols,
				cols = this.grid.options.columns,
				colsLength = cols.length,
				initHiddenCols = this.grid._initialHiddenColumns,
				gridId = this.grid.element[0].id, $thead;

			this._arrayTargetRowspan = [];
			this._totalColumnsLength = $container.find('colgroup col').length;
			// M.H. 23 Aug 2012 Fix for bug #118364 - if container has thead then empty and use it to show MCH - e.g.: when binding to table
			$thead = $container.find('thead');
			if ($thead.length > 0) {
				$container = $thead.empty();
			} else {
				$container = $('<thead></thead>').appendTo($container);
			}
			this._tr = {};
			oldCols = this.grid._oldCols;
			this._rows = {};
			// analyze rowspans for reach row and sets for each row which are column columns
			this._analyzeRowspanRows(oldCols, 0);

			// when analyzed redner multicolumn headers
			for (i = this.grid._maxLevel; i >= 0; i--) {
				if (this._rows[i] !== null && this._rows[i] !== undefined) {
					this._renderRow($container, this._rows[i], i);
				}
			}
			// set data-index and populates headercells - internal array which persists order of column header cells at level 0
			for (i = 0; i < colsLength; i++) {
				$th = $('#' + gridId + '_' + cols[i].key).data('columnIndex', i);
				$th.data('data-mch-order', i);
				this.grid._headerCells.push($th);
			}
			// M.H. 20 July 2012 Fix for bug #117468
			if (initHiddenCols) {
				for (i = 0; i < initHiddenCols.length; i++) {
					$th = $('#' + gridId + '_' + initHiddenCols[i].key).css('display', 'none');
				}
			}
		},
		_createHeaderColumnMarkup: function (headerText, colSpan, columnKey, level, identifier, rowspan) {
			// render each header column and fire headerCellRendered event
			var grid = this.grid, id,
				isMultiColumnHeader = true,
				headerClass = grid.css.headerClass,
				$th = $('<th></th>'),
				$headerCell;

			$headerCell = $th.append('<span class="' + grid.css.headerTextClass + '">' + headerText + '</span>')
				.attr('role', 'rowheader').addClass(headerClass);
			if (colSpan > 1) {
				$th.attr('colspan', colSpan);
			}
			if (rowspan > 1) {
				$headerCell.attr('rowspan', rowspan);
			}

			if (columnKey) {
				$headerCell.attr('id', this.grid.element[0].id + '_' + columnKey);
			}
			if (level === 0) {
				id = columnKey;
				isMultiColumnHeader = false;
				$headerCell.attr('data-isheadercell', true);
			} else {
				id = identifier;
				$headerCell.addClass(this.css.multiHeaderCell);
				$headerCell.attr('data-mch-id', identifier);
			}

			grid._trigger(grid.events.headerCellRendered, null, {owner: grid, th: $headerCell, columnKey: id, isMultiColumnHeader: isMultiColumnHeader});

			return $headerCell;
		},
		getMultiColumnHeaders: function () {
			/* returns multicolumn headers array. if there aren't multicolumn headers returns undefined
				returnType="array" array of columns
			*/
			return this.grid._oldCols;
		},
		destroy: function () {
			/* destroys the multicolumn widget */
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		_injectGrid: function (gridInstance, isRebind) {
			this.grid = gridInstance;
        }
    });

    $.extend($.ui.igGridMultiHeaders, {version: '12.2.20122.1021'});
}(jQuery));