/*!
* Infragistics.Web.ClientUI infragistics.olapdatasource.js 12.2.20122.1021
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







$.ig.util.defType('TaskStatus', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('TaskStatus', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ListSortDirection', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('ListSortDirection', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('NotifyCollectionChangedAction', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('NotifyCollectionChangedAction', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AbstractEnumerable', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	getEnumerator: function () {
		return new $.ig.AbstractEnumerator(this.a().getEnumerator());
	}
,
	$type: new $.ig.Type('AbstractEnumerable', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.util.defType('AbstractEnumerator', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	current: function () {
			return this.a.current();
	}

, 
	moveNext: function () {
		return this.a.moveNext();
	}

, 
	reset: function () {
		this.a.reset();
	}
,
	$type: new $.ig.Type('AbstractEnumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerator.prototype.$type])
}, true);

$.ig.util.defType('IEnumerable$1', 'Object', {

		$type: new $.ig.Type('IEnumerable$1', null, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.util.defType('ICollection$1', 'Object', {

		$type: new $.ig.Type('ICollection$1', null, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])
}, true);

$.ig.util.defType('IList$1', 'Object', {

		$type: new $.ig.Type('IList$1', null, [$.ig.ICollection$1.prototype.$type.specialize(0), $.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])
}, true);

$.ig.util.defType('IArrayList', 'Object', {

		$type: new $.ig.Type('IArrayList', null)
}, true);

$.ig.util.defType('List$1', 'Object', {
	$t: null, 
	__inner: null
, 
		init: function ($t, initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break;
				}
				return;
			}

			this.a = {};

			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.__inner = new $.ig.Array();
		}
, 
		init1: function ($t, initNumber, a) {

			this.a = {};

			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.__inner = new $.ig.Array();
				if (this.n(0, a)) {
					return;
				}
				var c = a.getEnumerator();
				while (c.moveNext()) {
					var b = c.current();
					this.add(b);
				}
		}
, 
		init2: function ($t, initNumber, a) {

			this.a = {};

			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.__inner = new $.ig.Array();
		}
, 
	i: function (a, b) {
		this.__inner[a] = b;
	}

, 
	j: function (a, b) {
		this.__inner.insert(a, b);
	}

, 
	k: function (a) {
		this.__inner.add(a);
	}

, 
	l: function (a) {
		this.__inner.removeAt(a);
	}

, 
	m: function () {
		this.__inner.clear();
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			this.i(b, a);
			return a;
		} else {
			return this.__inner[b];
		}
	}

, 
	indexOf: function (a) {
		return this.__inner.indexOf(a);
	}

, 
	insert: function (a, b) {
		this.j(a, b);
	}

, 
	removeAt: function (a) {
		this.l(a);
	}

, 
	count: function () {
			return this.__inner.length;
	}

, 
	isReadOnly: function () {
			return false;
	}

, 
	add: function (a) {
		this.k(a);
	}

, 
	clear: function () {
		this.m();
	}

, 
	contains: function (a) {
		return this.__inner.contains(a);
	}

, 
	copyTo: function (a, b) {
		for (var c = 0; c < this.__inner.length; c++) {
			a[b + c] = this.__inner[c];
		}
	}

, 
	remove: function (a) {
		var b = this.indexOf(a);
		if (b < 0) {
			return false;
		}
		this.l(b);
		return true;
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
							this.$b = this.$this.__inner.getEnumerator();
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
	asArrayList: function () {
		return this.__inner;
	}

, 
	n: function (a, collection_) {
		var b = $.ig.util.cast($.ig.IArrayList.prototype.$type, collection_);
		if (b != null) {
			this.__inner.insertRange1(a, b.asArrayList());
			return true;
		}
		var c = $.ig.util.cast($.ig.IArray.prototype.$type, collection_);
		if (c != null) {
			this.__inner.insertRange(a, c.asArray());
			return true;
		}
		var d = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize(this.$t), collection_);
		if (d != null) {
			for (var e = 0; e < d.count(); e++) {
				this.__inner.insert(a + e, d.item(e));
			}
			return true;
		}
		var f = $.isArray(collection_) ? collection_ : null;;
		if (f != null) {
			this.__inner.insertRange(a, f);
			return true;
		}
		return false;
	}

, 
	o: function (a, b) {
		if (this.n(a, b)) {
			return;
		}
		var c = 0;
		var e = b.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			this.__inner.insert(a + c, d);
			c++;
		}
	}

, 
	p: function (a, b) {
		if (this.n(a, b)) {
			return;
		}
		var c = 0;
		var e = b.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			this.__inner.insert(a + c, d);
			c++;
		}
	}

, 
	q: function (a, b) {
		this.__inner.splice(a, b);
	}

, 
	copyTo1: function (a, b) {
		this.__inner.copyTo(a, b);
	}

, 
	isFixedSize: function () {
			return false;
	}


, 
	add1: function (c) {
		this.k(c);
		return this.__inner.length - 1;
	}

, 
	contains1: function (d) {
		return this.__inner.contains(d);
	}

, 
	indexOf1: function (e) {
		return this.__inner.indexOf(e);
	}

, 
	insert1: function (f, g) {
		this.j(f, g);
	}

, 
	remove1: function (h) {
		var i = this.indexOf1(h);
		this.l(i);
	}

, 
	r: function () {
		var $self = this;
		var j = null;
		if (this.$t == Number) {
			j = function (k, l) {
				var m = k;
				var n = l;
				if (m < n) {
					return -1;
				}
				if (m == n) {
					return 0;
				}
				return 1;
			};
		} else if (this.$t == $.ig.Single.prototype.$type) {
			j = function (o, p) {
				var q = o;
				var r = p;
				if (q < r) {
					return -1;
				}
				if (q == r) {
					return 0;
				}
				return 1;
			};
		} else if (this.$t == $.ig.Number.prototype.$type) {
			j = function (s, t) {
				var u = s;
				var v = t;
				if (u < v) {
					return -1;
				}
				if (u == v) {
					return 0;
				}
				return 1;
			};
		} else if (this.$t == $.ig.Date.prototype.$type) {
			j = function (w, x) {
				var y = w;
				var z = x;
				if (y.getTime() < z.getTime()) {
					return -1;
				}
				if (y.getTime() == z.getTime()) {
					return 0;
				}
				return 1;
			};

		} else {
			j = function (aa, ab) {
				return (aa).compareTo(ab);
			};
		}
		this.s(j);
	}

, 
	s: function (ac) {
		this.__inner.sort(ac);
	}

, 
	t: function (ad) {
		var $self = this;
		this.__inner.sort(function (ae, af) {
			var ag = ae;
			var ah = af;
			return ad(ag, ah);
		});
	}

, 
	_h: null,
	h: function (ai) {
		if (arguments.length === 1) {
			this._h = ai;
			return ai;
		} else {
			return this._h;
		}
	}

, 
	w: function (aj) {
		var al = aj.getEnumerator();
		while (al.moveNext()) {
			var ak = al.current();
			this.__inner.add(ak);
		}
	}

, 
	x: function () {
		return  this.__inner.slice(0);
	}

, 
	y: function (am) {
	}

, 
	isSynchronized: function () {
			return true;
	}
, 
	a: null
, 
	syncRoot: function () {
			return this.a;
	}
,
	$type: new $.ig.Type('List$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IArrayList.prototype.$type, $.ig.IList.prototype.$type])
}, true);


$.ig.util.defType('IDictionary$2', 'Object', {

		$type: new $.ig.Type('IDictionary$2', null, [$.ig.ICollection$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable.prototype.$type])
}, true);

$.ig.util.defType('Dictionary$2', 'Object', {
	$tKey: null, 
	$tValue: null, 
	__inner: null, 
	__keys: null
, 
		init: function ($tKey, $tValue, initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break;
				}
				return;
			}

			this.a = null;
			this._useToString = false;
			this.b = false;
			this._needsEnsure = false;

			this.$tKey = $tKey
			this.$tValue = $tValue
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
			$.ig.Object.prototype.init.call(this);
						this.__inner = new $.ig.Dictionary(0);
				this.__keys = new $.ig.Dictionary(0);
		}
, 
		init1: function ($tKey, $tValue, initNumber, a) {

			this.a = null;
			this._useToString = false;
			this.b = false;
			this._needsEnsure = false;

			this.$tKey = $tKey
			this.$tValue = $tValue
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
			$.ig.Object.prototype.init.call(this);
						this.__inner = new $.ig.Dictionary(1, a);
				this.__keys = new $.ig.Dictionary(0);
		}, 
	a: null
, 
		init2: function ($tKey, $tValue, initNumber, a) {

			this.a = null;
			this._useToString = false;
			this.b = false;
			this._needsEnsure = false;

			this.$tKey = $tKey
			this.$tValue = $tValue
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
			$.ig.Object.prototype.init.call(this);
						this.__inner = new $.ig.Dictionary(0);
				this.__keys = new $.ig.Dictionary(0);
				this.a = a;
		}
, 
	count: function () {
			return this.__inner.count();
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			this.__inner.item(this.f(b), a);
			this.__keys.item(this.f(b), b);
			return a;
		} else {
			return this.__inner.item(this.f(b));
		}
	}

, 
	c: function () {
			return this.__inner.length();
	}

, 
	containsKey: function (a) {
		return this.__inner.containsKey(this.f(a));
	}

, 
	remove: function (a) {
		var b = this.f(a);
		if (!this.__keys.containsKey(b)) {
			return false;
		}
		this.__inner.remove(b);
		this.__keys.remove(b);
		return true;
	}

, 
	clear: function () {
		this.__inner.clear();
		this.__keys.clear();
	}
, 
	_useToString: null, 
	b: null, 
	_needsEnsure: null
, 
	e: function (key_) {
		if (!this.b) {
			this.b = true;
			this._needsEnsure = (typeof key_ == 'object');;
			if (!this._needsEnsure) {
				this._useToString = !key_.getHashCode;;
			}
		}
	}

, 
	f: function (key_) {
		this.e(key_);
		if (this._needsEnsure) {
			$.ig.util.ensureUniqueId(key_);;
		}
		if (this.a != null) {
			return this.a.getHashCode(key_).toString();
		}
		if (this._useToString) {
			return key_.toString();

		} else {
			return key_.getHashCode().toString();
		}
	}

, 
	add: function (a, b) {
		this.__inner.item(this.f(a), b);
		this.__keys.item(this.f(a), a);
	}

, 
	tryGetValue: function (a, b) {
		if (!this.__inner.containsKey(this.f(a))) {
			b = null;
			return {
				ret: false,
				value: b
			};
		}
		b = this.__inner.item(this.f(a));
		return {
			ret: true,
			value: b
		};
		return {
			value: b
		};
	}

, 
	keys: function () {
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
								this.$c = this.$this.__keys.values().getEnumerator();
								this.$state = 4;
								break;
							case 2:
								this.$b = this.$c.current();
								this.$current =  this.$b;
								this.$state = 3
								return true;
							case 3:
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
			}; } () };
			return new $.ig.GenericEnumerable$1(this.$tKey, $iter);
	}

, 
	values: function () {
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
								this.$c = this.$this.__inner.values().getEnumerator();
								this.$state = 4;
								break;
							case 2:
								this.$b = this.$c.current();
								this.$current =  this.$b;
								this.$state = 3
								return true;
							case 3:
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
			}; } () };
			return new $.ig.GenericEnumerable$1(this.$tValue, $iter);
	}

, 
	isReadOnly: function () {
			return false;
	}

, 
	add1: function (a) {
		this.add(a.c(), a.d());
	}

, 
	contains: function (a) {
		return this.containsKey(a.c());
	}

, 
	g: function (a, b) {
		throw new $.ig.NotImplementedException();
	}

, 
	remove1: function (a) {
		this.remove(a.c());
		return true;
	}

, 
	h: function () {
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
							this.$b = this.$this.__keys.values().getEnumerator();
							this.$state = 4;
							break;
						case 2:
							this.$a = this.$b.current();
							this.$current =  new $.ig.KeyValuePair$2(this.$tKey, this.$tValue, this.$a, this.$this.__inner.item(this.$this.f(this.$a)));
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
		return new $.ig.GenericEnumerable$1($.ig.KeyValuePair$2.prototype.$type.specialize(this.$tKey, this.$tValue), $iter);
	}

, 
	getEnumerator: function () {
		return this.h().getEnumerator();
	}
,
	$type: new $.ig.Type('Dictionary$2', $.ig.Object.prototype.$type, [$.ig.IDictionary$2.prototype.$type.specialize(0, 1), $.ig.IDictionary.prototype.$type])
}, true);

$.ig.util.defType('GenericEnumerable$1', 'Object', {
	$t: null, 
	a: null
, 
		init: function ($t, a) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	getEnumerator: function () {
		return new $.ig.GenericEnumerator$1(this.$t, this.a().getEnumerator());
	}
,
	$type: new $.ig.Type('GenericEnumerable$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])
}, true);

$.ig.util.defType('IEnumerator$1', 'Object', {

		$type: new $.ig.Type('IEnumerator$1', null, [$.ig.IEnumerator.prototype.$type])
}, true);

$.ig.util.defType('GenericEnumerator$1', 'Object', {
	$t: null, 
	a: null
, 
		init: function ($t, a) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	current: function () {
			return this.a.current();
	}


, 
	moveNext: function () {
		return this.a.moveNext();
	}

, 
	reset: function () {
		this.a.reset();
	}
,
	$type: new $.ig.Type('GenericEnumerator$1', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0)])
}, true);

$.ig.util.defType('INotifyCollectionChanged', 'Object', {

		$type: new $.ig.Type('INotifyCollectionChanged', null)
}, true);


$.ig.util.defType('NotifyCollectionChangedEventArgs', 'EventArgs', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.EventArgs.prototype.init.call(this);
						this.a = a;
				this.d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
				this.b = new $.ig.List$1($.ig.Object.prototype.$type, 0);
		}
, 
		init1: function (initNumber, a, b, c) {

			var $self = this;

			$.ig.EventArgs.prototype.init.call(this);
						this.a = a;
				this.d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
				if (this.a == $.ig.NotifyCollectionChangedAction.prototype.remove || this.a == $.ig.NotifyCollectionChangedAction.prototype.replace) {
					this.d.add(b);
					this.e = c;
				}
				if (this.a != $.ig.NotifyCollectionChangedAction.prototype.remove) {
					this.b = (function () { var $ret = new $.ig.List$1($.ig.Object.prototype.$type, 0);
					$ret.add(b); return $ret;}());

				} else {
					this.b = new $.ig.List$1($.ig.Object.prototype.$type, 0);
				}
				this.c = c;
		}
, 
		init2: function (initNumber, a, b, c, d) {

			var $self = this;

			$.ig.EventArgs.prototype.init.call(this);
						this.a = a;
				this.b = (function () { var $ret = new $.ig.List$1($.ig.Object.prototype.$type, 0);
				$ret.add(b); return $ret;}());
				this.c = d;
				this.d = (function () { var $ret = new $.ig.List$1($.ig.Object.prototype.$type, 0);
				$ret.add(c); return $ret;}());
				this.e = d;
		}, 
	a: null
, 
	action: function () {
			return this.a;
	}
, 
	b: null
, 
	newItems: function () {
			return this.b;
	}
, 
	c: null
, 
	newStartingIndex: function () {
			return this.c;
	}
, 
	d: null
, 
	oldItems: function () {
			return this.d;
	}
, 
	e: null
, 
	oldStartingIndex: function () {
			return this.e;
	}
,
	$type: new $.ig.Type('NotifyCollectionChangedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

$.ig.util.defType('KeyValuePair$2', 'ValueType', {
	$tKey: null, 
	$tValue: null, 
	a: null, 
	b: null
, 
		init: function ($tKey, $tValue, a, b) {


			this.$tKey = $tKey
			this.$tValue = $tValue
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
			$.ig.ValueType.prototype.init.call(this);
						this.a = a;
				this.b = b;
		}
, 
	c: function () {
			return this.a;
	}

, 
	d: function () {
			return this.b;
	}
,
	$type: new $.ig.Type('KeyValuePair$2', $.ig.Object.prototype.$type)
}, true);





$.ig.util.defType('ReadOnlyCollection$1', 'Object', {
	$t: null
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

			this.b = {};

			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
		}
, 
		init1: function ($t, initNumber, a) {

			this.b = {};

			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}, 
	a: null
, 
	item: function (b, a) {
		if (arguments.length === 2) {
			this.a.item(b, a);
			return a;
		} else {
			return this.a.item(b);
		}
	}

, 
	indexOf: function (a) {
		return this.a.indexOf(a);
	}

, 
	insert: function (a, b) {
	}

, 
	removeAt: function (a) {
	}

, 
	count: function () {
			return this.a.count();
	}

, 
	isReadOnly: function () {
			return true;
	}

, 
	add: function (a) {
	}

, 
	clear: function () {
	}

, 
	contains: function (a) {
		return this.a.contains(a);
	}

, 
	copyTo: function (a, b) {
		this.a.copyTo(a, b);
	}

, 
	remove: function (a) {
		return false;
	}

, 
	getEnumerator: function () {
		return this.a.getEnumerator();
	}

, 
	isFixedSize: function () {
			return true;
	}


, 
	add1: function (c) {
		return -1;
	}

, 
	contains1: function (d) {
		return this.a.contains(d);
	}

, 
	indexOf1: function (e) {
		return this.a.indexOf(e);
	}

, 
	insert1: function (f, g) {
	}

, 
	remove1: function (h) {
	}

, 
	copyTo1: function (i, j) {
		this.a.copyTo(i, j);
	}

, 
	c: function () {
			return this.a;
	}

, 
	isSynchronized: function () {
			return true;
	}
, 
	b: null
, 
	syncRoot: function () {
			return this.b;
	}
,
	$type: new $.ig.Type('ReadOnlyCollection$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IList.prototype.$type])
}, true);


$.ig.util.defType('NameValueCollection', 'Object', {
	a: null
, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.Dictionary$2(String, String, 0);
		}
, 
	item: function (b, a) {
		if (arguments.length === 2) {
			if (this.a.containsKey(b)) {
				this.a.item(b, a);

			} else {
				this.a.add(b, a);
			}
			return a;
		} else {
			if (this.a.containsKey(b)) {
				return this.a.item(b);

			} else {
				return null;
			}
		}
	}
,
	$type: new $.ig.Type('NameValueCollection', $.ig.Object.prototype.$type)
}, true);








$.ig.util.defType('IOrderedEnumerable$1', 'Object', {

		$type: new $.ig.Type('IOrderedEnumerable$1', null, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])
}, true);


$.ig.util.defType('Enumerable', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	where$1: function ($tSource, b) {
		var $self = this;
		var $iter = function () { return function ($tSource, b) { return {
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
							this.$d = this.$this.getEnumerator();
							this.$state = 7;
							break;
						case 2:
							this.$c = this.$d.current();
							this.$state = 3;
							break;
						case 3:
							if (b(this.$c)) {
								this.$state = 4;
							}
							else {
								this.$state = 6;
							}
							break;

						case 4:
							this.$current =  this.$c;
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
		}; } ($tSource, b) };
		return new $.ig.GenericEnumerable$1($tSource, $iter);
	}

, 
	where$11111: function ($tSource, b) {
		var $self = this;
		var $iter = function () { return function ($tSource, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : 0,
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
							this.$state = 1;
							break;
						case 1:
							this.$e = this.$this.getEnumerator();
							this.$state = 7;
							break;
						case 2:
							this.$d = this.$e.current();
							this.$state = 3;
							break;
						case 3:
							if (b(this.$d, this.$c)) {
								this.$state = 4;
							}
							else {
								this.$state = 6;
							}
							break;

						case 4:
							this.$current =  this.$d;
							this.$state = 5
							return true;
						case 5:
							this.$state = 6;
							break;

						case 6:
							this.$c++;
							this.$state = 7;
							break;
						case 7:
							if (this.$e.moveNext()) {
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
		}; } ($tSource, b) };
		return new $.ig.GenericEnumerable$1($tSource, $iter);
	}

, 
	select$2: function ($tSource, $tResult, b) {
		var $self = this;
		var $iter = function () { return function ($tSource, $tResult, b) { return {
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
							this.$d = this.$this.getEnumerator();
							this.$state = 4;
							break;
						case 2:
							this.$c = this.$d.current();
							this.$current =  b(this.$c);
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$d.moveNext()) {
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
		}; } ($tSource, $tResult, b) };
		return new $.ig.GenericEnumerable$1($tResult, $iter);
	}

, 
	selectMany$2: function ($tSource, $tResult, b) {
		var $self = this;
		var $iter = function () { return function ($tSource, $tResult, b) { return {
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
							this.$d = this.$this.getEnumerator();
							this.$state = 8;
							break;
						case 2:
							this.$c = this.$d.current();
							this.$state = 3;
							break;
						case 3:
							this.$f = b(this.$c).getEnumerator();
							this.$state = 6;
							break;
						case 4:
							this.$e = this.$f.current();
							this.$current =  this.$e;
							this.$state = 5
							return true;
						case 5:
							this.$state = 6;
							break;
						case 6:
							if (this.$f.moveNext()) {
								this.$state = 4;
							}
							else {
								this.$state = 7;
							}
							break;

						case 7:
							this.$state = 8;
							break;
						case 8:
							if (this.$d.moveNext()) {
								this.$state = 2;
							}
							else {
								this.$state = 9;
							}
							break;

						case 9:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } ($tSource, $tResult, b) };
		return new $.ig.GenericEnumerable$1($tResult, $iter);
	}

, 
	ofType$1: function ($tResult) {
		var $self = this;
		var $iter = function () { return function ($tResult) { return {
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
							this.$c = this.$this.getEnumerator();
							this.$state = 7;
							break;
						case 2:
							this.$b = this.$c.current();
							this.$state = 3;
							break;
						case 3:
							if ($.ig.util.cast($tResult, this.$b) !== null) {
								this.$state = 4;
							}
							else {
								this.$state = 6;
							}
							break;

						case 4:
							this.$current =  this.$b;
							this.$state = 5
							return true;
						case 5:
							this.$state = 6;
							break;

						case 6:
							this.$state = 7;
							break;
						case 7:
							if (this.$c.moveNext()) {
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
		}; } ($tResult) };
		return new $.ig.GenericEnumerable$1($tResult, $iter);
	}

, 
	last$1: function ($tSource) {
		var b = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize($tSource), this);
		if (b != null) {
			return b.item(b.count() - 1);
		}
		var c = null;
		var e = this.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			c = d;
		}
		return c;
	}

, 
	first$1: function ($tSource) {
		var c = this.getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			return b;
		}
		return null;
	}

, 
	firstOrDefault$1: function ($tSource) {
		var c = this.getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			return b;
		}
		return null;
	}

, 
	orderBy$2: function ($tSource, $tKey, b) {
		var $self = this;
		var c = new $.ig.SortedList$1($tSource, this);
		c.t(function (d, e) {
			var f = d;
			var g = e;
			var h = b(f);
			var i = b(g);
			if ($.ig.util.cast($.ig.IComparable.prototype.$type, h) !== null) {
				return ($.ig.util.cast($.ig.IComparable.prototype.$type, h)).compareTo(i);

			} else {
				return h.toString().compareTo(i.toString());
			}
		});
		return c;
	}

, 
	toList$1: function ($tSource) {
		var b = new $.ig.List$1($tSource, 1, this);
		return b;
	}

, 
	a: function (a, b) {
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
							this.$c = a;
							this.$state = 5;
							break;
						case 2:
							this.$current =  this.$c;
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
							if (this.$c < b) {
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
		return new $.ig.GenericEnumerable$1($.ig.Number.prototype.$type, $iter);
	}

, 
	concat$1: function ($tSource, b) {
		var $self = this;
		var $iter = function () { return function ($tSource, b) { return {
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
							this.$d = this.$this.getEnumerator();
							this.$state = 4;
							break;
						case 2:
							this.$c = this.$d.current();
							this.$current =  this.$c;
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$d.moveNext()) {
								this.$state = 2;
							}
							else {
								this.$state = 5;
							}
							break;

						case 5:
							this.$state = 6;
							break;
						case 6:
							this.$f = b.getEnumerator();
							this.$state = 9;
							break;
						case 7:
							this.$e = this.$f.current();
							this.$current =  this.$e;
							this.$state = 8
							return true;
						case 8:
							this.$state = 9;
							break;
						case 9:
							if (this.$f.moveNext()) {
								this.$state = 7;
							}
							else {
								this.$state = 10;
							}
							break;

						case 10:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } ($tSource, b) };
		return new $.ig.GenericEnumerable$1($tSource, $iter);
	}

, 
	max: function () {
		var b = true;
		var c = 0;
		var e = this.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			if (b) {
				b = false;
				c = d;

			} else {
				c = Math.max(c, d);
			}
		}
		return c;
	}

, 
	max$111: function ($tSource, b) {
		return this.select$2($tSource, $.ig.Number.prototype.$type, b).max();
	}

, 
	min: function () {
		var b = true;
		var c = 0;
		var e = this.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			if (b) {
				b = false;
				c = d;

			} else {
				c = Math.min(c, d);
			}
		}
		return c;
	}

, 
	min$111: function ($tSource, b) {
		return this.select$2($tSource, $.ig.Number.prototype.$type, b).max();
	}

, 
	count$1: function ($tSource) {
		var b = 0;
		var d = this.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			b++;
		}
		return b;
	}

, 
	reverse$1: function ($tSource) {
		var $self = this;
		var $iter = function () { return function ($tSource) { return {
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
							this.$b = new $.ig.List$1($tSource, 1, this.$this);
							this.$state = 1;
							break;
						case 1:
							this.$c = this.$b.count() - 1;
							this.$state = 5;
							break;
						case 2:
							this.$current =  this.$b.__inner[this.$c];
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							this.$c--;
							this.$state = 5;
							break;
						case 5:
							if (this.$c > 0) {
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
		}; } ($tSource) };
		return new $.ig.GenericEnumerable$1($tSource, $iter);
	}

, 
	cast$1: function ($tResult) {
		if (this == null) {
			throw new $.ig.ArgumentNullException("source");
		}
		var b = $.ig.util.cast($.ig.IEnumerable$1.prototype.$type.specialize($tResult), this);
		if (b != null) {
			return b;
		}
		var c = new $.ig.List$1($tResult, 0);
		var e = this.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			if ($.ig.util.cast($tResult, d) !== null) {
				c.add(d);

			} else {
				c.add(null);
			}
		}
		return c;
	}

, 
	take$1: function ($tSource, b) {
		var $self = this;
		var $iter = function () { return function ($tSource, b) { return {
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
							this.$d = this.$this.getEnumerator();
							this.$state = 9;
							break;
						case 2:
							this.$c = this.$d.current();
							this.$state = 3;
							break;
						case 3:
							if (b > 0) {
								this.$state = 4;
							}
							else {
								this.$state = 6;
							}
							break;

						case 4:
							b--;
							this.$current =  this.$c;
							this.$state = 5
							return true;
						case 5:
							this.$state = 8;
							break;

						case 6:

							this.$state = -2
							return false;
						case 7:
							this.$state = 8;
							break;
						case 8:
							this.$state = 9;
							break;
						case 9:
							if (this.$d.moveNext()) {
								this.$state = 2;
							}
							else {
								this.$state = 10;
							}
							break;

						case 10:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } ($tSource, b) };
		return new $.ig.GenericEnumerable$1($tSource, $iter);
	}

, 
	skip$1: function ($tSource, b) {
		var $self = this;
		var $iter = function () { return function ($tSource, b) { return {
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
							this.$d = this.$this.getEnumerator();
							this.$state = 8;
							break;
						case 2:
							this.$c = this.$d.current();
							this.$state = 3;
							break;
						case 3:
							if (b <= 0) {
								this.$state = 4;
							}
							else {
								this.$state = 6;
							}
							break;

						case 4:
							this.$current =  this.$c;
							this.$state = 5
							return true;
						case 5:
							this.$state = 7;
							break;

						case 6:
							b--;
							this.$state = 7;
							break;
						case 7:
							this.$state = 8;
							break;
						case 8:
							if (this.$d.moveNext()) {
								this.$state = 2;
							}
							else {
								this.$state = 9;
							}
							break;

						case 9:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } ($tSource, b) };
		return new $.ig.GenericEnumerable$1($tSource, $iter);
	}

, 
	any$1: function ($tSource) {
		var c = this.getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			return true;
		}
		return false;
	}

, 
	contains$1: function ($tSource, value_) {
		var b = this.getEnumerator();
		while (b.moveNext()) {
			var item_ = b.current();
			if (item_ === value_)
                {
                    return true;
                };
		}
		return false;
	}

, 
	union$1: function ($tSource, b) {
		return null;
	}

, 
	toArray$1: function ($tSource) {
		var b = new $.ig.List$1($tSource, 1, this);
		return b.asArrayList();
	}

, 
	elementAt$1: function ($tSource, b) {
		var c = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize($tSource), this);
		if (c != null) {
			return c.item(b);
		}
		return this.skip$1($tSource, b).first$1($tSource);
	}
,
	$type: new $.ig.Type('Enumerable', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SortedList$1', 'List$1', {
	$tElement: null
, 
		init: function ($tElement, a) {


			this.$tElement = $tElement
			this.$type = this.$type.specialize(this.$tElement);
			$.ig.List$1.prototype.init1.call(this, this.$tElement, 1, a);
		}
, 
	getEnumerator: function () {
		return $.ig.List$1.prototype.getEnumerator.call(this);
	}
,
	$type: new $.ig.Type('SortedList$1', $.ig.List$1.prototype.$type.specialize(0), [$.ig.IOrderedEnumerable$1.prototype.$type.specialize(0)])
}, true);


$.ig.util.defType('IArray', 'Object', {

		$type: new $.ig.Type('IArray', null)
}, true);









$.ig.util.defType('AggregateException', 'Error', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.Error.prototype.init.call(this);
		}
, 
		init1: function (initNumber, a) {


			$.ig.Error.prototype.init1.call(this, 1, a);
		}
, 
		init2: function (initNumber, a, b) {


			$.ig.Error.prototype.init2.call(this, 2, a, b);
		},
	$type: new $.ig.Type('AggregateException', $.ig.Error.prototype.$type)
}, true);

$.ig.util.defType('ArgumentException', 'Error', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.Error.prototype.init1.call(this, 1, a + " is invalid.");
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.Error.prototype.init1.call(this, 1, a);
		},
	$type: new $.ig.Type('ArgumentException', $.ig.Error.prototype.$type)
}, true);

$.ig.util.defType('ArgumentNullException', 'Error', {

		init: function (a) {


			$.ig.Error.prototype.init1.call(this, 1, a + " cannot be null.");
		},
	$type: new $.ig.Type('ArgumentNullException', $.ig.Error.prototype.$type)
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



$.ig.util.defType('Environment', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function () {
			return "\n";
	}
,
	$type: new $.ig.Type('Environment', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('InvalidOperationException', 'Error', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.Error.prototype.init1.call(this, 1, "Invalid operation");
		}
, 
		init1: function (initNumber, a) {


			$.ig.Error.prototype.init1.call(this, 1, a);
		},
	$type: new $.ig.Type('InvalidOperationException', $.ig.Error.prototype.$type)
}, true);

$.ig.util.defType('Debug', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
	}

, 
	b: function (a) {
	}

, 
	c: function (a) {
	}
,
	$type: new $.ig.Type('Debug', $.ig.Object.prototype.$type)
}, true);



$.ig.util.defType('ICredentials', 'Object', {

		$type: new $.ig.Type('ICredentials', null)
}, true);

$.ig.util.defType('NetworkCredential', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('NetworkCredential', $.ig.Object.prototype.$type, [$.ig.ICredentials.prototype.$type])
}, true);


$.ig.util.defType('UploadStringCompletedEventArgs', 'AsyncCompletedEventArgs', {
	e: null
, 
		init: function (a, b, c, d) {


			$.ig.AsyncCompletedEventArgs.prototype.init.call(this, b, c, d);
						this.e = a;
		}
, 
	result: function () {
			this.d();
			return this.e;
	}
,
	$type: new $.ig.Type('UploadStringCompletedEventArgs', $.ig.AsyncCompletedEventArgs.prototype.$type)
}, true);

$.ig.util.defType('WebClient', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.f(new $.ig.WebHeaderCollection());
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
	uploadStringCompleted: null
, 
	p: function (a, b, c, d) {
		var $self = this;
		this.q(a, b, c).ac(function (e) {
			if ($self.uploadStringCompleted != null) {
				var f = null;
				var g = null;
				try {
						f = e.aa();

				}
				catch (e_) {
						g = e_;

				}				$self.uploadStringCompleted($self, new $.ig.UploadStringCompletedEventArgs(f, g, e.i() == $.ig.TaskStatus.prototype.canceled, d));
			}
		});
	}

, 
	q: function (a, b, c) {
		var url_ = a.value();
		var method_ = b;
		var data_ = c;
		var contentType_ = this.f().item("Content-Type");
		var d = $.ig.util.ajax(url_, contentType_, data_, method_);
		return new $.ig.Task$1(String, d, null);
	}

, 
	r: function (a, b, c, d) {
		a.i(b);
	}

, 
	s: function (a, b, c, d) {
		a.h(new $.ig.Error(1, d));
	}
,
	$type: new $.ig.Type('WebClient', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('WebHeaderCollection', 'NameValueCollection', {
	init: function () {

		$.ig.NameValueCollection.prototype.init.call(this);

	},
	$type: new $.ig.Type('WebHeaderCollection', $.ig.NameValueCollection.prototype.$type)
}, true);

$.ig.util.defType('FaultCode', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.b(a);
		}
, 
	_b: null,
	b: function (a) {
		if (arguments.length === 1) {
			this._b = a;
			return a;
		} else {
			return this._b;
		}
	}
,
	$type: new $.ig.Type('FaultCode', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('FaultException', 'Error', {

		init: function (a, b, c) {


			$.ig.Error.prototype.init.call(this);
						this.reason(a);
				this.code(b);
				this.action(c);
		}
, 
	_action: null,
	action: function (a) {
		if (arguments.length === 1) {
			this._action = a;
			return a;
		} else {
			return this._action;
		}
	}

, 
	_code: null,
	code: function (a) {
		if (arguments.length === 1) {
			this._code = a;
			return a;
		} else {
			return this._code;
		}
	}

, 
	_reason: null,
	reason: function (a) {
		if (arguments.length === 1) {
			this._reason = a;
			return a;
		} else {
			return this._reason;
		}
	}
,
	$type: new $.ig.Type('FaultException', $.ig.Error.prototype.$type)
}, true);

$.ig.util.defType('FaultException$1', 'FaultException', {
	$tDetail: null
, 
		init: function ($tDetail, a, b, c, d) {


			this.$tDetail = $tDetail
			this.$type = this.$type.specialize(this.$tDetail);
			$.ig.FaultException.prototype.init.call(this, b, c, d);
						this.detail(a);
		}
, 
	_detail: null,
	detail: function (a) {
		if (arguments.length === 1) {
			this._detail = a;
			return a;
		} else {
			return this._detail;
		}
	}
,
	$type: new $.ig.Type('FaultException$1', $.ig.FaultException.prototype.$type)
}, true);

$.ig.util.defType('FaultReason', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	toString: function () {
		return this.a;
	}
,
	$type: new $.ig.Type('FaultReason', $.ig.Object.prototype.$type)
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


$.ig.util.defType('NotImplementedException', 'Error', {

		init: function () {


			$.ig.Error.prototype.init1.call(this, 1, "not implemented");
		},
	$type: new $.ig.Type('NotImplementedException', $.ig.Error.prototype.$type)
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

$.ig.util.defType('Task', 'Object', {

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
		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.Task.prototype.init1.call(this, 1, a, null);
		}
, 
		init1: function (initNumber, a, b) {

			var $self = this;

			$.ig.Object.prototype.init.call(this);
						var c = function () {
};
				var e = function (d) {
	if (d == null) {
		$self.g(true);

	} else {
		$self.h(new $.ig.AggregateException(2, "Exception occurred during task execution", d));
	}
};
				this.f(a.then(c, e));
				this.j(b);
		}
, 
	i: function () {
			if (this.g()) {
			return $.ig.TaskStatus.prototype.canceled;
			}
			switch (this.f().state()) {
				case "pending":
					return $.ig.TaskStatus.prototype.created;
				case "resolved":
					return $.ig.TaskStatus.prototype.ranToCompletion;
				case "rejected":
					return $.ig.TaskStatus.prototype.faulted;
				default:
					return $.ig.TaskStatus.prototype.created;
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
	t: function (a) {
		var $self = this;
		var b = function () { return a($self)};
		var d = function (c) { return a($self)};
		var e = this.f().then(b, d);
		return new $.ig.Task(0, e);
	}

, 
	v: function ($tNewResult, a) {
		var $self = this;
		var b = new $.ig.TaskCompletionSource$1($tNewResult, 0);
		var d = function () {
	try {
			var c = a($self);
			b.i(c);

	}
	catch (e_) {
			b.h(e_);

	}};
		var f = function (e) { return d()};
		var h = function (g) { return d()};
		this.f().then(f, h);
		return b.d();
	}
,
	$type: new $.ig.Type('Task', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Task$1', 'Task', {
	$tResult: null
, 
		init: function ($tResult, a, b) {

			var $self = this;
			this.y = false;

			this.$tResult = $tResult
			this.$type = this.$type.specialize(this.$tResult);
			$.ig.Task.prototype.init1.call(this, 1, a, b);
						var e = function (c) {
	var d = c;
	$self.z = d;
	$self.y = true;
};
				var g = function (f) {
	$self.y = true;
};
				this.f().then(e, g);
		}, 
	y: null, 
	z: null
, 
	aa: function () {
			if (!this.y) {
				throw 'Result is not ready yet';
			}
			if (this.h() != null) {
				throw this.h();
			}
			return this.z;
	}

, 
	ac: function (a) {
		var $self = this;
		return $.ig.Task.prototype.t.call(this, function (b) { return a(b)		});
	}

, 
	ae: function ($tNewResult, a) {
		var $self = this;
		var c = function (b) { return a(b)};
		return this.ag($.ig.Object.prototype.$type, c).ag($.ig.Object.prototype.$type, function (d) { return (d).aa()		});
	}

, 
	ag: function ($tNewResult, a) {
		return $.ig.Task.prototype.v.call(this, $tNewResult, a);
	}
,
	$type: new $.ig.Type('Task$1', $.ig.Task.prototype.$type)
}, true);

$.ig.util.defType('TaskCompletionSource$1', 'Object', {
	$tResult: null
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
		init: function ($tResult, initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			this.$tResult = $tResult
			this.$type = this.$type.specialize(this.$tResult);
			$.ig.TaskCompletionSource$1.prototype.init1.call(this, 1, null);
		}
, 
		init1: function ($tResult, initNumber, a) {


			this.$tResult = $tResult
			this.$type = this.$type.specialize(this.$tResult);
			$.ig.Object.prototype.init.call(this);
						this.c($.ig.util.deferred());
				this.d(new $.ig.Task$1(this.$tResult, this.c().promise(), a));
		}
, 
	g: function () {
		this.c().reject(null);
	}

, 
	h: function (a) {
		this.c().reject(a);
	}

, 
	i: function (a) {
		this.c().resolve(a);
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
	$type: new $.ig.Type('TaskCompletionSource$1', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TaskFactory', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
		var $self = this;
		return new $.ig.Task(0, this.i(this.h(a)).always(function () { return b(a)		}));
	}

, 
	c: function ($tResult, a, b) {
		var $self = this;
		var c = new $.ig.TaskCompletionSource$1($tResult, 0);
		this.i(this.h(a)).always(function () {
			try {
					var d = b(a);
					c.i(d);

			}
			catch (e_) {
					c.h(e_);

			}		});
		return c.d();
	}

, 
	e: function ($tAntecedentResult, a, b) {
		var $self = this;
		return this.e($tAntecedentResult, a, function (c) { return b(c)		});
	}

, 
	g: function ($tAntecedentResult, $tResult, a, b) {
		var $self = this;
		var d = function (c) { return b(c)};
		return this.c($.ig.Object.prototype.$type, a, d).ae($tResult, function (e) { return e.aa()		});
	}

, 
	h: function (a) {
		var b = new Array(a.length);
		for (var c = 0; c < a.length; c++) {
			b[c] = a[c].f();
		}
		return b;
	}

, 
	i: function (a) {
		var promises_ = a;
		var b = (function (p) {
    //can't use $.when as it rejects the master Deferred as soon as one of the Deferreds is rejected
    //and we need to wait for all to complete
    function whenAll() {
	    var whenDeffered = $.ig.util.deferred();

	    if (arguments.length === 0) {
		    whenDeffered.resolve();
		    return whenDeffered;
	    }
   
	    var count = arguments.length;
	    var resolve = true;
	
	    for (var i = 0; i < arguments.length; i++) {
		    arguments[i].then(
			    function () {
				    resolve = resolve && true;
			    },
			    function () {
				    resolve = resolve && false;
			    }
		    ).always(function () {
			    count--;
			    if (count <= 0) {
				    if (resolve) {
					    whenDeffered.resolve();
				    } else {
					    whenDeffered.reject();
				    }
			    }
		    });
	    }
	
	    return whenDeffered;
    }
	return whenAll.apply($, p);
})(promises_);;
		return b;
	}
,
	$type: new $.ig.Type('TaskFactory', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Tuple$2', 'Object', {
	$t1: null, 
	$t2: null
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
		init: function ($t1, $t2, a, b) {


			this.$t1 = $t1
			this.$t2 = $t2
			this.$type = this.$type.specialize(this.$t1, this.$t2);
			$.ig.Object.prototype.init.call(this);
						this.c(a);
				this.d(b);
		},
	$type: new $.ig.Type('Tuple$2', $.ig.Object.prototype.$type)
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

$.ig.util.defType('JavaScriptSerializer', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
		}
, 
	a: function (a) {
		var text_ = a;
		return JSON.parse(text_);
	}

, 
	b: function (a) {
		var value_ = a;
		return JSON.stringify(value_);
	}
,
	$type: new $.ig.Type('JavaScriptSerializer', $.ig.Object.prototype.$type)
}, true);
































































$.ig.util.defType('XObject', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.b(a);
		}
, 
	_b: null,
	b: function (a) {
		if (arguments.length === 1) {
			this._b = a;
			return a;
		} else {
			return this._b;
		}
	}

, 
	_c: null,
	c: function () {
		return this._c;	}

, 
	toString: function () {
		if (this.b() != null) {
			return $.ig.XmlUtils.prototype.h(this.b());

		} else {
			return "";
		}
	}
,
	$type: new $.ig.Type('XObject', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XAttribute', 'XObject', {

		init: function (a) {


			$.ig.XObject.prototype.init.call(this, a);
		}
, 
	h: function (a) {
		this.b(this.b().cloneNode(true));
		a.setAttributeNode(this.b());
	}

, 
	c: function () {
			return $.ig.XmlNodeType.prototype.attribute;
	}

, 
	g: function () {
			return $.ig.XmlUtils.prototype.p(this.b());
	}
,
	$type: new $.ig.Type('XAttribute', $.ig.XObject.prototype.$type)
}, true);

$.ig.util.defType('XNode', 'XObject', {

		init: function (a) {


			$.ig.XObject.prototype.init.call(this, a);
		},
	$type: new $.ig.Type('XNode', $.ig.XObject.prototype.$type)
}, true);

$.ig.util.defType('XContainer', 'XNode', {

		init: function (a) {


			$.ig.XNode.prototype.init.call(this, a);
		}
, 
	g: function (a) {
		var b = null;
		for (var c = 0; c < this.b().childNodes.length; c++) {
			var d = this.b().childNodes.item(c);
			if (d.nodeType == $.ig.XmlNodeType.prototype.element && $.ig.XmlUtils.prototype.n(d) == a.c() && d.namespaceURI == a.d()) {
				b = d;
			}
		}
		if (b == null) {
			return null;

		} else {
			return new $.ig.XElement(0, b);
		}
	}

, 
	h: function () {
		return this.j(null);
	}

, 
	i: function (a) {
		return this.j(a);
	}

, 
	j: function (a) {
		var b = new $.ig.List$1($.ig.XElement.prototype.$type, 0);
		for (var c = 0; c < this.b().childNodes.length; c++) {
			var d = this.b().childNodes.item(c);
			if (d.nodeType == $.ig.XmlNodeType.prototype.element) {
				var e = false;
				if (a != null) {
					if ($.ig.XmlUtils.prototype.n(d) == a.c() && d.namespaceURI == a.d()) {
						e = true;
					}

				} else {
					e = true;
				}
				if (e) {
					b.add(new $.ig.XElement(0, d));
				}
			}
		}
		return b;
	}

, 
	k: function (a) {
		var b = this.b();
		var c;
		if ($.ig.util.cast($.ig.XDocument.prototype.$type, this) !== null) {
			c = this.b();

		} else {
			c = this.b().ownerDocument;
		}
		if ($.ig.util.cast($.ig.XAttribute.prototype.$type, a) !== null) {
			(a).h(b);
		} else if ($.ig.util.cast($.ig.XElement.prototype.$type, a) !== null) {
			(a).r(b, c);
		}
	}
,
	$type: new $.ig.Type('XContainer', $.ig.XNode.prototype.$type)
}, true);

$.ig.util.defType('XDocument', 'XContainer', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.XContainer.prototype.init.call(this, a);
		}
, 
		init1: function (initNumber) {


			$.ig.XContainer.prototype.init.call(this, $.ig.XmlUtils.prototype.i());
		}
, 
	c: function () {
			return $.ig.XmlNodeType.prototype.document;
	}

, 
	l: function (a) {
		return new $.ig.XDocument(0, $.ig.XmlUtils.prototype.g(a));
	}
,
	$type: new $.ig.Type('XDocument', $.ig.XContainer.prototype.$type)
}, true);

$.ig.util.defType('XElement', 'XContainer', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.XContainer.prototype.init.call(this, a);
		}
, 
		init1: function (initNumber, a) {


			$.ig.XElement.prototype.init2.call(this, 2, a, null);
		}
, 
		init2: function (initNumber, a, b) {


			$.ig.XContainer.prototype.init.call(this, $.ig.XmlUtils.prototype.j(a.c(), a.d()));
						var c = b == null ? "" : b.toString();
				this.l(c);
		}
, 
	l: function (a) {
		if (arguments.length === 1) {
			$.ig.XmlUtils.prototype.l(this.b(), a);
			return a;
		} else {
			return $.ig.XmlUtils.prototype.k(this.b());
		}
	}

, 
	c: function () {
			return $.ig.XmlNodeType.prototype.element;
	}

, 
	m: function () {
			return $.ig.XName.prototype.i($.ig.XmlUtils.prototype.n(this.b()), this.b().namespaceURI);
	}

, 
	q: function (a) {
		return new $.ig.XAttribute($.ig.XmlUtils.prototype.o(this.b(), a.c(), a.d()));
	}

, 
	r: function (a, b) {
		if (this.b().ownerDocument != b) {
			this.b($.ig.XmlUtils.prototype.m(b, this.b()));
		}
		a.appendChild(this.b());
	}
,
	$type: new $.ig.Type('XElement', $.ig.XContainer.prototype.$type)
}, true);

$.ig.util.defType('XmlUtils', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function () {
		return !!window.DOMParser;
	}

, 
	b: function (a) {
		var text_ = a;
		return (new DOMParser()).parseFromString(text_, 'text/xml');
	}

, 
	c: function (a) {
		var text_ = a;
		return (function (xml) {
    var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
    xmlDoc.async = false;
    xmlDoc.loadXML(xml);
    return xmlDoc;
})(text_);;
	}

, 
	d: function (a) {
		var node_ = a;
		return (new XMLSerializer()).serializeToString(node_);
	}

, 
	e: function (a) {
		var node_ = a;
		return node_.xml;
	}

, 
	f: function () {
		return new ActiveXObject('Microsoft.XMLDOM');
	}

, 
	g: function (a) {
		if ($.ig.XmlUtils.prototype.a()) {
			return $.ig.XmlUtils.prototype.b(a);

		} else {
			return $.ig.XmlUtils.prototype.c(a);
		}
	}

, 
	h: function (a) {
		if ($.ig.XmlUtils.prototype.a()) {
			return $.ig.XmlUtils.prototype.d(a);

		} else {
			return $.ig.XmlUtils.prototype.e(a);
		}
	}

, 
	i: function () {
		var a;
		if ($.ig.XmlUtils.prototype.a()) {
			a = $.ig.XmlUtils.prototype.b("<dummy/>");
			a.removeChild(a.documentElement);

		} else {
			a = $.ig.XmlUtils.prototype.f();
		}
		return a;
	}

, 
	j: function (a, b) {
		var doc_ = $.ig.XmlUtils.prototype.i();
		if ($.ig.XmlUtils.prototype.a()) {
			return doc_.createElementNS(b, a);

		} else {
			var name_ = a;
			var namespaceURI_ = b;
			return doc_.createNode(1/*NODE_ELEMENT*/, name_, namespaceURI_);
		}
	}

