/*!
* Infragistics.Web.ClientUI infragistics.geographicmap_core.js 12.2.20122.1021
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









$.ig.util.defType('LinkedList$1', 'Object', {
	$t: null, 
	init: function ($t) {
		this.$t = $t
		this.$type = this.$type.specialize(this.$t);

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null
, 
	c: function () {
			return this.a;
	}
, 
	b: null
, 
	d: function () {
			return this.b;
	}

, 
	g: function (a) {
		if (this.a == null) {
			this.a = new $.ig.LinkedListNode$1(this.$t, 1, a);
			this.b = this.a;

		} else {
			var b = this.a;
			this.a = new $.ig.LinkedListNode$1(this.$t, 1, a);
			this.a.b = b;
			b.a = this.a;
		}
	}

, 
	h: function (a) {
		if (this.b == null) {
			this.a = new $.ig.LinkedListNode$1(this.$t, 1, a);
			this.b = this.a;

		} else {
			var b = this.b;
			this.b = new $.ig.LinkedListNode$1(this.$t, 1, a);
			this.b.a = b;
			b.b = this.b;
		}
	}

, 
	i: function (a) {
		if (this.a == a) {
			this.a = a.b;
			if (a.b != null) {
				a.b.a = null;
			}
		}
		if (this.b == a) {
			this.b = a.a;
			if (a.a != null) {
				a.a.b = null;
			}
		}
		if (a.a != null) {
			a.a.b = a.b;
		}
		if (a.b != null) {
			a.b.a = a.a;
		}
		a.b = null;
		a.a = null;
	}
,
	$type: new $.ig.Type('LinkedList$1', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LinkedListNode$1', 'Object', {
	$t: null
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
	a: null, 
	b: null
, 
		init: function ($t, initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
		}
, 
		init1: function ($t, initNumber, a) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.d(a);
		},
	$type: new $.ig.Type('LinkedListNode$1', $.ig.Object.prototype.$type)
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

























$.ig.util.defType('AsyncCompletedEventArgs', 'EventArgs', {
	a: null, 
	b: null, 
	c: null
, 
		init: function (a, b, c) {


			$.ig.EventArgs.prototype.init.call(this);
						this.b = b;
				this.a = a;
				this.c = c;
		}
, 
	error: function () {
			return this.a;
	}

, 
	cancelled: function () {
			return this.b;
	}

, 
	userState: function () {
			return this.c;
	}

, 
	d: function () {
		if (this.error() != null) {
			throw this.error();
		}
	}
,
	$type: new $.ig.Type('AsyncCompletedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);


$.ig.util.defType('Convert', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a) {
		return a;
	}

, 
	b: function (a) {
		return a;
	}

, 
	c: function (a) {
		if (a >= 0) {
			var b = Math.floor(a);
			var c = a - b;
			var d = Math.ceil(a) - a;
			if (c > d || ((c == d) && (b & 1) > 0)) {
				b++;
			}
			return b;

		} else {
			var e = Math.ceil(a);
			var f = e - a;
			var g = a - Math.floor(a);
			if (f > g || ((f == g) && (e & 1) > 0)) {
				e--;
			}
			return e;
		}
	}

, 
	d: function (a) {
		return parseInt(a);
	}
,
	$type: new $.ig.Type('Convert', $.ig.Object.prototype.$type)
}, true);





$.ig.util.defType('BinaryReader', 'Object', {
	__data: null, 
	a: null, 
	b: null
, 
	c: function () {
			return this.b < this.__data.length;
	}

, 
	d: function () {
			return this.b;
	}

, 
	e: function () {
			return this.__data.length;
	}

, 
		init: function (a, b) {

			this.__data = null;
			this.a = false;
			this.b = 0;

			$.ig.Object.prototype.init.call(this);
						this.__data = a;
				this.a = b;
		}
, 
	i: function (offset_) {
		return this.__data.charCodeAt(offset_) & 0xFF;
	}

, 
	j: function (offset_, a) {
		var b = new Array(a);
		for (var i_ = 0; i_ < a; i_++) {
			b[i_] = this.__data.charCodeAt(offset_ + i_) & 0xFF;
		}
		return b;
	}

, 
	k: function (offset_, length_) {
		var a = new Array(length_);
		for (var i_ = 0; i_ < length_; i_++) {
			a[i_] = this.__data.charCodeAt(offset_ + (length_ - 1 - i_)) & 0xFF;
		}
		return a;
	}

, 
	l: function () {
		var a = this.i(this.b);
		this.b = this.b + 1;
		return a;
	}

, 
	m: function (a) {
		var b = this.j(this.b, a);
		this.b = this.b + a;
		return b;
	}

, 
	n: function () {
		var a = 0;
		if (this.a) {
			a = a + (this.i(this.b) << 24);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 16);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 8);
			this.b = this.b + 1;
			a = a + this.i(this.b);
			this.b = this.b + 1;

		} else {
			a = a + this.i(this.b);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 8);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 16);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 24);
			this.b = this.b + 1;
		}
		return a;
	}

, 
	o: function () {
		var a = 0;
		if (this.a) {
			a = a + (this.i(this.b) << 8);
			this.b = this.b + 1;
			a = a + this.i(this.b);
			this.b = this.b + 1;

		} else {
			a = a + this.i(this.b);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 8);
			this.b = this.b + 1;
		}
		return a;
	}

, 
	p: function () {
		var a = 0;
		if (this.a) {
			a = a + (this.i(this.b) << 24);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 16);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 8);
			this.b = this.b + 1;
			a = a + this.i(this.b);
			this.b = this.b + 1;

		} else {
			a = a + this.i(this.b);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 8);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 16);
			this.b = this.b + 1;
			a = a + (this.i(this.b) << 24);
			this.b = this.b + 1;
		}
		if (a > 2147483647) {
			a = a - 4294967296;
		}
		return a;
	}

, 
	q: function () {
		var a = this.k(this.b, 8);
		this.b = this.b + 8;
		var b = a[0] >> 7;
		var c = 0;
		c = c + (a[1] >> 4);
		c = c + ((a[0] & 127) << 4);
		var d = 1;
		var e = a[1];
		var f = 1 / 2;
		var g = 0;
		var h = false;
		for (g = 5; g <= 8; g++) {
			if ((e & (1 << (8 - g))) > 0) {
				d = d + f;
				h = true;
			}
			f = f / 2;
		}
		for (var i = 2; i < 8; i++) {
			e = a[i];
			for (g = 1; g <= 8; g++) {
				if ((e & (1 << (8 - g))) > 0) {
					d = d + f;
					h = true;
				}
				f = f / 2;
			}
		}
		if (c == 0 && !h) {
			return 0;
		}
		if (c == 0 && h) {
			c = 1;
			d = d - 1;
		}
		if (c == 1860 && !h) {
			if (b == 1) {
				return $.ig.Number.prototype.nEGATIVE_INFINITY;

			} else {
				return $.ig.Number.prototype.pOSITIVE_INFINITY;
			}
		}
		if (c == 1860 && h) {
			return NaN;
		}
		var j = c - 1023;
		return Math.pow(-1, b) * Math.pow(2, j) * d;
	}

, 
	r: function () {
		var a = this.k(this.b, 4);
		this.b = this.b + 4;
		var b = a[0] >> 7;
		var c = 0;
		c = c + (a[1] >> 7);
		c = c + ((a[0] & 127) << 1);
		var d = 1;
		var e = a[1];
		var f = 1 / 2;
		var g = 0;
		var h = false;
		for (g = 2; g <= 8; g++) {
			if ((e & (1 << (8 - g))) > 0) {
				d = d + f;
				h = true;
			}
			f = f / 2;
		}
		for (var i = 2; i < 4; i++) {
			e = a[i];
			for (g = 1; g <= 8; g++) {
				if ((e & (1 << (8 - g))) > 0) {
					d = d + f;
					h = true;
				}
				f = f / 2;
			}
		}
		if (c == 0 && !h) {
			return 0;
		}
		if (c == 0 && h) {
			c = 1;
			d = d - 1;
		}
		if (c == 255 && !h) {
			if (b == 1) {
				return $.ig.Number.prototype.nEGATIVE_INFINITY;

			} else {
				return $.ig.Number.prototype.pOSITIVE_INFINITY;
			}
		}
		if (c == 255 && h) {
			return NaN;
		}
		var j = c - 127;
		return (Math.pow(-1, b)) * (Math.pow(2, j)) * d;
	}
,
	$type: new $.ig.Type('BinaryReader', $.ig.Object.prototype.$type)
}, true);











$.ig.util.defType('StringBuilder', 'Object', {

	_internal: null,
	internal: function (a) {
		if (arguments.length === 1) {
			this._internal = a;
			return a;
		} else {
			return this._internal;
		}
	}

, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this._internal = [];
		}
, 
	d: function (str_) {
		this._internal.push(str_);
		return this;
	}

, 
	e: function (a) {
		var str_ = a.toString();
		this._internal.push(str_);
		return this;
	}

, 
	f: function (chr_) {
		this._internal.push(chr_);
		return this;
	}

, 
	g: function (str_) {
		this._internal.push(str_ + String.fromCharCode(10));
		return this;
	}

, 
	h: function (index_, chr_) {
		this._internal.splice(index_, 0, chr_);
		return this;
	}

, 
	i: function (index_, str_) {
		this._internal.splice(index_, 0, str_);
		return this;
	}

, 
	j: function (startIndex_, length_) {
		this._internal.splice(startIndex_, length_);
		return this;
	}

, 
	toString: function () {
		return this._internal.join('');
	}
,
	$type: new $.ig.Type('StringBuilder', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('BinaryFileDownloader', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (uri_, callback_, errorCallback_) {
		$.ig.util.getBinary(uri_, callback_, errorCallback_);
	}
,
	$type: new $.ig.Type('BinaryFileDownloader', $.ig.Object.prototype.$type)
}, true);



$.ig.util.defType('Encoding', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null
, 
	uTF8: function () {
			if ($.ig.Encoding.prototype.a == null) {
				$.ig.Encoding.prototype.a = new $.ig.UTF8Encoding();
			}
			return $.ig.Encoding.prototype.a;
	}

, 
	getString: function (a, b, c) {
		return "";
	}
,
	$type: new $.ig.Type('Encoding', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('UTF8Encoding', 'Encoding', {
	init: function () {

		$.ig.Encoding.prototype.init.call(this);

	}
, 
	getString: function (bytes_, a, b) {
		var c = "";
		for (var i_ = a; i_ < b; i_++) {
			if (bytes_[i_] == 0) {
				break;
			}
			c = c + String.fromCharCode(bytes_[i_]);
		}
		return c;
	}
,
	$type: new $.ig.Type('UTF8Encoding', $.ig.Encoding.prototype.$type)
}, true);






$.ig.util.defType('Uri', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.value(a);
		}
, 
	_value: null,
	value: function (a) {
		if (arguments.length === 1) {
			this._value = a;
			return a;
		} else {
			return this._value;
		}
	}
,
	$type: new $.ig.Type('Uri', $.ig.Object.prototype.$type)
}, true);









$.ig.util.defType('Image', 'FrameworkElement', {
	init: function () {

		$.ig.FrameworkElement.prototype.init.call(this);

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
	$type: new $.ig.Type('Image', $.ig.FrameworkElement.prototype.$type)
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







$.ig.util.defType('IErrorBarCalculator', 'Object', {

		$type: new $.ig.Type('IErrorBarCalculator', null)
}, true);

























$.ig.util.defType('DependencyObjectNotifier', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

	}
, 
	f: function (a) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
	}
, 
	propertyChanged: null,
	$type: new $.ig.Type('DependencyObjectNotifier', $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);








$.ig.util.defType('XamMultiScaleTileSource', 'DependencyObject', {

		init: function (a, b, c, d, e) {


			$.ig.DependencyObject.prototype.init.call(this);
						this.k(a);
				this.l(b);
				this.m(c);
				this.n(d);
				this.o(e);
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
	e: null
, 
	z: function (a, b, c) {
		var d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
		this.aa(a, b, c, d);
		var e = null;
		if (d.count() > 0) {
			e = $.ig.util.cast($.ig.Uri.prototype.$type, d.__inner[0]);
		}
		return e;
	}

, 
	aa: function (a, b, c, d) {
	}

, 
	ab: function (a, b, c, d) {
		if (this.e != null) {
			this.e.c4(a, b, c, d);
		}
	}
,
	$type: new $.ig.Type('XamMultiScaleTileSource', $.ig.DependencyObject.prototype.$type)
}, true);

$.ig.util.defType('MapTileSource', 'XamMultiScaleTileSource', {

		init: function (a, b, c, d, e) {


			$.ig.XamMultiScaleTileSource.prototype.init.call(this, a, b, c, d, e);
		},
	$type: new $.ig.Type('MapTileSource', $.ig.XamMultiScaleTileSource.prototype.$type)
}, true);

$.ig.util.defType('BingMapsTileSource', 'MapTileSource', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.MapTileSource.prototype.init.call(this, 256 << 22, 256 << 22, 256, 256, 0);
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.MapTileSource.prototype.init.call(this, 256 << 22, 256 << 22, 256, 256, 0);
						this.tilePath(a);
				this.subDomains(b);
		}
, 
	tilePath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BingMapsTileSource.prototype.tilePathProperty, a);
			return a;
		} else {
			return this.b($.ig.BingMapsTileSource.prototype.tilePathProperty);
		}
	}

, 
	subDomains: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BingMapsTileSource.prototype.subDomainsProperty, a);
			return a;
		} else {
			return this.b($.ig.BingMapsTileSource.prototype.subDomainsProperty);
		}
	}

, 
	cultureName: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BingMapsTileSource.prototype.cultureNameProperty, a);
			return a;
		} else {
			return this.b($.ig.BingMapsTileSource.prototype.cultureNameProperty);
		}
	}

, 
	aa: function (a, b, c, d) {
		this.ac();
		if (this.tilePath() == null) {
			return;
		}
		a -= 8;
		if (a > 0) {
			var e = this.ad(a, b, c);
			var f = this.tilePath();
			f = f.replace("{culture}", this.cultureName());
			f = f.replace("{quadkey}", e);
			var g = $.ig.Number.prototype.parseInt(e.substr(e.length - 1, 1));
			f = f.replace("{subdomain}", this.subDomains().__inner[g]);
			d.add(new $.ig.Uri(f));
		}
	}

, 
	ac: function () {
	}

, 
	ad: function (a, b, c) {
		var d = new $.ig.StringBuilder();
		for (var e = a; e > 0; --e) {
			var f = '0';
			var g = 1 << (e - 1);
			if ((b & g) != 0) {
				f++;
			}
			if ((c & g) != 0) {
				f++;
				f++;
			}
			d.f(f);
		}
		return d.toString();
	}

, 
	ae: function (a, b) {
	}
,
	$type: new $.ig.Type('BingMapsTileSource', $.ig.MapTileSource.prototype.$type)
}, true);

$.ig.util.defType('CloudMadeTileSource', 'MapTileSource', {
	af: null
, 
		init: function () {


			$.ig.MapTileSource.prototype.init.call(this, 134217728, 134217728, 256, 256, 0);
						this.af = new $.ig.Random();
		}
, 
	key: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CloudMadeTileSource.prototype.keyProperty, a);
			return a;
		} else {
			return this.b($.ig.CloudMadeTileSource.prototype.keyProperty);
		}
	}

, 
	parameter: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CloudMadeTileSource.prototype.parameterProperty, a);
			return a;
		} else {
			return this.b($.ig.CloudMadeTileSource.prototype.parameterProperty);
		}
	}

, 
	aa: function (a, b, c, d) {
		var $self = this;
		var e = a - 8;
		if (e > 0) {
			var f = (function () { var $ret = new Array();
$ret.add("a");
$ret.add("b");
$ret.add("c"); return $ret;}());
			var g = $.ig.CloudMadeTileSource.prototype.ac;
			g = g.replace("{S}", f[this.af.b(f.length)]);
			g = g.replace("{K}", this.key() == null ? "" : this.key());
			g = g.replace("{P}", this.parameter() == null ? "" : this.parameter());
			g = g.replace("{Z}", e.toString());
			g = g.replace("{X}", b.toString());
			g = g.replace("{Y}", c.toString());
			d.add(new $.ig.Uri(g));
		}
	}
,
	$type: new $.ig.Type('CloudMadeTileSource', $.ig.MapTileSource.prototype.$type)
}, true);

$.ig.util.defType('OpenStreetMapTileSource', 'MapTileSource', {

		init: function () {


			$.ig.MapTileSource.prototype.init.call(this, 134217728, 134217728, 256, 256, 0);
		}
, 
	aa: function (a, b, c, d) {
		var e = a - 8;
		if (e > 0) {
			var f = $.ig.OpenStreetMapTileSource.prototype.ac;
			f = f.replace("{Z}", e.toString());
			f = f.replace("{X}", b.toString());
			f = f.replace("{Y}", c.toString());
			d.add(new $.ig.Uri(f));
		}
	}
,
	$type: new $.ig.Type('OpenStreetMapTileSource', $.ig.MapTileSource.prototype.$type)
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



$.ig.util.defType('PointCollectionUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	flattenTo: function (b, c) {
		var $self = this;
		if (b == null) {
			return;
		}
		b.clear();
		if (this.count() >= 2) {
			var f = $.ig.Flattener.prototype.c(this.count(), function (d) {
	return $self.item(d).__x;
}, function (e) {
	return $self.item(e).__y;
}, c);
			var h = f.getEnumerator();
			while (h.moveNext()) {
				var g = h.current();
				b.add(this.item(g));
			}
		}
	}

, 
	getBounds: function () {
		var b = Number.POSITIVE_INFINITY;
		var c = Number.POSITIVE_INFINITY;
		var d = Number.NEGATIVE_INFINITY;
		var e = Number.NEGATIVE_INFINITY;
		var g = this.getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			b = Math.min(b, f.__x);
			c = Math.min(c, f.__y);
			d = Math.max(d, f.__x);
			e = Math.max(e, f.__y);
		}
		if (Number.isInfinity(b) || Number.isInfinity(c) || Number.isInfinity(c) || Number.isInfinity(e)) {
			return $.ig.Rect.prototype.empty();
		}
		return new $.ig.Rect(0, b, c, d - b, e - c);
	}

, 
	getBounds11: function () {
		var b = $.ig.Rect.prototype.empty();
		var d = this.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			b.union(c.getBounds());
		}
		return b;
	}

, 
	getBounds2: function () {
		var b = Number.POSITIVE_INFINITY;
		var c = Number.POSITIVE_INFINITY;
		var d = Number.NEGATIVE_INFINITY;
		var e = Number.NEGATIVE_INFINITY;
		var f;
		for (var g = 0; g < this.count(); g++) {
			f = this.item(g);
			b = Math.min(b, f.__x);
			c = Math.min(c, f.__y);
			d = Math.max(d, f.__x);
			e = Math.max(e, f.__y);
		}
		if (Number.isInfinity(b) || Number.isInfinity(c) || Number.isInfinity(c) || Number.isInfinity(e)) {
			return $.ig.Rect.prototype.empty();
		}
		return new $.ig.Rect(0, b, c, d - b, e - c);
	}

, 
	getBounds3: function () {
		var b = $.ig.Rect.prototype.empty();
		var c;
		for (var d = 0; d < this.count(); d++) {
			c = this.__inner[d];
			b.union(c.getBounds2());
		}
		return b;
	}

, 
	getBounds41: function () {
		var b = $.ig.Rect.prototype.empty();
		var c;
		for (var d = 0; d < this.count(); d++) {
			c = this.__inner[d];
			b.union(c.getBounds2());
		}
		return b;
	}

, 
	clipTo: function (b, c) {
		var d = this.count();
		for (var e = 0; e < d; e++) {
			c.l(this.item(e));
		}
		c.h(null);
	}

, 
	getCentroid: function () {
		var b = 0;
		var c = 0;
		var d = 0;
		var f = this.getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			b += e.__x;
			c += e.__y;
			d += 1;
		}
		return {__x: b / d, __y: c / d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	toPointCollection: function () {
		var b = new $.ig.PointCollection(0);
		var d = this.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			b.add(c);
		}
		return b;
	}

, 
	toPointList: function () {
		var b = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		var d = this.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			b.add(c);
		}
		return b;
	}

, 
	toPointCollections: function () {
		var b = new $.ig.List$1($.ig.PointCollection.prototype.$type, 0);
		var c;
		var d = this.count();
		for (var e = 0; e < d; e++) {
			c = this.__inner[e];
			var f = new $.ig.PointCollection(1, c);
			b.add(f);
		}
		return b;
	}
,
	$type: new $.ig.Type('PointCollectionUtil', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PolygonUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
		if (a == null) {
			return false;
		}
		var c = a.count();
		if (c < 4) {
			return false;
		}
		var d = false;
		for (var e = 0		,f = c - 1; e < c; f = e++) {
			if (((a.item(e).__y > b.__y) != (a.item(f).__y > b.__y)) && (b.__x < (a.item(f).__x - a.item(e).__x) * (b.__y - a.item(e).__y) / (a.item(f).__y - a.item(e).__y) + a.item(e).__x)) {
				d = !d;
			}
		}
		return d;
	}
,
	$type: new $.ig.Type('PolygonUtil', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PolySimplification', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
		var c = a.c();
		var d = a.d();
		if (c.length == 0) {
			return 0;
		}
		var e = 0;
		var f = 0;
		var g = b * b;
		e++;
		var h;
		var i;
		var j;
		for (var k = 0; k < c.length; k++) {
			h = c[k] - c[f];
			i = d[k] - d[f];
			j = (h * h) + (i * i);
			if (j > g) {
				c[e] = c[k];
				d[e] = d[k];
				e++;
				f = k;
			}
		}
		return e;
	}

, 
	b: function (a, b) {
		var c = b.__x - a.__x;
		var d = b.__y - a.__y;
		return (c * c) + (d * d);
	}
,
	$type: new $.ig.Type('PolySimplification', $.ig.Object.prototype.$type)
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

$.ig.util.defType('StackPool$1', 'Object', {
	$t: null, 
	init: function ($t) {
		this.$t = $t
		this.$type = this.$type.specialize(this.$t);

		$.ig.Object.prototype.init.call(this);

		this.a = false;
		this.b = new $.ig.Dictionary$2(this.$t, $.ig.Object.prototype.$type, 0);
		this.c = new $.ig.Stack$1(this.$t);
		this.d = new $.ig.Stack$1(this.$t);
	}
, 
	p: function () {
		var a;
		if (this.c.b() != 0) {
			a = this.c.e();

		} else {
			a = this.d.b() != 0 ? this.d.e() : this.l()();
			this.n()(a);
		}
		this.b.add(a, null);
		return a;
	}

, 
	q: function (a) {
		this.b.remove(a);
		if (this.i()) {
			this.c.c(a);

		} else {
			this.m()(a);
			var b = $.ig.StackPool$1.prototype.ad(this.b.count());
			if (this.d.b() < b) {
				this.o()(a);

			} else {
				this.d.c(a);
			}
		}
	}

, 
	i: function (a) {
		if (arguments.length === 1) {
			if (this.a != a) {
				this.a = a;
				if (!this.a) {
					var b = $.ig.StackPool$1.prototype.ad(this.b.count());
					while (this.c.b() > 0 && this.d.b() <= b) {
						var c = this.c.e();
						this.m()(c);
						this.d.c(c);
					}
					while (this.c.b() > 0) {
						var d = this.c.e();
						this.m()(d);
						this.o()(d);
					}
					while (this.d.b() > b) {
						this.o()(this.d.e());
					}
				}
			}
			return a;
		} else {
			return this.a;
		}
	}
, 
	a: null
, 
	j: function () {
			return this.b.count();
	}

, 
	k: function () {
			return this.d.b();
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
	ad: function (a) {
		var b = 2;
		while (a > b) {
			b = b << 1;
		}
		return b;
	}
, 
	b: null, 
	c: null, 
	d: null,
	$type: new $.ig.Type('StackPool$1', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Tile', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null, 
	f: null
, 
	g: function () {
			var b = Math.pow(2, -this.c);
			var c = Math.pow(2, -this.c);
			return new $.ig.Rect(0, this.a * b, this.b * c, b, c);
	}
,
	$type: new $.ig.Type('Tile', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('WriteableBitmap', 'Object', {

		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.e(a);
				this.f(b);
				this.h($.ig.Rect.prototype.empty());
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
	$type: new $.ig.Type('WriteableBitmap', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IMapRenderDeferralHandler', 'Object', {

		$type: new $.ig.Type('IMapRenderDeferralHandler', null)
}, true);

$.ig.util.defType('XamMultiScaleImage', 'Control', {

		init: function () {

			this.bn = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
			this.bo = false;
			this.bp = new $.ig.List$1($.ig.Pair$2.prototype.$type.specialize($.ig.Tile.prototype.$type, $.ig.WriteableBitmap.prototype.$type), 0);
			this.bq = new $.ig.List$1($.ig.Tile.prototype.$type, 0);

			$.ig.Control.prototype.init.call(this);
						this.ce($.ig.Rect.prototype.empty());
				this.cf(new $.ig.CanvasRenderScheduler());
				this.b3(new $.ig.XamMultiScaleImageView(this));
				this.a3($.ig.XamMultiScaleImage.prototype.$type);
				this.b7(this.b6());
				this.b9(this.b8());
		}, 
	bc: null
, 
	_b3: null,
	b3: function (a) {
		if (arguments.length === 1) {
			this._b3 = a;
			return a;
		} else {
			return this._b3;
		}
	}
, 
	bd: null
, 
	b4: function (a) {
		if (arguments.length === 1) {
			if (this.bd != null) {
				this.bd.unRegister(this);
			}
			this.bd = a;
			if (this.bd != null) {
				this.bd.register(this, this.c8.on(this));
			}
			return a;
		} else {
			return this.bd;
		}
	}

, 
	b5: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamMultiScaleImage.prototype.be, a);
			return a;
		} else {
			return this.b($.ig.XamMultiScaleImage.prototype.be);
		}
	}

, 
	b6: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamMultiScaleImage.prototype.bf, a);
			return a;
		} else {
			return this.b($.ig.XamMultiScaleImage.prototype.bf);
		}
	}

, 
	_b7: null,
	b7: function (a) {
		if (arguments.length === 1) {
			this._b7 = a;
			return a;
		} else {
			return this._b7;
		}
	}

, 
	b8: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamMultiScaleImage.prototype.bg, a);
			return a;
		} else {
			return this.b($.ig.XamMultiScaleImage.prototype.bg);
		}
	}

, 
	_b9: null,
	b9: function (a) {
		if (arguments.length === 1) {
			this._b9 = a;
			return a;
		} else {
			return this._b9;
		}
	}

, 
	ca: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamMultiScaleImage.prototype.bh, a);
			return a;
		} else {
			return this.b($.ig.XamMultiScaleImage.prototype.bh);
		}
	}

, 
	cb: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamMultiScaleImage.prototype.bi, a);
			return a;
		} else {
			return this.b($.ig.XamMultiScaleImage.prototype.bi);
		}
	}
, 
	propertyChanged: null
, 
	cy: function (a) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, a);
		}
		switch (a.propertyName()) {
			case $.ig.XamMultiScaleImage.prototype.a7:
				if (this.b5() != null) {
					this.b5().e = this;
				}
				this.db();
				this.c3();
				this.c9();
				break;
			case $.ig.XamMultiScaleImage.prototype.a8:
				this.c5();
				break;
			case $.ig.XamMultiScaleImage.prototype.a9:
				this.c5();
				break;
			case $.ig.XamMultiScaleImage.prototype.ba:
				if (!this.ca()) {
					this.b3().an();
				}
				break;
		}
	}

, 
	_cc: null,
	cc: function (a) {
		if (arguments.length === 1) {
			this._cc = a;
			return a;
		} else {
			return this._cc;
		}
	}

, 
	_cd: null,
	cd: function (a) {
		if (arguments.length === 1) {
			this._cd = a;
			return a;
		} else {
			return this._cd;
		}
	}

, 
	c3: function () {
		this.da();
		if (this.b5() != null) {
			this.cc($.ig.Convert.prototype.c(Math.logBase(this.b5().m(), 2)));
			this.cd($.ig.Convert.prototype.c(Math.logBase(this.b5().k(), 2)));
		}
	}

, 
	c4: function (a, b, c, d) {
		this.db();
		this.c3();
		this.c9();
	}
, 
	bk: null, 
	bl: null, 
	bm: null
, 
	c5: function () {
		if (this.ca()) {
			this.bk = $.ig.Date.prototype.now();
			this.bl = this.b7();
			this.bm = this.b9();
			this.b3().aj();

		} else {
			this.b7(this.b6());
			this.b9(this.b8());
			this.c9();
		}
	}

, 
	c6: function () {
		var a = 2;
		var b = $.ig.Date.prototype.now().getTime() - this.bk.getTime();
		var c = b / 1000;
		var d = $.ig.MathUtil.prototype.i((c) / a, 0, 1);
		var e = this.cb() != null ? this.cb().ease(d) : d;
		var f = 1 - e;
		this.b9(this.bm * f + this.b8() * e);
		this.b7({__x: this.bl.__x * f + this.b6().__x * e, __y: this.bl.__y * f + this.b6().__y * e, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		if (d >= 1) {
			this.b3().ak();

		} else {
		}
		this.c9();
	}
, 
	bn: null
, 
	c7: function (a, b, c) {
		for (var d = 0; d < this.bn.count(); ++d) {
			if (this.bn.__inner[d].a == a && this.bn.__inner[d].b == b && this.bn.__inner[d].c == c) {
				return d;
			}
		}
		return -1;
	}

, 
	c8: function (a) {
		var $self = this;
		this.bo = false;
		if (this.b5() == null || !this.b3().ah() || this.ce().width() == 0 || this.ce().height() == 0) {
			return;
		}
		var b = Math.ceil(this.ce().width() / this.b5().m());
		var c = Math.max(1, Math.floor(-Math.logBase(this.b9() / b, 2)));
		if (c > this.cd()) {
			return;
		}
		var d = Math.round(Math.pow(2, c));
		var e = this.b9();
		var f = this.ce().height() * e / this.ce().width();
		var g = this.b5().k() / Math.pow(2, c);
		var h = this.b5().l() / Math.pow(2, c);
		var i = Math.max(Math.floor((this.b7().__x * this.b5().k()) / g), 0);
		var j = Math.min(Math.ceil(((this.b7().__x + e) * this.b5().k()) / g), d);
		var k = Math.max(Math.floor((this.b7().__y * this.b5().l()) / h), 0);
		var l = Math.min(Math.ceil(((this.b7().__y + f) * this.b5().k()) / h), d);
		var m = ((i * g) - (this.b7().__x * this.b5().k())) / g;
		var n = ((k * h) - (this.b7().__y * this.b5().l())) / h;
		var o = (e * this.b5().k() / g) * (this.b5().m() / this.ce().width());
		var p = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
		for (var q = i; q < j; ++q) {
			for (var r = k; r < l; ++r) {
				var s = this.c7(q, r, c);
				if (s >= 0) {
					p.add(this.bn.__inner[s]);
					this.bn.removeAt(s);

				} else {
					p.add((function () { var $ret = new $.ig.Tile();
					$ret.a = q;
					$ret.b = r;
					$ret.c = c; return $ret;}()));
				}
			}
		}
		this.bc.i(true);
		this.da();
		this.bn = p;
		for (var t = 0; t < this.bn.count(); ++t) {
			if (this.bn.__inner[t].d == null) {
				$.ig.Debug.prototype.c(this.bn.__inner[t].e == null);
				this.bn.__inner[t].d = this.bc.p();
				this.bn.__inner[t].d.__opacity = 1;
				this.b3().af(this.bn.__inner[t].d);
				var u = this.dc(this.bn.__inner[t]);
				if (u != null) {
					this.bn.__inner[t].d.a3(u);

				} else {
					var v = null;
					var w = (function () { var $ret = new $.ig.Tile();
$ret.a = $self.bn.__inner[t].a;
$ret.b = $self.bn.__inner[t].b;
$ret.c = $self.bn.__inner[t].c; return $ret;}());
					while (w.c >= 0 && v == null) {
						w.a = w.a >> 1;
						w.b = w.b >> 1;
						w.c = w.c - 1;
						v = this.dc(w);
					}
					if (v != null) {
						var x = Math.pow(2, this.bn.__inner[t].c - w.c);
						var y = $.ig.intDivide(256, x);
						var z = y * (this.bn.__inner[t].a % x);
						var aa = y * (this.bn.__inner[t].b % x);
						this.bn.__inner[t].e = this.bc.p();
						this.bn.__inner[t].e.__opacity = 1;
						this.b3().ag(this.bn.__inner[t].e);
						u = this.b3().ae(y, v, z, aa);
						this.bn.__inner[t].e.a3(u);
					}
					this.b3().ac(this.bn.__inner[t]);
				}
			}
			var ab = this.b5().m() / o;
			var ac = this.b5().n() / o;
			var ad = (this.bn.__inner[t].a - i + m) * ab;
			var ae = (this.bn.__inner[t].b - k + n) * ac;
			this.b3().aa(this.bn.__inner[t].d, ad, ae);
			this.bn.__inner[t].d.v(ab + 0.5);
			this.bn.__inner[t].d.w(ac + 0.5);
			if (this.bn.__inner[t].e != null) {
				this.b3().aa(this.bn.__inner[t].e, ad, ae);
				this.bn.__inner[t].e.v(ab + 0.5);
				this.bn.__inner[t].e.w(ac + 0.5);
			}
		}
		this.bc.i(false);
		this.b3().aw();
	}
, 
	bo: null
, 
	c9: function () {
		if (this.b5() == null || !this.b3().ah() || this.ce().width() == 0 || this.ce().height() == 0) {
			return;
		}
		if (this.bo) {
			return;
		}
		this.bo = true;
		this.b3().ai(this.c8.on(this));
	}

, 
	da: function () {
		for (var a = 0; a < this.bn.count(); ++a) {
			this.b3().ab(this.bn.__inner[a]);
			this.df(this.bn.__inner[a]);
			if (this.bn.__inner[a].d != null) {
				this.bc.q(this.bn.__inner[a].d);
				this.bn.__inner[a].d.a3(null);
				this.bn.__inner[a].d = null;
			}
			$.ig.Debug.prototype.c(this.bn.__inner[a].d == null);
			$.ig.Debug.prototype.c(this.bn.__inner[a].e == null);
		}
	}

, 
	db: function () {
		this.bp.clear();
	}

, 
	dc: function (a) {
		for (var b = 0; b < this.bp.count(); ++b) {
			if (this.bp.__inner[b].c().a == a.a && this.bp.__inner[b].c().b == a.b && this.bp.__inner[b].c().c == a.c) {
				return this.bp.__inner[b].d();
			}
		}
		return null;
	}

, 
	dd: function (a, b) {
		this.bp.add(new $.ig.Pair$2($.ig.Tile.prototype.$type, $.ig.WriteableBitmap.prototype.$type, a, b));
	}
, 
	bp: null, 
	bq: null
, 
	de: function (a) {
		$.ig.Debug.prototype.c(a.d != null);
		if (a.e != null) {
			a.f = $.ig.Date.prototype.now();
			this.bq.add(a);
			this.b3().al();
		}
	}

, 
	df: function (a) {
		if (a.e != null) {
			this.bc.q(a.e);
			a.e.a3(null);
			a.e = null;
			for (var b = 0; b < this.bq.count(); ++b) {
				if (this.bq.__inner[b] == a) {
					this.bq.removeAt(b);
					break;
				}
			}
			if (this.bq.count() == 0) {
				this.b3().am();
			}
			$.ig.Debug.prototype.c(a.e == null);
		}
	}

, 
	dg: function () {
		var a = $.ig.Date.prototype.now();
		var b = 0.5;
		for (var c = 0; c < this.bq.count(); ) {
			var d = a.getTime() - this.bq.__inner[c].f.getTime();
			var e = d / 1000;
			var f = (e) / b;
			f = $.ig.MathUtil.prototype.i(f, 0, 1);
			this.bq.__inner[c].e.__opacity = 1 - f;
			if (f >= 1) {
				this.bc.q(this.bq.__inner[c].e);
				this.bq.__inner[c].e.a3(null);
				this.bq.__inner[c].e = null;
				this.bq.removeAt(c);

			} else {
				++c;
			}
			this.b3().a0();
		}
		if (this.bq.count() == 0) {
			this.b3().am();
		}
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
	dj: function () {
		this.b9(this.b8());
		this.b7(this.b6());
		this.c9();
	}

, 
	dk: function (a) {
		this.b3().au(a);
	}

, 
	dl: function (a) {
		this.b3().a1(a);
	}

, 
	dm: function (a) {
		this.b3().a2(a);
	}

, 
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
	$type: new $.ig.Type('XamMultiScaleImage', $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('Pair$2', 'Object', {
	$t1: null, 
	$t2: null
, 
		init: function ($t1, $t2, a, b) {


			this.$t1 = $t1
			this.$t2 = $t2
			this.$type = this.$type.specialize(this.$t1, this.$t2);
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
	$type: new $.ig.Type('Pair$2', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IEasingFunction', 'Object', {

		$type: new $.ig.Type('IEasingFunction', null)
}, true);

$.ig.util.defType('XamMultiScaleImageView', 'Object', {

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
		init: function (a) {

			var $self = this;
			this.b = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
			this.c = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
			this.d = $.ig.XamMultiScaleImageView.prototype.a;
			this.e = $.ig.XamMultiScaleImageView.prototype.a;
			this.f = $.ig.Rect.prototype.empty();

			$.ig.Object.prototype.init.call(this);
						this.n(a);
				this.n().cf().m(this);
				this.o(new $.ig.List$1($.ig.Image.prototype.$type, 0));
				this.n().bc = (function () { var $ret = new $.ig.StackPool$1($.ig.Image.prototype.$type);
				$ret.l($self.w.on($self));
				$ret.n($self.x.on($self));
				$ret.m($self.y.on($self));
				$ret.o($self.z.on($self)); return $ret;}());
				for (var b = 0; b < 4; ++b) {
					this.c.add(null);
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
	w: function () {
		return new $.ig.Image();
	}

, 
	x: function (a) {
		this.o().add(a);
	}

, 
	y: function (a) {
		this.o().remove(a);
	}

, 
	z: function (a) {
	}

, 
	aa: function (a, b, c) {
		a.y(b);
		a.x(c);
	}

, 
	ab: function (a) {
		for (var b = 0; b < this.c.count(); ++b) {
			if (a == this.c.__inner[b]) {
				if (a.d != null && a.d.a3() != null) {
					var c = a.d.a3();
					var d = c.g();
					var e = $(d);
					e.unbind("load");
					d.src = null;
				}
				this.c.__inner[b] = null;
				return;
			}
		}
		for (var f = 0; f < this.b.count(); ++f) {
			if (this.b.__inner[f] == a) {
				this.b.removeAt(f);
				break;
			}
		}
	}

, 
	ac: function (a) {
		var $self = this;
		this.b.add(a);
		this.b.t(function (b, c) {
			var d = 0;
			var e = 0;
			if (b.e != null) {
				d = (b.e.a3()).e();
			}
			if (c.e != null) {
				e = (c.e.a3()).e();
			}
			if (d < e) {
				return -1;
			} else if (d > e) {
				return 1;
			}
			return 0;
		});
		this.ad();
	}

, 
	ad: function () {
		var index_ = -1;
		if (this.b.count() > 0) {
			for (var a = 0; a < this.c.count(); ++a) {
				if (this.c.__inner[a] == null) {
					index_ = a;
					break;
				}
			}
		}
		if (index_ >= 0) {
			this.c.__inner[index_] = this.b.__inner[0];
			var b = new $.ig.WriteableBitmap(this.n().b5().m(), this.n().b5().n());
			this.c.__inner[index_].d.a3(b);
			var ele_ = $("<img></img>");
			var c = ele_[0];
			b.g(c);
			var self_ = this;
			ele_.bind('load readystatechange', function(e) { if (this.complete || (this.readyState == 'complete' && e.type == 'readystatechange')) { self_.downloadCompleted(e, index_) }});
			this.b.removeAt(0);
			var d = this.n().b5().z(this.c.__inner[index_].c + 8, this.c.__inner[index_].a, this.c.__inner[index_].b);
			c.src = d.value();
		}
	}
, 
	b: null, 
	c: null
, 
	downloadCompleted: function (a, b) {
		var c = this.c.__inner[b];
		if (c == null || c.d == null || c.d.a3() == null || (c.d.a3()).g() == null || !((c.d.a3()).g()).complete) {
			return;
		}
		this.c.__inner[b] = null;
		this.n().dd(c, c.d.a3());
		if (c.d != null) {
			this.n().de(c);
		}
		this.ad();
		this.ax();
	}

, 
	ae: function (a, b, c, d) {
		var e = new $.ig.WriteableBitmap(a, a);
		e.g(b.g());
		if (!b.h().isEmpty()) {
			c += Math.round(b.h().left());
			d += Math.round(b.h().top());
		}
		e.h(new $.ig.Rect(0, c, d, a, a));
		return e;
	}

, 
	af: function (a) {
		a.z(0);
	}

, 
	ag: function (a) {
		a.z(1);
	}

, 
	ah: function () {
		return true;
	}

, 
	ai: function (a) {
		if (this.n().b4() != null) {
			this.n().b4().deferredRefresh();

		} else {
			window.setTimeout(a, 0);
		}
	}
, 
	d: null, 
	e: null
, 
	aj: function () {
		if (this.d == $.ig.XamMultiScaleImageView.prototype.a) {
			this.d = window.setInterval(this.n().c6.on(this.n()), 50);
		}
	}

, 
	ak: function () {
		if (this.d != $.ig.XamMultiScaleImageView.prototype.a) {
			window.clearInterval(this.d);
			this.d = $.ig.XamMultiScaleImageView.prototype.a;
		}
	}

, 
	al: function () {
		if (this.e == $.ig.XamMultiScaleImageView.prototype.a) {
			this.e = window.setInterval(this.n().dg.on(this.n()), 50);
		}
	}

, 
	am: function () {
		if (this.e != $.ig.XamMultiScaleImageView.prototype.a) {
			window.clearInterval(this.e);
			this.e = $.ig.XamMultiScaleImageView.prototype.a;
		}
	}

, 
	an: function () {
		if (this.d != $.ig.XamMultiScaleImageView.prototype.a) {
			this.am();
			this.n().dj();
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
	au: function (a) {
		this.p($(a));
		this.p().css("position", "relative");
		this.q($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.p().append(this.q());
		this.r(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.q()[0]).getContext("2d")));
		this.av(this.p().width(), this.p().height());
	}

, 
	av: function (a, b) {
		this.q().attr("width", a.toString());
		this.q().attr("height", b.toString());
		this.n().ce(new $.ig.Rect(0, 0, 0, a, b));
		this.n().c9();
	}

, 
	aw: function () {
		this.ax();
	}

, 
	index: function () {
			return 0;
	}

, 
	postRender: function () {
	}

, 
	_isDirty: null,
	isDirty: function (a) {
		if (arguments.length === 1) {
			this._isDirty = a;
			return a;
		} else {
			return this._isDirty;
		}
	}

, 
	ax: function () {
		if (this.r() == null) {
			return;
		}
		if (!this.isDirty()) {
			this.isDirty(true);
			this.n().cf().o();
		}
	}

, 
	undirty: function (a) {
		this.isDirty(false);
		this.ay();
	}
, 
	f: null
, 
	ay: function () {
		if (!this.f.isEmpty()) {
			this.r().t(this.f.left(), this.f.top(), this.f.width(), this.f.height());
		}
		this.f = this.n().ce();
		for (var a = 0; a < this.o().count(); a++) {
			var b = this.o().__inner[a];
			if (b.z() == 0) {
				this.az(b);
			}
		}
		for (var c = 0; c < this.o().count(); c++) {
			var d = this.o().__inner[c];
			if (d.z() == 1) {
				this.az(d);
			}
		}
	}

, 
	az: function (a) {
		this.r().z(a.__opacity);
		var b = a.a3();
		if (b == null || b.g() == null) {
			return;
		}
		if (!b.h().isEmpty()) {
			if (b.h().width() < 1 || b.h().height() < 1) {
				return;
			}
			this.r().u(b.g(), b.h().left(), b.h().top(), b.h().width(), b.h().height(), Math.round(a.y() + this.n().ce().left()), Math.round(a.x() + this.n().ce().top()), a.v(), a.w());

		} else {
			this.r().v(b.g(), Math.round(a.y() + this.n().ce().left()), Math.round(a.x() + this.n().ce().top()), a.v(), a.w());
		}
		this.r().z(1);
	}

, 
	a0: function () {
		this.ax();
	}

, 
	a1: function (a) {
		this.r(a);
		this.ax();
	}

, 
	a2: function (a) {
		this.n().ce(a);
		this.n().c9();
	}
,
	$type: new $.ig.Type('XamMultiScaleImageView', $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type])
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
$.ig.BingMapsTileSource.prototype.tilePathProperty = $.ig.DependencyProperty.prototype.l("TilePath", String, $.ig.BingMapsTileSource.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsTileSource.prototype.ae));
$.ig.BingMapsTileSource.prototype.subDomainsProperty = $.ig.DependencyProperty.prototype.l("SubDomains", $.ig.ObservableCollection$1.prototype.$type.specialize(String), $.ig.BingMapsTileSource.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsTileSource.prototype.ae));
$.ig.BingMapsTileSource.prototype.cultureNameProperty = $.ig.DependencyProperty.prototype.l("CultureName", String, $.ig.BingMapsTileSource.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsTileSource.prototype.ae));
$.ig.CloudMadeTileSource.prototype.ac = "http://{S}.tile.cloudmade.com/{K}/{P}/256/{Z}/{X}/{Y}.png";
$.ig.CloudMadeTileSource.prototype.ad = "Key";
$.ig.CloudMadeTileSource.prototype.ae = "Parameter";
$.ig.CloudMadeTileSource.prototype.keyProperty = $.ig.DependencyProperty.prototype.l($.ig.CloudMadeTileSource.prototype.ad, String, $.ig.CloudMadeTileSource.prototype.$type, new $.ig.PropertyMetadata(0, null));
$.ig.CloudMadeTileSource.prototype.parameterProperty = $.ig.DependencyProperty.prototype.l($.ig.CloudMadeTileSource.prototype.ae, String, $.ig.CloudMadeTileSource.prototype.$type, new $.ig.PropertyMetadata(0, null));
$.ig.OpenStreetMapTileSource.prototype.ac = "http://tile.openstreetmap.org/{Z}/{X}/{Y}.png";
$.ig.SmartPlaceableWrapper$1.prototype.b = [$.ig.SmartPosition.prototype.centerCenter];
$.ig.SmartPlaceableWrapper$1.prototype.c = [$.ig.SmartPosition.prototype.centerCenter, $.ig.SmartPosition.prototype.rightCenter, $.ig.SmartPosition.prototype.rightTop, $.ig.SmartPosition.prototype.centerTop, $.ig.SmartPosition.prototype.rightBottom, $.ig.SmartPosition.prototype.centerBottom, $.ig.SmartPosition.prototype.leftTop, $.ig.SmartPosition.prototype.leftCenter, $.ig.SmartPosition.prototype.leftBottom];
$.ig.XamMultiScaleImage.prototype.a7 = "Source";
$.ig.XamMultiScaleImage.prototype.a8 = "ViewportOrigin";
$.ig.XamMultiScaleImage.prototype.a9 = "ViewportWidth";
$.ig.XamMultiScaleImage.prototype.ba = "UseSprings";
$.ig.XamMultiScaleImage.prototype.bb = "SpringsEasingFunction";
$.ig.XamMultiScaleImage.prototype.be = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.a7, $.ig.XamMultiScaleTileSource.prototype.$type, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).cy(new $.ig.PropertyChangedEventArgs$1($.ig.XamMultiScaleTileSource.prototype.$type, $.ig.XamMultiScaleImage.prototype.a7, $.ig.util.cast($.ig.XamMultiScaleTileSource.prototype.$type, b.f()), $.ig.util.cast($.ig.XamMultiScaleTileSource.prototype.$type, b.e())));
}));
$.ig.XamMultiScaleImage.prototype.bf = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.a8, $.ig.Point.prototype.$type, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, function (a, b) {
	(a).cy(new $.ig.PropertyChangedEventArgs$1($.ig.Point.prototype.$type, $.ig.XamMultiScaleImage.prototype.a8, b.f(), b.e()));
}));
$.ig.XamMultiScaleImage.prototype.bg = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.a9, Number, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (a, b) {
	(a).cy(new $.ig.PropertyChangedEventArgs$1(Number, $.ig.XamMultiScaleImage.prototype.a9, b.f(), b.e()));
}));
$.ig.XamMultiScaleImage.prototype.bh = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.ba, $.ig.Boolean.prototype.$type, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	(a).cy(new $.ig.PropertyChangedEventArgs$1($.ig.Boolean.prototype.$type, $.ig.XamMultiScaleImage.prototype.ba, b.f(), b.e()));
}));
$.ig.XamMultiScaleImage.prototype.bi = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.bb, $.ig.IEasingFunction.prototype.$type, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).cy(new $.ig.PropertyChangedEventArgs$1($.ig.IEasingFunction.prototype.$type, $.ig.XamMultiScaleImage.prototype.bb, b.f(), b.e()));
}));
$.ig.XamMultiScaleImageView.prototype.a = -1;

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
$.ig.DefaultFlattener.prototype.a = 512;
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

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']], [[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['flattenTo', 'getBounds2', 'clipTo']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['asQueryable']]]);
$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);




// Declare empty types
$.ig = $.ig || {};
$.ig.util.bulkDefine(["SphericalMercatorHorizontalScaler", 
"SphericalMercatorVerticalScaler", 
"ColorScale", 
"ColorScaleInterpolationMode", 
"CustomPaletteColorScale", 
"GeographicMapImagery", 
"BingMapsMapImagery", 
"GeographicMapImageryView", 
"BingMapsMapImageryView", 
"CloudMadeMapImagery", 
"CloudMadeMapImageryView", 
"OpenStreetMapImagery", 
"HostSeriesView$1", 
"GeographicProportionalSymbolSeriesView", 
"GeographicMapSeriesHost$1", 
"GeographicXYTriangulatingSeries", 
"GeographicContourLineSeries", 
"GeographicXYTriangulatingSeriesView", 
"GeographicContourLineSeriesView", 
"GeographicHighDensityScatterSeries", 
"GeographicHighDensityScatterSeriesView", 
"GeographicShapeSeriesBase", 
"GeographicPolylineSeries", 
"GeographicProportionalSymbolSeries", 
"GeographicScatterAreaSeries", 
"GeographicScatterAreaSeriesView", 
"GeographicShapeSeries", 
"GeographicShapeSeriesBaseView", 
"GeographicShapeSeriesView", 
"GeographicSymbolSeries", 
"GeographicSymbolSeriesView", 
"XYTriangulatingSeries", 
"ContourLineSeries", 
"PolylineBuilder", 
"ContourBuilder", 
"ContourLineSeriesView", 
"ContourValueResolver", 
"LinearContourValueResolver", 
"ShapeSeriesBase", 
"PolylineSeries", 
"ShapeSeriesViewBase", 
"PolylineSeriesView", 
"ScatterAreaSeries", 
"TriangleRasterizer", 
"ScatterAreaSeriesView", 
"ShapeSeries", 
"ShapeAxisInfoCache", 
"FlattenedShape", 
"ShapeSeriesView", 
"ShapeHitRegion", 
"ShapefileConverter", 
"ShapefileRecord", 
"ShapeFileUtil", 
"Header", 
"XBaseDataType", 
"XBaseField", 
"ShapeType", 
"StyleSelector", 
"ItfConverter", 
"Triangle", 
"TriangulationSource", 
"TriangulatorContext", 
"Triangulator", 
"TriangulationStatusEventHandler", 
"TriangulationStatusEventArgs", 
"HalfEdge", 
"HalfEdgeSet", 
"EdgeComparer", 
"PointTester", 
"TriangulationSourcePointRecord", 
"XamGeographicMap", 
"XamGeographicMapView", 
"TestEnum", 
"AxisLabelPanelBaseView", 
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
$.ig.util.defType('ShapeType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('ShapeType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XBaseDataType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('XBaseDataType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ColorScaleInterpolationMode', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('ColorScaleInterpolationMode', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SphericalMercatorHorizontalScaler', 'HorizontalLinearScaler', {
	aj: null
, 
		init: function () {


			$.ig.HorizontalLinearScaler.prototype.init.call(this);
						this.aj = new $.ig.Rect(0, 0, 0, 1, 1);
		}
, 
	ab: function (a, b) {
		if (!b.c.isEmpty()) {
			var c = a * b.a.width() + b.a.left() * b.b.width();
			var d = this.ah(c, this.aj, b.c, b.d);
			return d;

		} else {
			return this.ah(a, b.a, b.b, b.d);
		}
	}

, 
	ac: function (a, b) {
		if (!b.c.isEmpty()) {
			var c = this.ai(a, this.aj, b.c, b.d);
			var d = (c - (b.a.left() * b.b.width())) / b.a.width();
			return d;

		} else {
			return this.ai(a, b.a, b.b, b.d);
		}
	}

, 
	ak: function (values_) {
		var a = $.isArray(values_) ? values_ : null;;
		return a;
		return null;
	}

, 
	ae: function (a, b, c, d) {
		var e;
		var f = d.a;
		var g = d.b;
		var h = d.c;
		var i = d.d;
		var j = !h.isEmpty();
		var k = this.p();
		var l = this.i;
		var m = h.left();
		var n = h.width();
		var o = f.left();
		var p = f.width();
		var q = g.left();
		var r = g.width();
		var s = this.aj.left();
		var t = this.aj.width();
		var u = this.ak(a);
		var v = false;
		if (u != null) {
			v = true;
		}
		for (var w = b; w < c; w++) {
			if (v) {
				e = u[w];

			} else {
				e = a.item(w);
			}
			if (j) {
				var x = (e - l) / (k);
				if (i) {
					x = 1 - x;
				}
				x = m + n * (x - s) / t;
				var y = (x - (o * r)) / p;
				if (v) {
					u[w] = y;

				} else {
					a.item(w, y);
				}

			} else {
				var z = (e - l) / (k);
				if (i) {
					z = 1 - z;
				}
				z = q + r * (z - o) / p;
				if (v) {
					u[w] = z;

				} else {
					a.item(w, z);
				}
			}
		}
	}

, 
	q: function (a, b, c, d, e) {
		d = a.minimumValue();
		e = a.maximumValue();
		return {
			actualMinimumValue: d,
			actualMaximumValue: e
		};
	}

, 
	ah: function (a, b, c, d) {
		var e = b.left() + b.width() * (a - c.left()) / c.width();
		if (d) {
			e = 1 - e;
		}
		return this.i + e * (this.p());
	}

, 
	ai: function (a, b, c, d) {
		var e = (a - this.i) / (this.p());
		if (d) {
			e = 1 - e;
		}
		return c.left() + c.width() * (e - b.left()) / b.width();
	}

, 
	al: function (a, b, c, d, e) {
		var f = (a - this.i) / (this.p());
		if (e) {
			f = 1 - f;
		}
		return c.left() + c.width() * (f - b.left()) / b.width();
	}
,
	$type: new $.ig.Type('SphericalMercatorHorizontalScaler', $.ig.HorizontalLinearScaler.prototype.$type)
}, true);

$.ig.util.defType('SphericalMercatorVerticalScaler', 'VerticalLinearScaler', {
	ak: null
, 
	ab: function (a, b) {
		if (!b.c.isEmpty()) {
			var c = a * b.a.height() + b.a.top() * b.b.height();
			var d = this.ai(c, this.ak, b.c, b.d);
			return d;

		} else {
			return this.ai(a, b.a, b.b, b.d);
		}
	}

, 
	ac: function (a, b) {
		if (!b.c.isEmpty()) {
			var c = this.ah(a, this.ak, b.c, b.d);
			c = (c - (b.a.top() * b.b.height())) / b.a.height();
			return c;

		} else {
			return this.ah(a, b.a, b.b, b.d);
		}
	}

, 
	ar: function (values_) {
		var a = $.isArray(values_) ? values_ : null;;
		return a;
		return null;
	}

, 
	ae: function (a, b, c, d) {
		var e;
		var f = d.a;
		var g = d.b;
		var h = d.c;
		var i = d.d;
		var j = !h.isEmpty();
		var k = this.p();
		var l = this.i;
		var m = h.top();
		var n = h.height();
		var o = f.top();
		var p = f.height();
		var q = g.top();
		var r = g.height();
		var s = this.ak.top();
		var t = this.ak.height();
		var u = this.ar(a);
		var v = $.ig.SphericalMercatorVerticalScaler.prototype.aj;
		var w;
		var x;
		var y;
		var z;
		var aa;
		var ab = false;
		if (u != null) {
			ab = true;
		}
		for (var ac = b; ac < c; ac++) {
			if (ab) {
				e = u[ac];

			} else {
				e = a.item(ac);
			}
			if (j) {
				if (e < $.ig.SphericalMercatorVerticalScaler.prototype.am) {
					e = $.ig.SphericalMercatorVerticalScaler.prototype.am;
				}
				if (e > $.ig.SphericalMercatorVerticalScaler.prototype.al) {
					e = $.ig.SphericalMercatorVerticalScaler.prototype.al;
				}
				w = e * (v);
				x = Math.sin(w);
				y = 0.5 * Math.log((1 + x) / (1 - x));
				z = (this.an - y) * n / this.ao;
				z = m + z;
				aa = (z - s * n) / t;
				z = (aa - (o * r)) / p;
				if (ab) {
					u[ac] = z;

				} else {
					a.item(ac, z);
				}

			} else {
				if (e < $.ig.SphericalMercatorVerticalScaler.prototype.am) {
					e = $.ig.SphericalMercatorVerticalScaler.prototype.am;
				}
				if (e > $.ig.SphericalMercatorVerticalScaler.prototype.al) {
					e = $.ig.SphericalMercatorVerticalScaler.prototype.al;
				}
				w = e * (v);
				x = Math.sin(w);
				y = 0.5 * Math.log((1 + x) / (1 - x));
				z = (this.an - y) * r / this.ao;
				z = q + z;
				z = (z - o * r) / p;
				if (ab) {
					u[ac] = z;

				} else {
					a.item(ac, z);
				}
			}
		}
	}

, 
	q: function (a, b, c, d, e) {
		d = this.ay(a.minimumValue());
		e = this.ay(a.maximumValue());
		return {
			actualMinimumValue: d,
			actualMaximumValue: e
		};
	}

, 
	x: function (a, b, c) {
		$.ig.NumericScaler.prototype.x.call(this, a, b, c);
		switch (a) {
			case $.ig.SphericalMercatorVerticalScaler.prototype.e:
			case $.ig.SphericalMercatorVerticalScaler.prototype.f:
				this.an = $.ig.SphericalMercatorVerticalScaler.prototype.aw(this.j);
				this.ao = $.ig.SphericalMercatorVerticalScaler.prototype.aw(this.j) - $.ig.SphericalMercatorVerticalScaler.prototype.aw(this.i);
				break;
		}
	}
, 
	an: null, 
	ao: null
, 
	ap: function () {
			return $.ig.SphericalMercatorVerticalScaler.prototype.al;
	}

, 
	aq: function () {
			return $.ig.SphericalMercatorVerticalScaler.prototype.am;
	}

, 
		init: function () {


			$.ig.VerticalLinearScaler.prototype.init.call(this);
						this.ak = new $.ig.Rect(0, 0, 0, 1, 1);
		}
, 
	ai: function (a, b, c, d) {
		var e = (a - c.top()) * b.width() + b.top() * c.height();
		e = $.ig.SphericalMercatorVerticalScaler.prototype.aw(this.j) - e / (c.height() / this.ao);
		return $.ig.SphericalMercatorVerticalScaler.prototype.ax(e);
	}

, 
	ah: function (a, b, c, d) {
		var e = c.top() + this.av(a, c.height());
		return (e - b.top() * c.height()) / b.width();
	}

, 
	au: function (a, b, c, d, e) {
		var f = this.av(a, d.height());
		return (f - b.top() * c.height()) / b.width();
	}

, 
	av: function (a, b) {
		a = a > $.ig.SphericalMercatorVerticalScaler.prototype.am ? (a < $.ig.SphericalMercatorVerticalScaler.prototype.al ? a : $.ig.SphericalMercatorVerticalScaler.prototype.al) : $.ig.SphericalMercatorVerticalScaler.prototype.am;
		var c = $.ig.SphericalMercatorVerticalScaler.prototype.aw(a);
		var d = (this.an - c) * b / this.ao;
		return (d);
	}

, 
	aw: function (a) {
		var b = a * ($.ig.SphericalMercatorVerticalScaler.prototype.aj);
		var c = Math.sin(b);
		var d = 0.5 * Math.log((1 + c) / (1 - c));
		return d;
	}

, 
	ax: function (a) {
		a = Math.exp(2 * a);
		return Math.asin((a - 1) / (a + 1)) / $.ig.SphericalMercatorVerticalScaler.prototype.aj;
	}

, 
	ay: function (a) {
		if (a < $.ig.SphericalMercatorVerticalScaler.prototype.am) {
			return $.ig.SphericalMercatorVerticalScaler.prototype.am;
		}
		if (a > $.ig.SphericalMercatorVerticalScaler.prototype.al) {
			return $.ig.SphericalMercatorVerticalScaler.prototype.al;
		}
		return a;
	}
,
	$type: new $.ig.Type('SphericalMercatorVerticalScaler', $.ig.VerticalLinearScaler.prototype.$type)
}, true);

$.ig.util.defType('ColorScale', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

	}
, 
	getColor: function (a, b, c, d) {
	}

, 
	f: function (a, b, c) {
		if (this.propertyChanged != null) {
		this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
	}
, 
	propertyChanged: null,
	$type: new $.ig.Type('ColorScale', $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('CustomPaletteColorScale', 'ColorScale', {

		init: function () {

			this.k = null;
			this.m = NaN;
			this.n = NaN;
			this.o = true;
			this.p = true;
			this.q = $.ig.ColorScaleInterpolationMode.prototype.select;

			$.ig.ColorScale.prototype.init.call(this);
						this.l = $.ig.Color.prototype.s(0, 0, 0, 0);
				this.k = new $.ig.ObservableCollection$1($.ig.Color.prototype.$type, 0);
				this.k.collectionChanged = $.ig.Delegate.prototype.combine(this.k.collectionChanged, this.u.on(this));
		}
, 
	minimumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CustomPaletteColorScale.prototype.minimumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.CustomPaletteColorScale.prototype.minimumValueProperty);
		}
	}

, 
	maximumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CustomPaletteColorScale.prototype.maximumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.CustomPaletteColorScale.prototype.maximumValueProperty);
		}
	}
, 
	k: null
, 
	palette: function (a) {
		if (arguments.length === 1) {
			if (this.k != null) {
			this.k.collectionChanged = $.ig.Delegate.prototype.remove(this.k.collectionChanged, this.u.on(this));
			}
			this.k = a;
			if (this.k != null) {
			this.k.collectionChanged = $.ig.Delegate.prototype.combine(this.k.collectionChanged, this.u.on(this));
			}
			this.f($.ig.CustomPaletteColorScale.prototype.i, this.palette(), this.palette());
			return a;
		} else {
			return this.k;
		}
	}

, 
	u: function (a, b) {
		this.f($.ig.CustomPaletteColorScale.prototype.i, this.palette(), this.palette());
	}
, 
	l: null
, 
	f: function (a, b, c) {
		$.ig.ColorScale.prototype.f.call(this, a, b, c);
		switch (a) {
			case $.ig.CustomPaletteColorScale.prototype.g:
				this.m = this.minimumValue();
				this.o = isNaN(this.m);
				break;
			case $.ig.CustomPaletteColorScale.prototype.h:
				this.n = this.maximumValue();
				this.p = isNaN(this.n);
				break;
			case $.ig.CustomPaletteColorScale.prototype.j:
				this.q = this.interpolationMode();
				break;
		}
	}
, 
	m: null, 
	n: null, 
	o: null, 
	p: null, 
	q: null
, 
	getColor: function (a, b, c, d) {
		if (((this.k == null) || (this.k.count() == 0)) || d == null) {
			return this.l;
		}
		var e = this.o ? b : this.m;
		var f = this.p ? c : this.n;
		var g = (a - e) / (f - e);
		if (isNaN(g) || g < 0 || g > 1) {
			return this.l;
		}
		var h = g * (this.k.count() - 1);
		if (this.q == $.ig.ColorScaleInterpolationMode.prototype.interpolateHSV || this.q == $.ig.ColorScaleInterpolationMode.prototype.interpolateRGB) {
			var i = Math.floor(h);
			var j = Math.ceil(h);
			var k = this.k.__inner[i];
			var l = this.k.__inner[j];
			var m = h - i;
			var n = this.q == $.ig.ColorScaleInterpolationMode.prototype.interpolateHSV ? $.ig.InterpolationMode.prototype.hSV : $.ig.InterpolationMode.prototype.rGB;
			return k.getInterpolation(m, l, n);

		} else {
			var o = Math.round(h);
			return this.k.__inner[o];
		}
	}

, 
	interpolationMode: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CustomPaletteColorScale.prototype.interpolationModeProperty, a);
			return a;
		} else {
			return this.b($.ig.CustomPaletteColorScale.prototype.interpolationModeProperty);
		}
	}

, 
	providePalette: function (a) {
		var $self = this;
		var b = new $.ig.ObservableCollection$1($.ig.Color.prototype.$type, 0);
		for (var d = 0; d  < a.length; d++ ) {
			var c = a[d];
			var e = (function () { var $ret = new $.ig.Color();
$ret.f(c); return $ret;}());
			b.add(e);
		}
		this.palette(b);
	}
,
	$type: new $.ig.Type('CustomPaletteColorScale', $.ig.ColorScale.prototype.$type)
}, true);

$.ig.util.defType('GeographicMapImagery', 'Control', {

		init: function (a) {


			$.ig.Control.prototype.init.call(this);
						this.a3($.ig.GeographicMapImagery.prototype.$type);
				this.bh(a);
				this.bf(this.bj());
				this.bi(this.bf());
		}
, 
	bi: function (a) {
	}

, 
	bj: function () {
		return new $.ig.GeographicMapImageryView(this);
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
	bm: function () {
		if (this.bg() != null) {
			this.bf().g();
		}
	}

, 
	bn: function (a, b, c) {
		switch (a) {
			case $.ig.GeographicMapImagery.prototype.a8:
				this.bm();
				break;
			case $.ig.GeographicMapImagery.prototype.a9:
				this.bf().g();
				break;
		}
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
	}

, 
	windowRect: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicMapImagery.prototype.windowRectProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicMapImagery.prototype.windowRectProperty);
		}
	}

, 
	geographicMap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicMapImagery.prototype.geographicMapProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicMapImagery.prototype.geographicMapProperty);
		}
	}

, 
	bo: function (a, b) {
		(a).bp(b.f(), b.e());
	}

, 
	bp: function (a, b) {
		this.bn($.ig.GeographicMapImagery.prototype.a9, a, b);
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
	_bh: null,
	bh: function (a) {
		if (arguments.length === 1) {
			this._bh = a;
			return a;
		} else {
			return this._bh;
		}
	}
, 
	propertyChanged: null
, 
	bu: function (a) {
		if (this.geographicMap() == null || a.c() < 1 || a.d() < 1) {
			return a;
		}
		var b = new $.ig.Rect(0, 0, 0, a.c(), a.d());
		var c = this.geographicMap().k5(b);
		var d = $.ig.XamGeographicMap.prototype.kj;
		var e = this.geographicMap().actualWorldRect();
		var f = Math.min(this.windowRect().height(), this.windowRect().width());
		var g = e.width() / d.width();
		this.bg().b8((b.width() / c.width()) * f * g);
		var h = this.geographicMap().xAxis();
		var i = this.geographicMap().yAxis();
		var j = new $.ig.ScalerParams(this.windowRect(), b, h.isInverted());
		j.c = c;
		var k = new $.ig.ScalerParams(this.windowRect(), b, i.isInverted());
		k.c = c;
		var l = h.getScaledValue(d.left(), j);
		var m = i.getScaledValue(d.bottom(), k);
		var n = (-l / b.width()) * this.bg().b8();
		var o = (-m / b.height()) * this.bg().b8() * (b.height() / b.width());
		this.bg().b6({__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		return a;
	}

, 
	bv: function (a) {
		this.bf().j(a);
	}

, 
	bw: function (a) {
		this.bf().k(a);
	}

, 
	bx: function () {
		this.bf().g();
	}
,
	$type: new $.ig.Type('GeographicMapImagery', $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('BingMapsMapImagery', 'GeographicMapImagery', {

		init: function () {


			$.ig.GeographicMapImagery.prototype.init.call(this, new $.ig.BingMapsTileSource(0));
						this.b3().p();
		}
, 
	bj: function () {
		return new $.ig.BingMapsMapImageryView(this);
	}

, 
	bi: function (a) {
		$.ig.GeographicMapImagery.prototype.bi.call(this, a);
		this.b3(a);
	}

, 
	_b3: null,
	b3: function (a) {
		if (arguments.length === 1) {
			this._b3 = a;
			return a;
		} else {
			return this._b3;
		}
	}

, 
	tilePath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BingMapsMapImagery.prototype.tilePathProperty, a);
			return a;
		} else {
			return this.b($.ig.BingMapsMapImagery.prototype.tilePathProperty);
		}
	}

, 
	b6: function (a, b) {
		(a).b9($.ig.BingMapsMapImagery.prototype.bz, b.f(), b.e());
	}

, 
	subDomains: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BingMapsMapImagery.prototype.subDomainsProperty, a);
			return a;
		} else {
			return this.b($.ig.BingMapsMapImagery.prototype.subDomainsProperty);
		}
	}

, 
	b7: function (a, b) {
		(a).b9($.ig.BingMapsMapImagery.prototype.b0, b.f(), b.e());
	}

, 
	cultureName: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.BingMapsMapImagery.prototype.cultureNameProperty, a);
			return a;
		} else {
			return this.b($.ig.BingMapsMapImagery.prototype.cultureNameProperty);
		}
	}

, 
	b8: function (a, b) {
		(a).b9($.ig.BingMapsMapImagery.prototype.b1, b.f(), b.e());
	}

, 
	b9: function (a, b, c) {
		switch (a) {
			case $.ig.BingMapsMapImagery.prototype.bz:
				this.b3().q();
				this.bf().g();
				break;
			case $.ig.BingMapsMapImagery.prototype.b1:
				this.b3().r();
				this.bf().g();
				break;
			case $.ig.BingMapsMapImagery.prototype.b0:
				var d = b;
				var e = c;
				if (d != null) {
					d.collectionChanged = $.ig.Delegate.prototype.remove(d.collectionChanged, this.ca.on(this));
				}
				if (e != null) {
					e.collectionChanged = $.ig.Delegate.prototype.combine(e.collectionChanged, this.ca.on(this));
				}
				this.b3().s();
				this.bf().g();
				break;
		}
		$.ig.GeographicMapImagery.prototype.bn.call(this, a, b, c);
	}

, 
	ca: function (a, b) {
		this.bf().g();
	}
,
	$type: new $.ig.Type('BingMapsMapImagery', $.ig.GeographicMapImagery.prototype.$type)
}, true);

$.ig.util.defType('GeographicMapImageryView', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.d($.ig.Rect.prototype.empty());
				this.c(a);
				this.c().bg(new $.ig.XamMultiScaleImage());
				this.c().bg().b5(this.c().bh());
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
	g: function () {
		if (this.d().isEmpty()) {
			return;
		}
		this.c().bu(new $.ig.Size(this.d().width(), this.d().height()));
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
	j: function (a) {
		this.c().bg().dl(a);
	}

, 
	k: function (a) {
		this.d(a);
		this.c().bg().dm(a);
		this.c().bx();
	}
,
	$type: new $.ig.Type('GeographicMapImageryView', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('BingMapsMapImageryView', 'GeographicMapImageryView', {

		init: function (a) {


			$.ig.GeographicMapImageryView.prototype.init.call(this, a);
						this.m(a);
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
	p: function () {
		this.m().subDomains(new $.ig.ObservableCollection$1(String, 0));
		(this.m().bh()).tilePath(this.m().tilePath());
		(this.m().bh()).subDomains(this.m().subDomains());
		(this.m().bh()).cultureName(this.m().cultureName());
	}

, 
	q: function () {
		(this.m().bh()).tilePath(this.m().tilePath());
	}

, 
	r: function () {
		(this.m().bh()).cultureName(this.m().cultureName());
	}

, 
	s: function () {
		(this.m().bh()).subDomains(this.m().subDomains());
	}
,
	$type: new $.ig.Type('BingMapsMapImageryView', $.ig.GeographicMapImageryView.prototype.$type)
}, true);

$.ig.util.defType('CloudMadeMapImagery', 'GeographicMapImagery', {

		init: function () {


			$.ig.GeographicMapImagery.prototype.init.call(this, new $.ig.CloudMadeTileSource());
						this.b2().r();
		}
, 
	bj: function () {
		return new $.ig.CloudMadeMapImageryView(this);
	}

, 
	bi: function (a) {
		$.ig.GeographicMapImagery.prototype.bi.call(this, a);
		this.b2(a);
	}

, 
	_b2: null,
	b2: function (a) {
		if (arguments.length === 1) {
			this._b2 = a;
			return a;
		} else {
			return this._b2;
		}
	}

, 
	key: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CloudMadeMapImagery.prototype.keyProperty, a);
			return a;
		} else {
			return this.b($.ig.CloudMadeMapImagery.prototype.keyProperty);
		}
	}

, 
	b5: function (a, b) {
		(a).b7($.ig.CloudMadeMapImagery.prototype.bz, b.f(), b.e());
	}

, 
	parameter: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CloudMadeMapImagery.prototype.parameterProperty, a);
			return a;
		} else {
			return this.b($.ig.CloudMadeMapImagery.prototype.parameterProperty);
		}
	}

, 
	b6: function (a, b) {
		(a).b7($.ig.CloudMadeMapImagery.prototype.b0, b.f(), b.e());
	}

, 
	b7: function (a, b, c) {
		switch (a) {
			case $.ig.CloudMadeMapImagery.prototype.bz:
				this.b2().p();
				this.bf().g();
				break;
			case $.ig.CloudMadeMapImagery.prototype.b0:
				this.b2().q();
				this.bf().g();
				break;
		}
		$.ig.GeographicMapImagery.prototype.bn.call(this, a, b, c);
	}
,
	$type: new $.ig.Type('CloudMadeMapImagery', $.ig.GeographicMapImagery.prototype.$type)
}, true);

$.ig.util.defType('CloudMadeMapImageryView', 'GeographicMapImageryView', {

		init: function (a) {


			$.ig.GeographicMapImageryView.prototype.init.call(this, a);
						this.m(a);
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
	p: function () {
		(this.m().bh()).key(this.m().key());
	}

, 
	q: function () {
		(this.m().bh()).parameter(this.m().parameter());
	}

, 
	r: function () {
		(this.m().bh()).key(this.m().key());
		(this.m().bh()).parameter(this.m().parameter());
	}
,
	$type: new $.ig.Type('CloudMadeMapImageryView', $.ig.GeographicMapImageryView.prototype.$type)
}, true);

$.ig.util.defType('OpenStreetMapImagery', 'GeographicMapImagery', {

		init: function () {


			$.ig.GeographicMapImagery.prototype.init.call(this, new $.ig.OpenStreetMapTileSource());
		},
	$type: new $.ig.Type('OpenStreetMapImagery', $.ig.GeographicMapImagery.prototype.$type)
}, true);

$.ig.util.defType('HostSeriesView$1', 'SeriesView', {
	$t: null
, 
		init: function ($t, a) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.SeriesView.prototype.init.call(this, a);
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
	bu: function (a, b) {
		$.ig.SeriesView.prototype.bu.call(this, a, b);
	}

, 
	ch: function () {
		this.ce().ht().itemsSource(this.ce().itemsSource());
		this.ce().ht().index(this.ce().index());
		this.ce().ht().brush(this.ce().brush());
		this.ce().ht().outline(this.ce().outline());
		this.ce().ht().resolution(this.ce().resolution());
		this.ce().ht().transitionDuration(this.ce().transitionDuration());
	}

, 
	ci: function () {
		this.ce().ht().itemsSource(this.ce().itemsSource());
	}

, 
	cj: function () {
		this.ce().ht().resolution(this.ce().resolution());
	}

, 
	ck: function () {
		this.ce().ht().transitionDuration(this.ce().transitionDuration());
	}
,
	$type: new $.ig.Type('HostSeriesView$1', $.ig.SeriesView.prototype.$type)
}, true);

$.ig.util.defType('GeographicProportionalSymbolSeriesView', 'HostSeriesView$1', {

		init: function (a) {


			$.ig.HostSeriesView$1.prototype.init.call(this, $.ig.BubbleSeries.prototype.$type, a);
						this.cm(a);
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
	ch: function () {
		$.ig.HostSeriesView$1.prototype.ch.call(this);
		this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
		this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
		this.cm().ht().markerType(this.cm().markerType());
		this.cm().ht().markerTemplate(this.cm().markerTemplate());
		this.cm().ht().radiusMemberPath(this.cm().radiusMemberPath());
		this.cm().ht().radiusScale(this.cm().radiusScale());
		this.cm().ht().labelMemberPath(this.cm().labelMemberPath());
		this.cm().ht().fillMemberPath(this.cm().fillMemberPath());
		this.cm().ht().fillScale(this.cm().fillScale());
	}

, 
	cp: function () {
		this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
	}

, 
	cq: function () {
		this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
	}

, 
	cr: function () {
		this.cm().ht().markerType(this.cm().markerType());
	}

, 
	cs: function () {
		this.cm().ht().markerTemplate(this.cm().markerTemplate());
	}

, 
	ct: function () {
		this.cm().ht().maximumMarkers(this.cm().maximumMarkers());
	}

, 
	cu: function () {
		this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
	}

, 
	cv: function () {
		this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis());
	}

, 
	cw: function () {
		if (this.cm().seriesViewer() == null) {
			this.cm().ht().xAxis(null);
			this.cm().ht().yAxis(null);
			return;
		}
		this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
		this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis());
	}

, 
	cx: function () {
		this.cm().ht().markerCollisionAvoidance(this.cm().markerCollisionAvoidance());
	}

, 
	cy: function () {
		this.cm().ht().markerBrush(this.cm().markerBrush());
	}

, 
	cz: function () {
		this.cm().ht().markerOutline(this.cm().markerOutline());
	}

, 
	c0: function () {
		this.cm().ht().radiusMemberPath(this.cm().radiusMemberPath());
	}

, 
	c1: function () {
		this.cm().ht().radiusScale(this.cm().radiusScale());
	}

, 
	c2: function () {
		this.cm().ht().labelMemberPath(this.cm().labelMemberPath());
	}

, 
	c3: function () {
		this.cm().ht().fillScale(this.cm().fillScale());
	}

, 
	c4: function () {
		this.cm().ht().fillMemberPath(this.cm().fillMemberPath());
	}
,
	$type: new $.ig.Type('GeographicProportionalSymbolSeriesView', $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.BubbleSeries.prototype.$type))
}, true);

$.ig.util.defType('GeographicMapSeriesHost$1', 'Series', {
	$t: null
, 
		init: function ($t) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Series.prototype.init.call(this);
						this.ht(this.hy());
		}, 
	hq: null
, 
	ht: function (a) {
		if (arguments.length === 1) {
			var b = this.ht() != a;
			if (b) {
				this.hq = a;
				this.hx();
			}
			return a;
		} else {
			return this.hq;
		}
	}

, 
	hx: function () {
		this.e9(this.ht());
		this.hu().ch();
	}

, 
	eh: function (a) {
		return this.ei(this.ht(), a);
	}

, 
	hy: function () {
	}

, 
	ed: function () {
		return new $.ig.HostSeriesView$1(this.$t, this);
	}

, 
	ea: function (a) {
		$.ig.Series.prototype.ea.call(this, a);
		this.hu(a);
	}

, 
	_hu: null,
	hu: function (a) {
		if (arguments.length === 1) {
			this._hu = a;
			return a;
		} else {
			return this._hu;
		}
	}

, 
	visibleFromScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicMapSeriesHost$1.prototype.visibleFromScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicMapSeriesHost$1.prototype.visibleFromScaleProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.Series.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.Series.prototype.bc:
				this.ht().seriesViewer(this.seriesViewer());
				if (c != null) {
					(c).removeSeries(this.ht());
				}
				if (d != null) {
					this.seriesViewer().attachSeries(this.ht());
				}
				this.ht().provideViewport(this.d6());
				this.ht().index(this.index());
				var e = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, d);
				if (e != null) {
					e.actualWindowRectChanged = $.ig.Delegate.prototype.remove(e.actualWindowRectChanged, this.h2.on(this));
				}
				if (this.seriesViewer() != null) {
					this.seriesViewer().actualWindowRectChanged = $.ig.Delegate.prototype.combine(this.seriesViewer().actualWindowRectChanged, this.h2.on(this));
				}
				this.h1();
				break;
			case $.ig.Series.prototype.bb:
				this.ht().syncLink(this.syncLink());
				break;
			case $.ig.GeographicMapSeriesHost$1.prototype.hp:
				this.h1();
				break;
			case $.ig.GeographicMapSeriesHost$1.prototype.bl:
				this.ht().index(this.index());
				break;
			case $.ig.GeographicMapSeriesHost$1.prototype.bd:
				this.hu().ci();
				break;
			case $.ig.GeographicMapSeriesHost$1.prototype.bp:
				this.hu().cj();
				break;
			case $.ig.GeographicMapSeriesHost$1.prototype.bn:
				this.hu().ck();
				break;
		}
	}

, 
	h1: function () {
		if (this.seriesViewer() == null || this.ht() == null) {
			return;
		}
		if (this.seriesViewer().actualWindowRect().width() > this.visibleFromScale()) {
			this.ht().__visibility = $.ig.Visibility.prototype.collapsed;

		} else {
			this.ht().__visibility = $.ig.Visibility.prototype.visible;
		}
	}

, 
	h2: function (a, b) {
		this.h1();
	}

, 
	renderSeries: function (a) {
		$.ig.Series.prototype.renderSeries.call(this, a);
		if (this.ht() != null) {
			this.ht().renderSeries(a);
		}
	}

, 
	getHitDataContext: function (a) {
		return this.ht().getHitDataContext(a);
	}

, 
	styleUpdated: function () {
		$.ig.Series.prototype.styleUpdated.call(this);
		this.ht().styleUpdated();
	}

, 
	coercionMethods: function (a) {
		if (arguments.length === 1) {
			this.__coercionMethods = a;
			this.ht().coercionMethods(a);
			return a;
		} else {
			return this.__coercionMethods;
		}
	}
,
	$type: new $.ig.Type('GeographicMapSeriesHost$1', $.ig.Series.prototype.$type)
}, true);

$.ig.util.defType('GeographicXYTriangulatingSeries', 'GeographicMapSeriesHost$1', {
	init: function () {

		$.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.XYTriangulatingSeries.prototype.$type);

	}
, 
	ed: function () {
		return new $.ig.GeographicXYTriangulatingSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, a);
		this.ii(a);
	}

, 
	_ii: null,
	ii: function (a) {
		if (arguments.length === 1) {
			this._ii = a;
			return a;
		} else {
			return this._ii;
		}
	}

, 
	longitudeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicXYTriangulatingSeries.prototype.longitudeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicXYTriangulatingSeries.prototype.longitudeMemberPathProperty);
		}
	}

, 
	latitudeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicXYTriangulatingSeries.prototype.latitudeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicXYTriangulatingSeries.prototype.latitudeMemberPathProperty);
		}
	}

, 
	trianglesSource: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicXYTriangulatingSeries.prototype.trianglesSourceProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicXYTriangulatingSeries.prototype.trianglesSourceProperty);
		}
	}

, 
	triangleVertexMemberPath1: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath1Property, a);
			return a;
		} else {
			return this.b($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath1Property);
		}
	}

, 
	triangleVertexMemberPath2: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath2Property, a);
			return a;
		} else {
			return this.b($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath2Property);
		}
	}

, 
	triangleVertexMemberPath3: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath3Property, a);
			return a;
		} else {
			return this.b($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath3Property);
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.Series.prototype.bc:
				this.ii().cp();
				break;
			case $.ig.GeographicXYTriangulatingSeries.prototype.h4:
				this.ii().cq();
				break;
			case $.ig.GeographicXYTriangulatingSeries.prototype.h5:
				this.ii().cr();
				break;
			case $.ig.GeographicXYTriangulatingSeries.prototype.h6:
				this.ii().cs();
				break;
			case $.ig.GeographicXYTriangulatingSeries.prototype.h7:
				this.ii().ct();
				break;
			case $.ig.GeographicXYTriangulatingSeries.prototype.h8:
				this.ii().cu();
				break;
			case $.ig.GeographicXYTriangulatingSeries.prototype.h9:
				this.ii().cv();
				break;
		}
	}
,
	$type: new $.ig.Type('GeographicXYTriangulatingSeries', $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.XYTriangulatingSeries.prototype.$type))
}, true);

$.ig.util.defType('GeographicContourLineSeries', 'GeographicXYTriangulatingSeries', {

		init: function () {


			$.ig.GeographicXYTriangulatingSeries.prototype.init.call(this);
						this.a3($.ig.GeographicContourLineSeries.prototype.$type);
		}
, 
	hx: function () {
		var $self = this;
		$.ig.GeographicMapSeriesHost$1.prototype.hx.call(this);
		this.ht().d($.ig.ContourLineSeries.prototype.valueMemberPathProperty, (function () { var $ret = new $.ig.Binding(1, $.ig.GeographicContourLineSeries.prototype.is);
		$ret.d($self); return $ret;}()));
		this.ht().d($.ig.ContourLineSeries.prototype.fillScaleProperty, (function () { var $ret = new $.ig.Binding(1, $.ig.GeographicContourLineSeries.prototype.it);
		$ret.d($self); return $ret;}()));
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
	hy: function () {
		this.i1(new $.ig.ContourLineSeries());
		this.i1().triangulationStatusChanged = $.ig.Delegate.prototype.combine(this.i1().triangulationStatusChanged, this.i5.on(this));
		return this.i1();
	}

, 
	i5: function (a, b) {
		if (this.triangulationStatusChanged != null) {
			this.triangulationStatusChanged(this, b);
		}
	}

, 
	valueMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicContourLineSeries.prototype.valueMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicContourLineSeries.prototype.valueMemberPathProperty);
		}
	}

, 
	fillScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicContourLineSeries.prototype.fillScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicContourLineSeries.prototype.fillScaleProperty);
		}
	}

, 
	ed: function () {
		return new $.ig.GeographicContourLineSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.GeographicXYTriangulatingSeries.prototype.ea.call(this, a);
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
	valueResolver: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicContourLineSeries.prototype.valueResolverProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicContourLineSeries.prototype.valueResolverProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.GeographicXYTriangulatingSeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.GeographicContourLineSeries.prototype.it:
				this.i2().c0();
				break;
			case $.ig.GeographicContourLineSeries.prototype.is:
				this.i2().c1();
				break;
			case $.ig.GeographicContourLineSeries.prototype.iu:
				this.i1().valueResolver(this.valueResolver());
				break;
			case $.ig.Series.prototype.bx:
				this.i1().thickness(this.thickness());
				break;
			case $.ig.Series.prototype.bz:
				this.i1().dashArray(this.dashArray());
				break;
			case $.ig.Series.prototype.by:
				this.i1().dashCap(this.dashCap());
				break;
			case $.ig.Series.prototype.bw:
				this.i1().miterLimit(this.miterLimit());
				break;
		}
	}
, 
	triangulationStatusChanged: null,
	$type: new $.ig.Type('GeographicContourLineSeries', $.ig.GeographicXYTriangulatingSeries.prototype.$type)
}, true);

$.ig.util.defType('GeographicXYTriangulatingSeriesView', 'HostSeriesView$1', {

		init: function (a) {


			$.ig.HostSeriesView$1.prototype.init.call(this, $.ig.XYTriangulatingSeries.prototype.$type, a);
						this.cm(a);
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
	ch: function () {
		$.ig.HostSeriesView$1.prototype.ch.call(this);
		this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
		this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
		this.cm().ht().trianglesSource(this.cm().trianglesSource());
		this.cm().ht().triangleVertexMemberPath1(this.cm().triangleVertexMemberPath1());
		this.cm().ht().triangleVertexMemberPath2(this.cm().triangleVertexMemberPath2());
		this.cm().ht().triangleVertexMemberPath3(this.cm().triangleVertexMemberPath3());
	}

, 
	cp: function () {
		if (this.cm().seriesViewer() == null) {
			this.cm().ht().xAxis(null);
			this.cm().ht().yAxis(null);
			return;
		}
		this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
		this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis());
	}

, 
	cq: function () {
		this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
	}

, 
	cr: function () {
		this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
	}

, 
	cs: function () {
		this.cm().ht().trianglesSource(this.cm().trianglesSource());
	}

, 
	ct: function () {
		this.cm().ht().triangleVertexMemberPath1(this.cm().triangleVertexMemberPath1());
	}

, 
	cu: function () {
		this.cm().ht().triangleVertexMemberPath2(this.cm().triangleVertexMemberPath2());
	}

, 
	cv: function () {
		this.cm().ht().triangleVertexMemberPath3(this.cm().triangleVertexMemberPath3());
	}
,
	$type: new $.ig.Type('GeographicXYTriangulatingSeriesView', $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.XYTriangulatingSeries.prototype.$type))
}, true);

$.ig.util.defType('GeographicContourLineSeriesView', 'GeographicXYTriangulatingSeriesView', {

		init: function (a) {


			$.ig.GeographicXYTriangulatingSeriesView.prototype.init.call(this, a);
						this.cx(a);
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
	ch: function () {
		$.ig.GeographicXYTriangulatingSeriesView.prototype.ch.call(this);
		if (this.cx().ht() != null) {
			this.cx().i1().fillScale(this.cx().fillScale());
			this.cx().i1().valueMemberPath(this.cx().valueMemberPath());
		}
	}

, 
	c0: function () {
		if (this.cx().i1() != null) {
			this.cx().i1().fillScale(this.cx().fillScale());
		}
	}

, 
	c1: function () {
		if (this.cx().i1() != null) {
			this.cx().i1().valueMemberPath(this.cx().valueMemberPath());
		}
	}
,
	$type: new $.ig.Type('GeographicContourLineSeriesView', $.ig.GeographicXYTriangulatingSeriesView.prototype.$type)
}, true);

$.ig.util.defType('GeographicHighDensityScatterSeries', 'GeographicMapSeriesHost$1', {

		init: function () {


			$.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.HighDensityScatterSeries.prototype.$type);
						this.a3($.ig.GeographicHighDensityScatterSeries.prototype.$type);
		}
, 
	ed: function () {
		return new $.ig.GeographicHighDensityScatterSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, a);
		this.io(a);
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
	hy: function () {
		return new $.ig.HighDensityScatterSeries();
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
	latitudeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicHighDensityScatterSeries.prototype.latitudeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicHighDensityScatterSeries.prototype.latitudeMemberPathProperty);
		}
	}

, 
	longitudeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicHighDensityScatterSeries.prototype.longitudeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicHighDensityScatterSeries.prototype.longitudeMemberPathProperty);
		}
	}

, 
	useBruteForce: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicHighDensityScatterSeries.prototype.useBruteForceProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicHighDensityScatterSeries.prototype.useBruteForceProperty);
		}
	}

, 
	progressiveLoad: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicHighDensityScatterSeries.prototype.progressiveLoadProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicHighDensityScatterSeries.prototype.progressiveLoadProperty);
		}
	}

, 
	mouseOverEnabled: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicHighDensityScatterSeries.prototype.mouseOverEnabledProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicHighDensityScatterSeries.prototype.mouseOverEnabledProperty);
		}
	}

, 
	useSquareCutoffStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicHighDensityScatterSeries.prototype.useSquareCutoffStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicHighDensityScatterSeries.prototype.useSquareCutoffStyleProperty);
		}
	}

, 
	heatMinimum: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicHighDensityScatterSeries.prototype.heatMinimumProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicHighDensityScatterSeries.prototype.heatMinimumProperty);
		}
	}

, 
	heatMaximum: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicHighDensityScatterSeries.prototype.heatMaximumProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicHighDensityScatterSeries.prototype.heatMaximumProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.Series.prototype.bc:
				this.io().cx();
				break;
			case $.ig.GeographicHighDensityScatterSeries.prototype.h5:
				this.io().cp();
				break;
			case $.ig.GeographicHighDensityScatterSeries.prototype.h4:
				this.io().cq();
				break;
			case $.ig.GeographicHighDensityScatterSeries.prototype.h6:
				this.io().cr();
				break;
			case $.ig.GeographicHighDensityScatterSeries.prototype.h7:
				this.io().cs();
				break;
			case $.ig.GeographicHighDensityScatterSeries.prototype.h8:
				this.io().ct();
				break;
			case $.ig.GeographicHighDensityScatterSeries.prototype.h9:
				this.io().cu();
				break;
			case $.ig.XamGeographicMap.prototype.kh:
				this.io().cy();
				break;
			case $.ig.XamGeographicMap.prototype.ki:
				this.io().cz();
				break;
			case $.ig.GeographicHighDensityScatterSeries.prototype.ia:
				this.io().cv();
				break;
			case $.ig.GeographicHighDensityScatterSeries.prototype.ib:
				this.io().cw();
				break;
		}
	}

, 
	d3: function () {
			return true;
	}
,
	$type: new $.ig.Type('GeographicHighDensityScatterSeries', $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.HighDensityScatterSeries.prototype.$type))
}, true);

$.ig.util.defType('GeographicHighDensityScatterSeriesView', 'HostSeriesView$1', {

		init: function (a) {


			$.ig.HostSeriesView$1.prototype.init.call(this, $.ig.HighDensityScatterSeries.prototype.$type, a);
						this.cm(a);
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
	ch: function () {
		$.ig.HostSeriesView$1.prototype.ch.call(this);
		this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
		this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
		this.cm().ht().useBruteForce(this.cm().useBruteForce());
		this.cm().ht().progressiveLoad(this.cm().progressiveLoad());
		this.cm().ht().mouseOverEnabled(this.cm().mouseOverEnabled());
		this.cm().ht().useSquareCutoffStyle(this.cm().useSquareCutoffStyle());
		this.cm().ht().heatMinimum(this.cm().heatMinimum());
		this.cm().ht().heatMaximum(this.cm().heatMaximum());
	}

, 
	cp: function () {
		this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
	}

, 
	cq: function () {
		this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
	}

, 
	cr: function () {
		this.cm().ht().useBruteForce(this.cm().useBruteForce());
	}

, 
	cs: function () {
		this.cm().ht().progressiveLoad(this.cm().progressiveLoad());
	}

, 
	ct: function () {
		this.cm().ht().mouseOverEnabled(this.cm().mouseOverEnabled());
	}

, 
	cu: function () {
		this.cm().ht().useSquareCutoffStyle(this.cm().useSquareCutoffStyle());
	}

, 
	cv: function () {
		this.cm().ht().heatMinimum(this.cm().heatMinimum());
	}

, 
	cw: function () {
		this.cm().ht().heatMaximum(this.cm().heatMaximum());
	}

, 
	cx: function () {
		if (this.cm().seriesViewer() == null) {
			this.cm().ht().xAxis(null);
			this.cm().ht().yAxis(null);
			return;
		}
		this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
		this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis());
	}

, 
	cy: function () {
		this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
	}

, 
	cz: function () {
		this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis());
	}
,
	$type: new $.ig.Type('GeographicHighDensityScatterSeriesView', $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.HighDensityScatterSeries.prototype.$type))
}, true);

$.ig.util.defType('GeographicShapeSeriesBase', 'GeographicMapSeriesHost$1', {
	init: function () {

		$.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.ShapeSeriesBase.prototype.$type);

	}
, 
	ed: function () {
		return new $.ig.GeographicShapeSeriesBaseView(this);
	}

, 
	_id: null,
	id: function (a) {
		if (arguments.length === 1) {
			this._id = a;
			return a;
		} else {
			return this._id;
		}
	}

, 
	ea: function (a) {
		$.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, a);
		this.id(a);
	}

, 
	shapeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeriesBase.prototype.shapeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeriesBase.prototype.shapeMemberPathProperty);
		}
	}

, 
	shapeStyleSelector: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeriesBase.prototype.shapeStyleSelectorProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeriesBase.prototype.shapeStyleSelectorProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.Series.prototype.bc:
				this.id().cp();
				break;
			case "ActualBrush":
				this.id().cq();
				break;
			case "ActualOutline":
				this.id().cr();
				break;
			case $.ig.ShapeSeries.prototype.hp:
				this.id().cs();
				break;
			case $.ig.GeographicShapeSeriesBase.prototype.h5:
				this.id().ct();
				break;
			case $.ig.GeographicShapeSeriesBase.prototype.h6:
				this.id().cu();
				break;
			case $.ig.GeographicShapeSeriesBase.prototype.bx:
				this.id().cv();
				break;
			case $.ig.GeographicShapeSeriesBase.prototype.h7:
				this.id().cw();
				break;
		}
	}

, 
	shapeStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeriesBase.prototype.shapeStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeriesBase.prototype.shapeStyleProperty);
		}
	}

, 
	shapeFilterResolution: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeriesBase.prototype.shapeFilterResolutionProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeriesBase.prototype.shapeFilterResolutionProperty);
		}
	}

, 
	d3: function () {
			return true;
	}
,
	$type: new $.ig.Type('GeographicShapeSeriesBase', $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.ShapeSeriesBase.prototype.$type))
}, true);

$.ig.util.defType('GeographicPolylineSeries', 'GeographicShapeSeriesBase', {

		init: function () {


			$.ig.GeographicShapeSeriesBase.prototype.init.call(this);
						this.a3($.ig.GeographicPolylineSeries.prototype.$type);
		}
, 
	hy: function () {
		return new $.ig.PolylineSeries();
	}
,
	$type: new $.ig.Type('GeographicPolylineSeries', $.ig.GeographicShapeSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('GeographicProportionalSymbolSeries', 'GeographicMapSeriesHost$1', {

		init: function () {


			$.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.BubbleSeries.prototype.$type);
						this.a3($.ig.GeographicProportionalSymbolSeries.prototype.$type);
		}
, 
	ed: function () {
		return new $.ig.GeographicProportionalSymbolSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, a);
		this.iy(a);
	}

, 
	_iy: null,
	iy: function (a) {
		if (arguments.length === 1) {
			this._iy = a;
			return a;
		} else {
			return this._iy;
		}
	}

, 
	hy: function () {
		return new $.ig.BubbleSeries();
	}

, 
	_iz: null,
	iz: function (a) {
		if (arguments.length === 1) {
			this._iz = a;
			return a;
		} else {
			return this._iz;
		}
	}

, 
	latitudeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.latitudeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.latitudeMemberPathProperty);
		}
	}

, 
	longitudeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.longitudeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.longitudeMemberPathProperty);
		}
	}

, 
	markerType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerTypeProperty);
		}
	}

, 
	markerCollisionAvoidance: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerCollisionAvoidanceProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerCollisionAvoidanceProperty);
		}
	}

, 
	markerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerTemplateProperty);
		}
	}

, 
	markerBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerBrushProperty);
		}
	}

, 
	markerOutline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerOutlineProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerOutlineProperty);
		}
	}

, 
	maximumMarkers: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.maximumMarkersProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.maximumMarkersProperty);
		}
	}

, 
	radiusMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.radiusMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.radiusMemberPathProperty);
		}
	}

, 
	radiusScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.radiusScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.radiusScaleProperty);
		}
	}

, 
	labelMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.labelMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.labelMemberPathProperty);
		}
	}

, 
	fillMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.fillMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.fillMemberPathProperty);
		}
	}

, 
	fillScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicProportionalSymbolSeries.prototype.fillScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicProportionalSymbolSeries.prototype.fillScaleProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.Series.prototype.bc:
				this.iy().cw();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.h5:
				this.iy().cp();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.h4:
				this.iy().cq();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.h8:
				this.iy().cx();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.h6:
				this.iy().cr();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.h7:
				this.iy().cs();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.ib:
				this.iy().ct();
				break;
			case $.ig.XamGeographicMap.prototype.kh:
				this.iy().cu();
				break;
			case $.ig.XamGeographicMap.prototype.ki:
				this.iy().cv();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.h9:
				this.iy().cy();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.ia:
				this.iy().cz();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.ic:
				this.iy().c0();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.id:
				this.iy().c1();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.ie:
				this.iy().c2();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.ig:
				this.iy().c4();
				break;
			case $.ig.GeographicProportionalSymbolSeries.prototype.ih:
				this.iy().c3();
				break;
		}
	}
,
	$type: new $.ig.Type('GeographicProportionalSymbolSeries', $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.BubbleSeries.prototype.$type))
}, true);

$.ig.util.defType('GeographicScatterAreaSeries', 'GeographicXYTriangulatingSeries', {

		init: function () {


			$.ig.GeographicXYTriangulatingSeries.prototype.init.call(this);
						this.a3($.ig.GeographicScatterAreaSeries.prototype.$type);
		}
, 
	colorMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicScatterAreaSeries.prototype.colorMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicScatterAreaSeries.prototype.colorMemberPathProperty);
		}
	}
, 
	iu: null
, 
	colorScale: function (a) {
		if (arguments.length === 1) {
			var b = this.iu != a;
			if (b) {
				var c = this.iu;
				this.iu = a;
				this.ej($.ig.GeographicScatterAreaSeries.prototype.it, c, this.iu);
				if (this.iz() != null) {
					this.iz().colorScale(a);
				}
			}
			return a;
		} else {
			return this.iu;
		}
	}

, 
	_iz: null,
	iz: function (a) {
		if (arguments.length === 1) {
			this._iz = a;
			return a;
		} else {
			return this._iz;
		}
	}

, 
	hy: function () {
		this.iz(new $.ig.ScatterAreaSeries());
		this.iz().triangulationStatusChanged = $.ig.Delegate.prototype.combine(this.iz().triangulationStatusChanged, this.i3.on(this));
		return this.iz();
	}

, 
	i3: function (a, b) {
		if (this.triangulationStatusChanged != null) {
			this.triangulationStatusChanged(this, b);
		}
	}

, 
	ed: function () {
		return new $.ig.GeographicScatterAreaSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.GeographicXYTriangulatingSeries.prototype.ea.call(this, a);
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
	e6: function (a, b, c, d) {
		$.ig.GeographicXYTriangulatingSeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.GeographicScatterAreaSeries.prototype.is:
				this.i0().c0();
				break;
			case $.ig.GeographicScatterAreaSeries.prototype.it:
				this.i0().c1();
				break;
		}
	}
, 
	triangulationStatusChanged: null
, 
	d3: function () {
			return true;
	}
,
	$type: new $.ig.Type('GeographicScatterAreaSeries', $.ig.GeographicXYTriangulatingSeries.prototype.$type)
}, true);

$.ig.util.defType('GeographicScatterAreaSeriesView', 'GeographicXYTriangulatingSeriesView', {

		init: function (a) {


			$.ig.GeographicXYTriangulatingSeriesView.prototype.init.call(this, a);
						this.cx(a);
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
	ch: function () {
		$.ig.GeographicXYTriangulatingSeriesView.prototype.ch.call(this);
		if (this.cx().iz() != null) {
			this.cx().iz().colorMemberPath(this.cx().colorMemberPath());
			this.cx().iz().colorScale(this.cx().colorScale());
		}
	}

, 
	c0: function () {
		if (this.cx().iz() != null) {
			this.cx().iz().colorMemberPath(this.cx().colorMemberPath());
		}
	}

, 
	c1: function () {
		if (this.cx().iz() != null) {
			this.cx().iz().colorScale(this.cx().colorScale());
		}
	}
,
	$type: new $.ig.Type('GeographicScatterAreaSeriesView', $.ig.GeographicXYTriangulatingSeriesView.prototype.$type)
}, true);

$.ig.util.defType('GeographicShapeSeries', 'GeographicShapeSeriesBase', {

		init: function () {


			$.ig.GeographicShapeSeriesBase.prototype.init.call(this);
						this.a3($.ig.GeographicShapeSeries.prototype.$type);
		}
, 
	ed: function () {
		return new $.ig.GeographicShapeSeriesView(this);
	}

, 
	_iy: null,
	iy: function (a) {
		if (arguments.length === 1) {
			this._iy = a;
			return a;
		} else {
			return this._iy;
		}
	}

, 
	ea: function (a) {
		$.ig.GeographicShapeSeriesBase.prototype.ea.call(this, a);
		this.iy(a);
	}

, 
	hy: function () {
		return new $.ig.ShapeSeries();
	}

, 
	markerType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeries.prototype.markerTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeries.prototype.markerTypeProperty);
		}
	}

, 
	markerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeries.prototype.markerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeries.prototype.markerTemplateProperty);
		}
	}

, 
	markerBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeries.prototype.markerBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeries.prototype.markerBrushProperty);
		}
	}

, 
	markerOutline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeries.prototype.markerOutlineProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeries.prototype.markerOutlineProperty);
		}
	}

, 
	markerStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeries.prototype.markerStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeries.prototype.markerStyleProperty);
		}
	}

, 
	markerCollisionAvoidance: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicShapeSeries.prototype.markerCollisionAvoidanceProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicShapeSeries.prototype.markerCollisionAvoidanceProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.GeographicShapeSeriesBase.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.GeographicShapeSeries.prototype.il:
				this.iy().c1();
				break;
			case $.ig.GeographicShapeSeries.prototype.iq:
				this.iy().c2();
				break;
			case $.ig.GeographicShapeSeries.prototype.ik:
				this.iy().c3();
				break;
			case $.ig.GeographicShapeSeries.prototype.im:
				this.iy().c4();
				break;
			case $.ig.GeographicShapeSeries.prototype.io:
				this.iy().c5();
				break;
			case $.ig.GeographicShapeSeries.prototype.ip:
				this.iy().c6();
				break;
		}
	}
,
	$type: new $.ig.Type('GeographicShapeSeries', $.ig.GeographicShapeSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('GeographicShapeSeriesBaseView', 'HostSeriesView$1', {

		init: function (a) {


			$.ig.HostSeriesView$1.prototype.init.call(this, $.ig.ShapeSeriesBase.prototype.$type, a);
						this.cm(a);
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
	ch: function () {
		$.ig.HostSeriesView$1.prototype.ch.call(this);
		this.cm().ht().shapeMemberPath(this.cm().shapeMemberPath());
		this.cm().ht().brush(this.cm().actualBrush());
		this.cm().ht().outline(this.cm().actualOutline());
	}

, 
	cp: function () {
		if (this.cm().seriesViewer() == null) {
			this.cm().ht().xAxis(null);
			this.cm().ht().yAxis(null);
			return;
		}
		this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
		this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis());
	}

, 
	cq: function () {
		this.cm().ht().brush(this.cm().actualBrush());
	}

, 
	cr: function () {
		this.cm().ht().outline(this.cm().actualOutline());
	}

, 
	cs: function () {
		this.cm().ht().shapeMemberPath(this.cm().shapeMemberPath());
	}

, 
	ct: function () {
		this.cm().ht().shapeStyleSelector(this.cm().shapeStyleSelector());
	}

, 
	cu: function () {
		this.cm().ht().shapeStyle(this.cm().shapeStyle());
	}

, 
	cv: function () {
		this.cm().ht().thickness(this.cm().thickness());
	}

, 
	cw: function () {
		this.cm().ht().shapeFilterResolution(this.cm().shapeFilterResolution());
	}
,
	$type: new $.ig.Type('GeographicShapeSeriesBaseView', $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.ShapeSeriesBase.prototype.$type))
}, true);

$.ig.util.defType('GeographicShapeSeriesView', 'GeographicShapeSeriesBaseView', {

		init: function (a) {


			$.ig.GeographicShapeSeriesBaseView.prototype.init.call(this, a);
						this.cy(a);
				if (!this.ad()) {
					this.cy().shapeMemberPath("points");
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
	ch: function () {
		$.ig.GeographicShapeSeriesBaseView.prototype.ch.call(this);
		(this.cy().ht()).markerTemplate(this.cy().markerTemplate());
		(this.cy().ht()).markerCollisionAvoidance(this.cy().markerCollisionAvoidance());
	}

, 
	c1: function () {
		(this.cy().ht()).markerTemplate(this.cy().markerTemplate());
	}

, 
	c2: function () {
		(this.cy().ht()).markerCollisionAvoidance(this.cy().markerCollisionAvoidance());
	}

, 
	c3: function () {
		(this.cy().ht()).markerType(this.cy().markerType());
	}

, 
	c4: function () {
		(this.cy().ht()).markerBrush(this.cy().markerBrush());
	}

, 
	c5: function () {
		(this.cy().ht()).markerOutline(this.cy().markerOutline());
	}

, 
	c6: function () {
		(this.cy().ht()).markerStyle(this.cy().markerStyle());
	}
,
	$type: new $.ig.Type('GeographicShapeSeriesView', $.ig.GeographicShapeSeriesBaseView.prototype.$type)
}, true);

$.ig.util.defType('GeographicSymbolSeries', 'GeographicMapSeriesHost$1', {

		init: function () {


			$.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.ScatterSeries.prototype.$type);
						this.a3($.ig.GeographicSymbolSeries.prototype.$type);
		}
, 
	ed: function () {
		return new $.ig.GeographicSymbolSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, a);
		this.io(a);
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
	hy: function () {
		return new $.ig.ScatterSeries();
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
	latitudeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicSymbolSeries.prototype.latitudeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicSymbolSeries.prototype.latitudeMemberPathProperty);
		}
	}

, 
	longitudeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicSymbolSeries.prototype.longitudeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicSymbolSeries.prototype.longitudeMemberPathProperty);
		}
	}

, 
	markerType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicSymbolSeries.prototype.markerTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicSymbolSeries.prototype.markerTypeProperty);
		}
	}

, 
	markerCollisionAvoidance: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicSymbolSeries.prototype.markerCollisionAvoidanceProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicSymbolSeries.prototype.markerCollisionAvoidanceProperty);
		}
	}

, 
	markerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicSymbolSeries.prototype.markerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicSymbolSeries.prototype.markerTemplateProperty);
		}
	}

, 
	markerBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicSymbolSeries.prototype.markerBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicSymbolSeries.prototype.markerBrushProperty);
		}
	}

, 
	markerOutline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicSymbolSeries.prototype.markerOutlineProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicSymbolSeries.prototype.markerOutlineProperty);
		}
	}

, 
	maximumMarkers: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.GeographicSymbolSeries.prototype.maximumMarkersProperty, a);
			return a;
		} else {
			return this.b($.ig.GeographicSymbolSeries.prototype.maximumMarkersProperty);
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.Series.prototype.bc:
				this.io().cw();
				break;
			case $.ig.GeographicSymbolSeries.prototype.h5:
				this.io().cp();
				break;
			case $.ig.GeographicSymbolSeries.prototype.h4:
				this.io().cq();
				break;
			case $.ig.GeographicSymbolSeries.prototype.h8:
				this.io().cx();
				break;
			case $.ig.GeographicSymbolSeries.prototype.h6:
				this.io().cr();
				break;
			case $.ig.GeographicSymbolSeries.prototype.h7:
				this.io().cs();
				break;
			case $.ig.GeographicSymbolSeries.prototype.ib:
				this.io().ct();
				break;
			case $.ig.XamGeographicMap.prototype.kh:
				this.io().cu();
				break;
			case $.ig.XamGeographicMap.prototype.ki:
				this.io().cv();
				break;
			case $.ig.GeographicSymbolSeries.prototype.h9:
				this.io().cy();
				break;
			case $.ig.GeographicSymbolSeries.prototype.ia:
				this.io().cz();
				break;
		}
	}
,
	$type: new $.ig.Type('GeographicSymbolSeries', $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.ScatterSeries.prototype.$type))
}, true);

$.ig.util.defType('GeographicSymbolSeriesView', 'HostSeriesView$1', {

		init: function (a) {


			$.ig.HostSeriesView$1.prototype.init.call(this, $.ig.ScatterSeries.prototype.$type, a);
						this.cm(a);
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
	ch: function () {
		$.ig.HostSeriesView$1.prototype.ch.call(this);
		this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
		this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
		this.cm().ht().markerType(this.cm().markerType());
		this.cm().ht().markerTemplate(this.cm().markerTemplate());
	}

, 
	cp: function () {
		this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
	}

, 
	cq: function () {
		this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
	}

, 
	cr: function () {
		this.cm().ht().markerType(this.cm().markerType());
	}

, 
	cs: function () {
		this.cm().ht().markerTemplate(this.cm().markerTemplate());
	}

, 
	ct: function () {
		this.cm().ht().maximumMarkers(this.cm().maximumMarkers());
	}

, 
	cu: function () {
		this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
	}

, 
	cv: function () {
		this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis());
	}

, 
	cw: function () {
		if (this.cm().seriesViewer() == null) {
			this.cm().ht().xAxis(null);
			this.cm().ht().yAxis(null);
			return;
		}
		this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
		this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis());
	}

, 
	cx: function () {
		this.cm().ht().markerCollisionAvoidance(this.cm().markerCollisionAvoidance());
	}

, 
	cy: function () {
		this.cm().ht().markerBrush(this.cm().markerBrush());
	}

, 
	cz: function () {
		this.cm().ht().markerOutline(this.cm().markerOutline());
	}
,
	$type: new $.ig.Type('GeographicSymbolSeriesView', $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.ScatterSeries.prototype.$type))
}, true);

$.ig.util.defType('XYTriangulatingSeries', 'Series', {
	init: function () {

		$.ig.Series.prototype.init.call(this);

	}
, 
	xMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.xMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.xMemberPathProperty);
		}
	}

, 
	yMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.yMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.yMemberPathProperty);
		}
	}
, 
	h3: null
, 
	io: function (a) {
		if (arguments.length === 1) {
			var b = this.io() != a;
			if (b) {
				var c = this.io();
				this.h3 = a;
				this.ej($.ig.XYTriangulatingSeries.prototype.hr, c, this.io());
			}
			return a;
		} else {
			return this.h3;
		}
	}
, 
	h4: null
, 
	ip: function (a) {
		if (arguments.length === 1) {
			var b = this.ip() != a;
			if (b) {
				var c = this.ip();
				this.h4 = a;
				this.ej($.ig.XYTriangulatingSeries.prototype.hs, c, this.ip());
			}
			return a;
		} else {
			return this.h4;
		}
	}

, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.xAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.xAxisProperty);
		}
	}

, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.yAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.yAxisProperty);
		}
	}

, 
	_iq: null,
	iq: function (a) {
		if (arguments.length === 1) {
			this._iq = a;
			return a;
		} else {
			return this._iq;
		}
	}

, 
	eo: function (a) {
		var b = this.dx() != null && this.is() == null && this.ir() == null && this.io() != null && this.ip() != null && this.io().count() >= 3 && this.ip().count() >= 3 && !this.iq();
		if (b) {
			this.i2();
			this.iq(true);
		}
	}

, 
	i2: function () {
		this.h5 = new $.ig.Triangulator(this.dx().g(), this.io(), this.ip());
		this.h5.triangulationStatusChanged = $.ig.Delegate.prototype.combine(this.h5.triangulationStatusChanged, this.i4.on(this));
		this.h5.m();
	}

, 
	i3: function () {
		if (this.h5 == null) {
			return;
		}
		this.h5.v();
		this.h5.triangulationStatusChanged = $.ig.Delegate.prototype.remove(this.h5.triangulationStatusChanged, this.i4.on(this));
		this.h5 = null;
	}
, 
	h5: null, 
	triangulationStatusChanged: null
, 
	i4: function (a, b) {
		var $self = this;
		if (this.triangulationStatusChanged != null) {
			this.triangulationStatusChanged(this, new $.ig.TriangulationStatusEventArgs(b.currentStatus()));
		}
		if (b.currentStatus() >= 100) {
			if (this.h5 == null) {
				return;
			}
			this.h5.triangulationStatusChanged = $.ig.Delegate.prototype.remove(this.h5.triangulationStatusChanged, this.i4.on(this));
			this.ir(this.h5.r());
			this.h5 = null;
			var c = (function () { var $ret = new $.ig.FastItemsSource();
$ret.f($self.ir()); return $ret;}());
			this.it(this.i5(c, "v1"));
			this.iu(this.i5(c, "v2"));
			this.iv(this.i5(c, "v3"));
			this.renderSeries(false);
		}
	}

, 
	i5: function (a, b) {
		if (b == null) {
			return a.aa(null, null);
		}
		var c = null;
		var d = $.ig.SeriesViewer.prototype.getCoercionMethod(b, this.coercionMethods());
		b = d.c();
		c = d.d();
		return a.aa(b, c);
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.Series.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.XYTriangulatingSeries.prototype.be:
				var e = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, c);
				if (e != null) {
					e.ac(this.io());
					e.ac(this.ip());
					this.io(null);
					this.ip(null);
				}
				this.i6();
				var f = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, d);
				if (f != null) {
					this.io(this.gs(this.xMemberPath()));
					this.ip(this.gs(this.yMemberPath()));
				}
				this.renderSeries(false);
				break;
			case $.ig.XYTriangulatingSeries.prototype.hp:
				if (this.dx() != null) {
					this.dx().ac(this.io());
					this.io(this.gs(this.xMemberPath()));
				}
				this.i6();
				this.renderSeries(false);
				break;
			case $.ig.XYTriangulatingSeries.prototype.hq:
				if (this.dx() != null) {
					this.dx().ac(this.ip());
					this.ip(this.gs(this.yMemberPath()));
				}
				this.i6();
				this.renderSeries(false);
				break;
			case $.ig.XYTriangulatingSeries.prototype.ht:
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
			case $.ig.XYTriangulatingSeries.prototype.hu:
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
			case $.ig.XYTriangulatingSeries.prototype.hv:
				if (this.trianglesSource() != null) {
					this.i3();
					this.is((function () { var $ret = new $.ig.FastItemsSource();
					$ret.f($self.trianglesSource()); return $ret;}()));

				} else {
					this.is(null);
				}
				break;
			case $.ig.XYTriangulatingSeries.prototype.hw:
				var g = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, c);
				if (g != null) {
					g.ac(this.it());
					g.ac(this.iu());
					g.ac(this.iv());
					this.it(null);
					this.iu(null);
					this.iv(null);
				}
				var h = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, d);
				if (h != null) {
					this.it(this.i5(h, this.triangleVertexMemberPath1()));
					this.iu(this.i5(h, this.triangleVertexMemberPath2()));
					this.iv(this.i5(h, this.triangleVertexMemberPath3()));
				}
				this.renderSeries(false);
				break;
			case $.ig.XYTriangulatingSeries.prototype.hx:
				if (this.is() != null) {
					this.is().ac(this.it());
					this.it(this.i5(this.is(), this.triangleVertexMemberPath1()));
				}
				this.renderSeries(false);
				break;
			case $.ig.XYTriangulatingSeries.prototype.hy:
				if (this.is() != null) {
					this.is().ac(this.iu());
					this.iu(this.i5(this.is(), this.triangleVertexMemberPath2()));
				}
				this.renderSeries(false);
				break;
			case $.ig.XYTriangulatingSeries.prototype.hz:
				if (this.is() != null) {
					this.is().ac(this.iv());
					this.iv(this.i5(this.is(), this.triangleVertexMemberPath3()));
				}
				this.renderSeries(false);
				break;
		}
	}

, 
	es: function (a, b, c) {
		return $.ig.Series.prototype.es.call(this, a, b, c) && this.dx() != null && this.xAxis() != null && this.yAxis() != null && a.width() > 0 && a.height() > 0 && this.it() != null && this.it().count() > 0 && this.iu() != null && this.iu().count() > 0 && this.iv() != null && this.iv().count() > 0 && this.io() != null && this.io().count() > 0 && this.ip() != null && this.ip().count() > 0;
	}

, 
	i6: function () {
		if (this.trianglesSource() == null) {
			this.ir(null);
			this.it(null);
			this.iu(null);
			this.iv(null);
			this.iq(false);
		}
	}

, 
	_ir: null,
	ir: function (a) {
		if (arguments.length === 1) {
			this._ir = a;
			return a;
		} else {
			return this._ir;
		}
	}

, 
	fs: function () {
		$.ig.Series.prototype.fs.call(this);
		if (this.xAxis() != null) {
			this.xAxis().renderAxis();
		}
		if (this.yAxis() != null) {
			this.yAxis().renderAxis();
		}
	}

, 
	fc: function (a, b, c, d) {
		$.ig.Series.prototype.fc.call(this, a, b, c, d);
		this.i6();
		this.renderSeries(false);
	}

, 
	em: function (a) {
		if (a != null && a == this.xAxis() && this.io() != null) {
			return new $.ig.AxisRange(this.io().minimum(), this.io().maximum());
		}
		if (a != null && a == this.yAxis() && this.ip() != null) {
			return new $.ig.AxisRange(this.ip().minimum(), this.ip().maximum());
		}
		return null;
	}

, 
	ey: function (a, b) {
		this.renderSeries(false);
	}

, 
	ez: function (a, b) {
		this.renderSeries(false);
	}

, 
	trianglesSource: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.trianglesSourceProperty, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.trianglesSourceProperty);
		}
	}

, 
	is: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.h7, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.h7);
		}
	}

, 
	triangleVertexMemberPath1: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath1Property, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath1Property);
		}
	}

, 
	triangleVertexMemberPath2: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath2Property, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath2Property);
		}
	}

, 
	triangleVertexMemberPath3: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath3Property, a);
			return a;
		} else {
			return this.b($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath3Property);
		}
	}
, 
	h8: null
, 
	it: function (a) {
		if (arguments.length === 1) {
			var b = this.it() != a;
			if (b) {
				var c = this.it();
				this.h8 = a;
				this.ej($.ig.XYTriangulatingSeries.prototype.h0, c, this.it());
			}
			return a;
		} else {
			return this.h8;
		}
	}
, 
	h9: null
, 
	iu: function (a) {
		if (arguments.length === 1) {
			var b = this.iu() != a;
			if (b) {
				var c = this.iu();
				this.h9 = a;
				this.ej($.ig.XYTriangulatingSeries.prototype.h1, c, this.iu());
			}
			return a;
		} else {
			return this.h9;
		}
	}
, 
	ia: null
, 
	iv: function (a) {
		if (arguments.length === 1) {
			var b = this.iv() != a;
			if (b) {
				var c = this.iv();
				this.ia = a;
				this.ej($.ig.XYTriangulatingSeries.prototype.h2, c, this.iv());
			}
			return a;
		} else {
			return this.ia;
		}
	}
,
	$type: new $.ig.Type('XYTriangulatingSeries', $.ig.Series.prototype.$type)
}, true);

$.ig.util.defType('ContourLineSeries', 'XYTriangulatingSeries', {

		init: function () {


			$.ig.XYTriangulatingSeries.prototype.init.call(this);
						this.a3($.ig.ContourLineSeries.prototype.$type);
				this.valueResolver(new $.ig.LinearContourValueResolver());
		}
, 
	_jz: null,
	jz: function (a) {
		if (arguments.length === 1) {
			this._jz = a;
			return a;
		} else {
			return this._jz;
		}
	}

, 
	ed: function () {
		this.jz(new $.ig.ContourLineSeriesView(this));
		return this.jz();
	}

, 
	valueMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ContourLineSeries.prototype.valueMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.ContourLineSeries.prototype.valueMemberPathProperty);
		}
	}
, 
	ju: null
, 
	j0: function (a) {
		if (arguments.length === 1) {
			var b = this.j0() != a;
			if (b) {
				var c = this.j0();
				this.ju = a;
				this.ej($.ig.ContourLineSeries.prototype.jr, c, this.j0());
			}
			return a;
		} else {
			return this.ju;
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.XYTriangulatingSeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.ContourLineSeries.prototype.be:
				var e = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, c);
				if (e != null) {
					e.ac(this.j0());
					this.j0(null);
				}
				var f = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, d);
				if (f != null) {
					this.j0(this.gs(this.valueMemberPath()));
				}
				this.renderSeries(false);
				break;
			case $.ig.ContourLineSeries.prototype.jq:
				if (this.dx() != null) {
					this.dx().ac(this.j0());
					this.j0(this.gs(this.valueMemberPath()));
				}
				this.renderSeries(false);
				break;
			case $.ig.ContourLineSeries.prototype.jt:
				this.renderSeries(false);
				break;
			case $.ig.ContourLineSeries.prototype.js:
				var g = c;
				var h = d;
				if (g != null) {
					g.unregisterSeries(this);
				}
				if (h != null) {
					h.registerSeries(this);
				}
				this.renderSeries(false);
				break;
			case $.ig.ContourLineSeries.prototype.bs:
				this.renderSeries(false);
				break;
		}
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		if (a) {
			(b).cw(a);
		}
	}

, 
	eo: function (a) {
		var $self = this;
		$.ig.XYTriangulatingSeries.prototype.eo.call(this, a);
		if (this.ew(this.view())) {
			return;
		}
		var b;
		var c;
		(function () { var $ret = $self.getViewInfo(c, b); c = $ret.viewportRect; b = $ret.windowRect; return $ret.ret; }());
		var d = new $.ig.ScalerParams(b, c, this.xAxis().isInverted());
		d.c = this.seriesViewer().effectiveViewport();
		var e = new $.ig.ScalerParams(b, c, this.yAxis().isInverted());
		e.c = this.seriesViewer().effectiveViewport();
		var f = this.xAxis();
		var g = this.yAxis();
		var h = this.it().count();
		var i;
		var xArr_ = this.io().asArray();
		i = xArr_.slice(0);
		var j;
		var yArr_ = this.ip().asArray();
		j = yArr_.slice(0);
		var k = this.j0().asArray();
		var l = this.it().asArray();
		var m = this.iu().asArray();
		var n = this.iv().asArray();
		var o = this.valueResolver().f(this.j0());
		var p = new $.ig.List$1(Number, 1, o).x();
		f.getScaledValueList(i, 0, i.length, d);
		g.getScaledValueList(j, 0, j.length, e);
		var q = p.length;
		var r = new Array(q);
		for (var s = 0; s < q; ++s) {
			r[s] = new $.ig.ContourBuilder();
		}
		var t = this.d6().top();
		var u = this.d6().left();
		var v = this.d6().right();
		var w = this.d6().bottom();
		var x;
		var y;
		var z;
		var aa;
		var ab = i.length;
		for (var ac = 0; ac < h; ac++) {
			var ad = l[ac];
			var ae = m[ac];
			var af = n[ac];
			if ((ad >= ab) || (ae >= ab) || (af >= ab) || (ad < 0) || (ae < 0) || (af < 0)) {
				continue;
			}
			var ag = i[ad];
			var ah = j[ad];
			var ai = {__x: ag, __y: ah, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var aj = i[ae];
			var ak = j[ae];
			var al = {__x: aj, __y: ak, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var am = i[af];
			var an = j[af];
			var ao = {__x: am, __y: an, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			x = al.__y < ao.__y ? al.__y : ao.__y;
			x = ai.__y < x ? ai.__y : x;
			y = al.__y > ao.__y ? al.__y : ao.__y;
			y = ai.__y > y ? ai.__y : y;
			z = al.__x < ao.__x ? al.__x : ao.__x;
			z = ai.__x < z ? ai.__x : z;
			aa = al.__x > ao.__x ? al.__x : ao.__x;
			aa = ai.__x > aa ? ai.__x : aa;
			if (x < w && y > t && z < v && aa > u) {
				var ap = k[ad];
				var aq = k[ae];
				var ar = k[af];
				if (isNaN(ap) || isNaN(aq) || isNaN(ar)) {
					continue;
				}
				for (var as = 0; as < q; as++) {
					var at = p[as];
					var au = r[as];
					switch ((ap < at ? 1 : 0) | (aq < at ? 2 : 0) | (ar < at ? 4 : 0)) {
						case 0:
							break;
						case 1:
							au.e(au.n(ad, ai.__x, ai.__y, ap, ae, al.__x, al.__y, aq, at), au.n(af, ao.__x, ao.__y, ar, ad, ai.__x, ai.__y, ap, at));
							break;
						case 2:
							au.e(au.n(ae, al.__x, al.__y, aq, af, ao.__x, ao.__y, ar, at), au.n(ad, ai.__x, ai.__y, ap, ae, al.__x, al.__y, aq, at));
							break;
						case 3:
							au.e(au.n(ae, al.__x, al.__y, aq, af, ao.__x, ao.__y, ar, at), au.n(af, ao.__x, ao.__y, ar, ad, ai.__x, ai.__y, ap, at));
							break;
						case 4:
							au.e(au.n(af, ao.__x, ao.__y, ar, ad, ai.__x, ai.__y, ap, at), au.n(ae, al.__x, al.__y, aq, af, ao.__x, ao.__y, ar, at));
							break;
						case 5:
							au.e(au.n(ad, ai.__x, ai.__y, ap, ae, al.__x, al.__y, aq, at), au.n(ae, al.__x, al.__y, aq, af, ao.__x, ao.__y, ar, at));
							break;
						case 6:
							au.e(au.n(af, ao.__x, ao.__y, ar, ad, ai.__x, ai.__y, ap, at), au.n(ad, ai.__x, ai.__y, ap, ae, al.__x, al.__y, aq, at));
							break;
						case 7:
							break;
					}
				}
			}
		}
		var av = new $.ig.Clipper(0, c.inflate11(2), false);
		var aw = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type)), 0);
		for (var ax = 0; ax < q; ++ax) {
			var ay = r[ax];
			var az = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
			var a0 = ay.d();
			for (var a1 = 0; a1 < a0.count(); a1++) {
				var a2 = a0.__inner[a1];
				var a3 = new $.ig.List$1($.ig.Point.prototype.$type, 0);
				av.h(a3);
				var a5 = a2.getEnumerator();
				while (a5.moveNext()) {
					var a4 = a5.current();
					av.l({__x: ay.j().item(a4), __y: ay.k().item(a4), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				}
				av.h(null);
				az.add(a3);
			}
			aw.add(az);
		}
		this.jz().cv(aw, p);
	}

, 
	fillScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ContourLineSeries.prototype.fillScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.ContourLineSeries.prototype.fillScaleProperty);
		}
	}
, 
	jv: null
, 
	valueResolver: function (a) {
		if (arguments.length === 1) {
			var b = a != this.valueResolver();
			if (b) {
				if (this.jv != null) {
					this.jv.updated = $.ig.Delegate.prototype.remove(this.jv.updated, this.j5.on(this));
				}
				var c = this.jv;
				this.jv = a;
				if (this.jv != null) {
					this.jv.updated = $.ig.Delegate.prototype.combine(this.jv.updated, this.j5.on(this));
				}
				this.ej($.ig.ContourLineSeries.prototype.jt, c, a);
				this.renderSeries(false);
			}
			return a;
		} else {
			return this.jv;
		}
	}

, 
	j5: function (a, b) {
		this.renderSeries(false);
	}

, 
	es: function (a, b, c) {
		return $.ig.XYTriangulatingSeries.prototype.es.call(this, a, b, c) && this.valueResolver() != null && this.io() != null && this.ip() != null && this.it() != null && this.iu() != null && this.iv() != null && this.io().count() > 0 && this.ip().count() > 0 && this.it().count() > 0 && this.iu().count() > 0 && this.iv().count() > 0;
	}
,
	$type: new $.ig.Type('ContourLineSeries', $.ig.XYTriangulatingSeries.prototype.$type)
}, true);

$.ig.util.defType('PolylineBuilder', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

		this.a = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.List$1.prototype.$type.specialize($.ig.Number.prototype.$type), 0);
		this.b = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.List$1.prototype.$type.specialize($.ig.Number.prototype.$type), 0);
	}
, 
	c: function () {
		this.a.clear();
		this.b.clear();
	}

, 
	d: function () {
		var a = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Number.prototype.$type), 0);
		var c = this.a.values().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			a.add(b);
		}
		return a;
	}

, 
	e: function (a, b) {
		var $self = this;
		var c = null;
		var d = null;
		(function () { var $ret = $self.b.tryGetValue(a, c); c = $ret.value; return $ret.ret; }());
		(function () { var $ret = $self.a.tryGetValue(b, d); d = $ret.value; return $ret.ret; }());
		if (c == null && d == null) {
			var e = new $.ig.List$1($.ig.Number.prototype.$type, 0);
			e.add(a);
			e.add(b);
			this.a.add(a, e);
			this.b.add(b, e);
		}
		if (c == null && d != null) {
			this.a.remove(b);
			d.insert(0, a);
			this.a.add(a, d);
		}
		if (c != null && d == null) {
			this.b.remove(a);
			c.add(b);
			this.b.add(b, c);
		}
		if (c != null && d != null) {
			if (c == d) {
				c.add(b);
				this.b.remove(a);

			} else {
				this.a.remove(d.__inner[0]);
				this.b.remove(d.__inner[d.count() - 1]);
				this.b.remove(c.__inner[c.count() - 1]);
				c.w(d);
				this.b.add(c.__inner[c.count() - 1], c);
			}
		}
	}
, 
	a: null, 
	b: null,
	$type: new $.ig.Type('PolylineBuilder', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ContourBuilder', 'PolylineBuilder', {
	init: function () {

		$.ig.PolylineBuilder.prototype.init.call(this);

		this.g = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Number.prototype.$type, 0);
		this.h = new $.ig.List$1($.ig.Single.prototype.$type, 0);
		this.i = new $.ig.List$1($.ig.Single.prototype.$type, 0);
	}
, 
	c: function () {
		$.ig.PolylineBuilder.prototype.c.call(this);
		this.g.c();
		this.h.c();
		this.i.c();
	}

, 
	j: function () {
			return this.h;
	}

, 
	k: function () {
			return this.i;
	}

, 
	n: function (a, b, c, d, e, f, g, h, i) {
		var $self = this;
		var j = Math.min(a, e) + $.ig.ContourBuilder.prototype.f * Math.max(a, e);
		var k = -1;
		if (!(function () { var $ret = $self.g.tryGetValue(j, k); k = $ret.value; return $ret.ret; }())) {
			k = this.h.count();
			var l = (i - d) / (h - d);
			this.g.add(j, k);
			this.h.add((b + l * (f - b)));
			this.i.add((c + l * (g - c)));
		}
		return k;
	}
, 
	g: null, 
	h: null, 
	i: null,
	$type: new $.ig.Type('ContourBuilder', $.ig.PolylineBuilder.prototype.$type)
}, true);

$.ig.util.defType('ContourLineSeriesView', 'SeriesView', {

	_ci: null,
	ci: function (a) {
		if (arguments.length === 1) {
			this._ci = a;
			return a;
		} else {
			return this._ci;
		}
	}

, 
	_cj: null,
	cj: function (a) {
		if (arguments.length === 1) {
			this._cj = a;
			return a;
		} else {
			return this._cj;
		}
	}

, 
		init: function (a) {

			var $self = this;
			this.ce = new $.ig.List$1($.ig.Brush.prototype.$type, 0);

			$.ig.SeriesView.prototype.init.call(this, a);
						this.ck(new $.ig.List$1($.ig.Path.prototype.$type, 0));
				this.cj(a);
				this.ci((function () { var $ret = new $.ig.Pool$1($.ig.Path.prototype.$type);
				$ret.create($self.cr.on($self));
				$ret.destroy($self.cu.on($self));
				$ret.activate($self.cs.on($self));
				$ret.disactivate($self.ct.on($self)); return $ret;}()));
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
	cr: function () {
		var $self = this;
		var a = new $.ig.Path();
		a.dataContext((function () { var $ret = new $.ig.DataContext();
		$ret.series($self.u()); return $ret;}()));
		this.ck().add(a);
		return a;
	}

, 
	cs: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	ct: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	cu: function (a) {
		this.ck().remove(a);
	}
, 
	ce: null
, 
	cv: function (a, b) {
		var $self = this;
		var c = 0;
		this.ce.clear();
		for (var d = 0; d < b.length; d++) {
			var e = b[d];
			var f = a.__inner[c];
			var g = new $.ig.PathGeometry();
			for (var h = 0; h < f.count(); h++) {
				var i = f.__inner[h];
				if (i.count() == 0) {
					continue;
				}
				var j = i.toPointCollection();
				var k = (function () { var $ret = new $.ig.PathFigure();
$ret.__isClosed = false;
$ret.__isFilled = false;
$ret.__startPoint = j.__inner[0]; return $ret;}());
				k.__segments.add((function () { var $ret = new $.ig.PolyLineSegment();
				$ret.__points = j; return $ret;}()));
				g.d().add(k);
			}
			this.ci().item(c).bp(g);
			if (this.ci().item(c).dataContext() != null) {
				(this.ci().item(c).dataContext()).item(e);
			}
			if (this.cj().fillScale() != null) {
				var l = this.cj().fillScale().getBrushByValue(e, this.cj().j0());
				if (l == null) {
					l = this.u().actualBrush();
				}
				this.ce.add(l);

			} else {
				this.ce.add(this.u().actualBrush());
			}
			c++;
		}
		this.ci().g(c);
		this.an();
	}

, 
	ar: function (a, b) {
		$.ig.SeriesView.prototype.ar.call(this, a, b);
		var c = a;
		c.__stroke = this.ce.__inner[b];
		c.a7(this.u().thickness());
		if (c.ab() != null) {
			this.z().aa(c, c.ab());
		}
	}

, 
	at: function (a, b) {
		$.ig.SeriesView.prototype.at.call(this, a, b);
		var c = a;
		var d = this.ay(b);
		c.__stroke = d;
		c.a7(this.u().thickness() + $.ig.ShapeSeriesViewBase.prototype.cd);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		for (var c = 0; c < this.ck().count(); c++) {
			var d = this.ck().__inner[c];
			if (d.__visibility != $.ig.Visibility.prototype.collapsed) {
				this.ap(d, c, b);
				a.g(d);
			}
		}
	}

, 
	cw: function (a) {
		this.ci().g(0);
	}
,
	$type: new $.ig.Type('ContourLineSeriesView', $.ig.SeriesView.prototype.$type)
}, true);

$.ig.util.defType('ContourValueResolver', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

	}
, 
	f: function (a) {
	}

, 
	g: function (a, b, c) {
		if (this.updated != null) {
			this.updated(this, $.ig.EventArgs.prototype.empty);
		}
	}
, 
	updated: null,
	$type: new $.ig.Type('ContourValueResolver', $.ig.DependencyObject.prototype.$type)
}, true);

$.ig.util.defType('LinearContourValueResolver', 'ContourValueResolver', {

		init: function () {


			$.ig.ContourValueResolver.prototype.init.call(this);
		}
, 
	m: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.LinearContourValueResolver.prototype.k, a);
			return a;
		} else {
			return this.b($.ig.LinearContourValueResolver.prototype.k);
		}
	}

, 
	f: function (a) {
		var $self = this;
		var $iter = function () { return function (a) { return {
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
							this.$b = 0;
							this.$state = 5;
							break;
						case 2:
							this.$current =  a.minimum() + (a.maximum() - a.minimum()) * (this.$b + 1) / (this.$this.m() + 1);
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							this.$b++;
							this.$state = 5;
							break;
						case 5:
							if (this.$b < this.$this.m()) {
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
		}; } (a) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}
,
	$type: new $.ig.Type('LinearContourValueResolver', $.ig.ContourValueResolver.prototype.$type)
}, true);

$.ig.util.defType('ShapeSeriesBase', 'Series', {

		init: function () {

			this.h0 = null;
			this.h1 = null;
			this.h3 = null;
			this.h4 = null;
			this.h5 = null;
			this.h6 = null;

			$.ig.Series.prototype.init.call(this);
						this.it(this.shapeFilterResolution());
				this.iq(new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.FlattenedShape.prototype.$type, 0));
				this.h8 = $.ig.Rect.prototype.empty();
		}
, 
	shapeMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeriesBase.prototype.shapeMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeriesBase.prototype.shapeMemberPathProperty);
		}
	}
, 
	hz: null
, 
	im: function (a) {
		if (arguments.length === 1) {
			var b = this.im() != a;
			if (b) {
				var c = this.im();
				this.hz = a;
				this.ej($.ig.ShapeSeriesBase.prototype.hq, c, this.im());
			}
			return a;
		} else {
			return this.hz;
		}
	}

, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeriesBase.prototype.xAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeriesBase.prototype.xAxisProperty);
		}
	}

, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeriesBase.prototype.yAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeriesBase.prototype.yAxisProperty);
		}
	}

, 
	iw: function (array_) {
		var a = $.isArray(array_);
		return a;
	}

, 
	convertToListList: function (a) {
		var b = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
		var c;
		var curr_;
		var d;
		var e;
		for (var f = 0; f < a.length; f++) {
			c = a[f];
			var g = new $.ig.List$1($.ig.Point.prototype.$type, 0);
			for (var h = 0; h < c.length; h++) {
				curr_ = c[h];
				d = curr_.x;
				e = curr_.y;
				g.add({__x: d, __y: e, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			}
			b.add(g);
		}
		return b;
	}

, 
	gu: function (a) {
		if (this.dx() != null && this.iw(this.itemsSource()) && a != null && a.split('!').length != 2) {
			if (this.coercionMethods() == null) {
				this.coercionMethods({});
			}
			var methods_ = this.coercionMethods();
			methods_.convertToListList = this.convertToListList;
			a += "!convertToListList";
		}
		return $.ig.Series.prototype.gu.call(this, a);
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		$.ig.Series.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.ShapeSeriesBase.prototype.be:
				var e = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, c);
				if (e != null) {
					e.ac(this.im());
					e.ac(this.ir());
					this.im(null);
					this.ir(null);
				}
				var f = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, d);
				if (f != null) {
					this.im(this.gu(this.shapeMemberPath()));
					this.ir(this.gs(this.fillMemberPath()));
				}
				this.renderSeries(false);
				break;
			case $.ig.ShapeSeriesBase.prototype.hp:
				if (this.dx() != null) {
					this.dx().ac(this.im());
					this.im(this.gu(this.shapeMemberPath()));
				}
				break;
			case $.ig.ShapeSeriesBase.prototype.hq:
				this.iz();
				break;
			case $.ig.ShapeSeriesBase.prototype.hu:
				if (this.dx() != null) {
					this.dx().ac(this.ir());
					this.ir(this.gs(this.fillMemberPath()));
				}
				break;
			case $.ig.ShapeSeriesBase.prototype.hr:
			case $.ig.ShapeSeriesBase.prototype.hs:
				this.h0 = this.xAxis();
				this.h1 = this.yAxis();
				var g = c;
				var h = d;
				this.je(g);
				this.jd(h);
				if ((h != null && !h.updateRange()) || (h == null && g != null)) {
					this.renderSeries(false);
				}
				break;
			case $.ig.ShapeSeriesBase.prototype.hx:
				this.is().dm();
				this.renderSeries(false);
				break;
			case $.ig.ShapeSeriesBase.prototype.hw:
				this.is().dl();
				this.renderSeries(false);
				break;
			case $.ig.ShapeSeries.prototype.jy:
				this.renderSeries(false);
				break;
			case $.ig.ShapeSeriesBase.prototype.bp:
				this.h2 = this.resolution();
				break;
			case $.ig.Series.prototype.bs:
				this.renderSeries(false);
				break;
			case $.ig.ShapeSeriesBase.prototype.hy:
				this.it(this.shapeFilterResolution());
				this.renderSeries(false);
				break;
		}
	}
, 
	h0: null, 
	h1: null, 
	h2: null
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
	iz: function () {
		this.io(null);
		if (this.im() == null) {
			return;
		}
		this.io(new $.ig.List$1($.ig.Rect.prototype.$type, 2, this.im().count()));
		for (var a = 0; a < this.im().count(); a++) {
			if ($.ig.util.cast($.ig.IEnumerable$1.prototype.$type.specialize($.ig.IEnumerable$1.prototype.$type.specialize($.ig.Point.prototype.$type)), this.im().item(a)) !== null) {
				this.io().add((this.im().item(a)).getBounds11());
			} else if ($.ig.util.cast($.ig.IEnumerable$1.prototype.$type.specialize($.ig.Point.prototype.$type), this.im().item(a)) !== null) {
				var b = this.im().item(a);
				this.io().add(b.getBounds());
			}
		}
	}

, 
	i0: function (a, b, c, d) {
			var e = b;
			return this.i9(a, e, c, d);
	}
, 
	h3: null, 
	h4: null, 
	h5: null, 
	h6: null
, 
	ip: function () {
			return true;
	}

, 
	_iq: null,
	iq: function (a) {
		if (arguments.length === 1) {
			this._iq = a;
			return a;
		} else {
			return this._iq;
		}
	}

, 
	i4: function () {
		return false;
	}

, 
	eo: function (a) {
		var $self = this;
		if (this.ew(this.view())) {
			return;
		}
		var b;
		var c;
		(function () { var $ret = $self.getViewInfo(c, b); c = $ret.viewportRect; b = $ret.windowRect; return $ret.ret; }());
		if (c.width() < 1 || c.height() < 1) {
			return;
		}
		var d = this.xAxis();
		var e = this.yAxis();
		var f = this.seriesViewer().effectiveViewport();
		var g = new $.ig.ScalerParams(b, c, d.isInverted());
		g.c = f;
		var h = new $.ig.ScalerParams(b, c, e.isInverted());
		h.c = f;
		this.is().da(c.width(), c.height());
		this.is().c6();
		var i = new $.ig.Rect(0, 0, 0, 0, 0);
		var j;
		var k;
		var l;
		var m;
		var n = this.im().count();
		if (this.h4 == null || this.h4.length != n) {
			this.h4 = new Array(n);
			this.h3 = new Array(n);
			this.h5 = new Array(n);
			this.h6 = new Array(n);
		}
		var o = this.h4;
		var p = this.h3;
		var q = this.h5;
		var r = this.h6;
		var s;
		for (var t = 0; t < n; t++) {
		    s = this.io().__inner[t];
		    //MM
		    if (s != undefined) {
		        o[t] = s.top();
		        p[t] = s.left();
		        q[t] = s.right();
		        r[t] = s.bottom();
		    }

		}
		this.h0.getScaledValueList(p, 0, p.length, g);
		this.h0.getScaledValueList(q, 0, q.length, g);
		this.h1.getScaledValueList(o, 0, o.length, h);
		this.h1.getScaledValueList(r, 0, r.length, h);
		this.is().dp(p, o, q, r);
		var u = this.im();
		var v = this.dx();
		this.jc();
		var w = c.left();
		var x = c.right();
		var y = c.top();
		var z = c.bottom();
		var aa = null;
		if (this.h8.isEmpty()) {
			aa = null;

		} else {
			aa = new $.ig.Clipper(1, this.h8.left(), this.h8.bottom(), this.h8.right(), this.h8.top(), this.ip());
		}
		var ab = this.i4();
		if (ab) {
			this.iq().clear();
		}
		var ac;
		for (var ad = 0; ad < n; ad++) {
			l = p[ad];
			j = o[ad];
			k = r[ad];
			m = q[ad];
			i.x(Math.min(l, m));
			i.y(Math.min(j, k));
			i.width(Math.max(l, m) - i.x());
			i.height(Math.max(j, k) - i.y());
			if (i.intersectsWith(c)) {
				if (i.x() < w || i.y() < y || i.x() > x || i.y() > z) {
					ac = aa;

				} else {
					ac = null;
				}
				var ae = this.i0(ac, u.item(ad), g, h);
				if (ab) {
					var af = 0;
					var ag = null;
					for (var ah = 0; ah < ae.count(); ah++) {
						var ai = ae.__inner[ah];
						var aj = ai.e().width() * ai.e().height();
						if (aj > af) {
							af = aj;
							ag = ai;
						}
					}
					this.iq().add(ad, ag);
				}
				this.is().cy(ad, v.item(ad), i, ae);
			}
		}
		this.is().c7();
	}

, 
	fs: function () {
		$.ig.Series.prototype.fs.call(this);
		if (this.xAxis() != null) {
			this.xAxis().renderAxis();
		}
		if (this.yAxis() != null) {
			this.yAxis().renderAxis();
		}
	}

, 
	ey: function (a, b) {
		this.renderSeries(false);
	}

, 
	ez: function (a, b) {
		this.renderSeries(false);
	}

, 
	fillScale: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeriesBase.prototype.fillScaleProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeriesBase.prototype.fillScaleProperty);
		}
	}

, 
	fillMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeriesBase.prototype.fillMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeriesBase.prototype.fillMemberPathProperty);
		}
	}
, 
	h7: null
, 
	ir: function (a) {
		if (arguments.length === 1) {
			var b = this.ir() != a;
			if (b) {
				var c = this.ir();
				this.h7 = a;
				this.ej($.ig.ShapeSeriesBase.prototype.hv, c, this.ir());
			}
			return a;
		} else {
			return this.h7;
		}
	}

, 
	fc: function (a, b, c, d) {
		$.ig.Series.prototype.fc.call(this, a, b, c, d);
		switch (a) {
			case $.ig.FastItemsSourceEventAction.prototype.change:
				if (d == this.shapeMemberPath()) {
					this.io().__inner[b] = (this.im().item(b)).getBounds3();
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.insert:
				for (var e = b; e < b + c; e++) {
					this.io().insert(e, (this.im().item(e)).getBounds3());
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.remove:
				this.io().q(b, c);
				break;
			case $.ig.FastItemsSourceEventAction.prototype.replace:
				for (var f = b; f < b + c; f++) {
					this.io().__inner[f] = (this.im().item(f)).getBounds3();
				}
				break;
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				this.iz();
				break;
		}
		this.renderSeries(false);
	}

, 
	es: function (a, b, c) {
		return $.ig.Series.prototype.es.call(this, a, b, c) && this.im() != null && this.xAxis() != null && this.yAxis() != null && a.width() > 0 && a.height() > 0;
	}

, 
	ea: function (a) {
		$.ig.Series.prototype.ea.call(this, a);
		this.is($.ig.util.cast($.ig.ShapeSeriesViewBase.prototype.$type, a));
	}

, 
	_is: null,
	is: function (a) {
		if (arguments.length === 1) {
			this._is = a;
			return a;
		} else {
			return this._is;
		}
	}

, 
	i9: function (a, b, c, d) {
		var e = new $.ig.List$1($.ig.FlattenedShape.prototype.$type, 0);
		var f;
		
	    //MM
		var g = 0;
		if (b != undefined) {
		    g = b.count();
		}
		for (var h = 0; h < g; h++) {
			f = b.__inner[h];
			var i = this.ja(a, f, c, d);
			if (i == null) {
				continue;
			}
			e.add(i);
		}
		return e;
	}

, 
	ja: function (a, b, c, d) {
		var e = this.jb(b, c, d);
		var f = e.c();
		var g = e.d();
		var h = f.length;
		var i = Number.MAX_VALUE;
		var j = Number.MAX_VALUE;
		var k = -Number.MAX_VALUE;
		var l = -Number.MAX_VALUE;
		var m;
		var n;
		for (var o = 0; o < h; o++) {
			m = f[o];
			n = g[o];
			i = m < i ? m : i;
			j = n < j ? n : j;
			k = m > k ? m : k;
			l = n > l ? n : l;
		}
		var p = !(i > this.h8.right() || k < this.h8.left() || j > this.h8.bottom() || l < this.h8.top());
		if (!p) {
			return null;
		}
		var q = a != null && (i < this.h8.left() || j < this.h8.top() || k > this.h8.right() || l > this.h8.bottom());
		var r = new $.ig.Rect(0, i, j, k - i, l - j);
		if (!this.is().cu(r)) {
			return null;
		}
		i = i < this.h8.left() ? this.h8.left() : i;
		k = k > this.h8.right() ? this.h8.right() : k;
		j = j < this.h8.top() ? this.h8.top() : j;
		l = l > this.h8.bottom() ? this.h8.bottom() : l;
		var s = $.ig.PolySimplification.prototype.a(e, this.resolution());
		var t = new $.ig.DefaultFlattener().d(e.c(), e.d(), s, this.h2);
		var u = t.count();
		if (q) {
			var v = new $.ig.List$1($.ig.Point.prototype.$type, 0);
			a.h(v);
			for (var w = 0; w < u; w++) {
				a.l(t.__inner[w]);
			}
			a.h(null);
			t = v;
		}
		var x = new $.ig.FlattenedShape();
		x.d(t);
		x.e(new $.ig.Rect(0, i, j, k - i, l - j));
		x.f(r);
		return x;
	}

, 
	jb: function (a, b, c) {
		var d = this.h0;
		var e = this.h1;
		var f = a.count();
		var g = new Array(f);
		var h = new Array(f);
		for (var i = 0; i < f; i++) {
			g[i] = a.__inner[i].__x;
			h[i] = a.__inner[i].__y;
		}
		d.getScaledValueList(g, 0, g.length, b);
		e.getScaledValueList(h, 0, h.length, c);
		return new $.ig.Tuple$2($.ig.Array.prototype.$type, $.ig.Array.prototype.$type, g, h);
	}

, 
	shapeStyleSelector: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeriesBase.prototype.shapeStyleSelectorProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeriesBase.prototype.shapeStyleSelectorProperty);
		}
	}

, 
	shapeStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeriesBase.prototype.shapeStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeriesBase.prototype.shapeStyleProperty);
		}
	}
, 
	h8: null
, 
	jc: function () {
		this.is().dq();
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		var c = b;
		c.db();
	}

, 
	jd: function (a) {
		if (a != null) {
			a.registerSeries(this);
		}
	}

, 
	je: function (a) {
		if (a != null) {
			a.deregisterSeries(this);
		}
	}

, 
	getHitDataContext: function (a) {
		var b = this.is().dn(a);
		var c = null;
		if (b != null) {
			c = b.dataContext();
		}
		if (c != null) {
			return c;
		}
		return $.ig.Series.prototype.getHitDataContext.call(this, a);
	}

, 
	jf: function (a) {
		return this.dx().item(a);
	}

, 
	d3: function () {
			return true;
	}

, 
	shapeFilterResolution: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeriesBase.prototype.shapeFilterResolutionProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeriesBase.prototype.shapeFilterResolutionProperty);
		}
	}

, 
	_it: null,
	it: function (a) {
		if (arguments.length === 1) {
			this._it = a;
			return a;
		} else {
			return this._it;
		}
	}
,
	$type: new $.ig.Type('ShapeSeriesBase', $.ig.Series.prototype.$type)
}, true);

$.ig.util.defType('PolylineSeries', 'ShapeSeriesBase', {

		init: function () {


			$.ig.ShapeSeriesBase.prototype.init.call(this);
						this.a3($.ig.PolylineSeries.prototype.$type);
		}
, 
	ed: function () {
		return new $.ig.PolylineSeriesView(this);
	}

, 
	ip: function () {
			return false;
	}
,
	$type: new $.ig.Type('PolylineSeries', $.ig.ShapeSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('ShapeSeriesViewBase', 'SeriesView', {

		init: function (a) {

			this.ce = new $.ig.List$1($.ig.ShapeHitRegion.prototype.$type, 0);
			this.cf = null;
			this.cg = null;

			$.ig.SeriesView.prototype.init.call(this, a);
						this.cp(a);
				this.cs(this.ct());
				this.cr(new $.ig.List$1($.ig.Path.prototype.$type, 0));
		}
, 
	ct: function () {
		var $self = this;
		return (function () { var $ret = new $.ig.Pool$1($.ig.FrameworkElement.prototype.$type);
		$ret.create($self.de.on($self));
		$ret.activate($self.df.on($self));
		$ret.disactivate($self.dg.on($self));
		$ret.destroy($self.dh.on($self)); return $ret;}());
	}

, 
	cu: function (a) {
		return a.width() >= this.cp().it() && a.height() >= this.cp().it();
	}

, 
	cv: function (a) {
		var b = new $.ig.List$1($.ig.PointCollection.prototype.$type, 0);
		var c;
		var d = a.count();
		for (var e = 0; e < d; e++) {
			c = a.__inner[e];
			var f = new $.ig.PointCollection(1, c.d());
			b.add(f);
		}
		return b;
	}

, 
	_cp: null,
	cp: function (a) {
		if (arguments.length === 1) {
			this._cp = a;
			return a;
		} else {
			return this._cp;
		}
	}
, 
	ce: null
, 
	cy: function (a, b, c, d) {
		if (d != null && d.count() > 0) {
			var e = $.ig.ShapeSeriesViewBase.prototype.cv(d);
			c.intersect(this.ab());
			if (!this.cu(c)) {

			} else {
				var f = this.c5(a, e);
				if (f != null) {
					var g = this.cs().item(this.cq());
					for (var h = 0; h < d.count(); h++) {
						var i = new $.ig.ShapeHitRegion();
						i.a = d.__inner[h].e();
						i.b = d.__inner[h].d();
						i.c = a;
						i.d = g;
						this.ce.add(i);
					}
					if (g.dataContext() != null) {
						(g.dataContext()).item(b);
					}
					this.c2(g);
					this.cz(g, f);
					this.c1(g, b);
					this.cq(this.cq() + 1);
				}
			}
		}
	}

, 
	cz: function (a, b) {
	}

, 
	c0: function (a, b, c) {
		if (b.__fill == null) {
			b.__fill = a.u().actualBrush();
		}
		if (b.__stroke == null) {
			b.__stroke = a.u().actualOutline();
		}
	}

, 
	c1: function (a, b) {
		if (a == null) {
			return;
		}
		if (this.cf != null) {
			a.ab(this.cf.selectStyle(b, a));
		}
		if (a.ab() == null) {
			a.ab(this.cp().shapeStyle());
		}
	}

, 
	c2: function (a) {
	}

, 
	c3: function (a, b) {
		var c = Math.floor(a.left());
		var d = Math.ceil(a.right());
		var e = Math.floor(a.top());
		var f = Math.ceil(a.bottom());
		for (var g = c; g < d; g++) {
			for (var h = e; h < f; h++) {
				this.c4(g, h, b);
			}
		}
	}

, 
	c4: function (a, b, c) {
	}

, 
	c5: function (a, b) {
	}

, 
	c6: function () {
		this.cq(0);
	}

, 
	c7: function () {
		this.cs().g(this.cq());
		this.an();
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
	da: function (a, b) {
	}

, 
	db: function () {
		this.cs().g(0);
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
	de: function () {
		var $self = this;
		var a = this.cp();
		var b = (function () { var $ret = new $.ig.Path();
$ret.dataContext((function () { var $ret = new $.ig.DataContext();
$ret.series(a); return $ret;}())); return $ret;}());
		this.cr().add(b);
		return b;
	}

, 
	df: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	dg: function (a) {
		(a.dataContext()).item(null);
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	dh: function (a) {
		this.cr().remove1(a);
	}

, 
	_cs: null,
	cs: function (a) {
		if (arguments.length === 1) {
			this._cs = a;
			return a;
		} else {
			return this._cs;
		}
	}

, 
	dk: function (a, b, c) {
		if (b == null) {
			return null;
		}
		var d = new $.ig.PathGeometry();
		var e;
		var f = b.count();
		for (var g = 0; g < f; g++) {
			e = b.__inner[g];
			if (e.count() < 1) {
				continue;
			}
			var h = new $.ig.PolyLineSegment();
			h.__points = e;
			var i = new $.ig.PathFigure();
			i.__isFilled = c;
			i.__isClosed = c;
			i.__startPoint = e.__inner[0];
			i.__segments.add(h);
			d.d().add(i);
		}
		return d;
	}

, 
	ar: function (a, b) {
		$.ig.SeriesView.prototype.ar.call(this, a, b);
		var c = a;
		c.__fill = this.u().actualBrush();
		c.__stroke = this.u().actualOutline();
		c.a7(this.u().thickness());
		if (c.ab() != null) {
			this.z().aa(c, c.ab());
		}
	}

, 
	at: function (a, b) {
		$.ig.SeriesView.prototype.at.call(this, a, b);
		var c = a;
		var d = this.ay(b);
		c.__fill = d;
		c.__stroke = d;
		c.a7(this.u().thickness() + $.ig.ShapeSeriesViewBase.prototype.cd);
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		for (var c = 0; c < this.cr().count(); c++) {
			var d = this.cr().__inner[c];
			if (d.__visibility != $.ig.Visibility.prototype.collapsed) {
				this.ap(d, c, b);
				a.g(d);
			}
		}
	}
, 
	cf: null, 
	cg: null
, 
	dl: function () {
		this.cf = this.cp().shapeStyleSelector();
	}

, 
	dm: function () {
		this.cg = this.cp().shapeStyle();
	}

, 
	dn: function (a) {
		if (this.ce.count() == 0) {
			return null;
		}
		var b = a.__x;
		var c = a.__y;
		var d = this.ce.count();
		var e = this.ce;
		var f = null;
		for (var g = 0; g < d; g++) {
			f = e.__inner[g];
			if (b >= f.a.left() && b <= f.a.right() && c >= f.a.top() && c <= f.a.bottom()) {
				if ($.ig.PolygonUtil.prototype.a(f.b, a)) {
					return f.d;
				}
			}
		}
		return null;
	}
, 
	ch: null, 
	ci: null, 
	cj: null, 
	ck: null
, 
	dp: function (a, b, c, d) {
		this.ch = a;
		this.ci = b;
		this.cj = c;
		this.ck = d;
		this.ce.clear();
	}

, 
	dq: function () {
		var $self = this;
		var a = this.ab();
		var b = (function () { var $ret = new $.ig.Path();
$ret.ab($self.cp().shapeStyle()); return $ret;}());
		if (this.z() != null) {
			this.z().aa(b, b.ab());
		}
		this.cp().h8 = a.inflate11(b.a7());
	}
,
	$type: new $.ig.Type('ShapeSeriesViewBase', $.ig.SeriesView.prototype.$type)
}, true);

$.ig.util.defType('PolylineSeriesView', 'ShapeSeriesViewBase', {

		init: function (a) {


			$.ig.ShapeSeriesViewBase.prototype.init.call(this, a);
		}
, 
	c5: function (a, b) {
		return this.dk(a, b, false);
	}

, 
	c1: function (a, b) {
		$.ig.ShapeSeriesViewBase.prototype.c1.call(this, a, b);
		$.ig.ShapeSeriesViewBase.prototype.c0(this, a, b);
	}

, 
	cz: function (a, b) {
		var c = $.ig.util.cast($.ig.Path.prototype.$type, a);
		if (c == null) {
			return;
		}
		c.bp(b);
	}

, 
	c2: function (a) {
		$.ig.ShapeSeriesViewBase.prototype.c2.call(this, a);
	}

, 
	ar: function (a, b) {
		$.ig.ShapeSeriesViewBase.prototype.ar.call(this, a, b);
		var c = a;
		c.__fill = null;
	}

, 
	at: function (a, b) {
		$.ig.ShapeSeriesViewBase.prototype.at.call(this, a, b);
		var c = a;
		c.__fill = null;
	}

, 
	cu: function (a) {
		return a.width() >= this.cp().it() || a.height() >= this.cp().it();
	}
,
	$type: new $.ig.Type('PolylineSeriesView', $.ig.ShapeSeriesViewBase.prototype.$type)
}, true);

$.ig.util.defType('ScatterAreaSeries', 'XYTriangulatingSeries', {
	jt: null
, 
		init: function () {


			$.ig.XYTriangulatingSeries.prototype.init.call(this);
						this.a3($.ig.ScatterAreaSeries.prototype.$type);
		}, 
	ju: null
, 
	colorScale: function (a) {
		if (arguments.length === 1) {
			var b = this.ju != a;
			if (b) {
				var c = this.ju;
				if (this.ju != null) {
				this.ju.propertyChanged = $.ig.Delegate.prototype.remove(this.ju.propertyChanged, this.j4.on(this));
				}
				this.ju = a;
				if (this.ju != null) {
				this.ju.propertyChanged = $.ig.Delegate.prototype.combine(this.ju.propertyChanged, this.j4.on(this));
				}
				this.ej($.ig.ScatterAreaSeries.prototype.jq, c, this.ju);
			}
			return a;
		} else {
			return this.ju;
		}
	}

, 
	j4: function (a, b) {
		this.renderSeries(false);
	}

, 
	colorMemberPath: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ScatterAreaSeries.prototype.colorMemberPathProperty, a);
			return a;
		} else {
			return this.b($.ig.ScatterAreaSeries.prototype.colorMemberPathProperty);
		}
	}
, 
	jv: null
, 
	j0: function (a) {
		if (arguments.length === 1) {
			var b = this.j0() != a;
			if (b) {
				var c = this.j0();
				this.jv = a;
				this.ej($.ig.ScatterAreaSeries.prototype.js, c, this.j0());
			}
			return a;
		} else {
			return this.jv;
		}
	}

, 
	d3: function () {
			return true;
	}

, 
	e6: function (a, b, c, d) {
		$.ig.XYTriangulatingSeries.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.ScatterAreaSeries.prototype.be:
				var e = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, c);
				if (e != null) {
					e.ac(this.j0());
					this.j0(null);
				}
				var f = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, d);
				if (f != null) {
					this.j0(this.gs(this.colorMemberPath()));
				}
				this.renderSeries(false);
				break;
			case $.ig.ScatterAreaSeries.prototype.jr:
				if (this.dx() != null) {
					this.dx().ac(this.j0());
					this.j0(this.gs(this.colorMemberPath()));
				}
				this.renderSeries(false);
				break;
			case $.ig.ScatterAreaSeries.prototype.jq:
				this.renderSeries(false);
				break;
		}
	}

, 
	eo: function (a) {
		var $self = this;
		$.ig.XYTriangulatingSeries.prototype.eo.call(this, a);
		if (this.ew(this.view())) {
			return;
		}
		var b;
		var c;
		(function () { var $ret = $self.getViewInfo(c, b); c = $ret.viewportRect; b = $ret.windowRect; return $ret.ret; }());
		var d = null;
		var e = null;
		var f = this.xAxis();
		var g = this.yAxis();
		var h = this.seriesViewer().effectiveViewport();
		var i = new $.ig.ScalerParams(b, c, f.isInverted());
		i.c = h;
		var j = new $.ig.ScalerParams(b, c, g.isInverted());
		j.c = h;
		e = this.kc(i, j);
		if (e != null) {
			this.j3().cw(e);

		} else {
			this.j3().cy(d);
		}
	}

, 
	j7: function () {
		var a = Math.round(this.d6().width()) * Math.round(this.d6().height());
		if (this.jt == null || this.jt.length != a) {
			this.jt = new Array(a);
			for (var b = 0; b < a; b++) {
				this.jt[b] = 0;
			}

		} else {
			for (var c = 0; c < a; c++) {
				this.jt[c] = 0;
			}
		}
	}

, 
	eh: function (a) {
		var b = Math.round(this.d6().width());
		var c = Math.round(this.d6().height());
		if (this.jt == null || this.jt.length != (b * c) || this.it() == null || this.it().count() < 1 || this.iu() == null || this.iu().count() < 1 || this.iv() == null || this.iv().count() < 1) {
			return null;
		}
		var d = this.seriesViewer().windowRect();
		var e = (a.__x - d.left()) / d.width();
		var f = (a.__y - d.top()) / d.height();
		var g = Math.round(b * e);
		var h = Math.round(c * f);
		var i = (b * h) + g;
		if (i < 0 || i > this.jt.length - 1) {
			return null;
		}
		var j = this.jt[i] - 1;
		if (j < 0 || j > this.it().count()) {
			return null;
		}
		var k = this.j1().length;
		var l = this.it().item(j);
		var m = this.iu().item(j);
		var n = this.iv().item(j);
		if ((l >= k) || (m >= k) || (n >= k)) {
			return null;
		}
		var o = (this.j1()[l] - this.d6().left()) / this.d6().width();
		var p = (this.j2()[l] - this.d6().top()) / this.d6().height();
		var q = (this.j1()[m] - this.d6().left()) / this.d6().width();
		var r = (this.j2()[m] - this.d6().top()) / this.d6().height();
		var s = (this.j1()[n] - this.d6().left()) / this.d6().width();
		var t = (this.j2()[n] - this.d6().top()) / this.d6().height();
		var u = Math.pow(o - e, 2) + Math.pow(p - f, 2);
		var v = Math.pow(q - e, 2) + Math.pow(r - f, 2);
		var w = Math.pow(s - e, 2) + Math.pow(t - f, 2);
		if (u < v && u < w) {
			return this.dx().item(l);
		}
		if (v < u && v < w) {
			return this.dx().item(m);
		}
		if (w < u && w < v) {
			return this.dx().item(n);
		}
		return this.dx().item(l);
	}

, 
	_j1: null,
	j1: function (a) {
		if (arguments.length === 1) {
			this._j1 = a;
			return a;
		} else {
			return this._j1;
		}
	}

, 
	_j2: null,
	j2: function (a) {
		if (arguments.length === 1) {
			this._j2 = a;
			return a;
		} else {
			return this._j2;
		}
	}

, 
	kc: function (a, b) {
		var $self = this;
		var c = this.xAxis();
		var d = this.yAxis();
		var e = this.it().count();
		var f;
		var xArr_ = this.io().asArray();
		f = xArr_.slice(0);
		var g;
		var yArr_ = this.ip().asArray();
		g = yArr_.slice(0);
		var h = this.j0().asArray();
		var i = this.it().asArray();
		var j = this.iu().asArray();
		var k = this.iv().asArray();
		this.j1(f);
		this.j2(g);
		c.getScaledValueList(f, 0, f.length, a);
		d.getScaledValueList(g, 0, g.length, b);
		var l = this.colorScale();
		if (l == null) {
			l = (function () { var $ret = new $.ig.CustomPaletteColorScale();
			$ret.palette(new $.ig.ObservableCollection$1($.ig.Color.prototype.$type, 1, (function () { var $ret = new Array();
			$ret.add($.ig.Color.prototype.s(0, 0, 0, 0));
			$ret.add($.ig.Color.prototype.s(1, 0, 0, 0)); return $ret;}())));
			$ret.interpolationMode($.ig.ColorScaleInterpolationMode.prototype.interpolateHSV); return $ret;}());
		}
		var m = this.j3().cv(a.b, l, this.j0());
		var n = this.d6().top();
		var o = this.d6().left();
		var p = this.d6().right();
		var q = this.d6().bottom();
		var r;
		var s;
		var t;
		var u;
		this.j7();
		var v = f.length;
		for (var w = 0; w < e; w++) {
			var x = i[w];
			var y = j[w];
			var z = k[w];
			if ((x >= v) || (y >= v) || (z >= v) || (x < 0) || (y < 0) || (z < 0)) {
				continue;
			}
			var aa = f[x];
			var ab = g[x];
			var ac = {__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var ad = f[y];
			var ae = g[y];
			var af = {__x: ad, __y: ae, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var ag = f[z];
			var ah = g[z];
			var ai = {__x: ag, __y: ah, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			r = af.__y < ai.__y ? af.__y : ai.__y;
			r = ac.__y < r ? ac.__y : r;
			s = af.__y > ai.__y ? af.__y : ai.__y;
			s = ac.__y > s ? ac.__y : s;
			t = af.__x < ai.__x ? af.__x : ai.__x;
			t = ac.__x < t ? ac.__x : t;
			u = af.__x > ai.__x ? af.__x : ai.__x;
			u = ac.__x > u ? ac.__x : u;
			if (r < q && s > n && t < p && u > o) {
				var aj = h[x];
				var ak = h[y];
				var al = h[z];
				m.z(w, this.jt, ac, af, ai, aj, ak, al);
			}
		}
		return m;
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		var c = b;
		c.cx();
	}

, 
	ed: function () {
		return new $.ig.ScatterAreaSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.Series.prototype.ea.call(this, a);
		this.j3($.ig.util.cast($.ig.ScatterAreaSeriesView.prototype.$type, a));
	}

, 
	_j3: null,
	j3: function (a) {
		if (arguments.length === 1) {
			this._j3 = a;
			return a;
		} else {
			return this._j3;
		}
	}
,
	$type: new $.ig.Type('ScatterAreaSeries', $.ig.XYTriangulatingSeries.prototype.$type)
}, true);

$.ig.util.defType('TriangleRasterizer', 'Object', {

		init: function (a, b, c, d, e, f, g) {

			this.b = 0;
			this.c = 0;
			this.f = null;
			this.g = null;

			$.ig.Object.prototype.init.call(this);
						if (a == null || b == null || e == null) {
					throw new $.ig.Error(0);
				}
				this.a = a;
				this.l(b);
				this.m(e);
				this.h(f);
				this.i(g);
				this.d = c;
				this.e = d;
		}, 
	a: null, 
	b: null
, 
	h: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			return a;
		} else {
			return this.b;
		}
	}
, 
	c: null
, 
	i: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			return this.c;
		}
	}
, 
	d: null
, 
	j: function (a) {
		if (arguments.length === 1) {
			this.d = a;
			return a;
		} else {
			return this.d;
		}
	}
, 
	e: null
, 
	k: function (a) {
		if (arguments.length === 1) {
			this.e = a;
			return a;
		} else {
			return this.e;
		}
	}
, 
	f: null
, 
	l: function (a) {
		if (arguments.length === 1) {
			this.f = a;
			return a;
		} else {
			return this.f;
		}
	}
, 
	g: null
, 
	m: function (a) {
		if (arguments.length === 1) {
			this.g = a;
			return a;
		} else {
			return this.g;
		}
	}

, 
	z: function (a, b, c, d, e, f, g, h) {
		var i = this.b;
		var j = this.c;
		var k;
		var l;
		if (d.__y > e.__y) {
			k = d;
			d = e;
			e = k;
			l = g;
			g = h;
			h = l;
		}
		if (c.__y > e.__y) {
			k = c;
			c = e;
			e = k;
			l = f;
			f = h;
			h = l;
		}
		if (c.__y > d.__y) {
			k = c;
			c = d;
			d = k;
			l = f;
			f = g;
			g = l;
		}
		var m = Math.round(c.__y);
		var n = Math.round(d.__y);
		var o = Math.round(e.__y);
		if (o == m) {
			return;
		}
		if (isNaN(f) || isNaN(g) || isNaN(h)) {
			return;
		}
		var p = (d.__x - c.__x) * (e.__y - c.__y) - (e.__x - c.__x) * (d.__y - c.__y) >= 0;
		var q = Math.max(0, m);
		var r = Math.min(j - 1, n);
		for (var s = q; s < r; ++s) {
			var t = ((s - m)) / ((n - m));
			var u = c.__x + t * (d.__x - c.__x);
			var v = f + t * (g - f);
			var w = ((s - m)) / ((o - m));
			var x = c.__x + w * (e.__x - c.__x);
			var y = f + w * (h - f);
			if (p) {
				this.aa(a, b, s, Math.round(x), Math.round(u), y, v);

			} else {
				this.aa(a, b, s, Math.round(u), Math.round(x), v, y);
			}
		}
			var z = Math.min(j - 1, Math.max(0, n));
			var aa = Math.min(j - 1, o);
			var ab = 0;
			var ac = d.__x + ab * (e.__x - d.__x);
			var ad = g + ab * (h - g);
			var ae = z;
			var af = (o - m);
			var ag = ((ae - m)) / af;
			var ah = c.__x + ag * (e.__x - c.__x);
			var ai = f + ag * (h - f);
			do {
				if (p) {
					this.aa(a, b, ae, Math.round(ah), Math.round(ac), ai, ad);

				} else {
					this.aa(a, b, ae, Math.round(ac), Math.round(ah), ad, ai);
				}
				++ae;
				ab = ((ae - n)) / ((o - n));
				ac = d.__x + ab * (e.__x - d.__x);
				ad = g + ab * (h - g);
				ag = ((ae - m)) / af;
				ah = c.__x + ag * (e.__x - c.__x);
				ai = f + ag * (h - f);

			 } while (ae < aa);
	}

, 
	aa: function (a, b, c, d, e, f, g) {
		var h = this.b;
		var i = d > 0 ? d : 0;
		var j = e < h - 1 ? e : h - 1;
		var k = c * h * 4 + (i * 4);
		var l = g - f;
		var m = 1 / (e - d);
		var n = this.g;
		var o = this.d;
		var p = this.e;
		var q = c * h;
		for (var r = i; r <= j; r++) {
			var s = f + l * (r - d) * m;
			var color_ = this.f.getColor(s, o, p, n);
			this.a[k] = color_.__r;
			this.a[k + 1] = color_.__g;
			this.a[k + 2] = color_.__b;
			this.a[k + 3] = color_.__a;
			b[q + r] = a + 1;
			k += 4;
		}
	}

, 
	ab: function () {
	}
,
	$type: new $.ig.Type('TriangleRasterizer', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ScatterAreaSeriesView', 'SeriesView', {

	_ch: null,
	ch: function (a) {
		if (arguments.length === 1) {
			this._ch = a;
			return a;
		} else {
			return this._ch;
		}
	}

, 
		init: function (a) {


			$.ig.SeriesView.prototype.init.call(this, a);
						this.ch(a);
		}
, 
	cn: function (a, b) {
	}

, 
	_ci: null,
	ci: function (a) {
		if (arguments.length === 1) {
			this._ci = a;
			return a;
		} else {
			return this._ci;
		}
	}

, 
	_cj: null,
	cj: function (a) {
		if (arguments.length === 1) {
			this._cj = a;
			return a;
		} else {
			return this._cj;
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
	cu: function () {
		if (this.cj() == null) {
			this.cj($("<canvas></canvas>"));
			var a = (this.cj()[0]).getContext("2d");
			this.ck(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), a));
		}
		var b = Math.round(this.ab().left());
		var c = Math.round(this.ab().left());
		var d = Math.round(this.ab().width());
		var e = Math.round(this.ab().height());
		this.cj().attr("width", d.toString());
		this.cj().attr("height", e.toString());
		this.ci((this.ck().c()).getImageData(0, 0, d, e));
		return this.ci().data;
	}

, 
	cv: function (a, b, c) {
		var d = Math.round(this.ab().left());
		var e = Math.round(this.ab().left());
		var f = Math.round(this.ab().width());
		var g = Math.round(this.ab().height());
		return new $.ig.TriangleRasterizer(this.cu(), b, c.minimum(), c.maximum(), c, f, g);
	}

, 
	cw: function (a) {
		this.cy(null);
	}

, 
	cx: function () {
		if (this.ck() != null) {
			this.ck().t(this.ab().left(), this.ab().top(), this.ab().width(), this.ab().height());
		}
	}

, 
	a0: function (a, b) {
		$.ig.SeriesView.prototype.a0.call(this, a, b);
		if (this.cj() == null) {
			return;
		}
		if (b) {
			var c = new $.ig.Rectangle();
			c.y(this.ab().left());
			c.x(this.ab().top());
			c.v(this.ab().width());
			c.w(this.ab().height());
			c.__fill = this.az();
			a.f(c);

		} else {
			var d = Math.round(this.ab().left());
			var e = Math.round(this.ab().left());
			var f = Math.round(this.ab().width());
			var g = Math.round(this.ab().height());
			a.v(this.cj()[0], d, e, f, g);
		}
	}

, 
	cy: function (a) {
		var b = Math.round(this.ab().left());
		var c = Math.round(this.ab().left());
		var d = Math.round(this.ab().width());
		var e = Math.round(this.ab().height());
		(this.ck().c()).putImageData(this.ci(), 0, 0);
		this.an();
	}
,
	$type: new $.ig.Type('ScatterAreaSeriesView', $.ig.SeriesView.prototype.$type)
}, true);

$.ig.util.defType('ShapeSeries', 'ShapeSeriesBase', {

		init: function () {

			var $self = this;
			this.j3 = new $.ig.ScalerParams($.ig.ShapeSeries.prototype.j2, $.ig.ShapeSeries.prototype.j2, false);
			this.j4 = new $.ig.ScalerParams($.ig.ShapeSeries.prototype.j2, $.ig.ShapeSeries.prototype.j2, false);

			$.ig.ShapeSeriesBase.prototype.init.call(this);
						this.a3($.ig.ShapeSeries.prototype.$type);
				this.jz = new $.ig.NumericMarkerManager(1, function (a) { return $self.kg().dx().item(a)				}, function (b) { return $self.kh().k().item(b)				}, function (c) {
					var d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
					var f = $self.kg().dx().i().getEnumerator();
					while (f.moveNext()) {
						var e = f.current();
						if (!c.containsKey(e)) {
							d.add1(e);
						}
					}
					var h = d.getEnumerator();
					while (h.moveNext()) {
						var g = h.current();
						$self.kg().dx().u(g);
					}
				}, function () {
					if ($self.j0 == null || $self.j0.length != $self.kh().k().g()) {
						$self.j0 = new Array($self.kh().k().g());
						for (var i = 0; i < $self.kh().k().g(); i++) {
							$self.j0[i] = new $.ig.Point(0);
						}
					}
					var j = $self.kh().g().getUnscaledValue($self.j3.b.left(), $self.j3);
					var k = $self.kh().g().getUnscaledValue($self.j3.b.right(), $self.j3);
					var l = $self.kh().h().getUnscaledValue($self.j4.b.bottom(), $self.j4);
					var m = $self.kh().h().getUnscaledValue($self.j4.b.top(), $self.j4);
					if ($self.kh().i()) {
						var n = j;
						j = k;
						k = n;
					}
					if ($self.kh().j()) {
						var o = l;
						l = m;
						m = o;
					}
					var p = $self.kh();
					var q = p.g();
					var r = p.h();
					var s;
					var t;
					var u = $self.j3.b.left();
					var v = $self.j3.b.right();
					var w = $self.j4.b.top();
					var x = $self.j4.b.bottom();
					for (var y = 0; y < $self.kh().k().g(); y++) {
						s = 0;
						t = 0;
						var z = null;
						(function () { var $ret = $self.iq().tryGetValue(y, z); z = $ret.value; return $ret.ret; }());
						if (z == null) {
							$self.j0[y].__x = NaN;
							$self.j0[y].__y = NaN;

						} else {
							var aa = z.f();
							var ab = aa.getCenter();
							s = ab.__x;
							t = ab.__y;
							if (s >= u && s <= v && t >= w && t <= x) {
								$self.j0[y].__x = s;
								$self.j0[y].__y = t;

							} else {
								$self.j0[y].__x = NaN;
								$self.j0[y].__y = NaN;
							}
						}
					}
					return $self.j0;
				}, function () {
					if ($self.j1 == null || $self.j1.length != $self.kg().dx().j()) {
						$self.j1 = new Array($self.kg().dx().j());
					}
					var ac = 0;
					var ad = $self.dx();
					var af = $self.kg().dx().i().getEnumerator();
					while (af.moveNext()) {
						var ae = af.current();
						$self.j1[ac] = ad.x(ae);
						ac++;
					}
					return $self.j1;
				}, function () { return $self.markerCollisionAvoidance()				});
				this.jz.an(this.kg().eh.on(this.kg()));
		}
, 
	i4: function () {
		return this.ki();
	}

, 
	eo: function (a) {
		var $self = this;
		$.ig.ShapeSeriesBase.prototype.eo.call(this, a);
		if (this.ew(this.view())) {
			return;
		}
		var b		,c;
		(function () { var $ret = $self.getViewInfo(b, c); b = $ret.viewportRect; c = $ret.windowRect; return $ret.ret; }());
		var d = this.seriesViewer().effectiveViewport();
		this.j3 = new $.ig.ScalerParams(c, b, this.xAxis().isInverted());
		this.j3.c = d;
		this.j4 = new $.ig.ScalerParams(c, b, this.yAxis().isInverted());
		this.j4.c = d;
		if (b.width() < 1 || b.height() < 1) {
			return;
		}
		this.kh((function () { var $ret = new $.ig.ShapeAxisInfoCache();
		$ret.g($self.xAxis());
		$ret.h($self.yAxis());
		$ret.i($self.xAxis().isInverted());
		$ret.j($self.yAxis().isInverted());
		$ret.k($self.dx());
		$ret.l($self.im()); return $ret;}()));
		if (this.ki()) {
			var e = new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0);
			this.jz.y(e, 400, c, b, this.resolution());
			this.jz.z(e, false);
		}
	}

, 
	ki: function () {
		return this.actualMarkerTemplate() != null && ((this.markerType() != $.ig.MarkerType.prototype.none && this.markerType() != $.ig.MarkerType.prototype.unset) || this.markerTemplate() != null);
	}

, 
	ed: function () {
		return new $.ig.ShapeSeriesView(this);
	}

, 
	ea: function (a) {
		$.ig.ShapeSeriesBase.prototype.ea.call(this, a);
		this.kg(a);
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
	_kh: null,
	kh: function (a) {
		if (arguments.length === 1) {
			this._kh = a;
			return a;
		} else {
			return this._kh;
		}
	}
, 
	jz: null, 
	j0: null, 
	j1: null, 
	j3: null, 
	j4: null
, 
	ds: function () {
			return true;
	}

, 
	markerType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.markerTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.markerTypeProperty);
		}
	}

, 
	markerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.markerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.markerTemplateProperty);
		}
	}

, 
	actualMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.actualMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.actualMarkerTemplateProperty);
		}
	}

, 
	markerBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.markerBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.markerBrushProperty);
		}
	}

, 
	actualMarkerBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.actualMarkerBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.actualMarkerBrushProperty);
		}
	}

, 
	markerOutline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.markerOutlineProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.markerOutlineProperty);
		}
	}

, 
	actualMarkerOutline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.actualMarkerOutlineProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.actualMarkerOutlineProperty);
		}
	}

, 
	markerStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.markerStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.markerStyleProperty);
		}
	}

, 
	markerCollisionAvoidance: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapeSeries.prototype.markerCollisionAvoidanceProperty, a);
			return a;
		} else {
			return this.b($.ig.ShapeSeries.prototype.markerCollisionAvoidanceProperty);
		}
	}

, 
	fj: function () {
		$.ig.Series.prototype.fj.call(this);
		if (this.markerTemplate() != null) {
			this.kg().ec();

		} else {
			var a = $.ig.MarkerSeries.prototype.resolveMarkerType(this, this.markerType());
			var b = $.ig.MarkerSeries.prototype.getMarkerTemplatePropertyName(a);
			if (b == null) {
				this.actualMarkerTemplate($.ig.MarkerSeries.prototype.nullMarkerTemplate);

			} else {
				this.kg().ef(b);
			}
		}
		if (this.markerBrush() != null) {
			this.kg().ed();

		} else {
			this.actualMarkerBrush(this.seriesViewer() == null ? null : this.seriesViewer().getMarkerBrushByIndex(this.index()));
		}
		if (this.markerOutline() != null) {
			this.kg().ee();

		} else {
			this.actualMarkerOutline(this.seriesViewer() == null ? null : this.seriesViewer().getMarkerOutlineByIndex(this.index()));
		}
	}

, 
	e6: function (a, b, c, d) {
		$.ig.ShapeSeriesBase.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.ShapeSeries.prototype.jt:
			case $.ig.ShapeSeries.prototype.jq:
			case $.ig.ShapeSeries.prototype.jv:
			case $.ig.ShapeSeries.prototype.jr:
				this.fj();
				this.renderSeries(false);
				break;
			case $.ig.ShapeSeries.prototype.js:
				if (c == $.ig.MarkerSeries.prototype.nullMarkerTemplate || d == $.ig.MarkerSeries.prototype.nullMarkerTemplate || (c == null || d != null)) {
					this.kg().eg();
					this.renderSeries(false);
				}
				this.renderSeries(false);
				break;
		}
	}

, 
	getHitDataContext: function (a) {
		var b = this.kg().ei(a);
		var c = null;
		if (b != null) {
			c = b.a9();
		}
		if (c != null) {
			return c;
		}
		return $.ig.ShapeSeriesBase.prototype.getHitDataContext.call(this, a);
	}
,
	$type: new $.ig.Type('ShapeSeries', $.ig.ShapeSeriesBase.prototype.$type)
}, true);

$.ig.util.defType('ShapeAxisInfoCache', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('ShapeAxisInfoCache', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('FlattenedShape', 'Object', {
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
	$type: new $.ig.Type('FlattenedShape', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ShapeSeriesView', 'ShapeSeriesViewBase', {

		init: function (a) {

			this.dr = false;
			this.ds = null;

			$.ig.ShapeSeriesViewBase.prototype.init.call(this, a);
						this.dw(a);
				this.dx(new $.ig.HashPool$2($.ig.Object.prototype.$type, $.ig.Marker.prototype.$type));
				this.dy(new $.ig.List$1($.ig.Marker.prototype.$type, 0));
				this.d4(this.dx());
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
	c5: function (a, b) {
		return this.dk(a, b, true);
	}

, 
	c1: function (a, b) {
		$.ig.ShapeSeriesViewBase.prototype.c1.call(this, a, b);
		$.ig.ShapeSeriesViewBase.prototype.c0(this, a, b);
	}

, 
	cz: function (a, b) {
		var c = a;
		if (c == null) {
			return;
		}
		c.bp(b);
	}
, 
	dr: null
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
	d3: function (a) {
		this.dx().w(a);
	}

, 
	d4: function (a) {
		a.create(this.d5.on(this));
		a.destroy(this.d8.on(this));
		a.activate(this.d9.on(this));
		a.disactivate(this.ea.on(this));
	}

, 
	d5: function () {
		var $self = this;
		var a = new $.ig.Marker();
		if (!this.dr) {
			a.a9((function () { var $ret = new $.ig.DataContext();
			$ret.series($self.u()); return $ret;}()));
		}
		a.ba((this.u()).actualMarkerTemplate());
		this.dy().add(a);
		return a;
	}

, 
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
	d8: function (a) {
		a.a9(null);
		this.dy().remove(a);
	}

, 
	d9: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	ea: function (a) {
		if (a.a9() != null) {
			($.ig.util.cast($.ig.DataContext.prototype.$type, a.a9())).item(null);
		}
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	eb: function (a) {
		this.dr = a;
	}

, 
	c2: function (a) {
		$.ig.ShapeSeriesViewBase.prototype.c2.call(this, a);
	}

, 
	as: function (a, b) {
		$.ig.SeriesView.prototype.as.call(this, a, b);
		var c = a;
		var d = c.a9();
		if (d != null) {
			if (this.dw().actualMarkerBrush() != null) {
				d.actualItemBrush(this.dw().actualMarkerBrush());

			} else {
				d.actualItemBrush(this.cp().actualBrush());
			}
			if (this.dw().actualMarkerBrush() != null) {
				d.outline(this.dw().actualMarkerOutline());

			} else {
				d.outline(this.cp().actualOutline());
			}
			d.thickness(0.5);
		}
	}

, 
	au: function (a, b) {
		$.ig.SeriesView.prototype.au.call(this, a, b);
		var c = a;
		var d = this.ay(b);
		var e = c.a9();
		if (e != null) {
			e.actualItemBrush(d);
			e.outline(d);
			e.thickness(1 + $.ig.ShapeSeriesViewBase.prototype.cd);
		}
	}

, 
	a1: function (a, b) {
		$.ig.SeriesView.prototype.a1.call(this, a, b);
		var c = new $.ig.DataTemplatePassInfo();
		c.isHitTestRender = b;
		c.context = a.c();
		c.viewportTop = this.ab().top();
		c.viewportLeft = this.ab().left();
		c.viewportWidth = this.ab().width();
		c.viewportHeight = this.ab().height();
		c.passID = "Markers";
		var d = new $.ig.DataTemplateRenderInfo();
		d.passInfo = c;
		d.isHitTestRender = b;
		var e = new $.ig.DataTemplateMeasureInfo();
		e.passInfo = c;
		var f = false;
		var g = a.c();
		e.context = g;
		d.context = g;
		var h = 0;
		var i = 0;
		var j = true;
		if (this.dw().actualMarkerTemplate() != null && this.dw().actualMarkerTemplate().passStarting() != null) {
			this.dw().actualMarkerTemplate().passStarting()(c);
		}
		for (var k = 0; k < this.dy().count(); k++) {
			var l = this.dy().__inner[k];
			if (l.__visibility == $.ig.Visibility.prototype.collapsed) {
				continue;
			}
			this.aq(l, k, b);
			if (!f) {
				e.width = l.v();
				e.height = l.w();
				var m = l.ba();
				if (m.measure() != null) {
					e.data = l.a9();
					m.measure()(e);
					f = e.isConstant;
					if (f) {
						h = e.width;
						i = e.height;
					}
				}
				d.availableWidth = e.width;
				d.availableHeight = e.height;

			} else {
				d.availableWidth = h;
				d.availableHeight = i;
			}
			if (!isNaN(l.v()) && !Number.isInfinity(l.v())) {
				d.availableWidth = l.v();
			}
			if (!isNaN(l.w()) && !Number.isInfinity(l.w())) {
				d.availableHeight = l.w();
			}
			j = false;
			a.l(d, l);
			l.t(d.availableWidth);
			l.u(d.availableHeight);
		}
		if (this.dw().actualMarkerTemplate() != null && this.dw().actualMarkerTemplate().passCompleted() != null) {
			this.dw().actualMarkerTemplate().passCompleted()(c);
		}
	}

, 
	ec: function () {
		this.dw().actualMarkerTemplate(null);
		this.dw().actualMarkerTemplate(this.dw().markerTemplate());
	}

, 
	ed: function () {
		this.dw().actualMarkerBrush(null);
		this.dw().actualMarkerBrush(this.dw().markerBrush());
	}

, 
	ee: function () {
		this.dw().actualMarkerOutline(null);
		this.dw().actualMarkerOutline(this.dw().markerOutline());
	}

, 
	ef: function (a) {
		var $self = this;
		switch (a) {
			case "CircleMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().circleMarkerTemplate());
				break;
			case "TriangleMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().triangleMarkerTemplate());
				break;
			case "PyramidMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().pyramidMarkerTemplate());
				break;
			case "SquareMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().squareMarkerTemplate());
				break;
			case "DiamondMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().diamondMarkerTemplate());
				break;
			case "PentagonMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().pentagonMarkerTemplate());
				break;
			case "HexagonMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().hexagonMarkerTemplate());
				break;
			case "TetragramMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().pentagonMarkerTemplate());
				break;
			case "PentagramMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().pentagramMarkerTemplate());
				break;
			case "HexagramMarkerTemplate":
				this.dw().actualMarkerTemplate(this.dw().seriesViewer().hexagramMarkerTemplate());
				break;
		}
	}

, 
	eg: function () {
		var b = this.dy().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.ba(this.dw().actualMarkerTemplate());
		}
		this.an();
	}
, 
	ds: null
, 
	eh: function (a) {
		if (this.ds == null) {
			this.ds = new $.ig.DataTemplateMeasureInfo();
			this.ds.context = this.z().c();
		}
		this.ds.width = a.v();
		this.ds.height = a.w();
		this.ds.data = a.a9();
		var b = a.ba();
		if (b.measure() != null) {
			b.measure()(this.ds);
		}
		return new $.ig.Size(this.ds.width, this.ds.height);
	}

, 
	ei: function (a) {
		var c = this.dy().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			if (b.__visibility == $.ig.Visibility.prototype.collapsed) {
				continue;
			}
			var d = (b.t() / 2) + $.ig.ShapeSeriesView.prototype.cd;
			var e = (b.u() / 2) + $.ig.ShapeSeriesView.prototype.cd;
			if (b.y() - d <= a.__x && b.y() + d >= a.__x && b.x() - e <= a.__y && b.x() + e >= a.__y) {
				return b;
			}
		}
		return null;
	}
,
	$type: new $.ig.Type('ShapeSeriesView', $.ig.ShapeSeriesViewBase.prototype.$type)
}, true);

$.ig.util.defType('ShapeHitRegion', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null, 
	d: null,
	$type: new $.ig.Type('ShapeHitRegion', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ShapefileRecord', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

	}, 
	fields: null, 
	points: null
, 
	f: function (a) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
	}
, 
	propertyChanged: null,
	$type: new $.ig.Type('ShapefileRecord', $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('ShapefileConverter', 'DependencyObjectNotifier', {

		init: function () {

			var $self = this;

			$.ig.DependencyObjectNotifier.prototype.init.call(this);
						this.records(new $.ig.ObservableCollection$1($.ig.ShapefileRecord.prototype.$type, 0));
				this.records().collectionChanged = $.ig.Delegate.prototype.combine(this.records().collectionChanged, function (a, b) {
					if ($self.collectionChanged != null) {
						$self.collectionChanged($self, b);
					}
				});
		}
, 
	worldRect: function (a) {
		if (arguments.length === 1) {
			if (this.j != a) {
				var b = this.j;
				this.j = a;
				this.s($.ig.ShapefileConverter.prototype.g, b, this.j);
			}
			return a;
		} else {
			return this.j;
		}
	}
, 
	j: null
, 
	shapefileSource: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapefileConverter.prototype.shapefileSourceProperty, a);
			return a;
		} else {
			return $.ig.util.cast($.ig.Uri.prototype.$type, this.b($.ig.ShapefileConverter.prototype.shapefileSourceProperty));
		}
	}

, 
	databaseSource: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ShapefileConverter.prototype.databaseSourceProperty, a);
			return a;
		} else {
			return $.ig.util.cast($.ig.Uri.prototype.$type, this.b($.ig.ShapefileConverter.prototype.databaseSourceProperty));
		}
	}

, 
	s: function (a, b, c) {
		switch (a) {
			case $.ig.ShapefileConverter.prototype.h:
			case $.ig.ShapefileConverter.prototype.i:
				if (this.shapefileSource() != null && this.databaseSource() != null) {
					this.u();
				}
				break;
		}
		this.f(a);
	}
, 
	importCompleted: null
, 
	t: function (a) {
		if (this.importCompleted != null) {
			this.importCompleted(this, a);
		}
	}

, 
	u: function () {
		var $self = this;
		var a = null;
		var b = null;
		var c = function () {
	if (a != null && b != null) {
		$self.v(a, b);
		$self.t(new $.ig.AsyncCompletedEventArgs(null, false, null));
	}
};
		$.ig.BinaryFileDownloader.prototype.a(this.shapefileSource().value(), function (d) {
			a = new $.ig.BinaryReader(d, false);
			c();
		}, function (e) {
			throw new $.ig.Error(1, "shape file download error: " + e);
		});
		$.ig.BinaryFileDownloader.prototype.a(this.databaseSource().value(), function (f) {
			b = new $.ig.BinaryReader(f, false);
			c();
		}, function (g) {
			throw new $.ig.Error(1, "dbf file download error: " + g);
		});
	}

, 
	v: function (a, b) {
		var c = $.ig.ShapeFileUtil.prototype.b(a, b);
		this.worldRect(c.e());
		var d = a.d();
		var e = a.e();
		while (d < e) {
			var f = $.ig.ShapeFileUtil.prototype.c(c, a, b);
			var record_ = f;
			if (record_.fields != null) { record_.fieldValues = record_.fields.__inner.proxy; };
			this.records().add(f);
			d = a.d();
			e = a.e();
		}
	}
, 
	l: null
, 
	records: function (a) {
		if (arguments.length === 1) {
			this.l = a;
			return a;
		} else {
			return this.l;
		}
	}
, 
	collectionChanged: null
, 
	indexOf: function (a) {
		return this.l.indexOf(a);
	}

, 
	insert: function (a, b) {
		this.l.insert(a, b);
	}

, 
	removeAt: function (a) {
		this.l.removeAt(a);
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			this.l.__inner[b] = a;
			return a;
		} else {
			return this.l.__inner[b];
		}
	}

, 
	add: function (a) {
		this.l.add(a);
	}

, 
	clear: function () {
		this.l.clear();
	}

, 
	contains: function (a) {
		return this.l.contains(a);
	}

, 
	copyTo: function (a, b) {
		this.l.copyTo(a, b);
	}

, 
	count: function () {
			return this.l.count();
	}

, 
	isReadOnly: function () {
			return (this.l).isReadOnly();
	}

, 
	remove: function (a) {
		return this.l.remove(a);
	}

, 
	getEnumerator: function () {
		return this.l.getEnumerator();
	}
,
	$type: new $.ig.Type('ShapefileConverter', $.ig.DependencyObjectNotifier.prototype.$type, [$.ig.IList$1.prototype.$type.specialize($.ig.ShapefileRecord.prototype.$type), $.ig.INotifyCollectionChanged.prototype.$type])
}, true);

$.ig.util.defType('ShapeFileUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		if ($.ig.ShapeFileUtil.prototype.a == null) {
			$.ig.ShapeFileUtil.prototype.l();
		}
		var c = new $.ig.Header();
		var d = $.ig.ShapeFileUtil.prototype.d(a.p());
		if (d != 9994) {
			throw new $.ig.Error(1, "Corrupt Shp file - incorrect file code");
		}
		a.p();
		a.p();
		a.p();
		a.p();
		a.p();
		$.ig.ShapeFileUtil.prototype.d(a.p());
		a.p();
		c.d(a.p());
		var e = new $.ig.Point(0);
		var f = new $.ig.Point(0);
		e.__x = a.q();
		e.__y = a.q();
		f.__x = a.q();
		f.__y = a.q();
		a.q();
		a.q();
		a.q();
		a.q();
		c.e(new $.ig.Rect(0, e.__x, e.__y, f.__x - e.__x, f.__y - e.__y));
		if (b != null) {
			var g = b.l();
			if (g != 3) {
				throw new $.ig.Error(1, "Corrupt Dbf file - wrong version number");
			}
			b.l();
			b.l();
			b.l();
			b.n();
			b.o();
			var h = b.o();
			b.m(2);
			b.m(1);
			b.m(1);
			b.m(4);
			b.m(8);
			b.m(1);
			b.m(1);
			b.m(2);
			var i = 0;
			while (i < h - 1) {
				var j = new $.ig.XBaseField();
				j.a = $.ig.Encoding.prototype.uTF8().getString(b.m(11), 0, 10).replace("\0", "");
				var k = $.ig.Encoding.prototype.uTF8().getString(b.m(1), 0, 1).charAt(0);
				j.b = $.ig.ShapeFileUtil.prototype.a.item(k);
				b.m(4);
				j.c = b.l();
				b.m(15);
				c.a.add(j);
				i += j.c;
			}
			if (b.l() != 13) {
				throw new $.ig.Error(1, "Corrup Dbf file - Missing field descriptor array terminator");
			}
		}
		return c;
	}

, 
	c: function (a, b, c) {
		var d = $.ig.ShapeFileUtil.prototype.d(b.p());
		var e = $.ig.ShapeFileUtil.prototype.d(b.p());
		var f = b.p();
		var g = null;
		switch (f) {
			case $.ig.ShapeType.prototype.none:
				break;
			case $.ig.ShapeType.prototype.point:
				g = $.ig.ShapeFileUtil.prototype.e(b);
				break;
			case $.ig.ShapeType.prototype.polyLine:
				g = $.ig.ShapeFileUtil.prototype.h(b);
				break;
			case $.ig.ShapeType.prototype.polygon:
				g = $.ig.ShapeFileUtil.prototype.j(b);
				break;
			case $.ig.ShapeType.prototype.polyPoint:
				break;
			case $.ig.ShapeType.prototype.pointZ:
				break;
			case $.ig.ShapeType.prototype.polyLineZ:
				g = $.ig.ShapeFileUtil.prototype.f(b);
				break;
			case $.ig.ShapeType.prototype.polygonZ:
				g = $.ig.ShapeFileUtil.prototype.i(b);
				break;
			case $.ig.ShapeType.prototype.polyPointZ:
				break;
			case $.ig.ShapeType.prototype.pointM:
				break;
			case $.ig.ShapeType.prototype.polyLineM:
				break;
			case $.ig.ShapeType.prototype.polygonM:
				break;
			case $.ig.ShapeType.prototype.polyPointM:
				break;
			case $.ig.ShapeType.prototype.polyPatch:
				break;
			default:
				break;
		}
		if (g == null) {
			throw new $.ig.Error(1, "Corrupt Shp file - failed to read " + f.toString());
		}
		if (c != null) {
			c.m(1);
			g.fields = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 0);
			var i = a.a.getEnumerator();
			while (i.moveNext()) {
				var h = i.current();
				var j = c.m(h.c);
				var k = $.ig.Encoding.prototype.uTF8().getString(j, 0, h.c);
				var l;
				var m;
				var n;
				switch (h.b) {
					case $.ig.XBaseDataType.prototype.number:
						var o = parseFloat(k);
						if (!isNaN(o)) {
							g.fields.add(h.a, o);
						}
						break;
					case $.ig.XBaseDataType.prototype.floatingPoint:
						var p = parseFloat(k);
						if (!isNaN(p)) {
							g.fields.add(h.a, p);
						}
						break;
					case $.ig.XBaseDataType.prototype.character:
						g.fields.add(h.a, k.trim());
						break;
					case $.ig.XBaseDataType.prototype.date:
						var str_ = k;
						var q = Date.parse(str_);
						g.fields.add(h.a, q);
						break;
					default:
						throw new $.ig.Error(1, "Unrecognized field type");
				}
			}
		}
		return g;
	}

, 
	d: function (a) {
		return (((a & 255) << 24) | ((a & 65280) << 8) | ((a & 16711680) >> 8) | ((a & 4278190080) >> 24));
	}

, 
	e: function (a) {
		var $self = this;
		var b = (function () { var $ret = new $.ig.Point(0);
$ret.__x = a.q();
$ret.__y = a.q(); return $ret;}());
		return (function () { var $ret = new $.ig.ShapefileRecord();
		$ret.points = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 1, (function () { var $ret = new Array();
		$ret.add(new $.ig.List$1($.ig.Point.prototype.$type, 1, (function () { var $ret = new Array();
		$ret.add(b); return $ret;}()))); return $ret;}())); return $ret;}());
	}

, 
	f: function (a) {
		var $self = this;
		var b		,c;
		var d = (function () { var $ret = $.ig.ShapeFileUtil.prototype.g(a, b, c); b = $ret.numParts; c = $ret.numPoints; return $ret.ret; }());
		a.q();
		a.q();
		for (var e = 0; e < c; e++) {
			a.q();
		}
		a.q();
		a.q();
		for (var f = 0; f < c; f++) {
			a.q();
		}
		return d;
	}

, 
	g: function (a, b, c) {
		var $self = this;
		var d = new $.ig.Point(0);
		var e = (function () { var $ret = new $.ig.Point(0);
$ret.__x = a.q();
$ret.__y = a.q(); return $ret;}());
		var f = (function () { var $ret = new $.ig.Point(0);
$ret.__x = a.q();
$ret.__y = a.q(); return $ret;}());
		var g = new $.ig.Rect(0, e.__x, e.__y, f.__x - e.__x, f.__y - e.__y);
		b = a.p();
		c = a.p();
		var h = new Array(b);
		for (var i = 0; i < b; ++i) {
			h[i] = a.p();
		}
		var j = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
		for (var k = 0; k < b; ++k) {
			var l = (k < b - 1 ? h[k + 1] : c) - h[k];
			var m = new $.ig.List$1($.ig.Point.prototype.$type, 2, l - 1);
			for (var n = 0; n < l; ++n) {
				d = new $.ig.Point(0);
				d.__x = a.q();
				d.__y = a.q();
				m.add(d);
			}
			if (m.count() > 0) {
				j.add(m);
			}
		}
		return {
			ret: (function () { var $ret = new $.ig.ShapefileRecord();
			$ret.points = j; return $ret;}()),
			numParts: b,
			numPoints: c
		};
		return {
			numParts: b,
			numPoints: c
		};
	}

, 
	h: function (a) {
		var $self = this;
		var b		,c;
		return (function () { var $ret = $.ig.ShapeFileUtil.prototype.g(a, b, c); b = $ret.numParts; c = $ret.numPoints; return $ret.ret; }());
	}

, 
	i: function (a) {
		var $self = this;
		var b		,c;
		var d = (function () { var $ret = $.ig.ShapeFileUtil.prototype.k(a, b, c); b = $ret.numParts; c = $ret.numPoints; return $ret.ret; }());
		a.q();
		a.q();
		for (var e = 0; e < c; e++) {
			a.q();
		}
		a.q();
		a.q();
		for (var f = 0; f < c; f++) {
			a.q();
		}
		return d;
	}

, 
	j: function (a) {
		var $self = this;
		var b		,c;
		return (function () { var $ret = $.ig.ShapeFileUtil.prototype.k(a, b, c); b = $ret.numParts; c = $ret.numPoints; return $ret.ret; }());
	}

, 
	k: function (a, b, c) {
		var $self = this;
		var d = (function () { var $ret = new $.ig.Point(0);
$ret.__x = a.q();
$ret.__y = a.q(); return $ret;}());
		var e = (function () { var $ret = new $.ig.Point(0);
$ret.__x = a.q();
$ret.__y = a.q(); return $ret;}());
		var f = new $.ig.Rect(0, d.__x, d.__y, e.__x - d.__x, e.__y - d.__y);
		var g = new $.ig.Point(0);
		b = a.p();
		c = a.p();
		var h = new Array(b);
		for (var i = 0; i < b; ++i) {
			h[i] = a.p();
		}
		var j = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
		for (var k = 0; k < b; ++k) {
			var l = (k < b - 1 ? h[k + 1] : c) - h[k];
			var m = new $.ig.List$1($.ig.Point.prototype.$type, 2, l);
			g = new $.ig.Point(0);
			g.__x = a.q();
			g.__y = a.q();
			for (var n = 1; n < l; ++n) {
				g = new $.ig.Point(0);
				g.__x = a.q();
				g.__y = a.q();
				m.add(g);
			}
			if (m.count() > 1) {
				j.add(m);
			}
		}
		return {
			ret: (function () { var $ret = new $.ig.ShapefileRecord();
			$ret.points = j; return $ret;}()),
			numParts: b,
			numPoints: c
		};
		return {
			numParts: b,
			numPoints: c
		};
	}
, 
	a: null
, 
	l: function () {
		$.ig.ShapeFileUtil.prototype.a = new $.ig.Dictionary$2($.ig.String.prototype.$type, $.ig.XBaseDataType.prototype.$type, 0);
		$.ig.ShapeFileUtil.prototype.a.item('C', $.ig.XBaseDataType.prototype.character);
		$.ig.ShapeFileUtil.prototype.a.item('N', $.ig.XBaseDataType.prototype.number);
		$.ig.ShapeFileUtil.prototype.a.item('L', $.ig.XBaseDataType.prototype.logical);
		$.ig.ShapeFileUtil.prototype.a.item('D', $.ig.XBaseDataType.prototype.date);
		$.ig.ShapeFileUtil.prototype.a.item('M', $.ig.XBaseDataType.prototype.memo);
		$.ig.ShapeFileUtil.prototype.a.item('F', $.ig.XBaseDataType.prototype.floatingPoint);
		$.ig.ShapeFileUtil.prototype.a.item('B', $.ig.XBaseDataType.prototype.binary);
		$.ig.ShapeFileUtil.prototype.a.item('G', $.ig.XBaseDataType.prototype.general);
		$.ig.ShapeFileUtil.prototype.a.item('P', $.ig.XBaseDataType.prototype.picture);
		$.ig.ShapeFileUtil.prototype.a.item('Y', $.ig.XBaseDataType.prototype.currency);
		$.ig.ShapeFileUtil.prototype.a.item('T', $.ig.XBaseDataType.prototype.dateTime);
		$.ig.ShapeFileUtil.prototype.a.item('I', $.ig.XBaseDataType.prototype.integer);
		$.ig.ShapeFileUtil.prototype.a.item('V', $.ig.XBaseDataType.prototype.variField);
		$.ig.ShapeFileUtil.prototype.a.item('X', $.ig.XBaseDataType.prototype.variant);
		$.ig.ShapeFileUtil.prototype.a.item('@', $.ig.XBaseDataType.prototype.timestamp);
		$.ig.ShapeFileUtil.prototype.a.item('O', $.ig.XBaseDataType.prototype.double1);
		$.ig.ShapeFileUtil.prototype.a.item('+', $.ig.XBaseDataType.prototype.autoIncrement);
	}

, 
		staticInit: function () {


						$.ig.ShapeFileUtil.prototype.l();
		},
	$type: new $.ig.Type('ShapeFileUtil', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Header', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

		this.a = new $.ig.List$1($.ig.XBaseField.prototype.$type, 0);
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
	f: function () {
			return {__x: this.e().left(), __y: this.e().top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	g: function () {
			return {__x: this.e().right(), __y: this.e().bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}
, 
	a: null,
	$type: new $.ig.Type('Header', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XBaseField', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null, 
	b: null, 
	c: null,
	$type: new $.ig.Type('XBaseField', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('StyleSelector', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	selectStyle: function (a, b) {
		return null;
	}
,
	$type: new $.ig.Type('StyleSelector', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ItfConverter', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

	}
, 
	source: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.ItfConverter.prototype.sourceProperty, a);
			return a;
		} else {
			return $.ig.util.cast($.ig.Uri.prototype.$type, this.b($.ig.ItfConverter.prototype.sourceProperty));
		}
	}
, 
	g: null
, 
	triangulationSource: function (a) {
		if (arguments.length === 1) {
			var b = a != this.triangulationSource();
			if (b) {
				var c = this.g;
				this.g = a;
				this.o($.ig.ItfConverter.prototype.f, c, this.triangulationSource());
			}
			return a;
		} else {
			return this.g;
		}
	}

, 
	l: function () {
		var $self = this;
		var a = null;
		var b = function () {
	if (a != null) {
		$self.triangulationSource($.ig.TriangulationSource.prototype.loadItf(a));
	}
	$self.m(new $.ig.AsyncCompletedEventArgs(null, false, null));
};
		$.ig.BinaryFileDownloader.prototype.a(this.source().value(), function (c) {
			a = new $.ig.BinaryReader(c, false);
			b();
		}, function (d) {
			throw new $.ig.Error(1, "itf file download error: " + d);
		});
	}
, 
	importCompleted: null
, 
	m: function (a) {
		if (this.importCompleted != null) {
			this.importCompleted(this, a);
		}
	}

, 
	n: function (a, b, c) {
		switch (a) {
			case $.ig.ItfConverter.prototype.e:
				if (this.source() != null) {
					this.l();
				}
				break;
		}
	}

, 
	o: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		this.n(a, b, c);
	}
, 
	propertyChanged: null,
	$type: new $.ig.Type('ItfConverter', $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('Triangle', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	v1: null, 
	v2: null, 
	v3: null,
	$type: new $.ig.Type('Triangle', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TriangulationSource', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	create: function (a, b, c) {
		var d = new $.ig.TriangulationSource();
		var e = new Array(a);
		var f;
		var g;
		var h = new Array(a);
		var i = new Array(a);
		var j = 0;
		var k = 0;
		for (var l = 0; l < a; l++) {
			f = new $.ig.TriangulationSourcePointRecord();
			g = b(l);
			j = g.__x;
			k = g.__y;
			f.pointX = j;
			f.pointY = k;
			f.value = c(l);
			e[l] = f;
			h[l] = j;
			i[l] = k;
		}
		d.points(e);
		var m = new $.ig.Triangulator(a, h, i);
		m.n();
		d.triangles((m.r().asArrayList()));
		return d;
	}

, 
	loadItf: function (a) {
		a.m(5);
		var b = a.p();
		var c = a.p();
		var d = a.p();
		var e = a.p();
		a.m(e);
		var f = new $.ig.TriangulationSource();
		var g = new Array(b);
		var h;
		for (var i = 0; i < b; i++) {
			h = new $.ig.TriangulationSourcePointRecord();
			h.pointX = a.q();
			h.pointY = a.q();
			h.value = a.r();
			g[i] = h;
		}
		f.points(g);
		var j = new Array(c);
		var k;
		for (var l = 0; l < c; l++) {
			k = new $.ig.Triangle();
			k.v1 = a.p();
			k.v2 = a.p();
			k.v3 = a.p();
			j[l] = k;
		}
		f.triangles(j);
		return f;
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
	_triangles: null,
	triangles: function (a) {
		if (arguments.length === 1) {
			this._triangles = a;
			return a;
		} else {
			return this._triangles;
		}
	}
,
	$type: new $.ig.Type('TriangulationSource', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TriangulatorContext', 'Object', {
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
	i: null, 
	j: null, 
	k: null, 
	l: null, 
	m: null, 
	n: null, 
	o: null, 
	p: null,
	$type: new $.ig.Type('TriangulatorContext', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Triangulator', 'DependencyObject', {
	e: null, 
	f: null, 
	g: null
, 
		init: function (a, b, c) {

			this.h = 0;

			$.ig.DependencyObject.prototype.init.call(this);
						this.e = a;
				this.f = b;
				this.g = c;
		}
, 
	m: function () {
			this.o();
			this.k().p = true;
			this.w();
	}

, 
	n: function () {
			this.o();
			this.k().p = false;
			this.w();
	}

, 
	o: function () {
		var $self = this;
		var a = this.e;
		var b = this.f;
		var c = this.g;
		var d = new $.ig.List$1($.ig.Triangle.prototype.$type, 0);
		if (a >= 3) {
			var e = (function () { var $ret = new $.ig.List$1($.ig.Number.prototype.$type, 0);
$ret.h(a); return $ret;}());
			for (var f = 0; f < a; ++f) {
				e.add(f);
			}
			var i = function (g, h) {
	if (b.item(g) < b.item(h)) {
		return -1;
	} else if (b.item(g) > b.item(h)) {
		return 1;
	}
	if (c.item(g) < c.item(h)) {
		return -1;
	} else if (c.item(g) > c.item(h)) {
		return 1;
	}
	return 0;
};
			e.t(i);
			var j = b.item(e.__inner[0]);
			var k = b.item(e.__inner[a - 1]);
			var l = c.item(e.__inner[0]);
			var m = l;
			for (var n = 1; n < a; n++) {
				l = Math.min(l, c.item(e.__inner[n]));
				m = Math.max(m, b.item(e.__inner[n]));
			}
			var o = k - j;
			var p = m - l;
			var q = Math.max(o, p);
			var r = (k + j) / 2;
			var s = (m + l) / 2;
			var t = {__x: r - 20 * q, __y: s - q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var u = {__x: r, __y: s + 20 * q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var v = {__x: r + 20 * q, __y: s - q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var w = new $.ig.LinkedList$1($.ig.Triangle.prototype.$type);
			var x = new $.ig.LinkedList$1($.ig.Triangle.prototype.$type);
			var y = new $.ig.HalfEdgeSet();
			var z = new $.ig.PointTester();
			w.g((function () { var $ret = new $.ig.Triangle();
			$ret.v1 = a;
			$ret.v2 = a + 1;
			$ret.v3 = a + 2; return $ret;}()));
			var aa = new $.ig.TriangulatorContext();
			aa.a = a;
			aa.e = t;
			aa.f = u;
			aa.g = v;
			aa.i = x;
			aa.k = y;
			aa.j = e;
			aa.l = z;
			aa.d = d;
			aa.h = w;
			aa.b = b;
			aa.c = c;
			var ab = 1;
			if (a > 3000) {
				ab = 20;
			}
			aa.m = Math.ceil(a / ab);
			aa.n = 0;
			aa.o = aa.m;
			this.h = 0;
			this.p();
			this.k(aa);
		}
	}

, 
	p: function () {
		this.q();
	}

, 
	q: function () {
		if (this.triangulationStatusChanged != null) {
			this.triangulationStatusChanged(this, new $.ig.TriangulationStatusEventArgs(this.h));
		}
	}

, 
	r: function () {
		if (this.k() == null) {
			return null;
		}
		return this.k().d;
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
	u: function () {
		var $self = this;
			if (this.k() == null) {
				return;
			}
			var a = this.k();
			var b = this.k().a;
			var c = this.k().b;
			var d = this.k().c;
			var e = this.k().j;
			var f = this.k().e;
			var g = this.k().f;
			var h = this.k().g;
			var i = this.k().d;
			var j = this.k().h;
			var k = this.k().i;
			var l = this.k().l;
			var m = this.k().k;
			var n = this.k().n;
			var o = this.k().o;
			var p;
			var q;
			var r;
			var s;
			var t;
			var u;
			var v;
			var w;
			var x;
			var y;
			var z;
			var aa;
			for (var ab = n; ab < o; ++ab) {
				m.e();
				if (ab < b) {
					p = c.item(e.__inner[ab]);
					q = d.item(e.__inner[ab]);
				} else if (ab == b) {
					p = f.__x;
					q = f.__y;
				} else if (ab == b + 1) {
					p = g.__x;
					q = g.__y;

				} else {
					p = h.__x;
					q = h.__y;
				}
				var ac = null;
				for (var ad = j.c(); ad != null; ad = ac) {
					ac = ad.b;
					aa = ad.d();
					r = aa.v1;
					u = aa.v2;
					x = aa.v3;
					if (r < b) {
						s = c.item(e.__inner[r]);
						t = d.item(e.__inner[r]);
					} else if (r == b) {
						s = f.__x;
						t = f.__y;
					} else if (r == b + 1) {
						s = g.__x;
						t = g.__y;

					} else {
						s = h.__x;
						t = h.__y;
					}
					if (u < b) {
						v = c.item(e.__inner[u]);
						w = d.item(e.__inner[u]);
					} else if (u == b) {
						v = f.__x;
						w = f.__y;
					} else if (u == b + 1) {
						v = g.__x;
						w = g.__y;

					} else {
						v = h.__x;
						w = h.__y;
					}
					if (x < b) {
						y = c.item(e.__inner[x]);
						z = d.item(e.__inner[x]);
					} else if (x == b) {
						y = f.__x;
						z = f.__y;
					} else if (x == b + 1) {
						y = g.__x;
						z = g.__y;

					} else {
						y = h.__x;
						z = h.__y;
					}
					l.c(p, q, s, t, v, w, y, z);
					if (l.a) {
						k.h(aa);
						j.i(ad);
					}
					if (l.b) {
						var ae;
						ae = new $.ig.HalfEdge(r, u);
						if (m.g(ae)) {
							m.d(ae);

						} else {
							m.c(ae);
						}
						ae = new $.ig.HalfEdge(u, x);
						if (m.g(ae)) {
							m.d(ae);

						} else {
							m.c(ae);
						}
						ae = new $.ig.HalfEdge(x, r);
						if (m.g(ae)) {
							m.d(ae);

						} else {
							m.c(ae);
						}
						j.i(ad);
					}
				}
				var ag = m.getEnumerator();
				while (ag.moveNext()) {
					var af = ag.current();
					var ah = new $.ig.Triangle();
					ah.v1 = af.c();
					ah.v2 = af.d();
					ah.v3 = ab;
					j.h(ah);
				}
			}
			if (o == b) {
				for (var ai = k.c(); ai != null; ai = ai.b) {
					aa = ai.d();
					if (aa.v1 < b && aa.v2 < b && aa.v3 < b) {
						i.add((function () { var $ret = new $.ig.Triangle();
						$ret.v1 = e.__inner[aa.v1];
						$ret.v2 = e.__inner[aa.v2];
						$ret.v3 = e.__inner[aa.v3]; return $ret;}()));
					}
				}
				for (var aj = j.c(); aj != null; aj = aj.b) {
					aa = aj.d();
					if (aa.v1 < b && aa.v2 < b && aa.v3 < b) {
						i.add((function () { var $ret = new $.ig.Triangle();
						$ret.v1 = e.__inner[aa.v1];
						$ret.v2 = e.__inner[aa.v2];
						$ret.v3 = e.__inner[aa.v3]; return $ret;}()));
					}
				}
				this.h = 100;
				this.p();

			} else {
				n = o;
				o += a.m;
				if (o > b) {
					o = b;
				}
				a.n = n;
				a.o = o;
				this.h += Math.floor(100 / 20);
				this.p();
				this.w();
			}
	}

, 
	v: function () {
			this.k(null);
	}

, 
	w: function () {
			if (this.k().p) {
				window.setTimeout(this.u.on(this), 0);

			} else {
				this.u();
			}
	}
, 
	h: null
, 
	l: function () {
			return this.h;
	}
, 
	triangulationStatusChanged: null,
	$type: new $.ig.Type('Triangulator', $.ig.DependencyObject.prototype.$type)
}, true);


$.ig.util.defType('TriangulationStatusEventArgs', 'EventArgs', {

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
	$type: new $.ig.Type('TriangulationStatusEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

$.ig.util.defType('HalfEdge', 'Object', {

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
	$type: new $.ig.Type('HalfEdge', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('HalfEdgeSet', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.Dictionary$2($.ig.HalfEdge.prototype.$type, $.ig.Object.prototype.$type, 2, new $.ig.EdgeComparer());
		}
, 
	getEnumerator: function () {
		return this.a.keys().getEnumerator();
	}

, 
	c: function (a) {
		this.a.add(a, null);
	}

, 
	d: function (a) {
		this.a.remove(a);
	}

, 
	e: function () {
		this.a.clear();
	}

, 
	b: function () {
			return this.a.count();
	}

, 
	g: function (a) {
		return this.a.containsKey(a);
	}
, 
	a: null,
	$type: new $.ig.Type('HalfEdgeSet', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize($.ig.HalfEdge.prototype.$type)])
}, true);

$.ig.util.defType('EdgeComparer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	equals: function (a, b) {
		return (a.c() == b.c() && a.d() == b.d()) || (a.c() == b.d() && a.d() == b.c());
	}

, 
	getHashCode: function (a) {
		return 65536 * Math.max(a.c(), a.d()) + Math.min(a.c(), a.d());
	}
,
	$type: new $.ig.Type('EdgeComparer', $.ig.Object.prototype.$type, [$.ig.IEqualityComparer$1.prototype.$type.specialize($.ig.HalfEdge.prototype.$type)])
}, true);

$.ig.util.defType('PointTester', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	c: function (a, b, c, d, e, f, g, h) {
		var i = Math.abs(d - f);
		var j = Math.abs(f - h);
		var k = 0;
		var l = 0;
		if (i == 0 && j == 0) {
			return false;
		}
		if (i == 0 && j != 0) {
			k = (e + c) / 2;
			l = (-(g - e) / (h - f)) * (k - ((e + g) / 2)) + ((f + h) / 2);
		}
		if (i != 0 && j == 0) {
			k = (g + e) / 2;
			l = (-(e - c) / (f - d)) * (k - ((c + e) / 2)) + ((d + f) / 2);
		}
		if (i != 0 && j != 0) {
			var m = -(e - c) / (f - d);
			var n = -(g - e) / (h - f);
			var o = (c + e) / 2;
			var p = (e + g) / 2;
			var q = (d + f) / 2;
			var r = (f + h) / 2;
			k = (m * o - n * p + r - q) / (m - n);
			l = i > j ? m * (k - o) + q : n * (k - p) + r;
		}
		var s = e - k;
		var t = f - l;
		var u = s * s + t * t;
		s = a - k;
		t = b - l;
		var v = s * s + t * t;
		this.b = v <= u;
		this.a = k < a && ((a - k) * (a - k)) > u;
		return true;
	}
, 
	a: null, 
	b: null,
	$type: new $.ig.Type('PointTester', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TriangulationSourcePointRecord', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	pointX: null, 
	pointY: null, 
	value: null,
	$type: new $.ig.Type('TriangulationSourcePointRecord', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XamGeographicMap', 'SeriesViewer', {

		init: function () {

			var $self = this;
			this.kq = {__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};

			$.ig.SeriesViewer.prototype.init.call(this);
						this.kk = $.ig.SphericalMercatorVerticalScaler.prototype.aw($.ig.XamGeographicMap.prototype.kj.bottom()) - $.ig.SphericalMercatorVerticalScaler.prototype.aw($.ig.XamGeographicMap.prototype.kj.top());
				this.a3($.ig.XamGeographicMap.prototype.$type);
				this.backgroundContent(new $.ig.OpenStreetMapImagery());
				var a = (function () { var $ret = new $.ig.NumericXAxis();
$ret.seriesViewer($self); return $ret;}());
				a.isDisabled(true);
				this.xAxis(a);
				this.xAxis().scaler(new $.ig.SphericalMercatorHorizontalScaler());
				var b = (function () { var $ret = new $.ig.NumericYAxis();
$ret.seriesViewer($self); return $ret;}());
				b.isDisabled(true);
				this.yAxis(b);
				this.yAxis().scaler(new $.ig.SphericalMercatorVerticalScaler());
				this.ky();
				this.k8();
		}, 
	kk: null
, 
	worldRect: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamGeographicMap.prototype.worldRectProperty, a);
			return a;
		} else {
			return this.b($.ig.XamGeographicMap.prototype.worldRectProperty);
		}
	}
, 
	kl: null
, 
	actualWorldRect: function (a) {
		if (arguments.length === 1) {
			var b = this.kl != a;
			if (b) {
				var c = this.kl;
				this.kl = a;
				this.f2($.ig.XamGeographicMap.prototype.kf, c, a);
			}
			return a;
		} else {
			return this.kl;
		}
	}

, 
	ky: function () {
		if (this.worldRect().isEmpty()) {
			return;
		}
		this.actualWorldRect(this.kz(this.worldRect()));
	}

, 
	kz: function (a) {
		var b = a.top();
		var c = a.left();
		var d = a.width();
		var e = a.height();
		var f = $.ig.SphericalMercatorVerticalScaler.prototype.aw(a.bottom());
		var g = $.ig.SphericalMercatorVerticalScaler.prototype.aw(a.top());
		var h = f - g;
		var i = a.width() / $.ig.XamGeographicMap.prototype.kj.width();
		if (h / i > this.kk) {
			var j = h / this.kk;
			var k = j - i;
			c = c - (k / 2) * $.ig.XamGeographicMap.prototype.kj.width();
			d = j * $.ig.XamGeographicMap.prototype.kj.width();
		} else if (h / i < this.kk) {
			var l = this.kk * i;
			var m = l - h;
			var n = g - (m / 2);
			var o = f + (m / 2);
			b = $.ig.SphericalMercatorVerticalScaler.prototype.ax(n);
			e = $.ig.SphericalMercatorVerticalScaler.prototype.ax(o) - b;
		}
		return new $.ig.Rect(0, c, b, d, e);
	}

, 
	backgroundContent: function (a) {
		if (arguments.length === 1) {
			var b = a != this.backgroundContent();
			if (b) {
				var c = this.backgroundContent();
				this.km = a;
				this.f2($.ig.XamGeographicMap.prototype.kg, c, a);
			}
			return a;
		} else {
			return this.km;
		}
	}
, 
	km: null
, 
	xAxis: function (a) {
		if (arguments.length === 1) {
			var b = a != this.xAxis();
			if (b) {
				var c = this.xAxis();
				this.kn = a;
				this.f2($.ig.XamGeographicMap.prototype.kh, c, a);
			}
			return a;
		} else {
			return this.kn;
		}
	}
, 
	kn: null
, 
	yAxis: function (a) {
		if (arguments.length === 1) {
			var b = a != this.yAxis();
			if (b) {
				var c = this.yAxis();
				this.ko = a;
				this.f2($.ig.XamGeographicMap.prototype.ki, c, a);
			}
			return a;
		} else {
			return this.ko;
		}
	}
, 
	ko: null
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
	getZoomFromGeographic: function (a) {
		var b = this.kz(a);
		var c = this.xAxis();
		var d = this.yAxis();
		var e = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), c.isInverted());
		e.c = this.effectiveViewport();
		var f = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), d.isInverted());
		f.c = this.effectiveViewport();
		var g = this.xAxis().getScaledValue(b.left(), e);
		var h = this.xAxis().getScaledValue(b.right(), e);
		var i = this.yAxis().getScaledValue(b.top(), f);
		var j = this.yAxis().getScaledValue(b.bottom(), f);
		var k = g / this.viewportRect().width();
		var l = j / this.viewportRect().height();
		var m = (h - g) / this.viewportRect().width();
		var n = (i - j) / this.viewportRect().height();
		var o = new $.ig.Rect(0, k, l, m, n);
		o.intersect($.ig.XamGeographicMap.prototype.kp);
		if (o.isEmpty()) {
			o = $.ig.XamGeographicMap.prototype.kp;
		}
		return o;
	}

, 
	getZoomFromGeographic1: function (a, b) {
		var c = a.__x;
		var d = b.__y;
		var e = b.__x - a.__x;
		var f = a.__y - b.__y;
		if (e < 0 || f < 0) {
			return $.ig.XamGeographicMap.prototype.kp;

		} else {
			var g = new $.ig.Rect(0, c, d, e, f);
			return this.getZoomFromGeographic(g);
		}
	}

, 
	getGeographicFromZoom: function (a) {
		var b = this.xAxis();
		var c = this.yAxis();
		var d = new $.ig.ScalerParams(a, this.viewportRect(), b.isInverted());
		d.c = this.effectiveViewport();
		var e = new $.ig.ScalerParams(a, this.viewportRect(), c.isInverted());
		e.c = this.effectiveViewport();
		var f = b.getUnscaledValue(this.effectiveViewport().left(), d);
		var g = c.getUnscaledValue(this.effectiveViewport().top(), e);
		var h = b.getUnscaledValue(this.effectiveViewport().right(), d);
		var i = c.getUnscaledValue(this.effectiveViewport().bottom(), e);
		var j = h - f;
		var k = g - i;
		var l = new $.ig.Rect(0, f, i, j, k);
		l.intersect($.ig.XamGeographicMap.prototype.kj);
		if (l.isEmpty()) {
			l = $.ig.XamGeographicMap.prototype.kj;
		}
		return l;
	}

, 
	getGeographicPoint: function (a) {
		var b = this.xAxis().unscaleValue(a.__x);
		var c = this.yAxis().unscaleValue(a.__y);
		return {__x: b, __y: c, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	getWindowPoint: function (a) {
		var b = this.xAxis().scaleValue(a.__x);
		var c = this.yAxis().scaleValue(a.__y);
		return {__x: b, __y: c, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	k2: function (a) {
	}

, 
	getMarkerBrushByIndex: function (a) {
		return this.kw().fc(a);
	}

, 
	getMarkerOutlineByIndex: function (a) {
		return this.kw().fd(a);
	}

, 
	useFixedAspectZoom: function () {
		return true;
	}

, 
	styleUpdated: function () {
		this.kw().d1();
		var b = this.series().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.styleUpdated();
		}
	}
, 
	kq: null
, 
	k3: function () {
		var a = this.xAxis().unscaleValue(this.viewportRect().left());
		var b = this.yAxis().unscaleValue(this.viewportRect().top());
		this.kq = {__x: a, __y: b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	k4: function () {
		if (isNaN(this.kq.__x) || isNaN(this.kq.__y)) {
			this.k3();
		}
		var a = this.kq.__x;
		var b = this.kq.__y;
		if (!isNaN(a) & !isNaN(b)) {
			var c = this.actualWindowRect().left();
			var d = this.actualWindowRect().top();
			var e = this.actualWindowRect().width();
			var f = this.actualWindowRect().height();
			if (e > this.kr.width()) {

			} else {
				var g = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), this.xAxis().isInverted());
				g.c = this.effectiveViewport();
				var h = this.xAxis().getScaledValue(a, g);
				c = h / this.viewportRect().width();
				if (c + e > this.kr.right()) {
					c = this.kr.right() - e;
				} else if (c < this.kr.left()) {
					c = this.kr.left();
				}
			}
			if (f > this.kr.height()) {

			} else {
				var i = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), this.yAxis().isInverted());
				i.c = this.effectiveViewport();
				var j = this.yAxis().getScaledValue(b, i);
				d = j / this.viewportRect().height();
				if (d + f > this.kr.bottom()) {
					d = this.kr.bottom() - f;
				} else if (d < this.kr.top()) {
					d = this.kr.top();
				}
			}
			this.actualWindowRect(new $.ig.Rect(0, c, d, e, f));
		}
	}
, 
	kr: null
, 
	i2: function () {
		var a = $.ig.SeriesViewer.prototype.i2.call(this);
		if (this.xAxis() == null || this.yAxis() == null) {
			return a;
		}
		var b = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), this.xAxis().isInverted());
		b.c = this.effectiveViewport();
		var c = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), this.yAxis().isInverted());
		c.c = this.effectiveViewport();
		var d = this.xAxis().getScaledValue($.ig.XamGeographicMap.prototype.kj.left(), b);
		var e = this.xAxis().getScaledValue($.ig.XamGeographicMap.prototype.kj.right(), b);
		var f = this.yAxis().getScaledValue($.ig.XamGeographicMap.prototype.kj.top(), c);
		var g = this.yAxis().getScaledValue($.ig.XamGeographicMap.prototype.kj.bottom(), c);
		this.kr = new $.ig.Rect(0, d / this.viewportRect().width(), g / this.viewportRect().height(), (e - d) / this.viewportRect().width(), (f - g) / this.viewportRect().height());
		var h = a.left();
		var i = a.top();
		if (this.windowRect().width() > this.kr.width()) {
			h = 0.5 - (this.windowRect().width() / 2);
		} else if (h + a.width() > this.kr.right()) {
			h = this.kr.right() - this.windowRect().width();
		} else if (h < this.kr.left()) {
			h = this.kr.left();
		}
		if (this.windowRect().height() > this.kr.height()) {
			i = 0.5 - (this.windowRect().height() / 2);
		} else if (i + this.windowRect().height() > this.kr.bottom()) {
			i = this.kr.bottom() - this.windowRect().height();
		} else if (i < this.kr.top()) {
			i = this.kr.top();
		}
		return new $.ig.Rect(0, h, i, a.width(), a.height());
	}

, 
	gi: function (a) {
		if (a.isEmpty()) {
			return $.ig.Rect.prototype.empty();
		}
		var b;
		if (a.width() > a.height()) {
			var c = $.ig.intDivide((a.width() - a.height()), 2);
			b = new $.ig.Rect(0, a.left() + c, a.top(), a.height(), a.height());

		} else {
			var d = $.ig.intDivide((a.height() - a.width()), 2);
			b = new $.ig.Rect(0, a.left(), a.top() + d, a.width(), a.width());
		}
		return b;
	}

, 
	k5: function (a) {
		return this.gi(a);
	}

, 
	io: function () {
		return new $.ig.XamGeographicMapView(this);
	}

, 
	fx: function (a) {
		return this.kw().fe(a);
	}

, 
	fy: function (a) {
		return this.kw().ff(a);
	}

, 
	k6: function (a) {
		if (a != null) {
			a.seriesViewer(this);
		}
	}

, 
	ip: function (a) {
		$.ig.SeriesViewer.prototype.ip.call(this, a);
		this.kw(a);
	}

, 
	gk: function (a, b) {
		$.ig.SeriesViewer.prototype.gk.call(this, a, b);
		this.gj(this.xAxis());
		this.gj(this.yAxis());
		if (a != b) {
			this.k4();
		}
	}

, 
	ig: function (a, b, c, d) {
		switch (b) {
			case $.ig.XamGeographicMap.prototype.ba:
				this.k3();
				break;
		}
		$.ig.SeriesViewer.prototype.ig.call(this, a, b, c, d);
		switch (b) {
			case $.ig.XamGeographicMap.prototype.kg:
				if (this.kv() != null) {
					if (this.kv().bg() != null) {
						this.kv().bg().b4(null);
					}
				}
				this.kv($.ig.util.cast($.ig.GeographicMapImagery.prototype.$type, this.backgroundContent()));
				if (this.kv() != null) {
					if (this.kv().bg() != null) {
						this.kv().bg().b4(this);
					}
				}
				this.kw().fr($.ig.util.cast($.ig.GeographicMapImagery.prototype.$type, c), $.ig.util.cast($.ig.GeographicMapImagery.prototype.$type, d));
				if (this.kv() != null) {
					this.kv().geographicMap(this);
					this.kw().fq(this.actualWindowRect());
				}
				break;
			case $.ig.XamGeographicMap.prototype.ki:
			case $.ig.XamGeographicMap.prototype.kh:
				this.k7(c);
				this.k6(d);
				break;
			case $.ig.XamGeographicMap.prototype.ke:
				this.windowRect($.ig.XamGeographicMap.prototype.kp);
				this.ky();
				this.k8();
				this.k3();
				this.actualWindowRect(this.i2());
				this.kw().fj();
				break;
			case $.ig.SeriesViewer.prototype.ci:
				this.kw().fq(this.actualWindowRect());
				break;
			case $.ig.XamGeographicMap.prototype.kf:
				var f = this.series().getEnumerator();
				while (f.moveNext()) {
					var e = f.current();
					e.renderSeries(false);
				}
				break;
		}
	}

, 
	k7: function (a) {
		if (a != null) {
			a.seriesViewer(null);
		}
	}

, 
	k8: function () {
		if (this.xAxis() != null) {
			this.xAxis().minimumValue(this.actualWorldRect().left());
			this.xAxis().maximumValue(this.actualWorldRect().right());
		}
		if (this.yAxis() != null) {
			this.yAxis().minimumValue(this.actualWorldRect().top());
			this.yAxis().maximumValue(this.actualWorldRect().bottom());
		}
		this.xAxis().updateRange1(true);
		this.yAxis().updateRange1(true);
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
	is: function () {
		return this.kw().e8();
	}

, 
	ir: function () {
		return this.kw().e9();
	}

, 
	iq: function () {
		return this.kw().e7();
	}

, 
	ix: function (a, b) {
		if ($.ig.util.cast($.ig.ItfConverter.prototype.$type, b) !== null) {
			var c = (b);
			var d = (a);
			d.itemsSource(c.triangulationSource().points());
			d.trianglesSource(c.triangulationSource().triangles());

		} else {
			$.ig.SeriesViewer.prototype.ix.call(this, a, b);
		}
	}

, 
	register: function (a, b) {
		this.i9(a, b);
	}

, 
	unRegister: function (a) {
		this.ja(a);
	}

, 
	deferredRefresh: function () {
		this.jb();
	}
,
	$type: new $.ig.Type('XamGeographicMap', $.ig.SeriesViewer.prototype.$type, [$.ig.IMapRenderDeferralHandler.prototype.$type])
}, true);

$.ig.util.defType('XamGeographicMapView', 'SeriesViewerView', {

		init: function (a) {


			$.ig.SeriesViewerView.prototype.init.call(this, a);
						this.e6($.ig.Rect.prototype.empty());
				this.e5(a);
				this.e5().dragModifier($.ig.ModifierKeys.prototype.control);
		}
, 
	eu: function (a) {
		return $.ig.InteractionState.prototype.dragPan;
	}

, 
	ef: function (a) {
		this.eg(a);
	}

, 
	_e5: null,
	e5: function (a) {
		if (arguments.length === 1) {
			this._e5 = a;
			return a;
		} else {
			return this._e5;
		}
	}

, 
	ec: function () {
		var $self = this;
		var a;
		var b;
		var c;
		var d;
		var e;
		(function () { var $ret = $self.aq().a1(a, b, c, d, e); a = $ret.brushes; b = $ret.outlines; c = $ret.fontBrush; d = $ret.font; e = $ret.axisLineBrush; return $ret.ret; }());
		this.e7(c);
		this.e9(d);
		this.e8(e);
	}

, 
	fc: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "rgba(0,0,0,1)"; return $ret;}());
	}

, 
	fd: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "white"; return $ret;}());
	}

, 
	fe: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "rgba(50,50,50,.5)"; return $ret;}());
	}

, 
	ff: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "white"; return $ret;}());
	}

, 
	de: function (a) {
		$.ig.SeriesViewerView.prototype.de.call(this, a);
		if (this.e5().backgroundContent() != null) {
			var b = this.e5().backgroundContent();
			b.bv(a);
		}
	}

, 
	_e6: null,
	e6: function (a) {
		if (arguments.length === 1) {
			this._e6 = a;
			return a;
		} else {
			return this._e6;
		}
	}

, 
	du: function (a) {
		$.ig.SeriesViewerView.prototype.du.call(this, a);
		this.e6(a);
		if (this.e5().backgroundContent() != null) {
			var b = this.e5().backgroundContent();
			b.bw(this.e6());
		}
	}

, 
	fi: function () {
		return new $.ig.Rect(0, 0, 0, this.e6().width(), this.e6().height());
	}

, 
	fj: function () {
		if (this.e5().backgroundContent() != null) {
			var a = this.e5().backgroundContent();
			a.bx();
		}
	}

, 
	_e7: null,
	e7: function (a) {
		if (arguments.length === 1) {
			this._e7 = a;
			return a;
		} else {
			return this._e7;
		}
	}

, 
	_e8: null,
	e8: function (a) {
		if (arguments.length === 1) {
			this._e8 = a;
			return a;
		} else {
			return this._e8;
		}
	}

, 
	_e9: null,
	e9: function (a) {
		if (arguments.length === 1) {
			this._e9 = a;
			return a;
		} else {
			return this._e9;
		}
	}

, 
	fq: function (a) {
		if (this.e5().kv() != null) {
			this.e5().kv().windowRect(a);
		}
	}

, 
	fr: function (a, b) {
		if (this.e5().kv() != null) {
			this.e5().kv().windowRect(this.e5().actualWindowRect());
		}
		if (a != null) {
			var c = a.bg();
			if (c != null) {
				this.e5().canvasRenderScheduler().h().remove(c.cf());
			}
			a.bv(null);
		}
		if (b != null) {
			var d = b.bg();
			if (d != null) {
				this.e5().canvasRenderScheduler().h().add(d.cf());
			}
			if (!this.e6().isEmpty()) {
				this.du(this.e6());
			}
			if (this.ar() != null) {
				this.de(this.ar());
			}
		}
		if (b == null) {
			this.fs(this.ar());
		}
	}

, 
	fs: function (a) {
		a.t(this.e6().left(), this.e6().top(), this.e6().width(), this.e6().height());
	}

, 
	dx: function () {
		this.ap().a7(1);
		this.ao().a7(1);
		this.ap().__stroke = this.e7();
		this.ao().__stroke = this.e7();
		$.ig.SeriesViewerView.prototype.dx.call(this);
	}

, 
	bq: function () {
		$.ig.SeriesViewerView.prototype.bq.call(this);
		if (this.ak().count() == 0) {
			if (this.at() != null && this.e6() != null && !this.e6().isEmpty()) {
				this.at().t(this.e6().left(), this.e6().top(), this.e6().width(), this.e6().height());
			}
		}
	}
,
	$type: new $.ig.Type('XamGeographicMapView', $.ig.SeriesViewerView.prototype.$type)
}, true);

$.ig.ShapeType.prototype.none = 0;
$.ig.ShapeType.prototype.point = 1;
$.ig.ShapeType.prototype.polyLine = 3;
$.ig.ShapeType.prototype.polygon = 5;
$.ig.ShapeType.prototype.polyPoint = 8;
$.ig.ShapeType.prototype.pointZ = 11;
$.ig.ShapeType.prototype.polyLineZ = 13;
$.ig.ShapeType.prototype.polygonZ = 15;
$.ig.ShapeType.prototype.polyPointZ = 18;
$.ig.ShapeType.prototype.pointM = 21;
$.ig.ShapeType.prototype.polyLineM = 23;
$.ig.ShapeType.prototype.polygonM = 25;
$.ig.ShapeType.prototype.polyPointM = 28;
$.ig.ShapeType.prototype.polyPatch = 31;
$.ig.XBaseDataType.prototype.character = 0;
$.ig.XBaseDataType.prototype.number = 1;
$.ig.XBaseDataType.prototype.logical = 2;
$.ig.XBaseDataType.prototype.date = 3;
$.ig.XBaseDataType.prototype.memo = 4;
$.ig.XBaseDataType.prototype.floatingPoint = 5;
$.ig.XBaseDataType.prototype.binary = 6;
$.ig.XBaseDataType.prototype.general = 7;
$.ig.XBaseDataType.prototype.picture = 8;
$.ig.XBaseDataType.prototype.currency = 9;
$.ig.XBaseDataType.prototype.dateTime = 10;
$.ig.XBaseDataType.prototype.integer = 11;
$.ig.XBaseDataType.prototype.variField = 12;
$.ig.XBaseDataType.prototype.variant = 13;
$.ig.XBaseDataType.prototype.timestamp = 14;
$.ig.XBaseDataType.prototype.double1 = 15;
$.ig.XBaseDataType.prototype.autoIncrement = 16;
$.ig.ColorScaleInterpolationMode.prototype.select = 0;
$.ig.ColorScaleInterpolationMode.prototype.interpolateRGB = 1;
$.ig.ColorScaleInterpolationMode.prototype.interpolateHSV = 2;
$.ig.SphericalMercatorVerticalScaler.prototype.al = 85.05112878;
$.ig.SphericalMercatorVerticalScaler.prototype.am = -85.05112878;
$.ig.SphericalMercatorVerticalScaler.prototype.aj = Math.PI / 180;
$.ig.CustomPaletteColorScale.prototype.g = "MinimumValue";
$.ig.CustomPaletteColorScale.prototype.h = "MaximumValue";
$.ig.CustomPaletteColorScale.prototype.i = "Palette";
$.ig.CustomPaletteColorScale.prototype.j = "InterpolationMode";
$.ig.CustomPaletteColorScale.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteColorScale.prototype.g, Number, $.ig.CustomPaletteColorScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.CustomPaletteColorScale.prototype.$type, a)).f($.ig.CustomPaletteColorScale.prototype.g, b.f(), b.e());
}));
$.ig.CustomPaletteColorScale.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteColorScale.prototype.h, Number, $.ig.CustomPaletteColorScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.CustomPaletteColorScale.prototype.$type, a)).f($.ig.CustomPaletteColorScale.prototype.h, b.f(), b.e());
}));
$.ig.CustomPaletteColorScale.prototype.interpolationModeProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteColorScale.prototype.j, $.ig.ColorScaleInterpolationMode.prototype.$type, $.ig.CustomPaletteColorScale.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ColorScaleInterpolationMode.prototype.select, function (a, b) {
	($.ig.util.cast($.ig.CustomPaletteColorScale.prototype.$type, a)).f($.ig.CustomPaletteColorScale.prototype.j, b.f(), b.e());
}));
$.ig.GeographicMapImagery.prototype.a7 = "MultiScaleImage";
$.ig.GeographicMapImagery.prototype.a8 = "WindowRect";
$.ig.GeographicMapImagery.prototype.a9 = "GeographicMap";
$.ig.GeographicMapImagery.prototype.windowRectProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicMapImagery.prototype.a8, $.ig.Rect.prototype.$type, $.ig.GeographicMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Rect.prototype.empty(), function (a, b) {
	($.ig.util.cast($.ig.GeographicMapImagery.prototype.$type, a)).bn($.ig.GeographicMapImagery.prototype.a8, b.f(), b.e());
}));
$.ig.GeographicMapImagery.prototype.geographicMapProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicMapImagery.prototype.a9, $.ig.XamGeographicMap.prototype.$type, $.ig.GeographicMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.GeographicMapImagery.prototype.bo));
$.ig.BingMapsMapImagery.prototype.bz = "TilePath";
$.ig.BingMapsMapImagery.prototype.b0 = "SubDomains";
$.ig.BingMapsMapImagery.prototype.b1 = "CultureName";
$.ig.BingMapsMapImagery.prototype.tilePathProperty = $.ig.DependencyProperty.prototype.l($.ig.BingMapsMapImagery.prototype.bz, String, $.ig.BingMapsMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsMapImagery.prototype.b6));
$.ig.BingMapsMapImagery.prototype.subDomainsProperty = $.ig.DependencyProperty.prototype.l($.ig.BingMapsMapImagery.prototype.b0, $.ig.ObservableCollection$1.prototype.$type.specialize(String), $.ig.BingMapsMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsMapImagery.prototype.b7));
$.ig.BingMapsMapImagery.prototype.cultureNameProperty = $.ig.DependencyProperty.prototype.l($.ig.BingMapsMapImagery.prototype.b1, String, $.ig.BingMapsMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsMapImagery.prototype.b8));
$.ig.CloudMadeMapImagery.prototype.bz = "Key";
$.ig.CloudMadeMapImagery.prototype.b0 = "Parameter";
$.ig.CloudMadeMapImagery.prototype.keyProperty = $.ig.DependencyProperty.prototype.l($.ig.CloudMadeMapImagery.prototype.bz, String, $.ig.CloudMadeMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.CloudMadeMapImagery.prototype.b5));
$.ig.CloudMadeMapImagery.prototype.parameterProperty = $.ig.DependencyProperty.prototype.l($.ig.CloudMadeMapImagery.prototype.b0, String, $.ig.CloudMadeMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.CloudMadeMapImagery.prototype.b6));
$.ig.GeographicMapSeriesHost$1.prototype.hp = "VisibleFromScale";
$.ig.GeographicMapSeriesHost$1.prototype.visibleFromScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicMapSeriesHost$1.prototype.hp, Number, $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize(this.$t), new $.ig.PropertyMetadata(1, 1, function (a, b) {
	($.ig.util.cast($.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($self.$t), a)).ej($.ig.GeographicMapSeriesHost$1.prototype.hp, b.f(), b.e());
}));
$.ig.GeographicXYTriangulatingSeries.prototype.h4 = "LongitudeMemberPath";
$.ig.GeographicXYTriangulatingSeries.prototype.h5 = "LatitudeMemberPath";
$.ig.GeographicXYTriangulatingSeries.prototype.h6 = "TrianglesSource";
$.ig.GeographicXYTriangulatingSeries.prototype.h7 = "TriangleVertexMemberPath1";
$.ig.GeographicXYTriangulatingSeries.prototype.h8 = "TriangleVertexMemberPath2";
$.ig.GeographicXYTriangulatingSeries.prototype.h9 = "TriangleVertexMemberPath3";
$.ig.GeographicXYTriangulatingSeries.prototype.longitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h4, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "pointX", function (a, b) {
	(a).ej($.ig.GeographicXYTriangulatingSeries.prototype.h4, b.f(), b.e());
}));
$.ig.GeographicXYTriangulatingSeries.prototype.latitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h5, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "pointY", function (a, b) {
	(a).ej($.ig.GeographicXYTriangulatingSeries.prototype.h5, b.f(), b.e());
}));
$.ig.GeographicXYTriangulatingSeries.prototype.trianglesSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h6, $.ig.IEnumerable.prototype.$type, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicXYTriangulatingSeries.prototype.h6, b.f(), b.e());
}));
$.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath1Property = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h7, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "v1", function (a, b) {
	(a).ej($.ig.GeographicXYTriangulatingSeries.prototype.h7, b.f(), b.e());
}));
$.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath2Property = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h8, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "v2", function (a, b) {
	(a).ej($.ig.GeographicXYTriangulatingSeries.prototype.h8, b.f(), b.e());
}));
$.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath3Property = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h9, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "v3", function (a, b) {
	(a).ej($.ig.GeographicXYTriangulatingSeries.prototype.h9, b.f(), b.e());
}));
$.ig.GeographicContourLineSeries.prototype.is = "ValueMemberPath";
$.ig.GeographicContourLineSeries.prototype.it = "FillScale";
$.ig.GeographicContourLineSeries.prototype.iu = "ValueResolver";
$.ig.GeographicContourLineSeries.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicContourLineSeries.prototype.is, String, $.ig.GeographicContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, "value", function (a, b) {
	(a).ej($.ig.GeographicContourLineSeries.prototype.is, b.f(), b.e());
}));
$.ig.GeographicContourLineSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicContourLineSeries.prototype.it, $.ig.ValueBrushScale.prototype.$type, $.ig.GeographicContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicContourLineSeries.prototype.it, b.f(), b.e());
}));
$.ig.GeographicContourLineSeries.prototype.valueResolverProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicContourLineSeries.prototype.iu, $.ig.ContourValueResolver.prototype.$type, $.ig.GeographicContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicContourLineSeries.prototype.iu, b.f(), b.e());
}));
$.ig.GeographicHighDensityScatterSeries.prototype.h4 = "LatitudeMemberPath";
$.ig.GeographicHighDensityScatterSeries.prototype.h5 = "LongitudeMemberPath";
$.ig.GeographicHighDensityScatterSeries.prototype.h6 = "UseBruteForce";
$.ig.GeographicHighDensityScatterSeries.prototype.h7 = "ProgressiveLoad";
$.ig.GeographicHighDensityScatterSeries.prototype.h8 = "MouseOverEnabled";
$.ig.GeographicHighDensityScatterSeries.prototype.h9 = "UseSquareCutoffStyle";
$.ig.GeographicHighDensityScatterSeries.prototype.ia = "HeatMinimum";
$.ig.GeographicHighDensityScatterSeries.prototype.ib = "HeatMaximum";
$.ig.GeographicHighDensityScatterSeries.prototype.latitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h4, String, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicHighDensityScatterSeries.prototype.h4, b.f(), b.e());
}));
$.ig.GeographicHighDensityScatterSeries.prototype.longitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h5, String, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicHighDensityScatterSeries.prototype.h5, b.f(), b.e());
}));
$.ig.GeographicHighDensityScatterSeries.prototype.useBruteForceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h6, $.ig.Boolean.prototype.$type, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	(a).ej($.ig.GeographicHighDensityScatterSeries.prototype.h6, b.f(), b.e());
}));
$.ig.GeographicHighDensityScatterSeries.prototype.progressiveLoadProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h7, $.ig.Boolean.prototype.$type, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, true, function (a, b) {
	(a).ej($.ig.GeographicHighDensityScatterSeries.prototype.h7, b.f(), b.e());
}));
$.ig.GeographicHighDensityScatterSeries.prototype.mouseOverEnabledProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h8, $.ig.Boolean.prototype.$type, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	(a).ej($.ig.GeographicHighDensityScatterSeries.prototype.h8, b.f(), b.e());
}));
$.ig.GeographicHighDensityScatterSeries.prototype.useSquareCutoffStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h9, $.ig.Boolean.prototype.$type, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	(a).ej($.ig.GeographicHighDensityScatterSeries.prototype.h9, b.f(), b.e());
}));
$.ig.GeographicHighDensityScatterSeries.prototype.heatMinimumProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.ia, Number, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	(a).ej($.ig.GeographicHighDensityScatterSeries.prototype.ia, b.f(), b.e());
}));
$.ig.GeographicHighDensityScatterSeries.prototype.heatMaximumProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.ib, Number, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (a, b) {
	(a).ej($.ig.GeographicHighDensityScatterSeries.prototype.ib, b.f(), b.e());
}));
$.ig.GeographicShapeSeriesBase.prototype.h4 = "ShapeMemberPath";
$.ig.GeographicShapeSeriesBase.prototype.h5 = "ShapeStyleSelector";
$.ig.GeographicShapeSeriesBase.prototype.h6 = "ShapeStyle";
$.ig.GeographicShapeSeriesBase.prototype.h7 = "ShapeFilterResolution";
$.ig.GeographicShapeSeriesBase.prototype.shapeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeriesBase.prototype.h4, String, $.ig.GeographicShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, "points", function (a, b) {
	($.ig.util.cast($.ig.GeographicShapeSeriesBase.prototype.$type, a)).ej($.ig.GeographicShapeSeriesBase.prototype.h4, b.f(), b.e());
}));
$.ig.GeographicShapeSeriesBase.prototype.shapeStyleSelectorProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeriesBase.prototype.h5, $.ig.StyleSelector.prototype.$type, $.ig.GeographicShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicShapeSeriesBase.prototype.h5, b.f(), b.e());
}));
$.ig.GeographicShapeSeriesBase.prototype.shapeStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeriesBase.prototype.h6, $.ig.Style.prototype.$type, $.ig.GeographicShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicShapeSeriesBase.prototype.h6, b.f(), b.e());
}));
$.ig.GeographicShapeSeriesBase.prototype.shapeFilterResolutionProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeriesBase.prototype.h7, Number, $.ig.GeographicShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	($.ig.util.cast($.ig.GeographicShapeSeriesBase.prototype.$type, a)).ej($.ig.GeographicShapeSeriesBase.prototype.h7, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.h4 = "LatitudeMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.h5 = "LongitudeMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.h6 = "MarkerType";
$.ig.GeographicProportionalSymbolSeries.prototype.h7 = "MarkerTemplate";
$.ig.GeographicProportionalSymbolSeries.prototype.h8 = "MarkerCollisionAvoidance";
$.ig.GeographicProportionalSymbolSeries.prototype.h9 = "MarkerBrush";
$.ig.GeographicProportionalSymbolSeries.prototype.ia = "MarkerOutline";
$.ig.GeographicProportionalSymbolSeries.prototype.ib = "MaximumMarkers";
$.ig.GeographicProportionalSymbolSeries.prototype.ic = "RadiusMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.id = "RadiusScale";
$.ig.GeographicProportionalSymbolSeries.prototype.ie = "LabelMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.ig = "FillMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.ih = "FillScale";
$.ig.GeographicProportionalSymbolSeries.prototype.latitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h4, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.h4, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.longitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h5, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.h5, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h6, $.ig.MarkerType.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.none, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.h6, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h7, $.ig.DataTemplate.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.h7, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h8, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.h8, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h9, $.ig.Brush.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.h9, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ia, $.ig.Brush.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.ia, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ib, $.ig.Number.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.ib, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.radiusMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ic, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.ic, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.radiusScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.id, $.ig.SizeScale.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.id, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.labelMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ie, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.ie, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.fillMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ig, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.ig, b.f(), b.e());
}));
$.ig.GeographicProportionalSymbolSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ih, $.ig.BrushScale.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicProportionalSymbolSeries.prototype.ih, b.f(), b.e());
}));
$.ig.GeographicScatterAreaSeries.prototype.is = "ColorMemberPath";
$.ig.GeographicScatterAreaSeries.prototype.it = "ColorScale";
$.ig.GeographicScatterAreaSeries.prototype.colorMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicScatterAreaSeries.prototype.is, String, $.ig.GeographicScatterAreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, "value", function (a, b) {
	(a).ej($.ig.GeographicScatterAreaSeries.prototype.is, b.f(), b.e());
}));
$.ig.GeographicShapeSeries.prototype.ik = "MarkerType";
$.ig.GeographicShapeSeries.prototype.il = "MarkerTemplate";
$.ig.GeographicShapeSeries.prototype.im = "MarkerBrush";
$.ig.GeographicShapeSeries.prototype.io = "MarkerOutline";
$.ig.GeographicShapeSeries.prototype.ip = "MarkerStyle";
$.ig.GeographicShapeSeries.prototype.iq = "MarkerCollisionAvoidance";
$.ig.GeographicShapeSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.ik, $.ig.MarkerType.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.none, function (a, b) {
	(a).ej($.ig.GeographicShapeSeries.prototype.ik, b.f(), b.e());
}));
$.ig.GeographicShapeSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.il, $.ig.DataTemplate.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicShapeSeries.prototype.il, b.f(), b.e());
}));
$.ig.GeographicShapeSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.im, $.ig.Brush.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicShapeSeries.prototype.im, b.f(), b.e());
}));
$.ig.GeographicShapeSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.io, $.ig.Brush.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicShapeSeries.prototype.io, b.f(), b.e());
}));
$.ig.GeographicShapeSeries.prototype.markerStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.ip, $.ig.Style.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicShapeSeries.prototype.ip, b.f(), b.e());
}));
$.ig.GeographicShapeSeries.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.iq, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (a, b) {
	(a).ej($.ig.GeographicShapeSeries.prototype.iq, b.f(), b.e());
}));
$.ig.GeographicSymbolSeries.prototype.h4 = "LatitudeMemberPath";
$.ig.GeographicSymbolSeries.prototype.h5 = "LongitudeMemberPath";
$.ig.GeographicSymbolSeries.prototype.h6 = "MarkerType";
$.ig.GeographicSymbolSeries.prototype.h7 = "MarkerTemplate";
$.ig.GeographicSymbolSeries.prototype.h8 = "MarkerCollisionAvoidance";
$.ig.GeographicSymbolSeries.prototype.h9 = "MarkerBrush";
$.ig.GeographicSymbolSeries.prototype.ia = "MarkerOutline";
$.ig.GeographicSymbolSeries.prototype.ib = "MaximumMarkers";
$.ig.GeographicSymbolSeries.prototype.latitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h4, String, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicSymbolSeries.prototype.h4, b.f(), b.e());
}));
$.ig.GeographicSymbolSeries.prototype.longitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h5, String, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicSymbolSeries.prototype.h5, b.f(), b.e());
}));
$.ig.GeographicSymbolSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h6, $.ig.MarkerType.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.automatic, function (a, b) {
	(a).ej($.ig.GeographicSymbolSeries.prototype.h6, b.f(), b.e());
}));
$.ig.GeographicSymbolSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h7, $.ig.DataTemplate.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.GeographicSymbolSeries.prototype.h7, b.f(), b.e());
}));
$.ig.GeographicSymbolSeries.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h8, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (a, b) {
	(a).ej($.ig.GeographicSymbolSeries.prototype.h8, b.f(), b.e());
}));
$.ig.GeographicSymbolSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h9, $.ig.Brush.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicSymbolSeries.prototype.h9, b.f(), b.e());
}));
$.ig.GeographicSymbolSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.ia, $.ig.Brush.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.GeographicSymbolSeries.prototype.ia, b.f(), b.e());
}));
$.ig.GeographicSymbolSeries.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.ib, $.ig.Number.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (a, b) {
	(a).ej($.ig.GeographicSymbolSeries.prototype.ib, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.hp = "XMemberPath";
$.ig.XYTriangulatingSeries.prototype.hq = "YMemberPath";
$.ig.XYTriangulatingSeries.prototype.hr = "XColumn";
$.ig.XYTriangulatingSeries.prototype.hs = "YColumn";
$.ig.XYTriangulatingSeries.prototype.ht = "XAxis";
$.ig.XYTriangulatingSeries.prototype.hu = "YAxis";
$.ig.XYTriangulatingSeries.prototype.hv = "TrianglesSource";
$.ig.XYTriangulatingSeries.prototype.hw = "FastTrianglesSource";
$.ig.XYTriangulatingSeries.prototype.hx = "TriangleVertexMemberPath1";
$.ig.XYTriangulatingSeries.prototype.hy = "TriangleVertexMemberPath2";
$.ig.XYTriangulatingSeries.prototype.hz = "TriangleVertexMemberPath3";
$.ig.XYTriangulatingSeries.prototype.h0 = "TriangleVertexColumn1";
$.ig.XYTriangulatingSeries.prototype.h1 = "TriangleVertexColumn2";
$.ig.XYTriangulatingSeries.prototype.h2 = "TriangleVertexColumn3";
$.ig.XYTriangulatingSeries.prototype.xMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hp, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.XYTriangulatingSeries.prototype.hp, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.yMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hq, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.XYTriangulatingSeries.prototype.hq, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.ht, $.ig.NumericXAxis.prototype.$type, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.XYTriangulatingSeries.prototype.ht, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hu, $.ig.NumericYAxis.prototype.$type, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.XYTriangulatingSeries.prototype.hu, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.trianglesSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hv, $.ig.IEnumerable.prototype.$type, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.XYTriangulatingSeries.prototype.hv, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.h7 = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hw, $.ig.FastItemsSource.prototype.$type, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.XYTriangulatingSeries.prototype.hw, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath1Property = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hx, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.XYTriangulatingSeries.prototype.hx, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath2Property = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hy, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.XYTriangulatingSeries.prototype.$type, a)).ej($.ig.XYTriangulatingSeries.prototype.hy, b.f(), b.e());
}));
$.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath3Property = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hz, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.XYTriangulatingSeries.prototype.hz, b.f(), b.e());
}));
$.ig.ContourLineSeries.prototype.jq = "ValueMemberPath";
$.ig.ContourLineSeries.prototype.jr = "ValueColumn";
$.ig.ContourLineSeries.prototype.js = "FillScale";
$.ig.ContourLineSeries.prototype.jt = "ValueResolver";
$.ig.ContourLineSeries.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ContourLineSeries.prototype.jq, String, $.ig.ContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.ContourLineSeries.prototype.jq, b.f(), b.e());
}));
$.ig.ContourLineSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.ContourLineSeries.prototype.js, $.ig.ValueBrushScale.prototype.$type, $.ig.ContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.ContourLineSeries.prototype.js, b.f(), b.e());
}));
$.ig.ContourBuilder.prototype.f = 4294967296;
$.ig.ContourLineSeriesView.prototype.cd = 3;
$.ig.LinearContourValueResolver.prototype.j = "ValueCount";
$.ig.LinearContourValueResolver.prototype.k = $.ig.DependencyProperty.prototype.l($.ig.LinearContourValueResolver.prototype.j, $.ig.Number.prototype.$type, $.ig.LinearContourValueResolver.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (a, b) {
	(a).g($.ig.LinearContourValueResolver.prototype.j, b.f(), b.e());
}));
$.ig.ShapeSeriesBase.prototype.hp = "ShapeMemberPath";
$.ig.ShapeSeriesBase.prototype.hq = "ShapeColumn";
$.ig.ShapeSeriesBase.prototype.hr = "XAxis";
$.ig.ShapeSeriesBase.prototype.hs = "YAxis";
$.ig.ShapeSeriesBase.prototype.ht = "FillScale";
$.ig.ShapeSeriesBase.prototype.hu = "FillMemberPath";
$.ig.ShapeSeriesBase.prototype.hv = "FillColumn";
$.ig.ShapeSeriesBase.prototype.hw = "ShapeStyleSelector";
$.ig.ShapeSeriesBase.prototype.hx = "ShapeStyle";
$.ig.ShapeSeriesBase.prototype.hy = "ShapeFilterResolution";
$.ig.ShapeSeriesBase.prototype.shapeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hp, String, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ShapeSeriesBase.prototype.$type, a)).ej($.ig.ShapeSeriesBase.prototype.hp, b.f(), b.e());
}));
$.ig.ShapeSeriesBase.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hr, $.ig.NumericXAxis.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ShapeSeriesBase.prototype.$type, a)).ej($.ig.ShapeSeriesBase.prototype.hr, b.f(), b.e());
}));
$.ig.ShapeSeriesBase.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hs, $.ig.NumericYAxis.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ShapeSeriesBase.prototype.$type, a)).ej($.ig.ShapeSeriesBase.prototype.hs, b.f(), b.e());
}));
$.ig.ShapeSeriesBase.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.ht, $.ig.ValueBrushScale.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.ShapeSeriesBase.prototype.ht, b.f(), b.e());
}));
$.ig.ShapeSeriesBase.prototype.fillMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hu, String, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ShapeSeriesBase.prototype.$type, a)).ej($.ig.ShapeSeriesBase.prototype.hu, b.f(), b.e());
}));
$.ig.ShapeSeriesBase.prototype.shapeStyleSelectorProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hw, $.ig.StyleSelector.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.ShapeSeriesBase.prototype.hw, b.f(), b.e());
}));
$.ig.ShapeSeriesBase.prototype.shapeStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hx, $.ig.Style.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.ShapeSeriesBase.prototype.hx, b.f(), b.e());
}));
$.ig.ShapeSeriesBase.prototype.shapeFilterResolutionProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hy, Number, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (a, b) {
	(a).ej($.ig.ShapeSeriesBase.prototype.hy, b.f(), b.e());
}));
$.ig.ShapeSeriesViewBase.prototype.cd = 3;
$.ig.ScatterAreaSeries.prototype.jq = "ColorScale";
$.ig.ScatterAreaSeries.prototype.jr = "ColorMemberPath";
$.ig.ScatterAreaSeries.prototype.js = "ColorColumn";
$.ig.ScatterAreaSeries.prototype.colorMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterAreaSeries.prototype.jr, String, $.ig.ScatterAreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.ScatterAreaSeries.prototype.jr, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.jq = "MarkerType";
$.ig.ShapeSeries.prototype.jr = "MarkerTemplate";
$.ig.ShapeSeries.prototype.js = "ActualMarkerTemplate";
$.ig.ShapeSeries.prototype.jt = "MarkerBrush";
$.ig.ShapeSeries.prototype.ju = "ActualMarkerBrush";
$.ig.ShapeSeries.prototype.jv = "MarkerOutline";
$.ig.ShapeSeries.prototype.jw = "ActualMarkerOutline";
$.ig.ShapeSeries.prototype.jx = "MarkerStyle";
$.ig.ShapeSeries.prototype.jy = "MarkerCollisionAvoidance";
$.ig.ShapeSeries.prototype.j2 = new $.ig.Rect(0, 0, 0, 1, 1);
$.ig.ShapeSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jq, $.ig.MarkerType.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.none, function (a, b) {
	(a).ej($.ig.ShapeSeries.prototype.jq, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jr, $.ig.DataTemplate.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.ShapeSeries.prototype.jr, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.actualMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.js, $.ig.DataTemplate.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	(a).ej($.ig.ShapeSeries.prototype.js, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jt, $.ig.Brush.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.ShapeSeries.prototype.jt, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.actualMarkerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.ju, $.ig.Brush.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.ShapeSeries.prototype.ju, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jv, $.ig.Brush.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.ShapeSeries.prototype.jv, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.actualMarkerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jw, $.ig.Brush.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.ShapeSeries.prototype.jw, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.markerStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jx, $.ig.Style.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.ShapeSeries.prototype.jx, b.f(), b.e());
}));
$.ig.ShapeSeries.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jy, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.ShapeSeries.prototype.$type, a)).ej($.ig.ShapeSeries.prototype.jy, b.f(), b.e());
}));
$.ig.ShapefileConverter.prototype.g = "WorldRect";
$.ig.ShapefileConverter.prototype.h = "ShapefileSource";
$.ig.ShapefileConverter.prototype.i = "DatabaseSource";
$.ig.ShapefileConverter.prototype.shapefileSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapefileConverter.prototype.h, $.ig.Uri.prototype.$type, $.ig.ShapefileConverter.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ShapefileConverter.prototype.$type, a)).s($.ig.ShapefileConverter.prototype.h, b.f(), b.e());
}));
$.ig.ShapefileConverter.prototype.databaseSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapefileConverter.prototype.i, $.ig.Uri.prototype.$type, $.ig.ShapefileConverter.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ShapefileConverter.prototype.$type, a)).s($.ig.ShapefileConverter.prototype.i, b.f(), b.e());
}));
$.ig.ItfConverter.prototype.e = "Source";
$.ig.ItfConverter.prototype.f = "TriangulationSource";
$.ig.ItfConverter.prototype.sourceProperty = $.ig.DependencyProperty.prototype.l($.ig.ItfConverter.prototype.e, $.ig.Uri.prototype.$type, $.ig.ItfConverter.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.ItfConverter.prototype.$type, a)).n($.ig.ItfConverter.prototype.e, b.f(), b.e());
}));
$.ig.TriangulationSource.prototype.a = "LOCAL_CS[]";
$.ig.XamGeographicMap.prototype.ke = "WorldRect";
$.ig.XamGeographicMap.prototype.kf = "ActualWorldRect";
$.ig.XamGeographicMap.prototype.kg = "BackgroundContent";
$.ig.XamGeographicMap.prototype.kh = "XAxis";
$.ig.XamGeographicMap.prototype.ki = "YAxis";
$.ig.XamGeographicMap.prototype.kj = new $.ig.Rect(2, {__x: -180, __y: -85.05112878, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, {__x: 180, __y: 85.05112878, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
$.ig.XamGeographicMap.prototype.worldRectProperty = $.ig.DependencyProperty.prototype.l($.ig.XamGeographicMap.prototype.ke, $.ig.Rect.prototype.$type, $.ig.XamGeographicMap.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.XamGeographicMap.prototype.kj, function (a, b) {
	(a).f2($.ig.XamGeographicMap.prototype.ke, b.f(), b.e());
}));
$.ig.XamGeographicMap.prototype.kp = new $.ig.Rect(0, 0, 0, 1, 1);

$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.ShapefileConverter], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.ShapefileConverter], ['flattenTo', 'getBounds2', 'clipTo']], [[$.ig.ShapefileConverter, $.ig.HalfEdgeSet], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']]]);
$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.ShapefileConverter, $.ig.HalfEdgeSet], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.ShapefileConverter, $.ig.HalfEdgeSet], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.ShapefileConverter, $.ig.HalfEdgeSet], ['asQueryable']]]);

