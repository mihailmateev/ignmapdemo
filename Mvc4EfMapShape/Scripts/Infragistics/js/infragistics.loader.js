﻿/*! Infragistics.Web.Loader 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery,$*/
if (typeof jQuery !== "function") {
	throw new Error("jQuery is undefined");
}

$.ig = $.ig || {};

$.ig.dependencies = [
	{
		widget: 'theme',
		scripts: [],
		css: ['$path$/themes/$theme$/infragistics.theme.css']
	},
	{
		widget: 'igDataSource',
		dependency: [{ name: 'igUtil'}],
		priority: true,
		scripts: ['$path$/modules/infragistics.datasource.js'],
		locale: ['$localePath$/infragistics.datasource-$locale$.js'],
		css: []
	},
    {
		widget: 'igOlapDataSource',
		dependency: [{ name: 'igUtil'}],
		scripts: ['$path$/modules/infragistics.olapdatasource.js'],
		css: []
	},
	{
		widget: 'igTemplating',
		dependency: [{ name: 'igUtil'}],
		scripts: ['$path$/modules/infragistics.templating.js'],
		css: []
	},

	/// igDataChart ///
	{
		widget: 'igDVCore',
		priority: true,
		scripts: ['$path$/modules/infragistics.dv.core.js']
	},
	{
		widget: 'igDataChart',
		dependency: [{ name: 'igUtil' }, { name: 'igDataSource'}, { name: 'igDVCore'}, { name: 'igTemplating'}],
		scripts: ['$path$/modules/infragistics.dvcommonwidget.js',
					'$path$/modules/infragistics.ui.chart.js'],
		css: ['$path$/structure/modules/infragistics.ui.shared.css', '$path$/structure/modules/infragistics.ui.chart.css'],
		locale: ['$localePath$/infragistics.dvcommonwidget-$locale$.js']
	},
	{
		widget: 'Category',
		parentWidget: 'igDataChart',
		dependency: [{ name: 'igDataChart'}],
		scripts: ['$path$/modules/infragistics.chart_categorychart.js']
	},
	{
		widget: 'Financial',
		parentWidget: 'igDataChart',
		dependency: [{ name: 'igDataChart'}],
		scripts: ['$path$/modules/infragistics.chart_financialchart.js']
	},
	{
		widget: 'Polar',
		parentWidget: 'igDataChart',
		dependency: [{ name: 'igDataChart'}],
		scripts: ['$path$/modules/infragistics.chart_polarchart.js']
	},
	{
		widget: 'Radial',
		parentWidget: 'igDataChart',
		dependency: [{ name: 'igDataChart'}],
		scripts: ['$path$/modules/infragistics.chart_radialchart.js']
	},
	{
		widget: 'RangeCategory',
		parentWidget: 'igDataChart',
		dependency: [{ name: 'igDataChart'}],
		scripts: ['$path$/modules/infragistics.chart_rangecategorychart.js']
	},
	{
		widget: 'Scatter',
		parentWidget: 'igDataChart',
		dependency: [{ name: 'igDataChart'}],
		scripts: ['$path$/modules/infragistics.chart_scatterchart.js'],
		css: ['$path$/structure/modules/infragistics.ui.chart.css']
	},
	{
		widget: 'igDataChart.*',
		dependency: [{ name: 'Category' },
					{ name: 'Financial' },
					{ name: 'Polar' },
					{ name: 'Radial' },
					{ name: 'RangeCategory' },
					{ name: 'Scatter' },
					{ name: 'igPieChart' }]
	},
	{
		widget: 'igPieChart',
		dependency: [{ name: 'igDataChart'}],
		scripts: ['$path$/modules/infragistics.chart_piechart.js']
	},
	/// end igDataChart ///

	{
		widget: 'igCombo',
		dependency: [{ name: 'igUtil' }, { name: 'igDataSource' }, { name: 'igTemplating'}],
		scripts: ['$path$/modules/infragistics.ui.combo.js'],
		locale: ['$localePath$/infragistics.ui.combo-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.shared.css', '$path$/structure/modules/infragistics.ui.combo.css']
	},
	{
		widget: 'igDialog',
		dependency: [{ name: 'igUtil'}],
		scripts: ['$path$/modules/infragistics.ui.dialog.js'],
		locale: ['$localePath$/infragistics.ui.dialog-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.dialog.css']
	},
	{
		widget: 'igEditors',
		dependency: [{ name: 'igUtil'}],
		scripts: ['$path$/modules/infragistics.ui.editors.js'],
		locale: ['$localePath$/infragistics.ui.editors-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.shared.css', '$path$/structure/modules/infragistics.ui.editors.css'],
		regional: ['$localePath$/regional/infragistics.ui.regional-$regional$.js']
	},

	/// igGrid ///
	{
		widget: 'igGrid',
		dependency: [{ name: 'igUtil' }, { name: 'igDataSource' }, { name: 'igTemplating' }, { name: 'igShared' }, { name: 'igScroll'}],
		scripts: ['$path$/modules/infragistics.ui.grid.framework.js'],
		locale: ['$localePath$/infragistics.ui.grid-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.grid.css'],
		regional: ['$localePath$/regional/infragistics.ui.regional-$regional$.js']
	},
	{
		widget: 'ColumnMoving',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'FeatureChooser' }, { name: 'igTree' }],
		scripts: ['$path$/modules/infragistics.ui.grid.columnmoving.js'],
		css: []
	},
	{
		widget: 'FeatureChooser',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid'}],
		scripts: ['$path$/modules/infragistics.ui.grid.featurechooser.js'],
		css: []
	},
	{
		widget: 'Filtering',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'igEditors' }, { name: 'FeatureChooser'}],
		scripts: ['$path$/modules/infragistics.ui.grid.filtering.js'],
		css: []
	},
	{
		widget: 'GroupBy',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'FeatureChooser' }, { name: 'igTree'}],
		scripts: ['$path$/modules/infragistics.ui.grid.groupby.js'],
		css: []
	},
	{
		widget: 'Hiding',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'FeatureChooser'}],
		scripts: ['$path$/modules/infragistics.ui.grid.hiding.js'],
		css: []
	},
	{
		widget: 'MergedCells',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid'}],
		scripts: ['$path$/modules/infragistics.ui.grid.mergedcells.js'],
		css: []
	},
	{
		widget: 'Paging',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'igEditors'}],
		scripts: ['$path$/modules/infragistics.ui.grid.paging.js'],
		css: []
	},
	{
		widget: 'Resizing',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'FeatureChooser'}],
		scripts: ['$path$/modules/infragistics.ui.grid.resizing.js'],
		css: []
	},
	{
		widget: 'RowSelectors',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid'}],
		scripts: ['$path$/modules/infragistics.ui.grid.rowselectors.js'],
		css: []
	},
	{
		widget: 'Selection',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid'}],
		scripts: ['$path$/modules/infragistics.ui.grid.selection.js'],
		css: []
	},
	{
		widget: 'Sorting',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'FeatureChooser'}],
		scripts: ['$path$/modules/infragistics.ui.grid.sorting.js'],
		css: []
	},
	{
		widget: 'Summaries',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'FeatureChooser'}],
		scripts: ['$path$/modules/infragistics.ui.grid.summaries.js'],
		css: []
	},
	{
		widget: 'MultiColumnHeaders',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }],
		scripts: ['$path$/modules/infragistics.ui.grid.multicolumnheaders.js'],
		css: []
	},
	{
		widget: 'Tooltips',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid'}],
		scripts: ['$path$/modules/infragistics.ui.grid.tooltips.js'],
		css: []
	},
	{
		widget: 'Updating',
		parentWidget: 'igGrid,igHierarchicalGrid',
		dependency: [{ name: 'igGrid' }, { name: 'igEditors' }, { name: 'igValidator'}],
		scripts: ['$path$/modules/infragistics.ui.grid.updating.js'],
		css: []
	},
	{
		widget: 'igGrid.*',
		dependency: [{ name: 'FeatureChooser' },
					{ name: 'Filtering' },
					{ name: 'GroupBy' },
					{ name: 'Hiding' },
					{ name: 'MergedCells' },
					{ name: 'Paging' },
					{ name: 'Resizing' },
					{ name: 'RowSelectors' },
					{ name: 'Selection' },
					{ name: 'Sorting' },
					{ name: 'Summaries' },
					{ name: 'Tooltips' },
					{ name: 'MultiColumnHeaders'},
					{ name: 'ColumnMoving' },
					{ name: 'Updating'}],
		scripts: [],
		css: []
	},
	/// end igGrid ///

	/// igHierarchicalGrid ///
	{
		widget: 'igHierarchicalGrid',
		dependency: [{ name: 'igGrid'}],
		scripts: ['$path$/modules/infragistics.ui.grid.hierarchical.js'],
		css: []
	},
	{
		widget: 'igHierarchicalGrid.*',
		dependency: [{ name: 'igHierarchicalGrid' },
					{ name: 'FeatureChooser' },
					{ name: 'Filtering' },
					{ name: 'GroupBy' },
					{ name: 'Hiding' },
					{ name: 'MergedCells' },
					{ name: 'Paging' },
					{ name: 'Resizing' },
					{ name: 'RowSelectors' },
					{ name: 'Selection' },
					{ name: 'Sorting' },
					{ name: 'Summaries' },
					{ name: 'MultiColumnHeaders'},
					{ name: 'ColumnMoving' },
					{ name: 'Tooltips' },
					{ name: 'Updating'}],
		scripts: [],
		css: []
	},
	/// end igHierarchicalGrid ///

	{
		widget: 'igHtmlEditor',
		dependency: [{ name: 'igUtil' }, { name: 'igShared' }, { name: 'igCombo'}, { name: "igEditors"}],
		scripts: ['$path$/modules/infragistics.ui.htmleditor.js'],
		locale: ['$localePath$/infragistics.ui.htmleditor-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.htmleditor.css', '$path$/structure/modules/infragistics.ui.toolbar.css']
	},

	/// igMap ///
	{
		widget: 'igMap',
		dependency: [{ name: 'igUtil' }, { name: 'igDataSource'}, { name: 'igDVCore'}, { name: 'igTemplating'}],
		scripts: ['$path$/modules/infragistics.geographicmap_core.js',
					'$path$/modules/infragistics.dvcommonwidget.js',
					'$path$/modules/infragistics.ui.map.js'],
		css: ['$path$/structure/modules/infragistics.ui.shared.css', '$path$/structure/modules/infragistics.ui.map.css']
	},
	/// end igMap ///

    {
		widget: 'igPivotGrid',
		dependency: [{ name: 'MultiColumnHeaders' }, { name: 'igOlapDataSource' }],
		scripts: ['$path$/modules/infragistics.ui.pivotgrid.js'],
		css: []
    },

	{
		widget: 'igRating',
		scripts: ['$path$/modules/infragistics.ui.rating.js'],
		css: ['$path$/structure/modules/infragistics.ui.shared.css', '$path$/structure/modules/infragistics.ui.rating.css']
	},

	{
		widget: 'igReportViewer',
		dependency: [{ name: 'Category' }, { name: 'Financial' }],
		scripts: ['$path$/modules/infragistics.ui.reportviewer.js'],
		locale: ['$localePath$/infragistics.ui.reportviewer-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.reportviewer.css']
	},

	{
		widget: 'igScroll',
		scripts: ['$path$/modules/infragistics.ui.scroll.js'],
		css: []
	},
	{
		widget: 'igShared',
		dependency: [{ name: 'igUtil'}],
		scripts: ['$path$/modules/infragistics.ui.shared.js'],
		css: ['$path$/structure/modules/infragistics.ui.shared.css']
	},
	{
		widget: 'igTree',
		dependency: [{ name: 'igUtil' }, { name: 'igShared' }, { name: 'igTemplating' }, { name: 'igDataSource'}],
		scripts: ['$path$/modules/infragistics.ui.tree.js'],
		locale: ['$localePath$/infragistics.ui.tree-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.tree.css']
	},
	{
		widget: 'igUpload',
		dependency: [{ name: 'igUtil' }, { name: 'igShared'}],
		scripts: ['$path$/modules/infragistics.ui.upload.js'],
		locale: ['$localePath$/infragistics.ui.upload-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.upload.css']
	},
	{
		widget: 'igUtil',
		priority: true,
		scripts: ['$path$/modules/infragistics.util.js'],
		css: []
	},
	{
		widget: 'igValidator',
		dependency: [{ name: 'igUtil'}],
		scripts: ['$path$/modules/infragistics.ui.validator.js'],
		locale: ['$localePath$/infragistics.ui.validator-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.shared.css', '$path$/structure/modules/infragistics.ui.validator.css']
	},
	{
		widget: 'igVideoPlayer',
		dependency: [{ name: 'igUtil' }, { name: 'igShared'}],
		scripts: ['$path$/modules/infragistics.ui.videoplayer.js'],
		locale: ['$localePath$/infragistics.ui.videoplayer-$locale$.js'],
		css: ['$path$/structure/modules/infragistics.ui.videoplayer.css']
	}
];