, 
	k: function (a) {
		if ($.ig.XmlUtils.prototype.a()) {
			return a.textContent;

		} else {
			var node_ = a;
			return node_.text;
		}
	}

, 
	l: function (a, b) {
		if ($.ig.XmlUtils.prototype.a()) {
			a.textContent = b;

		} else {
			var node_ = a;
			var text_ = b;
			node_.text = text_;
		}
	}

, 
	m: function (a, b) {
		if ($.ig.XmlUtils.prototype.a()) {
			return a.importNode(b, true);

		} else {
			return b;
		}
	}

, 
	n: function (a) {
		if ($.ig.XmlUtils.prototype.a()) {
			return a.localName;

		} else {
			var node_ = a;
			return node_.baseName;
		}
	}

, 
	o: function (a, b, c) {
		if ($.ig.XmlUtils.prototype.a()) {
			return a.getAttributeNodeNS(c, b);

		} else {
			var elem_ = a;
			return elem_.attributes.getQualifiedItem(localName, namespaceName);
		}
	}

, 
	p: function (a) {
		if ($.ig.XmlUtils.prototype.a()) {
			return a.nodeValue;

		} else {
			var attr_ = a;
			return attr_.value;
		}
	}
,
	$type: new $.ig.Type('XmlUtils', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XName', 'Object', {
	a: null, 
	b: null
, 
		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = b;
		}
, 
	c: function () {
			return this.a;
	}

, 
	d: function () {
			return this.b;
	}

, 
	e: function () {
			return $.ig.XNamespace.prototype.d(this.b);
	}

, 
	i: function (a, b) {
		return new $.ig.XName(a, b);
	}
,
	$type: new $.ig.Type('XName', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XNamespace', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	d: function (a) {
		return new $.ig.XNamespace(a);
	}

, 
	b: function () {
			return $.ig.XNamespace.prototype.d("http://www.w3.org/2000/xmlns/");
	}

, 
	c: function () {
			return this.a;
	}
,
	$type: new $.ig.Type('XNamespace', $.ig.Object.prototype.$type)
}, true);
$.ig.TaskStatus.prototype.created = 0;
$.ig.TaskStatus.prototype.ranToCompletion = 5;
$.ig.TaskStatus.prototype.canceled = 6;
$.ig.TaskStatus.prototype.faulted = 7;
$.ig.ListSortDirection.prototype.ascending = 0;
$.ig.ListSortDirection.prototype.descending = 1;
$.ig.NotifyCollectionChangedAction.prototype.add = 0;
$.ig.NotifyCollectionChangedAction.prototype.remove = 1;
$.ig.NotifyCollectionChangedAction.prototype.replace = 2;
$.ig.NotifyCollectionChangedAction.prototype.reset = 4;

$.ig.util.extCopy($.ig.Queryable, [[[$.ig.AbstractEnumerable, $.ig.IEnumerable$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.ICollection, $.ig.IList, $.ig.Array, $.ig.Dictionary, $.ig.XmlNodeList, $.ig.XmlNamedNodeMap], ['asQueryable']]]);
$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.IEnumerable$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.AbstractEnumerable, $.ig.IEnumerable$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.ICollection, $.ig.IList, $.ig.Array, $.ig.Dictionary, $.ig.XmlNodeList, $.ig.XmlNamedNodeMap], ['ofType$1', 'cast$1']]]);




// Declare empty types
$.ig = $.ig || {};
$.ig.util.bulkDefine(["ICoreOlapElement", 
"Cube", 
"Catalog", 
"Dimension", 
"CubeType", 
"ScopeType", 
"DimensionType", 
"LevelType", 
"HierarchyOrigin", 
"AggregatorType", 
"CardinalityType", 
"MemberType", 
"Hierarchy", 
"Level", 
"Measure", 
"MeasureGroup", 
"MeasureGroupDimension", 
"Member", 
"OlapResult", 
"OlapResultAxis", 
"IPosition$2", 
"OlapResultTuple", 
"IPositionItem$2", 
"IHierarchicalPositionItem$2", 
"OlapResultAxisMember", 
"OlapResultCell", 
"HeaderCellsLayoutOrientation", 
"LevelSpanManager", 
"SpanSource", 
"ITableViewHeadersFactory", 
"TableViewHeadersFactory", 
"TableCompactViewHeadersFactory", 
"TableViewHeaderCellSource", 
"TableViewImpl", 
"TableViewSettings", 
"TableViewHeaderCell", 
"TableViewResultCell", 
"ArrayListCollection$1", 
"IOlapDataSource", 
"MeasureList", 
"MeasureListLocation", 
"MetadataTreeItemType", 
"MetadataTreeItem", 
"MetaTreeHelper", 
"HierarchyItemPosition", 
"MeasureGroupMetaItemsCache", 
"DataSourceBaseOptions", 
"CubeMetaItemsCache", 
"SourceInitHelper", 
"AxisDefinitionParser", 
"AxisElement", 
"PivotActionStatus", 
"PivotAction", 
"AxisItemsChangeType", 
"AxisChangedAction", 
"AxisItemsChangedAction", 
"ExpansionStateChangeType", 
"ExpansionStateChangedAction", 
"PivotActionManager", 
"PositionItemInfo$2", 
"PositionResolver$2", 
"LevelSortDirection", 
"LevelSortBehavior", 
"HierarchyFilterView", 
"FilterMember", 
"FilterMemberStateChangedEventArgs", 
"jQueryUtils", 
"TableView", 
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
"JQueryPromise"]);
$.ig.util.defType('LevelSortBehavior', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('LevelSortBehavior', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('MetadataTreeItemType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('MetadataTreeItemType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MeasureListLocation', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('MeasureListLocation', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('HeaderCellsLayoutOrientation', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('HeaderCellsLayoutOrientation', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MemberType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('MemberType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('CardinalityType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('CardinalityType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AggregatorType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('AggregatorType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('HierarchyOrigin', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('HierarchyOrigin', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('DimensionType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('DimensionType', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('CubeType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('CubeType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ICoreOlapElement', 'Object', {

		$type: new $.ig.Type('ICoreOlapElement', null)
}, true);

$.ig.util.defType('Cube', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_catalogName: null,
	catalogName: function (a) {
		if (arguments.length === 1) {
			this._catalogName = a;
			return a;
		} else {
			return this._catalogName;
		}
	}

, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_cubeType: null,
	cubeType: function (a) {
		if (arguments.length === 1) {
			this._cubeType = a;
			return a;
		} else {
			return this._cubeType;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_lastProcessed: null,
	lastProcessed: function (a) {
		if (arguments.length === 1) {
			this._lastProcessed = a;
			return a;
		} else {
			return this._lastProcessed;
		}
	}

, 
	_lastUpdated: null,
	lastUpdated: function (a) {
		if (arguments.length === 1) {
			this._lastUpdated = a;
			return a;
		} else {
			return this._lastUpdated;
		}
	}

, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}

, 
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this.name(a);
			return a;
		} else {
			return this.name();
		}
	}
,
	$type: new $.ig.Type('Cube', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('Catalog', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_uniqueName: null,
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this._uniqueName = a;
			return a;
		} else {
			return this._uniqueName;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}
,
	$type: new $.ig.Type('Catalog', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('Dimension', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_uniqueName: null,
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this._uniqueName = a;
			return a;
		} else {
			return this._uniqueName;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_dimensionType: null,
	dimensionType: function (a) {
		if (arguments.length === 1) {
			this._dimensionType = a;
			return a;
		} else {
			return this._dimensionType;
		}
	}

, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}
,
	$type: new $.ig.Type('Dimension', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('Hierarchy', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_uniqueName: null,
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this._uniqueName = a;
			return a;
		} else {
			return this._uniqueName;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}

, 
	_defaultMember: null,
	defaultMember: function (a) {
		if (arguments.length === 1) {
			this._defaultMember = a;
			return a;
		} else {
			return this._defaultMember;
		}
	}

, 
	_allMember: null,
	allMember: function (a) {
		if (arguments.length === 1) {
			this._allMember = a;
			return a;
		} else {
			return this._allMember;
		}
	}

, 
	_dimensionUniqueName: null,
	dimensionUniqueName: function (a) {
		if (arguments.length === 1) {
			this._dimensionUniqueName = a;
			return a;
		} else {
			return this._dimensionUniqueName;
		}
	}

, 
	_hierarchyOrigin: null,
	hierarchyOrigin: function (a) {
		if (arguments.length === 1) {
			this._hierarchyOrigin = a;
			return a;
		} else {
			return this._hierarchyOrigin;
		}
	}

, 
	_hierarchyDisplayFolder: null,
	hierarchyDisplayFolder: function (a) {
		if (arguments.length === 1) {
			this._hierarchyDisplayFolder = a;
			return a;
		} else {
			return this._hierarchyDisplayFolder;
		}
	}
,
	$type: new $.ig.Type('Hierarchy', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('Level', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_uniqueName: null,
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this._uniqueName = a;
			return a;
		} else {
			return this._uniqueName;
		}
	}

, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}

, 
	_depth: null,
	depth: function (a) {
		if (arguments.length === 1) {
			this._depth = a;
			return a;
		} else {
			return this._depth;
		}
	}

, 
	_hierarchyUniqueName: null,
	hierarchyUniqueName: function (a) {
		if (arguments.length === 1) {
			this._hierarchyUniqueName = a;
			return a;
		} else {
			return this._hierarchyUniqueName;
		}
	}

, 
	_dimensionUniqueName: null,
	dimensionUniqueName: function (a) {
		if (arguments.length === 1) {
			this._dimensionUniqueName = a;
			return a;
		} else {
			return this._dimensionUniqueName;
		}
	}

, 
	_membersCount: null,
	membersCount: function (a) {
		if (arguments.length === 1) {
			this._membersCount = a;
			return a;
		} else {
			return this._membersCount;
		}
	}

, 
	_levelOrigin: null,
	levelOrigin: function (a) {
		if (arguments.length === 1) {
			this._levelOrigin = a;
			return a;
		} else {
			return this._levelOrigin;
		}
	}

, 
	_levelOrderingProperty: null,
	levelOrderingProperty: function (a) {
		if (arguments.length === 1) {
			this._levelOrderingProperty = a;
			return a;
		} else {
			return this._levelOrderingProperty;
		}
	}
,
	$type: new $.ig.Type('Level', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('Measure', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_uniqueName: null,
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this._uniqueName = a;
			return a;
		} else {
			return this._uniqueName;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}

, 
	_measureGroupName: null,
	measureGroupName: function (a) {
		if (arguments.length === 1) {
			this._measureGroupName = a;
			return a;
		} else {
			return this._measureGroupName;
		}
	}

, 
	_aggregatorType: null,
	aggregatorType: function (a) {
		if (arguments.length === 1) {
			this._aggregatorType = a;
			return a;
		} else {
			return this._aggregatorType;
		}
	}

, 
	_defaultFormatString: null,
	defaultFormatString: function (a) {
		if (arguments.length === 1) {
			this._defaultFormatString = a;
			return a;
		} else {
			return this._defaultFormatString;
		}
	}

, 
	_measureDisplayFolder: null,
	measureDisplayFolder: function (a) {
		if (arguments.length === 1) {
			this._measureDisplayFolder = a;
			return a;
		} else {
			return this._measureDisplayFolder;
		}
	}
,
	$type: new $.ig.Type('Measure', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('MeasureGroup', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}

, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_cubeName: null,
	cubeName: function (a) {
		if (arguments.length === 1) {
			this._cubeName = a;
			return a;
		} else {
			return this._cubeName;
		}
	}

, 
	_catalogName: null,
	catalogName: function (a) {
		if (arguments.length === 1) {
			this._catalogName = a;
			return a;
		} else {
			return this._catalogName;
		}
	}

, 
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this.name(a);
			return a;
		} else {
			return this.name();
		}
	}
,
	$type: new $.ig.Type('MeasureGroup', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('MeasureGroupDimension', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_cubeName: null,
	cubeName: function (a) {
		if (arguments.length === 1) {
			this._cubeName = a;
			return a;
		} else {
			return this._cubeName;
		}
	}

, 
	_catalogName: null,
	catalogName: function (a) {
		if (arguments.length === 1) {
			this._catalogName = a;
			return a;
		} else {
			return this._catalogName;
		}
	}

, 
	_measureGroupName: null,
	measureGroupName: function (a) {
		if (arguments.length === 1) {
			this._measureGroupName = a;
			return a;
		} else {
			return this._measureGroupName;
		}
	}

, 
	_dimensionUniqueName: null,
	dimensionUniqueName: function (a) {
		if (arguments.length === 1) {
			this._dimensionUniqueName = a;
			return a;
		} else {
			return this._dimensionUniqueName;
		}
	}

, 
	_measureGroupCardinality: null,
	measureGroupCardinality: function (a) {
		if (arguments.length === 1) {
			this._measureGroupCardinality = a;
			return a;
		} else {
			return this._measureGroupCardinality;
		}
	}

, 
	_dimensionCardinality: null,
	dimensionCardinality: function (a) {
		if (arguments.length === 1) {
			this._dimensionCardinality = a;
			return a;
		} else {
			return this._dimensionCardinality;
		}
	}

, 
	_isDimensionVisible: null,
	isDimensionVisible: function (a) {
		if (arguments.length === 1) {
			this._isDimensionVisible = a;
			return a;
		} else {
			return this._isDimensionVisible;
		}
	}

, 
	_isFactDimension: null,
	isFactDimension: function (a) {
		if (arguments.length === 1) {
			this._isFactDimension = a;
			return a;
		} else {
			return this._isFactDimension;
		}
	}

, 
	_dimensionPath: null,
	dimensionPath: function (a) {
		if (arguments.length === 1) {
			this._dimensionPath = a;
			return a;
		} else {
			return this._dimensionPath;
		}
	}

, 
	_dimensionGranularity: null,
	dimensionGranularity: function (a) {
		if (arguments.length === 1) {
			this._dimensionGranularity = a;
			return a;
		} else {
			return this._dimensionGranularity;
		}
	}
,
	$type: new $.ig.Type('MeasureGroupDimension', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Member', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_cubeName: null,
	cubeName: function (a) {
		if (arguments.length === 1) {
			this._cubeName = a;
			return a;
		} else {
			return this._cubeName;
		}
	}

, 
	_catalogName: null,
	catalogName: function (a) {
		if (arguments.length === 1) {
			this._catalogName = a;
			return a;
		} else {
			return this._catalogName;
		}
	}

, 
	_dimensionUniqueName: null,
	dimensionUniqueName: function (a) {
		if (arguments.length === 1) {
			this._dimensionUniqueName = a;
			return a;
		} else {
			return this._dimensionUniqueName;
		}
	}

, 
	_hierarchyUniqueName: null,
	hierarchyUniqueName: function (a) {
		if (arguments.length === 1) {
			this._hierarchyUniqueName = a;
			return a;
		} else {
			return this._hierarchyUniqueName;
		}
	}

, 
	_levelUniqueName: null,
	levelUniqueName: function (a) {
		if (arguments.length === 1) {
			this._levelUniqueName = a;
			return a;
		} else {
			return this._levelUniqueName;
		}
	}

, 
	_levelDepth: null,
	levelDepth: function (a) {
		if (arguments.length === 1) {
			this._levelDepth = a;
			return a;
		} else {
			return this._levelDepth;
		}
	}

, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_uniqueName: null,
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this._uniqueName = a;
			return a;
		} else {
			return this._uniqueName;
		}
	}

, 
	_memberType: null,
	memberType: function (a) {
		if (arguments.length === 1) {
			this._memberType = a;
			return a;
		} else {
			return this._memberType;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_childrenCardinality: null,
	childrenCardinality: function (a) {
		if (arguments.length === 1) {
			this._childrenCardinality = a;
			return a;
		} else {
			return this._childrenCardinality;
		}
	}

, 
	_parentLevel: null,
	parentLevel: function (a) {
		if (arguments.length === 1) {
			this._parentLevel = a;
			return a;
		} else {
			return this._parentLevel;
		}
	}

, 
	_parentUniqueName: null,
	parentUniqueName: function (a) {
		if (arguments.length === 1) {
			this._parentUniqueName = a;
			return a;
		} else {
			return this._parentUniqueName;
		}
	}

, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}

, 
	_scope: null,
	scope: function (a) {
		if (arguments.length === 1) {
			this._scope = a;
			return a;
		} else {
			return this._scope;
		}
	}
,
	$type: new $.ig.Type('Member', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('OlapResult', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_isEmpty: null,
	isEmpty: function (a) {
		if (arguments.length === 1) {
			this._isEmpty = a;
			return a;
		} else {
			return this._isEmpty;
		}
	}

, 
	_axes: null,
	axes: function (a) {
		if (arguments.length === 1) {
			this._axes = a;
			return a;
		} else {
			return this._axes;
		}
	}

, 
	_cells: null,
	cells: function (a) {
		if (arguments.length === 1) {
			this._cells = a;
			return a;
		} else {
			return this._cells;
		}
	}
,
	$type: new $.ig.Type('OlapResult', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('OlapResultAxis', 'Object', {

		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.tuples(a.toList$1($.ig.OlapResultTuple.prototype.$type));
				this.tupleSize(b);
				this.positionResolver(new $.ig.PositionResolver$2(String, $.ig.Object.prototype.$type, a, b));
		}
, 
	_positionResolver: null,
	positionResolver: function (a) {
		if (arguments.length === 1) {
			this._positionResolver = a;
			return a;
		} else {
			return this._positionResolver;
		}
	}

, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_tupleSize: null,
	tupleSize: function (a) {
		if (arguments.length === 1) {
			this._tupleSize = a;
			return a;
		} else {
			return this._tupleSize;
		}
	}

, 
	_tuples: null,
	tuples: function (a) {
		if (arguments.length === 1) {
			this._tuples = a;
			return a;
		} else {
			return this._tuples;
		}
	}
,
	$type: new $.ig.Type('OlapResultAxis', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IPosition$2', 'Object', {

		$type: new $.ig.Type('IPosition$2', null)
}, true);

$.ig.util.defType('OlapResultTuple', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.members(new $.ig.ReadOnlyCollection$1($.ig.OlapResultAxisMember.prototype.$type, 1, a));
		}
, 
	_members: null,
	members: function (a) {
		if (arguments.length === 1) {
			this._members = a;
			return a;
		} else {
			return this._members;
		}
	}

, 
	getItems: function () {
		return this.members();
	}

, 
	itemsCount: function () {
			return this.members().count();
	}

, 
	indexOf: function (a) {
		return this.members().indexOf(a);
	}

, 
	item: function (b) {
			return this.members().item(b);
	}

, 
	isEmpty: function () {
			return false;
	}
,
	$type: new $.ig.Type('OlapResultTuple', $.ig.Object.prototype.$type, [$.ig.IPosition$2.prototype.$type.specialize(String, $.ig.Object.prototype.$type)])
}, true);

$.ig.util.defType('IPositionItem$2', 'Object', {

		$type: new $.ig.Type('IPositionItem$2', null)
}, true);

$.ig.util.defType('IHierarchicalPositionItem$2', 'Object', {

		$type: new $.ig.Type('IHierarchicalPositionItem$2', null, [$.ig.IPositionItem$2.prototype.$type.specialize(0, 1)])
}, true);

$.ig.util.defType('OlapResultAxisMember', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.properties(new $.ig.Dictionary$2(String, String, 0));
		}
, 
	_uniqueName: null,
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this._uniqueName = a;
			return a;
		} else {
			return this._uniqueName;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_levelUniqueName: null,
	levelUniqueName: function (a) {
		if (arguments.length === 1) {
			this._levelUniqueName = a;
			return a;
		} else {
			return this._levelUniqueName;
		}
	}

, 
	_hierarchyUniqueName: null,
	hierarchyUniqueName: function (a) {
		if (arguments.length === 1) {
			this._hierarchyUniqueName = a;
			return a;
		} else {
			return this._hierarchyUniqueName;
		}
	}

, 
	_levelNumber: null,
	levelNumber: function (a) {
		if (arguments.length === 1) {
			this._levelNumber = a;
			return a;
		} else {
			return this._levelNumber;
		}
	}

, 
	_displayInfo: null,
	displayInfo: function (a) {
		if (arguments.length === 1) {
			this._displayInfo = a;
			return a;
		} else {
			return this._displayInfo;
		}
	}

, 
	childCount: function () {
			return ((this.displayInfo() & ~65536) & ~131072);
	}

, 
	drilledDown: function () {
			return (this.displayInfo() & 65536) == 65536;
	}

, 
	parentSameAsPrev: function () {
			return (this.displayInfo() & 131072) == 131072;
	}

, 
	_properties: null,
	properties: function (a) {
		if (arguments.length === 1) {
			this._properties = a;
			return a;
		} else {
			return this._properties;
		}
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
	key: function () {
			return this.uniqueName();
	}

, 
	sortKey: function () {
			var b = parseFloat(this.caption());
			if (!isNaN(b)) {
				return b;
			}
			return this.caption();
	}

, 
	hierarchyKey: function () {
			return this.hierarchyUniqueName();
	}

, 
	parentKey: function () {
			var $self = this;
			var b;
			(function () { var $ret = $self.properties().tryGetValue("PARENT_UNIQUE_NAME", b); b = $ret.value; return $ret.ret; }());
			return b;
	}

, 
	depth: function () {
			return this.levelNumber();
	}

, 
	isExpandable: function () {
			return this.childCount() > 0;
	}
,
	$type: new $.ig.Type('OlapResultAxisMember', $.ig.Object.prototype.$type, [$.ig.IHierarchicalPositionItem$2.prototype.$type.specialize(String, $.ig.Object.prototype.$type)])
}, true);

$.ig.util.defType('OlapResultCell', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.properties(new $.ig.Dictionary$2(String, String, 0));
		}
, 
	_cellOrdinal: null,
	cellOrdinal: function (a) {
		if (arguments.length === 1) {
			this._cellOrdinal = a;
			return a;
		} else {
			return this._cellOrdinal;
		}
	}

, 
	_properties: null,
	properties: function (a) {
		if (arguments.length === 1) {
			this._properties = a;
			return a;
		} else {
			return this._properties;
		}
	}
,
	$type: new $.ig.Type('OlapResultCell', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LevelSpanManager', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.c(a);
				this.a = new Array(a);
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
	f: function (a, b) {
		var $self = this;
		var c = this.a[a];
		if (c == null) {
			c = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.SpanSource.prototype.$type, 0);
			this.a[a] = c;
		}
		var d;
		if (!(function () { var $ret = c.tryGetValue(b, d); d = $ret.value; return $ret.ret; }())) {
			d = new $.ig.SpanSource();
			if (b > 0) {
				var e;
				if ((function () { var $ret = c.tryGetValue(b - 1, e); e = $ret.value; return $ret.ret; }())) {
					d.d(e);
					e.j();
				}
			}
			c.add(b, d);
		}
		return d;
	}
,
	$type: new $.ig.Type('LevelSpanManager', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SpanSource', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = 1;
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
	a: null
, 
	e: function (a) {
		if (arguments.length === 1) {
			if (this.a != a) {
				var b = a - this.a;
				if (this.d() != null) {
					this.d().e(this.d().e() + b);
				}
				this.a = a;
			}
			return a;
		} else {
			return this.a;
		}
	}
, 
	b: null
, 
	j: function () {
		if (!this.b) {
			this.b = true;
			this.e(this.e() + 1);
		}
	}
,
	$type: new $.ig.Type('SpanSource', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ITableViewHeadersFactory', 'Object', {

		$type: new $.ig.Type('ITableViewHeadersFactory', null)
}, true);

$.ig.util.defType('TableViewHeadersFactory', 'Object', {

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
		init: function (a, b, c, d) {


			$.ig.Object.prototype.init.call(this);
						this.e(a);
				this.f(b);
				this.g(c);
				this.h(d);
		}
, 
	createHeaderCells: function () {
		var $self = this;
		if (this.e().positionResolver().hasUnregisterdPositions()) {
			this.e().positionResolver().completeRegisterPositions();
		}
		var a = this.e().positionResolver().rootPositionInfo();
		var b = new $.ig.List$1($.ig.IList$1.prototype.$type.specialize($.ig.TableViewHeaderCellSource.prototype.$type), 0);
		for (var c = 0; c < a.positionSize(); c++) {
			b.add(new $.ig.List$1($.ig.TableViewHeaderCellSource.prototype.$type, 0));
		}
		$.ig.TableViewHeadersFactory.prototype.q(a, a.childTopMostPositionItemDepth(), b, this.g(), this.h());
		var d = new $.ig.ArrayListCollection$1($.ig.TableViewHeaderCell.prototype.$type);
		var e = 0;
		for (var f = 0; f < a.positionSize(); f++) {
			var g = b.item(f);
			var h = 0;
			var i = 0;
			var k = g.getEnumerator();
			while (k.moveNext()) {
				var j = k.current();
				var l;
				var m;
				var n;
				var o;
				if (this.f() == $.ig.HeaderCellsLayoutOrientation.prototype.horizontal) {
					l = h;
					m = j.p().e();
					n = j.r().positionItemDepth() + e;
					o = j.o().e();

				} else {
					n = h;
					o = j.p().e();
					l = j.r().positionItemDepth() + e;
					m = j.o().e();
				}
				var p = this.e().tuples().__inner[j.r().positionIndex()];
				var q = p.item(j.r().positionItemIndex());
				var r = (function () { var $ret = new $.ig.TableViewHeaderCell();
$ret.axisName($self.e().name());
$ret.levelNumber(j.r().positionItemDepth());
$ret.caption(q.caption());
$ret.columnIndex(l);
$ret.columnSpan(m);
$ret.isExpanded(j.u());
$ret.isExpandable(j.v());
$ret.tupleIndex(j.s());
$ret.memberIndex(j.r().positionItemIndex());
$ret.rowIndex(n);
$ret.rowSpan(o); return $ret;}());
				if (!j.l()) {
					h = h + j.p().e();
				}
				i = Math.max(i, j.r().positionItemDepth());
				d.add(r);
			}
			e += i + 1;
		}
		return d;
	}

, 
	q: function (a, b, c, d, e) {
		var $self = this;
		var f = new $.ig.LevelSpanManager(a.positionSize());
		var i = a.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (g) { return g.positionItemDepth() == b}).getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			var j;
			var k;
			(function () { var $ret = $.ig.TableViewHeadersFactory.prototype.s(a, h, c, f, d, e, j, k); j = $ret.headerCellSource; k = $ret.totalSpan; return $ret.ret; }());
		}
	}

, 
	r: function (a, b, c, d, e, f) {
		var $self = this;
		var h = a.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (g) { return g.positionItemDepth() == a.childTopMostPositionItemDepth()}).toList$1($.ig.PositionItemInfo$2.prototype.$type);
		if (h.count() > 0) {
			var j = h.getEnumerator();
			while (j.moveNext()) {
				var i = j.current();
				var k;
				var l;
				(function () { var $ret = $.ig.TableViewHeadersFactory.prototype.s(a, i, b, c, d, f, k, l); k = $ret.headerCellSource; l = $ret.totalSpan; return $ret.ret; }());
				e.p().e(e.p().e() + l);
				if (k.l()) {
					e.p().e(e.p().e() + 1);
				}
			}
			e.p().e(e.p().e() - 1);

		} else {
			f.add(a.positionIndex());
		}
		e.s(a.positionIndex());
	}

, 
	s: function (a, b, c, d, e, f, g, h) {
		var $self = this;
		var i = c.item(b.positionItemIndex());
		var j = d.f(b.positionItemIndex(), b.positionItemDepth());
		var k = (function () { var $ret = new $.ig.TableViewHeaderCellSource();
$ret.o(j);
$ret.r(b);
$ret.v(b.isExpandable()); return $ret;}());
		g = k;
		if (e) {
			i.add(k);
			$.ig.TableViewHeadersFactory.prototype.r(b, c, d, true, k, f);
		}
		var m = a.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (l) { return l.parentKey() == b.key()}).toList$1($.ig.PositionItemInfo$2.prototype.$type);
		if (m.count() > 0) {
			var n = (function () { var $ret = new $.ig.TableViewHeaderCellSource();
$ret.l(true);
$ret.r(b);
$ret.v(b.isExpandable()); return $ret;}());
			i.add(n);
			var p = m.getEnumerator();
			while (p.moveNext()) {
				var o = p.current();
				var q;
				var r;
				(function () { var $ret = $.ig.TableViewHeadersFactory.prototype.s(a, o, c, d, e, f, q, r); q = $ret.headerCellSource; r = $ret.totalSpan; return $ret.ret; }());
				n.p().e(n.p().e() + r);
				if (q.l()) {
					n.p().e(n.p().e() + 1);
				}
			}
			n.p().e(n.p().e() - 1);
			k.u(true);
			k.v(false);
			n.u(true);
			k.q(n);
			if (!e) {
				i.add(k);
				$.ig.TableViewHeadersFactory.prototype.r(b, c, d, false, k, f);
			}
			n.s(k.s());
			g = n;
			h = k.p().e() + n.p().e() - 1;

		} else {
			if (!e) {
				i.add(k);
				$.ig.TableViewHeadersFactory.prototype.r(b, c, d, false, k, f);
			}
			h = k.p().e();
		}
		return {
			headerCellSource: g,
			totalSpan: h
		};
	}
,
	$type: new $.ig.Type('TableViewHeadersFactory', $.ig.Object.prototype.$type, [$.ig.ITableViewHeadersFactory.prototype.$type])
}, true);

$.ig.util.defType('TableCompactViewHeadersFactory', 'Object', {

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
		init: function (a, b, c, d) {


			$.ig.Object.prototype.init.call(this);
						this.e(a);
				this.f(b);
				this.g(c);
				this.h(d);
		}
, 
	createHeaderCells: function () {
		var $self = this;
		if (this.e().positionResolver().hasUnregisterdPositions()) {
			this.e().positionResolver().completeRegisterPositions();
		}
		var a = this.e().positionResolver().rootPositionInfo();
		var b = new $.ig.List$1($.ig.IList$1.prototype.$type.specialize($.ig.TableViewHeaderCellSource.prototype.$type), 0);
		for (var c = 0; c < a.positionSize(); c++) {
			b.add(new $.ig.List$1($.ig.TableViewHeaderCellSource.prototype.$type, 0));
		}
		$.ig.TableCompactViewHeadersFactory.prototype.q(a, a.childTopMostPositionItemDepth(), b, this.g(), this.h());
		var d = new $.ig.ArrayListCollection$1($.ig.TableViewHeaderCell.prototype.$type);
		var e = 0;
		for (var f = 0; f < a.positionSize(); f++) {
			var g = b.item(f);
			var h = 0;
			var i = 0;
			var k = g.getEnumerator();
			while (k.moveNext()) {
				var j = k.current();
				var l;
				var m;
				var n;
				var o;
				if (this.f() == $.ig.HeaderCellsLayoutOrientation.prototype.horizontal) {
					l = h;
					m = j.p().e();
					n = e;
					o = 1;

				} else {
					n = h;
					o = j.p().e();
					l = e;
					m = 1;
				}
				var p = this.e().tuples().__inner[j.r().positionIndex()];
				var q = p.item(j.r().positionItemIndex());
				var r = (function () { var $ret = new $.ig.TableViewHeaderCell();
$ret.axisName($self.e().name());
$ret.levelNumber(j.r().positionItemDepth());
$ret.caption(q.caption());
$ret.columnIndex(l);
$ret.columnSpan(m);
$ret.isExpanded(j.u());
$ret.isExpandable(j.v());
$ret.tupleIndex(j.s());
$ret.memberIndex(j.r().positionItemIndex());
$ret.rowIndex(n);
$ret.rowSpan(o); return $ret;}());
				if (!j.l()) {
					h = h + j.p().e();
				}
				d.add(r);
			}
			e += i + 1;
		}
		return d;
	}

, 
	q: function (a, b, c, d, e) {
		var $self = this;
		var f = new $.ig.LevelSpanManager(a.positionSize());
		var i = a.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (g) { return g.positionItemDepth() == b}).getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			var j;
			var k;
			(function () { var $ret = $.ig.TableCompactViewHeadersFactory.prototype.s(a, h, c, f, d, e, j, k); j = $ret.headerCellSource; k = $ret.totalSpan; return $ret.ret; }());
		}
	}

, 
	r: function (a, b, c, d, e, f) {
		var $self = this;
		var h = a.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (g) { return g.positionItemDepth() == a.childTopMostPositionItemDepth()}).toList$1($.ig.PositionItemInfo$2.prototype.$type);
		if (h.count() > 0) {
			var j = h.getEnumerator();
			while (j.moveNext()) {
				var i = j.current();
				var k;
				var l;
				(function () { var $ret = $.ig.TableCompactViewHeadersFactory.prototype.s(a, i, b, c, d, f, k, l); k = $ret.headerCellSource; l = $ret.totalSpan; return $ret.ret; }());
				e.p().e(e.p().e() + l);
				if (k.q() != null) {
					e.p().e(e.p().e() + 1);
				}
			}
			e.p().e(e.p().e() - 1);

		} else {
			f.add(a.positionIndex());
		}
		e.s(a.positionIndex());
	}

, 
	s: function (a, b, c, d, e, f, g, h) {
		var $self = this;
		var i = c.item(b.positionItemIndex());
		var j = d.f(b.positionItemIndex(), b.positionItemDepth());
		var k = (function () { var $ret = new $.ig.TableViewHeaderCellSource();
$ret.o(j);
$ret.r(b);
$ret.v(b.isExpandable()); return $ret;}());
		g = k;
		if (e) {
			i.add(k);
			$.ig.TableCompactViewHeadersFactory.prototype.r(b, c, d, true, k, f);
		}
		var m = a.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (l) { return l.parentKey() == b.key()}).toList$1($.ig.PositionItemInfo$2.prototype.$type);
		if (m.count() > 0) {
			var n = (function () { var $ret = new $.ig.TableViewHeaderCellSource();
$ret.l(true);
$ret.r(b);
$ret.v(b.isExpandable()); return $ret;}());
			var p = m.getEnumerator();
			while (p.moveNext()) {
				var o = p.current();
				var q;
				var r;
				(function () { var $ret = $.ig.TableCompactViewHeadersFactory.prototype.s(a, o, c, d, e, f, q, r); q = $ret.headerCellSource; r = $ret.totalSpan; return $ret.ret; }());
				n.p().e(n.p().e() + r);
				if (q.q() != null) {
					n.p().e(n.p().e() + 1);
				}
			}
			n.p().e(n.p().e() - 1);
			k.u(true);
			k.v(true);
			k.q(n);
			if (!e) {
				i.add(k);
				$.ig.TableCompactViewHeadersFactory.prototype.r(b, c, d, false, k, f);
			}
			n.s(k.s());
			h = k.p().e() + n.p().e() - 1;

		} else {
			if (!e) {
				i.add(k);
				$.ig.TableCompactViewHeadersFactory.prototype.r(b, c, d, false, k, f);
			}
			h = k.p().e();
		}
		return {
			headerCellSource: g,
			totalSpan: h
		};
	}
,
	$type: new $.ig.Type('TableCompactViewHeadersFactory', $.ig.Object.prototype.$type, [$.ig.ITableViewHeadersFactory.prototype.$type])
}, true);

$.ig.util.defType('TableViewHeaderCellSource', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.p(new $.ig.SpanSource());
				this.o(new $.ig.SpanSource());
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
	$type: new $.ig.Type('TableViewHeaderCellSource', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TableViewImpl', 'Object', {

		init: function (a, b, c, d) {


			$.ig.Object.prototype.init.call(this);
						if (a == null) {
					throw new $.ig.ArgumentNullException("result");

				} else {
					this.result(a);
				}
				if (d == null) {
					this.viewSettings(new $.ig.TableViewSettings());

				} else {
					this.viewSettings(d);
				}
				this.hasColumns(b);
				this.hasRows(c);
		}
, 
	_viewSettings: null,
	viewSettings: function (a) {
		if (arguments.length === 1) {
			this._viewSettings = a;
			return a;
		} else {
			return this._viewSettings;
		}
	}

, 
	_result: null,
	result: function (a) {
		if (arguments.length === 1) {
			this._result = a;
			return a;
		} else {
			return this._result;
		}
	}

, 
	_hasRows: null,
	hasRows: function (a) {
		if (arguments.length === 1) {
			this._hasRows = a;
			return a;
		} else {
			return this._hasRows;
		}
	}

, 
	_hasColumns: null,
	hasColumns: function (a) {
		if (arguments.length === 1) {
			this._hasColumns = a;
			return a;
		} else {
			return this._hasColumns;
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
	a: null, 
	b: null, 
	c: null
, 
	rowHeaders: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			return a;
		} else {
			if (!this.m()) {
				this.initialize();
			}
			return this.a;
		}
	}

, 
	columnHeaders: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			return a;
		} else {
			if (!this.m()) {
				this.initialize();
			}
			return this.b;
		}
	}

, 
	resultCells: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			if (!this.m()) {
				this.initialize();
			}
			return this.c;
		}
	}

