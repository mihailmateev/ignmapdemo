/*!
* Infragistics.Web.ClientUI infragistics.chart_radialchart.js 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*/



// Declare empty types
$.ig = $.ig || {};
$.ig.util.bulkDefine(["AbstractEnumerable", 
"AbstractEnumerator", 
"IEnumerable$1", 
"ICollection$1", 
"IList$1", 
"IArrayList", 
"List$1", 
"Collection$1", 
"IDictionary$2", 
"Dictionary$2", 
"GenericEnumerable$1", 
"IEnumerator$1", 
"GenericEnumerator$1", 
"INotifyCollectionChanged", 
"NotifyCollectionChangedEventHandler", 
"NotifyCollectionChangedEventArgs", 
"NotifyCollectionChangedAction", 
"KeyValuePair$2", 
"LinkedList$1", 
"LinkedListNode$1", 
"ObservableCollection$1", 
"Queue$1", 
"ReadOnlyCollection$1", 
"ReadOnlyObservableCollection$1", 
"NameValueCollection", 
"Stack$1", 
"IComparer$1", 
"Expression", 
"MemberExpression", 
"ParameterExpression", 
"LambdaExpression", 
"MethodCallExpression", 
"IOrderedEnumerable$1", 
"Queryable", 
"Enumerable", 
"SortedList$1", 
"IGrouping$2", 
"IArray", 
"DependencyObject", 
"Test", 
"IQueryable", 
"IQueryable$1", 
"IQueryProvider", 
"Activator", 
"AggregateException", 
"ArgumentException", 
"ArgumentNullException", 
"ArgumentOutOfRangeException", 
"AsyncCompletedEventArgs", 
"AsyncCompletedEventHandler", 
"ListSortDirection", 
"Convert", 
"Environment", 
"InvalidOperationException", 
"Debug", 
"IEquatable$1", 
"BinaryReader", 
"ICredentials", 
"NetworkCredential", 
"UploadStringCompletedEventHandler", 
"UploadStringCompletedEventArgs", 
"WebClient", 
"WebHeaderCollection", 
"FaultCode", 
"FaultException", 
"FaultException$1", 
"FaultReason", 
"StringBuilder", 
"BinaryFileDownloader", 
"NotImplementedException", 
"Random", 
"Encoding", 
"UTF8Encoding", 
"Task", 
"Task$1", 
"TaskCompletionSource$1", 
"TaskFactory", 
"TaskStatus", 
"Tuple$2", 
"Uri", 
"JavaScriptSerializer", 
"UIElement", 
"UIElementCollection", 
"FrameworkElement", 
"Control", 
"ContentControl", 
"Panel", 
"Canvas", 
"Image", 
"TextBlock", 
"DataTemplate", 
"DataTemplatePassInfo", 
"DataTemplateMeasureInfo", 
"DataTemplateRenderInfo", 
"DataTemplateRenderHandler", 
"DataTemplateMeasureHandler", 
"DataTemplatePassHandler", 
"Binding", 
"DependencyProperty", 
"UnsetValue", 
"DependencyPropertiesCollection", 
"DependencyPropertyChangedEventArgs", 
"Key", 
"ModifierKeys", 
"MouseEventArgs", 
"MouseButtonEventArgs", 
"Brush", 
"Color", 
"DoubleCollection", 
"GeometryType", 
"Geometry", 
"GeometryCollection", 
"GeometryGroup", 
"LineGeometry", 
"RectangleGeometry", 
"EllipseGeometry", 
"PathGeometry", 
"PathFigure", 
"PathFigureCollection", 
"PathSegmentType", 
"PathSegment", 
"PathSegmentCollection", 
"LineSegment", 
"BezierSegment", 
"PolyBezierSegment", 
"PolyLineSegment", 
"ArcSegment", 
"SweepDirection", 
"PenLineCap", 
"Transform", 
"RotateTransform", 
"TranslateTransform", 
"TransformGroup", 
"TransformCollection", 
"Point", 
"PointCollection", 
"PropertyChangedCallback", 
"CoerceValueCallback", 
"PropertyMetadata", 
"PropertyPath", 
"Rect", 
"Shape", 
"Line", 
"Path", 
"Polygon", 
"Polyline", 
"Rectangle", 
"Size", 
"Style", 
"StyleTypedPropertyAttribute", 
"TemplatePartAttribute", 
"TemplateVisualStateAttribute", 
"Visibility", 
"XObject", 
"XAttribute", 
"XNode", 
"XContainer", 
"XDocument", 
"XElement", 
"XmlUtils", 
"XName", 
"XNamespace", 
"Object", 
"MulticastDelegate", 
"Action", 
"Action$1", 
"Action$2", 
"Action$3", 
"Action$4", 
"Action$5", 
"Action$6", 
"Action$7", 
"Action$8", 
"IEqualityComparer$1", 
"IEnumerable", 
"ICollection", 
"IDictionary", 
"IList", 
"Array", 
"Array", 
"Comparison$1", 
"Attribute", 
"BrowsableAttribute", 
"EventArgs", 
"CancelEventArgs", 
"DesignTimeVisibleAttribute", 
"EditorBrowsableAttribute", 
"ValueType", 
"Enum", 
"EditorBrowsableState", 
"ISupportInitialize", 
"ITypeDescriptorContext", 
"TypeConverter", 
"TypeConverterAttribute", 
"Error", 
"IFormatProvider", 
"NotSupportedException", 
"ObsoleteAttribute", 
"MemberInfo", 
"MethodBase", 
"ConstructorInfo", 
"IComparable", 
"Date", 
"Number", 
"SuppressMessageAttribute", 
"EventHandler$1", 
"PlaceholderSystemCollectionsObjectModel", 
"PlaceholderSystemCollectionsSpecialized", 
"PlaceholderSystemWindows", 
"PlaceholderSystemWindowsControls", 
"PlaceholderSystemWindowsData", 
"PlaceholderSystemWindowsInput", 
"PlaceholderSystemWindowsMarkup", 
"PlaceholderSystemWindowsMediaImaging", 
"PlaceholderSystemWindowsShapes", 
"PlaceholderSystemWindowsControlsPrimitives", 
"PlaceholderSystemWindowsAutomation", 
"PlaceholderSystemWindowsAutomationPeers", 
"PlaceholderSystemText", 
"PlaceholderSystemGlobalization", 
"PlaceholderSystemWindowsDocuments", 
"PlaceholderSystemWindowsInk", 
"PlaceholderSystemWindowsMediaAnimation", 
"PlaceholderSystemWindowsMediaEffects", 
"PlaceholderSystemWindowsThreading", 
"PlaceholderInfragisticsControlerChartsAutomationPeers", 
"FlagsAttribute", 
"Func$1", 
"Func$2", 
"Func$3", 
"Func$4", 
"Func$5", 
"Func$6", 
"Func$7", 
"Func$8", 
"Func$9", 
"Math", 
"XMLHttpRequest", 
"Nullable$1", 
"Number", 
"ParamArrayAttribute", 
"Array", 
"AttributeTargets", 
"AttributeUsageAttribute", 
"Boolean", 
"Number", 
"String", 
"Array", 
"CompareCallback", 
"Dictionary", 
"DictionaryEntry", 
"IEnumerator", 
"INotifyPropertyChanged", 
"PropertyChangedEventArgs", 
"PropertyChangedEventHandler", 
"CultureInfo", 
"Delegate", 
"Number", 
"IDisposable", 
"Number", 
"Number", 
"Number", 
"IntPtr", 
"ReflectionUtil", 
"AssemblyTitleAttribute", 
"AssemblyCompanyAttribute", 
"AssemblyConfigurationAttribute", 
"AssemblyCopyrightAttribute", 
"AssemblyCultureAttribute", 
"AssemblyDescriptionAttribute", 
"AssemblyFileVersionAttribute", 
"AssemblyProductAttribute", 
"AssemblyTrademarkAttribute", 
"AssemblyVersionAttribute", 
"DefaultMemberAttribute", 
"MethodInfo", 
"ParameterInfo", 
"PropertyInfo", 
"RuntimeFieldHandle", 
"RuntimeTypeHandle", 
"ClientScriptAttribute", 
"ClientNameAttribute", 
"DontObfuscateAttribute", 
"EmitIgnoreTypeAttribute", 
"ExtensionAttribute", 
"GlobalMemberAttribute", 
"IgnoreAttribute", 
"InlineItemAccessAttribute", 
"InlinePropertyAttribute", 
"InternalsVisibleToAttribute", 
"KeepOriginalNameAttribute", 
"LiteralStringAttribute", 
"NativeMethodAttribute", 
"NativePropertyAttribute", 
"NativeTypeAttribute", 
"RuntimeHelpers", 
"WeakAttribute", 
"WidgetAttribute", 
"MainWidgetAttribute", 
"SuppressWidgetMemberAttribute", 
"SuppressWidgetMemberCopyAttribute", 
"WidgetDefaultStringAttribute", 
"WidgetDefaultNumberAttribute", 
"WidgetDefaultBooleanAttribute", 
"MvcEnumSetStringEnumAttribute", 
"WidgetModuleAttribute", 
"WidgetModuleParentAttribute", 
"WidgetIgnoreDependsAttribute", 
"ComVisibleAttribute", 
"GuidAttribute", 
"OutAttribute", 
"DataContractAttribute", 
"DataMemberAttribute", 
"WaitHandle", 
"EventWaitHandle", 
"Monitor", 
"TypeCode", 
"TargetFrameworkAttribute", 
"Number", 
"Script", 
"Single", 
"String", 
"ManualResetEvent", 
"Thread", 
"Date", 
"Type", 
"Number", 
"Number", 
"Number", 
"UIntPtr", 
"XmlAttributeAttribute", 
"XmlElementAttribute", 
"XmlEnumAttribute", 
"XmlIgnoreAttribute", 
"XmlRootAttribute", 
"XmlTypeAttribute", 
"XmlNode", 
"XmlAttribute", 
"XmlDocument", 
"XmlDocumentParser", 
"XmlLinkedNode", 
"XmlElement", 
"Void", 
"XmlNodeList", 
"XmlNamedNodeMap", 
"XmlNodeType", 
"XmlSchemaForm", 
"Element", 
"CanvasElement", 
"console", 
"DivElement", 
"Document", 
"ElementAttribute", 
"ElementAttributeCollection", 
"ElementCollection", 
"ElementEventHandler", 
"ElementNodeType", 
"EventListener", 
"IElementEventHandler", 
"ImageElement", 
"CanvasContext", 
"CanvasContext2D", 
"ImageData", 
"Gradient", 
"TextMetrics", 
"MSGesture", 
"WebStyle", 
"window", 
"Callback", 
"JQuery", 
"JQueryDeferred", 
"JQueryEvent", 
"JQueryObject", 
"JQueryCallback", 
"JQueryUICallback", 
"JQueryPosition", 
"JQueryPromise"]);


































$.ig.util.defType('Stack$1', 'Object', {
	$t: null, 
	init: function ($t) {
		this.$t = $t
		this.$type = this.$type.specialize(this.$t);

		$.ig.Object.prototype.init.call(this);

		this.a = new $.ig.Array();
	}, 
	a: null
, 
	c: function (a) {
		this.a.add(a);
	}

, 
	d: function () {
		if (this.a.length < 1) {
			return null;
		}
		return this.a[this.a.length - 1];
	}

, 
	e: function () {
		var a = this.a[this.a.length - 1];
		this.a.removeAt(this.a.length - 1);
		return a;
	}

, 
	b: function () {
			return this.a.length;
	}

, 
	g: function () {
		this.a.clear();
	}

, 
	h: function (a) {
		return this.a.contains(a);
	}

, 
	getEnumerator: function () {
		var $self = this;
		var $iter = function () { return function () { return {
			$state: 0,
			$this: $self,
			$current: null,
			current: function () {
				return this.$current;
			},
			moveNext: function() {
				do {
					switch (this.$state) {
						case 0:
							this.$state = 1;
							break;
						case 1:
							this.$b = this.$this.a.getEnumerator();
							this.$state = 4;
							break;
						case 2:
							this.$a = this.$b.current();
							this.$current =  this.$a;
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$b.moveNext()) {
								this.$state = 2;
							}
							else {
								this.$state = 5;
							}
							break;

						case 5:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } () };
		return new $.ig.GenericEnumerator$1(this.$t, $iter());
	}
,
	$type: new $.ig.Type('Stack$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])
}, true);






























































































$.ig.util.defType('PolyBezierSegment', 'PathSegment', {

		init: function () {


			$.ig.PathSegment.prototype.init.call(this);
						this.d(new $.ig.PointCollection(0));
		}
, 
	_d: null,
	d: function (a) {
		if (arguments.length === 1) {
			this._d = a;
			return a;
		} else {
			return this._d;
		}
	}

, 
	a: function () {
			return $.ig.PathSegmentType.prototype.polyBezier;
	}
,
	$type: new $.ig.Type('PolyBezierSegment', $.ig.PathSegment.prototype.$type)
}, true);


































$.ig.util.extCopy($.ig.Queryable, [[[$.ig.AbstractEnumerable, $.ig.IEnumerable$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.ICollection, $.ig.IList, $.ig.Array, $.ig.Dictionary, $.ig.XmlNodeList, $.ig.XmlNamedNodeMap], ['asQueryable']]]);
$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.IEnumerable$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.AbstractEnumerable, $.ig.IEnumerable$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.ICollection, $.ig.IList, $.ig.Array, $.ig.Dictionary, $.ig.XmlNodeList, $.ig.XmlNamedNodeMap], ['ofType$1', 'cast$1']]]);




// Declare empty types
$.ig = $.ig || {};
$.ig.util.bulkDefine(["BrushCollection", 
"EventProxy", 
"DOMEventProxy", 
"TrendCalculators", 
"TrendLineType", 
"UnknownValuePlotting", 
"ErrorBarCalculatorReference", 
"ErrorBarCalculatorType", 
"IErrorBarCalculator", 
"MouseWheelHandler", 
"GestureHandler", 
"TouchHandler", 
"ContactHandler", 
"MouseHandler", 
"MouseOverHandler", 
"KeyHandler", 
"IFastItemColumnInternal", 
"IFastItemColumnPropertyName", 
"IFastItemColumn$1", 
"FastItemColumn", 
"FastItemDateTimeColumn", 
"FastItemObjectColumn", 
"FastItemIntColumn", 
"FastItemsSource", 
"ColumnReference", 
"FastItemsSourceEventAction", 
"FastItemsSourceEventArgs", 
"FastReflectionHelper", 
"IRenderer", 
"RectChangedEventArgs", 
"RectChangedEventHandler", 
"CanvasRenderScheduler", 
"CanvasViewRenderer", 
"GradientDirection", 
"RenderingContext", 
"DependencyObjectNotifier", 
"InteractionState", 
"IOverviewPlusDetailControl", 
"ISchedulableRender", 
"NavigationSettings", 
"OverviewPlusDetailPaneMode", 
"PropertyChangedEventArgs$1", 
"XamOverviewPlusDetailPane", 
"XamOverviewPlusDetailPaneView", 
"XamOverviewPlusDetailPaneViewManager", 
"XamMultiScaleTileSource", 
"MapTileSource", 
"BingMapsTileSource", 
"CloudMadeTileSource", 
"OpenStreetMapTileSource", 
"ArrayUtil", 
"Clipper", 
"EdgeClipper", 
"LeftClipper", 
"BottomClipper", 
"RightClipper", 
"TopClipper", 
"InterpolationMode", 
"ColorUtil", 
"DoubleAnimator", 
"Extensions", 
"Flattener", 
"SpiralTodo", 
"GeometryUtil", 
"Numeric", 
"LeastSquaresFit", 
"MathUtil", 
"PathFigureUtil", 
"PointCollectionUtil", 
"PolygonUtil", 
"PolySimplification", 
"RearrangedList$1", 
"RectUtil", 
"ISmartPlaceable", 
"SmartPlaceableWrapper$1", 
"SmartPosition", 
"SmartPlacer", 
"StackPool$1", 
"Tile", 
"WriteableBitmap", 
"IMapRenderDeferralHandler", 
"XamMultiScaleImage", 
"Pair$2", 
"IEasingFunction", 
"XamMultiScaleImageView", 
"AbstractEnumerable", 
"AbstractEnumerator", 
"IEnumerable$1", 
"ICollection$1", 
"IList$1", 
"IArrayList", 
"List$1", 
"Collection$1", 
"IDictionary$2", 
"Dictionary$2", 
"GenericEnumerable$1", 
"IEnumerator$1", 
"GenericEnumerator$1", 
"INotifyCollectionChanged", 
"NotifyCollectionChangedEventHandler", 
"NotifyCollectionChangedEventArgs", 
"NotifyCollectionChangedAction", 
"KeyValuePair$2", 
"LinkedList$1", 
"LinkedListNode$1", 
"ObservableCollection$1", 
"Queue$1", 
"ReadOnlyCollection$1", 
"ReadOnlyObservableCollection$1", 
"NameValueCollection", 
"Stack$1", 
"IComparer$1", 
"Expression", 
"MemberExpression", 
"ParameterExpression", 
"LambdaExpression", 
"MethodCallExpression", 
"IOrderedEnumerable$1", 
"Queryable", 
"Enumerable", 
"SortedList$1", 
"IGrouping$2", 
"IArray", 
"DependencyObject", 
"Test", 
"IQueryable", 
"IQueryable$1", 
"IQueryProvider", 
"Activator", 
"AggregateException", 
"ArgumentException", 
"ArgumentNullException", 
"ArgumentOutOfRangeException", 
"AsyncCompletedEventArgs", 
"AsyncCompletedEventHandler", 
"ListSortDirection", 
"Convert", 
"Environment", 
"InvalidOperationException", 
"Debug", 
"IEquatable$1", 
"BinaryReader", 
"ICredentials", 
"NetworkCredential", 
"UploadStringCompletedEventHandler", 
"UploadStringCompletedEventArgs", 
"WebClient", 
"WebHeaderCollection", 
"FaultCode", 
"FaultException", 
"FaultException$1", 
"FaultReason", 
"StringBuilder", 
"BinaryFileDownloader", 
"NotImplementedException", 
"Random", 
"Encoding", 
"UTF8Encoding", 
"Task", 
"Task$1", 
"TaskCompletionSource$1", 
"TaskFactory", 
"TaskStatus", 
"Tuple$2", 
"Uri", 
"JavaScriptSerializer", 
"UIElement", 
"UIElementCollection", 
"FrameworkElement", 
"Control", 
"ContentControl", 
"Panel", 
"Canvas", 
"Image", 
"TextBlock", 
"DataTemplate", 
"DataTemplatePassInfo", 
"DataTemplateMeasureInfo", 
"DataTemplateRenderInfo", 
"DataTemplateRenderHandler", 
"DataTemplateMeasureHandler", 
"DataTemplatePassHandler", 
"Binding", 
"DependencyProperty", 
"UnsetValue", 
"DependencyPropertiesCollection", 
"DependencyPropertyChangedEventArgs", 
"Key", 
"ModifierKeys", 
"MouseEventArgs", 
"MouseButtonEventArgs", 
"Brush", 
"Color", 
"DoubleCollection", 
"GeometryType", 
"Geometry", 
"GeometryCollection", 
"GeometryGroup", 
"LineGeometry", 
"RectangleGeometry", 
"EllipseGeometry", 
"PathGeometry", 
"PathFigure", 
"PathFigureCollection", 
"PathSegmentType", 
"PathSegment", 
"PathSegmentCollection", 
"LineSegment", 
"BezierSegment", 
"PolyBezierSegment", 
"PolyLineSegment", 
"ArcSegment", 
"SweepDirection", 
"PenLineCap", 
"Transform", 
"RotateTransform", 
"TranslateTransform", 
"TransformGroup", 
"TransformCollection", 
"Point", 
"PointCollection", 
"PropertyChangedCallback", 
"CoerceValueCallback", 
"PropertyMetadata", 
"PropertyPath", 
"Rect", 
"Shape", 
"Line", 
"Path", 
"Polygon", 
"Polyline", 
"Rectangle", 
"Size", 
"Style", 
"StyleTypedPropertyAttribute", 
"TemplatePartAttribute", 
"TemplateVisualStateAttribute", 
"Visibility", 
"XObject", 
"XAttribute", 
"XNode", 
"XContainer", 
"XDocument", 
"XElement", 
"XmlUtils", 
"XName", 
"XNamespace", 
"Object", 
"MulticastDelegate", 
"Action", 
"Action$1", 
"Action$2", 
"Action$3", 
"Action$4", 
"Action$5", 
"Action$6", 
"Action$7", 
"Action$8", 
"IEqualityComparer$1", 
"IEnumerable", 
"ICollection", 
"IDictionary", 
"IList", 
"Array", 
"Array", 
"Comparison$1", 
"Attribute", 
"BrowsableAttribute", 
"EventArgs", 
"CancelEventArgs", 
"DesignTimeVisibleAttribute", 
"EditorBrowsableAttribute", 
"ValueType", 
"Enum", 
"EditorBrowsableState", 
"ISupportInitialize", 
"ITypeDescriptorContext", 
"TypeConverter", 
"TypeConverterAttribute", 
"Error", 
"IFormatProvider", 
"NotSupportedException", 
"ObsoleteAttribute", 
"MemberInfo", 
"MethodBase", 
"ConstructorInfo", 
"IComparable", 
"Date", 
"Number", 
"SuppressMessageAttribute", 
"EventHandler$1", 
"PlaceholderSystemCollectionsObjectModel", 
"PlaceholderSystemCollectionsSpecialized", 
"PlaceholderSystemWindows", 
"PlaceholderSystemWindowsControls", 
"PlaceholderSystemWindowsData", 
"PlaceholderSystemWindowsInput", 
"PlaceholderSystemWindowsMarkup", 
"PlaceholderSystemWindowsMediaImaging", 
"PlaceholderSystemWindowsShapes", 
"PlaceholderSystemWindowsControlsPrimitives", 
"PlaceholderSystemWindowsAutomation", 
"PlaceholderSystemWindowsAutomationPeers", 
"PlaceholderSystemText", 
"PlaceholderSystemGlobalization", 
"PlaceholderSystemWindowsDocuments", 
"PlaceholderSystemWindowsInk", 
"PlaceholderSystemWindowsMediaAnimation", 
"PlaceholderSystemWindowsMediaEffects", 
"PlaceholderSystemWindowsThreading", 
"PlaceholderInfragisticsControlerChartsAutomationPeers", 
"FlagsAttribute", 
"Func$1", 
"Func$2", 
"Func$3", 
"Func$4", 
"Func$5", 
"Func$6", 
"Func$7", 
"Func$8", 
"Func$9", 
"Math", 
"XMLHttpRequest", 
"Nullable$1", 
"Number", 
"ParamArrayAttribute", 
"Array", 
"AttributeTargets", 
"AttributeUsageAttribute", 
"Boolean", 
"Number", 
"String", 
"Array", 
"CompareCallback", 
"Dictionary", 
"DictionaryEntry", 
"IEnumerator", 
"INotifyPropertyChanged", 
"PropertyChangedEventArgs", 
"PropertyChangedEventHandler", 
"CultureInfo", 
"Delegate", 
"Number", 
"IDisposable", 
"Number", 
"Number", 
"Number", 
"IntPtr", 
"ReflectionUtil", 
"AssemblyTitleAttribute", 
"AssemblyCompanyAttribute", 
"AssemblyConfigurationAttribute", 
"AssemblyCopyrightAttribute", 
"AssemblyCultureAttribute", 
"AssemblyDescriptionAttribute", 
"AssemblyFileVersionAttribute", 
"AssemblyProductAttribute", 
"AssemblyTrademarkAttribute", 
"AssemblyVersionAttribute", 
"DefaultMemberAttribute", 
"MethodInfo", 
"ParameterInfo", 
"PropertyInfo", 
"RuntimeFieldHandle", 
"RuntimeTypeHandle", 
"ClientScriptAttribute", 
"ClientNameAttribute", 
"DontObfuscateAttribute", 
"EmitIgnoreTypeAttribute", 
"ExtensionAttribute", 
"GlobalMemberAttribute", 
"IgnoreAttribute", 
"InlineItemAccessAttribute", 
"InlinePropertyAttribute", 
"InternalsVisibleToAttribute", 
"KeepOriginalNameAttribute", 
"LiteralStringAttribute", 
"NativeMethodAttribute", 
"NativePropertyAttribute", 
"NativeTypeAttribute", 
"RuntimeHelpers", 
"WeakAttribute", 
"WidgetAttribute", 
"MainWidgetAttribute", 
"SuppressWidgetMemberAttribute", 
"SuppressWidgetMemberCopyAttribute", 
"WidgetDefaultStringAttribute", 
"WidgetDefaultNumberAttribute", 
"WidgetDefaultBooleanAttribute", 
"MvcEnumSetStringEnumAttribute", 
"WidgetModuleAttribute", 
"WidgetModuleParentAttribute", 
"WidgetIgnoreDependsAttribute", 
"ComVisibleAttribute", 
"GuidAttribute", 
"OutAttribute", 
"DataContractAttribute", 
"DataMemberAttribute", 
"WaitHandle", 
"EventWaitHandle", 
"Monitor", 
"TypeCode", 
"TargetFrameworkAttribute", 
"Number", 
"Script", 
"Single", 
"String", 
"ManualResetEvent", 
"Thread", 
"Date", 
"Type", 
"Number", 
"Number", 
"Number", 
"UIntPtr", 
"XmlAttributeAttribute", 
"XmlElementAttribute", 
"XmlEnumAttribute", 
"XmlIgnoreAttribute", 
"XmlRootAttribute", 
"XmlTypeAttribute", 
"XmlNode", 
"XmlAttribute", 
"XmlDocument", 
"XmlDocumentParser", 
"XmlLinkedNode", 
"XmlElement", 
"Void", 
"XmlNodeList", 
"XmlNamedNodeMap", 
"XmlNodeType", 
"XmlSchemaForm", 
"Element", 
"CanvasElement", 
"console", 
"DivElement", 
"Document", 
"ElementAttribute", 
"ElementAttributeCollection", 
"ElementCollection", 
"ElementEventHandler", 
"ElementNodeType", 
"EventListener", 
"IElementEventHandler", 
"ImageElement", 
"CanvasContext", 
"CanvasContext2D", 
"ImageData", 
"Gradient", 
"TextMetrics", 
"MSGesture", 
"WebStyle", 
"window", 
"Callback", 
"JQuery", 
"JQueryDeferred", 
"JQueryEvent", 
"JQueryObject", 
"JQueryCallback", 
"JQueryUICallback", 
"JQueryPosition", 
"JQueryPromise"]);








$.ig.util.defType('UnknownValuePlotting', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('UnknownValuePlotting', $.ig.Object.prototype.$type)
}, true);













































$.ig.util.defType('Clipper', 'Object', {

	h: function (a) {
		if (arguments.length === 1) {
			if (this.b != null) {
				this.b.clear();
			}
			this.b = null;
			this.c = a;
			var b = this.c;
			if (this.d != null) {
				this.d.h(b);
				b = this.d;
				this.b = this.d;
			}
			if (this.e != null) {
				this.e.h(b);
				b = this.e;
				this.e.__nextClipper = this.b;
				this.b = this.e;
			}
			if (this.f != null) {
				this.f.h(b);
				b = this.f;
				this.f.__nextClipper = this.b;
				this.b = this.f;
			}
			if (this.g != null) {
				this.g.h(b);
				b = this.g;
				this.g.__nextClipper = this.b;
				this.b = this.g;
			}
			this.a = b;
			return a;
		} else {
			return this.c;
		}
	}
, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null, 
	f: null, 
	g: null
, 
		init: function (initNumber, a, b) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}

			var $self = this;

			$.ig.Object.prototype.init.call(this);
						this.d = (function () { var $ret = new $.ig.LeftClipper();
				$ret.p = a.left();
				$ret.f = b; return $ret;}());
				this.e = (function () { var $ret = new $.ig.BottomClipper();
				$ret.p = a.bottom();
				$ret.f = b; return $ret;}());
				this.f = (function () { var $ret = new $.ig.RightClipper();
				$ret.p = a.right();
				$ret.f = b; return $ret;}());
				this.g = (function () { var $ret = new $.ig.TopClipper();
				$ret.p = a.top();
				$ret.f = b; return $ret;}());
		}
, 
		init1: function (initNumber, a, b, c, d, e) {

			var $self = this;

			$.ig.Object.prototype.init.call(this);
						this.d = !isNaN(a) ? (function () { var $ret = new $.ig.LeftClipper();
				$ret.p = a;
				$ret.f = e; return $ret;}()) : null;
				this.e = !isNaN(b) ? (function () { var $ret = new $.ig.BottomClipper();
				$ret.p = b;
				$ret.f = e; return $ret;}()) : null;
				this.f = !isNaN(c) ? (function () { var $ret = new $.ig.RightClipper();
				$ret.p = c;
				$ret.f = e; return $ret;}()) : null;
				this.g = !isNaN(d) ? (function () { var $ret = new $.ig.TopClipper();
				$ret.p = d;
				$ret.f = e; return $ret;}()) : null;
		}
, 
	l: function (a) {
		this.a.add(a);
	}

, 
	i: function (a) {
		if (arguments.length === 1) {
			if (this.d != null) {
			this.d.f = a;
			}
			if (this.e != null) {
			this.e.f = a;
			}
			if (this.f != null) {
			this.f.f = a;
			}
			if (this.g != null) {
			this.g.f = a;
			}
			return a;
		} else {
			return (this.d == null || this.d.f) && (this.e == null || this.e.f) && (this.f == null || this.f.f) && (this.g == null || this.g.f);
		}
	}
,
	$type: new $.ig.Type('Clipper', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('EdgeClipper', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

		this.b = true;
		this.g = false;
	}
, 
	h: function (a) {
		if (arguments.length === 1) {
			if (this.a != a) {
				this.b = true;
				this.a = a;
			}
			return a;
		} else {
			return this.a;
		}
	}
, 
	a: null, 
	__nextClipper: null
, 
	nextClipper: function (a) {
		if (arguments.length === 1) {
			this.__nextClipper = a;
			return a;
		} else {
			return this.__nextClipper;
		}
	}
, 
	b: null, 
	c: null, 
	d: null, 
	e: null, 
	f: null, 
	g: null
, 
	add: function (a) {
		var b = this.m(a);
		if (this.b) {
			this.b = false;
			this.c = a;

		} else {
			if (true) {
				if (b) {
					if (!this.e) {
						this.h().add(this.n(this.d, a));

					} else {
						if (!this.f && !this.g) {
							this.h().add(this.d);
							this.g = true;
						}
					}
					this.h().add(a);

				} else {
					if (this.e) {
						if (!this.f && !this.g) {
							this.h().add(this.d);
							this.g = true;
						}
						this.h().add(this.n(this.d, a));
					}
				}
			}
		}
		this.d = a;
		this.e = b;
	}

, 
	clear: function () {
		if (this.f && !this.b) {
			this.add(this.c);
		}
		if (this.__nextClipper != null) {
			this.__nextClipper.clear();
		}
		this.b = true;
		this.g = false;
	}

, 
	m: function (a) {
	}

, 
	n: function (a, b) {
	}

, 
	getEnumerator: function () {
		return null;
	}

, 
	isReadOnly: function () {
			return false;
	}

, 
	count: function () {
			return 0;
	}

, 
	remove: function (a) {
		return false;
	}

, 
	removeAt: function (a) {
	}

, 
	o: function (a, b) {
	}

, 
	contains: function (a) {
		return false;
	}

, 
	_item: null,
	item: function (b, a) {
		if (arguments.length === 2) {
			this._item = a;
			return a;
		} else {
			return {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
	}

, 
	insert: function (a, b) {
	}

, 
	indexOf: function (a) {
		return -1;
	}
,
	$type: new $.ig.Type('EdgeClipper', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize($.ig.Point.prototype.$type)])
}, true);

