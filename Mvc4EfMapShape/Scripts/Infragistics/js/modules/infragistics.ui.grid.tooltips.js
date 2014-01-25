/*!
 * Infragistics.Web.ClientUI Grid Tooltips 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.3.js
 *	modernizr.js
 *	ig.ui.shared.js
 *	ig.ui.grid.framework.js
 */

/*global jQuery, Modernizr */
if (typeof (jQuery) !== "function") {
	throw new Error("jQuery is undefined");
}
(function ($) {
	/*
		igGridTooltips widget.
		The widget is pluggable to the element where the grid is instantiated and the actual igGrid object doesn't know about this.
		The tooltips widget just attaches its functionality to the grid.
	*/
	"use strict";
	$.widget("ui.igGridTooltips", {
		options: {
			/* type="always|never|overflow" determines the tooltip visibility option 
			always type="string" tooltips always show for hovered elements
			never type="string" tooltips do not show automatically
			overflow type="string" tooltips show only when the underlying data overflows its container 
			*/
			visibility: "overflow",
			/* type="tooltip|popover" controls the tooltip's style 
			tooltip type="string" the tooltip will be positioned according to the mouse cursor
			popover type="string" the tooltip will be positioned according to the target element
			with an arrow pointing the element. this style is more suitable for touch-supported environments.
			*/
			style: "tooltip",
			/* type="integer" The time in milliseconds after which tooltip will show when 
			mouse cursor is hovered over a cell. */
			showDelay: 500,
			/* Type="integer" The time in milliseconds after which tooltip hides when mouse 
			cursor gets outside of the cell. 
			*/
			hideDelay: 300,
			/* a list of custom column settings that specify custom tooltip settings for a specific column (whether tooltips are enabled / disabled) */
			columnSettings: [
				{
					/* type="string" Either key or index must be set in every column setting.*/
					columnKey: null,
					/* type="number" Either key or index must be set in every column setting. */
					columnIndex: -1,
					/* type="bool" Enables / disables tooltips on the specified column. By default tooltips are displayed for each column. Note: This option is mandatory. */
					allowTooltips: true
				}
			],
			/* sets the time tooltip fades in and out when showing/hiding */
			fadeTimespan: 150,
			/* sets the left position of the tooltip relative to the mouse cursor */
			cursorLeftOffset: 10,
			/* sets the top position of the tooltip relative to the mouse cursor */
			cursorTopOffset: 15
		},
		css: {
			/* Classes applied to the tooltip widget */
			"tooltip": "ui-iggrid-tooltip",
			/* Classes applied to the tooltip container */
			"tooltipContent": "ui-iggrid-tooltip-content"
		},
		events: {
			/* cancel="true" event fired when the mouse has hovered on an element long enough to display a tooltip */
			tooltipShowing: "tooltipShowing",
			/* event fired after a tooltip is shown */
			tooltipShown: "tooltipShown",
			/* cancel="true" event fired when the mouse has left an element and the tooltip is about to hide */
			tooltipHiding: "tooltipHiding",
			/* event fired after a tooltip is hidden */
			tooltipHidden: "tooltipHidden"
		},
		_createWidget: function (options, element) {
			this.visible = false;
			this._canFadeIn = true;
			this._canFadeOut = true;
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
		destroy: function () {
        /*
        Destroys the tooltip widget.
        */
			this.grid.element.unbind(".tooltip");
			$('#' + this.id() + "_ruler").remove();
			this.tooltip.remove();
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		id: function () {
			/*  returns the ID of the parent div element bounding the ruler and the tooltip container 
				returnType="string" 
			*/
			return this.tooltip[0].id;
		},
		_injectGrid: function (gridInstance, isRebind) {
			if (isRebind === true) {
				return;
			}
			this.grid = gridInstance;
			this._createTooltip();
			// S.S. August 9, 2011, Bug #83695, #83697, Binding is done on tbody instead of the whole table.
			// This prevents tooltips to be displayed for filter rows and fixes some issues with column headers.
			this.grid.element.bind('iggridrendered', $.proxy(this._dataRendered, this));
			// Updating rerenders only the rows but dom is changed regardless and dom events need to be rebound.
			this.grid.element.bind('iggridrowsrendered', $.proxy(this._rowsRendered, this));
		},
		_createTooltip: function () {
			if (this.options.style === "tooltip") {
				this.tooltip = $('<div></div>')
					.attr('id', this.grid.id() + "_tooltips")
					.attr('role', 'tooltip')
					.addClass("ui-tooltip")
					.addClass("ui-widget")
					.addClass("ui-corner-all")
					.addClass("ui-widget-content")
					.addClass(this.css.tooltip)
					.css({
						'position': 'absolute',
						'display': 'none',
						'white-space': 'normal',
						// S.S. September 28, 2011 Bug #86596 Long words need to be broken 
						// down so they don't overlap the container.
						'word-wrap': 'break-word'
					});
				this._createContainer();
			} else if (this.options.style === "popover") {
				this.tooltip = $('<div><div>')
					.attr('id', this.grid.id() + "_tooltips")
					.igPopover({
						fadeTimespan: this.options.fadeTimespan
					});
			}
			this._createRuler();
			this.tooltip.appendTo(document.body);
		},
		_createRuler: function () {
			$('<span></span>')
				.attr('id', this.id() + '_ruler')
				.css('display', 'none')
				.css('white-space', 'normal')
				.css('word-wrap', 'break-word')
				.appendTo(document.body);
		},
		_createContainer: function () {
			$('<div></div>')
				.attr('id', this.id() + '_container')
				.addClass("ui-tooltip-content")
				.addClass(this.css.tooltipContent)
				.appendTo(this.tooltip)
				.bind('mouseenter.tooltip', $.proxy(this._tooltipMouseEnter, this))
				.bind('mouseleave.tooltip', $.proxy(this._tooltipMouseLeave, this));
		},
		_displayOverflow: function (element) {
			var ruler = $('#' + this.id() + "_ruler"), textHeightInPixels;
			ruler.text(element.text());
			ruler.css({
				"font-family": element.css("font-family"),
				"font-size": element.css("font-size"),
				"font-size-adjust": element.css("font-size-adjust"),
				"font-stretch": element.css("font-stretch"),
				"font-style": element.css("font-style"),
				"font-variant": element.css("font-variant"),
				"font-weight": element.css("font-weight"),
				"padding-left": element.css("padding-left"),
				"padding-top": element.css("padding-top"),
				"padding-right": element.css("padding-right"),
				"padding-bottom": element.css("padding-bottom")
			});
			ruler.width(element.width());
			textHeightInPixels = ruler.height();
			// if the ruler's height is larger the cell cannot fit it's contents
			if (textHeightInPixels <= element.height()) {
				return false;
			}
			return true;
		},
		_dataRendered: function (event, ui) {
			var $tbody;
			if (ui !== undefined) {
				if ($(ui.owner.element).attr("id") !== this.grid.id()) {
					return;
				}
			}
			$tbody = this.grid.element.children("tbody");
			this._registerMouseEvents($tbody);
			// S.S. September 16, 2011, We should save our thead so we can use it to get column indexes.
			if (this.grid.options.fixedHeaders === true) {
				this._$thead = $("#" + this.grid.id() + "_headers thead");
			} else {
				this._$thead = $("#" + this.grid.id() + " thead");
			}
		},
		_rowsRendered: function (event, ui) {
			var $tbody;
			if (ui !== undefined) {
				if ($(ui.owner.element).attr("id") !== this.grid.id()) {
					return;
				}
			}
			$tbody = this.grid.element.children("tbody");
			this._registerMouseEvents($tbody);
		},
		_registerMouseEvents: function (tbody) {
			// S.S. August 9, 2011, Bug #83695, #83697, Binding is done on tbody instead of the whole table.
			// This prevents tooltips to be displayed for filter rows and fixes some issues with column headers.
			tbody.unbind('mouseleave.tooltip').bind('mouseleave.tooltip', $.proxy(this._gridMouseLeave, this));
			tbody.unbind('mousemove.tooltip').bind('mousemove.tooltip', $.proxy(this._gridMouseMove, this));
		},
		_gridMouseLeave: function (event, ui) {
			clearTimeout(this.timeoutShowing);
			clearTimeout(this.timeoutHiding);
			// S.S. August 9, 2011 Bug #83691 Hiding should not be called if the tooltip is not visible because
			// it throws an unnecessary tooltipHiding event.
			if ($('#' + this.id()).css('display') !== "none") {
				this._hideTooltip(true);
			}
			this._currentlyHovered = null;
		},
		_gridMouseMove: function (event, ui) {
			var element = $(event.target).closest("td,th"), elementData, hidePrevious = true, shouldShow;
			// if the parent table isn't the one the widget is initialized for we should return
			if (element.closest("table").attr("id") !== this.grid.id()) {
				return;
			}
			this.mouseX = event.pageX;
			this.mouseY = event.pageY;
			// if we hover on the same element or the element is unknown we should return
			if (element[0] === this._currentlyHovered || element.length === 0) {
				return;
			}
			elementData = this._getElementValue(element);
			if (elementData === undefined) {
				hidePrevious = true;
			}
			// if we return on an element a tooltip is currently displayed for we should keep this tooltip
			if (element[0] === this._currentlyDisplayed && this.visible === true) {
				hidePrevious = false;
				clearTimeout(this.timeoutHiding);
				return;
			}
			this._currentlyHovered = element[0];
			this._previouslyHoveredData = this._currentlyHoveredData;
			this._currentlyHoveredData = elementData;
			// At this point the widget should clear a previously executed tooltip show timeout.
			clearTimeout(this.timeoutShowing);
			// S.S. September 28, 2011 Bug #88214 If the mouse hovers the delete button (Updating widget)
			// the old tooltip should hide and no new tooltip should be shown.
			shouldShow = this._shouldShowForTarget(element) && elementData !== undefined &&
				elementData !== "" && $(event.target).attr("unselectable") === undefined;
			// Hides the tooltip displayed for the previously hovered item.
			if (this.visible === true && hidePrevious === true) {
				this._hideTooltip(!shouldShow);
			}
			// Checks if a tooltip should be displayed for the currently hovered element based on widget options.
			if (shouldShow === true) {
				this._currentlyDisplayed = this._currentlyHovered;
				this._showTooltip();
			}
		},
		_tooltipMouseEnter: function () {
			clearTimeout(this.timeoutHiding);
		},
		_tooltipMouseLeave: function () {
			this._hideTooltip();
		},
		_getElementValue: function (element) {
			var col, val, tlog, i, tid, row = element.closest("tr"), vrowidx = -1;
			if (this._$thead.length > 0) {
				col = element.index() - this._$thead.children(":first").children("th[data-skip='true']").length;
			} else {
				col = element.index() - element.parent().find("td[data-parent='true'],td[data-skip='true'],th").length;
			}
			if (col < 0) {
				return val;
			}
			this._pRowIdx = this._rowIdx;
			this._rowIdx = element.closest("tbody")
				.children("tr:not([data-container='true'],[data-grouprow='true'])")
				.index(row);
			// if there is row virtualization we need to take care about the starting index
			if (this.grid.options.virtualization || this.grid.options.rowVirtualization) {
				if (this.grid.options.virtualizationMode === "fixed") {
					this._rowIdx += this.grid._startRowIndex;
				} else {
					// for 12.1 onwards if virtualization mode is continuous we no longer have startRowIndex
					vrowidx = parseInt(row.attr("data-row-idx"), 10);
					this._rowIdx = vrowidx || this._rowIdx;
				}
			}
			// attempting to get data from the transaction log
			tlog = this.grid.dataSource.pendingTransactions();
			tid = parseInt(element.parent().attr("data-id"), 10);
			// loop should start from the end to get the latest change first
			for (i = tlog.length - 1; i >= 0; i--) {
				if (tlog[i].type === "deleterow") {
					continue;
				}
				if (tlog[i].type === "cell") {
					// match cell
					if (tlog[i].rowId === tid && tlog[i].col === this.grid._visibleColumns()[col].key) {
						val = tlog[i].value;
						break;
					}
				} else {
					// match row
					if (tlog[i].rowId === tid) {
						val = tlog[i].row[this.grid._visibleColumns()[col].key];
						break;
					}
				}
			}
			// if failed the data should be taken from the data source
			// S.S. October 21, 2011 A cell content can be deleted therefore the transaction log will have null or "" for
			// its value. We should fall back to dataView only if val is still undefined.
			if (val === undefined && this.grid.dataSource.dataView()[this._rowIdx] !== undefined) {
				val = this.grid.dataSource.dataView()[this._rowIdx][this.grid._visibleColumns()[col].key];
			}
			// L.A. 11 September 2012 Fixing bug #120485 The control still converts the hours to the local time zone 
			// even when EnableUTCDates property is set
			if ($.type(val) === "date") {
				val = new Date($.ig.formatter(val, 'date', 'dateTime', true, this.grid.options.enableUTCDates));
			}
			return val;
		},
		_shouldShowForTarget: function (element) {
			var shouldShow = true, currentIdx;
			switch (this.options.visibility) {
			case "always":
				break;
			case "never":
				shouldShow = false;
				break;
			case "overflow":
				shouldShow = this._displayOverflow(element);
				break;
			}
			if (shouldShow === false) {
				return false;
			}
			currentIdx = element.parent().children("td:not([data-parent='true'],[data-skip='true'])").index(element);
			this._pColumnIdx = this._columnIdx;
			this._columnIdx = $(this._$thead.children().children()[currentIdx]).data("columnIndex");
			if (this._columnIdx === undefined) {
				this._columnIdx = currentIdx;
			}
			if (this._columnIdx < 0 || this._columnIdx >= this.grid._visibleColumns().length) {
				return false;
			}
			this._pColumnKey = this._columnKey;
			this._columnKey = this.grid._visibleColumns()[this._columnIdx].key;
			return shouldShow && this._shouldShowForColumn();
		},
		_shouldShowForColumn: function () {
			var i, colSettings = this.options.columnSettings;
			for (i = 0; i < colSettings.length; i++) {
				if (colSettings[i].columnKey === this._columnKey || colSettings[i].columnIndex === this._columnIdx) {
					return colSettings[i].allowTooltips;
				}
			}
			return true;
		},
		_hideTooltip: function (current) {
			var self = this, args, fn;
			args = {
				owner: this,
				tooltip: current === true ? String(this._currentlyHoveredData) : String(this._previouslyHoveredData),
				value: current === true ? this._currentlyHoveredData : this._previouslyHoveredData,
				element: this._currentlyDisplayed,
				columnKey: current === true ? this._columnKey : this._pColumnKey,
				index: current === true ? this._rowIdx : this._pRowIdx,
				columnIndex: current === true ? this._columnIdx : this._pColumnIdx
			};
			fn = function () {
				var noCancel = self._trigger(self.events.tooltipHiding, self, args);
				if (noCancel === true) {
					self._hideTooltipNoDelay();
					self._trigger(self.events.tooltipHidden, self, args);
				}
			};
			if (typeof Modernizr === 'object' && Modernizr.touch) {
				fn();
			} else {
				clearTimeout(this.timeoutHiding);
				this.timeoutHiding = setTimeout(fn, this.options.hideDelay);
			}
		},
		_showTooltip: function () {
			var self = this, args, fn;
			args = {
				owner: this,
				tooltip: String(this._currentlyHoveredData),
				value: this._currentlyHoveredData,
				element: this._currentlyDisplayed,
				columnKey: this._columnKey,
				index: this._rowIdx,
				columnIndex: this._columnIdx
			};
			fn = function () {
				var noCancel = self._trigger(self.events.tooltipShowing, self, args);
				if (noCancel === true) {
					self._showTooltipNoDelay(args.tooltip);
					self._trigger(self.events.tooltipShown, self, args);
				}
			};
			if (typeof Modernizr === 'object' && Modernizr.touch) {
				fn();
			} else {
				this.timeoutShowing = setTimeout(fn, this.options.showDelay);
			}
		},
		_hideTooltipNoDelay: function () {
			var tooltip = $('#' + this.id());
			if (this.options.style === "tooltip") {
				if (this._canFadeOut === true) {
					this._canFadeOut = false;
					tooltip.fadeOut(this.options.fadeTimespan, $.proxy(this._fadeOutEnd, this));
				}
			} else if (this.options.style === "popover") {
				tooltip.igPopover("hide");
			}
			this.visible = false;
		},
		_showTooltipNoDelay: function (value) {
			var tooltip;
			if (this._currentlyDisplayed === null) {
				return;
			}
			tooltip = $('#' + this.id());
			clearTimeout(this.timeoutHiding);
			if (this.options.style === "tooltip") {
				this._updateTooltip(value);
				if (this._canFadeIn === true) {
					this._canFadeIn = false;
					tooltip.fadeIn(this.options.fadeTimespan, $.proxy(this._fadeInEnd, this));
				}
			} else if (this.options.style === "popover") {
				tooltip.igPopover("show", $(this._currentlyDisplayed), value);
			}
			this.visible = true;
		},
		_fadeOutEnd: function () {
			this._canFadeOut = true;
		},
		_fadeInEnd: function () {
			this._canFadeIn = true;
		},
		_updateTooltip: function (value) {
			var tooltipContainer = $('#' + this.id() + '_container');
			tooltipContainer.text(value);
			tooltipContainer.parent().css('max-width', $(this._currentlyDisplayed).width());
			this._positionTooltip(tooltipContainer.parent());
		},
		_positionTooltip: function (tooltip) {
			var win = $(window), left, top, tfullw = tooltip.outerWidth(), tfullh = tooltip.outerHeight();
			left = this.mouseX - win.scrollLeft() + this.options.cursorLeftOffset;
			top = this.mouseY - win.scrollTop() + this.options.cursorTopOffset;
			// repositions the tooltip if it would otherwise overflow the browser window to the right
			if (left + tfullw > win.width()) {
				left = win.width() - tfullw;
			}
			// repositions the tooltip if it would otherwise overflow the browser window to the bottom
			if (top + tfullh > win.height()) {
				top = win.height() - tfullh;
			}
			tooltip.css({
				'top': top + win.scrollTop(),
				'left': left + win.scrollLeft()
			});
		}
	});
	$.extend($.ui.igGridTooltips, {version: '12.2.20122.1021'});
}(jQuery));
