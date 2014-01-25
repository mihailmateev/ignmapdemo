/*!
* Infragistics.Web.ClientUI infragistics.chart_rangecategorychart.js 12.2.20122.1021
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

























































































$.ig.util.defType('RangeCategoryBucketCalculator', 'CategoryBucketCalculator', {

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
		init: function (a) {

			this.r = null;
			this.s = null;

			$.ig.CategoryBucketCalculator.prototype.init.call(this, a);
						this.u(a);
		}
, 
	getBucket: function (a) {
		var b = this.r;
		var c = this.s;
		var d = this.r.length;
		var e = this.s.length;
		var f = Math.min(d, e);
		var g = a * this.h();
		var h = Math.min(g + this.h() - 1, f - 1);
		var i = NaN;
		var j = NaN;
		var k = true;
		var l;
		var m;
		var n;
		var o;
		for (var p = g; p <= h; ++p) {
			l = b[p];
			m = c[p];
			if (l < m) {
				n = l;
				o = m;

			} else {
				o = l;
				n = m;
			}
			if (!k) {
				if (!isNaN(n)) {
					i = i < n ? i : n;
					j = j > n ? j : n;
				}
				if (!isNaN(o)) {
					i = i < o ? i : o;
					j = j > o ? j : o;
				}

			} else {
				if (!isNaN(n)) {
					if (isNaN(i)) {
						i = n;

					} else {
						i = Math.min(i, n);
					}
					if (!isNaN(j)) {
						j = Math.max(j, n);
					}
				}
				if (!isNaN(o)) {
					if (isNaN(j)) {
						j = o;

					} else {
						j = Math.max(j, o);
					}
					if (!isNaN(i)) {
						i = Math.min(i, o);
					}
				}
				if (!isNaN(i) && !isNaN(j)) {
					k = false;
				}
			}
		}
		if (!k) {
			var q = new Array(3);
			q[0] = (0.5 * (g + h));
			q[1] = i;
			q[2] = j;
			return q;
		}
		var r = new Array(3);
		r[0] = NaN;
		r[1] = NaN;
		r[2] = NaN;
		return r;
	}
, 
	r: null, 
	s: null
, 
	cacheValues: function () {
		this.r = this.u().dk().lowColumn().asArray();
		this.s = this.u().dk().highColumn().asArray();
	}

, 
	unCacheValues: function () {
		this.r = null;
		this.s = null;
	}
,
	$type: new $.ig.Type('RangeCategoryBucketCalculator', $.ig.CategoryBucketCalculator.prototype.$type)
}, true);




$.ig.util.defType('IHasHighLowValueCategory', 'Object', {

		$type: new $.ig.Type('IHasHighLowValueCategory', null)
}, true);

$.ig.util.defType('RangeCategorySeries', 'CategorySeries', {

	ed: function () {
		return new $.ig.RangeCategorySeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.CategorySeries.prototype.ea.call(this, a);
		this.jo(a);
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
		init: function () {


			$.ig.CategorySeries.prototype.init.call(this);
						this.ix(new $.ig.RangeCategoryFramePreparer(1, this, this.jo(), this, this, this.jo().c9()));
		}
, 
	_ix: null,
	ix: function (a) {
		if (arguments.length === 1) {
			this._ix = a;
			return a;
		} else {
			return this._ix;
		}
	}

, 
	lowMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RangeCategorySeries.prototype.lowMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.RangeCategorySeries.prototype.lowMemberPathProperty);
		}
	}

, 
	lowColumn: function (a) {
		if (arguments.length === 1) {
			if (this.ji != a) {
				var b = this.ji;
				this.ji = a;
				this.ej($.ig.RangeCategorySeries.prototype.jf, b, this.ji);
			}
			return a;
		} else {
			return this.ji;
		}
	}
, 
	ji: null
, 
	highMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RangeCategorySeries.prototype.highMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.RangeCategorySeries.prototype.highMemberPathProperty);
		}
	}

, 
	highColumn: function (a) {
		if (arguments.length === 1) {
			if (this.jj != a) {
				var b = this.jj;
				this.jj = a;
				this.ej($.ig.RangeCategorySeries.prototype.jh, b, this.jj);
			}
			return a;
		} else {
			return this.jj;
		}
	}
, 
	jj: null
, 
	i6: function (a, b) {
		$.ig.CategorySeries.prototype.i6.call(this, a, b);
		$.ig.CategoryMarkerManager.prototype.a(this, a.f, b.da(), this.useLightweightMarkers());
	}

, 
	ju: function (a, b, c, d, e, f) {
		this.jo().dn(a, b, c, d, e, f);
	}

, 
	scrollIntoView: function (a) {
		var b = this.view() != null ? this.view().ac() : $.ig.Rect.prototype.empty();
		var c = this.view() != null ? this.view().ab() : $.ig.Rect.prototype.empty();
		var d = !b.isEmpty() && !c.isEmpty() && this.dx() != null ? this.dx().x(a) : -1;
		var e = this.ja();
		var f;
		if (e != null) {
			var g = new $.ig.Rect(0, 0, 0, 1, 1);
			var h = new $.ig.ScalerParams(g, g, e.isInverted());
			f = e.getScaledValue(d, h);

		} else {
			f = NaN;
		}
		var i = e != null ? this.ix().x($.ig.util.cast($.ig.ICategoryScaler.prototype.$type, e), new $.ig.Rect(0, 0, 0, 1, 1), new $.ig.Rect(0, 0, 0, 1, 1)) : 0;
		f += i;
		if (d >= 0 && b != null && c != null) {
			if (!isNaN(f)) {
				if (f < b.left() + 0.1 * b.width()) {
					f = f + 0.4 * b.width();
				}
				if (f > b.right() - 0.1 * b.width()) {
					f = f - 0.4 * b.width();
				}
				b.x(f - 0.5 * b.width());
			}
			var j = this.jb();
			if (j != null && this.highColumn() != null && d < this.highColumn().count()) {
				var k = new $.ig.ScalerParams(b, c, j.isInverted());
				var l = j.getScaledValue(this.highColumn().item(d), k);
				var m = j.getScaledValue(this.lowColumn().item(d), k);
				if (!isNaN(l) && !isNaN(m)) {
					var n = Math.abs(m - l);
					if (b.height() < n) {
						b.height(n);
						b.y(Math.min(m, l));

					} else {
						if (m < b.top() + 0.1 * b.height()) {
							m = m + 0.4 * b.height();
						}
						if (m > b.bottom() - 0.1 * b.height()) {
							m = m - 0.4 * b.height();
						}
						b.y(m - 0.5 * b.height());
					}
				}
			}
			if (this.syncLink() != null) {
				this.syncLink().bp(this.seriesViewer(), b);
			}
		}
		return d >= 0;
	}

, 
	e6: function (a, b, c, d) {
		$.ig.CategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.Series.prototype.be:
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.lowColumn());
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).ac(this.highColumn());
					this.lowColumn(null);
					this.highColumn(null);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					this.lowColumn(this.gs(this.lowMemberPath()));
					this.highColumn(this.gs(this.highMemberPath()));
				}
				if (!this.jc()) {
					this.iy().c9().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.RangeCategorySeries.prototype.je:
				if (this.dx() != null) {
					this.dx().ac(this.lowColumn());
					this.lowColumn(this.gs(this.lowMemberPath()));
				}
				break;
			case $.ig.RangeCategorySeries.prototype.jf:
				if (!this.jc()) {
					this.iy().c9().q(this.resolution());
					this.renderSeries(false);
				}
				break;
			case $.ig.RangeCategorySeries.prototype.jg:
				if (this.dx() != null) {
					this.dx().ac(this.highColumn());
					this.highColumn(this.gs(this.highMemberPath()));
				}
				break;
			case $.ig.RangeCategorySeries.prototype.jh:
				if (!this.jc()) {
					this.iy().c9().q(this.resolution());
					this.renderSeries(false);
				}
				break;
		}
	}

, 
	em: function (a) {
		if (this.lowColumn() == null || this.lowColumn().count() == 0 || this.highColumn() == null || this.highColumn().count() == 0) {
			return null;
		}
		if (a == this.ja()) {
			var b = Math.min(this.lowColumn().count(), this.highColumn().count());
			return new $.ig.AxisRange(0, b - 1);
		}
		if (a == this.jb()) {
			var c = Math.min(this.lowColumn().minimum(), this.highColumn().minimum());
			var d = Math.max(this.lowColumn().maximum(), this.highColumn().maximum());
			return new $.ig.AxisRange(Math.min(c, d), Math.max(c, d));
		}
		return null;
	}

, 
	fc: function (a, b, c, d) {
		if (this.ja() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.ja()) !== null) {
			($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.ja())).notifyDataChanged();
		}
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.change:
				if (d == this.lowMemberPath() || d == this.highMemberPath()) {
					if (!this.jc()) {
						this.renderSeries(true);
					}
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.insert:
				this.iy().c9().q(this.resolution());
				if (!this.jc()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				this.iy().c9().q(this.resolution());
				if (!this.jc()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.replace:
				if (this.lowMemberPath() != null && this.highMemberPath() != null && this.iy().c9().h() > 0 && !this.jc()) {
					this.renderSeries(true);
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				this.iy().c9().q(this.resolution());
				if (!this.jc()) {
					this.renderSeries(true);
				}
				break;
		}
	}

, 
	es: function (a, b, c) {
		var d = $.ig.CategorySeries.prototype.es.call(this, a, b, c);
		if (this.lowColumn() == null || this.lowColumn().count() == 0 || this.highColumn() == null || this.highColumn().count() == 0) {
			d = false;
		}
		return d;
	}

, 
	i7: function (a, b) {
		this.ix().m(a, b);
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
			return this.iy().c9();
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
	er: function (c, d) {
		var e = this.dv();
		$.ig.CategorySeries.prototype.er.call(this, c, d);
		if (!e) {
			this.view().b4(d);
			return;
		}
		this.view().b4(d);
		if (this.ew(this.dt())) {
			return;
		}
		var f = new $.ig.RangeCategoryFramePreparer(1, this, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, this.dt()), this.seriesViewer().fb().aj(), this, (this.dt()).c9());
		this.iu = new $.ig.CategoryFrame(3);
		f.m(this.iu, this.dt());
		this.i6(this.iu, this.dt());
		this.dv(false);
	}
,
	$type: new $.ig.Type('RangeCategorySeries', $.ig.CategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type, $.ig.IHasHighLowValueCategory.prototype.$type])
}, true);

$.ig.util.defType('HorizontalRangeCategorySeries', 'RangeCategorySeries', {
	init: function () {

		$.ig.RangeCategorySeries.prototype.init.call(this);

	}
, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HorizontalRangeCategorySeries.prototype.xAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.HorizontalRangeCategorySeries.prototype.xAxisProperty);
		}
	}

, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.HorizontalRangeCategorySeries.prototype.yAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.HorizontalRangeCategorySeries.prototype.yAxisProperty);
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
	jc: function () {
		return this.yAxis() != null && this.yAxis().updateRange();
	}

, 
	e6: function (a, b, c, d) {
		$.ig.RangeCategorySeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.HorizontalRangeCategorySeries.prototype.jx:
				this.gn($.ig.util.cast($.ig.Axis.prototype.$type, c));
				this.go($.ig.util.cast($.ig.Axis.prototype.$type, d));
				this.iy().c9().q(this.resolution());
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.HorizontalRangeCategorySeries.prototype.jy:
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
	$type: new $.ig.Type('HorizontalRangeCategorySeries', $.ig.RangeCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('RangeAreaSeries', 'HorizontalRangeCategorySeries', {

	ed: function () {
		return new $.ig.RangeAreaSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.RangeCategorySeries.prototype.ea.call(this, a);
		this.j4(a);
	}

, 
	_j4: null,
	j4: function (a) {
		if (arguments.length === 1) {
			this._j4 = a;
			return a;
		} else {
			return this._j4;
		}
	}

, 
		init: function () {


			$.ig.HorizontalRangeCategorySeries.prototype.init.call(this);
						this.a3($.ig.RangeAreaSeries.prototype.$type);
		}
, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode0;
	}

, 
	eu: function (a, b) {
		$.ig.CategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		c.dw();
	}

, 
	i6: function (a, b) {
		$.ig.RangeCategorySeries.prototype.i6.call(this, a, b);
		var c = a.d.count();
		var d = new $.ig.List$1($.ig.Array.prototype.$type, 2, c);
		for (var e = 0; e < c; e++) {
			var f = a.d.__inner[e];
			var g = new Array(4);
			g[0] = f[0];
			g[1] = f[1];
			var h = a.d.__inner[a.d.count() - 1 - e];
			g[2] = h[0];
			g[3] = h[2];
			d.add(g);
		}
		var i = $.ig.util.cast($.ig.RangeAreaSeriesView.prototype.$type, b);
		i.dx(a.d.count(), d, false);
		i.b6(Math.min(this.lowColumn().minimum(), this.highColumn().minimum()), Math.max(this.lowColumn().maximum(), this.highColumn().maximum()), NaN, NaN, NaN);
	}
,
	$type: new $.ig.Type('RangeAreaSeries', $.ig.HorizontalRangeCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('RangeCategorySeriesView', 'CategorySeriesView', {

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
		init: function (a) {


			$.ig.CategorySeriesView.prototype.init.call(this, a);
						this.dk(a);
		}
, 
	dn: function (a, b, c, d, e, f) {
		a.bn().clear();
		b.bn().clear();
		c.bn().clear();
		var g = $.ig.Flattener.prototype.h(d, e, true, f, this.u().resolution());
		var h = $.ig.Flattener.prototype.h(d, e, false, f, this.u().resolution());
		var i = g.count();
		var j = h.count();
		var k;
		var l;
		var m;
		var n;
		for (var o = 0; o < i; o++) {
			k = g.item(o);
			l = e.__inner[k];
			m = l[0];
			n = l[1];
			a.bn().add({__x: m, __y: n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			b.bn().add({__x: m, __y: n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		var p;
		var q;
		for (var r = 0; r < j; r++) {
			k = h.item(r);
			l = e.__inner[k];
			if (f) {
				p = l[0];
				q = l[2];

			} else {
				p = l[2];
				q = l[3];
			}
			c.bn().add({__x: p, __y: q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			b.bn().add({__x: p, __y: q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		a.a6(a.bn().count() > 0);
		b.a6(b.bn().count() > 0);
		c.a6(c.bn().count() > 0);
	}

, 
	df: function () {
		return new $.ig.RangeCategoryBucketCalculator(this);
	}
,
	$type: new $.ig.Type('RangeCategorySeriesView', $.ig.CategorySeriesView.prototype.$type)
}, true);

$.ig.util.defType('RangeAreaSeriesView', 'RangeCategorySeriesView', {

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
		init: function (a) {

			this.dp = new $.ig.Polyline();
			this.dq = new $.ig.Polygon();
			this.dr = new $.ig.Polyline();

			$.ig.RangeCategorySeriesView.prototype.init.call(this, a);
						this.dt(a);
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
	dp: null, 
	dq: null, 
	dr: null
, 
	dw: function () {
		this.dq.bn().clear();
		this.dp.bn().clear();
		this.dr.bn().clear();
	}

, 
	dx: function (a, b, c) {
		this.dn(this.dp, this.dq, this.dr, a, b, c);
		this.an();
	}

, 
	aw: function () {
		$.ig.SeriesView.prototype.aw.call(this);
		this.dq.__fill = this.u().actualBrush();
		this.dp.__stroke = this.u().actualOutline();
		this.dp.a7(this.u().thickness());
		this.dp.a8(this.u().dashArray());
		this.dp.a9(this.u().dashCap());
		this.dr.__stroke = this.u().actualOutline();
		this.dr.a7(this.u().thickness());
		this.dr.a8(this.u().dashArray());
		this.dr.a9(this.u().dashCap());
	}

, 
	ax: function () {
		$.ig.SeriesView.prototype.ax.call(this);
		var a = this.az();
		this.dq.__fill = a;
		this.dp.__stroke = a;
		this.dp.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
		this.dr.__stroke = a;
		this.dr.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (a.b()) {
			if (this.k && !b) {
				var c = this.b8(this.dt().yAxis());
				a.e($.ig.GradientDirection.prototype.bottomTop, c);
			}
			a.j(this.dq);
			a.k(this.dp);
			a.k(this.dr);
		}
	}

, 
	b5: function (a) {
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = new $.ig.PolyLineVisualData(1, "lowerShape", this.dp);
		b.tags().add("Lower");
		var c = new $.ig.PolyLineVisualData(1, "upperShape", this.dr);
		c.tags().add("Upper");
		c.tags().add("Main");
		var d = new $.ig.PolygonVisualData(1, "fillShape", this.dq);
		d.tags().add("Fill");
		a.shapes().add(b);
		a.shapes().add(c);
		a.shapes().add(d);
	}
,
	$type: new $.ig.Type('RangeAreaSeriesView', $.ig.RangeCategorySeriesView.prototype.$type)
}, true);

$.ig.util.defType('RangeCategoryFramePreparer', 'CategoryFramePreparerBase', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.RangeCategoryFramePreparer.prototype.init1.call(this, 1, a, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, a), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, a), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, a), $.ig.util.cast($.ig.IBucketizer.prototype.$type, a));
		}
, 
		init1: function (initNumber, a, b, c, d, e) {


			$.ig.CategoryFramePreparerBase.prototype.init1.call(this, 1, a, b, c, d, e);
						this.am(new $.ig.DefaultCategoryTrendlineHost());
				if ($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, a) !== null) {
					this.am($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, a));
				}
				this.an(new $.ig.DefaultHighLowValueProvider());
				if ($.ig.util.cast($.ig.IHasHighLowValueCategory.prototype.$type, a) !== null) {
					this.an($.ig.util.cast($.ig.IHasHighLowValueCategory.prototype.$type, a));
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
	v: function (a, b, c, d, e) {
		var f = b[0];
		var g = b[1];
		var h = b[2];
		if (!isNaN(f) && !isNaN(g) && !isNaN(h)) {
			a.f.add({__x: f, __y: (g + h) / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			this.e().updateMarkerTemplate(e, d);
			return true;
		}
		return false;
	}

, 
	ad: function (a, b, c, d) {
		var e = a;
		var f = e.u();
		var g = e.v();
		var h = this.z(f.item(b));
		var i = this.z(g.item(b));
		var j = Math.max(h, i);
		var k = Math.min(h, i);
		if (c) {
			e.h(k);
			e.i(j);

		} else {
			e.g(j);
			e.f(k);
		}
	}

, 
	ae: function (a, b, c) {
		var d = a;
		var e = d.u();
		var f = d.v();
		var g = this.z(e.item(b));
		var h = this.z(f.item(b));
		if (!isNaN(g)) {
			d.g(Math.max(d.g(), g));
			d.f(Math.min(d.f(), g));
		}
		if (!isNaN(h)) {
			d.g(Math.max(d.g(), h));
			d.f(Math.min(d.f(), h));
		}
	}

, 
	af: function (a, b) {
		var $self = this;
		var c = b;
		return (function () { var $ret = new Array();
		$ret.add($self.z(a));
		$ret.add(c.f());
		$ret.add(c.g()); return $ret;}());
	}

, 
	ah: function (a, b, c, d, e, f) {
		if (d) {
			b[0] = (b[0] + c);

		} else {
			b[0] = (a.r().getScaledValue(b[0], e) + c);
		}
		b[1] = a.t().getScaledValue(b[1], f);
		b[2] = a.t().getScaledValue(b[2], f);
	}

, 
	aj: function (a) {
		var b = new $.ig.HighLowValuesHolder();
		b.u(this.an().highColumn());
		b.v(this.an().lowColumn());
		return b;
	}
,
	$type: new $.ig.Type('RangeCategoryFramePreparer', $.ig.CategoryFramePreparerBase.prototype.$type)
}, true);


$.ig.util.defType('HighLowValuesHolder', 'ValuesHolder', {
	init: function () {

		$.ig.ValuesHolder.prototype.init.call(this);

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
	e: function () {
			if (this.u() == null || this.v() == null) {
				return 0;
			}
			return Math.min(this.u().count(), this.v().count());
	}
,
	$type: new $.ig.Type('HighLowValuesHolder', $.ig.ValuesHolder.prototype.$type)
}, true);

$.ig.util.defType('DefaultHighLowValueProvider', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	highColumn: function () {
			return new $.ig.List$1(Number, 0);
	}

, 
	lowColumn: function () {
			return new $.ig.List$1(Number, 0);
	}
,
	$type: new $.ig.Type('DefaultHighLowValueProvider', $.ig.Object.prototype.$type, [$.ig.IHasHighLowValueCategory.prototype.$type])
}, true);

$.ig.util.defType('RangeColumnSeries', 'HorizontalRangeCategorySeries', {

	ed: function () {
		return new $.ig.RangeColumnSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.RangeCategorySeries.prototype.ea.call(this, a);
		this.j8(a);
	}

, 
	_j8: null,
	j8: function (a) {
		if (arguments.length === 1) {
			this._j8 = a;
			return a;
		} else {
			return this._j8;
		}
	}

, 
		init: function () {


			$.ig.HorizontalRangeCategorySeries.prototype.init.call(this);
						this.a3($.ig.RangeColumnSeries.prototype.$type);
		}
, 
	radiusX: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RangeColumnSeries.prototype.radiusXProperty, a);
			return a;
		} else {
			return this.b($.ig.RangeColumnSeries.prototype.radiusXProperty);
		}
	}

, 
	radiusY: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.RangeColumnSeries.prototype.radiusYProperty, a);
			return a;
		} else {
			return this.b($.ig.RangeColumnSeries.prototype.radiusYProperty);
		}
	}

, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode2;
	}

, 
	eu: function (a, b) {
		$.ig.CategorySeries.prototype.eu.call(this, a, b);
		var c = b;
		if (a && c.du() != null) {
			c.du().g(0);
		}
	}

, 
	i6: function (a, b) {
		$.ig.RangeCategorySeries.prototype.i6.call(this, a, b);
		var c = $.ig.util.cast($.ig.RangeColumnSeriesView.prototype.$type, b);
		var d = a.d;
		var e = b.ac();
		var f = b.ab();
		var g = this.xAxis().gz(e, f);
		if (isNaN(g) || Number.isInfinity(g)) {
			c.du().g(0);
			return;
		}
		for (var h = 0; h < d.count(); ++h) {
			var i = d.__inner[h][0] - 0.5 * g;
			var j = Math.min(d.__inner[h][1], d.__inner[h][2]);
			var k = Math.max(d.__inner[h][1], d.__inner[h][2]);
			var l = c.du().item(h);
			l.v(g);
			l.w(Math.abs(k - j));
			c.d6(l, i, j);
		}
		c.du().g(d.count());
	}
,
	$type: new $.ig.Type('RangeColumnSeries', $.ig.HorizontalRangeCategorySeries.prototype.$type)
}, true);

$.ig.util.defType('RangeColumnSeriesView', 'RangeCategorySeriesView', {

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
		init: function (a) {

			var $self = this;

			$.ig.RangeCategorySeriesView.prototype.init.call(this, a);
						this.dt(a);
				this.du((function () { var $ret = new $.ig.Pool$1($.ig.Rectangle.prototype.$type);
				$ret.create($self.d2.on($self));
				$ret.activate($self.d3.on($self));
				$ret.disactivate($self.d4.on($self));
				$ret.destroy($self.d5.on($self)); return $ret;}()));
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
	ag: function () {
		var $self = this;
		$.ig.MarkerSeriesView.prototype.ag.call(this);
		this.dv(new $.ig.List$1($.ig.Rectangle.prototype.$type, 0));
		if (!this.ad()) {
			this.u().resolution(4);
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($.ig.LegendTemplates.prototype.l);
			$ret.measure($.ig.LegendTemplates.prototype.k); return $ret;}()));
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
	d2: function () {
		var a = new $.ig.Rectangle();
		this.dv().add(a);
		a.__visibility = $.ig.Visibility.prototype.collapsed;
		return a;
	}

, 
	d3: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	d4: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	d5: function (a) {
		this.dv().remove(a);
	}

, 
	d6: function (a, b, c) {
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
			for (var c = 0; c < this.dv().count(); c++) {
				var d = this.dv().__inner[c];
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
	b5: function (a) {
		var $self = this;
		$.ig.SeriesView.prototype.b5.call(this, a);
		var b = 0;
		var c = new $.ig.List$1($.ig.Rectangle.prototype.$type, 0);
		var e = this.du().h().getEnumerator();
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
	$type: new $.ig.Type('RangeColumnSeriesView', $.ig.RangeCategorySeriesView.prototype.$type)
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

$.ig.util.defType('PolygonVisualData', 'PrimitiveVisualData', {

	type: function () {
			return "Polygon";
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


			$.ig.PrimitiveVisualData.prototype.init.call(this, "polygon1");
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
	$type: new $.ig.Type('PolygonVisualData', $.ig.PrimitiveVisualData.prototype.$type)
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
$.ig.RangeCategorySeries.prototype.je = "LowMemberPath";
$.ig.RangeCategorySeries.prototype.jf = "LowColumn";
$.ig.RangeCategorySeries.prototype.jg = "HighMemberPath";
$.ig.RangeCategorySeries.prototype.jh = "HighColumn";
$.ig.RangeCategorySeries.prototype.lowMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.RangeCategorySeries.prototype.je, String, $.ig.RangeCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.RangeCategorySeries.prototype.$type, a)).ej($.ig.RangeCategorySeries.prototype.je, b.f(), b.e());
}));
$.ig.RangeCategorySeries.prototype.highMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.RangeCategorySeries.prototype.jg, String, $.ig.RangeCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.RangeCategorySeries.prototype.$type, a)).ej($.ig.RangeCategorySeries.prototype.jg, b.f(), b.e());
}));
$.ig.HorizontalRangeCategorySeries.prototype.jx = "XAxis";
$.ig.HorizontalRangeCategorySeries.prototype.jy = "YAxis";
$.ig.HorizontalRangeCategorySeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HorizontalRangeCategorySeries.prototype.jx, $.ig.CategoryAxisBase.prototype.$type, $.ig.HorizontalRangeCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.HorizontalRangeCategorySeries.prototype.$type, a)).ej($.ig.HorizontalRangeCategorySeries.prototype.jx, b.f(), b.e());
}));
$.ig.HorizontalRangeCategorySeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HorizontalRangeCategorySeries.prototype.jy, $.ig.NumericYAxis.prototype.$type, $.ig.HorizontalRangeCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.HorizontalRangeCategorySeries.prototype.$type, a)).ej($.ig.HorizontalRangeCategorySeries.prototype.jy, b.f(), b.e());
}));
$.ig.RangeColumnSeries.prototype.j3 = "RadiusX";
$.ig.RangeColumnSeries.prototype.j4 = "RadiusY";
$.ig.RangeColumnSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.RangeColumnSeries.prototype.j3, Number, $.ig.RangeColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.RangeColumnSeries.prototype.$type, a)).ej($.ig.RangeColumnSeries.prototype.j3, b.f(), b.e());
}));
$.ig.RangeColumnSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.RangeColumnSeries.prototype.j4, Number, $.ig.RangeColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.RangeColumnSeries.prototype.$type, a)).ej($.ig.RangeColumnSeries.prototype.j4, b.f(), b.e());
}));
$.ig.Legend.prototype.cc = "Orientation";

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['flattenTo', 'getBounds2', 'clipTo']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['asQueryable']]]);
$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);

