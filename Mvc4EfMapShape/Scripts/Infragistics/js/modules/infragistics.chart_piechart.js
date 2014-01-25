/*!
* Infragistics.Web.ClientUI infragistics.chart_piechart.js 12.2.20122.1021
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
































































$.ig.util.defType('GeometryUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a) {
		if (isNaN(a) || Number.isInfinity(a)) {
			return a;
		}
		while (a > 360) {
			a -= 360;
		}
		while (a < 0) {
			a += 360;
		}
		return a;
	}

, 
	b: function (a) {
		return Math.atan(a);
	}

, 
	c: function (a, b) {
		return (b.__y - a.__y) / (b.__x - a.__x);
	}

, 
	d: function (a) {
		return 1 - Math.pow(a.height() / 2, 2) / Math.pow(a.width() / 2, 2);
	}

, 
	e: function (a, b, c, d, e) {
		var f = Math.cos(a);
		var g = Math.sin(a);
		var h = Math.sqrt(d * d / (1 - (b * Math.pow(f, 2))));
		h *= e;
		return {__x: h * f + c.__x, __y: h * g + c.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	f: function (a, b, c, d, e) {
		var f;
		if (c) {
			f = $.ig.GeometryUtil.prototype.g({__x: a / 2, __y: b / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, d, e);

		} else {
			f = {__x: a / 2, __y: b / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
		return f;
	}

, 
	g: function (a, b, c) {
		b = b / 180 * Math.PI;
		var d = a.__y + c * Math.sin(b);
		var e = a.__x + c * Math.cos(b);
		return {__x: e, __y: d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}
,
	$type: new $.ig.Type('GeometryUtil', $.ig.Object.prototype.$type)
}, true);





















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





$.ig.util.defType('OthersCategoryType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('OthersCategoryType', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('LabelsPosition', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('LabelsPosition', $.ig.Object.prototype.$type)
}, true);


























































































































































































































































































$.ig.util.defType('PieChartViewManager', 'Object', {

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
	a: null, 
	b: null
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
	c: null
, 
		init: function (a) {

			this.a = 0;
			this.b = 0;
			this.d = false;

			$.ig.Object.prototype.init.call(this);
						this.c = a;
		}, 
	d: null
, 
	ay: function (a, b) {
		this.ab().v(new $.ig.Rect(0, 0, 0, a, b));
		if (this.a != a) {
			this.d = true;
		}
		this.a = a;
		if (this.b != b) {
			this.d = true;
		}
		this.b = b;
		this.c.a9();
	}

, 
	az: function () {
		this.v(new $.ig.Rect(0, 0, 0, this.a, this.b));
		this.r().attr("width", this.a.toString());
		this.r().attr("height", this.b.toString());
		this.t().attr("width", this.a.toString());
		this.t().attr("height", this.b.toString());
		this.u().attr("width", this.a.toString());
		this.u().attr("height", this.b.toString());
		this.s().attr("width", this.a.toString());
		this.s().attr("height", this.b.toString());
		return this.v();
	}

, 
	a0: function () {
		var tempSpan_ = $("<span>M</span>");
		var a = $('body');
		a.append(tempSpan_);
		tempSpan_.css("font", this.c.z());
		var offset_ = tempSpan_.attr("offsetHeight");
		if (isNaN(offset_)) { offset_ = tempSpan_[0].offsetHeight; };
		tempSpan_.remove();
		return parseInt(offset_);
	}

, 
	a1: function () {
		var a = $.ig.DOMEventProxy.prototype.c4(this.q());
		return new $.ig.Size(a.left(), a.top());
	}

, 
	a2: function (a, b) {
		var c = new Array(2);
		b.addClass(a);
		var d = new $.ig.Brush();
		d.__fill = b.css("background-color");
		var e = new $.ig.Brush();
		e.__fill = b.css("border-top-color");
		b.removeClass(a);
		c[0] = d;
		c[1] = e;
		return c;
	}

, 
	a3: function (a) {
		window.setTimeout(a, 0);
	}

, 
	a4: function (a, b, c, d) {
		a = new $.ig.BrushCollection();
		b = new $.ig.BrushCollection();
		var e = 1;
		var f = $("<div></div>");
		var g = $.ig.util.getClassCount('.ui-chart-palette-', true);
		if (g == 0) {
			var h = new $.ig.Brush();
			h.__fill = "#B1BFC9";
			var i = new $.ig.Brush();
			i.__fill = "#50a8be";
			var j = new $.ig.Brush();
			j.__fill = "#798995";
			var k = new $.ig.Brush();
			k.__fill = "#fc6754";
			var l = new $.ig.Brush();
			l.__fill = "#4F606C";
			var m = new $.ig.Brush();
			m.__fill = "#fec33c";
			var n = new $.ig.Brush();
			n.__fill = "#374650";
			var o = new $.ig.Brush();
			o.__fill = "#3c6399";
			var p = new $.ig.Brush();
			p.__fill = "#162C3B";
			var q = new $.ig.Brush();
			q.__fill = "#91af49";
			a.add(i);
			a.add(k);
			a.add(m);
			a.add(o);
			a.add(q);
			b.add(h);
			b.add(j);
			b.add(l);
			b.add(n);
			b.add(p);
			e = 6;
			g = 5;
		}
		this.q().append(f);
		for (var r = e; r <= g; r++) {
			var s = this.a2("ui-chart-palette-" + r, f);
			a.add(s[0]);
			b.add(s[1]);
		}
		f.remove();
		c = new $.ig.Brush();
		c.__fill = this.q().css("color");
		var t = this.q().css("font-style");
		var u = this.q().css("font-variant");
		var v = this.q().css("font-weight");
		var w = this.q().css("font-size");
		var x = this.q().css("line-height");
		var y = this.q().css("font-family");
		d = "";
		var z = true;
		if (t.length > 0) {
			if (!z) {
				d += " ";

			} else {
				z = false;
			}
			d += t;
		}
		if (u.length > 0) {
			if (!z) {
				d += " ";

			} else {
				z = false;
			}
			d += u;
		}
		if (v.length > 0) {
			if (!z) {
				d += " ";

			} else {
				z = false;
			}
			d += v;
		}
		if (w.length > 0) {
			if (!z) {
				d += " ";

			} else {
				z = false;
			}
			d += w;
		}
		if (x.length > 0) {
			if (!z) {
				d += "/";

			} else {
				z = false;
			}
			d += x;
		}
		if (y.length > 0) {
			if (!z) {
				d += " ";

			} else {
				z = false;
			}
			d += y;
		}
		return {
			brushes: a,
			outlines: b,
			fontBrush: c,
			font: d
		};
	}

, 
	a5: function (a) {
		var $self = this;
		a.__stroke = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "#000000"; return $ret;}());
		a.__fill = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "#222222"; return $ret;}());
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
	a8: function (a) {
		if (a == null) {
			if (this.ab() != null) {
				this.ab().bf();
			}
			this.q(null);
			this.r(null);
			this.t(null);
			this.u(null);
			this.s(null);
			this.w(null);
			this.x(null);
			this.y(null);
			this.z(null);
			this.ab(null);
			return;
		}
		var b = a;
		this.q($(b));
		this.c.ar();
		this.c.b5();
		this.q().css("position", "relative");
		this.q().addClass("ui-corner-all ui-widget-content");
		this.r($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.t($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.u($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.s($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.q().append(this.r());
		this.q().append(this.t());
		this.q().append(this.u());
		this.q().append(this.s());
		this.w(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.r()[0]).getContext("2d")));
		this.x(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.t()[0]).getContext("2d")));
		this.y(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.u()[0]).getContext("2d")));
		this.z(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.s()[0]).getContext("2d")));
		this.ab(new $.ig.DOMEventProxy(this.s()));
		this.ab().onMouseOver = $.ig.Delegate.prototype.combine(this.ab().onMouseOver, this.c.bg.on(this.c));
		this.ab().onMouseLeave = $.ig.Delegate.prototype.combine(this.ab().onMouseLeave, this.c.bh.on(this.c));
		this.ab().onMouseDown = $.ig.Delegate.prototype.combine(this.ab().onMouseDown, this.c.bi.on(this.c));
		this.ab().onMouseUp = $.ig.Delegate.prototype.combine(this.ab().onMouseUp, this.c.bj.on(this.c));
		this.ay(this.q().width(), this.q().height());
	}

, 
	a9: function (a) {
		this.q().append(a);
	}
,
	$type: new $.ig.Type('PieChartViewManager', $.ig.Object.prototype.$type)
}, true);


























$.ig.util.defType('PieSliceDataContext', 'DataContext', {
	init: function () {

		$.ig.DataContext.prototype.init.call(this);

	}
, 
	_slice: null,
	slice: function (a) {
		if (arguments.length === 1) {
			this._slice = a;
			return a;
		} else {
			return this._slice;
		}
	}

, 
	_percentValue: null,
	percentValue: function (a) {
		if (arguments.length === 1) {
			this._percentValue = a;
			return a;
		} else {
			return this._percentValue;
		}
	}
,
	$type: new $.ig.Type('PieSliceDataContext', $.ig.DataContext.prototype.$type)
}, true);






















































$.ig.util.defType('SliceClickEventArgs', 'EventArgs', {

		init: function (a) {


			$.ig.EventArgs.prototype.init.call(this);
						this.slice(a);
				if (a == null) {
				return;
				}
				this.isSelected(a.isSelected());
				this.isExploded(a.isExploded());
		}
, 
	_slice: null,
	slice: function (a) {
		if (arguments.length === 1) {
			this._slice = a;
			return a;
		} else {
			return this._slice;
		}
	}

, 
	isSelected: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			this.slice().isSelected(a);
			return a;
		} else {
			return this.a;
		}
	}
, 
	a: null
, 
	isExploded: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			this.slice().isExploded(a);
			return a;
		} else {
			return this.b;
		}
	}
, 
	b: null
, 
	isOthersSlice: function () {
			return this.slice().cw();
	}

, 
	dataContext: function () {
			if (this.slice() != null) {
				return this.slice().dataContext();
			}
			return null;
	}
,
	$type: new $.ig.Type('SliceClickEventArgs', $.ig.EventArgs.prototype.$type)
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

$.ig.util.defType('PieChartBase', 'Control', {

	d3: function () {
		return new $.ig.PieChartBaseView(this);
	}

, 
	d4: function (a) {
		this.dn(a);
	}

, 
	_dn: null,
	dn: function (a) {
		if (arguments.length === 1) {
			this._dn = a;
			return a;
		} else {
			return this._dn;
		}
	}

, 
		init: function () {

			var $self = this;
			this.b2 = false;
			this.b3 = false;
			this.b4 = false;
			this.b5 = false;
			this.b6 = false;
			this.cf = new $.ig.IndexCollection();
			this.cg = new $.ig.IndexCollection();
			this.cm = null;

			$.ig.Control.prototype.init.call(this);
						var a = this.d3();
				this.d4(a);
				a.aq();
				this.a3($.ig.PieChartBase.prototype.$type);
				this.dt(new $.ig.List$1($.ig.Number.prototype.$type, 0));
				this.du(new $.ig.List$1($.ig.Number.prototype.$type, 0));
				this.dv(new $.ig.List$1($.ig.Object.prototype.$type, 0));
				this.b7 = function (b, c) {
					$self.fi(b, c.propertyName(), c.oldValue(), c.newValue());
				};
				this.b8 = function (d, e) {
					$self.fd();
					$self.ff();
				};
				this.ca = function (f, g) {
					if ($self.allowSliceExplosion()) {
						$self.e9();
						$self.fa();
						$self.fd();
						$self.fe();
					}
				};
				this.b9 = function (h, i) {
					if ($self.allowSliceSelection()) {
						$self.e9();
						$self.fd();
						$self.ff();
					}
				};
				this.cb = function (j, k) {
					$self.e6(k.action(), k.position(), k.count(), k.propertyName());
				};
				this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, this.b7);
				this.selectedSlices().collectionChanged = $.ig.Delegate.prototype.combine(this.selectedSlices().collectionChanged, this.b9);
				this.b5 = true;
				this.explodedSlices().collectionChanged = $.ig.Delegate.prototype.combine(this.explodedSlices().collectionChanged, this.ca);
				this.b6 = true;
				this.ci = (function () { var $ret = new $.ig.Pool$1($.ig.Slice.prototype.$type);
				$ret.create($self.dn().bs.on($self.dn()));
				$ret.activate($self.dn().bt.on($self.dn()));
				$ret.disactivate($self.dn().bu.on($self.dn()));
				$ret.destroy($self.dn().bv.on($self.dn())); return $ret;}());
				this.cj = (function () { var $ret = new $.ig.Pool$1($.ig.PieLabel.prototype.$type);
				$ret.create($self.dn().by.on($self.dn()));
				$ret.activate($self.dn().bz.on($self.dn()));
				$ret.disactivate($self.dn().b0.on($self.dn()));
				$ret.destroy($self.dn().b1.on($self.dn())); return $ret;}());
		}, 
	b2: null, 
	b3: null, 
	b4: null, 
	b5: null, 
	b6: null, 
	b7: null, 
	b8: null, 
	b9: null, 
	ca: null, 
	cb: null
, 
	dp: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.cc, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.cc);
		}
	}
, 
	cd: null
, 
	dq: function (a) {
		if (arguments.length === 1) {
			if (this.cd != a) {
				var b = this.cd;
				this.cd = a;
				this.fj($.ig.PieChartBase.prototype.a9, b, this.cd);
			}
			return a;
		} else {
			return this.cd;
		}
	}

, 
	_dr: null,
	dr: function (a) {
		if (arguments.length === 1) {
			this._dr = a;
			return a;
		} else {
			return this._dr;
		}
	}

, 
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
	_du: null,
	du: function (a) {
		if (arguments.length === 1) {
			this._du = a;
			return a;
		} else {
			return this._du;
		}
	}

, 
	_dv: null,
	dv: function (a) {
		if (arguments.length === 1) {
			this._dv = a;
			return a;
		} else {
			return this._dv;
		}
	}

, 
	_dw: null,
	dw: function (a) {
		if (arguments.length === 1) {
			this._dw = a;
			return a;
		} else {
			return this._dw;
		}
	}

, 
	_dx: null,
	dx: function (a) {
		if (arguments.length === 1) {
			this._dx = a;
			return a;
		} else {
			return this._dx;
		}
	}

, 
	dy: function () {
			return 0;
	}

, 
	itemsSource: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.itemsSourceProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.itemsSourceProperty);
		}
	}

, 
	valueMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.valueMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.valueMemberPathProperty);
		}
	}

, 
	labelMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.labelMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.labelMemberPathProperty);
		}
	}
, 
	ce: null
, 
	dz: function (a) {
		if (arguments.length === 1) {
			if (this.ce != a) {
				var b = this.dz();
				this.ce = a;
				this.fj($.ig.PieChartBase.prototype.bd, b, this.dz());
			}
			return a;
		} else {
			return this.ce;
		}
	}

, 
	labelsPosition: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.labelsPositionProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.labelsPositionProperty);
		}
	}

, 
	leaderLineVisibility: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.leaderLineVisibilityProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.leaderLineVisibilityProperty);
		}
	}

, 
	leaderLineStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.leaderLineStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.leaderLineStyleProperty);
		}
	}

, 
	toolTip: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.toolTipProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.toolTipProperty);
		}
	}

, 
	othersCategoryThreshold: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.othersCategoryThresholdProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.othersCategoryThresholdProperty);
		}
	}

, 
	othersCategoryType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.othersCategoryTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.othersCategoryTypeProperty);
		}
	}

, 
	othersCategoryText: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.othersCategoryTextProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.othersCategoryTextProperty);
		}
	}

, 
	explodedRadius: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.explodedRadiusProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.explodedRadiusProperty);
		}
	}

, 
	d0: function () {
			var b = this.explodedRadius();
			if (isNaN(b) || Number.isInfinity(b) || b < 0) {
			return 0;
			}
			if (b > 1) {
			return 1;
			}
			return b;
	}

, 
	radiusFactor: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.radiusFactorProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.radiusFactorProperty);
		}
	}

, 
	d1: function () {
			var b = this.radiusFactor();
			if (isNaN(b) || Number.isInfinity(b) || b < 0) {
			return 0;
			}
			if (b > 1) {
			return 1;
			}
			return b;
	}

, 
	allowSliceSelection: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.allowSliceSelectionProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.allowSliceSelectionProperty);
		}
	}

, 
	allowSliceExplosion: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.allowSliceExplosionProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.allowSliceExplosionProperty);
		}
	}

, 
	explodedSlices: function (a) {
		if (arguments.length === 1) {
			this.cf.collectionChanged = $.ig.Delegate.prototype.remove(this.cf.collectionChanged, this.ca);
			this.b6 = false;
			this.cf = a;
			if (this.cf != null) {
				this.cf.collectionChanged = $.ig.Delegate.prototype.combine(this.cf.collectionChanged, this.ca);
				this.b6 = true;
			}
			if (this.allowSliceExplosion()) {
				this.e9();
				this.fa();
				this.fd();
				this.fe();
			}
			return a;
		} else {
			return this.cf;
		}
	}
, 
	cf: null
, 
	legend: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.legendProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.legendProperty);
		}
	}

, 
	labelExtent: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.labelExtentProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.labelExtentProperty);
		}
	}

, 
	startAngle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.startAngleProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.startAngleProperty);
		}
	}

, 
	sweepDirection: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.sweepDirectionProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.sweepDirectionProperty);
		}
	}

, 
	selectedSlices: function (a) {
		if (arguments.length === 1) {
			this.cg.collectionChanged = $.ig.Delegate.prototype.remove(this.cg.collectionChanged, this.b9);
			this.b5 = false;
			this.cg = a;
			if (this.cg != null) {
				this.cg.collectionChanged = $.ig.Delegate.prototype.combine(this.cg.collectionChanged, this.b9);
				this.b5 = true;
			}
			if (this.allowSliceSelection()) {
				this.e9();
				this.fd();
				this.ff();
			}
			return a;
		} else {
			return this.cg;
		}
	}
, 
	cg: null
, 
	othersCategoryStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.othersCategoryStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.othersCategoryStyleProperty);
		}
	}

, 
	selectedStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.selectedStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.selectedStyleProperty);
		}
	}

, 
	toolTipStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.toolTipStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.toolTipStyleProperty);
		}
	}

, 
	brushes: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.brushesProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.brushesProperty);
		}
	}

, 
	outlines: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.outlinesProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.outlinesProperty);
		}
	}

, 
	legendItemTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.legendItemTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.legendItemTemplateProperty);
		}
	}

, 
	legendItemBadgeTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.legendItemBadgeTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.PieChartBase.prototype.legendItemBadgeTemplateProperty);
		}
	}

, 
	labelTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PieChartBase.prototype.labelTemplateProperty, a);
			return a;
		} else {
			return $.ig.util.cast($.ig.DataTemplate.prototype.$type, this.b($.ig.PieChartBase.prototype.labelTemplateProperty));
		}
	}
, 
	sliceClick: null
, 
	eu: function (a, b) {
		if (this.sliceClick != null) {
			this.sliceClick(a, b);
		}
	}
, 
	ci: null, 
	cj: null
, 
	ev: function (a, b) {
		if (!this.explodedSlices().contains(a.c1()) && b) {
			this.explodedSlices().add(a.c1());
		}
		if (this.explodedSlices().contains(a.c1()) && !b) {
			this.explodedSlices().remove(a.c1());
		}
	}

, 
	ew: function (a, b) {
		if (!this.selectedSlices().contains(a.c1()) && b) {
			this.selectedSlices().add(a.c1());
		}
		if (this.selectedSlices().contains(a.c1()) && !b) {
			this.selectedSlices().remove(a.c1());
		}
	}

, 
	ex: function (a) {
		this.dn().b2(a);
	}

, 
	ey: function (a) {
		return this.dn().b3(a);
	}

, 
	ez: function (a, b) {
		var c = new $.ig.Rect(0, 0, 0, 0, 0);
		return c;
	}

, 
	e0: function (a, b) {
		var c = a.bc();
		if (c == null) {
		return false;
		}
		var d = c.ej();
		var e = this.sweepDirection() == $.ig.SweepDirection.prototype.clockwise ? c.cs() : c.ct();
		var f = this.sweepDirection() == $.ig.SweepDirection.prototype.clockwise ? c.ct() : c.cs();
		var g = false;
		var h = false;
		var i = $.ig.GeometryUtil.prototype.g(d, e, c.cz());
		var j = $.ig.GeometryUtil.prototype.g(d, f, c.cz());
		e = $.ig.PieChartBase.prototype.e3(i.__x, d.__x, i.__y, d.__y);
		f = $.ig.PieChartBase.prototype.e3(j.__x, d.__x, j.__y, d.__y);
		if (this.e2(c)) {
			h = true;
		}
		var k;
		k = $.ig.MathUtil.prototype.f(a.bd().right() - d.__x, a.bd().top() - d.__y);
		if (k > c.cz()) {
		return false;
		}
		k = $.ig.MathUtil.prototype.f(a.bd().right() - d.__x, a.bd().bottom() - d.__y);
		if (k > c.cz()) {
		return false;
		}
		k = $.ig.MathUtil.prototype.f(a.bd().left() - d.__x, a.bd().top() - d.__y);
		if (k > c.cz()) {
		return false;
		}
		k = $.ig.MathUtil.prototype.f(a.bd().left() - d.__x, a.bd().bottom() - d.__y);
		if (k > c.cz()) {
		return false;
		}
		if (h) {
		return true;
		}
		if (e > f) {
			e = e - 360;
			g = true;
		}
		var l;
		l = $.ig.PieChartBase.prototype.e3(a.bd().right(), d.__x, a.bd().top(), d.__y);
		if (g && l > 180 && l < 360) {
		l = l - 360;
		}
		if (l < e || l > f) {
		return false;
		}
		l = $.ig.PieChartBase.prototype.e3(a.bd().right(), d.__x, a.bd().bottom(), d.__y);
		if (g && l > 180 && l < 360) {
		l = l - 360;
		}
		if (l < e || l > f) {
		return false;
		}
		l = $.ig.PieChartBase.prototype.e3(a.bd().left(), d.__x, a.bd().top(), d.__y);
		if (g && l > 180 && l < 360) {
		l = l - 360;
		}
		if (l < e || l > f) {
		return false;
		}
		l = $.ig.PieChartBase.prototype.e3(a.bd().left(), d.__x, a.bd().bottom(), d.__y);
		if (g && l > 180 && l < 360) {
		l = l - 360;
		}
		if (l < e || l > f) {
		return false;
		}
		return true;
	}

, 
	e1: function (a) {
		var b = Math.round(a * Math.pow(10, 5)) / Math.pow(10, 5);
		return b;
	}

, 
	e2: function (a) {
		return $.ig.PieChartBase.prototype.e1(Math.abs(a.ct() - a.cs())) == 360;
	}

, 
	e3: function (a, b, c, d) {
		var e = $.ig.MathUtil.prototype.f(a - b, c - d);
		var f = Math.asin((c - d) / e) * 180 / Math.PI;
		if (a < b) {
		f = 180 - f;
		}
		if (a > b) {
		f = 360 + f;
		}
		if (f == 360) {
		f = 0;
		}
		return $.ig.GeometryUtil.prototype.a(f);
	}

, 
	e4: function (a) {
		for (var b = 0; b < a.count(); b++) {
			for (var c = b + 1; c < a.count(); c++) {
				if (a.__inner[b].bd().top() > a.__inner[c].bd().top()) {
					var d = a.__inner[b];
					a.__inner[b] = a.__inner[c];
					a.__inner[c] = d;
				}
			}
		}
	}

, 
	e5: function (a) {
		if (a.count() == 0) {
		return;
		}
		var b = this.dn().af().width();
		var c = this.dn().af().height();
		var d = a.count();
		var e = a.__inner[0].bc().cz();
		var f = a.__inner[0].bc().ej();
		var g = true;
		var h = 0;
		var i = Number.POSITIVE_INFINITY;
		var j = Number.NEGATIVE_INFINITY;
		for (var k = 0; k < d - 1; k++) {
			var l = a.__inner[k];
			var m = a.__inner[k + 1];
			if (l.bd().intersectsWith(m.bd())) {
				h++;
			}
		}
		var n = 0;
		var p = a.getEnumerator();
		while (p.moveNext()) {
			var o = p.current();
			i = Math.min(i, o.bd().height());
			j = Math.max(j, o.bd().height());
			n += o.bd().height();
		}
		if (n > c) {
			g = false;
		}
		if (g && h > 0) {
			for (var q = 0; q < d - 1; q++) {
				for (var r = q + 1; r < d; r++) {
					var s = a.__inner[q];
					var t = a.__inner[r];
					if (s.bd().intersectsWith(t.bd())) {
						var u = t.bd();
						u.y(Math.min(s.bd().bottom() + 0.01, c - i));
						var v = this.labelExtent() + e;
						var w = Math.abs(f.__y - (u.y() + i / 2));
						var x = Math.sqrt(Math.abs(v * v - w * w));
						var y = $.ig.GeometryUtil.prototype.a(t.be());
						if (y > 90 && y < 270) {
							x = (u.width() + x) * -1;
						}
						u.x(f.__x + x);
						t.bd(u);
					}
				}
			}
			for (var z = d - 1; z > 0; z--) {
				for (var aa = z - 1; aa >= 0; aa--) {
					var ab = a.__inner[z];
					var ac = a.__inner[aa];
					if (ab.bd().intersectsWith(ac.bd())) {
						var ad = ac.bd();
						ad.y(Math.max(ab.bd().top() - i - 0.01, 0));
						var ae = this.labelExtent() + e;
						var af = Math.abs(f.__y - (ad.y() + i / 2));
						var ag = Math.sqrt(Math.abs(ae * ae - af * af));
						var ah = $.ig.GeometryUtil.prototype.a(ac.be());
						if (ah > 90 && ah < 270) {
							ag = (ad.width() + ag) * -1;
						}
						ad.x(f.__x + ag);
						ac.bd(ad);
					}
				}
			}
		}
		var aj = a.getEnumerator();
		while (aj.moveNext()) {
			var ai = aj.current();
			var ak = ai.bd();
			if (ak.left() > b || ak.right() < 0) {
				ai.__visibility = $.ig.Visibility.prototype.collapsed;
				ai.bg().__visibility = $.ig.Visibility.prototype.collapsed;
			} else if (ak.left() < 0) {
				var al = Math.abs(ak.x());
				ak.x(0);
				if (al > ak.width()) {
					ak.width(0);

				} else {
					ak.width(al);
				}
				ai.bd(ak);
			} else if (ak.right() > b) {
				var am = ak.right() - b;
				if (am > ak.width()) {
					ak.width(0);

				} else {
					ak.width(am);
				}
				ai.bd(ak);
			}
		}
	}

, 
	e6: function (a, b, c, d) {
		this.e7();
	}

, 
	e7: function () {
		this.e8();
		this.e9();
		this.fa();
		this.fd();
		this.fe();
		this.ff();
		this.dn().cd();
	}

, 
	e8: function () {
		this.ds(0);
		this.dr(0);
		this.dt().clear();
		this.du().clear();
		this.dv().clear();
		if (this.itemsSource() == null || this.dp() == null) {
			return;
		}
		if (this.dq() == null || this.dq().count() == 0) {
			return;
		}
		var b = this.dq().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			if (isNaN(a) || Number.isInfinity(a) || a <= 0) {
				continue;
			}
			this.ds(this.ds() + a);
		}
		for (var c = 0; c < this.dq().count(); c++) {
			var d = this.dq().item(c);
			if (isNaN(d) || Number.isInfinity(d) || d <= 0) {
			continue;
			}
			var e = this.othersCategoryType() == $.ig.OthersCategoryType.prototype.percent ? d / this.ds() : d;
			var f = this.othersCategoryType() == $.ig.OthersCategoryType.prototype.percent ? this.othersCategoryThreshold() / 100 : this.othersCategoryThreshold();
			if (e <= f) {
				this.dr(this.dr() + d);
				this.du().add(c);
				this.dv().add1(this.dp().item(c));

			} else {
				this.dt().add(c);
			}
		}
	}

, 
	e9: function () {
		if (this.itemsSource() == null || this.dp() == null) {
			this.ci.g(0);
			return;
		}
		var a = this.dt().count();
		var b = this.du().count() > 0;
		var c = $.ig.PieChartBase.prototype.e1(this.dw());
		var d = $.ig.PieChartBase.prototype.e1(this.dw());
		if (b) {
			a++;
		}
		for (var e = 0; e < a; e++) {
			var f = false;
			var g;
			if (e == a - 1 && b) {
				g = this.dr();
				f = true;

			} else {
				g = this.dq().item(this.dt().__inner[e]);
			}
			if (this.sweepDirection() == $.ig.SweepDirection.prototype.clockwise) {
				d += $.ig.PieChartBase.prototype.e1(Math.abs(g) * 360 / this.ds());

			} else {
				d -= $.ig.PieChartBase.prototype.e1(Math.abs(g) * 360 / this.ds());
			}
			var h = this.ci.item(e);
			h.cs(c);
			h.ct(d);
			h.cu(h.cv(this.dy()));
			h.cw(f);
			h.c0(this.d0());
			h.c1(e);
			h.dataContext(f ? this.dv() : this.dp().item(this.dt().__inner[e]));
			h.isExploded(this.explodedSlices().contains(e));
			h.isSelected(this.selectedSlices().contains(e));
			c = d;
		}
		this.ci.g(a);
	}

, 
	fa: function () {
		var $self = this;
		if (this.itemsSource() == null || this.dp() == null) {
			this.cj.g(0);
			return;
		}
		if (this.dz() == null || this.dz().count() == 0 || this.labelsPosition() == $.ig.LabelsPosition.prototype.none) {
			this.cj.g(0);
			return;
		}
		var a = this.dt().count();
		if (this.du().count() > 0) {
			a++;
		}
		this.dn().ce();
		for (var b = 0; b < a; b++) {
			var c;
			var d = false;
			var e;
			if (b == a - 1 && this.du().count() > 0) {
				e = null;
				d = true;
				c = this.othersCategoryText();

			} else {
				e = this.dz().item(this.dt().__inner[b]);
				c = e.toString();
			}
			var f = this.cj.item(b);
			var g = this.ci.item(b);
			g.c5(f);
			f.be($.ig.GeometryUtil.prototype.a((g.cs() + g.ct()) / 2));
			f.bc(g);
			f.bf((function () { var $ret = new $.ig.TextBlock();
			$ret.a5(c); return $ret;}()));
			if (this.labelTemplate() == null) {
				f.dataContext(d ? this.dv() : this.dp().item(this.dt().__inner[b]));
				f.br();

			} else {
			}
			f.__visibility = $.ig.Visibility.prototype.visible;
			f.bd(this.dn().b9(f));
		}
		this.cj.g(a);
	}

, 
	_d2: null,
	d2: function (a) {
		if (arguments.length === 1) {
			this._d2 = a;
			return a;
		} else {
			return this._d2;
		}
	}

, 
	fd: function () {
		if (this.itemsSource() == null || this.dp() == null) {
			return;
		}
		var a = this.dn().ca();
		this.d2(new $.ig.Rect(0, 0, 0, a.c(), a.d()));
		var b = {__x: a.c() / 2, __y: a.d() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var c = Math.min(a.d() / 2, a.c() / 2) * this.d1();
		var e = this.ci.h().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			var f = $.ig.GeometryUtil.prototype.f(a.c(), a.d(), true, (d.cs() + d.ct()) / 2, c * this.d0());
			d.cu(d.cv(this.dy()));
			d.cz(c);
			d.c0(this.d0());
			d.cx(b);
			d.cy(f);
			this.ex(d);
			d.ek();
		}
		this.dn().cd();
	}

, 
	fe: function () {
		var a = this.dn().af().width();
		var b = this.dn().af().height();
		if (b == 0 || a == 0) {
			return;
		}
		if (this.cj.h().count() == 0 || this.labelsPosition() == $.ig.LabelsPosition.prototype.none) {
			this.cj.g(0);
			return;
		}
		var c = new $.ig.List$1($.ig.PieLabel.prototype.$type, 0);
		var d = new $.ig.List$1($.ig.PieLabel.prototype.$type, 0);
		var e = new $.ig.List$1($.ig.PieLabel.prototype.$type, 0);
		var f = new $.ig.List$1($.ig.PieLabel.prototype.$type, 0);
		var h = this.cj.h().getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			var i = g.bc();
			if (i == null) {
			continue;
			}
			var j = i.ej();
			var k = g.bd().width();
			var l = g.bd().height();
			if (this.labelsPosition() == $.ig.LabelsPosition.prototype.center || this.labelsPosition() == $.ig.LabelsPosition.prototype.bestFit) {
				var m = $.ig.GeometryUtil.prototype.g(j, g.be(), i.cz() / 2);
				g.bd(new $.ig.Rect(0, m.__x - k / 2, m.__y - l / 2, k, l));
				var n = this.e0(g, m);
				if (n || this.labelsPosition() == $.ig.LabelsPosition.prototype.center) {
					e.add(g);
					g.bg().__visibility = $.ig.Visibility.prototype.collapsed;
					if (!n && this.labelsPosition() == $.ig.LabelsPosition.prototype.center) {
						g.__visibility = $.ig.Visibility.prototype.collapsed;

					} else {
						g.__visibility = $.ig.Visibility.prototype.visible;
					}
					continue;
				}
			}
			if (this.labelsPosition() == $.ig.LabelsPosition.prototype.insideEnd || this.labelsPosition() == $.ig.LabelsPosition.prototype.bestFit) {
				var o = 5;
				var p = g.be() * Math.PI / 180;
				o += Math.abs(g.bd().width() / 2 * Math.cos(p)) + Math.abs(g.bd().height() / 2 * Math.sin(p));
				var q = $.ig.GeometryUtil.prototype.g(j, g.be(), i.cz() - o);
				g.bd(new $.ig.Rect(0, q.__x - k / 2, q.__y - l / 2, k, l));
				var r = this.e0(g, q);
				if (r || this.labelsPosition() == $.ig.LabelsPosition.prototype.insideEnd) {
					f.add(g);
					g.bg().__visibility = $.ig.Visibility.prototype.collapsed;
					if (!r && this.labelsPosition() == $.ig.LabelsPosition.prototype.insideEnd) {
						g.__visibility = $.ig.Visibility.prototype.collapsed;

					} else {
						g.__visibility = $.ig.Visibility.prototype.visible;
					}
					continue;
				}
			}
			var s = $.ig.GeometryUtil.prototype.g(j, g.be(), i.cz());
			var t = $.ig.GeometryUtil.prototype.g(j, g.be(), i.cz() + this.labelExtent());
			g.bg().bq(s.__x);
			g.bg().bs(s.__y);
			g.bg().__visibility = this.leaderLineVisibility();
			g.__visibility = $.ig.Visibility.prototype.visible;
			g.bs();
			if (g.be() < 90 && g.be() >= 0) {
				g.bd(new $.ig.Rect(0, t.__x, t.__y, k, l));
				c.add(g);
			} else if (g.be() < 180 && g.be() >= 90) {
				g.bd(new $.ig.Rect(0, t.__x - k, t.__y, k, l));
				d.add(g);
			} else if (g.be() < 270 && g.be() >= 180) {
				g.bd(new $.ig.Rect(0, t.__x - k, t.__y - l, k, l));
				d.add(g);

			} else {
				g.bd(new $.ig.Rect(0, t.__x, t.__y - l, k, l));
				c.add(g);
			}
			if (g.bd().y() < 0) {
				g.bd(new $.ig.Rect(0, g.bd().x(), 0, g.bd().width(), g.bd().height()));
			}
			if (g.bd().bottom() > b) {
				g.bd(new $.ig.Rect(0, g.bd().x(), b - g.bd().height(), g.bd().width(), g.bd().height()));
			}
		}
		$.ig.PieChartBase.prototype.e4(c);
		this.e5(c);
		$.ig.PieChartBase.prototype.e4(d);
		this.e5(d);
		var v = e.getEnumerator();
		while (v.moveNext()) {
			var u = v.current();
			this.dn().cb(u, u.bd().x(), u.bd().y());
		}
		var x = f.getEnumerator();
		while (x.moveNext()) {
			var w = x.current();
			this.dn().cb(w, w.bd().x(), w.bd().y());
		}
		var z = c.getEnumerator();
		while (z.moveNext()) {
			var y = z.current();
			this.dn().cb(y, y.bd().x(), y.bd().y());
			y.bt(y.bd().left(), (y.bd().top() + y.bd().bottom()) / 2);
		}
		var ab = d.getEnumerator();
		while (ab.moveNext()) {
			var aa = ab.current();
			this.dn().cb(aa, aa.bd().x(), aa.bd().y());
			aa.bt(aa.bd().right(), (aa.bd().top() + aa.bd().bottom()) / 2);
		}
		this.dn().cd();
	}

, 
	ff: function () {
		var $self = this;
		var a = $.ig.util.cast($.ig.ItemLegend.prototype.$type, this.legend());
		if (a == null) {
		return;
		}
		if (this.dz() == null || this.dz().count() == 0) {
			a.cl(this);
			return;
		}
		this.dx(new $.ig.List$1($.ig.UIElement.prototype.$type, 0));
		var c = this.ci.h().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			var d = new $.ig.ContentControl();
			var e = this.ey(b);
			var f = b.c9();
			d.a9((function () { var $ret = new $.ig.PieSliceDataContext();
			$ret.series($self);
			$ret.slice(b);
			$ret.item(b.dataContext());
			$ret.itemBrush(f);
			$ret.itemLabel(e != null ? e.toString() : null);
			$ret.percentValue($self.fp(b)); return $ret;}()));
			d.ba(this.legendItemTemplate());
			this.dx().add(d);
		}
		a.bz(this.dx(), this);
	}

, 
	fg: function (a) {
		var b = null;
		return this.dp().ab(a, b);
	}

, 
	fh: function (a) {
		var b = null;
		return this.dp().z(a, b);
	}

, 
	fi: function (a, b, c, d) {
		var $self = this;
		switch (b) {
			case $.ig.PieChartBase.prototype.ba:
				this.dp((function () { var $ret = new $.ig.FastItemsSource();
				$ret.f(d); return $ret;}()));
				break;
			case $.ig.PieChartBase.prototype.a8:
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).event = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).event, this.cb);
					this.b4 = false;
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.dq());
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.dz());
					this.dq(null);
					this.dz(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d)).event = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d)).event, this.cb);
					this.b4 = true;
					this.dq(this.fg(this.valueMemberPath()));
					this.dz(this.fh(this.labelMemberPath()));
				}
				this.e7();
				break;
			case $.ig.PieChartBase.prototype.bb:
				if (this.dp() != null) {
					this.dp().ac(this.dq());
					this.dq(this.fg(this.valueMemberPath()));
				}
				break;
			case $.ig.PieChartBase.prototype.bc:
				if (this.dp() != null) {
					this.dp().ac(this.dz());
					this.dz(this.fh(this.labelMemberPath()));
					this.fa();
					this.fe();
					this.ff();
				}
				break;
			case $.ig.PieChartBase.prototype.br:
				this.dw(d);
				this.e9();
				this.fa();
				this.fd();
				this.fe();
				break;
			case $.ig.PieChartBase.prototype.bh:
				this.dn().cc(this.toolTip());
				break;
			case $.ig.PieChartBase.prototype.bp:
				var e = $.ig.util.cast($.ig.ItemLegend.prototype.$type, c);
				if (e != null) {
					e.cl(this);
				}
				this.ff();
				break;
			case $.ig.PieChartBase.prototype.bz:
			case $.ig.PieChartBase.prototype.by:
				this.ff();
				break;
			case $.ig.PieChartBase.prototype.bm:
			case $.ig.PieChartBase.prototype.bl:
			case $.ig.PieChartBase.prototype.bs:
				this.e9();
				this.fa();
				this.fd();
				this.fe();
				break;
			case $.ig.PieChartBase.prototype.bt:
			case $.ig.PieChartBase.prototype.bu:
				this.fd();
				this.ff();
				break;
			case $.ig.PieChartBase.prototype.bw:
				if (c != null) {
					var f = c;
					f.collectionChanged = $.ig.Delegate.prototype.remove(f.collectionChanged, this.b8);
					this.b2 = false;
				}
				if (d != null) {
					var g = d;
					g.collectionChanged = $.ig.Delegate.prototype.combine(g.collectionChanged, this.b8);
					this.b2 = true;
				}
				this.fd();
				this.ff();
				break;
			case $.ig.PieChartBase.prototype.bx:
				if (c != null) {
					var h = c;
					h.collectionChanged = $.ig.Delegate.prototype.remove(h.collectionChanged, this.b8);
					this.b3 = false;
				}
				if (d != null) {
					var i = d;
					i.collectionChanged = $.ig.Delegate.prototype.combine(i.collectionChanged, this.b8);
					this.b3 = true;
				}
				this.fd();
				this.ff();
				break;
			case $.ig.PieChartBase.prototype.a9:
			case $.ig.PieChartBase.prototype.bi:
			case $.ig.PieChartBase.prototype.bj:
			case $.ig.PieChartBase.prototype.bo:
			case $.ig.PieChartBase.prototype.bn:
				this.e7();
				break;
			case $.ig.PieChartBase.prototype.be:
			case $.ig.PieChartBase.prototype.bq:
				this.fa();
				this.fe();
				break;
			case $.ig.PieChartBase.prototype.bk:
				this.fa();
				this.fe();
				this.ff();
				break;
			case $.ig.PieChartBase.prototype.bf:
				this.fe();
				break;
			case $.ig.PieChartBase.prototype.bg:
				break;
			case $.ig.PieChartBase.prototype.b1:
				this.dn().cs();
				break;
			case $.ig.PieChartBase.prototype.b0:
				this.fa();
				this.fe();
				break;
		}
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	fj: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}

, 
	fk: function (a, b) {
		var c = new $.ig.SliceClickEventArgs(a);
		this.eu(this, c);
		this.dn().bp(a, b);
	}

, 
	fl: function (a, b) {
		this.dn().bp(a, b);
	}

, 
	fm: function (a, b) {
		this.dn().bp(a, b);
	}

, 
	fn: function (a, b) {
		this.dn().bo();
	}

, 
	fo: function () {
		this.e7();
	}

, 
	provideContainer: function (a) {
		this.dn().a6(a);
	}

, 
	onContainerResized: function (a, b) {
		this.dn().cg(a, b);
	}

, 
	getContainerRect: function () {
		return this.dn().a7();
	}

, 
	getContainerOffsets: function () {
		return this.dn().a8();
	}

, 
	destroy: function () {
		this.removeWidgetLevelDataSource();
		this.dn().a6(null);
	}
, 
	cm: null
, 
	textStyle: function (a) {
		if (arguments.length === 1) {
			var b = this.cm;
			this.cm = a;
			this.fj($.ig.PieChartBase.prototype.b1, b, a);
			return a;
		} else {
			return this.cm;
		}
	}

, 
	fp: function (a) {
		if (a == null || this.dq() == null || this.dt() == null) {
			return NaN;
		}
		if (a.cw()) {
			return this.dr() / this.ds() * 100;

		} else {
			return this.dq().item(this.dt().__inner[a.c1()]) / this.ds() * 100;
		}
	}

, 
	notifySetItem: function (source_, a, b, c) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (source_ != this.itemsSource()) {
			return;
		}
		var d = this.dp();
		if (d == null) {
			return;
		}
		d.ae(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, c, b, a));
	}

, 
	notifyClearItems: function (source_) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (source_ != this.itemsSource()) {
			return;
		}
		var a = this.dp();
		a.ae(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset));
	}

, 
	notifyInsertItem: function (source_, a, b) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (source_ != this.itemsSource()) {
			return;
		}
		var c = this.dp();
		if (c == null) {
			return;
		}
		c.ae(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, b, a));
	}

, 
	notifyRemoveItem: function (source_, a, b) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (source_ != this.itemsSource()) {
			return;
		}
		var c = this.dp();
		if (c == null) {
			return;
		}
		c.ae(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, b, a));
	}

, 
	setWidgetLevelDataSource: function (source_) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		this.itemsSource(source_);
	}

, 
	removeWidgetLevelDataSource: function () {
		this.itemsSource(null);
	}

, 
	styleUpdated: function () {
		this.dn().cs();
	}
,
	$type: new $.ig.Type('PieChartBase', $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('PieLabel', 'Control', {

		init: function () {


			$.ig.Control.prototype.init.call(this);
		}
, 
	_bc: null,
	bc: function (a) {
		if (arguments.length === 1) {
			this._bc = a;
			return a;
		} else {
			return this._bc;
		}
	}

, 
	_bd: null,
	bd: function (a) {
		if (arguments.length === 1) {
			this._bd = a;
			return a;
		} else {
			return this._bd;
		}
	}

, 
	_be: null,
	be: function (a) {
		if (arguments.length === 1) {
			this._be = a;
			return a;
		} else {
			return this._be;
		}
	}

, 
	_bf: null,
	bf: function (a) {
		if (arguments.length === 1) {
			this._bf = a;
			return a;
		} else {
			return this._bf;
		}
	}

, 
	_bg: null,
	bg: function (a) {
		if (arguments.length === 1) {
			this._bg = a;
			return a;
		} else {
			return this._bg;
		}
	}

, 
	br: function () {
	}

, 
	bs: function () {
	}

, 
	bt: function (a, b) {
		this.bg().br(a);
		this.bg().bt(b);
	}
,
	$type: new $.ig.Type('PieLabel', $.ig.Control.prototype.$type)
}, true);

$.ig.util.defType('IndexCollection', 'ObservableCollection$1', {
	init: function () {

		$.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Number.prototype.$type);

	}
, 
	j: function (a, b) {
		if (!this.contains(b)) {
		$.ig.ObservableCollection$1.prototype.j.call(this, a, b);
		}
	}

, 
	i: function (a, b) {
		if (this.contains(b)) {
			this.remove(b);
			this.j(a, b);

		} else {
		$.ig.ObservableCollection$1.prototype.i.call(this, a, b);
		}
	}
,
	$type: new $.ig.Type('IndexCollection', $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Number.prototype.$type))
}, true);


$.ig.util.defType('PieChartBaseView', 'Object', {

		init: function (a) {

			this.b = false;
			this.c = $.ig.Rect.prototype.empty();
			this.d = false;
			this.e = true;
			this.__toolTipObject = null;
			this.f = null;

			$.ig.Object.prototype.init.call(this);
						this.x(a);
				this.ae(new $.ig.PieChartViewManager(this));
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
	aq: function () {
		var $self = this;
		this.an(new $.ig.PieSliceDataContext());
		this.an().series(this.x());
		this.af($.ig.Rect.prototype.empty());
		this.ah(new $.ig.List$1($.ig.Slice.prototype.$type, 0));
		this.ai(new $.ig.List$1($.ig.PieLabel.prototype.$type, 0));
		this.x().legendItemTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.LegendTemplates.prototype.c);
		$ret.measure($.ig.LegendTemplates.prototype.i); return $ret;}()));
		this.x().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.LegendTemplates.prototype.e);
		$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
	}

, 
	ar: function () {
		var $self = this;
		var a = new $.ig.BrushCollection();
		var b = new $.ig.BrushCollection();
		var c;
		var d;
		(function () { var $ret = $self.ae().a4(a, b, c, d); a = $ret.brushes; b = $ret.outlines; c = $ret.fontBrush; d = $ret.font; return $ret.ret; }());
		this.x().brushes(a);
		this.x().outlines(b);
		this.y(c);
		if (this.x().textStyle() != null) {
			this.z(this.x().textStyle());

		} else {
			this.z(d);
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
	_ac: null,
	ac: function (a) {
		if (arguments.length === 1) {
			this._ac = a;
			return a;
		} else {
			return this._ac;
		}
	}

, 
	_ad: null,
	ad: function (a) {
		if (arguments.length === 1) {
			this._ad = a;
			return a;
		} else {
			return this._ad;
		}
	}

, 
	_ae: null,
	ae: function (a) {
		if (arguments.length === 1) {
			this._ae = a;
			return a;
		} else {
			return this._ae;
		}
	}

, 
	a6: function (a) {
		if (a == null) {
			this.ae().a8(null);
			this.aa(null);
			this.ab(null);
			this.ac(null);
			this.ad(null);
			return;
		}
		this.ae().a8(a);
		this.aa(this.ae().w());
		this.ab(this.ae().x());
		this.ac(this.ae().y());
		this.ad(this.ae().y());
		this.b5();
		this.ar();
	}

, 
	a7: function () {
		return this.af();
	}

, 
	a8: function () {
		return this.ae().a1();
	}

, 
	a9: function () {
		this.af(this.ae().az());
		this.x().fo();
	}

, 
	_af: null,
	af: function (a) {
		if (arguments.length === 1) {
			this._af = a;
			return a;
		} else {
			return this._af;
		}
	}
, 
	b: null
, 
	bc: function () {
		if (!this.b) {
			this.b = true;
			this.ae().a3(this.bd.on(this));
		}
	}

, 
	bd: function () {
		this.b = false;
		this.be();
	}
, 
	c: null
, 
	be: function () {
		this.cf();
		if (!this.c.isEmpty()) {
			if (this.ad().b()) {
				this.ad().t(this.c.left(), this.c.top(), this.c.width(), this.c.height());
			}
			if (this.ac().b()) {
				this.ac().t(this.c.left(), this.c.top(), this.c.width(), this.c.height());
			}
			if (this.ab().b()) {
				this.ab().t(this.c.left(), this.c.top(), this.c.width(), this.c.height());
			}
			if (this.aa().b()) {
				this.aa().t(this.c.left(), this.c.top(), this.c.width(), this.c.height());
			}
		}
		this.bf();
	}
, 
	d: null
, 
	bf: function () {
		this.c = this.af();
		if (this.ab().b()) {
			var b = this.ah().getEnumerator();
			while (b.moveNext()) {
				var a = b.current();
				if (a.__visibility == $.ig.Visibility.prototype.visible) {
					var c = a.cr().k();
					this.ae().a5(c);
					c.a7(1);
					if (a.c9() != null) {
						c.__fill = a.c9();
					}
					if (a.da() != null) {
						c.__stroke = a.da();
					}
					if (a.ab() != null) {
						this.ab().aa(c, a.ab());
					}
					if (c.f() != null) {
						this.ab().o();
						this.ab().m(c.f());
					}
					if (this.d) {
						var d;
						if (a.c9() == null || !a.c9().isGradient()) {
							d = null;

						} else {
							var e = a.isExploded() ? a.cy() : a.cx();
							var f = a.cz();
							d = new $.ig.Rect(0, e.__x - f, e.__y - f, f * 2, f * 2);
						}
						this.ab().e($.ig.GradientDirection.prototype.radial, d);
					}
					this.ab().g(c);
					if (c.f() != null) {
						this.ab().p();
					}
				}
			}
		}
		if (this.ac().b()) {
			var g = this.z();
			if (this.x().textStyle() != null) {
				g = this.x().textStyle();
			}
			this.ac().x(g);
			var i = this.ai().getEnumerator();
			while (i.moveNext()) {
				var h = i.current();
				if (h.__visibility == $.ig.Visibility.prototype.visible) {
					var j = h.bf();
					if (j != null) {
						j.a6(this.y());
						this.ac().i(j);
					}
					if (h.bg() != null) {
						h.bg().__stroke = h.bc().c9();
						this.ac().n(h.bg());
					}
				}
			}
		}
	}

, 
	bg: function (a, b, c) {
		var $self = this;
		var d = this.ag();
		this.bm(a);
		if (this.ag() == null && d != null) {
			var e = (function () { var $ret = new $.ig.MouseEventArgs();
$ret.position(a); return $ret;}());
			this.x().fn(this.ag(), e);
		} else if (this.ag() != null) {
			var f = (function () { var $ret = new $.ig.MouseEventArgs();
$ret.position(a); return $ret;}());
			this.x().fm(this.ag(), f);
		}
	}

, 
	bh: function (a) {
		var $self = this;
		var b = this.ag();
		this.bm(a);
		var c = (function () { var $ret = new $.ig.MouseEventArgs();
$ret.position(a); return $ret;}());
		this.x().fn(b, c);
	}

, 
	bi: function (a) {
		this.bm(a);
	}

, 
	bj: function (a) {
		var $self = this;
		this.bm(a);
		if (this.ag() != null) {
			var b = (function () { var $ret = new $.ig.MouseButtonEventArgs();
$ret.position(a); return $ret;}());
			this.x().fk(this.ag(), b);
		}
	}

, 
	_ag: null,
	ag: function (a) {
		if (arguments.length === 1) {
			this._ag = a;
			return a;
		} else {
			return this._ag;
		}
	}

, 
	bm: function (a) {
		this.ag(null);
		for (var b = 0; b < this.ah().count(); b++) {
			if (this.ah().__inner[b].__visibility == $.ig.Visibility.prototype.visible && this.ah().__inner[b].el(a)) {
				this.ag(this.ah().__inner[b]);
				break;
			}
		}
	}

, 
	bn: function () {
		this.x().fo();
	}

, 
	bo: function () {
		this.cp();
	}

, 
	bp: function (a, b) {
		var c = b;
		this.cr(c.position(), a, b);
	}

, 
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
	bs: function () {
		var a = new $.ig.Slice();
		a.c4(this.x());
		this.ah().add(a);
		return a;
	}

, 
	bt: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	bu: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	bv: function (a) {
		a.c4(null);
		this.ah().remove(a);
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
	by: function () {
		var a = new $.ig.PieLabel();
		a.bg(new $.ig.Line());
		this.ai().add(a);
		return a;
	}

, 
	bz: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	b0: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	b1: function (a) {
		this.ai().remove(a);
	}

, 
	b2: function (a) {
		if (this.x().othersCategoryStyle() != null && a.cw()) {
			a.ab(this.x().othersCategoryStyle());
		} else if (a.isSelected() && this.x().allowSliceSelection() && this.x().selectedStyle() != null) {
			a.ab(this.x().selectedStyle());

		} else {
			a.ab(null);
			var b;
			var c;
			if (this.x().brushes() != null && a.c1() >= 0 && this.x().brushes().count() > 0) {
				b = this.x().brushes().item(a.c1() % this.x().brushes().count());

			} else {
				b = null;
			}
			if (this.x().outlines() != null && a.c1() >= 0 && this.x().outlines().count() > 0) {
				c = this.x().outlines().item(a.c1() % this.x().outlines().count());

			} else {
				c = null;
			}
			a.c9(b);
			a.da(c);
		}
	}

, 
	b3: function (a) {
		if (a == null || a.c5() == null) {
		return this.x().labelMemberPath();
		}
		var b = a.c5();
		var c = b.bf();
		if ($.ig.util.cast($.ig.TextBlock.prototype.$type, c) !== null) {
			return ($.ig.util.cast($.ig.TextBlock.prototype.$type, c)).a5();
		}
		return c;
	}

, 
	b4: function (a) {
		var b = $.ig.util.cast($.ig.TextBlock.prototype.$type, a);
		if (b != null && b.a5() != null) {
			return this.ac().y(b.a5()) + $.ig.PieChartBaseView.prototype.a;
		}
		return 0;
	}

, 
	b5: function () {
		this.aj(this.ae().a0());
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
	b8: function (a) {
		return this.aj() + $.ig.PieChartBaseView.prototype.a;
	}

, 
	b9: function (a) {
		var b = a.bf();
		if ($.ig.util.cast($.ig.TextBlock.prototype.$type, b) !== null) {
			var c = this.b4(b);
			var d = this.b8(b);
			return new $.ig.Rect(0, 0, 0, c, d);
		}
		return $.ig.Rect.prototype.empty();
	}

, 
	ca: function () {
		return new $.ig.Size(this.af().width(), this.af().height());
	}

, 
	cb: function (a, b, c) {
		var d = $.ig.util.cast($.ig.TextBlock.prototype.$type, a.bf());
		if (d != null) {
			d.y(b);
			d.x(c);
		}
		this.bc();
	}

, 
	cc: function (a) {
		this.cq(a);
	}

, 
	cd: function () {
		this.bc();
	}

, 
	ce: function () {
		this.cf();
	}

, 
	cf: function () {
		var a = this.z();
		if (this.x().textStyle() != null) {
			a = this.x().textStyle();
		}
		this.ac().x(a);
	}

, 
	cg: function (a, b) {
		this.ae().ay(a, b);
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
	e: null, 
	__toolTipObject: null, 
	f: null
, 
	cp: function () {
		this.am(false);
		if (this.__toolTipObject != null) {
			var context_ = this.an();
			if (this.__toolTipObject.hideToolTip) { this.__toolTipObject.hideToolTip(context_); };
		}
	}

, 
	cq: function (a) {
		this.f = null;
		this.__toolTipObject = null;
		if ($.ig.util.cast(String, a) !== null || typeof a === "string") {
			this.f = a;

		} else {
			this.__toolTipObject = a;
			this.__toolTipObject.css("position", "absolute");
			this.__toolTipObject.css("top", "0");
			this.__toolTipObject.css("left", "0");
			this.__toolTipObject.css("z-index", "10000");
		}
	}

, 
	cr: function (a, b, c) {
		this.am(true);
		this.ak(a);
		if (b == null) {
			this.al(null);
			this.an().item(null);

		} else {
			this.al((b).dataContext());
			this.an().item((b).dataContext());
		}
		var d = this.x().getContainerOffsets();
		var pos_ = {__x: a.__x + 15 + d.c(), __y: a.__y + 15 + d.d(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var context_ = this.an();
		if (this.__toolTipObject != null) {
			if (this.e) {
				this.ae().a9(this.__toolTipObject);
				this.e = false;
			}
			context_.hideOthers = true;
			if (this.__toolTipObject.updateToolTip) { this.__toolTipObject.updateToolTip(context_); };
			if (this.__toolTipObject.offset) { this.__toolTipObject.offset({ left: pos_.__x, top: pos_.__y }); };
		}
	}

, 
	cs: function () {
		this.ar();
		this.b5();
		this.x().e7();
	}
,
	$type: new $.ig.Type('PieChartBaseView', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Slice', 'ContentControl', {

	db: function () {
		return new $.ig.SliceView(this);
	}

, 
	dc: function (a) {
		this.cr(a);
	}

, 
	_cr: null,
	cr: function (a) {
		if (arguments.length === 1) {
			this._cr = a;
			return a;
		} else {
			return this._cr;
		}
	}

, 
		init: function () {


			$.ig.ContentControl.prototype.init.call(this);
						var a = this.db();
				this.dc(a);
				a.i();
		}
, 
	cs: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.bs, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.bs);
		}
	}

, 
	ct: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.bt, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.bt);
		}
	}

, 
	cu: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.bu, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.bu);
		}
	}

, 
	cv: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.bv, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.bv);
		}
	}

, 
	isSelected: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.bw, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.bw);
		}
	}

, 
	isExploded: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.bx, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.bx);
		}
	}

, 
	cw: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.by, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.by);
		}
	}

, 
	cx: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.bz, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.bz);
		}
	}

, 
	cy: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.b0, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.b0);
		}
	}

, 
	cz: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.b1, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.b1);
		}
	}

, 
	c0: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.b2, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.b2);
		}
	}

, 
	c1: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.b3, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.b3);
		}
	}

, 
	c2: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Slice.prototype.b4, a);
			return a;
		} else {
			return this.b($.ig.Slice.prototype.b4);
		}
	}

, 
	_c3: null,
	c3: function (a) {
		if (arguments.length === 1) {
			this._c3 = a;
			return a;
		} else {
			return this._c3;
		}
	}

, 
	_c4: null,
	c4: function (a) {
		if (arguments.length === 1) {
			this._c4 = a;
			return a;
		} else {
			return this._c4;
		}
	}

, 
	_c5: null,
	c5: function (a) {
		if (arguments.length === 1) {
			this._c5 = a;
			return a;
		} else {
			return this._c5;
		}
	}

, 
	_c6: null,
	c6: function (a) {
		if (arguments.length === 1) {
			this._c6 = a;
			return a;
		} else {
			return this._c6;
		}
	}

, 
	_c7: null,
	c7: function (a) {
		if (arguments.length === 1) {
			this._c7 = a;
			return a;
		} else {
			return this._c7;
		}
	}

, 
	_c8: null,
	c8: function (a) {
		if (arguments.length === 1) {
			this._c8 = a;
			return a;
		} else {
			return this._c8;
		}
	}

, 
	a6: function () {
		$.ig.Control.prototype.a6.call(this);
		this.cr().j();
	}

, 
	ei: function () {
		var a = (this.c4() != null && this.c4().allowSliceExplosion()) ? true : false;
		if (this.isExploded() && a) {
			var b = new $.ig.Rect(0, this.cy().__x - this.cz(), this.cy().__y - this.cz(), this.cz() * 2, this.cz() * 2);
			return b;
		}
		return new $.ig.Rect(0, this.cx().__x - this.cz(), this.cx().__y - this.cz(), this.cz() * 2, this.cz() * 2);
	}

, 
	ej: function () {
		if (this.isExploded() && this.c4() != null && this.c4().allowSliceExplosion()) {
			if (this.c8()) {
				return this.c7();
			}
			return this.cy();
		}
		return this.cx();
	}

, 
	ek: function () {
		var $self = this;
		var a = this.cr().k();
		var b = this.c4().d2();
		if (isNaN(this.cs()) || isNaN(this.ct()) || isNaN(this.cz()) || isNaN(this.c0()) || this.c1() < 0 || this.c4() == null || b.width() == 0 || b.height() == 0 || (this.cx().__x == 0 && this.cx().__y == 0) || (this.cy().__x == 0 && this.cy().__y == 0)) {
			return;
		}
		this.c3(this.ei());
		var c = $.ig.GeometryUtil.prototype.d(this.c3());
		var d = this.c3().height() / 2;
		var e = this.c3().getCenter();
		var f = $.ig.Slice.prototype.en($.ig.MathUtil.prototype.j(this.cs()), c, e, d, 100);
		var g = $.ig.Slice.prototype.en($.ig.MathUtil.prototype.j(this.ct()), c, e, d, 100);
		var h = $.ig.Slice.prototype.en($.ig.MathUtil.prototype.j(this.ct()), c, e, d, this.cv());
		var i = $.ig.Slice.prototype.en($.ig.MathUtil.prototype.j(this.cs()), c, e, d, this.cu());
		var j = Math.abs($.ig.PieChartBase.prototype.e1(this.ct() - this.cs())) == 360;
		if (j) {
			var k = (function () { var $ret = new $.ig.EllipseGeometry();
$ret.f(e);
$ret.g($self.cz());
$ret.h($self.cz()); return $ret;}());
			a.bp(k);
			return;
		}
		var l = new $.ig.PathGeometry();
		a.bp(l);
		var m = (function () { var $ret = new $.ig.PathFigure();
$ret.__isClosed = true; return $ret;}());
		l.d(new $.ig.PathFigureCollection());
		l.d().add(m);
		m.__startPoint = f;
		var n = Math.abs(this.ct() - this.cs()) > 180;
		var o = new $.ig.ArcSegment();
		o.h(g);
		o.k(new $.ig.Size(this.c3().width() / 2, this.c3().height() / 2));
		o.i(n);
		if (this.ct() > this.cs()) {
			o.j($.ig.SweepDirection.prototype.clockwise);

		} else {
			o.j($.ig.SweepDirection.prototype.counterclockwise);
		}
		m.__segments = new $.ig.PathSegmentCollection();
		m.__segments.add(o);
		var p = new $.ig.LineSegment(1);
		p.d(h);
		m.__segments.add(p);
		var q = new $.ig.ArcSegment();
		q.h(i);
		q.k(o.k());
		q.i(o.i());
		q.j(o.j());
		m.__segments.add(q);
		var r = this.em(a, f, g, this.cs(), this.ct(), e, this.cz());
		if (this.c3().height() > 0 && this.c3().width() > 0 && !b.contains2(r)) {
			var s = r;
			var t = new $.ig.Rect(0, 0, 0, b.width(), b.height());
			t.intersect(s);
			var u = $.ig.GeometryUtil.prototype.a((this.cs() + this.ct()) / 2);
			var v = u / 180 * Math.PI;
			var w = Math.abs((s.height() - t.height()) / Math.sin(v));
			var x = Math.abs((s.width() - t.width()) / Math.cos(v));
			if (isNaN(w) || Number.isInfinity(w)) {
			w = 0;
			}
			if (isNaN(x) || Number.isInfinity(x)) {
			x = 0;
			}
			var y = Math.max(w, x);
			var z = $.ig.GeometryUtil.prototype.f(this.c4().d2().width(), this.c4().d2().height(), true, u, this.cz() * this.c4().d0() - y);
			this.cr().l(z.__x - this.cy().__x, z.__y - this.cy().__y);
			this.c8(true);
			this.c7(z);
			this.c6(new $.ig.Rect(0, s.x() - (z.__x - this.cy().__x), s.y() - (z.__y - this.cy().__y), s.width(), s.height()));

		} else {
			this.c8(false);
			this.cr().m();
		}
	}

, 
	el: function (a) {
		var b = this.c4().d2();
		if (this.__visibility == $.ig.Visibility.prototype.collapsed) {
			return false;
		}
		if (isNaN(this.cs()) || isNaN(this.ct()) || isNaN(this.cz()) || isNaN(this.c0()) || this.c1() < 0 || this.c4() == null || b.width() == 0 || b.height() == 0 || (this.cx().__x == 0 && this.cx().__y == 0) || (this.cy().__x == 0 && this.cy().__y == 0)) {
			return false;
		}
		var c = (this.cv() * this.cz());
		var d = this.cz();
		var e = this.cx();
		if (this.isExploded()) {
			e = this.cy();
			if (this.c8()) {
				e = this.c7();
			}
		}
		var f = c * c;
		var g = d * d;
		var h = Math.pow(a.__x - e.__x, 2) + Math.pow(a.__y - e.__y, 2);
		if (h < f || h > g) {
			return false;
		}
		var i = Math.atan2(a.__y - e.__y, a.__x - e.__x);
		i = i * 180 / Math.PI;
		i = $.ig.GeometryUtil.prototype.a(i);
		var j = $.ig.GeometryUtil.prototype.a((this.cs() + this.ct()) / 2);
		var k = Math.abs(this.ct() - this.cs()) / 2;
		if (i > (j + k) || i < (j - k)) {
			return false;
		}
		return true;
	}

, 
	em: function (a, b, c, d, e, f, g) {
		var h = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		h.add(b);
		h.add(c);
		h.add(f);
		d = $.ig.GeometryUtil.prototype.a(d);
		e = $.ig.GeometryUtil.prototype.a(e);
		if ((0 > d && 0 < e) || (360 > d && 360 < e) || (e < d)) {
			h.add($.ig.GeometryUtil.prototype.g(f, 0, g));
		}
		if (90 > d && 90 < e) {
			h.add($.ig.GeometryUtil.prototype.g(f, 90, g));
		}
		if (180 > d && 180 < e) {
			h.add($.ig.GeometryUtil.prototype.g(f, 180, g));
		}
		if (270 > d && 270 < e) {
			h.add($.ig.GeometryUtil.prototype.g(f, 270, g));
		}
		var i = Number.MAX_VALUE;
		var j = Number.MAX_VALUE;
		var k = -Number.MAX_VALUE;
		var l = -Number.MAX_VALUE;
		var n = h.getEnumerator();
		while (n.moveNext()) {
			var m = n.current();
			i = Math.min(i, m.__x);
			j = Math.min(j, m.__y);
			k = Math.max(k, m.__x);
			l = Math.max(l, m.__y);
		}
		return new $.ig.Rect(0, i, j, k - i, l - j);
	}

, 
	en: function (a, b, c, d, e) {
		var f = Math.cos(a);
		var g = Math.sin(a);
		var h = Math.sqrt(d * d / (1 - (b * Math.pow(f, 2))));
		h *= (e / 100);
		return {__x: h * f + c.__x, __y: h * g + c.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	_c9: null,
	c9: function (a) {
		if (arguments.length === 1) {
			this._c9 = a;
			return a;
		} else {
			return this._c9;
		}
	}

, 
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
	$type: new $.ig.Type('Slice', $.ig.ContentControl.prototype.$type)
}, true);

$.ig.util.defType('SliceView', 'Object', {

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
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.c(a);
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
	i: function () {
		this.d(new $.ig.Path());
		this.c().a9(this.d());
	}

, 
	j: function () {
		this.c().ek();
	}

, 
	k: function () {
		return this.d();
	}

, 
	l: function (a, b) {
		var $self = this;
		this.d().f((function () { var $ret = new $.ig.TranslateTransform();
		$ret.g(a);
		$ret.h(b); return $ret;}()));
	}

, 
	m: function () {
		this.d().f(null);
	}
,
	$type: new $.ig.Type('SliceView', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XamPieChart', 'PieChartBase', {

	d3: function () {
		return new $.ig.XamPieChartView(this);
	}

, 
	d4: function (a) {
		$.ig.PieChartBase.prototype.d4.call(this, a);
		this.gn(a);
	}

, 
	_gn: null,
	gn: function (a) {
		if (arguments.length === 1) {
			this._gn = a;
			return a;
		} else {
			return this._gn;
		}
	}

, 
		init: function () {


			$.ig.PieChartBase.prototype.init.call(this);
						this.a3($.ig.XamPieChart.prototype.$type);
		},
	$type: new $.ig.Type('XamPieChart', $.ig.PieChartBase.prototype.$type)
}, true);

$.ig.util.defType('XamPieChartView', 'PieChartBaseView', {

	_cu: null,
	cu: function (a) {
		if (arguments.length === 1) {
			this._cu = a;
			return a;
		} else {
			return this._cu;
		}
	}

, 
		init: function (a) {


			$.ig.PieChartBaseView.prototype.init.call(this, a);
						this.cu(a);
		},
	$type: new $.ig.Type('XamPieChartView', $.ig.PieChartBaseView.prototype.$type)
}, true);


























































































$.ig.OthersCategoryType.prototype.number = 0;
$.ig.OthersCategoryType.prototype.percent = 1;
$.ig.LabelsPosition.prototype.none = 0;
$.ig.LabelsPosition.prototype.center = 1;
$.ig.LabelsPosition.prototype.insideEnd = 2;
$.ig.LabelsPosition.prototype.outsideEnd = 3;
$.ig.LabelsPosition.prototype.bestFit = 4;
$.ig.Legend.prototype.cc = "Orientation";
$.ig.PieChartBase.prototype.a7 = "ContentPresenter";
$.ig.PieChartBase.prototype.a8 = "FastItemsSource";
$.ig.PieChartBase.prototype.a9 = "ValueColumn";
$.ig.PieChartBase.prototype.ba = "ItemsSource";
$.ig.PieChartBase.prototype.bb = "ValueMemberPath";
$.ig.PieChartBase.prototype.bc = "LabelMemberPath";
$.ig.PieChartBase.prototype.bd = "LabelColumn";
$.ig.PieChartBase.prototype.be = "LabelsPosition";
$.ig.PieChartBase.prototype.bf = "LeaderLineVisibility";
$.ig.PieChartBase.prototype.bg = "LeaderLineStyle";
$.ig.PieChartBase.prototype.bh = "ToolTip";
$.ig.PieChartBase.prototype.bi = "OthersCategoryThreshold";
$.ig.PieChartBase.prototype.bj = "OthersCategoryType";
$.ig.PieChartBase.prototype.bk = "OthersCategoryText";
$.ig.PieChartBase.prototype.bl = "ExplodedRadius";
$.ig.PieChartBase.prototype.bm = "RadiusFactor";
$.ig.PieChartBase.prototype.bn = "AllowSliceSelection";
$.ig.PieChartBase.prototype.bo = "AllowSliceExplosion";
$.ig.PieChartBase.prototype.bp = "Legend";
$.ig.PieChartBase.prototype.bq = "LabelExtent";
$.ig.PieChartBase.prototype.br = "StartAngle";
$.ig.PieChartBase.prototype.bs = "SweepDirection";
$.ig.PieChartBase.prototype.bt = "OthersCategoryStyle";
$.ig.PieChartBase.prototype.bu = "SelectedStyle";
$.ig.PieChartBase.prototype.bv = "ToolTipStyle";
$.ig.PieChartBase.prototype.bw = "Brushes";
$.ig.PieChartBase.prototype.bx = "Outlines";
$.ig.PieChartBase.prototype.by = "LegendItemTemplate";
$.ig.PieChartBase.prototype.bz = "LegendItemBadgeTemplate";
$.ig.PieChartBase.prototype.b0 = "LabelTemplate";
$.ig.PieChartBase.prototype.b1 = "TextStyle";
$.ig.PieChartBase.prototype.cc = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.a8, $.ig.FastItemsSource.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.a8, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.itemsSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.ba, $.ig.IEnumerable.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.ba, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bb, String, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bb, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.labelMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bc, String, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bc, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.labelsPositionProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.be, $.ig.LabelsPosition.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.LabelsPosition.prototype.center, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.be, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.leaderLineVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bf, $.ig.Visibility.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bf, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.leaderLineStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bg, $.ig.Style.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bg, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.toolTipProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bh, $.ig.Object.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bh, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.othersCategoryThresholdProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bi, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 3, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bi, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.othersCategoryTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bj, $.ig.OthersCategoryType.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.OthersCategoryType.prototype.percent, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bj, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.othersCategoryTextProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bk, String, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, "Others", function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bk, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.explodedRadiusProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bl, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 0.2, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bl, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.radiusFactorProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bm, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 0.9, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bm, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.allowSliceSelectionProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bn, $.ig.Boolean.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, true, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bn, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.allowSliceExplosionProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bo, $.ig.Boolean.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, true, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bo, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.legendProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bp, $.ig.LegendBase.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bp, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.labelExtentProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bq, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bq, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.startAngleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.br, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.br, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.sweepDirectionProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bs, $.ig.SweepDirection.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.SweepDirection.prototype.clockwise, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bs, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.othersCategoryStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bt, $.ig.Style.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bt, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.selectedStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bu, $.ig.Style.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bu, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.toolTipStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bv, $.ig.Style.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bv, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.brushesProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bw, $.ig.BrushCollection.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bw, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.outlinesProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bx, $.ig.BrushCollection.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bx, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.legendItemTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.by, $.ig.DataTemplate.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.by, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.legendItemBadgeTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bz, $.ig.DataTemplate.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.bz, b.f(), b.e());
}));
$.ig.PieChartBase.prototype.labelTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.b0, $.ig.DataTemplate.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PieChartBase.prototype.$type, a)).fj($.ig.PieChartBase.prototype.b0, b.f(), b.e());
}));
$.ig.PieChartBaseView.prototype.a = 0;
$.ig.Slice.prototype.bf = "StartAngle";
$.ig.Slice.prototype.bg = "EndAngle";
$.ig.Slice.prototype.bh = "InnerExtentStart";
$.ig.Slice.prototype.bi = "InnerExtentEnd";
$.ig.Slice.prototype.bj = "IsSelected";
$.ig.Slice.prototype.bk = "IsExploded";
$.ig.Slice.prototype.bl = "IsOtherSlice";
$.ig.Slice.prototype.bm = "Origin";
$.ig.Slice.prototype.bn = "ExplodedOrigin";
$.ig.Slice.prototype.bo = "Radius";
$.ig.Slice.prototype.bp = "ExplodedRadius";
$.ig.Slice.prototype.bq = "Index";
$.ig.Slice.prototype.br = "StrokeThickness";
$.ig.Slice.prototype.bs = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bf, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.bt = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bg, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.bu = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bh, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.bv = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bi, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.bw = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bj, $.ig.Boolean.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	var c = $.ig.util.cast($.ig.Slice.prototype.$type, a);
	var d = b.e();
	c.c4().ew(c, d);
}));
$.ig.Slice.prototype.bx = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bk, $.ig.Boolean.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	var c = $.ig.util.cast($.ig.Slice.prototype.$type, a);
	var d = b.e();
	c.c4().ev(c, d);
}));
$.ig.Slice.prototype.by = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bl, $.ig.Boolean.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.bz = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bm, $.ig.Point.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, new $.ig.Point(0), function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.b0 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bn, $.ig.Point.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, new $.ig.Point(0), function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.b1 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bo, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.b2 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bp, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.b3 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bq, $.ig.Number.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, -1, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));
$.ig.Slice.prototype.b4 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.br, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (a, b) { return ($.ig.util.cast($.ig.Slice.prototype.$type, a)).ek()}));

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['flattenTo', 'getBounds2', 'clipTo']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['asQueryable']]]);
$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);