$.ig.util.defType('LeftClipper', 'EdgeClipper', {
	init: function () {

		$.ig.EdgeClipper.prototype.init.call(this);

	}, 
	p: null
, 
	m: function (a) {
		return a.__x >= this.p;
	}

, 
	n: function (a, b) {
		return {__x: this.p, __y: a.__y + (b.__y - a.__y) * (this.p - a.__x) / (b.__x - a.__x), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}
,
	$type: new $.ig.Type('LeftClipper', $.ig.EdgeClipper.prototype.$type)
}, true);

$.ig.util.defType('BottomClipper', 'EdgeClipper', {
	init: function () {

		$.ig.EdgeClipper.prototype.init.call(this);

	}, 
	p: null
, 
	m: function (a) {
		return a.__y <= this.p;
	}

, 
	n: function (a, b) {
		return {__x: a.__x + (b.__x - a.__x) * (this.p - a.__y) / (b.__y - a.__y), __y: this.p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}
,
	$type: new $.ig.Type('BottomClipper', $.ig.EdgeClipper.prototype.$type)
}, true);

$.ig.util.defType('RightClipper', 'EdgeClipper', {
	init: function () {

		$.ig.EdgeClipper.prototype.init.call(this);

	}, 
	p: null
, 
	m: function (a) {
		return a.__x <= this.p;
	}

, 
	n: function (a, b) {
		return {__x: this.p, __y: a.__y + (b.__y - a.__y) * (this.p - a.__x) / (b.__x - a.__x), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}
,
	$type: new $.ig.Type('RightClipper', $.ig.EdgeClipper.prototype.$type)
}, true);

$.ig.util.defType('TopClipper', 'EdgeClipper', {
	init: function () {

		$.ig.EdgeClipper.prototype.init.call(this);

	}, 
	p: null
, 
	m: function (a) {
		return a.__y >= this.p;
	}

, 
	n: function (a, b) {
		return {__x: a.__x + (b.__x - a.__x) * (this.p - a.__y) / (b.__y - a.__y), __y: this.p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}
,
	$type: new $.ig.Type('TopClipper', $.ig.EdgeClipper.prototype.$type)
}, true);



$.ig.util.defType('Extensions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	reset: function () {
		this.d().clear();
		this.d().add(new $.ig.PathFigure());
		this.d().removeAt(0);
	}

, 
	reset1: function () {
		this.d().clear();
		this.d().add(new $.ig.PathGeometry());
		this.d().removeAt(0);
	}

, 
	detach: function () {
		if (this == null) {
			return;
		}
		var b = $.ig.util.cast($.ig.Panel.prototype.$type, this.aa());
		if (b != null) {
			b.a3().remove(this);
			return;
		}
		var c = $.ig.util.cast($.ig.ContentControl.prototype.$type, this.aa());
		if (c != null) {
			c.a9(null);
			return;
		}
	}

, 
	transferChildrenTo: function (b) {
		var c = new $.ig.List$1($.ig.UIElement.prototype.$type, 0);
		var e = this.a3().ofType$1($.ig.UIElement.prototype.$type).getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			c.add(d);
		}
		var g = c.getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			this.a3().remove(f);
			b.a3().add(f);
		}
	}

, 
	isPlottable: function () {
		return !isNaN(this.__x) && !isNaN(this.__y) && !Number.isInfinity(this.__x) && !Number.isInfinity(this.__y);
	}

, 
	isPlottable1: function () {
		return !isNaN(this.left()) && !isNaN(this.right()) && !isNaN(this.top()) && !isNaN(this.bottom()) && !Number.isInfinity(this.left()) && !Number.isInfinity(this.right()) && !Number.isInfinity(this.top()) && !Number.isInfinity(this.bottom());
	}
,
	$type: new $.ig.Type('Extensions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Flattener', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
		}
, 
	b: function (a, b, c, d, e) {
		var $self = this;
		if (isNaN(e) || e <= 0) {
			e = 1;
		}
		var f = new $.ig.List$1(Number, 0);
		var g = new $.ig.Stack$1($.ig.SpiralTodo.prototype.$type);
		var h = (d - b) / (c - a);
		var i = b - h * a;
		var j = h * h;
		var k = i * i;
		var l = i * h;
		g.c((function () { var $ret = new $.ig.SpiralTodo();
		$ret.a = 0;
		$ret.b = 1; return $ret;}()));
		while (g.b() != 0) {
			var m = g.e();
			var n = b + m.a * (d - b);
			var o = a + m.a * (c - a);
			var p = o * o;
			var q = p * o;
			var r = b + m.b * (d - b);
			var s = a + m.b * (c - a);
			var t = s * s;
			var u = t * s;
			var v;
			if (h == 0) {
				v = k * (s - o) / 2 + l * (t - p) / 2 + j * (u - q) / 6;

			} else {
				v = (Math.pow(i + h * s, 3) - Math.pow(i + h * o, 3)) / (6 * h);
			}
			var w = 0.5 * n * r * Math.sin(s - o);
			if (v - w > e) {
				var x = 0.5 * (m.a + m.b);
				g.c((function () { var $ret = new $.ig.SpiralTodo();
				$ret.a = x;
				$ret.b = m.b; return $ret;}()));
				g.c((function () { var $ret = new $.ig.SpiralTodo();
				$ret.a = m.a;
				$ret.b = x; return $ret;}()));

			} else {
				f.add(m.a);
			}
		}
		f.add(1);
		return f;
	}

, 
	c: function (a, b, c, d) {
		var e = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		$.ig.Flattener.prototype.d(e, b, c, 0, a - 1, d);
		return e;
	}

, 
	d: function (a, b, c, d, e, f) {
		var $self = this;
		return $.ig.Flattener.prototype.f(a, function (g) {
			return g;
		}, b, c, d, e, f);
	}

, 
	e: function (a, b, c, d, e, f, g) {
		var $self = this;
		return $.ig.Flattener.prototype.f(a, function (h) {
			return b.item(h);
		}, c, d, e, f, g);
	}

, 
	f: function (a, b, c, d, e, f, g) {
		if (e > f) {
			return a;
		}
		var h = c(b(e));
		var i = d(b(e));
		while ((isNaN(h) || isNaN(i)) && e < f) {
			++e;
			h = c(b(e));
			i = d(b(e));
		}
		var j = c(b(f));
		var k = d(b(f));
		while ((isNaN(j) || isNaN(k)) && e < f) {
			--f;
			j = c(b(f));
			k = d(b(f));
		}
		if (e == f) {
			a.add(b(e));
			return a;
		}
		a.add(b(e));
		$.ig.Flattener.prototype.n(a, b, c, d, e, f, g);
		a.add(b(f));
		return a;
	}

, 
	g: function (a, b, c, d, e, f) {
		if (d > e) {
			return a;
		}
		var g = b[d];
		var h = c[d];
		while ((isNaN(g) || isNaN(h)) && d < e) {
			++d;
			g = b[d];
			h = c[d];
		}
		var i = b[e];
		var j = c[e];
		while ((isNaN(i) || isNaN(j)) && d < e) {
			--e;
			i = b[e];
			j = c[e];
		}
		if (d == e) {
			a.add(d);
			return a;
		}
		a.add(d);
		$.ig.Flattener.prototype.l(a, b, c, d, e, f);
		a.add(e);
		return a;
	}

, 
	h: function (a, b, c, d, e) {
		var f;
		var g;
		if (c) {
			f = 0;
			g = 1;
		} else if (d) {
			f = 0;
			g = 2;

		} else {
			f = 2;
			g = 3;
		}
		return $.ig.Flattener.prototype.i(a, b, f, g, e);
	}

, 
	i: function (a, b, c, d, e) {
		var f = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		$.ig.Flattener.prototype.k(f, b, c, d, 0, a - 1, e);
		return f;
	}

, 
	j: function (a, b, c, d, e, f, g) {
		var h;
		var i;
		if (c) {
			h = 0;
			i = 1;
		} else if (d) {
			h = 0;
			i = 2;

		} else {
			h = 2;
			i = 3;
		}
		return $.ig.Flattener.prototype.k(a, b, h, i, e, f, g);
	}

, 
	k: function (a, b, c, d, e, f, g) {
		if (e > f) {
			return a;
		}
		var h = b.__inner[e];
		var i		,j;
		i = h[c];
		j = h[d];
		while ((isNaN(i) || isNaN(j)) && e < f) {
			++e;
			h = b.__inner[e];
			i = h[c];
			j = h[d];
		}
		var k = b.__inner[f];
		var l		,m;
		l = k[c];
		m = k[d];
		while ((isNaN(l) || isNaN(m)) && e < f) {
			--f;
			k = b.__inner[f];
			l = k[c];
			m = k[d];
		}
		if (e == f) {
			a.add(e);
			return a;
		}
		a.add(e);
		$.ig.Flattener.prototype.m(a, b, c, d, e, f, g);
		a.add(f);
		return a;
	}

, 
	l: function (a, b, c, d, e, f) {
		var g = b[d];
		var h = c[d];
		while ((isNaN(g) || isNaN(h)) && d < e) {
			++d;
			g = b[d];
			h = c[d];
		}
		var i = b[e];
		var j = c[e];
		while ((isNaN(i) || isNaN(j)) && d < e) {
			--e;
			i = b[e];
			j = c[e];
		}
		if (d + 1 >= e) {
			return;
		}
		var k = -1;
		var l = f * f;
		var m;
		var n;
		m = i - g;
		n = j - h;
		var o = m * m + n * n;
		if (o == 0) {
			for (var p = d + 1; p < e; ++p) {
				var q = b[p];
				var r = c[p];
				if (isNaN(q) || isNaN(r)) {
					continue;
				}
				m = i - q;
				n = j - r;
				var s = m * m + n * n;
				if (s >= l) {
					l = s;
					k = p;
				}
			}

		} else {
			var t = i - g;
			var u = j - h;
			for (var v = d + 1; v < e; ++v) {
				var w = b[v];
				var x = c[v];
				if (isNaN(w) || isNaN(x)) {
					continue;
				}
				var y = NaN;
				var z = b[v] - g;
				var aa = c[v] - h;
				var ab = t * z + u * aa;
				if (ab <= 0) {
					m = g - w;
					n = h - x;
					y = m * m + n * n;

				} else {
					var ac = t * t + u * u;
					if (ac <= ab) {
						m = i - w;
						n = j - x;
						y = m * m + n * n;

					} else {
						var ad = ab / ac;
						m = g + ad * t - w;
						n = h + ad * u - x;
						y = m * m + n * n;
					}
				}
				if (y >= l) {
					l = y;
					k = v;
				}
			}
		}
		if (k != -1) {
			$.ig.Flattener.prototype.l(a, b, c, d, k, f);
			a.add(k);
			$.ig.Flattener.prototype.l(a, b, c, k, e, f);
		}
		return;
	}

, 
	m: function (a, b, c, d, e, f, g) {
		var h = b.__inner[e];
		var i		,j;
		i = h[c];
		j = h[d];
		while ((isNaN(i) || isNaN(j)) && e < f) {
			++e;
			h = b.__inner[e];
			i = h[c];
			j = h[d];
		}
		var k = b.__inner[f];
		var l		,m;
		l = k[c];
		m = k[d];
		while ((isNaN(l) || isNaN(m)) && e < f) {
			--f;
			k = b.__inner[f];
			l = k[c];
			m = k[d];
		}
		if (e + 1 >= f) {
			return;
		}
		var n = -1;
		var o = g * g;
		var p;
		var q;
		p = l - i;
		q = m - j;
		var r = p * p + q * q;
		if (r == 0) {
			for (var s = e + 1; s < f; ++s) {
				var t = b.__inner[s];
				var u				,v;
				u = t[c];
				v = t[d];
				if (isNaN(u) || isNaN(v)) {
					continue;
				}
				p = l - u;
				q = m - v;
				var w = p * p + q * q;
				if (w >= o) {
					o = w;
					n = s;
				}
			}

		} else {
			var x = l - i;
			var y = m - j;
			for (var z = e + 1; z < f; ++z) {
				var aa = b.__inner[z];
				var ab				,ac;
				ab = aa[c];
				ac = aa[d];
				if (isNaN(ab) || isNaN(ac)) {
					continue;
				}
				var ad = NaN;
				var ae = ab - i;
				var af = ac - j;
				var ag = x * ae + y * af;
				if (ag <= 0) {
					p = i - ab;
					q = j - ac;
					ad = p * p + q * q;

				} else {
					var ah = x * x + y * y;
					if (ah <= ag) {
						p = l - ab;
						q = m - ac;
						ad = p * p + q * q;

					} else {
						var ai = ag / ah;
						p = i + ai * x - ab;
						q = j + ai * y - ac;
						ad = p * p + q * q;
					}
				}
				if (ad >= o) {
					o = ad;
					n = z;
				}
			}
		}
		if (n != -1) {
			$.ig.Flattener.prototype.m(a, b, c, d, e, n, g);
			a.add(n);
			$.ig.Flattener.prototype.m(a, b, c, d, n, f, g);
		}
		return;
	}

, 
	n: function (a, b, c, d, e, f, g) {
		var h = c(b(e));
		var i = d(b(e));
		while ((isNaN(h) || isNaN(i)) && e < f) {
			++e;
			h = c(b(e));
			i = d(b(e));
		}
		var j = c(b(f));
		var k = d(b(f));
		while ((isNaN(j) || isNaN(k)) && e < f) {
			--f;
			j = c(b(f));
			k = d(b(f));
		}
		if (e + 1 >= f) {
			return;
		}
		var l = -1;
		var m = g;
		var n = $.ig.MathUtil.prototype.f(j - h, k - i);
		if (n == 0) {
			for (var o = e + 1; o < f; ++o) {
				var p = c(b(o));
				var q = d(b(o));
				if (isNaN(p) || isNaN(q)) {
					continue;
				}
				var r = $.ig.MathUtil.prototype.f(j - p, k - q);
				if (r >= m) {
					m = r;
					l = o;
				}
			}

		} else {
			var s = j - h;
			var t = k - i;
			for (var u = e + 1; u < f; ++u) {
				var v = c(b(u));
				var w = d(b(u));
				if (isNaN(v) || isNaN(w)) {
					continue;
				}
				var x = NaN;
				var y = c(b(u)) - h;
				var z = d(b(u)) - i;
				var aa = s * y + t * z;
				if (aa <= 0) {
					x = $.ig.MathUtil.prototype.f(h - v, i - w);

				} else {
					var ab = s * s + t * t;
					if (ab <= aa) {
						x = $.ig.MathUtil.prototype.f(j - v, k - w);

					} else {
						var ac = aa / ab;
						x = $.ig.MathUtil.prototype.f(h + ac * s - v, i + ac * t - w);
					}
				}
				if (x >= m) {
					m = x;
					l = u;
				}
			}
		}
		if (l != -1) {
			$.ig.Flattener.prototype.n(a, b, c, d, e, l, g);
			a.add(b(l));
			$.ig.Flattener.prototype.n(a, b, c, d, l, f, g);
		}
		return;
	}

, 
	o: function (a, b, c) {
		var d = new $.ig.PointCollection(0);
		if (a < 5) {
			for (var e = 0; e < a; ++e) {
				d.add({__x: b(e), __y: c(e), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
			return d;
		}
		d.add({__x: b(0), __y: c(0), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		var f = a - 1;
		var g;
		var h = {__x: b(0), __y: c(0), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var i = {__x: b(0 + 1), __y: c(0 + 1), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var j = {__x: b(0 + 2), __y: c(0 + 2), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var k;
		var l;
		var m = {__x: i.__x - h.__x, __y: i.__y - h.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var n = $.ig.MathUtil.prototype.f(m.__x, m.__y);
		var o = {__x: j.__x - i.__x, __y: j.__y - i.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var p = $.ig.MathUtil.prototype.f(o.__x, o.__y);
		var q;
		var r;
		var s = 0.1;
		var t = 0.3;
			q = {__x: j.__x - h.__x, __y: j.__y - h.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
				var u = $.ig.MathUtil.prototype.f(q.__x, q.__y);
				q.__x /= u;
				q.__y /= u;
			r = 0.5 + (m.__x * o.__x + m.__y * o.__y) / (2 * n * p);
			d.add({__x: i.__x - q.__x * (s + t * r) * n, __y: i.__y - q.__y * (s + t * r) * n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			d.add(i);
		for (var v = 1; v < f - 1; ++v) {
			g = h;
			h = i;
			i = j;
			j = {__x: b(v + 2), __y: c(v + 2), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			k = m;
			l = n;
			m = o;
			n = p;
			o = {__x: j.__x - i.__x, __y: j.__y - i.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			p = $.ig.MathUtil.prototype.f(o.__x, o.__y);
			var w = q;
			var x = r;
			q = {__x: j.__x - h.__x, __y: j.__y - h.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
				var y = $.ig.MathUtil.prototype.f(q.__x, q.__y);
				q.__x /= y;
				q.__y /= y;
			r = 0.5 + (m.__x * o.__x + m.__y * o.__y) / (2 * n * p);
			d.add({__x: h.__x + w.__x * (s + t * x) * n, __y: h.__y + w.__y * (s + t * x) * n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			d.add({__x: i.__x - q.__x * (s + t * r) * n, __y: i.__y - q.__y * (s + t * r) * n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			d.add(i);
		}
			g = h;
			h = i;
			i = j;
			k = m;
			l = n;
			m = o;
			n = p;
			var z = q;
			var aa = r;
			d.add({__x: h.__x + z.__x * (s + t * aa) * n, __y: h.__y + z.__y * (s + t * aa) * n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			d.add(i);
		return d;
	}
,
	$type: new $.ig.Type('Flattener', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SpiralTodo', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null,
	$type: new $.ig.Type('SpiralTodo', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('Numeric', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
		}
, 
	a: function (a, b, c, d, e) {
		var f;
		var g = a.count();
		var h = new Array(g);
		if (b.__inner[0] == 0) {
			return false;
		}
		var i = b.__inner[0];
		e.__inner[0] = d.__inner[0] / (i);
		for (f = 1; f < g; f++) {
			h[f] = c.__inner[f - 1] / i;
			i = b.__inner[f] - a.__inner[f] * h[f];
			if (i == 0) {
				return false;
			}
			e.__inner[f] = (d.__inner[f] - a.__inner[f] * e.__inner[f - 1]) / i;
		}
		for (f = (g - 2); f >= 0; f--) {
			e.__inner[f] -= h[f + 1] * e.__inner[f + 1];
		}
		return true;
	}

, 
	b: function (a, b) {
		var c = a.getLength(0);
		var d = new Array(c);
		var e = new Array(c);
		var f = new Array(c);
		for (var g = 0; g < c; g++) {
			f[g] = 0;
		}
		for (var h = 0; h < c; h++) {
			var i = 0;
			var j = 0;
			var k = 0;
			for (var l = 0; l < c; l++) {
				if (f[l] != 1) {
					for (var m = 0; m < c; m++) {
						if (f[m] == 0) {
							if (Math.abs(a[l][m]) >= i) {
								i = Math.abs(a[l][m]);
								j = l;
								k = m;
							}
						}
					}
				}
			}
			++(f[k]);
			if (j != k) {
				for (var n = 0; n < c; n++) {
					var o = a[j][n];
					a[j][n] = a[k][n];
					a[k][n] = o;
				}
					var p = b[j];
					b[j] = b[k];
					b[k] = p;
			}
			e[h] = j;
			d[h] = k;
			if (a[k][k] == 0) {
				return false;
			}
			var q = 1 / a[k][k];
			a[k][k] = 1;
			for (var r = 0; r < c; r++) {
				a[k][r] *= q;
			}
			b[k] *= q;
			for (var s = 0; s < c; s++) {
				if (s != k) {
					var t = a[s][k];
					a[s][k] = 0;
					for (var u = 0; u < c; u++) {
						a[s][u] -= a[k][u] * t;
					}
					b[s] -= b[k] * t;
				}
			}
		}
		for (var v = c - 1; v >= 0; v--) {
			if (e[v] != d[v]) {
				for (var w = 0; w < c; w++) {
					var x = a[w][e[v]];
					a[w][e[v]] = a[w][d[v]];
					a[w][d[v]] = x;
				}
			}
		}
		return true;
	}

, 
	c: function (a, b, c, d, e) {
		var f = new $.ig.List$1(Number, 0);
		for (var g = 0; g < a; ++g) {
			while (g < a && (isNaN(b(g)) || isNaN(c(g)))) {
				f.add(NaN);
				++g;
			}
			var h = g;
			while (g < a && !isNaN(b(g)) && !isNaN(c(g))) {
				++g;
			}
			--g;
			if (g - h > 0) {
				f.w($.ig.Numeric.prototype.d(h, g - h + 1, b, c, d, e));

			} else {
				for (; h <= g; ++h) {
					f.add(NaN);
				}
			}
		}
		return f.x();
	}

, 
	d: function (a, b, c, d, e, f) {
		var $self = this;
		return $.ig.Numeric.prototype.e(b, function (g) { return c(g + a)		}, function (h) { return d(h + a)		}, e, f);
	}

, 
	e: function (a, b, c, d, e) {
		var f = new Array(a - 1);
		var g = new Array(a);
		g[0] = isNaN(d) ? 0 : -0.5;
		f[0] = isNaN(d) ? 0 : (3 / (b(1) - b(0))) * ((c(1) - c(0)) / (b(1) - b(0)) - d);
		for (var h = 1; h < a - 1; h++) {
			var i = (b(h) - b(h - 1)) / (b(h + 1) - b(h - 1));
			var j = i * g[h - 1] + 2;
			g[h] = (i - 1) / j;
			f[h] = (c(h + 1) - c(h)) / (b(h + 1) - b(h)) - (c(h) - c(h - 1)) / (b(h) - b(h - 1));
			f[h] = (6 * f[h] / (b(h + 1) - b(h - 1)) - i * f[h - 1]) / j;
		}
		var k = isNaN(e) ? 0 : 0.5;
		var l = isNaN(e) ? 0 : (3 / (b(a - 1) - b(a - 2))) * (e - (c(a - 1) - c(a - 2)) / (b(a - 1) - b(a - 2)));
		g[a - 1] = (l - k * f[a - 2]) / (k * g[a - 2] + 1);
		for (var m = a - 2; m >= 0; m--) {
			g[m] = g[m] * g[m + 1] + f[m];
		}
		return g;
	}

, 
	f: function (a, b, c, d, e, f, g) {
		var h = d - b;
		var i = (d - a) / h;
		var j = (a - b) / h;
		return i * c + j * e + ((i * i * i - i) * f + (j * j * j - j) * g) * (h * h) / 6;
	}

, 
	g: function (a, b, c, d) {
		var e = new $.ig.PathFigureCollection();
		var f = 0;
		var g = -1;
		var h = NaN;
		var i = NaN;
		for (var j = 0; j < a; j++) {
			h = b(j);
			i = c(j);
			if (isNaN(h) || isNaN(i)) {
				g = j - 1;
				if (g - f > 0) {
					e.add($.ig.Numeric.prototype.h(f, g, b, c, d));
				}
				f = j + 1;
			}
		}
		if (!isNaN(h) && !isNaN(i)) {
			g = a - 1;
		}
		if (g - f > 0) {
			e.add($.ig.Numeric.prototype.h(f, g, b, c, d));
		}
		return e;
	}

, 
	h: function (a, b, c, d, e) {
		var $self = this;
		e = 0.5 * $.ig.MathUtil.prototype.i(isNaN(e) ? 0.5 : e, 0, 1);
		var f = new $.ig.PathFigure();
		var g = b - a + 1;
		if (g < 2) {
			return f;
		}
		if (g == 2) {
			f.__startPoint = {__x: c(a), __y: d(a), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var h = (function () { var $ret = new $.ig.LineSegment(1);
$ret.d({__x: c(a + 1), __y: d(a + 1), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}());
			f.__segments.add(h);
			return f;
		}
		var i = new $.ig.PolyBezierSegment();
		var j = c(a);
		var k = d(a);
		var l = c(a + 1);
		var m = d(a + 1);
		while (l == j && m == k && a + 1 <= b) {
			a++;
			l = c(a + 1);
			m = d(a + 1);
		}
		var n = l - j;
		var o = m - k;
		var p = Math.sqrt(n * n + o * o);
		for (var q = a + 1; q < b; ++q) {
			var r = c(q);
			var s = d(q);
			if (r == j && s == k) {
				continue;
			}
			var t = c(q + 1) - c(q - 1);
			var u = d(q + 1) - d(q - 1);
			var v = t * t + u * u;
			if (v < 0.01) {
				t = -(d(q + 1) - d(q));
				u = c(q + 1) - c(q);
				v = t * t + u * u;
			}
			v = Math.sqrt(v);
			var w = e * Math.sqrt((r - j) * (r - j) + (s - k) * (s - k));
			if (v > 0.01) {
				i.d().add({__x: j + n * w / p, __y: k + o * w / p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				i.d().add({__x: r - t * w / v, __y: s - u * w / v, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				i.d().add({__x: r, __y: s, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				j = r;
				k = s;
				n = t;
				o = u;
				p = v;
			}
		}
			var x = b;
			var y = c(x);
			var z = d(x);
			var aa = c(x) - c(x - 1);
			var ab = d(x) - d(x - 1);
			var ac = aa * aa + ab * ab;
			var ad = e * Math.sqrt((y - j) * (y - j) + (z - k) * (z - k));
			i.d().add({__x: j + n * ad / p, __y: k + o * ad / p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			i.d().add({__x: y - aa * ad / ac, __y: z - ab * ad / ac, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			i.d().add({__x: y, __y: z, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		f.__startPoint = {__x: c(a), __y: d(a), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		f.__segments.add(i);
		return f;
	}
,
	$type: new $.ig.Type('Numeric', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LeastSquaresFit', 'Numeric', {

	i: function () {
		return $.ig.LeastSquaresFit.prototype.l() && $.ig.LeastSquaresFit.prototype.o() && $.ig.LeastSquaresFit.prototype.r() && $.ig.LeastSquaresFit.prototype.u() && $.ig.LeastSquaresFit.prototype.x() && $.ig.LeastSquaresFit.prototype.aa() && $.ig.LeastSquaresFit.prototype.ad() && $.ig.LeastSquaresFit.prototype.ag();
	}

, 
		init: function () {


			$.ig.Numeric.prototype.init.call(this);
		}
, 
	j: function (a, b, c) {
		var $self = this;
		var d = 0;
		var e = 0;
		var f = 0;
		var g = 0;
		var h = 0;
		for (var i = 0; i < a; ++i) {
			var j = b(i);
			var k = c(i);
			if (!isNaN(j) && !isNaN(k)) {
				d += k;
				e += j * j;
				f += j;
				g += j * k;
				++h;
			}
		}
		if (h < 2) {
			return null;
		}
		var l = (d * e - f * g) / (h * e - f * f);
		var m = (h * g - f * d) / (h * e - f * f);
		return (function () { var $ret = new Array();
		$ret.add(l);
		$ret.add(m); return $ret;}());
	}

, 
	k: function (a, b) {
		if (a.length != 2) {
			return NaN;
		}
		return a[0] + a[1] * b;
	}

, 
	l: function () {
		var $self = this;
		var a = new $.ig.Random();
		var b = new Array(2);
		for (var c = 0; c < b.length; ++c) {
			b[c] = 10 * a.a();
		}
		var d = new $.ig.List$1(Number, 0);
		var e = new $.ig.List$1(Number, 0);
		for (var f = -100; f < 100; ++f) {
			var g = f;
			var h = $.ig.LeastSquaresFit.prototype.k(b, g);
			if (!isNaN(h)) {
				d.add(g);
				e.add(h);
			}
		}
		var k = $.ig.LeastSquaresFit.prototype.j(d.count(), function (i) {
	return d.__inner[i];
}, function (j) {
	return e.__inner[j];
});
		for (var l = 0; l < b.length; ++l) {
			if (Math.abs(b[l] - k[l]) > 0.0001) {
			}
		}
		return true;
	}

, 
	m: function (a, b, c) {
		var $self = this;
		var d = 0;
		var e = 0;
		var f = 0;
		var g = 0;
		var h = 0;
		for (var i = 0; i < a; ++i) {
			var j = b(i);
			var k = c(i);
			if (!isNaN(j) && !isNaN(k) && j > 0) {
				var l = Math.log(j);
				d += k * l;
				e += k;
				f += l;
				g += l * l;
				++h;
			}
		}
		if (h < 2) {
			return null;
		}
		var m = (h * d - e * f) / (h * g - f * f);
		var n = (e - m * f) / h;
		return (function () { var $ret = new Array();
		$ret.add(n);
		$ret.add(m); return $ret;}());
	}

, 
	n: function (a, b) {
		if (a.length != 2 || b < 0 || Number.isInfinity(b) || isNaN(b)) {
			return NaN;
		}
		return a[0] + a[1] * Math.log(b);
	}

, 
	o: function () {
		var $self = this;
		var a = new $.ig.Random();
		var b = new Array(2);
		for (var c = 0; c < b.length; ++c) {
			b[c] = 10 * a.a();
		}
		var d = new $.ig.List$1(Number, 0);
		var e = new $.ig.List$1(Number, 0);
		for (var f = 1; f < 100; ++f) {
			var g = f;
			var h = $.ig.LeastSquaresFit.prototype.n(b, g);
			if (!isNaN(h)) {
				d.add(g);
				e.add(h);
			}
		}
		var k = $.ig.LeastSquaresFit.prototype.m(d.count(), function (i) {
	return d.__inner[i];
}, function (j) {
	return e.__inner[j];
});
		for (var l = 0; l < b.length; ++l) {
			if (Math.abs(b[l] - k[l]) > 0.0001) {
			}
		}
		return true;
	}

, 
	p: function (a, b, c) {
		var $self = this;
		var d = 0;
		var e = 0;
		var f = 0;
		var g = 0;
		var h = 0;
		var i = 0;
		for (var j = 0; j < a; ++j) {
			var k = b(j);
			var l = c(j);
			if (!isNaN(k) && !isNaN(l) && l > 0) {
				var m = Math.log(l);
				d += k * k * l;
				e += l * m;
				f += k * l;
				g += k * l * m;
				h += l;
				++i;
			}
		}
		if (i < 2) {
			return null;
		}
		var n = (d * e - f * g) / (h * d - f * f);
		var o = (h * g - f * e) / (h * d - f * f);
		return (function () { var $ret = new Array();
		$ret.add(Math.exp(n));
		$ret.add(o); return $ret;}());
	}

, 
	q: function (a, b) {
		if (a.length != 2 || b < 0 || Number.isInfinity(b) || isNaN(b)) {
			return NaN;
		}
		return a[0] * Math.exp(a[1] * b);
	}

, 
	r: function () {
		var $self = this;
		var a = new $.ig.Random();
		var b = new Array(2);
		for (var c = 0; c < b.length; ++c) {
			b[c] = 2 * a.a();
		}
		var d = new $.ig.List$1(Number, 0);
		var e = new $.ig.List$1(Number, 0);
		for (var f = 1; f < 100; ++f) {
			var g = f;
			var h = $.ig.LeastSquaresFit.prototype.q(b, g);
			if (!isNaN(h)) {
				d.add(g);
				e.add(h);
			}
		}
		var k = $.ig.LeastSquaresFit.prototype.p(d.count(), function (i) {
	return d.__inner[i];
}, function (j) {
	return e.__inner[j];
});
		for (var l = 0; l < b.length; ++l) {
			if (Math.abs(b[l] - k[l]) > 0.0001) {
				return false;
			}
		}
		return true;
	}

, 
	s: function (a, b, c) {
		var $self = this;
		var d = 0;
		var e = 0;
		var f = 0;
		var g = 0;
		var h = 0;
		for (var i = 0; i < a; ++i) {
			var j = b(i);
			var k = c(i);
			if (!isNaN(j) && !isNaN(k) && j > 0 && k > 0) {
				var l = Math.log(b(i));
				var m = Math.log(c(i));
				d += l * m;
				e += l;
				f += m;
				g += l * l;
				++h;
			}
		}
		if (h < 2) {
			return null;
		}
		var n = (h * d - e * f) / (h * g - e * e);
		var o = Math.exp((f - n * e) / h);
		return (function () { var $ret = new Array();
		$ret.add(o);
		$ret.add(n); return $ret;}());
	}

, 
	t: function (a, b) {
		if (a.length != 2 || b < 0 || Number.isInfinity(b) || isNaN(b)) {
			return NaN;
		}
		return a[0] * Math.pow(b, a[1]);
	}

, 
	u: function () {
		var $self = this;
		var a = new $.ig.Random();
		var b = new Array(2);
		for (var c = 0; c < b.length; ++c) {
			b[c] = 10 * a.a();
		}
		var d = new $.ig.List$1(Number, 0);
		var e = new $.ig.List$1(Number, 0);
		for (var f = -100; f < 100; ++f) {
			d.add(f);
			e.add($.ig.LeastSquaresFit.prototype.t(b, f));
		}
		var i = $.ig.LeastSquaresFit.prototype.s(d.count(), function (g) {
	return d.__inner[g];
}, function (h) {
	return e.__inner[h];
});
		for (var j = 0; j < b.length; ++j) {
			if (Math.abs(b[j] - i[j]) > 0.0001) {
				return false;
			}
		}
		return true;
	}

, 
	v: function (a, b, c) {
		return $.ig.LeastSquaresFit.prototype.ah(a, 2, b, c);
	}

, 
	w: function (a, b) {
		return $.ig.LeastSquaresFit.prototype.ai(a, b);
	}

, 
	x: function () {
		return $.ig.LeastSquaresFit.prototype.aj(2);
	}

, 
	y: function (a, b, c) {
		return $.ig.LeastSquaresFit.prototype.ah(a, 3, b, c);
	}

, 
	z: function (a, b) {
		return $.ig.LeastSquaresFit.prototype.ai(a, b);
	}

, 
	aa: function () {
		return $.ig.LeastSquaresFit.prototype.aj(3);
	}

, 
	ab: function (a, b, c) {
		return $.ig.LeastSquaresFit.prototype.ah(a, 4, b, c);
	}

, 
	ac: function (a, b) {
		return $.ig.LeastSquaresFit.prototype.ai(a, b);
	}

, 
	ad: function () {
		return $.ig.LeastSquaresFit.prototype.aj(4);
	}

, 
	ae: function (a, b, c) {
		return $.ig.LeastSquaresFit.prototype.ah(a, 5, b, c);
	}

, 
	af: function (a, b) {
		return $.ig.LeastSquaresFit.prototype.ai(a, b);
	}

, 
	ag: function () {
		return $.ig.LeastSquaresFit.prototype.aj(5);
	}

, 
	ah: function (a, b, c, d) {
		var $self = this;
		var e = new Array(1 + 2 * b);
		for (var f = 0; f < e.length; f++) {
			e[f] = 0;
		}
		var g = (function () { var $ret = new Array(b + 1); var $currRet = $ret; for (var $rankInit = 0; $rankInit < b + 1; $rankInit++) { $currRet[$rankInit] = new Array(b + 1); }; return $ret;}());
		var h = new Array(b + 1);
		for (var i = 0; i < h.length; i++) {
			h[i] = 0;
		}
		var j = 0;
		for (var k = 0; k < a; ++k) {
			var l = 1;
			var m = c(k);
			if (!isNaN(m) && !isNaN(d(k))) {
				for (var n = 0; n < e.length; ++n) {
					e[n] += l;
					l *= m;
					++j;
				}
			}
		}
		if (j < b) {
			return null;
		}
		for (var o = 0; o <= b; ++o) {
			for (var p = 0; p <= b; ++p) {
				g[o][p] = e[o + p];
			}
		}
		for (var q = 0; q < a; ++q) {
			var r = c(q);
			var s = d(q);
			if (!isNaN(r) && !isNaN(s)) {
				for (var t = 0; t <= b; ++t) {
					h[t] += (Math.pow(r, t) * s);
				}
			}
		}
		return $.ig.Numeric.prototype.b(g, h) ? h : null;
	}

, 
	ai: function (a, b) {
		if (a.length < 1 || Number.isInfinity(b) || isNaN(b)) {
			return NaN;
		}
		var c = 0;
		for (var d = 0; d < a.length; ++d) {
			c += a[d] * Math.pow(b, d);
		}
		return c;
	}

, 
	aj: function (a) {
		var $self = this;
		var b = new $.ig.Random();
		var c = new Array(a + 1);
		for (var d = 0; d < c.length; ++d) {
			c[d] = 2 * b.a();
		}
		var e = new $.ig.List$1(Number, 0);
		var f = new $.ig.List$1(Number, 0);
		for (var g = -100; g < 100; ++g) {
			var h = g;
			var i = $.ig.LeastSquaresFit.prototype.ai(c, h);
			if (!isNaN(i)) {
				e.add(h);
				f.add(i);
			}
		}
		var l = $.ig.LeastSquaresFit.prototype.ah(e.count(), a, function (j) {
	return e.__inner[j];
}, function (k) {
	return f.__inner[k];
});
		for (var m = 0; m < a; ++m) {
			if (Math.abs(c[m] - l[m]) > 0.0001) {
				return false;
			}
		}
		return true;
	}
,
	$type: new $.ig.Type('LeastSquaresFit', $.ig.Numeric.prototype.$type)
}, true);


















$.ig.UnknownValuePlotting.prototype.linearInterpolate = 0;
$.ig.UnknownValuePlotting.prototype.dontPlot = 1;

$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.List$1, $.ig.ReadOnlyCollection$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);
$.ig.util.extCopy($.ig.ColorUtil, [[[$.ig.Color], ['getInterpolation', 'getLightened', 'getAHSL', 'getAHSV']]]);
$.ig.util.extCopy($.ig.Extensions, [[[$.ig.PathGeometry], ['reset']], [[$.ig.GeometryGroup], ['reset1']], [[$.ig.FrameworkElement], ['detach']], [[$.ig.Panel], ['transferChildrenTo']], [[$.ig.Point], ['isPlottable']], [[$.ig.Rect], ['isPlottable1']]]);
$.ig.util.extCopy($.ig.PathFigureUtil, [[[$.ig.PathFigureCollection], ['duplicate']], [[$.ig.PathFigure], ['duplicate1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.List$1, $.ig.ReadOnlyCollection$1], ['flattenTo', 'getBounds2', 'clipTo']], [[$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.List$1], ['getBounds3', 'getBounds41', 'toPointCollections']]]);
$.ig.util.extCopy($.ig.RectUtil, [[[$.ig.Rect], ['getCenter', 'getArea', 'duplicate', 'getLeader', 'getDistanceSquared', 'getDistanceSquared11', 'getDistanceSquared22', 'contains3', 'intersectsWith1', 'intersectionArea', 'getInflated', 'inflate', 'inflate11', 'round', 'isNull']]]);
$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.FastItemsSource, $.ig.EdgeClipper, $.ig.RearrangedList$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.FastItemsSource, $.ig.EdgeClipper, $.ig.RearrangedList$1], ['asQueryable']]]);




// Declare empty types
$.ig = $.ig || {};
$.ig.util.bulkDefine(["AxisLabelPanelBaseView", 
"AngleAxisLabelPanelView", 
"AxisLabelPanelBase", 
"AngleAxisLabelPanel", 
"AutoRangeCalculator", 
"Axis", 
"AxisCollection", 
"AxisComponentsForView", 
"AxisComponentsFromView", 
"AxisLabelInfo", 
"AxisLabelManager", 
"LabelPosition", 
"AxisLabelSettings", 
"AxisRange", 
"Snapper", 
"LinearNumericSnapper", 
"LogarithmicNumericSnapper", 
"LinearCategorySnapper", 
"AxisView", 
"IScaler", 
"ICategoryScaler", 
"CategoryAxisBase", 
"IAngleScaler", 
"CategoryAngleAxis", 
"CategoryAxisBaseView", 
"CategoryAngleAxisView", 
"ISortingAxis", 
"CategoryDateTimeXAxis", 
"CategoryDateTimeXAxisView", 
"AxisRenderingParametersBase", 
"CategoryAxisRenderingParameters", 
"AxisRendererBase", 
"CategoryAxisRenderer", 
"CategoryXAxis", 
"CategoryXAxisView", 
"CategoryYAxis", 
"CategoryYAxisView", 
"HorizontalAxisLabelPanelBase", 
"HorizontalAxisLabelPanel", 
"HorizontalAxisLabelPanelBaseView", 
"NumericAxisBase", 
"NumericAngleAxis", 
"NumericAxisBaseView", 
"NumericAngleAxisView", 
"StraightNumericAxisBase", 
"NumericRadiusAxis", 
"NumericRadiusAxisView", 
"NumericXAxis", 
"StraightNumericAxisBaseView", 
"NumericXAxisView", 
"NumericYAxis", 
"NumericYAxisView", 
"PolarAxes", 
"PolarAxisRenderingManager", 
"IPolarRadialRenderingParameters", 
"NumericAxisRenderingParameters", 
"PolarAxisRenderingParameters", 
"RadialAxisRenderingParameters", 
"RadialAxes", 
"RadialAxisLabelPanel", 
"RadialAxisLabelPanelView", 
"GetSnapperInfoStrategy", 
"NumericAxisRenderer", 
"RangeInfo", 
"NumericScaler", 
"LinearScaler", 
"HorizontalLinearScaler", 
"LogarithmicScaler", 
"HorizontalLogarithmicScaler", 
"NumericScaleMode", 
"ScalerParams", 
"VerticalLinearScaler", 
"VerticalLogarithmicScaler", 
"TickmarkValues", 
"CategoryTickmarkValues", 
"LinearTickmarkValues", 
"LogarithmicTickmarkValues", 
"TickmarkValuesInitializationParameters", 
"ViewportUtils", 
"FramePreparer", 
"CategoryFramePreparerBase", 
"CategoryFramePreparer", 
"BarFramePreparer", 
"BarTrendFitCalculator", 
"TrendLineManagerBase$1", 
"IPreparesCategoryTrendline", 
"CategoryTrendLineManagerBase", 
"CategoryTrendLineManager", 
"BarTrendLineManager", 
"BrushScale", 
"MarkerManagerBase", 
"BubbleMarkerManager", 
"IProvidesViewport", 
"Series", 
"MarkerSeries", 
"ISupportsErrorBars", 
"ScatterBase", 
"BubbleSeries", 
"SeriesView", 
"MarkerSeriesView", 
"ScatterBaseView", 
"BubbleSeriesView", 
"CustomPaletteBrushScale", 
"SizeScale", 
"ValueBrushScale", 
"IHasCategoryAxis", 
"IHasCategoryModePreference", 
"CategorySeries", 
"IIsCategoryBased", 
"IHasSingleValueCategory", 
"IHasTrendline", 
"IHasCategoryTrendline", 
"AnchoredCategorySeries", 
"VerticalAnchoredCategorySeries", 
"IBarSeries", 
"BarSeries", 
"ISupportsMarkers", 
"CategorySeriesView", 
"AnchoredCategorySeriesView", 
"BarSeriesView", 
"IBucketizer", 
"CategoryBucketCalculator", 
"AnchoredCategoryBucketCalculator", 
"BarBucketCalculator", 
"RangeCategoryBucketCalculator", 
"HorizontalAnchoredCategorySeries", 
"PointSeries", 
"PointSeriesView", 
"IHasHighLowValueCategory", 
"RangeCategorySeries", 
"HorizontalRangeCategorySeries", 
"RangeAreaSeries", 
"RangeCategorySeriesView", 
"RangeAreaSeriesView", 
"RangeCategoryFramePreparer", 
"ValuesHolder", 
"HighLowValuesHolder", 
"DefaultHighLowValueProvider", 
"RangeColumnSeries", 
"RangeColumnSeriesView", 
"SplineSeriesBaseView", 
"SplineAreaSeriesView", 
"VerticalAxisLabelPanel", 
"VerticalAxisLabelPanelView", 
"AreaSeries", 
"AreaSeriesView", 
"Frame", 
"CategoryFrame", 
"SingleValuesHolder", 
"DefaultSingleValueProvider", 
"PreparationParams", 
"CategoryLineRasterizer", 
"ColumnSeries", 
"ColumnSeriesView", 
"DefaultSupportsMarkers", 
"DefaultProvidesViewport", 
"DefaultSupportsErrorBars", 
"LineSeries", 
"LineSeriesView", 
"SplineSeriesBase", 
"SplineAreaSeries", 
"SplineSeries", 
"SplineSeriesView", 
"StepAreaSeries", 
"StepAreaSeriesView", 
"StepLineSeries", 
"StepLineSeriesView", 
"WaterfallSeries", 
"WaterfallSeriesView", 
"MarkerTemplates", 
"DataSourceManager", 
"BrushSelectionMode", 
"IndicatorDisplayType", 
"TimeAxisDisplayType", 
"ChartAxisRangeChangedEventArgs", 
"DataChartAxisRangeChangedEventHandler", 
"FinancialSeries", 
"FinancialIndicator", 
"StrategyBasedIndicator", 
"AbsoluteVolumeOscillatorIndicator", 
"IndicatorCalculationStrategy", 
"AbsoluteVolumeOscillatorIndicatorStrategy", 
"AccumulationDistributionIndicator", 
"StreamingIndicatorCalculationStrategy", 
"AccumulationDistributionIndicatorStrategy", 
"AverageDirectionalIndexIndicator", 
"AverageDirectionalIndexIndicatorStrategy", 
"AverageTrueRangeIndicator", 
"AverageTrueRangeIndicatorStrategy", 
"FinancialOverlay", 
"BollingerBandsOverlay", 
"FinancialBucketCalculator", 
"BollingerBandsBucketCalculator", 
"FinancialSeriesView", 
"BollingerBandsOverlayView", 
"BollingerBandWidthIndicator", 
"BollingerBandWidthIndicatorStrategy", 
"ChaikinOscillatorIndicator", 
"ChaikinOscillatorIndicatorStrategy", 
"ChaikinVolatilityIndicator", 
"ChaikinVolatilityIndicatorStrategy", 
"CommodityChannelIndexIndicator", 
"CommodityChannelIndexIndicatorStrategy", 
"CustomIndicator", 
"CustomIndicatorStrategy", 
"PriceChannelOverlayView", 
"DetrendedPriceOscillatorIndicator", 
"DetrendedPriceOscillatorIndicatorStrategy", 
"EaseOfMovementIndicator", 
"EaseOfMovementIndicatorStrategy", 
"FastStochasticOscillatorIndicator", 
"FastStochasticOscillatorIndicatorStrategy", 
"FinancialIndicatorBucketCalculator", 
"FinancialIndicatorView", 
"ForceIndexIndicator", 
"ForceIndexIndicatorStrategy", 
"FullStochasticOscillatorIndicator", 
"FullStochasticOscillatorIndicatorStrategy", 
"PercentKCalculationStrategy", 
"IndicatorRenderer", 
"ItemwiseIndicatorCalculationStrategy", 
"ItemwiseStrategyBasedIndicator", 
"ItemwiseStrategyCalculationStrategy", 
"MarketFacilitationIndexIndicator", 
"MarketFacilitationIndexIndicatorStrategy", 
"MassIndexIndicator", 
"MassIndexIndicatorStrategy", 
"MedianPriceIndicator", 
"MedianPriceIndicatorStrategy", 
"MoneyFlowIndexIndicator", 
"MoneyFlowIndexIndicatorStrategy", 
"MovingAverageConvergenceDivergenceIndicator", 
"MovingAverageConvergenceDivergenceIndicatorStrategy", 
"NegativeVolumeIndexIndicator", 
"NegativeVolumeIndexIndicatorStrategy", 
"OnBalanceVolumeIndicator", 
"OnBalanceVolumeIndicatorStrategy", 
"PercentagePriceOscillatorIndicator", 
"PercentagePriceOscillatorIndicatorStrategy", 
"PercentageVolumeOscillatorIndicator", 
"PercentageVolumeOscillatorIndicatorStrategy", 
"PositiveVolumeIndexIndicator", 
"PositiveVolumeIndexIndicatorStrategy", 
"PriceChannelOverlay", 
"PriceChannelBucketCalculator", 
"PriceVolumeTrendIndicator", 
"PriceVolumeTrendIndicatorStrategy", 
"RateOfChangeAndMomentumIndicator", 
"RateOfChangeAndMomentumIndicatorStrategy", 
"RelativeStrengthIndexIndicator", 
"RelativeStrengthIndexIndicatorStrategy", 
"SlowStochasticOscillatorIndicator", 
"SlowStochasticOscillatorIndicatorStrategy", 
"StandardDeviationIndicator", 
"StandardDeviationIndicatorStrategy", 
"StochRSIIndicator", 
"StochRSIIndicatorStrategy", 
"TRIXIndicator", 
"TRIXIndicatorStrategy", 
"TypicalPriceIndicator", 
"TypicalPriceIndicatorStrategy", 
"UltimateOscillatorIndicator", 
"UltimateOscillatorIndicatorCalculationStrategy", 
"WeightedCloseIndicator", 
"WeightedCloseIndicatorStrategy", 
"WilliamsPercentRIndicator", 
"WilliamsPercentRIndicatorStrategy", 
"LegendBaseViewManager", 
"LegendBase", 
"ScaleLegend", 
"LegendBaseView", 
"ScaleLegendView", 
"GradientData", 
"GradientStopData", 
"PieChartViewManager", 
"HighDensityScatterSeries", 
"MouseMoveThunk", 
"ScatterMouseOverEventArgs", 
"ProgressiveLoadStatusEventArgs", 
"HighDensityScatterSeriesView", 
"KDTree2D", 
"KNearestResults", 
"KNearestResult", 
"KDTreeThunk", 
"SearchArgs", 
"KDTreeNode2D", 
"SearchData", 
"PointData", 
"ScatterLineSeries", 
"ScatterLineSeriesView", 
"SeriesViewerComponentsForView", 
"SeriesViewerComponentsFromView", 
"SeriesViewer", 
"XamDataChart", 
"SeriesViewerView", 
"XamDataChartView", 
"ChartCollection", 
"ChartContentManager", 
"ContentInfo", 
"ChartContentType", 
"DataContext", 
"PieSliceDataContext", 
"LabelPanelArranger", 
"LabelPanelsArrangeState", 
"LegendTemplates", 
"Marker", 
"CollisionAvoidanceType", 
"NumericMarkerManager", 
"CategoryMarkerManager", 
"MarkerManagerBucket", 
"PathRenderer", 
"NaNSegmenter", 
"IFlattener", 
"DefaultFlattener", 
"RenderSurface", 
"SeriesCollection", 
"SeriesComponentsForView", 
"SeriesComponentsFromView", 
"SeriesRenderingArguments", 
"SeriesRenderer$2", 
"IFastItemsSourceProvider", 
"SyncLink", 
"FastItemsSourceReference", 
"SyncSettings", 
"SyncSettingsConverter", 
"SyncLinkManager", 
"SyncManager", 
"DefaultCategoryTrendlineHost", 
"DefaultCategoryTrendlinePreparer", 
"TrendResolutionParams", 
"TrendFitCalculator", 
"TrendAverageCalculator", 
"PolarTrendLineManager", 
"RadialTrendLineManager", 
"ScatterTrendLineManager", 
"SortingTrendLineManager", 
"AxisLabelsLocation", 
"CategoryMode", 
"AxisOrientation", 
"GridMode", 
"LabelsPosition", 
"MarkerType", 
"OthersCategoryType", 
"PriceDisplayType", 
"SplineType", 
"WindowMode", 
"WindowResponse", 
"ErrorBarSettingsBase", 
"CategoryErrorBarSettings", 
"EnableErrorBars", 
"ErrorBarsHelper", 
"ScatterErrorBarSettings", 
"AxisRangeChangedEventArgs", 
"AxisRangeChangedEventHandler", 
"DataChartMouseButtonEventArgs", 
"DataChartMouseButtonEventHandler", 
"DataChartLegendMouseButtonEventArgs", 
"DataChartLegendMouseButtonEventHandler", 
"ChartMouseEventArgs", 
"DataChartMouseEventHandler", 
"ChartLegendMouseEventArgs", 
"DataChartLegendMouseEventHandler", 
"ChartCursorEventArgs", 
"DataChartCursorEventHandler", 
"FinancialEventArgs", 
"FinancialEventHandler", 
"PropertyUpdatedEventArgs", 
"PropertyUpdatedEventHandler", 
"SliceClickEventArgs", 
"SliceClickEventHandler", 
"FinancialPriceSeries", 
"FinancialPriceBucketCalculator", 
"FinancialPriceSeriesView", 
"FinancialCalculationDataSource", 
"FinancialCalculationSupportingCalculations", 
"SupportingCalculation$1", 
"SupportingCalculationStrategy", 
"ColumnSupportingCalculation", 
"ProvideColumnValuesStrategy", 
"DataSourceSupportingCalculation", 
"CalculatedColumn", 
"ItemLegend", 
"ItemLegendView", 
"Legend", 
"LegendView", 
"PieChartBase", 
"PieLabel", 
"IndexCollection", 
"IndexCollectionTypeConverter", 
"PieChartBaseView", 
"Slice", 
"SliceView", 
"XamPieChart", 
"XamPieChartView", 
"PolarBase", 
"PolarLineSeriesBase", 
"PolarAreaSeries", 
"PolarBaseView", 
"PolarLineSeriesBaseView", 
"PolarAreaSeriesView", 
"PolarAxisInfoCache", 
"ScatterFrameBase$1", 
"PolarFrame", 
"AngleRadiusPair", 
"PolarLinePlanner", 
"PolarLineSeries", 
"PolarLineSeriesView", 
"PolarScatterSeries", 
"PolarScatterSeriesView", 
"PolarSplineAreaSeries", 
"PolarSplineAreaSeriesView", 
"PolarSplineSeries", 
"PolarSplineSeriesView", 
"RadialBase", 
"AnchoredRadialSeries", 
"RadialBucketCalculator", 
"AnchoredRadialBucketCalculator", 
"RadialBaseView", 
"AnchoredRadialSeriesView", 
"RadialFrame", 
"RadialColumnSeries", 
"RadialColumnSeriesView", 
"RadialLineSeries", 
"RadialLineSeriesView", 
"RadialPieSeries", 
"SliceCoords", 
"RadialPieSeriesView", 
"ScatterAxisInfoCache", 
"DictInterpolator$3", 
"OwnedPoint", 
"ScatterFrame", 
"ScatterSeries", 
"ScatterSeriesView", 
"CoercionInfo", 
"SeriesViewerSurfaceViewer", 
"OverviewPlusDetailViewportHost", 
"SeriesViewerViewManager", 
"Bezier", 
"BezierPointComparison", 
"BezierOp", 
"BezierPoint", 
"ChartVisualData", 
"SeriesVisualDataList", 
"SeriesVisualData", 
"MarkerVisualDataList", 
"MarkerVisualData", 
"AxisVisualDataList", 
"AxisVisualData", 
"PrimitiveVisualDataList", 
"AxisLabelVisualDataList", 
"AxisLabelVisualData", 
"LabelAppearanceData", 
"PrimitiveAppearanceData", 
"GetPointsSettings", 
"PrimitiveVisualData", 
"RectangleVisualData", 
"ShapeTags", 
"LineVisualData", 
"PolyLineVisualData", 
"PolygonVisualData", 
"PathVisualData", 
"GeometryData", 
"PathGeometryData", 
"LineGeometryData", 
"RectangleGeometryData", 
"EllipseGeometryData", 
"PathFigureData", 
"SegmentData", 
"LineSegmentData", 
"PolylineSegmentData", 
"ArcSegmentData", 
"AppearanceHelper", 
"IDetectsCollisions", 
"CollisionAvoider", 
"ColumnUtil", 
"IPool$1", 
"IIndexedPool$1", 
"Pool$1", 
"IHashPool$2", 
"HashPool$2", 
"SafeEnumerable", 
"SafeReadOnlyDoubleCollection", 
"SafeSortedReadOnlyDoubleCollection", 
"SortedListView$1", 
"Object", 
"MulticastDelegate", 
"Action", 
"Action$1", 
"Action$2", 
"Action$3", 
"Action$4", 
"Action$5", 
"Action$6", 
"Action$7", 
"Action$8", 
"IEqualityComparer$1", 
"IEnumerable", 
"ICollection", 
"IDictionary", 
"IList", 
"Array", 
"Array", 
"Comparison$1", 
"Attribute", 
"BrowsableAttribute", 
"EventArgs", 
"CancelEventArgs", 
"DesignTimeVisibleAttribute", 
"EditorBrowsableAttribute", 
"ValueType", 
"Enum", 
"EditorBrowsableState", 
"ISupportInitialize", 
"ITypeDescriptorContext", 
"TypeConverter", 
"TypeConverterAttribute", 
"Error", 
"IFormatProvider", 
"NotSupportedException", 
"ObsoleteAttribute", 
"MemberInfo", 
"MethodBase", 
"ConstructorInfo", 
"IComparable", 
"Date", 
"Number", 
"SuppressMessageAttribute", 
"EventHandler$1", 
"PlaceholderSystemCollectionsObjectModel", 
"PlaceholderSystemCollectionsSpecialized", 
"PlaceholderSystemWindows", 
"PlaceholderSystemWindowsControls", 
"PlaceholderSystemWindowsData", 
"PlaceholderSystemWindowsInput", 
"PlaceholderSystemWindowsMarkup", 
"PlaceholderSystemWindowsMediaImaging", 
"PlaceholderSystemWindowsShapes", 
"PlaceholderSystemWindowsControlsPrimitives", 
"PlaceholderSystemWindowsAutomation", 
"PlaceholderSystemWindowsAutomationPeers", 
"PlaceholderSystemText", 
"PlaceholderSystemGlobalization", 
"PlaceholderSystemWindowsDocuments", 
"PlaceholderSystemWindowsInk", 
"PlaceholderSystemWindowsMediaAnimation", 
"PlaceholderSystemWindowsMediaEffects", 
"PlaceholderSystemWindowsThreading", 
"PlaceholderInfragisticsControlerChartsAutomationPeers", 
"FlagsAttribute", 
"Func$1", 
"Func$2", 
"Func$3", 
"Func$4", 
"Func$5", 
"Func$6", 
"Func$7", 
"Func$8", 
"Func$9", 
"Math", 
"XMLHttpRequest", 
"Nullable$1", 
"Number", 
"ParamArrayAttribute", 
"Array", 
"AttributeTargets", 
"AttributeUsageAttribute", 
"Boolean", 
"Number", 
"String", 
"Array", 
"CompareCallback", 
"Dictionary", 
"DictionaryEntry", 
"IEnumerator", 
"INotifyPropertyChanged", 
"PropertyChangedEventArgs", 
"PropertyChangedEventHandler", 
"CultureInfo", 
"Delegate", 
"Number", 
"IDisposable", 
"Number", 
"Number", 
"Number", 
"IntPtr", 
"ReflectionUtil", 
"AssemblyTitleAttribute", 
"AssemblyCompanyAttribute", 
"AssemblyConfigurationAttribute", 
"AssemblyCopyrightAttribute", 
"AssemblyCultureAttribute", 
"AssemblyDescriptionAttribute", 
"AssemblyFileVersionAttribute", 
"AssemblyProductAttribute", 
"AssemblyTrademarkAttribute", 
"AssemblyVersionAttribute", 
"DefaultMemberAttribute", 
"MethodInfo", 
"ParameterInfo", 
"PropertyInfo", 
"RuntimeFieldHandle", 
"RuntimeTypeHandle", 
"ClientScriptAttribute", 
"ClientNameAttribute", 
"DontObfuscateAttribute", 
"EmitIgnoreTypeAttribute", 
"ExtensionAttribute", 
"GlobalMemberAttribute", 
"IgnoreAttribute", 
"InlineItemAccessAttribute", 
"InlinePropertyAttribute", 
"InternalsVisibleToAttribute", 
"KeepOriginalNameAttribute", 
"LiteralStringAttribute", 
"NativeMethodAttribute", 
"NativePropertyAttribute", 
"NativeTypeAttribute", 
"RuntimeHelpers", 
"WeakAttribute", 
"WidgetAttribute", 
"MainWidgetAttribute", 
"SuppressWidgetMemberAttribute", 
"SuppressWidgetMemberCopyAttribute", 
"WidgetDefaultStringAttribute", 
"WidgetDefaultNumberAttribute", 
"WidgetDefaultBooleanAttribute", 
"MvcEnumSetStringEnumAttribute", 
"WidgetModuleAttribute", 
"WidgetModuleParentAttribute", 
"WidgetIgnoreDependsAttribute", 
"ComVisibleAttribute", 
"GuidAttribute", 
"OutAttribute", 
"DataContractAttribute", 
"DataMemberAttribute", 
"WaitHandle", 
"EventWaitHandle", 
"Monitor", 
"TypeCode", 
"TargetFrameworkAttribute", 
"Number", 
"Script", 
"Single", 
"String", 
"ManualResetEvent", 
"Thread", 
"Date", 
"Type", 
"Number", 
"Number", 
"Number", 
"UIntPtr", 
"XmlAttributeAttribute", 
"XmlElementAttribute", 
"XmlEnumAttribute", 
"XmlIgnoreAttribute", 
"XmlRootAttribute", 
"XmlTypeAttribute", 
"XmlNode", 
"XmlAttribute", 
"XmlDocument", 
"XmlDocumentParser", 
"XmlLinkedNode", 
"XmlElement", 
"Void", 
"XmlNodeList", 
"XmlNamedNodeMap", 
"XmlNodeType", 
"XmlSchemaForm", 
"AbstractEnumerable", 
"AbstractEnumerator", 
"IEnumerable$1", 
"ICollection$1", 
"IList$1", 
"IArrayList", 
"List$1", 
"Collection$1", 
"IDictionary$2", 
"Dictionary$2", 
"GenericEnumerable$1", 
"IEnumerator$1", 
"GenericEnumerator$1", 
"INotifyCollectionChanged", 
"NotifyCollectionChangedEventHandler", 
"NotifyCollectionChangedEventArgs", 
"NotifyCollectionChangedAction", 
"KeyValuePair$2", 
"LinkedList$1", 
"LinkedListNode$1", 
"ObservableCollection$1", 
"Queue$1", 
"ReadOnlyCollection$1", 
"ReadOnlyObservableCollection$1", 
"NameValueCollection", 
"Stack$1", 
"IComparer$1", 
"Expression", 
"MemberExpression", 
"ParameterExpression", 
"LambdaExpression", 
"MethodCallExpression", 
"IOrderedEnumerable$1", 
"Queryable", 
"Enumerable", 
"SortedList$1", 
"IGrouping$2", 
"IArray", 
"DependencyObject", 
"Test", 
"IQueryable", 
"IQueryable$1", 
"IQueryProvider", 
"Activator", 
"AggregateException", 
"ArgumentException", 
"ArgumentNullException", 
"ArgumentOutOfRangeException", 
"AsyncCompletedEventArgs", 
"AsyncCompletedEventHandler", 
"ListSortDirection", 
"Convert", 
"Environment", 
"InvalidOperationException", 
"Debug", 
"IEquatable$1", 
"BinaryReader", 
"ICredentials", 
"NetworkCredential", 
"UploadStringCompletedEventHandler", 
"UploadStringCompletedEventArgs", 
"WebClient", 
"WebHeaderCollection", 
"FaultCode", 
"FaultException", 
"FaultException$1", 
"FaultReason", 
"StringBuilder", 
"BinaryFileDownloader", 
"NotImplementedException", 
"Random", 
"Encoding", 
"UTF8Encoding", 
"Task", 
"Task$1", 
"TaskCompletionSource$1", 
"TaskFactory", 
"TaskStatus", 
"Tuple$2", 
"Uri", 
"JavaScriptSerializer", 
"UIElement", 
"UIElementCollection", 
"FrameworkElement", 
"Control", 
"ContentControl", 
"Panel", 
"Canvas", 
"Image", 
"TextBlock", 
"DataTemplate", 
"DataTemplatePassInfo", 
"DataTemplateMeasureInfo", 
"DataTemplateRenderInfo", 
"DataTemplateRenderHandler", 
"DataTemplateMeasureHandler", 
"DataTemplatePassHandler", 
"Binding", 
"DependencyProperty", 
"UnsetValue", 
"DependencyPropertiesCollection", 
"DependencyPropertyChangedEventArgs", 
"Key", 
"ModifierKeys", 
"MouseEventArgs", 
"MouseButtonEventArgs", 
"Brush", 
"Color", 
"DoubleCollection", 
"GeometryType", 
"Geometry", 
"GeometryCollection", 
"GeometryGroup", 
"LineGeometry", 
"RectangleGeometry", 
"EllipseGeometry", 
"PathGeometry", 
"PathFigure", 
"PathFigureCollection", 
"PathSegmentType", 
"PathSegment", 
"PathSegmentCollection", 
"LineSegment", 
"BezierSegment", 
"PolyBezierSegment", 
"PolyLineSegment", 
"ArcSegment", 
"SweepDirection", 
"PenLineCap", 
"Transform", 
"RotateTransform", 
"TranslateTransform", 
"TransformGroup", 
"TransformCollection", 
"Point", 
"PointCollection", 
"PropertyChangedCallback", 
"CoerceValueCallback", 
"PropertyMetadata", 
"PropertyPath", 
"Rect", 
"Shape", 
"Line", 
"Path", 
"Polygon", 
"Polyline", 
"Rectangle", 
"Size", 
"Style", 
"StyleTypedPropertyAttribute", 
"TemplatePartAttribute", 
"TemplateVisualStateAttribute", 
"Visibility", 
"XObject", 
"XAttribute", 
"XNode", 
"XContainer", 
"XDocument", 
"XElement", 
"XmlUtils", 
"XName", 
"XNamespace", 
"Element", 
"CanvasElement", 
"console", 
"DivElement", 
"Document", 
"ElementAttribute", 
"ElementAttributeCollection", 
"ElementCollection", 
"ElementEventHandler", 
"ElementNodeType", 
"EventListener", 
"IElementEventHandler", 
"ImageElement", 
"CanvasContext", 
"CanvasContext2D", 
"ImageData", 
"Gradient", 
"TextMetrics", 
"MSGesture", 
"WebStyle", 
"window", 
"Callback", 
"JQuery", 
"JQueryDeferred", 
"JQueryEvent", 
"JQueryObject", 
"JQueryCallback", 
"JQueryUICallback", 
"JQueryPosition", 
"JQueryPromise", 
"BrushCollection", 
"EventProxy", 
"DOMEventProxy", 
"TrendCalculators", 
"TrendLineType", 
"UnknownValuePlotting", 
"ErrorBarCalculatorReference", 
"ErrorBarCalculatorType", 
"IErrorBarCalculator", 
"MouseWheelHandler", 
"GestureHandler", 
"TouchHandler", 
"ContactHandler", 
"MouseHandler", 
"MouseOverHandler", 
"KeyHandler", 
"IFastItemColumnInternal", 
"IFastItemColumnPropertyName", 
"IFastItemColumn$1", 
"FastItemColumn", 
"FastItemDateTimeColumn", 
"FastItemObjectColumn", 
"FastItemIntColumn", 
"FastItemsSource", 
"ColumnReference", 
"FastItemsSourceEventAction", 
"FastItemsSourceEventArgs", 
"FastReflectionHelper", 
"IRenderer", 
"RectChangedEventArgs", 
"RectChangedEventHandler", 
"CanvasRenderScheduler", 
"CanvasViewRenderer", 
"GradientDirection", 
"RenderingContext", 
"DependencyObjectNotifier", 
"InteractionState", 
"IOverviewPlusDetailControl", 
"ISchedulableRender", 
"NavigationSettings", 
"OverviewPlusDetailPaneMode", 
"PropertyChangedEventArgs$1", 
"XamOverviewPlusDetailPane", 
"XamOverviewPlusDetailPaneView", 
"XamOverviewPlusDetailPaneViewManager", 
"XamMultiScaleTileSource", 
"MapTileSource", 
"BingMapsTileSource", 
"CloudMadeTileSource", 
"OpenStreetMapTileSource", 
"ArrayUtil", 
"Clipper", 
"EdgeClipper", 
"LeftClipper", 
"BottomClipper", 
"RightClipper", 
"TopClipper", 
"InterpolationMode", 
"ColorUtil", 
"DoubleAnimator", 
"Extensions", 
"Flattener", 
"SpiralTodo", 
"GeometryUtil", 
"Numeric", 
"LeastSquaresFit", 
"MathUtil", 
"PathFigureUtil", 
"PointCollectionUtil", 
"PolygonUtil", 
"PolySimplification", 
"RearrangedList$1", 
"RectUtil", 
"ISmartPlaceable", 
"SmartPlaceableWrapper$1", 
"SmartPosition", 
"SmartPlacer", 
"StackPool$1", 
"Tile", 
"WriteableBitmap", 
"IMapRenderDeferralHandler", 
"XamMultiScaleImage", 
"Pair$2", 
"IEasingFunction", 
"XamMultiScaleImageView"]);



















$.ig.util.defType('AngleAxisLabelPanelView', 'AxisLabelPanelBaseView', {

	_ah: null,
	ah: function (a) {
		if (arguments.length === 1) {
			this._ah = a;
			return a;
		} else {
			return this._ah;
		}
	}

, 
		init: function (a) {


			$.ig.AxisLabelPanelBaseView.prototype.init.call(this, a);
						this.ah(a);
		}
, 
	u: function () {
		$.ig.AxisLabelPanelBaseView.prototype.u.call(this);
		this.ah().d4(true);
	}

, 
	l: function () {
		return 0;
	}

, 
	m: function () {
		return 0;
	}

, 
	ak: function (a) {
		this.ah().d6(-Number.MAX_VALUE);
		this.ah().d7(-Number.MAX_VALUE);
		for (var b = 0; b < this.g().by().count(); b++) {
			var c = this.g().by().__inner[b];
			var d = this.g().bt().__inner[b];
			var e = this.ah().d5()(d.b());
			var f = e.__x - this.v(c) / 2;
			var g = e.__y - this.t(c) / 2;
			var h = this.v(c);
			var i = this.t(c);
			this.ah().d6(Math.max(h, this.ah().d6()));
			this.ah().d7(Math.max(i, this.ah().d7()));
			var j = new $.ig.Rect(0, f, g, h, i);
			a.add(j);
		}
	}
,
	$type: new $.ig.Type('AngleAxisLabelPanelView', $.ig.AxisLabelPanelBaseView.prototype.$type)
}, true);


$.ig.util.defType('AngleAxisLabelPanel', 'AxisLabelPanelBase', {

	b6: function () {
		return new $.ig.AngleAxisLabelPanelView(this);
	}

, 
	b7: function (a) {
		$.ig.AxisLabelPanelBase.prototype.b7.call(this, a);
		this.d3(a);
	}

, 
	_d3: null,
	d3: function (a) {
		if (arguments.length === 1) {
			this._d3 = a;
			return a;
		} else {
			return this._d3;
		}
	}

, 
		init: function () {


			$.ig.AxisLabelPanelBase.prototype.init.call(this);
		}
, 
	_d4: null,
	d4: function (a) {
		if (arguments.length === 1) {
			this._d4 = a;
			return a;
		} else {
			return this._d4;
		}
	}

, 
	_d5: null,
	d5: function (a) {
		if (arguments.length === 1) {
			this._d5 = a;
			return a;
		} else {
			return this._d5;
		}
	}

, 
	da: function (a, b) {
		if (!b.isPlottable1()) {
			return false;
		}
		if (this.br() == null || this.br().c2().isEmpty()) {
			return $.ig.AxisLabelPanelBase.prototype.da.call(this, a, b);
		}
		return true;
	}

, 
	_d6: null,
	d6: function (a) {
		if (arguments.length === 1) {
			this._d6 = a;
			return a;
		} else {
			return this._d6;
		}
	}

, 
	_d7: null,
	d7: function (a) {
		if (arguments.length === 1) {
			this._d7 = a;
			return a;
		} else {
			return this._d7;
		}
	}

, 
	c6: function () {
		var a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
		if (this.by().count() != this.bt().count()) {
			return a;
		}
		this.d3().ak(a);
		var b = false;
		this.b0(this.c4(a));
		if (!this.br().e8()) {
			b = true;
			this.b5(this.d6() / 2);
			this.b5(this.b5() + this.ei());

		} else {
			b = true;
			this.d3().w();
		}
		if (b) {
			for (var c = 0; c < a.count(); c++) {
				var d = this.by().__inner[c];
				var e = this.bt().__inner[c];
				var f = a.__inner[c];
				var g = this.d5()(e.b());
				var h = g.__x - this.db(d) / 2;
				var i = g.__y - this.dc(d) / 2;
				f.x(h);
				f.y(i);
				a.__inner[c] = f;
			}
		}
		this.b0(this.c4(a));
		if (this.b0()) {
		}
		return a;
	}

, 
	ei: function () {
		var $self = this;
		var a;
		var b;
		b = this.br();
		a = null;
		if (b != null) {
			a = $.ig.util.cast($.ig.XamDataChart.prototype.$type, b.seriesViewer());
		}
		if (a == null || b == null) {
			return 0;
		}
		var d = (((a.axes()).where$1($.ig.Axis.prototype.$type, function (c) { return ($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, c) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, c) !== null) && $.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, c.c6()) !== null && ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, c.c6())).by().count() > 0 && (!c.e8()) && !c.fk() && (c.crossingAxis() == null || $self.br().crossingAxis() == null || ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, c.crossingAxis())).im() == ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, b.crossingAxis())).im())}))).toList$1($.ig.Axis.prototype.$type);
		var e = d.indexOf(b);
		if (e == -1) {
			return 0;
		}
		var f = 0;
		for (var g = 0; g < e; g++) {
			f += d.__inner[g].c6().b5() * 2 + 5;
		}
		return f;
	}

, 
	dj: function () {
		return $.ig.AxisLabelsLocation.prototype.insideTop;
	}

, 
	dk: function (a) {
		return a == $.ig.AxisLabelsLocation.prototype.insideTop || a == $.ig.AxisLabelsLocation.prototype.insideBottom;
	}
,
	$type: new $.ig.Type('AngleAxisLabelPanel', $.ig.AxisLabelPanelBase.prototype.$type)
}, true);



















$.ig.util.defType('IAngleScaler', 'Object', {

		$type: new $.ig.Type('IAngleScaler', null)
}, true);

$.ig.util.defType('CategoryAngleAxis', 'CategoryAxisBase', {

	dl: function () {
		return new $.ig.CategoryAngleAxisView(this);
	}

, 
	dp: function (a) {
		$.ig.CategoryAxisBase.prototype.dp.call(this, a);
		this.ho(a);
	}

, 
	_ho: null,
	ho: function (a) {
		if (arguments.length === 1) {
			this._ho = a;
			return a;
		} else {
			return this._ho;
		}
	}
, 
	he: null
, 
		init: function () {

			this.hf = false;
			this.hg = NaN;
			this.hi = 0;
			this.hj = 1;

			$.ig.CategoryAxisBase.prototype.init.call(this);
						this.hp(this.hx());
				this.he = new $.ig.PolarAxisRenderingManager();
		}
, 
	dr: function () {
		var $self = this;
		var a = new $.ig.AngleAxisLabelPanel();
		a.d5(function (b) {
			var c = $self.seriesViewer() != null ? $self.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
			var d = !c.isEmpty() ? $self.c2() : $.ig.Rect.prototype.empty();
			return $self.hy(b, {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, c, d, $self.c6().b5());
		});
		return a;
	}

, 
	_hp: null,
	hp: function (a) {
		if (arguments.length === 1) {
			this._hp = a;
			return a;
		} else {
			return this._hp;
		}
	}
, 
	hf: null
, 
	hw: function (a) {
		return Math.round(a * Math.pow(10, 10)) / Math.pow(10, 10);
	}
, 
	hg: null
, 
	hx: function () {
		var $self = this;
		var a = (function () { var $ret = new $.ig.AxisLabelManager();
$ret.j($self);
$ret.h($self.c5());
$ret.g($self.c4());
$ret.i($self.c6()); return $ret;}());
		if (this.labelSettings() != null) {
			this.labelSettings().r(this);
		}
		var b = new $.ig.CategoryAxisRenderer(a);
		b.am(function () {
			var c = $self.cz().au();
			var d = $self.cz().av();
			var e = $self.cz().aw();
			var f = $self.cz().ax();
			$self.d2();
			$self.eq(c);
			$self.eq(d);
			$self.eq(e);
			$self.eq(f);
		});
		b.an(function (g, h) {
			return !h.isEmpty() && !g.isEmpty() && $self.hq() != null;
		});
		b.a1(function (i, j) {
			return $self.h0(i, j);
		});
		b.ao(function () {
			if (!$self.hf) {
				$self.hf = true;
				$self.hq().updateRange();
				$self.hf = false;
			}
		});
		b.a0(function (k) {
			var l = k;
			if (l > $self.gn().g() - 1) {
				l -= $self.gn().g();
			}
			var m = $self.gn().item(l);
			return $self.e2(m);
		});
		b.az().k(function (n) {
			if (($self.labelSettings() == null || $self.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && $self.hq() != null && $self.hg != n) {
				var o = $.ig.util.cast($.ig.XamDataChart.prototype.$type, $self.seriesViewer());
				if (o == null) {
				return;
				}
				$self.hg = n;
				$self.c6().bx(n);
				o.ic();
			}
		});
		b.ar(function (p, q, r) {
			var s = $.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, p);
			$self.he.f(q, r, p.r(), p.s(), s.minLength(), s.maxLength(), s.center());
		});
		b.aq(function (t, u, v, w) {
			var x = $.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, t);
			$self.he.e(u, v, w, x.r(), t.s(), x.minLength(), x.maxLength(), x.center());
		});
		b.ap(function (y, z) {
			return $self.getScaledAngle(z);
		});
		b.as(function (aa, ab) {
			if ($self.hw(ab - $self.hi) < 0) {
				return false;
			}
			if ($self.hw(ab - $self.hi - (2 * Math.PI)) > 0) {
				return false;
			}
			return true;
		});
		b.au(function (ac) {
			var ad = $.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, ac);
			if (ad.u() == ad.t().__inner[0]) {
				$self.he.d(ac.z(), ac.ac(), ac.r(), ac.s(), ad.center(), ad.minAngle(), ad.maxAngle());
			}
		});
		b.av(function (ae) {
			ae.ac($self.hz());
		});
		b.aw(function (af, ag, ah) {
			var ai = $.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, af);
			if (ah) {
				return false;
			}
			var aj = $self.hy(ag, ai.center(), af.s(), af.r(), 0);
			if (aj.__x < af.r().right() && aj.__x >= af.r().left() && aj.__y < af.r().bottom() && aj.__y >= af.r().top()) {
				return true;
			}
			return false;
		});
		b.a3(function (ak, al, am, an) {
			var ao = new $.ig.ScalerParams(ak.s(), ak.r(), $self.isInverted());
			var ap = al;
			if ($self.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
				var aq = (am * an) + 1;
				aq = Math.min(aq, $self.itemsCount());
				var ar = $self.getScaledValue(aq, ao);
				ap = (al + ar) / 2;
			}
			return ap;
		});
		b.a4(this.getGroupCenter.on(this));
		b.a5(this.h3.on(this));
		return b;
	}

, 
	hy: function (a, b, c, d, e) {
		var f = this.hz();
		var g = $.ig.ViewportUtils.prototype.f(e, c, d);
		if (this.labelSettings() != null && (this.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom || this.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.outsideBottom)) {
			g *= -1;
		}
		var h = b.__x + (f + g) * Math.cos(a);
		var i = b.__y + (f + g) * Math.sin(a);
		h = $.ig.ViewportUtils.prototype.a(h, c, d);
		i = $.ig.ViewportUtils.prototype.c(i, c, d);
		return {__x: h, __y: i, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	hz: function () {
		if (this.hq() == null) {
			return 0;
		}
		if (!this.fk()) {
			return this.hq().i8();

		} else {
			return this.hq().getScaledValue2((this.crossingValue()));
		}
	}

, 
	h0: function (a, b) {
		if (this.gn() == null) {
			return null;
		}
		var c = new $.ig.RadialAxisRenderingParameters();
		var d = this.gn().g() - 1;
		var e = this.cz().au();
		var f = this.cz().av();
		var g = this.cz().aw();
		var h = this.cz().ax();
		c.z(e);
		c.w(f);
		c.x(g);
		c.y(h);
		c.ab(d);
		c.aa(0);
		c.ag(false);
		c.r(a);
		c.s(b);
		c.af(this.h8());
		c.ae(this.interval());
		c.ad(this.label());
		var i = this.he.k(b);
		var j = this.he.l(b);
		var k = 0.5 * this.hq().im();
		var l = 0.5 * this.hq().io();
		var m = i;
		var n = j;
		var o = this.hq().i8();
		if (isNaN(o) || Number.isInfinity(o)) {
			return null;
		}
		if (n >= k) {
			n = o;
		}
		if (m < l) {
			m = l;
		}
		var p = a.width();
		this.he.p(b, c, 0, this.gn().g(), this.isInverted(), this.getUnscaledAngle.on(this), p);
		var q = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		c.center(q);
		c.maxLength(n);
		c.minLength(m);
		c.effectiveMaximum(o);
		c.bl(this.gn().g());
		c.bm(this.categoryMode());
		c.bn(true);
		c.bp(this.isInverted());
		c.bo(this.go());
		c.v(new $.ig.CategoryTickmarkValues());
		c.ah(this.c9());
		return c;
	}

, 
	getMinMaxAngle: function (a, b, c) {
		var $self = this;
		(function () { var $ret = $self.he.o(a, b, c); b = $ret.minAngle; c = $ret.maxAngle; return $ret.ret; }());
		return {
			visibleMinimum: b,
			visibleMaximum: c
		};
	}

, 
	onApplyTemplate: function () {
		$.ig.Axis.prototype.onApplyTemplate.call(this);
		this.es(false);
	}
, 
	hh: null
, 
	hq: function (a) {
		if (arguments.length === 1) {
			this.hh = a;
			return a;
		} else {
			if (this.hh != null) {
				return this.hh;
			}
			var b = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
			if (b != null) {
				return b.axes().ofType$1($.ig.NumericRadiusAxis.prototype.$type).firstOrDefault$1($.ig.NumericRadiusAxis.prototype.$type);
			}
			return this.hh;
		}
	}

, 
	startAngleOffset: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryAngleAxis.prototype.startAngleOffsetProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryAngleAxis.prototype.startAngleOffsetProperty);
		}
	}
, 
	hi: null
, 
	getCategorySize: function (a, b) {
		return 2 * Math.PI / this.itemsCount();
	}

, 
	gz: function (a, b) {
		var c = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
		var d = 0;
		if (!isNaN(this.overlap())) {
			d = Math.min(this.overlap(), 1);
		}
		var e = 1 - 0.5 * c;
		return this.getCategorySize(a, b) * e / (this.go() - (this.go() - 1) * d);
	}

, 
	getGroupCenter: function (a, b, c) {
		var d = 0.5;
		if (this.go() > 1) {
			var e = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
			var f = 0;
			if (!isNaN(this.overlap())) {
				f = Math.min(this.overlap(), 1);
			}
			var g = 1 - 0.5 * e;
			var h = g / (this.go() - (this.go() - 1) * f);
			var i = (g - h) / (this.go() - 1);
			d = 0.25 * e + 0.5 * h + a * i;
		}
		return this.getCategorySize(b, c) * d;
	}

, 
	h3: function (a) {
		var b = 0.5;
		if (this.go() > 1) {
			var c = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
			var d = 0;
			if (!isNaN(this.overlap())) {
				d = Math.min(this.overlap(), 1);
			}
			var e = 1 - 0.5 * c;
			var f = e / (this.go() - (this.go() - 1) * d);
			var g = (e - f) / (this.go() - 1);
			b = 0.25 * c + 0.5 * f + a * g;
		}
		return b;
	}

, 
	ey: function (a) {
		var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var c = !b.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
		this.hp().ca(a, c, b);
	}

, 
	h4: function (a, b) {
		var $self = this;
		var c;
		var d;
		(function () { var $ret = $self.he.o(b, c, d); c = $ret.minAngle; d = $ret.maxAngle; return $ret.ret; }());
		if (c == 0) {
			if (this.isInverted()) {
				return this.itemsCount();

			} else {
				return 0;
			}
		}
		var e = this.getUnscaledAngle(c);
		if (e < 0 || e > this.itemsCount()) {
			e = this.getUnscaledAngle(c + Math.PI * 2);
		}
		return e;
	}

, 
	h5: function (a, b) {
		var $self = this;
		var c;
		var d;
		(function () { var $ret = $self.he.o(b, c, d); c = $ret.minAngle; d = $ret.maxAngle; return $ret.ret; }());
		if (d > Math.PI * 2) {
			d = d - Math.PI * 2;
		}
		if (d == Math.PI * 2) {
			if (this.isInverted()) {
				return 0;

			} else {
				return this.itemsCount();
			}
		}
		var e = this.getUnscaledAngle(d);
		if (e < 0 || e > this.itemsCount()) {
			e = this.getUnscaledAngle(d + Math.PI * 2);
		}
		return e;
	}

, 
	getScaledAngle: function (a) {
		var b = this.itemsCount();
		var c = b >= 2 ? (a) / (b) : b == 1 ? 0.5 : NaN;
		if (this.c1()) {
			c = 1 - c;
		}
		return (c * 2 * Math.PI) + this.hi;
	}

, 
	getUnscaledAngle: function (a) {
		var b = (a - this.hi) / (2 * Math.PI);
		if (this.isInverted()) {
			b = 1 - b;
		}
		return b * (this.itemsCount());
	}

, 
	getScaledValue: function (a, b) {
		return (this).getScaledAngle(a);
	}

, 
	eg: function (a, b, c, d) {
		$.ig.CategoryAxisBase.prototype.eg.call(this, a, b, c, d);
		var e = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
		switch (b) {
			case $.ig.CategoryAngleAxis.prototype.bp:
				var f = $.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, d);
				this.h7(f);
				if (f != null) {
					f.i3(this);
				}
				this.c7(true);
				this.es(false);
				break;
			case $.ig.CategoryAngleAxis.prototype.hc:
				this.hi = this.startAngleOffset();
				while (this.hi < 0) {
					this.hi += 360;
				}
				while (this.hi >= 360) {
					this.hi -= 360;
				}
				this.hi = (this.hi * Math.PI) / 180;
				this.c7(true);
				this.es(false);
				var h = this.dc().getEnumerator();
				while (h.moveNext()) {
					var g = h.current();
					g.renderSeries(false);
				}
				break;
			case $.ig.CategoryAngleAxis.prototype.br:
				if (e != null) {
					var j = e.axes().getEnumerator();
					while (j.moveNext()) {
						var i = j.current();
						i.c7(true);
						i.renderAxis();
					}
				}
				break;
			case $.ig.CategoryAngleAxis.prototype.bq:
				if (e != null) {
					var l = e.axes().getEnumerator();
					while (l.moveNext()) {
						var k = l.current();
						if ($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, k) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, k) !== null) {
							k.c7(true);
							k.renderAxis();
						}
					}
				}
				break;
			case $.ig.CategoryAngleAxis.prototype.bn:
				this.hp(this.hx());
				this.h6();
				this.c7(true);
				this.es(false);
				break;
		}
	}

, 
	h6: function () {
		this.hg = NaN;
	}

, 
	h7: function (a) {
		this.hq(a);
	}

, 
	interval: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryAngleAxis.prototype.intervalProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryAngleAxis.prototype.intervalProperty);
		}
	}

, 
	h8: function () {
		return false;
	}

, 
	dd: function () {
			return $.ig.AxisOrientation.prototype.angular;
	}

, 
	ex: function () {
		if (this.gn() == null) {
			return false;
		}
		var a = this.gn().g();
		if (a != this.hr()) {
			var b = new $.ig.AxisRangeChangedEventArgs(1, 1, this.hr(), a);
			this.hr(a);
			this.dx(b);
			return true;
		}
		return false;
	}
, 
	hj: null
, 
	hr: function (a) {
		if (arguments.length === 1) {
			this.hj = a;
			return a;
		} else {
			return this.hj;
		}
	}
,
	$type: new $.ig.Type('CategoryAngleAxis', $.ig.CategoryAxisBase.prototype.$type, [$.ig.IAngleScaler.prototype.$type])
}, true);


$.ig.util.defType('CategoryAngleAxisView', 'CategoryAxisBaseView', {

	_bo: null,
	bo: function (a) {
		if (arguments.length === 1) {
			this._bo = a;
			return a;
		} else {
			return this._bo;
		}
	}

, 
		init: function (a) {


			$.ig.CategoryAxisBaseView.prototype.init.call(this, a);
						this.bo(a);
		},
	$type: new $.ig.Type('CategoryAngleAxisView', $.ig.CategoryAxisBaseView.prototype.$type)
}, true);







$.ig.util.defType('CategoryAxisRenderer', 'AxisRendererBase', {

		init: function (a) {


			$.ig.AxisRendererBase.prototype.init.call(this, a);
		}
, 
	c1: function (a, b, c, d, e) {
		var f = $.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, a);
		var g = $.ig.CategoryMode.prototype.mode0;
		if (f != null) {
			g = f.bm();
		}
		var h = new $.ig.LinearCategorySnapper(1, a.u().f(), a.u().g(), a.u().i(), a.ae(), g);
		b = h.g();
		if (a.u().h() != -1) {
			b = a.u().h();
		}
		var i = Math.floor((a.u().f() - a.aa()) / b);
		var j = Math.ceil((a.u().g() - a.aa()) / b);
		d = i;
		e = j;
		c = h.h();
		if (a.u().j() != -1) {
			c = a.u().j();
		}
		return {
			interval: b,
			minorCount: c,
			first: d,
			last: e
		};
	}

, 
	ch: function (a, b, c, d) {
		var e = $.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, a);
		if (e == null) {
			return null;
		}
		var f = 0;
		if (d >= 1) {
			f = c * Math.floor(d);

		} else {
			if ((c * d) * 2 % 2 == 0) {
				f = Math.floor(c * d);

			} else {
				f = -1;
			}
		}
		var g = null;
		if ((e.bl() > 0 && f < e.bl() && f >= 0) || e.bn()) {
			while (f >= e.bl() && e.bn()) {
				f -= e.bl();
			}
			g = this.a0()(f);
		}
		return g;
	}

, 
	c2: function (a, b, c, d, e, f) {
		var g = $.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, a);
		if (g.bm() != $.ig.CategoryMode.prototype.mode0 && g.bo() != 0) {
			for (var h = 0; h < b; h++) {
				for (var i = 0; i < g.bo(); i++) {
					var j = this.a4()(i, a.s(), a.r());
					if (g.bp()) {
					j = -j;
					}
					var k = this.ap()(a, h + e * b) + j;
					this.ar()(a, a.y(), k);
				}
			}
		}
	}
,
	$type: new $.ig.Type('CategoryAxisRenderer', $.ig.AxisRendererBase.prototype.$type)
}, true);









$.ig.util.defType('NumericAngleAxis', 'NumericAxisBase', {

	dl: function () {
		return new $.ig.NumericAngleAxisView(this);
	}

, 
	dp: function (a) {
		$.ig.NumericAxisBase.prototype.dp.call(this, a);
		this.ib(a);
	}

, 
	_ib: null,
	ib: function (a) {
		if (arguments.length === 1) {
			this._ib = a;
			return a;
		} else {
			return this._ib;
		}
	}

, 
	_ic: null,
	ic: function (a) {
		if (arguments.length === 1) {
			this._ic = a;
			return a;
		} else {
			return this._ic;
		}
	}

, 
		init: function () {

			this.h3 = false;
			this.h4 = NaN;
			this.h5 = 0;

			$.ig.NumericAxisBase.prototype.init.call(this);
						this.ic(new $.ig.PolarAxisRenderingManager());
				this.g3(this.hm());
		}
, 
	dr: function () {
		var $self = this;
		var a = new $.ig.AngleAxisLabelPanel();
		a.d5(function (b) {
			var c = $self.seriesViewer() != null ? $self.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
			var d = !c.isEmpty() ? $self.c2() : $.ig.Rect.prototype.empty();
			return $self.il(b, {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, c, d, $self.c6().b5());
		});
		return a;
	}

, 
	ij: function () {
		if (this.id() == null) {
			return 0;
		}
		if (!this.fk()) {
			return this.id().i8();

		} else {
			return this.id().getScaledValue2((this.crossingValue()));
		}
	}

, 
	ik: function (a) {
		return Math.round(a * Math.pow(10, 10)) / Math.pow(10, 10);
	}
, 
	h3: null, 
	h4: null
, 
	hm: function () {
		var $self = this;
		var a = $.ig.NumericAxisBase.prototype.hm.call(this);
		a.az().k(function (b) {
			if (($self.labelSettings() == null || $self.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && $self.id() != null && $self.h4 != b) {
				var c = $.ig.util.cast($.ig.XamDataChart.prototype.$type, $self.seriesViewer());
				if (c == null) {
				return;
				}
				$self.h4 = b;
				$self.c6().bx(b);
				c.ic();
			}
		});
		a.av(function (d) {
			d.ac($self.ij());
		});
		a.au(function (e) {
			var f = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, e);
			if (f.u() == f.t().__inner[0]) {
				$self.ic().d(e.z(), e.ac(), e.r(), e.s(), f.center(), f.minAngle(), f.maxAngle());
			}
		});
		a.ar(function (g, h, i) {
			var j = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, g);
			$self.ic().f(h, i, g.r(), g.s(), j.minLength(), j.maxLength(), j.center());
		});
		a.aq(function (k, l, m, n) {
			var o = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, k);
			$self.ic().e(l, m, n, o.r(), k.s(), o.minLength(), o.maxLength(), o.center());
		});
		a.a1(function (p, q) {
			var r = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, $self.hq(p, q));
			return r;
		});
		a.ao(function () {
			if (!$self.h3) {
				$self.h3 = true;
				$self.id().updateRange();
				$self.h3 = false;
			}
		});
		a.ap(function (s, t) {
			return $self.getScaledAngle1(t);
		});
		a.an(function (u, v) {
			return !v.isEmpty() && !u.isEmpty() && $self.id() != null;
		});
		a.as(function (w, x) {
			if ($self.ik(x - $self.h5) < 0) {
				return false;
			}
			if ($self.ik(x - $self.h5 - (2 * Math.PI)) > 0) {
				return false;
			}
			return true;
		});
		a.aw(function (y, z, aa) {
			var ab = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, y);
			var ac = $self.il($self.getScaledAngle1(ab.ab()), ab.center(), y.s(), y.r(), 0);
			var ad = $self.il(z, ab.center(), y.s(), y.r(), 0);
			if (aa && $.ig.MathUtil.prototype.f(ac.__x - ad.__x, ac.__y - ad.__y) < 2) {
				return false;
			}
			if (ad.__x < y.r().right() && ad.__x >= y.r().left() && ad.__y < y.r().bottom() && ad.__y >= y.r().top()) {
				return true;
			}
			return false;
		});
		a.a2(function (ae, af, ag, ah) {
			if (af < ae.aa() && $.ig.util.cast($.ig.LogarithmicTickmarkValues.prototype.$type, ae.v()) !== null) {
				return ae.aa();
			} else if (af > ae.ab() && ($.ig.util.cast($.ig.LogarithmicTickmarkValues.prototype.$type, ae.v()) !== null || ae.ag())) {
				return ae.ab();
			}
			return af;
		});
		return a;
	}

, 
	il: function (a, b, c, d, e) {
		var f = this.ij();
		var g = $.ig.ViewportUtils.prototype.f(e, c, d);
		if (this.labelSettings() != null && (this.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom || this.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.outsideBottom)) {
			g *= -1;
		}
		var h = b.__x + (f + g) * Math.cos(a);
		var i = b.__y + (f + g) * Math.sin(a);
		h = $.ig.ViewportUtils.prototype.a(h, c, d);
		i = $.ig.ViewportUtils.prototype.c(i, c, d);
		return {__x: h, __y: i, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	getScaledValue: function (a, b) {
		return this.getScaledAngle1(a);
	}

, 
	im: function (a, b, c) {
		var d = 0;
		if (b) {
			d = (Math.log(a) - this.gz()) / (this.g0() - this.gz());

		} else {
			d = (a - this.actualMinimumValue()) / (this.actualMaximumValue() - this.actualMinimumValue());
		}
		if (c) {
			d = 1 - d;
		}
		return (d * 2 * Math.PI) + this.h5;
	}

, 
	getScaledAngle1: function (a) {
		return this.im(a, this.g1(), this.c1());
	}

, 
	getUnscaledAngle: function (a) {
		var b = (a - this.h5) / (2 * Math.PI);
		if (this.isInverted()) {
			b = 1 - b;
		}
		if (this.g1()) {
			return Math.exp(b * (this.g0() - this.gz()) + this.gz());

		} else {
			return this.actualMinimumValue() + b * (this.actualMaximumValue() - this.actualMinimumValue());
		}
	}

, 
	startAngleOffset: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericAngleAxis.prototype.startAngleOffsetProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericAngleAxis.prototype.startAngleOffsetProperty);
		}
	}
, 
	h5: null
, 
	eg: function (a, b, c, d) {
		$.ig.NumericAxisBase.prototype.eg.call(this, a, b, c, d);
		var e = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
		switch (b) {
			case $.ig.NumericAngleAxis.prototype.bp:
				var f = $.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, d);
				this.ir(f);
				if (f != null) {
					f.i3(this);
				}
				this.es(false);
				break;
			case $.ig.NumericAngleAxis.prototype.h2:
				this.h5 = this.startAngleOffset();
				while (this.h5 < 0) {
					this.h5 += 360;
				}
				while (this.h5 >= 360) {
					this.h5 -= 360;
				}
				this.h5 = (this.startAngleOffset() * Math.PI) / 180;
				this.es(false);
				var h = this.fl().getEnumerator();
				while (h.moveNext()) {
					var g = h.current();
					g.renderSeries(false);
				}
				break;
			case $.ig.NumericAngleAxis.prototype.br:
				if (e != null) {
					var j = e.axes().getEnumerator();
					while (j.moveNext()) {
						var i = j.current();
						i.renderAxis();
					}
				}
				break;
			case $.ig.NumericAngleAxis.prototype.bq:
				if (e != null) {
					var l = e.axes().getEnumerator();
					while (l.moveNext()) {
						var k = l.current();
						if ($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, k) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, k) !== null) {
							k.renderAxis();
						}
					}
				}
				break;
			case $.ig.NumericAngleAxis.prototype.bn:
				this.g3(this.hm());
				this.io();
				this.c7(true);
				this.es(false);
				break;
		}
	}

, 
	io: function () {
		this.h4 = NaN;
	}

, 
	hn: function () {
		return new $.ig.PolarAxisRenderingParameters();
	}

, 
	hq: function (a, b) {
		var c = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, $.ig.NumericAxisBase.prototype.hq.call(this, a, b));
		var d = this.ic().k(b);
		var e = this.ic().l(b);
		var f = 0.5 * this.id().im();
		var g = 0.5 * this.id().io();
		var h = d;
		var i = e;
		var j = this.id().i8();
		if (isNaN(j) || Number.isInfinity(j)) {
			return null;
		}
		if (i >= f) {
			i = j;
		}
		if (h < g) {
			h = g;
		}
		var k = a.width();
		this.ic().p(b, c, this.actualMinimumValue(), this.actualMaximumValue(), this.isInverted(), this.getUnscaledAngle.on(this), k);
		var l = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		c.center(l);
		c.maxLength(i);
		c.minLength(h);
		c.effectiveMaximum(j);
		return c;
	}

, 
	getMinMaxAngle: function (a, b, c) {
		var $self = this;
		(function () { var $ret = $self.ic().o(a, b, c); b = $ret.minAngle; c = $ret.maxAngle; return $ret.ret; }());
		return {
			minAngle: b,
			maxAngle: c
		};
	}

, 
	ey: function (a) {
		var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var c = !b.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
		this.g3().ca(a, c, b);
	}
, 
	h6: null
, 
	id: function (a) {
		if (arguments.length === 1) {
			this.h6 = a;
			return a;
		} else {
			if (this.h6 != null) {
				return this.h6;
			}
			var b = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
			if (b != null) {
				return b.axes().ofType$1($.ig.NumericRadiusAxis.prototype.$type).firstOrDefault$1($.ig.NumericRadiusAxis.prototype.$type);
			}
			return this.h6;
		}
	}

, 
	ir: function (a) {
		this.id(a);
	}

, 
	d9: function (a, b) {
		$.ig.Axis.prototype.d9.call(this, a, b);
		if (b.height() != a.height() || b.width() != a.width()) {
			this.updateRange();
		}
	}

, 
	dd: function () {
			return $.ig.AxisOrientation.prototype.angular;
	}
,
	$type: new $.ig.Type('NumericAngleAxis', $.ig.NumericAxisBase.prototype.$type, [$.ig.IAngleScaler.prototype.$type])
}, true);


$.ig.util.defType('NumericAngleAxisView', 'NumericAxisBaseView', {

	_bo: null,
	bo: function (a) {
		if (arguments.length === 1) {
			this._bo = a;
			return a;
		} else {
			return this._bo;
		}
	}

, 
		init: function (a) {


			$.ig.NumericAxisBaseView.prototype.init.call(this, a);
						this.bo(a);
		},
	$type: new $.ig.Type('NumericAngleAxisView', $.ig.NumericAxisBaseView.prototype.$type)
}, true);


$.ig.util.defType('NumericRadiusAxis', 'NumericAxisBase', {

	dl: function () {
		return new $.ig.NumericRadiusAxisView(this);
	}

, 
	dp: function (a) {
		$.ig.NumericAxisBase.prototype.dp.call(this, a);
		this.ik(a);
	}

, 
	_ik: null,
	ik: function (a) {
		if (arguments.length === 1) {
			this._ik = a;
			return a;
		} else {
			return this._ik;
		}
	}
, 
	h4: null
, 
		init: function () {

			this.h5 = NaN;

			$.ig.NumericAxisBase.prototype.init.call(this);
						this.im(this.radiusExtentScale());
				this.io(this.innerRadiusExtentScale());
				this.h4 = new $.ig.PolarAxisRenderingManager();
				this.g3(this.hm());
		}
, 
	dr: function () {
		return new $.ig.RadialAxisLabelPanel();
	}

, 
	_il: null,
	il: function (a) {
		if (arguments.length === 1) {
			this._il = a;
			return a;
		} else {
			return this._il;
		}
	}

, 
	iv: function (a) {
		return a;
	}
, 
	h5: null
, 
	hm: function () {
		var $self = this;
		var a = $.ig.NumericAxisBase.prototype.hm.call(this);
		a.az().k(function (b) {
			if (($self.labelSettings() == null || $self.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && $self.iq() != null) {
				if (($self.labelSettings() == null || ($self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop || $self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom)) && $self.h5 != b) {
					$self.h5 = b;
					$self.c6().bx(b);
					$self.seriesViewer().ic();
				}
			}
		});
		a.ar(function (c, d, e) {
			var f = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, c);
			$self.h4.d(d, e, f.r(), f.s(), f.center(), f.minAngle(), f.maxAngle());
		});
		a.aq(function (g, h, i, j) {
			if (i == j) {
				return;
			}
			var k = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, g);
			$self.h4.b(h, i, j, k.r(), k.s(), k.center(), k.minAngle(), k.maxAngle());
		});
		a.ap(function (l, m) {
			return $self.getScaledValue2(m);
		});
		a.as(function (n, o) {
			var p = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, n);
			return o <= p.effectiveMaximum();
		});
		a.at(function (q, r) {
			var s = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, q);
			return r <= s.effectiveMaximum();
		});
		a.au(function (t) {
			var u = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, t);
			$self.h4.f(t.z(), u.crossingAngleRadians(), t.r(), t.s(), u.minLength(), u.maxLength(), u.center());
		});
		a.av(function (v) {
			v.ac($self.labelSettings() == null || ($self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop || $self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.outsideTop) ? v.r().top() : v.r().bottom());
			var w = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, v);
			w.crossingAngleRadians(($self.iv($self.crossingValue()) * Math.PI) / 180);
			if ($self.labelSettings() == null || ($self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop || $self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
				w.ac($.ig.ViewportUtils.prototype.c(0.5, w.s(), w.r()) - v.r().top());
				var x = $.ig.util.cast($.ig.RadialAxisLabelPanel.prototype.$type, $self.c6());
				if (x != null) {
					var y = 0;
					if ($self.labelSettings() != null && $self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop) {
						y = 1;
					}
					x.ei({__x: $.ig.ViewportUtils.prototype.a(0.5, w.s(), w.r()), __y: y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					x.ej(w.crossingAngleRadians());
				}
			}
		});
		a.aw(function (z, aa, ab) {
			var ac = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, z);
			if ($self.iq() == null) {
				return false;
			}
			if (aa > ac.effectiveMaximum()) {
				return false;
			}
			var ad = false;
			ad = $self.labelSettings() == null || ($self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop || $self.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom);
			var ae = 0;
			if (ad) {
				ae = $self.ip();
			}
			var af = ac.center().__x + aa * Math.cos(ae);
			var ag = ac.center().__y + aa * Math.sin(ae);
			af = $.ig.ViewportUtils.prototype.a(af, ac.s(), ac.r());
			ag = $.ig.ViewportUtils.prototype.c(ag, ac.s(), ac.r());
			if (af <= z.r().right() && af >= z.r().left() && ((ag <= z.r().bottom() && ag >= z.r().top()) || !ad)) {
				return true;
			}
			return false;
		});
		a.ax(function (ah, ai) {
			var aj = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, ah);
			return new $.ig.LabelPosition($.ig.ViewportUtils.prototype.a(aj.center().__x + ai, aj.s(), aj.r()));
		});
		a.a2(function (ak, al, am, an) {
			if (al < ak.aa()) {
				return ak.aa();
			} else if (al > ak.ab()) {
				return ak.ab();
			}
			return al;
		});
		return a;
	}

, 
	getScaledValue: function (a, b) {
		return this.getScaledValue2(a);
	}

, 
	iw: function (a, b, c, d, e) {
		var f = 0;
		if (b) {
			if (a <= 0) {
				f = (Math.log(this.actualMinimumValue()) - this.gz()) / (this.g0() - this.gz());

			} else {
				f = (Math.log(a) - this.gz()) / (this.g0() - this.gz());
			}

		} else {
			f = (a - this.actualMinimumValue()) / (this.actualMaximumValue() - this.actualMinimumValue());
		}
		if (c) {
			f = 1 - f;
		}
		f = e + (f * (d - e));
		f /= 2;
		return f;
	}

, 
	getScaledValue2: function (a) {
		return this.iw(a, this.g1(), this.c1(), this.im(), this.io());
	}

, 
	getUnscaledValue: function (a) {
		var b = a * 2;
		b = (b - this.io()) / (this.im() - this.io());
		if (this.isInverted()) {
			b = 1 - b;
		}
		if (this.g1()) {
			return Math.exp(b * (this.g0() - this.gz()) + this.gz());

		} else {
			return this.actualMinimumValue() + b * (this.actualMaximumValue() - this.actualMinimumValue());
		}
	}

, 
	radiusExtentScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericRadiusAxis.prototype.radiusExtentScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericRadiusAxis.prototype.radiusExtentScaleProperty);
		}
	}

, 
	_im: null,
	im: function (a) {
		if (arguments.length === 1) {
			this._im = a;
			return a;
		} else {
			return this._im;
		}
	}

, 
	innerRadiusExtentScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericRadiusAxis.prototype.innerRadiusExtentScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericRadiusAxis.prototype.innerRadiusExtentScaleProperty);
		}
	}

, 
	_io: null,
	io: function (a) {
		if (arguments.length === 1) {
			this._io = a;
			return a;
		} else {
			return this._io;
		}
	}

, 
	eg: function (a, b, c, d) {
		switch (b) {
			case $.ig.NumericRadiusAxis.prototype.bq:
				this.ip(this.iv(this.crossingValue()) * Math.PI / 180);
				break;
		}
		$.ig.NumericAxisBase.prototype.eg.call(this, a, b, c, d);
		switch (b) {
			case $.ig.NumericRadiusAxis.prototype.h2:
				this.im(this.radiusExtentScale());
				if (this.im() < 0) {
					this.im(0.1);
				}
				if (this.im() > 1) {
					this.im(1);
				}
				if (this.io() >= this.im()) {
					this.io(this.im() - 0.01);
					if (this.io() < 0) {
						this.io(0);
						this.im(0.01);
					}
				}
				this.c7(true);
				this.es(false);
				if (this.iq() != null) {
					this.iq().renderAxis();
				}
				var f = this.fl().getEnumerator();
				while (f.moveNext()) {
					var e = f.current();
					e.renderSeries(false);
				}
				break;
			case $.ig.NumericRadiusAxis.prototype.h3:
				this.io(this.innerRadiusExtentScale());
				if (this.io() < 0) {
					this.io(0.1);
				}
				if (this.io() > 1) {
					this.io(1);
				}
				if (this.io() >= this.im()) {
					this.io(this.im() - 0.01);
					if (this.io() < 0) {
						this.io(0);
						this.im(0.01);
					}
				}
				this.c7(true);
				this.es(false);
				if (this.iq() != null) {
					this.iq().renderAxis();
				}
				var h = this.fl().getEnumerator();
				while (h.moveNext()) {
					var g = h.current();
					g.dv(true);
					g.renderSeries(false);
				}
				if (this.seriesViewer() != null) {
					this.seriesViewer().i8();
				}
				break;
			case $.ig.NumericRadiusAxis.prototype.bp:
				var i = $.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, d);
				var j = $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, d);
				if (i == null && j == null) {
					this.i3(null);
				}
				if (i != null) {
					this.i3(i);
					i.ir(this);
				}
				if (j != null) {
					this.i3(j);
					j.h7(this);
				}
				this.c7(true);
				this.es(false);
				break;
			case $.ig.NumericRadiusAxis.prototype.bm:
				if (this.iq() != null) {
					this.iq().c7(true);
					this.iq().es(false);
				}
				break;
		}
	}

, 
	_ip: null,
	ip: function (a) {
		if (arguments.length === 1) {
			this._ip = a;
			return a;
		} else {
			return this._ip;
		}
	}

, 
	i3: function (a) {
		this.iq(a);
	}
, 
	h6: null
, 
	iq: function (a) {
		if (arguments.length === 1) {
			this.h6 = a;
			return a;
		} else {
			var $self = this;
			if (this.h6 != null) {
				return this.h6;
			}
			var b = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
			if (b != null) {
				return b.axes().where$1($.ig.Axis.prototype.$type, function (c) { return $.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, c) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, c) !== null}).firstOrDefault$1($.ig.Axis.prototype.$type);
			}
			return this.h6;
		}
	}