$.ig.theme = 'infragistics';

$.ig.isDocumentReady = false;

$(function () {
	$.ig.isDocumentReady = true;

	if ($.ig._loader) {
		$.ig.loader()._notifyLoaded();
	}
});

$.extend($.ig, {
    /* pluginName="loader" */
	loader: function (param1, param2, param3) {
		/* Static object that can be used similarly to document ready statement in jQuery.
		The callback will not be invoked until the document is ready.
		Accepts three parameters all of which are optional and can be passed in in any order:
		paramType="object" optional="true" Initialization object. Described in loaderClass settings.
		paramType="string" optional="true" Comma separated list of resources to load.
		paramType="function" optional="true" Callback function to be called when all resources are loaded and ready to be used.
		returns="object" type="$.ig.loaderClass" Returns an instance of the loader class implementation.

		Examples:
			
		1.	Initialize and be notified all through the passed in options:

		$.ig.loader({
			scriptPath: '../../../Source/ClientUI/js/',
			cssPath: '../../../Source/ClientUI/css/',
			resources: 'igGrid.*,igTree',
			ready: function () {} });


		2.	Initialize separately, be notified later

		$.ig.loader({
			scriptPath: '../../../Source/ClientUI/js/',
			cssPath: '../../../Source/ClientUI/css/',
			resources: 'igGrid'});
                     
		$.ig.loader(function () {
			// Create a couple of igGrids 
			$("#grid1").igGrid({
				virtualization: false,
				autoGenerateColumns: true,
				...
			}
		}

		3.	Load resources on demand with separate initialization

		$.ig.loader({
			scriptPath: '../../../Source/ClientUI/js/',
			cssPath: '../../../Source/ClientUI/css/'
		});
                     
		$.ig.loader('igGrid', function () {
			// Create a couple of igGrids 
			$("#grid1").igGrid({
				virtualization: false,
				autoGenerateColumns: true,
				...
			}
		}

		4.	Use chained methods

		$.ig.loader().load('igGrid', function () {...}).load('igTree', function() {...});
			
		*/

		var options, callback, resources;

		function assignParameter(p) {
			if (typeof (p) === "object") {
				options = p;
			}
			if (typeof (p) === "function") {
				callback = p;
			}
			if (typeof (p) === "string") {
				resources = p;
			}
		}

		if (arguments.length > 0) {
			assignParameter(param1);
		}
		if (arguments.length > 1) {
			assignParameter(param2);
		}
		if (arguments.length > 2) {
			assignParameter(param3);
		}

		if (options) {
			if (resources) {
				options.resources = resources;
			}
			if (callback) {
				options.ready = callback;
			}
		}

		$.ig._loader = $.ig.loaderClass;
		$.ig._loader._init(options);

		if (!options) {
			$.ig._loader.load(resources, callback);
		}

		return $.ig._loader;
	}
});