, 
	initialize: function () {
		var $self = this;
		this.k(null);
		this.l(null);
		if (this.result().isEmpty()) {
			this.m(true);
			return;
		}
		var a = 0;
		var b = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Number.prototype.$type, 0);
		var c = 1;
		if (this.hasColumns()) {
			var d = this.result().axes().item(a);
			a++;
			var e = this.z(d);
			for (var f = 0; f < e.count(); f++) {
				var g = e.item(f);
				b.add(g, f);
			}
			c = d.tuples().count();
		}
		var h = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Number.prototype.$type, 0);
		if (this.hasRows()) {
			var i = this.result().axes().item(a);
			var j = this.aa(i);
			for (var k = 0; k < j.count(); k++) {
				var l = j.item(k);
				h.add(l, k);
			}
		}
		var m = new $.ig.ArrayListCollection$1($.ig.TableViewResultCell.prototype.$type);
		for (var n = 0; n < this.result().cells().count(); n++) {
			var o = this.result().cells().item(n);
			var p;
			(function () { var $ret = o.properties().tryGetValue("Value", p); p = $ret.value; return $ret.ret; }());
			var q;
			(function () { var $ret = o.properties().tryGetValue("FmtValue", q); q = $ret.value; return $ret.ret; }());
			var r = o.cellOrdinal();
			if (this.hasColumns()) {
				var s = r % c;
				var t = b.item(s);
				if (s != t) {
					var u = $.ig.intDivide(r, c);
					r = u * c + t;
				}
			}
			if (this.hasRows()) {
				var v = $.ig.intDivide(r, c);
				var w = h.item(v);
				if (v != w) {
					var x = r % c;
					r = w * c + x;
				}
			}
			m.add((function () { var $ret = new $.ig.TableViewResultCell();
			$ret.value(p);
			$ret.formatedValue(q);
			$ret.cellOrdinal(r);
			$ret.resultCellIndex(n); return $ret;}()));
			this.resultCells(m);
		}
		this.m(true);
	}

, 
	z: function (a) {
		var b = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		if (this.viewSettings().n()) {
			this.l(new $.ig.TableCompactViewHeadersFactory(a, $.ig.HeaderCellsLayoutOrientation.prototype.horizontal, this.viewSettings().h(), b));

		} else {
			this.l(new $.ig.TableViewHeadersFactory(a, $.ig.HeaderCellsLayoutOrientation.prototype.horizontal, this.viewSettings().h(), b));
		}
		this.columnHeaders(this.l().createHeaderCells());
		return b;
	}

, 
	aa: function (a) {
		var b = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		if (this.viewSettings().m()) {
			this.k(new $.ig.TableCompactViewHeadersFactory(a, $.ig.HeaderCellsLayoutOrientation.prototype.vertical, this.viewSettings().i(), b));

		} else {
			this.k(new $.ig.TableViewHeadersFactory(a, $.ig.HeaderCellsLayoutOrientation.prototype.vertical, this.viewSettings().i(), b));
		}
		this.rowHeaders(this.k().createHeaderCells());
		return b;
	}
,
	$type: new $.ig.Type('TableViewImpl', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TableViewSettings', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.j(new $.ig.List$1($.ig.LevelSortDirection.prototype.$type, 0));
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
	$type: new $.ig.Type('TableViewSettings', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TableViewHeaderCell', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.columnSpan(1);
				this.rowSpan(1);
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
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_isExpanded: null,
	isExpanded: function (a) {
		if (arguments.length === 1) {
			this._isExpanded = a;
			return a;
		} else {
			return this._isExpanded;
		}
	}

, 
	_isExpandable: null,
	isExpandable: function (a) {
		if (arguments.length === 1) {
			this._isExpandable = a;
			return a;
		} else {
			return this._isExpandable;
		}
	}

, 
	_rowIndex: null,
	rowIndex: function (a) {
		if (arguments.length === 1) {
			this._rowIndex = a;
			return a;
		} else {
			return this._rowIndex;
		}
	}

, 
	_rowSpan: null,
	rowSpan: function (a) {
		if (arguments.length === 1) {
			this._rowSpan = a;
			return a;
		} else {
			return this._rowSpan;
		}
	}

, 
	_columnIndex: null,
	columnIndex: function (a) {
		if (arguments.length === 1) {
			this._columnIndex = a;
			return a;
		} else {
			return this._columnIndex;
		}
	}

, 
	_columnSpan: null,
	columnSpan: function (a) {
		if (arguments.length === 1) {
			this._columnSpan = a;
			return a;
		} else {
			return this._columnSpan;
		}
	}

, 
	_axisName: null,
	axisName: function (a) {
		if (arguments.length === 1) {
			this._axisName = a;
			return a;
		} else {
			return this._axisName;
		}
	}

, 
	_tupleIndex: null,
	tupleIndex: function (a) {
		if (arguments.length === 1) {
			this._tupleIndex = a;
			return a;
		} else {
			return this._tupleIndex;
		}
	}

, 
	_memberIndex: null,
	memberIndex: function (a) {
		if (arguments.length === 1) {
			this._memberIndex = a;
			return a;
		} else {
			return this._memberIndex;
		}
	}

, 
	_levelNumber: null,
	levelNumber: function (a) {
		if (arguments.length === 1) {
			this._levelNumber = a;
			return a;
		} else {
			return this._levelNumber;
		}
	}

, 
	toString: function () {
		return this.caption();
	}
,
	$type: new $.ig.Type('TableViewHeaderCell', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TableViewResultCell', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	_formatedValue: null,
	formatedValue: function (a) {
		if (arguments.length === 1) {
			this._formatedValue = a;
			return a;
		} else {
			return this._formatedValue;
		}
	}

, 
	_cellOrdinal: null,
	cellOrdinal: function (a) {
		if (arguments.length === 1) {
			this._cellOrdinal = a;
			return a;
		} else {
			return this._cellOrdinal;
		}
	}

, 
	_resultCellIndex: null,
	resultCellIndex: function (a) {
		if (arguments.length === 1) {
			this._resultCellIndex = a;
			return a;
		} else {
			return this._resultCellIndex;
		}
	}
,
	$type: new $.ig.Type('TableViewResultCell', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ArrayListCollection$1', 'Object', {
	$t: null
, 
		init: function ($t) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.inner(new $.ig.Array());
		}
, 
	_inner: null,
	inner: function (a) {
		if (arguments.length === 1) {
			this._inner = a;
			return a;
		} else {
			return this._inner;
		}
	}
, 
	collectionChanged: null
, 
	indexOf: function (a) {
		return this.inner().indexOf(a);
	}

, 
	insert: function (a, b) {
		this.inner().insert(a, b);
		this.e(a, b);
	}

, 
	removeAt: function (a) {
		var b = this.inner()[a];
		this.inner().removeAt(a);
		this.f(a, b);
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			this.inner()[b] = a;
			return a;
		} else {
			return this.inner()[b];
		}
	}

, 
	add: function (a) {
		this.inner().add(a);
		this.e(this.inner().length - 1, a);
	}

, 
	clear: function () {
		this.inner().clear();
		this.g();
	}

, 
	contains: function (a) {
		return this.inner().contains(a);
	}

, 
	copyTo: function (a, b) {
		throw new $.ig.NotImplementedException();
	}

, 
	count: function () {
			return this.inner().length;
	}

, 
	isReadOnly: function () {
			return false;
	}

, 
	remove: function (a) {
		var b = this.inner().indexOf(a);
		if (b >= 0) {
			this.inner().removeAt(b);
			this.f(b, a);
			return true;
		}
		return false;
	}

, 
	d: function () {
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
							this.$a = 0;
							this.$state = 5;
							break;
						case 2:
							this.$current =  this.$this.inner()[this.$a];
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
							if (this.$a < this.$this.inner().length) {
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
		return new $.ig.GenericEnumerable$1(this.$t, $iter);
	}

, 
	getEnumerator: function () {
		return this.d().getEnumerator();
	}

, 
	e: function (a, b) {
		if (this.collectionChanged != null) {
			var c = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, b, a);
			this.collectionChanged(this, c);
		}
	}

, 
	f: function (a, b) {
		if (this.collectionChanged != null) {
			var c = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, b, a);
			this.collectionChanged(this, c);
		}
	}

, 
	g: function () {
		if (this.collectionChanged != null) {
			var a = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.reset, null, -1);
			this.collectionChanged(this, a);
		}
	}
,
	$type: new $.ig.Type('ArrayListCollection$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.INotifyCollectionChanged.prototype.$type])
}, true);

$.ig.util.defType('IOlapDataSource', 'Object', {

		$type: new $.ig.Type('IOlapDataSource', null)
}, true);

$.ig.util.defType('MeasureList', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	uniqueName: function (a) {
		if (arguments.length === 1) {
			this.name(a);
			return a;
		} else {
			return this.name();
		}
	}

, 
	_measures: null,
	measures: function (a) {
		if (arguments.length === 1) {
			this._measures = a;
			return a;
		} else {
			return this._measures;
		}
	}
,
	$type: new $.ig.Type('MeasureList', $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);

$.ig.util.defType('MetadataTreeItem', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_item: null,
	item: function (a) {
		if (arguments.length === 1) {
			this._item = a;
			return a;
		} else {
			return this._item;
		}
	}

, 
	_type: null,
	type: function (a) {
		if (arguments.length === 1) {
			this._type = a;
			return a;
		} else {
			return this._type;
		}
	}

, 
	_caption: null,
	caption: function (a) {
		if (arguments.length === 1) {
			this._caption = a;
			return a;
		} else {
			return this._caption;
		}
	}

, 
	_children: null,
	children: function (a) {
		if (arguments.length === 1) {
			this._children = a;
			return a;
		} else {
			return this._children;
		}
	}

, 
	e: function (a) {
		if (this.children() == null) {
			this.children(new Array(1));
			this.children()[0] = a;
			return;
		}
		var b = new Array(this.children().length + 1);
		$.ig.Array.prototype.copy(this.children(), 0, b, 0, this.children().length);
		b[this.children().length] = a;
		this.children(b);
	}
,
	$type: new $.ig.Type('MetadataTreeItem', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MetaTreeHelper', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	getDimensionMetaItems: function (a, b, c, d, e) {
		var $self = this;
		var f = new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0);
		var g = new $.ig.HierarchyItemPosition();
		g.c(0);
		g.d(0);
		var h = new $.ig.List$1($.ig.Hierarchy.prototype.$type, 0);
		var j = c.getEnumerator();
		while (j.moveNext()) {
			var i = j.current();
			h.add(i);
		}
		var k = new $.ig.List$1($.ig.Level.prototype.$type, 0);
		var m = d.getEnumerator();
		while (m.moveNext()) {
			var l = m.current();
			k.add(l);
		}
		var o = a.getEnumerator();
		while (o.moveNext()) {
			var n = o.current();
			var p = $.ig.MetaTreeHelper.prototype.a(h, k, n, g);
			if (n.dimensionType() != $.ig.DimensionType.prototype.measure) {
				var q = (function () { var $ret = new $.ig.MetadataTreeItem();
$ret.type($.ig.MetadataTreeItemType.prototype.dimension);
$ret.caption(n.caption());
$ret.item(n); return $ret;}());
				$.ig.MetaTreeHelper.prototype.setMetaItemChildren(q, p);
				f.add(q);

			} else {
				var r = $.ig.MetaTreeHelper.prototype.c(b, n, e);
				f.insert(0, r);
			}
		}
		return f;
	}

, 
	setMetaItemChildren: function (a, b) {
		if (b.count() > 0) {
			var c = new Array(b.count());
			for (var d = 0; d < b.count(); d++) {
				c[d] = b.item(d);
			}
			a.children(c);
		}
	}

, 
	a: function (a, b, c, d) {
		var $self = this;
		var e = new $.ig.Dictionary$2(String, $.ig.MetadataTreeItem.prototype.$type, 0);
		var f = new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0);
		var g = a.item(d.c());
		while (g.dimensionUniqueName() != c.uniqueName()) {
			d.c(d.c() + 1);
			g = a.item(d.c());
		}
		while (g.dimensionUniqueName() == c.uniqueName()) {
			var h = null;
			if (!String.isNullOrEmpty(g.hierarchyDisplayFolder())) {
				var i = String.empty();
				var j = $.ig.MetaTreeHelper.prototype.d(g.hierarchyDisplayFolder());
				for (var k = 0; k < j.length; k++) {
					var l = j[k];
					i += l + "\\";
					var m = null;
					if (!(function () { var $ret = e.tryGetValue(i, m); m = $ret.value; return $ret.ret; }())) {
						m = (function () { var $ret = new $.ig.MetadataTreeItem();
						$ret.type($.ig.MetadataTreeItemType.prototype.group);
						$ret.caption(l); return $ret;}());
						e.add(i, m);
						if (h != null) {
							h.e(m);
						}
					}
					h = m;
				}
			}
			var n;
			switch (g.hierarchyOrigin()) {
				case $.ig.HierarchyOrigin.prototype.systemEnabled:
					n = $.ig.MetadataTreeItemType.prototype.systemEnabledHierarchy;
					break;
				case $.ig.HierarchyOrigin.prototype.userDefined:
					n = $.ig.MetadataTreeItemType.prototype.userDefinedHierarchy;
					break;
				default:
					n = $.ig.MetadataTreeItemType.prototype.parentChildHierarchy;
					break;
			}
			var o = $.ig.MetaTreeHelper.prototype.b(b, g, d);
			var p = (function () { var $ret = new $.ig.MetadataTreeItem();
$ret.type(n);
$ret.caption(g.caption());
$ret.item(g); return $ret;}());
			$.ig.MetaTreeHelper.prototype.setMetaItemChildren(p, o);
			if (h != null) {
				h.e(p);

			} else {
				f.add(p);
			}
			if (d.c() + 1 >= a.count()) {
				break;
			}
			d.c(d.c() + 1);
			g = a.item(d.c());
		}
		var q = 0;
		var s = e.values().getEnumerator();
		while (s.moveNext()) {
			var r = s.current();
			f.insert(q, r);
			q++;
		}
		return f;
	}

, 
	b: function (a, b, c) {
		var $self = this;
		var d = new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0);
		var e = a.item(c.d());
		while (e.hierarchyUniqueName() != b.uniqueName()) {
			c.d(c.d() + 1);
			e = a.item(c.d());
		}
		while (e.hierarchyUniqueName() == b.uniqueName()) {
			var f;
			switch (e.depth()) {
				case 0:
				case 1:
					f = $.ig.MetadataTreeItemType.prototype.level1;
					break;
				case 2:
					f = $.ig.MetadataTreeItemType.prototype.level2;
					break;
				case 3:
					f = $.ig.MetadataTreeItemType.prototype.level3;
					break;
				case 4:
					f = $.ig.MetadataTreeItemType.prototype.level4;
					break;
				default:
					f = $.ig.MetadataTreeItemType.prototype.level5;
					break;
			}
			var g = (function () { var $ret = new $.ig.MetadataTreeItem();
$ret.type(f);
$ret.caption(e.caption());
$ret.item(e); return $ret;}());
			d.add(g);
			if (c.d() + 1 >= a.count()) {
				break;
			}
			c.d(c.d() + 1);
			e = a.item(c.d());
		}
		return d;
	}

, 
	c: function (a, b, c) {
		var $self = this;
		var d = new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0);
		var e = new $.ig.Dictionary$2(String, $.ig.Tuple$2.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type)), 0);
		var f = new $.ig.Dictionary$2(String, $.ig.Tuple$2.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type)), 0);
		var g = (function () { var $ret = new $.ig.MetadataTreeItem();
$ret.type($.ig.MetadataTreeItemType.prototype.measure);
$ret.caption(b.caption());
$ret.item(b); return $ret;}());
		var h = 0;
		var i = new $.ig.Tuple$2($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type), g, d);
		var k = a.getEnumerator();
		while (k.moveNext()) {
			var j = k.current();
			var l = null;
			if (c && !String.isNullOrEmpty(j.measureGroupName())) {
				if (!(function () { var $ret = f.tryGetValue(j.measureGroupName(), l); l = $ret.value; return $ret.ret; }())) {
					var m = (function () { var $ret = new $.ig.MetadataTreeItem();
$ret.type($.ig.MetadataTreeItemType.prototype.group);
$ret.caption(j.measureGroupName()); return $ret;}());
					l = new $.ig.Tuple$2($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type), m, new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0));
					f.add(j.measureGroupName(), l);
					i.d().insert(h, m);
					h++;
				}

			} else {
				l = i;
			}
			var n = l;
			if (!String.isNullOrEmpty(j.measureDisplayFolder())) {
				var o = j.measureGroupName() == null ? String.empty() : j.measureGroupName() + "\\";
				var p = $.ig.MetaTreeHelper.prototype.d(j.measureDisplayFolder());
				for (var q = 0; q < p.length; q++) {
					var r = p[q];
					o += r + "\\";
					var s;
					if (!(function () { var $ret = e.tryGetValue(o, s); s = $ret.value; return $ret.ret; }())) {
						var t = (function () { var $ret = new $.ig.MetadataTreeItem();
$ret.type($.ig.MetadataTreeItemType.prototype.group);
$ret.caption(r); return $ret;}());
						s = new $.ig.Tuple$2($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type), t, new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0));
						e.add(o, s);
						if (n == i) {
							n.d().insert(h, t);
							h++;

						} else {
							n.d().add(t);
						}
					}
					n = s;
				}
			}
			var u = (function () { var $ret = new $.ig.MetadataTreeItem();
$ret.type($.ig.MetadataTreeItemType.prototype.measure);
$ret.caption(j.caption());
$ret.item(j); return $ret;}());
			n.d().add(u);
		}
		var w = f.values().getEnumerator();
		while (w.moveNext()) {
			var v = w.current();
			var x = v.c();
			$.ig.MetaTreeHelper.prototype.setMetaItemChildren(x, v.d());
		}
		var z = e.values().getEnumerator();
		while (z.moveNext()) {
			var y = z.current();
			var aa = y.c();
			$.ig.MetaTreeHelper.prototype.setMetaItemChildren(aa, y.d());
		}
		$.ig.MetaTreeHelper.prototype.setMetaItemChildren(g, d);
		return g;
	}

, 
	d: function (a) {
		var b = a.split('\\');
		return b;
	}
,
	$type: new $.ig.Type('MetaTreeHelper', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('HierarchyItemPosition', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('HierarchyItemPosition', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MeasureGroupMetaItemsCache', 'Object', {
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null
, 
		init: function (a, b, c) {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.Dictionary$2(String, $.ig.IEnumerable$1.prototype.$type.specialize($.ig.Dimension.prototype.$type), 0);
				this.b = new $.ig.Dictionary$2(String, $.ig.IEnumerable$1.prototype.$type.specialize($.ig.Measure.prototype.$type), 0);
				this.c = c;
				this.d = a;
				this.e = b;
		}
, 
	getMeasureGroupDimensions: function (a) {
		var $self = this;
		var b;
		if (!(function () { var $ret = $self.a.tryGetValue(a, b); b = $ret.value; return $ret.ret; }())) {
			var c = new $.ig.List$1(String, 0);
			var e = this.c.getEnumerator();
			while (e.moveNext()) {
				var d = e.current();
				if (d.measureGroupName() == a) {
					c.add(d.dimensionUniqueName());
				}
			}
			var f = new $.ig.List$1($.ig.Dimension.prototype.$type, 0);
			var h = this.d.getEnumerator();
			while (h.moveNext()) {
				var g = h.current();
				if (c.contains(g.uniqueName()) || g.dimensionType() == $.ig.DimensionType.prototype.measure) {
					f.add(g);
				}
			}
			this.a.add(a, f);
			b = f;
		}
		return b;
	}

, 
	getMeasureGroupMeasures: function (a) {
		var $self = this;
		var b;
		if (!(function () { var $ret = $self.b.tryGetValue(a, b); b = $ret.value; return $ret.ret; }())) {
			var c = new $.ig.List$1($.ig.Measure.prototype.$type, 0);
			var e = this.e.getEnumerator();
			while (e.moveNext()) {
				var d = e.current();
				if (d.measureGroupName() == a) {
					c.add(d);
				}
			}
			this.b.add(a, c);
			b = c;
		}
		return b;
	}
,
	$type: new $.ig.Type('MeasureGroupMetaItemsCache', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DataSourceBaseOptions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_measures: null,
	measures: function (a) {
		if (arguments.length === 1) {
			this._measures = a;
			return a;
		} else {
			return this._measures;
		}
	}

, 
	_filters: null,
	filters: function (a) {
		if (arguments.length === 1) {
			this._filters = a;
			return a;
		} else {
			return this._filters;
		}
	}

, 
	_columns: null,
	columns: function (a) {
		if (arguments.length === 1) {
			this._columns = a;
			return a;
		} else {
			return this._columns;
		}
	}

, 
	_rows: null,
	rows: function (a) {
		if (arguments.length === 1) {
			this._rows = a;
			return a;
		} else {
			return this._rows;
		}
	}
,
	$type: new $.ig.Type('DataSourceBaseOptions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('CubeMetaItemsCache', 'Object', {
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
	$type: new $.ig.Type('CubeMetaItemsCache', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('AxisDefinitionParser', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.l(-1);
				this.m(a);
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
	v: function () {
		if (this.l() == this.m().length - 1) {
			return false;
		}
		var a = -1;
		var b = -1;
		var c = false;
		while (this.l() + 1 < this.m().length) {
			this.l(this.l() + 1);
			var d = this.m().substr(this.l(), 1);
			switch (d) {
				case $.ig.AxisDefinitionParser.prototype.a:
					if (a == -1) {
						a = this.l();
					}
					break;
				case $.ig.AxisDefinitionParser.prototype.b:
					b = this.l();
					while (this.l() + 1 < this.m().length) {
						d = this.m().substr(this.l() + 1, 1);
						switch (d) {
							case $.ig.AxisDefinitionParser.prototype.b:
								b = this.l() + 1;
								break;
							case $.ig.AxisDefinitionParser.prototype.e:
							case $.ig.AxisDefinitionParser.prototype.c:
							case $.ig.AxisDefinitionParser.prototype.d:
								c = true;
								break;
						}
						if (c) {
							break;
						}
						this.l(this.l() + 1);
					}
					break;
				case $.ig.AxisDefinitionParser.prototype.e:
					c = true;
					break;
				case $.ig.AxisDefinitionParser.prototype.c:
					this.j(true);
					break;
				case $.ig.AxisDefinitionParser.prototype.d:
					$.ig.Debug.prototype.c(this.j());
					c = true;
					this.j(false);
					break;
			}
			if (c) {
				c = false;
				if (a > -1 && b > -1) {
					break;
				}
			}
		}
		if (this.l() == this.m().length - 1) {
			if (b == -1 || a == -1) {
			return false;
			}
		}
		var e = this.m().substr(a, b - a + 1).trim();
		this.k(e);
		return true;
	}

, 
	w: function () {
		var a = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
		var b = null;
		while (this.v()) {
			if (!this.j()) {
				b = new $.ig.List$1(String, 0);
				var c = new $.ig.AxisElement(this.k(), b);
				a.add(c);
			} else if (b != null) {
				b.add(this.k());
			}
		}
		return a;
	}
,
	$type: new $.ig.Type('AxisDefinitionParser', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AxisElement', 'Object', {

		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.name(a);
				this.memberNames(b);
		}
, 
	_name: null,
	name: function (a) {
		if (arguments.length === 1) {
			this._name = a;
			return a;
		} else {
			return this._name;
		}
	}

, 
	_memberNames: null,
	memberNames: function (a) {
		if (arguments.length === 1) {
			this._memberNames = a;
			return a;
		} else {
			return this._memberNames;
		}
	}
,
	$type: new $.ig.Type('AxisElement', $.ig.Object.prototype.$type)
}, true);






$.ig.util.defType('PositionItemInfo$2', 'Dictionary$2', {
	$tKey: null, 
	$tSortKey: null
, 
		init: function ($tKey, $tSortKey, a, b, c, d, e, f) {


			this.$tKey = $tKey
			this.$tSortKey = $tSortKey
			this.$type = this.$type.specialize(this.$tKey, this.$tSortKey);
			$.ig.Dictionary$2.prototype.init.call(this, this.$tKey, $.ig.PositionItemInfo$2.prototype.$type.specialize(this.$tKey, this.$tSortKey));
						this.positionIndex(a);
				this.positionItemIndex(b);
				this.positionItemDepth(c);
				this.positionSize(f);
				this.key(d);
				this.parentKey(e);
				this.childTopMostPositionItemDepth(-1);
		}
, 
	t: function (a, b, c, d, e, f) {
		return new $.ig.PositionItemInfo$2(this.$tKey, this.$tSortKey, a, b, c, d, e, f);
	}

, 
	_childTopMostPositionItemDepth: null,
	childTopMostPositionItemDepth: function (a) {
		if (arguments.length === 1) {
			this._childTopMostPositionItemDepth = a;
			return a;
		} else {
			return this._childTopMostPositionItemDepth;
		}
	}

, 
	_positionIndex: null,
	positionIndex: function (a) {
		if (arguments.length === 1) {
			this._positionIndex = a;
			return a;
		} else {
			return this._positionIndex;
		}
	}

, 
	_positionItemDepth: null,
	positionItemDepth: function (a) {
		if (arguments.length === 1) {
			this._positionItemDepth = a;
			return a;
		} else {
			return this._positionItemDepth;
		}
	}

, 
	_positionItemIndex: null,
	positionItemIndex: function (a) {
		if (arguments.length === 1) {
			this._positionItemIndex = a;
			return a;
		} else {
			return this._positionItemIndex;
		}
	}

, 
	_positionSize: null,
	positionSize: function (a) {
		if (arguments.length === 1) {
			this._positionSize = a;
			return a;
		} else {
			return this._positionSize;
		}
	}

, 
	_key: null,
	key: function (a) {
		if (arguments.length === 1) {
			this._key = a;
			return a;
		} else {
			return this._key;
		}
	}

, 
	_parentKey: null,
	parentKey: function (a) {
		if (arguments.length === 1) {
			this._parentKey = a;
			return a;
		} else {
			return this._parentKey;
		}
	}

, 
	_hierarchyKey: null,
	hierarchyKey: function (a) {
		if (arguments.length === 1) {
			this._hierarchyKey = a;
			return a;
		} else {
			return this._hierarchyKey;
		}
	}

, 
	_sortKey: null,
	sortKey: function (a) {
		if (arguments.length === 1) {
			this._sortKey = a;
			return a;
		} else {
			return this._sortKey;
		}
	}

, 
	_isExpandable: null,
	isExpandable: function (a) {
		if (arguments.length === 1) {
			this._isExpandable = a;
			return a;
		} else {
			return this._isExpandable;
		}
	}

, 
	_isExpanded: null,
	isExpanded: function (a) {
		if (arguments.length === 1) {
			this._isExpanded = a;
			return a;
		} else {
			return this._isExpanded;
		}
	}

, 
	ac: function (a, b, c, d) {
		var e = false;
		if (this.positionItemIndex() == -1) {
			e = true;

		} else {
			if (d != null) {
				if (a.item(this.positionItemIndex()).key() != null) {
					var f = d.item(this.positionItemIndex());
					e = a.item(this.positionItemIndex()).key().equals(f.key());
				}
			}
		}
		if (this.positionItemIndex() + 1 == c) {
			return e;
		}
		var g = this.ae(a, b, this.positionItemIndex() + 1, c, d);
		return e && g;
	}

, 
	ad: function (a, b) {
	}

, 
	ae: function (a, b, c, d, e) {
		var $self = this;
		var f;
		var g = a.item(c);
		if (!this.containsKey(g.key())) {
			var h = this.t(b, c, g.depth(), g.key(), g.parentKey(), this.positionSize());
			h.isExpandable(g.isExpandable());
			h.sortKey(g.sortKey());
			h.hierarchyKey(g.hierarchyKey());
			var j = this.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (i) { return i.key().equals(g.parentKey())}).firstOrDefault$1($.ig.PositionItemInfo$2.prototype.$type);
			if (j != null) {
				j.isExpanded(true);
			}
			f = h.ac(a, b, d, e);
			this.add(g.key(), h);
			if (this.childTopMostPositionItemDepth() == -1) {
				this.childTopMostPositionItemDepth(g.depth());

			} else {
				this.childTopMostPositionItemDepth(Math.min(this.childTopMostPositionItemDepth(), g.depth()));
			}
			this.ad(a, h);

		} else {
			var k = this.item(g.key());
			f = k.ac(a, b, d, e);
		}
		return f;
	}

, 
	getIndex: function (a) {
		var b = new Array(a.count());
		for (var c = 0; c < b.length; c++) {
			b[c] = a.item(c).key();
		}
		return this.getIndex1(b);
	}

, 
	getIndex1: function (a) {
		return this.af(a, a.length);
	}

, 
	af: function (a, b) {
		var $self = this;
		if (this.positionItemIndex() == b - 1) {
			return this.positionIndex();
		}
		var c;
		if (!(function () { var $ret = $self.tryGetValue(a[$self.positionItemIndex() + 1], c); c = $ret.value; return $ret.ret; }())) {
			return -1;
		}
		if (c.count() == 0) {
			return c.positionIndex();
		}
		return c.af(a, b);
	}
,
	$type: new $.ig.Type('PositionItemInfo$2', $.ig.Dictionary$2.prototype.$type.specialize(0, $.ig.PositionItemInfo$2.prototype.$type.specialize(0, 1)))
}, true);

$.ig.util.defType('PositionResolver$2', 'Object', {
	$tKey: null, 
	$tSortKey: null, 
	a: null, 
	b: null, 
	c: null, 
	d: null
, 
		init: function ($tKey, $tSortKey, a, b) {

			this.a = 0;

			this.$tKey = $tKey
			this.$tSortKey = $tSortKey
			this.$type = this.$type.specialize(this.$tKey, this.$tSortKey);
			$.ig.Object.prototype.init.call(this);
						this.positions(a.toList$1($.ig.IPosition$2.prototype.$type));
				this.positionSize(b);
		}, 
	getPositionIndexCompleted: null
, 
	_positions: null,
	positions: function (a) {
		if (arguments.length === 1) {
			this._positions = a;
			return a;
		} else {
			return this._positions;
		}
	}

, 
	_positionSize: null,
	positionSize: function (a) {
		if (arguments.length === 1) {
			this._positionSize = a;
			return a;
		} else {
			return this._positionSize;
		}
	}

, 
	rootPositionInfo: function () {
			if (this.b == null) {
				this.b = this.j();
			}
			return this.b;
	}

, 
	j: function () {
		return new $.ig.PositionItemInfo$2(this.$tKey, this.$tSortKey, -1, -1, -1, this.c, this.d, this.positionSize());
	}

, 
	hasUnregisterdPositions: function () {
			return this.a < this.positions().count();
	}

, 
	completeRegisterPositions: function () {
		if (this.hasUnregisterdPositions()) {
			this.l(null);
		}
	}

, 
	resolveParentPositionItem: function (a, b) {
		b = -1;
		var c = $.ig.util.cast($.ig.IHierarchicalPositionItem$2.prototype.$type.specialize(this.$tKey, this.$tSortKey), a);
		if (c == null || c.parentKey() == null) {
			return {
				ret: null,
				parentPositionIndex: b
			};
		}
		var d = c.position().indexOf(c);
		var e = new Array(c.position().itemsCount());
		for (var f = 0; f < c.position().itemsCount(); f++) {
			e[f] = c.position().item(f).key();
		}
		e[d] = c.parentKey();
		b = this.rootPositionInfo().getIndex1(e);
		if (b == -1) {
			return {
				ret: null,
				parentPositionIndex: b
			};
		}
		var g = this.positions().__inner[b];
		var h = g.item(d);
		return {
			ret: h,
			parentPositionIndex: b
		};
		return {
			parentPositionIndex: b
		};
	}

, 
	getHostPositionItemInfo: function (a, b) {
		var $self = this;
		var c = this.rootPositionInfo();
		var d = a.item(b);
		for (var e = 0; e < b; e++) {
			var f;
			if ((function () { var $ret = c.tryGetValue(a.item(e).key(), f); f = $ret.value; return $ret.ret; }())) {
				c = f;

			} else {
				c = null;
				break;
			}
		}
		if (c == null) {
			return null;
		}
		if (!c.containsKey(d.key())) {
			return null;
		}
		return c;
	}

, 
	getChildren: function (a, b) {
		var $self = this;
		if (this.hasUnregisterdPositions()) {
			this.completeRegisterPositions();
		}
		var c = this.getHostPositionItemInfo(a, b);
		var d = a.item(b);
		return c.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (e) { return d.key().equals(e.parentKey())		});
	}

, 
	isMemberExpanded: function (a) {
		var $self = this;
		if (this.hasUnregisterdPositions()) {
			this.completeRegisterPositions();
		}
		var b = this.getPositionIndex(a.position());
		if (b == -1 || this.rootPositionInfo().count() == 0) {
			return null;
		}
		var c = a.position().indexOf(a);
		var d = this.rootPositionInfo();
		for (var e = 0; e < c; e++) {
			var f;
			if ((function () { var $ret = d.tryGetValue(a.position().item(e).key(), f); f = $ret.value; return $ret.ret; }())) {
				d = f;

			} else {
				d = null;
				break;
			}
		}
		if (d == null) {
			return null;
		}
		if (!d.containsKey(a.key())) {
			return null;
		}
		var g = null;
		var h = d.values().getEnumerator();
		while (h.moveNext()) {
			if (a.key().equals(h.current().parentKey())) {
				g = h.current();
				break;
			}
		}
		return g != null;
	}

, 
	getPositionIndex: function (a) {
		if (a == null) {
			return -1;
		}
		if (a.itemsCount() != this.positionSize()) {
			return -1;
		}
		if (a.isEmpty() && this.positions().count() == 1 && this.positions().__inner[0].isEmpty()) {
			return 0;
		}
		if (this.a > 0) {
			var b = this.k(a);
			if (b > -1) {
				return b;
			}
			if (this.a == this.positions().count()) {
				return -1;
			}
		}
		return this.l(a);
	}

, 
	k: function (a) {
		if (a.isEmpty() && this.positions().count() == 1 && this.positions().__inner[0].isEmpty()) {
			return 0;
		}
		return this.rootPositionInfo().getIndex(a.getItems().toList$1($.ig.IPositionItem$2.prototype.$type));
	}

, 
	l: function (a) {
		var b = a == null;
		var c = -1;
		for (var d = this.a; d < this.positions().count(); d++) {
			var e = this.positions().__inner[d];
			var f = this.rootPositionInfo().ac(e, d, this.positionSize(), a);
			this.a++;
			if (c == -1 && f) {
				c = d;
				if (!b) {
					break;
				}
			}
		}
		return c;
	}
,
	$type: new $.ig.Type('PositionResolver$2', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LevelSortDirection', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.f($.ig.LevelSortBehavior.prototype.system);
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
	$type: new $.ig.Type('LevelSortDirection', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('jQueryUtils', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	b: function ($t, a) {
		if (a == null) {
		return null;
		}
		var jsObject_ = a;
		var dict_ = new $.ig.Dictionary$2(String, $t, 0);
		(function (obj, dict) {
    var inner = $.ig.Dictionary.prototype.getDictionary(obj),
        keys = $.ig.Dictionary.prototype.getDictionary(obj);

    dict.__inner = inner;
    dict.__keys = keys;
})(jsObject_, dict_);;
		return dict_;
	}

, 
	d: function ($t, a) {
		if (a == null) {
		return null;
		}
		var dict_ = a;
		return dict_.__inner.proxy;
	}

, 
	convertToObjectDictionary: function (a) {
		return $.ig.jQueryUtils.prototype.b($.ig.Object.prototype.$type, a);
	}

, 
	convertToStringDictionary: function (a) {
		return $.ig.jQueryUtils.prototype.b(String, a);
	}

, 
	convertFromObjectDictionary: function (a) {
		return $.ig.jQueryUtils.prototype.d($.ig.Object.prototype.$type, a);
	}

, 
	convertFromStringDictionary: function (a) {
		return $.ig.jQueryUtils.prototype.d(String, a);
	}

, 
	createJavascriptObject: function () {
		return {};
	}

, 
	getJavascriptObjectProperty: function (a, b) {
		var jsObject_ = a;
		var property_ = b;
		return jsObject_[property_];
	}

, 
	setJavascriptObjectProperty: function (a, b, c) {
		var jsObject_ = a;
		var property_ = b;
		var value_ = c;
		jsObject_[property_] = value_;
	}
,
	$type: new $.ig.Type('jQueryUtils', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TableView', 'Object', {
	a: null
, 
		init: function (a, b, c, d) {


			$.ig.Object.prototype.init.call(this);
						var e = this.b(d);
				this.a = new $.ig.TableViewImpl(a, b, c, e);
		}
, 
	rowHeaders: function () {
			if (this.a.rowHeaders() == null) {
			return null;
			}
			return (this.a.rowHeaders()).inner();
	}

, 
	columnHeaders: function () {
			if (this.a.columnHeaders() == null) {
			return null;
			}
			return (this.a.columnHeaders()).inner();
	}

, 
	resultCells: function () {
			if (this.a.resultCells() == null) {
			return null;
			}
			return (this.a.resultCells()).inner();
	}

, 
	initialize: function () {
		this.a.initialize();
	}

, 
	b: function (a) {
		var $self = this;
		var b = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "isParentInFrontForColumns");
		var c = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "isParentInFrontForRows");
		var d = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "preserveMembersOrder");
		var e = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "compactColumnHeaders");
		var f = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "compactRowHeaders");
		var g = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "levelFirstSortDirection");
		var h = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "levelDefaultSortDirections");
		var i = new $.ig.List$1($.ig.LevelSortDirection.prototype.$type, 0);
		if (h != null) {
			for (var j = 0; j < h.length; j++) {
				if ($.ig.util.cast($.ig.LevelSortDirection.prototype.$type, h[j]) !== null) {
					i.add(h[j]);
				}
			}
		}
		return (function () { var $ret = new $.ig.TableViewSettings();
		$ret.h(b);
		$ret.i(c);
		$ret.j(i);
		$ret.k(g);
		$ret.l(d);
		$ret.n(e);
		$ret.m(f); return $ret;}());
	}
,
	$type: new $.ig.Type('TableView', $.ig.Object.prototype.$type)
}, true);
$.ig.LevelSortBehavior.prototype.alphabetical = 0;
$.ig.LevelSortBehavior.prototype.system = 1;
$.ig.MetadataTreeItemType.prototype.cube = 0;
$.ig.MetadataTreeItemType.prototype.dimension = 1;
$.ig.MetadataTreeItemType.prototype.group = 2;
$.ig.MetadataTreeItemType.prototype.userDefinedHierarchy = 3;
$.ig.MetadataTreeItemType.prototype.systemEnabledHierarchy = 4;
$.ig.MetadataTreeItemType.prototype.parentChildHierarchy = 5;
$.ig.MetadataTreeItemType.prototype.measure = 6;
$.ig.MetadataTreeItemType.prototype.level1 = 7;
$.ig.MetadataTreeItemType.prototype.level2 = 8;
$.ig.MetadataTreeItemType.prototype.level3 = 9;
$.ig.MetadataTreeItemType.prototype.level4 = 10;
$.ig.MetadataTreeItemType.prototype.level5 = 11;
$.ig.MeasureListLocation.prototype.rows = 0;
$.ig.MeasureListLocation.prototype.columns = 1;
$.ig.HeaderCellsLayoutOrientation.prototype.horizontal = 0;
$.ig.HeaderCellsLayoutOrientation.prototype.vertical = 1;
$.ig.MemberType.prototype.unknown = 0;
$.ig.MemberType.prototype.regular = 0;
$.ig.MemberType.prototype.all = 1;
$.ig.MemberType.prototype.measure = 2;
$.ig.MemberType.prototype.formula = 3;
$.ig.CardinalityType.prototype.one = 0;
$.ig.CardinalityType.prototype.many = 1;
$.ig.AggregatorType.prototype.unknown = 0;
$.ig.AggregatorType.prototype.sum = 1;
$.ig.AggregatorType.prototype.count = 2;
$.ig.AggregatorType.prototype.min = 3;
$.ig.AggregatorType.prototype.max = 4;
$.ig.AggregatorType.prototype.average = 5;
$.ig.AggregatorType.prototype.variance = 6;
$.ig.AggregatorType.prototype.std = 7;
$.ig.AggregatorType.prototype.distinctCount = 8;
$.ig.AggregatorType.prototype.none = 9;
$.ig.AggregatorType.prototype.averageOfChildren = 10;
$.ig.AggregatorType.prototype.firstNonEmpty = 13;
$.ig.AggregatorType.prototype.lastNonEmpty = 14;
$.ig.AggregatorType.prototype.byAccount = 15;
$.ig.AggregatorType.prototype.calculated = 127;
$.ig.HierarchyOrigin.prototype.userDefined = 1;
$.ig.HierarchyOrigin.prototype.systemEnabled = 2;
$.ig.HierarchyOrigin.prototype.systemInternal = 4;
$.ig.DimensionType.prototype.unknown = 0;
$.ig.DimensionType.prototype.time = 1;
$.ig.DimensionType.prototype.measure = 2;
$.ig.DimensionType.prototype.other = 3;
$.ig.DimensionType.prototype.quantitative = 5;
$.ig.DimensionType.prototype.accounts = 6;
$.ig.DimensionType.prototype.customers = 7;
$.ig.DimensionType.prototype.products = 8;
$.ig.DimensionType.prototype.scenario = 9;
$.ig.DimensionType.prototype.utility = 10;
$.ig.DimensionType.prototype.currency = 11;
$.ig.DimensionType.prototype.rates = 12;
$.ig.DimensionType.prototype.channel = 13;
$.ig.DimensionType.prototype.promotion = 14;
$.ig.DimensionType.prototype.organization = 15;
$.ig.DimensionType.prototype.billOfMaterials = 16;
$.ig.DimensionType.prototype.geography = 17;
$.ig.CubeType.prototype.cube = 0;
$.ig.CubeType.prototype.dimension = 1;
$.ig.CubeType.prototype.unknown = 2;
$.ig.AxisDefinitionParser.prototype.a = "[";
$.ig.AxisDefinitionParser.prototype.b = "]";
$.ig.AxisDefinitionParser.prototype.c = "{";
$.ig.AxisDefinitionParser.prototype.d = "}";
$.ig.AxisDefinitionParser.prototype.e = ",";

