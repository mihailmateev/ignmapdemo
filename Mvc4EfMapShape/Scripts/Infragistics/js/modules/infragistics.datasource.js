/*!
* Infragistics.Web.ClientUI data source localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.DataSourceLocale) {
	$.ig.DataSourceLocale = {};

	$.extend($.ig.DataSourceLocale, {

		locale: {
			invalidDataSource: "The supplied data source is invalid. It happens to be a scalar.",
			unknownDataSource: "Cannot determine the data source type. Please specify if it is JSON or XML data.",
			errorParsingArrays: "There was an error parsing the array data and applying the defined data schema: ",
			errorParsingJson: "There was an error parsing the JSON data and applying the defined data schema: ",
			errorParsingXml: "There was an error parsing the XML data and applying the defined data schema: ",
			errorParsingHtmlTable: "There was an error extracting the data from the HTML Table and applying the schema : ",
			errorExpectedTbodyParameter: "Expected a tbody or a table as a parameter.",
			errorTableWithIdNotFound: "The HTML Table with the following ID was not found: ",
			errorParsingHtmlTableNoSchema: "There was an error parsing the Table DOM: ",
			errorParsingJsonNoSchema: "There was an error parsing/evaluating the JSON string: ",
			errorParsingXmlNoSchema: "There was an error parsing the XML string: ",
			errorXmlSourceWithoutSchema: "The supplied data source is an xml document, but there is no defined data schema ($.IgDataSchema) ",
			errorUnrecognizedFilterCondition: " The filter condition that was passed was not recognized: ",
			errorRemoteRequest: "The remote request to fetch data has failed: ",
			errorSchemaMismatch: "The input data doesn't match the schema, the following field couldn't be mapped: ",
			errorSchemaFieldCountMismatch: "The input data doesn't match the schema in terms of number of fields. ",
			errorUnrecognizedResponseType: "The response type was either not set correctly, or it was not possible to detect it automatically. Please set settings.responseDataType and/or settings.responseContentType.",
			hierarchicalTablesNotSupported: "Tables are not supported for HierarchicalSchema",
			cannotBuildTemplate: "The jQuery template could not be built. There are no records present in the data source, and no columns defined.",
			unrecognizedCondition: "Unrecognized filtering condition in the following expression: ",
			fieldMismatch: "The following expression contains an invalid field or filtering condition: ",
			noSortingFields: "There are no fields specified. You need to specify at least one field to sort by, when calling sort().",
			filteringNoSchema: "There is no schema / fields specified. You need to specify a schema with field definitions and types to be able to filter the data source."
		}
	});

}


/*!
 * Infragistics.Web.ClientUI Data Binding Plugin 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 * 
 * igDataSource provides the following functionality:
 * - read and parse local XML , JSON , and HTML data
 * - normalize / transform the above data according to a schema
 * - data type conversion (date, string, number, etc.)
 * - define relationships between two and more flat data sources - with primary/foreign keys, etc
 * - build URL params for requests that get remote data 
 * - in case of scenarios such as paging, understand and prase the response - expect that it's in a predefined format that can be additionall configured by the developer
 * - get data from WCF services  
 * - ability to combine local with remote functionality  
 * - queueing AJAX requests
 *	paging,filtering (searching), and sorting functionality that are control-independent are also implemented here
 *	the idea of this code is to serve as a data-source abstraction layer (client-side data source control)
 *	that may well be used by all other client-side controls , such as dropdown, tree, menu, etc. 
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	ig.util.js
 *
 */