$.ig.loaderClass = $.ig.loaderClass || {};

$.extend($.ig.loaderClass, {
    /* pluginName="loaderClass" */
	/*
	Infragistics resources loader implemented as a class. Loads necessary resources for each widget based on the name of the widget.
	Loads Java Script and CSS files.
	*/

	//////////////////////////////////// # PUBLIC API #/////////////////////////////////////////

	settings: {
		/* type="string" Comma separated list of resources to load. Ex: 'igTree,igVideoPlayer,igGrid.Paging'.
		Modular widgets, such as igGrid, allow linking features with a '.' (dot). To load all modules of a widget use '*'. Ex: 'igGrid.*' */
		resources: null,
		/* type="string" Script path relative to the page that instantiates the loader. */
		scriptPath: 'js',
		/* type="string" CSS path relative to the page that instantiates the loader. */
		cssPath: 'css',
		/* type="string" Name of the theme. Must correspond to the CSS theme folder under cssPath. */
		theme: $.ig.theme,
		/* type="string" Folder name that contains localization resources. */
		localePath: '$path$/modules/i18n',
		/* type="boolean" Indicates whether the loader should automatically detect browser's locale. Defaults to false. */
		autoDetectLocale: false,
		/* type="string" Two letter code for current locale. Defaults to 'en'. */
		locale: null,
		/* type="string" Regional code. Can be two or five characters long ('en', 'en-GB'). Defaults to 'en'. */
		regional: null,
		/* type="function" A function to call when all resources are loaded but before the "ready" notification is sent. */
		preinit: null,
		/* type="function" A function to call when all resources are loaded and ready to use. */
		ready: null
	},

	load: function (resources, callback, preinit) {
		/* Puts resources in the queue to be loaded. Optionally a call back function can be provided. 
		paramType="string" Comma Comma separated list of resources to load. Ex: 'igTree,igVideoPlayer,igGrid.Paging'. Modular widgets, such as igGrid, allow linking features with a '.' (dot).
		paramType="function" optional="true" Call back function to be called when all resources are loaded and ready to be used.
		paramType="function" optional="true" Call back function to be called when all resources are loaded but before the "ready" notification is sent.
		returns="object" type="$.ig.loaderClass" Returns this instance of the loader class implementation.
		*/

		if (!resources && (this._themeLoaded || !this.settings.theme)) {

			if (!callback && !preinit) {
				return this;
			}

			if (callback) {
				this._callbackArray.push(callback);
			}
			if (preinit) {
				this._preinitArray.push(preinit);
			}

			this._waitBatches(this._proxy(this, this._notifyLoaded, []));
		} else {

			if (!this._themeLoaded && this.settings.theme) {
				this._themeLoaded = true;
				resources = "theme" + (resources ? "," + resources : "");
			}

			this.settings.ready = callback;
			var res = resources.split(","),
				loadBatch = {},
				i;

			loadBatch.callback = this._proxy(loadBatch, this._callback, []);
			loadBatch.waitFireCallback = this._proxy(loadBatch, this._waitFireCallback, []);
			loadBatch._noWdgtLoaded = res.length;
			loadBatch.loader = this;
			loadBatch.ready = this._proxy(this, this._notifyLoaded, []);

			if (callback) {
				this._callbackArray.push(callback);
			}
			if (preinit) {
				this._preinitArray.push(preinit);
			}
			this._loadBatches.push(loadBatch);

			for (i = 0; i < res.length; i++) {
				(new $.ig._loadWorkItem(this)).loadWidgetResources(res[i], loadBatch.callback);
			}
		}
		return this;
	},

	preinit: function (callback) {
		/* Sets callback function to be called once all resources are loaded but before the notification about their readiness. 
		paramType="function" Call back function to be called when all resources are loaded but before "ready" notification is invoked.
		returns="object" type="$.ig.loaderClass" Returns this instance of the loader class implementation.
		*/

		if (callback) {
			this._preinitArray.push(callback);
		}
		this._notifyLoaded();
		return this;
	},

	//////////////////////////////////// # END PUBLIC API #/////////////////////////////////////////

	_themeLoaded: false,
	_dataLog: '',
	_loadBatches: [],
	_resources: $.ig.dependencies,

	_init: function (options) {

		if (options) {
			var basePath = options.scriptPath,
				localePath = options.localePath,
				cssPath = options.cssPath,
				regional = options.regional,
				locale = options.locale,
				userLang;

			if (basePath && basePath.length > 0) {
				if (basePath.lastIndexOf('/') === basePath.length - 1) {
					basePath = basePath.slice(0, basePath.length - 1);
				}
				this.settings.scriptPath = basePath;
			}
			if (cssPath && cssPath.length > 0) {
				if (cssPath.lastIndexOf('/') === cssPath.length - 1) {
					cssPath = cssPath.slice(0, cssPath.length - 1);
				}
				this.settings.cssPath = cssPath;
			}
			if (localePath && localePath.length > 0) {
				if (localePath.lastIndexOf('/') === localePath.length - 1) {
					localePath = localePath.slice(0, localePath.length - 1);
				}
				this.settings.localePath = localePath;
			}
			if (options.theme !== undefined) {
				this.settings.theme = options.theme;
			}
			if (options.resources) {
				this.settings.resources = options.resources;
			}
			if (options.ready) {
				this.settings.ready = options.ready;
			}
			if (options.preinit) {
				this.settings.preinit = options.preinit;
			}
			if (options.autoDetectLocale !== undefined) {
				this.settings.autoDetectLocale = options.autoDetectLocale;
			}

			if (!locale && this.settings.autoDetectLocale) {
				userLang = (navigator.language || navigator.userLanguage);
				locale = userLang.split("-")[0];
				if (!regional) {
					regional = locale;
				}
			}

			if (locale === this._defaultLocale) {
				locale = "";
			}

			if (!locale && this._defaultLocale) {
				this.settings.locale = "";
			} else {
				if (locale) {
					this.settings.locale = locale;
				} else {
					this.settings.locale = "en";
				}
			}

			if (!regional) {
				regional = options.locale;
			}
			if (!regional && this._defaultLocale === "ja") {
				regional = "ja";
			}
			if (regional === "en") {
				regional = null;
			}
			this.settings.regional = regional;

			this._initializePaths('script');
			this._initializePaths('css');

			if (this.settings.resources) {
				this.load(this.settings.resources, this.settings.ready, this.settings.preinit);
			}
		}
	},

	_defaultLocale: "en",

	_proxy: function (instance, method, args) {
		return function () {
			return method.apply(instance, args);
		};
	},

	_initializePaths: function (type) {
		var i,
			j,
			len = this._resources.length,
			path = (type === 'script' ? this.settings.scriptPath : this.settings.cssPath),
			localePath = this.settings.localePath,
			theme = this.settings.theme,
			scriptData,
			useLocale = (type === 'script' && this.settings.locale),
			useRegional = (type === 'script' && this.settings.regional),
			localeScripts,
			regionalScripts;

		for (i = 0; i < len; i++) {
			scriptData = (type === 'script' ? this._resources[i].scripts : this._resources[i].css);
			scriptData = scriptData || [];
			if (useLocale) {
				localeScripts = this._resources[i].locale;
				if (localeScripts) {
					while (localeScripts.length > 0) {
						scriptData.unshift(localeScripts.pop().replace("$locale$", this.settings.locale));
					}
				}
			}
			if (useRegional) {
				regionalScripts = this._resources[i].regional;
				if (regionalScripts) {
					while (regionalScripts.length > 0) {
						scriptData.unshift(regionalScripts.pop().replace("$regional$", this.settings.regional));
					}
				}
			}
			for (j = 0; j < scriptData.length; j++) {
				scriptData[j] = scriptData[j].replace('$localePath$', localePath)
					.replace('$path$', path)
					.replace('$theme$', theme);
			}
		}
	},

	_log: function (data) {
		this._dataLog += (data.toString() + '<br/>');
	},

	log: function () {
		return this._dataLog;
	},

	//_noWdgtLoaded: 0,
	_callback: function () {
		this._noWdgtLoaded--;
		if (this._noWdgtLoaded <= 0) {
			if (this.ready) {
				this.waitFireCallback();
			} else {
				this.loader._loadBatches.pop(this);
			}
		}
	},

	_waitFireCallback: function () {
		if ($.ig.isDocumentReady) {
			this.loader._loadBatches.pop(this);
			this.ready();
		} else {
			window.setTimeout(this.loader._proxy(this, this.waitFireCallback, []), 25);
		}
	},

	_waitBatches: function (callback) {
		if (this._loadBatches.length === 0 && $.ig.isDocumentReady) {
			callback();
		} else {
			window.setTimeout(this._proxy(this, this._waitBatches, [callback]), 25);
		}
	},

	_preinitArray: [],
	_callbackArray: [],

	_notifyLoaded: function () {
		if (this._loadBatches.length > 0) {
			return;
		}

		var pre = this._preinitArray,
			call = this._callbackArray;
		if (this._preinitArray.length) {
			this._preinitArray = [];
		}
		if (this._callbackArray.length) {
			this._callbackArray = [];
		}

		if (this.settings.regional && typeof ($.ig.setRegionalDefault) === "function") {
			$.ig.setRegionalDefault(this.settings.regional);
		}

		while (pre.length > 0) {
			pre.shift()();
		}
		while (call.length > 0) {
			call.shift()();
		}
	},

	_findWidgetScriptData: function (widgetName) {
		var i,
			len = this._resources.length,
			scriptData;

		if (widgetName.length > 3 && widgetName.indexOf('.js') === widgetName.length - 3) {
			return { widget: widgetName, scripts: [this.settings.scriptPath + "/" + widgetName], css: [] };
		}
		if (widgetName.length > 4 && widgetName.indexOf('.css') === widgetName.length - 4) {
			return { widget: widgetName, scripts: [], css: [this.settings.cssPath + "/" + widgetName] };
		}

		for (i = 0; i < len; i++) {
			scriptData = this._resources[i];
			if (scriptData.widget === widgetName) {
				return scriptData;
			}
		}
		return null;
	}

});