$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.ArrayListCollection$1], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.ArrayListCollection$1], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.ArrayListCollection$1], ['asQueryable']]]);




// Declare empty types
$.ig = $.ig || {};
$.ig.util.bulkDefine(["IConnection", 
"IXmlaDataProvider", 
"KeyValueItem", 
"XmlaDataProvider", 
"CatalogConstants", 
"ColumnsConstants", 
"ProviderTypeConstants", 
"TableConstants", 
"DbSchemaConstants", 
"CatalogRestrictions", 
"ColumnsRestrictions", 
"ProviderTypeRestrictions", 
"TableRestrictions", 
"CubeConstants", 
"DimensionConstants", 
"HierarchyConstants", 
"InstanceConstants", 
"LevelConstants", 
"MeasureConstants", 
"MeasureGroupConstants", 
"MeasureGroupDimensionConstants", 
"MemberConstants", 
"OlapSchemaConstants", 
"CubeRestrictions", 
"DimensionRestrictions", 
"HierarchyRestrictions", 
"LevelRestrictions", 
"MeasureRestrictions", 
"MeasureGroupRestrictions", 
"MeasureGroupDimensionRestrictions", 
"MemberRestrictions", 
"ICoreXmlaConnection", 
"ArraySerializer", 
"IXmlTypeSerializer$1", 
"AxisXmlTypeSerializer", 
"TupleXmlTypeSerializer", 
"AxisMemberXmlTypeSerializer", 
"CellXmlTypeSerializer", 
"CubeXmlTypeSerializer", 
"DatabaseXmlTypeSerializer", 
"DimensionXmlTypeSerializer", 
"ErrorXmlTypeSerializer", 
"HierarchyXmlTypeSerializer", 
"LevelXmlTypeSerializer", 
"MeasureGroupDimensionXmlTypeSerializer", 
"MeasureGroupXmlTypeSerializer", 
"MeasureXmlTypeSerializer", 
"MemberXmlTypeSerializer", 
"ResultXmlTypeSerializer", 
"SerializerUtils", 
"XmlaConstants", 
"XmlaSoapFaultXmlTypeSerializer", 
"IXmlaMethodResult", 
"XmlaSoapMethodResult", 
"DiscoverResponseResult", 
"XmlaSoapMessageHeader", 
"FaultError", 
"RequestCompletedEventArgs$1", 
"ExecuteResponseResult", 
"FaultDetail", 
"IXmlaSoapMethod", 
"XmlaNamespace", 
"XmlaPropertiesCollection", 
"XmlaQueryProperty", 
"XmlaSoapFault", 
"XmlaSoapMessageBuilder", 
"XmlaSoapMethod", 
"XmlaSoapMethodDiscover", 
"XmlaSoapMethodExecute", 
"XmlaSoapWebClient", 
"XmlaSoapWebClient$1", 
"Session", 
"IMdxExpression", 
"IMdxElement", 
"IAxisFilterElement", 
"IMdxAxis", 
"IMdxAxisProvider", 
"IMdxCalculatedMembersCacheProvider", 
"IMdxCollectionElement", 
"IMdxDimensionAxisProvider", 
"IMdxExtendedFilterInfo", 
"IMdxFilterInfo", 
"IMdxItemElement", 
"IMdxQuery", 
"IMdxSet", 
"MdxAxis", 
"MdxAxisFilterElement", 
"MdxCalculatedMembersCache", 
"MdxElement", 
"MdxSingleElement", 
"MdxDimensionMember", 
"MdxChildrenCollectionElement", 
"MdxConstantElement", 
"MdxElementCollectionElement", 
"MdxElementType", 
"MdxLevelMembersElement", 
"MdxQueryBuilder", 
"MdxSet", 
"MdxSettings", 
"IMdxSlicerAxis", 
"MdxSlicerAxis", 
"MdxSlicerSet", 
"MdxDimensionAxisCreateMode", 
"MdxDimensionAxisProvider", 
"MdxSlicerAxisProvider", 
"MdxSlicerAxisBuilder", 
"IXmlaDataProviderFactory", 
"DefaultXmlaDataProviderFactory", 
"RemoteXmlaDataProviderFactory", 
"IRemoteXmlaRequestSerializer", 
"IRemoteXmlaResponseSerializer", 
"JsonRemoteXmlaRequestSerializer", 
"JsonRemoteXmlaResponseSerializer", 
"ArrayJsonSerializer", 
"IJsonTypeSerializer$1", 
"JsonTypeSeriazlierBase$1", 
"AxisJsonTypeSeriazlier", 
"AxisMemberJsonTypeSeriazlier", 
"CatalogJsonTypeSeriazlier", 
"CellJsonTypeSeriazlier", 
"CubeJsonTypeSeriazlier", 
"DimensionJsonTypeSeriazlier", 
"HierarchyJsonTypeSeriazlier", 
"JsonSerializerUtils", 
"LevelJsonTypeSeriazlier", 
"MeasureGroupDimensionJsonTypeSeriazlier", 
"MeasureGroupJsonTypeSeriazlier", 
"MeasureJsonTypeSeriazlier", 
"MemberJsonTypeSeriazlier", 
"RemoteXmlaRequestJsonTypeSeriazlier", 
"ResultJsonTypeSeriazlier", 
"TupleJsonTypeSeriazlier", 
"RemoteXmlaDataProvder", 
"RemoteXmlaRequest", 
"RemoteXmlaRequestType", 
"XmlaConnection", 
"XmlaDataSourceImpl", 
"PositionInfo", 
"TaskExtensions", 
"XmlaDiscoverProperties", 
"XmlaDataSourceOptions", 
"CustomRemoteXmlaRequestSerializer", 
"CustomRemoteXmlaResponseSerializer", 
"XmlaDataSource", 
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
"ICoreOlapElement", 
"Cube", 
"Catalog", 
"Dimension", 
"CubeType", 
"ScopeType", 
"DimensionType", 
"LevelType", 
"HierarchyOrigin", 
"AggregatorType", 
"CardinalityType", 
"MemberType", 
"Hierarchy", 
"Level", 
"Measure", 
"MeasureGroup", 
"MeasureGroupDimension", 
"Member", 
"OlapResult", 
"OlapResultAxis", 
"IPosition$2", 
"OlapResultTuple", 
"IPositionItem$2", 
"IHierarchicalPositionItem$2", 
"OlapResultAxisMember", 
"OlapResultCell", 
"HeaderCellsLayoutOrientation", 
"LevelSpanManager", 
"SpanSource", 
"ITableViewHeadersFactory", 
"TableViewHeadersFactory", 
"TableCompactViewHeadersFactory", 
"TableViewHeaderCellSource", 
"TableViewImpl", 
"TableViewSettings", 
"TableViewHeaderCell", 
"TableViewResultCell", 
"ArrayListCollection$1", 
"IOlapDataSource", 
"MeasureList", 
"MeasureListLocation", 
"MetadataTreeItemType", 
"MetadataTreeItem", 
"MetaTreeHelper", 
"HierarchyItemPosition", 
"MeasureGroupMetaItemsCache", 
"DataSourceBaseOptions", 
"CubeMetaItemsCache", 
"SourceInitHelper", 
"AxisDefinitionParser", 
"AxisElement", 
"PivotActionStatus", 
"PivotAction", 
"AxisItemsChangeType", 
"AxisChangedAction", 
"AxisItemsChangedAction", 
"ExpansionStateChangeType", 
"ExpansionStateChangedAction", 
"PivotActionManager", 
"PositionItemInfo$2", 
"PositionResolver$2", 
"LevelSortDirection", 
"LevelSortBehavior", 
"HierarchyFilterView", 
"FilterMember", 
"FilterMemberStateChangedEventArgs", 
"jQueryUtils", 
"TableView", 
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
"JQueryPromise"]);
$.ig.util.defType('RemoteXmlaRequestType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('RemoteXmlaRequestType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MdxDimensionAxisCreateMode', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('MdxDimensionAxisCreateMode', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MdxElementType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('MdxElementType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaSoapMessageHeader', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('XmlaSoapMessageHeader', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('IXmlaDataProvider', 'Object', {

		$type: new $.ig.Type('IXmlaDataProvider', null)
}, true);

$.ig.util.defType('KeyValueItem', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('KeyValueItem', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaDataProvider', 'Object', {
	a: null, 
	b: null
, 
		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = b;
		}
, 
	discoverCatalogsAsync: function (a, b) {
		return this.d($.ig.Catalog.prototype.$type, new $.ig.DatabaseXmlTypeSerializer(), $.ig.DbSchemaConstants.prototype.a, a, b);
	}

, 
	discoverCubesAsync: function (a, b) {
		return this.d($.ig.Cube.prototype.$type, new $.ig.CubeXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.a, a, b);
	}

, 
	discoverDimensionsAsync: function (a, b) {
		return this.d($.ig.Dimension.prototype.$type, new $.ig.DimensionXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.b, a, b);
	}

, 
	discoverHierarchiesAsync: function (a, b) {
		return this.d($.ig.Hierarchy.prototype.$type, new $.ig.HierarchyXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.f, a, b);
	}

, 
	discoverLevelsAsync: function (a, b) {
		return this.d($.ig.Level.prototype.$type, new $.ig.LevelXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.g, a, b);
	}

, 
	discoverMeasuresAsync: function (a, b) {
		return this.d($.ig.Measure.prototype.$type, new $.ig.MeasureXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.e, a, b);
	}

, 
	discoverMeasureGroupsAsync: function (a, b) {
		return this.d($.ig.MeasureGroup.prototype.$type, new $.ig.MeasureGroupXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.c, a, b);
	}

, 
	discoverMeasureGroupDimensionsAsync: function (a, b) {
		return this.d($.ig.MeasureGroupDimension.prototype.$type, new $.ig.MeasureGroupDimensionXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.d, a, b);
	}

, 
	discoverMembersAsync: function (a, b) {
		return this.d($.ig.Member.prototype.$type, new $.ig.MemberXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.h, a, b);
	}

, 
	executeStatementAsync: function (a, b, c) {
		var $self = this;
		var d = new $.ig.TaskCompletionSource$1($.ig.OlapResult.prototype.$type, 0);
		var e = this.a.getXmlaSoapWebClient$1($.ig.ExecuteResponseResult.prototype.$type);
		var f = new $.ig.ResultXmlTypeSerializer();
		e.requestCompleted = $.ig.Delegate.prototype.combine(e.requestCompleted, function (g, h) { return $self.j($.ig.OlapResult.prototype.$type, f, h, d)		});
		var i = new $.ig.XmlaSoapMethodExecute(a);
		this.f(i, b, c);
		e.q(i);
		return d.d();
	}

, 
	d: function ($t, a, b, c, d) {
		var $self = this;
		var e = new $.ig.TaskCompletionSource$1($.ig.IEnumerable$1.prototype.$type.specialize($t), 0);
		var f = this.a.getXmlaSoapWebClient$1($.ig.DiscoverResponseResult.prototype.$type);
		f.requestCompleted = $.ig.Delegate.prototype.combine(f.requestCompleted, function (g, h) { return $self.h($t, a, h, e)		});
		var i = new $.ig.XmlaSoapMethodDiscover(b);
		this.e(i, c, d);
		f.q(i);
		return e.d();
	}

, 
	e: function (a, b, c) {
		if (c != null) {
			var e = c.getEnumerator();
			while (e.moveNext()) {
				var d = e.current();
				a.w().add(d.c(), d.d());
			}
		}
		if (b != null) {
			var g = b.getEnumerator();
			while (g.moveNext()) {
				var f = g.current();
				a.h().add(new $.ig.XmlaQueryProperty(1, f.c(), f.d()));
			}
		}
		if (this.b != null) {
			this.b(a);
		}
	}

, 
	f: function (a, b, c) {
		if (c != null) {
			var e = c.getEnumerator();
			while (e.moveNext()) {
				var d = e.current();
			}
		}
		if (b != null) {
			var g = b.getEnumerator();
			while (g.moveNext()) {
				var f = g.current();
				a.h().add(new $.ig.XmlaQueryProperty(1, f.c(), f.d()));
			}
		}
		if (this.b != null) {
			this.b(a);
		}
	}

, 
	h: function ($t, a, b, c) {
		if (b.error() != null) {
			c.h(b.error());
		} else if (b.cancelled()) {
			c.g();

		} else {
			var d = b.result();
			if (d != null) {
				var e = new $.ig.ArraySerializer();
				var f = e.b($t, b.result().returnElement(), $.ig.XName.prototype.i("row", $.ig.XmlaNamespace.prototype.d), a);
				c.i(f);
			}
		}
	}

, 
	j: function ($t, a, b, c) {
		if (b.error() != null) {
			c.h(b.error());
		} else if (b.cancelled()) {
			c.g();

		} else {
			var d = b.result();
			if (d != null) {
				var e = a.deserialize(b.result().returnElement());
				c.i(e);
			}
		}
	}
,
	$type: new $.ig.Type('XmlaDataProvider', $.ig.Object.prototype.$type, [$.ig.IXmlaDataProvider.prototype.$type])
}, true);

$.ig.util.defType('CatalogConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('CatalogConstants', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('DbSchemaConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('DbSchemaConstants', $.ig.Object.prototype.$type)
}, true);





$.ig.util.defType('CubeConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('CubeConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DimensionConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('DimensionConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('HierarchyConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('HierarchyConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('InstanceConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('InstanceConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LevelConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('LevelConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MeasureConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('MeasureConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MeasureGroupConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('MeasureGroupConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MeasureGroupDimensionConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('MeasureGroupDimensionConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MemberConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('MemberConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('OlapSchemaConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('OlapSchemaConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('CubeRestrictions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('CubeRestrictions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DimensionRestrictions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('DimensionRestrictions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('HierarchyRestrictions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('HierarchyRestrictions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LevelRestrictions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('LevelRestrictions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MeasureRestrictions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('MeasureRestrictions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MeasureGroupRestrictions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('MeasureGroupRestrictions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MeasureGroupDimensionRestrictions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('MeasureGroupDimensionRestrictions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MemberRestrictions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('MemberRestrictions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ICoreXmlaConnection', 'Object', {

		$type: new $.ig.Type('ICoreXmlaConnection', null, [$.ig.IConnection.prototype.$type])
}, true);

$.ig.util.defType('ArraySerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	b: function ($t, a, b, c) {
		var d = new $.ig.List$1($t, 0);
		var f = a.i(b).getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			d.add(c.deserialize(e));
		}
		return d;
	}
,
	$type: new $.ig.Type('ArraySerializer', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IXmlTypeSerializer$1', 'Object', {

		$type: new $.ig.Type('IXmlTypeSerializer$1', null)
}, true);

$.ig.util.defType('AxisXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.b(b.q($.ig.XName.prototype.i("name", "")));
		var d = b.g($.ig.XName.prototype.i("Tuples", $.ig.XmlaNamespace.prototype.c));
		var e = new $.ig.ArraySerializer();
		var f = e.b($.ig.OlapResultTuple.prototype.$type, d, $.ig.XName.prototype.i("Tuple", $.ig.XmlaNamespace.prototype.c), new $.ig.TupleXmlTypeSerializer());
		var g = 0;
		if (f.count() > 0) {
			g = f.__inner[0].members().count();
		}
		return (function () { var $ret = new $.ig.OlapResultAxis(f, g);
		$ret.name(c); return $ret;}());
	}
,
	$type: new $.ig.Type('AxisXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResultAxis.prototype.$type)])
}, true);

$.ig.util.defType('TupleXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = new $.ig.ArraySerializer();
		var d = c.b($.ig.OlapResultAxisMember.prototype.$type, b, $.ig.XName.prototype.i("Member", $.ig.XmlaNamespace.prototype.c), new $.ig.AxisMemberXmlTypeSerializer());
		var e = new $.ig.OlapResultTuple(d);
		var g = d.getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			f.position(e);
		}
		return e;
	}
,
	$type: new $.ig.Type('TupleXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResultTuple.prototype.$type)])
}, true);

$.ig.util.defType('AxisMemberXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i("UName", $.ig.XmlaNamespace.prototype.c)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i("LName", $.ig.XmlaNamespace.prototype.c)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i("Caption", $.ig.XmlaNamespace.prototype.c)));
		var f = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i("LNum", $.ig.XmlaNamespace.prototype.c)));
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i("DisplayInfo", $.ig.XmlaNamespace.prototype.c)));
		var h = b.q($.ig.XName.prototype.i("Hierarchy", "")).g();
		var i = (function () { var $ret = new $.ig.OlapResultAxisMember();
$ret.hierarchyUniqueName(h);
$ret.levelUniqueName(d);
$ret.levelNumber($.ig.Number.prototype.parseInt(f));
$ret.uniqueName(c);
$ret.caption(e);
$ret.displayInfo(String.isNullOrEmpty(g) ? 0 : $.ig.Number.prototype.parseInt(g)); return $ret;}());
		var k = b.h().getEnumerator();
		while (k.moveNext()) {
			var j = k.current();
			switch (j.m().c()) {
				case "UName":
				case "LName":
				case "Caption":
				case "LNum":
				case "DisplayInfo":
					continue;
				default:
					i.properties().add(j.m().c(), j.l());
					break;
			}
		}
		return i;
	}
,
	$type: new $.ig.Type('AxisMemberXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResultAxisMember.prototype.$type)])
}, true);

$.ig.util.defType('CellXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = b.q($.ig.XName.prototype.i("CellOrdinal", "")).g();
		var d = (function () { var $ret = new $.ig.OlapResultCell();
$ret.cellOrdinal($.ig.Number.prototype.parseInt(c)); return $ret;}());
		var f = b.h().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			d.properties().add(e.m().c(), e.l());
		}
		return d;
	}
,
	$type: new $.ig.Type('CellXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResultCell.prototype.$type)])
}, true);

$.ig.util.defType('CubeXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.CubeConstants.prototype.c, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.CubeConstants.prototype.l, $.ig.XmlaNamespace.prototype.d)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.CubeConstants.prototype.g, $.ig.XmlaNamespace.prototype.d)));
		var f;
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.CubeConstants.prototype.d, $.ig.XmlaNamespace.prototype.d)));
		switch (g) {
			case $.ig.XmlaConstants.prototype.j:
				f = $.ig.CubeType.prototype.cube;
				break;
			case $.ig.XmlaConstants.prototype.k:
				f = $.ig.CubeType.prototype.dimension;
				break;
			default:
				f = $.ig.CubeType.prototype.unknown;
				break;
		}
		var h = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.CubeConstants.prototype.a, $.ig.XmlaNamespace.prototype.d)));
		var i = $.ig.SerializerUtils.prototype.d(b.g($.ig.XName.prototype.i($.ig.CubeConstants.prototype.f, $.ig.XmlaNamespace.prototype.d)));
		var j = $.ig.SerializerUtils.prototype.d(b.g($.ig.XName.prototype.i($.ig.CubeConstants.prototype.e, $.ig.XmlaNamespace.prototype.d)));
		return (function () { var $ret = new $.ig.Cube();
		$ret.name(c);
		$ret.caption(d);
		$ret.description(e);
		$ret.cubeType(f);
		$ret.catalogName(h);
		$ret.lastProcessed(i);
		$ret.lastUpdated(j); return $ret;}());
	}
,
	$type: new $.ig.Type('CubeXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Cube.prototype.$type)])
}, true);

$.ig.util.defType('DatabaseXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.CatalogConstants.prototype.a, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.CatalogConstants.prototype.b, $.ig.XmlaNamespace.prototype.d)));
		return (function () { var $ret = new $.ig.Catalog();
		$ret.name(c);
		$ret.caption(c);
		$ret.uniqueName(c);
		$ret.description(d); return $ret;}());
	}
,
	$type: new $.ig.Type('DatabaseXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Catalog.prototype.$type)])
}, true);

$.ig.util.defType('DimensionXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.DimensionConstants.prototype.d, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.DimensionConstants.prototype.e, $.ig.XmlaNamespace.prototype.d)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.DimensionConstants.prototype.f, $.ig.XmlaNamespace.prototype.d)));
		var f = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.DimensionConstants.prototype.k, $.ig.XmlaNamespace.prototype.d)));
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.DimensionConstants.prototype.h, $.ig.XmlaNamespace.prototype.d)));
		var h = ($.ig.Number.prototype.parseInt(g));
		return (function () { var $ret = new $.ig.Dimension();
		$ret.name(c);
		$ret.uniqueName(d);
		$ret.caption(e);
		$ret.description(f);
		$ret.dimensionType(h); return $ret;}());
	}
,
	$type: new $.ig.Type('DimensionXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Dimension.prototype.$type)])
}, true);

$.ig.util.defType('FaultError', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_errorCode: null,
	errorCode: function (a) {
		if (arguments.length === 1) {
			this._errorCode = a;
			return a;
		} else {
			return this._errorCode;
		}
	}

, 
	_description: null,
	description: function (a) {
		if (arguments.length === 1) {
			this._description = a;
			return a;
		} else {
			return this._description;
		}
	}

, 
	_source: null,
	source: function (a) {
		if (arguments.length === 1) {
			this._source = a;
			return a;
		} else {
			return this._source;
		}
	}

, 
	_helpFile: null,
	helpFile: function (a) {
		if (arguments.length === 1) {
			this._helpFile = a;
			return a;
		} else {
			return this._helpFile;
		}
	}

, 
	_severity: null,
	severity: function (a) {
		if (arguments.length === 1) {
			this._severity = a;
			return a;
		} else {
			return this._severity;
		}
	}
,
	$type: new $.ig.Type('FaultError', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ErrorXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var b = new $.ig.FaultError();
		var c = a;
		b.errorCode($.ig.SerializerUtils.prototype.b(c.q($.ig.XName.prototype.i("ErrorCode", ""))));
		b.description($.ig.SerializerUtils.prototype.b(c.q($.ig.XName.prototype.i("Description", ""))));
		b.source($.ig.SerializerUtils.prototype.b(c.q($.ig.XName.prototype.i("Source", ""))));
		b.helpFile($.ig.SerializerUtils.prototype.b(c.q($.ig.XName.prototype.i("HelpFile", ""))));
		b.severity($.ig.SerializerUtils.prototype.b(c.q($.ig.XName.prototype.i("Severity", ""))));
		return b;
	}
,
	$type: new $.ig.Type('ErrorXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.FaultError.prototype.$type)])
}, true);

$.ig.util.defType('HierarchyXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.d, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.e, $.ig.XmlaNamespace.prototype.d)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.f, $.ig.XmlaNamespace.prototype.d)));
		var f = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.k, $.ig.XmlaNamespace.prototype.d)));
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.i, $.ig.XmlaNamespace.prototype.d)));
		var h = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.j, $.ig.XmlaNamespace.prototype.d)));
		var i = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.c, $.ig.XmlaNamespace.prototype.d)));
		var j = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.u, $.ig.XmlaNamespace.prototype.d)));
		var k = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.HierarchyConstants.prototype.t, $.ig.XmlaNamespace.prototype.d)));
		var l = (k == null ? 1 : $.ig.Number.prototype.parseInt(k));
		return (function () { var $ret = new $.ig.Hierarchy();
		$ret.name(c);
		$ret.uniqueName(d);
		$ret.caption(e);
		$ret.description(f);
		$ret.defaultMember(g);
		$ret.allMember(h);
		$ret.dimensionUniqueName(i);
		$ret.hierarchyDisplayFolder(j);
		$ret.hierarchyOrigin(l); return $ret;}());
	}
,
	$type: new $.ig.Type('HierarchyXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Hierarchy.prototype.$type)])
}, true);

$.ig.util.defType('LevelXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.e, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.f, $.ig.XmlaNamespace.prototype.d)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.g, $.ig.XmlaNamespace.prototype.d)));
		var f = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.k, $.ig.XmlaNamespace.prototype.d)));
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.c, $.ig.XmlaNamespace.prototype.d)));
		var h = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.d, $.ig.XmlaNamespace.prototype.d)));
		var i = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.h, $.ig.XmlaNamespace.prototype.d)));
		var j = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.i, $.ig.XmlaNamespace.prototype.d)));
		var k = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.r, $.ig.XmlaNamespace.prototype.d)));
		var l = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.LevelConstants.prototype.o, $.ig.XmlaNamespace.prototype.d)));
		return (function () { var $ret = new $.ig.Level();
		$ret.name(c);
		$ret.uniqueName(d);
		$ret.caption(e);
		$ret.description(f);
		$ret.dimensionUniqueName(g);
		$ret.hierarchyUniqueName(h);
		$ret.depth($.ig.Number.prototype.parseInt(i));
		$ret.membersCount($.ig.Number.prototype.parseInt(j));
		$ret.levelOrigin(String.isNullOrEmpty(k) ? 0 : $.ig.Number.prototype.parseInt(k));
		$ret.levelOrderingProperty(l); return $ret;}());
	}
,
	$type: new $.ig.Type('LevelXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Level.prototype.$type)])
}, true);

$.ig.util.defType('MeasureGroupDimensionXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.a, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.c, $.ig.XmlaNamespace.prototype.d)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.d, $.ig.XmlaNamespace.prototype.d)));
		var f = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.f, $.ig.XmlaNamespace.prototype.d)));
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.e, $.ig.XmlaNamespace.prototype.d)));
		var h = g == "ONE" ? $.ig.CardinalityType.prototype.one : $.ig.CardinalityType.prototype.many;
		var i = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.g, $.ig.XmlaNamespace.prototype.d)));
		var j = i == "ONE" ? $.ig.CardinalityType.prototype.one : $.ig.CardinalityType.prototype.many;
		var k = $.ig.SerializerUtils.prototype.c(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.h, $.ig.XmlaNamespace.prototype.d)));
		var l = $.ig.SerializerUtils.prototype.c(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.i, $.ig.XmlaNamespace.prototype.d)));
		var m = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.j, $.ig.XmlaNamespace.prototype.d)));
		var n = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupDimensionConstants.prototype.k, $.ig.XmlaNamespace.prototype.d)));
		return (function () { var $ret = new $.ig.MeasureGroupDimension();
		$ret.catalogName(c);
		$ret.cubeName(d);
		$ret.measureGroupName(e);
		$ret.dimensionUniqueName(f);
		$ret.measureGroupCardinality(h);
		$ret.dimensionCardinality(j);
		$ret.isDimensionVisible(k);
		$ret.isFactDimension(l);
		$ret.dimensionPath(m);
		$ret.dimensionGranularity(n); return $ret;}());
	}
,
	$type: new $.ig.Type('MeasureGroupDimensionXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.MeasureGroupDimension.prototype.$type)])
}, true);

$.ig.util.defType('MeasureGroupXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupConstants.prototype.a, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupConstants.prototype.c, $.ig.XmlaNamespace.prototype.d)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupConstants.prototype.d, $.ig.XmlaNamespace.prototype.d)));
		var f = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupConstants.prototype.f, $.ig.XmlaNamespace.prototype.d)));
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureGroupConstants.prototype.e, $.ig.XmlaNamespace.prototype.d)));
		return (function () { var $ret = new $.ig.MeasureGroup();
		$ret.catalogName(c);
		$ret.cubeName(d);
		$ret.name(e);
		$ret.caption(f);
		$ret.description(g); return $ret;}());
	}
,
	$type: new $.ig.Type('MeasureGroupXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.MeasureGroup.prototype.$type)])
}, true);

