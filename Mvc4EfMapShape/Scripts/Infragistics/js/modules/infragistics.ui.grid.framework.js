/*!
* Infragistics.Web.ClientUI Grid localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Grid) {
	$.ig.Grid = {};

	$.extend($.ig.Grid, {

		locale: {
			noSuchWidget: "No such widget loaded: ",
			autoGenerateColumnsNoRecords: "autoGenerateColumns is enabled, but there are no records in the data source in order to determine the columns",
			optionChangeNotSupported: "Changing the following option after the igGrid has been created is not supported:",
			optionChangeNotScrollingGrid: "The following option cannot be changed after the grid is created because your initial grid is not scrolling and full re-rendering is required:",
			noPrimaryKeyDefined: "There is no primary key defined for the grid. In order to use features such as Grid Editing, you will need to define a primary key.",
			indexOutOfRange: "The row index you have specified is out of range.",
			noSuchColumnDefined: "The specified column key does not match any of the defined grid columns.",
			columnIndexOutOfRange: "The specified column index is out of range.",
			recordNotFound: "The record with the specified id could not be found in the data view:",
			columnNotFound: "No column was found matching key:",
			colPrefix: "Column ",
			columnVirtualizationRequiresWidth: "You have virtualization / columnVirtualization set to true, but no width could be inferred for grid columns. You should set one of a) grid width, b) defaultColumnWidth, c) define width for each column",
			virtualizationRequiresHeight: "You have virtualization set to true which requires grid height to be set too.",
            colVirtualizationDenied: "columnVirtualization is applicable for fixed virtualization only",
			noColumnsButAutoGenerateTrue: "You have autoGenerateColumns set to false, but there are no columns defined in the grid. Please set autoGenerateColumns to true, or specify columns manually",
			noPrimaryKey: "the igHierarchicalGrid widget requires a primary key to be defined.",
			templatingEnabledButNoTemplate: "You have jQueryTemplating set to true, but there is no rowTemplate defined.",
			expandTooltip: "Expand Row",
			collapseTooltip: "Collapse Row",
			movingNotAllowedOrIncompatible: "Moving of the requested column could not be completed. The column was not found or the result was not compatible with the column layout."
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {
		locale: {
			startsWithNullText: "Starts with...",
			endsWithNullText: "Ends with...",
			containsNullText: "Contains...",
			doesNotContainNullText: "Does not contain...",
			equalsNullText: "Equals...",
			doesNotEqualNullText: "Does not equal...",
			greaterThanNullText: "Greater than...",
			lessThanNullText: "Less than...",
			greaterThanOrEqualToNullText: "Greater than or equal to...",
			lessThanOrEqualToNullText: "Less than or equal to...",
			onNullText: "On...",
			notOnNullText: "Not on...",
			emptyNullText: "Empty",
			notEmptyNullText: "Not empty",
			nullNullText: "Null",
			notNullNullText: "Not null",
			startsWithLabel: "Starts with",
			endsWithLabel: "Ends with",
			containsLabel: "Contains",
			doesNotContainLabel: "Does not contain",
			equalsLabel: "Equals",
			doesNotEqualLabel: "Does not equal",
			greaterThanLabel: "Greater than",
			lessThanLabel: "Less than",
			greaterThanOrEqualToLabel: "Greater than or equal to",
			lessThanOrEqualToLabel: "Less than or equal to",
			trueLabel: "True",
			falseLabel: "False",
			afterLabel: "After",
			beforeLabel: "Before",
			todayLabel: "Today",
			yesterdayLabel: "Yesterday",
			thisMonthLabel: "This month",
			lastMonthLabel: "Last month",
			nextMonthLabel: "Next month",
			thisYearLabel: "This year",
			lastYearLabel: "Last year",
			nextYearLabel: "Next year",
			clearLabel: "Clear Filter",
			noFilterLabel: "No",
			onLabel: "On",
			notOnLabel: "Not on",
			advancedButtonLabel: "Advanced",
			filterDialogCaptionLabel: "ADVANCED SEARCH",
			filterDialogConditionLabel1: "Show records matching ",
			filterDialogConditionLabel2: " of the following criteria",
			filterDialogOkLabel: "Search",
			filterDialogCancelLabel: "Cancel",
			filterDialogAnyLabel: "ANY",
			filterDialogAllLabel: "ALL",
			filterDialogAddLabel: "Add",
			filterDialogErrorLabel: "Maximum filters count exceeded.",
			filterSummaryTitleLabel: "Search results",
			filterSummaryTemplate: "${matches} matching records",
			filterDialogClearAllLabel: "Clear ALL",
			tooltipTemplate: "${condition} filter applied",
			// M.H. 13 Oct. 2011 Fix for bug #91007
			featureChooserText: "Hide Filter",
			featureChooserTextHide: "Show Filter",
			// M.H. 17 Oct. 2011 Fix for bug #91007
			featureChooserTextAdvancedFilter: "Advanced Filter",
			virtualizationSimpleFilteringNotAllowed: "When horizontal virtualization is enabled, simple filtering (filter row) is not supported. Please set mode to 'advanced' and/or do not enable advancedModeEditorsVisible",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use loader or use one of the combined script files."
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {
		locale: {
			emptyGroupByAreaContent: "Drag a column here or {0} to Group By",
			emptyGroupByAreaContentSelectColumns: "select columns",
			emptyGroupByAreaContentSelectColumnsCaption: "select columns",
			expandTooltip: "Expand Grouped Row",
			collapseTooltip: "Collapse Grouped Row",
			removeButtonTooltip: "Remove Grouped Column",
			featureChooserText: "Ungroup By",
			featureChooserTextHide: "Group By",
			modalDialogCaptionButtonDesc: "Click to sort ascending",
			modalDialogCaptionButtonAsc: "Click to sort descending",
			modalDialogCaptionButtonUngroup: "Click to ungroup",
			modalDialogGroupByButtonText: "Group By",
			modalDialogCaptionText: 'Add to Group By',
			modalDialogDropDownLabel: 'Showing:',
			modalDialogClearAllButtonLabel: 'clear all',
			modalDialogRootLevelHierarchicalGrid: 'root',
			modalDialogDropDownButtonCaption: "Click to show/hide",
			modalDialogButtonApplyText: 'Apply',
			modalDialogButtonCancelText: 'Cancel'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "Column Chooser",
			hiddenColumnIndicatorTooltipText: "Hidden Column(s)",
			columnHideText: "Hide",
			columnChooserCaptionLabel: "Column Chooser",
			columnChooserCheckboxesHeader: "view",
			columnChooserColumnsHeader: "column",
			columnChooserCloseButtonTooltip: "Close",
			hideColumnIconTooltip: "Hide",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.",
			columnChooserShowText: "Show",
			columnChooserHideText: "Hide",
			columnChooserResetButtonLabel: "reset",
			columnChooserButtonApplyText: 'Apply',
			columnChooserButtonCancelText: 'Cancel'
		}
	});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "Show ",
			pageSizeDropDownTrailingLabel: "records",
			//pageSizeDropDownTemplate: "Show ${dropdown} records",
			nextPageLabelText: "next",
			prevPageLabelText: "prev",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "Pg",
			currentPageDropDownTrailingLabel: "of ${count}",
			//currentPageDropDownTemplate: "Pg ${dropdown} of ${count}",
			currentPageDropDownTooltip: "Choose page index",
			pageSizeDropDownTooltip: "Choose number of records per page",
			pagerRecordsLabelTooltip: "Current records range",
			prevPageTooltip: "go to the previous page",
			nextPageTooltip: "go to the next page",
			firstPageTooltip: "go to the first page",
			lastPageTooltip: "go to the last page",
			pageTooltipFormat: "page ${index}",
			pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} of ${recordCount} records"
		}
	});

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection is not initialized. To avoid receiving this error message please enable the Selection feature for the grid or set the requireSelection property of the Row Selectors feature to false."
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {
		locale: {
			sortedColumnTooltipFormat: 'sorted ${direction}',
			unsortedColumnTooltip: 'click to sort column',
			ascending: 'ascending',
			descending: 'descending',
			modalDialogSortByButtonText: 'sort by',
			modalDialogResetButton: "reset",
			modalDialogCaptionButtonDesc: "Click to sort descending",
			modalDialogCaptionButtonAsc: "Click to sort ascending",
			modalDialogCaptionButtonUnsort: "Click to remove sorting",
			featureChooserText: "Sort on Multiple",
			modalDialogCaptionText: "Sort Multiple",
			modalDialogButtonApplyText: 'Apply',
			modalDialogButtonCancelText: 'Cancel'
			//modalDialogButtonSlideCaption: "Click to show/hide sorted columns"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "Hide Summaries",
			featureChooserTextHide: "Show Summaries",
			dialogButtonOKText: 'OK',
			dialogButtonCancelText: 'Cancel',
			emptyCellText: '',
			summariesHeaderButtonTooltip: 'Show/hide summaries',
			// M.H. 13 Oct. 2011 Fix for bug 91008
			defaultSummaryRowDisplayLabelCount: 'Count',
			defaultSummaryRowDisplayLabelMin: 'Min',
			defaultSummaryRowDisplayLabelMax: 'Max',
			defaultSummaryRowDisplayLabelSum: 'Sum',
			defaultSummaryRowDisplayLabelAvg: 'Avg',
			defaultSummaryRowDisplayLabelCustom: 'Custom',
			calculateSummaryColumnKeyNotSpecified: "Please specify column key to calculate summary",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files."
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'Done',
			doneTooltip: 'Stop editing and update',
			cancelLabel: 'Cancel',
			cancelTooltip: 'Stop editing and do not update',
			addRowLabel: 'Add new row',
			addRowTooltip: 'Click to start adding new row',
			deleteRowLabel: '',
			deleteRowTooltip: 'Delete row',
			igEditorException: 'The updating for ui.igGrid requires ui.igEditor to be loaded',
			igComboException: 'In order to use the combo type for ui.igGrid, the ui.igCombo should be loaded',
			igRatingException: 'In order to use the igRating as editor for ui.igGrid, the ui.igRating should be loaded',
			igValidatorException: 'Validation options defined in igGridUpdating require ui.igValidator to be loaded',
			noPrimaryKeyException: 'In order to support update operations after a row was deleted, application should define "primaryKey" in options of igGrid.',
			hiddenColumnValidationException: 'Cannot edit row which has a hidden column with enabled validation.',
			dataDirtyException: 'Grid has pending transactions which may affect rendering of data. To prevent exception, application may enable "autoCommit" option of igGrid, or it should process "dataDirty" event of igGridUpdating and return false. While processing that event, application also may do "commit()" data in igGrid.',
            rowEditDialogCaptionLabel: 'Edit row data'
		}
	});

	$.ig.ColumnMoving = $.ig.ColumnMoving || {};
	
	$.extend($.ig.ColumnMoving, {
		locale: {
		    movingDialogButtonApplyText: 'Apply',
            movingDialogButtonCancelText: 'Cancel',
            movingDialogCaptionButtonDesc: 'Move Down',
            movingDialogCaptionButtonAsc: 'Move Up',
            movingDialogCaptionText: 'Move Columns',
			movingDialogDisplayText: 'Move Columns',
			dropDownMoveLeftText: 'Move Left',
			dropDownMoveRightText: 'Move Right',
			dropDownMoveFirstText: 'Move First',
			dropDownMoveLastText: 'Move Last',
			featureChooserNotReferenced: 'Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.',
			movingToolTipMove: 'Move'
		}
	});
}


 /*!
 * Infragistics.Web.ClientUI Grid 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on: 
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.dataSource.js
 *  ig.ui.shared.js
 *	ig.util.js
 */

/*global jQuery, Modernizr */
if (typeof (jQuery) === 'undefined') {
	throw new Error("jQuery is undefined");
}

