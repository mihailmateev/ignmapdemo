/*!
* Infragistics.Web.ClientUI infragistics.chart_polarchart.js 12.2.20122.1021
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


















$.ig.util.defType('IDictionary$2', 'Object', {

		$type: new $.ig.Type('IDictionary$2', null, [$.ig.ICollection$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable.prototype.$type])
}, true);
















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
$.ig.util.defType('SmartPosition', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('SmartPosition', $.ig.Object.prototype.$type)
}, true);








$.ig.util.defType('UnknownValuePlotting', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('UnknownValuePlotting', $.ig.Object.prototype.$type)
}, true);












































$.ig.util.defType('ArrayUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	shuffle$1: function ($t) {
		if (this != null) {
			var b = new $.ig.Random();
			for (var c = this.count() - 1; c > 0; --c) {
				var d = b.b(c);
				var e = this.item(c);
				this.item(c, this.item(d));
				this.item(d, e);
			}
		}
	}

, 
	insertionIndex$1: function ($t, b) {
		var c = -1;
		var d = 0;
		var e = this.count();
		while (c == -1) {
			if (e <= d) {
				c = d;

			} else {
				var f = $.ig.intDivide((d + e), 2);
				switch (Math.sign(b.compareTo(this.item(f)))) {
					case -1:
						e = f;
						break;
					case 0:
						c = f;
						break;
					case 1:
						d = f + 1;
						break;
				}
			}
		}
		return c;
	}

, 
	insertionIndex$11111: function ($t, b, c) {
		var d = -1;
		var e = 0;
		var f = this.count();
		while (d == -1) {
			if (f <= e) {
				d = e;

			} else {
				var g = $.ig.intDivide((e + f), 2);
				switch (Math.sign(b(c, this.item(g)))) {
					case -1:
						f = g;
						break;
					case 0:
						d = g;
						break;
					case 1:
						e = g + 1;
						break;
				}
			}
		}
		return d;
	}

, 
	binarySearch$1: function ($t, b) {
		var c = 0;
		var d = this.count() - 1;
		while (c <= d) {
			var e = (c + ((d - c) >> 1));
			var f = b(this.item(e));
			if (f < 0) {
				d = e - 1;
			} else if (f > 0) {
				c = e + 1;

			} else {
				return e;
			}
		}
		return ~c;
	}
,
	$type: new $.ig.Type('ArrayUtil', $.ig.Object.prototype.$type)
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






$.ig.util.defType('RearrangedList$1', 'Object', {
	$t: null, 
	a: null, 
	b: null
, 
		init: function ($t, a, b) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = b;
		}
, 
	indexOf: function (a) {
		var b = this.a.indexOf(a);
		if (b == -1) {
			return -1;
		}
		return this.b.indexOf(b);
	}

, 
	insert: function (a, b) {
		throw new $.ig.NotImplementedException();
	}

, 
	removeAt: function (a) {
		throw new $.ig.NotImplementedException();
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException();
			return a;
		} else {
			return this.a.item(this.b.item(b));
		}
	}

, 
	add: function (a) {
		throw new $.ig.NotImplementedException();
	}

, 
	clear: function () {
		this.b.clear();
	}

, 
	contains: function (a) {
		return this.a.contains(a);
	}

, 
	copyTo: function (a, b) {
		throw new $.ig.NotImplementedException();
	}

, 
	count: function () {
			return this.b.count();
	}

, 
	isReadOnly: function () {
			return true;
	}

, 
	remove: function (a) {
		throw new $.ig.NotImplementedException();
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
							this.$b = this.$this.b.getEnumerator();
							this.$state = 4;
							break;
						case 2:
							this.$a = this.$b.current();
							this.$current =  this.$this.a.item(this.$a);
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
	$type: new $.ig.Type('RearrangedList$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0)])
}, true);


$.ig.util.defType('ISmartPlaceable', 'Object', {

		$type: new $.ig.Type('ISmartPlaceable', null)
}, true);

$.ig.util.defType('SmartPlaceableWrapper$1', 'Object', {
	$t: null
, 
		init: function ($t) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.i(false);
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
	a: null
, 
	j: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			return a;
		} else {
			return this.a;
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
	getSmartPositions: function () {
		if (this.i()) {
			return $.ig.SmartPlaceableWrapper$1.prototype.b;

		} else {
			return $.ig.SmartPlaceableWrapper$1.prototype.c;
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
	x: function () {
		return this.m();
	}

, 
	getSmartBounds: function (a) {
		var b = this.x();
		var c = b.c();
		var d = b.d();
		var e;
			e = this.y(a, c, d);
		return new $.ig.Rect(0, this.l().__x + e.__x, this.l().__y + e.__y, c, d);
	}

, 
	opacity: function (a) {
		if (arguments.length === 1) {
			this.j().__opacity = a;
			return a;
		} else {
			return this.j().__opacity;
		}
	}

, 
	smartPosition: function (a) {
		if (arguments.length === 1) {
			this.d = a;
			var b = this.x();
			var c = b.d();
			var d = b.c();
			var e;
				e = this.y(this.d, d, c);
			this.k({__x: this.l().__x + e.__x, __y: this.l().__y + e.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			return a;
		} else {
			return this.d;
		}
	}
, 
	d: null
, 
	y: function (a, b, c) {
		var d = 0.25;
		switch (a) {
			case $.ig.SmartPosition.prototype.leftTop:
				return {__x: -b * d, __y: -c * d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			case $.ig.SmartPosition.prototype.centerTop:
				return {__x: 0, __y: -c * d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			case $.ig.SmartPosition.prototype.rightTop:
				return {__x: b * d, __y: -c * d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			case $.ig.SmartPosition.prototype.leftCenter:
				return {__x: -b * d, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			case $.ig.SmartPosition.prototype.centerCenter:
				return {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			case $.ig.SmartPosition.prototype.rightCenter:
				return {__x: b * d, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			case $.ig.SmartPosition.prototype.leftBottom:
				return {__x: -b * d, __y: c * d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			case $.ig.SmartPosition.prototype.centerBottom:
				return {__x: 0, __y: c * d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			default:
				return {__x: b * d, __y: c * d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
	}
,
	$type: new $.ig.Type('SmartPlaceableWrapper$1', $.ig.Object.prototype.$type, [$.ig.ISmartPlaceable.prototype.$type])
}, true);

$.ig.util.defType('SmartPlacer', 'Object', {

		init: function () {

			this.a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);

			$.ig.Object.prototype.init.call(this);
						this.e($.ig.Rect.prototype.empty());
				this.f(0.3);
				this.g(2);
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
	n: function (a) {
		if (a == null) {
			return;
		}
		var b = Number.MAX_VALUE;
		var c = $.ig.Rect.prototype.empty();
		var d = $.ig.SmartPosition.prototype.centerBottom;
		var e = false;
		for (var g = 0; g  < a.getSmartPositions().length; g++ ) {
			var f = a.getSmartPositions()[g];
			var h = a.getSmartBounds(f);
			if (this.e().isEmpty() || this.e().contains2(h)) {
				var i = 0;
				var k = this.a.getEnumerator();
				while (k.moveNext()) {
					var j = k.current();
					i += h.intersectionArea(j);
				}
				if (i == 0) {
					b = i;
					d = f;
					c = h;
					e = true;
					break;
				}
				if (i < b) {
					b = i;
					d = f;
					c = h;
					e = true;
				}
			}
		}
		var l = 0;
		if (e) {
			l = b / c.getArea();
		}
		if (!e || l > this.f()) {
			a.opacity(0);

		} else {
			if (b > 0) {
				a.opacity(Math.pow(1 - $.ig.MathUtil.prototype.i(0, l, 1), this.g()));

			} else {
				a.opacity(1);
			}
			a.smartPosition(d);
			this.a.add(c);
		}
	}
, 
	a: null,
	$type: new $.ig.Type('SmartPlacer', $.ig.Object.prototype.$type)
}, true);








$.ig.SmartPosition.prototype.leftTop = 0;
$.ig.SmartPosition.prototype.centerTop = 1;
$.ig.SmartPosition.prototype.rightTop = 2;
$.ig.SmartPosition.prototype.leftCenter = 3;
$.ig.SmartPosition.prototype.centerCenter = 4;
$.ig.SmartPosition.prototype.rightCenter = 5;
$.ig.SmartPosition.prototype.leftBottom = 6;
$.ig.SmartPosition.prototype.centerBottom = 7;
$.ig.SmartPosition.prototype.rightBottom = 8;
$.ig.UnknownValuePlotting.prototype.linearInterpolate = 0;
$.ig.UnknownValuePlotting.prototype.dontPlot = 1;
$.ig.SmartPlaceableWrapper$1.prototype.b = [$.ig.SmartPosition.prototype.centerCenter];
$.ig.SmartPlaceableWrapper$1.prototype.c = [$.ig.SmartPosition.prototype.centerCenter, $.ig.SmartPosition.prototype.rightCenter, $.ig.SmartPosition.prototype.rightTop, $.ig.SmartPosition.prototype.centerTop, $.ig.SmartPosition.prototype.rightBottom, $.ig.SmartPosition.prototype.centerBottom, $.ig.SmartPosition.prototype.leftTop, $.ig.SmartPosition.prototype.leftCenter, $.ig.SmartPosition.prototype.leftBottom];

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












$.ig.util.defType('CollisionAvoidanceType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('CollisionAvoidanceType', $.ig.Object.prototype.$type)
}, true);







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






$.ig.util.defType('PolarAxes', 'Object', {

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
	j: function (a, b, c, d, e) {
		var f = this.a.__x + (b * e(a));
		return $.ig.ViewportUtils.prototype.a(f, c, d);
	}

, 
	k: function (a, b, c, d, e, f, g, h, i, j) {
		var k = this.e().im(a, e, f);
		var l = this.d().iw(b, g, h, i, j);
		var m = this.a.__x;
		var n = this.a.__y;
		var o = m + (l * Math.cos(k));
		var p = n + (l * Math.sin(k));
		o = d.left() + d.width() * (o - c.left()) / c.width();
		p = d.top() + d.height() * (p - c.top()) / c.height();
		return {__x: o, __y: p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	l: function (a, b, c, d, e, f, g, h) {
		var i = Math.min(b != null ? b.count() : 0, c != null ? c.count() : 0);
		a.clear();
		var j;
		var k;
		var l = this.a.__x;
		var m = this.a.__y;
		var n;
		var o;
		var p = Math.min(this.e().actualMinimumValue(), this.e().actualMaximumValue());
		var q = Math.max(this.e().actualMinimumValue(), this.e().actualMaximumValue());
		var r = Math.min(this.d().actualMaximumValue(), this.d().actualMinimumValue());
		var s = Math.max(this.d().actualMaximumValue(), this.d().actualMinimumValue());
		var t = this.e().g1();
		var u = this.e().isInverted();
		var v = this.d().g1();
		var w = this.d().isInverted();
		var x = this.d().im();
		var y = this.d().io();
		for (var z = 0; z < i; z++) {
			if ((b.item(z) <= q && b.item(z) >= p && c.item(z) <= s && c.item(z) >= r) || (isNaN(b.item(z)) || isNaN(c.item(z)))) {
				j = this.e().im(b.item(z), t, u);
				k = this.d().iw(c.item(z), v, w, x, y);
				n = l + (k * f(z, j));
				o = m + (k * g(z, j));
				n = e.left() + e.width() * (n - d.left()) / d.width();
				o = e.top() + e.height() * (o - d.top()) / d.height();
				a.add({__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});

			} else {
				a.add({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
		}
	}

, 
	m: function (a, b, c, d, e, f) {
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
	n: function (a, b, c, d, e) {
		var f = this.a.__y + (b * e(a));
		return $.ig.ViewportUtils.prototype.c(f, c, d);
	}
,
	$type: new $.ig.Type('PolarAxes', $.ig.Object.prototype.$type)
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






$.ig.util.defType('MarkerManagerBase', 'Object', {

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
		init: function (a, b, c, d, e) {


			$.ig.Object.prototype.init.call(this);
						this.h(a);
				this.j(b);
				this.i(c);
				this.g(d);
				this.k(e);
		}
, 
	y: function (a, b, c, d, e) {
	}

, 
	z: function (a, b) {
	}

, 
	aa: function (a, b) {
		var c = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		var d = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		var f = b.getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			if (a.item(e).d().count() > 0) {
				c.add(e);

			} else {
				d.add(e);
			}
		}
		var g = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		g.w(c);
		g.w(d);
		return g;
	}

, 
	ab: function (a, b, c, d) {
		var $self = this;
		while (a > 0) {
			if (a < c.count()) {
				if (!this.l()) {
					c.shuffle$1($.ig.Number.prototype.$type);
				}
				c = this.aa(b, c);
				var e = a;
				for (var f = 0; f < e; f++) {
					var g = f;
					var h = b.item(c.__inner[g]);
					var i;
					var j = (function () { var $ret = h.h(i); i = $ret.wasPriority; return $ret.ret; }());
					d.add(j);
					a--;
					if (h.e()) {
						b.remove(c.__inner[g]);
					}
				}

			} else {
				var l = c.getEnumerator();
				while (l.moveNext()) {
					var k = l.current();
					var m = b.item(k);
					var n;
					var o = (function () { var $ret = m.h(n); n = $ret.wasPriority; return $ret.ret; }());
					d.add(o);
					a--;
					if (m.e()) {
						b.remove(k);
					}
				}
				c = new $.ig.List$1($.ig.Number.prototype.$type, 1, b.keys());
			}
		}
	}

, 
	ac: function (a, b, c, d) {
		var e = b.left();
		var f = b.right();
		var g = b.top();
		var h = b.bottom();
		if (!a.isEmpty() && !b.isEmpty()) {
			for (var i = 0; i < c.count(); ++i) {
				var j = c.item(i).__x;
				if (isNaN(j)) {
					continue;
				}
				var k = c.item(i).__y;
				if (isNaN(k)) {
					continue;
				}
				if (j < e || j > f) {
					continue;
				}
				if (k < g || k > h) {
					continue;
				}
				d.add(i);
			}
		}
	}

, 
	ad: function (a, b, c, d) {
		var $self = this;
		var e = new Array(d.count());
		var g = this.k()().getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			if (f != -1) {
				e[f] = true;
			}
		}
		var h = Math.floor(a.width() / c);
		var i = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.MarkerManagerBucket.prototype.$type, 0);
		var k = b.getEnumerator();
		while (k.moveNext()) {
			var j = k.current();
			var l = d.item(j).__x;
			var m = d.item(j).__y;
			var n = Math.floor(m / c);
			var o = Math.floor(l / c);
			var p = (n * h) + o;
			var q;
			if (!(function () { var $ret = i.tryGetValue(p, q); q = $ret.value; return $ret.ret; }())) {
				q = new $.ig.MarkerManagerBucket();
				i.add(p, q);
			}
			if (e[j]) {
				q.d().add(j);

			} else {
				q.c().add(j);
			}
		}
		return i;
	}
,
	$type: new $.ig.Type('MarkerManagerBase', $.ig.Object.prototype.$type)
}, true);





















































































































































































































$.ig.util.defType('NumericMarkerManager', 'MarkerManagerBase', {

		init: function (initNumber, a, b, c, d, e) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.NumericMarkerManager.prototype.init1.call(this, 1, a, b, c, d, e, function () {
				return $.ig.CollisionAvoidanceType.prototype.none;
			});
		}
, 
		init1: function (initNumber, a, b, c, d, e, f) {

			var $self = this;

			$.ig.MarkerManagerBase.prototype.init.call(this, a, b, c, d, e);
						this.ak(false);
				this.al(function (g) { return {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}				});
				this.am(f);
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
	y: function (a, b, c, d, e) {
		var f = this.g()();
		a.clear();
		var g = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		b = Math.max(0, b);
		var h = null;
		this.ac(c, d, f, g);
		if (b >= g.count()) {
			h = g;

		} else {
			h = new $.ig.List$1($.ig.Number.prototype.$type, 0);
			var i = Math.max(8, e);
			var j = this.ad(d, g, i, f);
			var k = new $.ig.List$1($.ig.Number.prototype.$type, 1, j.keys());
			if (this.l()) {
				k.r();
			}
			this.ab(b, j, k, h);
		}
		this.aw(a, f, h);
	}

, 
	aw: function (a, b, c) {
		for (var d = 0; d < c.count(); ++d) {
			var e = c.__inner[d];
			var f = b[e];
			var g = this.j()(e);
			var h = this.h()(g);
			if (h.a9() != null) {
				($.ig.util.cast($.ig.DataContext.prototype.$type, h.a9())).item(g);
			}
			var i = new $.ig.OwnedPoint();
			if (this.ak()) {
				i.f(this.al()(e));
			}
			i.e(g);
			i.d({__x: f.__x, __y: f.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			if (!a.containsKey(g)) {
				a.add(g, i);
			}
		}
	}

, 
	z: function (a, b) {
		var $self = this;
		var c = a.keys();
		if (this.l()) {
			var d = new $.ig.List$1($.ig.Object.prototype.$type, 1, a.keys());
			d.t(function (e, f) {
				var g = a.item(e);
				var h = a.item(f);
				var i = Math.pow(g.d().__x, 2) + Math.pow(g.d().__y, 2);
				var j = Math.pow(h.d().__x, 2) + Math.pow(h.d().__y, 2);
				return i.compareTo(j);
			});
			c = d;
		}
		var k = null;
		var l = null;
		switch (this.am()()) {
			case $.ig.CollisionAvoidanceType.prototype.none:
				break;
			case $.ig.CollisionAvoidanceType.prototype.omit:
				k = (function () { var $ret = new $.ig.SmartPlacer();
				$ret.f(0.3);
				$ret.g(0); return $ret;}());
				l = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
				l.i(true);
				break;
			case $.ig.CollisionAvoidanceType.prototype.fade:
				k = (function () { var $ret = new $.ig.SmartPlacer();
				$ret.f(0.6);
				$ret.g(2); return $ret;}());
				l = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
				l.i(true);
				break;
			case $.ig.CollisionAvoidanceType.prototype.omitAndShift:
				k = (function () { var $ret = new $.ig.SmartPlacer();
				$ret.f(0.3);
				$ret.g(0); return $ret;}());
				l = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
				break;
			case $.ig.CollisionAvoidanceType.prototype.fadeAndShift:
				k = (function () { var $ret = new $.ig.SmartPlacer();
				$ret.f(0.6);
				$ret.g(2); return $ret;}());
				l = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
				break;
		}
		var n = c.getEnumerator();
		while (n.moveNext()) {
			var m = n.current();
			var o = a.item(m);
			var p = this.h()(o.e());
			if (k != null && l != null) {
				l.j(p);
				l.m(this.an()(p));
				l.l(o.d());
				k.n(l);
				if (l.opacity() == 0) {
					l.smartPosition(l.smartPosition());
				}
				o.d(l.k());

			} else {
				p.__opacity = 1;
				p.__visibility = $.ig.Visibility.prototype.visible;
			}
			this.ax(p, o, b);
		}
		this.i()(a);
	}

, 
	ax: function (a, b, c) {
		a.y(b.d().__x);
		a.x(b.d().__y);
	}
,
	$type: new $.ig.Type('NumericMarkerManager', $.ig.MarkerManagerBase.prototype.$type)
}, true);


$.ig.util.defType('MarkerManagerBucket', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null
, 
	c: function () {
			if (this.a == null) {
				this.a = new $.ig.List$1($.ig.Number.prototype.$type, 0);
			}
			return this.a;
	}
, 
	b: null
, 
	d: function () {
			if (this.b == null) {
				this.b = new $.ig.List$1($.ig.Number.prototype.$type, 0);
			}
			return this.b;
	}

, 
	h: function (a) {
		if (this.d().count() > 0) {
			var b = this.d().__inner[this.d().count() - 1];
			this.d().removeAt(this.d().count() - 1);
			a = true;
			return {
				ret: b,
				wasPriority: a
			};
		}
		var c = this.c().__inner[this.c().count() - 1];
		this.c().removeAt(this.c().count() - 1);
		a = false;
		return {
			ret: c,
			wasPriority: a
		};
		return {
			wasPriority: a
		};
	}

, 
	e: function () {
			return this.c().count() == 0 && this.d().count() == 0;
	}
,
	$type: new $.ig.Type('MarkerManagerBucket', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PathRenderer', 'Object', {

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
		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.Object.prototype.init.call(this);
						this.d($.ig.UnknownValuePlotting.prototype.dontPlot);
		}
, 
		init1: function (initNumber, a) {


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
	i: function (a, b, c) {
		var d = $.ig.NaNSegmenter.prototype.a(b, this.d());
		var e = this.j(d, c);
		var f = new $.ig.PathGeometry();
		var h = e.getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			f.d().add(g);
		}
		a.bp(f);
	}

, 
	j: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
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
							this.$d = a.getEnumerator();
							this.$state = 7;
							break;
						case 2:
							this.$c = this.$d.current();
							this.$state = 3;
							break;
						case 3:
							if (this.$c.take$1($.ig.Point.prototype.$type, 2).count$1($.ig.Point.prototype.$type) >= 2) {
								this.$state = 4;
							}
							else {
								this.$state = 6;
							}
							break;

						case 4:
							this.$e = new $.ig.PathFigure();
							this.$f = this.$c.first$1($.ig.Point.prototype.$type);
							this.$e.__startPoint = this.$f;
							this.$g = this.$this.k(this.$c, b);
							this.$e.__segments.add(this.$g);
							this.$current =  this.$e;
							this.$state = 5
							return true;
						case 5:
							this.$state = 6;
							break;

						case 6:
							this.$state = 7;
							break;
						case 7:
							if (this.$d.moveNext()) {
								this.$state = 2;
							}
							else {
								this.$state = 8;
							}
							break;

						case 8:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1($.ig.PathFigure.prototype.$type, $iter);
	}

, 
	k: function (a, b) {
		var c = new $.ig.PolyLineSegment();
		if (this.c() == null) {
			var e = a.skip$1($.ig.Point.prototype.$type, 1).getEnumerator();
			while (e.moveNext()) {
				var d = e.current();
				c.__points.add(d);
			}

		} else {
			var g = this.c().flatten(a, b).skip$1($.ig.Point.prototype.$type, 1).getEnumerator();
			while (g.moveNext()) {
				var f = g.current();
				c.__points.add(f);
			}
		}
		return c;
	}
,
	$type: new $.ig.Type('PathRenderer', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('NaNSegmenter', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : null,
			$d : null,
			$e : null,
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
							this.$c = a.getEnumerator();
							this.$d = new $.ig.List$1($.ig.Point.prototype.$type, 0);
							this.$e = true;
							this.$state = 1;
							break;
						case 1:
							this.$state = 12;
							break;
						case 2:
							this.$state = 3;
							break;
						case 3:
							if ($.ig.NaNSegmenter.prototype.b(this.$c.current())) {
								this.$state = 4;
							}
							else {
								this.$state = 10;
							}
							break;

						case 4:
							this.$state = 5;
							break;
						case 5:
							if (!this.$e && b == $.ig.UnknownValuePlotting.prototype.dontPlot) {
								this.$state = 6;
							}
							else {
								this.$state = 8;
							}
							break;

						case 6:
							this.$e = true;
							this.$f = this.$d;
							this.$d = new $.ig.List$1($.ig.Point.prototype.$type, 0);
							this.$current =  new $.ig.ReadOnlyCollection$1($.ig.Point.prototype.$type, 1, this.$f);
							this.$state = 7
							return true;
						case 7:
							this.$state = 9;
							break;

						case 8:
							continue;
							this.$state = 9;
							break;
						case 9:
							this.$state = 11;
							break;

						case 10:
							this.$e = false;
							this.$d.add(this.$c.current());
							this.$state = 11;
							break;
						case 11:
							this.$state = 12;
							break;
						case 12:
							if (this.$c.moveNext()) {
								this.$state = 2;
							}
							else {
								this.$state = 13;
							}
							break;
						case 13:
							this.$current =  new $.ig.ReadOnlyCollection$1($.ig.Point.prototype.$type, 1, this.$d);
							this.$state = 14
							return true;
						case 14:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1($.ig.IList$1.prototype.$type.specialize($.ig.Point.prototype.$type), $iter);
	}

, 
	b: function (a) {
		return (isNaN(a.__x) || isNaN(a.__y) || Number.isInfinity(a.__x) || Number.isInfinity(a.__y));
	}

, 
	c: function (a) {
		return !$.ig.NaNSegmenter.prototype.b(a);
	}
,
	$type: new $.ig.Type('NaNSegmenter', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IFlattener', 'Object', {

		$type: new $.ig.Type('IFlattener', null)
}, true);

$.ig.util.defType('DefaultFlattener', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	b: function (a, b, c, d, e, f) {
		var g = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		var h = d;
		var i = e;
		var j = i - h + 1;
		while (j > 0) {
			if (j <= $.ig.DefaultFlattener.prototype.a) {
				$.ig.Flattener.prototype.d(g, b, c, h, i, f);
				h = i + 1;

			} else {
				var k = h + $.ig.DefaultFlattener.prototype.a - 1;
				$.ig.Flattener.prototype.d(g, b, c, h, k, f);
				h = k + 1;
			}
			j = i - h + 1;
		}
		return g;
	}

, 
	c: function (a, b, c, d, e) {
		var f = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		var g = c;
		var h = d;
		var i = h - g + 1;
		while (i > 0) {
			if (i <= $.ig.DefaultFlattener.prototype.a) {
				$.ig.Flattener.prototype.g(f, a, b, g, h, e);
				g = h + 1;

			} else {
				var j = g + $.ig.DefaultFlattener.prototype.a - 1;
				$.ig.Flattener.prototype.g(f, a, b, g, j, e);
				g = j + 1;
			}
			i = h - g + 1;
		}
		return f;
	}

, 
	flatten: function (a, b) {
		var $self = this;
		var d = function (c) { return $self.g(a, c)};
		var f = function (e) { return $self.h(a, e)};
		return this.e(a, b, d, f);
	}

, 
	d: function (a, b, c, d) {
		return this.f(a, b, c, d);
	}

, 
	e: function (a, b, c, d) {
		var e = this.b(new $.ig.List$1($.ig.Number.prototype.$type, 0), c, d, 0, a.count() - 1, b);
		var f = new $.ig.RearrangedList$1($.ig.Point.prototype.$type, a, e);
		return f;
	}

, 
	f: function (a, b, c, d) {
		var e = this.c(a, b, 0, c - 1, d);
		var f = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		for (var g = 0; g < e.count(); g++) {
			f.add({__x: a[e.__inner[g]], __y: b[e.__inner[g]], $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		return f;
	}

, 
	g: function (a, b) {
		return a.item(b).__x;
	}

, 
	h: function (a, b) {
		return a.item(b).__y;
	}
,
	$type: new $.ig.Type('DefaultFlattener', $.ig.Object.prototype.$type, [$.ig.IFlattener.prototype.$type])
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

$.ig.util.defType('PolarTrendLineManager', 'TrendLineManagerBase$1', {
	init: function () {

		$.ig.TrendLineManagerBase$1.prototype.init.call(this, $.ig.Point.prototype.$type);

	}
, 
	ar: function (a, b, c, d, e, f, g, h, i, j, k) {
		var $self = this;
		var l = j;
		var m = k;
		var n = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		if (!h.l().isEmpty() && !h.k().isEmpty()) {
			var o = null;
			var p = null;
			if (c != null) {
				o = c.toList$1(Number);
			}
			if (d != null) {
				p = d.toList$1(Number);
			}
			var q = 0;
			if (o != null) {
				q = o.count();
			}
			if (p != null) {
				q = Math.min(q, p.count());
			}
			if (b == $.ig.TrendLineType.prototype.none) {
				this.m(null);
				this.l().clear();
				return;
			}
			if (this.u(b)) {
				this.l().clear();
				this.m($.ig.TrendFitCalculator.prototype.a(n, b, h, this.m(), q, function (r) { return o.item(r)				}, function (s) { return p.item(s)				}, f, g, l, m));
			}
			if (this.v(b)) {
				this.m(null);
				$.ig.TrendAverageCalculator.prototype.c(b, this.l(), c, d, e);
				var u = this.l().getEnumerator();
				while (u.moveNext()) {
					var t = u.current();
					var v = f(t.__x);
					var w = g(t.__y);
					if (!isNaN(v) && !isNaN(w)) {
						n.add({__x: v, __y: w, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					}
				}
			}
			if (n.count() > 0) {
				this.y(n, h, a, i);
			}
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
$ret.s(function (g) { return $self.ap()(a.item(g).__x, a.item(g).__y)});
$ret.t(function (h) { return $self.aq()(a.item(h).__x, a.item(h).__y)});
$ret.o($self.al());
$ret.p($self.am());
$ret.w(b.k());
$ret.x(b.l()); return $ret;}());
		i.bf();
	}
,
	$type: new $.ig.Type('PolarTrendLineManager', $.ig.TrendLineManagerBase$1.prototype.$type.specialize($.ig.Point.prototype.$type))
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










$.ig.util.defType('PolarBase', 'MarkerSeries', {

	ed: function () {
		return new $.ig.PolarBaseView(this);
	}

, 
	ea: function (a) {
		$.ig.MarkerSeries.prototype.ea.call(this, a);
		this.jt(a);
	}

, 
	_jt: null,
	jt: function (a) {
		if (arguments.length === 1) {
			this._jt = a;
			return a;
		} else {
			return this._jt;
		}
	}
, 
	iz: null
, 
		init: function () {

			this.i4 = new $.ig.PolarFrame();
			this.i5 = new $.ig.PolarFrame();
			this.i6 = new $.ig.PolarFrame();

			$.ig.MarkerSeries.prototype.init.call(this);
						this.i5.a9(this.kd.on(this));
				this.i4.a9(this.kd.on(this));
				this.i6.a9(this.kd.on(this));
				this.jw(new $.ig.SeriesRenderer$2($.ig.PolarFrame.prototype.$type, $.ig.PolarBaseView.prototype.$type, 0, this.kg.on(this), this.kh.on(this), this.fo.on(this), this.fp.on(this)));
		}
, 
	j1: function () {
		var $self = this;
		this.i7.l(this.iz.a7(), this.jx(), this.jy(), this.i0, this.i1, function (a, b) { return Math.cos(b)		}, function (c, d) { return Math.sin(d)		});
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
	i0: null, 
	i1: null
, 
	_jw: null,
	jw: function (a) {
		if (arguments.length === 1) {
			this._jw = a;
			return a;
		} else {
			return this._jw;
		}
	}

, 
	angleMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.angleMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.angleMemberPathProperty);
		}
	}

, 
	radiusMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.radiusMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.radiusMemberPathProperty);
		}
	}

, 
	jx: function (a) {
		if (arguments.length === 1) {
			if (this.i2 != a) {
				var b = this.jx();
				this.i2 = a;
				this.ej($.ig.PolarBase.prototype.is, b, this.jx());
			}
			return a;
		} else {
			return this.i2;
		}
	}
, 
	i2: null
, 
	jy: function (a) {
		if (arguments.length === 1) {
			if (this.i3 != a) {
				var b = this.jy();
				this.i3 = a;
				this.ej($.ig.PolarBase.prototype.it, b, this.jy());
			}
			return a;
		} else {
			return this.i3;
		}
	}
, 
	i3: null
, 
	angleAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.angleAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.angleAxisProperty);
		}
	}

, 
	radiusAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.radiusAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.radiusAxisProperty);
		}
	}

, 
	useCartesianInterpolation: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.useCartesianInterpolationProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.useCartesianInterpolationProperty);
		}
	}

, 
	maximumMarkers: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.maximumMarkersProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.maximumMarkersProperty);
		}
	}

, 
	trendLineType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.trendLineTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.trendLineTypeProperty);
		}
	}

, 
	trendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.trendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.trendLineBrushProperty);
		}
	}

, 
	actualTrendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.actualTrendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.actualTrendLineBrushProperty);
		}
	}

, 
	trendLineThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.trendLineThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.trendLineThicknessProperty);
		}
	}

, 
	trendLineDashCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.trendLineDashCapProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.trendLineDashCapProperty);
		}
	}

, 
	trendLineDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.trendLineDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.trendLineDashArrayProperty);
		}
	}

, 
	trendLinePeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.trendLinePeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.trendLinePeriodProperty);
		}
	}

, 
	trendLineZIndex: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.trendLineZIndexProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.trendLineZIndexProperty);
		}
	}

, 
	clipSeriesToBounds: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarBase.prototype.clipSeriesToBoundsProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarBase.prototype.clipSeriesToBoundsProperty);
		}
	}
, 
	i4: null, 
	i5: null, 
	i6: null, 
	i7: null
, 
	fs: function () {
		$.ig.Series.prototype.fs.call(this);
		if (this.radiusAxis() != null) {
			this.radiusAxis().es(false);
		}
		if (this.angleAxis() != null) {
			this.angleAxis().es(false);
		}
	}

, 
	fc: function (a, b, c, d) {
		var e = false;
		this.jt().db().ad(a, b, c, d);
		if (this.angleAxis() != null && !this.angleAxis().updateRange()) {
			e = true;
		}
		if (this.radiusAxis() != null && !this.radiusAxis().updateRange()) {
			e = true;
		}
		if (e) {
			this.renderSeries(true);
		}
	}

, 
	ez: function (a, b) {
		this.renderSeries(false);
	}

, 
	ey: function (a, b) {
		this.renderSeries(false);
	}

, 
	es: function (a, b, c) {
		var d = true;
		if (!$.ig.Series.prototype.es.call(this, a, b, c) || !c.cc() || b.isEmpty() || a.isEmpty() || this.angleAxis() == null || this.radiusAxis() == null || this.jx() == null || this.jy() == null || this.jx().count() == 0 || this.jy().count() == 0 || this.dx() == null || this.dx().g() != this.jx().count() || this.dx().g() != this.jy().count() || this.i7 == null || this.angleAxis().seriesViewer() == null || this.radiusAxis().seriesViewer() == null || this.angleAxis().actualMinimumValue() == this.angleAxis().actualMaximumValue() || this.radiusAxis().actualMinimumValue() == this.radiusAxis().actualMaximumValue()) {
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
		this.i0 = b;
		this.i1 = c;
		this.jv(new $.ig.PolarAxisInfoCache(this.angleAxis(), this.radiusAxis(), this.dx()));
		var d = new $.ig.SeriesRenderingArguments(this, c, b, a);
		(function () { var $ret = $self.jw().v(d, $self.i4, $self.i6, $self.i5, $self.jt()); $self.i4 = $ret.previousFrame; $self.i6 = $ret.currentFrame; $self.i5 = $ret.transitionFrame; return $ret.ret; }());
	}

, 
	kd: function (a) {
		var b = this.i7.k(a.__x, a.__y, this.i0, this.i1, this.jv().l(), this.jv().n(), this.jv().m(), this.jv().o(), this.jv().q(), this.jv().r());
		return b;
	}

, 
	em: function (a) {
		if (a != null && a == this.angleAxis() && this.jx() != null) {
			return new $.ig.AxisRange(this.jx().minimum(), this.jx().maximum());
		}
		if (a != null && a == this.radiusAxis() && this.jy() != null) {
			return new $.ig.AxisRange(this.jy().minimum(), this.jy().maximum());
		}
		return null;
	}

, 
	scrollIntoView: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		var d = !b.isEmpty() && !c.isEmpty() && this.dx() != null ? this.dx().item1(a) : -1;
		if (this.angleAxis() == null || this.jx() == null || this.radiusAxis() == null || this.jy() == null) {
			return false;
		}
		if (d < 0 || d > this.jx().count() - 1 || d > this.jy().count() - 1) {
			return false;
		}
		var e = this.angleAxis().getScaledAngle1(this.jx().item(d));
		var f = this.radiusAxis().getScaledValue2(this.jy().item(d));
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
	eh: function (a) {
		return null;
	}

, 
	eg: function (a) {
		return -1;
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.MarkerSeries.prototype.e6.call(this, a, b, c, d);
		if (this.jt().db().ae(a, b, c, d, this.trendLineDashArray())) {
			this.renderSeries(false);
			this.e5();
		}
		switch (b) {
			case $.ig.PolarBase.prototype.be:
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.jx());
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.jy());
					this.jx(null);
					this.jy(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					this.jx(this.gs(this.angleMemberPath()));
					this.jy(this.gs(this.radiusMemberPath()));
				}
				if ((this.radiusAxis() != null && !this.radiusAxis().updateRange()) || (this.angleAxis() != null && !this.angleAxis().updateRange())) {
					this.renderSeries(false);
				}
				break;
			case $.ig.PolarBase.prototype.iu:
				if (this.angleAxis() != null && this.radiusAxis() != null) {
					this.i7 = new $.ig.PolarAxes(this.radiusAxis(), this.angleAxis());
				}
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				if (this.angleAxis() != null && !this.angleAxis().updateRange()) {
					this.renderSeries(false);
				} else if (c != null && d == null) {
					this.eu(true, this.view());
				}
				break;
			case $.ig.PolarBase.prototype.iv:
				if (this.angleAxis() != null && this.radiusAxis() != null) {
					this.i7 = new $.ig.PolarAxes(this.radiusAxis(), this.angleAxis());
				}
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				if (this.radiusAxis() != null && !this.radiusAxis().updateRange()) {
					this.renderSeries(false);
				} else if (c != null && d == null) {
					this.eu(true, this.view());
				}
				if (this.angleAxis() != null && !this.angleAxis().updateRange()) {
					this.angleAxis().ed();
				}
				break;
			case $.ig.PolarBase.prototype.iq:
				if (this.dx() != null) {
					this.dx().ac(this.jx());
					this.jx(this.gs(this.angleMemberPath()));
				}
				break;
			case $.ig.PolarBase.prototype.is:
				this.jt().db().ac();
				if (this.angleAxis() != null && !this.angleAxis().updateRange()) {
					this.renderSeries(false);
				}
				break;
			case $.ig.PolarBase.prototype.ir:
				if (this.dx() != null) {
					this.dx().ac(this.jy());
					this.jy(this.gs(this.radiusMemberPath()));
				}
				break;
			case $.ig.PolarBase.prototype.it:
				this.jt().db().ac();
				if (this.radiusAxis() != null && !this.radiusAxis().updateRange()) {
					this.renderSeries(false);
				}
				break;
			case $.ig.PolarBase.prototype.iw:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.PolarBase.prototype.ix:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.PolarBase.prototype.bo:
				this.jv(new $.ig.PolarAxisInfoCache(this.angleAxis(), this.radiusAxis(), this.dx()));
				this.i0 = this.view().ac();
				this.i1 = this.view().ab();
				this.i5.a8(this.useCartesianInterpolation());
				this.i5.a(this.dz(), this.i4, this.i6);
				if (this.ew(this.view())) {
					return;
				}
				if (this.dz() == 1) {
					this.kh(this.i6, this.jt());

				} else {
					this.kh(this.i5, this.jt());
				}
				break;
			case $.ig.PolarBase.prototype.b6:
				this.fj();
				break;
			case $.ig.PolarBase.prototype.iy:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.PolarBase.prototype.b4:
				this.e5();
				break;
		}
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		var c = b;
		if (a) {
			c.dc().clear();
		}
		c.db().ab();
	}

, 
	ke: function (a, b) {
		var $self = this;
		var c = a.top() - 10;
		var d = a.bottom() + 10;
		var e = a.left() - 10;
		var f = a.right() + 10;
		var g = (function () { var $ret = new $.ig.Clipper(1, e, d, f, c, false);
$ret.h(b); return $ret;}());
		return g;
	}

, 
	kf: function (a, b, c, d) {
		var $self = this;
		a.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 1, b));
		var e = this.dx();
		for (var f = 0; f < b; f++) {
			var g = a.a7().__inner[f];
			if (!Number.isInfinity(g.__x) && !Number.isInfinity(g.__y)) {
				var h = {__x: this.jx().item(f), __y: this.jy().item(f), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
				var i = {__x: g.__x, __y: g.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
				a.u().add(e.item(f), (function () { var $ret = new $.ig.OwnedPoint();
				$ret.e(e.item(f));
				$ret.f(h);
				$ret.d(i); return $ret;}()));
			}
		}
	}

, 
	kg: function (a, b) {
		var $self = this;
		var c = b.ac();
		var d = b.ab();
		a.t().clear();
		a.w().clear();
		var e = Math.min(this.jx() != null ? this.jx().count() : 0, this.jy() != null ? this.jy().count() : 0);
		if (e < 1) {
			return;
		}
		this.jv(new $.ig.PolarAxisInfoCache(this.angleAxis(), this.radiusAxis(), this.dx()));
		this.iz = a;
		this.i1 = d;
		this.i0 = c;
		b.da().y(a.t(), this.maximumMarkers(), c, d, this.resolution());
		if (e <= this.maximumMarkers()) {
			this.kf(a, e, c, d);
		}
		var f = this.ke(d, a.w());
		var g = Math.min(this.angleAxis().actualMinimumValue(), this.angleAxis().actualMaximumValue());
		var h = Math.max(this.angleAxis().actualMaximumValue(), this.angleAxis().actualMinimumValue());
		b.db().al(this.useCartesianInterpolation());
		b.db().am($.ig.UnknownValuePlotting.prototype.linearInterpolate);
		b.db().an(this.radiusAxis().im());
		b.db().ao(this.radiusAxis().io());
		b.db().ap(function (i, j) {
			return $self.i7.j(i, j, c, d, Math.cos);
		});
		b.db().aq(function (k, l) {
			return $self.i7.n(k, l, c, d, Math.sin);
		});
		b.db().ar(a.w(), this.trendLineType(), ((this.jx()).where$1(Number, function (m) { return m <= h && m >= g		})), this.jy(), this.trendLinePeriod(), this.angleAxis().getScaledAngle1.on(this.angleAxis()), this.radiusAxis().getScaledValue2.on(this.radiusAxis()), (function () { var $ret = new $.ig.TrendResolutionParams();
		$ret.m($self.resolution());
		$ret.k(d);
		$ret.l(c); return $ret;}()), f, g, h);
	}

, 
	kh: function (a, b) {
		var c = b.ac();
		var d = b.ab();
		this.jv(new $.ig.PolarAxisInfoCache(this.angleAxis(), this.radiusAxis(), this.dx()));
		b.da().z(a.t(), this.useLightweightMarkers());
		b.c1();
		var e = this.ke(d, b.db().n().bn());
		b.db().w(a.w(), e);
		this.ki(d, c, b);
	}

, 
	ki: function (a, b, c) {
		c.dn(a, b);
	}

, 
	fj: function () {
		$.ig.MarkerSeries.prototype.fj.call(this);
		if (this.index() < 0) {
			return;
		}
		this.jt().dp();
	}

, 
	er: function (a, b) {
		$.ig.Series.prototype.er.call(this, a, b);
		if (!this.dv()) {
			this.view().b4(b);
			return;
		}
		this.view().b4(b);
		if (this.ew(this.dt())) {
			return;
		}
		var c = this.dt();
		var d = new $.ig.PolarFrame();
		this.kg(d, c);
		this.kh(d, c);
		this.dv(false);
	}

, 
	kj: function (a, b) {
		var c = new $.ig.List$1($.ig.Object.prototype.$type, 0);
		var e = b.i().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			if (!a.containsKey(d)) {
				c.add1(d);
			}
		}
		var g = c.getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			b.u(f);
		}
	}

, 
	kk: function (a, b, c) {
		this.j1();
		return this.iz.a7().x();
	}

, 
	kl: function (a) {
		var b = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		var c = this.dx();
		var e = this.jt().dc().i().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			b.add(c.x(d));
		}
		return b;
	}

, 
	km: function (a) {
		return {__x: this.jx().item(a), __y: this.jy().item(a), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	gw: function (a) {
		$.ig.MarkerSeries.prototype.gw.call(this, a);
		var b = new $.ig.PolyLineVisualData(1, "trendLine", this.jt().db().n());
		b.tags().add("Trend");
		a.shapes().add(b);
	}
,
	$type: new $.ig.Type('PolarBase', $.ig.MarkerSeries.prototype.$type)
}, true);

$.ig.util.defType('PolarLineSeriesBase', 'PolarBase', {

	ed: function () {
		return new $.ig.PolarLineSeriesBaseView(this);
	}

, 
	ea: function (a) {
		$.ig.PolarBase.prototype.ea.call(this, a);
		this.kv(a);
	}

, 
	_kv: null,
	kv: function (a) {
		if (arguments.length === 1) {
			this._kv = a;
			return a;
		} else {
			return this._kv;
		}
	}

, 
		init: function () {


			$.ig.PolarBase.prototype.init.call(this);
						this.kw(new $.ig.PathRenderer(1, new $.ig.DefaultFlattener()));
				this.kx(new $.ig.PathRenderer(0));
		}
, 
	_kw: null,
	kw: function (a) {
		if (arguments.length === 1) {
			this._kw = a;
			return a;
		} else {
			return this._kw;
		}
	}

, 
	_kx: null,
	kx: function (a) {
		if (arguments.length === 1) {
			this._kx = a;
			return a;
		} else {
			return this._kx;
		}
	}

, 
	k7: function () {
		return $.ig.UnknownValuePlotting.prototype.dontPlot;
	}

, 
	ky: function () {
			return false;
	}

, 
	kz: function () {
			return false;
	}

, 
	kg: function (a, b) {
		var $self = this;
		$.ig.PolarBase.prototype.kg.call(this, a, b);
		a.v().clear();
		var c = b.ac();
		var d = b.ab();
		var e = this.jx() != null ? this.jx().count() : 0;
		var f = this.jy() != null ? this.jy().count() : 0;
		var g = Math.min(e, f);
		var l = (function () { var $ret = new $.ig.PolarLinePlanner();
$ret.q(function (h) {
	return $self.jv().j().im($self.jx().item(h), $self.jv().l(), $self.jv().n());
});
$ret.v(g);
$ret.r(function (i) {
	return $self.radiusAxis().iw($self.jy().item(i), $self.jv().m(), $self.jv().o(), $self.jv().q(), $self.jv().r());
});
$ret.u($self.resolution());
$ret.o($self.useCartesianInterpolation());
$ret.p($self.k7());
$ret.s(function (j) { return $self.la(a, j)});
$ret.t(function (k) { return $self.lb(a, k)});
$ret.w(d);
$ret.x(c);
$ret.aa($self.kz());
$ret.z($self.ky()); return $ret;}());
		var n = (($.ig.Enumerable.prototype.a(0, g)).where$1($.ig.Number.prototype.$type, function (m) { return $self.le(m)}));
		if (this.kz()) {
			var o = new $.ig.List$1($.ig.Number.prototype.$type, 1, $.ig.Enumerable.prototype.a(0, g).where$1($.ig.Number.prototype.$type, this.le.on(this)).take$1($.ig.Number.prototype.$type, 1));
			n = n.concat$1($.ig.Number.prototype.$type, o);
		}
		l.bg(a.v(), n);
	}

, 
	la: function (a, b) {
		return a.a7().__inner[b].__x;
	}

, 
	lb: function (a, b) {
		return a.a7().__inner[b].__y;
	}

, 
	lc: function () {
		return !this.ld();
	}

, 
	ld: function () {
		var a = this.seriesViewer().actualWindowRect();
		return !a.contains1({__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}

, 
	le: function (a) {
		return (this.jx().item(a) >= this.jv().j().actualMinimumValue() && this.jx().item(a) <= this.jv().j().actualMaximumValue() && this.jy().item(a) >= this.jv().k().actualMinimumValue() && this.jy().item(a) <= this.jv().k().actualMaximumValue()) || (isNaN(this.jx().item(a)) || isNaN(this.jy().item(a)));
	}

, 
	lf: function (a) {
	}

, 
	lg: function (a, b) {
	}

, 
	eu: function (a, b) {
		$.ig.PolarBase.prototype.eu.call(this, a, b);
		this.lf(b);
	}

, 
	_k0: null,
	k0: function (a) {
		if (arguments.length === 1) {
			this._k0 = a;
			return a;
		} else {
			return this._k0;
		}
	}

, 
	kh: function (a, b) {
		$.ig.PolarBase.prototype.kh.call(this, a, b);
		if (this.useCartesianInterpolation()) {
			this.k0(this.kw());

		} else {
			this.k0(this.kx());
		}
		this.k0().d(this.k7());
		this.lf(b);
		this.lg(a, b);
	}
,
	$type: new $.ig.Type('PolarLineSeriesBase', $.ig.PolarBase.prototype.$type)
}, true);

$.ig.util.defType('PolarAreaSeries', 'PolarLineSeriesBase', {

	ed: function () {
		return new $.ig.PolarAreaSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.PolarLineSeriesBase.prototype.ea.call(this, a);
		this.lp(a);
	}

, 
	_lp: null,
	lp: function (a) {
		if (arguments.length === 1) {
			this._lp = a;
			return a;
		} else {
			return this._lp;
		}
	}

, 
		init: function () {


			$.ig.PolarLineSeriesBase.prototype.init.call(this);
						this.a3($.ig.PolarAreaSeries.prototype.$type);
		}
, 
	lf: function (a) {
		var b = a;
		b.d5();
	}

, 
	lg: function (a, b) {
		if (a.v().any$1($.ig.Point.prototype.$type) && a.v().first$1($.ig.Point.prototype.$type) != a.v().last$1($.ig.Point.prototype.$type)) {
			a.v().add(a.v().first$1($.ig.Point.prototype.$type));
		}
		var c = b;
		c.d6(a.v(), this.resolution());
	}

, 
	kz: function () {
			return true;
	}

, 
	unknownValuePlotting: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarAreaSeries.prototype.unknownValuePlottingProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarAreaSeries.prototype.unknownValuePlottingProperty);
		}
	}

, 
	k7: function () {
		return this.unknownValuePlotting();
	}
,
	$type: new $.ig.Type('PolarAreaSeries', $.ig.PolarLineSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('PolarBaseView', 'MarkerSeriesView', {

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
		init: function (a) {


			$.ig.MarkerSeriesView.prototype.init.call(this, a);
						this.c9(a);
				this.dc(new $.ig.HashPool$2($.ig.Object.prototype.$type, $.ig.Marker.prototype.$type));
				this.c2(this.dc());
				this.db(new $.ig.PolarTrendLineManager());
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
	ag: function () {
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		this.da(this.dj());
		if (!this.ad()) {
			this.c9().maximumMarkers(1000);
			this.cg().markerType($.ig.MarkerType.prototype.automatic);
		}
	}

, 
	dj: function () {
		var $self = this;
		var c = new $.ig.NumericMarkerManager(0, function (a) { return $self.dc().item(a)}, function (b) { return $self.c9().jv().p().item(b)}, this.dk.on(this), this.dl.on(this), this.dm.on(this));
		c.ak(true);
		c.al(this.c9().km.on(this.c9()));
		return c;
	}

, 
	dk: function (a) {
		this.c9().kj(a, this.dc());
	}

, 
	dl: function () {
		return this.c9().kk(this.dc(), this.ac(), this.ab());
	}

, 
	dm: function () {
		return this.c9().kl(this.dc());
	}

, 
	dn: function (a, b) {
		if (this.c9().clipSeriesToBounds()) {
			var c = new $.ig.GeometryGroup();
			this.c9().radiusAxis().i9(c, a, b);

		} else {
		}
	}

, 
	dp: function () {
		if (this.c9().trendLineBrush() != null) {
			this.c9().actualTrendLineBrush(this.c9().trendLineBrush());

		} else {
			this.c9().actualTrendLineBrush(this.c9().actualBrush());
		}
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
		this.dc().w(a);
	}

, 
	a1: function (a, b) {
		$.ig.MarkerSeriesView.prototype.a1.call(this, a, b);
	}

, 
	ds: function () {
		return $.ig.Rect.prototype.empty();
	}
,
	$type: new $.ig.Type('PolarBaseView', $.ig.MarkerSeriesView.prototype.$type)
}, true);

$.ig.util.defType('PolarLineSeriesBaseView', 'PolarBaseView', {

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
		init: function (a) {


			$.ig.PolarBaseView.prototype.init.call(this, a);
						this.dw(a);
		},
	$type: new $.ig.Type('PolarLineSeriesBaseView', $.ig.PolarBaseView.prototype.$type)
}, true);

$.ig.util.defType('PolarAreaSeriesView', 'PolarLineSeriesBaseView', {

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
		init: function (a) {

			this.dz = new $.ig.Path();
			this.d0 = new $.ig.Path();

			$.ig.PolarLineSeriesBaseView.prototype.init.call(this, a);
						this.d2(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.PolarBaseView.prototype.ag.call(this);
		if (!this.ad()) {
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
, 
	dz: null, 
	d0: null
, 
	d5: function () {
		this.d0.bp(null);
		this.dz.bp(null);
		this.an();
	}

, 
	d6: function (a, b) {
		var c = new $.ig.List$1($.ig.Point.prototype.$type, 1, a);
		this.d2().k0().i(this.dz, c, b);
		this.d2().k0().i(this.d0, c, b);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dz.__stroke = this.u().actualOutline();
		this.dz.a7(this.u().thickness());
		this.dz.a8(this.u().dashArray());
		this.dz.a9(this.u().dashCap());
		this.d0.__fill = this.u().actualBrush();
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dz.__stroke = a;
		this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.d0.__fill = a;
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.ds();
				a.e($.ig.GradientDirection.prototype.radial, c);
			}
			a.g(this.d0);
			a.g(this.dz);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "polarShape", this.dz);
		b.tags().add("Main");
		var c = new $.ig.PathVisualData(1, "fillShape", this.d0);
		c.tags().add("Fill");
		a.shapes().add(b);
		a.shapes().add(c);
	}
,
	$type: new $.ig.Type('PolarAreaSeriesView', $.ig.PolarLineSeriesBaseView.prototype.$type)
}, true);

$.ig.util.defType('PolarAxisInfoCache', 'Object', {

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
		init: function (a, b, c) {


			$.ig.Object.prototype.init.call(this);
						this.j(a);
				this.k(b);
				this.l(this.j().g1());
				this.n(this.j().isInverted());
				this.m(this.k().g1());
				this.o(this.k().isInverted());
				this.q(this.k().im());
				this.r(this.k().io());
				this.p(c);
		},
	$type: new $.ig.Type('PolarAxisInfoCache', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ScatterFrameBase$1', 'Frame', {
	$t: null
, 
		init: function ($t) {

			var $self = this;

			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Frame.prototype.init.call(this);
						this.v(new $.ig.List$1($.ig.Point.prototype.$type, 0));
				this.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
				this.t(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
				this.w(new $.ig.List$1($.ig.Point.prototype.$type, 0));
				this.x(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
				this.y(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
				this.z(new $.ig.Dictionary$2($.ig.Object.prototype.$type, Number, 0));
				this.aa(new $.ig.Dictionary$2($.ig.Object.prototype.$type, Number, 0));
				this.s(function (a, b, c) { return a				});
				this.r(new $.ig.DictInterpolator$3($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, this.$t, this.ai.on(this), function (d) { return d.e()				}, function (e) { return !isNaN(e.d().__x) && !isNaN(e.d().__y)				}, function () { return new $.ig.OwnedPoint()				}));
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
	a: function (a, b, c) {
		var d = b;
		var e = c;
		if (d == null || e == null) {
			return;
		}
		this.r().q(this.u(), a, d.u(), e.u(), d, e);
		$.ig.ScatterFrameBase$1.prototype.b(this.v(), a, d.v(), e.v());
		this.r().q(this.t(), a, d.t(), e.t(), d, e);
		this.r().q(this.x(), a, d.x(), e.x(), d, e);
		this.r().q(this.y(), a, d.y(), e.y(), d, e);
		this.ae(this.t(), a, d, e);
		$.ig.ScatterFrameBase$1.prototype.b(this.w(), a, d.w(), e.w());
		this.z(e.z());
		this.aa(e.aa());
		this.ad(a, d, e);
	}

, 
	ad: function (a, b, c) {
	}

, 
	ae: function (a, b, c, d) {
		var $self = this;
		var g = c.u().values().where$1($.ig.OwnedPoint.prototype.$type, function (e) { return !a.containsKey(e.e())}).getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			var h;
			if (!(function () { var $ret = d.u().tryGetValue(f.e(), h); h = $ret.value; return $ret.ret; }()) || (h.f().__x == f.f().__x && h.f().__y == f.f().__y)) {
				continue;
			}
			var i = new $.ig.OwnedPoint();
			this.ai(i, b, f, h, c, d);
			if (isNaN(i.d().__x) || isNaN(i.d().__y)) {
				continue;
			}
			a.add(i.e(), i);
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
	ah: function (a, b, c, d) {
		if (c != null) {
			a.f({__x: c.f().__x, __y: c.f().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		} else if (d != null) {
			a.f({__x: d.f().__x, __y: d.f().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
	}

, 
	ai: function (a, b, c, d, e, f) {
		var $self = this;
		var g;
		var h;
		if (c == null) {
			if (d != null) {
				var i;
				if ((function () { var $ret = e.u().tryGetValue(d.e(), i); i = $ret.value; return $ret.ret; }())) {
					g = i;

				} else {
					g = this.s()(d, e, f);
				}

			} else {
				a.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				return;
			}

		} else {
			g = c;
			if (a.e() == null) {
				a.e(c.e());
			}
		}
		if (d == null) {
			if (c != null) {
				var j;
				if ((function () { var $ret = f.u().tryGetValue(c.e(), j); j = $ret.value; return $ret.ret; }())) {
					h = j;

				} else {
					a.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					return;
				}

			} else {
				a.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				return;
			}

		} else {
			h = d;
			if (a.e() == null) {
				a.e(d.e());
			}
		}
		this.ah(a, b, g, h);
		if (isNaN(g.d().__x) || isNaN(g.d().__y)) {
			g = h;
		}
		this.aj(a, b, g, h);
	}

, 
	aj: function (a, b, c, d) {
		var e = 1 - b;
		a.d({__x: c.d().__x * e + d.d().__x * b, __y: c.d().__y * e + d.d().__y * b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
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
	$type: new $.ig.Type('ScatterFrameBase$1', $.ig.Frame.prototype.$type)
}, true);

$.ig.util.defType('PolarFrame', 'ScatterFrameBase$1', {

		init: function () {


			$.ig.ScatterFrameBase$1.prototype.init.call(this, $.ig.PolarFrame.prototype.$type);
						this.a7(new $.ig.List$1($.ig.Point.prototype.$type, 0));
				this.a8(true);
		}
, 
	_a7: null,
	a7: function (a) {
		if (arguments.length === 1) {
			this._a7 = a;
			return a;
		} else {
			return this._a7;
		}
	}

, 
	_a8: null,
	a8: function (a) {
		if (arguments.length === 1) {
			this._a8 = a;
			return a;
		} else {
			return this._a8;
		}
	}

, 
	_a9: null,
	a9: function (a) {
		if (arguments.length === 1) {
			this._a9 = a;
			return a;
		} else {
			return this._a9;
		}
	}

, 
	ad: function (a, b, c) {
		var d = $.ig.util.cast($.ig.PolarFrame.prototype.$type, b);
		var e = $.ig.util.cast($.ig.PolarFrame.prototype.$type, c);
		if (d == null || e == null) {
			return;
		}
		$.ig.PolarFrame.prototype.b(this.a7(), a, d.a7(), e.a7());
	}

, 
	ah: function (a, b, c, d) {
		if (this.a8()) {
			$.ig.ScatterFrameBase$1.prototype.ah.call(this, a, b, c, d);

		} else {
			$.ig.ScatterFrameBase$1.prototype.ah.call(this, a, b, c, d);
			if (c != null && d != null && (c.f().__x != d.f().__x || c.f().__y != d.f().__y)) {
				var e = 1 - b;
				a.f({__x: c.f().__x * e + d.f().__x * b, __y: c.f().__y * e + d.f().__y * b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
		}
	}

, 
	bg: function (a) {
		return !isNaN(a.__x) && !isNaN(a.__y) && !Number.isInfinity(a.__x) && !Number.isInfinity(a.__y);
	}

, 
	aj: function (a, b, c, d) {
		if (this.a8()) {
			$.ig.ScatterFrameBase$1.prototype.aj.call(this, a, b, c, d);

		} else {
			if (c != null && d != null && (c.d().__x != d.d().__x || c.d().__y != d.d().__y) && this.bg(a.f())) {
				a.d(this.a9()(a.f()));

			} else {
				$.ig.ScatterFrameBase$1.prototype.aj.call(this, a, b, c, d);
			}
		}
	}
,
	$type: new $.ig.Type('PolarFrame', $.ig.ScatterFrameBase$1.prototype.$type.specialize($.ig.PolarFrame.prototype.$type))
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

$.ig.util.defType('PolarLineSeries', 'PolarLineSeriesBase', {

	ed: function () {
		return new $.ig.PolarLineSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.PolarLineSeriesBase.prototype.ea.call(this, a);
		this.lp(a);
	}

, 
	_lp: null,
	lp: function (a) {
		if (arguments.length === 1) {
			this._lp = a;
			return a;
		} else {
			return this._lp;
		}
	}

, 
		init: function () {


			$.ig.PolarLineSeriesBase.prototype.init.call(this);
						this.a3($.ig.PolarLineSeries.prototype.$type);
		}
, 
	lf: function (a) {
		var b = a;
		b.d4();
	}

, 
	lg: function (a, b) {
		var c = b;
		c.d5(a.v(), this.resolution());
	}

, 
	unknownValuePlotting: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarLineSeries.prototype.unknownValuePlottingProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarLineSeries.prototype.unknownValuePlottingProperty);
		}
	}

, 
	k7: function () {
		return this.unknownValuePlotting();
	}

, 
	e6: function (a, b, c, d) {
		$.ig.PolarBase.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.PolarLineSeries.prototype.lm:
				this.renderSeries(false);
				this.e5();
				break;
		}
	}
,
	$type: new $.ig.Type('PolarLineSeries', $.ig.PolarLineSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('PolarLineSeriesView', 'PolarLineSeriesBaseView', {

	_d1: null,
	d1: function (a) {
		if (arguments.length === 1) {
			this._d1 = a;
			return a;
		} else {
			return this._d1;
		}
	}

, 
		init: function (a) {

			this.dz = new $.ig.Path();

			$.ig.PolarLineSeriesBaseView.prototype.init.call(this, a);
						this.d1(a);
		}
, 
	ag: function () {
		$.ig.PolarBaseView.prototype.ag.call(this);
	}
, 
	dz: null
, 
	d4: function () {
		this.dz.bp(null);
		this.an();
	}

, 
	d5: function (a, b) {
		this.d1().k0().i(this.dz, a, b);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dz.__stroke = this.u().actualBrush();
		this.dz.a7(this.u().thickness());
		this.dz.a8(this.u().dashArray());
		this.dz.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dz.__stroke = a;
		this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		a.g(this.dz);
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "polarShape", this.dz);
		b.tags().add("Main");
		a.shapes().add(b);
	}
,
	$type: new $.ig.Type('PolarLineSeriesView', $.ig.PolarLineSeriesBaseView.prototype.$type)
}, true);

$.ig.util.defType('PolarScatterSeries', 'PolarBase', {

	ed: function () {
		return new $.ig.PolarScatterSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.PolarBase.prototype.ea.call(this, a);
		this.ks(a);
	}

, 
	_ks: null,
	ks: function (a) {
		if (arguments.length === 1) {
			this._ks = a;
			return a;
		} else {
			return this._ks;
		}
	}

, 
		init: function () {


			$.ig.PolarBase.prototype.init.call(this);
						this.a3($.ig.PolarScatterSeries.prototype.$type);
		},
	$type: new $.ig.Type('PolarScatterSeries', $.ig.PolarBase.prototype.$type)
}, true);

$.ig.util.defType('PolarScatterSeriesView', 'PolarBaseView', {

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
		init: function (a) {


			$.ig.PolarBaseView.prototype.init.call(this, a);
						this.dw(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.PolarBaseView.prototype.ag.call(this);
		if (!this.ad()) {
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.o);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
,
	$type: new $.ig.Type('PolarScatterSeriesView', $.ig.PolarBaseView.prototype.$type)
}, true);

$.ig.util.defType('PolarSplineAreaSeries', 'PolarLineSeriesBase', {

	ed: function () {
		return new $.ig.PolarSplineAreaSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.PolarLineSeriesBase.prototype.ea.call(this, a);
		this.lp(a);
	}

, 
	_lp: null,
	lp: function (a) {
		if (arguments.length === 1) {
			this._lp = a;
			return a;
		} else {
			return this._lp;
		}
	}

, 
		init: function () {


			$.ig.PolarLineSeriesBase.prototype.init.call(this);
						this.a3($.ig.PolarSplineAreaSeries.prototype.$type);
		}
, 
	lf: function (a) {
		var b = a;
		b.d5();
	}

, 
	lg: function (a, b) {
		this.lf(b);
		if (a.v().count() < 1) {
			return;
		}
		var c = b;
		c.d6(a.v(), this.stiffness());
	}

, 
	kz: function () {
			return true;
	}

, 
	stiffness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarSplineAreaSeries.prototype.stiffnessProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarSplineAreaSeries.prototype.stiffnessProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.PolarBase.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.PolarSplineAreaSeries.prototype.lm:
				this.renderSeries(false);
				break;
		}
	}
,
	$type: new $.ig.Type('PolarSplineAreaSeries', $.ig.PolarLineSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('PolarSplineAreaSeriesView', 'PolarLineSeriesBaseView', {

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
		init: function (a) {

			this.dz = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());
			this.d0 = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());

			$.ig.PolarLineSeriesBaseView.prototype.init.call(this, a);
						this.d2(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.PolarBaseView.prototype.ag.call(this);
		if (!this.ad()) {
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
, 
	dz: null, 
	d0: null
, 
	d5: function () {
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.d0.bp())).reset();
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.dz.bp())).reset();
		this.an();
	}

, 
	d6: function (a, b) {
		var $self = this;
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.dz.bp())).d($.ig.Numeric.prototype.g(a.count() + 1, function (c) { return c < a.count() ? a.__inner[c].__x : a.__inner[c - a.count()].__x		}, function (d) { return d < a.count() ? a.__inner[d].__y : a.__inner[d - a.count()].__y		}, b));
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.d0.bp())).d($.ig.Numeric.prototype.g(a.count() + 1, function (e) { return e < a.count() ? a.__inner[e].__x : a.__inner[e - a.count()].__x		}, function (f) { return f < a.count() ? a.__inner[f].__y : a.__inner[f - a.count()].__y		}, b));
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.d0.__fill = this.u().actualBrush();
		this.dz.__stroke = this.u().actualOutline();
		this.dz.a7(this.u().thickness());
		this.dz.a8(this.u().dashArray());
		this.dz.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.d0.__fill = a;
		this.dz.__stroke = a;
		this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.ds();
				a.e($.ig.GradientDirection.prototype.radial, c);
			}
			a.g(this.d0);
			a.g(this.dz);
		}
	}
,
	$type: new $.ig.Type('PolarSplineAreaSeriesView', $.ig.PolarLineSeriesBaseView.prototype.$type)
}, true);

$.ig.util.defType('PolarSplineSeries', 'PolarLineSeriesBase', {

	ed: function () {
		return new $.ig.PolarSplineSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.PolarLineSeriesBase.prototype.ea.call(this, a);
		this.lp(a);
	}

, 
	_lp: null,
	lp: function (a) {
		if (arguments.length === 1) {
			this._lp = a;
			return a;
		} else {
			return this._lp;
		}
	}

, 
		init: function () {


			$.ig.PolarLineSeriesBase.prototype.init.call(this);
						this.a3($.ig.PolarSplineSeries.prototype.$type);
		}
, 
	stiffness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PolarSplineSeries.prototype.stiffnessProperty, a);
			return a;
		} else {
			return this.b($.ig.PolarSplineSeries.prototype.stiffnessProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.PolarBase.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.PolarSplineSeries.prototype.lm:
				this.renderSeries(false);
				break;
		}
	}

, 
	lf: function (a) {
		var b = a;
		b.d4();
	}

, 
	lg: function (a, b) {
		this.lf(b);
		var c = b;
		c.d5(a.v(), this.stiffness());
	}
,
	$type: new $.ig.Type('PolarSplineSeries', $.ig.PolarLineSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('PolarSplineSeriesView', 'PolarLineSeriesBaseView', {

	_d1: null,
	d1: function (a) {
		if (arguments.length === 1) {
			this._d1 = a;
			return a;
		} else {
			return this._d1;
		}
	}

, 
		init: function (a) {

			this.dz = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());

			$.ig.PolarLineSeriesBaseView.prototype.init.call(this, a);
						this.d1(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.PolarBaseView.prototype.ag.call(this);
		var a = new $.ig.PathGeometry();
		a.d().add((function () { var $ret = new $.ig.PathFigure(); return $ret;}()));
		this.dz.bp(a);
	}
, 
	dz: null
, 
	d4: function () {
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.dz.bp())).reset();
		this.an();
	}

, 
	d5: function (a, b) {
		var $self = this;
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.dz.bp())).d($.ig.Numeric.prototype.g(a.count(), function (c) { return a.__inner[c].__x		}, function (d) { return a.__inner[d].__y		}, b));
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dz.__stroke = this.u().actualBrush();
		this.dz.a7(this.u().thickness());
		this.dz.a8(this.u().dashArray());
		this.dz.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dz.__stroke = a;
		this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (this.k && !b) {
			a.e($.ig.GradientDirection.prototype.radial, null);
		}
		a.g(this.dz);
	}
,
	$type: new $.ig.Type('PolarSplineSeriesView', $.ig.PolarLineSeriesBaseView.prototype.$type)
}, true);
















$.ig.util.defType('DictInterpolator$3', 'Object', {
	$tKey: null, 
	$tValue: null, 
	$tFrame: null
, 
		init: function ($tKey, $tValue, $tFrame, a, b, c, d) {


			this.$tKey = $tKey
			this.$tValue = $tValue
			this.$tFrame = $tFrame
			this.$type = this.$type.specialize(this.$tKey, this.$tValue, this.$tFrame);
			$.ig.Object.prototype.init.call(this);
						this.e(a);
				this.f(b);
				this.g(c);
				this.h(d);
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
	q: function (a, b, c, d, e, f) {
		var $self = this;
		var g = new $.ig.List$1(this.$tKey, 0);
		var i = a.keys().getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			var j;
			var k;
			var l = a.item(h);
			var m = (function () { var $ret = c.tryGetValue(h, j); j = $ret.value; return $ret.ret; }());
			var n = (function () { var $ret = d.tryGetValue(h, k); k = $ret.value; return $ret.ret; }());
			if (!m && !n) {
				g.add(h);

			} else {
				this.e()(l, b, j, k, e, f);
				if (!this.g()(l)) {
					g.add(h);
				}
			}
		}
		var p = g.getEnumerator();
		while (p.moveNext()) {
			var o = p.current();
			a.remove(o);
		}
		var r = c.keys().getEnumerator();
		while (r.moveNext()) {
			var q = r.current();
			var s = c.item(q);
			var t;
			var u;
			(function () { var $ret = d.tryGetValue(q, t); t = $ret.value; return $ret.ret; }());
			var v = (function () { var $ret = a.tryGetValue(q, u); u = $ret.value; return $ret.ret; }());
			if (!v) {
				u = this.h()();
				this.e()(u, b, s, t, e, f);
				if (!this.g()(u)) {
					continue;
				}
				a.add(this.f()(u), u);
			}
		}
		var x = d.keys().getEnumerator();
		while (x.moveNext()) {
			var w = x.current();
			var y = d.item(w);
			var z;
			var aa;
			var ab = (function () { var $ret = c.tryGetValue(w, z); z = $ret.value; return $ret.ret; }());
			var ac = (function () { var $ret = a.tryGetValue(w, aa); aa = $ret.value; return $ret.ret; }());
			if (!ac && !ab) {
				aa = this.h()();
				this.e()(aa, b, z, y, e, f);
				if (!this.g()(aa)) {
					continue;
				}
				a.add(this.f()(aa), aa);
			}
		}
	}
,
	$type: new $.ig.Type('DictInterpolator$3', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('OwnedPoint', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.f({__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
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
	$type: new $.ig.Type('OwnedPoint', $.ig.Object.prototype.$type)
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

























$.ig.CollisionAvoidanceType.prototype.none = 0;
$.ig.CollisionAvoidanceType.prototype.omit = 1;
$.ig.CollisionAvoidanceType.prototype.fade = 2;
$.ig.CollisionAvoidanceType.prototype.omitAndShift = 3;
$.ig.CollisionAvoidanceType.prototype.fadeAndShift = 4;
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
$.ig.DefaultFlattener.prototype.a = 512;
$.ig.Legend.prototype.cc = "Orientation";
$.ig.PolarBase.prototype.iq = "AngleMemberPath";
$.ig.PolarBase.prototype.ir = "RadiusMemberPath";
$.ig.PolarBase.prototype.is = "AngleColumn";
$.ig.PolarBase.prototype.it = "RadiusColumn";
$.ig.PolarBase.prototype.iu = "AngleAxis";
$.ig.PolarBase.prototype.iv = "RadiusAxis";
$.ig.PolarBase.prototype.iw = "UseCartesianInterpolation";
$.ig.PolarBase.prototype.ix = "MaximumMarkers";
$.ig.PolarBase.prototype.iy = "ClipSeriesToBounds";
$.ig.PolarBase.prototype.angleMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iq, String, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.iq, b.f(), b.e());
}));
$.ig.PolarBase.prototype.radiusMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.ir, String, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.ir, b.f(), b.e());
}));
$.ig.PolarBase.prototype.angleAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iu, $.ig.NumericAngleAxis.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.iu, b.f(), b.e());
}));
$.ig.PolarBase.prototype.radiusAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iv, $.ig.NumericRadiusAxis.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.iv, b.f(), b.e());
}));
$.ig.PolarBase.prototype.useCartesianInterpolationProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iw, $.ig.Boolean.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, true, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.iw, b.f(), b.e());
}));
$.ig.PolarBase.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.ix, $.ig.Number.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.ix, b.f(), b.e());
}));
$.ig.PolarBase.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.b4, b.f(), b.e());
}));
$.ig.PolarBase.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b6, $.ig.Brush.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.b6, b.f(), b.e());
}));
$.ig.PolarBase.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b7, $.ig.Brush.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.b7, b.f(), b.e());
}));
$.ig.PolarBase.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b8, Number, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.b8, b.f(), b.e());
}));
$.ig.PolarBase.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.b9, b.f(), b.e());
}));
$.ig.PolarBase.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.b3, b.f(), b.e());
}));
$.ig.PolarBase.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b5, $.ig.Number.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.b5, b.f(), b.e());
}));
$.ig.PolarBase.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.ca, $.ig.Number.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.ca, b.f(), b.e());
}));
$.ig.PolarBase.prototype.clipSeriesToBoundsProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iy, $.ig.Boolean.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.PolarBase.prototype.$type, a)).ej($.ig.PolarBase.prototype.iy, b.f(), b.e());
}));
$.ig.PolarAreaSeries.prototype.lm = "UnknownValuePlotting";
$.ig.PolarAreaSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarAreaSeries.prototype.lm, $.ig.UnknownValuePlotting.prototype.$type, $.ig.PolarAreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (a, b) {
	($.ig.util.cast($.ig.PolarAreaSeries.prototype.$type, a)).ej($.ig.PolarAreaSeries.prototype.lm, b.f(), b.e());
}));
$.ig.PolarLineSeries.prototype.lm = "UnknownValuePlotting";
$.ig.PolarLineSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarLineSeries.prototype.lm, $.ig.UnknownValuePlotting.prototype.$type, $.ig.PolarLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (a, b) {
	($.ig.util.cast($.ig.PolarLineSeries.prototype.$type, a)).ej($.ig.PolarLineSeries.prototype.lm, b.f(), b.e());
}));
$.ig.PolarSplineAreaSeries.prototype.lm = "Stiffness";
$.ig.PolarSplineAreaSeries.prototype.stiffnessProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarSplineAreaSeries.prototype.lm, Number, $.ig.PolarSplineAreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0.5, function (a, b) {
	($.ig.util.cast($.ig.PolarSplineAreaSeries.prototype.$type, a)).ej($.ig.PolarSplineAreaSeries.prototype.lm, b.f(), b.e());
}));
$.ig.PolarSplineSeries.prototype.lm = "Stiffness";
$.ig.PolarSplineSeries.prototype.stiffnessProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarSplineSeries.prototype.lm, Number, $.ig.PolarSplineSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0.5, function (a, b) {
	($.ig.util.cast($.ig.PolarSplineSeries.prototype.$type, a)).ej($.ig.PolarSplineSeries.prototype.lm, b.f(), b.e());
}));

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['flattenTo', 'getBounds2', 'clipTo']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['asQueryable']]]);
$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);