, 
	hn: function () {
		return new $.ig.PolarAxisRenderingParameters();
	}

, 
	hq: function (a, b) {
		var $self = this;
		var c = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, $.ig.NumericAxisBase.prototype.hq.call(this, a, b));
		var d = this.h4.k(b);
		var e = this.h4.l(b);
		var f = 0.5 * this.im();
		var g = 0.5 * this.io();
		var h		,i;
		if (b == $.ig.SeriesViewer.prototype.de) {
			i = this.actualMaximumValue();
			h = this.actualMinimumValue();

		} else {
			i = Math.min(e, f);
			h = this.getUnscaledValue(d);
			i = this.getUnscaledValue(i);
			(function () { var $ret = $self.i6(a, b, h, i); h = $ret.visibleMinimum; i = $ret.visibleMaximum; return $ret.ret; }());
		}
		var j = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var k = d;
		var l = e;
		var m = Math.min(a.width(), a.height()) * (this.im() - this.io()) / 2;
		c.center(j);
		var n = Math.max(l, k);
		var o = Math.min(k, l);
		c.maxLength(n);
		c.minLength(o);
		var p = Math.min(h, i);
		var q = Math.max(h, i);
		if (p < this.actualMinimumValue()) {
			p = this.actualMinimumValue();
		}
		if (q > this.actualMaximumValue()) {
			q = this.actualMaximumValue();
		}
		c.t().add((function () { var $ret = new $.ig.RangeInfo();
		$ret.f(p);
		$ret.g(q);
		$ret.i(m); return $ret;}()));
		var r = $.ig.util.cast($.ig.IAngleScaler.prototype.$type, this.iq());
		if (r != null) {
			var s;
			var t;
			(function () { var $ret = r.getMinMaxAngle(b, s, t); s = $ret.minAngle; t = $ret.maxAngle; return $ret.ret; }());
			c.minAngle(Math.min(s, t));
			c.maxAngle(Math.max(s, t));
		}
		var u = this.i8();
		if (l >= f) {
			l = u;
		}
		if (k < g) {
			k = g;
		}
		c.minLength(k);
		c.maxLength(l);
		c.effectiveMaximum(u);
		c.v(this.actualTickmarkValues());
		var v = $.ig.util.cast($.ig.LinearTickmarkValues.prototype.$type, c.v());
		if (v != null) {
			v.ad(this.i7(j, c.minLength(), c.maxLength(), b, a));
		}
		return c;
	}