$.ig.util.defType('MeasureXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureConstants.prototype.d, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureConstants.prototype.e, $.ig.XmlaNamespace.prototype.d)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureConstants.prototype.f, $.ig.XmlaNamespace.prototype.d)));
		var f = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureConstants.prototype.l, $.ig.XmlaNamespace.prototype.d)));
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureConstants.prototype.r, $.ig.XmlaNamespace.prototype.d)));
		var h = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureConstants.prototype.p, $.ig.XmlaNamespace.prototype.d)));
		var i = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureConstants.prototype.g, $.ig.XmlaNamespace.prototype.d)));
		var j = ($.ig.Number.prototype.parseInt(i));
		var k = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MeasureConstants.prototype.q, $.ig.XmlaNamespace.prototype.d)));
		return (function () { var $ret = new $.ig.Measure();
		$ret.name(c);
		$ret.uniqueName(d);
		$ret.caption(e);
		$ret.description(f);
		$ret.defaultFormatString(g);
		$ret.measureGroupName(h);
		$ret.aggregatorType(j);
		$ret.measureDisplayFolder(k); return $ret;}());
	}
,
	$type: new $.ig.Type('MeasureXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Measure.prototype.$type)])
}, true);

$.ig.util.defType('MemberXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.a, $.ig.XmlaNamespace.prototype.d)));
		var d = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.c, $.ig.XmlaNamespace.prototype.d)));
		var e = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.h, $.ig.XmlaNamespace.prototype.d)));
		var f = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.i, $.ig.XmlaNamespace.prototype.d)));
		var g = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.j, $.ig.XmlaNamespace.prototype.d)));
		var h = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.d, $.ig.XmlaNamespace.prototype.d)));
		var i = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.e, $.ig.XmlaNamespace.prototype.d)));
		var j = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.f, $.ig.XmlaNamespace.prototype.d)));
		var k = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.l, $.ig.XmlaNamespace.prototype.d)));
		var l = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.q, $.ig.XmlaNamespace.prototype.d)));
		var m = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.g, $.ig.XmlaNamespace.prototype.d)));
		var n = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.m, $.ig.XmlaNamespace.prototype.d)));
		var o = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.o, $.ig.XmlaNamespace.prototype.d)));
		var p = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.v, $.ig.XmlaNamespace.prototype.d)));
		var q = $.ig.SerializerUtils.prototype.a(b.g($.ig.XName.prototype.i($.ig.MemberConstants.prototype.n, $.ig.XmlaNamespace.prototype.d)));
		return (function () { var $ret = new $.ig.Member();
		$ret.catalogName(c);
		$ret.cubeName(d);
		$ret.dimensionUniqueName(h);
		$ret.hierarchyUniqueName(i);
		$ret.levelUniqueName(j);
		$ret.levelDepth($.ig.Number.prototype.parseInt(m));
		$ret.name(e);
		$ret.uniqueName(f);
		$ret.memberType($.ig.Number.prototype.parseInt(g));
		$ret.caption(k);
		$ret.childrenCardinality($.ig.Number.prototype.parseInt(n));
		$ret.description(l);
		$ret.parentUniqueName(o);
		$ret.scope($.ig.util.toNullable($.ig.Number.prototype.$type, p == null ? null : $.ig.Number.prototype.parseInt(p)));
		$ret.parentLevel(String.isNullOrEmpty(q) ? 0 : $.ig.Number.prototype.parseInt(q)); return $ret;}());
	}
,
	$type: new $.ig.Type('MemberXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Member.prototype.$type)])
}, true);

$.ig.util.defType('ResultXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		if (a.c() != $.ig.XmlNodeType.prototype.element) {
			return null;
		}
		var b = a;
		var c = b.m().d();
		switch (c) {
			case $.ig.XmlaNamespace.prototype.e:
				return (function () { var $ret = new $.ig.OlapResult();
				$ret.isEmpty(true); return $ret;}());
			case $.ig.XmlaNamespace.prototype.c:
				var d = b.g($.ig.XName.prototype.i("OlapInfo", $.ig.XmlaNamespace.prototype.c));
				var e = b.g($.ig.XName.prototype.i("Axes", $.ig.XmlaNamespace.prototype.c));
				var f = new $.ig.ArraySerializer();
				var g = f.b($.ig.OlapResultAxis.prototype.$type, e, $.ig.XName.prototype.i("Axis", $.ig.XmlaNamespace.prototype.c), new $.ig.AxisXmlTypeSerializer());
				var h = b.g($.ig.XName.prototype.i("CellData", $.ig.XmlaNamespace.prototype.c));
				var i = f.b($.ig.OlapResultAxis.prototype.$type, h, $.ig.XName.prototype.i("Cell", $.ig.XmlaNamespace.prototype.c), new $.ig.CellXmlTypeSerializer());
				return (function () { var $ret = new $.ig.OlapResult();
				$ret.axes(g);
				$ret.cells(i); return $ret;}());
		}
		return null;
	}
,
	$type: new $.ig.Type('ResultXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResult.prototype.$type)])
}, true);

$.ig.util.defType('SerializerUtils', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a) {
		if (a != null) {
			return a.l();

		} else {
			return null;
		}
	}

, 
	b: function (a) {
		if (a != null) {
			return a.g();

		} else {
			return null;
		}
	}

, 
	c: function (a) {
		var b = $.ig.SerializerUtils.prototype.a(a).toLowerCase();
		return b == "true";
	}

, 
	d: function (a) {
		if (a != null && !String.isNullOrEmpty(a.l())) {
			return $.ig.SerializerUtils.prototype.e(a.l());

		} else {
			return $.ig.SerializerUtils.prototype.f();
		}
	}

, 
	e: function (a) {
		var dateString_ = a;
		var b;
		b = (function (text) {
	var match = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.*)$/.exec(text);
	if (!match) {
		throw 'Invalid textual date representation.';
	}

    var year = parseInt(match[1], 10);
    var month = parseInt(match[2], 10) - 1; //javascript months start from 0
    var day = parseInt(match[3], 10);
    var hours = parseInt(match[4], 10);
    var minutes = parseInt(match[5], 10);
    var seconds = parseInt(match[6], 10);
	
	return new Date(year, month, day, hours, minutes, seconds);
})(dateString_);;
		return b;
	}

, 
	f: function () {
		var a;
		a = new Date(2000, 0, 1);
		return a;
	}
,
	$type: new $.ig.Type('SerializerUtils', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaConstants', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('XmlaConstants', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaSoapFault', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('XmlaSoapFault', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaSoapFaultXmlTypeSerializer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a) {
		var $self = this;
		var b = a;
		var c = new $.ig.XmlaSoapFault();
		var e = b.h().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			switch (d.m().c()) {
				case "faultcode":
					c.e($.ig.SerializerUtils.prototype.a(d));
					break;
				case "faultstring":
					c.f($.ig.SerializerUtils.prototype.a(d));
					break;
				case "faultactor":
					c.g($.ig.SerializerUtils.prototype.a(d));
					break;
			}
		}
		var f = b.g($.ig.XName.prototype.i("detail", ""));
		if (f != null) {
			var g = f.i($.ig.XName.prototype.i("Error", ""));
			var h = new $.ig.List$1($.ig.FaultError.prototype.$type, 0);
			var i = new $.ig.ErrorXmlTypeSerializer();
			var k = g.getEnumerator();
			while (k.moveNext()) {
				var j = k.current();
				var l = i.deserialize(j);
				h.add(l);
			}
			c.h((function () { var $ret = new $.ig.FaultDetail();
			$ret.b(h.x()); return $ret;}()));
		}
		return c;
	}
,
	$type: new $.ig.Type('XmlaSoapFaultXmlTypeSerializer', $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.XmlaSoapFault.prototype.$type)])
}, true);


$.ig.util.defType('XmlaSoapMethodResult', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	b: null
, 
	returnElement: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			return a;
		} else {
			return this.b;
		}
	}

, 
	_sessionId: null,
	sessionId: function (a) {
		if (arguments.length === 1) {
			this._sessionId = a;
			return a;
		} else {
			return this._sessionId;
		}
	}
,
	$type: new $.ig.Type('XmlaSoapMethodResult', $.ig.Object.prototype.$type, [$.ig.IXmlaMethodResult.prototype.$type])
}, true);

$.ig.util.defType('DiscoverResponseResult', 'XmlaSoapMethodResult', {
	init: function () {

		$.ig.XmlaSoapMethodResult.prototype.init.call(this);

	},
	$type: new $.ig.Type('DiscoverResponseResult', $.ig.XmlaSoapMethodResult.prototype.$type)
}, true);

$.ig.util.defType('RequestCompletedEventArgs$1', 'AsyncCompletedEventArgs', {
	$t: null, 
	e: null
, 
		init: function ($t, a, b, c, d) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.AsyncCompletedEventArgs.prototype.init.call(this, b, c, d);
						this.e = a;
		}
, 
	result: function () {
			$.ig.AsyncCompletedEventArgs.prototype.d.call(this);
			return this.e;
	}
,
	$type: new $.ig.Type('RequestCompletedEventArgs$1', $.ig.AsyncCompletedEventArgs.prototype.$type)
}, true);

$.ig.util.defType('ExecuteResponseResult', 'XmlaSoapMethodResult', {
	init: function () {

		$.ig.XmlaSoapMethodResult.prototype.init.call(this);

	},
	$type: new $.ig.Type('ExecuteResponseResult', $.ig.XmlaSoapMethodResult.prototype.$type)
}, true);

$.ig.util.defType('FaultDetail', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_b: null,
	b: function (a) {
		if (arguments.length === 1) {
			this._b = a;
			return a;
		} else {
			return this._b;
		}
	}
,
	$type: new $.ig.Type('FaultDetail', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IXmlaSoapMethod', 'Object', {

		$type: new $.ig.Type('IXmlaSoapMethod', null)
}, true);

$.ig.util.defType('XmlaNamespace', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('XmlaNamespace', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaQueryProperty', 'Object', {

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
		}
, 
		init1: function (initNumber, a, b) {


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
	toString: function () {
		return String.concat5(this.c(), " = ", this.d());
	}
,
	$type: new $.ig.Type('XmlaQueryProperty', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaPropertiesCollection', 'Object', {
	a: null, 
	b: null, 
	c: null
, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.Dictionary$2(String, $.ig.XmlaQueryProperty.prototype.$type, 0);
				this.b = new $.ig.Dictionary$2(String, $.ig.Number.prototype.$type, 0);
				this.c = new $.ig.List$1($.ig.XmlaQueryProperty.prototype.$type, 0);
		}
, 
	d: function (a, b) {
		var $self = this;
		return {
			ret: (function () { var $ret = $self.a.tryGetValue(a, b); b = $ret.value; return $ret.ret; }()),
			value: b
		};
		return {
			value: b
		};
	}

, 
	contains: function (a) {
		return this.a.containsKey(a);
	}

, 
	indexOf: function (a) {
		return this.c.indexOf(a);
	}

, 
	insert: function (a, b) {
		this.a.add(b.c(), b);
		this.c.insert(a, b);
	}

, 
	removeAt: function (a) {
		if (a < this.c.count()) {
			var b = this.c.item(a);
			if (this.a.remove(b.c())) {
				this.c.removeAt(a);
			}
		}
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			var c = this.c.item(b);
			this.a.remove(c.c());
			this.a.add(a.c(), a);
			this.c.item(b, a);
			return a;
		} else {
			return this.c.item(b);
		}
	}

, 
	add: function (a) {
		this.a.add(a.c(), a);
		this.c.add(a);
	}

, 
	clear: function () {
		this.c.clear();
		this.a.clear();
	}

, 
	contains1: function (a) {
		return this.c.contains(a);
	}

, 
	e: function (a, b) {
		this.c.copyTo(a, b);
	}

, 
	count: function () {
			return this.c.count();
	}

, 
	isReadOnly: function () {
			return this.c.isReadOnly();
	}

, 
	remove: function (a) {
		if (this.c.remove(a)) {
			return this.a.remove(a.c());
		}
		return false;
	}

, 
	getEnumerator: function () {
		return this.c.getEnumerator();
	}

, 
	isFixedSize: function () {
			return false;
	}




, 
	isSynchronized: function () {
			return (this.c).isSynchronized();
	}

, 
	syncRoot: function () {
			return (this.c).syncRoot();
	}
,
	$type: new $.ig.Type('XmlaPropertiesCollection', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize($.ig.XmlaQueryProperty.prototype.$type), $.ig.IList.prototype.$type])
}, true);

$.ig.util.defType('XmlaSoapMessageBuilder', 'Object', {
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
	j: function () {
		if (this.g() == null) {
			throw new $.ig.InvalidOperationException(1, "XmlaMethod is not specified.");
		}
		var a = $.ig.XNamespace.prototype.d($.ig.XmlaSoapMessageBuilder.prototype.e);
		this.g().construct(a);
		var b = this.k();
		return b.toString();
	}

, 
	k: function () {
		var a = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMessageBuilder.prototype.a, $.ig.XmlaSoapMessageBuilder.prototype.e));
		this.l(a);
		this.m(a);
		return a;
	}

, 
	l: function (a) {
		var b = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMessageBuilder.prototype.b, a.m().e().c()));
		a.k(b);
		var d = this.g().headers().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			b.k(c);
		}
	}

, 
	m: function (a) {
		var b = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMessageBuilder.prototype.c, a.m().e().c()));
		a.k(b);
		var c = new $.ig.XElement(1, $.ig.XName.prototype.i(this.g().name(), $.ig.XmlaNamespace.prototype.b));
		b.k(c);
		var e = this.g().parameters().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			c.k(d);
		}
	}
,
	$type: new $.ig.Type('XmlaSoapMessageBuilder', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaSoapMethod', 'Object', {
	c: null, 
	d: null, 
	e: null, 
	f: null, 
	g: null
, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.e = new $.ig.List$1($.ig.XElement.prototype.$type, 0);
				this.f = new $.ig.List$1($.ig.XElement.prototype.$type, 0);
				this.c = new $.ig.ReadOnlyCollection$1($.ig.XElement.prototype.$type, 1, this.e);
				this.d = new $.ig.ReadOnlyCollection$1($.ig.XElement.prototype.$type, 1, this.f);
				this.g = new $.ig.XmlaPropertiesCollection();
		}
, 
	h: function () {
			return this.g;
	}

, 
	_name: null,
	name: function () {
		return this._name;	}

, 
	parameters: function () {
			return this.c;
	}

, 
	headers: function () {
			return this.d;
	}

, 
	i: function () {
			return this.e;
	}

, 
	j: function () {
			return this.f;
	}

, 
	construct: function (a) {
	}

, 
	mergeProperties: function (a) {
		var $self = this;
		if (a == null) {
			return;
		}
		var c = a.getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			var d;
			if ((function () { var $ret = $self.h().d(b.c(), d); d = $ret.value; return $ret.ret; }())) {
				d.d(b.d());

			} else {
				this.h().add(b);
			}
		}
	}
,
	$type: new $.ig.Type('XmlaSoapMethod', $.ig.Object.prototype.$type, [$.ig.IXmlaSoapMethod.prototype.$type])
}, true);

$.ig.util.defType('XmlaSoapMethodDiscover', 'XmlaSoapMethod', {
	s: null
, 
		init: function (a) {


			$.ig.XmlaSoapMethod.prototype.init.call(this);
						this.y($.ig.XmlaSoapMessageHeader.prototype.none);
				this.x(a);
				this.s = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 0);
		}
, 
	w: function () {
			return this.s;
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
	name: function () {
			return $.ig.XmlaSoapMethodDiscover.prototype.n;
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
	construct: function (a) {
		var b = $.ig.XNamespace.prototype.d($.ig.XmlaNamespace.prototype.b);
		var c = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodDiscover.prototype.o, b.c()));
		c.l(this.x());
		var d = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodDiscover.prototype.a, $.ig.XmlaNamespace.prototype.b));
		var e = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodDiscover.prototype.b, d.m().e().c()));
		d.k(e);
		var f = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodDiscover.prototype.p, $.ig.XmlaNamespace.prototype.b));
		var g = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodDiscover.prototype.q, f.m().e().c()));
		f.k(g);
		var i = this.h().getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			e.k(new $.ig.XElement(2, $.ig.XName.prototype.i(h.c(), $.ig.XmlaNamespace.prototype.b), h.d()));
		}
		var k = this.s.getEnumerator();
		while (k.moveNext()) {
			var j = k.current();
			g.k(new $.ig.XElement(2, $.ig.XName.prototype.i(j.c(), ""), j.d()));
		}
		this.i().add(c);
		this.i().add(f);
		this.i().add(d);
	}
,
	$type: new $.ig.Type('XmlaSoapMethodDiscover', $.ig.XmlaSoapMethod.prototype.$type)
}, true);

$.ig.util.defType('XmlaSoapMethodExecute', 'XmlaSoapMethod', {

		init: function (a) {


			$.ig.XmlaSoapMethod.prototype.init.call(this);
						this.r(a);
		}
, 
	name: function () {
			return $.ig.XmlaSoapMethodExecute.prototype.n;
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
	construct: function (a) {
		var b = $.ig.XNamespace.prototype.d($.ig.XmlaNamespace.prototype.b);
		var c = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodExecute.prototype.o, b.c()));
		var d = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodExecute.prototype.p, b.c()));
		d.l(this.r());
		c.k(d);
		var e = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodExecute.prototype.a, $.ig.XmlaNamespace.prototype.b));
		var f = new $.ig.XElement(1, $.ig.XName.prototype.i($.ig.XmlaSoapMethodExecute.prototype.b, e.m().e().c()));
		e.k(f);
		var h = this.h().getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			f.k(new $.ig.XElement(2, $.ig.XName.prototype.i(g.c(), $.ig.XmlaNamespace.prototype.b), g.d()));
		}
		this.i().add(c);
		this.i().add(e);
	}
,
	$type: new $.ig.Type('XmlaSoapMethodExecute', $.ig.XmlaSoapMethod.prototype.$type)
}, true);

$.ig.util.defType('XmlaSoapWebClient', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null
, 
		staticInit: function () {


						$.ig.XmlaSoapWebClient.prototype.a = new $.ig.List$1(String, 0);
		},
	$type: new $.ig.Type('XmlaSoapWebClient', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaSoapWebClient$1', 'XmlaSoapWebClient', {
	$t: null, 
	b: null, 
	c: null
, 
		init: function ($t, a, b) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.XmlaSoapWebClient.prototype.init.call(this);
						this.b = new $.ig.WebClient();
				this.b.e(b);
				this.b.uploadStringCompleted = $.ig.Delegate.prototype.combine(this.b.uploadStringCompleted, this.t.on(this));
				this.h(a);
		}, 
	requestCompleted: null
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
	i: function () {
			return this.c;
	}

, 
	q: function (a) {
		this.r(a, null);
	}

, 
	r: function (a, b) {
		var c = new $.ig.XmlaSoapMessageBuilder();
		c.g(a);
		var d = c.j();
		if (this.g() != null) {
			this.b.g(this.g());

		} else {
			this.b.g(null);
		}
		this.b.f().item("Content-Type", "text/xml");
		this.b.p(this.h(), "POST", d, b);
	}

, 
	s: function (a) {
		if (this.requestCompleted != null) {
			this.requestCompleted(this, a);
		}
	}

, 
	t: function (a, b) {
		this.c = true;
		this.u(b);
	}

, 
	u: function (a) {
		var b = null;
		var c = null;
		if (!a.cancelled() && a.error() == null) {
			var d = $.ig.XDocument.prototype.l(a.result());
			var e = d.g($.ig.XName.prototype.i("Envelope", "http://schemas.xmlsoap.org/soap/envelope/"));
			var f = e.g($.ig.XName.prototype.i("Body", "http://schemas.xmlsoap.org/soap/envelope/"));
			var g = f.g($.ig.XName.prototype.i("Fault", "http://schemas.xmlsoap.org/soap/envelope/"));
			if (g != null) {
				var h = new $.ig.XmlaSoapFaultXmlTypeSerializer();
				var i = h.deserialize(g);
				c = new $.ig.FaultException$1($.ig.XmlaSoapFault.prototype.$type, i, new $.ig.FaultReason(i.f()), new $.ig.FaultCode(i.e()), null);

			} else {
				if (this.$t == $.ig.DiscoverResponseResult.prototype.$type) {
					var j = f.g($.ig.XName.prototype.i("DiscoverResponse", $.ig.XmlaNamespace.prototype.b));
					var k = j.g($.ig.XName.prototype.i("return", $.ig.XmlaNamespace.prototype.b));
					var l = k.g($.ig.XName.prototype.i("root", $.ig.XmlaNamespace.prototype.d));
					var m = new $.ig.DiscoverResponseResult();
					m.returnElement(l);
					b = m;
				}
				if (this.$t == $.ig.ExecuteResponseResult.prototype.$type) {
					var n = f.g($.ig.XName.prototype.i("ExecuteResponse", $.ig.XmlaNamespace.prototype.b));
					var o = n.g($.ig.XName.prototype.i("return", $.ig.XmlaNamespace.prototype.b));
					var p = o.g($.ig.XName.prototype.i("root", $.ig.XmlaNamespace.prototype.c));
					var q = new $.ig.ExecuteResponseResult();
					q.returnElement(p);
					b = q;
				}
			}
		}
		var r = a.error() != null ? a.error() : c;
		var s = new $.ig.RequestCompletedEventArgs$1(this.$t, b, r, a.cancelled(), a.userState());
		this.s(s);
	}
,
	$type: new $.ig.Type('XmlaSoapWebClient$1', $.ig.XmlaSoapWebClient.prototype.$type)
}, true);


$.ig.util.defType('IMdxExpression', 'Object', {

		$type: new $.ig.Type('IMdxExpression', null)
}, true);

$.ig.util.defType('IMdxElement', 'Object', {

		$type: new $.ig.Type('IMdxElement', null, [$.ig.IMdxExpression.prototype.$type])
}, true);

$.ig.util.defType('IAxisFilterElement', 'Object', {

		$type: new $.ig.Type('IAxisFilterElement', null, [$.ig.IMdxElement.prototype.$type])
}, true);

$.ig.util.defType('IMdxAxis', 'Object', {

		$type: new $.ig.Type('IMdxAxis', null, [$.ig.IMdxExpression.prototype.$type])
}, true);



$.ig.util.defType('IMdxCollectionElement', 'Object', {

		$type: new $.ig.Type('IMdxCollectionElement', null, [$.ig.IMdxElement.prototype.$type])
}, true);


$.ig.util.defType('IMdxExtendedFilterInfo', 'Object', {

		$type: new $.ig.Type('IMdxExtendedFilterInfo', null)
}, true);

$.ig.util.defType('IMdxFilterInfo', 'Object', {

		$type: new $.ig.Type('IMdxFilterInfo', null)
}, true);



$.ig.util.defType('IMdxSet', 'Object', {

		$type: new $.ig.Type('IMdxSet', null, [$.ig.IMdxExpression.prototype.$type])
}, true);

$.ig.util.defType('MdxAxis', 'Object', {
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null, 
	f: null
, 
		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}

			this.f = (function () { var $ret = new Array();
			$ret.add("COLUMNS");
			$ret.add("ROWS");
			$ret.add("PAGES"); return $ret;}());

			$.ig.MdxAxis.prototype.init1.call(this, 1, a, new $.ig.MdxSettings());
		}
, 
		init1: function (initNumber, a, b) {

			var $self = this;
			this.f = (function () { var $ret = new Array();
			$ret.add("COLUMNS");
			$ret.add("ROWS");
			$ret.add("PAGES"); return $ret;}());

			$.ig.Object.prototype.init.call(this);
						this.axisIndex(a);
				this.h(b != null ? b : new $.ig.MdxSettings());
				this.a = new $.ig.List$1($.ig.IMdxSet.prototype.$type, 0);
				this.b = new $.ig.ReadOnlyCollection$1($.ig.IMdxSet.prototype.$type, 1, this.a);
		}
, 
	axisIndex: function (a) {
		if (arguments.length === 1) {
			if (this.e != a) {
				this.e = a;
				this.c = false;
			}
			return a;
		} else {
			return this.e;
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
	i: function () {
			return this.b;
	}

, 
	mdxExpression: function () {
			if (!this.c) {
				this.d = this.m();
				this.c = true;
			}
			return this.d;
	}

, 
	rebuildExpression: function () {
		this.d = this.m();
		this.c = true;
	}

, 
	getMdxSets: function () {
		var $self = this;
		var $iter = function () { return function () { return {
			$state: 0,
			$this: $self,
			$current: null,
			$a : null,
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
							this.$a = this.$this.b.getEnumerator();
							this.$state = 1;
							break;
						case 1:
							this.$state = 4;
							break;
						case 2:
							this.$current =  this.$a.current();
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$a.moveNext()) {
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
		return new $.ig.GenericEnumerable$1($.ig.IMdxSet.prototype.$type, $iter);
	}

, 
	addSet: function (a) {
		this.a.add(a);
		this.c = false;
	}

, 
	m: function () {
		var a = new $.ig.StringBuilder();
		var b = false;
		var d = this.i().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			if (!c.isEnabled()) {
				continue;
			}
			if (b) {
				a.d(",");
				a.d($.ig.Environment.prototype.a());
			}
			a.d(c.mdxExpression());
			b = true;
		}
		if (this.i().count() > 1) {
			a.i(0, "{");
			a.d("}");
		}
		var e = this.h() != null ? this.h() : new $.ig.MdxSettings();
		this.n(a, e);
		this.o(a, e);
		this.p(a, e);
		this.q(a);
		return a.toString();
	}

, 
	n: function (a, b) {
		var c = this.axisIndex() == 0 ? b.p() : b.o();
		if (c) {
			a.i(0, "Distinct(");
			a.d(")");
		}
	}

, 
	o: function (a, b) {
		var c = this.axisIndex() == 0 ? b.r() : b.q();
		if (c) {
			a.i(0, $.ig.Environment.prototype.a());
			a.i(0, "NON EMPTY");
		}
	}

, 
	p: function (a, b) {
		var c = this.axisIndex() == 0 ? b.t() : b.s();
		if (c) {
			a.d($.ig.Environment.prototype.a());
			a.d("DIMENSION PROPERTIES");
			var d = this.axisIndex() == 0 ? b.v() : b.u();
			var e = false;
			var g = d.getEnumerator();
			while (g.moveNext()) {
				var f = g.current();
				a.d($.ig.Environment.prototype.a());
				if (e) {
					a.d(",");
				}
				a.d(f);
				e = true;
			}
		}
	}

, 
	q: function (a) {
		if (this.axisIndex() < 2) {
			a.d($.ig.Environment.prototype.a());
			a.d(String.concat2("ON ", this.f[this.axisIndex()]));
		}
	}
,
	$type: new $.ig.Type('MdxAxis', $.ig.Object.prototype.$type, [$.ig.IMdxAxis.prototype.$type])
}, true);

$.ig.util.defType('MdxAxisFilterElement', 'Object', {
	a: null, 
	b: null
, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.b = new $.ig.List$1($.ig.IMdxElement.prototype.$type, 0);
				this.singleFilterElements(new $.ig.ReadOnlyCollection$1($.ig.IMdxElement.prototype.$type, 1, this.b));
				this.a = new $.ig.MdxElementCollectionElement();
		}
, 
	mdxExpression: function () {
			var $self = this;
			if (this.a.collectionElements().count() > 1) {
				this.a.f((function () { var $ret = new Array();
				$ret.add("(");
				$ret.add(")"); return $ret;}()));
			}
			return this.a.mdxExpression();
	}

, 
	_singleFilterElements: null,
	singleFilterElements: function (a) {
		if (arguments.length === 1) {
			this._singleFilterElements = a;
			return a;
		} else {
			return this._singleFilterElements;
		}
	}

, 
	filterCollection: function () {
			return this.a.collectionElements();
	}

, 
	rebuildExpression: function () {
		this.a.rebuildExpression();
	}

, 
	addFilterPart: function (a, b) {
		if (a.collectionElements().count() > 0) {
			if (a.collectionElements().count() == 1 && b) {
				this.b.add(a.collectionElements().item(0));
				return;
			}
			this.a.addElement(a);
		}
	}

, 
	elementType: function () {
			return $.ig.MdxElementType.prototype.filter;
	}
,
	$type: new $.ig.Type('MdxAxisFilterElement', $.ig.Object.prototype.$type, [$.ig.IAxisFilterElement.prototype.$type])
}, true);

$.ig.util.defType('MdxCalculatedMembersCache', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

		this.a = new $.ig.List$1(String, 0);
		this.b = new $.ig.Dictionary$2(String, String, 0);
	}, 
	a: null, 
	b: null
, 
	c: function (a) {
		var b = new $.ig.StringBuilder();
		var d = a.e().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			$.ig.MdxCalculatedMembersCache.prototype.g(b, c.c(), c.d());
		}
		return b.toString();
	}

, 
	d: function (a, b, c) {
		if (!this.a.contains(a)) {
			this.a.add(a);
		}
		if (!this.b.containsKey(b)) {
			this.b.add(b, c);
		}
	}

, 
	e: function () {
		var $self = this;
		var $iter = function () { return function () { return {
			$state: 0,
			$this: $self,
			$current: null,
			$a : null,
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
							this.$a = this.$this.b.getEnumerator();
							this.$state = 1;
							break;
						case 1:
							this.$state = 4;
							break;
						case 2:
							this.$current =  this.$a.current();
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$a.moveNext()) {
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
		return new $.ig.GenericEnumerable$1($.ig.KeyValuePair$2.prototype.$type.specialize(String, String), $iter);
	}

, 
	f: function (a) {
		return this.a.contains(a);
	}

, 
	g: function (a, b, c) {
		a.d(String.concat7("MEMBER ", b, " AS", $.ig.Environment.prototype.a()));
		a.d(c);
		a.d($.ig.Environment.prototype.a());
	}
,
	$type: new $.ig.Type('MdxCalculatedMembersCache', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MdxElement', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.elementType($.ig.MdxElementType.prototype.userDefined);
		}
, 
	_mdxExpression: null,
	mdxExpression: function () {
		return this._mdxExpression;	}

, 
	_elementType: null,
	elementType: function (a) {
		if (arguments.length === 1) {
			this._elementType = a;
			return a;
		} else {
			return this._elementType;
		}
	}

, 
	_sourceItemExpression: null,
	sourceItemExpression: function (a) {
		if (arguments.length === 1) {
			this._sourceItemExpression = a;
			return a;
		} else {
			return this._sourceItemExpression;
		}
	}

, 
	rebuildExpression: function () {
	}
,
	$type: new $.ig.Type('MdxElement', $.ig.Object.prototype.$type, [$.ig.IMdxItemElement.prototype.$type])
}, true);

$.ig.util.defType('MdxSingleElement', 'MdxElement', {

		init: function (initNumber, a, b, c) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.MdxSingleElement.prototype.init1.call(this, 1, a, b, c, $.ig.MdxElementType.prototype.member);
		}
, 
		init1: function (initNumber, a, b, c, d) {


			$.ig.MdxElement.prototype.init.call(this);
						this.h(c);
				switch (d) {
					case $.ig.MdxElementType.prototype.member:
					case $.ig.MdxElementType.prototype.calculated:
						this.sourceItemExpression(a);
						this.g(b);
						this.elementType(d);
						break;
					default:
						throw new $.ig.ArgumentException(1, "Element type could be MdxElementType.Member or MdxElementType.Calculated", "elementType");
				}
		}
, 
	mdxExpression: function () {
			return this.sourceItemExpression();
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
	$type: new $.ig.Type('MdxSingleElement', $.ig.MdxElement.prototype.$type)
}, true);

$.ig.util.defType('MdxDimensionMember', 'MdxSingleElement', {

		init: function (a, b, c, d, e) {


			$.ig.MdxSingleElement.prototype.init.call(this, a, b, c);
						this.o(d);
				this.p(e);
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
	$type: new $.ig.Type('MdxDimensionMember', $.ig.MdxSingleElement.prototype.$type)
}, true);

$.ig.util.defType('MdxChildrenCollectionElement', 'MdxDimensionMember', {

		init: function (a, b, c, d, e) {


			$.ig.MdxDimensionMember.prototype.init.call(this, a, b, c, d, e);
		}
, 
	mdxExpression: function () {
			return String.concat2($.ig.MdxElement.prototype.sourceItemExpression.call(this), ".Children");
	}
,
	$type: new $.ig.Type('MdxChildrenCollectionElement', $.ig.MdxDimensionMember.prototype.$type)
}, true);


$.ig.util.defType('MdxElementCollectionElement', 'Object', {
	a: null, 
	b: null, 
	c: null, 
	d: null
, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.List$1($.ig.IMdxElement.prototype.$type, 0);
				this.collectionElements(new $.ig.ReadOnlyCollection$1($.ig.IMdxElement.prototype.$type, 1, this.a));
		}
, 
	f: function (a) {
		if (arguments.length === 1) {
			if (this.d != a) {
				this.b = false;
				this.d = a;
			}
			return a;
		} else {
			return this.d;
		}
	}

, 
	_collectionElements: null,
	collectionElements: function (a) {
		if (arguments.length === 1) {
			this._collectionElements = a;
			return a;
		} else {
			return this._collectionElements;
		}
	}

, 
	elementType: function () {
			return $.ig.MdxElementType.prototype.collection;
	}

, 
	mdxExpression: function () {
			if (!this.b) {
				this.c = this.j();
				this.b = true;
			}
			return this.c;
	}

, 
	rebuildExpression: function () {
		this.c = this.j();
		this.b = true;
	}

, 
	addElement: function (a) {
		var $self = this;
		this.a.add(a);
		if (this.collectionElements().count() > 1) {
			this.f((function () { var $ret = new Array();
			$ret.add("{");
			$ret.add("}"); return $ret;}()));
		}
		this.b = false;
	}

, 
	j: function () {
		if (this.collectionElements().count() == 0) {
			return String.empty();
		}
		var a = new $.ig.StringBuilder();
		var b = false;
		var d = this.collectionElements().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			if (b) {
				a.d(",");
				a.d($.ig.Environment.prototype.a());
			}
			a.d(c.mdxExpression());
			b = true;
		}
		if (this.f() != null && this.f().length == 2) {
			a.i(0, this.f()[0]);
			a.d(this.f()[1]);
		}
		return a.toString();
	}
,
	$type: new $.ig.Type('MdxElementCollectionElement', $.ig.Object.prototype.$type, [$.ig.IMdxCollectionElement.prototype.$type])
}, true);

$.ig.util.defType('MdxLevelMembersElement', 'MdxSingleElement', {

		init: function (a, b, c) {


			$.ig.MdxSingleElement.prototype.init.call(this, a, b, c);
		}
, 
	mdxExpression: function () {
			return String.concat2(this.sourceItemExpression(), ".MEMBERS");
	}
,
	$type: new $.ig.Type('MdxLevelMembersElement', $.ig.MdxSingleElement.prototype.$type)
}, true);

$.ig.util.defType('MdxQueryBuilder', 'Object', {
	a: null
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


			$.ig.MdxQueryBuilder.prototype.init1.call(this, 1, new $.ig.MdxSettings());
		}
, 
		init1: function (initNumber, a) {


			$.ig.Object.prototype.init.call(this);
						this.b(a);
		}
, 
	b: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			return a;
		} else {
			if (this.a == null) {
				this.a = new $.ig.MdxSettings();
			}
			return this.a;
		}
	}

, 
	e: function (a, b, c, d, e) {
		var f = c;
		var g = this.f(a, b, f, d);
		var h = this.j(f);
		var i = this.g(f, e);
		var j = new $.ig.StringBuilder();
		if (!String.isNullOrEmpty(g)) {
			j.d(String.concat2("WITH", $.ig.Environment.prototype.a()));
		}
		j.d(g);
		j.d("SELECT");
		j.d($.ig.Environment.prototype.a());
		if (a != null) {
			j.d(a.mdxExpression());
		}
		if (b != null) {
			if (a == null) {
				b.axisIndex(0);

			} else {
				j.d(String.concat2(",", $.ig.Environment.prototype.a()));
			}
			j.d(b.mdxExpression());
		}
		j.d($.ig.Environment.prototype.a());
		j.d(i);
		if (!String.isNullOrEmpty(h)) {
			j.d($.ig.Environment.prototype.a());
			j.d(h);
		}
		var k = j.toString();
		return k;
	}

, 
	f: function (a, b, c, d) {
		return $.ig.MdxCalculatedMembersCache.prototype.c(d);
	}

, 
	g: function (a, b) {
		var c = String.concat7("FROM ", "[", b, "]");
		c = this.i(c, a.filtersFilter());
		if (a.columnsFilter() != null) {
			c = this.i(c, a.columnsFilter(), a.rowsFilter());

		} else {
			c = this.i(c, a.rowsFilter());
		}
		var d = $.ig.util.cast($.ig.IMdxExtendedFilterInfo.prototype.$type, a);
		if (d != null) {
			c = this.h(c, d);
		}
		return c;
	}

, 
	h: function (a, b) {
		if (b.filterElements() != null && b.filterElements().count() > 0) {
			var d = b.filterElements().getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				var e = new $.ig.StringBuilder();
				e.i(0, String.concat("FROM", $.ig.Environment.prototype.a(), "(", $.ig.Environment.prototype.a(), "SELECT", $.ig.Environment.prototype.a()));
				e.d(String.concat5(c.mdxExpression(), " ON COLUMNS", $.ig.Environment.prototype.a()));
				e.d(a);
				e.d(String.concat2(")", $.ig.Environment.prototype.a()));
				a = e.toString();
			}
		}
		return a;
	}

, 
	i: function (a, b, c) {
		if (b == null || b.filterCollection().count() == 0) {
			return a;
		}
		var d = new $.ig.StringBuilder();
		d.d("FROM");
		d.d($.ig.Environment.prototype.a());
		d.d("(");
		d.d($.ig.Environment.prototype.a());
		d.d("SELECT");
		d.d($.ig.Environment.prototype.a());
		d.d(b.mdxExpression());
		d.d(" ON COLUMNS");
		if (c != null && c.filterCollection().count() > 0) {
			d.d($.ig.Environment.prototype.a());
			d.d(", ");
			d.d(c.mdxExpression());
			d.d(" ON ROWS");
		}
		d.d($.ig.Environment.prototype.a());
		d.d(a);
		d.d($.ig.Environment.prototype.a());
		d.d(")");
		return d.toString();
	}

, 
	j: function (a) {
		var $self = this;
		var b = new $.ig.MdxElementCollectionElement();
		if (a.measureFilter() != null && a.measureFilter().singleFilterElements().count() == 1) {
			b.addElement(a.measureFilter().singleFilterElements().item(0));
		}
		if (a.filtersFilter() != null) {
			var d = a.filtersFilter().singleFilterElements().getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				b.addElement(c);
			}
		}
		if (b.collectionElements().count() == 0) {
			return String.empty();
		}
		b.f((function () { var $ret = new Array();
		$ret.add("(");
		$ret.add(")"); return $ret;}()));
		return String.concat2("WHERE ", b.mdxExpression());
	}
