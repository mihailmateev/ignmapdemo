/*!
 * Infragistics.Web.ClientUI Chart 12.2.20122.1021
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
 * infragistics.dv.core.js
 * infragistics.chart_piechart.js
 * infragistics.chart_categorychart.js
 * infragistics.chart_financialchart.js
 * infragistics.chart_polarchart.js
 * infragistics.chart_radialchart.js
 * infragistics.chart_rangecategorychart.js
 * infragistics.chart_scatterchart.js
 * infragistics.datasource.js
 * infragistics.dvcommonwidget.js
 */

/*global jQuery */
if (typeof (jQuery) !== "function") {
	throw new Error("jQuery is undefined");
}

(function ($) {

    // igChart definition
	$.widget('ui.igDataChart', {
        options: {
            /* type="string" The channel name to use to sync this chart with other charts. */
            syncChannel: null,
            /* type="bool" Whether the chart should be synchronized vertically */
            synchronizeVertically: true,
            /* type="bool" Whether the chart should be synchronized horizontally */
            syncrhonizeHorizontally: false,
			/* type="object"
			Gets or sets the cross hair point (in world coordinates)
			Either or both of the crosshair point's X and Y may be set to double.NaN, in which
			case the relevant crosshair line is hidden.
			*/
			crosshairPoint: {
				/* type="number" The x coordinate. */
				x: 0,
				/* type="number" The y coordinate. */
				y: 0
			},
			/* type="object"
			A rectangle representing the portion of the chart currently in view.
			A rectangle at X=0, Y=0 with a Height and Width of 1 implies the entire plotting area is in view.  A Height and Width of .5 would imply that the view is halfway zoomed in.
			The provided object should have numeric properties called left, top, width and height.
			*/
			windowRect: null,
			/* type="bool"
			Gets or sets the current Chart's horizontal zoomability.
			*/
			horizontalZoomable: false,
			/* type="bool"
			Gets or sets the current Chart's vertical zoomability.
			*/
			verticalZoomable: false,
			/* type="deferred|immediate"
			The response to user panning and zooming: whether to update the view immediately while the user action is happening, or to defer the update to after the user action is complete.  The user action will be an action such as a mouse drag which causes panning and/or zooming to occur.
			deferred type="string" Defer the view update until after the user action is complete.             
			immediate type="string" Update the view immediately while the user action is happening.             
			*/
			windowResponse: null,
			/* type="number"
			Sets or gets the minimum width that the window rect is allowed to reach before being clamped.
			Decrease this value if you want to allow for further zooming into the viewer.
			If this value is lowered too much it can cause graphical corruption due to floating point arithmetic inaccuracy.
			*/
			windowRectMinWidth: 0,
			/* type="visible|collapsed" The visibility of the OverviewPlusDetailPane.
			visible type="string" The overview pane should be visible.
			collapsed type="string" The overview pane should not be visible.
			*/
			overviewPlusDetailPaneVisibility: "collapsed",
			/* type="visible|collapsed" Gets or sets the current Chart's crosshair visibility override.
			visible type="string" Crosshair should be visible.
			collapsed type="string" Crosshair should not be visible.
			*/
			crosshairVisibility: "collapsed",
			/* type="string"
			Gets or sets the brush used as the background for the current Chart object's plot area.
			*/
			plotAreaBackground: null,
			/* type="none|dragZoom|dragPan" Gets or sets the DefaultInteraction property. The default interaction state defines the chart's response to mouse events.
			none type="string" User gesture will not change the state of the chart.
			dragZoom type="string" User gesture will start a drag rectangle to zoom the chart.
			dragPan type="string" User gesture will start a pan action to move the chart's window.
			*/
			defaultInteraction: "dragZoom",
			/* type="none|alt|control|shift|windows|apple" Gets or sets the current Chart's DragModifier property.
			none type="string" No modifier key is set.
			alt type="string" The modifier is set to alt key.
			control type="string" The modifier is set to control key.
			shift type="string" The modifier is set to shift key.
			*/
			dragModifier: "none",
			/* type="none|alt|control|shift|windows|apple" Gets or sets the current Chart's PanModifier property.
			none type="string" No modifier key is set.
			alt type="string" The modifier is set to alt key.
			control type="string" The modifier is set to control key.
			shift type="string" The modifier is set to shift key.
			*/
			panModifier: "shift",
			/* type="object"
			Gets or sets the preview rectangle.
			The preview rectangle may be set to Rect.Empty, in which case the visible preview
			strokePath is hidden.
			The provided object should have numeric properties called left, top, width and height.
			*/
			previewRect: null,
			/* type="number"
			A number between 0 and 1 determining the position of the horizontal scroll.
			This property is effectively a shortcut to the X position of the WindowRect property.
			*/
			windowPositionHorizontal: 0,
			/* type="number"
			A number between 0 and 1 determining the position of the vertical scroll.
			This property is effectively a shortcut to the Y position of the WindowRect property.
			*/
			windowPositionVertical: 0,
			/* type="number"
			A number between 0 and 1 determining the scale of the horizontal zoom.
			This property is effectively a shortcut to the Width of the WindowRect property.
			*/
			windowScaleHorizontal: 1,
			/* type="number"
			A number between 0 and 1 determining the scale of the vertical zoom.
			This property is effectively a shortcut to the Height of the WindowRect property.
			*/
			windowScaleVertical: 1,
			/* type="object"
			Gets or sets the template to use for circle markers on the chart.
			Defines the marker template used for
			series with a marker type of circle.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			circleMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for triangle markers on the chart.
			Defines the marker template used for
			series with a marker type of triangle.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			triangleMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for pyramid markers on the chart.
			Defines the marker template used for
			series with a marker type of pyramid.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			pyramidMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for square markers on the chart.
			Defines the marker template used for
			series with a marker type of square.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			squareMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for diamond markers on the chart.
			Defines the marker template used for
			series with a marker type of diamond.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			diamondMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for pentagon markers on the chart.
			Defines the marker template used for
			series with a marker type of pentagon.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			pentagonMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for hexagon markers on the chart.
			Defines the marker template used for
			series with a marker type of hexagon.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			hexagonMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for tetragram markers on the chart.
			Defines the marker template used for
			series with a marker type of tetragram.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			tetragramMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for pentragram markers on the chart.
			Defines the marker template used for
			series with a marker type of pentagram.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			pentagramMarkerTemplate: null,
			/* type="object"
			Gets or sets the template to use for hexagram markers on the chart.
			Defines the marker template used for
			series with a marker type of hexagram.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			hexagramMarkerTemplate: null,
			/* type="number"
			Sets or gets the top margin to use around the chart content in the canvas.
			*/
			topMargin: 0,
			/* type="number"
			Sets or gets the left margin to use around the chart content in the canvas.
			*/
			leftMargin: 0,
			/* type="number"
			Sets or gets the right margin to use around the chart content in the canvas.
			*/
			rightMargin: 0,
			/* type="number"
			Sets or gets the bottom margin to use around the chart content in the canvas.
			*/
			bottomMargin: 0,
			/* type="number"
			Sets or gets the automatic width to add when automatically adding margins to the chart.
			*/
			autoMarginWidth: 20,
			/* type="number"
			Sets or gets the automatic height to add when automatically adding margins to the chart.
			*/
			autoMarginHeight: 0,
			/* type="bool"
			Gets or sets whether to use a square aspect ratio for the chart. This is locked to true for polar and radial charts.
			*/
			isSquare: false,
			/* type="none|beforeSeries|behindSeries" Gets or sets the GridMode property.
			none type="string" No chart grid.
			beforeSeries type="string" Chart grid should be rendered before or in front of the data series.
			behindSeries type="string" Chart grid should be rendered behind or in back of the data series.
			*/
			gridMode: "behindSeries",
			/* type="object"
			Gets or sets the Brushes property.
			The brushes property defines the palette from which automatically assigned series brushes are selected.
			The value provided should be an array of css color strings. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
			*/
			brushes: null,
			/* type="object"
			Gets or sets the MarkerBrushes property.
			The marker brushes property defines the palette from which automatically assigned marker brushes are selected.
			The value provided should be an array of css color strings. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
			*/
			markerBrushes: null,
			/* type="object"
			Gets or sets the Outlines property.
			The outlines property defines the palette from which automatically assigned series outlines are selected.
			The value provided should be an array of css color strings. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
			*/
			outlines: null,
			/* type="object"
			Gets or sets the MarkerOutlines property.
			The marker outlines property defines the palette from which automatically assigned marker outlines are selected.
			The value provided should be an array of css color strings. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
			*/
			markerOutlines: null,
			/* type="number" The width of the chart. It can be set as a number in pixels, string (px) or percentage (%). */
			width: 500,
			/* type="number" The height of the chart. It can be set as a number in pixels, string (px) or percentage (%). */
			height: 500,
            /* type="object"
                To set both dimensions of the chart simultaneously an object with a width and height property can be provided
            */
            size: null,
			/* type="object" can be any valid data source accepted by $.ig.DataSource, or an instance of an $.ig.DataSource itself */
			dataSource: null,
			/* type="string" Specifies a remote URL accepted by $.ig.DataSource in order to request data from it */
			dataSourceUrl: null,
			/* type="string" Explicitly set data source type (such as "json"). Please refer to the documentation of $.ig.DataSource and its type property. */
			dataSourceType: null,
			/* type="string" see $.ig.DataSource. Specifies the name of the property in which data records are held if the response is wrapped. */
			responseDataKey: null,
             /* type="object" can be any valid options accepted by $.ig.ChartLegend, or an instance of an $.ig.ChartLegend itself. */
            legend: {
                /* type="string" the name of the element to turn into a legend. */
                element: null,
                /* type="item|legend" Type of the legend.
				    item type="string" Specify the legend as item legend. It displays a legend item for each pie in the igPieChart control.
				    legend type="string" Specify the legend as legend. It is supported by all types of series in the igDataChart control.
			    */
			    type: "legend",
			    /* type="string|number|null" The width of the legend.
                    string The widget width can be set in pixels (px) and percentage (%).
                    number The widget width can be set as a number.
                    null type="object" will stretch to fit data, if no other widths are defined.
                */
			    width: null,
			    /* type="string|number|null" The height of the legend.
                    string The widget height can be set in pixels (px) and percentage (%).
                    number The widget height can be set as a number.
                    null will stretch vertically to fit data, no other height are defined.
                */
			    height : null
            },
            /* type="array" an array of axis objects */
			axes: [{
				/* type="numericX|numericY|categoryX|categoryDateTimeX|categoryY|categoryAngle|numericAngle|numericRadius" Type of the axis.
					numericX type="string" Specify the axis as numeric X axis. Useful for displaying scatter, category and financial price series.
					numericY type="string" Specify the axis as numeric Y axis.Useful for displaying scatter, category and financial price series.
					categoryX type="string" Specify the axis as category X axis. Useful for displaying scatter, category and financial price series.
					categoryDateTimeX type="string" Specify the axis as category datetime X axis. Useful for displaying category and financial price series with date based data.
					categoryY type="string" Specify the axis as category Y axis. Useful for displaying scatter, category and financial price series.
					categoryAngle type="string" Specify the axis as category angle axis. Useful for displaying polar and radial categories. 
					numericAngle type="string" Specify the axis as numeric angle axis. Useful for displaying polar and radial series.
					numericRadius type="string" Specify the axis as numeric radius axis. Useful for displaying polar and radial series.
				*/
				type: null,
				/* type="string" the unique identifier of the axis. */
				name: null,
				/* type="object" can be any valid data source accepted by $.ig.DataSource, or an instance of an $.ig.DataSource itself */
				dataSource: null,
				/* type="string" Specifies a remote URL accepted by $.ig.DataSource in order to request data from it */
				dataSourceUrl: null,
				/* type="string" Explicitly set data source type (such as "json"). Please refer to the documentation of $.ig.DataSource and its type property. */
				dataSourceType: null,
				/* type="string" see $.ig.DataSource. Specifies the name of the property in which data records are held if the response is wrapped. */
				responseDataKey: null,
				/* type="bool" Set to true in order to have an existing axis removed from the chart, by name */
                remove: false,
                /* type="outsideTop|outsideBottom|outsideLeft|outsideRight|insideTop|insideBottom|insideLeft|insideRight" Specifies the location to display the axis labels for this axis.
					outsideTop type="string" The labels should have an outside top position.
					outsideBottom type="string" The labels should have an outside bottom position.
					outsideLeft type="string" The labels should have an outside left position.
					outsideRight type="string" The labels should have an outside right position.
					insideTop type="string" The labels should have an insid top position.
					insideBottom type="string" The labels should have an inside bottom position.
					insideLeft type="string" The labels should have an inside left position.
					insideRight type="string" The labels should have an inside right position. */
                labelLocation: null,
                /* type="visible|collapsed" Specifies whether the labels are visible.
					visible type="string" The labels should be visisble for this axis.
					collapsed type="string" The labels should not be visible for this axis. */
                labelVisibility: "visible",
                /* type="number" Specifies the extent of the area dedicated to the labels for this axis. If unspecified, this value is auto-calculated. */
                labelExtent: null,
                /*type="number" Specifies the angle that labels on the axis should be rotated */
                labelAngle: 0,
                /*type="string" Overrides the style of the text used for the axis labels. */
                labelTextStyle: null,
                /*type="string" Overrides the color of the text used for the axis labels. */
                labelTextColor: null,
				/* type="object"
				Sets or gets a function which takes an object that produces a formatted label for displaying in the chart.
				*/
				formatLabel: null,
				/* type="string"
				Gets or sets the Stroke property.
				*/
				stroke: null,
				/* type="number"
				Gets or sets the StrokeThickness property.
				*/
				strokeThickness: 1,
				/* type="string"
				Gets or sets the Strip property.
				*/
				strip: null,
				/* type="string"
				Gets or sets the MajorStroke property.
				*/
				majorStroke: null,
				/* type="number"
				Gets or sets the MajorStrokeThickness property.
				*/
				majorStrokeThickness: 1,
				/* type="string"
				Gets or sets the MinorStroke property.
				*/
				minorStroke: null,
				/* type="number"
				Gets or sets the MinorStrokeThickness property.
				*/
				minorStrokeThickness: 1,
				/* type="bool"
				Gets or sets the IsInverted property.
				*/
				isInverted: false,
				/* type="string"
				Gets or sets the CrossingAxis property.
				*/
				crossingAxis: null,
				/* type="object"
				Gets or sets the CrossingValue property.
				*/
				crossingValue: null,
				/* type="object"
				Gets or gets the coercion methods to use when loading data from data sources.
				Should be specified before setting any member paths, if being used. Setting it later 
				will not cause data to be reimported into the chart.
				*/
				coercionMethods: null,
				/* type="object"
				Gets or sets the axis label format string.
				*/
				label: null,
				/* type="number"
				Gets or sets the amount of space between adjacent categories for the current axis object.
				The gap is silently clamped to the range [0, 1] when used.
				*/
				gap: 0,
				/* type="number"
				Gets or sets the amount of overlap between adjacent categories for the current axis object.
				The overlap is silently clamped to the range [-1, 1] when used.
				*/
				overlap: 0,
				/* type="number"
				Indicates the angle in degress that the chart's 0th angle should be offset.
				*/
				startAngleOffset: 0,
				/* type="number"
				Gets or sets the frequency of displayed labels.
				The set value is a factor that determines which labels will be hidden. For example, an interval of 2 will display every other label.
				*/
				interval: 0,
				/* type="continuous|discrete" Gets or sets the axis display type. Continuous display type divides the axis into even intervals, where labels will not necessarily be aligned with data points. Discrete display type will not use a constant interval, but will align each label with its data point.
				continuous type="string" Points occur at even intervals, even where data is not present at a given point.             
				discrete type="string" Points occur when data is present, possibly at uneven intervals.             
				*/
				displayType: null,
				/* type="number"
				Gets or sets the axis MinimumValue.
				*/
				minimumValue: 0,
				/* type="number"
				Gets or sets the axis MaximumValue.
				*/
				maximumValue: 0,
				/* type="string"
				Gets or sets the DateTime mapping property for the CategoryDateTimeXAxis.
				*/
				dateTimeMemberPath: null,
				/* type="number"
				Gets or sets the ReferenceValue property.
				*/
				referenceValue: 0,
				/* type="bool"
				Gets or sets the IsLogarithmic property.
				*/
				isLogarithmic: false,
				/* type="number"
				Gets or sets the LogarithmBase property.
				*/
				logarithmBase: 10,
				/* type="number"
				Defines the percentage of the maximum radius extent to use as the maximum radius. Should be 
				a value between 0.0 and 1.0.
				*/
				radiusExtentScale: 0.75,
				/* type="number"
				Defines the percentage of the maximum radius extent to leave blank at the center of the chart. Should be 
				a value between 0.0 and 1.0.
				*/
				innerRadiusExtentScale: 0
			}],
			/* type="array" an array of series objects */
			series: [{
				/* type="area|bar|column|line|rangeArea|rangeColumn|splineArea|spline|stepArea|stepLine|waterfall|financial|typicalPriceIndicator|polarArea|polarLine|polarScatter|radialColumn|radialLine|radialPie|scatter|scatterLine|bubble|absoluteVolumeOscillatorIndicator|averageTrueRangeIndicator|accumulationDistributionIndicator|averageDirectionalIndexIndicator" Type of the series.
					area type="string" Specify the series as Area series.
					bar type="string" Specify the series as Bar series.
					column type="string" Specify the series as Column series.
					line type="string" Specify the series as Line series.
					rangeArea type="string" Specify the series as Range Area series.
					rangeColumn type="string" Specify the series as Range Column series.
					splineArea type="string" Specify the series as Spline Area series.
					spline type="string" Specify the series as Spline series.
					stepArea type="string" Specify the series as Step Area series.
					stepLine type="string" Specify the series as Step Line series.
					waterfall type="string" Specify the series as Waterfall series.
					financial type="string" Specify the series as Financial series.
					typicalPriceIndicator type="string" Specify the series as Typical Price Indicator series.
					polarArea type="string" Specify the series as Polar Area series.
					polarLine type="string" Specify the series as Polar Line series.
					polarScatter type="string" Specify the series as Polar Scatter series.
					radialColumn type="string" Specify the series as Radial Column series.
					radialLine type="string" Specify the series as Radial Line series.
					radialPie type="string" Specify the series as Radial Pie series.
					scatter type="string" Specify the series as Scatter series.
					scatterLine type="string" Specify the series as Scatter Line series.
					bubble type="string" Specify the series as Bubble series.
					absoluteVolumeOscillatorIndicator type="string" Specify the series as Absolute Volume Oscillator Indicator series.
					averageTrueRangeIndicator type="string" Specify the series as Average True Range Indicator series.
					accumulationDistributionIndicator type="string" Specify the series as Accumulation Distribution Indicator series
					averageDirectionalIndexIndicator type="string" Specify the series as Average Directional Index Indicator series.
					bollingerBandWidthIndicator type="string" Specify the series as Bollinger Band Width Indicator series.
					chaikinOscillatorIndicator type="string" Specify the series as Chaikin Oscillator Indicator series.
					chaikinVolatilityIndicator type="string" Specify the series as Chaikin Volitility Indicator series.
					commodityChannelIndexIndicator type="string" Specify the series as Commodity Channel Index Indicator series.
					detrendedPriceOscillatorIndicator type="string" Specify the series as Detrended Price Oscillator Indicator series.
					easeOfMovementIndicator type="string" Specify the series as Ease Of Movement Indicator series.
					fastStochasticOscillatorIndicator type="string" Specify the series as Fast Stochastic Oscillator Indicator series.
					forceIndexIndicator type="string" Specify the series as Force Index Indicator series.
					fullStochasticOscillatorIndicator type="string" Specify the series as Full Stochastic Oscillator Indicator series.
					marketFacilitationIndexIndicator type="string" Specify the series as Market Facilitation Index Indicator series.
					massIndexIndicator type="string" Specify the series as Mass Index Indicator series.
					medianPriceIndicator type="string" Specify the series as Median Price Indicator series.
					moneyFlowIndexIndicator type="string" Specify the series as Money Flow Index Indicator series.
					movingAverageConvergenceDivergenceIndicator type="string" Specify the series as Moving Average Convergence Divergence Indicator series.
					negativeVolumeIndexIndicator type="string" Specify the series as Negative Volume Index Indicator series.
					onBalanceVolumeIndicator type="string" Specify the series as On Balance Volume Indicator series.
					percentagePriceOscillatorIndicator type="string" Specify the series as Percentage Price Oscillator Indicator series.
					percentageVolumeOscillatorIndicator type="string" Specify the series as Percentage Volume Oscillator Indicator series.
					positiveVolumeIndexIndicator type="string" Specify the series as Positive Volume Index Indicator series.
					priceVolumeTrendIndictor type="string" Specify the series as Price Volume Trend Indictor series.
					rateOfChangeAndMomentumIndicator type="string" Specify the series as Rate Of Change And Momentum Indicator series.
					relativeStrengthIndexIndicator type="string" Specify the series as Relative Strength Index Indicator series.
					slowStochasticOscillatorIndicator type="string" Specify the series as Slow Stochastic Oscillator Indicator series.
					standardDeviationIndicator type="string" Specify the series as Standard Deviation Indicator series.
					stochRSIIndicator type="string" Specify the series as Stoch RSI Indicator series.
					trixIndicator type="string" Specify the series as Trix Indicator series.
					ultimateOscillatorIndicator type="string" Specify the series as Ultimate Oscillator Indicator series.
					weightedCloseIndicator type="string" Specify the series as Weighted Close Indicator series.
					williamsPercentRIndicator type="string" Specify the series as Williams Percent R Indicator series.
					bollingerBandsOverlay type="string" Specify the series as Bollinger Bands Overlay series.
					priceChannelOverlay type="string" Specify the series as Price Channel Overlay series.
					customIndicator type="string" Specify the series as Custom Indicator series.
				*/
				type: null,
				/* type="string" the unique identifier of the series. */
				name: null,
				/* type="object" can be any valid data source accepted by $.ig.DataSource, or an instance of an $.ig.DataSource itself */
				dataSource: null,
				/* type="string" Specifies a remote URL accepted by $.ig.DataSource in order to request data from it */
				dataSourceUrl: null,
				/* type="string" Explicitly set data source type (such as "json"). Please refer to the documentation of $.ig.DataSource and its type property. */
				dataSourceType: null,
				/* type="string" see $.ig.DataSource. Specifies the name of the property in which data records are held if the response is wrapped. */
				responseDataKey: null,
                /* type="bool" Set to true in order to have an existing series removed from the chart, by name */
                remove: false,
				/* type="bool" Whether the chart should render a tooltip. */
				showTooltip: false,
				/* type="string" The name of template or the template itself that chart tooltip will use to render. */
				tooltipTemplate: null,
                 /* type="object" can be any valid options accepted by $.ig.ChartLegend, or an instance of an $.ig.ChartLegend itself. */
                legend: {
                    /* type="string" the name of the element to turn into a legend. */
                    element: null,
                    /* type="item|legend" Type of the legend.
				        item type="string" Specify the legend as item legend. It displays a legend item for each pie in the igPieChart control.
				        legend type="string" Specify the legend as legend. It is supported by all types of series in the igDataChart control.
			        */
			        type: "legend",
			        /* type="string|number|null" The width of the legend.
                        string The widget width can be set in pixels (px) and percentage (%).
                        number The widget width can be set as a number
                        null type="object" will stretch to fit data, if no other widths are defined
                    */
			        width: null,
			        /* type="string|number|null" The height of the legend.
                        string The widget height can be set in pixels (px) and percentage (%).
                        number The widget height can be set as a number
                        null will stretch vertically to fit data, no other height are defined
                    */
			        height : null
                },
				/* type="visible|collapsed" Gets or sets the legend item visibility for the current series object.
				visible type="string" The legend item should be visible.
				collapsed type="string" The legend item should not be visible.
				*/
				legendItemVisibility: "visible",
				/* type="object"
				Gets or sets the LegendItemBadgeTemplate property.
				The legend item badge is created according to the LegendItemBadgeTemplate on-demand by 
				the series object itself.
				The provided object should have properties called render and optionally measure.
				These are functions which will be called that will be called to handle the user specified custom rendering.
				measure will be passed an object that looks like this:
				{
					context: [either a DOM element or a CanvasContext2D depending on the particular template scenario],
					width: [if value is present, specifies the available width, user may set to desired width for content],
					height: [if value is present, specifies the available height, user may set to desired height for content],
					isConstant: [user should set to true if desired with and height will always be the same for this template],
					data: [if present, represents the contextual data for this template]
				}
				render will be passed an object that looks like this:
				{
					context: [either a DOM element or a CanvasContext2D depending on the particular template scenario],
					xPosition: [if present, specifies the x position at which to render the content],
					yPosition: [if present, specifies the y position at which to render the content],
					availableWidth: [if present, specifies the available width in which to render the content],
					availableHeight: [if present, specifies the available height in which to render the content],
					data: [if present, specifies the data that is in context for this content],
					isHitTestRender: [if true, indicates that this is a special render pass for hit testing, in which case the brushes from the data should be used]
				}
				*/
				legendItemBadgeTemplate: null,
				/* type="object"
				Gets or sets the LegendItemTemplate property.
				The legend item control content is created according to the LegendItemTemplate on-demand by 
				the series object itself.
				The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
				*/
				legendItemTemplate: null,
				/* type="object"
				Gets or sets the DiscreteLegendItemTemplate property.
				The legend item control content is created according to the DiscreteLegendItemTemplate on-demand by 
				the series object itself.
				The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
				*/
				discreteLegendItemTemplate: null,
				/* type="number"
				Gets or sets the duration of the current series's morph.
				*/
				transitionDuration: 0,
				/* type="number"
				Gets or sets the current series object's rendering resolution.
				*/
				resolution: 1,
				/* type="string"
				Gets or sets the Title property.
				The legend item control is created according to the Title on-demand by 
				the series object itself.
				*/
				title: null,
				/* type="string"
				Gets or sets the brush to use for the series.
				*/
				brush: null,
				/* type="string"
				Gets or sets the brush to use for the outline of the series.
				Some series types, such as LineSeries, do not display outlines.  Therefore, this property does not affect some charts.
				*/
				outline: null,
				/* type="number"
				Gets or sets the width of the current series object's line thickness.
				*/
				thickness: 0,
				/* type="object"
				Gets or gets the coercion methods to use when loading data from data sources.
				Should be specified before setting any member paths, if being used. Setting it later 
				will not cause data to be reimported into the chart.
				*/
				coercionMethods: null,
				/* type="unset|none|automatic|circle|triangle|pyramid|square|diamond|pentagon|hexagon|tetragram|pentagram|hexagram"
				Gets or sets the marker type for the current series object.
				If the MarkerTemplate property is set, the setting of the MarkerType property will be ignored.
				unset type="string" Marker hasn't been set.             
				none type="string" No markerItems.             
				automatic type="string" Automatic marker shape.             
				circle type="string" Circle marker shape.             
				triangle type="string" Flat-top triangle marker shape.             
				pyramid type="string" Flat-base triangle marker shape.             
				square type="string" Square marker shape.             
				diamond type="string" Diamond marker shape.             
				pentagon type="string" Pentagon marker shape.              
				hexagon type="string" Hexagon marker shape.              
				tetragram type="string" Four-pointed star marker shape.             
				pentagram type="string" Five-pointed star marker shape.             
				hexagram type="string" Six-pointed star marker shape.             
				*/
				markerType: "none",
				/* type="object"
				Gets or sets the MarkerTemplate for the current series object.
				The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
				*/
				markerTemplate: null,
				/* type="string"
				Gets or sets the brush that specifies how the current series object's marker interiors are painted.
				*/
				markerBrush: null,
				/* type="string"
				Gets or sets the brush that specifies how the current series object's marker outlines are painted.
				*/
				markerOutline: null,
				/* type="string"
				Gets or sets the effective x-axis for the current object.
				*/
				xAxis: null,
				/* type="string"
				Gets or sets the effective y-axis for the current object.
				*/
				yAxis: null,
				/* type="string"
				Gets or sets the value mapping property for the current series object.
				*/
				xMemberPath: null,
				/* type="string"
				Gets or sets the value mapping property for the current series object.
				*/
				yMemberPath: null,
				/* type="none|linearFit|quadraticFit|cubicFit|quarticFit|quinticFit|logarithmicFit|exponentialFit|powerLawFit|simpleAverage|exponentialAverage|modifiedAverage|cumulativeAverage|weightedAverage" Gets or sets the trend type for the current scatter series.
				none type="string" No trendline should display.
				linearFit type="string" Linear fit.
				quadraticFit type="string" Quadratic polynomial fit.
				cubicFit type="string" Cubic polynomial fit.
				quarticFit type="string" Quartic polynomial fit.
				quinticFit type="string" Quintic polynomial fit.
				logarithmicFit type="string" Logarithmic fit.
				exponentialFit type="string" Exponential fit.
				powerLawFit type="string" Powerlaw fit.
				simpleAverage type="string" Simple moving average.
				exponentialAverage type="string" Exponential moving average.
				modifiedAverage type="string" Modified moving average.
				cumulativeAverage type="string" Cumulative moving average.
				weightedAverage type="string" Weighted moving average.
				*/
				trendLineType: "none",
				/* type="string"
				Gets or sets the brush to use to draw the trend line.
				*/
				trendLineBrush: null,
				/* type="number"
				Gets or sets the thickness of the current scatter series object's trend line.
				*/
				trendLineThickness: 1.5,
				/* type="number"
				Gets or sets the moving average period for the current scatter series object.
				The typical, and initial, value for trend line period is 7.
				*/
				trendLinePeriod: 7,
				/* type="number"
				Gets or sets the Z-Index of the trend line.  Values greater than 1000 will result in the trend line being rendered in front of the series data.
				*/
				trendLineZIndex: 1001,
				/* type="number"
				Gets or sets the maximum number of markerItems displayed by the current series.
				If more than the specified number of markerItems are visible, the series will automatically
				choose a representative set.
				*/
				maximumMarkers: 400,
				/* type="linearInterpolate|dontPlot" Determines how unknown values will be plotted on the chart. Null and Double.NaN are two examples of unknown values.
				linearInterpolate type="string" Plot the unknown value as the midpoint between surrounding known values using linear interpolation.
				dontPlot type="string" Do not plot the unknown value on the chart.
				*/
				unknownValuePlotting: "dontPlot",
				/* type="string"
				Gets or sets the radius mapping property for the current series object.
				*/
				radiusMemberPath: null,
				/* type="object"
				Gets or sets the radius size scale for the bubbles.
				*/
				radiusScale: null,
				/* type="string"
				Gets or sets the Label mapping property for the current series object.
				*/
				labelMemberPath: null,
				/* type="string"
				Gets or sets the fill mapping property for the current series object.
				*/
				fillMemberPath: null,
				/* type="object"
				Gets or sets the brush scale for the marker brush.
				*/
				fillScale: null,
				/* type="string"
				Gets the effective angle axis for the current series object.
				*/
				angleAxis: null,
				/* type="string"
				Gets the effective value axis for the current series object.
				*/
				valueAxis: null,
				/* type="bool"
				Gets or sets whether to clip the series to the bounds.
				Setting this to true can effect performance.
				*/
				clipSeriesToBounds: null,
				/* type="string"
				Gets or sets the item path that provides the values for the current series.
				*/
				valueMemberPath: null,
				/* type="number"
				Gets or sets the x-radius of the ellipse that is used to round the corners of the column.
				*/
				radiusX: 2.0,
				/* type="number"
				Gets or sets the y-radius of the ellipse that is used to round the corners of the column.
				*/
				radiusY: 2.0,
				/* type="number"
				Gets or sets the x-radius of the ellipse that is used to round the corners of the column.
				*/
				angleMemberPath: null,
				/* type="string"
				Gets the effective radius axis for the current series object.
				*/
				radiusAxis: null,
				/* type="bool"
				Gets or sets whether Cartesian Interpolation should be used rather than Archimedian 
				spiral based interpolation.
				*/
				useCartesianInterpolation: true,
				/* type="string"
				Gets or sets the brush to use for negative portions of the series.
				*/
				negativeBrush: null,
				/* type="natural|clamped" Gets or sets the type of spline to be rendered.
				natural type="string" Calculates the spline using a natural spline calculation formula.        
				clamped type="string" Calculated the spline using a clamped spline calculation formula.        
				*/
				splineType: "natural",
				/* type="string"
				Gets or sets the value mapping property for the current series object.
				*/
				lowMemberPath: null,
				/* type="string"
				Gets or sets the value mapping property for the current series object.
				*/
				highMemberPath: null,
				/* type="string"
				Gets or sets the open mapping property for the current series object.
				*/
				openMemberPath: null,
				/* type="string"
				Gets or sets the close mapping property for the current series object.
				*/
				closeMemberPath: null,
				/* type="string"
				Gets or sets the volume mapping property for the current series object.
				*/
				volumeMemberPath: null,
				/* type="candlestick|OHLC" Gets or sets the display for the current FinancialIndicator object.
				candlestick type="string" Displays prices as a Japanese Candlestick.
				OHLC type="string" Displays prices as an OHLC bar.
				*/
				displayType: "candlestick",
				/* type="number"
				Gets or sets the number of values to hide at the beginning of the indicator.
				*/
				ignoreFirst: 0,
				/* type="number"
				Gets or sets the moving average period for the current AverageDirectionalIndexIndicator object.
				The typical, and initial, value for AverageDirectionalIndexIndicator periods is 14.
				*/
				period: 0,
				/* type="number"
				Gets or sets the short moving average period for the current AbsoluteVolumeOscillatorIndicator object.
				The typical, and initial, value for short AVO periods is 10.
				*/
				shortPeriod: 0,
				/* type="number"
				Gets or sets the short moving average period for the current AbsoluteVolumeOscillatorIndicator object.
				The typical, and initial, value for long AVO periods is 30.
				*/
				longPeriod: 0,
                /* type="none|omit|fade|omitAndShift|fadeAndShift" Gets or sets the MarkerCollisionAvoidance 
                none type="string" No collision avoidance is attempted.
                omit type="string" Markers that collide will be omitted.
                fade type="string" Markers that collide will be faded in opacity.
                omitAndShift type="string" Markers that collide may be shifted or omitted.
                omitAndFade type="string" Markers that collide may be shifted or faded.
                */
                markerCollisionAvoidance: "none",
				/* type="bool"
				Gets or sets the whether to use use brute force mode.
				*/
				useBruteForce: false,
				/* type="bool"
				Gets or sets the whether to progressively load the data into the chart.
				*/
				progressiveLoad: true,
				/* type="bool"
				Gets or sets the whether the chart reacts to mouse move events.
				*/
				mouseOverEnabled: false,
				/* type="bool"
				Gets or sets the whether to use squares when halting a render traversal rather than the shape of the coalesced area.
				*/
				useSquareCutoffStyle: false,
				/* type="number"
				Gets or sets the density value that maps to the minimum heat color.
				*/
				heatMinimum: 0,
				/* type="number"
				Gets or sets the value that maps to the maximum heat color.
				*/
				heatMaximum: 50
			}]
			
			
        },
		css: {
			/* Get or set the class applied on a div element. */
			chart: "ui-corner-all ui-widget-content ui-chart-container",
			/* Get or set the class applied on a div element, shown when the chart is opened in a non HTML5 compatible browser. */
			unsupportedBrowserClass: "ui-chart-non-html5-supported-message ui-helper-clearfix",
            /* Get or set the class applied to the tooltip div element. */
            tooltip: "ui-chart-tooltip ui-widget-content ui-corner-all"
		},
		events: {
			/* cancel="true" event fired when the mouse has hovered on a series and the tooltip is about to show 
			Function takes arguments evt and ui.
			Use ui.element to get reference to tooltip DOM element.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			*/
			tooltipShowing: "tooltipShowing",
			/* event fired after a tooltip is shown
			Function takes arguments evt and ui.
			Use ui.element to get reference to tooltip DOM element.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			*/
			tooltipShown: "tooltipShown",
			/* cancel="true" event fired when the mouse has left a series and the tooltip is about to hide
			Function takes arguments evt and ui.
			Use ui.element to get reference to tooltip DOM element.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			*/
			tooltipHiding: "tooltipHiding",
			/* event fired after a tooltip is hidden 
			Function takes arguments evt and ui.
			Use ui.element to get reference to tooltip DOM element.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			*/
			tooltipHidden: "tooltipHidden",
			/* event fired when the control is displayed on a non HTML5 compliant browser */
			browserNotSupported: "browserNotSupported",
			/* cancel="false"
			Occurs when the cursors are moved over a series in this chart.
			Function takes arguments evt and ui.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			Use ui.positionX to get mouse X position.
			Use ui.positionY to get mouse Y position.
			*/
			seriesCursorMouseMove: null,
			/* cancel="false"
			Occurs when the left mouse button is pressed while the mouse pointer is over an element of this chart.
			Function takes arguments evt and ui.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			Use ui.positionX to get mouse X position.
			Use ui.positionY to get mouse Y position.
			*/
			seriesMouseLeftButtonDown: null,
			/* cancel="false"
			Occurs when the left mouse button is released while the mouse pointer is over an element of this chart.
			Function takes arguments evt and ui.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			Use ui.positionX to get mouse X position.
			Use ui.positionY to get mouse Y position.
			*/
			seriesMouseLeftButtonUp: null,
			/* cancel="false"
			Occurs when the left mouse pointer moves while over an element of this chart.
			Function takes arguments evt and ui.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			Use ui.positionX to get mouse X position.
			Use ui.positionY to get mouse Y position.
			*/
			seriesMouseMove: null,
			/* cancel="false"
			Occurs when the left mouse pointer enters an element of this chart.
			Function takes arguments evt and ui.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			Use ui.positionX to get mouse X position.
			Use ui.positionY to get mouse Y position.
			*/
			seriesMouseEnter: null,
			/* cancel="false"
			Occurs when the left mouse pointer leaves an element of this chart.
			Function takes arguments evt and ui.
			Use ui.item to get reference to current series item object.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.actualItemBrush to get item brush.
			Use ui.actualSeriesBrush to get series brush.
			Use ui.positionX to get mouse X position.
			Use ui.positionY to get mouse Y position.
			*/
			seriesMouseLeave: null,
			/* cancel="false"
			Occurs just after the current Chart's window rectangle is changed.
			Function takes arguments evt and ui.
			Use ui.chart to get reference to chart object.
			Use ui.newHeight to get new height value.
			Use ui.newLeft to get new left value.
			Use ui.newTop to get new top value.
			Use ui.newWidth to get new top value.
			Use ui.oldHeight to get old height value.
			Use ui.oldLeft to get old left value.
			Use ui.oldTop to get old top value.
			Use ui.oldWidth to get old top value.
			*/
			windowRectChanged: null,
			/* cancel="false"
			Occurs just after the current Chart's grid area rectangle is changed.
			The grid area may change as the result of the Chart being resized, or
			of an axis being added or changing size, possibly in another Chart.
			Function takes arguments evt and ui.
			Use ui.chart to get reference to chart object.
			Use ui.newHeight to get new height value.
			Use ui.newLeft to get new left value.
			Use ui.newTop to get new top value.
			Use ui.newWidth to get new top value.
			Use ui.oldHeight to get old height value.
			Use ui.oldLeft to get old left value.
			Use ui.oldTop to get old top value.
			Use ui.oldWidth to get old top value.
			*/
			gridAreaRectChanged: null,
			/* cancel="false"
			Raised when the chart's processing for an update has completed.
			Function takes arguments evt and ui.
			Use ui.chart to get reference to chart object.
			*/
			refreshCompleted: null,
			/* cancel="false"
			Event fired when the range of and axis on the chart changes.
			Function takes arguments evt and ui.
			Use ui.axis to get reference to current chart axis object.
			Use ui.chart to get reference to chart object.
			Use ui.newMaximumValue to get new maximum value.
			Use ui.newMinimumValue to get new minimum value.
			Use ui.oldMaximumValue to get old maximum value.
			Use ui.oldMinimumValue to get old minimum value.
			*/
			axisRangeChanged: null,
			/* cancel="false"
			Handle this event in order to specify which columns the Typical price calculation is based on. 
			Function takes arguments evt and ui.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.count to get the number of positions that should be calculated from the start.
			Use ui.position to get the beginning position that should be calculated from.
			Use ui.supportingCalculations to get the supporting calculations to use in the calculation.
			Use ui.dataSource to get the data to use for the calculation.
			Use ui.basedOn to specify which columns changing will invalidate the series and cause it to be recalculated.
			*/
			typicalBasedOn: null,
			/* cancel="false"
			Event fired when the progressive loading state of the series has changed.
			Function takes arguments evt and ui.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			Use ui.currentStatus to get current status.
			*/
			progressiveLoadStatusChanged: null,
			/* cancel="false"
			Event fired when the mouse pointer is over an element of this series.
			Function takes arguments evt and ui.
			Use ui.chart to get reference to chart object.
			Use ui.series to get reference to current series object.
			*/
			scatterMouseOver: null
		},
        _createWidget: function (options, element) {
			this._fixCss();
			this.dvWidget = new $.ig.dvCommonWidget(this);
			this.dvWidget._createWidget(options, element, this);
        },
		_init: function () {

			//Once the widget instance is created, all other calls to the widget name where the first 
			//parameter is not a string will call the _init() method; if options are passed, the / 
			// setOption()  method will be called before the _init() method.
		},
		_create: function () {
			this._fixCss();
			this.dvWidget._create();
        },
		_fixCss: function () {
			if (this.css.chart.indexOf('{0}') > -1) {
				this.css.chart = this.css.chart.replace('{0}', this.options.theme);
				this.css.tooltip = this.css.tooltip.replace('{0}', this.options.theme);
			}
		},
		_setOption: function (key, value) {
			this.dvWidget._setOption(key, value);
		},
		widget: function () {
			/* Returns the element holding the chart. */
			return this.element;
		},
		id: function () {
			/*  returns the ID of parent element holding the chart.
				returnType="string" 
			*/
			return this.element[0].id;
		},
		exportImage: function (width, height) {
			/* Exports the chart to a PNG image.
                paramType="string|number" optional="true" The width of the image.
                paramType="string|number" optional="true" The height of the image.
                returnType="object" Returns a IMG DOM element. */
			return this.dvWidget._getImage(width, height, this);
		},
        destroy: function () {
			/* Destroys the widget. */
            if (this._chart) {
                this._chart.destroy();
                this._chart = null;
            }
            this.dvWidget._destroy(this);
            if (this._chartElement) {
                this._chartElement.remove();
                this._chartElement = null;
            }

            $.Widget.prototype.destroy.apply(this, arguments);
        },
        styleUpdated: function () {
            /* Notify the chart that styles it draws colors from may have been updated.
                returnType="object" Returns a reference to this igChart. */
            this._chart.styleUpdated();
            return this;
        },
        resetZoom: function () {
            /* Resets the zoom level of the chart to default.
                returnType="object" Returns a reference to this igChart. */
            this._chart.resetZoom();
            return this;
        },
		addItem: function (item, targetName) {
			/* adds a new item to the data source and notifies the chart.
				paramType="object" The item that we want to add to the data source. 
				paramType="string" The name of the series or axis bound to the data source. 
			*/
			var dataSourceId = targetName || this._containerSourceID;
			if (this.dataSources[dataSourceId]) {
				this.dataSources[dataSourceId].addRow(null, item, true);
			}
		},
		insertItem: function (item, index, targetName) {
			/* inserts a new item to the data source and notifies the chart.
				paramType="object" the new item that we want to insert in the data source. 
				paramType="number" The index in the data source where the new item will be inserted.
				paramType="string" The name of the series or axis bound to the data source. 
			*/
			var dataSourceId = targetName || this._containerSourceID;
			if (this.dataSources[dataSourceId]) {
				this.dataSources[dataSourceId].insertRow(null, item, index, true);
			}
		},
		removeItem: function (index, targetName) {
			/* deletes an item from the data source and notifies the chart.
				paramType="number" The index in the data source from where the item will be been removed.
				paramType="string" The name of the series or axis bound to the data source. 
			*/
			var dataSourceId = targetName || this._containerSourceID;
			if (this.dataSources[dataSourceId]) {
				this.dataSources[dataSourceId].deleteRow(index, true);
			}
		},
		setItem: function (index, item, targetName) {
			/* updates an item in the data source and notifies the chart.
				paramType="number" The index of the item in the data source that we want to change.
				paramType="object" The new item object that will be set in the data source.
				paramType="string" The name of the series or axis bound to the data source. 
			*/
			var dataSourceId = targetName || this._containerSourceID;
			if (this.dataSources[dataSourceId]) {
				this.dataSources[dataSourceId].updateRow(index, item, true);
			}
		},
        notifySetItem: function (dataSource, index, newItem, oldItem) {
            /* Notifies the chart that an item has been set in an associated data source.
                paramType="object" optional="false" The data source in which the change happened.
                paramType="number" optional="false" The index in the items source that has been changed.
                paramType="object" optional="false" the new item that has been set in the collection.
                paramType="object" optional="false" the old item that has been overwritten in the collection.
                returnType="object" Returns a reference to this chart. */
            this._chart.notifySetItem(dataSource, index, oldItem, newItem);
            return this;
        },
        notifyClearItems: function (dataSource) {
            /* Notifies the chart that the items have been cleared from an associated data source.
                It's not necessary to notify more than one target of a change if they share the same items source.
                paramType="object" optional="false" The data source in which the change happened.
                returnType="object" Returns a reference to this chart. */
            this._chart.notifyClearItems(dataSource);
            return this;
        },
        notifyInsertItem: function (dataSource, index, newItem) {
            /* Notifies the target axis or series that an item has been inserted at the specified index in its data source.
                It's not necessary to notify more than one target of a change if they share the same items source.
                paramType="object" optional="false" The data source in which the change happened.
                paramType="number" optional="false" The index in the items source where the new item has been inserted.
                paramType="object" optional="false" the new item that has been set in the collection.
                returnType="object" Returns a reference to this chart. */
            this._chart.notifyInsertItem(dataSource, index, newItem);
            return this;
        },
        notifyRemoveItem: function (dataSource, index, oldItem) {
            /* Notifies the target axis or series that an item has been removed from the specified index in its data source.
                It's not necessary to notify more than one target of a change if they share the same items source.
                paramType="object" optional="false" The data source in which the change happened.
                paramType="number" optional="false" The index in the items source from where the old item has been removed.
                paramType="object" optional="false" the old item that has been removed from the collection.
                returnType="object" Returns a reference to this chart. */
            this._chart.notifyRemoveItem(dataSource, index, oldItem);
            return this;
        },
        scrollIntoView: function (targetName, item) {
            /* Notifies the target axis or series that it should scroll the requested data item into view.
                paramType="string" optional="false" The name of the axis or series notify.
                paramType="object" optional="false" The data item to bring into view, if possible.
                returnType="object" Returns a reference to this chart. */
            var target = this.dvWidget._getNotifyTarget(targetName);
            if (target && target.scrollIntoView) {
                target.scrollIntoView(item);
            }
            return this;
        },
        scaleValue: function (targetName, unscaledValue) {
            /* Notifies the target axis that it should scale the requested value into chart space from axis space.
				For example you can use this method if you want to find where value 50 of the x axis stands scaled to chart's width.
                paramType="string" optional="false" The name of the axis to notify.
                paramType="number" optional="false" The value in axis space to translate into chart space.
                returnType="number" Returns the scaled value. */
            var target = this.dvWidget._getNotifyTarget(targetName);
            if (target && target.scaleValue) {
                return target.scaleValue(unscaledValue);
            }
            return 0.0;
        },
        unscaleValue: function (targetName, scaledValue) {
            /* Notifies the target axis that it should unscale the requested value into axis space from chart space.
				For example you can use this method if you want to find what is the value of x axis unscaled from 0 width of the chart.
                paramType="string" optional="false" The name of the axis to notify.
                paramType="number" optional="false" The value in chart space to translate into axis space.
                returnType="number" Returns the unscaled value. */
            var target = this.dvWidget._getNotifyTarget(targetName);
            if (target && target.unscaleValue) {
                return target.unscaleValue(scaledValue);
            }
            return 0.0;
        },
        flush: function () {
            /* Forces any pending deferred work to render on the chart before continuing */
            this._chart.flush();
        },
        exportVisualData: function () {
            /* exports visual data from the chart to aid in unit testing */
            return this._chart.exportVisualData();
        },
        getActualMinimumValue: function (targetName) {
            /* Gets the actual minimum value of the target numeric or date time axis */
            var target = this.dvWidget._getNotifyTarget(targetName);
            if (target && target.actualMinimumValue) {
                return target.actualMinimumValue();
            }
            return 0.0;
        },
        getActualMaximumValue: function (targetName) {
            /* Gets the actual maximum value of the target numeric or date time axis */
            var target = this.dvWidget._getNotifyTarget(targetName);
            if (target && target.actualMaximumValue) {
                return target.actualMaximumValue();
            }
            return 0.0;
        },
		print: function () {
			/* Creates a print preview page with the chart, hiding all other elements on the page. */
			this.dvWidget._print();
		},
		renderSeries: function (targetName, animate) {
            /* Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
				paramType="string" The name of the series to render.
				paramType="bool" Whether the change should be animated, if possible. */
            var target = this.dvWidget._getNotifyTarget(targetName);
            if (target && target.renderSeries) {
                return target.renderSeries(animate);
            }
            return this;
        },
        notifyContainerResized: function () {
			/* Notifies the chart that the container was resized */
            this._chart.notifyContainerResized();
        }
    });
	$.extend($.ui.igDataChart, {version: '12.2.20122.1021'});

	$.widget("ui.igPieChart", {
		options: {
			/* type="number" The width of the chart. It can be set as a number in pixels, string (px) or percentage (%). */
			width: 500,
			/* type="number" The height of the chart. It can be set as a number in pixels, string (px) or percentage (%). */
			height: 500,
			/* type="object" can be any valid data source accepted by $.ig.DataSource, or an instance of an $.ig.DataSource itself */
			dataSource: null,
			/* type="string" Specifies a remote URL accepted by $.ig.DataSource in order to request data from it */
			dataSourceUrl: null,
			/* type="string" Explicitly set data source type (such as "json"). Please refer to the documentation of $.ig.DataSource and its type property. */
			dataSourceType: null,
			/* type="string" see $.ig.DataSource. Specifies the name of the property in which data records are held if the response is wrapped. */
			responseDataKey: null,
			/* type="string"
			Gets or Sets the property name that contains the values.
			*/
			valueMemberPath: null,
			/* type="string"
			Gets or sets the property name that contains the labels.
			*/
			labelMemberPath: null,
			/* type="none|center|insideEnd|outsideEnd|bestFit"
			Gets or sets the position of chart labels.
			none type="string" No labels will be displayed.             
			center type="string" Labels will be displayed in the center.             
			insideEnd type="string" Labels will be displayed inside and by the edge of the container.             
			outsideEnd type="string" Labels will be displayed outside the container.             
			bestFit type="string" Labels will automatically decide their location.             
			*/
			labelsPosition: "center",
			/* type="visible|collapsed"
			Gets or sets whether the leader lines are visible.
			visible type="string" 
			collapsed type="string" 
			*/
			leaderLineVisibility: "visible",
			/* type="number"
			Gets or sets the threshold value that determines if slices are grouped into the Others slice.
			*/
			othersCategoryThreshold: 3,
			/* type="number|percent"
			Gets or sets whether to use numeric or percent-based threshold value.
			number type="string" Data value is compared directly to the value of OthersCategoryThreshold.             
			percent type="string" Data value is compared to OthersCategoryThreshold as a percentage of the total.             
			*/
			othersCategoryType: "percent",
			/* type="string"
			Gets or sets the label of the Others slice.
			*/
			othersCategoryText: "Others",
			/* type="number"
			Determines how much the exploded slice is offset from the center. Value between 0 and 1.
			*/
			explodedRadius: 0.2,
			/* type="number"
			Gets or sets the scaling factor of the chart's radius. Value between 0 and 1.
			*/
			radiusFactor: 0.9,
			/* type="bool"
			Gets or sets whether the slices can be selected.
			*/
			allowSliceSelection: null,
			/* type="bool"
			Gets or sets whether the slices can be exploded.
			*/
			allowSliceExplosion: null,
			/* type="array"
			Gets or sets the collection of exploded slice indices.
            Should be an array of integers that indicate the indexes of the slices to explode.
			*/
			explodedSlices: null,
			/* type="bool" Whether the chart should render a tooltip. */
			showTooltip: false,
			/* type="string" The name of template or the template itself that chart tooltip will use to render. */
			tooltipTemplate: null,
            /* type="object" can be any valid options accepted by $.ig.ChartLegend, or an instance of an $.ig.ChartLegend itself. */
            legend: {
                /* type="string" the name of the element to turn into a legend. */
                element: null,
                /* type="item|legend" Type of the legend.
			       item type="string" Specify the legend as item legend. It displays a legend item for each pie in the igPieChart control.
			       legend type="string" Specify the legend as legend. It is supported by all types of series in the igDataChart control.
			    */
			    type: "item",
				/* type="number" The width of the legend. It can be set as a number in pixels, string (px) or percentage (%). */
			    width: null,
				/* type="number" The height of the legend. It can be set as a number in pixels, string (px) or percentage (%). */
			    height: null
            },
			/* type="number"
			Gets or sets the pixel amount, by which the labels are offset from the edge of the slices.
			*/
			labelExtent: 10,
			/* type="number"
			Gets or sets the starting angle of the chart.
			The default zero value is equivalent to 3 o'clock.
			*/
			startAngle: 0,
			/* type="counterclockwise|clockwise"
			Gets or sets the rotational direction of the chart.
			counterclockwise type="string" 
			clockwise type="string" 
			*/
			sweepDirection: "clockwise",
			/* type="object"
			Gets or sets the style used when a slice is selected.
			*/
			selectedStyle: null,
			/* type="object"
			Gets or sets the Brushes property.
			The brushes property defines the palette from which automatically assigned slice brushes are selected.
			The value provided should be an array of css color strings. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
			*/
			brushes: null,
			/* type="object"
			Gets or sets the Outlines property.
			The Outlines property defines the palette from which automatically assigned slice outlines are selected.
			The value provided should be an array of css color strings. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
			*/
			outlines: null,
			/* type="object"
			Gets or sets the LegendItemTemplate property.
			The legend item control content is created according to the LegendItemTemplate on-demand by
			the chart object itself.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			legendItemTemplate: null,
			/* type="object"
			Gets or sets the LegendItemBadgeTemplate property.
			The legend item badge is created according to the LegendItemBadgeTemplate on-demand by
			the chart object itself.
			The provided object should have properties called render and optionally measure. See definition for option: legendItemBadgeTemplate 
			*/
			legendItemBadgeTemplate: null,
			/* type="string" Overrides the style used for text in the pie chart.
            */
            textStyle: null
			
			

		},
		css: {
			/* Get or set the class applied on a div element. */
			chart: "ui-corner-all ui-widget-content ui-chart-piechart-container",
			/* Get or set the class applied on a div element, shown when the chart is opened in a non HTML5 compatible browser. */
			unsupportedBrowserClass: "ui-chart-non-html5-supported-message ui-helper-clearfix",
            /* Get or set the class applied to the tooltip div element. */
            tooltip: "ui-chart-tooltip ui-widget-content ui-corner-all"
		},
		events: {
			/* cancel="true" event fired when the mouse has hovered on an element long enough to display a tooltip 
			Function takes arguments evt and ui.
			Use ui.element to get reference to tooltip DOM element.
			Use ui.item to get reference to current pie chart item.
			Use ui.chart to get reference to chart object.
			*/
			tooltipShowing: "tooltipShowing",
			/* event fired after a tooltip is shown 
			Function takes arguments evt and ui.
			Use ui.element to get reference to tooltip DOM element.
			Use ui.item to get reference to current pie chart item.
			Use ui.chart to get reference to chart object.
			*/
			tooltipShown: "tooltipShown",
			/* cancel="true" event fired when the mouse has left an element and the tooltip is about to hide 
			Function takes arguments evt and ui.
			Use ui.element to get reference to tooltip DOM element.
			Use ui.item to get reference to current pie chart item.
			Use ui.chart to get reference to chart object.
			*/
			tooltipHiding: "tooltipHiding",
			/* event fired after a tooltip is hidden
			Function takes arguments evt and ui.
			Use ui.element to get reference to tooltip DOM element.
			Use ui.item to get reference to current pie chart item.
			Use ui.chart to get reference to chart object.
			*/
			tooltipHidden: "tooltipHidden",
			/* event fired when the control is displayed on a non HTML5 compliant browser */
			browserNotSupported: "browserNotSupported",
			/* cancel="false"
			Raised when the slice is clicked.
			Function takes arguments evt and ui.
			Use ui.chart to get reference to chart object.
			Use ui.slice to get reference to slice object.
			Use ui.slice.item to get reference to current pie chart item.
			Use ui.slice.isExploded to get is the slice exploded.
			Use ui.slice.isSelected to get is the slice selected.
			*/
			sliceClick: null
		},
		_createWidget: function (options, element) {
			this._fixCss();
			this.dvWidget = new $.ig.dvCommonWidget(this);
			this.dvWidget._createWidget(options, element, this);
        },
		_create: function () {
			this._fixCss();
			this.dvWidget._create();
		},
		_fixCss: function () {
			if (this.css.chart.indexOf('{0}') > -1) {
				this.css.chart = this.css.chart.replace('{0}', this.options.theme);
				this.css.tooltip = this.css.tooltip.replace('{0}', this.options.theme);
			}
		},
		_setOption: function (key, value) {
			this.dvWidget._setOption(key, value);
		},
		addItem: function (item) {
			/* adds a new item to the data source and notifies the chart.
				paramType="object" the new item that will be added to the data source.  
			*/
			this.dataSources[this.id()].addRow(item, true);
		},
		insertItem: function (item, index) {
			/* inserts a new item to the data source and notifies the chart.
				paramType="object" the new item that will be inserted in the data source. 
				paramType="number" The index in the data source where the new item will be inserted.
			*/
			this.dataSources[this.id()].insertRow(null, item, index, true);
		},
		removeItem: function (index) {
			/* deletes an item from the data source and notifies the chart.
				paramType="number" The index in the data source from where the item will be been removed.
			*/
			this.dataSources[this.id()].deleteRow(index, true);
		},
		setItem: function (index, item) {
			/* updates an item in the data source and notifies the chart.
				paramType="number" optional="false" The index in the data source that we want to change.
				paramType="object" the new item that we want to set in the data source.
			*/
			this.dataSources[this.id()].updateRow(index, item, true);
		},
		exportImage: function (width, height) {
			/* Exports the chart to a PNG image.
                paramType="string|number" optional="true" The width of the image.
                paramType="string|number" optional="true" The height of the image.
                returnType="object" Returns a IMG DOM element. */
			return this.dvWidget._getImage(width, height, this);
		},
		destroy: function () {
			/* Destroys the widget. */
			if (this._chart) {
                this._chart.destroy();
                this._chart = null;
            }
            this.dvWidget._destroy(this);
            if (this._chartElement) {
                this._chartElement.remove();
                this._chartElement = null;
            }

            $.Widget.prototype.destroy.call(this);
			return this;
		},
		id: function () {
			/*  returns the ID of parent element holding the chart.
				returnType="string" 
			*/
			return this.element[0].id;
		},
		widget: function () {
			/* Returns the element holding the chart. */
			return this.element;
		},
		print: function () {
			/* Creates a print preview page with the chart, hiding all other elements on the page. */
			this.dvWidget._print();
		},
        notifyContainerResized: function () {
			/* Notifies the chart that the container was resized */
            this._chart.notifyContainerResized();
        }
	});
	$.extend($.ui.igPieChart, {version: '12.2.20122.1021'});

	/*
		igChartLegend is a widget based on jQuery UI that can be used to identify 
		the name of a series or its elements represented in chart plot area.
	*/
	$.widget("ui.igChartLegend", {
		options: {
			/* type="item|legend|scale" Type of the legend.
				item type="string" Specify the legend as item legend. It displays a legend item for each pie in the igPieChart control.
				legend type="string" Specify the legend as legend. It is supported by all types of series in the igDataChart control.
                scale type="string" Specify the legend as a scale legend. It displays a color/size scale for the bubble series.
			*/
			type: "legend",
			/* type="number" The width of the legend. It can be set as a number in pixels, string (px) or percentage (%). */
			width: null,
			/* type="number" The height of the legend. It can be set as a number in pixels, string (px) or percentage (%). */
			height: null
			
			
		},
		css: {
			/* Classes applied on the parent element. */
			legend: "ui-corner-all ui-widget-content ui-chart-legend",
			/* Class applied on the legend items table element. */
            legendItemsList: "ui-chart-legend-items-list",
			/* Class applied on the legend item tr element. */
            legendItem: "ui-chart-legend-item",
			/* Class applied on the legend item badge td element. */
            legendItemBadge: "ui-chart-legend-item-badge",
			/* Class applied on the legend item text td element. */
            legendItemText: "ui-chart-legend-item-text"
		},
		events: {
			/* cancel="false"
			Occurs when the left mouse button is pressed while the mouse pointer is over an element of this legend.
			Function takes arguments evt and ui.
			Use ui.legend to get reference to current legend object.
			Use ui.chart to get reference to chart owner object.
			Use ui.series to get reference to current series owner object.
			Use ui.actualItemBrush to get legend item brush.
			Use ui.actualSeriesBrush to get series owner brush.
			*/
			legendItemMouseLeftButtonDown: null,
			/* cancel="false"
			Occurs when the left mouse button is released while the mouse pointer is over an element of this legend.
			Function takes arguments evt and ui.
			Use ui.legend to get reference to current legend object.
			Use ui.chart to get reference to chart owner object.
			Use ui.series to get reference to current series owner object.
			Use ui.actualItemBrush to get legend item brush.
			Use ui.actualSeriesBrush to get series owner brush.
			*/
			legendItemMouseLeftButtonUp: null,
			/* cancel="false"
			Occurs when the left mouse pointer enters an element of this legend.
			Function takes arguments evt and ui.
			Use ui.legend to get reference to current legend object.
			Use ui.chart to get reference to chart owner object.
			Use ui.series to get reference to current series owner object.
			Use ui.actualItemBrush to get legend item brush.
			Use ui.actualSeriesBrush to get series owner brush.
			*/
			legendItemMouseEnter: null,
			/* cancel="false"
			Occurs when the left mouse pointer leaves an element of this legend.
			Function takes arguments evt and ui.
			Use ui.legend to get reference to current legend object.
			Use ui.chart to get reference to chart owner object.
			Use ui.series to get reference to current series owner object.
			Use ui.actualItemBrush to get legend item brush.
			Use ui.actualSeriesBrush to get series owner brush.
			*/
			legendItemMouseLeave: null
		},
		_create: function () {
			this._fixCss();
			switch (this.options.type) {
			case "item":
				this.legend = new $.ig.ItemLegend();
				break;
			case "legend":
				this.legend = new $.ig.Legend();
				break;
            case "scale":
                this.legend = new $.ig.ScaleLegend();
                break;
			}

			if (this.options.owner) {
				this._owner = this.options.owner;
				this.options.owner = this._owner.options;
			}
			this.legend.name(this.id());
            this.legend.legendItemsListStyle(this.css.legendItemsList);
            this.legend.legendItemStyle(this.css.legendItem);
            this.legend.legendItemBadgeStyle(this.css.legendItemBadge);
            this.legend.legendItemTextStyle(this.css.legendItemText);
			this.element.css("width", this.options.width);
			this.element.css("height", this.options.height);
			this.element.addClass(this.css.legend);
			this._bindLegendEvents(this.legend);
			this.legend.provideContainer(this.element);
		},
		_bindLegendEvents: function (legend) {
            legend.legendItemMouseLeftButtonDown = $.ig.Delegate.prototype.combine(legend.legendItemMouseLeftButtonDown, jQuery.proxy(this._fireLegend_ItemMouseLeftButtonDown, this));
			legend.legendItemMouseLeftButtonUp = $.ig.Delegate.prototype.combine(legend.legendItemMouseLeftButtonUp, jQuery.proxy(this._fireLegend_ItemMouseLeftButtonUp, this));
			legend.legendItemMouseEnter =  $.ig.Delegate.prototype.combine(legend.legendItemMouseEnter, jQuery.proxy(this._fireLegend_ItemMouseEnter, this));
			legend.legendItemMouseLeave =  $.ig.Delegate.prototype.combine(legend.legendItemMouseLeave, jQuery.proxy(this._fireLegend_ItemMouseLeave, this));
        },

		_getLegendEvt: function (evtArgs) {
			var e = {}, seriesOpt = this._owner._seriesOpt ? this._owner._seriesOpt[evtArgs.series().name()] : this._owner.options, widget = this._owner.dvWidget._getWidgetName();
			e[widget] = this._owner.options;
			e.legend = this.options;
            e.series = seriesOpt;
			if (evtArgs.legendItem && evtArgs.legendItem() !== null && evtArgs.legendItem().content && evtArgs.legendItem().content() !== null && evtArgs.legendItem().content().actualItemBrush && evtArgs.legendItem().content().actualItemBrush() !== null) {
				e.actualItemBrush = evtArgs.legendItem().content().actualItemBrush().fill();
			}
            if (evtArgs.series && evtArgs.series() !== null && evtArgs.series().actualBrush && evtArgs.series().actualBrush() !== null) {
                e.actualSeriesBrush = evtArgs.series().actualBrush().fill();
			}

			return e;
		},

		_fireLegend_ItemMouseLeftButtonDown: function (sender, evtArgs) {
			var e = this._getLegendEvt(evtArgs);
			this._trigger("legendItemMouseLeftButtonDown", null, e);
		},

		_fireLegend_ItemMouseLeftButtonUp: function (sender, evtArgs) {
			var e = this._getLegendEvt(evtArgs);
			this._trigger("legendItemMouseLeftButtonUp", null, e);
		},

		_fireLegend_ItemMouseEnter: function (sender, evtArgs) {
			var e = this._getLegendEvt(evtArgs);
			this._trigger("legendItemMouseEnter", null, e);
		},

		_fireLegend_ItemMouseLeave: function (sender, evtArgs) {
			var e = this._getLegendEvt(evtArgs);
			this._trigger("legendItemMouseLeave", null, e);
		},

		_fixCss: function () {
			if (this.css.legend.indexOf('{0}') > -1) {
				this.css.legend = this.css.legend.replace('{0}', this.options.theme);
			}
		},
		_getLegend: function () {
			return this.legend;
		},
		destroy: function () {
			var elements;
			$.Widget.prototype.destroy.call(this);
			/* Destroys the widget. */
			if (this.legend) {
                this.legend = null;
            }
            if (this.element) {
				this.element.removeClass(this.css.legend);
				if (this.options.width) {
					this.element.css('width', '');
				}
				if (this.options.height) {
					this.element.css('height', '');
				}
				if (this.element.children('table').length > 0) {
					elements = this.element.children('table').children('tr');
					$.each(elements, function (key, tr) {
						$(tr).unbind('mouseleave');
						$(tr).unbind('mouseup');
						$(tr).unbind('mousedown');
						$(tr).unbind('mousemove');
					});
				}
				this.element.empty();
            }
			return this;
		},
		widget: function () {
			/* Returns the element holding the legend. */
			return this.element;
		},
		id: function () {
			/*  returns the ID of the DOM element holding the legend.
				returnType="string" 
			*/
			return this.element[0].id;
		}
	});
	$.extend($.ui.igChartLegend, {version: '12.2.20122.1021'});
	/*MOBILEHERE*/
}(jQuery));