, 
	i6: function (a, b, c, d) {
		var e = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var f = 0;
		if (this.isInverted()) {
			f = this.getScaledValue2(this.actualMinimumValue());

		} else {
			f = this.getScaledValue2(this.actualMaximumValue());
		}
		var g = 0;
		if (this.crossingValue() != null) {
			g = this.ip();
		}
		var h = e.__x + f * Math.cos(g);
		var i = e.__y + f * Math.sin(g);
		e.__x = $.ig.ViewportUtils.prototype.a(e.__x, b, a);
		e.__y = $.ig.ViewportUtils.prototype.c(e.__y, b, a);
		h = $.ig.ViewportUtils.prototype.a(h, b, a);
		i = $.ig.ViewportUtils.prototype.c(i, b, a);
		if (h >= a.left() && h <= a.right() && i >= a.top() && i <= a.bottom()) {
			if (this.isInverted()) {
				d = this.actualMinimumValue();

			} else {
				d = this.actualMaximumValue();
			}
		}
		if (e.__x >= a.left() && e.__x <= a.right() && e.__y >= a.top() && e.__y <= a.bottom()) {
			if (this.isInverted()) {
				c = this.actualMaximumValue();

			} else {
				c = this.actualMinimumValue();
			}
		}
		return {
			visibleMinimum: c,
			visibleMaximum: d
		};
	}