,
	$type: new $.ig.Type('MdxQueryBuilder', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MdxSet', 'Object', {
	a: null, 
	b: null, 
	c: null, 
	d: null
, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.List$1($.ig.IMdxElement.prototype.$type, 0);
				this.b = new $.ig.ReadOnlyCollection$1($.ig.IMdxElement.prototype.$type, 1, this.a);
				this.isEnabled(true);
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
	_isEnabled: null,
	isEnabled: function (a) {
		if (arguments.length === 1) {
			this._isEnabled = a;
			return a;
		} else {
			return this._isEnabled;
		}
	}

, 
	h: function () {
			return this.b;
	}

, 
	mdxExpression: function () {
			if (!this.c) {
				this.d = this.m();
				this.c = true;
			}
			return this.d;
	}

, 
	rebuildExpression: function () {
		this.d = this.m();
		this.c = true;
	}

, 
	addElement: function (a) {
		if (this.l(a)) {
			this.a.add(a);
			this.c = false;
		}
	}

, 
	getMdxElements: function () {
		var $self = this;
		var $iter = function () { return function () { return {
			$state: 0,
			$this: $self,
			$current: null,
			$a : null,
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
							this.$a = this.$this.a.getEnumerator();
							this.$state = 1;
							break;
						case 1:
							this.$state = 4;
							break;
						case 2:
							this.$current =  this.$a.current();
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							if (this.$a.moveNext()) {
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
		return new $.ig.GenericEnumerable$1($.ig.IMdxElement.prototype.$type, $iter);
	}

, 
	l: function (a) {
		switch (a.elementType()) {
			case $.ig.MdxElementType.prototype.memberTree:
			case $.ig.MdxElementType.prototype.member:
			case $.ig.MdxElementType.prototype.calculated:
			case $.ig.MdxElementType.prototype.collection:
				return true;
		}
		return false;
	}

, 
	m: function () {
		$.ig.Debug.prototype.a(this.h().count() > 0, "MdxSet.Elements collection is empty.");
		var a = new $.ig.StringBuilder();
		var b = this.g() != null ? this.g() : new $.ig.MdxSettings();
		var c = this.h().item(0);
		this.n(a, c);
		for (var d = 1; d < this.h().count(); d++) {
			a.i(0, "CrossJoin(");
			a.i(10, $.ig.Environment.prototype.a());
			a.d(",");
			a.d($.ig.Environment.prototype.a());
			var e = this.h().item(d);
			this.n(a, e);
			a.d(")");
		}
		return a.toString();
	}

, 
	n: function (a, b) {
		var c = new $.ig.StringBuilder();
		switch (b.elementType()) {
			case $.ig.MdxElementType.prototype.calculated:
				var d = b;
				var e = d.g();
				c.d("{");
				c.d(e);
				c.d("}");
				break;
			case $.ig.MdxElementType.prototype.member:
				c.d("{");
				c.d(b.mdxExpression());
				c.d("}");
				break;
			case $.ig.MdxElementType.prototype.collection:
			case $.ig.MdxElementType.prototype.memberTree:
				c.d(b.mdxExpression());
				break;
		}
		switch (b.elementType()) {
			case $.ig.MdxElementType.prototype.memberTree:
			case $.ig.MdxElementType.prototype.member:
				this.o(c, b);
				this.p(c, b);
				break;
		}
		a.e(c);
	}

, 
	o: function (a, b) {
	}

, 
	p: function (a, b) {
	}

, 
	clone: function () {
		var a = new $.ig.MdxSet();
		var c = this.h().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			a.addElement(b);
		}
		return a;
	}
,
	$type: new $.ig.Type('MdxSet', $.ig.Object.prototype.$type, [$.ig.IMdxSet.prototype.$type])
}, true);

$.ig.util.defType('MdxSettings', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.q(true);
				this.r(true);
				this.u(new $.ig.List$1(String, 0));
				this.v(new $.ig.List$1(String, 0));
				this.s(true);
				this.t(true);
				this.at(this.u());
				this.at(this.v());
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
	as: function (a) {
		this.at(a);
	}

, 
	at: function (a) {
		a.clear();
		a.add("CHILDREN_CARDINALITY");
		a.add("PARENT_UNIQUE_NAME");
	}
,
	$type: new $.ig.Type('MdxSettings', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('MdxSlicerAxis', 'MdxAxis', {

		init: function (a) {


			$.ig.MdxAxis.prototype.init1.call(this, 1, 2, a);
		}
, 
	_columnsFilter: null,
	columnsFilter: function (a) {
		if (arguments.length === 1) {
			this._columnsFilter = a;
			return a;
		} else {
			return this._columnsFilter;
		}
	}

, 
	_rowsFilter: null,
	rowsFilter: function (a) {
		if (arguments.length === 1) {
			this._rowsFilter = a;
			return a;
		} else {
			return this._rowsFilter;
		}
	}

, 
	_filtersFilter: null,
	filtersFilter: function (a) {
		if (arguments.length === 1) {
			this._filtersFilter = a;
			return a;
		} else {
			return this._filtersFilter;
		}
	}

, 
	_measureFilter: null,
	measureFilter: function (a) {
		if (arguments.length === 1) {
			this._measureFilter = a;
			return a;
		} else {
			return this._measureFilter;
		}
	}

, 
	_filterElements: null,
	filterElements: function (a) {
		if (arguments.length === 1) {
			this._filterElements = a;
			return a;
		} else {
			return this._filterElements;
		}
	}
,
	$type: new $.ig.Type('MdxSlicerAxis', $.ig.MdxAxis.prototype.$type, [$.ig.IMdxSlicerAxis.prototype.$type])
}, true);

$.ig.util.defType('MdxSlicerSet', 'MdxSet', {
	init: function () {

		$.ig.MdxSet.prototype.init.call(this);

	}
, 
	l: function (a) {
		return $.ig.util.cast($.ig.IAxisFilterElement.prototype.$type, a) !== null;
	}
,
	$type: new $.ig.Type('MdxSlicerSet', $.ig.MdxSet.prototype.$type)
}, true);

$.ig.util.defType('MdxDimensionAxisProvider', 'Object', {
	a: null, 
	b: null
, 
		init: function (initNumber, a, b, c) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break;
					case 3:
						this.init3.apply(this, arguments);
						break;
				}
				return;
			}

			this.a = new $.ig.Dictionary$2(String, $.ig.MdxElementCollectionElement.prototype.$type, 0);
			this.b = new $.ig.List$1(String, 0);

			$.ig.Object.prototype.init.call(this);
						if (a == null) {
					throw new $.ig.ArgumentNullException("xmlaDataSource");
				}
				if (b == null) {
					throw new $.ig.ArgumentNullException("sourceAxis");
				}
				if (c == null) {
					throw new $.ig.ArgumentNullException("currentResultAxis");
				}
				this.n($.ig.MdxDimensionAxisCreateMode.prototype.change);
				this.i(a);
				this.j(b);
				this.k(c.positionResolver().rootPositionInfo());
		}
, 
		init1: function (initNumber, a, b) {

			this.a = new $.ig.Dictionary$2(String, $.ig.MdxElementCollectionElement.prototype.$type, 0);
			this.b = new $.ig.List$1(String, 0);

			$.ig.Object.prototype.init.call(this);
						if (a == null) {
					throw new $.ig.ArgumentNullException("xmlaDataSource");
				}
				if (b == null) {
					throw new $.ig.ArgumentNullException("sourceAxis");
				}
				this.n($.ig.MdxDimensionAxisCreateMode.prototype.create);
				this.i(a);
				this.j(b);
		}
, 
		init2: function (initNumber, a, b) {

			this.a = new $.ig.Dictionary$2(String, $.ig.MdxElementCollectionElement.prototype.$type, 0);
			this.b = new $.ig.List$1(String, 0);

			$.ig.Object.prototype.init.call(this);
						if (a == null) {
					throw new $.ig.ArgumentNullException("xmlaDataSource");
				}
				if (b == null) {
					throw new $.ig.ArgumentNullException("currentResultAxis");
				}
				this.n($.ig.MdxDimensionAxisCreateMode.prototype.create);
				this.i(a);
				this.k(b.positionResolver().rootPositionInfo());
		}
, 
		init3: function (initNumber, a, b) {

			this.a = new $.ig.Dictionary$2(String, $.ig.MdxElementCollectionElement.prototype.$type, 0);
			this.b = new $.ig.List$1(String, 0);

			$.ig.Object.prototype.init.call(this);
						this.n($.ig.MdxDimensionAxisCreateMode.prototype.extend);
				this.m(a);
				this.l(b);
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
	extendAxis: function (a, b) {
		var $self = this;
		if (this.n() != $.ig.MdxDimensionAxisCreateMode.prototype.extend) {
			throw new $.ig.InvalidOperationException(1, "This axis provider cannot be used to extend mdx axis. For extending mdx axis plea" +
    "se use the appropriate provider constructor.");
		}
		var c = this.l();
		var d = this.m().positionResolver();
		var e = new $.ig.MdxAxis(0, a.axisIndex());
		var g = c.getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			var h = new $.ig.MdxSet();
			var i = new $.ig.List$1($.ig.IMdxSet.prototype.$type, 0);
			var j = d.getHostPositionItemInfo(f.position(), f.position().indexOf(f));
			var l = f.position().getItems().getEnumerator();
			while (l.moveNext()) {
				var k = l.current();
				var m;
				if (k == f) {
					m = new $.ig.MdxChildrenCollectionElement(k.key(), k.key(), -1, null, null);
					h.addElement(m);
					break;
				}
				m = new $.ig.MdxSingleElement(0, k.key(), k.key(), k.depth());
				h.addElement(m);
			}
			var o = j.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (n) { return n.key() == f.key()}).firstOrDefault$1($.ig.PositionItemInfo$2.prototype.$type);
			if (o != null) {
				if (o.count() == 0) {
					i.add(h);

				} else {
					this.ag(o, h, i, false, true, false);
				}
				var q = i.getEnumerator();
				while (q.moveNext()) {
					var p = q.current();
					a.addSet(p);
					e.addSet(p);
				}
			}
		}
		return e;
	}

, 
	createAxis: function (a) {
		if (this.n() == $.ig.MdxDimensionAxisCreateMode.prototype.create && this.k() == null) {
			return this.ac(a, this.j());
		}
		this.aa();
		this.ab(this.k());
		if (this.k().count() == 0) {
			return this.ac(a, this.j());
		}
		var b = new $.ig.List$1($.ig.IMdxSet.prototype.$type, 0);
		this.ag(this.k(), new $.ig.MdxSet(), b, false, false, true);
		var c = new $.ig.MdxAxis(0, a);
		var e = b.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			c.addSet(d);
		}
		return c;
	}

, 
	aa: function () {
		if (this.n() == $.ig.MdxDimensionAxisCreateMode.prototype.change) {
			var b = this.i().measures().getEnumerator();
			while (b.moveNext()) {
				var a = b.current();
				this.b.add(a.uniqueName());
			}
		}
	}

, 
	ab: function (a) {
		if (this.n() == $.ig.MdxDimensionAxisCreateMode.prototype.change) {
			if (this.j() != null) {
				var b = a.positionItemIndex() + 1;
				if (b < this.j().count()) {
					var c = this.j().item(b);
					var d = $.ig.util.cast($.ig.MeasureList.prototype.$type, c);
					if (d != null) {
						var e = a.values().toList$1($.ig.PositionItemInfo$2.prototype.$type);
						var g = e.getEnumerator();
						while (g.moveNext()) {
							var f = g.current();
							if (!this.b.contains(f.key())) {
								a.remove(f.key());
							}
						}
					}
					var h = $.ig.util.cast($.ig.Hierarchy.prototype.$type, c);
					if (h != null) {
						var i = a.values().firstOrDefault$1($.ig.PositionItemInfo$2.prototype.$type);
						if (i != null) {
							if (i.hierarchyKey() != h.uniqueName()) {
								a.clear();
							}
						}
					}

				} else {
					a.clear();
				}
			}
		}
	}

, 
	ac: function (a, b) {
		var c = new $.ig.MdxSet();
		this.ad(b, 0, c);
		var d = new $.ig.MdxAxis(0, a);
		d.addSet(c);
		return d;
	}

, 
	ad: function (a, b, c) {
		var $self = this;
		if (a == null) {
			return;
		}
		for (var d = b; d < a.count(); d++) {
			var e = a.item(d);
			var f = $.ig.util.cast($.ig.Hierarchy.prototype.$type, e);
			if (f != null) {
				c.addElement(new $.ig.MdxSingleElement(0, f.defaultMember(), f.defaultMember(), 0));
				continue;
			}
			var g = $.ig.util.cast($.ig.Level.prototype.$type, e);
			if (g != null) {
				var h;
				if (!(function () { var $ret = $self.a.tryGetValue(g.hierarchyUniqueName(), h); h = $ret.value; return $ret.ret; }())) {
					h = new $.ig.MdxElementCollectionElement();
					c.addElement(h);
					this.a.add(g.hierarchyUniqueName(), h);
				}
				h.addElement(new $.ig.MdxLevelMembersElement(g.uniqueName(), g.uniqueName(), g.depth()));
				continue;
			}
			var i = $.ig.util.cast($.ig.MeasureList.prototype.$type, e);
			if (i != null) {
				var j = new $.ig.MdxElementCollectionElement();
				var l = i.measures().getEnumerator();
				while (l.moveNext()) {
					var k = l.current();
					j.addElement(new $.ig.MdxSingleElement(0, k.uniqueName(), k.uniqueName(), 0));
				}
				c.addElement(j);
			}
		}
	}

, 
	ae: function (a, b, c, d, e, f, g) {
		var h = (c).clone();
		c.addElement(new $.ig.MdxSingleElement(0, b.key(), b.key(), b.positionItemDepth()));
		this.ab(b);
		if (b.count() == 0) {
			if (e) {
				if (f) {
					d.add(c);
					this.ad(this.j(), b.positionItemIndex() + 1, c);
				}

			} else {
				d.add(c);
				this.ad(this.j(), b.positionItemIndex() + 1, c);
			}

		} else {
			this.ag(b, c, d, e, f, g);
		}
		if (g && b.isExpanded()) {
			this.af(b, d, a, h);
		}
	}

, 
	af: function (a, b, c, d) {
		var $self = this;
		var f = c.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (e) { return e.parentKey() == a.key()}).toList$1($.ig.PositionItemInfo$2.prototype.$type);
		if (f.count() > 0) {
			var g = (d).clone();
			g.addElement(new $.ig.MdxChildrenCollectionElement(a.key(), a.key(), a.positionItemDepth(), null, null));
			this.ab(a);
			if (a.count() == 0) {
				b.add(g);
				this.ad(this.j(), a.positionItemIndex() + 1, g);

			} else {
				this.ag(a, g, b, true, true, false);
			}
		}
		var i = f.getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			var j = (d).clone();
			j.addElement(new $.ig.MdxSingleElement(0, h.key(), h.key(), h.positionItemDepth()));
			this.ab(h);
			if (h.isExpanded()) {
				this.af(h, b, c, d);
			}
			this.ag(h, j, b, true, false, true);
		}
	}

, 
	ag: function (a, b, c, d, e, f) {
		var $self = this;
		var i = a.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (g) { return g.positionItemDepth() == a.childTopMostPositionItemDepth()}).getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			var j = (b).clone();
			this.ae(a, h, j, c, d, e, f);
		}
	}
,
	$type: new $.ig.Type('MdxDimensionAxisProvider', $.ig.Object.prototype.$type, [$.ig.IMdxDimensionAxisProvider.prototype.$type])
}, true);

$.ig.util.defType('MdxSlicerAxisProvider', 'Object', {
	a: null, 
	b: null, 
	c: null
, 
		init: function (a, b, c, d, e) {

			this.a = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
			this.b = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
			this.c = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);

			$.ig.Object.prototype.init.call(this);
						this.f(a);
				this.g(e);
				this.a = b;
				this.b = c;
				this.c = d;
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
	createAxis: function (a) {
		var b = new $.ig.MdxSlicerAxis(this.g());
		b.axisIndex(a);
		b.columnsFilter($.ig.MdxSlicerAxisBuilder.prototype.b(this.a, b));
		b.rowsFilter($.ig.MdxSlicerAxisBuilder.prototype.b(this.b, b));
		b.filtersFilter($.ig.MdxSlicerAxisBuilder.prototype.b(this.c, b));
		b.measureFilter($.ig.MdxSlicerAxisBuilder.prototype.a(this.f().measures(), b));
		return b;
	}
,
	$type: new $.ig.Type('MdxSlicerAxisProvider', $.ig.Object.prototype.$type, [$.ig.IMdxAxisProvider.prototype.$type])
}, true);

$.ig.util.defType('MdxSlicerAxisBuilder', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
		if (a.count$1($.ig.Measure.prototype.$type) == 0) {
			return null;
		}
		var c = new $.ig.MdxAxisFilterElement();
		var d = new $.ig.MdxElementCollectionElement();
		var f = a.getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			var g = new $.ig.MdxSingleElement(0, e.uniqueName(), e.uniqueName(), 0);
			d.addElement(g);
		}
		var h = new $.ig.MdxSlicerSet();
		h.addElement(c);
		b.addSet(h);
		c.addFilterPart(d, true);
		return c;
	}

, 
	b: function (a, b) {
		var $self = this;
		var c = new $.ig.MdxAxisFilterElement();
		var e = a.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			var f = new $.ig.MdxElementCollectionElement();
			var g = new $.ig.Dictionary$2(String, $.ig.MdxSingleElement.prototype.$type, 0);
			var i = d.memberNames().getEnumerator();
			while (i.moveNext()) {
				var h = i.current();
				var j;
				if (!(function () { var $ret = g.tryGetValue(h, j); j = $ret.value; return $ret.ret; }())) {
					j = new $.ig.MdxSingleElement(0, h, h, -1);
					g.add(h, j);
				}
				f.addElement(j);
			}
			c.addFilterPart(f, false);
		}
		if (c.filterCollection().count() == 0 && c.singleFilterElements().count() == 0) {
			return null;
		}
		var k = new $.ig.MdxSlicerSet();
		k.addElement(c);
		b.addSet(k);
		return c;
	}
,
	$type: new $.ig.Type('MdxSlicerAxisBuilder', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IXmlaDataProviderFactory', 'Object', {

		$type: new $.ig.Type('IXmlaDataProviderFactory', null)
}, true);

$.ig.util.defType('DefaultXmlaDataProviderFactory', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	createDataProvider: function (a, b) {
		return new $.ig.XmlaDataProvider(new $.ig.XmlaConnection(new $.ig.Uri(a), b), null);
	}
,
	$type: new $.ig.Type('DefaultXmlaDataProviderFactory', $.ig.Object.prototype.$type, [$.ig.IXmlaDataProviderFactory.prototype.$type])
}, true);

$.ig.util.defType('RemoteXmlaDataProviderFactory', 'Object', {
	a: null, 
	b: null
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
						this.a = new $.ig.JsonRemoteXmlaRequestSerializer();
				this.b = new $.ig.JsonRemoteXmlaResponseSerializer();
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = b;
		}
, 
	createDataProvider: function (a, b) {
		return new $.ig.RemoteXmlaDataProvder(a, b, this.a, this.b);
	}
,
	$type: new $.ig.Type('RemoteXmlaDataProviderFactory', $.ig.Object.prototype.$type, [$.ig.IXmlaDataProviderFactory.prototype.$type])
}, true);

$.ig.util.defType('IRemoteXmlaRequestSerializer', 'Object', {

		$type: new $.ig.Type('IRemoteXmlaRequestSerializer', null)
}, true);

$.ig.util.defType('IRemoteXmlaResponseSerializer', 'Object', {

		$type: new $.ig.Type('IRemoteXmlaResponseSerializer', null)
}, true);

$.ig.util.defType('JsonRemoteXmlaRequestSerializer', 'Object', {
	a: null
, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.JavaScriptSerializer();
		}
, 
	serializeRequest: function (a) {
		return $.ig.RemoteXmlaRequestJsonTypeSeriazlier.prototype.b().serialize(a, this.a);
	}

, 
	deserializeRequest: function (a) {
		return $.ig.RemoteXmlaRequestJsonTypeSeriazlier.prototype.b().deserialize(a, this.a);
	}
,
	$type: new $.ig.Type('JsonRemoteXmlaRequestSerializer', $.ig.Object.prototype.$type, [$.ig.IRemoteXmlaRequestSerializer.prototype.$type])
}, true);

$.ig.util.defType('JsonRemoteXmlaResponseSerializer', 'Object', {
	a: null
, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.JavaScriptSerializer();
		}
, 
	serializeResponse: function (a, b) {
		switch (b) {
			case $.ig.RemoteXmlaRequestType.prototype.discoverCatalogs:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.Catalog.prototype.$type, a, $.ig.CatalogJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverCubes:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.Cube.prototype.$type, a, $.ig.CubeJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverDimensions:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.Dimension.prototype.$type, a, $.ig.DimensionJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverHierarchies:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.Hierarchy.prototype.$type, a, $.ig.HierarchyJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverLevels:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.Level.prototype.$type, a, $.ig.LevelJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverMeasures:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.Measure.prototype.$type, a, $.ig.MeasureJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.MeasureGroup.prototype.$type, a, $.ig.MeasureGroupJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.MeasureGroupDimension.prototype.$type, a, $.ig.MeasureGroupDimensionJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverMembers:
				return $.ig.ArrayJsonSerializer.prototype.b().g($.ig.Member.prototype.$type, a, $.ig.MemberJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.executeStatement:
				return $.ig.ResultJsonTypeSeriazlier.prototype.b().serialize(a, this.a);
			default:
				throw new $.ig.Error(1, "Unknown RemoteXmlaRequestType.");
		}
	}

, 
	deserializeResponse: function (a, b) {
		switch (b) {
			case $.ig.RemoteXmlaRequestType.prototype.discoverCatalogs:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.Catalog.prototype.$type, a, $.ig.CatalogJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverCubes:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.Cube.prototype.$type, a, $.ig.CubeJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverDimensions:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.Dimension.prototype.$type, a, $.ig.DimensionJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverHierarchies:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.Hierarchy.prototype.$type, a, $.ig.HierarchyJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverLevels:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.Level.prototype.$type, a, $.ig.LevelJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverMeasures:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.Measure.prototype.$type, a, $.ig.MeasureJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.MeasureGroup.prototype.$type, a, $.ig.MeasureGroupJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.MeasureGroupDimension.prototype.$type, a, $.ig.MeasureGroupDimensionJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.discoverMembers:
				return $.ig.ArrayJsonSerializer.prototype.b().e($.ig.Member.prototype.$type, a, $.ig.MemberJsonTypeSeriazlier.prototype.b(), this.a);
			case $.ig.RemoteXmlaRequestType.prototype.executeStatement:
				return $.ig.ResultJsonTypeSeriazlier.prototype.b().deserialize(a, this.a);
			default:
				throw new $.ig.Error(1, "Unknown RemoteXmlaRequestType.");
		}
	}
,
	$type: new $.ig.Type('JsonRemoteXmlaResponseSerializer', $.ig.Object.prototype.$type, [$.ig.IRemoteXmlaResponseSerializer.prototype.$type])
}, true);

$.ig.util.defType('ArrayJsonSerializer', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
		}
, 
	b: function () {
			return $.ig.ArrayJsonSerializer.prototype.a;
	}

, 
	e: function ($t, a, b, c) {
		var d = c.a(a);
		return this.i($t, d, b);
	}

, 
	g: function ($t, a, b, c) {
		var d = this.k($t, a, b);
		return c.b(d);
	}

, 
	i: function ($t, a, b) {
		var c = new $.ig.List$1($t, 0);
		for (var d = 0; d < a.length; d++) {
			var e = a[d];
			c.add(b.fromJsonObject(e));
		}
		return c;
	}

, 
	k: function ($t, a, b) {
		var c = a.toArray$1($t);
		var d = new Array(c.length);
		for (var e = 0; e < c.length; e++) {
			d[e] = b.toJsonObject(c[e]);
		}
		return d;
	}
,
	$type: new $.ig.Type('ArrayJsonSerializer', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IJsonTypeSerializer$1', 'Object', {

		$type: new $.ig.Type('IJsonTypeSerializer$1', null)
}, true);

$.ig.util.defType('JsonTypeSeriazlierBase$1', 'Object', {
	$t: null, 
	init: function ($t) {
		this.$t = $t
		this.$type = this.$type.specialize(this.$t);

		$.ig.Object.prototype.init.call(this);

	}
, 
	deserialize: function (a, b) {
		return this.fromJsonObject(b.a(a));
	}

, 
	serialize: function (a, b) {
		return b.b(this.toJsonObject(a));
	}

, 
	fromJsonObject: function (a) {
	}

, 
	toJsonObject: function (a) {
	}
,
	$type: new $.ig.Type('JsonTypeSeriazlierBase$1', $.ig.Object.prototype.$type, [$.ig.IJsonTypeSerializer$1.prototype.$type.specialize(0)])
}, true);

$.ig.util.defType('AxisJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResultAxis.prototype.$type);
		}
, 
	b: function () {
			return $.ig.AxisJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		var b = $.ig.JsonSerializerUtils.prototype.b(a, "n");
		var c = $.ig.ArrayJsonSerializer.prototype.b().i($.ig.OlapResultTuple.prototype.$type, $.ig.JsonSerializerUtils.prototype.b(a, "t"), $.ig.TupleJsonTypeSeriazlier.prototype.b());
		var d = 0;
		if (c.count() > 0) {
			d = c.item(0).members().count();
		}
		return (function () { var $ret = new $.ig.OlapResultAxis(c, d);
		$ret.name(b); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.ArrayJsonSerializer.prototype.b().k($.ig.OlapResultTuple.prototype.$type, a.tuples(), $.ig.TupleJsonTypeSeriazlier.prototype.b());
		var c = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(c, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(c, "t", b);
		return c;
	}
,
	$type: new $.ig.Type('AxisJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResultAxis.prototype.$type))
}, true);

$.ig.util.defType('AxisMemberJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResultAxisMember.prototype.$type);
		}
, 
	b: function () {
			return $.ig.AxisMemberJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.OlapResultAxisMember();
		$ret.uniqueName($.ig.JsonSerializerUtils.prototype.b(a, "un"));
		$ret.levelUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "lun"));
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.levelNumber($.ig.JsonSerializerUtils.prototype.b(a, "ln"));
		$ret.displayInfo($.ig.JsonSerializerUtils.prototype.b(a, "di"));
		$ret.properties($.ig.JsonSerializerUtils.prototype.f(a, "p")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "un", a.uniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "lun", a.levelUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "ln", a.levelNumber());
		$.ig.JsonSerializerUtils.prototype.c(b, "di", a.displayInfo());
		$.ig.JsonSerializerUtils.prototype.g(b, "p", a.properties());
		return b;
	}
,
	$type: new $.ig.Type('AxisMemberJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResultAxisMember.prototype.$type))
}, true);

$.ig.util.defType('CatalogJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Catalog.prototype.$type);
		}
, 
	b: function () {
			return $.ig.CatalogJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Catalog();
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.description($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.name($.ig.JsonSerializerUtils.prototype.b(a, "n"));
		$ret.uniqueName($.ig.JsonSerializerUtils.prototype.b(a, "un")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.description());
		$.ig.JsonSerializerUtils.prototype.c(b, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(b, "un", a.uniqueName());
		return b;
	}
,
	$type: new $.ig.Type('CatalogJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Catalog.prototype.$type))
}, true);

$.ig.util.defType('CellJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResultCell.prototype.$type);
		}
, 
	b: function () {
			return $.ig.CellJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.OlapResultCell();
		$ret.cellOrdinal($.ig.JsonSerializerUtils.prototype.b(a, "co"));
		$ret.properties($.ig.JsonSerializerUtils.prototype.f(a, "p")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "co", a.cellOrdinal());
		$.ig.JsonSerializerUtils.prototype.g(b, "p", a.properties());
		return b;
	}
,
	$type: new $.ig.Type('CellJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResultCell.prototype.$type))
}, true);

$.ig.util.defType('CubeJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Cube.prototype.$type);
		}
, 
	b: function () {
			return $.ig.CubeJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Cube();
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.description($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.name($.ig.JsonSerializerUtils.prototype.b(a, "n"));
		$ret.catalogName($.ig.JsonSerializerUtils.prototype.b(a, "cn"));
		$ret.cubeType($.ig.JsonSerializerUtils.prototype.b(a, "ct"));
		$ret.lastProcessed($.ig.JsonSerializerUtils.prototype.b(a, "lp"));
		$ret.lastUpdated($.ig.JsonSerializerUtils.prototype.b(a, "lu")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.description());
		$.ig.JsonSerializerUtils.prototype.c(b, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(b, "cn", a.catalogName());
		$.ig.JsonSerializerUtils.prototype.c(b, "ct", a.cubeType());
		$.ig.JsonSerializerUtils.prototype.c(b, "lp", a.lastProcessed());
		$.ig.JsonSerializerUtils.prototype.c(b, "lu", a.lastUpdated());
		return b;
	}
,
	$type: new $.ig.Type('CubeJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Cube.prototype.$type))
}, true);

$.ig.util.defType('DimensionJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Dimension.prototype.$type);
		}
, 
	b: function () {
			return $.ig.DimensionJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Dimension();
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.description($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.name($.ig.JsonSerializerUtils.prototype.b(a, "n"));
		$ret.uniqueName($.ig.JsonSerializerUtils.prototype.b(a, "un"));
		$ret.dimensionType($.ig.JsonSerializerUtils.prototype.b(a, "dt")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.description());
		$.ig.JsonSerializerUtils.prototype.c(b, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(b, "un", a.uniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "dt", a.dimensionType());
		return b;
	}
,
	$type: new $.ig.Type('DimensionJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Dimension.prototype.$type))
}, true);

$.ig.util.defType('HierarchyJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Hierarchy.prototype.$type);
		}
, 
	b: function () {
			return $.ig.HierarchyJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Hierarchy();
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.description($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.name($.ig.JsonSerializerUtils.prototype.b(a, "n"));
		$ret.uniqueName($.ig.JsonSerializerUtils.prototype.b(a, "un"));
		$ret.allMember($.ig.JsonSerializerUtils.prototype.b(a, "am"));
		$ret.defaultMember($.ig.JsonSerializerUtils.prototype.b(a, "dm"));
		$ret.dimensionUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "dun"));
		$ret.hierarchyDisplayFolder($.ig.JsonSerializerUtils.prototype.b(a, "hdf"));
		$ret.hierarchyOrigin($.ig.JsonSerializerUtils.prototype.b(a, "ho")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.description());
		$.ig.JsonSerializerUtils.prototype.c(b, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(b, "un", a.uniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "am", a.allMember());
		$.ig.JsonSerializerUtils.prototype.c(b, "dm", a.defaultMember());
		$.ig.JsonSerializerUtils.prototype.c(b, "dun", a.dimensionUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "hdf", a.hierarchyDisplayFolder());
		$.ig.JsonSerializerUtils.prototype.c(b, "ho", a.hierarchyOrigin());
		return b;
	}
,
	$type: new $.ig.Type('HierarchyJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Hierarchy.prototype.$type))
}, true);

$.ig.util.defType('JsonSerializerUtils', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function () {
		return $.ig.jQueryUtils.prototype.createJavascriptObject();
	}

, 
	b: function (a, b) {
		return $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, b);
	}

, 
	c: function (a, b, c) {
		$.ig.jQueryUtils.prototype.setJavascriptObjectProperty(a, b, c);
	}

, 
	d: function (a, b) {
		return $.ig.jQueryUtils.prototype.convertToObjectDictionary($.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, b));
	}

, 
	e: function (a, b, c) {
		var d = $.ig.jQueryUtils.prototype.convertFromObjectDictionary(c);
		$.ig.jQueryUtils.prototype.setJavascriptObjectProperty(a, b, d);
	}

, 
	f: function (a, b) {
		return $.ig.jQueryUtils.prototype.convertToStringDictionary($.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, b));
	}

, 
	g: function (a, b, c) {
		var d = $.ig.jQueryUtils.prototype.convertFromStringDictionary(c);
		$.ig.jQueryUtils.prototype.setJavascriptObjectProperty(a, b, d);
	}
,
	$type: new $.ig.Type('JsonSerializerUtils', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LevelJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Level.prototype.$type);
		}
, 
	b: function () {
			return $.ig.LevelJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Level();
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.description($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.name($.ig.JsonSerializerUtils.prototype.b(a, "n"));
		$ret.uniqueName($.ig.JsonSerializerUtils.prototype.b(a, "un"));
		$ret.depth($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.dimensionUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "dun"));
		$ret.hierarchyUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "hun"));
		$ret.levelOrderingProperty($.ig.JsonSerializerUtils.prototype.b(a, "lop"));
		$ret.levelOrigin($.ig.JsonSerializerUtils.prototype.b(a, "lo"));
		$ret.membersCount($.ig.JsonSerializerUtils.prototype.b(a, "mc")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.description());
		$.ig.JsonSerializerUtils.prototype.c(b, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(b, "un", a.uniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.depth());
		$.ig.JsonSerializerUtils.prototype.c(b, "dun", a.dimensionUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "hun", a.hierarchyUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "lop", a.levelOrderingProperty());
		$.ig.JsonSerializerUtils.prototype.c(b, "lo", a.levelOrigin());
		$.ig.JsonSerializerUtils.prototype.c(b, "mc", a.membersCount());
		return b;
	}
,
	$type: new $.ig.Type('LevelJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Level.prototype.$type))
}, true);

$.ig.util.defType('MeasureGroupDimensionJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.MeasureGroupDimension.prototype.$type);
		}
, 
	b: function () {
			return $.ig.MeasureGroupDimensionJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.MeasureGroupDimension();
		$ret.catalogName($.ig.JsonSerializerUtils.prototype.b(a, "cn"));
		$ret.cubeName($.ig.JsonSerializerUtils.prototype.b(a, "cbn"));
		$ret.dimensionCardinality($.ig.JsonSerializerUtils.prototype.b(a, "dc"));
		$ret.dimensionGranularity($.ig.JsonSerializerUtils.prototype.b(a, "dg"));
		$ret.dimensionPath($.ig.JsonSerializerUtils.prototype.b(a, "dap"));
		$ret.dimensionUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "dun"));
		$ret.isDimensionVisible($.ig.JsonSerializerUtils.prototype.b(a, "idv"));
		$ret.isFactDimension($.ig.JsonSerializerUtils.prototype.b(a, "iafd"));
		$ret.measureGroupCardinality($.ig.JsonSerializerUtils.prototype.b(a, "mgc"));
		$ret.measureGroupName($.ig.JsonSerializerUtils.prototype.b(a, "mgn")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "cn", a.catalogName());
		$.ig.JsonSerializerUtils.prototype.c(b, "cbn", a.cubeName());
		$.ig.JsonSerializerUtils.prototype.c(b, "dc", a.dimensionCardinality());
		$.ig.JsonSerializerUtils.prototype.c(b, "dg", a.dimensionGranularity());
		$.ig.JsonSerializerUtils.prototype.c(b, "dap", a.dimensionPath());
		$.ig.JsonSerializerUtils.prototype.c(b, "dun", a.dimensionUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "idv", a.isDimensionVisible());
		$.ig.JsonSerializerUtils.prototype.c(b, "iafd", a.isFactDimension());
		$.ig.JsonSerializerUtils.prototype.c(b, "mgc", a.measureGroupCardinality());
		$.ig.JsonSerializerUtils.prototype.c(b, "mgn", a.measureGroupName());
		return b;
	}
,
	$type: new $.ig.Type('MeasureGroupDimensionJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.MeasureGroupDimension.prototype.$type))
}, true);

$.ig.util.defType('MeasureGroupJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.MeasureGroup.prototype.$type);
		}
, 
	b: function () {
			return $.ig.MeasureGroupJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.MeasureGroup();
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.description($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.name($.ig.JsonSerializerUtils.prototype.b(a, "n"));
		$ret.catalogName($.ig.JsonSerializerUtils.prototype.b(a, "cn"));
		$ret.cubeName($.ig.JsonSerializerUtils.prototype.b(a, "cbn")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.description());
		$.ig.JsonSerializerUtils.prototype.c(b, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(b, "cn", a.catalogName());
		$.ig.JsonSerializerUtils.prototype.c(b, "cbn", a.cubeName());
		return b;
	}
,
	$type: new $.ig.Type('MeasureGroupJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.MeasureGroup.prototype.$type))
}, true);

$.ig.util.defType('MeasureJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Measure.prototype.$type);
		}
, 
	b: function () {
			return $.ig.MeasureJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Measure();
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.description($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.name($.ig.JsonSerializerUtils.prototype.b(a, "n"));
		$ret.uniqueName($.ig.JsonSerializerUtils.prototype.b(a, "un"));
		$ret.aggregatorType($.ig.JsonSerializerUtils.prototype.b(a, "at"));
		$ret.defaultFormatString($.ig.JsonSerializerUtils.prototype.b(a, "dfs"));
		$ret.measureDisplayFolder($.ig.JsonSerializerUtils.prototype.b(a, "mdf"));
		$ret.measureGroupName($.ig.JsonSerializerUtils.prototype.b(a, "mgn")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.description());
		$.ig.JsonSerializerUtils.prototype.c(b, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(b, "un", a.uniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "at", a.aggregatorType());
		$.ig.JsonSerializerUtils.prototype.c(b, "dfs", a.defaultFormatString());
		$.ig.JsonSerializerUtils.prototype.c(b, "mdf", a.measureDisplayFolder());
		$.ig.JsonSerializerUtils.prototype.c(b, "mgn", a.measureGroupName());
		return b;
	}
,
	$type: new $.ig.Type('MeasureJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Measure.prototype.$type))
}, true);

$.ig.util.defType('MemberJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Member.prototype.$type);
		}
, 
	b: function () {
			return $.ig.MemberJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.Member();
		$ret.caption($.ig.JsonSerializerUtils.prototype.b(a, "c"));
		$ret.description($.ig.JsonSerializerUtils.prototype.b(a, "d"));
		$ret.name($.ig.JsonSerializerUtils.prototype.b(a, "n"));
		$ret.uniqueName($.ig.JsonSerializerUtils.prototype.b(a, "un"));
		$ret.catalogName($.ig.JsonSerializerUtils.prototype.b(a, "cn"));
		$ret.childrenCardinality($.ig.JsonSerializerUtils.prototype.b(a, "cc"));
		$ret.cubeName($.ig.JsonSerializerUtils.prototype.b(a, "cbn"));
		$ret.dimensionUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "dun"));
		$ret.hierarchyUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "hun"));
		$ret.levelDepth($.ig.JsonSerializerUtils.prototype.b(a, "ld"));
		$ret.levelUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "lun"));
		$ret.memberType($.ig.JsonSerializerUtils.prototype.b(a, "mt"));
		$ret.parentLevel($.ig.JsonSerializerUtils.prototype.b(a, "pl"));
		$ret.parentUniqueName($.ig.JsonSerializerUtils.prototype.b(a, "pun"));
		$ret.scope($.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.JsonSerializerUtils.prototype.b(a, "s"))); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "c", a.caption());
		$.ig.JsonSerializerUtils.prototype.c(b, "d", a.description());
		$.ig.JsonSerializerUtils.prototype.c(b, "n", a.name());
		$.ig.JsonSerializerUtils.prototype.c(b, "un", a.uniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "cn", a.catalogName());
		$.ig.JsonSerializerUtils.prototype.c(b, "cc", a.childrenCardinality());
		$.ig.JsonSerializerUtils.prototype.c(b, "cbn", a.cubeName());
		$.ig.JsonSerializerUtils.prototype.c(b, "dun", a.dimensionUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "hun", a.hierarchyUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "ld", a.levelDepth());
		$.ig.JsonSerializerUtils.prototype.c(b, "lun", a.levelUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "mt", a.memberType());
		$.ig.JsonSerializerUtils.prototype.c(b, "pl", a.parentLevel());
		$.ig.JsonSerializerUtils.prototype.c(b, "pun", a.parentUniqueName());
		$.ig.JsonSerializerUtils.prototype.c(b, "s", a.scope());
		return b;
	}
