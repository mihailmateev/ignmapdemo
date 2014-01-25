/*!
 * Infragistics.Web.ClientUI Grid Sorting 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery-tmpl.js (https://github.com/jquery/jquery-tmpl)
 *	ig.ui.grid.framework.js
 *  ig.ui.editors.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */

/*global jQuery, toStaticHTML */
if (typeof (jQuery) !== "function") {
	throw new Error("jQuery is undefined");
}
(function ($) {

	/*
		igGridFiltering widget. The widget is pluggable to the element where the grid is instantiated and the actual igGrid object doesn't know about this
		the filtering widget just attaches its functionality to the grid
		it supports filtering dropdowns with various predefined filtering expressions based on the column type 
		the widget also implements has full keyboard support with the TAB , SPACE/ENTER keys. 
	*/
    $.widget("ui.igGridFiltering", {
        /* property showing whether it should be rendered in feature chooser */
        renderInFeatureChooser: true,
		options: {
			/* type="true|false" enables/disables filtering case sensitivity
                true type="bool" Enables filtering case sensitivity 
                false type="bool" Disables filtering case sensitivity 
            */
			caseSensitive: false,
			//dropDownAnimations: true,
			/* type="true|false" Enable/disable footer visibility with summary info about the filter.
                true type="bool" 
                false type="bool" the filter summary row (in the footer) will only be visible when paging is enabled (or some other feature that renders a footer)
            */
			filterSummaryAlwaysVisible: true,
            /* type="true|false" Render in feature chooser. Feature chooser is dialog which lists all the enabled features (like Sorting, Filtering, Hiding etc.) of igGrid. */
            renderFC: true,
			/* type="string" Summary template that will appear in the bottom left corner of the footer. Has the format '${matches} matching records' */
			filterSummaryTemplate: $.ig.GridFiltering.locale.filterSummaryTemplate,
			/* 
                type="linear|none" type of animations for the column filter dropdowns
                linear type="string"
                none type="string"
            */
			filterDropDownAnimations: "linear",
			/* type="number" animation duration in milliseconds for the filter dropdown animations */
			filterDropDownAnimationDuration: 500,
			/* type="string|number" width of the column filter dropdowns
                string The width in pixels (0px)
                number The width as a number (0)
            */
			filterDropDownWidth: 0,
			/* type="object" Height of the column filter dropdowns
                string The height of the column filter dropdowns in pixels (0px).
                number The height of the column filter dropdowns as a number (0).
            */
			filterDropDownHeight: 0,
			/* type="string" URL key name that specifies how the filtering expressions will be encoded for remote requests, e.g. &filter('col') = startsWith. Default is OData */
			filterExprUrlKey: null,
			/* type="true|false" Enable/disable filter icons visibility.
                true type="bool" all predefined filters in the filter dropdowns will have icons rendered in front of the text
                false type="bool"
            */
			filterDropDownItemIcons: true,
			/* type="array" a list of column settings that specifies custom filtering options on a per column basis */
			columnSettings: [
				{
					/* type="string" Specifies column key. Either key or index must be set in every column setting.*/
					columnKey: null,
					/* type="number" Specifies column index. Either key or index must be set in every column setting.*/
					columnIndex: null,
					/* type="bool" Enables/disables filtering for the column.*/
					allowFiltering: true,
					/* type="empty|notEmpty|null|notNull|equals|doesNotEqual|startsWith|contains|doesNotContain|endsWith|greaterThan|lessThan|greaterThanOrEqualTo|lessThanOrEqualTo|true|false|on|notOn|before|after|today|yesterday|thisMonth|lastMonth|nextMonth|thisYear|nextYear|lastYear" default filtering condition for the column
                    empty type="string"
                    notEmpty type="string"
                    null type="string"
                    notNull type="string"
                    equals type="string"
                    doesNotEqual type="string"
                    startsWith type="string"
                    contains type="string"
                    doesNotContain type="string"
                    endsWith type="string"
                    greaterThan type="string"
                    lessThan type="string"
                    greaterThanOrEqualTo type="string"
                    lessThanOrEqualTo type="string"
                    true type="bool"
                    false type="bool"
                    on type="string"
                    notOn type="string"
                    before type="string"
                    after type="string"
                    today type="string"
                    yesterday type="string"
                    thisMonth type="string"
                    lastMonth type="string"
                    nextMonth type="string"
                    thisYear type="string"
                    nextYear type="string"
                    lastYear type="string"
                    */
					condition: null
				}
			],
			/* type="remote|local" Type of filtering. Delegates all filtering functionality to the $.ig.DataSource.
            remote type="string"
            local type="string"
             */
			type: null,
			/* type="number" Time in milliseconds for which widget will wait for keystrokes before sending filtering request.*/
			filterDelay: 500,
			/* type="simple|advanced" Default is 'simple' for non-virtualized grids, and 'advanced' when virtualization is enabled 
                simple type="string" renders just a filter row
                advanced type="string" allows to configure multiple filters from a dialog - Excel style
            */
			mode: null,
			/* type="true|false" defines whether to show/hide editors in advanced mode
                true type="bool" 
                false type="bool" no editors will be rendered in the advanced mode
            */
			advancedModeEditorsVisible: false,
			/* type="left|right" location of the advanced filtering button when advancedModeEditorsVisible is false (i.e. when the button is rendered in the header) 
            left type="string"
            right type="string"
            */
			advancedModeHeaderButtonLocation: "left",
			/* showEditorsOnClick: false, // when true, editors will not be rendered for every column, and one shared editor will be reused */
			/* type="string|number" default filter dialog width (used for Advanced filtering) 
                string The dialog window width in pixels (370px).
                number The dialog window width as a number (370).
            */
			filterDialogWidth: 370,
			/* type="string|number" maximum filter dialog height (used for Advanced filtering)  
                string The dialog window height in pixels (350px).
                number The dialog window height as a number (350).
            */
			filterDialogMaxHeight: 350,
			/* type="string|number" default filter dialog height (used for Advanced filtering)  
                string The dialog window height in pixels (350px).
                number The dialog window height as a number (350).
            */
			filterDialogHeight: '',
			/* type="string|number" Width of the filtering condition dropdowns in the advanced filter dialog 
                string The filtering condition dropdowns width in pixels (80px).
                number The filtering condition dropdowns width as a number (80).
            */
			filterDialogFilterDropDownDefaultWidth: 80,
			/* type="string|number" width of the filtering expression input boxes in the advanced filter dialog 
                string The filtering expression input boxes width in pixels (80px).
                number The filtering expression input boxes width as a number (80).
            */
			filterDialogExprInputDefaultWidth: 80,
			/* type="string|number" Width of the column chooser dropdowns in the advanced filter dialog 
                string The column chooser dropdowns width in pixels (80px).
                number The column chooser dropdowns width as a number (80).
            */
			filterDialogColumnDropDownDefaultWidth: null,
			/* showFilterDialogClearAllButton: true, // if false, doesn't render the "Clear ALL" button link in the advanced filtering dialog */
			/* type="true|false" Enable/disable filter button visibility.
                true type="bool"
                false type="bool" no filter dropdown buttons will be rendered and predefined list of filters will not be rendered for the columns
            */
			renderFilterButton: true,
			/* type="left|right" the filtering button for filter dropdowns can be rendered either on the left of the filter editor or on the right 
            left type="string"
            right type="string"
            */
			filterButtonLocation: "left",
			/* list of configurable and localized null texts that will be used for the filter editors */
			nullTexts: {
				"startsWith": $.ig.GridFiltering.locale.startsWithNullText,
				"endsWith": $.ig.GridFiltering.locale.endsWithNullText,
				"contains": $.ig.GridFiltering.locale.containsNullText,
				"doesNotContain": $.ig.GridFiltering.locale.doesNotContainNullText,
				"equals": $.ig.GridFiltering.locale.equalsNullText,
				"doesNotEqual": $.ig.GridFiltering.locale.doesNotEqualNullText,
				"greaterThan": $.ig.GridFiltering.locale.greaterThanNullText,
				"lessThan": $.ig.GridFiltering.locale.lessThanNullText,
				"greaterThanOrEqualTo": $.ig.GridFiltering.locale.greaterThanOrEqualToNullText,
				"lessThanOrEqualTo": $.ig.GridFiltering.locale.lessThanOrEqualToNullText,
				"on": $.ig.GridFiltering.locale.onNullText,
				"notOn": $.ig.GridFiltering.locale.notOnNullText,
				"thisMonth": $.ig.GridFiltering.locale.thisMonthLabel,
				"lastMonth": $.ig.GridFiltering.locale.lastMonthLabel,
				"nextMonth": $.ig.GridFiltering.locale.nextMonthLabel,
				"thisYear": $.ig.GridFiltering.locale.thisYearLabel,
				"lastYear": $.ig.GridFiltering.locale.lastYearLabel,
				"nextYear": $.ig.GridFiltering.locale.nextYearLabel,
				"empty": $.ig.GridFiltering.locale.emptyNullText,
				"notEmpty": $.ig.GridFiltering.locale.notEmptyNullText,
				"null": $.ig.GridFiltering.locale.nullNullText,
				"notNull": $.ig.GridFiltering.locale.notNullNullText
			},
		    /* A list of configurable and localized labels that will be used for teh predefnied filtering conditions in the filter dropdowns. */
			labels: {
				noFilter: $.ig.GridFiltering.locale.noFilterLabel,
				clear: $.ig.GridFiltering.locale.clearLabel,
				startsWith: $.ig.GridFiltering.locale.startsWithLabel,
				endsWith: $.ig.GridFiltering.locale.endsWithLabel,
				contains: $.ig.GridFiltering.locale.containsLabel,
				doesNotContain: $.ig.GridFiltering.locale.doesNotContainLabel,
				equals: $.ig.GridFiltering.locale.equalsLabel,
				doesNotEqual: $.ig.GridFiltering.locale.doesNotEqualLabel,
				greaterThan: $.ig.GridFiltering.locale.greaterThanLabel,
				lessThan: $.ig.GridFiltering.locale.lessThanLabel,
				greaterThanOrEqualTo: $.ig.GridFiltering.locale.greaterThanOrEqualToLabel,
				lessThanOrEqualTo: $.ig.GridFiltering.locale.lessThanOrEqualToLabel,
				trueLabel: $.ig.GridFiltering.locale.trueLabel,
				falseLabel: $.ig.GridFiltering.locale.falseLabel,
				after: $.ig.GridFiltering.locale.afterLabel,
				before: $.ig.GridFiltering.locale.beforeLabel,
				today: $.ig.GridFiltering.locale.todayLabel,
				yesterday: $.ig.GridFiltering.locale.yesterdayLabel,
				thisMonth: $.ig.GridFiltering.locale.thisMonthLabel,
				lastMonth: $.ig.GridFiltering.locale.lastMonthLabel,
				nextMonth: $.ig.GridFiltering.locale.nextMonthLabel,
				thisYear: $.ig.GridFiltering.locale.thisYearLabel,
				lastYear: $.ig.GridFiltering.locale.lastYearLabel,
				nextYear: $.ig.GridFiltering.locale.nextYearLabel,
				on: $.ig.GridFiltering.locale.onLabel,
				notOn: $.ig.GridFiltering.locale.notOnLabel,
				advancedButtonLabel: $.ig.GridFiltering.locale.advancedButtonLabel,
				filterDialogCaptionLabel: $.ig.GridFiltering.locale.filterDialogCaptionLabel,
				filterDialogConditionLabel1: $.ig.GridFiltering.locale.filterDialogConditionLabel1,
				filterDialogConditionLabel2: $.ig.GridFiltering.locale.filterDialogConditionLabel2,
				filterDialogOkLabel: $.ig.GridFiltering.locale.filterDialogOkLabel,
				filterDialogCancelLabel: $.ig.GridFiltering.locale.filterDialogCancelLabel,
				filterDialogAnyLabel: $.ig.GridFiltering.locale.filterDialogAnyLabel,
				filterDialogAllLabel: $.ig.GridFiltering.locale.filterDialogAllLabel,
				filterDialogAddLabel: $.ig.GridFiltering.locale.filterDialogAddLabel,
				filterDialogErrorLabel: $.ig.GridFiltering.locale.filterDialogErrorLabel,
				filterSummaryTitleLabel: $.ig.GridFiltering.locale.filterSummaryTitleLabel,
				filterDialogClearAllLabel: $.ig.GridFiltering.locale.filterDialogClearAllLabel,
				empty: $.ig.GridFiltering.locale.emptyNullText,
				notEmpty: $.ig.GridFiltering.locale.notEmptyNullText,
				nullLabel: $.ig.GridFiltering.locale.nullNullText,
				notNull: $.ig.GridFiltering.locale.notNullNullText
			},
			/* type="string" custom tooltip template for the filter button, when a filter is applied */
			tooltipTemplate: $.ig.GridFiltering.locale.tooltipTemplate,
			/* type="string" Custom template for add condition area in the filter dialog.*/
			filterDialogAddConditionTemplate: "<div><span>${label1}</span><div><select></select></div><span>${label2}</span></div>",
			/* type="string" Custom template for options in dropdown in add condition area in the filter dialog.*/
			filterDialogAddConditionDropDownTemplate: "<option value='${value}'>${text}</option>",
			/* type="string" Custom template for filter dialog */
			filterDialogFilterTemplate: "<tr><td><input/></td><td><select></select></td><td><input /> </td><td><span></span></td></tr>",
			//filterDialogFilterColumnsListTemplate: "<option value='${columnKey}'>${columnKey}</option>",
			/* type="string" Custom template for options in condition list in filter dialog */
			filterDialogFilterConditionTemplate: "<option value='${conditionName}'>${conditionLabel}</option>",
			/* type="string|number" add button width - in the advanced filter dialog 
                string The dialog Add button width in pixels (100px).
                number The dialog Add button width as a number (100).
            */
			filterDialogAddButtonWidth: 100,
			/* type="string|number" Width of the Ok and Cancel buttons in the advanced filtering dialogs 
                string The advanced filter dialog Ok and Cancel buttons width in pixels (100px).
                number The advanced filter dialog Ok and Cancel buttons width as a number (100).
            */
			filterDialogOkCancelButtonWidth: 100,
			/* type="number" Maximum number of filter rows in the advanced filtering dialog. if this number is exceeded, an error message will be rendered */
			filterDialogMaxFilterCount: 5,
            /* type="string" Controls containment behavior. 
                owner type="string" The filter dialog will be draggable only in the grid area
                window type="string" The filter dialog will be draggable in the whole window area
            */
            filterDialogContainment: "owner",
			/* type="true|false" Enable/disable empty condition visibility in the filter.
                true type="bool" shows empty and not empty filtering conditions in the dropdowns
                false type="bool"
            */
			showEmptyConditions: false,
			/* type="true|false" Enable/disable visibility of null and not null filtering conditions in the dropdowns. 
                true type="bool" shows null and not null filtering conditions in the dropdowns
                false type="bool"
            */
			showNullConditions: false,
			/* type="string" Feature chooser text when filter is shown and filter mode is simple*/
			featureChooserText: $.ig.GridFiltering.locale.featureChooserText,
			/* type="string" Feature chooser text when filter is hidden and filter mode is simple*/
			featureChooserTextHide: $.ig.GridFiltering.locale.featureChooserTextHide,
			/* type="string" Feature chooser text when filter mode is advanced*/
			featureChooserTextAdvancedFilter: $.ig.GridFiltering.locale.featureChooserTextAdvancedFilter
		},
		css: {
			/* Classes applied to the filter row TR in the headers table */
			"filterRow": "ui-iggrid-filterrow ui-widget", // A.T. 15 Feb 2011 - removing ui-widget-content as it messes up hover and focus styles for buttons
			/* Classes applied to every filter cell TH */
			"filterCell": "ui-iggrid-filtercell",
			/* Classes applied to every filter editor element (igEditor) */
			"filterCellEditor": "ui-iggrid-filtereditor",
			/* Classes applied to the UL filter dropdown list */
			"filterDropDownList": "ui-menu ui-widget ui-widget-content ui-iggrid-filterddlist ui-corner-all",
			/* Classes applied to the DIV which wraps the dropdown UL */
			"filterDropDown": "ui-iggrid-filterdd",
			/* Classes applied to the element that holds the text in every filter list item (LI) */
			"filterDropDownListItemTextContainer": "ui-iggrid-filterddlistitemcontainer",
			/* Classes applied to each filter dropdown list item  (LI) */
			"filterDropDownListItem": "ui-iggrid-filterddlistitem",
			/* Class applied to the list item that holds the Advanced button, if options are configured such that editors are shown when mode = "advanced" */
			"filterDropDownListItemAdvanced": "ui-iggrid-filterddlistitemadvanced",
			/* Classes applied to the list item when filtering icons are visible for it */
			"filterDropDownListItemWithIcons": "ui-iggrid-filterddlistitemicons ui-state-default",
			/* Classes applied to the "clear" filter list item */
			"filterDropDownListItemClear": "ui-iggrid-filterddlistitemclear",
			/* Classes applied to the list item when it is hovered */
			"filterDropDownListItemHover": "ui-iggrid-filterddlistitemhover ui-state-hover",
			/* Classes applied to the list item when it is selected */
			"filterDropDownListItemActive": "ui-iggrid-filterddlistitemactive ui-state-active",
			"filterDateCell": "",
			"filterTextCell": "",
			"filterNumberCell": "",
			"filterBoolCell": "",
			/* Classes applied to every filtering dropdown button */
			"filterButton": "ui-iggrid-filterbutton ui-corner-all ui-icon ui-icon-triangle-1-s",
			/* Classes applied to the button when mode = advanced. This also applies to the button when it's rendered in the header (which is the default behavior). */
			"filterButtonAdvanced": "ui-iggrid-filterbutton ui-iggrid-filterbuttonadvanced ui-icon ui-icon-search", // icon similar to Excel's filtering
			/* Classes applied to the advanced filtering button when it is rendered on the right */
			"filterButtonAdvancedRight": "ui-iggrid-filterbuttonright ui-iggrid-filterbuttonadvanced ui-icon ui-icon-search",
			/* Classes applied to the filter button when it is hovered */
			"filterButtonHover": "ui-iggrid-filterbuttonhover ui-state-hover",
			/* Classes applied to the filter button when it is selected */
			"filterButtonActive": "ui-iggrid-filterbuttonactive ui-state-active",
			/* Classes applied to the filter button when it has focus but is not selected. */
			"filterButtonFocus": "ui-iggrid-filterbuttonfocus ui-state-focus",
			/* Classes applied to the filtering button when it is disabled  */
			"filterButtonDisabled": "ui-iggrid-filterbuttondisabled ui-state-disabled",
			/* Classes applied to the filter button when a date filter is defined for the column */
			"filterButtonDate": "ui-iggrid-filterbuttondate",
			/* Classes applied to the filter button when a string filter is applied for the column (default) */
			"filterButtonString": "ui-iggrid-filterbuttonstring",
			/* Classes applied to the filter button when a number filter is applied for the column (default) */
			"filterButtonNumber": "ui-iggrid-filterbuttonnumber",
			/* Classes applied to the filter button when a boolean filter is applied for the column (default) */
			"filterButtonBoolean": "ui-iggrid-filterbuttonbool",
			/* Classes applied on the advanced button when it is hovered */
			"filterButtonAdvancedHover": "ui-iggrid-filterbuttonadvancedhover ui-state-hover",
			/* Classes applied on the advanced button when it is selected */
			"filterButtonAdvancedActive": "ui-iggrid-filterbuttonadvancedactive ui-state-active",
			/* Classes applied on the advanced button when it has focus */
			"filterButtonAdvancedFocus": "ui-iggrid-filterbuttonadvancedfocus ui-state-focus",
			/* Classes applied on the advanced button when it is disabled */
			"filterButtonAdvancedDisabled": "ui-iggrid-filterbuttonadvanceddisabled ui-state-disabled",
			/* Classes applied to every filter dropdown list item's image icon area */
			"filterItemIcon": "ui-iggrid-filtericon",
			/* Classes applied to the item icon's container element */
			"filterItemIconContainer": "ui-iggrid-filtericoncontainer",
			/* Classes applied to the item icon's span when the item holds a startsWith condition */
			"filterItemIconStartsWith": "ui-iggrid-filtericonstartswith",
			/* Classes applied to the item icon's span when the item holds an endsWith condition */
			"filterItemIconEndsWith": "ui-iggrid-filtericonendswith",
			/* Classes applied to the item icon's span when the item holds a contains condition */
			"filterItemIconContains": "ui-iggrid-filtericoncontains",
			/* Classes applied to the item icon's span when the item holds a contains condition */
			"filterItemIconEquals": "ui-iggrid-filtericonequals",
			/* Classes applied to the item icon's span when the item holds a doesNotEqual condition */
			"filterItemIconDoesNotEqual": "ui-iggrid-filtericondoesnotequal",
			/* Classes applied to the item icon's span when the item holds a doesNotContain condition */
			"filterItemIconDoesNotContain": "ui-iggrid-filtericondoesnotcontain",
			/* Classes applied to the item icon's span when the item holds a greaterThan condition */
			"filterItemIconGreaterThan": "ui-iggrid-filtericongreaterthan",
			/* Classes applied to the item icon's span when the item holds a lessThan condition */
			"filterItemIconLessThan": "ui-iggrid-filtericonlessthan",
			/* Classes applied to the item icon's span when the item holds a greaterThanOrEqualTo condition */
			"filterItemIconGreaterThanOrEqualTo": "ui-iggrid-filtericongreaterthanorequalto",
			/* Classes applied to the item icon's span when the item holds a lessThanOrEqualTo condition */
			"filterItemIconLessThanOrEqualTo": "ui-iggrid-filtericonlessthanorequalto",
			/* Classes applied to the item icon's span when the item holds a true condition */
			"filterItemIconTrue": "ui-iggrid-filtericontrue",
			/* Classes applied to the item icon's span when the item holds a false condition */
			"filterItemIconFalse": "ui-iggrid-filtericonfalse",
			/* Classes applied to the item icon's span when the item holds an after condition */
			"filterItemIconAfter": "ui-iggrid-filtericonafter",
			/* Classes applied to the item icon's span when the item holds a before condition */
			"filterItemIconBefore": "ui-iggrid-filtericonbefore",
			/* Classes applied to the item icon's span when the item holds a today condition */
			"filterItemIconToday": "ui-iggrid-filtericontoday",
			/* Classes applied to the item icon's span when the item holds a yesterday condition */
			"filterItemIconYesterday": "ui-iggrid-filtericonyesterday",
			/* Classes applied to the item icon's span when the item holds a thisMonth condition */
			"filterItemIconThisMonth": "ui-iggrid-filtericonthismonth",
			/* Classes applied to the item icon's span when the item holds a lastMonth condition */
			"filterItemIconLastMonth": "ui-iggrid-filtericonlastmonth",
			/* Classes applied to the item icon's span when the item holds a nextMonth condition */
			"filterItemIconNextMonth": "ui-iggrid-filtericonnextmonth",
			/* Classes applied to the item icon's span when the item holds a thisYear condition */
			"filterItemIconThisYear": "ui-iggrid-filtericonthisyear",
			/* Classes applied to the item icon's span when the item holds a lastYear condition */
			"filterItemIconLastYear": "ui-iggrid-filtericonlastyear",
			/* Classes applied to the item icon's span when the item holds a nextYear condition */
			"filterItemIconNextYear": "ui-iggrid-filtericonnextyear",
			/* Classes applied to the item icon's span when the item holds an on condition */
			"filterItemIconOn": "ui-iggrid-filtericonon",
			/* Classes applied to the item icon's span when the item holds a notOn condition */
			"filterItemIconNotOn": "ui-iggrid-filtericonnoton",
			/* Classes applied to the item icon's span when the item holds a clear condition */
			"filterItemIconClear": "ui-iggrid-filtericonclear",
			/* Classes applied to the filtering block area, when the advanced filter dialog is opened and the area behind it is grayed out (that's the block area) */
			"blockArea": "ui-widget-overlay ui-iggrid-blockarea",
			/* Classes applied to the filter dialog element */
			"filterDialog": "ui-dialog ui-draggable ui-resizable ui-iggrid-dialog ui-widget ui-widget-content ui-corner-all",
			/* Classes applied to the filter dialog header caption area */
			"filterDialogHeaderCaption": "ui-dialog-titlebar ui-iggrid-filterdialogcaption ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",
			/* Class applied to the filter dialog header caption title */
			"filterDialogHeaderCaptionTitle": "ui-dialog-title",
			/* Classes applied to the filter dialog add condition area */
			"filterDialogAddCondition": "ui-iggrid-filterdialogaddcondition",
			/* Classes applied to the filter dialog add condition SELECT dropdown. */
			"filterDialogAddConditionDropDown": "ui-iggrid-filterdialogaddconditionlist",
			/* Classes applied to the filter dialog add button */
			"filterDialogAddButton": "ui-iggrid-filterdialogaddbuttoncontainer ui-helper-reset",
			/* Classes applied to the filter dialog OK and Cancel buttons. */
			"filterDialogOkCancelButton": "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix ui-iggrid-filterdialogokcancelbuttoncontainer",
			/* Classes applied to the filter dialog filters table */
			"filterDialogFiltersTable": "ui-iggrid-filtertable ui-helper-reset",
			/* Classes applied to the "X" button used to remove filters from the filters table */
			"filterDialogFilterRemoveButton": "ui-icon ui-icon-closethick",
			/* Classes applied to the filter dialog "Clear All" button. */
			"filterDialogClearAllButton": "ui-iggrid-filterdialogclearall",
			/*Classes applied to the feature chooser icon when filter shows advanced dialog*/
			"featureChooserModalDialogIcon": "ui-icon ui-icon-newwin"
		},
		events: {
			/* cancel="true" Event fired before a filtering operation is executed (remote request or local). 
			Return false in order to cancel filtering operation.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.columnIndex to get column index.
			Use ui.columnKey to get column key.
			*/
			dataFiltering: "dataFiltering",
			/* Event fired after the filtering has been executed and results are rendered.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.columnIndex to get column index.
			Use ui.columnKey to get column key.
			*/
			dataFiltered: "dataFiltered",
			/* cancel="true" Event fired before the filter dropdown is opened for a specific column. 
			Return false in order to cancel dropdown opening.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dropDown to get reference to dropdown DOM element.
			*/
			dropDownOpening: "dropDownOpening",
			/* Event fired after the filter dropdown is opened for a specific column. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dropDown to get reference to dropdown DOM element.
			*/
			dropDownOpened: "dropDownOpened",
			/* cancel="true" Event fired before the filter dropdown starts closing. 
            Return false in order to cancel dropdown closing.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dropDown to get reference to dropdown DOM element.
			*/
			dropDownClosing: "dropDownClosing",
			/* Event fired after a filter column dropdown is completely closed. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dropDown to get reference to dropdown DOM element.
			*/
			dropDownClosed: "dropDownClosed",
			/* cancel="true" Event fired before the advanced filtering dialog is opened.
			Return false in order to cancel filter dialog opening.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dialog to get reference to filtering dialog DOM element.
			*/
			filterDialogOpening: "filterDialogOpening",
			/* Event fired after the advanced filter dialog is already opened.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dialog to get reference to filtering dialog DOM element.
			*/
			filterDialogOpened: "filterDialogOpened",
			/* Event fired every time the advanced filter dialog changes its position.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dialog to get reference to filtering dialog DOM element.
			*/
			filterDialogMoving: "filterDialogMoving",
			/* cancel="true" Event fired before a filter row is added to the advanced filter dialog.
			Return false in order to cancel filter adding to the advanced filtering dialog.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.filtersTableBody to get reference to filters table body DOM element.			
			*/
			filterDialogFilterAdding: "filterDialogFilterAdding",
			/* Event fired after a filter row is added to the advanced filter dialog.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.filter to get reference to filters table row DOM element.	
			*/
			filterDialogFilterAdded: "filterDialogFilterAdded",
			/* cancel="true" Event fired before the advanced filter dialog is closed. 
			Return false in order to cancel filtering dialog closing.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			*/
			filterDialogClosing: "filterDialogClosing",
			/* Event fired after the advanced filter dialog has been closed.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			*/
			filterDialogClosed: "filterDialogClosed",
			/* cancel="true" Event fired before the contents of the advanced filter dialog are rendered. 
			Return false in order to cancel filtering dialog rendering.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dialogElement to get reference to filtering dialog DOM element.	
			*/
			filterDialogContentsRendering: "filterDialogContentsRendering",
			/* Event fired after the contents of the advanced filter dialog are rendered.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dialogElement to get reference to filtering dialog DOM element.	
			*/
			filterDialogContentsRendered: "filterDialogContentsRendered",
			/* Event fired when the OK button in the advanced filter dialog is pressed. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridFiltering.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dialog to get reference to filtering dialog DOM element.	*/
			filterDialogFiltering: "filterDialogFiltering"
		},
		_createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			this.options.columnSettings = [];
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
		_create: function () {
			this._editors = [];
			if (!$.fn.fadeToggle) {
				$.fn.fadeToggle = $.fn.toggle;
			}
            // feature chooser data
            this._fcData = {};
            // flag for feature chooser whether summary columns are analyzed
            this._isInitFC = false;

			// filter item template (when buttons are enabled for the filter dropdowns
			this._ft = "<li class='${itemClass}'><span class='${imgContainerClass}'><span class='" + this.css.filterItemIcon + " ${imgClass}'></span></span><span class='${textClass}'> ${text} </span></li>";

			if (this.options.filterDropDownAnimations === 'none') {
				this.options.filterDropDownAnimationDuration = 1;
				this.options.filterDropDownAnimations = 'linear';
			}
		},
		_setOption: function (key, value) {
		    // handle new settings and update options hash
			$.Widget.prototype._setOption.apply(this, arguments);
			// options that are supported: filterDropDownWidth, filterDropDownHeight, filterDialogWidth, filterDialogHeight
			// start by throwing an error for the options that aren't supported:
			if (key === 'mode' || key === 'renderFilterButton' || key === 'filterButtonLocation' || key === 'type') {
				throw new Error($.ig.Grid.locale.optionChangeNotSupported + ' ' + key);
			}
			// handle filterDropDownWidth
			if (key === 'filterDropDownWidth') {
				this.grid.container().find('div ul').parent().css('width', value);
			// handle filterDropDownHeight
			} else if (key === 'filterDropDownHeight') {
				this.grid.container().find('div ul').parent().css('height', value);
			// handle filterDialogWidth
			} else if (key === 'filterDialogWidth') {
				$('#' + this.grid.container().attr('id') + '_dialog').css('width', value);
			// handle filterDialogHeight
			} else if (key === 'filterDialogHeight') {
				$('#' + this.grid.container().attr('id') + '_dialog').css('height', value);
			}
	    },
		destroy: function () {
			/* destroys the filtering widget - remove fitler row, unbinds events, returns the grid to its previous state. */
			var block = $('#' + this.grid.id() + '_container_block'), dialog = $('#' + this.grid.id() + '_container_dialog');
			// remove the filter row, and it will take care of unbinding all events
			$('#' + this.grid.container()[0].id + ' .ui-iggrid-filterrow').remove();
			// also remove all filtering dropdowns
			$('#' + this.grid.container()[0].id + ' .ui-iggrid-filterdd').remove();
			// and the advanced filter dialog and block area, if present (if Advanced filtering is enabled)
			if (this.options.mode === "advanced") {
				block.remove();
				dialog.remove();
			}
			this.grid.element.unbind('iggridheaderrendered', this._headerRenderedHandler);
			this.grid.element.unbind('iggridvirtualhorizontalscroll', this._virtualHorizontalScrollHandler);
			this.grid.element.unbind('iggridresizingcolumnresized', this._columnResizedHandler);
			this.grid.element.unbind('iggridcolumnscollectionmodified', this._columnsCollectionModifiedHandler);
			this.grid.container().unbind('iggridheaderextracellsmodified', this._headerInitHandler);
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		_initLoadingIndicator: function () {
			// attach loading indicator widget
			this._loadingIndicator = this.grid.container().length > 0 ? this.grid.container().igLoading().data("igLoading").indicator() : this.grid.element.igLoading().data("igLoading").indicator();
		},
		// if uiDirty event is fired, it means that all subscribed features will need to reset their state. For example page size change triggers onUIDirty
		_onUIDirty: function (e, args) {
			var i, cols = this.grid.options.columns;
			// A.T. 23 Aug 2011 - add additional checks so that events don't propagate across hierarchical grids
            if (args.owner === this || args.owner.element[0].id !== this.element[0].id) {
                return;
            }
			// reset all filtering states & UI
            this._filterDialogClearAll();
			if (this._editors !== null && this._editors !== undefined) {
				for (i = 0; i < this._editors.length; i++) {
					if (this.options.columnSettings[i].allowFiltering !== false) {
						this._editors[i].value(null);
						this._editors[i].element.igEditor(
							'option',
							'nullText',
							this.options.nullTexts[this._getDefaultCondition(cols[i].dataType)]
						);
					}
				}
			}
			// clear selected items in the dropdowns:
			for (i = 0; i < cols.length; i++) {
				$("#" + this.grid.id() + '_dd_' + cols[i].key).find('li').removeClass("ui-iggrid-filterddlistitemactive ui-state-active");
			}
			// clear tooltips
			$('.ui-iggrid-filterbutton', this.grid.container()).parent().attr('title', this.options.tooltipTemplate.replace('${condition}', this.options.labels.noFilter));
			// last but not least clear the filter expressions
			this.grid.dataSource.settings.filtering.expressions = [];
		},
		_dataRendered: function () {
			var matches = 0, summary = this.grid.container().find(".ui-iggrid-footer .ui-iggrid-results"),
				footer = summary.parent(), shouldInitHeights = false;
			if (!this._loadingIndicator) {
				this._initLoadingIndicator();
			}
			if (this._shouldFireDataFiltered) {
				this._shouldFireDataFiltered = false;
				this._trigger(this.events.dataFiltered, null, {columnKey: this._curColKey, columnIndex: this._curColIndex, owner: this});
			}
			// change filter summary
			if (this._isFilteringRequest === true) {
				if (this.options.filterSummaryAlwaysVisible === true && summary.length === 0) {
					// we need to render a footer
					footer = $('<div></div>').appendTo(this.grid.container()).addClass("ui-widget ui-helper-clearfix ui-corner-bottom ui-widget-header ui-iggrid-footer");
					summary = $('<span></span>').appendTo(footer).addClass("ui-iggrid-results");
					shouldInitHeights = true;
				}
				if (this.options.type === "local" || (this.options.type === "remote" && this.grid.dataSource.hasTotalRecordsCount() === false)) {
					if (this.grid.dataSource._filter) {
						//matches = this.grid.dataSource.dataView().length; // this should be used when applyToAllData = false
						matches = this.grid.dataSource._filteredData.length;
					} else {
						matches = this.grid.dataSource._data.length;
					}
				// we need that when, say, both paging and filtering are enabled, and both are remote
				} else {
					matches = this.grid.dataSource.totalRecordsCount();
				}
				summary.text(this.options.filterSummaryTemplate.replace("${matches}", matches)).attr('title', this.options.labels.filterSummaryTitleLabel);
				summary.show();
				this._isFilteringRequest = false;
			} else if (this._isFilteringRequest === false) {
				if (summary.data('hideflag') !== false) {
					summary.hide();
				} else {
					summary.data('hideflag', true);
				}
			}
			this._loadingIndicator.hide();
			if (shouldInitHeights) {
				this.grid._initializeHeights();
			}

			this._setEditorsWidth();
		},

        _initFC: function () {
            /* check whether it should be rendered in Feature Chooser */
            var columnKey, i,
				fc = this.grid.element.data('igGridFeatureChooser'),
				o = this.options,
				cs = this.options.columnSettings,
				isAdvanced = (o.mode !== "simple" && o.advancedModeEditorsVisible === false);

            this._isInitFC = true;
            // if renderFC is disabled or column key is not found return
            if (o.renderFC === false) {
                return;
            }
            // instantiate igGridFeatureChooser = if it is defined
            if (fc !== null && fc !== undefined) {
                for (i = 0; i < cs.length; i++) {
                    // check for the specified column whether allowFiltering is enabled
                    columnKey = cs[i].columnKey;
					if (columnKey
                            && cs[i].allowFiltering === true
                            && fc._shouldRenderInFeatureChooser(columnKey) === true) {
                        this._filterRowShown = true;
                        this._fcData[columnKey] = true;
						if (isAdvanced) {
							fc._renderInFeatureChooser(columnKey, {
								name: 'Filtering',
								// M.H. 13 Oct. 2011 Fix for bug #91007
								text: o.featureChooserTextAdvancedFilter,
								secondaryIconClass: this.css.featureChooserModalDialogIcon,
								isSelected: true,
								method: $.proxy(this.toggleFilterRowByFeatureChooser, this),
								updateOnClickAll: true,
								groupName: 'modaldialog',
								groupOrder: 3,
								order: 3
							});
						} else {
							fc._renderInFeatureChooser(columnKey, {
								name: 'Filtering',
								// M.H. 13 Oct. 2011 Fix for bug #91007
								text: o.featureChooserText,
								textHide: o.featureChooserTextHide,
								iconClass: 'ui-iggrid-filterbutton ui-corner-all ui-icon ui-icon-triangle-1-s',
								isSelected: true,
								method: $.proxy(this.toggleFilterRowByFeatureChooser, this),
								updateOnClickAll: true,
								groupName: 'toggle',
								groupOrder: 1,
								order: 2,
								type: 'toggle',
								state: 'hide'
							});
						}
                    }
			    }
            }
        },
		_columnResized: function () {
			if (this._filterRowShown !== false) {
				this._setEditorsWidth();
			}
		},
		_columnsCollectionModified: function () {
			if (this._filterRowShown !== false) {
				this._setEditorsWidth();
			}
		},
		_setEditorsWidth: function () {
			if (this.options.mode !== "simple" && this.options.advancedModeEditorsVisible !== true) {
				return;
			}

			var cs = this.options.columnSettings,
				cols = this.grid._visibleColumns(),
				cells = this.grid.headersTable()
					.find('thead tr[data-role=filterrow]')
					.first()
					.find('td')
					.not('[data-skip=true]'),
				cellWidth,
				i,
				j,
				skipColumn;

			for (i = 0; i < cols.length; i++) {
				// continue if filtering is disabled for that particular column
				for (j = 0; j < cs.length; j++) {
					if (cs[j].columnKey === cols[i].key && cs[j].allowFiltering === false) {
						skipColumn = true;
						break;
					}
				}
				if (skipColumn) {
					skipColumn = false;
					continue;
				}

				if (!$.browser.opera && ((this.grid.options.height && this.grid.options.fixedHeaders === true) || $.browser.webkit)) {
					//A.T. 10 April 2011 - changing from outerWidth to innerWidth, so that the borders width is accounted for, and excluded from the calculations 
					// if inner height is used, there is the border space remaining. if outer height is used, the editors /dropdowns are a bit cut on the right. 
					cellWidth = cells.eq(i).innerWidth();
				} else {
					cellWidth = cells.eq(i).width();
				}

				cellWidth -= cells.eq(i).data('buttonWidth');

				cells.eq(i).children('span').first().igEditor('option', 'width', cellWidth);
			}
		},
		_headerRendered: function (sender, args) {
			// render the filter row
			var thead, filterrow, i = 0, cell, w, button, cols = this.grid.options.columns,
				id, j, cs = this.options.columnSettings, skipColumn = false, buttonCss,
				showAdvancedInHeader = false, indicatorContainer, cancelFunc, ci, buttonWidth,
				isSimpleMode = (this.options.mode === "simple" || this.options.advancedModeEditorsVisible === true);

			//A.T. if the event is fired from another grid, return ! (hierarchical grid scenarios where events are bubbling
			if (sender.target.id !== this.grid.element[0].id) {
				return;
			}
			// 1. find the correct THEAD
			thead = this.grid.container().find('thead');

			//A.T. take into account hierarchy
			/*
			if (this._hc === undefined) {
				this._hc = this.grid.container().find('.ui-iggrid-expandheadercell').length > 0;
			}
			*/
			// add the filter row
			//V1
			if (this.options.mode === "simple" || this.options.advancedModeEditorsVisible === true) {
				filterrow = $('<tr></tr>').appendTo(thead).addClass(this.css.filterRow).attr('data-role', 'filterrow');
				//if (this._hc === true) {
				//	$('<td></td>').appendTo(filterrow).css('border-width', 0);
				//}
				this.grid._headerInit(filterrow);
			} else {
				//V2: A.T. 27 Jan 2011
				filterrow = thead.find('tr:first');
			}
			cancelFunc = function (e) { e.preventDefault(); e.stopPropagation(); };
			// render the filter row cells
			/*
			if (this._hc === true) {
				ci = i + 1;
			} else {
				ci = i;
			}
			*/
			// find all cells marked with a data-skip attribute
			ci = i + filterrow.find("[data-skip=true]").length;
			for (i = 0; i < cols.length; i++, ci++) {
				// A.T. V1
				if (isSimpleMode === true) {
					cell = $('<td></td>').appendTo(filterrow).addClass(this.css.filterCell);
					// A.T. V2 27 Jan 2011
				} else {
					// M.H. 19 July 2012 Fix for bug #117306
					if (this.grid._isMultiColumnGrid) {
						cell  = $(this.grid._headerCells[ci]);
					} else {
						cell = $(filterrow[0].cells[ci]);
					}
					// Sorting and other features which modify the header 
					if (cell.children().first().is('a')) {
						cell.children().first().css('display', 'inline');
						cell.css('cursor', 'pointer');
					}
					//cell.data('colName', cols[i].headerText);
					cell.data('colName', cols[i].key);
				}

				if (this.grid._isMultiColumnGrid !== true || isSimpleMode === true) {
					if (i === cols.length - 1 && this.grid.options.height && parseInt(this.grid.options.height, 10) > 0) {
						// set last col width explicitly
						cell.css('width', parseInt(cols[i].width, 10) + this.grid._scrollbarWidth());
					} else {
						cell.css('width', cols[i].width);
					}
				}
				// continue if filtering is disabled for that particular column
				for (j = 0; j < cs.length; j++) {
					if (cs[j].columnKey === cols[i].key && cs[j].allowFiltering === false) {
						if (this.options.advancedModeEditorsVisible === true || this.options.mode !== "advanced") {
							this._editors.push({});
						}
						skipColumn = true;
						break;
					}
				}
				if (skipColumn) {
					skipColumn = false;
					continue;
				}
				// render editor in cell
                // L.A. 24 April 2012 - Fixed bug #83009 Last column's cell in the filter row doesn't look correct in Opera
                // Removed opera condition. It seems that the latest Opera version is rendering the content correctly.
				if ((this.grid.options.height && this.grid.options.fixedHeaders === true) || $.browser.webkit) {
					//A.T. 10 April 2011 - changing from outerWidth to innerWidth, so that the borders width is accounted for, and excluded from the calculations 
					// if inner height is used, there is the border space remaining. if outer height is used, the editors /dropdowns are a bit cut on the right. 
					w = thead.children().first().find('th:nth-child(' + (ci + 1) + ')').innerWidth();
				} else {
					w = thead.children().first().find('th:nth-child(' + (ci + 1) + ')').width();
				}

				showAdvancedInHeader = (this.options.advancedModeEditorsVisible === false && this.options.mode === "advanced");

				if ((this.options.renderFilterButton === true && !showAdvancedInHeader)
                        || (showAdvancedInHeader && this._renderFCFor(cols[i].key) === false)) {
					id = this.grid.element.attr('id') + '_dd_' + cols[i].key;
					// render the dropdown associated with that button
					if (this.options.advancedModeEditorsVisible === true || this.options.mode !== "advanced") {
						this._renderDropDown(cols[i].dataType, id, cols[i].key);
					}
					buttonCss = this.options.mode === "advanced" ? this.css.filterButtonAdvanced : this.css.filterButton;
					if (showAdvancedInHeader && this.options.advancedModeHeaderButtonLocation === "right") {
						buttonCss = this.css.filterButtonAdvancedRight;
						button = $('<span></span>').appendTo(cell).addClass(buttonCss).data('colIndex', i);
					} else {
						button = $('<span></span>').prependTo(cell).addClass(buttonCss).data('colIndex', i);
					}
					if (this.options.mode === "simple" ||
							(this.options.mode === "advanced" && this.options.advancedModeEditorsVisible === true)) {
						button.wrap('<a id="' + id + '_button" href="#" title="' + this.options.tooltipTemplate.replace('${condition}', this.options.labels.noFilter) + '" ></a>');
					} else {
						button.wrap('<a id="' + id + '_button" href="#" title="' + this.options.tooltipTemplate.replace('${condition}', this.options.labels.noFilter) + '" style="display:inline;"></a>');
					}
					indicatorContainer = cell.find('.ui-iggrid-indicatorcontainer');

					if (indicatorContainer.length === 0) {
						indicatorContainer = $('<div></div>').appendTo(cell).addClass('ui-iggrid-indicatorcontainer');
					}

					indicatorContainer.append(button.parent());
					w = parseInt(w, 10);
					if (this.grid.options.height === null && $.browser.mozilla) {
						buttonWidth = button.outerWidth(true);
					} else {
						buttonWidth = button.outerWidth(false);
					}
					w -= buttonWidth;
					cell.data('buttonWidth', buttonWidth);
				}
				if (this.options.renderFilterButton === true) {
					if (this.options.advancedModeEditorsVisible === true || this.options.mode !== "advanced") {
						button.parent().bind({
							mousedown: $.proxy(this._toggleDropDown, this),
							mouseup: cancelFunc,
							click: cancelFunc,
							blur: $.proxy(this._closeDropDown, this),
							keydown: $.proxy(this._toggleDropDownKeyboard, this),
							mouseover: $.proxy(this._hoverButton, this),
							mouseout: $.proxy(this._unhoverButton, this),
							focus: $.proxy(this._activateButton, this)
						});
                        // L.A. 08 May 2012 Fixing bug #106229 - Filtering dropdown item list does not close after you select item in IE7.
                        if ($.ig.util.isIE7) {
                            button.parent().bind({
                                focusout: $.proxy(this._closeDropDown, this)
                            });
                        }
					} else if (this._renderFCFor(cols[i].key) === false) {
						button.parent().bind({
							click: $.proxy(this._openFilterDialog, this),
							keydown: $.proxy(this._openFilterDialogFromKeyboard, this),
							focus: $.proxy(this._activateButton, this),
							blur: $.proxy(this._deactivateButton, this)
						});
					}
				}
				if (this.options.advancedModeEditorsVisible === true || this.options.mode !== "advanced") {
					this._createEditor(cell, w, i, cols[i].dataType, cols[i].key);
				}
			}
			// if advanced filtering is enabled we will also render the advanced filtering dialog
			// NOTE that it is only a single dialog for the whole grid, not per column !
			if ($('#' + this.grid.container().attr('id') + '_dialog').length > 0) {
				$('#' + this.grid.container().attr('id') + '_dialog').remove();
			}
			this._renderFilterDialog();
		},
        _renderFCFor: function (columnKey) {
            // returns whether it should be rendered in Feature Chooser for the specified columnKey
            return !(this._fcData === null
                        || this._fcData === undefined
                        || this.options.renderFC === false
                        || this._fcData[columnKey] !== true
                    );
        },
        _columnMap: function () {
            var o = this.options,
                i,
                elem,
                cs = o.columnSettings,
                csLength = cs.length,
                result = [];

            if (o.renderFC === false) {
                return false;
            }

            for (i = 0; i < csLength; i++) {
                elem = {columnKey: cs[i].columnKey, enabled: true};
                if (cs[i].allowFiltering === false) {
                    elem.enabled = false;
                }
                result.push(elem);
            }

            return result;
        },
        _headerCellRendered: function (event, ui) {
            if (this._isInitFC !== true) {
                this._initFC();
            }
        },
		// M.H. 30 March 2012 Fix for bug #106217
        toggleFilterRowByFeatureChooser: function (event, columnKey) {
			/* toggle filter row when mode is simple or advancedModeEditorsVisible is TRUE. Otherwise show/hide advanced dialog
				paramType="object" Represents click event object
				paramType="string" Column key
			*/
            var fc,
				o = this.options,
                isShown = this._filterRowShown,
                $thead = this.grid.container().find('thead'),
                $filterRow,
                isAdvanced = !(o.mode === "simple" || o.advancedModeEditorsVisible === true);

            if (isShown === null || isShown === undefined) {
                this._filterRowShown = true;
                isShown = this._filterRowShown;
            }

            if (isAdvanced === false) {
                $filterRow = $thead.find('tr[data-role="filterrow"]');
                if (isShown === true) {
                    $filterRow.hide();
                    isShown = false;
                } else {
                    $filterRow.show();
					this._setEditorsWidth();
                    isShown = true;
                }
				// M.H. 2 Aug 2012 Fix for bug #118136
				// not called by FeatureChooser
				if (event === null) {
					fc = this.grid.element.data('igGridFeatureChooser');
					if (fc) {
						fc._toggleSelectedItems("Filtering");
					}
				}
            } else {
				// M.H. 30 March 2012 Fix for bug #106217
                this._openFilterDialog(event, columnKey);
            }

            this._filterRowShown = isShown;
            this.grid._initializeHeights();
			// M.H. 10 May 2012 Fix for bug #110952
			this.grid._adjustLastColumnWidth(true);
        },
		_createEditor: function (parent, w, colIndex, colType, colKey) {
			var editor, options, type = this._getEditorType(colType);
			editor = $('<span />').css('float', 'left').css('width', '5px');
			if (this.options.filterButtonLocation === "left") {
				editor.appendTo(parent);
			} else {
				editor.prependTo(parent);
			}
			options = {
				textChanged: $.proxy(this._filter, this),
				width: w,
				disabled: (this.grid.options.columns[colIndex].dataType === "bool" || this.grid.options.columns[colIndex].dataType === "boolean"),
				type: type,
				textAlign: 'left',
				button: (type === 'datepicker') ? 'dropdown' : null,
				// fix for bug #76266
				maxDecimals: 6,
				nullText: this.options.nullTexts[this._findColumnSetting(colKey).condition],
				focus: $.proxy(this._fireEnterEditModeEvents, this),
				blur: $.proxy(this._fireExitEditModeEvents, this),
				//_utc: true
				enableUTCDates: this.grid.options.enableUTCDates
			};
			editor.data('colIndex', colIndex).data('colKey', colKey);
			editor.igEditor(options);
			this._editors.push(editor.data('igEditor'));
			// A.T. 29 Dec 2010
			editor.find('input').addClass(this.css.filterCellEditor);
			return editor;
		},
		_getEditorType: function (type) {
			return (type === 'date') ? 'datepicker' : ((type === 'number') ? 'numeric' : 'text');
		},
		_findColumnSetting: function (key) {
			var i;
			for (i = 0; i < this.options.columnSettings.length; i++) {
				if (this.options.columnSettings[i].columnKey === key) {
					return this.options.columnSettings[i];
				}
			}
		},
		// Accepts parameters:
		// expressions - a list of filtering expressions (objects) 
		// updateUI - flag specifying whether the filter row UI should also be updated when applying the filter 
		filter: function (expressions, updateUI, addedFromAdvanced) {
			/* Applies filtering programmatically and updates the UI by default
				paramType="array" an array of filtering expressions, each one having the format {fieldName: , expr: , cond: , logic: }  where fieldName is the key of the column, expr is the actual expression string with which we would like to filter, logic is 'AND' or 'OR', and cond
				is one of the folling strings: "equals", "doesNotEqual", "contains", "doesNotContain", "greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo", "true", "false", "null", "notNull", "empty", "notEmpty", "startsWith", "endsWith",
				"today", "yesterday", "on", "notOn", "thisMonth", "lastMonth", "nextMonth", "before", "after", "thisYear", "lastYear", "nextYear". The difference between the empty and null filtering conditions is that empty includes null, NaN, and undefined, as well as the empty string. 
				
				paramType="bool" optional="true" specifies whether the filter row should be also updated once the grid is filtered 
				paramType="bool" excluded="true"
			*/
			this._loadingIndicator.show();
			if (expressions !== undefined && expressions.length > 0) {
				this._isFilteringRequest = true;
			}
			if (!addedFromAdvanced) {
				this._filterDataSource(expressions, true);
			} else {
				this._filterDataSource(expressions);
			}
			if (updateUI === undefined || updateUI === true) {
				this._updateFiltersUI(expressions === undefined ? this._generateExpressions() : expressions, addedFromAdvanced);
			}
		},
		_filter: function (ui, args) {
			clearTimeout(this._timeoutId);
			this._ui = ui;
			this._args = args;
			if (parseInt(this.options.filterDelay, 10) === 0) {
				this._filterInternal();
			} else {
				this._timeoutId = setTimeout($.proxy(this._filterInternal, this), this.options.filterDelay);
			}
		},
		// Restore old selection after editor got focus by request in _filterInternal.
		// Selection can be lost when grid is repainted and headers are temporary hidden.
		_fireEnterEditModeEvents: function (evt, ui) {
			var sel = ui && ui.owner ? ui.owner._grid_sel : null;
			if (sel) {
				// assume that getting focus after filtering will not take longer than 1s
				if (sel.time + 1000 > new Date().getTime()) {
					ui.owner.select(sel.sel);
				}
				this.grid._synchronizeHScroll();
				delete ui.owner._grid_sel;
			}
		},
		_filterInternal: function (colIndex, colKey) {
			// determine the column
			var args = this._args, _colIndex, _colKey, noCancel, editor;
			if (args !== undefined) {
				_colIndex = $(args.owner.element).data('colIndex');
				_colKey = $(args.owner.element).data('colKey');
			} else {
				_colIndex = colIndex;
				_colKey = colKey;
			}
			noCancel = this._trigger(this.events.dataFiltering, null, {columnKey: _colKey, columnIndex: _colIndex, owner: this});
			if (noCancel) {
				this._loadingIndicator.show();
				editor = this._editors ? this._editors[_colIndex] : null;
				// mark the column so that we know it's not generated from the advanced filters 
				if (editor) {
					editor._addedFromAdvanced = false;
				}
				this._curColKey = _colKey;
				this._curColIndex = _colIndex;
				this._filterDataSource();
				if (editor) {
					// save old selection (see _fireEnterEditModeEvents)
					editor._grid_sel = { time: new Date().getTime(), sel: editor._sel0 };
					editor.setFocus();
				}
				//this._trigger(this.events.dataFiltered, null, {columnKey: _colKey, columnIndex: _colIndex, owner: this});
			}
		},
		_filterDataSource: function (expressions, apiCall) {
			var exprs, i, j, button, cols = this.grid.options.columns, found = false, defaultTooltip, noCancel; // i, exprs;
			defaultTooltip = this.options.tooltipTemplate.replace('${condition}', this.options.labels.noFilter);
			if (expressions !== undefined) {
                // L.A. 09 May 2012 - reset all filtering states & UI on each new api call
                if (apiCall === true) {
					// L.A. 10 September 2012 - fixing bug 120009 
					// When filtering through the API method you are unable to apply multiple 
					// filters through separate calls.
					this.grid.dataSource.settings.filtering.expressions.push.apply(
						this.grid.dataSource.settings.filtering.expressions,
						expressions
					);
                    this._filterDialogClearAll();
                    for (i = 0; i < expressions.length; i++) {
                        this._addFilterFromDialog(null, expressions[i]);
                    }
                } else {
					// L.A. 24 September 2012 - fixing bug #122228
					// Grid -> Advanced Filtering sample-> filter condition is not cleared
					// Different behavior needs to be applied. If the call is from the API
					// then the expressions should be agregated
					// Otherwise the call is made from the UI and the expressions needs
					// to be replaced
					this.grid.dataSource.settings.filtering.expressions = expressions;
				}
			} else {
				exprs = this._generateExpressions(true);
				// update the tooltips, since we are doing simple filtering (expressions are not provided)
				for (i = 0; i < cols.length; i++) {
					found = false;
					button = $('#' + this.grid.element[0].id + '_dd_' + cols[i].key + '_button');
					for (j = 0; j < exprs.length; j++) {
						if (cols[i].key === exprs[j].fieldName) {
							found = true;
							if ((exprs[j].expr === undefined || exprs[j].expr === null || exprs[j].expr === '') && this._requiresEntry(exprs[j].cond)) {
								button.attr('title', defaultTooltip);
							} else {
								//button.attr('title', exprs[j].fieldName + ' ' + exprs[j].cond + ' ' + exprs[j].expr + ' ');
								button.attr('title', this.options.tooltipTemplate.replace('${condition}', exprs[j].cond));
							}
							break;
						}
					}
					if (!found) {
						// place the default no filter 
						button.attr('title', defaultTooltip);
					}
				}
				this.grid.dataSource.settings.filtering.expressions = exprs;
			}
			// A.T. 13 April 2011 fix for bug #72284
			this.grid.element.trigger('iggriduisoftdirty', {owner: this});
			noCancel = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
			if (noCancel) {
				exprs = this.grid.dataSource.settings.filtering.expressions;

				// A.T. fix for bug #73509
				// it's important that paging also resets its "current" page Index, otherwise the paging dropdown, etc. won't be refreshed. 
                // L.A. 03 May 2012 Fixed bug #110881
                // If filtering is done local (only the selected page is filtered) then the pageIndex should not be changed to 0
                if (this.options.type === "remote") {
				    this.grid.dataSource.settings.paging.pageIndex = 0;
				    this.grid._shouldResetPaging = true;
                }
                this._isFilteringRequest = true;
				this._preserveSorting();
				if (exprs.length === 0) {
					// A.T. 4 April 2011 - Fix for bug #66210
					//this._isFilteringRequest = false;
					if (!apiCall) {
						this._shouldFireDataFiltered = true;
					}
					this.grid.dataSource.dataBind();
				} else {
					if (this.options.type === "remote") {
						if (!apiCall) {
							this._shouldFireDataFiltered = true;
						}
						this.grid.dataSource.dataBind();
					} else {
						this.grid.dataSource.settings.filtering.type = "local";
						this.grid.dataSource.filter(exprs);
						this.grid._trigger(this.grid.events.dataBound, null, {owner: this.grid});
						this.grid._renderData();
						if (!apiCall) {
							this._trigger(this.events.dataFiltered, null, {columnKey: this._curColKey, columnIndex: this._curColIndex, owner: this});
						}
					}
				}
			}
		},
		_filterDataSourceClear: function (colKey, colIndex) {
			var i, exprs = this._generateExpressions(true), noCancel, noCancelFiltering;
			for (i = 0; i < exprs.length; i++) {
				if (exprs[i].fieldName === colKey) {
					//A.T. 8 March 2012 - Fix for bug #104244 
					//exprs.remove(i);
					$.ig.removeFromArray(exprs, i);
					break;
				}
			}
			this.grid.dataSource.settings.filtering.expressions = exprs;
			// trigger dirty so that any other features reset their UI and state 
            this.grid.element.trigger('iggriduidirty', {owner: this});
			// A.T. 22 Nov 2011 - fix for bug #90396
			if (!this._curColKey || colKey) {
				this._curColKey = colKey;
				this._curColIndex = colIndex;
			}
			noCancelFiltering = this._trigger(this.events.dataFiltering, null, {columnKey: this._curColKey, columnIndex: this._curColIndex, owner: this});
			if (noCancelFiltering) {
				noCancel = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});

				if (noCancel) {

					this.grid.dataSource.settings.paging.pageIndex = 0;
					this._preserveSorting();
					this.grid._shouldResetPaging = true;

					if (exprs.length > 0) {
						this._isFilteringRequest = true;
						if (this.options.type === "remote") {
							this._shouldFireDataFiltered = true;
							this.grid.dataSource.dataBind();
						} else {
							this.grid.dataSource.settings.filtering.type = "local";
							this.grid.dataSource.filter(exprs);
							this.grid._trigger(this.grid.events.dataBound, null, {owner: this.grid});
							this.grid._renderData();
							this._trigger(this.events.dataFiltered, null, {columnKey: this._curColKey, columnIndex: this._curColIndex, owner: this});
						}
					} else {
						this._isFilteringRequest = false;
						this._shouldFireDataFiltered = true;
						this.grid.dataSource.dataBind();
					}
				}
			}
		},
		_preserveSorting: function () {
			// we need to be aware if there are groupedColumns or not. If there aren't we shouldn't do this. 
			// A.T. Fix for bug #91599
			var hasGroupedCols = false, groupBy = this.grid.element.data("igGridGroupBy");
			if (groupBy && groupBy.options && groupBy.options.groupedColumns && groupBy.options.groupedColumns.length > 0) {
				hasGroupedCols = true;
			}
			if (this.grid.dataSource.settings.sorting.expressions.length > 0 && hasGroupedCols) {
				this.grid.dataSource.settings.sorting.defaultFields = this.grid.dataSource.settings.sorting.expressions;
			}
		},
		_updateFiltersUI: function (expressions, addedFromAdvanced) {
			var i, j, editor, filterList, items;
			if (expressions.length === 0 && this.options.mode === 'advanced' && this.options.advancedModeEditorsVisible === true) {
				// make sure we update (clear) the inputs 
				for (i = 0; i < this._editors.length; i++) {
					if (this.options.columnSettings[i].allowFiltering !== false) {
						this._editors[i].value(null);
						//this._editors[i]._addedFromAdvanced = false;
					}
				}
			}
			for (i = 0; i < expressions.length; i++) {
				//1.  update the selected item in the filter dropdown
				filterList = $('#' + this.grid.element[0].id + '_dd_' + expressions[i].fieldName).find('ul');
				items = filterList.children();
				for (j = 0; j < items.length; j++) {

					if ($(items[j]).data('cond') === expressions[i].cond) {
						 // update selection
						this._selectDropDownItem({currentTarget: items[j]});
						break;
					}
				}
				//2. update the editor text (and value)
				editor = this._editors[this._columnIndexFromKey(expressions[i].fieldName)];
				if (editor !== undefined && editor !== null) {
					editor.value(expressions[i].expr);
					editor._addedFromAdvanced = true;
				}
			}
			this._updateTooltips(expressions);
		},
		_updateTooltips: function (expressions) {
			var button, title, found, titleText, tempTooltipExpr, cols = this.grid.options.columns, i, j;
			titleText = this.options.tooltipTemplate.replace('${condition}', this.options.labels.noFilter);
			title = '';
			for (i = 0; i < expressions.length; i++) {
				// update the advanced filtering tooltips
				// 1. find the tooltip for the column
				button = $('#' + this.grid.element[0].id + '_dd_' + expressions[i].fieldName + '_button');
				// A.T. 1 Sept 2011 - fix for bug #85220
				if (!this._requiresEntry(expressions[i].cond) || expressions[i].expr === undefined || expressions[i].expr === null) {
					tempTooltipExpr = '';
				} else {
					tempTooltipExpr = expressions[i].expr;
				}
				if (i === 0) {
					button.attr('title', expressions[i].fieldName + ' ' + expressions[i].cond + ' ' + tempTooltipExpr + ' ');
				} else {
					button.attr('title', title + expressions[i].logic + ' ' + expressions[i].fieldName + ' ' + expressions[i].cond + ' ' + tempTooltipExpr + ' ');
				}
				title = button.attr('title');
			}
			// if some column doesn't have a filter applied, we should update its tooltip to match the "no filter" tooltip 
			for (i = 0; i < cols.length; i++) {
				found = false;
				for (j = 0; j < expressions.length; j++) {
					if (expressions[j].fieldName === cols[i].key) {
						found = true;
						break;
					}
				}
				if (!found) {
					// update tooltip
					$('#' + this.grid.element[0].id + '_dd_' + cols[i].key + '_button').attr('title', titleText);
				}
			}
		},
		_columnIndexFromKey: function (key) {
			var i;
			for (i = 0; i < this.grid.options.columns.length; i++) {
				if (this.grid.options.columns[i].key === key) {
					return i;
				}
			}
		},
		_generateExpressions: function (filterRowTrigger) {
			// iterate over the columns and generate the current filtering expressions array
			var exprs = [], cols = this.grid.options.columns, expr, i, currentCondition, requiresEntry, isExprAdded;
			for (i = 0; i < cols.length; i++) {
				if (this._editors && this._editors[i] && this._editors[i]._addedFromAdvanced && !filterRowTrigger) {
					continue;
				}
				// if filtering is disabled for this column, exit
				if (this.options.columnSettings[i].allowFiltering !== true) {
					continue;
				}
				expr = this._editors[i].value();
				requiresEntry = this._requiresEntry(this.options.columnSettings[i].condition);
				if ((expr === undefined || expr === null ||  expr === "") && requiresEntry) {
					continue;
				} /* else if (!requiresEntry) {
					expr = null;
				}
				*/
				currentCondition = this.options.columnSettings[i].condition;

				if (currentCondition === undefined || currentCondition === null || currentCondition === "") {
					continue;
				}
				isExprAdded = false;
				//A.T. 28 March 2011 - Fix for bug #69561
				if (cols[i].dataType !== 'date' || (cols[i].dataType === 'date' && expr !== null &&
						expr !== undefined && currentCondition !== 'empty' &&
						currentCondition !== 'notEmpty' && currentCondition !== 'null' && currentCondition !== 'notNull')
						|| (cols[i].dataType === 'date' && !this._requiresEntry(this.options.columnSettings[i].condition))) {
					if (expr !== "" && !this.options.filterExprUrlKey) {
						isExprAdded = true;
						exprs.push({fieldName: cols[i].key, cond: currentCondition, expr: expr});
					} else if ((cols[i].dataType === "bool" && expr !== "") || (cols[i].dataType !== "bool" &&
							((this.options.filterExprUrlKey !== undefined && this.options.filterExprUrlKey !== null) || this.options.type === "local"))) {
						isExprAdded = true;
						exprs.push({fieldName: cols[i].key, cond: currentCondition, expr: expr});
					} else if (cols[i].dataType === "bool" && expr === "" && (currentCondition === 'null' || currentCondition === 'notNull'
							|| currentCondition === 'empty' || currentCondition === 'notEmpty')) {
						isExprAdded = true;
						exprs.push({fieldName: cols[i].key, cond: currentCondition, expr: expr});
					}
					// M.H. 10 Sep 2012 Fix for bug #120759
					if (cols[i].unbound && isExprAdded === true) {
						exprs[exprs.length - 1].dataType = cols[i].dataType;
					}
				}
			}
			return exprs;
		},
		_getDefaultCondition: function (type) {
			var result = "equals";
			if (type === undefined || type === null || type === "string") {
				result = "contains";
			} else if (type === "number") {
				result = "equals";
			} else if (type === "date") {
				result = "on";
			} else if (type === "bool") {
				result = "true";
			}
			return result;
		},
		_initDefaultSettings: function () {
			// fill in default column settings, so that later on we can get the current sort state of every sortable column 
			// iterate through columns
			var settings = [], key, cs = this.options.columnSettings, i, j, defaultExpressions = [], cols = this.grid.options.columns, allowFiltering,
				isToCheckUnboundColumns = (this.grid._hasUnboundColumns === true && this.options.type === "remote");
			// initialize
			if (cols && cols.length > 0) {
				for (i = 0; i < cols.length; i++) {
					allowFiltering = true;
					// remote filtering should be forbidden for unbound columns
					if (isToCheckUnboundColumns && this.grid.getUnboundColumnByKey(cols[i].key) !== null) {
						allowFiltering = false;
					}
					settings[i] = {'columnIndex': i, 'columnKey': cols[i].key, condition: this._getDefaultCondition(cols[i].dataType), 'allowFiltering': allowFiltering};
				}
			}
			for (i = 0; i < cs.length; i++) {

				for (j = 0; j < settings.length; j++) {
					if (settings[j].columnKey === cs[i].columnKey || settings[j].columnIndex === cs[i].columnIndex) {
						break;
					}
				}
				if (j === settings.length) {
					continue;
				}
				for (key in cs[i]) {
					if (cs[i].hasOwnProperty(key) && key !== 'columnKey' && key !== 'columnIndex') {
						settings[j][key] = cs[i][key];
					}
				}
			}
			// copy
			this.options.columnSettings = settings;
			// store default expressions
			this.grid.dataSource.settings.filtering.expressions = defaultExpressions;
		},
		_renderDropDown: function (type, id, colName) {
			var ul, i, cs = this.options.columnSettings, cols = this.grid.options.columns, item, obj;
			if (type === "number") {
				ul = this._renderNumericFilterDropDown(id, colName);
			} else if (type === "date") {
				ul = this._renderDateFilterDropDown(id, colName);
			} else if (type === "boolean" || type === "bool") {
				//A.T. 12 Feb 2011 - Fix for bug #66113
				ul = this._renderBooleanFilterDropDown(id, colName);
			} else {
				// string 
				ul = this._renderStringFilterDropDown(id, colName);
			}
			if (this.options.filterDropDownItemIcons !== true) {
				if (this.options.showEmptyConditions) {
					$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'empty')).text(this.options.labels.empty).addClass('ui-corner-all');
					$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'notEmpty')).text(this.options.labels.notEmpty).addClass('ui-corner-all');
				}
				if (this.options.showNullConditions) {
					$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'null')).text(this.options.labels.nullLabel).addClass('ui-corner-all');
					$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'notNull')).text(this.options.labels.notNull).addClass('ui-corner-all');
				}
			} else {

				obj = {itemClass: this.css.filterDropDownListItemWithIcons, imgContainerClass: this.css.filterItemIconContainer, textClass: this.css.filterDropDownListItemTextContainer};

				if (this.options.showEmptyConditions) {
					// Empty
					obj.text = this.options.labels.empty;
					obj.imgClass = this.css.filterItemIcon;
					$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'empty');
					//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'empty');

					// Not Empty
					obj.text = this.options.labels.notEmpty;
					obj.imgClass = this.css.filterItemIcon;
					$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'notEmpty');
					//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'notEmpty');
				}
				if (this.options.showNullConditions) {
					// Null
					obj.text = this.options.labels.nullLabel;
					obj.imgClass = this.css.filterItemIcon;
					$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'null');
					//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'null');

					// Not Null
					obj.text = this.options.labels.notNull;
					obj.imgClass = this.css.filterItemIcon;
					$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'notNull');
					//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'notNull');
				}
			}
			// if the mode is "Advanced", add the "Advanced" button
			if (this.options.mode === "advanced") {
				this._renderAdvancedButton(ul);
			}
			//A.T. 14 Feb 2011 - Fix for bug #65814
			// set initially selected value, if any
			for (i = 0; i < cs.length; i++) {
				if (cs[i].columnKey === colName && cs[i].condition !== this._getDefaultCondition(cols[i].dataType)) {
					// find the item
					if (cs[i].condition === 'null') {
						item = ul.find(':contains("' + this.options.labels.nullLabel + '")');
					} else {
						item = ul.find(':contains("' + this.options.labels[cs[i].condition] + '")');
					}
					item = item.children().first().closest('li');
					item.addClass(this.css.filterDropDownListItemActive).parent().data('selectedItem', $('li', item.parent()).index(item));
				}
			}
		},
		_renderAdvancedButton: function (ul) {
			var li;
			li = $('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItemAdvanced);
			// render the igButton inside the LI 
			this._currentButton = $(toStaticHTML('<input type="button"></input>'));
			this._currentButton.igButton({labelText: this.options.labels.advancedButtonLabel}).bind({
				mousedown: $.proxy(this._openFilterDialog, this)
			});
			li.append(this._currentButton);
		},
		_openFilterDialogFromKeyboard: function (event) {
			if (event.keyCode === $.ui.keyCode.ENTER) {
				this._openFilterDialog(event);
			}
		},
		// M.H. 30 March 2012 Fix for bug #106217
		_openFilterDialog: function (event, columnKey) {
			// show the dialog that has been created before
			var maxZ, left, top, pos, h, w, bh, dh, dw, bw, noCancel = true, block = $('#' + this.grid.container().attr('id') + '_block'),
				dialog = $('#' + this.grid.container().attr('id') + '_dialog'), tableBody, i, rows, addDefault = true, colText, col,
                expressions = this.grid.dataSource.settings.filtering.expressions;
			// M.H. 10 July 2012 Fix for bug #106407
			maxZ = $.ig.getMaxZIndex(this.grid.container().attr('id') + '_dialog');
			block.css('zIndex', maxZ + 1);
			dialog.css('zIndex', maxZ + 2);
			// recalc containment
            // L.A. 13 June 2012 Fixing bug #114457 Advanced search filtering dialog cannot be dragged outside of the grid
            if (this.options.filterDialogContainment === "owner") {
			    dialog.draggable('option', 'containment', this.grid.container());
            } else {
                dialog.draggable('option', 'containment', 'window');
            }
			// fire filterDialogOpening event
			this._dialogCurrentColumn = $(event.target).closest('ul').data('colName');
			if (this._dialogCurrentColumn === undefined || this._dialogCurrentColumn === null) {
				// M.H. 30 March 2012 Fix for bug #106217
				if (columnKey !== null && columnKey !== undefined) {
					this._dialogCurrentColumn = columnKey;
				} else {
					// in advanced mode when we don't render dropdowns there is no UL, so we take the col name from the closest TH which is the header's TH
					this._dialogCurrentColumn = $(event.target).closest('th').data('colName');
				}
			}
            // L.A. 10 May 2012 Fixing bug #110975
            if (this._dialogCurrentColumn === undefined || this._dialogCurrentColumn === null) {
                this._dialogCurrentColumn = this.grid.options.columns[0];
            }
            colText = this.grid.columnByKey(this._dialogCurrentColumn).headerText;
            if (expressions !== undefined && expressions !== null) {
                for (i = 0; i < expressions.length; i++) {
                    //this._addFilterFromDialog(null, expressions[i]);
                    col = this.grid.columnByKey(expressions[i].fieldName);
                    if (col !== null && col.headerText === colText) {
                        addDefault = false;
                    }
                }
            }

			//A.T. - determine if there is an entry for the specified column or not, if there isn't, add one !
			tableBody = $('#' + this.grid.container().attr('id') + '_dialog table tbody');
			rows = tableBody.find('tr');
            if (addDefault) {
			    for (i = 0; i < rows.length; i++) {
				    if ($(rows[i]).children().first().find('input').attr('value') === colText) {
					    addDefault = false;
					    break;
				    }
			    }
            }
            this._dialogCurrentType = this.grid.columnByKey(this._dialogCurrentColumn).dataType;

			if (addDefault === true) {
				this._addFilterFromDialog();
			}
			noCancel = this._trigger(this.events.filterDialogOpening, null, {dialog: dialog, owner: this});
			if (noCancel) {
				pos = this.grid.container().offset();
				left = pos.left;
				top = pos.top;
				if (block.outerWidth() !== this.grid.container().outerWidth()) {
					block.css('width', this.grid.container().outerWidth());
				}
				if (block.outerHeight() !== this.grid.container().outerHeight()) {
					block.css('height', this.grid.container().outerHeight());
				}
				// hide any error messages that are shown
				$('#' + this.grid.container().attr('id') + '_dialog_error').hide();
				block.css({left: left, top: top}).fadeToggle();
				// show the actual dialog
				w = this.grid.container().outerWidth();
				h = this.grid.container().outerHeight();
				// calculate browser height and width, and if the grid's w  & h exceed the browser ones, position the advanced filtering dialog
				// so that it can be seen on screen
				bw = $(window).width();
				bh = $(window).height();
				if (w + left > bw) {
					w = w - (w + left - bw);
				}
				if (w <= 0) {
					w = this.grid.container().outerWidth();
				}
				if (h + top > bh) {
					h = h - (h + top - bh);
				}
				if (h <= 0) {
					h = this.grid.container().outerHeight();
				}
				dh = parseInt(this.options.filterDialogHeight, 10);
				dw = parseInt(this.options.filterDialogWidth, 10);
				if (isNaN(dh) || dh <= 0) {
					dh = dialog.outerHeight();
				}
				if (isNaN(dw) || dw <= 0) {
					dw = dialog.outerWidth();
				}
				// L.A. 05 September 2012 Fixing bug #120390 
				// When the grid is shorter than the Advanced filtering dialog the pop up window hides its titlebar
				top = top + parseInt(h / 2, 10) - dh / 2;
				left = left + parseInt(w / 2, 10) - dw / 2;
				top = top < 0 ? pos.top : top;
				left = left < 0 ? pos.left : left;
				dialog.css({left: left, top: top})
					.fadeToggle($.proxy(this._setResizableEnv, this));
				// fire opened event
				this._trigger(this.events.filterDialogOpened, null, {dialog: dialog, owner: this});
				// focus dialog so that the dropdown closes (on blur), and the advanced dialog can be closed with the ESCAPE key 
				dialog.focus();
				event.preventDefault();
				event.stopPropagation();
				// close dropdown
				if (!(this.options.mode === 'advanced' && this.options.advancedModeEditorsVisible === false)) {
					this._toggleDropDown({currentTarget: this._currentTarget}, true);
				}
			}
		},
		_closeFilterDialog: function (e) {
			var noCancel = true;
			noCancel = this._trigger(this.events.filterDialogClosing, null, {owner: this});
			if (noCancel) {
				$('#' + this.grid.container().attr('id') + '_block').fadeToggle();
				$('#' + this.grid.container().attr('id') + '_dialog').fadeToggle();
				this._trigger(this.events.filterDialogClosed, null, {owner: this});
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
				return false;
			}
		},
		_searchFilterDialog: function (e) {

			var expressions = [], rows, boolLogic, selectLogic, noCancel = true, i, type, expr, noCancelFiltering = true;
			noCancel = this._trigger(this.events.filterDialogFiltering, null, {dialog: $('#' + this.grid.container().attr('id') + '_dialog'), owner: this});

			if (noCancel) {
				// construct filter expressions from table
				rows = $('#' + this.grid.container().attr('id') + '_dialog table tbody').children();
				boolLogic = "and";
				selectLogic = $('#' + this.grid.container().attr('id') + '_dialog select:first');
				if (selectLogic.length > 0) {
					boolLogic = $('#' + this.grid.container().attr('id') + '_dialog select:first')[0].value === "all" ? "AND" : "OR";
				}
				for (i = 0; i < rows.length; i++) {
					type = this.grid.columnByText($(rows[i].cells[0]).find('input')[0].value).dataType; // get the column type 
					expr = $(rows[i].cells[2]).find('input').igEditor('value');
					if (expr && (expr.nodeName || (expr[0] && expr[0].nodeName))) {
						expr = $(rows[i].cells[2]).find('span').igEditor('value');
					}
					expressions.push({
						// fire user-defined function to extract expression from row
						fieldName: this.grid.columnByText($(rows[i].cells[0]).find('input')[0].value).key,
						cond: $(rows[i].cells[1]).find('select')[0].value,
						expr: expr,
						logic: boolLogic,
						type: type
					});
				}
				this._closeFilterDialog(e);
				// when the editors are visible and the mode is advanced, make sure we are not ignoring the filter row (Bug #70099)
				if (this.options.advancedModeEditorsVisible === true && this.options.mode === "advanced") {
					// merge the two arrays of expressions
					$.merge(expressions, this._generateExpressions());
				}
				this._currentAdvancedExpressions = expressions;
				// there are no column key / index here, because advanced filtering may include many colum filters, it doesn't have to be just one. 
				noCancelFiltering = this._trigger(this.events.dataFiltering, null, {owner: this});
				if (noCancelFiltering) {
					this.filter(expressions, true, true); // the third parameter denotes that those filters have been added from the advanced window 
				}
			}
			e.preventDefault();
			e.stopPropagation();
		},
		_filterDialogStartMove: function (e) {
			this._isFilterDialogMouseDown = true;
		},
		_filterDialogStopMove: function (e) {
			this._isFilterDialogMouseDown = false;
			this._dialogClientX = undefined;
			this._dialogClientY = undefined;
		},
		_filterDialogMove: function (e) {
			$(e.target).find('.ui-igedit-fieldincontainer').igEditor('dropDownVisible', false);
			//var dialog = $('#' + this.grid.container().attr('id') + '_dialog'), left, top, newLeft, newTop, noCancel = true;
			this._trigger(this.events.filterDialogMoving, null, {dialog: e.target, owner: this});
			/*
			noCancel = this._trigger(this.events.filterDialogMoving, null, {dialog: dialog, owner: this});
			if (noCancel) {
				left = parseInt(dialog.css('left'), 10);
				top = parseInt(dialog.css('top'), 10);
				if (this._isFilterDialogMouseDown !== undefined && this._isFilterDialogMouseDown === true) {
					if (this._dialogClientX === undefined && this._dialogClientY === undefined) {
						this._dialogClientX = parseInt(e.clientX, 10);
						this._dialogClientY = parseInt(e.clientY, 10);
						newLeft = left;
						newTop = top;
					} else {
						newLeft = left + (e.clientX - this._dialogClientX);
						newTop = top + (e.clientY - this._dialogClientY);
					}
					this._dialogClientX = e.clientX;
					this._dialogClientY = e.clientY;
					dialog.css({left: newLeft, top: newTop});
				}
			}
			*/
		},
		_renderFilterDialog: function () {
			var dialog, condObj, dropDownData, condElement, okCancelContainer, f = this,
				caption, dialogContent, noCancel = true, addClearButtons, limit;
			// append the block area div to the grid's "_container"
			$('<div></div>').appendTo("body").attr('id', this.grid.container().attr('id') + '_block').css('position', 'absolute').addClass(this.css.blockArea).data('efh', '1').hide();
			dialog = $('<div></div>').appendTo("body").attr('id', this.grid.container().attr('id') + '_dialog').css('position', 'absolute').css('width', this.options.filterDialogWidth).css('height', this.options.filterDialogHeight).addClass(this.css.filterDialog).data('efh', '1').hide();
			noCancel = this._trigger(this.events.filterDialogContentsRendering, null, {dialogElement: dialog, owner: this});
			if (noCancel) {
				// add caption to the dialog
				$('<span></span>').appendTo(caption = $('<div></div>').appendTo(dialog).addClass(this.css.filterDialogHeaderCaption))
					.text(this.options.labels.filterDialogCaptionLabel).addClass(this.css.filterDialogHeaderCaptionTitle);
				$('<span></span>').appendTo($('<a></a>').appendTo(caption).attr('href', '#').attr('role', 'button').addClass('ui-dialog-titlebar-close ui-corner-all')).bind({
					click: $.proxy(this._closeFilterDialog, this)
				}).addClass('ui-icon ui-icon-closethick');
                // L.A. 20 June 2012 Fixing bug #114456 Adding more filtering criteria forces the advanced search dialog to expand rather than show scrollbars
				dialogContent = $('<div></div>').appendTo(dialog).addClass('ui-dialog-content').css('overflow', 'auto').css('height', this.options.filterDialogMaxHeight);

				// add condition dialog
				condObj = {label1: this.options.labels.filterDialogConditionLabel1, label2: this.options.labels.filterDialogConditionLabel2};
				dropDownData = [
					{text: this.options.labels.filterDialogAllLabel, value: 'all'},
					{text: this.options.labels.filterDialogAnyLabel, value: 'any'}
				];
				condElement = $($.ig.tmpl(this.options.filterDialogAddConditionTemplate, condObj)).appendTo(dialogContent).addClass(this.css.filterDialogAddCondition);
				//condElement = $.tmpl(this.options.filterDialogAddConditionTemplate, condObj).appendTo(dialogContent).addClass(this.css.filterDialogAddCondition); 
				/* bind({
					change: $.proxy(this._changeFilterCondition, this) 
				}); */

				$($.ig.tmpl(this.options.filterDialogAddConditionDropDownTemplate, dropDownData)).appendTo(condElement.find('div').addClass(this.css.filterDialogAddConditionDropDown).find('select'));
				//$.tmpl(this.options.filterDialogAddConditionDropDownTemplate, dropDownData).appendTo(condElement.find('div').addClass(this.css.filterDialogAddConditionDropDown).find('select'));
				addClearButtons = $('<div></div>').appendTo(dialogContent);
				// add filters table
				$(toStaticHTML('<input type="button"></input>')).appendTo($('<span></span>').appendTo(addClearButtons).addClass(this.css.filterDialogAddButton)).igButton({labelText: this.options.labels.filterDialogAddLabel,
					width: this.options.filterDialogAddButtonWidth}).bind({
					mousedown: $.proxy(this._addFilterFromDialog, this)
				});
				// add Clear All button
				/* if (this.options.showFilterDialogClearAllButton === true) { */
				$('<button />').appendTo(addClearButtons).css('float', 'right').igButton({
					labelText: this.options.labels.filterDialogClearAllLabel,
					click: $.proxy(this._filterDialogClearAll, this),
					css: {
						"buttonClasses": this.css.filterDialogClearAllButton,
						"buttonHoverClasses": "",
						"buttonActiveClasses": "", //when button is clicked 
						"buttonFocusClasses": "", //when button get focus
						"buttonLabelClass": ""
					}
				});
				$('<label></label>').appendTo(dialogContent).attr('id', dialog.attr('id') + '_error').hide().text(this.options.labels.filterDialogErrorLabel).addClass("ui-widget ui-state-error ui-igvalidator-label");
				$('<table><tbody></tbody></table>').appendTo(dialogContent).addClass(this.css.filterDialogFiltersTable);
				okCancelContainer = $('<div></div>').appendTo($('<div></div>').appendTo(dialog).addClass(this.css.filterDialogOkCancelButton)).addClass('ui-dialog-buttonset');
				//Add Cancel button
				$('<button/>').appendTo(okCancelContainer).igButton({labelText: this.options.labels.filterDialogCancelLabel,
					width: this.options.filterDialogOkCancelButtonWidth}).bind({
					mousedown: $.proxy(this._closeFilterDialog, this)
				});
				// Add Ok button
				$('<button/>').appendTo(okCancelContainer).igButton({labelText: this.options.labels.filterDialogOkLabel,
					width: this.options.filterDialogOkCancelButtonWidth}).bind({
					click: $.proxy(this._searchFilterDialog, this)
				});
				//A.T. 14 Feb 2011 - Fix for #64483
				if (this._hc === true) {
					limit = $('#' + this.grid.element[0].id.split('_')[0] + '_container');
				} else {
					limit = this.grid.container();
				}
				dialog.bind({
					keydown: function (e) { if (e.keyCode === $.ui.keyCode.ESCAPE) { f._closeFilterDialog(); } }
				}).draggable({containment: limit, handle: caption, drag: $.proxy(this._filterDialogMove, this)})
					.resizable({ minHeight: dialog.outerHeight() / 4, minWidth: dialog.outerWidth() / 2,
						containment: "parent", resize: $.proxy(this._resizeHandler, this) }).attr('role', 'dialog').attr('tabIndex', -1);
				this._trigger(this.events.filterDialogContentsRendered, null, {dialogElement: dialog, owner: this});
			}
		},
		_setResizableEnv: function () {
			var e = $("#" + this.grid.container().attr('id') + "_dialog"),
				rCont = e.find(">.ui-dialog-content"),
				hCont = e.find(">.ui-dialog-titlebar"),
				bCont = e.find(">.ui-dialog-buttonpane"),
				pad = rCont.outerHeight() - rCont.height();
			this._resizeCont = rCont;
			this._heightDifference = hCont.outerHeight(true) + bCont.outerHeight(true) + pad;
		},
		_resizeHandler: function (event, ui) {
			var u = ui.originalElement;
			//	rCont = u.find(".ui-dialog-content");
			this._resizeCont.css({
				height: (u.height() - this._heightDifference) + "px"
			});
		},
		_changeFilterCondition: function (e) {
			// if the condition does not require an entry, set the value in the third dropdown and disable it
			var requiresEntry, col, editor, condition, editorObject;
			condition = e.target.value;
			col = this.grid.columnByText($(e.target).closest('td').parent().find('td:nth-child(1)').find('input')[0].value);
			editor = $(e.target).closest('td').parent().find('td:nth-child(3)').find('input');
			requiresEntry = this._requiresEntry(condition);
			if (!requiresEntry) {
				editor.igEditor("option", "disabled", true);
				editorObject = editor.data('igEditor');
				// set correct input value if it doesn't require an entry
				this._editorValueForCondition(condition, editorObject);
			} else {
				editor.igEditor("option", "disabled", false);
			}
		},
		_addFilterFromDialog: function (e, expression) {
			var tableBody = $('#' + this.grid.container().attr('id') + '_dialog table tbody'), j, cs = this.options.columnSettings,
				filterObj = {}, filterRow, colKeys, i, noCancel = true, field, type, cnd, allowed, defaultValue, condition, col;
			noCancel = this._trigger(this.events.filterDialogFilterAdding, null, {filtersTableBody: tableBody, owner: this});
			if (noCancel) {
				if (tableBody.children().length >= this.options.filterDialogMaxFilterCount) {
					// use the validation framework to validate the button?
					$('#' + this.grid.container().attr('id') + '_dialog_error').show();
					return;
				}
				// fire filter adding event
				filterRow = $($.ig.tmpl(this.options.filterDialogFilterTemplate, filterObj)).appendTo(tableBody).hide();
				//filterRow = $.tmpl(this.options.filterDialogFilterTemplate, filterObj).appendTo(tableBody).hide();
				// instantiate editors and fill in values
				// 1. list of columns
				colKeys = [];
				for (i = 0; i < this.grid.options.columns.length; i++) {
					// check if filtering is allowed on this column
					allowed = true;
					for (j = 0; j < cs.length; j++) {
						if ((this.grid.options.columns[i].key === cs[j].columnKey || i === cs[j].columnIndex) && cs[j].allowFiltering === false) {
							allowed = false;
							break;
						}
					}
					if (allowed) {
						colKeys.push(this.grid.options.columns[i].headerText);
					}
				}
                // L.A. 10 May 2012 Fixing bug #110975
                if (expression === undefined) {
				    field = this.grid.columnByKey(this._dialogCurrentColumn).headerText;
				    type = this._dialogCurrentType;
                } else {
                    col = this.grid.columnByKey(expression.fieldName);
                    if (col !== null) {
                        field = col.headerText;
                        type = col.dataType;
                    }
                    condition = expression.cond;
                    defaultValue = expression.expr;
                }				// use igeditor
				filterRow.find('td:first').find('input').css('width', 80).igEditor({
					listItems: colKeys,
					button: 'dropdown',
					listAutoComplete: true,
					listMatchOnly: true,
					width: this.options.filterDialogColumnDropDownDefaultWidth || 120,
					textChanged: $.proxy(this._polulateFilterConditionDropDown, this),
					//value: this.grid.columnByKey(field).headerText
					value: field,
					//_utc: true
					enableUTCDates: this.grid.options.enableUTCDates
				});
				cnd = filterRow.find('td:nth-child(2)').children().first();
				//2. conditions for the respective column will be populated later dynamically, when the column is changed
				this._populateConditionsList(cnd, field, type);
				// attach a handler to the conditions list for value change
				cnd.bind('change', $.proxy(this._changeFilterCondition, this));
				filterRow.find('td:nth-child(2)').children().first().css('width', this.options.filterDialogFilterDropDownDefaultWidth);
				// show filterRow (INPUT) before creating editor, because hidden drop-down button may flicker
				filterRow.show();
                this._populateFilterDialogInput(filterRow.find('td:nth-child(3)').children().first(), type, defaultValue);
				//3. remove button for the filter
				filterRow.find('td:last').children().first().addClass(this.css.filterDialogFilterRemoveButton).bind({
					mousedown: $.proxy(this._removeFilterFromDialog, this)
				});
				// fire filter added
				this._trigger(this.events.filterDialogFilterAdded, null, {filter: filterRow, owner: this});
			}
		},
		_filterDialogClearAll: function (e) {
			// events? 
			var tableBody = $('#' + this.grid.container().attr('id') + '_dialog table tbody');
			tableBody.empty();
			//A.T. 12 Feb 2011 - Fix for bug #64538
			// clear validation error message if any
			$('#' + this.grid.container().attr('id') + '_dialog_error').hide();
		},
		_polulateFilterConditionDropDown: function (e) {
			var selectedColKey = e.target.value, conditionList, cols = this.grid.options.columns, type, expr, i;
			// find the column, and populate the conditions based on the type
			conditionList = $(e.target).closest('tr').find('td:nth-child(2)').children().first();
			expr = $(e.target).closest('tr').find('td:nth-child(3)').children().first();
			for (i = 0; i < cols.length; i++) {
				if (cols[i].headerText === selectedColKey) {
					type = cols[i].dataType;
					break;
				}
			}
			// no full match
			if (type === undefined) {
				return;
			}
			this._populateConditionsList(conditionList, selectedColKey, type);
			this._populateFilterDialogInput(expr, type);
		},
		_populateFilterDialogInput: function (input, type, defaultValue) {
			var options = {
				type: this._getEditorType(type),
				buttonHidden: type !== 'date',
				button: 'dropdown',
				disabled: type === 'bool',
				maxDecimals: 12,
				textAlign: (type === 'number') ? 'right' : 'left',
				width: this.options.filterDialogExprInputDefaultWidth,
				value: defaultValue,
				//_utc: true
				enableUTCDates: this.grid.options.enableUTCDates
			};
			// do not allow to create same igEditor for different elements. First time it is INPUT, but later it can be SPAN or INPUT
			if (!input.is('input')) {
				input = input.find('INPUT');
			}
			input.igEditor(options);
		},
		_populateConditionsList: function (conditionList, selectedColKey, type) {

			var conditions = [];

			if (type === "number") {
				conditions.push({conditionName: "equals", conditionLabel: this.options.labels.equals});
				conditions.push({conditionName: "doesNotEqual", conditionLabel: this.options.labels.doesNotEqual});
				conditions.push({conditionName: "greaterThan", conditionLabel: this.options.labels.greaterThan});
				conditions.push({conditionName: "lessThan", conditionLabel: this.options.labels.lessThan});
				conditions.push({conditionName: "greaterThanOrEqualTo", conditionLabel: this.options.labels.greaterThanOrEqualTo});
				conditions.push({conditionName: "lessThanOrEqualTo", conditionLabel: this.options.labels.lessThanOrEqualTo});

			} else if (type === "bool" || type === "boolean") {
				conditions.push({conditionName: "true", conditionLabel: this.options.labels.trueLabel});
				conditions.push({conditionName: "false", conditionLabel: this.options.labels.falseLabel});

			} else if (type === "date") {
				conditions.push({conditionName: "on", conditionLabel: this.options.labels.on});
				conditions.push({conditionName: "notOn", conditionLabel: this.options.labels.notOn});
				conditions.push({conditionName: "after", conditionLabel: this.options.labels.after});
				conditions.push({conditionName: "before", conditionLabel: this.options.labels.before});
				conditions.push({conditionName: "today", conditionLabel: this.options.labels.today});
				conditions.push({conditionName: "yesterday", conditionLabel: this.options.labels.yesterday});
				conditions.push({conditionName: "thisMonth", conditionLabel: this.options.labels.thisMonth});
				conditions.push({conditionName: "lastMonth", conditionLabel: this.options.labels.lastMonth});
				conditions.push({conditionName: "nextMonth", conditionLabel: this.options.labels.nextMonth});
				conditions.push({conditionName: "thisYear", conditionLabel: this.options.labels.thisYear});
				conditions.push({conditionName: "lastYear", conditionLabel: this.options.labels.lastYear});
				conditions.push({conditionName: "nextYear", conditionLabel: this.options.labels.nextYear});
			} else { // string
				conditions.push({conditionName: "startsWith", conditionLabel: this.options.labels.startsWith});
				conditions.push({conditionName: "endsWith", conditionLabel: this.options.labels.endsWith});
				conditions.push({conditionName: "contains", conditionLabel: this.options.labels.contains});
				conditions.push({conditionName: "doesNotContain", conditionLabel: this.options.labels.doesNotContain});
				conditions.push({conditionName: "equals", conditionLabel: this.options.labels.equals});
				conditions.push({conditionName: "doesNotEqual", conditionLabel: this.options.labels.doesNotEqual});
			}

			if (this.options.showEmptyConditions) {
				conditions.push({conditionName: "empty", conditionLabel: this.options.labels.empty});
				conditions.push({conditionName: "notEmpty", conditionLabel: this.options.labels.notEmpty});
			}

			if (this.options.showNullConditions) {
				conditions.push({conditionName: "null", conditionLabel: this.options.labels.nullLabel});
				conditions.push({conditionName: "notNull", conditionLabel: this.options.labels.notNull});
			}
			// clear the list from existing conditions
			conditionList.empty();
			// reset selected value
			$($.ig.tmpl(this.options.filterDialogFilterConditionTemplate, conditions)).appendTo(conditionList);
			//$.tmpl(this.options.filterDialogFilterConditionTemplate, conditions).appendTo(conditionList);
			// IE9 has a pretty obvious bug, we need this hack to handle that case
			if ($.browser.msie) {
				conditionList.parent().append(conditionList);
				conditionList.width(conditionList.width());
			}
		},
		_removeFilterFromDialog: function (e) {
			// remove filter
			var tableBody = $('#' + this.grid.container().attr('id') + '_dialog table tbody');
			$(e.target).closest('tr').remove();
			// hide the error message if it is shown
			if (tableBody.children().length < this.options.filterDialogMaxFilterCount) {
				$('#' + this.grid.container().attr('id') + '_dialog_error').hide();
			}
		},
		// append dropdowns as children of the grid container
		// create string filtering dropdowns
		_renderStringFilterDropDown: function (id, colName) {

			var ul = this._renderDropDownElement(id, colName), obj;
			// render items in the list
			if (this.options.filterDropDownItemIcons !== true) {

				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).addClass(this.css.filterDropDownListItemClear)).text(this.options.labels.clear).addClass('ui-corner-all');
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'startsWith')).text(this.options.labels.startsWith).addClass('ui-corner-all');
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'endsWith')).text(this.options.labels.endsWith).addClass('ui-corner-all');
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'contains')).text(this.options.labels.contains).addClass('ui-corner-all');
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'doesNotContain')).text(this.options.labels.doesNotContain).addClass('ui-corner-all');
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'equals')).text(this.options.labels.equals).addClass('ui-corner-all');
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'doesNotEqual')).text(this.options.labels.doesNotEqual).addClass('ui-corner-all');

			} else {

				// the template is: "<li class='${itemClass}'><span class='${imgClass}'></span><span class='${textClass}'> ${text} </span></li>"
				obj = {itemClass: this.css.filterDropDownListItemWithIcons, imgContainerClass: this.css.filterItemIconContainer, imgClass: this.css.filterItemIconClear, textClass: this.css.filterDropDownListItemTextContainer, text: this.options.labels.clear};

				// render the templates (Clear)
				$($.ig.tmpl(this._ft, obj)).appendTo(ul);
				//$.tmpl(this._ft, obj).appendTo(ul);

				// Starts With
				obj.text = this.options.labels.startsWith;
				obj.imgClass = this.css.filterItemIconStartsWith;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'startsWith');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'startsWith');

				// Ends with
				obj.text = this.options.labels.endsWith;
				obj.imgClass = this.css.filterItemIconEndsWith;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'endsWith');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'endsWith');

				// Contains
				obj.text = this.options.labels.contains;
				obj.imgClass = this.css.filterItemIconContains;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'contains');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'contains');

				// Does Not Contain
				obj.text = this.options.labels.doesNotContain;
				obj.imgClass = this.css.filterItemIconDoesNotContain;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'doesNotContain');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'doesNotContain');

				// Equals
				obj.text = this.options.labels.equals;
				obj.imgClass = this.css.filterItemIconEquals;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'equals');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'equals');

				// Does Not Equal
				obj.text = this.options.labels.doesNotEqual;
				obj.imgClass = this.css.filterItemIconDoesNotEqual;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'doesNotEqual');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'doesNotEqual');
			}
			return ul;
		},
		// create numeric filtering dropdowns
		_renderNumericFilterDropDown: function (id, colName) {
			var ul = this._renderDropDownElement(id, colName), obj;
			// render items in the list 
			if (this.options.filterDropDownItemIcons !== true) {
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).addClass(this.css.filterDropDownListItemClear)).text(this.options.labels.clear);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'equals')).text(this.options.labels.equals);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'doesNotEqual')).text(this.options.labels.doesNotEqual);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'greaterThan')).text(this.options.labels.greaterThan);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'lessThan')).text(this.options.labels.lessThan);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'greaterThanOrEqualTo')).text(this.options.labels.greaterThanOrEqualTo);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'lessThanOrEqualTo')).text(this.options.labels.lessThanOrEqualTo);
			} else {
				obj = {itemClass: this.css.filterDropDownListItemWithIcons, imgContainerClass: this.css.filterItemIconContainer, imgClass: this.css.filterItemIconClear, textClass: this.css.filterDropDownListItemTextContainer, text: this.options.labels.clear};
				// render the templates (Clear)
				$($.ig.tmpl(this._ft, obj)).appendTo(ul);
				//$.tmpl(this._ft, obj).appendTo(ul);
				// Equals
				obj.text = this.options.labels.equals;
				obj.imgClass = this.css.filterItemIconEquals;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'equals');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'equals');
				// DoesNotEqual
				obj.text = this.options.labels.doesNotEqual;
				obj.imgClass = this.css.filterItemIconDoesNotEqual;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'doesNotEqual');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'doesNotEqual');
				// GreaterThan
				obj.text = this.options.labels.greaterThan;
				obj.imgClass = this.css.filterItemIconGreaterThan;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'greaterThan');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'greaterThan');
				// LessThan
				obj.text = this.options.labels.lessThan;
				obj.imgClass = this.css.filterItemIconLessThan;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'lessThan');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'lessThan');
				// GreaterThanOrEqualTo
				obj.text = this.options.labels.greaterThanOrEqualTo;
				obj.imgClass = this.css.filterItemIconGreaterThanOrEqualTo;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'greaterThanOrEqualTo');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'greaterThanOrEqualTo');
				// LessThanOrEqualTo
				obj.text = this.options.labels.lessThanOrEqualTo;
				obj.imgClass = this.css.filterItemIconLessThanOrEqualTo;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'lessThanOrEqualTo');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'lessThanOrEqualTo');
			}
			return ul;
		},
		// create date filtering dropdowns 
		_renderDateFilterDropDown: function (id, colName) {
			var ul = this._renderDropDownElement(id, colName), obj;
			// render items in the list 
			if (this.options.filterDropDownItemIcons !== true) {
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).addClass(this.css.filterDropDownListItemClear)).text(this.options.labels.clear);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'on')).text(this.options.labels.on);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'notOn')).text(this.options.labels.notOn);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'after')).text(this.options.labels.after);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'before')).text(this.options.labels.before);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'today')).text(this.options.labels.today);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'yesterday')).text(this.options.labels.yesterday);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'thisMonth')).text(this.options.labels.thisMonth);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'lastMonth')).text(this.options.labels.lastMonth);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'nextMonth')).text(this.options.labels.nextMonth);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'thisYear')).text(this.options.labels.thisYear);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'lastYear')).text(this.options.labels.lastYear);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'nextYear')).text(this.options.labels.nextYear);
			} else {
				obj = {itemClass: this.css.filterDropDownListItemWithIcons, imgContainerClass: this.css.filterItemIconContainer, imgClass: this.css.filterItemIconClear, textClass: this.css.filterDropDownListItemTextContainer, text: this.options.labels.clear};
				// render the templates (Clear)
				$($.ig.tmpl(this._ft, obj)).appendTo(ul);
				//$.tmpl(this._ft, obj).appendTo(ul);
				// On
				obj.text = this.options.labels.on;
				obj.imgClass = this.css.filterItemIconOn;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'on');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'on');
				// Not On
				obj.text = this.options.labels.notOn;
				obj.imgClass = this.css.filterItemIconNotOn;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'notOn');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'notOn');
				// After
				obj.text = this.options.labels.after;
				obj.imgClass = this.css.filterItemIconAfter;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'after');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'after');
				// Before
				obj.text = this.options.labels.before;
				obj.imgClass = this.css.filterItemIconBefore;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'before');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'before');
				//Today
				obj.text = this.options.labels.today;
				obj.imgClass = this.css.filterItemIconToday;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'today');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'today');
				// Yesterday
				obj.text = this.options.labels.yesterday;
				obj.imgClass = this.css.filterItemIconYesterday;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'yesterday');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'yesterday');
				// thisMonth
				obj.text = this.options.labels.thisMonth;
				obj.imgClass = this.css.filterItemIconThisMonth;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'thisMonth');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'thisMonth');
				// lastMonth
				obj.text = this.options.labels.lastMonth;
				obj.imgClass = this.css.filterItemIconLastMonth;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'lastMonth');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'lastMonth');
				// NextMonth
				obj.text = this.options.labels.nextMonth;
				obj.imgClass = this.css.filterItemIconNextMonth;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'nextMonth');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'nextMonth');
				// ThisYear
				obj.text = this.options.labels.thisYear;
				obj.imgClass = this.css.filterItemIconThisYear;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'thisYear');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'thisYear');
				// LastYear
				obj.text = this.options.labels.lastYear;
				obj.imgClass = this.css.filterItemIconLastYear;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'lastYear');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'lastYear');
				// NextYear
				obj.text = this.options.labels.nextYear;
				obj.imgClass = this.css.filterItemIconNextYear;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'nextYear');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'nextYear');
			}
			return ul;
		},
		// create boolean filtering dropdowns
		_renderBooleanFilterDropDown: function (id, colName) {

			var ul = this._renderDropDownElement(id, colName), obj;
			// render items in the list
			if (this.options.filterDropDownItemIcons !== true) {
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).addClass(this.css.filterDropDownListItemClear)).text(this.options.labels.clear);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'true')).text(this.options.labels.trueLabel);
				$('<a></a>').appendTo($('<li></li>').appendTo(ul).addClass(this.css.filterDropDownListItem).data('cond', 'false')).text(this.options.labels.falseLabel);
			} else {
				obj = {itemClass: this.css.filterDropDownListItemWithIcons, imgContainerClass: this.css.filterItemIconContainer, imgClass: this.css.filterItemIconClear, textClass: this.css.filterDropDownListItemTextContainer, text: this.options.labels.clear};
				// render the templates (Clear)
				$($.ig.tmpl(this._ft, obj)).appendTo(ul);
				//$.tmpl(this._ft, obj).appendTo(ul);
				// True
				obj.text = this.options.labels.trueLabel;
				obj.imgClass = this.css.filterItemIconTrue;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'true');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'true');
				// False
				obj.text = this.options.labels.falseLabel;
				obj.imgClass = this.css.filterItemIconFalse;
				$($.ig.tmpl(this._ft, obj)).appendTo(ul).data('cond', 'false');
				//$.tmpl(this._ft, obj).appendTo(ul).data('cond', 'false');
			}
			return ul;
		},
		_renderDropDownElement: function (id, colName) {
			var ul, container;
			ul = $('<ul></ul>').appendTo("body").addClass(this.css.filterDropDownList);
			container = $('<div></div>').appendTo("body").attr('id', id).addClass(this.css.filterDropDown).css('overflow', 'hidden').css('position', 'absolute').hide();
			if (!$.browser.msie) {
				container.css('overflow-y', 'auto');
			}
			container.remove();
			if (this.options.filterDropDownWidth > 0) {
				ul.css('width', this.options.filterDropDownWidth);
			}
			if (this.options.filterDropDownHeight > 0) {
				container.css('height', this.options.filterDropDownHeight);
			}
			ul.data('colName', colName);
			ul.wrap(container);
			// mark it with the "efh" attribute - "excludeFromHeight"
			ul.parent().data('efh', '1');
			// attach events
			$('#' + id).delegate("li", {
				mousedown: $.proxy(this._selectDropDownItem, this),
				mouseover: $.proxy(this._hoverDropDownItem, this),
				mouseout: $.proxy(this._unhoverDropDownItem, this)
			});
			return ul;
		},
		_hoverButton: function (event) {
			var $target  = $(event.currentTarget).find('span');
			if (this.options.mode === "advanced") {
				$target.addClass(this.css.filterButtonAdvancedHover);
			} else {
				$target.addClass(this.css.filterButtonHover);
			}
		},
		_unhoverButton: function (event) {
			var $target  = $(event.currentTarget).find('span');
			if (this.options.mode === "advanced") {
				$target.removeClass(this.css.filterButtonAdvancedHover);
			} else {
				$target.removeClass(this.css.filterButtonHover);
			}
		},
		_activateButton: function (event) {
			var $target = $(event.currentTarget).find('span');
			if (this._dontApplyStyles) {
				this._dontApplyStyles = false;
				return;
			}
			if (this.options.mode === "advanced") {
				$target.addClass(this.css.filterButtonAdvancedActive);
			} else {
				$target.addClass(this.css.filterButtonActive);
			}
		},
		_deactivateButton: function (event) {
			var target = $(event.target).find('span');
			target.removeClass(this.css.filterButtonAdvancedActive);
			target.removeClass(this.css.filterButtonActive);
		},
		_toggleDropDown: function (event, close, dontFocus) {
			var $target  = $(event.currentTarget), id = $target.attr('id'), dd, left, top, leftScroll, topScroll, noCancel = true, button = $target.find('span');

			if (this._animating && id === this._animatingId) {
				return;
			}
			// find the dropdown
			dd = $('#' + id.substring(0, id.indexOf('_button')));
			// set left and top to position the dropdown below the button
			leftScroll = 0;
			topScroll = 0;

			if (!(!dd.is(":visible") && close === true)) {
				this._animating = true;
				this._animatingId = id;
			}

			if (this._openingAnimation !== true) {
				this._dontFocus = dontFocus;
			} else {
				this._dontFocus = null;
			}
			this._isClosing = false;
			// trigger dropdown opening / closing
			if (dd.is(":visible")) {
				// trigger closing
				noCancel = this._trigger(this.events.dropDownClosing, null, {dropDown: dd, owner: this});
				this._isClosing = true;
			} else {
				// trigger opening
				if (!close) {
					noCancel = this._trigger(this.events.dropDownOpening, null, {dropDown: dd, owner: this});
				}
			}
			if (noCancel) {
				// looks like this issue is fixed in FF4, therefore i am not going to 
				//if (!$.browser.webkit && !$.browser.msie) {
					//leftScroll = $(document).scrollLeft();
					//topScroll = $(document).scrollTop();
				//} 
				left = button.offset().left;
				top = button.offset().top + button.outerHeight();
				// account for body padding
				//left = left + parseInt($('body').css('margin-left'), 10) + parseInt($('body').css('padding-left'), 10);
				//top = top + parseInt($('body').css('margin-top'), 10) + parseInt($('body').css('padding-top'), 10);
				// finally, show the dropdown, if it is hidden, or hide it alternatively
				if (dd.offset().left !== left && dd.offset().top !== top) {
					dd.css('left', left).css('top', top);
				}
				this._currentTarget = $target;
				this._dd = dd;
				if (!this._isClosing) {
					this._opendd = dd;
				}
				if ($.browser.msie) {
					dd.css('overflow-x', 'hidden');
					dd.css('overflow-y', 'hidden');
				}
				if (close !== undefined && close === true) {
					if (dd.is(':visible')) {
						if (this.options.filterDropDownAnimations !== "none") {
							dd.hide(this.options.filterDropDownAnimationDuration, $.proxy(this._animationEnd, this));
						} else {
							dd.hide();
							// trigger closed event
							this._trigger(this.events.dropDownClosed, null, {dropDown: dd, owner: this});
						}
					}
				} else {
					if (this.options.filterDropDownAnimations !== "none") {
						if (dd.is(':visible')) {
							this._closingTarget = this._currentTarget;
						} else {
							this._openingTarget = this._currentTarget;
							this._openingAnimation = true;
						}
						dd.toggle(this.options.filterDropDownAnimationDuration, $.proxy(this._animationEnd, this));
					} else {
						dd.toggle();
						// trigger closed/opened events
						if (this._isClosing) {
							this._trigger(this.events.dropDownClosed, null, {dropDown: dd, owner: this});
						} else {
							this._trigger(this.events.dropDownOpened, null, {dropDown: dd, owner: this});
						}
						// we need to focus the button manually
						if (dontFocus !== true) {
							this._dontApplyStyles = true;
							$target.focus();
						}
					}
				}
			}
		},
		_animationEnd: function () {
			if (this._isClosing === true) {
				this._trigger(this.events.dropDownClosed, null, {dropDown: this._dd, owner: this});
			} else {
				this._trigger(this.events.dropDownOpened, null, {dropDown: this._opendd, owner: this});
				this._openingAnimation = false;
			}
			if (this._dd && $.browser.msie) {
				this._dd.css('overflow-y', 'auto');
			}
			this._isClosing = null;
			// we need to focus the button manually
			if (this._dontFocus !== true) {
				this._dontApplyStyles = true;
				this._openingTarget.focus();
			}
			this._animating = false;
		},
		_toggleDropDownKeyboard: function (event) {
			var parent, selectedItem, $target = $(event.target), ddVisible;
			if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
				event.stopPropagation();
				event.preventDefault();
				parent = $('#' + $target.attr('id').substring(0, $target.attr('id').indexOf('_button'))).find('ul');
				if (parent.data('selectedItem')) {
					selectedItem = parent.find('li:nth-child(' + (parent.data('selectedItem') + 1) + ')');
					ddVisible = $('#' + $target.attr('id').substring(0, $target.attr('id').indexOf('_button'))).is(":visible");
					if ($(selectedItem).hasClass('ui-iggrid-filterddlistitemadvanced') && ddVisible) {
						// open advanced filter dialog
						this._openFilterDialog(event);
					}
				}
				this._toggleDropDown(event);
			} else if (event.keyCode === $.ui.keyCode.DOWN) {
				event.stopPropagation();
				event.preventDefault();
				this._selectDropDownItem(event, 'next');
			} else if (event.keyCode === $.ui.keyCode.UP) {
				event.stopPropagation();
				event.preventDefault();
				this._selectDropDownItem(event, 'prev');
			}
		},
		_closeDropDown: function (event) {
			var $target = $(event.currentTarget).find('span'), $targetButton = $(event.currentTarget), dd;
			if (this._openingTarget && event.target.id === this._openingTarget.attr('id') && this._openingAnimation === true) {
				return;
			}
			dd = $('#' + $targetButton.attr('id').substring(0, $targetButton.attr('id').indexOf('_button')));
			if (dd && !dd.is(':visible')) {
				// remove focus styles
				$target.removeClass(this.css.filterButtonActive);
				return; // no need to close the dropdown if it has been already closed
			}
			this._toggleDropDown(event, true, true);
			if (this._dontApplyStyles) {
				this._dontApplyStyles = false;
				return;
			}
			if (this.options.mode === "advanced") {
				$target.removeClass(this.css.filterButtonAdvancedActive);
			} else {
				$target.removeClass(this.css.filterButtonActive);
			}
		},
		_selectDropDownItem: function (event, nav) {
			var $target = $(event.currentTarget), filterCondition, colIndex, sel, parent, button, requiresEntry, currentCond;
			if ($target.find('input').length > 0 && this.options.mode === "advanced") {
				return;
			}
			if (nav === 'next' || nav === 'prev') {
				parent = $('#' + $target.attr('id').substring(0, $target.attr('id').indexOf('_button'))).find('ul');
			}
			if (nav === 'next') {
				// get the currently selected item
				if (parent.data('selectedItem') === undefined) {
					$target = parent.find('li:first');
				} else {
					$target = parent.find('li:nth-child(' + (parent.data('selectedItem') + 1) + ')');
					if ($target.next().length === 0) {
					// last, get the first
						$target = parent.find('li:first');
					} else {
						$target = $target.next();
					}
				}
			}
			if (nav === 'prev') {
				// get the currently selected item
				if (parent.data('selectedItem') === undefined) {
					$target = parent.find('li:last');
				} else {
					$target = parent.find('li:nth-child(' + (parent.data('selectedItem') + 1) + ')');
					if ($target.prev().length === 0) {
						// last, get the first
						$target = parent.find('li:last');
					} else {
						$target = $target.prev();
					}
				}
			}
			filterCondition = $target.data('cond');
			// update tooltip
			button = $('#' + $target.closest('div').attr('id') + '_button');
			if ($target.data('cond') === undefined) {
				button.attr('title', this.options.tooltipTemplate.replace('${condition}', this.options.labels.noFilter));
			} else {
				button.attr('title', this.options.tooltipTemplate.replace('${condition}', $target.text()));
			}
			colIndex = $('#' + $target.closest('div').attr('id') + '_button').find('span').data('colIndex');
            /* L.A. 31 May 2012 Fixed bug #113280 "Microsoft JScript runtime error: Unable to get value of the property 'condition': 
             object is null or undefined " thrown when filtering on hidden column. 
			   L.A. 01 Aug 2012 Fixing bug # 118178 igGridFiltering.Filter method does not update the UI even if updateUI parameter is set to true
			    If there is no colIndex, that means there is no visible drop down field to update, so return here
			   L.A. 20 Aug 2012 Fixing bug # 118552 Filtering condition cannot be changed for the first defined column.
			 */
			if (colIndex === null || colIndex === undefined) {
				return;
			}
			currentCond = this.options.columnSettings[parseInt(colIndex, 10)].condition;
			if (filterCondition !== undefined) {
				// change the editor condition
				this.options.columnSettings[parseInt(colIndex, 10)].condition = filterCondition;
			} else if (currentCond === 'empty' || currentCond === 'notEmpty' || currentCond === 'null' || currentCond === 'notNull' || !this._requiresEntry(currentCond)) {
				// should not be null but the default condition !
				this.options.columnSettings[parseInt(colIndex, 10)].condition = this._getDefaultCondition(this.grid.options.columns[colIndex].dataType);
			}
			// apply active state on target
			sel = $target.parent().data('selectedItem');
			if (sel !== undefined) {
				$target.parent().find('li:nth-child(' + (sel + 1) + ')').removeClass(this.css.filterDropDownListItemActive);
			}
			$target.addClass(this.css.filterDropDownListItemActive);
			$target.parent().data('selectedItem', $('li', $target.parent()).index($target));
			// reinitialize editor
			this._editors[colIndex].element.igEditor("option", "nullText", this.options.nullTexts[filterCondition]);
			requiresEntry = this._requiresEntry(filterCondition);
			// we should always clear the filter after a new one has been selected
			if ($target.hasClass('ui-iggrid-filterddlistitemclear') || (this.options.filterDropDownItemIcons === true && $target.find('.ui-iggrid-filtericonclear').length > 0)) {
				// clear editor
				// if the default condition does not require an entry, set disabled to false on the editor
				if (!requiresEntry || filterCondition === undefined) {
					this._editors[colIndex].element.igEditor("option", "disabled", this.grid.options.columns[colIndex].dataType === 'bool');
				}
				this._editors[colIndex].value(null);
				this._filterDataSourceClear(this.grid.options.columns[colIndex].key, colIndex);
			} else {
				// determine if the condition requires entry
				if (!requiresEntry) {
					this._editors[colIndex].element.igEditor("option", "disabled", true);
					// set correct input value if it doesn't require an entry
					this._editorValueForCondition(filterCondition, this._editors[colIndex]);
					this._filterInternal(colIndex, this.grid.options.columns[colIndex].key);
				//A.T. 14 Feb 2011 - Fix for bug #64465
				} else if (this._editors[colIndex].value() !== "" && this._editors[colIndex].value() !== null) {
					this._editors[colIndex].value(null);
				}
				if (requiresEntry) {
					this._editors[colIndex].element.igEditor("option", "disabled", false);
				}
				if (nav === undefined && filterCondition !== undefined) {
					this._editors[colIndex].setFocus();
				}
			}
		},
		_requiresEntry: function (filterCondition) {
			if (filterCondition === "true" ||
					filterCondition === "false" ||
					filterCondition === "today" ||
					filterCondition === "yesterday" ||
					filterCondition === "thisMonth" ||
					filterCondition === "nextMonth" ||
					filterCondition === "lastMonth" ||
					filterCondition === "thisYear" ||
					filterCondition === "lastYear" ||
					filterCondition === "empty" ||
					filterCondition === "notEmpty" ||
					filterCondition === "null" ||
					filterCondition === "notNull" ||
					filterCondition === "nextYear") {
				return false;
			}
			if (filterCondition === undefined || filterCondition === null) {
				return false;
			}
			return true;
		},
		_editorValueForCondition: function (filterCondition, editor) {
			var date = new Date();
			if (filterCondition === "true") {
				editor.value(true);
			} else if (filterCondition === "false") {
				editor.value(false);
			} else if (filterCondition === "today") {
				editor.value(new Date());
			} else if (filterCondition === "yesterday") {
				editor.value(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, 0, 0, 0, 0));
			/*
			} else if (filterCondition === "empty") {
				editor.value('empty');
			} else if (filterCondition === "notEmpty") {
				editor.value('notEmpty');
			} else if (filterCondition === "null") {
				editor.value('null');
			} else if (filterCondition === "notNull") {
				editor.value('notNull');
			*/
			} else {
				editor.value(null);
			}
		},
		_hoverDropDownItem: function (event) {
			if ($(event.currentTarget).find('input').length === 0) {
				$(event.currentTarget).addClass(this.css.filterDropDownListItemHover);
			}
		},
		_unhoverDropDownItem: function (event) {
			$(event.currentTarget).removeClass(this.css.filterDropDownListItemHover);
		},
		_virtualHorizontalScroll: function (event, args) {
			var start = args.startColIndex, i, headers = this.grid.headersTable().find('th'), columnKey;
			if (this._currentTarget) {
				this._toggleDropDown({currentTarget: this._currentTarget}, true);
			}

			if (this.options.mode === "advanced" && this.options.advancedModeEditorsVisible !== true) {
				for (i = 0; i < this.grid._virtualColumnCount; i++) {
                    columnKey = this.grid.options.columns[i + start].key;
					$(headers[i]).data('colName', columnKey);
                    if (this._fcData[columnKey] === true) {
                        // if filter button is shown in feature chooser do not update in indicator container
                        continue;
                    }
					// update button ID
					$(headers[i]).find('a').attr('id', this.grid.element[0].id + '_dd_' + columnKey + '_button');
				}
				this._updateTooltips(this._currentAdvancedExpressions || []);
			} else {
				throw new Error($.ig.GridFiltering.locale.virtualizationSimpleFilteringNotAllowed);
				/*
				// re-create the editors and reset the dropdown buttons as we scroll
				buttons = $('.ui-iggrid-filterrow', this.grid.container()).find('.ui-iggrid-filterbutton');
				for (i = 0; i < this.grid._virtualColumnCount; i++) {
					// change the button ids and the header IDs
					$(buttons[i]).parent().attr('id', this.grid.element[0].id + '_dd_' + this.grid.options.columns[i + start].key + '_button');
					$(headers[i]).attr('id', this.grid.options.columns[i + start].key);
					
					// now swap the editors
					this._editors[i].element.swap(this._editors[i + start].element);
				}
				*/
			}
		},
		_headerInit: function (owner, args) {
			var filterrow;
			// clear all cells from the filter row that are marked with data-skip=true
			if (this.options.mode !== "simple" || this.grid.element.attr('id') !== args.owner.element.attr('id')) {
				return;
			}
			filterrow = this.grid.container().find('thead').find("[data-role=filterrow]");
			filterrow.find("[data-skip=true]").remove();
			this.grid._headerInit(filterrow, null, true);
		},
		_injectGrid: function (gridInstance, isRebind) {
			this.grid = gridInstance;
			if (this.options.type === null) {
				// infer type
				this.options.type = this.grid._inferOpType();
			}
            // attach headerRendered handler
			if (this.options.filterExprUrlKey) {
				this.grid.dataSource.settings.filtering.filterExprUrlKey = this.options.filterExprUrlKey;
			}
			this.grid.dataSource.settings.filtering.caseSensitive = this.options.caseSensitive;

            if (this._headerCellRenderedHandler !== null && this._headerCellRenderedHandler !== undefined) {
                this.grid.element.unbind('iggridheadercellrendered', this._headerCellRenderedHandler);
			}
            this._headerCellRenderedHandler = $.proxy(this._headerCellRendered, this);
			this.grid.element.bind('iggridheadercellrendered', this._headerCellRenderedHandler);

			if (this._headerRenderedHandler !== null && this._headerRenderedHandler !== undefined) {
				this.grid.element.unbind('iggridheaderrendered', this._headerRenderedHandler);
			}
            this._headerRenderedHandler = $.proxy(this._headerRendered, this);
			this.grid.element.bind('iggridheaderrendered', this._headerRenderedHandler);

			if (this._columnResizedHandler !== null && this._columnResizedHandler !== undefined) {
				this.grid.element.unbind('iggridresizingcolumnresized', this._columnResizedHandler);
			}
            this._columnResizedHandler = $.proxy(this._columnResized, this);
			this.grid.element.bind('iggridresizingcolumnresized', this._columnResizedHandler);

			if (this._columnsCollectionModifiedHandler !== null && this._columnsCollectionModifiedHandler !== undefined) {
				this.grid.element.unbind('iggridcolumnscollectionmodified', this._columnsCollectionModifiedHandler);
			}
            this._columnsCollectionModifiedHandler = $.proxy(this._columnsCollectionModified, this);
			this.grid.element.bind('iggridcolumnscollectionmodified', this._columnsCollectionModifiedHandler);

            //if (!isRebind) {
			this._initDefaultSettings();
			//}
			// register for uiDirty
			this.grid.element.bind('iggriduidirty', $.proxy(this._onUIDirty, this));

			// manage horizontal virtual scrolling -> columns need to be updated accordingly and 
			this._virtualHorizontalScrollHandler = $.proxy(this._virtualHorizontalScroll, this);
			this.grid.element.bind('iggridvirtualhorizontalscroll', this._virtualHorizontalScrollHandler);

			if (((this.grid.options.virtualization === true && this.grid.options.width !== null) || this.grid.options.columnVirtualization === true) && this.options.mode === null) {
				this.options.mode = 'advanced';
			} else if (((this.grid.options.virtualization === false || (this.grid.options.virtualization === true && this.grid.options.width === null)) && this.grid.options.columnVirtualization === false) && this.options.mode === null) {
				this.options.mode = 'simple';
			} else if (this.options.mode === 'simple' && (this.grid.options.virtualization === true || this.grid.options.columnVirtualization === true)) {
				throw new Error($.ig.GridFiltering.locale.virtualizationSimpleFilteringNotAllowed);
			}

            this._headerInitHandler = $.proxy(this._headerInit, this);
			this.grid.element.bind('iggridheaderextracellsmodified', this._headerInitHandler);
            if (this.grid.element.igGridFeatureChooser !== undefined) {
                this.grid.element.igGridFeatureChooser();
            } else {
				throw new Error($.ig.GridFiltering.locale.featureChooserNotReferenced);
			}
		}
	});
    $.extend($.ui.igGridFiltering, {version: '12.2.20122.1021'});
}(jQuery));