, 
	i7: function (a, b, c, d, e) {
		var f = $.ig.ViewportUtils.prototype.e(c - b, d, e);
		var g = f / Math.min(e.width(), e.height());
		if (g > 0.7) {
			return 10;
		}
		return 5;
	}

, 
	i8: function () {
		var a = 0;
		if (!this.isInverted()) {
			a = this.getScaledValue2(this.actualMaximumValue());

		} else {
			a = this.getScaledValue2(this.actualMinimumValue());
		}
		return a;
	}

, 
	hl: function (a) {
		if (this.iq() != null) {
			this.iq().renderAxis();
		}
	}

, 
	ey: function (a) {
		var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var c = !b.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
		this.g3().ca(a, c, b);
	}

, 
	d9: function (a, b) {
		$.ig.Axis.prototype.d9.call(this, a, b);
		if (b.height() != a.height() || b.width() != a.width()) {
			this.updateRange();
		}
	}

, 
	i9: function (a, b, c) {
		var d = $.ig.util.cast($.ig.IPolarRadialRenderingParameters.prototype.$type, this.hq(b, c));
		if (d == null) {
			return;
		}
		this.h4.b(a.d(), d.minLength(), d.maxLength(), b, c, d.center(), d.minAngle(), d.maxAngle());
	}

, 
	dd: function () {
			return $.ig.AxisOrientation.prototype.radial;
	}
,
	$type: new $.ig.Type('NumericRadiusAxis', $.ig.NumericAxisBase.prototype.$type)
}, true);

$.ig.util.defType('NumericRadiusAxisView', 'NumericAxisBaseView', {

	_bo: null,
	bo: function (a) {
		if (arguments.length === 1) {
			this._bo = a;
			return a;
		} else {
			return this._bo;
		}
	}

, 
		init: function (a) {


			$.ig.NumericAxisBaseView.prototype.init.call(this, a);
						this.bo(a);
		},
	$type: new $.ig.Type('NumericRadiusAxisView', $.ig.NumericAxisBaseView.prototype.$type)
}, true);







