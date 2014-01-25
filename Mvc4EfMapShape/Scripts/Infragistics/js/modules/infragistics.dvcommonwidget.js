/*!
* Infragistics.Web.ClientUI common DV widget localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Chart) {
	$.ig.Chart = {};

	$.extend($.ig.Chart, {

		locale: {
			unsupportedBrowser: "The current browser does not support HTML5 canvas element. <br/>Try upgrading to any of the following versions:",
			currentBrowser: "Current browser: {0}",
			ie9: "Microsoft Internet Explorer V 9+",
			chrome8: "Google Chrome V 8+",
			firefox36: "Mozilla Firefox V 3.6+",
			safari5: "Apple Safari V 5+",
			opera11: "Opera V 11+",
			ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.com/chrome",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/safari/download/",
			seriesName: "must specify series name option when setting options.",
			axisName: "must specify axis name option when setting options.",
			close: "Close",
			overview: "Overview",
			zoomOut: "Zoom Out",
			zoomIn: "Zoom In",
			resetZoom: "Reset Zoom"
		}
	});

}


/*!
 * Infragistics.Web.ClientUI charting and map common widget 12.2.20122.1021
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
 *	ig.util.js
 */
/*global jQuery, Class, window, ActiveXObject, DOMParser, XPathResult, define */
(function ($) {

    $.ig.dvCommonWidget = $.ig.dvCommonWidget || Class.extend({
        init: function (widget) {
            this.widget = widget;
        },

        _createWidget: function (options, element, widget) {
            var self = this;
            this.widget = widget;
            this.widget._duringInit = true;
            this.widget._creationOptions = options;

            if ((options.dataSource && $.type(options.dataSource) === "array") || ($.type(options.dataSource) === "object" && !(options.dataSource instanceof $.ig.DataSource))) {
                this.widget._initialDataSource = options.dataSource;
                options.dataSource = null;
            }
            this.widget._initialSeriesDataSource = {};
            this.widget._initialAxesDataSource = {};
            if (options.series) {
                $.each(options.series, function (i, val) {
                    if ((val.name && val.dataSource && $.type(val.dataSource) === "array") || ($.type(val.dataSource) === "object" && !(val.dataSource instanceof $.ig.DataSource))) {
                        self.widget._initialSeriesDataSource[val.name] = val.dataSource;
                        val.dataSource = null;
                    }
                });
            }
            if (options.axes) {
                $.each(options.axes, function (i, val) {
                    if ((val.name && val.dataSource && $.type(val.dataSource) === "array") || ($.type(val.dataSource) === "object" && !(val.dataSource instanceof $.ig.DataSource))) {
                        self.widget._initialAxesDataSource[val.name] = val.dataSource;
                        val.dataSource = null;
                    }
                });
            }

            switch (this.widget.widgetName) {
            case "igDataChart":
                this.widget._axisTemplate = $.extend(false, {}, this.widget.options.axes[0]);
                this.widget._seriesTemplate = $.extend(false, {}, this.widget.options.series[0]);
                this.widget.options.legend = null;
                this.widget.options.series[0].legend = null;
                break;
            case "igPieChart":
                break;
            case "igMap":
                this.widget._seriesTemplate = $.extend(false, {}, this.widget.options.series[0]);
                this.widget.options.backgroundContent = null;
                break;
            }
            $.Widget.prototype._createWidget.apply(this.widget, [options, element]);
        },


        _create: function () {
            var widget = this.widget;
            if (!this._isCanvasSupported()) {
                this._renderUnsupportedBrowser(widget);
            } else {
                this.widget._notInitialized = true;
                if (widget._initialDataSource) {
                    widget._creationOptions.dataSource = this.widget._initialDataSource;
                    widget.options.dataSource = this.widget._initialDataSource;
                }

                if (widget.options.series) {
                    $.each(widget.options.series, function (i, val) {
                        if (val.name && widget._initialSeriesDataSource[val.name] !== undefined) {
                            val.dataSource = widget._initialSeriesDataSource[val.name];
                        }
                    });
                }
                if (widget.options.axes) {
                    $.each(widget.options.axes, function (i, val) {
                        if (val.name && widget._initialAxesDataSource[val.name] !== undefined) {
                            val.dataSource = widget._initialAxesDataSource[val.name];
                        }
                    });
                }

                widget._pendingCrossingAxes = [];
                widget._tooltipTemplate = null;
                widget._tooltipTtemplates = null;
                widget._tooltip = {};
                this.widget._tooltipTemplates = {};

                switch (this.widget.widgetName) {
                case "igDataChart":
                    widget._chart = new $.ig.XamDataChart();
                    widget._chart.manageDataSources(true);
                    widget._axes = {};
                    widget._series = {};
                    widget._axisOpt = {};
                    widget._seriesOpt = {};
                    this._bindDataChartEvents(widget._chart);
                    this._renderChartContainer(this.widget);
                    this._initialDataBind();
                    break;
                case "igPieChart":
                    widget._chart = new $.ig.XamPieChart();
                    // widget._chart.manageDataSources(true);
                    this._bindPieChartEvents(widget._chart);
                    this._renderChartContainer(this.widget);
                    this._initialDataBind();
                    break;
                case "igMap":
                    widget._chart = new $.ig.XamGeographicMap();
                    widget._chart.manageDataSources(true);
                    widget._axes = {};
                    widget._series = {};
                    widget._axisOpt = {};
                    widget._seriesOpt = {};
                    this._bindMapEvents(widget._chart);
                    this._setBackgroundContent(widget.options.backgroundContent);
                    break;
                }

                if (this.widget._creationOptions.name) {
                    this.widget._chart.name(this.widget._creationOptions.name);
                }

                if (this.widget.dsCount === 0 && this.widget._notInitialized) {
                    this._initializeWidget(this.widget);
                }
            }
        },
        _converterCallback: function () {
			var context = this.settings.callee;
            context.widget.dsCount--;
            if (context.widget.dsCount === 0) {
                context._initializeWidget(context.widget);
            }
        },
        _initDataOptions: function (options, callBack) {
            var widget = this.widget, dataOptions;
            if (options.dataSourceUrl) {
                options.dataSource = options.dataSourceUrl;
            }
            widget._containerSourceID = widget.id();
            dataOptions = {
                id: options.name || widget._containerSourceID,
                rowAdded: this._itemAdded,
                rowDeleted: this._itemRemoved,
                rowUpdated: this._itemUpdated,
                rowInserted: this._itemInserted,
                callback: callBack,
                callee: this,
                responseDataKey: options.responseDataKey,
                primaryKey: options.primaryKey,
                responseTotalRecCountKey: options.responseTotalRecCountKey,
                dataSource: options.dataSource
            };
            if (options.dataSourceType !== null) {
                dataOptions.type = options.dataSourceType;
            }
            return dataOptions;
        },

        _setupDataSource: function (options, callback) {
            var dataOptions = this._initDataOptions(options, callback);
            if (this.widget.dataSources === undefined) {
                this.widget.dataSources = {};
            }
            if (!(dataOptions.dataSource instanceof $.ig.DataSource)) {
                // fix for JSONP
                if ($.type(dataOptions.dataSource) === "string" && dataOptions.dataSource.indexOf("$callback=?") !== -1) {
                    this.widget.dataSources[dataOptions.id] = new $.ig.JSONPDataSource(dataOptions);
                } else {
                    this.widget.dataSources[dataOptions.id] = new $.ig.DataSource(dataOptions);
                }
            } else {
                this.widget.dataSources[dataOptions.id] = dataOptions.dataSource;
                dataOptions.dataSource = this.widget.dataSources[dataOptions.id].settings.dataSource;

                if (this.widget.dataSources[dataOptions.id].settings.responseDataKey !== null) {
                    delete dataOptions.responseDataKey;
                    if (dataOptions.schema) {
                        dataOptions.schema.searchField = this.widget.dataSource.settings.responseDataKey;
                    }
                }

                this.widget.dataSources[dataOptions.id].settings = this._mergeDataSourceSettings(this.widget.dataSources[dataOptions.id].settings, dataOptions);
                if (dataOptions.schema) {
                    this.widget.dataSources[dataOptions.id]._initSchema();
                }
            }
        },
        _initCallback: function (success, error, dataSource) {
            this.widget.dsCount--;
            if (this.widget.dsCount === 0 && success) {
                this._initializeWidget(this.widget);
            }
        },
        _initializeWidget: function (widget) {
            this.widget = widget;

            if (this.widget.dataSources[this.widget._containerSourceID]) {
                this._setItemsSource(this.widget, this.widget._chart, this.widget._containerSourceID);
            }
            this._setWidgetOptions(this.widget._creationOptions, widget._chart);
            this.widget._duringInit = false;

            if (widget._creationOptions.series) {
                this._setCoreWidgetOption(widget._chart, "series", this.widget._creationOptions.series);
            }

            widget._notInitialized = false;
        },

        _getNotifyTarget: function (targetName) {
            var target;
            if (this.widget.widgetName === 'igPieChart') {
                target = this.widget._chart;
            } else {
                if (targetName === this.widget.id()) {
                    target = this.widget._chart;
                } else {
                    target = this._getSeriesByName(targetName);
                    if (!target) {
                        target = this._getAxisByName(targetName);
                    }
                }
            }
            return target;
        },

        _notifyItemAdded: function (dataSource, newItem, index) {
            this.widget._chart.notifyInsertItem(dataSource, index, newItem.row);
        },

        _itemAdded: function (item, dataSource) {
            this._notifyItemAdded(dataSource, item, dataSource.dataView().length - 1);
        },

        _itemInserted: function (item, dataSource) {
            this._notifyItemAdded(dataSource, item, item.rowIndex);
        },

        _itemUpdated: function (item, dataSource) {
            this.widget._chart.notifySetItem(dataSource, item.rowIndex, item.oldRow, item.newRow);
        },

        _itemRemoved: function (item, dataSource) {
            this.widget._chart.notifyRemoveItem(dataSource, item.rowIndex, item.row);
        },
        _setWidgetOptions: function (options, chart) {
            var self = this;

            $.each(options, function (key, value) {
                if (!self._setWidgetOption(chart, key, value)) {
                    self._setCoreWidgetOption(chart, key, value);
                } else {
                    //still propagate the value so that it can be read back by the user.
                    self.widget.options[key] = value;
                }
            });
        },

        _setWidgetOption: function (chart, key, value) {
            var $tempBrushCollection, isRGB, $tempBrush, i;

            switch (key) {
            case "crosshairPoint":
                chart.crosshairPoint(new $.ig.Point(1, value.x, value.y));
                return true;
            case "windowRect":
                chart.windowRect(new $.ig.Rect(0, value.left, value.top, value.width, value.height));
                return true;
            case "horizontalZoomable":
                chart.horizontalZoomable(value);
                return true;
            case "verticalZoomable":
                chart.verticalZoomable(value);
                return true;
            case "windowResponse":
                switch (value) {
                case "deferred":
                    chart.windowResponse(0);
                    break;
                case "immediate":
                    chart.windowResponse(1);
                    break;
                }
                return true;
            case "windowRectMinWidth":
                chart.windowRectMinWidth(value);
                return true;
            case "overviewPlusDetailPaneVisibility":
                switch (value) {
                case "visible":
                    chart.overviewPlusDetailPaneVisibility(0);
                    break;
                case "collapsed":
                    chart.overviewPlusDetailPaneVisibility(1);
                    break;
                }
                return true;
            case "crosshairVisibility":
                switch (value) {
                case "visible":
                    chart.crosshairVisibility(0);
                    break;
                case "collapsed":
                    chart.crosshairVisibility(1);
                    break;
                }
                return true;
            case "plotAreaBackground":
                if (value === null) {
                    chart.plotAreaBackground(null);
                } else {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value);
                    chart.plotAreaBackground($tempBrush);
                }
                return true;
            case "defaultInteraction":
                switch (value) {
                case "none":
                    chart.defaultInteraction(0);
                    break;
                case "dragZoom":
                    chart.defaultInteraction(1);
                    break;
                case "dragPan":
                    chart.defaultInteraction(2);
                    break;
                }
                return true;
            case "dragModifier":
                switch (value) {
                case "none":
                    chart.dragModifier(0);
                    break;
                case "alt":
                    chart.dragModifier(1);
                    break;
                case "control":
                    chart.dragModifier(2);
                    break;
                case "shift":
                    chart.dragModifier(4);
                    break;
                case "windows":
                    chart.dragModifier(8);
                    break;
                case "apple":
                    chart.dragModifier(8);
                    break;
                }
                return true;
            case "panModifier":
                switch (value) {
                case "none":
                    chart.panModifier(0);
                    break;
                case "alt":
                    chart.panModifier(1);
                    break;
                case "control":
                    chart.panModifier(2);
                    break;
                case "shift":
                    chart.panModifier(4);
                    break;
                case "windows":
                    chart.panModifier(8);
                    break;
                case "apple":
                    chart.panModifier(8);
                    break;
                }

                return true;
            case "previewRect":
                chart.previewRect(new $.ig.Rect(0, value.left, value.top, value.width, value.height));
                return true;
            case "windowPositionHorizontal":
                chart.windowPositionHorizontal(value);
                return true;
            case "windowPositionVertical":
                chart.windowPositionVertical(value);
                return true;
            case "windowScaleHorizontal":
                chart.windowScaleHorizontal(value);
                return true;
            case "windowScaleVertical":
                chart.windowScaleVertical(value);
                return true;
            case "triangleMarkerTemplate":
            case "circleMarkerTemplate":
            case "pyramidMarkerTemplate":
            case "squareMarkerTemplate":
            case "diamondMarkerTemplate":
            case "pentagonMarkerTemplate":
            case "hexagonMarkerTemplate":
            case "tetragramMarkerTemplate":
            case "pentagramMarkerTemplate":
            case "hexagramMarkerTemplate":
                this._setDataTemplate(chart, key, value);
                return true;
            case "topMargin":
                chart.topMargin(value);
                return true;
            case "leftMargin":
                chart.leftMargin(value);
                return true;
            case "rightMargin":
                chart.rightMargin(value);
                return true;
            case "bottomMargin":
                chart.bottomMargin(value);
                return true;
            case "autoMarginWidth":
                chart.autoMarginWidth(value);
                return true;
            case "autoMarginHeight":
                chart.autoMarginHeight(value);
                return true;
            case "worldRect":
                chart.worldRect(new $.ig.Rect(0, value.left, value.top, value.width, value.height));
                return true;
                /*case "backgroundContent":
                chart.backgroundContent(value);
                return true; */
            case "xAxis":
                chart.xAxis(this._getAxisByName(value));
                return true;
            case "yAxis":
                chart.yAxis(this._getAxisByName(value));
                return true;
            case "isSquare":
                chart.isSquare(value);
                return true;
            case "gridMode":
                switch (value) {
                case "none":
                    chart.gridMode(0);
                    break;
                case "beforeSeries":
                    chart.gridMode(1);
                    break;
                case "behindSeries":
                    chart.gridMode(2);
                    break;
                }
                return true;
            case "brushes":
                isRGB = true;
                if ((typeof value[0] === "string" && value[0] === "HSV") || value[0] === "RGB") { if (value[0] === "HSV") { isRGB = false; } value = value.slice(1); }
                $tempBrushCollection = new $.ig.BrushCollection();
                for (i = 0; i < value.length; i++) {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value[i]);
                    $tempBrushCollection.add($tempBrush);
                }
                chart.brushes($tempBrushCollection);
                return true;
            case "markerBrushes":
                isRGB = true;
                if ((typeof value[0] === "string" && value[0] === "HSV") || value[0] === "RGB") { if (value[0] === "HSV") { isRGB = false; } value = value.slice(1); }
                $tempBrushCollection = new $.ig.BrushCollection();
                for (i = 0; i < value.length; i++) {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value[i]);
                    $tempBrushCollection.add($tempBrush);
                }
                chart.markerBrushes($tempBrushCollection);
                return true;
            case "outlines":
                isRGB = true;
                if ((typeof value[0] === "string" && value[0] === "HSV") || value[0] === "RGB") { if (value[0] === "HSV") { isRGB = false; } value = value.slice(1); }
                $tempBrushCollection = new $.ig.BrushCollection();
                for (i = 0; i < value.length; i++) {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value[i]);
                    $tempBrushCollection.add($tempBrush);
                }
                chart.outlines($tempBrushCollection);
                return true;
            case "markerOutlines":
                isRGB = true;
                if ((typeof value[0] === "string" && value[0] === "HSV") || value[0] === "RGB") { if (value[0] === "HSV") { isRGB = false; } value = value.slice(1); }
                $tempBrushCollection = new $.ig.BrushCollection();
                for (i = 0; i < value.length; i++) {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value[i]);
                    $tempBrushCollection.add($tempBrush);
                }
                chart.markerOutlines($tempBrushCollection);
                return true;
                //pie chart
            case "valueMemberPath":
                chart.valueMemberPath(value);
                return true;
            case "labelMemberPath":
                chart.labelMemberPath(value);
                return true;
            case "labelsPosition":
                switch (value) {
                case "none":
                    chart.labelsPosition(0);
                    break;
                case "center":
                    chart.labelsPosition(1);
                    break;
                case "insideEnd":
                    chart.labelsPosition(2);
                    break;
                case "outsideEnd":
                    chart.labelsPosition(3);
                    break;
                case "bestFit":
                    chart.labelsPosition(4);
                    break;
                }
                return true;
            case "leaderLineVisibility":
                switch (value) {
                case "visible":
                    chart.leaderLineVisibility(0);
                    break;
                case "collapsed":
                    chart.leaderLineVisibility(1);
                    break;
                }
                return true;
            case "othersCategoryThreshold":
                chart.othersCategoryThreshold(value);
                return true;
            case "othersCategoryType":
                switch (value) {
                case "number":
                    chart.othersCategoryType(0);
                    break;
                case "percent":
                    chart.othersCategoryType(1);
                    break;
                }
                return true;
            case "othersCategoryText":
                chart.othersCategoryText(value);
                return true;
            case "explodedRadius":
                chart.explodedRadius(value);
                return true;
            case "radiusFactor":
                chart.radiusFactor(value);
                return true;
            case "allowSliceSelection":
                chart.allowSliceSelection(value);
                return true;
            case "allowSliceExplosion":
                chart.allowSliceExplosion(value);
                return true;
            case "labelExtent":
                chart.labelExtent(value);
                return true;
            case "startAngle":
                chart.startAngle(value);
                return true;
            case "sweepDirection":
                switch (value) {
                case "counterclockwise":
                    chart.sweepDirection(0);
                    break;
                case "clockwise":
                    chart.sweepDirection(1);
                    break;
                }
                return true;
            case "selectedStyle":
                chart.selectedStyle(value);
                return true;
            case "legendItemTemplate":
                this._setDataTemplate(chart, key, value);
                return true;
            case "legendItemBadgeTemplate":
                this._setDataTemplate(chart, key, value);
                return true;
            case "textStyle":
                chart.textStyle(value);
                return true;
			case "overviewPlusDetailPaneBackgroundImageUri":
				chart.overviewPlusDetailPaneBackgroundImageUri(value);
				return true;
            }
            return false;
        },

        _createAxisFromType: function (axisType) {
            switch (axisType) {
            case "numericX":
                return new $.ig.NumericXAxis();
            case "numericY":
                return new $.ig.NumericYAxis();
            case "categoryX":
                return new $.ig.CategoryXAxis();
            case "categoryDateTimeX":
                return new $.ig.CategoryDateTimeXAxis();
            case "categoryY":
                return new $.ig.CategoryYAxis();
            case "categoryAngle":
                return new $.ig.CategoryAngleAxis();
            case "numericAngle":
                return new $.ig.NumericAngleAxis();
            case "numericRadius":
                return new $.ig.NumericRadiusAxis();
            default:
                break;
            }
        },
        _createSeriesFromType: function (seriesType) {
            switch (seriesType) {
            case "area":
                return new $.ig.AreaSeries();
            case "bar":
                return new $.ig.BarSeries();
            case "column":
                return new $.ig.ColumnSeries();
            case "line":
                return new $.ig.LineSeries();
            case "rangeArea":
                return new $.ig.RangeAreaSeries();
            case "rangeColumn":
                return new $.ig.RangeColumnSeries();
            case "splineArea":
                return new $.ig.SplineAreaSeries();
            case "spline":
                return new $.ig.SplineSeries();
            case "stepArea":
                return new $.ig.StepAreaSeries();
            case "stepLine":
                return new $.ig.StepLineSeries();
            case "waterfall":
                return new $.ig.WaterfallSeries();
            case "financial":
                return new $.ig.FinancialPriceSeries();
            case "typicalPriceIndicator":
                return new $.ig.TypicalPriceIndicator();
            case "polarArea":
                return new $.ig.PolarAreaSeries();
            case "polarLine":
                return new $.ig.PolarLineSeries();
            case "polarScatter":
                return new $.ig.PolarScatterSeries();
            case "radialColumn":
                return new $.ig.RadialColumnSeries();
            case "radialLine":
                return new $.ig.RadialLineSeries();
            case "radialPie":
                return new $.ig.RadialPieSeries();
            case "scatter":
                return new $.ig.ScatterSeries();
            case "highDensityScatter":
                return new $.ig.HighDensityScatterSeries();
            case "scatterLine":
                return new $.ig.ScatterLineSeries();
            case "bubble":
                return new $.ig.BubbleSeries();
            case "absoluteVolumeOscillatorIndicator":
                return new $.ig.AbsoluteVolumeOscillatorIndicator();
            case "averageTrueRangeIndicator":
                return new $.ig.AverageTrueRangeIndicator();
            case "accumulationDistributionIndicator":
                return new $.ig.AccumulationDistributionIndicator();
            case "averageDirectionalIndexIndicator":
                return new $.ig.AverageDirectionalIndexIndicator();
            case "geographicShape":
                return new $.ig.GeographicShapeSeries();
            case "geographicSymbol":
                return new $.ig.GeographicSymbolSeries();
            case "geographicScatterArea":
				return new $.ig.GeographicScatterAreaSeries();
            case "geographicContourLine":
				return new $.ig.GeographicContourLineSeries();
			case "geographicHighDensityScatter":
				return new $.ig.GeographicHighDensityScatterSeries();
			case "geographicProportionalSymbol":
				return new $.ig.GeographicProportionalSymbolSeries();
            case "geographicPolyline":
                return new $.ig.GeographicPolylineSeries();
			case "bollingerBandWidthIndicator":
				return new $.ig.BollingerBandWidthIndicator();
			case "chaikinOscillatorIndicator":
				return new $.ig.ChaikinOscillatorIndicator();
			case "chaikinVolatilityIndicator":
				return new $.ig.ChaikinVolatilityIndicator();
			case "commodityChannelIndexIndicator":
				return new $.ig.CommodityChannelIndexIndicator();
			case "detrendedPriceOscillatorIndicator":
				return new $.ig.DetrendedPriceOscillatorIndicator();
			case "easeOfMovementIndicator":
				return new $.ig.EaseOfMovementIndicator();
			case "fastStochasticOscillatorIndicator":
				return new $.ig.FastStochasticOscillatorIndicator();
			case "forceIndexIndicator":
				return new $.ig.ForceIndexIndicator();
			case "fullStochasticOscillatorIndicator":
				return new $.ig.FullStochasticOscillatorIndicator();
			case "marketFacilitationIndexIndicator":
				return new $.ig.MarketFacilitationIndexIndicator();
			case "massIndexIndicator":
				return new $.ig.MassIndexIndicator();
			case "medianPriceIndicator":
				return new $.ig.MedianPriceIndicator();
			case "moneyFlowIndexIndicator":
				return new $.ig.MoneyFlowIndexIndicator();
			case "movingAverageConvergenceDivergenceIndicator":
				return new $.ig.MovingAverageConvergenceDivergenceIndicator();
			case "negativeVolumeIndexIndicator":
				return new $.ig.NegativeVolumeIndexIndicator();
			case "onBalanceVolumeIndicator":
				return new $.ig.OnBalanceVolumeIndicator();
			case "percentagePriceOscillatorIndicator":
				return new $.ig.PercentagePriceOscillatorIndicator();
			case "percentageVolumeOscillatorIndicator":
				return new $.ig.PercentageVolumeOscillatorIndicator();
			case "positiveVolumeIndexIndicator":
				return new $.ig.PositiveVolumeIndexIndicator();
			case "priceVolumeTrendIndicator":
				return new $.ig.PriceVolumeTrendIndicator();
			case "rateOfChangeAndMomentumIndicator":
				return new $.ig.RateOfChangeAndMomentumIndicator();
			case "relativeStrengthIndexIndicator":
				return new $.ig.RelativeStrengthIndexIndicator();
			case "slowStochasticOscillatorIndicator":
				return new $.ig.SlowStochasticOscillatorIndicator();
			case "standardDeviationIndicator":
				return new $.ig.StandardDeviationIndicator();
			case "stochRSIIndicator":
				return new $.ig.StochRSIIndicator();
			case "trixIndicator":
				return new $.ig.TRIXIndicator();
			case "ultimateOscillatorIndicator":
				return new $.ig.UltimateOscillatorIndicator();
			case "weightedCloseIndicator":
				return new $.ig.WeightedCloseIndicator();
			case "williamsPercentRIndicator":
				return new $.ig.WilliamsPercentRIndicator();
			case "bollingerBandsOverlay":
				return new $.ig.BollingerBandsOverlay();
			case "priceChannelOverlay":
				return new $.ig.PriceChannelOverlay();
			case "customIndicator":
				return new $.ig.CustomIndicator();
            default:
                break;
            }
        },

        _setCoreWidgetOption: function (chart, key, value) {
            var self = this, widget = this.widget, axis = null, axisOpt = null, axisIsNew = false, merged, settings, newLink, oldLink, seriesIsNew, series = null, seriesOpt = null, exploded, templ;
            switch (key) {
            case "axes":
                //set axis
                if (this.widget.widgetName === "igMap") {
                    return;
                }
                $.each(value, function (i, val) {
                    if (!val.name) {
                        throw new Error($.ig.Chart.locale.axisName);
                    }
                    if (self.widget._series[val.name]) {
                        throw new Error($.ig.Chart.locale.nameInUse);
                    }
                    axis = self._getAxisByName(val.name);
                    if (axis && val.remove) {
                        delete widget._axes[val.name];
                        delete widget._axisOpt[val.name];
                        var ind = widget.options.axes.indexOf(widget._axisOpt[val.name]);
                        widget.options.axes.splice(ind, 1);
                        widget._chart.axes().remove(axis);
                        if (widget.dataSources[val.name]) {
                            delete widget.dataSources[val.name].settings;
                            delete widget.dataSources[val.name];
                        }
                        if (widget._target && widget._target.name() === val.name) {
                            widget._target = null;
                        }
                        return;
                    }

                    if (axis) {
                        axisOpt = widget._axisOpt[val.name];
                    }

                    if (!axis && !val.remove) {
                        axis = self._createAxisFromType(val.type);
                        axis.name(val.name);
                        axisIsNew = true;
                    }

                    if (axis) {
                        if (axisIsNew) {
                            widget._axes[val.name] = axis;
                            widget.options.axes.push(axisOpt);

                            merged = self._mergeIntoNewWithDataSource(widget._axisTemplate, val);
                            widget._axisOpt[val.name] = merged;
                        }
                        if (val.coercionMethods) {
                            axis.coercionMethods(val.coercionMethods);
                        }
                        self._setAxisOptions(val, axis);
                        if (axisIsNew) {
                            if (widget.dataSources[axis.name()]) {
                                self._setItemsSource(self.widget, axis, axis.name());
                                //axis.itemsSource(widget.dataSources[axis.name()].dataView());
                            }
                        } else {
                            self._mergeIntoWithDataSource(axisOpt, val);
                        }
                        if (axisIsNew) {
                            widget._chart.axes().add(axis);
                        }
                    }
                });

                if (widget._pendingCrossingAxes && widget._pendingCrossingAxes.length > 0) {
                    $.each(widget._pendingCrossingAxes, function (i, val) {
                        val();
                    });
                    widget._pendingCrossingAxes.length = 0;
                }
                break;
            case "series":
                if (!widget._duringInit) {
                    seriesIsNew = false;
                    //set series
                    $.each(value, function (i, val) {
                        if (!val.name) {
                            throw new Error($.ig.Chart.locale.seriesName);
                        }
                        if (self.widget._axes[val.name]) {
                            throw new Error($.ig.Chart.locale.nameInUse);
                        }
                        series = self._getSeriesByName(val.name);
                        if (series && val.remove) {
                            delete widget._series[val.name];
                            delete widget._seriesOpt[val.name];
                            if (widget.dataSources[val.name]) {
                                delete widget.dataSources[val.name].settings;
                                delete widget.dataSources[val.name];
                            }
                            var ind = widget.options.series.indexOf(widget._seriesOpt[val.name]);
                            widget.options.series.splice(ind, 1);
                            widget._chart.series().remove(series);
                            return;
                        }
                        if (!series && !val.remove) {
                            series = self._createSeriesFromType(val.type);
							self._bindSeriesEvents(series);
                            series.name(val.name);
                            seriesIsNew = true;
                        }
                        if (series) {
                            seriesOpt = widget._seriesOpt[val.name];
                        }
                        if (series) {
                            if (seriesIsNew) {
                                widget._series[val.name] = series;
                                widget.options.series.push(seriesOpt);
                                merged = self._mergeIntoNewWithDataSource(widget._seriesTemplate, val);
                                widget._seriesOpt[val.name] = merged;
                            }
                            if (val.coercionMethods) {
                                series.coercionMethods(val.coercionMethods);
                            }
                            self._setSeriesOptions(val, series, widget);
                            if (seriesIsNew) {
                                if (widget.dataSources[series.name()]) {
                                    self._setItemsSource(self.widget, series, series.name());
                                }
                            } else {
                                self._mergeIntoWithDataSource(seriesOpt, val);
                            }
                            if (seriesIsNew) {
                                widget._chart.series().add(series);
                            }
                        }
                    });
                }
                break;
            case "syncChannel":
                newLink = null;
                if (value && value.length > 0) {
                    newLink = $.ig.SyncLinkManager.prototype.instance().getLink(value);
                }
                oldLink = widget._chart.actualSyncLink();
                if (oldLink) {
                    $.ig.SyncLinkManager.prototype.instance().releaseLink(oldLink);
                }
                if (newLink) {
                    widget._chart.actualSyncLink(newLink);
                } else {
                    widget._chart.actualSyncLink(new $.ig.SyncLink());
                }
                widget.options[key] = value;
                break;
            case "synchronizeVertically":
                settings = widget._chart.syncSettings();
                settings.synchronizeVertically(value);
                widget.options[key] = value;
                break;
            case "synchronizeHorizontally":
                settings = widget._chart.syncSettings();
                settings.synchronizeHorizontally(value);
                widget.options[key] = value;
                break;
            case "legend":
                this._setLegend(widget._chart, value);
                break;
            case "width":
                if (!widget._duringInit) {
                    widget._chartElement.css("width", value);
                    widget.notifyContainerResized();
                }
                break;
            case "height":
                if (!widget._duringInit) {
                    widget._chartElement.css("height", value);
                    widget.notifyContainerResized();
                }
                break;
            case "size":
                if (!widget._duringInit) {
                    if (value.width) {
                        widget._chartElement.css("width", value.width);
                    }
                    if (value.height) {
                        widget._chartElement.css("height", value.height);
                    }
                    widget.notifyContainerResized();
                }
                break;
            //pie chart	specific                                                  
            case "explodedSlices":
                if (value.length) {
                    exploded = new $.ig.IndexCollection();
                    $.each(value, function (i, val) {
                        exploded.add(val);
                    });
                    widget._chart.explodedSlices(exploded);
                }
                break;
            case "showTooltip":
                if (value === true) {
                    this._addTooltip(widget, widget._chart, widget.css.tooltip);
                }
                if (value === false) {
                    this._removeTooltip(widget, widget._chart);
                }
                break;
            case "tooltipTemplate":
                if ($.ig.tmpl) {
                    if (this._htmlCheckExpr.test(value)) {
                        templ = value;
                    } else {
                        if ($('#' + value).length > 0) {
                            templ = $('#' + value).text();
                        } else if ($(value).length > 0) {
                            templ = $(value).text();
                        } else {
                            templ = value;
                        }
                    }
                    //templ = (typeof $('#' + value).data().tmpl === 'undefined') ? $.template(widget.id() + 'TooltipTemplate', value) : value;
                    widget._tooltipTemplate = templ;
                }
                break;
            //			case "dataSource":                                                  
            //				this._setItemsSource(this.widget, this.widget._chart, this.widget._containerSourceID);                                                  
            //				break;                                                  
            //map specific                                                  
            case "backgroundContent":
				if (value === null) {
					widget._chart.backgroundContent(null);
				}
                if (!widget._duringInit) {
                    this._setBackgroundContent(value);
                }
                break;
            }
        },

        _htmlCheckExpr: /^[^<]*(<[\w\W]+>)[^>]*$/,

        _getAxisByName: function (name) {
            if (this.widget._axes[name] === undefined) {
				if (this.widget.widgetName === "igMap") {
					if (name === "xAxis") {
						return this.widget._chart.xAxis();
					}
					if (name === "yAxis") {
						return this.widget._chart.yAxis();
					}
				}
                return null;
            }
            return this.widget._axes[name];
        },

        _getSeriesByName: function (name) {
            if (this.widget._series[name] === undefined) {
                return null;
            }
            return this.widget._series[name];
        },

        _setAxisOptions: function (options, axis) {
            var self = this;
            $.each(options, function (key, value) {
                if (!self._setAxisOption(axis, key, value)) {
                    self._setCoreAxisOption(axis, key, value);
                } else {
                    //still propagate the axis option so the user can read it back.
                    self.widget._axisOpt[axis.name()][key] = value;
                }
            });
        },

        _setSeriesOptions: function (options, series) {
            var self = this;
            $.each(options, function (key, value) {
                if (!self._setCoreSeriesOption(series, key, value)) {
                    self._seriesSetOption(series, key, value);
                } else {
                    //still propagate the series option so the user can read it back.
                    self.widget._seriesOpt[series.name()][key] = value;
                }
            });
        },

        _setCoreSeriesOption: function (series, key, value) {
            var templ;
            switch (key) {
            case "legend":
                this._setLegend(series, value);
                return true;
            case "showTooltip":
                if (value === true) {
                    this._addTooltip(this.widget, series, this.widget.css.tooltip);
                } else {
                    this._removeTooltip(this.widget, series);
                }
                return true;
            case "tooltipTemplate":
                if ($.ig.tmpl) {
                    if (this._htmlCheckExpr.test(value)) {
                        templ = value;
                    } else {
                        if ($('#' + value).length > 0) {
                            templ = $('#' + value).text();
                        } else if ($(value).length > 0) {
                            templ = $(value).text();
                        } else {
                            templ = value;
                        }
                    }
                    //templ = (typeof $('#' + value).data().tmpl === 'undefined') ? $.template(series.name() + 'TooltipTemplate', value) : value;
                    this.widget._tooltipTemplates[series.name()] = templ;
                }
                return true;
            case "displayType":
                switch (value) {
                case "candlestick":
                    series.displayType(0);
                    break;
                case "ohlc":
                    series.displayType(1);
                    break;
                case "line":
                    series.displayType(0);
                    break;
                case "area":
                    series.displayType(1);
                    break;
                case "column":
                    series.displayType(2);
                    break;
                }
                return true;
            }
            return false;
        },
        _initMap: function () {
            if (this.widget._duringInit) {
                this._renderChartContainer(this.widget);
                this._initialDataBind();

				if (this.widget.dsCount === 0 && this.widget._notInitialized) {
                    this._initializeWidget(this.widget);
                }
            }
        },
        _setBackgroundContent: function (bgOptions) {
            if (!bgOptions) {
                this._initMap();
            } else {
				this.widget.options.backgroundContent = bgOptions;

				switch (bgOptions.type) {
				case "cloudMade":
					this.widget._chart.backgroundContent(this._setBackgroundOptions(new $.ig.CloudMadeMapImagery(), bgOptions));
					this._initMap();
					break;
				case "bing":
					this._initializeBingMapsImagery(bgOptions);
					break;
				case "openStreet":
					this.widget._chart.backgroundContent(this._setBackgroundOptions(new $.ig.OpenStreetMapImagery(), bgOptions));
					this._initMap();
					break;
				default:
					return;
				}
            }
        },
        _initializeBingMapsImagery: function (bgOptions) {
            var bingUrl = bgOptions.bingUrl || "http://dev.virtualearth.net/REST/v1/Imagery/Metadata/", imagerySet = bgOptions.imagerySet || "AerialWithLabels", bingKey = bgOptions.key;
            $.ajax({
                url: bingUrl + imagerySet,
                data: "key=" + bingKey + "&include=ImageryProviders",
                success: $.proxy(this._setBingBackground, this),
                dataType: "jsonp",
                jsonp: "jsonp"
            });
        },
        _setBingBackground: function (res) {
            var i, bg = new $.ig.BingMapsMapImagery(), meta = res.resourceSets[0].resources[0], culture = this.widget.options.backgroundContent.cultureName || "en-US";
            bg.tilePath(meta.imageUrl);
            bg.cultureName(culture);
            for (i = 0; i < meta.imageUrlSubdomains.length; i++) {
                bg.subDomains().add(meta.imageUrlSubdomains[i]);
            }
            this.widget._chart.backgroundContent(bg);
            this._initMap();
        },
        _setBackgroundOptions: function (background, options) {
            var self = this;
            $.each(options, function (key, val) {
                self._backgroundContextSetOption(background, key, val);
            });
            return background;
        },
        _backgroundContextSetOption: function (background, key, value) {
            switch (key) {
            case "key":
                background.key(value);
                break;
            case "parameter":
                background.parameter(value);
                break;
            case "opacity":
                background.parameter(value);
                break;
            default:
                break;
            }
        },
        _setDataTemplate: function (series, key, value) {
            var tempTemplate = new $.ig.DataTemplate(), requireThis = false;
            if (!value) {
                if (series[key]) {
                    series[key](null);
                }
                return;
            }

            if (value.requireThis) {
                requireThis = true;
            }

            if (value.render) {
                if (requireThis) {
                    tempTemplate.render($.proxy(value.render, value));
                } else {
                    tempTemplate.render(value.render);
                }
            } else {
                tempTemplate.render(value);
            }
            if (value.measure) {
                if (requireThis) {
                    tempTemplate.measure($.proxy(value.measure, value));
                } else {
                    tempTemplate.measure(value.measure);
                }
            }
            if (value.passStarting) {
                if (requireThis) {
                    tempTemplate.passStarting($.proxy(value.passStarting, value));
                } else {
                    tempTemplate.passStarting(value.passStarting);
                }
            }
            if (value.passCompleted) {
                if (requireThis) {
                    tempTemplate.passCompleted($.proxy(value.passCompleted, value));
                } else {
                    tempTemplate.passCompleted(value.passCompleted);
                }
            }
            if (series[key]) {
                series[key](tempTemplate);
            }
        },
        _seriesSetOption: function (series, key, value) {
            var $tempBrush;
            switch (key) {
            case "legendItemVisibility":
                switch (value) {
                case "visible":
                    series.legendItemVisibility(0);
                    break;
                case "collapsed":
                    series.legendItemVisibility(1);
                    break;
                }
                return true;
            case "legendItemBadgeTemplate":
            case "legendItemTemplate":
            case "discreteLegendItemTemplate":
            case "markerTemplate":
                this._setDataTemplate(series, key, value);
                return true;
            case "transitionDuration":
                series.transitionDuration(value);
                return true;
            case "resolution":
                series.resolution(value);
                return true;
            case "title":
                series.title(value);
                return true;
            case "brush":
                if (value === null) {
                    series.brush(null);
                } else {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value);
                    series.brush($tempBrush);
                }
                return true;
            case "outline":
                if (value === null) {
                    series.outline(null);
                } else {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value);
                    series.outline($tempBrush);
                }
                return true;
            case "thickness":
                series.thickness(value);
                return true;
            case "markerType":
                switch (value) {
                case "unset":
                    series.markerType(0);
                    break;
                case "none":
                    series.markerType(1);
                    break;
                case "automatic":
                    series.markerType(2);
                    break;
                case "circle":
                    series.markerType(3);
                    break;
                case "triangle":
                    series.markerType(4);
                    break;
                case "pyramid":
                    series.markerType(5);
                    break;
                case "square":
                    series.markerType(6);
                    break;
                case "diamond":
                    series.markerType(7);
                    break;
                case "pentagon":
                    series.markerType(8);
                    break;
                case "hexagon":
                    series.markerType(9);
                    break;
                case "tetragram":
                    series.markerType(10);
                    break;
                case "pentagram":
                    series.markerType(11);
                    break;
                case "hexagram":
                    series.markerType(12);
                    break;
                }
                return true;
            case "shapeMemberPath":
                series.shapeMemberPath(value);
                return true;
            case "shapeStyleSelector":
                series.shapeStyleSelector(value);
                return true;
            case "shapeStyle":
                series.shapeStyle(value);
                return true;
            case "markerBrush":
                if (value === null) {
                    series.markerBrush(null);
                } else {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value);
                    series.markerBrush($tempBrush);
                }
                return true;
            case "markerOutline":
                if (value === null) {
                    series.markerOutline(null);
                } else {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value);
                    series.markerOutline($tempBrush);
                }
                return true;
            case "markerCollisionAvoidance":
                switch (value) {
                case "none":
                    series.markerCollisionAvoidance(0);
                    break;
                case "omit":
                    series.markerCollisionAvoidance(1);
                    break;
                case "fade":
                    series.markerCollisionAvoidance(2);
                    break;
                case "omitAndShift":
                    series.markerCollisionAvoidance(3);
                    break;
                case "fadeAndShift":
                    series.markerCollisionAvoidance(4);
                    break;
                }
                return true;
            case "xAxis":
                series.xAxis(this._getAxisByName(value));
                return true;
            case "yAxis":
                series.yAxis(this._getAxisByName(value));
                return true;
            case "xMemberPath":
                series.xMemberPath(value);
                return true;
            case "yMemberPath":
                series.yMemberPath(value);
                return true;
            case "trendLineType":
                switch (value) {
                case "none":
                    series.trendLineType(0);
                    break;
                case "linearFit":
                    series.trendLineType(1);
                    break;
                case "quadraticFit":
                    series.trendLineType(2);
                    break;
                case "cubicFit":
                    series.trendLineType(3);
                    break;
                case "quarticFit":
                    series.trendLineType(4);
                    break;
                case "quinticFit":
                    series.trendLineType(5);
                    break;
                case "logarithmicFit":
                    series.trendLineType(6);
                    break;
                case "exponentialFit":
                    series.trendLineType(7);
                    break;
                case "powerLawFit":
                    series.trendLineType(8);
                    break;
                case "simpleAverage":
                    series.trendLineType(9);
                    break;
                case "exponentialAverage":
                    series.trendLineType(10);
                    break;
                case "modifiedAverage":
                    series.trendLineType(11);
                    break;
                case "cumulativeAverage":
                    series.trendLineType(12);
                    break;
                case "weightedAverage":
                    series.trendLineType(13);
                    break;
                }
                return true;
            case "trendLineBrush":
                if (value === null) {
                    series.trendLineBrush(null);
                } else {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value);
                    series.trendLineBrush($tempBrush);
                }
                return true;
            case "trendLineThickness":
                series.trendLineThickness(value);
                return true;
            case "trendLinePeriod":
                series.trendLinePeriod(value);
                return true;
            case "trendLineZIndex":
                series.trendLineZIndex(value);
                return true;
            case "maximumMarkers":
                series.maximumMarkers(value);
                return true;
            case "radiusMemberPath":
                series.radiusMemberPath(value);
                return true;
            case "radiusScale":
                series.radiusScale(this._getSizeScale(value));
                return true;
            case "labelMemberPath":
                series.labelMemberPath(value);
                return true;
            case "fillMemberPath":
                series.fillMemberPath(value);
                return true;
            case "fillScale":
                series.fillScale(this._getBrushScale(value));
                return true;
            case "angleAxis":
                series.angleAxis(this._getAxisByName(value));
                return true;
            case "valueAxis":
                series.valueAxis(this._getAxisByName(value));
                return true;
            case "clipSeriesToBounds":
                series.clipSeriesToBounds(value);
                return true;
            case "valueMemberPath":
                series.valueMemberPath(value);
                return true;
            case "unknownValuePlotting":
                switch (value) {
                case "linearInterpolate":
                    series.unknownValuePlotting(0);
                    break;
                case "dontPlot":
                    series.unknownValuePlotting(1);
                    break;
                }
                return true;
			case "radiusX":
                series.radiusX(value);
                return true;
			case "radiusY":
                series.radiusY(value);
                return true;
            case "angleMemberPath":
                series.angleMemberPath(value);
                return true;
            case "radiusAxis":
                series.radiusAxis(this._getAxisByName(value));
                return true;
            case "useCartesianInterpolation":
                series.useCartesianInterpolation(value);
                return true;
            case "negativeBrush":
                if (value === null) {
                    series.negativeBrush(null);
                } else {
                    $tempBrush = new $.ig.Brush();
                    $tempBrush.fill(value);
                    series.negativeBrush($tempBrush);
                }
                return true;
            case "splineType":
                switch (value) {
                case "natural":
                    series.splineType(0);
                    break;
                case "clamped":
                    series.splineType(1);
                    break;
                }
                return true;
            case "lowMemberPath":
                series.lowMemberPath(value);
                return true;
            case "highMemberPath":
                series.highMemberPath(value);
                return true;
            case "openMemberPath":
                series.openMemberPath(value);
                return true;
            case "closeMemberPath":
                series.closeMemberPath(value);
                return true;
            case "volumeMemberPath":
                series.volumeMemberPath(value);
                return true;
            case "ignoreFirst":
                series.ignoreFirst(value);
                return true;
            case "period":
                series.period(value);
                return true;
            case "shortPeriod":
                series.shortPeriod(value);
                return true;
            case "longPeriod":
                series.longPeriod(value);
                return true;
            case "trianglesSource":
                series.trianglesSource(value);
                return true;
            case "triangleVertexMemberPath1":
                series.triangleVertexMemberPath1(value);
                return true;
            case "triangleVertexMemberPath2":
                series.triangleVertexMemberPath2(value);
                return true;
            case "triangleVertexMemberPath3":
                series.triangleVertexMemberPath3(value);
                return true;
            case "colorScale":
                series.colorScale(this._getColorScale(value));
                return true;
            case "colorMemberPath":
                series.colorMemberPath(value);
                return true;
            case "visibleFromScale":
                series.visibleFromScale(value);
                return true;
            case "longitudeMemberPath":
                series.longitudeMemberPath(value);
                return true;
            case "latitudeMemberPath":
                series.latitudeMemberPath(value);
                return true;
			case "valueResolver":
                series.valueResolver(this._getValueResolver(value));
                return true;
			case "shapeFilterResolution":
                series.shapeFilterResolution(value);
                return true;
			case "useBruteForce":
                series.useBruteForce(value);
                return true;
			case "progressiveLoad":
                series.progressiveLoad(value);
                return true;
			case "mouseOverEnabled":
                series.mouseOverEnabled(value);
                return true;
			case "useSquareCutoffStyle":
                series.useSquareCutoffStyle(value);
                return true;
			case "heatMinimum":
                series.heatMinimum(value);
                return true;
			case "heatMaximum":
                series.heatMaximum(value);
                return true;
			case "multiplier":
				series.multiplier(value);
				return true;
			case "smoothingPeriod":
				series.smoothingPeriod(value);
				return true;
			case "triggerPeriod":
				series.triggerPeriod(value);
				return true;
			case "signalPeriod":
				series.signalPeriod(value);
				return true;
            }

            return false;
        },
		_getValueResolver: function (value) {
			var valueResolver;
			if (value.type === undefined || value.type === 'linear') {
				valueResolver = new $.ig.LinearContourValueResolver();
			}
			if (value.valueCount) {
				valueResolver.valueCount(value.valueCount);
			}
			return valueResolver;
		},
        _getSizeScale: function (value) {
            var scale = new $.ig.SizeScale();
            if (value.minimumValue) {
                scale.minimumValue(value.minimumValue);
            }
            if (value.maximumValue) {
                scale.maximumValue(value.maximumValue);
            }
            if (value.isLogarithmic) {
                scale.isLogarithmic(value.isLogarithmic);
            }
            if (value.logarithmBase) {
                scale.logarithmBase(value.logarithmBase);
            }
            return scale;
        },
        _getColorScale: function (value) {
            var type = "customPalette", scale = null;
            if (value.type) {
                type = value.type;
            }

            switch (type) {
            case "customPalette":
                scale = new $.ig.CustomPaletteColorScale();
                break;
            }

            if (scale) {
                if (value.minimumValue) {
                    scale.minimumValue(value.minimumValue);
                }
                if (value.maximumValue) {
                    scale.maximumValue(value.maximumValue);
                }

                if (value.interpolationMode) {
                    switch (value.interpolationMode) {
                    case "select":
                        scale.interpolationMode(0);
                        break;
                    case "interpolateRGB":
                        scale.interpolationMode(1);
                        break;
                    case "interpolateHSV":
                        scale.interpolationMode(2);
                        break;
                    }
                }

                if (value.palette) {
                    scale.providePalette(value.palette);
                }
            }

            return scale;
        },
        _getBrushScale: function (value) {
            var type = "value", scale = null, isRGB, $tempBrush, i, brushes, $tempBrushCollection;
            if (value.type) {
                type = value.type;
            }

            switch (type) {
            case "value":
                scale = new $.ig.ValueBrushScale();
                break;
            case "customPalette":
                scale = new $.ig.CustomPaletteBrushScale();
                break;
            }

            if (scale) {
                if (value.brushes) {
                    isRGB = true;
                    brushes = value.brushes;
                    if ((typeof brushes[0] === "string" && brushes[0] === "HSV") || brushes[0] === "RGB") { if (brushes[0] === "HSV") { isRGB = false; } brushes = brushes.slice(1); }
                    $tempBrushCollection = new $.ig.BrushCollection();
                    for (i = 0; i < brushes.length; i++) {
                        $tempBrush = new $.ig.Brush();
                        $tempBrush.fill(brushes[i]);
                        $tempBrushCollection.add($tempBrush);
                    }
                    scale.brushes($tempBrushCollection);
                }
                if (value.brushSelectionMode) {
                    switch (value.brushSelectionMode) {
                    case "select":
                        scale.brushSelectionMode(0);
                        break;
                    case "interpolate":
                        scale.brushSelectionMode(1);
                        break;
                    }
                }
                if (value.minimumValue) {
                    scale.minimumValue(value.minimumValue);
                }
                if (value.maximumValue) {
                    scale.maximumValue(value.maximumValue);
                }
                if (value.isLogarithmic) {
                    scale.isLogarithmic(value.isLogarithmic);
                }
                if (value.logarithmBase) {
                    scale.logarithmBase(value.logarithmBase);
                }
            }

            return scale;
        },
        _setAxisOption: function (axis, key, value) {
            var $tempBrush;
            switch (key) {
            case "strokeThickness":
            case "majorStrokeThickness":
            case "minorStrokeThickness":
            case "isInverted":
            case "crossingValue":
            case "label":
            case "gap":
            case "overlap":
            case "interval":
            case "startAngleOffset":
            case "minimumValue":
            case "maximumValue":
            case "referenceValue":
            case "isLogarithmic":
            case "logarithmBase":
            case "radiusExtentScale":
            case "innerRadiusExtentScale":
            case "dateTimeMemberPath":
            case "formatLabel":
                if (axis[key]) {
                    axis[key](value);
                }
                return true;
            case "stroke":
                $tempBrush = new $.ig.Brush();
                $tempBrush.fill(value);
                axis.stroke($tempBrush);
                return true;
            case "strip":
                $tempBrush = new $.ig.Brush();
                $tempBrush.fill(value);
                axis.strip($tempBrush);
                return true;
            case "majorStroke":
                $tempBrush = new $.ig.Brush();
                $tempBrush.fill(value);
                axis.majorStroke($tempBrush);
                return true;
            case "minorStroke":
                $tempBrush = new $.ig.Brush();
                $tempBrush.fill(value);
                axis.minorStroke($tempBrush);
                return true;
            case "scaleMode":
                switch (value) {
                case "linear":
                    axis.scaleMode(0);
                    break;
                case "logarithmic":
                    axis.scaleMode(1);
                    break;
                }
                return true;
            }
        },
        _setCoreAxisOption: function (axis, key, value) {
            var labelSettings = null, tempBrush, tempAxis, self = this;

            switch (key) {
            case "crossingAxis":
                if (value) {
                    tempAxis = this._getAxisByName(value);
                    if (tempAxis) {
                        axis.crossingAxis(tempAxis);
                    } else {
                        this.widget._pendingCrossingAxes.push(function () {
                            var tempAxis = self._getAxisByName(value);
                            if (tempAxis) {
                                axis.crossingAxis(tempAxis);
                            }
                        });
                    }
                } else {
                    axis.crossingAxis(null);
                }
                break;
            case "labelLocation":
                labelSettings = axis.labelSettings();
                if (labelSettings === null) {
                    labelSettings = new $.ig.AxisLabelSettings();
                }
                switch (value) {
                case "outsideTop":
                    labelSettings.location(0);
                    break;
                case "outsideBottom":
                    labelSettings.location(1);
                    break;
                case "outsideLeft":
                    labelSettings.location(2);
                    break;
                case "outsideRight":
                    labelSettings.location(3);
                    break;
                case "insideTop":
                    labelSettings.location(4);
                    break;
                case "insideBottom":
                    labelSettings.location(5);
                    break;
                case "insideLeft":
                    labelSettings.location(6);
                    break;
                case "insideRight":
                    labelSettings.location(7);
                    break;
                default:
                    break;
                }
                if (!axis.labelSettings()) {
                    axis.labelSettings(labelSettings);
                }
                break;
            case "labelVisibility":
                labelSettings = axis.labelSettings();
                if (labelSettings === null) {
                    labelSettings = new $.ig.AxisLabelSettings();
                }
                switch (value) {
                case "visible":
                    labelSettings.visibility(0);
                    break;
                case "collapsed":
                    labelSettings.visibility(1);
                    break;
                default:
                    break;
                }
                if (!axis.labelSettings()) {
                    axis.labelSettings(labelSettings);
                }
                break;
            case "labelExtent":
                if (value === null) {
                    value = NaN;
                }
                labelSettings = axis.labelSettings();
                if (labelSettings === null) {
                    labelSettings = new $.ig.AxisLabelSettings();
                }
                labelSettings.extent(value);
                if (!axis.labelSettings()) {
                    axis.labelSettings(labelSettings);
                }
                break;
            case "labelAngle":
                if (value === null) {
                    value = 0;
                }
                labelSettings = axis.labelSettings();
                if (labelSettings === null) {
                    labelSettings = new $.ig.AxisLabelSettings();
                }
                labelSettings.angle(value);
                if (!axis.labelSettings()) {
                    axis.labelSettings(labelSettings);
                }
                break;
            case "labelTextStyle":
                labelSettings = axis.labelSettings();
                if (labelSettings === null) {
                    labelSettings = new $.ig.AxisLabelSettings();
                }
                labelSettings.textStyle(value);
                if (!axis.labelSettings()) {
                    axis.labelSettings(labelSettings);
                }
                break;
            case "labelTextColor":
                tempBrush = new $.ig.Brush();
                tempBrush.fill(value);
                if (value === null) {
                    tempBrush = null;
                }
                labelSettings = axis.labelSettings();
                if (labelSettings === null) {
                    labelSettings = new $.ig.AxisLabelSettings();
                }
                labelSettings.textColor(tempBrush);
                if (!axis.labelSettings()) {
                    axis.labelSettings(labelSettings);
                }
                break;
            }
        },
        _setOption: function (key, value) {
            //check if it is a data option
            if (key === "dataSource" || key === "dataSourceUrl" || (value[0] !== undefined && (value[0].dataSource !== undefined || value[0].dataSourceUrl !== undefined))) {
                var dataOptions = {}, id;
                if (key === "dataSource" || key === "dataSourceUrl") {
                    dataOptions.dataSource = value;
                    id = this.widget._containerSourceID;
                } else {
                    dataOptions = value[0];
                    id = value[0].name;
                    if (this.widget._target && this.widget._target.name() === id) {
                        this.widget._target = null;
                    }
                }
				this.widget._setCoreCallbackOptions = { key: key, value: value};
                this._setupDataSource(dataOptions, this._chartDataCallBack);
				if (id === undefined || id === null) {
					id = this.widget._containerSourceID;
				}
                this.widget.dataSources[id].dataBind();
            } else if (value[0] !== undefined && (value[0].shapeDataSource !== undefined || value[0].triangulatedDataSource !== undefined)) {
                this.widget._initConverter(value[0], this._convDataCallback);
				this.widget._setCoreCallbackOptions = { key: key, value: value};
            } else {
				this._setOptionAfterInit(key, value);
            }
        },
        _chartDataCallBack: function (success, e, dataSource) {
			var key = this.widget._setCoreCallbackOptions.key, value = this.widget._setCoreCallbackOptions.value;
            if (!success) {
                return false;
            }
            this._setItemsSource(this.widget, this._getNotifyTarget(dataSource.settings.id), dataSource.settings.id);
			if (key === "series" || key === "axes") {
				this._setOptionAfterInit(key, value);
			}
        },
        _convDataCallback: function () {
			var context = this.settings.callee, id = this.settings.id, key = context.widget._setCoreCallbackOptions.key, value = context.widget._setCoreCallbackOptions.value;
            context._setItemsSource(context.widget, context._getNotifyTarget(id), id);
			if (key === "series") {
				context._setOptionAfterInit(key, value);
			}
        },
		_setOptionAfterInit: function (key, value) {
			if (!this._setWidgetOption(this.widget._chart, key, value)) {
                this._setCoreWidgetOption(this.widget._chart, key, value);
            } else {
                //still propagate a value into the options so that it can be examined by the user.
                this.widget.options[key] = value;
            }
		},
        _setItemsSource: function (widget, target, id) {
            var ds = widget.dataSources[id];
            if (target === widget._chart) {
                if (ds !== null) {
                    widget._chart.setWidgetLevelDataSource(ds);
                } else {
                    widget._chart.removeWidgetLevelDataSource();
                }
            } else {
                if (ds !== null) {
                    widget._chart.setSpecificDataSource(id, ds);
                } else {
                    widget._chart.removeSpecificDataSource(id, false);
                }
            }
        },
        _initialDataBind: function () {
            var ds = this._initDataSources(), self = this;
            $.each(ds, function (i, val) {
                if (typeof self.widget.dataSources[i].dataBind === 'function') {
                    self.widget.dataSources[i].dataBind();
                }
            });
        },
        _initDataSources: function () {
            var self = this, widget = this.widget, options = this.widget.options, axes, series;
            widget.dataSources = {};
            widget.dsCount = 0;
            if (options.dataSource || options.dataSourceUrl) {
                widget.dsCount++;
                self._setupDataSource(options, this._initCallback);
            }
            if (options.shapeDataSource || options.triangulationDataSource) {
                widget.dsCount++;
                self.widget._initConverter(options, self._converterCallback);
            }
            if (options.axes) {
                axes = options.axes;
                $.each(axes, function (i, val) {
                    if (val.dataSource || val.dataSourceUrl) {
                        widget.dsCount++;
                        self._setupDataSource(val, self._initCallback);
                    }
                });
            }
            if (options.series) {
                series = options.series;
                $.each(series, function (i, val) {
                    if (val.dataSource || val.dataSourceUrl) {
                        widget.dsCount++;
                        self._setupDataSource(val, self._initCallback);
                    }
                    if (val.shapeDataSource || val.triangulationDataSource) {
                        widget.dsCount++;
                        self.widget._initConverter(val, self._converterCallback);
                    }
                });
            }
            return widget.dataSources;
        },
        _isCanvasSupported: function () {
            var canvas = document.createElement('canvas');
            return !!(canvas.getContext && canvas.getContext('2d'));
        },
        _renderUnsupportedBrowser: function (chart) {
            if (chart._trigger(chart.events.browserNotSupported)) {
                var container = $('<div></div>').addClass(chart.css.unsupportedBrowserClass).appendTo(chart.element), ul, browserUnsupported;
                if ($.browser.msie) {
                    browserUnsupported = 'Internet Explorer ' + $.browser.version;
                } else if ($.browser.opera) {
                    browserUnsupported = 'Opera ' + $.browser.version;
                } else if ($.browser.webkit) {
                    browserUnsupported = 'Webkit ' + $.browser.version;
                } else if ($.browser.mozilla) {
                    browserUnsupported = 'Mozilla Firefox ' + $.browser.version;
                } else {
                    browserUnsupported = $.browser.version;
                }

                $('<div></div>').addClass('ui-chart-current-browser-label').html($.ig.Chart.locale.currentBrowser.replace('{0}', browserUnsupported)).appendTo(container);
                $('<div></div>').addClass('ui-chart-non-html5-text').html($.ig.Chart.locale.unsupportedBrowser).appendTo(container);
                ul = $('<ul></ul>').addClass('ui-chart-browsers-list').appendTo(container);
                $('<a></a>').attr('href', $.ig.Chart.locale.chromeDownload).attr('target', '_blank').addClass('ui-chart-chrome-icon').html($.ig.Chart.locale.chrome8).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
                $('<a></a>').attr('href', $.ig.Chart.locale.firefoxDownload).attr('target', '_blank').addClass('ui-chart-firefox-icon').html($.ig.Chart.locale.firefox36).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
                $('<a></a>').attr('href', $.ig.Chart.locale.operaDownload).attr('target', '_blank').addClass('ui-chart-Opera-icon').html($.ig.Chart.locale.opera11).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
                $('<a></a>').attr('href', $.ig.Chart.locale.safariDownload).attr('target', '_blank').addClass('ui-chart-safari-icon').html($.ig.Chart.locale.safari5).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
                $('<a></a>').attr('href', $.ig.Chart.locale.ieDownload).attr('target', '_blank').addClass('ui-chart-ie-icon').html($.ig.Chart.locale.ie9).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
                chart.element.addClass('ui-chart-non-html5');
                chart.element.css("width", chart.options.width);
                chart.element.css("height", chart.options.height);
            }
        },
        _drawCanvas: function (canvasElemnts, iWidth, iHeight) {
            var oSaveCanvas = document.createElement("canvas"), oSaveCtx;

            oSaveCanvas.width = iWidth;
            oSaveCanvas.height = iHeight;
            oSaveCanvas.style.width = iWidth + "px";
            oSaveCanvas.style.height = iHeight + "px";

            oSaveCtx = oSaveCanvas.getContext("2d");
            $.each(canvasElemnts, function (i, canvas) {
                oSaveCtx.drawImage(canvas, 0, 0, iWidth, iHeight);
            });
            return oSaveCanvas;
        },
        _getLegendElements: function () {
            var options = this.widget.options, elements = [];
            if (this.widget.options.legend) {
                elements.push($('#' + this.widget.options.legend.element));
            }
            if (options.series) {
                $.each(options.series, function (i, ser) {
                    if (ser && ser.legend) {
                        elements.push($('#' + ser.legend.element));
                    }
                });
            }
            return elements;
        },
        _print: function () {
            var doc = document,
				widget = this.widget,
				legends = this._getLegendElements(),
				chartWrapper = $('#' + this.widget.id()),
				origDisplay = [],
				origWrappers = [],
				body = doc.body,
				childNodes = body.childNodes;

            if (widget._isPrinting) {
                return;
            }

            widget._isPrinting = true;

            $.each(childNodes, function (i, node) {
                if (node.nodeType === 1) {
                    origDisplay[i] = node.style.display;
                    node.style.display = 'none';
                }
            });
            origWrappers[0] = (chartWrapper.parent());
            $(body).append(chartWrapper);

            $.each(legends, function (i, legend) {
                origWrappers[i + 1] = legend.parent();
                $(body).append(legend);
            });

            window.print();
            //restore
            setTimeout(function () {
                widget._isPrinting = false;
                origWrappers[0].prepend(chartWrapper);
                $.each(legends, function (i, legend) {
                    origWrappers[i + 1].prepend(legend);
                });

                $.each(childNodes, function (i, node) {
                    if (node.nodeType === 1) {
                        node.style.display = origDisplay[i];
                    }
                });

            }, 1000);
        },
        _getImage: function (width, height, chart) {
            var expCanvas, imgElement = document.createElement("img");
            width = width || $('#' + chart.id() + '_chart_container').width();
            height = height || $('#' + chart.id() + '_chart_container').height();
            expCanvas = this._drawCanvas($('#' + chart.id() + ' canvas'), width, height);
            imgElement.src = expCanvas.toDataURL("image/png");
            return imgElement;
        },
        _renderChartContainer: function (chart) {
            var opt = chart.options, chartElement;

            if (!chart._isRendered) {
                chartElement = $("<div id='" + chart.id() + "_chart_container'></div>").appendTo(chart.element);
                chartElement.addClass(chart.css.chart || chart.css.map);
                chartElement.css("width", opt.width);
                chartElement.css("height", opt.height);
                chart._chart.provideContainer(chartElement);
                chart._chartElement = chartElement;
            }
        },

        _setLegend: function (item, value) {
			var legend;
			if (value !== null) {
				value.owner = this.widget;
				if (value.type === undefined) {
					value.type = (this.widget.widgetName === "igPieChart") ? "item" : "legend";
				}
				if (item.legend() === null) {
					//check if the widget is created already
					if ($('#' + value.element).data("igChartLegend") || (value.data && value.data("igChartLegend"))) {
						legend = (!value.element) ? value.data("igChartLegend") : $('#' + value.element).data("igChartLegend");
						legend.options.owner = this.widget.options;
						legend._owner = this.widget;
					} else {
						legend = $('#' + value.element).igChartLegend(value).data("igChartLegend");
					}
					item.legend(legend.legend);
				} else {
					$('#' + item.legend().name()).igChartLegend(value);
				}
			} else {
				if (item.legend() !== null && $('#' + item.legend().name()).length > 0) {
					$('#' + item.legend().name()).igChartLegend('destroy');
				}
			}
        },

        _mergeDataSourceSettings: function (s1, s2) {
            if (!s1) {
                return s2;
            }
            if (!s2) {
                return s1;
            }
            var source1 = s1.dataSource, source2 = s2.dataSource, newSettings;
            if (source1 && ($.type(source1) === "array" || $.type(source1) === "object")) {
                s1.dataSource = null;
            }
            if (source2 && ($.type(source2) === "array" || $.type(source2) === "object")) {
                s2.dataSource = null;
            }
            newSettings = $.extend(true, {}, s1, s2);
            if (source2 && ($.type(source2) === "array" || $.type(source2) === "object")) {
                s2.dataSource = source2;
                newSettings.dataSource = source2;
            } else if (source1 && ($.type(source1) === "array" || $.type(source1) === "object")) {
                s1.dataSource = source1;
            }
            if (!source2 && source2 !== undefined) {
                newSettings.dataSource = null;
            }
            return newSettings;
        },

        _mergeIntoWithDataSource: function (o1, o2) {
            var ds1, ds2, setToNull, s1 = null, s2 = null;
            if (o1.dataSource) {
                ds1 = o1.dataSource;
            }
            if (o2.dataSource) {
                ds2 = o2.dataSource;
            }
            setToNull = false;
            if (!o2.dataSource && o2.dataSource !== undefined) {
                setToNull = true;
            }

            o1.dataSource = null;
            o2.dataSource = null;

            $.extend(true, o1, o2);
            if (ds1) {
                o1.dataSource = ds1;
            }
            if (ds2) {
                o2.dataSource = ds2;
                o1.dataSource = ds2;
            }
            if (o1.dataSource) {
                if (o1.dataSource && o1.dataSource.settings) {
                    s1 = o1.dataSource.settings;
                }
                if (o2.dataSource && o2.dataSource.settings) {
                    s2 = o2.dataSource.settings;
                }
                o1.dataSource.settings = this._mergeDataSourceSettings(s1, s2);
            }
        },

        _mergeIntoNewWithDataSource: function (o1, o2) {
            var ds1, ds2, setToNull, newObj, s1 = null, s2 = null;
            if (o1.dataSource) {
                ds1 = o1.dataSource;
            }
            if (o2.dataSource) {
                ds2 = o2.dataSource;
            }
            setToNull = false;
            if (!o2.dataSource && o2.dataSource !== undefined) {
                setToNull = true;
            }

            o1.dataSource = null;
            o2.dataSource = null;

            newObj = $.extend(true, {}, o1, o2);

            if (ds1) {
                o1.dataSource = ds1;
                newObj.dataSource = ds1;
            }
            if (ds2) {
                o2.dataSource = ds2;
                newObj.dataSource = ds2;
            }
            if (newObj.dataSource) {
                if (o1.dataSource && o1.dataSource.settings) {
                    s1 = o1.dataSource.settings;
                }
                if (o2.dataSource && o2.dataSource.settings) {
                    s2 = o2.dataSource.settings;
                }
                newObj.dataSource.settings = this._mergeDataSourceSettings(s1, s2);
            }

            return newObj;
        },

        _addTooltip: function (widget, series, clss) {
            if (typeof widget._chart.toolTip === 'function') {
                if (widget._tooltip[widget.id()] === undefined) {
                    widget._tooltip[widget.id()] = $("<div id=\"" + widget.id() + "_tooltip\" class=\"" + clss + "\"></div>");
                }
                this._bindTooltipEvents(widget, widget._tooltip[widget.id()]);
                widget._chart.toolTip(widget._tooltip[widget.id()]);
            } else {
                if (widget._tooltip[series.name()] === undefined) {
                    widget._tooltip[series.name()] = $("<div id=\"" + series.name() + "_tooltip\" class=\"" + clss + "\"></div>");
                }
                this._bindTooltipEvents(widget, widget._tooltip[series.name()]);
                series.toolTip(widget._tooltip[series.name()]);
            }
        },

        _removeTooltip: function (widget, series) {
            if (typeof widget._chart.toolTip === 'function') {
                if (widget._tooltip[widget.id()] !== undefined) {
                    this._removeTooltipEvents(widget, widget._tooltip[widget.id()]);
                    delete widget._tooltip[widget.id()];
                    widget._chart.toolTip(null);
                }
            } else {
                if (widget._tooltip[series.name()] !== undefined) {
                    this._removeTooltipEvents(widget, widget._tooltip[series.name()]);
                    delete widget._tooltip[series.name()];
                    series.toolTip(null);
                }
            }
        },

        _bindTooltipEvents: function (chart, tooltip) {
            tooltip.updateToolTip = $.ig.Delegate.prototype.combine(tooltip.updateToolTip, jQuery.proxy(this._fireToolTip_updateToolTip, this));
            tooltip.hideToolTip = $.ig.Delegate.prototype.combine(tooltip.hideToolTip, jQuery.proxy(this._fireToolTip_hideToolTip, this));
        },

        _removeTooltipEvents: function (chart, tooltip) {
            delete tooltip.updateToolTip;
            delete tooltip.hideToolTip;
        },

        _bindMapEvents: function (chart) {
            chart.seriesCursorMouseMove = $.ig.Delegate.prototype.combine(chart.seriesCursorMouseMove, jQuery.proxy(this._fireChart_seriesCursorMouseMove, this));
            chart.seriesMouseLeftButtonDown = $.ig.Delegate.prototype.combine(chart.seriesMouseLeftButtonDown, jQuery.proxy(this._fireChart_seriesMouseLeftButtonDown, this));
            chart.seriesMouseLeftButtonUp = $.ig.Delegate.prototype.combine(chart.seriesMouseLeftButtonUp, jQuery.proxy(this._fireChart_seriesMouseLeftButtonUp, this));
            chart.seriesMouseMove = $.ig.Delegate.prototype.combine(chart.seriesMouseMove, jQuery.proxy(this._fireChart_seriesMouseMove, this));
            chart.seriesMouseEnter = $.ig.Delegate.prototype.combine(chart.seriesMouseEnter, jQuery.proxy(this._fireChart_seriesMouseEnter, this));
            chart.seriesMouseLeave = $.ig.Delegate.prototype.combine(chart.seriesMouseLeave, jQuery.proxy(this._fireChart_seriesMouseLeave, this));
            chart.windowRectChanged = $.ig.Delegate.prototype.combine(chart.windowRectChanged, jQuery.proxy(this._fireChart_windowRectChanged, this));
            chart.actualWindowRectChanged = $.ig.Delegate.prototype.combine(chart.actualWindowRectChanged, jQuery.proxy(this._fireChart_actualWindowRectChanged, this));
            chart.gridAreaRectChanged = $.ig.Delegate.prototype.combine(chart.gridAreaRectChanged, jQuery.proxy(this._fireChart_gridAreaRectChanged, this));
            chart.refreshCompleted = $.ig.Delegate.prototype.combine(chart.refreshCompleted, jQuery.proxy(this._fireChart_refreshCompleted, this));
        },

		_bindSeriesEvents: function (series) {
			if (series.basedOnColumns !== undefined) {
				series.basedOnColumns($.ig.Delegate.prototype.combine(series.basedOnColumns(), jQuery.proxy(this._fireChart_basedOnColumns, this)));
			}
			if (series.indicator !== undefined) {
				series.indicator($.ig.Delegate.prototype.combine(series.indicator(), jQuery.proxy(this._fireChart_indicator, this)));
			}
			if (series.typical !== undefined) {
				series.typical = $.ig.Delegate.prototype.combine(series.typical, jQuery.proxy(this._fireChart_typical, this));
			}
			if (series.typicalBasedOn !== undefined) {
				series.typicalBasedOn = $.ig.Delegate.prototype.combine(series.typicalBasedOn, jQuery.proxy(this._fireChart_typicalBasedOn, this));
			}
			if (series.triangulationStatusChanged !== undefined) {
				series.triangulationStatusChanged = $.ig.Delegate.prototype.combine(series.triangulationStatusChanged, jQuery.proxy(this._fireMap_triangulationStatusChanged, this));
			}
			if (series.progressiveLoadStatusChanged !== undefined) {
				series.progressiveLoadStatusChanged = $.ig.Delegate.prototype.combine(series.progressiveLoadStatusChanged, jQuery.proxy(this._fireChart_progressiveLoadStatusChanged, this));
			}
			if (series.scatterMouseOver !== undefined) {
				series.scatterMouseOver = $.ig.Delegate.prototype.combine(series.scatterMouseOver, jQuery.proxy(this._fireChart_scatterMouseOver, this));
			}
		},
		_getWidgetName: function () {
			switch (this.widget.widgetName) {
			case "igPieChart":
			case "igDataChart":
				return "chart";
			case "igMap":
				return "map";
			}
		},
		_fireChart_progressiveLoadStatusChanged: function (sender, evtArgs) {
			var e = {}, widget = this._getWidgetName(), seriesOpt = this.widget._seriesOpt[sender.name()];
			e.currentStatus = evtArgs.currentStatus();
			e[widget] = this.widget.options;
			e.series = seriesOpt;
			this.widget._trigger("progressiveLoadStatusChanged", null, e);
		},
		_fireChart_scatterMouseOver: function (sender, evtArgs) {
			var e = {}, widget = this._getWidgetName();
			e[widget] = this.widget.options;
			e.args = evtArgs;
			e.series = sender;
			this.widget._trigger("scatterMouseOver", null, e);
		},
		_fireChart_typicalBasedOn: function (sender, evtArgs) {
			var e = {}, widget = this._getWidgetName(), seriesOpt = this.widget._seriesOpt[sender.name()], i, intSeries = this.widget._series[sender.name()], self = this;
			e[widget] = this.widget.options;
			e.series = seriesOpt;
			e.position = evtArgs.position();
			e.count = evtArgs.count();
			e.getDataSource = function () {
				return self._flattenDataSource(intSeries, evtArgs.dataSource());
			};
			e.basedOn = []; //evtArgs.basedOn();
			e.minimumValue = evtArgs.dataSource().minimumValue();
			e.maximumValue = evtArgs.dataSource().maximumValue();
			this.widget._trigger("typicalBasedOn", null, e);
			if (e.basedOn !== null && e.basedOn.length && e.basedOn.length > 0) {
				for (i = 0; i < e.basedOn.length; i++) {
					evtArgs.basedOn().add(e.basedOn[i]);
				}
			}
			if (!isNaN(e.minimum)) {
				evtArgs.dataSource().minimumValue(e.minimumValue);
			}
			if (!isNaN(e.maximum)) {
				evtArgs.dataSource().maximumValue(e.maximumValue);
			}
		},
		_fireChart_basedOnColumns: function (sender, evtArgs) {
			var e = {}, widget = this._getWidgetName(), seriesOpt = this.widget._seriesOpt[sender.name()], i, intSeries = this.widget._series[sender.name()], self = this;
			e[widget] = this.widget.options;
			e.series = seriesOpt;
			e.position = evtArgs.position();
			e.count = evtArgs.count();
			e.getDataSource = function () {
				return self._flattenDataSource(intSeries, evtArgs.dataSource());
			};
			e.basedOn = []; //evtArgs.basedOn();
			e.minimumValue = evtArgs.dataSource().minimumValue();
			e.maximumValue = evtArgs.dataSource().maximumValue();
			this.widget._trigger("basedOn", null, e);
			if (e.basedOn !== null && e.basedOn.length && e.basedOn.length > 0) {
				for (i = 0; i < e.basedOn.length; i++) {
					evtArgs.basedOn().add(e.basedOn[i]);
				}
			}
			if (!isNaN(e.minimum)) {
				evtArgs.dataSource().minimumValue(e.minimumValue);
			}
			if (!isNaN(e.maximum)) {
				evtArgs.dataSource().maximumValue(e.maximumValue);
			}
		},
		_fireChart_indicator: function (sender, evtArgs) {
			var e = {}, widget = this._getWidgetName(), seriesOpt = this.widget._seriesOpt[sender.name()], intSeries = this.widget._series[sender.name()], self = this;
			e[widget] = this.widget.options;
			e.series = seriesOpt;
			e.position = evtArgs.position();
			e.count = evtArgs.count();
			e.getDataSource = function () {
				return self._flattenDataSource(intSeries, evtArgs.dataSource());
			};
			e.basedOn = evtArgs.basedOn();
			e.minimumValue = evtArgs.dataSource().minimumValue();
			e.maximumValue = evtArgs.dataSource().maximumValue();
			this.widget._trigger("indicator", null, e);
			if (!isNaN(e.minimum)) {
				evtArgs.dataSource().minimumValue(e.minimumValue);
			}
			if (!isNaN(e.maximum)) {
				evtArgs.dataSource().maximumValue(e.maximumValue);
			}
		},
		_fireChart_typical: function (sender, evtArgs) {
			var e = {}, widget = this._getWidgetName(), seriesOpt = this.widget._seriesOpt[sender.name()],
				intSeries = this.widget._series[sender.name()], self = this,
				typicalRet, tBasedOn;
            e[widget] = this.widget.options;
            e.series = seriesOpt;
            e.position = evtArgs.position();
            e.count = evtArgs.count();
            e.getDataSource = function () {
                var ds = self._flattenDataSource(intSeries, evtArgs.dataSource());
				return ds;
            };
            e.basedOn = evtArgs.basedOn();
            e.minimumValue = evtArgs.dataSource().minimumValue();
            e.maximumValue = evtArgs.dataSource().maximumValue();
            e.typicalColumn = [];
			tBasedOn = evtArgs.dataSource().typicalColumn().basedOn();
            this.widget._trigger("typical", null, e);
            if (e.typicalColumn !== null && e.typicalColumn.length > 0) {
                typicalRet = new $.ig.List$1(Number, 1, e.typicalColumn);
				evtArgs.dataSource().typicalColumn(new $.ig.CalculatedColumn(1, typicalRet, tBasedOn));
            } else {
                evtArgs.dataSource().typicalColumn(null);
            }

            if (!isNaN(e.minimum)) {
                evtArgs.dataSource().minimumValue(e.minimumValue);
            }
            if (!isNaN(e.maximum)) {
                evtArgs.dataSource().maximumValue(e.maximumValue);
            }
		},
		_flattenDataSource: function (series, ds) {
			var ret = {},
				openColumn = series.getOpenColumnAsArray(),
				highColumn = series.getHighColumnAsArray(),
				lowColumn = series.getLowColumnAsArray(),
				closeColumn = series.getCloseColumnAsArray(),
				volumeColumn = series.getVolumeColumnAsArray();

			ret.indicatorColumn = ds.indicatorColumn().asArrayList();
			ret.openColumn = openColumn;
			ret.highColumn = highColumn;
			ret.lowColumn = lowColumn;
			ret.closeColumn = closeColumn;
			ret.volumeColumn = volumeColumn;
			return ret;
		},
		_fireMap_triangulationStatusChanged: function (sender, evtArgs) {
			var e = {}, widget = this._getWidgetName(), seriesOpt = this.widget._seriesOpt[sender.name()];
			e.currentStatus = evtArgs.currentStatus();
			e[widget] = this.widget.options;
			e.series = seriesOpt;
			this.widget._trigger("triangulationStatusChanged", null, e);
		},
        _bindPieChartEvents: function (chart) {
            chart.sliceClick = $.ig.Delegate.prototype.combine(chart.sliceClick, jQuery.proxy(this._firePieChart_sliceClick, this));
        },
        _firePieChart_sliceClick: function (sender, evtArgs) {
            var e = {}, isExploded, isSelected;
            e.slice = {};
            e.slice.item = evtArgs.slice().dataContext();
            isExploded = evtArgs.slice().isExploded();
            isSelected = evtArgs.slice().isSelected();
            e.slice.isExploded = isExploded;
            e.slice.isSelected = isSelected;
            e.chart = this.widget.options;
            this.widget._trigger("sliceClick", null, e);
            if (e.slice.isExploded !== isExploded) {
                evtArgs.slice().isExploded(e.slice.isExploded);
            }
            if (e.slice.isSelected !== isSelected) {
                evtArgs.slice().isSelected(e.slice.isSelected);
            }
        },
        _bindDataChartEvents: function (chart) {
            chart.seriesCursorMouseMove = $.ig.Delegate.prototype.combine(chart.seriesCursorMouseMove, jQuery.proxy(this._fireChart_seriesCursorMouseMove, this));
            chart.seriesMouseLeftButtonDown = $.ig.Delegate.prototype.combine(chart.seriesMouseLeftButtonDown, jQuery.proxy(this._fireChart_seriesMouseLeftButtonDown, this));
            chart.seriesMouseLeftButtonUp = $.ig.Delegate.prototype.combine(chart.seriesMouseLeftButtonUp, jQuery.proxy(this._fireChart_seriesMouseLeftButtonUp, this));
            chart.seriesMouseMove = $.ig.Delegate.prototype.combine(chart.seriesMouseMove, jQuery.proxy(this._fireChart_seriesMouseMove, this));
            chart.seriesMouseEnter = $.ig.Delegate.prototype.combine(chart.seriesMouseEnter, jQuery.proxy(this._fireChart_seriesMouseEnter, this));
            chart.seriesMouseLeave = $.ig.Delegate.prototype.combine(chart.seriesMouseLeave, jQuery.proxy(this._fireChart_seriesMouseLeave, this));
            chart.windowRectChanged = $.ig.Delegate.prototype.combine(chart.windowRectChanged, jQuery.proxy(this._fireChart_windowRectChanged, this));
            chart.actualWindowRectChanged = $.ig.Delegate.prototype.combine(chart.actualWindowRectChanged, jQuery.proxy(this._fireChart_actualWindowRectChanged, this));
            chart.gridAreaRectChanged = $.ig.Delegate.prototype.combine(chart.gridAreaRectChanged, jQuery.proxy(this._fireChart_gridAreaRectChanged, this));
            chart.refreshCompleted = $.ig.Delegate.prototype.combine(chart.refreshCompleted, jQuery.proxy(this._fireChart_refreshCompleted, this));
            chart.axisRangeChanged = $.ig.Delegate.prototype.combine(chart.axisRangeChanged, jQuery.proxy(this._fireChart_axisRangeChanged, this));
        },
        _getChartEvt: function (evtArgs) {
            var e = {}, seriesOpt = this.widget._seriesOpt ? this.widget._seriesOpt[evtArgs.series().name()] : this.widget.options, pos, widget = this._getWidgetName(), intSeries = null;

            e[widget] = this.widget.options;
            e.series = seriesOpt;
            e.item = evtArgs.item();

            if (evtArgs.series && evtArgs.series() !== null) {
                intSeries = evtArgs.series();
            }
            if (intSeries !== null && intSeries.hostedSeries && intSeries.hostedSeries() !== null) {
                intSeries = intSeries.hostedSeries();
            }

            if (evtArgs.actualItemBrush && evtArgs.actualItemBrush() !== null) {
                e.actualItemBrush = evtArgs.actualItemBrush().fill();
            } else if (intSeries !== null && intSeries.actualMarkerBrush && intSeries.actualMarkerBrush() !== null) {
                e.actualItemBrush = intSeries.actualMarkerBrush().fill();
            }
            if (intSeries !== null && intSeries.actualBrush && intSeries.actualBrush() !== null) {
                e.actualSeriesBrush = intSeries.actualBrush().fill();
            }

            if (evtArgs.originalEvent && evtArgs.originalEvent() !== null && evtArgs.originalEvent().position && evtArgs.originalEvent().position() !== null) {
                pos = evtArgs.originalEvent().position();
                e.positionX = pos.__x;
                e.positionY = pos.__y;
            }
            return e;
        },
        _fireChart_seriesCursorMouseMove: function (sender, evtArgs) {
            var e = this._getChartEvt(evtArgs);
            this.widget._trigger("seriesCursorMouseMove", null, e);
        },
        _fireChart_seriesMouseLeftButtonDown: function (sender, evtArgs) {
            var e = this._getChartEvt(evtArgs);
            this.widget._trigger("seriesMouseLeftButtonDown", null, e);
        },
        _fireChart_seriesMouseLeftButtonUp: function (sender, evtArgs) {
            var e = this._getChartEvt(evtArgs);
            this.widget._trigger("seriesMouseLeftButtonUp", null, e);
        },
        _fireChart_seriesMouseMove: function (sender, evtArgs) {
            var e = this._getChartEvt(evtArgs);
            this.widget._trigger("seriesMouseMove", null, e);
        },
        _fireChart_seriesMouseEnter: function (sender, evtArgs) {
            var e = this._getChartEvt(evtArgs);
            this.widget._trigger("seriesMouseEnter", null, e);
        },
        _fireChart_seriesMouseLeave: function (sender, evtArgs) {
            var e = this._getChartEvt(evtArgs);
            this.widget._trigger("seriesMouseLeave", null, e);
        },
        _fireChart_windowRectChanged: function (sender, evtArgs) {
            var e = {}, oldRect = evtArgs.oldRect(), newRect = evtArgs.newRect(), widget = this._getWidgetName();
            if (oldRect) {
                e.oldTop = oldRect.top();
                e.oldLeft = oldRect.left();
                e.oldWidth = oldRect.width();
                e.oldHeight = oldRect.height();
            }

            e.newTop = newRect.top();
            e.newLeft = newRect.left();
            e.newWidth = newRect.width();
            e.newHeight = newRect.height();
            e[widget] = this.widget.options;

            this.widget.options.windowRect = {
                top: e.newTop,
                left: e.newLeft,
                width: e.newWidth,
                height: e.newHeight
            };

            this.widget._trigger("windowRectChanged", null, e);
        },
        _fireChart_actualWindowRectChanged: function (sender, evtArgs) {
            var e = {}, oldRect = evtArgs.oldRect(), newRect = evtArgs.newRect(), widget = this._getWidgetName();
            if (oldRect) {
                e.oldTop = oldRect.top();
                e.oldLeft = oldRect.left();
                e.oldWidth = oldRect.width();
                e.oldHeight = oldRect.height();
            }

            e.newTop = newRect.top();
            e.newLeft = newRect.left();
            e.newWidth = newRect.width();
            e.newHeight = newRect.height();
            e[widget] = this.widget.options;

            this.widget.options.actualWindowRect = {
                top: e.newTop,
                left: e.newLeft,
                width: e.newWidth,
                height: e.newHeight
            };

            this.widget._trigger("actualWindowRectChanged", null, e);
        },
        _fireChart_gridAreaRectChanged: function (sender, evtArgs) {
            var e = {}, oldRect = evtArgs.oldRect(), newRect = evtArgs.newRect(), widget = this._getWidgetName();
            if (oldRect) {
                e.oldTop = oldRect.top();
                e.oldLeft = oldRect.left();
                e.oldWidth = oldRect.width();
                e.oldHeight = oldRect.height();
            }

            e.newTop = newRect.top();
            e.newLeft = newRect.left();
            e.newWidth = newRect.width();
            e.newHeight = newRect.height();
            e[widget] = this.widget.options;

            this.widget.options.gridAreaRect = {
                top: e.newTop,
                left: e.newLeft,
                width: e.newWidth,
                height: e.newHeight
            };

            this.widget._trigger("gridAreaRectChanged", null, e);
        },
        _fireChart_refreshCompleted: function (sender, evtArgs) {
            var e = {}, widget = this._getWidgetName();
            e[widget] = this.widget.options;

            this.widget._trigger("refreshCompleted", null, e);
        },
        _fireChart_axisRangeChanged: function (sender, evtArgs) {
            var e = {};
            e.chart = this.widget.options;
            e.axis = this.widget._axisOpt[evtArgs.axis().name()];
            e.oldMinimumValue = evtArgs.oldMinimumValue();
            e.oldMaximumValue = evtArgs.oldMaximumValue();
            e.newMinimumValue = evtArgs.minimumValue();
            e.newMaximumValue = evtArgs.maximumValue();

            this.widget._trigger("axisRangeChanged", null, e);
        },
        _fireToolTip_updateToolTip: function (args) {
            var e = {}, noCancel, template;
            e = this._getChartEvt(args);
            e.tempId = (this.widget._seriesOpt) ? e.series.name : this.widget.id();
            e.element = null;
            if (e.series !== null) {
                e.element = this.widget._tooltip[e.tempId];
            }

            noCancel = this.widget._trigger(this.widget.events.tooltipShowing, null, e);

            if (e === null) {
                noCancel = false;
            }
            if (noCancel) {
                template = this.widget._tooltipTemplate;
                if (e.series !== null && this.widget._tooltipTemplates[e.tempId] !== undefined) {
                    template = this.widget._tooltipTemplates[e.tempId];
                }

                if (template) {
                    this.widget._tooltip[e.tempId].children().remove();
                    if (e.item === null) {
                        noCancel = false;
                    }

                    if (noCancel) {
                        this.widget._tooltip[e.tempId].html($.ig.tmpl(template, e));
                    }
                }
                if (args.hideOthers) {
                    $.each(this.widget._tooltip, function (i, tip) {
                        tip.hide();
                    });
                }

                if (noCancel) {
                    this.widget._tooltip[e.tempId].show();
                    this.widget._trigger(this.widget.events.tooltipShown, null, e);
                }
            }
        },
        _fireToolTip_hideToolTip: function (args) {
            var e = {}, noCancel;
            e = (this.widget._seriesOpt) ? this._getChartEvt(args) : args;
            e.tempId = (this.widget._seriesOpt) ? e.series.name : this.widget.id();
            e.element = null;
            if (e.series !== null) {
                e.element = this.widget._tooltip[e.tempId];
            }

            noCancel = this.widget._trigger(this.widget.events.tooltipHiding, null, e);
            if (noCancel) {
                $.each(this.widget._tooltip, function (i, tip) {
                    tip.hide();
                });
                this.widget._trigger(this.widget.events.tooltipHidden, null, e);
            }
        },
        _destroy: function (widget) {
            widget._axes = null;
            widget._series = null;
            widget._axisOpt = null;
            widget._seriesOpt = null;
            widget._tooltip = null;
            widget._tooltipTemplates = null;
            widget.dataSources = null;
        }
    });

    $.ig.SimpleTextMarkerTemplate = $.ig.TextMarkerTemplate || Class.extend({
        requireThis: true,

        settings: {
            padding: 5,
            getText: null,
            backgroundColor: "rgba(255,255,255,.6)",
            borderColor: "rgba(20, 20, 20, .6)",
            borderThickness: 1,
            textColor: "black",
            font: null
        },

        init: function (options) {
            if (options !== undefined) {
                this.settings = $.extend(true, {}, $.ig.SimpleTextMarkerTemplate.prototype.settings, options);
            }
            return this;
        },

        getText: function (item, textDelegate) {
            if (textDelegate === null) {
                return "";
            }

            return textDelegate(item);
        },

        measure: function (measureInfo) {
            var s = this.settings, data, text, cont = measureInfo.context, height, width;

            if (s.font !== null) {
                cont.font = s.font;
            }
            if (s.textColor !== null) {
                cont.fillStyle = s.textColor;
            }

            data = measureInfo.data;

            text = "null";
            if (data.item() !== null) {
                text = this.getText(data.item(), s.getText);
            }
            height = cont.measureText("M").width;
            width = cont.measureText(text).width;
            measureInfo.width = width + s.padding * 2.0;
            measureInfo.height = height + s.padding * 2.0;
        },

        render: function (renderInfo) {
            var s = this.settings, ctx = renderInfo.context, data, text, halfWidth, halfHeight, x, y;

            if (renderInfo.isHitTestRender) {
                ctx.globalAlpha = 1;
                ctx.fillStyle = renderInfo.data.actualItemBrush().fill();
            } else {
                ctx.fillStyle = s.backgroundColor;
                ctx.strokeStyle = s.borderColor;
                ctx.lineWidth = s.borderThickness;
            }

            data = renderInfo.data;
            text = this.getText(data.item(), s.getText);

            halfWidth = renderInfo.availableWidth / 2.0;
            halfHeight = renderInfo.availableHeight / 2.0;
            x = renderInfo.xPosition - halfWidth;
            y = renderInfo.yPosition - halfHeight;

            if (renderInfo.isHitTestRender) {
                ctx.fillRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);
            } else {
                ctx.fillRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);
                ctx.strokeRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);

                ctx.fillStyle = s.textColor;
                ctx.textBaseline = "top";
                ctx.fillText(text, x + s.padding, y + s.padding);
            }
        }

    });
}(jQuery));



