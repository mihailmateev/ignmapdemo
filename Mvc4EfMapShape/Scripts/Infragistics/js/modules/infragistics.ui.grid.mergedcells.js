/*!
 * Infragistics.Web.ClientUI Grid Merged Cells 12.2.20122.1021
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
    /*
		igGridMergedCells widget.
		The widget is pluggable to the element where the grid is instantiated and the actual igGrid object doesn't know about this.
		The merged cells widget just attaches its functionality to the grid.
		The widget is used for applying specific "merged" styles to the grid cells when their value is repeated multiple times
		in subsequent cells. Usually used after sorting for making groups of values more distinguishable for the end-user.
    */
	$.widget("ui.igGridMergedCells", {
		css: {
			/* Classes applied to the top cell of a merged group */
			mergedCellsTop: "ui-iggrid-mergedcellstop",
			/* Classes applied to the bottom cell of a merged group */
			mergedCellsBottom: "ui-iggrid-mergedcellsbottom",
			/* Classes applied to every cell of a merged group */
			mergedCell: "ui-iggrid-mergedcell"
		},
		options: {
			/* type="regular|merged" controls the initial state 
			regular type="string" the grid won't be initialized with cells merged
			merged type="string" the grid will be initialized with cells merged
			*/
			initialState: "regular"
		},
		events: {
			/* cancel="true" Event fired before a new merged cells group is created.
			Function takes arguments evt and ui.
			Use ui.row to get reference to the row the merged group starts in.
			Use ui.rowIndex to get the index of the row the merged group starts in.
			Use ui.rowKey to get the key of the row the merged group starts in.
			Use ui.owner to get reference to igGridMergedCells.
			Use ui.grid to get reference to the igGrid the igGridMergedCells are initialized for.
			Use ui.value to get the cells value which is repeated and caused the merged group to be created.
			*/
			cellsMerging: "cellsMerging",
			/* 
			Use ui.row to get reference to the row the merged group starts in.
			Use ui.rowIndex to get the index of the row the merged group starts in.
			Use ui.rowKey to get the key of the row the merged group starts in.
			Use ui.owner to get reference to igGridMergedCells.
			Use ui.grid to get reference to the igGrid the igGridMergedCells are initialized for.
			Use ui.value to get the cells value which is repeated and caused the merged group to be created.
			Use ui.count to get the total count of cells that were merged.
			*/
			cellsMerged: "cellsMerged"
		},
		_create: function () {
			this._first = true;
			this._sortingRequested = false;
		},
		destroy: function () {
			this._removePaint();
			this._unregisterEvents();
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		_gridSorting: function () {
			this._sortingRequested = true;
		},
		_gridSorted: function () {
			this._first = false;
			this._sortingRequested = false;
		},
		_gridRendered: function (event, ui) {
			var key, index, sExp = this.grid.dataSource.settings.sorting.expressions, i, j;
			if (this.options.initialState === "merged" && this._first === true && this._sortingRequested === false) {
				for (j = 0; j < this.grid.options.columns.length; j++) {
					this._paintMergedCells(j);
				}
			} else {
				for (i = 0; i < sExp.length; i++) {
					key = sExp[i].fieldName;
					for (j = 0; j < this.grid.options.columns.length; j++) {
						if (this.grid.options.columns[j].key === key) {
							index = j;
							break;
						}
					}
					this._paintMergedCells(index);
				}
			}
		},
		_paintMergedCells: function (index) {
			var cells, prvCell, first = true, i, args, cval, str = false, count = 0, noCancel;
			cells = $("#" + this.grid.id() + " tbody tr>td:nth-child(" + (index + 1 + this._getSystemColumnsCount()) + ")");
			prvCell = $(cells[0]);
			for (i = 1; i < cells.length; i++) {
				if (prvCell.html() === $(cells[i]).html() && prvCell.html() !== cval) {
					if (str === false) {
						args = this._getEventArgsForCell(prvCell);
						noCancel = this._trigger(this.events.cellsMerging, this, args);
						//	canceling the event cause the whole group to not be grouped
						if (noCancel !== true) {
							cval = prvCell.html();
							prvCell = $(cells[i]);
							continue;
						}
					}
					// clearing cancelled values
					cval = null;
					str = true;
					if (first === true) {
						$(cells[i - 1]).addClass(this.css.mergedCellsTop);
						first = false;
						count++;
					}
					$(cells[i]).addClass(this.css.mergedCell);
					count++;
				} else {
					// if we had a merged cells group before add the merged 
					// cells bottom class and throw merged event
					if (str === true) {
						args.count = count;
						count = 0;
						this._trigger(this.events.cellsMerged, this, args);
						$(cells[i - 1]).addClass(this.css.mergedCellsBottom);
						str = false;
					}
					first = true;
				}
				prvCell = $(cells[i]);
			}
			if (str === true) {
				args.count = count;
				this._trigger(this.events.cellsMerged, this, args);
				$(cells[cells.length - 1]).addClass(this.css.mergedCellsBottom);
			}
		},
		_getSystemColumnsCount: function () {
			return $("#" + this.grid.id() + " tbody>tr:first>td[data-parent='true'],td[data-skip='true']").length;
		},
		_getEventArgsForCell: function (cell) {
			var args, row = cell.closest("tr"), rKey = row.attr("data-id"), rIdx = this._getVisibleRowIndex(row);
			if (rKey === "" || rKey === null || rKey === undefined) {
				rKey = rIdx;
			}
			args = {
				owner: this,
				row: row,
				rowIndex: rIdx,
				rowKey: rKey,
				grid: this.grid,
				value: cell.html()
			};
			return args;
		},
		_getVisibleRowIndex: function (row) {
			return row.closest("tbody")
				.children("tr:not([data-container='true'],[data-grouprow='true'])")
				.index(row);
		},
		_removePaint: function () {
			var dataRows = $("#" + this.grid.id() + "> tbody > tr:not([data-container='true'],[data-grouprow='true'])"), cells, i;
			cells = dataRows.children("td." + this.css.mergedCellsTop + ",td." + this.css.mergedCell);
			for (i = 0; i < cells.length; i++) {
				$(cells[i])
					.removeClass(this.css.mergedCellsTop)
					.removeClass(this.css.mergedCell)
					.removeClass(this.css.mergedCellsBottom);
			}
		},
		_createHandlers: function () {
			this._gridRenderedHandler = $.proxy(this._gridRendered, this);
			this._sortingInitiatedHandler = $.proxy(this._gridSorting, this);
			this._sortingHandler = $.proxy(this._gridSorted, this);
		},
		_registerEvents: function () {
			this.grid.element.bind('iggridrendered', this._gridRenderedHandler);
			this.grid.element.bind('iggridsortingcolumnsorting', this._sortingInitiatedHandler);
			this.grid.element.bind('iggridsortingcolumnsorted', this._sortingHandler);
		},
		_unregisterEvents: function () {
			this.grid.element.unbind('iggridrendered', this._gridRenderedHandler);
			this.grid.element.unbind('iggridsortingcolumnsorting', this._sortingInitiatedHandler);
			this.grid.element.unbind('iggridsortingcolumnsorted', this._sortingHandler);
		},
		_injectGrid: function (gridInstance, isRebind) {
		    this.grid = gridInstance;
			this._createHandlers();
			this._registerEvents();
		}
	});
	$.extend($.ui.igGridMergedCells, {version: '12.2.20122.1021'});
}(jQuery));