$.ig.util.defType('PolarAxisRenderingManager', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c, d, e, f) {
		var $self = this;
		var g = $.ig.ViewportUtils.prototype.e(a, e, f);
		var h = $.ig.ViewportUtils.prototype.g(a, e, f);
		var i = $.ig.ViewportUtils.prototype.a(b.__x, e, f);
		var j = $.ig.ViewportUtils.prototype.c(b.__y, e, f);
		if (d - c < Math.PI && d - c > 0) {
			var k = {__x: $.ig.ViewportUtils.prototype.a(b.__x + a * Math.cos(c), e, f), __y: $.ig.ViewportUtils.prototype.c(b.__y + a * Math.sin(c), e, f), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var l = {__x: $.ig.ViewportUtils.prototype.a(b.__x + a * Math.cos(d), e, f), __y: $.ig.ViewportUtils.prototype.c(b.__y + a * Math.sin(d), e, f), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var m = new $.ig.PathFigure();
			m.__startPoint = k;
			m.__isClosed = false;
			m.__segments.add((function () { var $ret = new $.ig.ArcSegment();
			$ret.i(false);
			$ret.h(l);
			$ret.k(new $.ig.Size(g, h));
			$ret.j($.ig.SweepDirection.prototype.clockwise); return $ret;}()));
			return m;

		} else {
			var n = new $.ig.PathFigure();
			n.__startPoint = {__x: i, __y: j - h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			n.__isClosed = true;
			n.__segments.add((function () { var $ret = new $.ig.ArcSegment();
			$ret.i(false);
			$ret.h({__x: i, __y: j + h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			$ret.k(new $.ig.Size(g, h));
			$ret.j($.ig.SweepDirection.prototype.clockwise); return $ret;}()));
			n.__segments.add((function () { var $ret = new $.ig.ArcSegment();
			$ret.i(false);
			$ret.h({__x: i, __y: j - h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			$ret.k(new $.ig.Size(g, h));
			$ret.j($.ig.SweepDirection.prototype.clockwise); return $ret;}()));
			return n;
		}
	}

, 
	b: function (a, b, c, d, e, f, g, h) {
		var $self = this;
		var i = Math.min(b, c);
		var j = Math.max(b, c);
		var k = new $.ig.PathGeometry();
		var l = null;
		var m = null;
		var n = null;
		var o = null;
		if (i > 0) {
			l = this.a(i, f, g, h, e, d);
			if (h - g < Math.PI && h - g > 0) {
				var p = $.ig.util.cast($.ig.ArcSegment.prototype.$type, l.__segments.__inner[0]);
				if (p != null) {
					var q = {__x: $.ig.ViewportUtils.prototype.a(f.__x + j * Math.cos(h), e, d), __y: $.ig.ViewportUtils.prototype.c(f.__y + j * Math.sin(h), e, d), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
					m = (function () { var $ret = new $.ig.LineSegment(1);
					$ret.d(q); return $ret;}());
				}
			}
		}
		if (j > 0) {
			n = this.a(j, f, g, h, e, d);
		}
		if (i > 0) {
			if (h - g < Math.PI && h - g > 0) {
				var r = n.__startPoint;
				var s = $.ig.util.cast($.ig.ArcSegment.prototype.$type, n.__segments.__inner[0]);
				if (s != null) {
					n.__startPoint = s.h();
					s.h(r);
					s.j($.ig.SweepDirection.prototype.counterclockwise);
					var t = {__x: $.ig.ViewportUtils.prototype.a(f.__x + i * Math.cos(g), e, d), __y: $.ig.ViewportUtils.prototype.c(f.__y + i * Math.sin(g), e, d), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
					o = (function () { var $ret = new $.ig.LineSegment(1);
					$ret.d(t); return $ret;}());
				}
			}
		}
		if (m != null && o != null) {
			l.__segments.add(m);
			var u = n.__segments.__inner[0];
			n.__segments.remove(u);
			l.__segments.add(u);
			l.__segments.add(o);
			l.__isClosed = true;
			k.d().add(l);

		} else {
			if (l != null) {
				k.d().add(l);
				this.c(n);
			}
			if (n != null) {
				k.d().add(n);
			}
		}
		a.add(k);
	}

, 
	c: function (a) {
		if (a.__segments.count() > 1) {
			var b = $.ig.util.cast($.ig.ArcSegment.prototype.$type, a.__segments.__inner[0]);
			var c = $.ig.util.cast($.ig.ArcSegment.prototype.$type, a.__segments.__inner[1]);
			a.__segments.__inner[0] = c;
			a.__segments.__inner[1] = b;
			var d = c.h();
			var e = a.__startPoint;
			var f = b.h();
			a.__startPoint = d;
			c.h(f);
			b.h(e);
			b.j($.ig.SweepDirection.prototype.counterclockwise);
			c.j($.ig.SweepDirection.prototype.counterclockwise);

		} else {
			var g = a.__startPoint;
			var h = $.ig.util.cast($.ig.ArcSegment.prototype.$type, a.__segments.__inner[0]);
			if (h != null) {
				a.__startPoint = h.h();
				h.h(g);
				h.j($.ig.SweepDirection.prototype.counterclockwise);
			}
		}
	}

, 
	d: function (a, b, c, d, e, f, g) {
		if (b > 0) {
			var h = new $.ig.PathGeometry();
			h.d().add(this.a(b, e, f, g, d, c));
			a.add(h);
		}
	}

, 
	e: function (a, b, c, d, e, f, g, h) {
		var $self = this;
		var i = Math.min(b, c);
		var j = Math.max(b, c);
		var k = false;
		if (j - i > Math.PI) {
			k = true;
		}
		var l = Math.cos(i);
		var m = Math.sin(i);
		var n = h.__x + l * f;
		var o = h.__y + m * f;
		var p = h.__x + l * g;
		var q = h.__y + m * g;
		var r = Math.cos(j);
		var s = Math.sin(j);
		var t = h.__x + r * f;
		var u = h.__y + s * f;
		var v = h.__x + r * g;
		var w = h.__y + s * g;
		n = $.ig.ViewportUtils.prototype.a(n, e, d);
		o = $.ig.ViewportUtils.prototype.c(o, e, d);
		p = $.ig.ViewportUtils.prototype.a(p, e, d);
		q = $.ig.ViewportUtils.prototype.c(q, e, d);
		t = $.ig.ViewportUtils.prototype.a(t, e, d);
		u = $.ig.ViewportUtils.prototype.c(u, e, d);
		v = $.ig.ViewportUtils.prototype.a(v, e, d);
		w = $.ig.ViewportUtils.prototype.c(w, e, d);
		var x = new $.ig.PathFigure();
		x.__startPoint = {__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		x.__isClosed = true;
		x.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
		$ret.d({__x: p, __y: q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		x.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h({__x: v, __y: w, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		$ret.k(new $.ig.Size($.ig.ViewportUtils.prototype.e(g, e, d), $.ig.ViewportUtils.prototype.g(g, e, d)));
		$ret.j($.ig.SweepDirection.prototype.clockwise);
		$ret.i(k); return $ret;}()));
		x.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
		$ret.d({__x: t, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		x.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h({__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		$ret.k(new $.ig.Size($.ig.ViewportUtils.prototype.e(f, e, d), $.ig.ViewportUtils.prototype.g(f, e, d)));
		$ret.j($.ig.SweepDirection.prototype.counterclockwise);
		$ret.i(k); return $ret;}()));
		var y = new $.ig.PathGeometry();
		y.d().add(x);
		a.add(y);
	}

, 
	f: function (a, b, c, d, e, f, g) {
		var h = new $.ig.LineGeometry();
		var i = Math.cos(b);
		var j = Math.sin(b);
		var k = g.__x + i * e;
		var l = g.__y + j * e;
		var m = g.__x + i * f;
		var n = g.__y + j * f;
		k = $.ig.ViewportUtils.prototype.a(k, d, c);
		l = $.ig.ViewportUtils.prototype.c(l, d, c);
		m = $.ig.ViewportUtils.prototype.a(m, d, c);
		n = $.ig.ViewportUtils.prototype.c(n, d, c);
		h.e({__x: k, __y: l, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		h.f({__x: m, __y: n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		a.add(h);
	}

, 
	g: function (a, b) {
		return a.__x >= b.left() && a.__x <= b.right();
	}

, 
	h: function (a, b) {
		return a.__y >= b.top() && a.__y <= b.bottom();
	}

, 
	i: function (a, b) {
		var c = Math.sqrt(Math.pow(a.__x - b.left(), 2) + Math.pow(a.__y - b.top(), 2));
		var d = Math.sqrt(Math.pow(a.__x - b.right(), 2) + Math.pow(a.__y - b.top(), 2));
		var e = Math.sqrt(Math.pow(a.__x - b.right(), 2) + Math.pow(a.__y - b.bottom(), 2));
		var f = Math.sqrt(Math.pow(a.__x - b.left(), 2) + Math.pow(a.__y - b.bottom(), 2));
		return Math.min(c, Math.min(d, Math.min(e, f)));
	}

, 
	j: function (a, b) {
		var c = Math.sqrt(Math.pow(a.__x - b.left(), 2) + Math.pow(a.__y - b.top(), 2));
		var d = Math.sqrt(Math.pow(a.__x - b.right(), 2) + Math.pow(a.__y - b.top(), 2));
		var e = Math.sqrt(Math.pow(a.__x - b.right(), 2) + Math.pow(a.__y - b.bottom(), 2));
		var f = Math.sqrt(Math.pow(a.__x - b.left(), 2) + Math.pow(a.__y - b.bottom(), 2));
		return Math.max(c, Math.max(d, Math.max(e, f)));
	}

, 
	k: function (a) {
		var b = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		if (this.g(b, a) && this.h(b, a)) {
			return 0;
		}
		if (this.g(b, a)) {
			if (b.__y < a.top()) {
				return a.top() - b.__y;

			} else {
				return b.__y - a.bottom();
			}
		}
		if (this.h(b, a)) {
			if (b.__x < a.left()) {
				return a.left() - b.__x;

			} else {
				return b.__x - a.right();
			}
		}
		return this.i(b, a);
	}

, 
	l: function (a) {
		var b = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		return this.j(b, a);
	}

, 
	m: function (a, b) {
		var c = Math.sqrt(Math.pow(b.__x - a.__x, 2) + Math.pow(b.__y - a.__y, 2));
		var d = Math.acos((b.__x - a.__x) / c);
		if ((b.__y - a.__y) < 0) {
			d = (2 * Math.PI) - d;
		}
		return d;
	}

, 
	n: function (a, b) {
		return ((a.__y - 0.5) * b.__x) + ((0.5 - a.__x) * b.__y) + ((a.__x * 0.5) - (0.5 * a.__y));
	}

, 
	o: function (a, b, c) {
		var d = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		if (this.g(d, a) && this.h(d, a)) {
			b = 0;
			c = Math.PI * 2;
			return{
				minAngle: b,
				maxAngle: c
			};
		}
		var e = this.m(d, {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		var f = this.m(d, {__x: a.right(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		var g = this.m(d, {__x: a.right(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		var h = this.m(d, {__x: a.left(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		if (this.h(d, a) && a.left() > d.__x) {
			b = e;
			c = 2 * Math.PI + h;
			return{
				minAngle: b,
				maxAngle: c
			};
		}
		b = Math.min(e, Math.min(f, Math.min(g, h)));
		c = Math.max(e, Math.max(f, Math.max(g, h)));
		return {
			minAngle: b,
			maxAngle: c
		};
	}

, 
	p: function (a, b, c, d, e, f, g) {
		var $self = this;
		var h;
		var i;
		(function () { var $ret = $self.o(a, h, i); h = $ret.minAngle; i = $ret.maxAngle; return $ret.ret; }());
		var j = Math.min(h, i);
		var k = Math.max(h, i);
		if ($.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, b) !== null) {
			($.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, b)).minAngle(j);
			($.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, b)).maxAngle(k);
		} else if ($.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, b) !== null) {
			($.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, b)).minAngle(j);
			($.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, b)).maxAngle(k);
		}
		if (h == 0 && i == Math.PI * 2) {
			var l = c;
			var m = d;
			var n = Math.min(l, m);
			var o = Math.max(l, m);
			b.t().add((function () { var $ret = new $.ig.RangeInfo();
			$ret.f(n);
			$ret.g(o);
			$ret.i(g); return $ret;}()));
			return;

		} else {
			if (i > Math.PI * 2) {
				i = i - Math.PI * 2;
			}
			var p = f(h);
			var q = f(i);
			if (p < c || p > d) {
				p = f(h + Math.PI * 2);
			}
			if (q < c || q > d) {
				q = f(i + Math.PI * 2);
			}
			var r = Math.min(p, q);
			var s = Math.max(p, q);
			if ((!e && p > q) || (e && p < q)) {
				var t = (d - s);
				var u = (r - c);
				b.t().add((function () { var $ret = new $.ig.RangeInfo();
				$ret.f(s);
				$ret.g(d);
				$ret.i((t / (t + u)) * g); return $ret;}()));
				b.t().add((function () { var $ret = new $.ig.RangeInfo();
				$ret.f(c);
				$ret.g(r);
				$ret.i((u / (t + u)) * g); return $ret;}()));

			} else {
				b.t().add((function () { var $ret = new $.ig.RangeInfo();
				$ret.f(r);
				$ret.g(s);
				$ret.i(g); return $ret;}()));
			}
		}
	}
,
	$type: new $.ig.Type('PolarAxisRenderingManager', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IPolarRadialRenderingParameters', 'Object', {

		$type: new $.ig.Type('IPolarRadialRenderingParameters', null)
}, true);


$.ig.util.defType('PolarAxisRenderingParameters', 'NumericAxisRenderingParameters', {
	init: function () {

		$.ig.NumericAxisRenderingParameters.prototype.init.call(this);

	}
, 
	_minLength: null,
	minLength: function (a) {
		if (arguments.length === 1) {
			this._minLength = a;
			return a;
		} else {
			return this._minLength;
		}
	}

, 
	_maxLength: null,
	maxLength: function (a) {
		if (arguments.length === 1) {
			this._maxLength = a;
			return a;
		} else {
			return this._maxLength;
		}
	}

, 
	_center: null,
	center: function (a) {
		if (arguments.length === 1) {
			this._center = a;
			return a;
		} else {
			return this._center;
		}
	}

, 
	_minAngle: null,
	minAngle: function (a) {
		if (arguments.length === 1) {
			this._minAngle = a;
			return a;
		} else {
			return this._minAngle;
		}
	}

, 
	_maxAngle: null,
	maxAngle: function (a) {
		if (arguments.length === 1) {
			this._maxAngle = a;
			return a;
		} else {
			return this._maxAngle;
		}
	}

, 
	_crossingAngleRadians: null,
	crossingAngleRadians: function (a) {
		if (arguments.length === 1) {
			this._crossingAngleRadians = a;
			return a;
		} else {
			return this._crossingAngleRadians;
		}
	}

, 
	_effectiveMaximum: null,
	effectiveMaximum: function (a) {
		if (arguments.length === 1) {
			this._effectiveMaximum = a;
			return a;
		} else {
			return this._effectiveMaximum;
		}
	}
,
	$type: new $.ig.Type('PolarAxisRenderingParameters', $.ig.NumericAxisRenderingParameters.prototype.$type, [$.ig.IPolarRadialRenderingParameters.prototype.$type])
}, true);

$.ig.util.defType('RadialAxisRenderingParameters', 'CategoryAxisRenderingParameters', {
	init: function () {

		$.ig.CategoryAxisRenderingParameters.prototype.init.call(this);

	}
, 
	_minLength: null,
	minLength: function (a) {
		if (arguments.length === 1) {
			this._minLength = a;
			return a;
		} else {
			return this._minLength;
		}
	}

, 
	_maxLength: null,
	maxLength: function (a) {
		if (arguments.length === 1) {
			this._maxLength = a;
			return a;
		} else {
			return this._maxLength;
		}
	}

, 
	_center: null,
	center: function (a) {
		if (arguments.length === 1) {
			this._center = a;
			return a;
		} else {
			return this._center;
		}
	}

, 
	_crossingAngleRadians: null,
	crossingAngleRadians: function (a) {
		if (arguments.length === 1) {
			this._crossingAngleRadians = a;
			return a;
		} else {
			return this._crossingAngleRadians;
		}
	}

, 
	_minAngle: null,
	minAngle: function (a) {
		if (arguments.length === 1) {
			this._minAngle = a;
			return a;
		} else {
			return this._minAngle;
		}
	}

, 
	_maxAngle: null,
	maxAngle: function (a) {
		if (arguments.length === 1) {
			this._maxAngle = a;
			return a;
		} else {
			return this._maxAngle;
		}
	}

, 
	_effectiveMaximum: null,
	effectiveMaximum: function (a) {
		if (arguments.length === 1) {
			this._effectiveMaximum = a;
			return a;
		} else {
			return this._effectiveMaximum;
		}
	}
,
	$type: new $.ig.Type('RadialAxisRenderingParameters', $.ig.CategoryAxisRenderingParameters.prototype.$type, [$.ig.IPolarRadialRenderingParameters.prototype.$type])
}, true);

$.ig.util.defType('RadialAxes', 'Object', {

	_d: null,
	d: function (a) {
		if (arguments.length === 1) {
			this._d = a;
			return a;
		} else {
			return this._d;
		}
	}

, 
	_e: null,
	e: function (a) {
		if (arguments.length === 1) {
			this._e = a;
			return a;
		} else {
			return this._e;
		}
	}

, 
		init: function (a, b) {

			this.a = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};

			$.ig.Object.prototype.init.call(this);
						this.d(a);
				this.e(b);
		}, 
	a: null
, 
	j: function (a, b, c, d) {
		var e = this.a.__x + (b * Math.cos(a));
		return $.ig.ViewportUtils.prototype.a(e, c, d);
	}

, 
	k: function (a, b, c, d, e, f, g) {
		var h = Math.min(b != null ? b.count() : 0, c != null ? c.count() : 0);
		var i = false;
		if (a.count() == h) {
			i = true;
		}
		var j;
		var k;
		var l = this.a.__x;
		var m = this.a.__y;
		var n;
		var o;
		for (var p = 0; p < h; p++) {
			j = this.e().getScaledAngle(b.item(p));
			k = this.d().getScaledValue2(c.item(p));
			n = l + (k * f(p, j));
			o = m + (k * g(p, j));
			n = e.left() + e.width() * (n - d.left()) / d.width();
			o = e.top() + e.height() * (o - d.top()) / d.height();
			if (!i) {
				a.add({__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});

			} else {
				a.item(p, {__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
		}
	}

, 
	l: function (a, b, c, d, e, f) {
		var g = $.ig.ViewportUtils.prototype.b(a, c, d);
		var h = $.ig.ViewportUtils.prototype.d(b, c, d);
		var i = Math.sqrt(Math.pow(g - this.a.__x, 2) + Math.pow(h - this.a.__y, 2));
		var j = Math.acos((g - this.a.__x) / i);
		if ((h - this.a.__y) < 0) {
			j = (2 * Math.PI) - j;
		}
		e = this.e().getUnscaledAngle(j);
		f = this.d().getUnscaledValue(i);
		return {
			unscaledAngle: e,
			unscaledRadius: f
		};
	}

, 
	m: function (a, b, c, d) {
		var e = this.a.__y + (b * Math.sin(a));
		return $.ig.ViewportUtils.prototype.c(e, c, d);
	}

, 
	n: function (a) {
		var b = Math.sqrt(Math.pow(a.__x - this.a.__x, 2) + Math.pow(a.__y - this.a.__y, 2));
		var c = Math.acos((a.__x - this.a.__x) / b);
		if ((a.__y - this.a.__y) < 0) {
			c = (2 * Math.PI) - c;
		}
		return c;
	}
,
	$type: new $.ig.Type('RadialAxes', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('RadialAxisLabelPanel', 'HorizontalAxisLabelPanelBase', {
	init: function () {

		$.ig.HorizontalAxisLabelPanelBase.prototype.init.call(this);

		this.ed = new $.ig.List$1($.ig.Number.prototype.$type, 0);
	}
, 
	b6: function () {
		return new $.ig.RadialAxisLabelPanelView(this);
	}

, 
	b7: function (a) {
		$.ig.HorizontalAxisLabelPanelBase.prototype.b7.call(this, a);
		this.eh(a);
	}

, 
	_eh: null,
	eh: function (a) {
		if (arguments.length === 1) {
			this._eh = a;
			return a;
		} else {
			return this._eh;
		}
	}

, 
	_ei: null,
	ei: function (a) {
		if (arguments.length === 1) {
			this._ei = a;
			return a;
		} else {
			return this._ei;
		}
	}

, 
	_ej: null,
	ej: function (a) {
		if (arguments.length === 1) {
			this._ej = a;
			return a;
		} else {
			return this._ej;
		}
	}

, 
	ek: function () {
			return this.br().labelSettings() != null && (this.br().labelSettings().q() != $.ig.AxisLabelsLocation.prototype.insideBottom && this.br().labelSettings().q() != $.ig.AxisLabelsLocation.prototype.insideTop);
	}

, 
	el: function () {
			return !this.ek();
	}

, 
	d7: function () {
		return this.b0() && (!this.b1() || this.c9() == -180);
	}

, 
	eb: function () {
		return !this.b2();
	}

, 
	c8: function (a) {
		$.ig.AxisLabelPanelBase.prototype.c8.call(this, a);
		if (this.ej() % 360 == 0 || this.ek()) {
			this.eh().at();

		} else {
			this.eh().au(a);
		}
	}

, 
	c9: function () {
		var a = $.ig.AxisLabelPanelBase.prototype.c9.call(this);
		if (this.el()) {
			a -= (this.ej() * 180) / Math.PI;
		}
		return a;
	}

, 
	d6: function () {
		return this.c9() % 360 != 0;
	}

, 
	ec: function () {
		if (this.ek()) {
			return true;
		}
		var a = this.ej() * 180 / Math.PI;
		if (a < 30 || a > 330 || (a > 150 && a < 210)) {
			return true;
		}
		return false;
	}
, 
	ed: null
, 
	df: function (a, b) {
		var c = b * Math.PI / 180;
		var d = Math.abs(Math.sin(c));
		if (this.br().labelSettings() != null && this.br().labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop) {
			d = d * -1;
		}
		this.eh().as(a, b, d);
	}

, 
	eu: function () {
		var a = Number.MAX_VALUE;
		var c = this.bt().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			a = Math.min(b.b(), a);
		}
		return a;
	}

, 
	ev: function () {
		var a = -Number.MAX_VALUE;
		var c = this.bt().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			a = Math.max(b.b(), a);
		}
		return a;
	}

, 
	d9: function (a) {
		var $self = this;
		var b;
		if (this.br().isInverted()) {
			b = this.eu();

		} else {
			b = this.ev();
		}
		var e = ((this.bt()).where$1($.ig.LabelPosition.prototype.$type, function (c) { return c.b() == b})).select$2($.ig.LabelPosition.prototype.$type, $.ig.Number.prototype.$type, function (d) { return $self.bt().indexOf(d)});
		this.ed = e.toList$1($.ig.Number.prototype.$type);
		this.b0(this.c4(a.where$1($.ig.LabelPosition.prototype.$type, function (f, g) { return !$self.ed.contains(g)}).toList$1($.ig.Number.prototype.$type)));
	}

, 
	da: function (a, b) {
		if (this.ed.contains(a)) {
			return false;

		} else {
			return $.ig.AxisLabelPanelBase.prototype.da.call(this, a, b);
		}
	}

, 
	ea: function () {
		this.ed = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		$.ig.HorizontalAxisLabelPanelBase.prototype.ea.call(this);
	}

, 
	dj: function () {
		return $.ig.AxisLabelsLocation.prototype.insideBottom;
	}

, 
	dk: function (a) {
		return a == $.ig.AxisLabelsLocation.prototype.insideBottom || a == $.ig.AxisLabelsLocation.prototype.insideTop || a == $.ig.AxisLabelsLocation.prototype.outsideBottom || a == $.ig.AxisLabelsLocation.prototype.outsideTop;
	}
,
	$type: new $.ig.Type('RadialAxisLabelPanel', $.ig.HorizontalAxisLabelPanelBase.prototype.$type)
}, true);

$.ig.util.defType('RadialAxisLabelPanelView', 'HorizontalAxisLabelPanelBaseView', {

	_ap: null,
	ap: function (a) {
		if (arguments.length === 1) {
			this._ap = a;
			return a;
		} else {
			return this._ap;
		}
	}

, 
		init: function (a) {


			$.ig.HorizontalAxisLabelPanelBaseView.prototype.init.call(this, a);
						this.ap(a);
		}
, 
	as: function (a, b, c) {
	}

, 
	at: function () {
	}

, 
	au: function (a) {
	}

, 
	ac: function () {
		$.ig.AxisLabelPanelBaseView.prototype.ac.call(this);
		this.g().de(new $.ig.Size(this.g().bv().width(), this.g().bv().height()));
	}
,
	$type: new $.ig.Type('RadialAxisLabelPanelView', $.ig.HorizontalAxisLabelPanelBaseView.prototype.$type)
}, true);













$.ig.util.defType('CategoryTickmarkValues', 'TickmarkValues', {
	init: function () {

		$.ig.TickmarkValues.prototype.init.call(this);

	}
, 
	_ai: null,
	ai: function (a) {
		if (arguments.length === 1) {
			this._ai = a;
			return a;
		} else {
			return this._ai;
		}
	}

, 
	_aj: null,
	aj: function (a) {
		if (arguments.length === 1) {
			this._aj = a;
			return a;
		} else {
			return this._aj;
		}
	}

, 
	_ak: null,
	ak: function (a) {
		if (arguments.length === 1) {
			this._ak = a;
			return a;
		} else {
			return this._ak;
		}
	}

, 
	_al: null,
	al: function (a) {
		if (arguments.length === 1) {
			this._al = a;
			return a;
		} else {
			return this._al;
		}
	}

, 
	_am: null,
	am: function (a) {
		if (arguments.length === 1) {
			this._am = a;
			return a;
		} else {
			return this._am;
		}
	}

, 
	_an: null,
	an: function (a) {
		if (arguments.length === 1) {
			this._an = a;
			return a;
		} else {
			return this._an;
		}
	}

, 
	o: function (a) {
		$.ig.TickmarkValues.prototype.o.call(this, a);
		var b = a.aa();
		this.ai(b);
		this.aj(a.ab());
		this.ak(a.ac());
		this.al(a.ad());
		this.am(a.ae());
		this.an(a.ah());
		var c = new $.ig.LinearCategorySnapper(1, a.r(), a.s(), a.v(), a.x(), b);
		var d = c.g();
		if (a.y() != -1) {
			d = a.y();
		}
		var e = Math.floor((a.r() - a.t()) / d);
		var f = Math.ceil((a.s() - a.t()) / d);
		var g = e;
		var h = f;
		var i = c.h();
		if (a.z() != -1) {
			i = a.z();
		}
		this.k(d);
		this.l(g);
		this.m(h);
		this.n(i);
		this.ao(a.t());
	}

, 
	_ao: null,
	ao: function (a) {
		if (arguments.length === 1) {
			this._ao = a;
			return a;
		} else {
			return this._ao;
		}
	}

, 
	x: function () {
		var $self = this;
		var $iter = function () { return function () { return {
			$state: 0,
			$this: $self,
			$current: null,
			getEnumerator: function() {
				if (this.$state === -1) {
					this.$state = 0;
				}
				return this;
			},
			current: function () {
				return this.$current;
			},
			moveNext: function() {
				do {
					switch (this.$state) {
						case 0:
							this.$state = 1;
							break;
						case 1:
							this.$a = this.$this.l();
							this.$state = 5;
							break;
						case 2:
							this.$b = this.$this.ao() + this.$a * this.$this.k();
							this.$current =  this.$b;
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							++this.$a;
							this.$state = 5;
							break;
						case 5:
							if (this.$a <= this.$this.m()) {
								this.$state = 2;
							}
							else {
								this.$state = 6;
							}
							break;
						case 6:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } () };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	y: function () {
		var $self = this;
		var $iter = function () { return function () { return {
			$state: 0,
			$this: $self,
			$current: null,
			$a : 0,
			getEnumerator: function() {
				if (this.$state === -1) {
					this.$state = 0;
				}
				return this;
			},
			current: function () {
				return this.$current;
			},
			moveNext: function() {
				do {
					switch (this.$state) {
						case 0:
							this.$a = Math.min(this.$this.k(), 20);
							this.$state = 1;
							break;
						case 1:
							this.$b = this.$this.l();
							this.$state = 18;
							break;
						case 2:
							this.$state = 3;
							break;
						case 3:
							if (this.$this.ai() != $.ig.CategoryMode.prototype.mode0 && this.$this.aj() != 0) {
								this.$state = 4;
							}
							else {
								this.$state = 16;
							}
							break;

						case 4:
							this.$state = 5;
							break;
						case 5:
							this.$c = 0;
							this.$state = 14;
							break;
						case 6:
							this.$state = 7;
							break;
						case 7:
							this.$d = 0;
							this.$state = 11;
							break;
						case 8:
							this.$e = this.$this.an()(this.$d);
							this.$f = this.$c + (this.$b * this.$this.k()) + this.$e;
							this.$current =  this.$f;
							this.$state = 9
							return true;
						case 9:
							this.$state = 10;
							break;
						case 10:
							this.$d++;
							this.$state = 11;
							break;
						case 11:
							if (this.$d < this.$this.aj()) {
								this.$state = 8;
							}
							else {
								this.$state = 12;
							}
							break;
						case 12:
							this.$state = 13;
							break;
						case 13:
							this.$c++;
							this.$state = 14;
							break;
						case 14:
							if (this.$c < this.$a) {
								this.$state = 6;
							}
							else {
								this.$state = 15;
							}
							break;
						case 15:
							this.$state = 16;
							break;

						case 16:
							this.$state = 17;
							break;
						case 17:
							++this.$b;
							this.$state = 18;
							break;
						case 18:
							if (this.$b < this.$this.m()) {
								this.$state = 2;
							}
							else {
								this.$state = 19;
							}
							break;
						case 19:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } () };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}
,
	$type: new $.ig.Type('CategoryTickmarkValues', $.ig.TickmarkValues.prototype.$type)
}, true);




$.ig.util.defType('ViewportUtils', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c) {
		return c.left() + c.width() * (a - b.left()) / b.width();
	}

, 
	b: function (a, b, c) {
		return ((a - c.left()) * b.width() / c.width()) + b.left();
	}

, 
	c: function (a, b, c) {
		return c.top() + c.height() * (a - b.top()) / b.height();
	}

, 
	d: function (a, b, c) {
		return ((a - c.top()) * b.height() / c.height()) + b.top();
	}

, 
	e: function (a, b, c) {
		return c.width() * a / b.width();
	}

, 
	f: function (a, b, c) {
		return b.width() * a / c.width();
	}

, 
	g: function (a, b, c) {
		return c.height() * a / b.height();
	}
,
	$type: new $.ig.Type('ViewportUtils', $.ig.Object.prototype.$type)
}, true);






$.ig.util.defType('TrendLineManagerBase$1', 'Object', {
	$tTrendColumn: null
, 
	_l: null,
	l: function (a) {
		if (arguments.length === 1) {
			this._l = a;
			return a;
		} else {
			return this._l;
		}
	}

, 
	_m: null,
	m: function (a) {
		if (arguments.length === 1) {
			this._m = a;
			return a;
		} else {
			return this._m;
		}
	}

, 
		init: function ($tTrendColumn) {

			this.i = (function () { var $ret = new $.ig.Polyline();
			$ret.a6(false); return $ret;}());

			this.$tTrendColumn = $tTrendColumn
			this.$type = this.$type.specialize(this.$tTrendColumn);
			$.ig.Object.prototype.init.call(this);
						this.l(new $.ig.List$1(this.$tTrendColumn, 0));
		}
, 
	n: function () {
			return this.i;
	}
, 
	i: null
, 
	t: function (a) {
		this.w(a, null);
	}

, 
	u: function (a) {
		return a == $.ig.TrendLineType.prototype.linearFit || a == $.ig.TrendLineType.prototype.quadraticFit || a == $.ig.TrendLineType.prototype.cubicFit || a == $.ig.TrendLineType.prototype.quarticFit || a == $.ig.TrendLineType.prototype.quinticFit || a == $.ig.TrendLineType.prototype.logarithmicFit || a == $.ig.TrendLineType.prototype.exponentialFit || a == $.ig.TrendLineType.prototype.powerLawFit;
	}

, 
	v: function (a) {
		return a == $.ig.TrendLineType.prototype.simpleAverage || a == $.ig.TrendLineType.prototype.exponentialAverage || a == $.ig.TrendLineType.prototype.modifiedAverage || a == $.ig.TrendLineType.prototype.cumulativeAverage || a == $.ig.TrendLineType.prototype.weightedAverage;
	}

, 
	w: function (a, b) {
		this.n().bn().clear();
		if (b != null) {
			b.h(this.n().bn());
		}
		if (a != null) {
			var d = a.getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				if (!isNaN(c.__x) && !isNaN(c.__y)) {
					if (b != null) {
						b.l(c);

					} else {
						this.n().bn().add(c);
					}
				}
			}
		}
		this.n().a6(this.n().bn().count() > 0);
	}

, 
	x: function (a, b, c) {
		this.y(a, b, c, null);
	}

, 
	y: function (a, b, c, d) {
		var $self = this;
		if (d != null) {
			d.h(c);
		}
		var h = $.ig.Flattener.prototype.c(a.count(), function (e) { return a.item(e).__x}, function (f) { return a.item(f).__y}, b.m()).getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			if (d != null) {
				d.l(a.item(g));

			} else {
				c.add(a.item(g));
			}
		}
	}

, 
	z: function (a, b) {
		if (a == null || b == null) {
			return;
		}
		if (this.n().aa() != null) {
			this.aa();
		}
		a.a3().add(this.n());
	}

, 
	aa: function () {
		if (this.n() == null) {
			return;
		}
		var a = $.ig.util.cast($.ig.Panel.prototype.$type, this.n().aa());
		if (a != null) {
			a.a3().remove(this.n());
		}
	}

, 
	ab: function () {
		this.n().bn().clear();
	}

, 
	ac: function () {
		this.m(null);
		this.l().clear();
	}

, 
	ad: function (a, b, c, d) {
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.change:
			case $.ig.FastItemsSourceEventAction.prototype.replace:
			case $.ig.FastItemsSourceEventAction.prototype.insert:
			case $.ig.FastItemsSourceEventAction.prototype.remove:
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				this.ac();
				break;
		}
	}

, 
	ae: function (a, b, c, d, e) {
		var f = false;
		switch (b) {
			case $.ig.TrendLineManagerBase$1.prototype.b:
			case $.ig.TrendLineManagerBase$1.prototype.c:
				this.ac();
				f = true;
				break;
			case $.ig.TrendLineManagerBase$1.prototype.f:
				f = true;
				break;
			case $.ig.Series.prototype.be:
				f = true;
				this.ac();
				break;
		}
		return f;
	}
,
	$type: new $.ig.Type('TrendLineManagerBase$1', $.ig.Object.prototype.$type)
}, true);



































































$.ig.util.defType('CategoryLineRasterizer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

		this.a = new $.ig.PointCollection(0);
	}
, 
	_c: null,
	c: function (a) {
		if (arguments.length === 1) {
			this._c = a;
			return a;
		} else {
			return this._c;
		}
	}
, 
	a: null
, 
	d: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			return a;
		} else {
			return this.a;
		}
	}

, 
	i: function (a, b, c, d, e, f, g, h, i, j) {
		var $self = this;
		var k = new $.ig.PathGeometry();
		var l = new $.ig.PathGeometry();
		var m = new $.ig.PathGeometry();
		a.bp(k);
		b.bp(l);
		c.bp(m);
		k.d(new $.ig.PathFigureCollection());
		l.d(new $.ig.PathFigureCollection());
		m.d(new $.ig.PathFigureCollection());
		var n = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		var o = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		var p = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		var q = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		if (g == $.ig.UnknownValuePlotting.prototype.linearInterpolate || g == $.ig.UnknownValuePlotting.prototype.dontPlot) {
			var r = g == $.ig.UnknownValuePlotting.prototype.dontPlot ? h : null;
			var s = 0;
			for (var t = 0; t < d; t++) {
				if (isNaN(e.__inner[t][1])) {
					var u = t - s;
					var v = (g == $.ig.UnknownValuePlotting.prototype.linearInterpolate && u > 0) || (g == $.ig.UnknownValuePlotting.prototype.dontPlot && u > 1);
					if (v) {
						if (g == $.ig.UnknownValuePlotting.prototype.dontPlot || n.count() == 0) {
							var w = new $.ig.PolyLineSegment();
							var x = new $.ig.PolyLineSegment();
							var y = new $.ig.PolyLineSegment();
							var z = new $.ig.PolyLineSegment();
							n.add(w);
							o.add(x);
							p.add(y);
							q.add(z);
						}
						this.o(n.__inner[n.count() - 1].__points, o.__inner[o.count() - 1].__points, p.__inner[p.count() - 1].__points, q.__inner[q.count() - 1].__points, s, t - 1, e, f, r, i, j);
					}
					s = t + 1;
				}
			}
			if (g == $.ig.UnknownValuePlotting.prototype.dontPlot || n.count() == 0) {
				var aa = new $.ig.PolyLineSegment();
				var ab = new $.ig.PolyLineSegment();
				var ac = new $.ig.PolyLineSegment();
				var ad = new $.ig.PolyLineSegment();
				n.add(aa);
				o.add(ad);
				p.add(ab);
				q.add(ac);
			}
			this.o(n.__inner[n.count() - 1].__points, o.__inner[o.count() - 1].__points, p.__inner[p.count() - 1].__points, q.__inner[q.count() - 1].__points, s, d - 1, e, f, r, i, j);
			if (r == null && n.count() == 1 && h != null) {
				this.j(n.__inner[0], h);
			}

		} else {
			n.add(new $.ig.PolyLineSegment());
			o.add(new $.ig.PolyLineSegment());
			p.add(new $.ig.PolyLineSegment());
			q.add(new $.ig.PolyLineSegment());
			this.l(n.__inner[0].__points, o.__inner[0].__points, p.__inner[0].__points, q.__inner[0].__points, d, e, f, h, i, j);
		}
		for (var ae = 0; ae < n.count(); ae++) {
			var af = n.__inner[ae];
			var ag = o.__inner[ae];
			var ah = p.__inner[ae];
			var ai = q.__inner[ae];
			if (af.__points.count() > 0) {
				var aj = (function () { var $ret = new $.ig.PathFigure();
$ret.__startPoint = af.__points.__inner[0]; return $ret;}());
				aj.__segments.add(af);
				k.d().add(aj);
			}
			if (ag.__points.count() > 0) {
				var ak = (function () { var $ret = new $.ig.PathFigure();
$ret.__startPoint = ag.__points.__inner[0]; return $ret;}());
				ak.__segments.add(ag);
				m.d().add(ak);
			}
			if (ah.__points.count() > 0 && ai.__points.count() > 0) {
				var al = new $.ig.PolyLineSegment();
				if (h != null) {
					var am = h.i();
					h.i(true);
					h.h(al.__points);
					var ao = ah.__points.getEnumerator();
					while (ao.moveNext()) {
						var an = ao.current();
						h.l(an);
					}
					var aq = ai.__points.reverse$1($.ig.Point.prototype.$type).getEnumerator();
					while (aq.moveNext()) {
						var ap = aq.current();
						h.l(ap);
					}
					h.h(null);
					h.i(am);

				} else {
					var as = ah.__points.getEnumerator();
					while (as.moveNext()) {
						var ar = as.current();
						al.__points.add(ar);
					}
					var au = ai.__points.reverse$1($.ig.Point.prototype.$type).getEnumerator();
					while (au.moveNext()) {
						var at = au.current();
						al.__points.add(at);
					}
				}
				if (al.__points.count() > 0) {
					var av = (function () { var $ret = new $.ig.PathFigure();
$ret.__startPoint = al.__points.__inner[0]; return $ret;}());
					av.__segments.add(al);
					l.d().add(av);
				}
			}
		}
	}

, 
	j: function (a, b) {
		var c = a.__points;
		b.h(a.__points = new $.ig.PointCollection(0));
		var e = c.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			b.l(d);
		}
		b.h(null);
	}

, 
	k: function (a, b, c, d, e, f, g, h, i, j) {
		a.bn().clear();
		c.bn().clear();
		d.bn().clear();
		b.bn().clear();
		this.l(a.bn(), b.bn(), c.bn(), d.bn(), e, f, g, h, i, j);
		a.a6(a.bn().count() > 0);
		c.a6(c.bn().count() > 0);
		d.a6(d.bn().count() > 0);
		b.a6(b.bn().count() > 0);
	}

, 
	l: function (a, b, c, d, e, f, g, h, i, j) {
		this.o(a, b, c, d, 0, e - 1, f, g, h, i, j);
	}

, 
	m: function (a, b, c, d, e, f, g) {
		var h = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), d, e, f, b, c, g);
		var i = 0;
		var j = h.count();
		var k;
		var l;
		var m;
		if (e) {
			for (var n = 0; n < j; n++) {
				i = h.__inner[n];
				k = d.__inner[i];
				l = k[0];
				m = k[1];
				var o = {__x: l, __y: m, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
				a.add(o);
			}
		} else if (f) {
			for (var p = 0; p < j; p++) {
				i = h.__inner[p];
				k = d.__inner[i];
				l = k[0];
				m = k[2];
				var q = {__x: l, __y: m, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
				a.add(q);
			}

		} else {
			for (var r = 0; r < j; r++) {
				i = h.__inner[r];
				k = d.__inner[i];
				l = k[2];
				m = k[3];
				var s = {__x: l, __y: m, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
				a.add(s);
			}
		}
	}

, 
	n: function (a, b, c, d) {
		c.h(a);
		for (var e = 0; e < b.count(); e++) {
			c.l(b.__inner[e]);
		}
		c.h(null);
	}

, 
	o: function (a, b, c, d, e, f, g, h, i, j, k) {
		if (f > -1) {
			if (j == 1 && !this.c()) {
				var l = new $.ig.PointCollection(0);
				this.m(l, e, f, g, true, h, k);
				if (i != null) {
					this.n(a, l, i, k);

				} else {
					var n = l.getEnumerator();
					while (n.moveNext()) {
						var m = n.current();
						a.add(m);
					}
				}

			} else {
				var o = new $.ig.PointCollection(0);
				var p = new $.ig.PointCollection(0);
				this.m(o, e, f, g, true, h, k);
				this.m(p, e, f, g, false, h, k);
				var r = o.getEnumerator();
				while (r.moveNext()) {
					var q = r.current();
					c.add(q);
				}
				var t = p.getEnumerator();
				while (t.moveNext()) {
					var s = t.current();
					d.add(s);
				}
				if (i != null) {
					this.n(a, o, i, k);
					this.n(b, p, i, k);

				} else {
					var v = o.getEnumerator();
					while (v.moveNext()) {
						var u = v.current();
						a.add(u);
					}
					var x = p.getEnumerator();
					while (x.moveNext()) {
						var w = x.current();
						b.add(w);
					}
				}
			}
		}
	}

, 
	p: function (a, b, c, d, e, f, g, h, i, j, k) {
		var $self = this;
		var l = new $.ig.PathGeometry();
		var m = new $.ig.PathGeometry();
		var n = new $.ig.PathGeometry();
		var o = new $.ig.PathGeometry();
		a.bp(l);
		b.bp(m);
		c.bp(n);
		d.bp(o);
		l.d(new $.ig.PathFigureCollection());
		m.d(new $.ig.PathFigureCollection());
		n.d(new $.ig.PathFigureCollection());
		o.d(new $.ig.PathFigureCollection());
		var p = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		var q = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		var r = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		var s = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		if (k == $.ig.UnknownValuePlotting.prototype.linearInterpolate || k == $.ig.UnknownValuePlotting.prototype.dontPlot) {
			var t = 0;
			for (var u = 0; u < e; u++) {
				if (isNaN(f.__inner[u][1])) {
					var v = u - t;
					var w = (k == $.ig.UnknownValuePlotting.prototype.linearInterpolate && v > 0) || (k == $.ig.UnknownValuePlotting.prototype.dontPlot && v > 1);
					if (w) {
						if (k == $.ig.UnknownValuePlotting.prototype.dontPlot || q.count() == 0) {
							var x = new $.ig.PolyLineSegment();
							var y = new $.ig.PolyLineSegment();
							var z = new $.ig.PolyLineSegment();
							var aa = new $.ig.PolyLineSegment();
							p.add(x);
							q.add(y);
							r.add(z);
							s.add(aa);
						}
						this.q(p.__inner[p.count() - 1].__points, q.__inner[q.count() - 1].__points, r.__inner[r.count() - 1].__points, s.__inner[s.count() - 1].__points, t, u - 1, f, g, h, i);
						if (k == $.ig.UnknownValuePlotting.prototype.dontPlot) {
							j(p.__inner[p.count() - 1].__points, q.__inner[q.count() - 1].__points, r.__inner[r.count() - 1].__points, s.__inner[s.count() - 1].__points, false);
						}
					}
					t = u + 1;
				}
			}
			if (k == $.ig.UnknownValuePlotting.prototype.dontPlot || q.count() == 0) {
				var ab = new $.ig.PolyLineSegment();
				var ac = new $.ig.PolyLineSegment();
				var ad = new $.ig.PolyLineSegment();
				var ae = new $.ig.PolyLineSegment();
				p.add(ab);
				q.add(ac);
				r.add(ad);
				s.add(ae);
			}
			this.q(p.__inner[p.count() - 1].__points, q.__inner[q.count() - 1].__points, r.__inner[r.count() - 1].__points, s.__inner[s.count() - 1].__points, t, e - 1, f, g, h, i);
			j(p.__inner[p.count() - 1].__points, q.__inner[q.count() - 1].__points, r.__inner[r.count() - 1].__points, s.__inner[s.count() - 1].__points, true);

		} else {
			p.add(new $.ig.PolyLineSegment());
			q.add(new $.ig.PolyLineSegment());
			r.add(new $.ig.PolyLineSegment());
			s.add(new $.ig.PolyLineSegment());
			this.q(p.__inner[0].__points, q.__inner[0].__points, r.__inner[0].__points, s.__inner[0].__points, 0, e - 1, f, g, h, i);
			j(p.__inner[0].__points, q.__inner[0].__points, r.__inner[0].__points, s.__inner[0].__points, true);
		}
		for (var af = 0; af < q.count(); af++) {
			var ag = p.__inner[af];
			var ah = q.__inner[af];
			var ai = r.__inner[af];
			var aj = s.__inner[af];
			if (ag.__points.count() > 0) {
				var ak = (function () { var $ret = new $.ig.PathFigure();
$ret.__startPoint = ag.__points.__inner[0]; return $ret;}());
				ak.__segments.add(ag);
				l.d().add(ak);
			}
			if (ah.__points.count() > 0) {
				var al = (function () { var $ret = new $.ig.PathFigure();
$ret.__startPoint = ah.__points.__inner[0]; return $ret;}());
				al.__segments.add(ah);
				m.d().add(al);
			}
			if (ai.__points.count() > 0) {
				var am = (function () { var $ret = new $.ig.PathFigure();
$ret.__startPoint = ai.__points.__inner[0]; return $ret;}());
				am.__segments.add(ai);
				n.d().add(am);
			}
			if (aj.__points.count() > 0) {
				var an = (function () { var $ret = new $.ig.PathFigure();
$ret.__startPoint = aj.__points.__inner[0]; return $ret;}());
				an.__segments.add(aj);
				o.d().add(an);
			}
		}
	}

, 
	q: function (a, b, c, d, e, f, g, h, i, j) {
		this.d().clear();
		if (i == 1 && !this.c()) {
			var k = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), g, true, h, e, f, j);
			var l = k.count();
			var m = 0;
			var n;
			var o;
			var p;
			for (var q = 0; q < l; q++) {
				m = k.__inner[q];
				n = g.__inner[m];
				o = n[0];
				p = n[1];
				a.add({__x: o, __y: p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				d.add({__x: o, __y: p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				this.d().add({__x: o, __y: p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}

		} else {
			var r = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), g, true, h, e, f, j);
			var s = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), g, false, h, e, f, j);
			var t = r.count();
			var u = s.count();
			var v = 0;
			var w;
			var x;
			var y;
			for (var z = 0; z < t; z++) {
				v = r.__inner[z];
				w = g.__inner[v];
				x = w[0];
				y = w[1];
				a.add({__x: x, __y: y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				b.add({__x: x, __y: y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				c.add({__x: x, __y: y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				this.d().add({__x: x, __y: y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
			var aa;
			var ab;
			for (var ac = u - 1; ac >= 0; ac--) {
				v = s.__inner[ac];
				w = g.__inner[v];
				if (h) {
					aa = w[0];
					ab = w[2];

				} else {
					aa = w[2];
					ab = w[3];
				}
				d.add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				c.add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
		}
	}
,
	$type: new $.ig.Type('CategoryLineRasterizer', $.ig.Object.prototype.$type)
}, true);

























































































































































$.ig.util.defType('CategoryMarkerManager', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c, d) {
		var e = a.ie();
		if (c == null) {
			return;
		}
		if (e) {
			for (var f = 0; f < b.count(); ++f) {
				$.ig.CategoryMarkerManager.prototype.b(c, f, b, d);
			}
		}
	}

, 
	b: function (a, b, c, d) {
		a.item(b).y(c.__inner[b].__x);
		a.item(b).x(c.__inner[b].__y);
	}
,
	$type: new $.ig.Type('CategoryMarkerManager', $.ig.Object.prototype.$type)
}, true);










$.ig.util.defType('SeriesRenderingArguments', 'Object', {

		init: function (a, b, c, d) {


			$.ig.Object.prototype.init.call(this);
						this.h(a.transitionDuration());
				this.j(a);
				this.f(b);
				this.g(c);
				this.i(d);
		}
, 
	_f: null,
	f: function (a) {
		if (arguments.length === 1) {
			this._f = a;
			return a;
		} else {
			return this._f;
		}
	}

, 
	_g: null,
	g: function (a) {
		if (arguments.length === 1) {
			this._g = a;
			return a;
		} else {
			return this._g;
		}
	}

, 
	_h: null,
	h: function (a) {
		if (arguments.length === 1) {
			this._h = a;
			return a;
		} else {
			return this._h;
		}
	}

, 
	_i: null,
	i: function (a) {
		if (arguments.length === 1) {
			this._i = a;
			return a;
		} else {
			return this._i;
		}
	}

, 
	_j: null,
	j: function (a) {
		if (arguments.length === 1) {
			this._j = a;
			return a;
		} else {
			return this._j;
		}
	}
,
	$type: new $.ig.Type('SeriesRenderingArguments', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SeriesRenderer$2', 'Object', {
	$tFrame: null, 
	$tView: null
, 
	_g: null,
	g: function (a) {
		if (arguments.length === 1) {
			this._g = a;
			return a;
		} else {
			return this._g;
		}
	}

, 
	_h: null,
	h: function (a) {
		if (arguments.length === 1) {
			this._h = a;
			return a;
		} else {
			return this._h;
		}
	}

, 
	_i: null,
	i: function (a) {
		if (arguments.length === 1) {
			this._i = a;
			return a;
		} else {
			return this._i;
		}
	}

, 
	_j: null,
	j: function (a) {
		if (arguments.length === 1) {
			this._j = a;
			return a;
		} else {
			return this._j;
		}
	}

, 
	_k: null,
	k: function (a) {
		if (arguments.length === 1) {
			this._k = a;
			return a;
		} else {
			return this._k;
		}
	}

, 
		init: function ($tFrame, $tView, initNumber, a, b, c, d) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}

			var $self = this;

			this.$tFrame = $tFrame
			this.$tView = $tView
			this.$type = this.$type.specialize(this.$tFrame, this.$tView);
			$.ig.Object.prototype.init.call(this);
						this.g(a);
				this.h(b);
				this.i(function (e) {
				});
				this.k(c);
				this.j(d);
		}
, 
		init1: function ($tFrame, $tView, initNumber, a, b, c, d, e) {

			var $self = this;

			this.$tFrame = $tFrame
			this.$tView = $tView
			this.$type = this.$type.specialize(this.$tFrame, this.$tView);
			$.ig.Object.prototype.init.call(this);
						this.g(a);
				this.h(b);
				this.i(e);
				this.k(c);
				this.j(d);
		}
, 
	v: function (a, b, c, d, e) {
		var f = 0;
		f = a.h();
		if (a.i() && f > 0) {
			var g = b;
			if (this.k()()) {
				b = d;
				d = g;

			} else {
				b = c;
				c = g;
			}
			this.i()(c);
			this.g()(c, e);
			this.j()();

		} else {
			this.i()(c);
			this.g()(c, e);
			this.h()(c, e);
		}
		return {
			previousFrame: b,
			currentFrame: c,
			transitionFrame: d
		};
	}
,
	$type: new $.ig.Type('SeriesRenderer$2', $.ig.Object.prototype.$type)
}, true);











$.ig.util.defType('TrendFitCalculator', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c, d, e, f, g, h, i, j, k) {
		if (d == null) {
			switch (b) {
				case $.ig.TrendLineType.prototype.linearFit:
					d = $.ig.LeastSquaresFit.prototype.j(e, f, g);
					break;
				case $.ig.TrendLineType.prototype.quadraticFit:
					d = $.ig.LeastSquaresFit.prototype.v(e, f, g);
					break;
				case $.ig.TrendLineType.prototype.cubicFit:
					d = $.ig.LeastSquaresFit.prototype.y(e, f, g);
					break;
				case $.ig.TrendLineType.prototype.quarticFit:
					d = $.ig.LeastSquaresFit.prototype.ab(e, f, g);
					break;
				case $.ig.TrendLineType.prototype.quinticFit:
					d = $.ig.LeastSquaresFit.prototype.ae(e, f, g);
					break;
				case $.ig.TrendLineType.prototype.exponentialFit:
					d = $.ig.LeastSquaresFit.prototype.p(e, f, g);
					break;
				case $.ig.TrendLineType.prototype.logarithmicFit:
					d = $.ig.LeastSquaresFit.prototype.m(e, f, g);
					break;
				case $.ig.TrendLineType.prototype.powerLawFit:
					d = $.ig.LeastSquaresFit.prototype.s(e, f, g);
					break;
				default:
					throw new $.ig.NotImplementedException();
			}
		}
		if (d == null) {
			return null;
		}
		for (var l = 0; l < c.k().width(); l += 2) {
			var m = l / (c.k().width() - 1);
			var n = j + m * (k - j);
			var o = NaN;
			switch (b) {
				case $.ig.TrendLineType.prototype.linearFit:
					o = $.ig.LeastSquaresFit.prototype.k(d, n);
					break;
				case $.ig.TrendLineType.prototype.quadraticFit:
					o = $.ig.LeastSquaresFit.prototype.w(d, n);
					break;
				case $.ig.TrendLineType.prototype.cubicFit:
					o = $.ig.LeastSquaresFit.prototype.z(d, n);
					break;
				case $.ig.TrendLineType.prototype.quarticFit:
					o = $.ig.LeastSquaresFit.prototype.ac(d, n);
					break;
				case $.ig.TrendLineType.prototype.quinticFit:
					o = $.ig.LeastSquaresFit.prototype.af(d, n);
					break;
				case $.ig.TrendLineType.prototype.exponentialFit:
					o = $.ig.LeastSquaresFit.prototype.q(d, n);
					break;
				case $.ig.TrendLineType.prototype.logarithmicFit:
					o = $.ig.LeastSquaresFit.prototype.n(d, n);
					break;
				case $.ig.TrendLineType.prototype.powerLawFit:
					o = $.ig.LeastSquaresFit.prototype.t(d, n);
					break;
				default:
					throw new $.ig.NotImplementedException();
			}
			n = h(n);
			o = i(o);
			if (!isNaN(o) && !Number.isInfinity(o)) {
				a.add({__x: n + c.n(), __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
		}
		return d;
	}
,
	$type: new $.ig.Type('TrendFitCalculator', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TrendAverageCalculator', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c) {
		var d;
		switch (a) {
			case $.ig.TrendLineType.prototype.simpleAverage:
			case $.ig.TrendLineType.prototype.exponentialAverage:
			case $.ig.TrendLineType.prototype.modifiedAverage:
			case $.ig.TrendLineType.prototype.weightedAverage:
				if (c < 1) {
					c = 1;
				}
				break;
		}
		switch (a) {
			case $.ig.TrendLineType.prototype.simpleAverage:
				d = $.ig.Series.prototype.sMA(b, c);
				break;
			case $.ig.TrendLineType.prototype.exponentialAverage:
				d = $.ig.Series.prototype.eMA(b, c);
				break;
			case $.ig.TrendLineType.prototype.modifiedAverage:
				d = $.ig.Series.prototype.mMA(b, c);
				break;
			case $.ig.TrendLineType.prototype.cumulativeAverage:
				d = $.ig.Series.prototype.cMA(b);
				break;
			case $.ig.TrendLineType.prototype.weightedAverage:
				d = $.ig.Series.prototype.wMA(b, c);
				break;
			default:
				throw new $.ig.NotImplementedException();
		}
		return d;
	}

, 
	b: function (a, b, c, d) {
		if (b.count() == 0) {
			var e = $.ig.TrendAverageCalculator.prototype.a(a, c, d);
			var g = e.getEnumerator();
			while (g.moveNext()) {
				var f = g.current();
				b.add(f);
			}
		}
	}

, 
	c: function (a, b, c, d, e) {
		if (b.count() == 0) {
			var f = $.ig.TrendAverageCalculator.prototype.a(a, c, e).getEnumerator();
			var g = $.ig.TrendAverageCalculator.prototype.a(a, d, e).getEnumerator();
			while (f.moveNext() && g.moveNext()) {
				b.add({__x: f.current(), __y: g.current(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
		}
	}
,
	$type: new $.ig.Type('TrendAverageCalculator', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('RadialTrendLineManager', 'TrendLineManagerBase$1', {
	init: function () {

		$.ig.TrendLineManagerBase$1.prototype.init.call(this, Number);

	}
, 
	ao: function (a, b, c, d, e, f, g, h) {
		var $self = this;
		var i = g.h() * g.j();
		var j = g.i() * g.j();
		var k = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		if (!g.l().isEmpty() && !g.k().isEmpty()) {
			if (b == $.ig.TrendLineType.prototype.none) {
				this.m(null);
				this.l().clear();
				return;
			}
			if (this.u(b)) {
				this.l().clear();
				this.m($.ig.TrendFitCalculator.prototype.a(k, b, g, this.m(), c.count(), function (l) { return l + 1				}, function (m) { return c.item(m)				}, e, f, i, j));
			}
			if (this.v(b)) {
				this.m(null);
				$.ig.TrendAverageCalculator.prototype.b(b, this.l(), c, d);
				for (var n = g.h(); n <= g.i(); n += 1) {
					var o = (n % c.count()) * g.j();
					if (o >= 0 && o < this.l().count()) {
						var p = e(o);
						var q = f(this.l().__inner[o]);
						if (!isNaN(p) && !isNaN(q)) {
							k.add({__x: p + g.n(), __y: q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
						}
					}
				}
			}
			if (k.count() > 0) {
				this.y(k, g, a, h);
			}
		}
	}

, 
	_ak: null,
	ak: function (a) {
		if (arguments.length === 1) {
			this._ak = a;
			return a;
		} else {
			return this._ak;
		}
	}

, 
	_al: null,
	al: function (a) {
		if (arguments.length === 1) {
			this._al = a;
			return a;
		} else {
			return this._al;
		}
	}

, 
	_am: null,
	am: function (a) {
		if (arguments.length === 1) {
			this._am = a;
			return a;
		} else {
			return this._am;
		}
	}

, 
	_an: null,
	an: function (a) {
		if (arguments.length === 1) {
			this._an = a;
			return a;
		} else {
			return this._an;
		}
	}

, 
	y: function (a, b, c, d) {
		var $self = this;
		if (d != null) {
			d.h(c);
		}
		var i = (function () { var $ret = new $.ig.PolarLinePlanner();
$ret.q(function (e) { return a.item(e).__x});
$ret.r(function (f) { return a.item(f).__y});
$ret.y(d);
$ret.v(a.count());
$ret.u(b.m());
$ret.s(function (g) { return $self.am()(a.item(g).__x, a.item(g).__y)});
$ret.t(function (h) { return $self.an()(a.item(h).__x, a.item(h).__y)});
$ret.o(true);
$ret.w(b.k());
$ret.x(b.l()); return $ret;}());
		i.bf();
	}
,
	$type: new $.ig.Type('RadialTrendLineManager', $.ig.TrendLineManagerBase$1.prototype.$type.specialize(Number))
}, true);





































$.ig.util.defType('Legend', 'LegendBase', {

	bu: function () {
		return new $.ig.LegendView(this);
	}

, 
	bv: function (a) {
		$.ig.LegendBase.prototype.bv.call(this, a);
		this.ce(a);
	}

, 
	_ce: null,
	ce: function (a) {
		if (arguments.length === 1) {
			this._ce = a;
			return a;
		} else {
			return this._ce;
		}
	}

, 
		init: function () {

			var $self = this;

			$.ig.LegendBase.prototype.init.call(this);
						this.a3($.ig.Legend.prototype.$type);
				this.children().collectionChanged = $.ig.Delegate.prototype.combine(this.children().collectionChanged, function (a, b) {
					if (b.oldItems() != null) {
						var d = b.oldItems().getEnumerator();
						while (d.moveNext()) {
							var c = d.current();
							$self.ce().aa(c);
						}
					}
					if (b.newItems() != null) {
						var f = b.newItems().getEnumerator();
						while (f.moveNext()) {
							var e = f.current();
							$self.ce().ab(e);
						}
					}
				});
		}
, 
	by: function (a, b) {
		var $self = this;
		var c = 0;
		var e = this.children().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			var f;
			var g;
			var h;
			(function () { var $ret = $self.bq().u(d, f, g, h); f = $ret.chart; g = $ret.series; h = $ret.item; return $ret.ret; }());
			if (b.seriesViewer() != null && f != null && (this.ch(b.seriesViewer()) < this.ch(f) || (this.ch(b.seriesViewer()) == -1 && this.ch(f) == -1 && b.seriesViewer().getHashCode() < f.getHashCode()))) {
				break;
			}
			if (b.seriesViewer() != null && f != null && b.seriesViewer() == f && g != null) {
				var i = b.index();
				var j = g.index();
				if (i <= j) {
					break;
				}
			}
			c++;
		}
		this.children().insert(c, a);
	}

, 
	ch: function (a) {
		return -1;
	}
,
	$type: new $.ig.Type('Legend', $.ig.LegendBase.prototype.$type)
}, true);

$.ig.util.defType('LegendView', 'LegendBaseView', {

		init: function (a) {


			$.ig.LegendBaseView.prototype.init.call(this, a);
						this.aq(a);
		}
, 
	_aq: null,
	aq: function (a) {
		if (arguments.length === 1) {
			this._aq = a;
			return a;
		} else {
			return this._aq;
		}
	}

, 
	r: function () {
		$.ig.LegendBaseView.prototype.r.call(this);
	}
,
	$type: new $.ig.Type('LegendView', $.ig.LegendBaseView.prototype.$type)
}, true);



















$.ig.util.defType('AngleRadiusPair', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_d: null,
	d: function (a) {
		if (arguments.length === 1) {
			this._d = a;
			return a;
		} else {
			return this._d;
		}
	}

, 
	_e: null,
	e: function (a) {
		if (arguments.length === 1) {
			this._e = a;
			return a;
		} else {
			return this._e;
		}
	}

, 
	_f: null,
	f: function (a) {
		if (arguments.length === 1) {
			this._f = a;
			return a;
		} else {
			return this._f;
		}
	}
,
	$type: new $.ig.Type('AngleRadiusPair', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PolarLinePlanner', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_o: null,
	o: function (a) {
		if (arguments.length === 1) {
			this._o = a;
			return a;
		} else {
			return this._o;
		}
	}

, 
	_p: null,
	p: function (a) {
		if (arguments.length === 1) {
			this._p = a;
			return a;
		} else {
			return this._p;
		}
	}

, 
	_q: null,
	q: function (a) {
		if (arguments.length === 1) {
			this._q = a;
			return a;
		} else {
			return this._q;
		}
	}

, 
	_r: null,
	r: function (a) {
		if (arguments.length === 1) {
			this._r = a;
			return a;
		} else {
			return this._r;
		}
	}

, 
	_s: null,
	s: function (a) {
		if (arguments.length === 1) {
			this._s = a;
			return a;
		} else {
			return this._s;
		}
	}

, 
	_t: null,
	t: function (a) {
		if (arguments.length === 1) {
			this._t = a;
			return a;
		} else {
			return this._t;
		}
	}

, 
	_u: null,
	u: function (a) {
		if (arguments.length === 1) {
			this._u = a;
			return a;
		} else {
			return this._u;
		}
	}

, 
	_v: null,
	v: function (a) {
		if (arguments.length === 1) {
			this._v = a;
			return a;
		} else {
			return this._v;
		}
	}
, 
	a: null
, 
	w: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			return a;
		} else {
			return this.a;
		}
	}
, 
	b: null
, 
	x: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			return a;
		} else {
			return this.b;
		}
	}

, 
	_y: null,
	y: function (a) {
		if (arguments.length === 1) {
			this._y = a;
			return a;
		} else {
			return this._y;
		}
	}

, 
	_z: null,
	z: function (a) {
		if (arguments.length === 1) {
			this._z = a;
			return a;
		} else {
			return this._z;
		}
	}

, 
	_aa: null,
	aa: function (a) {
		if (arguments.length === 1) {
			this._aa = a;
			return a;
		} else {
			return this._aa;
		}
	}

, 
	_ab: null,
	ab: function (a) {
		if (arguments.length === 1) {
			this._ab = a;
			return a;
		} else {
			return this._ab;
		}
	}

, 
	a4: function () {
		if (this.q() == null || this.r() == null || this.s() == null || this.t() == null || this.w() == $.ig.Rect.prototype.empty() || this.x() == $.ig.Rect.prototype.empty()) {
			return false;
		}
		return true;
	}

, 
	a5: function (a, b, c, d) {
		var e = a(d) - a(c);
		var f = b(d) - b(c);
		return e * e + f * f;
	}

, 
	a6: function (a) {
		var b = new $.ig.List$1($.ig.AngleRadiusPair.prototype.$type, 0);
		var c = this.u() * this.u();
		var d;
		if (a != null) {
			d = a;

		} else {
			d = $.ig.Enumerable.prototype.a(0, this.v());
		}
		var e = d.getEnumerator();
		var f = true;
		f = e.moveNext();
		var g = e.current();
		while (f) {
			var h = g;
			f = e.moveNext();
			g = e.current();
			while (f && this.a5(this.s(), this.t(), h, g) < c) {
				f = e.moveNext();
				g = e.current();
			}
			var i = new $.ig.AngleRadiusPair();
			i.d(h);
			if (!this.o()) {
				i.e(this.q()(h));
				i.f(this.r()(h));
			}
			b.add(i);
		}
		return b;
	}

, 
	a7: function (a) {
		var c = this.a6(a).getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			if (isNaN(b.e()) || Number.isInfinity(b.e()) || isNaN(b.f()) || Number.isInfinity(b.f())) {
				this.be({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				continue;
			}
			this.be({__x: this.s()(b.d()), __y: this.t()(b.d()), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
	}

, 
	a8: function () {
		return Math.pow(this.u() / (Math.max(this.w().width() / this.x().width(), this.w().height() / this.x().height())), 2);
	}

, 
	a9: function (a, b) {
		var c = 0.5 + b * Math.cos(a);
		var d = 0.5 + b * Math.sin(a);
		c = this.a.left() + this.a.width() * (c - this.b.left()) / this.b.width();
		d = this.a.top() + this.a.height() * (d - this.b.top()) / this.b.height();
		this.be({__x: c, __y: d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}

, 
	ba: function (a) {
		var b = this.a8();
		var c = this.a6(a);
		var d = c.item(0).e();
		var e = c.item(0).f();
		var f = c.item(0).d();
		for (var g = 1; g < c.count(); g++) {
			var h = c.item(g).e();
			var i = c.item(g).f();
			var j = c.item(g).d();
			if (isNaN(h) || Number.isInfinity(h) || isNaN(i) || Number.isInfinity(i)) {
				this.be({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				if (this.p() != $.ig.UnknownValuePlotting.prototype.linearInterpolate) {
					g++;
					if (g < c.count()) {
						d = c.item(g).e();
						e = c.item(g).f();
					}
				}
				continue;
			}
			this.bb(h, i, d, e, g, b, f > j);
			d = h;
			e = i;
			f = j;
		}
	}

, 
	bb: function (a, b, c, d, e, f, g) {
		var h = false;
		if ((a < c && !g) || (a > c && g)) {
			h = true;
			var i = a;
			a = c;
			c = i;
			i = b;
			b = d;
			d = i;
		}
		var j = $.ig.Flattener.prototype.b(c, d, a, b, f);
		if (h) {
			j = j.reverse$1(Number);
		}
		var l = j.getEnumerator();
		while (l.moveNext()) {
			var k = l.current();
			var m = c + k * (a - c);
			var n = d + k * (b - d);
			this.a9(m, n);
		}
	}

, 
	bc: function (a) {
		var $self = this;
		var b = this.w().top() - 10;
		var c = this.w().bottom() + 10;
		var d = this.w().left() - 10;
		var e = this.w().right() + 10;
		if (this.y() == null) {
			this.y((function () { var $ret = new $.ig.Clipper(1, d, c, e, b, $self.aa());
			$ret.h(a); return $ret;}()));
		}
	}

, 
	bd: function (a) {
		return !isNaN(a.__x) && !isNaN(a.__y) && !Number.isInfinity(a.__x) && !Number.isInfinity(a.__y);
	}

, 
	be: function (a) {
		if (this.p() == $.ig.UnknownValuePlotting.prototype.linearInterpolate && !this.bd(a)) {
			return;
		}
		if (this.z()) {
			this.ab().add(a);

		} else {
			this.y().l(a);
		}
	}

, 
	bf: function (a) {
		this.bg(null, null);
	}

, 
	bg: function (a, b) {
		this.ab(a);
		if (!this.a4()) {
			return;
		}
		if (this.v() > 1) {
			this.bc(a);
			if (this.o()) {
				this.a7(b);

			} else {
				this.ba(b);
			}
			this.y().h(null);
		}
	}
,
	$type: new $.ig.Type('PolarLinePlanner', $.ig.Object.prototype.$type)
}, true);









$.ig.util.defType('RadialBase', 'MarkerSeries', {

	ea: function (a) {
		$.ig.MarkerSeries.prototype.ea.call(this, a);
		this.i2(a);
	}

, 
	_i2: null,
	i2: function (a) {
		if (arguments.length === 1) {
			this._i2 = a;
			return a;
		} else {
			return this._i2;
		}
	}

, 
		init: function () {

			var $self = this;
			this.it = new $.ig.RadialFrame(3);
			this.iu = new $.ig.RadialFrame(3);
			this.iv = new $.ig.RadialFrame(3);

			$.ig.MarkerSeries.prototype.init.call(this);
						this.i3(new $.ig.SeriesRenderer$2($.ig.RadialFrame.prototype.$type, $.ig.RadialBaseView.prototype.$type, 1, this.i8.on(this), this.i9.on(this), this.fo.on(this), this.fp.on(this), function (a) { return $self.i2().da().q($self.resolution())				}));
		}
, 
	categoryAxis: function () {
			return this.angleAxis();
	}

, 
	_i3: null,
	i3: function (a) {
		if (arguments.length === 1) {
			this._i3 = a;
			return a;
		} else {
			return this._i3;
		}
	}

, 
	angleAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RadialBase.prototype.angleAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.RadialBase.prototype.angleAxisProperty);
		}
	}

, 
	valueAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RadialBase.prototype.valueAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.RadialBase.prototype.valueAxisProperty);
		}
	}

, 
	clipSeriesToBounds: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RadialBase.prototype.clipSeriesToBoundsProperty, a);
			return a;
		} else {
			return this.b($.ig.RadialBase.prototype.clipSeriesToBoundsProperty);
		}
	}

, 
	ey: function (a, b) {
		this.i2().da().q(this.resolution());
		this.renderSeries(false);
	}

, 
	ez: function (a, b) {
		this.i2().da().q(this.resolution());
		this.renderSeries(false);
	}

, 
	preferredCategoryMode: function (a) {
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.MarkerSeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.RadialBase.prototype.bc:
				if (c != null && d == null) {
					if (this.angleAxis() != null) {
						this.angleAxis().deregisterSeries(this);
					}
					if (this.valueAxis() != null) {
						this.valueAxis().deregisterSeries(this);
					}
				}
				if (c == null && d != null) {
					if (this.angleAxis() != null) {
						this.angleAxis().registerSeries(this);
					}
					if (this.valueAxis() != null) {
						this.valueAxis().registerSeries(this);
					}
				}
				this.i2().da().q(this.resolution());
				this.renderSeries(false);
				break;
			case $.ig.RadialBase.prototype.iq:
				if (this.angleAxis() != null && this.valueAxis() != null) {
					this.iw = new $.ig.RadialAxes(this.valueAxis(), this.angleAxis());
				}
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				this.i2().da().q(this.resolution());
				this.renderSeries(false);
				break;
			case $.ig.RadialBase.prototype.ir:
				if (this.angleAxis() != null && this.valueAxis() != null) {
					this.iw = new $.ig.RadialAxes(this.valueAxis(), this.angleAxis());
				}
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				this.i2().da().q(this.resolution());
				if (this.valueAxis() == null || !this.valueAxis().updateRange()) {
					this.renderSeries(false);
				}
				break;
			case $.ig.Series.prototype.bb:
				if (this.syncLink() != null && this.seriesViewer() != null) {
					this.i2().da().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.RadialBase.prototype.bo:
				this.iu.a(this.dz(), this.it, this.iv);
				if (this.ew(this.view())) {
					return;
				}
				if (this.dz() == 1) {
					this.i9(this.iv, this.i2());

				} else {
					this.i9(this.iu, this.i2());
				}
				break;
			case $.ig.RadialBase.prototype.is:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.Series.prototype.a9:
				if (c != $.ig.Visibility.prototype.visible && d == $.ig.Visibility.prototype.visible) {
					this.i2().da().q(this.resolution());
				}
				break;
		}
	}

, 
	eh: function (a) {
		var b = this.eg(a);
		return b >= 0 && this.dx() != null && b < this.dx().g() ? this.dx().item(b) : null;
	}

, 
	eg: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		var d = -1;
		if (this.angleAxis() != null && !b.isEmpty() && !c.isEmpty() && this.iw != null) {
			var e = this.iw.n(a);
			if (e < 0) {
				e += Math.PI * 2;
			}
			if (e > Math.PI * 2) {
				e -= Math.PI * 2;
			}
			var f = this.angleAxis().getUnscaledAngle(e);
			if (this.angleAxis().categoryMode() != $.ig.CategoryMode.prototype.mode0) {
				f -= 0.5;
			}
			var g = Math.round(f);
			d = g;
		}
		return d;
	}

, 
	scrollIntoView: function (a) {
		return false;
	}
, 
	it: null, 
	iu: null, 
	iv: null
, 
	i8: function (a, b) {
	}

, 
	i9: function (a, b) {
	}
, 
	iw: null
, 
	fs: function () {
		$.ig.Series.prototype.fs.call(this);
		if (this.angleAxis() != null) {
			this.angleAxis().es(false);
		}
		if (this.valueAxis() != null) {
			this.valueAxis().es(false);
		}
	}

, 
	es: function (a, b, c) {
		var d = true;
		var e = c;
		if (!$.ig.Series.prototype.es.call(this, a, b, c) || !c.cc() || b.isEmpty() || a.isEmpty() || this.angleAxis() == null || this.angleAxis().itemsSource() == null || this.valueAxis() == null || this.iw == null || this.dx() == null || this.angleAxis().seriesViewer() == null || this.valueAxis().seriesViewer() == null || this.valueAxis().actualMinimumValue() == this.valueAxis().actualMaximumValue()) {
			e.da().h(0);
			d = false;
		}
		return d;
	}

, 
	eo: function (a) {
		var $self = this;
		var b;
		var c;
		(function () { var $ret = $self.getViewInfo(c, b); c = $ret.viewportRect; b = $ret.windowRect; return $ret.ret; }());
		if (!this.es(c, b, this.view())) {
			this.eu(true, this.view());
			return;
		}
		var d = new $.ig.SeriesRenderingArguments(this, c, b, a);
		(function () { var $ret = $self.i3().v(d, $self.it, $self.iv, $self.iu, $self.i2()); $self.it = $ret.previousFrame; $self.iv = $ret.currentFrame; $self.iu = $ret.transitionFrame; return $ret.ret; }());
	}

, 
	ja: function () {
		var a = 0;
		var c = this.seriesViewer().series().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			if (b == this) {
				return a;
			}
			var d = $.ig.util.cast($.ig.RadialBase.prototype.$type, b);
			if (d != null && d.angleAxis() == this.angleAxis() && d.preferredCategoryMode(d.angleAxis()) == $.ig.CategoryMode.prototype.mode2) {
				a++;
			}
		}
		$.ig.Debug.prototype.a(false, "RadialBase.GetMode2Index failed to find series");
		return -1;
	}
,
	$type: new $.ig.Type('RadialBase', $.ig.MarkerSeries.prototype.$type, [$.ig.IHasCategoryModePreference.prototype.$type])
}, true);

$.ig.util.defType('AnchoredRadialSeries', 'RadialBase', {

	ed: function () {
		return new $.ig.AnchoredRadialSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.RadialBase.prototype.ea.call(this, a);
		this.ju(a);
	}

, 
	_ju: null,
	ju: function (a) {
		if (arguments.length === 1) {
			this._ju = a;
			return a;
		} else {
			return this._ju;
		}
	}

, 
		init: function () {

			this.ji = {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};

			$.ig.RadialBase.prototype.init.call(this);
						this.jv(new $.ig.CategoryLineRasterizer());
		}
, 
	_jv: null,
	jv: function (a) {
		if (arguments.length === 1) {
			this._jv = a;
			return a;
		} else {
			return this._jv;
		}
	}

, 
	valueMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.valueMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.valueMemberPathProperty);
		}
	}

, 
	jw: function (a) {
		if (arguments.length === 1) {
			if (this.jh != a) {
				var b = this.jh;
				this.jh = a;
				this.ej($.ig.AnchoredRadialSeries.prototype.jg, b, this.jh);
			}
			return a;
		} else {
			return this.jh;
		}
	}
, 
	jh: null
, 
	trendLineType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.trendLineTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.trendLineTypeProperty);
		}
	}

, 
	trendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.trendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.trendLineBrushProperty);
		}
	}

, 
	actualTrendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.actualTrendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.actualTrendLineBrushProperty);
		}
	}

, 
	trendLineThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.trendLineThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.trendLineThicknessProperty);
		}
	}

, 
	trendLineDashCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.trendLineDashCapProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.trendLineDashCapProperty);
		}
	}

, 
	trendLineDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.trendLineDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.trendLineDashArrayProperty);
		}
	}

, 
	trendLinePeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.trendLinePeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.trendLinePeriodProperty);
		}
	}

, 
	trendLineZIndex: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredRadialSeries.prototype.trendLineZIndexProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredRadialSeries.prototype.trendLineZIndexProperty);
		}
	}

, 
	em: function (a) {
		if (a != null && a == this.angleAxis() && this.jw() != null && this.jw().count() > 0) {
			return new $.ig.AxisRange(0, this.jw().count() - 1);
		}
		if (a != null && a == this.valueAxis() && this.jw() != null && this.jw().count() > 0) {
			return new $.ig.AxisRange(this.jw().minimum(), this.jw().maximum());
		}
		return null;
	}

, 
	e6: function (a, b, c, d) {
		$.ig.RadialBase.prototype.e6.call(this, a, b, c, d);
		if (this.ju().dt().ae(a, b, c, d, this.trendLineDashArray())) {
			this.renderSeries(false);
			this.e5();
		}
		var e = $.ig.util.cast($.ig.NumericAxisBase.prototype.$type, this.valueAxis());
		switch (b) {
			case $.ig.Series.prototype.be:
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.jw());
					this.jw(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					this.jw(this.gs(this.valueMemberPath()));
					this.ju().da().q(this.resolution());
				}
				if (e != null && !e.updateRange()) {
					this.ju().da().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.AnchoredRadialSeries.prototype.jf:
				if (this.dx() != null) {
					this.dx().ac(this.jw());
					this.jw(this.gs(this.valueMemberPath()));
				}
				break;
			case $.ig.AnchoredRadialSeries.prototype.jg:
				if (e != null && !e.updateRange()) {
					this.ju().da().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.AnchoredRadialSeries.prototype.b6:
				this.fj();
				break;
			case $.ig.AnchoredRadialSeries.prototype.b4:
				this.e5();
				break;
		}
	}

, 
	fc: function (a, b, c, d) {
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.reset:
			case $.ig.FastItemsSourceEventAction.prototype.insert:
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				this.ju().da().q(this.resolution());
				break;
		}
		this.ju().dt().ad(a, b, c, d);
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				if (this.valueAxis() != null && !this.valueAxis().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.insert:
				if (this.valueAxis() != null && !this.valueAxis().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				if (this.valueAxis() != null && !this.valueAxis().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.replace:
				if (this.valueMemberPath() != null && this.ju().da().h() > 0 && this.valueAxis() != null && !this.valueAxis().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.change:
				if (d == this.valueMemberPath()) {
					if (this.valueAxis() != null && !this.valueAxis().updateRange()) {
						this.renderSeries(true);
					}
				}
				break;
		}
	}

, 
	es: function (a, b, c) {
		var d = $.ig.RadialBase.prototype.es.call(this, a, b, c);
		var e = c;
		if (this.dx() == null || this.dx().g() == 0 || this.angleAxis() == null || this.jw() == null || this.angleAxis().itemsCount() == 0 || this.valueAxis() == null || Number.isInfinity(this.valueAxis().actualMinimumValue()) || Number.isInfinity(this.valueAxis().actualMaximumValue()) || e.da().h() < 1) {
			d = false;
		}
		return d;
	}

, 
	jx: function () {
			return false;
	}

, 
	i8: function (a, b) {
		var $self = this;
		var c = b.ac();
		var d = b.ab();
		var e = this.angleAxis();
		var f = this.valueAxis();
		var g = f.actualMinimumValue();
		var h = f.actualMaximumValue();
		a.d.clear();
		a.f.clear();
		a.g.clear();
		var i = this.ie();
		var j = 0;
		var k = b;
		var l = new $.ig.CollisionAvoider();
		var m = 0;
		var n = b.da().g();
		var o = this.preferredCategoryMode(e);
		if (o == $.ig.CategoryMode.prototype.mode0 && e.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
			o = $.ig.CategoryMode.prototype.mode1;
		}
		switch (o) {
			case $.ig.CategoryMode.prototype.mode0:
				m = 0;
				break;
			case $.ig.CategoryMode.prototype.mode1:
				m = 0.5 * e.getCategorySize(c, d);
				break;
			case $.ig.CategoryMode.prototype.mode2:
				m = e.getGroupCenter(this.ja(), c, d);
				break;
		}
		if (e.isInverted()) {
			m = -m;
		}
		k.dt().ak(this.valueAxis().im());
		k.dt().al(this.valueAxis().io());
		k.dt().am(function (p, q) { return $self.j6(p, q, c, d)		});
		k.dt().an(function (r, s) { return $self.j7(r, s, c, d)		});
		var t = (function () { var $ret = new $.ig.Clipper(0, d, false);
$ret.h(a.g); return $ret;}());
		var u = (function () { var $ret = new $.ig.TrendResolutionParams();
$ret.j(b.da().h());
$ret.h(b.da().f());
$ret.i(n);
$ret.n(m);
$ret.m($self.resolution());
$ret.k(d);
$ret.l(c); return $ret;}());
		k.dt().ao(a.g, this.trendLineType(), this.jw(), this.trendLinePeriod(), function (v) { return $self.angleAxis().getScaledAngle(v)		}, function (w) { return $self.valueAxis().getScaledValue2(w)		}, u, t);
		var x = true;
		if (this.j8(b)) {
			n--;
		}
		for (var y = b.da().f(); y <= n; ++y) {
			var z = y;
			if (z * b.da().h() >= this.angleAxis().itemsCount()) {
				z -= $.ig.intDivide((this.angleAxis().itemsCount()), b.da().h());
			}
			var aa = b.da().getBucket(z);
			if (!isNaN(aa[0])) {
				aa[0] = (e.getScaledAngle(aa[0]) + m);
				if (aa[1] < g || aa[1] > h) {
					continue;
				}
				aa[1] = f.getScaledValue2(aa[1]);
				if (b.da().h() > 1) {
					if (aa[2] < g || aa[2] > h) {
						continue;
					}
					aa[2] = f.getScaledValue2(aa[2]);

				} else {
					aa[2] = aa[1];
				}
				if ((isNaN(aa[1]) || isNaN(aa[2])) && x && this.jx() && this.kb()) {
					n++;

				} else {
					x = false;
				}
				a.d.add(aa);
				if (i) {
					var ab = Math.min(z * b.da().h(), this.dx().g() - 1);
					var ac = this.iw.j(aa[0], aa[1], c, d);
					var ad = this.iw.m(aa[0], aa[1], c, d);
					var ae = new $.ig.Rect(0, ac - 5, ad - 5, 11, 11);
					if (!isNaN(ac) && !isNaN(ad) && !Number.isInfinity(ac) && !Number.isInfinity(ad) && l.tryAdd(ae)) {
						a.f.add({__x: ac, __y: ad, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
						var af = b.dc().item(j);
						($.ig.util.cast($.ig.DataContext.prototype.$type, af.a9())).item(this.dx().item(ab));
						++j;
					}
				}

			} else {
				if (x && this.jx() && this.kb()) {
					n++;
				}
			}
		}
		b.dc().g(j);
		return;
	}

, 
	j6: function (a, b, c, d) {
		return this.iw.j(a, b, c, d);
	}

, 
	j7: function (a, b, c, d) {
		return this.iw.m(a, b, c, d);
	}

, 
	j8: function (a) {
		var b = a;
		return !this.jx() && b.da().f() == 0 && b.da().g() == this.angleAxis().itemsCount();
	}

, 
	j9: function (a, b, c) {
		var d = null;
		var e = c.ac();
		var f = c.ab();
		if (b > -1 && !e.isEmpty() && !f.isEmpty()) {
			var g = a.__inner[0][0] < f.left() - 2000 ? f.left() - 10 : NaN;
			var h = f.bottom() + 10;
			var i = a.__inner[b][0] > f.right() + 2000 ? f.right() + 10 : NaN;
			var j = f.top() - 10;
			d = new $.ig.Clipper(1, g, h, i, j, false);
		}
		return d;
	}
, 
	ji: null
, 
	ka: function (a, b, c, d, e) {
		if (a.count() > 0 && d.count() > 0) {
			if (!e || this.kc()) {
				a.add(this.ji);
				a.add(a.__inner[0]);
				d.add(this.ji);
				d.add(d.__inner[0]);
			}
		}
	}

, 
	kb: function () {
		return !this.kc();
	}

, 
	kc: function () {
		var a = this.view().ac();
		return !a.contains1({__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		var c = b;
		if (a) {
			c.dc().clear();
		}
		c.dt().ab();
	}

, 
	i9: function (a, b) {
		var c = b.ac();
		var d = b.ab();
		var e = b;
		e.dt().t(a.g);
		$.ig.CategoryMarkerManager.prototype.a(this, a.f, e.dc(), this.useLightweightMarkers());
		e.c1();
		this.kd(d, c, e);
	}

, 
	kd: function (a, b, c) {
		c.dy(a, b);
	}

, 
	fj: function () {
		$.ig.MarkerSeries.prototype.fj.call(this);
		if (this.index() < 0) {
			return;
		}
		this.ju().dz();
	}

, 
	el: function (a, b) {
		if (a == this.ju().dt().n()) {
			return null;
		}
		return $.ig.Series.prototype.el.call(this, a, b);
	}

, 
	scrollIntoView: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		var d = !b.isEmpty() && !c.isEmpty() && this.dx() != null ? this.dx().item1(a) : -1;
		if (this.angleAxis() == null || this.jw() == null || this.valueAxis() == null) {
			return false;
		}
		if (d < 0 || d > this.jw().count() - 1) {
			return false;
		}
		var e = this.angleAxis().getScaledAngle(d);
		var f = this.valueAxis().getScaledValue2(this.jw().item(d));
		if (isNaN(f)) {
			f = (this.valueAxis().io() + this.valueAxis().im()) / 2;
		}
		var g = 0.5 + (Math.cos(e) * f);
		var h = 0.5 + (Math.sin(e) * f);
		if (!isNaN(g)) {
			if (g < b.left() + 0.1 * b.width()) {
				g = g + 0.4 * b.width();
				b.x(g - 0.5 * b.width());
			}
			if (g > b.right() - 0.1 * b.width()) {
				g = g - 0.4 * b.width();
				b.x(g - 0.5 * b.width());
			}
		}
		if (!isNaN(h)) {
			if (h < b.top() + 0.1 * b.height()) {
				h = h + 0.4 * b.height();
				b.y(h - 0.5 * b.height());
			}
			if (h > b.bottom() - 0.1 * b.height()) {
				h = h - 0.4 * b.height();
				b.y(h - 0.5 * b.height());
			}
		}
		if (this.syncLink() != null) {
			this.syncLink().bp(this.seriesViewer(), b);
		}
		return d >= 0;
	}

, 
	er: function (a, b) {
		$.ig.Series.prototype.er.call(this, a, b);
		if (!this.dv()) {
			this.view().b4(b);
			return;
		}
		this.view().b4(b);
		var c = $.ig.util.cast($.ig.AnchoredRadialSeriesView.prototype.$type, this.dt());
		c.da().q(this.resolution());
		if (this.ew(this.dt())) {
			return;
		}
		var d = new $.ig.RadialFrame(3);
		this.i8(d, c);
		this.i9(d, c);
		this.dv(false);
	}

, 
	gw: function (a) {
		$.ig.MarkerSeries.prototype.gw.call(this, a);
		var b = new $.ig.PolyLineVisualData(1, "trendLine", this.ju().dt().n());
		b.tags().add("Trend");
		a.shapes().add(b);
	}
,
	$type: new $.ig.Type('AnchoredRadialSeries', $.ig.RadialBase.prototype.$type)
}, true);

$.ig.util.defType('RadialBucketCalculator', 'Object', {

	_e: null,
	e: function (a) {
		if (arguments.length === 1) {
			this._e = a;
			return a;
		} else {
			return this._e;
		}
	}

, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.e(a);
		}
, 
	_f: null,
	f: function (a) {
		if (arguments.length === 1) {
			this._f = a;
			return a;
		} else {
			return this._f;
		}
	}

, 
	_g: null,
	g: function (a) {
		if (arguments.length === 1) {
			this._g = a;
			return a;
		} else {
			return this._g;
		}
	}

, 
	_h: null,
	h: function (a) {
		if (arguments.length === 1) {
			this._h = a;
			return a;
		} else {
			return this._h;
		}
	}

, 
	getBucket: function (a) {
		throw new $.ig.NotImplementedException();
	}

, 
	getErrorBucket: function (a, b) {
		return NaN;
	}

, 
	getBucketInfo: function (a, b, c, d) {
		a = this.f();
		b = this.g();
		c = this.h();
		d = this.e().db().resolution();
		return {
			firstBucket: a,
			lastBucket: b,
			bucketSize: c,
			resolution: d
		};
	}

, 
	q: function (a) {
		var b = this.e().ac();
		var c = this.e().ab();
		var d = this.e().db().angleAxis();
		if (b.isEmpty() || c.isEmpty() || d == null || this.e().db().dx() == null || this.e().db().dx().g() == 0) {
			this.h(0);
			return;
		}
		var e = Math.floor(d.h4(c, b));
		var f = Math.ceil(d.h5(c, b));
		if (d.isInverted()) {
			f = Math.ceil(d.h4(c, b));
			e = Math.floor(d.h5(c, b));
		}
		if (f < e) {
			f = d.itemsCount() + f;
		}
		var g = this.e().db().valueAxis();
		var h = g != null ? g.im() : 0.75;
		var i = Math.min(c.width(), c.height()) * 0.5 * (h) * 2 * Math.PI;
		var j = Math.floor((f - e + 1) * a / i);
		this.h(Math.max(1, j));
		this.f(Math.max(0, Math.floor(e / this.h()) - 1));
		this.g(Math.ceil(f / this.h()));
	}

, 
	cacheValues: function () {
	}

, 
	unCacheValues: function () {
	}
,
	$type: new $.ig.Type('RadialBucketCalculator', $.ig.Object.prototype.$type, [$.ig.IBucketizer.prototype.$type])
}, true);

$.ig.util.defType('AnchoredRadialBucketCalculator', 'RadialBucketCalculator', {

	_s: null,
	s: function (a) {
		if (arguments.length === 1) {
			this._s = a;
			return a;
		} else {
			return this._s;
		}
	}

, 
		init: function (a) {


			$.ig.RadialBucketCalculator.prototype.init.call(this, a);
						this.s(a);
		}
, 
	getBucket: function (a) {
		var $self = this;
		var b = this.s().ds().jw();
		var c = Math.min(a * this.h(), b.count() - 1);
		var d = Math.min(c + this.h() - 1, b.count() - 1);
		var e = NaN;
		var f = NaN;
		for (var g = c; g <= d; ++g) {
			var h = b.item(g);
			if (!isNaN(e)) {
				if (!isNaN(h)) {
					e = Math.min(e, h);
					f = Math.max(f, h);
				}

			} else {
				e = h;
				f = h;
			}
		}
		if (!isNaN(e)) {
			return (function () { var $ret = new Array();
			$ret.add((0.5 * (c + d)));
			$ret.add(e);
			$ret.add(f); return $ret;}());
		}
		return (function () { var $ret = new Array();
		$ret.add((0.5 * (c + d)));
		$ret.add(NaN);
		$ret.add(NaN); return $ret;}());
	}
,
	$type: new $.ig.Type('AnchoredRadialBucketCalculator', $.ig.RadialBucketCalculator.prototype.$type)
}, true);

$.ig.util.defType('RadialBaseView', 'MarkerSeriesView', {

	_da: null,
	da: function (a) {
		if (arguments.length === 1) {
			this._da = a;
			return a;
		} else {
			return this._da;
		}
	}

, 
	_db: null,
	db: function (a) {
		if (arguments.length === 1) {
			this._db = a;
			return a;
		} else {
			return this._db;
		}
	}

, 
		init: function (a) {


			$.ig.MarkerSeriesView.prototype.init.call(this, a);
						this.db(a);
				this.dc(new $.ig.Pool$1($.ig.Marker.prototype.$type));
				this.c3(this.dc());
		}
, 
	_dc: null,
	dc: function (a) {
		if (arguments.length === 1) {
			this._dc = a;
			return a;
		} else {
			return this._dc;
		}
	}

, 
	cp: function (a) {
		this.dc().p(a);
	}

, 
	_dd: null,
	dd: function (a) {
		if (arguments.length === 1) {
			this._dd = a;
			return a;
		} else {
			return this._dd;
		}
	}

, 
	_de: null,
	de: function (a) {
		if (arguments.length === 1) {
			this._de = a;
			return a;
		} else {
			return this._de;
		}
	}
,
	$type: new $.ig.Type('RadialBaseView', $.ig.MarkerSeriesView.prototype.$type)
}, true);

$.ig.util.defType('AnchoredRadialSeriesView', 'RadialBaseView', {

	_ds: null,
	ds: function (a) {
		if (arguments.length === 1) {
			this._ds = a;
			return a;
		} else {
			return this._ds;
		}
	}

, 
		init: function (a) {


			$.ig.RadialBaseView.prototype.init.call(this, a);
						this.da(new $.ig.AnchoredRadialBucketCalculator(this));
				this.ds(a);
				this.dt(new $.ig.RadialTrendLineManager());
		}
, 
	_dt: null,
	dt: function (a) {
		if (arguments.length === 1) {
			this._dt = a;
			return a;
		} else {
			return this._dt;
		}
	}

, 
	dy: function (a, b) {
	}

, 
	dz: function () {
		this.ds().actualTrendLineBrush(null);
		if (this.ds().trendLineBrush() != null) {
			this.ds().actualTrendLineBrush(this.ds().trendLineBrush());

		} else {
			this.ds().actualTrendLineBrush(this.ds().actualBrush());
		}
	}

, 
	a1: function (a, b) {
		$.ig.MarkerSeriesView.prototype.a1.call(this, a, b);
	}
,
	$type: new $.ig.Type('AnchoredRadialSeriesView', $.ig.RadialBaseView.prototype.$type)
}, true);

$.ig.util.defType('RadialFrame', 'CategoryFrame', {

		init: function (a) {


			$.ig.CategoryFrame.prototype.init.call(this, a);
		},
	$type: new $.ig.Type('RadialFrame', $.ig.CategoryFrame.prototype.$type)
}, true);

$.ig.util.defType('RadialColumnSeries', 'AnchoredRadialSeries', {

	ed: function () {
		return new $.ig.RadialColumnSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredRadialSeries.prototype.ea.call(this, a);
		this.kl(a);
	}

, 
	_kl: null,
	kl: function (a) {
		if (arguments.length === 1) {
			this._kl = a;
			return a;
		} else {
			return this._kl;
		}
	}

, 
		init: function () {


			$.ig.AnchoredRadialSeries.prototype.init.call(this);
						this.a3($.ig.RadialColumnSeries.prototype.$type);
		}
, 
	onApplyTemplate: function () {
		$.ig.Control.prototype.a6.call(this);
		this.renderSeries(false);
	}

, 
	radiusX: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RadialColumnSeries.prototype.radiusXProperty, a);
			return a;
		} else {
			return this.b($.ig.RadialColumnSeries.prototype.radiusXProperty);
		}
	}

, 
	radiusY: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RadialColumnSeries.prototype.radiusYProperty, a);
			return a;
		} else {
			return this.b($.ig.RadialColumnSeries.prototype.radiusYProperty);
		}
	}

, 
	preferredCategoryMode: function (a) {
		return a != null && a == this.angleAxis() ? $.ig.CategoryMode.prototype.mode2 : $.ig.CategoryMode.prototype.mode0;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredRadialSeries.prototype.eu.call(this, a, b);
		var c = b;
		if (a) {
			c.d0.g(0);
		}
	}

, 
	i9: function (a, b) {
		$.ig.AnchoredRadialSeries.prototype.i9.call(this, a, b);
		var c = a.d;
		var d = b.ac();
		var e = b.ab();
		var f = this.valueAxis().hq(e, d);
		var g = b;
		var h = this.valueAxis();
		var i = Math.max(0, 0.5 * h.io());
		i = Math.max(i, f.minLength() * 0.9);
		var j = $.ig.ViewportUtils.prototype.e(i, d, e);
		var k = this.angleAxis().gz(d, e);
		var l = Math.max(0.1 * this.valueAxis().im(), i);
		var m = this.iw.j(0, l, d, e);
		var n = this.iw.m(0, l, d, e);
		var o = this.iw.j(k, l, d, e);
		var p = this.iw.m(k, l, d, e);
		var q = Math.sqrt((m - o) * (m - o) + (n - p) * (n - p));
		var r = {__x: $.ig.ViewportUtils.prototype.a(0.5, d, e), __y: $.ig.ViewportUtils.prototype.c(0.5, d, e), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		for (var s = 0; s < c.count(); ++s) {
			var t = Math.min(a.d.__inner[s][2], f.maxLength() * 1.1);
			var u = this.iw.j(a.d.__inner[s][0], t, d, e);
			var v = this.iw.m(a.d.__inner[s][0], t, d, e);
			var w = Math.sqrt((u - r.__x) * (u - r.__x) + (v - r.__y) * (v - r.__y));
			var x = w;
			var y = j;
			var z = a.d.__inner[s][0] - (Math.PI / 2);
			var aa = g.d0.item(s);
			var ab = 0 - (q / 2);
			var ac = (q / 2);
			var ad = Math.max(y, x);
			var ae = Math.min(y, x);
			var af = Math.cos(z);
			var ag = Math.sin(z);
			var ah = {__x: r.__x + (ab * af - ad * ag), __y: r.__y + (ab * ag + ad * af), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var ai = {__x: r.__x + (ac * af - ad * ag), __y: r.__y + (ac * ag + ad * af), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var aj = {__x: r.__x + (ac * af - ae * ag), __y: r.__y + (ac * ag + ae * af), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var ak = {__x: r.__x + (ab * af - ae * ag), __y: r.__y + (ab * ag + ae * af), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var al = new $.ig.PathGeometry();
			var am = new $.ig.PathFigure();
			am.__startPoint = ah;
			am.__isClosed = true;
			var an = new $.ig.PolyLineSegment();
			an.__points.add(ai);
			an.__points.add(aj);
			an.__points.add(ak);
			am.__segments.add(an);
			al.d().add(am);
			aa.bp(al);
		}
		g.d0.g(c.count());
		this.kl().ee();
	}
,
	$type: new $.ig.Type('RadialColumnSeries', $.ig.AnchoredRadialSeries.prototype.$type)
}, true);

$.ig.util.defType('RadialColumnSeriesView', 'AnchoredRadialSeriesView', {

	_d3: null,
	d3: function (a) {
		if (arguments.length === 1) {
			this._d3 = a;
			return a;
		} else {
			return this._d3;
		}
	}

, 
		init: function (a) {

			var $self = this;

			$.ig.AnchoredRadialSeriesView.prototype.init.call(this, a);
						this.d3(a);
				this.d0 = (function () { var $ret = new $.ig.Pool$1($.ig.Path.prototype.$type);
				$ret.create($self.d9.on($self));
				$ret.activate($self.ea.on($self));
				$ret.disactivate($self.eb.on($self));
				$ret.destroy($self.ec.on($self)); return $ret;}());
		}, 
	d0: null
, 
	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		this.d4(new $.ig.List$1($.ig.Path.prototype.$type, 0));
		if (!this.ad()) {
			this.u().resolution(4);
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}

, 
	_d4: null,
	d4: function (a) {
		if (arguments.length === 1) {
			this._d4 = a;
			return a;
		} else {
			return this._d4;
		}
	}

, 
	d9: function () {
		var a = new $.ig.Path();
		this.d4().add(a);
		a.__visibility = $.ig.Visibility.prototype.collapsed;
		return a;
	}

, 
	ea: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	eb: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	ec: function (a) {
		this.d4().remove(a);
	}

, 
	ed: function (a, b, c, d, e, f) {
		this.an();
	}

, 
	ar: function (a, b) {
		$.ig.SeriesView.prototype.ar.call(this, a, b);
		var c = a;
		c.__fill = this.u().actualBrush();
		c.__stroke = this.u().actualOutline();
		c.a7(this.u().thickness());
		c.a8(this.u().dashArray());
		c.a9(this.u().dashCap());
	}

, 
	at: function (a, b) {
		$.ig.SeriesView.prototype.at.call(this, a, b);
		var c = a;
		var d = this.ay(b);
		c.__fill = d;
		c.__stroke = d;
		c.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			for (var c = 0; c < this.d4().count(); c++) {
				var d = this.d4().__inner[c];
				this.ap(d, c, b);
				if (this.k && !b) {
					a.e($.ig.GradientDirection.prototype.radial, null);
				}
				a.g(d);
			}
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = 0;
		var d = this.d0.h().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			var e = new $.ig.PathVisualData(1, "column" + b, c);
			e.tags().add("Main");
			a.shapes().add(e);
			b++;
		}
	}

, 
	ee: function () {
		this.an();
	}
,
	$type: new $.ig.Type('RadialColumnSeriesView', $.ig.AnchoredRadialSeriesView.prototype.$type)
}, true);

$.ig.util.defType('RadialLineSeries', 'AnchoredRadialSeries', {

	ed: function () {
		return new $.ig.RadialLineSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredRadialSeries.prototype.ea.call(this, a);
		this.kj(a);
	}

, 
	_kj: null,
	kj: function (a) {
		if (arguments.length === 1) {
			this._kj = a;
			return a;
		} else {
			return this._kj;
		}
	}

, 
		init: function () {


			$.ig.AnchoredRadialSeries.prototype.init.call(this);
						this.a3($.ig.RadialLineSeries.prototype.$type);
		}
, 
	onApplyTemplate: function () {
		$.ig.Control.prototype.a6.call(this);
	}

, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode0;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredRadialSeries.prototype.eu.call(this, a, b);
		var c = b;
		c.d7();
	}

, 
	i9: function (a, b) {
		$.ig.AnchoredRadialSeries.prototype.i9.call(this, a, b);
		var c = b.ac();
		var d = b.ab();
		var e = a.d;
		var f = e.count();
		var g = new $.ig.List$1($.ig.Array.prototype.$type, 2, f);
		var h = 0;
		for (var i = 0; i < f; i++) {
			var j = new Array(4);
			g.add(j);
			j[0] = this.iw.j(a.d.__inner[i][0], a.d.__inner[i][1], c, d);
			j[1] = this.iw.m(a.d.__inner[i][0], a.d.__inner[i][1], c, d);
			j[2] = this.iw.j(a.d.__inner[i][0], a.d.__inner[i][2], c, d);
			var k = a.d.__inner[i][2];
			j[3] = this.iw.m(a.d.__inner[i][0], k, c, d);
			if (k > h) {
				h = k;
			}
		}
		var l = b;
		l.d8(f, g, false, this.unknownValuePlotting(), this.j9(g, f - 1, b), l.da().h(), this.resolution());
	}

, 
	unknownValuePlotting: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RadialLineSeries.prototype.unknownValuePlottingProperty, a);
			return a;
		} else {
			return this.b($.ig.RadialLineSeries.prototype.unknownValuePlottingProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.AnchoredRadialSeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.RadialLineSeries.prototype.kg:
				this.renderSeries(false);
				this.e5();
				break;
		}
	}

, 
	jx: function () {
			return true;
	}
,
	$type: new $.ig.Type('RadialLineSeries', $.ig.AnchoredRadialSeries.prototype.$type)
}, true);

$.ig.util.defType('RadialLineSeriesView', 'AnchoredRadialSeriesView', {

	_d4: null,
	d4: function (a) {
		if (arguments.length === 1) {
			this._d4 = a;
			return a;
		} else {
			return this._d4;
		}
	}

, 
		init: function (a) {

			this.d0 = new $.ig.Path();
			this.d1 = new $.ig.Path();
			this.d2 = new $.ig.Path();

			$.ig.AnchoredRadialSeriesView.prototype.init.call(this, a);
						this.d4(a);
		}
, 
	ag: function () {
		$.ig.MarkerSeriesView.prototype.ag.call(this);
	}
, 
	d0: null, 
	d1: null, 
	d2: null
, 
	d7: function () {
		this.d0.bp(null);
		this.d1.bp(null);
		this.d2.bp(null);
		this.an();
	}

, 
	d8: function (a, b, c, d, e, f, g) {
		this.ds().jv().i(this.d0, this.d1, this.d2, a, b, c, d, e, f, g);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.d0.__stroke = this.u().actualBrush();
		this.d0.a7(this.u().thickness());
		this.d0.a8(this.u().dashArray());
		this.d0.a9(this.u().dashCap());
		this.d2.__stroke = this.u().actualBrush();
		this.d2.a7(this.u().thickness());
		this.d2.a8(this.u().dashArray());
		this.d2.a9(this.u().dashCap());
		this.d1.__fill = this.u().actualBrush();
		this.d1.__opacity = 0.75;
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.d0.__stroke = a;
		this.d0.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.d2.__stroke = a;
		this.d2.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.d1.__fill = a;
		this.d1.__opacity = 1;
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				a.e($.ig.GradientDirection.prototype.radial, null);
			}
			a.g(this.d1);
			a.g(this.d0);
			a.g(this.d2);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "lowerShape", this.d0);
		b.tags().add("Lower");
		b.tags().add("Main");
		var c = new $.ig.PathVisualData(1, "upperShape", this.d2);
		c.tags().add("Upper");
		var d = new $.ig.PathVisualData(1, "translucentShape", this.d1);
		d.tags().add("Translucent");
		a.shapes().add(b);
		a.shapes().add(c);
		a.shapes().add(d);
	}
,
	$type: new $.ig.Type('RadialLineSeriesView', $.ig.AnchoredRadialSeriesView.prototype.$type)
}, true);

$.ig.util.defType('RadialPieSeries', 'AnchoredRadialSeries', {

	ed: function () {
		return new $.ig.RadialPieSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredRadialSeries.prototype.ea.call(this, a);
		this.kl(a);
	}

, 
	_kl: null,
	kl: function (a) {
		if (arguments.length === 1) {
			this._kl = a;
			return a;
		} else {
			return this._kl;
		}
	}

, 
		init: function () {


			$.ig.AnchoredRadialSeries.prototype.init.call(this);
						this.a3($.ig.RadialPieSeries.prototype.$type);
		}
, 
	radiusX: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RadialPieSeries.prototype.radiusXProperty, a);
			return a;
		} else {
			return this.b($.ig.RadialPieSeries.prototype.radiusXProperty);
		}
	}

, 
	radiusY: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RadialPieSeries.prototype.radiusYProperty, a);
			return a;
		} else {
			return this.b($.ig.RadialPieSeries.prototype.radiusYProperty);
		}
	}