,
	$type: new $.ig.Type('MemberJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Member.prototype.$type))
}, true);

$.ig.util.defType('RemoteXmlaRequestJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.RemoteXmlaRequest.prototype.$type);
		}
, 
	b: function () {
			return $.ig.RemoteXmlaRequestJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		return (function () { var $ret = new $.ig.RemoteXmlaRequest();
		$ret.f($.ig.JsonSerializerUtils.prototype.b(a, "t"));
		$ret.g($.ig.JsonSerializerUtils.prototype.f(a, "p"));
		$ret.h($.ig.JsonSerializerUtils.prototype.f(a, "r"));
		$ret.i($.ig.JsonSerializerUtils.prototype.f(a, "par"));
		$ret.j($.ig.JsonSerializerUtils.prototype.b(a, "s")); return $ret;}());
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "t", a.f());
		$.ig.JsonSerializerUtils.prototype.g(b, "p", a.g());
		$.ig.JsonSerializerUtils.prototype.g(b, "r", a.h());
		$.ig.JsonSerializerUtils.prototype.g(b, "par", a.i());
		$.ig.JsonSerializerUtils.prototype.c(b, "s", a.j());
		return b;
	}
,
	$type: new $.ig.Type('RemoteXmlaRequestJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.RemoteXmlaRequest.prototype.$type))
}, true);

$.ig.util.defType('ResultJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResult.prototype.$type);
		}
, 
	b: function () {
			return $.ig.ResultJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var $self = this;
		var b = $.ig.JsonSerializerUtils.prototype.b(a, "ie");
		if (b) {
			return (function () { var $ret = new $.ig.OlapResult();
			$ret.isEmpty(true); return $ret;}());

		} else {
			var c = $.ig.ArrayJsonSerializer.prototype.b().i($.ig.OlapResultAxis.prototype.$type, $.ig.JsonSerializerUtils.prototype.b(a, "a"), $.ig.AxisJsonTypeSeriazlier.prototype.b());
			var d = $.ig.ArrayJsonSerializer.prototype.b().i($.ig.OlapResultAxis.prototype.$type, $.ig.JsonSerializerUtils.prototype.b(a, "c"), $.ig.CellJsonTypeSeriazlier.prototype.b());
			return (function () { var $ret = new $.ig.OlapResult();
			$ret.axes(c);
			$ret.cells(d); return $ret;}());
		}
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(b, "ie", a.isEmpty());
		if (!a.isEmpty()) {
			var c = $.ig.ArrayJsonSerializer.prototype.b().k($.ig.OlapResultAxis.prototype.$type, a.axes(), $.ig.AxisJsonTypeSeriazlier.prototype.b());
			var d = $.ig.ArrayJsonSerializer.prototype.b().k($.ig.OlapResultAxis.prototype.$type, a.cells(), $.ig.CellJsonTypeSeriazlier.prototype.b());
			$.ig.JsonSerializerUtils.prototype.c(b, "a", c);
			$.ig.JsonSerializerUtils.prototype.c(b, "c", d);
		}
		return b;
	}
,
	$type: new $.ig.Type('ResultJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResult.prototype.$type))
}, true);

$.ig.util.defType('TupleJsonTypeSeriazlier', 'JsonTypeSeriazlierBase$1', {

		init: function () {


			$.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResultTuple.prototype.$type);
		}
, 
	b: function () {
			return $.ig.TupleJsonTypeSeriazlier.prototype.a;
	}

, 
	fromJsonObject: function (a) {
		var b = $.ig.ArrayJsonSerializer.prototype.b().i($.ig.OlapResultAxisMember.prototype.$type, $.ig.JsonSerializerUtils.prototype.b(a, "m"), $.ig.AxisMemberJsonTypeSeriazlier.prototype.b());
		var c = new $.ig.OlapResultTuple(b);
		var e = b.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			d.position(c);
		}
		return c;
	}

, 
	toJsonObject: function (a) {
		var b = $.ig.ArrayJsonSerializer.prototype.b().k($.ig.OlapResultAxisMember.prototype.$type, a.members(), $.ig.AxisMemberJsonTypeSeriazlier.prototype.b());
		var c = $.ig.JsonSerializerUtils.prototype.a();
		$.ig.JsonSerializerUtils.prototype.c(c, "m", b);
		return c;
	}
,
	$type: new $.ig.Type('TupleJsonTypeSeriazlier', $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResultTuple.prototype.$type))
}, true);

$.ig.util.defType('RemoteXmlaDataProvder', 'Object', {
	a: null, 
	b: null, 
	c: null, 
	d: null
, 
		init: function (a, b, c, d) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = b;
				this.c = c;
				this.d = d;
		}
, 
	discoverCatalogsAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverCatalogs, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverCatalogs);
		});
	}

, 
	discoverCubesAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverCubes, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverCubes);
		});
	}

, 
	discoverDimensionsAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverDimensions, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverDimensions);
		});
	}

, 
	discoverHierarchiesAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverHierarchies, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverHierarchies);
		});
	}

, 
	discoverLevelsAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverLevels, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverLevels);
		});
	}

, 
	discoverMeasuresAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverMeasures, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverMeasures);
		});
	}

, 
	discoverMeasureGroupsAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups);
		});
	}

, 
	discoverMeasureGroupDimensionsAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions);
		});
	}

, 
	discoverMembersAsync: function (a, b) {
		var $self = this;
		var c = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.discoverMembers, a, b, null, null).ae($.ig.IEnumerable$1.prototype.$type, function (d) {
			return c.deserializeResponse(d.aa(), $.ig.RemoteXmlaRequestType.prototype.discoverMembers);
		});
	}

, 
	executeStatementAsync: function (a, b, c) {
		var $self = this;
		var d = this.d;
		return this.e($.ig.RemoteXmlaRequestType.prototype.executeStatement, b, null, c, a).ae($.ig.OlapResult.prototype.$type, function (e) {
			return d.deserializeResponse(e.aa(), $.ig.RemoteXmlaRequestType.prototype.executeStatement);
		});
	}

, 
	e: function (a, b, c, d, e) {
		var $self = this;
		var f = (function () { var $ret = new $.ig.WebClient();
$ret.g($self.b); return $ret;}());
		var g = this.c.serializeRequest((function () { var $ret = new $.ig.RemoteXmlaRequest();
$ret.f(a);
$ret.g($self.g(b));
$ret.h($self.g(c));
$ret.i($self.g(d));
$ret.j(e); return $ret;}()));
		var h = new $.ig.TaskCompletionSource$1(String, 0);
		f.uploadStringCompleted = $.ig.Delegate.prototype.combine(f.uploadStringCompleted, this.f.on(this));
		f.p(new $.ig.Uri(this.a), "POST", g, h);
		return h.d();
	}

, 
	f: function (a, b) {
		var c = b.userState();
		if (b.cancelled()) {
			c.g();
		} else if (b.error() != null) {
			c.h(b.error());

		} else {
			c.i(b.result());
		}
	}

, 
	g: function (a) {
		if (a == null) {
		return null;
		}
		var b = new $.ig.Dictionary$2(String, String, 0);
		var d = a.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			b.add(c.c(), c.d());
		}
		return b;
	}
,
	$type: new $.ig.Type('RemoteXmlaDataProvder', $.ig.Object.prototype.$type, [$.ig.IXmlaDataProvider.prototype.$type])
}, true);

$.ig.util.defType('RemoteXmlaRequest', 'Object', {
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
	$type: new $.ig.Type('RemoteXmlaRequest', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaConnection', 'Object', {
	a: null, 
	b: null
, 
		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	getXmlaSoapWebClient$1: function ($t) {
		var a = new $.ig.XmlaSoapWebClient$1($t, this.a, $.ig.Encoding.prototype.uTF8());
		return a;
	}
,
	$type: new $.ig.Type('XmlaConnection', $.ig.Object.prototype.$type, [$.ig.ICoreXmlaConnection.prototype.$type])
}, true);

$.ig.util.defType('XmlaDataSourceImpl', 'Object', {
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
	k: null
, 
		init: function (a) {

			this.b = new $.ig.List$1($.ig.IMdxAxis.prototype.$type, 0);
			this.c = new $.ig.List$1($.ig.PositionInfo.prototype.$type, 0);
			this.d = new $.ig.List$1($.ig.PositionInfo.prototype.$type, 0);
			this.e = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
			this.f = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
			this.g = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);

			$.ig.Object.prototype.init.call(this);
						this.isInitialized(false);
				this.sourceOptions(a);
				if (a.dataProviderFactory() == null) {
					this.dataProviderFactory(new $.ig.DefaultXmlaDataProviderFactory());

				} else {
					this.dataProviderFactory(a.dataProviderFactory());
				}
				this.catalogs(new $.ig.ArrayListCollection$1($.ig.Catalog.prototype.$type));
				this.cubes(new $.ig.ArrayListCollection$1($.ig.Cube.prototype.$type));
				this.measureGroups(new $.ig.ArrayListCollection$1($.ig.MeasureGroup.prototype.$type));
		}
, 
	_isInitialized: null,
	isInitialized: function (a) {
		if (arguments.length === 1) {
			this._isInitialized = a;
			return a;
		} else {
			return this._isInitialized;
		}
	}

, 
	_catalogs: null,
	catalogs: function (a) {
		if (arguments.length === 1) {
			this._catalogs = a;
			return a;
		} else {
			return this._catalogs;
		}
	}

, 
	_catalog: null,
	catalog: function (a) {
		if (arguments.length === 1) {
			this._catalog = a;
			return a;
		} else {
			return this._catalog;
		}
	}

, 
	_cubes: null,
	cubes: function (a) {
		if (arguments.length === 1) {
			this._cubes = a;
			return a;
		} else {
			return this._cubes;
		}
	}

, 
	_cube: null,
	cube: function (a) {
		if (arguments.length === 1) {
			this._cube = a;
			return a;
		} else {
			return this._cube;
		}
	}

, 
	_measureGroup: null,
	measureGroup: function (a) {
		if (arguments.length === 1) {
			this._measureGroup = a;
			return a;
		} else {
			return this._measureGroup;
		}
	}

, 
	_measureGroups: null,
	measureGroups: function (a) {
		if (arguments.length === 1) {
			this._measureGroups = a;
			return a;
		} else {
			return this._measureGroups;
		}
	}

, 
	_sourceOptions: null,
	sourceOptions: function (a) {
		if (arguments.length === 1) {
			this._sourceOptions = a;
			return a;
		} else {
			return this._sourceOptions;
		}
	}

, 
	_dataProviderFactory: null,
	dataProviderFactory: function (a) {
		if (arguments.length === 1) {
			this._dataProviderFactory = a;
			return a;
		} else {
			return this._dataProviderFactory;
		}
	}

, 
	_metadataTree: null,
	metadataTree: function (a) {
		if (arguments.length === 1) {
			this._metadataTree = a;
			return a;
		} else {
			return this._metadataTree;
		}
	}

, 
	_rowAxis: null,
	rowAxis: function (a) {
		if (arguments.length === 1) {
			this._rowAxis = a;
			return a;
		} else {
			return this._rowAxis;
		}
	}

, 
	_columnAxis: null,
	columnAxis: function (a) {
		if (arguments.length === 1) {
			this._columnAxis = a;
			return a;
		} else {
			return this._columnAxis;
		}
	}

, 
	_filters: null,
	filters: function (a) {
		if (arguments.length === 1) {
			this._filters = a;
			return a;
		} else {
			return this._filters;
		}
	}

, 
	_measures: null,
	measures: function (a) {
		if (arguments.length === 1) {
			this._measures = a;
			return a;
		} else {
			return this._measures;
		}
	}

, 
	_measureListIndex: null,
	measureListIndex: function (a) {
		if (arguments.length === 1) {
			this._measureListIndex = a;
			return a;
		} else {
			return this._measureListIndex;
		}
	}

, 
	_measureListLocation: null,
	measureListLocation: function (a) {
		if (arguments.length === 1) {
			this._measureListLocation = a;
			return a;
		} else {
			return this._measureListLocation;
		}
	}

, 
	_result: null,
	result: function (a) {
		if (arguments.length === 1) {
			this._result = a;
			return a;
		} else {
			return this._result;
		}
	}

, 
	getCoreElement: function (a, b) {
		return this.getCoreElements(a, b).firstOrDefault$1($.ig.Object.prototype.$type);
	}

, 
	getCoreElements: function (a, b) {
		var $self = this;
		if (b == $.ig.Dimension.prototype.$type) {
			return this.a.h().where$1($.ig.Dimension.prototype.$type, function (c) { return a(c)			});
		}
		if (b == $.ig.Hierarchy.prototype.$type) {
			return this.a.i().where$1($.ig.Dimension.prototype.$type, function (d) { return a(d)			});
		}
		if (b == $.ig.Level.prototype.$type) {
			return this.a.j().where$1($.ig.Dimension.prototype.$type, function (e) { return a(e)			});
		}
		if (b == $.ig.Measure.prototype.$type) {
			return this.a.g().where$1($.ig.Dimension.prototype.$type, function (f) { return a(f)			});
		}
		throw new $.ig.NotSupportedException(0, "Supported types are Dimension, Hierarchy, Level and Measure");
	}

, 
	expandTupleMember: function (a, b, c) {
		var $self = this;
		var d = this.bi(a);
		if (d == null) {
			throw new $.ig.InvalidOperationException(1, "No axis found for the specified index.");
		}
		var f = this.c.where$1($.ig.PositionInfo.prototype.$type, function (e) { return e.d() == a && e.e() == b && e.f() == c}).firstOrDefault$1($.ig.PositionInfo.prototype.$type);
		if (f == null) {
			f = (function () { var $ret = new $.ig.PositionInfo();
			$ret.d(a);
			$ret.f(c);
			$ret.e(b); return $ret;}());
			this.c.add(f);

		} else {
			this.c.remove(f);
		}
	}

, 
	collapseTupleMember: function (a, b, c) {
		var $self = this;
		var d = this.bi(a);
		if (d == null) {
			throw new $.ig.InvalidOperationException(1, "No axis found for the specified index.");
		}
		var f = this.c.where$1($.ig.PositionInfo.prototype.$type, function (e) { return e.d() == a && e.e() == b && e.f() == c}).firstOrDefault$1($.ig.PositionInfo.prototype.$type);
		if (f == null) {
			f = (function () { var $ret = new $.ig.PositionInfo();
			$ret.d(a);
			$ret.f(c);
			$ret.e(b); return $ret;}());
			this.d.add(f);

		} else {
			this.c.remove(f);
		}
	}

, 
	clearPendingChanges: function () {
		this.d.clear();
		this.c.clear();
	}

, 
	update: function () {
		var $self = this;
		var a = null;
		var b = null;
		var c = 0;
		this.k = false;
		this.j = false;
		this.at();
		a = this.as(this.columnAxis(), this.h, c);
		this.h = false;
		if (a != null) {
			c++;
		}
		b = this.as(this.rowAxis(), this.i, c);
		this.i = false;
		if (b != null) {
			b.axisIndex(c);
			c++;
		}
		if (this.rowAxis().count() == 0 && this.columnAxis().count() == 0 && this.measures().count() == 0) {
			var d = (function () { var $ret = new $.ig.OlapResult();
$ret.isEmpty(true); return $ret;}());
			var e = new $.ig.TaskCompletionSource$1($.ig.OlapResult.prototype.$type, 0);
			e.i(d);
			this.result(d);
			this.clearPendingChanges();
			return e.d();
		}
		this.ar();
		var f = new $.ig.MdxSettings();
		var g = new $.ig.MdxSlicerAxisProvider(this, this.e, this.f, this.g, f);
		var h = g.createAxis(c);
		var i = new $.ig.MdxQueryBuilder(1, f);
		var j = i.e(a, b, h, new $.ig.MdxCalculatedMembersCache(), this.cube().name());
		var k = this.getProviderDefaultProperties();
		var l = this.getProviderDefaultRestrictions();
		var m = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
		return m.executeStatementAsync(j, k, l).ae($.ig.OlapResult.prototype.$type, function (n) {
			$self.result(n.aa());
			$self.clearPendingChanges();
			return $self.result();
		});
	}

, 
	ar: function () {
		var $self = this;
		var b = this.c.getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			var c = this.bi(a.d());
			if (c == null) {
				continue;
			}
			var d = this.result().axes().indexOf(c);
			var e = this.bj(d);
			var f = c.tuples().__inner[a.e()];
			var g = f.item(a.f());
			var h = new $.ig.MdxDimensionAxisProvider(3, c, (function () { var $ret = new $.ig.List$1($.ig.IPositionItem$2.prototype.$type.specialize(String, $.ig.Object.prototype.$type), 0);
$ret.add(g); return $ret;}()));
			h.extendAxis(e, e.axisIndex());
		}
	}

, 
	as: function (a, b, c) {
		var d = null;
		if (a.count() > 0) {
			d = this.bj(c);
			if (b) {
				if (d == null) {
					var e = new $.ig.MdxDimensionAxisProvider(1, this, a);
					d = e.createAxis(c);
					this.bk(c, d);

				} else {
					var f = this.result().axes().item(c);
					var g = new $.ig.MdxDimensionAxisProvider(0, this, a, f);
					d = g.createAxis(c);
					this.bk(c, d);
				}
			}
		}
		return d;
	}

, 
	at: function () {
		var $self = this;
		if (this.result() != null) {
			var a = new $.ig.List$1($.ig.OlapResultAxis.prototype.$type, 0);
			var c = this.d.getEnumerator();
			while (c.moveNext()) {
				var b = c.current();
				var d = this.bi(b.d());
				if (d == null) {
					continue;
				}
				if (!a.contains(d)) {
					a.add(d);
				}
				var e = d.tuples().__inner[b.e()];
				var f = e.item(b.f());
				var g = d.positionResolver().getHostPositionItemInfo(e, b.f());
				var i = g.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (h) { return h.key() == f.key()}).firstOrDefault$1($.ig.PositionItemInfo$2.prototype.$type);
				if (i != null) {
					i.isExpanded(false);
				}
			}
			var k = a.getEnumerator();
			while (k.moveNext()) {
				var j = k.current();
				var l = new $.ig.MdxDimensionAxisProvider(2, this, j);
				var m = this.result().axes().indexOf(j);
				var n = l.createAxis(m);
				this.bk(m, n);
			}
		}
	}

, 
	setCatalog: function (a) {
		if (!this.isInitialized()) {
			throw new $.ig.InvalidOperationException(1, "Data source is not initialized.");
		}
		return this.a9(a);
	}

, 
	setCube: function (a) {
		if (!this.isInitialized()) {
			throw new $.ig.InvalidOperationException(1, "Data source is not initialized.");
		}
		return this.bd(a, null);
	}

, 
	setMeasureGroup: function (a) {
		if (!this.isInitialized()) {
			throw new $.ig.InvalidOperationException(1, "Data source is not initialized.");
		}
		return this.be(a);
	}

, 
	initialize: function () {
		var $self = this;
		var a = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
		if (this.isInitialized()) {
			a.i(this.metadataTree());
			return a.d();
		}
		var b = this.sourceOptions().catalog();
		var c = this.sourceOptions().cube();
		var d = this.sourceOptions().measureGroup();
		this.rowAxis(new $.ig.ArrayListCollection$1($.ig.ICoreOlapElement.prototype.$type));
		this.columnAxis(new $.ig.ArrayListCollection$1($.ig.ICoreOlapElement.prototype.$type));
		this.filters(new $.ig.ArrayListCollection$1($.ig.Hierarchy.prototype.$type));
		this.measures(new $.ig.ArrayListCollection$1($.ig.Measure.prototype.$type));
		(this.columnAxis()).collectionChanged = $.ig.Delegate.prototype.combine((this.columnAxis()).collectionChanged, this.a1.on(this));
		(this.rowAxis()).collectionChanged = $.ig.Delegate.prototype.combine((this.rowAxis()).collectionChanged, this.a2.on(this));
		(this.filters()).collectionChanged = $.ig.Delegate.prototype.combine((this.filters()).collectionChanged, this.a4.on(this));
		(this.measures()).collectionChanged = $.ig.Delegate.prototype.combine((this.measures()).collectionChanged, this.a5.on(this));
		var e = this.a6();
		if (String.isNullOrEmpty(b)) {
			e.ac(function (f) {
				if (f.h() == null) {
					$self.ax();
					a.i(null);
					return;
				}
				a.h(f.h());
			});
			return a.d();
		}
		var i = e.continueWithTask$21($.ig.IEnumerable$1.prototype.$type, $.ig.IList$1.prototype.$type, function (g) {
	if (g.h() == null) {
		return $self.a9(b);
	}
	var h = new $.ig.TaskCompletionSource$1($.ig.IList$1.prototype.$type.specialize($.ig.Cube.prototype.$type), 0);
	h.h(g.h());
	return h.d();
});
		if (String.isNullOrEmpty(c)) {
			i.ac(function (j) {
				if (j.h() == null) {
					$self.ax();
					a.i(null);
					return;
				}
				a.h(j.h());
			});
			return a.d();
		}
		var l = i.continueWithTask$21($.ig.IEnumerable$1.prototype.$type, $.ig.IList$1.prototype.$type, function (k) { return $self.bd(c, d)});
		return l.continueWithTask$21($.ig.IEnumerable$1.prototype.$type, $.ig.IList$1.prototype.$type, function (m) { return $self.au()		});
	}

, 
	addFilterMember: function (a, b) {
		var $self = this;
		var c;
		var d = (function () { var $ret = $self.bl(a, c); c = $ret.filtersCollection; return $ret.ret; }());
		if (d == null) {
			d = new $.ig.AxisElement(a, (function () { var $ret = new $.ig.List$1(String, 0);
			$ret.add(b); return $ret;}()));
			c.add(d);

		} else {
			if (!d.memberNames().contains(b)) {
				d.memberNames().add(b);
			}
		}
	}

, 
	getFilterMemberNames: function (a) {
		var $self = this;
		var b;
		var c = (function () { var $ret = $self.bl(a, b); b = $ret.filtersCollection; return $ret.ret; }());
		if (c != null) {
			return c.memberNames();
		}
		return new $.ig.List$1(String, 0);
	}

, 
	removeFilterMember: function (a, b) {
		var $self = this;
		var c;
		var d = (function () { var $ret = $self.bl(a, c); c = $ret.filtersCollection; return $ret.ret; }());
		if (d == null) {
			return;
		}
		d.memberNames().remove(b);
	}

, 
	removeAllFilterMembers: function (a) {
		var $self = this;
		var b;
		var c = (function () { var $ret = $self.bl(a, b); b = $ret.filtersCollection; return $ret.ret; }());
		if (c == null) {
			return;
		}
		c.memberNames().clear();
	}

, 
	getProviderDefaultProperties: function () {
		var $self = this;
		var a = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
		if (this.sourceOptions().discoverProperties() != null) {
			var c = this.sourceOptions().discoverProperties().getEnumerator();
			while (c.moveNext()) {
				var b = c.current();
				var d = new $.ig.XmlaQueryProperty(1, b.c(), b.d());
				a.add((function () { var $ret = new $.ig.KeyValueItem();
				$ret.c(d.c());
				$ret.d(d.d()); return $ret;}()));
			}
		}
		if (this.catalog() != null) {
			this.bh(a, $.ig.XmlaDiscoverProperties.prototype.a, this.catalog().name());
		}
		return a;
	}

, 
	getProviderDefaultRestrictions: function () {
		var $self = this;
		var a = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
		if (this.catalog() != null) {
			a.add((function () { var $ret = new $.ig.KeyValueItem();
			$ret.c($.ig.MeasureGroupRestrictions.prototype.a);
			$ret.d($self.catalog().name()); return $ret;}()));
			if (this.cube() != null) {
				a.add((function () { var $ret = new $.ig.KeyValueItem();
				$ret.c($.ig.MeasureGroupRestrictions.prototype.c);
				$ret.d($self.cube().name()); return $ret;}()));
			}
		}
		return a;
	}

, 
	getMembersOfLevel: function (a) {
		var $self = this;
		var b = this.getProviderDefaultProperties();
		var c = this.getProviderDefaultRestrictions();
		if (c != null) {
			c.add((function () { var $ret = new $.ig.KeyValueItem();
			$ret.c($.ig.MemberRestrictions.prototype.f);
			$ret.d(a); return $ret;}()));
		}
		var d = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
		return d.discoverMembersAsync(b, c);
	}

, 
	getMembersOfHierarchy: function (a) {
		var $self = this;
		var b = this.getProviderDefaultProperties();
		var c = this.getProviderDefaultRestrictions();
		if (c != null) {
			c.add((function () { var $ret = new $.ig.KeyValueItem();
			$ret.c($.ig.MemberRestrictions.prototype.e);
			$ret.d(a); return $ret;}()));
		}
		var d = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
		return d.discoverMembersAsync(b, c);
	}

, 
	getMembersOfMember: function (a) {
		var $self = this;
		var b = this.getProviderDefaultProperties();
		var c = this.getProviderDefaultRestrictions();
		if (c != null) {
			c.add((function () { var $ret = new $.ig.KeyValueItem();
			$ret.c($.ig.MemberRestrictions.prototype.i);
			$ret.d(a); return $ret;}()));
			c.add((function () { var $ret = new $.ig.KeyValueItem();
			$ret.c($.ig.MemberRestrictions.prototype.k);
			$ret.d("1"); return $ret;}()));
		}
		var d = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
		return d.discoverMembersAsync(b, c);
	}

, 
	au: function () {
		var $self = this;
		if (!String.isNullOrEmpty(this.sourceOptions().columns())) {
			var a = new $.ig.AxisDefinitionParser(this.sourceOptions().columns());
			var b = a.w();
			if (b != null && b.count() > 0) {
				var d = b.getEnumerator();
				while (d.moveNext()) {
					var c = d.current();
					this.aw($.ig.ICoreOlapElement.prototype.$type, c.name(), this.columnAxis(), $.ig.Hierarchy.prototype.$type);
					if (c.memberNames().count() > 0) {
						this.e.add(c);
					}
				}
			}
		}
		if (!String.isNullOrEmpty(this.sourceOptions().rows())) {
			var e = new $.ig.AxisDefinitionParser(this.sourceOptions().rows());
			var f = e.w();
			if (f != null && f.count() > 0) {
				var h = f.getEnumerator();
				while (h.moveNext()) {
					var g = h.current();
					this.aw($.ig.ICoreOlapElement.prototype.$type, g.name(), this.rowAxis(), $.ig.Hierarchy.prototype.$type);
					if (g.memberNames().count() > 0) {
						this.f.add(g);
					}
				}
			}
		}
		if (!String.isNullOrEmpty(this.sourceOptions().filters())) {
			var i = new $.ig.AxisDefinitionParser(this.sourceOptions().filters());
			var j = i.w();
			if (j != null && j.count() > 0) {
				var l = j.getEnumerator();
				while (l.moveNext()) {
					var k = l.current();
					this.aw($.ig.Hierarchy.prototype.$type, k.name(), this.filters(), $.ig.Hierarchy.prototype.$type);
					if (k.memberNames().count() > 0) {
						this.g.add(k);
					}
				}
			}
		}
		if (!String.isNullOrEmpty(this.sourceOptions().measures())) {
			var m = new $.ig.AxisDefinitionParser(this.sourceOptions().measures());
			var n = m.w();
			if (n != null && n.count() > 0) {
				var p = n.getEnumerator();
				while (p.moveNext()) {
					var o = p.current();
					this.aw($.ig.Measure.prototype.$type, o.name(), this.measures(), $.ig.Measure.prototype.$type);
				}
			}
		}
		if (this.h || this.i || this.j || this.k) {
			return this.update().continueWithTask$21($.ig.OlapResult.prototype.$type, $.ig.MetadataTreeItem.prototype.$type, function (q) {
				$self.ax();
				var r = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
				r.i($self.metadataTree());
				return r.d();
			});
		}
		this.ax();
		var s = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
		s.i(this.metadataTree());
		return s.d();
	}

, 
	aw: function ($tItem, a, b, c) {
		var $self = this;
		var e = function (d) { return (d).uniqueName() == a};
		var f = this.getCoreElement(e, c);
		if (f != null && !b.contains$1($.ig.Object.prototype.$type, f)) {
			b.add(f);
		}
	}

, 
	ax: function () {
		this.isInitialized(true);
	}

, 
	az: function ($t, a) {
		var b = new $.ig.ArrayListCollection$1($t);
		var d = a.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			b.add(c);
		}
		return b;
	}

, 
	a0: function (a, b) {
		var $self = this;
		switch (a.action()) {
			case $.ig.NotifyCollectionChangedAction.prototype.add:
				var d = a.newItems().getEnumerator();
				while (d.moveNext()) {
					var c = d.current();
					var e = $.ig.util.cast($.ig.Hierarchy.prototype.$type, c);
					if (e != null) {
						if (this.isInitialized()) {
							b.add(new $.ig.AxisElement(e.uniqueName(), new $.ig.List$1(String, 0)));
						}
					}
				}
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.remove:
				var g = a.oldItems().getEnumerator();
				while (g.moveNext()) {
					var f = g.current();
					var h = $.ig.util.cast($.ig.Hierarchy.prototype.$type, f);
					if (h != null) {
						var j = b.where$1($.ig.AxisElement.prototype.$type, function (i) { return i.name() == h.uniqueName()}).firstOrDefault$1($.ig.AxisElement.prototype.$type);
						if (j != null) {
							b.remove(j);
						}

					} else {
						var k = $.ig.util.cast($.ig.MeasureList.prototype.$type, f);
						if (k != null && !this.k) {
							this.measures().clear();
						}
					}
				}
				break;
		}
	}

, 
	a1: function (a, b) {
		this.h = true;
		this.a3(0, this.columnAxis(), this.rowAxis());
		this.a0(b, this.e);
	}

, 
	a2: function (a, b) {
		this.i = true;
		this.a3(1, this.rowAxis(), this.columnAxis());
		this.a0(b, this.f);
	}

, 
	a3: function (a, b, c) {
		if (b.count() > 0) {
			if (c.count() > 0) {
				if (this.b.count() < 2) {
					this.b.insert(a, null);
				}

			} else {
				if (this.b.count() == 0) {
					this.b.insert(0, null);
				}
			}

		} else {
			if (this.b.count() > 1) {
				this.b.removeAt(a);

			} else {
				this.b.removeAt(0);
			}
		}
	}

, 
	a4: function (a, b) {
		this.j = true;
		this.a0(b, this.g);
	}

, 
	a5: function (a, b) {
		var $self = this;
		this.k = true;
		var c;
		if (this.measureListLocation() == $.ig.MeasureListLocation.prototype.columns) {
			c = this.columnAxis();

		} else {
			c = this.rowAxis();
		}
		var d = null;
		var e = 0;
		var g = c.getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			d = $.ig.util.cast($.ig.MeasureList.prototype.$type, f);
			if (d != null) {
				break;
			}
			e++;
		}
		if (this.measures().count() > 1) {
			if (d == null) {
				d = (function () { var $ret = new $.ig.MeasureList();
				$ret.measures($self.measures()); return $ret;}());
				if (this.measureListIndex() > c.count()) {
					c.add(d);

				} else {
					c.insert(this.measureListIndex(), d);
				}

			} else {
				if (e != this.measureListIndex()) {
					c.removeAt(e);
					if (this.measureListIndex() > c.count()) {
						c.add(d);

					} else {
						c.insert(this.measureListIndex(), d);
					}
				}
			}

		} else {
			if (d != null) {
				c.removeAt(e);
			}
		}
	}

, 
	a6: function () {
		var $self = this;
		var a = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
		var b = this.getProviderDefaultProperties();
		var d = a.discoverCatalogsAsync(b, null).continueWithTask$21($.ig.IEnumerable$1.prototype.$type, $.ig.IEnumerable$1.prototype.$type, function (c) {
	$self.catalogs($self.az($.ig.Catalog.prototype.$type, c.aa()));
	return c;
});
		return d;
	}

, 
	a7: function (a) {
		var $self = this;
		var b = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
		var c = (function () { var $ret = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
$ret.add((function () { var $ret = new $.ig.KeyValueItem();
$ret.c($.ig.CubeRestrictions.prototype.a);
$ret.d(a); return $ret;}())); return $ret;}());
		var d = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
		if (this.sourceOptions().discoverProperties() != null) {
			var f = this.sourceOptions().discoverProperties().getEnumerator();
			while (f.moveNext()) {
				var e = f.current();
				var g = new $.ig.XmlaQueryProperty(1, e.c(), e.d());
				d.add((function () { var $ret = new $.ig.KeyValueItem();
				$ret.c(g.c());
				$ret.d(g.d()); return $ret;}()));
			}
		}
		this.bh(d, $.ig.XmlaDiscoverProperties.prototype.a, a);
		var i = b.discoverCubesAsync(d, c).ae($.ig.IList$1.prototype.$type, function (h) {
	$self.cubes($self.az($.ig.Cube.prototype.$type, h.aa()));
	return $self.cubes();
});
		return i;
	}

, 
	a8: function (a, b) {
		var $self = this;
		var c = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
		var d = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
		d.add((function () { var $ret = new $.ig.KeyValueItem();
		$ret.c($.ig.MeasureGroupRestrictions.prototype.a);
		$ret.d(a); return $ret;}()));
		d.add((function () { var $ret = new $.ig.KeyValueItem();
		$ret.c($.ig.MeasureGroupRestrictions.prototype.c);
		$ret.d(b); return $ret;}()));
		var e = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
		if (this.sourceOptions().discoverProperties() != null) {
			var g = this.sourceOptions().discoverProperties().getEnumerator();
			while (g.moveNext()) {
				var f = g.current();
				var h = new $.ig.XmlaQueryProperty(1, f.c(), f.d());
				e.add((function () { var $ret = new $.ig.KeyValueItem();
				$ret.c(h.c());
				$ret.d(h.d()); return $ret;}()));
			}
		}
		this.bh(e, $.ig.XmlaDiscoverProperties.prototype.a, a);
		var j = c.discoverMeasureGroupsAsync(e, d).ae($.ig.IList$1.prototype.$type, function (i) {
	$self.measureGroups($self.az($.ig.MeasureGroup.prototype.$type, i.aa()));
	return $self.measureGroups();
});
		return j;
	}

, 
	a9: function (a) {
		var $self = this;
		var b = new $.ig.TaskCompletionSource$1($.ig.IList$1.prototype.$type.specialize($.ig.Cube.prototype.$type), 0);
		if (this.catalog() != null) {
			if (this.catalog().name() == a) {
				b.i(this.cubes());
				return b.d();
			}
			this.ba();
		}
		var d = this.catalogs().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			if (c.name() == a) {
				this.catalog(c);
				break;
			}
		}
		if (this.cubes() == null || this.cubes().count() == 0) {
			this.a7(a).ac(function (e) {
				if (e.h() == null) {
					b.i(e.aa());
					return;
				}
				b.h(e.h());
			});

		} else {
			b.i(this.cubes());
		}
		return b.d();
	}

, 
	ba: function () {
		this.catalog(null);
		this.cubes(new $.ig.ArrayListCollection$1($.ig.Cube.prototype.$type));
		this.bb();
	}

, 
	bb: function () {
		this.cube(null);
		this.measureGroups(new $.ig.ArrayListCollection$1($.ig.MeasureGroup.prototype.$type));
		this.a = null;
		this.bc();
	}

, 
	bc: function () {
		this.measureGroup(null);
		this.metadataTree(null);
	}

, 
	bd: function (a, b) {
		var $self = this;
		if (this.catalog() == null) {
			throw new $.ig.InvalidOperationException(1, "Data source has no Catalog set.");
		}
		var c = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
		if (this.cube() != null) {
			if (this.cube().name() == a) {
				c.i(this.metadataTree());
				return c.d();
			}
			this.bb();
		}
		var d = new $.ig.List$1($.ig.Task.prototype.$type, 0);
		var f = this.cubes().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			if (e.name() == a) {
				this.cube(e);
				break;
			}
		}
		var g = this.getProviderDefaultProperties();
		var h = this.getProviderDefaultRestrictions();
		this.bh(h, $.ig.DimensionRestrictions.prototype.c, a);
		var i = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
		d.add(i.discoverMeasuresAsync(g, h));
		d.add(i.discoverDimensionsAsync(g, h));
		d.add(i.discoverHierarchiesAsync(g, h));
		d.add(i.discoverLevelsAsync(g, h));
		d.add(i.discoverMeasureGroupDimensionsAsync(g, h));
		d.add(this.a8(this.catalog().name(), a));
		var j = new Array(d.count());
		d.copyTo(j, 0);
		var k = new $.ig.TaskFactory();
		var n = k.a(j, function (l) { return $self.bg(l)}).continueWithTask$1($.ig.MetadataTreeItem.prototype.$type, function (m) { return $self.be(b)});
		return n;
	}

, 
	be: function (a) {
		var $self = this;
		if (this.catalog() == null) {
			throw new $.ig.InvalidOperationException(1, "Data source has no Catalog set.");
		}
		if (this.cube() == null) {
			throw new $.ig.InvalidOperationException(1, "Data source has no Cube set.");
		}
		var b = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
		if (this.measureGroup() != null) {
			if (this.measureGroup().name() == a) {
				b.i(this.metadataTree());
				return b.d();
			}
			this.bc();
		}
		if (this.measureGroups() == null || this.measureGroups().count() == 0) {
			var d = this.a8(this.catalog().name(), this.cube().name()).continueWithTask$21($.ig.IList$1.prototype.$type, $.ig.MetadataTreeItem.prototype.$type, function (c) { return $self.be(a)});
			return d;
		}
		var f = this.measureGroups().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			if (e.name() == a) {
				this.measureGroup(e);
				break;
			}
		}
		this.metadataTree(this.bf(a));
		b.i(this.metadataTree());
		return b.d();
	}