$.ig._loadWorkItem = function (loader) {
	this._loader = loader;
	this._loadedCssDependencies = [];
	this._loadedScriptDependencies = [];
};

$.ig._loadWorkItem.prototype = {

	_loadingEntities: [],

	_inArray: function (elem, array) {
		var i, len = array && elem ? array.length : 0;
		for (i = 0; i < len; i++) {
			if (elem === array[i]) {
				return true;
			}
		}
		return false;
	},

	_loadDependency: function (scriptData, loadingEntity, type) {
		var j,
			len = scriptData.dependency ? scriptData.dependency.length : 0,
			name;
		for (j = 0; j < len; j++) {
			name = scriptData.dependency[j].name;
			if (!this._inArray(name, (type === 'script' ? this._loadedScriptDependencies : this._loadedCssDependencies))) {
				this._loadFeatureItem(name, type, loadingEntity);
				if (type === 'script') {
					this._loadedScriptDependencies.push(name);
				} else {
					this._loadedCssDependencies.push(name);
				}
			}
		}
	},

	_loadFeatureItem: function (widgetName, type, loadingEntity) {
		var scriptData = this._loader._findWidgetScriptData(widgetName),
			i,
			res,
			len,
			item;
		if (!scriptData) {
			throw ("Resource '{0}' cannot be found. Please check that the resource name is correct.").replace("{0}", widgetName);
		}
		res = (type === 'script' ? scriptData.scripts : scriptData.css);
		res = res || [];
		len = res.length;

		this._loadDependency(scriptData, loadingEntity, type);

		for (i = 0; i < len; i++) {
			item = res[i];
			this._queueItem(item, loadingEntity, type, scriptData.priority);
		}
	},

	_loadFeatures: function (type, widgetName, callback) {
		var features,
			i,
			len;
		if (widgetName.indexOf('*') === widgetName.length - 1 || (widgetName.length > 3 && widgetName.indexOf('.js') === widgetName.length - 3) || (widgetName.length > 4 && widgetName.indexOf('.css') === widgetName.length - 4)) {
			features = [widgetName];
		} else {
			features = widgetName.split('.');
		}
		len = features.length;

		for (i = 0; i < len; i++) {
			this._loadFeatureItem(features[i], type, widgetName);
		}
	},

	_loadAllFeatures: function (type, callback) {
		var i, j,
			len = this._loader._resources.length, jlen = 0,
			scriptData,
			item,
			loadingEntity = 'ALL',
			res;

		for (i = 0; i < len; i++) {
			scriptData = this._loader._resources[i];
			this._loadDependency(scriptData, loadingEntity, type);
			res = (type === 'script' ? scriptData.scripts : scriptData.css);
			res = res || [];
			jlen = res.length;
			for (j = 0; j < jlen; j++) {
				item = res[j];
				this._queueItem(item, loadingEntity, type, scriptData.priority);
			}
		}
	},
	loadWidgetResources: function (widgetName, callback) {
		if (this._loadingEntities[widgetName] !== undefined) {
			this._loadingEntities[widgetName].call.push(callback);
		} else {
			this._loadingEntities[widgetName] = { name: widgetName, call: [callback], queue: [] };
		}
		this._loadFeatures('css', widgetName, callback);
		this._loadFeatures('script', widgetName, callback);
		this._loadMonitor();
	},

	loadWidgetCss: function (widgetName, callback) {
		this._loadFeatures('css', widgetName, callback);
	},

	loadWidgetScripts: function (widgetName, callback) {
		this._loadFeatures('script', widgetName, callback);
	},

	loadAllScripts: function (callback) {
		this._loadAllFeatures('script', callback);
	},

	loadAllCss: function (callback) {
		this._loadAllFeatures('css', callback);
	},

	loadAllResources: function (callback) {
		var loadingEntity = 'ALL';
		this._loadingEntities[loadingEntity] = { name: loadingEntity, call: [callback], queue: [] };
		this._loadAllFeatures('css', callback);
		this._loadAllFeatures('script', callback);
		this._loadMonitor();
	},

	_queueItem: function (fileName, loadingEntity, itemType, itemPriority) {
		if (!this._loadingEntities[loadingEntity].queue[fileName]) {
			this._loadingEntities[loadingEntity].queue[fileName] = { type: itemType, loaded: false, priority: itemPriority };
			this._loader._log('Enqueue: ' + fileName);
		}
	},

	_loadScript: function (fileName, loadingEntity) {
		var scriptLoad = this._loadingEntities[loadingEntity].queue[fileName],
			s,
			head,
			i,
			len,
			self = this;
		if (!this.isLoadedScript(fileName)) {
			scriptLoad.loading = true;
			s = document.createElement('script');
			head = document.documentElement;
			len = head.childNodes.length;

			s.type = 'text/javascript';
			s.src = fileName;
			s.async = true;
			s.loadingEntity = loadingEntity;
			s.fileName = fileName;
			s.onreadystatechange = s.onload = function () {
				if (s.readyState === undefined || s.readyState === "complete" || s.readyState === "loaded") {
					scriptLoad.loading = false;
					self._scriptLoaded(this);
				}
			};

			if (head.nodeName !== 'HEAD') {
				for (i = 0; i < len; i++) {
					if (head.childNodes[i].nodeName === 'HEAD') {
						head = head.childNodes[i];
						break;
					}
				}
			}
			head.appendChild(s);
		} else {
			// if the file was already loaded as a dependency of another module
			if (!scriptLoad.loading) {
				scriptLoad.loaded = true;
				this._loadMonitor();
			}
		}
	},

	_loadCss: function (fileName, loadingEntity) {
		if (!this.isLoadedCss(fileName)) {
			var l = document.createElement('link'),
				head = document.documentElement,
				i,
				len = head.childNodes.length;
			l.type = 'text/css';
			l.rel = 'stylesheet';
			l.href = fileName;
			l.media = 'screen';
			l.loadingEntity = loadingEntity;
			l.fileName = fileName;
			if (head.nodeName !== 'HEAD') {
				for (i = 0; i < len; i++) {
					if (head.childNodes[i].nodeName === 'HEAD') {
						head = head.childNodes[i];
						break;
					}
				}
			}
			head.appendChild(l);
		}
		this._loadingEntities[loadingEntity].queue[fileName].loaded = true;
		this._loadMonitor();
	},

	_scriptLoaded: function (scriptObj) {
		var rs = scriptObj.readyState,
			entity = this._loadingEntities[scriptObj.loadingEntity],
			item;
		if (entity) {
			item = entity.queue[scriptObj.fileName];
			if (item && !item.loaded && (!rs || /loaded|complete/.test(rs))) {
				item.loaded = true;
				this._loader._log('Loaded: ' + scriptObj.fileName);
				this._loadMonitor();
			}
		}
	},

	_isLoadedHeadElem: function (src, type) {
		var head = document.documentElement,
			i,
			len = head.childNodes.length,
			elem,
			nodeSrc;

		if (head.nodeName !== 'HEAD') {
			for (i = 0; i < len; i++) {
				if (head.childNodes[i].nodeName === 'HEAD') {
					head = head.childNodes[i];
					break;
				}
			}
			len = head.childNodes.length;
		}

		for (i = 0; i < len; i++) {
			elem = head.childNodes[i];

			// href for link tags and src for script tags
			if (type === 'LINK') {
				nodeSrc = elem.href;
			} else if (type === 'SCRIPT') {
				nodeSrc = elem.src;
			}

			if (nodeSrc && elem.nodeName === type && nodeSrc.lastIndexOf(src) !== -1) {
				return true;
			}
		}
		return false;
	},

	isLoadedScript: function (src) {
		return (src && src.length > 0 ? this._isLoadedHeadElem(src.substring(src.lastIndexOf('/')), 'SCRIPT') : false);
	},

	isLoadedCss: function (src) {
		return (src && src.length > 0 ? this._isLoadedHeadElem(src.substring(src.lastIndexOf('/')), 'link') : false);
	},

	_loadMonitor: function () {
		var i, scriptName, entity, loaded, item, passed, priority, c;
		for (i in this._loadingEntities) {
			if (this._loadingEntities.hasOwnProperty(i)) {
				entity = this._loadingEntities[i];
				loaded = true;
				passed = false;
				priority = false;
				for (scriptName in entity.queue) {
					if (entity.queue.hasOwnProperty(scriptName)) {
						passed = true;
						item = entity.queue[scriptName];
						loaded = loaded && item.loaded;
						if (!loaded) {
							if (item.type === 'script') {
								this._loadScript(scriptName, i);
							} else {
								this._loadCss(scriptName, i);
							}
							priority = item.priority;
							break;
						}
					}
				}

				if (loaded && passed && entity.call) {
					for (c = 0; c < entity.call.length; c++) {
						if (entity.call[c]) {
							entity.call[c]();
						}
					}
					delete this._loadingEntities[entity.name];
				} else if (passed && priority) {
					// this ensures that the priority files are loaded before all others
					break;
				}
			}
		}
	}
};