/*global jQuery, Class, window, ActiveXObject, DOMParser, XPathResult, define */
(function ($) {

	$.ig = $.ig || {};
	/* A.T. 7 Feb 2011 - Usability review changes */
	/*
	$.ig.Constants = $.ig.Constants || {};
	
	$.ig.Constants.SortDirection = {
	None: 'none',
	Ascending: 'asc',
	Descending: 'desc'
	};

	$.ig.Constants.OpType = {
	Remote: 0,
	Local: 1
	};

	$.ig.Constants.SortMode = {
	Single: 0,
	Multi: 1
	};
	
	$.ig.Constants.FilterCondition = {
	StartsWith: "StartsWith",
	EndsWith: "EndsWith",
	Contains: "Contains",
	DoesNotContain: "DoesNotContain",
	Equals: "Equals",
	DoesNotEqual: "DoesNotEqual",
	GreaterThan: "GreaterThan",
	LessThan: "LessThan",
	GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
	LessThanOrEqualTo: "LessThanOrEqualTo",
	True: "True",
	False: "False",
	After: "After",
	Before: "Before",
	Today: "Today",
	Yesterday: "Yesterday",
	ThisMonth: "ThisMonth",
	LastMonth: "LastMonth",
	NextMonth: "NextMonth",
	ThisYear: "ThisYear",
	LastYear: "LastYear",
	NextYear: "NextYear",
	On: "On",
	NotOn: "NotOn",
	Null: "Null",
	NotNull: "NotNull",
	Empty: "Empty",
	NotEmpty: "NotEmpty"
	//ThisQuarter: "ThisQuarter",
	//LastQuarter: "LastQuarter",
	//NextQuarter: "NextQuarter"
	};

	$.ig.Constants.DataSourceType = {
	Function : 0,
	Array : 1,
	HtmlTableString: 2, // the data source could be either the id of the element, a string starting with <table>, or a DOM object that is of nodeType== "TABLE" 
	HtmlTableId: 3,
	HtmlTableDOM: 4,
	JSON : 5, // json data, could be string or object 
	XML : 6, // xml data - could be string or object 
	Invalid: 7, // when data source is se to a boolean, number or date
	Unknown: 8, // when data source is a string or object 
	RemoteUrl: 9,
	Empty: 10
	};
	*/
	$.ig.DataSource = $.ig.DataSource || Class.extend({
		/* The Infragistics Data Source client-side component is implemented as a class, and has support for paging, sorting, and filtering
		it supports binding to various types of data sources including JSON, XML, HTML Table, WCF/REST services, JSONP, JSONP and OData combined, etc. 
		*/
		settings: {
			/* type="string" setting this is only necessary when the data source is set to a table in string format. we need to create an invisible dummy data container in the body and append the table data to it */
			id: 'ds',
			/* type="string" this is the property in the dataView where actual resulting records will be put. (So the dataView will not be array but an object if this is defined), after the potential data source transformation */
			outputResultsName: null,
			/* type="function" callback function to call when data binding is complete */
			callback: null,
			/* type="object" object on which to invoke the callback function */
			callee: null,
			/* type="array" this is the normalized (transformed) resulting data, after it's fetched from the data source */
			data: [],
			/* type="object" this is the source of data - non normalized. Can be an array, can be reference to some JSON object, can be a DOM element for a HTML TABLE, or a function */
			dataSource: null,
			//dataSourceUrl: null, // we don't even need the dataSourceUrl, it can be set in the dataSource
			/* type="object" client-side dataBinding event. Can be a string pointing to a function name, or an object pointing to a function */
			dataBinding: null,
			/* type="object" client-side dataBound event. Can be a string pointing to a function name, or an object pointing to a function */
			dataBound: null,
			/* type="json|xml|unknown|array|function|htmlTableString|htmlTableId|htmlTableDom|invalid|remoteUrl|empty" Type of the data source 
			json type="string" Specifies that the data source is an already evaluated JSON (JavaScript object/array) or a string that can be evaluated to JSON
			xml type="string" Specifies that the data source is a XML Document object or a string that can be evaluated to XML
			unknown type="string" Specifies that the data source is of unknown type. In that case it will be analyzed and automatically detected if possible
			array type="string" Specifies that the data source is a simple array of objects.
			function type="string" Specifies that the data source points to a function. During data binding the function will be called and the result will be assumed to be an array of objects
			htmlTableString type="string" Specifies that the data source points to a string that represents a HTML table
			htmlTableId type="string" Specifies that the data source points to an ID of a HTML Table element that's loaded on the page
			htmlTableDom type="string" The data source points to a DOM object that is of TABLE type
			invalid type="string" Set whenever data source is analyzed (in case its type is unknown) and the type cannot be detected
			remoteUrl type="string" Specifies that the data source points to a remote URL, from which data will be retrieved using an AJAX call ($.ajax)
			htmlListDom type="string" The data source points to a DOM object that is of UL/OL type
			empty type="string"
			*/
			type: "unknown",
			/* type="object" a schema object that defines which fields from the data to bind to */
			schema: null,
			/* type="string" the unique field identifier */
			primaryKey: null,
			/* type="string" property in the response which specifies the total number of records in the backend (this is needed for paging) */
			responseTotalRecCountKey: null,
			/* type="string" property in the response which specifies where the data records array will be held (if the response is wrapped) */
			responseDataKey: null,
			/* 
			type="json|xml|html|script|jsonp|text" Response type when a URL is set as the data source. See http://api.jquery.com/jQuery.ajax/ => dataType 
			json type="string"
			xml type="string"
			html type="string"
			script type="string"
			jsonp type="string"
			text type="string"
			*/
			responseDataType: null,
			/* type="string" content type of the response. See http://api.jquery.com/jQuery.ajax/ => contentType */
			responseContentType: null,
			/* type="bool" if set to false will disable transformations on schema, even if it is defined locally in the javascript code */
			localSchemaTransform: true,
			/* type="object" event that is fired before URL parameters are encoded. Can point to a function name or the function object itself */
			urlParamsEncoding: null,
			/* type="object" event that is fired after URL parameters are encoded (When a remote request is done). Can point to a function name or the function object itself */
			urlParamsEncoded: null,
			/* Settings related to built-in paging functionality */
			paging: {
				/* type="bool" Paging is not enabled by default */
				enabled: false,
				/* type="remote|local" Type for the paging operation 
				local type="string" Data is paged client-side.
				remote type="string" A remote request is done and URL params encoded 
				*/
				type: "remote",
				/* type="number" number of records on each page */
				pageSize: 5,
				/* type="string" denotes the name of the encoded URL parameter that will state what is the currently requested page size */
				pageSizeUrlKey: null,
				/* type="string" denotes the name of the encoded URL parameter that will state what is the currently requested page index */
				pageIndexUrlKey: null,
				/* type="number" current page index */
				pageIndex: 0,
				/* type="bool" Whether when a new page of data is requested we should append the new data to the existing data */
				appendPage: false
			},
			/* Settings related to built-in filtering functionality */
			filtering: {
				/* type="remote|local" Filtering type.
				remote type="string" Parameters will be encoded and it's up to the backend to interpred them from the response.
				local type="string" The data will be filtered automatically client-side
				*/
				type: "remote",
				/* type="bool" enables or disables case sensitive filtering on the data. Works only for local filtering */
				caseSensitive: false,
				/* type="bool" if the type of paging/sorting/filtering is local and applyToAllData is true, filtering will be performed on the whole data source that's present locally, otherwise only on the current dataView. if type is remote, this setting doesn't have any effect. */
				applyToAllData: true,
				/* type="object" Can point to either a string or a function object. The parameters that are passed are 1) the data array to be filtered, 2) the filtering expression definitions. Should return an array of the filtered data */
				customFunc: null,
				/* type="string" url key that will be encoded in the request if remote filtering is performed. Default value of null implies OData-style URL encoding. Please see http://www.odata.org/developers/protocols/uri-conventions for details */
				filterExprUrlKey: null,
				/* type="string" url key that will be encoded in the request, specifying if the filtering logic will be AND or OR */
				filterLogicUrlKey: "filterLogic",
				/* type="array" a list of expression objects, containing the following key-value pairs: fieldName, expression (search string), condition , and logic (AND/OR) */
				expressions: [],
				/* type="string" an "SQL-like' encoded expressions string. Takes precedence over "expressions". Example: col2 > 100; col2 LIKE %test% */
				exprString: ''
			},
			/* Settings related to built-in sorting functionality */
			sorting: {
				/* type="none|asc|desc" Sorting direction 
				none type="string"
				asc type="string"
				desc type="string"
				*/
				defaultDirection: "none",
				/* type="array" when defaultDirection is different than "none", and defaultFields is specified, data will be initially sorted accordingly, directly after dataBind() */
				defaultFields: [],
				/* type="bool" If the sorting type is local and applyToAllData is true, sorting will be performed on the whole data source that's present locally, otherwise only on the current dataView. If sorting type is remote, this setting doesn't have any effect. */
				applyToAllData: true,
				/* type="object"  Custom sorting function that can point to either a string or a function object. When the function is called, the following arguments are passed: data array, fields (array of field definitions) , direction ("asc" or "desc"). The function should return a sorted data array */
				customFunc: null,
				/* type="object" Custom comparison sorting function. Accepts two values and returns a value 0 indicating that values are equal, 1 indicating that val1 > val2 and -1 indicating that val1 < val2 */
				compareFunc: null,
				/* type="object" Custom data value conversion function. Accepts a value and should return the converted value */
				customConvertFunc: null,
				/* type="remote|local" Specifies whether sorting will be applied locally or remotely (via a remote request) 
				remote type="string"
				local type="string"
				*/
				type: "remote",
				/* type="bool" Specifies if sorting will be case sentsitive or not */
				caseSensitive: false,
				/* type="string" URL param name which specifies how sorting expressions will be encoded in the URL. Default is null and uses OData conventions */
				sortUrlKey: null,
				/* type="string" URL param value for ascending type of sorting. Default is null and uses OData conventions */
				sortUrlAscValueKey: null,
				/* type="string" URL param value for descending type of sorting. Default is null and uses OData conventions */
				sortUrlDescValueKey: null,
				/* type="array" a list of sorting expressions , consisting of the following keys (and their respective values): fieldName and direction */
				expressions: [],
				/* type="string" takes precedence over experssions, an "SQL-like" encoded expressions string  : see sort(). Example col2 > 100 ORDER BY asc */
				exprString: ''
			},
			// M.H. add summaries support
			/* Settings related to built-in summaries functionality */
			summaries: {
				/* type="remote|local" Specifies whether summaries will be applied locally or remotely (via a remote request) 
				remote type="string" A remote request is done and URL params encoded
				local type="string" Data is paged client-side.
				*/
				type: "remote",
				/* type="string" Url key for retrieving data from response - used only when summaries are remote*/
				summaryExprUrlKey: "summaries",
				/* type="string" Key for retrieving data from the summaries response - used only when summaries are remote*/
				summariesResponseKey: "summaries",
				/* type="priortofilteringandpaging|afterfilteringbeforepaging|afterfilteringandpaging" Determines when the summary values are calculated  
				priortofilteringandpaging type="string"
				afterfilteringbeforepaging type="string"
				afterfilteringandpaging type="string"
				*/
				summaryExecution: 'afterfilteringandpaging',
				/* type="array" a list of column settings that specifies custom summaries options per column basis */
				columnSettings: [
				/* {key: '', summaryOperands: []}*/
				]
			},
			/* type="array" A list of field definitions specifying the schema of the data source. 
			Field objects description: {fieldName, [fieldDataType], [fieldXPath]}
			*/
			fields: [],
			/* type="bool" if true, will serialize the transaction log of updated values - if any - whenever commit is performed via a remote request. */
			serializeTransactionLog: true,
			/* type="bool" if set to true, the following behavior will take place:
			if a new row is added, and then deleted, there will be no transaction added to the log 
			if an edit is made to a row or cell, then the value is brought back to its original value, the transaction should be removed
			*/
			aggregateTransactions: false,
			/* type="bool" if auto commit is true, data will be automatically commited to the data source, once a value or a batch of values are updated via saveChanges() */
			autoCommit: false,
			/* type="string" specifies an update remote URL, to which an AJAX request will be made as soon as saveChages() is called. */
			updateUrl: null,
			/* type="function" A function to call when row is added.
			Function takes first argument item and second argument dataSource.
			Use item.row to obtain reference to the added row.
			Use item.rowId to get the row ID.
			Use dataSource to obtain reference to $.ig.DataSource. */
			rowAdded: null,
			/* type="function" A function to call when row is updated (edited). 
			Function takes first argument item and second argument dataSource.
			Use item.rowIndex to get the row index.
			Use item.newRow to obtain reference to the updated row.
			Use item.oldRow to obtain reference to the row that was updated.
			Use dataSource to obtain reference to $.ig.DataSource. */
			rowUpdated: null,
			/* type="function" a function to call when row is inserted.
			Function takes first argument item and second argument dataSource.
			Use item.row to obtain reference to the inserted row.
			Use item.rowId to get the row ID.
			Use item.rowIndex to get the row index.
			Use dataSource to obtain reference to $.ig.DataSource. */
			rowInserted: null,
			/* type="function" a function to call when row is deleted.
			Use item.row to obtain reference to the deleted row.
			Use item.rowId to get the row ID.
			Use item.rowIndex to get the row index.
			Use dataSource to obtain reference to $.ig.DataSource. */
			rowDeleted: null
		},
		init: function (options) {
			var tempSource, tempCallee, arrayAlready = false, metadata;
			// merge defaults with passed-in values 
			if (options) {
				tempSource = options.dataSource;
				if (tempSource && ($.type(tempSource) === "array" || $.type(tempSource) === "object")) {
					// L.A. 28 August 2012 Fixing bug #119626 When the hierarchical grid is bound to remote data (without load on demand),
					// expanding a root grid row causes an error and no child layouts are shown
					if (($.type(tempSource) === "object") && options.responseDataKey && options.type !== "json") {
						// M.H. 14 Sep 2012 Fix for bug #121209: we should preserve metadata
						metadata = tempSource.Metadata;
						options.dataSource = $.ig.findPath(tempSource, options.responseDataKey);
						if (metadata && options.dataSource.Metadata === undefined) {
							options.dataSource.Metadata =  metadata;
						}
						this.settings.type = "array";
						arrayAlready = true;
					} else {
						options.dataSource = null;
					}
					if (options.callee) {
						tempCallee = options.callee;
						options.callee = null;
					}
				}
				this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
				if (!arrayAlready && tempSource && ($.type(tempSource) === "array" || $.type(tempSource) === "object")) {
					options.dataSource = tempSource;
					this.settings.dataSource = tempSource;
					if (tempCallee) {
						this.settings.callee = tempCallee;
						tempCallee = null;
					}
				}
			}
			// initialize local vars
			//this._pageIndex = 0;
			this.settings.paging.pageIndex = 0;
			this._isBound = false;
			this._url = null;
			this._dsCallback = null;
			this._data = []; // _data may be different than _dataView only when the whole data source is present locally, but we are performing sorting or filtering or paging on it, 
			this._dataView = []; // therefore the dataView will contain only a subset of the *local* data. 
			// Same applies when data is parsed from a table. With remote fetching, everything is in _data
			if (this.settings.type === "unknown") {
				this._runtimeType = this.analyzeDataSource();
			} else {
				this._runtimeType = this.settings.type;
			}

			this._parser = new $.ig.TypeParser();
			this._schema = null;
			// used only when doing remote paging, sorting and filtering, 
			// to determine the request type in order to know whether to parse metadata fields
			// such as total record count - from the response
			this._isSortingReq = false;
			this._isFilteringReq = false;
			this._isPagingReq = false;
			this._isSummariesReq = false;
			this._dataSummaries = [];
			this._recCount = 0;
			this._hasCount = false;
			this._initSchema();
			this._filteredDataView = [];
			this._transactionLog = []; // transactions support & batch updating 
			this._accumulatedTransactionLog = []; // this is the transaction log that will be serialized and posted to the server, if the option "serializeTransactionLog" is true (MVC scenarios!)
			return this;
		},
		_initSchema: function () {
			// performance optimization
			//if (this.settings.schema && this.settings.localSchemaTransform) {
			if (this.settings.schema) {
				if (this.settings.schema instanceof $.ig.DataSchema) {
					this._schema = this.settings.schema;
				} else {
					// two cases: the developer has explicitly set a type, and 2) he didn't - which means we need to analyze the data source at runtime 
					if (this.settings.type !== "unknown") {
						this._schema = new $.ig.DataSchema(this.settings.type, this.settings.schema);
					} else {
						this._schema = new $.ig.DataSchema(this._runtimeType, this.settings.schema);
					}
					this._schema._pk = this.settings.primaryKey;
				}
			}
		},
		fields: function (fields) {
			/* Sets a list of fields to the data source. If no parameter is specified, just returns the already existing list of fields
			paramType="object" optional="true" a field has the following format: {key: 'fieldKey', dataType: 'string/number/date' }
			returnType="object" if no parameters are specified, returns the existing list of fields
			*/
			if (fields === undefined || fields === null) {
				return this.settings.fields;
			}
			this.settings.fields = fields;
			return this;
		},
		analyzeDataSource: function () {
			/* analyzes the dataSource setting to automatically determine the type of the data source. Returns the data source type. See settings.type 
			returnType="string"
			*/
			var ds = this.dataSource(), $ds, dc;
			if (ds === undefined || ds === null) {
				return "empty";
			}
			if ($.type(ds) === "function") {
				// function
				return "function";
			}
			if ($.type(ds) === "array") {
				// string, assume JSON by default and eval it
				return "array";
			}
			if ($.type(ds) === "number" || $.type(ds) === "boolean" || $.type(ds) === "date") {
				// data source is either boolean, number date, etc. 
				return "invalid";
			}
			if ($.type(ds) === "string") { //string or object
				ds = $.trim(ds);
				if (ds.startsWith("/")) {
					return "remoteUrl";
				}
				$ds = $(ds);
				// already passed through this code, we don't need to do the same thing again 
				if ($('#' + this.settings.id).length > 0 && ds.toLowerCase().startsWith("<table")) {
					return "htmlTableString";
				}
				// was: $(ds.toLowerCase())

				if (ds.toLowerCase().startsWith("<table")) {
					// store the contents in this._data:
					// for that purpose we create a dummy div "data container", append it to the body, set display none and visibility hidden, and append our table there.
					dc = "<div id='" + this.settings.id + "' style='display:none;visibility:hidden;'>" + ds + "</div>";
					//this._data = $(dc).appendTo($("body"));
					$(dc).appendTo($("body"));
					return "htmlTableString";
				}
				if (!ds.startsWith("[") && !ds.startsWith("{") && !ds.startsWith("<")) { // object, array or xml
					// try to see if it's not a table:
					if (!ds.startsWith("http://") && $('#' + ds).length > 0 && $('#' + ds)[0].nodeName.toLowerCase() === "table") {
						return "htmlTableId";
					}
					this._url = ds;
					return "remoteUrl";
				}
				return "unknown";
			}
			if (ds.nodeName && ds.nodeName.toLowerCase() === "table") {
				return "htmlTableDom";
			}
			if (ds.nodeName && (ds.nodeName.toLowerCase() === "ul" || ds.nodeName.toLowerCase() === "ol")) {
				return "htmlListDom";
			}
			return "unknown";
		},
		dataView: function () {
			/* returns the current normalized/transformed and paged/filtered/sorted data, i.e. the dataView
			returnType="object"
			*/
			return this._dataView;
		},
		data: function () {
			/* returns all of the bound data, without taking into account local paging, sorting, filtering, etc. 
			returnType="object"
			*/
			return this._data;
		},
		transformedData: function (transformedExecution) {
			/*	returns transformed data according to transformed execution:
			1. Before paging and filtering
			2. After filtering before paging
			3. After filtering and paging

			returnType="object"
			*/
			switch (transformedExecution) {
			case 'priortofilteringandpaging':
				this._transformedData = this._data;
				break;
			// this is populated in populateDataSummaries method 
			case 'afterfilteringbeforepaging':
				break;
			case 'afterfilteringandpaging':
				this._transformedData = this.dataView();
				break;
			default:
				this._transformedData = this._dataView;
				break;
			}
			return this._transformedData;
		},
		dataSummaries: function () {
			/*	returns summaries data
			 * returnType="object"
			*/
			var s = this.settings.summaries, type = s.type;
			if (type === 'local') {
				this._dataSummaries = this.transformedData(s.summaryExecution);
			}
			return this._dataSummaries;
		},
		schema: function (s, t) {
			/* Gets/sets the schema definition. 
			paramType="object" optional="true" a schema object 
			paramType="string" optional="true" type of the data source. See settings.type
			*/
			// data source schema definition 
			if (s === undefined || s === null) {
				return this._schema;
			}
			if (s instanceof $.ig.DataSchema) {
				this._schema = s;
			} else {
				if (t === null || t === undefined) {
					this._schema = new $.ig.DataSchema(s.type, s);
				} else {
					this._schema = new $.ig.DataSchema(t, s);
				}
				this._schema._pk = this.settings.primaryKey;
			}
			return this;
		},
		pagingSettings: function (p) {
			/* gets/sets a list of paging settings 
			paramType="object" optional="true" object holding all paging settings. See settings.paging
			*/
			if (p === undefined || p === null) {
				return this.settings.paging;
			}
			this.settings.paging = p;
			return this;
		},
		filterSettings: function (f) {
			/* gets/sets a list of filtering settings 
			paramType="object" optional="true" object holding all filtering settings. See settings.filtering
			*/
			if (f === undefined || f === null) {
				return this.settings.filtering;
			}
			this.settings.filtering = f;
			return this;
		},
		sortSettings: function (s) {
			/* gets/sets a list of paging settings 
			paramType="object" optional="true" object holding all sorting settings. See settings.sorting
			*/
			if (s === undefined || s === null) {
				return this.settings.sorting;
			}
			this.settings.sorting = s;
			return this;
		},
		summariesSettings: function (s) {
			/* Gets/sets a list of summaries settings. 
			paramType="object" optional="true" object holding all summaries settings. See settings.summaries
			*/
			if (s === undefined || s === null) {
				return this.settings.summaries;
			}
			this.settings.summaries = s;
			return this;
		},
		dataSource: function (ds) {
			/* gets/sets the dataSource setting. If no parameter is specified, returns settings.dataSource
			paramType="object" optional="true"
			returnType="object"
			*/
			if (ds === undefined || ds === null) {
				return this.settings.dataSource;
			}
			this.settings.dataSource = ds;
			this.analyzeDataSource();
			return this;
		},
		type: function (t) {
			/* gets/sets the type of the dataSource. If no parameter is specified, returns settings.type
			paramType="json|xml|unknown|array|function|htmlTableString|htmlTableId|htmlTableDom|invalid|remoteUrl|empty" optional="true"
			returnType="json|xml|unknown|array|function|htmlTableString|htmlTableId|htmlTableDom|invalid|remoteUrl|empty"
			*/
			if (t === undefined || t === null) {
				//return this.settings.dataSourceType;
				return this._runtimeType;
			}
			this.settings.type = t;
			return this;
		},
		findRecordByKey: function (key, ds) {
			/* returns a record by a specified key (requires that primaryKey is set in the settings)
			paramType="string" Primary key of the record
			returnType="object" a JavaScript object specifying the found record, or null if no record is found
			*/
			//A.T 2 Feb 2011 for now i am going to traverse all records until the one specified by key is found. 
			// additional great optimization is to index all records so that they are in the form <key>: { <javascript object> } 
			var i;
			if (!ds) {
				for (i = 0; i < this._data.length; i++) {
					if (this._data[i][this.settings.primaryKey] === key) {
						return this._data[i];
					}
				}
			} else {
				for (i = 0; i < ds.length; i++) {
					if (ds[i][this.settings.primaryKey] === key) {
						return ds[i];
					}
				}
			}
			return null;
		},
		removeRecordByKey: function (key, origDs) {
			/* removes a specific record denoted by the primaryKey of the passed key parameter from the data source 
			paramType="string" primary key of the record 
			*/
			var i, len, data, count = 0,
				all = [this._data, this._dataView, this._filteredData, origDs],
				prime = this.settings.primaryKey;
			while (count < 4) {
				data = all[count++];
				len = data ? data.length : 0;
				for (i = 0; i < len; i++) {
					if (data[i] && data[i][prime] === key) {
						//A.T. 8 March 2012 - Fix for bug #104244 
						//data.remove(i);
						$.ig.removeFromArray(data, i);
						break;
					}
				}
				// if next data is same, then skip it
				if (data === all[count]) {
					count++;
				}
			}
		},
		removeRecordByIndex: function (index, origDs) {
			/* Removes a record from the data source at specific index.
			paramType="number" index of record 
			*/
			var i, len, record, data = this._data, view = this._dataView, filter = this._filteredData;
			if (!data || isNaN(index) || index < 0 || index >= data.length) {
				return;
			}
			record = data[index];
			//A.T. 8 March 2012 - Fix for bug #104244 
			//data.remove(index);
			$.ig.removeFromArray(data, index);
			if (origDs) {
				$.ig.removeFromArray(origDs, index);
			}
			// if _dataView equals to _data, then skip it
			data = (data === view) ? filter : view;
			// if record is null, then it is not possible to find it in dataView
			while (record) {
				len = data ? data.length : 0;
				for (i = 0; i < len; i++) {
					if (data[i] === record) {
						//A.T. 8 March 2012 - Fix for bug #104244 
						//data.remove(i);
						$.ig.removeFromArray(data, i);
						break;
					}
				}
				if (data === filter) {
					return;
				}
				data = filter;
			}
		},
		setCellValue: function (rowId, colId, val, autoCommit) {
			/*  sets a cell value for the cell denoted by rowId and colId. Creates a transaction for the update operation and returns it
			paramType="object" the rowId - row key (string) or index (number)
			paramType="object" the column id - column key (string) or index (number)
			paramType="object" The new value 
			paramType="bool" if autoCommit is true, it updates the datasource automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created 
			*/
			// create transaction
			var t = this._createCellTransaction(rowId, colId, val);
			this._addTransaction(t);
			// commit
			if (autoCommit === true) {
				this.commit(rowId);
			}
			return t;
		},
		updateRow: function (rowId, rowObject, autoCommit) {
			/* updates a record in the datasource. Creates a transaction that can be committed / rolled back 
			paramType="object" the record key - primaryKey (string) or index (number)
			paramType="object" the record object containing the key/value pairs we want to update. It doesn't have to include key/value pairs for all fields defined in the schema or in the data source (if no schema is defined)
			paramType="bool" if autoCommit is true, the datasource will be updated automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created  
			*/
			// create transaction
			var t = this._createRowTransaction(rowId, rowObject), oldRow = (this.settings.primaryKey === null) ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId), rowIndex = (this.settings.primaryKey === null) ? rowId : this._data.indexOf(oldRow);
			this._addTransaction(t);
			// commit
			if (autoCommit === true) {
				this.commit(rowId);
			}
			if ($.type(this.settings.rowUpdated) === "function") {
				if (this.settings.callee) {
					this.settings.rowUpdated.apply(this.settings.callee, [{ rowIndex: rowIndex, newRow: rowObject, oldRow: oldRow }, this]);
				} else {
					this.settings.rowUpdated({ rowIndex: rowIndex, newRow: rowObject, oldRow: oldRow }, this);
				}
			}
			return t;
		},
		addRow: function (rowId, rowObject, autoCommit) {
			/* adds a new row to the data source. Creates a transaction that can be committed / rolled back 
			paramType="object" the record key - primaryKey (string) or index (number)
			paramType="object" the new record data. 
			paramType="bool" if autoCommit is true, the datasource will be updated automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created 
			*/
			var t = this._createNewRowTransaction(rowId, rowObject);
			this._addTransaction(t);
			// commit
			if (autoCommit === true) {
				this.commit(rowId);
			}
			if ($.type(this.settings.rowAdded) === "function") {
				if (this.settings.callee) {
					this.settings.rowAdded.apply(this.settings.callee, [{ rowId: rowId, row: rowObject }, this]);
				} else {
					this.settings.rowAdded({ rowId: rowId, row: rowObject }, this);
				}
			}
			return t;
		},
		insertRow: function (rowId, rowObject, rowIndex, autoCommit) {
			/* adds a new row to the data source. Creates a transaction that can be committed / rolled back 
			paramType="object" the record key - primaryKey (string) or index (number)
			paramType="object" the new record data. 
			paramType="bool" if autoCommit is true, the datasource will be updated automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created 
			*/
			var t = this._createInsertRowTransaction(rowId, rowObject, rowIndex);
			this._addTransaction(t);
			// commit
			if (autoCommit === true) {
				this.commit(rowId);
			}
			if ($.type(this.settings.rowInserted) === "function") {
				if (this.settings.callee) {
					this.settings.rowInserted.apply(this.settings.callee, [{ rowId: rowId, row: rowObject, rowIndex: rowIndex }, this]);
				} else {
					this.settings.rowInserted({ rowId: rowId, row: rowObject, rowIndex: rowIndex }, this);
				}
			}
			return t;
		},
		deleteRow: function (rowId, autoCommit) {
			/* deletes a row from the data source.
			paramType="object" the record key - primaryKey (string) or index (number)
			paramType="bool" if autoCommit is true, the datasource will be updated automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created 
			*/
			var t = this._createDeleteRowTransaction(rowId), row = (this.settings.primaryKey === null) ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId), rowIndex = (this.settings.primaryKey === null) ? rowId : this._data.indexOf(row), isNewRow = false, i, j;
			for (i = 0; this.settings.aggregateTransactions && i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].type === "newrow" && this._transactionLog[i].rowId === rowId) {
					isNewRow = true;
					// delete the new row transaction 
					rowId = this._transactionLog[i].rowId;
					this._removeTransactionByTransactionId(this._transactionLog[i].tid);
					// sync the global transaction log !
					//A.T. 23 March fix for #105958
					for (j = 0; j < this._accumulatedTransactionLog.length; j++) {
						if (this._accumulatedTransactionLog[j].rowId === rowId) {
							$.ig.removeFromArray(this._accumulatedTransactionLog, j);
						}
					}
					break;
				}
			}
			//A.T. 17 Jan 2012
			// check if we don't have an "add" transaction already
			if (!(this.settings.aggregateTransactions && isNewRow)) {
				this._addTransaction(t);
				if (autoCommit === true) {
					this.commit(rowId);
				}
				if ($.type(this.settings.rowDeleted) === "function") {
					if (this.settings.callee) {
						this.settings.rowDeleted.apply(this.settings.callee, [{ rowId: rowId, row: row, rowIndex: rowIndex }, this]);
					} else {
						this.settings.rowDeleted({ rowId: rowId, row: row, rowIndex: rowIndex }, this);
					}
				}
			}
		},
		/* Transactions for igTree */
		addNode: function (data) {
			/* adds a new node to the tree data source. Creates a transaction that can be committed / rolled back 
			paramType="object" the transaction data
			*/
			var t = this._createAddNodeTransaction(data);
			this._addTransaction(t);
		},
		removeNode: function (data) {
			/* removes a node from the tree data source. Creates a transaction that can be committed / rolled back 
			paramType="object" the transaction data
			*/
			var t = this._createRemoveNodeTransaction(data);
			this._addTransaction(t);
		},
		/* END Transactions for igTree */
		getDetachedRecord: function (t) {
			/* returns a standalone object (copy) that represents the commited transactions, but detached from the data source 
			paramType="object" a transaction object
			returnType="object" a copy of a record from the data source
			*/
			var o = $.type(this._data[0]) === "array" ? [] : {}, i, originalRec;

			if (this.settings.primaryKey === null) {
				originalRec = this._data[parseInt(t.rowId, 10)];
			} else {
				originalRec = this.findRecordByKey(t.rowId);
			}
			//o = $.extend(true, {}, originalRec);
			if (this._data[0] !== "array") {
				for (i in originalRec) {
					if (originalRec.hasOwnProperty(i)) {
						o[i] = originalRec[i];
					}
				}
			} else {
				for (i = 0; i < originalRec.length; i++) {
					o[i] = originalRec[i];
				}
			}
			if (t.type === 'cell') {
				o[t.col] = t.value;
				return o;
			}
			// merge objects or arrays
			//return $.extend(true, {}, o, t.row);
			if (o !== "array") {
				for (i in t.row) {
					if (t.row.hasOwnProperty(i)) {
						o[i] = t.row[i];
					}
				}
			} else {
				// if it's array, t.row is expected to have the same number of cells (elements) as the original record. It cannot contain partial data only for the updated cells 
				for (i = 0; i < t.row.length; i++) {
					o[i] = t.row[i];
				}
			}
			return o;
		},
		commit: function (id) {
			/* update the data source with every transaction from the log
			paramType="number" optional="true" Id of the transaction to commit. If no id is specified, will commit all transactions to the data source. 
			*/
			// if "id" is defined, commit only the transaction with the specified id
			if (id !== null && id !== undefined) {
				this._commitTransactionsByRowId(id);
			} else {
				// commit all
				// always reverse if we call pop. That's because we may have a row editing first, then row deleting,
				// if we call pop(), it will delete the row first, and then try to edit it, which is wrong. 
				// this is much easier and cleaner compared to implementing Queues 
				this._transactionLog.reverse();
				while (this._transactionLog.length > 0) {
					this._commitTransaction(this._transactionLog.pop());
				}
			}
		},
		rollback: function (id) {
			/* clears the transaction log without updating anything in the data source 
			paramType="number" optional="true" Id of the transaction to rollback. If no id is specified, will rollback all transactions to the data source. 
			*/
			var i;

			if (id !== null && id !== undefined) {
				this._rollbackTransactionsByRowId(id);
			} else {
				// exclude the current transaction log from the accumulated transaction log. 
				// rollback all
				i = this._transactionLog.length;
				while (i-- > 0) {
					this._rollbackTransaction(this._transactionLog[i]);
				}
			}
		},
		pendingTransactions: function () {
			/* returns a list of all transaction objects that are pending to be committed or rolled back to the data source 
			returnType="array"
			*/
			return this._transactionLog;
		},
		allTransactions: function () {
			/* returns a list of all transaction objects that are either pending, or have been committed in the data source. 
			returnType="array"
			*/
			return this._accumulatedTransactionLog;
		},
		_createCellTransaction: function (rowId, colId, val) {
			return { type: 'cell', rowId: rowId, tid: this._generateTransactionId(), col: colId, value: val };
		},
		_createRowTransaction: function (rowId, rowObject) {
			return { type: 'row', tid: this._generateTransactionId(), row: rowObject, rowId: rowId };
		},
		_createNewRowTransaction: function (rowId, rowObject) {
			return { type: 'newrow', tid: this._generateTransactionId(), row: rowObject, rowId: rowId };
		},
		_createInsertRowTransaction: function (rowId, rowObject, rowIndex) {
			return { type: 'insertrow', tid: this._generateTransactionId(), row: rowObject, rowId: rowId, rowIndex: rowIndex };
		},
		_createDeleteRowTransaction: function (rowId) {
			return { type: 'deleterow', tid: this._generateTransactionId(), rowId: rowId };
		},
		/* Transactions for igTree */
		_createAddNodeTransaction: function (data) {
			return { type: 'addnode', tid: this._generateTransactionId(), tdata: data };
		},
		_createRemoveNodeTransaction: function (data) {
			return { type: 'removenode', tid: this._generateTransactionId(), tdata: data };
		},
		/* END Transactions for igTree */
		_addTransaction: function (t) {
			var exists = false, i = 0, prop, globalt, j, dirty = true, k;
			if (t.type === "cell") {
				// check if we don't have an existing transaction and if we do, overwrite it
				for (i = 0; i < this._transactionLog.length; i++) {
					if (this._transactionLog[i].rowId === t.rowId && this._transactionLog[i].col === t.col) {
						exists = true;
						// add extra check to see if the "new" value isn't the same as the original one, in that case remove the existing transaction
						if (this.settings.autoCommit === false && this.settings.aggregateTransactions === true) {
							// we need to find the data source row corresponding to rowId
							for (j = 0; j < this.dataView().length; j++) {
								if (this.dataView()[j][this.settings.primaryKey] === t.rowId && this.dataView()[j][t.col] === t.value) {
									for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
										if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
											$.ig.removeFromArray(this._accumulatedTransactionLog, k);
										}
									}
									// remove the transaction because the last entered value is the same as the first one
									this._removeTransactionByTransactionId(this._transactionLog[i].tid);
									dirty = false;
								}
							}
						}
						if (dirty) {
							this._transactionLog[i].value = t.value;
							this._syncGlobalTransaction(this._transactionLog[i]);
						}
					}
				}
				// ensure we check the newly added rows as well
				for (j = 0; j < this._transactionLog.length; j++) {
					if (this._transactionLog[j].type === "newrow" && this._transactionLog[j].rowId === t.rowId) {
						// copy the t.row into newrow's row
						if (t.type === "row") {
							this._transactionLog[j].value = t.value;
						} else {
							this._transactionLog[j].row[t.col] = t.value;
						}
						this._syncGlobalTransaction(this._transactionLog[j]);
						// don't add "t"
						return;
					}
				}
			} else if (t.type === "row") {
				for (i = 0; i < this._transactionLog.length; i++) {
					if (this._transactionLog[i].rowId === t.rowId) {
						exists = true;
						if (this.settings.autoCommit === false && this.settings.aggregateTransactions === true) {
							dirty = false;
							for (j = 0; j < this.dataView().length; j++) {
								if (this.dataView()[j][this.settings.primaryKey] === t.rowId) {
									// now verify all values in the row correspond to the original ones
									for (prop in t.row) {
										if (t.row.hasOwnProperty(prop) && t.row[prop] !== this.dataView()[j][prop]) {
											dirty = true;
											break;
										}
									}
									break;
								}
							}
							// ensure we check the newly added rows as well
							for (j = 0, !dirty; j < this._transactionLog.length; j++) {
								if (this._transactionLog[j].type === "newrow" && this._transactionLog[j].rowId === t.rowId) {
									// copy the t.row into newrow's row
									this._transactionLog[j].row = t.row;
									// we need to find and sync the global transaction
									this._syncGlobalTransaction(this._transactionLog[j]);
									// don't add "t"
									return;
								}
							}
						}
						if (dirty) {
							this._transactionLog[i].row = t.row;
							this._syncGlobalTransaction(this._transactionLog[i]);
						} else {
							// remove the transaction because the last entered value is the same as the first one
							for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
								if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
									$.ig.removeFromArray(this._accumulatedTransactionLog, k);
								}
							}
							this._removeTransactionByTransactionId(this._transactionLog[i].tid);
						}
					}
				}
			}
			if (!exists) {
				this._transactionLog.push(t);
				// A.T. 27 Sept. we need this change only for the global transaction log, since it's the one that will go to the server
				// for the local transaction log, we need to keep the Date "as is", because it won't get serialized/deserialized
				globalt = $.extend(true, {}, t);
				// Date fix. We need to encode it using \/Date(ticks)\/
				if (globalt.type === "cell" && $.type(globalt.value) === "date") {
					globalt.value = "\/Date(" + globalt.value.getTime() + ")\/";
				} else if (globalt.type === "row" || globalt.type === "insertrow" || globalt.type === "newrow") {
					for (prop in globalt.row) {
						if (globalt.row.hasOwnProperty(prop) && $.type(globalt.row[prop]) === "date") {
							globalt.row[prop] = "\/Date(" + globalt.row[prop].getTime() + ")\/";
						}
					}
				}
				this._accumulatedTransactionLog.push(globalt);
			}
		},
		_syncGlobalTransaction: function (t) {
			var i, prop;
			if (!t) {
				return;
			}
			if (t.type === "cell") {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].rowId === t.rowId) {
						if ($.type(t.value) === "date") {
							this._accumulatedTransactionLog[i].value = "\/Date(" + t.value.getTime() + ")\/";
						} else {
							this._accumulatedTransactionLog[i].value = t.value;
						}
						break;
					}
				}
			} else if (t.type === "row" || t.type === "insertrow" || t.type === "newrow") {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].rowId === t.rowId) {
						for (prop in t.row) {
							if (t.row.hasOwnProperty(prop)) {
								if ($.type(t.row[prop]) === "date") {
									this._accumulatedTransactionLog[i].row[prop] = "\/Date(" + t.row[prop].getTime() + ")\/";
								} else {
									this._accumulatedTransactionLog[i].row[prop] = t.row[prop];
								}
							}
						}
					}
				}
			}
		},
		_removeTransactionByTransactionId: function (tid, removeFromAll) {
			// removes a transaction by a transaction ID
			var i;
			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].tid === tid) {
					//A.T. 8 March 2012 - Fix for bug #104244 
					//this._transactionLog.remove(i);
					$.ig.removeFromArray(this._transactionLog, i);
					break;
				}
			}
			if (removeFromAll === true) {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].tid === tid) {
						//A.T. 8 March 2012 - Fix for bug #104244 
						//this._accumulatedTransactionLog.remove(i);
						$.ig.removeFromArray(this._accumulatedTransactionLog, i);
						break;
					}
				}
			}
		},
		_removeTransactionsByRecordId: function (id) {
			// removes all transactions matching a specific row id (index or primary key)
			var i;
			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].rowId === id) {
					//A.T. 8 March 2012 - Fix for bug #104244 
					//this._transactionLog.remove(i);
					$.ig.removeFromArray(this._transactionLog, i);
					break;
				}
			}
		},
		_addRow: function (row, index, origDs) {
			var data, key, count = 0,
				all = [this._data, this._dataView, this._filteredData, origDs],
				rec = origDs ? origDs[0] : null;
			if (rec) {
				for (key in rec) {
					if (rec.hasOwnProperty(key) && !row.hasOwnProperty(key)) {
						row[key] = null;
					}
				}
			}
			while (count < 4) {
				data = all[count++];
				if (data) {
					if (index >= 0 && index < data.length) {
						data.splice(index, 0, row);
					} else {
						data.push(row);
					}
				}
				// if data same, then skip it
				if (data === all[count]) {
					count++;
				}
			}
		},
		_commitTransaction: function (t) {
			// commit, then remove from the transaction log
			var i, prop, rec, origRec, origDs = this.settings.localSchemaTransform ? this._origDs : null;
			if (origDs === this._data) {
				origDs = null;
			}
			if (this.settings.primaryKey === null) {
				rec = this._data[parseInt(t.rowId, 10)];
				if (origDs) {
					origRec = origDs[parseInt(t.rowId, 10)];
				}
			} else {
				rec = this.findRecordByKey(t.rowId);
				if (origDs) {
					origRec = this.findRecordByKey(t.rowId, origDs);
				}
			}

			if (t.type === 'cell') {
				rec[t.col] = t.value;
				if (origRec) {
					origRec[t.col] = t.value;
				}
			} else if (t.type === 'row') {
				if ($.type(t.row) === "array") {
					for (i = 0; i < t.row.length; i++) {
						rec[i] = t.row[i];
						if (origRec) {
							origRec[i] = t.row[i];
						}
					}
				} else {
					for (prop in t.row) {
						if (t.row.hasOwnProperty(prop)) {
							rec[prop] = t.row[prop];
							if (origRec) {
								origRec[prop] = t.row[prop];
							}
						}
					}
				}
			} else if (t.type === 'deleterow') {
				if (this.settings.primaryKey === null) {
					this.removeRecordByIndex(parseInt(t.rowId, 10), origDs);
				} else {
					this.removeRecordByKey(t.rowId, origDs);
				}
			} else if (t.type === 'newrow') {
				this._addRow(t.row, -1, origDs);
			} else if (t.type === 'insertrow') {
				this._addRow(t.row, t.rowIndex, origDs);
			}
			// finally remove from the log, since the transaction is already committed and shouldn't be pending
			this._removeTransactionByTransactionId(t.tid);
		},
		_rollbackTransaction: function (t) {
			this._removeTransactionByTransactionId(t.tid, true);
		},
		_commitTransactionsByRowId: function (id) {
			var i;

			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].rowId === id) {
					this._commitTransaction(this._transactionLog[i]);
				}
			}
		},
		_rollbackTransactionsByRowId: function (id) {
			var i;

			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].rowId === id) {
					this._rollbackTransaction(this._transactionLog[i]);
				}
			}
		},
		transactionsAsString: function () {
			/* returns the accumulated transaction log as a string. The purpose of this is to be passed to URLs or used conveniently
			returnType="string"
			*/
			return JSON.stringify(this._accumulatedTransactionLog);
		},
		_generateTransactionId: function () {
			return ((1 + Math.random()) * parseInt('10000', 16)).toString(16).substring(1, 5);
		},
		saveChanges: function () {
			/* posts to the settings.updateUrl using $.ajax, by serializing the changes as url params */
			if (this.settings.updateUrl !== null) {
				// post to the Url using $.ajax, by serializing the changes as url params 
				var me = this;
				$.post(this.settings.updateUrl, { 'ig_transactions': JSON.stringify(this._accumulatedTransactionLog) },
					function (data, textStatus, jqXHR) {
						me._saveChangesSuccess(data, textStatus, jqXHR);
					});
			}
		},
		_saveChangesSuccess: function (data, textStatus, jqXHR) {
			if (data.Success) {
				this.commit();
				this._transactionLog = [];
				this._accumulatedTransactionLog = [];
			}
			var schs = this._saveChangesHandlers, i = schs ? schs.length : 0;
			while (i-- > 0) {
				schs[i](data, textStatus, jqXHR);
			}
		},
		_addChangesSuccessHandler: function (functionDelegate) {
			if (this._saveChangesHandlers === undefined) {
				this._saveChangesHandlers = [];
			}
			this._saveChangesHandlers[this._saveChangesHandlers.length] = functionDelegate;
		},
		_removeChangesSuccessHandler: function (functionDelegate) {
			if (this._saveChangesHandlers !== undefined) {
				var index = this._saveChangesHandlers.indexOf(functionDelegate);
				if (index > -1) {
					this._saveChangesHandlers = this._saveChangesHandlers.slice(0, index).concat(this._saveChangesHandlers.slice(index + 1, this._saveChangesHandlers.length));
				}
			}
		},
		// callback is the function to call when databinding is async (remote)
		// callee is the object on which to call the callback function
		dataBind: function (callback, callee) {
			/* data binds to the current data source  data source
			databinding works using the following workflow:
			1. fire the databinding event
			2. based on the data source type (see analyzeDataSource()), do the following:
			3. if type is HtmlTable, parse the table and set the data and dataView respectively. 
			if the type is Function, call it, apply Paging/Filtering/Sorting, and set this._dataView . If the developer wants to do his own paging, filtering or sorting
			in that case, then he should handle the PageIndexChanging and/or DataFiltering, and/or ColumnSorting client-side events, and cancel them. 
			if no paging/sorting/filtering are enabled, use just this._data to save space
			if the data source is of type RemoteUrl, use jQuery's $.ajax API to trigger a remote request to the service. Use the param() API to encode the URL
			if the data source is invalid, throw an exception 
			if the analyzed runtime data source type , that is, the result of analyzeDataSource(), is Unknown, check if 
			the value of settings.type is set to XML or JSON. If string, eval for JSON, and parse for the XML to build the object ree
			4. now normalize/transform the data, if a schema is supplied. This inplies any additional data type  conversion
			5. next, if OpType is Local, apply paging, sorting, and/or filtering to the data, and store the result in this._dataView
			6. fire the databound event 
				
			paramType="string" optional="true" callback function 
			paramType="object" optional="true" callee object on which the callback will be executed. If none is specified, will assume global execution context 
			*/
			// think about when would this._data be different than null at all? in which scenarios ?  
			var table, tableObj, dsObj, s, p = this.settings, args, ds, resKey, noCancel = true;
			this._transactionLog = [];
			this._accumulatedTransactionLog = [];

			if (!callback) {
				callback = p.callback;
			}

			// fire the data binding event
			args = { cancel: false };

			if ($.isFunction(p.dataBinding)) {
				noCancel = p.dataBinding(this, args);
				if (noCancel === undefined) {
					noCancel = true;
				}
			}
			//A.T. 18 Jan 2011 - Fix for bug #61623 - igDataSource dataBinding handler cannot cancel data binding
			//if (!args.cancel) {
			if (noCancel) {
				if (this.settings.type === "unknown" && (this._runtimeType === null || this._runtimeType === undefined)) {
					this._runtimeType = this.analyzeDataSource();
				} //else if (this.type !== $.ig.Constants.DataSourceType.Unknown) {
				//	this._runtimeType = this.settings.type;
				//}
				switch (this._runtimeType) {
				case "function":
					// determine context and pass parameters 
					this._data = p.dataSource(); // this.dataSource is a function
					if (this.schema()) {
						this._data = this.schema().transform(this._data); // Q: do we store the normalized data in this._data, or in this._dataView ? 
					}
					break;
				case "array":
					if (this.schema() && this.settings.localSchemaTransform) {
						this._data = this.schema().transform(this.dataSource());
						if (this.dataSource().Metadata) {
							this._metadata = this.dataSource().Metadata;
						}
						this._origDs = this.dataSource();
					} else {
						this._data = this.dataSource(); // no schema
					}
					break;
				case "htmlTableDom":
				case "htmlTableId":
				case "htmlTableString":
					//A.T. 10 April Fix for bug #108547 - we shouldn't re-analyze the HTML table and rebind more than once. 
					if (this._tableBound) {
						break;
					}
					//A.T. 18 Jan 2011 - Fix for bug #62123 - igDataSource HTMLTableString binding problem
					this._runtimeType = this.analyzeDataSource();
					if (this._runtimeType === "htmlTableId") {
						tableObj = $('#' + this.dataSource());
						table = this._validateTable(tableObj);
					} else if (this._runtimeType === "htmlTableString") {
						// the analyzeDataSource() call has already done most of the work to parse the string and attach to the DOM for us
						tableObj = $('#' + this.settings.id + ' > table');
						table = this._validateTable(tableObj);
					} else {
						table = this.dataSource();
					}
					if (this.schema() && this.settings.localSchemaTransform) {
						this._data = this.schema().transform(table);
					} else {
						this._data = this.tableToObject(table); // no schema
					}
					this._tableBound = true;
					break;
				case "htmlListDom":
					this._data = this.schema().transform(this.dataSource());
					break;
				case "invalid":
					throw new Error($.ig.DataSourceLocale.locale.invalidDataSource);
					//break;
				case "unknown":
				case "json":
				case "xml":
					if (this.settings.type !== "json" && p.type !== "xml") {
						//throw new Error("Cannot determine the data source type. Please specify if it is JSON or XML data. ");
						throw new Error($.ig.DataSourceLocale.locale.unknownDataSource);
					} else {
						resKey = this.settings.responseDataKey;
						// there are two cases:
						// 1. string which is either JSON objects or XML string
						// 2. object - already parsed, or XML document element
						if ($.type(this.dataSource()) === "string") {
							if (p.type === "json") {
								dsObj = this.stringToJSONObject(this.dataSource());
							} else {
								dsObj = this.stringToXmlObject(this.dataSource());
							}
						} else {
							dsObj = this.dataSource();
						}
						// now check if there is schema defined
						if (this.schema() && this.settings.localSchemaTransform === true) {
							this._data = this.schema().transform(dsObj);
							// reference to the original data source
							if (resKey !== null && resKey !== undefined) {
								this._origDs = $.ig.findPath(dsObj, resKey);
							} else {
								this._origDs = dsObj;
							}
						} else if ((!this.schema() || this.settings.localSchemaTransform === false) && p.type === "json") {
							if (resKey !== null && resKey !== undefined) {
								this._data = this._origDs = $.ig.findPath(dsObj, resKey);
							} else {
								this._data = dsObj;
							}
							// reference to the original data source
							this._origDs = dsObj;
						} else if (!this.schema() && p.type === "xml") {
							// XML: we have an XML document but have no schema associated to it 
							// for future: think about automating this a bit, i.e. even if there is no schema defined, assume a predefined structure and fallback to it
							// when a control like the client grid is bound to the data source, the column definitions automatically translate to a data schema ! 
							// in fact when the igGrid is bound to the igDataSource, and there is no explicit schema defined, we can assume a predefined schema, something like:
							// <row> <cell></cell> ... </row> and so on. The initial schema comes from the column definitions, and 1) => if we cannot find the XPath, fallback
							// to the default schema, or 2) => if no columns are defined, assume the default xml schema again. 
							throw new Error($.ig.DataSourceLocale.locale.errorXmlSourceWithoutSchema);
						}
						// make sure to read the responseTotalRecCountKey no matter if localSchemaTransform = true or false
						this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, dsObj, this);

						if (dsObj.Metadata) {
							this._metadata = dsObj.Metadata;
						}

						this.summariesResponse(this.settings.summaries.summariesResponseKey, dsObj);
					}
					break;
				case "remoteUrl":
					// when the response arrives, we still need to additionally analyze it and apply schema, if it is present
					// Note that the schema may have already been applied directly on the server-side 
					//1. encode the parameters for sorting, paging and filtering 
					this._remoteData(callback, callee);
					break;
				case "empty":
					this._data = [];
					this._dataView = [];
					this._dataSummaries = [];
					break;
				default:
					break;
				}
				// describe the algorithm when dataView should be the same as data and when not
				this._dataView = this._data;
				this._filter = false;
				// apply initial sorting, if set, and if OpType is local.
				s = p.sorting;
				//if (s.type === $.ig.Constants.OpType.Local && s.defaultDirection !== $.ig.Constants.SortDirection.None && this._runtimeType !== $.ig.Constants.DataSourceType.RemoteUrl) {
				// A.T. fix for igGridSorting local sorting
				if (s.type === "local" && this._runtimeType !== "remoteUrl" && s.defaultFields.length > 0) {
					this.sort(s.defaultFields, s.defaultDirection, false);
				}
				// Check if paging is configured, and if so, 
				// if OpType === $.ig.Constants.OpType.Local => apply local paging
				if (p.paging.enabled && p.paging.type === "local" && this._runtimeType !== "remoteUrl") {
					this._page();
					// this is necessary
				}
				ds = this;
				this._populateTransformedData();
				// invoke the callback if present:
				if (this._runtimeType !== "remoteUrl") {
					this._invokeCallback(callee, callback);
				}
				// fire the data bound event 
				if ($.isFunction(p.dataBound) && !args.cancel) {
					p.dataBound(this);
				}
			}
			return this;
		},
		summariesResponse: function (key, dsObj) {
			/* Get summaries calculation data from remote response */
			var rec, resPath, i;

			if (key !== null && key !== '') {
				rec = dsObj;
				resPath = key.split(".");
				if (key.length > 0) {
					for (i = 0; i < resPath.length; i++) {
						rec = rec[resPath[i]];
					}
					this._dataSummaries = rec;
				} else {
					this._dataSummaries = dsObj;
				}
				if (this._dataSummaries === undefined || this._dataSummaries === null) {
					this._dataSummaries = [];
				}
			}
		},

		_populateTransformedData: function (data) {
			// M.H. populate summaries data
			// when datasource is local and we want to get summaries when summaryExecution is afterfilteringbeforepaging
			// we need to get filtered data BUT when all filter conditions are cleared then it is not called filter method(in datasource) from filter widget
			// but it is called dataBind and in this case we should not get this._filteredData but this._data
			if (data !== null && data !== undefined) {
				this._transformedData = data;
			} else {
				this._transformedData = this._data;
			}
		},

		_invokeCallback: function (callee, callback) {
			var cbResolved, calleeResolved;

			cbResolved = callback || this.settings.callback;
			calleeResolved = callee || this.settings.callee;

			if (cbResolved) {
				if (calleeResolved) {
					cbResolved.apply(calleeResolved, [true, "", this]);
				} else {
					cbResolved(true, "", this);
				}
			}
		},
		_remoteData: function (callback, callee) {
			var params, url = this.settings.dataSource, dataType = this.settings.responseDataType, contentType = this.settings.responseContentType, options;
			//1. encode URL params
			params = this._encodeUrl();
			if (callback) {
				this._customCallback = callback;
			} else {
				this._customCallback = null;
			}
			this._callee = callee;
			// finally invoke the call to $.ajax. This can be easily "overriden" in an extension of the $.ig.DataSource 
			options = {
				url: url,
				//params: params,
				data: params,
				dataType: dataType,
				async: true,
				context: this,
				contentType: contentType,
				cache: false,
				dataFilter: this._dataFilter,
				success: this._successCallback,
				complete: this._completeCallback,
				error: this._errorCallback
			};
			this._processRequest(options);
		},
		_dataFilter: function (data, type) {
			var ds, schema = this.context.schema(), rawData, t = this.context.settings.type, ver, returnString = false;
			// fall back
			if (type === undefined) {
				type = "text";
			}
			if (type === "xml") {
				schema._type = "xml";
				ds = this.context._processXmlResponse(data, this.context);
			} else if (type === "json") {
				if (schema) {
					schema._type = "json";
				}
				// data may be already a parsed JSON object
				if ($.type(data) === "string") {
					rawData = JSON.parse(data);
				} else {
					rawData = data;
				}
				returnString = true;
				ds = this.context._processJsonResponse(rawData, this.context);
				// should we really bother about this for now ? HTML data coming from the server ? 
				//} else if (type === "html") {
			} else { // "text"
				//A.T. workaround for jQuery's 1.5 and above bug related to dataFilter and success callback. We need to explicitly set the dataType to "text" when manually parsing it
				// get jquery version
				if (jQuery.fn.jquery) {
					ver = jQuery.fn.jquery.split('.');
				}
				if (ver && ver.length >= 2) {
					// if jQuery is 1.5 and greater or if the first major version is greater than 1 (when jQuery 2 comes out)
					// As of jQuery 1.5, using this dataFilter approach for manually controlling deserialization will no longer work if the request's dataType is set to "json" or even omitted.
					// another way of fixing this is using converters
					// http://api.jquery.com/extending-ajax/#Converters
					if (parseInt(ver[1], 10) > 4 || parseInt(ver[0], 10) > 1) {
						this.dataTypes = [];
						this.dataTypes.push("text");
						returnString = true;
					}
				}
				// try to analyze and detect automatically 
				data = $.type(data) === "string" ? $.trim(data) : data;
				if ((data && $.type(data) === "string" && (data.startsWith("<?xml") ||
					data.startsWith("<"))) || t === "xml") {
					// assume XML
					if (schema) {
						schema._type = "xml";
					}
					// we must convert the string to a document first
					ds = this.context._processXmlResponse(this.context.stringToXmlObject(data), false, this.context);
				} else if ((data && $.type(data) === "string" && data.startsWith("[")) ||
						(t === "json" || t === "array")) {
					if (schema) {
						schema._type = "json";
					}
					//ds = this.context._processJsonResponse(eval(data), this.context);
					//A.T. 20 Jan 2011 - fix for bug #62124 - igDataSource JSON string binding error
					ds = this.context._processJsonResponse(JSON.parse(data), this.context);
				} else if ((data && $.type(data) === "string" && data.startsWith("{")) ||
						t === "json") {
					if (schema) {
						schema._type = "json";
					}
					ds = this.context._processJsonResponse(JSON.parse(data), this.context);
				} else if ($.isXMLDoc(data)) {
					if (schema) {
						schema._type = "xml";
					}
					ds = this.context._processXmlResponse(data, true, this.context);
				} else if (data !== "" && data !== null) {
					throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedResponseType);
				}
			}
			/*
			resKey = this.context.settings.responseDataKey;
			if (resKey && resKey !== "") {
			ds = rawData[resKey];
			} else {
			ds = rawData;
			}
			
			if (this.context._isPagingReq || this.context._isFilteringReq) {
			key = this.context.settings.responseTotalRecCountKey;
			if (rawData && rawData[key]) {
			if ($.type(rawData[key]) === "number") {
			this.context.totalRecordsCount(rawData[key]);
			} else {
			// try parse
			this.context.totalRecordsCount(parseInt(rawData[key], 10));
			}
			}
			}
			*/
			//if (returnString) {
			//	return JSON.stringify(ds);
			//}
			if (returnString) {
				if (!(this.context.settings.paging && this.context.settings.paging.enabled && this.context.settings.paging.appendPage)) {
					this.context._data = ds;
				}
				this.context._alreadySet = true;
			}
			return ds;
		},
		_successCallback: function (data) {
			// set the data & dataView
			//if the response doesn't hold the list of records directly in the root of the response, should we 
			// set the data to the list of records, or only the dataView? 
			// meaning , should the "_data" contain the raw response , in this case, an object, if the resKey is set ?
			var x, len = data.length;
			if ((data === undefined || data === null) && !this._alreadySet) {
				this._data = [];
				this._dataView = [];
			} else {
				if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
					for (x = 0; x < len; ++x) {
						this._data[this._data.length] = data[x];
					}
				} else {
					if (this._alreadySet) {
						this._dataView = this._data;
					} else {
						this._data = data;
						this._dataView = data;
					}
				}
			}
			this._alreadySet = false;
			this._populateTransformedData();
			this._isPagingReq = false;
			this._isFilteringReq = false;
			this._isSortingReq = false;
			this._isSummariesReq = false;
		},
		_errorCallback: function (req, status, error) {
			// first parameter denotes whether the request has been successful or not, second param is the error msg
			var f = this._customCallback || this.settings.callback, errmsg, statusMsg;
			this._isPagingReq = false;
			this._isFilteringReq = false;
			this._isSortingReq = false;
			this._isSummariesReq = false;
			statusMsg = status === null ? " " : " (" + status + ") ";
			errmsg = $.ig.DataSourceLocale.locale.errorRemoteRequest + statusMsg + (error !== undefined ? error.message : req && req.statusText ? req.statusText : "");
			if (f && this._callee) {
				f.apply(this._callee, [false, errmsg, this]);
			} else if (f) {
				f(false, errmsg, this);
			}
		},
		_completeCallback: function (req, status) {
			var f, callee, s = this.settings.sorting, p = this.settings.paging;

			if (s.type === "local" && s.defaultFields.length > 0) {
				this.sort(s.defaultFields, s.defaultDirection, false);
			}
			// Check if paging is configured, and if so, 
			// if OpType === $.ig.Constants.OpType.Local => apply local paging
			if (p.enabled && p.type === "local") {
				this._page();
			}

			f = this._customCallback || this.settings.callback;
			callee = this._callee || this.settings.callee;
			if (f && callee) {
				f.apply(callee, [true, "", this]);
			} else if (f) {
				f(true, "", this);
			}
		},
		_processRequest: function (options) {
			// trigger the call
			if (this.settings.responseDataType === 'jsonp') {
				$.getJSON(options.url, options.data, $.proxy(this._jsonpFilter, this));
			} else {
				$.ajax(options);
				/*
				$.ajax({
				url: url,
				// do not specify a dataType, let jQuery detect the response type, and filter the data later on. 
				dataType: dataType,
				async: true,
				context: this,
				data: params,
				contentType: contentType,
				cache: false,
				dataFilter: dataFilterFunction,
				success: successCallback,
				complete: completeCallback,
				error: errorCallback
				});
				*/
			}
		},
		_jsonpFilter: function (data, type) {
			var resp, x;
			this.context = this;
			resp = this._dataFilter(data, "json");
			if (!resp.length && $.type(resp) === "object") {
				resp = [resp];
			}
			if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
				for (x = 0; x < resp.length; ++x) {
					this._data[this._data.length] = resp[x];
				}
			} else {
				this._data = resp;
				this._dataView = resp;
			}
			this._populateTransformedData();
			this._completeCallback();
		},
		_processJsonResponse: function (data, context) {
			var ds, schema = context.schema(), resKey, resPath, i;
			// support for remote custom loadOnDemand
			if (this._response_data) {
				this._response_data(data);
			}
			if (schema && schema.fields && schema.fields().length > 0 && this.settings.localSchemaTransform) {
				ds = schema.transform(data);
			} else {
				resKey = context.settings.responseDataKey;
				if (resKey !== null && resKey !== undefined) {
					//we are not using eval() here, merge implementations with the schema code 
					//consider arrays here as well 
					resPath = resKey.split(".");

					//if (resKey && resKey !== "") {
					if (resPath.length > 0) {
						//	ds = data[resKey];
						ds = data;
						for (i = 0; i < resPath.length; i++) {
							ds = ds[resPath[i]];
						}
					} else {
						ds = data;
					}
				} else {
					ds = data;
				}
			}

			if (context._isPagingReq || context._isFilteringReq) {
				this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, data, context);
			}
			if (data.Metadata) {
				this._metadata = data.Metadata;
			}

			this.summariesResponse(this.settings.summaries.summariesResponseKey, data);
			return ds;
		},
		// think about how to combine both searchField in the schema and responseDataKey, if defined in the root settings of the data source 
		_processXmlResponse: function (data, isParsed, context) {

			var ds, schema = context.schema(), tmpSchema, resKey;

			//make sure it's also possible to just define a searchfield without schema. currently the search field is in the schema? 
			if (schema && schema.fields && schema.fields().length > 0) {
				ds = this.settings.localSchemaTransform ? schema.transform(data) : data;
			} else {
				// convert the XML document to an array of JSON objects
				resKey = context.settings.responseDataKey;
				if (resKey && resKey !== "") {
					tmpSchema = new $.ig.DataSchema();
					ds = context._xmlToArray(tmpSchema._findXmlRecordsRoot(data, resKey));
				} else {
					ds = context._xmlToArray(data);
				}
			}
			return ds;
		},
		_xmlToArray: function (data) {
			// the assumptions here are several:
			// - the data that comes as a parameter is a XML document
			// - we are only going to traverse the children of the first root element - this is the default response type
			// for WCF services declared with BodyStyle = WebMessageBodyStyle.Wrapped attribute
			// we will also check of the root contains more than 1 node, and then assume the response is of type WebMessageBodyStyle.Bare
			// all other cases need to be handled by the developer - either specify schema or make sure the response has the format
			//  <root>
			//		< child> </child>
			//		....
			//  </root>
			var ds = [], root = data, i, r, j, name, val, o;
			o = window.ActiveXObject;
			if (data && data.childNodes && data.childNodes.length === 1) {
				// parse children of first root
				root = data.childNodes[0];
			}
			for (i = 0; i < root.childNodes.length; i++) {
				r = root.childNodes[i];
				ds[i] = [];
				for (j = 0; j < r.childNodes.length; j++) {
					name = o === undefined ? r.childNodes[j].localName : r.childNodes[j].baseName;
					val = o === undefined ? r.childNodes[j].textContent : r.childNodes[j].text;
					ds[i][name] = val;
				}
			}
			return ds;
		},
		_encodeUrl: function () {
			var props = this.settings, sParams = {}, fParams = {}, pParams = {},
				params, args, selParams = {}, sumParams = {}, extraParams = {}, pkParams = {}, noCancel = true;
			// if the schema is defined on the client, but we have RemoteUrl data source type, 
			// in the oData protocol it's possible to list fields that will be included in the response
			// so let's read that from the schema and encode it in the URL, in case the server-side
			// supports it. Example:
			// http://www.odata.org/developers/protocols/uri-conventions#SelectSystemQueryOption
			args = { cancel: false };
			params = { "sortingParams": sParams, "filteringParams": fParams, "pagingParams": pParams, "selectParams": selParams,
					"summariesParams": sumParams, "extraParams": extraParams, "pkParams": pkParams
				};
			if ($.isFunction(props.urlParamsEncoding)) {
				//args = props.urlParamsEncoding(this, params);
				noCancel = props.urlParamsEncoding(this, params);
			}
			//A.T. 18 Jan. 2011 - fix for bug #62309 - igDataSource unclear cancelability of urlParamsEncoding
			//if (!args.cancel) {
			if (noCancel) {
				this._encodeSelectParams(params);
				this._encodeSortingParams(params);
				this._encodeFilteringParams(params);
				this._encodePagingParams(params);
				this._encodeSummariesParams(params);
				// L.A. 10 August 2012 Fixing bugs #118643, #117764
				this._encodePkParams(params);
				// this should be implemented by any external features that are not direclly mapped as data source features
				// such as group by summaries
				if ($.isFunction(this.settings.encodeExtraParams)) {
					this.settings.encodeExtraParams(this, params);
				}

				if ($.isFunction(props.urlParamsEncoded)) {
					props.urlParamsEncoded(this, params);
				}
			}
			return $.extend(true, {}, params.sortingParams, params.filteringParams, params.pagingParams, params.selectParams, params.summariesParams,
				params.extraParams, params.pkParams);
		},
		// L.A. 10 August 2012 Fixing bugs #118643, #117764
		_encodePkParams: function (params) {
			var p = this.settings.paging, s = this.settings.sorting, f = this.settings.filtering,
				sm = this.settings.summaries;
			if (this._metadata && this._metadata.timezoneOffset && this._schema._pk && this._schema._pk &&
					((p.enabled && p.type === "remote") || (s.type === "remote"  || f.type === "remote" || sm.type === 'remote'))) {
				params.pkParams.pk = this._schema._pk;
			}
		},
		_encodeSelectParams: function (params) {
			var selParams = params.selectParams, i;

			if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length > 0) {
				// encode fields using oData $select
				// http://www.odata.org/developers/protocols/uri-conventions#SelectSystemQueryOption
				// example: http://services.odata.org/OData/OData.svc/Products?$select=Price,Name
				selParams.$select = "";
				for (i = 0; i < this.schema().fields().length; i++) {
					if (i !== 0) {
						selParams.$select += ",";
					}
					selParams.$select += this.schema().fields()[i].name;
				}
			} else if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length === 0) {

				// include all fields
				// http://services.odata.org/OData/OData.svc/Products?$select=*
				selParams.$select = "*";
			}
		},
		_encodePagingParams: function (params) {
			var p = this.settings.paging;
			if (p.enabled && p.type === "remote") {
				//if (p.enabled) {
				// handle paging URL params
				// is also paging request
				this._isPagingReq = true;
				if (p.pageIndexUrlKey !== null && p.pageSizeUrlKey !== null) {
					params.pagingParams[p.pageIndexUrlKey] = this.pageIndex();
					params.pagingParams[p.pageSizeUrlKey] = this.pageSize();
				} else {
					// OData
					// $skip is the start index and $top is the end index 
					params.pagingParams.$skip = this.pageIndex() * this.pageSize();
					//params.pagingParams.$top = params.pagingParams.$skip + this.pageSize();
					params.pagingParams.$top = this.pageSize();

					// encode $inlinecount
					params.pagingParams.$inlinecount = "allpages";
					// set response key for total number of pages
					if (this.settings.responseTotalRecCountKey === null) {
						// http://www.odata.org/developers/protocols/uri-conventions#InlinecountSystemQueryOption
						this.settings.responseTotalRecCountKey = "d.__count"; // this is the default OData conventions
					}
				}
			}
		},
		_encodeSortingParams: function (params) {
			var s = this.settings.sorting, tmpdir, i, sfields, hlayout = null;
			if (s.type === "remote") {
				// handle sorting params
				if (s.exprString) {
					sfields = this._parseSortExpressions(s.exprString);
				} else {
					// handle expressions array
					sfields = s.expressions;
				}
				this._isSortingReq = true;
				// now encode
				for (i = 0; i < sfields.length; i++) {
					if (sfields[i].layout) {
						hlayout = sfields[i].layout;
					}
					// it's a sorting request
					if (s.sortUrlAscValueKey !== null && s.sortUrlDescValueKey !== null && s.sortUrlKey !== null) {
						tmpdir = (sfields[i].dir && sfields[i].dir.toLowerCase().startsWith("asc")) ? s.sortUrlAscValueKey : s.sortUrlDescValueKey;
						params.sortingParams[s.sortUrlKey + '(' + sfields[i].fieldName + ')'] = tmpdir;
					} else {
						// OData style encoding (the default)
						if (params.sortingParams.$orderby === undefined) {
							params.sortingParams.$orderby = "";
						}
						params.sortingParams.$orderby = params.sortingParams.$orderby + sfields[i].fieldName + " " + sfields[i].dir.toLowerCase();
						if (i < sfields.length - 1) {
							params.sortingParams.$orderby += ",";
						}
						//params.sortingParams.$orderby = encodeURIComponent(params.sortingParams.$orderby);
					}
				}
				if (hlayout) {
					params.sortingParams.layout = hlayout;
				}
			}
		},
		_encodeFilteringParams: function (params) {
			var f = this.settings.filtering, ffields, i, key, exprNotReq, cond, d;
			if (f.type === "remote") {
				// handle filtering params
				if (f.exprString) {
					ffields = this._parseFilterExprString(f.exprString);
				} else {
					ffields = f.expressions;
				}
				for (i = 0; i < ffields.length; i++) {
					// is a filtering request
					this._isFilteringReq = true;
					cond = ffields[i].cond;

					exprNotReq = cond === "false" || cond === "true" ||
						cond === "today" ||
						cond === "yesterday" || cond === "thisMonth" ||
						cond === "lastMonth" || cond === "nextMonth" ||
						cond === "thisYear" || cond === "lastYear" ||
						cond === "nextYear" || cond === "null" ||
						cond === "notNull" || cond === "empty" ||
						cond === "notEmpty";
					// if the filtering url key is explicitly defined, use this encoding: 
					// example something.php?filter(Name)=Contains(NY)
					// otherwise we use OData as the default
					if (f.filterExprUrlKey !== null) {
						// check if a filtering condition for the column already exists
						key = f.filterExprUrlKey + '(' + ffields[i].fieldName + ')';
						if ($.type(ffields[i].expr) === "date") {
							d = Date.UTC(ffields[i].expr.getFullYear(), ffields[i].expr.getMonth(), ffields[i].expr.getDate(), ffields[i].expr.getHours(), ffields[i].expr.getMinutes());
							//d = ffields[i].expr.getTime();
						} else {
							d = ffields[i].expr;
						}
						if (params.filteringParams[key] === undefined) {
							params.filteringParams[key] = ffields[i].cond + '(' + (exprNotReq ? '' : d) + ')';
						} else {
							params.filteringParams[key] = params.filteringParams[key] + ',' + ffields[i].cond + '(' + (exprNotReq ? '' : d) + ')';
						}
					} else {
						// OData:
						// http://www.odata.org/developers/protocols/uri-conventions#FilterSystemQueryOption
						// we support the following out of the box:
						// Eq, Ne, Gt, Ge, Lt, Le, And, Or, Not
						// as well as the following functions:
						// endswith, startswith, indexof
						if (params.filteringParams.$filter === undefined) {
							params.filteringParams.$filter = "";
						}
						if (ffields[i].cond === "startsWith") {

							params.filteringParams.$filter += "startswith(" + ffields[i].fieldName + "," + "'" + ffields[i].expr + "') eq true";

						} else if (ffields[i].cond === "endsWith") {

							params.filteringParams.$filter += "endswith(" + ffields[i].fieldName + "," + "'" + ffields[i].expr + "') eq true";

						} else if (ffields[i].cond === "contains") {

							params.filteringParams.$filter += "indexof(" + ffields[i].fieldName + "," + "'" + ffields[i].expr + "') ge 0";

						} else if (ffields[i].cond === "doesNotContain") {

							params.filteringParams.$filter += "indexof(" + ffields[i].fieldName + "," + "'" + ffields[i].expr + "') eq -1";

						} else if (ffields[i].cond === "equals") {

							if ($.type(ffields[i].expr) === "string") {
								params.filteringParams.$filter += ffields[i].fieldName + " eq " + "'" + ffields[i].expr + "'";
							} else {
								params.filteringParams.$filter += ffields[i].fieldName + " eq " + ffields[i].expr;
							}
						} else if (ffields[i].cond === "true") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq true";
						} else if (ffields[i].cond === "false") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq false";
						} else if (ffields[i].cond === "doesNotEqual") {

							if ($.type(ffields[i].expr) === "string") {
								params.filteringParams.$filter += ffields[i].fieldName + " ne " + "'" + ffields[i].expr + "'";
							} else {
								params.filteringParams.$filter += ffields[i].fieldName + " ne " + ffields[i].expr;
							}

						} else if (ffields[i].cond === "greaterThan") {

							params.filteringParams.$filter += ffields[i].fieldName + " gt " + ffields[i].expr;

						} else if (ffields[i].cond === "lessThan") {

							params.filteringParams.$filter += ffields[i].fieldName + " lt " + ffields[i].expr;

						} else if (ffields[i].cond === "greaterThanOrEqualTo") {

							params.filteringParams.$filter += ffields[i].fieldName + " ge " + ffields[i].expr;

						} else if (ffields[i].cond === "lessThanOrEqualTo") {

							params.filteringParams.$filter += ffields[i].fieldName + " le " + ffields[i].expr;
						} else if (ffields[i].cond === "null") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq null";
						} else if (ffields[i].cond === "notNull") {
							params.filteringParams.$filter += ffields[i].fieldName + " ne null";
						} else if (ffields[i].cond === "empty") {
							params.filteringParams.$filter += "length(" + ffields[i].fieldName + ") eq 0";
						} else if (ffields[i].cond === "notEmpty") {
							params.filteringParams.$filter += "length(" + ffields[i].fieldName + ") gt 0";
						}

						if (i < ffields.length - 1) {
							params.filteringParams.$filter += " and ";
						}
						//params.filteringParams.$filter = encodeURIComponent(params.filteringParams.$filter);
						// Before, After, Today, Yesterday, and so on - are not supported by OData, only by our custom filtering 
					}
				}
				// now encode the filtering logic, if defined
				if (f.filterLogicUrlKey !== null && ffields.length > 0) {
					// takes the first field's logic prop
					params.filteringParams[f.filterLogicUrlKey] = ffields[0].logic;
				}
			}
		},
		_encodeSummariesParams: function (params) {
			var i, j, s = this.settings.summaries, cs = s.columnSettings,
				methodsStr,
				csLength = cs.length;

			if (s.type === 'remote') {
				for (i = 0; i < csLength; i++) {
					methodsStr = '';
					// check if methods are defined
					if (cs[i].summaryOperands === undefined || cs[i].summaryOperands === null) {
						continue;
					}
					for (j = 0; j < cs[i].summaryOperands.length; j++) {
						if (cs[i].summaryOperands[j].active === true || cs[i].summaryOperands[j].active === 1) {
							methodsStr += cs[i].summaryOperands[j].type + ',';
						}
					}
					if (methodsStr !== '') {
						params.summariesParams[s.summaryExprUrlKey + '(' + cs[i].columnKey + ')'] = methodsStr.slice(0, -1);
					}
				}
			}
		},

		_page: function (keepRecords) {
			var count = 0, startIndex, endIndex, i = 0;
			if (keepRecords === undefined) {
				keepRecords = false;
			}
			//this._filteredDataView = [];
			// reset the dataView:
			if (keepRecords) {
				count = this._dataView.length;
			} else {
				this._dataView = [];
			}
			if (!this._filter) {
				// this._dataView should contain only the number of records specified by pageSize. 
				// load the data for the current page only , in the DataView
				startIndex = this.pageIndex() * this.pageSize();
				endIndex = startIndex + this.pageSize() >= this._data.length ? this._data.length : startIndex + this.pageSize();
				for (i = startIndex; i < endIndex; i++) {
					this._dataView[count++] = this._data[i];
				}
			} else {
				startIndex = this.pageIndex() * this.pageSize();
				endIndex = startIndex + this.pageSize() >= this._filteredData.length ? this._filteredData.length : startIndex + this.pageSize();
				for (i = startIndex; i < endIndex; i++) {
					this._dataView[count++] = this._filteredData[i];
				}
			}
		},
		// multi-column sorting  (third column - whether sorting should be preserved or cleared ) 
		// field can be a schema field, or an index of the column 
		// fields => an array of fields object definitions: 
		// example: [{fieldName : "firstName"}, {fieldName : "lastName"}]
		// example 2: [{fieldIndex : 1} , {fieldIndex : 2}]
		sort: function (fields, direction, keepSortState) {
			/* Sorts the data source locally. The result (filtered data) can be obtained by calling dataView(). Remote filtering can be performed by just calling dataBind() and setting the settings.filtering.expressions
			multi-column sorting can be enabled by setting keepSortState to true. 
			fields => an array of fields object definitions: 
			example: [{fieldName : "firstName"}, {fieldName : "lastName"}]
			example 2: [{fieldIndex : 1} , {fieldIndex : 2}]
				
			paramType="object" an array of fields object definitions
			paramType="string" asc / desc direction
			paramType="bool" if set to true, enables multi-column sorting, and the previous sorting state is not cleared
			*/
			// check if there is a custom function defined
			var s = this.settings.sorting, schema, sortF, convertFunc, p = this.settings.paging, data, resetPaging = false, settings = this.settings;
			if (fields === undefined || fields === null) {
				throw new Error($.ig.DataSourceLocale.locale.noSortingFields);
			}
			// default sort function
			sortF = function (grid, fields, schema, reverse, convertf) {
				reverse = (reverse) ? -1 : 1;
				function compareVals(format, enableUTCDates, rowTemplate, x, y) {
					if (format) {
						// L.A. 09 August 2012 - Fixing bug #118640 When the grid is bound to UTC dates 
						// (remote or local data), grouping a time-formatted date column produces incorrect groups
						if ($.type(x) === "date" && $.type(y) === "date") {
							if (format === "time" || format === "timeLong" || format === "h:mm:ss tt") {
								// Create date objects with fake year
								x = new Date("01 01 2000 " + $.ig.formatter(x, "date", format, rowTemplate, enableUTCDates));
								y = new Date("01 01 2000 " + $.ig.formatter(y, "date", format, rowTemplate, enableUTCDates));
							} else {
								// Create date objects from date string
								x = new Date($.ig.formatter(x, "date", format, rowTemplate, enableUTCDates));
								y = new Date($.ig.formatter(y, "date", format, rowTemplate, enableUTCDates));
							}
						}
					}
					if ((x === null || x === undefined) && (y === null || y === undefined)) {
						return 0;
					}
					if ((x === null || x === undefined) && y !== null && y !== undefined) {
						return -1;
					}
					if (x !== null && x !== undefined && (y === null || y === undefined)) {
						return 1;
					}
					return x > y ? 1 : x < y ? -1 : 0;
				}
				return function (obj1, obj2) {
					var i, f, arr1 = [], arr2 = [], a, b, key, col, format, o, enableUTCDates,
						rowTemplate;
					if (grid) {
						o = grid.options;
						enableUTCDates = o.enableUTCDates;
						rowTemplate = (!o.rowTemplate || o.rowTemplate.length <= 0);
					}
					for (i = 0; i < fields.length; i++) {
						key = fields[i].fieldName;
						if (grid && grid.columnByKey) {
							col = grid.columnByKey(key);
							if (col !== undefined && col !== null) {
								format = col.format;
							}
						}
						if (fields[i].layout && ((settings.key && settings.key !== fields[i].layout) || !settings.key)) {
							continue;
						}
						f = fields[i];
						if (f.fieldIndex >= 0) {
							f.fieldName = f.fieldIndex;
						}
						a = obj1[f.fieldName];
						b = obj2[f.fieldName];
						if (convertf !== undefined) {

							// this is assumed to be a custom-defined function, that will override the default data source type conversion logic
							a = convertf(a, f.fieldName);
							b = convertf(b, f.fieldName);
						}
						//A.T. 19 Jan 2011 - Fix for bug #62963 - igDataSource - case sensitivity is not applied to sorting
						if (s.caseSensitive === false) {
							if (a !== undefined && a !== null && a.toLowerCase) {
								a = a.toLowerCase();
							}
							if (b !== undefined && b !== null && b.toLowerCase) {
								b = b.toLowerCase();
							}
						}
						// support a different direction for every separate column
						if (f.dir !== undefined && f.dir !== null) {
							reverse = f.dir.toLowerCase().startsWith("desc");
							reverse = (reverse) ? -1 : 1;
						} else if (direction !== undefined && direction !== null && direction !== "") {
							reverse = direction.toLowerCase().startsWith("desc");
							reverse = (reverse) ? -1 : 1;
						}
						// differentiate between single and multi-col sorting (for performance reasons)
						if (fields.length === 1) {
							arr1 = reverse * compareVals(format, enableUTCDates, rowTemplate, a, b);
							arr2 = reverse * compareVals(format, enableUTCDates, rowTemplate, b, a);
						} else {
							if (reverse === -1) {
								arr1.push(-compareVals(format, enableUTCDates, rowTemplate, a, b));
								arr2.push(-compareVals(format, enableUTCDates, rowTemplate, b, a));
							} else {
								arr1.push(compareVals(format, enableUTCDates, rowTemplate, a, b));
								arr2.push(compareVals(format, enableUTCDates, rowTemplate, b, a));
							}
						}
					}
					if (arr1 < arr2) {
						return -1;
					}
					if (arr1 > arr2) {
						return 1;
					}
					return 0;
				};
			};
			if (s.applyToAllData && s.type === "local") {
				if (this._filter && ((p.type === "local" && p.enabled === true) || p.enabled === false)) {
					data = this._filteredData;
				} else {
					data = this.data();
				}
				resetPaging = true;
			} else {
				data = this.dataView();
			}
			if ($.type(s.customFunc) === 'function') {
				// call the function, passing the data to be sorted, the fields, and the direction
				data = s.customFunc(data, fields, direction);
			} else {
				schema = this.settings.schema;
				/*
				for (i = 0; i < schema.fields.length; i++) {
				if (schema.fields[i].name === fields[0].fieldName) {
				type = schema.fields[i].type;
				}
				}
				*/
				if (!direction) {
					direction = "";
				}
				// check if a custom compare function is set
				if ($.type(s.compareFunc) === "function") {
					sortF = s.compareFunc;
				}
				// check if a custom conversion function is set
				if ($.isFunction(s.customConvertFunc)) {
					convertFunc = s.customConvertFunc;
				}
				//else {
				// we do not want to reset the default data source type conversion logic
				// convertFunc returns a function 
				//convertFunc = this._convertf;
				//}

				// we allow the developer to provide a single string of sort expressions, in the following format:
				// "col1 asc, col2 desc, col3 asc" ... 
				if ($.type(fields) === "string") {
					fields = this._parseSortExpressions(fields);
				}
				// A.T. 21 Jan Fix for bug #63146 - reversing of sorting should be the other way around if "direction" is specified as parameter in sort()
				// M.H. 16 March 2012 Fix for bug #105043 - when fields.length is 0 then sortF returns 0. But in Chrome when there are empty values the issues is represented
				if (fields.length > 0) {
					data = data.sort(sortF(this.settings.callee, fields, schema, direction.toLowerCase().startsWith("asc") ? false : true, convertFunc));
				}
			}
			// now if paging is enabled, and "applyToAllData" is true, we need to re-initialize the dataView
			if (resetPaging && p.type === "local") {
				/* DAY 2/15/12 101818- when filtering, need to set the filtered data, not _data */
				if (!this._filter) {
					this._data = data;
				} else {
					this._filteredData = data;
				}
				this._page();
			} else {
				// A.T. 14 Feb 2011 - fix for bug #66214
				this._dataView = data;
			}
			// M.H. 17 April 2012 Fix for bug #109475
			this._populateTransformedData(data);
			return this; // preserve chaining
		},
		clearLocalSorting: function () {
			/* This clears local sorting applied to the data view by resetting it to the original data and applying any paging */
			var s = this.settings.sorting, p = this.settings.paging, data, resetPaging = false;

			if (s.applyToAllData && s.type === "local") {
				if (this._filter && ((p.type === "local" && p.enabled === true) || p.enabled === false)) {
					data = this._filteredData;
				} else {
					data = this.data();
				}
				resetPaging = true;
			} else {
				data = this.dataView();
			}
			// now if paging is enabled, and "applyToAllData" is true, we need to re-initialize the dataView
			if (resetPaging && p.type === "local") {
				/* DAY 2/15/12 101818- when filtering, need to set the filtered data, not _data */
				if (!this._filter) {
					this._data = data;
				} else {
					this._filteredData = data;
				}
				this._page();
			} else {
				this._dataView = data;
			}
			this._populateTransformedData();
			return this; // preserve chaining
		},
		// expected format is "col1 ASC, col2 DESC, col3 ASC" ... and so on 
		_parseSortExpressions: function (s) {

			var fields = [], tmp, tmp2, i;
			tmp = s.split(",");

			for (i = 0; i < tmp.length; i++) {
				fields[i] = {};
				tmp2 = $.trim(tmp[i]).split(" ");
				fields[i].fieldName = tmp2[0];
				fields[i].dir = tmp2[1];
			}

			return fields;
		},
		// this is used when sorting data
		// type can be "string", "number", "boolean", "date". 
		//Other values are ignored and default conversion is used 
		_convertf: function (val, type) {
			// not necessary for now. default type conversion happens in the data source directly 
		},
		// same regarding multi-col. filtering: rowFilter (ref: DataTable). 
		// example: [{fieldName : "firstName", expr: "abc", cond: "StartsWith"}, {fieldName : "lastName"}]
		// example 2: [{fieldIndex : 1} , {fieldIndex : 2, expr: "a", cond : "Contains"}]
		// expr is the filter expression text , such as "abc", or a regular expression such as *test*
		// cond is the filtering condition such as StartsWith, EndsWith, Contains, Equals, DoesNotEqual, DoesNotContain
		// if expr is detected to be a regular expression, the "cond" part is skipped 
		filter: function (fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings) {
			/* filters the data source locally. Remote filtering can be performed by just calling dataBind() and setting the settings.filtering.expressions. The result (filtered data) can be obtained by calling dataView() 
			example: [{fieldName : "firstName", expr: "abc", cond: "StartsWith"}, {fieldName : "lastName"}]
			example 2: [{fieldIndex : 1} , {fieldIndex : 2, expr: "a", cond : "contains"}]
			expr is the filter expression text , such as "abc", or a regular expression such as *test*
			cond is the filtering condition such as startsWith, endsWith, contains, equals, doesNotEqual, doesNotContain
			if expr is detected to be a regular expression, the "cond" part is skipped 
			
			paramType="object" a list of field expression definitions
			paramType="AND|OR" boolean logic. Accepted values are AND and OR. 
			paramType="bool" if keepFilterState is set to true, it will not discard previous filtering expressions
			*/
			var i, j, expr = null, count = 0, skipRec = false, f = this.settings.filtering, p = this.settings.paging, data, t, k, schema, fields, tmpbool, resetPaging, allFieldsExpr, stringVal;
			schema = this.schema();
			if (schema === null || schema === undefined) {
				throw new Error($.ig.DataSourceLocale.locale.filteringNoSchema);
			}
			if ($.type(fieldExpressions) === "string") {
				expr = fieldExpressions;
			}
			if ($.type(fieldExpressionsOnStrings) === "string") {
				allFieldsExpr = fieldExpressionsOnStrings;
			} else if ($.type(fieldExpressionsOnStrings) === "undefined") {
				fieldExpressionsOnStrings = [];
			}
			if ($.type(fieldExpressions) === "array" && fieldExpressions.length === 0 && $.type(fieldExpressionsOnStrings) === "array" && fieldExpressionsOnStrings.length === 0) {
				return;
			}
			if (f.applyToAllData && f.type === "local") {
				data = this.data();
				resetPaging = true;
			} else {
				// cache the original dataView 
				if (this._cachedDataView && this._cachedDataView.length > 0) {
					//data = this.dataView();
					data = this._cachedDataView;
				} else {
					// COPY the this.dataView() in this._cachedDataView; this is necessary because we want to restore it later on 
					//this._cachedDataView = $.extend(true, {}, this.dataView());
					this._cachedDataView = $.merge([], this.dataView());
					data = this._cachedDataView;
				}
			}
			if ($.type(f.customFunc) === 'function') {
				// call the function, passing the filterExpression object which contains field names/indices, the current expression for the field, as well as condition for the field
				data = f.customFunc(fieldExpressions, data);
				//A.T. fix for bug #77646
				this._filteredData = data;
				//A.T. 20 Dec. 2011 Fix for bug #96819 - igDataSource filtering feature with own defined custom function does not filtering data
				this._dataView = [];
			} else {
				// re-initialize the dataView. We can do that safely, since data will either be cached, or will be stored in this.data(), meaning that will be the whole ds
				this._dataView = [];
				this._filteredData = [];
				// filter "data"
				// we will store all results in tmpData, and then assign it to the dataView. please ensure that 
				for (i = 0; i < data.length; i++) {
					skipRec = false;
					if (expr) {
						fieldExpressions = this._parseFilterExprString(expr);
					}
					if (allFieldsExpr) {
						fieldExpressionsOnStrings = this._parseFilterExprString(allFieldsExpr);
					}
					for (j = 0; j < fieldExpressions.length; j++) {
						// if there is no match, break, we aren't going to add the record to the resulting data view. 
						// the default boolean logic is to "AND" the fields 
						fields = schema.fields();
						if (fieldExpressions[j].fieldIndex) {
							if (fieldExpressions[j].fieldIndex < fields.length) {
								t = fields[fieldExpressions[j].fieldIndex].type;
							}
							skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldIndex], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond);
						} else {
							// M.H. 10 Sep 2012 Fix for bug #120759
							if (fieldExpressions[j].dataType !== undefined && fieldExpressions[j].dataType !== null) {
								t = fieldExpressions[j].dataType;
							} else {
								for (k = 0; k < fields.length; k++) {
									if (fields[k].name === fieldExpressions[j].fieldName) {
										t = fields[k].type;
										break;
									}
								}
							}
							skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldName], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond);
						}
						tmpbool = (fieldExpressions[j].logic !== null && fieldExpressions[j].logic !== undefined && (fieldExpressions[j].logic.toLowerCase() === "or" ||
							fieldExpressions[j].logic.toLowerCase() === "and")) ? fieldExpressions[j].logic : boolLogic;
						//A.T. 18 Jan. 2011 fix for bug 62126 - igDataSource local filtering expressions: the OR operator does not work
						if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
							tmpbool = "and";
						}
						if (skipRec && tmpbool.toLowerCase() === "and") {
							break;
						} else if (!skipRec && tmpbool.toLowerCase() === "or") {
							break;
						}
					}
					if (!skipRec) {
						for (j = 0; j < fieldExpressionsOnStrings.length; j++) {
							// if there is no match, break, we aren't going to add the record to the resulting data view. 
							// the default boolean logic is to "AND" the fields 
							fields = schema.fields();
							if (fieldExpressionsOnStrings[j].fieldIndex) {
								if (fieldExpressionsOnStrings[j].fieldIndex < fields.length) {
									t = fields[fieldExpressionsOnStrings[j].fieldIndex].type;
								}
								stringVal = data[i][fieldExpressionsOnStrings[j].fieldIndex] ? data[i][fieldExpressionsOnStrings[j].fieldIndex].toString() : "";
								skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond);
							} else {
								for (k = 0; k < fields.length; k++) {
									if (fields[k].name === fieldExpressionsOnStrings[j].fieldName) {
										t = fields[k].type;
										break;
									}
								}
								stringVal = data[i][fieldExpressionsOnStrings[j].fieldName] ? data[i][fieldExpressionsOnStrings[j].fieldName].toString() : "";
								skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond);
							}
							tmpbool = (fieldExpressionsOnStrings[j].logic !== null && fieldExpressionsOnStrings[j].logic !== undefined && (fieldExpressionsOnStrings[j].logic.toLowerCase() === "or" ||
								fieldExpressionsOnStrings[j].logic.toLowerCase() === "and")) ? fieldExpressionsOnStrings[j].logic : boolLogic;
							//A.T. 18 Jan. 2011 fix for bug 62126 - igDataSource local filtering expressions: the OR operator does not work
							if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
								tmpbool = "and";
							}
							if (skipRec && tmpbool.toLowerCase() === "and") {
								break;
							} else if (!skipRec && tmpbool.toLowerCase() === "or") {
								break;
							}
						}
					}
					if (!skipRec) {
						//this._dataView[count++] = data[i];
						this._filteredData[count++] = data[i];
					}
				}
			}
			this._filter = true;
			if (resetPaging && p.type === "local" && p.enabled === true) {
				// reset paging
				this.settings.paging.pageIndex = 0;
				this.pageSizeDirty(true);
				this._page();
			} else {
				for (i = 0; i < this._filteredData.length; i++) {
					this._dataView[i] = this._filteredData[i];
				}
			}
			this._populateTransformedData(this._filteredData);
			return this; // preserve chaining
		},
		clearLocalFilter: function () {
			/* This clears local filtering applied to the data view by resetting it to the original data and applying any paging */
			var i, f = this.settings.filtering, p = this.settings.paging, data, resetPaging;

			if (f.applyToAllData && f.type === "local") {
				data = this.data();
				resetPaging = true;
			} else {
				// cache the original dataView 
				if (this._cachedDataView && this._cachedDataView.length > 0) {
					//data = this.dataView();
					data = this._cachedDataView;
				} else {
					// COPY the this.dataView() in this._cachedDataView; this is necessary because we want to restore it later on 
					//this._cachedDataView = $.extend(true, {}, this.dataView());
					this._cachedDataView = $.merge([], this.dataView());
					data = this._cachedDataView;
				}
			}
			this._dataView = [];
			this._filteredData = data;
			if (resetPaging && p.type === "local" && p.enabled === true) {
				this._filter = true;
				// reset paging
				this.settings.paging.pageIndex = 0;
				this.pageSizeDirty(true);
				this._page();
			} else {
				if (p.enabled === false) {
					this._filter = true;
				}
				for (i = 0; i < this._filteredData.length; i++) {
					this._dataView[i] = this._filteredData[i];
				}
			}
			this._populateTransformedData(this._filteredData);
			return this; // preserve chaining
		},
		_parseFilterExprString: function (expr) {
			//A.T. 18 Jan 2011 - fix for bug #62418 
			var exprs = $.trim(expr).split(/(?=AND+)|(?=OR+)/i), i, j, fields = [], tmp, tmp2, isInvalid = true;
			for (i = 0; i < exprs.length; i++) {
				fields[i] = {};
				//A.T. 18 Jan 2011 -  Fix for bug #62415 - equality sign (=) is not parsed when in a filtering expression string
				//A.T. 19 Jan 2011 - removing (IN) operator. (bug #62365)
				tmp = $.trim(exprs[i]).split(/(?= \=+)|(?=<>+)|(?=>+)|(?=<+)|(?=LIKE+)|(?=NOT\WLIKE)+|(?=>\=+)|(?=<\=+)/);
				if ($.trim(exprs[i]).toLowerCase().startsWith("and")) {
					fields[i].logic = "AND";
					// strip AND 
					//tmp[0] = tmp[0].substring(tmp.indexOf(3));
				} else if ($.trim(exprs[i]).toLowerCase().startsWith("or")) {
					fields[i].logic = "OR";
					// strip OR
					//tmp[0] = tmp[0].substring(tmp.indexOf(2));
				}
				// the current logic field is always for the previous term 
				if (i > 0 && (fields[i].logic === "AND" || fields[i].logic === "OR")) {
					fields[i - 1].logic = fields[i].logic;
				}
				if (tmp[0].toLowerCase().startsWith("and") || tmp[0].toLowerCase().startsWith("or")) {
					fields[i].fieldName = $.trim(tmp[0].split(" ")[1]);
				} else {
					fields[i].fieldName = $.trim(tmp[0]);
				}
				tmp2 = $.trim(tmp[1]).split(" ");
				// fix ambiguous matching between <, >, and <>
				if (exprs[i].indexOf("<>") !== -1) {
					tmp2[0] = "<>";
					tmp2[1] = tmp[2].replace(">", "");
				}
				//A.T. 19 Jan 2011 - Fix for bug #62368 - igDataSource - Space character handling in filtering string expressions
				if (tmp2.length > 2) {
					// merge all entries from index one to the end into a single string 
					for (j = 2; j < tmp2.length; j++) {
						tmp2[1] = tmp2[1] + ' ' + tmp2[j];
					}
					tmp2 = [tmp2[0], tmp2[1]];
				}
				if (tmp[1].startsWith("NOT")) {
					fields[i].expr = $.trim(tmp[2].replace("LIKE", ""));
				} else {
					fields[i].expr = tmp2[1];
				}
				// validate field
				for (j = 0; j < this.schema().schema.fields.length; j++) {
					if (this.schema().schema.fields[j].name === fields[i].fieldName) {
						isInvalid = false;
						break;
					}
				}
				if (isInvalid) {
					//A.T. 18 Jan 2011 - fix for bug 62406 - filtering expression string fallback scenario should return an error
					throw new Error($.ig.DataSourceLocale.locale.fieldMismatch + fields[i].fieldName);
				}
				isInvalid = true;
				if (tmp2[0] === ">") {
					fields[i].cond = "greaterThan";
				} else if (tmp2[0] === "LIKE") {
					if (fields[i].expr.startsWith("%") && fields[i].expr.endsWith("%")) {
						fields[i].cond = "contains";
					} else if (fields[i].expr.endsWith("%")) {
						fields[i].cond = "startsWith";
					} else if (fields[i].expr.startsWith("%")) {
						fields[i].cond = "endsWith";
					} else {
						fields[i].cond = "equals";
					}
					//A.T. 18 Jan 2011 - Fix for bug #62355 the LIKE operator does not work as substitute for the Contains local filtering condition
					fields[i].expr = fields[i].expr.replace(/%/g, '');
				} else if (tmp2[0] === "NOT LIKE" || tmp2[0] === "NOT") {

					if (fields[i].expr.startsWith("%") && fields[i].expr.endsWith("%")) {
						fields[i].cond = "doesNotContain";
						//} else if (fields[i].expr.endsWith("%")) {
						//	fields[i].cond = "startsWith";
						//} else if (fields[i].expr.startsWith("%")) {
						//	fields[i].cond = "endsWith";
					} else {
						fields[i].cond = "doesNotEqual";
					}
					fields[i].expr = fields[i].expr.replace(/%/g, '');
				} else if (tmp2[0] === "=") {
					fields[i].cond = "equals";
				} else if (tmp2[0] === "<>") {
					fields[i].cond = "doesNotEqual";
				} else if (tmp2[0] === "<") {
					fields[i].cond = "lessThan";
				} else if (tmp2[0] === "<=") {
					fields[i].cond = "lessThanOrEqualTo";
				} else if (tmp2[0] === ">=") {
					fields[i].cond = "greaterThanOrEqualTo";
				} else {
					//A.T. 18 Jan 2011 - fix for bug 62406 - filtering expression string fallback scenario should return an error
					throw new Error($.ig.DataSourceLocale.locale.unrecognizedCondition + expr);
					// fallback
					//fields[i].cond = "Contains";
				}
			}
			return fields;
		},
		// think about passing the type directly as parameter, to avoid performance parsing overhead 
		_findMatch: function (val, expr, t, ignoreCase, cond) {
			// if the filter condition is one of the below ones, we do not require a filter expression to be set
			var tmpExpr, exprNotReq = cond === "false" || cond === "true" ||
				cond === "today" ||
				cond === "yesterday" || cond === "thisMonth" ||
				cond === "lastMonth" || cond === "nextMonth" ||
				cond === "thisYear" || cond === "lastYear" ||
				cond === "nextYear" || cond === "null" ||
				cond === "notNull" || cond === "empty" ||
				cond === "notEmpty";
			// no filter, therefore everything matches OK 
			if (expr === "" && !exprNotReq) {
				return true;
			}
			tmpExpr = $.trim(expr);
			//if (t === null || t === undefined) {
			//	t = $.type(expr);
			//}
			if (t === "regexp" || (t === "string" && tmpExpr.startsWith("/") && tmpExpr.endsWith("/"))) {
				if (t === "regexp") {
					return this._findRegExpMatch(val, expr, false);
				}
				return this._findRegExpMatch(val, tmpExpr.substring(1, tmpExpr.length - 1), true);
			}
			if (($.type(val) === "date" && (t === undefined || t === null)) || t === "date") {
				// parse expr
				try {
					expr = this._parser.toDate(expr);
				} catch (e) {
					// log error that expr could not be converted 
				}
				return this._findDateMatch(val, expr, cond);
			}
			if (($.type(val) === "boolean" && (t === undefined || t === null)) || (t === "boolean" || t === "bool")) {
				return this._findBoolMatch(val, cond);
			}
			if (($.type(val) === "number" && (t === undefined || t === null)) || t === "number") {
				return this._findNumericMatch(val, expr, cond);
			}
			return this._findStringMatch(val, expr, ignoreCase, cond);
		},
		_findStringMatch: function (val, expr, ignoreCase, cond) {
			var localVal;
			if (val !== null && val !== undefined) {
				localVal = ignoreCase ? val.toLowerCase() : val || "";
			} else {
				localVal = val;
			}
			if (expr !== null && expr !== undefined) {
				// VS 09/15/2012 Bug 120973 val can be null and type-detection in _findMatch fails
				expr = ignoreCase ? expr.toString().toLowerCase() : expr.toString();
			}
			// check if expr is a regular expression
			if (cond === "startsWith") {
				return localVal !== null && localVal !== undefined && localVal.startsWith(expr);
			}
			if (cond === "endsWith") {
				return localVal !== null && localVal !== undefined && localVal.endsWith(expr);
			}
			if (cond === "contains") {
				return localVal !== null && localVal !== undefined && localVal.indexOf(expr) !== -1;
			}
			if (cond === "doesNotContain") {
				return localVal !== null && localVal !== undefined && localVal.indexOf(expr) === -1;
			}
			if (cond === "equals") {
				return localVal !== null && localVal !== undefined && localVal === expr;
			}
			if (cond === "doesNotEqual") {
				return localVal !== null && localVal !== undefined && localVal !== expr;
			}
			if (cond === "null") {
				return localVal === null;
			}
			if (cond === "notNull") {
				return localVal !== null;
			}
			if (cond === "empty") {
				return localVal === null || localVal === undefined || localVal.length === 0;
			}
			if (cond === "notEmpty") {
				return localVal === null || localVal === undefined || localVal.length !== 0;
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
			//return false;
		},
		_findRegExpMatch: function (val, expr, str) {
			if (str) {
				return (new RegExp(expr)).test(val);
			}
			return val.match(expr);
		},
		// Equals, DoesNotEqual, GreaterThan, LessThan, GreaterThanOrEqualTo, LEssThanOrEqualTo
		_findNumericMatch: function (val, expr, cond) {
			// if expr is not numeric, convert it
			if ($.type(expr) !== "number") {
				expr = this._parser.toNumber(expr);
			}
			if (cond === "equals") {
				return val === expr;
			}
			if (cond === "doesNotEqual") {
				return val !== expr;
			}
			if (cond === "greaterThan") {
				return val > expr;
			}
			if (cond === "lessThan") {
				return val < expr;
			}
			if (cond === "greaterThanOrEqualTo") {
				return val >= expr;
			}
			if (cond === "lessThanOrEqualTo") {
				return val <= expr;
			}
			if (cond === "null") {
				return val === null;
			}
			if (cond === "notNull") {
				return val !== null;
				// A.T. 14 Feb 2011 - Fix for bug #64156
			}
			if (cond === "empty") {
				return (val === null || val === undefined || isNaN(val));
			}
			if (cond === "notEmpty") {
				return (val !== null && val !== undefined && !isNaN(val));
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
		},
		// True or False
		_findBoolMatch: function (val, cond) {
			if (cond === "true") {
				return val;
			}
			if (cond === "false") {
				return !val;
			}
			if (cond === "null") {
				return val === null;
			}
			if (cond === "notNull") {
				return val !== null;
			}
			if (cond === "empty") {
				return (val === null || val === undefined);
			}
			if (cond === "notEmpty") {
				return (val !== null && val !== undefined);
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
		},
		// Equals, DoesNotEqual, Before, After, Today, Yesterday, ThisMonth, LastMonth, NextMonth, ThisYear, LastYear, NextYear, ThisQuarter, LastQuarter, NextQuarter
		// the expected types are both Date for both val and expr.
		_findDateMatch: function (val, expr, cond) {
			var day1, mins1, secs1, hs1, ms1, yrs1, day2, mins2, secs2, hs2, ms2, yrs2, month1, month2, eq, cur,
				day3, mins3, secs3, hs3, ms3, yrs3, month3, mday1, mday2, mday3;
			// 1. get the "expr" date and divide it into year, month, quarter, day, week, etc.
			if (val !== null && val !== undefined) {
				day1 = val.getDay();
				mday1 = val.getDate();
				mins1 = val.getMinutes();
				secs1 = val.getSeconds();
				hs1 = val.getHours();
				ms1 = val.getMilliseconds();
				yrs1 = val.getYear();
				month1 = val.getMonth();
				//w1 = val.getWeek();
			}
			if ($.type(expr) === "date") {
				day2 = expr.getDay();
				mday2 = expr.getDate();
				mins2 = expr.getMinutes();
				secs2 = expr.getSeconds();
				hs2 = expr.getHours();
				ms2 = expr.getMilliseconds();
				yrs2 = expr.getYear();
				month2 = expr.getMonth();
			} else {
				expr = new Date(expr);
			}
			// current time
			cur = new Date();
			day3 = cur.getDay();
			mday3 = cur.getDate();
			mins3 = cur.getMinutes();
			secs3 = cur.getSeconds();
			hs3 = cur.getHours();
			ms3 = cur.getMilliseconds();
			yrs3 = cur.getYear();
			month3 = cur.getMonth();
			eq = day1 === day2 && mins1 === mins2 && hs1 === hs2 && yrs1 === yrs2 && month1 === month2;
			// now compare
			if (cond === "equals") {
				return eq;
			}
			if (cond === "doesNotEqual") {
				return !eq;
			}
			if (cond === "before") {
				return val < expr;
			}
			if (cond === "after") {
				return val > expr;
			}
			if (cond === "today") {
				return mday1 === mday3 && month1 === month3 && yrs1 === yrs3;
			}
			if (cond === "yesterday") {
				// handle month and year boundaries 
				return mday1 === mday3 - 1 && month1 === month3 && yrs1 === yrs3;
			}
			if (cond === "thisMonth") {
				return month1 === month3 && yrs1 === yrs3;
			}
			if (cond === "lastMonth") {
				//A.T. 18 Jan 2011 - Fix for bug #62354 - igDataSource LastMonth and NextMonth local filtering doesn't work properly
				// first month of the year special case
				if (month3 === 0) {
					return month1 === 11 && yrs1 === yrs3 - 1;
				}
				return month1 === month3 - 1 && yrs1 === yrs3;
			}
			if (cond === "nextMonth") {
				//A.T. 18 Jan 2011 - Fix for bug #62354 - igDataSource LastMonth and NextMonth local filtering doesn't work properly
				// last month of the year special case
				if (month3 === 11) {
					return month1 === 0 && yrs1 === yrs3 + 1;
				}
				return month1 === month3 + 1 && yrs1 === yrs3;
			}
			if (cond === "thisYear") {
				return yrs1 === yrs3;
			}
			if (cond === "lastYear") {
				return yrs1 === yrs3 - 1;
			}
			if (cond === "nextYear") {
				return yrs1 === yrs3 + 1;
			}
			if (cond === "on") {
				return yrs1 === yrs2 && month1 === month2 && mday1 === mday2;
			}
			if (cond === "notOn") {
				return !(yrs1 === yrs2 && month1 === month2 && mday1 === mday2);
				//else if (cond === "ThisQuarter") {
				//
				//} else if (cond === "LastQuarter") {
				//
				//} else if (cond === "NextQuarter") {
				//
			}
			if (cond === "null") {
				return val === null;
			}
			if (cond === "notNull") {
				return val !== null;
				// A.T. 14 Feb 2011 - fix for bug #64465
			}
			if (cond === "empty") {
				return (val === null || val === undefined);
			}
			if (cond === "notEmpty") {
				return (val !== null && val !== undefined);
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
		},
		/*
		clearFilter: function (fields) {
		// clears the filters, and rebinds the data so that there is no filtering applied on the dataView instance
		return this; // preserve chaining 
		},
		clearFilters: function () {	
		// clears all filters
		},
		*/
		// return 1 even if records count is 0.
		totalRecordsCount: function (count, key, dsObj, context) {
			/* Applicable only when the data source is bound to remote data. Gets / sets the total number of records in the data source. If data binding is remote, and there's paging or filtering enabled, the actual total number of records may not 
			match the number of records that exists on the client 
			paramType="number" optional="true" the total number of records 
			*/
			var rec, totalRecPath, i;
			if (context !== undefined && context !== null) {
				if (key) {
					totalRecPath = key.split(".");
					rec = dsObj;
					for (i = 0; i < totalRecPath.length; i++) {
						rec = rec[totalRecPath[i]];
					}
					if (dsObj && rec !== undefined && rec !== null) {
						if ($.type(rec) === "number") {
							this._recCount = rec;
						} else {
							// try parse
							this._recCount = parseInt(rec, 10);
						}
						this.hasTotalRecordsCount(true);
					} else {
						this.hasTotalRecordsCount(false);
					}
				} else {
					this.hasTotalRecordsCount(false);
				}
			} else if (count !== undefined && count !== null) {
				this._recCount = count;
			}
			return this._recCount;
		},
		hasTotalRecordsCount: function (hasCount) {
			/* gets / sets if the response from the server contains a property which specifies the total number of records in the server-side backend 
			paramType="bool" specifies if the data source contains a property that denotes the total number of records in the server-side backend
			*/
			if (hasCount === undefined || hasCount === null) {
				return this._hasCount;
			}
			this._hasCount = hasCount;
		},
		metadata: function (key) {
			/* returns metadata object for the specified key
			paramType="string" Primary key of the record
			returnType="object" metadata object
			*/

			// M.H. 24 Nov. 2011 Fix for bug 96603 - when metadata is undefined or null it should be returned otherwise it will be returned js error
			if (key === null || key === undefined || key === ''
					|| this._metadata === null || this._metadata === undefined) {
				return this._metadata;
			}

			return this._metadata[key];
		},
		totalLocalRecordsCount: function () {
			/* returns the total number of records in the local data source
			returnType="number" the number of records that are bound / exist locally 
			*/
			if (!this._filter) {
				return this._data.length;
			}
			return this._dataView.length;
		},
		pageCount: function () {
			/* returns the total number of pages 
			returnType="number" total number fo pages
			*/
			var c, realCount;
			if (!this._filter) {
				realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._data.length;
			} else {
				realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._filteredData.length;
			}
			c = Math.ceil(realCount / this.settings.paging.pageSize);
			return c === 0 ? 1 : c;
		},
		pageIndex: function (index) {
			/* gets /sets the current page index. If an index is passed as a parameter, the data source is re-bound. 
			paramType="number" optional="true" the page index. If none is specified, returns the current page index.
			returnType="number" the current page index 
			
			*/
			if (index === undefined || index === null) {
				//return this._pageIndex;
				return this.settings.paging.pageIndex === undefined ? 0 : this.settings.paging.pageIndex;
			}
			//this._pageIndex = index;
			// A.T. 18 Jan 2011 - Fix for bug #63149 - igDataSource - page content is erratic after changing page size
			this.settings.paging.pageIndex = parseInt(index, 10);
			this._cachedDataView = null;
			if (this.settings.paging.type === "local") {
				this._page(this.settings.paging.appendPage);
				this._invokeCallback();
			} else {
				this.dataBind();
			}
			return this;
		},
		// utility paging functions
		prevPage: function () {
			/* sets the page index to be equal to the previous page index and rebinds the data source */
			this.pageIndex(this.pageIndex() === 0 ? 0 : this.pageIndex() - 1);
			return this;
		},
		nextPage: function () {
			/* sets the page index to be equal to the next page index and rebinds the data source */
			if (this.pageIndex() >= this.pageCount() - 1) {
				return this;
			}
			this.pageIndex(this.pageIndex() + 1);
			return this;
		},
		pageSize: function (s) {
			/* gets /sets the page size and rebinds the data source if a parameter is specified. If no parameter is passed, returns the current page size
			paramType="number" optional="true" the page size. 
			*/
			if (s === undefined || s === null) {
				return this.settings.paging.pageSize;
			}
			// A.T. 18 Jan 2011 - Fix for bug #63149 - igDataSource - page content is erratic after changing page size
			this.settings.paging.pageSize = parseInt(s, 10);
			if (this.settings.paging.appendPage) {
				this.settings.paging.pageIndex = 0;
				this._cachedDataView = null;
			}
			if (this.settings.paging.type === "local") {
				this._page();
				this._invokeCallback();
			} else {
				this.dataBind();
			}
			return this;
		},
		pageSizeDirty: function (dirty) {
			/* for internal use
			paramType="object" excluded="true" 
			*/
			if (dirty === undefined || dirty === null) {
				return this._dirty;
			}
			this._dirty = dirty;
		},
		recordsForPage: function (p) {
			/* returns a list of records for the specified page. Implies that paging is enabled. 
			paramType="number" optional="false" the page index for which records will be returned 
			
			*/
			var d = [], si, ps, ei, i, c = 0;
			ps = this.pageSize();
			si = p * ps;
			ei = si + ps >= this._data.length ? this._data.length : si + ps;
			for (i = si; i < ei; i++) {
				d[c++] = this._data[i];
			}
			return d;
		},
		tableToObject: function (tableDOM) {
			/* converts a HTML TABLE dom element to a JavaScript array of objects that contain the records data 
			paramType="dom" TABLE dom element to transform
			returnType="object" 
			*/
			try {
				// no schema, just parse the table and store t in arrays
				var rows = $(tableDOM).children("tbody").children(), len, data, i, j;
				len = rows.length > 0 ? rows[0].cells.length : 0;
				data = [];
				for (i = 0; i < rows.length; i++) {
					data[i] = [];
					for (j = 0; j < len; j++) {
						data[i][j] = rows[i].cells[j].innerHTML;
					}
				}
				return data;
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTableNoSchema + e.message);
			}
		},
		_validateTable: function (obj) {
			if (obj.length === 0) {
				throw new Error($.ig.DataSourceLocale.locale.errorTableWithIdNotFound + this.dataSource());
			} else {
				return obj[0];
			}
		},
		stringToJSONObject: function (s) {
			/* parses the string and returns an evaluated JSON object
			paramType="string" the JSON as string. 
			*/
			var data = {};
			try {
				//data = eval(s);
				//A.T. 20 Jan 2011 Fix for bug #62124 - igDataSource JSON string binding error
				data = JSON.parse(s);
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingJsonNoSchema + e.message);
			}
			return data;
		},
		stringToXmlObject: function (s) {
			/* parses a string and returns a XML Document 
			paramType="string" the XML represented as a string
			*/
			var doc, parser;
			try {
				if (window.ActiveXObject) {
					doc = new ActiveXObject('Microsoft.XMLDOM');
					doc.async = 'false';
					doc.loadXML(s);
				} else {
					parser = new DOMParser();
					doc = parser.parseFromString(s, 'text/xml');
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingXmlNoSchema + e.message);
			}
			return doc;
		}
		// this function is not currently used
		/*
		_filterData: function (data) {
		
		if (this.settings.pageSize > 0)
		{
		var filteredData = [], count = 0, i = 0;
		for (i = this._pageIndex * this.settings.pageSize; i < this._pageIndex * this.settings.pageSize + this.settings.pageSize; i++) {
		filteredData[count++] = data[i];
		}
		return filteredData;
		}
		return data;
		}
		*/
	});
	$.ig.TypeParser = $.ig.TypeParser || Class.extend({
		toStr: function (obj) {
			return this.isNullOrUndefined(obj) ? "" : obj + this.empty();
		},
		toDate: function (obj, pk, key) {
            // L.A. 18 June 2012 Fixing bug #113265 Column 'date' shows empty values as 'NaN'
			if (this.isNullOrUndefined(obj) || obj === '' || $.type(obj) === 'function') {
				return null;
			}
			if ($.type(obj) === 'date') {
				return obj;
			}
			// OData & MS
			if (obj.length && obj.indexOf('/Date(') !== -1) {
				/*
				// account for timezone offset
				if (this._tzo === undefined) {
					this._tzo = new Date().getTimezoneOffset() * 60000;
				}
				if (this._dst === undefined) {
					this._dst = new Date().dst();
					if (this._dst) {
						this._tzo = new Date().stdTimezoneOffset() * 60000;
					}
				}
				*/
				// we need to get the local daylight offset on the client
				if (this._serverOffsets === undefined || this._serverOffsets[pk] === undefined) {
					return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10)  + this._serverOffset);
				}
				if (this._serverOffsets[pk][key] !== undefined && this._serverOffsets[pk][key] !== null) {
					return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10)  + this._serverOffsets[pk][key]);
				}
				return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10));
			}
			return new Date(obj);
		},
		toNumber: function (obj) {
			return (this.isNullOrUndefined(obj) || $.type(obj) === 'function') ? null : obj * this.num();
		},
		toBool: function (obj) {
			if ($.type(obj) === 'boolean') {
				return obj;
			}
			if (this.isNullOrUndefined(obj) || $.type(obj) === 'function') {
				return false;
			}
			if (obj === "1" || obj.toLowerCase() === "true" || obj === 1) {
				return true;
			}
			return false;
		},
		isNullOrUndefined: function (obj) {
			return obj === null || obj === undefined;
		},
		empty: function () {
			return "";
		},
		num: function () {
			return 1;
		}
	});
	/* the $.ig.DataSchema handles transformations for Array, JSON and Xml data objects.
	if your data is in any other format and/or needs to be additionally worked on, please pass it through $.ig.DataSource first
	Eg: when you need to fetch the data remotely, or when it is stored in a string and needs to be evaluated first 
	*/
	$.ig.DataSchema = $.ig.DataSchema || Class.extend({
		/* The $.ig.DataSchema handles transformations for Array, JSON and Xml data objects.
		If your data is in any other format and/or needs to be additionally worked on, please pass it through $.ig.DataSource first.
		Eg: When you need to fetch the data remotely, or when it is stored in a string and needs to be evaluated first 
		*/
		schema: {
			/* type="array" A list of field definitions specifying the schema of the data source. Field objects description: {fieldName, [fieldDataType], [fieldXPath]} */
			fields: [
			],
			/* type="string" this is the property (path) in the data source where the records are located. */
			searchField: null,
			/* type="string" this is the property in the resulting object where actual resulting records will be put. (So the result will not be array but an object if this is defined), after the potential data source transformation */
			outputResultsName: null
		},
		init: function (type, options) {
			if (options) {
				this.schema = $.extend(true, {}, $.ig.DataSchema.prototype.schema, options);
			}
			this._type = type;
			this._parser = new $.ig.TypeParser();
			this._parser._serverOffset = 0;
		},
		transform: function (data) {
			/* performs a transformation on the schema so that the resulting data matches the schema 
			paramType="object" the data to transform
			returnType="object" the transformed data
			*/
			var ndata = []; // the resulting normalized data 
			// transform data according to the fields
			switch (this._type) {
			case "array":
				ndata = this._arrays(data);
				break;
			case "json":
				ndata = this._json(data);
				break;
			case "xml":
				ndata = this._xml(data);
				break;
			case "htmlTableDom":
				ndata = this._table(data);
				break;
			case "htmlListDom":
				ndata = this._list(data);
				break;
			default:
				throw new Error('unknown data source type: ' + this._type);
				//break;
			}
			return ndata;
		},
		_setResKey: function (resKey, out) {
			if (!this.isEmpty(resKey)) {
				out[resKey] = []; // was {}
				return out[resKey];
			}
			return out;
		},
		_convertType: function (t, obj, pk, key) {
			if (t === "string") {
				return this._parser.toStr(obj);
			}
			if (t === "date") {
				return this._parser.toDate(obj, pk, key);
			}
			if (t === "number") {
				return this._parser.toNumber(obj);
			}
			if (t === "boolean" || t === "bool") {
				return this._parser.toBool(obj);
			}
			// no type conversion / unknown type
			return obj;
		},
		//_val: function (field, val, results, i, j, rec) {
		_val: function (field, val, results, i, rec) {
			// return this to the state before 28 Nov
			var t = field.type, j;
			if (!this.isEmpty(t)) {
				if (this.isEmpty(field.name)) {
					results[i][j] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name);
				} else {
					results[i][field.name] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name);
				}
			} else {
				if (this.isEmpty(field.name)) {
					//results[i][j] = val;
					if (rec) {
						results[i][j] = rec[i][j];
					} else {
						results[i][j] = val;
					}
				} else {
					//results[i][field.name] = val;
					if (rec) {
						// we must copy the whole object refrence, in order to get "by reference" types. 
						results[i][field.name] = rec[i][field.name];
					} else {
						results[i][field.name] = val;
					}
				}
			}
		},
		isEmpty: function (o) {
			/* specifies if the object is null, undefined, or an empty string 
			paramType="object" the object to check for being empty
			returnType="boolean"
			*/
			return o === undefined || o === null || o === "";
		},
		_arrays: function (data) {
			var i, j, tmp, hasArrays, resKey = this.schema.outputResultsName, out = {}, results;
			// optionally, a developer may decide to set all contents directly in the output object 
			results = this._setResKey(resKey, out);
			// object is empty and is not an array
			if (this.isObjEmpty(results) && $.type(results) !== "array") {
				results = [];
				out = results;
			}
			try {
				//A.T. 12 July 2011
				/*
				if (!this.isEmpty(this.schema.searchField)) {
				//data = eval("data." + this.schema.searchField);
				path = this.schema.searchField.split(".");
				if (path.length > 0) {
				for (i = 0; i < path.length; i++) {
				data = data[path[i]];
				}
				}
				}
				*/

				if (data.length > 0) {
					hasArrays = $.type(data[0]) === 'array';
				}
				for (i = 0; i < data.length; i++) {
                    // L.A. 23 May 2012 - Fixed bug #112518 The grid cannot bind to an associative JavaScript array (which has one or more undefined items)
                    if (data[i] === undefined) {
                        continue;
                    }
					results.push({});
					for (j = 0; j < this.schema.fields.length; j++) {
						if (hasArrays) {
							tmp = data[i][j];
						} else {
							tmp = data[i][this.schema.fields[j].name];
						}
                        // L.A. 23 May 2012 - Fixed bug #112518 The grid cannot bind to an associative JavaScript array (which has one or more undefined items)
						this._val(this.schema.fields[j], tmp, results, results.length - 1);
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingArrays + e.message);
			}
			return out;
		},
		// the data that comes is expected to be already evaluated 
		_json: function (data) {
			var i, j, root, resKey = this.schema.outputResultsName, out = {}, results;
			// optionally, a developer may decide to set all contents directly in the output object 
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results;
			}
			try {
				if (data.Metadata && data.Metadata.timezoneOffset !== undefined && !isNaN(data.Metadata.timezoneOffset)) {
					this._serverOffset = data.Metadata.timezoneOffset;
					this._parser._serverOffset = this._serverOffset;
					// we need the offsets for every particular date
					if (data.Metadata.timezoneOffsets) {
						this._serverOffsets = data.Metadata.timezoneOffsets;
						this._parser._serverOffsets = data.Metadata.timezoneOffsets;
					}
				} else {
					this._parser._serverOffset = 0;
				}
				// find the object holding the data
				if (!this.isEmpty(this.schema.searchField)) {
					root = eval("data." + this.schema.searchField);
				}
				// L.A. 02 October 2012 - Fixing bug #123398 
				// [Hierarchical Grid Knockoutjs Integration] Expanding a row in the hierarchical grid causes a JS error
				if (root === undefined || this.isEmpty(this.schema.searchField)) {
					root = data;
				}
				if (!root.length && $.type(root) === "object") {
					root = [root];
				}
				// traverse root
				if (root && root.length && root.length > 0) {
					for (i = 0; i < root.length; i++) {
						results[i] = {};
						for (j = 0; j < this.schema.fields.length; j++) {
							if (this.schema.fields[j].name !== "ig_pk") {
								if (root[i][this.schema.fields[j].name] === undefined) {
									// the input data doesn't match the schema
									throw new Error($.ig.DataSourceLocale.locale.errorSchemaMismatch + this.schema.fields[j].name);
								}
								this._val(this.schema.fields[j], root[i][this.schema.fields[j].name], results, i, root);
							}
						}
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingJson + e.message);
			}
			return out;
		},
		// the data that comes is already expected to be a parsed XML document object 
		_xml: function (data, recursiveSF) {
			var i, j, root, resNode, item, resKey = this.schema.outputResultsName, out = {}, results, namespaced, sf, k, r, rc, len1, len2, o, carrysf, ireal = 0;
			o = window.ActiveXObject;
			// optionally, a developer may decide to set all contents directly in the output object 
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results;
			}
			try {
				// find the searchField, if set
				// data is assumed to be a XML document 
				if (!this.isEmpty(this.schema.searchField)) {

					// it makes a big difference if the XML has namespace declarations (xmlns) or not
					// in the first case, we cannot use XPath expressions reliably directly, because 
					// they won't return any matches. Therefore if the XML is namespaced, we are going to 
					// manually traverse it and find matches by parsing the xpath expression (search field)
					// which will also sacrifice performance a bit
					namespaced = this._xmlHasNamespaces(data);
					if (!namespaced) {
						if (window.ActiveXObject === undefined) {
							if (!recursiveSF || recursiveSF.length <= 0) {
								root = data.evaluate(this.schema.searchField, data, null, XPathResult.ANY_TYPE, null);
							} else {
								root = data.evaluate(recursiveSF, data, null, XPathResult.ANY_TYPE, null);
							}
						} else {
							root = data.selectNodes(this.schema.searchField);
						}
					} else {
						// find the elements list manually
						if (this.schema.searchField.startsWith("//")) {
							sf = this.schema.searchField.substring(2, this.schema.searchField.length);
						} else {
							sf = this.schema.searchField;
						}
						// find *the first* instance, and assume it's parent will hold them all ! 
						root = this._findXmlRecordsRoot(data, sf);
					}
				} else {
					root = data;
				}
				// IEs
				if (!namespaced) {
					if (root && window.ActiveXObject !== undefined) {
						for (i = 0; i < root.length; i++) {
							item = root.item(i);
							results[i] = {};
							for (j = 0; j < this.schema.fields.length; j++) {
								// evaluate the xpath for the field, for the current item, if it is present
								resNode = item.selectSingleNode(this.schema.fields[j].xpath);
								if (resNode) {
									// If the node is an element then recursively go through the elements
									if (resNode.nodeType === 1 && this.schema.childDataProperty && resNode.nodeName === this.schema.childDataProperty) {
										this.schema.searchField = this.schema.childDataProperty;
										results[i][resNode.nodeName] = this._xml(item);
									} else {
										this._val(this.schema.fields[j], resNode.text, results, i);
									}
								} else {
									results[i][this.schema.fields[j].name] = "";
								}
							}
						}
					} else if (root) { // FF, Opera, Safari, Chrome etc. 
						i = 0;
						item = root.iterateNext();
						while (item) {
							results[i] = {};
							for (j = 0; j < this.schema.fields.length; j++) {
								// evaluate the xpath for the field, for the current item, if it is present
								resNode = data.evaluate(this.schema.fields[j].xpath, item, null, XPathResult.ANY_TYPE, null).iterateNext();
								if (resNode) {
									// If the node is an element then recursively go through the elements
									if (resNode.nodeType === 1 && this.schema.childDataProperty && (resNode.nodeName === this.schema.childDataProperty || resNode.nodeName === this.schema.seachField)) {
										if (!recursiveSF || recursiveSF.length <= 0) {
											carrysf = this.schema.searchField + '[' + (i + 1) + ']/' + this.schema.childDataProperty;
										} else {
											carrysf = recursiveSF + '[' + (i + 1) + ']/' + this.schema.childDataProperty;
										}
										results[i][this.schema.childDataProperty] = this._xml(data, carrysf);
									} else {
										this._val(this.schema.fields[j], resNode.textContent, results, i);
									}
								} else {
									results[i][this.schema.fields[j].name] = "";
								}
							}
							i++;
							item = root.iterateNext();
						}
					}
				} else {
					// list a list of records accessible by the childNodes prop
					len1 = root.childNodes.length;
					ireal = 0;
					for (i = 0; i < len1; i++) {
						r = root.childNodes[i];
						results.push({});
						for (j = 0; j < this.schema.fields.length; j++) {
							// think about how to optimize this, like that it could be awfully slow for bigger data sets ... 
							len2 = r.childNodes.length;
							for (k = 0; k < len2; k++) {
								rc = r.childNodes[k];
								if (this.schema.fields[j].name === (o === undefined ? rc.localName : rc.baseName)) {
									this._val(this.schema.fields[j], o === undefined ? rc.textContent : rc.text, results, ireal);
									break;
								}
							}
						}
						// check for empty object
						if ($.isEmptyObject(results[ireal])) {
							results.pop();
						} else {
							ireal++;
						}
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingXml + e.message);
			}
			return out;
		},
		// recursively find the parent root record holding the children
		_findXmlRecordsRoot: function (data, field) {
			var i, len, r, o, ret;
			o = window.ActiveXObject;
			if ((o === undefined ? data.localName : data.baseName) === field) {
				ret = data.parentNode;
			} else if (data && data.childNodes && data.childNodes.length > 0) {
				len = data.childNodes.length;
				for (i = 0; i < len; i++) {
					r = data.childNodes[i];
					//if ((o === undefined ? r.localName : r.baseName) === field) {
					//	ret = data;
					//}
					if (r.childNodes && r.childNodes.length > 0) {
						ret = this._findXmlRecordsRoot(r, field);
					}
				}
			}
			return ret;
		},
		_xmlHasNamespaces: function (data) {
			// in order not to introduce big performance hits, we are going to only to check the root elements, and the first child of the root, for 
			// "xmlns" attributes
			var i, ns, r, len, fc;
			if (data.childNodes && data.childNodes.length && data.childNodes.length > 0) {
				len = data.childNodes.length;
				for (i = 0; i < len; i++) {
					r = data.childNodes[i];
					if (!r) {
						return false;
					}
					ns = r.namespaceURI;
					if (ns !== "" && ns !== undefined && ns !== null) {
						return true;
					}
				}
				// if we still haven't found a namespace, try the first child element
				if (r && r.childNodes && r.childNodes.length > 0) {
					fc = r.childNodes[0];
					if (!fc) {
						return false;
					}
					ns = fc.namespaceURI;
					return (ns !== "" && ns !== undefined && ns !== null);
				}
			}
			return false;
		},
		_table: function (data) {
			// the assumption is that "data" contains the table DOM element. 
			var i, j, r, tbody, rows, resKey = this.schema.outputResultsName, out = {}, results;
			tbody = $(data).find("tbody")[0];

			// if there are headers, remove them. the grid will create its own. 
			// L.A. 15 August 2012 Fixing bugs #118934, #74552
			//$(data).find('thead').remove();

			// optionally, a developer may decide to set all contents directly in the output object 
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results;
			}
			try {
				if (tbody && tbody.nodeName && tbody.nodeName === "TBODY") {
					rows = tbody.rows;
					for (i = 0; i < rows.length; i++) {
						r = rows[i];
						results[i] = {};
						// iterate through the fields
						for (j = 0; j < this.schema.fields.length; j++) {
							this._val(this.schema.fields[j], r.cells[j].innerHTML, results, i);
						}
					}
				} else {
					throw new Error($.ig.DataSourceLocale.locale.errorExpectedTbodyParameter);
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTable + e.message);
			}
			return out;
		},
		_list: function (data) {
			var parsedData, img, anchor, id, li, ul, self = this, d = $(data), text, i, header, descriptions, counts, jqmNS = "data-";
			if ($.mobile && $.mobile.ns) {
				jqmNS += $.mobile.ns;
			}

			parsedData = [];

			// Text: text
			// Value: value
			// ImageUrl: imageUrl
			// NavigateUrl: navigateUrl
			// ChildDataProperty: childData
			// Anchor Target: target
			// H1, H2, H3, H4, H5, H6: header (taken out of text)
			// p, dd: description (taken out of text)
			// Span with ui-li-count class: count
			// li has jqm data role of list divider sets isDivider
			// Index of li will become a primary key
			// Include any additional identifiers here and before extracting them, make a check for hasOwnProperty
			if (d && (d.is('ul') || d.is('ol')) && d.children().length > 0) {
				d.children('li:not([' + jqmNS + 'role="itemTemplate"], [' + jqmNS + 'role="detailsTemplate"], [' + jqmNS + 'role="dividerTemplate"])').each(function (index) {
					li = $(this);
					img = li.children('img');
					// Init the parsed data parts
					parsedData[index] = {};
					// Parse logic
					if (self.schema.hasOwnProperty('primaryKey')) {
						self._val(self.schema.primaryKey, li.index(), parsedData, index);
					}
					if (self.schema.hasOwnProperty('isDivider')) {
						self._val(self.schema.isDivider, li.attr(jqmNS + "role") === "list-divider", parsedData, index);
					}
					if (img.length > 0 && img.attr('src')) {
						if (self.schema.hasOwnProperty('imageUrl')) {
							self._val(self.schema.imageUrl, img.attr('src'), parsedData, index);
						}
					}
					anchor = li.children('a');
					if (anchor.length > 0) {
						// K.D. February 20th, 2012 Bug #101873 Switching from extracting text only to extracting
						// all of the contents of the anchor. This feature was requested by PG.
						text = anchor.html();
						if (anchor.attr('href')) {
							if (self.schema.hasOwnProperty('navigateUrl')) {
								self._val(self.schema.navigateUrl, anchor.attr('href'), parsedData, index);
							}
						}
						if (anchor.attr('target')) {
							if (self.schema.hasOwnProperty('target')) {
								self._val(self.schema.target, anchor.attr('target'), parsedData, index);
							}
						}
						if (img.length === 0) {
							img = anchor.children('img');
							if (img.length > 0) {
								img.each(function () {
									if (this.outerHTML) {
										text = text.replace(this.outerHTML, '');
									} else {
										text = text.replace($("<div>").append(this).html(), '');
									}
								});
								/* text = text.replace($("<div>").append(img[0]).html(), ''); // remove just first image from the text */
							}
							if (img.length > 0 && img.attr('src')) {
								if (self.schema.hasOwnProperty('imageUrl')) {
									self._val(self.schema.imageUrl, img.attr('src'), parsedData, index);
								}
							}
						}
					} else {
						text = '';
						for (i = 0; i < li[0].childNodes.length; i++) {
							if (li[0].childNodes[i].nodeType === 3 && li[0].childNodes[i].data) {
								text += $.trim(li[0].childNodes[i].data);
							}
						}

					}
					if (self.schema.hasOwnProperty('header')) {
						header = li.children('h1, h2, h3, h4, h5, h6');
						if (header.length === 0 && anchor.length > 0) {
							header = anchor.children('h1, h2, h3, h4, h5, h6');
						}
						if (header.length > 0) {
							self._val(self.schema.header, header.text(), parsedData, index);
							header.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, '');
								} else {
									text = text.replace($("<div>").append(this).html(), '');
								}
							});
						}
					}
					if (self.schema.hasOwnProperty('description')) {
						descriptions = li.children('p, dd');
						if (descriptions.length === 0 && anchor.length > 0) {
							descriptions = anchor.children('p, dd');
						}
						if (descriptions.length > 0) {
							self._val(self.schema.description, descriptions.text(), parsedData, index);
							descriptions.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, '');
								} else {
									text = text.replace($("<div>").append(this).html(), '');
								}
							});
						}
					}
					if (self.schema.hasOwnProperty('count')) {
						counts = li.children('span.ui-li-count');
						if (counts.length === 0 && anchor.length > 0) {
							counts = anchor.children('span.ui-li-count');
						}
						if (counts.length > 0) {
							self._val(self.schema.count, parseInt(counts.text(), 10), parsedData, index);
							counts.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, '');
								} else {
									text = text.replace($("<div>").append(this).html(), '');
								}
							});
						}
					}
					if (self.schema.hasOwnProperty('text')) {
						self._val(self.schema.text, text, parsedData, index);
					}
					id = li.attr('id');
					if (id) {
						if (self.schema.hasOwnProperty('value')) {
							self._val(self.schema.value, id, parsedData, index);
						}
					}
					ul = li.children('ul, ol');
					if (ul.length > 0) {
						if (self.schema.hasOwnProperty('childData') && self.schema.childData.hasOwnProperty('name')) {
							parsedData[index][self.schema.childData.name] = self._list(ul);
						}
					}
				});
			}
			return parsedData;
		},
		isObjEmpty: function (obj) {
			/* specifies if the object has custom properties or not 
			paramType="object" the object to check for presence or lack of custom properties
			returnType="boolean" 
			*/
			var prop;
			for (prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					return false;
				}
			}
			return true;
		},
		fields: function () {
			/* type="array" A list of field definitions specifying the schema of the data source. Field objects description: {fieldName, [fieldDataType], [fieldXPath]} */
			return this.schema.fields;
		}
	});
	// Helper/wrapper classes for $.ig.DataSource 
	$.ig.RemoteDataSource = $.ig.RemoteDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "remoteUrl";
			this._super(options);
			return this;
		}
	});
	$.ig.JSONDataSource = $.ig.JSONDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "json";
			this._super(options);
			return this;
		}
	});
	$.ig.RESTDataSource = $.ig.RESTDataSource || $.ig.DataSource.extend({
		settings: {
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
				encodeRemoveInRequestUri: true,
				/* type="function" specifies a custom function to serialize content sent to the server. It should accept a single object or an array of objects and return a string. */
				contentSerializer: null,
				/* type="string" specifies the content type of the request */
				contentType: 'application/json; charset=utf-8'
			}
		},
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.restSettings = $.extend(true, this.settings.restSettings, options.restSettings);
			this._createHttpHandlers();
			this._createLogVerbMapping();
			this._setLazyUrls();
			this._super(options);
			return this;
		},
		saveChanges: function () {
			// use $.ajax with the HTTP verb for every type of CRUD operation on the specified URL
			// for each entry in the transaction log create a new request
			// if batching is enabled create seperate arrays and send together
			var log, verb, batchOps = { "POST" : [], "PUT" : [], "DELETE" : [], "CELL" : []}, i;
			// set new callback count
			this._asyncCallbackCount = 0;
			for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
				log = this._accumulatedTransactionLog[i];
				verb = this._logVerbMap[log.type];
				if (log.type === "cell") {
					batchOps.CELL.push(log);
				} else if (this._isBatch(verb) === true) {
					batchOps[verb].push(log);
				} else {
					this._asyncCallbackCount++;
					this._saveSingleChange(verb, log);
				}
			}
			if (batchOps.CELL.length > 0) {
				this._saveAllCellChanges(batchOps.CELL);
			}
			if (batchOps.POST.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllCreateChanges(batchOps.POST);
			}
			if (batchOps.PUT.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllUpdateChanges(batchOps.PUT);
			}
			if (batchOps.DELETE.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllDeleteChanges(batchOps.DELETE);
			}
		},
		_saveSingleChange: function (verb, change) {
			/* saves a single (nonbatch) transaction */
			var data, url;
			data = (verb === "POST" || verb === "PUT") ? change.row : null;
			url = this._getProperUrl(verb, false, (verb === "DELETE" || verb === "PUT") ? change.rowId : undefined);
			this._call(verb, url, data);
		},
		_saveAllCellChanges: function (cellLogs) {
			var i, combined = {}, rowLogs = [], cl;
			for (i = 0; i < cellLogs.length; i++) {
				cl = cellLogs[i];
				if (combined[cl.rowId] === undefined) {
					combined[cl.rowId] = {};
					combined[cl.rowId].row = this.findRecordByKey(cl.rowId);
				}
				combined[cl.rowId].row[cl.col] = cl.value;
			}
			// normalize
			$.each(combined, function (key, value) {
				value.rowId = key;
				rowLogs.push(value);
			});
			if (this._isBatch('PUT') === true) {
				this._asyncCallbackCount++;
				this._saveAllUpdateChanges(rowLogs);
			} else {
				for (i = 0; i < rowLogs.length; i++) {
					this._asyncCallbackCount++;
					this._saveSingleChange('PUT', rowLogs[i]);
				}
			}
		},
		_saveAllCreateChanges: function (createLogs) {
			var data = [], i;
			for (i = 0; i < createLogs.length; i++) {
				data.push(createLogs[i].row);
			}
			this._call('POST', this._getProperUrl('POST', true), data);
		},
		_saveAllUpdateChanges: function (updateLogs) {
			var data = [], urlParams = "?", i;
			for (i = 0; i < updateLogs.length; i++) {
				data.push(updateLogs[i].row);
				urlParams += "index=" + updateLogs[i].rowId + (i !== updateLogs.length - 1 ? "&" : "");
			}
			this._call('PUT', this._getProperUrl('PUT', true) + urlParams, data);
		},
		_saveAllDeleteChanges: function (deleteLogs) {
			var urlParams = "", i, data = null;
			if (this.settings.restSettings.encodeRemoveInRequestUri === true) {
				urlParams = "?";
				for (i = 0; i < deleteLogs.length; i++) {
					urlParams += "index=" + deleteLogs[i].rowId + (i !== deleteLogs.length - 1 ? "&" : "");
				}
			} else {
				data = [];
				for (i = 0; i < deleteLogs.length; i++) {
					data.push(deleteLogs[i].rowId);
				}
			}
			this._call('DELETE', this._getProperUrl('DELETE', true) + urlParams, data);
		},
		_createHttpHandlers: function () {
			// Adding only success related handlers
			//  handle errors accurately
			this._okHandler = $.proxy(this._responseOk, this);
			this._createdHandler = $.proxy(this._responseCreated, this);
			this._noContentHandler = $.proxy(this._responseNoContent, this);
			this._httpHandlers = {
				"POST" : {
					"201": this._createdHandler
				},
				"PUT" : {
					"200": this._okHandler,
					"201": this._createdHandler,
					"204": this._noContentHandler
				},
				"DELETE" : {
					"200": this._okHandler,
					"204": this._noContentHandler
				}
			};
		},
		_createLogVerbMapping: function () {
			this._logVerbMap = {
				"newrow": "POST",
				"row": "PUT",
				"deleterow": "DELETE",
				"cell": "PUT"
			};
		},
		_setLazyUrls: function () {
			var rs = this.settings.restSettings, tempUrl = null, tempTmpl = null;
			// get a single set value
			$.each(rs, function (key, value) {
				if (value) {
					if (value.url) {
						tempUrl = value.url;
					}
					if (value.template) {
						tempTmpl = value.template;
					}
				}
			});
			// use temp value on null options
			$.each(rs, function (key, value) {
				if (value) {
					if (value.url !== undefined && value.url === null) {
						value.url = tempUrl;
					}
					if (value.template !== undefined && value.template === null) {
						value.template = tempTmpl;
					}
				}
			});
			// set private urls
			this._putUrl = rs.update.url;
			this._putTmpl = rs.update.template;
			this._postUrl = rs.create.url;
			this._postTmpl = rs.create.template;
			this._deleteUrl = rs.remove.url;
			this._deleteTmpl = rs.remove.template;
		},
		_getProperUrl: function (verb, batch, id) {
			var vL = verb.toLowerCase(), url = this["_" + vL + "Url"];
			if (url && url.length > 0 && url.substr(url.length - 1) !== "/") {
				url += "/";
			}
			if (!batch || batch === false) {
				if (this["_" + vL + "Tmpl"] !== null) {
					url = this["_" + vL + "Tmpl"];
					if (id) {
						url = url.replace("${id}", id);
					}
				} else {
					if (id) {
						url += id;
					}
				}
			}
			return url;
		},
		// All success codes are currently doing the same thing - decreasing the async callback count and checking if
		// all async operations completed. If a more sophisticated status handling is required in the future these can be
		// changed accordingly.
		_responseOk: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({ Success: textStatus === "success" }, textStatus, jqXHR);
			}
		},
		_responseCreated: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({ Success: textStatus === "success" }, textStatus, jqXHR);
			}
		},
		_responseNoContent: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({ Success: textStatus === "success" }, textStatus, jqXHR);
			}
		},
		_isBatch: function (verb) {
			switch (verb) {
			case "POST":
				return this.settings.restSettings.create.batch;
			case "PUT":
				return this.settings.restSettings.update.batch;
			case "DELETE":
				return this.settings.restSettings.remove.batch;
			default:
				return false;
			}
		},
		_call: function (verb, url, data) {
			var dataString = this.settings.restSettings.contentSerializer !== null ?
						this.settings.restSettings.contentSerializer(data) : JSON.stringify(data);
			$.ajax({
				type: verb,
				url: url,
				data: dataString,
				statusCode: this._httpHandlers[verb],
				contentType: this.settings.restSettings.contentType,
				cache: false,
				processData: true
			});
		}
	});
	$.ig.JSONPDataSource = $.ig.JSONPDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.responseDataType = 'jsonp';
			this._super(options);
			return this;
		}
	});
	$.ig.XmlDataSource = $.ig.XmlDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "xml";
			this._super(options);
			return this;
		}
	});
	$.ig.FunctionDataSource = $.ig.FunctionDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "function";
			this._super(options);
			return this;
		}
	});
	// the dataSource should be a reference to a DOM element
	$.ig.HtmlTableDataSource = $.ig.HtmlTableDataSource || $.ig.DataSource.extend({
		init: function (options) {

			if (!options) {
				options = {};
			}
			options.type = "htmlTableDom";
			this._super(options);
			return this;
		}
	});
	$.ig.ArrayDataSource = $.ig.ArrayDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "array";
			this._super(options);
			return this;
		}
	});
	// the idea of the mashup data source is to combine several flat data sources from different locations into a single one
	// primary key matching is performed if keys are defined in the respective flat DataSource instances
	// after the mashup is processed, a combined data view and data instances are created and paging / sorting / filtering can work *locally* on the mashup
	// when some of the mashup sources is remote, callbacks are executed in order, and the final data binding part to combine the mashup
	// is called only when all of the individual data sources are data bound 
	$.ig.MashupDataSource = $.ig.MashupDataSource || $.ig.DataSource.extend({
		// the mashup data source is an array of flat data sources, which could be anything: local / remote / XML / JSON, etc. 
		// if an element in the dataSource array is not of type $.ig.DataSource, then it is assumed to be in the following format:
		// {options } 
		// where options will be used to create an $.ig.DataSource instance , example:
		//	var sources = [
		//		{dataSource: namedData, primaryKey: "ProductID"}, 
		//		{dataSource: "/demos/server/proxy.php?url=http://services.odata.org/OData/OData.svc/Products?$format=json", primaryKey: "ID"}
		//	];
		//	
		//	var ds = new $.ig.MashupDataSource({callback:render, dataSource: sources});
		//	ds.dataBind();
		//
		/* type="object" Defines the configuration setting for the mashup data source. */
		mashupSettings: {
			/* type="bool" Indicates whether to ignore records that have no corresponding data in all of the provided data sources. */
			ignorePartialRecords: false,
			/* type="array" An array of $.ig.DataSource instances holding the disperse data. */
			dataSource: []
		},
		init: function (options) {
			// initialize $.ig.DataSource
			this._super(options);
			if (options) {
				this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
				this.settings = $.extend(true, {}, $.ig.MashupDataSource.prototype.mashupSettings, this.settings);
			}
			// a list of flat data sources from which the mashup will be created 
			this._sources = [];
			this._dataBindingComplete = false;
			this._sourcesStatus = [];
			this._hashedDataViews = [];

			return this;
		},
		_checkDataBindingComplete: function (status, msg, ownerDs) {
			// once this is done, set it as dataSource of the actual mashup data source, and call super's dataBind()
			var i, j, k, hasPrimaryKeys = true, totalLength = 0, data = [], d, rindex, keyVal, prop;

			this._dataBindingComplete = true;

			for (i = 0; i < this._sources.length; i++) {
				if (this._sources[i] === ownerDs) {
					this._sourcesStatus[i] = 1;
				}

				if (this._sourcesStatus[i] === 0) {
					this._dataBindingComplete = false; // still expecting some data source 
				}
			}
			// now that we have all separate data sources bound individually, and their dataViews filled with data 
			// we start assembling the mashup data source, by doing indexing on the primary keys (if defined)
			if (this._dataBindingComplete) {
				// check if there are primary keys defined for every individual data source 
				for (i = 0; i < this._sources.length; i++) {
					if (this._sources[i].settings.primaryKey === "" || this._sources[i].settings.primaryKey === null || this._sources[i].settings.primaryKey === undefined) {
						hasPrimaryKeys = false;
						break;
					}
				}
				// 1. determine the number of rows = max ( data source length) , also depending on the value of ignorePartialRecords
				// the data source with the largest number of records defines the mashup data source length 
				totalLength = this._sources[0].dataView().length;
				for (i = 0; i < this._sources.length; i++) {
					totalLength = this.settings.ignorePartialRecords ?
							(this._sources[i].dataView().length < totalLength ? this._sources[i].dataView().length : totalLength) :
							(this._sources[i].dataView().length > totalLength ? this._sources[i].dataView().length : totalLength);
				}
				// this also implies that there is schema present 
				if (hasPrimaryKeys) {
					// perform indexing based on the primary keys
					// for each data source, create hashes 
					for (i = 0; i < this._sources.length; i++) {
						this._hashedDataViews[i] = {};
						//consider the scenario where "primaryKey" is set to more than one field 
						// now iterate the records of the respective data source
						for (j = 0; j < this._sources[i].dataView().length; j++) {
							this._hashedDataViews[i][this._sources[i].dataView()[j][this._sources[i].settings.primaryKey]] = this._sources[i].dataView()[j];
						}
					}
					// now fill-in the "data":
					for (i = 0; i < totalLength; i++) {
						data[i] = {};
						// merge the objects
						for (j = 0; j < this._sources.length; j++) {
							if (this._sources[j].dataView().length > i) {
								keyVal = this._sources[j].dataView()[i][this._sources[j].settings.primaryKey];
								data[i] = $.extend(true, {}, data[i], this._hashedDataViews[j][keyVal]);
								//this._sources[j].dataView().length > i ? this._hashedDataViews[j][keyVal] : {});
							} else {
								data[i] = $.extend(true, {}, data[i], {});
							}
						}
					}
				} else {
					// the easiest - no primary keys, process sequentially record by record 
					for (i = 0; i < totalLength; i++) {
						data[i] = {};
						for (j = 0; j < this._sources.length; j++) {
							d = this._sources[j];
							if (d.dataView()[0].length) {
								for (k = 0; k < d.dataView()[0].length; k++) {
									// check if there is schema defined or not 
									rindex += k;
									if (d.schema() && d.schema().fields().length > 0) {
										data[i][d.schema().fields()[k]] = i >= d.dataView().length ? '' : d.dataView()[i][d.schema().fields()[k]];
									} else {
										data[i][rindex] = i >= d.dataView().length ? '' : d.dataView()[i][k];
									}
								}
							} else {
								for (prop in d.dataView()[i]) {
									if (d.dataView()[i].hasOwnProperty(prop)) {
										//if (d.schema() && d.schema().fields().length > 0) {
										//	data[i][d.schema().fields().prop] = i >= d.dataView().length ? '' : d.dataView()[i][d.schema().fields().prop];
										//} else {
										data[i][prop] = i >= d.dataView().length ? '' : d.dataView()[i][prop];
										//}
									}
								}
							}
						}
						rindex = 0;
					}
				}
				this.settings.dataSource = data;
				this.settings.type = "array";
				this._runtimeType = this.analyzeDataSource();
				// finally call the data binding of the mashup 
				this.dataBind();
			}
		},
		dataBind: function () {
			var i, ds = this.settings.dataSource;
			if (this._dataBindingComplete) {
				// we can proceed to data binding the mashup 
				this._dataBindingComplete = false; // reset 
				this._super();
			} else {
				// setup the mashup for binding its individual data sources 
				this._dataBindingComplete = false;
				// traverse the sources and instantiate a data source object, if not already passed as parameter 
				for (i = 0; i < ds.length; i++) {
					if (ds[i] instanceof $.ig.DataSource) {
						this._sources[i] = ds[i];
					} else if (ds[i].hasOwnProperty('dataSource') && ds[i].dataSource instanceof $.ig.DataSource) {
						// K.D. November 17th, 2011 Bug #83399 There are cases where the dataSource property of the 
						// individual member is set to an $.ig.DataSource
						this._sources[i] = ds[i].dataSource;
					} else {
						this._sources[i] = new $.ig.DataSource(ds[i]);
					}
					// now data bind
					// attach a callback that will keep track of the data binding progress of all individual data sources
					this._sources[i].settings.callee = this;
					this._sources[i].settings.callback = this._checkDataBindingComplete;
					this._sourcesStatus[i] = 0; // mark the data source as not bound yet 
				}
				for (i = 0; i < ds.length; i++) {
					this._sources[i].dataBind();
				}
			}
			return this;
		}
	});
	//$.ig.HierarchicalDataSource = $.ig.HierarchicalDataSource || $.ig.DataSource.extend({
	// the hierarchical data source won't extend the flat one
	// as long as there is no paging or sorting or filtering, we don't need to create objects for flat ds'es
	$.ig.HierarchicalDataSource = $.ig.HierarchicalDataSource || Class.extend({
		settings: {
			// autogenerate will have limited support, since we cannot automatically infer which are the primary keys, therefore scenarios such as cascade delete or 
			// hierarchies when multiple flat sources are combined will not work correctly. 
			autogenerate: false, // if this property is true, the contents of "childbands" is ignored. 
			// load on demand support: always load only the top level
			// think about how to 'tell' the server that we do not want children to be loaded 
			initialDataBindDepth: 0,
			maxDataBindDepth: -1, // bind all levels by default
			defaultChildrenDataProperty: "children", // identifies the default property name in the data source where child nodes will be stored relative to their parent node/record
			//childbands: null, // a list of schemas and options, one for every level that we want to bind. Note that schemas here is different than relations. 
			// two defined schemas may have more than one relation defined. 
			//these two properties define if we want to do lazy loading based on virtualization, too. 
			// if virtualization is enabled, we may want to cache/load the data views for those records
			//startRecord: -1,
			//endRecord: -1
			callback: null,
			callee: null,
			data: [],
			dataSource: null,
			dataBinding: null,
			dataBound: null,
			// other options
			type: "unknown", // delegates to the flat data sources 
			responseDataType: null,
			responseContentType: null,
			localSchemaTransform: true,
			urlParamsEncoding: null,
			urlParamsEncoded: null,
			odata: false,
			paging: {

			},
			sorting: {

			},
			filtering: {

			},
			// all of the rest - paging, sorting, filtering, can be defined in the layouts definition, which will "override" the parent defs
			//IMPORTANT:  if there is no paging, sorting or filtering, an instance of $.ig.DataSource won't be created for child row islands 
			schema: [
			/* defined like this:
			{name: "someKey", type: "string", layouts: [
			{
			paging: { },
			sorting: { },
			filtering: { },
			childrenDataProperty: "children",
			foreignKey: "fk",
			// other flat grid specific props
			schema: [ ]
			}
			]},
			{name: "anotherKey", type: "string"}
				
			*/
			]
		},
		init: function (options) {
			// merge defaults with passed-in values 
			if (options) {
				this.__ds = options.dataSource;
				options.dataSource = null;
				this.settings = $.extend(true, {}, $.ig.HierarchicalDataSource.prototype.settings, options);
				this.settings.dataSource = this.__ds;
			}
			this._rootopts = this.settings;
			// necessary to push all of the layout children props 
			//this._rootopts.schema.fields.push({name: this.settings.defaultChildrenDataProperty});
			// depending on the value of initialDataBindDepth, we need to encode the URL so that load on demand works 
			this._rootopts.urlParamsEncoded = $.proxy(this._encodeHierarchicalUrlParams, this);
			if (this._rootopts.dataSource instanceof $.ig.DataSource) {
				this._rootds = this._rootopts.dataSource;
				this._rootds.settings.urlParamsEncoded = this.settings.urlParamsEncoded;
				this._rootds.settings.odata = this.settings.odata;
				if (!this._rootds.settings.schema) {
					this._rootds.settings.schema = {};
				}
				this._rootds.settings.schema.layouts = this.settings.schema.layouts;
			} else {
				if ($.type(this._rootopts.dataSource) === "string" && this._rootopts.dataSource.indexOf("$callback=?") !== -1) {
					this._rootds = new $.ig.JSONPDataSource(this._rootopts);
				} else if (this._rootopts.restSettings &&
							(this._rootopts.restSettings.update.url !== null || this._rootopts.restSettings.update.template !== null ||
							this._rootopts.restSettings.create.url !== null || this._rootopts.restSettings.create.template !== null ||
							this._rootopts.restSettings.remove.url !== null || this._rootopts.restSettings.remove.template !== null)) {
					this._rootds = new $.ig.RESTDataSource(this._rootopts);
				} else {
					this._rootds = new $.ig.DataSource(this._rootopts);
				}
			}
		},
		dataBind: function (callback, callee) {
			// scenario -> paging on the top level, and then paging on a child level with different page size 
			// if it is local, there shouldn't be any problem
			// if it is remote, we need to additionally "craft" the URL of the root data source
			// additionally, when there is remote sorting, paging, or filtering on a child level, we must always pass the 
			// path in the child flat source

			//1. create a flat data source by creating its options first

			//2. check if the request is remote or local, if remote, "inject" the necessary additional URL parts (paging/sorting/filtering) so that the
			// correct data gets pulled out 
			// make sure the property marked with defaultChildrenDataProperty is part of he schema
			// also add all custom children data properties defined in custom layouts
			this._rootds.dataBind(callback, callee);
		},
		root: function () {
			if (!this._rootds) {
				this._rootds = new $.ig.DataSource(this._rootopts);
			}
			return this._rootds;
		},
		dataAt: function (path, keyspath) {
			// search the data. the data source must be indexed to speed up this access.
			var data = this.root().data(), paths = path.split("/"), kp = keyspath.split("/"), k, i,
				j, cd = null, ckey = this.settings.primaryKey, ckeyval = "", ckeys = [], ckeyvals = [], match = false;
			for (i = 0; i < paths.length; i++) {
				ckey = paths[i].split(":")[0];
				ckeyval = paths[i].split(":")[1];
				// NOTE: composite keys are keys whose values are separated by a comma. if ckey or ckeyval contain commas,
				// then the key is assumed to be composite and will be split based on ","
				if (paths[i] !== "") {
					for (j = 0; data && j < data.length; j++) {
						if (ckey && ckey.indexOf(",") !== -1) {
							ckeys = ckey.split(",");
							ckeyvals = ckeyval.split(",");
							for (k = 0; k < ckeys.length; k++) {
								if (!data[j][ckeys[k]].charAt && ckeyvals[k].charAt) {
									ckeyvals[k] = parseInt(ckeyvals[k], 10);
								}
								match = (data[j][ckeys[k]] === ckeyvals[k]);
								if (!match) {
									break;
								}
							}
						} else {
							if (data[j][ckey] !== undefined && !data[j][ckey].charAt && ckeyval.charAt) {
								ckeyval = parseInt(ckeyval, 10);
							}
							match = (data[j][ckey] === ckeyval);
						}
						// special case when we have responseDataKey / search fields defined for every children data instance
						if (match) {
							// get the children
							cd = data[j][kp[i]];
							if (paths.length > 1 && i < paths.length - 1 && this.root().schema().schema.searchField && $.type(cd) !== "array" &&
									cd[this.root().schema().schema.searchField]) {
								cd = cd[this.root().schema().schema.searchField];
							}
							break;
						}
					}
					data = cd;
				}
			}
			return cd;
		},
		/*
		populate: function (path, callback, params) {
		// after data is populated, call "callback" with "args" as arguments
		var url, o;
		// 1. get the url of the root ds (this._rootopts.dataSource)
		url = this._rootopts.dataSource;
		// construct params based on opts
		o = {
		url: url,
		dataType: this._rootopts.responseDataType,
		async: true,
		context: this,
		cache: false,
		data: params,
		success: this._hierarchicalProcessResponse
		};
		$.ajax(o);
		},
		_hierarchicalProcessResponse: function (data) {
		// data must be an object that contains data sources for each respective layout, as well as a "path"
		// property which specifies the location if the parent row
			
		//1. get the path from the response and locate the additional data from the queue
		// XML? 
		},
		*/
		_encodeUrlPath: function (rowid, name) {
			// we need to encode the current parent record path, when child records have their data sources set
			return "path=" + rowid + "&layout=" + name;
		},
		_encodeHierarchicalUrlParams: function (owner, args) {
			var expand = "", layouts = this.settings.schema.layouts, i, j, tmp, name, lc = 0;
			if (this.settings.odata && this.settings.initialDataBindDepth !== 0) {
				// use the OData $expand API
				// http://www.odata.org/developers/protocols/uri-conventions#ExpandSystemQueryOption
				// parse the root layouts in order to construct the expand statement
				i = j = 0;
				for (name in layouts) {
					if (layouts.hasOwnProperty(name)) {
						lc++;
					}
				}
				lc++;
				/*
				for (name in layouts) {
				if (layouts.hasOwnProperty(name) && $.type(layouts[name]) !== "function") {
				tmp = layouts[name].key;
				currentLayout = layouts[name];
				while (currentLayout.columnLayouts) {
				for (child in currentLayout.columnLayouts) {
				if (currentLayout.columnLayouts.hasOwnProperty(child)) {
				currentLayout = currentLayout.columnLayouts[child];
				break;
				}
				// OData supports only one band (one relationship)
				}
				tmp += "/" + currentLayout.key;
				}
				if (i !== 0 && i !== lc - 1) {
				expand += ",";
				}
				expand += tmp;
				i++;
				}
				}
				*/
				for (name in layouts) {
					if (layouts.hasOwnProperty(name)) {
						if ($.type(layouts[name]) !== "function") {
							if (name.startsWith("/")) {
								name = name.substring(1, name.length - 1);
							}
							tmp = name.split("/");
							for (i = 0; i < tmp.length; i++) {
								tmp[i] = tmp[i].substring(0, tmp[i].indexOf(":"));
							}
							tmp = tmp.join("/");
							if (j !== 0 && j !== lc - 1) {
								expand += ",";
							}
							expand += tmp;
							j++;
						}
					}
				}
				args.selectParams.$expand = expand;
			} else {
				// encode the initialDataBindDepth in the args
				// use args.selectParams to encode the initialDataBindDepth
				args.selectParams.dbdepth = this.settings.initialDataBindDepth;
				// we need to encode initial URL params in case paging / sorting / filtering are enabled on child layouts 
				// and their type is set to remote ! 
			}
		}
	});
	// Expose dataSource as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase ig.datasource is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.datasource", ["ig.util"], function () { return $.ig.DataSource; });
	}
}(jQuery));



