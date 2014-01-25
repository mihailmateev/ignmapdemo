/*!
* Infragistics.Web.ClientUI Validator localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Validator) {
	$.ig.Validator = {
		locale: {
			defaultMessage: 'Please fix this field',
			selectMessage: 'Please select a value',
			rangeSelectMessage: 'Please select no more than {0} and not less than {1} items',
			minSelectMessage: 'Please select at least {0} items',
			maxSelectMessage: 'Please select no more than {0} items',
			rangeLengthMessage: 'Please enter a value between {0} and {1} characters long',
			minLengthMessage: 'Please enter at least {0} characters',
			maxLengthMessage: 'Please enter no more than {0} characters',
			requiredMessage: 'This field is required',
			maskMessage: 'Please fill all required positions',
			dateFieldsMessage: 'Please enter values in date fields',
			invalidDayMessage: 'Invalid day of month. Please enter correct day',
			dateMessage: 'Please enter a valid date',
			numberMessage: 'Please enter a valid number',
			rangeMessage: 'Please enter a value between {0} and {1}',
			minMessage: 'Please enter a value greater than or equal to {0}',
			maxMessage: 'Please enter a value less than or equal to {0}'
		}
	};
}


/*!
* Infragistics.Web.ClientUI Editors 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
* Depends on:
* jquery-1.4.4.js
* jquery.ui.core.js
* jquery.ui.widget.js

* Example to use:
*	<script type="text/javascript">
*	$(function () {
*		$('#text1').igValidator({ minLength: 3 });
*	});
*	</script>
*	<input id="text1" type="text" />
*/
/*global jQuery*/
/*global setTimeout*/
(function ($) {
	// _id: backup id if target does not have one
	// _cur: igValidator which opened error-message with ongoing animation
	// _submit: collection of objects, each of them if defined by id of form
	//   each subobject for a form contains references to controls which should be validated on submit events
	var _id = '=id', _cur = null, _submit = {}, _stop = function (e) {
		try {
			e.preventDefault();
			e.stopPropagation();
		} catch (ex) { }
	}, _fid = function (form, fid) {
		var id = form.id;
		if (!id && fid) {
			form._fid = fid;
		}
		return id || form._fid;
	};
	/*
		igValidator is a widget based on jQuery UI that provides functionality to validate value in target.
		It can be attached to a INPUT, TEXTAREA, SELECT html element in order to validate its value and show appropriate error message.
		It also can be used as internal member within igEditor, igCombo and igRating.
		Validation can be triggered on various events like onchange, onblur, onsubmit and when form.submit() was used by application explicitly.
		Every igValidator may have its own rules and enable/disable specific trigger-validation events. If validation failed, then focus can be set back to target element once, always or do not interact with focus.
		If target element is INPUT type=radio, then all elements with attribute name of that target are validated.
		If validator is enabled for igEditor, then any specific failure like not filled required positions in igMaskEditor or invalid day of month in igDateEditor, etc, will trigger validation and show corresponding message.
		In order to customize error strings globally, the $.ig.Validator.locale object can be used.

		In order to customize some of default options globally for all widgets, the "$.ui.igValidator.defaults" object can be used.
		Example:
		$.ui.igValidator.defaults.showAllErrorsOnSubmit = true;
	*/
	$.widget('ui.igValidator', {
		options: {
			/* type="bool" Gets or sets visibility of icon on error message.
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is true. */
			showIcon: null,
			/* type="number" Gets or sets duration of show animation in milliseconds.
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is 300. */
			animationShow: null,
			/* type="number" Gets or sets duration of hide animation in milliseconds.
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is 300. */
			animationHide: null,
			/* type="bool" Gets or sets ability to apply error css to target element.
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is true. */
			enableTargetErrorCss: null,
			/* type="string" Gets or sets location of error label relative to target element.
				Supported value: "bottom", "left" and "right".
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is "bottom". */
			alignment: null,
			/* type="never|0|once|1|always|2" Gets or sets option to set focus back to editor when validation failed. Default value comes from corresponding member in $.ui.igValidator.defaults object, which is undefined. 
                never type="string"
                0 type="number"
                once type="string"
                1 type="number"
                always type="string"
                2 type="number" */
			keepFocus: null,
			/* type="bool" Gets or sets triggering validation when value in editor was changed.
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is true. */
			onchange: null,
			/* type="bool" Gets or sets triggering validation when editor lost focus.
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is true. */
			onblur: null,
			/* type="bool" Gets or sets triggering validation when application called form.submit().
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is false. */
			formSubmit: null,
			/* type="bool" Gets or sets triggering validation when form gets onsubmit event.
				Default value comes from corresponding member in $.ui.igValidator.defaults object, which is true. */
			onsubmit: null,
			/* type="bool" Gets or sets parent/location of error message.
				Value true: use the document.body as parent for error-message.
				Value false: insert error-message in parent of target element.
			*/
			bodyAsParent: true,
			/* type="bool" Gets or sets option to validate if value was entered (not empty text, selected item, etc.)*/
			required: false,
			/* type="number" Gets or sets minimum length of text or minimum number of selected items.*/
			minLength: -1,
			/* type="number" Gets or sets maximum length of text or maximum number of selected items.*/
			maxLength: -1,
			/* type="number" Gets or sets validation for minimum number.*/
			min: null,
			/* type="number" Gets or sets validation for maximum number.*/
			max: null,
			/* type="string|object" Gets or sets regular expression which is used to validate value in text editor.
			    It can be a string or instance of RegExp. */
			regExp: null,
			/* type="bool" Gets or sets option to use the name attribute of checkboxes in order to validate ranges.
				That option has effect only when the target is checkbox. The value of true will use the "name" attribute of target to validate all checkboxes with that name.
				In this case the "required" option will be used to check if at least one checkboxes is checked and the "min/maxLength" options will be used for range validations.
		    */
			checkboxesName: false,
			/* type="object" Gets or sets object that contains custom settings. */
			locale: null,
			/* type="dom" Gets or sets custom jquery element, which innerHTML will be used to show error message. That can be SPAN, LABEL or DIV. */
			errorLabel: null,
			/* type="dom" Gets or sets reference to html element, which is used to process mousedown and mouseup events in order to trigger validation.*/
			element: null,
			/* type="string" Gets or sets selector for css classes.
				That option allows replacing all default css styles of validator by custom values.
				Application should provide css classes for all members defined in the css options with "theme" selector.
			*/
			theme: null,
			/* type="string" Gets or sets text for error-message which overrides all possible specific error-messages.*/
			errorMessage: null
		},
		css: {
			/* Classes applied to the SPAN element of error-label which shows message. Default value is 'ui-igvalidator ui-widget ui-state-error ui-corner-all' */
			label: 'ui-igvalidator ui-widget ui-state-error ui-corner-all',
			/* Classes applied to the SPAN on error-label which contains image. Default value is 'ui-igvalidator-icon ui-icon ui-icon-alert' */
			icon: 'ui-igvalidator-icon ui-icon ui-icon-alert',
			/* Class applied to the target element when validation failed. Default value is 'ui-igvalidator-target' */
			target: 'ui-igvalidator-target'
		},
		locale: {
			/* Message used when validator is not able to identify specific reason for failure */
			defaultMessage: 'Please fix this field',
			/* Message used when user should select a value (in drop-down list, radio buttons or similar) */
			selectMessage: 'Please select a value',
			/* Message for range selection */
			rangeSelectMessage: 'Please select no more than {0} and not less than {1} items',
			/* Message for minimum number of selected items */
			minSelectMessage: 'Please select at least {0} items',
			/* Message for maximum number of selected items */
			maxSelectMessage: 'Please select no more than {0} items',
			/* Message for range of text length */
			rangeLengthMessage: 'Please enter a value between {0} and {1} characters long',
			/* Message for minimum length of text */
			minLengthMessage: 'Please enter at least {0} characters',
			/* Message for maximum length of text */
			maxLengthMessage: 'Please enter no more than {0} characters',
			/* Message for required entry */
			requiredMessage: 'This field is required',
			/* Message regular expression (regExp option) */
			regExpMessage: 'Please fix pattern of this field',
			/* Message for igMaskEditor when required positions are missing */
			maskMessage: 'Please fill all required positions',
			/* Message for igDateEditor when date fields are missing */
			dateFieldsMessage: 'Please enter values in date fields',
			/* Message for igDateEditor when day of month is invalid */
			invalidDayMessage: 'Invalid day of month. Please enter correct day',
			/* Message for igDateEditor when date is invalid (zero day, month or similar) */
			dateMessage: 'Please enter a valid date',
			/* Message for igNumericEditor when string can not be converted to a number (no digits) */
			numberMessage: 'Please enter a valid number',
			/* Message for igDateEditor and igNumericEditor when range validation of editor failed */
			rangeMessage: 'Please enter a value between {0} and {1}',
			/* Message for igDateEditor and igNumericEditor when minValue of editor is set and editor has larger value */
			minMessage: 'Please enter a value greater than or equal to {0}',
			/* Message for igDateEditor and igNumericEditor when maxValue of editor is set and editor has smaller value */
			maxMessage: 'Please enter a value less than or equal to {0}'
		},
		events: {
			/* cancel="true" Event which is raised on validation before default validation logic is applied.
				Return false in order to consider value as invalid and to display error message with ui.message.
				Function takes arguments evt and ui.
				Use ui.message to get text of message.
				Use ui.value to get current value in target. */
			checkValue: null,
			/* cancel="true" Event which is raised after value was validated but before any action takes effect.
				Return false to keep possible old/current error message unchanged, and possible new error message is not displayed.
				Function takes arguments evt and ui.
				Use ui.message to get text of message.
				Use ui.invalid to get state, where true is invalid and false is valid. */
			validation: null,
			/* cancel="true" Event which is raised before error message is displayed.
				Return false in order to prevent error message display.
				Function takes arguments evt and ui.
				Use ui.message to get text of message. */
			errorShowing: null,
			/* cancel="true" Event which is raised before error message is hidden.
				Return false in order to keep error message displayed.
				Function takes arguments evt and ui.
				Use ui.message to get text of message. */
			errorHiding: null,
			/* Event which is raised after error message was displayed.
				Function takes arguments evt and ui.
				Use ui.message to get text of message. */
			errorShown: null,
			/* Event which is raised after error message was hidden.
				Function takes arguments evt and ui.
				Use ui.message to get text of message. */
			errorHidden: null
		},
		_create: function () {
			var v, t, elem, o = this.options, me = this, def = $.ui.igValidator.defaults;
			for (v in o) {
				if (o.hasOwnProperty(v) && o[v] === null && def[v] !== undefined) {
					o[v] = def[v];
				}
			}
			elem = me.element;
			// 1: valid, 2: animation hide error message, 3/4: no error message, 6: invalid, 7: animation show error message, 8/9: error
			me._state = 3;
			me._focTime = 0;
			me._init0();
			t = elem[0].nodeName;
			if (t === 'SELECT') {
				t = 5;
			} else if ((t = elem[0].type) === 'checkbox') {
				t = o.checkboxesName ? 6 : 4;
			} else if (t === 'radio') {
				t = 6;
			} else {
				t = 0;
			}
			me._elem = (t !== 6) ? elem : $('[name=' + elem[0].name + ']').map(function () {
				return (this.form === elem[0].form) ? this : null;
			});
			// 0 - text element (INPUT, TEXTAREA) with val()
			// 1..3 - not used for now
			// 4 - single INPUT type=checkbox
			// 5 - SELECT
			// 6 - INPUT type=radio or INPUT type=checkbox with name (multiple checkboxes/radio buttons)
			me._t = t;
			if (!o.ctl && !o.combo) {
				me._elem.bind(me._evts = {
					keydown: function (e) {
						if ((v = e.keyCode) < 15 || v > 20) {
							me._evt(e, (v === 9) ? null : me, v === 9);
						}
					},
					change: function (e) { me._evt(e, me); },
					cut: function (e) { me._evt(e, me); },
					paste: function (e) { me._evt(e, me); },
					beforecut: function (e) { me._evt(e, me); },
					drop: function (e) { me._evt(e, me); },
					dragend: function (e) { me._evt(e, me); },
					blur: function (e) { me._evt(e, me, 1); }
				});
				if (o.element) {
					o.element.bind(me._evtsE = {
						mousedown: function (e) { me._evt(e, me); },
						mouseup: function (e) { me._evt(e); }
					});
				}
			}
		},
		_evt: function (e, me, blur) {
			var o = this.options;
			if ((blur && !o.onblur) || (!blur && !o.onchange)) {
				return;
			}
			if (me) {
				setTimeout(function () {
					me.validate(e);
				}, 20);
			} else {
				this.validate(e);
			}
		},
		_loc: function (key, m) {
			var o = this.options,
				v = o.errorMessage || o[key += (m ? '' : 'Message')] || (o.locale ? o.locale[key] : null);
			v = v || ($.ig && $.ig.Validator && $.ig.Validator.locale ? $.ig.Validator.locale[key] : null);
			return v || this.locale[key];
		},
		// returns: 2-keep focus, 1-keep focus once, null-do not keep focus
		_foc1: function (o) {
			o = o.keepFocus;
			return (o && this._t !== 6 && !(o.indexOf && o.indexOf('n') === 0)) ? ((o === 'once' || o === 1) ? 1 : 2) : null;
		},
		// returns 1 if tab-key event was canceled
		_onTab: function (e) {
			// suppress tab key
			if (e && e.keyCode === 9 && this._foc1(this.options) === 2) {
				_stop(e);
				return 1;
			}
		},
		_init0: function (end) {
			var form, fid, obj, id = this._id, o = this.options;
			// coming from igEditor
			if (end) {
				this._doError();
			} else {
				if (o.ctl) {
					o.ctl._validator = this;
				}
			}
			form = this.element[0].form;
			if (!form) {
				return;
			}
			fid = _fid(form, 'fid');
			// build faked unique id (like igRating)
			if (!id) {
				id = this.element[0].id;
				if (!id) {
					id = (_id += _id.length);
				}
				this._id = id;
			}
			obj = _submit[fid];
			if (!end && (o.onsubmit || o.formSubmit)) {
				if (!form._ig_onsubmit && o.onsubmit) {
					form._ig_onsubmit = 1;
					$(form).submit(function (e) {
						var f = _submit[_fid(this)];
						if (f) {
							f.validate(e);
						}
					});
				}
				if (!form._ig_formsubmit && o.formSubmit) {
					form._ig_formsubmit = form.submit;
					form.submit = function () {
						var f = _submit[_fid(this)];
						if (f && f.validate()) {
							return;
						}
						if (this._ig_formsubmit) {
							this._ig_formsubmit();
						}
					};
				}
				if (!obj) {
					obj = _submit[fid] = { ctls: {}, validate: function (e) {
						// 1: show error label
						var i, inv = false, lbl = 1, ctls = this.ctls;
						for (i in ctls) {
							if (ctls.hasOwnProperty(i) && ctls[i].validate(e, lbl)) {
								inv = true;
								if (!$.ui.igValidator.defaults.showAllErrorsOnSubmit) {
									// 2: do not show error label
									lbl = 2;
								}
							}
						}
						if (e && inv) {
							_stop(e);
						}
						return inv;
					}};
				}
				obj.ctls[id] = this;
			} else if (obj && obj.ctls && obj.ctls[id]) {
				delete obj.ctls[id];
			}
			/*
			if (obj && obj.ctls) {
				for (o in obj.ctls) {
					if (obj.ctls.hasOwnProperty(o) && typeof o === 'string' && o.length > 0) {
						return;
					}
				}
				alert('clear _submit');
			}
			*/
		},
		getLocaleOption: function (name) {
			/* Gets calculated value of locale option used by validator.
				paramType="string" Name of locale option such as "requiredMessage", "minMessage", etc.
				returnType="string" Returns value of locale option.
			*/
			return this._loc(name, 1);
		},
		isMessageDisplayed: function () {
			/* Checks if message is displayed.
				returnType="bool" Returns true if message is displayed, false if message is not displayed.
			*/
			return this._state > 6;
		},
		isValidState: function () {
			/* Checks if target element in valid state.
				returnType="bool" Returns true if target in valid state, false if target invalid.
			*/
			return !(this._state >= 6 || this.validate(null, null, 1));
		},
		hide: function (keepCss) {
			/* Hide possible error message.
				paramType="bool" optional="true" True: keep error-css applied to target, false: remove error-css from target.
			*/
			this._doError(null, null, keepCss ? 6 : 5);
		},
		// return: 1/2 - invalid
		validate: function (e, submit, check) {
			/* Trigger validation.
				paramType="object" optional="true" Reference to browser event.
				paramType="number" optional="true" Value 1 is used when validation was triggered by submit.
				paramType="bool" optional="true" Internal use only: check if value is valid and do not show any error message or styles.
				returnType="number|object" Possible values:
				1 - application canceled error message.
				2 - error message is displayed
				Any other value or undefined means that target is valid.
			*/
			var v, v2, val, txt = null, mes = 'Length', t = this._t, len = -1, o = this.options, el = this.element;
			// method can be called by setTimeout and igValidator can be already destroyed
			if (!el) {
				return;
			}
			// 4 - single INPUT type=checkbox
			// 5 - SELECT
			// 6 - INPUT type=radio or INPUT type=checkbox with name (multiple checkboxes/radio buttons)
			if (t > 3) {
				mes = 'Select';
				len = val = (t === 5) ? (el[0].multiple ? $('option:selected', el[0]).length : el[0].selectedIndex) : this._elem.filter(':checked').length;
			} else {
				val = el.hasClass('ui-igcombo-nulltext') ? '' : el.val();
				len = val.length;
			}
			if (o.ctl) {
				// reset flag in igEditor for external validation
				delete o.ctl._invPlus;
			}
			if (!this._trigger('checkValue', e, v2 = { owner: this, message: this._loc('default'), value: o.ctl ? o.ctl.value() : val })) {
				// application did its own validation
				if (o.ctl && !check) {
					// set flag in igEditor about external validation
					o.ctl._invPlus = v2.message;
				}
				return check ? 2 : this._doError(v2.message, e, submit);
			}
			if (len === 0) {
				if (check) {
					if (o.required) {
						return 2;
					}
				} else if (!o.required) {
					return this._doError(null, e, submit);
				}
			}
			// do validations not supported by igEditor
			v = o.regExp;
			if (v && len > 0) {
				if (!v.test) {
					v = new RegExp(v.toString());
				}
				txt = v.test(val) ? null : this._loc('regExp');
				if (o.ctl) {
					// set flag in igEditor about external validation
					o.ctl._invPlus = txt;
				}
			}
			if (!txt && o.required && (len === 0 || !val)) {
				// 0 - text element (INPUT, TEXTAREA) with val()
				// 4 - single INPUT type=checkbox
				// 5 - SELECT
				// 6 - INPUT type=radio or INPUT type=checkbox with name (multiple checkboxes/radio buttons)
				txt = this._loc((t > 4) ? 'select' : 'required');
			}
			if (!txt) {
				v = o.minLength;
				v2 = o.maxLength;
				if (len >= 0 && (v > len || (v2 > 0 && v2 < len))) {
					if (v > 0 && v2 > 0) {
						txt = this._loc('range' + mes).replace('{0}', v2).replace('{1}', v);
					} else {
						txt = this._loc(((v > 0) ? 'min' : 'max') + mes).replace('{0}', (v > 0) ? v : v2);
					}
					if (o.ctl) {
						// set flag in igEditor for external validation
						o.ctl._invPlus = txt;
					}
				}
			}
			if (txt) {
				return check ? txt : this._doError(txt, e, submit);
			}
			if (o.ctl) {
				v = o.ctl._doInvalid(null, 9);
				v = v ? v.message : null;
				return check ? v : this._doError(v, e, submit);
			}
			// process only string (no bool or number)
			// 0 - text element (INPUT, TEXTAREA) with val()
			if (!txt && t < 2 && len > 0 && (v = ((typeof o.min === 'number') ? 1 : 0) + ((typeof o.max === 'number') ? 2 : 0)) > 0) {
				if (isNaN(val = parseFloat(val))) {
					txt = this._loc('number');
				} else if (v === 3 && (val < o.min || val > o.max)) {
					txt = this._loc('range').replace('{0}', o.min).replace('{1}', o.max);
				} else if (v === 1 && val < o.min) {
					txt = this._loc('min').replace('{0}', o.min);
				} else if (v === 2 && val > o.max) {
					txt = this._loc('max').replace('{0}', o.max);
				}
			}
			return check ? txt : this._doError(txt, e, submit);
		},
		// adjust label on move
		_xyCheck: function (stop) {
			// this._xy members:
			// x/y: original "left/top" of element
			// x0/y0: shifts of "left/top" from original position
			// e: element to measure e.offset()
			// xDD/yDD: "left/top" of drop-down label
			// i: setInterval id
			var shift, xyE, xy = this._xy;
			if (!xy) {
				return;
			}
			// ensure that target is still visible (like parent dialog was closed)
			if (this._elem && this._elem[0].offsetWidth) {
				xyE = xy.e.offset();
				shift = xyE.left - xy.x;
				if (shift !== xy.x0) {
					xy.x0 = shift;
					this._dd.css('left', (xy.xDD + shift) + 'px');
				}
				shift = xyE.top - xy.y;
				if (shift !== xy.y0) {
					xy.y0 = shift;
					this._dd.css('top', (xy.yDD + shift) + 'px');
				}
			}
			if (stop || !xyE) {
				delete this._xy;
				clearInterval(xy.i);
			}
			// target was hidden
			if (!xyE) {
				this._doError();
			}
		},
		// show/hide drop-down validator error label
		// return: 2 - error message was displayed, 1 - application canceled error message
		// submit=5: unconditionally hide error label, submit=6: unconditionally hide error label and error-css
		_doError: function (txt, e, submit) {
			var marg, elem0, end, xy0, xy, arg, elem, val, ctl, align, same, aLbl, x0, y0, el,
				zi = 1,
				me = this,
				css = me.css,
				x = 'left',
				y = 'top',
				state = me._state,
				show = txt,
				dd = me._lbl,
				o = me.options;
			if (!submit) {
				submit = 0;
			}
			ctl = o.ctl;
			// align: 0-bottom, -1-left, 1-right
			align = (o.alignment === 'bottom') ? 0 : (o.alignment === 'left') ? -1 : 1;
			// text for current error message (while hide)
			if (!txt && dd) {
				txt = dd[0]._txt;
			}
			// state: 1: valid, 2: animation hide error message, 3/4: no error message, 6: invalid, 7: animation show error message, 8/9: error
			if (state < 6 && !show) {
				return;
			}
			same = dd && dd[0]._txt === txt && !me._changed;
			this._changed = null;
			// suppress tab key
			if (show && me._onTab(e) && same) {
				return 2;
			}
			if (show && same) {
				if (state > 5) {
					if (_cur === me) {
						me._focus(o, submit, e);
					}
					return 2;
				}
			}
			// do not allow focus to another validator if previous validator attempts to set focus back to itself
			if (!submit && show && _cur && new Date().getTime() - _cur._focTime < 100) {
				return 2;
			}
			arg = { owner: me, message: txt, invalid: !!show };
			// submit=5: unconditionally hide error label, submit=6: unconditionally hide error label and error-css
			if (submit < 5 && !me._trigger('validation', e, arg)) {
				// application canceled validation
				return;
			}
			// 1: valid, 2: animation hide error message, 3/4: no error message, 6: invalid, 7: animation show error message, 8/9: error
			me._state = show ? 6 : 1;
			elem = o.element || me.element;
			// adjust appearance of target editor
			if (o.enableTargetErrorCss) {
				if (show) {
					elem.addClass(css.target);
				// submit=5: unconditionally hide error label
				} else if (submit !== 5) {
					elem.removeClass(css.target);
				}
			}
			// 2: flag which set while submit: error message should not be displayed
			if (submit === 2) {
				return 2;
			}
			if (!me._trigger(show ? 'errorShowing' : 'errorHiding', e, arg)) {
				// 1: flag that application canceled error message
				return 1;
			}
			if (!show && !dd) {
				return;
			}
			txt = arg.message;
			// 1: valid, 2: animation hide error message, 3/4: no error message, 6: invalid, 7: animation show error message, 8/9: error
			// increment to 2 or 7 (previous state was 1 or 6)
			me._state++;
			// true: insert error element in front of editor and use marginLeft/Top
			// false: append to body and use left/top
			marg = !o.bodyAsParent;
			if (marg) {
				x = 'marginLeft';
				y = 'marginTop';
			}
			elem0 = ctl ? ctl._element : elem;
			// check for permanent custom error label
			aLbl = o.errorLabel;
			// check for mvc
			if (typeof aLbl === 'string') {
				aLbl = $('body').find('[data-valmsg-for="' + aLbl + '"]').removeClass('field-validation-valid').addClass('field-validation-error');
			}
			if (aLbl && (!aLbl.length || !aLbl.find)) {
				aLbl = null;
			}
			if (aLbl) {
				dd = aLbl;
			} else if (!dd) {
				dd = me.element[0].id;
				if (dd) {
					dd = ' for="' + dd + '"';
				}
				dd = $('<label' + dd + '/>').addClass(css.label).css({ position: 'absolute', visibility: 'hidden' });
				dd[0].unselectable = 'on';
				dd.html(txt);
				// _id: 98:drop-down error label
				dd[0]._id = 98;
				me._dd = o.theme ? $('<span/>').addClass(o.theme).css('position', 'absolute').append(dd) : dd;
				if (marg) {
					me._dd.prependTo(elem0.parent());
				} else {
					me._dd.appendTo($('body'));
				}
			}
			me._lbl = dd;
			if (show) {
				dd[0]._txt = txt;
				if (aLbl) {
					dd.html(txt).show();
				} else {
					me._dd.css(x, '0px').css(y, '0px');
					if (o.showIcon) {
						if (txt === ' ' || txt === '&nbsp;') {
							txt = '';
						}
						txt = '<span class="' + css.icon + '"></span><span style="display:inline-block;width:18px;"></span>' + txt;
					}
					dd.html(txt);
					dd.css('width', 'auto').css('height', 'auto');
					me._width = Math.max(dd.width(), 5);
					me._height = Math.max(dd.height(), 10);
					if (o.showIcon) {
						me._height = Math.max(dd.children()[0].offsetHeight, me._height);
					}
				}
				try {
					elem0.parentsUntil(document.body).add(elem0).add(elem).add(dd).each(function () {
						val = this.style ? this.style.zIndex : 0;
						val = val ? parseInt(val, 10) : null;
						if (val && !isNaN(val) && val > zi) {
							zi = val;
						}
					});
				} catch (ex) { }
				dd.css('zIndex', zi);
				me._focTime = 0;
				_cur = me;
			}
			// action on end animation
			end = function () {
				if (show) {
					dd.css('filter', '');
				} else {
					if (aLbl) {
						aLbl.html(' ').hide();
					} else {
						me._dd.remove();
					}
					me._dd = me._lbl = _cur = null;
				}
				// 1: valid, 2: animation hide error message, 3/4: no error message, 6: invalid, 7: animation show error message, 8/9: error
				// increment to 3 or 8 (previous state was 2 or 7)
				me._state++;
			};
			// show error label
			if (show) {
				me._focus(o, submit, e);
				val = o.animationShow;
				if (val < 5) {
					val = null;
				}
				if (aLbl) {
					dd.css('opacity', 0).show();
				} else {
					dd.css({ opacity: val ? 0 : 1, height: (val ? 0 : me._height) + 'px', width: Math.floor(me._width / ((val && align >= 0) ? 2 : 1)) + 'px', display: '', visibility: 'visible' });
					// if element was swapped, then under Firefox offset() returns wrong values: use original element
					el = (ctl && ctl._swap) ? me.element : elem;
					xy = el.offset();
					if (!marg) {
						x0 = xy.left;
						y0 = xy.top;
					}
					xy.top += align ? 0 : el.outerHeight();
					if (ctl && ctl._swap) {
						xy.left -= ctl._leftShift();
					}
					if (align) {
						xy.left += (align < 0) ? -dd[0].offsetWidth : elem0[0].offsetWidth;
					}
					if (marg) {
						xy0 = dd.offset();
						xy.left -= xy0.left;
						xy.top -= xy0.top;
					} else {
						me._xy = { x0: 0, y0: 0, x: x0, y: y0, e: el, xDD: xy.left, yDD: xy.top, i: setInterval(function () {
							me._xyCheck();
						}, 300)};
					}
					me._dd.css(x, xy.left + 'px').css(y, xy.top + 'px');
				}
				if (val) {
					dd.animate(aLbl ? { opacity: 1 } : { opacity: 1, height: me._height, width: me._width }, val, null, end);
				} else {
					end();
				}
				me._trigger('errorShown', e, arg);
				// 2: flag error message was displayed
				return 2;
			}
			me._xyCheck(true);
			// hide error label
			val = o.animationHide;
			if (val < 5) {
				val = null;
			}
			if (val) {
				if (aLbl) {
					dd.animate({ opacity: 0 }, val, null, end);
				} else {
					dd.animate({ opacity: 0.6 }, Math.floor(val * 0.34)).animate({ opacity: 0, height: 0, width: Math.floor(me._width / ((align < 0) ? 1 : 2)) }, Math.floor(val * 0.66), null, end);
				}
			} else {
				end();
			}
			me._trigger('errorHidden', e, arg);
		},
		_focus: function (o, submit, e) {
			var el = (!submit && this._foc1(o)) ? this.element : null;
			e = (e && e.keyCode !== 9) ? e.type : '';
			// unknown INPUT or igEditor without focus
			if (el && !(o.ctl && o.ctl._fcs) && (this._foc1(o) !== 1 || !this._focTime) && e.indexOf('key') < 0 && e.indexOf('mouse') < 0) {
				$.ui.igValidator._keepFoc = o.ctl;
				e = $.ui.igValidator._dd;
				if (e) {
					e._doDrop();
				}
				this._focTime = new Date().getTime();
				setTimeout(function () {
					try {
						el.focus();
					} catch (ex) { }
				}, 0);
			}
		},
		_setOption: function (key, val) {
			if (this.options[key] === val) {
				return this;
			}
			$.Widget.prototype._setOption.apply(this, arguments);
			if (typeof val !== 'function' && key !== 'locale') {
				this._init0();
			}
			return this;
		},
		destroy: function () {
			/* Destroys igValidator.
				returnType="object" Returns reference to this igValidator.
			*/
			if (!this._elem) {
				return this;
			}
			var o = this.options;
			if (!o.ctl) {
				this._elem.unbind(this._evts);
				if (this._evtsE) {
					o.element.unbind(this._evtsE);
				}
			}
			this._init0(1);
			o.element = o.ctl = this._evts = this._evtsE = this._elem = null;
			$.Widget.prototype.destroy.apply(this, arguments);
			return this;
		}
	});
	// editor: igEditor or igCombo
	// act: 'drop'-show dropdown, 'hide'-hide dropdown, true-focus, undefined/false-blur/remove
	// return: true-cancel action
	$.ui.igValidator._act = function (editor, act) {
		var d, f, v = $.ui.igValidator;
		if (!v) {
			return;
		}
		// dropped igEditor or igCombo
		d = v._dd;
		if (d && (!d._ddOn || !(d._field || d.mainElem))) {
			d = null;
			delete v._dd;
		}
		// focused igEditor
		f = v._keepFoc;
		if (f && !f._field) {
			f = null;
			delete v._keepFoc;
		}
		if (act === 'drop') {
			if (f && f !== editor && !f.validate()) {
				return true;
			}
			v._dd = editor;
			return;
		}
		if (act === 'hide') {
			if (d === editor) {
				delete v._dd;
			}
			return;
		}
		if (!act && f === editor) {
			delete v._keepFoc;
		}
		return f && f !== editor;
	};
	$.extend($.ui.igValidator, { version: '12.2.20122.1021' });
	/* Defaults used by igValidator. If appication change them, then all igValidators created after that will pickup new defaults. */
	$.ui.igValidator.defaults = {
		/* type="bool" Gets or sets ability to show all error labels on submit.
			Value false will show only error message for first failed target.
			Default value is false. */
		showAllErrorsOnSubmit: false,
		/* type="bool" Gets or sets visibility of icon on error message. Default value is true. */
		showIcon: true,
		/* type="number" Gets or sets duration of show animation in milliseconds. Default value is 300. */
		animationShow: 300,
		/* type="number" Gets or sets duration of hide animation in milliseconds. Default value is 300. */
		animationHide: 300,
		/* type="bool" Gets or sets ability to apply error css to target element. Default value is true. */
		enableTargetErrorCss: true,
		/* type="string" Gets or sets location of error label relative to target element.
			Supported values: "bottom", "left" and "right".
			Default value is "bottom". */
		alignment: 'bottom',
		/* type="object" Gets or sets option to set focus back to editor when validation failed.
			Supported values:
			'never' or 0 or null - focus is not set back to editor.
			'once' or 1 - focus is set back to editor only once.
			'always' or 2 - focus is set back to editor every time validation fails.
			Default value is null. */
		keepFocus: null,
		/* type="bool" Gets or sets triggering validation when value in editor was changed. Default value is true. */
		onchange: true,
		/* type="bool" Gets or sets triggering validation when editor lost focus.
			Default value comes from corresponding member in $.ui.igValidator.defaults object, which is true. */
		onblur: true,
		/* type="bool" Gets or sets triggering validation when application called form.submit(). Default value is false. */
		formSubmit: false,
		/* type="bool" Gets or sets triggering validation when form gets onsubmit event. Default value is true. */
		onsubmit: true
	};
}(jQuery));