, 
	preferredCategoryMode: function (a) {
		return a != null && a == this.angleAxis() ? $.ig.CategoryMode.prototype.mode2 : $.ig.CategoryMode.prototype.mode0;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredRadialSeries.prototype.eu.call(this, a, b);
		var c = b;
		if (a && c.d0 != null) {
			c.d0.g(0);
		}
	}

, 
	i9: function (a, b) {
		$.ig.AnchoredRadialSeries.prototype.i9.call(this, a, b);
		var c = b;
		var d = b.ac();
		var e = b.ab();
		var f = this.valueAxis().hq(e, d);
		var g = a.d;
		var h = this.valueAxis();
		var i = Math.max(0, 0.5 * h.io());
		var j = i;
		j = Math.max(j, f.minLength());
		var k = this.angleAxis().gz(d, e);
		var l = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var m = this.radiusX();
		var n = this.radiusY();
		var o = (m > 0 && n > 0);
		var p = 0;
		for (var q = 0; q < g.count(); ++q) {
			var r = c.d0.item(q);
			var s = g.__inner[q][0];
			var t = Math.min(g.__inner[q][2], f.maxLength());
			var u = null;
			if (o) {
				u = this.kp(d, e, s - (k * 0.5), s + (k * 0.5), j, t, l, m, n);

			} else {
				u = this.ko(d, e, s - (k * 0.5), s + (k * 0.5), j, t, l);
			}
			r.bp(u);
			var v = g.__inner[q][2];
			if (v > p) {
				p = v;
			}
		}
		c.dd($.ig.ViewportUtils.prototype.e(p, d, e));
		c.de({__x: $.ig.ViewportUtils.prototype.a(l.__x, d, e), __y: $.ig.ViewportUtils.prototype.c(l.__y, d, e), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		c.d0.g(g.count());
		c.ed();
	}

, 
	ko: function (a, b, c, d, e, f, g) {
		var $self = this;
		var h = $.ig.SliceCoords.prototype.aw(a, b, c, d, e, f, g);
		var i = new $.ig.PathFigure();
		i.__startPoint = h.m();
		i.__isClosed = true;
		i.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
		$ret.d(h.n()); return $ret;}()));
		i.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h(h.o());
		$ret.k(h.v());
		$ret.j($.ig.SweepDirection.prototype.clockwise);
		$ret.i(h.u()); return $ret;}()));
		i.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
		$ret.d(h.p()); return $ret;}()));
		i.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h(h.m());
		$ret.k(h.w());
		$ret.j($.ig.SweepDirection.prototype.counterclockwise);
		$ret.i(h.u()); return $ret;}()));
		var j = new $.ig.PathGeometry();
		j.d().add(i);
		return j;
	}

