/*!
* Infragistics.Web.ClientUI infragistics.chart_scatterchart.js 12.2.20122.1021
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






$.ig.util.defType('ErrorBarCalculatorType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('ErrorBarCalculatorType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ErrorBarCalculatorReference', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('ErrorBarCalculatorReference', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('UnknownValuePlotting', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('UnknownValuePlotting', $.ig.Object.prototype.$type)
}, true);






$.ig.util.defType('IErrorBarCalculator', 'Object', {

		$type: new $.ig.Type('IErrorBarCalculator', null)
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
$.ig.ErrorBarCalculatorType.prototype.fixed = 0;
$.ig.ErrorBarCalculatorType.prototype.percentage = 1;
$.ig.ErrorBarCalculatorType.prototype.data = 2;
$.ig.ErrorBarCalculatorType.prototype.standardDeviation = 3;
$.ig.ErrorBarCalculatorType.prototype.standardError = 4;
$.ig.ErrorBarCalculatorReference.prototype.x = 0;
$.ig.ErrorBarCalculatorReference.prototype.y = 1;
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
$.ig.util.defType('EnableErrorBars', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('EnableErrorBars', $.ig.Object.prototype.$type)
}, true);












$.ig.util.defType('CollisionAvoidanceType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('CollisionAvoidanceType', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('BrushSelectionMode', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('BrushSelectionMode', $.ig.Object.prototype.$type)
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

$.ig.util.defType('BubbleMarkerManager', 'MarkerManagerBase', {

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
		init: function (a, b, c, d, e) {


			$.ig.MarkerManagerBase.prototype.init.call(this, a, b, c, d, e);
						this.ai(new $.ig.List$1(Number, 0));
				this.aj(new $.ig.List$1($.ig.Marker.prototype.$type, 0));
		}
, 
	y: function (a, b, c, d, e) {
		var f = this.g()();
		a.clear();
		this.ai().clear();
		this.aj().clear();
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
		for (var l = 0; l < h.count(); ++l) {
			var m = f[h.__inner[l]].__x;
			var n = f[h.__inner[l]].__y;
			var o = this.ah().item(h.__inner[l]);
			this.ai().add(o);
			var p = this.h()(this.j()(h.__inner[l]));
			($.ig.util.cast($.ig.DataContext.prototype.$type, p.a9())).item(this.j()(h.__inner[l]));
			var q = new $.ig.OwnedPoint();
			q.e(($.ig.util.cast($.ig.DataContext.prototype.$type, p.a9())).item());
			q.d({__x: m, __y: n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			if (!a.containsKey(q.e())) {
				a.add(q.e(), q);
				this.aj().add(p);
			}
		}
	}

, 
	z: function (a, b) {
		var $self = this;
		var c = new $.ig.List$1($.ig.Object.prototype.$type, 1, a.keys());
		if (this.l()) {
			c.t(function (d, e) {
				var f = a.item(d);
				var g = a.item(e);
				var h = Math.pow(f.d().__x, 2) + Math.pow(f.d().__y, 2);
				var i = Math.pow(g.d().__x, 2) + Math.pow(g.d().__y, 2);
				return h.compareTo(i);
			});
		}
		var k = c.getEnumerator();
		while (k.moveNext()) {
			var j = k.current();
			var l = a.item(j);
			var m = this.h()(l.e());
			m.z(c.indexOf1(j));
			m.y(l.d().__x);
			m.x(l.d().__y);
		}
		this.i()(a);
	}
,
	$type: new $.ig.Type('BubbleMarkerManager', $.ig.MarkerManagerBase.prototype.$type)
}, true);





$.ig.util.defType('ScatterBase', 'MarkerSeries', {

	ed: function () {
		return new $.ig.ScatterBaseView(this);
	}

, 
	ea: function (a) {
		$.ig.MarkerSeries.prototype.ea.call(this, a);
		this.jn(a);
	}

, 
	_jn: null,
	jn: function (a) {
		if (arguments.length === 1) {
			this._jn = a;
			return a;
		} else {
			return this._jn;
		}
	}

, 
		init: function () {


			$.ig.MarkerSeries.prototype.init.call(this);
						this.i2 = $.ig.Rect.prototype.empty();
				this.i1 = $.ig.Rect.prototype.empty();
		}
, 
	_jo: null,
	jo: function (a) {
		if (arguments.length === 1) {
			this._jo = a;
			return a;
		} else {
			return this._jo;
		}
	}

, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.xAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.xAxisProperty);
		}
	}

, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.yAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.yAxisProperty);
		}
	}

, 
	xMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.xMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.xMemberPathProperty);
		}
	}

, 
	jp: function (a) {
		if (arguments.length === 1) {
			if (this.iz != a) {
				var b = this.jp();
				this.iz = a;
				this.ej($.ig.ScatterBase.prototype.it, b, this.jp());
			}
			return a;
		} else {
			return this.iz;
		}
	}
, 
	iz: null
, 
	yMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.yMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.yMemberPathProperty);
		}
	}

, 
	jq: function (a) {
		if (arguments.length === 1) {
			if (this.i0 != a) {
				var b = this.jq();
				this.i0 = a;
				this.ej($.ig.ScatterBase.prototype.iv, b, this.jq());
			}
			return a;
		} else {
			return this.i0;
		}
	}
, 
	i0: null
, 
	trendLineType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.trendLineTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.trendLineTypeProperty);
		}
	}

, 
	trendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.trendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.trendLineBrushProperty);
		}
	}

, 
	actualTrendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.actualTrendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.actualTrendLineBrushProperty);
		}
	}

, 
	trendLineThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.trendLineThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.trendLineThicknessProperty);
		}
	}

, 
	trendLineDashCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.trendLineDashCapProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.trendLineDashCapProperty);
		}
	}

, 
	trendLineDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.trendLineDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.trendLineDashArrayProperty);
		}
	}

, 
	trendLinePeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.trendLinePeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.trendLinePeriodProperty);
		}
	}

, 
	markerCollisionAvoidance: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty);
		}
	}



, 
	trendLineZIndex: function (e) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.trendLineZIndexProperty, e);
			return e;
		} else {
			return this.b($.ig.ScatterBase.prototype.trendLineZIndexProperty);
		}
	}

, 
	maximumMarkers: function (f) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.maximumMarkersProperty, f);
			return f;
		} else {
			return this.b($.ig.ScatterBase.prototype.maximumMarkersProperty);
		}
	}

, 
	fs: function () {
		$.ig.Series.prototype.fs.call(this);
		if (this.xAxis() != null) {
			this.xAxis().es(false);
		}
		if (this.yAxis() != null) {
			this.yAxis().es(false);
		}
	}

, 
	errorBarSettings: function (i) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterBase.prototype.errorBarSettingsProperty, i);
			return i;
		} else {
			return this.b($.ig.ScatterBase.prototype.errorBarSettingsProperty);
		}
	}

, 
	e6: function (l, m, n, o) {
		var $self = this;
		$.ig.MarkerSeries.prototype.e6.call(this, l, m, n, o);
		if (this.jn().dk().ae(l, m, n, o, this.trendLineDashArray())) {
			this.renderSeries(false);
			this.e5();
		}
		switch (m) {
			case $.ig.ScatterBase.prototype.be:
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).ac(this.jp());
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).ac(this.jq());
					this.jp(null);
					this.jq(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, o) != null) {
					this.jp(this.gs(this.xMemberPath()));
					this.jq(this.gs(this.yMemberPath()));
				}
				if ((this.yAxis() != null && !this.yAxis().updateRange()) || (this.xAxis() != null && !this.xAxis().updateRange())) {
					this.renderSeries(false);
				}
				break;
			case $.ig.ScatterBase.prototype.iq:
				if (n != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, n)).deregisterSeries(this);
				}
				if (o != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, o)).registerSeries(this);
				}
				if ((this.xAxis() != null && !this.xAxis().updateRange()) || (o == null && n != null)) {
					this.renderSeries(false);
				}
				this.e5();
				break;
			case $.ig.ScatterBase.prototype.ir:
				if (n != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, n)).deregisterSeries(this);
				}
				if (o != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, o)).registerSeries(this);
				}
				if ((this.yAxis() != null && !this.yAxis().updateRange()) || (o == null && n != null)) {
					this.renderSeries(false);
				}
				this.e5();
				break;
			case $.ig.ScatterBase.prototype.is:
				if (this.dx() != null) {
					this.dx().ac(this.jp());
					this.jp(this.gs(this.xMemberPath()));
				}
				break;
			case $.ig.ScatterBase.prototype.it:
				this.jn().dk().ac();
				if (this.xAxis() != null && !this.xAxis().updateRange()) {
					this.renderSeries(false);
				}
				break;
			case $.ig.ScatterBase.prototype.iu:
				if (this.dx() != null) {
					this.dx().ac(this.jq());
					this.jq(this.gs(this.yMemberPath()));
				}
				break;
			case $.ig.ScatterBase.prototype.iv:
				this.jn().dk().ac();
				if (this.yAxis() != null && !this.yAxis().updateRange()) {
					this.renderSeries(false);
				}
				break;
			case $.ig.ScatterBase.prototype.iw:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.ScatterBase.prototype.ix:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.ScatterBase.prototype.bo:
				this.i4.a(this.dz(), this.i3, this.i5);
				this.j1();
				try {
						if (this.ew(this.view())) {
							return;
						}
						if ((Math.round(this.dz() * 100000) / 100000) == 1) {
							this.j7(this.i5, this.jn());

						} else {
							this.j7(this.i4, this.jn());
						}

				}
				finally {
						this.j0();

				}				break;
			case $.ig.ScatterBase.prototype.b6:
				this.fj();
				break;
			case $.ig.ScatterBase.prototype.iy:
				if (this.errorBarSettings() != null) {
					this.errorBarSettings().bl(this);
				}
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.ScatterBase.prototype.b4:
				this.e5();
				break;
		}
	}

, 
	j0: function () {
		this.i1 = $.ig.Rect.prototype.empty();
		this.i2 = $.ig.Rect.prototype.empty();
	}
, 
	i1: null, 
	i2: null
, 
	j1: function () {
		var $self = this;
		(function () { var $ret = $self.getViewInfo($self.i1, $self.i2); $self.i1 = $ret.viewportRect; $self.i2 = $ret.windowRect; return $ret.ret; }());
	}

, 
	j2: function (p, q) {
		if (q != $.ig.FastItemsSourceEventAction.prototype.change) {
			return true;
		}
		if (p == null) {
			return true;
		}
		if (this.xMemberPath() == p || this.yMemberPath() == p) {
			return true;
		}
		return false;
	}

, 
	fc: function (r, s, t, u) {
		var v = false;
		if (!this.j2(u, r)) {
			return;
		}
		this.jn().dk().ad(r, s, t, u);
		if (this.xAxis() != null && !this.xAxis().updateRange()) {
			v = true;
		}
		if (this.yAxis() != null && !this.yAxis().updateRange()) {
			v = true;
		}
		if (v) {
			this.renderSeries(true);
		}
	}

, 
	j3: function (w) {
		this.j4(w, null);
	}

, 
	j4: function (x, y) {
		var $self = this;
		var z = this.jp() != null ? this.jp().count() : 0;
		var aa = this.jq() != null ? this.jq().count() : 0;
		var ab = Math.min(z, aa);
		if (ab <= this.maximumMarkers()) {
			x.v().clear();
			var ac = new $.ig.List$1($.ig.OwnedPoint.prototype.$type, 0);
			var ae = x.a5().values().getEnumerator();
			while (ae.moveNext()) {
				var ad = ae.current();
				ac.add(ad);
			}
			var af = this.dx();
			ac.t(function (ag, ah) {
				var ai = af.x(ag.e());
				var aj = af.x(ah.e());
				if (ai < aj) {
					return -1;
				}
				if (ai > aj) {
					return 1;
				}
				return 0;
			});
			if (y != null) {
				y.h(x.v());
			}
			var al = ac.getEnumerator();
			while (al.moveNext()) {
				var ak = al.current();
				if (af.x(ak.e()) >= 0) {
					if (y != null) {
						y.l(ak.d());

					} else {
						x.v().add({__x: ak.d().__x, __y: ak.d().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					}
				}
			}
		}
	}

, 
	em: function (am) {
		if (am != null && am == this.xAxis() && this.jp() != null) {
			return new $.ig.AxisRange(this.jp().minimum(), this.jp().maximum());
		}
		if (am != null && am == this.yAxis() && this.jq() != null) {
			return new $.ig.AxisRange(this.jq().minimum(), this.jq().maximum());
		}
		return null;
	}

, 
	eh: function (an) {
		return null;
	}

, 
	eg: function (ao) {
		return -1;
	}

, 
	scrollIntoView: function (ap) {
		var aq = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var ar = this.seriesViewer() != null ? this.seriesViewer().viewportRect() : $.ig.Rect.prototype.empty();
		var as = new $.ig.Rect(0, 0, 0, 1, 1);
		var at = new $.ig.ScalerParams(as, as, this.xAxis().isInverted());
		var au = new $.ig.ScalerParams(as, as, this.yAxis().isInverted());
		var av = !aq.isEmpty() && !ar.isEmpty() && this.dx() != null ? this.dx().x(ap) : -1;
		var aw = this.xAxis() != null && this.jp() != null && av < this.jp().count() ? this.xAxis().getScaledValue(this.jp().item(av), at) : NaN;
		var ax = this.yAxis() != null && this.jq() != null && av < this.jq().count() ? this.yAxis().getScaledValue(this.jq().item(av), au) : NaN;
		if (!isNaN(aw)) {
			if (aw < aq.left() + 0.1 * aq.width()) {
				aw = aw + 0.4 * aq.width();
				aq.x(aw - 0.5 * aq.width());
			}
			if (aw > aq.right() - 0.1 * aq.width()) {
				aw = aw - 0.4 * aq.width();
				aq.x(aw - 0.5 * aq.width());
			}
		}
		if (!isNaN(ax)) {
			if (ax < aq.top() + 0.1 * aq.height()) {
				ax = ax + 0.4 * aq.height();
				aq.y(ax - 0.5 * aq.height());
			}
			if (ax > aq.bottom() - 0.1 * aq.height()) {
				ax = ax - 0.4 * aq.height();
				aq.y(ax - 0.5 * aq.height());
			}
		}
		if (this.syncLink() != null) {
			this.syncLink().bp(this.seriesViewer(), aq);
		}
		return av >= 0;
	}

, 
	ez: function (ay, az) {
		this.renderSeries(false);
	}

, 
	ey: function (a0, a1) {
		this.renderSeries(false);
	}
, 
	i3: null, 
	i4: null, 
	i5: null
, 
	j5: function (a2, a3, a4, a5) {
		var $self = this;
		a2.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 1, a3));
		var a6 = this.dx();
		var a7;
		var a8;
		var a9 = (function () { var $ret = new $.ig.ScalerParams(a4, a5, $self.jo().h());
$ret.c = $self.seriesViewer().effectiveViewport(); return $ret;}());
		var ba = (function () { var $ret = new $.ig.ScalerParams(a4, a5, $self.jo().i());
$ret.c = $self.seriesViewer().effectiveViewport(); return $ret;}());
		for (var bb = 0; bb < a3; bb++) {
			a7 = this.jp().item(bb);
			a8 = this.jq().item(bb);
			var bc = {__x: this.jo().f().getScaledValue(a7, a9), __y: this.jo().g().getScaledValue(a8, ba), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			if (!Number.isInfinity(bc.__x) && !Number.isInfinity(bc.__y)) {
				var bd = a6.item(bb);
				if (!a2.u().containsKey(bd)) {
					var be = {__x: a7, __y: a8, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
					var bf = {__x: bc.__x, __y: bc.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
					a2.u().add(bd, (function () { var $ret = new $.ig.OwnedPoint();
					$ret.e(bd);
					$ret.f(be);
					$ret.d(bf); return $ret;}()));
				}
			}
		}
	}

, 
	j6: function (bg, bh) {
		var $self = this;
		bg.t().clear();
		bg.w().clear();
		bg.x().clear();
		bg.y().clear();
		bg.z().clear();
		bg.aa().clear();
		var bi = Math.min(this.jp() != null ? this.jp().count() : 0, this.jq() != null ? this.jq().count() : 0);
		var bj = bh.ac();
		var bk = bh.ab();
		var bl = new $.ig.ScalerParams(bj, bk, this.xAxis().isInverted());
		bl.c = this.seriesViewer().effectiveViewport();
		var bm = new $.ig.ScalerParams(bj, bk, this.yAxis().isInverted());
		bm.c = this.seriesViewer().effectiveViewport();
		if (bi < 1) {
			return;
		}
		this.jo((function () { var $ret = new $.ig.ScatterAxisInfoCache();
		$ret.f($self.xAxis());
		$ret.g($self.yAxis());
		$ret.h($self.xAxis().isInverted());
		$ret.i($self.yAxis().isInverted());
		$ret.j($self.dx()); return $ret;}()));
		if (bi <= this.maximumMarkers()) {
			this.j5(bg, bi, bj, bk);
		}
		if (this.ie()) {
			bh.de().y(bg.t(), this.maximumMarkers(), bj, bk, this.resolution());
		}
		var bn = (function () { var $ret = new $.ig.Clipper(0, bk, false);
$ret.h(bg.w()); return $ret;}());
		var bo = this.xAxis().getUnscaledValue(bk.left(), bl);
		var bp = this.xAxis().getUnscaledValue(bk.right(), bl);
		bh.dk().af(bg.w(), this.trendLineType(), this.jp(), this.jq(), this.trendLinePeriod(), function (bq) { return $self.xAxis().getScaledValue(bq, bl)		}, function (br) { return $self.yAxis().getScaledValue(br, bm)		}, (function () { var $ret = new $.ig.TrendResolutionParams();
		$ret.m($self.resolution());
		$ret.k(bk);
		$ret.l(bj); return $ret;}()), bn, bo, bp);
		this.j8(bg, bh);
	}

, 
	eu: function (bs, bt) {
		$.ig.Series.prototype.eu.call(this, bs, bt);
		var bu = bt;
		bu.ee(bs);
	}

, 
	j7: function (bv, bw) {
		var $self = this;
		var bx = bw.ab();
		this.jo((function () { var $ret = new $.ig.ScatterAxisInfoCache();
		$ret.f($self.xAxis());
		$ret.g($self.yAxis());
		$ret.h($self.xAxis().isInverted());
		$ret.i($self.yAxis().isInverted()); return $ret;}()));
		if (this.ie()) {
			bw.de().z(bv.t(), this.useLightweightMarkers());
		}
		bw.c1();
		var by = (function () { var $ret = new $.ig.Clipper(1, NaN, bx.bottom(), NaN, bx.top(), false);
$ret.h(bw.dk().n().bn()); return $ret;}());
		bw.dk().w(bv.w(), by);
		this.j9(bv, bw);
	}

, 
	j8: function (bz, b0) {
		var $self = this;
		var b1 = new $.ig.ErrorBarsHelper(this, b0);
		if (this.errorBarSettings() == null) {
			return;
		}
		var b2 = this.errorBarSettings().a9();
		var b3 = this.errorBarSettings().bg();
		var b4 = 0;
		var b5 = 0;
		var b6 = 0;
		var b7 = 0;
		if (b2 != null && b1.i(b2)) {
			(function () { var $ret = b1.j(b2, b4); b4 = $ret.position; return $ret.ret; }());
			(function () { var $ret = b1.k(b2, $self.jo().f(), b6); b6 = $ret.errorBarSize; return $ret.ret; }());
		}
		if (b3 != null && b1.i(b3)) {
			(function () { var $ret = b1.j(b3, b5); b5 = $ret.position; return $ret.ret; }());
			(function () { var $ret = b1.k(b3, $self.jo().g(), b7); b7 = $ret.errorBarSize; return $ret.ret; }());
		}
		var b9 = bz.t().keys().getEnumerator();
		while (b9.moveNext()) {
			var b8 = b9.current();
			var ca = bz.t().item(b8);
			if (b2 != null) {
				if (b2.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.percentage) {
					var cb;
					var cc					,cd;
					cd = this.jo().f();
					if (this.errorBarSettings().a8() == $.ig.ErrorBarCalculatorReference.prototype.x) {
						cb = ca.d().__x;
						cc = this.jo().f();

					} else {
						cb = ca.d().__y;
						cc = this.jo().g();
					}
					(function () { var $ret = b1.m(cb, b2, cc, cd, b6); b6 = $ret.errorBarSize; return $ret.ret; }());
				} else if (b2.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.data) {
					var ce = b2.getItemColumn();
					var cf = this.dx().x(b8);
					if (ce != null && cf < ce.count()) {
						var cg = ce.item(this.dx().x(b8));
						(function () { var $ret = b1.n(cg, $self.jo().f(), b6); b6 = $ret.errorBarSize; return $ret.ret; }());

					} else {
						b6 = NaN;
					}
				}
				var ch = new $.ig.OwnedPoint();
				var ci = b1.q(b2, this.jo().f(), ca.d(), b4);
				ch.d(ci);
				ch.e(ca.e());
				bz.x().add(b8, ch);
				bz.z().add(b8, b6);
			}
			if (b3 != null) {
				if (b3.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.percentage) {
					var cj;
					var ck					,cl;
					cl = this.jo().g();
					if (this.errorBarSettings().bf() == $.ig.ErrorBarCalculatorReference.prototype.x) {
						cj = ca.d().__x;
						ck = this.jo().f();

					} else {
						cj = ca.d().__y;
						ck = this.jo().g();
					}
					(function () { var $ret = b1.m(cj, b3, ck, cl, b7); b7 = $ret.errorBarSize; return $ret.ret; }());
				} else if (b3.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.data) {
					var cm = b3.getItemColumn();
					var cn = this.dx().x(b8);
					if (cm != null && cn < cm.count()) {
						var co = cm.item(this.dx().x(b8));
						(function () { var $ret = b1.n(co, $self.jo().g(), b7); b7 = $ret.errorBarSize; return $ret.ret; }());

					} else {
						b7 = NaN;
					}
				}
				var cp = new $.ig.OwnedPoint();
				var cq = b1.r(b3, this.jo().g(), ca.d(), b5);
				cp.d(cq);
				cp.e(ca.e());
				bz.y().add(b8, cp);
				bz.aa().add(b8, b7);
			}
		}
	}

, 
	j9: function (cr, cs) {
		if (!cs.cc() || this.errorBarSettings() == null) {
			cs.ed();
			return;
		}
		this.ka(cr, cs);
		this.kb(cr, cs);
	}

, 
	ka: function (ct, cu) {
		cu.d6();
		var cv = new $.ig.ErrorBarsHelper(this, cu);
		var cw = new $.ig.PathGeometry();
		var cx = this.errorBarSettings().a9();
		var cz = ct.t().keys().getEnumerator();
		while (cz.moveNext()) {
			var cy = cz.current();
			if (cx != null && ct.z().containsKey(cy)) {
				var c0 = ct.z().item(cy);
				if (!isNaN(c0)) {
					var c1 = ct.x().item(cy).d();
					if (this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.positive) {
						cv.p(cw, c1, c0, true);
					}
					if (this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.negative) {
						cv.p(cw, c1, c0, false);
					}
				}
			}
		}
		cu.d7(cw);
	}

, 
	kb: function (c2, c3) {
		c3.d8();
		var c4 = new $.ig.ErrorBarsHelper(this, c3);
		var c5 = new $.ig.PathGeometry();
		var c6 = this.errorBarSettings().bg();
		var c8 = c2.t().keys().getEnumerator();
		while (c8.moveNext()) {
			var c7 = c8.current();
			if (c6 != null && c2.aa().containsKey(c7)) {
				var c9 = c2.aa().item(c7);
				if (!isNaN(c9)) {
					var da = c2.y().item(c7).d();
					if (this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.positive) {
						c4.o(c5, da, c9, true);
					}
					if (this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.negative) {
						c4.o(c5, da, c9, false);
					}
				}
			}
		}
	}

, 
	es: function (db, dc, dd) {
		var de = true;
		if (!$.ig.Series.prototype.es.call(this, db, dc, dd) || dc.isEmpty() || db.isEmpty() || this.xAxis() == null || this.yAxis() == null || this.xAxis().seriesViewer() == null || this.yAxis().seriesViewer() == null || this.jp() == null || this.jq() == null || this.jp().count() == 0 || this.jq().count() == 0 || this.dx() == null || this.dx().g() != this.jp().count() || this.dx().g() != this.jq().count() || this.xAxis().seriesViewer() == null || this.yAxis().seriesViewer() == null || this.xAxis().actualMinimumValue() == this.xAxis().actualMaximumValue() || this.yAxis().actualMinimumValue() == this.yAxis().actualMaximumValue()) {
			de = false;
		}
		return de;
	}

, 
	getViewInfo: function (df, dg) {
		if (!this.i1.isEmpty() && !this.i2.isEmpty()) {
			df = this.i1;
			dg = this.i2;
			return{
				viewportRect: df,
				windowRect: dg
			};
		}
		df = this.view().ab();
		dg = this.view().ac();
		return {
			viewportRect: df,
			windowRect: dg
		};
	}

, 
	eo: function (dh) {
		this.j1();
		try {
				if (this.ew(this.view())) {
					return;
				}
				if (this.dx() != null && this.dx().g() > this.maximumMarkers()) {
					dh = false;
				}
				if (this.gm(dh)) {
					var di = this.i3;
					if (this.fo()) {
						this.i3 = this.i4;
						this.i4 = di;

					} else {
						this.i3 = this.i5;
						this.i5 = di;
					}
					this.j6(this.i5, this.jn());
					this.fp();

				} else {
					this.j6(this.i5, this.jn());
					this.j7(this.i5, this.jn());
				}

		}
		finally {
				this.j0();

		}	}

, 
	fj: function () {
		$.ig.MarkerSeries.prototype.fj.call(this);
		if (this.index() < 0) {
			return;
		}
		this.jn().ea();
	}

, 
	er: function (dj, dk) {
		$.ig.Series.prototype.er.call(this, dj, dk);
		if (!this.dv()) {
			this.view().b4(dk);
			return;
		}
		this.view().b4(dk);
		if (this.ew(this.dt())) {
			return;
		}
		var dl = $.ig.util.cast($.ig.ScatterBaseView.prototype.$type, this.dt());
		var dm = new $.ig.ScatterFrame();
		this.j6(dm, dl);
		this.j7(dm, dl);
		this.dv(false);
	}

, 
	kc: function (dn, dp) {
		var dq = new $.ig.List$1($.ig.Object.prototype.$type, 0);
		var ds = dp.i().getEnumerator();
		while (ds.moveNext()) {
			var dr = ds.current();
			if (!dn.containsKey(dr)) {
				dq.add1(dr);
			}
		}
		var du = dq.getEnumerator();
		while (du.moveNext()) {
			var dt = du.current();
			dp.u(dt);
		}
	}

, 
	kd: function (dv, dw, dx, dy) {
		var $self = this;
		if (dw == null || dw.length != this.jo().j().g()) {
			dw = new Array(this.jo().j().g());
			for (var dz = 0; dz < this.jo().j().g(); dz++) {
				dw[dz] = new $.ig.Point(0);
			}
		}
		var d0 = (function () { var $ret = new $.ig.ScalerParams(dx, dy, $self.xAxis().isInverted());
$ret.c = $self.seriesViewer().effectiveViewport(); return $ret;}());
		var d1 = (function () { var $ret = new $.ig.ScalerParams(dx, dy, $self.yAxis().isInverted());
$ret.c = $self.seriesViewer().effectiveViewport(); return $ret;}());
		var d2 = this.jo().f().getUnscaledValue(dy.left(), d0);
		var d3 = this.jo().f().getUnscaledValue(dy.right(), d0);
		var d4 = this.jo().g().getUnscaledValue(dy.bottom(), d1);
		var d5 = this.jo().g().getUnscaledValue(dy.top(), d1);
		if (this.jo().h()) {
			var d6 = d2;
			d2 = d3;
			d3 = d6;
		}
		if (this.jo().i()) {
			var d7 = d4;
			d4 = d5;
			d5 = d7;
		}
		var d8 = this.jo();
		var d9 = d8.f();
		var ea = d8.g();
		var eb;
		var ec;
		var ed = this.jp();
		var ee = this.jq();
		for (var ef = 0; ef < this.jo().j().g(); ef++) {
			eb = ed.item(ef);
			ec = ee.item(ef);
			if (eb >= d2 && eb <= d3 && ec >= d4 && ec <= d5) {
				dw[ef].__x = d9.getScaledValue(eb, d0);
				dw[ef].__y = ea.getScaledValue(ec, d1);

			} else {
				dw[ef].__x = NaN;
				dw[ef].__y = NaN;
			}
		}
		return dw;
	}

, 
	ke: function (eg, eh) {
		if (eh == null || eh.length != eg.j()) {
			eh = new Array(eg.j());
		}
		var ei = 0;
		var ej = this.dx();
		var el = eg.i().getEnumerator();
		while (el.moveNext()) {
			var ek = el.current();
			eh[ei] = ej.x(ek);
			ei++;
		}
		return eh;
	}
,
	$type: new $.ig.Type('ScatterBase', $.ig.MarkerSeries.prototype.$type, [$.ig.ISupportsErrorBars.prototype.$type])
}, true);

$.ig.util.defType('BubbleSeries', 'ScatterBase', {

	ed: function () {
		return new $.ig.BubbleSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.ScatterBase.prototype.ea.call(this, a);
		this.le(a);
	}

, 
	_le: null,
	le: function (a) {
		if (arguments.length === 1) {
			this._le = a;
			return a;
		} else {
			return this._le;
		}
	}

, 
		init: function () {


			$.ig.ScatterBase.prototype.init.call(this);
						this.a3($.ig.BubbleSeries.prototype.$type);
				this.i3 = new $.ig.ScatterFrame();
				this.i4 = new $.ig.ScatterFrame();
				this.i5 = new $.ig.ScatterFrame();
		}
, 
	_lf: null,
	lf: function (a) {
		if (arguments.length === 1) {
			this._lf = a;
			return a;
		} else {
			return this._lf;
		}
	}

, 
	_lg: null,
	lg: function (a) {
		if (arguments.length === 1) {
			this._lg = a;
			return a;
		} else {
			return this._lg;
		}
	}

, 
	lh: function () {
			return this.lj();
	}

, 
	_li: null,
	li: function (a) {
		if (arguments.length === 1) {
			this._li = a;
			return a;
		} else {
			return this._li;
		}
	}

, 
	radiusMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BubbleSeries.prototype.radiusMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.BubbleSeries.prototype.radiusMemberPathProperty);
		}
	}

, 
	lj: function (a) {
		if (arguments.length === 1) {
			if (this.k2 != a) {
				var b = this.lj();
				this.k2 = a;
				this.ej($.ig.BubbleSeries.prototype.kv, b, this.lj());
			}
			return a;
		} else {
			return this.k2;
		}
	}
, 
	k2: null
, 
	radiusScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BubbleSeries.prototype.radiusScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.BubbleSeries.prototype.radiusScaleProperty);
		}
	}

, 
	labelMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BubbleSeries.prototype.labelMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.BubbleSeries.prototype.labelMemberPathProperty);
		}
	}
, 
	k3: null
, 
	lk: function (a) {
		if (arguments.length === 1) {
			if (this.k3 != a) {
				var b = this.lk();
				this.k3 = a;
				this.ej($.ig.BubbleSeries.prototype.ky, b, this.lk());
			}
			return a;
		} else {
			return this.k3;
		}
	}

, 
	fillMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BubbleSeries.prototype.fillMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.BubbleSeries.prototype.fillMemberPathProperty);
		}
	}

, 
	fillScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BubbleSeries.prototype.fillScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.BubbleSeries.prototype.fillScaleProperty);
		}
	}
, 
	k4: null
, 
	ll: function (a) {
		if (arguments.length === 1) {
			if (this.k4 != a) {
				var b = this.ll();
				this.k4 = a;
				this.ej($.ig.BubbleSeries.prototype.k1, b, this.ll());
			}
			return a;
		} else {
			return this.k4;
		}
	}

, 
	j5: function (a, b, c, d) {
		var $self = this;
		if (b <= this.maximumMarkers()) {
			a.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 1, b));
		}
		var e = this.dx();
		var f;
		var g;
		var h = new $.ig.ScalerParams(c, d, this.jo().h());
		var i = new $.ig.ScalerParams(c, d, this.jo().i());
		for (var j = 0; j < b; j++) {
			f = this.jp().item(j);
			g = this.jq().item(j);
			var k = {__x: this.jo().f().getScaledValue(f, h), __y: this.jo().g().getScaledValue(g, i), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			if (!Number.isInfinity(k.__x) && !Number.isInfinity(k.__y)) {
				var l = e.item(j);
				if (b <= this.maximumMarkers()) {
					if (!a.u().containsKey(l)) {
						var m = {__x: f, __y: g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
						a.u().add(l, (function () { var $ret = new $.ig.OwnedPoint();
						$ret.e(l);
						$ret.f(m);
						$ret.d(k); return $ret;}()));
					}
				}
			}
		}
	}

, 
	j7: function (a, b) {
		var $self = this;
		this.jo((function () { var $ret = new $.ig.ScatterAxisInfoCache();
		$ret.f($self.xAxis());
		$ret.g($self.yAxis());
		$ret.h($self.xAxis().isInverted());
		$ret.i($self.yAxis().isInverted()); return $ret;}()));
		var c = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, b);
		c.de().z(a.t(), this.useLightweightMarkers());
		var d = (function () { var $ret = new $.ig.Clipper(1, NaN, b.ab().bottom(), NaN, b.ab().top(), false);
$ret.h(b.dk().n().bn()); return $ret;}());
		b.dk().w(a.w(), d);
	}

, 
	j6: function (a, b) {
		var $self = this;
		a.t().clear();
		a.w().clear();
		var c = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, b);
		var d = c.de();
		d.ah(this.lj());
		var e = Math.min(this.jp() != null ? this.jp().count() : 0, this.jq() != null ? this.jq().count() : 0);
		var f = b.ac();
		var g = b.ab();
		var h = new $.ig.ScalerParams(f, g, this.xAxis().isInverted());
		var i = new $.ig.ScalerParams(f, g, this.yAxis().isInverted());
		if (e < 1) {
			return;
		}
		this.jo((function () { var $ret = new $.ig.ScatterAxisInfoCache();
		$ret.f($self.xAxis());
		$ret.g($self.yAxis());
		$ret.h($self.xAxis().isInverted());
		$ret.i($self.yAxis().isInverted());
		$ret.j($self.dx()); return $ret;}()));
		this.j5(a, e, f, g);
		c.de().y(a.t(), this.maximumMarkers(), f, g, this.resolution());
		c.em();
		c.en();
		this.l1();
		var j = (function () { var $ret = new $.ig.Clipper(0, g, false);
$ret.h(a.w()); return $ret;}());
		var k = this.xAxis().getUnscaledValue(g.left(), h);
		var l = this.xAxis().getUnscaledValue(g.right(), h);
		c.dk().af(a.w(), this.trendLineType(), this.jp(), this.jq(), this.trendLinePeriod(), function (m) { return $self.xAxis().getScaledValue(m, h)		}, function (n) { return $self.yAxis().getScaledValue(n, i)		}, (function () { var $ret = new $.ig.TrendResolutionParams();
		$ret.m($self.resolution());
		$ret.k(g);
		$ret.l(f); return $ret;}()), j, k, l);
	}

, 
	l1: function () {
		if (this.seriesViewer() == null) {
		return;
		}
		var a = $.ig.util.cast($.ig.ItemLegend.prototype.$type, this.actualLegend());
		if (a != null) {
			a.cl(this);
			this.l4();
			a.ck(this);
		}
		var b = $.ig.util.cast($.ig.ScaleLegend.prototype.$type, this.actualLegend());
		if (b != null) {
			b.dk();
			b.dn(this);
		}
	}

, 
	l2: function (a, b, c, d, e) {
		if (e <= a || isNaN(e) || Number.isInfinity(e)) {
			return c;
		}
		if (e >= b) {
			return d;
		}
		var f = c + ((d - c) / (b - a)) * (e - a);
		return f;
	}

, 
	l3: function (a, b, c, d, e, f) {
		var g = Math.logBase(f, e);
		var h = Math.logBase(a, e);
		var i = Math.logBase(b, e);
		return $.ig.BubbleSeries.prototype.l2(h, i, c, d, g);
	}

, 
	es: function (a, b, c) {
		var d = $.ig.ScatterBase.prototype.es.call(this, a, b, c);
		if (this.lj() == null || this.dx() == null || this.lj().count() == 0 || this.dx().g() != this.lj().count()) {
			d = false;
		}
		return d;
	}

, 
	j2: function (a, b) {
		if (b != $.ig.FastItemsSourceEventAction.prototype.change) {
			return true;
		}
		if (a == null) {
			return true;
		}
		if (this.xMemberPath() == a || this.yMemberPath() == a || this.radiusMemberPath() == a) {
			return true;
		}
		return false;
	}

, 
	l4: function () {
		var $self = this;
		var a = $.ig.util.cast($.ig.ItemLegend.prototype.$type, this.actualLegend());
		if (a == null || this.dx() == null) {
		return;
		}
		this.li(new $.ig.List$1($.ig.UIElement.prototype.$type, 0));
		for (var b = 0; b < this.dx().g(); b++) {
			var c = null;
			if ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.fillScale()) !== null && this.ll() != null) {
				c = (this.fillScale()).getBrushByIndex(b, this.ll());
			}
			if ($.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.fillScale()) !== null) {
				c = (this.fillScale()).getBrush(b, this.dx().g());
			}
			var d = new $.ig.ContentControl();
			var e = this.lk() != null && this.lk().item(b) != null ? this.lk().item(b).toString() : "";
			d.a9((function () { var $ret = new $.ig.DataContext();
			$ret.series($self);
			$ret.item($self.dx().item(b));
			$ret.itemBrush(c);
			$ret.itemLabel(e); return $ret;}()));
			d.ba(this.discreteLegendItemTemplate());
			this.li().add(d);
		}
	}

, 
	fc: function (a, b, c, d) {
		$.ig.ScatterBase.prototype.fc.call(this, a, b, c, d);
		this.l1();
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.ScatterBase.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.BubbleSeries.prototype.be:
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.lj());
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.ll());
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.lk());
					this.lj(null);
					this.ll(null);
					this.lk(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					this.lj(this.gs(this.radiusMemberPath()));
					if (!String.isNullOrEmpty(this.fillMemberPath())) {
						this.ll(this.gs(this.fillMemberPath()));
					}
					this.lk(this.gu(this.labelMemberPath()));
				}
				this.renderSeries(false);
				this.l1();
				break;
			case $.ig.BubbleSeries.prototype.ku:
				if (this.dx() != null) {
					this.dx().ac(this.lj());
					this.lj(this.gs(this.radiusMemberPath()));
					this.l1();
				}
				break;
			case $.ig.BubbleSeries.prototype.kv:
				this.jn().dk().ac();
				this.renderSeries(false);
				this.e4();
				break;
			case $.ig.BubbleSeries.prototype.kw:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.BubbleSeries.prototype.k0:
				this.renderSeries(false);
				this.l1();
				this.e5();
				break;
			case $.ig.BubbleSeries.prototype.k1:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.BubbleSeries.prototype.kz:
				if (this.dx() != null) {
					this.dx().ac(this.ll());
					this.ll(this.gs(this.fillMemberPath()));
					this.l1();
				}
				break;
			case $.ig.BubbleSeries.prototype.kx:
				if (this.dx() != null) {
					this.dx().ac(this.lk());
					this.lk(this.gu(this.labelMemberPath()));
					this.l1();
				}
				break;
			case $.ig.BubbleSeries.prototype.bg:
				var e = $.ig.util.cast($.ig.ItemLegend.prototype.$type, c);
				if (e != null) {
					e.cl(this);
				}
				var f = $.ig.util.cast($.ig.ScaleLegend.prototype.$type, c);
				if (f != null) {
					var g = true;
					var h = null;
					if (this.seriesViewer() != null) {
						var j = this.seriesViewer().series().getEnumerator();
						while (j.moveNext()) {
							var i = j.current();
							if (i.legend() == f) {
								h = i;
								g = false;
							}
						}
					}
					if (g) {
						f.dk();

					} else {
						f.dn(h);
					}
				}
				this.l1();
				break;
		}
	}

, 
	l5: function (a, b, c, d) {
		var e = this.lj().minimum();
		var f = this.lj().maximum();
		if (this.radiusScale() != null) {
			var g = this.radiusScale().minimumValue();
			var h = this.radiusScale().maximumValue();
			var i = this.radiusScale().logarithmBase();
			if (!this.radiusScale().p().contains(this)) {
				this.radiusScale().p().add(this);
			}
			if (this.radiusScale().isLogarithmic()) {
				for (var j = 0; j < b.count(); j++) {
					b.__inner[j] = $.ig.BubbleSeries.prototype.l3(e, f, g, h, i, b.__inner[j]);
				}

			} else {
				for (var k = 0; k < b.count(); k++) {
					b.__inner[k] = $.ig.BubbleSeries.prototype.l2(e, f, g, h, b.__inner[k]);
				}
			}
		}
		if (d) {
			var l = c.width();
			if (!this.view().ab().isEmpty()) {
				l = this.view().ab().width();
			} else if (this.seriesViewer() != null && !this.seriesViewer().viewportRect().isEmpty()) {
				l = this.seriesViewer().viewportRect().width();
			}
			var m = c.width() / l;
			for (var n = 0; n < b.count(); n++) {
				b.__inner[n] = b.__inner[n] * m;
			}
		}
		for (var o = 0; o < a.count(); o++) {
			var p = a.__inner[o];
			p.v(Math.max(0, b.__inner[o]));
			p.w(Math.max(0, b.__inner[o]));
		}
	}

, 
	l6: function (a) {
		if (this.fillScale() != null && !this.fillScale().i().contains(this)) {
			this.fillScale().i().add(this);
		}
		var b = $.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.fillScale());
		var c = $.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.fillScale());
		var d = this.fillScale() == null || this.fillScale().brushes() == null || this.fillScale().brushes().count() == 0 || (c != null && this.fillMemberPath() == null);
		if (d) {
			this.le().eo();
			var e = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, this.dt());
			if (e != null) {
				e.eo();
			}
			return;
		}
		var f = a.count();
		for (var g = 0; g < f; g++) {
			var h = a.__inner[g];
			var i = $.ig.util.cast($.ig.DataContext.prototype.$type, h.a9());
			if (i != null) {
				var j = null;
				var k = this.dx().x(i.item());
				if (b != null) {
					j = b.getBrush(k, this.dx().g());
				}
				if (c != null) {
					j = c.getBrushByIndex(k, this.ll());
				}
				i.itemBrush(j);
			}
		}
	}
,
	$type: new $.ig.Type('BubbleSeries', $.ig.ScatterBase.prototype.$type)
}, true);



$.ig.util.defType('ScatterBaseView', 'MarkerSeriesView', {

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
	_df: null,
	df: function (a) {
		if (arguments.length === 1) {
			this._df = a;
			return a;
		} else {
			return this._df;
		}
	}

, 
	_dg: null,
	dg: function (a) {
		if (arguments.length === 1) {
			this._dg = a;
			return a;
		} else {
			return this._dg;
		}
	}

, 
	_dh: null,
	dh: function (a) {
		if (arguments.length === 1) {
			this._dh = a;
			return a;
		} else {
			return this._dh;
		}
	}

, 
		init: function (a) {

			this.c5 = null;

			$.ig.MarkerSeriesView.prototype.init.call(this, a);
						this.dg(a);
				this.dl(new $.ig.HashPool$2($.ig.Object.prototype.$type, $.ig.Marker.prototype.$type));
				this.c2(this.dl());
				this.dk(new $.ig.ScatterTrendLineManager());
		}
, 
	_di: null,
	di: function (a) {
		if (arguments.length === 1) {
			this._di = a;
			return a;
		} else {
			return this._di;
		}
	}

, 
	_dj: null,
	dj: function (a) {
		if (arguments.length === 1) {
			this._dj = a;
			return a;
		} else {
			return this._dj;
		}
	}

, 
	_dk: null,
	dk: function (a) {
		if (arguments.length === 1) {
			this._dk = a;
			return a;
		} else {
			return this._dk;
		}
	}

, 
	ag: function () {
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		this.de(this.d2());
		this.di(new $.ig.Path());
		this.dj(new $.ig.Path());
		if (!this.ad()) {
			this.dg().maximumMarkers(2000);
		}
	}
, 
	c5: null
, 
	d1: function (a) {
		if (this.c5 == null) {
			this.c5 = new $.ig.DataTemplateMeasureInfo();
			this.c5.context = this.z().c();
		}
		this.c5.width = a.v();
		this.c5.height = a.w();
		this.c5.data = a.a9();
		var b = a.ba();
		if (b.measure() != null) {
			b.measure()(this.c5);
		}
		return new $.ig.Size(this.c5.width, this.c5.height);
	}

, 
	d2: function () {
		var $self = this;
		var c = new $.ig.NumericMarkerManager(1, function (a) { return $self.dl().item(a)}, function (b) { return $self.dg().jo().j().item(b)}, this.d3.on(this), this.d4.on(this), this.d5.on(this), function () { return $self.dg().markerCollisionAvoidance()});
		c.an(this.d1.on(this));
		return c;
	}

, 
	d3: function (a) {
		this.dg().kc(a, this.dl());
	}

, 
	d4: function () {
		this.df(this.dg().kd(this.dl(), this.df(), this.ac(), this.ab()));
		return this.df();
	}

, 
	d5: function () {
		this.dh(this.dg().ke(this.dl(), this.dh()));
		return this.dh();
	}

, 
	d6: function () {
	}

, 
	d7: function (a) {
	}

, 
	d8: function () {
	}

, 
	d9: function (a) {
	}

, 
	ea: function () {
		if (this.dg().trendLineBrush() != null) {
			this.dg().actualTrendLineBrush(this.dg().trendLineBrush());

		} else {
			this.dg().actualTrendLineBrush(this.dg().actualBrush());
		}
	}

, 
	_dl: null,
	dl: function (a) {
		if (arguments.length === 1) {
			this._dl = a;
			return a;
		} else {
			return this._dl;
		}
	}

, 
	cp: function (a) {
		this.dl().w(a);
	}

, 
	ed: function () {
	}

, 
	a1: function (a, b) {
		if (a.b()) {
			if (this.dg().trendLineType() != $.ig.TrendLineType.prototype.none && !b) {
				var c = this.dk().n();
				c.a7(this.dg().trendLineThickness());
				c.__stroke = this.dg().actualTrendLineBrush();
				c.a8(this.dg().trendLineDashArray());
				c.a9(this.dg().trendLineDashCap());
				if (this.k && !b) {
					a.e($.ig.GradientDirection.prototype.bottomTop, this.ab());
				}
				a.k(c);
			}
		}
		$.ig.MarkerSeriesView.prototype.a1.call(this, a, b);
	}

, 
	ee: function (a) {
		if (a) {
			this.ed();
			this.dl().clear();
		}
		this.dk().ab();
	}
,
	$type: new $.ig.Type('ScatterBaseView', $.ig.MarkerSeriesView.prototype.$type)
}, true);

$.ig.util.defType('BubbleSeriesView', 'ScatterBaseView', {

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
		init: function (a) {


			$.ig.ScatterBaseView.prototype.init.call(this, a);
						this.ej(a);
				this.dk(new $.ig.ScatterTrendLineManager());
		}
, 
	ag: function () {
		$.ig.ScatterBaseView.prototype.ag.call(this);
		if (!this.ad()) {
			this.cg().markerType($.ig.MarkerType.prototype.automatic);
		}
	}

, 
	d2: function () {
		var $self = this;
		return new $.ig.BubbleMarkerManager(function (a) { return $self.dl().item(a)		}, function (b) { return $self.u().dx().item(b)		}, this.d3.on(this), this.d4.on(this), this.d5.on(this));
	}

, 
	em: function () {
		var a = this.de();
		this.ej().l5(a.aj(), a.ai(), this.ab(), this == this.u().dt());
		this.an();
	}

, 
	en: function () {
		var a = this.de();
		this.ej().l6(a.aj());
	}

, 
	eo: function () {
		var a = this.de();
		var c = a.aj().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			var d = $.ig.util.cast($.ig.DataContext.prototype.$type, b.a9());
			if (d != null) {
				d.itemBrush(null);
			}
		}
	}
,
	$type: new $.ig.Type('BubbleSeriesView', $.ig.ScatterBaseView.prototype.$type)
}, true);

$.ig.util.defType('CustomPaletteBrushScale', 'BrushScale', {

		init: function () {


			$.ig.BrushScale.prototype.init.call(this);
		}
, 
	brushSelectionMode: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty, a);
			return a;
		} else {
			return this.b($.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty);
		}
	}

, 
	getBrush: function (a, b) {
		if (this.brushes() == null || this.brushes().count() == 0) {
		return null;
		}
		if (this.brushSelectionMode() == $.ig.BrushSelectionMode.prototype.select) {
			return $.ig.BrushScale.prototype.getBrush.call(this, a % this.brushes().count());
		}
		var c = $.ig.BubbleSeries.prototype.l2(0, b - 1, 0, this.brushes().count() - 1, a);
		return this.m(c);
	}
,
	$type: new $.ig.Type('CustomPaletteBrushScale', $.ig.BrushScale.prototype.$type)
}, true);

$.ig.util.defType('SizeScale', 'DependencyObject', {

		init: function () {

			var $self = this;

			$.ig.DependencyObject.prototype.init.call(this);
						this.p(new $.ig.List$1($.ig.Series.prototype.$type, 0));
				this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (a, b) { return $self.t(a, b.propertyName(), b.oldValue(), b.newValue())				});
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
	minimumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SizeScale.prototype.minimumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.SizeScale.prototype.minimumValueProperty);
		}
	}

, 
	maximumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SizeScale.prototype.maximumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.SizeScale.prototype.maximumValueProperty);
		}
	}

, 
	isLogarithmic: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SizeScale.prototype.isLogarithmicProperty, a);
			return a;
		} else {
			return this.b($.ig.SizeScale.prototype.isLogarithmicProperty);
		}
	}

, 
	logarithmBase: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SizeScale.prototype.logarithmBaseProperty, a);
			return a;
		} else {
			return this.b($.ig.SizeScale.prototype.logarithmBaseProperty);
		}
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	s: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}

, 
	t: function (a, b, c, d) {
		var f = this.p().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			e.renderSeries(false);
			if (e.seriesViewer() != null) {
				e.e5();
			}
		}
	}
,
	$type: new $.ig.Type('SizeScale', $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('ValueBrushScale', 'BrushScale', {

		init: function () {


			$.ig.BrushScale.prototype.init.call(this);
		}
, 
	minimumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ValueBrushScale.prototype.minimumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.ValueBrushScale.prototype.minimumValueProperty);
		}
	}

, 
	maximumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ValueBrushScale.prototype.maximumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.ValueBrushScale.prototype.maximumValueProperty);
		}
	}

, 
	isLogarithmic: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ValueBrushScale.prototype.isLogarithmicProperty, a);
			return a;
		} else {
			return this.b($.ig.ValueBrushScale.prototype.isLogarithmicProperty);
		}
	}

, 
	logarithmBase: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ValueBrushScale.prototype.logarithmBaseProperty, a);
			return a;
		} else {
			return this.b($.ig.ValueBrushScale.prototype.logarithmBaseProperty);
		}
	}

, 
	getBrushByIndex: function (a, b) {
		if (b == null || this.brushes() == null || this.brushes().count() == 0 || a < 0 || a >= b.count()) {
			return null;
		}
		if (b.count() == 0) {
			return this.brushes().item(0);
		}
		var c = isNaN(this.minimumValue()) || Number.isInfinity(this.minimumValue()) ? b.minimum() : this.minimumValue();
		var d = isNaN(this.maximumValue()) || Number.isInfinity(this.maximumValue()) ? b.maximum() : this.maximumValue();
		var e = b.item(a);
		if (c == d) {
			return e == c ? this.brushes().item(0) : null;
		}
		return this.y(c, d, e);
	}

, 
	getBrushByValue: function (a, b) {
		if (b == null || this.brushes() == null || this.brushes().count() == 0) {
			return null;
		}
		if (b.count() <= 1) {
			return this.brushes().item(0);
		}
		var c = isNaN(this.minimumValue()) || Number.isInfinity(this.minimumValue()) ? b.minimum() : this.minimumValue();
		var d = isNaN(this.maximumValue()) || Number.isInfinity(this.maximumValue()) ? b.maximum() : this.maximumValue();
		if (a < c) {
			return null;
		}
		if (a > d) {
			return null;
		}
		return this.y(c, d, a);
	}

, 
	y: function (a, b, c) {
		if (this.isLogarithmic() && this.logarithmBase() > 0) {
			var d = Math.logBase(a, this.logarithmBase());
			var e = Math.logBase(b, this.logarithmBase());
			var f = Math.logBase(c, this.logarithmBase());
			return this.z(d, e, f);
		}
		return this.z(a, b, c);
	}

, 
	z: function (a, b, c) {
		if (c < a || c > b) {
		return null;
		}
		var d = (c - a) / (b - a);
		var e = d * (this.brushes().count() - 1);
		return this.m(e);
	}
,
	$type: new $.ig.Type('ValueBrushScale', $.ig.BrushScale.prototype.$type)
}, true);



































































































































































$.ig.util.defType('ScaleLegend', 'LegendBase', {

	bu: function () {
		return new $.ig.ScaleLegendView(this);
	}

, 
	bv: function (a) {
		$.ig.LegendBase.prototype.bv.call(this, a);
		this.cq(a);
	}

, 
	_cq: null,
	cq: function (a) {
		if (arguments.length === 1) {
			this._cq = a;
			return a;
		} else {
			return this._cq;
		}
	}

, 
	legendScaleElement: function () {
			return this.cq().a2();
	}

, 
	minText: function () {
			return this.cq().a3();
	}

, 
	maxText: function () {
			return this.cq().a4();
	}

, 
		init: function () {


			$.ig.LegendBase.prototype.init.call(this);
						this.a3($.ig.ScaleLegend.prototype.$type);
		}
, 
	cr: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScaleLegend.prototype.ce, a);
			return a;
		} else {
			return this.b($.ig.ScaleLegend.prototype.ce);
		}
	}

, 
	cs: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScaleLegend.prototype.cf, a);
			return a;
		} else {
			return this.b($.ig.ScaleLegend.prototype.cf);
		}
	}

, 
	_ct: null,
	ct: function (a) {
		if (arguments.length === 1) {
			this._ct = a;
			return a;
		} else {
			return this._ct;
		}
	}

, 
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
	_cv: null,
	cv: function (a) {
		if (arguments.length === 1) {
			this._cv = a;
			return a;
		} else {
			return this._cv;
		}
	}

, 
	_cw: null,
	cw: function (a) {
		if (arguments.length === 1) {
			this._cw = a;
			return a;
		} else {
			return this._cw;
		}
	}

, 
	_cx: null,
	cx: function (a) {
		if (arguments.length === 1) {
			this._cx = a;
			return a;
		} else {
			return this._cx;
		}
	}

, 
	_cy: null,
	cy: function (a) {
		if (arguments.length === 1) {
			this._cy = a;
			return a;
		} else {
			return this._cy;
		}
	}
, 
	cg: null
, 
	cz: function (a) {
		if (arguments.length === 1) {
			var $self = this;
			this.cg = a;
			this.d($.ig.ScaleLegend.prototype.ce, (function () { var $ret = new $.ig.Binding(1, "Visibility");
			$ret.d($self.cg); return $ret;}()));
			this.d($.ig.ScaleLegend.prototype.cf, (function () { var $ret = new $.ig.Binding(1, $.ig.MarkerSeries.prototype.hs);
			$ret.d($self.cg); return $ret;}()));
			return a;
		} else {
			return this.cg;
		}
	}

, 
	dk: function () {
		this.cq().bi();
	}

, 
	dl: function (a) {
		if (this.cz() == null) {
		return null;
		}
		var b = $.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.cz().fillScale());
		if (b != null && this.cz().dx() != null) {
			return b.getBrush(a, this.cz().dx().g());
		}
		var c = $.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.cz().fillScale());
		if (c != null) {
			return c.getBrushByIndex(a, this.cx());
		}
		return null;
	}

, 
	dm: function (a) {
		if (a == null) {
			return this.cq().bj();
		}
		return $.ig.ColorUtil.prototype.n(a);
	}

, 
	dn: function (a) {
		var b = $.ig.util.cast($.ig.BubbleSeries.prototype.$type, a);
		if (b == null || a.__visibility != $.ig.Visibility.prototype.visible) {
		return;
		}
		this.cw(b.lh());
		this.cy(b.fillScale());
		this.cx(b.ll());
		this.cz(b);
		this.cv(new $.ig.ObservableCollection$1($.ig.Brush.prototype.$type, 0));
		this.dp();
	}

, 
	dp: function () {
		if (this.legendScaleElement() == null || this.cw() == null || this.cw().count() == 0) {
			return;
		}
		if (this.cz() == null || this.cz().actualLegend() != this) {
			return;
		}
		var a = false;
		var b = $.ig.util.cast($.ig.Shape.prototype.$type, this.legendScaleElement());
		if (b != null) {
			var c = this.cq().bk();
			for (var d = 0; d < this.cw().count(); d++) {
				if (this.cy() == null || this.cy().brushes() == null || this.cy().brushes().count() == 0) {
					if (this.cz() != null) {
						a = true;
					}
					break;
				}
				var e = NaN;
				if (this.cx() != null) {
					e = (this.cx().item(d) - this.cx().minimum()) / (this.cx().maximum() - this.cx().minimum());
				}
				var f = (this.cw().item(d) - this.cw().minimum()) / (this.cw().maximum() - this.cw().minimum());
				if (isNaN(e)) {
					e = 0;
				}
				if (isNaN(f)) {
					f = e;
				}
				var g = this.cz() != null ? this.dm(this.cz().actualMarkerBrush()) : this.cq().bj();
				var h = this.dl(d);
				var i = h != null ? this.dm(h) : g;
				this.cq().bl(c, i, f);
			}
			this.cq().bm(b, a, c);
		}
		if (this.minText() != null) {
			this.minText().a5((Math.round(this.cw().minimum() * 1000) / 1000).toString());
		}
		if (this.maxText() != null) {
			this.maxText().a5((Math.round(this.cw().maximum() * 1000) / 1000).toString());
		}
	}
,
	$type: new $.ig.Type('ScaleLegend', $.ig.LegendBase.prototype.$type)
}, true);


$.ig.util.defType('ScaleLegendView', 'LegendBaseView', {

		init: function (a) {

			this.ar = false;

			$.ig.LegendBaseView.prototype.init.call(this, a);
						this.a1(a);
				this.a3(new $.ig.TextBlock());
				this.a4(new $.ig.TextBlock());
				this.a2(new $.ig.Polygon());
		}
, 
	_a1: null,
	a1: function (a) {
		if (arguments.length === 1) {
			this._a1 = a;
			return a;
		} else {
			return this._a1;
		}
	}

, 
	_a2: null,
	a2: function (a) {
		if (arguments.length === 1) {
			this._a2 = a;
			return a;
		} else {
			return this._a2;
		}
	}

, 
	_a3: null,
	a3: function (a) {
		if (arguments.length === 1) {
			this._a3 = a;
			return a;
		} else {
			return this._a3;
		}
	}

, 
	_a4: null,
	a4: function (a) {
		if (arguments.length === 1) {
			this._a4 = a;
			return a;
		} else {
			return this._a4;
		}
	}

, 
	bi: function () {
	}

, 
	v: function () {
	}

, 
	bj: function () {
		return $.ig.Color.prototype.s(0, 0, 0, 0);
	}

, 
	bk: function () {
		return new $.ig.GradientData();
	}

, 
	bl: function (a, b, c) {
		var $self = this;
		var d = a;
		d.b().add((function () { var $ret = new $.ig.GradientStopData();
		$ret.d((function () { var $ret = new $.ig.Brush();
		$ret.color(b); return $ret;}()));
		$ret.c(c); return $ret;}()));
	}

, 
	bm: function (a, b, c) {
		this.a5(c);
	}

, 
	_a5: null,
	a5: function (a) {
		if (arguments.length === 1) {
			this._a5 = a;
			return a;
		} else {
			return this._a5;
		}
	}

, 
	_a6: null,
	a6: function (a) {
		if (arguments.length === 1) {
			this._a6 = a;
			return a;
		} else {
			return this._a6;
		}
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
	z: function (a) {
		$.ig.LegendBaseView.prototype.z.call(this, a);
		this.a6(this.h().ab(a));
		this.a7(this.h().ac());
		this.bt();
	}
, 
	ar: null
, 
	bt: function () {
		if (!this.ar) {
			this.ar = true;
			window.setTimeout(this.bu.on(this), 0);
		}
	}

, 
	bu: function () {
		if (this.ar) {
			this.ar = false;
			this.bv();
		}
	}

, 
	bv: function () {
		if (this.a6() == null) {
			return;
		}
		this.b2();
	}

, 
	bw: function (a) {
		var b = $.ig.util.cast($.ig.TextBlock.prototype.$type, a);
		if (b != null && b.a5() != null) {
			return this.a6().y(b.a5()) + $.ig.ScaleLegendView.prototype.aq;
		}
		return 0;
	}

, 
	bx: function (a) {
		return this.a8() + $.ig.ScaleLegendView.prototype.aq;
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
	b2: function () {
		if (this.a1().cz() == null || this.a1().cz().seriesViewer() == null || this.a5() == null) {
			return;
		}
		if (this.a6().b()) {
			this.a6().x(this.a1().cz().seriesViewer().ir());
			this.a8(this.a1().cz().seriesViewer().fb().ax());
			this.a9(this.a1().cz().seriesViewer().iq());
			var a = this.bw(this.a3());
			var b = this.bw(this.a4());
			var c = Math.max(a, b) + 4;
			if (c >= this.a7().c()) {
				c = 0;
			}
			var d = this.a7().c() - c;
			var e = 2;
			var f = 2;
			d = d - 4;
			var g = this.a7().d() - 4;
			var h = e + d + 4;
			var i = f;
			var j = g;
			var k = {__x: e + (3 / 5) * d, __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var l = {__x: e + (5 / 5) * d, __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var m = {__x: e + (5 / 5) * d, __y: g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var n = {__x: e, __y: g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var o = this.a2();
			o.bn().clear();
			o.bn().add(k);
			o.bn().add(l);
			o.bn().add(m);
			o.bn().add(n);
			this.a3().y(h);
			this.a3().x(i);
			this.a3().a6(this.a9());
			this.a4().y(h);
			this.a4().x(i + j - (this.bx(this.a3())));
			this.a4().a6(this.a9());
			this.a6().t(0, 0, this.a7().c(), this.a7().d());
			this.h().ad(this.a6(), o, this.a5(), new $.ig.Rect(0, f, e, d, g));
			if (c > 0) {
				this.a6().i(this.a3());
				this.a6().i(this.a4());
			}
		}
	}
,
	$type: new $.ig.Type('ScaleLegendView', $.ig.LegendBaseView.prototype.$type)
}, true);




$.ig.util.defType('HighDensityScatterSeries', 'Series', {

		init: function () {

			this.h3 = null;
			this.ia = 0;
			this.ib = 0;
			this.ic = false;
			this.il = 0;
			this.__itemIndexes = null;

			$.ig.Series.prototype.init.call(this);
						this.a3($.ig.HighDensityScatterSeries.prototype.$type);
		}
, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.xAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.xAxisProperty);
		}
	}

, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.yAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.yAxisProperty);
		}
	}

, 
	xMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.xMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.xMemberPathProperty);
		}
	}

, 
	iz: function (a) {
		if (arguments.length === 1) {
			if (this.h1 != a) {
				var b = this.iz();
				this.h1 = a;
				this.ej($.ig.HighDensityScatterSeries.prototype.hs, b, this.iz());
			}
			return a;
		} else {
			return this.h1;
		}
	}
, 
	h1: null
, 
	yMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.yMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.yMemberPathProperty);
		}
	}

, 
	i0: function (a) {
		if (arguments.length === 1) {
			if (this.h2 != a) {
				var b = this.i0();
				this.h2 = a;
				this.ej($.ig.HighDensityScatterSeries.prototype.hu, b, this.i0());
			}
			return a;
		} else {
			return this.h2;
		}
	}
, 
	h2: null
, 
	useBruteForce: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.useBruteForceProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.useBruteForceProperty);
		}
	}

, 
	progressiveLoad: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty);
		}
	}

, 
	mouseOverEnabled: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty);
		}
	}

, 
	useSquareCutoffStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty);
		}
	}

, 
	heatMinimum: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.heatMinimumProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.heatMinimumProperty);
		}
	}

, 
	heatMaximum: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HighDensityScatterSeries.prototype.heatMaximumProperty, a);
			return a;
		} else {
			return this.b($.ig.HighDensityScatterSeries.prototype.heatMaximumProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.Series.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.HighDensityScatterSeries.prototype.be:
				if (this.h3 != null) {
					this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this));
				}
				this.h3 = null;
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.iz());
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.i0());
					this.iz(null);
					this.i0(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					this.iz(this.gs(this.xMemberPath()));
					this.i0(this.gs(this.yMemberPath()));
				}
				if ((this.yAxis() != null && !this.yAxis().updateRange()) || (this.xAxis() != null && !this.xAxis().updateRange())) {
					this.renderSeries(false);
				}
				break;
			case $.ig.HighDensityScatterSeries.prototype.hp:
				this.h6 = this.xAxis();
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				if ((this.xAxis() != null && !this.xAxis().updateRange()) || (d == null && c != null)) {
					this.renderSeries(false);
				}
				break;
			case $.ig.HighDensityScatterSeries.prototype.hq:
				this.h7 = this.yAxis();
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				if ((this.yAxis() != null && !this.yAxis().updateRange()) || (d == null && c != null)) {
					this.renderSeries(false);
				}
				break;
			case $.ig.HighDensityScatterSeries.prototype.hx:
				this.h8 = this.mouseOverEnabled();
				this.renderSeries(false);
				break;
			case $.ig.HighDensityScatterSeries.prototype.hr:
				if (this.dx() != null) {
					this.dx().ac(this.iz());
					this.iz(this.gs(this.xMemberPath()));
				}
				break;
			case $.ig.HighDensityScatterSeries.prototype.hs:
				if (this.xAxis() != null && !this.xAxis().updateRange()) {
					this.renderSeries(false);
				}
				break;
			case $.ig.HighDensityScatterSeries.prototype.ht:
				if (this.dx() != null) {
					this.dx().ac(this.i0());
					this.i0(this.gs(this.yMemberPath()));
				}
				break;
			case $.ig.HighDensityScatterSeries.prototype.hu:
				if (this.yAxis() != null && !this.yAxis().updateRange()) {
					this.renderSeries(false);
				}
				break;
			case $.ig.HighDensityScatterSeries.prototype.hv:
				if (this.h3 != null) {
					this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this));
				}
				this.h3 = null;
				this.renderSeries(false);
				break;
			case $.ig.HighDensityScatterSeries.prototype.hz:
				this.renderSeries(false);
				break;
			case $.ig.HighDensityScatterSeries.prototype.h0:
				this.renderSeries(false);
				break;
			case $.ig.HighDensityScatterSeries.prototype.hy:
				this.renderSeries(false);
				break;
		}
	}
, 
	h3: null, 
	h4: null, 
	h5: null, 
	h6: null, 
	h7: null, 
	h8: null
, 
	es: function (a, b, c) {
		var d = $.ig.Series.prototype.es.call(this, a, b, c);
		if (this.yAxis() == null || this.xAxis() == null || this.i0() == null || this.iz() == null || this.i0().count() < 1 || this.iz().count() < 1 || this.i0().count() != this.iz().count() || this.d6().isEmpty()) {
			d = false;
		}
		return d;
	}

, 
	eo: function (a) {
		var $self = this;
		$.ig.Series.prototype.eo.call(this, a);
		if (this.ev()) {
			return;
		}
		if (this.h3 == null && !this.useBruteForce()) {
			var b = new Array(this.iz().count());
			for (var c = 0; c < this.iz().count(); c++) {
				b[c] = (function () { var $ret = new $.ig.PointData();
				$ret.a = $self.iz().item(c);
				$ret.b = $self.i0().item(c);
				$ret.c = c; return $ret;}());
			}
			if (this.progressiveLoad()) {
				this.ib = 1;
				this.ia = Math.logBase(b.length, 2) + 3;
				if (this.progressiveLoadStatusChanged != null) {
					this.progressiveLoadStatusChanged(this, new $.ig.ProgressiveLoadStatusEventArgs(((this.ib / this.ia) * 100)));
				}
				this.h3 = $.ig.KDTree2D.prototype.n(b, 1);
				this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.combine(this.h3.progressiveThunkCompleted, this.i9.on(this));
				if (!this.h3.o()) {
					this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this));
				}

			} else {
				var d = $.ig.Date.prototype.now();
				this.h3 = new $.ig.KDTree2D(0, b, 1);
				var e = $.ig.Date.prototype.now();
			}
		}
		if (this.progressiveLoad() && !this.useBruteForce()) {
			this.i8();

		} else {
			this.i7();
		}
	}
, 
	h9: null, 
	ia: null, 
	ib: null, 
	ic: null
, 
	i6: function () {
		var a = this.ii * this.ij;
		if (this.h8) {
			if (this.__itemIndexes == null || this.__itemIndexes.length != a) {
				this.__itemIndexes = new Array(a);
				for (var b = 0; b < a; b++) {
					this.__itemIndexes[b] = 0;
				}

			} else {
				for (var c = 0; c < a; c++) {
					this.__itemIndexes[c] = 0;
				}
			}
		}
	}

, 
	i7: function () {
		var $self = this;
		var a;
		var b;
		(function () { var $ret = $self.getViewInfo(b, a); b = $ret.viewportRect; a = $ret.windowRect; return $ret.ret; }());
		this.h4 = new $.ig.ScalerParams(this.seriesViewer().actualWindowRect(), b, this.h6.isInverted());
		this.h4.c = this.seriesViewer().effectiveViewport();
		this.h5 = new $.ig.ScalerParams(this.seriesViewer().actualWindowRect(), b, this.h7.isInverted());
		this.h5.c = this.seriesViewer().effectiveViewport();
		this.ji();
		this.i6();
		this.h9 = Math.round(this.resolution());
		this.ic = this.useSquareCutoffStyle();
		this.ik = this.i1().cx();
		for (var c = 0; c < this.ik.length; c++) {
			this.ik[c] = 0;
		}
		if (this.useBruteForce()) {
			this.ja();

		} else {
			this.jb();
		}
		this.i1().cy();
	}

, 
	i8: function () {
			this.i7();
	}
, 
	progressiveLoadStatusChanged: null
, 
	i9: function (a, b) {
		var $self = this;
		this.i1().cz(function () {
			$.ig.Debug.prototype.b("thunk");
			if ($self.ib < $self.ia - 1) {
				$self.ib++;
			}
			if ($self.progressiveLoadStatusChanged != null) {
				$self.progressiveLoadStatusChanged($self, new $.ig.ProgressiveLoadStatusEventArgs((($self.ib / $self.ia) * 100)));
			}
			$self.i8();
			if (!$self.h3.o()) {
				$self.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove($self.h3.progressiveThunkCompleted, $self.i9.on($self));
				if ($self.progressiveLoadStatusChanged != null) {
					$self.progressiveLoadStatusChanged($self, new $.ig.ProgressiveLoadStatusEventArgs(100));
				}
			}
		});
	}

, 
	ja: function () {
		var a = this.iz().asArray().clone();
		this.xAxis().getScaledValueList(a, 0, a.length, this.h4);
		var b = this.i0().asArray().clone();
		this.yAxis().getScaledValueList(b, 0, b.length, this.h5);
		for (var c = 0; c < a.length; c++) {
			var d = a[c];
			var e = b[c];
			d = Math.floor(d);
			e = Math.floor(e);
			if (d < 0 || d >= this.ii || e < 0 || e >= this.ij) {
				continue;
			}
			var f = (e * 4 * this.ii) + d * 4;
			this.ik[f] = 0;
			this.ik[f + 1] = 0;
			this.ik[f + 2] = 0;
			this.ik[f + 3] = 255;
			this.il++;
			if (this.h8) {
				this.__itemIndexes[f] = c + 1;
			}
		}
	}
, 
	ie: null
, 
	jb: function () {
		var $self = this;
		if (this.ie == null) {
			this.ie = new $.ig.List$1($.ig.KDTreeNode2D.prototype.$type, 2, Math.round(this.d6().width() * this.d6().height()));

		} else {
			this.ie.clear();
		}
		var a = this.xAxis().getUnscaledValue(this.d6().left(), this.h4);
		var b = this.xAxis().getUnscaledValue(this.d6().right(), this.h4);
		var c = this.yAxis().getUnscaledValue(this.d6().bottom(), this.h5);
		var d = this.yAxis().getUnscaledValue(this.d6().top(), this.h5);
		var e = Math.abs(this.xAxis().getUnscaledValue(this.d6().left() + this.resolution(), this.h4) - this.xAxis().getUnscaledValue(this.d6().left(), this.h4));
		var f = Math.abs(this.yAxis().getUnscaledValue(this.d6().top() + this.resolution(), this.h5) - this.yAxis().getUnscaledValue(this.d6().top(), this.h5));
		var g = Math.min(e, f);
		var h = (function () { var $ret = new $.ig.SearchArgs();
$ret.a = a;
$ret.c = b;
$ret.b = c;
$ret.d = d;
$ret.e = e;
$ret.f = f;
$ret.g = $.ig.Number.prototype.MAX_VALUE; return $ret;}());
		this.h3.y(this.ie, h, this.xAxis().actualMinimumValue(), this.xAxis().actualMaximumValue(), this.yAxis().actualMinimumValue(), this.yAxis().actualMaximumValue());
		$.ig.Debug.prototype.b("nodes returned: " + this.ie.count());
		var i;
		this.ig = this.heatMinimum();
		this.ih = this.heatMaximum();
		this.il = 0;
		for (var j = 0; j < this.ie.count(); j++) {
			i = this.ie.__inner[j];
			this.jc(i);
		}
		$.ig.Debug.prototype.b("rendered: " + this.il);
	}
, 
	ig: null, 
	ih: null
, 
	jc: function (a) {
		if (a.a) {
			return;
		}
		var b = a.h != null && a.h.a;
		var c = a.g == null ? 0 : a.g.length;
		var d = (a.c - c);
		if (d > 0) {
			d = (d - this.ig) / (this.ih - this.ig);
			if (d < 0) {
				d = 0;
			}
			if (d > 1) {
				d = 1;
			}

		} else {
			d = 0;
		}
		this.jd(a.d, d, b, a.c, a.h);
		if (c > 0 && !b) {
			var e;
			for (var f = 0; f < c; f++) {
				e = a.g[f];
				this.jd(e, 0, false, a.c, a.h);
			}
		}
		if (a.h != null) {
			a.h.a = false;
		}
	}

, 
	jd: function (a, b, c, d, e) {
		var f = this.jf(b);
		var g = a.c;
		if (c) {
			if (this.ic) {
				var h = this.h6.getScaledValue(a.a, this.h4);
				var i = this.h7.getScaledValue(a.b, this.h5);
				h = Math.floor(h);
				i = Math.floor(i);
				var j = $.ig.intDivide(this.h9, 2);
				var k = this.h9 - j;
				var l = this.h9 - k;
				var m = this.h9 * this.h9;
				var n = d / m;
				var o = this.je(b, n);
				for (var p = h - l; p < h + k; p++) {
					for (var q = i - l; q < i + k; q++) {
						this.jh(g, p, q, o, b);
					}
				}

			} else {
				var r = this.h6.getScaledValue(e.b, this.h4);
				var s = this.h6.getScaledValue(e.c, this.h4);
				var t = this.h7.getScaledValue(e.d, this.h5);
				var u = this.h7.getScaledValue(e.e, this.h5);
				r = Math.floor(r);
				s = Math.floor(s);
				u = Math.floor(u);
				t = Math.floor(t);
				var v = (s - r + 1) * (t - u + 1);
				var w = d / v;
				if (w > 1) {
					w = 1;
				}
				if (w < 0.2) {
					w = 0.2;
				}
				var x = this.je(b, w);
				for (var y = r; y <= s; y++) {
					for (var z = u; z <= t; z++) {
						this.jh(g, y, z, x, b);
					}
				}
			}

		} else {
			var aa = this.h6.getScaledValue(a.a, this.h4);
			var ab = this.h7.getScaledValue(a.b, this.h5);
			aa = Math.floor(aa);
			ab = Math.floor(ab);
			this.jh(g, aa, ab, f, b);
		}
	}

, 
	je: function (a, b) {
		return (Math.floor(255 * b)) << 24 | Math.floor(a * b * 255) << 16 | 0 << 8 | 0;
	}

, 
	jf: function (a) {
		return 255 << 24 | Math.floor(a * 255) << 16 | 0 << 8 | 0;
	}

, 
	jg: function (a) {
		return (a >> 24 & 255) / 255;
	}

, 
	jh: function (a, b, c, d, e) {
		if (b < 0 || b >= this.ii || c < 0 || c >= this.ij) {
			return;
		}
		var f = (c * 4 * this.ii) + b * 4;
		var g = this.ik[f];
		if (g <= e) {
			this.ik[f] = d >> 16 & 255;
			this.ik[f + 1] = d >> 8 & 255;
			this.ik[f + 2] = d & 255;
			this.ik[f + 3] = d >> 24 & 255;
		}
		if (this.h8) {
			this.__itemIndexes[$.ig.intDivide(f, 4)] = a + 1;
		}
		this.il++;
	}
, 
	ii: null, 
	ij: null, 
	ik: null, 
	il: null
, 
	ji: function () {
		this.i1().cw();
	}

, 
	ed: function () {
		return new $.ig.HighDensityScatterSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.Series.prototype.ea.call(this, a);
		this.i1(a);
	}

, 
	_i1: null,
	i1: function (a) {
		if (arguments.length === 1) {
			this._i1 = a;
			return a;
		} else {
			return this._i1;
		}
	}

, 
	em: function (a) {
		if (a != null && a == this.xAxis() && this.iz() != null) {
			return new $.ig.AxisRange(this.iz().minimum(), this.iz().maximum());
		}
		if (a != null && a == this.yAxis() && this.i0() != null) {
			return new $.ig.AxisRange(this.i0().minimum(), this.i0().maximum());
		}
		return null;
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
	__itemIndexes: null
, 
	eh: function (a) {
		if (!this.h8 || this.__itemIndexes == null || this.__itemIndexes.length != (this.ii * this.ij)) {
			return null;
		}
		var b = this.seriesViewer().windowRect();
		var c = (a.__x - b.left()) / b.width();
		var d = (a.__y - b.top()) / b.height();
		var e = Math.round((this.d6().width() * c));
		var f = Math.round((this.d6().height() * d));
		var g = (this.ii * f) + e;
		if (g < 0 || g > this.__itemIndexes.length - 1) {
			return null;
		}
		var h = this.__itemIndexes[g] - 1;
		if (h < 0 || h > this.dx().g()) {
			return null;
		}
		return this.dx().item(h);
	}
, 
	scatterMouseOver: null
, 
	jl: function (a, b, c) {
		this.ik = a;
		this.ii = b;
		this.ij = c;
	}

, 
	d3: function () {
			return true;
	}
,
	$type: new $.ig.Type('HighDensityScatterSeries', $.ig.Series.prototype.$type)
}, true);



$.ig.util.defType('ProgressiveLoadStatusEventArgs', 'EventArgs', {

	_currentStatus: null,
	currentStatus: function (a) {
		if (arguments.length === 1) {
			this._currentStatus = a;
			return a;
		} else {
			return this._currentStatus;
		}
	}

, 
		init: function (a) {


			$.ig.EventArgs.prototype.init.call(this);
						this.currentStatus(a);
		},
	$type: new $.ig.Type('ProgressiveLoadStatusEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

$.ig.util.defType('HighDensityScatterSeriesView', 'SeriesView', {

		init: function (a) {


			$.ig.SeriesView.prototype.init.call(this, a);
						this.ck(a);
		}
, 
	ag: function () {
		$.ig.SeriesView.prototype.ag.call(this);
		if (!this.ad()) {
			this.u().resolution(4);
		}
	}

, 
	_ck: null,
	ck: function (a) {
		if (arguments.length === 1) {
			this._ck = a;
			return a;
		} else {
			return this._ck;
		}
	}
, 
	cd: null, 
	ce: null, 
	cf: null
, 
	_cl: null,
	cl: function (a) {
		if (arguments.length === 1) {
			this._cl = a;
			return a;
		} else {
			return this._cl;
		}
	}

, 
	_cm: null,
	cm: function (a) {
		if (arguments.length === 1) {
			this._cm = a;
			return a;
		} else {
			return this._cm;
		}
	}

, 
	_cn: null,
	cn: function (a) {
		if (arguments.length === 1) {
			this._cn = a;
			return a;
		} else {
			return this._cn;
		}
	}

, 
	cw: function () {
		if (this.cl() == null) {
			this.cl($("<canvas></canvas>"));
			var a = (this.cl()[0]).getContext("2d");
			this.cn(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), a));
		}
		var b = this.u().seriesViewer().getContainerRect();
		var c = Math.round(b.left());
		var d = Math.round(b.top());
		var e = Math.round(b.width());
		var f = Math.round(b.height());
		this.ce = e;
		this.cf = f;
		this.cl().attr("width", e.toString());
		this.cl().attr("height", f.toString());
		this.cm((this.cn().c()).getImageData(0, 0, e, f));
		this.cd = this.cm().data;
		this.ck().jl(this.cd, this.ce, this.cf);
	}

, 
	cx: function () {
		return this.cd;
	}

, 
	cy: function () {
		var a = Math.round(this.ab().left());
		var b = Math.round(this.ab().left());
		var c = Math.round(this.ab().width());
		var d = Math.round(this.ab().height());
		(this.cn().c()).putImageData(this.cm(), 0, 0);
		this.an();
	}

, 
	cz: function (a) {
		window.setTimeout(a, 0);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (b) {
			if (!this.ck().mouseOverEnabled()) {
				return;
			}
			var c = new $.ig.Rectangle();
			c.y(this.ab().left());
			c.x(this.ab().top());
			c.v(this.ab().width());
			c.w(this.ab().height());
			c.__fill = this.az();
			a.f(c);
			return;
		}
		if (this.cl() == null) {
			return;
		}
		var d = Math.round(this.ab().left());
		var e = Math.round(this.ab().top());
		var f = Math.round(this.ab().width());
		var g = Math.round(this.ab().height());
		this.z().u(this.cl()[0], d, e, f, g, d, e, f, g);
	}
,
	$type: new $.ig.Type('HighDensityScatterSeriesView', $.ig.SeriesView.prototype.$type)
}, true);

$.ig.util.defType('KDTree2D', 'Object', {

		init: function (initNumber, a, b) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}

			this.d = 0;
			this.e = {};
			this.g = new $.ig.Random();

			$.ig.Object.prototype.init.call(this);
							this.j(this.r(a, 0, a.length - 1, 0, b));
		}
, 
		init1: function (initNumber) {

			this.d = 0;
			this.e = {};
			this.g = new $.ig.Random();

			$.ig.Object.prototype.init.call(this);
		}, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null
, 
	i: function () {
			return this.e;
	}
, 
	progressiveThunkCompleted: null
, 
	n: function (a, b) {
		var $self = this;
		var c = new $.ig.KDTree2D(1);
		c.j(new $.ig.KDTreeNode2D());
		c.j().a = true;
		c.a = a;
		c.b = new $.ig.Stack$1($.ig.KDTreeThunk.prototype.$type);
		c.c = new $.ig.List$1($.ig.KDTreeThunk.prototype.$type, 0);
		c.b.c((function () { var $ret = new $.ig.KDTreeThunk();
		$ret.a = 0;
		$ret.b = a.length - 1;
		$ret.c = 0;
		$ret.d = b;
		$ret.e = c.j(); return $ret;}()));
		return c;
	}

, 
	o: function () {
			if (this.b.b() == 0) {
				this.a = null;
				return false;
			}
			this.d = this.b.d().c;
			while (this.b.b() > 0 && this.b.d().c == this.d) {
				this.c.add(this.b.e());
			}
			window.setTimeout(this.p.on(this), 0);
			return true;
	}

, 
	p: function () {
			var a;
			for (var b = 0; b < this.c.count(); b++) {
				a = this.c.__inner[b];
				this.q(a.e, this.a, a.a, a.b, a.c, a.d);
			}
			this.c.clear();
		if (this.progressiveThunkCompleted != null) {
			this.progressiveThunkCompleted(this, new $.ig.EventArgs());
		}
	}

, 
	q: function (a, b, c, d, e, f) {
		var $self = this;
		a.a = false;
		a.b = (e % 2) == 0;
		a.c = d - c;
		if (c == d) {
			a.d = b[c];
			return;
		}
		if (c > d) {
			return;
		}
		if (d - c + 1 <= f) {
			a.d = b[c];
			a.g = new Array(d - c + 1);
			var g = 0;
			for (var h = c; h <= d; h++) {
				a.g[g++] = b[h];
			}
			return;
		}
		var i = Math.max($.ig.intDivide((d - c), 2), 1);
		var j = this.t(b, c, d, a.b, i);
		a.d = b[j];
		if (c <= j - 1) {
			a.e = (function () { var $ret = new $.ig.KDTreeNode2D();
			$ret.a = true; return $ret;}());
			a.c = (j - 1) - c + 1;
			this.b.c((function () { var $ret = new $.ig.KDTreeThunk();
			$ret.a = c;
			$ret.b = j - 1;
			$ret.c = e + 1;
			$ret.d = f;
			$ret.e = a.e; return $ret;}()));

		} else {
			a.e = null;
		}
		if (j + 1 <= d) {
			a.f = (function () { var $ret = new $.ig.KDTreeNode2D();
			$ret.a = true; return $ret;}());
			a.c = d - (j + 1) + 1;
			this.b.c((function () { var $ret = new $.ig.KDTreeThunk();
			$ret.a = j + 1;
			$ret.b = d;
			$ret.c = e + 1;
			$ret.d = f;
			$ret.e = a.f; return $ret;}()));

		} else {
			a.f = null;
		}
	}

, 
	r: function (a, b, c, d, e) {
		var f = new $.ig.KDTreeNode2D();
		f.b = (d % 2) == 0;
		f.c = c - b;
		if (b == c) {
			f.d = a[b];
			return f;
		}
		if (b > c) {
			return null;
		}
		if (c - b + 1 <= e) {
			f.d = a[b];
			f.g = new Array(c - b + 1);
			var g = 0;
			for (var h = b; h <= c; h++) {
				f.g[g++] = a[h];
			}
			return f;
		}
		var i = Math.max($.ig.intDivide((c - b), 2), 1);
		var j = this.t(a, b, c, f.b, i);
		f.d = a[j];
		f.e = this.r(a, b, j - 1, d + 1, e);
		f.f = this.r(a, j + 1, c, d + 1, e);
		return f;
	}

, 
	s: function (a, b, c, d, e) {
		var f = b ? a[e].a : a[e].b;
		var g = a[e];
		a[e] = a[d];
		a[d] = g;
		var h = c;
		for (var i = c; i < d; i++) {
			var j;
			if (b) {
				j = a[i].a;

			} else {
				j = a[i].b;
			}
			if (j <= f) {
				g = a[h];
				a[h] = a[i];
				a[i] = g;
				h++;
			}
		}
		g = a[d];
		a[d] = a[h];
		a[h] = g;
		return h;
	}
, 
	g: null
, 
	t: function (a, b, c, d, e) {
		if (b == c) {
			return b;
		}
		var f = this.g.c(b, c);
		var g = this.s(a, d, b, c, f);
		var h = g - b + 1;
		if (h == e) {
			return g;
		} else if (e < h) {
			return this.t(a, b, g - 1, d, e);

		} else {
			return this.t(a, g + 1, c, d, e - h);
		}
	}

, 
	u: function (a, b, c, d) {
			this.v(a, b, c, d, this.j());
	}

, 
	v: function (a, b, c, d, e) {
		if (e == null || e.a) {
			return;
		}
		if (e.e == null && e.f == null) {
			this.w(a, b, c, e, e.d, true, 0, d);
			if (a.d) {
				return;
			}
			if (e.g != null && e.g.length > 0) {
				for (var f = 0; f < e.g.length; f++) {
					this.w(a, b, c, e, e.g[f], false, f, d);
					if (a.d) {
						return;
					}
				}
			}
			return;
		}
		this.w(a, b, c, e, e.d, true, 0, d);
		if (a.d) {
			return;
		}
		if (e.b) {
			if (b <= e.d.a) {
				this.v(a, b, c, d, e.e);
				if (a.d) {
					return;
				}
				if (this.x(b, c, e.d.a, c) < a.f) {
					this.v(a, b, c, d, e.f);
				}
				if (a.d) {
					return;
				}

			} else {
				this.v(a, b, c, d, e.f);
				if (a.d) {
					return;
				}
				if (this.x(b, c, e.d.a, c) < a.f) {
					this.v(a, b, c, d, e.e);
				}
				if (a.d) {
					return;
				}
			}

		} else {
			if (c <= e.d.b) {
				this.v(a, b, c, d, e.e);
				if (a.d) {
					return;
				}
				if (this.x(b, c, b, e.d.b) < a.f) {
					this.v(a, b, c, d, e.f);
				}
				if (a.d) {
					return;
				}

			} else {
				this.v(a, b, c, d, e.f);
				if (a.d) {
					return;
				}
				if (this.x(b, c, b, e.d.b) < a.f) {
					this.v(a, b, c, d, e.e);
				}
				if (a.d) {
					return;
				}
			}
		}
	}

, 
	w: function (a, b, c, d, e, f, g, h) {
		var $self = this;
		if (a.d) {
			return;
		}
		if (a.a > a.b) {
			a.d = true;
			return;
		}
		if (a.c.count() < h) {
			if (isNaN(a.e)) {
				a.e = this.x(b, c, e.a, e.b);
				a.f = a.e;
				a.g = 0;
			}
			a.c.add((function () { var $ret = new $.ig.KNearestResult();
			$ret.b = f;
			$ret.a = g;
			$ret.e = d;
			$ret.c = e.a;
			$ret.d = e.b; return $ret;}()));
			a.a++;
			var i = this.x(b, c, e.a, e.b);
			if (i < a.e) {
				a.e = i;
			}
			if (i > a.f) {
				a.f = i;
				a.g = a.c.count() - 1;
			}
			return;
		}
		var j = 0;
		if (j < a.f) {
			if (j < a.e) {
				a.e = j;
			}
			a.c.__inner[a.g] = (function () { var $ret = new $.ig.KNearestResult();
			$ret.b = f;
			$ret.a = g;
			$ret.e = d;
			$ret.c = e.a;
			$ret.d = e.b; return $ret;}());
			var k = 0;
			var l = 0;
			for (var m = 0; m < a.c.count(); m++) {
				var n = this.x(b, c, a.c.__inner[m].c, a.c.__inner[m].d);
				if (n > k) {
					k = n;
					l = m;
				}
			}
			a.a++;
		}
	}

, 
	x: function (a, b, c, d) {
		return (a - c) * (a - c) + (b - d) * (b - d);
	}

, 
	y: function (a, b, c, d, e, f) {
			this.z(a, this.j(), b, c, d, e, f, false, 0);
	}

, 
	z: function (a, b, c, d, e, f, g, h, i) {
		if (b == null) {
			return;
		}
		if (i > c.g || ((g - f) < c.f && (e - d) < c.e)) {
			if (b.h == null) {
				b.h = new $.ig.SearchData();
			}
			var j = b.h;
			j.a = true;
			j.b = d;
			j.c = e;
			j.d = f;
			j.e = g;
			a.add(b);
			return;
		}
		if (b.e == null && b.f == null) {
			a.add(b);
			return;
		}
		var k;
		var l;
		var m;
		var n;
		var o;
		var p;
		var q;
		var r;
		if (b.b) {
			k = d;
			l = b.d.a;
			m = f;
			n = g;
			o = b.d.a;
			p = e;
			q = f;
			r = g;

		} else {
			k = d;
			l = e;
			m = f;
			n = b.d.b;
			o = d;
			p = e;
			q = b.d.b;
			r = g;
		}
		if (h) {
			a.add(b);
			this.z(a, b.e, c, k, l, m, n, true, i + 1);
			this.z(a, b.f, c, o, p, q, r, true, i + 1);

		} else {
			if (k >= c.a && l <= c.c && m >= c.b && n <= c.d) {
				this.z(a, b.e, c, k, l, m, n, true, i + 1);
			} else if (!(c.a > l || c.c < k || c.b > n || c.d < m)) {
				a.add(b);
				this.z(a, b.e, c, k, l, m, n, false, i + 1);
			}
			if (o >= c.a && p <= c.c && q >= c.b && r <= c.d) {
				this.z(a, b.f, c, o, p, q, r, true, i + 1);
			} else if (!(c.a > p || c.c < o || c.b > r || c.d < q)) {
				a.add(b);
				this.z(a, b.f, c, o, p, q, r, false, i + 1);
			}
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
	$type: new $.ig.Type('KDTree2D', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('KNearestResults', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null, 
	f: null, 
	g: null,
	$type: new $.ig.Type('KNearestResults', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('KNearestResult', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null,
	$type: new $.ig.Type('KNearestResult', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('KDTreeThunk', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null,
	$type: new $.ig.Type('KDTreeThunk', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SearchArgs', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null, 
	f: null, 
	g: null,
	$type: new $.ig.Type('SearchArgs', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('KDTreeNode2D', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null, 
	f: null, 
	g: null, 
	h: null,
	$type: new $.ig.Type('KDTreeNode2D', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SearchData', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null,
	$type: new $.ig.Type('SearchData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PointData', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null,
	$type: new $.ig.Type('PointData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ScatterLineSeries', 'ScatterBase', {

		init: function () {

			var $self = this;

			$.ig.ScatterBase.prototype.init.call(this);
						this.a3($.ig.ScatterLineSeries.prototype.$type);
				this.i3 = new $.ig.ScatterFrame();
				this.i4 = new $.ig.ScatterFrame();
				this.i5 = new $.ig.ScatterFrame();
				var g = function (a, b, c) {
	var d = $self.dx().item(a.e());
	if (d == -1 || d == 0) {
		return a;
	}
	var e = $self.dx().item(d - 1);
	var f;
	if (!(function () { var $ret = b.u().tryGetValue(e, f); f = $ret.value; return $ret.ret; }())) {
		return a;
	}
	return f;
};
				this.i3.s(g);
				this.i4.s(g);
				this.i5.s(g);
		}
, 
	ed: function () {
		return new $.ig.ScatterLineSeriesView(this);
	}

, 
	j6: function (a, b) {
		var $self = this;
		$.ig.ScatterBase.prototype.j6.call(this, a, b);
		a.v().clear();
		a.a5().clear();
		var c = b.ac();
		var d = b.ab();
		var e = this.resolution() * this.resolution();
		var f = 0;
		if (this.jp() != null) {
			f = this.jp().count();
		}
		if (this.jq() != null) {
			f = Math.min(this.jq().count(), f);
		}
		var g = new $.ig.ScalerParams(c, d, this.jo().h());
		var h = new $.ig.ScalerParams(c, d, this.jo().i());
		var j = function (i) { return $self.jo().f().getScaledValue($self.jp().item(i), g)};
		var l = function (k) { return $self.jo().g().getScaledValue($self.jq().item(k), h)};
		var m = d.top() - 10;
		var n = d.bottom() + 10;
		var o = d.left() - 10;
		var p = d.right() + 10;
		var q = (function () { var $ret = new $.ig.Clipper(1, o, n, p, m, false);
$ret.h(a.v()); return $ret;}());
		for (var r = 0; r < f; ) {
			var s = r;
			++r;
			if (f > this.maximumMarkers()) {
				while (r < f && this.ky(j, l, s, r) < e) {
					++r;
				}
				q.l(this.kx(j, l, s, r - 1));

			} else {
				var t = new $.ig.OwnedPoint();
				t.d({__x: j(s), __y: l(s), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				t.e(this.dx().item(s));
				if (!a.a5().containsKey(t.e())) {
					a.a5().add(t.e(), t);
				}
			}
		}
		if (f > this.maximumMarkers()) {
			q.h(null);
		}
	}

, 
	kx: function (a, b, c, d) {
		if (c == d) {
			return {__x: a(c), __y: b(c), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
		var e = 0;
		var f = 0;
		var g = (d - c + 1);
		for (var h = c; h <= d; ++h) {
			e += a(h);
			f += b(h);
		}
		return {__x: e / g, __y: f / g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	ky: function (a, b, c, d) {
		var e = a(d) - a(c);
		var f = b(d) - b(c);
		return e * e + f * f;
	}

, 
	j7: function (a, b) {
		var $self = this;
		b.ee(false);
		$.ig.ScatterBase.prototype.j7.call(this, a, b);
		var c = new $.ig.Rect(0, b.ab().left(), b.ab().top(), b.ab().width(), b.ab().height());
		c.inflate(this.thickness(), this.thickness());
		this.j4(a, new $.ig.Clipper(0, c, false));
		var d = $.ig.util.cast($.ig.ScatterLineSeriesView.prototype.$type, b);
		this.kz(d.ei, a.v().count(), function (e) { return a.v().__inner[e].__x		}, function (f) { return a.v().__inner[f].__y		}, this.unknownValuePlotting(), this.resolution());
	}

, 
	kz: function (a, b, c, d, e, f) {
		var $self = this;
		var g = new $.ig.PathGeometry();
		a.bp(g);
		g.d(new $.ig.PathFigureCollection());
		var h = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
		var i = 0;
		for (var j = 0; j < b; j++) {
			if (isNaN(c(j)) || isNaN(d(j))) {
				var k = j - i;
				if (k > 0) {
					if (e == $.ig.UnknownValuePlotting.prototype.dontPlot || h.count() == 0) {
						var l = new $.ig.PolyLineSegment();
						h.add(l);
					}
					this.k1(h.__inner[h.count() - 1].__points, i, j - 1, c, d, f);
				}
				i = j + 1;
			}
		}
		if (e == $.ig.UnknownValuePlotting.prototype.dontPlot || h.count() == 0) {
			var m = new $.ig.PolyLineSegment();
			h.add(m);
		}
		this.k1(h.__inner[h.count() - 1].__points, i, b - 1, c, d, f);
		for (var n = 0; n < h.count(); n++) {
			var o = h.__inner[n];
			if (o.__points.count() > 0) {
				var p = (function () { var $ret = new $.ig.PathFigure();
$ret.__startPoint = o.__points.__inner[0]; return $ret;}());
				p.__segments.add(o);
				g.d().add(p);
			}
		}
	}

, 
	k0: function (a, b, c, d, e, f) {
		var g = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		var h = d;
		var i = e;
		var j = i - h + 1;
		while (j > 0) {
			if (j <= $.ig.ScatterLineSeries.prototype.ku) {
				$.ig.Flattener.prototype.d(g, b, c, h, i, f);
				h = i + 1;

			} else {
				var k = h + $.ig.ScatterLineSeries.prototype.ku - 1;
				$.ig.Flattener.prototype.d(g, b, c, h, k, f);
				h = k + 1;
			}
			j = i - h + 1;
		}
		return g;
	}

, 
	k1: function (a, b, c, d, e, f) {
		if (c > -1) {
			var g = this.resolution();
			var h = this.k0(new $.ig.List$1($.ig.Number.prototype.$type, 0), d, e, b, c, g);
			var i;
			for (var j = 0; j < h.count(); j++) {
				i = h.item(j);
				a.add({__x: d(i), __y: e(i), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
		}
	}

, 
	unknownValuePlotting: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterLineSeries.prototype.unknownValuePlottingProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterLineSeries.prototype.unknownValuePlottingProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.ScatterBase.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.ScatterLineSeries.prototype.kv:
				this.renderSeries(false);
				this.e5();
				break;
		}
	}
,
	$type: new $.ig.Type('ScatterLineSeries', $.ig.ScatterBase.prototype.$type)
}, true);

$.ig.util.defType('ScatterLineSeriesView', 'ScatterBaseView', {

		init: function (a) {

			this.ei = new $.ig.Path();

			$.ig.ScatterBaseView.prototype.init.call(this, a);
		}, 
	ei: null
, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.ei.__stroke = this.u().actualBrush();
		this.ei.a7(this.u().thickness());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.ei.__stroke = a;
		this.ei.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			a.g(this.ei);
		}
	}

, 
	ee: function (a) {
		$.ig.ScatterBaseView.prototype.ee.call(this, a);
		this.ei.bp(null);
	}
,
	$type: new $.ig.Type('ScatterLineSeriesView', $.ig.ScatterBaseView.prototype.$type)
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



$.ig.util.defType('ScatterTrendLineManager', 'TrendLineManagerBase$1', {
	init: function () {

		$.ig.TrendLineManagerBase$1.prototype.init.call(this, $.ig.Point.prototype.$type);

	}
, 
	af: function (a, b, c, d, e, f, g, h, i, j, k) {
		var $self = this;
		var l = j;
		var m = k;
		var n = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		var o = 0;
		if (c != null) {
			o = c.count();
		}
		if (d != null) {
			o = Math.min(o, d.count());
		}
		if (!h.l().isEmpty() && !h.k().isEmpty()) {
			if (b == $.ig.TrendLineType.prototype.none) {
				this.m(null);
				this.l().clear();
			} else if (this.u(b)) {
				this.l().clear();
				this.m($.ig.TrendFitCalculator.prototype.a(n, b, h, this.m(), o, function (p) { return c.item(p)				}, function (q) { return d.item(q)				}, f, g, l, m));
			} else if (this.v(b)) {
				this.m(null);
				this.l().clear();
				$.ig.TrendAverageCalculator.prototype.c(b, this.l(), c, d, e);
				var s = this.l().getEnumerator();
				while (s.moveNext()) {
					var r = s.current();
					var t = f(r.__x);
					var u = g(r.__y);
					if (!isNaN(t) && !isNaN(u)) {
						n.add({__x: t, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					}
				}
			}
			this.y(n, h, a, i);
		}
	}
,
	$type: new $.ig.Type('ScatterTrendLineManager', $.ig.TrendLineManagerBase$1.prototype.$type.specialize($.ig.Point.prototype.$type))
}, true);


$.ig.util.defType('ErrorBarSettingsBase', 'DependencyObject', {

		init: function () {


			$.ig.DependencyObject.prototype.init.call(this);
						this.j(new $.ig.Style());
		}
, 
	j: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ErrorBarSettingsBase.prototype.f, a);
			return a;
		} else {
			return this.b($.ig.ErrorBarSettingsBase.prototype.f);
		}
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	o: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}
,
	$type: new $.ig.Type('ErrorBarSettingsBase', $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);


$.ig.util.defType('ErrorBarsHelper', 'Object', {

		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.c(a);
				this.d(b);
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
	i: function (a) {
		var b = a.getCalculatorType();
		if (b == $.ig.ErrorBarCalculatorType.prototype.percentage || b == $.ig.ErrorBarCalculatorType.prototype.data) {
			return false;

		} else {
			return true;
		}
	}

, 
	j: function (a, b) {
		if (a.hasConstantPosition()) {
			b = a.getPosition();
		}
		return {
			position: b
		};
	}

, 
	k: function (a, b, c) {
		var $self = this;
		var d;
		var e;
		(function () { var $ret = $self.d().getViewInfo(e, d); e = $ret.viewportRect; d = $ret.windowRect; return $ret.ret; }());
		var f = new $.ig.ScalerParams(d, e, b.isInverted());
		var g = b.getScaledValue(b.referenceValue(), f);
		var h = a.getIndependentValue();
		c = Math.abs(Math.round(g - b.getScaledValue(h, f)));
		return {
			errorBarSize: c
		};
	}

, 
	l: function (a, b, c, d) {
		var $self = this;
		var e;
		var f;
		(function () { var $ret = $self.d().getViewInfo(f, e); f = $ret.viewportRect; e = $ret.windowRect; return $ret.ret; }());
		var g = new $.ig.ScalerParams(e, f, c.isInverted());
		var h = c.getUnscaledValue(a, g);
		var i = b.getDependentValue(h);
		var j = c.getScaledValue(c.referenceValue(), g);
		d = Math.abs(Math.round(j - c.getScaledValue(i, g)));
		return {
			errorBarSize: d
		};
	}

, 
	m: function (a, b, c, d, e) {
		var $self = this;
		var f;
		var g;
		(function () { var $ret = $self.d().getViewInfo(g, f); g = $ret.viewportRect; f = $ret.windowRect; return $ret.ret; }());
		var h = new $.ig.ScalerParams(f, g, c.isInverted());
		var i = new $.ig.ScalerParams(f, g, d.isInverted());
		var j = c.getUnscaledValue(a, h);
		var k = b.getDependentValue(j);
		var l = d.getScaledValue(d.referenceValue(), i);
		e = Math.abs(Math.round(l - d.getScaledValue(k, i)));
		return {
			errorBarSize: e
		};
	}

, 
	n: function (a, b, c) {
		var $self = this;
		var d;
		var e;
		(function () { var $ret = $self.d().getViewInfo(e, d); e = $ret.viewportRect; d = $ret.windowRect; return $ret.ret; }());
		var f = new $.ig.ScalerParams(d, e, b.isInverted());
		var g = b.getScaledValue(b.referenceValue(), f);
		c = Math.abs(Math.round(g - b.getScaledValue(a, f)));
		return {
			errorBarSize: c
		};
	}

, 
	o: function (a, b, c, d) {
	}

, 
	p: function (a, b, c, d) {
	}

, 
	q: function (a, b, c, d) {
		var $self = this;
		var e = new $.ig.Point(0);
		if (a.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.standardDeviation) {
			var f;
			var g;
			(function () { var $ret = $self.d().getViewInfo(g, f); g = $ret.viewportRect; f = $ret.windowRect; return $ret.ret; }());
			var h = new $.ig.ScalerParams(f, g, b.isInverted());
			e.__x = Math.round(b.getScaledValue(d, h));
			e.__y = Math.round(c.__y);

		} else {
			e.__x = Math.round(c.__x);
			e.__y = Math.round(c.__y);
		}
		return e;
	}

, 
	r: function (a, b, c, d) {
		var $self = this;
		var e = new $.ig.Point(0);
		if (a.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.standardDeviation) {
			var f;
			var g;
			(function () { var $ret = $self.d().getViewInfo(g, f); g = $ret.viewportRect; f = $ret.windowRect; return $ret.ret; }());
			var h = new $.ig.ScalerParams(f, g, b.isInverted());
			e.__x = Math.round(c.__x);
			e.__y = Math.round(b.getScaledValue(d, h));

		} else {
			e.__x = Math.round(c.__x);
			e.__y = Math.round(c.__y);
		}
		return e;
	}
,
	$type: new $.ig.Type('ErrorBarsHelper', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ScatterErrorBarSettings', 'ErrorBarSettingsBase', {

		init: function () {


			$.ig.ErrorBarSettingsBase.prototype.init.call(this);
						this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, this.cg.on(this));
		}
, 
	a7: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.ae, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.ae);
		}
	}

, 
	a8: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.af, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.af);
		}
	}

, 
	a9: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.ag, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.ag);
		}
	}

, 
	ba: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.ah, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.ah);
		}
	}

, 
	bb: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.ai, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.ai);
		}
	}

, 
	bc: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.aj, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.aj);
		}
	}

, 
	bd: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.ak, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.ak);
		}
	}

, 
	be: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.al, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.al);
		}
	}

, 
	bf: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.am, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.am);
		}
	}

, 
	bg: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.an, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.an);
		}
	}

, 
	bh: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.ao, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.ao);
		}
	}

, 
	bi: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.ap, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.ap);
		}
	}

, 
	bj: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.aq, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.aq);
		}
	}

, 
	bk: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterErrorBarSettings.prototype.ar, a);
			return a;
		} else {
			return this.b($.ig.ScatterErrorBarSettings.prototype.ar);
		}
	}
, 
	as: null
, 
	bl: function (a) {
		if (arguments.length === 1) {
			this.as = a;
			return a;
		} else {
			return this.as;
		}
	}

, 
	cg: function (a, b) {
		var $self = this;
		switch (b.propertyName()) {
			case $.ig.ScatterErrorBarSettings.prototype.s:
			case $.ig.ScatterErrorBarSettings.prototype.z:
				var c = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, b.oldValue());
				if (c != null) {
					c.changed = $.ig.Delegate.prototype.remove(c.changed, this.ch.on(this));
				}
				if (this.bl() != null) {
					this.bl().renderSeries(false);
					if (this.bl().seriesViewer() != null) {
						this.bl().e5();
					}
				}
				var d = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, b.newValue());
				if (d != null) {
					d.changed = $.ig.Delegate.prototype.combine(d.changed, this.ch.on(this));
				}
				break;
			case $.ig.ScatterErrorBarSettings.prototype.q:
			case $.ig.ScatterErrorBarSettings.prototype.x:
			case $.ig.ScatterErrorBarSettings.prototype.r:
			case $.ig.ScatterErrorBarSettings.prototype.t:
			case $.ig.ScatterErrorBarSettings.prototype.w:
			case $.ig.ScatterErrorBarSettings.prototype.u:
			case $.ig.ScatterErrorBarSettings.prototype.v:
			case $.ig.ScatterErrorBarSettings.prototype.y:
			case $.ig.ScatterErrorBarSettings.prototype.aa:
			case $.ig.ScatterErrorBarSettings.prototype.ad:
			case $.ig.ScatterErrorBarSettings.prototype.ab:
			case $.ig.ScatterErrorBarSettings.prototype.ac:
				if (this.bl() != null) {
					this.bl().renderSeries(false);
					if (this.bl().seriesViewer() != null) {
						this.bl().e5();
					}
				}
				break;
		}
	}

, 
	ch: function (a, b) {
		var c = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, a);
		if (c != null) {
			c.changed = $.ig.Delegate.prototype.remove(c.changed, this.ch.on(this));
			if (this.bl() != null) {
				this.bl().renderSeries(false);
			}
			c.changed = $.ig.Delegate.prototype.combine(c.changed, this.ch.on(this));
		}
	}
,
	$type: new $.ig.Type('ScatterErrorBarSettings', $.ig.ErrorBarSettingsBase.prototype.$type)
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


























$.ig.util.defType('ScatterAxisInfoCache', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('ScatterAxisInfoCache', $.ig.Object.prototype.$type)
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

$.ig.util.defType('ScatterFrame', 'ScatterFrameBase$1', {

		init: function () {


			$.ig.ScatterFrameBase$1.prototype.init.call(this, $.ig.ScatterFrame.prototype.$type);
						this.a5(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
		}
, 
	_a5: null,
	a5: function (a) {
		if (arguments.length === 1) {
			this._a5 = a;
			return a;
		} else {
			return this._a5;
		}
	}

, 
	ad: function (a, b, c) {
		$.ig.ScatterFrameBase$1.prototype.ad.call(this, a, b, c);
		var d = $.ig.util.cast($.ig.ScatterFrame.prototype.$type, b);
		var e = $.ig.util.cast($.ig.ScatterFrame.prototype.$type, c);
		if (d == null || e == null) {
			return;
		}
		this.r().q(this.a5(), a, d.a5(), e.a5(), d, e);
	}
,
	$type: new $.ig.Type('ScatterFrame', $.ig.ScatterFrameBase$1.prototype.$type.specialize($.ig.ScatterFrame.prototype.$type))
}, true);

$.ig.util.defType('ScatterSeries', 'ScatterBase', {

	ed: function () {
		return new $.ig.ScatterSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.ScatterBase.prototype.ea.call(this, a);
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


			$.ig.ScatterBase.prototype.init.call(this);
						this.a3($.ig.ScatterSeries.prototype.$type);
				this.i3 = new $.ig.ScatterFrame();
				this.i4 = new $.ig.ScatterFrame();
				this.i5 = new $.ig.ScatterFrame();
		},
	$type: new $.ig.Type('ScatterSeries', $.ig.ScatterBase.prototype.$type)
}, true);

$.ig.util.defType('ScatterSeriesView', 'ScatterBaseView', {

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
		init: function (a) {


			$.ig.ScatterBaseView.prototype.init.call(this, a);
						this.ej(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.ScatterBaseView.prototype.ag.call(this);
		if (!this.ad()) {
			this.cg().markerType($.ig.MarkerType.prototype.automatic);
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.o);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
,
	$type: new $.ig.Type('ScatterSeriesView', $.ig.ScatterBaseView.prototype.$type)
}, true);



















































$.ig.EnableErrorBars.prototype.none = 0;
$.ig.EnableErrorBars.prototype.both = 1;
$.ig.EnableErrorBars.prototype.positive = 2;
$.ig.EnableErrorBars.prototype.negative = 3;
$.ig.CollisionAvoidanceType.prototype.none = 0;
$.ig.CollisionAvoidanceType.prototype.omit = 1;
$.ig.CollisionAvoidanceType.prototype.fade = 2;
$.ig.CollisionAvoidanceType.prototype.omitAndShift = 3;
$.ig.CollisionAvoidanceType.prototype.fadeAndShift = 4;
$.ig.BrushSelectionMode.prototype.select = 0;
$.ig.BrushSelectionMode.prototype.interpolate = 1;
$.ig.TrendLineManagerBase$1.prototype.a = "TrendLineDashArray";
$.ig.TrendLineManagerBase$1.prototype.b = "TrendLineType";
$.ig.TrendLineManagerBase$1.prototype.c = "TrendLinePeriod";
$.ig.TrendLineManagerBase$1.prototype.d = "TrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.e = "ActualTrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.f = "TrendLineThickness";
$.ig.TrendLineManagerBase$1.prototype.g = "TrendLineDashCap";
$.ig.TrendLineManagerBase$1.prototype.h = "TrendLineZIndex";
$.ig.ScatterBase.prototype.iq = "XAxis";
$.ig.ScatterBase.prototype.ir = "YAxis";
$.ig.ScatterBase.prototype.is = "XMemberPath";
$.ig.ScatterBase.prototype.it = "XColumn";
$.ig.ScatterBase.prototype.iu = "YMemberPath";
$.ig.ScatterBase.prototype.iv = "YColumn";
$.ig.ScatterBase.prototype.iw = "MarkerCollisionAvoidance";
$.ig.ScatterBase.prototype.ix = "MaximumMarkers";
$.ig.ScatterBase.prototype.iy = "ErrorBarSettings";
$.ig.ScatterBase.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iq, $.ig.NumericXAxis.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.iq, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ir, $.ig.NumericYAxis.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.ir, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.xMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.is, String, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.is, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.yMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iu, String, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.iu, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.b4, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b6, $.ig.Brush.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.b6, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b7, $.ig.Brush.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.b7, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b8, Number, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.b8, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.b9, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.b3, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b5, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.b5, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iw, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.iw, b.f(), b.e());
}));
$.ig.ScatterBase.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ca, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (c, d) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.ca, d.f(), d.e());
}));
$.ig.ScatterBase.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ix, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (g, h) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, g)).ej($.ig.ScatterBase.prototype.ix, h.f(), h.e());
}));
$.ig.ScatterBase.prototype.errorBarSettingsProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iy, $.ig.ScatterErrorBarSettings.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (j, k) {
	($.ig.util.cast($.ig.ScatterBase.prototype.$type, j)).ej($.ig.ScatterBase.prototype.iy, k.f(), k.e());
}));
$.ig.BubbleSeries.prototype.ku = "RadiusMemberPath";
$.ig.BubbleSeries.prototype.kv = "RadiusColumn";
$.ig.BubbleSeries.prototype.kw = "RadiusScale";
$.ig.BubbleSeries.prototype.kx = "LabelMemberPath";
$.ig.BubbleSeries.prototype.ky = "LabelColumn";
$.ig.BubbleSeries.prototype.kz = "FillMemberPath";
$.ig.BubbleSeries.prototype.k0 = "FillScale";
$.ig.BubbleSeries.prototype.k1 = "FillColumn";
$.ig.BubbleSeries.prototype.radiusMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.ku, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.BubbleSeries.prototype.$type, a)).ej($.ig.BubbleSeries.prototype.ku, b.f(), b.e());
}));
$.ig.BubbleSeries.prototype.radiusScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kw, $.ig.SizeScale.prototype.$type, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.BubbleSeries.prototype.$type, a)).ej($.ig.BubbleSeries.prototype.kw, b.f(), b.e());
}));
$.ig.BubbleSeries.prototype.labelMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kx, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.BubbleSeries.prototype.$type, a)).ej($.ig.BubbleSeries.prototype.kx, b.f(), b.e());
}));
$.ig.BubbleSeries.prototype.fillMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kz, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.BubbleSeries.prototype.$type, a)).ej($.ig.BubbleSeries.prototype.kz, b.f(), b.e());
}));
$.ig.BubbleSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.k0, $.ig.BrushScale.prototype.$type, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.BubbleSeries.prototype.$type, a)).ej($.ig.BubbleSeries.prototype.k0, b.f(), b.e());
}));
$.ig.CustomPaletteBrushScale.prototype.q = "BrushSelectionMode";
$.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteBrushScale.prototype.q, $.ig.BrushSelectionMode.prototype.$type, $.ig.CustomPaletteBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.BrushSelectionMode.prototype.select, function (a, b) {
	($.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, a)).n($.ig.CustomPaletteBrushScale.prototype.q, b.f(), b.e());
}));
$.ig.SizeScale.prototype.e = "MinimumValue";
$.ig.SizeScale.prototype.f = "MaximumValue";
$.ig.SizeScale.prototype.g = "IsLogarithmic";
$.ig.SizeScale.prototype.h = "LogarithmBase";
$.ig.SizeScale.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.e, Number, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.SizeScale.prototype.$type, a)).s($.ig.SizeScale.prototype.e, b.f(), b.e());
}));
$.ig.SizeScale.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.f, Number, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.SizeScale.prototype.$type, a)).s($.ig.SizeScale.prototype.f, b.f(), b.e());
}));
$.ig.SizeScale.prototype.isLogarithmicProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.g, $.ig.Boolean.prototype.$type, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.SizeScale.prototype.$type, a)).s($.ig.SizeScale.prototype.g, b.f(), b.e());
}));
$.ig.SizeScale.prototype.logarithmBaseProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.h, $.ig.Number.prototype.$type, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (a, b) {
	($.ig.util.cast($.ig.SizeScale.prototype.$type, a)).s($.ig.SizeScale.prototype.h, b.f(), b.e());
}));
$.ig.ValueBrushScale.prototype.q = "MinimumValue";
$.ig.ValueBrushScale.prototype.r = "MaximumValue";
$.ig.ValueBrushScale.prototype.s = "IsLogarithmic";
$.ig.ValueBrushScale.prototype.t = "LogarithmBase";
$.ig.ValueBrushScale.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.q, Number, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, a)).n($.ig.ValueBrushScale.prototype.q, b.f(), b.e());
}));
$.ig.ValueBrushScale.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.r, Number, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, a)).n($.ig.ValueBrushScale.prototype.r, b.f(), b.e());
}));
$.ig.ValueBrushScale.prototype.isLogarithmicProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.s, $.ig.Boolean.prototype.$type, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, a)).n($.ig.ValueBrushScale.prototype.s, b.f(), b.e());
}));
$.ig.ValueBrushScale.prototype.logarithmBaseProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.t, $.ig.Number.prototype.$type, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (a, b) {
	($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, a)).n($.ig.ValueBrushScale.prototype.t, b.f(), b.e());
}));
$.ig.ScaleLegend.prototype.cc = "ParentVisibility";
$.ig.ScaleLegend.prototype.cd = "SeriesMarkerBrush";
$.ig.ScaleLegend.prototype.ce = $.ig.DependencyProperty.prototype.l($.ig.ScaleLegend.prototype.cc, $.ig.Visibility.prototype.$type, $.ig.ScaleLegend.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	if (b.e() != $.ig.Visibility.prototype.visible) {
		($.ig.util.cast($.ig.ScaleLegend.prototype.$type, a)).dk();

	} else {
		($.ig.util.cast($.ig.ScaleLegend.prototype.$type, a)).dp();
	}
}));
$.ig.ScaleLegend.prototype.cf = $.ig.DependencyProperty.prototype.l($.ig.ScaleLegend.prototype.cd, $.ig.Brush.prototype.$type, $.ig.ScaleLegend.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.ScaleLegend.prototype.$type, a)).dp();
}));
$.ig.ScaleLegendView.prototype.ap = "LegendScale";
$.ig.ScaleLegendView.prototype.aq = 0;
$.ig.HighDensityScatterSeries.prototype.hp = "XAxis";
$.ig.HighDensityScatterSeries.prototype.hq = "YAxis";
$.ig.HighDensityScatterSeries.prototype.hr = "XMemberPath";
$.ig.HighDensityScatterSeries.prototype.hs = "XColumn";
$.ig.HighDensityScatterSeries.prototype.ht = "YMemberPath";
$.ig.HighDensityScatterSeries.prototype.hu = "YColumn";
$.ig.HighDensityScatterSeries.prototype.hv = "UseBruteForce";
$.ig.HighDensityScatterSeries.prototype.hw = "ProgressiveLoad";
$.ig.HighDensityScatterSeries.prototype.hx = "MouseOverEnabled";
$.ig.HighDensityScatterSeries.prototype.hy = "UseSquareCutoffStyle";
$.ig.HighDensityScatterSeries.prototype.hz = "HeatMinimum";
$.ig.HighDensityScatterSeries.prototype.h0 = "HeatMaximum";
$.ig.HighDensityScatterSeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hp, $.ig.NumericXAxis.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.hp, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hq, $.ig.NumericYAxis.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.hq, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.xMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hr, String, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.hr, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.yMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.ht, String, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.ht, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.useBruteForceProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hv, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.hv, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hw, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, true, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.hw, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hx, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.hx, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hy, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.hy, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.heatMinimumProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hz, Number, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.hz, b.f(), b.e());
}));
$.ig.HighDensityScatterSeries.prototype.heatMaximumProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.h0, Number, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (a, b) {
	($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, a)).ej($.ig.HighDensityScatterSeries.prototype.h0, b.f(), b.e());
}));
$.ig.ScatterLineSeries.prototype.ku = 512;
$.ig.ScatterLineSeries.prototype.kv = "UnknownValuePlotting";
$.ig.ScatterLineSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterLineSeries.prototype.kv, $.ig.UnknownValuePlotting.prototype.$type, $.ig.ScatterLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (a, b) {
	($.ig.util.cast($.ig.ScatterLineSeries.prototype.$type, a)).ej($.ig.ScatterLineSeries.prototype.kv, b.f(), b.e());
}));
$.ig.ErrorBarSettingsBase.prototype.e = "DefaultErrorBarStyle";
$.ig.ErrorBarSettingsBase.prototype.f = $.ig.DependencyProperty.prototype.l($.ig.ErrorBarSettingsBase.prototype.e, $.ig.Style.prototype.$type, $.ig.ErrorBarSettingsBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ErrorBarSettingsBase.prototype.$type, a)).o($.ig.ErrorBarSettingsBase.prototype.e, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.q = "EnableErrorBarsHorizontal";
$.ig.ScatterErrorBarSettings.prototype.r = "HorizontalCalculatorReference";
$.ig.ScatterErrorBarSettings.prototype.s = "HorizontalCalculator";
$.ig.ScatterErrorBarSettings.prototype.t = "HorizontalErrorBarCapLength";
$.ig.ScatterErrorBarSettings.prototype.u = "HorizontalStroke";
$.ig.ScatterErrorBarSettings.prototype.v = "HorizontalStrokeThickness";
$.ig.ScatterErrorBarSettings.prototype.w = "HorizontalErrorBarStyle";
$.ig.ScatterErrorBarSettings.prototype.x = "EnableErrorBarsVertical";
$.ig.ScatterErrorBarSettings.prototype.y = "VerticalCalculatorReference";
$.ig.ScatterErrorBarSettings.prototype.z = "VerticalCalculator";
$.ig.ScatterErrorBarSettings.prototype.aa = "VerticalErrorBarCapLength";
$.ig.ScatterErrorBarSettings.prototype.ab = "VerticalStroke";
$.ig.ScatterErrorBarSettings.prototype.ac = "VerticalStrokeThickness";
$.ig.ScatterErrorBarSettings.prototype.ad = "VerticalErrorBarStyle";
$.ig.ScatterErrorBarSettings.prototype.ae = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.q, $.ig.EnableErrorBars.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.EnableErrorBars.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.q, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.af = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.r, $.ig.ErrorBarCalculatorReference.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ErrorBarCalculatorReference.prototype.x, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.r, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.ag = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.s, $.ig.IErrorBarCalculator.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.s, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.ah = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.t, $.ig.Number.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 6, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.t, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.ai = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.u, $.ig.Brush.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.u, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.aj = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.v, Number, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.v, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.ak = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.w, $.ig.Style.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.w, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.al = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.x, $.ig.EnableErrorBars.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.EnableErrorBars.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.x, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.am = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.y, $.ig.ErrorBarCalculatorReference.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ErrorBarCalculatorReference.prototype.y, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.y, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.an = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.z, $.ig.IErrorBarCalculator.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.z, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.ao = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.aa, $.ig.Number.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 6, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.aa, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.ap = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ab, $.ig.Brush.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.ab, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.aq = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ac, Number, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.ac, b.f(), b.e());
}));
$.ig.ScatterErrorBarSettings.prototype.ar = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ad, $.ig.Style.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, a)).o($.ig.ScatterErrorBarSettings.prototype.ad, b.f(), b.e());
}));
$.ig.Legend.prototype.cc = "Orientation";

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['flattenTo', 'getBounds2', 'clipTo']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['asQueryable']]]);
$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);

