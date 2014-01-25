/*!
* Infragistics.Web.ClientUI Dialog localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Dialog) {
	$.ig.Dialog = {
		locale: {
			closeButtonTitle: "Close",
			minimizeButtonTitle: "Minimize",
			maximizeButtonTitle: "Maximize",
			pinButtonTitle: "Pin",
			unpinButtonTitle: "Unpin",
			restoreButtonTitle: "Restore"
		}
	};
}


/*!
* Infragistics.Web.ClientUI Dialog 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.6.1.js
* jqueryui/1.8.11/jquery-ui.js
* Example to use:
*	<script type="text/javascript">
*	$(function () {
*		$("#dialog1").igDialog();
*	});
*	</script>
*	<div id="dialog1"></div>
*/

/*global jQuery, setTimeout, alert, document, window*/
(function ($) {
	var _lastTop, _iframe,
		_visCount = 0,
		_modals = [],
		_lastZ = 0,
		_maxZ = 0,
		CLOSE = 0,
		OPEN = 1,
		MIN = 2,
		MAX = 3,
		PIN = 4,
		UNPIN = 5,
		RESTORE = 6,
		_pos = {
			// default position of dialog
			my: "center",
			at: "center",
			collision: "fit",
			of: window,
			using: function (pos) {
				if (pos.top < 0) {
					pos.top = 0;
				}
				if (pos.left < 0) {
					pos.left = 0;
				}
				var p = $(this).css(pos).offset();
				if (p.top < 0) {
					$(this).css("top", pos.top - p.top);
				}
				if (p.left < 0) {
					$(this).css("left", pos.left - p.left);
				}
			}
		},
		_isSrc = function (elem, src) {
			return elem && src && (elem.has(src).length > 0 || elem[0] === src);
		},
		_notab = function (elem) {
			return elem.attr("zIndex", -1).css("outline", 0).attr("unselectable", "on");
		},
		_toPx = function (elem, css) {
			// returns px value of style attribute
			var val = elem.css(css);
			if (!val) {
				return 0;
			}
			css = parseFloat(val);
			if (val.indexOf("px") > 0) {
				css += 0.7;
			} else if (val.indexOf("em") > 0) {
				css *= 12;
			} else {
				return 0;
			}
			return Math.floor(css);
		},
		_getPadding = function (elem, vert, margin) {
			// returns px value of vertical/horizontal padding and border style attributes
			return _toPx(elem, (margin || "padding") + (vert ? "Top" : "Left")) +
				_toPx(elem, (margin || "padding") + (vert ? "Bottom" : "Right")) +
				_toPx(elem, "border" + (vert ? "Top" : "Left") + "Width") +
				_toPx(elem, "border" + (vert ? "Bottom" : "Right") + "Width");
		},
		_stopEvt = function (e) {
			try {
				e.preventDefault();
				e.stopPropagation();
			} catch (ex) { }
		};
	/*
		igDialog is a widget based on jQuery UI that provides ability to show target element as the content of a dialog.
		Dialog provides common functionality such as ability to hide, show, minimize, maximize, pin and their combinations using
		buttons located in the header of dialog. It also supports modal state and may track focus.
		When igDialog is created, then target element is removed from its original parent and inserted into dynamically created html elements.
		The parent element of dialog can be form element (if target element is a child of that form) or body.
		When igDialog is destroyed, then original target html element is moved back into its original parent including position within original siblings.
		Note: if application uses tabIndex attributes for child elements of dialog-content, then it is not recommended to have mixed values of tabIndexes for
		elements located inside and outside of dialog.
	*/
	$.widget("ui.igDialog", {
		options: {
			/* type="dom" Sets gets jquery DIV object which is used as main container for dialog.
				Notes:
				1. That object is optional and it should not contain any children.
				2. It should not have parent.
				3. It should not contain attributes which might destroy laout or appearance of dialog.
				4. Change of that option is not supported.
			*/
			mainElement: null,
			/* type="opened|closed|minimized|maximized" Sets gets state of dialog.
				Note: when dialog is modal, then pinned and minimized states are not supported, because that will trigger misbehavior.
				opened type="string" Dialog is opened.
				minimized type="string" Dialog is minimized.
				maximized type="string" Dialog is maximized.
				closed type="string" Dialog is closed.
			*/
			state: "opened",
			/* type="bool" Sets gets pinned state of dialog.
				When dialog is pinned, then the html element of dialog is moved to the original container where target element was located and position:absolute is removed.
				Pinned dialog does not support modal state, maximized state and it can not be moved.
				Notes:
				1. If parent element of original target-element is invisible, then pinned dialog becomes invisible as well.
				2. Pinned state is not supported for modal dialog.
			*/
			pinned: false,
			/* type="bool" Sets gets ability to close dialog on Esc key. */
			closeOnEscape: true,
			/* type="bool" Sets gets visibility of close button in header. */
			showCloseButton: true,
			/* type="bool" Sets gets visibility of maximize button in header. */
			showMaximizeButton: false,
			/* type="bool" Sets gets visibility of minimize button in header. */
			showMinimizeButton: false,
			/* type="bool" Sets gets visibility of pin button in header. */
			showPinButton: false,
			/* type="bool" Sets gets ability to automatically pin dialog when dialog was minimized. */
			pinOnMinimized: false,
			/* type="string" Sets gets name of css class which is applied to the SPAN element located on the left side of header. */
			imageClass: null,
			/* type="string" Sets gets text which appears in header of dialog. */
			headerText: null,
			/* type="bool" Sets gets visibility of header. */
			showHeader: true,
			/* type="bool" Sets gets visibility of footer. */
			showFooter: false,
			/* type="string" Sets gets text which appears in footer of dialog. */
			footerText: null,
			/* type="string" Sets gets name of css class which is applied to the main DIV element of dialog. */
			dialogClass: null,
			/* type="object" Sets gets container html element for dialog.
				That can be reference to html element, jquery selector or jquery object.
				By default the parent form of original target element is used. If form is not found, then body is used.
				Note: If the "position" of container is not set or it is "static", then position is set to "relative".
			*/
			container: null,
			/* type="number" Sets gets initial height of dialog in pixels for normal state.
				Besides numeric values, following units are supported: "px", "em" and "%".
				In case of "%", the size of browser window is used and it has effect only on open action. */
			height: null,
			/* type="number" Sets gets initial width of dialog in pixels for normal state.
				Besides numeric values, following units are supported: "px", "em" and "%".
				In case of "%", the size of browser window is used and it has effect only on open action. */
			width: 300,
			/* type="number" Sets gets minimal height of dialog in normal state. */
			minHeight: 100,
			/* type="number" Sets gets minimal width of dialog in normal state. */
			minWidth: 150,
			/* type="number" Sets gets maximal height of dialog in normal state. Note: that option has effect only while resizing dialog by end user. */
			maxHeight: null,
			/* type="number" Sets gets maximal width of dialog in normal state. Note: that option has effect only while resizing dialog by end user. */
			maxWidth: null,
			/* type="bool" Sets gets ability to drag dialog by end user. */
			draggable: true,
			/* type="object" Sets gets initial position of dialog. That can be array of 2 numeric values, which represent left/top coordinates.
				Or it can be object supported by jquery.position(param) method, such as { my: "left top", at: "left top", offset: "100 200" } */
			position: null,
			/* type="bool" Sets gets ability to resize dialog by end user. */
			resizable: true,
			/* type="number" Sets gets value for tabIndex attribute applied to main html element of dialog. */
			tabIndex: 0,
			/* type="object" Sets gets animation applied to dialog when it is opened. That can be any object supported by jquery show(param) method. */
			openAnimation: null,
			/* type="object" Sets gets animation applied to dialog when it is closed. That can be any object supported by jquery hide(param) method. */
			closeAnimation: null,
			/* type="number" Sets gets value of zIndex applied to the main html element of dialog. If value is not set, then 1000 is used. */
			zIndex: null,
			/* type="bool" Sets gets modal state of dialog.
				If there are more than 1 modal igDialog, then last opened dialog wins and becomes on the top.
				Note: modal functionality is not supported when dialog is minimized or pinned, because that will trigger misbehavior.
			*/
			modal: false,
			/* type="bool" Sets gets ability to process focus and blur events of child elements located in dialog in order to maintain focused state.
				Notes:
				If that option is enabled, then focus and blur event handlers are added to all child elements of dialog.
				If dialog is modal or it can be maximized, then it is not recommended to disable that option.
			*/
			trackFocus: true,
			/* type="string" Sets gets title/tooltip for close button in dialog. That is override for $.ig.Dialog.locale.closeButtonTitle. */
			closeButtonTitle: null,
			/* type="string" Sets gets title/tooltip for minimize button in dialog. That is override for $.ig.Dialog.locale.minimizeButtonTitle. */
			minimizeButtonTitle: null,
			/* type="string" Sets gets title/tooltip for maximize button in dialog. That is override for $.ig.Dialog.locale.maximizeButtonTitle. */
			maximizeButtonTitle: null,
			/* type="string" Sets gets title/tooltip for pin button in dialog. That is override for $.ig.Dialog.locale.pinButtonTitle. */
			pinButtonTitle: null,
			/* type="string" Sets gets title/tooltip for unpin button in dialog. That is override for $.ig.Dialog.locale.unpinButtonTitle. */
			unpinButtonTitle: null,
			/* type="string" Sets gets title/tooltip for restore button in dialog. That is override for $.ig.Dialog.locale.restoreButtonTitle. */
			restoreButtonTitle: null,
			/* type="string" Sets gets temporary value for src, which is used while changing parent of base element if it is instance of IFRAME. That is allows to get around possible javascript exceptions under IE. */
			temporaryUrl: null,
			/* type="bool" Sets gets ability to adjust state of header depending on focused and not-focused states. Note: the "trackFocus" option should be enabled. */
			enableHeaderFocus: true,
			/* type="auto|true|false" Sets gets processing dblclick on dialog-header.
				If option is not false and dialog was minimized, then its state will be set to normal.
				If option is set to "auto" and showMaximizeButton is enabled or if option is set to true, then dialog will be maximized when it was in normal state,
				and dialog-state will be set to normal if it was maximized. */
			enableDblclick: "auto"
		},
		events: {
			/* cancel="true" Event which is raised before state of dialog was changed.
				Return false in order to cancel action.
				Function takes arguments "evt" and "ui".
				Use evt to obtain browser event. That parameter can be null if state was modified from codes.
				Use ui.owner to obtain reference to igDialog.
				Use ui.button to obtain name of button, which triggered event. Note: if state was modified from codes, then "button" is undefined.
				Use ui.oldState to obtain old state of dialog, which can be one of following: "opened", "minimized", "maximized", "closed".
				Use ui.oldPinned to obtain boolean value of old pin state of dialog.
				Use ui.action to obtain name of action. That can be one of the following:
				"open" - request to open dialog
				"close" - request to close dialog
				"minimize" - request to minimize dialog
				"maximize" - request to maximize dialog
				"restore" - request to restore dialog from minimized or maximized state
				"pin" - request to pin dialog
				"unpin" - request to unpin dialog
			*/
			stateChanging: null,
			/* cancel="false" Event which is raised after state of dialog was changed.
				Function takes arguments "evt" and "ui".
				Use evt to obtain browser event. That parameter can be null if state was modified from codes.
				Use ui.owner to obtain reference to igDialog.
				Use ui.button to obtain name of button, which triggered event. Note: if state was modified from codes, then "button" is undefined.
				Use ui.oldState to obtain old state of dialog, which can be one of following: "opened", "minimized", "maximized", "closed".
				Use ui.oldPinned to obtain boolean value of old pin state of dialog.
				Use ui.action to obtain name of action. That can be one of the following:
				"open" - dialog was opened. Note: event is raised before possible "openAnimation" started.
				"close" - dialog was closed. Note: event is raised before possible "closeAnimation" started.
				"minimize" - dialog was minimized
				"maximize" - dialog was maximized
				"restore" - dialog was restored from minimized or maximized state
				"pin" - dialog was pinned
				"unpin" - dialog was unpinned
			*/
			stateChanged: null,
			/* cancel="false" Event which is raised after end animation when dialod was closed or opened.
				Function takes arguments "evt" and "ui".
				Use ui.owner to obtain reference to igDialog.
				Use ui.action to obtain name of action, which triggered animation.
				"open" - dialog was opened
				"close" - dialog was closed
			*/
			animationEnded: null,
			/* cancel="false" Event which is raised when dialog or its content gets focus.
				Function takes arguments "evt" and "ui".
				Use evt to obtain browser event.
				Use ui.owner to obtain reference to igDialog.
			*/
			focus: null,
			/* cancel="false" Event which is raised when dialog or its content loses focus.
				Function takes arguments "evt" and "ui".
				Use evt to obtain browser event.
				Use ui.owner to obtain reference to igDialog.
			*/
			blur: null
		},
		css: {
			/* Classes applied to the main/top element. */
			dialog: "ui-igdialog ui-dialog ui-widget ui-widget-content ui-corner-all",
			/* Classes applied to the header. */
			header: "ui-igdialog-header ui-dialog-titlebar ui-widget-header ui-corner-top ui-helper-clearfix",
			/* Classes applied to the header in focused state. */
			headerFocus: "ui-igdialog-header-focus ui-state-focus",
			/* Classes applied to the header in minimized state. */
			headerMinimized: "ui-corner-bottom",
			/* Classes applied to the header text. */
			headerText: "ui-igdialog-headertext ui-dialog-title",
			/* Extra class applied to SPAN which represents image in header, when "image" option is set. */
			headerImage: "ui-igdialog-headerimage",
			/* Classes applied to the header text when dialog is in minimized state. */
			headerTextMinimized: "ui-igdialog-headertext-minimized",
			/* Classes applied to the buttons located in header. */
			headerButton: "ui-igdialog-headerbutton ui-corner-all ui-state-default",
			/* Classes applied to the buttons located in header when mouse is moved over them. */
			headerButtonHover: "ui-igdialog-headerbutton-hover ui-state-hover",
			/* Classes applied to the close button located in header. */
			close: "ui-igdialog-buttonclose",
			/* Classes applied to the minimize button located in header. */
			minimize: "ui-igdialog-buttonminimize",
			/* Classes applied to the maximize button located in header. */
			maximize: "ui-igdialog-buttonmaximize",
			/* Classes applied to the pin button located in header. */
			pin: "ui-igdialog-buttonpin",
			/* Classes applied to the icon of close button. */
			closeIcon: "ui-igdialog-close-icon ui-icon ui-icon-close",
			/* Classes applied to the icon of minimize button. */
			minimizeIcon: "ui-igdialog-minimize-icon ui-icon ui-icon-minus",
			/* Classes applied to the icon of maximize button. */
			maximizeIcon: "ui-igdialog-maximize-icon ui-icon ui-icon-extlink",
			/* Classes applied to the icon of restore button. */
			restoreIcon: "ui-igdialog-restore-icon ui-icon ui-icon-copy",
			/* Classes applied to the icon of pin button. */
			pinIcon: "ui-igdialog-pin-icon ui-icon ui-icon-pin-s",
			/* Classes applied to the icon of unpin button. */
			unpinIcon: "ui-igdialog-unpin-icon ui-icon ui-icon-pin-w",
			/* Classes applied to the footer. */
			footer: "ui-igdialog-footer ui-widget-header ui-corner-bottom ui-helper-clearfix",
			/* Classes applied to dialog while resizing. */
			resizing: "ui-igdialog-resizing",
			/* Classes applied to dialog while dragging. */
			dragging: "ui-igdialog-dragging",
			/* Classes applied to header when dialog is in unmovable state such as maximized of pinned. */
			unmovable: "ui-igdialog-unmovable",
			/* Classes applied to the shell element when dialog is in modal state. */
			overlay: "ui-igdialog-overlay ui-widget-overlay",
			/* Classes applied to the content area of dialog when target element is IFRAME. */
			contentIframe: "ui-igdialog-content-iframe",
			/* Classes applied to the content area of dialog. */
			content: "ui-igdialog-content ui-widget-content ui-dialog-content"
		},
		_create: function () {
			var elem,
				self = this,
				elem0 = self.element,
				el = elem0[0],
				url = (el && el.nodeName === "IFRAME") ? el.src : null,
				o = self.options,
				state = o.state,
				parent = self._initContainer(o.container),
				css = self.css;
			self._fixIE(elem0);
			self._old = {
				position: elem0.css("position"),
				left: elem0.css("left"),
				top: elem0.css("top"),
				display: elem0.css("display"),
				visibility: elem0.css("visibility"),
				width: el.style.width,
				height: el.style.height
			};
			if (url) {
				el.src = o.temporaryUrl || "";
			}
			self._min = state === "minimized" || state === MIN;
			self._max = state === "maximized" || state === MAX;
			self._opened = state && state !== "closed";
			self._oldDad = el.parentNode;
			// Note: elem0.next() fails to return #text object
			self._next = self._oldDad ? el.nextSibling : null;
			self._dad = parent;
			self._elem = el = elem = o.mainElement = o.mainElement || $("<div />");
			if (self._next && self._oldDad === parent) {
				elem.insertBefore(self._next);
			} else {
				elem.appendTo(parent);
			}
			elem.css({ zIndex: o.zIndex || 1000, outline: 0 }).attr("tabIndex", o.tabIndex)
				.keydown(function (e) {
					if (o.closeOnEscape && e.keyCode === $.ui.keyCode.ESCAPE) {
						self.close(e);
						e.preventDefault();
					}
					if (e.keyCode !== $.ui.keyCode.TAB) {
						return;
					}
					self._tabTime = new Date().getTime();
					if (!self._modal && !self._max) {
						return;
					}
					var min, max, ti, next,
						iNext = -1,
						big = 999999,
						iMin = big,
						iMax = -1,
						targ = e.target,
						ti0 = self._getTabIndex(targ),
						shift = e.shiftKey,
						tabs = $(":tabbable", elem[0]),
						len = tabs.length,
						i = len;
					// find first/min and last/max tabbable child elements
					while (i-- > 0) {
						ti = self._getTabIndex(el = tabs[i]);
						if (ti > iMax) {
							iMax = ti;
							max = el;
						}
						if (ti <= iMin) {
							iMin = ti;
							min = el;
						}
						// find next tabbable elem with same tabIndex as targ
						if (ti === ti0) {
							if (!next) {
								next = el === targ;
								if (!next) {
									iNext = i;
								}
							} else if (iNext < 0) {
								iNext = i;
							}
						}
					}
					// find next tabbable elem with closest tabIndex to targ
					if (iNext < 0) {
						i = len;
					}
					iMin = shift ? -1 : big;
					while (i-- > 0) {
						ti = self._getTabIndex(tabs[i]);
						if ((ti > ti0 && ti < iMin && !shift) || (ti < ti0 && ti > iMin && shift)) {
							iMin = ti;
							iNext = i;
						}
					}
					max = max || elem[0];
					min = min || max;
					// it used if page has mixed tabIndexes of elements on dialog and outside of it
					self._nextTabElem = (iNext >= 0) ? tabs[iNext] : (shift ? max : min);
					if (targ === elem[0] || (targ === min && shift) || (targ === max && !shift)) {
						_stopEvt(e);
						el = shift ? max : min;
						try { el.focus(); } catch (ex) { }
					}
				})
				.mousedown(function (e) { self.moveToTop(e); });
			el.addClass(css.dialog);
			if (o.dialogClass) {
				el.addClass(o.dialogClass);
			}
			elem0.show().addClass(css.content).appendTo(el);
			if (url !== null) {
				elem0[0].src = url;
				elem0.addClass(css.contentIframe);
			}
			self._modal = self._hasFocus = false;
			self._lastFoc = "blur";
			self._doHeader();
			self._doFooter();
			self._doDraggable();
			self._doResizable();
			if (self._min) {
				self._onMin(true, true, true);
			}
			if (self._max) {
				o.pinned = false;
				self._onMax(true, true, true);
			}
			if (o.pinned) {
				self._onPin(true, true, true);
			}
			if (self._opened) {
				self._open();
			} else {
				elem.hide();
			}
			self._created = true;
			self._save();
		},
		// get around combination of jQuery with IE7 and other versions of IE
		// IE may generate 2 nodes for <input></input>
		// node with tag </input> kills focus functionality
		// since jQuery raises exception for selectors like "/INPUT", there is no choice but remove elements manually
		_fixIE: function (elem) {
			elem = elem.find("*");
			var n, e, i = elem.length;
			while (i-- > 0) {
				e = elem[i];
				n = e.nodeName;
				if (n === "/INPUT" || n === "/IMG") {
					e.parentNode.removeChild(e);
				}
			}
		},
		destroy: function () {
			/* Destroys igDialog and moves target element to its original parent.
				returnType="object" Returns reference to this igDialog.
			*/
			var self = this,
				dad = self._oldDad,
				next = self._next,
				elem = self._elem,
				elem0 = self.element[0];
			if (!elem) {
				return self;
			}
			self._doClose(null, true);
			delete self._elem;
			if (self._winResize) {
				$(window).unbind("resize", self._winResize);
			}
			elem0.parentNode.removeChild(elem0);
			elem.remove();
			self.element.removeClass(self.css.content).css(self._old);
			if (next && next.parentNode === dad) {
				dad.insertBefore(elem0, next);
			} else {
				dad.appendChild(elem0);
			}
			$.Widget.prototype.destroy.apply(this, arguments);
			return self;
		},
		state: function (state) {
			/* Gets sets state of editor.
				Note: If state of dialog changes, then stateChanging and stateChanged events are raised.
				paramType="string" optional="true" New state.
				returnType="string" Returns state.
			*/
			if (!arguments.length) {
				return this.options.state;
			}
			if ((state === "minimized" || state === MIN) && (!this._min || !this._opened)) {
				if (!this._min) {
					this._minimize();
				} else {
					this._open(null, 1);
				}
			}
			if ((state === "maximized" || state === MAX) && (!this._max || !this._opened)) {
				if (!this._max) {
					this._maximize();
				} else {
					this._open(null, 1);
				}
			}
			if ((state === "opened" || state === OPEN) && (this._min || this._max || !this._opened)) {
				this._onMin();
				this._onMax();
				this._open();
				this.options.state = state;
			}
			if ((state === "closed" || !state) && (this._min || this._max || this._opened)) {
				this._onMin();
				this._onMax();
				this.close();
			}
			return this;
		},
		mainElement: function () {
			/* Gets reference to dynamically created DIV element which represents dialog.
				returnType="dom" Returns reference jQuery object.
			*/
			return this._elem;
		},
		close: function (e) {
			/* Closes dialog if it is opened.
				Notes:
				1. If state of dialog changes, then stateChanging and stateChanged events are raised.
				2. That method does not change minimized or maximized state of dialog.
				It means that method "open" will open dialog and keep previous minimized or maximized state.
				paramType="object" optional="true" Browser event: internal use only.
				returnType="object" Returns reference to this igDialog.
			*/
			if (this._opened) {
				this._doClose(e);
			}
			return this;
		},
		open: function () {
			/* Opens dialog if it is closed. Notes:
				1. If state of dialog changes, then stateChanging and stateChanged events are raised.
				2. That method does not change minimized or maximized state of dialog. It means that if dialog was closed by "close" method, then dialog and keep previous minimized or maximized state.
				returnType="object" Returns reference to this igDialog.
			*/
			return this._open(null, 1);
		},
		minimize: function () {
			/* Minimizes dialog if it is not minimized.
				Note: If state of dialog changes, then stateChanging and stateChanged events are raised.
				returnType="object" Returns reference to this igDialog.
			*/
			if (!this._min) {
				this._minimize();
			}
			return this;
		},
		maximize: function () {
			/* Maximizes dialog if it is not maximized.
				Note: If state of dialog changes, then stateChanging and stateChanged events are raised.
				returnType="object" Returns reference to this igDialog.
			*/
			if (!this._max) {
				this._maximize();
			}
			return this;
		},
		restore: function () {
			/* Sets normal state for dialog which was maximized or minimized.
				Note: If state of dialog changes, then stateChanging and stateChanged events are raised.
				returnType="object" Returns reference to this igDialog.
			*/
			if (this._max) {
				this._onMax();
			}
			if (this._min) {
				this._onMin();
			}
			return this;
		},
		pin: function () {
			/* Pins dialog if it is not pinned.
				When dialog is pinned, then the html element of dialog is moved to the original container where target element was located and position:absolute is removed.
				Pinned dialog does not support modal state, maximized state and it can not be moved.
				Notes:
				1. If parent element of original target-element is invisible, then pinned dialog becomes invisible as well.
				2. If state of dialog changes, then stateChanging and stateChanged events are raised.
				returnType="object" Returns reference to this igDialog.
			*/
			if (!this.options.pinned) {
				this._pin();
			}
			return this;
		},
		unpin: function () {
			/* Unpins dialog if it is pinned.
				Note: If state of dialog changes, then stateChanging and stateChanged events are raised.
				returnType="object" Returns reference to this igDialog.
			*/
			if (this.options.pinned) {
				this._pin();
			}
			return this;
		},
		getTopModal: function () {
			/* Gets reference to the top modal dialog.
				returnType="object" reference to igDialog or null.
			*/
			return _modals[_modals.length - 1];
		},
		isTopModal: function () {
			/* Checks if dialog is modal and it is currently active.
				returnType="bool" true: dialog is on top.
			*/
			return this.getTopModal() === this;
		},
		moveToTop: function (e) {
			/* Moves not modal dialog to the top.
				paramType="object" optional="true" Original event of browser.
				returnType="object" Returns reference to this igDialog.
			*/
			var src, name,
				self = this,
				o = self.options,
				zi = o.zIndex,
				elem = self._elem,
				zi0 = self._created ? null : zi,
				modal = o.modal,
				elem0 = this.element[0],
				scrollTop = elem0.scrollTop,
				scrollLeft = elem0.scrollLeft;
			zi = zi || 1000;
			// cancel mousedown for header and footer
			src = e ? e.target : null;
			if (_isSrc(self._header, src) || _isSrc(self._footer, src)) {
				name = src.nodeName;
				if (name !== "INPUT" && name !== "BUTTON") {
					_stopEvt(e);
					// ensure focus
					self._setFocus();
				}
			} else if (e && !this._hasFocus) {
				// ensure focus
				self._setFocus();
			}
			_maxZ = Math.max(zi0 || zi, _maxZ);
			if (o.pinned) {
				return self;
			}
			if (modal && self._lastZ) {
				// if it is modal dialog with hidden shell, then adjust shells
				elem = self._modalDiv;
				if (elem && elem[0].offsetWidth < 10) {
					self._onResize();
				}
				return self;
			}
			if (_lastTop === self && (zi0 || zi) >= _maxZ) {
				return self;
			}
			if (_lastTop && !zi0) {
				_lastTop._elem.css("zIndex", _lastTop._lastZ || -1);
				_lastTop._save();
			}
			if (_lastZ >= _maxZ) {
				_maxZ++;
			}
			if (modal && !zi0) {
				_maxZ++;
				_maxZ++;
			}
			// bug:120224
			//if ((zi0 || zi) >= _lastZ) {
			_lastTop = self;
			//}
			self._lastZ = _lastZ = zi0 || ((modal || _modals.length > 0) ? _maxZ : zi);
			if (!zi0) {
				elem.css("zIndex", zi0 || _maxZ);
				self._save();
			}
			elem0.scrollTop = scrollTop;
			elem0.scrollLeft = scrollLeft;
			if (modal) {
				self._doModal(_maxZ);
			}
			return self;
		},
		_save: function () {
			var str, input, pos, o = this.options, name = o.inputName;
			if (!name) {
				return;
			}
			input = $('input[name="' + name + '"]');
			if (input.length === 0) {
				input = input.parents("form")[0] || document.forms[0];
				if (!input) {
					return;
				}
				input = $('<input type="hidden" name="' + name + '" />').appendTo(input);
			}
			str = "s" + (o.pinned ? "1" : "") + (this._opened ? (this._min ? 2 : (this._max ? 3 : 1)) : 0) +
				(o.width ? ":w" + o.width : "") + (o.height ? ":h" + o.height : "") + (":z" + this._elem.css("zIndex") || o.zIndex);
			pos = o.position;
			if (pos && pos.length === 2) {
				str += ":p" + pos[0] + "," + pos[1];
			}
			input.val(str);
		},
		_open: function (e, raiseEvt) {
			var self = this,
				o = self.options,
				elem = self._elem,
				anim = self._min ? null : o.openAnimation,
				arg = { action: "open", owner: this };
			if ((self._opened && self._vis) || (raiseEvt && !self._fireState(e, true, arg))) {
				return self;
			}
			if (!o.pinned) {
				elem.css("position", "absolute");
			}
			elem.show();
			// adjust opened before _doSize, because _onResize may fail
			self._opened = true;
			self._doSize(1);
			if (anim) {
				elem.hide().show(anim, function () {
					self._trigger("animationEnded", e, arg);
				});
			}
			self._vis = true;
			_visCount++;
			// enable focus/blur processing
			self._trackFocus(elem);
			self.moveToTop(true);
			self._fixState();
			if (raiseEvt) {
				self._fireState(e, false, arg);
			}
			self._save();
			return self;
		},
		_initContainer: function (container, change) {
			this._container = null;
			if (container) {
				if (typeof container === "string") {
					container = $(container);
				}
				if (container && container[0]) {
					container = container[0];
				}
			}
			if (!container || !container.parentNode) {
				container = this.element.parents("form")[0] || document.body;
			} else if (container.nodeName !== "BODY") {
				var style = container.style, pos = style ? style.position : null;
				if (style && (!pos || pos === "static")) {
					style.position = "relative";
				}
				this._container = container;
			}
			if (change) {
				this._elem.appendTo(container);
			}
			return container;
		},
		_fixState: function () {
			this.options.state = this._opened ? (this._min ? "minimized" : (this._max ? "maximized" : "opened")) : "closed";
		},
		_minimize: function (e) {
			return this._doState(e, { action: this._min ? "restore" : "minimize" }, e ? "minimize" : null, "_onMin", true);
		},
		_maximize: function (e) {
			return this._doState(e, { action: this._max ? "restore" : "maximize" }, e ? "maximize" : null, "_onMax", true);
		},
		_pin: function (e) {
			return this._doState(e, { action: this.options.pinned ? "unpin" : "pin" }, e ? "pin" : null, "_onPin");
		},
		_close: function (e) {
			return this._opened ? this.close(e) : this._open(e);
		},
		_getTabIndex: function (e) {
			return (isNaN(e = parseInt(e.tabIndex, 10)) || e < 1) ? 0 : e;
		},
		_doHeader: function () {
			var button, id, evts,
				i = 4,
				self = this,
				header = self._header,
				o = self.options,
				txt = o.headerText,
				css = self.css;
			if (header) {
				header.remove();
			}
			delete self._minHW;
			header = self._header = _notab($("<div />").addClass(css.header).css("display", "block").prependTo(self._elem)).dblclick(function (e) {
				var dbl = o.enableDblclick;
				if (!dbl) {
					return;
				}
				if (self._min) {
					self._doState(e, { action: "restore" }, null, "_onMin", true);
				} else if (dbl === true || (dbl === "auto" && o.showMaximizeButton)) {
					self._doState(e, { action: self._max ? "restore" : "maximize" }, null, "_onMax", true);
				}
			});
			//
			if (o.imageClass) {
				self._img = $("<span />").addClass(css.headerImage).addClass(o.imageClass).html("&nbsp;").appendTo(header);
			}
			self._headerText = $("<span />").addClass(css.headerText).html(txt || "&nbsp;").appendTo(header);
			//
			evts = {
				mouseover: function () { $(this).addClass(css.headerButtonHover); },
				mouseleave: function () { $(this).removeClass(css.headerButtonHover); },
				click: function (e) { try { self["_" + $(this).attr("data-id")](e); } catch (ex) {} _stopEvt(e); },
				touchstart: function (e) { this._drag = null; _stopEvt(e); },
				touchmove: function (e) { this._drag = 1; _stopEvt(e); },
				touchend: function (e) { if (!this._drag) { $(this).trigger("click"); } }
			};
			// i=order of buttons in header:pin,min,max,close
			while (i-- >= 0) {
				if (i === 3 && o.showCloseButton) {
					id = "close";
				} else if (i === 2 && o.showMaximizeButton) {
					id = "maximize";
				} else if (i === 1 && o.showMinimizeButton) {
					id = "minimize";
				} else {
					id = (i === 0 && o.showPinButton) ? "pin" : null;
				}
				if (id) {
					button = $("<a />").addClass(css.headerButton + " " + css[id]).attr("data-id", id)
						.attr("href", "#").attr("role", "button").bind(evts).appendTo(header);
					$("<span />").addClass(css[id + "Icon"]).appendTo(button);
					// i=order of buttons in header:pin,min,max,close
					self._loc(button, i === 3 ? CLOSE : (i === 2 ? MAX : (i === 1 ? MIN : PIN)));
				}
			}
			if (!o.showHeader) {
				header.hide();
			}
		},
		_doFooter: function () {
			var self = this,
				o = self.options,
				txt = o.footerText,
				css = self.css;
			if (self._footer) {
				self._footer.remove();
				delete self._footer;
			}
			if (o.showFooter) {
				self._footer = _notab($("<div />").addClass(css.footer).css("display", "block").html(txt || "&nbsp").appendTo(self._elem));
			}
		},
		_onMin: function (e, noSize, noFocus) {
			var but = this._elem.parent(),
				o = this.options,
				bar = this._footer,
				css = this.css,
				header = this._header,
				min = (e && e.type) ? !this._min : !!e;
			if (min === this._min && this._created) {
				return;
			}
			this._min = min;
			if (min && o.pinOnMinimized) {
				this._onPin(min, true, true);
			}
			but = header.find("." + css.minimize);
			but.find("*").removeClass(min ? css.minimizeIcon : css.restoreIcon).addClass(min ? css.restoreIcon : css.minimizeIcon);
			if (e && e.type && min && this._max) {
				this._onMax(false, true, true);
			}
			this._loc(but, min ? RESTORE : MIN);
			if (min) {
				header.addClass(css.headerMinimized);
				if (bar) {
					bar.hide();
				}
			} else {
				header.removeClass(css.headerMinimized);
				if (bar) {
					bar.show();
				}
			}
			if (!noSize && this._vis) {
				this._doSize();
			}
			if (!noFocus && this._vis) {
				this._setFocus();
			}
			this._save();
		},
		_onMax: function (e, noSize, noFocus) {
			var but,
				o = this.options,
				header = this._header,
				css = this.css,
				max = (e && e.type) ? !this._max : !!e;
			if (max === this._max && this._created) {
				return;
			}
			this._max = max;
			if (!max) {
				this._restoreHtml();
			}
			but = header.find("." + css.maximize);
			but.find("*").removeClass(max ? css.maximizeIcon : css.restoreIcon).addClass(max ? css.restoreIcon : css.maximizeIcon);
			this._loc(but, max ? RESTORE : MAX);
			if (max) {
				if (this._min) {
					this._onMin(false, true, true);
				}
				if (o.pinned) {
					this._onPin(false, true, true);
				}
			}
			if (max) {
				header.addClass(css.unmovable);
			} else {
				header.removeClass(css.unmovable);
			}
			if (!noSize && this._vis) {
				this._doSize();
			}
			if (!noFocus && this._vis) {
				this._setFocus();
			}
			this._save();
		},
		_onPin: function (e, noSize, noFocus) {
			var but, elem, parent, dad, pos,
				old = this._old,
				next = this._next,
				css = this.css,
				header = this._header,
				o = this.options,
				pin = (e && e.type) ? !o.pinned : !!e;
			if (pin === o.pinned && this._created) {
				return;
			}
			o.pinned = pin;
			// fix icon on pin-button
			but = header.find("." + css.pin);
			but.find("*").removeClass(pin ? css.pinIcon : css.unpinIcon).addClass(pin ? css.unpinIcon : css.pinIcon);
			if (this._max && pin) {
				this._onMax(false, false, true);
			}
			this._loc(but, pin ? UNPIN : PIN);
			if (pin) {
				header.addClass(css.unmovable);
			} else {
				header.removeClass(css.unmovable);
			}
			// fix position of dialog
			elem = this._elem;
			if (pin) {
				pos = old.position;
				if (this._resize && (pos === "static" || !pos)) {
					pos = "relative";
				}
				this._pinPos = pos = { position: pos, left: old.left, top: old.top };
			} else {
				pos = { position: "absolute" };
			}
			elem.css(pos);
			// fix parent
			parent = elem.parent()[0];
			dad = pin ? this._oldDad : this._dad;
			if (dad && dad !== parent) {
				if (pin && next && next.parentNode === dad) {
					elem.insertBefore(next);
				} else {
					elem.appendTo(dad);
				}
			}
			if (!noFocus && this._vis) {
				this._setFocus();
			}
			if (!noSize && this._vis) {
				if (!pin) {
					this._doSize(1);
				} else {
					this._doModal();
				}
			}
			this._save();
		},
		_doClose: function (e, destroy) {
			var i,
				self = this,
				elem = self._elem,
				arg = { action: "close" },
				o = self.options,
				anim = (self._min || destroy) ? null : o.closeAnimation;
			if (!self._opened || (!destroy && !self._fireState(e, true, arg, e ? "close" : null))) {
				return;
			}
			// disable focus/blur processing
			self._trackFocus(elem, 1);
			self._restoreHtml();
			if (_lastTop === self) {
				_lastTop = null;
			}
			self._fireFoc(false);
			self._hasFocus = false;
			delete self._lastZ;
			self._vis = self._opened = false;
			if (destroy) {
				o.modal = false;
			}
			self._doModal();
			if (anim) {
				elem.hide(anim, function () {
					self._trigger("animationEnded", e, arg);
				});
			} else if (!destroy) {
				elem.hide();
			}
			if (!destroy) {
				self._fixState();
				self._fireState(e, false, arg);
			}
			if (--_visCount < 1) {
				_visCount = _lastZ = _maxZ = 0;
			} else if (_visCount === (i = _modals.length)) {
				_modals[i - 1]._setFocus();
			}
			self._save();
		},
		// fire stateChanging/ed event
		// e-browser event
		// before-cancelable before event (suffix ing or ed)
		// arg-ui argument
		// but-name of button or null
		_fireState: function (e, before, arg, but) {
			if (before) {
				var o = this.options;
				arg.oldState = o.state;
				arg.oldPinned = o.pinned;
				arg.owner = this;
				if (but) {
					arg.button = but;
				}
			}
			return this._created ? this._trigger("stateChang" + (before ? "ing" : "ed"), e, arg) : true;
		},
		// fire both stateChanging/ed events and call fnName function
		// e-browser event
		// arg-ui argument
		// but-name of button or null
		// fnName-name of function to call if before-event was not canceled
		// show-ensure that dialog is opened
		_doState: function (e, arg, but, fnName, show) {
			if (this._fireState(e, true, arg, but)) {
				this[fnName](e || { type: 1 });
				if (show && !this._opened) {
					this._open(null, true);
				}
				this._fixState();
				if (this._created) {
					this._trigger("stateChanged", e, arg);
				}
			}
			return this;
		},
		_fireFoc: function (foc, e) {
			var name = foc ? "focus" : "blur";
			if (name !== this._lastFoc) {
				// memorize last focus/blur state
				this._trigger(this._lastFoc = name, e, { owner: this });
				if (this.options.enableHeaderFocus) {
					name = this.css.headerFocus;
					if (foc) {
						this._header.addClass(name);
					} else {
						this._header.removeClass(name);
					}
				}
			}
		},
		// attach focus/blur event listeners to elem and all its children
		// remove: request to remove event listeners
		_trackFocus: function (elem, remove) {
			var self = this, focusEvt = self._focusEvt, track = self.options.trackFocus;
			if (!focusEvt && !track) {
				return;
			}
			if (remove) {
				if (self._focBind) {
					self._focBind.unbind(focusEvt);
					delete self._focBind;
				}
				return;
			}
			if (!focusEvt) {
				focusEvt = function (e) {
					var elems, old = self._focBind, foc = e.type === "focus";
					if (!foc && old && elem) {
						// add focus listeners to new children (like editors in grid)
						elems = elem.find("*").not(old);
						if (elems.length) {
							self._focBind = old.add(elems);
							elems.bind(focusEvt);
						}
					}
					self._hasFocus = foc;
					// fire focus/blur events with delay with validation for last state
					setTimeout(function () {
						var focusTo = self.getTopModal(), elem = self._elem;
						// do not allow lost focus for modal dialog
						if (elem && focusTo && !self._hasFocus && !foc && _lastTop === self) {
							// modal or maximized dialog lost focus
							if (self._max || focusTo === self) {
								focusTo = self._nextTabElem || elem[0];
							// not-modal-child-dialog of modal-dialog lost focus on tab
							} else {
								focusTo = (self._tabTime && (new Date().getTime() - self._tabTime) < 200) ? elem[0] : null;
							}
							if (focusTo) {
								self._setFocus(focusTo);
							}
						}
						// raise focus/blur events
						self._fireFoc(self._hasFocus, e);
					}, 50);
				};
				focusEvt = self._focusEvt = { focus: focusEvt, blur: focusEvt };
			}
			if (track && elem) {
				self._focBind = elem.find("*").add(elem).bind(focusEvt);
			}
		},
		_setFocus: function (elem) {
			var self = this;
			setTimeout(function () {
				try {
					if (!self._hasFocus) {
						if (!self.options.trackFocus) {
							self._hasFocus = true;
						}
						elem = elem || self._elem[0];
						elem.focus();
					}
				} catch (ex) {}
			}, 100);
		},
		// used after maximized off
		_restoreHtml: function () {
			var html, old = this._oldHtml;
			if (old) {
				html = old.html;
				if (html.style) {
					html.style.overflow = old.overflow;
				}
				html.scrollLeft = old.scrollLeft;
				html.scrollTop = old.scrollTop;
				delete this._oldHtml;
			}
		},
		_touch: function (elem, name) {
			var start, self = this, evt = function (evt, type) {
				var act, e = evt.originalEvent,
					touches = e ? e.touches : null,
					one = touches && touches.length === 1;
				// type: null-end
				if (one && type) {
					_stopEvt(evt);
				}
				// !one: scrolling should be ended
				one = one && type === "move";
				if (start) {
					start = one ? start : null;
					act = one ? "Drag" : "Stop";
				} else if (one) {
					start = true;
					elem.trigger("mouseover");
					act = "Start";
				}
				if (act) {
					e = self._elem.data(name);
					act = "_mouse" + act;
					// explicitly call _mouseStart/Drag/Stop methods of draggable or resizable
					if (e && e[act]) {
						evt.pageX = one ? touches[0].pageX : 0;
						evt.pageY = one ? touches[0].pageY : 0;
						e[act](evt);
					}
				}
			};
			elem.bind({
				touchstart: function (e) { evt(e, "start"); },
				touchmove: function (e) { evt(e, "move"); },
				touchend: function (e) { evt(e); }
			});
		},
		_doDraggable: function () {
			var self = this, o = self.options, elem = self._elem;
			if (elem.draggable && o.draggable) {
				self._touch(self._header, "draggable");
				elem.draggable({
					cancel: ".ui-igdialog-content, .ui-igdialog-headerbutton",
					handle: ".ui-igdialog-header",
					containment: self._container || "document",
					start: function () {
						if (o.pinned || self._max) {
							return false;
						}
						$(this).addClass(self.css.dragging);
					},
					stop: function (e, ui) {
						var doc = $(document);
						o.position = [ui.position.left - doc.scrollLeft(), ui.position.top - doc.scrollTop()];
						$(this).removeClass(self.css.dragging);
						self._save();
					}
				});
			}
		},
		_doResizable: function () {
			var elems, r, i = 0, self = this, o = self.options, elem = self._elem;
			if (!elem.resizable) {
				return;
			}
			self._resize = o.resizable;
			if (!self._resize) {
				return;
			}
			elem.css("position", elem.css("position")).resizable({
				cancel: "." + self.css.content,
				containment: self._container || "document",
				alsoResize: self.element,
				maxWidth: o.maxWidth,
				maxHeight: o.maxHeight,
				minWidth: self._minWidth(),
				minHeight: o.minHeight,
				handles: (typeof o.resizable === "string") ? o.resizable : "n,e,s,w,se,sw,ne,nw",
				start: function () {
					// Note: cancel has no effect
					$(this).addClass(self.css.resizing);
					// restore position, left and top, which were modified by resizing
					if (o.pinned && self._pinPos) {
						elem.css(self._pinPos);
					}
				},
				resize: function () {
					// Note: cancel has no effect
					self._fixCaption();
					// restore position, left and top, which were modified by resizing
					if (o.pinned && self._pinPos) {
						elem.css(self._pinPos);
					}
				},
				stop: function () {
					$(this).removeClass(self.css.resizing);
					o.height = $(this).height();
					o.width = $(this).width();
					self._save();
				}
			}).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
			r = elem.data("resizable");
			if (r) {
				// get around bug in resizable related to bounds of container
				if (!r._dragFix) {
					r._dragFix = r._mouseDrag;
					r._mouseDrag = function (e) {
						var x, y, d = r.parentData;
						if (d && e) {
							x = e.pageX;
							y = e.pageY;
							if (x <= d.left || y <= d.top || x >= d.left + d.width || y >= d.top + d.height) {
								return false;
							}
						}
						return r._dragFix(e);
					};
				}
				elems = r._handles;
				i = elems.length;
			}
			while (i-- > 0) {
				self._touch($(elems[i]), "resizable");
			}
		},
		_toPx: function (val, height) {
			if (typeof val === "number") {
				return val;
			}
			if (!val) {
				return height ? val : 0;
			}
			val = val.toString();
			var elem, num = parseInt(val, 10);
			if (isNaN(num)) {
				return 0;
			}
			// check for em, ex, in, cm, mm, pt units
			if (val.indexOf("m") > 0 || val.indexOf("e") > 0 || val.indexOf("i") > 0 || val.indexOf("t") > 0) {
				elem = $("<div />").css({ visibility: "hidden", width: val }).appendTo(this._dad);
				num = elem.width();
				elem.remove();
			} else if (val.indexOf("%") > 0) {
				val = this._winRect(1);
				val = height ? val.height : val.width;
				return Math.floor(num * val / 100);
			}
			return num;
		},
		// fixPos: force adjust position
		// note: dialog should be already opened
		_doSize: function (fixPos) {
			// fix size
			var self = this,
				o = self.options,
				max = self._max,
				pos = max ? [0, 0] : o.position,
				resize = self._resize ? ".ui-resizable-handle" : null,
				elem0 = self.element,
				elem = self._elem;
			if (resize) {
				// show/hide resizing handles
				if (self._min || max) {
					$(resize, elem).hide();
				} else {
					$(resize, elem).show();
				}
			}
			// temporary hide headerText, it will be adjusted by _fixCaption
			self._headerText.css("width", 0);
			if (self._min) {
				elem0.hide();
				self._fixCaption(elem);
			} else if (max) {
				elem0.show().css({ width: "auto", height: "auto" });
				// temporary collapse dialog: to correctly set position (any reasonable values)
				elem.css({ width: 100, height: 50 });
			} else {
				this._doSizePX(elem0,
					elem,
					Math.max(self._minWidth(), self._toPx(o.width)),
					self._toPx(o.height, true),
					o.minHeight);
				if (resize) {
					elem.resizable("option", "minHeight", o.minHeight);
				}
			}
			// fix position
			if (!o.pinned && (fixPos || max || self._oldMax)) {
				self._oldMax = max;
				if (max) {
					self._onResize();
				}
				if (elem.position) {
					if (pos) {
						// check for temporary (invalid) array of 2 integers
						if (pos.length === 2 && typeof pos[0] === "number") {
							pos = { my: "left top", at: "left top", offset: pos[0] + " " + pos[1] };
						}
						pos = $.extend({}, _pos, pos);
					}
					if (self._container) {
						if (!pos) {
							pos = $.extend({}, _pos);
						}
						pos.of = self._container;
						pos.collision = max ? "none" : "fit";
					}
					elem.css({ top: 0, left: 0 }).position(pos || _pos);
				}
			}
			self._doModal();
			self._save();
		},
		// adjust px width and height of dialog (not minimized)
		_doSizePX: function (elem0, elem, width, height, minHeight) {
			// temporary collapse content in order to calculate height (minHeight) of header text and border/padding of content
			elem0.show().css({ width: "auto", height: 0, minHeight: 0 });
			var ie7, zeroHeight = elem.css({ width: width, height: "auto", display: "block" }).height(),
				nodeName = elem0[0].nodeName;
			this._fixCaption(elem);
			if (typeof height === "string") {
				if (height.indexOf("px") > 0) {
					height = parseInt(height, 10);
				}
			}
			// auto size for height
			if (typeof height !== "number") {
				height = elem0.css("height", "auto").height() + zeroHeight;
			}
			if (nodeName !== "DIV") {
				if (nodeName === "IFRAME") {
					// Note: experimental/test adjustments
					width -= _getPadding(elem0);
					ie7 = $.browser.msie ? parseInt($.browser.version, 10) : null;
					if (!ie7 || isNaN(ie7) || ie7 > 7) {
						height += 5;
					}
				}
				elem0.width(width - _getPadding(elem0, false, "margin"));
			}
			height = Math.max(minHeight, height);
			elem0.height(Math.max(height - zeroHeight, 0));
			minHeight = height - elem[0].offsetHeight;
			if (minHeight > 0) {
				elem0.height(Math.max(height - zeroHeight + minHeight, 0));
			}
		},
		_onResize: function () {
			var rect, self = this, div = self.isTopModal() ? self._modalDiv : null;
			if (!self._winResize) {
				$(window).bind("resize", self._winResize = function () {
					setTimeout(function () {
						self._onResize();
					}, 50);
				});
			}
			if (!self._opened || self.options.pinned) {
				return;
			}
			// collapse modal DIV/IFRAME-shells
			if (div) {
				div.hide();
				self._doIframe(div, 1);
			}
			// adjust maximized dialog
			if (self._max) {
				self._doMaxSize(self._elem);
			}
			// adjust modal DIV/IFRAME-shells
			if (div) {
				rect = self._winRect();
				div.css({ width: rect.maxWidth - 1, height: rect.maxHeight - 1 }).show();
				self._doIframe(div);
			}
		},
		_minHeaderWidth: function () {
			var outerWidth, elem,
				width = this._minHW,
				elems = this._header.children().not(this._headerText),
				i = elems.length;
			if (!width) {
				width = 3 + _getPadding(this._header);
				while (--i >= 0) {
					elem = elems[i];
					// get around bugs in jquery-1.4.4 (exception in Opera or huge elem.outerWidth in IE)
					try {
						outerWidth = $(elem).outerWidth(true);
					} catch (ex) {}
					width += 1 + ((outerWidth && outerWidth > 2 && outerWidth < 100) ? outerWidth : elem.offsetWidth);
				}
				this._minHW = width;
			}
			return width;
		},
		// minimal width of dialog in normal (not mimimized) state
		_minWidth: function () {
			if (!this._minW) {
				this._minW = this._minHeaderWidth();
			}
			return Math.max(this.options.minWidth, this._minW);
		},
		// adjust width of header text to fit into available width of header
		_fixCaption: function (elem) {
			var width, widths, top, len, topi,
				j = 0,
				i = -1,
				header = this._header,
				cap = this._headerText,
				minCss = this.css.headerTextMinimized;
			if (this._min) {
				cap.css("width", "").addClass(minCss);
				if (!elem) {
					return;
				}
				elem.css({ height: "auto", width: "auto", display: "inline-block" });
				// get around IE6/7 and draggable beyond right edge: check if width of header/dialog is not larger than widths of children
				widths = _getPadding(header) + 3;
				cap = header.children();
				len = cap.length;
				while (++i < len) {
					widths += cap[i].offsetWidth + _toPx($(cap[i]), "marginLeft") + _toPx($(cap[i]), "marginRight");
				}
				while (j++ < 2) {
					elem.css("width", widths);
					// verify that buttons did not jump on 2nd line
					widths += 2;
					i = len;
					while (i-- > 0) {
						topi = cap[i].offsetTop;
						if (i > 0 && i < len - 1 && Math.abs(top - topi) > 4) {
							break;
						}
						top = topi;
					}
					if (i < 0) {
						j = 4;
					}
				}
				return;
			}
			cap.removeClass(minCss);
			// get around bugs in jquery-1.4.4 (exception in Opera or huge elem.innerWidth in IE)
			try {
				width = header.innerWidth() - 3;
			} catch (ex) { }
			if (!width || width > 1000) {
				width = header[0].clientWidth - 4;
			}
			width = Math.max(1, width - this._minHeaderWidth());
			cap.css("width", "auto");
			// if themeroller is used, then fonts can change without notification:
			// assume jump from smallest to largest (very ~, but at least something)
			if (cap[0].offsetWidth * 1.3 > width) {
				cap.css("width", width);
			}
		},
		// stretch dialog to size of window
		_doMaxSize: function (elem) {
			var html,
				old = this._oldHtml,
				elem0 = this.element,
				rect = this._winRect(),
				paddingX = _getPadding(elem),
				paddingY = _getPadding(elem, 1);
			html = rect.html;
			if (!old) {
				// save old attributes of window before maximize
				this._oldHtml = old = {
					html: html,
					scrollLeft: html.scrollLeft,
					scrollTop: html.scrollTop
				};
				html.scrollLeft = html.scrollTop = 0;
				if (html.style) {
					old.overflow = html.style.overflow;
					html.style.overflow = "hidden";
					// if window had scrollbars, then recalculate size
					if (rect.maxWidth > rect.width || rect.maxHeight > rect.height) {
						rect = this._winRect(1);
					}
				}
			}
			this._doSizePX(elem0, elem, rect.width - paddingX - 1, rect.height - paddingY - 1, 0);
		},
		// returns properties of window/HTML { width, height, maxWidth, maxHeight, html }
		_winRect: function (sizeOnly) {
			var size, docElem, width, height, widthOk, heightOk,
				container = this._container,
				maxWidth = 0,
				maxHeight = 0,
				big = 999999,
				win = window,
				doc = win.document,
				body = doc.body,
				html = body;
			if (container) {
				width = container.offsetWidth;
				height = container.offsetHeight;
				return { width: width, height: height, maxWidth: width, maxHeight: height, html: container };
			}
			// find HTML
			while (html && html.nodeName !== "HTML") {
				html = html.parentNode;
			}
			if (!html) {
				html = body;
			}
			docElem = doc.documentElement || html;
			// check for quirks of IE
			size = ((doc.compatMode !== "CSS1Compat") && $.browser.msie) ? body : html;
			width = size.clientWidth;
			height = size.clientHeight;
			if (sizeOnly) {
				return { width: width, height: height };
			}
			// any reasonable valid value
			if (width && width > 50) {
				maxWidth = width;
				maxHeight = height;
			} else {
				width = height = big;
			}
			widthOk = html.scrollWidth;
			heightOk = html.scrollHeight;
			if (widthOk && heightOk) {
				maxWidth = Math.max(maxWidth, widthOk);
				maxHeight = Math.max(maxHeight, heightOk);
			}
			maxWidth = Math.max(maxWidth, body.scrollWidth);
			maxHeight = Math.max(maxHeight, body.scrollHeight);
			widthOk = body.offsetWidth;
			heightOk = body.offsetHeight;
			maxWidth = Math.max(maxWidth, widthOk);
			maxHeight = Math.max(maxHeight, heightOk);
			return { width: (width === big) ? widthOk : width, height: (height === big) ? heightOk : height, maxWidth: maxWidth, maxHeight: maxHeight, html: html };
		},
		// create _iframe, adjust its parent and size
		// hide: request to temporary hide iframe (width/height:1px)
		_doIframe: function (div, hide) {
			// trick jslint validation for illegal "JavaScript URL" by hiding part in var
			var src = "javascript";
			if (!_iframe) {
				_iframe = _notab($("<iframe />").attr("frameBorder", 0).attr("scrolling", "no")
					.attr("src", src + ":''")
					.css({ position: "absolute", filter: "alpha(opacity=50)", opacity: 0 }));
			}
			if (_iframe.parent()[0] !== div.parent()[0]) {
				_iframe.css({ width: "1px", height: "1px", marginLeft: div.css("marginLeft"), marginTop: div.css("marginTop"),
					left: div.css("left"), top: div.css("top"), zIndex: div.attr("zIndex") - 1 }).insertBefore(div);
			}
			_iframe.css({ width: hide ? "1px" : div.css("width"), height: hide ? "1px" : div.css("height") });
		},
		// zi: zIndex used when modal shell is visible
		// implement all actions related to modal functionality: start/end modal depending on visibility/pin/minimized
		_doModal: function (zi) {
			var i, pos, on, obj,
				len = _modals.length,
				self = this, o = self.options,
				elem = self._elem,
				div = self._modalDiv;
			on = o.modal && !o.pinned && !self._min && self._opened;
			i = $.inArray(self, _modals);
			if (self._modal === on) {
				if (zi && div) {
					div.css("zIndex", zi - 1);
					self._onResize();
				}
				// if that dialog is not modal, then ensure that last modal dialog in array is on top
				if (!on && !_lastTop && len > 0) {
					_modals[len - 1].moveToTop();
				}
				return;
			}
			// add new dialog to array
			if (i < 0 && on) {
				// hide shell of previous top dialog
				if (len > 0) {
					_modals[len - 1]._modalDiv.hide();
				}
				_modals.push(self);
			}
			// remove this dialog from array
			if (i >= 0 && !on) {
				// find last dialog in array, which will be moved on top
				if (i > 0 && i + 1 === len) {
					obj = _modals[i - 1];
				}
				_modals.splice(i, 1);
			}
			self._modal = on;
			if (on) {
				self._modalDiv = div = _notab($("<div />").css({ position: "absolute", left: 0, top: 0, zIndex: _maxZ - 1 })
					.addClass(self.css.overlay).mousedown(function (e) {
						self._setFocus();
						_stopEvt(e);
					})
					.insertBefore(elem));
				pos = div.offset();
				div.css({ marginLeft: -pos.left + "px", marginTop: -pos.top + "px" });
				self._onResize();
			} else {
				div.remove();
				_iframe.remove();
				delete self._modalDiv;
				if (obj) {
					obj.moveToTop();
				}
			}
		},
		_loc: function (but, state) {
			state = ((state === MIN) ? "minimize" : ((state === MAX) ? "maximize" : ((state === RESTORE) ?
					"restore" : ((state === CLOSE) ? "close" : ((state === PIN) ?
					"pin" : ((state === UNPIN) ? "unpin" : "open")))))) + "ButtonTitle";
			var val = this.options[state] || ($.ig && $.ig.Dialog && $.ig.Dialog.locale ? $.ig.Dialog.locale[state] : null) || "";
			but.attr("title", val).attr("longdesc", val);
		},
		_setOption: function (key, val) {
			var pos, size, drag, resize,
				elem = this._elem, o = this.options, container = key === "container";
			if (!elem || !key || o[key] === val || key === "mainElement") {
				return this;
			}
			if (key === "state") {
				return this.state(val);
			}
			if (key === "pinned") {
				return this._pin();
			}
			if (container) {
				if (o.draggable && elem.draggable) {
					elem.draggable("destroy");
					drag = true;
				}
				if (o.resizable && elem.resizable) {
					elem.resizable("destroy");
					resize = true;
				}
			}
			$.Widget.prototype._setOption.apply(this, arguments);
			if (typeof val === "function") {
				return this;
			}
			if (container) {
				this._initContainer(val, 1);
				if (drag) {
					this._doDraggable();
				}
				if (resize) {
					this._doResizable();
				}
			}
			if (key === "draggable") {
				if (val) {
					this._doDraggable();
				} else if (elem.draggable) {
					elem.draggable("destroy");
				}
			}
			if (key === "resizable") {
				if (val) {
					this._doResizable();
				} else if (this._resize) {
					this._resize = val;
					elem.resizable("destroy");
				}
			}
			if (key === "modal") {
				this._doModal();
			}
			if (key.indexOf("Button") > 0 || key === "image" || key === "headerText" || key === "showHeader") {
				this._doHeader();
				size = true;
			}
			// check for showFooter and footerText
			if (key.indexOf("ooter") > 0) {
				this._doFooter();
				size = true;
			}
			if (key === "tabIndex") {
				elem.attr("tabIndex", val);
			}
			if (key === "zIndex") {
				elem.css("zIndex", val);
				this._save();
			}
			if (this._vis) {
				pos = key === "position";
				// check for height, width, minHeight, minWidth, maxHeight, maxWidth
				if (container || size || pos || key.indexOf("idth") > 0 || key.indexOf("eight") > 0) {
					this._doSize(pos || container);
				}
			}
			// check fo trackFocus, enableHeaderFocus
			if (key.indexOf("Foc") > 0) {
				this._header.removeClass(this.css.headerFocus);
			}
			return this;
		}
	});
	$.extend($.ui.igDialog, { version: "12.2.20122.1021" });
}(jQuery));



