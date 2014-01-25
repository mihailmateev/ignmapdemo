/*!
 * Infragistics.Web.ClientUI Grid Column Moving 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *	ig.ui.tree.js
 *	ig.ui.shared.js
 *	ig.dataSource.js
 *	ig.util.js
 */

/*global jQuery, window, document */
if (jQuery === undefined) {
	throw new Error("jQuery is undefined");
}
(function ($) {

	$.widget("ui.igGridColumnMoving", {
		renderInFeatureChooser: true,
		options: {
			/* type="array" A list of column settings that specifies moving options on a per column basis. */
			columnSettings: [
				{
					/* type="string" Column key. this is a required property in every column setting if columnIndex is not set. */
					columnKey: null,
					/* type="number" Column index. Can be used in place of column key. The preferred way of populating a column setting is to always use the column keys as identifiers. */
					columnIndex: null,
					/* type="bool" Allows the column to be moved. */
					allowMoving: true
				}
			],
			/* type="deferred|immediate" Specify the drag-and-drop mode for the feature
			immediate type="string" Column headers will rearange as you drag with a space opening under the cursor for the header to be dropped on
			deferred type="string" A clone of the header dragged will be created and indicators will be shown between columns to help navigate the drop.
			*/
			mode: "immediate",
			/* type="dom|render" Specify the way columns will be rearranged
			dom type="string" Columns will be rearranged through dom manipulation
			render type="string" Columns will not be rearranged but the grid will be rendered again with the new column order. Please note this option is incompatible with immediate move mode.
			*/
			moveType: "dom",
			/* type="bool" Specifies if header cells should include an additional button that opens a moving helper dropdown. */
			addMovingDropdown: true,
			/* type="number" Specifies width of column moving dialog */
			movingDialogWidth: 400,
			/* type="number" Specifies height of column moving dialog */
			movingDialogHeight: '',
			/* type="number" Specifies time in milliseconds for animation duration to show/hide modal dialog */
			movingDialogAnimationDuration: 200,
			/* type="string" Specifies caption for each move down button in the column moving dialog */
			movingDialogCaptionButtonDesc: $.ig.ColumnMoving.locale.movingDialogCaptionButtonDesc,
			/* type="string" Specifies caption for each move up button in the column moving dialog */
			movingDialogCaptionButtonAsc: $.ig.ColumnMoving.locale.movingDialogCaptionButtonAsc,
			/* type="string" Specifies caption text for the column moving dialog */
			movingDialogCaptionText: $.ig.ColumnMoving.locale.movingDialogCaptionText,
			/* type="string" Specifies caption text for the feature chooser entry */
			movingDialogDisplayText: $.ig.ColumnMoving.locale.movingDialogDisplayText,
			/* type="string" Specifies caption for the move left dropdown button */
			dropDownMoveLeftText: $.ig.ColumnMoving.locale.dropDownMoveLeftText,
			/* type="string" Specifies caption for the move right dropdown button */
			dropDownMoveRightText: $.ig.ColumnMoving.locale.dropDownMoveRightText,
			/* type="string" Specifies caption for the move first dropdown button */
			dropDownMoveFirstText: $.ig.ColumnMoving.locale.dropDownMoveFirstText,
			/* type="string" Specifies caption for the move last dropdown button */
			dropDownMoveLastText: $.ig.ColumnMoving.locale.dropDownMoveLastText,
			/* type="string" Specifies tooltip text for the move indicator*/
			movingToolTipMove: $.ig.ColumnMoving.locale.movingToolTipMove
		},
		css: {
			/* Classes applied to the table header cells when the mouse hovers on them */
			headerCellMouseOver: "ui-state-hover",
			/* Classes applied to the table header button expanding the moving dropdown */
			dropDownButton: "ui-iggrid-moving-indicator",
			/* Classes applied to the container for the drop down header button */
			dropDownIndicatorContainer: "ui-iggrid-indicatorcontainer",
			/* Classes applied to the top column moving indicator in deferred mode */
			dragIndicatorTop: "ui-iggrid-columnmoving-dragtop",
			/* Classes applied to the bottom column moving indicator in deferred mode */
			dragIndicatorBottom: "ui-iggrid-columnmoving-dragbottom",
			/* Classes applied to the feature chooser icon container */
			featureChooserIconContainer: "ui-iggrid-featurechoosericoncontainer",
			/* Classes applied to the feature chooser icon for column moving feature */
			featureChooserMovingDialogIcon: "ui-icon ui-icon-newwin",
			/* Classes applied to the move left icon for the column moving dialog */
			featureChooserLeftIcon: "ui-icon ui-iggrid-icon-left",
			/* Classes applied to the move right icon for the column moving dialog */
			featureChooserRightIcon: "ui-icon ui-iggrid-icon-right",
			/* Classes applied to the move first icon for the column moving dialog */
			featureChooserFirstIcon: "ui-icon ui-iggrid-icon-first",
			/* Classes applied to the move last icon for the column moving dialog */
			featureChooserLastIcon: "ui-icon ui-iggrid-icon-last",
			/* Classes applied to the column moving dropdown dialog */
			columnMovingDropDown: "ui-iggrid-featurechooser-dropdown-dialog ui-widget ui-widget-content ui-corner-all",
			/* Classes applied to the column moving dropdown list */
			columnMovingDropDownList: "ui-iggrid-featurechooser-list ui-menu",
			/* Classes applied to each item in the column moving dropdown list */
			columnMovingDropDownItem: "ui-iggrid-featurechooserddlistitemicons ui-state-default",
			/* Classes applied to each item in the column moving dropdown list when mouse hovers over them */
			columnMovingDropDownItemHover: "ui-iggrid-featurechooser-listitem-hover ui-state-active ui-state-hover",
			/* Classes applied to the text of each item in the column moving dropdown list when mouse hovers over them */
			columnMovingDropDownItemText: "ui-iggrid-featurechooserddlistitemtext",
			/* Classes applied to the column indicators of the moving drop down */
			columnMovingIndicatorSelected: "ui-iggrid-hiding-indicator-selected",
			/* Classes applied to the lists of items in the moving dialog */
			movingDialogItemList: "ui-iggrid-moving-dialog-columns",
			/* Classes applied to the items in the item lists in the moving dialog */
			movingDialogListItem: "ui-widget-content",
			/* Classes applied to the move up arrow of each list item in the moving dialog */
			movingDialogListItemArrowUp: "ui-icon-arrowthick-1-n ui-button-icon-primary ui-icon",
			/* Classes applied to the move down arrow of each list item in the moving dialog */
			movingDialogListItemArrowDown: "ui-icon-arrowthick-1-s ui-button-icon-primary ui-icon",
			/* Classes applied to the inner button elements of the arrow indicators in the moving dialog */
			movingDialogListItemArrowButton: "ui-button ui-corner-all ui-button-icon-only ig-sorting-indicator",
			/* Classes applied to the text of each list item in the moving dialog */
			movingDialogListItemText: "ui-iggrid-dialog-text",
			/* Classes applied to the close button for the moving dialog */
			movingDialogCloseButton: "ui-icon ui-icon-close"
		},
		events: {
			/* cancel="true" Event which is fired when a drag operation begins on a column header
			use args.columnKey to get the column key of the column being dragged
			use args.columnIndex to get the column index of the column being dragged
			use args.owner to get a reference to the widget
			use args.header to get a reference to the orginal th being dragged
			use args.helper to get a reference to cloned DOM element that's actually being dragged
			*/
			columnDragStart: "columnDragStart",
			/* Event which is fired when a drag operation ends on a column header
			use args.columnKey to get the column key of the column that was being dragged
			use args.columnIndex to get the column index of the column that was being dragged
			use args.owner to get a reference to the widget
			use args.header to get a reference to the orginal th that was being dragged
			use args.helper to get a reference to cloned DOM element that was actually being dragged
			*/
			columnDragEnd: "columnDragEnd",
			/* Event which is fired when a drag operation is canceled
			use args.columnKey to get the column key of the column that was being dragged
			use args.columnIndex to get the column index of the column that was being dragged
			use args.owner to get a reference to the widget
			use args.header to get a reference to the orginal th that was being dragged
			use args.helper to get a reference to cloned DOM element that was actually being dragged
			*/
			columnDragCanceled: "columnDragCanceled",
			/* cancel="true" Event which is fired when a column moving operation is initiated
			use args.columnKey to get the column key of the column that was being moved
			use args.columnIndex to get the column index of the column that was being moved
			use args.targetIndex to get the new column index of the column that was being moved
			use args.owner to get a reference to the widget			
			*/
			columnMoving: "columnMoving",
			/* Event which is fired when a column moving operation completes
			use args.columnKey to get the column key of the column that was moved
			use args.oldIndex to get the previous column index of the column that was moved
			use args.newIndex to get the new column index of the column that was being moved
			use args.owner to get a reference to the widget
			*/
			columnMoved: "columnMoved",
			/* cancel="true" event fired before the moving dialog is opened.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialogElement to get a reference to the moving dialog element. This is a jQuery object.
			*/
			movingDialogOpening: "movingDialogOpening",
			/* event fired after the column chooser is already opened.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialogElement to get a reference to the moving dialog element. This is a jQuery object.
			*/
			movingDialogOpened: "movingDialogOpened",
			/* event fired every time the moving dialog changes its position.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialogElement to get a reference to the moving dialog element. This is a jQuery object.
			Use ui.originalPosition to get the original position of the moving dialog div as { top, left } object, relative to the page.
			Use ui.position to get the current position of the moving dialog div as { top, left } object, relative to the page.
			*/
			movingDialogDragged: "movingDialogDragged",
			/* cancel="true" event fired before the moving dialog is closed.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialogElement to get a reference to the moving dialog element. This is a jQuery object.
			*/
			movingDialogClosing: "movingDialogClosing",
			/* event fired after the moving dialog has been closed.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialogElement to get a reference to the moving dialog element. This is a jQuery object.
			*/
			movingDialogClosed: "movingDialogClosed",
			/* cancel="true" event fired before the contents of the model dialog are rendered.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialog to get a reference to the Moving Dialog element. This is a jQuery object.
			*/
			movingDialogContentsRendering: "movingDialogContentsRendering",
			/* event fired after the contents of the model dialog are rendered.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialog to get a reference to the Moving Dialog element. This is a jQuery object.
			*/
			movingDialogContentsRendered: "movingDialogContentsRendered",
			/* event fired when move up button is pressed in the moving dialog
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialog to get a reference to the Moving Dialog element. This is a jQuery object.
			Use ui.columnKey to get the column key of the column that was being moved
			Use ui.columnIndex to get the column index of the column that was being moved
			Use ui.targetIndex to get the new column index of the column that was being moved
			*/
			movingDialogMoveUpButtonPressed: "movingDialogMoveUpButtonPressed",
			/* event fired when move down button is pressed in the moving dialog
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialog to get a reference to the Moving Dialog element. This is a jQuery object.
			Use ui.columnKey to get the column key of the column that was being moved
			Use ui.columnIndex to get the column index of the column that was being moved
			Use ui.targetIndex to get the new column index of the column that was being moved
			*/
			movingDialogMoveDownButtonPressed: "movingDialogMoveDownButtonPressed",
			/* cancel="true" event fired when column moving is initiated through dragging it in the moving dialog
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialog to get a reference to the Moving Dialog element. This is a jQuery object.
			Use ui.columnKey to get the column key of the column that was being moved
			Use ui.columnIndex to get the column index of the column that was being moved
			Use ui.targetIndex to get the new column index of the column that was being moved
			*/
			movingDialogDragColumnMoving: "movingDialogDragColumnMoving",
			/* event fired when column moving is completed through dragging it in the moving dialog
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridColumnMoving widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.movingDialog to get a reference to the Moving Dialog element. This is a jQuery object.
			Use ui.columnKey to get the column key of the column that was being moved
			Use ui.columnIndex to get the column index of the column that was being moved
			Use ui.targetIndex to get the new column index of the column that was being moved
			*/
			movingDialogDragColumnMoved: "movingDialogDragColumnMoved"
		},
		_createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			this.options.columnSettings = [];
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
		_create: function () {
			// stores the left coordinate of all column borders per table header row
			this._cache = [];
			// stores the currently dragged column key
			this._cKey = "";
			// stores the currently dragged column index
			this._cIdx = -1;
			// stores the target key for the currently dragged column
			this._tKey = "";
			// stores the target index for the currently dragged column
			this._tIdx = -1;
			// stores the helper th created for draggable to drag columns
			this._helper = null;
			// stores the original header in immediate mode
			this._oTh = null;
			// stores the bottom indivator in deferred mode
			this._cmib = null;
			// stores the top indicator in deferred mode
			this._cmit = null;
			// stores the modal dialog for the control
			this._movingDialog = null;
			// stores whether groupby is enabled
			this._grpByEnabled = false;
			// stores info about the dropdown buttons
			this._ddButtons = {
				first: {
					text: this.options.dropDownMoveFirstText,
					func: $.proxy(this._moveFirst, this),
					icon: this.css.featureChooserFirstIcon
				},
				left: {
					text: this.options.dropDownMoveLeftText,
					func: $.proxy(this._moveLeft, this),
					icon: this.css.featureChooserLeftIcon
				},
				right: {
					text: this.options.dropDownMoveRightText,
					func: $.proxy(this._moveRight, this),
					icon: this.css.featureChooserRightIcon
				},
				last: {
					text: this.options.dropDownMoveLastText,
					func: $.proxy(this._moveLast, this),
					icon: this.css.featureChooserLastIcon
				}
			};
			// dummy check
			if (this.options.mode === "immediate" && this.options.moveType === "render") {
				this.options.moveType = "dom";
			}
			if (this.options.addMovingDropdown === false) {
				this.renderInFeatureChooser = false;
			}
		},
		_setOption: function (key, value) {
			// we don't support changing the mode type for moving as it involves heavy modifications to the dom
			if (key === "mode" || key === "columnSettings" || key === "addMovingDropdown") {
				throw new Error($.ig.Grid.locale.optionChangeNotSupported + ' ' + key);
			} else {
				$.Widget.prototype._setOption.apply(this, arguments);
			}
		},
		// public methods
		destroy: function () {
			this._unregisterEvents();
			this._removeMoving();
			/* destroys the column moving widget */
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		moveColumn: function (column, target, after, inDom) {
			/* Moves a visible column at a specified place, in front or behind a target column or at a target index
			paramType="number|string" An identifier of the column to be moved. It can be a key, a Multi-Column Header identificator, or an index in a number format. The latter is not supported when the grid contains multi-column headers.
			paramType="number|string" An identifier of a column where the moved column should move to or an index at which the moved column should be moved to. In the case of a column identifier the column will be moved after it by default.
			paramType="bool" optional="true" Specifies whether the column moved should be moved after or before the target column. 
			paramType="bool" optional="true" Specifies whether the column moving will be enacted through DOM manipulation or through rerendering of the grid.
			*/
			this._moveColumn(column, target, after, inDom, true);
		},
		// grid event handlers
		_headerCellRendered: function (event, args) {
			if (this.grid.id() !== args.owner.id()) {
				return;
			}
			this._thRendered(args.th);
		},
		_headerRendered: function (event, args) {
			if (this.grid.id() !== args.owner.id()) {
				return;
			}
			this._thsRendered(args.table);
		},
		_gridRendered: function (event, args) {
			this._updateLayout();
		},
		// ui draggable moving event handlers
		_headerPicked: function (event, args) {
			var $th = $(event.target).closest("th"), id = this._getIdOfTh($th), noCancel = true;
			args = {
				columnKey: id,
				columnIndex: $th.index(),
				owner: this,
				header: $th,
				helper: this._helper
			};
			noCancel = this._trigger(this.events.columnDragStart, event, args);
			if (noCancel) {
				this._thPicked($th, id);
			}
			return noCancel;
		},
		_headerDragged: function (event, args) {
			var left;
			if (this._oPos) {
				left = this._oPos.left > args.position.left;
			} else {
				left = args.originalPosition.left > args.position.left;
			}
			this._oPos = { left: args.position.left };
			this._thDragged(args.helper, args.offset, left);
		},
		_headerDropped: function (event, args) {
			var noCancel;
			noCancel = this._trigger(this.events.columnDragEnd, event, args);
			if (noCancel) {
				this._thDropped();
			} else {
				this._trigger(this.events.columnDragCanceled, event, args);
			}
			return noCancel;
		},
		// moving dialog event handlers
		_dialogUpPressed: function (event, args) {
			var tar = $(event.target),
				item = tar.closest("li"),
				parent = item.parent(),
				idx = item.index(),
				col = tar.closest("span").attr("datakey"),
				a;
			a = {
				owner: this,
				movingDialog: $("#" + this.grid.id() + "_moving_movingDialog"),
				columnKey: col,
				columnIndex: idx,
				targetIndex: idx === 0 ? parent.children().length - 1 : idx - 1
			};
			if (idx === 0) {
				item.detach().insertAfter(parent.children("li:last"));
			} else {
				item.detach().insertBefore(parent.children("li:eq(" + (idx - 1) + ")"));
			}
			this._moveColumn(col, idx === 0 ? item.parent().children().length - 1 : idx - 1, true, this.options.moveType === "dom", false);
			this._trigger(this.events.movingDialogMoveUpButtonPressed, null, a);
		},
		_dialogDownPressed: function (event, args) {
			var tar = $(event.target),
				item = tar.closest("li"),
				parent = item.parent(),
				idx = item.index(),
				col = tar.closest("span").attr("datakey"),
				a;
			a = {
				owner: this,
				movingDialog: $("#" + this.grid.id() + "_moving_movingDialog"),
				columnKey: col,
				columnIndex: idx,
				targetIndex: idx === parent.children().length - 1 ? 0 : idx + 1
			};
			if (idx === item.parent().children().length - 1) {
				item.detach().insertBefore(parent.children("li:first"));
			} else {
				item.detach().insertAfter(parent.children("li:eq(" + idx + ")"));
			}
			this._moveColumn(col, idx === item.parent().children().length - 1 ? 0 : idx + 1, true, this.options.moveType === "dom", false);
			this._trigger(this.events.movingDialogMoveDownButtonPressed, null, a);
		},
		_dialogRearranging: function (event, args) {
			var noCancel, a,
				id = $(args.draggable).attr("data-value"),
				cIdx = args.originalIndex,
				tIdx = args.targetIndex;
			a = {
				owner: this,
				movingDialog: $("#" + this.grid.id() + "_moving_movingDialog"),
				columnKey: id,
				columnIndex: cIdx,
				targetIndex: tIdx
			};
			noCancel = this._trigger(this.events.movingDialogDragColumnMoving, null, a);
			if (noCancel) {
				this._moveColumn(id, tIdx, true, this.options.moveType === "dom", false);
				a.movingDialog.find("div.ui-state-highlight").remove();
				this._trigger(this.events.movingDialogDragColumnMoved, null, a);
				return true;
			}
			return false;
		},
		_dialogDragged: function (event, args) {
			this._trigger(this.events.movingDialogDragged, null,
				{
					movingDialogElement: event.target,
					owner: this,
					originalPosition: args.originalPosition,
					position: args.position
				});
		},
		_dialogOpening: function (event, args) {
			var noCancel;
			noCancel = this._trigger(this.events.movingDialogOpening, null, { movingDialogElement: event.target, owner: this });
			if (noCancel) {
				this._renderMovingDialogContent(event, args);
				this._trigger(this.events.movingDialogOpened, null, { movingDialogElement: event.target, owner: this });
			}
		},
		_dialogClosing: function (event, args) {
			return this._trigger(this.events.movingDialogClosing, null, { movingDialogElement: event.target, owner: this });
		},
		_dialogClosed: function (event, args) {
			this._trigger(this.events.movingDialogClosed, null, { movingDialogElement: event.target, owner: this });
		},
		// dropdown event handlers
		_dropDownMouseDown: function (event, args) {
			var ind = $(event.target);
			this._toggleDropDown(ind, $("div[data-moving-inddropdown='" + this.grid.id() + "']"));
			this._cancelEvent(event);
		},
		_dropDownKeyDown: function (event, args) {
			var sItem,
				nItem,
				nItemB,
				dropdown = $("div[data-moving-inddropdown='" + this.grid.id() + "']");
			if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
				sItem = dropdown.find("ul .ui-state-hover:first");
				if (dropdown.is(':visible') && sItem.length > 0) {
					sItem.trigger("mousedown");
				}
				this._toggleDropDown($(event.target), dropdown, false);
				this._cancelEvent(event);
			} else if (event.keyCode === $.ui.keyCode.ESCAPE) {
				this._toggleDropDown($(event.target), dropdown, false);
				this._cancelEvent(event);
			} else if (event.keyCode === $.ui.keyCode.DOWN || event.keyCode === $.ui.keyCode.UP) {
				if (dropdown.is(':visible')) {
					sItem = dropdown.find('ul .ui-state-hover:first').closest('li');
					if (sItem.length === 0) {
						nItem = dropdown.find('ul li:eq(0)');
					} else {
						if (sItem.index() === 0 && event.keyCode === $.ui.keyCode.UP) {
							nItem = sItem.parent().children(":last");
						} else {
							nItem = event.keyCode === $.ui.keyCode.DOWN ? sItem.next() : sItem.prev();
						}
					}
					dropdown.find('ul .ui-state-hover').removeClass(this.css.columnMovingDropDownItemHover);
					nItemB = nItem.find("[role='button']");
					if (nItemB.length > 0) {
						nItem = nItemB;
					}
					nItem.addClass(this.css.columnMovingDropDownItemHover);
				}
				this._cancelEvent(event);
			}
		},
		_dropDownButtonMouseOver: function (event, args) {
			$(event.currentTarget).addClass(this.css.columnMovingDropDownItemHover);
		},
		_dropDownButtonMouseOut: function (event, args) {
			$(event.currentTarget).removeClass(this.css.columnMovingDropDownItemHover);
		},
		_moveLeft: function (event, args) {
			var sib = this._cache.siblings[args], cid, tid, i;
			for (i = 0; i < sib.length; i++) {
				cid = sib[i].key || sib[i].identifier;
				if (cid === args) {
					if (i > 0) {
						tid = sib[i - 1].key || sib[i - 1].identifier;
						this._moveColumn(cid, tid, false, this.options.moveType === "dom", false);
					}
					break;
				}
			}
		},
		_moveRight: function (event, args) {
			var sib = this._cache.siblings[args], cid, tid, i;
			for (i = 0; i < sib.length; i++) {
				cid = sib[i].key || sib[i].identifier;
				if (cid === args) {
					if (i < sib.length - 1) {
						tid = sib[i + 1].key || sib[i + 1].identifier;
						this._moveColumn(cid, tid, true, this.options.moveType === "dom", false);
					}
					break;
				}
			}
		},
		_moveFirst: function (event, args) {
			var sib = this._cache.siblings[args], cid, tid, i;
			for (i = 0; i < sib.length; i++) {
				cid = sib[i].key || sib[i].identifier;
				if (cid === args) {
					if (i !== 0) {
						tid = sib[0].key || sib[0].identifier;
						this._moveColumn(cid, tid, false, this.options.moveType === "dom", false);
					}
					break;
				}
			}
		},
		_moveLast: function (event, args) {
			var sib = this._cache.siblings[args], cid, tid, i;
			for (i = 0; i < sib.length; i++) {
				cid = sib[i].key || sib[i].identifier;
				if (cid === args) {
					if (i !== sib.length - 1) {
						tid = sib[sib.length - 1].key || sib[sib.length - 1].identifier;
						this._moveColumn(cid, tid, true, this.options.moveType === "dom", false);
					}
					break;
				}
			}
		},
		// style event handlers
		_headerMouseOver: function (event, args) {
			$(event.target).closest("th").addClass(this.css.headerCellMouseOver);
		},
		_headerMouseOut: function (event, args) {
			$(event.target).closest("th").removeClass(this.css.headerCellMouseOver);
		},
		// render functions
		_renderHelpers: function () {
			this._cmib = $("<div>&nbsp;</div>")
				.attr("id", this.grid.id() + "_moving_indicator_bottom")
				.addClass(this.css.dragIndicatorTop)
				.css({
					'position': 'absolute',
					'z-index': '1000000',
					'width': '16px',
					'height': '16px',
					'display': 'none'
				})
				.appendTo(document.body);
			this._cmit = $("<div>&nbsp;</div>")
				.attr("id", this.grid.id() + "_moving_indicator_top")
				.addClass(this.css.dragIndicatorBottom)
				.css({
					'position': 'absolute',
					'z-index': '1000000',
					'width': '16px',
					'height': '16px',
					'display': 'none'
				})
				.appendTo(document.body);
		},
		_renderFeatureChooser: function (col, th) {
			var fc = this.grid.element.data('igGridFeatureChooser');
			if (fc) {
				if (fc._shouldRenderInFeatureChooser(col) === true) {
					this._addMoveButtonsInFeatureChooser(fc, col);
					fc._renderInFeatureChooser(
						col,
						{
							name: 'ColumnMovingDialog',
							text: this.options.movingDialogDisplayText,
							secondaryIconClass: this.css.featureChooserMovingDialogIcon,
							method: this._openMovingDialogHandler,
							groupName: 'modaldialog',
							groupOrder: 3,
							order: 5
						}
					);
				} else {
					this._renderMovingDropDownIndicator(th, col);
				}
			}
		},
		_renderMovingDropDownIndicator: function (th, col) {
			var $button, $anchor, $container, self = this;
			$button = $("<span><></span>").addClass(this.css.dropDownButton);
			$anchor = $("<a></a>")
				.attr("href", "#")
				.attr("th-remove-focus", "")
				.attr("title", this.options.movingToolTipMove)
				.attr("id", this.grid.id() + "_moving_headerButton_" + col)
				.bind({
					keydown: this._dropDownKeyHandler,
					blur: function (e) {
						self._toggleDropDown($(e.target), $("div[data-moving-inddropdown='" + self.grid.id() + "']"), true);
					},
					mousedown: this._dropDownButtonHandler,
					mouseup: this._cancelEventHandler,
					click: this._cancelEventHandler
				});
			$container = $("<div></div>").addClass(this.css.dropDownIndicatorContainer).appendTo(th);
			$button.appendTo($anchor);
			$anchor.appendTo($container);
			this._needToRenderDropDown = true;
		},
		_renderMovingDialogContent: function () {
			/* Render moving modal dialog and its content */
			var $content = this._movingDialog.igGridModalDialog('getContent'),
				movingDialog = $('#' + this.grid.element[0].id + '_moving_movingDialog'),
				$tree = $content.find("#" + this.grid.id() + "_dialog_tree"),
				noCancel;
			noCancel = this._trigger(this.events.movingDialogContentsRendering, null, { movingDialogElement: movingDialog, owner: this });
			if (noCancel) {
				if ($tree.length > 0) {
					$tree
						.igTree("option", "dataSource", this._getClonedDataSource(this.grid._oldCols || this.grid._visibleColumns()));
				} else {
					this._initializeTree($content);
				}
				$("span[class='" + this.css.movingDialogListItemArrowDown + "']")
					.unbind("mousedown", this._dialogDownHandler)
					.bind("mousedown", this._dialogDownHandler);
				$("span[class='" + this.css.movingDialogListItemArrowUp + "']")
					.unbind("mousedown", this._dialogUpHandler)
					.bind("mousedown", this._dialogUpHandler);
				this._trigger(this.events.movingDialogContentsRendered, null, { movingDialogElement: movingDialog, owner: this });
			}
		},
		_initializeTree: function (content) {
			$("<ul id='" + this.grid.id() + "_dialog_tree'></ul>")
				.appendTo(content)
				.igTree({
					dataSourceType: 'json',
					dataSource: this._getClonedDataSource(this.grid._oldCols || this.grid._visibleColumns()),
					bindings: {
						textKey: 'headerText',
						valueKey: 'key',
						childDataProperty: 'group',
						nodeContentTemplate: this._getTreeTemplate() + '<span>${headerText}</span>'
					},
					dragAndDrop: true,
					dragAndDropSettings: {
						dragAndDropMode: 'move',
						revert: true,
						zIndex: 1000001,
						customDropValidation: this._treeDropValidation,
						containment: false
					},
					nodeDropping: this._dialogRearrangingHandler,
					selectionChanging: function () { return false; }
				});
		},
		_getClonedDataSource: function (ds) {
			return jQuery.extend(true, [], ds);
		},
		_getTreeTemplate: function () {
			var up, down;
			up = "<span class='" + this.css.movingDialogListItemArrowButton + "'><span id='" + this.grid.id() +
				"_moving_dialog_${key}_up' title='" + this.options.movingDialogCaptionButtonAsc +
				"' role='button' datakey='${key}' class='" + this.css.movingDialogListItemArrowUp + "' style='" +
				"margin-top:-13px;'></span></span>";
			down = "<span class='" + this.css.movingDialogListItemArrowButton + "'><span id='" + this.grid.id() +
				"_moving_dialog_${key}_down' title='" + this.options.movingDialogCaptionButtonDesc +
				"' role='button' datakey='${key}' class='" + this.css.movingDialogListItemArrowDown + "' style='" +
				"margin-top:-13px;'></span></span>";
			return up + down;
		},
		_renderMovingDialog: function () {
			var o = this.options,
				$captionButtonContainer,
				$closeButton,
				movingDialog = $('<div></div>')
					.appendTo("body")
					.attr('id', this.grid.element[0].id + '_moving_movingDialog');
			this._movingDialog = movingDialog;
			movingDialog.igGridModalDialog({
				renderFooterButtons: false,
				modalDialogCaptionText: o.movingDialogCaptionText,
				modalDialogWidth: o.movingDialogWidth,
				modalDialogHeight: o.movingDialogHeight,
				animationDuration: o.movingDialogAnimationDuration,
				//grid: this.grid,
				gridContainer: this.grid.container(),
				modalDialogOpening: this._dialogOpeningHandler,
				modalDialogMoving: this._dialogDraggedHandler,
				modalDialogClosing: this._dialogClosingHandler,
				modalDialogClosed: this._dialogClosedHandler
			});
			// render close button
			$captionButtonContainer = movingDialog.igGridModalDialog('getCaptionButtonContainer');
			$closeButton = $('<button></button>')
				.attr('id', this.grid.element[0].id + '_moving_movingDialog_closeButton')
				.appendTo($captionButtonContainer);
			$closeButton.igButton({
				onlyIcons: true,
				icons: {
					primary: this.css.movingDialogCloseButton
				},
				width: "20px",
				height: "20px",
				click: this._dialogCloseButtonHandler
			});
		},
		_renderDropDown: function (element) {
			var self = this, dropDown, list;
			dropDown = $("<div data-moving-inddropdown='" + this.grid.id() + "'></div>")
				.css('position', 'absolute')
				.css('display', 'none')
				.addClass(this.css.columnMovingDropDown)
				.appendTo('body');
			list = $('<ul tabindex="0"></ul>').addClass(this.css.columnMovingDropDownList).appendTo(dropDown);
			$.each(this._ddButtons, function (key, val) {
				$('<li></li>')
					.addClass(self.css.columnMovingDropDownItem)
					.attr("data-key", key)
					.bind({
						mouseover: self._dropDownButtonMouseOverHandler,
						mouseout: self._dropDownButtonMouseOutHandler
					})
					.append(
						$('<span></span>')
							.addClass(self.css.featureChooserIconContainer)
							.append(
								$('<span></span>')
									.addClass(val.icon)
							)
					)
					.append(
						$('<span></span>')
							.addClass(self.css.columnMovingDropDownItemText)
							.text(val.text)
					)
					.appendTo(list);
			});
			// moving dialog button
			$('<a></a>')
				.appendTo($("<li></li>").appendTo(list))
				.igButton({
					labelText: this.options.movingDialogCaptionText,
					mousedown: function (event) {
						if (event.target) {
							setTimeout(function () { $(event.target).removeClass('ui-state-active'); }, 0);
						}
						self._toggleDropDown(element, dropDown, true);
						self._openMovingDialog(element, dropDown, true);
					}
				});
			return dropDown;
		},
		_toggleDropDown: function (element, dropDown, isCalledFromBlur) {
			var th,
				id,
				isLast,
				offset,
				left,
				isVisible = (dropDown.is(':visible') === true),
				self = this,
				item;
			if ((dropDown.data('isAnimating') === true) || (isVisible === false && isCalledFromBlur === true)) {
				return;
			}
			if (!isVisible) {
				th = element.closest('th');
				isLast = th.parent().children().length - th.index() <= 2;
				offset = th.offset();
				if (isLast) {
					left = offset.left + th.outerWidth() - dropDown.outerWidth();
					left = Math.max(0, left);
				} else {
					left = offset.left;
				}
				dropDown.css('top', offset.top + th.outerHeight());
				dropDown.css('left', left);
				$.each(this._ddButtons, function (key, value) {
					item = dropDown.find("li[data-key='" + key + "']")
						.bind("mousedown.temp", function (event) {
							self._toggleDropDown(element, dropDown, true);
							id = th.attr("id");
							if (id) {
								id = id.replace(self.grid.id() + "_", "");
							} else {
								id = th.attr("data-mch-id");
							}
							value.func(null, id);
							event.stopPropagation();
							event.preventDefault();
						});
				});
			} else {
				$.each(this._ddButtons, function (key, value) {
					item = dropDown.find("li[data-key='" + key + "']").unbind("mousedown.temp");
				});
			}
			dropDown.data('isAnimating', true);
			dropDown.toggle(200, function () {
				if (dropDown.is(':visible') === true) {
					th.find('a').focus();
					if (element) {
						element.addClass(self.css.columnMovingIndicatorSelected);
						element.attr("data-indicator-selected", "true");
					}
				} else {
					if (element) {
						element.removeClass(self.css.columnMovingIndicatorSelected);
						element.removeAttr("data-indicator-selected");
					}
				}
				dropDown.data('isAnimating', false);
			});
		},
		_addMoveButtonsInFeatureChooser : function (fc, key) {
			fc._renderInFeatureChooser(
				key,
				{
					name: 'First',
					text: this.options.dropDownMoveFirstText,
					iconClass: this.css.featureChooserFirstIcon,
					isSelectable: false,
					isSelected: false,
					method: $.proxy(this._moveFirst, this),
					updateOnClickAll: false,
					groupName: 'click',
					groupOrder: 2,
					order: 2
				}
			);
			fc._renderInFeatureChooser(
				key,
				{
					name: 'Left',
					text: this.options.dropDownMoveLeftText,
					iconClass: this.css.featureChooserLeftIcon,
					isSelectable: false,
					isSelected: false,
					method: $.proxy(this._moveLeft, this),
					updateOnClickAll: false,
					groupName: 'click',
					groupOrder: 2,
					order: 3
				}
			);
			fc._renderInFeatureChooser(
				key,
				{
					name: 'Right',
					text: this.options.dropDownMoveRightText,
					iconClass: this.css.featureChooserRightIcon,
					isSelectable: false,
					isSelected: false,
					method: $.proxy(this._moveRight, this),
					updateOnClickAll: false,
					groupName: 'click',
					groupOrder: 2,
					order: 4
				}
			);
			fc._renderInFeatureChooser(
				key,
				{
					name: 'Last',
					text: this.options.dropDownMoveLastText,
					iconClass: this.css.featureChooserLastIcon,
					isSelectable: false,
					isSelected: false,
					method: $.proxy(this._moveLast, this),
					updateOnClickAll: false,
					groupName: 'click',
					groupOrder: 2,
					order: 6
				}
			);
		},
		// private function
		_moveColumn: function (column, target, after, inDom, fromApi) {
			var noCancel = true, args;
			if (fromApi === false) {
				args = {
					columnKey: this._cKey,
					columnIndex: this._cIdx,
					targetIndex: this._tIdx,
					owner: this
				};
				noCancel = this._trigger(this.events.columnMoving, null, args);
			}
			if (noCancel) {
				this.grid.moveColumn(column, target, after, inDom);
				if (fromApi === false) {
					delete args.columnIndex;
					delete args.targetIndex;
					args.oldIndex = this._cIdx;
					args.newIndex = this._tIdx;
					this._triggerColumnMovedAsync(args);
				}
			}
			this._updateLayout();
		},
		_thRendered: function (th) {
			var cid = this._getIdOfTh(th), cix = th.index("not[data-skip='true']");
			if (this._isColumnMovable(cid, cix) === true) {
				this._markForMoving(th);
				if (this.options.addMovingDropdown === true) {
					this._renderFeatureChooser(cid, th);
				}
			}
		},
		_thsRendered: function (table) {
			if (this.options.mode === "deferred") {
				// in deferred mode we need the moving helpers
				this._renderHelpers();
			}
			if (this.options.addMovingDropdown === true) {
				// check if the moving dialog isn't alreay rendered
				if ($("#" + this.grid.element[0].id + "_moving_movingDialog").length === 0) {
					this._renderMovingDialog();
				}
				// check if the dropdown isn't already rendered
				if ($("div[data-moving-inddropdown='" + this.grid.id() + "']").length === 0) {
					this._renderDropDown();
				}
			}
		},
		_thPicked: function (th, id) {
			this._cKey = id;
			this._cIdx = th.index();
			if (this.options.mode === "immediate") {
				th.children().hide();
				this._oTh = th;
				/*$empty = $("<th></th>")
					//.attr("id", this.grid.id() + "_moving_immediate_th")
					.attr("colspan", th.attr("colspan") ? th.attr("colspan") : 1)
					.attr("rowspan", th.attr("rowspan") ? th.attr("rowspan") : 1)
					.insertAfter(th);
				if (th.attr("id")) {
					$empty.attr("id", th.attr("id"));
				} else {
					$empty.attr("data-mch-id", th.attr("data-mch-id"));
				}
				this._oTh = th.hide();*/
			}
		},
		_thDragged: function (helper, pos, left) {
			var siblings = this._cache.siblings[this._cKey], i, j, l, tpos, tkey, m, tw;
			l = left === true ? pos.left : pos.left + helper.width();
			if (this.grid._loadingIndicator._indicator.is(":visible")) {
				return;
			}
			for (i = 0; i <= siblings.length; i++) {
				j = i === siblings.length ? i - 1 : i;
				tkey = siblings[j].key || siblings[j].identifier;
				tpos = this._cache.columns[tkey];
				tw = tpos.offset.left;
				tw = i === siblings.length ? tw + tpos.dimensions.width : tw;
				if (l > tw - 20 && l < tw + 20) {
					m = this._tKey !== tkey;
					this._tKey = tkey;
					this._tIdx = j;
					this._last = i === siblings.length;
					if (this.options.mode === "immediate") {
						if (m === true && this._cKey !== this._tKey) {
							this._moveColumn(this._cKey, this._tKey, !left, true, false);
						}
					} else {
						this._showIndicators(tw, tpos.offset.top, tpos.dimensions);
					}
				}
			}
		},
		_thDropped: function () {
			if (this.options.mode === "immediate") {
				this._oTh.children().show();
				return;
			}
			this._hideIndicators();
			if (this._tKey && this._cKey !== this._tKey) {
				this._moveColumn(this._cKey, this._tKey, this._last, this.options.moveType === "dom", false);
			}
			delete this._cKey;
			delete this._tKey;
			$(".ui-draggable-dragging").hide();
		},
		_isColumnMovable: function (col, idx) {
			var i, cs;
			for (i = 0; i < this.options.columnSettings.length; i++) {
				cs = this.options.columnSettings[i];
				if (cs.columnIndex) {
					if (i === idx) {
						return cs.allowMoving;
					}
				}
				if (cs.columnKey) {
					if (col === cs.columnKey) {
						return cs.allowMoving;
					}
				}
			}
			return true;
		},
		_getIdOfTh: function (th) {
			var mchid = th.attr("data-mch-id");
			if (mchid) {
				return mchid;
			}
			return th.attr("id").replace(this.grid.id() + "_", "");
		},
		_getThById: function (id) {
			return $("th[data-mch-id='" + id + "'],th[id='" + this.grid.id() + "_" + id + "']");
		},
		_applyEmptyHeader: function () {
			var fth = $("#" + this.grid.id() + "_moving_immediate_th");
			fth.detach().insertBefore(this._getThById(this._tKey));
		},
		_removeEmptyHeader: function () {
			var fth = $("#" + this.grid.id() + "_moving_immediate_th");
			this._oTh.detach().insertBefore(fth).show();
			$("#" + this.grid.id() + "_moving_immediate_th").remove();
			this._oTh = null;
		},
		_showIndicators: function (left, top, dim) {
			this._cmib.css("left", left - 8).show();
			this._cmib.css("top", top - 16);
			this._cmit.css("top", top + dim.height);
			this._cmit.css("left", left - 8).show();
		},
		_hideIndicators: function () {
			this._cmib.hide();
			this._cmit.hide();
		},
		_markForMoving: function (col) {
			// check if another feature created a draggable
			// on the column prior to ColumnMoving
			if (col.data("draggable") || this._grpByEnabled === true) {
				col.live("draggabledrag", this._moveHandler);
				col.live("draggablestop", this._dropHandler);
				col.live("draggablestart", this._dragHandler);
				return;
			}
			// otherwise we'll create a new draggable on the column
			col.draggable({
				containment: this.grid.container(),
				appendTo: this.grid.container(),
				distance: 5,
				revert: "valid",
				//cancel: 'div.ui-iggrid-indicatorcontainer',
				helper: function (event) {
					var th, helperDOM;
					th = $(event.target).closest("th");
					helperDOM = th.clone()
						.css('overflow', 'hidden')
						.css('z-index', 10000)
						.width(th.width())
						.addClass("ui-widget ui-iggrid")
						.wrap($('<div class="ui-iggrid-dragMarkup"></div>').width(th.width()));
					helperDOM.height(th.height());
					return helperDOM;
				},
				scroll: true,
				drag: this._moveHandler,
				stop: this._dropHandler,
				start: this._dragHandler
			});
			/*col.draggable({
				containment: "parent",
				appendTo: $(document.body),//"parent",
				zIndex: 2,
				//axis: 'x',
				distance: 1,
				revert: "valid",
				helper: "clone",
				drag: this._moveHandler,
				stop: this._dropHandler,
				start: this._dragHandler
			});*/
			// finally add style 
			col.unbind("mouseover.moving").bind("mouseover.moving", this._headerMouseOverHandler);
			col.unbind("mouseout.moving").bind("mouseout.moving", this._headerMouseOutHandler);
		},
		_updateLayout: function () {
			var cols = this.grid._oldCols || this.grid._visibleColumns(), self = this;
			if (this.grid._loadingIndicator && this.grid._loadingIndicator._indicator.is(":visible")) {
				setTimeout(function () {
					self._updateLayout();
				}, 50);
				return;
			}
			this._cache.columns = {};
			this._cache.siblings = {};
			this._updateLayoutPerLevel(cols);
		},
		_updateLayoutPerLevel: function (cols) {
			var i, id, $th, os;
			for (i = 0; i < cols.length; i++) {
				id = cols[i].key || cols[i].identifier;
				$th = this._getThById(id);
				os = $th.offset();
				this._cache.columns[id] = {};
				this._cache.columns[id].offset = os;
				this._cache.columns[id].dimensions = { width: $th.outerWidth(), height: $th.outerHeight() };
				this._cache.siblings[id] = cols;
			}
			for (i = 0; i < cols.length; i++) {
				if (cols[i].group) {
					this._updateLayoutPerLevel(cols[i].group);
				}
			}
		},
		_openMovingDialog: function () {
			this._movingDialog.igGridModalDialog("openModalDialog");
		},
		_closeMovingDialog: function () {
			this._movingDialog.igGridModalDialog("closeModalDialog");
		},
		_treeDropValidation: function (col) {
			var context = $(this);
			if (context.is("li") && context.parent()[0] === $(col).parent()[0]) {
				return true;
			}
			return false;
		},
		_triggerColumnMovedAsync: function (args) {
			var self = this;
			if (this.grid._loadingIndicator && this.grid._loadingIndicator._indicator.is(":visible")) {
				setTimeout(function () {
					self._triggerColumnMovedAsync(args);
				}, 50);
				return;
			}
			this._trigger(this.events.columnMoved, null, args);
		},
		_cancelEvent: function (e) {
			e.stopPropagation();
			e.preventDefault();
		},
		_columnMap: function () {
			/* function used by the FeatureChooser */
			return $.map(this.grid.options.columns, function (col, index) {
				return { "columnKey": col.key, "enabled": true };
			});
		},
		// service
		_removeMoving: function () {
			var ths = this.grid.headersTable().find('>thead th'), i, th, mdl;
			// selects all moving elements and removes them
			$("[id~='" + this.grid.id() + "'][id~='moving']").remove();
			if (this.options.addMovingDropdown === true) {
				mdl = $("#" + this.grid.element[0].id + "_moving_movingDialog");
				mdl.igGridModalDialog("destroy");
				mdl.remove();
				$("div[data-moving-inddropdown='" + this.grid.id() + "']").remove();
			}
			for (i = 0; i < ths.length; ++i) {
				th = $(ths[i]);
				th.find('>div').find('span').unbind("mousedown", this._dropDownButtonHandler);
				th.find('>div').remove();
				th.unbind("mouseover.moving", this._headerMouseOverHandler);
				th.unbind("mouseout.moving", this._headerMouseOutHandler);

				if (!this._grpByEnabled) {
					if (th.data && th.data("draggable")) {
						th.draggable("destroy");
					}
				} else {
					th.unbind("draggabledrag", this._moveHandler);
					th.unbind("draggablestop", this._dropHandler);
					th.unbind("draggablestart", this._dragHandler);
				}
			}
		},
		_unregisterEvents: function () {
			this.grid.element.unbind('iggridheadercellrendered', this._headerCellRenderedHandler);
			this.grid.element.unbind('iggridheaderrendered', this._headerRenderedHandler);
			this.grid.element.unbind('iggridrendered', this._gridRenderedHandler);
			$("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + " th").unbind("moving");
			this.grid.element.unbind('iggridresizingcolumnresized', this._columnStateChanged);
			this.grid.element.unbind('iggridhidingcolumnhidden', this._columnStateChanged);
			this.grid.element.unbind('iggridpagingpagerrendered', this._columnStateChanged);
		},
		_registerEvents: function () {
			this.grid.element.bind('iggridheadercellrendered', this._headerCellRenderedHandler);
			this.grid.element.bind('iggridheaderrendered', this._headerRenderedHandler);
			this.grid.element.bind('iggridrendered', this._gridRenderedHandler);
			// column state change events
			this.grid.element.bind('iggridresizingcolumnresized', this._columnStateChanged);
			this.grid.element.bind('iggridhidingcolumnhidden', this._columnStateChanged);
			this.grid.element.bind('iggridpagingpagingdropdownrendered', this._columnStateChanged);
		},
		_createHandlers: function () {
			this._headerCellRenderedHandler = $.proxy(this._headerCellRendered, this);
			this._headerRenderedHandler = $.proxy(this._headerRendered, this);
			this._gridRenderedHandler = $.proxy(this._gridRendered, this);
			// draggable
			this._dragHandler = $.proxy(this._headerPicked, this);
			this._moveHandler = $.proxy(this._headerDragged, this);
			this._dropHandler = $.proxy(this._headerDropped, this);
			// header mouseover
			this._headerMouseOverHandler = $.proxy(this._headerMouseOver, this);
			this._headerMouseOutHandler = $.proxy(this._headerMouseOut, this);
			// dropdown
			this._dropDownButtonHandler = $.proxy(this._dropDownMouseDown, this);
			this._dropDownKeyHandler = $.proxy(this._dropDownKeyDown, this);
			this._openMovingDialogHandler = $.proxy(this._openMovingDialog, this);
			this._dropDownButtonMouseOverHandler = $.proxy(this._dropDownButtonMouseOver, this);
			this._dropDownButtonMouseOutHandler = $.proxy(this._dropDownButtonMouseOut, this);
			// dialog
			this._dialogOpeningHandler = $.proxy(this._dialogOpening, this);
			this._dialogDraggedHandler = $.proxy(this._dialogDragged, this);
			this._dialogClosingHandler = $.proxy(this._dialogClosing, this);
			this._dialogClosedHandler = $.proxy(this._dialogClosed, this);
			this._dialogCloseButtonHandler = $.proxy(this._closeMovingDialog, this);
			this._dialogUpHandler = $.proxy(this._dialogUpPressed, this);
			this._dialogDownHandler = $.proxy(this._dialogDownPressed, this);
			this._dialogRearrangingHandler = $.proxy(this._dialogRearranging, this);
			// cache rebuild
			this._columnStateChanged = $.proxy(this._updateLayout, this);
			// cancel events
			this._cancelEventHandler = $.proxy(this._cancelEvent, this);
		},
		// inject grid
		_injectGrid: function (gridInstance, isRebind) {
			var i;
			this.grid = gridInstance;
			if (isRebind === true) {
				return;
			}
			//init igGridFeatureChooser
			if (this.grid.element.igGridFeatureChooser !== undefined) {
				this.grid.element.igGridFeatureChooser();
			} else {
				throw new Error($.ig.ColumnMoving.locale.featureChooserNotReferenced);
			}
			for (i = 0; i < this.grid.options.features.length; i++) {
				if (this.grid.options.features[i].name === "GroupBy") {
					this._grpByEnabled = true;
					break;
				}
			}
			this._createHandlers();
			this._unregisterEvents();
			this._registerEvents();
		}
	});
	$.extend($.ui.igGridColumnMoving, {version: '12.2.20122.1021'});
}(jQuery));
