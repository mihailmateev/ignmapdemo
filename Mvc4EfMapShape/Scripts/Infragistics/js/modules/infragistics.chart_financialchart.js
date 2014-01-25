/*!
* Infragistics.Web.ClientUI infragistics.chart_financialchart.js 12.2.20122.1021
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


$.ig.util.defType('PathFigureUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	duplicate: function () {
		var b = new $.ig.PathFigureCollection();
		var d = this.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			b.add(c.duplicate1());
		}
		return b;
	}

, 
	duplicate1: function () {
		var $self = this;
		if (this == null) {
			return null;
		}
		var b = new $.ig.PathSegmentCollection();
		var d = this.__segments.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			switch (c.a()) {
				case $.ig.PathSegmentType.prototype.arc:
					var e = c;
					var f = new $.ig.ArcSegment();
					f.i(e.i());
					f.h(e.h());
					f.l(e.l());
					f.k(e.k());
					f.j(e.j());
					b.add(f);
					break;
				case $.ig.PathSegmentType.prototype.line:
					var g = c;
					var h = new $.ig.LineSegment(1);
					h.d(g.d());
					b.add(h);
					break;
				case $.ig.PathSegmentType.prototype.polyLine:
					var i = c;
					var j = new $.ig.PolyLineSegment();
					var l = i.__points.getEnumerator();
					while (l.moveNext()) {
						var k = l.current();
						j.__points.add(k);
					}
					b.add(j);
					break;
			}
		}
		return (function () { var $ret = new $.ig.PathFigure();
		$ret.__isClosed = $self.__isClosed;
		$ret.__isFilled = $self.__isFilled;
		$ret.__startPoint = $self.__startPoint;
		$ret.__segments = b; return $ret;}());
	}
,
	$type: new $.ig.Type('PathFigureUtil', $.ig.Object.prototype.$type)
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




$.ig.util.defType('PriceDisplayType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('PriceDisplayType', $.ig.Object.prototype.$type)
}, true);










$.ig.util.defType('TimeAxisDisplayType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('TimeAxisDisplayType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IndicatorDisplayType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('IndicatorDisplayType', $.ig.Object.prototype.$type)
}, true);






























$.ig.util.defType('CategoryDateTimeXAxis', 'CategoryAxisBase', {

		init: function () {


			$.ig.CategoryAxisBase.prototype.init.call(this);
						this.hl = new Date();
				this.hm = new Date();
		}
, 
	dl: function () {
		return new $.ig.CategoryDateTimeXAxisView(this);
	}

, 
	dp: function (a) {
		$.ig.CategoryAxisBase.prototype.dp.call(this, a);
		this.hw(a);
	}

, 
	_hw: null,
	hw: function (a) {
		if (arguments.length === 1) {
			this._hw = a;
			return a;
		} else {
			return this._hw;
		}
	}

, 
	displayType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty);
		}
	}

, 
	minimumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty);
		}
	}

, 
	maximumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty);
		}
	}

, 
	interval: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryDateTimeXAxis.prototype.intervalProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryDateTimeXAxis.prototype.intervalProperty);
		}
	}

, 
	dr: function () {
		return new $.ig.HorizontalAxisLabelPanel();
	}

, 
	getCategorySize: function (a, b) {
		return b.width() / (this.itemsCount() * a.width());
	}

, 
	getGroupCenter: function (a, b, c) {
		return this.getCategorySize(b, c) * 0.5;
	}

, 
	gz: function (a, b) {
		var c = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
		var d = 1 - 0.5 * c;
		var e = this.getCategorySize(a, b) * d;
		return e;
	}
, 
	hk: null
, 
	hx: function (a) {
		if (arguments.length === 1) {
			this.hk = a;
			return a;
		} else {
			return this.hk;
		}
	}

, 
	ey: function (a) {
		var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var c = !b.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
		var d = new $.ig.ScalerParams(b, c, this.isInverted());
		var e = this.cz().au();
		var f = this.cz().av();
		var g = this.cz().aw();
		var h = this.cz().ax();
		this.d2();
		this.eq(e);
		this.eq(f);
		this.eq(g);
		this.eq(h);
		this.c4().clear();
		this.c5().clear();
		this.c6().br(this);
		this.c6().bw(b);
		this.c6().bu(c);
		if (b.isEmpty() || c.isEmpty()) {
			this.df().g(0);
		}
		if (this.df().g() == 0) {
			this.c6().a3().clear();
		}
		if (this.labelSettings() != null) {
			this.labelSettings().r(this);
		}
		this.h6();
		if (!b.isEmpty() && !c.isEmpty() && this.h0() != null) {
			var i = c.bottom();
			if (this.crossingAxis() != null) {
				var j = $.ig.util.cast($.ig.NumericYAxis.prototype.$type, this.crossingAxis());
				if (j != null) {
					var k = new $.ig.ScalerParams(b, c, j.isInverted());
					i = this.crossingValue();
					i = j.getScaledValue(i, k);
					if (i < c.top()) {
						i = c.top();
					} else if (i > c.bottom()) {
						i = c.bottom();
					}
				}
			}
			if (isNaN(i)) {
				i = 0;
			}
			this.en(e, i, c);
			this.c6().bx(i);
			if (this.displayType() == $.ig.TimeAxisDisplayType.prototype.discrete) {
				var l = (this).getFirstVisibleIndex(b, c);
				var m = (this).getLastVisibleIndex(b, c);
				if (l < 0 || m < 0) {
					return;
				}
				for (var n = l; n <= m; n++) {
					var o = this.hx() == null ? n : this.hx().__inner[n];
					var p = this.getScaledValue(this.h0().item(o).getTime(), d);
					if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
						p += this.isInverted() ? -this.getGroupCenter(n, b, c) : this.getGroupCenter(n, b, c);
					}
					if (p < c.left() || p > c.right()) {
						continue;
					}
					this.ep(g, p, c);
					if (this.gn() != null && n < this.gn().g()) {
						var q = this.gn().item(o);
						var r = $.ig.Axis.prototype.e2.call(this, q);
						if (!isNaN(p) && !Number.isInfinity(p)) {
							this.c4().add1(r);
							this.c5().add(new $.ig.LabelPosition(p));
						}
					}
				}

			} else {
				var s = this.getUnscaledValue(c.left(), d);
				var t = this.getUnscaledValue(c.right(), d);
				var u = Math.min(s, t);
				var v = Math.max(s, t);
				var w = new $.ig.LinearNumericSnapper(0, u, v, c.width());
				var x = this.hy() ? this.h5() : w.h();
				var y = Math.floor((u - this.actualMinimumValue().getTime()) / x);
				var z = Math.ceil((v - this.actualMinimumValue().getTime()) / x);
				var aa = 0;
				if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
					aa = this.getGroupCenter(0, b, c);
					aa = this.isInverted() ? -aa : aa;
				}
				var ab = Math.ceil(c.right());
				var ac = Math.floor(c.left());
				var ad = this.getScaledValue(this.actualMinimumValue().getTime() + y * x, d) + aa;
				for (var ae = y; ae <= z; ae++) {
					var af = this.getScaledValue(this.actualMinimumValue().getTime() + (ae + 1) * x, d) + aa;
					if (!isNaN(ad) && !Number.isInfinity(ad)) {
						var ag = Math.round(ad);
						if (ag <= ab) {
							if (ae % 2 == 0) {
								this.eo(f, ad, af, c);
							}
							this.ep(g, ad, c);
							for (var ah = 1; ah < w.j(); ++ah) {
								var ai = this.getScaledValue(this.actualMinimumValue().getTime() + ae * x + (ah * x) / w.j(), d) + aa;
								this.ep(h, ai, c);
							}
						}
						if (ag >= ac && ag <= ab) {
							var aj = this.actualMinimumValue().getTime() + ae * x;
							var ticks_ = Math.floor(aj);
							var ak = new Date(ticks_);
							var al = this.e2(ak);
							this.c4().add1(al);
							this.c5().add(new $.ig.LabelPosition(ad));
						}
					}
					ad = af;
				}
			}
			if ((this.labelSettings() == null || this.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && this.crossingAxis() != null) {
				if (this.labelSettings() != null && (this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideTop || this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
					this.seriesViewer().ic();
				}
			}
			this.c6().bs(this.c4());
			this.c6().bt(this.c5());
			this.g9();
		}
	}

, 
	h5: function () {
		return this.hz();
	}

, 
	h6: function () {
		var a = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var b = !a.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
		var c = new Date();
		var d = new Date();
		if (!a.isEmpty() && !b.isEmpty() && this.h0() != null) {
			var e = $.ig.util.cast($.ig.FastItemDateTimeColumn.prototype.$type, this.h0());
			if (e != null) {
				if (this.hx() == null) {
					this.hx(e.u());
				}

			} else {
				this.hx(null);
			}
			if (this.h0().count() > 0) {
				var f = this.hx() == null ? 0 : this.hx().__inner[0];
				var g = this.hx() == null ? this.h0().count() - 1 : this.hx().__inner[this.h0().count() - 1];
				c = this.h0().item(f);
				d = this.h0().item(g);
				this.hy(false);
				if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
					var h = d.getTime() - c.getTime();
					var timeOffset_ = Math.round(h * 1.25 / this.itemsCount() / 2);
					if (timeOffset_ == 0) {
						timeOffset_ = 1;
					}
					var minTime_ = c.getTime();
					var maxTime_ = d.getTime();
					c = new Date(minTime_ - timeOffset_);
					d = new Date(maxTime_ + timeOffset_);
				}
				if (this.h9()) {
					c = this.minimumValue();
				}
				if (this.ia()) {
					d = this.maximumValue();
				}
				if (this.h7()) {
					this.hz(this.interval());
					var i = Math.abs(d.getTime() - c.getTime());
					this.hy(this.h8() || (this.displayType() == $.ig.TimeAxisDisplayType.prototype.discrete) || (1 * i / this.h5() > b.width()) ? false : true);
				}
			}
		}
		this.actualMinimumValue(c);
		this.actualMaximumValue(d);
	}

, 
	h7: function () {
		return this.interval() != 0;
	}

, 
	h8: function () {
		return this.hz() == 0;
	}

, 
	h9: function () {
		return this.minimumValue() != null;
	}

, 
	ia: function () {
		return this.maximumValue() != null;
	}
, 
	hl: null
, 
	actualMinimumValue: function (a) {
		if (arguments.length === 1) {
			var b = this.hl != a;
			if (b) {
				var c = this.hl;
				this.hl = a;
				this.ez($.ig.CategoryDateTimeXAxis.prototype.hg, c, a);
			}
			return a;
		} else {
			return this.hl;
		}
	}
, 
	hm: null
, 
	actualMaximumValue: function (a) {
		if (arguments.length === 1) {
			var b = this.hm != a;
			if (b) {
				var c = this.hm;
				this.hm = a;
				this.ez($.ig.CategoryDateTimeXAxis.prototype.hh, c, a);
			}
			return a;
		} else {
			return this.hm;
		}
	}

, 
	_hy: null,
	hy: function (a) {
		if (arguments.length === 1) {
			this._hy = a;
			return a;
		} else {
			return this._hy;
		}
	}
, 
	hn: null
, 
	hz: function (a) {
		if (arguments.length === 1) {
			this.hn = a;
			return a;
		} else {
			return this.hn;
		}
	}

, 
	getScaledValue: function (a, b) {
		var c;
		if (this.actualMaximumValue() == this.actualMinimumValue()) {
			c = -1;

		} else {
			c = (a - this.actualMinimumValue().getTime()) / (this.actualMaximumValue().getTime() - this.actualMinimumValue().getTime());
		}
		var d = 0;
		if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
			d = this.getGroupCenter(0, b.a, b.b);
		}
		if (this.isInverted()) {
			c = 1 - c;
			d = -d;
		}
		return b.b.left() + b.b.width() * (c - b.a.left()) / b.a.width() - d;
	}

, 
	getUnscaledValue: function (a, b) {
		return this.gy(a, b.a, b.b, this.categoryMode());
	}

, 
	gy: function (a, b, c, d) {
		var e = b.left() + b.width() * (a - c.left()) / c.width();
		if (this.isInverted()) {
			e = 1 - e;
		}
		return Math.floor(this.actualMinimumValue().getTime() + e * (this.actualMaximumValue().getTime() - this.actualMinimumValue().getTime()));
	}

, 
	ii: function (a) {
		return this.h0() == null ? $.ig.Date.prototype.minValue() : this.h0().item(a);
	}

, 
	dateTimeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty);
		}
	}

, 
	h0: function (a) {
		if (arguments.length === 1) {
			if (this.ho != a) {
				var b = this.ho;
				this.ho = a;
				this.ez($.ig.CategoryDateTimeXAxis.prototype.hj, b, this.ho);
			}
			return a;
		} else {
			return this.ho;
		}
	}
, 
	ho: null
, 
	il: function (a) {
		if (a == null) {
			return this.gn().y(null, null);
		}
		var b = null;
		var c = $.ig.SeriesViewer.prototype.getCoercionMethod(a, this.coercionMethods());
		a = c.c();
		b = c.d();
		return this.gn().y(a, b);
	}

, 
	eg: function (a, b, c, d) {
		$.ig.CategoryAxisBase.prototype.eg.call(this, a, b, c, d);
		switch (b) {
			case $.ig.CategoryDateTimeXAxis.prototype.f6:
				var e = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, c);
				if (e != null) {
					e.ac(this.h0());
					this.h0(null);
					e.event = $.ig.Delegate.prototype.remove(e.event, this.im.on(this));
				}
				var f = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, d);
				if (f != null) {
					this.hx(null);
					this.h0(this.il(this.dateTimeMemberPath()));
					f.event = $.ig.Delegate.prototype.combine(f.event, this.im.on(this));
				}
				this.io(false);
				break;
			case $.ig.CategoryDateTimeXAxis.prototype.hi:
				if (this.gn() != null) {
					this.gn().ac(this.h0());
					this.h0(this.il(this.dateTimeMemberPath()));
					this.hx(null);
				}
				break;
			case $.ig.CategoryDateTimeXAxis.prototype.hc:
				this.c7(true);
				this.es(false);
				break;
			case $.ig.CategoryDateTimeXAxis.prototype.hd:
				this.updateRange();
				this.io(false);
				break;
			case $.ig.CategoryDateTimeXAxis.prototype.he:
				this.updateRange();
				this.io(false);
				break;
			case $.ig.CategoryDateTimeXAxis.prototype.hf:
				this.c7(true);
				this.es(false);
				break;
		}
	}

, 
	im: function (a, b) {
		this.hx(null);
	}

, 
	io: function (a) {
		if (this.gn() == null) {
		return;
		}
		this.ey(a);
		var c = this.fl().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			b.renderSeries(a);
		}
	}

, 
	ex: function () {
		var a = this.actualMinimumValue().getTime();
		var b = this.actualMaximumValue().getTime();
		var c = !this.h9() ? this.actualMinimumValue().getTime() : this.minimumValue().getTime();
		var d = !this.ia() ? this.actualMaximumValue().getTime() : this.maximumValue().getTime();
		var e = new $.ig.AxisRangeChangedEventArgs(a, c, b, d);
		this.dx(e);
		return true;
	}

, 
	sortedIndices: function () {
			if (this.hx() == null) {
				var b = $.ig.util.cast($.ig.FastItemDateTimeColumn.prototype.$type, this.h0());
				if (b != null) {
					this.hx(b.u());

				} else {
					this.hx(null);
				}
			}
			return this.hx();
	}

, 
	getFirstVisibleIndex: function (a, b) {
		var c = new $.ig.ScalerParams(a, b, this.isInverted());
		var d		,e;
		if (this.isInverted()) {
			e = this.getUnscaledValue(b.left(), c);
			d = this.getUnscaledValue(b.right(), c);

		} else {
			d = this.getUnscaledValue(b.left(), c);
			e = this.getUnscaledValue(b.right(), c);
		}
		var f = 0;
		for (var g = 0; g < this.hx().count(); g++) {
			if (this.h0() == null) {
				break;
			}
			var h = this.h0().item(this.hx().__inner[g]);
			if (h.getTime() >= d) {
				break;
			}
			f = g;
		}
		return f;
	}

, 
	getLastVisibleIndex: function (a, b) {
		var c = new $.ig.ScalerParams(a, b, this.isInverted());
		var d		,e;
		if (this.isInverted()) {
			e = this.getUnscaledValue(b.left(), c);
			d = this.getUnscaledValue(b.right(), c);

		} else {
			d = this.getUnscaledValue(b.left(), c);
			e = this.getUnscaledValue(b.right(), c);
		}
		var f = this.hx().count() - 1;
		var g = f;
		for (var h = f; h >= 0; h--) {
			if (this.h0() == null || this.hx().count() <= h) {
				break;
			}
			var i = this.hx().__inner[h];
			if (i >= this.h0().count()) {
				break;
			}
			var j = this.h0().item(i);
			if (j.getTime() < e) {
				break;
			}
			g = Math.min(h + 1, this.hx().count() - 1);
		}
		return g;
	}

, 
	getUnscaledValueAt: function (a) {
		return this.h0() == null ? NaN : this.h0().item(a).getTime();
	}

, 
	getIndexClosestToUnscaledValue: function (a) {
		var $self = this;
		var b = this;
		if (this.h0() == null || b.sortedIndices() == null) {
			return -1;
		}
		var c = new $.ig.SortedListView$1($.ig.Date.prototype.$type, this.h0(), b.sortedIndices());
		var ticks_ = a;
		var d = new Date(ticks_);
		var e = -1;
		var g = c.binarySearch$1($.ig.Date.prototype.$type, function (f) {
	if (d < f) {
		return -1;
	}
	if (d > f) {
		return 1;
	}
	return 0;
});
		if (g >= 0) {
			e = g;

		} else {
			e = ~g;
		}
		if (e >= 0 && e < b.sortedIndices().count() && e - 1 >= 0 && e - 1 < b.sortedIndices().count()) {
			var h = d - c.item(e - 1);
			var i = c.item(e) - d;
			if (h < i) {
				e = e - 1;
			}
		}
		if (e >= 0 && e < b.sortedIndices().count()) {
			return b.sortedIndices().__inner[e];
		}
		return -1;
	}

, 
	notifyDataChanged: function () {
		this.hx(null);
		this.renderAxis();
	}

, 
	dd: function () {
			return $.ig.AxisOrientation.prototype.horizontal;
	}
,
	$type: new $.ig.Type('CategoryDateTimeXAxis', $.ig.CategoryAxisBase.prototype.$type, [$.ig.ISortingAxis.prototype.$type])
}, true);

$.ig.util.defType('CategoryDateTimeXAxisView', 'CategoryAxisBaseView', {

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
	$type: new $.ig.Type('CategoryDateTimeXAxisView', $.ig.CategoryAxisBaseView.prototype.$type)
}, true);





$.ig.util.defType('CategoryXAxis', 'CategoryAxisBase', {

	dl: function () {
		return new $.ig.CategoryXAxisView(this);
	}

, 
	dp: function (a) {
		$.ig.CategoryAxisBase.prototype.dp.call(this, a);
		this.hh(a);
	}

, 
	_hh: null,
	hh: function (a) {
		if (arguments.length === 1) {
			this._hh = a;
			return a;
		} else {
			return this._hh;
		}
	}

, 
		init: function () {

			this.hd = 1;
			this.he = 1;

			$.ig.CategoryAxisBase.prototype.init.call(this);
		}, 
	hd: null
, 
	hi: function (a) {
		if (arguments.length === 1) {
			this.hd = a;
			return a;
		} else {
			return this.hd;
		}
	}
, 
	he: null
, 
	hj: function (a) {
		if (arguments.length === 1) {
			this.he = a;
			return a;
		} else {
			return this.he;
		}
	}

, 
	dr: function () {
		return new $.ig.HorizontalAxisLabelPanel();
	}

, 
	getCategorySize: function (a, b) {
		return b.width() / (this.itemsCount() * a.width());
	}

, 
	gz: function (a, b) {
		var c = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
		var d = 0;
		if (!isNaN(this.overlap())) {
			d = Math.min(this.overlap(), 1);

		} else {
			d = 0;
		}
		;
		var e = 1 - 0.5 * c;
		var f = this.go() == 0 ? 1 : this.go();
		var g = this.getCategorySize(a, b) * e / (f - (f - 1) * d);
		return g;
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
	scrollIntoView: function (a) {
		var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var c = this.c2();
		var d = new $.ig.Rect(0, 0, 0, 1, 1);
		var e = new $.ig.ScalerParams(d, d, this.isInverted());
		var f = !b.isEmpty() && !c.isEmpty() && this.gn() != null ? this.gn().x(a) : -1;
		var g = f > -1 ? this.getScaledValue(f, e) : NaN;
		if (!isNaN(g) && this.seriesViewer().fl()) {
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
			this.seriesViewer().hx(b);
		}
	}

, 
	getScaledValue: function (a, b) {
		var c = this.categoryMode() == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
		if (c < 0) {
			c = 0;
		}
		var d = c >= 1 ? (a) / (c) : c == 0 ? 0.5 : NaN;
		if (this.c1()) {
			d = 1 - d;
		}
		return b.b.left() + b.b.width() * (d - b.a.left()) / b.a.width();
	}

, 
	getUnscaledValue: function (a, b) {
		return this.gy(a, b.a, b.b, this.categoryMode());
	}

, 
	gy: function (a, b, c, d) {
		var e = b.left() + (a - c.left()) * b.width() / c.width();
		if (this.c1()) {
			e = 1 - e;
		}
		var f = d == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
		if (f < 0) {
			f = 0;
		}
		return e * f;
	}

, 
	ey: function (a) {
		var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var c = this.c2();
		var d = new $.ig.ScalerParams(b, c, this.isInverted());
		var e = this.cz().au();
		var f = this.cz().av();
		var g = this.cz().aw();
		var h = this.cz().ax();
		this.d2();
		this.eq(e);
		this.eq(f);
		this.eq(g);
		this.eq(h);
		this.c4().clear();
		this.c5().clear();
		this.cz().az(this, b, c);
		if (b.isEmpty() || c.isEmpty()) {
			this.df().g(0);
		}
		if (this.df().g() == 0) {
			this.cz().a0();
		}
		if (this.labelSettings() != null) {
			this.labelSettings().r(this);
		}
		if (this.itemsSource() == null) {
		return;
		}
		if (!b.isEmpty() && !c.isEmpty()) {
			var i = this.getUnscaledValue(c.left(), d);
			var j = this.getUnscaledValue(c.right(), d);
			if (this.isInverted()) {
				i = Math.ceil(i);
				j = Math.floor(j);

			} else {
				i = Math.floor(i);
				j = Math.ceil(j);
			}
			var k = c.bottom();
			if (this.crossingAxis() != null) {
				var l = $.ig.util.cast($.ig.NumericYAxis.prototype.$type, this.crossingAxis());
				if (l != null) {
					var m = new $.ig.ScalerParams(b, c, l.isInverted());
					k = this.crossingValue();
					k = l.getScaledValue(k, m);
					if (k < c.top()) {
						k = c.top();
					} else if (k > c.bottom()) {
						k = c.bottom();
					}
				}
			}
			this.en(e, k, c);
			this.cz().a3(k);
			var n = Math.min(i, j);
			var o = Math.max(i, j);
			var p = new $.ig.LinearCategorySnapper(1, n, o, c.width(), this.interval(), this.categoryMode());
			var q = Math.floor((n - 0) / p.g());
			var r = Math.ceil((o - 0) / p.g());
			if (!isNaN(q) && !isNaN(r)) {
				var s = q;
				var t = r;
				var u = this.getScaledValue(0 + s * p.g(), d);
				this.cz().a1(this.getScaledValue(p.g(), d));
				var v = Math.ceil(c.right());
				var w = Math.floor(c.left());
				for (var x = s; x <= t; ++x) {
					var y = this.getScaledValue(0 + (x + 1) * p.g(), d);
					if (u <= c.right()) {
						if (x % 2 == 0) {
							this.eo(f, u, y, c);
						}
						this.ep(g, u, c);
						if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0 && this.go() != 0 && this.c9()) {
							for (var z = 0; z < p.g(); z++) {
								for (var aa = 0; aa < this.go(); aa++) {
									var ab = this.getGroupCenter(aa, b, c);
									if (this.isInverted()) {
									ab = -ab;
									}
									var ac = this.getScaledValue(z + x * p.g(), d) + ab;
									this.ep(h, ac, c);
								}
							}
						}
					}
					var ad = u;
					if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
						var ae = this.getScaledValue(x * p.g() + 1, d);
						ad = (u + ae) / 2;
					}
					var af = Math.round(ad);
					if (af >= w && af <= v) {
						var ag = 0;
						if (p.g() >= 1) {
							ag = x * Math.floor(p.g());

						} else {
							if ((x * p.g()) * 2 % 2 == 0) {
								ag = Math.floor(x * p.g());

							} else {
								ag = -1;
							}
						}
						if (this.gn() != null && ag < this.gn().g() && ag >= 0) {
							var ah = this.gn().item(ag);
							var ai = this.e2(ah);
							if (!isNaN(ad) && !Number.isInfinity(ad)) {
								this.c4().add1(ai);
								this.c5().add(new $.ig.LabelPosition(ad));
							}
						}
					}
					u = y;
				}
			}
			if ((this.labelSettings() == null || this.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && this.crossingAxis() != null) {
				if (this.labelSettings() != null && (this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideTop || this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
					this.seriesViewer().ic();
				}
			}
			this.cz().a2(this.c4(), this.c5());
			this.g9();
		}
	}

, 
	ex: function () {
		if (this.gn() == null) {
			return false;
		}
		var a = this.gn().g();
		if (a != this.hj()) {
			var b = new $.ig.AxisRangeChangedEventArgs(1, 1, this.hj(), a);
			this.hj(a);
			this.dx(b);
			return true;
		}
		return false;
	}

, 
	interval: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryXAxis.prototype.intervalProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryXAxis.prototype.intervalProperty);
		}
	}

, 
	g2: function (a) {
		if (a == null) {
			return false;
		}
		var b = this.fg();
		if (b == null) {
			return false;
		}
		return b.synchronizeHorizontally();
	}

, 
	dd: function () {
			return $.ig.AxisOrientation.prototype.horizontal;
	}
,
	$type: new $.ig.Type('CategoryXAxis', $.ig.CategoryAxisBase.prototype.$type)
}, true);

$.ig.util.defType('CategoryXAxisView', 'CategoryAxisBaseView', {

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
	$type: new $.ig.Type('CategoryXAxisView', $.ig.CategoryAxisBaseView.prototype.$type)
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


$.ig.util.defType('CategoryTrendLineManagerBase', 'TrendLineManagerBase$1', {
	init: function () {

		$.ig.TrendLineManagerBase$1.prototype.init.call(this, Number);

	}
, 
	prepareLine: function (a, b, c, d, e, f, g) {
	}

, 
	af: function (a, b, c, d) {
		var $self = this;
		if (b != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, b) !== null) {
			if (a != null) {
				a.aa();
			}
			var l = new $.ig.SortingTrendLineManager(function (e) {
	var f = e;
	var g = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, b);
	if (g != null) {
		e = Math.min(e, g.sortedIndices().count() - 1);
		f = g.sortedIndices().__inner[e];
	}
	return g.getUnscaledValueAt(f);
}, function (h, i, j) {
	var k = new $.ig.ScalerParams(j, i, b.isInverted());
	return b.getUnscaledValue(h, k);
});
			l.z(c, d);
			return l;
		} else if (!($.ig.util.cast($.ig.CategoryTrendLineManager.prototype.$type, a) !== null)) {
			if (a != null) {
				a.aa();
			}
			var m = new $.ig.CategoryTrendLineManager();
			m.z(c, d);
			return m;
		}
		return a;
	}
,
	$type: new $.ig.Type('CategoryTrendLineManagerBase', $.ig.TrendLineManagerBase$1.prototype.$type.specialize(Number), [$.ig.IPreparesCategoryTrendline.prototype.$type])
}, true);

$.ig.util.defType('CategoryTrendLineManager', 'CategoryTrendLineManagerBase', {
	init: function () {

		$.ig.CategoryTrendLineManagerBase.prototype.init.call(this);

	}
, 
	prepareLine: function (a, b, c, d, e, f, g) {
		var $self = this;
		var h = g.h() * g.j();
		var i = g.i() * g.j();
		var j = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		if (b == $.ig.TrendLineType.prototype.none) {
			this.m(null);
			this.l().clear();
			return;
		}
		if (this.u(b)) {
			this.l().clear();
			this.m($.ig.TrendFitCalculator.prototype.a(j, b, g, this.m(), c.count(), function (k) { return k + 1			}, function (l) { return c.item(l)			}, e, f, h, i));
		}
		if (this.v(b)) {
			this.m(null);
			$.ig.TrendAverageCalculator.prototype.b(b, this.l(), c, d);
			for (var m = g.h(); m <= g.i(); m += 1) {
				var n = m * g.j();
				if (n >= 0 && n < this.l().count()) {
					var o = e(n);
					var p = f(this.l().__inner[n]);
					j.add({__x: o + g.n(), __y: p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				}
			}
		}
		this.x(j, g, a);
	}
,
	$type: new $.ig.Type('CategoryTrendLineManager', $.ig.CategoryTrendLineManagerBase.prototype.$type)
}, true);























































































$.ig.util.defType('FinancialSeries', 'Series', {

	ea: function (a) {
		$.ig.Series.prototype.ea.call(this, a);
		this.i0(a);
	}

, 
	_i0: null,
	i0: function (a) {
		if (arguments.length === 1) {
			this._i0 = a;
			return a;
		} else {
			return this._i0;
		}
	}

, 
		init: function () {

			this.h7 = new $.ig.Dictionary$2($.ig.IFastItemColumn$1.prototype.$type.specialize(Number), String, 0);
			this.h8 = new $.ig.Dictionary$2(String, String, 0);
			this.h9 = false;
			this.ig = false;

			$.ig.Series.prototype.init.call(this);
						this.a3($.ig.FinancialSeries.prototype.$type);
		}
, 
	negativeBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialSeries.prototype.negativeBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialSeries.prototype.negativeBrushProperty);
		}
	}

, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialSeries.prototype.xAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialSeries.prototype.xAxisProperty);
		}
	}

, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialSeries.prototype.yAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialSeries.prototype.yAxisProperty);
		}
	}

, 
	openMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialSeries.prototype.openMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialSeries.prototype.openMemberPathProperty);
		}
	}

, 
	i1: function (a) {
		if (arguments.length === 1) {
			if (this.h2 != a) {
				var b = this.h2;
				this.h2 = a;
				this.ej($.ig.FinancialSeries.prototype.ht, b, this.h2);
			}
			return a;
		} else {
			return this.h2;
		}
	}
, 
	h2: null
, 
	highMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialSeries.prototype.highMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialSeries.prototype.highMemberPathProperty);
		}
	}

, 
	i2: function (a) {
		if (arguments.length === 1) {
			if (this.h3 != a) {
				var b = this.h3;
				this.h3 = a;
				this.ej($.ig.FinancialSeries.prototype.hv, b, this.h3);
			}
			return a;
		} else {
			return this.h3;
		}
	}
, 
	h3: null
, 
	lowMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialSeries.prototype.lowMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialSeries.prototype.lowMemberPathProperty);
		}
	}

, 
	i3: function (a) {
		if (arguments.length === 1) {
			if (this.h4 != a) {
				var b = this.h4;
				this.h4 = a;
				this.ej($.ig.FinancialSeries.prototype.hx, b, this.h4);
			}
			return a;
		} else {
			return this.h4;
		}
	}
, 
	h4: null
, 
	closeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialSeries.prototype.closeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialSeries.prototype.closeMemberPathProperty);
		}
	}

, 
	i4: function (a) {
		if (arguments.length === 1) {
			if (this.h5 != a) {
				var b = this.h5;
				this.h5 = a;
				this.ej($.ig.FinancialSeries.prototype.hz, b, this.h5);
			}
			return a;
		} else {
			return this.h5;
		}
	}
, 
	h5: null
, 
	volumeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialSeries.prototype.volumeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialSeries.prototype.volumeMemberPathProperty);
		}
	}

, 
	i5: function (a) {
		if (arguments.length === 1) {
			if (this.h6 != a) {
				var b = this.h6;
				this.h6 = a;
				this.ej($.ig.FinancialSeries.prototype.h1, b, this.h6);
			}
			return a;
		} else {
			return this.h6;
		}
	}
, 
	h6: null
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
	ey: function (a, b) {
		this.i0().cg().q(this.resolution());
		this.renderSeries(false);
	}

, 
	ez: function (a, b) {
		this.i0().cg().q(this.resolution());
		this.renderSeries(false);
	}
, 
	h7: null, 
	h8: null
, 
	jm: function (a, b, c) {
		var d = this.gs(b);
		this.h7.add(d, b);
		this.h8.add(b, c);
		return d;
	}

, 
	jn: function (a, b) {
		if (b == null) {
			return;
		}
		a.ac(b);
		var c = this.h7.item(b);
		this.h8.remove(c);
		this.h7.remove(b);
	}
, 
	h9: null
, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.Series.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.Series.prototype.bb:
				if (this.syncLink() != null && this.seriesViewer() != null) {
					this.i0().cg().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.FinancialSeries.prototype.bc:
				if (c != null && d == null) {
					if (this.xAxis() != null) {
						this.xAxis().deregisterSeries(this);
					}
					if (this.yAxis() != null) {
						this.yAxis().deregisterSeries(this);
					}
				}
				if (c == null && d != null) {
					if (this.xAxis() != null) {
						this.xAxis().registerSeries(this);
					}
					if (this.yAxis() != null) {
						this.yAxis().registerSeries(this);
					}
				}
				this.i0().cg().q(this.resolution());
				this.renderSeries(false);
				break;
			case $.ig.FinancialSeries.prototype.be:
				this.h9 = true;
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c), this.i1());
					this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c), this.i2());
					this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c), this.i3());
					this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c), this.i4());
					this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c), this.i5());
					this.i1(null);
					this.i2(null);
					this.i3(null);
					this.i4(null);
					this.i5(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					if (this.openMemberPath() != null) {
						this.i1(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d), this.openMemberPath(), $.ig.FinancialSeries.prototype.ht));
					}
					if (this.highMemberPath() != null) {
						this.i2(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d), this.highMemberPath(), $.ig.FinancialSeries.prototype.hv));
					}
					if (this.lowMemberPath() != null) {
						this.i3(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d), this.lowMemberPath(), $.ig.FinancialSeries.prototype.hx));
					}
					if (this.closeMemberPath() != null) {
						this.i4(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d), this.closeMemberPath(), $.ig.FinancialSeries.prototype.hz));
					}
					if (this.volumeMemberPath() != null) {
						this.i5(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d), this.volumeMemberPath(), $.ig.FinancialSeries.prototype.h1));
					}
				}
				this.h9 = false;
				if (this.yAxis() != null && !this.yAxis().updateRange()) {
					this.i0().cg().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.FinancialSeries.prototype.hs:
				if (this.dx() != null) {
					this.jn(this.dx(), this.i1());
					this.i1(this.jm(this.dx(), this.openMemberPath(), $.ig.FinancialSeries.prototype.ht));
				}
				break;
			case $.ig.FinancialSeries.prototype.ht:
				if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
					this.i0().cg().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.FinancialSeries.prototype.hu:
				if (this.dx() != null) {
					this.jn(this.dx(), this.i2());
					this.i2(this.jm(this.dx(), this.highMemberPath(), $.ig.FinancialSeries.prototype.hv));
				}
				break;
			case $.ig.FinancialSeries.prototype.hv:
				if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
					this.i0().cg().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.FinancialSeries.prototype.hw:
				if (this.dx() != null) {
					this.jn(this.dx(), this.i3());
					this.i3(this.jm(this.dx(), this.lowMemberPath(), $.ig.FinancialSeries.prototype.hx));
				}
				break;
			case $.ig.FinancialSeries.prototype.hx:
				if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
					this.i0().cg().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.FinancialSeries.prototype.hy:
				if (this.dx() != null) {
					this.jn(this.dx(), this.i4());
					this.i4(this.jm(this.dx(), this.closeMemberPath(), $.ig.FinancialSeries.prototype.hz));
				}
				break;
			case $.ig.FinancialSeries.prototype.hz:
				if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
					this.i0().cg().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.FinancialSeries.prototype.h0:
				if (this.dx() != null) {
					this.jn(this.dx(), this.i5());
					this.i5(this.jm(this.dx(), this.volumeMemberPath(), $.ig.FinancialSeries.prototype.h1));
				}
				break;
			case $.ig.FinancialSeries.prototype.h1:
				if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
					this.i0().cg().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.FinancialSeries.prototype.hq:
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				this.i0().cg().q(this.resolution());
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.FinancialSeries.prototype.hr:
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				this.i0().cg().q(this.resolution());
				if (this.yAxis() != null && !this.yAxis().updateRange()) {
					this.renderSeries(false);
				}
				this.e5();
				break;
			case $.ig.FinancialSeries.prototype.bo:
				this.ib.a(this.dz(), this.ia, this.ic);
				if (this.ew(this.view())) {
					return;
				}
				if (this.dz() == 1) {
					this.jq(this.ic, this.i0());

				} else {
					this.jq(this.ib, this.i0());
				}
				break;
			case $.ig.FinancialSeries.prototype.hp:
				this.renderSeries(false);
				break;
		}
	}

, 
	eg: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		var d = -1;
		if (!b.isEmpty() && !c.isEmpty()) {
			var e = (a.__x - b.left()) / b.width();
			var f = this.i0().cg().f() + Math.round((e * (this.i0().cg().g() - this.i0().cg().f())));
			d = f * this.i0().cg().h();
		}
		return d;
	}

, 
	jo: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		if (b.isEmpty() || c.isEmpty()) {
			return -1;
		}
		var d = new $.ig.ScalerParams(b, c, this.xAxis().isInverted());
		var e = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
		var f = this.xAxis().getUnscaledValue(c.left(), d);
		var g = this.xAxis().getUnscaledValue(c.right(), d);
		var h = (a.__x - b.left()) / b.width();
		var i = f + ((g - f) * h);
		var j = e.getIndexClosestToUnscaledValue(i);
		return j;
	}

, 
	eh: function (a) {
		var b = 0;
		if ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			b = this.jo(a);
			if (b == -1) {
				return null;
			}

		} else {
			b = this.eg(a);
		}
		return b >= 0 && this.dx() != null && b < this.dx().g() ? this.dx().item(b) : null;
	}
, 
	ia: null, 
	ib: null, 
	ic: null
, 
	jp: function (a, b) {
	}

, 
	jq: function (a, b) {
	}

, 
	es: function (a, b, c) {
		var d = $.ig.Series.prototype.es.call(this, a, b, c);
		var e = c;
		if (this.dx() == null || this.dx().g() == 0 || !c.cc() || b.isEmpty() || a.isEmpty() || this.xAxis() == null || this.yAxis() == null || e.cg().h() < 1 || this.xAxis().seriesViewer() == null || this.yAxis().seriesViewer() == null || this.yAxis().actualMinimumValue() == this.yAxis().actualMaximumValue()) {
			e.cg().h(0);
			d = false;
		}
		return d;
	}

, 
	getViewInfo: function (a, b) {
		b = this.view().ac();
		a = this.view().ab();
		return {
			viewportRect: a,
			windowRect: b
		};
	}

, 
	eo: function (a) {
		if (this.ew(this.view())) {
			return;
		}
		if (this.gm(a)) {
			var b = this.ia;
			if (this.fo()) {
				this.ia = this.ib;
				this.ib = b;

			} else {
				this.ia = this.ic;
				this.ic = b;
			}
			this.i0().cg().q(this.resolution());
			this.jp(this.ic, this.i0());
			this.fp();

		} else {
			this.i0().cg().q(this.resolution());
			this.jp(this.ic, this.i0());
			this.jq(this.ic, this.i0());
		}
	}
, 
	typical: null, 
	typicalBasedOn: null
, 
	jr: function (a) {
		var c = a.getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			switch (b) {
				case "HighColumn":
					if (this.i2() == null) {
						return false;
					}
					break;
				case "LowColumn":
					if (this.i3() == null) {
						return false;
					}
					break;
				case "OpenColumn":
					if (this.i1() == null) {
						return false;
					}
					break;
				case "CloseColumn":
					if (this.i4() == null) {
						return false;
					}
					break;
				case "VolumeColumn":
					if (this.i5() == null) {
						return false;
					}
					break;
			}
		}
		return true;
	}

, 
	i6: function () {
			return this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null;
	}

, 
	i7: function () {
			var $self = this;
			var $iter = function () { return function () { return {
				$state: 0,
				$this: $self,
				$current: null,
				$b : null,
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
								this.$b = false;
								this.$state = 1;
								break;
							case 1:
								if (this.$this.typical != null) {
									this.$state = 2;
								}
								else {
									this.$state = 11;
								}
								break;

							case 2:
								this.$c = this.$this.jy(0, this.$this.dx().g());
								this.$this.typical(this.$this, new $.ig.FinancialEventArgs(0, this.$this.dx().g(), this.$c, this.$this.j0(this.$c)));
								this.$state = 3;
								break;
							case 3:
								if (this.$c.typicalColumn() != null) {
									this.$state = 4;
								}
								else {
									this.$state = 10;
								}
								break;

							case 4:
								this.$b = true;
								this.$state = 5;
								break;
							case 5:
								this.$e = this.$c.typicalColumn().getEnumerator();
								this.$state = 8;
								break;
							case 6:
								this.$d = this.$e.current();
								this.$current =  this.$d;
								this.$state = 7
								return true;
							case 7:
								this.$state = 8;
								break;
							case 8:
								if (this.$e.moveNext()) {
									this.$state = 6;
								}
								else {
									this.$state = 9;
								}
								break;

							case 9:
								this.$state = 10;
								break;

							case 10:
								this.$state = 11;
								break;

							case 11:
								this.$state = 12;
								break;
							case 12:
								if (!this.$b) {
									this.$state = 13;
								}
								else {
									this.$state = 30;
								}
								break;

							case 13:
								this.$state = 14;
								break;
							case 14:
								if (this.$this.i6() && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices() != null) {
									this.$state = 15;
								}
								else {
									this.$state = 22;
								}
								break;

							case 15:
								this.$f = this.$this.dx().g();
								this.$g = ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices();
								this.$state = 16;
								break;
							case 16:
								this.$h = 0;
								this.$state = 20;
								break;
							case 17:
								this.$current =  (this.$this.i2().item(this.$g.item(this.$h)) + this.$this.i3().item(this.$g.item(this.$h)) + this.$this.i4().item(this.$g.item(this.$h))) / 3;
								this.$state = 18
								return true;
							case 18:
								this.$state = 19;
								break;
							case 19:
								++this.$h;
								this.$state = 20;
								break;
							case 20:
								if (this.$h < this.$f) {
									this.$state = 17;
								}
								else {
									this.$state = 21;
								}
								break;
							case 21:
								this.$state = 29;
								break;

							case 22:
								this.$i = this.$this.dx().g();
								this.$state = 23;
								break;
							case 23:
								this.$j = 0;
								this.$state = 27;
								break;
							case 24:
								this.$current =  (this.$this.i2().item(this.$j) + this.$this.i3().item(this.$j) + this.$this.i4().item(this.$j)) / 3;
								this.$state = 25
								return true;
							case 25:
								this.$state = 26;
								break;
							case 26:
								++this.$j;
								this.$state = 27;
								break;
							case 27:
								if (this.$j < this.$i) {
									this.$state = 24;
								}
								else {
									this.$state = 28;
								}
								break;
							case 28:
								this.$state = 29;
								break;
							case 29:
								this.$state = 30;
								break;

							case 30:
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
	i8: function () {
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
								if (this.$this.i6() && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices() != null) {
									this.$state = 2;
								}
								else {
									this.$state = 13;
								}
								break;

							case 2:
								this.$b = this.$this.i2().count();
								this.$c = ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices();
								this.$state = 3;
								break;
							case 3:
								if (this.$b > 0) {
									this.$state = 4;
								}
								else {
									this.$state = 6;
								}
								break;

							case 4:
								this.$current =  this.$this.jz(this.$this.i2().item(this.$c.item(0)) - this.$this.i3().item(this.$c.item(0)));
								this.$state = 5
								return true;
							case 5:
								this.$state = 6;
								break;

							case 6:
								this.$state = 7;
								break;
							case 7:
								this.$d = 1;
								this.$state = 11;
								break;
							case 8:
								this.$current =  Math.max(this.$this.jz(this.$this.i2().item(this.$c.item(this.$d)) - this.$this.i3().item(this.$c.item(this.$d))), Math.max(this.$this.jz(Math.abs(this.$this.i2().item(this.$c.item(this.$d)) - this.$this.i4().item(this.$c.item(this.$d - 1)))), this.$this.jz(Math.abs(this.$this.i3().item(this.$c.item(this.$d)) - this.$this.i4().item(this.$c.item(this.$d - 1))))));
								this.$state = 9
								return true;
							case 9:
								this.$state = 10;
								break;
							case 10:
								++this.$d;
								this.$state = 11;
								break;
							case 11:
								if (this.$d < this.$b) {
									this.$state = 8;
								}
								else {
									this.$state = 12;
								}
								break;
							case 12:
								this.$state = 24;
								break;

							case 13:
								this.$e = this.$this.i2().count();
								this.$state = 14;
								break;
							case 14:
								if (this.$e > 0) {
									this.$state = 15;
								}
								else {
									this.$state = 17;
								}
								break;

							case 15:
								this.$current =  this.$this.jz(this.$this.i2().item(0) - this.$this.i3().item(0));
								this.$state = 16
								return true;
							case 16:
								this.$state = 17;
								break;

							case 17:
								this.$state = 18;
								break;
							case 18:
								this.$f = 1;
								this.$state = 22;
								break;
							case 19:
								this.$current =  Math.max(this.$this.jz(this.$this.i2().item(this.$f) - this.$this.i3().item(this.$f)), Math.max(this.$this.jz(Math.abs(this.$this.i2().item(this.$f) - this.$this.i4().item(this.$f - 1))), this.$this.jz(Math.abs(this.$this.i3().item(this.$f) - this.$this.i4().item(this.$f - 1)))));
								this.$state = 20
								return true;
							case 20:
								this.$state = 21;
								break;
							case 21:
								++this.$f;
								this.$state = 22;
								break;
							case 22:
								if (this.$f < this.$e) {
									this.$state = 19;
								}
								else {
									this.$state = 23;
								}
								break;
							case 23:
								this.$state = 24;
								break;
							case 24:
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
	i9: function () {
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
								if (this.$this.i6() && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices() != null) {
									this.$state = 2;
								}
								else {
									this.$state = 13;
								}
								break;

							case 2:
								this.$b = this.$this.i3().count();
								this.$c = ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices();
								this.$state = 3;
								break;
							case 3:
								if (this.$b > 0) {
									this.$state = 4;
								}
								else {
									this.$state = 6;
								}
								break;

							case 4:
								this.$current =  this.$this.jz(this.$this.i3().item(this.$c.item(0)));
								this.$state = 5
								return true;
							case 5:
								this.$state = 6;
								break;

							case 6:
								this.$state = 7;
								break;
							case 7:
								this.$d = 1;
								this.$state = 11;
								break;
							case 8:
								this.$current =  Math.min(this.$this.jz(this.$this.i3().item(this.$c.item(this.$d))), this.$this.jz(this.$this.i4().item(this.$c.item(this.$d - 1))));
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
								if (this.$d < this.$b) {
									this.$state = 8;
								}
								else {
									this.$state = 12;
								}
								break;
							case 12:
								this.$state = 24;
								break;

							case 13:
								this.$e = this.$this.i3().count();
								this.$state = 14;
								break;
							case 14:
								if (this.$e > 0) {
									this.$state = 15;
								}
								else {
									this.$state = 17;
								}
								break;

							case 15:
								this.$current =  this.$this.jz(this.$this.i3().item(0));
								this.$state = 16
								return true;
							case 16:
								this.$state = 17;
								break;

							case 17:
								this.$state = 18;
								break;
							case 18:
								this.$f = 1;
								this.$state = 22;
								break;
							case 19:
								this.$current =  Math.min(this.$this.jz(this.$this.i3().item(this.$f)), this.$this.jz(this.$this.i4().item(this.$f - 1)));
								this.$state = 20
								return true;
							case 20:
								this.$state = 21;
								break;
							case 21:
								this.$f++;
								this.$state = 22;
								break;
							case 22:
								if (this.$f < this.$e) {
									this.$state = 19;
								}
								else {
									this.$state = 23;
								}
								break;
							case 23:
								this.$state = 24;
								break;
							case 24:
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
	jw: function (a) {
		if (a == null) {
			return null;
		}
		if (this.i6() && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).sortedIndices() != null) {
			return new $.ig.SafeSortedReadOnlyDoubleCollection(a, ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).sortedIndices());
		}
		return new $.ig.SafeReadOnlyDoubleCollection(a);
	}
, 
	ig: null
, 
	jx: function () {
		var a = new $.ig.List$1(String, 0);
		a.add("HighColumn");
		a.add("LowColumn");
		a.add("CloseColumn");
		if (this.typicalBasedOn != null && this.dx() != null && !this.ig) {
			this.ig = true;
			var b = this.jy(0, this.dx().g());
			this.ig = false;
			var c = new $.ig.FinancialEventArgs(0, this.dx().g(), b, this.j0(b));
			this.typicalBasedOn(this, c);
			if (c.basedOn() != null && c.basedOn().count() > 0) {
				return c.basedOn();
			}
		}
		return a;
	}
, 
	ih: null
, 
	getOpenColumnAsArray: function () {
		if (this.i1() == null) {
			return null;
		}
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			if (this.ih != null) {
				return this.ih.asArrayList();
			}
			var a = new $.ig.List$1(Number, 2, this.i1().count());
			var b = (this.xAxis()).sortedIndices();
			var c = this.i1().asArray();
			for (var d = 0; d < b.count(); d++) {
				a.add(c[b.__inner[d]]);
			}
			this.ih = a;
			return this.ih.asArrayList();

		} else {
			return this.i1().asArray();
		}
	}
, 
	ii: null
, 
	getHighColumnAsArray: function () {
		if (this.i2() == null) {
			return null;
		}
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			if (this.ii != null) {
				return this.ii.asArrayList();
			}
			var a = new $.ig.List$1(Number, 2, this.i2().count());
			var b = (this.xAxis()).sortedIndices();
			var c = this.i2().asArray();
			for (var d = 0; d < b.count(); d++) {
				a.add(c[b.__inner[d]]);
			}
			this.ii = a;
			return this.ii.asArrayList();

		} else {
			return this.i2().asArray();
		}
	}
, 
	ij: null
, 
	getLowColumnAsArray: function () {
		if (this.i3() == null) {
			return null;
		}
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			if (this.ij != null) {
				return this.ij.asArrayList();
			}
			var a = new $.ig.List$1(Number, 2, this.i3().count());
			var b = (this.xAxis()).sortedIndices();
			var c = this.i3().asArray();
			for (var d = 0; d < b.count(); d++) {
				a.add(c[b.__inner[d]]);
			}
			this.ij = a;
			return this.ij.asArrayList();

		} else {
			return this.i3().asArray();
		}
	}
, 
	ik: null
, 
	getCloseColumnAsArray: function () {
		if (this.i4() == null) {
			return null;
		}
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			if (this.ik != null) {
				return this.ik.asArrayList();
			}
			var a = new $.ig.List$1(Number, 2, this.i4().count());
			var b = (this.xAxis()).sortedIndices();
			var c = this.i4().asArray();
			for (var d = 0; d < b.count(); d++) {
				a.add(c[b.__inner[d]]);
			}
			this.ik = a;
			return this.ik.asArrayList();

		} else {
			return this.i4().asArray();
		}
	}
, 
	il: null
, 
	getVolumeColumnAsArray: function () {
		if (this.i5() == null) {
			return null;
		}
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			if (this.il != null) {
				return this.il.asArrayList();
			}
			var a = new $.ig.List$1(Number, 2, this.i5().count());
			var b = (this.xAxis()).sortedIndices();
			var c = this.i5().asArray();
			for (var d = 0; d < b.count(); d++) {
				a.add(c[b.__inner[d]]);
			}
			this.il = a;
			return this.il.asArrayList();

		} else {
			return this.i5().asArray();
		}
	}

, 
	fc: function (a, b, c, d) {
		$.ig.Series.prototype.fc.call(this, a, b, c, d);
		if (this.xAxis() == null || !($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null)) {
			return;
		}
		var e = (this.xAxis()).sortedIndices();
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.insert:
				for (var f = b; f < c; f++) {
					var g = e.__inner[f];
					if (this.ih != null) {
						this.ih.insert(f, this.i1().item(g));
					}
					if (this.ii != null) {
						this.ii.insert(f, this.i2().item(g));
					}
					if (this.ij != null) {
						this.ij.insert(f, this.i3().item(g));
					}
					if (this.ik != null) {
						this.ik.insert(f, this.i4().item(g));
					}
					if (this.il != null) {
						this.il.insert(f, this.i5().item(g));
					}
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				if (this.ih != null) {
					this.ih.q(b, c);
				}
				if (this.ii != null) {
					this.ii.q(b, c);
				}
				if (this.ij != null) {
					this.ij.q(b, c);
				}
				if (this.ik != null) {
					this.ik.q(b, c);
				}
				if (this.il != null) {
					this.il.q(b, c);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				if (this.ih != null) {
					this.ih = new $.ig.List$1(Number, 0);
				}
				if (this.ii != null) {
					this.ii = new $.ig.List$1(Number, 0);
				}
				if (this.ij != null) {
					this.ij = new $.ig.List$1(Number, 0);
				}
				if (this.ik != null) {
					this.ik = new $.ig.List$1(Number, 0);
				}
				if (this.il != null) {
					this.il = new $.ig.List$1(Number, 0);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.change:
			case $.ig.FastItemsSourceEventAction.prototype.replace:
				for (var h = b; h < c; h++) {
					var i = e.__inner[h];
					if (this.ih != null) {
						this.ih.__inner[h] = this.i1().item(i);
					}
					if (this.ii != null) {
						this.ii.__inner[h] = this.i2().item(i);
					}
					if (this.ij != null) {
						this.ij.__inner[h] = this.i3().item(i);
					}
					if (this.ik != null) {
						this.ik.__inner[h] = this.i4().item(i);
					}
					if (this.il != null) {
						this.il.__inner[h] = this.i5().item(i);
					}
				}
				break;
		}
	}

, 
	jy: function (a, b) {
		var $self = this;
		var c = this.jw(this.i1());
		var d = this.jw(this.i4());
		var e = this.jw(this.i2());
		var f = this.jw(this.i3());
		var g = this.jw(this.i5());
		var h = (function () { var $ret = new $.ig.FinancialCalculationDataSource();
$ret.typicalColumn(new $.ig.CalculatedColumn(1, new $.ig.SafeEnumerable($self.i7()), $self.jx()));
$ret.trueRange(new $.ig.CalculatedColumn(1, new $.ig.SafeEnumerable($self.i8()), (function () { var $ret = new $.ig.List$1(String, 0);
$ret.add("HighColumn");
$ret.add("LowColumn");
$ret.add("CloseColumn"); return $ret;}())));
$ret.trueLow(new $.ig.CalculatedColumn(1, new $.ig.SafeEnumerable($self.i9()), (function () { var $ret = new $.ig.List$1(String, 0);
$ret.add("LowColumn");
$ret.add("CloseColumn"); return $ret;}())));
$ret.openColumn(c);
$ret.closeColumn(d);
$ret.highColumn(e);
$ret.lowColumn(f);
$ret.volumeColumn(g);
$ret.calculateFrom(a);
$ret.calculateCount(b);
$ret.minimumValue(NaN);
$ret.maximumValue(NaN);
$ret.count($self.dx() != null ? $self.dx().g() : 0); return $ret;}());
		return h;
	}

, 
	jz: function (a) {
		if (Number.isInfinity(a) || isNaN(a)) {
			return 0;
		}
		return a;
	}

, 
	j0: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.FinancialCalculationSupportingCalculations();
		$ret.l(new $.ig.ColumnSupportingCalculation(1, $.ig.Series.prototype.eMA, new $.ig.List$1(String, 0)));
		$ret.m(new $.ig.ColumnSupportingCalculation(1, $.ig.Series.prototype.sMA, new $.ig.List$1(String, 0)));
		$ret.n(new $.ig.ColumnSupportingCalculation(1, $.ig.Series.prototype.sTDEV, new $.ig.List$1(String, 0)));
		$ret.o(new $.ig.ColumnSupportingCalculation(1, $.ig.Series.prototype.movingSum, new $.ig.List$1(String, 0)));
		$ret.p(new $.ig.DataSourceSupportingCalculation(1, function (b) { return $.ig.Series.prototype.eMA(b.volumeColumn(), b.shortPeriod())		}, (function () { var $ret = new $.ig.List$1(String, 0);
		$ret.add($.ig.FinancialSeries.prototype.h1); return $ret;}())));
		$ret.q(new $.ig.DataSourceSupportingCalculation(1, function (c) { return $.ig.Series.prototype.eMA(c.volumeColumn(), c.longPeriod())		}, (function () { var $ret = new $.ig.List$1(String, 0);
		$ret.add($.ig.FinancialSeries.prototype.h1); return $ret;}())));
		$ret.r(new $.ig.DataSourceSupportingCalculation(1, function (d) { return $.ig.Series.prototype.eMA(d.typicalColumn(), d.shortPeriod())		}, a.typicalColumn().basedOn()));
		$ret.s(new $.ig.DataSourceSupportingCalculation(1, function (e) { return $.ig.Series.prototype.eMA(e.typicalColumn(), e.longPeriod())		}, a.typicalColumn().basedOn()));
		$ret.t($.ig.Series.prototype.toEnumerableRange);
		$ret.u($.ig.Series.prototype.toEnumerable);
		$ret.v($self.jz.on($self)); return $ret;}());
	}

, 
	categoryAxis: function () {
			return this.xAxis();
	}

, 
	er: function (a, b) {
		$.ig.Series.prototype.er.call(this, a, b);
		if (!this.dv()) {
			this.view().b4(b);
			return;
		}
		var c = $.ig.util.cast($.ig.FinancialSeriesView.prototype.$type, this.dt());
		this.view().b4(b);
		c.cg().q(this.resolution());
		if (this.ew(this.dt())) {
			return;
		}
		var d = new $.ig.CategoryFrame(3);
		this.jp(d, c);
		this.jq(d, c);
		this.dv(false);
	}
,
	$type: new $.ig.Type('FinancialSeries', $.ig.Series.prototype.$type, [$.ig.IHasCategoryAxis.prototype.$type])
}, true);

$.ig.util.defType('FinancialIndicator', 'FinancialSeries', {

	ed: function () {
		return new $.ig.FinancialIndicatorView(this);
	}

, 
	ea: function (a) {
		$.ig.FinancialSeries.prototype.ea.call(this, a);
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


			$.ig.FinancialSeries.prototype.init.call(this);
						this.ia = new $.ig.CategoryFrame(3);
				this.ib = new $.ig.CategoryFrame(3);
				this.ic = new $.ig.CategoryFrame(3);
				this.kt(new $.ig.List$1(Number, 0));
				this.ku(new $.ig.AxisRange(-100, 100));
		}
, 
	kx: function (a) {
		if (this.yAxis() != null && !this.yAxis().updateRange()) {
			this.renderSeries(true);
		}
	}

, 
	fc: function (a, b, c, d) {
		var $self = this;
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).notifyDataChanged();
		}
		this.ks().cy().ad(a, b, c, d);
		if (d != null && this.h8.containsKey(d)) {
			(function () { var $ret = $self.h8.tryGetValue(d, d); d = $ret.value; return $ret.ret; }());
		}
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			a = $.ig.FastItemsSourceEventAction.prototype.reset;
			b = 0;
			c = this.dx().g();
		}
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.change:
				if (this.k6(b, c, d)) {
					this.k7(b, c, d);
					this.kx(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.replace:
				if (this.k6(b, this.dx().g() - b, d)) {
					this.k7(b, this.dx().g() - b, d);
					this.kx(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.insert:
				if (this.k6(b, this.dx().g() - b, d)) {
					var e = new Array(c);
					for (var f = 0; f < c; f++) {
						e[f] = 0;
					}
					this.kt().p(b, e);
					this.k7(b, this.dx().g() - b, d);
					this.kx(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				if (this.k6(b, this.dx().g() - b, d)) {
					this.kt().q(b, c);
					this.k7(b, this.dx().g() - b, d);
					this.kx(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				if (this.k6(b, this.dx().g() - b, d)) {
					this.kt(new $.ig.List$1(Number, 2, this.dx().g()));
					var g = new Array(c);
					for (var h = 0; h < c; h++) {
						g[h] = 0;
					}
					this.kt().p(0, g);
					this.k7(b, this.dx().g() - b, d);
					this.kx(true);
				}
				break;
		}
	}

, 
	displayType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.displayTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.displayTypeProperty);
		}
	}

, 
	ignoreFirst: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.ignoreFirstProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.ignoreFirstProperty);
		}
	}

, 
	trendLineType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.trendLineTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.trendLineTypeProperty);
		}
	}

, 
	trendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.trendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.trendLineBrushProperty);
		}
	}

, 
	actualTrendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.actualTrendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.actualTrendLineBrushProperty);
		}
	}

, 
	trendLineThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.trendLineThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.trendLineThicknessProperty);
		}
	}

, 
	trendLineDashCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.trendLineDashCapProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.trendLineDashCapProperty);
		}
	}

, 
	trendLineDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.trendLineDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.trendLineDashArrayProperty);
		}
	}

, 
	trendLinePeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.trendLinePeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.trendLinePeriodProperty);
		}
	}

, 
	kz: function () {
		return -1;
	}

, 
	trendLineZIndex: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialIndicator.prototype.trendLineZIndexProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialIndicator.prototype.trendLineZIndexProperty);
		}
	}

, 
	_kt: null,
	kt: function (a) {
		if (arguments.length === 1) {
			this._kt = a;
			return a;
		} else {
			return this._kt;
		}
	}

, 
	_ku: null,
	ku: function (a) {
		if (arguments.length === 1) {
			this._ku = a;
			return a;
		} else {
			return this._ku;
		}
	}

, 
	k4: function (a, b) {
	}

, 
	k5: function (a, b) {
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		switch (b) {
			case $.ig.FinancialIndicator.prototype.hq:
				this.ks().cy($.ig.CategoryTrendLineManagerBase.prototype.af(this.ks().cy(), this.xAxis(), this.rootCanvas(), this));
				break;
		}
		$.ig.FinancialSeries.prototype.e6.call(this, a, b, c, d);
		if (this.ks().cy().ae(a, b, c, d, this.trendLineDashArray())) {
			this.renderSeries(false);
			this.e5();
		}
		switch (b) {
			case $.ig.FinancialIndicator.prototype.be:
				if (this.dx() != null) {
					this.kt(new $.ig.List$1(Number, 2, this.dx().g()));
					var e = new Array(this.dx().g());
					for (var f = 0; f < this.dx().g(); f++) {
						e[f] = 0;
					}
					this.kt().p(0, e);
					this.k7(0, this.dx().g(), null);
					if (this.yAxis() != null && !this.yAxis().updateRange()) {
						this.i0().cg().q(this.resolution());
						this.renderSeries(false);
					}
				}
				break;
			case $.ig.FinancialIndicator.prototype.b6:
				this.fj();
				break;
			case $.ig.FinancialIndicator.prototype.kd:
				this.eu(true, this.view());
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.FinancialIndicator.prototype.ht:
			case $.ig.FinancialIndicator.prototype.hv:
			case $.ig.FinancialIndicator.prototype.hx:
			case $.ig.FinancialIndicator.prototype.hz:
			case $.ig.FinancialIndicator.prototype.h1:
				if (this.dx() != null) {
					if (this.kt().count() != this.dx().g()) {
						this.kt(new $.ig.List$1(Number, 2, this.dx().g()));
						var g = new Array(this.dx().g());
						for (var h = 0; h < this.dx().g(); h++) {
							g[h] = 0;
						}
						this.kt().p(0, g);
					}
					if (this.k6(0, this.dx().g() - 1, b)) {
						this.la();
					}
				}
				break;
			case $.ig.FinancialIndicator.prototype.hq:
				if (this.xAxis() != null && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null || $.ig.util.cast($.ig.ISortingAxis.prototype.$type, c) !== null)) {
					this.la();
				}
				break;
			case $.ig.FinancialIndicator.prototype.hr:
			case $.ig.FinancialIndicator.prototype.ke:
				this.la();
				this.e5();
				break;
			case $.ig.FinancialIndicator.prototype.b4:
				this.e5();
				break;
		}
	}

, 
	k6: function (a, b, c) {
		if (c == null) {
			return true;
		}
		if (this.k5(a, b).contains(c)) {
			return true;
		}
		return false;
	}

, 
	k7: function (a, b, c) {
		this.k4(a, b);
	}

, 
	em: function (a) {
		if (this.dx() == null) {
			return null;
		}
		if (a != null && a == this.yAxis()) {
			return this.ku();
		}
		return null;
	}

, 
	scrollIntoView: function (a) {
		var b = this.dx() != null ? this.dx().item1(a) : -1;
		var c = this.view().ac();
		var d = this.view().ab();
		var e = new $.ig.ScalerParams(c, d, this.xAxis().isInverted());
		var f = new $.ig.ScalerParams(c, d, this.yAxis().isInverted());
		if (b >= 0 && c != null && d != null) {
			if (this.xAxis() != null) {
				var g = this.xAxis().getScaledValue(b, e);
				if (g < c.left() + 0.1 * c.width()) {
					g = g + 0.4 * c.width();
				}
				if (g > c.right() - 0.1 * c.width()) {
					g = g - 0.4 * c.width();
				}
				c.x(g - 0.5 * c.width());
			}
			if (this.yAxis() != null && this.kt() != null && b < this.kt().count()) {
				var h = this.yAxis().getScaledValue(this.kt().__inner[b], f);
				if (h < c.top() + 0.1 * c.height()) {
					h = h + 0.4 * c.height();
				}
				if (h > c.bottom() - 0.1 * c.height()) {
					h = h - 0.4 * c.height();
				}
				c.y(h - 0.5 * c.height());
			}
			this.syncLink().bp(this.seriesViewer(), c);
		}
		return b >= 0;
	}

, 
	es: function (a, b, c) {
		var d = $.ig.FinancialSeries.prototype.es.call(this, a, b, c);
		if (this.kt() == null || this.kt().count() == 0) {
			d = false;
		}
		return d;
	}

, 
	jp: function (a, b) {
		var $self = this;
		var c = b.ac();
		var d = b.ab();
		var e = this.xAxis();
		var f = this.yAxis();
		var g = new $.ig.ScalerParams(c, d, e.isInverted());
		var h = new $.ig.ScalerParams(c, d, f.isInverted());
		a.d.clear();
		a.f.clear();
		a.g.clear();
		var i = 0;
		var j = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
		if (j != null && j.sortedIndices().count() != this.dx().g()) {
			return;
		}
		var k = this.xAxis().categoryMode();
		switch (k) {
			case $.ig.CategoryMode.prototype.mode0:
				i = 0;
				break;
			case $.ig.CategoryMode.prototype.mode1:
				i = 0.5 * this.xAxis().getCategorySize(c, d);
				break;
			case $.ig.CategoryMode.prototype.mode2:
				i = this.xAxis().getGroupCenter(this.index(), c, d);
				break;
		}
		var l = this.kz();
		if (l == -1) {
			l = this.trendLinePeriod();
		}
		var m = $.ig.util.cast($.ig.FinancialIndicatorView.prototype.$type, b);
		m.cy().prepareLine(a.g, this.trendLineType(), this.kt(), l, function (n) { return $self.xAxis().getScaledValue(n, g)		}, function (o) { return $self.yAxis().getScaledValue(o, h)		}, (function () { var $ret = new $.ig.TrendResolutionParams();
		$ret.j(b.cg().h());
		$ret.h(b.cg().f());
		$ret.i(b.cg().g());
		$ret.n(i);
		$ret.m($self.resolution());
		$ret.k(d);
		$ret.l(c); return $ret;}()));
		var p = this.k8(this.xAxis().getUnscaledValue(2, g) - this.xAxis().getUnscaledValue(1, g));
		for (var q = b.cg().f(); q <= b.cg().g(); ++q) {
			var r;
			if (j == null) {
				r = b.cg().getBucket(q);

			} else {
				var s = j.sortedIndices().__inner[q];
				var t = j.getUnscaledValueAt(s);
				var u = this.k8(this.kt().__inner[q]);
				var v = u;
				var w = t;
				while (q < b.cg().g()) {
					s = j.sortedIndices().__inner[q + 1];
					w = j.getUnscaledValueAt(s);
					if (w - t > p) {
						break;
					}
					q++;
					var x = this.k8(this.kt().__inner[q]);
					u = Math.min(u, x);
					v = Math.max(v, x);
				}
				var y = NaN;
				if (!isNaN(t)) {
					y = this.xAxis().getScaledValue(t, g);
				}
				r = (function () { var $ret = new Array();
				$ret.add($self.k8(y));
				$ret.add(u);
				$ret.add(v); return $ret;}());
			}
			if (!isNaN(r[0])) {
				if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
					r[0] = (r[0] + i);

				} else {
					r[0] = (e.getScaledValue(r[0], g) + i);
				}
				r[1] = f.getScaledValue(r[1], h);
				if (b.cg().h() > 1 || j != null) {
					r[2] = f.getScaledValue(r[2], h);

				} else {
					r[2] = r[1];
				}
				a.d.add(r);
			}
		}
		return;
	}

, 
	k8: function (a) {
		return a;
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		var c = b;
		c.c5(a);
	}

, 
	jq: function (a, b) {
		var $self = this;
		var c = $.ig.util.cast($.ig.FinancialIndicatorView.prototype.$type, b);
		c.c5(false);
		var e = function (d) {
	return a.d.__inner[d][0];
};
		var g = function (f) {
	return a.d.__inner[f][1];
};
		var i = function (h) {
	return a.d.__inner[h][0];
};
		var k = function (j) {
	return a.d.__inner[j][2];
};
		c.cy().t(a.g);
		var l = b.ab();
		var m = 0;
		if (a.d.count() > 0) {
			switch (this.displayType()) {
				case $.ig.IndicatorDisplayType.prototype.line:
					c.c7(a.d.count(), e, g, i, k, true);
					break;
				case $.ig.IndicatorDisplayType.prototype.area:
					if (this.yAxis() != null) {
						m = this.k9(b);

					} else {
						m = 0.5 * (l.top() + l.bottom());
					}
					c.c8(a.d.count(), e, g, i, k, true, m);
					break;
				case $.ig.IndicatorDisplayType.prototype.column:
					m = this.k9(b);
					c.c9(a.d.count(), e, g, i, k, true, m);
					break;
				default:
					throw new $.ig.NotImplementedException();
			}
		}
		c.c6();
	}

, 
	k9: function (a) {
		var b = 0;
		var c = a.ac();
		var d = a.ab();
		if (!c.isEmpty() && !d.isEmpty() && this.yAxis() != null) {
			var e = new $.ig.ScalerParams(c, d, this.yAxis().isInverted());
			b = this.yAxis().getScaledValue(this.yAxis().referenceValue(), e);
		}
		return b;
	}

, 
	fj: function () {
		$.ig.Series.prototype.fj.call(this);
		if (this.index() < 0) {
			return;
		}
		this.ks().da();
	}

, 
	la: function () {
		this.ks().cy().ac();
		this.k4(0, this.kt().count());
		if (this.yAxis() != null && !this.yAxis().updateRange()) {
			this.renderSeries(false);
		}
	}

, 
	gw: function (a) {
		$.ig.Series.prototype.gw.call(this, a);
		var b = new $.ig.PolyLineVisualData(1, "trendLine", this.ks().cy().n());
		b.tags().add("Trend");
		a.shapes().add(b);
	}
,
	$type: new $.ig.Type('FinancialIndicator', $.ig.FinancialSeries.prototype.$type)
}, true);

$.ig.util.defType('StrategyBasedIndicator', 'FinancialIndicator', {

		init: function () {


			$.ig.FinancialIndicator.prototype.init.call(this);
						this.ls(this.lt());
				this.a3(this.lu());
		}
, 
	_ls: null,
	ls: function (a) {
		if (arguments.length === 1) {
			this._ls = a;
			return a;
		} else {
			return this._ls;
		}
	}

, 
	_lt: null,
	lt: function () {
		return this._lt;	}

, 
	_lu: null,
	lu: function () {
		return this._lu;	}

, 
	lz: function () {
		return -Number.MAX_VALUE;
	}

, 
	l0: function () {
		return -Number.MAX_VALUE;
	}

, 
	l1: function () {
		return -Number.MAX_VALUE;
	}

, 
	l2: function (a, b, c) {
		var $self = this;
		var f = $.ig.DependencyProperty.prototype.l(c, $.ig.Number.prototype.$type, b, new $.ig.PropertyMetadata(1, a, function (d, e) {
	($.ig.util.cast($.ig.StrategyBasedIndicator.prototype.$type, d)).ej(c, e.f(), e.e());
}));
		$.ig.StrategyBasedIndicator.prototype.lp.add(c);
		return f;
	}

, 
	l3: function (a, b) {
		return $.ig.StrategyBasedIndicator.prototype.l2(a, b, $.ig.StrategyBasedIndicator.prototype.ll);
	}

, 
	l4: function (a, b) {
		return $.ig.StrategyBasedIndicator.prototype.l2(a, b, $.ig.StrategyBasedIndicator.prototype.lm);
	}

, 
	l5: function (a, b) {
		return $.ig.StrategyBasedIndicator.prototype.l2(a, b, $.ig.StrategyBasedIndicator.prototype.ln);
	}

, 
	k5: function (a, b) {
		var c = this.jy(a, b);
		var d = this.j0(c);
		return this.ls().b(c, d);
	}

, 
	k4: function (a, b) {
		var c = this.jy(a, b);
		if (b == 0) {
			return false;
		}
		if (!this.jr(this.k5(a, b))) {
			return false;
		}
		var d = this.j0(c);
		if (this.ku() != null) {
			c.minimumValue(this.ku().c());
			c.maximumValue(this.ku().d());
		}
		var e = this.ls().a(c, d);
		for (var f = 0; f < this.ignoreFirst() && f < c.indicatorColumn().count(); f++) {
			c.indicatorColumn().item(f, NaN);
		}
		if (this.yAxis() != null && this.l6(c)) {
			this.yAxis().updateRange();
		}
		return e;
	}

, 
	l6: function (a) {
		if (!isNaN(a.minimumValue()) && !isNaN(a.maximumValue()) && a.specifiesRange()) {
			var b = this.ku();
			this.ku(new $.ig.AxisRange(a.minimumValue(), a.maximumValue()));
			return this.l7(b, this.ku());
		}
		var c = Number.MAX_VALUE;
		var d = -Number.MAX_VALUE;
		var f = a.indicatorColumn().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			if (!isNaN(e)) {
				c = Math.min(c, e);
				d = Math.max(d, e);
			}
		}
		var g = this.ku();
		this.ku(new $.ig.AxisRange(c, d));
		return this.l7(g, this.ku());
	}

, 
	l7: function (a, b) {
		if (a == null || b == null) {
			return true;
		}
		if (a.c() != b.c()) {
			return true;
		}
		if (a.d() != b.d()) {
			return true;
		}
		return false;
	}

, 
	l8: function (a) {
		if (a == -Number.MAX_VALUE) {
			return 0;
		}
		if (a > this.kt().count() && this.kt().count() > 0) {
			a = this.kt().count() - 1;
		}
		if (a < 1) {
			return 1;
		}
		return a;
	}

, 
	jy: function (a, b) {
		var c = $.ig.FinancialSeries.prototype.jy.call(this, a, b);
		c.indicatorColumn(this.kt());
		c.period(this.l8(this.lz()));
		c.shortPeriod(this.l8(this.l0()));
		c.longPeriod(this.l8(this.l1()));
		c.multiplier(this.l9());
		return c;
	}

, 
	l9: function () {
		return 1;
	}

, 
	ma: function (a, b) {
		var $self = this;
		var e = $.ig.DependencyProperty.prototype.l($.ig.StrategyBasedIndicator.prototype.lo, Number, b, new $.ig.PropertyMetadata(1, a, function (c, d) {
	($.ig.util.cast($.ig.StrategyBasedIndicator.prototype.$type, c)).ej($.ig.StrategyBasedIndicator.prototype.lo, d.f(), d.e());
}));
		$.ig.StrategyBasedIndicator.prototype.lp.add($.ig.StrategyBasedIndicator.prototype.lo);
		return e;
	}

, 
	e6: function (a, b, c, d) {
		$.ig.FinancialIndicator.prototype.e6.call(this, a, b, c, d);
		if ($.ig.StrategyBasedIndicator.prototype.lp.contains(b)) {
			if (this.yAxis() != null && !this.yAxis().updateRange()) {
				this.i0().cg().q(this.resolution());
				this.k4(0, this.kt().count());
				this.ks().cy().ac();
				this.renderSeries(false);
			}
		}
	}
,
	$type: new $.ig.Type('StrategyBasedIndicator', $.ig.FinancialIndicator.prototype.$type)
}, true);

$.ig.util.defType('AbsoluteVolumeOscillatorIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.AbsoluteVolumeOscillatorIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.AbsoluteVolumeOscillatorIndicator.prototype.$type;
	}

, 
	shortPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AbsoluteVolumeOscillatorIndicator.prototype.shortPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.AbsoluteVolumeOscillatorIndicator.prototype.shortPeriodProperty);
		}
	}

, 
	l0: function () {
		return this.shortPeriod();
	}

, 
	longPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AbsoluteVolumeOscillatorIndicator.prototype.longPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.AbsoluteVolumeOscillatorIndicator.prototype.longPeriodProperty);
		}
	}

, 
	l1: function () {
		return this.longPeriod();
	}
,
	$type: new $.ig.Type('AbsoluteVolumeOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('IndicatorCalculationStrategy', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
	}

, 
	b: function (a, b) {
	}
,
	$type: new $.ig.Type('IndicatorCalculationStrategy', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AbsoluteVolumeOscillatorIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(b.p().d());
		c.w(b.q().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = b.p().c()(a).getEnumerator();
		var d = b.q().c()(a).getEnumerator();
		var e = a.indicatorColumn();
		var f = 0;
		while (c.moveNext() && d.moveNext()) {
			var g = c.current() - d.current();
			e.item(f, b.v()(g));
			++f;
		}
		return true;
	}
,
	$type: new $.ig.Type('AbsoluteVolumeOscillatorIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('AccumulationDistributionIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.AccumulationDistributionIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.AccumulationDistributionIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('AccumulationDistributionIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('StreamingIndicatorCalculationStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	c: function (a, b) {
	}
,
	$type: new $.ig.Type('StreamingIndicatorCalculationStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('AccumulationDistributionIndicatorStrategy', 'StreamingIndicatorCalculationStrategy', {
	init: function () {

		$.ig.StreamingIndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.h1);
		return c;
	}

, 
	a: function (a, b) {
		var c = 0;
		var e = this.c(a, b).getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			a.indicatorColumn().item(c, d);
			c++;
		}
		return true;
	}

, 
	c: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : 0,
			$d : 0,
			$e : 0,
			$f : 0,
			$g : 0,
			$h : 0,
			$i : 0,
			$j : 0,
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
							this.$c = 0;
							this.$d = Number.POSITIVE_INFINITY;
							this.$e = Number.NEGATIVE_INFINITY;
							this.$f = a.indicatorColumn() != null ? a.indicatorColumn().count() : 0;
							this.$g = a.closeColumn() != null ? a.closeColumn().count() : 0;
							this.$h = a.highColumn() != null ? a.highColumn().count() : 0;
							this.$i = a.volumeColumn() != null ? a.volumeColumn().count() : 0;
							this.$j = Math.min(this.$f, Math.min(this.$g, Math.min(this.$h, this.$i)));
							this.$state = 1;
							break;
						case 1:
							this.$k = 0;
							this.$state = 5;
							break;
						case 2:
							this.$l = a.closeColumn().item(this.$k);
							this.$m = a.lowColumn().item(this.$k);
							this.$n = a.highColumn().item(this.$k);
							this.$o = a.volumeColumn().item(this.$k);
							this.$p = ((this.$l - this.$m) - (this.$n - this.$l)) / (this.$n - this.$m);
							this.$c += b.v()(this.$p * this.$o);
							this.$d = Math.min(this.$d, this.$c);
							this.$e = Math.max(this.$e, this.$c);
							this.$current =  this.$c;
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							++this.$k;
							this.$state = 5;
							break;
						case 5:
							if (this.$k < this.$j) {
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
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}
,
	$type: new $.ig.Type('AccumulationDistributionIndicatorStrategy', $.ig.StreamingIndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('AverageDirectionalIndexIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.AverageDirectionalIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.AverageDirectionalIndexIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AverageDirectionalIndexIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.AverageDirectionalIndexIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('AverageDirectionalIndexIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('AverageDirectionalIndexIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.w(a.trueRange().basedOn());
		c.w(b.l().d());
		return c;
	}

, 
	c: function (a, b, c) {
		return b.item(a) - b.item(a - 1);
	}

, 
	d: function (a, b, c) {
		return c.item(a - 1) - c.item(a);
	}

, 
	e: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : 0,
			$d : 0,
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
							this.$current =  0;
							this.$state = 1
							return true;
						case 1:
							this.$c = 0;
							this.$d = 0;
							this.$state = 2;
							break;
						case 2:
							this.$e = 1;
							this.$state = 11;
							break;
						case 3:
							this.$c = this.$this.c(this.$e, a, b);
							this.$d = this.$this.d(this.$e, a, b);
							this.$state = 4;
							break;
						case 4:
							if (this.$c > this.$d && this.$c > 0) {
								this.$state = 5;
							}
							else {
								this.$state = 7;
							}
							break;

						case 5:
							this.$current =  this.$c;
							this.$state = 6
							return true;
						case 6:
							this.$state = 9;
							break;

						case 7:
							this.$current =  0;
							this.$state = 8
							return true;
						case 8:
							this.$state = 9;
							break;
						case 9:
							this.$state = 10;
							break;
						case 10:
							this.$e++;
							this.$state = 11;
							break;
						case 11:
							if (this.$e < a.count()) {
								this.$state = 3;
							}
							else {
								this.$state = 12;
							}
							break;
						case 12:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	f: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : 0,
			$d : 0,
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
							this.$current =  0;
							this.$state = 1
							return true;
						case 1:
							this.$c = 0;
							this.$d = 0;
							this.$state = 2;
							break;
						case 2:
							this.$e = 1;
							this.$state = 11;
							break;
						case 3:
							this.$c = this.$this.c(this.$e, a, b);
							this.$d = this.$this.d(this.$e, a, b);
							this.$state = 4;
							break;
						case 4:
							if (this.$d > this.$c && this.$d > 0) {
								this.$state = 5;
							}
							else {
								this.$state = 7;
							}
							break;

						case 5:
							this.$current =  this.$d;
							this.$state = 6
							return true;
						case 6:
							this.$state = 9;
							break;

						case 7:
							this.$current =  0;
							this.$state = 8
							return true;
						case 8:
							this.$state = 9;
							break;
						case 9:
							this.$state = 10;
							break;
						case 10:
							this.$e++;
							this.$state = 11;
							break;
						case 11:
							if (this.$e < a.count()) {
								this.$state = 3;
							}
							else {
								this.$state = 12;
							}
							break;
						case 12:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	g: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : null,
			$d : null,
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
							this.$c = b.l().c()(this.$this.e(a.highColumn(), a.lowColumn()), a.period()).getEnumerator();
							this.$d = b.l().c()(a.trueRange(), a.period()).getEnumerator();
							this.$state = 1;
							break;
						case 1:
							this.$state = 4;
							break;
						case 2:
							this.$current =  b.v()(this.$c.current() / this.$d.current());
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$c.moveNext() && this.$d.moveNext()) {
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
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	h: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : null,
			$d : null,
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
							this.$c = b.l().c()(this.$this.f(a.highColumn(), a.lowColumn()), a.period()).getEnumerator();
							this.$d = b.l().c()(a.trueRange(), a.period()).getEnumerator();
							this.$state = 1;
							break;
						case 1:
							this.$state = 4;
							break;
						case 2:
							this.$current =  b.v()(this.$c.current() / this.$d.current());
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$c.moveNext() && this.$d.moveNext()) {
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
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	i: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : null,
			$d : null,
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
							this.$c = this.$this.g(a, b).getEnumerator();
							this.$d = this.$this.h(a, b).getEnumerator();
							this.$c.moveNext();
							this.$d.moveNext();
							this.$state = 1;
							break;
						case 1:
							this.$state = 4;
							break;
						case 2:
							this.$current =  Math.abs(b.v()((this.$c.current() - this.$d.current()) / (this.$c.current() + this.$d.current())));
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$c.moveNext() && this.$d.moveNext()) {
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
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	j: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : null,
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
							this.$c = b.l().c()(this.$this.i(a, b), a.period()).getEnumerator();
							this.$current =  0;
							this.$state = 1
							return true;
						case 1:
							this.$state = 2;
							break;
						case 2:
							this.$state = 5;
							break;
						case 3:
							this.$current =  this.$c.current() * 100;
							this.$state = 4
							return true;
						case 4:
							this.$state = 5;
							break;
						case 5:
							if (this.$c.moveNext()) {
								this.$state = 3;
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
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	a: function (a, b) {
		var c = this.j(a, b).getEnumerator();
		var d = a.indicatorColumn();
		for (var e = 0; e < d.count(); e++) {
			if (c.moveNext()) {
				d.item(e, c.current());
			}
		}
		return true;
	}
,
	$type: new $.ig.Type('AverageDirectionalIndexIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('AverageTrueRangeIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.AverageTrueRangeIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.AverageTrueRangeIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AverageTrueRangeIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.AverageTrueRangeIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('AverageTrueRangeIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('AverageTrueRangeIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(a.trueRange().basedOn());
		c.w(b.l().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = 0;
		var e = b.l().c()(a.trueRange(), a.period()).getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			a.indicatorColumn().item(c, d);
			++c;
		}
		return true;
	}
,
	$type: new $.ig.Type('AverageTrueRangeIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('FinancialOverlay', 'FinancialSeries', {

		init: function () {


			$.ig.FinancialSeries.prototype.init.call(this);
						this.kg(false);
		}
, 
	fc: function (a, b, c, d) {
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).notifyDataChanged();
		}
		this.i0().cg().q(this.resolution());
		this.kj();
		if (this.yAxis() != null) {
			this.yAxis().updateRange();
		}
		this.renderSeries(true);
	}

, 
	ignoreFirst: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialOverlay.prototype.ignoreFirstProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialOverlay.prototype.ignoreFirstProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		switch (b) {
			case $.ig.FinancialOverlay.prototype.be:
				this.kg(false);
				break;
			case $.ig.FinancialOverlay.prototype.kd:
				this.kg(false);
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.FinancialOverlay.prototype.hq:
				this.kg(false);
				break;
		}
		$.ig.FinancialSeries.prototype.e6.call(this, a, b, c, d);
	}

, 
	onApplyTemplate: function () {
		$.ig.Control.prototype.a6.call(this);
		this.renderSeries(false);
	}

, 
	scrollIntoView: function (a) {
		var b = this.dx() != null ? this.dx().item1(a) : -1;
		var c = this.view().ac();
		var d = this.view().ab();
		var e = new $.ig.Rect(0, 0, 0, 1, 1);
		var f = new $.ig.ScalerParams(e, e, this.xAxis().isInverted());
		var g = new $.ig.ScalerParams(e, e, this.yAxis().isInverted());
		if (b >= 0 && c != null && d != null) {
			if (this.xAxis() != null) {
				var h = this.xAxis().getScaledValue(b, f);
				if (h < c.left() + 0.1 * c.width()) {
					h = h + 0.4 * c.width();
				}
				if (h > c.right() - 0.1 * c.width()) {
					h = h - 0.4 * c.width();
				}
				c.x(h - 0.5 * c.width());
			}
			if (this.yAxis() != null && this.i3() != null && this.i2() != null && b < this.i3().count() && b < this.i2().count()) {
				var i = this.yAxis().getScaledValue(this.i3().item(b), g);
				var j = this.yAxis().getScaledValue(this.i2().item(b), g);
				if (!isNaN(i) && !isNaN(j)) {
					var k = Math.abs(i - j);
					if (c.height() < k) {
						c.height(k);
						c.y(Math.min(i, j));

					} else {
						if (i < c.top() + 0.1 * c.height()) {
							i = i + 0.4 * c.height();
						}
						if (i > c.bottom() - 0.1 * c.height()) {
							i = i - 0.4 * c.height();
						}
						c.y(i - 0.5 * c.height());
					}
				}
			}
			this.syncLink().bp(this.seriesViewer(), c);
		}
		return b >= 0;
	}

, 
	em: function (a) {
		if (a != null && a == this.yAxis() && this.i3() != null && this.i2() != null) {
			return new $.ig.AxisRange(this.i3().minimum(), this.i2().maximum());
		}
		return null;
	}

, 
	_kg: null,
	kg: function (a) {
		if (arguments.length === 1) {
			this._kg = a;
			return a;
		} else {
			return this._kg;
		}
	}

, 
	kj: function () {
	}
,
	$type: new $.ig.Type('FinancialOverlay', $.ig.FinancialSeries.prototype.$type)
}, true);

$.ig.util.defType('BollingerBandsOverlay', 'FinancialOverlay', {

		init: function () {

			this.kp = new $.ig.List$1(Number, 0);
			this.kq = new $.ig.List$1(Number, 0);

			$.ig.FinancialOverlay.prototype.init.call(this);
						this.a3($.ig.BollingerBandsOverlay.prototype.$type);
				this.ia = new $.ig.CategoryFrame(4);
				this.ib = new $.ig.CategoryFrame(4);
				this.ic = new $.ig.CategoryFrame(4);
		}
, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BollingerBandsOverlay.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.BollingerBandsOverlay.prototype.periodProperty);
		}
	}

, 
	multiplier: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BollingerBandsOverlay.prototype.multiplierProperty, a);
			return a;
		} else {
			return this.b($.ig.BollingerBandsOverlay.prototype.multiplierProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		if (this.jx().contains(b)) {
			this.kg(false);
		}
		$.ig.FinancialOverlay.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.BollingerBandsOverlay.prototype.kl:
				this.kg(false);
				this.renderSeries(false);
				break;
			case $.ig.BollingerBandsOverlay.prototype.km:
				this.renderSeries(false);
				break;
		}
	}
, 
	kn: null, 
	ko: null
, 
	kj: function () {
		this.kp.clear();
		this.kq.clear();
		var a = $.ig.Series.prototype.sMA(new $.ig.SafeEnumerable(this.i7()), this.period()).getEnumerator();
		var b = $.ig.Series.prototype.sTDEV(new $.ig.SafeEnumerable(this.i7()), this.period()).getEnumerator();
		this.ko = Number.MAX_VALUE;
		this.kn = -Number.MAX_VALUE;
		var c = true;
		var d = true;
		var e = this.multiplier();
		while (c || d) {
			if (a.moveNext()) {
				this.kp.add(a.current());

			} else {
				c = false;
			}
			if (b.moveNext()) {
				this.kq.add(b.current());

			} else {
				d = false;
			}
			if (c && d) {
				this.ko = Math.min(this.ko, a.current() - b.current() * e);
				this.kn = Math.max(this.kn, a.current() + b.current() * e);
			}
		}
		return true;
	}

, 
	em: function (a) {
		if (this.kp == null || this.kq == null || a == null || this.dx() == null || a != this.yAxis()) {
			return null;
		}
		var b = new $.ig.AxisRange(this.ko, this.kn);
		return b;
	}
, 
	kp: null, 
	kq: null
, 
	kv: function (a) {
		return a;
	}

, 
	jp: function (a, b) {
		var $self = this;
		var c = b.ac();
		var d = b.ab();
		var e = this.xAxis();
		var f = this.yAxis();
		var g = new $.ig.ScalerParams(c, d, e.isInverted());
		var h = new $.ig.ScalerParams(c, d, f.isInverted());
		a.d.clear();
		a.f.clear();
		a.g.clear();
		var i = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
		if (i != null && i.sortedIndices().count() != this.dx().g()) {
			return;
		}
		var j = 0;
		var k = this.xAxis().categoryMode();
		switch (k) {
			case $.ig.CategoryMode.prototype.mode0:
				j = 0;
				break;
			case $.ig.CategoryMode.prototype.mode1:
				j = 0.5 * this.xAxis().getCategorySize(c, d);
				break;
			case $.ig.CategoryMode.prototype.mode2:
				var l = this.index();
				j = this.xAxis().getGroupCenter(this.index(), c, d);
				break;
		}
		if (!this.kg()) {
			this.kg(this.kj());
			if (this.yAxis() != null) {
				this.yAxis().updateRange();
			}
		}
		var m = this.kv(this.xAxis().getUnscaledValue(2, g) - this.xAxis().getUnscaledValue(1, g));
		for (var n = b.cg().f(); n <= b.cg().g(); ++n) {
			var o;
			if (i == null) {
				o = b.cg().getBucket(n);

			} else {
				var p = i.sortedIndices().__inner[n];
				var q = i.getUnscaledValueAt(p);
				var r = this.kv(this.kp.__inner[n]);
				var s = this.kv(this.kq.__inner[n]);
				var t = r;
				var u = s;
				var v = q;
				var w = 1;
				while (n < b.cg().g()) {
					p = i.sortedIndices().__inner[n + 1];
					v = i.getUnscaledValueAt(p);
					if (v - q > m) {
						break;
					}
					n++;
					t += this.kv(this.kp.__inner[n]);
					u += this.kv(this.kq.__inner[n]);
					w++;
				}
				t /= w;
				u /= w;
				var x = this.kv(t - u * this.multiplier());
				var y = this.kv(t);
				var z = this.kv(t + u * this.multiplier());
				var aa = NaN;
				if (!isNaN(q)) {
					aa = this.xAxis().getScaledValue(q, g);
				}
				o = (function () { var $ret = new Array();
				$ret.add($self.kv(aa));
				$ret.add(x);
				$ret.add(y);
				$ret.add(z); return $ret;}());
			}
			var ab = Math.max(1, m);
			if (!isNaN(o[0]) && n * ab >= this.ignoreFirst()) {
				if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
					o[0] = (o[0] + j);

				} else {
					o[0] = (e.getScaledValue(o[0], g) + j);
				}
				o[1] = f.getScaledValue(o[1], h);
				o[2] = f.getScaledValue(o[2], h);
				o[3] = f.getScaledValue(o[3], h);
				a.d.add(o);
			}
		}
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		var c = b;
		if (c != null) {
			c.cv();
		}
	}

, 
	es: function (a, b, c) {
		var d = $.ig.FinancialSeries.prototype.es.call(this, a, b, c);
		if (!this.jr(this.jx())) {
			d = false;
		}
		return d;
	}

, 
	jq: function (a, b) {
		var $self = this;
		var c = $.ig.util.cast($.ig.BollingerBandsOverlayView.prototype.$type, b);
		c.cv();
		var d = a.d.count();
		var f = function (e) { return a.d.__inner[e][0]};
		var h = function (g) { return a.d.__inner[d - 1 - g][0]};
		var j = function (i) { return a.d.__inner[i][1]};
		var l = function (k) { return a.d.__inner[k][2]};
		var n = function (m) { return a.d.__inner[d - 1 - m][3]};
		c.cu(d, f, h, j, l, n);
	}

, 
	ed: function () {
		return new $.ig.BollingerBandsOverlayView(this);
	}

, 
	ea: function (a) {
		$.ig.FinancialSeries.prototype.ea.call(this, a);
		this.ku($.ig.util.cast($.ig.BollingerBandsOverlayView.prototype.$type, a));
	}

, 
	_ku: null,
	ku: function (a) {
		if (arguments.length === 1) {
			this._ku = a;
			return a;
		} else {
			return this._ku;
		}
	}
,
	$type: new $.ig.Type('BollingerBandsOverlay', $.ig.FinancialOverlay.prototype.$type)
}, true);

$.ig.util.defType('FinancialBucketCalculator', 'Object', {

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
						if (a == null) {
					throw new $.ig.ArgumentNullException("view");
				}
				this.e(a);
				this.f(-1);
				this.g(this.g());
				this.h(0);
		}
, 
	getBucket: function (a) {
		return null;
	}

, 
	getErrorBucket: function (a, b) {
		return NaN;
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
	getBucketInfo: function (a, b, c, d) {
		a = this.f();
		b = this.g();
		c = this.h();
		d = this.e().cf().resolution();
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
		if (b.isEmpty() || c.isEmpty() || this.e().cf().xAxis() == null) {
			this.h(0);
			return;
		}
		var d = (this.e().cf().xAxis() != null) ? this.e().cf().xAxis().isInverted() : false;
		var e = new $.ig.ScalerParams(b, c, d);
		var f = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.e().cf().xAxis());
		if (f == null || f.sortedIndices() == null) {
			var g = Math.floor(this.e().cf().xAxis().getUnscaledValue(c.left(), e));
			var h = Math.ceil(this.e().cf().xAxis().getUnscaledValue(c.right(), e));
			if (this.e().cf().xAxis().isInverted()) {
				h = Math.ceil(this.e().cf().xAxis().getUnscaledValue(c.left(), e));
				g = Math.floor(this.e().cf().xAxis().getUnscaledValue(c.right(), e));
			}
			var i = Math.floor((h - g + 1) * a / c.width());
			this.h(Math.max(1, i));
			this.f(Math.floor(g / this.h()));
			this.g(Math.ceil(h / this.h()));

		} else {
			this.f(f.getFirstVisibleIndex(b, c));
			this.g(f.getLastVisibleIndex(b, c));
			this.h(1);
		}
	}

, 
	cacheValues: function () {
	}

, 
	unCacheValues: function () {
	}
,
	$type: new $.ig.Type('FinancialBucketCalculator', $.ig.Object.prototype.$type, [$.ig.IBucketizer.prototype.$type])
}, true);

$.ig.util.defType('BollingerBandsBucketCalculator', 'FinancialBucketCalculator', {

		init: function (a) {


			$.ig.FinancialBucketCalculator.prototype.init.call(this, a);
						this.s(a);
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
	getBucket: function (a) {
		var $self = this;
		var b = a * this.h();
		var c = Math.min(b + this.h() - 1, this.e().cf().dx().g() - 1);
		if (b <= c) {
			var d = this.s().cr().multiplier();
			var e = 0;
			var f = 0;
			var g = 0;
			for (var h = b; h <= c; ++h) {
				if (!isNaN(this.s().cr().kp.__inner[h]) && !isNaN(this.s().cr().kq.__inner[h])) {
					e += this.s().cr().kp.__inner[h];
					f += this.s().cr().kq.__inner[h];
					++g;
				}
			}
			if (g > 0) {
				e = e / g;
				f = f / g;
				return (function () { var $ret = new Array();
				$ret.add((0.5 * (b + c)));
				$ret.add((e - f * d));
				$ret.add((e));
				$ret.add((e + f * d)); return $ret;}());
			}
		}
		return (function () { var $ret = new Array();
		$ret.add(NaN);
		$ret.add(NaN);
		$ret.add(NaN);
		$ret.add(NaN); return $ret;}());
	}
,
	$type: new $.ig.Type('BollingerBandsBucketCalculator', $.ig.FinancialBucketCalculator.prototype.$type)
}, true);

$.ig.util.defType('FinancialSeriesView', 'SeriesView', {

	_cf: null,
	cf: function (a) {
		if (arguments.length === 1) {
			this._cf = a;
			return a;
		} else {
			return this._cf;
		}
	}

, 
	_cg: null,
	cg: function (a) {
		if (arguments.length === 1) {
			this._cg = a;
			return a;
		} else {
			return this._cg;
		}
	}

, 
		init: function (a) {


			$.ig.SeriesView.prototype.init.call(this, a);
						this.cf(a);
				this.cg(this.cl());
		}
, 
	cl: function () {
	}

, 
	ag: function () {
		var $self = this;
		$.ig.SeriesView.prototype.ag.call(this);
		if (!this.ad()) {
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.q);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
,
	$type: new $.ig.Type('FinancialSeriesView', $.ig.SeriesView.prototype.$type)
}, true);

$.ig.util.defType('BollingerBandsOverlayView', 'FinancialSeriesView', {

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
		init: function (a) {

			this.cm = new $.ig.Polygon();
			this.cn = new $.ig.Polyline();
			this.co = new $.ig.Polyline();
			this.cp = new $.ig.Polyline();

			$.ig.FinancialSeriesView.prototype.init.call(this, a);
						this.cr(a);
		}
, 
	cl: function () {
		return new $.ig.BollingerBandsBucketCalculator(this);
	}

, 
	cu: function (a, b, c, d, e, f) {
		var h = $.ig.Flattener.prototype.c(a, b, d, this.u().resolution()).getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			this.cm.bn().add({__x: b(g), __y: d(g), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			this.cn.bn().add({__x: b(g), __y: d(g), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		var j = $.ig.Flattener.prototype.c(a, b, e, this.u().resolution()).getEnumerator();
		while (j.moveNext()) {
			var i = j.current();
			this.co.bn().add({__x: b(i), __y: e(i), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		var l = $.ig.Flattener.prototype.c(a, c, f, this.u().resolution()).getEnumerator();
		while (l.moveNext()) {
			var k = l.current();
			this.cm.bn().add({__x: c(k), __y: f(k), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			this.cp.bn().add({__x: c(k), __y: f(k), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		this.an();
	}

, 
	cv: function () {
		this.cm.bn().clear();
		this.cn.bn().clear();
		this.co.bn().clear();
		this.cp.bn().clear();
		this.an();
	}
, 
	cm: null, 
	cn: null, 
	co: null, 
	cp: null
, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.cn.__stroke = this.u().actualOutline();
		this.cn.a7(this.u().thickness());
		this.co.__stroke = this.u().actualOutline();
		this.co.a7(this.u().thickness());
		this.co.a8(this.u().dashArray());
		this.co.a9(this.u().dashCap());
		this.cp.__stroke = this.u().actualOutline();
		this.cp.a7(this.u().thickness());
		this.cm.__fill = this.u().actualBrush();
		this.cm.__opacity = 0.75;
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.cn.__stroke = a;
		this.cn.a7(this.u().thickness() + $.ig.BollingerBandsOverlayView.prototype.b);
		this.co.__stroke = a;
		this.co.a7(this.u().thickness() + $.ig.BollingerBandsOverlayView.prototype.b);
		this.co.a8(this.u().dashArray());
		this.co.a9(this.u().dashCap());
		this.cp.__stroke = a;
		this.cp.a7(this.u().thickness() + $.ig.BollingerBandsOverlayView.prototype.b);
		this.cm.__fill = a;
		this.cm.__opacity = 1;
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			a.j(this.cm);
			a.k(this.cn);
			a.k(this.co);
			a.k(this.cp);
		}
	}
,
	$type: new $.ig.Type('BollingerBandsOverlayView', $.ig.FinancialSeriesView.prototype.$type)
}, true);

$.ig.util.defType('BollingerBandWidthIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.BollingerBandWidthIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.BollingerBandWidthIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BollingerBandWidthIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.BollingerBandWidthIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}

, 
	multiplier: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BollingerBandWidthIndicator.prototype.multiplierProperty, a);
			return a;
		} else {
			return this.b($.ig.BollingerBandWidthIndicator.prototype.multiplierProperty);
		}
	}

, 
	l9: function () {
		return this.multiplier();
	}
,
	$type: new $.ig.Type('BollingerBandWidthIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('BollingerBandWidthIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(a.typicalColumn().basedOn());
		c.w(b.m().d());
		c.w(b.n().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = b.m().c()(a.typicalColumn(), a.period()).getEnumerator();
		var d = b.n().c()(a.typicalColumn(), a.period()).getEnumerator();
		var e = a.multiplier();
		var f = a.indicatorColumn();
		var g = 0;
		while (c.moveNext() && d.moveNext()) {
			var h = d.current() * e;
			var i = c.current() + h;
			var j = c.current() - h;
			var k = c.current();
			var l = b.v()((i - j) / k);
			f.item(g, l);
			g++;
		}
		return true;
	}
,
	$type: new $.ig.Type('BollingerBandWidthIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('ChaikinOscillatorIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.ChaikinOscillatorIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.ChaikinOscillatorIndicator.prototype.$type;
	}

, 
	shortPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ChaikinOscillatorIndicator.prototype.shortPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.ChaikinOscillatorIndicator.prototype.shortPeriodProperty);
		}
	}

, 
	l0: function () {
		return this.shortPeriod();
	}

, 
	longPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ChaikinOscillatorIndicator.prototype.longPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.ChaikinOscillatorIndicator.prototype.longPeriodProperty);
		}
	}

, 
	l1: function () {
		return this.longPeriod();
	}
,
	$type: new $.ig.Type('ChaikinOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('ChaikinOscillatorIndicatorStrategy', 'IndicatorCalculationStrategy', {

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
		init: function () {


			$.ig.IndicatorCalculationStrategy.prototype.init.call(this);
						this.d(new $.ig.AccumulationDistributionIndicatorStrategy());
		}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(this.d().b(a, b));
		c.w(b.l().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = a.indicatorColumn();
		var d = this.d().c(a, b);
		var e = b.l().c()(d, a.shortPeriod()).getEnumerator();
		var f = b.l().c()(d, a.longPeriod()).getEnumerator();
		var g = 0;
		while (e.moveNext() && f.moveNext()) {
			c.item(g, e.current() - f.current());
			g++;
		}
		return true;
	}
,
	$type: new $.ig.Type('ChaikinOscillatorIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('ChaikinVolatilityIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.ChaikinVolatilityIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.ChaikinVolatilityIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ChaikinVolatilityIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.ChaikinVolatilityIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('ChaikinVolatilityIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('ChaikinVolatilityIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.w(b.l().d());
		return c;
	}

, 
	a: function (a, b) {
		var $self = this;
		var d = b.u()(function (c) { return a.highColumn().item(c) - a.lowColumn().item(c)}, a.count());
		var e = b.l().c()(d, a.period()).getEnumerator();
		var f = a.indicatorColumn();
		var g = new Array(a.period());
		for (var h = 0; h < a.period(); h++) {
			g[h] = 0;
		}
		var i = 0;
		while (e.moveNext()) {
			var j = i % a.period();
			var k = b.v()((e.current() - g[j]) / (g[j] * 100));
			if (i < a.period()) {
				f.item(i, 0);

			} else {
				f.item(i, k);
			}
			g[j] = e.current();
			i++;
		}
		return true;
	}
,
	$type: new $.ig.Type('ChaikinVolatilityIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('CommodityChannelIndexIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.CommodityChannelIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.CommodityChannelIndexIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CommodityChannelIndexIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.CommodityChannelIndexIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('CommodityChannelIndexIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('CommodityChannelIndexIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(a.typicalColumn().basedOn());
		c.w(b.m().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = a.period();
		var d = a.typicalColumn();
		var e = a.indicatorColumn();
		var f = b.m().c()(d, c).getEnumerator();
		var g = d.getEnumerator();
		var h = new Array(c);
		for (var i = 0; i < c; i++) {
			h[i] = 0;
		}
		var j = 0;
		while (g.moveNext() && f.moveNext()) {
			h[j % c] = g.current();
			var k = 0;
			for (var l = 0; l < c; ++l) {
				k += Math.abs(f.current() - h[l]);
			}
			k /= c;
			e.item(j, b.v()((g.current() - f.current()) / (0.015 * k)));
			++j;
		}
		return true;
	}
,
	$type: new $.ig.Type('CommodityChannelIndexIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('CustomIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.CustomIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.CustomIndicator.prototype.$type;
	}

, 
	k5: function (a, b) {
		var c = this.jy(a, b);
		var d = this.j0(c);
		var e = new $.ig.List$1(String, 0);
		if (this.md != null) {
			var f = new $.ig.FinancialEventArgs(c.calculateFrom(), c.calculateCount(), c, d);
			this.md(this, f);
			if (f.basedOn() != null) {
				var h = f.basedOn().getEnumerator();
				while (h.moveNext()) {
					var g = h.current();
					e.add(g);
				}
			}
		}
		return e;
	}
, 
	mc: null
, 
	indicator: function (a) {
		if (arguments.length === 1) {
			this.mc = a;
			this.la();
			return a;
		} else {
			return this.mc;
		}
	}
, 
	md: null
, 
	basedOnColumns: function (a) {
		if (arguments.length === 1) {
			this.md = a;
			return a;
		} else {
			return this.md;
		}
	}

, 
	k4: function (a, b) {
		$.ig.StrategyBasedIndicator.prototype.k4.call(this, a, b);
		if (this.mc != null) {
			var c = this.jy(a, b);
			if (b == 0) {
				return false;
			}
			if (!this.jr(this.k5(a, b))) {
				return false;
			}
			this.mc(this, new $.ig.FinancialEventArgs(a, b, c, this.j0(c)));
			if (this.l6(c) && this.yAxis() != null) {
				this.yAxis().updateRange();
			}
			return true;
		}
		return false;
	}
,
	$type: new $.ig.Type('CustomIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('CustomIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	a: function (a, b) {
		return true;
	}

, 
	b: function (a, b) {
		return new $.ig.List$1(String, 0);
	}
,
	$type: new $.ig.Type('CustomIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('PriceChannelOverlayView', 'FinancialSeriesView', {
	cm: null, 
	cn: null, 
	co: null
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
		init: function (a) {

			this.cm = new $.ig.Polygon();
			this.cn = new $.ig.Polyline();
			this.co = new $.ig.Polyline();

			$.ig.FinancialSeriesView.prototype.init.call(this, a);
						this.cq(a);
		}
, 
	cl: function () {
		return new $.ig.PriceChannelBucketCalculator(this);
	}

, 
	ct: function () {
		this.cm.bn().clear();
		this.cn.bn().clear();
		this.co.bn().clear();
		this.an();
	}

, 
	cu: function (a, b, c, d, e) {
		var g = $.ig.Flattener.prototype.c(a, b, d, this.u().resolution()).getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			this.cm.bn().add({__x: b(f), __y: d(f), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			this.cn.bn().add({__x: b(f), __y: d(f), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		var i = $.ig.Flattener.prototype.c(a, c, e, this.u().resolution()).getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			this.cm.bn().add({__x: c(h), __y: e(h), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			this.co.bn().add({__x: c(h), __y: e(h), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.cn.__stroke = this.u().actualOutline();
		this.cn.a7(this.u().thickness());
		this.cn.a8(this.u().dashArray());
		this.cn.a9(this.u().dashCap());
		this.co.__stroke = this.u().actualOutline();
		this.co.a7(this.u().thickness());
		this.co.a8(this.u().dashArray());
		this.co.a9(this.u().dashCap());
		this.cm.__fill = this.u().actualBrush();
		this.cm.__opacity = 0.75;
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.cn.__stroke = a;
		this.cn.a7(this.u().thickness() + $.ig.PriceChannelOverlayView.prototype.b);
		this.cn.a8(this.u().dashArray());
		this.cn.a9(this.u().dashCap());
		this.co.__stroke = a;
		this.co.a7(this.u().thickness() + $.ig.PriceChannelOverlayView.prototype.b);
		this.co.a8(this.u().dashArray());
		this.co.a9(this.u().dashCap());
		this.cm.__fill = a;
		this.cm.__opacity = 1;
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			a.j(this.cm);
			a.k(this.cn);
			a.k(this.co);
		}
	}
,
	$type: new $.ig.Type('PriceChannelOverlayView', $.ig.FinancialSeriesView.prototype.$type)
}, true);

$.ig.util.defType('DetrendedPriceOscillatorIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.DetrendedPriceOscillatorIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.DetrendedPriceOscillatorIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.DetrendedPriceOscillatorIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.DetrendedPriceOscillatorIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('DetrendedPriceOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('DetrendedPriceOscillatorIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		c.w(b.m().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = a.period();
		var d = a.closeColumn();
		var e = a.indicatorColumn();
		var f = b.m().c()(d, c).getEnumerator();
		var g = ($.ig.intDivide(c, 2)) + 1;
		var h = new Array(g);
		for (var i = 0; i < g; i++) {
			h[i] = 0;
		}
		for (var j = 1; j < Math.min(g + 1, e.count()); ++j) {
			var k = j % g;
			e.item(j, 0);
			f.moveNext();
			h[k] = f.current();
		}
		for (var l = g + 1; l < e.count(); l++) {
			var m = l % g;
			e.item(l, d.item(l) - h[m]);
			f.moveNext();
			h[m] = f.current();
		}
		return true;
	}
,
	$type: new $.ig.Type('DetrendedPriceOscillatorIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('EaseOfMovementIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.EaseOfMovementIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.EaseOfMovementIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('EaseOfMovementIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('EaseOfMovementIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.add($.ig.FinancialSeries.prototype.h1);
		return c;
	}

, 
	a: function (a, b) {
		var c = a.indicatorColumn();
		var d = a.highColumn();
		var e = a.lowColumn();
		var f = a.volumeColumn();
		var g = a.count();
		if (g > 0) {
			c.item(0, 0);
		}
		for (var h = 1; h < g; h++) {
			var i = (d.item(h) + e.item(h)) / 2;
			var j = (d.item(h - 1) + e.item(h - 1)) / 2;
			var k = i - j;
			var l = 10000;
			var m = b.v()((f.item(h) / l) / (d.item(h) - e.item(h)));
			c.item(h, b.v()(k / m));
		}
		return true;
	}
,
	$type: new $.ig.Type('EaseOfMovementIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('FastStochasticOscillatorIndicator', 'StrategyBasedIndicator', {

		init: function () {

			var $self = this;

			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.trendLineBrush((function () { var $ret = new $.ig.Brush();
				$ret.__fill = "Blue"; return $ret;}()));
				this.trendLineType($.ig.TrendLineType.prototype.exponentialAverage);
				this.trendLinePeriod(3);
		}
, 
	lt: function () {
			return new $.ig.FastStochasticOscillatorIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.FastStochasticOscillatorIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FastStochasticOscillatorIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.FastStochasticOscillatorIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('FastStochasticOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('FastStochasticOscillatorIndicatorStrategy', 'IndicatorCalculationStrategy', {

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
		init: function () {


			$.ig.IndicatorCalculationStrategy.prototype.init.call(this);
						this.d(new $.ig.PercentKCalculationStrategy());
		}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(this.d().b(a, b));
		return c;
	}

, 
	a: function (a, b) {
		var c = this.d().c(a, b);
		var d = 0;
		var f = c.getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			a.indicatorColumn().item(d, e);
			d++;
		}
		return true;
	}
,
	$type: new $.ig.Type('FastStochasticOscillatorIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('FinancialIndicatorBucketCalculator', 'FinancialBucketCalculator', {

		init: function (a) {


			$.ig.FinancialBucketCalculator.prototype.init.call(this, a);
						this.s(a);
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
	getBucket: function (a) {
		var $self = this;
		var b = a * this.h();
		var c = Math.min(b + this.h() - 1, this.s().cx().kt().count() - 1);
		var d = NaN;
		var e = NaN;
		for (var f = b; f <= c; ++f) {
			var g = this.s().cx().kt().__inner[f];
			if (!isNaN(d)) {
				if (!isNaN(g)) {
					d = Math.min(d, g);
					e = Math.max(e, g);
				}

			} else {
				d = g;
				e = g;
			}
		}
		if (!isNaN(d)) {
			return (function () { var $ret = new Array();
			$ret.add((0.5 * (b + c)));
			$ret.add(d);
			$ret.add(e); return $ret;}());
		}
		return (function () { var $ret = new Array();
		$ret.add(NaN);
		$ret.add(NaN);
		$ret.add(NaN); return $ret;}());
	}
,
	$type: new $.ig.Type('FinancialIndicatorBucketCalculator', $.ig.FinancialBucketCalculator.prototype.$type)
}, true);

$.ig.util.defType('FinancialIndicatorView', 'FinancialSeriesView', {

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
		init: function (a) {

			var $self = this;
			this.cn = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());
			this.co = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());
			this.cp = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());
			this.cq = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());
			this.cr = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());
			this.cs = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.PathGeometry()); return $ret;}());
			this.ct = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.GeometryGroup()); return $ret;}());
			this.cu = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.GeometryGroup()); return $ret;}());

			$.ig.FinancialSeriesView.prototype.init.call(this, a);
						this.cx(a);
				this.cm = (function () { var $ret = new $.ig.Pool$1($.ig.LineGeometry.prototype.$type);
				$ret.create($self.c1.on($self));
				$ret.destroy($self.c2.on($self)); return $ret;}());
				this.cy(new $.ig.CategoryTrendLineManager());
		}
, 
	cl: function () {
		return new $.ig.FinancialIndicatorBucketCalculator(this);
	}

, 
	ag: function () {
		var $self = this;
		$.ig.FinancialSeriesView.prototype.ag.call(this);
		if (!this.ad()) {
			this.cf().negativeBrush((function () { var $ret = new $.ig.Brush();
			$ret.__fill = "#415460"; return $ret;}()));
		}
	}
, 
	cm: null
, 
	c1: function () {
		return new $.ig.LineGeometry();
	}

, 
	c2: function (a) {
	}
, 
	cn: null, 
	co: null, 
	cp: null, 
	cq: null, 
	cr: null, 
	cs: null, 
	ct: null, 
	cu: null
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
	c5: function (a) {
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cn.bp())).reset();
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cp.bp())).reset();
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cr.bp())).reset();
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.co.bp())).reset();
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cq.bp())).reset();
		($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cs.bp())).reset();
		($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.ct.bp())).reset1();
		($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cu.bp())).reset1();
		if (a) {
			this.cm.g(0);
		}
		this.cy().ab();
		this.an();
	}

, 
	c6: function () {
	}

, 
	c7: function (a, b, c, d, e, f) {
		$.ig.IndicatorRenderer.prototype.b(a, b, c, d, e, f, this.ac(), this.ab(), this.cn, this.cp, this.cr, this.co, this.cq, this.cs, this.cg().h(), this.u().resolution());
		this.an();
	}

, 
	c8: function (a, b, c, d, e, f, g) {
		$.ig.IndicatorRenderer.prototype.c(a, b, c, d, e, f, this.ac(), this.ab(), this.cn, this.cp, this.cr, this.co, this.cq, this.cs, g, this.cg().h(), this.u().resolution());
		this.an();
	}

, 
	c9: function (a, b, c, d, e, f, g) {
		$.ig.IndicatorRenderer.prototype.d(a, b, c, d, e, f, g, this.cm, this.ct, this.cu);
		this.an();
	}

, 
	da: function () {
		this.cx().actualTrendLineBrush(null);
		if (this.cx().trendLineBrush() != null) {
			this.cx().actualTrendLineBrush(this.cx().trendLineBrush());

		} else {
			this.cx().actualTrendLineBrush(this.cx().actualBrush());
		}
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.cn.__stroke = this.u().actualBrush();
		this.cr.__stroke = this.u().actualBrush();
		this.cn.a7(this.u().thickness());
		this.cr.a7(this.u().thickness());
		this.cn.a8(this.u().dashArray());
		this.cr.a9(this.u().dashCap());
		this.cn.a8(this.u().dashArray());
		this.cn.a9(this.u().dashCap());
		this.cp.__fill = this.u().actualBrush();
		this.cp.__opacity = 0.8;
		this.co.__stroke = this.cf().negativeBrush();
		this.cs.__stroke = this.cf().negativeBrush();
		this.co.a7(this.u().thickness());
		this.cs.a7(this.u().thickness());
		this.co.a8(this.cf().dashArray());
		this.cs.a8(this.cf().dashArray());
		this.co.a9(this.cf().dashCap());
		this.cs.a9(this.cf().dashCap());
		this.cq.__fill = this.cf().negativeBrush();
		this.cq.__opacity = 0.8;
		this.ct.__stroke = this.u().actualBrush();
		this.ct.a7(this.u().thickness());
		this.ct.a8(this.u().dashArray());
		this.ct.a9(this.u().dashCap());
		this.cu.__stroke = this.cf().negativeBrush();
		this.cu.a7(this.u().thickness());
		this.cu.a8(this.u().dashArray());
		this.cu.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.cn.__stroke = a;
		this.cr.__stroke = a;
		this.cn.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.cr.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.cp.__fill = a;
		this.cp.__opacity = 0.8;
		this.co.__stroke = a;
		this.cs.__stroke = a;
		this.co.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.cs.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.cq.__fill = a;
		this.cq.__opacity = 0.8;
		this.ct.__stroke = a;
		this.ct.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.cu.__stroke = a;
		this.cu.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.cx().displayType() == $.ig.IndicatorDisplayType.prototype.column) {
				if (this.k && !b) {
					a.e($.ig.GradientDirection.prototype.bottomTop, null);
				}
				a.g(this.ct);
				a.g(this.cu);

			} else {
				if (this.k && !b) {
					a.e($.ig.GradientDirection.prototype.bottomTop, null);
				}
				a.g(this.cp);
				a.g(this.cn);
				a.g(this.cr);
				a.g(this.cq);
				a.g(this.co);
				a.g(this.cs);
			}
		}
	}

, 
	a1: function (a, b) {
		if (a.b()) {
			if (this.cx().trendLineType() != $.ig.TrendLineType.prototype.none && !b) {
				var c = this.cy().n();
				c.a7(this.cx().trendLineThickness());
				c.__stroke = this.cx().actualTrendLineBrush();
				c.a9(this.cx().trendLineDashCap());
				c.a8(this.cx().trendLineDashArray());
				if (this.k && !b) {
					a.e($.ig.GradientDirection.prototype.bottomTop, null);
				}
				a.k(c);
			}
		}
		$.ig.SeriesView.prototype.a1.call(this, a, b);
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "positiveColumnsShape", this.ct);
		b.tags().add("Positive");
		var c = new $.ig.PathVisualData(1, "negativeColumnsShape", this.cu);
		c.tags().add("Negative");
		var d = new $.ig.PathVisualData(1, "positive0", this.cn);
		var e = new $.ig.PathVisualData(1, "positive1", this.cr);
		var f = new $.ig.PathVisualData(1, "positive01", this.cp);
		var g = new $.ig.PathVisualData(1, "negative0", this.co);
		var h = new $.ig.PathVisualData(1, "negative1", this.cs);
		var i = new $.ig.PathVisualData(1, "negative01", this.cq);
		a.shapes().add(d);
		a.shapes().add(e);
		a.shapes().add(f);
		a.shapes().add(g);
		a.shapes().add(h);
		a.shapes().add(i);
	}
,
	$type: new $.ig.Type('FinancialIndicatorView', $.ig.FinancialSeriesView.prototype.$type)
}, true);

$.ig.util.defType('ForceIndexIndicator', 'StrategyBasedIndicator', {

		init: function () {


			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.displayType($.ig.IndicatorDisplayType.prototype.area);
		}
, 
	lt: function () {
			return new $.ig.ForceIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.ForceIndexIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ForceIndexIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.ForceIndexIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('ForceIndexIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('ForceIndexIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		c.add($.ig.FinancialSeries.prototype.h1);
		c.w(b.l().d());
		return c;
	}

, 
	c: function (a) {
		var $self = this;
		var $iter = function () { return function (a) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$b : 0,
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
							this.$b = 0;
							this.$c = a.closeColumn();
							this.$d = a.volumeColumn();
							this.$e = a.indicatorColumn();
							this.$state = 1;
							break;
						case 1:
							if (this.$c != null && this.$d != null) {
								this.$state = 2;
							}
							else {
								this.$state = 3;
							}
							break;

						case 2:
							this.$b = Math.min(this.$c.count(), this.$d.count());
							this.$state = 3;
							break;

						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$b > 0) {
								this.$state = 5;
							}
							else {
								this.$state = 7;
							}
							break;

						case 5:
							this.$current =  0;
							this.$state = 6
							return true;
						case 6:
							this.$state = 7;
							break;

						case 7:
							this.$state = 8;
							break;
						case 8:
							this.$f = 1;
							this.$state = 12;
							break;
						case 9:
							this.$current =  this.$d.item(this.$f) * (this.$c.item(this.$f) - this.$c.item(this.$f - 1));
							this.$state = 10
							return true;
						case 10:
							this.$state = 11;
							break;
						case 11:
							++this.$f;
							this.$state = 12;
							break;
						case 12:
							if (this.$f < this.$b) {
								this.$state = 9;
							}
							else {
								this.$state = 13;
							}
							break;
						case 13:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } (a) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	a: function (a, b) {
		var c = this.c(a);
		var d = a.period();
		var e = a.indicatorColumn();
		if (d != 0 && !isNaN(d) && !Number.isInfinity(d)) {
			c = b.l().c()(c, a.period());
		}
		var f = 0;
		var h = c.getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			e.item(f, g);
			++f;
		}
		return true;
	}
,
	$type: new $.ig.Type('ForceIndexIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('FullStochasticOscillatorIndicator', 'StrategyBasedIndicator', {

		init: function () {

			var $self = this;

			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.trendLineBrush((function () { var $ret = new $.ig.Brush();
				$ret.__fill = "Blue"; return $ret;}()));
				this.trendLineType($.ig.TrendLineType.prototype.exponentialAverage);
				this.trendLinePeriod(3);
		}
, 
	lt: function () {
			return new $.ig.FullStochasticOscillatorIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.FullStochasticOscillatorIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FullStochasticOscillatorIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.FullStochasticOscillatorIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}

, 
	smoothingPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FullStochasticOscillatorIndicator.prototype.smoothingPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.FullStochasticOscillatorIndicator.prototype.smoothingPeriodProperty);
		}
	}

, 
	l0: function () {
		return this.smoothingPeriod();
	}

, 
	triggerPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FullStochasticOscillatorIndicator.prototype.triggerPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.FullStochasticOscillatorIndicator.prototype.triggerPeriodProperty);
		}
	}

, 
	l1: function () {
		return this.triggerPeriod();
	}

, 
	kz: function () {
		return this.triggerPeriod();
	}
,
	$type: new $.ig.Type('FullStochasticOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('FullStochasticOscillatorIndicatorStrategy', 'IndicatorCalculationStrategy', {

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
		init: function () {


			$.ig.IndicatorCalculationStrategy.prototype.init.call(this);
						this.d(new $.ig.PercentKCalculationStrategy());
		}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(this.d().b(a, b));
		c.w(b.l().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = this.d().c(a, b);
		var d = b.l().c()(c, a.shortPeriod());
		var e = 0;
		var g = d.getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			a.indicatorColumn().item(e, f);
			e++;
		}
		return true;
	}
,
	$type: new $.ig.Type('FullStochasticOscillatorIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('PercentKCalculationStrategy', 'StreamingIndicatorCalculationStrategy', {
	init: function () {

		$.ig.StreamingIndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.add($.ig.FinancialSeries.prototype.hz);
		return c;
	}

, 
	c: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : 0,
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
							this.$c = a.period();
							this.$d = a.highColumn();
							this.$e = a.lowColumn();
							this.$state = 1;
							break;
						case 1:
							this.$f = 0;
							this.$state = 16;
							break;
						case 2:
							this.$g = Math.min(this.$c, this.$f);
							this.$h = -Number.MAX_VALUE;
							this.$i = Number.MAX_VALUE;
							this.$state = 3;
							break;
						case 3:
							this.$j = 0;
							this.$state = 12;
							break;
						case 4:
							this.$state = 5;
							break;
						case 5:
							if (!isNaN(this.$d.item(this.$f - this.$j))) {
								this.$state = 6;
							}
							else {
								this.$state = 7;
							}
							break;

						case 6:
							this.$h = Math.max(this.$h, this.$d.item(this.$f - this.$j));
							this.$state = 7;
							break;

						case 7:
							this.$state = 8;
							break;
						case 8:
							if (!isNaN(this.$e.item(this.$f - this.$j))) {
								this.$state = 9;
							}
							else {
								this.$state = 10;
							}
							break;

						case 9:
							this.$i = Math.min(this.$i, this.$e.item(this.$f - this.$j));
							this.$state = 10;
							break;

						case 10:
							this.$state = 11;
							break;
						case 11:
							this.$j++;
							this.$state = 12;
							break;
						case 12:
							if (this.$j < this.$g) {
								this.$state = 4;
							}
							else {
								this.$state = 13;
							}
							break;
						case 13:
							this.$current =  b.v()((a.closeColumn().item(this.$f) - this.$i) / (this.$h - this.$i) * 100);
							this.$state = 14
							return true;
						case 14:
							this.$state = 15;
							break;
						case 15:
							this.$f++;
							this.$state = 16;
							break;
						case 16:
							if (this.$f < a.count()) {
								this.$state = 2;
							}
							else {
								this.$state = 17;
							}
							break;
						case 17:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	a: function (a, b) {
		var c = 0;
		var e = this.c(a, b).getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			a.indicatorColumn().item(c, d);
			c++;
		}
		return true;
	}
,
	$type: new $.ig.Type('PercentKCalculationStrategy', $.ig.StreamingIndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('IndicatorRenderer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c, d) {
		var $self = this;
		var e = new $.ig.PathFigure();
		var f = $.ig.Flattener.prototype.e(new $.ig.List$1($.ig.Number.prototype.$type, 0), a, b, c, 0, a.count() - 1, d);
		for (var g = 0; g < f.count(); g++) {
			var h = f.item(g);
			e.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
			$ret.d({__x: b(h), __y: c(h), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		}
		e.__startPoint = ($.ig.util.cast($.ig.LineSegment.prototype.$type, e.__segments.__inner[0])).d();
		return e;
	}

, 
	b: function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
		var q = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, i.bp())).d();
		var r = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, l.bp())).d();
		if (o == 1) {
			var s = new $.ig.List$1($.ig.Number.prototype.$type, 0);
			var t = q;
			var u = 0;
			s.add(0);
			for (var v = 0			,w = 1; w < a; v = w++) {
				var x = u;
				var y = c(w) - c(v);
				if (f && !isNaN(y)) {
					x = Math.sign(y);
				}
				if (x != 0 && x != u) {
					t.add($.ig.IndicatorRenderer.prototype.a(s, b, c, p));
					u = x;
					t = u == 1 ? r : q;
					s.clear();
					s.add(v);
				}
				s.add(w);
			}
			t.add($.ig.IndicatorRenderer.prototype.a(s, b, c, p));

		} else {
			var z = new $.ig.List$1($.ig.Number.prototype.$type, 0);
			var aa = q;
			var ab = 0;
			z.add(0);
			for (var ac = 0			,ad = 1; ad < a; ac = ad++) {
				var ae = ab;
				var af = c(ad) - c(ac);
				if (f && !isNaN(af)) {
					ae = Math.sign(af);
				}
				if (ae != 0 && ae != ab) {
					if (z.count() > 0) {
						aa.add($.ig.IndicatorRenderer.prototype.a(z, b, c, p));
					}
					ab = ae;
					aa = ab == 1 ? r : q;
					z.clear();
					z.add(ac);
				}
				z.add(ad);
			}
			if (z.count() > 0) {
				aa.add($.ig.IndicatorRenderer.prototype.a(z, b, c, p));
			}
		}
	}

, 
	c: function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
		var $self = this;
		var r = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, i.bp())).d();
		var s = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, j.bp())).d();
		var t = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, l.bp())).d();
		var u = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, m.bp())).d();
		if (p == 1) {
			var v = new $.ig.List$1($.ig.Number.prototype.$type, 0);
			var w = r;
			var x = s;
			var y = 0;
			v.add(0);
			for (var z = 0			,aa = 1; aa < a; z = aa++) {
				var ab = y;
				var ac = c(aa) - c(z);
				if (f && !isNaN(ac)) {
					ab = Math.sign(ac);
				}
				if (ab != 0 && ab != y) {
					if (v.count() > 0) {
						var ad = $.ig.IndicatorRenderer.prototype.a(v, b, c, q);
						var ae = ad.duplicate1();
						ae.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
						$ret.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, ad.__segments.__inner[ad.__segments.count() - 1])).d().__x, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
						ae.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
						$ret.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, ad.__segments.__inner[0])).d().__x, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
						w.add(ad);
						x.add(ae);
					}
					y = ab;
					w = y == 1 ? t : r;
					x = y == 1 ? u : s;
					v.clear();
					v.add(z);
				}
				v.add(aa);
			}
				var af = $.ig.IndicatorRenderer.prototype.a(v, b, c, q);
				var ag = af.duplicate1();
				ag.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
				$ret.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, af.__segments.__inner[af.__segments.count() - 1])).d().__x, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
				ag.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
				$ret.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, af.__segments.__inner[0])).d().__x, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
				w.add(af);
				x.add(ag);

		} else {
			var ah = new $.ig.List$1($.ig.Number.prototype.$type, 0);
			var ai = r;
			var aj = s;
			var ak = 0;
			ah.add(0);
			for (var al = 0			,am = 1; am < a; al = am++) {
				var an = ak;
				var ao = (c(am) + e(am)) - (c(al) + e(al));
				if (f && !isNaN(ao)) {
					an = Math.sign(ao);
				}
				if (an != 0 && an != ak) {
					if (ah.count() > 0) {
						var ap = $.ig.IndicatorRenderer.prototype.a(ah, b, c, q);
						var aq = ap.duplicate1();
						aq.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
						$ret.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, ap.__segments.__inner[ap.__segments.count() - 1])).d().__x, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
						aq.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
						$ret.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, ap.__segments.__inner[0])).d().__x, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
						ai.add(ap);
						aj.add(aq);
					}
					ak = an;
					ai = ak == 1 ? t : r;
					aj = ak == 1 ? u : s;
					ah.clear();
					ah.add(al);
				}
				ah.add(am);
			}
				var ar = $.ig.IndicatorRenderer.prototype.a(ah, b, c, q);
				var as = ar.duplicate1();
				as.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
				$ret.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, ar.__segments.__inner[ar.__segments.count() - 1])).d().__x, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
				as.__segments.add((function () { var $ret = new $.ig.LineSegment(1);
				$ret.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, ar.__segments.__inner[0])).d().__x, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
				ai.add(ar);
				aj.add(as);
		}
	}

, 
	d: function (a, b, c, d, e, f, g, h, i, j) {
		var k = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, i.bp());
		var l = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, j.bp());
		for (var m = 0; m < a; ++m) {
			var n = h.item(m);
			n.e({__x: b(m), __y: g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			n.f({__x: b(m), __y: c(m), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			var o = false;
			if (m > 0) {
				if (c(m) <= c(m - 1)) {
					o = true;
				}

			} else {
				if (a > 1) {
					if (c(m + 1) <= c(m)) {
						o = true;
					}
				}
			}
			if (o) {
				k.d().add(n);

			} else {
				l.d().add(n);
			}
		}
		h.g(a);
	}
,
	$type: new $.ig.Type('IndicatorRenderer', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ItemwiseIndicatorCalculationStrategy', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c) {
	}

, 
	b: function (a, b) {
	}
,
	$type: new $.ig.Type('ItemwiseIndicatorCalculationStrategy', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ItemwiseStrategyBasedIndicator', 'StrategyBasedIndicator', {

	_md: null,
	md: function (a) {
		if (arguments.length === 1) {
			this._md = a;
			return a;
		} else {
			return this._md;
		}
	}

, 
	_me: null,
	me: function () {
		return this._me;	}

, 
	lt: function () {
			return new $.ig.ItemwiseStrategyCalculationStrategy();
	}

, 
		init: function () {


			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.md(this.me());
				(this.ls()).d(this.md());
		},
	$type: new $.ig.Type('ItemwiseStrategyBasedIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('ItemwiseStrategyCalculationStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

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
	b: function (a, b) {
		return this.d().b(a, b);
	}

, 
	a: function (a, b) {
		var c = true;
		for (var d = a.calculateFrom(); d < a.calculateFrom() + a.calculateCount(); d++) {
			c = this.d().a(a, b, d);
			if (!c) {
				return false;
			}
		}
		return c;
	}
,
	$type: new $.ig.Type('ItemwiseStrategyCalculationStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('MarketFacilitationIndexIndicator', 'ItemwiseStrategyBasedIndicator', {

		init: function () {


			$.ig.ItemwiseStrategyBasedIndicator.prototype.init.call(this);
						this.displayType($.ig.IndicatorDisplayType.prototype.area);
		}
, 
	me: function () {
			return new $.ig.MarketFacilitationIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.MarketFacilitationIndexIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('MarketFacilitationIndexIndicator', $.ig.ItemwiseStrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('MarketFacilitationIndexIndicatorStrategy', 'ItemwiseIndicatorCalculationStrategy', {
	init: function () {

		$.ig.ItemwiseIndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.add($.ig.FinancialSeries.prototype.h1);
		return c;
	}

, 
	a: function (a, b, c) {
		a.indicatorColumn().item(c, b.v()((a.highColumn().item(c) - a.lowColumn().item(c)) / a.volumeColumn().item(c)));
		return true;
	}
,
	$type: new $.ig.Type('MarketFacilitationIndexIndicatorStrategy', $.ig.ItemwiseIndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('MassIndexIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.MassIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.MassIndexIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('MassIndexIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('MassIndexIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.w(b.l().d());
		return c;
	}

, 
	c: function (a, b) {
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
							this.$c = 0;
							this.$state = 5;
							break;
						case 2:
							this.$current =  a.item(this.$c) - b.item(this.$c);
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							this.$c++;
							this.$state = 5;
							break;
						case 5:
							if (this.$c < (Math.min(a.count(), b.count()))) {
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
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	a: function (a, b) {
		var c = 9;
		var d = a.highColumn();
		var e = a.lowColumn();
		var f = a.indicatorColumn();
		var g = b.l().c()(this.c(d, e), c).getEnumerator();
		var h = b.l().c()(b.l().c()(this.c(d, e), c), c).getEnumerator();
		var i = new Array(c);
		for (var j = 0; j < c; j++) {
			i[j] = 0;
		}
		var k = 0;
		for (var l = 0; l < f.count(); l++) {
			var m = l % c;
			k -= i[m];
			g.moveNext();
			h.moveNext();
			var n = b.v()(g.current() / h.current());
			k += n;
			f.item(l, k);
			i[m] = n;
		}
		return true;
	}
,
	$type: new $.ig.Type('MassIndexIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('MedianPriceIndicator', 'ItemwiseStrategyBasedIndicator', {
	init: function () {

		$.ig.ItemwiseStrategyBasedIndicator.prototype.init.call(this);

	}
, 
	me: function () {
			return new $.ig.MedianPriceIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.MedianPriceIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('MedianPriceIndicator', $.ig.ItemwiseStrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('MedianPriceIndicatorStrategy', 'ItemwiseIndicatorCalculationStrategy', {
	init: function () {

		$.ig.ItemwiseIndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.hx);
		return c;
	}

, 
	a: function (a, b, c) {
		a.indicatorColumn().item(c, (a.highColumn().item(c) + a.lowColumn().item(c)) / 2);
		return true;
	}
,
	$type: new $.ig.Type('MedianPriceIndicatorStrategy', $.ig.ItemwiseIndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('MoneyFlowIndexIndicator', 'StrategyBasedIndicator', {

		init: function () {


			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.displayType($.ig.IndicatorDisplayType.prototype.area);
		}
, 
	lt: function () {
			return new $.ig.MoneyFlowIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.MoneyFlowIndexIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MoneyFlowIndexIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.MoneyFlowIndexIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('MoneyFlowIndexIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('MoneyFlowIndexIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(a.typicalColumn().basedOn());
		c.add($.ig.FinancialSeries.prototype.h1);
		return c;
	}

, 
	a: function (a, b) {
		var c = a.typicalColumn().getEnumerator();
		var d = a.volumeColumn().getEnumerator();
		var e = a.period();
		var f = 0;
		var g = new Array(e);
		for (f = 0; f < e; f++) {
			g[f] = 0;
		}
		var h = 0;
		var i = new Array(e);
		for (f = 0; f < e; f++) {
			i[f] = 0;
		}
		var j = 0;
		var k = 0;
		f = 0;
		while (c.moveNext() && d.moveNext()) {
			var l = f % e;
			var m = c.current() * d.current();
			h -= g[l];
			j -= i[l];
			switch (Math.sign(m - k)) {
				case -1:
					g[l] = 0;
					i[l] = m;
					break;
				case 0:
					g[l] = 0;
					i[l] = 0;
					break;
				case 1:
					g[l] = m;
					i[l] = 0;
					break;
			}
			h += g[l];
			j += i[l];
			var n = b.v()(100 * h / (h + j));
			a.indicatorColumn().item(f, n);
			k = m;
			++f;
		}
		return true;
	}
,
	$type: new $.ig.Type('MoneyFlowIndexIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('MovingAverageConvergenceDivergenceIndicator', 'StrategyBasedIndicator', {

		init: function () {

			var $self = this;

			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.trendLineBrush((function () { var $ret = new $.ig.Brush();
				$ret.__fill = "Blue"; return $ret;}()));
				this.trendLineType($.ig.TrendLineType.prototype.exponentialAverage);
				this.trendLinePeriod(9);
		}
, 
	lt: function () {
			return new $.ig.MovingAverageConvergenceDivergenceIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.$type;
	}

, 
	shortPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.shortPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.shortPeriodProperty);
		}
	}

, 
	l0: function () {
		return this.shortPeriod();
	}

, 
	longPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.longPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.longPeriodProperty);
		}
	}

, 
	l1: function () {
		return this.longPeriod();
	}

, 
	signalPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.signalPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.signalPeriodProperty);
		}
	}

, 
	kz: function () {
		return this.signalPeriod();
	}
,
	$type: new $.ig.Type('MovingAverageConvergenceDivergenceIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('MovingAverageConvergenceDivergenceIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(a.typicalColumn().basedOn());
		c.w(b.l().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = a.typicalColumn();
		var d = a.indicatorColumn();
		var e = a.shortPeriod();
		var f = a.longPeriod();
		var g = b.l().c()(c, e).getEnumerator();
		var h = b.l().c()(c, f).getEnumerator();
		var i = 0;
		while (g.moveNext() && h.moveNext()) {
			var j = b.v()(g.current() - h.current());
			d.item(i, j);
			i++;
		}
		return true;
	}
,
	$type: new $.ig.Type('MovingAverageConvergenceDivergenceIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('NegativeVolumeIndexIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.NegativeVolumeIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.NegativeVolumeIndexIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('NegativeVolumeIndexIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('NegativeVolumeIndexIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		c.add($.ig.FinancialSeries.prototype.h1);
		return c;
	}

, 
	a: function (a, b) {
		var c = a.closeColumn();
		var d = a.volumeColumn();
		var e = a.indicatorColumn();
		var f = 0;
		var g = 0;
		var h = 0;
		if (e.count() > 0) {
			e.item(0, f);
		}
		for (var i = 1; i < e.count(); i++) {
			if (d.item(i) < d.item(i - 1)) {
				g = b.v()((c.item(i) - c.item(i - 1)) / c.item(i - 1));
				if (h != 0) {
					f += g * h;

				} else {
					f += g;
				}
			}
			e.item(i, f);
			h = f;
		}
		return true;
	}
,
	$type: new $.ig.Type('NegativeVolumeIndexIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('OnBalanceVolumeIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.OnBalanceVolumeIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.OnBalanceVolumeIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('OnBalanceVolumeIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('OnBalanceVolumeIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		c.add($.ig.FinancialSeries.prototype.h1);
		return c;
	}

, 
	a: function (a, b) {
		var c = a.closeColumn();
		var d = a.volumeColumn();
		var e = a.indicatorColumn();
		var f = 0;
		if (c != null && d != null) {
			f = Math.min(c.count(), d.count());
		}
		var g = 0;
		if (f > 0) {
			g = d.item(0);
			e.item(0, g);
		}
		for (var h = 1; h < f; ++h) {
			switch (Math.sign(c.item(h) - c.item(h - 1))) {
				case -1:
					g -= d.item(h);
					break;
				case 1:
					g += d.item(h);
					break;
			}
			e.item(h, g);
		}
		return true;
	}
,
	$type: new $.ig.Type('OnBalanceVolumeIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('PercentagePriceOscillatorIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.PercentagePriceOscillatorIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.PercentagePriceOscillatorIndicator.prototype.$type;
	}

, 
	shortPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PercentagePriceOscillatorIndicator.prototype.shortPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.PercentagePriceOscillatorIndicator.prototype.shortPeriodProperty);
		}
	}

, 
	l0: function () {
		return this.shortPeriod();
	}

, 
	longPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PercentagePriceOscillatorIndicator.prototype.longPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.PercentagePriceOscillatorIndicator.prototype.longPeriodProperty);
		}
	}

, 
	l1: function () {
		return this.longPeriod();
	}
,
	$type: new $.ig.Type('PercentagePriceOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('PercentagePriceOscillatorIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(b.r().d());
		c.w(b.s().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = a.indicatorColumn();
		var d = b.r().c()(a).getEnumerator();
		var e = b.s().c()(a).getEnumerator();
		var f = 0;
		while (d.moveNext() && e.moveNext()) {
			var g = b.v()(100 * (d.current() - e.current()) / e.current());
			c.item(f, g);
			++f;
		}
		return true;
	}
,
	$type: new $.ig.Type('PercentagePriceOscillatorIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('PercentageVolumeOscillatorIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.PercentageVolumeOscillatorIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.PercentageVolumeOscillatorIndicator.prototype.$type;
	}

, 
	shortPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PercentageVolumeOscillatorIndicator.prototype.shortPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.PercentageVolumeOscillatorIndicator.prototype.shortPeriodProperty);
		}
	}

, 
	l0: function () {
		return this.shortPeriod();
	}

, 
	longPeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PercentageVolumeOscillatorIndicator.prototype.longPeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.PercentageVolumeOscillatorIndicator.prototype.longPeriodProperty);
		}
	}

, 
	l1: function () {
		return this.longPeriod();
	}
,
	$type: new $.ig.Type('PercentageVolumeOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('PercentageVolumeOscillatorIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(b.p().d());
		c.w(b.q().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = b.p().c()(a).getEnumerator();
		var d = b.q().c()(a).getEnumerator();
		var e = a.indicatorColumn();
		var f = 0;
		while (c.moveNext() && d.moveNext()) {
			var g = b.v()(100 * (c.current() - d.current()) / d.current());
			e.item(f, g);
			++f;
		}
		return true;
	}
,
	$type: new $.ig.Type('PercentageVolumeOscillatorIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('PositiveVolumeIndexIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.PositiveVolumeIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.PositiveVolumeIndexIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('PositiveVolumeIndexIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('PositiveVolumeIndexIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		c.add($.ig.FinancialSeries.prototype.h1);
		return c;
	}

, 
	a: function (a, b) {
		var c = a.closeColumn();
		var d = a.volumeColumn();
		var e = a.indicatorColumn();
		var f = 0;
		var g = 0;
		var h = 0;
		if (e.count() > 0) {
			e.item(0, f);
		}
		for (var i = 1; i < e.count(); i++) {
			if (d.item(i) > d.item(i - 1)) {
				g = b.v()((c.item(i) - c.item(i - 1)) / c.item(i - 1));
				if (h != 0) {
					f += g * h;

				} else {
					f += g;
				}
			}
			e.item(i, f);
			h = f;
		}
		return true;
	}
,
	$type: new $.ig.Type('PositiveVolumeIndexIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('PriceChannelOverlay', 'FinancialOverlay', {

		init: function () {

			this.km = new $.ig.List$1(Number, 0);
			this.kn = new $.ig.List$1(Number, 0);

			$.ig.FinancialOverlay.prototype.init.call(this);
						this.a3($.ig.PriceChannelOverlay.prototype.$type);
				this.ia = new $.ig.CategoryFrame(3);
				this.ib = new $.ig.CategoryFrame(3);
				this.ic = new $.ig.CategoryFrame(3);
		}
, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.PriceChannelOverlay.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.PriceChannelOverlay.prototype.periodProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		switch (b) {
			case $.ig.PriceChannelOverlay.prototype.hv:
			case $.ig.PriceChannelOverlay.prototype.hx:
				this.kg(false);
				break;
		}
		$.ig.FinancialOverlay.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.PriceChannelOverlay.prototype.kl:
				this.kg(false);
				this.renderSeries(false);
				break;
		}
	}

, 
	es: function (a, b, c) {
		var d = $.ig.FinancialSeries.prototype.es.call(this, a, b, c);
		if (this.i2() == null || this.i3() == null) {
			d = false;
		}
		return d;
	}

, 
	kj: function () {
		this.km.clear();
		this.kn.clear();
		var a = $.ig.MathUtil.prototype.i(this.period(), 0, this.dx().g());
		var b = Math.min(this.i2().count(), this.i3().count());
		var c = this.jw(this.i2());
		var d = this.jw(this.i3());
		for (var e = 0; e < b; e++) {
			var f = Math.min(a, e);
			var g = -Number.MAX_VALUE;
			var h = Number.MAX_VALUE;
			for (var i = 0; i < f; i++) {
				if (!isNaN(c.item(e - i))) {
					g = Math.max(g, c.item(e - i));
				}
				if (!isNaN(d.item(e - i))) {
					h = Math.min(h, d.item(e - i));
				}
			}
			if (e == 0) {
				h = d.item(0);
				g = c.item(0);
			}
			this.km.add(g);
			this.kn.add(h);
		}
		return true;
	}

, 
	kr: function (a) {
		return a;
	}

, 
	jp: function (a, b) {
		var $self = this;
		var c = b.ac();
		var d = b.ab();
		var e = new $.ig.ScalerParams(c, d, this.xAxis().isInverted());
		var f = new $.ig.ScalerParams(c, d, this.yAxis().isInverted());
		var g = this.xAxis();
		var h = this.yAxis();
		a.d.clear();
		a.f.clear();
		a.g.clear();
		var i = 0;
		var j = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
		if (j != null && j.sortedIndices().count() != this.dx().g()) {
			return;
		}
		var k = this.xAxis().categoryMode();
		switch (k) {
			case $.ig.CategoryMode.prototype.mode0:
				i = 0;
				break;
			case $.ig.CategoryMode.prototype.mode1:
				i = 0.5 * this.xAxis().getCategorySize(c, d);
				break;
			case $.ig.CategoryMode.prototype.mode2:
				var l = this.index();
				i = this.xAxis().getGroupCenter(this.index(), c, d);
				break;
		}
		if (!this.kg()) {
			this.kg(this.kj());
		}
		var m = this.kr(this.xAxis().getUnscaledValue(2, e) - this.xAxis().getUnscaledValue(1, e));
		for (var n = b.cg().f(); n <= b.cg().g(); ++n) {
			var o;
			if (j == null) {
				o = b.cg().getBucket(n);

			} else {
				var p = j.sortedIndices().__inner[n];
				var q = j.getUnscaledValueAt(p);
				var r = this.kr(this.km.__inner[n]);
				var s = this.kr(this.kn.__inner[n]);
				var t = r;
				var u = s;
				var v = q;
				while (n < b.cg().g()) {
					p = j.sortedIndices().__inner[n + 1];
					v = j.getUnscaledValueAt(p);
					if (v - q > m) {
						break;
					}
					n++;
					t = Math.max(r, this.kr(this.km.__inner[n]));
					u = Math.min(s, this.kr(this.kn.__inner[n]));
				}
				if (!$.ig.Single.prototype.isInfinity(u) && !$.ig.Single.prototype.isInfinity(t)) {
					var w = NaN;
					if (!isNaN(q)) {
						w = this.xAxis().getScaledValue(q, e);
					}
					o = (function () { var $ret = new Array();
					$ret.add($self.kr(w));
					$ret.add(u);
					$ret.add(t); return $ret;}());

				} else {
					o = (function () { var $ret = new Array();
					$ret.add(NaN);
					$ret.add(NaN);
					$ret.add(NaN); return $ret;}());
				}
			}
			var x = Math.max(1, m);
			if (!isNaN(o[0]) && n * x >= this.ignoreFirst()) {
				if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
					o[0] = (o[0] + i);

				} else {
					o[0] = (g.getScaledValue(o[0], e) + i);
				}
				o[1] = h.getScaledValue(o[1], f);
				o[2] = h.getScaledValue(o[2], f);
				a.d.add(o);
			}
		}
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		var c = b;
		if (c != null) {
			c.ct();
		}
	}

, 
	jq: function (a, b) {
		var $self = this;
		var c = $.ig.util.cast($.ig.PriceChannelOverlayView.prototype.$type, b);
		if (c == null) {
			return;
		}
		c.ct();
		var d = a.d.count();
		var f = function (e) { return a.d.__inner[e][0]};
		var h = function (g) { return a.d.__inner[d - 1 - g][0]};
		var j = function (i) { return a.d.__inner[i][1]};
		var l = function (k) { return a.d.__inner[d - 1 - k][2]};
		c.cu(d, f, h, j, l);
	}
, 
	km: null, 
	kn: null
, 
	ed: function () {
		return new $.ig.PriceChannelOverlayView(this);
	}

, 
	ea: function (a) {
		$.ig.FinancialSeries.prototype.ea.call(this, a);
		this.kq($.ig.util.cast($.ig.PriceChannelOverlayView.prototype.$type, a));
	}

, 
	_kq: null,
	kq: function (a) {
		if (arguments.length === 1) {
			this._kq = a;
			return a;
		} else {
			return this._kq;
		}
	}
,
	$type: new $.ig.Type('PriceChannelOverlay', $.ig.FinancialOverlay.prototype.$type)
}, true);

$.ig.util.defType('PriceChannelBucketCalculator', 'FinancialBucketCalculator', {

		init: function (a) {


			$.ig.FinancialBucketCalculator.prototype.init.call(this, a);
						this.s(a);
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
	getBucket: function (a) {
		var $self = this;
		var b = a * this.h();
		var c = Math.min(b + this.h() - 1, this.e().cf().dx().g() - 1);
		if (b <= c) {
			var d = -Number.MAX_VALUE;
			var e = Number.MAX_VALUE;
			var f = 0;
			for (var g = b; g <= c; ++g) {
				if (!isNaN(this.s().cq().km.__inner[g]) && !isNaN(this.s().cq().kn.__inner[g])) {
					d = Math.max(d, this.s().cq().km.__inner[g]);
					e = Math.min(e, this.s().cq().kn.__inner[g]);
					++f;
				}
			}
			if (f > 0 && e != Number.MAX_VALUE && d != -Number.MAX_VALUE) {
				return (function () { var $ret = new Array();
				$ret.add((0.5 * (b + c)));
				$ret.add((e));
				$ret.add((d)); return $ret;}());
			}
		}
		return (function () { var $ret = new Array();
		$ret.add(NaN);
		$ret.add(NaN);
		$ret.add(NaN); return $ret;}());
	}
,
	$type: new $.ig.Type('PriceChannelBucketCalculator', $.ig.FinancialBucketCalculator.prototype.$type)
}, true);

$.ig.util.defType('PriceVolumeTrendIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.PriceVolumeTrendIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.PriceVolumeTrendIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('PriceVolumeTrendIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('PriceVolumeTrendIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.h1);
		c.add($.ig.FinancialSeries.prototype.hz);
		return c;
	}

, 
	a: function (a, b) {
		var c = 0;
		var d = a.indicatorColumn();
		var e = a.volumeColumn();
		var f = a.closeColumn();
		var g = a.count();
		if (g > 0) {
			d.item(0, c);
		}
		for (var h = 1; h < g; ++h) {
			c = c + b.v()(e.item(h) * (f.item(h) - f.item(h - 1)) / f.item(h - 1));
			d.item(h, c);
		}
		return true;
	}
,
	$type: new $.ig.Type('PriceVolumeTrendIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('RateOfChangeAndMomentumIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.RateOfChangeAndMomentumIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.RateOfChangeAndMomentumIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RateOfChangeAndMomentumIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.RateOfChangeAndMomentumIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('RateOfChangeAndMomentumIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('RateOfChangeAndMomentumIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		return c;
	}

, 
	a: function (a, b) {
		var c = a.closeColumn();
		var d = a.indicatorColumn();
		var e = a.period();
		var f = 0;
		var g = new Array(e);
		for (f = 0; f < e; f++) {
			g[f] = 0;
		}
		f = 0;
		var i = c.getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			var j = f % e;
			var k = b.v()(100 * (h - g[j]) / g[j]);
			d.item(f, k);
			g[j] = h;
			++f;
		}
		return true;
	}
,
	$type: new $.ig.Type('RateOfChangeAndMomentumIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('RelativeStrengthIndexIndicator', 'StrategyBasedIndicator', {

		init: function () {


			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.displayType($.ig.IndicatorDisplayType.prototype.area);
		}
, 
	lt: function () {
			return new $.ig.RelativeStrengthIndexIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.RelativeStrengthIndexIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RelativeStrengthIndexIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.RelativeStrengthIndexIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('RelativeStrengthIndexIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('RelativeStrengthIndexIndicatorStrategy', 'StreamingIndicatorCalculationStrategy', {
	init: function () {

		$.ig.StreamingIndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		return c;
	}

, 
	a: function (a, b) {
		var c = 0;
		var e = this.c(a, b).getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			a.indicatorColumn().item(c, d);
			c++;
		}
		return true;
	}

, 
	c: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : 0,
			$d : 0,
			$e : 0,
			$f : 0,
			$g : null,
			$h : null,
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
							this.$c = a.period();
							this.$d = 2 / (this.$c + 1);
							this.$e = 0;
							this.$f = 0;
							this.$g = a.indicatorColumn();
							this.$h = a.closeColumn();
							this.$state = 1;
							break;
						case 1:
							if (this.$g.count() > 0) {
								this.$state = 2;
							}
							else {
								this.$state = 4;
							}
							break;

						case 2:
							this.$current =  0;
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;

						case 4:
							this.$state = 5;
							break;
						case 5:
							this.$i = 1;
							this.$state = 9;
							break;
						case 6:
							this.$j = this.$h.item(this.$i) - this.$h.item(this.$i - 1);
							this.$k = this.$j > 0 ? this.$j : 0;
							this.$l = this.$j > 0 ? 0 : -this.$j;
							this.$e += this.$k / (this.$c - 1);
							this.$f += this.$l / (this.$c - 1);
							this.$current =  0;
							this.$state = 7
							return true;
						case 7:
							this.$state = 8;
							break;
						case 8:
							++this.$i;
							this.$state = 9;
							break;
						case 9:
							if (this.$i < Math.min(a.period(), this.$g.count())) {
								this.$state = 6;
							}
							else {
								this.$state = 10;
							}
							break;
						case 10:
							this.$state = 11;
							break;
						case 11:
							this.$m = a.period();
							this.$state = 15;
							break;
						case 12:
							this.$n = this.$h.item(this.$m) - this.$h.item(this.$m - 1);
							this.$o = this.$n > 0 ? this.$n : 0;
							this.$p = this.$n > 0 ? 0 : -this.$n;
							this.$e = (this.$e * (this.$c - 1) + this.$o) / this.$c;
							this.$f = (this.$f * (this.$c - 1) + this.$p) / this.$c;
							this.$current =  b.v()(this.$e != 0 ? 100 * this.$e / (this.$e + this.$f) : 0);
							this.$state = 13
							return true;
						case 13:
							this.$state = 14;
							break;
						case 14:
							++this.$m;
							this.$state = 15;
							break;
						case 15:
							if (this.$m < this.$g.count()) {
								this.$state = 12;
							}
							else {
								this.$state = 16;
							}
							break;
						case 16:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}
,
	$type: new $.ig.Type('RelativeStrengthIndexIndicatorStrategy', $.ig.StreamingIndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('SlowStochasticOscillatorIndicator', 'StrategyBasedIndicator', {

		init: function () {

			var $self = this;

			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.trendLineBrush((function () { var $ret = new $.ig.Brush();
				$ret.__fill = "Blue"; return $ret;}()));
				this.trendLineType($.ig.TrendLineType.prototype.exponentialAverage);
				this.trendLinePeriod(3);
		}
, 
	lt: function () {
			return new $.ig.SlowStochasticOscillatorIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.SlowStochasticOscillatorIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SlowStochasticOscillatorIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.SlowStochasticOscillatorIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('SlowStochasticOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('SlowStochasticOscillatorIndicatorStrategy', 'IndicatorCalculationStrategy', {

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
		init: function () {


			$.ig.IndicatorCalculationStrategy.prototype.init.call(this);
						this.d(new $.ig.PercentKCalculationStrategy());
		}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(this.d().b(a, b));
		c.w(b.l().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = this.d().c(a, b);
		var d = b.l().c()(c, 3);
		var e = 0;
		var g = d.getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			a.indicatorColumn().item(e, f);
			e++;
		}
		return true;
	}
,
	$type: new $.ig.Type('SlowStochasticOscillatorIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('StandardDeviationIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.StandardDeviationIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.StandardDeviationIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.StandardDeviationIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.StandardDeviationIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('StandardDeviationIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('StandardDeviationIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(a.typicalColumn().basedOn());
		c.w(b.n().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = b.n().c()(a.typicalColumn(), a.period()).getEnumerator();
		var d = a.indicatorColumn();
		var e = 0;
		while (c.moveNext()) {
			d.item(e, c.current());
			e++;
		}
		return true;
	}
,
	$type: new $.ig.Type('StandardDeviationIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('StochRSIIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.StochRSIIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.StochRSIIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.StochRSIIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.StochRSIIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('StochRSIIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('StochRSIIndicatorStrategy', 'IndicatorCalculationStrategy', {

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
		init: function () {


			$.ig.IndicatorCalculationStrategy.prototype.init.call(this);
						this.d(new $.ig.RelativeStrengthIndexIndicatorStrategy());
		}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(this.d().b(a, b));
		return c;
	}

, 
	a: function (a, b) {
		var c = this.d().c(a, b).getEnumerator();
		var d = a.period();
		var e = 0;
		var f = new Array(d);
		for (e = 0; e < d; e++) {
			f[e] = 0;
		}
		e = 0;
		while (c.moveNext()) {
			var g = Math.min(d, e);
			var h = -Number.MAX_VALUE;
			var i = Number.MAX_VALUE;
			var j = e % d;
			for (var k = 0; k < g; k++) {
				if (!isNaN(f[g - k - 1])) {
					h = Math.max(h, f[g - k - 1]);
				}
				if (!isNaN(f[g - k - 1])) {
					i = Math.min(i, f[g - k - 1]);
				}
			}
			f[j] = c.current();
			var l = b.v()((c.current() - i) / (h - i));
			a.indicatorColumn().item(e, l);
			e++;
		}
		return true;
	}
,
	$type: new $.ig.Type('StochRSIIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('TRIXIndicator', 'StrategyBasedIndicator', {

		init: function () {

			var $self = this;

			$.ig.StrategyBasedIndicator.prototype.init.call(this);
						this.displayType($.ig.IndicatorDisplayType.prototype.line);
				this.trendLineBrush((function () { var $ret = new $.ig.Brush();
				$ret.__fill = "Blue"; return $ret;}()));
				this.trendLineType($.ig.TrendLineType.prototype.simpleAverage);
				this.trendLinePeriod(9);
		}
, 
	lt: function () {
			return new $.ig.TRIXIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.TRIXIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.TRIXIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.TRIXIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('TRIXIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('TRIXIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hz);
		c.w(b.l().d());
		return c;
	}

, 
	a: function (a, b) {
		var c = b.l().c()(a.closeColumn(), a.period());
		var d = b.l().c()(c, a.period());
		var e = b.l().c()(d, a.period()).getEnumerator();
		var f = a.indicatorColumn();
		if (f.count() > 0) {
			f.item(0, 0);
		}
		var g = 1;
		e.moveNext();
		var h = e.current();
		while (e.moveNext()) {
			f.item(g, b.v()((e.current() - h) / h));
			h = e.current();
			g++;
		}
		return true;
	}
,
	$type: new $.ig.Type('TRIXIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('TypicalPriceIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.TypicalPriceIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.TypicalPriceIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('TypicalPriceIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('TypicalPriceIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(a.typicalColumn().basedOn());
		return c;
	}

, 
	a: function (a, b) {
		var c = 0;
		var e = a.typicalColumn().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			a.indicatorColumn().item(c, d);
			c++;
		}
		return true;
	}
,
	$type: new $.ig.Type('TypicalPriceIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('UltimateOscillatorIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.UltimateOscillatorIndicatorCalculationStrategy();
	}

, 
	lu: function () {
			return $.ig.UltimateOscillatorIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('UltimateOscillatorIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('UltimateOscillatorIndicatorCalculationStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.w(a.trueLow().basedOn());
		c.add($.ig.FinancialSeries.prototype.hz);
		c.w(a.trueRange().basedOn());
		c.w(b.o().d());
		return c;
	}

, 
	c: function (a) {
		var $self = this;
		var $iter = function () { return function (a) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$b : 0,
			$c : null,
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
							this.$b = 0;
							this.$c = a.trueLow().getEnumerator();
							this.$state = 1;
							break;
						case 1:
							this.$state = 4;
							break;
						case 2:
							this.$current =  a.closeColumn().item(this.$b) - this.$c.current();
							this.$state = 3
							return true;
						case 3:
							this.$b++;
							this.$state = 4;
							break;
						case 4:
							if (this.$c.moveNext()) {
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
		}; } (a) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	a: function (a, b) {
		var c = this.c(a);
		var d = a.trueRange();
		var e = b.o().c()(c, 7).getEnumerator();
		var f = b.o().c()(d, 7).getEnumerator();
		var g = b.o().c()(c, 14).getEnumerator();
		var h = b.o().c()(d, 14).getEnumerator();
		var i = b.o().c()(c, 28).getEnumerator();
		var j = b.o().c()(d, 28).getEnumerator();
		var k = 0;
		while (e.moveNext() && f.moveNext() && g.moveNext() && h.moveNext() && i.moveNext() && j.moveNext()) {
			var l = b.v()(4 * (e.current() / f.current()) + 2 * (g.current() / h.current()) + (i.current() / j.current()));
			var m = (l / (4 + 2 + 1)) * 100;
			a.indicatorColumn().item(k, m);
			k++;
		}
		return true;
	}
,
	$type: new $.ig.Type('UltimateOscillatorIndicatorCalculationStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('WeightedCloseIndicator', 'ItemwiseStrategyBasedIndicator', {
	init: function () {

		$.ig.ItemwiseStrategyBasedIndicator.prototype.init.call(this);

	}
, 
	me: function () {
			return new $.ig.WeightedCloseIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.WeightedCloseIndicator.prototype.$type;
	}
,
	$type: new $.ig.Type('WeightedCloseIndicator', $.ig.ItemwiseStrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('WeightedCloseIndicatorStrategy', 'ItemwiseIndicatorCalculationStrategy', {
	init: function () {

		$.ig.ItemwiseIndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.add($.ig.FinancialSeries.prototype.hz);
		return c;
	}

, 
	a: function (a, b, c) {
		a.indicatorColumn().item(c, (a.highColumn().item(c) + a.lowColumn().item(c) + (a.closeColumn().item(c) * 2)) / 4);
		return true;
	}
,
	$type: new $.ig.Type('WeightedCloseIndicatorStrategy', $.ig.ItemwiseIndicatorCalculationStrategy.prototype.$type)
}, true);

$.ig.util.defType('WilliamsPercentRIndicator', 'StrategyBasedIndicator', {
	init: function () {

		$.ig.StrategyBasedIndicator.prototype.init.call(this);

	}
, 
	lt: function () {
			return new $.ig.WilliamsPercentRIndicatorStrategy();
	}

, 
	lu: function () {
			return $.ig.WilliamsPercentRIndicator.prototype.$type;
	}

, 
	period: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.WilliamsPercentRIndicator.prototype.periodProperty, a);
			return a;
		} else {
			return this.b($.ig.WilliamsPercentRIndicator.prototype.periodProperty);
		}
	}

, 
	lz: function () {
		return this.period();
	}
,
	$type: new $.ig.Type('WilliamsPercentRIndicator', $.ig.StrategyBasedIndicator.prototype.$type)
}, true);

$.ig.util.defType('WilliamsPercentRIndicatorStrategy', 'IndicatorCalculationStrategy', {
	init: function () {

		$.ig.IndicatorCalculationStrategy.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = new $.ig.List$1(String, 0);
		c.add($.ig.FinancialSeries.prototype.hv);
		c.add($.ig.FinancialSeries.prototype.hx);
		c.add($.ig.FinancialSeries.prototype.hz);
		return c;
	}

, 
	a: function (a, b) {
		var c = a.period();
		var d = a.highColumn();
		var e = a.lowColumn();
		for (var f = 0; f < a.count(); f++) {
			var g = Math.min(c, f);
			var h = -Number.MAX_VALUE;
			var i = Number.MAX_VALUE;
			for (var j = 0; j < g; j++) {
				if (!isNaN(d.item(f - j))) {
					h = Math.max(h, d.item(f - j));
				}
				if (!isNaN(e.item(f - j))) {
					i = Math.min(i, e.item(f - j));
				}
			}
			a.indicatorColumn().item(f, b.v()((a.closeColumn().item(f) - h) / (h - i) * 100));
		}
		return true;
	}
,
	$type: new $.ig.Type('WilliamsPercentRIndicatorStrategy', $.ig.IndicatorCalculationStrategy.prototype.$type)
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




$.ig.util.defType('SortingTrendLineManager', 'CategoryTrendLineManagerBase', {

		init: function (a, b) {


			$.ig.CategoryTrendLineManagerBase.prototype.init.call(this);
						this.aj(a);
				this.ak(b);
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
	prepareLine: function (a, b, c, d, e, f, g) {
		var $self = this;
		var h = g.h() * g.j();
		var i = g.i() * g.j();
		var j = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		if (b == $.ig.TrendLineType.prototype.none) {
			this.m(null);
			this.l().clear();
			return;
		}
		if (this.u(b)) {
			this.l().clear();
			this.m($.ig.TrendFitCalculator.prototype.a(j, b, g, this.m(), c.count(), function (k) { return k + 1			}, function (l) { return c.item(l)			}, function (m) {
				var n = Math.floor(m);
				var o = Math.ceil(m);
				var p = m - n;
				var q;
				if (o <= i) {
					q = $self.aj()(n) + p * ($self.aj()(o) - $self.aj()(n));

				} else {
					q = $self.aj()(n) + p * ($self.aj()(i) - $self.aj()(n));
				}
				return e(q);
			}, f, h, i));
		}
		if (this.v(b)) {
			this.m(null);
			$.ig.TrendAverageCalculator.prototype.b(b, this.l(), c, d);
			for (var r = g.h(); r <= g.i(); r += 1) {
				var s = r * g.j();
				var t = this.aj()(s);
				if (s >= 0 && s < this.l().count()) {
					var u = e(t);
					var v = f(this.l().__inner[s]);
					j.add({__x: u + g.n(), __y: v, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				}
			}
		}
		this.x(j, g, a);
	}
,
	$type: new $.ig.Type('SortingTrendLineManager', $.ig.CategoryTrendLineManagerBase.prototype.$type)
}, true);

















$.ig.util.defType('FinancialEventArgs', 'EventArgs', {

		init: function (a, b, c, d) {


			$.ig.EventArgs.prototype.init.call(this);
						this.position(a);
				this.count(b);
				this.dataSource(c);
				this.supportingCalculations(d);
		}
, 
	_position: null,
	position: function (a) {
		if (arguments.length === 1) {
			this._position = a;
			return a;
		} else {
			return this._position;
		}
	}

, 
	_count: null,
	count: function (a) {
		if (arguments.length === 1) {
			this._count = a;
			return a;
		} else {
			return this._count;
		}
	}

, 
	_dataSource: null,
	dataSource: function (a) {
		if (arguments.length === 1) {
			this._dataSource = a;
			return a;
		} else {
			return this._dataSource;
		}
	}

, 
	_supportingCalculations: null,
	supportingCalculations: function (a) {
		if (arguments.length === 1) {
			this._supportingCalculations = a;
			return a;
		} else {
			return this._supportingCalculations;
		}
	}

, 
	_basedOn: null,
	basedOn: function (a) {
		if (arguments.length === 1) {
			this._basedOn = a;
			return a;
		} else {
			return this._basedOn;
		}
	}
,
	$type: new $.ig.Type('FinancialEventArgs', $.ig.EventArgs.prototype.$type)
}, true);






$.ig.util.defType('FinancialPriceSeries', 'FinancialSeries', {

	ed: function () {
		return new $.ig.FinancialPriceSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.FinancialSeries.prototype.ea.call(this, a);
		this.kp(a);
	}

, 
	_kp: null,
	kp: function (a) {
		if (arguments.length === 1) {
			this._kp = a;
			return a;
		} else {
			return this._kp;
		}
	}

, 
		init: function () {


			$.ig.FinancialSeries.prototype.init.call(this);
						this.a3($.ig.FinancialPriceSeries.prototype.$type);
				this.ia = new $.ig.CategoryFrame(5);
				this.ib = new $.ig.CategoryFrame(5);
				this.ic = new $.ig.CategoryFrame(5);
		}
, 
	trendLineType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.trendLineTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.trendLineTypeProperty);
		}
	}

, 
	trendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.trendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.trendLineBrushProperty);
		}
	}

, 
	actualTrendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.actualTrendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.actualTrendLineBrushProperty);
		}
	}

, 
	trendLineThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.trendLineThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.trendLineThicknessProperty);
		}
	}

, 
	trendLineDashCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.trendLineDashCapProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.trendLineDashCapProperty);
		}
	}

, 
	trendLineDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.trendLineDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.trendLineDashArrayProperty);
		}
	}

, 
	trendLinePeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.trendLinePeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.trendLinePeriodProperty);
		}
	}

, 
	trendLineZIndex: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.trendLineZIndexProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.trendLineZIndexProperty);
		}
	}

, 
	fc: function (a, b, c, d) {
		if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
			($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).notifyDataChanged();
		}
		this.kp().cg().q(this.resolution());
		this.kp().cr().ad(a, b, c, d);
		if (this.yAxis() != null) {
			this.yAxis().updateRange();
		}
		this.renderSeries(true);
	}

, 
	displayType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.FinancialPriceSeries.prototype.displayTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.FinancialPriceSeries.prototype.displayTypeProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		switch (b) {
			case $.ig.FinancialPriceSeries.prototype.hq:
				this.kp().cr($.ig.CategoryTrendLineManagerBase.prototype.af(this.kp().cr(), this.xAxis(), this.rootCanvas(), this));
				break;
		}
		$.ig.FinancialSeries.prototype.e6.call(this, a, b, c, d);
		if (this.kp().cr() != null && this.kp().cr().ae(a, b, c, d, this.trendLineDashArray())) {
			this.renderSeries(false);
			this.e5();
		}
		switch (b) {
			case $.ig.FinancialPriceSeries.prototype.kd:
				if (this.rootCanvas() != null) {
					this.kt();
					this.jq(this.ic, this.kp());
				}
				this.e5();
				break;
			case $.ig.FinancialPriceSeries.prototype.b6:
				this.fj();
				break;
			case $.ig.FinancialPriceSeries.prototype.b4:
				this.e5();
				break;
		}
	}

, 
	kt: function () {
		this.kp().cw();
		if (this.dt() != null) {
			(this.dt()).cw();
		}
	}

, 
	em: function (a) {
		if (a != null && a == this.yAxis() && this.i3() != null && !isNaN(this.i3().minimum()) && this.i2() != null && !isNaN(this.i2().maximum())) {
			return new $.ig.AxisRange(this.i3().minimum(), this.i2().maximum());
		}
		return null;
	}

, 
	scrollIntoView: function (a) {
		var b = this.dx() != null ? this.dx().item1(a) : -1;
		var c = this.view().ac();
		var d = this.view().ab();
		var e = new $.ig.Rect(0, 0, 0, 1, 1);
		var f = new $.ig.ScalerParams(e, e, this.yAxis().isInverted());
		if (b >= 0 && c != null && d != null) {
			if (this.xAxis() != null) {
				var g = new $.ig.ScalerParams(c, d, this.xAxis().isInverted());
				var h = this.xAxis().getScaledValue(b, g);
				if (h < c.left() + 0.1 * c.width()) {
					h = h + 0.4 * c.width();
				}
				if (h > c.right() - 0.1 * c.width()) {
					h = h - 0.4 * c.width();
				}
				c.x(h - 0.5 * c.width());
			}
			if (this.yAxis() != null && this.i3() != null && this.i2() != null && b < this.i3().count() && b < this.i2().count()) {
				var i = this.yAxis().getScaledValue(this.i3().item(b), f);
				var j = this.yAxis().getScaledValue(this.i2().item(b), f);
				if (!isNaN(i) && !isNaN(j)) {
					var k = Math.abs(i - j);
					if (c.height() < k) {
						c.height(k);
						c.y(Math.min(i, j));

					} else {
						if (i < c.top() + 0.1 * c.height()) {
							i = i + 0.4 * c.height();
						}
						if (i > c.bottom() - 0.1 * c.height()) {
							i = i - 0.4 * c.height();
						}
						c.y(i - 0.5 * c.height());
					}
				}
			}
			this.syncLink().bp(this.seriesViewer(), c);
		}
		return b >= 0;
	}

, 
	es: function (a, b, c) {
		var d = $.ig.FinancialSeries.prototype.es.call(this, a, b, c);
		if (this.i1() == null || this.i4() == null || this.i2() == null || this.i3() == null) {
			d = false;
		}
		return d;
	}

, 
	ku: function (a) {
		return a;
	}

, 
	jp: function (a, b) {
		var $self = this;
		var c = b.ac();
		var d = b.ab();
		var e = this.xAxis();
		var f = this.yAxis();
		var g = new $.ig.ScalerParams(c, d, e.isInverted());
		var h = new $.ig.ScalerParams(c, d, f.isInverted());
		a.d.clear();
		a.f.clear();
		a.g.clear();
		var i = 0;
		var j = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
		if (j != null && j.sortedIndices().count() != this.dx().g()) {
			return;
		}
		var k = this.xAxis().categoryMode();
		switch (k) {
			case $.ig.CategoryMode.prototype.mode0:
				i = 0;
				break;
			case $.ig.CategoryMode.prototype.mode1:
				i = 0.5 * this.xAxis().getCategorySize(c, d);
				break;
			case $.ig.CategoryMode.prototype.mode2:
				i = this.xAxis().getGroupCenter(this.index(), c, d);
				break;
		}
		var l = $.ig.util.cast($.ig.FinancialPriceSeriesView.prototype.$type, b);
		if (this.trendLineType() != $.ig.TrendLineType.prototype.none) {
			var m = new Array(this.dx().g());
			var n = 0;
			var p = this.i7().getEnumerator();
			while (p.moveNext()) {
				var o = p.current();
				m[n] = o;
				n++;
			}
			l.cr().prepareLine(a.g, this.trendLineType(), m, this.trendLinePeriod(), function (q) { return $self.xAxis().getScaledValue(q, g)			}, function (r) { return $self.yAxis().getScaledValue(r, h)			}, (function () { var $ret = new $.ig.TrendResolutionParams();
			$ret.j(b.cg().h());
			$ret.h(b.cg().f());
			$ret.i(b.cg().g());
			$ret.n(i);
			$ret.m($self.resolution());
			$ret.k(d); return $ret;}()));
		}
		var s = this.ku(this.xAxis().getUnscaledValue(2, g) - this.xAxis().getUnscaledValue(1, g));
		for (var t = b.cg().f(); t <= b.cg().g(); ++t) {
			var u;
			if (j == null) {
				u = b.cg().getBucket(t);

			} else {
				var v = j.sortedIndices().__inner[t];
				var w = j.getUnscaledValueAt(v);
				var x = this.ku(this.i1().item(v));
				var y = this.ku(this.i2().item(v));
				var z = this.ku(this.i3().item(v));
				var aa = this.ku(this.i4().item(v));
				var ab = x;
				var ac = y;
				var ad = z;
				var ae = aa;
				var af = w;
				while (t < b.cg().g()) {
					v = j.sortedIndices().__inner[t + 1];
					af = j.getUnscaledValueAt(v);
					if (af - w > s) {
						break;
					}
					t++;
					ac = Math.max(y, this.ku(this.i2().item(v)));
					ad = Math.min(z, this.ku(this.i3().item(v)));
					ae = this.ku(this.i4().item(v));
				}
				var ag = NaN;
				if (!isNaN(w)) {
					ag = this.xAxis().getScaledValue(w, g);
				}
				u = (function () { var $ret = new Array();
				$ret.add($self.ku(ag));
				$ret.add(ab);
				$ret.add(ac);
				$ret.add(ad);
				$ret.add(ae); return $ret;}());
			}
			if (!isNaN(u[0])) {
				if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
					u[0] = (u[0] + i);

				} else {
					u[0] = (e.getScaledValue(u[0], g) + i);
				}
				u[1] = f.getScaledValue(u[1], h);
				u[2] = f.getScaledValue(u[2], h);
				u[3] = f.getScaledValue(u[3], h);
				u[4] = f.getScaledValue(u[4], h);
				a.d.add(u);
			}
		}
		return;
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		var c = $.ig.util.cast($.ig.FinancialPriceSeriesView.prototype.$type, b);
		c.cx();
		if (c.cr() != null) {
			c.cr().ab();
		}
	}

, 
	jq: function (a, b) {
		var $self = this;
		if (this.xAxis() == null || this.yAxis() == null) {
			return;
		}
		var c = $.ig.util.cast($.ig.FinancialPriceSeriesView.prototype.$type, b);
		c.cx();
		if (c.cr() != null) {
			c.cr().ab();
		}
		var d = this.displayType();
		var e = this.xAxis().gz(b.ac(), b.ab()) / 2;
		e = Math.max(e, $.ig.FinancialPriceSeries.prototype.ke);
		var f = $.ig.util.cast($.ig.FinancialPriceSeriesView.prototype.$type, b);
		var g = f.cy();
		var h = f.cz();
		if (this.trendLineType() != $.ig.TrendLineType.prototype.none) {
			c.cr().t(a.g);
		}
		var i = a.d;
		for (var j = 0; j < i.count(); ++j) {
			var k = i.__inner[j][0] - e;
			var l = i.__inner[j][0];
			var m = i.__inner[j][0] + e;
			var n = i.__inner[j][1];
			var o = i.__inner[j][2];
			var p = i.__inner[j][3];
			var q = i.__inner[j][4];
			if (isNaN(n) || isNaN(o) || isNaN(p) || isNaN(q)) {
				continue;
			}
			var r = n < q;
			var s = r ? h : g;
			switch (d) {
				case $.ig.PriceDisplayType.prototype.candlestick:
					if (r) {
						var t = n;
						n = q;
						q = t;
					}
					s.d().add((function () { var $ret = new $.ig.LineGeometry();
					$ret.e({__x: l, __y: p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					$ret.f({__x: l, __y: n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
					s.d().add((function () { var $ret = new $.ig.RectangleGeometry();
					$ret.f(new $.ig.Rect(0, k, q, m - k, n - q)); return $ret;}()));
					s.d().add((function () { var $ret = new $.ig.LineGeometry();
					$ret.e({__x: l, __y: q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					$ret.f({__x: l, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
					break;
				case $.ig.PriceDisplayType.prototype.oHLC:
					s.d().add((function () { var $ret = new $.ig.LineGeometry();
					$ret.e({__x: k, __y: n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					$ret.f({__x: l, __y: n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
					s.d().add((function () { var $ret = new $.ig.LineGeometry();
					$ret.e({__x: l, __y: p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					$ret.f({__x: l, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
					s.d().add((function () { var $ret = new $.ig.LineGeometry();
					$ret.e({__x: l, __y: q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
					$ret.f({__x: m, __y: q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
					break;
			}
		}
	}

, 
	el: function (a, b) {
		if (a == this.kp().cr().n()) {
			return null;
		}
		return $.ig.Series.prototype.el.call(this, a, b);
	}

, 
	fj: function () {
		$.ig.Series.prototype.fj.call(this);
		if (this.index() < 0) {
			return;
		}
		this.kp().c0();
	}

, 
	gw: function (a) {
		$.ig.Series.prototype.gw.call(this, a);
		var b = new $.ig.PolyLineVisualData(1, "trendLine", this.kp().cr().n());
		b.tags().add("Trend");
		a.shapes().add(b);
	}
,
	$type: new $.ig.Type('FinancialPriceSeries', $.ig.FinancialSeries.prototype.$type)
}, true);

$.ig.util.defType('FinancialPriceBucketCalculator', 'FinancialBucketCalculator', {

		init: function (a) {


			$.ig.FinancialBucketCalculator.prototype.init.call(this, a);
		}
, 
	getBucket: function (a) {
		var $self = this;
		var b = a * this.h();
		var c = Math.min(b + this.h() - 1, this.e().cf().dx().g() - 1);
		if (b <= c && b >= 0 && c >= 0) {
			var d = this.e().cf().i1().item(b);
			var e = Number.NEGATIVE_INFINITY;
			var f = Number.POSITIVE_INFINITY;
			var g = this.e().cf().i4().item(c);
			for (var h = b; h <= c; ++h) {
				e = Math.max(e, this.e().cf().i2().item(h));
				f = Math.min(f, this.e().cf().i3().item(h));
			}
			f = Math.min(d, f);
			e = Math.max(g, e);
			return (function () { var $ret = new Array();
			$ret.add((0.5 * (b + c)));
			$ret.add(d);
			$ret.add(e);
			$ret.add(f);
			$ret.add(g); return $ret;}());
		}
		return (function () { var $ret = new Array();
		$ret.add(NaN);
		$ret.add(NaN);
		$ret.add(NaN);
		$ret.add(NaN);
		$ret.add(NaN); return $ret;}());
	}
,
	$type: new $.ig.Type('FinancialPriceBucketCalculator', $.ig.FinancialBucketCalculator.prototype.$type)
}, true);

$.ig.util.defType('FinancialPriceSeriesView', 'FinancialSeriesView', {

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
		init: function (a) {

			this.cm = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.GeometryGroup()); return $ret;}());
			this.cn = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.GeometryGroup()); return $ret;}());

			$.ig.FinancialSeriesView.prototype.init.call(this, a);
						this.cq(a);
				this.cr(new $.ig.CategoryTrendLineManager());
		}
, 
	cl: function () {
		return new $.ig.FinancialPriceBucketCalculator(this);
	}

, 
	ag: function () {
		var $self = this;
		$.ig.FinancialSeriesView.prototype.ag.call(this);
		if (!this.ad()) {
			this.cf().negativeBrush((function () { var $ret = new $.ig.Brush();
			$ret.__fill = "#415460"; return $ret;}()));
			this.cf().resolution(2);
			this.cf().thickness(1);
			this.cf().outline((function () { var $ret = new $.ig.Brush();
			$ret.__fill = "#222222"; return $ret;}()));
		}
	}
, 
	cm: null, 
	cn: null
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
	cw: function () {
		if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
			this.cm.__stroke = this.u().actualBrush();

		} else {
			this.cm.__stroke = this.u().actualOutline();
		}
		if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
			this.cn.__stroke = this.cf().negativeBrush();

		} else {
			this.cn.__stroke = this.u().actualOutline();
		}
	}

, 
	cx: function () {
		var a = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cm.bp());
		var b = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cn.bp());
		a.reset1();
		b.reset1();
		this.an();
	}

, 
	cy: function () {
		this.an();
		return $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cm.bp());
	}

, 
	cz: function () {
		this.an();
		return $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cn.bp());
	}

, 
	c0: function () {
		this.cq().actualTrendLineBrush(null);
		if (this.cq().trendLineBrush() != null) {
			this.cq().actualTrendLineBrush(this.cq().trendLineBrush());

		} else {
			this.cq().actualTrendLineBrush(this.cq().actualBrush());
		}
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.cm.a7(this.u().thickness());
		this.cm.a8(this.u().dashArray());
		this.cm.a9(this.u().dashCap());
		if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
			this.cm.__stroke = this.u().actualBrush();

		} else {
			this.cm.__stroke = this.u().actualOutline();
			this.cm.__fill = this.u().actualBrush();
		}
		this.cn.a7(this.u().thickness());
		this.cn.a8(this.u().dashArray());
		this.cn.a9(this.u().dashCap());
		if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
			this.cn.__stroke = this.cf().negativeBrush();

		} else {
			this.cn.__stroke = this.u().actualOutline();
			this.cn.__fill = this.cf().negativeBrush();
		}
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.cm.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
			this.cm.__stroke = a;

		} else {
			this.cm.__stroke = a;
			this.cm.__fill = a;
		}
		this.cn.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
			this.cn.__stroke = a;

		} else {
			this.cn.__stroke = a;
			this.cn.__fill = a;
		}
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.b8(this.cq().yAxis());
				a.e($.ig.GradientDirection.prototype.bottomTop, c);
			}
			a.g(this.cm);
			a.g(this.cn);
		}
	}

, 
	a1: function (a, b) {
		if (a.b()) {
			if (this.cq().trendLineType() != $.ig.TrendLineType.prototype.none && !b) {
				var c = this.cr().n();
				c.a7(this.cq().trendLineThickness());
				c.__stroke = this.cq().actualTrendLineBrush();
				c.a8(this.cq().trendLineDashArray());
				c.a9(this.cq().trendLineDashCap());
				if (this.k && !b) {
					a.e($.ig.GradientDirection.prototype.bottomTop, null);
				}
				a.k(c);
			}
		}
		$.ig.SeriesView.prototype.a1.call(this, a, b);
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "positivePathShape", this.cm);
		b.tags().add("Positive");
		b.tags().add("Main");
		var c = new $.ig.PathVisualData(1, "negativePathShape", this.cn);
		c.tags().add("Negative");
		a.shapes().add(b);
		a.shapes().add(c);
	}
,
	$type: new $.ig.Type('FinancialPriceSeriesView', $.ig.FinancialSeriesView.prototype.$type)
}, true);

$.ig.util.defType('FinancialCalculationDataSource', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_openColumn: null,
	openColumn: function (a) {
		if (arguments.length === 1) {
			this._openColumn = a;
			return a;
		} else {
			return this._openColumn;
		}
	}

, 
	_closeColumn: null,
	closeColumn: function (a) {
		if (arguments.length === 1) {
			this._closeColumn = a;
			return a;
		} else {
			return this._closeColumn;
		}
	}

, 
	_highColumn: null,
	highColumn: function (a) {
		if (arguments.length === 1) {
			this._highColumn = a;
			return a;
		} else {
			return this._highColumn;
		}
	}

, 
	_lowColumn: null,
	lowColumn: function (a) {
		if (arguments.length === 1) {
			this._lowColumn = a;
			return a;
		} else {
			return this._lowColumn;
		}
	}

, 
	_volumeColumn: null,
	volumeColumn: function (a) {
		if (arguments.length === 1) {
			this._volumeColumn = a;
			return a;
		} else {
			return this._volumeColumn;
		}
	}

, 
	_indicatorColumn: null,
	indicatorColumn: function (a) {
		if (arguments.length === 1) {
			this._indicatorColumn = a;
			return a;
		} else {
			return this._indicatorColumn;
		}
	}

, 
	_typicalColumn: null,
	typicalColumn: function (a) {
		if (arguments.length === 1) {
			this._typicalColumn = a;
			return a;
		} else {
			return this._typicalColumn;
		}
	}

, 
	_trueRange: null,
	trueRange: function (a) {
		if (arguments.length === 1) {
			this._trueRange = a;
			return a;
		} else {
			return this._trueRange;
		}
	}

, 
	_trueLow: null,
	trueLow: function (a) {
		if (arguments.length === 1) {
			this._trueLow = a;
			return a;
		} else {
			return this._trueLow;
		}
	}

, 
	_period: null,
	period: function (a) {
		if (arguments.length === 1) {
			this._period = a;
			return a;
		} else {
			return this._period;
		}
	}

, 
	_shortPeriod: null,
	shortPeriod: function (a) {
		if (arguments.length === 1) {
			this._shortPeriod = a;
			return a;
		} else {
			return this._shortPeriod;
		}
	}

, 
	_longPeriod: null,
	longPeriod: function (a) {
		if (arguments.length === 1) {
			this._longPeriod = a;
			return a;
		} else {
			return this._longPeriod;
		}
	}

, 
	_count: null,
	count: function (a) {
		if (arguments.length === 1) {
			this._count = a;
			return a;
		} else {
			return this._count;
		}
	}

, 
	_calculateFrom: null,
	calculateFrom: function (a) {
		if (arguments.length === 1) {
			this._calculateFrom = a;
			return a;
		} else {
			return this._calculateFrom;
		}
	}

, 
	_calculateCount: null,
	calculateCount: function (a) {
		if (arguments.length === 1) {
			this._calculateCount = a;
			return a;
		} else {
			return this._calculateCount;
		}
	}

, 
	_multiplier: null,
	multiplier: function (a) {
		if (arguments.length === 1) {
			this._multiplier = a;
			return a;
		} else {
			return this._multiplier;
		}
	}

, 
	_minimumValue: null,
	minimumValue: function (a) {
		if (arguments.length === 1) {
			this._minimumValue = a;
			return a;
		} else {
			return this._minimumValue;
		}
	}

, 
	_maximumValue: null,
	maximumValue: function (a) {
		if (arguments.length === 1) {
			this._maximumValue = a;
			return a;
		} else {
			return this._maximumValue;
		}
	}

, 
	_specifiesRange: null,
	specifiesRange: function (a) {
		if (arguments.length === 1) {
			this._specifiesRange = a;
			return a;
		} else {
			return this._specifiesRange;
		}
	}
,
	$type: new $.ig.Type('FinancialCalculationDataSource', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('FinancialCalculationSupportingCalculations', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('FinancialCalculationSupportingCalculations', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SupportingCalculation$1', 'Object', {
	$tCalculationStrategy: null
, 
		init: function ($tCalculationStrategy, initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			this.$tCalculationStrategy = $tCalculationStrategy
			this.$type = this.$type.specialize(this.$tCalculationStrategy);
			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = new $.ig.List$1(String, 0);
		}
, 
		init1: function ($tCalculationStrategy, initNumber, a, b) {


			this.$tCalculationStrategy = $tCalculationStrategy
			this.$type = this.$type.specialize(this.$tCalculationStrategy);
			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = new $.ig.List$1(String, 1, b);
		}, 
	a: null, 
	b: null
, 
	c: function () {
			return this.a;
	}

, 
	d: function () {
			return this.b;
	}
,
	$type: new $.ig.Type('SupportingCalculation$1', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('ColumnSupportingCalculation', 'SupportingCalculation$1', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.SupportingCalculation$1.prototype.init.call(this, $.ig.SupportingCalculationStrategy.prototype.$type, a);
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.SupportingCalculation$1.prototype.init1.call(this, $.ig.SupportingCalculationStrategy.prototype.$type, 1, a, b);
		},
	$type: new $.ig.Type('ColumnSupportingCalculation', $.ig.SupportingCalculation$1.prototype.$type.specialize($.ig.SupportingCalculationStrategy.prototype.$type))
}, true);

$.ig.util.defType('DataSourceSupportingCalculation', 'SupportingCalculation$1', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.SupportingCalculation$1.prototype.init.call(this, $.ig.ProvideColumnValuesStrategy.prototype.$type, a);
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.SupportingCalculation$1.prototype.init1.call(this, $.ig.ProvideColumnValuesStrategy.prototype.$type, 1, a, b);
		},
	$type: new $.ig.Type('DataSourceSupportingCalculation', $.ig.SupportingCalculation$1.prototype.$type.specialize($.ig.ProvideColumnValuesStrategy.prototype.$type))
}, true);

$.ig.util.defType('CalculatedColumn', 'Object', {

		init: function (initNumber, a, b) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.Object.prototype.init.call(this);
						this.__valuesProvider = a;
				this.a = new $.ig.List$1(String, 1, b);
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.Object.prototype.init.call(this);
						this.__valuesProvider = a;
				this.a = new $.ig.List$1(String, 1, b);
		}, 
	__valuesProvider: null, 
	a: null
, 
	basedOn: function () {
			return this.a;
	}

, 
	getEnumerator: function () {
		return this.__valuesProvider.getEnumerator();
	}
,
	$type: new $.ig.Type('CalculatedColumn', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number)])
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

























$.ig.util.defType('SortedListView$1', 'Object', {
	$t: null, 
	a: null, 
	b: null
, 
		init: function ($t, a, b) {

			this.a = null;
			this.b = null;

			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.a = b;
				this.b = a;
		}
, 
	add: function (a) {
		throw new $.ig.NotImplementedException();
	}

, 
	clear: function () {
		throw new $.ig.NotImplementedException();
	}

, 
	contains: function (a) {
		return this.b.contains(a);
	}

, 
	indexOf: function (a) {
		return this.a.indexOf(this.b.indexOf(a));
	}

, 
	insert: function (a, b) {
		throw new $.ig.NotImplementedException();
	}

, 
	c: function () {
			return true;
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
	removeAt: function (a) {
		throw new $.ig.NotImplementedException();
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException();
			return a;
		} else {
			return this.b.item(this.a.item(b));
		}
	}

, 
	count: function () {
			return this.b.count();
	}

, 
	d: function () {
			throw new $.ig.NotImplementedException();
	}

, 
	e: function () {
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
							this.$a = 0;
							this.$state = 5;
							break;
						case 2:
							this.$current =  this.$this.item(this.$a);
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							this.$a++;
							this.$state = 5;
							break;
						case 5:
							if (this.$a < this.$this.count()) {
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
		return new $.ig.AbstractEnumerator($iter());
	}

, 
	copyTo: function (a, b) {
		throw new $.ig.NotImplementedException();
	}
,
	$type: new $.ig.Type('SortedListView$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0)])
}, true);
$.ig.PriceDisplayType.prototype.candlestick = 0;
$.ig.PriceDisplayType.prototype.oHLC = 1;
$.ig.TimeAxisDisplayType.prototype.continuous = 0;
$.ig.TimeAxisDisplayType.prototype.discrete = 1;
$.ig.IndicatorDisplayType.prototype.line = 0;
$.ig.IndicatorDisplayType.prototype.area = 1;
$.ig.IndicatorDisplayType.prototype.column = 2;
$.ig.CategoryDateTimeXAxis.prototype.hc = "DisplayType";
$.ig.CategoryDateTimeXAxis.prototype.hd = "MinimumValue";
$.ig.CategoryDateTimeXAxis.prototype.he = "MaximumValue";
$.ig.CategoryDateTimeXAxis.prototype.hf = "Interval";
$.ig.CategoryDateTimeXAxis.prototype.hg = "ActualMinimumValue";
$.ig.CategoryDateTimeXAxis.prototype.hh = "ActualMaximumValue";
$.ig.CategoryDateTimeXAxis.prototype.hi = "DateTimeMemberPath";
$.ig.CategoryDateTimeXAxis.prototype.hj = "DateTimeColumn";
$.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hc, $.ig.TimeAxisDisplayType.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TimeAxisDisplayType.prototype.continuous, function (a, b) {
	($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, a)).ez($.ig.CategoryDateTimeXAxis.prototype.hc, b.f(), b.e());
}));
$.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hd, $.ig.Date.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, a)).ez($.ig.CategoryDateTimeXAxis.prototype.hd, b.f(), b.e());
}));
$.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.he, $.ig.Date.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, a)).ez($.ig.CategoryDateTimeXAxis.prototype.he, b.f(), b.e());
}));
$.ig.CategoryDateTimeXAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hf, $.ig.Number.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, a)).ez($.ig.CategoryDateTimeXAxis.prototype.hf, b.f(), b.e());
}));
$.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hi, String, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, a)).ez($.ig.CategoryDateTimeXAxis.prototype.hi, b.f(), b.e());
}));
$.ig.CategoryXAxis.prototype.hc = "Interval";
$.ig.CategoryXAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryXAxis.prototype.hc, Number, $.ig.CategoryXAxis.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.CategoryXAxis.prototype.$type, a)).ez($.ig.CategoryXAxis.prototype.hc, b.f(), b.e());
	($.ig.util.cast($.ig.CategoryXAxis.prototype.$type, a)).es(false);
}));
$.ig.TrendLineManagerBase$1.prototype.a = "TrendLineDashArray";
$.ig.TrendLineManagerBase$1.prototype.b = "TrendLineType";
$.ig.TrendLineManagerBase$1.prototype.c = "TrendLinePeriod";
$.ig.TrendLineManagerBase$1.prototype.d = "TrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.e = "ActualTrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.f = "TrendLineThickness";
$.ig.TrendLineManagerBase$1.prototype.g = "TrendLineDashCap";
$.ig.TrendLineManagerBase$1.prototype.h = "TrendLineZIndex";
$.ig.FinancialSeries.prototype.hp = "NegativeBrush";
$.ig.FinancialSeries.prototype.hq = "XAxis";
$.ig.FinancialSeries.prototype.hr = "YAxis";
$.ig.FinancialSeries.prototype.hs = "OpenMemberPath";
$.ig.FinancialSeries.prototype.ht = "OpenColumn";
$.ig.FinancialSeries.prototype.hu = "HighMemberPath";
$.ig.FinancialSeries.prototype.hv = "HighColumn";
$.ig.FinancialSeries.prototype.hw = "LowMemberPath";
$.ig.FinancialSeries.prototype.hx = "LowColumn";
$.ig.FinancialSeries.prototype.hy = "CloseMemberPath";
$.ig.FinancialSeries.prototype.hz = "CloseColumn";
$.ig.FinancialSeries.prototype.h0 = "VolumeMemberPath";
$.ig.FinancialSeries.prototype.h1 = "VolumeColumn";
$.ig.FinancialSeries.prototype.negativeBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hp, $.ig.Brush.prototype.$type, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialSeries.prototype.$type, a)).ej($.ig.FinancialSeries.prototype.hp, b.f(), b.e());
}));
$.ig.FinancialSeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hq, $.ig.CategoryAxisBase.prototype.$type, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialSeries.prototype.$type, a)).ej($.ig.FinancialSeries.prototype.hq, b.f(), b.e());
}));
$.ig.FinancialSeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hr, $.ig.NumericYAxis.prototype.$type, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialSeries.prototype.$type, a)).ej($.ig.FinancialSeries.prototype.hr, b.f(), b.e());
}));
$.ig.FinancialSeries.prototype.openMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hs, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialSeries.prototype.$type, a)).ej($.ig.FinancialSeries.prototype.hs, b.f(), b.e());
}));
$.ig.FinancialSeries.prototype.highMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hu, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialSeries.prototype.$type, a)).ej($.ig.FinancialSeries.prototype.hu, b.f(), b.e());
}));
$.ig.FinancialSeries.prototype.lowMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hw, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialSeries.prototype.$type, a)).ej($.ig.FinancialSeries.prototype.hw, b.f(), b.e());
}));
$.ig.FinancialSeries.prototype.closeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hy, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialSeries.prototype.$type, a)).ej($.ig.FinancialSeries.prototype.hy, b.f(), b.e());
}));
$.ig.FinancialSeries.prototype.volumeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.h0, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialSeries.prototype.$type, a)).ej($.ig.FinancialSeries.prototype.h0, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.kd = "DisplayType";
$.ig.FinancialIndicator.prototype.ke = "IgnoreFirst";
$.ig.FinancialIndicator.prototype.displayTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.kd, $.ig.IndicatorDisplayType.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.IndicatorDisplayType.prototype.line, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.kd, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.ignoreFirstProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.ke, $.ig.Number.prototype.$type, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.ke, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.b4, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b6, $.ig.Brush.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.b6, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b7, $.ig.Brush.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.b7, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b8, Number, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.b8, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.b9, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.b3, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b5, $.ig.Number.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.b5, b.f(), b.e());
}));
$.ig.FinancialIndicator.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.ca, $.ig.Number.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (a, b) {
	($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, a)).ej($.ig.FinancialIndicator.prototype.ca, b.f(), b.e());
}));
$.ig.StrategyBasedIndicator.prototype.ll = "Period";
$.ig.StrategyBasedIndicator.prototype.lm = "LongPeriod";
$.ig.StrategyBasedIndicator.prototype.ln = "ShortPeriod";
$.ig.StrategyBasedIndicator.prototype.lo = "Multiplier";
$.ig.StrategyBasedIndicator.prototype.lp = new $.ig.List$1(String, 0);
$.ig.AbsoluteVolumeOscillatorIndicator.prototype.shortPeriodProperty = $.ig.AbsoluteVolumeOscillatorIndicator.prototype.l5(10, $.ig.AbsoluteVolumeOscillatorIndicator.prototype.$type);
$.ig.AbsoluteVolumeOscillatorIndicator.prototype.longPeriodProperty = $.ig.AbsoluteVolumeOscillatorIndicator.prototype.l4(30, $.ig.AbsoluteVolumeOscillatorIndicator.prototype.$type);
$.ig.AverageDirectionalIndexIndicator.prototype.periodProperty = $.ig.AverageDirectionalIndexIndicator.prototype.l3(14, $.ig.AverageDirectionalIndexIndicator.prototype.$type);
$.ig.AverageTrueRangeIndicator.prototype.periodProperty = $.ig.AverageTrueRangeIndicator.prototype.l3(14, $.ig.AverageTrueRangeIndicator.prototype.$type);
$.ig.FinancialOverlay.prototype.kd = "IgnoreFirst";
$.ig.FinancialOverlay.prototype.ignoreFirstProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialOverlay.prototype.kd, $.ig.Number.prototype.$type, $.ig.FinancialOverlay.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.FinancialOverlay.prototype.$type, a)).ej($.ig.FinancialOverlay.prototype.kd, b.f(), b.e());
}));
$.ig.BollingerBandsOverlay.prototype.kl = "Period";
$.ig.BollingerBandsOverlay.prototype.km = "Multiplier";
$.ig.BollingerBandsOverlay.prototype.periodProperty = $.ig.DependencyProperty.prototype.l($.ig.BollingerBandsOverlay.prototype.kl, $.ig.Number.prototype.$type, $.ig.BollingerBandsOverlay.prototype.$type, new $.ig.PropertyMetadata(1, 14, function (a, b) {
	($.ig.util.cast($.ig.BollingerBandsOverlay.prototype.$type, a)).ej($.ig.BollingerBandsOverlay.prototype.kl, b.f(), b.e());
}));
$.ig.BollingerBandsOverlay.prototype.multiplierProperty = $.ig.DependencyProperty.prototype.l($.ig.BollingerBandsOverlay.prototype.km, Number, $.ig.BollingerBandsOverlay.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.BollingerBandsOverlay.prototype.$type, a)).ej($.ig.BollingerBandsOverlay.prototype.km, b.f(), b.e());
}));
$.ig.BollingerBandWidthIndicator.prototype.periodProperty = $.ig.BollingerBandWidthIndicator.prototype.l3(20, $.ig.BollingerBandWidthIndicator.prototype.$type);
$.ig.BollingerBandWidthIndicator.prototype.multiplierProperty = $.ig.BollingerBandWidthIndicator.prototype.ma(2, $.ig.BollingerBandWidthIndicator.prototype.$type);
$.ig.ChaikinOscillatorIndicator.prototype.shortPeriodProperty = $.ig.ChaikinOscillatorIndicator.prototype.l5(3, $.ig.ChaikinOscillatorIndicator.prototype.$type);
$.ig.ChaikinOscillatorIndicator.prototype.longPeriodProperty = $.ig.ChaikinOscillatorIndicator.prototype.l4(10, $.ig.ChaikinOscillatorIndicator.prototype.$type);
$.ig.ChaikinVolatilityIndicator.prototype.periodProperty = $.ig.ChaikinVolatilityIndicator.prototype.l3(10, $.ig.ChaikinVolatilityIndicator.prototype.$type);
$.ig.CommodityChannelIndexIndicator.prototype.periodProperty = $.ig.CommodityChannelIndexIndicator.prototype.l3(20, $.ig.CommodityChannelIndexIndicator.prototype.$type);
$.ig.DetrendedPriceOscillatorIndicator.prototype.periodProperty = $.ig.DetrendedPriceOscillatorIndicator.prototype.l3(20, $.ig.DetrendedPriceOscillatorIndicator.prototype.$type);
$.ig.FastStochasticOscillatorIndicator.prototype.periodProperty = $.ig.FastStochasticOscillatorIndicator.prototype.l3(14, $.ig.FastStochasticOscillatorIndicator.prototype.$type);
$.ig.ForceIndexIndicator.prototype.periodProperty = $.ig.ForceIndexIndicator.prototype.l3(0, $.ig.ForceIndexIndicator.prototype.$type);
$.ig.FullStochasticOscillatorIndicator.prototype.periodProperty = $.ig.FullStochasticOscillatorIndicator.prototype.l3(14, $.ig.FullStochasticOscillatorIndicator.prototype.$type);
$.ig.FullStochasticOscillatorIndicator.prototype.smoothingPeriodProperty = $.ig.FullStochasticOscillatorIndicator.prototype.l2(3, $.ig.FullStochasticOscillatorIndicator.prototype.$type, "SmoothingPeriod");
$.ig.FullStochasticOscillatorIndicator.prototype.triggerPeriodProperty = $.ig.FullStochasticOscillatorIndicator.prototype.l2(3, $.ig.FullStochasticOscillatorIndicator.prototype.$type, "TriggerPeriod");
$.ig.MoneyFlowIndexIndicator.prototype.periodProperty = $.ig.MoneyFlowIndexIndicator.prototype.l3(14, $.ig.MoneyFlowIndexIndicator.prototype.$type);
$.ig.MovingAverageConvergenceDivergenceIndicator.prototype.mc = "SignalPeriod";
$.ig.MovingAverageConvergenceDivergenceIndicator.prototype.shortPeriodProperty = $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.l5(10, $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.$type);
$.ig.MovingAverageConvergenceDivergenceIndicator.prototype.longPeriodProperty = $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.l4(30, $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.$type);
$.ig.MovingAverageConvergenceDivergenceIndicator.prototype.signalPeriodProperty = $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.l2(9, $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.$type, $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.mc);
$.ig.PercentagePriceOscillatorIndicator.prototype.shortPeriodProperty = $.ig.PercentagePriceOscillatorIndicator.prototype.l5(10, $.ig.PercentagePriceOscillatorIndicator.prototype.$type);
$.ig.PercentagePriceOscillatorIndicator.prototype.longPeriodProperty = $.ig.PercentagePriceOscillatorIndicator.prototype.l4(30, $.ig.PercentagePriceOscillatorIndicator.prototype.$type);
$.ig.PercentageVolumeOscillatorIndicator.prototype.shortPeriodProperty = $.ig.PercentageVolumeOscillatorIndicator.prototype.l5(10, $.ig.PercentageVolumeOscillatorIndicator.prototype.$type);
$.ig.PercentageVolumeOscillatorIndicator.prototype.longPeriodProperty = $.ig.PercentageVolumeOscillatorIndicator.prototype.l4(30, $.ig.PercentageVolumeOscillatorIndicator.prototype.$type);
$.ig.PriceChannelOverlay.prototype.kl = "Period";
$.ig.PriceChannelOverlay.prototype.periodProperty = $.ig.DependencyProperty.prototype.l($.ig.PriceChannelOverlay.prototype.kl, $.ig.Number.prototype.$type, $.ig.PriceChannelOverlay.prototype.$type, new $.ig.PropertyMetadata(1, 14, function (a, b) {
	($.ig.util.cast($.ig.PriceChannelOverlay.prototype.$type, a)).ej($.ig.PriceChannelOverlay.prototype.kl, b.f(), b.e());
}));
$.ig.RateOfChangeAndMomentumIndicator.prototype.periodProperty = $.ig.RateOfChangeAndMomentumIndicator.prototype.l3(14, $.ig.RateOfChangeAndMomentumIndicator.prototype.$type);
$.ig.RelativeStrengthIndexIndicator.prototype.periodProperty = $.ig.RelativeStrengthIndexIndicator.prototype.l3(14, $.ig.RelativeStrengthIndexIndicator.prototype.$type);
$.ig.SlowStochasticOscillatorIndicator.prototype.periodProperty = $.ig.SlowStochasticOscillatorIndicator.prototype.l3(14, $.ig.SlowStochasticOscillatorIndicator.prototype.$type);
$.ig.StandardDeviationIndicator.prototype.periodProperty = $.ig.StandardDeviationIndicator.prototype.l3(20, $.ig.StandardDeviationIndicator.prototype.$type);
$.ig.StochRSIIndicator.prototype.periodProperty = $.ig.StochRSIIndicator.prototype.l3(14, $.ig.StochRSIIndicator.prototype.$type);
$.ig.TRIXIndicator.prototype.periodProperty = $.ig.TRIXIndicator.prototype.l3(15, $.ig.TRIXIndicator.prototype.$type);
$.ig.WilliamsPercentRIndicator.prototype.periodProperty = $.ig.WilliamsPercentRIndicator.prototype.l3(14, $.ig.WilliamsPercentRIndicator.prototype.$type);
$.ig.FinancialPriceSeries.prototype.kd = "DisplayType";
$.ig.FinancialPriceSeries.prototype.ke = 3;
$.ig.FinancialPriceSeries.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.b4, b.f(), b.e());
}));
$.ig.FinancialPriceSeries.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b6, $.ig.Brush.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.b6, b.f(), b.e());
}));
$.ig.FinancialPriceSeries.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b7, $.ig.Brush.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.b7, b.f(), b.e());
}));
$.ig.FinancialPriceSeries.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b8, Number, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.b8, b.f(), b.e());
}));
$.ig.FinancialPriceSeries.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.b9, b.f(), b.e());
}));
$.ig.FinancialPriceSeries.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.b3, b.f(), b.e());
}));
$.ig.FinancialPriceSeries.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b5, $.ig.Number.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.b5, b.f(), b.e());
}));
$.ig.FinancialPriceSeries.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.ca, $.ig.Number.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.ca, b.f(), b.e());
}));
$.ig.FinancialPriceSeries.prototype.displayTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.kd, $.ig.PriceDisplayType.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.PriceDisplayType.prototype.candlestick, function (a, b) {
	($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, a)).ej($.ig.FinancialPriceSeries.prototype.kd, b.f(), b.e());
}));
$.ig.Legend.prototype.cc = "Orientation";

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['flattenTo', 'getBounds2', 'clipTo']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['asQueryable']]]);
$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);

