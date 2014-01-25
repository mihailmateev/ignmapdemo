/*!
* Infragistics.Web.ClientUI Editors localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Editor) {
	$.ig.Editor = {
		locale: {
			spinUpperTitle: 'Increment',
			spinLowerTitle: 'Decrement',
			buttonTitle: 'Show list',
			clearTitle: 'Clear value',
			datePickerButtonTitle: 'Show calendar'
		}
	};
}


/*!
* Infragistics.Web.ClientUI Editors 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.4.4.js
* jquery.ui.core.js
* jquery.ui.widget.js
* jquery.ui.datepicker.js
* infragistics.util.js
*
* Example to use:
*	<script type="text/javascript">
*	$(function () {
*		$('#editor1').igEditor();
*	});
*	</script>
*	<input id="editor1" type="text" />
*/

/*global jQuery, setTimeout, setInterval, clearInterval, document, window*/
(function ($) {
	var _aNull = function (v, nan) {
		return v === null || v === undefined || (nan && typeof v === 'number' && isNaN(v));
	}, _int = function (val, nan) {
		if (isNaN(val = parseInt(val, 10))) {
			val = nan || 0;
		}
		return val;
	}, _pad_bdr = function (elem, horiz) {
		var v1 = horiz ? 'Left' : 'Top', v2 = horiz ? 'Right' : 'Bottom';
		return _int(elem.css('padding' + v1)) + _int(elem.css('padding' + v2)) +
			_int(elem.css('border' + v1 + 'Width')) + _int(elem.css('border' + v2 + 'Width'));
	}, _str = function (v) {
		return _aNull(v) ? '' : v.toString();
	}, _now = function () {
		return new Date().getTime();
	}, _offset = function (e, xy) {
		xy = xy || e.offset();
		e = e ? e[0].ownerDocument : document;
		e = e ? e.documentElement : null;
		var z = e ? e.msContentZoomFactor : null;
		if (z && z > 1) {
			xy.left += e.scrollLeft - window.pageXOffset;
			xy.top += e.scrollTop - window.pageYOffset;
		}
		return xy;
	}, _stop = function (e) {
		try {
			e.preventDefault();
			e.stopPropagation();
		} catch (ex) { }
	};
	$.ig = $.ig || {};
	/*
		igEditor is a widget based on jQuery UI that provides ability to edit text and show drop-down list.
		It is the base class for igTextEditor, igMaskEditor, igNumericEditor, igCurrencyEditor, igDateEditor and igDatePicker.
		Any extended editor can be created as igEditor with appropriate value of the "type" option, and any option of extended editor can be set within igEditor.
	*/
	$.widget('ui.igEditor', {
		options: {
		    /* type="object" Gets sets value in editor. The effect of setting/getting that option depends on type of editor and on dataMode options. That can be string, number or Date depending on type of editor. If it is used on initialization and the type option is missing, then if 'value' is Number, then 'numeric' editor is created automatically and if 'value' is Date, then the 'date' editor is created. */
			value: null,
			/* type="number" Gets sets value in tabIndex for editor.  */
			tabIndex: null,
			/* type="string" Sets gets text which appears in editor when editor has no focus and "value" in editor is null or empty string.  */
			nullText: null,
			/* type="dropdown|clear|spin" Sets gets visibility of spin and drop-down button. That option can be set only on initialization. Combinations like 'dropdown,spin' or 'spinclear' are supported too.
			    dropdown type="string" button to open list is located on the right side of input-field (or left side if base html element has direction:rtl);
			    clear type="string" button to clear value is located on the right side of input-field (or left side if base html element has direction:rtl);
			    spin type="string" spin buttons are located on the right side of input-field (or left side if base html element has direction:rtl).
			*/
			button: 'none',
			/* type="null|left|right|center" Sets gets horizontal alignment of text in editor. If that option is not set, then 'right' is used for 'numeric', 'currency' and 'percent' editors and the 'left' is used for all other types of editor.
				null type="object"
				left type="string"
				right type="string"
				center type="string"
			*/
			textAlign: null,
			/* type="array" Sets gets list of items which are used for drop-down list, spin, validation and auto-complete functionality.
				Items in list can be strings, numbers, dates or objects in any combination.
				If type of editor is date or datepicker and item is string, then igEditor will try to convert it to Date object and show item in display format.
				If type of editor is numeric, currency or percent and item is string, then igEditor will try to convert it to number and show item in display format.
				If item is object and it has member "text", then that member is used.
				If item is object and besides "text" has function getHtml(), then that function is used to render item in list.
				The item or item.text is used to set "value" of particular editor when list-item is selected. */
			listItems: null,
			/* type="string" Sets gets selector for css classes used by editor.
				That option allows replacing all default css styles of editor by custom values.
				Application should provide css classes for all members defined in the css options with "theme" selector.
				For example, if that property is set to "mytheme", then application should provide following css classes:
				.mytheme .ui-igedit-field{...};
				.mytheme .ui-igedit-focus{...};
				etc.
				Note: changing theme is not supported when base element is INPUT or TEXTAREA and renderInContainer or button are not enabled. */
			theme: null,
			/* type="text|0|mask|1|date|2|datepicker|3|numeric|4|currency|5|percent|6" Sets type of editor. If that option is not set, but the 'value' option is defined, then if type of 'value' is Number, then the 'numeric' type is used, if type of 'value' is Date, then the 'date' type is used. For all other types of 'value' the 'text' type is used. Note: if that option is set to 'datepicker', then application should ensure that css and js files used by jquery.ui.datepicker are available.
				text type="string" Text editor is created
				0 type="number" Text editor is created (same as 'text')
				mask type="string" Mask editor is created
				1 type="number" Mask editor is created (same as 'mask')
				date type="string" Date-time editor is created
				2 type="number" Date-time editor is created (same as 'date')
				datepicker type="string" Date-picker is created
				3 type="number" Date-picker is created (same as 'datepicker')
				numeric type="string" Numeric editor is created
				4 type="number" Numeric editor is created (same as 'numeric')
				currency type="string" Currency editor is created
				5 type="number" Currency editor is created (same as 'currency')
				percent type="string" Percent editor is created
				6 type="number" Percent editor is created (same as 'percent')
			*/
			type: null,
			/* type="object" Sets gets strings used for title of buttons. Value of object should contain pairs or key:value members. Note: any sub-option of locale can appear within the main option of igEditor. In this case those values within main options will have highest priority and override corresponding value in locale. */
			locale: null,
			/* type="number" Sets gets width of editor in pixels.
				Only positive values have effect. If that option is not set, then value of style.width of base html element will be used automatically. However, that value should be in the px units. */
			width: null,
			/* type="number" Sets gets height of editor in pixels.
				Only positive values have effect.
				If that option is not set, then value of style.height of base html element will be used automatically. However, that value should be in the px units. */
			height: null,
			/* type="object" Sets gets options supported by igValidator.
				In order to enable validation and use defaults, an empty object can be used.
				Note: validation rules of igValidator, such as min, max, minLength, required are not supported, but similar properties of igEditor should be used. */
			validatorOptions: null,
			/* type="bool" Set gets validation for empty value in editor.  */
			required: false,
			/* type="string" Sets gets style.display for outer html element.
				The value of "" will disable changing style.display.
				If the base html element is not INPUT, TEXTAREA, SPAN or DIV, then it is recommended to set this option to an empty string,
				because, some browsers may fail to handle display other than default value of browser.
				For example, if base element for editor is TD, then behavior in Chrome can be problematic.
			*/
			display: 'inline-block',
			/* type="bool" Sets gets option to wrap input field into SPAN..
				That option can be set only on initialization and it is available only when base element is INPUT or TEXTAREA.
				If drop-down button or spin-buttons are enabled or the theme is set, then that option has no effect.
				The reason for that property is to allow vertical alignment of several igEditor controls when they are located in html inline and some of them have enabled buttons.
				If all editors are created within SPAN wrapper, then they will appear on the same line. Otherwise, editors in SPANs will be shifted 3-6 pixels above INPUT editors. */
			renderInContainer: false,
			/* type="select|-1|start|0|end|1|default|2" Sets gets behavior of selection/caret in input-field when editor gets focus.
				select type="string" Select all text
				-1 type="number" Select all text
				start type="string" Set caret at the beginning of text
				0 type="number" Set caret at the beginning of text
				end type="string" Set caret at the end of text
				1 type="number" Set caret at the end of text
				default type="string" Use default behavior of browser (in case of mask, numeric and date editors it may be unreliable)
				2 type="number" Use default behavior of browser (in case of mask, numeric and date editors it may be unreliable). */
			selectionOnFocus: -1,
			/* type="bool" Set gets ability to modify editor from keyboard (false) or disables keyboard (true).
				Notes:
				If the "spinOnReadOnly" is enabled, then value will be modified on spin regardless of the "readOnly".
				If the "listItems" has items and "dropDownTriggers" is defined, then value will be modified from drop-down list regardless of the "readOnly". */
			readOnly: false,
			/* type="bool" Sets gets ability to override the "readOnly" option and allow changes "value" of editor on spin events. Value false does not allow spin when "readOnly" is true. */
			spinOnReadOnly: false,
			/* type="bool" If that option is disabled and the editor is not focused, then a mouse click on the spin button will keep the text in the editor in display (not focus) format and perform spin actions.
			*/
			focusOnSpin: false,
			/* type="bool" Sets gets ability to automatically set value in editor to opposite limit, when spin action reached minimum or maximum limit.
				In case of listOfItems, the first and the last items in list are used as minimum and maximum values.
			*/
			spinWrapAround: false,
			/* type="bool" Sets gets ability to hide the Enter key from browser.
			*/
			hideEnterKey: true,
			/* type="bool" Sets gets ability to override the "readOnly" option and allow showing the drop-down list and changing the value in the editor from a list. Value false does not allow drop-down when "readOnly" is true. */
			dropDownOnReadOnly: false,
			/* type="arrow|button|focus|A-Z" Sets gets list of actions which trigger display of drop-down list or calendar.
				The list should include flags separated by the "," character. Flags may include optional "ctrl+", "shift+" or "alt+" prefix.
				If prefix is defined, then action is triggered for combination of flag-action with Ctrl, Shift or Alt key.
				Empty string disables drop-down functionality.
				arrow type="string" Down-arrow shows drop-down and up-arrow hides drop-down;
				button type="string" Shows and hides drop-down;
				focus type="string" Shows drop-down on focus.
				A-Z type="string" Any upper case characters show drop-down. */
			dropDownTriggers: 'button,ctrl+arrow,alt+arrow',
			/* type="bool" Sets gets location of drop-down list.
				Value true will create html element for list as a child of main html element.
				Value false creates list as a child of body.
				Notes:
				That option has effect only for drop-down defined by listOfItems.
				The value of true is supported only when main (outer) html element of editor is container such as SPAN or DIV, or buttons are enabled, or renderInContainer is enabled, the theme is set.
				The value of true allows a better positioning and can be useful when editor is located in complex layout and containers with "position:fixed". */
			listDropDownAsChild: false,
			/* type="number" Sets gets custom width of drop-down list in pixels. If value is equal to 0 or negative, then the width of editor is used. */
			listWidth: 0,
			/* type="number" Sets gets maximum height of drop-down list in pixels. If value is equal to 0 or negative, then the height of list is defined by number of items in list. */
			listMaxHeight: 300,
			/* type="number" Sets gets number of columns in drop-down list.*/
			listColumns: 1,
			/* type="number" Sets gets duration of animation in milliseconds when drop-down list or calendar is displayed. Default is 200. If value is less than 5, then animation is disabled. */
			animationShowDuration: 200,
			/* type="number" Sets gets duration of animation in milliseconds when drop-down list is hidden. That option is not supported when "type" is set to "datepicker", because the jquery.ui.datepicker does not have similar feature. Default is 200. If value is less than 5, then animation is disabled. */
			animationHideDuration: 200,
			/* type="string" Gets sets name of (hidden) INPUT element, which value will be set to current value of editor on any change. */
			inputName: null
		},
		events: {
			/* cancel="true" Event which is raised on keydown event.
				Return false in order to cancel key action.
				Function takes arguments evt and ui.
				Use ui.key to obtain value of keyCode. */
			keydown: 0,
			/* cancel="true" Event which is raised on keypress event.
				Return false in order to cancel key action.
				Function takes arguments evt and ui.
				Use ui.key to obtain value of keyCode.
				Set ui.key to another character which will replace original entry. */
			keypress: 1,
			/* Event which is raised on keyup event.
				Function takes arguments evt and ui.
				Use ui.key to obtain value of keyCode. */
			keyup: 2,
			/* Event which is raised on mousedown at any part of editor including drop-down list.
				Function takes arguments evt and ui.
				Use ui.elementType to obtain type of html element under mouse, such as field, button, spinUpper, spinLower or item#.
				Use ui.id and ui.elementType to obtain flag which represents html element under mouse. */
			mousedown: 3,
			/* Event which is raised on mouseup at any part of editor including drop-down list.
				Function takes arguments evt and ui.
				Use ui.elementType to obtain type of html element under mouse, such as field, button, spinUpper, spinLower or item#.
				Use ui.id and ui.elementType to obtain flag which represents html element under mouse. */
			mouseup: 4,
			/* Event which is raised on mousemove at any part of editor including drop-down list.
				Function takes arguments evt and ui.
				Use ui.elementType to obtain type of html element under mouse, such as field, button, spinUpper, spinLower or item#.
				Use ui.id and ui.elementType to obtain flag which represents html element under mouse. */
			mousemove: 5,
			/* Event which is raised on mouseover at any part of editor including drop-down list.
				Function takes arguments evt and ui.
				Use ui.elementType to obtain type of html element under mouse, such as field, button, spinUpper, spinLower or item#.
				Use ui.id and ui.elementType to obtain flag which represents html element under mouse. */
			mouseover: 6,
			/* Event which is raised on mouseleave at any part of editor including drop-down list.
				Function takes arguments evt and ui.
				Use ui.elementType to obtain type of html element under mouse, such as field, button, spinUpper, spinLower or item#.
				Use ui.id and ui.elementType to obtain flag which represents html element under mouse. */
			mouseleave: 7,
			/* Event which is raised when input field of editor gets focus.
				Function takes argument evt.
				Use evt.originalEvent to obtain reference to event of browser. */
			focus: 8,
			/* Event which is raised when input field of editor loses focus.
				Function takes argument evt.
				Use evt.originalEvent to obtain reference to event of browser. */
			blur: 9,
			/* cancel="true" Event which is raised before value in editor was changed.
				Return false in order to cancel change.
				It can be raised on lost focus or on spin events.
				Function takes arguments evt and ui.
				Use ui.value to obtain new value and ui.oldValue to obtain old value. */
			valueChanging: 10,
			/* Event which is raised after value in editor was changed. It can be raised on lost focus or on spin events.
				Function takes arguments evt and ui.
				Use ui.value to obtain new value and ui.oldValue to obtain old value. */
			valueChanged: 11,
			/* Event which is raised after text in editor was changed.
				Function takes arguments evt and ui.
				Use ui.value to obtain new value and ui.oldValue to obtain old value. */
			textChanged: 12,
			/* Event which is raised on lost focus when editor contains invalid value. That event is available for all editors besides default "text" type editor.
				Function takes arguments evt and ui.
				Use ui.value to obtain suggested value.
				Set ui.value to change suggested value.
				If type of editor is numeric, currency, percent, date or datepicker, then ui.text contains actual text entered by user.
				If type of editor is numeric, currency or percent, then the ui.reason may have following flags: "null", "format" or "limit".
				If type of editor is date or datepicker, then ui contains following additional members:
				ui.reason may have following flags: "null", "dayOfMonth", "numberOfFields", "limit" or "invalid";
				ui.year - year of entered date;
				ui.month - month of entered date;
				ui.day - day of entered date;
				ui.hours - hours of entered date;
				ui.minutes - minutes of entered date;
				ui.seconds - seconds of entered date;
				ui.milliseconds - milliseconds of entered date. */
			invalidValue: 13,
			/* cancel="true" Event which is raised on spin event.
				Return false in order to cancel spin.
				Function takes arguments evt and ui.
				Use ui.delta to obtain delta for increment or decrement.
				Use ui.value to obtain the "value" of editor before spin action. */
			spin: 14,
			/* Event which is raised when button was clicked by mouse.
				Function takes argument evt.
				Use evt.originalEvent to obtain reference to event of browser. */
			buttonClick: 15,
			/* cancel="true" Event which is raised before drop-down list or calendar is opened.
				Return false in order to cancel drop-down action.
				Function takes argument evt.
				Use evt.originalEvent to obtain reference to event of browser. */
			showDropDown: 16,
			/* cancel="true" Event which is raised before drop-down list or calendar is opened.
				Function takes argument evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.value to obtain reference to the selected item in list or Date in calendar.
				If ui.value is not null and not undefined, that it means that drop-down was closed due to selection from drop-down list or from calendar.
				Otherwise, drop-down was closed due to lost focus or Esc key press.
				Return false in order to cancel hide action and keep drop-down visible.
				It is not recommended to cancel that action on blur event.
				Note: In case of calendar of datepicker, the evt or evt.originalEvent can be null. That happens if calendar was closed on blur or by Esc key.
				Returning the false in this situation will not prevent closing drop-down calendar. */
			hideDropDown: 17,
			/* cancel="true" Event which is raised before list item is selected.
				Return false in order to cancel select action.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.index to get new selected index.
				Use ui.oldIndex to get old selected index.
				Use ui.item to get reference to new selected item. */
			listSelecting: 18,
			/* Event which is raised after list item was selected.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.index to get new selected index.
				Use ui.oldIndex to get old selected index.
				Use ui.item to get reference to new selected item. */
			listSelected: 19
		},
		css: {
			/* Class applied to the main/top element. Default value is 'ui-igedit ui-state-default ui-widget ui-corner-all' */
			editor: 'ui-igedit ui-state-default ui-widget ui-corner-all',
			/* Class applied to the top element when editor is rendered in container. Default value is 'ui-igedit-container' */
			container: 'ui-igedit-container',
			/* Class applied to the editing element. Default value is 'ui-igedit-field' */
			field: 'ui-igedit-field',
			/* Class applied to the field when direction is rtl. Default value is 'ui-igedit-rtl' */
			fieldRtl: 'ui-igedit-rtl',
			/* Class applied to the TEXTAREA element. Default value is 'ui-igedit-textarea' */
			textArea: 'ui-igedit-textarea',
			/* Class applied to the editing element in mouse-over state. Default value is 'ui-igedit-hover ui-state-hover' */
			hover: 'ui-igedit-hover ui-state-hover',
			/* Class applied to the editing element in focus state. Default value is 'ui-igedit-focus ui-state-focus' */
			focus: 'ui-igedit-focus ui-state-focus',
			/* Class applied to the images of buttons when editor has focus or mouse-over, but mouse-over does not belong to a particular button. Default value is 'ui-igedit-buttonsimagestateoverride' */
			buttonsImageStateOverride: 'ui-igedit-buttonsimagestateoverride',
			/* Classes applied to the editing element in disabled state. Default value is 'ui-igedit-disabled ui-state-disabled' */
			disabled: 'ui-igedit-disabled ui-state-disabled',
			/* Class applied to the editing element of numeric editor when value is negative. Default value is 'ui-igedit-negative' */
			negative: 'ui-igedit-negative',
			/* Class applied to the editing element when it has no value. Default value is 'ui-igedit-nullvalue' */
			nullValue: 'ui-igedit-nullvalue',
			/* Class applied to the SPAN element which represents button. Default value is 'ui-igedit-button' */
			button: 'ui-igedit-button',
			/* Class applied to the SPAN element which represents button when direction is rtl. Default value is 'ui-igedit-button-rtl' */
			buttonRtl: 'ui-igedit-button-rtl',
			/* Classes applied to the SPAN element of button when editor has focus. Default value is 'ui-igedit-buttonfocus' */
			buttonFocus: 'ui-igedit-buttonfocus',
			/* Classes applied to the the SPAN element of button in default state (no focus, no mouse, no press). Default value is 'ui-igedit-buttondefault ui-state-default' */
			buttonDefault: 'ui-igedit-buttondefault ui-state-default',
			/* Classes applied to the SPAN element of button in mouse-over state. Default value is 'ui-igedit-buttonhover ui-state-hover' */
			buttonHover: 'ui-igedit-buttonhover ui-state-hover',
			/* Classes applied to the SPAN element of button in pressed state. Default value is 'ui-igedit-buttonpressed ui-state-highlight' */
			buttonPressed: 'ui-igedit-buttonpressed ui-state-highlight',
			/* Classes applied to the SPAN element of button in disabled state. Default value is 'ui-igedit-buttondisabled ui-state-disabled' */
			buttonDisabled: 'ui-igedit-buttondisabled ui-state-disabled',
			/* Classes applied to the SPAN element which represents image on dropdown/clear button. Default value is 'ui-igedit-buttonimage ui-icon-triangle-1-s ui-icon' */
			buttonImage: 'ui-igedit-buttonimage ui-icon-triangle-1-s ui-icon',
			/* Class applied to the SPAN element which represents clear button. Default value is 'ui-igedit-buttonclear' */
			buttonClear: 'ui-igedit-buttonclear',
			/* Class applied to the SPAN element which represents image on clear button. Default value is 'ui-igedit-buttonimage ui-icon-circle-close ui-icon' */
			buttonClearImage: 'ui-igedit-buttonimage ui-icon-circle-close ui-icon',
			/* Class applied to the SPAN element which represents image on button in mouse-over state. Default value is 'ui-igedit-buttonimagehover' */
			buttonImageHover: 'ui-igedit-buttonimagehover',
			/* Class applied to the SPAN element which represents image on button in pressed state. Default value is 'ui-igedit-buttonimagepressed' */
			buttonImagePressed: 'ui-igedit-buttonimagepressed',
			/* Class applied to the SPAN element which represents image on button in disabled state. Default value is 'ui-igedit-buttonimagedisabled' */
			buttonImageDisabled: 'ui-igedit-buttonimagedisabled',
			/* Class applied to the SPAN element which represents spin button. Default value is 'ui-igedit-spinbutton' */
			spinButton: 'ui-igedit-spinbutton',
			/* Class applied to the SPAN element which represents image on spin button. Default value is 'ui-igedit-spinbuttonimage ui-igedit-spinbuttonimage' */
			spinButtonImage: 'ui-igedit-buttonimage ui-igedit-spinbuttonimage',
			/* Class applied to the SPAN element which represents image on lower spin button. Default value is 'ui-igedit-spinlowerimage ui-icon-carat-1-s ui-icon' */
			spinLowerImage: 'ui-igedit-spinlowerimage ui-icon-carat-1-s ui-icon',
			/* Class applied to the SPAN element which represents image on lower spin button in mouse-over state. Default value is 'ui-igedit-spinlowerimagehover' */
			spinLowerImageHover: 'ui-igedit-spinlowerimagehover',
			/* Class applied to the SPAN element which represents image on lower spin button in pressed state. Default value is 'ui-igedit-spinlowerimagepressed' */
			spinLowerImagePressed: 'ui-igedit-spinlowerimagepressed',
			/* Class applied to the SPAN element which represents image on lower spin button in disabled state. Default value is 'ui-igedit-spinlowerimagedisabled' */
			spinLowerImageDisabled: 'ui-igedit-spinlowerimagedisabled',
			/* Class applied to the SPAN element which represents image on upper spin button. Default value is 'ui-igedit-spinupperimage ui-icon-carat-1-n ui-icon' */
			spinUpperImage: 'ui-igedit-spinupperimage ui-icon-carat-1-n ui-icon',
			/* Class applied to the SPAN element which represents image on upper spin button in mouse-over state. Default value is 'ui-igedit-spinupperimagehover' */
			spinUpperImageHover: 'ui-igedit-spinupperimagehover',
			/* Class applied to the SPAN element which represents image on upper spin button in pressed state. Default value is 'ui-igedit-spinupperimagepressed' */
			spinUpperImagePressed: 'ui-igedit-spinupperimagepressed',
			/* Class applied to the SPAN element which represents image on upper spin button in disabled state. Default value is 'ui-igedit-spinupperimagedisabled' */
			spinUpperImageDisabled: 'ui-igedit-spinupperimagedisabled',
			/* Class applied to the drop-down element which contains list of items or datepicker-calendar. Default value is 'ui-igedit-dropdown' */
			dropDown: 'ui-igedit-dropdown',
			/* Class applied to the DIV element which is used as container for dropdown list. Default value is 'ui-igedit-list ui-widget ui-widget-content ui-corner-all' */
			list: 'ui-igedit-list ui-widget ui-widget-content ui-corner-all',
			/* Class applied to the SPAN element which represents item in dropdown list. Default value is 'ui-igedit-listitem ui-state-default' */
			listItem: 'ui-igedit-listitem ui-state-default',
			/* Class applied to the Class applied to the SPAN element which represents item in dropdown list with mouse-over state. Default value is 'ui-igedit-listitemhover ui-state-hover' */
			listItemHover: 'ui-igedit-listitemhover ui-state-hover',
			/* Class applied to the Class applied to the SPAN element which represents selected item in dropdown list. Default value is 'ui-igedit-listitemselected ui-state-highlight' */
			listItemSelected: 'ui-igedit-listitemselected ui-state-highlight',
			/* Class applied to the SPAN elements located in columns on the right in dropdown list. That has effect only when multiple columns in list are enabled. Default value is 'ui-igedit-listitemcolumnborder' */
			listItemColumnBorder: 'ui-igedit-listitemcolumnborder',
			/* Class applied to the main element when list is above editor and to list when list is below editor. Default value is 'ui-igedit-no-top-corners' */
			noTopCorners: 'ui-igedit-no-top-corners',
			/* Class applied to the main element when list is below editor and to list when list is above editor. Default value is 'ui-igedit-no-bottom-corners' */
			noBottomCorners: 'ui-igedit-no-bottom-corners'
		},
		regional: $.ig._regional || {},
		_create: function (type) {
			var v, val, css = this.css, elem, field, align, theme, oldCss, o = this.options, me = this;
			type = this._doType(_aNull(type) ? o.type : type, val = o.value);
			if (typeof o.maxLength !== 'number') {
				o.maxLength = 0;
			}
			if (typeof o.spinDelta !== 'number') {
				o.spinDelta = 1;
			}
			o.nullable = o.nullable !== false;
			// selected index of item in listItems (used fro spin and drop-down list)
			this._listID = -1;
			theme = o.theme;
			// css for normal-state of field
			this._css = css.field;
			elem = this._element = this._render(this.element, o, css);
			if (o.display) {
				elem.css('display', o.display);
			}
			if (type === 3 && (!$.datepicker || this._ta)) {
				throw new Error('The ui.igDatePicker depends on jquery.ui.datepicker and TEXTAREA/multiline is not supported');
			}
			// textarea
			if (this._ta) {
				this._css += ' ' + css.textArea;
			}
			field = this._field;
			this._box = field[0].type === 'checkbox';
			// flag that editor has single element: no buttons and no extra span wrapper
			this._1e = field === elem;
			if (o.readOnly) {
				field[0].readOnly = 'readonly';
			}
			align = o.textAlign;
			if (!align && type > 3) {
				align = 'right';
			}
			if (align) {
				field.css('textAlign', align);
			}
			// _id: -1:field
			field[0]._id = -1;
			field[0].disabled = o.disabled;
			// id of element which owns mouse-over and mouse-down: -1:field, 0:none, 1:button, 2:upper-spin, 3:lower-spin
			this._hover = this._mouseDown = 0;
			// conditional flag to modify logic of set value/text
			this._fix = 1;
			// focus: -1:before create, 0:no focus, 1:focus read only, 2:focus
			this._fcs = -1;
			// (this._bad!=0) means failure to process keyboard
			this._bad = 0;
			// currently pressed key, start selection
			this._k0 = this._sel0 = 0;
			// (this._noPaste==1) no paste flag
			this._noPaste = 0;
			this._fixMode(1);
			this._clearHide = false;
			// events used by control: required to support destroy
			field.bind(me._evts = {
				keydown: function (e) { me._onEvt(e, 0); },
				keypress: function (e) { me._onEvt(e, 1); },
				keyup: function (e) { me._onEvt(e, 2); },
				paste: function (e) { me._onEvt(e, 11); },
				beforecut: function (e) { me._onEvt(e, 11); },
				cut: function (e) { me._onEvt(e, 11); },
				drop: function (e) { me._onEvt(e, 11); },
				focus: function (e) { me._onEvt(e, 8); },
				blur: function (e) { me._onEvt(e, 9); }
			});
			v = {
				mousedown: function (e) { me._onEvt(e, 3); },
				mouseup: function (e) { me._onEvt(e, 4); },
				mousemove: function (e) { me._onEvt(e, 5); },
				MSPointerOver: function (e) { me._onEvt(e, 26); },
				mouseover: function (e) { me._onEvt(e, 6); },
				mouseleave: function (e) { me._onEvt(e, 7); }
			};
			if (this._buttons && this._buttons[1]) {
				v.DOMMouseScroll = function (e) { me._onEvt(e, 10); };
				v.mousewheel = function (e) { me._onEvt(e, 10); };
			}
			elem.bind(me._mEvts = v);
			//
			this._fcs = 0;
			v = o.maxLength;
			if (v && v > 0) {
				field[0].maxLength = v;
			}
			// Mvc helpers
			v = o._vsFormat;
			if (v && val && type > 3 && (typeof val !== 'number')) {
				val = parseFloat(this._txtAsNum(val.toString(), v, '-'));
			}
			// _value is coming from _render
			this._setVal(_aNull(val) ? this._value : val);
			if (this._val() === '') {
				this._text = this._field[0].value = this._focTxt('', false, '');
			}
			this._fixCss();
			oldCss = this._oldCss;
			// set width/height after _fixCss
			val = o.height;
			if (!val && !this._1e) {
				val = oldCss.height;
				if (val) {
					val = (val.indexOf('px') > 0) ? _int(val) : this.element.height();
				}
			}
			this._height(val);
			if (this._box) {
				this._fixBC(field, field);
			}
			val = o.width;
			if (!val && !this._1e) {
				val = oldCss.width;
				if (val) {
					val = (val.indexOf('px') > 0) ? _int(val) : this.element.width();
				}
			}
			if (this._selElem) {
				delete oldCss.width;
				delete oldCss.height;
			}
			this._width(val);
			this._lastText = this._val();
			this._initValidator();
			this._doClear(o.value);
		},
		_doType: function (type, val) {
			if (type === 'text') {
				type = 0;
			}
			if (type === 'mask') {
				type = 1;
			}
			if (type === 'date') {
				type = 2;
			}
			if (type === 'datepicker') {
				type = 3;
			}
			if (type === 'numeric') {
				type = 4;
			}
			if (type === 'currency') {
				type = 5;
			}
			if (type === 'percent') {
				type = 6;
			}
			if (typeof type !== 'number' || type < 0 || type > 6) {
				if (typeof val === 'number') {
					type = 4;
				} else if (val && val.getMonth) {
					type = 2;
				} else {
					type = 0;
				}
			}
			this._type = type;
			return type;
		},
		_render: function (elem, o, css) {
			var spin, name, par, csso, inp, cont, oldC, oldA, i, obj, img, clear, buts, butCss, touch,
				left = elem.css('direction') === 'rtl',
				but = o.button,
				field = elem,
				sel = null;
			name = elem[0].nodeName;
			par = elem[0].parentNode;
			if (name) {
				name = name.toUpperCase();
			}
			this._ta = name === 'TEXTAREA';
			this._td = name === 'TD';
			this._left = left;
			inp = name === 'INPUT';
			sel = this._selElem = name === 'SELECT';
			spin = but && but.indexOf('spin') >= 0;
			clear = but && but.indexOf('clear') >= 0;
			but = (but && but.indexOf('dropdown') >= 0) || (sel && !spin);
			if (clear || but || spin) {
				buts = this._buttons = [];
			}
			cont = buts || o.renderInContainer || o.theme;
			// old attributes which can be modified (used in destroy)
			oldC = this._oldCss = { display: 0 };
			oldA = this._oldAttr = { className: 0, title: 0 };
			if (inp) {
				// extra old attributes of INPUT
				oldA.value = 0;
				inp = elem[0].type || 'text';
				if (inp === 'date' || inp === 'number') {
					elem[0].type = 'text';
					oldA.type = inp;
				}
			} else if (sel) {
				sel = o.listItems;
				if (!sel) {
					o.listItems = [];
					sel = elem[0].options;
					i = sel ? sel.length : 0;
					if (i > 0) {
						while (i-- > 0) {
							obj = sel[i].value;
							o.listItems[i] = {value: obj, text: _aNull(img = sel[i].text) ? obj : img};
						}
						this._listID = elem[0].selectedIndex;
					}
					sel = 1;
				}
			} else {
				// extra old attributes of TEXTAREA/SPAN/DIV/etc.
				oldA.innerHTML = 0;
			}
			if (inp || this._ta) {
				// extra old attributes/css of INPUT/TEXTAREA
				oldA.disabled = oldA.readOnly = oldA.alt = oldC.textAlign = 0;
			}
			for (i in oldC) {
				if (oldC.hasOwnProperty(i)) {
					oldC[i] = elem.css(i);
				}
			}
			for (i in oldA) {
				if (oldA.hasOwnProperty(i)) {
					oldA[i] = elem[0][i];
				}
			}
			// Note: do not use css('width/height'), because it messy and depends on jquery version
			oldC.width = elem[0].style.width;
			oldC.height = elem[0].style.height;
			// backup if options.value is not set
			if ((i = inp ? oldA.value : (sel ? elem.val() : oldA.innerHTML)) === o.nullText) {
				i = '';
			}
			if (!this._ta && i) {
				i = i.replace(/[\x09\x0a]/g, '');
			}
			this._value = i;
			if (inp || this._ta || sel) {
				// className
				if (oldA.className) {
					this._css += ' ' + oldA.className;
				}
				if (cont) {
					this._swap = true;
					elem.css('display', sel ? 'none' : '');
					elem = $('<span />');
					par.insertBefore(elem[0], field[0]);
					if (sel) {
						field = $('<input />');
					} else {
						par.removeChild(field[0]);
					}
					elem.css('display', oldC.display);
				} else {
					this._css += ' ' + css.editor;
					return (this._field = elem);
				}
			} else {
				if (o.textMode === 'textarea' || o.textMode === 'multiline') {
					field = $('<textarea />');
					this._ta = 1;
				} else {
					field = $(o.textMode ? '<input type="' + o.textMode + '"/>' : '<input />');
				}
				elem[0].innerHTML = '';
			}
			elem.addClass(css.editor + ' ' + css.container);
			if (o.theme) {
				elem.addClass(o.theme);
			}
			this._field = field;
			if (!_aNull(i = o.tabIndex)) {
				field[0].tabIndex = i;
			}
			butCss = css.button + ' ' + css.buttonDefault;
			if (left) {
				butCss += ' ' + css.buttonRtl;
				this._css += ' ' + css.fieldRtl;
			}
			i = buts ? -1 : 6;
			touch = {
				touchstart: function (e) { this._drag = null; _stop(e); },
				touchmove: function (e) { this._drag = 1; _stop(e); },
				touchend: function () { if (!this._drag) { $(this).trigger('mousedown').trigger('mouseup'); } }
			};
			// create buttons
			while (i++ < 4) {
				if ((but && i === 0) || (clear && i === 3) || (spin && (i === 1 || i === 2))) {
					// 0:default, 1:local-hover, 2:pressed, 3:disabled, 4:image-default, 5:image-hover, 6:image-pressed, 7:image-disabled
					if (i === 0) {
						csso = [butCss, css.buttonHover, css.buttonPressed, css.buttonDisabled, css.buttonImage, css.buttonImageHover, css.buttonImagePressed, css.buttonImageDisabled];
						sel = 'button';
					} else if (i === 1) {
						csso = [butCss + ' ' + css.spinButton, css.buttonHover, css.buttonPressed, css.buttonDisabled, css.spinButtonImage + ' ' + css.spinUpperImage, css.spinUpperImageHover, css.spinUpperImagePressed, css.spinUpperImageDisabled];
						sel = 'spinUpper';
					} else if (i === 2) {
						csso = [butCss + ' ' + css.spinButton, css.buttonHover, css.buttonPressed, css.buttonDisabled, css.spinButtonImage + ' ' + css.spinLowerImage, css.spinLowerImageHover, css.spinLowerImagePressed, css.spinLowerImageDisabled];
						sel = 'spinLower';
					} else {
						csso = [butCss + ' ' + this.css.buttonClear, css.buttonHover, css.buttonPressed, css.buttonDisabled, css.buttonClearImage, css.buttonImageHover, css.buttonImagePressed, css.buttonImageDisabled];
						sel = 'clear';
					}
					obj = buts[i] = $('<span />').addClass(csso[0]).appendTo(elem).bind(touch);
					obj[0]._css = csso;
					obj[0].longdesc = obj[0].title = this._optVal(sel + 'Title', 1);
					img = $('<span />').addClass(csso[4]).appendTo(obj);
					// _id: 1:button, 5:button-image
					// _id: 2:upper-spin, 6:upper-spin-image
					// _id: 3:lower-spin, 7:lower-spin-image
					// _id: 4:clear, 8:clear-image
					img[0]._id = i + 5;
					obj[0]._id = i + 1;
				}
			}
			field.appendTo(elem);
			return elem;
		},
		_leftShift: function () {
			var left = 0, buts = this._buttons, i = (this._left && buts) ? 4 : 0;
			while (i-- > 0) {
				if (buts[i]) {
					left += buts[i][0].offsetWidth;
				}
			}
			return left;
		},
		_val: function () {
			var field = this._field;
			return field ? (this._box ? field[0].checked : (this._nullT ? '' : field[0].value)) : '';
		},
		// sets nullText if control has no focus and adjusts nullTextCss and negativeCss
		_fixNull: function () {
			var txt, nullTxt = this.options.nullText;
			if (!this._field || (!nullTxt && !this._nullT)) {
				return;
			}
			txt = this._val();
			this._nullT = null;
			if (txt === '' && nullTxt && this._fcs < 2) {
				this._nullT = true;
				this._field[0].value = nullTxt;
			}
			this._fixCss();
		},
		// return NullText or txt and adjust NullText flag
		_focTxt: function (txt, foc, e) {
			var nt = this.options.nullText;
			this._nullT = null;
			if (!foc && txt === '' && nt && (!_aNull(e) || this.options.readOnly)) {
				txt = nt;
				this._nullT = true;
			}
			return txt;
		},
		validate: function (noLabel) {
			/* Triggers validation of editor and show error message. That method has effect only when validation is enabled.
				paramType="bool" optional="true" Value of true will allow to skip error message if validation failed.
				returnType="bool" Returns true if value is valid, false - if value is invalid and error message was displayed.
			*/
			return !this.options.validatorOptions || !this._doInvalid(null, noLabel ? 2 : 1);
		},
		isValid: function () {
			/* Checks if value in editor is value. Note: that method may fail if editor has focus (in edit mode).
				returnType="bool" Returns true if value is valid, false - value is invalid.
			*/
			return !this._doInvalid(null, 9);
		},
		// e - null or ''
		// flag: 1-show error message, 2-do not show error, 9-check only:return error message
		// return true: invalid, or error message (if flag=9)
		_doInvalid: function (e, flag) {
			if (!this._field) {
				return;
			}
			var ch, i, old,
				val = this._val(),
				cancel = false,
				fac = 1,
				// external flag set by igValidator when special-rules-validation failed (regExp, minLength)
				inv = this._invPlus,
				o = this.options,
				type = this._type;
			// reset value for argument of invalid event
			this._inv = null;
			// required entry
			if (o.required && (!val || (type === 1 && !this.getValueByMode(0, '', 1)))) {
				// temporary flag for required entry
				inv = 1;
			// text editor
			} else if (type === 0) {
				if (!o.nullable && !val) {
					// temporary flag for required entry
					inv = 1;
				}
			// mask editor
			} else if (type === 1) {
				val = this._txt;
				i = val.length;
				while (i-- > 0 && !inv) {
					ch = val.charCodeAt(i);
					// flag==21==# optional and allows digits and +/-, it should be replaced by Space
					// skip 21 for validatorOptions of required character
					if (ch < 21 && (ch % 2) === 1) {
						inv = { value: val = this._getVal(), message: this._optVal('mask', 2) };
					}
				}
			// date editors
			} else if (type < 4) {
				val = this._toDate(val, e === '', true, true);
				// value for argument of invalid event
				inv = this._inv;
			// numeric editors
			} else {
				val = this._toNum(val, true, true);
				// value for argument of invalid event
				inv = this._inv;
				// 7-numeric display factor (1-100)
				fac = this._prop(7);
				if (inv && val && fac > 1) {
					old = val;
					inv.value = (val /= fac);
				}
			}
			// fix temporary flag for required entry
			if (inv === 1) {
				inv = { value: val = null, message: this._optVal('required', 2) };
			}
			if (typeof inv === 'string') {
				inv = { value: val, message: inv };
			}
			// request for error-message
			if (flag === 9) {
				return inv;
			}
			if (inv) {
				// 13-invalidValue
				cancel = this._fire(13, null, inv);
				// value was fixed by application
				if (val !== inv.value) {
					val = inv.value;
					inv = null;
				}
				if (old) {
					if (inv) {
						val = old;
					} else {
						if (_aNull(val, 1)) {
							val = null;
						} else if (val) {
							val *= fac;
						}
					}
				}
				if (type <= 1 && !inv) {
					this._setVal(val);
					return;
				}
			}
			if (type > 1 && type < 4) {
				this._isNull = _aNull(val);
				if (!this._isNull) {
					this._date = val;
				}
				if (val && o.useLastGoodDate) {
					this._goodD = val;
				}
			}
			// set _value to Number or Date for _focusTxt
			this._value = val;
			// used by this.validate
			if (flag && !cancel && !this._setOpt) {
				// show/hide error message
				return this._doError(flag, null, inv ? inv.message : null);
			}
		},
		_focusTxt: function (foc, e, txt0) {
			var e0 = e, txt = '', o = this.options, type = this._type, d = null, prompt = '';
			// mask editor
			if (type === 1) {
				txt0 = null;
				if (!_aNull(e) && !foc) {
					e = e !== '';
					if (e && this._bad !== 0) {
						this._txt = this._setTxt(this._val(), 5, true);
					}
					txt0 = this._txt;
					if (!e) {
						this._doInvalid(e0);
					}
				}
				txt = this._getTxt(foc ? 5 : 4, foc ? o.promptChar : o.padChar, txt0);
			// date editors
			} else if (type === 2 || type === 3) {
				if (_aNull(txt0)) {
					prompt = o.promptChar;
					// key-press
					if (_aNull(e) && foc) {
						return this._getTxt(5, prompt);
					}
					// ""-from _update=lostFocus
					if (!_aNull(e) && !foc) {
						this._doInvalid(e);
						// this._value was set by _doInvalid within call _toDate
						d = this._value;
					} else if (!this._isNull) {
						d = this._date;
					}
				} else {
					d = this._toDate(txt0, foc, true);
				}
				txt = this._toTxt(d, foc, prompt, !_aNull(e));
			// numeric editors
			} else if (type > 3) {
				if (!_aNull(e) && !foc) {
					this._doInvalid();
				}
				// this._value could be set by _doInvalid within call _toNum
				txt = this._toTxtNum(this._value, foc);
			// text editor
			} else {
				txt = this._val();
				if (!_aNull(e) && !foc) {
					this._doInvalid(e);
				}
			}
			return this._focTxt(txt, foc, e);
		},
		_repaint: function () {
			if (this._field && this._val() !== this._text) {
				this._field[0].value = this._text;
			}
		},
		_instant: function (p1, limit, f) {
			var val, type = this._type, mode = this._dataMode;
			if (this._box) {
				return this._val();
			}
			// mask editor
			// p1-prompt
			if (type === 1) {
				return this.getValueByMode(mode, p1, limit);
			}
			// date editors
			// p1-mode
			if (type === 2 || type === 3) {
				return this.getValueByMode(p1 ? 0 : mode, limit);
			}
			// numeric editors
			// p1-get number
			if (type > 3) {
				val = this._toNum(this._val(), limit);
				if (val && (limit || f) && !isNaN(val) && mode > 0) {
					// 7-numeric display factor (1-100)
					val /= this._prop(7);
				}
				// -1:text, 0:editModeText, 1:double, etc.
				return (p1 || mode > 0) ? val : this._toTxtNum(val, mode === 0);
			}
			// text editor
			return this._val();
		},
		// flag: 1-button title, 3-spin-button titles
		_optVal: function (key, flag) {
			var val = this._validator, o = this.options;
			// validation message
			if (flag === 2) {
				return val ? val._loc(key) : '';
			}
			if (!_aNull(val = o[key])) {
				return val;
			}
			// locale (titles of buttons)
			if (flag === 3 || flag === 1) {
				if (flag === 1 && this._type === 3) {
					key = 'datePickerButtonTitle';
				}
				val = o.locale ? o.locale[key] : null;
				return val || ($.ig && $.ig.Editor && $.ig.Editor.locale ? $.ig.Editor.locale[key] : null) || '';
			}
			// regional
			o = o.regional;
			if (typeof o === 'string') {
				o = $.ig.regional[o];
			}
			if (!o || _aNull(val = o[key])) {
				val = $.ig.regional.defaults[key];
			}
			return _aNull(val) ? this.regional[key] : val;
		},
		_setOption: function (key, val) {
			var v, old = val, dp = null, o = this.options, loc = key === 'locale', reg = key === 'regional', buts = this._buttons, field = this._field;
			if (o[key] === val || key === 'textMode' || !field) {
				return this;
			}
			if (key === 'buttonHidden') {
				this._butVis(null, val);
				return this;
			}
			if (key === 'theme') {
				// editor has only 1 element
				if (this._1e) {
					return this;
				}
				for (v = 0; v < 3; v++) {
					if (buts && buts[v]) {
						buts[v].css('height', '');
					}
				}
				if (o.theme) {
					this._element.removeClass(o.theme);
				}
				if (val) {
					this._element.addClass(val);
				}
				this._listRemove();
				this._height(o.height);
				this._width(o.width);
			}
			if (key === 'inputMask' && this._type === 1) {
				old = this.getValueByMode(0, ' ', 1);
				this._setMask(val);
				this._setTxt(old, 0);
			}
			o[key] = val;
			if (typeof val === 'function') {
				return this;
			}
			if (reg && this._dp) {
				dp = this._dpRegion();
				if (dp) {
					this._dpOption(o.datepickerOptions = $.extend(o.datepickerOptions, dp));
				}
			}
			v = 'buttonTitle';
			if ((loc || key === v) && buts && buts[0]) {
				buts[0][0].title = this._optVal(v, 1);
			}
			v = 'spinUpperTitle';
			if ((loc || key === v) && buts && buts[1]) {
				buts[1][0].title = this._optVal(v, 3);
			}
			v = 'spinLowerTitle';
			if ((loc || key === v) && buts && buts[2]) {
				buts[2][0].title = this._optVal(v, 3);
			}
			v = 'clearTitle';
			if ((loc || key === v) && buts && buts[3]) {
				buts[3][0].title = this._optVal(v, 3);
			}
			if (key === 'disabled') {
				field[0].disabled = val;
				this._fixCss();
			}
			if (key === 'display') {
				this._element.css(key, val);
			}
			if (key === 'textAlign') {
				field.css(key, val);
			}
			if (key === 'readOnly') {
				field[0].readOnly = val ? 'readonly' : '';
			}
			if (key === 'maxLength' || key === 'tabIndex') {
				field[0][key] = val;
			}
			if (key === 'value') {
				this.value(val);
			}
			if (key === 'width') {
				this._width(val);
			}
			if (key === 'height') {
				this._height(val);
			}
			v = key === 'required';
			if (key === 'validatorOptions' || v) {
				this._initValidator(false, v);
			}
			if (key === 'nullText') {
				this._fixNull();
			}
			if (key === 'type') {
				this._doType(val);
				// request to reset value
				reg = 3;
			}
			key = key.toLowerCase();
			v = key.indexOf('minv') === 0 ? 1 : (key.indexOf('maxv') === 0 ? 2 : (key.indexOf('maxd') >= 0 || key.indexOf('mind') >= 0 ? -1 : 0));
			if (key.indexOf('list') === 0) {
				this._listRemove();
			} else if (key.indexOf('an') === 0) {
				if (this._dp && key.indexOf('show') > 7) {
					this._dpOption((key.indexOf('eff') > 7) ? 'showAnim' : 'duration', val);
				}
			} else if (key.indexOf('kero') > 0) {
				if (this._dp) {
					this._dpOption(val);
				}
			} else if (key.indexOf('data') >= 0 || v || reg || !_aNull(this.regional[key]) || key.indexOf('date') === 0 || key.indexOf('pat') >= 0 || key.indexOf('roup') > 0 || key.indexOf('sep') >= 0 || key.indexOf('ymb') > 0) {
				if (v > 0 && this._dp) {
					dp = $.data(field[0], 'datepicker');
					if (dp) {
						dp.settings[v === 1 ? 'minDate' : 'maxDate'] = null;
					}
				}
				this._setOpt = true;
				this._listRemove();
				// reg=3 flag set by key=='type': request to reset value
				this._fixMode((reg === 3) ? 3 : 0);
				this._repaint();
				// last-value-string may change
				this._lastText = this._val();
				this._setOpt = null;
			}
			return this;
		},
		_dpRegion: function () {
			var reg = this.options.regional;
			return ($.datepicker && typeof reg === 'string') ? $.datepicker.regional[(reg === 'defaults' || reg === 'en-US') ? '' : reg] : null;
		},
		// fix datepicker options, if it already exists
		_dpOption: function (val, p) {
			var old = this._getVal(1);
			if (val && val.changeYear && $.browser.opera) {
				val.changeYear = false;
			}
			this._field.datepicker('option', val, p);
			// restore date which was 'friendly' destoyed when option of datepicker was modified
			this._setVal(old);
		},
		getRegionalOption: function (name) {
			/* Gets calculated value of regional option used by numeric and date editors.
				paramType="string" Name of regional option, such as "monthNames", "dateLongPattern", "currencySymbol", etc.
				returnType="string" Returns value of option used by editor.
			*/
			return this._optVal(name);
		},
		field: function () {
			/* Gets reference to jquery object which is used as edit field.
				returnType="$" Returns reference to jquery object. That can be INPUT or TEXTAREA.
			*/
			return this._field;
		},
		mainElement: function () {
			/* Gets reference to jquery object which is used as top/outer element of igEditor.
				returnType="$" Returns reference to jquery object.
			*/
			return this._element;
		},
		dropDownElement: function () {
			/* Gets reference to jquery object which is used as container of drop-down.
				returnType="$" Returns reference to jquery object or null. That can be container of list items or in case of igDatePicker it can be calendar of jquery.datepicker.
			*/
			var el = this._ddList;
			// datepicker
			if (this._type === 3) {
				el = $.datepicker;
				if (el) {
					el = (el._ig_dp === this) ? el.dpDiv : null;
				}
			}
			return el || null;
		},
		show: function () {
			/* Shows editor (if it was hidden).
				returnType="object" Returns reference to this igEditor.
			*/
			return this._vis(true);
		},
		hide: function () {
			/* Hides editor.
				returnType="object" Returns reference to this igEditor.
			*/
			return this._vis();
		},
		remove: function () {
			/* Removes editor from its parent element, but keeps the rest of functionality.
				returnType="object" Returns reference to this igEditor.
			*/
			var p, e = this._element;
			p = (e && e[0]) ? e[0].parentNode : null;
			if (p && p.tagName) {
				this._doError();
				this._doDrop();
				this._stopTimer();
				this._hadFocus = null;
				this._vAct();
				this._noPaste = this._fcs = this._k0 = this._hover = this._mouseDown = 0;
				this._fixCss();
				p.removeChild(e[0]);
			}
			return this;
		},
		dropDownVisible: function (showHide) {
			/* Gets sets visibility of drop-down list.
				paramType="bool" optional="true" Value true will show dropdown, false - hide dropdown. 
				returnType="bool|object" If parameter is defined, then returns reference to this igCombo, otherwise, returns true if drop down is visible and false if drop down is hidden.
			*/
			if (!arguments.length) {
				return !!this._ddOn;
			}
			if (!showHide) {
				this._doDrop();
			} else if (!this._ddOn) {
				this._doDrop(1);
			}
			return this;
		},
		findListItemIndex: function (text, ignoreCase, partial, contains) {
			/* Finds index of list item by text.
				paramType="string" Text to search.
				paramType="bool" optional="true" Value true sets request to ignore case
				paramType="bool" optional="true" Value true will perform partial search rather than full match
				paramType="bool" optional="true" Value true will perform search anywhere within text of item, otherwise starts-with search is used.
				returnType="number" Returns index of item or -1.
			*/
			var item = this._find(_str(text), 0, 1, ignoreCase, partial, contains);
			return item ? item.id : -1;
		},
		addListItems: function (items, index) {
			/* Adds several items to list.
				paramType="object" Array of items.
				paramType="number" optional="true" Index within current list where items are inserted. If parameter is missing or too large or negative, then items are appended to list.
				returnType="object" Returns reference to this igEditor.
			*/
			return this._listChange(items, index, 2);
		},
		addListItem: function (item, index) {
			/* Adds item to list.
				paramType="object" Item for list. It can be string, number or Date object.
				paramType="number" optional="true" Index within current list where item is inserted. If parameter is missing or too large or negative, then item is appended to list.
				returnType="object" Returns reference to this igEditor.
			*/
			return this._listChange([item], index, 2);
		},
		removeListItem: function (item) {
			/* Removes item from list.
				paramType="object" Current item in list. It can be string, number or Date object.
				returnType="object" Returns reference to this igEditor.
			*/
			return this._listChange(item, -1, 1);
		},
		removeListItemAt: function (index) {
			/* Removes item from list at index.
				paramType="number" Index of item. If it is negative number, then last item in list is removed.
				returnType="object" Returns reference to this igEditor.
			*/
			return this._listChange(null, index, 1);
		},
		clearListItems: function () {
			/* Removes all items from list.
				returnType="object" Returns reference to this igEditor.
			*/
			return this._listChange(null, -1, 0);
		},
		selectedListIndex: function (index) {
			/* Gets sets selected index of list item.
				paramType="number" optional="true" Index of item.
				returnType="number" Returns index of selected item if parameter is undefined.
			*/
			if (!arguments.length) {
				return this._listID;
			}
			this._listSelect(index);
		},
		getSelectedListItem: function () {
			/* Gets reference to selected item in list.
				returnType="string|number|date|object" Returns reference to selected item or null.
			*/
			var list = this.options.listItems, id = this._listID;
			return (list && id >= 0) ? list[id] : null;
		},
		hasInvalidMessage: function () {
			/* Checks if invalid message is displayed.
				returnType="bool" Returns true if message is displayed.
			*/
			return this._validator ? this._validator.isMessageDisplayed() : false;
		},
		validator: function () {
			/* Gets reference to igValidator used by igEditor.
				returnType="object" Returns reference to igValidator or null.
			*/
			return this._validator || null;
		},
		text: function (val, flag) {
			/* Gets sets text in editor.
				paramType="string" optional="true" New text for editor.
				paramType="number" optional="true" Internal use only.
				returnType="string|object" Returns text in editor if parameter is undefined. Otherwise, it returns reference to this igEditor.
			*/
			if (val === undefined) {
				return this._val();
			}
			// mask/date/numeric editors
			if (this._type > 0) {
				this._sTxt = 1;
				// mask
				if (this._type === 1) {
					this._setTxt(val, _aNull(flag) ? 5 : (1000 + flag));
				} else {
					this._setVal(val, true);
				}
				this._sTxt = 0;
			} else {
				if (val) {
					this._nullT = null;
				}
				this._text = val;
				this._repaint();
			}
			if (this._fix === 1) {
				this._old = this._instant(1, null, 1);
			}
			return this;
		},
		// gets/sets date-field, or creates Date from 7 fields, or creates now, or adjusts Date for datepicker
		// date-reference to Date or null.
		//  Note: if that is missing, then return now
		//  Note: if h is defined, then that is year
		// f-flag to get/set specific date field (0-year, 1-month, 2-day, 3-hours, 4-minutes, 5-seconds, 6-milliseconds)
		//  Note: if f=-1, then that is adjustements for datepicker while date-parse: return date
		//  Note: if h is defined, then that is month
		// val-new value to set date-field (if h is not used). If it is not set, then method returns date-field
		//  Note: if h is defined, then that is day
		// h-hours
		// m-minutes
		// s-seconds
		// ms-miliseconds
		_df: function (date, f, val, h, m, s, ms) {
			var utc = this.options.enableUTCDates;
			// set into datepicker
			if (f === -1) {
				return (date && utc) ? new Date(date.getTime() + date.getTimezoneOffset() * 60000) : date;
			}
			// now
			if (!date) {
				date = new Date();
				if (utc) {
					date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
				}
				return date;
			}
			// new date from fields
			if (!_aNull(h)) {
				return utc ? new Date(Date.UTC(date, f, val, h, m, s, ms)) : new Date(date, f, val, h, m, s, ms);
			}
			// get display values
			if (_aNull(val)) {
				if (f === 0) {
					return utc ? date.getUTCFullYear() : date.getFullYear();
				}
				if (f === 1) {
					return utc ? date.getUTCMonth() : date.getMonth();
				}
				if (f === 2) {
					return utc ? date.getUTCDate() : date.getDate();
				}
				if (f === 3) {
					return utc ? date.getUTCHours() : date.getHours();
				}
				if (f === 4) {
					return utc ? date.getUTCMinutes() : date.getMinutes();
				}
				if (f === 5) {
					return utc ? date.getUTCSeconds() : date.getSeconds();
				}
				return utc ? date.getUTCMilliseconds() : date.getMilliseconds();
			}
			// set from display values
			if (f === 0) {
				if (utc) {
					date.setUTCFullYear(val);
				} else {
					date.setFullYear(val);
				}
			}
			if (f === 1) {
				if (utc) {
					date.setUTCMonth(val);
				} else {
					date.setMonth(val);
				}
			}
			if (f === 2) {
				if (utc) {
					date.setUTCDate(val);
				} else {
					date.setDate(val);
				}
			}
			if (f === 3) {
				if (utc) {
					date.setUTCHours(val);
				} else {
					date.setHours(val);
				}
			}
			if (f === 4) {
				if (utc) {
					date.setUTCMinutes(val);
				} else {
					date.setMinutes(val);
				}
			}
			if (f === 5) {
				if (utc) {
					date.setUTCSeconds(val);
				} else {
					date.setSeconds(val);
				}
			}
			if (f === 6) {
				if (utc) {
					date.setUTCMilliseconds(val);
				} else {
					date.setMilliseconds(val);
				}
			}
		},
		value: function (val) {
			/* Gets sets value in editor.
				paramType="object" optional="true" New value for editor. It can be string, number or Date object.
				returnType="string|number|date|object" Returns value in editor if parameter is undefined. Otherwise, it returns reference to this igEditor.
			*/
			if (val === undefined) {
				val = this._getVal();
				return (val === undefined) ? null : val;
			}
			this._setVal(val, true);
			this._lastText = this._val();
			return this;
		},
		_getVal: function (numDate) {
			// date editors: numDate-request Date
			// numeric editors: numDate-request Number
			var o = this.options, val = this._instant(numDate, 1);
			// numeric editors
			if (this._type > 3) {
				if (_aNull(val)) {
					val = o.nullValue;
					// -1:text, 0:editModeText, 1:double, etc.
					if (this._dataMode <= 0) {
						return _str(val);
					}
					return (o.nullable || !_aNull(val)) ? val : NaN;
				}
			}
			return val;
		},
		// set value and keep old value as a flag to raise value-change events
		// obj==2: flag that it is spin+noFocus in numeric editor
		_set_val: function (val, obj) {
			this._fix = 0;
			this._setVal(val, obj);
			this._fix = 1;
		},
		// obj==2: flag that it is spin+noFocus in numeric editor
		_setVal: function (val, obj) {
			var txt, max, type = this._type;
			if (!this._field) {
				return;
			}
			if (this._box) {
				if (val !== true) {
					val = val === 'true';
				}
				this._field[0].checked = val;
			// mask editor
			// obj-mode
			} else if (type === 1) {
				this._setTxt(_str(val), this._dataMode);
			// date editors
			// obj=true-flag from set text(..)
			} else if (type === 2 || type === 3) {
				if (!_aNull(val) && !val.getTime) {
					val = obj = this._toDate(val = val.toString(), this._dataMode < 2) || this._toDate(val, true);
				}
				obj = val;
				if (_aNull(val = this._limits(val))) {
					val = obj;
				}
				this._txt = this._mask;
				this._isNull = _aNull(val);
				if (!this._isNull) {
					this._toTxt(val, true, '', true);
				} else {
					val = this._df();
				}
				this._date = val;
				if (this.options.useLastGoodDate) {
					this._goodD = val;
				}
				this._text = this._focusTxt(this._fcs > 1);
				this._repaint();
			// numeric editors
			} else if (type > 3) {
				if (_aNull(val, 1)) {
					val = null;
				}
				if (val && typeof val === 'number' && this._fix !== 0) {
					// 7-numeric display factor (1-100)
					val *= this._prop(7);
				}
				// 12-maxLength
				txt = this._toTxtNum(val = this._toNum(val, true), this._fcs === 2);
				max = this._prop(12);
				// obj=2: value change on spin + focus
				// check if new number which larger than maxLength
				if (obj === 2 && max > 0 && txt.length > max) {
					return;
				}
				// adjust _nullT flag
				this._focTxt(txt);
				this._text = txt;
				this._value = val;
				this._repaint();
			// text editor
			} else {
				this.text(_str(val));
			}
			// memorize old value. Note: set text(..) (line above) does it already
			if (this._fix === 1 && type > 0) {
				this._old = this._instant(1, null, 1);
			}
			txt = this.options.value = this._getVal();
			this._doClear(txt);
			this._fixNull();
			this._dtt();
			this._fixList(txt);
		},
		_fixList: function (val) {
			var i = -1, list = this.options.listItems, len = list ? list.length : 0;
			if (len < 1 || !this._fix || _aNull(this._lastText)) {
				return;
			}
			if (!_aNull(val)) {
				while (++i < len) {
					if (list[i] === val) {
						break;
					}
				}
				if (i >= len) {
					list = this._findItem(this._val(), -1);
					i = list ? list.id : -1;
				}
			}
			this._listSelect(i);
		},
		// show/hide clear-button depending on value
		_doClear: function (val) {
			if (this._buttons && this._buttons[3]) {
				this._butVis(!val || (this._type < 4 && !this.getValueByMode(0, val)));
			}
		},
		_vis: function (show) {
			var e = this._element;
			e.css('display', show ? this.options.display : 'none');
			this._fixHeight();
			this._doError();
			return this;
		},
		_elemWidth: function (elem, val) {
			if (elem && val > 1 && elem[0]._wd !== val) {
				elem[0]._wd = val;
				val = Math.max(1, val - _pad_bdr(elem, 1));
				elem.css('width', val);
				return true;
			}
		},
		_elemHeight: function (elem, val, but) {
			if (elem && val > 1 && elem[0]._ht !== val) {
				elem[0]._ht = val;
				val = Math.max(1, val - _pad_bdr(elem));
				elem.css('height', val);
				if (but) {
					elem.find('SPAN').css('marginTop', Math.floor((val - 16) / 2));
				}
			}
		},
		_fixSize: function () {
			var o = this.options,
				elem = this._element,
				width = elem ? elem[0].offsetWidth : 0,
				height = elem ? elem[0].offsetHeight : 0;
			if (width || height) {
				if (this._oWidth !== width) {
					this._fixWidth(!this._oWidth && !o.width);
				}
				if (this._oHeight !== height) {
					this._fixHeight(!this._oHeight && !o.height);
				}
				this._oWidth = width;
				this._oHeight = height;
			}
			this._doTimer();
		},
		_doTimer: function () {
			var me = this,
				timer = me._timer1,
				ok = me._heightOk && !me._heightPerc && me._widthOk && !me._widthPerc;
			if (ok && timer) {
				clearInterval(timer);
				delete me._timer1;
			} else if (!timer) {
				me._timer1 = setInterval(function () {
					me._fixSize();
				}, 200);
			}
		},
		// if base element is DIV with display:block, then its height can be collapsed
		_fixHeight: function (zero) {
			// _1e: editor has only 1 element
			if (!this._field || this._1e || (this._heightOk && !this._heightPerc)) {
				return 1;
			}
			var field = this._field,
				elem = this._element,
				i = 4,
				height = (this._td || zero) ? 0 : Math.max(elem[0].offsetHeight - _pad_bdr(elem), 0),
				buts = this._buttons;
			height = height || field[0].offsetHeight;
			if (height > 1) {
				if (this._heightPerc) {
					height++;
				}
				this._elemHeight(field, height);
				if (buts) {
					while (i-- > 0) {
						this._elemHeight(buts[i], height, 1);
					}
				}
				this._heightOk = 1;
			}
			this._doTimer();
		},
		// adjust width of editor on first paint
		// return 1/true in case of failure and null/false in case of success
		_fixWidth: function (zero) {
			if (!this._field || this._1e || (this._widthOk && !this._widthPerc)) {
				return 1;
			}
			var v, left, but,
				field = this._field,
				clearHide = this._clearHide,
				buttonHide = this.options.buttonHidden,
				elem = this._element,
				i = 4,
				width = (this._td || zero) ? 0 : Math.max(elem[0].offsetWidth - _pad_bdr(elem, 1), 0),
				minWidth = width,
				minField = 3,
				buts = this._buttons;
			width = width || field[0].offsetWidth;
			if (width > 0) {
				if (buts) {
					// width which will be used, if application did not set it: use default width of INPUT
					zero = (this._td || zero) ? Math.max(width, 100) : 0;
					// width for field
					width = zero || width;
					if (this._widthPerc || this._td) {
						width--;
					}
					while (i-- > 0) {
						but = buts[i];
						if (but) {
							if ((i === 0 && buttonHide) || (i === 3 && clearHide)) {
								// temporary show clear/dropdown button to measure its width
								but.show();
							}
							but[0]._w = v = but[0].offsetWidth;
							// reduce zero width in order to keep overall width of editor same as default width of INPUT
							if (zero && !left) {
								width -= v;
								left = zero = zero - v;
							}
							// reduce width for field
							width -= v;
							// check if there is space for field, if not increase min width
							if (width < minField && !zero) {
								minWidth += minField - width;
								// left: flag that min width should be set
								left = width = minField;
							}
						}
					}
					// if no width (zero), or buttons are larger than availiable width (left), then increase width
					if (zero || left) {
						elem.css('width', zero || (minWidth + minField));
					}
				} else if (zero && elem[0].offsetWidth > width + 4) {
					elem.css('width', width);
				}
				if (this._elemWidth(field, this._wF = width)) {
					this._listRemove();
				}
				// check if buttons did not jump on second line
				i = v = buts ? Math.min(width, 9) : 0;
				// decrease width of field
				while (v-- > 1 && i > 3) {
					left = field[0].offsetTop;
					for (i = 0; i < 4; i++) {
						if (buts[i] && Math.abs(buts[i][0].offsetTop - left) > 10) {
							this._elemWidth(field, --this._wF);
							break;
						}
					}
				}
				// get around zoom in Firefox and IE7/8
				if (buts && ($.browser.mozilla || ($.browser.msie && parseFloat($.browser.version) < 9))) {
					this._elemWidth(field, --this._wF);
				}
				this._widthOk = 1;
				// show/hide clear/dropdown button
				this._butVis(clearHide, buttonHide);
			}
			this._doTimer();
		},
		_butVis: function (clear, dropdown) {
			var but, i = -1, o = this.options,
				// width of field
				width = this._wF,
				buts = this._buttons,
				field = this._field;
			if (_aNull(clear)) {
				but = 1;
				clear = this._clearHide;
			}
			if (_aNull(dropdown)) {
				but = 1;
				dropdown = o.buttonHidden;
			}
			if (!buts || (but && clear === this._clearHide && dropdown === o.buttonHidden)) {
				return;
			}
			o.buttonHidden = dropdown;
			this._clearHide = clear;
			while (++i < 2) {
				// 0-dropdown, 3-clear button
				but = buts[i * 3];
				if (but) {
					if ((!i && dropdown) || (i && clear)) {
						but.hide();
						// if button hidden, then increase width of INPUT
						width += but[0]._w;
					} else {
						but.show();
					}
				}
			}
			this._elemWidth(field, width);
		},
		// set width of editor
		_width: function (width) {
			// reduce width by widths of buttons
			var field = this._field,
				elem = (this._1e || this._td) ? field : this._element,
				buts = this._buttons,
				i = buts ? 4 : 0,
				val = _int(width);
			if (!field) {
				return;
			}
			if (this._widthOk) {
				delete this._widthOk;
				delete this._widthPerc;
				elem[0]._wd = null;
				field[0]._wd = null;
				elem.css('width', '');
				field.css('width', '');
				while (i-- > 0) {
					if (buts[i]) {
						buts[i][0]._wd = null;
						buts[i].css('width', '');
					}
				}
			}
			if (width) {
				if (width.indexOf && width.indexOf('px') < 0 && width !== val.toString()) {
					elem.css('width', width);
					this._widthPerc = !this._td && width.indexOf('%') > 0;
				} else {
					this._elemWidth(elem, val);
				}
			}
			this._fixWidth(!width);
		},
		// set height of editor
		_height: function (height) {
			var field = this._field,
				elem = (this._1e || this._td) ? field : this._element,
				buts = this._buttons,
				i = buts ? 4 : 0,
				val = _int(height);
			if (!field) {
				return;
			}
			if (this._heightOk) {
				delete this._heightOk;
				delete this._heightPerc;
				elem[0]._ht = null;
				field[0]._ht = null;
				elem.css('height', '');
				field.css('height', '');
				while (i-- > 0) {
					if (buts[i]) {
						buts[i][0]._ht = null;
						buts[i].css('height', '');
					}
				}
			}
			if (height) {
				if (height.indexOf && height.indexOf('px') < 0 && height !== val.toString()) {
					elem.css('height', height);
					this._heightPerc = !this._td && height.indexOf('%') > 0;
				} else {
					this._elemHeight(elem, val);
				}
			}
			this._fixHeight(!height);
		},
		// preprocess spin action
		_spin: function (delta) {
			var sel, fac, txt, nul = this._nullT, o = this.options;
			if (this._box || !this._field) {
				return;
			}
			if (this._fcs < 1 && o.focusOnSpin) {
				this.setFocus();
				if (this._fcs < 1) {
					this._focSpin = delta;
					return;
				}
			}
			// 14-spin
			if (this._fire(14, null, delta)) {
				return;
			}
			// case when readOnly+spinOnReadOnly
			if (nul) {
				this._nullT = null;
				this._fixCss();
			}
			txt = this._val();
			this.spin(delta);
			if (this._val() === txt) {
				if (nul) {
					this._nullT = nul;
					this._fixCss();
					return;
				}
				// roll over for numeric editor
				// 10-minValue, 11-maxValue
				if (this._type > 3 && o.spinWrapAround && !_aNull(this._prop(10)) && !_aNull(this._prop(11))) {
					// 7-numeric display factor (1-100)
					sel = this._sel0;
					fac = this._prop(7);
					if (!fac) {
						fac = 1;
					}
					delta = this._limits(this._getVal(true) * fac, true);
					this._setVal(delta / fac, this._fcs);
					this.select(sel);
				}
			}
			if (this._val() !== txt) {
				// 12-textChanged
				this._fire(12);
			}
		},
		_item: function (item) {
			if (item && !_aNull(item.text)) {
				item = item.text;
			}
			if (typeof item === 'function') {
				item = item();
			}
			return _aNull(item) ? '' : item;
		},
		// perform spin action related to list
		_spinList: function (delta) {
			var val, id, roll, len, list, o = this.options;
			list = o.listItems;
			len = list ? list.length : 0;
			if (len < 1) {
				return 1;
			}
			delta = (delta < 0) ? 1 : -1;
			id = this._listID + delta;
			roll = o.spinWrapAround;
			if (id >= len) {
				if (!roll) {
					return;
				}
				id = 0;
			}
			if (id < 0) {
				if (!roll) {
					return;
				}
				id = len - 1;
			}
			val = this._instant(1, null, 1);
			if (val === this._item(list[id])) {
				if ((id += delta) < 0) {
					if (!roll) {
						return;
					}
					id = len - 1;
				}
				if (id >= len) {
					if (!roll) {
						return;
					}
					id = 0;
				}
			}
			val = this._item(list[id]);
			if (!this._listSelect(id)) {
				delete this._lastY;
				this._set_val(val);
			}
		},
		// process key event by specific editor
		_doKey: function (k, ch, txt, len, sel0, sel1, bad, e) {
			// 12-maxLength
			var maxDec, iDot, d09, ok, dot, min, decSep, minus, mask, ePow, maxLen = this._prop(12), type = this._type;
			// mask/date editors
			if (type > 0 && type < 4) {
				mask = this._mask;
				len = mask ? mask.length : 0;
				if (len < 1 || k < 7 || (k > 8 && k < 32)) {
					k = 0;
				}
				if (bad) {
					if (k === 0 || !(mask.indexOf(ch) > 0 || this._optVal('am').indexOf(ch) >= 0 || this._optVal('pm').indexOf(ch) >= 0 || (k >= 48 && k <= 57))) {
						_stop(e);
					}
					return;
				}
				if (k === 0) {
					return;
				}
				txt = this._txt;
				if (sel0 !== sel1) {
					while (--sel1 >= sel0) {
						txt = txt.substring(0, sel1) + mask.charAt(sel1) + txt.substring(sel1 + 1);
					}
					sel1++;
				//del
				} else if (k === 7) {
					while (sel1 < len && mask.charCodeAt(sel1) >= 22) {
						sel1++;
					}
					if (sel1 >= len) {
						return;
					}
					txt = txt.substring(0, sel1) + mask.charAt(sel1) + txt.substring(sel1 + 1);
					sel1++;
				//back
				} else if (k === 8) {
					while (sel1 > 0 && mask.charCodeAt(sel1 - 1) >= 22) {
						sel1--;
					}
					if (sel1-- < 1) {
						return;
					}
					txt = txt.substring(0, sel1) + mask.charAt(sel1) + txt.substring(sel1 + 1);
				}
				if (k > 8 && sel1 < len) {
					if (sel1 >= len) {
						return;
					}
					if ((sel0 = this._maskKey(k, ch, txt, len, sel1, mask)) >= 0) {
						txt = this._txt;
						sel1 = sel0;
					} else {
						if (sel0 === -1) {
							return;
						}
						while (mask.charCodeAt(sel1) >= 22) {
							if (++sel1 >= len) {
								return;
							}
						}
						if (_aNull(ch = this._maskFilter(mask.charCodeAt(sel1), ch, 0))) {
							return;
						}
						txt = txt.substring(0, sel1) + ch + txt.substring(sel1 + 1);
						sel1++;
					}
				}
				this._txt = txt;
				this._selKey = sel1;
				// _focusTxt may modify _selKey
				txt = this._focusTxt(true);
				this.select(this._selKey, 0, txt);
				this._selKey = 99999;
				this._listSelect(-1);
				return;
			}
			// numeric editors
			if (type > 3) {
				// 4-decimal separator
				decSep = this._prop(4);
				minus = this._isMinus(k);
				d09 = k >= 48 && k <= 57;
				// check if limit for negative values
				if (minus && sel0 === 0) {
					min = this._prop(10);
					if (!_aNull(min) && min >= 0) {
						return _stop(e);
					}
				}
				if (bad) {
					if (!(k < 9 || minus || d09 || k === decSep.charCodeAt(0))) {
						_stop(e);
					}
					return;
				}
				if (sel0 !== sel1) {
					txt = txt.substring(0, sel0) + txt.substring(sel1);
					sel1 = sel0;
					len = txt.length;
				// 7-del,8-back
				} else if (k === 7) {
					if (sel1++ >= len || len < 1) {
						return;
					}
				} else if (k === 8) {
					if (sel0-- < 1) {
						return;
					}
				}
				if (k < 9 || maxLen === 0 || maxLen > len) {
					dot = k === decSep.charCodeAt(0);
					iDot = txt.indexOf(decSep);
					// 8-maximum decimals
					maxDec = this._prop(8);
					ok = d09 || (sel0 === 0 && minus) || (dot && maxDec > 0);
					ePow = this._ePow();
					mask = ePow ? txt.indexOf(ePow) : -1;
					if (ePow && sel0 > 0) {
						// 69=E, 101=e
						if ((k === 69 || k === 101) && mask < 0) {
							ok = ch = ePow;
						}
						// do not allow dot after E
						if (dot && mask >= 0 && mask < sel0) {
							ok = false;
						}
					}
					// check for maxDecimals
					if (mask < 0 && d09 && iDot >= 0 && sel0 > iDot && iDot + maxDec < len) {
						// do not append digit after maxDecimals
						if (sel0 === len) {
							ok = false;
						// remove digits after maxDecimals
						} else {
							txt = txt.substring(0, --len);
						}
					}
					// allow minus after E
					if (sel0 > 0 && minus && txt.charAt(sel0 - 1).toUpperCase() === 'E' && txt.substring(sel0 - 1).indexOf('-') < 0) {
						ok = true;
					}
					if (len > 0 && sel0 === 0) {
						if (this._isMinus(txt.charCodeAt(0))) {
							ok = false;
						}
					}
					if (k > 8 && !ok) {
						return;
					}
					if (dot) {
						// remove old dot
						if (iDot >= 0) {
							if (iDot === sel0 || iDot === sel0 - 1) {
								return;
							}
							len--;
							if (iDot < sel0) {
								sel0 = --sel1;
							}
							txt = txt.substring(0, iDot) + txt.substring(iDot + 1);
						}
						// remove digits after maxDecimals
						if (mask < 0 && sel0 + maxDec < len) {
							txt = txt.substring(0, len = sel0 + maxDec);
						}
					}
					if (k > 8 && sel1 >= len) {
						txt += ch;
					} else {
						txt = txt.substring(0, sel0) + ch + txt.substring(sel1);
					}
				} else {
					k = 0;
				}
				this.select((k > 10) ? sel1 + 1 : sel0, 0, txt);
				this._listSelect(-1);
				return;
			}
			// text editor
			if (sel0 !== sel1) {
				txt = txt.substring(0, sel0) + txt.substring(sel1);
				sel1 = sel0;
				len = txt.length;
			// 7-del,8-back
			} else if (k === 7) {
				if (sel1++ >= len || len === 0) {
					return;
				}
				// get around IE mess with new lines in textarea: delete 2 characters instead of 1
				if (this._ta && txt.charCodeAt(sel1 - 1) === 13 && txt.charCodeAt(sel1) === 10) {
					sel1++;
				}
			} else if (k === 8) {
				if (sel0-- < 1) {
					return;
				}
				// get around IE mess with new lines in textarea: delete 2 characters instead of 1
				if (this._ta && txt.charCodeAt(sel0) === 10 && txt.charCodeAt(sel0 - 1) === 13) {
					sel0--;
				}
			}
			if (k < 9 || maxLen === 0 || maxLen > len) {
				if (k > 8 && sel1 >= len) {
					txt += ch;
				} else {
					txt = txt.substring(0, sel0) + ch + txt.substring(sel1);
				}
			} else {
				k = 0;
			}
			this._matchList(txt, k, (k > 10) ? sel1 + 1 : sel0);
		},
		_matchList: function (txt, key, sel) {
			var item;
			if (!this._field || this._type > 0 || (key < 0 && !this.options.listAutoComplete)) {
				return txt;
			}
			item = this._findItem(txt, key, sel);
			if (!item) {
				return null;
			}
			this._listSelect(item.id);
			txt = item.text;
			if (key >= 0) {
				this.select(item.sel, 0, txt);
			} else {
				this._field[0].value = txt;
			}
			return txt;
		},
		_findItem: function (txt, key, sel) {
			var o = this.options;
			return this._find(txt, key, o.listMatchOnly, o.listMatchIgnoreCase, true, o.listMatchContains, sel);
		},
		_find: function (txt, key, matchOnly, noCase, partial, contains, sel) {
			// shift: index of match inside of item-string, when contains-match is used
			// id: index of selected drop-down item
			var item, up, part, inside = null, i = -1, many = 0, shift = 0,
				id = -1, str = txt, len = txt.length,
				items = this.options.listItems, match = key >= 0 && matchOnly;
			if (len > 0 && items && (match || key < 0)) {
				part = match = -1;
				up = noCase;
				if (up) {
					str = str.toUpperCase();
				}
				while (++i < items.length) {
					if (_aNull(item = this._item(items[i]))) {
						continue;
					}
					item = item.toString();
					if (up) {
						item = item.toUpperCase();
					}
					if ((shift = item.indexOf(str)) === 0) {
						// full match
						if (item === str) {
							match = i;
							break;
						}
						// partial start-with-match
						many++;
						if (part < 0) {
							part = i;
						}
					// partial contains-match
					} else if (shift > 0 && contains) {
						if (!inside) {
							inside = { i: i, shift: shift };
						}
						many++;
					}
				}
				shift = 0;
				// if no start-with-match, then use contains-match
				if (part < 0 && inside) {
					part = inside.i;
					shift = inside.shift;
				}
				if (match < 0) {
					if (!partial) {
						return null;
					}
					// blur/enter: use first partial match
					if (key < 0) {
						match = part;
					// keyboard: no partial match: reduce length of string and do recursive call
					// though, if entry is char and no partial match for string cut-off by that char, then disable entry
					} else if (part < 0) {
						return (key > 10 && len === sel) ? null : this._find(txt.substring(0, --len), key, matchOnly, noCase, contains, sel);
					}
					// keyboard: single partial match: use it
					if (key > 10 && many === 1) {
						match = part;
					// keyboard: multiple partial matches: use substring of first partial match (upper/lower case)
					} else if (key >= 0) {
						txt = this._item(items[part]).toString().substring(0, len + shift);
					}
				}
				// match found
				if (match >= 0) {
					txt = this._item(items[match]).toString();
					// match found by single partial match: move caret to the end of text
					if (match === part) {
						sel = txt.length;
					}
				}
				id = (match >= 0) ? match : part;
			}
			return { text: txt, id: id, sel: (_aNull(sel, 1) ? len : sel) + shift };
		},
		_undo: function (redo) {
			var old, val = this._old;
			if (redo) {
				if (!this._canRedo) {
					return;
				}
				val = this._redo;
				this._canRedo = false;
			} else {
				old = this._instant(1, null, 1);
				if (old === val) {
					return;
				}
				this._canRedo = true;
				this._redo = old;
			}
			this._set_val(val);
			this._text = this._focusTxt(false);
			// notify validator about textChange event
			this._doError(1, this._evt);
		},
		// preprocess key (e)event, a: 0-keydown, 1-keypress, 2-keyup
		_doKey0: function (e, a) {
			var ch, up, len, excl, incl, bad = this._validator, me = this,
				t0 = this._text, t1 = this._val(), k = this._key, o = this.options;
			//Stop processing of up and down arrow in case of excel navigation mode

			if (this.options.excelNavigationMode && [38, 40].indexOf(k) > -1) {
				return;
			}
			// can be called from setTimeout
			if (!this._field) {
				return;
			}
			// that is request from key-down on Ctrl+V: validate current value in field
			if (!e) {
				if (t0 !== t1) {
					this.paste(t1);
				}
				return;
			}
			// get around 'features' in Firefox under Japanese keyboard
			if (a === 1 && k === 192 && e.altKey && !e.ctrlKey) {
				return;
			}
			// Special keys in NumPad of Opera break all filters and go into input (42,43,45,46,47)
			if (this._type > 0 && $.browser.opera && k > 41 && k < 48) {
				if (a === 0) {
					this._noKey = k;
				} else if (this._noKey === k) {
					_stop(e);
				}
			}
			if (a !== 1) {
				this._noPaste = 2 - a;
			} else if (this._noPaste !== 2) {
				this._noPaste = 1;
			}
			if (k === 9) {
				this._k0 = (a === 2) ? 0 : 9;
				// if validator has label, then event can be canceled by _onTab
				if (a === 0 && bad && bad._lbl) {
					bad._onTab(e);
				}
			}
			if (k === 0 || (k === 114 && a !== 1) || k === 9) {
				return;
			}
			if (this._bad > 2) {
				if (a === 0) {
					this._bad = 2;
				}
				if (a === 2) {
					this._bad -= 3;
				}
			}
			if (a === 0 && k === 229) {
				if (t0 !== t1) {
					this._bad = 2;
				} else {
					this._bad += 3;
				}
			}
			// Japanese Enter keyup in mask editor (fake "save-client-state" action)
			if (k === 13 && this._k0 === 229 && this._type === 1) {
				this._txt = this._setTxt(this._val(), 5, true);
			}
			// Ctrl+Z/Y undo/redo actions
			if (a === 0 && e.ctrlKey && !e.altKey && (k === 90 || k === 89)) {
				this._undo(k === 89);
				return;
			}
			if (this._bad === 2 || (a === 1 && e.ctrlKey)) {
				return;
			}
			if (a === 0 && !e.ctrlKey && !e.altKey && !e.shiftKey) {
				if (this._listKey(e, k)) {
					// prepare for keypress on arrow/action-keys raised by Opera and Firefox
					this._kBad = k;
					return _stop(e);
				}
			}
			if (this._box) {
				return;
			}
			// get around keypress on arrow/action-keys raised by Opera and Firefox
			if (a === 1 && k === this._kBad) {
				return _stop(e);
			}
			this._kBad = null;
			// (Ctrl+V)=86 or (Ctrl+X)=88 or (Shift+Insert)=45 set request to validate value in editor and do paste/remove
			if (a === 0 && ((e.ctrlKey && (k === 86 || k === 88)) || (e.shiftKey && k === 45))) {
				setTimeout(function () {
					me._doKey0();
				}, 1);
			}
			if (a !== 1 && (e.ctrlKey || e.altKey || k === 17)) {
				if (e.altKey) {
					this._k0 = -1;
				} else if (t0 !== t1 && (k === 86 || (k === 17 && a === 2))) {
					this.paste(t1);
					this._noPaste = 1;
				} else if (k === 17) {
					this.getSelectedText();
				}
				return;
			}
			if (a === 0) {
				this._k0 = k;
			}
			if (a === 2) {
				if (this._k0 > 0) {
					this._k0 = 0;
				}
				this._spinField = -1;
			}
			len = t1.length;
			bad = this._bad !== 0;
			if (k <= 46) {
				switch (k) {
				case 8:
				case 46: // back del
					if (this._k0 === k && a === 1) {
						a = 2;
					}
					if (a === 0) {
						a = 1;
						if (k === 46) {
							k = 7;
						}
					}
					break;
				case 27:
					_stop(e);
					if (a === 0) {
						this._undo();
						if (!this._escFix) {
							this._escTxt = this._field[0].value;
						}
					} else {
						// get around special Esc feature of Firefox
						if (this._escFix && this._escTxt !== t1 && !_aNull(this._escTxt)) {
							this._field[0].value = this._escTxt;
							delete this._escTxt;
						}
						if (a === 1) {
							// Firefox raises keypress for Esc
							this._escFix = 1;
						} else {
							delete this._escFix;
						}
					}
					return;
				case 13: // enter
					if ((o.hideEnterKey && (!this._ta || !e.shiftKey)) || (this._type > 0 && this._ta && e.shiftKey)) {
						_stop(e);
					}
					return;
				case 38:
				case 40: // up down
					if (this._ta) {
						break;
					}
					if (a === 0 && !e.shiftKey) {
						this._spin((k === 38) ? o.spinDelta : -o.spinDelta);
					}
					if (this._k0 === k) {
						a = 2;
					}
					break;
				}
			}
			if (a === 1 && k === this._k0 && ((k < 48 && k > 9 && k !== 32) || k > 90)) {
				return;
			}
			if (!bad) {
				if (a !== 0 && [9, 38, 40].indexOf(k) === -1) {
					_stop(e);
				}
				if (a === 1 && this._k0 === -1) {
					this._k0 = 0;
					this.getSelectedText();
				}
				if (a === 0 || k < 9) {
					this.getSelectedText();
				}
			}
			if (a === 1 && k > 6) {
				if (k > 31) {
					// 1-keypress
					if (this._fire(1, e)) {
						if (bad) {
							_stop(e);
						}
						return;
					}
					k = this._key;
					excl = o.excludeKeys;
					incl = o.includeKeys;
					if (o.toUpper || o.toLower || excl || incl) {
						ch = String.fromCharCode(k);
						up = ch.toUpperCase();
						if ((excl && excl.toUpperCase().indexOf(up) >= 0) || (incl && incl.toUpperCase().indexOf(up) < 0)) {
							return _stop(e);
						}
						if (o.toUpper) {
							k = up.charCodeAt(0);
						} else if (o.toLower) {
							k = ch.toLowerCase().charCodeAt(0);
						}
						this._key = k;
					}
				}
				this._doKey(k, (k < 10) ? '' : String.fromCharCode(k), t1, len, this._sel0, this._sel1, bad, e);
			}
		},
		paste: function (txt, flag) {
			/* Paste text at location of caret. Note: method raises the "textChanged" event.
				paramType="string" New text to paste.
				paramType="bool" optional="true" Internal use only.
				returnType="object" Returns reference to this igEditor.
			*/
			var prop, o = this.options;
			if ((this._nullT && !flag) || this._noPaste === 1) {
				return this;
			}
			// 12-maxLength
			prop = this._prop(12);
			if (prop > 0 && prop < txt.length) {
				txt = txt.substring(0, prop);
			}
			prop = o.includeKeys;
			if (prop) {
				// convert expression-flag-characters into normal characters (escape them)
				prop = prop.toUpperCase().replace(/\[/gm, '\\[').replace(/\]/gm, '\\]').replace(/\^/gm, '\\^').replace(/\-/gm, '\\-');
				// remove everything from txt, but 'include' characters
				txt = txt.replace(new RegExp('[^' + prop + ']', 'igm'), '');
			}
			prop = o.excludeKeys;
			if (prop) {
				// convert expression-flag-characters into normal characters (escape them)
				prop = prop.toUpperCase().replace(/\[/gm, '\\[').replace(/\]/gm, '\\]').replace(/\^/gm, '\\^').replace(/\-/gm, '\\-');
				// remove from txt 'exclude' characters
				txt = txt.replace(new RegExp('[' + prop + ']', 'igm'), '');
			}
			if (o.toUpper) {
				txt = txt.toUpperCase();
			} else if (o.toLower) {
				txt = txt.toLowerCase();
			}
			if (_aNull(txt = this._matchList(txt, 0))) {
				txt = this._text;
			}
			this._text = '';
			this._fix = 0;
			this.text(txt, flag ? null : this._sel0); // mask
			this._fix = 1;
			// 12-textChanged
			this._fire(12);
			return this;
		},
		_touch: function (act) {
			var scroll, dd = this._ddList;
			if (dd && dd.igScroll) {
				scroll = dd.data('igScroll');
				if (!act) {
					// get around bugs in Android: diminish functionality of igScroll: do not use [cancelStart:true]
					return scroll ? scroll.barY : dd.igScroll({ direction: 'y', yThumb: 'draggable', yScroller: this._ddScroll, cancelStart: 'ms' }).attr('data-scroll', 'y');
				}
				if (scroll) {
					scroll[act](true);
				}
			}
		},
		_fixCss: function () {
			var but, i, dis, csso,
				elem = this._element,
				old = this._hoverOld,
				hov = this._hover,
				down = this._mouseDown,
				foc = this._fcs > 0,
				o = this.options,
				dd = this._ddList,
				css = this._css,
				border = '';
			if (!this._field) {
				return;
			}
			dis = o.disabled;
			csso = this.css;
			if (foc) {
				elem.addClass(csso.focus);
			} else {
				elem.removeClass(csso.focus);
			}
			if (hov) {
				elem.addClass(csso.hover);
			} else {
				elem.removeClass(csso.hover);
			}
			this._hoverOld = hov;
			if (!old || old === hov) {
				old = 0;
			}
			// remove hover from old hover-list-item of drop-down list
			if (old > 99) {
				if (!dd) {
					return;
				}
				this._listCss(dd, old, csso.listItemHover);
			}
			if (hov > 99 && !this._touch()) {
				this._listCss(dd, hov, csso.listItemHover, 1);
			}
			if (dis) {
				css += ' ' + csso.disabled;
			}
			if (this._nullT) {
				css += ' ' + csso.nullValue;
			}
			// numeric editor
			if (this._type > 3 && csso.negative && !this._nullT) {
				if (this._instant(1) < 0) {
					css += ' ' + csso.negative;
				}
			}
			this._setCss(this._field, css);
			// adjust appearance of buttons
			i = this._buttons ? 4 : 0;
			while (i-- > 0) {
				// 0-button, 1-upper spin, 2-lower spin, 3-clear button
				but = this._buttons[i];
				if (!but) {
					continue;
				}
				// _css: 0:default, 1:local-hover, 2:pressed, 3:disabled, 4:image-default, 5:image-hover, 6:image-pressed, 7:image-disabled
				csso = but[0]._css;
				css = csso[0];
				if (dis) {
					css += ' ' + csso[3];
				}
				if (hov === i + 1) {
					css += ' ' + csso[1];
				}
				if (foc) {
					css += ' ' + this.css.buttonFocus;
				}
				if (down === i + 1) {
					css += ' ' + csso[2];
				}
				this._setCss(but, css + border);
				css = csso[4];
				if (dis) {
					css += ' ' + csso[7];
				}
				if (down === i + 1) {
					css += ' ' + csso[6];
				} else if (hov === i + 1) {
					css += ' ' + csso[5];
				} else if (hov || foc) {
					css += ' ' + this.css.buttonsImageStateOverride;
				}
				this._setCss(but.find('SPAN'), css);
			}
		},
		_setCss: function (obj, css) {
			// check if css was modified externally
			var cur = obj[0].className, old = obj[0]._ig_oldCss;
			obj[0]._ig_oldCss = css;
			// avoid unneccary repainting/image-reloading (possible bugs in IE)
			if (css === old) {
				return;
			}
			// check if css was modified externally: keep external className
			if (old && cur && old !== cur && cur.indexOf(old) >= 0) {
				cur = cur.replace(old, '');
				css += ((cur.charAt(0) !== ' ') ? ' ' : '') + cur;
			}
			obj[0].className = css;
		},
		_enterTxt: function () {
			var d, type = this._type;
			// mask editor
			if (type === 1) {
				return this._getTxt(this._dataMode, '');
			}
			// date editor
			if (type === 2 || type === 3) {
				d = this._toDate(this._val(), true);
				return _aNull(d) ? '' : this._toTxt(d, true, '');
			}
			// numeric editors
			if (type > 3) {
				return this._toTxtNum(null, true, this._val(), '-', '.');
			}
			return this._val();
		},
		_update: function () {
			var v, old = this._old;
			if (this._lock) {
				return; //process valueChanged with alert(), enter part value in mask, keep mouse within text, press enter: 2 alerts.
			}
			this._lock = true;
			this._text = this._focusTxt(false, (this._fcs === 2 || this._hadFocus) ? '' : null); //''-still focus
			v = this._instant(1, null, 1);
			if (!_aNull(v) && !_aNull(old)) {
				if (v.getTime && v.getTime() === old.getTime()) {
					v = old;
				}
			}
			if (v !== old || this._bad === 2) {
				this._val10 = v;
				// 10-valueChanging
				if (this._fire(10, null, v, old)) {
					this._set_val(old);
					this._text = this._focusTxt(false);
				} else {
					if (v !== this._val10) {
						this._setVal(this._val10);
					}
					// if application calls text() within ValueChanged event, then text can be wrong
					this._repaint();
					this.options.value = v = this._instant(1, null, 1);
					// 11-valueChanged
					this._fire(11, null, v, old);
					if (this._k0 !== 13) {
						this._old = v;
					}
					this._dtt();
				}
			}
			this._lock = false;
		},
		// trigger drop-down show/hide. return null if no trigger was found or action failed/canceled
		// k: -2:button, -1:focus, 1..:keycode
		_dropTrigger: function (e, k) {
			var len, ch, acts, o = this.options, on = this._ddOn;
			acts = o.dropDownTriggers;
			if (k === 0 || !acts || (o.readOnly && !o.dropDownOnReadOnly) || (k === -2 && acts.indexOf('button') < 0) || (k === -1 && acts.indexOf('focus') < 0)) {
				return;
			}
			if (((k === 38 && !on) || (k === 40 && on))) {
				return;
			}
			if (k > 0) {
				ch = (k === 38 || k === 40) ? 'arrow' : String.fromCharCode(k);
				if (e.ctrlKey) {
					ch = 'ctrl+' + ch;
				} else if (e.altKey) {
					ch = 'alt+' + ch;
				} else if (e.shiftKey) {
					ch = 'shift+' + ch;
				}
				len = ch.length;
				ch = acts.indexOf(ch);
				if (ch < 0 || (ch > 0 && acts.charAt(ch - 1) !== ',') || (ch + len < acts.length && acts.charAt(ch + len) !== ',')) {
					return;
				}
			}
			// skip double triggers (button+focus)
			if (!on || k !== -1 || _now() - on > 900) {
				return this._doDrop(1, e);
			}
		},
		// act for datepicker: 0:hide, 1:show, 2:refresh, 3:destroy
		_doDP: function (act, sel) {
			var odp, v, dp, field, id, o = this.options;
			if (!this._field || this._type !== 3) {
				return;
			}
			if (!this._dp && act !== 1) {
				return 1;
			}
			if (sel) {
				this._set_val(sel);
				// 12-textChanged
				this._fire(12);
			}
			dp = $.datepicker;
			field = this._field[0];
			id = field.id;
			// configure/hack-into $.datepicker
			if (!dp._old_selectDay) {
				dp._old_selectDay = dp._selectDay;
				dp._old_parseDate = dp.parseDate;
				dp._old_updateDatepicker = dp._updateDatepicker;
				dp._old_checkOffset = dp._checkOffset;
				// do not allow calendar to get focus on mousedown under firefox
				dp.dpDiv.bind('mousedown', function (evt) {
					var dp = $.datepicker._ig_dp;
					if (dp) {
						if (evt.target && evt.target.nodeName === 'SELECT' && !$.browser.mozilla) {
							// set flag to ignore blur and set focus() back to INPUT
							dp._ddmd = _now();
						} else {
							_stop(evt);
						}
					}
				});
				// prevent default update of field by calendar on select
				dp._selectDay = function (id, month, year, td) {
					var me = this._ig_dp;
					if (!me) {
						return this._old_selectDay(id, month, year, td);
					}
					id = $('a', td).html() || td.firstChild.innerHTML;
					// hide calendar and set value to selection
					me._doDrop(0, { type: 'mousedown' }, [year, month, _int(id)], 1);
					// stop xy-move timer: optional (should be stopped by now)
					me._xyCheck(true);
				};
				// do not allow calendar to get focus on mousedown under UI
				dp._updateDatepicker = function (inst) {
					if (this._ig_dp) {
						this.dpDiv.addClass(this._ig_css = this._ig_dp.css.dropDown);
					} else if (this._ig_css) {
						this.dpDiv.removeClass(this._ig_css);
						delete this._ig_css;
					}
					this._old_updateDatepicker(inst);
					if (this._ig_dp) {
						this.dpDiv.find('*').attr('unselectable', 'on');
					}
				};
				// replace default parseDate by _getVal
				dp.parseDate = function (a, b, c) {
					return this._ig_dp ? this._ig_dp._df(this._ig_dp._getVal(1), -1) : this._old_parseDate(a, b, c);
				};
				// adjust left-position of calendar for possible buttons on left
				dp._checkOffset = function (inst, offset, isFixed) {
					var xy, me = this._ig_dp;
					offset = this._old_checkOffset(inst, offset, isFixed);
					if (me) {
						offset.left -= me._leftShift();
						_offset(null, offset);
						// if container of editor was moved, then close drop-down
						// start xy-move timer
						xy = _offset(me._swap ? me._field : me._element);
						me._xy = {
							x: xy.left,
							y: xy.top,
							i: setInterval(function () { me._xyCheck(); }, 300)
						};
					}
					return offset;
				};
			}
			// show calendar
			if (act === 1) {
				// ensure that field has unique id
				if (id.length < 1) {
					id = this.element[0].id + '_ig_dp_id';
					while (document.getElementById(id)) {
						id += Math.floor(Math.random() * 10);
					}
					field.id = id;
				}
				// create $.datepicker and connect it to field
				if (!this._dp) {
					odp = $.extend(o.datepickerOptions, this._dpRegion()) || {};
					v = o.animationShowDuration;
					if (v) {
						odp.duration = v;
					}
					v = o.animationShowEffect;
					if (v) {
						odp.showAnim = v;
					}
					odp.showOn = '';
					odp.onClose = function () {
						var me = dp._ig_dp;
						if (me) {
							me._dpClosed = 1;
							me._doDrop();
							delete me._dpClosed;
							delete dp._ig_dp;
						}
					};
					this._dp = $(field).datepicker(odp);
				}
				odp = $.data(field, 'datepicker').settings;
				odp.minDate = odp.minDate || o.minValue;
				odp.maxDate = odp.maxDate || o.maxValue;
				if ($.browser.opera) {
					odp.changeYear = false;
				}
				dp._ig_dp = this;
				// prevent hide calendar on field-mouse-down, and allow destroy
				this._css += ' ' + $.datepicker.markerClassName;
				if (this._fcs < 1) {
					this.setFocus(-1);
				}
				dp._showDatepicker(field);
			} else if (act === 2) {
				// update calendar selection from change in field
				dp._doKeyUp({ target: field });
			// 0 - hide, 3 - destroy
			} else {
				// stop xy-move timer
				this._xyCheck(true);
				// hide calendar
				if (!this._dpClosed) {
					dp._hideDatepicker(field);
				}
				// destroy calendar
				if (act === 3) {
					dp._destroyDatepicker(field);
				}
			}
			return 1;
		},
		_fixBC: function (src, e) {
			src = src.css('backgroundColor');
			e.css('backgroundColor', (!src || src === 'transparent' || src.replace(/ /g, '').indexOf('(0,0,0,0') > 0) ? 'white' : src);
		},
		// if element was moved, then close drop-down list
		_xyCheck: function (stop) {
			var xy = this._xy, xyE = this._swap ? this._field : this._element;
			if (!xy) {
				return;
			}
			if (xyE) {
				xyE = _offset(xyE);
				if (Math.abs(xyE.left - xy.x) > 2 || Math.abs(xyE.top - xy.y) > 2) {
					stop = true;
				}
			}
			if (stop || !xyE || !this._ddOn) {
				delete this._xy;
				clearInterval(xy.i);
				this._doDrop();
			}
		},
		// focus/dropdown interactions with igValidator
		// act: 'drop'-show dropdown, 'hide'-hide dropdown, true-focus, undefined/false-blur/remove
		// return: true-cancel action
		_vAct: function (act) {
			return $.ui.igValidator && $.ui.igValidator._act(this, act);
		},
		// show/hide/create drop-down list/calendar
		// act: 0/null-hide, 1-toggle
		// sel: null or [year,month,day] or listIndex+100
		_doDrop: function (act, e, sel, dp) {
			var borderClr, widthOuter, heightOuter, height, up, ht, y, b,
				row, col, cols, rows, dif, cell, max, end, el, xy, effect,
				width, dd, elem, body, len, items, heightEnd, par = this._ddParent,
				i = -1, val = sel, me = this, o = this.options;
			items = o.listItems;
			act = (act === 1) ? !this._ddOn : false;
			if (!act && !this._ddOn && !dp) {
				return;
			}
			if (!me._field || me._vAct(act ? 'drop' : 'hide')) {
				return;
			}
			len = items ? items.length : 0;
			// datepicker
			if (this._type === 3) {
				if (sel && !isNaN(sel[2])) {
					// 1: get Date object
					val = this._getVal(1);
					if (!val) {
						val = this._df(sel[0], sel[1], sel[2], 0, 0, 0, 0);
					} else {
						val = this._df(sel[0], sel[1], sel[2], this._df(val, 3), this._df(val, 4), this._df(val, 5), this._df(val, 6));
					}
				}
			} else {
				if (len < 1) {
					return;
				}
				if (sel) {
					val = this._item(items[sel - 100]);
				}
			}
			// 16-show drop-down, 17-hide
			if (this._fire(act ? 16 : 17, e, act ? null : { value: val }) && e) {
				return;
			}
			this._ddOn = act ? _now() : null;
			// show/hide calendar
			if (this._type === 3) {
				return this._doDP(act ? 1 : 0, val);
			}
			dd = me._ddList;
			elem = me._element;
			body = !o.listDropDownAsChild || elem === me._field;
			if (!dd) {
				dd = me._ddList = $('<div/>').addClass(me.css.dropDown + ' ' + me.css.list).scroll(function () {
					me._lazy();
				});
				// _id: 99:drop-down
				dd[0]._id = 99;
				me._ddSel = -1;
				me._ddLen = len;
				dd.css({ position: 'absolute', visibility: 'hidden' });
				if ((width = o.listWidth) < 5) {
					if ((width = elem.outerWidth()) < 5) {
						width = 100;
					}
				}
				if (body) {
					me._ddParent = par = o.theme ? $('<span/>').addClass(o.theme).css('position', 'absolute').append(dd) : dd;
					par.css({ left: '0px', top: '0px' }).appendTo($('body'));
					dd.bind(me._mEvts);
				} else {
					me._ddParent = par = dd.prependTo(elem);
				}
				borderClr = dd.css('borderRightColor');
				cols = Math.max(1, o.listColumns);
				rows = me._rows = Math.ceil(len / cols);
				dif = dd.outerWidth() - dd.width();
				width = Math.ceil((width - dif) / cols - 1);
				me._listLazy = [];
				for (col = 0; col < cols; col++) {
					for (row = 0; row < rows; row++) {
						if (++i >= len) {
							break;
						}
						// check for last item
						cell = '<div style="width:' + width + 'px;position:absolute;white-space:nowrap;overflow:hidden;';
						val = me._item(items[i]);
						if (typeof val !== 'string') {
							if (me._type >= 4 && typeof val === 'number') {
								val = me._toTxtNum(val);
							} else if (val && me._type === 2 && val.getMonth) {
								val = me._toTxt(val);
							} else {
								val = _str(val);
							}
						}
						el = items[i];
						if (el && typeof el.getHtml === 'function') {
							el = el.getHtml() || val;
						} else {
							el = val;
						}
						if (i > 0) {
							cell += 'height:' + height + 'px;left:' + (col * widthOuter) + 'px;top:' + row * heightOuter + 'px;';
						}
						if (col + 1 < cols) {
							cell += 'border-right-color:' + borderClr;
						}
						cell += '" title="' + me._item(items[i]) + '" _id="' + (i + 100) + '" class="' + me.css.listItem;
						if (col + 1 < cols) {
							cell += ' ' + me.css.listItemColumnBorder;
						}
						cell += '">' + ((el === '') ? '&nbsp;' : el) + '</div>';
						// create only first and last (for scrollbar) items
						if (i === 0 || i + 1 === len) {
							cell = $(cell).appendTo(dd);
							// _id: 100+index:drop-down-item
							cell[0]._id = i + 100;
						} else {
							// all other items create by _lazy
							me._listLazy[i] = cell;
						}
						// calculate inner/outer width/height
						if (i === 0) {
							if ((height = cell.height()) < 5) {
								height = 18;
							}
							if ((dif = cell.outerWidth() - cell.width()) > 0) {
								width -= dif;
								cell.css('width', width);
							}
							// width/height of drop-down container
							me._ddWidth = (widthOuter = cell.outerWidth() + 1) * cols;
							me._ddHeight = (me._ddHeight0 = heightOuter = cell.outerHeight()) * rows;
							// ensure that dd-container has same backgroundColor as cell-item
							me._fixBC(cell, dd);
							max = Math.max(0, o.listMaxHeight);
							// make space for scrollbar
							if (max > 0 && me._ddHeight > max) {
								me._ddHeight = max;
								max = Math.ceil(16 / cols);
								cell.css('width', width -= max);
								widthOuter -= max;
							} else {
								max = 0;
							}
							dd.css('overflow', (max > 0) ? 'auto' : 'hidden');
							cell.css({ height: height, left: col * widthOuter, top: row * heightOuter });
						}
					}
				}
				me._page = Math.max(2, Math.floor(Math.min(me._ddHeight / height), len / 3) - 1);
			}
			if (sel) {
				if (!me._listSelect(sel - 100)) {
					me._set_val(val = this._item(items[sel - 100]));
					// 12-textChanged
					me._fire(12);
				}
			}
			if (!act) {
				me._lastY = dd[0].scrollTop;
			} else if (me._lastY) {
				dd[0].scrollTop = me._lastY;
			}
			me._listSelect(null, 1);
			val = act ? o.animationShowDuration : o.animationHideDuration;
			if (!val || (typeof val === 'number' && val < 5)) {
				val = null;
			} else {
				effect = act ? o.animationShowEffect : o.animationHideEffect;
				if (!$.effects || !$.effects[effect]) {
					if (!act && typeof val !== 'number') {
						val = 450;
					}
					effect = null;
				}
			}
			// starting height for show-animation, ending height for hide-animation
			heightEnd = (val && !effect) ? 0 : me._ddHeight;
			end = function () {
				if (act) {
					dd.css('filter', '');
					// ensure scroll
					if (!sel && me._lastY) {
						dd[0].scrollTop = me._lastY;
					} else {
						me._listSelect();
					}
					// verify that there is no horizontal scrollbar and increase width (IE+quirks)
					if (!me._ddFixW && (i = dd[0].scrollWidth - dd[0].clientWidth) > 0 && i && i < 4) {
						dd.css('width', me._ddWidth += (me._ddFixW = i + 1));
					}
					me._touch();
				} else {
					dd.css({ display: 'none', visibility: 'hidden' });
					me._touch('_hide');
				}
			};
			// show list
			if (act) {
				this._lazy();
				if (me._fcs < 1) {
					me.setFocus();
				}
				// validate if drop-down fits in window
				// ht: client height of window
				ht = 999;
				b = document.body;
				el = document.documentElement;
				// process window (not IE)
				if ((i = window.innerHeight) > 50 && i) {
					ht = i;
				} else if ((i = el.clientHeight) > 50 && i) {
					ht = i;
				} else if ((i = b.clientHeight) > 50 && i) {
					ht = i;
				}
				// y: scrollTop of window
				y = Math.max(window.pageYOffset || 0, Math.max(b.scrollTop, el.scrollTop));
				// if element was swapped, then under Firefox offset() returns wrong values: use original element
				el = me._swap ? me._field : elem;
				xy = _offset(el);
				me._xy = body ? { x: xy.left, y: xy.top } : null;
				xy.h = el[0].offsetHeight;
				// if enough space for drop-down below editor
				up = xy.top + xy.h + me._ddHeight - y - ht;
				if (up > 0 && y - xy.top + me._ddHeight < up) {
					// shift drop-down above editor
					up = me._ddHeight + 2;
					if (xy.top - up < y) {
						// do not allow drop-down go above top edge of window
						up = Math.max(xy.top - y, 2);
					}
					// xy.h is used for "marginTop", when drop-down is local to editor
					// xy.top is used for "top", when drop-down belongs to body
					xy.top += (xy.h = -up);
					// disable animation of height
					heightEnd = me._ddHeight;
					elem.addClass(me.css.noTopCorners);
					dd.addClass(me.css.noBottomCorners);
				} else {
					// show drop-down below editor
					// xy.top is used for "top", when drop-down belongs to body
					xy.top += xy.h;
					elem.addClass(me.css.noBottomCorners);
					dd.addClass(me.css.noTopCorners);
				}
				// initial styles before show-animation
				dd.css({ opacity: (val && !effect) ? 0 : 1, height: heightEnd, width: Math.floor(me._ddWidth / ((val && !effect) ? 2 : 1)), display: '', visibility: 'visible' });
				if (body) {
					// adjust for shift between left edge of field inside of container
					if (me._swap) {
						xy.left -= me._leftShift();
					}
					xy.left -= _int(elem.css('borderLeftWidth'));
					par.css({ left: xy.left, top: xy.top });
					me._xy.i = setInterval(function () {
						me._xyCheck();
					}, 300);
				} else {
					i = me._left ? 'Right' : 'Left';
					par.css('margin' + i, -_int(elem.css('border' + i + 'Width')) + 'px');
					par.css('marginTop', xy.h);
					// IE in quirks mode shifts drop-down to the right edge
					up = _offset(par);
					if ((up = up.left - xy.left) > 30 && up < elem[0].offsetWidth + 10) {
						par.css('marginLeft', -up + 'px');
					}
				}
				if (!val) {
					end();
				} else if (effect) {
					dd.show(effect, {}, val, end);
				} else {
					dd.animate({ opacity: 1, height: me._ddHeight, width: me._ddWidth }, val, null, end);
				}
			// hide list
			} else {
				me._xyCheck(true);
				elem.removeClass(me.css.noTopCorners).removeClass(me.css.noBottomCorners);
				dd.removeClass(me.css.noBottomCorners).removeClass(me.css.noTopCorners);
				if (!val) {
					end();
				} else if (effect) {
					dd.hide(effect, {}, val, end);
				} else {
					dd.animate({ opacity: 0.6 }, Math.floor(val * 0.34)).animate({ opacity: 0, height: heightEnd, width: Math.floor(me._ddWidth / 2) }, Math.floor(val * 0.66), null, end);
				}
			}
			return true;
		},
		_lazy: function (i) {
			var id, j, cols = Math.max(1, this.options.listColumns), items = this._listLazy, dd = this._ddOn ? this._ddList : null;
			if (!dd) {
				return;
			}
			if (i) {
				if (items[i]) {
					// _id: 100+index:drop-down-item
					$(items[i]).appendTo(dd)[0]._id = i + 100;
					delete items[i];
				}
				return;
			}
			id = Math.floor(dd[0].scrollTop / this._ddHeight0);
			while (cols-- > 0) {
				for (i = 0; i < this._page + 8; i++) {
					if (items[j = this._rows * cols + id + i]) {
						// _id: 100+index:drop-down-item
						$(items[j]).appendTo(dd)[0]._id = j + 100;
						delete items[j];
					}
				}
			}
		},
		_listCss: function (dd, id, css, add) {
			dd = $(dd.children('[_id=' + id + ']'));
			if (add) {
				dd.addClass(css);
			} else {
				dd.removeClass(css);
			}
		},
		// adjust selected item in drop-down list and scroll
		// on=2: do not repaint list, on=1: repaint list, on=null: repaint list if opened
		_listSelect: function (id, on) {
			var top, scroll, sel, arg = null, dd = (on !== 2 && (on || this._ddOn)) ? this._ddList : null, o = this.options;
			if (!o.listItems) {
				return;
			}
			if (!_aNull(id) && this._listID !== id) {
				//18: listSelecting
				if (this._fire(18, null, arg = {index: id, oldIndex: this._listID, item: o.listItems[id]})) {
					return 1;
				}
				this._listID = id;
			}
			id = this._listID;
			if (dd) {
				if (on && id < 0) {
					if (!_aNull(on = this._findItem(this.text(), -1)) && id !== on.id) {
						//18: listSelecting
						if (this._fire(18, null, arg = {index: on.id, oldIndex: id, item: o.listItems[on.id]})) {
							return 1;
						}
						this._listID = id = on.id;
					}
				}
				// adjust css of selected item
				sel = this._ddSel;
				if (sel !== id) {
					this._lazy(id);
					this._listCss(dd, sel + 100, this.css.listItemSelected);
					this._listCss(dd, (sel = this._ddSel = id) + 100, this.css.listItemSelected, 1);
				}
				if (sel >= 0) {
					// adjust scroll to keep selected item visible
					top = (sel % this._rows) * this._ddHeight0;
					scroll = dd[0].scrollTop;
					if (top > scroll) {
						top += this._ddHeight0 - this._ddHeight;
						if (top < scroll) {
							top = -9;
						}
					}
					if (top !== -9) {
						// get around scroll-bug in Safari after animation
						if ($.browser.safari && top > 20 && dd[0].scrollTop === top && !on) {
							dd[0].scrollTop = top - 1;
						}
						dd[0].scrollTop = top;
					}
				}
			}
			if (arg) {
				//19: listSelected
				this._fire(19, null, arg);
			}
		},
		// process keydown for drop-down list
		// return true if key was processed
		_listKey: function (e, k) {
			var i, len, dd = this._ddOn ? this._ddList : null, id = this._listID, kc = $.ui.keyCode;
			if (!dd) {
				return;
			}
			if (k === kc.ENTER || k === kc.SPACE || k === kc.ESCAPE) {
				this._doDrop(0, e, (k === kc.ESCAPE) ? null : id + 100);
				return true;
			}
			// not action key
			if (k < 33 || k > 40) {
				return;
			}
			len = this._ddLen - 1;
			if ((i = id) < 0) {
				i = -1000;
			}
			if (k === kc.DOWN) {
				i++;
			} else if (k === kc.UP) {
				i--;
			} else if (k === kc.PAGE_DOWN) {
				i += this._page;
			} else if (k === kc.PAGE_UP) {
				i -= this._page;
			} else if (k === kc.HOME) {
				i = 0;
			} else if (k === kc.END) {
				i = len;
			} else if (k === kc.RIGHT) {
				if ((i += this._rows) > len) {
					i = id;
				}
			} else if (k === kc.LEFT) {
				if ((i -= this._rows) < 0) {
					i = id;
				}
			} else {
				return;
			}
			this._listSelect(Math.max(0, Math.min(i, len)));
			return true;
		},
		_listChange: function (list, i, act) {
			var len, count, j, items = this.options.listItems;
			len = items ? items.length : 0;
			j = count = list ? list.length : 0;
			i = (_aNull(i) || i < 0) ? -1 : i;
			// 0:clear, 1:remove, 2:add
			if (act < 2) {
				if (len < 1) {
					return this;
				}
				// find index of item to remove
				if (act > 0 && i < 0) {
					if (list === null) {
						i = len - 1;
					} else {
						while (++i < len) {
							if (items[i] === list) {
								break;
							}
						}
					}
				}
				if (i < 0) {
					items.length = 0;
				} else if (i < len) {
					items.splice(i, 1);
				}
			} else if (!items) {
				this.options.listItems = list;
			} else {
				while (j-- > 0) {
					if (i >= len || i < 0) {
						items.push(list[count - j - 1]);
					} else if (i === 0) {
						items.unshift(list[j]);
					} else {
						items.splice(i, 0, list[j]);
					}
				}
			}
			this._listRemove();
			return this;
		},
		_listRemove: function () {
			if (this._ddList) {
				this._touch('destroy');
				this._element.removeClass(this.css.noTopCorners).removeClass(this.css.noBottomCorners);
				this._ddList.unbind();
				this._ddParent.remove();
				this._ddOn = this._ddList = this._ddParent = this._listLazy = null;
				this._listID = -1;
			}
		},
		_initValidator: function (end, req) {
			if (!this._field) {
				return;
			}
			var v = this._validator, o = this.options, vo = o.validatorOptions;
			// check if igValidator.js is available
			if (end || !vo || !this.element.igValidator) {
				if (v) {
					v.destroy();
					delete this._validator;
				}
				return;
			}
			vo.ctl = this;
			vo.required = o.required = o.required || (!req && vo.required);
			this._field.igValidator(vo);
		},
		// show/hide drop-down validator error label
		// flag: 1-textChanged event, 2-focus event, null-unconditional hide
		// e: browser event or null
		// mes: error message from _doInvalid, if flag=2,then it is submit flag
		_doError: function (flag, e, mes) {
			var val = this._validator;
			if (val && this._field) {
				if (!_aNull(mes)) {
					// 1: error message was canceled by application (used by this.validate)
					return val._doError(mes, null, flag) !== 1;
				}
				if (flag) {
					// notify validator about textChange/focus events
					val._evt(e, null, flag === 2);
					// if error displayed, then memorize current values of editor if focus is set back: used by _onEvt:focus
					if (val._lbl) {
						val._lbl._old = { t: _now(), val: this._val(), sel0: this._sel0, sel1: this._sel1, lastTxt: this._lastText, last: this._last, txt: this._text };
					}
				} else {
					val.hide(1);
				}
			}
		},
		// try to get around scroll-to-caret bugs in Firefox/Safari/Opera/IE9+TEXTAREA
		_doScrl: function (field, txt) {
			var ch, e, fox = $.browser.mozilla && !this._dp, width = field.clientWidth, max = field.scrollWidth, len = txt.length, f = false, sel = this._sel0;
			if (!this._field || this._tr !== 1 || len < 4) {
				return;
			}
			// width of character in INPUT
			ch = max / len * 1.1;
			// text-length after caret
			len -= sel;
			// TEXTAREA
			if (this._ta) {
				if (field.clientHeight + 2 > (max = field.scrollHeight)) {
					return;
				}
				txt = txt.split('\n');
				// only for caret at the end of last line
				if (len * 15 < width && (fox || txt[txt.length - 1].length * 15 > width)) {
					field.scrollTop = max;
					return;
				}
				if (!fox) {
					return;
				}
			// short text before caret
			} else if (sel * 15 < width) {
				return;
			}
			// Safari/Chrome (not Firefox)
			if (!fox) {
				if (max > width + 2) {
					// check length of text after caret and scroll to the end
					if (len * ch * 1.3 < width) {
						field.scrollLeft = max;
					// check length of text before caret and scroll to keep caret at right
					} else if (sel * ch > width + field.scrollLeft) {
						field.scrollLeft = Math.floor(sel * ch - width - 3);
					}
				}
				return;
			}
			// no support for Japanese
			if (this._bad > 2) {
				return;
			}
			// flag to ignore _onEvt
			this._scrl = 1;
			// fake Space+BackSpace: it should trigger horizontal scroll in Firefox
			try {
				ch = field.maxLength;
				e = this._mask;
				if (ch > 0) {
					field.maxLength = Math.max(ch, e ? e.length : 0) + 2;
				}
				e = document.createEvent('KeyboardEvent');
				e.initKeyEvent('keypress', !f, !f, null, f, f, f, f, 0, 32);
				field.dispatchEvent(e);
				e = document.createEvent('KeyboardEvent');
				e.initKeyEvent('keypress', !f, !f, null, f, f, f, f, 8, 0);
				field.dispatchEvent(e);
				if (ch > 0) {
					field.maxLength = ch;
				}
			} catch (ex) { }
			delete this._scrl;
		},
		_onEvt: function (e, type) {
			var old, txt, field = this._field, me = this;
			field = field ? field[0] : null;
			// _scrl: ignore-event-flag used for scroll-bug in Firefox
			if (!field || me._scrl) {
				return;
			}
			me._evt = e;
			// 11-paste, beforecut, cut, drop
			if (type !== 11) {
				me._doEvt(e, type, field);
				delete me._evt;
			} else {
				// paste, cut, drop, clear-button
				old = field.value;
				// try to get drop-data from clipboard (IE and Firefox)
				try {
					if (me._nullT && e && e.type === 'drop' && !_aNull(txt = e.originalEvent.dataTransfer)) {
						txt = txt.getData('Text');
					}
				} catch (ex) {
					txt = null;
				}
				me._pasting = 1;
				setTimeout(function () {
					if (!txt) {
						if (!me._field) {
							return;
						}
						txt = field.value;
					}
					if (txt && old !== txt) {
						me.paste(txt, 1);
					}
					delete me._pasting;
				}, 0);
			}
		},
		// eType: 0-keydown, 1-keypress, 2-keyup, 3-mousedown, 4-mouseup, 5-mousemove, 6-mouseover, 7-mouseleave, 8-focus, 9-blur, 26-MSPointerOver
		_doEvt: function (e, eType, field) {
			var val, foc, skip, skip0, up, time, src, v = null, k = 0, me = this, o = this.options;
			// _noWidth: flag to calculate width
			if (me._noWidth) {
				me._fixWidth();
			}
			if (!e || o.disabled) {
				return;
			}
			if (eType === 10) {
				v = e.wheelDelta || e.detail;
				if (v) {
					_stop(e);
					me._spin((v > 0) ? o.spinDelta : -o.spinDelta);
				}
				return;
			}
			// MSPointerOver: flag to skip mouseover for touch event (if pointerType=2)
			if (eType === 26) {
				me._msOver = e.originalEvent.pointerType;
				return;
			}
			// that is continuation of MSPointerOver (2-touch event)
			if (me._msOver === 2 && eType === 6) {
				delete me._msOver;
				return;
			}
			val = src = e.target;
			// find field/button element which owns event
			// _id: -1:field, 1:button, 2:upper-spin, 3:lower-spin, 4:clear, 5:button-image, 6:upper-spin-image, 7:lower-spin-image, 8:clear-image 99:drop-down, 100+index:drop-down-item
			// find element in editor to which belongs browser event
			while (val && k++ < 5 && _aNull(v = val._id)) {
				val = val.parentNode;
			}
			// mouse leave
			if (eType === 7) {
				me._hover = me._mouseDown = 0;
				me._fixCss();
				me._fire(eType, e, v);
				return;
			}
			if (!v) {
				return;
			}
			// mouseover
			if (eType === 6) {
				// disable ability to get focus in IE
				if (v > 0 && !src.unselectable) {
					src.unselectable = 'on';
				}
				// get around drag-drop/paste in Chrome/Safari (no drop/paste/etc events is raised)
				val = field.value;
				if (val === me._lastText || me._pasting) {
					val = null;
				}
				// ignore drop if there is nullText
				if (!me._fcs && val && me._nullT) {
					if (val !== o.nullText) {
						me._fixNull();
					}
					val = null;
				}
				if (val) {
					me.paste(val, 1);
				}
			}
			// replace 5,6,7,8 (image id) by 1,2,3,4 (button id)
			if (v > 4 && v < 9) {
				v -= 4;
			}
			// keydown and no focus
			// get around bugs in IE8. It may set focus to element before 'init' was called, so: fake 'focus' event
			if (eType === 0 && me._fcs === 0) {
				me._onEvt({ target: src, type: 'focus' }, 8);
			}
			if (_aNull(me._evt0Spin1) && !me._box) {
				try {
					// new lines in TEXTAREA of IE9 are not compatible with IE6-8.
					// That kills calculations of caret: use selectionStart/End and sacrifice scrolling (process _scrl)
					if (!($.browser.msie && !me._ta) && !_aNull(field.selectionStart)) {
						me._tr = 1;
					}
				} catch (ex) { }
				if (me._tr !== 1) {
					me._tr = field.createTextRange ? field.createTextRange() : null;
				}
				me._bad = _aNull(me._tr) ? 1 : 0;
			}
			me._evt0Spin1 = 0;
			// cut from mask
			// 5-mousemove
			if (eType === 5 && me._fcs === 2 && e.button === 1) {
				me.getSelectedText();
			}
			time = _now();
			// 0-keydown, 1-keypress, 2-keyup
			if (eType < 3) {
				me._key = k = e.keyCode || e.which || 0;
				me._time = time;
			}
			// 1-keypress
			// 0,2,3,4,5,6,7-keydown,keyup,mousedown,mouseup,mousemove,mouseover,mouseleave
			if (eType !== 1 && eType < 8) {
				if (me._fire(eType, e, v)) {
					if (eType < 4) {
						_stop(e);
					}
					return;
				}
			}
			// 0,1,2-keydown,keypress,keyup
			if (eType < 3) {
				// show/hide drop-down
				if (eType === 0 && (me._fcs === 2 || o.dropDownOnReadOnly) && me._dropTrigger(e, k)) {
					return;
				}
				// readOnly state: allow to process up/down arrows
				if (me._fcs === 1 && (e.shiftKey || eType === 1 || !(o.spinOnReadOnly || (o.dropDownOnReadOnly && me._ddOn)) || k < 9 || k > 40)) {
					return;
				}
				// that may happen in grid-editor under Opera on "+" key
				// k=86: skip possible paste by Ctrl+V
				if (eType === 2 && me._k0 === 0 && k > 0 && k !== 86 && me._text !== me._val()) {
					field.value = me._text;
					return;
				}
			}
			// 3-mousedown
			// v: -1:field, 1:button, 2:upper-spin, 3:lower-spin, 5:button-image, 6:upper-spin-image, 7:lower-spin-image, 99:drop-down, 100+index:drop-down-item
			// buttons, list
			if (eType === 3 && v > 0) {
				if (v === 99) {
					me._ddmd = time;
				}
				_stop(e);
			}
			if (eType === 3 && me._mouseDown !== v) {
				// spin buttons
				if (v > 1 && v < 4) {
					me._stopTimer(1);
					if (!o.readOnly || o.spinOnReadOnly) {
						up = (v === 2) ? o.spinDelta : -o.spinDelta;
						if (me._fcs < 1 && o.focusOnSpin) {
							me._evt0Spin1 = 1;
							me.setFocus();
						}
						me._spin(up);
						skip = skip0 = 5;
						me._spinField = -1;
						me._timer = setInterval(function () {
							if (me._mouseDown < 2) {
								return me._stopTimer(1);
							}
							if (--skip < 1) {
								me._spin(up);
								skip = (--skip0 > 8) ? --skip0 : skip0;
							}
						}, 60);
					}
				}
				me._hover = me._mouseDown = v;
				me._fixCss();
			}
			// 5-mousemove, 6-mouseover
			// v: -1:field, 1:button, 2:upper-spin, 3:lower-spin, 5:button-image, 6:upper-spin-image, 7:lower-spin-image, 99:drop-down, 100+index:drop-down-item
			if ((eType === 5 || eType === 6) && me._hover !== v) {
				me._hover = v;
				me._fixCss();
			}
			// 4-mouseup
			if (eType === 4 && me._mouseDown) {
				// v: 1:button, 4:clear
				if ((v === 1 || v === 4) && v === me._mouseDown) {
					// 15-buttonClick
					if (!me._fire(15, e)) {
						if (v === 4) {
							// _onEvt(null, 11) will setTimeout to raise possible textChanged/valueChanged events
							me._onEvt(null, 11);
							// _set_val does not reset "old" values
							me._set_val(null);
							me.select(0);
						} else {
							me._dropTrigger(e, -2);
						}
					}
				}
				// close drop-down list and select item under mouse
				if (v > 99) {
					me._doDrop(0, e, v);
				}
				me._mouseDown = 0;
				me._fixCss();
			}
			if (v > 0) {
				return;
			}
			foc = me._focTime;
			// 4-mouseup
			if (eType === 4) {
				// if focus was set by mouse click, then validate selectionOnFocus,
				// because mouseup in Firefox may set caret and distroy selection
				if (foc && foc + 500 > time) {
					me._select();
				}
				// clear for double click
				me._focTime = 0;
			}
			// 0..2 key events
			if (eType < 3) {
				me._doKey0(e, eType);
			}
			if (!me._field) {
				return;
			}
			val = me._val();
			// 2-keyup
			if (eType === 2) {
				me._last = val;
				// Firefox has list of last strings (like paste) and new value may come from nowhere on mousedown or enter
				if (me._key === 13 && $.browser.mozilla && me._text !== val) {
					me.text(val);
					// 12-textChanged
					me._fire(12, e);
					me._update();
				}
			}
			// get around text-scroll-bugs in Firefox/Safari/Chrome/IE9+TEXTAREA
			if (eType === 1 && me._keyMod) {
				delete me._keyMod;
				me._doScrl(field, val);
			}
			// 8-focus, 9-blur
			if (eType >= 8) {
				if (me._bad > 2) {
					me._bad = 2;
				}
				me._spinField = -1;
				foc = (eType === 8);
				if (foc === (me._fcs > 0)) {
					return;
				}
				if (!foc && time - me._ddmd < 500) {
					return me.setFocus(-1);
				}
				me._noPaste = 0;
				// get around IE-content-menu "delete" action when no text is selected
				if (!foc && me._lastText !== val) {
					me.paste(val, 1);
				}
				if (!foc && me._type < 2 && !val && !o.nullable) {
					val = me._old || (o.listItems ? o.listItems[0] : '');
					if (val) {
						me._set_val(val);
						val = me._text = me._focusTxt(false);
					} else {
						val = '';
					}
				}
				me._fcs = foc ? (o.readOnly ? 1 : 2) : 0;
				if (me._vAct(foc)) {
					return;
				}
				me._hadFocus = !foc;
				// reference to igValidator
				v = me._validator;
				if (foc) {
					me._k0 = 0;
					if (me._bad > 1) {
						me._bad = 0;
					}
					if (!o.readOnly) {
						if (me._nullT) {
							val = me._last = me._text = field.value = '';
						}
						me._nullT = null;
						// check if error/validator label is displayed (set by _doError)
						v = (v && v._lbl) ? v._lbl._old : null;
						if (v && v.t + 200 > _now()) {
							field.value = me._text = v.txt;
							me._lastText = v.lastTxt;
							me._last = v.last;
							me.select(v.sel0, v.sel1);
						} else {
							if (val !== me._text) {
								me.getSelectedText();
								me.paste(val);
							}
							me._lastText = me._last = me._text = me._focusTxt(foc, e);
						}
					}
					me._focTime = time;
					// show drop-down on focus
					me._dropTrigger(e, -1);
				} else {
					// handle situation when error message was displayed, but editor lost focus
					// and value was fixed internally (range, invalid text or required)
					if (v) {
						// notify validator about blur
						me._doError(2, e);
						// set timeout in case validator failed and set focus back to editor
						setTimeout(function () {
							// if value became valid, then hide error
							if (!me._fcs && !me._doInvalid(e, 9)) {
								me._doError();
							}
						}, 100);
					}
					// close drop-down on blur
					me._doDrop(0, e);
					val = me._matchList(val, -1);
					me._canRedo = null;
					if (!o.readOnly) {
						// temporary enable focus state, because set text(..) may fail. Remove, me._fix=1 to disable me._old-change (ValueChange+fast-Tab).
						if (me._last !== val || me._bad !== 0) {
							v = me._fix;
							me._fix = 0;
							me._fcs = 2;
							me.text(val);
							me._fcs = 0;
							me._fix = v;
						}
						// it will raise valueChange events
						me._update();
					}
				}
				me._repaint();
				me._fixCss();
				// 13:selectionOnFocus: -1:select all, 0:caret to start, 1:caret to end, 2:browser default
				if (foc && this._prop(13) < 2) {
					me.select(this._prop(13) * 10000);
					// if focus is set by Tab, then in Firefox select() may fail
					// and default whole text will be selected: select with delay
					me._select();
				}
				me._hadFocus = false;
				// _focSpin is a flag set by the _spin, when no-focus-spin is not allowed
				// so, when focus is received, then send "continue" spin logic back to its sender _spin function
				if (foc && me._focSpin) {
					me._spin(me._focSpin);
				}
				me._focSpin = null;
				me._fire(eType, e, -1);
				me._lastText = me._val();
				return;
			}
			if (!(eType > 3 && me._k0 === 0) && !me._nullT && val !== me._text) {
				me._text = val;
				// 12-textChanged
				me._fire(12, e);
			}
		},
		_fire: function (id, e, arg, a2) {
			if (!this._field) {
				return;
			}
			// 13-invalidValue, 17-hide drop-down, 18/19-listSelecting/listSelected
			var evt, ee = this.events, args = (id === 13 || id > 16) ? arg : {};
			for (evt in ee) {
				if (ee.hasOwnProperty(evt) && ee[evt] === id) {
					break;
				}
			}
			// 14-spin
			if (id === 14) {
				args.delta = arg;
				args.value = this._instant(1, null, 1);
			}
			// 12-textChanged
			if (id === 12) {
				if ((args.oldText = this._lastText) === (arg = this._val())) {
					return;
				}
				// notify validator about textChange event
				this._doError(1, e);
				this._doClear(arg);
				args.text = this._lastText = this._text = arg;
				// change/spin while no focus
				if (this._fcs < 2 && this._evt0Spin1 !== 1) {
					this._update();
				}
				// update calendar
				this._doDP(2);
				// numeric editor (negative/positive value)
				if (this._type > 3) {
					this._fixCss();
				}
			}
			// key events
			if (id < 3) {
				args.key = this._key;
			// mouse events
			} else if (id < 8) {
				args.elementType = (arg === -1) ? 'field' : ((arg === 1 || arg === 5) ? 'button' : ((arg === 2 || arg === 6) ? 'spinUpper' : ((arg === 3 || arg === 7) ? 'spinLower' : ((arg === 99) ? 'dropDown' : ((arg > 99) ? 'item' + (arg - 100) : '')))));
				args.id = arg;
			}
			// 10-valueChanging, 11-valueChanged
			if (id === 10 || id === 11) {
				args.value = arg;
				args.oldValue = a2;
			}
			// 11-valueChanged
			if (id === 11 && this._fcs === 2) {
				this._update();
			}
			args.owner = this;
			if (!this._trigger(evt, e || this._evt, args)) {
				return true;
			}
			// key events
			if (id < 3) {
				this._key = args.key;
			}
			// 10-valueChanging
			if (id === 10) {
				this._val10 = args.value;
			}
		},
		// only when selectionStart/End is used: Firefox/Safari/Opera/IE9+TEXTAREA
		_select: function (x) {
			// 13:selectionOnFocus: -1:select all, 0:caret to start, 1:caret to end, 2:browser default
			var sel1, me = this, field = this._field[0], sel0 = this._prop(13);
			if (this._tr !== 1 || sel0 > 1) {
				return;
			}
			// flag to set timer
			if (!x) {
				setTimeout(function () {
					try {
						me._select(1);
					} catch (e) { }
				}, 0);
				return;
			}
			sel1 = field.value.length;
			// -1: select all, 0:caret to start, 1:caret to end
			if (sel0 === 0) {
				sel1 = 0;
			} else if (sel0 < 0) {
				sel0 = 0;
			} else {
				sel0 = sel1;
			}
			if (sel0 !== field.selectionStart || sel1 !== field.selectionEnd) {
				this.select(sel0, sel1);
			}
		},
		select: function (sel0, sel1, val) {
			/* Selects text in editor. If parameters are equal, then than method sets location of caret. That method has effect only when editor has focus.
				paramType="number" optional="true" Left edge of selection. If parameter is missing, then all text is selected.
				paramType="number" optional="true" Right edge of selection. If parameter is missing, then value of first parameter is used.
				paramType="string" optional="true" Internal use only (new text)
				returnType="object" Returns reference to this igEditor.
			*/
			var j, i, fix0 = 0, fix1 = 0, tr = this._tr, field = (this._fcs === 2) ? this._field[0] : null;
			if (!field || field.offsetWidth < 2 || this._box) {
				return this;
			}
			if (_aNull(val)) {
				val = field.value;
			} else {
				sel1 = sel0;
				if (field && field.value !== val) {
					this._keyMod = field.value = val;
				}
			}
			i = val.length;
			if (_aNull(sel1, 1)) {
				sel1 = sel0;
				if (_aNull(sel0, 1) || sel0 < 0) {
					sel0 = 0;
					sel1 = i;
				}
			}
			if (sel1 >= i) {
				sel1 = i;
			} else if (sel1 < sel0) {
				sel1 = sel0;
			}
			if (sel0 > sel1) {
				sel0 = sel1;
			}
			this._sel0 = sel0;
			this._sel1 = sel1;
			// IE8+TAB_key have problems with selection object
			try {
				// Firefox/Safari/Opera/IE9+TEXTAREA
				if (tr === 1) {
					field.selectionStart = sel0;
					field.selectionEnd = sel1;
					return this;
				}
				// unknown selection model or error
				if (!tr) {
					if (sel0 !== sel1) {
						field.select();
					}
					return this;
				}
				// all below is IE
				if (this._ta) {
					// get around IE-TEXTAREA mess with '\r\n'
					j = sel1;
					while (j-- > 0) {
						if (val.charCodeAt(j) === 10) {
							if (j < sel0) {
								fix0++;
							}
							fix1++;
						}
					}
					sel0 -= fix0;
					sel1 -= fix1;
				}
				sel1 -= sel0;
				if (this._ta) {
					tr.moveToElementText(field);
				} else {
					tr.move('textedit', -1);
				}
				tr.move('character', sel0);
				if (sel1 > 0) {
					tr.moveEnd('character', sel1);
				}
				// IE8 may raise exception on next line
				tr.select();
			} catch (ex) { }
			return this;
		},
		getSelectedText: function () {
			/* Gets selected text in editor.
				returnType="string" Returns selected text.
			*/
			var i, range, val, txt = '', field = this._field[0], tr = this._tr, sel0 = (this._sel0 = this._sel1 = 0);
			// unknown selection model or error
			if (_aNull(tr)) {
				return txt;
			}
			// Firefox/Safari/Opera/IE9+TEXTAREA
			if (tr === 1) {
				if ((this._sel0 = field.selectionStart) < (this._sel1 = field.selectionEnd)) {
					txt = field.value.substring(this._sel0, this._sel1);
				}
				return txt;
			}
			// all below is IE
			try {
				// IE8 may raise exception on next line
				range = document.selection.createRange();
				val = field.value;
				i = val.length;
				tr = range.duplicate();
				if (this._ta) {
					tr.moveToElementText(field);
				} else {
					tr.move('textedit', -1);
				}
				try {
					while (tr.compareEndPoints('StartToStart', range) < 0) {
						tr.moveStart('character', 1);
						sel0++;
						// get around IE-TEXTAREA mess with '\r\n'
						if (this._ta && val.charCodeAt(sel0) === 10) {
							sel0++;
						}
						if (sel0 > i) {
							break;
						}
					}
				} catch (e1) { }
				txt = range.text;
			} catch (e2) { }
			this._sel0 = sel0;
			this._sel1 = sel0 + txt.length;
			return txt;
		},
		getSelection: function (start) {
			/* Gets left or right edge of selection. That method can be used only when editor has focus.
				paramType="bool" optional="true" If true then left edge of selection is returned. Otherwise, right edge selection is returned.
				returnType="number" Position of left or right edge of selection.
			*/
			this.getSelectedText();
			return start ? this._sel0 : this._sel1;
		},
		setFocus: function (delay) {
			/* Set focus to editor with delay.
				paramType="number" optional="true" Delay in milliseconds. If parameter is missing, then 0 is used. If parameter is -1, then focus is set without delay.
				returnType="object" Returns reference to this igEditor.
			*/
			var me = this;
			// can be called from setTimeout
			if (me._field) {
				if (delay === -1) {
					try {
						me._field[0].focus();
					} catch (ex) { }
				} else {
					setTimeout(function () {
						if (me._fcs < 1) {
							me.setFocus(-1);
						}
					}, delay || 0);
				}
			}
			return this;
		},
		hasFocus: function () {
			/* Checks if editor has focus.
				returnType="bool" Returns true if editor has focus.
			*/
			return this._fcs > 0;
		},
		// filter japanese/arabic digits
		// str (numeric editors): return string which represents English digit or separator
		_jpn: function (k, str) {
			if (str) {
				if (k === 12290 || k === 65294) {
					return '.';
				}
				if (k === 12289) {
					return ',';
				}
			} else if (!this._sTxt) {
				return k;
			}
			if (k > 65295 && k < 65306) {
				k -= 65248;
			} else if (k > 1631 && k < 1642) {
				k -= 1584;
			} else if (k > 1775 && k < 1786) {
				k -= 1728;
			} else {
				return str ? null : k;
			}
			return str ? String.fromCharCode(k) : k;
		},
		_dtt: function () {
			var v, f, input, dt = this._oldAttr.title, o = this.options, name = o.inputName;
			if (name) {
				f = o._vsFormat;
				if (_aNull(v = this._getVal(1), this._type > 3)) {
					v = '';
				} else if (this._date) {
					v = this._df(v, 0) + '-' + (this._df(v, 1) + 1) + '-' + this._df(v, 2) + ' ' + this._df(v, 3) + ':' + this._df(v, 4) + ':' + this._df(v, 5) + '.' + this._df(v, 6);
				} else if (f && this._type > 3) {
					v = v.toString().replace('.', f);
				}
				input = $('input[name="' + name + '"]');
				if (input[0] !== this.element[0]) {
					if (input.length === 0) {
						input = $('<input type="hidden" name="' + name + '" />').appendTo(this._element.parent());
					}
					input.val(v);
				}
			}
			if (!dt || dt.indexOf('{0}') < 0) {
				return;
			}
			if ((v = this._val()) === '') {
				v = this.options.nullText;
			}
			this._element[0].title = this._field[0].title = this._field[0].alt = dt.replace('{0}', v);
		},
		_stopTimer: function (evt) {
			if (this._timer) {
				clearInterval(this._timer);
			}
			delete this._timer;
			if (!evt && this._timer1) {
				clearInterval(this._timer1);
				delete this._timer1;
			}
		},
		// mask
		_maskFlag: function (ch, upLow) {
			switch (ch) {
			case '>':
				return -1;
			case '<':
				return -2;
			case '&':
				ch = 1;
				break;
			case 'C':
				ch = 2;
				break;
			case 'A':
				ch = 7;
				break;
			case 'a':
				ch = 8;
				break;
			case 'L':
				ch = 13;
				break;
			case '?':
				ch = 14;
				break;
			case '0':
				return 19;
			case '9':
				return 20;
			case '#':
				return 21;
			default:
				return 0;
			}
			return ch + upLow * 2;
		},
		_maskFilter: function (flag, str, i, sf) {
			var ch, f;
			if (i >= str.length) {
				return sf;
			}
			ch = str.charCodeAt(i);
			f = Math.floor((flag - 1) / 6);
			str = str.charAt(i);
			if (ch < 22) {
				return sf;
			}
			if ((f === 1 || f === 3) && ch > 100) {
				if ((ch = this._jpn(ch)) < 100) {
					str = String.fromCharCode(ch);
				}
			}
			if (f === 3) {
				// flag==21==# optional and allows digits and +/-, it should be replaced by Space
				return ((flag === 21 && (str === '-' || str === '+')) || (ch > 47 && ch < 58)) ? str : sf;
			}
			if (f === 1 || f === 2) {
				if (f === 1 && ch > 47 && ch < 58) {
					return str;
				}
				if (ch < 256 && str.toUpperCase() === str.toLowerCase()) {
					return sf;
				}
			}
			if ((flag = Math.floor((flag - 1) / 2) % 3) === 0) {
				return str;
			}
			return (flag === 2) ? str.toLowerCase() : str.toUpperCase();
		},
		_getTxt: function (vt, prompt, txt0, getVal) {
			var i, len, flag, iLast = this._selKey, mask = this._mask, txt = '', non = !_aNull(txt0), o = this.options;
			if (!non) {
				txt0 = (this._bad !== 0 && this._fcs > 1) ? this._val() : this._txt;
			}
			if (non) {
				non = this._type === 1;
			}
			if (_aNull(txt0) || _aNull(mask)) {
				return txt;
			}
			len = mask.length;
			// iLast: last character to display (caret/endSelection)
			iLast = (this._fcs > 1 && !getVal && o.hideMaskOnFocus) ? ((iLast && iLast < len) ? iLast - 1 : -1) : len;
			for (i = 0; i < len; i++) {
				if ((flag = mask.charCodeAt(i)) < 22) {
					if (i < txt0.length && txt0.charCodeAt(i) >= 22) {
						txt += txt0.charAt(i);
						if (i > iLast) {
							iLast = i;
						}
						non = false;
					} else if (vt % 3 === 2 || (vt % 3 === 1 && flag % 2 === 1)) {
						// flag==21==# optional and allows digits and +/-, it should be replaced by Space
						txt += (flag === 21 && prompt === '') ? o.padChar : prompt;
					}
				} else if (vt >= 3) {
					txt += mask.charAt(i);
					// move to next available position
					if (i === iLast + 1) {
						if (this._selKey === i) {
							this._selKey++;
						}
						iLast++;
					}
				}
			}
			if (iLast++ < len) {
				txt = txt.substring(0, iLast);
			}
			return non ? '' : txt;
		},
		// used only by mask editor
		_setTxt: function (v, vt, render) {
			var ch, flag, j = 0, i = -1, mask = this._mask, txt = this._mask;
			if (!_aNull(v)) {
				while (++i < mask.length) {
					if (vt === 1000 + j) {
						vt = this._dataMode;
					}
					if (j >= v.length) {
						break;
					}
					if ((flag = mask.charCodeAt(i)) < 22) {
						if (!_aNull(ch = this._maskFilter(mask.charCodeAt(i), v, j))) {
							txt = txt.substring(0, i) + ch + txt.substring(i + 1);
						}
						j++;
					} else if (vt >= 3) {
						j++;
					}
				}
			}
			if (render) {
				return txt;
			}
			this._txt = txt;
			this._text = this._focusTxt(this._fcs > 1, ' ');
			this._repaint();
		},
		// convert inputMask (normal chars) to internal flags
		_setMask: function (str) {
			var x, ch, i, i0 = 0, upLow = 0, mask = '', txt = '', t0 = this._getTxt(0);
			for (i = 0; i < str.length; i++) {
				if ((x = this._maskFlag(ch = str.charAt(i), upLow)) !== 0) {
					if (x < 0) {
						upLow = (upLow === -x) ? 0 : -x;
						continue;
					}
					mask += (ch = String.fromCharCode(x));
					ch = this._maskFilter(x, t0, i0++, ch);
				} else if (ch === '\\' && i + 1 < str.length && this._maskFlag(str.charAt(i + 1), 0) !== 0) {
					mask += (ch = str.charAt(++i));
				} else {
					mask += ch;
				}
				txt += ch;
			}
			this._txt = txt;
			this._mask = mask;
		},
		// build mask for date editor
		_getMask: function (fields, v, foc) {
			var x, i, i0 = 0, flag = -1, txt = '';
			if (!v) {
				v = '';
			}
			if (foc) {
				v = v.replace('dddd', 'ddd').replace('ddd,', '').replace('ddd ', '').replace(' ddd', '').replace('ddd', '');
			}
			// temporary replace \\f,d,s,m,etc. by \x01-\x09
			v = v.replace(/\x08/g, ' ').replace(/\x09/g, ' ');
			v = v.replace(/\\f/g, '\x01').replace(/\\d/g, '\x02').replace(/\\s/g, '\x03').replace(/\\m/g, '\x04').replace(/\\t/g, '\x05').replace(/\\H/g, '\x06').replace(/\\h/g, '\x07').replace(/\\M/g, '\x08').replace(/\\y/g, '\x09');
			// 01-y,02-yy,03-yyyy,04-M,05-MM,06-MMM,07-MMMM,08-d,09-dd
			// 10-h,11-hh,12-H,13-HH,14-t,15-tt,16-m,17-mm,18-s,19-ss
			// 20-ddd,21-dddd,22-f,23-ff,24-fff
			v = v.replace('fff', '24').replace('ff', '23').replace('f', '22');
			v = v.replace('dddd', foc ? '' : '21').replace('ddd', foc ? '' : '20').replace('dd', '09').replace('d', '08').replace('ss', '19').replace('s', '18').replace('mm', '17').replace('m', '16');
			v = v.replace('tt', '15').replace('t', '14').replace('HH', '13').replace('H', '12').replace('hh', '11').replace('h', '10');
			v = v.replace('MMMM', foc ? 'MM' : '07').replace('MMM', foc ? 'MM' : '06').replace('MM', '05').replace('M', '04').replace('yyyy', '03').replace('yy', '02').replace('y', '01');
			// restore original \\f,d,s,m,etc.
			v = v.replace(/\x01/g, 'g').replace(/\x02/g, 'd').replace(/\x03/g, 's').replace(/\x04/g, 'm').replace(/\x05/g, 't').replace(/\x06/g, 'H').replace(/\x07/g, 'h').replace(/\x08/g, 'M').replace(/\x09/g, 'y');
			for (i = 0; i < v.length; i++) {
				x = v.charCodeAt(i);
				if (x < 48 || x > 57) {
					if (!foc && (flag = v.charAt(i)) === '\\' && i + 1 < v.length) {
						if ((x = v.charAt(++i)) === '\\') {
							continue;
						}
						if (x === '0' || x === '9') {
							txt += flag;
						}
						txt += x;
					} else {
						txt += v.charAt(i);
					}
					continue;
				}
				flag = (x - 48) * 10 + v.charCodeAt(++i) - 48;
				if (!foc) {
					fields[i0++] = flag;
					txt += '\x01';
					continue;
				}
				fields[i0++] = flag;
				if (flag === 14) {
					txt += 'L';
				} else if (flag === 15) {
					txt += 'LL';
				} else if (flag === 22) {
					txt += '0';
				} else {
					txt += '00';
					if (flag === 3) {
						txt += '00';
					}
					while (flag-- > 23) {
						txt += '0';
					}
				}
			}
			return txt;
		},
		getValueByMode: function (mode, v, getVal) {
			/* Get value in editor by dataMode.
				paramType="string" The value of dataMode option supported by editor. It can be string or number. For example, in case of numeric editors that can be a number in range from -1 to 11, or string such as "text", "double", "byte", etc.
				paramType="object" optional="true" Internal use only.
				paramType="object" optional="true" Internal use only.
				returnType="string|number|date|object" Returns value in editor or null.
			*/
			var d, type = this._type, empty = this.options.emptyChar;
			mode = this._mode(mode, type);
			// text editor
			if (type === 0 || !this._field) {
				return this._val();
			}
			// numeric editors
			if (type > 3) {
				d = this._dataMode;
				this._dataMode = mode;
				v = this.value();
				this._dataMode = d;
				return v;
			}
			// mask editor
			if (type === 1) {
				return this._getTxt(mode, v ? '' : empty, null, getVal);
			}
			// date editors
			// v-limit
			d = (this._fcs < 2) ? (this._isNull ? null : this._date) : this._toDate(this._val(), true, v);
			return (mode === 0) ? d : (d ? this._toTxt(d, mode === 1, empty) : '');
		},
		// date
		// f:flag of field, d:Date, e:focus, ch:fill-up character
		_fieldVal: function (f, d, e, ch) {
			// 1-y,2-yy,3-yyyy,4-M,5-MM,6-MMM,7-MMMM,8-d,9-dd
			// 10-h,11-hh,12-H,13-HH,14-t,15-tt,16-m,17-mm,18-s,19-ss
			// 20-ddd,21-dddd,22-f,23-ff,24-fff
			var v, j, i = (f % 2) * 2, o = this.options;
			if (f < 4) {
				v = this._df(d, 0) + o.yearShift;
				if (f === 3) {
					i = 4;
				} else {
					v %= 100;
					i = (f === 2) ? 2 : 0;
				}
			} else if (f < 8) {
				this.d_s = 2;
				v = this._df(d, 1) + 1;
				if (f > 5) {
					// 6-MMM,7-MMMM
					f = this._optVal((f === 6) ? 'monthNamesShort' : 'monthNames')[v - 1];
					if (f.length > 0) {
						return f;
					}
				}
			} else if (f < 10) {
				v = this._df(d, 2);
			} else if (f < 16) {
				v = this._df(d, 3);
				//ampm
				if (f > 13) {
					v = this._optVal((v < 12) ? 'am' : 'pm');
					if ((f -= 13) === (i = v.length)) {
						return v;
					}
					if (i < f) {
						v += ' ';
					}
					return v.substring(0, f);
				}
				if (f < 12) {
					v %= 12;
					if (v === 0) {
						v = 12;
					}
				}
			} else if (f < 18) {
				v = this._df(d, 4);
			} else if (f < 20) {
				v = this._df(d, 5);
			} else if (f > 21) {
				v = this._df(d, 6);
				j = i = f - 21;
				while (j-- > 3) {
					v *= 10;
				}
				while (j++ < 2) {
					v = Math.floor(v / 10);
				}
			// 20-ddd,21-dddd
			} else {
				return this._optVal((f === 20) ? 'dayNamesShort' : 'dayNames')[d.getDay()];
			}
			v = _str(v);
			if (f < 20 || f > 22) {
				f = v.length;
				if (e) {
					if (i === 0) {
						i = 2;
					} else {
						e = false;
					}
				}
				if (i > 0) {
					if (i < f) {
						v = v.substring(0, i);
					} else {
						while (f++ < i) {
							v = (e ? ch : '0') + v;
						}
					}
				}
			}
			return v;
		},
		_limits: function (val, roll) {
			// 10-minValue, 11-maxValue
			var time, min = this._prop(10), max = this._prop(11);
			// numeric editors
			if (this._type > 3) {
				if (_aNull(val, 1) && !this.options.nullable) {
					val = this.options.nullValue;
					// -1:text, 0:editModeText, 1:double, 2:float, 3:decimal, etc.
					if (!val && this._dataMode > 2) {
						val = 0;
					}
				}
				if (!_aNull(val, 1)) {
					if (!_aNull(min, 1) && val <= min) {
						return roll ? max : min;
					}
					if (!_aNull(max, 1) && val >= max) {
						return roll ? min : max;
					}
				}
				return val;
			}
			// date editors
			if (_aNull(val)) {
				return val;
			}
			time = val.getTime();
			if (!_aNull(min)) {
				min = min.getTime();
			}
			if (!_aNull(max)) {
				max = max.getTime();
			}
			if (!_aNull(min) && (time < min || (roll && time === min))) {
				val.setTime(roll ? max : min);
				return val;
			}
			if (!_aNull(max) && (time > max || (roll && time === max))) {
				val.setTime(roll ? min : max);
				return val;
			}
			return null;
		},
		_date7: function (val) {
			var i;
			if (val.length < 13) {
				return null;
			}
			// build "y-M-d-h-m-s-ms-t" format and split it into array[7]
			val = val.replace(/[\. :]/g, '-').split('-');
			if ((i = val.length) !== 7) {
				return null;
			}
			while (i-- > 0) {
				if ((val[i] = _int(val[i], -1)) < 0) {
					return null;
				}
			}
			return this._df(val[0], val[1] - 1, val[2], val[3], val[4], val[5], val[6]);
		},
		// convert txt to Date
		// foc: focus state
		// limit: validate min/max limits
		// fire: request to fire invalid event (set this._inv)
		_toDate: function (txt, foc, limit, fire) {
			// n: count of ymd fields
			// mis: 0-all fields, 1..8-missing fields, 9..17-less than min number of fields
			var v, i0, c, iLen, invMes, mis = 0, n = 0, i = -1, j = -1,
				y = -1, mo = -1, day = -1, h = -2, m = -2, s = -2, ms = -2, pm = -1,
				any = false, inv = null, arg = {}, o = this.options,
				d = fire ? null : this._date7(txt),
				fields = (foc && fire) ? this._fields0(txt) : this._fields1(txt, foc);
			iLen = fields.length;
			if (!d) {
				while (++i < iLen) {
					j++;
					v = fields[i];
					i0 = foc ? this._field0IDs[i] : this._field1IDs[i];
					if (i0 < 4) {
						if (v > 100 && v > o.yearShift) {
							v -= o.yearShift;
						}
						if ((arg.year = y = v) < 0) {
							mis++;
						} else {
							n++;
							c = o.centuryThreshold;
							if (v < 100) {
								if (i0 < 3 && c < 0) {
									c = 29;
								}
								if (c >= 0) {
									y += (v > c) ? 1900 : 2000;
								}
							}
						}
					} else if (i0 < 8) {
						if (v < 1 || v > 12) {
							mis++;
						} else {
							arg.month = mo = v;
							n++;
						}
					} else if (i0 < 10) {
						arg.day = day = v;
						if (v < 1 || v > 31) {
							mis++;
						} else {
							n++;
						}
					} else if (i0 < 14) {
						if (v === 24) {
							v = 0;
						}
						if (i0 > 11) {
							pm = -4;
						} else {
							if (v === 12) {
								v = 0;
							}
							if (v > 12) {
								mis++;
							}
						}
						arg.hours = h = v;
						if (v > 23 || v < 0) {
							mis++;
						}
					} else if (i0 < 16) {
						j--;
						if (v > 0) {
							pm++;
						}
						continue;
					} else if (i0 < 18) {
						arg.minutes = m = v;
						if (v > 59 || v < 0) {
							mis++;
						}
					} else if (i0 < 20) {
						arg.seconds = s = v;
						if (v > 59 || v < 0) {
							mis++;
						}
					} else if (i0 < 22) {
						j--;
						continue;
					} else {
						while (i0++ < 24) {
							v *= 10;
						}
						while (i0-- > 25) {
							v = Math.floor(v / 10);
						}
						arg.milliseconds = ms = v;
						if (v > 999 || v < 0) {
							mis++;
						}
					}
					if (v >= 0) {
						any = true;
					}
					if (j < o.minNumberOfDateFields && mis > 0) {
						if (fire && any) {
							invMes = this._optVal('dateFields', 2);
							inv = 'numberOfFields';
						}
						// not enough fields
						mis += 9;
					}
				}
			}
			if (pm === 0 && h >= 0 && h < 12) {
				arg.hours = (h += 12);
			}
			if (!d && (!o.nullable || mis < 9)) {
				// ymd are defined
				if (n === 3) {
					d = this._df(y, mo - 1, day, 0, 0, 0, 0);
					if (y < 100) {
						this._df(d, 0, y);
					}
				} else {
					d = this._df();
					if (this._date) {
						d.setTime(this._date.getTime());
					}
					if (day > 0) {
						this._df(d, 2, 10);
					}
					if (y >= 0) {
						this._df(d, 0, y);
					}
					if (mo > 0) {
						this._df(d, 1, mo - 1);
					}
					if (day > 0) {
						this._df(d, 2, day);
					}
				}
			}
			if (fire && day > 0 && d && day !== this._df(d, 2)) {
				invMes = this._optVal('invalidDay', 2);
				inv = 'dayOfMonth';
			}
			day = o.useLastGoodDate ? this._goodD : null;
			if (fire && !d && !o.nullable) {
				d = day;
				if (!d || !d.getTime) {
					d = this._df();
				} else {
					invMes = this._optVal('required', 2);
					inv = 'null';
				}
			}
			if (d) {
				if (h > -2) {
					this._df(d, 3, (h < 0) ? 0 : h);
				}
				if (m > -2) {
					this._df(d, 4, (m < 0) ? 0 : m);
				}
				if (s > -2) {
					this._df(d, 5, (s < 0) ? 0 : s);
				}
				if (ms > -2) {
					this._df(d, 6, (ms < 0) ? 0 : ms);
				}
				if (limit) {
					if (_aNull(d = this._limits(i = d))) {
						d = i;
					} else if (fire) {
						if (!o.minValue) {
							invMes = this._optVal('max', 2).replace('{0}', this._toTxt(o.maxValue));
						} else if (!o.maxValue) {
							invMes = this._optVal('min', 2).replace('{0}', this._toTxt(o.minValue));
						} else {
							invMes = this._optVal('range', 2).replace('{0}', this._toTxt(o.minValue)).replace('{1}', this._toTxt(o.maxValue));
						}
						inv = 'limit';
					}
				}
			}
			if (fire) {
				if (any && !d && txt.length > 0 && day) {
					if (!inv) {
						invMes = this._optVal('date', 2);
						inv = 'invalid';
					}
					d = day;
				}
				if (!any && o.required) {
					invMes = this._optVal('required', 2);
					inv = 'null';
				}
				arg.value = d;
				if (inv && (txt || !o.nullable)) {
					if (o.reduceDayOfInvalidDate !== false && d && any && this._df(d, 2) < 5 && arg.day > 27) {
						this._df(d, 2, 0);
						arg.value = d;
					}
					arg.text = txt;
					arg.reason = inv;
					arg.message = invMes;
					// set value for argument of invalid event
					this._inv = arg;
				}
			}
			return d;
		},
		_toTxt: function (d, foc, prompt, txt0) {
			var ch, k, i = -1, f0 = 0, txt = '',
				mask = foc ? this._mask : this._mask1,
				ids = foc ? this._field0IDs : this._field1IDs;
			if (_aNull(d)) {
				return foc ? this._getTxt(5, prompt, txt0 ? (this._txt = mask) : mask) : '';
			}
			this.d_s = 6; // seconds
			while (++i < mask.length) {
				ch = mask.charAt(i);
				if ((k = mask.charCodeAt(i)) < 22) {
					txt += this._fieldVal(ids[f0++], d, foc, ch);
					if (foc) {
						while (i + 1 < mask.length) {
							if (mask.charCodeAt(i + 1) === k) {
								i++;
							} else {
								break;
							}
						}
					}
				} else {
					txt += ch;
				}
			}
			if (!foc) {
				return txt;
			}
			if (txt0) {
				this._txt = txt;
			}
			return this._getTxt(5, prompt, txt);
		},
		_isPM: function (t, i) {
			var pm = this._optVal('pm').toUpperCase();
			return pm.charAt(0) === t.charAt(i) && (pm.length < 2 || t.length <= i + 1 || pm.charAt(1) === t.charAt(i + 1));
		},
		_fields1: function (txt, foc) {
			var m, k, j, iLen, i = -1, v = -1, field = 0,
				fields = [], ids = foc ? this._field0IDs : this._field1IDs;
			iLen = ids.length;
			while (++i < iLen) {
				fields[i] = -1;
			}
			if (_aNull(txt)) {
				return fields;
			}
			txt = txt.toUpperCase();
			i = -1;
			while (++i < txt.length && field < iLen) {
				k = this._jpn(txt.charCodeAt(i)) - 48;
				j = ids[field];
				if (j === 20 || j === 21) {
					j = ids[++field]; //dow
				}
				//ampm
				if (j === 14 || j === 15) {
					if (k >= 0 && k <= 9) {
						v = -1;
						field++;
						i--;
						continue;
					}
					if (this._isPM(txt, i)) {
						fields[field++] = 1;
						v = -1;
					}
				} else {
					if (k >= 0 && k <= 9) {
						if (v < 0) {
							v = k;
						} else {
							v = v * 10 + k;
						}
					} else {
						if (v >= 0) {
							fields[field++] = v;
							v = -1;
						// 6-MMM,7-MMMM
						} else if (j === 6 || j === 7) {
							//MMM
							while (v-- > -3) {
								for (k = 0; k < 12; k++) {
									m = this._optVal((j === 6) ? 'monthNamesShort' : 'monthNames')[k];
									m = m.toUpperCase();
									if ((j = m.length) < 1) {
										continue;
									}
									if (v === -3) {
										if (j < 4) {
											continue;
										}
										m = m.substring(0, 3);
									}
									if ((j = txt.indexOf(m) - 1) > -2) {
										if (j < 0 || txt.charAt(j).toLowerCase() === txt.charAt(j)) {
											break;
										}
									}
								}
								if (k < 12) {
									fields[field++] = k + 1;
									break;
								}
							}
						}
					}
				}
			}
			if (field < iLen) {
				fields[field] = v;
			}
			return fields;
		},
		_fields0: function (txt) {
			var x, k, j = -1, i = -1, v = -1, field = -1, n = 22, mask = this._mask, fields = [];
			if (!txt) {
				txt = '';
			}
			while (++i < mask.length) {
				j++;
				if ((x = mask.charCodeAt(i)) > 21 && n > 21) {
					continue;
				}
				if (x > 21) {
					if (field >= 0) {
						fields[field] = v;
					}
				} else {
					if (n > 21) {
						v = -1;
						field++;
					}
					if (j < txt.length) {
						if (x > 18) {
							k = this._jpn(txt.charCodeAt(j)) - 48;
							if (k >= 0 && k <= 9) {
								if (v < 0) {
									v = k;
								} else {
									v = v * 10 + k;
								}
							} else if (i + 1 < mask.length && txt.charAt(j) === mask.charAt(i + 1)) {
								j--;
							}
						} else if (n !== x && this._isPM(txt.toUpperCase(), j)) {
							v = 1;
						}
					}
				}
				n = x;
			}
			fields[field] = v;
			return fields;
		},
		_curField: function (s, mask) {
			var i, x, n = 22, field = this._n0 = this._n1 = -1;
			for (i = 0; i < mask.length; i++) {
				if (((x = mask.charCodeAt(i)) > 21) === (n > 21)) {
					continue;
				}
				if (x > 21) {
					if (i >= s) {
						break;
					}
				} else {
					this._n0 = i;
					field++;
				}
				n = x;
			}
			if (this._n0 >= 0) {
				this._n1 = i;
			}
			if (_aNull(field = this._field0IDs[field])) {
				return -1;
			}
			if (field < 8) {
				return (field < 4) ? 0 : 1;
			}
			if (field < 20) {
				return Math.floor((field - 4) / 2);
			}
			return (field > 21) ? 8 : -1;
		},
		_maskKey: function (k, ch, txt, i, s, mask) {
			var field, n = 0, v = -1;
			// not date editors
			if (this._type < 2) {
				return -2;
			}
			field = this._curField(s, mask);
			if (s >= this._n1) {
				if (txt.charCodeAt(--s) > 21) {
					return this._maskKey(k, ch, txt, i, s + 2, mask);
				}
			}
			if (field < 0) {
				return -1;
			}
			//ampm
			if (field === 5) {
				if (s <= this._n0) {
					v = this._optVal('am');
					if (v.charAt(0).toUpperCase() !== (ch = ch.toUpperCase())) {
						v = this._optVal('pm');
						if (v.charAt(0).toUpperCase() !== ch) {
							return -1;
						}
					}
					if (this._n1 === this._n0 + 1) {
						v = v.charAt(0);
					} else if ((i = v.length) < 2) {
						v += ' ';
					} else if (i > 2) {
						v = v.substring(0, 2);
					}
					this._txt = txt.substring(0, this._n0) + v + txt.substring(this._n1);
				}
				return this._n1;
			}
			if (k < 48 || k > 57) {
				if (s === 0 || (k !== 47 && k !== 58 && (k < 44 || k > 57))) {
					return -1;
				}
				if (mask.charCodeAt(s - 1) >= 22 || this._n1 === i) {
					return s;
				}
				while (s < i) {
					if (mask.charCodeAt(s++) >= 22) {
						break;
					}
					txt = txt.substring(0, s - 1) + mask.charAt(s - 1) + txt.substring(s);
				}
				this._txt = txt;
				return s;
			}
			k -= 48;
			if (this._n0 === s) {
				v = txt.charCodeAt(s + 1) - 48;
				// 0-y,1-M,2-d,3-h,4-H,5-AMPM,6-m,7-s,8-ms
				if (field === 2) {
					if (k > 3) {
						n = 1;
					} else if (k === 3 && v > 1) {
						n = 2;
					}
				// 6-m,7-s
				} else if (field === 6 || field === 7) {
					if (k > 5) {
						n = 1;
					}
				// 1-M,3-h,4-H
				} else if (field > 0 && field < 5) {
					if (field === 4) {
						k--;
						v -= 2;
					}
					if (k > 1) {
						n = 1;
					} else if (k === 1 && v > 2) {
						n = 2;
					}
				}
			}
			if (this._n0 + 1 === s) {
				v = txt.charCodeAt(s - 1) - 48;
				// 0-y,1-M,2-d,3-h,4-H,5-AMPM,6-m,7-s,8-ms
				if (field === 2) {
					if (v > 3 || (v === 3 && k > 1)) {
						n = 3;
					}
				// 6-m,7-s
				} else if (field === 6 || field === 7) {
					if (v > 6 || (v === 6 && k > 0)) {
						n = 3;
					}
				// 1-M,3-h,4-H
				} else if (field > 0 && field < 5) {
					if (field === 4) {
						v--;
						k -= 2;
					}
					if (v > 1 || (v === 1 && k > 2)) {
						n = 3;
					}
				}
			}
			if (n === 1) {
				txt = txt.substring(0, s) + mask.charAt(s) + txt.substring(s + 1);
				s++;
			}
			if (n === 2) {
				txt = txt.substring(0, s + 1) + mask.charAt(s + 1) + txt.substring(s + 2);
			}
			if (n === 3) {
				while (++s < i) {
					if (mask.charCodeAt(s) < 22) {
						break;
					}
				}
				if (s >= i) {
					return -1;
				}
				return this._maskKey(k + 48, ch, txt, i, s, mask);
			}
			this._txt = txt.substring(0, s) + ch + txt.substring(s + 1);
			return ++s;
		},
		_add: function (v0, v) {
			var dot0, dot1, dot2, s1, s2 = v.toString(), s0 = v0.toString(), v1 = v0 + v;
			s1 = v1.toString();
			if ((dot0 = s0.indexOf('.')) < 1 || (dot1 = s1.indexOf('.')) < 1) {
				return v1;
			}
			if ((dot2 = s2.indexOf('.')) > 0) {
				dot2 = s2.length - dot2;
			}
			if (s1.length - dot1 <= (dot0 = Math.max(dot2, s0.length - dot0))) {
				return v1;
			}
			v = 10;
			while (dot0-- > 2) {
				v *= 10;
			}
			return Math.round(v1 * v) / v;
		},
		// Performs spin action.
		spin: function (delta) {
			/* Increments of decrements value in editor according to the parameter.
				If editor has listItems, then that method increments or decrements selected index in list and sets value in editor to new selected item.
				In this case if delta is positive, then list selected index in incremented by 1 and if delta is negative then selected index is decremented by 1.
				paramType="number" Value to increment or decrement current value in editor.
				returnType="object" Returns reference to this igEditor.
			*/
			var val, x, i, d, o = this.options;
			if (!this._spinList(delta)) {
				return this;
			}
			// text/mask editors: no increment/decrement on spin
			if (this._type < 2) {
				return this;
			}
			// numeric editors
			if (this._type > 3) {
				val = this._toNum(this._val()) || 0;
				val = this._add(val, delta);
				delta = o.maxLength;
				if (!delta || delta < 1 || val.toString().length <= delta) {
					this._set_val(val, this._fcs);
				}
				return this;
			}
			// date editors
			i = this._spinField;
			d = this._df();
			d.setTime(this._date.getTime());
			if (i < 0 || i > 8) {
				if (this._fcs === 2) {
					this.getSelectedText();
					i = this._curField(this._sel0, this._mask);
					if (_aNull(d = this._toDate(this._val(), true, true))) {
						d = this._df();
					}
					this._spinField = i;
				} else {
					this._spinField = i = this.d_s;
				}
			}
			// 0-y,1-M,2-d,3-h,4-H,5-AMPM,6-m,7-s,8-ms
			if (i === 5) {
				delta = (delta > 0) ? 12 : -12;
			}
			x = o.spin1Field;
			switch (i) {
			case 0:
				this._df(d, 0, delta += this._df(d, 0));
				if (x && delta !== this._df(d, 0)) {
					i = -1;
				}
				break;
			case 1:
				this._df(d, 1, delta += this._df(d, 1));
				if (x && delta !== this._df(d, 1)) {
					i = -1;
				}
				break;
			case 2:
				this._df(d, 2, delta += this._df(d, 2));
				if (x && delta !== this._df(d, 2)) {
					i = -1;
				}
				break;
			case 3:
			case 4:
			case 5:
				i = this._df(d, 2);
				this._df(d, 3, delta += this._df(d, 3));
				if (x && i !== this._df(d, 2)) {
					i = -1;
				}
				break;
			case 6:
				this._df(d, 4, delta += this._df(d, 4));
				if (x && delta !== this._df(d, 4)) {
					i = -1;
				}
				break;
			case 7:
				this._df(d, 5, delta += this._df(d, 5));
				if (x && delta !== this._df(d, 5)) {
					i = -1;
				}
				break;
			case 8:
				for (i = this._n1 - this._n0; i < 3; i++) {
					delta *= 10;
				}
				this._df(d, 6, delta += this._df(d, 6));
				if (x && delta !== this._df(d, 6)) {
					i = -1;
				}
				break;
			}
			if (i < 0) {
				return this;
			}
			if (!_aNull(delta = this._limits(d))) {
				d = delta;
			}
			this._text = this._toTxt(d, this._fcs === 2, o.promptChar, true);
			this._date = d;
			this._isNull = false;
			this._repaint();
			this.select(this._sel0);
			if (this._fcs === 2) {
				this._last = this._val();
			}
			return this;
		},
		_mode: function (mode, t) {
			var mods;
			if (!mode || t < 1) {
				mode = _aNull(mode) ? ((t > 3) ? 1 : ((t === 1) ? 5 : 0)) : 0;
			} else if (typeof mode !== 'number') {
				mode = mode.toString().toLowerCase();
				if (t > 3) {
					// numeric: -1:text, 0:editModeText, 1:double, 2:float, 3:decimal, 4:long, 5:ulong, 6:int, 7:uint, 8:short, 9:ushort, 10:sbyte, 11:byte
					mods = { 'text': -1, 'editmodetext': 0, 'double': 1, 'float': 2, 'decimal': 3, 'long': 4, 'ulong': 5, 'int': 6, 'uint': 7, 'short': 8, 'ushort': 9, 'sbyte': 10, 'byte': 11 };
				} else if (t > 1) {
					// date: 0:date, 1:editModeText, 2:text
					mods = { 'date': 0, 'editmodetext': 1, 'text': 2 };
				} else if (t > 0) {
					// mask: 0:rawText, 1:rawTextWithRequiredPrompts, 2:rawTextWithAllPrompts, 3:rawTextWithLiterals, 4:rawTextWithRequiredPromptsAndLiterals, 5:allText
					mods = { 'rawtext': 0, 'rawtextwithrequiredprompts': 1, 'rawtextwithallprompts': 2, 'rawtextwithliterals': 3, 'rawtextwithrequiredpromptsandliterals': 4, 'alltext': 5 };
				}
				if (_aNull(mode = mods[mode])) {
					mode = -2;
				}
			}
			// numeric: 1:double
			return (mode < -1) ? ((t > 3) ? 1 : 0) : mode;
		},
		// fix dataMode, numeric: adjust maxLength, date: adjust masks
		_fixMode: function (init) {
			var len, format, mask, mask1, mode, t = this._type, o = this.options, val = this._value;
			this._dataMode = mode = this._mode(o.dataMode, t);
			this._maxLen = o.maxLength;
			// mask and date editors
			if (t > 0 && t < 4) {
				if (!o.promptChar) {
					o.promptChar = '_';
				}
				if (!o.padChar) {
					o.padChar = ' ';
				}
				if (!o.emptyChar) {
					o.emptyChar = ' ';
				}
				if (t === 1 && init) {
					t = o.inputMask;
					this._setMask(t || 'CCCCCCCCCC');
				}
			}
			// text and mask editor
			if (t < 2) {
				if (init === 3) {
					this._setVal(val);
				}
				return;
			}
			// date editor
			if (t < 4) {
				format = o.dateInputFormat = o.dateInputFormat || 'date';
				if (!o.yearShift) {
					o.yearShift = 0;
				}
				if (_aNull(o.centuryThreshold)) {
					o.centuryThreshold = 29;
				}
				if (_aNull(o.minNumberOfDateFields)) {
					o.minNumberOfDateFields = 3;
				}
				mask = this._optVal(format + 'Pattern') || format;
				format = o.dateDisplayFormat || format;
				mask1 = this._optVal(format + 'Pattern') || format || mask;
				mask = this._getMask(this._field0IDs = [], mask, 1);
				this._mask1 = this._getMask(this._field1IDs = [], mask1);
				if (init === 1) {
					this._date = this._df();
					this._isNull = false;
				}
				// index of spinning field
				this._spinField = -1;
				// days or seconds
				this.d_s = 10;
				this._setMask(mask);
				if (init !== 1 && !this._isNull) {
					this._setVal(this._date, 1);
				}
				return;
			}
			// numeric editors
			// adjust maxLength, numeric mode: 0:text, 1:double, 2:float, 3:decimal
			if (mode > 3 && this._maxLen < 1) {
				// byte
				len = 3;
				// long
				if (mode < 6) {
					len = 19;
				// int
				} else if (mode < 8) {
					len = 10;
				// short
				} else if (mode < 10) {
					len = 5;
				}
				// ((mode + 1) % 2 === 1) means signed data mode
				this._field[0].maxLength = this._maxLen = len + (mode + 1) % 2;
			}
			if (init === 3) {
				this._setVal(val, 1);
			}
			if (!init && (val || val === 0)) {
				// 7-numeric display factor (1-100)
				this._setVal(val / this._prop(7));
			}
		},
		// convert object to number
		// fire: request to fire invalid event (set this._inv)
		_toNum: function (txt, limit, fire) {
			var val, min = null, max = null, invMes, o = this.options, num = txt, len = 0;
			if (typeof txt !== 'number') {
				txt = _str(txt);
				len = txt.length;
				num = parseFloat(this._txtAsNum(txt));
			}
			if (isNaN(num)) {
				num = null;
			} else if (!isFinite(num)) {
				num = (num === Number.NEGATIVE_INFINITY) ? -Number.MAX_VALUE : Number.MAX_VALUE;
			}
			val = limit ? this._limits(num) : num;
			if (fire && (val !== num || (_aNull(val, 1) && len > 0))) {
				fire = _aNull(num, 1) ? ((len === 0) ? 'null' : 'format') : 'limit';
				if (_aNull(num, 1)) {
					if (len === 0) {
						fire = 'null';
						invMes = this._optVal('required', 2);
					} else {
						fire = 'format';
						invMes = this._optVal('number', 2);
					}
				} else {
					fire = 'limit';
					limit = null;
					if (_aNull(min = o.minValue, 1)) {
						// 10 - minValue
						if (!_aNull(min = this._prop(10), 1)) {
							if (min !== val) {
								min = null;
							}
						}
					}
					if (_aNull(max = o.maxValue, 1)) {
						// 11 - maxValue
						if (!_aNull(max = this._prop(11), 1)) {
							if (max !== val) {
								max = null;
							}
						}
					}
					invMes = _aNull(max, 1) ? this._optVal('min', 2).replace('{0}', min.toString(10)) : (_aNull(min, 1) ? this._optVal('max', 2).replace('{0}', max.toString(10)) : this._optVal('range', 2).replace('{0}', min.toString(10)).replace('{1}', max.toString(10)));
				}
				// set value for argument of invalid event
				this._inv = { value: val, text: txt, reason: fire, message: invMes };
			}
			return val;
		},
		// convert text to number in javascript format
		_txtAsNum: function (txt, dec, min) {
			var ch, len = txt.length;
			if (!dec) {
				// 4-decimal separator
				dec = this._prop(4);
			}
			if (!min) {
				// 3-minus
				min = this._prop(3);
			}
			// filter japanese/arabic characters
			while (len-- > 0) {
				ch = this._jpn(txt.charCodeAt(len), true);
				if (ch) {
					txt = txt.replace(new RegExp(txt.charAt(len), 'g'), ch);
				}
			}
			txt = txt.replace('(', (txt.indexOf(min) < 0) ? '-' : '').replace(this._prop(2), '').replace(new RegExp(min, 'g'), '-');
			// temporary replace decimal separator by \01
			txt = txt.replace(dec, '\x01');
			// only one decimal separator
			if ((ch = txt.indexOf(dec)) > 0) {
				txt = txt.substring(0, ch);
			}
			// keep only e, E, -, digits and \01=decimalSeparator
			// note: there is no alternative in regexp, but the ^ flag
			/*jslint regexp:true*/
			txt = txt.replace(/[^0-9\-eE\x01]/gm, '').replace('\x01', '.');
			// validate for one dot
			len = txt.length;
			// validate for one minus
			if ((ch = txt.indexOf('-')) >= 0) {
				if (ch + 1 < len && (ch = txt.indexOf('-', ch + 1)) > 0) {
					if (ch > 0 && txt.toUpperCase().charAt(ch - 1) !== 'E') {
						txt = txt.substring(0, ch);
					}
				}
				len = txt.length;
				if (txt.toUpperCase().indexOf('E') < 0 && ch + 1 === len) {
					txt = '-' + txt.substring(0, len - 1);
				}
			}
			return (txt === '-' || txt === '.') ? '' : txt;
		},
		_ePow: function (plus) {
			var pow = this.options.scientificFormat,
				len = pow ? pow.length : 0,
				ch = len ? pow.charAt(0) : null;
			return ((ch === 'e' || ch === 'E') && (len === 1 || (len === 2 && pow.charAt(1) === '+'))) ? (plus ? pow : ch) : null;
		},
		// convert object/number to text in display format
		_toTxtNum: function (val, foc, txt, minus, dec, str) {
			// 8-maximum decimals
			var grps, gr0, gr, ch, iL, ePow = this._ePow(), ig = 0, iDec = 0, i = -1, neg = val, maxDec = this._prop(8);
			if (_aNull(txt)) {
				if (_aNull(val, 1)) {
					return '';
				}
				neg = val < 0;
				if (neg) {
					val = -val;
				}
				try {
					txt = ePow ? val.toString(10) : val.toFixed(maxDec);
				} catch (ex) {
					str = txt = _str(val);
				}
				// 3-minus char, 4-decimal separator
				return this._toTxtNum(neg, foc, txt.toUpperCase(), _aNull(minus) ? this._prop(3) : minus, _aNull(dec) ? this._prop(4) : dec, str);
			}
			// number in javascript format (used when val.toFixed failed)
			if (str) {
				txt = this._txtAsNum(txt, dec);
			}
			txt = txt.replace('+', '');
			iL = txt.indexOf('E');
			if (iL > 0) {
				ePow = ePow ? this._ePow(!foc && txt.charAt(iL + 1) !== '-') + txt.substring(iL + 1) : txt.substring(iL);
				txt = txt.substring(0, iL);
			} else {
				ePow = '';
			}
			// build string in requested (focus/display) format
			iL = txt.length;
			if (_aNull(neg)) {
				if (iL === 0) {
					return foc ? txt : '';
				}
				neg = this._isMinus(txt.charCodeAt(0));
				if (neg) {
					txt = txt.substring(1);
					iL--;
				}
			}
			// remove dot
			while (++i < iL) {
				ch = txt.charCodeAt(i);
				if (ch < 48 || ch > 57) {
					txt = txt.substring(0, i) + txt.substring(i + 1);
					iL--;
					break;
				}
			}
			// if dot,remove trailing 0s
			while (i < iL) {
				if (txt.charCodeAt(iL - 1) !== 48) {
					break;
				}
				txt = txt.substring(0, --iL);
			}
			iL = i;
			if (maxDec > 0 && iL < txt.length) {
				iDec = txt.length - iL;
				txt = txt.substring(0, iL) + dec + txt.substring(iL);
				iL += dec.length + maxDec;
			}
			if (iL < txt.length) {
				txt = txt.substring(0, iL);
			}
			// check for 0
			gr = txt.replace(/0/g, '');
			if (neg && (!gr || gr === dec)) {
				neg = false;
			}
			// 9-minimum decimals
			if ((iL = this._prop(9)) > 0) {
				if (iDec === 0) {
					txt += dec;
				}
				while (iL-- > iDec) {
					txt += '0';
				}
			}
			if (foc) {
				txt += ePow;
				return neg ? (minus + txt) : txt;
			}
			// 6-groups
			grps = this._prop(6);
			gr = gr0 = (grps.length > 0) ? grps[0] : 0;
			while (gr > 0 && --i > 0) {
				if (--gr === 0) {
					// 5-group separator
					txt = txt.substring(0, i) + this._prop(5) + txt.substring(i);
					gr = grps[++ig];
					if (_aNull(gr) || gr < 1) {
						gr = gr0;
					} else {
						gr0 = gr;
					}
				}
			}
			// format numeric text according to format pattern
			val = this._prop(neg ? 1 : 0).replace('n', txt + ePow);
			// 0-positive pattern, 1-negative pattern, 2-symbol
			return val.replace('$', this._prop(2));
		},
		_prop: function (flag) {
			var min, val, sign, o = this.options, t = this._type, mode = this._dataMode;
			if (flag === 13) {
				o = o.selectionOnFocus;
				return (o === -1 || o === 'select') ? -1 : ((o === 0 || o === 'start') ? 0 : ((o === 1 || o === 'end') ? 1 : 2));
			}
			if (flag === 12) {
				return (o.maxLength > 0) ? o.maxLength : this._maxLen;
			}
			if (flag === 0) {
				return o.positivePattern || ((t === 6) ? this._optVal('percentPositivePattern') : ((t === 5) ? this._optVal('currencyPositivePattern') : 'n'));
			}
			if (flag === 1) {
				val = o.negativePattern || this._optVal((t === 6) ? 'percentNegativePattern' : ((t === 5) ? 'currencyNegativePattern' : 'numericNegativePattern'));
				return val.replace('-', this._prop(3));
			}
			if (flag === 2) {
				if (!_aNull(val = o.symbol)) {
					return val;
				}
				return (t === 6) ? this._optVal('percentSymbol') : ((t === 5) ? this._optVal('currencySymbol') : '');
			}
			if (flag === 3) {
				return this._optVal('negativeSign') || '-';
			}
			if (flag === 4) {
				return o.decimalSeparator || this._optVal((t === 6) ? 'percentDecimalSeparator' : ((t === 5) ? 'currencyDecimalSeparator' : 'numericDecimalSeparator'));
			}
			if (flag === 5) {
				if (!_aNull(val = o.groupSeparator)) {
					return val;
				}
				return this._optVal((t === 6) ? 'percentGroupSeparator' : ((t === 5) ? 'currencyGroupSeparator' : 'numericGroupSeparator'));
			}
			if (flag === 6) {
				return o.groups || this._optVal((t === 6) ? 'percentGroups' : ((t === 5) ? 'currencyGroups' : 'numericGroups'));
			}
			if (flag === 7) {
				if (!_aNull(val = o.displayFactor)) {
					return val;
				}
				return (t === 6) ? this._optVal('percentDisplayFactor') : 1;
			}
			if (flag === 8) {
				// mode: 0:text, 1:double, 2:float, 3:decimal, 4:long, etc.
				if (mode > 3) {
					return 0;
				}
				if (!_aNull(val = o.maxDecimals)) {
					return val;
				}
				return this._optVal((t === 6) ? 'percentMaxDecimals' : ((t === 5) ? 'currencyMaxDecimals' : 'numericMaxDecimals'));
			}
			if (flag === 9) {
				// mode: 0:text, 1:double, 2:float, 3:decimal, 4:long, etc.
				if (mode > 3) {
					return 0;
				}
				if (!_aNull(val = o.minDecimals)) {
					return val;
				}
				return this._optVal((t === 6) ? 'percentMinDecimals' : ((t === 5) ? 'currencyMinDecimals' : 'numericMinDecimals'));
			}
			min = flag === 10;
			if (min || flag === 11) {
				val = min ? o.minValue : o.maxValue;
				if (t > 3 && typeof val === 'string') {
					val = parseFloat(val);
				}
				// mode: 0:text, 1:double, 2:float, 3:decimal, 4:long, etc.
				if (!_aNull(val, 1) || t < 4 || mode < 2 || mode === 3 || mode > 11) {
					return val;
				}
				// float
				if (mode === 2) {
					return min ? -3.40282347e38 : 3.40282347e38;
				}
				// byte
				val = 127;
				sign = (mode % 2) === 0;
				if (!sign && min) {
					return 0;
				}
				// long
				if (mode < 6) {
					val = 9223372036854775807;
				// int
				} else if (mode < 8) {
					val = 2147483647;
				// short
				} else if (mode < 10) {
					val = 32767;
				}
				return sign ? (min ? -(val + 1) : val) : (val * 2 + 1);
			}
		},
		_isMinus: function (k) {
			// japanese "'-","-","("
			// _prop: 3-minus, 1-negative pattern
			return k === this._prop(3).charCodeAt(0) || k === 45 || (k === 40 && this._prop(1).indexOf('(') >= 0) || k === 12540 || k === 65293 || k === 65288;
		},
		destroy: function () {
			/* Destroys editor and return base element back to its pre-init state.
				returnType="object" Returns reference to this igEditor.
			*/
			var par, i, e, b, elem = this._element, field = this._field, elem0 = this.element, buts = this._buttons;
			e = elem ? elem[0] : null;
			if (!field || !e) {
				return this;
			}
			// stop timer, remove drop-downs, unbind events
			this._stopTimer();
			// 3-flag to destroy
			this._doDP(3);
			// 1-flag to destroy
			this._initValidator(1);
			this._listRemove();
			field.unbind(this._evts);
			elem.unbind(this._mEvts);
			// restore layout
			b = (buts && buts[0]) ? buts[0][0] : null;
			if (b && b.parentNode === e) {
				e.removeChild(b);
			}
			b = (buts && buts[1]) ? buts[1][0].parentNode : null;
			if (b && b.parentNode === e) {
				e.removeChild(b);
			}
			// do not call this._field.remove(), because it triggers recursive call to destroy
			if (field[0].parentNode === e) {
				e.removeChild(field[0]);
			}
			if (this._selElem) {
				elem.remove();
			} else if (this._swap) {
				par = e.parentNode;
				par.insertBefore(elem0[0], e);
				par.removeChild(e);
			}
			// restore attributes
			par = this._oldCss;
			for (i in par) {
				if (par.hasOwnProperty(i)) {
					elem0.css(i, par[i]);
				}
			}
			par = this._oldAttr;
			for (i in par) {
				if (par.hasOwnProperty(i)) {
					elem0[0][i] = par[i];
				}
			}
			elem0[0]._ig_oldCss = null;
			elem0 = elem = field = this._dp = this._buttons = this._field = this._element = null;
			this._evts = this._mEvts = this._oldAttr = this._oldCss = this._validator = null;
			$.Widget.prototype.destroy.apply(this, arguments);
			return this;
		}
	});
	$.extend($.ui.igEditor, { version: '12.2.20122.1021' });
	$.ui.igEditor.setDefaultCulture = function (regional) {
		/* Set values for regional options.
			paramType="object" optional="true" Override for regional options.
			If the value of parameter is String, such as "bg", "fr", etc, then editor will attempt to find and use $.ui.regional[param] object.
			Value of object should contain pairs or key:value members.
			If that parameter is string, then editor attempts to call $.datepicker.setDefaults($.datepicker.regional[param]).
		*/
		$.ig.regional = $.ig.regional || {};
		$.ig.regional.defaults = $.extend($.ig._regional, (typeof regional === 'string') ? $.ig.regional[regional] : regional);
		if (regional === 'en' || regional === 'en-US') {
			regional = '';
		}
		if ($.datepicker && $.datepicker.regional && $.datepicker.regional[regional]) {
			$.datepicker.setDefaults($.datepicker.regional[regional]);
		}
	};
	/*
		igTextEditor is a widget based on igEditor.
	*/
	$.widget('ui.igTextEditor', $.ui.igEditor, {
		options: {
			/* type="text|password|multiline|textarea" Sets gets text mode of editor such as: single-line text editor, password editor or multiline editor.
				That option has effect only on initialization and only if base element is not INPUT or TEXTAREA.
				If based element (selector) is TEXTAREA, then it is used as input-field.
				If based element is INPUT, then it is used as input-field.
				text type="string" single line text editor based on INPUT element is created.
				password type="string" editor based on INPUT element is created.
				multiline type="string" multiline editor based on TEXTAREA element is created. 
				textarea type="string" multiline editor based on TEXTAREA element is created. 
			*/
			textMode: null,
			/* type="number" Sets gets maximum length of text which can be entered by user.
				Negative values or 0 disables that behavior.
			*/
			maxLength: 0,
			/* type="string" Sets gets ability to enter only specific characters in input-field from keyboard and on paste.
				Notes:
				If "excludeKeys" option contains same characters as this option, then "excludeKeys" has priority.
				Letters should be set in upper case.
				Making difference between upper and lower case is not supported. */
			includeKeys: null,
			/* type="string" Sets gets ability to prevent entering specific characters from keyboard or on paste.
				Notes:
				If a character is specified in "includeKeys" option also, then "excludeKeys" has priority.
				Letters should be set in upper case.
				Making difference between upper and lower case is not supported. */
			excludeKeys: null,
			/* type="bool" Sets gets ability to convert input characters to upper case (true) or keeps characters as they are (false). That option has effect only while keyboard entries and paste. */
			toUpper: false,
			/* type="bool" Sets gets ability to convert input characters to lower case (true) or keeps characters as they are (false). That option has effect only while keyboard entries and paste. */
			toLower: false,
			/* type="bool" Sets gets case validation. Value of false enables and true disables validation for case of entries to match with items in listOfItems.
				That option has effect only when "listMatchOnly" or "listAutoComplete" options are enabled. */
			listMatchIgnoreCase: true,
			/* type="bool" Set gets list match.
				Value true enables and false disables validation of keyboard entries to match with items in listOfItems.
				If that option is enabled and entered text does not match with a part of any item in list, then entry is canceled.
				Notes:
				That option is supported only when the "type" of editor is "text" and it has effect only when listOfItems is set.
				Partial match can be validated from the beginning of an item or anywhere within an item. That is defined by the "listMatchContains" option.
				Validation can be case sensitive or not and that is defined by the "listMatchIgnoreCase" option. */
			listMatchOnly: false,
			/* type="bool" Sets gets list match contains.
				Value true enables and false disables validation for partial match of entered text anywhere within an item in the listOfItems or only from the beginning of an item.
				That option has effect only when "listMatchOnly" or "listAutoComplete" options are enabled. */
			listMatchContains: false,
			/* type="bool" Sets gets autocomplete.
				Value true enables and false disables auto-complete functionality to fill value of editor by a partially matching item from the listOfItems.
				If that option is enabled and entered text does not match with a part of any item in list, then original value is preserved.
				Notes:
				That option is supported only when the "type" of editor is "text" and it has effect only when listOfItems is set.
				Partial match can be validated from the beginning of an item or anywhere within an item. That is defined by the "listMatchContains" option.
				Validation can be case sensitive or not and that is defined by the "listMatchIgnoreCase" option. */
			listAutoComplete: false
		},
		_create: function () {
			$.ui.igEditor.prototype._create.apply(this, [0]);
		}
	});
	/*
		igMaskEditor is a widget based on igEditor which provides ability to filter end-user entries by predefined mask.
	*/
	$.widget('ui.igMaskEditor', $.ui.igEditor, {
		options: {
			/* type="string" Sets gets ability to enter only specific characters in input-field from keyboard and on paste.
				Notes:
				If "excludeKeys" option contains same characters as this option, then "excludeKeys" has priority.
				Letters should be set in upper case.
				Making difference between upper and lower case is not supported. */
			includeKeys: null,
			/* type="string" Sets gets ability to prevent entering specific characters from keyboard or on paste.
				Notes:
				If a character is specified in "includeKeys" option also, then "excludeKeys" has priority.
				Letters should be set in upper case.
				Making difference between upper and lower case is not supported. */
			excludeKeys: null,
			/* type="bool" Sets gets ability to convert input characters to upper case (true) or keeps characters as they are (false). That option has effect only while keyboard entries and paste. */
			toUpper: false,
			/* type="bool" Sets gets ability to convert input characters to lower case (true) or keeps characters as they are (false). That option has effect only while keyboard entries and paste. */
			toLower: false,
			/* type="bool" Sets gets case validation. Value of false enables and true disables validation for case of entries to match with items in listOfItems.
				That option has effect only when "listMatchOnly" or "listAutoComplete" options are enabled. */
			listMatchIgnoreCase: true,
			/* type="bool" Set gets list match.
				Value true enables and false disables validation of keyboard entries to match with items in listOfItems.
				If that option is enabled and entered text does not match with a part of any item in list, then entry is canceled.
				Notes:
				That option is supported only when the "type" of editor is "text" and it has effect only when listOfItems is set.
				Partial match can be validated from the beginning of an item or anywhere within an item. That is defined by the "listMatchContains" option.
				Validation can be case sensitive or not and that is defined by the "listMatchIgnoreCase" option. */
			listMatchOnly: false,
			/* type="bool" Sets gets list match contains.
				Value true enables and false disables validation for partial match of entered text anywhere within an item in the listOfItems or only from the beginning of an item.
				That option has effect only when "listMatchOnly" or "listAutoComplete" options are enabled. */
			listMatchContains: false,
			/* type="bool" Sets gets autocomplete.
				Value true enables and false disables auto-complete functionality to fill value of editor by a partially matching item from the listOfItems.
				If that option is enabled and entered text does not match with a part of any item in list, then original value is preserved.
				Notes:
				That option is supported only when the "type" of editor is "text" and it has effect only when listOfItems is set.
				Partial match can be validated from the beginning of an item or anywhere within an item. That is defined by the "listMatchContains" option.
				Validation can be case sensitive or not and that is defined by the "listMatchIgnoreCase" option. */
			listAutoComplete: false,
			/* type="string" Sets gets input mask. Mask may include filter-flags and literal characters.
				Literal characters are part of mask which cannot be modified by end user. In order to use a filter-flag as a literal character, the escape "\\" character should be used.
				Default is "CCCCCCCCCC"
				Note: optional flags/entries affect the value returned by get of the "value" and "text" methods.
				List of filter-flags:
				C: any keyboard character. Entry is optional.
				&: any keyboard character. Entry is required.
				a: letter or digit character. Entry is optional.
				A: letter or digit character. Entry is required.
				?: letter character. Entry is optional.
				L: letter character. Entry is required.
				9: digit character. Entry is optional.
				0: digit character. Entry is required.
				#: digit character or "+" or "_". Entry is optional with replacement by "emptyPositionChar" or by "padChar".
				>: all letters to the right are converted to the upper case. In order to disable conversion, the ">" flag should be used again.
				<: all letters to the right are converted to the lower case. In order to disable conversion, the "<" flag should be used again.
			*/
			inputMask: 'CCCCCCCCCC',
			/* type="string" Sets gets character which is used as prompt in edit mode for available entry position.  */
			promptChar: '_',
			/* type="string" Sets gets character which is used as replacement of not-filled required position in mask when editor is in display mode (not focused).  */
			padChar: ' ',
			/* type="string" Sets gets character which is used as replacement of not-filled required position in mask when application calls get for the "value" or for the "text" methods. */
			emptyChar: ' ',
			/* type="rawText|0|rawTextWithRequiredPrompts|1|rawTextWithAllPrompts|2|rawTextWithLiterals|3|rawTextWithRequiredPromptsAndLiterals|4|allText|5" Sets gets type of value returned by the get of value() method. That also affects functionality of the set value(val) method and the copy/paste operations of browser.
				rawText type="string" only entered text. All unfilled prompts (positions) and literals are ignored (removed). Note: that is used as default.
				0 type="number" only entered text. All unfilled prompts (positions) and literals are ignored (removed). Note: that is used as default.
				rawTextWithRequiredPrompts type="string" only entered text and required prompts (positions). All optional unfilled prompts and literals are ignored (removed)
				1 type="number" only entered text and required prompts (positions). All optional unfilled prompts and literals are ignored (removed).
				rawTextWithAllPrompts type="string" only entered text and prompts (positions). All literals are ignored (removed).
				2 type="number" only entered text and prompts (positions). All literals are ignored (removed).
				rawTextWithLiterals type="string" only entered text and literals. All unfilled prompts are ignored (removed).
				3 type="number" only entered text and literals. All unfilled prompts are ignored (removed).
				rawTextWithRequiredPromptsAndLiterals type="string" only entered text, required prompts (positions) and literals. All optional unfilled prompts are ignored (removed).
				4 type="number" only entered text, required prompts (positions) and literals. All optional unfilled prompts are ignored (removed).
				allText type="string" entered text, all prompts (positions) and literals.
				5 type="number" entered text, all prompts (positions) and literals.
			*/
			dataMode: 'alltext',
			/* type="bool" Set gets ability to hide mask in focus state.
				Value of false allows to show all input mask with prompt characters regardless if available mask positions are filled or not.
				Value of true will show only part of mask located on the left side from caret when available mask positions on the right side from caret are empty.
			*/
			hideMaskOnFocus: false
		},
		_create: function () {
			$.ui.igEditor.prototype._create.apply(this, [1]);
		}
	});
	/*
		igDateEditor is a widget based on igEditor, which provides ability to edit date and time fields.
		Date and time patterns are defined by the regional settings and can be customized using following setters:
		
		$.ig.setRegionalDefault(regional);
		$.ui.igEditor.setDefaultCulture(regional);

		where "regional" can be name of culture like 'en-US', 'ja', 'fr', etc. Or object, which contains pairs of key:value members.
		Note: if parameter is string, then igEditor will attempt to find and use "$.ig.regional[regional]".
		By default the "$.ig._regional" object is used and it is located in "ig.util.js".

		It is also possible to customize a specific value only:
		$.ig.regional.defaults.datePattern = "M-dd-yyyy";
		$.ig.regional.defaults.monthNamesShort[1] = "Febr";
	*/
	$.widget('ui.igDateEditor', $.ui.igEditor, {
		options: {
			/* type="object" Sets gets custom regional settings for editor. If it is string, then $.ig.regional[stringValue] is assumed. */
			regional: null,
			/* type="bool" Sets gets ability to modify only 1 date field on spin events.
				Value false enables changes of other date fields when incremented or decremented date-field reaches its limits.
				Value true modifies only value of one field.
			*/
			spin1Field: false,
			/* type="date" Sets gets the minimum value which can be entered in editor by user.*/
			minValue: null,
			/* type="date" Sets gets the maximum value which can be entered in editor by user. */
			maxValue: null,
			/* type="string"
				Sets gets format of date while editor has no focus.
				Value of that option can be set to a specific date pattern or to a flag defined by regional settings.
				If value is not set, then the dateInputFormat is used automatically.
				If value is set to explicit date pattern and pattern besides date-flags has explicit characters which match with date-flags or mask-flags, then the "escape" character should be used in front of them. 
				List of predefined regional flags:
				"date": the datePattern member of regional option is used
				"dateLong": the dateLongPattern member of regional option is used
				"time": the timePattern member of regional option is used
				"timeLong": the timeLongPattern member of regional option is used
				"dateTime": the dateTimePattern member of regional option is used
				List of explicit characters, which should have escape \\ character in front of them:
					C, &, a, A, ?, L, 9, 0, #, >, <, y, M, d, h, H, m, s, t, f.
				List of date-flags when explicit date pattern is used:
				"y": year field without century and without leading zero
				"yy": year field without century and with leading zero
				"yyyy": year field with leading zeros
				"M": month field as digit without leading zero
				"MM": month field as digit with leading zero
				"MMM": month field as short month name
				"MMMM": month field as long month name
				"d": day of month field without leading zero 
				"dd": day of month field with leading zero
				"ddd": day of the week as short name
				"dddd": day of the week as long name
				"t": first character of string which represents AM/PM field 
				"tt": 2 characters of string which represents AM/PM field
				"h": hours field in 12-hours format without leading zero
				"hh": hours field in 12-hours format with leading zero
				"H": hours field in 24-hours format without leading zero
				"HH": hours field in 24-hours format with leading zero
				"m": minutes field without leading zero
				"mm": minutes field with leading zero
				"s": seconds field without leading zero
				"ss": seconds field with leading zero
				"f": milliseconds field in thousands
				"ff": milliseconds field in hundreds
				"fff": milliseconds field
			*/
			dateDisplayFormat: null,
			/* type="string"
				Sets gets format of date while editor has focus.
				Value of that option can be set to explicit date pattern or to a flag defined by regional settings.
				If value is set to explicit date pattern and pattern besides date-flags has explicit characters which match with date-flags or mask-flags, then the "escape" character should be used in front of them.
				If option is not set, then the "date" is used automatically.
				List of predefined regional flags:
				"date": the datePattern member of regional option is used
				"dateLong": the dateLongPattern member of regional option is used
				"time": the timePattern member of regional option is used
				"timeLong": the timeLongPattern member of regional option is used
				"dateTime": the dateTimePattern member of regional option is used
				List of explicit characters, which should have escape \\ character in front of them: C, &, a, A, ?, L, 9, 0, #, >, <, y, M, d, h, H, m, s, t, f.
				List of date-flags when explicit date pattern is used:
				"y": year field without century and without leading zero
				"yy": year field without century and with leading zero
				"yyyy": year field with leading zeros
				"M": month field as digit without leading zero
				"MM": month field as digit with leading zero
				"MMM": month field as short month name
				"MMMM": month field as long month name
				"d": day of month field without leading zero 
				"dd": day of month field with leading zero
				"ddd": day of the week as short name
				"dddd": day of the week as long name
				"t": first character of string which represents AM/PM field 
				"tt": 2 characters of string which represents AM/PM field
				"h": hours field in 12-hours format without leading zero
				"hh": hours field in 12-hours format with leading zero
				"H": hours field in 24-hours format without leading zero
				"HH": hours field in 24-hours format with leading zero
				"m": minutes field without leading zero
				"mm": minutes field with leading zero
				"s": seconds field without leading zero
				"ss": seconds field with leading zero
				"f": milliseconds field in thousands
				"ff": milliseconds field in hundreds
				"fff": milliseconds field
			*/
			dateInputFormat: null,
			/* type="string" Sets gets character which is used as prompt in edit mode for available entry position. Default is "_" */
			promptChar: '_',
			/* type="date|0|editModeText|1|text|2" Sets gets type of value returned by the get of value() method. That also affects functionality of the set value(val) method and the copy/paste operations of browser.
				date type="string" The Date object is used. Note: that is used as default.
				0 type="number" The Date object is used. Note: that is used as default.
				editModeText type="string" The String object is used and the "text" in edit mode (focus) format (pattern).
				1 type="number" The String object is used and the "text" in edit mode (focus) format (pattern).
				text type="string" The String object is used and the "text" in display mode (no focus) format (pattern).
				2 type="number" The String object is used and the "text" in display mode (no focus) format (pattern).
			*/
			dataMode: 'date',
			/* type="number" Sets gets the minimum number of date fields, which makes entered date-string valid.
				All missing fields are automatically filled up from the previous valid date or with zeros or with the values from the today date.
				For example, if "dateInputPattern" is set to "yyyy/MM/dd hh:mm" and user entered only the first 3 fields (year, month, day), then values for hours and minutes are filled with zeros. */
			minNumberOfDateFields: 3,
			/* type="bool" Set gets ability to use last valid date when user entered invalid value.
				Value of true allows automatically use last valid date, when editor loses focus and user failed to enter a valid date.
				In case of value false, the entered date is considered invalid and null is used.
			*/
			useLastGoodDate: false,
			/* type="bool" Sets gets ability to decrease day of month.
				Value of true allows decreasing day of month, when editor loses focus and user entered day of month which is larger the maximum for that particular month.
				Value of false will automatically increment month and decrease day of month.
				Examples.
				If that option is true and user entered "09/31/2010", then on lost focus that string will be converted to "09/30/2010".
				If that option is false, then in similar situation the string will be converted to "10/01/2010". */
			reduceDayOfInvalidDate: true,
			/* type="bool" Sets gets ability to hide mask in focus state.
				Value of true allows showing or hiding all input mask with prompt characters regardless if available mask positions are filled or not.
				Value of true will show only part of mask located on the left side from caret when available mask positions on the right side from caret are empty.  */
			hideMaskOnFocus: false,
			/* type="number" Sets gets year for auto detection of 20th and 21st centuries.
				That option is used to automatically fill century when the user entered only 1 or 2 digits into the year field or when the date pattern contains only 1 or 2 year positions, e.g. "yy" or "y".
				If user entered value larger than value of this option, then 20th century is used, otherwise the 21st. */
			centuryThreshold: 29,
			/* type="bool" Sets gets formatting of the dates as UTC.
				That option is supported only when dataMode option is 'date' and Date objects are used to get/set value of editor.
				Notes:
				That option affects only functionality of get/set value method and the Date-value, which was set on initialization.
				When application uses the set-value, then internal Date-value and displayed-text is incremented by TimezoneOffset.
				When application uses the get-value, then editor returns internal Date-value decremented by TimezoneOffset.
				When that option is modified after initialization, then displayed text and internal Date-value are not affected.
				It is not recommended to change that option without resetting Date-value.
			*/
			enableUTCDates: false,
			/* type="number" Sets gets delta-value which is used to increment or decrement the value of field where caret is located is modified. */
			spinDelta: 1,
			/* type="bool" Sets gets ability to prevent null value.
				If that option is disabled, and editor has no value, then value is set to today date (or minValue/maxValue).
			*/
			nullable: true,
			/* type="number" Sets gets difference between year in Gregorian calendar and displayed year. */
			yearShift: 0
		},
		_create: function () {
			$.ui.igEditor.prototype._create.apply(this, [2]);
		}
	});
	/*
		igDatePicker is a widget based on igDateEditor, which provides ability to edit date and time fields and show drop-down calendar.
		Note: the calendar implemented by the "jquery.ui.datepicker" is used as drop-down calendar. It means that "datepicker" should be available on client.

		If application modifies regional settings using string-parameter in methods:
		$.ig.setRegionalDefault(regional);
		$.ui.igEditor.setDefaultCulture(regional);
		
		then igEditor attempts to call following method:		
		$.datepicker.setDefaults($.datepicker.regional[regional]);
	*/
	$.widget('ui.igDatePicker', $.ui.igDateEditor, {
		options: {
		    /* type="dropdown|clear|spin" Sets gets visibility of spin and drop-down button.
		    That option can be set only on initialization.
		    dropdown type="string" Button to open list is located on the right side of input-field (or left side if base html element has direction:rtl)
		    clear type="string" Button to clear value is located on the right side of input-field (or left side if base html element has direction:rtl)
		    spin type="string" Spin buttons are located on the right side of input-field (or left side if base html element has direction:rtl) */
			button: 'dropdown',
			/* type="object" Sets gets options supported by the jquery.ui.datepicker. */
			datepickerOptions: null
		},
		_create: function () {
			$.ui.igEditor.prototype._create.apply(this, [3]);
		}
	});
	/*
		igNumericEditor is a widget based on igEditor, which provides ability to edit number.
		Numeric patterns are defined by the regional settings and can be customized using following setters:
		
		$.ig.setRegionalDefault(regional);
		$.ui.igEditor.setDefaultCulture(regional);
		
		where "regional" can be name of culture like 'en-US', 'ja', 'fr', etc. Or object, which contains pairs of key:value members.
		Note: if parameter is string, then igEditor will attempt to find and use "$.ig.regional[regional]".
		By default the "$.ig._regional" object is used and it is located in "ig.util.js".

		It is also possible to customize a specific value only:
		$.ig.regional.defaults.numericMaxDecimals = 4;
		$.ig.regional.defaults.numericNegativePattern = "(-$n)";
	*/
	$.widget('ui.igNumericEditor', $.ui.igEditor, {
		options: {
			/* type="object" Sets gets custom regional settings for editor. If it is string, then $.ig.regional[stringValue] is assumed. */
			regional: null,
			/* type="string" Sets gets the pattern for negative numeric values, which is used in display (no focus) state.
				The "n" flag represents the value of number. The "-" and "()" flags are static part of pattern.
				Note: this option has priority over possible regional settings. */
			negativePattern: null,
			/* type="string" Sets gets the character, which is used for negative numeric values.
				Note: this option has priority over possible regional settings. */
			negativeSign: null,
			/* type="string" Sets gets the character, which is used as decimal separator.
				Note: this option has priority over possible regional settings. */
			decimalSeparator: null,
			/* type="string" Sets gets the character, which is used as separator for groups (like thousands).
				That option has effect only in display (no focus) state.
				Note: this option has priority over possible regional settings. */
			groupSeparator: null,
			/* type="object" (array of number objects) Sets gets the number of digits in integer part of number, which are divided into groups.
				The "numericGroupSeparator" is inserted between groups.
				If the sum of all values in array is smaller than the length of integer part, then the last item in array is used for all following groups.
				Count of groups starts from the decimal point (from right to left).
				That option has effect only in display (no focus) state.
				Note: this option has priority over possible regional settings. */
			groups: null,
			/* type="number" Sets gets the maximum number of decimal places which are used in display (no focus) state.
				Note: this option has priority over possible regional settings. */
			maxDecimals: null,
			/* type="number" Sets gets the minimum number of decimal places which are used in display (no focus) state.
				If number of digits in fractional part of number is less than the value of this option, then the "0" characters are used to fill missing digits.
				Note: this option has priority over possible regional settings. */
			minDecimals: null,
			/* type="number" Sets gets the minimum value which can be entered in editor by end user. */
			minValue: null,
			/* type="number" Sets gets the maximum value which can be entered in editor by end user. */
			maxValue: null,
			/* type="null|E|e|E+|e+"
			Sets gets support for E-power format in edit mode.
			If that option is set, then numeric value appears as a string with possible E-power flag. In edit mode the "E" or "e" character can be entered as well.
			Notes: The "+" character is not supported in edit mode. The minimum and maximum number of decimal places are applied to the string which appears in front of E-part of string.
			null type="object" scientific format is disabled.
			E type="string" scientific format is enabled and the "E" character is used.
			e type="string" scientific format is enabled and the "e" character is used.
			E+ type="string" scientific format is enabled and the "E" character is used. The "E+" is used for positive values in display mode.
			e+ type="string" scientific format is enabled and the "e" character is used. The "e+" is used for positive values in display mode.
			*/
			scientificFormat: null,
			/* type="number" Sets gets the representation of null value.  */
			nullValue: null,
			/* type="number" Sets gets delta-value which is used to increment or decrement value in editor on spin events. */
			spinDelta: 1,
			/* type="bool" Sets gets ability to prevent null value.
				If that option is disabled, and editor has no value, then value is set to 0 (or minValue/maxValue).
			*/
			nullable: true,
			/* type="number" Sets gets maximum length of text which can be entered by user.
				Negative values or 0 disables that behavior.
			*/
			maxLength: 0,
			/* type="text|-1|editModeText|0|double|1|float|2|decimal|3|long|4|ulong|5|int|6|uint|7|short|8|ushort|9|sbyte|10|byte|11" Sets gets type of value returned by the get of value() method. That also affects functionality of the set value(val) method and the copy/paste operations of browser.
				text type="string" the String object is used with 'text' in display mode format.
				-1 type="number"
				editModeText type="string" the String object is used with 'text' in edit mode format.
				0 type="number"
				double type="string" the Number object is used with limits of double and if value is not set, then the null or Number.NaN is used depending on the option 'nullable'. Note: that is used as default.
				1 type="number"
				float type="string" the Number object is used with limits of double and if value is not set, then the null or Number.NaN is used depending on the option 'nullable'.
				2 type="number"
				decimal type="string" the Number object is used with limits of double and if value is not set, then the null or 0 is used depending on the option 'nullable'.
				3 type="number"
				long type="string" the Number object is used with limits of signed long and if value is not set, then the null or 0 is used depending on the option 'nullable'. 
				4 type="number"
				ulong type="string" the Number object is used with limits of unsigned long and if value is not set, then the null or 0 is used depending on the option 'nullable'.
				5 type="number"
				int type="string" the Number object is used with limits of signed int and if value is not set, then the null or 0 is used depending on the option 'nullable'.
				6 type="number"
				uint type="string" the Number object is used with limits of unsigned int and if value is not set, then the null or 0 is used depending on the option 'nullable'.
				7 type="number"
				short type="string" the Number object is used with limits of signed short and if value is not set, then the null or 0 is used depending on the option 'nullable'.
				8 type="number"
				ushort type="string" the Number object is used with limits of unsigned short and if value is not set, then the null or 0 is used depending on the option 'nullable'.
				9 type="number"
				sbyte type="string" the Number object is used with limits of signed byte and if value is not set, then the null or 0 is used depending on the option 'nullable'.
				10 type="number"
				byte type="string" the Number object is used with limits of unsigned byte and if value is not set, then the null or 0 is used depending on the option 'nullable'.
				11 type="number"
			*/
			dataMode: 'double'
		},
		_create: function () {
			$.ui.igEditor.prototype._create.apply(this, [4]);
		}
	});
	/*
		igCurrencyEditor is a widget based on igNumericEditor, which provides ability to edit number in currency format.
	*/
	$.widget('ui.igCurrencyEditor', $.ui.igNumericEditor, {
		options: {
			/* type="string" Sets gets the pattern for positive numeric values, which is used in display (no focus) state.
				The "$" flag represents "numericSymbol" and the "n" flag represents the value of number.
				Note: this option has priority over possible regional settings. */
			positivePattern: null,
			/* type="string" Sets gets the pattern for negative numeric values, which is used in display (no focus) state.
				The "$" flag represents "numericSymbol".
				The "n" flag represents the value of number.
				The "-" and "()" flags are static part of pattern.
				Note: this option has priority over possible regional settings. */
			negativePattern: null,
			/* type="string" Sets gets symbol, which is used in display (no focus) state.
				Note: this option has priority over possible regional settings. */
			symbol: null
		},
		_create: function () {
			$.ui.igEditor.prototype._create.apply(this, [5]);
		}
	});
	/*
		igPercentEditor is a widget based on igNumericEditor, which provides ability to edit number in percent format.
	*/
	$.widget('ui.igPercentEditor', $.ui.igNumericEditor, {
		options: {
			/* type="string" Sets gets the pattern for positive numeric values, which is used in display (no focus) state.
				The "$" flag represents "numericSymbol" and the "n" flag represents the value of number.
				Note: this option has priority over possible regional settings. */
			positivePattern: null,
			/* type="string" Sets gets the pattern for negative numeric values, which is used in display (no focus) state.
				The "$" flag represents "numericSymbol".
				The "n" flag represents the value of number.
				The "-" and "()" flags are static part of pattern.
				Note: this option has priority over possible regional settings. */
			negativePattern: null,
			/* type="string" Sets gets symbol, which is used in display (no focus) state.
				Note: this option has priority over possible regional settings. */
			symbol: null,
			/* type="number" Sets gets the factor which used for the get and set of the "value" method.
				On the get number (string) entered by user is divided by that factor and on the set the number (string) displayed in editor is multiplied by that factor.
				For example, if factor is 100 and the "value" is set to 0.123, then editor will show string "12.3".
				Possible values: 1, 10, 100, 1000, 10000, 100000, etc.
				Note: this option has priority over possible regional settings. */
			displayFactor: null
		},
		_create: function () {
			$.ui.igEditor.prototype._create.apply(this, [6]);
		}
	});
}(jQuery));



