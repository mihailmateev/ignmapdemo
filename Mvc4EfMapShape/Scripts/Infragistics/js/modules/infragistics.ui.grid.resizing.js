/*!
 * Infragistics.Web.ClientUI Grid Column Resizing 12.2.20122.1021
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
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */

/*global jQuery, window, document */
if (typeof (jQuery) !== "function") {
	throw new Error("jQuery is undefined");
}
(function ($) {
	/*
		igGridResizing summary
	*/
    $.widget("ui.igGridResizing", {
		options: {
			/* type="bool" Resize the column to the size of the longest currently visible cell value. */
			allowDoubleClickToResize: true,
			/* type="bool" Specifies whether the resizing should be deferred until the user finishes resizing or applied immediately. */
			deferredResizing: false,
			/* type="array" A list of column settings that specifies resizing options on a per column basis. */
			columnSettings: [
				{
					/* type="string" Column key. this is a required property in every column setting if columnIndex is not set. */
					columnKey: null,
					/* type="number" Column index. Can be used in place of column key. the preferred way of populating a column setting is to always use the column keys as identifiers. */
					columnIndex: null,
					/* type="bool" Enables disables resizing for the column. */
					allowResizing: true,
					/* type="int" Minimum column width in pixels. */
					minimumWidth: 20,
					/* type="int" Maximum column width in pixels. */
					maximumWidth: null
				}
			],
			/* type="int" The width in pixels of the resizing handle which is position at the right side of each resizeable column header. */
			handleTreshold: 5
		},
		css: {
			/* Class applied to the resize line that is visible during resizing */
			"columnResizeLine": "ui-iggrid-resize-line",
			/* Class applied to the resizing handle and the body to change the cursor */
			"resizingHandleCursor": "ui-iggrid-resizing-handle-cursor",
			/* Class applied to the resizing handle */
			"resizingHandle": "ui-iggrid-resizing-handle"
		},
		events: {
			/* cancel="true" event fired before a resizing operation is executed.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridResizing widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.columnIndex to get the resized column index.
			Use ui.columnKey to get the resized column key.
			Use ui.desiredWidth to get the desired width(before min/max coercion) for the resized column.
			*/
			columnResizing: "columnResizing",
			/* event fired after the resizing has been executed and results are rendered 
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridResizing widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			Use ui.columnIndex to get the resized column index.
			Use ui.columnKey to get the resized column key.
			Use ui.originalWidth to get the original column width.
			Use ui.newWidth to get the final column width after resizing.
			*/
			columnResized: "columnResized"
		},
		_createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */

			this.options.columnSettings = [];
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
		_create: function () {
		},
		_setOption: function (key, value) {
			throw new Error($.ig.Grid.locale.optionChangeNotSupported + ' ' + key);

		    // handle new settings and update options hash
			// $.Widget.prototype._setOption.apply(this, arguments);
	    },
		destroy: function () {
			/* destroys the resizing widget */

			this._clearResizingHandles();

			//unbind element events
			this.grid.element.unbind('.resizing');

			$.Widget.prototype.destroy.call(this);
			return this;
		},
		resize: function (column, width) {
			/* resizes a column to a specified with in pixels or auto if no width is specified.
			paramType="number|string" An identifier for the column. If a number is provided it will be used as a columnIndex else if a strings is provided it will be used as a columnKey.
			paramType="number" optional="true" Width of the column in pixels. If no width is specified the column will be autofitted to the width of the data in it.
			*/
			var columnIndex;

			if (typeof column === 'number') {
				columnIndex = column;
			} else {
				$.each(this.grid._visibleColumns(), function (index, col) {
					if (col.key === column) {
						columnIndex = index;
					}
				});
			}

			if (width === undefined || width === null) {
				this._autoResize(columnIndex, false, null);
			} else {
				this._resizeColumn(columnIndex, width, false, null);
			}
		},
		_dataRendered: function () {

		},
		_headerCellRendered: function (event, ui) {
		},
		_headerRendered: function (event, ui) {
			this._renderResizingHandles();
		},
		_columnsCollectionModified: function () {
			this._renderResizingHandles();
		},
		_renderResizingHandles: function () {
			var self = this, ths, visibleColumns = this.grid._visibleColumns(), thsMultiHeader;

			this._clearResizingHandles();
			//A.Y. bug 91602. If all columns are hidden no resizing handles should be rendered.
			if (visibleColumns.length === 0) {
				return;
			}
			if (this.grid._isMultiColumnGrid) {
				thsMultiHeader = this.grid.headersTable().find("> thead > tr th").not("[data-skip=true]").not("[data-isheadercell=true]");
				this._populateMultiColumnHeadersLevel0();
				thsMultiHeader.each(function (index) {
					var a, th = $(this);

					a = self._renderResizingHandle(th);
					self._bindMultipleResizingHandle(th, a.find("span"));
				});
				ths = $(this.grid._headerCells);//this.grid.headersTable().find("> thead > tr th[data-isheadercell=true]").not("[data-skip=true]");
			} else {
				ths = this.grid.headersTable().find("> thead > tr").eq(0).children("th").not("[data-skip=true]");
			}

			ths.each(function (index) {
				var a, cs, th = $(this),
					col = visibleColumns[index];

				if (col === null || col === undefined) {
					return true;
				}
				cs = self._findColumnSettingsByKey(col.key);
				if (cs.allowResizing) {
					a = self._renderResizingHandle(th);
					self._bindResizingHandle(th, a.find("span"), col);
				}
			});
		},
		_renderResizingHandle: function (th) {
			var  div, a, span;

			if (!this._resizingHandles) {
				this._resizingHandles = [];
			}

			div = $("<div data-resizinghandle='true' />")
				.css("position", "relative")
				.css("width", "100%")
				.css("height", "0px")
				.css("top", "0px")
				.css("left", "0px")
				.prependTo(th);

			a = $("<a href='#' />")
				//A.Y. bug 82895. Required to prevent the sorting tooltip from appearing when resizing.
				.attr("title", '')
				.prependTo(div);

			if ($.browser.msie && $.browser.version.slice(0, 1) === '9') {
				//A.Y. required to fix bug 92472. 

				//since we have not called preventDefault on IE9(look at mouseWrapper in ig.ui.shared)
				//the browser will show the default cursor for a link when we mousedown on the <a/>
				//so we need to change it to our resizing cursor
				a.addClass(this.css.resizingHandleCursor);
			}

			span = $("<span data-nonpaddedindicator='right'></span>")
				//Adding title to the span as well otherwise it will not be visible in IE(look at bug 89113).
				.attr('title', '')
				.css('position', 'absolute')
				.css('margin-right', -parseInt(th.css('padding-right'), 10) + 'px')
				.css('right', '0px')
				.css('width', this.options.handleTreshold + 'px')
				.addClass(this.css.resizingHandleCursor)
				.addClass(this.css.resizingHandle)
				.appendTo(a);

			this._resizingHandles.push(div);

			return a;
		},

		_populateMultiColumnHeadersLevel0: function () {
			var i, j, self = this, cols = this.grid._oldCols, colsLength = cols.length, ths = $(this.grid._headerCells),
				level0 = [], level0Length, visibleColumns = this.grid._visibleColumns();

			for (i = 0; i < colsLength; i++) {
				if (cols[i].level === 0) {
					level0.push(cols[i]);
				} else {
					for (j = 0; j < cols[i].children.length; j++) {
						level0.push(cols[i].children[j]);
					}
				}
			}
			level0Length = level0.length;

			ths.each(function (index) {
				var th = $(this),
					col = visibleColumns[index],
					cs;

				if (col === null || col === undefined) {
					return true;
				}
				cs = self._findColumnSettingsByKey(col.key);

				if (cs.allowResizing) {
					for (i = 0; i < level0.length; i++) {
						if (level0[i].key === col.key) {
							break;
						}
					}
					if (i < level0Length) {
						level0[i].allowResizing = true;
						level0[i].visibleIndex = index;
						level0[i].settings = cs;
					}
					th.col = level0[i];
				}
			});
		},
		_bindMultipleResizingHandle: function ($th, button) {
			var self = this, id = $th.attr('data-mch-id'), column;
			// M.H. 4 July 2012 Fix for bug #116254
			column = this.grid._getMultiHeaderColumnById(id);
			button
				.mouseWrapper({
					distance: 5,
					start: function (event) {
						return self._startResizing($th);
					},
					drag: function (event) {
						return self._doResizingMultiColumnHeader(event.originalEvent, $th, column);
					},
					stop: function (event) {
						return self._stopResizingMiltiColumnHeader(event.originalEvent, $th, column);
					}
				})
				.bind("dblclick.resizing", function (event) {
					self._handleMouseMultiColumnHeaderDbClick(event, $th, column);
				})
				.bind("click.resizing", function (event) {
					event.preventDefault();
					event.stopPropagation();
				});
		},

		_bindResizingHandle: function (th, button, column) {
			var self = this;

			button
				.mouseWrapper({
					distance: 5,
					start: function (event) {
						return self._startResizing(th);
					},
					drag: function (event) {
						return self._doResizing(event.originalEvent, th, column);
					},
					stop: function (event) {
						return self._stopResizing(event.originalEvent, th, column);
					}
				})
				.bind("dblclick.resizing", function (event) {
					self._handleMouseDbClick(event, th, column);
				})
				.bind("click.resizing", function (event) {
					event.preventDefault();
					event.stopPropagation();
				});
		},
		_clearResizingHandles: function () {
			var i;

			if (this._resizingHandles) {
				for (i = 0; i < this._resizingHandles.length; i++) {
				    this._resizingHandles[i].remove();
				}
				this._resizingHandles = [];
			}
		},
		_handleMouseDbClick: function (event, th, column) {
			if (!this.options.allowDoubleClickToResize) {
				return;
			}

			this._autoResize($.inArray(column,  this.grid._visibleColumns()), true, event);
		},
		_handleMouseMultiColumnHeaderDbClick: function (event, $th, column) {
			var i, children = column.children,
				childrenLength = children.length;

			if (!this.options.allowDoubleClickToResize) {
				return;
			}

			for (i = 0; i < childrenLength; i++) {
				if (children[i].allowResizing === true) {
					this._autoResize(children[i].visibleIndex, true, event);
				}
			}
		},
		_autoResize: function (columnIndex, fireEvents, event) {
			var rows,
				cells = [],
				maxWidth = 0,
				measureDiv,
				i;

			rows = this.grid.element.find("> tbody > tr")
				//A.Y. bug 90819. Skip the expanded rows of the hierarchical grid.
				.not("[data-container=true]")
				//A.Y. bug 93141. Skip groupby rows.
				.not("[data-grouprow=true]");

			for (i = 0; i < rows.length; i++) {
				cells.push(rows.eq(i).children("td")
					.not("[data-skip=true]")
					.not(".ui-iggrid-rowselector-class")
					.not(".ui-iggrid-expandcolumn")
					.eq(columnIndex));
			}

			if (cells.length > 0) {
				//create a hidden div with the font styles of the cell
				measureDiv = $("<div></div>").css({
					"position": "absolute",
					"visibility": "hidden",
					"height": "auto",
					"width": "auto",
					"left": -1000,
					"top": -1000,
					"font-family": cells[0].css("fontFamily"),
					"font-size": cells[0].css("fontSize"),
					"font-size-adjust": cells[0].css("fontSizeAdjust"),
					"font-stretch": cells[0].css("fontStretch"),
					"font-style": cells[0].css("fontStyle"),
					"font-variant": cells[0].css("fontVariant"),
					"font-weight": cells[0].css("fontWeight")
				}).appendTo($(document.body));

				//put every cell's content inside the div and measure its width
				for (i = 0; i < cells.length; i++) {
					measureDiv.html(cells[i][0].innerHTML);
					maxWidth = Math.max(maxWidth, measureDiv[0].offsetWidth);
				}

				//take cell padding and borders into account as the column size includes these
				maxWidth = maxWidth + cells[0].outerWidth() - cells[0].width();

				//A.Y. bug 85248. IE seems to apply ellipsis even though the text width is exactly
				//the same as the width of the content area
				if ($.browser.msie) {
					maxWidth += 1;
				}

				measureDiv.remove();

				return this._resizeColumn(columnIndex, maxWidth, fireEvents, event);
			}
		},
		_cancelHoveringEffects: function (cancel) {
			var topmostGrid = this.grid.element.closest(".ui-iggrid-root").data('igGrid');

			if (topmostGrid === undefined) {
				topmostGrid = this.grid;
			}

			topmostGrid._cancelHoveringEffects = cancel;
		},
		_startResizing: function (th) {
			var body = $(document.body), resizeLineTop, heightOffset;

			this._resizing = true;
			this._cancelHoveringEffects(true);

			//A.Y. bug 81452. remove focus from the activeElement to trigger dropdowns to close
			$(document.activeElement).blur();

			//change the cursor while resizing
			body.addClass(this.css.resizingHandleCursor);


			if (this.grid._isMultiColumnGrid) {
				heightOffset = th.offset().top - this._gridContainerPositioningOffset().top;
			}

			resizeLineTop = th.offset().top + this._gridContainerPositioningOffset().top;
			//A.Y. bug 84856.
			//if we don't have fixed headers it is posible for the grid
			//to be scrolled vertically so that part of the header is hidden
			if (this.grid.options.height !== null &&
					this.grid.options.showHeader === true &&
					this.grid.options.fixedHeaders === false) {
				resizeLineTop += this.grid.scrollContainer().scrollTop();
			}

			//create the resizeLine
			this._resizeLine = $("<div></div>")
				.addClass(this.css.columnResizeLine)
				//the resize line's height should not be taken into account when
				//autoadjusting height as it is now in the grid container
				.data('efh', '1')
				.css({
					"height": this._calculateGridResizableHeight(heightOffset),
					"top": resizeLineTop,
					"visibility": "hidden"
				})
				.appendTo(this.grid.container());

			return true;
		},

		_doResizingMultiColumnHeader: function (event, $th, column) {
			var i, width, resizeCellRange,
				min, max, resizeResult,
				//columnIndex = $.inArray(column, this.grid._visibleColumns()),
				range,
				offsetLeft,
				offsetHeight,
				children = column.children,
				childrenLength = children.length,
				child = null,
				cellToResize;

			width = event.pageX - $th.offset().left;
			if (width < 0) {
				width = 0;
			}
			offsetHeight = $th.offset().top - this.grid.headersTable().offset().top;
			if (!this.options.deferredResizing) {
				for (i = childrenLength - 1; i >= 0; i--) {
					if (children[i].allowResizing && !children[i].hidden) {
						child = children[i];
						child.resized = !child.resized;
						if (child.resized) {
							break;
						}
						//if (child.isResized = )
					}
				}
				if (child !== null && !child.hidden) {
					cellToResize = $('#' + this.grid.element[0].id + '_' + child.key);
					//width = event.pageX - cellToResize.offset().left;
					width = cellToResize[0].offsetWidth - $th[0].offsetWidth + width;
					resizeResult = this._resizeColumn(child.visibleIndex, width, true, event, child.visibleIndex);
				}
				if (!resizeResult) {
					return true;
				}
				if (!resizeResult.canceled) {
					//update the line height as it may have changed due to the resizing
					this._resizeLine.css("height", this._calculateGridResizableHeight(offsetHeight));

					//update resizeLine position to match header right
					this._resizeLine.css({
						"left":
							$th.offset().left
							+ $th.outerWidth()
							+ this._gridContainerPositioningOffset().left,
						"visibility": "visible"
					});
				}
			} else {
				max = Infinity;
				min = 0;
				offsetLeft = $th.offset().left;
				range = {min: offsetLeft, max: offsetLeft};
				for (i = 0; i < childrenLength; i++) {
					child = children[i];
					if (child.hidden) {
						continue;
					}

					if (child.allowResizing) {
						resizeCellRange = this._getRange(this.options.columnSettings[child.visibleIndex]);
						range.min += resizeCellRange.min;
						if (resizeCellRange.max === Infinity) {
							range.max = Infinity;
						} else if (range.max !== Infinity) {
							range.max += resizeCellRange.max;
						}
					} else {
						range.min += $('#' + this.grid.element[0].id + '_' + child.key)[0].offsetWidth;
					}
				}

				this._resizeLine.css("height", this._calculateGridResizableHeight(offsetHeight));
				this._resizeLine.css({
					"left":
						this._coerceRange(range, event.pageX)
						+ this._gridContainerPositioningOffset().left,
					"visibility": "visible"
				});
			}

			return true;
		},

		_doResizing: function (event, th, column) {
			var width,
				resizeResult,
				columnIndex = $.inArray(column, this.grid._visibleColumns()),
				range,
				offsetLeft,
				offsetHeight;

			if (!this.options.deferredResizing) {
				width = event.pageX - th.offset().left;

				if (width < 0) {
					width = 0;
				}

				if (this.grid._isMultiColumnGrid) {
					offsetHeight = th.offset().top - this.grid.headersTable().offset().top;
				}

				resizeResult = this._resizeColumn(columnIndex, width, true, event);
				if (!resizeResult.canceled) {
					//update the line height as it may have changed due to the resizing
					this._resizeLine.css("height", this._calculateGridResizableHeight(offsetHeight));

					//update resizeLine position to match header right
					this._resizeLine.css({
						"left":
							th.offset().left
							+ th.outerWidth()
							+ this._gridContainerPositioningOffset().left,
						"visibility": "visible"
					});
				}
			} else {
				//update resizeLine position to the postion of the mouse after range coercion
				range = this._getRange(this.options.columnSettings[columnIndex]);
				offsetLeft = th.offset().left;
				range.min += offsetLeft;
				range.max += offsetLeft;

				this._resizeLine.css({
					"left":
						this._coerceRange(range, event.pageX)
						+ this._gridContainerPositioningOffset().left,
					"visibility": "visible"
				});
			}

			return true;
		},
		_stopResizingMiltiColumnHeader: function (event, th, column) {
			var i, child, cellToResize, w = 0, width,
				avgWidth,
				children,
				childrenLength,
				childrenLengthAllowResizing = 0;

			if (this.options.deferredResizing) {
				width = event.pageX - th.offset().left;

				children = column.children;
				childrenLength = children.length;
				for (i = 0; i < childrenLength; i++) {
					if (children[i].allowResizing === false) {
						continue;
					}
					childrenLengthAllowResizing++;
				}

				if (childrenLengthAllowResizing > 0) {
					avgWidth = parseInt((width / childrenLengthAllowResizing), 10);
					for (i = 0; i < childrenLength; i++) {
						child = children[i];
						if (child.allowResizing === false) {
							w += $('#' + this.grid.element[0].id + '_' + child.key)[0].offsetWidth;
							continue;
						}
						if (i === childrenLength - 1) {
							avgWidth = width - w;
						}
						w += avgWidth;
						if (child !== null) {
							cellToResize = $('#' + this.grid.element[0].id + '_' + child.key);
							this._resizeColumn(child.visibleIndex, avgWidth, true);
						}
					}
				}
			}

			//remove the resizing cursor
			$('body').removeClass(this.css.resizingHandleCursor);

			this._resizing = false;
			this._cancelHoveringEffects(false);
			this._resizeLine.remove();
			this._resizeLine = undefined;

			return true;
		},
		_stopResizing: function (event, th, column) {
			var width,
				columnIndex = $.inArray(column, this.grid._visibleColumns());

			if (this.options.deferredResizing) {
				width = event.pageX - th.offset().left;
				width = this._coerceRange(this._getRange(this.options.columnSettings[columnIndex]), width);

				this._resizeColumn(columnIndex, width, true, event);
			}

			//remove the resizing cursor
			$('body').removeClass(this.css.resizingHandleCursor);

			this._resizing = false;
			this._cancelHoveringEffects(false);
			this._resizeLine.remove();
			this._resizeLine = undefined;

			return true;
		},
		_resizeColumn: function (columnIndex, width, fireEvents, originalEvent, startIndex) {
			var columnKey = this.grid._visibleColumns()[columnIndex].key,
				headersTable = this.grid.headersTable(),
				headers,
				headerWidth,
				headerColumns,
				columnSettings = this.options.columnSettings,
				columnsLength,
				headerColStyleWidth,
				hasPercentageWidth,
				actualColumnStyleWidths = [],
				actualColumnWidths = [],
				requiredColumnPercentageWidths = [],
				newColumnStyleWidths = [],
				i,
				widthToDistribute,
				shrinkColumns,
				widthDistributed,
				widthUsed,
				coercedWidth,
				widthPerColumn,
				range,
				totalWidth,
				readyColumns,
				readyColumnsCount,
				finalPixelWidth,
				allColumnsHaveWidth,
				noCancel,
				containerWidth,
				isResized = true;

			if (this.grid._isMultiColumnGrid) {
				headers = $(this.grid._headerCells);//headersTable.find("> thead > tr th[data-isheadercell=true]").not("[data-skip=true]");
				headerWidth = $(headers[columnIndex])[0].offsetWidth;//$(headers[columnIndex]).offsetWidth;
			} else {
				headers = headersTable.find("> thead > tr").first().children("th").not("[data-skip=true]");
				headerWidth = headers.get(columnIndex).offsetWidth;
			}

			headerColumns = headersTable.find("> colgroup > col").not("[data-skip=true]");
			columnSettings = this.options.columnSettings;
			columnsLength = headerColumns.length;
			headerColStyleWidth = headerColumns[columnIndex].style.width;
			hasPercentageWidth = /%$/.test(headerColStyleWidth);
			if (fireEvents) {
				noCancel = this._trigger(this.events.columnResizing, originalEvent,
					{
						owner: this,
						columnIndex: columnIndex,
						columnKey: columnKey,
						desiredWidth: width
					});

				if (!noCancel) {
					return {
						canceled: true,
						originalWidth: width,
						newWidth: width
					};
				}
			}

			range = this._getRange(columnSettings[columnIndex]);

			//coerce width within min/max
			width = this._coerceRange(range, width);

			//make sure width is an integer
			width = Math.floor(width);

			if (width === range.min || width === range.max) {
				isResized = false;
			}


			if (this.grid._isMultiColumnGrid) {
				for (i = 0; i < columnsLength; i++) {
					actualColumnStyleWidths[i] = headerColumns[i].style.width;
					actualColumnWidths[i] = headers[i][0].offsetWidth;
				}
			} else {
				for (i = 0; i < columnsLength; i++) {
					actualColumnStyleWidths[i] = headerColumns[i].style.width;
					actualColumnWidths[i] = headers[i].offsetWidth;
				}
			}

			if (hasPercentageWidth) {
				//negative if the resized column grows, positive if it shrinks
				widthToDistribute = headerWidth - width;
				shrinkColumns = widthToDistribute < 0;

				readyColumns = [];
				readyColumnsCount = 0;
				widthDistributed = 0;
				if (startIndex === undefined || startIndex === null) {
					startIndex = 0;
				}

				//distrubiting the width until it reaches close to 0 or all columns reach their min/max
				while (readyColumnsCount < columnsLength - 1 - startIndex &&
						((shrinkColumns && widthToDistribute < -0.05) ||
						(!shrinkColumns && widthToDistribute > 0.05))) {
					//calculate how much each column should receive
					widthPerColumn = widthToDistribute / (columnsLength - 1);

					for (i = startIndex; i < columnsLength; i++) {
						//ignore the resizedColumn and ready columns
						if (i !== columnIndex && !readyColumns[i]) {

							//taking into account the fact that due to rounding we may have less to distribute then the average per column
							if (shrinkColumns) {
								widthUsed = Math.max(widthPerColumn, widthToDistribute);
							} else {
								widthUsed = Math.min(widthPerColumn, widthToDistribute);
							}

							actualColumnWidths[i] += widthUsed;

							range = this._getRange(columnSettings[i]);
							coercedWidth = this._coerceRange(range, actualColumnWidths[i]);

							//as we are dealing with floating point values we should chech for equility within an Epsilon region
							if (Math.abs(actualColumnWidths[i] - coercedWidth) > 0.000005) {
								//update the widthUsed as we didn't take as much as we wanted
								widthUsed -= actualColumnWidths[i] - coercedWidth;

								actualColumnWidths[i] = coercedWidth;

								readyColumns[i] = true;
								readyColumnsCount++;
							}

							widthDistributed += widthUsed;
							widthToDistribute -= widthUsed;
						}
					}
				}

				//remove the distributed width from the size of the resized column
				//this will be its final width
				actualColumnWidths[columnIndex] -= widthDistributed;

				totalWidth = 0;
				for (i = 0; i < columnsLength; i++) {
					totalWidth += actualColumnWidths[i];
				}

				for (i = 0; i < columnsLength; i++) {
					requiredColumnPercentageWidths[i] = 100 * actualColumnWidths[i] / totalWidth;
				}

				//save the desired widths for each column
				for (i = 0; i < columnsLength; i++) {
					newColumnStyleWidths[i] = requiredColumnPercentageWidths[i] + "%";
					this.grid._visibleColumns()[i].width = newColumnStyleWidths[i];
				}

				finalPixelWidth = actualColumnWidths[columnIndex];

				this._applyToEachGridCOL(function (index, col) {
					col.css("width", newColumnStyleWidths[index]);
				});
			} else {
				allColumnsHaveWidth = true;
				for (i = 0; i < columnsLength; i++) {
					if (i === columnIndex) {
						//set the width of the resized column
						newColumnStyleWidths[i] = width + "px";
						finalPixelWidth = width;
						this.grid._visibleColumns()[i].width = newColumnStyleWidths[i];
					} else {
						newColumnStyleWidths[i] = actualColumnStyleWidths[i];
						allColumnsHaveWidth =
							allColumnsHaveWidth && parseInt(actualColumnStyleWidths[i], 10) > 0;
					}
				}

				this._applyToEachGridCOL(function (index, col) {
					col.css("width", newColumnStyleWidths[index]);
				});

                containerWidth = this.grid._calculateContainerWidth(false);
				if (allColumnsHaveWidth) {
					if (this.grid.options.width && parseInt(this.grid.options.width, 10) > 0) {
						this.grid._updateGridContentWidth();

                        $("#" + this.grid.element[0].id + '_horizontalScrollContainer')
                            .children('div')
                            .css('width', containerWidth);
					} else {
						this.grid._setContainerWidth(this.grid.element[0].id + '_container');

						if (this.grid.options.rowVirtualization || this.grid.options.virtualization === true) {
							//A.Y. bug 91641. When we have rowVirtualization we need to adjust
							//the displayContainer and the virtualContainer first columns as well.

                            //I.I. bug fix for 106920
                            $("#" + this.grid.element[0].id + '_headers_v')
								.css('width', containerWidth + this.grid._scrollbarWidth())
								.css('max-width', containerWidth + this.grid._scrollbarWidth());

							$("#" + this.grid.element[0].id + '_displayContainer')
								.css('width', containerWidth)
								.css('max-width', containerWidth);
							$("#" + this.grid.element[0].id + '_virtualContainer > colgroup > col')
								.first()
								.attr('width', containerWidth);
						}
					}
				}
			}

			if (fireEvents) {
				this._trigger(this.events.columnResized, originalEvent,
					{
						owner: this,
						columnIndex: columnIndex,
						columnKey: columnKey,
						originalWidth: headerWidth,
						newWidth: finalPixelWidth
					});
			}

			return { canceled: false, originalWidth: headerWidth, newWidth: finalPixelWidth, isResized: isResized };
		},
		_applyToEachGridCOL: function (appliedFunction) {
			if (this.grid.options.showHeader) {
				this.grid.headersTable().find("> colgroup > col").not("[data-skip=true]").each(function (i) {
					appliedFunction(i, $(this));
				});
			}

			//update the data table if it is different from the headers table or we are not showing headers
			if ((this.grid.options.fixedHeaders === true && this.grid.options.height !== null) ||
					this.grid.options.showHeader === false) {
				this.grid.element.find("> colgroup > col").not("[data-skip=true]").each(function (i) {
					appliedFunction(i, $(this));
				});
			}

			//update the footers table if we have one
			if (this.grid.options.fixedFooters === true && this.grid.options.height !== null) {
				this.grid.footersTable().find("> colgroup > col").not("[data-skip=true]").each(function (i) {
					appliedFunction(i, $(this));
				});
			}
		},
		_getRange: function (column) {
			var min = column.minimumWidth,
				max = column.maximumWidth;

			min = isNaN(min) ? 0 : min;
			min = Math.max(0, min);
			max = isNaN(max) ? Infinity : max;

			return { "min": min, "max": max };
		},
		_coerceRange: function (range, value) {
			value = Math.max(range.min, value);
			value = Math.min(range.max, value);
			return value;
		},
		_gridContainerPositioningOffset: function () {
			//This method calculates how much we should add to a position
			//relative to the document(jQuery.offset()) to express it as top/left values for an
			//absolutely positioned element within the grid container(this.grid.container()).
			//We need this to fix bug #94177 which requires the resizeLine to be absolutely
			//positioned within the grid container instead of the document body.
			var gridContainer = this.grid.container(),
				gridContainerOffsetParent = gridContainer.offsetParent(),
				gridContainerPosition = gridContainer.position(),
				gridContainerOffset = gridContainer.offset(),
				offsetParentScrollTop,
				offsetParentScrollLeft;

			//A.Y. bug #99092. Since we are positioning the resize line relatively if the offset parent 
			//is the 'body' the scrollTop/Left should be ignored and indeed in IE/FF/Opera the 
			//scrollTop/Left is always 0 but in WebKit browsers the body is the scrollable element.
			if (gridContainerOffsetParent.is('body')) {
				offsetParentScrollTop = 0;
				offsetParentScrollLeft = 0;
			} else {
				offsetParentScrollTop = gridContainerOffsetParent.scrollTop();
				offsetParentScrollLeft = gridContainerOffsetParent.scrollLeft();
			}

			return {
				top:
					offsetParentScrollTop
					+ gridContainerPosition.top
					- gridContainerOffset.top,
				left:
					offsetParentScrollLeft
					+ gridContainerPosition.left
					- gridContainerOffset.left
			};
		},
        _calculateGridResizableHeight: function (heightOffset) {
            // L.A. 23 April 2012 Fixing bug #99471 When grid has row virtualization resize line height is not correct
            var height, caption, headersTable, footersTable, scrollerContainer,
                hasVirtualization = this.grid.options.virtualization === true ||
                this.grid.options.rowVirtualization === true ||
                this.grid.options.columnVirtualization === true,
                hasWidthOrHeight = this.grid.options.height !== null ||
                this.grid.options.width !== null;
            if (hasVirtualization) {
                height = $("#" + this.grid.element[0].id + "_displayContainer").height();
            } else if (hasWidthOrHeight) {
                height = this.grid.scrollContainer().height();
            } else {
                height = this.grid.element.height();
            }
            if (hasVirtualization || hasWidthOrHeight) {
                headersTable = this.grid.headersTable();
                footersTable = this.grid.footersTable();
                if (this.grid.options.fixedHeaders === true && this.grid.options.showHeader === true) {
                    if (headersTable.length !== 0 && this.grid.element[0].id !== headersTable[0].id) {
                        height += headersTable.height();
                    }
                    //in this case the caption is in the headersTable
                    caption = headersTable.children("#" + this.grid.element[0].id + '_caption');
                    if (caption.length !== 0) {
                        //A.Y. bug 98449. FF has a bug and does not include the height of the caption when it calculates the table height.
                        if (!$.browser.mozilla) {
                            height -= caption.outerHeight(true);
                        }
                    }
                }
                // L.A. 08 May 2012 Fixing bug #111034 When in grid fixedHeaders is false and column resizing and summaries are enabled, the resize line does not appear correctly
                scrollerContainer = $("#" + this.element[0].id + "_hscroller_container");
                if (scrollerContainer.is(":visible")) {
                    height += scrollerContainer.height();
                }
                if (this.grid.options.fixedFooters === true
                        && this.grid.options.showFooter === true && footersTable.length !== 0 && this.grid.element[0].id !== footersTable[0].id) {
                    height += footersTable.height();
                }
            }
			if (heightOffset) {
				height -= heightOffset;
			}
            return height;
        },
		_findColumnSettingsByKey: function (key) {
			var i;
			for (i = 0; i < this.options.columnSettings.length; i++) {
				if (this.options.columnSettings[i].columnKey === key) {
					return this.options.columnSettings[i];
				}
			}
		},
		_initDefaultSettings: function () {
			var settings = [], key, cs = this.options.columnSettings, i, j, foundByKey;

			//create default setting for each grid column
			if (this.grid.options.columns && this.grid.options.columns.length > 0) {
				for (i = 0; i < this.grid.options.columns.length; i++) {
					settings[i] =
						{
							'columnIndex': i,
							'columnKey': this.grid.options.columns[i].key,
							'allowResizing': true,
							'minimumWidth': 20
						};
				}
			}

			for (i = 0; i < cs.length; i++) {
				foundByKey = false;
				//find the corresponding column settings
				for (j = 0; j < settings.length; j++) {
					if (settings[j].columnKey === cs[i].columnKey || settings[j].columnIndex === cs[i].columnIndex) {
						foundByKey = settings[j].columnKey === cs[i].columnKey;
						break;
					}
				}

				//not found, continue
				if (j === settings.length) {
					continue;
				}

				//copy properties
				for (key in cs[i]) {
					if (cs[i].hasOwnProperty(key) && key !== 'columnIndex' && key !== 'columnKey') {
						settings[j][key] = cs[i][key];
					}
				}
			}

			this.options.columnSettings = settings;
		},
		_injectGrid: function (gridInstance, isRebind) {
			this.grid = gridInstance;

			this._initDefaultSettings();

			// register for headerCellRendered	
			this.grid.element.bind('iggridheadercellrendered.resizing', $.proxy(this._headerCellRendered, this));

			// register for headerRendered	
			this.grid.element.bind('iggridheaderrendered.resizing', $.proxy(this._headerRendered, this));

			// register for columnsCollectionModified
			this.grid.element.bind('iggridcolumnscollectionmodified.resizing', $.proxy(this._columnsCollectionModified, this));
		}
	});
    $.extend($.ui.igGridResizing, {version: '12.2.20122.1021'});
}(jQuery));
