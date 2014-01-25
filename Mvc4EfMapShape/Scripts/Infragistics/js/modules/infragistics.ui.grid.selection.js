/*globals _comma_separated_list_of_variables_*/
/*!
 * Infragistics.Web.ClientUI Grid Selection (and Keyboard navigation) 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.mobile-1.0.1.js (for touch only)
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 *	modernizr.js
 */
/*global jQuery, Modernizr*/
if (typeof jQuery !== 'function') {
	throw new Error("jQuery is undefined");
}

(function ($) {
	/* Grid selection jQuery UI widget */
    $.widget("ui.igGridSelection", {
		css: {
			/* classes applied to a cell once it's selected */
			selectedCell: "ui-iggrid-selectedcell ui-state-active",
			/* classes applied to a row once it's selected */
			selectedRow: "ui-iggrid-selectedrow ui-state-active",
			//selectedHeader: "ui-iggrid-selectedheader ui-state-active", // for columns
			/* classes applied to the currently active cell, if any (mode = "cell") */
			activeCell: "ui-iggrid-activecell ui-state-focus",
			/* classes applied to the currently active row, if any (mode = "row") */
			activeRow: "ui-iggrid-activerow ui-state-focus"
		},
		options: {
			/* type="bool" Enables / Disables multiple selection of cells and rows - depending on the mode */
			multipleSelection: false,
			/* type="bool" Enables / disables selection via dragging with the mouse - only applicable for cell selection */
			mouseDragSelect: true,
			/* type="row|cell" Defines type of the selection.
            row type="string" Defines row selection mode.
            cell type="string" Defines cell selection mode.
            */
			mode: 'row',
			/* type="bool" Enables / disables activation of rows and cells. Activation implies ability to perform navigating through cells and rows via the keyboard, and selecting rows and cells using CTRL / SHIFT - in the way cells/rows are selected in Ms Excel */
			activation: true,
			/* type="bool" if wrapAround is enabled and selection is on the first or last row or cell, then when the end user tries to go beyond that, the first/last row or cell will be selected */
			wrapAround: true,
			/* if true will basically skip going into child grids with down / up / right / left arrow keys, when in the context of hierarchical grid */
			skipChildren: true,
			/* type="bool" if true multiple selection of cells is done as if CTRL is being held. the option is disregarded if mode is set
			to row. this option is useful for enabling multiple discountinued selection on touch environments. */
			multipleCellSelectOnClick: false,
			/* type="bool" Enables / disables selection via continuous touch event - only applicable for cell selection and
			touch-supported environments */
			touchDragSelect: true
		},
		events: {
			/* cancel="true" Event fired before row(s) are about to be selected (cancellable).
			Return false in order to cancel selection changing.			
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSelection.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.row.element to get reference to row DOM element.
			Use ui.row.index to get row index.
			Use ui.selectedRows to get reference to rows object array.
			ui.manual - returns true if internal trigger.
			*/
			rowSelectionChanging: "rowSelectionChanging",
			/* Event fired after row(s) are selected.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSelection.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.row.element to get reference to row DOM element.
			Use ui.row.index to get row index.
			Use ui.selectedRows to get reference to rows object array.
			ui.manual - returns true if internal trigger.
			*/
			rowSelectionChanged: "rowSelectionChanged",
			/* cancel="true" Event fired before cell(s) are about to be selected (cancellable).
			Return false in order to cancel cell selection changing.			
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSelection.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.cell.element to get reference to cell DOM element.
			Use ui.cell.columnKey to get reference to column key.
			Use ui.cell.index to get column index.
			Use ui.cell.row to get reference to row DOM element.
			Use ui.cell.rowIndex to get row index.
			Use ui.selectedCells to get reference to selected cells object array.
			ui.manual - returns true if internal trigger.
			*/
			cellSelectionChanging: "cellSelectionChanging",
			/* cancel="true" Event fired after cell(s) are selected.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSelection.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.cell.element to get reference to cell DOM element.
			Use ui.cell.columnKey to get reference to column key.
			Use ui.cell.index to get column index.
			Use ui.cell.row to get reference to row DOM element.
			Use ui.cell.rowIndex to get row index.
			Use ui.selectedCells to get reference to selected cells object array.
			ui.manual - returns true if internal trigger.
			*/
			cellSelectionChanged: "cellSelectionChanged",
			/* cancel="true" Event fired before a cell becomes active (focus style applied) (cancellable).
			Return false in order to cancel active cell changing.	
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSelection.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.cell.element to get reference to cell DOM element.
			Use ui.cell.columnKey to get column key.
			Use ui.cell.index to get column index.
			Use ui.cell.row to get reference to row DOM element.
			Use ui.cell.rowIndex to get row index.
			*/
			activeCellChanging: "activeCellChanging",
			/* Event fired after a cell becomes active (focus style applied).
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSelection.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.cell.element to get reference to cell DOM element.
			Use ui.cell.columnKey to get column key.
			Use ui.cell.index to get column index.
			Use ui.cell.row to get reference to row DOM element.
			Use ui.cell.rowIndex to get row index.
			*/
			activeCellChanged: "activeCellChanged",
			/* cancel="true" Event fired before a row becomes active (focus style applied) (cancellable).
			Return false in order to cancel active row changing.			
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSelection.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.row.element to get reference to active row DOM element.
			Use ui.row.index to get active row index.
			*/
			activeRowChanging: "activeRowChanging",
			/* Event fired after a row becomes active (focus style applied). 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridSelection.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.row.element to get reference to active row DOM element.
			Use ui.row.index to get row index.
			*/
			activeRowChanged: "activeRowChanged"
		},
		_create: function () {
			this._isMouseDown = false;
			this._isDrag = false;
			this._registeredEvents = false;
			this.y_exclude_current = 0;
			this.x_exclude_current = 0;
		},
		_setOption: function (key, value) {
			// handle new settings and update options hash
			$.Widget.prototype._setOption.apply(this, arguments);
			// throw an error for the options that cannot be changed after the widget has been created
			if (key === 'mode') {
				throw new Error($.ig.Grid.locale.optionChangeNotSupported + ' ' + key);
			}
		},
		_dataRendered: function () {
			if (!this._registeredEvents) {
				this._registerEvents();
				this._registeredEvents = true;
			} else {
				this._registerTbodyEvents();
			}
			if (this._hc === undefined) {
				this._hc = this.grid.container().closest('.ui-iggrid-root').length > 0;
				if (this._hc === false) {
					this._hc = this.grid.element.hasClass('ui-iggrid-root');
				}
			}
			if (this._hc) {
				this._hgrid = this.grid.element.closest(".ui-iggrid-root");
			}
			if (this._groupBy === undefined) {
				this._groupBy = this.grid.container().find('.ui-iggrid-groupbyarea').length > 0;
			}
			this._refresh(true);
			// if selectedRowIndex and selectedCellIndex are defined, select them (initial programmatic selection)
			if (!this._initialSelectionInitialized) {
				if (this.options.selectedRowIndex !== undefined && this.options.selectedRowIndex !== null && this.options.selectedRowIndex >= 0) {
					if (this.options.selectedCellIndex === undefined) {
						this.selectRow(this.options.selectedRowIndex);
					} else if (this.options.selectedCellIndex !== undefined && this.options.selectedRowIndex !== null && this.options.selectedCellIndex >= 0) {
						this.selectCell(this.options.selectedRowIndex, this.options.selectedCellIndex);
					}
				}
				this._initialSelectionInitialized = true;
			}
			// VS 04/18/2012. Bug 109531
			this.grid._startRowIndex = this.grid._startRowIndex || 0;
		},
		_refresh: function (init) {
			if (!init || !this._firstCell) {
				this._firstCell = this.grid.element.children('tbody').children('tr:visible:nth-child(1) td:nth-child(1)');
				if (!this._firstCell) {
					this._firstRow = this.grid.element.children('tbody').children('tr:visible:nth-child(1)');
				}
			}
			if (!init || !this._firstRow || !this._rowCount) {
				this._firstRow = this.grid.element.children('tbody').children('tr:visible:nth-child(1)');
				if (this.grid.options.virtualization || this.grid.options.rowVirtualization) {
					this._rowCount = this.grid.dataSource.dataView().length;
				} else {
					this._rowCount = this.grid.element.find('tbody tr').length;
				}
				this._length = this._firstRow ? this._firstRow.children().length : 0;
			}
			this.x_exclude_current = this._calcExtraCells();
		},
		_registerTbodyEvents: function () {
			var tbody = this.grid.element.find('tbody');
			if (!this._mouseDownHandler) {
				this._mouseDownHandler = $.proxy(this._mouseDown, this);
				this._selectStartHandler = $.proxy(this._selectStart, this);
				this._mouseMoveHandler = $.proxy(this._dragSelectChange, this);
				this._mouseUpHandler = $.proxy(this._selectInternal, this);
				if ($.mobile !== undefined && typeof Modernizr === "object" && Modernizr.touch === true) {
					this._vmouseMoveHandler = $.proxy(this._vMouseMove, this);
					this._touchEvents = true;
				}
			} else {
				if (this._vmouseMoveHandler) {
					tbody.unbind({
						vmousedown: this._mouseDownHandler,
						vmousemove: this._vmouseMoveHandler,
						vmouseup: this._mouseUpHandler,
						selectstart: this._selectStartHandler
					});
				} else {
					tbody.unbind({
						mousedown: this._mouseDownHandler,
						mousemove: this._mouseMoveHandler,
						mouseup: this._mouseUpHandler,
						selectstart: this._selectStartHandler
					});
				}
			}
			if (this._vmouseMoveHandler) {
				tbody.bind({
					vmousedown: this._mouseDownHandler,
					vmousemove: this._vmouseMoveHandler,
					vmouseup: this._mouseUpHandler,
					selectstart: this._selectStartHandler
				});
			} else {
				tbody.bind({
					mousedown: this._mouseDownHandler,
					mousemove: this._mouseMoveHandler,
					mouseup: this._mouseUpHandler,
					selectstart: this._selectStartHandler
				});
			}
		},
		_registerEvents: function () {
			this._registerTbodyEvents();
			$(document).bind({
				mouseup: $.proxy(this._releaseMouse, this)
			});
			if (this.grid.options.virtualization) {
				$('#' + this.grid.element[0].id + '_scrollContainer').bind({
					scroll: $.proxy(this._releaseMouse, this)
				});
			} else {
				$('#' + this.grid.element[0].id + '_scroll').bind({
					scroll: $.proxy(this._releaseMouse, this)
				});
			}
			this._keyDownHandler = $.proxy(this._navigate, this);
			this._focusHandler = $.proxy(this._navigateFocus, this);
			this._markMouseDownHandler = $.proxy(this._markMouseDown, this);
			if (this.grid.options.virtualization || this.grid.options.rowVirtualization) {
				$('#' + this.grid.element[0].id + '_displayContainer_a').bind({
					keydown: this._keyDownHandler,
					focus: this._focusHandler
				//	mousedown: this._markMouseDownHandler
				});
			} else {
				this.grid.container().bind({
					keydown: this._keyDownHandler,
					focus: this._focusHandler
				//	mousedown: this._markMouseDownHandler
				});
			}
			if (this.options.multipleSelection === true) {
				this.grid.element.addClass('ui-iggrid-canceltextselection');
			}
		},
		_unregisterEvents: function () {
			this.grid.element.unbind('mousedown', this._mouseDownHandler);
			this.grid.element.unbind('selectstart', this._selectStartHandler);
			this.grid.element.unbind('mousemove', this._mouseMoveHandler);
			this.grid.element.unbind('mouseup', this._mouseUpHandler);
			this.grid.container().unbind('keydown', this._keyDownHandlerHandler);
			this.grid.container().unbind('focus', this._focusHandler);
			this.grid.container().unbind('mousedown', this._markMouseDownHandler);
			this.grid.element.unbind('iggriduisoftdirty', this._uiDirtyHandler);
			this.grid.element.unbind('ighierarchicalgridrowexpanded', this._rowExpandedHandler);
			this.grid.element.unbind('iggridcolumnscollectionmodified', this._columnsCollectionModifiedHandler);
			//this.grid.element.unbind('iggriduidirty', this._uiDirtyHandler);
			delete this._uiDirtyHandler;
			this.grid.element.removeClass('ui-iggrid-canceltextselection');
		},
		_dragSelectChange: function (event) {
			var selectedCells = [], startRowIndex, startColIndex, endRowIndex, endColIndex, i, j, outgrid,
				currentCell, tmp, cell, noCancel = true, v = this.grid.options.virtualization || this.grid.options.rowVirtualization;
			if (event && this._suspend) {
				return;
			}
			if (!this._prevX && !this._prevY) {
				this._prevX = event.clientX;
				this._prevY = event.clientY;
			}
			//A.T. 24 Nov 2011 - Fix for bug #80811 Multiple cell selection by click + holding Shift/ Ctrl not working in IE when virtualization = true
			// we need to ensure that we don't consider this a dragging operation, for some reason when virtualization
			// is enabled, in IE, mouse move is triggered with a few pixels diff 
			if (Math.abs(this._prevX - event.clientX) < 5 && Math.abs(this._prevY - event.clientY) < 5) {
				return;
			}
			this._prevX = event.clientX;
			this._prevY = event.clientY;
			if (this.options.mouseDragSelect === false || this.options.multipleSelection === false || this.options.mode === 'row') {
				return;
			}
			if (this._isMouseDown === true) {
				this._isDrag = true;
			} else {
				return;
			}
			// check if dragging
			if (this._isMouseDown !== true || this.options.mode !== 'cell') {
				return;
			}
			// if we are in an hierarchical grid check that we aren't trying to drag over other grids (in expanded rows)
			//A.T. fix for bug #92299
			if (this._hc && event && event.target) {
				outgrid = $(event.target).closest(".ui-iggrid-table");
				if (outgrid.length > 0 && outgrid.attr('id') !== this.grid.element.attr('id')) {
					event.stopPropagation();
					event.preventDefault();
					return;
				}
			}
			currentCell = this._cellFromEvent(event);
			if (!currentCell) {
				return;
			}
			if (currentCell && this.activeCell() && currentCell.index === this.activeCell().index && currentCell.rowIndex === this.activeCell().rowIndex) {
				return;
			}
			noCancel = this._trigger(this.events.cellSelectionChanging, event, {cell: currentCell, selectedCells: this.grid._selectedCells, owner: this, manual: false});
			if (noCancel) {
				// activate the cell
				if (this.options.activation === true) {
					this._activateCell(currentCell, event);
				}
				startRowIndex = this._firstDragCell.rowIndex;
				startColIndex = this._firstDragCell.index + this._firstDragCell.element.parent().children("[data-skip=true]").length;
				endRowIndex = currentCell.rowIndex;
				endColIndex = currentCell.index + this._firstDragCell.element.parent().children("[data-skip=true]").length;
				if (endRowIndex < startRowIndex) {
					tmp = startRowIndex;
					startRowIndex = endRowIndex;
					endRowIndex = tmp;
				}
				if (endColIndex < startColIndex) {
					tmp = startColIndex;
					startColIndex = endColIndex;
					endColIndex = tmp;
				}
				// A.T. Fix for bug #73402
				// A.T. should call clear selection here
				this.clearSelection(true);
				/*
				for (i = 0; i < this.grid._selectedCells.length; i++) {
					this.grid._selectedCells[i].element.removeClass(this.css.selectedCell);
				}
				this.grid._selectedCells = [];
				*/
				if (v) {
					startRowIndex -= this.grid._startRowIndex;
					endRowIndex -= this.grid._startRowIndex;
				}
				for (i = startRowIndex; i <= endRowIndex; i++) {
					for (j = startColIndex; j <= endColIndex; j++) {
						cell = $(this.grid.cellAt(j, i)).addClass(this.css.selectedCell);
						this.grid._selectedCells.push(this._cellFromElement(cell, i + this.grid._startRowIndex, j));
					}
				}
				// fire Selection Changed 
				this._currentCells = selectedCells;
				this._trigger(this.events.cellSelectionChanged, event, {cell: currentCell, selectedCells: this.grid._selectedCells, owner: this, manual: false});
			}
		},
		_vMouseMove: function (event) {
			// only prevent default if touch drag should be started
			if (this._touchDragStart === true) {
				event.which = 1;
				this._isMouseDown = true;
				this._dragSelectChange(event);
				event.preventDefault();
				event.stopPropagation();
			}
			return true;
		},
		_cellFromEvent: function (event) {
			var target, $target;
			if (this._touchEvents === true) {
				$target = $(document.elementFromPoint(event.clientX, event.clientY));
			} else {
				$target = $(event.originalEvent.originalTarget || event.originalEvent.srcElement);
			}
			target = $target.is('td,th') ? $target[0] : $target.closest('td,th')[0];
			return this._cellFromElement(target);
		},
		_cellFromElement: function (e, row, col) {
			var $target, parent, parentIndex, cellIndex, key = null, tmpIndex;
			$target = $(e);
			parent = $target.parent();
			if (row === undefined || col === undefined) {
				cellIndex = $target.index();
				parentIndex = parent.index();
				// virtualization fix
				if (this.grid.options.virtualization || this.grid.options.rowVirtualization || this.grid.options.columnVirtualization) {
					if (this.grid._startRowIndex > 0) {
						parentIndex += this.grid._startRowIndex;
					}
					if (this.grid._startColIndex > 0) {
						cellIndex += this.grid._startColIndex;
					}
				}
			} else {
				cellIndex = col;
				parentIndex = row;
			}
			if (cellIndex === -1) {
				return;
			}
			if (cellIndex - this.x_exclude_current < 0) {
				tmpIndex = 0;
			} else if (cellIndex - this.x_exclude_current >= this.grid.options.columns.length) {
				tmpIndex = this.grid.options.columns.length - 1;
			} else {
				tmpIndex = cellIndex - this.x_exclude_current;
			}
			if (this._hc === true && cellIndex - this.x_exclude_current < this.grid.options.columns.length) {
				tmpIndex--;
			}
			if (tmpIndex >= 0 && this.grid.options.columns.length > tmpIndex) {
				key = this.grid.options.columns[tmpIndex].key;
			}
			if (this.y_exclude_current !== undefined) {
				parentIndex -= this.y_exclude_current;
			}
			if (this.x_exclude_current !== undefined) {
				cellIndex -= this.x_exclude_current;
			}
			return {element: $target, row: parent, index: cellIndex, rowIndex: parentIndex, columnKey: key};
		},
		_mouseDown: function (event) {
			var v = (this.grid.options.virtualization || this.grid.options.rowVirtualization || this.grid.options.columnVirtualization), outgrid;
			if (event && this._suspend) {
				return;
			}
			// S.S. Bug #113846, July 6th, 2012 In Chrome if a scrollbar is hit no mouseup event is followed therefore an endless
			// drag select is initiated. We should ensure we exit mousedown before it modifies the selection state
			if (event.target && $(event.target).hasClass("ui-iggrid-scrolldiv")) {
				return;
			}
			// check if event is thrown on touch.
			if (event && event.which === 0) {
				event.which = 1;
				if (this.options.touchDragSelect === true) {
					this._touchDragStart = true;
				}
			}
			// check if we are clicking the left or the right mouse button. Cancel selection on the right mouse button
			if (event && event.which !== 1) {
				return;
			}
			// we need to ensure that selection doesn't get propagated in child grids
			if (this._hc && event && event.target) {
				outgrid = $(event.target).closest(".ui-iggrid-table");
				if (outgrid.length > 0 && outgrid.attr('id') !== this.grid.element.attr('id')) {
					//event.stopPropagation();
					//event.preventDefault();
					return;
				}
			}
			// skip special empty cells (Outlook GroupBy, etc.)
			if (event.target && $(event.target).closest('td').attr('data-skip') === "true") {
				event.stopPropagation();
				event.preventDefault();
				// suppressing mousedown event destroyes igGridUpdating
				$(event.target).trigger('iggridselectionmousedown');
				return;
			}
			if (event.which === 2) {
				return; // middle mouse button was clicked, so we don't want to do anything in that case
			}
			this._isMouseDown = true;
			if (this.options.multipleSelection === false && v) {
				$('#' + this.grid.element[0].id + '_displayContainer_a').focus();
                // L.A. 28 May 2012 Fixed bug #105997 - Can't navigate selection with arrow keys when fixed virtualization is enabled
                // fixed in case of continuous virtualization
                if ((this.grid.options.virtualization || this.grid.options.rowVirtualization) && this.grid.options.virtualizationMode === 'continuous') {
                    event.preventDefault();
                }
			}
			if (this.options.mouseDragSelect === false || this.options.multipleSelection === false) {
				//I.I. bug fix for 105399, 102462
				if ((this.grid.options.virtualization || this.grid.options.rowVirtualization) && this.grid.options.virtualizationMode !== 'continuous') {
					return false;
				}
				return;
			}
			// save mouse coordinates
			this._mouseLocation = {clientX: event.clientX, clientY: event.clientY};
			this._firstDragCell = this._cellFromEvent(event);
			if (this._firstDragCell.element.hasClass(this.css.selectedCell) === false) {
				this._touchDragStart = false;
			}
			if (!event.ctrlKey && !event.shiftKey && this.options.multipleSelection !== true) {
				this.clearSelection(true);
			}
			this._isInternalFocus = true;
			// focus the grid container element
			if (this.options.multipleSelection === true && v) {
				$('#' + this.grid.element[0].id + '_displayContainer_a').focus();
			} else {
                this.grid.container().focus();
			}
			if (!$(event.target).hasClass('ui-iggrid-expandbutton') && !$(event.target).hasClass('ui-iggrid-expandcolumn')
					&& !$(event.target).hasClass('ui-iggrid-expandbuttongb')) {
				//if (this._touchDragStart === true) {
				// L.A. 27 August 2012 - Fixing bug #119735 Selection's keyboard navigation doesn't work when virtualization is true.
				event.stopPropagation();
				event.preventDefault();
				//}
				// suppressing mousedown event destroyes igGridUpdating
				$(event.target).trigger('iggridselectionmousedown');
			}
		},
		_markMouseDown: function (event) {
			this._isMouseDown = true;
		},
		_selectStart: function (event) {
			if (event && this._suspend) {
				return;
			}
			if (this.options.mouseDragSelect === false || this.options.multipleSelection === false) {
				return false;
			}
			event.stopPropagation();
			event.preventDefault();
		},
		_releaseMouse: function () {
			this._isMouseDown = false;
		},
		_selectInternal: function (event, row, col) {
			// apply row selected class to TR 
			// add row to the selected rows collection
			var target, parent, $target, gridCell, gridRow, i, noCancel = true, isInternal = false, vindex, isRs, outgrid, contSelection,
				isRowSelection = false, parentIndex, v = this.grid.options.virtualization || this.grid.options.columnVirtualization, excludeTmp;
			//A.T. 29 Nov. Fix for bug #96743 - When select a column from Hidden Columns drop down a row is selected
			if (!this._isMouseDown && event) {
				return;
			}
			// if we are on touch which is 0 and we need to make it work as though we've clicked left mouse button
			if (event && event.which === 0) {
				event.which = 1;
			}
			// check if we are clicking the left or the right mouse button. Cancel selection on the right mouse button
			if (event && event.which !== 1) {
				return;
			}
			if (event !== null && event.target && ($(event.target).hasClass("ui-iggrid-childarea")
					||  $(event.target).parent().hasClass("ui-iggrid-childarea") || $(event.target).hasClass("ui-widget-header"))) {
				return;
			}
			// check for programmatic access
			if (event === null) {
				isInternal = true;
				// when we are doing shift selections, we don't want to include again the special rows, they don't matter
				excludeTmp = this.y_exclude_current;
				if (this._isContinuous || isInternal) {
					excludeTmp = 0;
				}
				if (this._rangeSelect) {
					vindex = row - this.grid._startRowIndex < 0 ? 0 : row - this.grid._startRowIndex + excludeTmp;
				} else {
					vindex = row + excludeTmp;
				}
				event = {originalEvent: {}};
				if (col === null || col === undefined) {
					isRowSelection = true;
					if (v) {
						event.originalEvent.originalTarget = this.grid.rowAt(vindex);
					} else {
						event.originalEvent.originalTarget = this.grid.rowAt(row - excludeTmp);
					}
				} else {
					if (v) {
						event.originalEvent.originalTarget = this.grid.cellAt(col, vindex);
					} else {
						event.originalEvent.originalTarget = this.grid.cellAt(col + this.x_exclude_current, row - excludeTmp);
					}
				}
				event.originalEvent.srcElement = event.originalEvent.originalTarget;
			}
			// S.S. March 16, 2012 Switching the positions of certain checks, due to RowSelector specific issues when selection is wiped
			// on hierarchial grid children bands before RowSelector click is recognized.
			target = event.originalEvent.originalTarget || event.originalEvent.srcElement;
			$target = $(target);
			isRs = $target.closest("th.ui-iggrid-rowselector-class").length === 1;
			// Clicking a rs checkbox
			if (event && $target.is("span") && ($target.attr("data-chk") !== undefined || $target.parent().attr("data-chk") !== undefined)) {
				this._mouseCtrlSelect = true;
				return;
			}
			if (this._hc && event && event.target) {
				outgrid = $(event.target).closest(".ui-iggrid-table");
				if (outgrid.length > 0 && outgrid.attr('id') !== this.grid.element.attr('id')) {
					event.stopPropagation();
					event.preventDefault();
					return;
				}
				// clear the rest of the selection, if this is the first time we select anything (only if the previous selection is either undefined or in a different grid)
				// otherwise we will be calling this every time we select a row or cell from the same grid, which will be very ineffective in terms of performance
				// the idea of the data-selectgrid is to store the current id of the grid we're working with. initially that will be undefined
				if (this._hgrid && this._hgrid.data("data-selectgrid") !== this.grid.element.attr('id')) {
					this.clearSelectionAllOthers(false, true);
					this._hgrid.data("data-selectgrid", this.grid.element.attr('id'));
				}
			}
			if (this._hc && this._hdirty) {
				//this.y_exclude = this._excludeRows($(event.target).closest('tr'));
				this.y_exclude_current = this._excludeRowsLt($target.closest('tr'));
			} else if (!this._hc) {
				this.y_exclude_current = 0;
			}
			if (this.x_exclude_current === undefined) {
				// check if we don't have extra cells
				this.x_exclude_current = this._calcExtraCells();
			}
			if (event && this._suspend) {
				return;
			}
			if (event && event.which === 2) {
				return;
			}
			if (this._isDrag === true && event !== null) {
				this._isDrag = false;
				return;
			}
			// fix for templating. if the cell template contains other elements, and we click on them, just taking $(target) won't give us the TR but (probably) the TD ! 
			parent = $target.closest('tr');
			//parent = $target.parent();
			if ($target.closest('th').length > 0 && isRs === false) {
				return; // we are clicking on the headers 
			}
			if ($target.closest('td').attr('data-skip') === "true") {
				//event.stopPropagation();
				//event.preventDefault();
				return;
			}
			// A.T. 23 Aug 2011: clicking directly on expansion indicators shouldn't select anything
			//if ($target.hasClass('ui-iggrid-expandcolumn') || $target.hasClass('ui-iggrid-expandbutton')) {
			//	return;
			//}
			if (event.ctrlKey) {
				this._isContinuous = false;
				this._mouseCtrlSelect = true;
			}
			if (this.options.multipleCellSelectOnClick === true && this.options.mode === "cell" && this.activeCell()) {
				this._isContinuous = false;
				this._mouseCtrlSelect = true;
				contSelection = true;
			}
			if (this.options.mode === 'cell' && isRowSelection === false) {
				if (isRs === true) {
					// S.S. April 11, 2012, Bug #100732, #100737 if the the call is done internally it's caused by
					// keyboard navigation in which chase we need to activate the RS cell so navigation doesn't break
					if (isInternal === true) {
						target = $target.is('th') ? $target[0] : $target.closest('th')[0];
					} else {
						target = $target.is('th') ? $target.next()[0] : $target.closest('th').next()[0];
					}
				} else {
					target = $target.is('td') ? $target[0] : $target.closest('td')[0];
				}
				gridCell = this._cellFromElement(target);
				if (this.options.activation === true && this._rangeSelect !== true && this._singleShiftSelect !== true && this._ctrlSelect !== true) {
					if (this.activeCell() && gridCell && this._mouseCtrlSelect !== true &&
							gridCell.index === this.activeCell().index && gridCell.rowIndex === this.activeCell().rowIndex) {
						return; // we want to activate the same cell 
					}
					if (this._mouseCtrlSelect !== true) {
						this._activateCell(gridCell, event);
					} else if (this.activeCell() && (gridCell.index !== this.activeCell().index || gridCell.rowIndex !== this.activeCell().rowIndex)) {
						this._activateCell(gridCell, event);
					}
				}
			} else {
				if (isInternal) {
					parent = $(target);
				}
				// Bug #92033 S.S. May 15, 2012. parent.index() returns the row index without taking into account expanded/group rows therefore
				// unexpected number is pushed in the selectedRows array and later deselecting the same row can only be done if that specific
				// index is known to the user. In the new way the index only depends on data rows. 
				// Bug #104635 S.S. March 26, 2012. Removing [data-grouprow='true'] from the selector because navigation does not work.
				//parentIndex = parent.parent().children("tr:not([data-container='true'])").index(parent);
				parentIndex = parent.index();
				//if (v) {
				//	parentIndex += this.grid._startRowIndex;
				//}
				gridRow = {element: parent, index: parentIndex + this.grid._startRowIndex - this.y_exclude_current};
				if (this.options.activation === true && this._rangeSelect !== true && this._singleShiftSelect !== true && this._ctrlSelect !== true) {
					if (!(this.activeRow() && gridRow && this._mouseCtrlSelect !== true &&
							gridRow.index === this.activeRow().index)) {
						//	return; // we want to activate the same cell , but we may want to select it
						//}
						if (this._mouseCtrlSelect !== true) {
							this._activateRow(gridRow, event);
						} else if (this.activeRow() && gridRow.index !== this.activeRow().index) {
							this._activateRow(gridRow, event);
						}
					}
				}
			}
			if (this.options.mode === 'row' && this.grid._selectedRow && this._singleShiftSelect !== true && this._ctrlSelect !== true && this._mouseCtrlSelect !== true && this.options.multipleSelection !== true &&
					gridRow && gridRow.index === this.grid._selectedRow.index) {
				return; // we don't want to select the same row
			}
			if (this.options.mode === 'cell' && this.grid._selectedCell && gridCell && this._singleShiftSelect !== true && this._ctrlSelect !== true && this._mouseCtrlSelect !== true &&
					gridCell.index === this.grid._selectedCell.index && gridCell.rowIndex === this.grid._selectedCell.rowIndex) {
				return; // we don't want to select the same cell 
			}
			if (((isInternal === false && this.options.mode === 'cell') || (isInternal === true && isRowSelection === false))) {
				// fire 'ing' event
				if ((isInternal === false && !event.shiftKey) || this._ctrlSelect === true) {
					noCancel = this._trigger(this.events.cellSelectionChanging, event, {cell: gridCell, selectedCells: this.grid._selectedCells, owner: this, manual: isInternal});
				}
				if (noCancel && gridCell && gridCell.element && !gridCell.element.hasClass("ui-iggrid-expandcolumn") && !gridCell.element.hasClass("ui-iggrid-rowselector-class")) {
					// check if multiple selection is not enabled, remove the previous selection
					if (this.options.multipleSelection !== true) {
						// remove the previous selection
						if (this.grid._selectedCell !== null) {
							this.grid._selectedCell.element.removeClass(this.css.selectedCell);
						}
						// remove selection from a grid row selected via row selector
						if (this.grid._selectedRow !== null && this.grid._selectedRow !== undefined) {
							this.grid._selectedRow.element.children().removeClass(this.css.selectedCell);
						}
					} else {
						// check if CTRL is pressed
						if (event.ctrlKey || this._ctrlSelect === true || contSelection === true) {
							// add the cell to the selected cells collection
							if (gridCell.element.hasClass(this.css.selectedCell)) {
								for (i = 0; i < this.grid._selectedCells.length; i++) {
									if (this.grid._selectedCells[i].index === gridCell.index && this.grid._selectedCells[i].rowIndex === gridCell.rowIndex) {
										//A.T. 8 March 2012 - Fix for bug #104244 
										//this.grid._selectedCells.remove(i);
										$.ig.removeFromArray(this.grid._selectedCells, i);
									}
								}
							} else {
								this.grid._selectedCells.push(gridCell);
							}
						} else if (!event.shiftKey) {
							if (!isInternal) {
								this.clearSelection(true);
							}
							if (!this._isCellSelected(gridCell.rowIndex, gridCell.index)) {
								this.grid._selectedCells.push(gridCell);
							}
							if (!isInternal) {
								this._realActiveCell = gridCell;
							}
						} else {
							this._shiftCellSelection(gridCell);
							return;
						}
					}
					if ((event.ctrlKey || this._ctrlSelect === true || contSelection === true) && $target.hasClass(this.css.selectedCell)) {
						gridCell.element.removeClass(this.css.selectedCell);
					} else {
						gridCell.element.addClass(this.css.selectedCell);
						this.grid._selectedCell = gridCell;
					}
					// fire 'ed' event
					if (isInternal === false || this._ctrlSelect === true) {
						this._trigger(this.events.cellSelectionChanged, event, {cell: gridCell, selectedCells: this.grid._selectedCells, owner: this, manual: isInternal});
					}
				} /*else if (noCancel) {
					if (gridCell.element.hasClass(this.css.selectedCell)) {
						gridCell.element.removeClass(this.css.selectedCell);
					} else {
						gridCell.element.addClass(this.css.selectedCell);
					}
				}
				*/
			} else if (((isInternal === false && this.options.mode === 'row') || (isInternal === true && isRowSelection === true))) {
				if ((isInternal === false && !event.shiftKey) || this._ctrlSelect === true) {
					noCancel = this._trigger(this.events.rowSelectionChanging, event, {row: gridRow, selectedRows: this.grid._selectedRows, owner: this, manual: isInternal});
				}
				if (noCancel) {
					if (this.options.multipleSelection !== true) {
						// remove the previous selection
						if (this.grid._selectedRow !== null) {
							$(this.grid._selectedRow.element).children().removeClass(this.css.selectedCell);
						}
						// remove selection from a grid cell selected when in addition to a row selector
						if (this.grid._selectedCell !== null && this.grid._selectedCell !== undefined) {
							this.grid._selectedCell.element.removeClass(this.css.selectedCell);
						}
					} else {
						if (event.ctrlKey || this._ctrlSelect === true) {
							if (gridRow.element.children().hasClass(this.css.selectedCell)) {
								for (i = 0; i < this.grid._selectedRows.length; i++) {
									if (this.grid._selectedRows[i].index === gridRow.index) {
										//A.T. 8 March 2012 - Fix for bug #104244 
										//this.grid._selectedRows.remove(i);
										$.ig.removeFromArray(this.grid._selectedRows, i);
									}
								}
							} else {
								this.grid._selectedRows.push(gridRow);
							}
						} else if (!event.shiftKey) {
							if (!isInternal) {
								this.clearSelection(true);
							}
							this.grid._selectedRows.push(gridRow);
							if (!isInternal) {
								this._realActiveRow = gridRow;
							}
						} else {
							this._shiftRowSelection(gridRow);
							return;
						}
					}
					if ((event.ctrlKey || this._ctrlSelect === true) && gridRow.element.children().hasClass(this.css.selectedCell)) {
						gridRow.element.removeClass(this.css.selectedRow);
						gridRow.element.children().removeClass(this.css.selectedCell);
					// protect igGridUpdating
					} else if (parent.is('tr')) {
						parent.children(":not(.ui-iggrid-nongrouprowemptycell)").addClass(this.css.selectedCell);
					}
					this.grid._selectedRow = gridRow;
					if (isInternal === false || this._ctrlSelect === true) {
						this._trigger(this.events.rowSelectionChanged, event, {row: gridRow, selectedRows: this.grid._selectedRows, owner: this, manual: isInternal});
					} else if (isInternal === true) {
						// S.S. September 27, 2012 Bug #119509 Even if selection is performed through the API an indicationa about it
						// should be thrown so other widgets can be updated accordingly.
						this._trigger("internalrowselectionchanged", event, { row: gridRow, selectedRows: this.grid._selectedRows, owner: this });
					}
				}
			}
			this._mouseCtrlSelect = false;
		},
		_shiftRowSelection: function (row, noClear, singleRowNavigate, currentRow, event) {
			var i, startIndex, endIndex, noCancel = true;
			//A.T. 23 Nov 2011 - fix for bug #76038. introducing this new property
			// This is a really tricky scenario - i mean, realActiveRow/realActiveCell should only count when
			// there is a continuous shift selection, and only after that we are moving one row up or down, and 
			// CTRL and SHIFT aren't active. 
			this._isContinuous = true;
			if (this.grid._selectedRows.length === 0) {
				//this.grid._selectedRows.push(row);
				this._singleShiftSelect = true;
				// select the current row and return
				noCancel = this._trigger(this.events.rowSelectionChanging, null, {row: row, startIndex: row.index, endIndex: row.index, selectedRows: this.grid._selectedRows, owner: this, manual: false});
				if (noCancel) {
					this.selectRow(row.index);
					this._trigger(this.events.rowSelectionChanged, null, {row: row, selectedRows: this.grid._selectedRows, owner: this, manual: false});
				}
				this._singleShiftSelect = false;
				return;
			}
			endIndex = row.index;
			startIndex = this.grid._selectedRows[0].index;
			noCancel = this._trigger(this.events.rowSelectionChanging, null, {row: row, startIndex: startIndex, endIndex: endIndex, selectedRows: this.grid._selectedRows, owner: this, manual: false});
			if (noCancel) {
				// the list of below scenarios is taken from the behavior in MS Excel
				// 1. new index > last selected row index => select all remaining rows from last existing to the current "row" one
				//L.A. 03 Aug 2012 - Fixing bug #80824 Multiple selection doesn't select correctly when virtualization is enabled
				this._rangeSelect = true;
				if (!singleRowNavigate) {
					if (this.grid._selectedRows.length > 0 && this.grid._selectedRows[0].index < row.index) {
						if (noClear !== false) {
							this.clearSelection(true);
						}
						for (i = startIndex; i <= endIndex; i++) {
							this.selectRow(i);
						}
					}
					// 2. new index < first selected row index
					if (this.grid._selectedRows.length > 0 && this.grid._selectedRows[0].index > row.index) {
						// select from new index to initial index
						if (noClear !== false) {
							this.clearSelection(true);
						}
						for (i = startIndex; i >= endIndex; i--) {
							this.selectRow(i);
						}
					}
				} else {
					if (event) {
						this._activateRow(row, event);
					}
					if (this._isRowSelected(this.activeRow().index)) {
						this.deselectRow(currentRow.index);
					} else {
						this.selectRow(this.activeRow().index);
					}
					this._singleShiftSelect = false;
				}
				//L.A. 03 Aug 2012 - Fixing bug #80824 Multiple selection doesn't select correctly when virtualization is enabled
				this._rangeSelect = false;
				// 3. selection in between
				this._trigger(this.events.rowSelectionChanged, null, {row: row, selectedRows: this.grid._selectedRows, owner: this, manual: false});
			}
		},
		_shiftCellSelection: function (cell, noClear, singleCellNavigate, currentCell, event) {
			var firstCell, firstRowIndex, lastRowIndex, firstCellIndex, lastCellIndex, i, j,
				noCancel = true, lastSelRow = 0, firstSelRow = Number.MAX_VALUE, lastSelCol = 0, firstSelCol = Number.MAX_VALUE;
			//A.T. 23 Nov 2011 - fix for bug #76038. introducing this new property
			// This is a really tricky scenario - i mean, realActiveRow/realActiveCell should only count when
			// there is a continuous shift selection, and only after that we are moving one row up or down, and 
			// CTRL and SHIFT aren't active. 
			this._isContinuous = true;
			if (this.grid._selectedCells.length === 0) {
				this._singleShiftSelect = true;
				// select the current cell and return
				noCancel = this._trigger(this.events.cellSelectionChanging, null, {cell: cell, firstRowIndex: cell.rowIndex, lastRowIndex: cell.rowIndex, firstColumnIndex: cell.index, lastColumnIndex: cell.index, selectedCells: this.grid._selectedCells, owner: this, manual: false});
				if (noCancel) {
					this.selectCell(cell.rowIndex, cell.index);
					this._trigger(this.events.cellSelectionChanged, null, {cell: cell, selectedCells: this.grid._selectedCells, owner: this, manual: false});
				}
				this._singleShiftSelect = false;
				return;
			}
			firstCell = this.grid._selectedCells[0];
			firstRowIndex = firstCell.rowIndex;
			lastRowIndex = cell.rowIndex;
			firstCellIndex = firstCell.index;
			lastCellIndex = cell.index;
			noCancel = this._trigger(this.events.cellSelectionChanging, null, {cell: cell, firstRowIndex: firstRowIndex,
				lastRowIndex: lastRowIndex, firstColumnIndex: firstCellIndex, lastColumnIndex: lastCellIndex, selectedCells: this.grid._selectedCells, owner: this, manual: false});
			if (noCancel) {
				if (noClear !== false) {
					this.clearSelection(true);
				}
				if (!singleCellNavigate) {
					this._rangeSelect = true;
					if (firstRowIndex <= lastRowIndex) {
						for (i = firstRowIndex; i <= lastRowIndex; i++) {
							if (firstCellIndex <= lastCellIndex) {
								for (j = firstCellIndex; j <= lastCellIndex; j++) {
									this.selectCell(i, j);
								}
							} else {
								for (j = firstCellIndex; j >= lastCellIndex; j--) {
									this.selectCell(i, j);
								}
							}
						}
					} else {
						for (i = firstRowIndex; i >= lastRowIndex; i--) {
							if (firstCellIndex <= lastCellIndex) {
								for (j = firstCellIndex; j <= lastCellIndex; j++) {
									this.selectCell(i, j);
								}
							} else {
								for (j = firstCellIndex; j >= lastCellIndex; j--) {
									this.selectCell(i, j);
								}
							}
						}
					}
					this._rangeSelect = false;
				} else {
					// additional scenarios:
					// 1. firstSelRow - lastSelRow > 0 && moving left
					// 2. firstSelRow - lastSelRow > 0 && moving right 
					// 3. firstSelCol - lastSelCol > 0 && moving up
					// 4. firstSelCol - lastSelCol > 0 && moving down 
					// we are moving one cell to the left, top, right or bottom 
					this._singleShiftSelect = true;
					if (event) {
						this._activateCell(cell, event);
					}
					if (this._isCellSelected(this.activeCell().rowIndex, this.activeCell().index)) {
						this.deselectCell(currentCell.rowIndex, currentCell.index);
						// calc boundaries after last deselect
						for (i = 0; i < this.grid._selectedCells.length; i++) {
							if (this.grid._selectedCells[i].rowIndex > lastSelRow) {
								lastSelRow = this.grid._selectedCells[i].rowIndex;
							}
							if (this.grid._selectedCells[i].rowIndex < firstSelRow) {
								firstSelRow = this.grid._selectedCells[i].rowIndex;
							}
							if (this.grid._selectedCells[i].index > lastSelCol) {
								lastSelCol = this.grid._selectedCells[i].index;
							}
							if (this.grid._selectedCells[i].index < firstSelCol) {
								firstSelCol = this.grid._selectedCells[i].index;
							}
						}

						if (Math.abs(firstSelRow - lastSelRow) > 0 && Math.abs(this.activeCell().index - currentCell.index) > 0) { // moving right or left
							if (firstSelRow <= lastSelRow) {
								for (i = firstSelRow; i <= lastSelRow; i++) {
									this.deselectCell(i, currentCell.index);
								}
							} else {
								for (i = firstSelRow; i >= lastSelRow; i--) {
									this.deselectCell(i, currentCell.index);
								}
							}
						} else if (Math.abs(firstSelCol - lastSelCol) > 0 && Math.abs(this.activeCell().rowIndex - currentCell.rowIndex) > 0) { // moving up or down
							if (firstSelCol <= lastSelCol) {
								for (i = firstSelCol; i <= lastSelCol; i++) {
									this.deselectCell(currentCell.rowIndex, i);
								}
							} else {
								for (i = firstSelCol; i >= lastSelCol; i--) {
									this.deselectCell(currentCell.rowIndex, i);
								}
							}
						}
					} else {
						this.selectCell(this.activeCell().rowIndex, this.activeCell().index);
						// calc boundaries after last select
						for (i = 0; i < this.grid._selectedCells.length; i++) {
							if (this.grid._selectedCells[i].rowIndex > lastSelRow) {
								lastSelRow = this.grid._selectedCells[i].rowIndex;
							}
							if (this.grid._selectedCells[i].rowIndex < firstSelRow) {
								firstSelRow = this.grid._selectedCells[i].rowIndex;
							}
							if (this.grid._selectedCells[i].index > lastSelCol) {
								lastSelCol = this.grid._selectedCells[i].index;
							}
							if (this.grid._selectedCells[i].index < firstSelCol) {
								firstSelCol = this.grid._selectedCells[i].index;
							}
						}
						// we need to select also all cells which are selected in column currentCell.index, but not in this.grid._activeCell.index
						if (Math.abs(firstSelRow - lastSelRow) > 0 && Math.abs(this.activeCell().index - currentCell.index) > 0) { // moving right or left
							if (firstSelRow <= lastSelRow) {
								for (i = firstSelRow; i <= lastSelRow; i++) {
									this.selectCell(i, this.activeCell().index);
								}
							} else {
								for (i = firstSelRow; i >= lastSelRow; i--) {
									this.selectCell(i, this.activeCell().index);
								}
							}
						} else if (Math.abs(firstSelCol - lastSelCol) > 0 && Math.abs(this.activeCell().rowIndex - currentCell.rowIndex) > 0) { // moving up or down
							if (firstSelCol <= lastSelCol) {
								for (i = firstSelCol; i <= lastSelCol; i++) {
									this.selectCell(this.activeCell().rowIndex, i);
								}
							} else {
								for (i = firstSelCol; i >= lastSelCol; i--) {
									this.selectCell(this.activeCell().rowIndex, i);
								}
							}
						}
					}
					this._singleShiftSelect = false;
				}
				this._trigger(this.events.cellSelectionChanged, null, {cell: cell, selectedCells: this.grid._selectedCells, owner: this, manual: false});
			}
		},
		_rowExpanded: function (event, args) {
			this._hdirty = true;
		},
		// Activation (with arrow keys) - changes the currently focused cell
		_navigate: function (event) {
			var firstCell, firstCellKey, firstRow, vcontainer = $('#' + this.grid.element[0].id + '_displayContainer_a'), active, shouldNavigate = false;
			if (event && this._suspend) {
				return;
			}
			if (this._isMouseDown === true) {
				return;
			}
			if (event.keyCode !== $.ui.keyCode.ENTER && event.keyCode !== $.ui.keyCode.SPACE
					&& event.keyCode !== $.ui.keyCode.UP && event.keyCode !== $.ui.keyCode.DOWN
					&& event.keyCode !== $.ui.keyCode.LEFT && event.keyCode !== $.ui.keyCode.RIGHT) {
				return;
			}
			// if we have an hierarchical grid, and there are expanded rows, exclude those from selection
			// need to handle the expansion event of the hierarchical grid in order to mark the excude count as dirty 
			if (this._hc) {
				active = this.options.mode === "row" ? this.activeRow() : this.activeCell();
				if (active !== undefined && active !== null) {
					active = this.options.mode === "row" ? active.element : active.element.closest('tr');
					//this.y_exclude = this._excludeRows(active);
					this.y_exclude_current = this._excludeRowsLt(active);
				}
				//this._hdirty = false; // only do this for the hgrid
			} else {
				//this.y_exclude = 0;
				this.y_exclude_current = 0;
			}
			if (this.x_exclude_current === undefined) {
				// check if we don't have extra cells
				this.x_exclude_current = this._calcExtraCells();
			}
			// check if we are actually navigating on cells (rows) or the header row 
			if (this.grid.options.virtualization) {
				if ($.browser.msie && document.activeElement && (document.activeElement.id !== vcontainer.attr('id') && !$(document.activeElement).is('td'))) {
					return;
				}
				if (!$.browser.msie && event.target.id !== vcontainer.attr('id')) {
					return;
				}
			}
			if ($.browser.msie && document.activeElement && (document.activeElement.id !== this.grid.container().attr('id') && !$(document.activeElement).is('td'))) {
				return;
			}
			if (!$.browser.msie && event.target.id !== this.grid.container().attr('id')) {
				return;
			}
			// if there is no active cell, and activation is enabled, activate the cell. 
			firstCellKey = this.grid.options.columns.length > 0 ? this.grid.options.columns[0].key : null;
			firstCell = this._firstCell;
			firstRow = this._firstRow;
			if (this.options.activation === true) {
				// if there is multiple selection , we just apply the active style, otherwise we apply both active and selected
				if (this.options.mode === 'cell') {
					if (this.options.multipleSelection === true) {
						if (this.activeCell() === null || this.activeCell() === undefined) {
							// the first cell on the first row becomes active
							//this._activateCell({element: firstCell, index: 0, rowIndex: 0, columnKey: firstCellKey, row: $(this.grid.rowAt(0))}, event);
							this.selectCell(0, 0);
						} else {
							if (this.options.skipChildren === false && this._hc && this._isMovingUpDown(event)) {
								shouldNavigate = this._activateNextGrid(event);
								if (!shouldNavigate) {
									this._navigateCell(event, false);
								}
							} else {
								this._navigateCell(event, false);
							}
						}
					} else {
						if ((this.activeCell() === null && this.grid._selectedCell === null) || (this.activeCell() === undefined && this.grid._selectedCell === undefined)) {
							//this._activateCell({element: firstCell, index: 0, rowIndex: 0, columnKey: firstCellKey, row: $(this.grid.rowAt(0))}, event);
							this.selectCell(0, 0);
						} else {
							if (this.options.skipChildren === false && this._hc && this._isMovingUpDown(event)) {
								shouldNavigate = this._activateNextGrid(event);
								if (!shouldNavigate) {
									this._navigateCell(event, true);
								}
							} else {
								this._navigateCell(event, true);
							}
						}
					}
				} else { // row
					if (this.options.multipleSelection === true) {
						if (this.activeRow() === null || this.activeRow() === undefined) {
							// the first cell on the first row becomes active
							//this._activateRow({element: firstRow, index: 0}, event);
							this.selectRow(0);
						} else {
							if (this.options.skipChildren === false && this._hc && this._isMovingUpDown(event)) {
								shouldNavigate = this._activateNextGrid(event);
								if (!shouldNavigate) {
									this._navigateRow(event, false);
								}
							} else {
								this._navigateRow(event, false);
							}
						}
					} else {
						if ((this.activeRow() === null && this.grid._selectedRow === null) || (this.activeRow() === undefined && this.grid._selectedRow === undefined)) {
							//this._activateRow({element: firstRow, index: 0}, event);
							this.selectRow(0);
						} else {
							if (this.options.skipChildren === false && this._hc && this._isMovingUpDown(event)) {
								shouldNavigate = this._activateNextGrid(event);
								if (!shouldNavigate) {
									this._navigateRow(event, true);
								}
							} else {
								this._navigateRow(event, true);
							}
						}
					}
				}
			}
		},
		_isMovingUpDown: function (event) {
			if (event.keyCode === $.ui.keyCode.UP || event.keyCode === $.ui.keyCode.DOWN) {
				return true;
			}
			return false;
		},
		_navigateFocus: function (event) {
			if (($.browser.mozilla && event.originalEvent && $(event.originalEvent.explicitOriginalTarget).is('th'))) {
				return;
			}
			// check if we are clicking the left or the right mouse button. Cancel selection on the right mouse button
            // L.A. 27 June 2012 - Fixing bug #113714 Page scrolls down in IE9 and Chrome when clicking on a row while multiple selection is enabled.
            // L.A. 27 June 2012 - Fixing bug #115566 Page scrolls up and only grid header remains visible when multiple selection true
			// L.A. 03 August 2012 - Fixing bug #118735 Up/down arrow key navigation does not work with virtualization
			// There is a complicated chain of focusing events, so we need to cut the chain, focus the element and then restore the events binding
			if (event.which !== 1) {
				$('#' + this.grid.element[0].id + '_displayContainer_a').unbind('focus', this._focusHandler);
				$('#' + this.grid.element[0].id + '_displayContainer_a').focus();
				$('#' + this.grid.element[0].id + '_displayContainer_a').bind({focus: this._focusHandler});
				return false;
			}
			this._navigate(event);
		},
		_navigateCell: function (event, select) {
			var nextX, nextY, x, y, currentCell = this.activeCell(), firstRow, rowCount, newCell, length, newCellObject, noCancel = true,
				sri = this.grid._startRowIndex, sci = this.grid._startColIndex, $newCell, hgrid, ptr, indexTmp = 0, cKey, parent, cb,
				v = this.grid.options.virtualization || this.grid.options.rowVirtualization, ret = false, rs;
			//A.T. 29 March - #92424
			if (currentCell === null) {
				return;
			}
			if (sri === undefined || sri === null) {
				sri = 0;
			}
			if (sci === undefined || sri === null) {
				sci = 0;
			}
			if (v) {
				x = currentCell.index - sci;
				y = currentCell.rowIndex - sri;
			} else {
				x = currentCell.index;
				y = currentCell.rowIndex;
			}
			y += this.y_exclude_current;
			x += this.x_exclude_current;

			firstRow = this._firstRow;
			rowCount = this._rowCount;
			length = this._length;
			if (this.x_exclude_current > 0) {
				length += this.x_exclude_current;
			}
			if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
				// select (does nothing if select in the args is true)
				nextX = x;
				nextY = y;
				if (event.ctrlKey && this._isCellSelected(y + sri - this.y_exclude_current, x + sci - this.x_exclude_current)) {
					// fire events
					noCancel = this._trigger(this.events.cellSelectionChanging, event, {cell: currentCell, selectedCells: this.grid._selectedCells, owner: this, manual: false});
					if (noCancel) {
						this.deselectCell(y + sri - this.y_exclude_current, x + sci - this.x_exclude_current);
						this._trigger(this.events.cellSelectionChanged, event, {cell: currentCell, selectedCells: this.grid._selectedCells, owner: this, manual: false});
					}
				// fix for bug #75165 - Cell selection cannot be triggered by pressing SPACE or ENTER
				} else if (event.ctrlKey || !this._isCellSelected(y - this.y_exclude_current, x)) {
					this._ctrlSelect = true;
					this._selectInternal(null, y - this.y_exclude_current, x - this.x_exclude_current);
					this._ctrlSelect = false;
				}
				// go to the next cell and activate it (optionally select it if select in the args is true)
			} else if (event.keyCode === $.ui.keyCode.DOWN) {
				// go to the next row, same cell 
				nextX = x;
				nextY = y + 1;
				if (this._realActiveCell !== null && this._realActiveCell !== undefined && this._isContinuous &&
						this.options.multipleSelection === true && this.grid._selectedCells.length > 1 && !event.shiftKey && !event.ctrlKey) {
					nextX = this._realActiveCell.index - sci + this.x_exclude_current;
					nextY = this._realActiveCell.rowIndex + 1 - sri + this.y_exclude_current;
				}
				if (nextY - this.y_exclude_current > rowCount - 1 - sri && this.options.wrapAround === true && !v) {
					nextY = this.y_exclude_current;
				} else if (nextY - this.y_exclude_current > rowCount - 1 - sri && this.options.wrapAround === false) {
					//nextY = y;
					// check if we have a grid 
					if (this._hc && !this.options.skipChildren) {
						this._activateNextGrid(null, true); // activate the next grid, going down 
					}
					return;
				}
			} else if (event.keyCode === $.ui.keyCode.UP) {
				// go to the prev. row, same cell 
				nextX = x;
				nextY = y - 1;
				if (this._realActiveCell !== null && this._realActiveCell !== undefined && this._isContinuous &&
						this.options.multipleSelection === true && this.grid._selectedCells.length > 1 && !event.shiftKey && !event.ctrlKey) {
					nextX = this._realActiveCell.index - sci + this.x_exclude_current;
					nextY = this._realActiveCell.rowIndex - 1 - sri + this.y_exclude_current;
				}
				if (!v) {
					if (nextY - this.y_exclude_current < 0 && this.options.wrapAround === true) {
						nextY = rowCount - 1;
					} else if (nextY - this.y_exclude_current < 0 && this.options.wrapAround === false) {
						//nextY = y;
						if (this._hc && !this.options.skipChildren) {
							this._activateNextGrid(null, false); // activate the previous grid, going up
						}
						return;
					}
				}
			} else if (event.keyCode === $.ui.keyCode.LEFT) {
				// go to the prev. cell on the same row
				nextX = x - 1;
				nextY = y;
				if (nextX - this.x_exclude_current < 0) {
					if (this._hc && !this.options.skipChildren) {
						ret = this._activateNextGrid(null, false, true); // activate the previous grid, going up (level down)
					}
					if (ret) {
						return;
					}
					nextX = length - 1;
					nextY = y - 1;
				}
				if (this._realActiveCell !== null && this._realActiveCell !== undefined &&
						this.options.multipleSelection === true && this.grid._selectedCells.length > 1 && !event.shiftKey && !event.ctrlKey) {
					nextX = this._realActiveCell.index - 1 - sci + this.x_exclude_current;
					nextY = this._realActiveCell.rowIndex - sri + this.y_exclude_current;
				}
				if (!v) {
					if (nextY < 0 && this.options.wrapAround === true) {
						nextX = length - 1;
						nextY = rowCount - 1;
					} else if (nextY < 0 && this.options.wrapAround === false) {
						//nextX = x;
						//nextY = y;
						if (this._hc && !this.options.skipChildren) {
							this._activateNextGrid(null, false); // activate the previous grid, going up (level up)
						}
						return;
					}
				}
			} else if (event.keyCode === $.ui.keyCode.RIGHT) {
				// go to the next cell on the same row
				nextX = x + 1;
				nextY = y;
				if (nextX >= length) {
					if (this._hc && !this.options.skipChildren) {
						ret = this._activateNextGrid(null, true, true); // activate the next grid, going down (level down)
					}
					if (ret) {
						return;
					}
					nextX = 0;
					nextY = y + 1;
				}
				if (this._realActiveCell !== null && this._realActiveCell !== undefined &&
						this.options.multipleSelection === true && this.grid._selectedCells.length > 1 && !event.shiftKey && !event.ctrlKey) {
					nextX = this._realActiveCell.index + 1 - sci + this.x_exclude_current;
					nextY = this._realActiveCell.rowIndex - sri + this.y_exclude_current;
				}
				if (!v) {
					if (nextY >= rowCount + this.y_exclude_current && this.options.wrapAround === true) {
						nextX = 0;
						nextY = 0;
					} else if (nextY >= rowCount + this.y_exclude_current && this.options.wrapAround === false) {
						//nextX = x;
						//nextY = y;
						if (this._hc && !this.options.skipChildren) {
							this._activateNextGrid(null, true); // activate the next grid, going down (level up)
						}
						return;
					}
				}
			} else {
				return;
			}
			if (v && nextY >= this.grid._virtualRowCount) {
				//if (nextY !== y) {
				this._setScrollTop(this.grid.element.parent(), newCell, nextY > y ? 'down' : 'up', nextY - this.y_exclude_current);
				//}
				nextY = this.grid._virtualRowCount - 1;
				//newCell = this.grid.cellAt(nextX, nextY);
			} else if (v && nextY < 0 && sri > 0) {
				//if (nextY !== y) {
				this._setScrollTop(this.grid.element.parent(), newCell, 'up', nextY - this.y_exclude_current);
				//}
				nextY = 0;
				//newCell = this.grid.cellAt(nextX, nextY);
			} else if (v && nextY < 0) {
				return;
			} //else {
			//	newCell = this.grid.cellAt(nextX, nextY);
			//}
			if (this.x_exclude_current > 0 && this.grid.rowAt(nextY).cells.length < length) {
				nextX = this.grid.rowAt(nextY).cells.length - 1;
			}
			newCell = this.grid.cellAt(nextX === 0 ? this.x_exclude_current : nextX, nextY - this.y_exclude_current);
			if (newCell === undefined && (event.keyCode === $.ui.keyCode.DOWN || event.keyCode === $.ui.keyCode.UP)) {
				if (event.keyCode === $.ui.keyCode.DOWN) {
					nextY++;
				} else if (event.keyCode === $.ui.keyCode.UP) {
					nextY--;
				}
				newCell = this.grid.cellAt(nextX, nextY);
			}
			/*
			if (newCell && $(newCell).attr('data-skip') === "true") {
				event.stopPropagation();
				event.preventDefault();
				return;
			}
			*/
			// recalc scrollTop and scrollLeft
			if (!v) {
				this._setScrollTop(this.grid.element.parent(), newCell, nextY >= y ? 'down' : 'up', nextY - this.y_exclude_current);

				//A.Y. bug #98047. When we have both width and height the grid's hScroll is 
				//determinded by the _hscroller element
				if (this.grid.options.width !== null && this.grid.options.height !== null) {
					parent = $('#' + this.grid.element[0].id + '_hscroller');
				} else if (this.grid.scrollContainer().length > 0) {
					parent = this.grid.scrollContainer();
				} else {
					parent = this.grid.element.parent();
				}
				this._setScrollLeft(parent, newCell, nextX >= x ? 'right' : 'left', nextX - this.x_exclude_current);
			}
			if (newCell === undefined || newCell.length > 1) {
				return;
			}
			$newCell = $(newCell);
			if (this._hc && ($newCell.hasClass('ui-iggrid-expandbutton') || $newCell.hasClass('ui-iggrid-expandcolumn'))) {
				// toggle selected/active styles on the expand indicator cell
				//if ($newCell.hasClass('ui-iggrid-selectedcell')) {
				//	$newCell.removeClass('ui-iggrid-selectedcell ui-iggrid-activecell ui-state-focus ui-state-active');
				//} else {
				//	$newCell.addClass('ui-iggrid-selectedcell ui-iggrid-activecell ui-state-focus ui-state-active');
				//}
				if (event.keyCode === $.ui.keyCode.ENTER) {
					ptr = $newCell.closest('tr');
					hgrid = $newCell.closest('.ui-iggrid-root').data('igHierarchicalGrid');
					// find hierarchical grid
					// toggle hierarchical row
					hgrid.toggle(ptr);
				}
				//return;
			}
			// S.S. April 11, 2012, Bug #100732, #100737 when we can activate the rs cell via navigation we should also be able
			// to toggle the rs cell by ENTER and SPACE
			if ($newCell.hasClass('ui-iggrid-rowselector-class') &&
					(event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE)) {
				rs = this.grid.element.data('igGridRowSelectors');
				cb = $newCell.find("span[data-role='checkbox']");
				if (rs && cb.length > 0) {
					rs._handleCheck(cb);
				}
			}
			indexTmp = nextX - this.x_exclude_current;
			if (event.keyCode !== $.ui.keyCode.ENTER && event.keyCode !== $.ui.keyCode.SPACE) {
				$(currentCell.element).removeClass(this.css.activeCell);
				if (nextX === 0) {
					indexTmp = this.x_exclude_current;
				} //else {
				//	indexTmp = nextX - this.x_exclude_current;
				//}
				if (nextX >= this.grid.options.columns.length) {
					cKey = this.grid.options.columns[this.grid.options.columns.length - 1].key;
				} else {
					cKey = this.grid.options.columns[nextX === 0 ? 0 : indexTmp - (this._hc === true ? 1 : 0)].key;
				}
				if (nextX <= 0 && this._hc) {
					cKey = null;
				}
				if (v) {
					newCellObject = {
						element: $(newCell),
						index: nextX === 0 ? sci : indexTmp + sci,
						rowIndex: nextY + sri - this.y_exclude_current,
						row: $(this.grid.rowAt(nextY)),
						columnKey: cKey
					};
				} else {
					newCellObject = {
						element: $(newCell),
						index: nextX === 0 ? 0 : indexTmp,
						rowIndex: nextY - this.y_exclude_current,
						row: $(this.grid.rowAt(nextY)),
						columnKey: cKey
					};
				}
				if (event.ctrlKey && this.activeCell() && (this.activeCell().index !== newCellObject.index || this.activeCell().rowIndex !== newCellObject.rowIndex)) {
					this._activateCell(newCellObject, event);
				}
				if (!event.ctrlKey && event.shiftKey && this.options.multipleSelection === true) {
					this._shiftCellSelection(newCellObject, false, true, currentCell, event);
				} else if (!event.ctrlKey) {
					noCancel = this._trigger(this.events.cellSelectionChanging, event, {cell: newCellObject, selectedCells: this.grid._selectedCells, owner: this, manual: false});
					if (noCancel) {
						this.clearSelection(true);
						//if (v) {
						//	this._selectInternal(null, nextY + sri, nextX + sci);
						//} else {
						this._selectInternal(null, nextY - this.y_exclude_current, nextX === 0 ? 0 : indexTmp);
						//}
						this._trigger(this.events.cellSelectionChanged, event, {cell: newCellObject, selectedCells: this.grid._selectedCells, owner: this, manual: false});
					}
				}
			}
			event.preventDefault();
			event.stopPropagation();
		},
		_navigateRow: function (event, select) {
			var nextY, y, currentRow = this.activeRow(), firstRow, rowCount, length, newRowObject, newRow, noCancel = true, v,
				sri = this.grid._startRowIndex; //sci = this.grid._startColIndex;
			v = this.grid.options.virtualization || this.grid.options.rowVirtualization;
			if (!currentRow) {
				return;
			}
			if (v) {
				y = currentRow.index - sri;
			} else {
				y = currentRow.index;
			}
			y += this.y_exclude_current;
			firstRow = this._firstRow;
			rowCount = this._rowCount;
			length = this._length;
			if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
				// select (does nothing if select in the args is true)
				nextY = y;
				if (event.ctrlKey && this._isRowSelected(y - this.y_exclude_current)) {
					noCancel = this._trigger(this.events.rowSelectionChanging, event, {row: currentRow, selectedRows: this.grid._selectedRows, owner: this, manual: false});
					if (noCancel) {
						this.deselectRow(y - this.y_exclude_current);
						this._trigger(this.events.rowSelectionChanged, event, {row: currentRow, selectedRows: this.grid._selectedRows, owner: this, manual: false});
					}
					noCancel = true;
				} else {
					this._ctrlSelect = true;
					this._selectInternal(null, y - this.y_exclude_current);
					this._ctrlSelect = false;
				}
			} else if (event.keyCode === $.ui.keyCode.DOWN) {
				// go to the next row
				//if (!this.grid.options.virtualization) {
				nextY = y + 1;
				//}
				if (this._realActiveRow !== null && this._realActiveRow !== undefined && this.options.multipleSelection === true && this.grid._selectedRows.length > 1 && !event.shiftKey && !event.ctrlKey && this._isContinuous) {
					nextY = this._realActiveRow.index + 1 + this.y_exclude_current;
				}
				if (!v) {
					if (nextY - this.y_exclude_current > rowCount - 1 && this.options.wrapAround === true) {
						nextY = this.y_exclude_current;
					} else if (nextY - this.y_exclude_current > rowCount - 1 && this.options.wrapAround === false) {
						//nextY = y;
						if (this._hc && !this.options.skipChildren) {
							this._activateNextGrid(null, true); // activate the next grid, going down 
						}
						return;
					}
				}
			} else if (event.keyCode === $.ui.keyCode.UP) {
				// go to the prev. row
				nextY = y - 1;
				if (this._realActiveRow !== null && this._realActiveRow !== undefined && this.options.multipleSelection === true && this.grid._selectedRows.length > 1 && !event.shiftKey && !event.ctrlKey && this._isContinuous) {
					nextY = this._realActiveRow.index - 1 + this.y_exclude_current;
				}
				if (!v) {
					if (nextY - this.y_exclude_current < 0 && this.options.wrapAround === true) {
						nextY = rowCount - 1;
					} else if (nextY - this.y_exclude_current < 0 && this.options.wrapAround === false) {
						//nextY = y;
						if (this._hc && !this.options.skipChildren) {
							this._activateNextGrid(null, false); // activate the previous grid, going up 
						}
						return;
					}
				}
			} else {
				return;
			}
			// get the new cell
			event.preventDefault();
			event.stopPropagation();
			//nextY = this._adjustVirtualVerticalPosition(nextY);
			if (v && nextY < 0) {
				// virtualization & selection does not support wrapping around
				return;
			}
			if (v && nextY >= this.grid._virtualRowCount) {
				// L.A. 23 August 2012 Fixing bug #119476 When virtualization is enabled the selection via the arrow keys of the keyboard 
				// is not working for the non-visible part of the grid
				nextY = this.grid._virtualRowCount - 1;
				newRow = this.grid.rowAt(nextY - this.y_exclude_current);
				this._setScrollTop(this.grid.element.parent(), newRow, nextY >= y ? 'down' : 'up', nextY - this.y_exclude_current);
			} else if (v && nextY < 0 && sri > 0) {
				// L.A. 23 August 2012 Fixing bug #119476 When virtualization is enabled the selection via the arrow keys of the keyboard 
				// is not working for the non-visible part of the grid
				nextY = -1;
				newRow = this.grid.rowAt(nextY);
				this._setScrollTop(this.grid.element.parent(), newRow, 'up', nextY - this.y_exclude_current);
			} else {
				newRow = this.grid.rowAt(nextY);
			}
			if (newRow === undefined || newRow.length > 1) {
				return;
			}
			if (!v) {
				this._setScrollTop(this.grid.element.parent(), newRow, nextY >= y ? 'down' : 'up', nextY - this.y_exclude_current);
			}
			if (event.keyCode !== $.ui.keyCode.ENTER && event.keyCode !== $.ui.keyCode.SPACE) {
				$(currentRow.element).removeClass(this.css.activeRow);
				if (v) {
					newRowObject = {element: $(newRow), index: nextY + sri - this.y_exclude_current};
				} else {
					newRowObject = {element: $(newRow), index: nextY - this.y_exclude_current};
				}
				if (event.ctrlKey && this.activeRow() && this.activeRow().index !== newRowObject.index) {
					this._activateRow(newRowObject, event);
				}
				if (!event.ctrlKey && event.shiftKey && this.options.multipleSelection === true) {
					this._shiftRowSelection(newRowObject, false, true, currentRow, event);
				} else if (!event.ctrlKey) {
					noCancel = this._trigger(this.events.rowSelectionChanging, event, {row: newRowObject, selectedRows: this.grid._selectedRows, owner: this, manual: false});
					if (noCancel) {
						this.clearSelection(true);
						this._selectInternal(null, nextY - this.y_exclude_current);
						this._trigger(this.events.rowSelectionChanged, event, {row: newRowObject, selectedRows: this.grid._selectedRows, owner: this, manual: false});
					}
				}
			}
		},
		//A.T: what about navigating across layouts (in the same level ???) 
		_activateNextGrid: function (event, goingDown, levelDown) {
			// we need to determine whether there is an immediate next/prev expanded parent container. if there isn't, we don't do anything
			// return true if we are navigating to the next grid, otherwise the usual navigateCell/Row takes over 
			var target, nextTarget, currentGrid = this.grid.container(), reset = true;
			if (this.options.mode === "row") {
				target = this.activeRow().element;
			} else {
				target = $(this.activeCell().element).closest("tr");
			}
			if (event !== null || levelDown === true) {
				if (!event) {
					event = {keyCode: goingDown ? $.ui.keyCode.DOWN : $.ui.keyCode.UP};
				}
				if (event.keyCode === $.ui.keyCode.UP) {
					nextTarget = target.prev();
					if (nextTarget.attr("data-container") && nextTarget.is(":visible")) {
						// get the last grid from the list of child grilds, activate and select its first cell or row, and clear the rest of the selection
						nextTarget = nextTarget.find(".ui-iggrid-table").last();
					} else {
						return false;
					}
				} else {
					// down
					nextTarget = target.next();
					if (nextTarget.attr("data-container") && nextTarget.is(":visible")) {
						// get the first grid from the list of child grids, activate and select its first cell or row, and clear the rest of the selection
						nextTarget = nextTarget.find(".ui-iggrid-table").first();
					} else {
						return false;
					}
				}
			} else {
				// there are two cases, in priority:
				// 1. sibling child grid (when there is more than one column layout)
				// 2. up level grid row/cell, which can be either above or below the current grid 
				if (goingDown) {
					if (currentGrid.next().length > 0) {
						nextTarget = currentGrid.nextAll(".ui-iggrid").first().children(".ui-iggrid-table");
					} else {
						// try to go up by one level and select the next row (down) in the upper grid
						nextTarget = currentGrid.closest("tr:[data-container=true]").next();
						reset = false;
					}
				} else {
					if (currentGrid.prev().length > 0) {
						nextTarget = currentGrid.prevAll(".ui-iggrid").first().children(".ui-iggrid-table");
					} else {
						// try to go up by one level and select the previous row (up) in the upper grid
						nextTarget = currentGrid.closest("tr:[data-container=true]").prev();
						reset = false;
					}
				}
			}
			this.clearSelection(false, true); // clear the selection of the current grid
			if (reset) {
				if (this.options.mode === "row") {
					if (goingDown !== undefined && !goingDown) {
						nextTarget.igGridSelection("selectRow", nextTarget.find(".ui-iggrid-tablebody > tr").last().index());
					} else {
						nextTarget.igGridSelection("selectRow", 0);
					}
				} else {
					if (goingDown !== undefined && !goingDown) {
						nextTarget.igGridSelection("selectCell", nextTarget.find(".ui-iggrid-tablebody > tr").last().index(), 0);
					} else {
						nextTarget.igGridSelection("selectCell", 0, 0);
					}
				}
			} else if (nextTarget && nextTarget.length > 0) {
				if (this.options.mode === "row") {
					nextTarget.closest(".ui-iggrid-table").igGridSelection("selectRow", nextTarget.index());
				} else {
					nextTarget.closest(".ui-iggrid-table").igGridSelection("selectCell", nextTarget.index(), 0);
				}
			}
			// focus the child grid so that keyboard navigation can continue
			nextTarget.closest(".ui-iggrid").focus();
			return true;
		},
		_setScrollTop: function (parent, child, direction, index) {
			var parentOffset = parent.offset(), childOffset = $(child).offset(), childh, isDown, isUp, v, st;
			if (!child) {
				return;
			}
			v = this.grid.options.virtualization === true || this.grid.options.rowVirtualization === true;
			childh = v ? parseInt(this.grid.options.avgRowHeight, 10) : $(child).outerHeight();
			if (!v) {
				isDown = childOffset.top + childh + this.grid._scrollbarWidth() > parentOffset.top + $(parent).outerHeight();
				isUp = childOffset.top < parentOffset.top;
			} else {
				isDown = childh * (index + 1) >= parseInt(this.grid.options.height, 10);
				isUp = index < 0;
			}
			if (index === 0) {
				parent[0].scrollTop = 0;
			} else if (direction === 'down') {
				if (isDown) {
					if (!v) {
						st = parent[0].scrollTop + childOffset.top + this.grid._scrollbarWidth() - (parentOffset.top + parent.outerHeight()) + $(child).outerHeight();
						parent[0].scrollTop = st;
					} else {
						this._scrollVmanual(true);
					}
				}
			} else {
				if (isUp) {
					if (!v) {
						st = parent[0].scrollTop - $(child).outerHeight();
						parent[0].scrollTop = st;
					} else {
						this._scrollVmanual(false);
					}
				}
			}
		},
		_scrollVmanual: function (down) {
			var sc = $('#' + this.grid.element[0].id + '_scrollContainer'), h = parseInt(this.grid.options.avgRowHeight, 10);
			this.grid._ignoreScroll = true;
			if (down) {
				sc.scrollTop(sc.scrollTop() + h);
			} else {
				sc.scrollTop(sc.scrollTop() - h);
			}
			this.grid._onVirtualVerticalScroll();
			this.grid._ignoreScroll = false;
		},
		_setScrollLeft: function (parent, child, direction, index) {
			var parentOffset = parent.offset(), childOffset = $(child).offset();
			if (!child) {
				return;
			}
			if (index === 0) {
				parent[0].scrollLeft = 0;
			} else if (direction === 'right') {
				if (childOffset.left + $(child).outerWidth()  > parentOffset.left + $(parent).outerWidth()) {
					parent[0].scrollLeft = parent[0].scrollLeft + childOffset.left - (parentOffset.left + parent.outerWidth()) + $(child).outerWidth();
				}
			} else {
				if (childOffset.left < parentOffset.left) {
					parent[0].scrollLeft = parent[0].scrollLeft - $(child).outerWidth();
				}
			}
		},
		_isRowSelected: function (y) {
			var i;
			for (i = 0; i < this.grid._selectedRows.length; i++) {
				if (this.grid._selectedRows[i].index === y) {
					return true;
				}
			}
			return false;
		},
		_isCellSelected: function (y, x) {
			var i;
			for (i = 0; i < this.grid._selectedCells.length; i++) {
				if (this.grid._selectedCells[i].index === x && this.grid._selectedCells[i].rowIndex === y) {
					return true;
				}
			}
			return false;
		},
		// refreshes selection 
		_rs: function (e, args) {
			//var cells = this.grid._selectedCells, row = this.grid._selectedRows;
			var dom = args.dom, i = 0, j = 0, ac = this.activeCell(), ar = this.activeRow(),
				sri = this.grid._startRowIndex, sci = this.grid._startColIndex;
			//S.S. Bug #105706 If the function is called for other grids we shouldn't do anything.
            if (this.grid.id() !== args.owner.id()) {
				return;
			}
			//I.I. bug fix for 104635
            //when contunous virtualization the body is recreated whenever more rows are neede, thus all tbody event handlers get lost
            if (this.grid.options.virtualization === true && this.grid.options.virtualizationMode === 'continuous') {
                this._registerTbodyEvents();

                //I.I. bug fix for 104639
                //selected row/cell, active row/cell should be reinitialize, since tbody got recreated and these members point to non existing dom elements
                if (this.grid._selectedCell) {
                    this.grid._selectedCell.element = $('#' + this.grid.id() + ' > tbody > tr').eq(this.grid._selectedCell.rowIndex).children('td').eq(this.grid._selectedCell.index);
                    this.grid._selectedCell.row = this.grid._selectedCell.element.parent('tr');
                }

                if (this.grid._selectedRow) {
                    this.grid._selectedRow.element = $('#' + this.grid.id() + ' > tbody > tr').eq(this.grid._selectedRow.index);
                }

                if (this.grid._activeRow) {
                    this.grid._activeRow.element = $('#' + this.grid.id() + ' > tbody > tr').eq(this.grid._activeRow.index);
                }

                if (this.grid._activeCell) {
                    this.grid._activeCell.element = $('#' + this.grid.id() + ' > tbody > tr').eq(this.grid._activeCell.rowIndex).children('td').eq(this.grid._activeCell.index);
                    this.grid._activeCell.row = this.grid._activeCell.element.parent('tr');
                }
                if (this.grid._selectedRows && this.grid._selectedRows.length > 0) {
                    for (i = 0; i < this.grid._selectedRows.length; i++) {
                        this.grid._selectedRows[i].element = $('#' + this.grid.id() + ' > tbody > tr').eq(this.grid._selectedRows[i].index);
                    }
                }
                if (this.grid._selectedCells && this.grid._selectedCells.length > 0) {
                    for (i = 0; i < this.grid._selectedCells.length; i++) {
                        this.grid._selectedCells[i].element = $('#' + this.grid.id() + ' > tbody > tr').eq(this.grid._selectedCells[i].rowIndex).children('td').eq(this.grid._selectedCells[i].index);
                        this.grid._selectedCells[i].row = this.grid._selectedCells[i].element.parent('tr');
                    }
                }
            }
            ac = this.activeCell();
            ar = this.activeRow();
			// we need to return back the styles 
			for (i = 0; i < dom.length; i++) {
				for (j = 0; j < dom[i].length; j++) {
					if (this.options.mode === "cell") {
						if (this.options.multipleSelection) {
							if (this._isCellSelected(i + sri, j + sci)) {
								// add selected style
								$(dom[i][j]).addClass(this.css.selectedCell);
							}
						} else if (this.grid._selectedCell) {
							if (i + sri === this.grid._selectedCell.rowIndex && j + sci === this.grid._selectedCell.index) {
								$(dom[i][j]).addClass(this.css.selectedCell);
							}
						}
					} else {
						if (this.options.multipleSelection) {
							if (this._isRowSelected(i + sri)) {
								// add selected style
								$(dom[i][j]).addClass(this.css.selectedRow);
							}
						} else if (this.grid._selectedRow) {
							if (i + sri === this.grid._selectedRow.index) {
								$(dom[i][j]).addClass(this.css.selectedRow);
							}
						}
					}
				}
			}
			if (!$.browser.mozilla) {
				if (ac) {
                    //I.I. bug fix for 104635
                    if (this.grid.options.virtualizationMode === 'fixed') {
					    if (ac.rowIndex - sri > 0 && ac.rowIndex - sri < dom.length &&
							    ac.index - sci > 0 && ac.index - sci < dom[ac.rowIndex - sri].length) {
						    $(dom[ac.rowIndex - sri][ac.index - sci]).addClass(this.css.activeCell);
					    }
                    } else if (this.grid.options.virtualizationMode === 'continuous') {
                        ac.element.addClass(this.css.activeCell);
                    }
				}
				if (ar) {
                    if (this.grid.options.virtualizationMode === 'fixed') {
					    if (ar.index - sri > 0 && ar.index - sri < dom.length) {
						    $(dom[ar.index - sri]).addClass(this.css.activeRow);
					    }
                    } else if (this.grid.options.virtualizationMode === 'continuous') {
                        ar.element.addClass(this.css.activeRow);
                    }
				}
			}
		},
		// API for programatically selecting rows and cells
		selectCell: function (row, col) {
			/* selects a cell by row/col 
				paramType="number" Row index
				paramType="number" Column index
			*/
			this._selectInternal(null, row, col);
		},
		deselectCell: function (row, col) {
			/* deselects a cell by row/col 
				paramType="number" Row index
				paramType="number" Column index
			*/
			var i;
			// find the cell
			if (this.options.multipleSelection === true) {
				for (i = 0; i < this.selectedCells().length; i++) {
					if (this.selectedCells()[i].index === col && this.selectedCells()[i].rowIndex === row) {
						this.selectedCells()[i].element.removeClass(this.css.selectedCell);
						//A.T. 8 March 2012 - Fix for bug #104244 
						//this.selectedCells().remove(i);
						$.ig.removeFromArray(this.selectedCells(), i);
						this.grid._selectedCell = null;
						break;
					}
				}
			} else {
				if (this.selectedCell() !== null && this.selectedCell() !== undefined) {
					this.selectedCell().element.removeClass(this.css.selectedCell);
					this.grid._selectedCell = null;
				}
			}
		},
		selectRow: function (index) {
			/* selects a row by index
				paramType="number" Row index
			*/
			this._selectInternal(null, index);
		},
		deselectRow: function (index) {
			/* deselects a row by index
				paramType="number" Row index
			*/
			var i;
			if (this.options.multipleSelection === true) {
				for (i = 0; i < this.selectedRows().length; i++) {
					if (this.selectedRows()[i].index === index) {
						this.selectedRows()[i].element.removeClass(this.css.selectedRow);
						this.selectedRows()[i].element.children().removeClass(this.css.selectedCell);
						//A.T. 8 March 2012 - Fix for bug #104244 
						//this.selectedRows().remove(i);
						$.ig.removeFromArray(this.selectedRows(), i);
						this.grid._selectedRow = null;
						break;
					}
				}
			} else {
				if (this.selectedRow() !== null && this.selectedRow() !== undefined) {
					this.selectedRow().element.removeClass(this.css.selectedRow);
					this.selectedRow().element.children().removeClass(this.css.selectedCell);
					this.grid._selectedRow = null;
				}
			}
		},
		_activateCell: function (cell, event) {
			var noCancel = true;
			noCancel = this._trigger(this.events.activeCellChanging, event, {cell: cell, owner: this});

			if (noCancel) {
				if (this.activeCell()) {
					$(this.activeCell().element).removeClass(this.css.activeCell);
				}
				if (this.activeRow()) {
					$(this.activeRow().element).removeClass(this.css.activeRow);
					this.activeRow(null);
				}
				this.activeCell(cell);
				$(this.activeCell().element).addClass(this.css.activeCell);
				this._trigger(this.events.activeCellChanged, event, {cell: cell, owner: this});
			}
		},
		_activateRow: function (row, event) {
			var noCancel = true; //v = this.grid.options.virtualization || this.grid.options.rowVirtualization;
			noCancel = this._trigger(this.events.activeRowChanging, event, {row: row, owner: this});
			if (noCancel) {
				if (this.activeRow()) {
					//if (v) {
					//	$(this.grid.rowAt(this.grid._activeRow.index - this.grid._startRowIndex)).removeClass(this.css.activeRow);
					//} else {
					$(this.activeRow().element).removeClass(this.css.activeRow);
					//}
				}
				if (this.activeCell()) {
					$(this.activeCell().element).removeClass(this.css.activeCell);
					this.activeCell(null);
				}
				this.activeRow(row);
				//if (v) {
				//	$(this.grid.rowAt(this.grid._activeRow.index - this.grid._startRowIndex)).addClass(this.css.activeRow);
				//} else {
				$(this.activeRow().element).addClass(this.css.activeRow);
				//}
				this._trigger(this.events.activeRowChanged, event, {row: row, owner: this});
			}
		},
		// API - should we have both (cells vs. cell) or only the multiple: and in case of single it will return only one object? 
		// returns an array of $.ig.GridCell objects
		selectedCells: function () {
			/* returns an array of selected cells where every objects has the format {element: , row: , index: , rowIndex: , columnKey: }
				returnType="array"
			*/
			return this.grid._selectedCells;
		},
		// returns an array of $.ig.GridRow objects
		selectedRows: function () {
			/* returns an array of selected rows where every object has the format {element: , index: }
				returnType="array"
			*/
			return this.grid._selectedRows;
		},
		// returns an instance of $.ig.GridCell
		selectedCell: function () {
			/* returns the currently selected cell, if any. If multiple selection is enabled, will return null 
				returnType="object" an object that has the format {element: , row: , index: , rowIndex: , columnKey: }
			*/
			return this.grid._selectedCell;
		},
		// returns an instance of $.ig.GridRow
		selectedRow: function () {
			/* returns the currently selected row, if any. If multiple selection is enabled, will return null 
				returnType="object" an object that has the format {element: , index: }
			*/
			return this.grid._selectedRow;
		},
		// returns an instance of $.ig.GridCell
		activeCell: function (cell) {
			/* returns the currently active (focused) cell, if any.
				returnType="object" an object that has the format {element: , row: , index: , rowIndex: , columnKey: }
			*/
			if (cell !== undefined) {
				this.grid._activeCell = cell;
			} else {
				return this.grid._activeCell;
			}
		},
		activeRow: function (row) {
			/* returns the currently active (focused) row, if any.
				returnType="object" an object that has the format {element: , index: }
			*/
			if (row !== undefined) {
				this.grid._activeRow = row;
			} else {
				return this.grid._activeRow;
			}
		},
		clearSelection: function (internal, uiDirty) {
			/* clears all selected cells, selected rows, active cell and active row. Also updates the UI accordingly 
				paramType="bool" excluded="true"
				paramType="bool" excluded="true"
			*/
			// clear selected cells
			var i, v = this.grid.options.virtualization || this.grid.options.rowVirtualization;
			for (i = 0; i < this.grid._selectedCells.length; i++) {
				if (!v || (v && this.grid._selectedCells[i].rowIndex - this.grid._startRowIndex >= 0)) {
					this.grid._selectedCells[i].element.removeClass(this.css.selectedCell);
				}
			}
			this.grid._selectedCells = [];
			// clear selected rows
			for (i = 0; i < this.grid._selectedRows.length; i++) {
				if (!v || (v && this.grid._selectedRows[i].index - this.grid._startRowIndex >= 0)) {
					$(this.grid._selectedRows[i].element.children()).removeClass(this.css.selectedCell);
				}
			}
			this.grid._selectedRows = [];
			// clear selected row (single)
			if (this.grid._selectedRow !== null && this.grid._selectedRow !== undefined) {
				if (v && this.grid._selectedRow.index - this.grid._startRowIndex >= 0) {
					$(this.grid.rowAt(this.grid._selectedRow.index - this.grid._startRowIndex)).children().removeClass(this.css.selectedCell);
				} else {
					$(this.grid._selectedRow.element.children()).removeClass(this.css.selectedCell);
				}
				this.grid._selectedRow = null;
			}
			// clear selected cell (single)
			if (this.grid._selectedCell !== null && this.grid._selectedCell !== undefined) {
				if (v && this.grid._selectedCell.rowIndex - this.grid._startRowIndex >= 0) {
					$(this.grid.cellAt(this.grid._selectedCell.index, this.grid._selectedCell.rowIndex - this.grid._startRowIndex)).removeClass(this.css.selectedCell);
				} else {
					this.grid._selectedCell.element.removeClass(this.css.selectedCell);
				}
				this.grid._selectedCell = null;
			}
			if (!internal) {
				if (this.activeCell()) {
					this.activeCell().element.removeClass(this.css.activeCell);
					this.activeCell(null);
				}
				if (this._realActiveCell) {
					this._realActiveCell.element.removeClass(this.css.activeCell);
					this._realActiveCell = null;
				}
				if (this._realActiveRow) {
					this._realActiveRow.element.removeClass(this.css.activeRow);
					this._realActiveRow = null;
				}
				if (this.activeRow()) {
					this.activeRow().element.removeClass(this.css.activeRow);
					this.activeRow(null);
				}
			}
			if (uiDirty) {
				this.activeCell(null);
				this.activeRow(null);
			}
			// trigger internal event that selection has been cleared
			this._trigger("selectioncleared", this, { owner: this.grid, uiDirty: uiDirty });
		},
		// clear selection for the current grid, including all child grids that are part of the current hierarchical grid
		clearSelectionAllChildren: function (internal, uiDirty) {
        /*Clears the selection of the child grids of the current grid.
        */
			var children = this.grid.children(), i, sel;
			for (i = 0; i < children.length; i++) {
				sel = $(children[i]).data("igGridSelection");
				if (sel) {
					sel.clearSelection(internal, uiDirty);
				}
			}
		},
		clearSelectionAll: function (internal, uiDirty) {
        /*Clears the selection of the current grid and its child grids.
        */

			this.clearSelection(internal, uiDirty);
			this.clearSelectionAllOthers(internal, uiDirty);
		},
		/*
			clears the selection on all other grids recursively, that are part of the hierarchical grid, excluding the current one 
		*/
		clearSelectionAllOthers: function (internal, uiDirty) {
        /* Clears the selection on all other grids recursively, that are part of the hierarchical grid, excluding the current one.
        */
			// find the hierarchical grid
			var hgrid, children, i, sel, rootSel;
			if (!this._hgrid) {
				if (this.grid.element.hasClass("ui-iggrid-root")) {
					hgrid = this.grid.element.data('igHierarchicalGrid');
				} else {
					hgrid = this.grid.element.closest('.ui-iggrid-root').data('igHierarchicalGrid');
				}
			} else {
				hgrid = this._hgrid.data('igHierarchicalGrid');
			}
			if (hgrid) {
				children = hgrid.allChildren();
				for (i = 0; i < children.length; i++) {
					sel = $(children[i]).data("igGridSelection");
					if (sel && $(children[i]).attr('id') !== this.grid.element.attr('id')) {
						sel.clearSelection(internal, uiDirty);
					}
				}
			}
			if ((hgrid.element.attr('id') !== this.grid.element.attr('id') && hgrid.element.is("table"))
					|| (hgrid.element.is("div") && $("#" + hgrid.element.attr("id") + "_table").attr('id') !== this.grid.element.attr('id'))) {
				// also clear the root level selection
				if (!hgrid.element.is("table")) {
					rootSel = $("#" + hgrid.element.attr("id") + "_table").data("igGridSelection");
				} else {
					rootSel = hgrid.element.data("igGridSelection");
				}
				rootSel.clearSelection(internal, uiDirty);
			}
		},
		_excludeRows: function (element) {
			//var index = element.index();
			//return this.grid.element.find('tbody tr:lt(' + index + ')').find("[data-container=true]").length;
			return this.grid.element.children("tbody").children("tr:[data-container=true]").length;
		},
		// in the context of the hierarchical grid, returns the rows that are up to index "i", which should be excluded
		// from calculations
		_excludeRowsLt: function (element) {
			var index = element.index();
			if (this._groupBy) {
				return 0; // don't want to exclude any rows in groupby, since all are grouped. we are only interested when they are collapsed
			}
			return this.grid.element.children('tbody').children('tr:lt(' + index + ')').filter('[data-container=true]').length;
		},
		_calcExtraCells: function () {
			// S.S. November 30th, 2011, Bug #95307 We need to ensure the calculation is based on what is in the TBODY, as
			// especially after paging the code was returning results for TFOOT where Row Selector cells do have the data-skip
			// attribute. This made selection fall behind with one column after paging and when TFOOT has markup in it (e.g.
			// from Summaries).
			return this.grid.element.find("tbody > tr > td:[data-skip=true]").first().parent().find("[data-skip=true]").length;
		},
		_columnsCollectionModified: function () {
			this._registerTbodyEvents();
		},
		destroy: function () {
        /*Destroys the selection widget.
        */
			this.clearSelection();
			this._unregisterEvents();
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		_onUIDirty: function (e, args) {
			// if selection itself has triggered the event, return
			// A.T. 23 Aug 2011 - add additional checks so that events don't propagate across hierarchical grids
			if (args.owner === this || args.owner.element[0].id !== this.element[0].id) {
				return;
			}
			// reset row count
			if (!this.grid.options.virtualization && !this.grid.options.rowVirtualization) {
				this._rowCount = this.grid.dataSource.dataView().length;
			}
			if (this._groupBy) {
				// include all grouped rows
				this._rowCount += this.grid.element.children('tbody').children('tr[data-grouprow=true]');
			}
			this.clearSelection(true, true);
		},
		// every grid feature widget should implement this 
	    _injectGrid: function (gridInstance) {
			var i;
			this.grid = gridInstance;
			this.activeCell(null);
			this.grid._selectedCell = null;
			this.grid._selectedRow = null;
			this.activeRow(null);
			this.grid._selectedCells = [];
			this.grid._selectedRows = [];
			// selection is always inheritable ! 
			for (i = 0; i < this.grid.options.features.length; i++) {
				if (this.grid.options.features[i].name === "Selection") {
					this.grid.options.features[i].inherit = true;
				}
			}
			this.grid.element.bind('iggridvirtualrecordsrender', $.proxy(this._rs, this));
			this._uiDirtyHandler = $.proxy(this._onUIDirty, this);
			this.grid.element.bind('iggriduisoftdirty', this._uiDirtyHandler);
			this._rowExpandedHandler = $.proxy(this._rowExpanded, this);
			this.grid.element.bind('ighierarchicalgridrowexpanded', this._rowExpandedHandler);
			this._columnsCollectionModifiedHandler = $.proxy(this._columnsCollectionModified, this);
			this.grid.element.bind('iggridcolumnscollectionmodified', this._columnsCollectionModifiedHandler);
			this._hdirty = true;
			//this.grid.element.bind('iggriduidirty', this._uiDirtyHandler);
		}
    });
    $.extend($.ui.igGridSelection, {version: '12.2.20122.1021'});

}(jQuery));
