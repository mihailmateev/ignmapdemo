/*!
* Infragistics.Web.ClientUI shared localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*jQuery must be defined before this. If it is not the $ variable is created*/
$ = $ || {};

$.ig = $.ig || {};

if (!$.ig.SharedLocale) {
	$.ig.SharedLocale = {};

	$.extend($.ig.SharedLocale, {

		locale: {
			popoverOptionChangeNotSupported: "Changing the following option after igPopover has been initialized is not supported:"
		}
	});

}


/*!
 * Infragistics.Web.ClientUI jQuery Shared 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.2.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  ig.util.js
 */

/*global window */
/*global jQuery */
/*global Class */
/*global HTMLElement */
/*global define */
(function ($) {
	// Loading indicator widget 
    $.widget("ui.igLoading", {
		options: {
			cssClass: null,
			// K.D. December 19th, 2011 Bug #98217 Adding an option to calculate additional vertical offset
			includeVerticalOffset: true
		},
		_indicator: null,
		_create: function () {
			// M.H. 13 May 2011 fix bug 75501
			var offset, css;

			css = this.options.cssClass === null ? "ui-igloadingmsg" : this.options.cssClass;
			this._hgrid = this.element.closest('.ui-iggrid-root').closest('.ui-iggrid');
			if (this.element.children('.' + css).length === 0) {
				this._indicator = $('<span></span>').appendTo("body").attr('id', this.element[0].id + '_loading').addClass(css);
				// calculate position
				//op = this.element.offsetParent();
				//if (op.is('body')) {
				offset = this.element.offset();
				//} else {
				//	offset = op.position();
				//}
				//this._indicator.css('left', offset.left + this.element.innerWidth() / 2).css('top', offset.top + this.element.innerHeight() / 2);
				this.refreshPos();
			}
			// VS 06/25/2012. When target has small height (like editor), then indicator is not at the middle
			this._yShift = this._indicator ? Math.round(this._indicator.height() / 2) : 0;
		},
		indicatorElement: function () {
			return this._indicator;
		},
		indicator: function () {
			return this;
		},
		show: function (refresh) {
			if (refresh !== false) {
				this.refreshPos();
			}
			this._resId = setInterval($.proxy(this._resizeContainer, this), 300);
			this._indicator.css("display", "").css("visibility", "visible");
		},
		hide: function () {
			this._indicator.css("display", "none").css("visibility", "hidden");
			clearInterval(this._resId);
		},
		_resizeContainer: function () {
			var offset = this.element.offset();
			if (offset.top + this.element.innerHeight() / 2 - this._yShift !== this._indicator.css('top')) {
				this.refreshPos();
			}
		},
		refreshPos: function () {
			var offset = this.element.offset(), top = offset.top + this.element.innerHeight() / 2 - this._yShift,
				left = offset.left + this.element.innerWidth() / 2, verticalOffset; // special offset in case the grid is taller than the browser window
			if (this._hgrid.length > 0 && top > this._hgrid.offset().top + this._hgrid.height()) {
				// we don't want to show the loading indicator of child grids out of the area of their parent grids
				return;
			}
			if (this._hgrid.length > 0 && left > this._hgrid.offset().left + this._hgrid.width()) {
				return;
			}
			// account for top going out of the visible browser window
			// A.T. 22 Nov 2011 - fix for #76784
			// K.D. December 19th, 2011 Bug #98217 No additional offset is required if the indicator is in a tree
			if (this.options.includeVerticalOffset && top > $(window).height()) {
				verticalOffset = ($(window).height() - offset.top - $(window).scrollTop()) / 2;
				// position the loading indicator above the end of the browser window
				top = $(window).height() - verticalOffset < offset.top ? offset.top + verticalOffset : $(window).height() - verticalOffset;
			}
			this._indicator.css('left', left).css('top', top);
		},
		destroy: function () {
			clearInterval(this._resId);
			this._indicator.remove();
		}
    });
    $.extend($.ui.igLoading, {version: '12.2.20122.1021'});

	$.widget("ui.igSlider", $.ui.mouse, {
		options: {
			/* type="bool" Get or set whether the slide handle will animate when it is moved. */
			animate: false,
			/* type="number" Get or set the slider range maximum value. */
			max: 100,
			/* type="number" Get or set the slider range minimum value. */
			min: 0,
			/* type="horizontal|vertical" Get or set the slider orientation. */
			orientation: 'horizontal',
			/* type="number" Get or set the step with which the value is increased. */
			step: 1,
			/* type="number" Get or set the slider value. */
			value: 0,
			/* Get or set the bookmarks array. */
			bookmarks: [{
				/* type="number" Get or set the bookmark value. Should be between slider min and max values. */
				value: 0,
				/* type="string" Get or set the bookmark title. Show in tooltip on hover. */
				title: '',
				/* type="bool" Get or set whether the bookmark is disabled or not. */
				disabled: false,
				/* type="string" Get or set a custom css class to be applied to the bookmark anchor element. */
				css: ''
		    }],
			/* type="bool" Get or set the whether to show bookmarks title on bookmark hover or not. */
			showBookmarkTitle: true,
			/* type="bool" Get or set whether the handle will be moved to the bookmark position when a bookmark is clicked. */
			syncHandleWithBookmark: true
		},

		css: {
			/* Get or set the widget base CSS classes. */
			"baseClasses" : "ui-igslider ui-widget ui-widget-content ui-corner-all",
			/* Get or set the CSS class applied to the widget when orientation is horizontal. */
			"horizontalOrientationClass" : "ui-igslider-horizontal",
			/* Get or set the CSS class applied to the widget when orientation is vertical. */
			"verticalOrientationClass" : "ui-igslider-vertical",
			/* Get or set the CSS class applied when the widget is disabled. */
			"sliderDisabledClass" : "ui-igslider-disabled ui-disabled",
			/* Get or set the CSS class applied on the slider handle. */
			"handleClass" : "ui-igslider-handle",
			/* Get or set the CSS class applied on the bookmark anchors. */
			"bookmarkClass" : "ui-igslider-bookmark",
			/* Get or set the CSS class applied on the bookmarks when they are disabled. */
			"bookmarkDisabledClass" : "ui-igslider-bookmark-disabled",
			/* Get or set the CSS class applied on the bookmark tooltips. */
			"bookmarkTooltipClass" : "ui-igslider-bookmark-tooltip"
		},

		events: {
			/* cancel="true" Defines the slide start event. */
			start: "start",
			/* cancel="true" Defines the slide event. Fired when the user is sliding with mouse. */
			slide: "slide",
			/* Defines the slide stop event. Fired to mark the end of a sliding action. */
			stop: "stop",
			/* Defines the slider value change event. Fired when the value of the slider changes. It fires after the slide event. */
			change: "change",
			/* Defines the slider bookmark hit event. Fired when the slider handle passes after the bookmark value. */
			bookmarkHit: "bookmarkhit",
			/* cancel="true" Defines the slider bookmark click event. Fired when a bookmark is clicked. */
			bookmarkClick: "bookmarkclick"
		},

		_numpages : 5,

		widget: function () {
		    return this.element;
	    },

		_createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			this.options.bookmarks = [];
			$.Widget.prototype._createWidget.apply(this, arguments);
		},

		_create: function () {
			var o = this.options,
				self = this,
				css = this.css;
			this._keySliding = false;
			this._mouseSliding = false;
			this._animateOff = true;
			this._handleIndex = null;
			this._detectOrientation();
			this._mouseInit();

			this.element.addClass(css.baseClasses);

			if (o.disabled) {
				this.element.addClass(css.sliderDisabledClass);
			}

			if ($(".ui-igslider-handle", this.element).length === 0) {
				$("<a href='#'></a>").appendTo(this.element).addClass(css.handleClass);
			}

			// TODO we should think of a different way to find the handle as the class can be changed by the user
			// and it may not be just one class
			this.handles = $(".ui-igslider-handle", this.element).addClass("ui-state-default" + " ui-corner-all").bind({
				click: function (event) {
					event.preventDefault();
				},
				mouseover: function () {
					if (!o.disabled) {
						$(this).addClass("ui-state-hover");
					}
				},
				mouseout: function () {
					$(this).removeClass("ui-state-hover");
				},
				focus: function () {
					if (!o.disabled) {
						$(".ui-igslider .ui-state-focus").removeClass("ui-state-focus");
						$(this).addClass("ui-state-focus");
					} else {
						$(this).blur();
					}
				},
				blur: function () {
					$(this).removeClass("ui-state-focus");
				},
				keydown: function (event) {
					var ret = true,
						index = $(this).data("index.ui-igslider-handle"),
						allowed,
						curVal,
						newVal,
						step;

					if (self.options.disabled) {
						return;
					}

					switch (event.keyCode) {
					case $.ui.keyCode.HOME:
					case $.ui.keyCode.END:
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						ret = false;
						if (!self._keySliding) {
							self._keySliding = true;
							$(this).addClass("ui-state-active");
							allowed = self._start(event, index);
							if (allowed === false) {
								return;
							}
						}
						break;
					}

					step = self.options.step;
					curVal = newVal = self.value();

					switch (event.keyCode) {
					case $.ui.keyCode.HOME:
						newVal = self.options.min;
						break;
					case $.ui.keyCode.END:
						newVal = self.options.max;
						break;
					case $.ui.keyCode.PAGE_UP:
						newVal = self._trimValue(curVal + ((self.options.max - self.options.min) / this._numpages));
						break;
					case $.ui.keyCode.PAGE_DOWN:
						newVal = self._trimValue(curVal - ((self.options.max - self.options.min) / this._numpages));
						break;
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
						if (curVal === self.options.max) {
							return;
						}
						newVal = self._trimValue(curVal + step);
						break;
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						if (curVal === self.options.min) {
							return;
						}
						newVal = self._trimValue(curVal - step);
						break;
					}

					self._slide(event, index, newVal);

					return ret;
				},
				keyup: function (event) {
					var index = $(this).data("index.ui-igslider-handle");

					if (self._keySliding) {
						self._keySliding = false;
						self._stop(event, index);
						self._change(event, index);
						$(this).removeClass("ui-state-active");
					}
				}
			}).each(function (i) {
				$(this).data("index.ui-igslider-handle", i);
			});

			this.handle = this.handles.eq(0);

			this._renderBookmarks();

			this._refreshValue();

			this._animateOff = false;
		},

		_renderBookmarks: function () {
			if (this.options.bookmarks && this.options.bookmarks.length > 0) {
				var len = this.options.bookmarks.length,
					i = 0,
					o = this.options,
					css = this.css,
					mark,
					self = this;

				for (i; i < len; i++) {
					mark = o.bookmarks[i];
					$("<a href='#'></a>").appendTo(this.element).data("index.ui-igslider-bookmark", i).addClass(mark.disabled ? css.bookmarkDisabledClass : css.bookmarkClass).addClass(mark.css && mark.css.length > 0 ? mark.css : '').css('left', (o.min !== o.max) ? ((mark.value - o.min) / (o.max - o.min) * 100) + '%' : '0%');
				}

				this.bookmarks = $(".ui-igslider-bookmark", this.element).addClass("ui-state-default").bind({
					mousedown: function (event) {
						var noCancel = true,
							bookmarkIndex = $(this).data("index.ui-igslider-bookmark");
						event.preventDefault();
						event.stopPropagation();
						noCancel = self._bookmarkClicked(event, bookmarkIndex);
						if (self.options.syncHandleWithBookmark && noCancel) {
							self._slide(event, 0, self.options.bookmarks[bookmarkIndex].value);
						}
					},
					// K.D. May 28, 2011 Bug #68785 we need the browser event to position the tooltip
					mouseover: function (event) {
						if (!o.disabled) {
							$(this).addClass("ui-state-hover");
							if (self.options.showBookmarkTitle) {
								self._showBookmarkTitle($(this), event);
							}
						}
					},
					mouseout: function () {
						if (!o.disabled) {
							$(this).removeClass("ui-state-hover");
							if (self.options.showBookmarkTitle) {
								self._hideBookmarkTitle($(this));
							}
						}
					},
					// K.D. May 27, 2011 Bug #73417 The browser window jumps if we don't prevent the default action of the
					// bookmark click
					click: function (event) {
						event.preventDefault();
					}
				});
				this._createBookmarkTooltip();
				this._buildBookmarkHit();
			}
		},

		destroy: function () {
			this.handles.remove();
			this.clearBookmarks();

			this.element
				.removeClass(this.css.baseClasses +
					" ui-igslider-horizontal" +
					" ui-igslider-vertical" +
					" ui-igslider-disabled")
				.removeData("slider")
				.unbind(".slider");

			this._mouseDestroy();

			return this;
		},

		_id: function (suffix) {
			return this.element[0].id + suffix;
		},

		_showBookmarkTitle: function (bookmark, browserEvent) {
			var tooltip = $('#' + this._id('_tooltip')),
				title = this.options.bookmarks[bookmark.data("index.ui-igslider-bookmark")].title;
			if (title && title.length > 0) {
				tooltip.igTooltip('option', 'text', title);
				// K.D. May 28, 2011 Bug #68785 we need the browser event to position the tooltip
				tooltip.css('top', browserEvent.pageY - tooltip.outerHeight() - 5)
					.css('left', browserEvent.pageX - (tooltip.width() / 2) + (bookmark.width() / 2)).show();
			}
		},

		_hideBookmarkTitle: function (bookmark) {
			$('#' + this._id('_tooltip')).hide();
		},

		_createBookmarkTooltip: function () {
			var html = '<div id="' + this._id("_tooltip") + '" class="' + this.css.bookmarkTooltipClass + '"></div>';
			// K.D. May 28, 2011 Bug #68785 we beed the tooltip attached to the body to position it correctly when needed
			$(html).appendTo($(document.body)).igTooltip({
				arrowLocation: 'bottom'
			}).hide();
		},

		clearBookmarks: function () {
			if (this.bookmarks) {
				this.bookmarks.remove();
			}
		},

		_mouseCapture: function (event) {
			var o = this.options,
				position,
				normValue,
				index = 0,
				handle = this.handles.eq(index),
				self = this,
				offset,
				mouseOverHandle;

			if (o.disabled) {
				return false;
			}

			this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			};
			this.elementOffset = this.element.offset();

			position = { x: event.pageX, y: event.pageY };
			normValue = this._normValueFromMouse(position);

			this._mouseSliding = true;

			self._handleIndex = index;

			handle.addClass("ui-state-active");
			if (!$.browser.opera) {
				handle.focus();
			}

			offset = handle.offset();
			mouseOverHandle = !$(event.target).parents().andSelf().is(".ui-igslider-handle");
			this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
				left: event.pageX - offset.left - (handle.width() / 2),
				top: event.pageY - offset.top -
					(handle.height() / 2) -
					(parseInt(handle.css("borderTopWidth"), 10) || 0) -
					(parseInt(handle.css("borderBottomWidth"), 10) || 0) +
					(parseInt(handle.css("marginTop"), 10) || 0)
			};

			this._slide(event, index, normValue);
			this._animateOff = true;

			this._mouseUpHandler = function (event) {
				return self._mouseStop(event);
			};

			// A.Y. June 6, 2011 Bug# 73864 - the ui.mouse plugin that we extend is not firing _mouseStop unless there is a slide
			// in which case it fires _mouseStart and then _mouseStop, so we should handle the mouseUp event 
			// unless _mouseStart is fired before that
			$(document).bind('mouseup.' + this.widgetName, this._mouseUpHandler);

			return true;
		},

		_mouseStart: function (event) {
			// A.Y. June 6, 2011 Bug# 73864 - _mouseStart is fired so we can unbind our mauseUp handler 
			// as we know now that _mouseStop will be fired
			$(document).unbind('mouseup.' + this.widgetName, this._mouseUpHandler);

			return this._start(event, this._handleIndex);
		},

		_mouseDrag: function (event) {
			var position = { x: event.pageX, y: event.pageY },
				normValue = this._normValueFromMouse(position);

			this._slide(event, this._handleIndex, normValue);

			return false;
		},

		_mouseStop: function (event) {
			var self = this;
			this.handles.removeClass("ui-state-active");
			// S.S. November 22, 2011, Bug #76208 If mouseSliding is set to false right away a sync issue appears because the 
			// VideoPlayer is not forbidden from progressing through the video and updates the position before the new sliding 
			// one is applied making the slider jump between the old and the new position.
			setTimeout(function () { self._mouseSliding = false; }, 1000);

			this._stop(event, this._handleIndex);
			this._change(event, this._handleIndex);

			this._handleIndex = null;
			this._clickOffset = null;
			this._animateOff = false;
			return false;
		},

		_detectOrientation: function () {
			var o = this.options,
				css = this.css;
			if (o.orientation === "vertical") {
				this.orientation = "vertical";
				this.element.removeClass(css.horizontalOrientationClass).addClass(css.verticalOrientationClass);
			} else {
				this.orientation = "horizontal";
				this.element.removeClass(css.verticalOrientationClass).addClass(css.horizontalOrientationClass);
			}
		},

		_normValueFromMouse: function (position) {
			var pixelTotal,
				pixelMouse,
				percentMouse,
				valueTotal,
				valueMouse;

			if (this.orientation === "horizontal") {
				pixelTotal = this.elementSize.width;
				pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
			} else {
				pixelTotal = this.elementSize.height;
				pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
			}

			percentMouse = (pixelMouse / pixelTotal);
			if (percentMouse > 1) {
				percentMouse = 1;
			}
			if (percentMouse < 0) {
				percentMouse = 0;
			}
			if (this.orientation === "vertical") {
				percentMouse = 1 - percentMouse;
			}

			valueTotal = this.options.max - this.options.min;
			valueMouse = this.options.min + percentMouse * valueTotal;

			return this._trimValue(valueMouse);
		},

		_start: function (event, index) {
			var uiHash = {
				handle: this.handles[index],
				value: this.value()
			};
			return this._trigger(this.events.start, event, uiHash);
		},

		_slide: function (event, index, newVal) {
			var allowed;
			if (newVal !== this.value()) {
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger(this.events.slide, event, {
					handle: this.handles[index],
					value: newVal
				});
				if (allowed !== false) {
					this.value(newVal);
				}
			}
		},

		_stop: function (event, index) {
			var uiHash = {
				handle: this.handles[index],
				value: this.value()
			};
			this._trigger(this.events.stop, event, uiHash);
		},

		_change: function (event, index) {
			if (!this._keySliding && !this._mouseSliding) {
				var uiHash = {
						handle: this.handles[index],
						value: this.value()
					};
				this._trigger(this.events.change, event, uiHash);
				this._checkBookmarkHit(uiHash.value, event);
				if (uiHash.value === this.options.max && this._marksHit && this._marksHit.length === 0) {
					this._buildBookmarkHit();
				}
			}
		},

		_checkBookmarkHit: function (currentValue, event) {
			if (this._marksHit && this._marksHit.length > 0 && currentValue >= this._marksHit[0].value) {
				var index = this._marksHit[0].index;
				this._marksHit.shift();
				this._bookmarkHit(event, index);
			}
		},

		_buildBookmarkHit: function () {
			var b = this.options.bookmarks || [],
				i = b.length - 1;
			this._marksHit = [];
			for (i; i >= 0; i--) {
				if (!b[i].disabled) {
					this._marksHit.push({value: b[i].value, index: i });
				}
			}
			this._marksHit.sort(this._sortBookmarksJSON);
			this._marksHit = $.extend(true, [], this._marksHit);
		},

		_sortBookmarksJSON: function (a, b) {
			return (a.value - b.value);
		},

		_bookmarkClicked: function (event, index) {
			var uiHash = {
				bookmarkElement: this.bookmarks[index],
				bookmark: this.options.bookmarks[index]
			};
			return this._trigger(this.events.bookmarkClick, event, uiHash);
		},

		_bookmarkHit: function (event, index) {
			var uiHash = {
				bookmarkElement: this.bookmarks[index],
				bookmark: this.options.bookmarks[index]
			};

			// K.D. June 24th, 2011 Bug #77536 If we have autohide=true and we check for bookmark pins to be visible
			// then the bookmark hit event would never be fired /*if (uiHash.bookmarkElement && $(uiHash.bookmarkElement).is(':visible'))*/
			if (uiHash.bookmarkElement) {
				this._trigger(this.events.bookmarkHit, event, uiHash);
			}
		},

		value: function (newValue) {
			if (arguments.length) {
				this.options.value = this._trimValue(newValue);
				this._refreshValue();
				this._change(null, 0);
			}
			return this._value();
		},

		_setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);

			switch (key) {
			case "disabled":
				if (value) {
					this.handles.filter(".ui-state-focus").blur();
					this.handles.removeClass("ui-state-hover");
					this.handles.attr("disabled", "disabled");
					this.element.addClass("ui-disabled");
				} else {
					this.handles.removeAttr("disabled");
					this.element.removeClass("ui-disabled");
				}
				break;
			case "orientation":
				this._detectOrientation();
				this._refreshValue();
				break;
			case "value":
				if (this._mouseSliding === true) {
					return;
				}
				this._animateOff = true;
				this._refreshValue();
				this._change(null, 0);
				this._animateOff = false;
				break;
			case "bookmarks":
				this.clearBookmarks();
				this._renderBookmarks();
				break;
			}
		},

		_value: function () {
			return this._trimValue(this.options.value);
		},

		_trimValue: function (val) {
			if (val < this.options.min) {
				return this.options.min;
			}
			if (val > this.options.max) {
				return this.options.max;
			}
			var step = (this.options.step > 0) ? this.options.step : 1,
				valModStep = val % step,
				alignValue = val - valModStep;

			if (Math.abs(valModStep) * 2 >= step) {
				alignValue += (valModStep > 0) ? step : (-step);
			}
			return parseFloat(alignValue.toFixed(5));
		},

		_normPercentValue: function (val) {
			var decrease = 0, retVal = val;
			if (this.orientation === 'vertical') {
				decrease = (this.handle.outerHeight() / this.element.outerHeight()).toFixed(2) * 100;
			}
			if (val - decrease > 0) {
				retVal = val - decrease;
			}
			return retVal;
		},

		_refreshValue: function () {
			var o = this.options,
				control = this,
				animate = (!this._animateOff ? o.animate : false),
				_set = {},
				value = this.value(),
				valueMin = this.options.min,
				valueMax = this.options.max,
				valPercent = (valueMax !== valueMin) ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
			_set[control.orientation === "horizontal" ? "left" : "bottom"] = this._normPercentValue(valPercent) + "%";
			this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
		}
	});
	$.extend($.ui.igSlider, {version: '12.2.20122.1021'});

	$.widget("ui.igProgressBar", {
		options: {
			animate: false,
            animateTimeout: 100,
			max: 100,
			min: 0,
			orientation: 'horizontal',
			value: 0,
			width: '0px',
			height: '0px',
			range: false,
			endValue: 100 // show discontinous progress. I.e. we have data between value and endValue.
		},

		css: {
			"baseClasses" : "ui-igprogressbar ui-widget ui-widget-content ui-corner-all",
			"horizontalOrientationClass" : "ui-igprogressbar-horizontal",
			"verticalOrientationClass" : "ui-igprogressbar-vertical",
			"disabledClass" : "ui-igprogressbar-disabled ui-disabled",
			"progressRangeClass" : "ui-igprogressbar-range ui-widget-header ui-corner-all"
		},

		events: {
			change: "change"
		},

		_animationOff : true,

		widget: function () {
		    return this.element;
	    },

		_detectOrientation: function () {
			var css = this.css;
			if (this.options.orientation === "vertical") {
				this.orientation = "vertical";
				this.element.removeClass(css.horizontalOrientationClass).addClass(css.verticalOrientationClass);
			} else {
				this.orientation = "horizontal";
				this.element.removeClass(css.verticalOrientationClass).addClass(css.horizontalOrientationClass);
			}
		},

		_id: function (suffix) {
			return this.element[0].id + suffix;
		},

		_create: function () {
			var o = this.options,
				css = this.css;

			this._detectOrientation();

			this.element.addClass(css.baseClasses);

			if (o.disabled) {
				this.element.addClass(css.disabledClass);
			}

			if (o.width !== '0px') {
				this.element.css('width', o.width);
			}

			if (o.height !== '0px') {
				this.element.css('height', o.height);
			}

			if (o.orientation === 'horizontal') {
				$('<div id="' + this._id('_progress') + '" class="' + css.progressRangeClass + '" style="height:100%; top:0px; left:0%; width:0%;"></div>').appendTo(this.element);
			} else {
				$('<div id="' + this._id('_progress') + '" class="' + css.progressRangeClass + '" style="height:0%; bottom:0%; left:0px; width:100%;"></div>').appendTo(this.element);
			}

			this._refreshValue();
		},

		destroy: function () {
			this.element
				.removeClass("ui-igprogressbar" +
					" ui-igprogressbar-horizontal" +
					" ui-igprogressbar-vertical" +
					" ui-igprogressbar-disabled" +
					" ui-widget" +
					" ui-widget-content" +
					" ui-corner-all")
				.removeData("igProgressBar")
				.unbind(".igProgressBar");
			$('#' + this._id('_progress')).remove();
			return this;
		},

		_change: function (event) {
			var uiHash = {
				value: this.value()
			};
			this._trigger(this.events.change, event, uiHash);
		},

		value: function (newValue) {
			if (arguments.length) {
				this.options.value = this._trimValue(newValue);
				this._refreshValue();
				this._change(null);
			}
			return this.options.value;
		},

		_setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
			var o = this.options;
			switch (key) {
			case "disabled":
				if (value) {
					this.element.addClass(this.css.disabledClass);
				} else {
					this.element.removeClass(this.css.disabledClass);
				}
				break;
			case "orientation":
				this._detectOrientation();
				this._refreshValue();
				break;
			case "value":
				this._animationOff = true;
				o.value = this._trimValue(value);
				this._refreshValue();
				this._change(null);
				this._animationOff = false;
				break;
			case "endValue":
				o.endValue = this._trimValue(value);
				this._refreshValue();
				break;
			case "max":
				if (o.endValue > o.max) {
					o.endValue = o.max;
					this._refreshValue();
				}
				break;
			case "width":
				this.element.css('width', value);
				break;
			case "height":
				this.element.css('height', value);
				break;
            case "animate":
                o.animate = value;
                break;
            case "animateTimeout":
                o.animateTimeout = value;
                break;
			default:
				break;
			}
		},

		_trimValue: function (val) {
			if (val < this.options.min) {
				return this.options.min;
			}
			if (val > this.options.max) {
				return this.options.max;
			}
			return parseInt(val, 10);
		},

		_refreshValue: function () {
			var o = this.options,
				value = o.value,
				valueMin = o.min,
				valueMax = o.max,
				valueEnd = o.endValue,
				valPercent = (valueMax !== valueMin) ? (value - valueMin) / (valueMax - valueMin) * 100 : 0,
				valueEndPercent = (value !== valueEnd) ? (valueEnd - value) / (valueMax - valueMin) * 100 : 0,
                progressBar = $('#' + this._id('_progress'));
			if (o.range) {
				if (o.orientation === 'horizontal') {
					progressBar.css('left', valPercent + '%').css('width', valueEndPercent + '%');
				} else {
					progressBar.css('bottom', valPercent + '%').css('height', valueEndPercent + '%');
				}
			} else {
                if (o.animate === true) {
                    if (o.orientation === 'horizontal') {
                        // in Opera animate width property throws error when width/height is firstly set as 0%
                        if (progressBar[0].style.width === '0%') {
                            progressBar.css({width: '0px'});
                        }
                        //fix for IE, when progress bar is hidden and try to animate throws error
                        if (progressBar.is(':hidden') === false) {
                            progressBar.animate({width: valPercent + '%'}, o.animateTimeout);
                        } else {
                            progressBar.css('width', valPercent + '%');
                        }
				    } else {
                        // in Opera animate width property throws error when width/height is firstly set as 0%
                        if (progressBar[0].style.height === '0%') {
                            progressBar.css({height: '0px'});
                        }
                        //fix for IE, when progress bar is hidden and try to animate throws error
                        if (progressBar.is(':hidden') === false) {
                            progressBar.animate({height: valPercent + '%'}, o.animateTimeout);
                        } else {
                            progressBar.animate({'height': valPercent + '%'}, o.animateTimeout);
                        }
				    }
                } else {
				    if (o.orientation === 'horizontal') {
					    progressBar.css('width', valPercent + '%');
				    } else {
					    progressBar.css('height', valPercent + '%');
				    }
                }
			}
		}
	});
	$.extend($.ui.igProgressBar, {version: '12.2.20122.1021'});

    //////////////////////////////////////////////////////////
    //For now igButton could be applied to these elements:
    //  1. input type="button" 
    //  2. input type="submit"
    //  3. a
    //  4. div
    //////////////////////////////////////////////////////////

    $.widget("ui.igButton", {
        options: {
	        width: null,
	        height: null,
	        link: { href: null, target: null, title: null },
	        labelText: "",
	        centerLabel: false,
	        css: null,
            onlyIcons: false,
            icons: {primary: null, secondary: null},
			// M.H. 12 May 2011 - fix bug 74763: add new option for title
            title: false
	    },

        _id: function (suffix) {
			return this.element[0].id + suffix;
        },

        _create: function () {
            var self = this, o = self.options,
                e = this.element,
                inputType,
                css = {
                    //            "baseClasses": "ui-widget ui-igbutton ui-button ui-state-default",
                    //            "baseDisabledClass": "ui-igbutton-disabled ui-state-disabled",
                    /* class for IE6 */
                    "buttonClassIE6": "ui-ie6",
                    "buttonClasses": "ui-button ui-igbutton ui-widget ui-widget-content ui-corner-all ui-state-default",
                    "buttonHoverClasses": "ui-state-hover",
                    "buttonActiveClasses": "ui-state-active", //when button is clicked 
                    "buttonFocusClasses": "ui-state-focus", //when button get focus
                    "buttonLabelClass": "ui-button-text",
                    "buttonDisabledClass": "ui-state-disabled",
                    "buttonPrimaryIconClass": "ui-button-icon-primary ui-icon",
                    "buttonMainElementPrimaryIconClass": " ui-button-text-icon-primary",
                    "buttonMainElementSecondaryIconClass": " ui-button-text-icon-secondary",
                    "buttonSecondaryIconClass": "ui-button-icon-secondary ui-icon",
                    "buttonIconsOnly": "ui-button-icons-only",
                    "buttonIconOnly": "ui-button-icon-only",
                    "buttonIcons": "ui-button-text-icons",
                    "buttonTextOnlyClass" : "ui-button-text-only"
                };

            this._attached = false;

            o.css = $.extend(css, o.css);
            self._getInitValues();

            if (e.is('div')) {
                self._renderDivButton();
            } else if (e.is('a')) {
                self._renderAHref();
            } else if (e.is('input')) {
                inputType = e.attr('type').toUpperCase();
                if (inputType === 'BUTTON' || inputType === 'SUBMIT' || inputType === 'RESET') {
                    self._renderInput();
                } else {
                    // we could not render button for other types
                    return;
                }
            } else if (e.is('button')) {
                self._renderButton();
            } else {
                // we could not render button for other DOM types
                return;
            }

            if (o.width !== null) {
                self._setWidth(o.width);
            }
            if (o.height !== null) {
                self._setHeight(o.height);
            }

            e.addClass(o.css.buttonClasses).addClass(o.css.buttonDefaultClasses);

            if ($.browser.msie === true && $.browser.version.slice(0, 1) === "6") {
                e.addClass(css.buttonClassIE6);
            }
            if (o.centerLabel === true) {
                self._centerLabel();
			}

            if (o.disabled) {
                self._disableButton(); //it should be dettached events too
			} else {
                self._enableButton();
			}
            self._setOnlyIcons();

            /* HTML 5 Properties */
            e.attr("role", "button");
            e.attr("aria-disabled", "false");
            /* //HTML 5 Properties */

            self._attachButtonEvents();

			// M.H. 12 May 2011 - fix bug 74763:
            self.setTitle(o.title);
            return this;
        },

		setTitle: function (title) {
            // M.H. 12 May 2011 - fix bug 74763: add method setTitle - add/remove title attribute
            var e = this.element;

            if (title === false) {
                e.removeAttr('title');
            } else {
                e.attr('title', title);
            }
        },

        widget: function () {
		    return this.element;
	    },

        _isRedirect: function () {
            return this.options.link.href !== null;
        },
        /* render button functions according to tag name of main element of widget */

        _renderDivButton: function () {
            this._setLabel();
        },

        _renderAHref: function () {
            //set link properties if it is set in options            
            this._setLinkOptions(true);
            this._setLabel();
        },

        _renderInput: function () {
            var e = this.element;

            e.attr('value', this.options.labelText);
        },

        _renderButton: function () {
            this._setLabel();
        },

        /* //render button functions according to tag name */
        _disableButton: function () {
            var self = this, e = self.element;
            e.addClass(self.options.css.buttonDisabledClass);

            //we should remove attributes for A because in FF disabled attribute does not work for anchors
            if (e.is('a') === true) {
                e.removeAttr('href');
                e.removeAttr('target');
                e.removeAttr('title');
            } else {
                e.attr('disabled', 'true');
            }
        },

        _enableButton: function () {
            var self = this, e = self.element, o = this.options;

            if (e.hasClass(o.css.buttonDisabledClass)) {
                e.removeClass(o.css.buttonDisabledClass);
            }

            e.removeAttr('disabled');
            if (e.is('a') === true) {
                self._setLinkOptions(true);
            }
        },

        _setLabel: function () {
            var e = this.element,
                o = this.options,
                icons = o.icons,
                css = o.css,
                html = '',
                isSetPrimary = this._isSetPrimaryIcon(),
                isSetSecondary = this._isSetSecondaryIcon(),
                labelText = (o.labelText === null || o.labelText === '') ? e.text() : o.labelText;

            e.attr('title', o.labelText);

            if (e.is('input')) {
                e.attr('value', o.labelText);
                return;
            }

            if (isSetPrimary) {
                html += '<span class="' + css.buttonPrimaryIconClass + ' ' + icons.primary + '" id="' + this._id('_picn') + '"></span>';
            }

            html += '<span class="' + o.css.buttonLabelClass + '" id="' + this._id('_lbl') + '">' + labelText + '</span>';
            if (isSetSecondary) {
                html += '<span class="' + css.buttonSecondaryIconClass + ' ' + icons.secondary + '" id="' + this._id('_sicn') + '"></span>';
            }

            if (isSetPrimary && isSetSecondary && !o.onlyIcons) {
                e.addClass(css.buttonIcons);
            } else if (o.onlyIcons) {
                this._setOnlyIcons();
            } else if (isSetPrimary) {
                e.addClass(css.buttonMainElementPrimaryIconClass);
            } else if (isSetSecondary) {
                e.addClass(css.buttonMainElementSecondaryIconClass);
            } else {
                e.addClass(css.buttonTextOnlyClass);
            }

            e.html(html);
        },

        _setOnlyIcons: function () {
            var e = this.element, css = this.options.css;
            if (this.options.onlyIcons === false) {
                if (e.hasClass(css.buttonIconsOnly)) {
                    e.removeClass(css.buttonIconsOnly);
                }
                if (e.hasClass(css.buttonIconOnly)) {
                    e.removeClass(css.buttonIconOnly);
                }
                if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
                    e.addClass(css.buttonIcons);
                }
            } else {
                if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
                    e.addClass(css.buttonIconsOnly);
                } else {
                    e.addClass(css.buttonIconOnly);
                }
            }
        },

        _setLinkOptions: function (isAHref) {
            var self = this, e = self.element, o = this.options;
            //if main element is really isAHref then we should only set its attributes 
            //otherwise we should set as inner data its properties and             
            if (isAHref) {
                //set link properties if it is set in options
                if (o.link !== null && o.link.href !== null) {
                    e.attr('href', o.link.href);
                } else {
                    e.removeAttr('href');
                }

                if (o.link !== null && o.link.target !== null) {
                    e.attr('target', o.link.target);
                } else {
                    e.removeAttr('target');
                }

                if (o.link !== null && o.link.title !== null) {
                    e.attr('title', o.link.title);
                } else {
                    e.removeAttr('title');
                }
            }
        },
        /* //render button */
        _setWidth: function (value) {
            var e = this.element;

            if (value === null) {
                e.css('width', '');
            } else {
                e.css('width', value);
            }
        },
        _setHeight: function (value) {
            var e = this.element;
            if (value === null) {
                e.css('height', '');
            } else {
                e.css('height', value);
            }
        },
        _setOption: function (key, val) {
            // Particular Modifier
            var e = this.element, self = this;
            $.Widget.prototype._setOption.apply(this, [key, val]);
            switch (key) {
			case "width":
				self._setWidth(val);
				break;
			case "height":
				self._setHeight(val);
				break;
			case "link":
				self._setLinkOptions(e.is('a') === true);
				break;
			case "disabled":
                val = Boolean(val);

                if (val === true) {
					self._disableButton();
				} else {
                    self._enableButton();
				}
				break;
			case "labelText":
                self._setLabel();
				break;
			case "centerLabel":
				val = Boolean(val);
				if (val) {
					self._centerLabel();
				} else {
					self._removeCenterLabel();
				}
				break;
            case "onlyIcons":
                val = Boolean(val);
                self._setOnlyIcons();
                break;
            case "icons":
                self._setLabel();
                break;
			// M.H. 12 May 2011 - fix bug 74763 - add option for title
			case "title":
				self.setTitle(val);
				break;
			default:
				break;
            }
        },

        _centerLabel: function () {
            var self = this,
                e = self.element,
                l = $('#' + self._id('_lbl')),
				left = (e.width() - l.width()) / 2,
                top = (e.height() - l.height()) / 2;
            l.css({ position: 'relative', top: top + 'px', left: left + 'px' });
        },

        _removeCenterLabel: function () {
            //just removes css properties set from _centerLabel
            var self = this,
                l = $('#' + self._id('_lbl'));

            if (l.length > 0) {
                l.css({ position: '', top: '', left: '' });
            }
        },

        _dettachEvents: function () {
            var self = this, e = self.element;

            this._attached = false;
            e.unbind(this._events);
            return;
        },

        /* Event Functions */
        _onMouseOver: function (event) {
            //var self = event.data.self;
			var noCancel;
            if (this.options.disabled === true) {
                return;
            }

			noCancel = this._trigger('mouseover', event);

			if (noCancel) {
				this.element.addClass(this.options.css.buttonHoverClasses);
			}
        },

        _onMouseOut: function (event) {
            var self = this, e = self.element, o = this.options, noCancel;
            if (o.disabled === true) {
                return;
            }
			noCancel = self._trigger('mouseout', event);

			if (noCancel) {
				e.removeClass(o.css.buttonHoverClasses);
			}
        },

        _onClick: function (event) {
            var e = this.element, self = this, o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }

			noCancel = self._trigger('click', event);
			if (noCancel) {
				this.element.removeClass(o.css.buttonHoverClasses);
				//if element is link and is not a
				if (self._isRedirect() === true && e.is('a') === false) {
					if (o.link.target === '_blank') {
						window.open(o.link.href);
					} else {
						window.location = o.link.href;
					}
				}
			}
        },

        _onMouseDown: function (event) {
            var e = this.element, o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }

			noCancel = this._trigger('mousedown', event);
			if (noCancel) {
				e.removeClass(o.css.buttonHoverClasses);
				e.addClass(o.css.buttonActiveClasses);
			}
        },

        _onMouseUp: function (event) {
            var o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }
			noCancel = this._trigger('mouseup', event);

			if (noCancel) {
				this.element.removeClass(o.css.buttonHoverClasses);
				// M.H. 15 March 2012 Fix for bug #104916
				this.element.removeClass(o.css.buttonActiveClasses);
            }
        },

        _onFocus: function (event) {
            var o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }
			noCancel = this._trigger('focus', event);

			if (noCancel) {
				this.element.addClass(o.css.buttonFocusClasses);
            }
        },

        _onBlur: function (event) {
            var o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }
			noCancel = this._trigger('blur', event);

			if (noCancel) {
				this.element.removeClass(o.css.buttonActiveClasses);
				this.element.removeClass(o.css.buttonFocusClasses);
            }
        },

		// M.H. 22 Nov. 2011 Fix for bug 84440
		_onKeyDown: function (event) {
			var o = this.options;

            if (o.disabled === true) {
                return;
            }
			this._trigger('keydown', event);
		},

        _attachButtonEvents: function () {
            var self = this,
                e = self.element;

            //already attached - we should not attached events twice
            if (this._attached === true) {
                return;
            }
            this._attached = true;
            //e.bind('mouseover', {self: self}, self._onMouseOver)
            this._events = {
                mouseover: function (e) {
					self._onMouseOver(e, self);
				},
                click: function (e) {
					self._onClick(e);
				},
                mouseout: function (e) {
					self._onMouseOut(e);
				},
                mousedown: function (e) {
					self._onMouseDown(e);
				},
                mouseup: function (e) {
					self._onMouseUp(e);
				},
                focus: function (e) {
					self._onFocus(e);
				},
                blur: function (e) {
					self._onBlur(e);
				},
				// M.H. 22 Nov. 2011 Fix for bug 84440
				keydown: function (e) {
					self._onKeyDown(e);
				}
            };
            e.bind(this._events);
        },

        /************** Helper Functions *******************/
        _isSetPrimaryIcon: function () {
            var primary = this.options.icons.primary, isSet = false;

            if (primary !== undefined && primary !== null) {
                isSet = true;
            }

            return isSet;
        },

        _isSetSecondaryIcon: function () {
            var secondary = this.options.icons.secondary, isSet = false;

            if (secondary !== undefined && secondary !== null) {
                isSet = true;
            }

            return isSet;
        },

        _setAttribute: function (e, attr, attrName) {
            if (attr !== undefined && attr !== '' && attr !== null) {
                e.attr(attrName, attr);
            } else {
                e.removeAttr(attrName);
            }
        },

        /************** //Helper Functions *******************/

        destroy: function () {
            this._dettachEvents();
            this._rollbackInitValues();

            $.Widget.prototype.destroy.apply(this, arguments);
        },


        /**************************** Function which cache and rollback element style - need for destroy function  ***************************************/
        _getInitValues: function () {
            //cache all properties 
            // on destroy the widget will rollback this settings
            var e = this.element;

            this._innerHTML = e.html();
            this._cssClasses = e.attr('class');
            this._role = e.attr('role');

            // if e is anchor
            this._href = e.attr('href');
            this._title = e.attr('title');
            this._target = e.attr('target');

            this._width = e.attr('width');
            this._height = e.attr('height');
            this._disabled = e.attr('disabled');

            this._value = e.val();//in case elemen is input type="button|submit|"
        },

        _rollbackInitValues: function () {
            var e = this.element;
            e.html(this._innerHTML);

            if (e.is('a')) {
                this._setAttribute(e, this._href, 'href');

                this._setAttribute(e, this._target, 'target');
            } else if (e.is('input')) {
                e.val(this._value);
            }

            this._setAttribute(e, this._title, 'title');

            this._setAttribute(e, this._width, 'width');
            this._setAttribute(e, this._height, 'height');

            this._setAttribute(e, this._cssClasses, 'class');
            this._setAttribute(e, this._role, 'role');
            this._setAttribute(e, this._disabled, 'disabled');
        }
    });
    $.extend($.ui.igButton, { version: '12.2.20122.1021' });

	$.widget("ui.igTooltip", {
		css: {
			baseClasses: "ui-widget ui-igtooltip ui-igplayer-tooltip",
			arrowImageBaseClass: "ui-igtooltip-arrow-"
		},

		options: {
			text: '',
			arrowLocation: 'top'
		},

		_setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
			switch (key) {
			case 'text':
				$('div.ui-widget-content', this.element).html(value);
				break;
			case 'arrowLocation':
				$('div', this.element).remove(); // destroy tool tip and render new one.
				this._renderTooltip();
				break;
			}
		},

		_create: function () {
			if (this.element.is('div')) {
				this._renderTooltip();
				this.element.addClass(this.css.baseClasses);
			}
		},

		_renderTooltip: function () {
			switch (this.options.arrowLocation) {
			case 'top':
				this._createArrowDiv();
				this._createContentDiv();
				break;
			case 'bottom':
				this._createContentDiv();
				this._createArrowDiv();
				break;
			case 'left':
				break;
			case 'right':
				break;
			}
		},

		_createContentDiv: function () {
			var t = (this.options.text && this.options.text.length > 0) ? this.options.text : '';
			$('<div class="ui-widget-content ui-corner-all">' + t + '</div>').appendTo(this.element);
		},

		_createArrowDiv: function () {
			$('<div class="' + this.css.arrowImageBaseClass + this.options.arrowLocation + '"></div>').appendTo(this.element);
		},

		destroy: function () {
			this.element.children().remove();
			this.element.removeClass(this.css.baseClasses);
		}
    });
    $.extend($.ui.igTooltip, {version: '12.2.20122.1021'});
	$.widget("ui.igToolbar", {
		options: {
			height: null,
			width: null,
			allowCollapsing: true,
			collapseButtonIcon: "ui-igbutton-collapsed",
			expandButtonIcon: "ui-igbutton-expanded",
			name: '',
			displayName: '',
			items: [],
			expanded: true
		},
		events: {
			toolbarButtonClick: "toolbarButtonClick",
			toolbarComboOpening: "toolbarComboOpening",
			toolbarComboSelected: "toolbarComboSelected",
			toolbarMouseDown: "toolbarMouseDown",
			toolbarCustomItemClick: "toolbarCustomItemClick",
			itemRemoved: "itemRemoved",
			itemAdded: "itemAdded",
			collapsing: "collapsing",
			collapsed: "collapsed",
			expanding: "expanding",
			expanded: "expanded",
			itemDisable: "itemDisable",
			itemEnabled: "itemEnabled"
		},
		css: {
			toolbarWidget: "ui-widget ui-widget-content ui-igtoolbar ui-corner-all",
			toolbarWrapperConteiner: "ui-widget ui-widget-content ui-igtoolbar ui-corner-all",
			toolbarCollapsedButton: "ui-state-default ui-igbutton-all-caps",
			igToolbarSeparator: "ig-toolbar-separator ui-widget-content"
		},
		_id: function (id) {
			return this.element[0].id + id;
		},

		widget: function () {
			return this.element;
		},
		_create: function () {
			this._render();
			this._createItems();
		},
		_init: function () {
			this._attachEvents();
			if (!this.options.expanded) {
				this.buttonsList.hide();
				this.collapseBtn.igToolbarButton("toggle")
					.children(":first")
					.switchClass(this.options.collapseButtonIcon, this.options.expandButtonIcon);
			}
			// this._width = this.element.height() + this.buttonsList.width();
			this._width = this.collapseBtn.outerWidth(true) + this.buttonsList.width();
			this._height = this.element.height();
		},
		_render: function () {
			var o = this.options;

			this.element.addClass(this.css.toolbarWidget);
			this.element
				.width(this.options.width)
				.height(this.options.height);

			this.collapseBtn = $('<div tabIndex="0" id="' + this._id('_collapseButton') + '"></div>')
				.appendTo(this.element).igToolbarButton({
					"onlyIcons": true,
					"labelText": "&nbsp;",
					"title": $.ig.HtmlEditor.locale.collapseButtonTitle  + ' ' + this.options.displayName,
					"icons": {
						"primary": o.collapseButtonIcon
					}
				});

			this.toolbarBody = this.element.find('#' + this._id('_toolbar'));

			this.buttonsList = $('<span id="' + this._id('_toolbar_buttons') + '" style="display:inline-block"></span>')
				.appendTo(this.element);
		},
		_onCollapse: function (e) {
			var noCancel, event, cancelableEvent,
				o = this.options, width,
				self = this,
				visibility,
				opacity;

			if (!o.allowCollapsing) {
				return;
			}
			if (o.expanded) {
				event = "collapsed";
				cancelableEvent = "collapsing";
				o.expanded = false;
				width = this.element.height();
				this.collapseBtn.attr('title', $.ig.HtmlEditor.locale.expandButtonTitle + ' ' + this.options.displayName).children(":first").switchClass(this.options.collapseButtonIcon, this.options.expandButtonIcon);
				visibility = "hidden";
				opacity = "0.0";
			} else {
				event = "expanded";
				cancelableEvent = "expanding";
				o.expanded = true;
				width = this._width;
				this.buttonsList.show();
				this.collapseBtn.attr('title', $.ig.HtmlEditor.locale.collapseButtonTitle + ' ' + this.options.displayName).children(":first").switchClass(this.options.expandButtonIcon, this.options.collapseButtonIcon);
				visibility = "visible";
				opacity = "1";
			}

			e.stopPropagation();
			//TODO: toolbar: {} toolbar object describing the buttons in it, the actions, etc. ????
			noCancel = this._trigger(this.events[cancelableEvent], e, {owner: this, toolbarElement: this.element, toolbar: {}});
			if (noCancel) {
				this.element.css({overflow: "hidden"});
				this.element.animate({width: width}, 300, null, function () {
					if (!o.expanded) {
						self.buttonsList.hide();
					}
					if (document.documentMode === 7) {
						self.buttonsList.attr("style", "visibility: " + visibility + " !important;");
					}
					self._trigger(self.events[event], e, {owner: self, toolbarElement: self.element, toolbar: {}});
				});
			}
		},
		_setOption: function (name, value) {
			$.Widget.prototype._setOption.apply(this, arguments);

			switch (name) {
			case 'allowCollapsing':
				this.options.allowCollapsing = value;
				break;
			// case 'collapseButtonIcon':
				// this._setCollapseExpandButtonIcon();
				// break;
			case 'items':
				this._updateItems(value);
				break;
			}
		},
		_isSelectedAction: function (el, props, itemOptionObj) {
			if (props.value) {
				el.addClass("ui-state-active");
			}
		},
		_tooltipAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.title = props.value;
			} else {
				el.igToolbarButton("option", "title", props.value);
			}
		},
		_buttonIconAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.icons = {primary: props.value};
			} else {
				el.igToolbarButton("option", "icons", {primary: props.value});
			}
		},
		_comboDataSourceAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.dataSource = props.value;
			} else {
				el.igCombo("option", "dataSource", props.value);
			}
		},
		_comboWidthAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.width = props.value;
			} else {
				el.igCombo("option", "width", props.value);
			}
		},
		_comboHeightAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.height = props.value;
			} else {
				el.igCombo("option", "height", props.value);
			}
		},
		_spltBtnTooltipAction: function (el, props, itemOptionObj) {

		},
		_comboSelectedItem: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.selectedItems = [{value:  props.value}];
			} else {
				el.igCombo("option", "selectedItems", [{value:  props.value}]);
			}
		},
		_spltButtonColorAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.defaultColor = props.value;
			} else {
				el.igColorPickerSplitButton("option", "defaultColor", props.value);
			}
		},
		_comboDropDownListWidth: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.dropDownWidth = props.value;
			} else {
				el.igCombo("option", "dropDownWidth", props.value);
			}
		},
		_createItems: function () {
			var o = this.options,
				i,
				self = this,
				itemProps = {},
				newItem,
				tbItemsHash = {
					button: "igToolbarButton",
					combo: "igCombo",
					splitButton: "igSplitButton",
					splitButtonColor: "igColorPickerSplitButton"
				},
				tbItemsPropsTraversing = function (key, property) {
					var scope = o.items[i].scope || self;
					if (property.action !== undefined && $.isFunction(scope[property.action])) {
						scope[property.action](newItem, property, itemProps);
						return;
					}
					itemProps[key] = property.value;
				};
			this.buttonsList.empty();
			for (i = 0; i < o.items.length; i++) {
				itemProps = {};
				newItem = (o.items[i].callbackRenderer() || $('<div tabIndex="0"></div>'))
					.attr("id", this._id("_item_" + o.items[i].name)).appendTo(this.buttonsList);

				$.each(o.items[i].getProperties(), tbItemsPropsTraversing);

				if (tbItemsHash.hasOwnProperty(o.items[i].type)) {
					newItem[tbItemsHash[o.items[i].type]](itemProps);
					continue;
				}
				// newItem.appendTo(this.buttonsList);
			}
		},
		_updateItems: function (items) {
			var o = this.options,
				updProps,
				i,
				j,
				scope,
				el,
				key; //TODO Check this!!

			for (i = 0; i < items.length; i++) {
				updProps = items[i].getUpdatedProperties();
				el = this.getItem(items[i].name);
				scope = o.items[i].scope || this;
				for (j = 0; j < updProps.length; j++) {
					if (updProps[j].action !== undefined && $.isFunction(scope[updProps[j].action])) {
						scope[updProps[j].action](el, updProps[j]);
						continue;
					}
					if (items[i] instanceof $.ig.igToolbarButtonDescriptor) {
						el.igToolbarButton("option", key, updProps[j]);
					}

					if (o.items[i] instanceof $.ig.igToolbarComboDescriptor) {
						el.igCombo("option", key, updProps[j]);
					}
				}
			}
		},
		_getWidgetType: function (el) {
			var data, i;
			if (el === undefined) {
				return;
			}
			data = el.data();
			for (i in data) {
				if (data.hasOwnProperty(i) && data[i].widgetName) {
					return data[i].widgetName;
				}
			}
		},
		_isWidgetSupported: function (name) {
			var i;
			for (i = 0; i < this.supportedWidgets.length; i++) {
				if (this.supportedWidgets[i].name === name) {
					return true;
				}
			}
		},
		_attachEvents: function () {
			var toolbarItemsEvents = "igtoolbarbuttonclick igsplitbuttonclick igcolorpickersplitbuttoncolorselected";

			this.element.delegate(".ui-widget", toolbarItemsEvents, $.proxy(this._onToolbarItemInteraction, this));
			//Here we bind to igCombo items on click.
			this.element.delegate(":ui-igCombo", "click", $.proxy(this._onComboListItemClick, this));
			this.collapseBtn.bind("igtoolbarbuttonclick", $.proxy(this._onCollapse, this));
		},
		_onToolbarItemInteraction: function (e, ui) {
			var selectedItemValue,
				targetWidget = $(e.target).parentsUntil(":ui-igToolbar").eq(-2),
				selectedItemIndex,
				triggeredEvent,
				o = this.options;
			// B.C. 5/22/2012. Bug #112445. Fixes the difference between e.target in the different versions of jQuery.
			if (targetWidget.length === 0) {
				targetWidget = $(e.target);
			}
			selectedItemIndex = this.buttonsList.children().index(targetWidget);
			switch (e.type) {
			case 'igcomboselectionchanged':
				selectedItemValue = ui.items[0].value;
				triggeredEvent = this.events.toolbarComboSelected;
				break;
			case 'igtoolbarbuttonclick':
				triggeredEvent = this.events.toolbarButtonClick;
				break;
			default:
				triggeredEvent = this.events.toolbarCustomItemClick;
				selectedItemValue = ui.value;
				break;
			}

			this._trigger(triggeredEvent, e, {
				name: ui.name || o.items[selectedItemIndex].name,
				value: selectedItemValue,
				handler: o.items[selectedItemIndex].handler.call(o.items[selectedItemIndex]),
				scope: o.items[selectedItemIndex].getProperty("scope"),
				itemProperties: o.items[selectedItemIndex].getProperties(),
				toolbarItem: targetWidget,
				toolbarName: o.name
			});
		},
		_onComboListItemClick: function (e) {
			var target = $(e.target), dataSource, selectedItemIndex, selectedItem, toolbarItemIndex, toolbarItem;
			if (!target.hasClass("ui-igcombo-listitem") && !target.parent().hasClass("ui-igcombo-listitem")) {
				return;
			}
			if (target.hasClass("ui-igcombo-listitem")) {
				selectedItem = target;
			} else if (target.parent().hasClass("ui-igcombo-listitem")) {
				selectedItem = target.parent();
			}

			selectedItemIndex = selectedItem.data("id") - 100;
			dataSource = $(e.currentTarget).igCombo("option", "dataSource");
			toolbarItemIndex = this.buttonsList.children().index($(e.currentTarget));
			toolbarItem = this.options.items[toolbarItemIndex];
			this._trigger(this.events.toolbarComboSelected, e, {
				name: toolbarItem.name,
				value: dataSource[selectedItemIndex].text,
				handler: toolbarItem.handler.call(toolbarItem),
				scope: toolbarItem.getProperty("scope"),
				itemProperties: toolbarItem.getProperties(),
				toolbarItem: $(e.currentTarget).data("igCombo"),
				toolbarName: this.options.name
			});
		},
		getItem: function (index) {
			var result;
			if (!isNaN(parseInt(index, 10))) {
				return this.buttonsList.eq(index);
			}
			if (typeof index === "string") {
				result = this.buttonsList.find('#' + this._id("_item_" + index));
				if (result.length) {
					return result;
				}
			}
		},
		addItem: function (item) {
			if (this._isWidgetSupported(item.type)) {
				this.options.items.push(item);
				this._createItems();
				this._trigger(this.events.itemAdded);
			}
		},
		removeItem: function (index) {
			this.buttonsList.eq(index).remove();
			this._trigger(this.events.itemremoved);
		},
		disableItem: function (index, disabled) {
			var item = this.getItem(index),
				widgetType = this._getWidgetType(item);
			if (widgetType) {
				item[this._getWidgetType(item)]("option", "disabled", disabled);
				this._trigger(this.events.itemDisable, {isDisabled: disabled});
			}
		},
		activateItem: function (index, activated) {
			var item = this.getItem(index),
				action = (activated) ? item.addClass : item.removeClass;

			action.call(this, "ui-state-active");
			item.igToolbarButton("options", "isSelected", activated);
			this._trigger(this.events.itemActivated, {isActivated: activated});
		},
		deactivateAll: function () {
			this.buttonsList
				.find(".ui-state-active")
				.removeClass("ui-state-active")
				.igToolbarButton("option", "isSelected", false);
		},

		_setCollapseExpandButtonIcon: function () {
			if (this.options.collapseButtonIcon) {
				this.collapseBtn.switchClass('ui-icon-triangle-1-w', this.options.collapseButtonIcon);
			}
		},
		destroy: function () {
			$.Widget.prototype.destroy.apply(this, arguments);

			this.element.undelegate();
			this.element.unbind();
			this.element.removeClass(this.css.toolbarWrapperConteiner)
				.find("#" + this._id("_toolbar")).removeClass(this.css.toolbarWidget).end()
				.find("#" + this._id("_collapseButton")).removeClass(this.css.toolbarCollapsedButton).end()
				.find(":ui-igToolbarButton").igToolbarButton("destroy").end()
				.find(":ui-igCombo").igCombo("destroy").end()
				.find(":ui-igSplitButton").igSplitButton("destroy").end()
				.find(":ui-igColorPickerSplitButton").igColorPickerSplitButton("destroy");
			delete this.buttonsList;
			delete this.collapseBtn;
			delete this.toolbarBody;
		}
	});
	$.ig = $.ig || {};
	$.ig.igToolbarItemBaseDescriptor = Class.extend({
		settings: {
			width: null,
			height: null,
			props: {
				scope: {
					value: null
				}
			}
		},
		_updatedProperties: [],
		init: function (item) {
			this.settings = $.extend(true, {}, this.settings, item);
			this.name = item.name;
			this.type = item.type;
			if (this.settings.scope) {
				this.settings.props.scope = this.settings.scope;
			}
		},
		updateProperty: function (name, value) {
			this.settings.props[name].value = value;
			this._updatedProperties.push(this.settings.props[name]);
		},
		getProperty: function (name) {
			return this.settings.props[name];
		},
		getUpdatedProperties: function () {
			return this._updatedProperties;
		},
		getProperties: function () {
			return this.settings.props;
		},
		callbackRenderer: function () {
			if (this.settings.callbackRenderer && $.isFunction(this.settings.callbackRenderer)) {
				return this.settings.callbackRenderer();
			}
		},
		handler: function () {
			return this.settings.handler;
		}
	});
	$.ig.igToolbarButtonDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
		settings: {
			props: {
				onlyIcons: {
					value: true
				},
				labelText: {
					value: "&nbsp;"
				}
			}
		},
		init: function (item) {
			this._super(item);
		}
	});
	$.ig.igToolbarSplitButtonDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
		settings: {
			props: {
				items: []
			}
		},
		init: function (item) {
			this._super(item);
		}
	});
	$.ig.igToolbarComboDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
		settings: {
			props: {
				valueKey: {
					value: 'text'
				},
				textKey: {
					value: 'value'
				},
				enableCheckboxes: {
					value: false
				},
				dropDownOnFocus: {
					value: true
				},
				selectedItems: {
					value: [{index: 0}]
				},
				enableClearButton: {
					value: false
				},
				dataSource: {
					value: null
				},
				mode: {
					value: "dropdown"
				},
				dropDownAsChild: {
					value: true
				},
				focusOnSelect: {
					value: false
				}
			}
		},
		init: function (item) {
			this._super(item);
			if (this.settings.dataSource) {
				this.settings.props.dataSource.value = this.settings.dataSource;
			}
		}
	});
	$.widget("ui.igToolbarButton", $.ui.igButton, {
		options: {
			allowToggling: true,
			isSelected: false
		},
		ENTER: 13,
		_setOption: function (name, value) {
			$.ui.igButton.prototype._setOption.apply(this, arguments);

			switch (name) {
			case "allowToggling":
				this._setToggling(value);
				break;
			case "isSelected":
				this.options.isSelected = value;
				break;
			}
		},
		_init: function () {
			var self = this,
				o = this.options;
			$.ui.igButton.prototype._init.apply(this);
			this._isToggled = false;
			this._setToggling(this.options.allowToggling);
			this.element.bind("keypress", $.proxy(this._onEnterKey, this));
			this.element.unbind("blur");
			this.element.bind("blur", function (e) {
				self.element.removeClass(o.css.buttonFocusClasses);
			});
		},
		_setToggling: function (value) {
			var o = this.options,
				self = this;
			o.allowToggling = value;
			if (o.allowToggling && this.element.data("events").mouseup) {
				this.element.unbind("mouseup");
				this.element.bind("click", function () {
					if (o.isSelected) {
						self.element.removeClass(o.css.buttonActiveClasses);
					}
					self.element.removeClass(o.css.buttonFocusClasses);
					o.isSelected = !o.isSelected;
				});
			} else if (!o.allowToggling && !this.element.data("events").mouseup) {
				this.element.bind("mouseup", this._events.mouseup);
				this.element.unbind("mousedown");
				this.element.bind("mousedown", this._events.mousedown);
			}
		},
		//TODO: Is there any need from this function?
		toggle: function () {
			var self = this, e = self.element, o = this.options;
			if (o.disabled === true || o.allowToggling === false) {
				return;
			}
			o.isSelected = !o.isSelected;
			e.toggleClass(o.css.buttonActiveClasses);
		},
		_onEnterKey: function (e) {
			if (e.keyCode !== this.ENTER) {
				return;
			}
			this.element.mousedown();
		},
		destroy: function () {
			$.ui.igButton.prototype.destroy.call(this);
			this.element.unbind();
			this.element.removeClass("");
		}
	});
	/*
		uiMouseWrapper that exposes the ui.mouse widget's functionality with events
	*/
	$.widget("ui.mouseWrapper", $.ui.mouse, {
		options: {
			cancel: ':input,option',
			distance: 1,
			delay: 0
		},
		events: {
			start: "start",
			drag: "drag",
			stop: "stop",
			capture: "capture"
		},
		_create: function () {
			var self = this,
				originalMouseDown = this._mouseDown;

			if ($.browser.msie && $.browser.version.slice(0, 1) === '9') {
				//A.Y. required to fix bug 92472. 
				//Which is also a know jQuery UI 1.8.16 bug that is reproducable in Sortable plugin. (http://bugs.jqueryui.com/ticket/7519)

				//overwrite original _mouseDown with our function
				this._mouseDown = function (event) {
					var originalPreventDefault = event.preventDefault,
						result;

					//replace the event's preventDefault with an empty function
					//making it imposible to prevent the default
					event.preventDefault = function () { };

					//apply the "original this" and the arguments to the original _mouseDown
					result = originalMouseDown.apply(self, [event]);

					//return the event to its original state
					event.preventDefault = originalPreventDefault;

					return result;
				};
			}

			this._mouseInit();
		},
		destroy: function () {
			this._mouseDestroy();
			return this;
		},
		_mouseStart: function (event) {
			return this._trigger(this.events.start, event);
		},
		_mouseDrag: function (event) {
			return this._trigger(this.events.drag, event);
		},
		_mouseStop: function (event) {
			return this._trigger(this.events.stop, event);
		},
		_mouseCapture: function (event) {
			return this._trigger(this.events.capture, event);
		}
	});
	$.widget("ui.igPopover", {
		css: {
			baseClasses: "ui-widget ui-igtooltip",
			arrowImageBaseClass: "ui-igtooltip-arrow-",
			closeButtonClass: "ui-icon ui-icon-close"
		},
		options: {
			/* type="bool" controls whether the popover renders with a header or not */
			renderHeader: false,
			/* type="bool" controls whether the popover renders a functional close button */
			renderCloseButton: true,
			/* type="bool" controls whether the popover will close on blur or not */
			closeOnBlur: true,
			/* type="auto|left|right|top|bottom" controls the direction in which the control shows relative to the target element. 
			"auto" lets the control show on the side where enough space is available with the following priority top > bottom > right > left.
			*/
			direction: "auto",
			/* type="auto|balanced|start|end" controls the position of the tooltip according to the target element. "auto" lets
			the control choose a position depending on available space with the following priority balanced > end > start.
			*/
			position: "auto",
			/* type="int" defines width for the popover. leave null for auto. */
			width: null,
			/* type="int" defines height for the popover. leave null for auto. */
			height: null,
			/* type="int|text" defines width the popover won't exceed even if no specific one is set. */
			defaultMaxWidth: 200,
			/* type="object" defines a target for the popover control. if left null the user needs to show and hide the popover manually. */
			target: null,
			/* sets the time popover fades in and out when showing/hiding */
			fadeTimespan: 150
		},
		events: {
			/* cancel="true" Event fired before popover is shown.
			Function takes arguments evt and ui.
			Use ui.element to get the element the popover will show for.
			Use ui.content to get or set the content to be shown as a string.
			Use ui.popover to get the popover element showing.
			*/
			popoverShowing: "popoverShowing",
			/* Event fired after popover is shown.
			Function takes arguments evt and ui.
			Use ui.element to get the element the popover showed for.
			Use ui.content to get the content that was shown as a string.
			Use ui.popover to get the popover element shown.
			*/
			popoverShown: "popoverShown",
			/* cancel="true" Event fired before popover is hidden.
			Function takes arguments evt and ui.
			Use ui.element to get the element the popover will hide for.
			Use ui.content to get the current content displayed in the popover as a string.
			Use ui.popover to get the popover element hiding.
			*/
			popoverHiding: "popoverHiding",
			/* Event fired after popover is hidden.
			Function takes arguments evt and ui.
			Use ui.element to get the element the popover hid for.
			Use ui.content to get the current content displayed in the popover as a string.
			Use ui.popover to get the popover element hiding.
			*/
			popoverHidden: "popoverHidden"
		},
		_create: function () {
			this._priorityDir = [ "top", "bottom", "right", "left" ];
			this._arrowDir = [ "bottom", "top", "left", "right" ];
			this._positions = [ "balanced", "start", "end" ];
			this._directionIndex = -1;
			this._positionIndex = -1;
			this._forced = this.options.direction !== "auto" && this.options.position !== "auto";
		},
		_createWidget: function (options, element) {
			$.Widget.prototype._createWidget.apply(this, arguments);
			this.element = $(element);
			if (element && element.nodeType !== undefined) {
				this._renderPopover();
				this._attachEventsToTarget();
			}
			if (this.options.direction !== "auto" || this.options.position !== "auto") {
				this._getPrioritiesIndex();
			}
		},
		_setOption: function (key, value) {
			switch (key) {
			case "direction":
				this.options.direction = value;
				if (this.options.direction !== "auto") {
					this._getPrioritiesIndex();
				}
				this._forced = this.options.direction !== "auto" && this.options.position !== "auto";
				break;
			case "position":
				this.options.position = value;
				if (this.options.position !== "auto") {
					this._getPrioritiesIndex();
				}
				this._forced = this.options.direction !== "auto" && this.options.position !== "auto";
				break;
			case "target":
				this._detachEventsFromTarget();
				this.options.target = value;
				this._attachEventsToTarget();
				break;
			case "fadeTimespan":
				if (typeof value === "number") {
					this.options.fadeTimespan = value;
				}
				break;
			case "renderHeader":
			case "renderCloseButton":
			case "closeOnBlur":
			case "width":
			case "height":
			case "defaultMaxWidth":
				throw new Error($.ig.SharedLocale.locale.popoverOptionChangeNotSupported + ' ' + key);
			}
		},
		destroy:  function () {
			/* Destroys the popover widget.
			*/
			this._detachEventsFromTarget();
			$('#' + this.id() + "_popover").remove();
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		id: function () {
			/* returns the ID of the element the popover is attached to
				returnType="string"
			*/
			return this.element[0].id;
		},
		container: function () {
			/* returns the container for the popover contents
				returnType="object"
			*/
			return $("#" + this.id() + "_popover_contentInner");
		},
		show: function (trg, content) {
			/* shows the popover for the specified target
				paramType="dom" optional="true" The element to show popover for.
				paramType="string" optional="true" The string to set for the popover to show.
			*/
			var target = trg || this.options.target;
			if (content) {
				this._setNewContent(content);
			}
			this._openPopover(target);
		},
		hide: function () {
			/* hides the popover for the specified target */
			this._closePopover();
		},
		getContent: function () {
			/* gets the currently set content for the popover container
				returnType="string" The popover content.
			*/
			return $("#" + this.id() + "_popover_contentInner").html();
		},
		setContent: function (newCnt) {
			/* gets the currently set content for the popover container
				paramType="string" The popover content to set.
			*/
			if (typeof newCnt === 'string') {
				this._setNewContent(newCnt);
			}
		},
		_renderPopover: function () {
			this.popover = $('<div></div>')
				.attr('id', this.id() + "_popover")
				.css({
					'display': 'none',
					'white-space': 'normal',
					'word-wrap': 'break-word',
					'position': 'absolute'
				})
				.addClass(this.css.baseClasses)
				.appendTo(this.element);
			this._createContentDiv();
		},
		_createContentDiv: function () {
			var cnt;
			cnt = $('<div></div>')
				.attr('id', this.id() + "_popover_contentFrame")
				.css('position', 'relative')
				.css('max-width', this.options.defaultMaxWidth)
				.addClass("ui-widget-content ui-corner-all")
				.appendTo(this.popover);
			if (this.options.renderCloseButton === true) {
				$('<div></div>')
					.attr('id', this.id() + "_popover_closeBtn")
					.addClass(this.css.closeButtonClass)
					.css({
						"display": "block",
						"float": "right",
						"position": "relative",
						"top": "-5px",
						"left": "5px"
					})
					.bind('click.popover', $.proxy(this._closeBtnClick, this))
					.appendTo(cnt);
			}
			$('<div></div>')
				.attr('id', this.id() + "_popover_contentInner")
				.css("position", "relative")
				.appendTo(cnt);
			$('<div></div>')
				.css("clear", "both")
				.appendTo(cnt);
		},
		_updateArrowDiv: function (nDir, idx) {
			var arrowDiv = $("#" + this.id() + "_popover_arrow"), conDiv = $("#" + this.id() + "_popover_contentFrame"), dims;
			if (arrowDiv.length === 0) {
				arrowDiv = $('<div></div>')
					.attr('id', this.id() + "_popover_arrow")
					.attr('position', 'relative')
					.addClass(this.css.arrowImageBaseClass + this._arrowDir[idx])
					.appendTo(this.popover);
			} else {
				arrowDiv
					.removeClass()
					.addClass(this.css.arrowImageBaseClass + this._arrowDir[idx]);
			}
			dims = this._getHiddenElementsDimensions([arrowDiv, conDiv]);
			// TODO: Arrow should be positioned according to target, not
			// according to content div.
			switch (nDir) {
			case "top":
				conDiv.css({
					'left': '',
					'top': '',
					'float': ''
				});
				arrowDiv.css({
					'left': '',
					'top': '',
					'float': ''
				});
				break;
			case "bottom":
				conDiv.css({
					'left': '',
					'top': dims[0].height,
					'float': ''
				});
				arrowDiv.css({
					'left': '',
					'top': dims[1].height * -1,
					'float': ''
				});
				break;
			case "left":
				conDiv.css({
					'left': '',
					'top': '',
					'float': 'left'
				});
				arrowDiv.css({
					'left': '',
					'top': '',
					'float': 'left'
				});
				break;
			case "right":
				conDiv.css({
					'left': dims[0].width,
					'top': '',
					'float': 'left'
				});
				arrowDiv.css({
					'left': dims[1].width * -1,
					'top': '',
					'float': 'left'
				});
				break;
			}
			this.oDir = nDir;
		},
		_targetMouseLeave: function () {
			if (this.options.closeOnBlur === true) {
				this._closePopover();
			}
		},
		_targetMouseMove: function () {
			this._openPopover($(this.options.target));
		},
		_closeBtnClick: function (event, ui) {
			this._closePopover();
			event.stopPropagation();
		},
		_attachEventsToTarget: function () {
			var t = this.options.target;
			// K.D. July 18th, 2012 Bug #117374 The HTMLElement object is natively not defined in IE <= 8
			// Abstain from referring to "natively" defined objects as we're not sure in what cases they would
			// actually be undefined.
			if (t && HTMLElement !== undefined && t instanceof HTMLElement) {
				$(t).unbind('mouseenter.popover').bind('mouseenter.popover', $.proxy(this._targetMouseMove, this));
				$(t).unbind('mouseleave.popover').bind('mouseleave.popover', $.proxy(this._targetMouseLeave, this));
			}
		},
		_detachEventsFromTarget: function () {
			var t = this.options.target;
			// K.D. July 18th, 2012 Bug #117374 The HTMLElement object is natively not defined in IE <= 8
			// Abstain from referring to "natively" defined objects as we're not sure in what cases they would
			// actually be undefined.
			if (t && HTMLElement !== undefined && t instanceof HTMLElement) {
				$(t).unbind('popover');
			}
		},
		_positionPopover: function (trg) {
			var i = 0, fn, fnRes;
			if (this.options.direction === "auto") {
				do {
					this._updateArrowDiv(this._priorityDir[i], i);
					fn = "_" + this._priorityDir[i] + "Position";
					fnRes = this[fn](trg);
					i++;
				} while (fnRes === false && i < this._priorityDir.length);
				if (fnRes === false) {
					/* COULDN'T FIND SPACE ANYWHERE. SHOULD EXCEED SCREEN DIMENSIONS */
					return;
				}
			} else {
				this._updateArrowDiv(this.options.direction, this._directionIndex);
				fn = "_" + this.options.direction + "Position";
				if (!this[fn](trg)) {
					/* THROW ERROR OPTION NOT SUPPORTED */
					return;
				}
			}
		},
		_findProperPosition: function (dir, x, trg) {
			var i = 0, fnRes, y, cDim, cPos, win = $(window), trgFDim, wScroll, tPos;
			if (dir === "left") {
				cPos = "left";
				cDim = "outerWidth";
				wScroll = win.scrollLeft();
			} else {
				cPos = "top";
				cDim = "outerHeight";
				wScroll = win.scrollTop();
			}
			// target element is not fully visible on the screen along the axis we need
			if (trg.offset()[cPos] + trg[cDim]() > wScroll + win[0][cDim]) {
				// we use a redux value to not create the popover outside the screen borders
				trgFDim = win[0][cDim] + wScroll - trg.offset()[cPos];
			} else {
				trgFDim = trg[cDim]();
			}
			if (trg[cDim]() > this.popover[cDim]()) {
				// if the popover is smaller on the side we want to position it it should always get in the middle
				// of the visible area
				y = trg.offset()[cPos] + trgFDim / 2 - this.popover[cDim]() / 2;
				fnRes = dir === "left" ? this._checkCollision(x, y) : this._checkCollision(y, x);
			} else {
				// rotate between possible positions until the tooltip fits or it's clear it won't fit
				if (this.options.position === "auto") {
					do {
						tPos = this._positions[i];
						y = this._getCounterPosition(trg, trgFDim, tPos, cPos, cDim);
						fnRes = dir === "left" ? this._checkCollision(x, y) : this._checkCollision(y, x);
					} while (fnRes === false && ++i < this._positions.length);
				} else {
					y = this._getCounterPosition(trg, trgFDim, this.options.position, cPos, cDim);
					fnRes = dir === "left" ? this._checkCollision(x, y) : this._checkCollision(y, x);
				}
			}
			if (fnRes === true) {
				this._adjustArrowPosition(trg, dir, cPos, cDim);
			}
			return fnRes;
		},
		_getCounterPosition: function (trg, trgFDim, tPos, cPos, cDim) {
			var y;
			switch (tPos) {
			case "balanced":
				y = trg.offset()[cPos] + trgFDim / 2 - this.popover[cDim]() / 2;
				break;
			case "start":
				y = trg.offset()[cPos];
				break;
			case "end":
				y = trg.offset()[cPos] - this.popover[cDim]() + trgFDim;
				break;
			}
			return y;
		},
		_topPosition: function (trg) {
			var top = trg.offset().top - this.popover.outerHeight();
			// finds are proper left position for the tooltip if one exists
			return this._findProperPosition("left", top, trg);
		},
		_bottomPosition: function (trg) {
			var top = trg.offset().top + trg.outerHeight();
			// finds are proper left position for the tooltip if one exists
			return this._findProperPosition("left", top, trg);
		},
		_leftPosition: function (trg) {
			var left = trg.offset().left - this.popover.outerWidth();
			// finds are proper top position for the tooltip if one exists
			return this._findProperPosition("top", left, trg);
		},
		_rightPosition: function (trg) {
			var left = trg.offset().left + trg.outerWidth();
			// finds are proper top position for the tooltip if one exists
			return this._findProperPosition("top", left, trg);
		},
		_checkCollision: function (top, left) {
			var tfullw = this.popover.outerWidth(), tfullh = this.popover.outerHeight(), win = $(window), wh, ww, os;
			ww = win.width() + win.scrollLeft();
			wh = win.height() + win.scrollTop();
			if (left < win.scrollLeft() || left + tfullw > ww || top < win.scrollTop() || top + tfullh > wh) {
				if (this._forced === false) {
					return false;
				}
			}
			os = this._getRelativeOffset();
			this.popover.css({
				'top': top - os.top,
				'left': left - os.left
			});
			return true;
		},
		_getPrioritiesIndex: function () {
			var i;
			if (this.options.direction !== "auto") {
				for (i = 0; i < this._priorityDir.length; i++) {
					if (this.options.direction === this._priorityDir[i]) {
						this._directionIndex = i;
						break;
					}
				}
			}
			if (this.options.position !== "auto") {
				for (i = 0; i < this._positions.length; i++) {
					if (this.options.position === this._positions[i]) {
						this._positionIndex = i;
						break;
					}
				}
			}
		},
		_openPopover: function (trg) {
			var args, noCancel, val = this.getContent();
			args = {
				element: trg,
				content: val,
				popover: this.popover
			};
			noCancel = this._trigger(this.events.popoverShowing, this, args);
			if (noCancel === true) {
				if (args.content !== val && typeof args.content === "string") {
					this._setNewContent(args.content);
				}
				this._positionPopover(trg);
				this._currentTarget = trg;
				this.popover.fadeIn(this.options.fadeTimespan);
				this._trigger(this.events.popoverShown, this, args);
			}
		},
		_closePopover: function () {
			var args, noCancel;
			args = {
				element: this._currentTarget,
				content: this.getContent(),
				popover: this.popover
			};
			noCancel = this._trigger(this.events.popoverHiding, this, args);
			if (noCancel === true) {
				this.popover.fadeOut(this.options.fadeTimespan);
				this._trigger(this.events.popoverHidden, this, args);
			}
		},
		_adjustArrowPosition: function (trg, dir, cPos, cDim) {
			/*var arrow = $("#" + this.id() + "_popover_arrow");
			if (dir === "top") {
				arrow.css({
					"top": 2 * trg.offset()[cPos] + trg[cDim]() / 2 - 2 * this.popover.offset()[cPos]
				});
			} else {
				arrow.css({
					"left": 2 * trg.offset()[cPos] + trg[cDim]() / 2 - 2 * this.popover.offset()[cPos]
				});
			}*/
		},
		_getRelativeOffset: function () {
			var offset = { left: 0, top: 0 }, elem = this.popover;
			while (elem[0] !== null && elem[0] !== undefined && elem[0].nodeName !== "#document") {
				if (elem.css('position') === 'relative') {
					offset.left = elem.offset().left;
					offset.top = elem.offset().top;
					break;
				}
				elem = elem.parent();
			}
			return offset;
		},
		_getHiddenElementsDimensions: function (elArr) {
			var dim = [], i, elem;
			$("#" + this.id() + "_popover").show();
			for (i = 0; i < elArr.length; i++) {
				elem = elArr[i];
				dim.push({
					width: elem.outerWidth(),
					height: elem.outerHeight()
				});
			}
			$("#" + this.id() + "_popover").hide();
			return dim;
		},
		_setNewContent: function (nc) {
			$("#" + this.id() + "_popover_contentInner").html(nc);
		}
	});

	// Expose ig.ui.shared as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase ig.ui.shared is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.ui.shared", ["ig.util", "jquery.ui.core", "jquery.ui.widget"], function () { return $.ui.igLoading; });
	}

}(jQuery));



