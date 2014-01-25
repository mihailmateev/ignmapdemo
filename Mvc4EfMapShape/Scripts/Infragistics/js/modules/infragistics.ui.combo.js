/*!
* Infragistics.Web.ClientUI Combo localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Combo) {
	$.ig.Combo = {
		locale: {
			noMatchFoundText: 'No Results',
			dropDownButtonTitle: 'Show drop-down',
			clearButtonTitle: 'Clear value'
		}
	};
}


/*!
* Infragistics.Web.ClientUI Combo 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.4.4.js
* jquery.ui.core.js
* jquery.ui.widget.js
* infragistics.util.js
* infragistics.dataSource.js
*
* Example to use:
*	<script type="text/javascript">
*	$(function () {
*		$('#combo1').igCombo();
*	});
*	</script>
*	<input id="combo1" />
*/

/*global jQuery, setTimeout, setInterval, clearInterval, alert, document, window*/
(function ($) {
	var _aNull = function (v, nan) {
		return v === null || v === undefined || (nan && typeof v === 'number' && isNaN(v));
	}, _toPx = function (val) {
		if (!val) {
			return 0;
		}
		if (typeof val === 'number') {
			return val;
		}
		val = val.toString();
		// test for %, em, mm, pt, in, cm
		val = val.match(/[e%mitc]/i) ? 0 : parseFloat(val);
		return isNaN(val) ? 0 : Math.floor(val + 0.5);
	}, _px = function (elem, css) {
		// returns px value of style attribute
		return _toPx(elem.css(css));
	}, _notab = function (elem) {
		return elem.attr('tabIndex', -1).css('outline', 0).attr('unselectable', 'on');
	}, _stop = function (e) {
		try {
			e.preventDefault();
			e.stopPropagation();
		} catch (ex) { }
	}, _equals = function (o1, o2) {
		return o1 === o2 || (o1 && o2 && o1.getTime && o2.getTime && o1.getTime() === o2.getTime());
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
	}, _listIDShift = 100, _cascWait;
	/*
		igCombo is a widget based on jQuery UI that provides ability to edit text and show drop-down list.
		Drop-down list supports multiple selection, filtering, templating, rendering matching items, active item, etc.
		Editing of field supports auto-complete, editing multiple items, synchronization with selection in drop-down list, clear button, etc.
	*/
	$.widget('ui.igCombo', {
		options: {
			/* type="string" Gets sets height of combo. The numeric and string values (valid html units for size) are supported. It includes %, px, em and other units. */
			height: null,
			/* type="string" Gets sets width of combo. The numeric and string values (valid html units for size) are supported. It includes %, px, em and other units. */
			width: null,
			/* type="number" Gets sets tabIndex for field of combo. */
			tabIndex: null,
			/* type="number" Gets sets duration of show drop-down list animation in milliseconds. */
			animationShowDuration: 100,
			/* type="number" Gets sets duration of hide drop-down list animation in milliseconds. */
			animationHideDuration: 50,
			/* type="bool" Gets sets style.display "block" or "inline-block" applied to main/outer html element. */
			enableDisplayBlock: false,
			/* type="editable|dropdown|readonlylist|readonly|0|1|2|3" Sets gets functionality mode.
				editable type="string" Allows to modify value by edit field and drop-down list.
				dropdown type="string" Allows to modify value by drop-down list only.
				readonlylist type="string" Allows to open list, but does not allow any changes in field or selection in drop-down list. If selection is not set, then first item in dataSource is automatically selected.
				readonly type="string" Does not allow to open list or change value in field. If selection is not set, then first item in dataSource is automatically selected.
				0 type="number" Same as editable.
				1 type="number" Same as dropdown.
				2 type="number" Same as readonlylist.
				3 type="number" Same as readonly.
			*/
			mode: 'editable',
			/* type="bool" Sets gets ability to show drop-down list when combo gets focus. */
			dropDownOnFocus: false,
			/* type="multi|contains|startsWith|full|null" Gets sets condition used for rendering of matching parts in items of drop-down list.
				Note: that option is not related to "filteringType" and "filteringCondition" options.
				multi type="string" multiple matches in a single item are rendered
				contains type="string" match at any position in item is rendered
				startsWith type="string" only match which starts from the beginning of text is rendered
				full type="string" only fully matched items are rendered
				null type="object" matches are not rendered
			*/
			renderMatchItems: 'multi',
			/* type="bool" Gets sets ability to use case sensitive or ignore case searching for matches defined by "renderMatchItems" and "filteringCondition" options */
			caseSensitive: false,
			/* type="string" Gets sets condition used for filtering.
				Notes:
				If the "autoComplete" option is enabled, then the "startsWith" is used regardless of value for this option.
				If "parentComboKey" option is set, then data is filtered internally, therefore, filtering while changing text in editor is not available.
			*/
			filteringCondition: 'contains',
			/* type="remote|local|none|null" Gets sets type of filtering.
				Notes:
				If "parentComboKey" option is set, then data is filtered internally, therefore, filtering while changing text in editor is not available; though, that option will still define type of filtering used by cascading functionality.
				If this option is set to "remote", then the "css.waitFiltering" is applied to combo and its drop-down list.
				remote type="string" filtering is performed by server
				local type="string" filtering is performed by $.ig.DataSource
				none type="string" filtering is disabled
				null type="object" filtering is disabled
			*/
			filteringType: null,
			/* type="string" Gets sets url key name that specifies how the remote filtering expressions will be encoded for remote requests, e.g. &filter('col') = startsWith. Default is OData */
			filterExprUrlKey: null,
			/* type="bool" Gets sets ability to autocomplete field from matching item in list.
				Note: if "autoComplete" option is enabled, then the "startsWith" is used for "filteringCondition" option */
			autoComplete: false,
			/* type="string" Gets sets format which is applied to items in list. Values null or false will disable format.
				Value "auto" or true will use automatic format for Date and number objects.
				Value null or false will disable automatic format.
				Custom values can be something like "currency", "percent", "dateLong", "time", "MMM-dd-yyyy H:mm tt", etc.
				However, custom format should be valid for a specific data type in "textKey" column.
			*/
			format: true,
			/* type="array" Gets sets list of selected items. It should contain array of objects.
				Each object should contain the member "index" equals to the index of selected item or the member "value" equals to value of item in dataSource in "valueKey" column.
				The member "text" contains value of item in "textKey" column.
				Missing values are filled automatically while rendering list items and on other actions. If application set more than one member, then it is responsible for match. */
			selectedItems: [ {
				/* type="number" optional="true" Index of item in list. Value should be larger than -1 and less than number of items in list (rows in  dataSource)  */
				index: -1,
				/* type="object" optional="true" Value of cell in valueKey column for index. */
				value: null,
				/* type="string" optional="true" Value of cell in textKey column for index. */
				text: null
			} ],
			/* type="null|false|0|off|true|1|on|2|onWithCheckboxes" Gets sets ability to select multiple items in list and enter multiple items in field which are separated by the 'itemSeparator'.
				null type="object" multiselection is disabled
				false type="bool" multiselection is disabled
				0 type="number" multiselection is disabled
				off type="string" multiselection is disabled
				true type="bool" multiselection is enabled
				1 type="number" multiselection is enabled
				on type="string" multiselection is enabled
				2 type="number" multiselection is enabled and checkboxes are used for list items. Those checkboxes allow to add/remove selection without pressing Ctrl key on mouse click.
				onWithCheckboxes type="string" multiselection is enabled and checkboxes are used for list items. Those checkboxes allow to add/remove selection without pressing Ctrl key on mouse click.
			*/
			multiSelection: null,
			/* type="bool" Gets sets ability to render focus/active item in drop-down list.
				Notes: If list had active item and it was closed and opened again, then active item is reset to the first selected item.
				It there is no selected items, then active item is not reset.
				If that option is disabled, then functionality becomes similar to the SELECT html element.
				For example, if list is opened then action keys like up/down arrows/page, home and end will change selected item instead of active item.
				If list is closed, then up/down arrow keys will change selected item and update text field for it.
				If list is opened, then text-changes in field will select matching item in list instead of activating it.
			*/
			enableActiveItem: true,
			/* type="bool" Gets sets ability to enter and keep custom value in field.
				Notes for enabled:
				1. The matching item in list becomes active, but not selected.
				2. If load on demand or dataBindOnOpen is enabled, then after the load, the matching item can be selected.
				3. If text option was not set, the selectedItems contain only one item and that item was not found in dataSource, then the "value" member of that selected item will be used as the custom text.
			*/
			allowCustomValue: false,
			/* type="bool" Gets sets ability to select active item in list by Space key.
				Note: if that options is enabled, then it will be not possible to type-in the Space character when list is opened.
			*/
			selectItemBySpaceKey: false,
			/* type="string" Gets sets separator between items in field. Note: that option has effect only when "multiSelection" option is enabled */
			itemSeparator: ', ',
			/* type="number" Gets sets width of drop-down list in pixels. If it is 0, then width of combo is used. */
			dropDownWidth: 0,
			/* type="number" Gets sets maximum height of drop-down list in pixels. */
			dropDownMaxHeight: 300,
			/* type="number" Gets sets minimum height of drop-down list in pixels. */
			dropDownMinHeight: 0,
			/* type="bool" Gets sets ability to append container of drop-down list to the body or to the parent of combo. */
			dropDownAsChild: false,
			/* type="bool" Gets sets ability to use virtual rendering for drop-down list.
				If that option is enabled, then only visible items are created and top edge of first visible item in list is alligned to the top edge of list.  */
			virtualization: false,
			/* type="bool" Gets sets visibility of drop-down button.  */
			showDropDownButton: true,
			/* type="bool" Gets sets ability to show a button which allows to clear field.
				Button is automatically hidden when field is empty and it automatically appears when field is not empty. */
			enableClearButton: true,
			/* type="string" Gets sets text of list item for condition when "filteringType" option is enabled and no match was found. That is an override for the $.ig.Combo.locale.noMatchFoundText. */
			noMatchFoundText: null,
			/* type="string" Gets sets title for html element which represend drop-down button. That is an override for the $.ig.Combo.locale.dropDownButtonTitle. */
			dropDownButtonTitle: null,
			/* type="string" Gets sets title for html element which represend clear button. That is an override for the $.ig.Combo.locale.clearButtonTitle. */
			clearButtonTitle: null,
			/* type="string" Gets sets text which appears in combo on initialization. If it is not set, then the value from target html element is used automatically.
				If selectedItems option is not set and allowCustomValue option is enabled, then first matching item in list will be selected.
				Notes: After initialization that option is reset to null. To get text in field, the text() method can be used.
			*/
			text: null,
			/* type="string" Gets sets template used to render an item in list. Notes:
				1. The jquery.tmpl.js of Microsoft is used and application should provide supported syntax for content.
				2. Template is rendered inside of LI html element.
				So, application should consider restriction for layout: do not use "block" html elements and in case of absolutely positioned elements,
				they should not overlap with checkbox icons.
			*/
			itemTemplate: null,
			/* type="string" Gets sets template used to render header in drop-down list. Template is rendered inside of DIV html element. */
			headerTemplate: null,
			/* type="string" Gets sets template used to render footer in drop-down list. Note: template is rendered inside of DIV html element. */
			footerTemplate: null,
			/* type="string" Sets gets text which appears in field in no-focus state and there is no value.  */
			nullText: null,
			/* type="object" Gets sets a valid data source accepted by $.ig.DataSource, or an instance of an $.ig.DataSource itself.
				Note: if it is set to string and "dataSourceType" option is not set, then $.ig.JSONPDataSource is used.
			*/
			dataSource: null,
			/* type="string" Gets sets data source type (such as "json", "xml", etc). Please refer to the documentation of $.ig.DataSource and its type property */
			dataSourceType: null,
			/* type="string" Gets sets url which is used for sending JSON on request for remote filtering (MVC for example). That option is required when load on demand is enabled and its type is remote. */
			dataSourceUrl: null,
			/* type="string" see $.ig.DataSource. property in the response specifying the total number of records on the server. */
			responseTotalRecCountKey: null,
			/* type="string" see $.ig.DataSource. This is basically the property in the responses where data records are held, if the response is wrapped. */
			responseDataKey: null,
			/* type="object" Gets or sets object which contains options supported by igValidator.
				Notes: in order for validator to work, application should ensure that igValidator is loaded (ig.ui.validator.js/css files).
				Example:
				$('#combo1').igCombo({ validatorOptions: { required: true } }); */
			validatorOptions: null,
			/* type="string" Gets sets name of (hidden) INPUT element, which value will be set to values of selected items separated by "," character on any change in igCombo. */
			inputName: null,
			/* type="object" Gets sets container of variables which define load on demand functionality.
				Note: that option has effect only when data is loaded remotely using dataSourceUrl. */
			loadOnDemandSettings: {
				/* type="bool" Gets sets option to enable load on demand.  */
				enabled: false,
				/* type="number" Gets sets number of records loaded on each request.  */
				pageSize: null
			},
			/* type="bool" Gets sets ability to load data (bind dataSource) at the time when drop-down list is opened.
				Notes:
				1. Before data is loaded the selectedItems, value, text and other options/methods will fail.
				2. Initial selection, text and value will have no effect.
				3. If on first drop-down the dataSource does not contain selectedItems (for example, enabled load on demand), then selection will be destroyed.
				4. To get around with values, an application may enable "allowCustomValue" option and use the "text" option instead of "selectedItems".
			*/
			dataBindOnOpen: false,
			/* type="bool" Sets gets ability to close drop-down list when item is the list is selected. */
			closeDropDownOnSelect: true,
			/* type="bool" Sets gets ability to close drop-down list when control loses focus. Note: if application disables that option, then it is responsible for closing drop-down list. */
			closeDropDownOnBlur: true,
			/* type="string|number|bool|date|auto|null" Gets sets type of values used for data cell/items with valueKey. That value is assign to schema of $.ig.DataSource.
				string type="string" data source uses strings objects
				number type="string" data source uses numbers objects
				bool type="string" data source uses booleans objects
				date type="string" data source uses Date objects
				auto type="string" data source uses type defined by cell/items located in first row
				null type="object" data source uses type defined by cell/items located in first row
			*/
			valueKeyType: null,
			/* type="string|number|bool|date|auto|null" Gets sets type of values used for data cells/items with textKey. That value is assign to schema of $.ig.DataSource.
				string type="string" data source uses strings objects
				number type="string" data source uses numbers objects
				bool type="string" data source uses booleans objects
				date type="string" data source uses Date objects
				auto type="string" data source uses type defined by cell/items located in first row
				null type="object" data source uses type defined by cell/items located in first row
			*/
			textKeyType: null,
			/* type="string" Gets sets name of column which contains the "value". If it is missing, then name of first column will be used. */
			valueKey: null,
			/* type="string" Gets sets name of column which contains the displayed text. If it is missing, then "valueKey" option will be used. */
			textKey: null,
			/* type="string|object" Gets sets selector/id of parent igCombo or reference to parent igCombo object, which is used for cascading functionality.
				Note: the selected value in parent igCombo will be used as key to adjust dataSource in this igCombo. */
			parentCombo: null,
			/* type="object" Gets sets collection (array or dictonary) of javascript objects which allows to configure dataSource and other properties of this igCombo.
				The key in dictionary should represent selected value in parent igCombo. If value in parent igCombo is integer, then array can be used instead of dictionary.
				Each item in collection may contain dataSource, or an object, which should have following members.
					dataSource: reference to dataSource,
					valueKey: optional override for valueKey of this igCombo,
					textKey: optional override for textKey of this igCombo,
					dataSourceUrl: optional dataSourceUrl when dataSource is not set.
				Note: that option has effect only when "parentCombo" option is set and it has priority over "parentComboKey".
			*/
			cascadingDataSources: null,
			/* type="string" Gets sets column key in dataSource, which will be used by cascading functionality in order to get records matching with selected value in parent igCombo.
				Notes:
				That option has effect only when "parentCombo" option is set and it has no effect if "cascadingDataSources" is set.
				If that option is set, then data is filtered internally, therefore, filtering while changing text in editor is not available.
			*/
			parentComboKey: null
		},
		events: {
			/* cancel="true" Event which is raised before drop-down list is opened.
				Return false in order to cancel drop-down action.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.owner to obtain reference to igCombo.
				Use ui.element to obtain reference to jquery DOM element which represents container of list.
				Note: on the very first opening or option-change that member is null and application should
				check that before using that member.
			*/
			dropDownOpening: null,
			/* cancel="false" Event which is raised after drop-down list was opened.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.owner to obtain reference to igCombo.
				Use ui.element to obtain reference to jquery DOM element which represents container of list.
			*/
			dropDownOpened: null,
			/* cancel="true" Event which is raised before drop-down list is closed.
				Return false in order to cancel hide action.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.owner to obtain reference to igCombo.
				Use ui.element to obtain reference to jquery DOM element which represents container of list.
			*/
			dropDownClosing: null,
			/* cancel="false" Event which is raised after drop-down list was closed.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.owner to obtain reference to igCombo.
				Use ui.element to obtain reference to jquery DOM element which represents container of list.
			*/
			dropDownClosed: null,
			/* cancel="true" Event which is raised before data binding.
				Function takes first argument null and second argument ui.
				Use ui.owner to obtain reference to igCombo.
				Use ui.dataSource to obtain reference to instance of $.ig.DataSource used by combo. */
			dataBinding: null,
			/* cancel="false" Event which is raised after data binding.
				Function takes first argument null and second argument ui.
				Use ui.owner to obtain reference to igCombo.
				Use ui.dataSource to obtain reference to instance of $.ig.DataSource used by combo. */
			dataBound: null,
			/* cancel="false" Event which is raised after value in field was modified by user.
				It is not raised when value of field was modified internally, for example, after filling-up from matching item while autoComplete.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.owner to obtain reference to igCombo.
				Use ui.text to obtain new text in field.
				Use ui.oldText to obtain old text in field.
			*/
			textChanged: null,
			/* cancel="true" Event which is raised before selection change.
				Return false in order to cancel change.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser. That can be null.
				Use ui.owner to obtain reference to igCombo.
				Use ui.items to obtain reference to array of new selected items. That can be null.
				Use ui.oldItems to obtain reference to array of old selected items. That can be null.
			*/
			selectionChanging: null,
			/* cancel="false" Event which is raised after selection change.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser. That can be null.
				Use ui.owner to obtain reference to igCombo.
				Use ui.items to obtain reference to array of new selected items. That can be null.
				Use ui.oldItems to obtain reference to array of old selected items. That can be null.
			*/
			selectionChanged: null,
			/* cancel="true" Event which is raised before change of active item in list.
				Return false in order to cancel change.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser. That can be null.
				Use ui.owner to obtain reference to igCombo.
				Use ui.index to obtain index of new active item.
				Use ui.oldIndex to obtain index of old active item.
			*/
			activeItemChanging: null,
			/* cancel="false" Event which is raised after change of active item in list.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser. That can be null.
				Use ui.owner to obtain reference to igCombo.
				Use ui.index to obtain index of new active item.
				Use ui.oldIndex to obtain index of old active item.
			*/
			activeItemChanged: null,
			/* cancel="false" Event which is raised after field was modified by end user and autoComplete was not able to find matching item in list.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser. That can be null.
				Use ui.owner to obtain reference to igCombo.
				Use ui.text to obtain text in field.
			*/
			noMatchFound: null,
			/* cancel="true" Event which is raised before filtering.
				Return false in order to cancel filtering.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser. That can be null.
				Use ui.owner to obtain reference to igCombo.
				Use ui.expression to obtain reference to array which contains expressions supported by $.ig.DataSource.
				Each expression-item contains following members: fieldName (textKey), cond (filteringCondition), expr (value/string to filter).
			*/
			filtering: null,
			/* cancel="false" Event which is raised after filtering.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser. That can be null.
				Use ui.owner to obtain reference to igCombo.
				Use ui.expression to obtain reference to array which contains expressions supported by $.ig.DataSource.
				Each expression-item contains following members: fieldName (textKey), cond (filteringCondition), expr (value/string to filter).
			*/
			filtered: null
		},
		css: {
			/* Class applied to the main/top element. Default value is 'ui-igcombo ui-state-default ui-widget ui-corner-all' */
			combo: 'ui-igcombo ui-state-default ui-widget ui-corner-all',
			/* Class applied to the editing element. Default value is 'ui-igcombo-field ui-corner-all' */
			field: 'ui-igcombo-field ui-corner-all',
			/* Class applied to the holder of editing element. Default value is 'ui-igcombo-fieldholder' */
			fieldHolder: 'ui-igcombo-fieldholder',
			/* Class applied to the holder of editing element when direction is rtl. Default value is 'ui-igcombo-fieldholder-rtl ui-corner-right' */
			fieldHolderRTL: 'ui-igcombo-fieldholder-rtl ui-corner-right',
			/* Class applied to the holder of editing element when direction is ltr. Default value is 'ui-igcombo-fieldholder-ltr ui-corner-left' */
			fieldHolderLTR: 'ui-igcombo-fieldholder-ltr ui-corner-left',
			/* Class applied to the main/top element in mouse-over state. Default value is 'ui-igcombo-hover ui-state-hover' */
			hover: 'ui-igcombo-hover ui-state-hover',
			/* Class applied to the main/top element in focus state. Default value is 'ui-igcombo-focus ui-state-focus' */
			focus: 'ui-igcombo-focus ui-state-focus',
			/* Class applied to the editing element in mouse-over state. Default value is 'ui-igcombo-field-hover' */
			fieldHover: 'ui-igcombo-field-hover',
			/* Class applied to the editing element in focus state. Default value is 'ui-igcombo-focus' */
			fieldFocus: 'ui-igcombo-field-focus',
			/* Classes applied to the main/top element in disabled state. Default value is 'ui-igcombo-disabled ui-state-disabled' */
			disabled: 'ui-igcombo-disabled ui-state-disabled',
			/* Class applied to the element while editor waits for response from server on request to filter data. That has effect only when option "filteringType" is set to "remote". Default value is 'ui-igcombo-waitfiltering' */
			waitFiltering: 'ui-igcombo-waitfiltering',
			/* Class applied to the editing element when it has no value. Default value is 'ui-igedit-nullvalue' */
			nullText: 'ui-igcombo-nulltext',
			/* Class applied to the SPAN element which represents dropdown button. Default value is 'ui-igcombo-button ui-state-default' */
			button: 'ui-igcombo-button ui-state-default',
			/* Class applied to the SPAN element which represents dropdown button when direction is rtl. Default value is 'ui-igcombo-button-rtl ui-corner-left' */
			buttonRTL: 'ui-igcombo-button-rtl ui-corner-left',
			/* Class applied to the SPAN element which represents dropdown button when direction is ltr. Default value is 'ui-igcombo-button-ltr ui-corner-right' */
			buttonLTR: 'ui-igcombo-button-ltr ui-corner-right',
			/* Classes applied to the SPAN element of dropdown button when editor has focus. Default value is 'ui-igcombo-button-focus' */
			buttonFocus: 'ui-igcombo-button-focus',
			/* Classes applied to the SPAN element of dropdown button in mouse-over state. Default value is 'ui-igcombo-button-hover ui-state-hover' */
			buttonHover: 'ui-igcombo-button-hover ui-state-hover',
			/* Classes applied to the SPAN element of dropdown button in pressed state. Default value is 'ui-igcombo-button-pressed ui-state-highlight' */
			buttonPressed: 'ui-igcombo-button-pressed ui-state-highlight',
			/* Classes applied to the SPAN element which represents image on dropdown button. Default value is 'ui-igcombo-button-icon ui-icon-triangle-1-s ui-icon' */
			buttonIcon: 'ui-igcombo-buttonicon ui-icon-triangle-1-s ui-icon',
			/* Class applied to the SPAN element which represents clear button. Default value is 'ui-igcombo-clear' */
			clear: 'ui-igcombo-clear',
			/* Classes applied to the SPAN element of clear button in mouse-over state. Default value is 'ui-igcombo-clear-hover ui-state-hover' */
			clearHover: 'ui-igcombo-clear-hover ui-state-hover',
			/* Classes applied to the SPAN element of clear button in pressed state. Default value is 'ui-igcombo-clear-pressed ui-state-highlight' */
			clearPressed: 'ui-igcombo-clear-pressed ui-state-highlight',
			/* Classes applied to the SPAN element of clear button when editor has focus. Default value is 'ui-igcombo-clear-focus' */
			clearFocus: 'ui-igcombo-clear-focus',
			/* Class applied to the SPAN element which represents image on clear button. Default value is 'ui-igcombo-clearicon ui-icon-circle-close ui-icon' */
			clearIcon: 'ui-igcombo-clearicon ui-icon-circle-close ui-icon',
			/* Class applied to the SPAN element which represents checkbox in list item. Default value is 'ui-state-default ui-corner-all ui-igcombo-checkbox ui-igcheckbox-small' */
			checkbox: 'ui-state-default ui-corner-all ui-igcombo-checkbox ui-igcheckbox-small',
			/* Class applied to the SPAN element which represents checkbox in mouser over state. Default value is 'ui-state-hover ui-igcombo-checkbox-hover' */
			checkboxHover: 'ui-state-hover ui-igcombo-checkbox-hover',
			/* Class applied to the SPAN element which represents icon of checkbox in mouser over state. Default value is 'ui-state-hover ui-igcombo-checkboxicon-hover' */
			checkboxIconHover: 'ui-state-hover ui-igcombo-checkboxicon-hover',
			/* Class applied to the SPAN element which represents icon in unchecked checkbox. Default value is 'ui-icon ui-igcombo-checkbox-off ui-igcheckbox-small-off' */
			checkboxOff: 'ui-icon ui-igcombo-checkbox-off ui-igcheckbox-small-off',
			/* Class applied to the SPAN element which represents icon in unchecked checkbox. Default value is 'ui-icon ui-icon-check ui-igcombo-checkbox-on ui-igcheckbox-small-on' */
			checkboxOn: 'ui-icon ui-icon-check ui-igcombo-checkbox-on ui-igcheckbox-small-on',
			/* Class applied to the DIV element which is used as container for dropdown list. Default value is 'ui-igcombo-list ui-widget ui-widget-content ui-corner-all' */
			list: 'ui-igcombo-list ui-widget ui-widget-content ui-corner-all',
			/* Class applied to the UL element which is used as container for list items. Default value is 'ui-igcombo-listitemholder' */
			listItemHolder: 'ui-igcombo-listitemholder',
			/* Class applied to the LI element which represents item in dropdown list. Default value is 'ui-igcombo-listitem ui-state-default' */
			listItem: 'ui-igcombo-listitem ui-state-default',
			/* Class applied to the LI element which represents item in dropdown list with mouse-over state. Default value is 'ui-igcombo-listitem-hover ui-state-hover' */
			listItemHover: 'ui-igcombo-listitem-hover ui-state-hover',
			/* Class applied to the LI element which represents active item in dropdown list. Default value is 'ui-igcombo-listitem-active ui-state-active' */
			listItemActive: 'ui-igcombo-listitem-active ui-state-active',
			/* Class applied to the LI element which represents selected item in dropdown list. Default value is 'ui-igcombo-listitem-selected ui-state-highlight' */
			listItemSelected: 'ui-igcombo-listitem-selected ui-state-highlight',
			/* Class applied to the text in item which matches with current value in field. Default value is 'ui-igcombo-listitem-match' */
			listItemMatch: 'ui-igcombo-listitem-match',
			/* Class applied to the SPAN element which represents text of item in dropdown list when checkboxes are enabled. Default value is 'ui-igcombo-listitemtextwithcheckbox' */
			listItemTextWithCheckbox: 'ui-igcombo-listitemtextwithcheckbox',
			/* Class applied to the main element when list is above editor and to list when list is below editor. Default value is 'ui-igcombo-no-top-corners' */
			noTopCorners: 'ui-igcombo-no-top-corners',
			/* Class applied to the main element when list is below editor and to list when list is above editor. Default value is 'ui-igcombo-no-bottom-corners' */
			noBottomCorners: 'ui-igcombo-no-bottom-corners'
		},
		/* Number of records in igCombo (view of dataSource) */
		RECORDS_VIEW: '{0}',
		/* Number of records in dataSource */
		RECORDS_DATA: '{1}',
		/* Number of (filtered) records on server */
		RECORDS_SERVER: '{2}',
		/* Number of all records on server */
		RECORDS_SERVER_TOTAL: '{3}',
		_create: function () {
			var name, evts, inp, i, len, clear, but, sel, txt, fieldHolder, touch,
				me = this,
				o = me.options,
				css = me.css,
				elem = me.element,
				selItems = o.selectedItems,
				fl = 'float',
				field = elem,
				rtl = elem.css('direction') === 'rtl',
				oldC = { display: 0, visibility: 0, position: 0 },
				oldA = { title: 0 };
			me._data = [];
			me._rtl = rtl;
			me._lastScroll = me._virtualTop = me._topID = 0;
			me._changeID = me._activeID = me._scrollTo = -1;
			i = me._noMouse() ? null : o.renderMatchItems;
			me._matchFlag = (i && i !== 'none') ? i : null;
			if (selItems && selItems.length === 1 && selItems[0].index === -1 && selItems[0].value === null) {
				o.selectedItems = selItems = null;
			}
			name = elem[0].nodeName;
			if (name) {
				name = name.toUpperCase();
			}
			inp = name === 'INPUT';
			me._SELECT = sel = name === 'SELECT';
			// old attributes which can be modified and used in destroy (no MVC)
			if (!o.inputName) {
				me._oldCss = oldC;
				me._oldAttr = oldA;
			}
			if (inp) {
				// extra old attributes of INPUT
				oldA.value = oldA.disabled = oldA.readOnly = oldA.alt = oldA.tabIndex = oldC.textAlign = oldC.position = oldC.overflow = oldC[fl] = 0;
			} else if (sel) {
				if (!o.dataSource) {
					sel = elem[0].options;
					len = sel.length;
					if (!selItems || selItems.length === 0) {
						clear = selItems = o.selectedItems = [];
					}
					o.dataSource = [];
					o.valueKey = 'value';
					o.textKey = 'text';
					for (i = 0; i < len; i += 1) {
						txt = sel[i].text || sel[i].innerHTML;
						o.dataSource[i] = { value: sel[i].value || txt, text: txt };
						// fill selected items
						if (clear && (i === elem[0].selectedIndex || sel[i].selected)) {
							selItems.push({ index: i });
						}
					}
				}
			} else {
				if (name !== 'DIV' && name !== 'SPAN') {
					throw new Error(name + ' is not supported as base element');
				}
				// extra old attributes of SPAN/DIV/etc.
				oldA.innerHTML = 0;
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
			// Note: do not use css('width/height')
			oldC.width = elem[0].style.width;
			o.width = o.width || oldC.width;
			oldC.height = elem[0].style.height;
			o.height = o.height || oldC.height;
			if (selItems && selItems.length > 0) {
				txt = '';
			} else if (_aNull(txt = o.text)) {
				// backup if options.value is not set
				if (!elem[0].multiple) {
					// o.inputName: MVC
					txt = o.inputName ? '' : (inp ? oldA.value : (sel ? elem.val() : oldA.innerHTML));
				}
				txt = txt ? txt.replace(/[\x09\x0a]/g, '') : '';
				i = txt.length;
				while ((i -= 1) >= 0) {
					if (txt.charCodeAt(i) === 32) {
						txt = txt.substring(0, i);
					} else {
						break;
					}
				}
			}
			if (inp || sel) {
				me._swap = true;
				elem = $('<span />').css({ position: field.css('position'), left: field.css('left'), top: field.css('top') }).insertBefore(field);
				if (rtl) {
					elem.css('direction', 'rtl');
				}
				if (sel) {
					field.css('display', 'none');
					field = $('<input />');
				}
			} else {
				field = $('<input />');
				// not MVC
				if (!o.inputName) {
					elem.html('');
				}
			}
			me._oldTxt = '';
			me.mainElem = elem;
			i = elem.css('position');
			me._static = !i || i === 'static';
			elem.css('overflow', 'hidden');
			me._fieldHolder = fieldHolder = $('<span />').addClass(css.fieldHolder).addClass(rtl ? css.fieldHolderRTL : css.fieldHolderLTR).css('float', rtl ? 'right' : 'left').appendTo(elem);
			me.fieldElem = field.appendTo(fieldHolder).addClass(css.field).css('float', rtl ? 'right' : 'left').bind(me._evts = {
				keydown: function (e) { me._onKey(e, 0); },
				keypress: function (e) { me._onKey(e, 1); },
				keyup: function (e) { me._onKey(e, 2); },
				focus: function (e) { me._onEvt(this, 8, e); },
				blur: function (e) { me._onEvt(this, 9, e); },
				paste: function (e) { me._onChange(e); },
				beforecut: function (e) { me._onChange(e); },
				cut: function (e) { me._onChange(e); },
				drop: function (e) { me._onChange(e); }
			});
			if (!_aNull(i = o.tabIndex)) {
				field.attr('tabIndex', i);
			}
			field[0].disabled = o.disabled;
			field[0].readOnly = (this._mode(o) > 0) ? 'readonly' : '';
			elem.addClass(css.combo).css('display', 'inline-block').bind(me._elemEvts = {
				MSPointerOver: function (e) { me._onEvt(this, 26, e); },
				mouseover: function (e) { me._onEvt(null, 6, e); },
				mouseleave: function (e) { me._onEvt(null, 7, e); }
			});
			me._mEvts = evts = {
				mousedown: function (e) { me._onEvt(this, 3, e); },
				mouseup: function (e) { me._onEvt(this, 4, e); },
				MSPointerOver: function (e) { me._onEvt(this, 26, e); },
				mouseover: function (e) { me._onEvt(this, 6, e); },
				mouseleave: function (e) { me._onEvt(this, 7, e); }
			};
			// get around bugs in Android: process and stop all touch events over buttons, checkboxes and their icons
			me._tEvts = touch = {
				touchstart: function (e) { _stop(e); },
				touchmove: function (e) { _stop(e); },
				touchend: function (e) { _stop(e); $(this).trigger('mousedown').trigger('mouseup'); }
			};
			// create buttons
			me.buttonElem = but = _notab($('<span />').addClass(css.button)
				.addClass(rtl ? css.buttonRTL : css.buttonLTR).css('float', rtl ? 'left' : 'right')
				.attr('data-id', 1).appendTo(elem).bind(evts).bind(touch));
			_notab($('<span />').addClass(css.buttonIcon).appendTo(but).bind(touch));
			me.clearElem = clear = _notab($('<span />').addClass(css.clear).css('float', rtl ? 'left' : 'right')
				.attr('data-id', 2).appendTo(fieldHolder).bind(evts).bind(touch));
			_notab($('<span />').addClass(css.clearIcon).appendTo(clear).bind(touch));
			me._titles();
			me.validator();
			me._clearOn = false;
			me._doSize();
			i = me._cascade();
			if (i) {
				// failure to find cascading parent combo or parent did not have data
				if (i !== true) {
					if (typeof i === 'string') {
						i = i.replace('#', '');
					}
					// set request to call this._cascade() when parent combo is ready
					_cascWait = _cascWait || {};
					// note: same parentCombo may have multiple slave combos: use array
					if (_cascWait[i]) {
						_cascWait[i].push(me);
					} else {
						_cascWait[i] = [me];
					}
				}
			} else if (!o.dataBindOnOpen) {
				me.dataBind();
			}
			if (txt) {
				me.text(txt);
			}
			me._canFire = true;
		},
		dropDownVisible: function (showHide, fire) {
			/* Gets sets visibility of drop-down list.
				paramType="bool" optional="true" Value true will show dropdown, false - hide dropdown. 
				paramType="bool" optional="true" Value of true will trigger possible events (such as dropDownOpening, dropDownClosed, etc.)
				returnType="bool|object" If parameter is defined, then returns reference to this igCombo, otherwise, returns true if drop down is visible and false if drop down is hidden.
			*/
			if (!arguments.length) {
				return !!this._ddOn;
			}
			this._canFire = fire;
			this._doDrop(showHide ? 2 : 0);
			this._canFire = true;
			return this;
		},
		remove: function () {
			/* Removes combo from its parent element, but keeps the rest of functionality.
				returnType="object" Returns reference to this igCombo.
			*/
			var p, v = this._validator, e = this.mainElem;
			if (!e || !e[0]) {
				return;
			}
			if (v) {
				v.hide();
			}
			if (this._fcs) {
				// fake blur event
				this._onEvt(null, 9);
			}
			this.fieldElem.removeClass(this.css.fieldHover);
			e.removeClass(this.css.hover);
			p = e[0].parentNode;
			if (p && p.tagName) {
				this._doDrop(0);
				this._fcs = 0;
				p.removeChild(e[0]);
			}
			return this;
		},
		validator: function (destroy) {
			/* Gets reference to igValidator used by igCombo.
				paramType="bool" optional="true" Request to destroy validator.
				returnType="object" Returns reference to igValidator or null.
			*/
			var o = this.options.validatorOptions, field = this.fieldElem, v = this._validator;
			if (v && (destroy || !o)) {
				v.destroy();
				delete this._validator;
			} else if (!v && !destroy && o && field.igValidator) {
				o.combo = o.element = this.mainElem;
				this._validator = field.igValidator(o).data('igValidator');
			}
			return this._validator;
		},
		validate: function () {
			/* Trigger validation.
				returnType="number|object" Possible values:
				1 - application canceled error message.
				2 - error message is displayed.
				Any other value or undefined means that target is valid or validation is not enabled.
			*/
			return this._validator ? this._validator.validate() : null;
		},
		setFocus: function (delay) {
			/* Set focus to combo with possible delay.
				paramType="number" optional="true" Delay in milliseconds. If parameter is missing, then 0 is used. If parameter is -1, then focus is set without delay.
				returnType="object" Returns reference to this igCombo.
			*/
			var me = this;
			if (me.fieldElem && !me._fcs) {
				// called from setTimeout
				if (delay === -1) {
					try {
						me.fieldElem[0].focus();
					} catch (ex) { }
				} else {
					setTimeout(function () {
						me.setFocus(-1);
					}, delay || 0);
				}
			}
			return this;
		},
		hasFocus: function () {
			/* Checks if combo has focus.
				returnType="bool" Returns true if combo has focus.
			*/
			return this._fcs === 1;
		},
		isSelected: function (index) {
			/* Checks if list item at index is selected.
				paramType="number" Index of item.
				returnType="bool" Returns true if item is selected, otherwise, false.
			*/
			var selItems = this.options.selectedItems, len = selItems ? selItems.length : 0;
			while ((len -= 1) >= 0) {
				if (selItems[len].index === index) {
					return true;
				}
			}
			return false;
		},
		selectedIndex: function (index, fire) {
			/* Gets sets index of selected item in list.
				paramType="number" optional="true" New selected index for combo. In order to clear selection, use -1.
				paramType="bool" optional="true" Value of true will trigger possible events (such as selectionChanging, selectionChanged, filtering, etc.)
				returnType="number|object" Returns index of first selected item in list or -1, if parameter is undefined. Otherwise, it returns reference to this igCombo.
			*/
			if (index === undefined) {
				var i, selItems = this.options.selectedItems, len = selItems ? selItems.length : 0;
				index = -1;
				while ((len -= 1) >= 0) {
					i = selItems[len].index;
					index = (index < 0) ? i : Math.min(i, index);
				}
				return index;
			}
			this._canFire = fire || this._cascFire;
			this._select(index);
			this._updateFromList(null, 1);
			this._canFire = true;
			return this;
		},
		activeIndex: function (index, fire) {
			/* Gets sets index of active item in list.
				paramType="number" optional="true" New active index for list. In order to clear active item, use -1.
				paramType="bool" optional="true" Value of true will trigger possible events (such as activeItemChanging and activeItemChanged).
				returnType="number|object" Returns index of active item in list or -1, if parameter is undefined. Otherwise, it returns reference to this igCombo.
			*/
			if (index === undefined) {
				return this._activeID;
			}
			this._canFire = fire;
			this._activate(index);
			this._canFire = true;
			return this;
		},
		value: function (val, fire) {
			/* Gets sets value of first selected item in list (item for valueKey column).
				paramType="object" optional="true" New selected value. In case of enabled multiselection, that parameter may optionally contain multiple formatted string-items separated by itemSeparator.
				paramType="bool" optional="true" Value of true will trigger possible events (such as selectionChanging, selectionChanged, filtering, etc.)
				returnType="string|object" Returns value of first selected item in list if parameter is undefined. Otherwise, it returns reference to this igCombo.
			*/
			if (this._noMouse()) {
				return this.text(val, fire);
			}
			if (val === undefined) {
				val = this.options.selectedItems;
				return (val && val[0]) ? val[0].value : null;
			}
			this._canFire = fire || this._cascFire;
			// Time/Last are used by cascading combo, when value of child is set before value of parent
			this._valTime = _now();
			this._valLast = val;
			this._select(null, val);
			this._updateFromList(null, 1);
			this._canFire = true;
			return this;
		},
		text: function (text, fire) {
			/* Gets sets text text in field.
				paramType="string" optional="true" New text for combo. In case of enabled multiselection, that parameter may optionally contain multiple items separated by itemSeparator.
				paramType="bool" optional="true" Value of true will trigger possible events (such as selectionChanging, selectionChanged, filtering, etc.)
				returnType="string|object" If parameter is undefined, then current text in field is returned. Otherwise, it returns reference to this igCombo.
			*/
			if (text === undefined) {
				text = this.fieldElem.val();
				return (this._nullT && (!text || text === this.options.nullText)) ? '' : text;
			}
			this._canFire = fire || this._cascFire;
			this._select(null, text, 2);
			this._updateFromList(null, 1);
			if (this._custom()) {
				this._onChange(null, null, text);
			}
			this._canFire = true;
			return this;
		},
		values: function (vals) {
			/* Gets sets array of selected values in list (items for valueKey column).
				paramType="array" optional="true" New selected values. Note: change selection events are not raised.
				returnType="array|object" If parameter is undefined, then array of selected values is returned. Otherwise, it returns reference to this igCombo.
			*/
			var o = this.options, selItems = o.selectedItems, i = selItems ? selItems.length : 0;
			if (vals === undefined) {
				vals = [];
				while ((i -= 1) >= 0) {
					vals[i] = selItems[i].value;
				}
				return vals;
			}
			i = vals ? vals.length : 0;
			selItems = [];
			while ((i -= 1) >= 0) {
				selItems[i] = { value: vals[i] };
			}
			o.selectedItems = selItems;
			this._initSel(o);
			return this;
		},
		itemByIndex: function (id) {
			/* Gets object which contains members relative to list-item.
				paramType="number" Index of item within drop-down list.
				returnType="object" The null or object, which contains following members: element- the reference to jquery li or null, index- the id, value- the value of item, text- the text of item.
			*/
			return id < 0 ? null : { element: this._findItem(id), index: id, value: this._item(id), text: this._item(id, 2) };
		},
		itemByValue: function (val) {
			/* Finds index of item by value and returns this.itemByIndex(indexOfItem).
				paramType="object" Value of item in drop-down list.
				returnType="object" The null or object, which contains following members: element- the reference to jquery li or null, index- the id, value- the value of item, text- the text of item.
			*/
			var id = -1;
			while (++id < this._count) {
				if (_equals(val, this._item(id))) {
					return this.itemByIndex(id);
				}
			}
		},
		getFooter: function () {
			/* Gets reference to footer.
				returnType="dom" Return null or jquery object which represents footer.
			*/
			return this.listElem ? this.listElem.find('[data-footer]') : null;
		},
		getDataSource: function () {
			/* Returns current data source used by igCombo.
				returnType="object" Returns reference to $.ig.DataSource.
			*/
			return this._dataSource;
		},
		getData: function () {
			/* Returns array of current records used by igCombo. If filtering is enabled, then that represents filtered data.
				Note: In order to get all records available in DataSource, the igCombo.getDataSource().data() can be used.
				returnType="array" Returns array of records.
			*/
			return this._data;
		},
		getRecordsCount: function (flag) {
			/* Gets number of records in view, dataSource, filtered server data, or total server data.
				paramType="string" Flag RECORD_xx or a number.
				returnType="number" Return number of records according to.
			*/
			var count = this._count, ds = this._dataSource;
			if (flag === this.RECORDS_VIEW || flag === 0) {
				return count;
			}
			if (ds) {
				count = ds._data.length;
				if (flag === this.RECORDS_DATA || flag === 1) {
					return count;
				}
				count = Math.max(ds.totalRecordsCount(), count);
				if (flag === this.RECORDS_SERVER || flag === 2) {
					return count;
				}
				if (flag === this.RECORDS_SERVER_TOTAL || flag === 3) {
					count = Math.max(Math.max(count, this._totalAll || 0), parseInt(this.options._totalAll || 0, 10));
				}
			}
			return count;
		},
		// connect/disconnect cascading combo, process selection of parent combo
		_cascade: function (evt, destroy, combo) {
			var key, i, url,
				me = this,
				val = me._parentCombo,
				o = me.options,
				ds = o.cascadingDataSources,
				old = me._cascOpt,
				parent = combo || o.parentCombo;
			combo = evt ? val : parent;
			if (val && !evt) {
				// remove request to raise events by parent
				key = val._cascFire;
				i = key ? key.length : 0;
				while (i-- > 0) {
					if (key[i] === me) {
						key.splice(i, 1);
						if (key.length === 0) {
							delete val._cascFire;
						}
						break;
					}
				}
				delete me._parentCombo;
				delete me._cascFilter;
				if (destroy) {
					return;
				}
				if (old) {
					o.valueKey = old.value;
					o.textKey = old.text;
					o.dataSource = old.ds;
					o.dataSourceUrl = old.url;
					if (!combo) {
						me.dataBind();
					}
				}
			}
			if (!combo || destroy) {
				return;
			}
			if (evt) {
				delete me._cascSel;
				me.selectedIndex(-1);
				me.activeIndex(-1);
			} else {
				if (!ds) {
					key = o.parentComboKey;
					if (!key) {
						return;
					}
					if (o.filteringType === 'remote') {
						me._cascFilter = -1;
					} else {
						o.filteringType = 'local';
						me._cascFilter = 1;
					}
					me._cascKey = key;
					// request to skip _dataChange triggered by explicit dataBind()
					url = o.dataSource ? null : o.dataSourceUrl;
				}
				if (typeof combo === 'string' || combo.nodeName) {
					combo = $(parent);
					if (combo.length !== 1) {
						combo = $('#' + parent);
						if (combo.length !== 1) {
							return parent;
						}
					}
				}
				if (combo && combo[0] && typeof combo.data === 'function') {
					parent = combo[0];
					combo = combo.data('igCombo');
				}
				if (!combo || combo.widgetName !== 'igCombo' || combo === me || !combo._hasData) {
					return parent;
				}
				// _cascFire request to raise events by parent, when its value/text/selectedIndex is modified from codes
				// that is array of cascading combos which should get selectionChanged
				key = combo._cascFire;
				i = key ? key.length : 0;
				while (i-- > 0) {
					if (key[i] === me) {
						break;
					}
				}
				if (i < 0) {
					combo._cascFire = key = key || [];
					key.push(me);
				}
				me._parentCombo = combo;
				if (!old && ds) {
					old = me._cascOpt = {
						value: o.valueKey,
						text: o.textKey,
						ds: o.dataSource,
						url: o.dataSourceUrl
					};
				}
			}
			val = combo.options.selectedItems;
			val = (val && val.length > 0) ? val[0].value : null;
			// check if value was set before dataSource and set flag (_valTime=1), which will trigger set-value again after data is ready
			if (me._valTime && _now() - me._valTime < 200) {
				me._valTime = 1;
			}
			if (ds) {
				ds = val === null ? null : ds[val];
				// reconfigure all data-related options for a cascading dataSource
				val = ds ? ds.valueKey : null;
				o.valueKey = val || old.value;
				val = ds ? ds.textKey : null;
				o.textKey = val || old.text;
				o.dataSourceUrl = url = ds ? ds.dataSourceUrl : null;
				// if ds is array, then assume that is already dataSource
				o.dataSource = ds ? (ds.dataSource || (ds.length && !url ? ds : null)) : null;
				me._hasData = false;
				me._urlBind = me._lod = me._totalAll = o._totalAll = me._count = 0;
				// request to skip _dataChange triggered by explicit dataBind(): helps to keep server-selection
				me._cascUrl = url;
				// _cascSel: save selected value and use it to reinit selectedItems when data comes from dataSourceUrl
				if (url) {
					val = o.selectedItems;
					me._cascSel = val ? (val[0] ? val[0].value : null) : null;
				}
				me.dataBind();
				// remove request to skip _dataChange
				delete me._cascUrl;
			} else {
				me._cascVal = val;
				if (me._hasData) {
					me.filter();
				} else {
					// request to skip _dataChange triggered by explicit dataBind(): helps to keep server-selection
					me._cascUrl = url;
					me.dataBind();
					// remove request to skip _dataChange
					delete me._cascUrl;
				}
			}
			return true;
		},
		_noMouse: function () {
			var o = this.options, ds = o.dataSource;
			o = o.itemTemplate;
			return o && ds && ds.length === 1 && o.indexOf('{') < 0 && o.indexOf('}') < 0;
		},
		_custom: function () {
			return this.options.allowCustomValue || this._noMouse();
		},
		_multi: function (o) {
			o = o.multiSelection;
			return o && o !== 'off';
		},
		_checkBox: function (o) {
			o = o.multiSelection;
			return (o === 2) || (o && o.toLowerCase && o.toLowerCase() === 'onwithcheckboxes');
		},
		// editable:0, dropdown:1, readonlylist:2, readonly:3
		_mode: function (o) {
			o = o.mode;
			return (o === 1 || o === 'dropdown') ? 1 : ((o === 2 || o === 'readonlylist') ? 2 : ((o === 3 || o === 'readonly') ? 3 : 0));
		},
		_fixSelElem: function (elem, sel) {
			var css = this.css, icon = css.listItemSelected, iconOut = css.checkboxOff;
			if (sel) {
				elem.addClass(icon);
			} else {
				elem.removeClass(icon);
			}
			if (elem.attr('data-check')) {
				elem[0]._check = sel;
				icon = css.checkboxOn;
				elem.find('[data-icon]').removeClass(sel ? iconOut : icon).addClass(sel ? icon : iconOut);
			}
		},
		_copyA: function (a) {
			var len = a ? a.length : 0, a1 = len ? [] : null;
			while ((len -= 1) >= 0) {
				a1[len] = a[len];
			}
			return a1;
		},
		_clearSel: function () {
			var elems = this._selElems, i = elems ? elems.length : 0;
			while ((i -= 1) >= 0) {
				this._fixSelElem(elems[i]);
			}
			this._selElems = null;
		},
		_selChanged: function (e) {
			if (this._selArg) {
				// notify cascading combos before raising public event
				var elem, o, selItems,
					key = this._cascFire,
					i = key ? key.length : 0;
				while (i-- > 0) {
					key[i]._cascade(true);
				}
				this._fire('selectionChanged', e, this._selArg);
				if (this._SELECT) {
					elem = this.element[0];
					o = elem.options;
					selItems = this.options.selectedItems;
					i = selItems ? selItems[0] : null;
					i = i ? i.index : -1;
					elem.selectedIndex = i;
					if (o && i >= 0 && i < o.length) {
						o[i].selected = true;
					}
					if (elem.onchange) {
						elem.onchange();
					}
				}
				delete this._selArg;
			}
		},
		_selChange: function (selItems, e, clear, noReturn) {
			var i,
				old = this.options.selectedItems,
				i0 = old ? old.length : 0,
				i1 = selItems ? selItems.length : 0;
			if (!i1) {
				selItems = null;
			}
			// check if selection was modified: old and new selection may have different order, but same items
			if (i0 === i1) {
				while (i0-- > 0) {
					for (i = 0; i < i1; i += 1) {
						if (noReturn) {
							if (old[i0].value === selItems[i].value && old[i0].text === selItems[i].text) {
								break;
							}
						} else if (old[i0].index === selItems[i].index) {
							break;
						}
					}
					// no match found: flag to raise selectionChanging
					if (i === i1) {
						break;
					}
				}
			}
			// if (i0 < 0) then selectedItems were not modified
			// if no data or waiting for first remote filtering, then do not raise events
			old = (i0 >= 0 && this._hasData && !this._waitFilter) ? { owner: this, oldItems: old, items: selItems } : null;
			delete this._selArg;
			if (old && !this._fire('selectionChanging', e, old) && !noReturn) {
				return;
			}
			this._selTime = (e && this.options.focusOnSelect === false) ? _now() : 0;
			this._selArg = old;
			if (clear || !i1) {
				this._clearSel();
			}
			this.options.selectedItems = selItems;
			this._noFilter = selItems && selItems.length;
			return 1;
		},
		_addSel: function (id, e) {
			if (id >= 0 && !this.isSelected(id)) {
				var selItems = this._copyA(this.options.selectedItems);
				id = this._createSelItem(id);
				if (!selItems) {
					selItems = [id];
				} else {
					selItems.push(id);
				}
				if (this._selChange(selItems, e)) {
					this._selChanged(e);
				}
			}
			return this.options.selectedItems;
		},
		_sepEnd: function (txt) {
			var sep = this._sep(), len = txt.length;
			return len > 1 && txt.lastIndexOf(sep) === len - sep.length;
		},
		// id: new selected index (can be null)
		// val: new value (can be null)
		// flag==2: flag to set text in field
		// part: field was changed by user (request for partial match)
		_select: function (id, val, flag, part, e) {
			var vals, lenVals, txt, j, cond, ds, selItems = null,
				scrollID = -1,
				actID = -1,
				i = -1,
				o = this.options, more = 1,
				count = this._count,
				act = part ? (o.allowCustomValue ? 2 : 1) : null,// && !o.autoComplete,
				sep = false,
				lower = !o.caseSensitive && typeof val === 'string';
			if (e && part && !this._ddOn && e.type !== 'mouseup') {
				this._doDrop(1, e);
			}
			if (this._noMouse()) {
				return;
			}
			if (act) {
				this._changeID = -1;
			}
			if (!_aNull(val) && val !== '') {
				if (flag === 2) {
					val = val.toString();
				}
				vals = (typeof val === 'string') ? this._texts(val) : (val.length ? val : [val]);
				if ((lenVals = vals.length) > 0) {
					j = vals[lenVals - 1];
					if (!j && (flag === 2 || _aNull(j))) {
						if (act === 1) {
							sep = this._sepEnd(val);
						}
						vals.splice(lenVals -= 1, 1);
					}
				}
				if (lenVals === 0) {
					this._selChange(selItems, e, 1, 1);
					this._selChanged(e);
					return;
				}
				// containers of items with .id and .done members which correspond to vals
				while ((i += 1) < lenVals) {
					vals[i] = { val: vals[i], id: -1, done: null };
				}
				if (!this._isStrCond(cond = this._cond(o))) {
					cond = 'startsWith';
				}
				ds = this._dataSource;
				id = -1;
				while ((id += 1) < count && more) {
					if (_aNull(txt = this._item(id, flag))) {
						continue;
					}
					if (lower) {
						txt = txt.toString().toLowerCase();
					}
					more = null;
					for (i = 0; i < lenVals; i += 1) {
						if (!vals[i].done) {
							more = 1;
							val = vals[i].val;
							if (val === txt || (part && ds._findMatch(txt, val, 'string', false, cond))) {
								// check if item is already selected
								j = i;
								while ((j -= 1) >= 0) {
									if (vals[j].id === id) {
										break;
									}
								}
								// activate only unselected item
								if (act && j >= 0) {
									continue;
								}
								if (act && i + 1 === lenVals && !sep) {
									if (actID < 0) {
										this._changeID = scrollID = actID = id;
										if (act === 1 && !o.enableActiveItem) {
											vals[i].id = id;
										}
									}
								} else if (vals[i].id < 0) {
									vals[i].id = id;
								}
								if (act !== 1 && (val === txt || !part)) {
									vals[i].id = id;
									vals[i].done = 1;
								}
							}
						}
					}
				}
				selItems = [];
				for (i = 0; i < lenVals; i += 1) {
					if ((id = vals[i].id) >= 0 && act !== 2) {
						if (scrollID < 0) {
							scrollID = id;
						}
						j = selItems.length;
						while ((j -= 1) >= 0) {
							if (selItems[j].index === id) {
								break;
							}
						}
						if (j < 0 && (this._multi(o) || selItems.length === 0)) {
							selItems.push(this._createSelItem(id));
						}
					}
				}
			} else if (typeof id === 'number' && id >= 0 && id < count) {
				selItems = [this._createSelItem(scrollID = id)];
			}
			if (this._selChange(selItems, e, 1)) {
				if (scrollID >= 0) {
					this._fixSelScroll(this._scrollTo = scrollID);
					if (sep) {
						this._updateFromList(e, 1, 1);
					}
				}
				this._selChanged(e);
			}
			if (act) {
				this._activate(actID, e);
			}
		},
		_createSelItem: function (id, txt, val) {
			return { index: id, value: val || this._item(id), text: txt || this._item(id, 2) };
		},
		// id: index of item
		// valHtmlText: flag, 0/null-value, 1-text/html for rendering, 2-value of textKey
		_item: function (id, valHtmlText) {
			var val, i, txtVal, format, tags, j,
				o = this.options,
				key = this._keyVal,
				row = this._data[id];
			if (valHtmlText) {
				key = this._key;
			}
			if (!row) {
				return valHtmlText ? '' : null;
			}
			val = row[key];
			if (!valHtmlText) {
				return val;
			}
			format = format || o.format;
			if (format) {
				if (_aNull(txtVal = row[i = key + '_'])) {
					if (_aNull(val)) {
						val = '';
					} else if ($.ig && $.ig.formatter && (typeof val === 'number' || (val && val.getMonth))) {
						val = $.ig.formatter(val, null, (format === 'auto' || format === true) ? null : format);
					} else {
						val = val.toString();
					}
					row[i] = val;
				} else {
					val = txtVal;
				}
			} else {
				val = _aNull(val) ? '' : val.toString();
			}
			if (valHtmlText !== 1) {
				return val;
			}
			i = o.itemTemplate;
			if (i && $.ig.tmpl) {
				val = this._q;
				if (!val) {
					val = this._q = $('<div />');
				}
				if (!this._it) {
					if ($.browser.msie && i.indexOf('unselectable') < 0) {
						tags = ['<div', '<span', '<img', '<a', '<td', '<li'];
						j = tags.length;
						while (j-- > 0) {
							i = i.replace(new RegExp(tags[j], 'gi'), tags[j] + ' unselectable="on"');
						}
					}
					this._it = i;
				}
				return val.html($.ig.tmpl(this._it, row)).html();
			}
			if (val === '') {
				return '&nbsp;';
			}
			i = this._matchFlag;
			return i ? this._renderMatches(val, o, i) : val;
		},
		// find matches of txt inside of html
		// and render those matches with css.listItemMatch class
		// html: text of list item
		// o: options
		// match: o.renderMatchItems
		_renderMatches: function (html, o, match) {
			var index, i, lenMatch, len, lenIndex,
				val = o.caseSensitive ? html : html.toLowerCase(),
				minIndex = 0,
				shift = 0,
				matches = [],
				txts = this._textsTemp || this._texts(1),
				lenTxt = txts.length;
			// fill-up matches by items with members .index(indexOfMatch) and .len(lengthOfMatch)
			while (minIndex < 99999) {
				i = -1;
				minIndex = 99999;
				len = val.length;
				// find which text has first match (smallest value of indexOf)
				while ((i += 1) < lenTxt) {
					index = val.indexOf(txts[i]);
					lenMatch = txts[i].length;
					if (index >= 0 && index < minIndex && (index === 0 || match !== 'startsWith') && !(match === 'full' && len !== lenMatch) && lenMatch) {
						// index of match
						minIndex = index;
						// length of match
						lenIndex = lenMatch;
					}
				}
				if (minIndex < 99999) {
					// fill array with match
					matches.push({ index: shift += minIndex, len: lenIndex });
					// remove text of match and all in front of it from val
					val = val.substring(minIndex + lenIndex);
					// adjustment for position of next match in old html
					shift += lenIndex;
				}
				if (match !== 'multi' || shift >= len) {
					break;
				}
			}
			// insert SPANs with listItemMatch css for found matches
			for (i = matches.length - 1; i >= 0; i -= 1) {
				index = matches[i].index;
				len = matches[i].len;
				html = html.substring(0, index) + '<span class="' + this.css.listItemMatch + '">' + html.substring(index, index + len) + '</span>' + html.substring(index + len);
			}
			return html;
		},
		_renderRow: function (id, repaint) {
			var txt, elem, box, i, top, cell,
				me = this,
				itemWidth = me._itemWidth,
				o = me.options,
				checkBoxes = me._checkBox(o),
				cbWidth = me._cbWidth || 0,
				html = me._html,
				lod = me._lodWait && !html;
			if (lod) {
				if (me._findItem(id + me._virtualTop)) {
					return;
				}
				repaint = false;
			}
			if (html) {
				repaint = false;
				if (!me._data[id]) {
					return;
				}
				html += '<li tabIndex="-1" class="' + me.css.listItem + '" style="width:';
				html += itemWidth + 'px;height:' + me._itemHeight + 'px" unselectable="on" data-id="' + (id + _listIDShift) + '"';
			} else if (!repaint) {
				elem = $('<li />').addClass(me.css.listItem)
					.css({ width: itemWidth, height: me._itemHeight })
					.attr('data-id', id + _listIDShift)
					.attr('tabIndex', -1)
					.attr('unselectable', 'on')
					.appendTo(me._itemsHolder);
				if (checkBoxes) {
					box = $('<span />').attr('data-box', 'x').attr('unselectable', 'on')
						.css('top', (me._cbTop || 0) + 'px')
						.addClass(me.css.checkbox)
						.appendTo(elem.attr('data-check', 'x'));
					$('<span />').attr('data-icon', 'x').attr('unselectable', 'on').addClass(me.css.checkboxOff).appendTo(box);
					if (!cbWidth) {
						me._cbWidth = cbWidth = box[0].offsetWidth;
					}
					cell = $('<span />').attr('data-txt', 'x').attr('unselectable', 'on')
						.addClass(me.css.listItemTextWithCheckbox)
						.css(me._rtl ? 'marginRight' : 'marginLeft', (Math.max(cbWidth, 14) + 3) + 'px')
						.prependTo(elem);
				} else {
					elem.attr('data-txt', 'x');
				}
			}
			id += me._virtualTop;
			if (repaint) {
				elem = this._findItem(id);
				if (!elem) {
					return;
				}
				if (!o.virtualization && !me._matchFlag) {
					return elem;
				}
			}
			txt = me._item(id, 1);
			if (html) {
				if (checkBoxes) {
					html += ' data-check="x"><span unselectable="on" data-txt="x" style="' + (me._rtl ? 'margin-right:' : 'margin-left:') +
						(Math.max(cbWidth, 14) + 3) + 'px;" class="' + me.css.listItemTextWithCheckbox + '">' + txt + '</span>';
					html += '<span unselectable="on" data-box="x" style="top:' + (me._cbTop || 0) + 'px" class="' + me.css.checkbox;
					html += '"><span unselectable="on" data-icon="x" class="' + me.css.checkboxOff + '"></span></span>';
				} else {
					html += ' data-txt="x">' + txt;
				}
				me._html = html + '</li>';
			} else if (!me._data[id]) {
				elem.hide();
				// possible trailing item under virtualization
				cell = me._findItem(id + 1);
				if (cell) {
					cell.hide();
				}
			} else if (elem[0]._old !== txt) {
				elem[0]._old = txt;
				// container of item-text
				cell = elem.find('[data-txt]');
				if (cell.length === 0) {
					cell = elem;
				}
				if (txt !== cell[0].innerHTML) {
					cell.html(txt);
				}
				// calculate top position of checkbox: align to middle
				if (checkBoxes && _aNull(me._cbTop)) {
					// checkbox
					box = elem.find('[data-box]');
					if (box[0] && (top = elem[0].clientHeight) > 0 && (i = box[0].offsetHeight) > 0) {
						if (i >= top) {
							elem.css('height', top = i + 1);
						}
						me._cbTop = Math.max((top - i - 1) / 2, 0);
					}
				}
				elem.show();
			}
			if (lod) {
				me._bindLIs(o, elem);
			}
			return elem;
		},
		_isCheckBox: function (elem) {
			return elem && (elem.getAttribute('data-box') || elem.parentNode.getAttribute('data-box'));
		},
		// sets nullText if control has no focus and adjusts nullTextCss
		_fixNull: function (clear) {
			var txt, nullTxt = this.options.nullText;
			if (!nullTxt && !this._nullT) {
				return;
			}
			txt = this.text();
			if (!clear && txt === '' && nullTxt && !this._fcs) {
				this._nullT = true;
				this.fieldElem.addClass(this.css.nullText).val(nullTxt);
			} else if (this._nullT) {
				this._nullT = null;
				this.fieldElem.removeClass(this.css.nullText).val('');
			}
		},
		// fill up visible rows in drop-down
		_onScroll: function (e) {
			var elem, selItems, selID, selLen, id, top, ds,
				me = this,
				count = me._count,
				itemHeight = me._itemHeightOuter,
				dd = me._ddScroll || me._ddCont;
			if (!dd || !me._ddOn || count < 2 || me._lodWait) {
				return;
			}
			// first visible item
			id = Math.floor((top = dd[0].scrollTop) / itemHeight);
			if (e) {
				me._lastScroll = top;
			}
			// index of top item
			top = Math.floor(me._lastScroll / itemHeight + 0.4);
			if (me._lod && top > count - me._page * 1.5) {
				ds = me._dataSource;
				top = ds.pageIndex();
				if (top + 1 < ds.pageCount()) {
					me._wait(me._lodWait = true);
					ds.pageIndex(top + 1);
					return;
				}
			}
			// verify that (virtual) scroll did not go too far:
			// number of remaining items is not less than numbers of items which fit in visible area
			me._topID = top = Math.max(0, Math.min(top, count - Math.floor(dd[0].offsetHeight / itemHeight)));
			// repaint all items in list
			if (me._ddScroll) {
				// remove active css from current active item
				me._fixActive(me._activeID);
				count = me._page + 1;
				me._virtualTop = top;
				// update text/innerHtml of list items
				selItems = me.options.selectedItems;
				selLen = selItems ? selItems.length : 0;
				me._selElems = [];
				while ((count -= 1) >= 0) {
					elem = me._renderRow(count, 1);
					// update css of selected list items
					if (elem) {
						for (selID = 0; selID < selLen; selID += 1) {
							if (selItems[selID].index === count + top) {
								me._selElems.push(elem);
								me._fixSelElem(elem, 1);
								break;
							}
						}
						if (selID >= selLen) {
							me._fixSelElem(elem);
						}
					}
				}
				// restore active css for current active item
				me._fixActive(me._activeID, 1);
			} else {
				me._repaintList();
			}
		},
		_lodLbl: function () {
			var i = -1, dd = this.listElem;
			while (i++ < 3 && this._lodFoot && dd) {
				dd.find('[data-lod' + i + ']').html(this.getRecordsCount(i));
			}
		},
		_touch: function (act) {
			var scroll, dd = this._ddCont;
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
		// if element was moved, then close drop-down list
		_xyCheck: function (stop) {
			var xy = this._xy, xyE = this.mainElem;
			if (!xy) {
				return;
			}
			if (xyE) {
				xyE = _offset(xyE);
				if (Math.abs(xyE.left - xy.x) > 2 || Math.abs(xyE.top - xy.y) > 2) {
					stop = true;
				}
			}
			if (stop || !xyE) {
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
		// show/hide/create drop-down list
		// show: 0-hide, 1-toggle, 2-show
		_doDrop: function (show, e, repaint) {
			var height, needScroll, winHeight, y, bodyElem, row1st, rowLast, max, end, step, docElem,
				xy, effect, width, body, i, duration, arg, listWidth, footer,
				me = this,
				lod = me._lod,
				lodWait = me._lodWait,
				up = me._listUp,
				extraHeight = me._extraHeight || 0,
				ddCont = me._ddCont,
				o = me.options,
				rtl = me._rtl,
				virtual = o.virtualization,
				dd = me.listElem,
				itemsHolder = me._itemsHolder,
				ddScroll = me._ddScroll,
				elem = me.mainElem,
				dif = me._ddItemBorderFix,
				on = me._ddOn,
				count = me._count,
				itemHeightOuter = me._itemHeightOuter;
			repaint = repaint || me._listChanged;
			// editable:0, dropdown:1, readonlylist:2, readonly:3
			if (me._mode(o) > 2) {
				show = 0;
			}
			if ((!show && !on) || (show === 2 && on)) {
				return;
			}
			if (!repaint && on && show && _now() - on < 100) {
				return;
			}
			show = show ? (repaint || !on) : false;
			// check for failed validation of igEditor
			if (me._vAct(show ? 'drop' : 'hide')) {
				return;
			}
			if (!itemHeightOuter && count && show) {
				repaint = true;
			}
			if (!me._hasData) {
				if (show && o.dataBindOnOpen && !me._dataSource) {
					me.dataBind();
					setTimeout(function () {
						me._doDrop(2, e);
					}, 0);
				}
				return;
			}
			// row1st: reference to _noResults (noMatchFoundText) element
			if (count < 1 && me._filtering) {
				row1st = me._noResults;
				if (!row1st) {
					me._noResults = row1st = _notab($('<li />').css({ width: '100%', textAlign: 'center' }).addClass(me.css.listItem).html(me._locale('noMatchFoundText') || '&nbsp;'));
				}
			}
			if ((!show || (show && !on)) && !me._fire(show ? 'dropDownOpening' : 'dropDownClosing', e, arg = { owner: me, element: dd || $('<div/>') })) {
				return;
			}
			if (!lodWait && show && me._activeID >= 0 && !me.isSelected(me._activeID) && (i = me.selectedIndex()) >= 0) {
				me._activate(me._scrollTo = i, e, 1);
			}
			body = !o.dropDownAsChild;
			if (!dd) {
				repaint = false;
			}
			// create ensure drop-down list, and recalculate all required members
			if (!dd || repaint) {
				delete me._listChanged;
				if ((width = parseInt(o.dropDownWidth, 10)) < 5 || isNaN(width)) {
					if ((width = elem[0].offsetWidth) < 5) {
						width = 100;
					}
				}
				// create list all its child-containers
				// data-id: _listIDShift-1:drop-down
				if (!dd) {
					dd = me.listElem = ddScroll = ddCont = _notab(arg.element.attr('data-id', _listIDShift - 1).css('position', 'absolute').addClass(me.css.list)
						.bind(me._mEvts).bind({
							DOMMouseScroll: function (e) { me._onEvt(this, 10, e); },
							mousewheel: function (e) { me._onEvt(this, 10, e); }
						}));
					footer = o.footerTemplate;
					if (o.headerTemplate || footer) {
						// get around bugs in Android
						dd.css('overflow', 'hidden');
						if (o.headerTemplate) {
							_notab($('<div/>').attr('data-id', _listIDShift - 1).css({ overflow: 'hidden', position: 'relative' }).html(o.headerTemplate).appendTo(dd));
						}
						ddScroll = ddCont = _notab($('<div/>').attr('data-id', _listIDShift - 1).css('position', 'relative').appendTo(dd));
						if (footer) {
							i = footer;
							footer = footer.replace(this.RECORDS_VIEW, '<span data-lod0="x"></span>')
								.replace(this.RECORDS_DATA, '<span data-lod1="x"></span>')
								.replace(this.RECORDS_SERVER, '<span data-lod2="x"></span>')
								.replace(this.RECORDS_SERVER_TOTAL, '<span data-lod3="x"></span>');
							me._lodFoot = i !== footer;
							_notab($('<div/>').attr('data-footer', 'x').attr('data-id', _listIDShift - 1).css({ overflow: 'hidden', position: 'relative' }).html(footer).appendTo(dd));
						}
						// set flag to calculate offsetHeights of footer and header
						extraHeight = 1;
					}
					me._ddCont = ddCont;
					me._itemsHolder = itemsHolder = _notab($('<ul/>').attr('data-id', _listIDShift - 1).addClass(me.css.listItemHolder).appendTo(ddCont));
					if (virtual) {
						ddCont.css({ overflow: 'hidden' });
						me._ddScroll = ddScroll = _notab($('<div/>').attr('data-id', _listIDShift - 1).css({ width: '30px', height: '100%', overflowY: 'scroll', overflowX: 'hidden', 'float': rtl ? 'left' : 'right' }).appendTo(ddCont));
						me._ddScrollChild = _notab($('<div/>').attr('data-id', _listIDShift - 1).css({ width: '1px', height: '1px' }).appendTo(ddScroll));
					}
					// process scroll events
					ddScroll.scroll(function (e) {
						me._onScroll(e);
					});
					if (me._rtl) {
						dd.css('direction', 'rtl');
					}
					if (body) {
						dd.css({ left: '0px', top: '0px' }).appendTo($('body'));
					} else {
						dd.prependTo(elem);
					}
					me._ddBorderFix = dd.outerWidth() - dd.width();
					if (extraHeight) {
						ddCont.hide();
						dd.css('width', width - me._ddBorderFix);
						me._extraHeight = extraHeight = dd[0].clientHeight;
						dd.css('width', 'auto');
						ddCont.show();
					}
				}
				// show drop-down for calculation of offsets
				dd.css({ display: 'block' });
				listWidth = (width -= me._ddBorderFix);
				// if row1st is not null, then it is reference to _noResults (noMatchFoundText) element
				if (row1st) {
					if (itemsHolder.has(row1st).length === 0) {
						row1st.appendTo(itemsHolder);
					}
					itemHeightOuter = Math.max(10, row1st.outerHeight());
					dif = 0;
				} else if (!lodWait) {
					if (virtual) {
						ddScroll.hide();
						itemsHolder.css({ width: 'auto', height: 'auto', overflow: 'visible', 'float': 'left' });
					} else {
						// missing _keyFixed: request to fill up _key_ column before filtering
						// all list items will be created and filled up
						me._keyFixed = 1;
					}
				}
				// first rendering: calculate borders of cell and its height/outerHeight
				if (!itemHeightOuter && count > 0) {
					me._itemWidth = width = Math.ceil(width - 1);
					me._itemHeight = 'auto';
					// create first item to calculate width/height/heightOuter
					row1st = me._renderRow(0);
					if ((height = row1st.height()) < 5) {
						height = 16;
					}
					//me._liIE7Bug = Math.max(0, itemsHolder[0].offsetHeight - row1st[0].offsetHeight);
					row1st.css({ height: me._itemHeight = height });
					me._ddItemBorderFix = dif = Math.max(0, Math.floor(row1st.outerWidth() - row1st.width() + 0.4));
					if (dif > 0) {
						me._itemWidth = (width -= dif);
					}
					// get around IE7/6 bugs: when checkboxes are enabled, then IE may create 3px padding between LIs
					me._itemHeightOuter = itemHeightOuter = row1st.outerHeight() + Math.max(0, itemsHolder[0].offsetHeight - row1st[0].offsetHeight);
					// ensure that dd-container has same backgroundColor as row1st-item
					me._sameBC(row1st, dd);
				}
				itemHeightOuter = itemHeightOuter || 0;
				// width/height of drop-down container
				me._listHeight = Math.max(10, Math.max((max = o.dropDownMinHeight) - extraHeight, itemHeightOuter * (count || 1)));
				max = Math.min(Math.max(0, Math.max(max, o.dropDownMaxHeight) - extraHeight), me._listHeight);
				if (lod) {
					max = Math.min((lod - 1) * itemHeightOuter, max);
				}
				height = ddCont.css('height');
				height = (repaint && height && height.indexOf('px') > 0) ? parseFloat(height) : max;
				dd.css('width', listWidth);
				// flag for large list: use vertical scrollbar
				needScroll = me._listHeight > max;
				if (virtual) {
					me._ddScrollChild.css('height', me._listHeight + itemHeightOuter);
					ddCont.css('height', me._listHeight = max);
					dd.css('height', max + extraHeight);
					// scrollbar is required
					if (needScroll) {
						ddScroll.show();
						ddScroll.css('width', width = ddScroll[0].offsetWidth - ddScroll[0].clientWidth + 1);
						width = listWidth - width;
						itemsHolder.css({ width: width, height: '100%', overflow: 'hidden', 'float': rtl ? 'right' : 'left' });
						width -= dif;
						count = Math.ceil(max / itemHeightOuter + 1);
					} else {
						ddScroll.hide();
						itemsHolder.css('width', '100%');
					}
				} else {
					// if calcultaions for some reason failed, then hidden overflowX should cover that
					ddCont.css({ overflow: needScroll ? 'auto' : 'hidden', width:  listWidth, height: me._listHeight = max }).css('overflowX', 'hidden');
					dd.css('height', max + extraHeight);
					// scrollbar is required
					if (needScroll) {
						// ensure/force scrollbar by temporary inserting absolute html-element far down
						rowLast = $('<div/>').css({ position: 'absolute', top: (max + 100) + 'px', width: 9, height: 9 }).appendTo(ddCont);
						// get around bug in scrollbars of IE7: double dummy call to ddCont[0].clientWidth
						width = ddCont[0].clientWidth;
						width = ddCont[0].clientWidth - dif;
						rowLast.remove();
					}
				}
				// no scrollbar
				if (!needScroll) {
					width = listWidth - dif;
				}
				me._itemWidth = width;
				// create all rows besides row1st is it was already created
				this._repaintList(0, count);
				me._page = itemHeightOuter ? Math.max(2, Math.floor(max / itemHeightOuter)) : 1;
				if (repaint && on) {
					if (me._needsSel) {
						me._fixSelScroll(-1);
						delete me._needsSel;
					}
					// animate changed height
					i = me._listHeightLast;
					height = me._listHeight + extraHeight;
					dif = i - height;
					if (up) {
						end = me._listTop;
						me._listTop += dif;
					}
					me._listHeightLast = height;
					if (dif) {
						if ((duration = (dif < 0) ? o.animationShowDuration : o.animationHideDuration) > 5) {
							dd.css('height', i).animate({ height: height },
								{
									duration: duration,
									// synchronize location of list with height if it is above field
									step: function (now) {
										if (up) {
											dd.css(body ? 'top' : 'marginTop', end + dif * (i - now) / (i - height));
										}
									}
								});
						} else if (up) {
							dd.css(body ? 'top' : 'marginTop', end + dif);
						}
					}
					return;
				}
			}
			// actual height of drop-down list
			height = me._listHeightLast = me._listHeight + extraHeight;
			// save time when drop-down was displayed
			me._ddOn = show ? _now() : null;
			duration = show ? o.animationShowDuration : o.animationHideDuration;
			if (!duration || (typeof duration === 'number' && duration < 5)) {
				duration = null;
			} else {
				effect = show ? o.animationShowEffect : o.animationHideEffect;
				if (!$.effects || !$.effects[effect]) {
					if (!show && typeof duration !== 'number') {
						duration = 450;
					}
					effect = null;
				}
			}
			// starting height for show-animation, ending height for hide-animation
			me._listHeightEnd = (duration && !effect) ? 0 : height;
			end = function () {
				if (show) {
					dd.css('filter', '');
					// ensure that selected items have selected css and scroll is correct
					me._fixSelScroll(me._scrollTo);
					me._touch();
				} else {
					dd.css({ display: 'none' });
					me._touch('_hide');
				}
				me._fire(show ? 'dropDownOpened' : 'dropDownClosed', e, arg);
			};
			step = function (now, fx) {
				if (me._listUp && fx && fx.prop === 'height') {
					dd.css(body ? 'top' : 'marginTop', me._listTop + height - now);
				}
			};
			// show list
			if (show) {
				me._lodLbl();
				me.setFocus();
				if (me._needsPaint) {
					me._repaintList();
				}
				if (!body && (!me._static || me._relative)) {
					elem.css('overflow', 'visible');
				}
				if (me._needsSel) {
					me._fixSelScroll(-1);
					delete me._needsSel;
				}
				// validate if drop-down fits in window
				// winHeight: client height of window
				winHeight = 999;
				bodyElem = document.body;
				docElem = document.documentElement;
				// process window (not IE)
				if ((i = window.innerHeight) > 50 && i) {
					winHeight = i;
				} else if ((i = docElem.clientHeight) > 50 && i) {
					winHeight = i;
				} else if ((i = bodyElem.clientHeight) > 50 && i) {
					winHeight = i;
				}
				// y: scrollTop of window
				y = Math.max(window.pageYOffset || 0, Math.max(bodyElem.scrollTop, docElem.scrollTop));
				xy = _offset(elem);
				me._xy = body ? { x: xy.left, y: xy.top } : null;
				xy.height = elem[0].offsetHeight;
				me._listUp = null;
				// if enough space for drop-down below editor
				if ((up = xy.top + xy.height + height - y - winHeight) > 0 && y - xy.top + height < up) {
					me._listUp = up;
					// shift drop-down above editor
					// do not adjust for 0 under filtering: height/top can be changed without hide/show (repaint flag)
					if (xy.top - (up = height + 2) < y && !me._filtering) {
						// do not allow drop-down go above top edge of window
						up = Math.max(xy.top - y, 2);
					}
					// xy.height is used for "marginTop", when drop-down is local to editor
					// xy.top is used for "top", when drop-down belongs to body
					xy.top += (xy.height = -up) + _px(elem, 'borderTopWidth');
					elem.addClass(me.css.noTopCorners);
					dd.addClass(me.css.noBottomCorners);
				} else {
					// show drop-down below editor
					// xy.top is used for "top", when drop-down belongs to body
					xy.top += xy.height - _px(elem, 'borderBottomWidth');
					elem.addClass(me.css.noBottomCorners);
					dd.addClass(me.css.noTopCorners);
				}
				// initial styles before show-animation
				dd.css({ opacity: (duration && !effect) ? 0 : 1, height: me._listHeightEnd, display: '' });
				if (body) {
					dd.css({ left: xy.left, top: me._listTop = xy.top });
					me._xy.i = setInterval(function () {
						me._xyCheck();
					}, 300);
				} else {
					i = me._rtl ? 'Right' : 'Left';
					dd.css('margin' + i, -_px(elem, 'border' + i + 'Width') + 'px');
					up = me._listUp ? 0 : _px(elem, 'borderTopWidth') + _px(elem, 'borderBottomWidth');
					dd.css('marginTop', me._listTop = xy.height - up);
					// IE in quirks mode shifts drop-down to the right edge
					up = _offset(dd);
					if ((up = up.left - xy.left) > 30 && up < elem[0].offsetWidth + 10) {
						dd.css('marginLeft', -up + 'px');
					}
				}
				if (!duration) {
					end();
				} else if (effect) {
					dd.show(effect, {}, duration, end);
				} else {
					dd.animate({ opacity: 1, height: height }, {
						duration: duration,
						complete: function () { end(); },
						// synchronize location of list with height if it is above field
						step: function (now, fx) { step(now, fx); }
					});
				}
			// hide list
			} else {
				if (!body && (!me._static || me._relative)) {
					elem.css('overflow', 'hidden');
				}
				me._xyCheck(true);
				elem.removeClass(me.css.noTopCorners).removeClass(me.css.noBottomCorners);
				dd.removeClass(me.css.noBottomCorners).removeClass(me.css.noTopCorners);
				if (!duration) {
					end();
				} else if (effect) {
					dd.hide(effect, {}, duration, end);
				} else {
					dd.animate({ opacity: 0, height: me._listHeightEnd }, {
						duration: duration,
						complete: function () { end(); },
						// synchronize location of list with height if it is above field
						step: function (now, fx) { step(now, fx); }
					});
				}
			}
			return true;
		},
		// repaint only visible items in drop-down list
		_repaintList: function (id, count) {
			if (this._noMouse()) {
				return;
			}
			var me = this, repaint = !count;
			// repaint only visible items in drop-down list
			if (repaint) {
				id = Math.max(0, this._topID - 1);
				// if no virtual scroll and no matching items, then nothing to repaint
				count = id + ((this._ddScroll || this._matchFlag) ? this._page + 3 : -1);
			}
			delete this._needsPaint;
			// short cut used by _renderMatches
			this._textsTemp = this._texts(1);
			if (!repaint && (!this._lodWait || (this._lod && this._filtering === -1))) {
				this._html = ' ';
			}
			while (id < count) {
				this._renderRow(id, repaint);
				id += 1;
			}
			if (this._html) {
				// this._bindLI: flag to bind events for LIs and checkboxes (jquery does it very slow)
				this._itemsHolder.html(this._html.substring(this._bindLI = 1));
				delete this._html;
				// backup to attach events for touch devices
				setTimeout(function () { me._bindLIs(); }, 600);
			}
			if (this._paintAct) {
				this._fixActive(this._activeID, 1);
			}
			delete this._textsTemp;
		},
		_startOfSelTrail: function (field, txt, len) {
			var range, sep, end = 0, start = 0, tr = this._tr();
			// not IE
			if (tr === 1) {
				start = field.selectionStart;
				end = field.selectionEnd;
			} else if (tr) {
				// IE
				try {
					// IE8 may raise exception on next line
					range = document.selection.createRange();
					tr = range.duplicate();
					tr.move('textedit', -1);
					try {
						while (tr.compareEndPoints('StartToStart', range) < 0) {
							tr.moveStart('character', 1);
							if ((start += 1) > len) {
								break;
							}
						}
					} catch (ex) { }
					end = start + range.text.length;
				} catch (e2) { }
			}
			// check if backspace is about to remove item 2-character-separator
			if (start === len && len > 2) {
				sep = this._sep();
				if (sep.length > 1 && txt.charAt(len - 1) === sep.charAt(1) && txt.charAt(len - 2) === sep.charAt(0)) {
					// request to remove 2 characters in front of caret
					return start - 1;
				}
			}
			return (start < end && end === len) ? start : 0;
		},
		// for IE return createTextRange
		// for not IE return 1
		// return null for unknown browser or error
		_tr: function () {
			var field = this.fieldElem[0], tr = this._trVar;
			if (!tr) {
				try {
					// not IE
					if (!$.browser.msie && !_aNull(field.selectionStart)) {
						tr = 1;
					}
				} catch (ex) { }
				if (tr !== 1) {
					try {
						// IE
						tr = field.createTextRange ? field.createTextRange() : null;
					} catch (e2) { }
				}
				this._trVar = tr;
			}
			return tr;
		},
		// set start/end selection in field
		_setCaret: function (start, end) {
			var tr = this._tr();
			end = end || start;
			if (tr) {
				try {
					// not IE
					if (tr === 1) {
						tr = this.fieldElem[0];
						tr.selectionStart = start;
						tr.selectionEnd = end;
						return;
					}
					// do not set focus after selection
					if (this._selTime && _now() - this._selTime < 50) {
						return;
					}
					// IE
					end -= start;
					tr.move('textedit', -1);
					tr.move('character', start);
					if (end > 0) {
						tr.moveEnd('character', end);
					}
					// IE8 may raise exception on next line
					tr.select();
				} catch (ex) { }
			}
		},
		// fill-up and select text in field from not entered part of text defined by 1st matching list item
		// at this point selectedItems should contain all possible values in field
		// In case of local filtering, that method can be called from setTimeout.
		// In case of remote filtering, that method can be called after dataBind.
		_autoComplete: function (filter) {
			var len, txt, selStart, e, backKey, item, tr, txts, ii, last,
				i = -1,
				id = this._filtering ? this._activeID : this._changeID,
				field = this.fieldElem,
				args = this._acArgs,
				sel = '',
				selEnd = 0,
				o = this.options,
				selItems = o.selectedItems,
				itemsLen = selItems ? selItems.length : 0,
				sep = this._sep();
			// containers of values to perform autoComplete
			if (!args || this._noMouse()) {
				return;
			}
			delete this._acArgs;
			txt = args.txt;
			selStart = args.len;
			e = args.e;
			if (e && e.keyCode === $.ui.keyCode.DELETE && this._custom()) {
				return;
			}
			backKey = args.backKey;
			len = txt.length;
			// list has selected item(s)
			if (itemsLen > 0) {
				if (filter) {
					id = -1;
				}
				// identify which items in list correspond to items in field
				// and synchronize order of items in list with order of items in field
				txts = txt.split(sep);
				tr = selItems;
				selItems = [];
				filter = field.val();
				while ((i += 1) < itemsLen) {
					item = tr[i].text;
					for (ii = 0; ii < txts.length; ii += 1) {
						// item in list matches with item in field
						if (txts[ii] === (o.caseSensitive ? item : item.toLowerCase())) {
							selItems[ii] = item;
							if (filter === txts[ii] && filter !== item) {
								field.val(item);
							}
							break;
						}
					}
					// no match found: use item in list for partial match to fill up the rest of field
					if (ii === txts.length && !last) {
						last = item;
					}
				}
				// build final text in field from matches
				// and append last item (assume partial match) to the end
				while (i >= 0) {
					item = (i < itemsLen) ? selItems[i] : last;
					if (item) {
						if (sel.length > 0) {
							sel = sep + sel;
						}
						sel = item + sel;
					}
					i -= 1;
				}
			}
			filter = null;
			item = (id >= 0) ? this._item(id, 2) : null;
			if (item && (!sel || sel !== item)) {
				if (sel) {
					sel += sep;
				}
				sel += item;
			}
			// if multiselection and caret at the end of text
			// if not backspace and text ends with 1st char of separator,
			// then append separator to final text
			if (sel && len > 1 && selStart === len && this._multi(o) && !backKey && txt.charAt(len - 1) === sep.charAt(0)) {
				if (id >= 0) {
					this._addSel(id, e);
					this._fixSelScroll(-1);
				}
				txt = (sel += sep);
				// set request for filtering: recreate list items
				filter = selStart = i = sel.length;
			}
			this._userTxt = txt;
			// no matches: show error message
			if (!sel) {
				if (len > 0 && !this._filtering) {
					this._fire('noMatchFound', e, { owner: this, text: txt });
				}
				if (!backKey) {
					// no need to adjust caret/selection
					return;
				}
			} else if (selStart < (selEnd = sel.length) || i > 0) {
				// fill-up end of text in field from item in list
				field.val(this._oldTxt = sel);
			} else if (backKey) {
				// back-key at the end of text
				selEnd = selStart = len;
			} else {
				// no need to adjust caret/selection
				return;
			}
			this._setCaret(selStart, selEnd);
			this._userTxt = txt.substring(0, selStart);
			// flag used by _onChange to check if user autoCompleted last key-entry by same char as in displayed text
			this._selLen = selEnd - selStart;
			if (filter && this._multi(o) && this._filtering) {
				this.filter(e, null, this._noFilter);
			}
		},
		// flag:
		//   null-key/text/focus event: update selected list items
		//   1-call from its own setTimeout or recursive call
		//   2-call from list-selection: do not update selected list items
		// text: possible new text for field (clear button, Esc, set-currentText, select from list, etc.)
		// backKey: true means that event is coming from BACK key-event
		_onChange: function (e, flag, text, backKey) {
			var selStart, len, txt, autoComplete,
				me = this,
				field = me.fieldElem,
				old = me._oldTxt,
				o = me.options;
			if (!field || !field[0]) {
				return;
			}
			txt = e ? e.type : null;
			// check source of change (not Enter, not mouse, not blur)
			if (txt && e.keyCode !== 13 && txt.indexOf('blur') < 0 && txt.indexOf('mouse') < 0 && me._userTxt !== text) {
				delete me._noFilter;
			}
			if (me._hasData && me._nullT && flag === undefined && !me._fcs) {
				me._fixNull(1);
			}
			if (!_aNull(text)) {
				field.val(me._userTxt = text);
				// in case of empty text
				text = 1;
			}
			txt = me.text();
			len = txt.length;
			if (e && e.type !== 'blur' && (text || flag === 2)) {
				me._setCaret(len);
			}
			// this._expr - object/flag for remote filtering waiting: waiting response from server
			// if there is backKey and trailing selection (from previous call to _autoComplete), then erase character before caret
			if (!me._expr && backKey === true && o.autoComplete && len > 0 && (selStart = me._startOfSelTrail(field[0], txt, len)) > 0) {
				// erase character before caret and prevent default processing of back-key
				_stop(e);
				return me._onChange(e, 1, txt.substring(0, selStart - 1), 2);
			}
			// If user autoCompleted highlighted last-char entry by same-last key, then old and new texts will be the same.
			// In this case use length of selection set by _autoComplete.
			if (txt !== old || (me._selLen === 1 && !flag && me._userTxt && old.length - me._userTxt.length === 1)) {
				if (txt === old) {
					// update this._userTxt for _autoComplete
					me._userTxt = old;
				}
				delete me._filterTxt;
				me._oldTxt = txt;
				// adjust _clearOn and call _doSize() if needed: show/hide clear button
				me._fixClear();
				me._needsPaint = 1;
				if (e) {
					me._fire('textChanged', e, { owner: me, oldText: old, text: txt });
					// notify igValidator about change
					if (me._validator) {
						me._validator._evt(e);
					}
				}
				autoComplete = o.autoComplete && (len > 0 || backKey);
				if (me._filtering) {
					// if change is coming from selection in list, then do not filter
					if (flag === 2 && me._multi(o)) {
						me._repaintList();
						return;
					}
					// update this._userTxt for _autoComplete
					me._userTxt = txt;
					me.filter(e, null, me._noFilter);
				} else {
					// not from list-selection
					if (flag !== 2) {
						me._select(null, txt, 2, 1, e);
					}
					if (!autoComplete) {
						// update this._userTxt
						me._userTxt = txt;
						me._repaintList();
					}
				}
				// fill-up and select missing text from matching list item
				if (autoComplete) {
					// settings for _autoComplete: that can be called by _dataChange after remote filtering
					me._acArgs = { txt: txt, len: len, e: e, backKey: backKey };
					// not remote filtering
					if (me._filtering >= 0) {
						setTimeout(function () {
							if (!me._jpn) {
								me._autoComplete();
							}
							me._repaintList();
						}, 0);
					}
				}
			}
			if (!flag) {
				setTimeout(function () { me._onChange(e, 1); }, 10);
			} else {
				me._save(o);
				if (e && !me._ddOn && me._fcs) {
					me._doDrop(1, e);
				}
			}
		},
		// save selection, values and current text into server-view-state field
		_save: function (o) {
			var item, input, select, sel, i = -1, str = '', name = o.inputName;
			if (!name || !this._hasData || this._waitFilter) {
				return;
			}
			input = $('input[name="' + name + '"]');
			if (input[0] === this.element[0]) {
				return;
			}
			if (input.length === 0) {
				input = $('select[name="' + name + '"]');
				select = input.length;
				if (select) {
					input.empty();
				} else {
					input = $('<input type="hidden" name="' + name + '" />').appendTo(this.element.parent());
				}
			}
			sel = o.selectedItems;
			while (sel && (i += 1) < sel.length) {
				item = this._item(sel[i].index);
				if (item && item.getTime) {
					item = item.getFullYear() + '-' + (item.getMonth() + 1) + '-' + item.getDate() + ' ' + item.getHours() + ':' + item.getMinutes() + ':' + item.getSeconds() + '.' + item.getMilliseconds();
				}
				if (select) {
					$('<option value="' + item + '" selected="selected" >').appendTo(input);
				} else {
					if (i > 0) {
						str += ',';
					}
					str += item;
				}
			}
			if (i < 1 && this._custom()) {
				str = this.text();
				if (select) {
					$('<option value="' + str + '" selected="selected" >').appendTo(input);
				}
			}
			if (!select) {
				input.val(str);
			}
		},
		_onKey: function (e, type) {
			var k = e ? (e.keyCode || e.which) : null,
				me = this,
				on = me._ddOn,
				id = me._activeID,
				o = me.options,
				kc = $.ui.keyCode,
				selItems = o.selectedItems,
				back = k === kc.BACKSPACE,
				count = me._count - 1,
				mode = me._mode(o);
			if (type < 2 && !me._fire((type === 0) ? 'keydown' : 'keypress', e, { owner: me, keyCode: k })) {
				return _stop(e);
			}
			// select active item
			// mode: editable:0, dropdown:1, readonlylist:2, readonly:3
			if (type < 2 && k === kc.SPACE && (mode > 0 || (o.selectItemBySpaceKey && id >= 0 && o.enableActiveItem && on))) {
				_stop(e);
				if (mode < 2 && id >= 0 && type === 0) {
					me._fixSelScroll(id, e, null, null, 1);
				}
				return;
			}
			// assume that change will not happen on action keys and keyup
			if (type < 2 && (back || k > 40 || k === kc.SPACE) && mode === 0) {
				// 229-japanese keyboard
				me._jpn = k === 229;
				me._onChange(e, null, null, back);
			}
			// keydown: process only action keys
			if (type === 0) {
				if (e.shiftKey) {
					return;
				}
				if (k === kc.ESCAPE) {//27
					if (!on) {
						setTimeout(function () { me._onChange(e, null, me._focTxt); }, 0);
					} else {
						_stop(e);
						me._doDrop(0, e);
					}
				}
				if ((on || id >= 0) && (k === kc.ENTER || k === kc.NUMPAD_ENTER)) {//13,108
					_stop(e);
					// editable:0, dropdown:1, readonlylist:2, readonly:3
					if (mode < 2) {
						if (id >= 0 && o.enableActiveItem && !me.isSelected(id)) {
							me._fixSelScroll(id, e, null, null, 1);
						}
						me._updateFromList(e);
					}
					me._doDrop(0, e);
				}
				// process only action keys
				if (k < 33 || k > 40) {
					return;
				}
				if (e.ctrlKey) {
					return;
				}
				if (!e.altKey && !e.metaKey) {
					if (me._count < 1) {
						return;
					}
					// find id of last/min selected item
					if (id < 0) {
						if (!on && k !== kc.DOWN && k !== kc.UP) {
							return;
						}
						id = count + 1;
						back = selItems ? selItems.length : 0;
						while ((back -= 1) >= 0) {
							id = Math.min(selItems[back].index, id);
						}
						if (id > count) {
							id = 0;
						}
					} else if (k === kc.DOWN) {
						id += 1;
					} else if (k === kc.UP) {
						id -= 1;
					} else if (k === kc.HOME && on) {
						id = 0;
					} else if (k === kc.END && on) {
						id = count;
					} else if (k === kc.PAGE_DOWN && on) {
						id += me._page;
					} else if (k === kc.PAGE_UP && on) {
						id -= me._page;
					} else {
						return;
					}
					_stop(e);
					if ((id = Math.max(Math.min(id, count), 0)) !== me._activeID) {
						if (me._activate(id, e)) {
							if (on) {
								me._fixSelScroll(id, e, null, 1);
							} else {
								me.selectedIndex(id, true);
							}
						}
					}
				// check for short-cut to show/hide list
				} else if ((k === kc.DOWN && !on) || (k === kc.UP && on)) {
					return me._doDrop(on ? 0 : 1, e);
				}
			}
		},
		_sep: function () {
			var sep = this.options.itemSeparator || ',';
			return (sep.length > 2) ? sep.substring(0, 2) : sep;
		},
		// update field from selected items in list
		_updateFromList: function (e, zero, addSep) {
			var id = this._changeID,
				txt = '',
				o = this.options,
				i = -1,
				sep = this._sep(),
				selItems = this._addSel((id === this._activeID) ? id : -1, e),
				len = selItems ? selItems.length : 0;
			delete this._jpn;
			if (this._noMouse()) {
				return;
			}
			// remove active/change cell set by keyboard: do not autoComplete, etc.
			this._changeID = -1;
			if (!this._multi(o) && len > 1) {
				len = 1;
			}
			while ((i += 1) < len) {
				txt += this._item(selItems[i].index, 2);
				if (i + 1 < len || addSep) {
					txt += sep;
				}
			}
			if (txt.length > 0 || zero) {
				this._onChange(e, 2, txt);
			}
		},
		// find reference to list-item for row at index id
		_findItem: function (id) {
			var dd = this._itemsHolder;
			if (dd) {
				// adjust for virtual scroll: 'data-id' contains only visible indexes starting from 0
				id -= this._virtualTop;
				dd = dd.find('[data-id="' + (id + _listIDShift) + '"]');
				if (dd.length === 1) {
					return dd;
				}
			}
		},
		// add/remove selected items in list, update field, scroll list
		_fixSelScroll: function (id, e, elem, key, ctrl) {
			if (this._fixSel(id, e, elem, key, ctrl)) {
				return;
			}
			if (e) {
				this._updateFromList(e, ctrl);
				if (!ctrl && !key && this.options.closeDropDownOnSelect) {
					this._doDrop(0, e);
				}
			}
			if (key || !e) {
				this._fixScroll(id);
			}
		},
		_fixActive: function (id, on) {
			var css = this.css.listItemActive, elem = (id >= 0 && this.options.enableActiveItem) ? this._findItem(id) : null;
			if (elem) {
				if (on) {
					elem.addClass(css);
				} else {
					elem.removeClass(css);
				}
				delete this._paintAct;
			} else if (on) {
				this._paintAct = 1;
			}
		},
		// change active item in list and raise events
		// return 1 if active-item behavior is not enabled
		_activate: function (id, e, noScroll) {
			if (!this.options.enableActiveItem || this._noMouse()) {
				this._activeID = id;
				return 1;
			}
			var arg, old = this._activeID;
			if (old !== id && this._fire('activeItemChanging', e, arg = { owner: this, oldIndex: old, index: id })) {
				this._fixActive(old);
				this._fixActive(this._activeID = id = arg.index, 1);
				if (id >= 0 && !noScroll && (!e || e.type !== 'mousedown')) {
					this._fixScroll(id);
				}
				this._fire('activeItemChanged', e, arg);
			}
		},
		// if(id >= 0) then add/remove selected items in list
		// if(id < 0) then ensure that selected items have selected css
		// if(!e), then only repaint and adjust html-elements: do not modify selectedItems
		// ctrl: flag for Ctrl key action: toggle selected item
		// key: flag from key-action (arrows, page, home, end)
		_fixSel: function (id, e, elem, key, ctrl) {
			var item,
				next = 0,
				i = id,
				o = this.options,
				selItems = this._copyA(o.selectedItems),
				len = selItems ? selItems.length : 0,
				oldSelElems = this._selElems,
				virtual = this._ddScroll,
				old = (virtual && id < 0) ? null : this._selElems;
			if (!this._ddOn || this._noMouse()) {
				return 1;
			}
			if (id >= 0 && !elem) {
				elem = this._findItem(id);
				if (!elem) {
					old = null;
					while (virtual && !elem && i >= 0 && i <= this._count && (next += 1) < 4) {
						this._fixScroll(i);
						this._onScroll(e);
						elem = this._findItem(id);
						i -= 1;
					}
				}
				if (!elem) {
					return 1;
				}
			}
			for (i = 0; i < len; i += 1) {
				item = old ? old[i] : null;
				if (!item) {
					item = this._findItem(selItems[i].index);
					if (item) {
						if (!old) {
							this._selElems = old = [];
						}
						this._fixSelElem(old[i] = item, 1);
					}
				}
				if (id < 0 || !item || !e) {
					continue;
				}
				if (item[0] === elem[0]) {
					if (!ctrl) {
						if (len === 1) {
							return;
						}
					} else {
						selItems.splice(i, 1);
						if (this._selChange(selItems, e)) {
							this._fixSelElem(elem);
							old.splice(i, 1);
							this._selChanged(e);
						} else {
							this._selElems = oldSelElems;
						}
						return;
					}
				} else if (!ctrl) {
					this._fixSelElem(item);
				}
			}
			// if !e, then it is request to repaint only
			if (!elem || !e) {
				return;
			}
			// i: flag to clear selection
			i = null;
			if (!ctrl || !selItems || !this._multi(o)) {
				// clear selection
				i = selItems = [];
				old = [];
			}
			selItems.push(this._createSelItem(id));
			if (this._selChange(selItems, e, i)) {
				this._activate(id, e);
				old = old || [];
				old.push(elem);
				this._selElems = old;
				this._fixSelElem(elem, 1);
				this._selChanged(e);
			} else {
				this._selElems = oldSelElems;
				return 1;
			}
		},
		// adjust scroll to keep selected item visible
		// id: -1: show list, otherwise it is index of visible item
		_fixScroll: function (id) {
			var scroll, top,
				last = this._lastScroll,
				dd = this._ddScroll || this._ddCont,
				height = this._itemHeightOuter;
			if (!dd || this._lodWait) {
				return;
			}
			top = scroll = dd[0].scrollTop;
			this._scrollTo = -1;
			// show list
			if (id < 0) {
				if (last && last !== top) {
					dd[0].scrollTop = last;
					top = dd[0].scrollTop;
				}
				// get around scroll-bug in Safari after animation
				if ($.browser.safari && top > 20) {
					dd[0].scrollTop = top - 1;
				}
			} else if ((top = id * height) > scroll) {
				if ((top += height - this._listHeight) < scroll) {
					return;
				}
			}
			// if it is virtual mode and scroll-down is too small, then ensure value larger than height of item in list
			if (top !== last) {
				if (this._ddScroll && top > last) {
					top += height - 1;
				}
				dd[0].scrollTop = top;
			}
		},
		_bindLIs: function (o, li) {
			var me = this,
				holder = me._itemsHolder,
				elem = li;
			if (!li) {
				if (!this._bindLI || !holder) {
					return;
				}
				delete this._bindLI;
				elem = holder.find('li[data-id]');
			}
			elem.bind(me._mEvts);
			if (me._checkBox(o || this.options)) {
				if (!me._evtHov) {
					me._evtHov = {
						MSPointerOver: function (e) { me._onEvt(this, 26, e); },
						mouseover: function (e) { me._onEvt(this, 16, e); },
						mouseleave: function (e) { me._onEvt(this, 17, e); }
					};
				}
				elem = li || holder;
				// get around bugs in Android: process and stop all touch events over checkboxes and icons
				elem.find('span[data-box]').bind(me._evtHov).bind(me._tEvts).find('span[data-icon]').bind(me._tEvts);
			}
		},
		// type: 3-mousedown, 4-mouseup, 6-mousedover, 7-mouseleave, 8-focus, 9-blur,
		// 10-wheel, 16-mouseoverCheckbox, 17-mouseleaveCheckbox, 26-MSPointerOver
		_onEvt: function (el, type, e) {
			var i, hovCss, pressCss,
				me = this,
				msOver = me._msOver,
				o = me.options,
				css = me.css,
				field = me.fieldElem,
				el$ = (!el || el === field[0] || (e && e.target === field[0])) ? field : $(el),
				id = el$.attr('data-id'),
				elem = me.mainElem,
				mode = me._mode(o);
			if (o.disabled) {
				return;
			}
			// focus
			if (type === 8) {
				me._focTxt = me.text();
				me._fcs = 1;
				elem.addClass(css.focus);
				field.addClass(css.fieldFocus);
				me._fixNull();
				// editable:0, dropdown:1, readonlylist:2, readonly:3
				if (mode < 3) {
					me.buttonElem.addClass(css.buttonFocus);
					me.clearElem.addClass(css.clearFocus);
				}
				if (!me._ddOn && o.dropDownOnFocus) {
					setTimeout(function () {
						if (me._fcs) {
							me._doDrop(1, e);
						}
					}, 50);
				}
				return;
			}
			// blur
			if (type === 9) {
				// get around Firefox-failure to raise japanese key events
				i = me.text();
				if (e && me._jpn && $.browser.mozilla && me._userTxt !== i) {
					me._onChange(e, null, i);
				}
				me._jpn = me._fcs = 0;
				elem.removeClass(css.focus);
				field.removeClass(css.fieldFocus);
				me.buttonElem.removeClass(css.buttonFocus);
				me.clearElem.removeClass(css.clearFocus);
				if (!e) {
					return;
				}
				if (o.closeDropDownOnBlur) {
					me._doDrop(0, e);
				}
				if (!me._custom()) {
					me._updateFromList(e, 1);
				}
				me._changeID = -1;
				me._onChange(e, null);
				me._fixNull();
				// notify igValidator about blur event
				if (me._validator) {
					me._validator._evt(e, null, 1);
				}
				return;
			}
			// mouse wheel
			if (type === 10) {
				elem = me._ddScroll || me._ddCont;
				o = e.originalEvent || e;
				i = e.wheelDelta || o.wheelDelta || -(e.detail || o.detail);
				if (!_aNull(i, true) && elem) {
					_stop(e);
					elem[0].scrollTop += (i > 0) ? -me._itemHeightOuter : me._itemHeightOuter;
				}
				return;
			}
			// MSPointerOver: flag to skip mouseover for touch event (if pointerType=2)
			if (type === 26) {
				me._msOver = e.originalEvent.pointerType;
				return;
			}
			// that is continuation of MSPointerOver (2-touch event)
			if (msOver === 2 && (type === 6 || type === 16)) {
				delete me._msOver;
				return;
			}
			// mouseover/leave for checkbox
			if (!id && type > 15) {
				id = el$.parent().attr('data-id');
			}
			// id of element:
			// null=0: field
			// '1'=1: drop-down button
			// '2'=2: clear button
			// '_listIDShift'=99: container of drop-down
			// '_listIDShift'=100, '101'=101, etc: list items at index 0, 1, etc.
			id = (el$ === field) ? 0 : isNaN(id = id ? parseInt(id, 10) : -1) ? -1 : id;
			// request to bind events for LIs in list
			if (id > 90) {
				me._bindLIs(o);
			}
			if (id < 0 || (id > 98 && me._noMouse())) {
				return;
			}
			// mousedown
			if (type === 3) {
				_stop(e);
			}
			// mode: editable:0, dropdown:1, readonlylist:2, readonly:3
			if (mode > 1 && (type > 7 || id > 3)) {
				return;
			}
			// mouseover checkbox
			if (type === 16) {
				return el$.addClass(css.checkboxHover);
			}
			// mouseleave checkbox
			if (type === 17) {
				return el$.removeClass(css.checkboxHover);
			}
			hovCss = (id >= _listIDShift) ? (me._touch() && !(msOver && msOver !== 2) ? '' : css.listItemHover) : ((id === 1) ? css.buttonHover : css.clearHover);
			pressCss = (id >= _listIDShift) ? '' : ((id === 1) ? css.buttonPressed : css.clearPressed);
			// mousedown for button or drop-down list
			if (type === 3) {
				// clear and dropdown button
				if (id < 3) {
					el$.addClass(pressCss);
				}
				return;
			}
			// container of drop-down list
			if (id === _listIDShift - 1) {
				return;
			}
			// mouseup
			if (type === 4) {
				// list-item
				if (id >= _listIDShift) {
					delete me._jpn;
					// if target is checkbox, then fake Ctrl key
					me._fixSelScroll(id - _listIDShift + me._virtualTop, e, el$, null, e.ctrlKey || e.metaKey || me._isCheckBox(e.target));
				} else if (el$.hasClass(pressCss)) {
					// drop-down button
					if (id === 1) {
						// check for failed validation of igEditor
						if (me._vAct('drop')) {
							return;
						}
						me.setFocus();
						me._doDrop(1, e);
					}
					// clear button
					if (id === 2) {
						if (me._filtering) {
							me._select(-1);
						}
						me._onChange(e, null, '');
					}
					el$.removeClass(pressCss);
				}
				return;
			}
			// mouseover
			if (type === 6) {
				// field
				if (id === 0) {
					field.addClass(css.fieldHover);
					elem.addClass(css.hover);
				// buttons or list items
				} else {
					el$.addClass(hovCss);
				}
			}
			// mouseleave
			if (type === 7) {
				// field
				if (id === 0) {
					elem.removeClass(css.hover);
					field.removeClass(css.fieldHover);
					if (me._fcs === 1) {
						elem.addClass(css.focus);
					}
				// buttons or list items
				} else {
					el$.removeClass(hovCss).removeClass(pressCss);
				}
			}
		},
		// show/hide clear button
		_fixClear: function (size) {
			var o = this.options,
				show = o.enableClearButton && this._oldTxt.length > 0 && this._mode(o) < 2 && !o.disabled;
			// while japanese keyboard entry, size-change corrupts next key in Firefox
			if (this._jpn && $.browser.mozilla) {
				return;
			}
			if (this._clearOn !== show) {
				this._clearOn = show;
				size = 1;
			}
			if (size) {
				this._doSize();
			}
		},
		// handle first paint and trigger adjustments for % width/height
		// flag=2: destroy timer
		// flag=1: create/ensure timer
		_doTimer: function (flag) {
			var me = this, timer = me._timer;
			if (flag === 2) {
				if (timer) {
					clearInterval(timer);
					delete me._timer;
				}
				return;
			}
			if (!timer) {
				me._timer = setInterval(function () { me._doTimer(); }, 200);
			}
			if (flag === 1) {
				return;
			}
			if (me._doSize(1) && !me._percWidth && !me._percHeight) {
				me._doTimer(2);
			}
		},
		// adjust heights of buttons
		_doButHeight: function (height, perc) {
			var img, imgHeight,
				min = this._butMinHeight,
				offsetHeight = height,
				minHolder = this._minHolderHeight;
			this.clearElem.css('height', perc ? '100%' : height - minHolder);
			height = Math.max(height - min, 0);
			this.buttonElem.css('height', perc ? height / offsetHeight * 100 + '%' : height);
			// adjust images
			img = this.buttonElem.children(0);
			// img[0].offsetHeight can be 0
			imgHeight = img[0].offsetHeight || 16;
			img.css('marginTop', Math.floor((offsetHeight - (min || 0) - imgHeight) / 2 + 0.5) + 'px');
			img = this.clearElem.children(0);
			// img[0].offsetHeight can be 0
			img.css('marginTop', Math.floor((offsetHeight - minHolder - (img[0].offsetHeight || imgHeight)) / 2 + 0.5) + 'px');
		},
		_outerWidth: function (elem) {
			return elem[0].offsetWidth + _px(elem, 'marginLeft') + _px(elem, 'marginRight');
		},
		_outerHeight: function (elem) {
			return elem[0].offsetHeight + _px(elem, 'marginTop') + _px(elem, 'marginBottom');
		},
		// set background color from src to targ
		_sameBC: function (src, targ) {
			// ensure that dd-container has same backgroundColor as row1st-item
			var clr = src.css('backgroundColor');
			targ.css('background', (!clr || clr === 'transparent' || clr.replace(/ /g, '').indexOf('(0,0,0,0') > 0) ? 'white' : clr);
		},
		// adjust heights and widths of all elements
		_doSize: function (timer) {
			var fieldWidth, fix, percWidth, percHeight, butHeight, holderHeight, holderWidth,
				me = this,
				o = me.options,
				width = o.width,
				height = o.height,
				relative = me._relative,
				but = me.buttonElem,
				css = me.css,
				elem = me.mainElem,
				elem0 = elem[0],
				field = me.fieldElem,
				fieldHolder = me._fieldHolder,
				clearOn = me._clearOn,
				minFieldHeight = me._minFieldHeight,
				minFieldWidth = me._minFieldWidth,
				minHolderWidth = me._minHolderWidth,
				minHolderHeight = me._minHolderHeight,
				butWidth = me._butWidth,
				clearWidth = me._clearWidth,
				lastHeight = me._lastHeight,
				clear = me.clearElem,
				offsetWidth = elem0.offsetWidth,
				offsetHeight = elem0.offsetHeight;
			// try to get width/height from css
			if (offsetWidth && !me._offsetWidth && (!width || !height)) {
				fix = $('<span />').css({ display: 'inline-block', position: 'absolute' }).addClass('ui-igcombo').appendTo(me.element.parent());
				if (!width) {
					width = fix[0].offsetWidth;
					if (width > 10) {
						o.width = width;
					} else {
						width = 0;
					}
				}
				if (!height) {
					height = fix[0].offsetHeight;
					// IE7 may have some messy height
					if (height > 10 && height !== fix.removeClass('ui-igcombo')[0].offsetHeight) {
						o.height = height;
					} else {
						height = 0;
					}
				}
				fix.remove();
			}
			width = width || 150;
			height = height || 'auto';
			fix = me._offsetWidth !== offsetWidth || width !== me._lastWidth || me._offsetHeight !== offsetHeight || height !== lastHeight;
			if (!offsetWidth || (timer && !fix)) {
				if (!offsetWidth) {
					me._doTimer(1);
				}
				return;
			}
			if (fix) {
				me._listRemove();
			}
			me._lastWidth = width;
			me._lastHeight = height;
			me._percWidth = percWidth = typeof width === 'string' && width.indexOf('%') > 0;
			me._percHeight = percHeight = typeof height === 'string' && height.indexOf('%') > 0;
			if (percWidth || percHeight) {
				me._doTimer(1);
			}
			// check if field may have absolute position
			if (!lastHeight) {
				// ensure that fieldHolder has same backgroundColor as field
				me._sameBC(field, fieldHolder);
				relative = elem.css('position') !== 'static';
				// no support for static position when width is %
				if (!relative && (percWidth || percHeight)) {
					elem.css('position', 'relative');
					relative = true;
				}
				me._relative = relative;
				field.css('position', relative ? 'absolute' : 'static');
			}
			// measure offsetWidth/Height of element
			fieldHolder.css({ position: 'absolute', width: 'auto', height: 'auto' });
			// temporary hide field
			clear.hide();
			field.css({ width: 0, height: 0 });
			// first time calculations
			// measure minimum widths and heights
			if (!lastHeight) {
				// adjust css according to visibility of button
				fix = me._rtl ? css.fieldHolderRTL : css.fieldHolderLTR;
				if (o.showDropDownButton) {
					fieldHolder.addClass(fix);
				} else {
					fieldHolder.removeClass(fix);
				}
				fix = me._rtl ? css.buttonRTL : css.buttonLTR;
				if (o.showDropDownButton) {
					but.addClass(fix);
				} else {
					but.removeClass(fix);
				}
				butWidth = 0;
				// notes: under IE7 width:auto for elem triggers stretch of combo to size of browser!!
				// also when both clear and field are visible, then fieldHolder[0].offsetWidth can be 1..18 px larger
				// so, use css and _outerWidth (offsetWidth and margins) for each element without children
				if (o.showDropDownButton) {
					but.show();
					butWidth = me._outerWidth(but);
					// measure min height of button
					fix = but.css('height');
					but.css('height', 0);
					me._butMinHeight = me._outerHeight(but);
					but.css('height', fix);
				} else {
					but.hide();
				}
				me._butWidth = butWidth;
				me._minFieldWidth = minFieldWidth = me._outerWidth(field);
				me._minFieldHeight = minFieldHeight = me._outerHeight(field);
				// _minWidth: width without clear button
				// note: under Safari/Chrome fieldHolder[0].offsetWidth is huge: use _outerWidth(field)
				me._minWidth = butWidth + me._outerWidth(field);
				if (o.enableClearButton) {
					clear.show();
					// _minWidth1: width with clear button
					me._clearWidth = clearWidth = me._outerWidth(clear);
					clear.hide();
				}
				field.hide();
				me._minHolderHeight = minHolderHeight = fieldHolder[0].offsetHeight;
				me._minHolderWidth = minHolderWidth = fieldHolder[0].offsetWidth;
				field.show();
			}
			fix = _toPx(width);
			if (fix) {
				width = fix - _px(elem, 'borderLeftWidth') - _px(elem, 'borderRightWidth');
				if (width < 1) {
					width = 1;
				}
			}
			fix = _toPx(height);
			if (fix) {
				height = fix - _px(elem, 'borderTopWidth') - _px(elem, 'borderBottomWidth');
				if (height < 1) {
					height = 1;
				}
			}
			elem.css({ width: width, height: height, display: 'inline-block', minWidth: 0, minHeight: 0 });
			offsetWidth = elem0.clientWidth;
			offsetHeight = elem0.clientHeight;
			fieldHolder.css('height', 'auto');
			// height of drop-down button
			butHeight = o.showDropDownButton ? me._outerHeight(but) : 0;
			if (!relative) {
				fieldHolder.css('position', 'static');
			}
			// adjust height of field, buttons and top element
			// measure default height of field/fieldHolder
			field.css({ height: 'auto', position: 'static' });
			holderHeight = me._outerHeight(fieldHolder);
			if (relative) {
				field.css('position', 'absolute');
			}
			if (clearOn) {
				clear.show();
			}
			// use hard coded custom height
			if (o.height) {
				holderHeight = Math.max(offsetHeight - minHolderHeight, 0);
				fieldHolder.css('height', percHeight ? holderHeight / offsetHeight * 100 + '%' : holderHeight);
				field.css('height', percHeight ? (holderHeight - minFieldHeight) / holderHeight * 100 + '%' : holderHeight - minHolderHeight - minFieldHeight);
				me._doButHeight(offsetHeight, percHeight);
			// adjust height of field/fieldHolder to height of button
			} else if (holderHeight < butHeight) {
				fieldHolder.css('height', butHeight - minHolderHeight);
				field.css('height', butHeight - minHolderHeight - minFieldHeight);
			// adjust height of button to height of field/fieldHolder
			} else {
				me._doButHeight(holderHeight, percHeight);
				field.css('height', holderHeight - minHolderHeight - minFieldHeight);
				if (relative) {
					fieldHolder.css('height', holderHeight - minHolderHeight);
				}
				elem.css('height', height = holderHeight);
			}
			// adjust width of fieldHolder
			elem.css({ display: o.enableDisplayBlock ? 'block' : 'inline-block', minWidth: me._minWidth + clearWidth + 2 });
			width = Math.max(offsetWidth - butWidth - minHolderWidth, 0);
			fieldHolder.css('width', percWidth ? width / offsetWidth * 100 + '%' : width);
			// verify that widths of button and fieldHolder fill whole space of elem
			offsetWidth = elem0.clientWidth;
			holderWidth = fieldHolder[0].offsetWidth;
			// difference between space available for fieldHolder and its actual width (bugs in Safari)
			if ((fix = offsetWidth - holderWidth - butWidth) !== 0) {
				width += fix;
				fieldHolder.css('width', percWidth ? width / offsetWidth * 100 + '%' : width);
			}
			// adjust width of field
			// verify that widths of clear and field fill whole space of fieldHolder
			fieldWidth = width - minFieldWidth - 1;
			if (clearOn) {
				fieldWidth -= clearWidth;
			}
			field.css('width', percWidth ? fieldWidth / width * 100 + '%' : fieldWidth);
			// difference between space available for field and its actual width (bugs in Firefox/Opera)
			if ((fix = fieldHolder[0].clientWidth - me._outerWidth(field) - (clearOn ? clearWidth : 0) - 1) !== 0) {
				fieldWidth += fix;
				field.css('width', percWidth ? fieldWidth / width * 100 + '%' : fieldWidth);
			}
			// verify that buttons or field did not jump on next line
			if (!relative) {
				holderHeight = fieldHolder[0].offsetHeight + 5;
				elem.css('height', 'auto');
				for (fix = 0; fix < 4 && width > 0; fix += 1) {
					if (elem0.offsetHeight < holderHeight) {
						break;
					}
					// reduce width of field
					width -= 0.5;
					fieldHolder.css('width', percWidth ? width / offsetWidth * 100 + '%' : width);
				}
				// get around zoom in Firefox and IE7/8
				if ($.browser.mozilla || ($.browser.msie && parseFloat($.browser.version) < 9)) {
					fieldHolder.css('width', percWidth ? --width / offsetWidth * 100 + '%' : --width);
				}
				elem.css('height', height);
			}
			// memorize final width/height of top element
			me._offsetWidth = elem0.offsetWidth;
			me._offsetHeight = elem0.offsetHeight;
			return 1;
		},
		_listRemove: function () {
			var me = this;
			if (!me.listElem) {
				return;
			}
			me._touch('destroy');
			me.mainElem.removeClass(me.css.noTopCorners).removeClass(me.css.noBottomCorners);
			me.listElem.remove();
			// reset short-cut variables
			me._selElems = me.listElem = me._itemsHolder = me._ddCont = me._ddScroll = me._noResults = me._q =
				me._ddOn = me._extraHeight = me._listChanged = me._ddItemBorderFix = me._itemHeightOuter = me._bindLI = null;
			me._lastScroll = me._virtualTop = me._topID = 0;
			me._activeID = me._scrollTo = -1;
		},
		destroy: function () {
			/* Destroys widget.
				returnType="object" Returns reference to this igCombo.
			*/
			var i, e, elem = this.mainElem, css = this.css, old = this._oldCss, field = this.fieldElem, elem0 = this.element;
			e = elem ? elem[0] : null;
			if (!e) {
				return this;
			}
			if (this._loadInd) {
				this._loadInd.destroy();
			}
			// stop timer, remove drop-downs, unbind events
			this._doTimer(2);
			this._listRemove();
			this.validator(1);
			// restore layout
			if (this._SELECT) {
				elem.remove();
				elem0.css('display', old.display);
			} else {
				// remove classes, unbind events
				field.removeClass(css.nullText).removeClass(css.fieldFocus).removeClass(css.fieldHolder).unbind(this._evts);
				if (this._swap) {
					field.removeClass(css.field);
					field.insertBefore(elem);
					elem.remove();
				} else {
					this.buttonElem.remove();
					this.clearElem.remove();
					elem.unbind(this._elemEvts).removeClass(css.combo).removeClass(css.hover).removeClass(css.focus).removeClass(css.disabled);
					field.remove();
				}
				// restore old attributes
				for (i in old) {
					if (old.hasOwnProperty(i)) {
						elem0.css(i, old[i]);
					}
				}
				old = this._oldAttr;
				for (i in old) {
					if (old.hasOwnProperty(i)) {
						elem0[0][i] = old[i];
					}
				}
			}
			this._cascade(false, true);
			delete this.mainElem;
			$.Widget.prototype.destroy.apply(this, arguments);
			return this;
		},
		_getType: function (v) {
			return (v === true || v === false) ? 'bool' : ((v && v.getTime) ? 'date' : (typeof v === 'number' ? 'number' : 'string'));
		},
		dataBind: function () {
			/* Trigger data binding. */
			var field, ds0, dataOptions, setting,
				o = this.options,
				url = o.dataSourceUrl,
				lod = o.loadOnDemandSettings,
				key = o.responseDataKey,
				txtKey = o.textKey || o.valueKey,
				type = o.dataSourceType,
				vt = o.valueKeyType,
				tt = o.textKeyType,
				schema = { fields: [] },
				ds = o.dataSource,
				dsStr = typeof ds === 'string',
				// assume key is something like "key1.key2.key3" and ds={key1:{key2:{key3:[actualData]}}}
				keys = key ? key.split('.') : null,
				len = keys ? keys.length - 1 : -1,
				i = -1;
			vt = (vt === 'auto') ? null : vt;
			if (dsStr && !type) {
				ds = new $.ig.JSONPDataSource({ dataSource: ds });
			}
			ds0 = ds;
			// find actualData within ds={key1:{key2:{key3:[actualData]}}}
			while (ds0 && i++ < len) {
				ds0 = ds0[keys[i]];
			}
			if (!ds0) {
				ds0 = ds;
				keys = null;
			} else if (keys) {
				schema.searchField = key;
			}
			field = ds0 ? ds0[0] : null;
			// convert simple array to array of objects
			if (typeof field === 'string' || typeof field === 'number' || (field && field.getTime)) {
				i = ds0.length;
				field = ds0;
				ds0 = [];
				txtKey = txtKey || 'x';
				while (i-- > 0) {
					ds0[i] = {};
					ds0[i][txtKey] = field[i];
				}
				// process ds={key1:{key2:{key3:[actualData]}}}
				if (keys) {
					field = ds;
					i = -1;
					// find container of last/container object of real data within ds (key2)
					while (++i < len) {
						field = field[keys[i]];
					}
					// update actualData within ds={key1:{key2:{key3:[actualData]}}}
					field[keys[len]] = ds0;
				} else {
					ds = ds0;
				}
			}
			dataOptions = {
				callback: this._dataChange,
				// note: IE7/8 may fail properly to perform extend(...) with "this". Set callee later.
				//callee: this,
				dataSource: ds,
				type: type || undefined,
				responseDataKey: key,
				responseTotalRecCountKey: o.responseTotalRecCountKey
			};
			field = this._noMouse() || this._cascFilter ? null : o.filteringType;
			this._filtering = (field === 'local') ? 1 : (field === 'remote' ? -1 : 0);
			// fill fields of schema from first record
			if (ds0) {
				ds0 = ds0[0];
				for (field in ds0) {
					if (ds0.hasOwnProperty(field)) {
						// varify that value/textKey are defined
						if (!txtKey) {
							txtKey = o.valueKey = o.textKey = field;
						}
						i = this._getType(ds0[field]);
						if (!vt && field === o.valueKey) {
							o.valueKeyType = vt = i;
						}
						schema.fields.push({ name: field, type: i });
						// set flag for Mvc that data source is not compact
						if (txtKey !== field && o.valueKey !== field) {
							o._all = 1;
						}
					}
				}
			}
			// configure data source options
			if ((ds instanceof $.ig.DataSource && !ds.settings.schema) || !(ds instanceof $.ig.DataSource)) {
				dataOptions = $.extend(dataOptions, { schema: schema });
			}
			// configure data source
			if (ds instanceof $.ig.DataSource) {
				dataOptions.dataSource = ds.settings.dataSource;
				ds.settings = $.extend(true, {}, ds.settings, dataOptions);
				// set callee after extend()
				ds.settings.callee = this;
				if (dataOptions.schema) {
					ds._initSchema();
				}
			} else {
				// set callee after extend()
				// K.D. August 16th, 2012 Bug #118180 igCombo throws error in Ie8.
				ds = new $.ig.DataSource(dataOptions);
				ds.settings.callee = this;
			}
			tt = (tt === 'auto') ? null : tt;
			schema = (vt || tt) ? ds.schema() : null;
			schema = schema ? schema.fields() : null;
			i = schema ? schema.length : 0;
			while ((i -= 1) >= 0) {
				field = schema[i];
				if (vt && field.name === o.valueKey) {
					field.type = vt;
				}
				if (tt && field.name === o.textKey) {
					field.type = tt;
				}
			}
			// support for loadOnDemand coming from Mvc
			ds._response_data = function (data) {
				var len = data ? data.length : 0, count = (len > 0) ? data[len - 1][':totals:'] : null;
				if (count) {
					data.pop();
					count = count.split(':');
					ds.totalRecordsCount(_aNull(len = parseInt(count[0], 10), true) ? 0 : len);
					len = _aNull(len = parseInt(count[1], 10), true) ? 0 : len;
					if (len) {
						o._totalAll = len;
					}
				}
			};
			// configure load on demand
			delete this._lod;
			if (lod && lod.enabled && (url || dsStr)) {
				setting = ds.settings.paging;
				setting.type = 'remote';
				setting.appendPage = setting.enabled = true;
				setting.pageSizeUrlKey = lod.pageSizeUrlKey || null;
				setting.pageIndexUrlKey = lod.pageIndexUrlKey || null;
				if (!_aNull(i = parseInt(o._total, 10), true)) {
					ds.totalRecordsCount(i);
				}
				lod = parseInt(lod.pageSize || 30, 10);
				setting.pageSize = this._lod = _aNull(lod, true) ? 30 : Math.max(lod, 5);
				setting.pageIndex = 0;
			}
			if (this._fire('dataBinding', null, { owner: this, dataSource: ds }, 1)) {
				this._dataSource = ds;
				this._keyVal = this._hasData = this._key_ = null;
				this._listRemove();
				ds.dataBind();
			}
			// configure request of remote filtering
			if (url && !this._urlBind) {
				setting = ds.settings;
				setting.dataSource = url;
				setting.type = 'remoteUrl';
				ds._runtimeType = ds.analyzeDataSource();
				setting.urlParamsEncoded = $.proxy(function (data, params) {
					params = params ? params.filteringParams : null;
					// set flag used by Mvc remote filtering
					if (params) {
						params.textKey = o.textKey || o.valueKey;
						params.valueKey = o.valueKey;
						if (!o.caseSensitive) {
							params.toLower = "1";
						}
						if (!o._all) {
							params.compact = "1";
						}
						if (o.parentComboKey) {
							params.cascade = o.parentComboKey;
						}
					}
				}, this);
				this._urlBind = 1;
				if (!o.dataSource) {
					ds.dataBind();
				}
			}
		},
		_cond: function (o, paint) {
			return o.autoComplete ? 'startsWith' : ((paint || !this._filtering) ? o.renderMatchItems : o.filteringCondition);
		},
		_isStrCond: function (cond) {
			return cond === 'startsWith' || cond === 'endsWith' || cond === 'contains' || cond === 'doesNotContain' || cond === 'empty' || cond === 'notEmpty';
		},
		// returns array of string-items for filtering and rendering matches in list
		// txt: 1- flag for list-matches, null- use current text for filtering, not-null- value from _select
		_texts: function (txt) {
			var i, len, sepLen,
				render = txt === 1,
				o = this.options,
				sep = this._multi(o) ? this._sep() : null;
			if (render || _aNull(txt)) {
				txt = this._userTxt || this._oldTxt;
			} else if (typeof txt !== 'string') {
				return [txt];
			}
			if (!o.caseSensitive) {
				txt = txt.toLowerCase();
			}
			if (!sep) {
				return txt ? [txt] : [];
			}
			// remove empty items
			while (txt.indexOf(sep + sep) > 0) {
				txt = txt.replace(sep + sep, sep);
			}
			// remove possible last dummy item
			sepLen = sep.length;
			len = txt.length;
			// get text for rendering matches in list
			if (render) {
				// remove trailing separator
				if ((i = txt.lastIndexOf(sep.charAt(0))) > 0 && i === len - 1) {
					txt = txt.substring(0, len -= 1);
				}
				if ((i = txt.lastIndexOf(sep)) > 0 && i === (len -= sepLen)) {
					txt = txt.substring(0, len);
				}
			// get text for filtering: ensuse trailing separator
			} else if ((i = txt.lastIndexOf(sep.charAt(0))) > 0 && i === len - 1 && sepLen > 1) {
				// if text ends with first char of separator, then add 2nd char of separator
				txt += sep.charAt(1);
			}
			if (txt.indexOf(sep) === 0) {
				txt = txt.substring(sepLen);
			}
			return txt ? txt.split(sep) : [];
		},
		// ensure/fill data for _key_ column which is used for rendering and filtering
		_fillKeys: function (fix) {
			if ((fix || !this._keyFixed) && this._key !== this._key_) {
				var count = this._count;
				while ((count -= 1) >= 0) {
					this._item(count, 2);
				}
			}
			this._keyFixed = 1;
		},
		// show/hide wait-for-remote-filtering css
		_wait: function (on) {
			var css = this.css.waitFiltering,
				load = this._loadInd,
				elem = this.mainElem,
				holder = this._itemsHolder;
			if (on) {
				elem.addClass(css);
				if (holder) {
					holder.addClass(css);
				}
				if (!load && elem.igLoading) {
					load = elem.igLoading().data('igLoading');
					if (load) {
						this._loadInd = load = load.indicator();
					}
				}
				if (load) {
					load.show();
				}
			} else if (elem) {
				elem.removeClass(css);
				if (holder) {
					holder.removeClass(css);
				}
				if (load) {
					load.hide();
				}
			}
		},
		filter: function (e, txtNew, noFilter) {
			/* Trigger filtering.
				paramType="object" optional="true" Internal use only: reference to browser event. 
				paramType="string" optional="true" Internal use only for remove filtering. 
				paramType="bool" optional="true" Internal use only to skip filtering. 
			*/
			var filter, key,
				i = -1,
				casc = this._cascFilter,
				txt = casc ? this._cascVal : (txtNew || this._texts()),
				len = casc ? 0 : txt.length,
				cond = len ? txt.toString() : null,
				ds = this._dataSource,
				o = this.options,
				expr = [],
				remote = casc === -1 || this._filtering < 0;
			// _filterTxt: get around remoteFiltering+LOD+dataSourceUrl
			// dataSource in this situation may accumulate same responces and doublicate same data
			if (noFilter || (this._hasData && cond && this._filterTxt === cond)) {
				return;
			}
			// this._expr - object/flag for remote filtering waiting: waiting response from server
			if (this._expr) {
				// container of variables to raise filtering when text was modified while waiting response after remote-filtering
				this._filterNew = { txt: txt, e: e };
				return;
			}
			this._filterTxt = cond;
			delete this._filterNew;
			// remote filtering may not support empty condition (if remote multi-filter is supported, haha)
			if (remote && len > 1 && !txt[len - 1]) {
				len = 0;
			}
			if (casc) {
				cond = 'equals';
				key = this._cascKey;
				expr.push({ fieldName: key, cond: cond, expr: txt });
			} else {
				cond = this._cond(o);
				key = (remote || !this._isStrCond(cond)) ? this._key : this._key_;
				while ((i += 1) < len) {
					expr.push({ fieldName: key, cond: cond, expr: txt[i] });
				}
			}
			if (expr.length === 0 && !e) {
				return;
			}
			// this._expr - object/flag used to raise event after filtering
			if (!this._fire('filtering', e, this._expr = { owner: this, expression: expr }, 1)) {
				delete this._expr;
				return;
			}
			if (remote && this._hasData && !this._fire('dataBinding', null, { owner: this, dataSource: ds }, 1)) {
				delete this._expr;
				return;
			}
			if (!casc) {
				this._needsSel = txt;
				this._needsSelEnd = this._multi(o) && this._sepEnd(this.text());
			}
			filter = ds.settings.filtering;
			filter.caseSensitive = o.caseSensitive;
			filter.type = o.filteringType;
			if (remote) {
				this._wait(true);
				key = o.filterExprUrlKey;
				if (key) {
					filter.filterExprUrlKey = key;
				}
				filter.expressions = expr;
				// suspend raising selection-change events
				this._waitFilter = !this._hasData;
				if (this._lod) {
					txt = this.text();
					if (this._lodTxt !== txt) {
						this._lodTxt = txt;
						ds._data = [];
						ds._dataView = [];
						ds._filteredDataView = [];
						ds._cachedDataView = null;
						ds.settings.paging.pageIndex = 0;
						ds.pageSizeDirty(true);
					}
				}
				ds.dataBind();
				return;
			}
			if (expr.length === 0) {
				ds.clearLocalFilter();
			} else {
				// ensure that data for _key_ column was filled
				this._fillKeys();
				ds.filter(expr, 'OR', this._noFilter);
			}
			this._dataChange(e, true);
		},
		// check if filter expression was modified while waiting for response from remote filtering
		// return 1, expression was changed while request to server: trigger filter from new text
		// return null/undefined, if no filter request or if expression was not changed
		_checkExpr: function () {
			// this._expr - object/flag used for filtering
			// this._filterNew - container of variables to raise filtering when text was modified while waiting response after remote-filtering
			var change,
				filterNew = this._filterNew,
				expr = this._expr,
				len = filterNew ? filterNew.txt.length : 0;
			if (!filterNew) {
				return;
			}
			if (expr) {
				expr = expr.expression;
			}
			if (len !== (expr ? expr.length : 0)) {
				change = 1;
			}
			while (!change && (len -= 1) >= 0) {
				change = filterNew.txt[len] !== expr[len].expr;
			}
			// filter expression was modified
			if (change) {
				delete this._expr;
				this.filter(filterNew.e, filterNew.txt, this._noFilter);
				return 1;
			}
			// filter expression was not modified
			delete this._filterNew;
		},
		_fixType: function (val) {
			var fields, type = this.options.valueKeyType;
			if (!_aNull(val)) {
				if (type === 'number') {
					return (typeof val === 'number') ? val : parseFloat(val);
				}
				if (type === 'bool') {
					return val === 'true' || val === true;
				}
				if (type === 'date' && !val.getTime) {
					val = val.toString();
					fields = val.replace(/[\. :]/g, '-').split('-');
					return (fields.length === 7) ? new Date(parseInt(fields[0], 10), parseInt(fields[1], 10) - 1,
						parseInt(fields[2], 10),	parseInt(fields[3], 10), parseInt(fields[4], 10),
						parseInt(fields[5], 10), parseInt(fields[6], 10)) : Date.parse(val);
				}
			}
			return val;
		},
		// verify that selectedItems[i].index/value/text are defined
		_initSel: function (o) {
			var item, val, id, ii, custom,
				more = 1,
				selItems = o.selectedItems,
				len = selItems ? selItems.length : 0,
				i = -1;
			while (!this._multi(o) && len > 1) {
				selItems.splice(len -= 1, 1);
			}
			id = len;
			while (id-- > 0) {
				item = selItems[id];
				item.value = this._fixType(val = item.value);
			}
			custom = o.text || ((len === 1 && this._custom(o)) ? val : null);
			o.text = null;
			while ((i += 1) < this._count && more) {
				val = this._item(i);
				more = null;
				id = len;
				while ((id -= 1) >= 0) {
					item = selItems[id];
					if (_aNull(ii = item.index) || ii < 0) {
						if (_equals(item.value, val)) {
							if (this.isSelected(i)) {
								selItems.splice(id, 1);
								len -= 1;
							} else {
								item.index = i;
								item.text = this._item(i, 2);
							}
						} else {
							more = 1;
							if (i === this._count - 1) {
								selItems.splice(id, 1);
							}
						}
					} else {
						item.value = item.value || this._item(ii);
						item.text = item.text || this._item(ii, 2);
					}
				}
			}
			if (custom && (!selItems || !selItems.length)) {
				this.text(custom);
			} else if (!this.text() || !this._custom(o)) {
				// update field from selectedItems
				this._updateFromList(null, 1);
			}
		},
		_dataChange: function (e, local) {
			var count, txt, selLen, selItems, data, top, firstMatch, fullMatch, firstFullMatch, item, cond,
				lod = this._lodWait,
				casc = this._cascFilter,
				more = !casc,
				i = -1,
				actID = -1,
				sel = this._needsSel,
				id = -1,
				keyVal = this._keyVal,
				key = this._key,
				dd = this._itemsHolder,
				ds = this._dataSource,
				filter = casc || this._filtering,
				o = this.options;
			// check for error while remote filtering
			// if this._cascUrl is set, then that is instant call from dataSource: skip it because we need to get data from dataSourceUrl
			if (!o || !this._multi || this._cascUrl) {
				return;
			}
			selItems = o.selectedItems;
			this._data = data = ds.dataView() || [];
			this._count = count = top = data.length;
			// _urlSel: flag to preserve selection after submit when data (+/-filtering) is remote
			// 1-no data, 2-has data
			if (!this._hasData && !count && o.dataSourceUrl && o.selectedItems) {
				this._urlSel = 1;
			}
			if (!keyVal) {
				keyVal = o.valueKey;
				if (!keyVal && data[0]) {
					// back up for first key in data
					for (keyVal in data[0]) {
						if (data[0].hasOwnProperty(keyVal)) {
							break;
						}
					}
				}
				this._keyVal = keyVal;
				key = o.textKey || keyVal;
				this._key_ = this._key = key;
				// missing _keyFixed: request to fill up _key_ column before filtering
				this._keyFixed = !o.format;
				if (!this._keyFixed) {
					this._key_ += '_';
				}
			}
			// verify that selection has correct valueType
			if (count && !o.valueKeyType) {
				while (++i < count) {
					if (!_aNull(item = this._item(i))) {
						o.valueKeyType = item === true || item === false ? 'bool' : (typeof item === 'number' ? 'number' : (item.getTime ? 'date' : 'string'));
						break;
					}
				}
				i = selItems ? selItems.length : 0;
				while (i-- > 0) {
					selItems[i].value = this._fixType(selItems[i].value);
				}
				this._cascSel = this._fixType(this._cascSel);
			}
			if (this._hasData) {
				if (this._checkExpr()) {
					return;
				}
				// _urlSel: flag to preserve selection after submit when data (+/-filtering) is remote
				// 1-no data, 2-has data
				if (this._urlSel === 1) {
					this._initSel(o);
					this._urlSel = 2;
				} else {
					// get current text which represents selection
					// at this point selectedItems can be empty
					if (this._urlSel || (lod && this.selectedIndex() < 0 && !o.autoComplete)) {
						txt = this.text();
					}
					if (!lod) {
						this._activate(-1, e);
						this._clearSel();
						this._lastScroll = this._virtualTop = this._topID = 0;
						this._scrollTo = -1;
					}
					if (dd) {
						if (!lod) {
							dd.empty();
						}
						this._listChanged = 1;
					}
					// set selection from text
					if (txt) {
						this._select(null, txt, 2);
					}
				}
			}
			// this._expr - object/flag used to raise event after filtering
			// initialize selected items after filtering
			// sel is array of strings entered in field and matching list-items should be selected
			if (this._expr) {
				// if remote filtering, then fire dataBound
				if (filter < 0) {
					this._fire('dataBound', null, { owner: this, dataSource: ds }, 1);
				}
				if (!this._isStrCond(cond = this._cond(o))) {
					cond = 'startsWith';
				}
				if (this._ddOn || (e && e.type === 'keydown')) {
					this._doDrop(1, e);
				}
				// fill data for _key_ column
				this._fillKeys(1);
				selLen = sel && !casc ? sel.length : 0;
				// ensure that selected item has correct index
				if (casc) {
					this._initSel(o);
					item = selItems ? selItems[0] : null;
					if (item) {
						while (++id < count) {
							if (item.value === this._item(id)) {
								item.index = id;
								break;
							}
						}
						if (id === count) {
							o.selectedItems = null;
							this.fieldElem.val('');
						}
					}
				}
				// note: indexes of selectedItems will match with indexes of texts in field
				selItems = [];
				// loop through all items in data
				while ((id += 1) < count && more) {
					txt = this._item(id, 2);
					i = -1;
					// assume end of search
					more = null;
					// multiple search strings (multiselection)
					while ((i += 1) < selLen) {
						// if full match was found, then sel[i] was set to null
						if (sel[i]) {
							// continue search
							more = 1;
							if (txt && ds._findMatch(txt, sel[i], 'string', !o.caseSensitive, cond)) {
								item = null;
								// first-backup-match
								if (!selItems[i]) {
									selItems[i] = item = this._createSelItem(id, txt);
								}
								// try to find exact-match
								fullMatch = txt.length === sel[i].length;
								if (!firstMatch || fullMatch) {
									// set flag that first match was found
									firstMatch = 1;
									// find lowest scroll-index
									top = Math.min(top, id);
									if (fullMatch) {
										if (!firstFullMatch) {
											top = id;
										}
										// set flag that first full match was found
										firstFullMatch = 1;
										// update first-backup-match with exact-match
										selItems[i] = item || this._createSelItem(id, txt);
										// remove item from search
										sel[i] = null;
										if (!this._multi(o)) {
											// exit outer loop: only one match is required
											id = count + 1;
										}
										break;
									}
								}
							}
						}
					}
				}
				// remove selectedItems, which corresponding texts in field, were not found
				while ((selLen -= 1) >= 0) {
					item = selItems[selLen];
					if (!item || (actID < 0 && !this._needsSelEnd)) {
						if (item) {
							actID = item.index;
						}
						if (!item || item.text !== txt) {
							selItems.splice(selLen, 1);
						}
					}
				}
				if (!casc) {
					this._selChange(selItems, e, null, 1);
					this._selChanged(e);
					if (this._needsSelEnd) {
						this._updateFromList(e, 1, 1);
					}
				}
				// ensure that after remote filtering (initially closed list) active item is set
				if (actID < 0 && count) {
					item = this._item(0, 2);
					txt = this.text();
					if (item && txt) {
						if (!o.caseSensitive) {
							item = item.toLowerCase();
							txt = txt.toLowerCase();
						}
						if (item.indexOf(txt) === 0) {
							actID = 0;
						}
					}
				}
				if (actID >= 0) {
					this._activate(top = actID, e, 1);
				}
				this._fixSelScroll(this._scrollTo = (top === count) ? 0 : top);
				// this._expr - object/flag used to raise event after filtering
				this._fire('filtered', e, this._expr, 1);
				this._autoComplete(1);
				this._wait();
				// enable raising selection events
				delete this._waitFilter;
				delete this._expr;
			} else {
				// _urlSel: flag to preserve selection after submit when data (+/-filtering) is remote
				// 1-no data, 2-has data
				if (this._urlSel !== 2) {
					txt = this.text();
					sel = this.selectedIndex();
					if (txt && !this._custom(o) && sel < 0) {
						if (!this._hasData || !o.autoComplete) {
							this._select(null, txt, 2);
						}
					} else {
						// condition when data from dataSourceUrl of cascadingDataSources is ready: restore selectedItems from _cascSel
						if (e === true && !_aNull(sel = (sel < 0) ? this._cascSel : null)) {
							selItems = null;
							while (!selItems && ++id < count) {
								if (this._item(id) === sel) {
									selItems = [this._createSelItem(id, null, sel)];
								}
							}
							o.selectedItems = selItems;
							if (!selItems) {
								this.fieldElem.val('');
							}
							delete this._cascSel;
						}
						// wait until cascading combo gets its filtered data
						if (!casc) {
							this._initSel(o);
						}
					}
				}
				this._fire('dataBound', null, { owner: this, dataSource: ds }, 1);
				// _urlSel: flag to preserve selection after submit when data (+/-filtering) is remote
				// 1-no data, 2-has data
				if (this._urlSel === 2 && !casc) {
					this._noFilter = 1;
					this._updateFromList(null, 1);
					delete this._noFilter;
					delete this._urlSel;
				} else if (filter) {
					this.filter(null, null, this._noFilter);
				}
				if (this._ddOn) {
					this._doDrop(1, e, 1);
				}
			}
			if (this._mode(o) > 1 && this.selectedIndex() < 0) {
				this.selectedIndex(0);
			}
			if (data.length < 1) {
				this._fire('noMatchFound', e, { owner: this, text: this.text() });
			}
			// enable raising selection events and drop-down
			this._hasData = 1;
			this._fixClear();
			this._fixNull();
			this._save(o);
			if (this._lodWait && !local) {
				this._wait();
				this._fixSel();
				delete this._lodWait;
			}
			this._lodLbl();
			// cascade: check if parent combo was created before child or parent did not have data
			if (_cascWait) {
				// item: reference to child combo which waits for initializing its parent or data
				more = _cascWait[id = e = this.element[0]];
				if (!more) {
					more = _cascWait[id = e.id];
				}
				count = more ? more.length : 0;
				while (count-- > 0) {
					item = more[count];
					// check if this is parentCombo of cascading combo
					casc = item.options.parentCombo;
					if (casc && typeof casc === 'string') {
						casc = $(i = casc);
						if (casc.length !== 1) {
							casc = $('#' + i);
						}
					}
					if (casc && casc.element) {
						casc = casc.element[0];
					} else if (casc && casc.length === 1) {
						casc = casc[0];
					}
					if (casc === e) {
						// that is correct parentCombo
						if (_cascWait) {
							// remove request to call _cascade for slave igCombo
							delete _cascWait[id];
							// check if _cascWait should be removed
							for (key in _cascWait) {
								if (_cascWait.hasOwnProperty(key)) {
									casc = null;
									break;
								}
							}
							if (casc) {
								_cascWait = undefined;
							}
						}
						item._cascade(false, false, this);
					}
				}
			}
			// cascade: flag to set last value after data is ready
			if (this._valTime === 1) {
				delete this._valTime;
				this.value(this._valLast, true);
			}
		},
		_locale: function (key) {
			var val = this.options[key];
			if (_aNull(val)) {
				val = $.ig.Combo && $.ig.Combo.locale ? $.ig.Combo.locale[key] : null;
			}
			return val || '';
		},
		_titles: function () {
			var val = this._locale('clearButtonTitle');
			this.clearElem.attr('title', val).attr('longdesc', val);
			val = this._locale('dropDownButtonTitle');
			this.buttonElem.attr('title', val).attr('longdesc', val);
		},
		_fire: function (t, e, a, fire) {
			return (this._canFire || fire) ? this._trigger(t, e, a) : true;
		},
		// If igCombo is created by Mvc and it is located in dialog, then same options will be called twice.
		// If selectedItems come before dataSource, then selection/value will be destroyed by changed dataSource.
		// To prevent that, validate if dataSource has same content and skip "set".
		_same: function (old, val) {
			if (old === val) {
				return true;
			}
			if (!old || !val) {
				return;
			}
			var p1, p2, item, key, i = val.length;
			if (i !== old.length) {
				return;
			}
			while (i-- > 0) {
				item = val[i];
				if ((item && !old[i]) || (!item && old[i])) {
					return;
				}
				for (key in item) {
					if (item.hasOwnProperty(key)) {
						p1 = item[key];
						p2 = old[i][key];
						if (p1 !== p2 && ((p1 && !p2) || (!p1 && p2) || !p1.getTime || !p2.getTime || p1.getTime() !== p2.getTime())) {
							return;
						}
					}
				}
			}
			return true;
		},
		_setOption: function (key, val) {
			var o = this.options, field = this.fieldElem, elem = this.mainElem;
			if (this._same(o[key], val)) {
				return this;
			}
			if (key === 'selectedItems') {
				this._clearSel();
			}
			if (key.indexOf('virt') === 0 || key.indexOf('Match') > 0 || key.indexOf('empl') > 0 ||
					key.indexOf('drop') === 0 || key === 'caseSensitive' ||
					key === 'format' || key === 'enableActiveItem') {
				o = null;
				delete this._it;
			}
			if (key === 'multiSelection' || !o) {
				this._listRemove();
			}
			$.Widget.prototype._setOption.apply(this, arguments);
			// parentCombo, cascadingDataSources, parentComboKey, useTopParentDataSource
			if (key.indexOf('par') === 0 || key.indexOf('casc') === 0 || key.indexOf('useT') === 0) {
				this._cascade();
				return this;
			}
			if (typeof val === 'function' || !o) {
				return this;
			}
			if (key === 'width' || key === 'height' || key === 'showDropDownButton') {
				this._lastHeight = null;
				this._doSize();
			} else if (key === 'selectedItems' || key === 'multiSelection') {
				this._initSel(o);
				this._updateFromList(null, 1);
			} else if (key.indexOf('Title') > 0) {
				this._titles();
			} else if (key.indexOf('dataS') === 0 || key.indexOf('fil') === 0 || key.indexOf('Key') > 0 || key.indexOf('OnDem') > 0) {
				this._hasData = false;
				this._lod = this._totalAll = o._totalAll = this._count = 0;
				this.selectedIndex(-1);
				this.activeIndex(-1);
				this.dataBind();
			} else if (key === 'enableClearButton') {
				this._fixClear(1);
			} else if (key === 'tabIndex' || key === 'disabled') {
				field.attr(key, val);
				this._fixClear();
			} else if (key === 'mode') {
				field.attr('readOnly', this._mode(o) > 0);
				this._fixClear();
			} else if (key === 'enableDisplayBlock') {
				elem.css('display', val ? 'block' : 'inline-block');
			} else if (key === 'itemSeparator') {
				this._updateFromList();
			} else if (key === 'text') {
				this.text(val);
			} else if (key === 'nullText') {
				this._fixNull();
			} else if (key === 'validatorOptions') {
				this.validator();
			}
			return this;
		}
	});
	$.extend($.ui.igCombo, { version: '12.2.20122.1021' });
}(jQuery));



