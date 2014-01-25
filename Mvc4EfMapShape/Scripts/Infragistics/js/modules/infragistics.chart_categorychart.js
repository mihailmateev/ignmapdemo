/*!
* Infragistics.Web.ClientUI infragistics.chart_categorychart.js 12.2.20122.1021
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



$.ig.util.defType('SplineType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('SplineType', $.ig.Object.prototype.$type)
}, true);











$.ig.util.defType('TimeAxisDisplayType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('TimeAxisDisplayType', $.ig.Object.prototype.$type)
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















































$.ig.util.defType('BarFramePreparer', 'CategoryFramePreparer', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.BarFramePreparer.prototype.init1.call(this, 1, a, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, a), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, a), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, a), $.ig.util.cast($.ig.IBucketizer.prototype.$type, a));
		}
, 
		init1: function (initNumber, a, b, c, d, e) {


			$.ig.CategoryFramePreparer.prototype.init1.call(this, 1, a, b, c, d, e);
						this.am(new $.ig.DefaultCategoryTrendlineHost());
				if ($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, a) !== null) {
					this.am($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, a));
				}
				this.an(new $.ig.DefaultSingleValueProvider());
				if ($.ig.util.cast($.ig.IHasSingleValueCategory.prototype.$type, a) !== null) {
					this.an($.ig.util.cast($.ig.IHasSingleValueCategory.prototype.$type, a));
				}
		}
, 
	v: function (a, b, c, d, e) {
		var f = b[1];
		var g = b[0];
		var h = new $.ig.Rect(0, f - 5, g - 5, 11, 11);
		if (!isNaN(f) && !isNaN(g) && !Number.isInfinity(f) && !Number.isInfinity(g) && c.tryAdd(h)) {
			a.f.add({__x: f, __y: g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			this.e().updateMarkerTemplate(e, d);
			return true;
		}
		return false;
	}

, 
	ai: function (a, b, c) {
		var $self = this;
		if (this.am().trendLineType() == $.ig.TrendLineType.prototype.none || this.am().trendlinePreparer() == null || this.am().trendLinePeriod() < 1) {
			return;
		}
		var d = new $.ig.ScalerParams(a.p(), a.q(), a.r().isInverted());
		var e = new $.ig.ScalerParams(a.p(), a.q(), a.t().isInverted());
		var f = (b).t();
		if (a.s() != null && a.s().sortedIndices() != null) {
			f = new $.ig.SafeSortedReadOnlyDoubleCollection(f, a.s().sortedIndices());
		}
		var g = (function () { var $ret = new $.ig.TrendResolutionParams();
$ret.j(a.n());
$ret.h(a.l());
$ret.i(a.m());
$ret.n(c);
$ret.m(a.o());
$ret.k(a.q()); return $ret;}());
		if (this.am().trendLineType() != $.ig.TrendLineType.prototype.none) {
			this.am().trendlinePreparer().prepareLine(a.u().g, this.am().trendLineType(), f, this.am().trendLinePeriod(), function (h) { return a.t().getScaledValue(h, e)			}, function (i) { return a.r().getScaledValue(i, d)			}, g);
		}
	}
,
	$type: new $.ig.Type('BarFramePreparer', $.ig.CategoryFramePreparer.prototype.$type)
}, true);

$.ig.util.defType('BarTrendFitCalculator', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c, d, e, f, g, h, i, j, k) {
		if (d == null) {
			switch (b) {
				case $.ig.TrendLineType.prototype.linearFit:
					d = $.ig.LeastSquaresFit.prototype.j(e, g, f);
					break;
				case $.ig.TrendLineType.prototype.quadraticFit:
					d = $.ig.LeastSquaresFit.prototype.v(e, g, f);
					break;
				case $.ig.TrendLineType.prototype.cubicFit:
					d = $.ig.LeastSquaresFit.prototype.y(e, g, f);
					break;
				case $.ig.TrendLineType.prototype.quarticFit:
					d = $.ig.LeastSquaresFit.prototype.ab(e, g, f);
					break;
				case $.ig.TrendLineType.prototype.quinticFit:
					d = $.ig.LeastSquaresFit.prototype.ae(e, g, f);
					break;
				case $.ig.TrendLineType.prototype.exponentialFit:
					d = $.ig.LeastSquaresFit.prototype.p(e, g, f);
					break;
				case $.ig.TrendLineType.prototype.logarithmicFit:
					d = $.ig.LeastSquaresFit.prototype.m(e, g, f);
					break;
				case $.ig.TrendLineType.prototype.powerLawFit:
					d = $.ig.LeastSquaresFit.prototype.s(e, g, f);
					break;
				default:
					throw new $.ig.NotImplementedException();
			}
		}
		if (d == null) {
			return null;
		}
		for (var l = 0; l < c.k().height(); l += 2) {
			var m = l / (c.k().height() - 1);
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
			o = h(o);
			n = i(n);
			if (!isNaN(o) && !Number.isInfinity(o)) {
				a.add({__x: o, __y: n + c.n(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
		}
		return d;
	}
,
	$type: new $.ig.Type('BarTrendFitCalculator', $.ig.Object.prototype.$type)
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

$.ig.util.defType('BarTrendLineManager', 'CategoryTrendLineManager', {
	init: function () {

		$.ig.CategoryTrendLineManager.prototype.init.call(this);

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
			this.m($.ig.BarTrendFitCalculator.prototype.a(j, b, g, this.m(), c.count(), function (k) { return c.item(k)			}, function (l) { return l + 1			}, e, f, h, i));
		}
		if (this.v(b)) {
			this.m(null);
			$.ig.TrendAverageCalculator.prototype.b(b, this.l(), c, d);
			for (var m = g.h(); m <= g.i(); m += 1) {
				var n = m * g.j();
				if (n >= 0 && n < this.l().count()) {
					var o = e(this.l().__inner[n]);
					var p = f(n);
					j.add({__x: o, __y: p + g.n(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				}
			}
		}
		this.x(j, g, a);
	}
,
	$type: new $.ig.Type('BarTrendLineManager', $.ig.CategoryTrendLineManager.prototype.$type)
}, true);
























$.ig.util.defType('AnchoredCategorySeries', 'CategorySeries', {

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
	ed: function () {
		var a = new $.ig.AnchoredCategorySeriesView(this);
		return a;
	}

, 
	ea: function (a) {
		$.ig.CategorySeries.prototype.ea.call(this, a);
		this.jt(a);
	}

, 
		init: function () {


			$.ig.CategorySeries.prototype.init.call(this);
						this.ju(new $.ig.CategoryLineRasterizer());
				this.ix(new $.ig.CategoryFramePreparer(1, this, this.iy(), this, this, this.iy().c9()));
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
	valueMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.valueMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.valueMemberPathProperty);
		}
	}

, 
	valueColumn: function (a) {
		if (arguments.length === 1) {
			if (this.jg != a) {
				var b = this.jg;
				this.jg = a;
				this.ej($.ig.AnchoredCategorySeries.prototype.jf, b, this.jg);
			}
			return a;
		} else {
			return this.jg;
		}
	}
, 
	jg: null
, 
	trendLineType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.trendLineTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.trendLineTypeProperty);
		}
	}

, 
	trendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.trendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.trendLineBrushProperty);
		}
	}

, 
	actualTrendLineBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.actualTrendLineBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.actualTrendLineBrushProperty);
		}
	}

, 
	trendLineThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.trendLineThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.trendLineThicknessProperty);
		}
	}

, 
	trendLineDashCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.trendLineDashCapProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.trendLineDashCapProperty);
		}
	}

, 
	trendLineDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.trendLineDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.trendLineDashArrayProperty);
		}
	}

, 
	trendLinePeriod: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.trendLinePeriodProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.trendLinePeriodProperty);
		}
	}

, 
	trendLineZIndex: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AnchoredCategorySeries.prototype.trendLineZIndexProperty, a);
			return a;
		} else {
			return this.b($.ig.AnchoredCategorySeries.prototype.trendLineZIndexProperty);
		}
	}

, 
	scrollIntoView: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		var d = new $.ig.Rect(0, 0, 0, 1, 1);
		var e = !b.isEmpty() && !c.isEmpty() && this.dx() != null ? this.dx().x(a) : -1;
		var f = this.ja();
		var g = new $.ig.ScalerParams(d, d, f.isInverted());
		var h = f != null ? f.getScaledValue(e, g) : NaN;
		var i = f != null ? this.ix().x($.ig.util.cast($.ig.ICategoryScaler.prototype.$type, f), b, c) : 0;
		h += i;
		var j = this.jb();
		var k = j != null && this.valueColumn() != null && e < this.valueColumn().count() ? j.getScaledValue(this.valueColumn().item(e), g) : NaN;
		if (!isNaN(h)) {
			if (h < b.left() + 0.1 * b.width()) {
				h = h + 0.4 * b.width();
				b.x(h - 0.5 * b.width());
			}
			if (h > b.right() - 0.1 * b.width()) {
				h = h - 0.4 * b.width();
				b.x(h - 0.5 * b.width());
			}
		}
		if (!isNaN(k)) {
			if (k < b.top() + 0.1 * b.height()) {
				k = k + 0.4 * b.height();
				b.y(k - 0.5 * b.height());
			}
			if (k > b.bottom() - 0.1 * b.height()) {
				k = k - 0.4 * b.height();
				b.y(k - 0.5 * b.height());
			}
		}
		if (this.syncLink() != null) {
			this.syncLink().bp(this.seriesViewer(), b);
		}
		return e >= 0;
	}

, 
	e6: function (a, b, c, d) {
		$.ig.CategorySeries.prototype.e6.call(this, a, b, c, d);
		var e = $.ig.util.cast($.ig.NumericAxisBase.prototype.$type, this.jb());
		if (this.jt().dm().ae(a, b, c, d, this.trendLineDashArray())) {
			this.renderSeries(false);
			this.e5();
		}
		switch (b) {
			case $.ig.Series.prototype.be:
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.valueColumn());
					this.valueColumn(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					this.valueColumn(this.gs(this.valueMemberPath()));
				}
				if (e != null && !e.updateRange()) {
					this.jt().c9().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.AnchoredCategorySeries.prototype.je:
				if (this.dx() != null) {
					this.dx().ac(this.valueColumn());
					this.valueColumn(this.gs(this.valueMemberPath()));
				}
				this.jv(this.valueMemberPath());
				break;
			case $.ig.AnchoredCategorySeries.prototype.jf:
				this.jt().dm().ac();
				if (e != null && !e.updateRange()) {
					this.jt().c9().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.AnchoredCategorySeries.prototype.b6:
				this.fj();
				break;
			case $.ig.AnchoredCategorySeries.prototype.iq:
				this.renderSeries(false);
				break;
			case $.ig.AnchoredCategorySeries.prototype.b4:
				this.e5();
				break;
		}
	}

, 
	em: function (a) {
		if (this.valueColumn() == null || this.valueColumn().count() == 0) {
			return null;
		}
		if (a == this.ja()) {
			return new $.ig.AxisRange(0, this.valueColumn().count() - 1);
		}
		if (a == this.jb()) {
			return new $.ig.AxisRange(this.valueColumn().minimum(), this.valueColumn().maximum());
		}
		return null;
	}

, 
	fc: function (a, b, c, d) {
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.reset:
			case $.ig.FastItemsSourceEventAction.prototype.insert:
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				this.jt().c9().q(this.resolution());
				break;
		}
		this.jt().dm().ad(a, b, c, d);
	}

, 
	j2: function (a) {
		var b = 0;
		var c = a.ac();
		var d = a.ab();
		var e = $.ig.util.cast($.ig.NumericYAxis.prototype.$type, this.jb());
		if (!c.isEmpty() && !d.isEmpty() && e != null) {
			var f = new $.ig.ScalerParams(c, d, e.isInverted());
			b = e.getScaledValue(e.referenceValue(), f);
		}
		return b;
	}

, 
	j3: function (a, b, c) {
		var d = this.j2(c);
		if (a.count() > 0) {
			var e = d;
			a.add({__x: a.last$1($.ig.Point.prototype.$type).__x, __y: e, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			a.add({__x: a.first$1($.ig.Point.prototype.$type).__x, __y: e, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
	}

, 
	j4: function (a, b, c, d) {
		var e = null;
		if (b > -1 && !d.isEmpty() && !c.isEmpty()) {
			var f = a.__inner[0][0] < c.left() - 2000 ? c.left() - 10 : NaN;
			var g = c.bottom() + 10;
			var h = a.__inner[b][0] > c.right() + 2000 ? c.right() + 10 : NaN;
			var i = c.top() - 10;
			e = new $.ig.Clipper(1, f, g, h, i, false);
		}
		return e;
	}

, 
	es: function (a, b, c) {
		var d = $.ig.CategorySeries.prototype.es.call(this, a, b, c);
		var e = c;
		if (this.valueColumn() == null || this.valueColumn().count() == 0 || e.c9().h() < 1) {
			d = false;
		}
		return d;
	}

, 
	eu: function (a, b) {
		$.ig.CategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.di();
		c.dm().ab();
	}

, 
	i7: function (a, b) {
		$.ig.CategorySeries.prototype.i7.call(this, a, b);
		this.jd(b).m(a, b);
	}

, 
	i6: function (a, b) {
		$.ig.CategorySeries.prototype.i6.call(this, a, b);
		var c = $.ig.util.cast($.ig.AnchoredCategorySeriesView.prototype.$type, b);
		c.dm().t(a.g);
		$.ig.CategoryMarkerManager.prototype.a(this, a.f, b.da(), this.useLightweightMarkers());
		b.c1();
		this.j5(a, b);
	}

, 
	j5: function (a, b) {
	}

, 
	fj: function () {
		$.ig.MarkerSeries.prototype.fj.call(this);
		if (this.index() < 0) {
			return;
		}
		this.jt().ds();
		if (this.trendLineBrush() != null) {
			this.jt().dt();

		} else {
			this.jt().du();
		}
	}

, 
	el: function (a, b) {
		if (a == this.jt().dm().n()) {
			return null;
		}
		return $.ig.Series.prototype.el.call(this, a, b);
	}


, 
	currentCategoryMode: function () {
			return this.preferredCategoryMode($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.ja()));
	}

, 
	scaler: function () {
			return $.ig.util.cast($.ig.ICategoryScaler.prototype.$type, this.ja());
	}

, 
	yScaler: function () {
			return $.ig.util.cast($.ig.IScaler.prototype.$type, this.jb());
	}

, 
	bucketizer: function () {
			return this.jt().c9();
	}

, 
	currentMode2Index: function () {
			return this.i5();
	}

, 
	provideCollisionDetector: function () {
		return new $.ig.CollisionAvoider();
	}

, 
	trendlinePreparer: function () {
			return this.jt().dm();
	}

, 
	_jv: null,
	jv: function (h) {
		if (arguments.length === 1) {
			this._jv = h;
			return h;
		} else {
			return this._jv;
		}
	}

, 
	j8: function (i) {
	}

, 
	j9: function (j) {
	}

, 
	gw: function (k) {
		$.ig.MarkerSeries.prototype.gw.call(this, k);
		var l = new $.ig.PolyLineVisualData(1, "trendLine", this.jt().dm().n());
		l.tags().add("Trend");
		k.shapes().add(l);
	}
,
	$type: new $.ig.Type('AnchoredCategorySeries', $.ig.CategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type, $.ig.IHasSingleValueCategory.prototype.$type, $.ig.IHasCategoryTrendline.prototype.$type])
}, true);

$.ig.util.defType('VerticalAnchoredCategorySeries', 'AnchoredCategorySeries', {
	init: function () {

		$.ig.AnchoredCategorySeries.prototype.init.call(this);

	}
, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.VerticalAnchoredCategorySeries.prototype.xAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.VerticalAnchoredCategorySeries.prototype.xAxisProperty);
		}
	}

, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.VerticalAnchoredCategorySeries.prototype.yAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.VerticalAnchoredCategorySeries.prototype.yAxisProperty);
		}
	}

, 
	ja: function () {
		return this.xAxis();
	}

, 
	jb: function () {
		return this.yAxis();
	}

, 
	j8: function (a) {
		this.xAxis($.ig.util.cast($.ig.NumericXAxis.prototype.$type, a));
	}

, 
	j9: function (a) {
		this.yAxis($.ig.util.cast($.ig.CategoryYAxis.prototype.$type, a));
	}

, 
	jc: function () {
		return this.xAxis() != null && this.xAxis().updateRange();
	}

, 
	e6: function (a, b, c, d) {
		$.ig.AnchoredCategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.VerticalAnchoredCategorySeries.prototype.kj:
				this.gn($.ig.util.cast($.ig.Axis.prototype.$type, c));
				this.go($.ig.util.cast($.ig.Axis.prototype.$type, d));
				this.iy().c9().q(this.resolution());
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.VerticalAnchoredCategorySeries.prototype.kk:
				this.gn($.ig.util.cast($.ig.Axis.prototype.$type, c));
				this.go($.ig.util.cast($.ig.Axis.prototype.$type, d));
				this.iy().c9().q(this.resolution());
				this.jc();
				this.renderSeries(false);
				this.e5();
				break;
		}
	}
,
	$type: new $.ig.Type('VerticalAnchoredCategorySeries', $.ig.AnchoredCategorySeries.prototype.$type)
}, true);


$.ig.util.defType('BarSeries', 'VerticalAnchoredCategorySeries', {

	ed: function () {
		return new $.ig.BarSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
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


			$.ig.VerticalAnchoredCategorySeries.prototype.init.call(this);
						this.a3($.ig.BarSeries.prototype.$type);
				this.ix(new $.ig.BarFramePreparer(1, this, this.ks(), this, this, this.ks().c9()));
		}
, 
	jd: function (a) {
		var b = $.ig.util.cast($.ig.CategorySeriesView.prototype.$type, a);
		if (b != null && b == this.dt()) {
			return new $.ig.BarFramePreparer(1, this, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, b), this.seriesViewer().fb().aj(), this, b.c9());

		} else {
			return this.ix();
		}
	}

, 
	onApplyTemplate: function () {
		$.ig.CategorySeries.prototype.onApplyTemplate.call(this);
	}

, 
	radiusX: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BarSeries.prototype.radiusXProperty, a);
			return a;
		} else {
			return this.b($.ig.BarSeries.prototype.radiusXProperty);
		}
	}

, 
	radiusY: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BarSeries.prototype.radiusYProperty, a);
			return a;
		} else {
			return this.b($.ig.BarSeries.prototype.radiusYProperty);
		}
	}

, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode2;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = $.ig.util.cast($.ig.BarSeriesView.prototype.$type, b);
		if (a && c != null && c.d2() != null) {
			c.d2().g(0);
		}
	}

, 
	i5: function () {
		var a = 0;
		var c = this.seriesViewer().series().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			if (b == this) {
				return a;
			}
			var d = $.ig.util.cast($.ig.IBarSeries.prototype.$type, b);
			if (d != null && d.yAxis() == this.yAxis() && d.getPreferredCategoryMode() == $.ig.CategoryMode.prototype.mode2) {
				a++;
			}
		}
		$.ig.Debug.prototype.a(false, "CategorySeries.GetMode2Index failed to find series");
		return -1;
	}

, 
	j2: function (a) {
		var b = 0;
		var c = a.ac();
		var d = a.ab();
		var e = new $.ig.ScalerParams(c, d, this.xAxis().isInverted());
		if (!c.isEmpty() && !d.isEmpty() && this.xAxis() != null) {
			b = this.xAxis().getScaledValue(this.xAxis().referenceValue(), e);
		}
		return b;
	}

, 
	em: function (a) {
		if (this.valueColumn() == null || this.valueColumn().count() == 0) {
			return null;
		}
		if (a == this.yAxis()) {
			return new $.ig.AxisRange(0, this.valueColumn().count() - 1);
		}
		if (a == this.xAxis()) {
			return new $.ig.AxisRange(this.valueColumn().minimum(), this.valueColumn().maximum());
		}
		return null;
	}

, 
	scrollIntoView: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		var d = new $.ig.Rect(0, 0, 0, 1, 1);
		var e = !b.isEmpty() && !c.isEmpty() && this.dx() != null ? this.dx().item1(a) : -1;
		var f = new $.ig.ScalerParams(d, d, this.xAxis().isInverted());
		var g = new $.ig.ScalerParams(d, d, this.yAxis().isInverted());
		var h = this.yAxis() != null ? this.yAxis().getScaledValue(e, g) : NaN;
		var i = this.yAxis() != null ? this.ix().x(this.yAxis(), d, d) : 0;
		h += i;
		var j = this.xAxis() != null && this.valueColumn() != null && e < this.valueColumn().count() ? this.xAxis().getScaledValue(this.valueColumn().item(e), f) : NaN;
		if (!isNaN(j)) {
			if (j < b.left() + 0.1 * b.width()) {
				j = j + 0.4 * b.width();
				b.x(j - 0.5 * b.width());
			}
			if (j > b.right() - 0.1 * b.width()) {
				j = j - 0.4 * b.width();
				b.x(j - 0.5 * b.width());
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
		return e >= 0;
	}

, 
	i6: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var c = a.d;
		if (!b.cc()) {
			return;
		}
		var d = b.ac();
		var e = b.ab();
		var f = new $.ig.ScalerParams(d, e, this.xAxis().isInverted());
		var g = this.xAxis();
		var h = g.getScaledValue(g.referenceValue(), f);
		var i = this.yAxis().gz(d, e);
		var j = $.ig.util.cast($.ig.BarSeriesView.prototype.$type, b);
		if (isNaN(i) || Number.isInfinity(i) || isNaN(h)) {
			j.d2().g(0);
			return;
		}
		for (var k = 0; k < c.count(); ++k) {
			var l = c.__inner[k][0] - 0.5 * i;
			var m = c.__inner[k][1];
			var n = h;
			n = Math.max(n, -100);
			m = Math.min(m, e.width() + 100);
			var o = j.d2().item(k);
			o.w(i);
			o.v(Math.abs(m - n));
			j.ee(o, Math.min(m, n), l);
		}
		j.d2().g(c.count());
	}

, 
	fc: function (a, b, c, d) {
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.reset:
			case $.ig.FastItemsSourceEventAction.prototype.insert:
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				this.jt().c9().q(this.resolution());
				break;
		}
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				if (this.xAxis() != null && !this.xAxis().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.insert:
				if (this.xAxis() != null && !this.xAxis().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				if (this.xAxis() != null && !this.xAxis().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.replace:
				if (this.valueMemberPath() != null && this.jt().c9().h() > 0) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.change:
				if (d == this.valueMemberPath()) {
					if (this.xAxis() != null && !this.xAxis().updateRange()) {
						this.renderSeries(true);
					}
				}
				break;
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.VerticalAnchoredCategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.BarSeries.prototype.kj:
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				this.jt().c9().q(this.resolution());
				if (this.xAxis() != null && this.xAxis().updateRange()) {
					this.renderSeries(false);
				}
				break;
			case $.ig.BarSeries.prototype.kk:
				if (c != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, c)).deregisterSeries(this);
				}
				if (d != null) {
					($.ig.util.cast($.ig.Axis.prototype.$type, d)).registerSeries(this);
				}
				this.jt().dm($.ig.CategoryTrendLineManagerBase.prototype.af(this.jt().dm(), this.yAxis(), this.rootCanvas(), this));
				this.jt().c9().q(this.resolution());
				this.renderSeries(false);
				break;
			case $.ig.Series.prototype.be:
				if (this.xAxis() != null && !this.xAxis().updateRange()) {
					this.jt().c9().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.BarSeries.prototype.jf:
				if (this.xAxis() != null && !this.xAxis().updateRange()) {
					this.jt().c9().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.Series.prototype.bc:
				if (c != null && d == null) {
					this.gn(this.xAxis());
					this.gn(this.yAxis());
				}
				if (c == null && d != null) {
					this.go(this.xAxis());
					this.go(this.yAxis());
				}
				this.jt().c9().q(this.resolution());
				this.renderSeries(false);
				break;
		}
	}

, 
	eg: function (a) {
		var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var c = this.view().ab();
		var d = -1;
		if (this.yAxis() != null && !b.isEmpty() && !c.isEmpty()) {
			var e = this.yAxis().gy(c.top(), b, c, this.yAxis().categoryMode());
			var f = this.yAxis().gy(c.bottom(), b, c, this.yAxis().categoryMode());
			var g = (a.__y - b.top()) / b.height();
			var h = e + (g * (f - e));
			if (this.yAxis().categoryMode() != $.ig.CategoryMode.prototype.mode0) {
				h -= 0.5;
			}
			var i = Math.round(h);
			d = i;
		}
		return d;
	}

, 
	eh: function (a) {
		var b = this.eg(a);
		return b >= 0 && this.dx() != null && b < this.dx().g() ? this.dx().item(b) : null;
	}

, 
	getPreferredCategoryMode: function () {
		return this.preferredCategoryMode(this.yAxis());
	}

, 
	currentCategoryMode: function () {
			return this.preferredCategoryMode(this.yAxis());
	}

, 
	scaler: function () {
			return this.yAxis();
	}

, 
	yScaler: function () {
			return this.xAxis();
	}
,
	$type: new $.ig.Type('BarSeries', $.ig.VerticalAnchoredCategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type, $.ig.IBarSeries.prototype.$type])
}, true);



$.ig.util.defType('AnchoredCategorySeriesView', 'CategorySeriesView', {

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
		init: function (a) {


			$.ig.CategorySeriesView.prototype.init.call(this, a);
						this.dl(a);
				this.dm(new $.ig.CategoryTrendLineManager());
		}
, 
	_dm: null,
	dm: function (a) {
		if (arguments.length === 1) {
			this._dm = a;
			return a;
		} else {
			return this._dm;
		}
	}

, 
	ds: function () {
		this.dl().actualTrendLineBrush(null);
	}

, 
	dt: function () {
		this.dl().actualTrendLineBrush(this.dl().trendLineBrush());
	}

, 
	du: function () {
		this.dl().actualTrendLineBrush(this.dl().actualBrush());
	}

, 
	df: function () {
		return new $.ig.AnchoredCategoryBucketCalculator(this);
	}

, 
	dv: function () {
		this.c9().cacheValues();
	}

, 
	dw: function () {
		this.c9().unCacheValues();
	}

, 
	a1: function (a, b) {
		if (a.b()) {
			if (this.dl().trendLineType() != $.ig.TrendLineType.prototype.none && !b) {
				var c = this.dm().n();
				c.a7(this.dl().trendLineThickness());
				c.__stroke = this.dl().actualTrendLineBrush();
				c.a8(this.dl().trendLineDashArray());
				c.a9(this.dl().trendLineDashCap());
				if (this.k) {
					a.e($.ig.GradientDirection.prototype.bottomTop, null);
				}
				a.k(c);
			}
		}
		$.ig.MarkerSeriesView.prototype.a1.call(this, a, b);
	}
,
	$type: new $.ig.Type('AnchoredCategorySeriesView', $.ig.CategorySeriesView.prototype.$type)
}, true);

$.ig.util.defType('BarSeriesView', 'AnchoredCategorySeriesView', {

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

			var $self = this;

			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.d1(a);
				this.d2((function () { var $ret = new $.ig.Pool$1($.ig.Rectangle.prototype.$type);
				$ret.create($self.d8.on($self));
				$ret.activate($self.eb.on($self));
				$ret.disactivate($self.ec.on($self));
				$ret.destroy($self.ed.on($self)); return $ret;}()));
				this.dm(new $.ig.BarTrendLineManager());
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
	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		this.d3(new $.ig.List$1($.ig.Rectangle.prototype.$type, 0));
		if (!this.ad()) {
			this.u().resolution(4);
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}

, 
	d8: function () {
		var a = new $.ig.Rectangle();
		this.d3().add(a);
		a.__visibility = $.ig.Visibility.prototype.collapsed;
		return a;
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
	eb: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	ec: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	ed: function (a) {
		this.d3().remove(a);
	}

, 
	ee: function (a, b, c) {
		var d = false;
		if (a.x() != c) {
			d = true;
			a.x(c);
		}
		if (a.y() != b) {
			d = true;
			a.y(b);
		}
		if (d) {
			this.an();
		}
	}

, 
	df: function () {
		return new $.ig.BarBucketCalculator(this);
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
		c.a7(this.u().thickness());
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			for (var c = 0; c < this.d3().count(); c++) {
				var d = this.d3().__inner[c];
				this.ap(d, c, b);
				if (this.k && !b) {
					var e = d.__fill != null && d.__fill.isGradient() ? new $.ig.Rect(0, d.y(), d.x(), d.v(), d.w()) : null;
					a.e($.ig.GradientDirection.prototype.leftRight, e);
				}
				a.f(d);
			}
		}
	}

, 
	b5: function (a) {
		var $self = this;
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = 0;
		var c = new $.ig.List$1($.ig.Rectangle.prototype.$type, 0);
		var e = this.d2().h().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			c.add(d);
		}
		c.t(function (f, g) {
			if (f.x() > g.x()) {
				return -1;
			} else if (f.x() < g.x()) {
				return 1;

			} else {
				return 0;
			}
		});
		var i = c.getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			var j = new $.ig.RectangleVisualData(1, "column" + b, h);
			j.tags().add("Main");
			a.shapes().add(j);
		}
		b++;
	}
,
	$type: new $.ig.Type('BarSeriesView', $.ig.AnchoredCategorySeriesView.prototype.$type)
}, true);



$.ig.util.defType('AnchoredCategoryBucketCalculator', 'CategoryBucketCalculator', {

		init: function (a) {


			$.ig.CategoryBucketCalculator.prototype.init.call(this, a);
						this.t(a);
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
	getBucket: function (a) {
		var $self = this;
		var b = this.r;
		var c = b.length;
		var d = Math.min(a * this.h(), c - 1);
		var e = Math.min(d + this.h() - 1, c - 1);
		var f = NaN;
		var g = NaN;
		var h = true;
		for (var i = d; i <= e; ++i) {
			var j = b[i];
			if (!h) {
				if (!isNaN(j)) {
					f = f < j ? f : j;
					g = g > j ? g : j;
				}

			} else {
				if (!isNaN(j)) {
					f = j;
					g = j;
					h = false;
				}
			}
		}
		if (!h) {
			return (function () { var $ret = new Array();
			$ret.add((0.5 * (d + e)));
			$ret.add(f);
			$ret.add(g); return $ret;}());
		}
		return (function () { var $ret = new Array();
		$ret.add((0.5 * (d + e)));
		$ret.add(NaN);
		$ret.add(NaN); return $ret;}());
	}
, 
	r: null
, 
	cacheValues: function () {
		this.r = this.t().dl().valueColumn().asArray();
	}

, 
	unCacheValues: function () {
		this.r = null;
	}
,
	$type: new $.ig.Type('AnchoredCategoryBucketCalculator', $.ig.CategoryBucketCalculator.prototype.$type)
}, true);

$.ig.util.defType('BarBucketCalculator', 'CategoryBucketCalculator', {

		init: function (a) {


			$.ig.CategoryBucketCalculator.prototype.init.call(this, a);
						this.t(a);
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
	q: function (a) {
		var b = this.e().ac();
		var c = this.e().ab();
		var d = this.e().c8().dx();
		if (b.isEmpty() || c.isEmpty() || this.t().d1().yAxis() == null || d == null || d.g() == 0) {
			this.h(0);
			return;
		}
		var e = $.ig.util.cast($.ig.BarSeries.prototype.$type, this.e().c8());
		var f = Math.floor(e.yAxis().gy(c.top(), b, c, $.ig.CategoryMode.prototype.mode0));
		var g = Math.ceil(e.yAxis().gy(c.bottom(), b, c, $.ig.CategoryMode.prototype.mode0));
		if (!e.yAxis().isInverted()) {
			g = Math.ceil(e.yAxis().gy(c.top(), b, c, $.ig.CategoryMode.prototype.mode0));
			f = Math.floor(e.yAxis().gy(c.bottom(), b, c, $.ig.CategoryMode.prototype.mode0));
		}
		var h = Math.floor((g - f + 1) * a / c.height());
		this.h(Math.max(1, h));
		this.f(Math.max(0, Math.floor(f / this.h()) - 1));
		this.g(Math.ceil(g / this.h()));
	}

, 
	getBucket: function (a) {
		var $self = this;
		var b = this.r;
		var c = b.length;
		var d = Math.min(a * this.h(), c - 1);
		var e = Math.min(d + this.h() - 1, c - 1);
		var f = NaN;
		var g = NaN;
		for (var h = d; h <= e; ++h) {
			var i = b[h];
			if (!isNaN(f)) {
				if (!isNaN(i)) {
					f = Math.min(f, i);
					g = Math.max(g, i);
				}

			} else {
				f = i;
				g = i;
			}
		}
		if (!isNaN(f)) {
			return (function () { var $ret = new Array();
			$ret.add((0.5 * (d + e)));
			$ret.add(f);
			$ret.add(g); return $ret;}());
		}
		return (function () { var $ret = new Array();
		$ret.add((0.5 * (d + e)));
		$ret.add(NaN);
		$ret.add(NaN); return $ret;}());
	}
, 
	r: null
, 
	cacheValues: function () {
		this.r = this.t().d1().valueColumn().asArray();
	}

, 
	unCacheValues: function () {
		this.r = null;
	}
,
	$type: new $.ig.Type('BarBucketCalculator', $.ig.CategoryBucketCalculator.prototype.$type)
}, true);


$.ig.util.defType('HorizontalAnchoredCategorySeries', 'AnchoredCategorySeries', {
	init: function () {

		$.ig.AnchoredCategorySeries.prototype.init.call(this);

	}
, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HorizontalAnchoredCategorySeries.prototype.xAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.HorizontalAnchoredCategorySeries.prototype.xAxisProperty);
		}
	}

, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HorizontalAnchoredCategorySeries.prototype.yAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.HorizontalAnchoredCategorySeries.prototype.yAxisProperty);
		}
	}

, 
	ja: function () {
		return this.xAxis();
	}

, 
	jb: function () {
		return this.yAxis();
	}

, 
	j8: function (a) {
		this.xAxis($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a));
	}

, 
	j9: function (a) {
		this.yAxis($.ig.util.cast($.ig.NumericYAxis.prototype.$type, a));
	}

, 
	jc: function () {
		return this.yAxis() != null && this.yAxis().updateRange();
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
	kv: function (a) {
		this.kp(a);
	}

, 
	kw: function (a) {
		this.kq(a);
	}

, 
	e6: function (a, b, c, d) {
		switch (b) {
			case $.ig.HorizontalAnchoredCategorySeries.prototype.kj:
				this.jt().dm($.ig.CategoryTrendLineManagerBase.prototype.af(this.jt().dm(), this.xAxis(), this.rootCanvas(), this));
				break;
		}
		$.ig.AnchoredCategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.HorizontalAnchoredCategorySeries.prototype.kj:
				this.gn($.ig.util.cast($.ig.Axis.prototype.$type, c));
				this.go($.ig.util.cast($.ig.Axis.prototype.$type, d));
				this.kp(this.xAxis());
				this.kv(this.xAxis());
				this.iy().c9().q(this.resolution());
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.HorizontalAnchoredCategorySeries.prototype.kk:
				this.gn($.ig.util.cast($.ig.Axis.prototype.$type, c));
				this.go($.ig.util.cast($.ig.Axis.prototype.$type, d));
				this.kq(this.yAxis());
				this.kw(this.yAxis());
				this.iy().c9().q(this.resolution());
				this.jc();
				this.renderSeries(false);
				this.e5();
				break;
		}
	}

, 
	fc: function (a, b, c, d) {
		$.ig.AnchoredCategorySeries.prototype.fc.call(this, a, b, c, d);
		if (this.kp() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.kp()) !== null) {
			($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.kp())).notifyDataChanged();
		}
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				if (this.kp() != null) {
					this.kp().updateRange();
				}
				if (this.kq() != null && !this.kq().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.insert:
				if (this.kp() != null) {
					this.kp().updateRange();
				}
				if (this.kq() != null && !this.kq().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				if (this.kp() != null) {
					this.kp().updateRange();
				}
				if (this.kq() != null && !this.kq().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.replace:
				if (this.jv() != null && this.jt().c9().h() > 0 && this.kq() != null && !this.kq().updateRange()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.change:
				if (d == this.jv()) {
					if (this.xAxis() != null) {
						this.xAxis().updateRange();
					}
					if (this.yAxis() != null && !this.yAxis().updateRange()) {
						this.renderSeries(true);
					}
				}
				break;
		}
	}
,
	$type: new $.ig.Type('HorizontalAnchoredCategorySeries', $.ig.AnchoredCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('PointSeries', 'HorizontalAnchoredCategorySeries', {

	ed: function () {
		return new $.ig.PointSeriesView(this);
	}

, 
	_ky: null,
	ky: function (a) {
		if (arguments.length === 1) {
			this._ky = a;
			return a;
		} else {
			return this._ky;
		}
	}

, 
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
		this.ky(a);
	}

, 
		init: function () {


			$.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
						this.a3($.ig.PointSeries.prototype.$type);
		}
, 
	i6: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
	}

, 
	e6: function (a, b, c, d) {
		$.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, a, b, c, d);
	}
,
	$type: new $.ig.Type('PointSeries', $.ig.HorizontalAnchoredCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('PointSeriesView', 'AnchoredCategorySeriesView', {

	_dy: null,
	dy: function (a) {
		if (arguments.length === 1) {
			this._dy = a;
			return a;
		} else {
			return this._dy;
		}
	}

, 
		init: function (a) {


			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.dy(a);
		},
	$type: new $.ig.Type('PointSeriesView', $.ig.AnchoredCategorySeriesView.prototype.$type)
}, true);













$.ig.util.defType('SplineSeriesBaseView', 'AnchoredCategorySeriesView', {

	_dy: null,
	dy: function (a) {
		if (arguments.length === 1) {
			this._dy = a;
			return a;
		} else {
			return this._dy;
		}
	}

, 
		init: function (a) {


			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.dy(a);
		},
	$type: new $.ig.Type('SplineSeriesBaseView', $.ig.AnchoredCategorySeriesView.prototype.$type)
}, true);

$.ig.util.defType('SplineAreaSeriesView', 'SplineSeriesBaseView', {

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
		init: function (a) {

			this.d1 = new $.ig.Path();
			this.d2 = new $.ig.Path();
			this.d3 = new $.ig.Path();
			this.d4 = new $.ig.Path();

			$.ig.SplineSeriesBaseView.prototype.init.call(this, a);
						this.d6(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		if (!this.ad()) {
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
, 
	d1: null, 
	d2: null, 
	d3: null, 
	d4: null
, 
	d9: function () {
		this.d1.bp(null);
		this.d3.bp(null);
		this.d2.bp(null);
		this.d4.bp(null);
		this.an();
	}

, 
	ea: function (a, b, c, d, e, f, g) {
		this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
		this.dl().ju().p(this.d1, this.d2, this.d3, this.d4, a, b, c, d, e, f, g);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.d1.__fill = this.u().actualBrush();
		this.d3.__fill = this.u().actualBrush();
		this.d3.__opacity = 0.5;
		this.d2.__stroke = this.u().actualOutline();
		this.d2.a7(this.u().thickness());
		this.d2.a8(this.u().dashArray());
		this.d2.a9(this.u().dashCap());
		this.d4.__stroke = this.u().actualOutline();
		this.d4.a7(this.u().thickness());
		this.d4.a8(this.u().dashArray());
		this.d4.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.d1.__fill = a;
		this.d3.__fill = a;
		this.d3.__opacity = 1;
		this.d2.__stroke = a;
		this.d2.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.d4.__stroke = a;
		this.d4.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.b8(this.d6().yAxis());
				a.e($.ig.GradientDirection.prototype.bottomTop, c);
			}
			a.g(this.d1);
			a.g(this.d3);
			a.g(this.d2);
			a.g(this.d4);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "lowerShape", this.d2);
		b.tags().add("Lower");
		var c = new $.ig.PathVisualData(1, "upperShape", this.d4);
		c.tags().add("Upper");
		c.tags().add("Main");
		var d = new $.ig.PathVisualData(1, "translucentShape", this.d1);
		d.tags().add("Translucent");
		var e = new $.ig.PathVisualData(1, "fillShape", this.d3);
		e.tags().add("Fill");
		a.shapes().add(b);
		a.shapes().add(c);
		a.shapes().add(d);
		a.shapes().add(e);
	}
,
	$type: new $.ig.Type('SplineAreaSeriesView', $.ig.SplineSeriesBaseView.prototype.$type)
}, true);



$.ig.util.defType('AreaSeries', 'HorizontalAnchoredCategorySeries', {

	ed: function () {
		return new $.ig.AreaSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
		this.k0(a);
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
		init: function () {


			$.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
						this.a3($.ig.AreaSeries.prototype.$type);
		}
, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode0;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.d5();
	}

, 
	i6: function (a, b) {
		var $self = this;
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var c = b.c9().h();
		var d = $.ig.util.cast($.ig.AreaSeriesView.prototype.$type, b);
		var e = a.d;
		d.d6(e.count(), e, true, c, this.resolution(), function (f, g, h, i, j) { return $self.j3(f, a.d.count(), b)		}, this.unknownValuePlotting());
		var k = this.jb();
		d.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), k.referenceValue(), k.actualMinimumValue(), k.actualMaximumValue());
	}

, 
	unknownValuePlotting: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AreaSeries.prototype.unknownValuePlottingProperty, a);
			return a;
		} else {
			return this.b($.ig.AreaSeries.prototype.unknownValuePlottingProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.AreaSeries.prototype.kx:
				this.renderSeries(false);
				this.e5();
				break;
		}
	}
,
	$type: new $.ig.Type('AreaSeries', $.ig.HorizontalAnchoredCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('AreaSeriesView', 'AnchoredCategorySeriesView', {

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

			this.dx = new $.ig.Path();
			this.dy = new $.ig.Path();
			this.dz = new $.ig.Path();
			this.d0 = new $.ig.Path();

			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.d2(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		if (!this.ad()) {
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
, 
	dx: null, 
	dy: null, 
	dz: null, 
	d0: null
, 
	d5: function () {
		this.dx.bp(null);
		this.dz.bp(null);
		this.dy.bp(null);
		this.d0.bp(null);
		this.an();
	}

, 
	d6: function (a, b, c, d, e, f, g) {
		this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
		this.dl().ju().p(this.dx, this.dy, this.dz, this.d0, a, b, c, d, e, f, g);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dx.__fill = this.u().actualBrush();
		this.dz.__fill = this.u().actualBrush();
		this.dz.__opacity = 0.5;
		this.dy.__stroke = this.u().actualOutline();
		this.dy.a7(this.u().thickness());
		this.dy.a8(this.u().dashArray());
		this.dy.a9(this.u().dashCap());
		this.d0.__stroke = this.u().actualOutline();
		this.d0.a7(this.u().thickness());
		this.d0.a8(this.u().dashArray());
		this.d0.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dx.__fill = a;
		this.dz.__fill = a;
		this.dz.__opacity = 1;
		this.dy.__stroke = a;
		this.dy.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.d0.__stroke = a;
		this.d0.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (this.k && !b) {
			var c = this.b8(this.d2().yAxis());
			a.e($.ig.GradientDirection.prototype.bottomTop, c);
		}
		a.g(this.dx);
		a.g(this.dz);
		a.g(this.dy);
		a.g(this.d0);
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "lowerShape", this.dy);
		b.tags().add("Lower");
		var c = new $.ig.PathVisualData(1, "upperShape", this.d0);
		c.tags().add("Upper");
		c.tags().add("Main");
		var d = new $.ig.PathVisualData(1, "translucentShape", this.dx);
		d.tags().add("Translucent");
		var e = new $.ig.PathVisualData(1, "fillShape", this.dz);
		e.tags().add("Fill");
		a.shapes().add(b);
		a.shapes().add(c);
		a.shapes().add(d);
		a.shapes().add(e);
	}
,
	$type: new $.ig.Type('AreaSeriesView', $.ig.AnchoredCategorySeriesView.prototype.$type)
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

$.ig.util.defType('ColumnSeries', 'HorizontalAnchoredCategorySeries', {

	ed: function () {
		return new $.ig.ColumnSeriesView(this);
	}

, 
	_k2: null,
	k2: function (a) {
		if (arguments.length === 1) {
			this._k2 = a;
			return a;
		} else {
			return this._k2;
		}
	}

, 
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
		this.k2(a);
	}

, 
		init: function () {


			$.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
						this.a3($.ig.ColumnSeries.prototype.$type);
		}
, 
	radiusX: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ColumnSeries.prototype.radiusXProperty, a);
			return a;
		} else {
			return this.b($.ig.ColumnSeries.prototype.radiusXProperty);
		}
	}

, 
	radiusY: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ColumnSeries.prototype.radiusYProperty, a);
			return a;
		} else {
			return this.b($.ig.ColumnSeries.prototype.radiusYProperty);
		}
	}

, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode2;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		if (a && c.d3() != null) {
			c.d3().g(0);
		}
	}

, 
	i6: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var c = a.d;
		if (!b.a9()) {
			return;
		}
		var d = b.ac();
		var e = b.ab();
		var f = new $.ig.ScalerParams(d, e, this.yAxis().isInverted());
		var g = this.yAxis();
		var h = g.getScaledValue(g.referenceValue(), f);
		var i = this.xAxis().gz(d, e);
		var j = b;
		if (isNaN(i) || Number.isInfinity(i)) {
			j.d3().g(0);
			return;
		}
		for (var k = 0; k < c.count(); ++k) {
			var l = c.__inner[k][0] - 0.5 * i;
			var m = c.__inner[k][1];
			var n = h;
			m = Math.max(m, -100);
			n = Math.min(n, e.height() + 100);
			var o = j.d3().item(k);
			o.v(i);
			o.w(Math.abs(n - m));
			j.ec(o, l, Math.min(n, m));
		}
		j.d3().g(c.count());
	}
,
	$type: new $.ig.Type('ColumnSeries', $.ig.HorizontalAnchoredCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('ColumnSeriesView', 'AnchoredCategorySeriesView', {

	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		this.d2(new $.ig.List$1($.ig.Rectangle.prototype.$type, 0));
		if (!this.ad()) {
			this.u().resolution(4);
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}

, 
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

			var $self = this;

			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.d1(a);
				this.d3((function () { var $ret = new $.ig.Pool$1($.ig.Rectangle.prototype.$type);
				$ret.create($self.d6.on($self));
				$ret.activate($self.d9.on($self));
				$ret.disactivate($self.ea.on($self));
				$ret.destroy($self.eb.on($self)); return $ret;}()));
		}
, 
	d6: function () {
		var a = new $.ig.Rectangle();
		this.d2().add(a);
		a.__visibility = $.ig.Visibility.prototype.collapsed;
		return a;
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
	d9: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	ea: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	eb: function (a) {
		this.d2().remove(a);
	}

, 
	ec: function (a, b, c) {
		var d = false;
		if (a.x() != c) {
			d = true;
			a.x(c);
		}
		if (a.y() != b) {
			d = true;
			a.y(b);
		}
		if (d) {
			this.an();
		}
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
			for (var c = 0; c < this.d2().count(); c++) {
				var d = this.d2().__inner[c];
				this.ap(d, c, b);
				if (this.k && !b) {
					var e = d.__fill != null && d.__fill.isGradient() ? new $.ig.Rect(0, d.y(), d.x(), d.v(), d.w()) : null;
					a.e($.ig.GradientDirection.prototype.bottomTop, e);
				}
				a.f(d);
			}
		}
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
	b5: function (a) {
		var $self = this;
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = 0;
		var c = new $.ig.List$1($.ig.Rectangle.prototype.$type, 0);
		var e = this.d3().h().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			c.add(d);
		}
		c.t(function (f, g) {
			if (f.y() < g.y()) {
				return -1;
			} else if (f.y() > g.y()) {
				return 1;

			} else {
				return 0;
			}
		});
		var i = c.getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			var j = new $.ig.RectangleVisualData(1, "column" + b, h);
			j.tags().add("Main");
			a.shapes().add(j);
		}
		b++;
	}
,
	$type: new $.ig.Type('ColumnSeriesView', $.ig.AnchoredCategorySeriesView.prototype.$type)
}, true);




$.ig.util.defType('LineSeries', 'HorizontalAnchoredCategorySeries', {

	ed: function () {
		return new $.ig.LineSeriesView(this);
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
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
		this.k0(a);
	}

, 
		init: function () {


			$.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
						this.a3($.ig.LineSeries.prototype.$type);
		}
, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode0;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.d4();
	}

, 
	i6: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var c = b.c9().h();
		var d = $.ig.util.cast($.ig.LineSeriesView.prototype.$type, b);
		var e = a.d;
		d.d5(e.count(), e, true, this.unknownValuePlotting(), this.j4(e, e.count() - 1, b.ab(), b.ac()), c, this.resolution());
		d.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), NaN, NaN, NaN);
	}

, 
	unknownValuePlotting: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.LineSeries.prototype.unknownValuePlottingProperty, a);
			return a;
		} else {
			return this.b($.ig.LineSeries.prototype.unknownValuePlottingProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.LineSeries.prototype.kx:
				this.renderSeries(false);
				this.e5();
				break;
		}
	}
,
	$type: new $.ig.Type('LineSeries', $.ig.HorizontalAnchoredCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('LineSeriesView', 'AnchoredCategorySeriesView', {

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

			this.dx = new $.ig.Path();
			this.dy = new $.ig.Path();
			this.dz = new $.ig.Path();

			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.d1(a);
		}, 
	dx: null, 
	dy: null, 
	dz: null
, 
	d4: function () {
		this.dy.bp(null);
		this.dx.bp(null);
		this.dz.bp(null);
		this.an();
	}

, 
	d5: function (a, b, c, d, e, f, g) {
		this.d1().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
		this.d1().ju().i(this.dx, this.dy, this.dz, a, b, c, d, e, f, g);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dx.__stroke = this.u().actualBrush();
		this.dx.a7(this.u().thickness());
		this.dx.a8(this.u().dashArray());
		this.dx.a9(this.u().dashCap());
		this.dz.__stroke = this.u().actualBrush();
		this.dz.a7(this.u().thickness());
		this.dz.a8(this.u().dashArray());
		this.dz.a9(this.u().dashCap());
		this.dy.__fill = this.u().actualBrush();
		this.dy.__opacity = 0.75;
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dx.__stroke = a;
		this.dx.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.dz.__stroke = a;
		this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.dy.__fill = a;
		this.dy.__opacity = 1;
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.b8(this.d1().yAxis());
				a.e($.ig.GradientDirection.prototype.bottomTop, c);
			}
			a.g(this.dy);
			a.g(this.dx);
			a.g(this.dz);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "lowerShape", this.dx);
		b.tags().add("Lower");
		b.tags().add("Main");
		var c = new $.ig.PathVisualData(1, "upperShape", this.dz);
		c.tags().add("Upper");
		var d = new $.ig.PathVisualData(1, "translucentShape", this.dy);
		d.tags().add("Translucent");
		a.shapes().add(b);
		a.shapes().add(c);
		a.shapes().add(d);
	}
,
	$type: new $.ig.Type('LineSeriesView', $.ig.AnchoredCategorySeriesView.prototype.$type)
}, true);

$.ig.util.defType('SplineSeriesBase', 'HorizontalAnchoredCategorySeries', {
	init: function () {

		$.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);

	}
, 
	ed: function () {
		return new $.ig.SplineSeriesBaseView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
		this.k3(a);
	}

, 
	_k3: null,
	k3: function (a) {
		if (arguments.length === 1) {
			this._k3 = a;
			return a;
		} else {
			return this._k3;
		}
	}

, 
	_k4: null,
	k4: function (a) {
		if (arguments.length === 1) {
			this._k4 = a;
			return a;
		} else {
			return this._k4;
		}
	}

, 
	k9: function (a) {
		return a;
	}

, 
	la: function (a, b, c, d, e, f) {
		var $self = this;
		var g = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, d);
		if (g == null) {
			return;
		}
		var h = new $.ig.ScalerParams(b, c, d.isInverted());
		var i = new $.ig.ScalerParams(b, c, e.isInverted());
		var j = this.ie();
		var k = 0;
		var l = this.lc(d, b, c);
		var n = function (m) { return m};
		var p = function (o) { return $self.valueColumn().item(g.sortedIndices().__inner[o])};
		var q = this.iy().c9().g();
		var r = this.iy().c9().f();
		var s = Math.ceil(c.width() / (q - r));
		var t = new $.ig.CollisionAvoider();
		var u = this.iy().c9().h();
		if (u <= 0 || (r <= 0 && q <= 0)) {
			this.iy().da().g(k);
			return;
		}
		for (var v = r; v < q + 1; ++v) {
			var w = null;
			var x = v * u;
			if (g != null && g.sortedIndices() != null && x >= 0 && x < g.sortedIndices().count()) {
				x = g.sortedIndices().__inner[x];
			}
			if (v >= (this.valueColumn().count() - 1)) {
				if (j && this.lb(a, a.d.last$1($.ig.Array.prototype.$type), t, Math.min(x, this.dx().g() - 1), k, f)) {
					++k;
				}
				break;
			}
			var y = n(v);
			var z = p(v);
			var aa = n(v + 1);
			var ab = p(v + 1);
			var ac = aa - y;
			var ad = this.k4()[v];
			var ae = this.k4()[v + 1];
			var af = g.getUnscaledValueAt(g.sortedIndices().__inner[v]);
			var ag = d.getScaledValue(af, h) + l;
			var ah = e.getScaledValue(z, i);
			a.d.add((function () { var $ret = new Array();
			$ret.add(ag);
			$ret.add(ah);
			$ret.add(ah); return $ret;}()));
			for (var ai = 1; ai < s; ++ai) {
				var aj = (ai) / (s);
				var ak = y + ac * aj;
				var al = (aa - ak) / ac;
				var am = (ak - y) / ac;
				var an = al * z + am * ab + ((al * al * al - al) * ad + (am * am * am - am) * ae) * (ac * ac) / 6;
				var ao = g.getUnscaledValueAt(g.sortedIndices().__inner[v]);
				var ap = g.getUnscaledValueAt(g.sortedIndices().__inner[v + 1]);
				var aq = ao + (ap - ao) * aj;
				ak = d.getScaledValue(aq, h) + l;
				an = e.getScaledValue(an, i);
				a.d.add((function () { var $ret = new Array();
				$ret.add(ak);
				$ret.add(an);
				$ret.add(an); return $ret;}()));
			}
			if (j) {
				w = (function () { var $ret = new Array();
				$ret.add(ag);
				$ret.add(ah);
				$ret.add(ah); return $ret;}());
			}
			if (j && this.lb(a, w, t, Math.min(x, this.dx().g() - 1), k, f)) {
				++k;
			}
		}
		this.iy().da().g(k);
	}

, 
	lb: function (a, b, c, d, e, f) {
		var g = b[0];
		var h = b[1];
		var i = new $.ig.Rect(0, g - 5, h - 5, 11, 11);
		if (!isNaN(g) && !isNaN(h) && c.tryAdd(i)) {
			a.f.add({__x: g, __y: h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			var j = f.da().item(e);
			($.ig.util.cast($.ig.DataContext.prototype.$type, j.a9())).item(this.dx().item(d));
			return true;
		}
		return false;
	}

, 
	i7: function (a, b) {
		var $self = this;
		$.ig.AnchoredCategorySeries.prototype.i7.call(this, a, b);
		if (a.d.count() <= 1) {
			return;
		}
		if (b.c9().h() == 0) {
			return;
		}
		var c = b.ac();
		var d = b.ab();
		var e = this.xAxis();
		var f = this.yAxis();
		var g = new $.ig.ScalerParams(c, d, e.isInverted());
		var h = new $.ig.ScalerParams(c, d, f.isInverted());
		a.d.clear();
		a.f.clear();
		var i = this.ie();
		var j = 0;
		var k = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
		if (k != null && k.sortedIndices().count() != this.dx().g()) {
			return;
		}
		var l = this.lc(e, c, d);
		var n = function (m) { return m};
		var p = function (o) { return $self.valueColumn().item(o)};
		var q = b.c9().h();
		if ((this.k4() == null || this.k4().length != this.valueColumn().count()) && q == 1) {
			var r = this.splineType() == $.ig.SplineType.prototype.natural ? NaN : 0;
			if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).sortedIndices() != null) {
				var s = new $.ig.SafeSortedReadOnlyDoubleCollection(this.valueColumn(), ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).sortedIndices());
				p = function (t) { return s.item(t)				};
			}
			this.k4($.ig.Numeric.prototype.c(this.valueColumn().count(), n, p, r, r));
		}
		var u = b.c9().g();
		var v = b.c9().f();
		var w = Math.ceil(d.width() / (u - v));
		var x = new $.ig.CollisionAvoider();
		if (k != null) {
			this.la(a, c, d, e, f, b);
			return;
		}
		this.jt().dv();
		for (var y = v; y <= u; ++y) {
			var z = null;
			if (q == 1) {
				if (y >= (this.valueColumn().count() - 1)) {
					if (i && this.lb(a, a.d.__inner[a.d.count() - 1], x, Math.min(y * q, this.dx().g() - 1), j, b)) {
						++j;
					}
					break;
				}
				var aa = n(y);
				var ab = p(y);
				var ac = n(y + 1);
				var ad = p(y + 1);
				var ae = ac - aa;
				var af = this.k4()[y];
				var ag = this.k4()[y + 1];
				var ah = e.getScaledValue(aa, g) + l;
				var ai = f.getScaledValue(ab, h);
				a.d.add((function () { var $ret = new Array();
				$ret.add(ah);
				$ret.add(ai);
				$ret.add(ai); return $ret;}()));
				for (var aj = 1; aj < w; ++aj) {
					var ak = aa + ae * aj / w;
					var al = (ac - ak) / ae;
					var am = (ak - aa) / ae;
					var an = al * ab + am * ad + ((al * al * al - al) * af + (am * am * am - am) * ag) * (ae * ae) / 6;
					ak = e.getScaledValue(ak, g) + l;
					an = f.getScaledValue(an, h);
					a.d.add((function () { var $ret = new Array();
					$ret.add(ak);
					$ret.add(an);
					$ret.add(an); return $ret;}()));
				}
				if (i) {
					z = b.c9().getBucket(y);
					z[0] = (e.getScaledValue(z[0], g) + l);
					z[1] = f.getScaledValue(z[1], h);
					z[2] = f.getScaledValue(z[2], h);
				}

			} else {
				z = b.c9().getBucket(y);
				if (!isNaN(z[0])) {
					z[0] = (e.getScaledValue(z[0], g) + l);
					z[1] = f.getScaledValue(z[1], h);
					z[2] = f.getScaledValue(z[2], h);
					a.d.add(z);
				}
			}
			if (i && this.lb(a, z, x, Math.min(y * q, this.dx().g() - 1), j, b)) {
				++j;
			}
		}
		this.jt().dw();
		b.da().g(j);
	}

, 
	lc: function (a, b, c) {
		var d = this.preferredCategoryMode(a);
		if (d == $.ig.CategoryMode.prototype.mode0 && a.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
			d = $.ig.CategoryMode.prototype.mode1;
		}
		var e = 0;
		switch (d) {
			case $.ig.CategoryMode.prototype.mode0:
				e = 0;
				break;
			case $.ig.CategoryMode.prototype.mode1:
				e = 0.5 * a.getCategorySize(b, c);
				break;
			case $.ig.CategoryMode.prototype.mode2:
				e = a.getGroupCenter(this.index(), b, c);
				break;
		}
		if (a.isInverted()) {
		e = -e;
		}
		return e;
	}

, 
	splineType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SplineSeriesBase.prototype.splineTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.SplineSeriesBase.prototype.splineTypeProperty);
		}
	}

, 
	ld: function () {
		this.k4(null);
	}

, 
	e6: function (a, b, c, d) {
		switch (b) {
			case $.ig.SplineSeriesBase.prototype.jf:
			case $.ig.SplineSeriesBase.prototype.be:
				this.ld();
				break;
		}
		$.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.SplineSeriesBase.prototype.kx:
				this.ld();
				this.renderSeries(false);
				this.e5();
				break;
		}
	}

, 
	fc: function (a, b, c, d) {
		this.ld();
		$.ig.HorizontalAnchoredCategorySeries.prototype.fc.call(this, a, b, c, d);
	}
,
	$type: new $.ig.Type('SplineSeriesBase', $.ig.HorizontalAnchoredCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('SplineAreaSeries', 'SplineSeriesBase', {

	ed: function () {
		return new $.ig.SplineAreaSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.SplineSeriesBase.prototype.ea.call(this, a);
		this.lj(a);
	}

, 
	_lj: null,
	lj: function (a) {
		if (arguments.length === 1) {
			this._lj = a;
			return a;
		} else {
			return this._lj;
		}
	}

, 
		init: function () {


			$.ig.SplineSeriesBase.prototype.init.call(this);
						this.a3($.ig.SplineAreaSeries.prototype.$type);
		}
, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode0;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.d9();
	}

, 
	i6: function (a, b) {
		var $self = this;
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var c = this.iy().c9().h();
		var d = $.ig.util.cast($.ig.SplineAreaSeriesView.prototype.$type, b);
		var e = a.d;
		d.ea(a.d.count(), e, true, c, this.resolution(), function (f, g, h, i, j) { return $self.j3(f, a.d.count(), b)		}, $.ig.UnknownValuePlotting.prototype.dontPlot);
		var k = this.jb();
		d.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), k.referenceValue(), k.actualMinimumValue(), k.actualMaximumValue());
		d.b7(a.d);
	}
,
	$type: new $.ig.Type('SplineAreaSeries', $.ig.SplineSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('SplineSeries', 'SplineSeriesBase', {

	ed: function () {
		return new $.ig.SplineSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.SplineSeriesBase.prototype.ea.call(this, a);
		this.lj(a);
	}

, 
	_lj: null,
	lj: function (a) {
		if (arguments.length === 1) {
			this._lj = a;
			return a;
		} else {
			return this._lj;
		}
	}

, 
		init: function () {


			$.ig.SplineSeriesBase.prototype.init.call(this);
						this.a3($.ig.SplineSeries.prototype.$type);
		}
, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode0;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.d8();
	}

, 
	i6: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var c = this.iy().c9().h();
		var d = $.ig.util.cast($.ig.SplineSeriesView.prototype.$type, b);
		var e = a.d;
		d.d9(e.count(), e, true, $.ig.UnknownValuePlotting.prototype.dontPlot, this.j4(e, e.count() - 1, b.ab(), b.ac()), c, this.resolution());
		d.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), NaN, NaN, NaN);
	}
,
	$type: new $.ig.Type('SplineSeries', $.ig.SplineSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('SplineSeriesView', 'SplineSeriesBaseView', {

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
		init: function (a) {

			this.d1 = new $.ig.Path();
			this.d2 = new $.ig.Path();
			this.d3 = new $.ig.Path();

			$.ig.SplineSeriesBaseView.prototype.init.call(this, a);
						this.d5(a);
		}, 
	d1: null, 
	d2: null, 
	d3: null
, 
	d8: function () {
		this.d2.bp(null);
		this.d1.bp(null);
		this.d3.bp(null);
		this.an();
	}

, 
	d9: function (a, b, c, d, e, f, g) {
		this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
		this.dl().ju().i(this.d1, this.d2, this.d3, a, b, c, d, e, f, g);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.d1.__stroke = this.u().actualBrush();
		this.d1.a7(this.u().thickness());
		this.d1.a8(this.u().dashArray());
		this.d1.a9(this.u().dashCap());
		this.d3.__stroke = this.u().actualBrush();
		this.d3.a7(this.u().thickness());
		this.d3.a8(this.u().dashArray());
		this.d3.a9(this.u().dashCap());
		this.d2.__fill = this.u().actualBrush();
		this.d2.__opacity = 0.75;
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.d1.__stroke = a;
		this.d1.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.d3.__stroke = a;
		this.d3.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.d2.__fill = a;
		this.d2.__opacity = 0.75;
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.b8(this.d5().yAxis());
				a.e($.ig.GradientDirection.prototype.bottomTop, c);
			}
			a.g(this.d2);
			a.g(this.d1);
			a.g(this.d3);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "lowerShape", this.d1);
		b.tags().add("Lower");
		b.tags().add("Main");
		var c = new $.ig.PathVisualData(1, "upperShape", this.d3);
		c.tags().add("Upper");
		var d = new $.ig.PathVisualData(1, "translucentShape", this.d2);
		d.tags().add("Translucent");
		a.shapes().add(b);
		a.shapes().add(c);
		a.shapes().add(d);
	}
,
	$type: new $.ig.Type('SplineSeriesView', $.ig.SplineSeriesBaseView.prototype.$type)
}, true);

$.ig.util.defType('StepAreaSeries', 'HorizontalAnchoredCategorySeries', {

	ed: function () {
		return new $.ig.StepAreaSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
		this.ky(a);
	}

, 
	_ky: null,
	ky: function (a) {
		if (arguments.length === 1) {
			this._ky = a;
			return a;
		} else {
			return this._ky;
		}
	}

, 
		init: function () {


			$.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
						this.a3($.ig.StepAreaSeries.prototype.$type);
		}
, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode1;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.d5();
	}

, 
	k1: function (a, b, c, d, e) {
		if (b) {
			if (e) {
				if ((a & 1) == 0 || (($.ig.intDivide(a, 2)) + 1) >= c.d.count()) {
					return c.d.__inner[($.ig.intDivide(a, 2))][0];
				}
				return c.d.__inner[(($.ig.intDivide(a, 2))) + 1][0];
			}
			return c.d.__inner[($.ig.intDivide(a, 2))][0] + ((a & 1) == 1 ? -d : d);
		}
		if (e) {
			if ((a & 1) == 0 || (($.ig.intDivide(a, 2)) + 1) >= c.d.count()) {
				return c.d.__inner[($.ig.intDivide(a, 2))][0];
			}
			return c.d.__inner[(($.ig.intDivide(a, 2))) + 1][0];
		}
		return c.d.__inner[($.ig.intDivide(a, 2))][0] + ((a & 1) == 0 ? -d : d);
	}

, 
	i6: function (a, b) {
		var $self = this;
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var c = b.ac();
		var d = b.ab();
		var e = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) != null;
		var f = this.xAxis() != null ? 0.5 * this.xAxis().getCategorySize(c, d) : 0;
		if (this.xAxis() != null && this.xAxis().isInverted()) {
			f = -f;
		}
		var g = a.d.count() * 2;
		var h = new $.ig.List$1($.ig.Array.prototype.$type, 2, g);
		for (var i = 0; i < g; i++) {
			var j = new Array(4);
			j[0] = this.k1(i, false, a, f, e);
			j[1] = a.d.__inner[($.ig.intDivide(i, 2))][1];
			j[2] = this.k1(i, true, a, f, e);
			j[3] = a.d.__inner[($.ig.intDivide(i, 2))][2];
			h.add(j);
		}
		var k = this.iy().c9().h();
		var l = $.ig.util.cast($.ig.StepAreaSeriesView.prototype.$type, b);
		l.d6(g, h, false, k, this.resolution(), function (m, n, o, p, q) { return $self.j3(m, 2 * a.d.count(), b)		}, $.ig.UnknownValuePlotting.prototype.dontPlot);
		var r = this.jb();
		l.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), r.referenceValue(), r.actualMinimumValue(), r.actualMaximumValue());
	}

, 
	currentCategoryMode: function () {
			if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
				this.xAxis().categoryMode($.ig.CategoryMode.prototype.mode0);
				return $.ig.CategoryMode.prototype.mode0;
			}
			return $.ig.CategoryMode.prototype.mode1;
	}
,
	$type: new $.ig.Type('StepAreaSeries', $.ig.HorizontalAnchoredCategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type])
}, true);

$.ig.util.defType('StepAreaSeriesView', 'AnchoredCategorySeriesView', {

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

			this.dx = new $.ig.Path();
			this.dy = new $.ig.Path();
			this.dz = new $.ig.Path();
			this.d0 = new $.ig.Path();

			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.d2(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		if (!this.ad()) {
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
, 
	dx: null, 
	dy: null, 
	dz: null, 
	d0: null
, 
	d5: function () {
		this.dx.bp(null);
		this.dz.bp(null);
		this.dy.bp(null);
		this.d0.bp(null);
		this.an();
	}

, 
	d6: function (a, b, c, d, e, f, g) {
		this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
		this.dl().ju().p(this.dx, this.dy, this.dz, this.d0, a, b, c, d, e, f, g);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dx.__fill = this.u().actualBrush();
		this.dz.__fill = this.u().actualBrush();
		this.dz.__opacity = 0.5;
		this.dy.__stroke = this.u().actualOutline();
		this.dy.a7(this.u().thickness());
		this.dy.a8(this.u().dashArray());
		this.dy.a9(this.u().dashCap());
		this.d0.__stroke = this.u().actualOutline();
		this.d0.a7(this.u().thickness());
		this.d0.a8(this.u().dashArray());
		this.d0.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dx.__fill = a;
		this.dz.__fill = a;
		this.dz.__opacity = 1;
		this.dy.__stroke = a;
		this.dy.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.d0.__stroke = a;
		this.d0.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.b8(this.d2().yAxis());
				a.e($.ig.GradientDirection.prototype.bottomTop, c);
			}
			a.g(this.dx);
			a.g(this.dz);
			a.g(this.dy);
			a.g(this.d0);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "lowerShape", this.dy);
		b.tags().add("Lower");
		var c = new $.ig.PathVisualData(1, "upperShape", this.d0);
		c.tags().add("Upper");
		c.tags().add("Main");
		var d = new $.ig.PathVisualData(1, "translucentShape", this.dx);
		d.tags().add("Translucent");
		var e = new $.ig.PathVisualData(1, "fillShape", this.dz);
		e.tags().add("Fill");
		a.shapes().add(b);
		a.shapes().add(c);
		a.shapes().add(d);
		a.shapes().add(e);
	}
,
	$type: new $.ig.Type('StepAreaSeriesView', $.ig.AnchoredCategorySeriesView.prototype.$type)
}, true);

$.ig.util.defType('StepLineSeries', 'HorizontalAnchoredCategorySeries', {

	ed: function () {
		return new $.ig.StepLineSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
		this.ky(a);
	}

, 
	_ky: null,
	ky: function (a) {
		if (arguments.length === 1) {
			this._ky = a;
			return a;
		} else {
			return this._ky;
		}
	}

, 
		init: function () {


			$.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
						this.a3($.ig.StepLineSeries.prototype.$type);
		}
, 
	onApplyTemplate: function () {
		$.ig.CategorySeries.prototype.onApplyTemplate.call(this);
	}

, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode1;
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.d4();
	}

, 
	k1: function (a, b, c, d, e, f) {
		var g;
		if (b) {
			if (f) {
				g = (a & 1) == 0;
				if (g || ($.ig.intDivide(a, 2)) + 1 < 0) {
					return c.d.__inner[($.ig.intDivide(a, 2))][0];
				}
				if (c.d.count() == ($.ig.intDivide(a, 2)) + 1) {
					return c.d.__inner[($.ig.intDivide(a, 2))][0];
				}
				return c.d.__inner[($.ig.intDivide(a, 2)) + 1][0];
			}
			g = (a & 1) == 0;
			return (c.d.__inner[($.ig.intDivide(a, 2))][0] + (g ? d : -d));
		}
		if (f) {
			g = (a & 1) == 0;
			if (g || (($.ig.intDivide(a, 2)) + 1) >= c.d.count()) {
				return c.d.__inner[($.ig.intDivide(a, 2))][0];
			}
			if (c.d.count() == ($.ig.intDivide(a, 2)) + 1) {
				return c.d.__inner[($.ig.intDivide(a, 2))][0];
			}
			return (c.d.__inner[($.ig.intDivide(a, 2)) + 1][0]);
		}
		g = (a & 1) == 0;
		return (c.d.__inner[($.ig.intDivide(a, 2))][0] + (g ? -d : d));
	}

, 
	i6: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var c = b.ac();
		var d = b.ab();
		var e = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) != null;
		var f = this.xAxis().isInverted();
		var g = 0;
		if (this.xAxis() != null) {
			g = 0.5 * this.xAxis().getCategorySize(c, d);
		}
		var h = a.d;
		var i = 2 * h.count();
		var j = new $.ig.List$1($.ig.Array.prototype.$type, 2, i);
		if (!this.xAxis().isInverted()) {
			for (var k = 0; k < i; k++) {
				var l = new Array(4);
				l[0] = this.k1(k, false, a, g, f, e);
				l[1] = a.d.__inner[($.ig.intDivide(k, 2))][1];
				l[2] = this.k1(k, true, a, g, f, e);
				l[3] = a.d.__inner[($.ig.intDivide(k, 2))][2];
				j.add(l);
			}

		} else {
			for (var m = 0; m < i; m++) {
				var n = new Array(4);
				n[0] = this.k1(m, true, a, g, f, e);
				n[1] = a.d.__inner[($.ig.intDivide(m, 2))][1];
				n[2] = this.k1(m, true, a, g, f, e);
				n[3] = a.d.__inner[($.ig.intDivide(m, 2))][2];
				j.add(n);
			}
		}
		var o = $.ig.util.cast($.ig.StepLineSeriesView.prototype.$type, b);
		var p = o.c9().h();
		o.d5(i, j, false, $.ig.UnknownValuePlotting.prototype.dontPlot, this.j4(j, i - 1, b.ab(), b.ac()), p, this.resolution());
		o.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), NaN, NaN, NaN);
	}

, 
	currentCategoryMode: function () {
			if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
				this.xAxis().categoryMode($.ig.CategoryMode.prototype.mode0);
				return $.ig.CategoryMode.prototype.mode0;
			}
			return $.ig.CategoryMode.prototype.mode1;
	}
,
	$type: new $.ig.Type('StepLineSeries', $.ig.HorizontalAnchoredCategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type])
}, true);

$.ig.util.defType('StepLineSeriesView', 'AnchoredCategorySeriesView', {

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

			this.dx = new $.ig.Path();
			this.dy = new $.ig.Path();
			this.dz = new $.ig.Path();

			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.d1(a);
		}, 
	dx: null, 
	dy: null, 
	dz: null
, 
	d4: function () {
		this.dy.bp(null);
		this.dx.bp(null);
		this.dz.bp(null);
		this.an();
	}

, 
	d5: function (a, b, c, d, e, f, g) {
		this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
		this.dl().ju().i(this.dx, this.dy, this.dz, a, b, c, d, e, f, g);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dx.__stroke = this.u().actualBrush();
		this.dx.a7(this.u().thickness());
		this.dx.a8(this.u().dashArray());
		this.dx.a9(this.u().dashCap());
		this.dz.__stroke = this.u().actualBrush();
		this.dz.a7(this.u().thickness());
		this.dz.a8(this.u().dashArray());
		this.dz.a9(this.u().dashCap());
		this.dy.__fill = this.u().actualBrush();
		this.dy.__opacity = 0.75;
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dx.__stroke = a;
		this.dx.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.dz.__stroke = a;
		this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.dy.__fill = a;
		this.dy.__opacity = 1;
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.b8(this.d1().yAxis());
				a.e($.ig.GradientDirection.prototype.bottomTop, c);
			}
			a.g(this.dy);
			a.g(this.dx);
			a.g(this.dz);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "lowerShape", this.dx);
		b.tags().add("Lower");
		b.tags().add("Main");
		var c = new $.ig.PathVisualData(1, "upperShape", this.dz);
		c.tags().add("Upper");
		var d = new $.ig.PathVisualData(1, "translucentShape", this.dy);
		d.tags().add("Translucent");
		a.shapes().add(b);
		a.shapes().add(c);
		a.shapes().add(d);
	}
,
	$type: new $.ig.Type('StepLineSeriesView', $.ig.AnchoredCategorySeriesView.prototype.$type)
}, true);

$.ig.util.defType('WaterfallSeries', 'HorizontalAnchoredCategorySeries', {

	ed: function () {
		return new $.ig.WaterfallSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.AnchoredCategorySeries.prototype.ea.call(this, a);
		this.k4(a);
	}

, 
	_k4: null,
	k4: function (a) {
		if (arguments.length === 1) {
			this._k4 = a;
			return a;
		} else {
			return this._k4;
		}
	}

, 
		init: function () {


			$.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
						this.a3($.ig.WaterfallSeries.prototype.$type);
		}
, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode2;
	}

, 
	negativeBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.WaterfallSeries.prototype.negativeBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.WaterfallSeries.prototype.negativeBrushProperty);
		}
	}

, 
	radiusX: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.WaterfallSeries.prototype.radiusXProperty, a);
			return a;
		} else {
			return this.b($.ig.WaterfallSeries.prototype.radiusXProperty);
		}
	}

, 
	radiusY: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.WaterfallSeries.prototype.radiusYProperty, a);
			return a;
		} else {
			return this.b($.ig.WaterfallSeries.prototype.radiusYProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.WaterfallSeries.prototype.kz:
			case $.ig.WaterfallSeries.prototype.ky:
			case $.ig.WaterfallSeries.prototype.kx:
				this.renderSeries(false);
				break;
		}
	}

, 
	eu: function (a, b) {
		$.ig.AnchoredCategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.d3();
	}

, 
	i6: function (a, b) {
		var $self = this;
		var c = b;
		c.d3();
		$.ig.AnchoredCategorySeries.prototype.i6.call(this, a, b);
		var d = c.d4();
		var e = c.d5();
		var f = b.ac();
		var g = b.ab();
		var h = this.xAxis().gz(f, g);
		var i = this.radiusX();
		var j = this.radiusY();
		var k;
		var l;
		var m;
		var n = this.j2(b);
		var o = NaN;
		if (a.d.count() > 0) {
			m = a.d.__inner[0][0] - 0.5 * h;
			var p = a.d.__inner[0][1];
			if (!isNaN(p)) {
				if (p > n) {
					l = new $.ig.Rect(0, m, n, h, Math.abs(n - p));
					k = (function () { var $ret = new $.ig.RectangleGeometry();
					$ret.f(l);
					$ret.g(i);
					$ret.h(j); return $ret;}());
					e.d().add(k);

				} else {
					l = new $.ig.Rect(0, m, p, h, Math.abs(p - n));
					k = (function () { var $ret = new $.ig.RectangleGeometry();
					$ret.f(l);
					$ret.g(i);
					$ret.h(j); return $ret;}());
					d.d().add(k);
				}
				o = p;

			} else {
				o = n;
			}
		}
		for (var q = 1; q < a.d.count(); ++q) {
			var r = a.d.__inner[q];
			m = a.d.__inner[q][0] - 0.5 * h;
			var s = r[1];
			if (!isNaN(s)) {
				l = new $.ig.Rect(0, m, Math.min(o, s), h, Math.abs(o - s));
				k = (function () { var $ret = new $.ig.RectangleGeometry();
				$ret.f(l);
				$ret.g(i);
				$ret.h(j); return $ret;}());
				(o > s ? d : e).d().add(k);
				o = s;
			}
		}
		c.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), this.yAxis().referenceValue(), this.yAxis().actualMinimumValue(), this.yAxis().actualMaximumValue());
	}
,
	$type: new $.ig.Type('WaterfallSeries', $.ig.HorizontalAnchoredCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('WaterfallSeriesView', 'AnchoredCategorySeriesView', {

	_d0: null,
	d0: function (a) {
		if (arguments.length === 1) {
			this._d0 = a;
			return a;
		} else {
			return this._d0;
		}
	}

, 
		init: function (a) {

			this.dx = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.GeometryGroup()); return $ret;}());
			this.dy = (function () { var $ret = new $.ig.Path();
			$ret.bp(new $.ig.GeometryGroup()); return $ret;}());

			$.ig.AnchoredCategorySeriesView.prototype.init.call(this, a);
						this.d0(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		if (!this.ad()) {
			this.d0().negativeBrush((function () { var $ret = new $.ig.Brush();
			$ret.__fill = "#415460"; return $ret;}()));
			this.d0().resolution(4);
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.p);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
		}
	}
, 
	dx: null, 
	dy: null
, 
	d3: function () {
		var a = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.dx.bp());
		var b = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.dy.bp());
		a.d().clear();
		b.d().clear();
	}

, 
	d4: function () {
		this.an();
		return $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.dx.bp());
	}

, 
	d5: function () {
		return $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.dy.bp());
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dx.__fill = this.u().actualBrush();
		this.dx.__stroke = this.u().actualOutline();
		this.dx.a7(this.u().thickness());
		this.dx.a8(this.u().dashArray());
		this.dx.a9(this.u().dashCap());
		this.dy.__fill = this.d0().negativeBrush();
		this.dy.__stroke = this.u().actualOutline();
		this.dy.a7(this.u().thickness());
		this.dy.a8(this.u().dashArray());
		this.dy.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dx.__fill = a;
		this.dx.__stroke = a;
		this.dx.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.dy.__fill = a;
		this.dy.__stroke = a;
		this.dy.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.b8(this.d0().yAxis());
				a.e($.ig.GradientDirection.prototype.bottomTop, c);
			}
			a.g(this.dx);
			a.g(this.dy);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PathVisualData(1, "positivePathShape", this.dx);
		b.tags().add("Positive");
		b.tags().add("Main");
		var c = new $.ig.PathVisualData(1, "negativePathShape", this.dy);
		c.tags().add("Negative");
		a.shapes().add(b);
		a.shapes().add(c);
	}
,
	$type: new $.ig.Type('WaterfallSeriesView', $.ig.AnchoredCategorySeriesView.prototype.$type)
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







































































$.ig.util.defType('RectangleVisualData', 'PrimitiveVisualData', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.PrimitiveVisualData.prototype.init.call(this, "rect1");
		}
, 
	_width: null,
	width: function (a) {
		if (arguments.length === 1) {
			this._width = a;
			return a;
		} else {
			return this._width;
		}
	}

, 
	_height: null,
	height: function (a) {
		if (arguments.length === 1) {
			this._height = a;
			return a;
		} else {
			return this._height;
		}
	}

, 
		init1: function (initNumber, a, b) {


			$.ig.PrimitiveVisualData.prototype.init.call(this, a);
						this.width(b.v());
				this.height(b.w());
				$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), b);
		}
, 
	type: function () {
			return "Rectangle";
	}

, 
	scaleByViewport: function (a) {
		$.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, a);
		this.width(this.width() / a.width());
		this.height(this.height() / a.height());
	}

, 
	getPointsOverride: function (a, b) {
		var c = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		a.add(c);
		c.add({__x: this.appearance().canvasLeft(), __y: this.appearance().canvasTop(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		c.add({__x: this.appearance().canvasLeft() + this.width(), __y: this.appearance().canvasTop(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		c.add({__x: this.appearance().canvasLeft() + this.width(), __y: this.appearance().canvasTop() + this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		c.add({__x: this.appearance().canvasLeft(), __y: this.appearance().canvasTop() + this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}
,
	$type: new $.ig.Type('RectangleVisualData', $.ig.PrimitiveVisualData.prototype.$type)
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
$.ig.SplineType.prototype.natural = 0;
$.ig.SplineType.prototype.clamped = 1;
$.ig.TimeAxisDisplayType.prototype.continuous = 0;
$.ig.TimeAxisDisplayType.prototype.discrete = 1;
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
$.ig.AnchoredCategorySeries.prototype.je = "ValueMemberPath";
$.ig.AnchoredCategorySeries.prototype.jf = "ValueColumn";
$.ig.AnchoredCategorySeries.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.je, String, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.je, b.f(), b.e());
}));
$.ig.AnchoredCategorySeries.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.b4, b.f(), b.e());
}));
$.ig.AnchoredCategorySeries.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b6, $.ig.Brush.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.b6, b.f(), b.e());
}));
$.ig.AnchoredCategorySeries.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b7, $.ig.Brush.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.b7, b.f(), b.e());
}));
$.ig.AnchoredCategorySeries.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b8, Number, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.b8, b.f(), b.e());
}));
$.ig.AnchoredCategorySeries.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.b9, b.f(), b.e());
}));
$.ig.AnchoredCategorySeries.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.b3, b.f(), b.e());
}));
$.ig.AnchoredCategorySeries.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b5, $.ig.Number.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.b5, b.f(), b.e());
}));
$.ig.AnchoredCategorySeries.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.ca, $.ig.Number.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (a, b) {
	($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, a)).ej($.ig.AnchoredCategorySeries.prototype.ca, b.f(), b.e());
}));
$.ig.VerticalAnchoredCategorySeries.prototype.kj = "XAxis";
$.ig.VerticalAnchoredCategorySeries.prototype.kk = "YAxis";
$.ig.VerticalAnchoredCategorySeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.VerticalAnchoredCategorySeries.prototype.kj, $.ig.NumericXAxis.prototype.$type, $.ig.VerticalAnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.VerticalAnchoredCategorySeries.prototype.$type, a)).ej($.ig.VerticalAnchoredCategorySeries.prototype.kj, b.f(), b.e());
}));
$.ig.VerticalAnchoredCategorySeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.VerticalAnchoredCategorySeries.prototype.kk, $.ig.CategoryYAxis.prototype.$type, $.ig.VerticalAnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.VerticalAnchoredCategorySeries.prototype.$type, a)).ej($.ig.VerticalAnchoredCategorySeries.prototype.kk, b.f(), b.e());
}));
$.ig.BarSeries.prototype.kn = "RadiusX";
$.ig.BarSeries.prototype.ko = "RadiusY";
$.ig.BarSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.BarSeries.prototype.kn, Number, $.ig.BarSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.BarSeries.prototype.$type, a)).ej($.ig.BarSeries.prototype.kn, b.f(), b.e());
}));
$.ig.BarSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.BarSeries.prototype.ko, Number, $.ig.BarSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.BarSeries.prototype.$type, a)).ej($.ig.BarSeries.prototype.ko, b.f(), b.e());
}));
$.ig.HorizontalAnchoredCategorySeries.prototype.kj = "XAxis";
$.ig.HorizontalAnchoredCategorySeries.prototype.kk = "YAxis";
$.ig.HorizontalAnchoredCategorySeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HorizontalAnchoredCategorySeries.prototype.kj, $.ig.CategoryAxisBase.prototype.$type, $.ig.HorizontalAnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.HorizontalAnchoredCategorySeries.prototype.$type, a)).ej($.ig.HorizontalAnchoredCategorySeries.prototype.kj, b.f(), b.e());
}));
$.ig.HorizontalAnchoredCategorySeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HorizontalAnchoredCategorySeries.prototype.kk, $.ig.NumericYAxis.prototype.$type, $.ig.HorizontalAnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.HorizontalAnchoredCategorySeries.prototype.$type, a)).ej($.ig.HorizontalAnchoredCategorySeries.prototype.kk, b.f(), b.e());
}));
$.ig.AreaSeries.prototype.kx = "UnknownValuePlotting";
$.ig.AreaSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.AreaSeries.prototype.kx, $.ig.UnknownValuePlotting.prototype.$type, $.ig.AreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (a, b) {
	($.ig.util.cast($.ig.AreaSeries.prototype.$type, a)).ej($.ig.AreaSeries.prototype.kx, b.f(), b.e());
}));
$.ig.ColumnSeries.prototype.kx = "RadiusX";
$.ig.ColumnSeries.prototype.ky = "RadiusY";
$.ig.ColumnSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.ColumnSeries.prototype.kx, Number, $.ig.ColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.ColumnSeries.prototype.$type, a)).ej($.ig.ColumnSeries.prototype.kx, b.f(), b.e());
}));
$.ig.ColumnSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.ColumnSeries.prototype.ky, Number, $.ig.ColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.ColumnSeries.prototype.$type, a)).ej($.ig.ColumnSeries.prototype.ky, b.f(), b.e());
}));
$.ig.LineSeries.prototype.kx = "UnknownValuePlotting";
$.ig.LineSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.LineSeries.prototype.kx, $.ig.UnknownValuePlotting.prototype.$type, $.ig.LineSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (a, b) {
	($.ig.util.cast($.ig.LineSeries.prototype.$type, a)).ej($.ig.LineSeries.prototype.kx, b.f(), b.e());
}));
$.ig.SplineSeriesBase.prototype.kx = "SplineType";
$.ig.SplineSeriesBase.prototype.splineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.SplineSeriesBase.prototype.kx, $.ig.SplineType.prototype.$type, $.ig.SplineSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.SplineType.prototype.natural, function (a, b) {
	($.ig.util.cast($.ig.SplineSeriesBase.prototype.$type, a)).ej($.ig.SplineSeriesBase.prototype.kx, b.f(), b.e());
}));
$.ig.WaterfallSeries.prototype.kx = "NegativeBrush";
$.ig.WaterfallSeries.prototype.ky = "RadiusX";
$.ig.WaterfallSeries.prototype.kz = "RadiusY";
$.ig.WaterfallSeries.prototype.negativeBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.WaterfallSeries.prototype.kx, $.ig.Brush.prototype.$type, $.ig.WaterfallSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.WaterfallSeries.prototype.$type, a)).ej($.ig.WaterfallSeries.prototype.kx, b.f(), b.e());
}));
$.ig.WaterfallSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.WaterfallSeries.prototype.ky, Number, $.ig.WaterfallSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.WaterfallSeries.prototype.$type, a)).ej($.ig.WaterfallSeries.prototype.ky, b.f(), b.e());
}));
$.ig.WaterfallSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.WaterfallSeries.prototype.kz, Number, $.ig.WaterfallSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.WaterfallSeries.prototype.$type, a)).ej($.ig.WaterfallSeries.prototype.kz, b.f(), b.e());
}));
$.ig.Legend.prototype.cc = "Orientation";

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['flattenTo', 'getBounds2', 'clipTo']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['asQueryable']]]);
$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);