, 
	kp: function (a, b, c, d, e, f, g, h, i) {
		var $self = this;
		var j = $.ig.SliceCoords.prototype.ax(a, b, c, d, e, f, g, h, i);
		if (j == null) {
			return this.ko(a, b, c, d, e, f, g);
		}
		var k = new $.ig.PathFigure();
		k.__startPoint = j.m();
		k.__isClosed = true;
		var l = ((c + ((d - c) * 0.5)) * 180 / Math.PI) + 90;
		var m = new $.ig.Size(j.x().c() * (e / f), j.x().d() * (e / f));
		k.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h(j.q());
		$ret.k(m);
		$ret.l(l);
		$ret.j($.ig.SweepDirection.prototype.clockwise);
		$ret.i(false); return $ret;}()));
		k.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
		$ret.d(j.n()); return $ret;}()));
		k.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h(j.r());
		$ret.k(j.x());
		$ret.l(l);
		$ret.j($.ig.SweepDirection.prototype.clockwise);
		$ret.i(false); return $ret;}()));
		k.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h(j.o());
		$ret.k(j.v());
		$ret.j($.ig.SweepDirection.prototype.clockwise);
		$ret.i(j.u()); return $ret;}()));
		k.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h(j.s());
		$ret.k(j.x());
		$ret.l(l);
		$ret.j($.ig.SweepDirection.prototype.clockwise);
		$ret.i(false); return $ret;}()));
		k.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
		$ret.d(j.p()); return $ret;}()));
		k.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h(j.t());
		$ret.k(m);
		$ret.l(l);
		$ret.j($.ig.SweepDirection.prototype.clockwise);
		$ret.i(false); return $ret;}()));
		k.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.h(j.m());
		$ret.k(j.w());
		$ret.j($.ig.SweepDirection.prototype.counterclockwise);
		$ret.i(j.u()); return $ret;}()));
		var n = new $.ig.PathGeometry();
		n.d().add(k);
		return n;
	}

, 
	e6: function (a, b, c, d) {
		$.ig.AnchoredRadialSeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.RadialPieSeries.prototype.kg:
			case $.ig.RadialPieSeries.prototype.kh:
				this.renderSeries(false);
				break;
		}
	}
,
	$type: new $.ig.Type('RadialPieSeries', $.ig.AnchoredRadialSeries.prototype.$type)
}, true);

$.ig.util.defType('SliceCoords', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_m: null,
	m: function (a) {
		if (arguments.length === 1) {
			this._m = a;
			return a;
		} else {
			return this._m;
		}
	}

, 
	_n: null,
	n: function (a) {
		if (arguments.length === 1) {
			this._n = a;
			return a;
		} else {
			return this._n;
		}
	}

, 
	_o: null,
	o: function (a) {
		if (arguments.length === 1) {
			this._o = a;
			return a;
		} else {
			return this._o;
		}
	}

, 
	_p: null,
	p: function (a) {
		if (arguments.length === 1) {
			this._p = a;
			return a;
		} else {
			return this._p;
		}
	}

, 
	_q: null,
	q: function (a) {
		if (arguments.length === 1) {
			this._q = a;
			return a;
		} else {
			return this._q;
		}
	}

, 
	_r: null,
	r: function (a) {
		if (arguments.length === 1) {
			this._r = a;
			return a;
		} else {
			return this._r;
		}
	}

, 
	_s: null,
	s: function (a) {
		if (arguments.length === 1) {
			this._s = a;
			return a;
		} else {
			return this._s;
		}
	}

, 
	_t: null,
	t: function (a) {
		if (arguments.length === 1) {
			this._t = a;
			return a;
		} else {
			return this._t;
		}
	}

, 
	_u: null,
	u: function (a) {
		if (arguments.length === 1) {
			this._u = a;
			return a;
		} else {
			return this._u;
		}
	}

, 
	_v: null,
	v: function (a) {
		if (arguments.length === 1) {
			this._v = a;
			return a;
		} else {
			return this._v;
		}
	}

, 
	_w: null,
	w: function (a) {
		if (arguments.length === 1) {
			this._w = a;
			return a;
		} else {
			return this._w;
		}
	}

, 
	_x: null,
	x: function (a) {
		if (arguments.length === 1) {
			this._x = a;
			return a;
		} else {
			return this._x;
		}
	}

, 
	aw: function (a, b, c, d, e, f, g) {
		var $self = this;
		var h = Math.min(c, d);
		var i = Math.max(c, d);
		var j = Math.cos(h);
		var k = Math.sin(h);
		var l = Math.max(0, e);
		var m = f;
		var n = g.__x + j * l;
		var o = g.__y + k * l;
		var p = g.__x + j * m;
		var q = g.__y + k * m;
		var r = Math.cos(i);
		var s = Math.sin(i);
		var t = g.__x + r * l;
		var u = g.__y + s * l;
		var v = g.__x + r * m;
		var w = g.__y + s * m;
		n = $.ig.ViewportUtils.prototype.a(n, a, b);
		o = $.ig.ViewportUtils.prototype.c(o, a, b);
		p = $.ig.ViewportUtils.prototype.a(p, a, b);
		q = $.ig.ViewportUtils.prototype.c(q, a, b);
		t = $.ig.ViewportUtils.prototype.a(t, a, b);
		u = $.ig.ViewportUtils.prototype.c(u, a, b);
		v = $.ig.ViewportUtils.prototype.a(v, a, b);
		w = $.ig.ViewportUtils.prototype.c(w, a, b);
		var x = {__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var y = {__x: p, __y: q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var z = {__x: v, __y: w, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var aa = {__x: t, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var ab = $.ig.ViewportUtils.prototype.e(m, a, b);
		var ac = $.ig.ViewportUtils.prototype.g(m, a, b);
		var ad = $.ig.ViewportUtils.prototype.e(l, a, b);
		var ae = $.ig.ViewportUtils.prototype.g(l, a, b);
		return (function () { var $ret = new $.ig.SliceCoords();
		$ret.m(x);
		$ret.n(y);
		$ret.o(z);
		$ret.p(aa);
		$ret.u(((i - h) > Math.PI));
		$ret.v(new $.ig.Size(ab, ac));
		$ret.w(new $.ig.Size(ad, ae)); return $ret;}());
	}

, 
	ax: function (a, b, c, d, e, f, g, h, i) {
		var j = $.ig.ViewportUtils.prototype.f(i, a, b);
		var k = f - e;
		if (k < 0) {
			return null;
		}
		if ($.ig.ViewportUtils.prototype.e(k, a, b) < 2) {
			return null;
		}
		if (j * 2 > k) {
			j = k / 2;
			i = $.ig.ViewportUtils.prototype.e(j, a, b);
		}
		var l = $.ig.ViewportUtils.prototype.f(h, a, b);
		var m = l / (f - j);
		var n = Math.atan(m);
		if (n * 2 > Math.abs(d - c)) {
			n = Math.abs(d - c) / 2;
			h = $.ig.ViewportUtils.prototype.e(Math.tan(n) * (f - j), a, b);
		}
		var o = $.ig.SliceCoords.prototype.aw(a, b, c + n, d - n, e, f, g);
		var p = $.ig.SliceCoords.prototype.aw(a, b, c, d, e + (j * (e / f)), f - j, g);
		o.r(o.n());
		o.t(o.p());
		o.q(p.m());
		o.n(p.n());
		o.s(p.o());
		o.p(p.p());
		o.x(new $.ig.Size(h, i));
		return o;
	}
,
	$type: new $.ig.Type('SliceCoords', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('RadialPieSeriesView', 'AnchoredRadialSeriesView', {

	_d3: null,
	d3: function (a) {
		if (arguments.length === 1) {
			this._d3 = a;
			return a;
		} else {
			return this._d3;
		}
	}

, 
		init: function (a) {

			var $self = this;

			$.ig.AnchoredRadialSeriesView.prototype.init.call(this, a);
						this.d3(a);
				this.d0 = (function () { var $ret = new $.ig.Pool$1($.ig.Path.prototype.$type);
				$ret.create($self.d9.on($self));
				$ret.activate($self.ea.on($self));
				$ret.disactivate($self.eb.on($self));
				$ret.destroy($self.ec.on($self)); return $ret;}());
		}, 
	d0: null
, 
	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		this.d4(new $.ig.List$1($.ig.Path.prototype.$type, 0));
		if (!this.ad()) {
			this.u().resolution(4);
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}

, 
	_d4: null,
	d4: function (a) {
		if (arguments.length === 1) {
			this._d4 = a;
			return a;
		} else {
			return this._d4;
		}
	}

, 
	d9: function () {
		var $self = this;
		var a = (function () { var $ret = new $.ig.Path();
$ret.dataContext((function () { var $ret = new $.ig.DataContext();
$ret.series($self.u()); return $ret;}())); return $ret;}());
		this.d4().add(a);
		a.__visibility = $.ig.Visibility.prototype.collapsed;
		return a;
	}

, 
	ea: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	eb: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	ec: function (a) {
		this.d4().remove(a);
	}

, 
	ar: function (a, b) {
		$.ig.SeriesView.prototype.ar.call(this, a, b);
		var c = a;
		c.__stroke = this.u().actualOutline();
		c.a7(this.u().thickness());
		c.__fill = this.u().actualBrush();
		c.a8(this.u().dashArray());
		c.a9(this.u().dashCap());
	}

, 
	at: function (a, b) {
		$.ig.SeriesView.prototype.at.call(this, a, b);
		var c = a;
		var d = this.ay(b);
		c.__stroke = d;
		c.a7(this.u().thickness());
		c.__fill = d;
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			for (var c = 0; c < this.d4().count(); c++) {
				var d = this.d4().__inner[c];
				this.ap(d, c, b);
				if (this.k && !b) {
					var e = this.dd() * 2;
					var f = d.__fill != null && d.__fill.isGradient() && this.de() != null ? new $.ig.Rect(0, this.de().__x - this.dd(), this.de().__y - this.dd(), e, e) : null;
					a.e($.ig.GradientDirection.prototype.radial, f);
				}
				a.g(d);
			}
		}
	}

, 
	ed: function () {
		this.an();
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = 0;
		var d = this.d0.h().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			var e = new $.ig.PathVisualData(1, "slice" + b, c);
			e.tags().add("Main");
			a.shapes().add(e);
			b++;
		}
	}
,
	$type: new $.ig.Type('RadialPieSeriesView', $.ig.AnchoredRadialSeriesView.prototype.$type)
}, true);
































$.ig.util.defType('PolyLineVisualData', 'PrimitiveVisualData', {

	type: function () {
			return "Polyline";
	}

, 
		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.PrimitiveVisualData.prototype.init.call(this, "polyLine1");
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.PrimitiveVisualData.prototype.init.call(this, a);
						this.points(b.bn());
				$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), b);
		}
, 
	_points: null,
	points: function (a) {
		if (arguments.length === 1) {
			this._points = a;
			return a;
		} else {
			return this._points;
		}
	}

, 
	scaleByViewport: function (a) {
		$.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, a);
		for (var b = 0; b < this.points().count(); b++) {
			this.points().__inner[b] = {__x: (this.points().__inner[b].__x - a.left()) / a.width(), __y: (this.points().__inner[b].__y - a.top()) / a.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
	}

, 
	getPointsOverride: function (a, b) {
		var c = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		a.add(c);
		for (var d = 0; d < this.points().count(); d++) {
			c.add(this.points().__inner[d]);
		}
	}
,
	$type: new $.ig.Type('PolyLineVisualData', $.ig.PrimitiveVisualData.prototype.$type)
}, true);















$.ig.util.defType('CollisionAvoider', 'Object', {

		init: function () {

			this.a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);

			$.ig.Object.prototype.init.call(this);
		}
, 
	tryAdd: function (a) {
		var $self = this;
		for (var b = this.a.count() - 1; b >= 0; --b) {
			if (a.left() > this.a.__inner[b].right()) {
				break;
			}
			if (this.a.__inner[b].intersectsWith(a)) {
				return false;
			}
		}
		if (this.a.count() == 0 || a.right() >= this.a.__inner[this.a.count() - 1].right()) {
			this.a.add(a);

		} else {
			this.a.add(a);
			this.a.t(function (c, d) {
				return Math.sign(c.right() - d.right());
			});
		}
		return true;
	}

, 
	clear: function () {
		this.a.clear();
	}
, 
	a: null,
	$type: new $.ig.Type('CollisionAvoider', $.ig.Object.prototype.$type, [$.ig.IDetectsCollisions.prototype.$type])
}, true);










$.ig.CategoryAngleAxis.prototype.hc = "StartAngleOffset";
$.ig.CategoryAngleAxis.prototype.hd = "Interval";
$.ig.CategoryAngleAxis.prototype.startAngleOffsetProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAngleAxis.prototype.hc, Number, $.ig.CategoryAngleAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, a)).ez($.ig.CategoryAngleAxis.prototype.hc, b.f(), b.e());
}));
$.ig.CategoryAngleAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAngleAxis.prototype.hd, Number, $.ig.CategoryAngleAxis.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, a)).ez($.ig.CategoryAngleAxis.prototype.hd, b.f(), b.e());
	($.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, a)).es(false);
}));
$.ig.NumericAngleAxis.prototype.h2 = "StartAngleOffset";
$.ig.NumericAngleAxis.prototype.startAngleOffsetProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAngleAxis.prototype.h2, Number, $.ig.NumericAngleAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, a)).ez($.ig.NumericAngleAxis.prototype.h2, b.f(), b.e());
}));
$.ig.NumericRadiusAxis.prototype.h2 = "RadiusExtentScale";
$.ig.NumericRadiusAxis.prototype.h3 = "InnerRadiusExtentScale";
$.ig.NumericRadiusAxis.prototype.radiusExtentScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericRadiusAxis.prototype.h2, Number, $.ig.NumericRadiusAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0.75, function (a, b) {
	($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, a)).ez($.ig.NumericRadiusAxis.prototype.h2, b.f(), b.e());
}));
$.ig.NumericRadiusAxis.prototype.innerRadiusExtentScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericRadiusAxis.prototype.h3, Number, $.ig.NumericRadiusAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, a)).ez($.ig.NumericRadiusAxis.prototype.h3, b.f(), b.e());
}));
$.ig.TrendLineManagerBase$1.prototype.a = "TrendLineDashArray";
$.ig.TrendLineManagerBase$1.prototype.b = "TrendLineType";
$.ig.TrendLineManagerBase$1.prototype.c = "TrendLinePeriod";
$.ig.TrendLineManagerBase$1.prototype.d = "TrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.e = "ActualTrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.f = "TrendLineThickness";
$.ig.TrendLineManagerBase$1.prototype.g = "TrendLineDashCap";
$.ig.TrendLineManagerBase$1.prototype.h = "TrendLineZIndex";
$.ig.Legend.prototype.cc = "Orientation";
$.ig.RadialBase.prototype.iq = "AngleAxis";
$.ig.RadialBase.prototype.ir = "ValueAxis";
$.ig.RadialBase.prototype.is = "ClipSeriesToBounds";
$.ig.RadialBase.prototype.angleAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialBase.prototype.iq, $.ig.CategoryAngleAxis.prototype.$type, $.ig.RadialBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.RadialBase.prototype.$type, a)).ej($.ig.RadialBase.prototype.iq, b.f(), b.e());
}));
$.ig.RadialBase.prototype.valueAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialBase.prototype.ir, $.ig.NumericRadiusAxis.prototype.$type, $.ig.RadialBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.RadialBase.prototype.$type, a)).ej($.ig.RadialBase.prototype.ir, b.f(), b.e());
}));
$.ig.RadialBase.prototype.clipSeriesToBoundsProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialBase.prototype.is, $.ig.Boolean.prototype.$type, $.ig.RadialBase.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.RadialBase.prototype.$type, a)).ej($.ig.RadialBase.prototype.is, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.jf = "ValueMemberPath";
$.ig.AnchoredRadialSeries.prototype.jg = "ValueColumn";
$.ig.AnchoredRadialSeries.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.jf, String, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.jf, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.b4, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b6, $.ig.Brush.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.b6, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b7, $.ig.Brush.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.b7, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b8, Number, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.b8, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.b9, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.b3, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b5, $.ig.Number.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.b5, b.f(), b.e());
}));
$.ig.AnchoredRadialSeries.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.ca, $.ig.Number.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (a, b) {
	($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, a)).ej($.ig.AnchoredRadialSeries.prototype.ca, b.f(), b.e());
}));
$.ig.RadialColumnSeries.prototype.kg = "RadiusX";
$.ig.RadialColumnSeries.prototype.kh = "RadiusY";
$.ig.RadialColumnSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialColumnSeries.prototype.kg, Number, $.ig.RadialColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.RadialColumnSeries.prototype.$type, a)).ej($.ig.RadialColumnSeries.prototype.kg, b.f(), b.e());
}));
$.ig.RadialColumnSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialColumnSeries.prototype.kh, Number, $.ig.RadialColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.RadialColumnSeries.prototype.$type, a)).ej($.ig.RadialColumnSeries.prototype.kh, b.f(), b.e());
}));
$.ig.RadialLineSeries.prototype.kg = "UnknownValuePlotting";
$.ig.RadialLineSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialLineSeries.prototype.kg, $.ig.UnknownValuePlotting.prototype.$type, $.ig.RadialLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (a, b) {
	($.ig.util.cast($.ig.RadialLineSeries.prototype.$type, a)).ej($.ig.RadialLineSeries.prototype.kg, b.f(), b.e());
}));
$.ig.RadialPieSeries.prototype.kg = "RadiusX";
$.ig.RadialPieSeries.prototype.kh = "RadiusY";
$.ig.RadialPieSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialPieSeries.prototype.kg, Number, $.ig.RadialPieSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.RadialPieSeries.prototype.$type, a)).ej($.ig.RadialPieSeries.prototype.kg, b.f(), b.e());
}));
$.ig.RadialPieSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialPieSeries.prototype.kh, Number, $.ig.RadialPieSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.RadialPieSeries.prototype.$type, a)).ej($.ig.RadialPieSeries.prototype.kh, b.f(), b.e());
}));

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['flattenTo', 'getBounds2', 'clipTo']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['asQueryable']]]);
$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);