, 
	bf: function (a) {
		var $self = this;
		var b = (function () { var $ret = new $.ig.MetadataTreeItem();
$ret.type($.ig.MetadataTreeItemType.prototype.cube);
$ret.caption($self.cube().caption());
$ret.item($self.cube()); return $ret;}());
		var c;
		var d;
		var e = true;
		if (String.isNullOrEmpty(a) || this.measureGroups() == null) {
			c = this.a.h();
			d = this.a.g();

		} else {
			e = false;
			c = this.a.l().getMeasureGroupDimensions(a);
			d = this.a.l().getMeasureGroupMeasures(a);
		}
		var f = $.ig.MetaTreeHelper.prototype.getDimensionMetaItems(c, d, this.a.i(), this.a.j(), e);
		$.ig.MetaTreeHelper.prototype.setMetaItemChildren(b, f);
		return b;
	}

, 
	bg: function (a) {
		this.a = new $.ig.CubeMetaItemsCache();
		var b = a[0];
		var c = a[1];
		var d = a[2];
		var e = a[3];
		var f = a[4];
		this.a.g(b.aa());
		this.a.h(c.aa());
		this.a.i(d.aa());
		this.a.j(e.aa());
		if (this.measureGroups() != null) {
			this.a.k(f.aa());
			this.a.l(new $.ig.MeasureGroupMetaItemsCache(this.a.h(), this.a.g(), this.a.k()));
		}
	}

, 
	bh: function (a, b, c) {
		var $self = this;
		var d = null;
		var f = a.getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			if (e.c() == b) {
				d = e;
				break;
			}
		}
		if (d == null) {
			a.add((function () { var $ret = new $.ig.KeyValueItem();
			$ret.c(b);
			$ret.d(c); return $ret;}()));
		}
	}

, 
	bi: function (a) {
		var $self = this;
		if (this.result() != null && this.result().axes().count() > 0) {
			return this.result().axes().where$1($.ig.OlapResultAxis.prototype.$type, function (b) { return b.name() == a}).firstOrDefault$1($.ig.OlapResultAxis.prototype.$type);
		}
		return null;
	}

, 
	bj: function (a) {
		if (a < this.b.count()) {
			return this.b.item(a);
		}
		return null;
	}

, 
	bk: function (a, b) {
		this.b.item(a, b);
	}

, 
	bl: function (a, b) {
		var $self = this;
		var d = this.e.where$1($.ig.AxisElement.prototype.$type, function (c) { return c.name() == a}).firstOrDefault$1($.ig.AxisElement.prototype.$type);
		if (d != null) {
			b = this.e;
			return {
				ret: d,
				filtersCollection: b
			};
		}
		d = this.f.where$1($.ig.AxisElement.prototype.$type, function (e) { return e.name() == a}).firstOrDefault$1($.ig.AxisElement.prototype.$type);
		if (d != null) {
			b = this.f;
			return {
				ret: d,
				filtersCollection: b
			};
		}
		d = this.g.where$1($.ig.AxisElement.prototype.$type, function (f) { return f.name() == a}).firstOrDefault$1($.ig.AxisElement.prototype.$type);
		if (d != null) {
			b = this.g;
			return {
				ret: d,
				filtersCollection: b
			};
		}
		b = null;
		return {
			ret: null,
			filtersCollection: b
		};
		return {
			filtersCollection: b
		};
	}
,
	$type: new $.ig.Type('XmlaDataSourceImpl', $.ig.Object.prototype.$type, [$.ig.IOlapDataSource.prototype.$type])
}, true);

$.ig.util.defType('PositionInfo', 'Object', {
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
	$type: new $.ig.Type('PositionInfo', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('TaskExtensions', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	continueWithTask$1: function ($tResult, b) {
		var $self = this;
		var c = new $.ig.TaskCompletionSource$1($tResult, 0);
		this.t(function (d) {
		var $self = $self;
			if (d.h() == null) {
				try {
						b(d).t(function (e) {
							if (e.h() == null) {
								c.i(e.aa());
								return;
							}
							c.h(e.h());
						});

				}
				catch (e_) {
						var f;
						f = e_;
						c.h(f);

				}
			} else {
				c.h(d.h());
			}
		});
		return c.d();
	}

, 
	continueWithTask$21: function ($tResult1, $tResult2, b) {
		var $self = this;
		return this.continueWithTask$1($tResult2, function (c) { return b(c)		});
	}
,
	$type: new $.ig.Type('TaskExtensions', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaDiscoverProperties', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('XmlaDiscoverProperties', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('XmlaDataSourceOptions', 'DataSourceBaseOptions', {
	init: function () {

		$.ig.DataSourceBaseOptions.prototype.init.call(this);

	}
, 
	_serverUrl: null,
	serverUrl: function (a) {
		if (arguments.length === 1) {
			this._serverUrl = a;
			return a;
		} else {
			return this._serverUrl;
		}
	}

, 
	_credentials: null,
	credentials: function (a) {
		if (arguments.length === 1) {
			this._credentials = a;
			return a;
		} else {
			return this._credentials;
		}
	}

, 
	_catalog: null,
	catalog: function (a) {
		if (arguments.length === 1) {
			this._catalog = a;
			return a;
		} else {
			return this._catalog;
		}
	}

, 
	_cube: null,
	cube: function (a) {
		if (arguments.length === 1) {
			this._cube = a;
			return a;
		} else {
			return this._cube;
		}
	}

, 
	_measureGroup: null,
	measureGroup: function (a) {
		if (arguments.length === 1) {
			this._measureGroup = a;
			return a;
		} else {
			return this._measureGroup;
		}
	}

, 
	_discoverProperties: null,
	discoverProperties: function (a) {
		if (arguments.length === 1) {
			this._discoverProperties = a;
			return a;
		} else {
			return this._discoverProperties;
		}
	}

, 
	_executeProperties: null,
	executeProperties: function (a) {
		if (arguments.length === 1) {
			this._executeProperties = a;
			return a;
		} else {
			return this._executeProperties;
		}
	}

, 
	_dataProviderFactory: null,
	dataProviderFactory: function (a) {
		if (arguments.length === 1) {
			this._dataProviderFactory = a;
			return a;
		} else {
			return this._dataProviderFactory;
		}
	}
,
	$type: new $.ig.Type('XmlaDataSourceOptions', $.ig.DataSourceBaseOptions.prototype.$type)
}, true);

$.ig.util.defType('CustomRemoteXmlaRequestSerializer', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	serializeRequest: function (a) {
		return this.a(a);
	}

, 
	deserializeRequest: function (a) {
		throw new $.ig.NotSupportedException(1);
	}
,
	$type: new $.ig.Type('CustomRemoteXmlaRequestSerializer', $.ig.Object.prototype.$type, [$.ig.IRemoteXmlaRequestSerializer.prototype.$type])
}, true);

$.ig.util.defType('CustomRemoteXmlaResponseSerializer', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	serializeResponse: function (a, b) {
		throw new $.ig.NotSupportedException(1);
	}

, 
	deserializeResponse: function (a, b) {
		return this.a(a, b);
	}
,
	$type: new $.ig.Type('CustomRemoteXmlaResponseSerializer', $.ig.Object.prototype.$type, [$.ig.IRemoteXmlaResponseSerializer.prototype.$type])
}, true);

$.ig.util.defType('XmlaDataSource', 'Object', {
	a: null
, 
		init: function (a) {

			var $self = this;

			$.ig.Object.prototype.init.call(this);
						var b = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "serverUrl");
				var c = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "catalog");
				var d = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "cube");
				var e = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "measures");
				var f = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "measureGroup");
				var g = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "filters");
				var h = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "columns");
				var i = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "rows");
				var j = $.ig.jQueryUtils.prototype.convertToStringDictionary($.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "discoverProperties"));
				var k = $.ig.jQueryUtils.prototype.convertToStringDictionary($.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "executeProperties"));
				var l = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "isRemote");
				var m = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "serializeRequest");
				var n = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, "deserializeResponse");
				var o = new $.ig.CustomRemoteXmlaRequestSerializer(m);
				var p = new $.ig.CustomRemoteXmlaResponseSerializer(n);
				var q = new $.ig.RemoteXmlaDataProviderFactory(1, o, p);
				var r = (function () { var $ret = new $.ig.XmlaDataSourceOptions();
$ret.serverUrl(b);
$ret.catalog(c);
$ret.cube(d);
$ret.measures(e);
$ret.measureGroup(f);
$ret.filters(g);
$ret.columns(h);
$ret.rows(i);
$ret.discoverProperties(j);
$ret.executeProperties(k); return $ret;}());
				if (l) {
					r.dataProviderFactory(new $.ig.RemoteXmlaDataProviderFactory(0));
				}
				this.a = new $.ig.XmlaDataSourceImpl(r);
		}
, 
	isInitialized: function () {
			return this.a.isInitialized();
	}

, 
	initialize: function () {
		return this.a.initialize().f();
	}

, 
	catalogs: function () {
			return (this.a.catalogs()).inner();
	}

, 
	catalog: function () {
			return this.a.catalog();
	}

, 
	setCatalog: function (a) {
		var $self = this;
		return this.a.setCatalog(a).ae($.ig.Array.prototype.$type, function (b) {
	return (b.aa()).inner();
}).f();
	}

, 
	cubes: function () {
			return (this.a.cubes()).inner();
	}

, 
	cube: function () {
			return this.a.cube();
	}

, 
	setCube: function (a) {
		var $self = this;
		return this.a.setCube(a).ae($.ig.MetadataTreeItem.prototype.$type, function (b) {
	return b.aa();
}).f();
	}

, 
	measureGroups: function () {
			return (this.a.measureGroups()).inner();
	}

, 
	measureGroup: function () {
			return this.a.measureGroup();
	}

, 
	setMeasureGroup: function (a) {
		var $self = this;
		return this.a.setMeasureGroup(a).ae($.ig.MetadataTreeItem.prototype.$type, function (b) {
	return b.aa();
}).f();
	}

, 
	metadataTree: function () {
			return this.a.metadataTree();
	}

, 
	addRowItem: function (a) {
		if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null) {
			this.a.rowAxis().add(a);
		}
	}

, 
	removeRowItem: function (a) {
		if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null || $.ig.util.cast($.ig.MeasureList.prototype.$type, a) !== null) {
			this.a.rowAxis().remove(a);
		}
	}

, 
	addColumnItem: function (a) {
		if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null) {
			this.a.columnAxis().add(a);
		}
	}

, 
	removeColumnItem: function (a) {
		if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null || $.ig.util.cast($.ig.MeasureList.prototype.$type, a) !== null) {
			this.a.columnAxis().remove(a);
		}
	}

, 
	addFilterItem: function (a) {
		if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null) {
			this.a.filters().add(a);
		}
	}

, 
	removeFilterItem: function (a) {
		if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null) {
			this.a.filters().remove(a);
		}
	}

, 
	addMeasureItem: function (a) {
		if ($.ig.util.cast($.ig.Measure.prototype.$type, a) !== null) {
			this.a.measures().add(a);
		}
	}

, 
	removeMeasureItem: function (a) {
		if ($.ig.util.cast($.ig.Measure.prototype.$type, a) !== null) {
			this.a.measures().remove(a);
		}
	}

, 
	setMasureListIndex: function (a) {
		this.a.measureListIndex(a);
	}

, 
	setMeasureListLocation: function (a) {
		switch (a) {
			case "rows":
				this.a.measureListLocation($.ig.MeasureListLocation.prototype.rows);
				break;
			case "columns":
				this.a.measureListLocation($.ig.MeasureListLocation.prototype.columns);
				break;
			default:
				break;
		}
	}

, 
	expandTupleMember: function (a, b, c) {
		this.a.expandTupleMember(a, b, c);
	}

, 
	collapseTupleMember: function (a, b, c) {
		this.a.collapseTupleMember(a, b, c);
	}

, 
	rowAxis: function () {
			return (this.a.rowAxis()).inner();
	}

, 
	columnAxis: function () {
			return (this.a.columnAxis()).inner();
	}

, 
	filters: function () {
			return (this.a.filters()).inner();
	}

, 
	measures: function () {
			return (this.a.measures()).inner();
	}

, 
	result: function () {
			return this.a.result();
	}

, 
	clearPendingChanges: function () {
		this.a.clearPendingChanges();
	}

, 
	update: function () {
		return this.a.update().f();
	}
,
	$type: new $.ig.Type('XmlaDataSource', $.ig.Object.prototype.$type)
}, true);
$.ig.RemoteXmlaRequestType.prototype.discoverCatalogs = 0;
$.ig.RemoteXmlaRequestType.prototype.discoverCubes = 1;
$.ig.RemoteXmlaRequestType.prototype.discoverDimensions = 2;
$.ig.RemoteXmlaRequestType.prototype.discoverHierarchies = 3;
$.ig.RemoteXmlaRequestType.prototype.discoverLevels = 4;
$.ig.RemoteXmlaRequestType.prototype.discoverMeasures = 5;
$.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups = 6;
$.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions = 7;
$.ig.RemoteXmlaRequestType.prototype.discoverMembers = 8;
$.ig.RemoteXmlaRequestType.prototype.executeStatement = 9;
$.ig.MdxDimensionAxisCreateMode.prototype.create = 0;
$.ig.MdxDimensionAxisCreateMode.prototype.extend = 1;
$.ig.MdxDimensionAxisCreateMode.prototype.change = 2;
$.ig.MdxElementType.prototype.member = 0;
$.ig.MdxElementType.prototype.memberTree = 1;
$.ig.MdxElementType.prototype.calculated = 2;
$.ig.MdxElementType.prototype.filter = 3;
$.ig.MdxElementType.prototype.collection = 4;
$.ig.MdxElementType.prototype.userDefined = 5;
$.ig.XmlaSoapMessageHeader.prototype.none = 0;
$.ig.XmlaSoapMessageHeader.prototype.session = 1;
$.ig.XmlaSoapMessageHeader.prototype.beginSession = 2;
$.ig.XmlaSoapMessageHeader.prototype.endSession = 3;
$.ig.CatalogConstants.prototype.a = "CATALOG_NAME";
$.ig.CatalogConstants.prototype.b = "DESCRIPTION";
$.ig.CatalogConstants.prototype.c = "ROLES";
$.ig.CatalogConstants.prototype.d = "DATE_MODIFIED";
$.ig.DbSchemaConstants.prototype.a = "DBSCHEMA_CATALOGS";
$.ig.DbSchemaConstants.prototype.b = "DBSCHEMA_COLUMNS";
$.ig.DbSchemaConstants.prototype.c = "DBSCHEMA_TABLES";
$.ig.DbSchemaConstants.prototype.d = "DBSCHEMA_PROVIDER_TYPES";
$.ig.CubeConstants.prototype.a = "CATALOG_NAME";
$.ig.CubeConstants.prototype.b = "SCHEMA_NAME";
$.ig.CubeConstants.prototype.c = "CUBE_NAME";
$.ig.CubeConstants.prototype.d = "CUBE_TYPE";
$.ig.CubeConstants.prototype.e = "LAST_SCHEMA_UPDATE";
$.ig.CubeConstants.prototype.f = "LAST_DATA_UPDATE";
$.ig.CubeConstants.prototype.g = "DESCRIPTION";
$.ig.CubeConstants.prototype.h = "IS_DRILLTHROUGH_ENABLED";
$.ig.CubeConstants.prototype.i = "IS_LINKABLE";
$.ig.CubeConstants.prototype.j = "IS_WRITE_ENABLED";
$.ig.CubeConstants.prototype.k = "IS_SQL_ENABLED";
$.ig.CubeConstants.prototype.l = "CUBE_CAPTION";
$.ig.CubeConstants.prototype.m = "BASE_CUBE_NAME";
$.ig.CubeConstants.prototype.n = "ANNOTATIONS";
$.ig.DimensionConstants.prototype.a = "CATALOG_NAME";
$.ig.DimensionConstants.prototype.b = "SCHEMA_NAME";
$.ig.DimensionConstants.prototype.c = "CUBE_NAME";
$.ig.DimensionConstants.prototype.d = "DIMENSION_NAME";
$.ig.DimensionConstants.prototype.e = "DIMENSION_UNIQUE_NAME";
$.ig.DimensionConstants.prototype.f = "DIMENSION_CAPTION";
$.ig.DimensionConstants.prototype.g = "DIMENSION_ORDINAL";
$.ig.DimensionConstants.prototype.h = "DIMENSION_TYPE";
$.ig.DimensionConstants.prototype.i = "DIMENSION_CARDINALITY";
$.ig.DimensionConstants.prototype.j = "DEFAULT_HIERARCHY";
$.ig.DimensionConstants.prototype.k = "DESCRIPTION";
$.ig.DimensionConstants.prototype.l = "IS_VIRTUAL";
$.ig.DimensionConstants.prototype.m = "IS_READWRITE";
$.ig.DimensionConstants.prototype.n = "DIMENSION_UNIQUE_SETTINGS";
$.ig.DimensionConstants.prototype.o = "DIMENSION_MASTER_NAME";
$.ig.DimensionConstants.prototype.p = "DIMENSION_IS_VISIBLE";
$.ig.HierarchyConstants.prototype.a = "CATALOG_NAME";
$.ig.HierarchyConstants.prototype.b = "CUBE_NAME";
$.ig.HierarchyConstants.prototype.c = "DIMENSION_UNIQUE_NAME";
$.ig.HierarchyConstants.prototype.d = "HIERARCHY_NAME";
$.ig.HierarchyConstants.prototype.e = "HIERARCHY_UNIQUE_NAME";
$.ig.HierarchyConstants.prototype.f = "HIERARCHY_CAPTION";
$.ig.HierarchyConstants.prototype.g = "DIMENSION_TYPE";
$.ig.HierarchyConstants.prototype.h = "HIERARCHY_CARDINALITY";
$.ig.HierarchyConstants.prototype.i = "DEFAULT_MEMBER";
$.ig.HierarchyConstants.prototype.j = "ALL_MEMBER";
$.ig.HierarchyConstants.prototype.k = "DESCRIPTION";
$.ig.HierarchyConstants.prototype.l = "IS_VIRTUAL";
$.ig.HierarchyConstants.prototype.m = "IS_READWRITE";
$.ig.HierarchyConstants.prototype.n = "DIMENSION_UNIQUE_SETTINGS";
$.ig.HierarchyConstants.prototype.o = "DIMENSION_IS_VISIBLE";
$.ig.HierarchyConstants.prototype.p = "DIMENSION_MASTER_UNIQUE_NAME";
$.ig.HierarchyConstants.prototype.q = "HIERARCHY_ORDINAL";
$.ig.HierarchyConstants.prototype.r = "DIMENSION_IS_SHARED";
$.ig.HierarchyConstants.prototype.s = "HIERARCHY_IS_VISIBLE";
$.ig.HierarchyConstants.prototype.t = "HIERARCHY_ORIGIN";
$.ig.HierarchyConstants.prototype.u = "HIERARCHY_DISPLAY_FOLDER";
$.ig.HierarchyConstants.prototype.v = "INSTANCE_SELECTION";
$.ig.HierarchyConstants.prototype.w = "GROUPING_BEHAVIOR";
$.ig.HierarchyConstants.prototype.x = "STRUCTURE_TYPE";
$.ig.InstanceConstants.prototype.a = "INSTANCE_NAME";
$.ig.InstanceConstants.prototype.b = "INSTANCE_PORT_NUMBER";
$.ig.InstanceConstants.prototype.c = "INSTANCE_STATE";
$.ig.LevelConstants.prototype.a = "CATALOG_NAME";
$.ig.LevelConstants.prototype.b = "CUBE_NAME";
$.ig.LevelConstants.prototype.c = "DIMENSION_UNIQUE_NAME";
$.ig.LevelConstants.prototype.d = "HIERARCHY_UNIQUE_NAME";
$.ig.LevelConstants.prototype.e = "LEVEL_NAME";
$.ig.LevelConstants.prototype.f = "LEVEL_UNIQUE_NAME";
$.ig.LevelConstants.prototype.g = "LEVEL_CAPTION";
$.ig.LevelConstants.prototype.h = "LEVEL_NUMBER";
$.ig.LevelConstants.prototype.i = "LEVEL_CARDINALITY";
$.ig.LevelConstants.prototype.j = "LEVEL_TYPE";
$.ig.LevelConstants.prototype.k = "DESCRIPTION";
$.ig.LevelConstants.prototype.l = "CUSTOM_ROLLUP_SETTINGS";
$.ig.LevelConstants.prototype.m = "LEVEL_UNIQUE_SETTINGS";
$.ig.LevelConstants.prototype.n = "LEVEL_IS_VISIBLE";
$.ig.LevelConstants.prototype.o = "LEVEL_ORDERING_PROPERTY";
$.ig.LevelConstants.prototype.p = "LEVEL_DBTYPE";
$.ig.LevelConstants.prototype.q = "LEVEL_KEY_CARDINALITY";
$.ig.LevelConstants.prototype.r = "LEVEL_ORIGIN";
$.ig.MeasureConstants.prototype.a = "CATALOG_NAME";
$.ig.MeasureConstants.prototype.b = "SCHEMA_NAME";
$.ig.MeasureConstants.prototype.c = "CUBE_NAME";
$.ig.MeasureConstants.prototype.d = "MEASURE_NAME";
$.ig.MeasureConstants.prototype.e = "MEASURE_UNIQUE_NAME";
$.ig.MeasureConstants.prototype.f = "MEASURE_CAPTION";
$.ig.MeasureConstants.prototype.g = "MEASURE_AGGREGATOR";
$.ig.MeasureConstants.prototype.h = "DATA_TYPE";
$.ig.MeasureConstants.prototype.i = "NUMERIC_PRECISION";
$.ig.MeasureConstants.prototype.j = "NUMERIC_SCALE";
$.ig.MeasureConstants.prototype.k = "EXPRESSION";
$.ig.MeasureConstants.prototype.l = "DESCRIPTION";
$.ig.MeasureConstants.prototype.m = "MEASURE_IS_VISIBLE";
$.ig.MeasureConstants.prototype.n = "MEASURE_NAME_SQL_COLUMN_NAME";
$.ig.MeasureConstants.prototype.o = "MEASURE_UNQUALIFIED_CAPTION";
$.ig.MeasureConstants.prototype.p = "MEASUREGROUP_NAME";
$.ig.MeasureConstants.prototype.q = "MEASURE_DISPLAY_FOLDER";
$.ig.MeasureConstants.prototype.r = "DEFAULT_FORMAT_STRING";
$.ig.MeasureGroupConstants.prototype.a = "CATALOG_NAME";
$.ig.MeasureGroupConstants.prototype.b = "SCHEMA_NAME";
$.ig.MeasureGroupConstants.prototype.c = "CUBE_NAME";
$.ig.MeasureGroupConstants.prototype.d = "MEASUREGROUP_NAME";
$.ig.MeasureGroupConstants.prototype.e = "DESCRIPTION";
$.ig.MeasureGroupConstants.prototype.f = "MEASUREGROUP_CAPTION";
$.ig.MeasureGroupDimensionConstants.prototype.a = "CATALOG_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.b = "SCHEMA_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.c = "CUBE_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.d = "MEASUREGROUP_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.e = "MEASUREGROUP_CARDINALITY";
$.ig.MeasureGroupDimensionConstants.prototype.f = "DIMENSION_UNIQUE_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.g = "DIMENSION_CARDINALITY";
$.ig.MeasureGroupDimensionConstants.prototype.h = "DIMENSION_IS_VISIBLE";
$.ig.MeasureGroupDimensionConstants.prototype.i = "DIMENSION_IS_FACT_DIMENSION";
$.ig.MeasureGroupDimensionConstants.prototype.j = "DIMENSION_PATH";
$.ig.MeasureGroupDimensionConstants.prototype.k = "DIMENSION_GRANULARITY";
$.ig.MemberConstants.prototype.a = "CATALOG_NAME";
$.ig.MemberConstants.prototype.b = "SCHEMA_NAME";
$.ig.MemberConstants.prototype.c = "CUBE_NAME";
$.ig.MemberConstants.prototype.d = "DIMENSION_UNIQUE_NAME";
$.ig.MemberConstants.prototype.e = "HIERARCHY_UNIQUE_NAME";
$.ig.MemberConstants.prototype.f = "LEVEL_UNIQUE_NAME";
$.ig.MemberConstants.prototype.g = "LEVEL_NUMBER";
$.ig.MemberConstants.prototype.h = "MEMBER_NAME";
$.ig.MemberConstants.prototype.i = "MEMBER_UNIQUE_NAME";
$.ig.MemberConstants.prototype.j = "MEMBER_TYPE";
$.ig.MemberConstants.prototype.k = "MEMBER_GUID";
$.ig.MemberConstants.prototype.l = "MEMBER_CAPTION";
$.ig.MemberConstants.prototype.m = "CHILDREN_CARDINALITY";
$.ig.MemberConstants.prototype.n = "PARENT_LEVEL";
$.ig.MemberConstants.prototype.o = "PARENT_UNIQUE_NAME";
$.ig.MemberConstants.prototype.p = "PARENT_COUNT";
$.ig.MemberConstants.prototype.q = "DESCRIPTION";
$.ig.MemberConstants.prototype.r = "EXPRESSION";
$.ig.MemberConstants.prototype.s = "MEMBER_KEY";
$.ig.MemberConstants.prototype.t = "IS_PLACEHOLDERMEMBER";
$.ig.MemberConstants.prototype.u = "IS_DATAMEMBER";
$.ig.MemberConstants.prototype.v = "SCOPE";
$.ig.OlapSchemaConstants.prototype.a = "MDSCHEMA_CUBES";
$.ig.OlapSchemaConstants.prototype.b = "MDSCHEMA_DIMENSIONS";
$.ig.OlapSchemaConstants.prototype.c = "MDSCHEMA_MEASUREGROUPS";
$.ig.OlapSchemaConstants.prototype.d = "MDSCHEMA_MEASUREGROUP_DIMENSIONS";
$.ig.OlapSchemaConstants.prototype.e = "MDSCHEMA_MEASURES";
$.ig.OlapSchemaConstants.prototype.f = "MDSCHEMA_HIERARCHIES";
$.ig.OlapSchemaConstants.prototype.g = "MDSCHEMA_LEVELS";
$.ig.OlapSchemaConstants.prototype.h = "MDSCHEMA_MEMBERS";
$.ig.CubeRestrictions.prototype.a = "CATALOG_NAME";
$.ig.CubeRestrictions.prototype.b = "SCHEMA_NAME";
$.ig.CubeRestrictions.prototype.c = "CUBE_NAME";
$.ig.CubeRestrictions.prototype.d = "CUBE_SOURCE";
$.ig.DimensionRestrictions.prototype.a = "CATALOG_NAME";
$.ig.DimensionRestrictions.prototype.b = "SCHEMA_NAME";
$.ig.DimensionRestrictions.prototype.c = "CUBE_NAME";
$.ig.DimensionRestrictions.prototype.d = "DIMENSION_NAME";
$.ig.DimensionRestrictions.prototype.e = "DIMENSION_UNIQUE_NAME";
$.ig.DimensionRestrictions.prototype.f = "CUBE_SOURCE";
$.ig.DimensionRestrictions.prototype.g = "DIMENSION_VISIBILITY";
$.ig.HierarchyRestrictions.prototype.a = "CATALOG_NAME";
$.ig.HierarchyRestrictions.prototype.b = "SCHEMA_NAME";
$.ig.HierarchyRestrictions.prototype.c = "CUBE_NAME";
$.ig.HierarchyRestrictions.prototype.d = "DIMENSION_UNIQUE_NAME";
$.ig.HierarchyRestrictions.prototype.e = "HIERARCHY_NAME";
$.ig.HierarchyRestrictions.prototype.f = "HIERARCHY_UNIQUE_NAME";
$.ig.HierarchyRestrictions.prototype.g = "HIERARCHY_ORIGIN";
$.ig.HierarchyRestrictions.prototype.h = "CUBE_SOURCE";
$.ig.HierarchyRestrictions.prototype.i = "HIERARCHY_VISIBILITY";
$.ig.LevelRestrictions.prototype.a = "CATALOG_NAME";
$.ig.LevelRestrictions.prototype.b = "SCHEMA_NAME";
$.ig.LevelRestrictions.prototype.c = "CUBE_NAME";
$.ig.LevelRestrictions.prototype.d = "DIMENSION_UNIQUE_NAME";
$.ig.LevelRestrictions.prototype.e = "HIERARCHY_UNIQUE_NAME";
$.ig.LevelRestrictions.prototype.f = "LEVEL_NAME";
$.ig.LevelRestrictions.prototype.g = "LEVEL_UNIQUE_NAME";
$.ig.LevelRestrictions.prototype.h = "LEVEL_ORIGIN";
$.ig.LevelRestrictions.prototype.i = "CUBE_SOURCE";
$.ig.LevelRestrictions.prototype.j = "LEVEL_VISIBILITY";
$.ig.MeasureRestrictions.prototype.a = "CATALOG_NAME";
$.ig.MeasureRestrictions.prototype.b = "SCHEMA_NAME";
$.ig.MeasureRestrictions.prototype.c = "CUBE_NAME";
$.ig.MeasureRestrictions.prototype.d = "MEASURE_NAME";
$.ig.MeasureRestrictions.prototype.e = "MEASURE_UNIQUE_NAME";
$.ig.MeasureRestrictions.prototype.f = "MEASUREGROUP_NAME";
$.ig.MeasureRestrictions.prototype.g = "CUBE_SOURCE";
$.ig.MeasureRestrictions.prototype.h = "MEASURE_VISIBILITY";
$.ig.MeasureGroupRestrictions.prototype.a = "CATALOG_NAME";
$.ig.MeasureGroupRestrictions.prototype.b = "SCHEMA_NAME";
$.ig.MeasureGroupRestrictions.prototype.c = "CUBE_NAME";
$.ig.MeasureGroupRestrictions.prototype.d = "MEASUREGROUP_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.a = "CATALOG_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.b = "SCHEMA_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.c = "CUBE_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.d = "MEASUREGROUP_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.e = "DIMENSION_UNIQUE_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.f = "DIMENSION_VISIBILITY";
$.ig.MemberRestrictions.prototype.a = "CATALOG_NAME";
$.ig.MemberRestrictions.prototype.b = "SCHEMA_NAME";
$.ig.MemberRestrictions.prototype.c = "CUBE_NAME";
$.ig.MemberRestrictions.prototype.d = "DIMENSION_UNIQUE_NAME";
$.ig.MemberRestrictions.prototype.e = "HIERARCHY_UNIQUE_NAME";
$.ig.MemberRestrictions.prototype.f = "LEVEL_UNIQUE_NAME";
$.ig.MemberRestrictions.prototype.g = "LEVEL_NUMBER";
$.ig.MemberRestrictions.prototype.h = "MEMBER_NAME";
$.ig.MemberRestrictions.prototype.i = "MEMBER_UNIQUE_NAME";
$.ig.MemberRestrictions.prototype.j = "MEMBER_TYPE";
$.ig.MemberRestrictions.prototype.k = "TREE_OP";
$.ig.MemberRestrictions.prototype.l = "CUBE_SOURCE";
$.ig.XmlaConstants.prototype.a = "DBSCHEMA_CATALOGS";
$.ig.XmlaConstants.prototype.b = "MDSCHEMA_CUBES";
$.ig.XmlaConstants.prototype.c = "RestrictionList";
$.ig.XmlaConstants.prototype.d = "PropertyList";
$.ig.XmlaConstants.prototype.e = "DataSourceInfo";
$.ig.XmlaConstants.prototype.f = "Catalog";
$.ig.XmlaConstants.prototype.g = "SCHEMA_NAME";
$.ig.XmlaConstants.prototype.h = "row";
$.ig.XmlaConstants.prototype.i = "DESCRIPTION";
$.ig.XmlaConstants.prototype.j = "CUBE";
$.ig.XmlaConstants.prototype.k = "DIMENSION";
$.ig.XmlaConstants.prototype.l = "MDSCHEMA_DIMENSIONS";
$.ig.XmlaConstants.prototype.m = "MDSCHEMA_MEASUREGROUPS";
$.ig.XmlaConstants.prototype.n = "MEASUREGROUP_NAME";
$.ig.XmlaConstants.prototype.o = "MEASUREGROUP_CAPTION";
$.ig.XmlaConstants.prototype.p = "MDSCHEMA_MEASUREGROUP_DIMENSIONS";
$.ig.XmlaConstants.prototype.q = "DIMENSION_NAME";
$.ig.XmlaConstants.prototype.r = "DIMENSION_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.s = "DIMENSION_CAPTION";
$.ig.XmlaConstants.prototype.t = "MDSCHEMA_MEASURES";
$.ig.XmlaConstants.prototype.u = "MEASURE_NAME";
$.ig.XmlaConstants.prototype.v = "MEASURE_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.w = "MEASURE_CAPTION";
$.ig.XmlaConstants.prototype.x = "MEASURE_AGGREGATOR";
$.ig.XmlaConstants.prototype.y = "DIMENSION_TYPE";
$.ig.XmlaConstants.prototype.z = "MDSCHEMA_HIERARCHIES";
$.ig.XmlaConstants.prototype.aa = "HIERARCHY_NAME";
$.ig.XmlaConstants.prototype.ab = "HIERARCHY_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.ac = "HIERARCHY_CAPTION";
$.ig.XmlaConstants.prototype.ad = "HIERARCHY_ORIGIN";
$.ig.XmlaConstants.prototype.ae = "DEFAULT_MEMBER";
$.ig.XmlaConstants.prototype.af = "ALL_MEMBER";
$.ig.XmlaConstants.prototype.ag = "LEVEL_NAME";
$.ig.XmlaConstants.prototype.ah = "LEVEL_CAPTION";
$.ig.XmlaConstants.prototype.ai = "LEVEL_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.aj = "LEVEL_NUMBER";
$.ig.XmlaConstants.prototype.ak = "LEVEL_CARDINALITY";
$.ig.XmlaConstants.prototype.al = "MDSCHEMA_LEVELS";
$.ig.XmlaConstants.prototype.am = "MDSCHEMA_MEMBERS";
$.ig.XmlaConstants.prototype.an = "TREE_OP";
$.ig.XmlaConstants.prototype.ao = "MEMBER_NAME";
$.ig.XmlaConstants.prototype.ap = "MEMBER_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.aq = "MEMBER_CAPTION";
$.ig.XmlaConstants.prototype.ar = "PARENT_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.as = "CHILDREN_CARDINALITY";
$.ig.XmlaConstants.prototype.at = "DEFAULT_FORMAT_STRING";
$.ig.XmlaConstants.prototype.au = "HIERARCHY_DISPLAY_FOLDER";
$.ig.XmlaConstants.prototype.av = "SCOPE";
$.ig.XmlaSoapMethodResult.prototype.a = "return";
$.ig.XmlaNamespace.prototype.a = "urn:schemas-microsoft-com:xml-sql";
$.ig.XmlaNamespace.prototype.b = "urn:schemas-microsoft-com:xml-analysis";
$.ig.XmlaNamespace.prototype.c = "urn:schemas-microsoft-com:xml-analysis:mddataset";
$.ig.XmlaNamespace.prototype.d = "urn:schemas-microsoft-com:xml-analysis:rowset";
$.ig.XmlaNamespace.prototype.e = "urn:schemas-microsoft-com:xml-analysis:empty";
$.ig.XmlaNamespace.prototype.f = "urn:schemas-microsoft-com:xml-analysis:exception";
$.ig.XmlaSoapMessageBuilder.prototype.a = "Envelope";
$.ig.XmlaSoapMessageBuilder.prototype.b = "Header";
$.ig.XmlaSoapMessageBuilder.prototype.c = "Body";
$.ig.XmlaSoapMessageBuilder.prototype.d = "soap";
$.ig.XmlaSoapMessageBuilder.prototype.e = "http://schemas.xmlsoap.org/soap/envelope/";
$.ig.XmlaSoapMethod.prototype.a = "Properties";
$.ig.XmlaSoapMethod.prototype.b = "PropertyList";
$.ig.XmlaSoapMethodDiscover.prototype.n = "Discover";
$.ig.XmlaSoapMethodDiscover.prototype.o = "RequestType";
$.ig.XmlaSoapMethodDiscover.prototype.p = "Restrictions";
$.ig.XmlaSoapMethodDiscover.prototype.q = "RestrictionList";
$.ig.XmlaSoapMethodDiscover.prototype.r = "SessionId";
$.ig.XmlaSoapMethodExecute.prototype.n = "Execute";
$.ig.XmlaSoapMethodExecute.prototype.o = "Command";
$.ig.XmlaSoapMethodExecute.prototype.p = "Statement";
$.ig.ArrayJsonSerializer.prototype.a = new $.ig.ArrayJsonSerializer();
$.ig.AxisJsonTypeSeriazlier.prototype.a = new $.ig.AxisJsonTypeSeriazlier();
$.ig.AxisMemberJsonTypeSeriazlier.prototype.a = new $.ig.AxisMemberJsonTypeSeriazlier();
$.ig.CatalogJsonTypeSeriazlier.prototype.a = new $.ig.CatalogJsonTypeSeriazlier();
$.ig.CellJsonTypeSeriazlier.prototype.a = new $.ig.CellJsonTypeSeriazlier();
$.ig.CubeJsonTypeSeriazlier.prototype.a = new $.ig.CubeJsonTypeSeriazlier();
$.ig.DimensionJsonTypeSeriazlier.prototype.a = new $.ig.DimensionJsonTypeSeriazlier();
$.ig.HierarchyJsonTypeSeriazlier.prototype.a = new $.ig.HierarchyJsonTypeSeriazlier();
$.ig.LevelJsonTypeSeriazlier.prototype.a = new $.ig.LevelJsonTypeSeriazlier();
$.ig.MeasureGroupDimensionJsonTypeSeriazlier.prototype.a = new $.ig.MeasureGroupDimensionJsonTypeSeriazlier();
$.ig.MeasureGroupJsonTypeSeriazlier.prototype.a = new $.ig.MeasureGroupJsonTypeSeriazlier();
$.ig.MeasureJsonTypeSeriazlier.prototype.a = new $.ig.MeasureJsonTypeSeriazlier();
$.ig.MemberJsonTypeSeriazlier.prototype.a = new $.ig.MemberJsonTypeSeriazlier();
$.ig.RemoteXmlaRequestJsonTypeSeriazlier.prototype.a = new $.ig.RemoteXmlaRequestJsonTypeSeriazlier();
$.ig.ResultJsonTypeSeriazlier.prototype.a = new $.ig.ResultJsonTypeSeriazlier();
$.ig.TupleJsonTypeSeriazlier.prototype.a = new $.ig.TupleJsonTypeSeriazlier();
$.ig.XmlaDiscoverProperties.prototype.a = "Catalog";

$.ig.util.extCopy($.ig.TaskExtensions, [[[$.ig.Task], ['continueWithTask$1']], [[$.ig.Task$1], ['continueWithTask$21']]]);
$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.XmlaPropertiesCollection], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.XmlaPropertiesCollection], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.XmlaPropertiesCollection], ['asQueryable']]]);