(function ($) {

	var _hovTR, _aNull = function (val) { return val === null || val === undefined; };
	/*
		igGrid is a widget based on jQuery UI that provides Excel like functionality by rendering data in tabular form
		and includes support for paging, sorting, filtering and selection (both local and remote)
		the widget can be bound to various types of data sources such as JSON, XML, Remote WCF/REST services, etc.
	*/
	$.widget("ui.igGrid", {
		css: {
			/* classes applied to the top container element */
			"baseClass" : "ui-widget ui-helper-clearfix ui-corner-all",
			/* Widget content class applied to various content containers in the grid */
			"baseContentClass" : "ui-widget-content",
			/* class applied to the top container element */
			"gridClasses" : "ui-iggrid",
			/* classes applied to the TBODY, and inherited through css for the records */
			"recordClass" : "ui-ig-record ui-iggrid-record",
			/* classes applied on alternate records */
			"recordAltClass" : "ui-ig-altrecord ui-iggrid-altrecord",
			/* classes applied to the grid header elements */
			"headerClass" : "ui-iggrid-header ui-widget-header",
			/* classes applied to the header text container */
			"headerTextClass" : "ui-iggrid-headertext",
			/* jQuery UI class applied to the grid header elements */
			"baseHeaderClass" : "ui-widget-header",
			/* classes applied to the TABLE which holds the grid records */
			"gridTableClass" : "ui-iggrid-table ui-widget-content",
			/* when fixed headers is enabled, this class is applied to the table that holds the header TH elements */
			"gridHeaderTableClass" : "ui-iggrid-headertable",
			/* when fixed footers is enabled, this class is applied to the table that holds the footer TD elements */
			"gridFooterTableClass" : "ui-iggrid-footertable ui-widget-footer",
			/* when fixed headers is enabled, this class is applied to the table that holds the footer elements */
			"gridFooterClass" : "",
			/* when no headers are shown or fixed headers is false, the caption (if any) needs to be rendered in a separate table */
			"gridCaptionTableClass": "ui-iggrid-captiontable",
			/* classes applied to the element that's on top of the header that has some description */
			"gridHeaderCaptionClass" : "ui-iggrid-headercaption ui-widget-header ui-corner-top",
			/* class applied to the TABLE's TBODY holding data records */
			"gridTableBodyClass" : "ui-iggrid-tablebody",
			/* classes applied to the scrolling div container when width and height are defined and scrollbars is 'true' */
			"gridScrollDivClass" : "ui-iggrid-scrolldiv ui-widget-content",
			/* classes applied to the grid footer caption contents */
			"gridFooterCaptionClass" : "ui-iggrid-footercaption",
			/* classes applied to the deleted rows of grid before commit */
			deletedRecord: 'ui-iggrid-deletedrecord',
			/* classes applied to the modified rows of grid before commit */
			modifiedRecord: 'ui-iggrid-modifiedrecord',
			/* class appplied to the grid element when RTL is enabled */
			rtl: "ui-iggrid-rtl"
		},
		options: {
			/* type="string|number|null"
				string The widget width can be set in pixels (px) and percentage (%).
				number The widget width can be set as a number
				null type="object" will stretch to fit data, if no other widths are defined
			*/
			width : null,
			/* type="string|number|null" This is the total height of the grid, including all UI elements - scroll container with data rows, header, footer, filter row -  (if any), etc.  
				string The widget height can be set in pixels (px) and percentage (%).
				number The widget height can be set as a number
				null type="object" will stretch vertically to fit data, if no other heights are defined
			*/
			height : null,
			/* type="bool" If autoAdjustHeight is set to false, the options.height will be set only on the scrolling container, and all other UI elements such as paging footer / filter row/ headers will add on top of that, so the total height of the grid will be more than this value - the height of the scroll container (content area) will not be dynamically calculated. Setting this option to false will usually result in a lot better initial rendering performance for large data sets ( > 1000 rows rendered at once, no virtualization enabled), since no reflows will be made by browsers when accessing DOM properties such as offsetHeight. */
			autoAdjustHeight: true,
			/* type="string|number" used for virtualization, this is the average value in pixels (default) that will be used to calculate how many rows and which ones to render as the end user scrolls. Also all rows' height will be automatically equal to this value 
				string The avarage row height can be set in pixels (25px).
				number The avarage row height can be set as a number (25).
			*/
			avgRowHeight : 25,
			/* type="string|number" used for virtualization, this is the average value in pixels for a column width 
				string The avarage column width can be set in pixels (25px).
				number The avarage column width can be set as a number (25).
			*/
			avgColumnWidth: null,
			/* type="string|number" Default column width that will be set for all columns.
				string The default column width can be set in pixels (px).
				number The default column width can be set as a number.
			*/
			defaultColumnWidth : null,
			/* type="bool" if no columns collection is defined, and autoGenerateColumns is set to true, columns will be inferred from the data source */
			autoGenerateColumns : true,
			/* type="bool" Enables/disables virtualization. Virtualization can greatly enhance rendering performance. If enabled, the number of actual rendered rows (DOM elements) will be constant and related to the visible viewport of the grid. As the end user scrolls, those DOM elements will be dynamically reused to render the new data. */
			virtualization : false,
			/* type="fixed|continuous" Determines virtualization mode
				fixed type="string" renders only the visible rows and/or columns in the grid. On scrolling the same rows and/or columns are updated with new data from the data source.
				continuous type="string" renders a pre-defined number of rows in the grid. On scrolling the continuous virtualization loads another portion of rows and disposes the current one.
			*/
			virtualizationMode : 'fixed',
			/* type="bool" this is an internal option and should not be used. */
			requiresDataBinding: true,
			/* type="bool" option to enable virtualization for rows only (vertical) */
			rowVirtualization : false,
			/* type="bool" option to enable virtualization for columns only (horizontal) */
			columnVirtualization : false,
			/* type="number" number of pixels to move the grid when virtualization is enabled, and mouse wheel scrolling is performed over the virtual grid area. The "null" value will assume this is set to avgRowHeight */
			virtualizationMouseWheelStep: null,
			//visibleVirtualRecords: null, // if this is specified, then the height of the grid will be calculated automatically based on the average row height and the visible virtual records. if no average row height is specified, one will be calculated automatically at runtime 
			/* type="true|false" If this option is set to true, the height of the grid row will be calculated automatically based on the average row height and the visible virtual records. If no average row height is specified, one will be calculated automatically at runtime.
				true type="bool" no matter what avg row height is set, one will be automatically calculated at runtime
				false type="bool"
			*/
			adjustVirtualHeights: false,
			/* type="string" jQuery templating style template that will be used to render data records */
			rowTemplate: null,
			/* type="bool" custom high-performance rendering will be used for rendering by default. jQuery Templating plugin can be used and enabled by setting this option to true. This will allow usage of column / row templates in jQuery Templating style. If virtualization is enabled, it is advised to keep this option to "false", in order to have better scrolling/rendering performance  
			*** IMPORTANT ***
			This option has been depricated as of the 12.1 release. The igGrid now uses the custom Infragistics templating engine by default.
			*/
			jQueryTemplating: false,
			/* type="array" an array of column objects */
			columns : [
				{
					/* type="string" Column header text */
					headerText: null,
					/* type="string" column key (property in the data source to which the column is bound) */
					key: null,
					/* type="object" Reference to a function (string or function) which will be used for formatting the cell values. The function should accept a value and return the new formatted value. */
					formatter: null,
					/* type="string" Sets gets format for cells in column. Default value is null.
						If dataType is "date", then supported formats are following: "date", "dateLong", "dateTime", "time", "timeLong", "MM/dd/yyyy", "MMM-d, yy, h:mm:ss tt", "dddd d MMM", etc.
						If dataType is "number", then supported numeric formats are following: "number", "currency", "percent", "int", "double", "0.00", "#.0####", "0", "#.#######", etc.
						The value of "double" will be similar to "number", but with unlimited maximum number of decimal places.
						The format patterns and rules for numbers and dates are defined in $.ig.regional.defaults object.
						If dataType is "string" or not set, then format is rendered as it is with replacement of possible "{0}" flag by value in cell. Example, if format is set to "Name: {0}" and value in cell is "Bob", then value will appear as "Name: Bob"
						If value is set to "checkbox", then checkboxes are used regardless of renderCheckboxes option of igGrid. That has effect only when dataType option of column is set to "bool".
					*/
					format: null,
					/* type="string|number|bool|date" data type of the column cell values */
					dataType: "string",
					/* type="string|number" Width of the column in pixels or percentage. Can have optional 'px' at the end. If width is not defined and defaultColumnWidth is set, it is assumed for all columns.
						string The column width can be set in pixels (px) and percentage (%).
						number The column width can be set as a number
					*/
					width: null,
					/* type="bool" Initial visibility of the column. A column can be hidden without the Hiding feature being enabled but there will be no UI for unhiding it. Columns can be defined as hidden in the options of the Hiding feature as well and those definitions take precedence.*/
					hidden: false,
					/* type="string" Sets a template for an individual column. the contents of the template should be the HTML markup that goes inside the table cell, without any <td> and </td> tags included in front and at the end. The syntax of the template, when referencing data keys and using conditional expressions is the same as the one for rowTemplate */
					template: null,
					/* type="bool" Sets whether column is bound to the datasource*/
					unbound: false,
					/* type="array" array of other column definitions. If the column has the property group than the grid has multi column headers*/
					group: [],
					/* type="number" used to adjust span of multi column header cell*/
					rowspan: 0,
					/* type="string|object" a reference or name of a javascript function which will calculate the value based on other cell values in the same row when column is unbound */
					formula: null,
					/* type="array" array of values which could be set for unbound columns at init time */
					unboundValues: null
				}
			],
			/* type="object" can be any valid data source accepted by $.ig.DataSource, or an instance of an $.ig.DataSource itself */
			dataSource : null,
			/* type="string" specifies a remote URL as a data source, from which data will be retrieved using an AJAX call ($.ajax)*/
			dataSourceUrl: null,
			/* type="string" explicitly set data source type (such as "json"). Please refer to the documentation of $.ig.DataSource and its type property */
			dataSourceType: null,
			/* type="string" see $.ig.DataSource. This is basically the property in the responses where data records are held, if the response is wrapped */
			responseDataKey: null,
			/* type="string" See $.ig.DataSource. Property in the response specifying the total number of records on the server. */
			responseTotalRecCountKey: null,
			/* type="bool" option controlling the visibility of the grid header */
			showHeader : true,
			/* type="bool" option controlling the visibility of the grid footer */
			showFooter : true,
			/* type="bool" headers will be fixed if this option is set to true, and only the grid data will be scrollable. If virtualization is enabled, fixedHeaders will always act as if it's true, no matter which value is set */
			fixedHeaders: true,
			/* type="bool" footers will be fixed if this option is set to true, and only the grid data will be scrollable. If virtualization is enabled, fixedFooters will always act as if it's true, no matter which value is set */
			fixedFooters: true,
			/* type="string" caption text that will be shown above the grid header */
			caption: null,
			/* type="object" a list of grid features definitions: sorting, paging, etc. Each feature goes with its separate options that are documented for the feature accordingly */
			features : [
				{
					/* feature options object */
				}
			],
			/* type="number" initial tabIndex attribute that will be set on the container element */
			tabIndex: 0,
			/* type="bool" if this option is set to true, ARIA and role attributes will be rendered for data records, cells and grid containers */
			accessibilityRendering: false,
			/* type="bool" if this option is set to false, the data to which the grid is bound will be used "as is" with no additional transformations based on columns defined */
			localSchemaTransform: true,
			/* type="string" primary key name of the column containing unique identifiers */
			primaryKey: null,
			/* type="bool" if true, the transaction log will always be sent in the request for remote data, by the data source. Also this means that if there are values in the log, a POST will be done instead of GET */
			serializeTransactionLog: true,
			/* type="bool" automatically commits the transactions as rows/cells are being edited */
			autoCommit: false,
			/* type="bool" if set to true, the following behavior will take place:
				if a new row is added, and then deleted, there will be no transaction added to the log 
				if a new role is added, edited, then deleted, there will be no transaction added to the log
				if several edits are made to a row or an individual cell, this should result in a single transaction
			*/
			aggregateTransactions: false,
			/* type="date|number|dateandnumber|true|false" Sets gets ability to automatically format text in cells for numeric and date columns. The format patterns and rules for numbers and dates are defined in $.ig.regional.defaults object.
				date formats only Date columns
				number formats only number columns
				dateandnumber type="string"
				true type="bool" formats Date and number columns
				false type="bool" auto formatting is disabled
			*/
			autoFormat: 'date',
			/* type="bool" Gets sets ability to render checkboxes and use checkbox editor when dataType of a column is "bool". That option is not available when jQueryTemplating is used. */
			renderCheckboxes: false,
			/* type="string" URL to which updating requests will be made. If autoCommit is true, updates will be done immediately to the data source, without keeping interim transaction logs */
			updateUrl: null,
			/* Settings related to REST compliant update routine */
			restSettings: {
				/* Settings for create requests */
				create: {
					/* type="string" specifies a remote URL to which create requests will be sent. This will be used for both batch and non-batch, however if template is also set, this URL will only be used for batch requests. */
					url: null,
					/* type="string" specifies a remote URL template. Use ${id} in place of the resource id. */
					template: null,
					/* type="bool" specifies whether create requests will be sent in batches */
					batch: false
				},
				/* Settings for update requests */
				update: {
					/* type="string" specifies a remote URL to which update requests will be sent. This will be used for both batch and non-batch, however if template is also set, this URL will only be used for batch requests. */
					url: null,
					/* type="string" specifies a remote URL template. Use ${id} in place of the resource id. */
					template: null,
					/* type="bool" specifies whether update requests will be sent in batches */
					batch: false
				},
				/* Settings for remove requests */
				remove: {
					/* type="string" specifies a remote URL to which remove requests will be sent. This will be used for both batch and non-batch, however if template is also set, this URL will only be used for batch requests. */
					url: null,
					/* type="string" specifies a remote URL template. Use ${id} in place of the resource id. */
					template: null,
					/* type="bool" specifies whether update requests will be sent in batches */
					batch: false
				},
				/* type="bool" specifies whether the ids of the removed resources are send through the request URI */
				encodeRemoveInRequestUri: true
			},
			/* type="bool" enables/disables rendering of alternating row styles (odd and even rows receive different styling). Note that if a custom jQuery template is set, this has no effect and CSS for the row should be adjusted manually in the template contents.  */
			alternateRowStyles: true,
			/* type="bool"  If autofitLastColumn is true and all columns' widths are specified and their combined width is less than the grid width then the last column width will be automatically adjusted to fill the entire grid. */
			autofitLastColumn: true,
			/* type="bool"  enables/disables rendering of ui-state-hover classes when the mouse is over a record. this can be useful in templating scenarios, for example, where we don't want to apply hover styling to templated content */
			enableHoverStyles: true,
			/* type="bool" enables formatting of the dates as UTC. Note that this may be desirable when the dates are coming from a backend, encoded as UTC. Otherwise, if dates are created on the client (in the browser), most probably keeping enableUTCDates to false is the desired behavior */
			enableUTCDates: false,
			/* type="bool" Merge unbound columns values inside datasource when data source is remote. If true then the unbound columns are merged to the datasource at runtime - indeed DataSource is expanded with the new data and this could cause performance issues when dataSource is huge, if false then the unbound data is sent to the client */
			mergeUnboundColumns: false
		},
		events: {
			/* Event fired when a cell is clicked.
			Function takes arguments evt and ui.
			Use ui.cellElement to get reference to cell DOM element.
			Use ui.rowIndex to get row index.
			Use ui.colIndex to get column index.
			Use ui.owner to get reference to igGrid.
			*/
			cellClick: "cellClick",
			/* cancel="true" Event fired before data binding takes place.
			Return false in order to cancel data binding.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			*/
			dataBinding: "dataBinding",
			/* Event fired after data binding is complete.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			*/
			dataBound: "dataBound",
			/* Event fired before the grid starts rendering (all contents).
			This event is fired only when the grid is being initialized. 
			It will not be fired if the grid is rebound to its data 
			(for example, when calling the dataBind() API method 
			or when changing the page size (when paging is enabled)).
			
			Return false in order to cancel grid rendering.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			*/
			rendering: "rendering",
			/* Event fired after the whole grid widget has been rendered (including headers, footers, etc.).
			This event is fired only when the grid is being initialized. 
			It will not be fired if the grid is rebound to its data 
			(for example, when calling the dataBind() API method 
			or when changing the page size (when paging is enabled)).
			
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			*/
			rendered: "rendered",
			/* cancel="true" Event fired before the TBODY holding the data records starts its rendering.
			Return false in order to cancel data records rendering.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.			
			*/
			dataRendering: "dataRendering",
			/* Event fired after all of the data records in the grid table body have been rendered. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.	
			*/
			dataRendered: "dataRendered",
			/* cancel="true" Event fired before the header starts its rendering.
			Return false in order to cancel header rendering.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.	
			*/
			headerRendering: "headerRendering",
			/* Event fired after the header has been rendered.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			Use ui.table to get reference to headers table DOM element.
			*/
			headerRendered: "headerRendered",
			/* cancel="true" Event fired before the footer starts its rendering.
			Return false in order to cancel footer rendering.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			*/
			footerRendering: "footerRendering",
			/* Event fired after the footer has been rendered.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			Use ui.table to get reference to footers table DOM element.
			*/
			footerRendered: "footerRendered",
			/* Event fired after every TH in the grid header has been rendered.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			Use ui.columnKey to get column key.
			Use ui.th to get reference to header cell DOM element.
			*/
			headerCellRendered: "headerCellRendered",
			/* Event fired before actual data rows (TRs) are rendered.
			Return false in order to cancel rows rendering.	
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			Use ui.tbody to get reference to grid's table body.
			*/
			rowsRendering: "rowsRendering",
			/* Event fired after data rows are rendered.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			Use ui.tbody to get reference to grid's table body.
			*/
			rowsRendered: "rowsRendered",
			/* Event fired after $.ig.DataSource schema has been generated, in case it needs to be modified.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			Use ui.schema to get reference to data source schema.
			Use ui.dataSource to get reference to data source.
			*/
			schemaGenerated: "schemaGenerated",
			/* Event fired after the columns colection has been modified(e.g. a column is hidden)
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGrid.
			*/
			columnsCollectionModified: "columnsCollectionModified",
			/*
				event fired if there is an error in the request, when the grid is doing a remote operation,
				such as data binding, paging, sorting, etc. 
				use ui.owner to get a reference to the grid
				use ui.message to get the error message coming from the server 
			*/
			requestError: "requestError",
			/*
				fired when the grid is created and the initial structure is rendered (this doesn't necessarily imply the data will be there if the data source is remote) 
				use ui.owner to get a reference to the grid
			*/
			created: "igcontrolcreated"
		},
		resizeTimeout: 300,
		/* type="boolean" setting this global widget property manually to true will always remove the data table's body at once, with the risk of memory leaks in IE and FF. The advantage is much faster operations 
			that need to cleanup existing data rows, such as sorting or filtering */
		speedupDOMCleanup: false,

		widget: function () {
			/* returns the element holding the data records */
			return this.element;
		},
		_createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			this.options.columns = [];
			this.options.features = [];
			if (options.dataSource && ($.type(options.dataSource) === "array" || $.type(options.dataSource) === "object")) {
				this.tmpDataSource = options.dataSource;
				options.dataSource = null;
				this._originalOptions = options;
			}
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
		_init: function () {
		},
		_setOption: function (key, value) {
			var header, isScrolling, id = this.element[0].id + '_scroll';
			// handle new settings and update options hash
			//A.T. fix for bug #118369
			// ensure setting an option with the same value does nothing
			if (value === this.options[key]) {
				return;
			}
			//isScrolling = this.options.scrollbars && (this.options.height !== null || this.options.width !== null);
			//A.T. 7 Feb. 2011 - usability review changes 
			isScrolling = (this.options.height !== null || this.options.width !== null);
			$.Widget.prototype._setOption.apply(this, arguments);
			// options that are supported:
			// width, height, defaultColumnWidth, dataSource, showHeader, showFooter, header caption
			// start by throwing an error for all option changes that aren't supported after the widget has been created
			if (key === 'virtualization' || key === 'autoGenerateColumns' || key === 'accessibilityRendering' ||
					key === 'rowVirtualization' || key === 'columnVirtualization' || key === 'fixedHeaders' || key === 'scrollbars') {
				throw new Error($.ig.Grid.locale.optionChangeNotSupported + ' ' + key);
			}
			if (key === 'width') {
				if (isScrolling === true) {
					this.container().css('width', value);
					this.element.css('width', value);
					//A.T. 22 Feb. Fix for bug #102486 
					if (this.options.fixedHeaders) {
						this.headersTable().css('width', value);
					}
				} else {
					throw new Error($.ig.Grid.locale.optionChangeNotScrollingGrid + ' ' + key);
				}
			} else if (key === 'height') {
				// depends if the grid is scrolling or not
				if (isScrolling === true) {
					$('#' + id).css('overflow-y', 'auto');
					if (this.options.autoAdjustHeight) {
						this.container().css('height', value);
						this._initializeHeights();
					} else {
						this.scrollContainer().css('height', value);
					}

					/*
					children = this.container().children();
					height = 0;
					for (i = 0; i < children.length; i++) {
						if (!$(children[i]).attr('id').endsWith('_scroll') && $(children[i]).is(':visible')) {
							height += $(children[i]).outerHeight();
						}
					}
					*/
					//$('#' + this.element[0].id + '_scroll').height(this.container().height() - height);
				} else {
					throw new Error($.ig.Grid.locale.optionChangeNotScrollingGrid + ' ' + key);
				}
			} else if (key === 'dataSource') {
				this.options.dataSource = value;
				this.dataBind();
                //L.A. 111932 - Fixed bug#111932. Position of data cells and header cells are not properly aligned after horizontal scrollbar move.
                this._adjustLastColumnWidth(true);
			} else if (key === 'showHeader') {
				header = $('#' + this.id() + '_headers');
				if (header.length > 0 && header.is('table')) {
					if (value === true) {
						header.show();
					} else {
						header.hide();
					}
				} else {
					header = this.element.find('thead tr');
					if (value === true) {
						header.show();
					} else {
						header.hide();
					}
				}
			} else if (key === 'caption') {
                // L.A. 06 July 2012 Fixing bug #116158 Unable to change Caption dynamically at runtime
				$('#' + this.id() + '_caption').text(value);
			}
		},
		_initialized: false,
		_headersInitialized: false,
		_footerInitialized: false,
		_create: function () {
			var grid = this, i, newCols, cols, oldCols;
			// M.H. 14 June 2012 Fix for bug #114327
			this._isHierarchicalGrid = false;
			this._hasUnboundColumns = false;
			if (this.options._isHierarchicalGrid === true) {
				this._isHierarchicalGrid = true;
			}
			// check for RTL
			this._rtl = this.element.css("direction") === "rtl";
			this._padding = this._rtl ? 'padding-left' : 'padding-right';
			this._tmap = null;
			if (this.tmpDataSource !== null && this.tmpDataSource !== undefined) {
				this.options.dataSource = this.tmpDataSource;
				this._originalOptions.dataSource = this.tmpDataSource;
			}
			this._testInnerHtml();
			this._headerInitCallbacks = [];
			this._footerInitCallbacks = [];
			this._firstBind = true;
			this._isMultiColumnGrid = false;
			this._unboundValues = {};
			// analyze multicolumn headers
			if (this._isMultiColumnHeader() === true) {
				// get 2 objects - one flat representation of the columns(e.g. used for databinding and by the framework)
				// the other object is tree representation of the columns with some additional properties like colspan, rowspan
				this._isMultiColumnGrid = true;
				newCols = [];
				cols = this.options.columns.slice(0);
				oldCols = this.options.columns.slice(0);
				this._multiColumnIdentifier = 0;
				this._maxLevel = this._getMaxLevelRecursive(0, cols);
				this._hiddenColumns = {};

				this._analyzeMultiColumnHeaders(cols, newCols, 0, oldCols, []);
				this._oldCols = oldCols;
				this.options.columns = newCols;
				this._headerCells = [];
			}

            //I.I. bug fix for 107647
            if (this.options.rowVirtualization === true && this.options.virtualizationMode === 'continuous') {
                this.options.virtualization = true;
            }
            //I.I. bug fix for 108205, this is by design, columnVirtualization requires virtualization to be switched on. columnVirtualization is not relevant for continuous virtualization
            if (this.options.columnVirtualization === true) {
                this.options.virtualization = true;
                if (this.options.virtualizationMode === 'continuous') {
                    throw new Error($.ig.Grid.locale.colVirtualizationDenied);
                }
                this.options.virtualizationMode = 'fixed';
            }
			// virtualization always uses fixed headers 
            // S.S. May 11, 2012 #103088, Regardless of what the user sets, all virtualization uses fixed headers and fixed footers 
			// which should properly be recognized by all features
			if (this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true) {
				if (this.options.virtualizationMode === undefined || this.options.virtualizationMode === '') {
					this.options.virtualizationMode = 'fixed';
				}
                if (this.options.virtualizationMode === 'fixed') {
				    this.options.fixedHeaders = true;
					// M.H. 12 March 2012 Fix for bug #101222
					this.options.fixedFooters = true;
                }
			}

            //I.I. bug fix for 104408
            if (this.options.virtualization === true && this.options.virtualizationMode === 'continuous') {
                this.options.fixedHeaders = true;
            }
			/*
			if (this.options.jQueryTemplating === null && (this.options.virtualization === false && this.options.rowVirtualization === false)) {
				this.options.jQueryTemplating = true;
			} else if (this.options.jQueryTemplating === null && (this.options.virtualization === true || this.options.rowVirtualization === true)) {
				this.options.jQueryTemplating = false;
			}
			*/
			if ((this.options.height === null || parseInt(this.options.height, 10) <= 0) && this.options.fixedHeaders === true) {
				this.options.fixedHeaders = false;
			}

			// M.H. 12 March 2012 Fix for bug #101222
			if ((this.options.height === null || parseInt(this.options.height, 10) <= 0) && this.options.fixedFooters === true) {
				this.options.fixedFooters = false;
			}
			/*
			if (this.options.alternateRowStyles === null && (this.options.virtualization === true || this.options.rowVirtualization === true)) {
				this.options.alternateRowStyles = false;
			} else if (this.options.alternateRowStyles === null) {
				this.options.alternateRowStyles = true;
			}
			*/
			// trigger an internal data bind call
			this.dataBind(true);
			this._cellClickHandler = function (event) {
				var row = $(event.target).closest('tr'), key = row.attr("data-id"), colKey,
					/* L.A. 12 July 2012 - Fixing bug #116993 When cell selection is in use and 
					the user tries to edit a cell, the 3rd and each subsequent clicks on that cell 
					cause the igGrid's cellClick event handler to be fired incorrectly for the 1st 
					cell of the row
					L.A. 22 August 2012 - Fixing bug #119477 wrong cell index is returned when a checkbox
					is clicked
					*/
					colIndex = $(event.target).closest("td").index();
				if (key === "" || key === null || key === undefined) {
					key = row.index();
				}
				if (colIndex >= 0 && colIndex < grid._visibleColumns().length) {
					/* L.A. 12 July 2012 - Fixing bug #116909 When there's a hidden column, the igGrid's 
					cellClick event reports the ui.columnKey input arg as if there are no hidden columns*/
					colKey = grid._visibleColumns()[colIndex].key;
				}
				// click for the main grid element; 'event' is the browser event 
				if ($(event.target).is('td') || ($(event.target).closest('td').length === 1 &&
						$(event.target).closest('td').parent().attr("data-container") !== "true")) {
					// we need to conclude if the element that was clicked is a grid cell or not. As a start this check will be enough.
					grid._trigger(grid.events.cellClick, event, {
						'rowIndex' : row.index(),
						'rowKey': key,
						'colIndex' : colIndex,
						'colKey': colKey,
						'cellElement' : event.target,
						owner: grid
					});
				}
			};
			this.element.bind({'click': this._cellClickHandler});
			// auto adjusting heights when resizing and the grid height is defined with a percentage. In that case we need to either use a timeout
			// or resize (which only works in IE)
			if ((this.options.height !== null && this.options.height.indexOf && this.options.height.indexOf('%') !== -1) ||
					(this.options.height !== null && this.options.width !== null)) {
				this._resId = setInterval($.proxy(this._resizeContainer, this), this.resizeTimeout);
			}

			//set default value for column.hidden
			for (i = 0; i < this.options.columns.length; i++) {
				if (this.options.columns[i].hidden === undefined) {
					this.options.columns[i].hidden = false;
				}
			}

			// listen to soft dispose. If a feature is of local type, but the invoking one is of remote type, the local one must be marked as fully dirty
			// example: sorting a column when sorting is local and then changing the page index when paging is remote
			this._uiSoftDirtyHandler = $.proxy(this._onFeaturesSoftDirty, this);
			this.element.bind('iggriduisoftdirty', this._uiSoftDirtyHandler);
			this._oldScrollTop = 0;
			// trigger created event
			this.element.trigger(this.events.created, {owner: this});
			// set the rtl class
			if (this._rtl) {
				this.container().addClass(this.css.rtl);
			}
		},
		_testInnerHtml: function () {
			var t = document.createElement("table");
			try {
				t.innerHTML = "<tr><td> t </td></tr>";
				this._canreplaceinner = true;
			} catch (e) {
				this._canreplaceinner = false;
			}
		},
		_resizeContainer: function () {
			var scrollContainerWidth,
				o = this.options,
				v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;
			if (o.autoAdjustHeight && this.container().height() !== this._prevContainerHeight) {
				this._initializeHeights();
			}
			if (o.width !== null && o.height !== null) {
				if (v === false) {
					scrollContainerWidth = this.scrollContainer().width();
				} else {
					scrollContainerWidth = $("#" + this.element[0].id + "_displayContainer").width() + this._scrollbarWidth();
				}
				//A.T. 10 May 2012 - Fix for bug #111407 
				if (this._gridInnerWidth !== scrollContainerWidth && this._gridInnerWidth > 0) {
					this._gridInnerWidth = scrollContainerWidth;
					this._updateHScrollbarVisibility();
				}
			}
		},
		_isMultiColumnHeader: function () {
			// checks whether the grid has multicolumn headers - checks whether in columns definition some of the columns on the root level has property group
			var cols = this.options.columns, i;
			for (i = 0; i < cols.length; i++) {
				if (cols[i].group !== undefined && cols[i].group !== null) {
					return true;
				}
			}
			return false;
		},
		// cols - current level of cols (the function is recursive),
		// newCols - flat list of columns at level 0
		// level - current level, oldCols - cols(which are passed to the grid.options.columns) with analyzed, colspan and level
		// children - list of children for each multicolumn header
		_analyzeMultiColumnHeaders: function (cols, newCols, level, oldCols, children, isHidden) {
			// analyze multicolumn headers - get colspans for multicolumn headers, set level for each header column and gets flat list of columns on level 0
			// sets identifier for each column - if column does not have key(even if multicolumn header) then it is set auto generated key
			// we need of keys to get easier cells and in some features - like resizing, hiding, column moving
			var i, j, res, colsLength = cols.length, colspan = 0, ind = [], isGroup = false, groupChildren = [], identifier, hidden;

			for (i = 0; i < colsLength; i++) {
				if (cols[i].group !== undefined && cols[i].group !== null) {
					if (cols[i].key !== undefined && cols[i].key !== null) {
						// M.H. 4 July 2012 Fix for bug #116254 - column indentifier should be string
						identifier = cols[i].key.toString();
					} else {
						// M.H. 4 July 2012 Fix for bug #116254 - column indentifier should be string
						identifier = (this._multiColumnIdentifier++).toString();
					}
					cols[i].identifier = identifier;
					isGroup = true;
					groupChildren = [];
					hidden = false;
					if (isHidden === true || cols[i].hidden === true) {
						hidden = true;
					}
					res = this._analyzeMultiColumnHeaders(cols[i].group, newCols, level + 1, oldCols[i].group, groupChildren, hidden);

					oldCols[i].colspan = res.colspan;
					oldCols[i].children = groupChildren;
					for (j = 0; j < groupChildren.length; j++) {
						children.push(groupChildren[j]);
					}
					ind.push(i);
					colspan += res.colspan;
				} else {
					colspan++;
					oldCols[i].level = 0;
					oldCols[i].level0 = true;
					if (isHidden === true) {
						cols[i].hidden = true;
					}
					children.push(cols[i]);
					newCols.push(cols[i]);
				}
			}
			for (j = 0; j < ind.length; j++) {
				oldCols[ind[j]].level = this._maxLevel - level;
			}
			return {colspan: colspan};
		},
		_getMultiHeaderColumnById: function (id, level, cols) {
			// get multi column header by id
			// if level specified search for the specified level
			var i, colsLength, res = null;

			if (cols === null || cols === undefined) {
				cols = this._oldCols;
			}
			colsLength = cols.length;
			for (i = 0; i < colsLength; i++) {
				if (cols[i].identifier === id && (level === undefined || cols[i].level === level)) {
					return cols[i];
				}
				if (cols[i].group !== null && cols[i].group !== undefined) {
					res = this._getMultiHeaderColumnById(id, level, cols[i].group);

					if (res !== null) {
						return res;
					}
				}
			}
			return null;
		},
		_getMaxLevelRecursive: function (level, cols) {
			// get how deep multicolumn headers are
			var i, colsLength = cols.length, ml = level, l, isGroup = false, rowspan;

			for (i = 0; i < colsLength; i++) {
				// M.H. 8 Aug 2012 Fix for bug #118599
				rowspan = 1;
				if (cols[i].rowspan !== null && cols[i].rowspan !== undefined && cols[i].rowspan > 0) {
					rowspan = cols[i].rowspan;
				}
				if (cols[i].group !== undefined && cols[i].group !== null) {
					isGroup = true;
					l = this._getMaxLevelRecursive(level + rowspan, cols[i].group);
					if (l > ml) {
						ml = l;
					}
				} else if (rowspan > 0) {
					// M.H. 8 Aug 2012 Fix for bug #118599
					l = level + rowspan - 1;
					if (l > ml) {
						ml = l;
					}
				}
			}

			return ml;
		},
		// the second argument specifies whether data will be appended or prepended. the default is prepend. 
		_headerInit: function (tr, colgroup, prepend) {
			// different features that require extra cells such as group by, may register callbacks here
			// that will be called whenever a feature like filter row or add new row renders its logic
			var i;
			for (i = 0; i < this._headerInitCallbacks.length; i++) {
				this._headerInitCallbacks[i].func(tr, colgroup, prepend);
			}
		},
		_footerInit: function (tr, colgroup, prepend, cssClass) {
			// different features that require extra cells such as group by, may register callbacks here
			// that will be called whenever a feature like filter row or add new row renders its logic
			var i;
			for (i = 0; i < this._footerInitCallbacks.length; i++) {
				this._footerInitCallbacks[i].func(tr, colgroup, prepend, cssClass);
			}
		},
		id: function () {
			/* returns the ID of the TABLE element where data records are rendered 
				returnType="string" 
			*/
			return this.element[0].id;
		},
		container: function () {
			/* returns the DIV that is the topmost container of the grid widget
				returnType="dom"
			*/
			//if (this._isWrapped === true) {
			//	return this.element;
			//} else {
			return $('#' + this.element[0].id + '_container');
			//}
		},
		headersTable: function () {
			/* returns the table that contains the header cells 
				returnType="dom"
			*/
			if (this.options.fixedHeaders === true && this.options.height !== null) {
				return $('#' + this.element[0].id + '_headers');
			}
			return this.element;
		},
		footersTable: function () {
			/* returns the table that contains the footer cells 
				returnType="dom"
			*/
			if (this.options.fixedFooters === true && this.options.height !== null) {
				return $('#' + this.element[0].id + '_footers');
			}
			return this.element;
		},
		scrollContainer: function () {
			/* returns the DIV that is used as a scroll container for the grid contents
				returnType="dom"
			*/
			return $('#' + this.element[0].id + '_scroll');
		},
		// Accepts parameters:
		// x - column index
		// y - row index
		cellAt: function (x, y) {
			/* returns the cell TD element at the specified location
				paramType="number" The column index.
				paramType="number" The row index.
				returnType="dom" The cell at (x, y).
			*/
			var i;
			// returns a cell at the specified location in the table. jQuery selectors are not used for performance reasons. 
			if (x === undefined || y === undefined) {
				return null;
			}
			//return this.element.find('tbody tr:nth-child(' + (y + 1) + ') td:nth-child(' + (x + 1) + ')');
			if (this.table === undefined) {
				this.table = this.element[0];
			}
			//A.T. 21 Jan 2011 - We must account for all THEAD and TFOOT rows ! . Calculate that only once, for perf. reasons
			i = this._dataRowIndex(y);
			return this.table.rows[i].cells[x];
		},
		_calculateHeaderFooterRows: function () {
			// A.T. 29 Aug 2011 - this is recursive and needs to be reworked 
			//return this.element.find('thead tr').length + this.element.find('tfoot tr').length;
			var theadCount = 0, tfootCount = 0;
			theadCount = this.element.children("thead").children("tr").length;
			// M.H. 11 Oct. 2011 Fix for bug #90863 - footer  rows count should not be calculated
			// M.H. 27 April 2012 Fix for bug #105427 - Opera counts tfoot rows then tbody tr
			if ($.browser.opera) {
				tfootCount = this.element.children("tfoot").children("tr").length;
			}
			return theadCount + tfootCount;
		},
		_dataRowIndex: function (i) {
			var extrahr, j;
			if (this.table === undefined) {
				this.table = this.element[0];
			}
			if (this._additionalTrCount === undefined || this._additionalTrCount === null) {
				this._additionalTrCount = this._calculateHeaderFooterRows();
			}
			// get all data-container rows and exclude them
			if (this._hc === true) {
				extrahr = this.element.children("tbody").children("tr[data-container]");
				for (j = 0; j < extrahr.length; j++) {
					if ($(extrahr[j]).index() <= i) {
						i += 1;
					}
				}
			}
			i = i + this._additionalTrCount;
			if (i >= this.table.rows.length) {
				i = this.table.rows.length - 1;
			} else if (i < 0) {
				i = 0;
			}
			return i;
		},
		immediateChildrenWidgets: function () {
			/* gets all immediate igGrid children of the current grid
				returnType="array"
			*/
			return this.element.children("tbody").children("tr").children(".ui-iggrid-childarea").children("div").children("div").map(function () {
				if ($(this).children(".ui-iggrid-scrolldiv").length > 0) {
					return $(this).children(".ui-iggrid-scrolldiv").children(".ui-iggrid-table").data("igGrid");
				}
				return $(this).children(".ui-iggrid-table").data("igGrid");
			});
		},
		childrenWidgets: function () {
			/* gets all igGrid children of the current grid, recursively 
				returnType="array"
			*/
			return this.element.find("tbody > tr > .ui-iggrid-childarea").find(".ui-iggrid-table").map(function () {
				return $(this).data("igGrid");
			});
		},
		children: function () {
			/* gets all igGrid children's elements of the current grid, recursively 
				returnType="array"
			*/
			return this.element.find("tbody > tr > .ui-iggrid-childarea").find(".ui-iggrid-table");
		},
		immediateChildren: function () {
			/* gets all immediate igGrid children's elements of the current grid
				returnType="array"
			*/
			return this.element.children("tbody").children("tr").children(".ui-iggrid-childarea").children("div").children("div").map(function () {
				if ($(this).children(".ui-iggrid-scrolldiv").length > 0) {
					return $(this).children(".ui-iggrid-scrolldiv").children(".ui-iggrid-table");
				}
				return $(this).children(".ui-iggrid-table");
			});
		},
		// Accepts parameters:
		// i - row index 
		rowAt: function (i) {
			/* returns the row (TR element) at the specified index. jQuery selectors aren't used for performance reasons 
				paramType="number" The row index.
				returnType="dom" the row at the specified index
			*/
			//A.T. 21 Jan 2011 - We must account for all THEAD and TFOOT rows ! . Calculate that only once, for perf. reasons
			i = this._dataRowIndex(i);
			return this.table.rows[i];
		},
		rows: function () {
			/* returns a list of all TR elements holding data in the grid
				returnType="array"
			*/
			//return this.element.find('tbody tr');
			return this.element.children("tbody").children("tr");
		},
		allRows: function () {
			/* returns all data rows recursively, not only the immediate ones 
				returnType="array"
			*/
			return this.element.find('tbody tr');
		},
		columnByKey: function (key) {
			/* returns a column object by the specified column key 
				paramType="string" The column key.
				returnType="object" a column definition
			*/
			var cols = this.options.columns, i;
			for (i = 0; i < cols.length; i++) {
				if (cols[i].key === key) {
					return cols[i];
				}
			}
			return null;
		},
		columnByText: function (text) {
			/* Returns a column object by the specified header text. If there are multiple matches, returns the first one.
				paramType="string" The column header text.
				returnType="object" a column definition
			*/
			var cols = this.options.columns, i;
			for (i = 0; i < cols.length; i++) {
				if (cols[i].headerText === text) {
					return cols[i];
				}
			}
			return null;
		},
		activeCell: function () {
			/* returns the current active cell if any, Selection must be enabled. 
				returnType="object"
			*/
			return this._activeCell;
		},
		activeRow: function () {
			/* returns the current active row if any, Selection must be enabled. 
				returnType="object"
			*/
			return this._activeRow;
		},
		selectedCell: function () {
			/* Returns the current selected cell if any. Selection must be enabled.
				returnType="object"
			*/
			return this._selectedCell;
		},
		selectedRow: function () {
			/* Returns the current selected row if any. Selection must be enabled.
				returnType="object"
			*/
			return this._selectedRow;
		},
		selectedCells: function () {
			/* Returns the current array of selected cells if any. Selection must be enabled and multipleSelection must be true.
				returnType="array"
			*/
			return this._selectedCells;
		},
		selectedRows: function () {
			/* Returns the current array of selected rows if any. Selection must be enabled and multipleSelection must be true.
				returnType="array"
			*/
			return this._selectedRows;
		},
		getCellValue: function (rowId, colKey) {
			/* Retrieves a cell value using the row index and the column key. If a primaryKey is defined, rowId is assumed to be the row Key (not index).
				If primary key is not defined, then rowId is converted to a number and is used as a row index.
				If colKey is a number, the index of the column is used (instead of a column name).
				paramType="object" Row index or row key (primary key).
				paramType="string" The column key.
				returnType="object" The corresponding cell value.
			*/
			var id = parseInt(rowId, 10), col, i, cols = this.options.columns, colFound = false, rec, primaryKeyCol, tx;
			// check the case where we have a local transaction log, and there is a corresponding entry for that row's cell
			tx = this.dataSource.pendingTransactions();
			if (this.options.autoCommit === false && tx.length > 0) {
				for (i = 0; i < tx.length; i++) {
					if (tx[i].rowId === rowId) {
						if (tx[i].type === "cell" && tx[i].col === colKey) {
							return tx[i].value;
						}
						if (tx[i].type === "row" || tx[i].type === "newrow") {
							return tx[i].row[colKey];
						}
					}
				}
			}
			// check for primary key
			if (this.options.primaryKey !== null) {
				// assume rowId is the primary Key, not the row index
				primaryKeyCol = this.columnByKey(this.options.primaryKey);
				if (primaryKeyCol.dataType === "number" || primaryKeyCol.dataType === "numeric") {
					rec = this.dataSource.findRecordByKey(parseInt(rowId, 10));
				} else {
					rec = this.dataSource.findRecordByKey(rowId);
				}
				if (rec === null || rec === undefined) {
					throw new Error($.ig.Grid.locale.recordNotFound + " " + rowId);
				}
				return rec[colKey];
			}
			// validate
			if (id >= this.dataSource.dataView().length) {
				throw new Error($.ig.Grid.locale.indexOutOfRange);
			}
			if ($.type(colKey) === 'string') {
				for (i = 0; i < cols.length; i++) {
					if (cols[i].key === colKey) {
						col = cols[i];
						colFound = true;
						break;
					}
				}
				if (colFound === false) {
					throw new Error($.ig.Grid.locale.noSuchColumnDefined);
				}
				return this.dataSource.dataView()[id][colKey];
			}
			if (cols.length <= colKey) {
				throw new Error($.ig.Grid.locale.columnIndexOutOfRange);
			}
			return this.dataSource.dataView()[id][colKey];
		},
		getCellText: function (rowId, colKey) {
			/* Returns the cell text. If colKey is a number, the index of the column is used (instead of a column name)
				This is the actual text (or HTML string) for the contents of the cell.
				paramType="object" Row index or row data key (primary key)
				paramType="string" Column key.
				returnType="string" the cell text for the respective cell 
			*/
			var i, cols = this.options.columns, colIndex, primaryKeyIndex, skippedCells = 0, parent;

			if ($.type(colKey) === 'string') {
				for (i = 0; i < cols.length; i++) {
					if (cols[i].key === colKey) {
						colIndex = i;
						break;
					}
				}
			} else {
				colIndex = colKey;
			}
			if (colIndex === undefined) {
				throw new Error($.ig.Grid.locale.columnNotFound + " " + colKey);
			}
			// use with care. 
			if (this.options.primaryKey !== null) {
				// find the index of the primary key column
				for (i = 0; i < cols.length; i++) {
					if (cols[i].key === this.options.primaryKey) {
						primaryKeyIndex = i;
						break;
					}
				}
				if (primaryKeyIndex === undefined) {
					throw new Error($.ig.Grid.locale.columnNotFound + " " + this.options.primaryKey);
				}
				// find the TR using a selector
				// account for data skip:
				parent = this.element.find('[data-id=' + rowId + ']');
				skippedCells = parent.children('[data-skip=true]').length;
				skippedCells += parent.children('[data-parent=true]').length;
				return parent.children("td:nth-child(" + (colIndex + 1 + skippedCells) + ")").text();
			}
			return $(this.cellAt(colIndex, parseInt(rowId, 10))).text();
		},
		commit: function (id) {
			/* Commits all pending transactions to the client data source. Note that there won't be anything to commit on the UI, since it is updated instantly. In order to rollback the actual UI, a call to dataBind() is required.
				paramType="string" optional="true" If specified, will commit only that transaction corresponding to the specified index/ key.
			*/
			var key;
			key = this._normalizedKey(id);
			// commits all changes to the data source (delegates to igDataSource). Note that there won't be anything to commit on the UI, since it is updated instantly ! 
			// in order to rollback the actual UI, a call to dataBind() is required ! 
			this.dataSource.commit(key);
			this._renderData();
		},
		rollback: function (id, updateUI) {
			/* Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents. 
				paramType="string" optional="true" If specified, will only rollback the row with that index/key.
				paramType="bool" optional="true" Whether to update the UI or not (will perform a rebind, if true).
			*/
			var rec, tr, primaryKeyIndex, cols = this.options.columns, key, i;

			key = this._normalizedKey(id);
			this.dataSource.rollback(key);

			if (updateUI === true && id !== null && id !== undefined) {
				// rebind the grid to force re-rendering 
				// update the UI for the specified record only!
				if (this.options.primaryKey !== null) {
					rec = this.dataSource.findRecordByKey(key);
					if (rec === undefined || rec === null) {
						throw new Error($.ig.Grid.locale.recordNotFound + " " + id);
					}
					for (i = 0; i < cols.length; i++) {
						if (cols[i].key === this.options.primaryKey) {
							primaryKeyIndex = i;
							break;
						}
					}
					if (primaryKeyIndex === undefined) {
						throw new Error($.ig.Grid.locale.columnNotFound + " " + this.options.primaryKey);
					}
					// L.A. 07 August 2012 - Fixing bug #116814 Calling the rollback API method will not work as expected  errorneous behavior
					// Fixed jQuery filter syntax
					tr = this.element.find("td:nth-child(" + (primaryKeyIndex + 1) + "):contains('" + id + "')").parent()[0];
				} else {
					if (parseInt(id, 10) >= this.dataSource.dataView().length) {
						throw new Error($.ig.Grid.locale.indexOutOfRange);
					}
					rec = this.dataSource.dataView()[parseInt(id, 10)];
					tr = this.rowAt(parseInt(id, 10));
				}
				// L.A. 07 August 2012 - Fixing bug #116814 Calling the rollback API method will not work as expected  errorneous behavior
				// Remove deleted attributes and classes
				$(tr).removeClass(this.css.deletedRecord);
				tr._deleted = null;
				// rerender the row
				this._renderRow(rec, tr);

			} else if (id === true || updateUI === true) {
				this.dataBind();
			}
			if ((updateUI === true || updateUI === undefined) && (id === undefined || id === null)) {
				this._renderData();
			}
		},
		findRecordByKey: function (key) {
			/* returns a record by a specified key (requires that primaryKey is set in the settings).
				That is a wrapper for this.dataSource.findRecordByKey(key).
				paramType="string" Primary key of the record
				returnType="object" a JavaScript object specifying the found record, or null if no record is found
			*/
			return this.dataSource.findRecordByKey(key);
		},
		getDetachedRecord: function (t) {
			/* Returns a standalone object (copy) that represents the committed transactions, but detached from the data source.
				That is a wrapper for this.dataSource.getDetachedRecord(t).
				paramType="object" A transaction object.
				returnType="object" A copy of a record from the data source.
			*/
			return this.dataSource.getDetachedRecord(t);
		},
		pendingTransactions: function () {
			/* Returns a list of all transaction objects that are pending to be committed or rolled back to the data source.
				That is a wrapper for this.dataSource.pendingTransactions().
				returnType="array"
			*/
			return this.dataSource.pendingTransactions();
		},
		allTransactions: function () {
			/* returns a list of all transaction objects that are either pending, or have been committed in the data source. 
				That is a wrapper for this.dataSource.allTransactions().
				returnType="array"
			*/
			return this.dataSource.allTransactions();
		},
		transactionsAsString: function () {
			/* Returns the accumulated transaction log as a string. The purpose of this is to be passed to URLs or used conveniently.
				That is a wrapper for this.dataSource.transactionsAsString().
				returnType="string"
			*/
			return this.dataSource.transactionsAsString();
		},
		_normalizedKey: function (id) {
			// returns a normalized key because id can be both index or a primary key (string / number) 
			var key, primaryKeyCol;
			// A.T. 15 Sept. 2011 - Fix for #88104
			if (id === undefined || id === null) {
				return null;
			}
			key = id;
			if (this.options.primaryKey !== null) {
				primaryKeyCol = this.columnByKey(this.options.primaryKey);
				if (primaryKeyCol.dataType === "number" || primaryKeyCol.dataType === "numeric") {
					key = parseInt(id, 10);
				}
			} else {
				key = parseInt(id, 10);
			}
			return key;
		},
		saveChanges: function () {
			/* Invokes an AJAX request to the updateUrl option (if specified) and passes the serialized transaction log (a serialized JSON string) as part of the POST request. */
			this.dataSource.saveChanges();
		},
		// if rowId is not null, then it is a request to fix css (update/add/delete row)
		_renderRow: function (rec, tr, rowId) {
			var i, td, col, id = 0, css, cols = this.options.columns, content, index;
			// check if templating is used
			// K.D. Bug #102873 When updating the grid should not have different rendering
			// if (this.options.rowTemplate && this.options.rowTemplate.length > 0) {
				// tr = $(tr);
				// if (rowId === null || rowId === undefined) {
					// rowId = tr.attr('data-id');
				// }
				// // S.S. April 2nd #102881 Adding function data for Row Selectors numbering to work with templating
				// if ($.ig.rowNumberingFunctionDelegate) {
					// rec.ig_rs_idx = $.ig.rowNumberingFunctionDelegate(rowId);
				// }
				// tr.replaceWith(i = $($.ig.tmpl(this._generateRowTemplate(), [rec], this._buildFormatters())).attr('data-id', rowId));
				// //tr.replaceWith(i = $.tmpl(this._generateRowTemplate(), [rec], this._buildFormatters()).attr('data-id', rowId));
				// return i[0];
			// }
			for (i = 0; i < tr.cells.length; i++) {
				td = $(tr.cells[i]);
				css = td[0].className;
				if (id > 0 || !(td.attr('data-skip') || (css && (css.indexOf('-expandcolumn') > 0 || css.indexOf('-rowselector') > 0)))) {
					// adjust for hidden columns
					while (true) {
						col = cols[id];
						if (!col) {
							return tr;
						}
						if (!col.hidden) {
							break;
						}
						id++;
					}
					// K.D. Bug #102873 Rendering branch is done here
					if (this.options.rowTemplate && this.options.rowTemplate.length > 0) {
						content = this._renderTemplatedCell(rec, col);
						index = content.indexOf('>');
						content = content.substring(index + 1, content.length);
						td.html(content);
					} else {
						td.html(this._renderCell(rec[col.key], col));
					}
					id++;
				}
			}
			return tr;
		},
		renderNewRow: function (rec, key) {
			/* Adds a new row (TR) to the grid, by taking a data row object. Assumes the record will have the primary key.
				paramType="object" The data row JavaScript object.
				paramType="string" optional="true" Identifier/key of row. If missing, then number of rows in grid is used.
			*/
			var tbody = this.element.children("tbody"), index = tbody.children("[data-container!=\"true\"]").length;
			// if (this.options.rowTemplate && this.options.rowTemplate.length > 0) {
				// $($.ig.tmpl(this._generateRowTemplate(), [rec], this._buildFormatters())).attr("data-id", key || index).appendTo(tbody);
				// //$.tmpl(this._generateRowTemplate(), [rec], this._buildFormatters()).attr("data-id", key || index).appendTo(tbody);
			// } else {
				/* DAY 10/17/11 91211- When a row in the root layout is expanded and add new row it is with not correct style */
			// K.D. April 5th, 2012 Bug #107910 Render record handles the rendering of regular and templated records.
			tbody.append(this._renderRecord(rec, index));
			//}
		},
		_findTableRowByKey: function (key) {
			var primaryKeyIndex, cols = this.options.columns, r, i;
			// find the index of the primary key column
			if (this.options.primaryKey !== null) {
				for (i = 0; i < cols.length; i++) {
					if (cols[i].key === this.options.primaryKey) {
						primaryKeyIndex = i;
						break;
					}
				}
				if (primaryKeyIndex === undefined) {
					throw new Error($.ig.Grid.locale.columnNotFound + " " + this.options.primaryKey);
				}
				r = this.element.find("td:nth-child('" + (primaryKeyIndex + 1) + "'):contains('" + key + "')").parent();
				return r.length === 0 ? null : r[0];
			}
			return this.rowAt(parseInt(key, 10));
		},
		/* A.T. 21 Jan 2010 - Fix for bug #62277 - Data rebinding doesn't work properly. You have to reset all the properties for the binding
		 * widget options are deep cloned !!! Therefore if the data source is LOCAL json array or some object, it must be set through the API, not in the options
		 * alternatively if it is set from options, it will be deep copied !
		 */
		dataSourceObject: function (dataSource) {
			/* if the data source points to a local JSON array of data, and it is necessary to reset it at runtime, it must be done through this API member instead of the options (options.dataSource) 
				paramType="object" New data source object. 
			*/
			if (dataSource !== undefined) {
				this.options.dataSource = dataSource;
			} else {
				return this.options.dataSource;
			}
		},
		totalRecordsCount: function () {
			/* Returns the total number of records in the underlying backend. If paging or filtering is enabled, this may differ from the number of records in the client-side data source.
				In order for this to work, the response JSON/XML must include a property that specifies the total number of records, which name is specified by options.responseTotalRecCountKey.
				This functionality is completely delegated to the data source control.
				returnType="number" total number of records in the backend
			*/
			return this.dataSource.totalRecordsCount();
		},
		dataBind: function (internal) {
			/* causes the grid to data bind to the data source (local or remote) , and re-render all of the data as well 
			excluded="true"
			*/
			var dataOptions, i, noCancel = true, noCancelRendering = true;
			// M.H. 17 May 2012 Fix for bug #111100: The rendering event has to be fired    before   the (dataBinding and dataBound) pair of events
			// A.T. 9 Jan 2012 - fix for bug #98777
			if (!this._initialized) {
				noCancelRendering = this._trigger(this.events.rendering, null, {owner: this});
			}
			if (noCancelRendering) {
				// fire data binding event
				noCancel = this._trigger(this.events.dataBinding, null, {owner: this});
				if (internal === undefined) {
					this.options.requiresDataBinding = true;
				}
				if (noCancel) {
					if (this.options.requiresDataBinding) {
						dataOptions = this._generateDataSourceOptions(this.options);
						//A.T. 18 Jan 2011 - Fix for bug #62277 - Data rebinding doesn't work properly. You have to reset all the properties for the binding
						this._setupDataSource(dataOptions);
						//initialize grid features and attach their event handlers
						this._dataOptions = dataOptions;
						//if (this.options.autoGenerateColumns === false) {
						if (!this._initialized) {
							// check if the element passed on the widget is of type table or div
							if (this.element.is("div")) {
								this._isWrapped = true;
								this.element = $("<table></table>").appendTo(this.element).attr('id', this.element[0].id + "_table");
								this.element.data('igGrid', this);
								//gridElement = this.element[0];
							}
							for (i = 0; i < this.options.features.length; i++) {
								this._initFeature(this.options.features[i], dataOptions);
							}

							//NOTE: this is the only point were we can do the capturing of the 
							//hidden columns as it should be before we render the grid
							//and after all features(including hiding) have been initialized
							//A.Y. bug 98100. In the case of autogenerated columns this will be done later.
							if (this.options.autoGenerateColumns !== true) {
								this._captureInitiallyHiddenColumns();
							}
							this._visibleColumnsArray = undefined;
						} else {
							this.element.trigger('iggriduidirty', {owner: this});
							// fire UI State dirty so that features reset their UI (without destroying them)
							for (i = 0; i < this.options.features.length; i++) {
								this._initFeatureSettings(this.options.features[i]);
							}
						}
						//}

						this._renderGrid();
						if (this._loadingIndicator === undefined) {
							this._initLoadingIndicator();
						}
						if (this._loadingIndicator) {
							this._loadingIndicator.show();
						}
						this.dataSource.dataBind();
						this.options.requiresDataBinding = false;
					} else {
						// data source is already bound 
						this._renderGrid();
					}
				}
			// M.H. 17 May 2012 Fix for bug #111100
			} else {
				// cancel render data
				this._cancelRendering = true;
			}
		},
		_mergeUnboundValues: function () {
			// merge unbound values when datasource is remote and merguUnboundColumns is false
			var i, primaryKeyCol, metadataUC, rec, ucLength, primaryKeyColIsNumber, col, schema, type, dataLength, data, key,
				pk = this.options.primaryKey,
				metadata = this.dataSource.metadata("unboundValues"),
				self = this,
				hasPrimaryKey = (pk !== null && pk !== undefined),
				metaDataMergeFunction;

			if (metadata === undefined || metadata === null || metadata.length === 0 ||
					!this._unboundColumns) {
				return;
			}
			// M.H. 30 Aug 2012 Fix for bug #120134
			if (hasPrimaryKey) {
				metaDataMergeFunction = function (ind, val) {
					if (primaryKeyColIsNumber) {
						rec = self.dataSource.findRecordByKey(parseInt(ind, 10));
					} else {
						rec = self.dataSource.findRecordByKey(ind);
					}
					if (rec === null || rec === undefined) {
						return true;
					}
					// M.H. 10 Sep 2012 Fix for bug #120724
					if (schema !== undefined && schema !== null) {
						// M.H. 11 Sep 2012 Fix for bug #120867
						val = schema._convertType(type, val, rec[pk], key);
					}
					// M.H. 11 Sep 2012 Fix for bug #120668
					self._addUnboundColumnValue(key, val);
					rec[key] = val;
				};

				primaryKeyCol = this.columnByKey(pk);
				primaryKeyColIsNumber = (primaryKeyCol.dataType === "number");
			}
			ucLength = this._unboundColumns.length;
			schema = this.dataSource.schema();

			for (i = 0; i < ucLength; i++) {
				key = this._unboundColumns[i].key;
				metadataUC = metadata[key];
				if (metadataUC === null || metadataUC === undefined) {
					continue;
				}
				col = this.getUnboundColumnByKey(key);
				type = null;
				if (col !== null && col.dataType) {
					type = col.dataType;
				}
				// M.H. 30 Aug 2012 Fix for bug #120134
				if (hasPrimaryKey) {
					// M.H. 10 Sep 2012 Fix for bug #120724
					$.each(metadataUC, metaDataMergeFunction);
				} else {
					self.setUnboundValues(metadataUC, key);
				}
				// M.H. 11 Sep 2012 Fix for bug #120569
				if (type === "bool" || type === "boolean") {
					data = this.dataSource.data();
					val = schema._convertType(type, undefined);
					dataLength = data.length;
					// just for performance - we do not want to traverse all 
					if (dataLength <= metadataUC.length) {
						continue;
					}
					for (j = 0; j < dataLength; j++) {
						if (data[j][key] === undefined) {
							data[j][key] = val;
						}
					}
				}
			}
		},
		_generateDataSourceOptions: function (options) {
			var schema, dataOptions, t, headers, i;
			// if there is neither options.dataSource specified, nor options.dataSourceUrl, we check if we are binding to a table and if there is any existing
			// data in it, and then we set the data source to that table DOM element, so that it can be processed by the data source control
			if (!this.options.dataSource && !this.options.dataSourceUrl && this.element.is('table') && this.element.find('tbody').children().length > 0) {
				this.options.dataSource = this.element[0];
			}
			// we need to look ahead and check if the data source is a HTML Table and has column headers defined. in that case we need to update the headerText in the column definitions
			if (this.options.dataSource && this.options.dataSource.tagName && this.options.dataSource.nodeType) {
				t = $(this.options.dataSource);
				if (t.is('table') && t.find('thead th').length > 0) {
					// generate column headers 
					headers = t.find('thead tr th');
					this._tb_h = true;
					this._tb_h_arr = [];
					for (i = 0; i < headers.length; i++) {
						this._tb_h_arr.push($(headers[i]).text());
					}
					/*
					if (this.options.columns.length > 0) {
						for (i = 0; i < headers.length && i < this.options.columns.length; i++) {
							this.options.columns[i].headerText = $(headers[i]).text();
						}
					} else {
						for (i = 0; i < headers.length; i++) {
							this.options.columns.push({"headerText": $(headers[i]).text()});
						}
					}
					*/
				}
			}

			dataOptions = {
				callback : $.proxy(this._renderData, this),
				callee : this,
				responseDataKey: this.options.responseDataKey,
				responseTotalRecCountKey: this.options.responseTotalRecCountKey,
				dataSource: this.options.dataSource,
				primaryKey: this.options.primaryKey,
				localSchemaTransform: this.options.localSchemaTransform,
				autoCommit: this.options.autoCommit,
				aggregateTransactions: this.options.aggregateTransactions,
				serializeTransactionLog: this.options.serializeTransactionLog,
				updateUrl: this.options.updateUrl,
				restSettings: this.options.restSettings
			};
			if (this.options.dataSourceType !== null) {
				dataOptions.type = this.options.dataSourceType;
			}
			// create a schema based on the columns definition
			// iterate over the columns collection, if such exists. Otherwise bind to everything
			//A.T. 28 March 2011 - fix for bug #68548
			//L.A. 02 August 2012 - Fixing bug #117263 - Grid doesn't render binding to XML string
			// M.H. 15 Sep 2012 Fix for bug #121429
			if (!this.options.dataSource || !this.options.dataSource.schema || !this.options.dataSource.schema() || this.options.dataSource.schema()._type !== "xml") {
				schema = this._generateDataSourceSchema();
			}
			if ((this.options.dataSource instanceof $.ig.DataSource && (this.options.dataSource.settings.schema === null
				|| (this.options.dataSource.settings.schema.fields && this.options.dataSource.settings.schema.fields.length >= 0)))
					|| !(this.options.dataSource instanceof $.ig.DataSource)) {
				dataOptions = $.extend(dataOptions, {schema: schema});
			}
			return dataOptions;
		},
		_insertUnboundColumn: function (column) {
			if (this._unboundColumns === null || this._unboundColumns === undefined) {
				this._unboundColumns = [];
			}
			this._unboundColumns.push(column);
			// M.H. 3 Sep 2012 Fix for bug #120188
			if (column.key && (this._unboundValues[column.key] === null || this._unboundValues[column.key] === undefined)) {
				this._unboundValues[column.key] = [];
			}
			this._hasUnboundColumns = true;
		},
		// M.H. 10 Sep 2012 Fix for bug #120696 - add index value
		_addUnboundColumnValue: function (key, value, index) {
			// insert in _unboundValues object for the unbound column with the specified key value. If index is specified at position index
			if (this._unboundValues[key] === null || this._unboundValues[key] === undefined) {
				this._unboundValues[key] = [];
			}
			if (index !== undefined && index !== null) {
				this._unboundValues[key][index] = value;
			} else {
				this._unboundValues[key].push(value);
			}
		},
		_generateDataSourceSchema: function () {
			var schema, i, rec, prop, count = 0, cols = this.options.columns, ds = this.options.dataSource, cl, counter = 0;
			//A.T. 22 Aug 2011 - make sure this scenario is covered as well 
			if (ds instanceof $.ig.DataSource) {
				if ($.type(ds.settings.dataSource) === "array" || $.type(ds.settings.dataSource) === "object") {
					ds = ds.settings.dataSource;
				} else if ($.type(ds.settings.dataSource) !== "string") {
					ds = ds.data();
				} else {
					ds = [];
				}
			}
			// M.H. 16 May 2012 Fix for bug #99426			
			if ($.type(ds) === "object" && this.options.responseDataKey) {
				ds = $.ig.findPath(ds, this.options.responseDataKey);
			}
			schema = {};
			schema.fields = [];
			schema.searchField = this.options.responseDataKey;
			//if (this.options.columns.length > 0) {
			if (cols.length > 0 && !this.options.autoGenerateColumns) {
			// if autoGenerateColumns is true, fields for all columns in the data source must be specified
				for (i = 0; i < cols.length; i++) {
					if (cols[i].unbound === true || cols[i].unboundDS === true) {
						this._insertUnboundColumn(cols[i]);
						if (cols[i].unbound === true) {
							continue;
						}
					}
					schema.fields[counter] = {};
					schema.fields[counter].name = cols[i].key;
					schema.fields[counter].type = cols[i].dataType;
					counter++;
				}
			//} else if (this.options.columns.length > 0 && this.options.autoGenerateColumns) {
			} else if (this.options.autoGenerateColumns) {
				// A.T. Fix for #74240. Please note that in this case (if autoGenerateColumns=true, and there are custom cols defined,
				// and they have widths defined, there MUST be defaultColumnWidth specified, otherwise the remaining columns in the data source
				// will be shrinked to zero and they won't be visible ! 
				if (ds && ds.tagName && $(ds).is("table")
						&& $(ds).find("tbody tr").length > 0) {
					rec = $(ds).find("tbody tr")[0];
				//	count = $(rec).find('td').length;
					$(rec).find('td').each(function () {
						if (cols.length > count) {
							schema.fields.push({name: cols[count].key || (count + 1),
								type: cols[count].dataType || "string"});
						} else {
							schema.fields.push({name: (count + 1), type: "string"});
						}
						count++;
					});
				} else if (ds && ds.length && ds.length > 0 &&
						$.type(ds) === "array") {
					// we need to iterate through all records, since the first one may not necessarily contain any children
					//rec = this.options.dataSource[0];
					for (i = 0; i < ds.length; i++) {
						rec = ds[i];
						for (prop in rec) {
							if (rec.hasOwnProperty(prop)) {
								// if the column isn't already defined in the columns collection 
								if (this.columnByKey(prop) === null && !this._fieldExists(prop, schema) &&
										$.type(rec[prop]) !== "object" && $.type(rec[prop]) !== "array") {
									schema.fields.push({name: prop, type: $.ig.getColType(rec[prop])});
								} else if (this.columnByKey(prop) !== null) {
									schema.fields.push({name: prop, type: this.columnByKey(prop).dataType});
								}
								count++;
							}
						}
						// performance improvement. The flat grid doesn't need that. Also the hierarchical grid doesn't need that if autoGenerateLayouts is not true.
						if (!this.options._recurseSchema) {
							break;
						}
					}
				}
				// check for unbound columns
				for (i = 0; i < cols.length; i++) {
					if (cols[i].unbound === true || cols[i].unboundDS === true) {
						this._insertUnboundColumn(cols[i]);
					}
				}
			}
			// used in special cases where the schema needs to be additionally modified ( as it is the case with hGrid, so that all complex objects
			// are also added to the schema whenever autoGenerateColumns === false (only in that case) 
			this._trigger(this.events.schemaGenerated, null, {owner: this, schema: schema, dataSource: ds});
			// generate fields for child layouts if any
			cl = this.options.columnLayouts;
			if (cl && cl.length && cl.length > 0) {
				for (i = 0; i < cl.length; i++) {
					schema.fields.push({name: cl[i].key});
				}
			}
			return schema;
		},
		_fieldExists: function (prop, schema) {
			var i;
			for (i = 0; i < schema.fields.length; i++) {
				if (schema.fields[i].name === prop) {
					return true;
				}
			}
			return false;
		},
		_setupDataSource: function (dataOptions) {
			if (!(this.options.dataSource instanceof $.ig.DataSource)) {
				// fix for JSONP
				if ($.type(dataOptions.dataSource) === "string" && dataOptions.dataSource.indexOf("$callback=?") !== -1) {
					this.dataSource = new $.ig.JSONPDataSource(dataOptions);
				} else if (this.options.restSettings.update.url !== null || this.options.restSettings.update.template !== null ||
						this.options.restSettings.create.url !== null || this.options.restSettings.create.template !== null ||
						this.options.restSettings.remove.url !== null || this.options.restSettings.remove.template !== null) {
					this.dataSource = new $.ig.RESTDataSource(dataOptions);
				} else {
					this.dataSource = new $.ig.DataSource(dataOptions);
				}
			} else {
				this.dataSource = this.options.dataSource;
				//dataOptions.dataSource = this.dataSource.settings.dataSource;
				//A.T. 12 Feb 2011 - Fix for bug #65899
				if (this.dataSource.settings.responseDataKey !== null) {
					delete dataOptions.responseDataKey;
					if (dataOptions.schema) {
						dataOptions.schema.searchField = this.dataSource.settings.responseDataKey;
					}
				}
				this._tds = this.dataSource.settings.dataSource;
				this.dataSource.settings.dataSource = null;
				this.dataSource.settings = $.extend(true, {}, this.dataSource.settings, dataOptions);
				this.dataSource.settings.dataSource = this._tds;
				this._tds = null;
				if (dataOptions.schema) {
					this.dataSource._initSchema();
				}
			}
		},
		_generateColumns: function () {
			var r, key, i, hasExplicitCols = this.options.columns.length > 0,
				hasHeaders = false, len, col,
				isTable = false, arr = [],
				ds = this.options.dataSource,
				cdp = this.options.childrenDataProperty,
                newDs;
			//this.options.columns = []; // A.T. 28 Feb  2011 - we shouldn't be clearing the columns !@ 
			// we need to take into account the case where columns are already defined. This means we render them first, and only then proceed
			// with the rest of the columns in the data source 
			if (ds instanceof $.ig.DataSource) {
				ds = ds.data(); // special case where the data source is an instance of an $.ig.DataSource
			} else if (typeof (ds) === "string") {
				ds = this.dataSource.data();
			}
			// M.H. 16 May 2012 Fix for bug #99426
			if ($.type(ds) === "object" && this.options.responseDataKey) {
				newDs = $.ig.findPath(ds, this.options.responseDataKey);
				if ($.type(newDs) === "array") {
					ds = newDs;
				}
			}
			// special case - having columns defined manually, and autoGenerateColumns = true at the same time
			// A.T. that's basically bug (#74240) - we shouldn't be using the dataView, because it's already bound according to whatever is defined in options.columns
			// and everything else is not bound at all !
			if (ds && ds.tagName && $(ds).is('table')) {
				len = $(ds).find('tbody tr').length;
				isTable = true;
			} else if (ds && ds.length) {
				len = ds.length;
			}
			if (ds && len && len === 0 && this.options.columns.length === 0) {
				throw new Error($.ig.Grid.locale.autoGenerateColumnsNoRecords);
			} else {
				if (ds && len && len > 0) {
					//r = this.dataSource.dataView()[0];
					if (isTable) {
						r = $(ds).find('tbody tr')[0];
					} else {
						r = ds[0];
					}
					if ($.type(r) === "array" || isTable) {
						// check if we aren't binding to a table that has headers defined already
						/*
						if (hasExplicitCols && this.options.columns[0].headerText) {
							hasHeaders = true;
							for (i = 0; i < this.options.columns.length; i++) {
								headers.push(this.options.columns[i].headerText);
							}
							this.options.columns = [];
						}
						*/
						hasHeaders = this._tb_h;
						if (isTable) {
							$(r).find('td').each(function () { arr.push($(this).text()); });
							r = arr;
						}
						for (i = 0; i < r.length; i++) {
							// detect type
							if (this.columnByKey(i + 1) === null && $.ig.getColType(r[i]) !== "object") {
								col = {
									headerText: hasHeaders ? this._tb_h_arr[i] : $.ig.Grid.locale.colPrefix + (i + 1),
									key: (i + 1),
									dataType: $.ig.getColType(r[i]),
									hidden: false
								};
								// M.H. 9 Aug 2012 Fix for bug #118689
								if (this._isMultiColumnGrid) {
									col.level0 = true;
									col.level = 0;
									this._oldCols.push(col);
								}
								this.options.columns.push(col);
								this._visibleColumnsArray = undefined;
							} else if (hasHeaders && !this.columnByKey(i + 1).headerText) {
								this.columnByKey(i + 1).headerText = this._tb_h_arr[i];
							}
						}
					} else {
						for (key in r) {
							// also detect type
							if (r.hasOwnProperty(key) && this.columnByKey(key) === null) {
								if (((cdp && cdp !== key) || !cdp) && $.ig.getColType(r[key]) !== "object" && key !== "ig_pk") {
									col = {headerText: key, key: key, dataType: $.ig.getColType(r[key]), hidden: false};
									this.options.columns.push(col);
									// M.H. 9 Aug 2012 Fix for bug #118689
									if (this._isMultiColumnGrid) {
										col.level0 = true;
										col.level = 0;
										this._oldCols.push(col);
									}
									this._visibleColumnsArray = undefined;
								}
							}
						}
					}
				}
			}
			// we need to set the data source schema
			if ((this.dataSource.schema() === null || this.dataSource.schema().fields().length === 0) && !hasExplicitCols) {
				this.dataSource.settings.schema = this._generateDataSourceSchema();
				this.dataSource._initSchema();
			}
			if (this.options.width === null) {
				this._setContainerWidth(this.element[0].id + '_container');
			}
			this._trigger("columnsgenerated", null, {owner: this, key: this.options.key});
		},
		_renderGrid: function () {

			var gridElement = this.element[0],
				containerId,
				containerDiv,
				tbody = this.element.children('tbody'), //gridElement.find('tbody')
				ar = this.options.accessibilityRendering;

			this._cancelRendering = false;
			if (!this._initialized) {
				// we should have the data now in the data view
				// determine automatically if we want virtualization enabled or not 
				// IMPORTANT: height must also be always set ! 
				if ($.type(this.options.virtualization) === "number" && this.dataSource.dataView().length > this.options.virtualization && this.options.height !== null) {
					this.options.virtualization = true;
				}
				if (ar) {
					this.element.attr('role', 'grid');
				}
				if (this.options.virtualization === true || this.options.rowVirtualization === true || this.options.columnVirtualization === true) {
					if (this.options.height === undefined || this.options.height === null) {
						throw new Error($.ig.Grid.locale.virtualizationRequiresHeight);
					}

					this._createVirtualGrid();
				} else if (this.options.height !== null || this.options.width !== null) {
					this._createScrollingGrid();
				} else {
					// just wrap with a div, if it doesn't exist 
					//if (!this._isWrapped) {
					containerId =  gridElement.id + '_container';
					containerDiv = '<div id="' + containerId + '" class="' + this.css.gridClasses + ' ' + this.css.baseClass + '"> </div>';
					this.element.wrap(containerDiv);
					//} else {
					//	containerId = this.element.parent().addClass(this.css.gridClasses).addClass(this.css.baseClass).attr('id');
					//}
					this.element.addClass(this.css.gridTableClass);
					if (ar) {
						this.element.attr('aria-describedby', containerId);
					}
					this._setContainerWidth(containerId);

					$("#" + containerId).attr('tabIndex', this.options.tabIndex);
					if (this.options.height !== null) {
						$("#" + containerId).css('overflow-y', 'hidden');
						//this.scrollContainer().css('height', this.options.height);
					}
				}
				// touch support code
				this._touch();
				// render colgroup for column widths
				if (this.options.columns.length > 0
						&& (this.options.virtualization !== true && this.options.rowVirtualization !== true && this.options.columnVirtualization !== true)
						&& this.options.autogenerateColumns === false && this.options.columns.length > 0
						) {
					this._renderColgroup(this.element[0], false, false, this.options.autofitLastColumn);
				}
				// cellpadding, cellspacing, etc.
				$(gridElement).attr('cellpadding', '0');
				$(gridElement).attr('cellspacing', '0');
				$(gridElement).attr('border', '0');
				$(gridElement).css('table-layout', 'fixed');
				$(gridElement).addClass(this.css.gridTableClass);
				if (this.options.autoGenerateColumns === false && this.options.columns.length > 0
						&& this._headerRenderCancel !== true) {
					this._renderHeader();
				}
				// render header caption
				this._renderCaption();
				if (this.options.autoAdjustHeight) {
					this._initializeHeights();
				}
			}
			if (tbody.length === 0) {
				tbody = $('<tbody></tbody>').appendTo(gridElement).addClass(this.css.baseContentClass).addClass(this.css.gridTableBodyClass).addClass(this.css.recordClass);
			}
			if (this.dataSource.type() !== 'htmlTableDom' && this.dataSource.type() !== 'htmlTableId') {
				tbody.empty();
			}
		},
		_setContainerWidth: function (id, rendered) {
			var cols = this._visibleColumns(), width = 0;
			// calculate based on column widths
			// if no col width is set, use the defaultColumnWidth
			//if (cols.length > 0 && !this.options.autoGenerateColumns) {
			if (cols.length > 0) {
				width = this._calculateContainerWidth(true);
				if (width > 0) {
					if (rendered) {
						// get outer widths for column headers
						width = 0;
						this.container().find('.ui-iggrid-header').each(function () {
							width += $(this).outerWidth();
						});
						$('#' + id).width(width);
					} else {
						width += this._calculateSpecialColumnsWidth();
						$('#' + id).css('width', width);
					}
				}
			} else if (this.options.width !== null) {
				$('#' + id).css('width', this.options.width);
			}
		},
		_calculateContainerWidth: function (addScrollWidth) {
			var width = 0, cols = this.options.columns, i;
			for (i = 0; i < cols.length; i++) {
				//check if the columns is hidden
				//or will be hidden if we are still in the initialization phase
				if (cols[i].hidden !== true &&
						(this._initialHiddenColumns === undefined ||
						$.inArray(cols[i], this._initialHiddenColumns) === -1)) {
					width += cols[i].width ? parseInt(cols[i].width, 10) : this.options.defaultColumnWidth === null ? 0 : parseInt(this.options.defaultColumnWidth, 10);
				}
			}
			// add the scrollbar width if any 
            //L.A. 30 March 2012 Fixed bug #99024 When in grid fixedHeaders is false, it is not possible to resize last column
			if (this.options.height !== null && width > 0 && addScrollWidth === true) {
				//do not add the scrollbar width in case we have virtualization and no width
				width += this._scrollbarWidth();
			}
			return width;
		},
		// creates a scrolling, non-virtual grid
		_createScrollingGrid: function () {
			var id =  this.element[0].id + '_scroll',
				scrollDiv = '<div id="' + id + '"></div>';
			this.element.wrap(scrollDiv);
			if (this.options.accessibilityRendering) {
				this.element.attr('aria-describedby', id);
			}
			$('#' + id).addClass(this.css.gridScrollDivClass).wrap("<div id='" + this.element[0].id + "_container'></div>");
			this.container().attr('tabIndex', this.options.tabIndex).addClass(this.css.baseClass).addClass(this.css.gridClasses);
			if (this.options.width !== null) {
				this.container().css('width', this.options.width);
				// A.T. 14 Feb 2011 - Fix for bug #66086
				if (this.options.width.indexOf && this.options.width.indexOf('%') !== -1) {
					//if ((this.options.width.indexOf('%') !== -1 && parseInt(this.options.width, 10) === 100) || this.options.width.indexOf('%') === -1) {
						//this.element.css('width', this.options.width);
					//} else if (this.options.width.indexOf('%') !== -1) {
					//if (this.options.width.indexOf('%') !== -1) {
					this.element.css('width', '100%');
					//}
				}// else {
					//this.element.css('width', this.options.width);
				//}
				if (this.options.height !== null) {
					this._addHorizontalScrollBar($('#' + id));
					$('#' + this.element[0].id + '_scroll')
						.css('overflow-x', 'hidden');
				}
			} else {
				this._setContainerWidth(this.element[0].id + '_container');
				// set overflow-x: hidden on the scrolling container
				$('#' + this.element[0].id + '_scroll').css('overflow-x', 'hidden');
			}
			if (this.options.height !== null) {
				$('#' + id).css('overflow-y', 'auto');
				if (this.options.autoAdjustHeight) {
					this.container().css('height', this.options.height);
				} else {
					this.scrollContainer().css('height', this.options.height);
				}
			}
			/*
			// touch scroll support
			if (this.options.height !== null && this.options.width !== null) {
				this.scrollContainer().attr("data-scroll", "true");
			} else if (this.options.height !== null) {
				this.scrollContainer().attr("data-scroll", "y");
			} else if (this.options.width !== null) {
				this.scrollContainer().attr("data-scroll", "x");
			}
			*/
		},
		_touch: function () {
			var id = this.element[0].id, div = $('#' + id + '_scroll');
			if (div.length !== 1) {
				div = $('#' + id + '_displayContainer');
			}
			if (div.length) {
				div.attr('data-scroll', 'true').attr('data-oneDirection', 'true');
				if ($('#' + id + '_hscroller')[0]) {
					div.attr('data-xScroller', '#' + id + '_hscroller');
				} else if ($('#' + id + '_horizontalScrollContainer')[0]) {
					div.attr('data-xScroller', '#' + id + '_horizontalScrollContainer');
				}
				if ($('#' + id + '_scrollContainer')[0]) {
					div.attr('data-yScroller', '#' + id + '_scrollContainer');
				}
				// M.H. 20 March 2012 Fix for bug #104415
				if (typeof Modernizr !== 'undefined'
						&& Modernizr.touch === true
						&& typeof this.element.igScroll !== 'undefined') {
					div.css('overflow-y', 'hidden');
				}
			}
		},
		// virtual grid implies scrolling grid 
		_createVirtualGrid: function () {
			/* 
			 *  // this is the general structure for virtualization when both column and row virtualization are enabled
			 *	<table border="0" cellspacing="0" cellpadding="0">
			 *		<tr>
			 *			<td><div id="#gridID_headers"></div></td>
			 *			<td></td>
			 *		</tr>
			 *			<tr>
			 *				<td><div id="#gridID_displayContainer"></td>
			 *				<td><div id="#gridID_scrollContainer"></div></td>
			 *			</tr>
			 *			<tr>
			 *			<td><div id="#gridID_horizontalScrollContainer"></div></td>
			 *			<td></td>
			 *			</tr>
			 *	</table>
			 */
			var id = this.element[0].id,
				//touchstart,
				//touchend,
				grid,
				percWidthStr = $.browser.webkit ? 'width=100%' : '',
				totalWidth,
				scrollContainerInner,
				scrollbarWidth,
				horizontalScrollContainerInner,
				w = 0,
                virtualGridMarkup = '<div id="' + id + '_container" style="margin:0px; border:0px; padding:0px;"><table border="0" cellspacing="0" cellpadding="0" class="ui-iggrid-layout-helper" style="border-spacing:0px" id="' + id + '_virtualContainer" ><tbody><tr><td colspan="2" style="border-width:0px"><div id="' + id + '_headers_v" style="overflow:hidden;"></div></td></tr><tr><td style="border-width:0px;"><div id="' +
					id + '_displayContainer"></td>$verticalMarkup$</tr>$horizontalMarkup$</tbody></table></div>',
				verticalMarkup,
				horizontalMarkup = '<tr><td colspan="2" style="border-width: 0px"><div id="' + id + '_horizontalScrollContainer"></div></td></tr>';

			scrollbarWidth = this._scrollbarWidth();
			if ($.browser.msie) {
				scrollbarWidth += 1;
			}
			if (parseInt(this.options.height, 10) > 0) {
				verticalMarkup = '<td style="border-width: 0px;"><div id="' + id + '_scrollContainer" style="overflow:scroll; overflow-x:hidden; width: ' + scrollbarWidth + 'px; height:' + parseInt(this.options.height, 10) + 'px;"></div></td>';
			} else {
				verticalMarkup = '<td style="border-width: 0px;"><div id="' + id + '_scrollContainer" style="overflow:scroll; overflow-x:hidden; width: ' + scrollbarWidth + 'px;"></div></td>';
			}

			if (this.options.virtualization === true) {
				virtualGridMarkup = virtualGridMarkup.replace('$verticalMarkup$', verticalMarkup).replace('$horizontalMarkup$', horizontalMarkup);
			} else if (this.options.rowVirtualization === true) {
				virtualGridMarkup = virtualGridMarkup.replace('$verticalMarkup$', verticalMarkup).replace('$horizontalMarkup$', '');
			} else if (this.options.columnVirtualization === true) {
				virtualGridMarkup = virtualGridMarkup.replace('$horizontalMarkup$', horizontalMarkup).replace('$verticalMarkup$', '');
			}

			// if column virtualization is enabled we really need to make sure that we set the width of the data table to 100 % otherwise 
			// the column widths will not be correct and will try to be accomodated in the specified fixed width of the grid.
			if (this.options.virtualization === true || this.options.columnVirtualization === true) {
				this.element.css('width', '100%');
			}
			// now inject our existing grid in the place of the "displayContainer"
			this.element.wrap(virtualGridMarkup);

			// apply the base classes
			this.container().addClass(this.css.baseClass).addClass(this.css.gridClasses);
			if (this.options.width !== null) {
				this.container().width(this.options.width);
			} else {
				this._setContainerWidth(this.container()[0].id);
			}

			$('#' + id + '_displayContainer').append(this.element[0]);
            //I.I. bug fix for 105701, 105703. When virtualization is continuous and grid is hierarchical, this line causes header misplacements.
            //I.I. bug fix for 110664
			// M.H. 21 May 2012 Fix for bug #112167 - renderColgroup will call visibleColumns which sets incorrect number of visible columns at init
			/*
			if (this.options.virtualization === true && this.options.virtualizationMode === 'fixed') {
				this._renderColgroup(this.element[0], false, false, this.options.autofitLastColumn);
			}
			*/
			grid = this;

			totalWidth = this._calculateContainerWidth(false);
			if (this.options.width !== null) {
				w = parseInt(this.options.width, 10);
			} else {
				w = totalWidth;
			}
			if (this.options.height !== null && this.options.width !== null) {
				w -= this._scrollbarWidth();
			}
			//A.Y. bug 98976. Make the width undefined if 0 or less so that it is ignored by jquery as the width of the container.
			if (w <= 0) {
				w = undefined;
			}

			// M.H. 11 April 2012 Fix for bug #108438
			if (w > 0 && this.options.expandColWidth && !this.options.width) {
				w += this.options.expandColWidth;
			}

			// set virtual container's width correctly
			$('<colgroup><col ' + (w <= 0 ? percWidthStr : ('width="' + w + '"')) + '></col><col width="' + this._scrollbarWidth() + '"></col></colgroup>').prependTo('#' + id + '_virtualContainer');
			$('#' + id + '_virtualContainer').css('width', this.options.width).css('max-width', this.options.width);
			// now create the inner scrolling containers, that will be placed inside of the scrollContainer/horizonalScrollContainer,
			// and will cause the virtual scrollbars to appear and grow according to the total records in the data source
			scrollContainerInner = '<div style="width:1px; overflow:hidden; height:' + (this._totalRowCount * parseInt(this.options.avgRowHeight, 10)) + 'px;"></div>';
			$('#' + id + '_scrollContainer').append(scrollContainerInner);
			//we always need to have the horizontal scroll containers if we have width
			//as there may be hidden columns that when visible will show a scrollbar
			//I.I. bug fix for 110369
			if ((this.options.virtualization === true || this.options.columnVirtualization === true) && this.options.width && (totalWidth > parseInt(this.options.width, 10))) {
				// do the same for the horizontal scrolling
				$('#' + id + '_horizontalScrollContainer').css('height', this._scrollbarWidth() + 'px').css('overflow', 'scroll');
				//if (this.options.virtualization === true || this.options.rowVirtualization === true) {
				//	$('#' + id + '_horizontalScrollContainer').css('width', parseInt(this.options.width, 10) - this._scrollbarWidth());
				//} else {
				if ($.browser.msie) {
					// M.H. 3 Sep 2012 Fix for bug #118189: When virtualization is enabled, clicking on the horizontal scrollbar does not scroll the grid in IE9
					$('#' + id + '_horizontalScrollContainer').css('width', parseInt(this.options.width, 10) + 1).css('height', '100%');
				} else {
					$('#' + id + '_horizontalScrollContainer').css('width', this.options.width);
				}
				//}
				horizontalScrollContainerInner = '<div style="width:' + totalWidth + 'px;height:1px;"></div>';
				$('#' + id + '_horizontalScrollContainer').append(horizontalScrollContainerInner);
			}
			if (parseInt(this.options.height, 10) > 0) {
				$('#' + id + '_displayContainer').css('height', this.options.height).css('vertical-align', 'top');
			}
            //I.I. bug fix for 104085, tabindex=-1 added
            //L.A. fixed bug #105997 Can't navigate selection with arrow keys when fixed virtualization is enabled
            //Anchor should have some content in order to have get a focus. The content is visible but outside of the visible area.
            //L.A. fixed bug #112519 When continuous virtualization and selection with mode = row are enabled scrolling down the grid and 
            // selecting a row changes records values with wrong ones.
            //L.A. fixed bug #113287 fixed appending to the _virtualContainer
            $('#' + id + '_displayContainer').css('position', 'relative').css('width', w).css('maxWidth', w);
            //L.A. fixed bug #101375 moving the anchor to _headers_v, because it's visible in IE8, IE9
            if (this.options.virtualization === true) {
                $('#' + id + '_headers_v').append("<a href='#' id='" + id + "_displayContainer_a' tabindex='-1' style='position:absolute;top:-100px;left:-100px'>&nbsp;</a>");
            }
			if (this.options.width && this.options.virtualization === false && this.options.columnVirtualization === false) {
				$('#' + id + '_displayContainer').css({'overflow-y': 'hidden', 'overflow-x': 'auto'});
			} else {
				$('#' + id + '_displayContainer').css('overflow', 'hidden');
			}

			// make sure mouse wheel scrolling also works for the table with data, not only the virtual scrollbar
			// it's a smart and little-known technique i am going to use here -:) 
            //I.I. bug fix for 109777, mouseover -> mouseenter, mouseout -> mouseleave
			$('#' + id + '_displayContainer').parent().bind({
				mouseenter: function (event) {
					grid._isMouseOverVirtualTable = true;
				},
				mouseleave: function (event) {
					grid._isMouseOverVirtualTable = false;
				}
			});
			/*
			touchstart = function (event) {
				this._oldPageY = event.touches[0].pageY;
				event.stopPropagation();
				event.preventDefault();
			};
			touchend = function (event) {
				// compare pageY and pageX with the old ones
				if (event.changedTouches[0].pageY - this._oldPageY > 0) {
					grid._onVirtualVerticalScroll(event, Math.abs(event.changedTouches[0].pageY - this._oldPageY), 'up');
				} else if (event.changedTouches[0].pageY - this._oldPageY < 0) {
					grid._onVirtualVerticalScroll(event, Math.abs(event.changedTouches[0].pageY - this._oldPageY), 'down');
				}
			};
			$('#' + id + '_displayContainer').parent()[0].addEventListener("touchstart", $.proxy(touchstart, this), false);
			$('#' + id + '_displayContainer').parent()[0].addEventListener("touchend", $.proxy(touchend, this), false);
			*/
			// Refactor to keep in one place
			$(document).bind({
				DOMMouseScroll: function (event) { // Firefox
					var dir = 'down', delta, step;
					step = grid.options.virtualizationMouseWheelStep === null ? parseInt(grid.options.avgRowHeight, 10) : grid.options.virtualizationMouseWheelStep;
                    //I.I. bug fix for 104505. The issue is reproducible with jquery 1.7.1 only
					delta = -event.originalEvent.detail / 3; // // determine if we are scrolling up or down
					if (delta > 0) { // scroll up 
						dir = 'up';
					}  // else default => scroll down 
					// determine if mouse over  is true
					if (grid._isMouseOverVirtualTable) {
						grid._onVirtualVerticalScroll(event, step, dir); // define this # of pixels automatically
						event.preventDefault();
					}
				},
				mousewheel: function (event) { // IE, Chrome, Safari, Opera
					var dir = 'down', delta, step;
					step = grid.options.virtualizationMouseWheelStep === null ? parseInt(grid.options.avgRowHeight, 10) : grid.options.virtualizationMouseWheelStep;
					//I.I. bug fix for 104505. The issue is reproducible with jquery 1.7.1 only
                    delta = event.originalEvent.wheelDelta / 120; // determine if we are scrolling up or down
					if (delta > 0) {
						dir = 'up';
					}
					if (grid._isMouseOverVirtualTable) {
						grid._onVirtualVerticalScroll(event, step, dir); // define this # of pixels automatically 
						event.preventDefault();
					}
				}
			});
			// bind scroll event handlers
			if (this.options.virtualization === true || this.options.rowVirtualization === true) {
				$('#' + id + '_scrollContainer').bind({
					scroll: function (event) {
						grid._onVirtualVerticalScroll(event);
						//bugs #70681  and bug #72116
						grid._virtualScrollMouseDown = false;
					},
					mousedown: function (event) {
						// this is necessary because of one special case. When we scroll just once, we want to move by 1 row always (in chrome and FF)
						// but when we scroll continuously, we don't want the scrollbar to jump (Refer to bugs #70681  and bug #72116
						grid._virtualScrollMouseDown = true;
					}
				});
			}
			if (this.options.virtualization === true || this.options.columnVirtualization === true) {
				$('#' + id + '_horizontalScrollContainer').bind({
					scroll: function (event) {
						grid._onVirtualHorizontalScroll(event);
					}
				});
			}
			// S.S. May 11, 2012, #103088 We need to use a normal horizontal scroll container when we use only vertical
			// virtualization and the set grid's width is too narrow
			if ($('#' + id + '_horizontalScrollContainer').length === 0 && this.options.width !== null) {
				// add the scrollbar
				this._addHorizontalScrollBar($("#" + id + "_virtualContainer"));
				// changes the overlow-x attribute of the main container
				$('#' + id + '_displayContainer').css('overflow-x', 'hidden');
			}
			this.element.height($('#' + id + '_scrollContainer').height());
		},
		// if offset is defined, this means there is mouse-wheel scroll which we are manually handling. the offset is the amount of px to move - up or down 
		_onVirtualVerticalScroll: function (event, offset, dir) {
			if (this._ignoreScroll && event) {
				return false;
			}
			this._isHorizontal = false;
		//	originalEvent = event.originalEvent,
			var scrollContainer = this._scrollContainer(), scrollTopDiff,
				current = scrollContainer.scrollTop(),
				mode = this.options.virtualizationMode;
			if (offset !== undefined) {
				if (dir === 'down') {
					scrollContainer.scrollTop(current + offset);
				} else {
					scrollContainer.scrollTop(current - offset);
				}
				current = scrollContainer.scrollTop();
			} /*else {
				// A.T. 31 March 2011 - fix for bug #70681 
				// Please revise
				if (Math.abs(current - this._oldScrollTop) < this.options.avgRowHeight && current - this._oldScrollTop !== 0) {
					if (current > this._oldScrollTop) {
						scrollContainer.scrollTop(this._oldScrollTop + this.options.avgRowHeight);
					} else {
						scrollContainer.scrollTop(this._oldScrollTop - this.options.avgRowHeight);
					}
				}
			}
			*/
			//this._startRowIndex = Math.ceil(scrollContainer.scrollTop() * this._totalRowCount / (scrollContainer[0].scrollHeight - scrollContainer[0].offsetHeight));
			scrollTopDiff = scrollContainer.scrollTop() - this._oldScrollTop;
			if (Math.abs(scrollTopDiff) < 5 && $.browser.mozilla && !$.browser.msie) {
				return;
			}
			if (mode === undefined || mode === '') {
				mode = 'continuous';
			}
			if (mode === 'fixed') {
				this._startRowIndex = Math.ceil(scrollContainer.scrollTop() / parseInt(this.options.avgRowHeight, 10));
				if ((!$.browser.msie) && this._startRowIndex === this._oldStartRowIndex && this._virtualScrollMouseDown) {
					if (scrollTopDiff > 0 && scrollTopDiff < parseInt(this.options.avgRowHeight, 10)) {
						this._startRowIndex++;
						scrollContainer.scrollTop(scrollContainer.scrollTop() - scrollTopDiff + parseInt(this.options.avgRowHeight, 10));
					} else if (scrollTopDiff < 0 && Math.abs(scrollTopDiff) < parseInt(this.options.avgRowHeight, 10)) {
						this._startRowIndex--;
						scrollContainer.scrollTop(scrollContainer.scrollTop() - scrollTopDiff - parseInt(this.options.avgRowHeight, 10));
					}
				}
				if (this._startRowIndex > this._totalRowCount - this._virtualRowCount) {
					this._startRowIndex = this._totalRowCount - this._virtualRowCount;
				}
				if (this._startRowIndex < 0) {
					this._startRowIndex = 0;
				}

				this._oldStartRowIndex = this._startRowIndex;
				this._renderVirtualRecords();
			} else if (mode === 'continuous') {
				this.virtualScrollTo(current);
			}
			this._oldScrollTop = scrollContainer.scrollTop();
		},
		_scrollContainer: function () {
			if (!this._scrollContainerObj) {
				this._scrollContainerObj = $('#' + this.element[0].id + '_scrollContainer');
			}
			return this._scrollContainerObj;
		},
		_onVirtualHorizontalScroll: function (event) {
			var id = this.element[0].id,
				internallyTriggered = event === undefined, //in the case of hiding or other features that would requred it
				horizontalScrollContainer = $('#' + id + '_horizontalScrollContainer'),
				scrollLeft = horizontalScrollContainer.scrollLeft(),
				hiddenContentWidth = horizontalScrollContainer[0].scrollWidth - horizontalScrollContainer[0].offsetWidth,
                deltaScroll = scrollLeft - this._oldScrollLeft;
			if (!internallyTriggered && Math.abs(deltaScroll) < 5 && $.browser.mozilla && !$.browser.msie) {
				return;
			}
			//I.I. bug fix for 105932 and 105951
			if (this.options.virtualization === true && this.options.virtualizationMode === 'continuous') {
				this._setDisplayContainerScrollLeft(this._getDisplayContainerScrollLeft() + deltaScroll);
				this._oldScrollLeft = horizontalScrollContainer.scrollLeft();
				$('#' + id + '_headers_v').scrollLeft($('#' + id + '_headers_v').scrollLeft() + deltaScroll);
				// M.H. 4 April 2012 Fix for bug #108082
				$('#' + id + '_footer_container').scrollLeft($('#' + id + '_footer_container').scrollLeft() + deltaScroll);
				return;
			}
			this._isHorizontal = true;
			if (hiddenContentWidth > 0) {
				this._startColIndex = Math.ceil(scrollLeft * this._totalColumnCount / hiddenContentWidth);
				this._startColIndex = Math.min(this._startColIndex, this._totalColumnCount - this._virtualColumnCount);
			} else {
				this._startColIndex = 0;
			}
			if (internallyTriggered || this._oldStartColIndex !== this._startColIndex) {
				this._renderVirtualRecords();
				// trigger an event so that features that are header-dependent, such as filtering and sorting , update their UI accordingly
				this._trigger('virtualhorizontalscroll', null, {startColIndex: this._startColIndex, endColIndex: this._startColIndex + this._virtualColumnCount - 1});
			}

			this._oldScrollLeft = horizontalScrollContainer.scrollLeft();
			this._oldStartColIndex = this._startColIndex;
		},
		_initLoadingIndicator: function () {
			var widget;
			// attach loading indicator widget
			if (this.container().data("igLoading")) {
				this._loadingIndicator = this.container().data("igLoading").indicator();
			} else {
				widget = this.container().igLoading().data("igLoading");
				if (widget) {
					this._loadingIndicator = widget.indicator();
				}
			}
		},
		_addHorizontalScrollBar: function (parent) {
			var sb = $("<div id='" + this.element[0].id + "_hscroller_container' ></div>")
				.css('height', this._scrollbarWidth() + 'px')
				.css("position", "relative")
				.css('display', 'none')
				.css('overflow', 'hidden')
				.append(
					$("<div id='" + this.element[0].id + "_hscroller' ></div>")
						.css('width', '100%')
						.css('position', 'absolute')
						.css('bottom', '0px')
						.css('overflow-x', 'scroll')
						.css('overflow-y', 'scroll')
						.append(
							$("<div id='" + this.element[0].id + "_hscroller_inner' ></div>")
								.css('height', '1px')
						)
						.bind("scroll", $.proxy(this._scrollData, this))
				);
			if (parent) {
				sb.insertAfter(parent);
			}
		},
		_updateVirtualHorizontalScrollbar: function () {
			var horizontalScrollContainerInner, horizontalScrollContainer;
			//update horizontalScrollbar by updating horizontalScrollContainer inner div width
			horizontalScrollContainerInner = $('#' + this.element[0].id + '_horizontalScrollContainer div');
			horizontalScrollContainerInner.css('width', this._calculateContainerWidth(false));

			//hide the horizontalScrollContainer if no scrollbar should be visible
			horizontalScrollContainer = $('#' + this.element[0].id + '_horizontalScrollContainer');
			if (horizontalScrollContainer.width() > horizontalScrollContainerInner.width()) {
				horizontalScrollContainer.css('display', 'none');
			} else {
				horizontalScrollContainer.css('display', '');
			}
		},
		moveColumn: function (column, target, after, inDom) {
			/* Moves a visible column at a specified place, in front or behind a target column or at a target index
			paramType="number|string" An identifier of the column to be moved. It can be a key, a Multi-Column Header identificator, or an index in a number format. The latter is not supported when the grid contains multi-column headers.
			paramType="number|string" An identifier of a column where the moved column should move to or an index at which the moved column should be moved to. In the case of a column identifier the column will be moved after it by default.
			paramType="bool" optional="true" Specifies whether the column moved should be moved after or before the target column. 
			paramType="bool" optional="true" Specifies whether the column moving will be enacted through DOM manipulation or through rerendering of the grid.
			*/
			var grid = this, found;
			if (!this._nColArray) {
				this._buildHelperArray();
			}
			this._ctm = column;
			this._ttm = target;
			this._aft = true;
			this._idm = true;
			if (after === false) {
				this._aft = false;
			} else {
				this._aft = true;
			}
			if (inDom === false) {
				this._idm = false;
			} else {
				this._idm = true;
			}
			// perform move on column array level
			if (this._oldCols) {
				found = this._performInternalMove(this._oldCols);
			} else {
				found = this._performInternalMove(this._visibleColumns());
			}
			if (found === false) {
				throw new Error($.ig.Grid.locale.movingNotAllowedOrIncompatible);
			}
			if (inDom && inDom === true) {
				this._loadingIndicator.show();
				setTimeout(function () {
					grid._performDomColumnMove();
					grid._cleanMovingParams();
					grid._loadingIndicator.hide();
					grid._updateHeaderColumnIndexes();
					// we need to delete the dom so that the new column definitions work when scrolling down
					delete grid._virtualDom;
				}, 0);
			} else {
				this._performColumnMove();
				this._cleanMovingParams();
				this._updateHeaderColumnIndexes();
				delete grid._virtualDom;
			}
		},
		_cleanMovingParams: function () {
			delete this._ctm;
			delete this._ttm;
			delete this._idm;
			delete this._aft;
			delete this._nColArray;
		},
		_buildHelperArray: function () {
			var i = 0,
				j = 0,
				col,						// a single col in the cycle
				id,							// the single col's identification
				colrs,						// the single col's rowspan
				l,							// current col's horizontal length (colspan)
				x = 0,						// current horizontal identificator
				cCols = this._oldCols ? jQuery.extend(true, [], this._oldCols) : jQuery.extend(true, [], this._visibleColumns()),
				nCols,						// the newly built level
				level = 0,					// level number
				width = $("#" + this.id() + " colgroup:first>col").length,
				height = $("#" + this.id() + (this.options.fixedHeaders === true ? "_headers " : " ") + "thead tr").length;
			this._nColArray = [];
			if (height === 0 && this.options.showHeader === false) {
				height = 1;
			}
			for (i = 0; i < width; i++) {
				this._nColArray[i] = [];
			}
			i = 0;
			while (level < height) {
				nCols = [];
				while (i < cCols.length) {
					col = cCols[i];
					colrs = col.rowspan || 1;
					id = this._getColMarkForLevel(col);
					l = col.colspan || 1;
					for (j = 0; j < l; j++) {
						this._nColArray[x + j][level] = id;
					}
					if (col.crs === colrs && col.group) {
						nCols.push.apply(nCols, col.group.slice(0));
					} else {
						nCols.push(col);
					}
					x += l;
					i++;
				}
				cCols = nCols;
				level++;
				x = 0;
				i = 0;
			}
		},
		_getColMarkForLevel: function (col) {
			if (!col.crs) {
				col.crs = 0;
			}
			col.crs++;
			if (col.crs > 1) {
				return -1;
			}
			return col.key || col.identifier;
		},
		_performInternalMove: function (subset) {
			/*	recursively searches for the required column and performs a move on the level the column was found 
				the searched column is stored in _ctm to avoid excecive stack copy
				returns true if the move is successful
			*/
			var i = 0, j, success = true;
			i = this._getColIdxById(subset, this._ctm);
			if (typeof this._ctm === "number") {
				this._ctm = subset[i].key || subset[i].identifier;
			}
			if (i || i === 0) {
				j = this._getColIdxById(subset, this._ttm);
				// modify target when using indexes
				if (typeof this._ttm === "number") {
					this._ttm = subset[j].key || subset[j].identifier;
					if (j < i) {
						this._aft = false;
					} else {
						this._aft = true;
					}
				}
				//
				if (j || j === 0) {
					success = success && this._rearrangeArray(subset, i, 1, this._aft === true ? j + 1 : j);
					return success;
				}
				return false;
			}
			for (i = 0; i < subset.length; i++) {
				if (subset[i].group) {
					if (this._performInternalMove(subset[i].group) === true) {
						return true;
					}
				}
			}
			return false;
		},
		_getColIdxById: function (array, id) {
			var i, col;
			if (typeof id === "number") {
				return id;
			}
			for (i = 0; i < array.length; i++) {
				col = array[i];
				if (col.key) {
					if (col.key === id) {
						return i;
					}
				} else if (col.identifier) {
					if (col.identifier === id) {
						return i;
					}
				}
			}
		},
		_findColAreaInVArray: function (col, l) {
			var i, j, res = {};
			for (i = 0; i < this._nColArray.length; i++) {
				if (this._nColArray[i][l] === col) {
					res.x = i;
					for (j = i; j < this._nColArray.length; j++) {
						if (this._nColArray[j][l] !== col) {
							break;
						}
					}
					res.l = j - i;
					return res;
				}
			}
			return null;
		},
		_rearrangeArray: function (array, start, len, at) {
			var col, delta = start < at, n;
			if (start === at || start < 0 || at < 0 || start >= array.length || at > array.length) {
				//dummy check
				return false;
			}
			col = array.splice(start, len);
			for (n = 0; n < col.length; n++) {
				array.splice(delta ? at - len + n : at + n, 0, col[n]);
			}
			return true;
		},
		_rearrangeHeader: function () {
			var dataLevel, i, j, m, t, cols, n, header;
			header = $("#" + this.id() + (this.options.fixedHeaders === true ? "_headers " : " ") + "thead");
			// find target in the normalized array
			for (j = 0; j < this._nColArray[0].length; j++) {
				m = this._findColAreaInVArray(this._ctm, j);
				if (m) {
					t = this._findColAreaInVArray(this._ttm, j);
					if (t) {
						break;
					}
				}
			}
			dataLevel = [ m, t ];
			if (this.options.showHeader === false) {
				return dataLevel;
			}
			this._moveThs(header, this._ctm, this._ttm, this._aft);
			while (++j < this._nColArray[0].length) {
				cols = [];
				n = null;
				// find columns to move
				for (i = m.x; i < m.x + m.l; i++) {
					if (this._nColArray[i][j] === -1) {
						continue;
					}
					if (this._nColArray[i][j] !== n) {
						n = this._nColArray[i][j];
						cols.push(n);
					}
				}
				if (this._aft === true) {
					if (this._nColArray[t.x + t.l - 1][j] === -1) {
						for (i = t.x + t.l; i < Math.max(m.x, this._nColArray.length); i++) {
							if (this._nColArray[i][j] !== -1) {
								this._moveThs(header, cols, this._nColArray[i][j], false);
							}
						}
					} else {
						this._moveThs(header, cols, this._nColArray[t.x + t.l - 1][j], true);
					}
				} else {
					if (this._nColArray[t.x][j] === -1) {
						for (i = t.x; i >= (t.x - m.x - m.l > 0 ? m.x + m.l : 0); i--) {
							if (this._nColArray[i][j] !== -1) {
								this._moveThs(header, cols, this._nColArray[i][j], true);
							}
						}
					} else {
						this._moveThs(header, cols, this._nColArray[t.x][j], false);
					}
				}
			}
			return dataLevel;
		},
		_rearrangeTable: function (area, m, t) {
			var i, j, trs, $tr, tds, tar, skip;
			trs = area.find(">tr:not([data-container='true'],[data-grouprow='true'])");
			if (trs.length > 0) {
				skip = $(trs[0]).find("[data-parent],[data-skip='true']").length;
			}
			for (j = 0; j < trs.length; j++) {
				tds = $();
				$tr = $(trs[j]);
				for (i = m.x; i < m.x + m.l; i++) {
					tds = tds.add($tr.find("td:eq(" + (i + skip) + ")"));
				}
				if (this._aft === true) {
					tar = $tr.find("td:eq(" + (t.x + t.l + skip - 1) + ")");
					tds.detach().insertAfter(tar);
				} else {
					tar = $tr.find("td:eq(" + (t.x + skip) + ")");
					tds.detach().insertBefore(tar);
				}
			}
		},
		_moveCols: function (area, m, t, after) {
			var i, cols = $(), tCol, skip = area.find(">col[data-skip='true']").length;
			for (i = m.x; i < m.x + m.l; i++) {
				cols = cols.add(area.find(">col:eq(" + (i + skip) + ")"));
			}
			if (after === true) {
				tCol = area.find(">col:eq(" + (t.x + t.l + skip - 1) + ")");
				cols.detach().insertAfter(tCol);
			} else {
				tCol = area.find(">col:eq(" + (t.x + skip) + ")");
				cols.detach().insertBefore(tCol);
			}
		},
		_moveThs: function (header, ids, tar, after) {
			var $tar = header.find("th[data-mch-id='" + tar + "'],th[id='" + this.id() + "_" + tar + "']"), $ids = $(), $id, $pid, i;
			if (typeof (ids) === "object") {
				for (i = 0; i < ids.length; i++) {
					$id = header.find("th[data-mch-id='" + ids[i] + "'],th[id='" + this.id() + "_" + ids[i] + "']");
					if ($id.attr('data-vscr-padding-icrement')) {
						$pid = $id;
					}
					$ids = $ids.add($id);
				}
			} else {
				$ids = header.find("th[data-mch-id='" + ids + "'],th[id='" + this.id() + "_" + ids + "']");
				if ($ids.attr('data-vscr-padding-icrement')) {
					$pid = $ids;
				}
			}
			$ids.detach();
			if (after) {
				$ids.insertAfter($tar);
			} else {
				$ids.insertBefore($tar);
			}
			// we need to transfer the paddings after switching ths around
			if ($tar.attr('data-vscr-padding-icrement') && after === true) {
				$ids
					.last()
					.css(this._padding, $tar.css(this._padding))
					.attr('data-vscr-padding-icrement', $tar.attr('data-vscr-padding-icrement'));
				$tar.css(this._padding, '');
				$tar.removeAttr('data-vscr-padding-icrement');
			} else if ($pid) {
				$pid
					.parent()
					.children(":last")
					.css(this._padding, $pid.css(this._padding))
					.attr('data-vscr-padding-icrement', $pid.attr('data-vscr-padding-icrement'));
				$pid.css(this._padding, '');
				$pid.removeAttr('data-vscr-padding-icrement');
			}
		},
		_performDomColumnMove: function () {
			var dataLevel = this._rearrangeHeader(), m = dataLevel[0], t = dataLevel[1], f;
			// rearrange the cols for the header if needed
			if (this.options.fixedHeaders === true) {
				this._moveCols($("#" + this.id() + "_headers>colgroup"), m, t, this._aft);
			}
			// we need to change the data cols once we know which of them we moved
			this._rearrangeArray(this.options.columns, m.x, m.l, this._aft === true ? t.x + t.l : t.x);
			// and finally rearrange the body
			this._rearrangeTable(this.element.find(">tbody"), m, t);
			// its colgroup
			this._moveCols(this.element.find(">colgroup"), m, t, this._aft);
			// the footers
			if (this.options.fixedFooters === true) {
				f = $("#" + this.id() + "_footers>colgroup");
				this._rearrangeTable($("#" + this.id() + "_footers>tfoot"), m, t);
				this._moveCols(f, m, t, this._aft);
			} else {
				this._rearrangeTable(this.element.find("tfoot"), m, t);
			}
		},
		_performColumnMove: function () {
			var dataLevel = this._rearrangeHeader(), m = dataLevel[0], t = dataLevel[1], f;
			// rearrange the cols for the header if needed
			if (this.options.fixedHeaders === true) {
				this._moveCols($("#" + this.id() + "_headers>colgroup"), m, t, this._aft);
			}
			// we need to change the data cols once we know which of them we moved
			this._rearrangeArray(this.options.columns, m.x, m.l, this._aft === true ? t.x + t.l : t.x);
			this._renderData();
			this._renderFooter();
			this._rerenderColgroups();
		},
		showColumn: function (column) {
			/* Shows a hidden column. If the column is not hidden the method does nothing.
				paramType="number|string" An identifier for the column. If a number is provided it will be used as a column index. If a string is provided it will be used as a column key.
			*/
			var grid = this;
			this._loadingIndicator.show();
			setTimeout(function () {
				grid._setHidden(column, false);
				grid._loadingIndicator.hide();
			}, 0);
		},
		hideColumn: function (column) {
			/* Hides a visible column. If the column is hidden the method does nothing.
				paramType="number|string" An identifier for the column. If a number is provided it will be used as a column index else if a string is provided it will be used as a column key.
			*/
			var grid = this;
			this._loadingIndicator.show();
			setTimeout(function () {
				grid._setHidden(column, true);
				grid._loadingIndicator.hide();
			}, 0);
		},
		_setHidden: function (column, hidden) {
			var col,
				index;

			if (typeof column === 'number') {
				col = this.options.columns[column];
				index = column;
			} else {
				col = this.columnByKey(column);
				index = $.inArray(col, this.options.columns);
			}
			//perform hiding/showing if the hidden value actually changed
			if (col && col.hidden !== hidden) {
				this._setHiddenColumns([col], hidden, false);
			}
		},
		_setHiddenColumns: function (columns, hidden, initial) {
			var columnNumberChanged = false,
				self = this,
				horizontalScrollContainer,
				// M.H. 13 Sep 2012 Fix for bug #120220
				hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true,
				hasColumnVirtualization = (this.options.virtualizationMode !== 'continuous') && ((this.options.virtualization === true && this.options.width) || this.options.columnVirtualization === true),
				isContinuos = false,
				visibleColumnsLength,
				visibleColumnsWithWidthLength,
				gridWidth,
				width,
				colgroup;
			if (columns.length === 0) {
				return;
			}
			// updating should remove AddNewRow objects, and _hidingFinished is too late 
			this._fireInternalEvent('_hidingFinishing');
			if (hasVirtualization) {
				// M.H. 13 Sep 2012 Fix for bug #120220
				isContinuos = (this.options.virtualizationMode === 'continuous');
				self._updateVirtColCounters();
				if (!isContinuos) {
					$.each(columns, function (index, col) {
						var oldVirtualColumnCount = self._virtualColumnCount;
						col.hidden = hidden;
						self._visibleColumnsArray = undefined;
						self._updateVirtColCounters();
						if (self._virtualColumnCount !== oldVirtualColumnCount) {
							if (self._virtualColumnCount < oldVirtualColumnCount) {
								self._detachColumn(col);
							} else if (self._virtualColumnCount > oldVirtualColumnCount) {
								self._attachColumn(col);
							}
							columnNumberChanged = true;
							//force rebuild of _virtualDom
							self._virtualDom = null;
						}
					});
					if (hasColumnVirtualization) {
						//if we have column virtualization a horizontal scroll triggering is required
						this._vheaders = undefined;
						this._updateVirtualHorizontalScrollbar();
						// M.H. 11 July 2012 Fix for bug #114253
						horizontalScrollContainer = $('#' + this.element[0].id + '_horizontalScrollContainer');
						// M.H. 12 Sep 2012 Fix for bug #120220
						this._onVirtualHorizontalScroll();
						// M.H. 27 Aug 2012 Fix for bug #119710
	//					if (horizontalScrollContainer.length > 0 && horizontalScrollContainer.is(':hidden') === false) {
	//						this._onVirtualHorizontalScroll();
	//					}
					}
					this._renderVirtualRecords();
				}
			}
			// M.H. 13 Sep 2012 Fix for bug #120220
			if (!hasVirtualization || isContinuos) {
				$.each(columns, function (index, col) {
					col.hidden = hidden;
					self._visibleColumnsArray = undefined;

					if (col.hidden) {
						self._detachColumn(col);
					} else {
						self._attachColumn(col);
					}
				});
				//clear tbody and render data
				this._cleanupTBody();
				this._renderRecords();
				columnNumberChanged = true;
			}
			if (columnNumberChanged) {
				if (!this._initialized) {
					this._rerenderColgroups(initial);
					this._adjustLastColumnWidth(true);
				} else {
					//adjust last column width and grid width only if we have columns
					//leave the grid in the same configuration otherwise
					if (this._visibleColumns().length > 0) {
						this._rerenderColgroups(initial);
						//adjust the last column width after the data is rendered and we know if we need a scrollbar or not
						this._adjustLastColumnWidth(true);
						//adjust grid width 
						visibleColumnsLength = this._visibleColumns().length;
						visibleColumnsWithWidthLength =
							$.grep(this._visibleColumns(),
								function (col) {
									return col.width;
								}).length;
						//adjust width only if all visible columns have width
						if (visibleColumnsWithWidthLength === visibleColumnsLength) {
							if (this.options.width && parseInt(this.options.width, 10) > 0) {
								//if grid has width sum all visible columns' widths and set it as table width
								this._updateGridContentWidth();
							} else {
								//if grid has no width set the container width as the sum of all columns widths
								this._setContainerWidth(this.element[0].id + '_container');
								if (hasVirtualization) {
									width = this.element.parents('.ui-widget').css('width');
									//headerParent = $('#' + this.element[0].id + '_headers_v').css('width', width);
									gridWidth = this._calculateContainerWidth(true);
									if (this.options.height !== null) {
										gridWidth -= this._scrollbarWidth();
									}
									$('#' + this.element[0].id + '_displayContainer')
										.css('width', gridWidth)
										.css('max-width', gridWidth);
								}
							}
						}
					}
				}
			}
			this._fireInternalEvent("_hidingFinished");
			this.element.trigger('iggriduisoftdirty', {owner: this});
			this._trigger(this.events.columnsCollectionModified, null, {owner: this});
			// M.H. 17 July 2012 Fix for bug #105203 - it should be called after columnsCollectionModified because special column width is calculated properly
			if (columnNumberChanged && hasVirtualization && this._visibleColumns().length > 0 && visibleColumnsWithWidthLength === visibleColumnsLength) {
				if (this.options.virtualizationMode === 'continuous') {
					gridWidth += this._calculateSpecialColumnsWidth();

					$('#' + this.element[0].id + '_displayContainer')
						.css('width', gridWidth)
						.css('max-width', gridWidth);
				}
				$('#' + this.element[0].id + '_virtualContainer>colgroup col').eq(0).attr('width', gridWidth);
				//$('#' + this.element[0].id + '_headers_v').width()
				// M.H. 27 Aug 2012 Fix for bug #119710 - we should re-set width of the virtual container only when width is not set
				if (this.options.width === null || this.options.width === undefined) {
					this._setContainerWidth(this.element[0].id + '_headers_v');
				}
			}

			this._origWidth = parseInt(this.container().css("width"), 10);
			if (columnNumberChanged &&
					($.browser.mozilla || ($.browser.msie && $.browser.version.slice(0, 1) === '8'))) {
				//in order to have columns aligned correctly on FF and IE8 detach/attach calgroups
				if (this.options.showHeader) {
					colgroup = this.headersTable().children("colgroup").detach();
					this.headersTable().prepend(colgroup);
				}
				//update the data table if it is different from the headers table or we are not showing headers
				if ((this.options.fixedHeaders === true && this.options.height !== null) ||
						this.options.showHeader === false) {
					colgroup = this.element.children("colgroup").detach();
					this.element.prepend(colgroup);
				}
				//update the footers table if we have one
				if (this.options.fixedFooters === true && this.options.height !== null) {
					colgroup = this.footersTable().children('colgroup').detach();
					this.footersTable().prepend(colgroup);
				}
			}
		},
		_calculateSpecialColumnsWidth: function () {
			var width = 0;
			//take the special columns widths into account
			this.headersTable().find("> colgroup > col[data-skip=true]").each(function () {
				var colWidth = this.style.width;
				if (colWidth) {
					width += parseInt(colWidth, 10);
				}
			});
            // L.A. 07 May 2012 Fixed bug #111052 The width of a column in a grid changes with 6 to 7px after grouping by it
            if (width > 0) {
                this._origSum = width;
            }
			return width;
		},
		_synchronizeHScroll: function () {
			var hasFixedHeaders = this.options.showHeader && this.options.fixedHeaders === true && this.options.height !== null,
				hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null,
				scroller = $('#' + this.element[0].id + '_hscroller'),
				scrollContainer = $('#' + this.element[0].id + '_scroll'),
				scrLeft = scroller.scrollLeft(),
				headers,
				footers;

			scrollContainer.scrollLeft(scrLeft);
			scrLeft = scrollContainer.scrollLeft();
			scroller.scrollLeft(scrLeft);

			if (hasFixedHeaders) {
				headers = $('#' + this.element[0].id + '_headers').parent();
				headers.scrollLeft(scrLeft);
			}

			if (hasFixedFooters) {
				footers = $('#' + this.element[0].id + '_footer_container');
				footers.scrollLeft(scrLeft);
			}
		},
		_updateGridContentWidth: function () {
			var gridWidth = 0,
				scroller,
				scrLeft,
                hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader && this._headerParent;

			$.each(this._visibleColumns(), function (index, col) {
				if (gridWidth !== undefined &&
						col.width &&
						!(col.width.charAt && col.width.endsWith('%'))) {
					gridWidth += parseInt(col.width, 10);
				} else {
					gridWidth = undefined;
				}
			});

			if (gridWidth === undefined) {
				return;
			}

			//take the special columns widths into account
			gridWidth += this._calculateSpecialColumnsWidth();

            /* L.A. 05 June 2012. Fixing bug #113545 When grid's width is bigger than the sum of column widths 
            and fixedHeaders=false the hidding icon of the last column is not visible. */
			if (!hasFixedHeader && this._hasVerticalScrollbar) {
                gridWidth -= this._scrollbarWidth();
            }

			if (this.options.width !== null && this.options.height !== null) {
				scroller = $('#' + this.element[0].id + '_hscroller');
				scrLeft = scroller.scrollLeft();
			}

			this._setGridContentWidth(gridWidth);

			if (this.options.height !== null && this.options.width !== null) {
				this._updateVerticalScrollbarCellPadding();
			}

			if (this.options.width !== null && this.options.height !== null) {
				//A.Y. bug 91577. restore the scrolLeft of the grid as some browsers may calculate it as 0 when the table size is changed.
				scroller.scrollLeft(scrLeft);

				this._synchronizeHScroll();
			}
		},
		_updateVerticalScrollbarCellPadding: function () {
			//if there is a vertical scrollbar the right padding
			//of the last column's header and footer cells should be adjusted 
			//such that the content is not over the scrollbar
			var hasFixedHeaders = this.options.showHeader && this.options.fixedHeaders === true && this.options.height !== null,
				hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null,
				emptySpace,
				paddingIncrement;

			if (this.options.height === null) {
				//if the grid has no height there is no vertical scrollbar
				return;
			}

			if (!hasFixedHeaders && !hasFixedFooters) {
				//if the grid doesn't hava fixed headers or footers the vertical scrollbar
				//is across the whole table, including the header and the footer,
				//and no padding adjustment is required
				return;
			}

			if (this._gridInnerWidth === undefined || this._gridContentWidth === undefined) {
				//if the grid's inner width or content width are undefined(not all columns have width in pixels)
				//then the grid content fills the whole grid
				emptySpace = 0;
			} else {
				emptySpace = this._gridInnerWidth - this._gridContentWidth;
			}

			if (this._hasVerticalScrollbar) {
				paddingIncrement = this._scrollbarWidth();
			} else {
				paddingIncrement = 0;
			}

			if (emptySpace >= 0) {
				//if there is empty space it should be substracted from the padding
				paddingIncrement -= emptySpace;
			}

			if (paddingIncrement < 0) {
				paddingIncrement = 0;
			}

			if (hasFixedHeaders) {
				this._increaseLastHeaderCellVScrollbarPadding(this.headersTable(), paddingIncrement);
			}

			if (hasFixedFooters) {
				this._increaseLastCellVScrollbarPadding(this.footersTable(), "tfoot", "td", paddingIncrement);
			}

			this._increaseLastCellVScrollbarPadding(this.element, "tbody", "td", paddingIncrement);
		},
		_increaseLastHeaderCellVScrollbarPadding: function (table, paddingIncrement) {
			var lastCells = table
				.children("thead")
				.children("tr")
				.not("[data-skip=true]")
				.children("th:last-child")
				.not("[data-skip=true]"),
				currIncrement = parseInt(lastCells.first().attr('data-vscr-padding-icrement'), 10),
				paddingValue;

			paddingValue = parseInt(lastCells.first().css(this._padding), 10);

			if (currIncrement) {
				//if the padding has currently been incremented
				//because of a vScrollbar we should remove that increment
				paddingValue -= currIncrement;
			}

			//hide the table to trigger just one reflow
			table.css('display', 'none');

			lastCells.css(this._padding, paddingValue + paddingIncrement);
			lastCells.first().attr('data-vscr-padding-icrement', paddingIncrement);

			//update the margin to be exactly the oposite of the padding cell
			//for the indicators that should always stay on the right regardless of the padding
			//this is the case with the resizing and hiding indicators
			lastCells
				.find("[data-nonpaddedindicator=right]")
				.css(this._rtl ? 'margin-left' : 'margin-right', -parseInt(lastCells.css(this._padding), 10) + 'px');

			table.css('display', '');
		},
		_increaseLastCellVScrollbarPadding: function (table, tableGroup, rowElement, paddingIncrement) {
			var lastCells = table
				.find(" > " + tableGroup + " > tr > " + rowElement + ":last-child"),
				currIncrement = parseInt(lastCells.first().attr('data-vscr-padding-icrement'), 10),
				paddingValue;

			paddingValue = parseInt(lastCells.first().css('padding-left'), 10);

			if (currIncrement) {
				//if the padding has currently been incremented
				//because of a vScrollbar we should remove that increment
				paddingValue -= currIncrement;
			}

			lastCells.css(this._padding, paddingValue + paddingIncrement);
			lastCells.first().attr('data-vscr-padding-icrement', paddingIncrement);
		},
		_updateHScrollbarVisibility: function () {
			var scrollerContainer = $("#" + this.element[0].id + "_hscroller_container"),
				scrollerWasHidden = scrollerContainer.css('display') === 'none';

			scrollerContainer.css('display', '');

			if (this._gridInnerWidth < this._gridContentWidth) {
				if (scrollerWasHidden) {
					if (this.options.autoAdjustHeight) {
						this._initializeHeights();
					}
				}
			} else {
				scrollerContainer.css('display', 'none');
				if (!scrollerWasHidden) {
					if (this.options.autoAdjustHeight) {
						this._initializeHeights();
					}
				}
			}
		},
		_setGridContentWidth: function (gridContentWidth) {
			var o = this.options,
				v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;
			if (this.options.height !== null) {
				if (gridContentWidth) {
					this._gridContentWidth = gridContentWidth;
				}
				if (this._gridContentWidth) {
					// L.A. 23 April 2012 Fixing bug #99024 When in grid fixedHeaders is false, it is not possible to resize last column
					// L.A. 26 April 2012 Fixing bug #91585 In IE7 columns are not correct after scroll horizontal
					this._getHScrollContainerInner()
						.css('width', this._hasVerticalScrollbar && this.options.fixedHeaders ? this._gridContentWidth - this._scrollbarWidth() : this._gridContentWidth);
				}
				this._updateHScrollbarVisibility();
			}
			if (v === false) {
				this._setGridTablesWidth(gridContentWidth);
			}
		},
		_setGridTablesWidth: function (width) {
			var hasFixedHeaders = this.options.showHeader && this.options.fixedHeaders === true && this.options.height !== null,
				hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null;

			this.element.width(width);

			if (hasFixedHeaders) {
				this.headersTable().width(width);
			}

			if (hasFixedFooters) {
				this.footersTable().width(width);
			}
		},
		_detachHiddenColumns: function () {
			var col, i;
			for (i = 0; i < this.options.columns.length; i++) {
				col = this.options.columns[i];
				if (col.hidden) {
					this._detachColumn(col);
				}
			}
		},
		_rerenderColgroups: function (initial) {
			var hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader,
				hasFixedFooter = this.options.height !== null && this.options.fixedFooters === true && this.options.showFooter;

			if (hasFixedHeader) {
				this.headersTable().children("colgroup").remove();
				this._renderColgroup(this.headersTable()[0], true, false, initial);
			}

			if (hasFixedFooter) {
				this.footersTable().children('colgroup').remove();
				this._renderColgroup(this.footersTable()[0], false, true, initial);
			}

			this.element.children("colgroup").remove();
			this._renderColgroup(this.element[0], false, false, initial);
		},
		_detachColumn: function (col) {
			var position, cols, headerCells, isMultiColumnGrid = this._isMultiColumnGrid;

			col.hidden = false;
			this._visibleColumnsArray = undefined;

			cols = this._visibleColumns();
			position = $.inArray(col, cols);

			col.hidden = true;
			this._visibleColumnsArray = undefined;
			this._initializeDetachedContainers();
			headerCells = this.headersTable().children("thead").children("tr").not("[data-skip=true]");
			if (isMultiColumnGrid) {
				this._hideMultiHeaderCells(this._headerCells, position, col.key);
				headerCells = this.headersTable().children("thead").children("tr:not([data-mch-level])").not("[data-skip=true]");
				this._detachCells(
					headerCells,
					function (row) {
						return row.children("th, td").not("[data-skip=true]");
					},
					position,
					this._detachedHeaderCells,
					col.key
				);
			} else {
				this._detachCells(
					headerCells,
					function (row) {
						return row.children("th, td").not("[data-skip=true]");
					},
					position,
					this._detachedHeaderCells,
					col.key
				);
			}

			this._detachCells(
				this.footersTable().children("tfoot").children("tr"),
				function (row) { return row.children("td").not("[data-skip=true]"); },
				position,
				this._detachedFooterCells,
				col.key
			);
		},
		_attachColumn: function (col) {
			var headerCells, visibleCols = this._visibleColumns(),
				position = $.inArray(col, visibleCols);

			this._initializeDetachedContainers();

			if (this._isMultiColumnGrid) {
				this._showMultiHeaderCells(col.key);
				headerCells = this.headersTable().children("thead").children("tr:not([data-mch-level])").not("[data-skip=true]");
				this._attachCells(
					headerCells,
					function (row) { return row.children("th, td").not("[data-skip=true]"); },
					position,
					this._detachedHeaderCells,
					col.key
				);
			} else {
				this._attachCells(
					this.headersTable().children("thead").children("tr").not("[data-skip=true]"),
					function (row) { return row.children("th, td").not("[data-skip=true]"); },
					position,
					this._detachedHeaderCells,
					col.key
				);
			}

			this._attachCells(
				this.footersTable().children("tfoot").children("tr"),
				function (row) { return row.children("td").not("[data-skip=true]"); },
				position,
				this._detachedFooterCells,
				col.key
			);
		},
		_initializeDetachedContainers: function () {
			if (!this._detachedContainersInitialized) {
				this._detachedHeaderCells = {};
				this._detachedFooterCells = {};
				this._detachedContainersInitialized = true;
			}
		},
		_getParentsMultiHeader: function (key) {
			var i, cols = this._oldCols, colsLength = cols.length, arr = [];

			for (i = 0; i < colsLength; i++) {
				if (cols[i].key === key || cols[i].identifier === key) {
					arr.push(cols[i]);
					break;
				} else if (cols[i].group) {
					if (this._getParentsMultiHeaderRecursive(key, cols[i].group, arr) === true) {
						arr.push(cols[i]);
						break;
					}
				}
			}
			return arr;
		},
		_getParentsMultiHeaderRecursive: function (key, arr, resArr) {
			var i, cols = arr, colsLength = arr.length, res = false;

			for (i = 0; i < colsLength; i++) {
				if (cols[i].key === key || cols[i].identifier === key) {
					resArr.push(cols[i]);
					res = true;
					break;
				} else {
					if (cols[i].group && this._getParentsMultiHeaderRecursive(key, cols[i].group, resArr) === true) {
						resArr.push(cols[i]);
						res = true;
						break;
					}
				}
			}

			return res;
		},
		_hideMultiHeaderCells: function (headerCells, position, key) {
			var i, currentCell, parents = this._getParentsMultiHeader(key), parent, colspan, $th,
				headersTable = this.headersTable().find('thead > tr');

			currentCell = headerCells[position];
			this._headerCells.splice(position, 1);
			currentCell.css('display', 'none');
			this._hiddenColumns[key] = currentCell;
			if (parents.length > 0) {
				for (i = 0; i < parents.length; i++) {
					parent = parents[i];
					if (parent.level === 0) {
						continue;
					}
					$th = headersTable.find('th[data-mch-id=' + parent.identifier + ']');
					colspan = parseInt($th.attr('colspan'), 10);
					if (colspan > 1) {
						$th.attr('colspan', --colspan);
					} else {
						$th.attr('ishidden', 1);
						$th.css('display', 'none');
					}
				}
			}
		},
		_detachCells: function (rows, cellSelectorFunction, position, container, key) {
			var detachedCells = [], i, cells, currentCell;
			if (rows.length > 0) {
				for (i = 0; i < rows.length; i++) {
					cells = cellSelectorFunction(rows.eq(i));
					currentCell = cells.eq(position);
					if (cells.length === 1) {
						currentCell.after(
							$("<" + currentCell[0].tagName + "></" + currentCell[0].tagName + ">")
								.attr("data-hiddenreplacement", "true")
								.css("height", currentCell.height())
								.attr("class", currentCell.attr("class"))
						);
					}
					detachedCells.push(currentCell.detach());
				}
				container[key] = detachedCells;
			}
		},
		_showMultiHeaderCells: function (key) {
			var i, currentCell = this._hiddenColumns[key],
				parents = this._getParentsMultiHeader(key), parent, colspan, $th, currentOrder, order,
				headerCellsLength = this._headerCells.length,
				headersTable = this.headersTable().find('thead > tr'), isHidden;

			if (currentCell === null || currentCell === undefined) {
				return;
			}
			currentOrder = currentCell.data('data-mch-order');
			for (i = 0; i < headerCellsLength; i++) {
				order = this._headerCells[i].data('data-mch-order');
				if (currentOrder < order) {
					this._headerCells.splice(i, 0, currentCell);
					break;
				}
			}
			if (i === headerCellsLength) {
				this._headerCells.push(currentCell);
			}
			currentCell.css('display', '');
			currentCell.removeAttr('ishidden');
			if (parents.length > 0) {
				for (i = 0; i < parents.length; i++) {
					parent = parents[i];
					if (parent.level === 0) {
						continue;
					}
					$th = headersTable.find('th[data-mch-id=' + parent.identifier + ']');
					isHidden = $th.attr('ishidden') === '1';
					colspan = parseInt($th.attr('colspan'), 10);
					if (!isHidden) {
						$th.attr('colspan', ++colspan);
					} else {
						$th.removeAttr('ishidden');
						$th.css('display', '');
					}
				}
			}
		},
		_attachCells: function (rows, cellSelectorFunction, position, container, key) {
			var detachedCells, i, cells, replacementCell, storedKey;
			if (rows.length > 0) {
				if (this.options.virtualization === true || this.options.columnVirtualization === true) {
					// M.H. 5 April 2012 Fix for bug #104627
					detachedCells = container[key];
					//if we are using virtualization the column that needs to be attached may not be in the list
					//of detached columns as the headers are reused and because of that any column from the list can be attached
					// M.H. 5 April 2012 Fix for bug #104627
					if (detachedCells === null || detachedCells === undefined) {
						for (storedKey in container) {
							if (container.hasOwnProperty(storedKey)) {
								detachedCells = container[storedKey];
								delete container[storedKey];
								break;
							}
						}
					}
				} else {
					detachedCells = container[key];
					delete container[key];
				}
				// M.H. 23 Jan 2012 Fix for bug #91738
				if (detachedCells === undefined || detachedCells === null) {
					return;
				}
				for (i = 0; i < rows.length; i++) {
					cells = cellSelectorFunction(rows.eq(i)).not("[data-hiddenreplacement=true]");
					if (position === 0) {
						if (cells.length === 0) {
							replacementCell = rows.eq(i).find("[data-hiddenreplacement=true]");
							replacementCell.after(detachedCells[i]);
							replacementCell.remove();
						} else {
							//append before the second element which is now at position 0
							cells.eq(0).before(detachedCells[i]);
						}
					} else {
						//append after the element before the current
						cells.eq(position - 1).after(detachedCells[i]);
					}
				}
			}
		},
		_cleanupTBody: function () {
			var tbody = this.element.children('tbody');
			if ($.ui.igGrid.speedupDOMCleanup === false) {
				tbody.empty();
			} else {
				if (tbody.children().length > 0) {
					this.element[0].removeChild(tbody[0]);
					tbody = $('<tbody></tbody>')
						.appendTo(this.element)
						.addClass(this.css.baseContentClass)
						.addClass(this.css.gridTableBodyClass)
						.addClass(this.css.recordClass);
				}
			}
			return tbody;
		},
		_captureInitiallyHiddenColumns: function () {
			//capture the columns that are hidden initially and mark them as visible
			//the grid should render as all columns are visible and adjust later if there are hidden ones
			this._initialHiddenColumns = $.grep(this.options.columns, function (column, index) {
				var hidden = column.hidden;
				column.hidden = false;
				return hidden;
			});
		},
		getUnboundValues: function (key) {
			/*
			Gets unbound values for the specified column key. If key is not specified returns all unboundvalues
			paramType="string" column key
			returnType="object" unbound values
			*/
			var res;

			if (key === undefined || key === null) {
				return this._unboundValues;
			}
			res = this._unboundValues[key];
			// M.H. 3 Sep 2012 Fix for bug #120188
			if (res === undefined || res === null) {
				if (this.getUnboundColumnByKey(key) !== null) {
					res = [];
				} else {
					res = null;
				}
			}
			return res;
		},
		setUnboundValues: function (values, key) {
			/*
				Sets unbound values for the unbound column with the specified key.
				paramType="number" array of values
				paramType="string" key of the unbound column
			*/
			var i, data = this.dataSource.data(), valuesLength = values.length, isToConvert = false, type = "string", pk = this.options.primaryKey, col, schema, pkVal;

			if (valuesLength === 0) {
				return;
			}
			if (this.dataSource && this.dataSource.schema) {
				col = this.getUnboundColumnByKey(key);
				if (col !== null && col.dataType) {
					type = col.dataType;
					isToConvert = true;
					schema = this.dataSource.schema();
				}
			}
			if (pk === undefined) {
				pk = null;
			}
			// M.H. 4 Sep 2012 Fix for bug #120302
			for (i = 0; i < valuesLength; i++) {
				if (data[i] === undefined || data[i] === null) {
					break;
				}
				if (isToConvert) {
					// M.H. 13 Sep 2012 Fix for bug #120867
					if (pk === null) {
						pkVal = i;
					} else {
						pkVal = data[i][pk];
					}
					values[i] = schema._convertType(type, values[i], pkVal, key);
				}
				data[i][key] = values[i];
				// M.H. 10 Sep 2012 Fix for bug #120696
				this._addUnboundColumnValue(key, values[i], i);
			}
			// M.H. 10 Sep 2012 Fix for bug #120720
			if (this.options.virtualization === true || this.options.rowVirtualization === true) {
				this._scrollTo(0);
			}
			this._renderColumnData(key, this.dataSource.dataView());
		},
		getUnboundColumnByKey: function (key) {
			/*
			Returns an unbound column with the specified key. If not found returns null
			paramType="string" a column key
			returnType="object" a column definition
			*/
			if (this._unboundColumns === undefined ||
					this._unboundColumns === null ||
					this._unboundColumns.length === 0 ||
					key === null ||
					key === undefined) {
				return null;
			}
			var column = null;

			$.each(this._unboundColumns, function (ind, col) {
				if (col.key === key) {
					column = col;
					return false;
				}
			});
			return column;
		},
		_renderColumnData: function (key, values) {
			/*
			Render for the column with the specified key the array of values
			paramType="string" column key
			paramType="array" array of objects
			*/
			if (values.length === 0) {
				return;
			}
			var visibleColumns = this._visibleColumns(),
				grid = this,
				tdIndex,
				index,
				tds,
				column,
				ds,
				hasTemplate = (grid.options.rowTemplate && grid.options.rowTemplate.length > 0);

			// M.H. 27 Aug 2012 Fix for bug #119756
			index = this._getVisibleIndexByKey(key);
			column = visibleColumns[index];
			// M.H. 5 Sep 2012 Fix for bug #120516
			if (column === undefined || column === null) {
				return;
			}
			if (hasTemplate) {
				ds = this.dataSource.dataView();
			}
			// M.H. 5 Sep 2012 Fix for bug #120501
			// M.H. 7 Sep 2012 Fix for bug #120615
			tdIndex = index + this.headersTable().find('>thead>tr:eq(0)>th[data-skip=true]').length;
			tds = this.element.find(">tbody> tr > td:not([data-skip]):nth-child(" + (tdIndex + 1) + ")");
			$.each(values, function (ind, val) {
				var innerHtml;
				// M.H. 4 Sep 2012 Fix for bug #120306
				if (val[key] === undefined) {
					return true;
				}
				if (hasTemplate) {
					// M.H. 6 Sep 2012 Fix for bug #119627
					innerHtml = grid._renderTemplatedCell(ds[ind], column).substring(1);
				} else {
					innerHtml = grid._renderCell(val[key], column);
				}
				if (!tds[ind]) {
					// break;
					return false;
				}
				$(tds[ind]).html(innerHtml);
			});
		},
		_renderData: function (success, errmsg) {
            //L.A. 22 March 2012 Bug 102502 - The dataBound event is fired before the grid's dataSource has any data (regardless if local or remote)
            this._trigger(this.events.dataBound, null, {owner: this});
			var gridElement = this.element,
				self = this,
				noCancel = true,
				sum = 0,
				cols,
				colsToUnbound,
				fields,
				colsLength,
				data,
				key,
				j,
				i,
				diff = 0,
				isTable = false,
				noCancelError = true,
				ucFormulaFunction,
				tbody,//gridElement.find('tbody')
				newW,
				displayCont;

			if (this._hasUnboundColumns) {
				// M.H. 7 Sep 2012 Fix for bug #120553
				// M.H. 12 Sep 2012 Fix for bug #121028
				//if (this.options.requiresDataBinding === true || this._inferOpType() === "remote") {
				// M.H. 12 Sep 2012 Fix for bug #121019
				cols = this.options.columns;
				colsLength = cols.length;
				data = this.dataSource.data();
				ucFormulaFunction = function (ind, val) {
					if ($.type(cols[i].formula) === "function") {
						val[key] = cols[i].formula(val, gridElement);
					} else {
						val[key] = eval(cols[i].formula + "(val, gridElement)");
					}
					// M.H. 10 Sep 2012 Fix for bug #120696
					self._addUnboundColumnValue(key, val[key], ind);
				};
				colsToUnbound = [];
				for (i = 0; i < colsLength; i++) {
					if (cols[i].unbound === true) {
						key = cols[i].key;
						if (cols[i].unboundValues !== null &&
								cols[i].unboundValues !== undefined &&
								$.type(cols[i].unboundValues) === 'array') {
							this.setUnboundValues(cols[i].unboundValues, key);
						} else if (cols[i].formula !== null && cols[i].formula !== undefined) {
							$.each(data, ucFormulaFunction);
						} else if (this._unboundValues[key] && this._unboundValues[key].length > 0) {
							colsToUnbound.push(key);
						}
					}
				}
				//}
				if (this.options.localSchemaTransform === true && colsToUnbound.length > 0 && data.length > 0) {
					for (i = 0; i < colsToUnbound.length; i++) {
						key = colsToUnbound[i];
						if (data[0][key] === undefined) {
							this.setUnboundValues(this._unboundValues[key], key);
						}
					}
				}
				if (this.options.mergeUnboundColumns === false) {
					this._mergeUnboundValues();
				}
			}
			if (success === false) {
				// check if there is an event requestError defined
				noCancelError = this._trigger(this.events.requestError, null, {owner: this, message: errmsg});
				// if the handler returns false or doesn't return anything, the error will be propagated to teh grid and an Error object will be returned
				if (noCancelError) {
					throw new Error(errmsg);
				}
			}
			if (this._cancelRendering === true) {
				this._cancelRendering = false;
				return;
			}
			this.element.trigger('iggriduisoftdirty', {owner: this});
			tbody = gridElement.children('tbody');
			noCancel = this._trigger(this.events.dataRendering, null, {owner: this, tbody: tbody});
			if (noCancel) {
				// show loading indicator
				//this.options.dataSource = this.dataSource.dataView();
				// generate and render markup on the client 
				// reset virtualization buffer
				/* jQuery's empty() will try to find all handlers, etc. which is very slow. On the other hand if we don't use a similar approach
					and just remove the tbody, there will be memory leaks (inherent in Firefox and IE by design). 
					tbody.innerHTML="" won't work for IE ! since it's read only for many types of DOM elements, including TBODY ! 
				*/
				//if (this.options.jQueryTemplating === true) {
				if (!(this.options.dataSource && this.options.dataSource.tagName && $(this.options.dataSource).is('table'))) {
					tbody = this._cleanupTBody();
				} else {
					isTable = true;
				}
				//}
				this._virtualDom = null;
				if (!this._initialized) {
					// auto generate the columns collection, if options.autogenerateColumns is true
					if (this.options.autoGenerateColumns === true) {
						this._generateColumns();
						// reinitialize all features
						for (i = 0; i < this.options.features.length; i++) {
							this._initFeature(this.options.features[i], this._dataOptions);
						}
						//A.Y. bug 98100. When the grid's columns are autogenerated we need to first
						//receive the data, generate the columns, init features(hiding sets the hidden option there)
						//and then capture the initially hidden columns
						this._captureInitiallyHiddenColumns();
						// M.H. 13 Aug 2012 Fix for bug #118837 - re-initialize _visibleColumnsArray
						this._visibleColumnsArray = undefined;
						//A.Y. Bug 98593. We need to calculate the virtual column counters after the columns are generated.
						this._updateVirtColCounters();
					}
					if (isTable) {
						// now clean up the TABLE
						tbody.empty();
					}
					//A.T. 20 Dec. 2011 - fix for bug #98209
					// M.H. 10 May 2012 Fix for bug #108221 - renderHeader should be called only 1 time
					if (this._renderHeaderCalled !== true) {
						this._renderHeader();
						this._renderCaption();
                    /* L.A. 20 June 2012 - Fixed bug #113607 When the grid has defined width less than the sum of its columns' 
                        widths and showHeader = FALSE, the grid is rendered without a horizontal scrollbar 
                    */
                    } else {
		                if (this.options.width !== null && this.options.height === null) {
				            this.scrollContainer().css('overflow-y', 'hidden').css('overflow-x', 'auto');
                        }
                    }
					// A.T. 21 Feb 2012 - Fix for #102322 - when we destroy the grid, we don't remove the whole colgroup
					if (this.element.find('colgroup').length === 0 || this.element.find('colgroup').children().length === 0) {
						this._renderColgroup(this.element[0], false, false, this.options.autofitLastColumn);
					}
					this._renderFooter();
				}
				this._trigger("dataEmpty", null, {owner: this, tbody: tbody});
				if (this.options.autoGenerateColumns === false && ((this.options.columns && this.options.columns.length === 0) || !this.options.columns)) {
					throw new Error($.ig.Grid.locale.noColumnsButAutoGenerateTrue);
				}
				//A.T. check if we have column templates set. note that this must be done after columns are generated
				// note that if there is a rowTemplate defined already, and some columns have a "template" set, the rowTemplate
				// will always have a higher priority !
				if (this._hasColumnTemplates() && this.options.rowTemplate === null) {
					this.options.rowTemplate = this._buildRowTemplateRaw();
				}
				// A.Y. skip rendering if the grid has columns that have to be hidden
				// the data will be rendered after the hiding
				if (this._initialHiddenColumns === undefined || this._initialHiddenColumns.length === 0) {
					//A.T. 12 Feb - Fix for bug #65676 - Grid autogenerates columns when the columns are not defined and autoGenerateColumns = false
					if (this.options.columns.length > 0) {
						if (this.options.virtualization === true || this.options.rowVirtualization === true || this.options.columnVirtualization === true) {
							this._renderVirtualRecords();
						} else {
							this._renderRecords();
						}
						if (this._initialized) {
							//this case is happending when we change the page in the paging feature
							this._adjustLastColumnWidth(false);
							if (this.options.width !== null && this.options.height !== null) {
								//A.Y. Bug 99817. In some browsers after _renderData is called and the tbody
								//is cleared and records rerendered the scrollLeft of the header and footer may become incorrect
								this._synchronizeHScroll();
							}
						} else {
							//A.Y. Bug 97395. If we have height we need to initializeHeights before the
							//call to _adjustLastColumnWidth as in some cases the grid incorrectly determines
							//that there should be no vertical scrollbar when there should be
							if (this.options.height !== null && this.options.autoAdjustHeight) {
								this._initializeHeights();
							}
							this._adjustLastColumnWidth(true);
						}
					}
				}
				// adjust scrolling grid height
				if (!this._initialized) {
					if (this.options.autoAdjustHeight) {
						this._initializeHeights();
					}
				}
				if (this._initialHiddenColumns !== undefined && this._initialHiddenColumns.length > 0) {
					//hide the columns that were initially hidden
					// M.H. 23 May 2012 Fix for bug #110627
					if ($.ig.util.isIE8) {
						this._setHiddenColumns(this._initialHiddenColumns, false, false);
					}
					this._setHiddenColumns(this._initialHiddenColumns, true, true);
					// M.H. 18 July 2012 Fix for bug #113972
					if (this._initialHiddenCells !== undefined && this._initialHiddenCells.length > 0) {
						$.each(this._initialHiddenCells, function (index, cell) {
							cell.css('display', '');
						});
					}
					// M.H. 15 Sep 2012 Fix for bug #105514
					$.each(this._initialHiddenColumns, function (index, column) {
						column._initiallyHidden = true;
					});
					this._initialHiddenCells = undefined;
					this._initialHiddenColumns = undefined;
				}
				// M.H. 27 April 2012 Fix for bug #108522 - it should be called datarendered after SetHidden columns is called
				this._registerAdditionalEvents();
				this._trigger(this.events.dataRendered, null, {owner: this});
				this._fireInternalEvent("_dataRendered");

				if (this._loadingIndicator === undefined) {
					this._initLoadingIndicator();
				}
				this._loadingIndicator.hide();
			}
			if (this._fixScrollY) {
				this.scrollContainer().css('overflow-y', this.rows().length > 1 ? 'hidden' : 'visible');
			}
            //A.T. 2 March 2012 - fix for bug #99081 
			// the grid doesn't have a width, but such has been set on the container, which means columns have widths
			// M.H. 23 March 2012 Fix for bug #105213
			if (this.options.width === null && this.container()[0] && this.container()[0].style.width) {
				cols = this.element.find("colgroup > col[data-skip]");
				if (cols.length > 0) {
					for (j = 0; j < cols.length; j++) {
						// A.T. 30 March Fix for bug #105039
						sum += parseInt(cols[j].style.width, 10);
					}
				}
				if (!this._origSum) {
					this._origSum = 0;
				}
				diff = sum - this._origSum;
				if (diff < 0) {
					diff = 0;
				}
				newW = parseInt(this.container()[0].style.width, 10) + diff;
                //A.T. 11 April - Fix performance issue - doing something.width() is a very expensive operation (because of what jQuery does under the hood)
				this.container().css("width", newW);
				//S.S. 10 May 2012 - in virtual grids there are more containers to be resized
				displayCont = $("#" + this.id() + "_displayContainer");
				if (displayCont.length > 0) {
					displayCont.css("width", newW - this._scrollbarWidth()).css("max-width", newW - this._scrollbarWidth());
					// resize header and footer due to cont virtualization
					$("#" + this.id() + "_headers_v").css("width", newW);
					$("#" + this.id() + "_footer_container").css("width", newW);
				}
				this._origSum = sum;
			}
			// scenarios where the first load is sending JSON, but the second time we are actually making an AJAX request (MVC for example)
			if (this.options.dataSourceUrl !== null && this._firstBind) {
				this.options.dataSource = this.options.dataSourceUrl;
				this.dataSource.settings.dataSource = this.options.dataSourceUrl;
				this.dataSource.settings.type = "remoteUrl";
				this.dataSource._runtimeType = this.dataSource.analyzeDataSource();
				this._firstBind = false;
				//A.T. 26 July 2011
				//this.options.dataSourceType = "remoteUrl";
			}
			if (!this._initialized) {
				this._trigger(this.events.rendered, null, {owner: this});
				// is this grid an hierarchical container or not
				this._hc = this.container().find('.ui-iggrid-expandheadercell').length > 0;
				this._initialized = true;
			}
			this._fireInternalEvent("_gridRendered", $('#' + gridElement[0].id + '_container'));
		},
		// returns true if any of the columns have a template set
		_hasColumnTemplates: function () {
			var i, hasTemplates = false, t;
			for (i = 0; i < this.options.columns.length; i++) {
				t = this.options.columns[i].template;
				if (t !== null && typeof (t) !== 'undefined' && t !== "" && t.length > 0) {
					hasTemplates = true;
					break;
				}
			}
			return hasTemplates;
		},
		_gridHasWidthInPixels: function () {
			if (typeof this.options.width === 'string' && this.options.width.indexOf('%') !== -1) {
				return false;
			}
			return parseInt(this.options.width, 10) > 0;
		},
		_gridHasWidthInPercent: function () {
			if (typeof this.options.width === 'string' && this.options.width.indexOf('%') !== -1) {
				return true;
			}
			return false;
		},
		_adjustLastColumnWidth: function (colgroupsRerendered) {
			// if fixed headers is enabled, we need to make sure the last column's width is adjusted appropriately
			// we have to do this here, because we don't know if we need a scroll bar or not, before data is actually rendered
			// if colgroupsRerendered is true this function should always be called 
			// after a corresponding call to renderColgroup as there are fields than need to be calculated there
			var grid = this,
				hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader && this._headerParent,
				hasFixedFooter = this.options.height !== null && this.options.fixedFooters === true && this.options.showFooter && this._footerParent,
				hasHeight = this.options.height && parseInt(this.options.height, 10) > 0,
				hasWidthInPixels = this._gridHasWidthInPixels(),
				hasWidthInPercent = this._gridHasWidthInPercent(),
				hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true,
				gridWidth,
				specialColumnsWidth;

			if (hasHeight && !hasVirtualization) {
				// A.T. the below line is very slow on IE. Therefore we need to do some magic to avoid reflow, which will be caused
				// by calling height() on the various elements which have many children. height() just calls offsetHeight, which is a performance killer on IE9
				// when invoked on elements with many children 
				if ((this.options.autoAdjustHeight && this.element.height() <= $('#' + this.element[0].id + '_scroll').height()) ||
						(!this.options.autoAdjustHeight && this.options.avgRowHeight * this.element[0].rows.length < parseInt(this.options.height, 10))) {
					this._hasVerticalScrollbar = false;
				} else {
					this._hasVerticalScrollbar = true;
				}
			}
			if (colgroupsRerendered) {
				if (hasVirtualization) {
					if (hasFixedHeader) {
						this._headerParent.css(this._padding, this._scrollbarWidth());
					}
					if (hasFixedFooter) {
						this._footerParent.css(this._padding, this._scrollbarWidth());
					}
				}
				if (hasWidthInPixels || hasWidthInPercent) {
					if (this._allColumnWidthsInPixels) {
						gridWidth = this._totalColPixelWidth;

						//take the special columns widths into account
						specialColumnsWidth = this._calculateSpecialColumnsWidth();

						if (specialColumnsWidth > 0) {
							if (this._autoadjustedColumn && this._lastColPixelWidth) {
								//if the last column was autofited we should substract the
								//special columns width from its width
								// S.S. May 18, 2012 We need to check if the autoadjustedcolumn was not expanded 
								// for a smaller amount than what comes from special columns
								if (this._autoadjustedColumn.difference < specialColumnsWidth) {
									this._lastColPixelWidth -= this._autoadjustedColumn.difference;
									gridWidth -= this._autoadjustedColumn.difference - specialColumnsWidth;
								} else {
									this._lastColPixelWidth -= specialColumnsWidth;
								}
								this._autoadjustedColumn.width = this._lastColPixelWidth;

								if (hasFixedHeader) {
									this._lastHeaderCol.css('width', this._lastColPixelWidth + 'px');
								}
								if (hasFixedFooter) {
									this._lastFooterCol.css('width', this._lastColPixelWidth + 'px');
								}
								this._lastDataCol.css('width', this._lastColPixelWidth + 'px');
                            } else {
								gridWidth += specialColumnsWidth;
							}
                        /* L.A. 05 June 2012. Fixing bug #113545 When grid's width is bigger than the sum of column widths 
                        and fixedHeaders=false the hidding icon of the last column is not visible. */
						} else if (!hasFixedHeader && this._hasVerticalScrollbar) {
                            gridWidth -= this._scrollbarWidth();
                            this._lastColPixelWidth -= this._scrollbarWidth();
							this._lastDataCol.css('width', this._lastColPixelWidth + 'px');
                        }
					} else if (hasWidthInPixels) {
						gridWidth = parseInt(grid.options.width, 10);
					} else if (hasWidthInPercent) {
						gridWidth = this.container().width();
					}

					if (!this._allColumnWidthsInPercentage || !hasWidthInPercent) {
						if (hasVirtualization === false) {
							this._gridInnerWidth = this.scrollContainer().width();
						} else {
							this._gridInnerWidth = //this.element.width() + this._scrollbarWidth();
								$("#" + this.element[0].id + "_displayContainer").width() + this._scrollbarWidth();
						}
						this._setGridContentWidth(gridWidth);
					}
				}
			} else {
				// even if columns are not rerendered we need to adjust the size of the horizontal 
				// scrollbar as this is called when height is adjusted which might render a vertical
				// scrollbar it wasn't taken into account in previous calculations.
				this._setGridContentWidth();
			}

			if (hasHeight && !hasVirtualization) {
				if (this.options.width !== null && this.options.height !== null) {
					if (this._hasVerticalScrollbar) {
						$("#" + this.element[0].id + "_hscroller").css('overflow-y', 'scroll');
					} else {
						$("#" + this.element[0].id + "_hscroller").css('overflow-y', 'hidden');
					}
				}

				if ((this._allColumnWidthsInPercentage && hasWidthInPercent) ||
						!(hasWidthInPixels || hasWidthInPercent)) {
					//if the grid has vertical scrollbar and no width or width in percent
					//and column widths in percent we should add padding
					//to the header and footer tables to align the columns properly
					if (this._hasVerticalScrollbar) {
						if (hasFixedHeader) {
							this._headerParent.css(this._padding, this._scrollbarWidth());
						}
						if (hasFixedFooter) {
							this._footerParent.css(this._padding, this._scrollbarWidth());
						}
					} else {
						if (hasFixedHeader) {
							this._headerParent.css(this._padding, '');
						}
						if (hasFixedFooter) {
							this._footerParent.css(this._padding, '');
						}
					}
				} else {
					//in all other casese the scrollbar is inside the last data column
					//and we need to add padding in the header/footer cells to align the icons
					//such that they do not go over the vertical scrollbar
					this._updateVerticalScrollbarCellPadding();
				}
			}
		},
		_initializeHeights: function () {
			// A.T. 6 April 2011 - changing this logic so that it's executed async in the background. This is just for re-setting the proper height of the scroll container,
			// in case there are other elements that take up space, such as paging footers, filter summaries, etc. 
			// with this approach , including setting overflow hidden to the container, and initializing the scroll container with the height of its parent, we don't get
			// the nasty visual flickerings and resetting of the scrollbar
			var initialHeight;
			if (this.options.height === null || this.options.height === undefined) {
				return;
			}
			initialHeight = parseInt(this.options.height, 10);
			//if ($.browser.msie && $('.ui-iggrid-footer', this.container()).length === 0) {
			if (this.options.height.indexOf && this.options.height.indexOf('%') !== -1) {
				$('#' + this.element[0].id + '_scroll').height('100%');
			} else {
				$('#' + this.element[0].id + '_scroll').height(initialHeight);
			}
			//	setTimeout($.proxy(this._initializeHeightsInternal, this), 1);
			//} else {
			this._initializeHeightsInternal();
			//}
		},
		_initializeHeightsInternal: function () {
			var children, height, i, $child, ch;
			ch = this.container().height();
			this._prevContainerHeight = ch;
			if (this.options.height !== null) {
				children = this.container().children();
				height = 0;
				for (i = 0; i < children.length; i++) {
					$child = $(children[i]);
					// also check for the "excludeFromHeight" attribute. Such elements are filter dropdowns, which are children of the grid container
					// and may appear visible once they are open, but we don't want to include them in any calculations
					if ((($child.attr('id') !== undefined && !$child.attr('id').endsWith('_scroll') &&
							!$child.attr("id").endsWith("_loading")) || !$child.attr('id')) && $child.is(':visible')
							&& $child.data('efh') !== '1') {
						// the caption's table shows height of 0 on all browsers ! 
						if ($child.is('table') && $child.children().first().is('caption')) {
							height += $child.children().first().outerHeight();
						} else {
							height += $child.outerHeight();
						}
					}
				}
				if (height > 0) {
					$('#' + this.element[0].id + '_scroll').height(ch - height);
				}
			}
		},
		_registerAdditionalEvents: function () {
			var css = 'ui-state-hover',
				topmostGrid = this.element.closest('.ui-iggrid-root').data('igGrid');

			if (topmostGrid === undefined) {
				topmostGrid = this;
			}

			// hovering (Hot Tracking) and unhovering
			$('#' + this.element[0].id + ' th.ui-state-default').hover(
				function () {
					//A.Y. bug 85240. Cancel hovering effects if we are resizing
					if (!topmostGrid._cancelHoveringEffects) {
						$(this).addClass('ui-state-hover');
					}
				},
				function () { $(this).removeClass('ui-state-hover'); }
			);
			if (this.options.enableHoverStyles) {
				this.element.bind(this._hovEvts = {
					mousemove: function (e) {
						var par, tag, tr = e.target;
						while (tr) {
							par = tr.parentNode;
							if ((tag = tr.nodeName) === 'TR' && par.nodeName === 'TBODY') {
								break;
							}
							tr = (tag === 'TABLE') ? null : par;
						}
						if (_hovTR !== tr) {
							// A.T. data-container=true => child row container. don't hover such rows. 
							if (_hovTR && $(_hovTR).attr('data-container') !== "true") {
								$('td', _hovTR).removeClass(css);
							}
							//I.I. bug fix for 100872 (if virtualization is on for child grid, hovering the scroller should not hover all the child grid's tds
							if (tr && $(tr).attr('data-container') !== "true" &&
									e.target.id.indexOf('_scrollContainer') === -1 &&
									e.target.parentNode.id.indexOf('_scrollContainer') === -1) {
								if (!topmostGrid._cancelHoveringEffects) {
									$('td', tr).addClass(css);
								}
							}
							_hovTR = tr;
						}
					},
					mouseleave: function (e) {
						if (_hovTR) {
							$('td', _hovTR).removeClass(css);
							_hovTR = null;
						}
					}
				});
			}
		},
		_renderColgroup: function (table, isHeader, isFooter, autofitLastColumn) {
			var colgroup,
				i,
				cols = this._visibleColumns(),
				defWidth = this.options.defaultColumnWidth,
				totalColWidth = 0,
				totalGridWidth,
				hasWidthInPixels = this._gridHasWidthInPixels(),
				hasWidthInPercent = this._gridHasWidthInPercent(),
				hasWidth = hasWidthInPixels || hasWidthInPercent,
				hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true,
				//I.I. bug fix for 107132
                hasColumnVirtualization = (this.options.virtualization === true && this.options.virtualizationMode === 'fixed') || this.options.columnVirtualization === true,
				hasColumnsWithNoWidth = false,
				isPercentage = true,
				desiredColWidth,
				desiredColWidthNumber,
				lastCol,
				lastColWidth,
				difference;

			// we render colgroup if there are columns defined and autoGenerateColumns is false
			colgroup = $(table).find('colgroup');
			if (colgroup.length === 0) {
				colgroup = $("<colgroup></colgroup>").prependTo(table);
			}
			// if we use virtualization we need cols just for the number of visible columns
			// M.H. 10 April 2012 Fix for bug #107566
			if ((hasVirtualization && this.options.virtualizationMode === 'fixed') || hasColumnVirtualization) {
				this._updateVirtColCounters();
				cols = cols.slice(0, this._virtualColumnCount);
			}

			for (i = 0; i < cols.length; i++) {
				if (cols[i].width) {
					desiredColWidth = cols[i].width;
				} else {
					desiredColWidth = defWidth;
					cols[i].width = defWidth;
				}

				if (desiredColWidth) {
					if (!desiredColWidth.charAt || !desiredColWidth.endsWith('%')) {
						isPercentage = false;
					}

					desiredColWidthNumber = parseInt(desiredColWidth, 10);
					if (desiredColWidthNumber <= 0) {
						desiredColWidthNumber = undefined;
					}
				} else {
					desiredColWidthNumber = undefined;
					isPercentage = false;
				}

				if (desiredColWidthNumber) { //desired column width is defined as pixels or percentage
					lastCol = $("<col></col>").appendTo(colgroup).css("width", desiredColWidth);
					lastColWidth = desiredColWidthNumber;

					//calculating the total sum of all widths or percentages
					totalColWidth += desiredColWidthNumber;
				} else {
					lastCol = $("<col></col>").appendTo(colgroup);
					lastColWidth = undefined;
					hasColumnsWithNoWidth = true;
				}
			}

			if (!hasColumnVirtualization && autofitLastColumn && hasWidth && !hasColumnsWithNoWidth && lastColWidth) {
				// account for the special case where the grid has a width defined and widths defined for each column
				// but the total sum of column widths is less than the width of the grid(or not 100 for percentages), 
				// then we need to "expand" the last column to fill in the remaining blank space (so that it is not blank)

				if (isPercentage) {
					if (totalColWidth < 100) {
						lastColWidth += 100 - totalColWidth;
						lastCol.css('width', lastColWidth + '%');

						//set the new width as last column width
						this._autoadjustedColumn = cols.slice(-1)[0];
						this._autoadjustedColumn.width = lastColWidth + '%';
					}
				} else {
					if (hasWidthInPixels) {
						totalGridWidth = parseInt(this.options.width, 10);
					} else if (hasWidthInPercent) {
						totalGridWidth = this.container().width();
					}

					if (totalGridWidth && totalGridWidth > totalColWidth) {
						difference = totalGridWidth - totalColWidth;
						lastColWidth += difference;
						totalColWidth += difference;
						lastCol.css('width', lastColWidth + 'px');

						//set the new width as last column width
						this._autoadjustedColumn = cols.slice(-1)[0];
						this._autoadjustedColumn.width = lastColWidth + 'px';
						this._autoadjustedColumn.difference = difference;
					}
				}
			} else {
				this._autoadjustedColumn = undefined;
			}

			//A.Y. bug 102220. When the grid has column virtualization and width
			//the scrollbar's width should be substracted from the last column's width
			// M.H. 2 April 2012 Fix for bug #107567 - it should not be only for isHeader(it should be for footer too)
			// S.S. May 17, 2012 The vertical scrollbar should be substracted from the last column's width at all times
			// otherwise the user needs to account for it's presence to determine a proper width for his grid and not get
			// a horizontal scroll bar (either virtual or normal)
			if (hasWidth && hasVirtualization && !hasColumnsWithNoWidth && lastColWidth) {
				if (!isPercentage) {
					lastColWidth -= this._scrollbarWidth();
					lastCol.css('width', lastColWidth + 'px');
				}
			}

			if (isHeader) {
				this._lastHeaderCol = lastCol;
			}
			if (isFooter) {
				this._lastFooterCol = lastCol;
			}
			if (!isHeader && !isFooter) {
				this._lastDataCol = lastCol;
			}

			this._allColumnWidthsInPercentage = isPercentage && !hasColumnsWithNoWidth && cols.length > 0;
			this._allColumnWidthsInPixels = !isPercentage && !hasColumnsWithNoWidth && cols.length > 0;
			if (this._allColumnWidthsInPixels) {
				this._lastColPixelWidth = lastColWidth;
				this._totalColPixelWidth = totalColWidth;
			} else {
				this._lastColPixelWidth = undefined;
				this._totalColPixelWidth = undefined;
			}
		},
		// generate a rowTemplate given some columns have a "template" set. 
		_buildRowTemplateRaw: function () {
			var tmpl = "<tr>", i, c = this.options.columns;
			for (i = 0; i < c.length; i++) {
				if (c[i].template) {
					tmpl += "<td>" + c[i].template + "</td>";
				} else {
					// K.D. August 21st, 2012 Bug #119317 The checkBox is not rendered when column template is used in the grid.
					tmpl += "<td>{{html " + c[i].key + "}}</td>";
				}
			}
			tmpl += "</tr>";
			return tmpl;
		},
		_generateRowTemplate: function () {
			var key, type, format, auto = this.options.autoFormat, ar = this.options.accessibilityRendering, firstRec = null, grid = this, i, prop, tmplName, tmpl = grid.options.rowTemplate, cols = grid.options.columns, id = 'data-id="${ig_pk}"';
			if (this.options.virtualization && this.options.virtualizationMode === 'continuous') {
				id += ' data-row-idx="${ig_abs_idx}"';
			}
				//tmpl = grid.options.rowTemplate, cols = grid.options.columns, id = 'data-id="${$item.data.ig_pk}" ';
			if (this._tmpl) {
				return this._tmpl;
			}
			if (grid.dataSource.dataView().length > 0) {
				firstRec = grid.dataSource.dataView()[0];
			}
			if (tmpl) {
				i = tmpl.indexOf('<tr');
				if (i >= 0 && tmpl.indexOf('.ig_pk') < 0) {
					tmpl = tmpl.substring(0, i + 3) + ' ' + id + tmpl.substring(i + 3);
				}
				for (i = 0; i < cols.length; i++) {
					key = cols[i].key;
					if (cols[i].formatter) {
						format = '${$item.' + key + 'Formatter(this.data ? this.data.' + key + ' : undefined)}';
					} else {
						format = cols[i].format;
						type = cols[i].dataType;
						type = (type === 'date' || type === 'number') ? type : '';
						if (format || ((auto === true || auto === 'dateandnumber') && type) || (auto && auto === type)) {
							// possible {0} may raise exception in $.template: replace it by [0] and add check in $.ig.formatter
							format = '${' + key + '}';
						}
					}
					if (format) {
						// patterns: ${key}, $ {key}, ${  key}, etc.
						tmpl = tmpl.replace(new RegExp('\\$ *\\{ *' + key + ' *\\}', 'g'), format);
					}
				}
			} else {
				if (ar) {
					tmpl = '<tr role="row" ';
				} else {
					tmpl = '<tr ';
				}
				tmpl += id;
				// now that we are not using nth-child, we must make sure we preserve zebra styling 
				//if ($.browser.msie) {
				if (this.options.alternateRowStyles) {
					tmpl += "class=\"{{if $i % 2 === 0}}\'\'{{else}}" + this.css.recordAltClass + "{{/if}}\">";
				} else {
					tmpl += ">";
				}
				if (cols.length > 0) {
					if (firstRec === null || (firstRec.hasOwnProperty(cols[0].key) && $.type(firstRec) !== "array")) {
						for (i = 0; i < cols.length; i++) {
							key = cols[i].key;
							if (ar) {
								tmpl += '<td role=gridcell aria-describedby="' + key + '">';
							} else {
								tmpl += '<td>';
							}
							if (cols[i].formatter !== undefined) {
								tmpl += '${$item.' + key + 'Formatter(this.data ? this.data.' + key + ' : undefined)}</td>';
							} else {
								format = cols[i].format;
								type = cols[i].dataType;
								type = (type === 'date' || type === 'number') ? type : '';
								if (format || ((auto === true || auto === 'dateandnumber') && type) || (auto && auto === type)) {
									// possible {0} may raise exception in $.template: replace it by [0] and add check in $.ig.formatter
									tmpl += '${' + key + '}</td>';
								} else if (type === 'bool') {
									tmpl += '${' + key + '}</td>';
								} else {
									tmpl += '${' + key + '}</td>';
								}
							}
						}
					// arrays 
					} else {
						tmpl += '{{each $data}}';
						if (ar) {
							tmpl += '<td role="gridcell">${this}</td>';
						} else {
							tmpl += '<td>${this}</td>';
						}
						tmpl += '{{/each}}';
					}
				} else {
					//try to figure it out automatically
					//take the first row, and figure out the template manually
					//if (grid.options.dataSource.length > 0) {
					if (grid.dataSource.dataView().length > 0) {
						for (prop in firstRec) {
							if (firstRec.hasOwnProperty(prop)) {
								if (ar) {
									tmpl += '<td role="gridcell">${' + prop + '}</td>';
								} else {
									tmpl += '<td>${' + prop + '}</td>';
								}
							}
						}
					} else {
						// log an error
						throw new Error($.ig.DataSourceLocale.locale.cannotBuildTemplate);
					}
				}
				tmpl += "</tr>";
			}
			tmplName = this.element[0].id + "rowTemplate";
			// K.D. February 13th, 2012 Removing this line with the implementation of the new templating engine
			//$.template(tmplName, tmpl);
			this._tmpl = tmpl;
			return tmpl;
		},
		_renderRecords: function (start, end) {
			//console.log('_renderRecords');
			var prime, grid = this, tbody = this.element.children("tbody"), tmpl, ph, rs,
				ds = this.dataSource.dataView(), i, d = "", noCancel = true, tbodytmp;
			// S.S. August 21, 2012, Bug #113279 Adding the continuous virtualization markers to the event args so features 
			// that need those to render correctly can use them
			noCancel = this._trigger(this.events.rowsRendering, null, {owner: $.extend(this, { cvSr: start, cvEr: end }), tbody: tbody});
			if (start === undefined) { //no params => render all
				start = 0;
				end = ds.length - 1;
			}
			if (start !== undefined && end === undefined) {
				end = start;
				if (end > ds.length - 1) {
					end = ds.length - 1;
				}
				start = 0;
			}
			if (start < 0) {
				start = 0;
			}
			if (end > ds.length - 1) {
				end = ds.length - 1;
			}
			if (noCancel) {
				if (!grid.options.rowTemplate || grid.options.rowTemplate.length <= 0) {
					for (i = start; i <= end; i++) {
						d += grid._renderRecord(ds[i], i);
					}
					if (!this._canreplaceinner || $.browser.webkit) { // Chrome is a special case, with it innerHTML is actually slower 
						ph = document.createElement("div");
						ph.innerHTML = "<table><tbody>" + d + "</tbody></table>";
						tbodytmp = ph.firstChild.firstChild;
						this.element[0].replaceChild(tbodytmp, tbody[0]);
					} else if (this._canreplaceinner) {
						tbody[0].innerHTML = d;
					}
					d = "";
					// K.D. March 1st, 2012 Bug #102180 Checking whether there is any data to template
				} else if (ds.length > 0) {
					tmpl = this._generateRowTemplate();
					// K.D. February 29th, 2012 Bug #102173 Row selectors are handled with a prop in the data source now
					if (tmpl.lastIndexOf('ui-iggrid-rowselector-class') > -1) {
						rs = true;
					}
					for (i = start; i <= end; i++) {
						prime = _aNull(this.options.primaryKey) ? ds[i].ig_pk : this._kval_from_key(this.options.primaryKey, ds[i]);
						ds[i].ig_pk = _aNull(prime) ? i : prime;
						if (this.options.virtualization && this.options.virtualizationMode === 'continuous') {
							ds[i].ig_abs_idx = i;
						}
						if (rs) {
							ds[i].ig_rs_idx = $.ig.rowNumberingFunctionDelegate(ds[i].ig_pk);
						}
						d += grid._renderRecord(ds[i], i);
						// if (this.options.alternateRowStyles) {
							// ds[i].ig_zebraStyle = i;
						// }
					}
					//ds = ds.slice(start, end + 1);
					//if (d.length > 0) {
					tbody.html(d);
					d = "";
					// } else {
						// ds = ds.slice(start, end + 1);
						// tbody.html($.ig.tmpl(tmpl, ds));
					// }

					if (rs) {
						for (i = 0; i < ds.length; i++) {
							ds[i].ig_rs_idx = null;
						}
					}

					// if (this.options.alternateRowStyles) {
						// for (i = 0; i < ds.length; i++) {
							// ds[i].ig_zebraStyle = null;
						// }
					// }
				}

				//_virtualDom should be built because features like selection expects it
                this._buildVirtualDomForContinuousVirtualization();

				this._trigger(this.events.rowsRendered, null, {owner: this, tbody: tbody});
			}
		},
		_buildFormatters: function () {
			var i, cols = this.options.columns, ret = {};
			for (i = 0; i < cols.length; i++) {
				if (cols[i].formatter !== undefined) {
					if ($.type(cols[i].formatter) === "function") {
						ret[cols[i].key + 'Formatter'] = cols[i].formatter;
					} else {
						ret[cols[i].key + 'Formatter'] = eval(cols[i].formatter);
					}
				}
			}
			return ret;
		},
		_getVisibleIndexByKey: function (columnKey) {
			var cols = this._visibleColumns(), index = -1;
			$.each(cols, function (ind, value) {
				if (value.key === columnKey) {
					index = ind;
					return false;
				}
			});
			return index;
		},
		_visibleColumns: function () {
			if (this._visibleColumnsArray === undefined) {
				//performance optimization as visibleColumns is called a lot
				this._visibleColumnsArray = $.grep(this.options.columns, function (col) { return !col.hidden; });
			}
			return this._visibleColumnsArray;
		},
		_renderVirtualRecordsFixed: function () {
			var i, j, tmpl, row, c, val, headersTexts, headerText, vheaderNode,
				iRow, tr, ds = this.dataSource, data = ds.dataView(), key = this.options.primaryKey,
				visibleCols = this._visibleColumns();
			// trigger event so that features can clean up itself (end editing for example)
			this._trigger('virtualrendering');
			if (this._startRowIndex === undefined || this._startRowIndex === null) {
				this._startRowIndex = 0;
			}
			if (this._startColIndex === undefined || this._startColIndex === null) {
				this._startColIndex = 0;
			}
			if (this._virtualDom === null || this._virtualDom === undefined) {
				this._buildVirtualDom();
				if (this.options.adjustVirtualHeights === true) {
					this._adjustVirtualHeights();
				}
			} else {
				//this._adjustVirtualHeights();
				for (i = 0; i < this._virtualRowCount && i < this._totalRowCount && this._startRowIndex + i < data.length; i++) {
					if (!this.options.rowTemplate || this.options.rowTemplate.length <= 0) {
						for (j = 0; j < this._virtualColumnCount; j++) {
							if (this.options.columns.length > 0) {
								val = data[this._startRowIndex + i][visibleCols[this._startColIndex + j].key];
								this._virtualDom[i][j].innerHTML = this._renderCell(val, visibleCols[this._startColIndex + j]);
							} else {
								val = data[this._startRowIndex + i][this._startColIndex + j];
								this._virtualDom[i][j].innerHTML = data[this._startRowIndex + i][this._startColIndex + j];
							}
							this._virtualDom[i][j].className = '';
						}
					} else {
						// A.T. 1 September 2011 - fix for bug #85082 (make sure if jQueryTemplating is not enabled we don't depend on any jquery templating code) 
						tmpl = this._generateRowTemplate();
						if ($.type(data[i]) === "array") {
							row = $($.ig.tmpl(tmpl, [data[this._startRowIndex + i]], this._buildFormatters()));
							//row = $.tmpl(tmpl, [data[this._startRowIndex + i]], this._buildFormatters());
						} else {
							row = $($.ig.tmpl(tmpl, data[this._startRowIndex + i], this._buildFormatters()));
							//row = $.tmpl(tmpl, data[this._startRowIndex + i], this._buildFormatters());
						}
						// loop through cells
						c = row.children();
						//for (j = 0; j < c.length; j++) {
						for (j = 0; j < this._virtualColumnCount; j++) {
							this._virtualDom[i][j].innerHTML = c[j + this._startColIndex].innerHTML;
							// reset classes
							//$(this._virtualDom[i][j]).attr('class', '');
							this._virtualDom[i][j].className = '';
						}
					}
					// fix for data-id
					iRow = this._startRowIndex + i;
					tr = this._virtualDom[i][0].parentNode;
					tr.className = ((i % 2 === 0 && this.options.alternateRowStyles) ? 'ui-iggrid-virtualrow ui-ig-altrecord' : 'ui-iggrid-virtualrow');
					if (data[iRow]) {
						if (!_aNull(key)) {
							tr.setAttribute('data-id', this._kval_from_key(key, data[iRow]));
						} else if (!_aNull(data[iRow].ig_pk)) {
							tr.setAttribute('data-id', data[iRow].ig_pk);
						}
					}
				}
			}
			// make sure to update the headers , too.
			if (this._isHorizontal) {
				this._isHorizontal = false;
				if ((this.options.virtualization === true || this.options.columnVirtualization === true) && parseInt(this.options.width, 10) > 0) {
					if (!this._vheaders) {
						headersTexts = this.headersTable().find('thead > tr > th > a > span:first-child');
						if (headersTexts.length > 0) {
							this._vheaders = headersTexts;
						} else {
							this._vheaders = this.headersTable().find('thead > tr > th > span');
						}
					}
					for (j = 0; j < this._virtualColumnCount; j++) {
						//L.A. 21 March 2012 Fixed bug 97377 - When using virtualization and the grid is scrolled horizontally, the IDs of the column header cells are not updated accordingly
						headerText = visibleCols[j + this._startColIndex].headerText;
						vheaderNode = $(this._vheaders[j]);
						vheaderNode.parent().attr('id', this.element[0].id + '_' + headerText);
						vheaderNode.html(headerText);
					}
				}
			}

			// trigger event so that features such as selection can apply the selection
			this._trigger('virtualrecordsrender', null, {owner: this, tbody: this.element.children("tbody"), dom: this._virtualDom});
		},
		_updateVirtColCounters: function () {
			var visibleColsLength = this._visibleColumns().length;
			if (this.options.columns) {
				this._totalColumnCount = visibleColsLength;
				this._maxVirtualColumnCount = this.options.columns.length;
			} else {
				this._totalColumnCount = this.dataSource.dataView()[0].length;
				this._maxVirtualColumnCount = this._totalColumnCount;
			}
			if (this.options.columnVirtualization === false && this.options.virtualization === false) {
				this._virtualColumnCount = visibleColsLength;
			} else {
				if (this.options.width === null) {
					this._virtualColumnCount = this._totalColumnCount;
				} else {
					this._virtualColumnCount = Math.ceil(parseInt(this.options.width, 10) / this._avgColumnWidth());
					this._maxVirtualColumnCount = Math.min(this._maxVirtualColumnCount, this._virtualColumnCount);
					this._virtualColumnCount = Math.min(this._totalColumnCount, this._virtualColumnCount);
					// update the horizontal scrollbar inner width (div)
					$('#' + this.id() + '_horizontalScrollContainer').children().first().css('width', this._calculateContainerWidth(false));
				}
			}
		},
		_buildVirtualDom: function () {
			var grid = this, markup = '', row, i, j, dataLinkFn, ar = this.options.accessibilityRendering, shouldHide = false,
				visibleCols = this._visibleColumns(), key = this.options.primaryKey, data = this.dataSource.dataView();
			if (this._startRowIndex === undefined || this._startRowIndex === null) {
				this._startRowIndex = 0;
				this._startColIndex = 0;
				this._oldStartRowIndex = 0;
				this._oldStartColIndex = 0;
			}
			this._virtualDom = [];
			this._totalRowCount = data.length;
			if (this.options.height === null) {
				this._virtualRowCount = this._totalRowCount;
			} else {
				this._virtualRowCount = Math.ceil(parseInt(this.options.height, 10) / parseInt(this.options.avgRowHeight, 10), 10);
			}

			this._updateVirtColCounters();

			if (this.options.height !== null) {
				$('#' + this.element[0].id + '_scrollContainer').children().first().height(this._totalRowCount * parseInt(this.options.avgRowHeight, 10));
			}
			dataLinkFn = function (row, i, vc) {
				var j;
				//$(row).children().each(function (col) {
					//$(this).data('row', i).data('col', col);
					// link references 
				//for (j = grid._startColIndex; j < vc + grid._startColIndex; j++) {
				for (j = 0; j < vc; j++) {
					if (j < grid._totalColumnCount) {
						grid._virtualDom[i][j] = row[0].cells[j];
					}
				}
				//});
			};
			this.element.children('tbody').empty();

			for (i = 0; i < this._virtualRowCount; i++) {
				shouldHide = false;
				this._virtualDom[i] = [];
				markup = '';
				for (j = this._startColIndex; j < this._virtualColumnCount + this._startColIndex; j++) {
					if (j >= this._totalColumnCount) {
						break;
					}
					if (ar) {
						markup += '<td role="gridcell" ';
					} else {
						markup += '<td ';
					}
					if (this.options.columns.length > 0) {
						if (ar) {
							markup += 'aria-describedby="' + visibleCols[j].key + '"';
						}
						if (!data[i]) {
							shouldHide = true;
						} else {
							if (this.options.autoFormat !== false) {
								if (this.options.rowTemplate && this.options.rowTemplate.length > 0) {
									markup += this._renderTemplatedCell(data[i], visibleCols[j]) + '</td>';
								} else {
									markup += '>' + this._renderCell(data[i][visibleCols[j].key], visibleCols[j]) + '</td>';
								}
							} else {
								markup += '>' + data[i][visibleCols[j].key] + '</td>';
							}
						}
					} else {
						if (!data[i]) {
							shouldHide = true;
						} else {
							markup += data[i][j] + '</td>';
						}
					}
				}
				row = $('<tr>' + markup + '</tr>').appendTo(this.element.children('tbody'));
				if (shouldHide) {
					row.css('visibility', 'hidden');
				}
				if (i % 2 === 0 && this.options.alternateRowStyles) {
					row.addClass('ui-ig-altrecord');
				}
				row.addClass('ui-iggrid-virtualrow');
				if (i % 2 === 0 && this.options.alternateRowStyles) {
					row.addClass('ui-ig-altrecord');
				}
				if (ar) {
					row.attr('role', 'row');
				}
				if (data[i]) {
					if (!_aNull(key)) {
						row.attr('data-id', this._kval_from_key(key, data[i]));
					} else if (!_aNull(data[i].ig_pk)) {
						row.attr('data-id', data[i].ig_pk);
					}
				}
				dataLinkFn(row, i, this._virtualColumnCount);
				// K.D. April 2nd, 2012 Bug #107070 "flag is not defined" error is thrown in jquery.tmlp.js when rowVirtualization=true
				// Breaking out of the loop if the dataView is smaller than the virtual column collection.
				if (i === data.length - 1) {
					break;
				}
		    }
			this._trigger('virtualdombuilt', null, {rows: this.element.children('tbody').children('tr')});
		},
		_adjustVirtualHeights: function () {
			var c = $('#' + this.element[0].id + '_displayContainer'), tbody = c.find('tbody'), h = tbody.children().first().height();
			if (this.options.height === null) {
				return;
			}
			// 1. adjust avgRowHeight
			if (this.options.avgRowHeight !== h) {
				this.options.avgRowHeight = h;
				// adjust the first child of the scroll container
				//$('#' + this.element[0].id + '_scrollContainer').children().first().height(this._totalRecordsCount * this.options.avgRowHeight);
				// recalc
				//this._virtualRowCount = parseInt(this.options.height, 10) / parseInt(this.options.avgRowHeight, 10);
				this._buildVirtualDom();
			}
		},
		_verticalScroller: function () {
			if (!this._verticalScrollerObj) {
				this._verticalScrollerObj = $('#' + this.element[0].id + '_scrollContainer').children().first();
			}
			return this._verticalScrollerObj;
		},
		// calculates the average column width. This is needed for horizontal virtual scrolling where we need to determine 
		// the visible virtual columns
		_avgColumnWidth: function () {
			var width = 0, cols = this.options.columns, count = cols.length, def = this.options.defaultColumnWidth, i;

			if (this.options.avgColumnWidth !== null) {
				return parseInt(this.options.avgColumnWidth, 10);
			}
			for (i = 0; i < count; i++) {
				width += parseInt(cols[i].width, 10);
			}
			if ((count === 0 || isNaN(width)) && def) {
				return parseInt(def, 10);
			}
			if (count > 0 && this.options.autoGenerateColumns && isNaN(width)) {
				if (this.options.width === null || this.options.width === undefined) {
					throw new Error($.ig.DataSourceLocale.locale.columnVirtualizationRequiresWidth);
				} else {
					return parseInt(this.options.width, 10) / count;
				}
			}
			if (width === 0 || (width < def)) {
				return def;
			}
			return width / count;
		},
		_scrollData: function () {
			// move the fixed header when the grid scrolling DIV moves
			var scroller = $('#' + this.element[0].id + '_hscroller'), scrollContainer;
			if (this.options.virtualization === true || this.options.rowVirtualization === true) {
				scrollContainer = $('#' + this.element[0].id + '_displayContainer');
			} else {
				scrollContainer = $('#' + this.element[0].id + '_scroll');
			}
			scrollContainer.scrollLeft(scroller.scrollLeft());
		},
		_scrollHeader: function () {
			// move the fixed header when the grid scrolling DIV moves
			var scroller = $('#' + this.element[0].id + '_hscroller'),
				headers = $('#' + this.element[0].id + '_headers').parent();
			headers.scrollLeft(scroller.scrollLeft());
		},
		_scrollFooter: function () {
			// move the fixed header when the grid scrolling DIV moves
			var scroller = $('#' + this.element[0].id + '_hscroller'),
				footers = $('#' + this.element[0].id + '_footer_container');
			footers.scrollLeft(scroller.scrollLeft());
		},
		_renderCaption: function () {
			var colgroup, caption;

			if (this.options.caption !== null) {
				if (this.container().find('.ui-iggrid-headercaption').length > 0) {
					return;
				}
				if (this.options.fixedHeaders === true && this.options.showHeader === true) {
					colgroup = this.headersTable().children('colgroup').first();
					if (colgroup.length === 0) {
						caption = $('<caption></caption>').prependTo(this.headersTable());
					} else {
						//A.Y. Bug 91574. The colgroup should always be the first element of the table.
						//If we already have a colgroup in the table we need to render the caption after it.
						caption = $('<caption></caption>').insertAfter(colgroup);
					}
					caption.text(this.options.caption).attr('id', this.element[0].id + '_caption').addClass(this.css.gridHeaderCaptionClass);
				} else {
					// we need to render the caption in a separate table, which will be a first child of grid's container. otherwise won't stick.
					// also if there are no headers, we need to have some table to put the caption in :)
					$('<caption></caption>').appendTo($('<table></table>').prependTo(this.container()).css('width', '100%').addClass(this.css.captionTable)).text(this.options.caption).attr('id', this.element[0].id + '_caption').addClass(this.css.gridHeaderCaptionClass);
				}
			}
		},
		_createHeaderColumnMarkup: function (column, index) {
			var headerClass = this.css.headerClass,
				ar = this.options.accessibilityRendering,
				headerText = $('<span>' + column.headerText + '</span>').addClass(this.css.headerTextClass),
				markup = '<th></th>',
				headerCell;

			if (ar) {
				headerCell = $(markup).append(headerText).attr('id', this.element[0].id + '_' + column.key).attr('role', 'rowheader').addClass(headerClass).data('columnIndex', index);
			} else {
				headerCell = $(markup).append(headerText).attr('id', this.element[0].id + '_' + column.key).addClass(headerClass).data('columnIndex', index);
			}

			return headerCell;
		},
		_updateHeaderColumnIndexes: function () {
			var grid = this,
				cols = this.options.columns;
			if ((this.options.virtualization === true && this.options.virtualizationMode === 'fixed') || 
				this.options.columnVirtualization === true) {
				cols = cols.slice(0, this._maxVirtualColumnCount);
			}
			grid._initialHiddenCells = [];
			$(cols).each(function (i) {
				$("#" + grid.element[0].id + '_' + this.key).data('columnIndex', i);
			});
		},
		_renderHeaderColumns: function (header) {
			var grid = this,
				cols = this.options.columns;

			// if we use virtualization we need headers just for the maximum number of visible columns
            //I.I. bug fix for 107686
			if ((this.options.virtualization === true && this.options.virtualizationMode === 'fixed') || this.options.columnVirtualization === true) {
				cols = cols.slice(0, this._maxVirtualColumnCount);
			}
			grid._initialHiddenCells = [];
			// render header with the column names , if they are not defined, leave it empty 
			$(cols).each(function (i) {
				var headerCell, key = this.key;
				if (key) {
					headerCell = grid._createHeaderColumnMarkup(this, i);
					header.append(headerCell);
					grid._trigger(grid.events.headerCellRendered, null, {owner: grid, th: headerCell, columnKey: this.key});
					// M.H. 10 July 2012 Fix for bug #113972 - set first to display none
					$.each(grid._initialHiddenColumns, function () {
						if (this.key === key) {
							grid._initialHiddenCells.push(headerCell);
							headerCell.css('display', 'none');
							return false;
						}
					});
				}
			});
		},
		renderMultiColumnHeader: function (cols) {
			/*
				paramType="array" an array of column objects
				When called the method re-renders the whole grid(also rebinds to the data source) and renders the cols object
			*/
			this.options.columns = cols;
			this.destroy(true);
			this._initialized = false;
			this.options.requiresDataBinding = true;
			// M.H. 5 Sep 2012 Fix for bug #120472
			this._renderHeaderCalled = false;
			this._create();
		},
		_renderHeader: function () {
			/*
				Event fires headerRendering and headerRendered event ONLY when showHeader is TRUE
				It is fired headerRenderedInternal event so it is used by the hierarchical grid - it should not be called headerRendered event because header should not be rendered
				but should be called headerRenderedInternal so the hierarchical grid to create expander column
			*/
			var header, id, headerDom, headerMarkup = "",
				scrollc = this.scrollContainer(),
				noCancel = true,
				headerParent = this.element[0], width,
				headerScrollDiv,
				existingHeader,
				o = this.options,
				v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;

			// M.H. 10 May 2012 Fix for bug #108221 - it should be called renderHeader ONLY one time and we use this flag
			this._renderHeaderCalled = true;
			// M.H. 10 May 2012 Fix for bug #108221
			if (this.options.showHeader) {
				noCancel = this._trigger(this.events.headerRendering, null, {owner: this});
				if (noCancel) {
					id = this.element[0].id;
					// in order to have fixed headers, we must have a height set at least 
					headerMarkup = "<thead><tr></tr></thead>";

					headerParent = this.container();
					width = scrollc.css('width');
					if (this.options.showHeader && this.options.fixedHeaders && this.options.height !== null) {
						// set header parent
						if (v === false) {
							if (headerParent.length === 0) {
								scrollc.removeClass(this.css.gridClasses).removeClass(this.css.baseClasses).css('width', '').wrap("<div id='" + id + "_container'></div>");
								headerParent = $('#' + id + '_container').addClass(this.css.baseClasses).addClass(this.css.gridClasses).css('width', width);
								this._isWrapped = true;
							}
						} else {
							// virtualization
							//I.I. bug fix for 103237
							width = this.element.parents('.ui-widget').css('width');
							headerParent = $('#' + id + '_headers_v').css('width', width);
							// M.H. 11 April 2012 Fix for bug #108438
							if (this.options.expandColWidth && !this.options.width) {
								headerParent.css('width', (parseInt(width, 10) + this.options.expandColWidth) + 'px');
							}
							//headerParent = $('#' + id + '_headers').css('width', width);
							if (o.width !== null) {
								headerParent.css('width', o.width).css('max-width', o.width).css('overflow-x', 'hidden');
							}
						}
						headerParent =
							$("<table id='" + id + "_headers'></table>")
							.prependTo(headerParent)
							.addClass(this.css.gridHeaderTableClass)
							.attr('cellpadding', 0)
							.attr('cellspacing', 0)
							.attr('border', '0');
						if (v === false) {
							// the fixed headers table should be inside another scrolling div
							headerScrollDiv = $("<div></div>").prependTo(headerParent.parent());
							headerScrollDiv
								.css('overflow', 'hidden')
								.css('position', 'relative')
								.css('white-space', 'nowrap');
							headerScrollDiv.addClass('ui-widget-header ui-helper-reset');
							headerScrollDiv.append(headerParent);
						} else if (this.options.rowVirtualization === true) {
							headerParent.addClass('ui-widget-header ui-helper-reset');
						}
						// now attach a handler on the grid scrolling container
						$("#" + this.element[0].id + "_hscroller")
							.bind("scroll", $.proxy(this._scrollHeader, this));
						this._renderColgroup(headerParent, true, false, this.options.autofitLastColumn);
					} else if (this.options.fixedHeaders !== true && this.options.showHeader) {
						headerParent = this.element;
					}
					// no scrolling
					if (this.options.width === null && this.options.height === null) {
						headerParent = this.element;
					}
					if (this.options.width !== null && this.options.height === null) {
						/* OK 13 OCT 2011 Fixed <91075> - When grid has only one row buttons Done,Cancel and Delete are not vissible */
						this._fixScrollY = 1;
						scrollc.css('overflow-y', 'hidden').css('overflow-x', 'auto');
						headerParent = this.element;
					}
					if (this._isMultiColumnGrid === true) {
						// it the grid has multicolumn headers then fire internal event. MulticolumnHeader widget is bound to this event and implements the logic for rendering
						this._headerParent = headerParent;
						this._fireInternalEvent("_renderingMultiColumnHeader");
						// M.H. 30 July 2012 Fix for bug #117466
						if (this.options.virtualization === true || this.options.rowVirtualization === true) {
							//append headers to the topmost table, so that they are fixed 
							$('#' + id + '_headers_v')
								.css('position', 'relative')
								//apply header styles as the div is now padded instead of the table
								.addClass('ui-widget-header ui-helper-reset')
								.addClass(this.css.baseClasses);
							headerParent.addClass(this.css.gridHeaderTableClass).attr('cellpadding', 0).attr('cellspacing', 0).attr('border', '0');
						}
					} else {
						if (this.options.showHeader) {
							if (this.options.headerTemplate === null || this.options.headerTemplate === undefined) {
								if (this.options.virtualization === true || this.options.rowVirtualization === true) {
									//append headers to the topmost table, so that they are fixed 
									$('#' + id + '_headers_v')
										.css('position', 'relative')
										//apply header styles as the div is now padded instead of the table
										.addClass('ui-widget-header ui-helper-reset')
										.addClass(this.css.baseClasses);

									headerParent.addClass(this.css.gridHeaderTableClass).attr('cellpadding', 0).attr('cellspacing', 0).attr('border', '0');
								}
								// L.A. 10 May 2012 Bug #110557 - check for existing header before adding a new one
								existingHeader = headerParent.find('>thead');
								if (existingHeader.length === 0) {
									header = $(headerMarkup).appendTo(headerParent).children().first();
								} else {
									existingHeader.empty();
									// L.A. 15 August 2012 Fixing bugs #118934, #74552
									header = $('<tr></tr>').appendTo(existingHeader);
								}
								this._renderHeaderColumns(header);
							} else {
								// check if there is a user defined template
								// the header template DOES NOT use jQuery templating, it's plain HTML with the actual column text there. 
								headerDom = this.options.headerTemplate;
								if (this.options.virtualization === true || this.options.rowVirtualization === true) {
									$(headerDom).children().each(function () {
										this.appendTo('#' + id + '_headers');
									});
									header = $('#' + id + '_headers').addClass(this.css.gridClasses);
								} else {
									header = $(headerMarkup).appendTo(headerParent).append(headerDom);
								}
							}
						}
						this._headerParent = headerParent;
						this._trigger(this.events.headerRendered, null, {owner: this, table: this.headersTable()});
						this._headerRenderCancel = false;
					}
				} else {
					this._headerRenderCancel = true;
				}
			}
			// M.H. 10 May 2012 Fix for bug #108221 - if headerRendering is called AND is canceled then it should not be called internal event headerRenderedInternal
			//if (this._headerRenderCancel !== true) {
			// M.H. 7 Aug 2012 Fix for bug #118444
			this._trigger("headerRenderedInternal", null, {owner: this, table: this.headersTable()});
			//}
		},
		_renderFooter: function () {
			var gridId = this.element[0].id,
				o = this.options,
				elemParent,
				footerId = gridId + '_footer_container',
				footerMarkup = '<tfoot class="' + this.css.gridFooterClass + '"></tfoot>',
				$footer = $('#' + footerId),
				$table,
				width,
				noCancel,
				tableGrid = this.element,
			  //  footerParent = this.element[0],
				$tableGridContainer;

			if (tableGrid.length === 0) {
				return;
			}

			// check whether footer container is rendered
			if ($footer.length === 0 && o.showFooter) {
				noCancel = this._trigger(this.events.footerRendering, null, {owner: this});

				if (noCancel) {
					// M.H. 2 April 2012 Fix for bug #107566
					if ((o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true)
							&& (
								(o.height !== null && o.height !== undefined) ||
								(o.width !== null && o.width !== undefined)
							)) {
						$tableGridContainer = $('#' + this.element[0].id + '_displayContainer');
						this.options.fixedFooters = true;

						$tableGridContainer = $('<tr><td colspan="2" style="border-width: 0px;"></td></tr>')
							.insertAfter($tableGridContainer.closest("tr"));
						//$footer = $('#' + footerId).find('tfoot');
						$footer = $('<div></div>')
							.attr('id', footerId)
							.css({'overflow': 'hidden', 'position': 'relative'})
							.addClass('ui-widget-footer')
							.addClass(this.css.footerContainer)
							.width(this.options.width)
							.appendTo($tableGridContainer.find('td'));
						$table = $('<table></table>')
							.attr('cellpadding', 0)
							.attr('cellspacing', 0)
							.attr('border', 0)
							.appendTo($footer)
							.addClass(this.css.gridFooterTableClass)
							.attr('id', gridId + '_footers');
						$table.width(o.width);
						this._renderColgroup($table, false, true, this.options.autofitLastColumn);
						$(footerMarkup).appendTo($table);
						// M.H. 10 April 2012 Fix for bug #108453
						if (this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null) {
							elemParent = this.element.parents('.ui-widget:first');
							if (elemParent.length === 1 && elemParent[0].style) {
								width = elemParent[0].style.width;
								if (width) {
									$footer.css('width', width);
								}
							}
						}
						// M.H. 11 April 2012 Fix for bug #108438
						if (o.expandColWidth && !o.width) {
							$footer.css('width', (parseInt($footer.width(), 10) + o.expandColWidth) + 'px');
						}
						$("#" + this.element[0].id + "_hscroller").bind("scroll", $.proxy(this._scrollFooter, this));
					} else if (o.fixedFooters === true && o.height !== null) {
						if (o.width !== null) {
							$tableGridContainer = $('#' + gridId + '_hscroller_container');
						} else {
							$tableGridContainer = $('#' + gridId + '_scroll');
						}
						// usually table is wrapped in scroll element - e.g. in case when width/height are set
						// when they are not set then tableGridContainer should be the table
						if ($tableGridContainer.length === 0) {
							$tableGridContainer = tableGrid;
						}
						$footer = $('<div></div>')
							.attr('id', footerId)
							.css({
								'overflow': 'hidden',
								'position': 'relative',
								'white-space': 'nowrap'
							})
							.addClass(this.css.footerContainer)
							.addClass('ui-widget-footer')
							.insertAfter($tableGridContainer);
						$table = $('<table></table>')
							.attr('cellpadding', 0)
							.attr('cellspacing', 0)
							.attr('border', 0)
							.appendTo($footer)
							.addClass(this.css.gridFooterTableClass)
							.attr('id', gridId + '_footers');
						this._renderColgroup($table, false, true, this.options.autofitLastColumn);
						$(footerMarkup).appendTo($table);

						if (o.virtualization !== true && o.rowVirtualization !== true && o.columnVirtualization !== true) {
							// if there is scrolling then table is wrapped in div element. 
							// attach to scroll event of this div element
							$("#" + this.element[0].id + "_hscroller")
								.bind("scroll", $.proxy(this._scrollFooter, this));
						}
					} else {
						$tableGridContainer = tableGrid;
						// according to W3C specification tfoot should be before tbody
						// table grid container should be the table where is rendered grid
						$footer = $(footerMarkup).attr('id', footerId).insertBefore($tableGridContainer.find('tbody:eq(0)'));
					}
					// M.H. 11 Oct. 2011 Fix for bug #91147
					$footer.css('display', 'none');

					this._footer = $footer;
					this._footerParent = $table;
					this._trigger(this.events.footerRendered, null, {owner: this, table: this.footersTable()});
				}
			}

			return $footer;
		},
		_renderRecord: function (data, rowIndex) {
			// generate a Tr and append it to the table
			var i, key = this.options.primaryKey, ar = this.options.accessibilityRendering,
				grid = this, dstr = "", cols = this.options.columns, noVisibleColumns;
			dstr += '<tr';
			if (rowIndex % 2 !== 0 && this.options.alternateRowStyles) {
				dstr += ' class="' + grid.css.recordAltClass + '"';
			}
			if (!_aNull(key)) {
				dstr += ' data-id="' + this._kval_from_key(key, data) + '"';
			} else if (!_aNull(data.ig_pk)) {
				dstr += ' data-id="' + data.ig_pk + '"';
			}
			//data index to which the row is bound
			if (this.options.virtualization && this.options.virtualizationMode === 'continuous') {
			    dstr += ' data-row-idx="' + rowIndex + '"';
            }
			if (ar) {
				dstr += ' role="row">';
			} else {
				dstr += '>';
			}
			if (cols.length > 0) {
				noVisibleColumns = true;
				$(cols).each(function (colIndex) {
					if (cols[colIndex].hidden) {
						return;
					}
					noVisibleColumns = false;
					if (ar) {
						dstr += '<td role="gridcell" aria-describedby="' + this.key + '"';
					} else {
						dstr += '<td';
					}
					// K.D. March 21st, 2012 Bug #105038 Branching the logic for when a rowTemplate is defined
					if (data[this.key] === undefined) {
						if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
							// K.D. May 8th, 2012 Templated string adds the > to cover templated attributes in the td
							dstr += ' ';
							dstr += grid._renderTemplatedCell(data, this);
						} else {
							dstr += '>';
							dstr += grid._renderCell(data[colIndex], this);
						}
						dstr += '</td>';
					} else {
						if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
							// K.D. May 8th, 2012 Templated string adds the > to cover templated attributes in the td
							dstr += ' ';
							dstr += grid._renderTemplatedCell(data, this);
						} else {
							dstr += '>';
							dstr += grid._renderCell(data[this.key], this);
						}
						dstr += '</td>';
					}
				});
				if (noVisibleColumns) {
					dstr += '<td role="gridcell"></td>';
				}
			} else {
				// check if array
				if ($.type(data) === "array") {
					for (i = 0; i < data.length; i++) {
						if (ar) {
							dstr += '<td role="gridcell">' + data[i] + '</td>';
						} else {
							dstr += '<td>';
							dstr += data[i];
							dstr += '</td>';
						}
					}
				} else {
					for (key in data) {
						if (data.hasOwnProperty(key)) {
							if (ar) {
								dstr += '<td role="gridcell" aria-describedby="' + key + '">' + data[key] + '</td>';
							} else {
								dstr += '<td>';
								dstr += data[key];
								dstr += '</td>';
							}
						}
					}
				}
			}
			dstr += '</tr>';
			return dstr;
		},
		_renderRecordInArray: function (darr, tbody, data, rowIndex) {
			// generate a Tr and append it to the table
			var i, key = this.options.primaryKey, ar = this.options.accessibilityRendering, grid = this, appendBehavior = false, cols = this.options.columns;
			if (darr === null) {
				darr = [];
				appendBehavior = true;
			}
			darr.push('<tr');
			if (rowIndex % 2 !== 0 && this.options.alternateRowStyles) {
				darr.push(' class="' + grid.css.recordAltClass + '"');
			}
			if (!_aNull(key)) {
				darr.push(' data-id="' + this._kval_from_key(key, data) + '"');
			} else if (!_aNull(data.ig_pk)) {
				darr.push(' data-id="' + data.ig_pk + '"');
			}
			if (ar) {
				darr.push(' role="row">');
			} else {
				darr.push('>');
			}
			if (cols.length > 0) {
				$(cols).each(function (colIndex) {
					if (cols[colIndex].hidden) {
						return;
					}

					if (ar) {
						darr.push('<td role="gridcell" aria-describedby="' + this.key + '"');
					} else {
						darr.push('<td');
					}
					// K.D. April 17th, 2012 Bug #109497 Template and non-template rendering is now branched in here
					if (data[this.key] === undefined) {
						if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
							// K.D. May 8th, 2012 Templated string adds the > to cover templated attributes in the td
							darr.push(' ');
							darr.push(grid._renderTemplatedCell(data, this));
						} else {
							darr.push('>');
							darr.push(grid._renderCell(data[colIndex], this));
						}
						//darr.push(grid._renderCell(data[colIndex], this));
						darr.push('</td>');
					} else {
						if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
							// K.D. May 8th, 2012 Templated string adds the > to cover templated attributes in the td
							darr.push(' ');
							darr.push(grid._renderTemplatedCell(data, this));
						} else {
							darr.push('>');
							darr.push(grid._renderCell(data[this.key], this));
						}
						//darr.push(grid._renderCell(data[this.key], this));
						darr.push('</td>');
					}
				});
			} else {
				// check if array
				if ($.type(data) === "array") {
					for (i = 0; i < data.length; i++) {
						if (ar) {
							darr.push('<td role="gridcell">' + data[i] + '</td>');
						} else {
							darr.push('<td>');
							darr.push(data[i]);
							darr.push('</td>');
						}
					}
				} else {
					for (key in data) {
						if (data.hasOwnProperty(key)) {
							if (ar) {
								darr.push('<td role="gridcell" aria-describedby="' + key + '">' + data[key] + '</td>');
							} else {
								darr.push('<td>');
								darr.push(data[key]);
								darr.push('</td>');
							}
						}
					}
				}
			}
			darr.push('</tr>');

			if (appendBehavior) {
				tbody.append(darr.join(''));
			}
		},
		_fixDate: function (val, col) {
			var d, i;
			if (!col || !val) {
				return val;
			}
			if (col.dataType === 'date' && !val.getTime) {
				if ((i = val.indexOf ? val.indexOf('ate(') : -1) > 0) {
					d = val.substring(i + 4);
					i = d.indexOf(')');
					if (i > 0) {
						d = parseInt(d.substring(0, i), 10);
						if (!isNaN(d)) {
							val = new Date(d);
						}
					}
				}
			}
			return val;
		},
		// handles formatting
		_renderCell: function (val, col) {
			var type = col.dataType, format = col.format, o = this.options, auto = o.autoFormat;
			val = this._fixDate(val, col);
			if (col.formatter) {
				return col.formatter(val);
			}
			// K.D. August 21st, 2012 Bug #119317 The checkBox is not rendered when column template is used in the grid.
			if (!format && type === 'bool' && o.renderCheckboxes && true) {
				format = 'checkbox';
			}
			if (format === 'checkbox' && type !== 'bool') {
				format = null;
			}
			type = (type === 'date' || type === 'number') ? type : '';
			if (format || ((auto === true || auto === 'dateandnumber') && type) || (auto && auto === type)) {
				// K.D. August 21st, 2012 Bug #119317 The checkBox is not rendered when column template is used in the grid.
				return $.ig.formatter(val, type, format, true, o.enableUTCDates);
			}
			return (val || val === 0 || val === false) ? val.toString() : '&nbsp;';
		},
		_renderTemplatedCell: function (val, col) {
			var v, d = $.extend(true, [], val), t;
			if (val[col.key] === undefined) {
				if (col.unbound === true) {
					v = '&nbsp;';
				} else {
					v = this._renderCell(val, col);
				}
			} else {
				v = this._renderCell(val[col.key], col);
			}
			// implements own templating
			if (this._tmap === null) {
				this._initializeTmap();
			}
			t = $.type(d[col.key]);
			if (t !== 'object' && t !== 'array') {
				d[col.key] = v;
			}
			return $.ig.tmpl(this._tmap[col.key], d);//(this._tmap[col.key].replace("${" + col.key + "}", v);
		},
		_initializeTmap: function () {
			var tmpl = this.options.rowTemplate, i, cols = this.options.columns, tds, templatePart;
			this._tmap = [];
			if (this.options.rowTemplate === null || this.options.rowTemplate === undefined || this.options.rowTemplate === "") {
				throw new Error($.ig.Grid.locale.templatingEnabledButNoTemplate);
			}
			// must ensure that the template is correct, i.e. the number of TDs matches the column count
			tmpl = tmpl.replace("<tr>", "").replace("</tr>", "");
			//tds = $.trim(tmpl).replace(/\s/g, "").split("</td>");
			// A.T. 21 Dec fix for bug #96962 
			tds = $.trim(tmpl).split("</td>");
			for (i = 0; i < cols.length; i++) {
				//rexp = new RegExp('\\$ *\\{ *' + cols[i].key + '*\\}', 'g');
				// find the right template part
				// K.D. Switching the implementation of to match the template with the corresponding column index
				// templatePart = null;
				// for (j = 0; j < tds.length; j++) {
					// if (tds[j].indexOf("{" + cols[i].key + "}") !== -1) {
						// templatePart = $.trim(tds[j].replace("<td>", ""));
						// break;
					// }
				// }
				// if (templatePart === null) {
				templatePart = $.trim(tds[i].replace("<td", ""));
				// }
				// K.D. March 19th, 2012 Bug #105088 Removing rexp replace, because rexp is never defined
				this._tmap[cols[i].key] = templatePart;
			}
		},
	    // cross-browser calculation to check for the scrollbar width. we need this when creating the virtualization-enabled grid's layout 
	    _scrollbarWidth: function () {
		    if (!this._scrollbarWidthResolved) {
			    var $div = $('<div id="' + this.element.attr('id') + '_tmp"></div>').css({ width: 50, height: 50, position: 'absolute', top: -500, left: -500 }).prependTo('body')
					.append('<div></div>').find('div').css({ height: 100 }),
					w1, w2;
				if ($.browser.msie && $.browser.version.slice(0, 1) === '7') {
					w1 = $div.innerWidth();
					$div.parent().css('overflow-y', 'scroll');
					w2 = $div.innerWidth();
					this._scrollbarWidthResolved = w1 - w2;
				} else {
					$div.parent().css({ overflow: 'auto' });
					$div.css({ width: '100%' });
					this._scrollbarWidthResolved = 50 - $div.width();
				}
				$("#" + this.element.attr('id') + "_tmp").remove();
		    }
		    return this._scrollbarWidthResolved;
	    },
		_fireInternalEvent: function (name, args) {
			var i, f, featureName, feature;
			for (i = 0; i < this.options.features.length; i++) {
				f = this.options.features[i];
				if (f !== undefined && f !== null && f.name !== undefined) {
					featureName = 'igGrid' + f.name;
					feature = this.element.data(featureName);
					if (feature !== null && feature !== undefined
							&& feature[name]) {
						if (args) {
							feature[name](args);
						} else {
							feature[name]();
						}
					}
				}
			}
		},
		_initFeature: function (featureObject, dataOptions, destroy) {
			if (!featureObject) {
				return;
			}
			// construct widget name
			if (featureObject.name === undefined) {
				return;
			}
			var widget = 'igGrid' + featureObject.name;
			// validate widget
			if ($.type($('#' + this.element[0].id)[widget]) !== "function") {
				throw new Error($.ig.Grid.locale.noSuchWidget + ' ' + widget);
			}
			// M.H. 3 July 2012 Fix for bug #115938
			if (this.element.data(widget)) {
				$('#' + this.element[0].id)[widget]('destroy');
			}
			// instantiate widget
			//A.T. 4 Jan 2011			
			$('#' + this.element[0].id)[widget](featureObject);
			this.element.data(widget)._injectGrid(this);
		},
		_initFeatureSettings: function (featureObject) {
			if (!featureObject) {
				return;
			}
			// construct widget name
			if (featureObject.name === undefined) {
				return;
			}
			var widget = 'igGrid' + featureObject.name;
			// validate widget
			if ($.type($('#' + this.element[0].id)[widget]) !== "function") {
				throw new Error($.ig.Grid.locale.noSuchWidget + ' ' + widget);
			}
			// L.A. 31 July 2012 Fixing bug #113983 After a 'destroy' of a feature, 'dataBind' throws a js error
			if (this.element.data(widget)) {
				this.element.data(widget)._injectGrid(this, true);
			}
		},
		_onFeaturesSoftDirty: function (e, args) {
			var i, feature;
			if (args.owner.options.type !== 'remote') {
				return;
			}
			for (i = 0; i < this.options.features.length; i++) {
				feature = $('#' + this.element[0].id).data('igGrid' + this.options.features[i].name);
				if (feature && feature !== args.owner && feature.options && feature.options.type === 'local') {
					if (feature._onUIDirty && $.type(feature._onUIDirty) === 'function') {
						feature._onUIDirty(e, args);
					}
				}
			}
		},
		_kval_from_key: function (key, data) {
			var k, k_val = "", i;
			if (key.indexOf(",") !== -1) {
				k = key.split(",");
				for (i = 0; i < k.length; i++) {
					k_val += data[k[i]];
					if (i < k.length - 1) {
						k_val += ",";
					}
				}
			} else {
				k_val = data[key];
			}
			return k_val;
		},
		// returns key of row, or index of row, or last index of rows
		_rowId: function (rec, index) {
			var key = this.options.primaryKey;
			key = key ? this._kval_from_key(key, rec) : null;
			if (!key) {
				key = index;
				if (key !== 0) {
					key = this.rows().length - 1;
				}
			}
			return key;
		},
		_inferOpType: function () {
			// infer the default feature operation type, if it is not explicitly specified by the developer
			// that will be done based on the data source type after it's analyzed
			if (this.options.dataSourceUrl || this.dataSource.type() === "remoteUrl") {
				return "remote";
			}
			return "local";
		},
		//virtualization: branches the virtualization rendering according to the virtualizationMode
		_renderVirtualRecords: function () {
			// trigger event so that features can clean up itself (end editing for example)
			this._trigger('virtualrendering');
			var mode = this.options.virtualizationMode;
			if (mode === undefined || mode === '') {
				mode = 'continuous';
			}
			// M.H. 10 April 2012 Fix for bug #107566
			if (mode === 'fixed' || this.options.columnVirtualization === true) {
				this._renderVirtualRecordsFixed();
			} else if (mode === 'continuous') {
				this._renderVirtualRecordsContinuous();
			}
			// trigger event so that features such as selection can apply the selection
			this._trigger('virtualrecordsrender', null, {owner: this, dom: this._virtualDom});
		},
		_getHScrollContainerInner: function () {
			var ret = $("#" + this.element[0].id + "_hscroller_inner");
			if (ret.length === 0 && this.options.virtualizationMode === "continuous") {
				ret = $('#' + this.element[0].id + '_horizontalScrollContainer div');
			}
			return ret;
		},
		_getScrollContainerHeight: function () {
			return $('#' + this.element[0].id + '_scrollContainer').children(':first-child').height();
		},
		_getDisplayContainerHeight: function () {
			return $('#' + this.element[0].id + '_displayContainer').height();
		},
		_getDisplayContainerWidth: function () {
			return $('#' + this.element[0].id + '_displayContainer').width();
		},
        _setDisplayContainerWidth: function (width) {
			if (width === undefined) {
				return;
			}
			$('#' + this.element[0].id + '_displayContainer').css('max-width', width);
			$('#' + this.element[0].id + '_displayContainer').width(width);
        },
        _getVHeadersWidth: function () {
            return $('#' + this.element[0].id + '_headers_v').width();
        },
        _setVHeadersWidth: function (width) {
            if (width === undefined) {
                return;
            }

            $('#' + this.element[0].id + '_headers_v').width(width);
        },
		_setScrollContainerHeight: function (height) {
			if (height === undefined) {
				return;
			}
			$('#' + this.element[0].id + '_scrollContainer').children(':first-child').height(height);
		},
		_setScrollContainerScrollTop: function (top) {
			if (top === undefined) {
				return;
			}
			$('#' + this.element[0].id + '_scrollContainer').scrollTop(top);
		},
		_getScrollContainerScrollTop: function () {
			return $('#' + this.element[0].id + '_scrollContainer').scrollTop();
		},
		_setDisplayContainerScrollTop: function (top) {
			if (top === undefined) {
				return;
			}
			$('#' + this.element[0].id + '_displayContainer').scrollTop(top);
		},
		_getDisplayContainerScrollTop: function () {
			return $('#' + this.element[0].id + '_displayContainer').scrollTop();
		},
		_setDisplayContainerScrollLeft: function (left) {
			if (left === undefined) {
				return;
			}

			$('#' + this.element[0].id + '_displayContainer').scrollLeft(left);
		},
		_getDisplayContainerScrollLeft: function () {
			return $('#' + this.element[0].id + '_displayContainer').scrollLeft();
		},
		//continuous virtualization: calculates average row height
		_calculateAvgRowHeight: function () {
			var rowHeightSum = $('#' + this.element[0].id + ' > tbody').height();
			return rowHeightSum / this._virtualRowCount;
		},
		////continuous virtualization: gets the visible area of the displayed container
		_getDisplayContainerVisibleArea: function () {
			var scrollTop = this._getDisplayContainerScrollTop(), height = this._getDisplayContainerHeight();
			return {top : scrollTop, bottom : (scrollTop + height)};
		},
		//continuous virtualization: tries to scroll, if not successful loads new portion of data
		virtualScrollTo: function (virtualScrollerY) {
			var tableId, firstRow, lastRow, scrollData, scrollResult;

			if (virtualScrollerY === this._oldScrollTop) {
				return;
			}
			tableId = '#' + this.element[0].id;
			firstRow = $(tableId + ' > tbody > tr:first');
			lastRow = $(tableId + ' > tbody > tr:last');

            //I.I. bug fix for 104538
            if (firstRow.length === 0 || lastRow.length === 0) {
                return;
            }

			scrollData = {
				virtualScrollerY : this._getScrollContainerScrollTop(),
				deltaScroll : virtualScrollerY - this._oldScrollTop,
				firstRow : firstRow,
				lastRow : lastRow,
				firstRowDataIndex : parseInt(firstRow.attr('data-row-idx'), 0),
				lastRowDataIndex : parseInt(lastRow.attr('data-row-idx'), 0),
				visibleArea : this._getDisplayContainerVisibleArea()
			};
			scrollResult = {action : 'SA_INITIAL'};
			if (!this._tryScroll(scrollData, scrollResult)) {
				this._rebuildVirtualRows(scrollData, scrollResult);
			}
			this._correctScrollPosition(this._getTotalRowsCount());
		},
		//continuous virtualization: returns the length of the datasource; 
		//this method is overriden by the groupby feature since groupby uses different datasource, hence the length is calculated differently
		_getTotalRowsCount: function () {
			return this.dataSource.dataView().length;
		},
		//continuous virtualization: tries to scroll to a given position and returns whether the scroll is successful. 
		//If the scroll is not successful the method returns what action should be performed to display the required data
		_tryScroll: function (scrollData, scrollResult) {
			var virtualScrollerY, deltaScroll, tableId, firstRow, lastRow, visibleArea, displayContainerHeight, displayContainerScrollTop;
			if (scrollResult === undefined) {
				throw new Error('scrollResult parameter should be provided');
			}
			virtualScrollerY = scrollData.virtualScrollerY;
			deltaScroll = scrollData.deltaScroll;
			tableId = '#' + this.element[0].id;
			firstRow = scrollData.firstRow;
			lastRow = scrollData.lastRow;
			visibleArea = scrollData.visibleArea;
			displayContainerHeight = this._getDisplayContainerHeight();
			displayContainerScrollTop = this._getDisplayContainerScrollTop();
			//check if scroll is possible at all
			//if this is a scroll down
			//check if the last virtual row would be within scrolling area if scrolled by deltaScroll
            //I.I. rework for bug 108439, 108641 and 109013
			if (deltaScroll > 0) {
                if (lastRow[0].offsetTop + lastRow.outerHeight() >= displayContainerScrollTop + deltaScroll + displayContainerHeight ||
						isNaN(scrollData.lastRowDataIndex) || scrollData.lastRowDataIndex === this.dataSource.dataView().length - 1) {
					this._setDisplayContainerScrollTop(displayContainerScrollTop + deltaScroll);
					scrollResult.action = 'SA_SUCCESSFUL';
					return true;
                }

                if (deltaScroll <= (this._avgRowHeight * this._virtualRowCount)) {
				    scrollResult.action = 'SA_NEED_NEXT_PAGE';
				    return false;
                }
			}
			//if this is a scroll up
			//check if the first virtual row would be within scrolling area if scrolled by deltaScroll
            if (deltaScroll < 0) {
			    if (firstRow[0].offsetTop <= displayContainerScrollTop + deltaScroll ||
						scrollData.firstRowDataIndex === 0) {
					this._setDisplayContainerScrollTop(displayContainerScrollTop + deltaScroll);
					scrollResult.action = 'SA_SUCCESSFUL';
					return true;
			    }

			    if (Math.abs(deltaScroll) <= (this._avgRowHeight * this._virtualRowCount)) {
				    scrollResult.action = 'SA_NEED_PREV_PAGE';
				    return false;
			    }
            }
			scrollResult.action = 'SA_NEED_SOME_PAGE';
			return false;
		},
		//continuous virtualization: gets called each time when after scrolling current TRs are not sufficient to display the required data
		_rebuildVirtualRows: function (scrollData, scrollResult) {
			var noCancel, virtualScrollerY, deltaScroll, tableId, firstRowDataIndex, lastRowDataIndex, visibleArea, tbody,
				expandedRowsHeight, trs, i, scrollerHeight, firstVisibleTR, firstVisibleTRRelativeOffset, overflow, startIndexToBeLoaded,
				newFirstVisibleRow, displayContainerScrollTop, maxScrollPos, avgRowHeight, tr, lastVisibleTR, lastVisibleTRIndex,
				firstVisibleTRIndex, lastVisibleTRRelativeOffset, endIndexToBeLoaded, dataRowIndexToBeFirst, hasOverflow;
			noCancel = this._trigger('rebuildingvirtualrows', null, {owner : this, scrollData : scrollData, scrollResult : scrollResult});
			if (noCancel === false) {
				return;
			}
			virtualScrollerY = scrollData.virtualScrollerY;
			deltaScroll = scrollData.deltaScroll;
			tableId = '#' + this.element[0].id;
			firstRowDataIndex = scrollData.firstRowDataIndex;
			lastRowDataIndex = scrollData.lastRowDataIndex;
			visibleArea = scrollData.visibleArea;
			tbody = $(tableId + ' > tbody');
			expandedRowsHeight = 0;
			trs = $(tableId + " > tbody > tr[data-container='true']");
			for (i = 0; i < trs.length; i++) {
				expandedRowsHeight += $(trs[i]).outerHeight();
			}
			if (expandedRowsHeight > 0) {
				scrollerHeight = this._getScrollContainerHeight();
				this._setScrollContainerHeight(scrollerHeight - expandedRowsHeight);
			}
			//next virtual page needed
			if (deltaScroll > 0 && scrollResult.action === 'SA_NEED_NEXT_PAGE') {
				firstVisibleTR = this._getFirstVisibleTR(visibleArea);
				//get first visible TR offset relative to visible area
				firstVisibleTRRelativeOffset = Math.abs(firstVisibleTR[0].offsetTop - visibleArea.top);
				//first loaded data row becomes the row which was first visble before
				overflow = 0;
				startIndexToBeLoaded = parseInt(firstVisibleTR.attr('data-row-idx'), 0);
				dataRowIndexToBeFirst = startIndexToBeLoaded;
				endIndexToBeLoaded = parseInt(this._virtualRowCount, 0) + startIndexToBeLoaded - 1;
				hasOverflow = false;
				if (endIndexToBeLoaded > this.dataSource.dataView().length - 1) {
					endIndexToBeLoaded = this.dataSource.dataView().length - 1;
					startIndexToBeLoaded = endIndexToBeLoaded - this._virtualRowCount + 1;
					hasOverflow = true;
				}
				tbody.empty();
				this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
				if (hasOverflow) {
					tr = $(tableId + " > tbody > tr[data-row-idx='" + dataRowIndexToBeFirst + "']");
					firstVisibleTRRelativeOffset = tr[0].offsetTop + firstVisibleTRRelativeOffset;
				}
				//scroll to where last visible row was and add the new scrolling
				this._setDisplayContainerScrollTop(firstVisibleTRRelativeOffset + deltaScroll);
			}
			//prev virtual page needed
			if (deltaScroll < 0 && scrollResult.action === 'SA_NEED_PREV_PAGE') {
				//get last visible tr -> lastTR
				lastVisibleTR = this._getLastVisibleTR(visibleArea);
				lastVisibleTRIndex = parseInt(lastVisibleTR.attr('data-row-idx'), 0);
				firstVisibleTR = this._getFirstVisibleTR(visibleArea);
				firstVisibleTRIndex = parseInt(firstVisibleTR.attr('data-row-idx'), 0);
				//get its offset
				lastVisibleTRRelativeOffset = visibleArea.bottom - lastVisibleTR[0].offsetTop;
				//get its data index
				endIndexToBeLoaded = lastVisibleTRIndex;
				startIndexToBeLoaded = endIndexToBeLoaded - parseInt(this._virtualRowCount, 0) + 1;
				//TODO: if start is < 0, recalc
				if (startIndexToBeLoaded < 0) {
					startIndexToBeLoaded = 0;
					endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1;
				}
				//rebind from dataIndex - this._virtualRowsCount to dataIndex
				tbody.empty();
				this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
				tableId = '#' + this.element[0].id;
				newFirstVisibleRow = $(tableId + ' > tbody > tr[data-row-idx="' + firstVisibleTRIndex + '"]');
				this._setDisplayContainerScrollTop(newFirstVisibleRow[0].offsetTop + deltaScroll);
			}
			if (scrollResult.action === 'SA_NEED_SOME_PAGE') {
				startIndexToBeLoaded = Math.floor(virtualScrollerY / this._avgRowHeight);
				endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1;
				if (startIndexToBeLoaded < 0) {
					startIndexToBeLoaded = 0;
					endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1;
				}
				if (endIndexToBeLoaded >= this.dataSource.dataView().length - 1) {
					endIndexToBeLoaded = this.dataSource.dataView().length - 1;
					startIndexToBeLoaded = endIndexToBeLoaded - this._virtualRowCount + 1;
				}
				tbody.empty();
				this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
				displayContainerScrollTop = 0;
				maxScrollPos = this._getScrollContainerHeight() - this._getDisplayContainerHeight();
				if (maxScrollPos - 3 <= virtualScrollerY && virtualScrollerY <= maxScrollPos + 3) {
					displayContainerScrollTop = 10000;
				}
				this._setDisplayContainerScrollTop(displayContainerScrollTop);
			}
//			if (expandedRowsHeight > 0) {
//				this._setScrollContainerHeight (this._getScrollContainerHeight() - expandedRowsHeight);
//			}
			avgRowHeight = this._calculateAvgRowHeight();
			if (avgRowHeight > this._avgRowHeight) {
				this._avgRowHeight = avgRowHeight;
				//this._setScrollContainerHeight(avgRowHeight * this.dataSource.dataView().length);
			}
            this._startRowIndex = startIndexToBeLoaded;
            this._startColIndex = 0;
			this._trigger('virtualrecordsrender', null, {owner: this, tbody: tbody, dom: this._virtualDom});
		},
		//continuous virtualization: corrects the virtual scroller position if needed. 
		//this is necessary because virtualization uses approximation to scroll to a certain row, since the rows height is not constant
		_correctScrollPosition: function (totalRowCount) {
			var scrollTop, maxScrollPos, tableId, firstRow, firstRowDataIndex, lastRow, lastRowDataIndex,
				visibleArea, tbody, rowsLeft, displayContainerScrollTop;
			scrollTop = this._getScrollContainerScrollTop();
			maxScrollPos = this._getScrollContainerHeight() - this._getDisplayContainerHeight();
			tableId = '#' + this.element[0].id;
			firstRow = $(tableId + ' > tbody > tr:first');
			firstRowDataIndex = parseInt(firstRow.attr('data-row-idx'), 0);
			lastRow = $(tableId + ' > tbody > tr:last');
			lastRowDataIndex = parseInt(lastRow.attr('data-row-idx'), 0);
			visibleArea = this._getDisplayContainerVisibleArea();
			tbody = $(tableId + ' > tbody');
			if (scrollTop === 0) {
				if (visibleArea.top > 0) {
					this._scrollTo(visibleArea.top, true);
				} else if (firstRowDataIndex > 0) {
					this._scrollTo(firstRowDataIndex * this._avgRowHeight, true);
				}
			} else if (scrollTop >= maxScrollPos - 3 && scrollTop <= maxScrollPos + 3) {
				if (visibleArea.bottom < tbody.height() && lastRowDataIndex === totalRowCount - 1) {
					this._scrollTo(this._getScrollContainerScrollTop() - (tbody.height() - visibleArea.bottom), true);
				} else if (lastRowDataIndex < totalRowCount - 1) {
					rowsLeft = totalRowCount - lastRowDataIndex;
					//this._scrollTo(this._getScrollContainerScrollTop() - (rowsLeft * this._avgRowHeight), true);
					this._setScrollContainerHeight(this._getScrollContainerHeight() + (rowsLeft * this._avgRowHeight));
				}
			}
			displayContainerScrollTop = this._getDisplayContainerScrollTop();
			if (displayContainerScrollTop === 0 && firstRowDataIndex === 0 && this._getScrollContainerScrollTop() !== 0) {
				this._scrollTo(0, true);
			}
			if (displayContainerScrollTop === (tbody.height() - this._getDisplayContainerHeight()) && lastRowDataIndex === totalRowCount - 1) {
				this._scrollTo(this._getScrollContainerHeight(), true);
			}
		},
		//continuous virtualization: used when correcting the virtual scroll position
		_scrollTo: function (scrollTop, suppressScrollEvent) {
			if (suppressScrollEvent) {
				this._suppressScroll = true;
			}
			this._setScrollContainerScrollTop(scrollTop);
		},
		//continuous virtualization: returns the first TR in the grid which is partly or fully visible
		_getFirstVisibleTR: function (visibleArea) {
			var tableId = '#' + this.element[0].id, firstVisibleTR;
			firstVisibleTR = $(tableId + ' > tbody > tr').filter(function (index) {
				return this.offsetTop + $(this).height() > visibleArea.top;
			}).first();
			return firstVisibleTR;
		},
		//continuous virtualization: returns the last TR in the grid which is partly or fully visible
		_getLastVisibleTR: function (visibleArea) {
			var tableId = '#' + this.element[0].id, lastVisibleTR;
			lastVisibleTR = $(tableId + ' > tbody > tr').filter(function (index) {
				return this.offsetTop < visibleArea.bottom;
			}).last();
			return lastVisibleTR;
		},
		//continuous virtualization: determines total number of rows which are used by the virtualization
		_determineVirtualRowCount: function () {
			var div, rowNumber = 10, ds, rows = '', i, height, avgRowHeight, displayContainerHeight, rowsPerPage, result;
			ds = this.dataSource.dataView();
			if (rowNumber > ds.length) {
				rowNumber = ds.length;
			}
			div = $('<div></div>)').appendTo('body').css({position: 'absolute', top : -1800, left : -1800, visibility: 'hidden'});
			for (i = 0; i < rowNumber; i++) {
				rows += this._renderRecord(ds[i], i);
			}
			div.html(rows);
			height = div.height();
			avgRowHeight = height / rowNumber;
			displayContainerHeight = this._getDisplayContainerHeight();
			rowsPerPage = displayContainerHeight / avgRowHeight;
			result = Math.ceil(rowsPerPage * 3);
			div.remove();
			return result;
		},
		//continuous virtualization: called when grid tries to render its rows for first time
		_renderVirtualRecordsContinuous: function () {
			this._totalRowCount = this.dataSource.dataView().length;
			if (this._totalRowCount === 0) {
				this._setScrollContainerHeight(0);
				this._virtualDom = [];
				return;
			}
			this._virtualRowCount = this._determineVirtualRowCount();
			if (this._virtualRowCount > this._totalRowCount) {
				this._virtualRowCount = this._totalRowCount;
			}
			this._scrollTo(0, true);
			this._renderRecords(this._virtualRowCount - 1);
			this._avgRowHeight = this._calculateAvgRowHeight();
			this._setScrollContainerHeight(this._totalRowCount * this._avgRowHeight);
		},
        //just rerenders currently rendered virtual rows; usefull when delete a row from updating feature
        _rerenderVirtualRecordsContinuous: function () {
			var tableId = '#' + this.element[0].id, firstRow, lastRow, firstRowDataIndex, lastRowDataIndex;
			firstRow = $(tableId + ' > tbody > tr:first');
			lastRow = $(tableId + ' > tbody > tr:last');
			firstRowDataIndex = parseInt(firstRow.attr('data-row-idx'), 0);
			lastRowDataIndex = parseInt(lastRow.attr('data-row-idx'), 0);
            this._renderRecords(firstRowDataIndex, lastRowDataIndex);
        },
        //_virtualDom should be built because features like selection expects it
        _buildVirtualDomForContinuousVirtualization: function () {
            var rows, cells, i, j;
			if (this.options.virtualization === true && this.options.virtualizationMode === 'continuous') {
				this._virtualDom = [];
				rows = $('#' + this.element[0].id + ' > tbody > tr');
				for (i = 0; i < rows.length; i++) {
					this._virtualDom[i] = [];
					cells = rows[i].children;
					for (j = 0; j < cells.length; j++) {
						this._virtualDom[i][j] = cells[j];
					}
				}
			}
        },
		destroy: function (notToCallDestroy) {
			/* destroy is part of the jQuery UI widget API and does the following:
				1. Remove custom CSS classes that were added.
				2. Unwrap any wrapping elements such as scrolling divs and other containers.
				3. Unbind all events that were bound.
			*/
			// we need to make sure we check if the element has siblings, if it doesn't we append the actual this.element to its parent
			// this is necessary to return everything exactly to its previous state in the DOM tree
			// we first want to destroy all features
			var prev = this.container().prev(), i, prepend = false;
			this._headerInitCallbacks = [];
			this._footerInitCallbacks = [];
			this.tmpDataSource = null;
			//A.T. 1 Sept. 2011 - Fix for bug #85486
			for (i = 0; i < this.options.features.length; i++) {
				$('#' + this.element[0].id)['igGrid' + this.options.features[i].name]('destroy');
			}
			if (prev.length === 0) {
				prev = this.container().parent();
				prepend = true;
			}
			if (prepend) {
				prev.prepend(this.element);
			} else {
				//prev.append(this.element);
                // L.A. 10 May 2012 Bug #110557
                this.element.insertAfter(prev);
			}
			this.element.unbind({'click': this._cellClickHandler});
			this.element.find('thead').empty();
			this.element.find('colgroup').empty();
			//A.T. 19 Feb 2011 - fix for bug #66088
			// call remove() on the children of the container instead of the container directly because this will automatically call destroy again
			// resulting in too much recursion error message 
			if (notToCallDestroy !== true) {
				$.Widget.prototype.destroy.call(this);
			}
			//A.T. 9 Jan Fix for bug #98790
			if (this._isWrapped && this.container().parent().data('igGrid')) {
				// remove the widget from the real container
				this.container().parent().removeData('igGrid');
			}
			this.container().remove();
			// now empty the records
			this.element.find('tbody').empty().removeClass(this.css.gridTableBodyClass).removeClass(this.css.gridRecordClass);
			this.element.removeClass(this.css.gridTableClass);

			this.element.unbind('iggriduisoftdirty', this._uiSoftDirtyHandler);
			// clear reisizing timeout
			if (this._resId) {
				clearInterval(this._resId);
			}
            //L.A. 23 March 2012 Fixed bug #99841 Initializing the grid with any feature after a previous grid was bound and destroyed on the same DIV element causes an exception
			// K.D. April 9th, 2012 Bug #99841 Changing fix to be for the specific case of instantiating a grid on a div
			if (this._isWrapped) {
				this.element.remove();
			}
			return this;
	    }
    });
    $.extend($.ui.igGrid, {version: '12.2.20122.1021'});
}(jQuery));



