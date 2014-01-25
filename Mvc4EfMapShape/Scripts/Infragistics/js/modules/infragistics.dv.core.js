/*!
* Infragistics.Web.ClientUI infragistics.dv.core.js 12.2.20122.1021
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
$.ig.util.defType('Visibility', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('Visibility', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PenLineCap', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('PenLineCap', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SweepDirection', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('SweepDirection', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PathSegmentType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('PathSegmentType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('GeometryType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('GeometryType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('ModifierKeys', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('ModifierKeys', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Key', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('Key', $.ig.Object.prototype.$type)
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



$.ig.util.defType('ObservableCollection$1', 'List$1', {
	$t: null
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


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.List$1.prototype.init.call(this, this.$t);
		}
, 
		init1: function ($t, initNumber, a) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.List$1.prototype.init1.call(this, this.$t, 1, a);
		}
, 
		init2: function ($t, initNumber, a) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.List$1.prototype.init2.call(this, this.$t, 2, a);
		}
, 
	i: function (a, b) {
		var c = this.__inner[a];
		$.ig.List$1.prototype.i.call(this, a, b);
		if (this.propertyChanged != null) {
			this.ag(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var d = new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, b, c, a);
			this.ah(d);
		}
	}

, 
	m: function () {
		$.ig.List$1.prototype.m.call(this);
		if (this.propertyChanged != null) {
			this.ag(new $.ig.PropertyChangedEventArgs("Count"));
			this.ag(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var a = new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset);
			this.ah(a);
		}
	}

, 
	j: function (a, b) {
		$.ig.List$1.prototype.j.call(this, a, b);
		if (this.propertyChanged != null) {
			this.ag(new $.ig.PropertyChangedEventArgs("Count"));
			this.ag(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var c = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, b, a);
			this.ah(c);
		}
	}

, 
	k: function (a) {
		$.ig.List$1.prototype.k.call(this, a);
		if (this.propertyChanged != null) {
			this.ag(new $.ig.PropertyChangedEventArgs("Count"));
			this.ag(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var b = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, a, this.count() - 1);
			this.ah(b);
		}
	}

, 
	l: function (a) {
		var b = this.__inner[a];
		$.ig.List$1.prototype.l.call(this, a);
		if (this.propertyChanged != null) {
			this.ag(new $.ig.PropertyChangedEventArgs("Count"));
			this.ag(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var c = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, b, a);
			this.ah(c);
		}
	}
, 
	collectionChanged: null, 
	propertyChanged: null
, 
	ag: function (a) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, a);
		}
	}

, 
	ah: function (a) {
		if (this.collectionChanged != null) {
			this.collectionChanged(this, a);
		}
	}
,
	$type: new $.ig.Type('ObservableCollection$1', $.ig.List$1.prototype.$type.specialize(0), [$.ig.INotifyCollectionChanged.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])
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

$.ig.util.defType('DependencyObject', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this._localValues = new $.ig.Dictionary(0);
				this.a = new $.ig.Dictionary(0);
		}, 
	_localValues: null, 
	a: null
, 
	b: function (a) {
		if (this._localValues.containsKey(a.name())) {
			return this._localValues.item(a.name());
		}
		return a.f().c();
	}

, 
	c: function (dp_, a) {
		if (dp_.e()) {
			var oldValue_ = null;
			var old = this._localValues.proxy[dp_.__name]; if (typeof old != 'undefined') { oldValue_ = old };
			this._localValues.item(dp_.__name, a);
			dp_.f().d()(this, new $.ig.DependencyPropertyChangedEventArgs(dp_, a, oldValue_));

		} else {
			this._localValues.item(dp_.__name, a);
		}
	}

, 
	d: function (a, b) {
		if (a == null) {
			return;
		}
		this.a.item(a.name(), b);
	}
,
	$type: new $.ig.Type('DependencyObject', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DependencyProperty', 'Object', {
	__name: null, 
	a: null, 
	b: null, 
	d: null
, 
	e: function () {
			return this.d;
	}

, 
		init: function (a, b, c) {

			this.d = false;

			$.ig.Object.prototype.init.call(this);
						this.__name = a;
				this.a = b;
				this.b = c;
				if (this.b != null && this.b.d() != null) {
					this.d = true;

				} else {
					this.d = false;
				}
		}
, 
	f: function () {
			return this.b;
	}

, 
	g: function () {
			return this.a;
	}

, 
	name: function () {
			return this.__name;
	}

, 
	l: function (a, b, c, d) {
		return $.ig.DependencyPropertiesCollection.prototype.c().f(a, b, c, d);
	}

, 
	m: function (a, b) {
		if (b == null) {
			return null;
		}
		var c = $.ig.DependencyPropertiesCollection.prototype.c().e(b.typeName() + a);
		if (c != null) {
			return c;
		}
		return $.ig.DependencyProperty.prototype.m(a, b.a());
	}
,
	$type: new $.ig.Type('DependencyProperty', $.ig.Object.prototype.$type)
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















$.ig.util.defType('NotImplementedException', 'Error', {

		init: function () {


			$.ig.Error.prototype.init1.call(this, 1, "not implemented");
		},
	$type: new $.ig.Type('NotImplementedException', $.ig.Error.prototype.$type)
}, true);

$.ig.util.defType('Random', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function () {
		return Math.random();
	}

, 
	b: function (a) {
		return Math.round(this.a() * (a - 1));
	}

, 
	c: function (a, b) {
		return a + Math.round(this.a() * ((b - a) - 1));
	}
,
	$type: new $.ig.Type('Random', $.ig.Object.prototype.$type)
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



$.ig.util.defType('UIElement', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

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
	$type: new $.ig.Type('UIElement', $.ig.DependencyObject.prototype.$type)
}, true);

$.ig.util.defType('UIElementCollection', 'ObservableCollection$1', {
	ai: null
, 
		init: function (a) {


			$.ig.ObservableCollection$1.prototype.init.call(this, $.ig.UIElement.prototype.$type);
						this.ai = a;
		}
, 
	ah: function (a) {
		$.ig.ObservableCollection$1.prototype.ah.call(this, a);
		var c = a.oldItems().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			(b).aa(null);
		}
		var e = a.newItems().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			(d).aa(this.ai);
		}
	}

, 
	m: function () {
		var b = this.getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			(a).aa(null);
		}
		$.ig.ObservableCollection$1.prototype.m.call(this);
	}
,
	$type: new $.ig.Type('UIElementCollection', $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.UIElement.prototype.$type))
}, true);

$.ig.util.defType('FrameworkElement', 'UIElement', {

		init: function () {

			this.__opacity = 1;

			$.ig.UIElement.prototype.init.call(this);
						this.__opacity = 1;
				this.z(0);
				this.__visibility = $.ig.Visibility.prototype.visible;
				this.v(NaN);
				this.w(NaN);
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
	__visibility: null
, 
	visibility: function (a) {
		if (arguments.length === 1) {
			this.__visibility = a;
			return a;
		} else {
			return this.__visibility;
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
	_dataContext: null,
	dataContext: function (a) {
		if (arguments.length === 1) {
			this._dataContext = a;
			return a;
		} else {
			return this._dataContext;
		}
	}
, 
	__opacity: null
, 
	opacity: function (a) {
		if (arguments.length === 1) {
			this.__opacity = a;
			return a;
		} else {
			return this.__opacity;
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
	$type: new $.ig.Type('FrameworkElement', $.ig.UIElement.prototype.$type)
}, true);

$.ig.util.defType('Control', 'FrameworkElement', {

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
	a6: function () {
	}
,
	$type: new $.ig.Type('Control', $.ig.FrameworkElement.prototype.$type)
}, true);

$.ig.util.defType('ContentControl', 'Control', {
	init: function () {

		$.ig.Control.prototype.init.call(this);

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
	_ba: null,
	ba: function (a) {
		if (arguments.length === 1) {
			this._ba = a;
			return a;
		} else {
			return this._ba;
		}
	}
,
	$type: new $.ig.Type('ContentControl', $.ig.Control.prototype.$type)
}, true);

$.ig.util.defType('Panel', 'FrameworkElement', {

		init: function () {


			$.ig.FrameworkElement.prototype.init.call(this);
						this.a3(new $.ig.UIElementCollection(this));
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
	$type: new $.ig.Type('Panel', $.ig.FrameworkElement.prototype.$type)
}, true);

$.ig.util.defType('Canvas', 'Panel', {
	init: function () {

		$.ig.Panel.prototype.init.call(this);

	},
	$type: new $.ig.Type('Canvas', $.ig.Panel.prototype.$type)
}, true);


$.ig.util.defType('TextBlock', 'FrameworkElement', {
	init: function () {

		$.ig.FrameworkElement.prototype.init.call(this);

	}, 
	a2: null
, 
	a5: function (a) {
		if (arguments.length === 1) {
			if (this.a2 != a) {
				this.a2 = a;
				this.a7(-1);
			}
			return a;
		} else {
			return this.a2;
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
	$type: new $.ig.Type('TextBlock', $.ig.FrameworkElement.prototype.$type)
}, true);

$.ig.util.defType('DataTemplate', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_render: null,
	render: function (a) {
		if (arguments.length === 1) {
			this._render = a;
			return a;
		} else {
			return this._render;
		}
	}

, 
	_measure: null,
	measure: function (a) {
		if (arguments.length === 1) {
			this._measure = a;
			return a;
		} else {
			return this._measure;
		}
	}

, 
	_passStarting: null,
	passStarting: function (a) {
		if (arguments.length === 1) {
			this._passStarting = a;
			return a;
		} else {
			return this._passStarting;
		}
	}

, 
	_passCompleted: null,
	passCompleted: function (a) {
		if (arguments.length === 1) {
			this._passCompleted = a;
			return a;
		} else {
			return this._passCompleted;
		}
	}
,
	$type: new $.ig.Type('DataTemplate', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DataTemplatePassInfo', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	context: null, 
	viewportTop: null, 
	viewportLeft: null, 
	viewportWidth: null, 
	viewportHeight: null, 
	isHitTestRender: null, 
	passID: null,
	$type: new $.ig.Type('DataTemplatePassInfo', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DataTemplateMeasureInfo', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	context: null, 
	width: null, 
	height: null, 
	isConstant: null, 
	data: null, 
	passInfo: null,
	$type: new $.ig.Type('DataTemplateMeasureInfo', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DataTemplateRenderInfo', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	context: null, 
	xPosition: null, 
	yPosition: null, 
	availableWidth: null, 
	availableHeight: null, 
	data: null, 
	isHitTestRender: null, 
	passInfo: null,
	$type: new $.ig.Type('DataTemplateRenderInfo', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('Binding', 'Object', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}

			this.c = false;

			$.ig.Object.prototype.init.call(this);
		}
, 
		init1: function (initNumber, a) {

			this.c = false;

			$.ig.Object.prototype.init.call(this);
						this.b = new $.ig.PropertyPath(a);
		}, 
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
	b: null
, 
	e: function (a) {
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
	f: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			return this.c;
		}
	}
,
	$type: new $.ig.Type('Binding', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('UnsetValue', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('UnsetValue', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DependencyPropertiesCollection', 'Object', {
	a: null
, 
	c: function () {
			if ($.ig.DependencyPropertiesCollection.prototype.b == null) {
				$.ig.DependencyPropertiesCollection.prototype.b = new $.ig.DependencyPropertiesCollection();
			}
			return $.ig.DependencyPropertiesCollection.prototype.b;
	}

, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						if (this.a == null) {
					this.a = new $.ig.Dictionary(0);
				}
		}
, 
	e: function (a) {
		return this.a.item(a);
	}

, 
	f: function (a, b, c, d) {
		var e = new $.ig.DependencyProperty(a, b, d);
		this.a.item(c.typeName() + a, e);
		return e;
	}
,
	$type: new $.ig.Type('DependencyPropertiesCollection', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DependencyPropertyChangedEventArgs', 'Object', {
	a: null, 
	b: null
, 
		init: function (a, b, c) {


			$.ig.Object.prototype.init.call(this);
						this.a = b;
				this.b = c;
				this.c = a;
		}, 
	c: null
, 
	d: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			return this.c;
		}
	}

, 
	e: function () {
			return this.a;
	}

, 
	f: function () {
			return this.b;
	}
,
	$type: new $.ig.Type('DependencyPropertyChangedEventArgs', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MouseEventArgs', 'EventArgs', {
	init: function () {

		$.ig.EventArgs.prototype.init.call(this);

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
	_originalSource: null,
	originalSource: function (a) {
		if (arguments.length === 1) {
			this._originalSource = a;
			return a;
		} else {
			return this._originalSource;
		}
	}

, 
	getPosition: function (a) {
		return this.position();
	}
,
	$type: new $.ig.Type('MouseEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

$.ig.util.defType('MouseButtonEventArgs', 'MouseEventArgs', {
	init: function () {

		$.ig.MouseEventArgs.prototype.init.call(this);

	}
, 
	_handled: null,
	handled: function (a) {
		if (arguments.length === 1) {
			this._handled = a;
			return a;
		} else {
			return this._handled;
		}
	}
,
	$type: new $.ig.Type('MouseButtonEventArgs', $.ig.MouseEventArgs.prototype.$type)
}, true);

$.ig.util.defType('Brush', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

		this.__fill = null;
		this.a = null;
	}
, 
	isGradient: function () {
			return false;
	}
, 
	__fill: null
, 
	fill: function (a) {
		if (arguments.length === 1) {
			this.__fill = a;
			return a;
		} else {
			return this.__fill;
		}
	}
, 
	a: null, 
	b: null
, 
	color: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			this.a = this.b.f();
			this.__fill = this.a;
			return a;
		} else {
			if (this.__fill == this.a) {
				return this.b;
			}
			var b = new $.ig.Color();
			if (this.__fill != null) {
				b.f(this.__fill);
				this.b = b;
				this.a = this.__fill;
			}
			return b;
		}
	}
,
	$type: new $.ig.Type('Brush', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Color', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

		this.__a = 0;
		this.__r = 0;
		this.__g = 0;
		this.__b = 0;
		this.__colorString = "";
		this.a = true;
	}, 
	__a: null
, 
	b: function (a) {
		if (arguments.length === 1) {
			this.__a = Math.round(a);
			this.a = true;
			return a;
		} else {
			return this.__a;
		}
	}
, 
	__r: null
, 
	c: function (a) {
		if (arguments.length === 1) {
			this.__r = Math.round(a);
			this.a = true;
			return a;
		} else {
			return this.__r;
		}
	}
, 
	__g: null
, 
	d: function (a) {
		if (arguments.length === 1) {
			this.__g = Math.round(a);
			this.a = true;
			return a;
		} else {
			return this.__g;
		}
	}
, 
	__b: null
, 
	e: function (a) {
		if (arguments.length === 1) {
			this.__b = Math.round(a);
			this.a = true;
			return a;
		} else {
			return this.__b;
		}
	}
, 
	__colorString: null
, 
	f: function (a) {
		if (arguments.length === 1) {
			this.__colorString = a;
			this.r();
			return a;
		} else {
			if (this.a) {
				this.a = false;
				this.q();
			}
			return this.__colorString;
		}
	}
, 
	a: null
, 
	q: function () {
		this.__colorString = "rgba(" + this.__r + "," + this.__g + "," + this.__b + "," + this.__a / 255 + ")";
	}

, 
	r: function () {
		var obj_ = $.ig.util.stringToColor(this.__colorString);
		this.__a = typeof obj_.a != 'undefined' ? Math.round(obj_.a) : 0;
		this.__r = typeof obj_.r != 'undefined' ? Math.round(obj_.r) : 0;
		this.__g = typeof obj_.g != 'undefined' ? Math.round(obj_.g) : 0;
		this.__b = typeof obj_.b != 'undefined' ? Math.round(obj_.b) : 0;
	}

, 
	s: function (a_, r_, g_, b_) {
		var a = new $.ig.Color();
		a.__a = a_ | 0;
		a.__r = r_ | 0;
		a.__g = g_ | 0;
		a.__b = b_ | 0;
		a.a = true;
		return a;
	}
,
	$type: new $.ig.Type('Color', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DoubleCollection', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, Number);

	},
	$type: new $.ig.Type('DoubleCollection', $.ig.List$1.prototype.$type.specialize(Number))
}, true);

$.ig.util.defType('Geometry', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
		}
, 
	_a: null,
	a: function () {
		return this._a;	}
,
	$type: new $.ig.Type('Geometry', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('GeometryCollection', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.Geometry.prototype.$type);

	},
	$type: new $.ig.Type('GeometryCollection', $.ig.List$1.prototype.$type.specialize($.ig.Geometry.prototype.$type))
}, true);

$.ig.util.defType('GeometryGroup', 'Geometry', {

		init: function () {


			$.ig.Geometry.prototype.init.call(this);
						this.d(new $.ig.GeometryCollection());
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
			return $.ig.GeometryType.prototype.group;
	}
,
	$type: new $.ig.Type('GeometryGroup', $.ig.Geometry.prototype.$type)
}, true);

$.ig.util.defType('LineGeometry', 'Geometry', {
	init: function () {

		$.ig.Geometry.prototype.init.call(this);

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
	a: function () {
			return $.ig.GeometryType.prototype.line;
	}
,
	$type: new $.ig.Type('LineGeometry', $.ig.Geometry.prototype.$type)
}, true);

$.ig.util.defType('RectangleGeometry', 'Geometry', {
	init: function () {

		$.ig.Geometry.prototype.init.call(this);

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
	a: function () {
			return $.ig.GeometryType.prototype.rectangle;
	}
,
	$type: new $.ig.Type('RectangleGeometry', $.ig.Geometry.prototype.$type)
}, true);

$.ig.util.defType('EllipseGeometry', 'Geometry', {
	init: function () {

		$.ig.Geometry.prototype.init.call(this);

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
	a: function () {
			return $.ig.GeometryType.prototype.ellipse;
	}
,
	$type: new $.ig.Type('EllipseGeometry', $.ig.Geometry.prototype.$type)
}, true);

$.ig.util.defType('PathGeometry', 'Geometry', {

		init: function () {


			$.ig.Geometry.prototype.init.call(this);
						this.d(new $.ig.PathFigureCollection());
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
			return $.ig.GeometryType.prototype.path;
	}
,
	$type: new $.ig.Type('PathGeometry', $.ig.Geometry.prototype.$type)
}, true);

$.ig.util.defType('PathFigure', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.__segments = new $.ig.PathSegmentCollection();
				this.__isClosed = false;
				this.__isFilled = true;
		}, 
	__segments: null
, 
	segments: function (a) {
		if (arguments.length === 1) {
			this.__segments = a;
			return a;
		} else {
			return this.__segments;
		}
	}
, 
	__startPoint: null
, 
	startPoint: function (a) {
		if (arguments.length === 1) {
			this.__startPoint = a;
			return a;
		} else {
			return this.__startPoint;
		}
	}
, 
	__isFilled: null
, 
	isFilled: function (a) {
		if (arguments.length === 1) {
			this.__isFilled = a;
			return a;
		} else {
			return this.__isFilled;
		}
	}
, 
	__isClosed: null
, 
	isClosed: function (a) {
		if (arguments.length === 1) {
			this.__isClosed = a;
			return a;
		} else {
			return this.__isClosed;
		}
	}
,
	$type: new $.ig.Type('PathFigure', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PathFigureCollection', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.PathFigure.prototype.$type);

	},
	$type: new $.ig.Type('PathFigureCollection', $.ig.List$1.prototype.$type.specialize($.ig.PathFigure.prototype.$type))
}, true);

$.ig.util.defType('PathSegment', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_a: null,
	a: function () {
		return this._a;	}
,
	$type: new $.ig.Type('PathSegment', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PathSegmentCollection', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.PathSegment.prototype.$type);

	},
	$type: new $.ig.Type('PathSegmentCollection', $.ig.List$1.prototype.$type.specialize($.ig.PathSegment.prototype.$type))
}, true);

$.ig.util.defType('LineSegment', 'PathSegment', {
	c: null
, 
	d: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			return this.c;
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


			$.ig.PathSegment.prototype.init.call(this);
						this.d(a);
		}
, 
		init1: function (initNumber) {


			$.ig.PathSegment.prototype.init.call(this);
		}
, 
	a: function () {
			return $.ig.PathSegmentType.prototype.line;
	}
,
	$type: new $.ig.Type('LineSegment', $.ig.PathSegment.prototype.$type)
}, true);



$.ig.util.defType('PolyLineSegment', 'PathSegment', {

		init: function () {


			$.ig.PathSegment.prototype.init.call(this);
						this.__points = new $.ig.PointCollection(0);
		}, 
	__points: null
, 
	points: function (a) {
		if (arguments.length === 1) {
			this.__points = a;
			return a;
		} else {
			return this.__points;
		}
	}

, 
	a: function () {
			return $.ig.PathSegmentType.prototype.polyLine;
	}
,
	$type: new $.ig.Type('PolyLineSegment', $.ig.PathSegment.prototype.$type)
}, true);

$.ig.util.defType('ArcSegment', 'PathSegment', {

		init: function () {


			$.ig.PathSegment.prototype.init.call(this);
						this.i(false);
				this.j($.ig.SweepDirection.prototype.counterclockwise);
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
	a: function () {
			return $.ig.PathSegmentType.prototype.arc;
	}
,
	$type: new $.ig.Type('ArcSegment', $.ig.PathSegment.prototype.$type)
}, true);

$.ig.util.defType('Transform', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

	},
	$type: new $.ig.Type('Transform', $.ig.DependencyObject.prototype.$type)
}, true);

$.ig.util.defType('RotateTransform', 'Transform', {
	init: function () {

		$.ig.Transform.prototype.init.call(this);

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
	$type: new $.ig.Type('RotateTransform', $.ig.Transform.prototype.$type)
}, true);

$.ig.util.defType('TranslateTransform', 'Transform', {
	init: function () {

		$.ig.Transform.prototype.init.call(this);

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
	$type: new $.ig.Type('TranslateTransform', $.ig.Transform.prototype.$type)
}, true);

$.ig.util.defType('TransformGroup', 'Transform', {

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
		init: function () {


			$.ig.Transform.prototype.init.call(this);
						this.f(new $.ig.TransformCollection());
		},
	$type: new $.ig.Type('TransformGroup', $.ig.Transform.prototype.$type)
}, true);

$.ig.util.defType('TransformCollection', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.Transform.prototype.$type);

	},
	$type: new $.ig.Type('TransformCollection', $.ig.List$1.prototype.$type.specialize($.ig.Transform.prototype.$type))
}, true);

$.ig.util.defType('Point', 'Object', {

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
						this.__x = 0;
				this.__y = 0;
		}
, 
	x: function (a) {
		if (arguments.length === 1) {
			this.__x = a;
			return a;
		} else {
			return this.__x;
		}
	}

, 
	y: function (a) {
		if (arguments.length === 1) {
			this.__y = a;
			return a;
		} else {
			return this.__y;
		}
	}
, 
	__x: null, 
	__y: null
, 
		init1: function (initNumber, a, b) {


			$.ig.Object.prototype.init.call(this);
						this.__x = a;
				this.__y = b;
		},
	$type: new $.ig.Type('Point', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PointCollection', 'List$1', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.List$1.prototype.init.call(this, $.ig.Point.prototype.$type);
		}
, 
		init1: function (initNumber, source_) {


			$.ig.List$1.prototype.init.call(this, $.ig.Point.prototype.$type);
						this.__inner = source_.__inner;
		},
	$type: new $.ig.Type('PointCollection', $.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type))
}, true);


$.ig.util.defType('PropertyMetadata', 'Object', {
	a: null
, 
	c: function (a) {
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
	d: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			return a;
		} else {
			return this.b;
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


			$.ig.Object.prototype.init.call(this);
						this.c(null);
				this.d(a);
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.Object.prototype.init.call(this);
						this.c(a);
				this.d(b);
		},
	$type: new $.ig.Type('PropertyMetadata', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PropertyPath', 'Object', {
	a: null
, 
	b: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			return a;
		} else {
			return this.a;
		}
	}

, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.b(a);
		},
	$type: new $.ig.Type('PropertyPath', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Rect', 'Object', {

		init: function (initNumber, a, b, c, d) {
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


			$.ig.Object.prototype.init.call(this);
						this.top(b);
				this.left(a);
				this.width(c);
				this.height(d);
		}
, 
		init1: function (initNumber, a, b, c) {


			$.ig.Object.prototype.init.call(this);
						this.top(b);
				this.left(a);
				this.width(c.c());
				this.height(c.d());
		}
, 
		init2: function (initNumber, a, b) {


			$.ig.Object.prototype.init.call(this);
						this.top(Math.min(a.__y, b.__y));
				this.left(Math.min(a.__x, b.__x));
				this.width(Math.max(Math.max(a.__x, b.__x) - this.left(), 0));
				this.height(Math.max(Math.max(a.__y, b.__y) - this.top(), 0));
		}
, 
		init3: function (initNumber, a, b) {


			$.ig.Object.prototype.init.call(this);
						this.top(a.__y);
				this.left(a.__x);
				this.width(b.c());
				this.height(b.d());
		}, 
	a: null
, 
	x: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			this.f = this.a;
			this.g = this.f + this.c;
			return a;
		} else {
			return this.a;
		}
	}
, 
	b: null
, 
	y: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			this.e = this.b;
			this.h = this.e + this.d;
			return a;
		} else {
			return this.b;
		}
	}
, 
	c: null
, 
	width: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			this.g = this.f + this.c;
			return a;
		} else {
			return this.c;
		}
	}
, 
	d: null
, 
	height: function (a) {
		if (arguments.length === 1) {
			this.d = a;
			this.h = this.e + this.d;
			return a;
		} else {
			return this.d;
		}
	}
, 
	e: null
, 
	top: function (a) {
		if (arguments.length === 1) {
			this.e = a;
			this.y(this.e);
			return a;
		} else {
			return this.e;
		}
	}
, 
	f: null
, 
	left: function (a) {
		if (arguments.length === 1) {
			this.f = a;
			this.x(this.f);
			return a;
		} else {
			return this.f;
		}
	}
, 
	g: null
, 
	right: function (a) {
		if (arguments.length === 1) {
			this.g = a;
			this.c = this.g - this.f;
			return a;
		} else {
			return this.g;
		}
	}
, 
	h: null
, 
	bottom: function (a) {
		if (arguments.length === 1) {
			this.h = a;
			this.d = this.h - this.e;
			return a;
		} else {
			return this.h;
		}
	}

, 
	isEmpty: function () {
			return this.c < 0;
	}

, 
	empty: function () {
			return new $.ig.Rect(0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
	}

, 
	equals: function (a) {
		if (a == null) {
			return false;
		}
		if (a.x() == this.x() && a.y() == this.y() && a.width() == this.width() && a.height() == this.height()) {
			return true;
		}
		return false;
	}

, 
	i: function (a, b) {
		return a >= this.a && a - this.c <= this.a && b >= this.b && b - this.d <= this.b;
	}

, 
	contains: function (a, b) {
		return !this.isEmpty() && this.i(a, b);
	}

, 
	contains1: function (a) {
		return this.contains(a.__x, a.__y);
	}

, 
	contains2: function (a) {
		return !this.isEmpty() && !a.isEmpty() && (this.a <= a.a && this.b <= a.b && this.a + this.c >= a.a + a.c) && this.b + this.d >= a.b + a.d;
	}

, 
	intersectsWith: function (a) {
		return !(a.left() > this.right() || a.right() < this.left() || a.top() > this.bottom() || a.bottom() < this.top());
	}

, 
	intersect: function (a) {
		if (!this.intersectsWith(a)) {
			this.e = Number.POSITIVE_INFINITY;
			this.f = Number.POSITIVE_INFINITY;
			this.c = Number.NEGATIVE_INFINITY;
			this.d = Number.NEGATIVE_INFINITY;
		}
		var b = Math.max(this.x(), a.x());
		var c = Math.max(this.y(), a.y());
		var d = Math.min(this.x() + this.width(), a.x() + a.width()) - b;
		var e = Math.min(this.y() + this.height(), a.y() + a.height()) - c;
		if (d < 0) {
			d = 0;
		}
		if (e < 0) {
			e = 0;
		}
		this.c = d;
		this.d = e;
		this.a = b;
		this.b = c;
		this.f = this.a;
		this.e = this.b;
		this.g = this.f + this.c;
		this.h = this.e + this.d;
	}

, 
	union: function (a) {
		if (this.isEmpty()) {
			this.a = a.x();
			this.b = a.y();
			this.c = a.width();
			this.d = a.height();
			this.f = this.a;
			this.e = this.b;
			this.g = this.f + this.c;
			this.h = this.e + this.d;
			return;
		}
		if (!a.isEmpty()) {
			var b = Math.min(this.x(), a.x());
			var c = Math.min(this.y(), a.y());
			var d = this.width();
			var e = this.height();
			if (a.width() == Number.POSITIVE_INFINITY || this.width() == Number.POSITIVE_INFINITY) {
				d = Number.POSITIVE_INFINITY;

			} else {
				var f = Math.max(this.right(), a.right());
				d = f - b;
			}
			if (a.height() == Number.POSITIVE_INFINITY || this.height() == Number.POSITIVE_INFINITY) {
				e = Number.POSITIVE_INFINITY;

			} else {
				var g = Math.max(this.bottom(), a.bottom());
				e = g - c;
			}
			this.a = b;
			this.b = c;
			this.c = d;
			this.d = e;
			this.f = this.a;
			this.e = this.b;
			this.g = this.f + this.c;
			this.h = this.e + this.d;
		}
	}
,
	$type: new $.ig.Type('Rect', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Shape', 'FrameworkElement', {

		init: function () {

			this.__fill = null;
			this.__stroke = null;

			$.ig.FrameworkElement.prototype.init.call(this);
		}, 
	__fill: null
, 
	fill: function (a) {
		if (arguments.length === 1) {
			this.__fill = a;
			return a;
		} else {
			return this.__fill;
		}
	}
, 
	__stroke: null
, 
	stroke: function (a) {
		if (arguments.length === 1) {
			this.__stroke = a;
			return a;
		} else {
			return this.__stroke;
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
	$type: new $.ig.Type('Shape', $.ig.FrameworkElement.prototype.$type)
}, true);

$.ig.util.defType('Line', 'Shape', {

		init: function () {


			$.ig.Shape.prototype.init.call(this);
						this.bq(0);
				this.br(0);
				this.bs(0);
				this.bt(0);
		}
, 
	_bq: null,
	bq: function (a) {
		if (arguments.length === 1) {
			this._bq = a;
			return a;
		} else {
			return this._bq;
		}
	}

, 
	_br: null,
	br: function (a) {
		if (arguments.length === 1) {
			this._br = a;
			return a;
		} else {
			return this._br;
		}
	}

, 
	_bs: null,
	bs: function (a) {
		if (arguments.length === 1) {
			this._bs = a;
			return a;
		} else {
			return this._bs;
		}
	}

, 
	_bt: null,
	bt: function (a) {
		if (arguments.length === 1) {
			this._bt = a;
			return a;
		} else {
			return this._bt;
		}
	}
,
	$type: new $.ig.Type('Line', $.ig.Shape.prototype.$type)
}, true);

$.ig.util.defType('Path', 'Shape', {
	init: function () {

		$.ig.Shape.prototype.init.call(this);

	}
, 
	_bp: null,
	bp: function (a) {
		if (arguments.length === 1) {
			this._bp = a;
			return a;
		} else {
			return this._bp;
		}
	}
, 
	bm: null
, 
	w: function (a) {
		if (arguments.length === 1) {
			this.bm = a;
			return a;
		} else {
			return this.bm;
		}
	}
, 
	bn: null
, 
	v: function (a) {
		if (arguments.length === 1) {
			this.bn = a;
			return a;
		} else {
			return this.bn;
		}
	}
,
	$type: new $.ig.Type('Path', $.ig.Shape.prototype.$type)
}, true);

$.ig.util.defType('Polygon', 'Shape', {

		init: function () {


			$.ig.Shape.prototype.init.call(this);
						this.bn(new $.ig.PointCollection(0));
		}
, 
	_bn: null,
	bn: function (a) {
		if (arguments.length === 1) {
			this._bn = a;
			return a;
		} else {
			return this._bn;
		}
	}
,
	$type: new $.ig.Type('Polygon', $.ig.Shape.prototype.$type)
}, true);

$.ig.util.defType('Polyline', 'Shape', {

		init: function () {


			$.ig.Shape.prototype.init.call(this);
						this.bn(new $.ig.PointCollection(0));
		}
, 
	_bn: null,
	bn: function (a) {
		if (arguments.length === 1) {
			this._bn = a;
			return a;
		} else {
			return this._bn;
		}
	}
,
	$type: new $.ig.Type('Polyline', $.ig.Shape.prototype.$type)
}, true);

$.ig.util.defType('Rectangle', 'Shape', {
	bm: null
, 
		init: function () {


			$.ig.Shape.prototype.init.call(this);
						this.bm = new $.ig.Rect(0, 0, 0, 0, 0);
		}
, 
	bn: function (a) {
	}
,
	$type: new $.ig.Type('Rectangle', $.ig.Shape.prototype.$type)
}, true);

$.ig.util.defType('Size', 'Object', {

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
	$type: new $.ig.Type('Size', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Style', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('Style', $.ig.Object.prototype.$type)
}, true);












$.ig.Visibility.prototype.visible = 0;
$.ig.Visibility.prototype.collapsed = 1;
$.ig.PenLineCap.prototype.flat = 0;
$.ig.PenLineCap.prototype.square = 1;
$.ig.PenLineCap.prototype.round = 2;
$.ig.PenLineCap.prototype.triangle = 3;
$.ig.SweepDirection.prototype.counterclockwise = 0;
$.ig.SweepDirection.prototype.clockwise = 1;
$.ig.PathSegmentType.prototype.line = 0;
$.ig.PathSegmentType.prototype.bezier = 1;
$.ig.PathSegmentType.prototype.polyBezier = 2;
$.ig.PathSegmentType.prototype.polyLine = 3;
$.ig.PathSegmentType.prototype.arc = 4;
$.ig.GeometryType.prototype.group = 0;
$.ig.GeometryType.prototype.line = 1;
$.ig.GeometryType.prototype.rectangle = 2;
$.ig.GeometryType.prototype.ellipse = 3;
$.ig.GeometryType.prototype.path = 4;
$.ig.ModifierKeys.prototype.none = 0;
$.ig.ModifierKeys.prototype.alt = 1;
$.ig.ModifierKeys.prototype.control = 2;
$.ig.ModifierKeys.prototype.shift = 4;
$.ig.ModifierKeys.prototype.windows = 8;
$.ig.ModifierKeys.prototype.apple = 8;
$.ig.Key.prototype.none = 0;
$.ig.Key.prototype.back = 1;
$.ig.Key.prototype.tab = 2;
$.ig.Key.prototype.enter = 3;
$.ig.Key.prototype.shift = 4;
$.ig.Key.prototype.ctrl = 5;
$.ig.Key.prototype.alt = 6;
$.ig.Key.prototype.capsLock = 7;
$.ig.Key.prototype.escape = 8;
$.ig.Key.prototype.space = 9;
$.ig.Key.prototype.pageUp = 10;
$.ig.Key.prototype.pageDown = 11;
$.ig.Key.prototype.end = 12;
$.ig.Key.prototype.home = 13;
$.ig.Key.prototype.left = 14;
$.ig.Key.prototype.up = 15;
$.ig.Key.prototype.right = 16;
$.ig.Key.prototype.down = 17;
$.ig.Key.prototype.insert = 18;
$.ig.Key.prototype.del = 19;
$.ig.Key.prototype.d0 = 20;
$.ig.Key.prototype.d1 = 21;
$.ig.Key.prototype.d2 = 22;
$.ig.Key.prototype.d3 = 23;
$.ig.Key.prototype.d4 = 24;
$.ig.Key.prototype.d5 = 25;
$.ig.Key.prototype.d6 = 26;
$.ig.Key.prototype.d7 = 27;
$.ig.Key.prototype.d8 = 28;
$.ig.Key.prototype.d9 = 29;
$.ig.Key.prototype.a = 30;
$.ig.Key.prototype.b = 31;
$.ig.Key.prototype.c = 32;
$.ig.Key.prototype.d = 33;
$.ig.Key.prototype.e = 34;
$.ig.Key.prototype.f = 35;
$.ig.Key.prototype.g = 36;
$.ig.Key.prototype.h = 37;
$.ig.Key.prototype.i = 38;
$.ig.Key.prototype.j = 39;
$.ig.Key.prototype.k = 40;
$.ig.Key.prototype.l = 41;
$.ig.Key.prototype.m = 42;
$.ig.Key.prototype.n = 43;
$.ig.Key.prototype.o = 44;
$.ig.Key.prototype.p = 45;
$.ig.Key.prototype.q = 46;
$.ig.Key.prototype.r = 47;
$.ig.Key.prototype.s = 48;
$.ig.Key.prototype.t = 49;
$.ig.Key.prototype.u = 50;
$.ig.Key.prototype.v = 51;
$.ig.Key.prototype.w = 52;
$.ig.Key.prototype.x = 53;
$.ig.Key.prototype.y = 54;
$.ig.Key.prototype.z = 55;
$.ig.Key.prototype.f1 = 56;
$.ig.Key.prototype.f2 = 57;
$.ig.Key.prototype.f3 = 58;
$.ig.Key.prototype.f4 = 59;
$.ig.Key.prototype.f5 = 60;
$.ig.Key.prototype.f6 = 61;
$.ig.Key.prototype.f7 = 62;
$.ig.Key.prototype.f8 = 63;
$.ig.Key.prototype.f9 = 64;
$.ig.Key.prototype.f10 = 65;
$.ig.Key.prototype.f11 = 66;
$.ig.Key.prototype.f12 = 67;
$.ig.Key.prototype.numPad0 = 68;
$.ig.Key.prototype.numPad1 = 69;
$.ig.Key.prototype.numPad2 = 70;
$.ig.Key.prototype.numPad3 = 71;
$.ig.Key.prototype.numPad4 = 72;
$.ig.Key.prototype.numPad5 = 73;
$.ig.Key.prototype.numPad6 = 74;
$.ig.Key.prototype.numPad7 = 75;
$.ig.Key.prototype.numPad8 = 76;
$.ig.Key.prototype.numPad9 = 77;
$.ig.Key.prototype.multiply = 78;
$.ig.Key.prototype.add = 79;
$.ig.Key.prototype.subtract = 80;
$.ig.Key.prototype.decimal = 81;
$.ig.Key.prototype.divide = 82;
$.ig.Key.prototype.unknown = 255;
$.ig.NotifyCollectionChangedAction.prototype.add = 0;
$.ig.NotifyCollectionChangedAction.prototype.remove = 1;
$.ig.NotifyCollectionChangedAction.prototype.replace = 2;
$.ig.NotifyCollectionChangedAction.prototype.reset = 4;
$.ig.DependencyProperty.prototype.c = new $.ig.UnsetValue();
$.ig.DependencyPropertiesCollection.prototype.b = null;

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

$.ig.util.defType('InterpolationMode', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('InterpolationMode', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('OverviewPlusDetailPaneMode', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('OverviewPlusDetailPaneMode', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('InteractionState', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('InteractionState', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('GradientDirection', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('GradientDirection', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('FastItemsSourceEventAction', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('FastItemsSourceEventAction', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('TrendLineType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('TrendLineType', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('BrushCollection', 'ObservableCollection$1', {
	init: function () {

		$.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Brush.prototype.$type);

		this.aj = $.ig.InterpolationMode.prototype.rGB;
	}
, 
	al: function () {
		return this.item($.ig.BrushCollection.prototype.ai.b(this.count()));
	}

, 
	am: function () {
		return this.ap($.ig.BrushCollection.prototype.ai.a() * (this.count() - 1));
	}

, 
	ak: function (a) {
		if (arguments.length === 1) {
			if (this.aj != a) {
				this.aj = a;
				this.ah(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset));
			}
			return a;
		} else {
			return this.aj;
		}
	}
, 
	aj: null
, 
	item: function (b, a) {
		if (arguments.length === 2) {
			$.ig.ObservableCollection$1.prototype.item.call(this, b, a);
			return a;
		} else {
			if (b < 0 || b >= this.count()) {
				return null;
			}
			return $.ig.ObservableCollection$1.prototype.item.call(this, b);
		}
	}

, 
	ap: function (a) {
		if (isNaN(a)) {
			return null;
		}
		a = $.ig.MathUtil.prototype.i(a, 0, this.count() - 1);
		var b = Math.floor(a);
		if (b == a) {
			return this.item(b);
		}
		return this.aq(a - b, this.item(b), this.item(b + 1), this.ak());
	}

, 
	aq: function (a, b, c, d) {
		var e = b.color();
		var f = c.color();
		var g = e.getInterpolation(a, f, d);
		var h = new $.ig.Brush();
		h.color(g);
		return h;
	}
,
	$type: new $.ig.Type('BrushCollection', $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Brush.prototype.$type))
}, true);

$.ig.util.defType('EventProxy', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	onMouseWheel: null, 
	onPinchStarted: null, 
	onPinchDelta: null, 
	onGestureCompleted: null, 
	onContactStarted: null, 
	onDragStarted: null, 
	onContactMoved: null, 
	onDragDelta: null, 
	onContactCompleted: null, 
	onDragCompleted: null, 
	onMouseLeave: null, 
	onMouseOver: null, 
	onMouseEnter: null, 
	onMouseDown: null, 
	onMouseUp: null, 
	onDoubleTap: null, 
	onHold: null, 
	onKeyDown: null
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
	be: function () {
	}

, 
	bf: function () {
	}

, 
	bg: function (a, b) {
		if (this.onMouseWheel != null) {
			return this.onMouseWheel(a, b);
		}
		return false;
	}

, 
	bh: function (a, b) {
		if (this.onPinchStarted != null) {
			this.onPinchStarted(a, b);
		}
	}

, 
	bi: function (a, b) {
		if (this.onPinchDelta != null) {
			this.onPinchDelta(a, b);
		}
	}

, 
	bj: function (a, b) {
		if (this.onGestureCompleted != null) {
			this.onGestureCompleted(a, b);
		}
	}

, 
	bk: function (a, b) {
		if (this.onContactStarted != null) {
			this.onContactStarted(a, b);
		}
	}

, 
	bl: function (a) {
		if (this.onDragStarted != null) {
			this.onDragStarted(a);
		}
	}

, 
	bm: function (a, b) {
		if (this.onContactMoved != null) {
			this.onContactMoved(a, b);
		}
	}

, 
	bn: function (a) {
		if (this.onDragDelta != null) {
			this.onDragDelta(a);
		}
	}

, 
	bo: function (a, b) {
		if (this.onContactCompleted != null) {
			this.onContactCompleted(a, b);
		}
	}

, 
	bp: function (a) {
		if (this.onDragCompleted != null) {
			this.onDragCompleted(a);
		}
	}

, 
	bq: function (a) {
		if (this.onMouseLeave != null) {
			this.onMouseLeave(a);
		}
	}

, 
	br: function (a, b, c) {
		if (this.onMouseOver != null) {
			this.onMouseOver(a, b, c);
		}
	}

, 
	bs: function (a) {
		if (this.onMouseEnter != null) {
			this.onMouseEnter(a);
		}
	}

, 
	bt: function (a) {
		if (this.onMouseDown != null) {
			this.onMouseDown(a);
		}
	}

, 
	bu: function (a) {
		if (this.onMouseUp != null) {
			this.onMouseUp(a);
		}
	}

, 
	bv: function (a) {
		if (this.onKeyDown != null) {
			return this.onKeyDown(a);
		}
		return false;
	}

, 
	bw: function (a) {
		if (this.onDoubleTap != null) {
			this.onDoubleTap(a);
		}
	}

, 
	bx: function (a) {
		if (this.onHold != null) {
			this.onHold(a);
		}
	}

, 
	by: function () {
	}
,
	$type: new $.ig.Type('EventProxy', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DOMEventProxy', 'EventProxy', {

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
	be: function () {
		return new $.ig.DOMEventProxy(this.cp());
	}
, 
	b1: null, 
	b2: null, 
	b3: null, 
	b4: null, 
	b5: null
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

			var $self = this;
			this.b1 = 0;
			this.b2 = "";
			this.b3 = false;
			this.b6 = 0;
			this.b7 = 0;
			this.b8 = 0;
			this.b9 = 0;
			this.ca = 0;
			this.cb = 1;
			this.cc = $.ig.DOMEventProxy.prototype.bz;
			this.cd = null;
			this.ce = 0;
			this.cf = 0;
			this.cg = 5;
			this.ch = false;
			this.ci = null;

			$.ig.EventProxy.prototype.init.call(this);
						$.ig.DOMEventProxy.prototype.b0++;
				this.b1 = $.ig.DOMEventProxy.prototype.b0;
				this.b2 = ".DOMProxy" + this.b1.toString();
				this.w($.ig.ModifierKeys.prototype.none);
				this.cp(a);
				$.ig.DOMEventProxy.prototype.b4 = window.navigator.msPointerEnabled;
				$.ig.DOMEventProxy.prototype.b5 = this.cy();
				if (!$.ig.DOMEventProxy.prototype.b4) {
					this.cp().mousemove(this.dv.on(this));
					this.cp().mouseleave(this.du.on(this));
					this.cp().mousedown(this.dw.on(this));
					this.cp().mouseup(this.dx.on(this));
				}
				this.cp().keydown(this.dy.on(this));
				if ($.ig.DOMEventProxy.prototype.b4) {
					var source_ = this.cp()[0];
					source_.style.msTouchAction = 'none';
					source_.style.msUserSelect = 'none';
					var b = this.cp()[0];
					var c = new MSGesture();
					c.target = b;
					this.cq(c);
					this.cp().bind("MSGestureStart" + this.b2, this.df.on(this));
					this.cp().bind("MSGestureChange" + this.b2, this.dg.on(this));
					this.cp().bind("MSGestureEnd" + this.b2, this.dh.on(this));
					this.cp().bind("MSPointerDown" + this.b2, this.db.on(this));
					this.cp().bind("MSPointerUp" + this.b2, this.c8.on(this));
					this.cp().bind("MSPointerCancel" + this.b2, this.da.on(this));
					this.cp().bind("MSPointerMove" + this.b2, this.dd.on(this));
					this.cp().bind("MSPointerOut" + this.b2, this.de.on(this));
					this.cp().bind("MSLostPointerCapture" + this.b2, this.c9.on(this));
				}
				this.cp().bind("DOMMouseScroll" + this.b2, this.c7.on(this));
				this.cp().bind("mousewheel" + this.b2, this.c7.on(this));
				this.cp().bind("gesturestart" + this.b2, this.df.on(this));
				this.cp().bind("gesturechange" + this.b2, this.dg.on(this));
				this.cp().bind("gestureend" + this.b2, this.dh.on(this));
				this.cp().bind("touchstart" + this.b2, this.di.on(this));
				this.cp().bind("touchmove" + this.b2, this.dn.on(this));
				this.cp().bind("touchend" + this.b2, this.dp.on(this));
				this.x(function (d) { return true				});
		}
, 
	cy: function () {
		var ver_ = -1;
		var matchIE_ = /Trident\/([\d.]+)/;
		if (matchIE_.exec(navigator.userAgent) != null) {
			ver_ = parseFloat(RegExp.$1);
		}
		return ver_;
	}
, 
	b6: null, 
	b7: null, 
	b8: null, 
	b9: null, 
	ca: null
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
	c3: function (e_) {
		var a = $.ig.DOMEventProxy.prototype.b5 >= 6;
		var oe_ = e_.originalEvent;
		if (((typeof e_.pageX == 'undefined') || a) && oe_.clientX != null) {
			var od_ = e_.target.ownerDocument;
			var ed_ = od_ ? od_ : document;
			var doc_ = ed_.documentElement;
			var body_ = ed_.body;
			var clientX_ = oe_.clientX;
			var clientY_ = oe_.clientY;
			var scrollLeft_ = doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0;
			var scrollTop_ = doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0;
			var clientLeft_ = doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0;
			var clientTop_ = doc_ && doc_.clientTop || body_ && body_.clientTop || 0;
			e_.pageX = clientX_ + (scrollLeft_ - clientLeft_);
			e_.pageY = clientY_ + (scrollTop_ - clientTop_);
		}
	}

, 
	c4: function (a) {
		var b = $.ig.DOMEventProxy.prototype.b5 >= 6;
		var source_ = a[0];
		var d_ = source_.ownerDocument;
		var doc_ = d_ ? d_.documentElement : null;
		var z_ = doc_ ? doc_.msContentZoomFactor : null;
		var body_ = doc_.body;
		if (z_ && z_ > 1 || b) {
			var rect_ = source_.getBoundingClientRect();
			var x_ = rect_.left;
			var y_ = rect_.top;
			var scrollLeft_ = doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0;
			var scrollTop_ = doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0;
			var clientLeft_ = doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0;
			var clientTop_ = doc_ && doc_.clientTop || body_ && body_.clientTop || 0;
			var c = x_ + scrollLeft_ - clientLeft_;
			var d = y_ + scrollTop_ - clientTop_;
			return new $.ig.Rect(0, c, d, 0, 0);

		} else {
			var e = a.offset();
			return new $.ig.Rect(0, e.left, e.top, 0, 0);
		}
	}

, 
	c5: function (a) {
		$.ig.DOMEventProxy.prototype.c3(a);
		var b = $.ig.DOMEventProxy.prototype.c4(this.cp());
		this.b6 = a.pageX - b.left();
		this.b7 = a.pageY - b.top();
		this.b8 = this.b6 - this.v().left();
		this.b9 = this.b7 - this.v().top();
		this.cr({__x: this.b6, __y: this.b7, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		this.cs({__x: this.b8, __y: this.b9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}

, 
	c6: function (e_) {
		$.ig.DOMEventProxy.prototype.c3(e_);
		if ($.ig.DOMEventProxy.prototype.b4) {
			var a = e_.pageX;
			var b = e_.pageY;
			var c = $.ig.DOMEventProxy.prototype.c4(this.cp());
			this.b6 = a - c.left();
			this.b7 = b - c.top();

		} else {
			this.ca = 0;
			if (!e_.originalEvent.targetTouches || e_.originalEvent.targetTouches.length < 1) { return; };
			this.ca = e_.originalEvent.targetTouches.length;
			var d = e_.originalEvent.targetTouches[0].pageX;
			var e = e_.originalEvent.targetTouches[0].pageY;
			var f = $.ig.DOMEventProxy.prototype.c4(this.cp());
			this.b6 = d - f.left();
			this.b7 = e - f.top();
		}
		this.b8 = this.b6 - this.v().left();
		this.b9 = this.b7 - this.v().top();
		this.cr({__x: this.b6, __y: this.b7, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		this.cs({__x: this.b8, __y: this.b9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}

, 
	c7: function (e_) {
		this.dz(e_);
		if (this.x()(this.cr())) {
			var delta_ = 0;
			if (e_.wheelDelta) { delta_ = e_.wheelDelta/120; };
			if (e_.originalEvent && e_.originalEvent.wheelDelta) { delta_ = e_.originalEvent.wheelDelta/120; };
			if (e_.detail) { delta_ = -e_.detail/3; };
			if (e_.originalEvent && e_.originalEvent.detail) { delta_ = -e_.originalEvent.detail/3; };
			delta_ = delta_ / 10;
			var a = this.bg(this.cs(), delta_);
			if (a) {
				e_.preventDefault();
			}
		}
	}
, 
	cb: null
, 
	c8: function (e_) {
		var a = this.dc(e_);
		if (a) {
			this.ca--;
			if (this.ca < 0) {
				this.ca = 0;
			}
		}
		if (this.ca < 2 && this.b3 && a) {
			this.b3 = false;
			var b = e_.originalEvent.scale;
			this.bj(this.cs(), b);

		} else {
			if (a) {
				this.dp(e_);

			} else {
				this.dx(e_);
			}
		}
	}

, 
	c9: function (e_) {
		var a = this.dc(e_);
		if (a) {
			this.ca--;
			if (this.ca < 0) {
				this.ca = 0;
			}
		}
		if (this.ca < 2 && this.b3 && a) {
			this.b3 = false;
			var b = e_.originalEvent.scale;
			this.bj(this.cs(), b);
		}
	}

, 
	da: function (e_) {
		var a = this.dc(e_);
		if (a) {
			this.ca--;
			if (this.ca < 0) {
				this.ca = 0;
			}
		}
		if (this.ca < 2 && this.b3 && a) {
			this.b3 = false;
			var b = e_.originalEvent.scale;
			this.bj(this.cs(), b);
		}
	}

, 
	db: function (e_) {
		var a = this.dc(e_);
		if (this.cq() != null && a) {
			this.ca++;
			this.cq().addPointer(e_.originalEvent.pointerId);
		}
		var eventSource_ = this.cp()[0];
		eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
		if (this.ca > 1 && !this.b3 && a) {
			this.b3 = true;
			this.c6(e_);
			var b = e_.originalEvent.scale;
			this.bh(this.cs(), b);

		} else {
			if (a) {
				this.di(e_);

			} else {
				this.dw(e_);
			}
		}
	}

, 
	dc: function (e_) {
		var pointerEvent_ = e_.originalEvent;
		var a = pointerEvent_.pointerType == pointerEvent_.MSPOINTER_TYPE_TOUCH;
		return a;
	}

, 
	dd: function (e_) {
		var a = this.dc(e_);
		if (this.b3) {
			return;
		}
		if (a) {
			this.dn(e_);

		} else {
			this.dv(e_);
		}
	}

, 
	de: function (e_) {
		var a = this.dc(e_);
		if (this.b3) {
			return;
		}
		if (a) {

		} else {
			this.du(e_);
		}
	}

, 
	df: function (e_) {
		this.ct(true);
		this.dz(e_);
		this.c6(e_);
		this.dk();
		if (this.x()(this.cr())) {
			e_.preventDefault();
			if ($.ig.DOMEventProxy.prototype.b4) {
				this.cb = 1;
			}
			if ($.ig.DOMEventProxy.prototype.b4 && this.ca < 2) {
				return;
			}
			var a = e_.originalEvent.scale;
			this.bh(this.cs(), a);
		}
	}

, 
	dg: function (e_) {
		this.ct(true);
		this.dz(e_);
		this.c6(e_);
		if (this.x()(this.cr())) {
			e_.preventDefault();
			if ($.ig.DOMEventProxy.prototype.b4 && this.ca < 2) {
				return;
			}
			var a = e_.originalEvent.scale;
			this.bi(this.cs(), a);
		}
	}

, 
	dh: function (e_) {
		e_.preventDefault();
		var a = e_.originalEvent.scale;
		this.ct(false);
		this.dz(e_);
		this.c6(e_);
		if (!$.ig.DOMEventProxy.prototype.b4 || this.b3) {
			this.bj(this.cs(), a);
		}
	}

, 
	di: function (e_) {
		this.ct(true);
		this.dz(e_);
		this.c6(e_);
		if (this.x()(this.cr())) {
			e_.preventDefault();
			this.br(this.cr(), false, true);
			this.bt(this.cr());
			this.bk(this.cs(), true);
			this.dj();
		}
	}
, 
	cc: null, 
	cd: null, 
	ce: null, 
	cf: null, 
	cg: null
, 
	dj: function () {
		if (this.cc == $.ig.DOMEventProxy.prototype.bz) {
			this.ce = this.cr().__x;
			this.cf = this.cr().__y;
			this.cc = window.setTimeout(this.dm.on(this), 1500);
		}
	}

, 
	dk: function () {
		if (Math.abs(this.ce - this.cr().__x) > this.cg || Math.abs(this.cf - this.cr().__y) > this.cg) {
			this.dl();
		}
	}

, 
	dl: function () {
		if (this.cc != $.ig.DOMEventProxy.prototype.bz) {
			window.clearTimeout(this.cc);
			this.cc = $.ig.DOMEventProxy.prototype.bz;
		}
	}

, 
	dm: function () {
		this.cc = $.ig.DOMEventProxy.prototype.bz;
		this.bx(this.cs());
	}
, 
	ch: null, 
	ci: null
, 
	dn: function (a) {
		this.ct(true);
		this.dz(a);
		this.c6(a);
		this.dk();
		this.dr();
		if (this.x()(this.cr()) && this.ca == 1) {
			a.preventDefault();
			if (!this.ch) {
				this.ch = true;
				this.ci = this.cs();
				this.bl(this.ci);

			} else {
				this.br(this.cr(), true, true);
				this.bm(this.cs(), true);
				this.bn(this.cs());
			}
		}
	}

, 
	dp: function (a) {
		this.ct(false);
		this.dz(a);
		this.c6(a);
		this.dl();
		a.preventDefault();
		this.br(this.cr(), false, true);
		this.bu(this.cr());
		if (this.ca == 0) {
			this.dq(this.cr());
		}
		if (this.ch && this.ca == 0) {
			this.ch = false;
			this.ci = null;
			this.bp(this.cs());
		}
		this.bo(this.cs(), true);
	}

, 
	dq: function (a) {
		if (this.cd == null) {
			this.cd = new $.ig.Rect(0, a.__x - 50, a.__y - 50, 100, 100);
			window.setTimeout(this.dr.on(this), 500);

		} else {
			if (a.__x >= this.cd.x() && a.__x <= this.cd.right() && a.__y >= this.cd.y() && a.__y <= this.cd.bottom()) {
				this.dr();
				this.bw(a);
			}
		}
	}

, 
	dr: function () {
		this.cd = null;
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
	du: function (a) {
		this.c5(a);
		if (this.ct()) {
			this.ct(false);
			this.bq(this.cs());
		}
	}

, 
	dv: function (a) {
		this.c5(a);
		this.dz(a);
		var b = new $.ig.MouseEventArgs();
		b.position(this.cr());
		if (this.x()(this.cr())) {
			if (!this.ct()) {
				this.ct(true);
				this.bs(this.cr());
			}
			this.br(this.cr(), true, false);
			this.bm(this.cs(), false);
		} else if (this.ct()) {
			this.du(a);
		}
	}

, 
	dw: function (a) {
		this.cp().focus();
		this.c5(a);
		this.dz(a);
		if (this.x()(this.cr())) {
			this.bt(this.cr());
			this.bk(this.cs(), false);
			a.preventDefault();
		}
	}

, 
	dx: function (a) {
		this.dz(a);
		this.bu(this.cr());
		this.bo(this.cs(), false);
		a.preventDefault();
	}

, 
	dy: function (a) {
		var b = $.ig.Key.prototype.a;
		var c = false;
		this.dz(a);
		switch (a.which) {
			case 33:
				c = true;
				b = $.ig.Key.prototype.pageUp;
				break;
			case 34:
				c = true;
				b = $.ig.Key.prototype.pageDown;
				break;
			case 36:
				c = true;
				b = $.ig.Key.prototype.home;
				break;
			case 37:
				c = true;
				b = $.ig.Key.prototype.left;
				break;
			case 38:
				c = true;
				b = $.ig.Key.prototype.up;
				break;
			case 39:
				c = true;
				b = $.ig.Key.prototype.right;
				break;
			case 40:
				c = true;
				b = $.ig.Key.prototype.down;
				break;
		}
		if (c && this.x()(this.cr())) {
			var d = false;
			d = this.bv(b);
			if (d) {
				a.preventDefault();
			}
		}
	}

, 
	dz: function (a) {
		this.w($.ig.ModifierKeys.prototype.none);
		if (a.shiftKey) {
			this.w(this.w() | $.ig.ModifierKeys.prototype.shift);
		}
		if (a.altKey) {
			this.w(this.w() | $.ig.ModifierKeys.prototype.alt);
		}
		if (a.ctrlKey) {
			this.w(this.w() | $.ig.ModifierKeys.prototype.control);
		}
	}

, 
	by: function () {
		var a = $.ig.DOMEventProxy.prototype.c4(this.cp());
		var b = a.left();
		var c = a.top();
		return {__x: b, __y: c, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	bf: function () {
		if (this.cp() == null) {
			return;
		}
		this.cp().unbind(this.b2);
		this.cp(null);
	}
,
	$type: new $.ig.Type('DOMEventProxy', $.ig.EventProxy.prototype.$type)
}, true);

$.ig.util.defType('TrendCalculators', 'Object', {
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
			$d : 0,
			$e : 0,
			$f : 0,
			$g : 0,
			$h : 0,
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
							this.$c = new Array(b);
							this.$d = 0;
							this.$state = 1;
							break;
						case 1:
							this.$d = 0;
							this.$state = 4;
							break;
						case 2:
							this.$c[this.$d] = 0;
							this.$state = 3;
							break;
						case 3:
							this.$d++;
							this.$state = 4;
							break;
						case 4:
							if (this.$d < b) {
								this.$state = 2;
							}
							else {
								this.$state = 5;
							}
							break;
						case 5:
							this.$e = NaN;
							this.$f = NaN;
							this.$g = NaN;
							this.$h = NaN;
							this.$d = 0;
							this.$state = 6;
							break;
						case 6:
							this.$j = a.getEnumerator();
							this.$state = 18;
							break;
						case 7:
							this.$i = this.$j.current();
							this.$state = 8;
							break;
						case 8:
							if (!isNaN(this.$i)) {
								this.$state = 9;
							}
							else {
								this.$state = 16;
							}
							break;

						case 9:
							this.$k = this.$d % b;
							this.$state = 10;
							break;
						case 10:
							if (this.$d == 0) {
								this.$state = 11;
							}
							else {
								this.$state = 12;
							}
							break;

						case 11:
							this.$g = 1;
							this.$h = this.$f = this.$e = this.$i;
							this.$state = 15;
							break;

						case 12:
							if (this.$d < b) {
								this.$state = 13;
							}
							else {
								this.$state = 14;
							}
							break;

						case 13:
							this.$g += (this.$d + 1);
							this.$e += this.$i;
							this.$f += (this.$d + 1) * this.$i;
							this.$h = this.$f / this.$g;
							this.$state = 15;
							break;

						case 14:
							this.$f = this.$f + (b * this.$i) - this.$e;
							this.$h = this.$f / this.$g;
							this.$e = this.$e + this.$i - this.$c[this.$k];
							this.$state = 15;
							break;
						case 15:
							this.$c[this.$k] = this.$i;
							++this.$d;
							this.$state = 16;
							break;

						case 16:
							this.$current =  this.$h;
							this.$state = 17
							return true;
						case 17:
							this.$state = 18;
							break;
						case 18:
							if (this.$j.moveNext()) {
								this.$state = 7;
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
		}; } (a, b) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	b: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : 0,
			$d : 0,
			$e : 0,
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
							this.$d = NaN;
							this.$e = 2 / (1 + b);
							this.$state = 1;
							break;
						case 1:
							this.$g = a.getEnumerator();
							this.$state = 11;
							break;
						case 2:
							this.$f = this.$g.current();
							this.$state = 3;
							break;
						case 3:
							if (!isNaN(this.$f)) {
								this.$state = 4;
							}
							else {
								this.$state = 9;
							}
							break;

						case 4:
							this.$state = 5;
							break;
						case 5:
							if (this.$c < b) {
								this.$state = 6;
							}
							else {
								this.$state = 7;
							}
							break;

						case 6:
							this.$d = isNaN(this.$d) ? this.$f : (this.$d * this.$c + this.$f) / (this.$c + 1);
							this.$state = 8;
							break;

						case 7:
							this.$d = (this.$f - this.$d) * this.$e + this.$d;
							this.$state = 8;
							break;
						case 8:
							++this.$c;
							this.$state = 9;
							break;

						case 9:
							this.$current =  this.$d;
							this.$state = 10
							return true;
						case 10:
							this.$state = 11;
							break;
						case 11:
							if (this.$g.moveNext()) {
								this.$state = 2;
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
	c: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : 0,
			$d : 0,
			$e : 0,
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
							this.$d = NaN;
							this.$e = 1 / b;
							this.$state = 1;
							break;
						case 1:
							this.$g = a.getEnumerator();
							this.$state = 11;
							break;
						case 2:
							this.$f = this.$g.current();
							this.$state = 3;
							break;
						case 3:
							if (!isNaN(this.$f)) {
								this.$state = 4;
							}
							else {
								this.$state = 9;
							}
							break;

						case 4:
							this.$state = 5;
							break;
						case 5:
							if (this.$c < b) {
								this.$state = 6;
							}
							else {
								this.$state = 7;
							}
							break;

						case 6:
							this.$d = isNaN(this.$d) ? this.$f : (this.$d * this.$c + this.$f) / (this.$c + 1);
							this.$state = 8;
							break;

						case 7:
							this.$d = (this.$f - this.$d) * this.$e + this.$d;
							this.$state = 8;
							break;
						case 8:
							++this.$c;
							this.$state = 9;
							break;

						case 9:
							this.$current =  this.$d;
							this.$state = 10
							return true;
						case 10:
							this.$state = 11;
							break;
						case 11:
							if (this.$g.moveNext()) {
								this.$state = 2;
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
	d: function (a) {
		var $self = this;
		var $iter = function () { return function (a) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$b : 0,
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
							this.$b = NaN;
							this.$c = 0;
							this.$state = 1;
							break;
						case 1:
							this.$e = a.getEnumerator();
							this.$state = 7;
							break;
						case 2:
							this.$d = this.$e.current();
							this.$state = 3;
							break;
						case 3:
							if (!isNaN(this.$d)) {
								this.$state = 4;
							}
							else {
								this.$state = 5;
							}
							break;

						case 4:
							this.$b = isNaN(this.$b) ? this.$d : (this.$b * this.$c + this.$d) / (this.$c + 1);
							++this.$c;
							this.$state = 5;
							break;

						case 5:
							this.$current =  this.$b;
							this.$state = 6
							return true;
						case 6:
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
		}; } (a) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	e: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : null,
			$d : 0,
			$e : 0,
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
							this.$c = new Array(b);
							this.$d = 0;
							this.$state = 1;
							break;
						case 1:
							this.$d = 0;
							this.$state = 4;
							break;
						case 2:
							this.$c[this.$d] = 0;
							this.$state = 3;
							break;
						case 3:
							this.$d++;
							this.$state = 4;
							break;
						case 4:
							if (this.$d < b) {
								this.$state = 2;
							}
							else {
								this.$state = 5;
							}
							break;
						case 5:
							this.$d = 0;
							this.$e = NaN;
							this.$state = 6;
							break;
						case 6:
							this.$g = a.getEnumerator();
							this.$state = 16;
							break;
						case 7:
							this.$f = this.$g.current();
							this.$state = 8;
							break;
						case 8:
							if (!isNaN(this.$f)) {
								this.$state = 9;
							}
							else {
								this.$state = 14;
							}
							break;

						case 9:
							this.$h = this.$f / b;
							this.$i = this.$d % b;
							this.$state = 10;
							break;
						case 10:
							if (this.$d < b) {
								this.$state = 11;
							}
							else {
								this.$state = 12;
							}
							break;

						case 11:
							this.$e = isNaN(this.$e) ? this.$f : (this.$e * this.$d + this.$f) / (this.$d + 1);
							this.$state = 13;
							break;

						case 12:
							this.$e = this.$e + this.$h - this.$c[this.$i];
							this.$state = 13;
							break;
						case 13:
							this.$c[this.$i] = this.$h;
							++this.$d;
							this.$state = 14;
							break;

						case 14:
							this.$current =  this.$e;
							this.$state = 15
							return true;
						case 15:
							this.$state = 16;
							break;
						case 16:
							if (this.$g.moveNext()) {
								this.$state = 7;
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
	f: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : null,
			$d : 0,
			$e : 0,
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
							this.$c = new Array(b);
							this.$d = 0;
							this.$state = 1;
							break;
						case 1:
							this.$d = 0;
							this.$state = 4;
							break;
						case 2:
							this.$c[this.$d] = 0;
							this.$state = 3;
							break;
						case 3:
							this.$d++;
							this.$state = 4;
							break;
						case 4:
							if (this.$d < b) {
								this.$state = 2;
							}
							else {
								this.$state = 5;
							}
							break;
						case 5:
							this.$d = 0;
							this.$e = NaN;
							this.$state = 6;
							break;
						case 6:
							this.$g = a.getEnumerator();
							this.$state = 16;
							break;
						case 7:
							this.$f = this.$g.current();
							this.$state = 8;
							break;
						case 8:
							if (!isNaN(this.$f)) {
								this.$state = 9;
							}
							else {
								this.$state = 14;
							}
							break;

						case 9:
							this.$h = this.$f;
							this.$i = this.$d % b;
							this.$state = 10;
							break;
						case 10:
							if (this.$d < b) {
								this.$state = 11;
							}
							else {
								this.$state = 12;
							}
							break;

						case 11:
							this.$e = isNaN(this.$e) ? this.$h : this.$e + this.$h;
							this.$state = 13;
							break;

						case 12:
							this.$e = this.$e + this.$h - this.$c[this.$i];
							this.$state = 13;
							break;
						case 13:
							this.$c[this.$i] = this.$h;
							++this.$d;
							this.$state = 14;
							break;

						case 14:
							this.$current =  this.$e;
							this.$state = 15
							return true;
						case 15:
							this.$state = 16;
							break;
						case 16:
							if (this.$g.moveNext()) {
								this.$state = 7;
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
	g: function (a, b) {
		var $self = this;
		var $iter = function () { return function (a, b) { return {
			$state: 0,
			$this: $self,
			$current: null,
			$c : null,
			$d : null,
			$e : null,
			$f : 0,
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
							this.$c = $.ig.TrendCalculators.prototype.e(a, b).getEnumerator();
							this.$d = a.getEnumerator();
							this.$e = new Array(b);
							this.$f = 0;
							this.$state = 1;
							break;
						case 1:
							this.$f = 0;
							this.$state = 4;
							break;
						case 2:
							this.$e[this.$f] = 0;
							this.$state = 3;
							break;
						case 3:
							this.$f++;
							this.$state = 4;
							break;
						case 4:
							if (this.$f < b) {
								this.$state = 2;
							}
							else {
								this.$state = 5;
							}
							break;
						case 5:
							this.$f = 0;
							this.$state = 6;
							break;
						case 6:
							this.$state = 24;
							break;
						case 7:
							this.$e[(this.$f++) % b] = this.$d.current();
							this.$g = 0;
							this.$state = 8;
							break;
						case 8:
							if (this.$f < b) {
								this.$state = 9;
							}
							else {
								this.$state = 16;
							}
							break;

						case 9:
							this.$h = 0;
							this.$state = 10;
							break;
						case 10:
							this.$i = 0;
							this.$state = 13;
							break;
						case 11:
							this.$j = (this.$c.current() - this.$e[this.$i]);
							this.$g += this.$j * this.$j;
							this.$h++;
							this.$state = 12;
							break;
						case 12:
							this.$i++;
							this.$state = 13;
							break;
						case 13:
							if (this.$i < this.$f) {
								this.$state = 11;
							}
							else {
								this.$state = 14;
							}
							break;
						case 14:
							this.$current =  Math.sqrt(this.$g / this.$h);
							this.$state = 15
							return true;
						case 15:
							this.$state = 23;
							break;

						case 16:
							this.$state = 17;
							break;
						case 17:
							this.$k = 0;
							this.$state = 20;
							break;
						case 18:
							this.$l = (this.$c.current() - this.$e[this.$k]);
							this.$g += this.$l * this.$l;
							this.$state = 19;
							break;
						case 19:
							++this.$k;
							this.$state = 20;
							break;
						case 20:
							if (this.$k < b) {
								this.$state = 18;
							}
							else {
								this.$state = 21;
							}
							break;
						case 21:
							this.$current =  Math.sqrt(this.$g / b);
							this.$state = 22
							return true;
						case 22:
							this.$state = 23;
							break;
						case 23:
							this.$state = 24;
							break;
						case 24:
							if (this.$d.moveNext() && this.$c.moveNext()) {
								this.$state = 7;
							}
							else {
								this.$state = 25;
							}
							break;
						case 25:
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
	$type: new $.ig.Type('TrendCalculators', $.ig.Object.prototype.$type)
}, true);









$.ig.util.defType('IFastItemColumnInternal', 'Object', {

		$type: new $.ig.Type('IFastItemColumnInternal', null)
}, true);

$.ig.util.defType('IFastItemColumnPropertyName', 'Object', {

		$type: new $.ig.Type('IFastItemColumnPropertyName', null)
}, true);

$.ig.util.defType('IFastItemColumn$1', 'Object', {

		$type: new $.ig.Type('IFastItemColumn$1', null, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IFastItemColumnPropertyName.prototype.$type])
}, true);

$.ig.util.defType('FastItemColumn', 'Object', {
	a: null
, 
		init: function (a, b, c) {

			this.a = null;
			this.__propertyName = null;

			$.ig.Object.prototype.init.call(this);
						this.a = c;
				this.propertyName(b);
				this.g(a);
		}
, 
	g: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			this.reset();
			return a;
		} else {
			return this.b;
		}
	}
, 
	b: null, 
	__propertyName: null
, 
	propertyName: function (a) {
		if (arguments.length === 1) {
			this.__propertyName = a;
			return a;
		} else {
			return this.__propertyName;
		}
	}

, 
	minimum: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			if (isNaN(this.c) && this.h() != null) {
				this.c = Number.POSITIVE_INFINITY;
				var c = this.h().getEnumerator();
				while (c.moveNext()) {
					var b = c.current();
					if (!isNaN(b)) {
						this.c = Math.min(this.c, b);
					}
				}
			}
			return this.c;
		}
	}
, 
	c: null
, 
	maximum: function (a) {
		if (arguments.length === 1) {
			this.d = a;
			return a;
		} else {
			if (isNaN(this.d) && this.h() != null) {
				this.d = Number.NEGATIVE_INFINITY;
				var c = this.h().getEnumerator();
				while (c.moveNext()) {
					var b = c.current();
					if (!isNaN(b)) {
						this.d = Math.max(this.d, b);
					}
				}
			}
			return this.d;
		}
	}
, 
	d: null
, 
	item: function (b, a) {
		if (arguments.length === 2) {
			this.h().__inner[b] = a;
			return a;
		} else {
			return this.h().__inner[b];
		}
	}

, 
	getEnumerator: function () {
		return this.h().getEnumerator();
	}

, 
	contains: function (a) {
		return this.h().contains(a);
	}

, 
	n: function (a, b) {
		this.h().copyTo(a, b);
	}

, 
	count: function () {
			return this.h().count();
	}

, 
	isReadOnly: function () {
			return true;
	}

, 
	indexOf: function (a) {
		return this.h().indexOf(a);
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
	remove: function (a) {
		throw new $.ig.NotImplementedException();
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
	reset: function () {
		this.h(null);
		this.minimum(NaN);
		this.maximum(NaN);
		return this.g() != null ? this.insertRange(0, this.g().g()) : true;
	}

, 
	insertRange: function (a, b) {
		var c = new Array(b);
		var source_ = this.b.ad();
		var d;
		var e = this.minimum();
		var f = this.maximum();
		var g = isNaN(this.minimum());
		var h = isNaN(this.maximum());
		var i = 0;
		var j;
		if (this.a != null) {
			for (var i_ = a; i_ < a + b; ++i_) {
				d = source_[i_][this.__propertyName];
				d = this.a(d);
				j = d == null ? NaN : d;
				var k = (j != j);
				if (g || j < e) {
					e = j;
					g = k;
				}
				if (h || j > f) {
					f = j;
					h = k;
				}
				c[i] = j;
				i++;
			}

		} else {
			for (var i_ = a; i_ < a + b; ++i_) {
				d = source_[i_][this.__propertyName];
				j = d == null ? NaN : d;
				var l = (j != j);
				if (g || j < e) {
					e = j;
					g = l;
				}
				if (h || j > f) {
					f = j;
					h = l;
				}
				c[i] = j;
				i++;
			}
		}
		this.minimum(e);
		this.maximum(f);
		if (this.h() == null) {
			this.h(new $.ig.List$1(Number, 1, c));

		} else {
			this.h().p(a, c);
		}
		return true;
	}

, 
	removeRange: function (a, b) {
		for (var c = a; c < a + b && !isNaN(this.minimum()) && !isNaN(this.maximum()); ++c) {
			if (this.item(c) == this.minimum()) {
				this.minimum(NaN);
			}
			if (this.item(c) == this.maximum()) {
				this.maximum(NaN);
			}
		}
		this.h().q(a, b);
		return true;
	}

, 
	o: function (a, b) {
		if (isNaN(a)) {
			if (!isNaN(b)) {
				if (!isNaN(this.minimum())) {
					this.minimum(Math.min(b, this.minimum()));
				}
				if (!isNaN(this.maximum())) {
					this.maximum(Math.max(b, this.maximum()));
				}
			}
			return;
		}
		if (isNaN(b)) {
			this.minimum(!isNaN(this.minimum()) && a == this.minimum() ? NaN : this.minimum());
			this.maximum(!isNaN(this.maximum()) && a == this.maximum() ? NaN : this.maximum());
			return;
		}
		if (!isNaN(this.minimum())) {
			if (a == this.minimum() && b > this.minimum()) {
				this.minimum(NaN);

			} else {
				this.minimum(Math.min(b, this.minimum()));
			}
		}
		if (!isNaN(this.maximum())) {
			if (a == this.maximum() && b < this.maximum()) {
				this.maximum(NaN);

			} else {
				this.maximum(Math.max(b, this.maximum()));
			}
		}
	}

, 
	replaceRange: function (a, b) {
		var c = false;
		for (var d = 0; d < b; ++d) {
			var e = this.h().__inner[a + d];
			var f = this.p(this.g().item(a + d));
			if (e != f) {
				this.h().__inner[a + d] = f;
				c = true;
				this.o(e, f);
			}
		}
		return c;
	}
, 
	e: null
, 
	p: function (a) {
		if (a == null) {
			return NaN;
		}
		var from_ = a;
		a = from_[this.__propertyName];
		if (this.a != null) {
			a = this.a(a);
		}
		if (a == null) {
			return NaN;
		}
		return a;
		if ($.ig.util.cast(Number, a) !== null) {
			return a;
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
	s: function (a) {
		var b = new $.ig.List$1($.ig.Number.prototype.$type, 2, a.count());
		for (var c = 0; c < a.count(); c++) {
			b.add(c);
		}
		b.r();
		return b;
	}

, 
	t: function () {
		return $.ig.FastItemColumn.prototype.s(this.h());
	}

, 
	asArray: function () {
		return this.h().asArrayList();
	}
,
	$type: new $.ig.Type('FastItemColumn', $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize(Number)])
}, true);

$.ig.util.defType('FastItemDateTimeColumn', 'Object', {
	a: null
, 
		init: function (a, b, c) {

			this.__propertyName = null;
			this.c = false;
			this.d = false;

			$.ig.Object.prototype.init.call(this);
						this.a = c;
				this.propertyName(b);
				this.i(a);
		}
, 
	i: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			this.reset();
			return a;
		} else {
			return this.b;
		}
	}
, 
	b: null, 
	__propertyName: null
, 
	propertyName: function (a) {
		if (arguments.length === 1) {
			this.__propertyName = a;
			return a;
		} else {
			return this.__propertyName;
		}
	}
, 
	c: null, 
	d: null
, 
	minimum: function (a) {
		if (arguments.length === 1) {
			this.e = a;
			return a;
		} else {
			if (!this.c && this.j() != null) {
				var c = this.j().getEnumerator();
				while (c.moveNext()) {
					var b = c.current();
					if (b < this.e) {
						this.e = b;
					}
				}
				if (this.j().count() > 0) {
					this.c = true;
				}
			}
			return this.e;
		}
	}
, 
	e: null
, 
	maximum: function (a) {
		if (arguments.length === 1) {
			this.f = a;
			return a;
		} else {
			if (!this.d && this.j() != null) {
				var c = this.j().getEnumerator();
				while (c.moveNext()) {
					var b = c.current();
					if (b > this.f) {
						this.f = b;
					}
				}
				if (this.j().count() > 0) {
					this.d = true;
				}
			}
			return this.f;
		}
	}
, 
	f: null
, 
	item: function (b, a) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException();
			return a;
		} else {
			return this.j().__inner[b];
		}
	}

, 
	getEnumerator: function () {
		return this.j().getEnumerator();
	}

, 
	contains: function (a) {
		return this.j().contains(a);
	}

, 
	p: function (a, b) {
		this.j().copyTo(a, b);
	}

, 
	count: function () {
			return this.j().count();
	}

, 
	isReadOnly: function () {
			return true;
	}

, 
	indexOf: function (a) {
		return this.j().indexOf(a);
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
	remove: function (a) {
		throw new $.ig.NotImplementedException();
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
	reset: function () {
		this.j(null);
		this.c = false;
		this.d = false;
		return this.i() != null ? this.insertRange(0, this.i().g()) : true;
	}

, 
	insertRange: function (a, b) {
		var c = new Array(b);
		var source_ = this.b.ad();
		var d;
		var e = this.minimum();
		var f = this.maximum();
		var g;
		var h = 0;
		if (this.a != null) {
			for (var i_ = a; i_ < a + b; ++i_) {
				d = source_[i_][this.__propertyName];
				d = this.a(d);
				g = d == null ? new Date() : d;
				if (!this.c) {
					e = g;
					this.c = true;
				} else if (g < e) {
					e = g;
				}
				if (!this.d) {
					f = g;
					this.d = true;
				} else if (g > f) {
					f = g;
				}
				c[h] = g;
				h++;
			}

		} else {
			for (var i_ = a; i_ < a + b; ++i_) {
				d = source_[i_][this.__propertyName];
				g = d == null ? new Date() : d;
				if (!this.c) {
					e = g;
					this.c = true;
				} else if (g < e) {
					e = g;
				}
				if (!this.d) {
					f = g;
					this.d = true;
				} else if (g > f) {
					f = g;
				}
				c[h] = g;
				h++;
			}
		}
		this.minimum(e);
		this.maximum(f);
		if (this.j() == null) {
			this.j(new $.ig.List$1($.ig.Date.prototype.$type, 1, c));

		} else {
			this.j().p(a, c);
		}
		return true;
	}

, 
	removeRange: function (a, b) {
		for (var c = a; c < a + b; ++c) {
			if (this.item(c) == this.minimum()) {
				this.c = false;
			}
			if (this.item(c) == this.maximum()) {
				this.d = false;
			}
		}
		this.j().q(a, b);
		return true;
	}

, 
	q: function (a, b) {
		if (a != $.ig.Date.prototype.minValue()) {
			if (b != $.ig.Date.prototype.minValue()) {
				this.minimum(b < this.minimum() ? b : this.minimum());
				this.maximum(b > this.maximum() ? b : this.maximum());
			}
			return;
		}
		this.minimum(b < this.minimum() ? b : this.minimum());
		this.maximum(b > this.maximum() ? b : this.maximum());
	}

, 
	replaceRange: function (a, b) {
		var c = false;
		for (var d = 0; d < b; ++d) {
			var e = this.j().__inner[a + d];
			var f = this.r(this.i().item(a + d));
			if (e != f) {
				this.j().__inner[a + d] = f;
				c = true;
				this.q(e, f);
			}
		}
		return c;
	}
, 
	g: null
, 
	r: function (a) {
		if (a == null) {
			return $.ig.Date.prototype.minValue();
		}
		var from_ = a;
		a = from_[this.__propertyName];
		if (this.a != null) {
			a = this.a(a);
		}
		if (a == null) {
			return $.ig.Date.prototype.minValue();
		}
		return a;
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
	u: function () {
		return $.ig.FastItemColumn.prototype.s(this.j());
	}

, 
	asArray: function () {
		return this.j().asArrayList();
	}
,
	$type: new $.ig.Type('FastItemDateTimeColumn', $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Date.prototype.$type)])
}, true);

$.ig.util.defType('FastItemObjectColumn', 'Object', {
	a: null
, 
		init: function (a, b, c) {


			$.ig.Object.prototype.init.call(this);
						this.a = c;
				this.propertyName(b);
				this.g(a);
		}
, 
	g: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			this.reset();
			return a;
		} else {
			return this.b;
		}
	}
, 
	b: null, 
	__propertyName: null
, 
	propertyName: function (a) {
		if (arguments.length === 1) {
			this.__propertyName = a;
			return a;
		} else {
			return this.__propertyName;
		}
	}

, 
	minimum: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			return this.c;
		}
	}
, 
	c: null
, 
	maximum: function (a) {
		if (arguments.length === 1) {
			this.d = a;
			return a;
		} else {
			return this.d;
		}
	}
, 
	d: null
, 
	item: function (b, a) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException();
			return a;
		} else {
			return this.h().__inner[b];
		}
	}

, 
	getEnumerator: function () {
		return this.h().getEnumerator();
	}

, 
	contains: function (a) {
		return this.h().contains1(a);
	}

, 
	n: function (a, b) {
		this.h().copyTo(a, b);
	}

, 
	count: function () {
			return this.h().count();
	}

, 
	isReadOnly: function () {
			return true;
	}

, 
	indexOf: function (a) {
		return this.h().indexOf1(a);
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
	remove: function (a) {
		throw new $.ig.NotImplementedException();
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
	reset: function () {
		this.h(null);
		return this.g() != null ? this.insertRange(0, this.g().g()) : true;
	}

, 
	insertRange: function (a, b) {
		var $self = this;
		var c = (function () { var $ret = new $.ig.List$1($.ig.Object.prototype.$type, 0);
$ret.h(b); return $ret;}());
		for (var d = a; d < a + b; ++d) {
			var e = this.o(this.g().item(d));
			c.add1(e);
		}
		if (this.h() == null) {
			this.h(c);

		} else {
			this.h().p(a, c);
		}
		return true;
	}

, 
	replaceRange: function (a, b) {
		var c = false;
		for (var d = 0; d < b; ++d) {
			var e = this.h().__inner[a + d];
			var f = this.o(this.g().item(a + d));
			if (e != f) {
				this.h().__inner[a + d] = f;
				c = true;
			}
		}
		return c;
	}

, 
	removeRange: function (a, b) {
		this.h().q(a, b);
		return true;
	}
, 
	e: null
, 
	o: function (a) {
		if (a == null) {
			return null;
		}
		var from_ = a;
		a = from_[this.__propertyName];
        //MM
		if (this.a != null && a != undefined) {
			a = this.a(a);
		}
		return a;
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
	r: function () {
		return $.ig.FastItemColumn.prototype.s(this.h());
	}

, 
	asArray: function () {
		return this.h().asArrayList();
	}
,
	$type: new $.ig.Type('FastItemObjectColumn', $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type)])
}, true);

$.ig.util.defType('FastItemIntColumn', 'Object', {
	a: null
, 
		init: function (a, b, c) {

			this.__propertyName = null;

			$.ig.Object.prototype.init.call(this);
						this.a = c;
				this.propertyName(b);
				this.g(a);
		}
, 
	g: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			this.reset();
			return a;
		} else {
			return this.b;
		}
	}
, 
	b: null, 
	__propertyName: null
, 
	propertyName: function (a) {
		if (arguments.length === 1) {
			this.__propertyName = a;
			return a;
		} else {
			return this.__propertyName;
		}
	}

, 
	minimum: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			return this.c;
		}
	}
, 
	c: null
, 
	maximum: function (a) {
		if (arguments.length === 1) {
			this.d = a;
			return a;
		} else {
			return this.d;
		}
	}
, 
	d: null
, 
	item: function (b, a) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException();
			return a;
		} else {
			return this.h().__inner[b];
		}
	}

, 
	getEnumerator: function () {
		return this.h().getEnumerator();
	}

, 
	contains: function (a) {
		return this.h().contains(a);
	}

, 
	n: function (a, b) {
		this.h().copyTo(a, b);
	}

, 
	count: function () {
			return this.h().count();
	}

, 
	isReadOnly: function () {
			return true;
	}

, 
	indexOf: function (a) {
		return this.h().indexOf(a);
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
	remove: function (a) {
		throw new $.ig.NotImplementedException();
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
	reset: function () {
		this.h(null);
		return this.g() != null ? this.insertRange(0, this.g().g()) : true;
	}

, 
	insertRange: function (a, b) {
		var c = new Array(b);
		var source_ = this.b.ad();
		var d;
		var e = this.minimum();
		var f = this.maximum();
		var g = 0;
		if (this.a != null) {
			for (var i_ = a; i_ < a + b; ++i_) {
				d = source_[i_][this.__propertyName];
				if (this.a != null) {
					d = this.a(d);
				}
				var h = d == null ? 0 : d;
				c[g] = h;
				g++;
			}

		} else {
			for (var i_ = a; i_ < a + b; ++i_) {
				d = source_[i_][this.__propertyName];
				var i = d == null ? 0 : d;
				c[g] = i;
				g++;
			}
		}
		if (this.h() == null) {
			this.h(new $.ig.List$1($.ig.Number.prototype.$type, 1, c));

		} else {
			this.h().p(a, c);
		}
		return true;
	}

, 
	replaceRange: function (a, b) {
		var c = false;
		for (var d = 0; d < b; ++d) {
			var e = this.h().__inner[a + d];
			var f = this.o(this.g().item(a + d));
			if (e != f) {
				this.h().__inner[a + d] = f;
				c = true;
			}
		}
		return c;
	}

, 
	removeRange: function (a, b) {
		this.h().q(a, b);
		return true;
	}
, 
	e: null
, 
	o: function (a) {
		var from_ = a;
		a = from_[this.__propertyName];
		if (this.a != null) {
			a = this.a(a);
		}
		if (a == null) {
			return 0;
		}
		return a;
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
	r: function () {
		return $.ig.FastItemColumn.prototype.s(this.h());
	}

, 
	asArray: function () {
		return this.h().asArrayList();
	}
,
	$type: new $.ig.Type('FastItemIntColumn', $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Number.prototype.$type)])
}, true);

$.ig.util.defType('FastItemsSource', 'Object', {

		init: function () {

			this.b = new $.ig.Dictionary$2(String, $.ig.ColumnReference.prototype.$type, 0);
			this.d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
			this.e = null;

			$.ig.Object.prototype.init.call(this);
		}, 
	event: null
, 
	j: function (a, b, c) {
		if (this.event != null) {
			this.event(this, new $.ig.FastItemsSourceEventArgs(0, a, b, c));
		}
	}

, 
	k: function (a, b) {
		if (this.event != null) {
			this.event(this, new $.ig.FastItemsSourceEventArgs(1, a, b));
		}
	}

, 
	f: function (a) {
		if (arguments.length === 1) {
			if (this.c == a) {
				return;
			}
			this.n();
			this.c = a;
			this.d.clear();
			this.e = null;
			this.o();
			var c = this.b.values().getEnumerator();
			while (c.moveNext()) {
				var b = c.current();
				b.a.reset();
			}
			this.j($.ig.FastItemsSourceEventAction.prototype.insert, 0, this.d.count());
			return a;
		} else {
			return this.c;
		}
	}

, 
	n: function () {
	}

, 
	o: function () {
		this.d.o(this.d.count(), this.c);
	}

, 
	p: function (a, b) {
		if (this.e != null) {
			for (var c = 0; c < b.count(); ++c) {
				this.e.add(b.item(c), a + c);
			}
			for (var d = a; d < this.d.count(); ++d) {
				this.e.item(this.d.__inner[d], d + b.count());
			}
		}
		this.d.o(a, b);
		var f = this.b.values().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			e.a.insertRange(a, b.count());
		}
		this.j($.ig.FastItemsSourceEventAction.prototype.insert, a, b.count());
	}

, 
	q: function (a, b) {
		this.d.q(a, b.count());
		if (this.e != null) {
			var d = b.getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				this.e.remove(c);
			}
			for (var e = a; e < this.d.count(); ++e) {
				this.e.item(this.d.__inner[e], e);
			}
		}
		var g = this.b.values().getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			f.a.removeRange(a, b.count());
		}
		this.j($.ig.FastItemsSourceEventAction.prototype.remove, a, b.count());
	}

, 
	r: function (a, b, c) {
		for (var d = 0; d < c.count(); ++d) {
			this.d.__inner[a + d] = c.item(d);
		}
		if (this.e != null) {
			var f = b.getEnumerator();
			while (f.moveNext()) {
				var e = f.current();
				this.e.remove(e);
			}
			for (var g = 0; g < c.count(); ++g) {
				this.e.add(c.item(g), a + g);
			}
		}
		var i = this.b.values().getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			h.a.replaceRange(a, c.count());
		}
		this.j($.ig.FastItemsSourceEventAction.prototype.replace, a, b.count());
	}

, 
	s: function () {
		this.d.clear();
		this.e = null;
		this.d.o(0, this.c);
		var b = this.b.values().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.a.reset();
		}
		this.j($.ig.FastItemsSourceEventAction.prototype.reset, 0, this.d.count());
	}

, 
	t: function (a, b) {
		var $self = this;
		var c = null;
		var d = this.x(a);
		if (d == -1) {
			throw new $.ig.ArgumentException(0, "item");
		}
		if ((function () { var $ret = $self.b.tryGetValue(b, c); c = $ret.value; return $ret.ret; }())) {
			c.a.replaceRange(d, 1);
		}
		if ((function () { var $ret = $self.b.tryGetValue(b + "_object", c); c = $ret.value; return $ret.ret; }())) {
			c.a.replaceRange(d, 1);
		}
		this.k(d, b);
	}

, 
	g: function () {
			return this.d.count();
	}

, 
	item: function (b) {
			return this.d.__inner[b];
	}

, 
	getEnumerator: function () {
		return this.d.getEnumerator();
	}

, 
	item1: function (b) {
			return this.x(b);
	}

, 
	x: function (a) {
		var $self = this;
		var b;
		if (this.e == null && this.d.count() > 0) {
			this.e = new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.Number.prototype.$type, 0);
			var c = 0;
			var e = this.d.getEnumerator();
			while (e.moveNext()) {
				var d = e.current();
				if (!this.e.containsKey(d)) {
					this.e.add(d, c++);
				}
			}
		}
		if ((function () { var $ret = $self.e.tryGetValue(a, b); b = $ret.value; return $ret.ret; }())) {
			return b;

		} else {
			return -1;
		}
	}

, 
	y: function (a, b) {
		var $self = this;
		var c = null;
		if (a != null) {
			var d = null;
			if (!(function () { var $ret = $self.b.tryGetValue(a, d); d = $ret.value; return $ret.ret; }())) {
				d = new $.ig.ColumnReference(new $.ig.FastItemDateTimeColumn(this, a, b));
				this.b.add(a, d);
			}
			d.c(d.c() + 1);
			c = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Date.prototype.$type), d.a);
		}
		return c;
	}

, 
	z: function (a, b) {
		var $self = this;
		var c = null;
		var d = a + "_object";
		if (a != null) {
			var e = null;
			if (!(function () { var $ret = $self.b.tryGetValue(d, e); e = $ret.value; return $ret.ret; }())) {
				e = new $.ig.ColumnReference(new $.ig.FastItemObjectColumn(this, a, b));
				this.b.add(d, e);
			}
			e.c(e.c() + 1);
			c = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type), e.a);
		}
		return c;
	}

, 
	aa: function (a, b) {
		var $self = this;
		var c = null;
		if (a == null) {
			a = "";
		}
		var d = null;
		if (!(function () { var $ret = $self.b.tryGetValue(a, d); d = $ret.value; return $ret.ret; }())) {
			d = new $.ig.ColumnReference(new $.ig.FastItemIntColumn(this, a, b));
			this.b.add(a, d);
		}
		d.c(d.c() + 1);
		c = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Number.prototype.$type), d.a);
		return c;
	}

, 
	ab: function (a, b) {
		var $self = this;
		var c = null;
		if (a == null) {
			a = "";
		}
		var d = null;
		if (!(function () { var $ret = $self.b.tryGetValue(a, d); d = $ret.value; return $ret.ret; }())) {
			d = new $.ig.ColumnReference(new $.ig.FastItemColumn(this, a, b));
			this.b.add(a, d);
		}
		d.c(d.c() + 1);
		c = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize(Number), d.a);
		return c;
	}

, 
	ac: function (a) {
		var $self = this;
		var b = a != null ? a.propertyName() : null;
		var c = b;
		if ($.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type), a) !== null) {
			c += "_object";
		}
		if (b != null) {
			var d = null;
			if ((function () { var $ret = $self.b.tryGetValue(b, d); d = $ret.value; return $ret.ret; }())) {
				d.c(d.c() - 1);
				if (d.c() == 0) {
					this.b.remove(b);
				}
			}
		}
	}
, 
	b: null, 
	c: null, 
	d: null, 
	e: null
, 
	ad: function () {
		return this.d.asArrayList();
	}

, 
	ae: function (a) {
		switch (a.action()) {
			case $.ig.NotifyCollectionChangedAction.prototype.add:
				this.p(a.newStartingIndex(), a.newItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.remove:
				this.q(a.oldStartingIndex(), a.oldItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.replace:
				this.r(a.newStartingIndex(), a.oldItems(), a.newItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.reset:
				this.s();
				break;
		}
	}
,
	$type: new $.ig.Type('FastItemsSource', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.util.defType('ColumnReference', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.c(0);
		}, 
	a: null
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
	$type: new $.ig.Type('ColumnReference', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('FastItemsSourceEventArgs', 'EventArgs', {

		init: function (initNumber, a, b, c) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.EventArgs.prototype.init.call(this);
						this.action(a);
				this.position(b);
				this.count(c);
				this.propertyName(null);
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.EventArgs.prototype.init.call(this);
						this.action($.ig.FastItemsSourceEventAction.prototype.change);
				this.position(a);
				this.count(1);
				this.propertyName(b);
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
	_propertyName: null,
	propertyName: function (a) {
		if (arguments.length === 1) {
			this._propertyName = a;
			return a;
		} else {
			return this._propertyName;
		}
	}
,
	$type: new $.ig.Type('FastItemsSourceEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

$.ig.util.defType('FastReflectionHelper', 'Object', {

		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.b(a);
				this.d(b);
		}, 
	__propertyName: null
, 
	d: function (a) {
		this.__propertyName = a;
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
	g: function (a) {
		var from_ = a;
		return from_[this.__propertyName];
	}

, 
	c: function () {
			return false;
	}
,
	$type: new $.ig.Type('FastReflectionHelper', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IRenderer', 'Object', {

		$type: new $.ig.Type('IRenderer', null)
}, true);

$.ig.util.defType('RectChangedEventArgs', 'EventArgs', {

		init: function (a, b) {


			$.ig.EventArgs.prototype.init.call(this);
						this.oldRect(a);
				this.newRect(b);
		}
, 
	_oldRect: null,
	oldRect: function (a) {
		if (arguments.length === 1) {
			this._oldRect = a;
			return a;
		} else {
			return this._oldRect;
		}
	}

, 
	_newRect: null,
	newRect: function (a) {
		if (arguments.length === 1) {
			this._newRect = a;
			return a;
		} else {
			return this._newRect;
		}
	}
,
	$type: new $.ig.Type('RectChangedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);


$.ig.util.defType('CanvasRenderScheduler', 'Object', {

		init: function () {

			this.a = true;
			this.b = false;
			this.c = -1;

			$.ig.Object.prototype.init.call(this);
						this.g(new $.ig.List$1($.ig.ISchedulableRender.prototype.$type, 0));
				this.h(new $.ig.List$1($.ig.CanvasRenderScheduler.prototype.$type, 0));
		}, 
	a: null
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
	m: function (a) {
		this.a = true;
		this.g().add(a);
	}

, 
	n: function (a) {
		this.a = true;
		this.g().remove(a);
	}
, 
	b: null, 
	c: null
, 
	o: function () {
		if (!this.b) {
			this.b = true;
			this.c = window.setTimeout(this.r.on(this), 0);
		}
	}

, 
	p: function (a, b) {
		this.o();
	}

, 
	q: function () {
		if (this.c != -1) {
			window.clearTimeout(this.c);
			this.c = -1;
		}
		if (this.b) {
			this.r();
		}
	}

, 
	r: function () {
		this.c = -1;
		if (this.b) {
			this.b = false;
			if (this.h().count() > 0) {
				for (var a = 0; a < this.h().count(); a++) {
					this.h().__inner[a].q();
				}
			}
			if (this.a) {
				this.t();
			}
			this.s();
		}
	}

, 
	s: function () {
		var a = true;
		for (var b = 0; b < this.g().count(); b++) {
			var c = this.g().__inner[b];
			c.undirty(a);
			a = false;
		}
		for (var d = 0; d < this.g().count(); d++) {
			var e = this.g().__inner[d];
			e.postRender();
		}
	}

, 
	t: function () {
		var $self = this;
		this.g().t(function (a, b) {
			var c = a;
			var d = b;
			if (c.index() < d.index()) {
				return -1;
			}
			if (c.index() > d.index()) {
				return 1;
			}
			return 0;
		});
		this.a = false;
	}
,
	$type: new $.ig.Type('CanvasRenderScheduler', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('CanvasViewRenderer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}, 
	a: null
, 
	getUnderlyingContext: function () {
		return this.a;
	}

, 
	data: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			return a;
		} else {
			return this.a;
		}
	}

, 
	renderRectangle: function (a) {
		if (a.__visibility != $.ig.Visibility.prototype.visible) {
			return;
		}
		this.a.beginPath();
		this.a.globalAlpha = a.__opacity;
		this.a.rect(a.y(), a.x(), a.v(), a.w());
		if (a.__fill != null) {
			this.a.fillStyle = a.__fill.__fill;
			this.a.fill();
		}
		if (a.__stroke != null) {
			this.a.strokeStyle = a.__stroke.__fill;
			this.a.lineWidth = a.a7();
			this.a.stroke();
		}
		this.a.globalAlpha = 1;
	}

, 
	renderPath: function (a) {
		if (a.__visibility != $.ig.Visibility.prototype.visible) {
			return;
		}
		this.a.beginPath();
		if (a.__opacity < 1) {
			this.a.globalAlpha = a.__opacity;
		}
		this.renderGeometry(a.bp());
		if (a.__fill != null) {
			this.a.fillStyle = a.__fill.__fill;
			this.a.fill();
		}
		if (a.__stroke != null) {
			this.a.strokeStyle = a.__stroke.__fill;
			this.a.lineWidth = a.a7();
			this.a.stroke();
		}
		if (a.__opacity < 1) {
			this.a.globalAlpha = 1;
		}
	}

, 
	renderGeometry: function (a) {
		if (a == null) {
			return;
		}
		var b = a.a();
		switch (b) {
			case $.ig.GeometryType.prototype.group:
				for (var c = 0; c < (a).d().count(); c++) {
					this.renderGeometry((a).d().__inner[c]);
				}
				break;
			case $.ig.GeometryType.prototype.path:
				this.d(a);
				break;
			case $.ig.GeometryType.prototype.line:
				this.k(a);
				break;
			case $.ig.GeometryType.prototype.rectangle:
				this.j(a);
				break;
			case $.ig.GeometryType.prototype.ellipse:
				this.c(a);
				break;
		}
	}

, 
	c: function (a) {
		var $self = this;
		this.b = {__x: a.f().__x, __y: a.f().__y - a.h(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var b = (function () { var $ret = new $.ig.ArcSegment();
$ret.h({__x: a.f().__x, __y: a.f().__y + a.h(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
$ret.i(false);
$ret.k(new $.ig.Size(a.g(), a.h())); return $ret;}());
		var c = (function () { var $ret = new $.ig.ArcSegment();
$ret.h({__x: a.f().__x, __y: a.f().__y - a.h(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
$ret.i(false);
$ret.k(new $.ig.Size(a.g(), a.h())); return $ret;}());
		this.g(b);
		this.g(c);
	}

, 
	d: function (a) {
		var b = a.d();
		var c = b.count();
		for (var d = 0; d < c; d++) {
			this.e(b.__inner[d]);
		}
	}

, 
	e: function (a) {
		this.a.moveTo(a.__startPoint.__x, a.__startPoint.__y);
		this.b = a.__startPoint;
		var b = a.__segments;
		var c = b.count();
		for (var d = 0; d < c; d++) {
			this.f(b.__inner[d]);
		}
		if (a.__isClosed && (this.b.__x != a.__startPoint.__x || this.b.__y != a.__startPoint.__y)) {
			this.a.lineTo(a.__startPoint.__x, a.__startPoint.__y);
		}
	}

, 
	f: function (a) {
		var b = a.a();
		switch (b) {
			case $.ig.PathSegmentType.prototype.line:
				this.h(a);
				break;
			case $.ig.PathSegmentType.prototype.polyLine:
				this.i(a);
				break;
			case $.ig.PathSegmentType.prototype.arc:
				this.g(a);
				break;
		}
	}
, 
	b: null
, 
	g: function (a) {
		var b = this.b;
		var c = a.h();
		if (a.k().c() != a.k().d()) {
			this.a.save();
			this.a.scale(a.k().c() / a.k().d(), 1);
			b = {__x: b.__x * (a.k().d() / a.k().c()), __y: b.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			c = {__x: c.__x * (a.k().d() / a.k().c()), __y: c.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
		var d = {__x: (b.__x + c.__x) / 2, __y: (b.__y + c.__y) / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var e = c.__x - b.__x;
		var f = c.__y - b.__y;
		var g = Math.sqrt(e * e + f * f);
		var h = f;
		var i = e * -1;
		var j = a.j() == $.ig.SweepDirection.prototype.counterclockwise;
		if (a.i() == j) {
			h = f * -1;
			i = e;
		}
		var k = Math.max(Math.abs(h), Math.abs(i));
		h = h / k;
		i = i / k;
		var l = Math.sqrt(h * h + i * i);
		var m = h / l;
		var n = i / l;
		var o = g / 2;
		var p = Math.sqrt(a.k().d() * a.k().d() - o * o);
		if (isNaN(p)) {
			p = 0;
		}
		var q = p * m;
		var r = p * n;
		var s = {__x: d.__x + q, __y: d.__y + r, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var t = Math.atan2(b.__y - s.__y, b.__x - s.__x);
		var u = Math.atan2(c.__y - s.__y, c.__x - s.__x);
		var v = (Math.abs(u - t) < Math.PI);
		if (a.i() == v) {
			if (t < u) {
				t += 2 * Math.PI;

			} else {
				u += 2 * Math.PI;
			}
		}
		if (!isNaN(s.__x) && !isNaN(s.__y) && !isNaN(a.k().d()) && !isNaN(t) && !isNaN(u)) {
			this.a.arc(s.__x, s.__y, a.k().d(), t, u, j);
		}
		this.b = a.h();
		if (a.k().c() != a.k().d()) {
			this.a.restore();
		}
	}

, 
	h: function (a) {
		this.a.lineTo(a.d().__x, a.d().__y);
		this.b = a.d();
	}

, 
	i: function (a) {
		var b = a.__points;
		var c = b.count();
		for (var d = 0; d < c; d++) {
			this.a.lineTo(b.__inner[d].__x, b.__inner[d].__y);
		}
		this.b = a.__points.__inner[c - 1];
	}

, 
	j: function (a) {
		this.a.rect(a.f().left(), a.f().top(), a.f().width(), a.f().height());
	}

, 
	k: function (a) {
		this.a.moveTo(a.e().__x, a.e().__y);
		this.a.lineTo(a.f().__x, a.f().__y);
	}

, 
	renderTextBlock: function (a) {
		if (a.__visibility == $.ig.Visibility.prototype.visible) {
			this.a.fillStyle = a.a6().__fill;
			this.a.textBaseline = "top";
			this.a.fillText(a.a5(), a.y(), a.x());
		}
	}

, 
	renderPolygon: function (a) {
		if (a.bn() == null || a.bn().count() < 1) {
			return;
		}
		this.a.beginPath();
		this.a.globalAlpha = a.__opacity;
		this.a.moveTo(a.bn().__inner[0].__x, a.bn().__inner[0].__y);
		for (var b = 1; b < a.bn().count(); b++) {
			this.a.lineTo(a.bn().__inner[b].__x, a.bn().__inner[b].__y);
		}
		this.a.lineTo(a.bn().__inner[0].__x, a.bn().__inner[0].__y);
		if (a.__fill != null) {
			this.a.fillStyle = a.__fill.__fill;
			this.a.fill();
		}
		if (a.__stroke != null) {
			this.a.strokeStyle = a.__stroke.__fill;
			this.a.lineWidth = a.a7();
			this.a.stroke();
		}
		this.a.globalAlpha = 1;
	}

, 
	renderPolyline: function (a) {
		if (a.bn() == null || a.bn().count() < 1) {
			return;
		}
		this.a.beginPath();
		this.a.globalAlpha = a.__opacity;
		this.a.moveTo(a.bn().__inner[0].__x, a.bn().__inner[0].__y);
		for (var b = 1; b < a.bn().count(); b++) {
			this.a.lineTo(a.bn().__inner[b].__x, a.bn().__inner[b].__y);
		}
		if (a.__fill != null) {
			this.a.fillStyle = a.__fill.__fill;
			this.a.fill();
		}
		if (a.__stroke != null) {
			this.a.strokeStyle = a.__stroke.__fill;
			this.a.lineWidth = a.a7();
			this.a.stroke();
		}
		this.a.globalAlpha = 1;
	}

, 
	renderContentControl: function (a, b) {
		if (b.__visibility == $.ig.Visibility.prototype.collapsed) {
			return;
		}
		if (b.__opacity != 1 && !a.isHitTestRender) {
			this.a.globalAlpha = b.__opacity;
		}
		var c = b.ba();
		if (c != null && c.render() != null) {
			a.context = this.a;
			a.xPosition = b.y();
			a.yPosition = b.x();
			a.data = b.a9();
			c.render()(a);
		}
		this.a.globalAlpha = 1;
	}

, 
	applyTransform: function (a) {
		if ($.ig.util.cast($.ig.TransformGroup.prototype.$type, a) !== null) {
			var b = a;
			for (var c = b.f().count() - 1; c >= 0; c--) {
				var d = b.f().__inner[c];
				this.applyTransform(d);
			}
		} else if ($.ig.util.cast($.ig.TranslateTransform.prototype.$type, a) !== null) {
			var e = a;
			this.a.translate(e.g(), e.h());
		} else if ($.ig.util.cast($.ig.RotateTransform.prototype.$type, a) !== null) {
			var f = a;
			var g = f.h() * Math.PI / 180;
			var h = Math.cos(g);
			var i = Math.sin(g);
			var j = f.i() * (1 - h) + f.j() * i;
			var k = f.j() * (1 - h) - f.i() * i;
			this.a.transform(h, i, i * -1, h, j, k);
		}
	}

, 
	renderLine: function (a) {
		if (a.__visibility != $.ig.Visibility.prototype.visible) {
			return;
		}
		this.a.beginPath();
		this.a.globalAlpha = a.__opacity;
		this.a.moveTo(a.bq(), a.bs());
		this.a.lineTo(a.br(), a.bt());
		if (a.__fill != null) {
			this.a.fillStyle = a.__fill.__fill;
			this.a.fill();
		}
		if (a.__stroke != null) {
			this.a.strokeStyle = a.__stroke.__fill;
			this.a.lineWidth = a.a7();
			this.a.stroke();
		}
		this.a.globalAlpha = 1;
	}

, 
	setRectangleClip: function (a) {
		this.a.beginPath();
		this.a.rect(a.left(), a.top(), a.width(), a.height());
		this.a.clip();
	}

, 
	save: function () {
		this.a.save();
	}

, 
	restore: function () {
		this.a.restore();
	}

, 
	scale: function (a, b) {
		this.a.scale(a, b);
	}

, 
	translate: function (a, b) {
		this.a.translate(a, b);
	}

, 
	clearRectangle: function (a, b, c, d) {
		this.a.clearRect(a, b, c, d);
	}

, 
	drawImage: function (a, b, c, d, e) {
		this.a.drawImage(a, b, c, d, e);
	}

, 
	drawImage1: function (a, b, c, d, e, f, g, h, i) {
		this.a.drawImage(a, b, c, d, e, f, g, h, i);
	}

, 
	getPixelAt: function (a, b) {
		var c = this.a.getImageData(a, b, 1, 1);
		var d = new Array(4);
		d[0] = c.data[0];
		d[1] = c.data[1];
		d[2] = c.data[2];
		d[3] = c.data[3];
		return d;
	}

, 
	setFont: function (a) {
		if (this.a.font != a) {
			this.a.font = a;
		}
	}

, 
	measureTextWidth: function (a) {
		var b = this.a.measureText(a);
		return b.width;
	}

, 
	setOpacity: function (a) {
		this.a.globalAlpha = a;
	}

, 
	applyStyle: function (shape_, style_) {
		var $self = this;
		if (style_ == null) {
			return;
		}
		var fillColor_ = null;
		var strokeColor_ = null;
		var strokeThickness_ = NaN;
		var opacity_ = NaN;
		if (style_.fill) { fillColor_ = style_.fill };
		if (style_.stroke) { strokeColor_ = style_.stroke };
		if (style_.strokeThickness) { strokeThickness_ = style_.strokeThickness };
		if (style_.opacity) { opacity_ = style_.opacity };
		if (fillColor_ != null) {
			shape_.__fill = (function () { var $ret = new $.ig.Brush();
			$ret.__fill = fillColor_; return $ret;}());
		}
		if (strokeColor_ != null) {
			shape_.__stroke = (function () { var $ret = new $.ig.Brush();
			$ret.__fill = strokeColor_; return $ret;}());
		}
		if (!isNaN(strokeThickness_)) {
			shape_.a7(strokeThickness_);
		}
		if (!isNaN(opacity_)) {
			shape_.__opacity = opacity_;
		}
	}
,
	$type: new $.ig.Type('CanvasViewRenderer', $.ig.Object.prototype.$type, [$.ig.IRenderer.prototype.$type])
}, true);

$.ig.util.defType('RenderingContext', 'Object', {
	a: null
, 
	c: function () {
		return this.a.getUnderlyingContext();
	}

, 
		init: function (a, b) {

			this.a = null;

			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.a.data(b);
		}
, 
	b: function () {
			return true;
	}

, 
	e: function (a, b) {
	}

, 
	f: function (a) {
		this.a.renderRectangle(a);
	}

, 
	g: function (a) {
		this.a.renderPath(a);
	}

, 
	h: function (a) {
		this.a.renderGeometry(a);
	}

, 
	i: function (a) {
		this.a.renderTextBlock(a);
	}

, 
	j: function (a) {
		this.a.renderPolygon(a);
	}

, 
	k: function (a) {
		this.a.renderPolyline(a);
	}

, 
	l: function (a, b) {
		this.a.renderContentControl(a, b);
	}

, 
	m: function (a) {
		this.a.applyTransform(a);
	}

, 
	n: function (a) {
		this.a.renderLine(a);
	}

, 
	o: function () {
		this.a.save();
	}

, 
	p: function () {
		this.a.restore();
	}

, 
	q: function (a) {
		this.a.setRectangleClip(a);
	}

, 
	r: function (a, b) {
		this.a.scale(a, b);
	}

, 
	s: function (a, b) {
		this.a.translate(a, b);
	}

, 
	t: function (a, b, c, d) {
		this.a.clearRectangle(a, b, c, d);
	}

, 
	u: function (a, b, c, d, e, f, g, h, i) {
		this.a.drawImage1(a, b, c, d, e, f, g, h, i);
	}

, 
	v: function (a, b, c, d, e) {
		this.a.drawImage(a, b, c, d, e);
	}

, 
	w: function (a, b) {
		return this.a.getPixelAt(a, b);
	}

, 
	x: function (a) {
		this.a.setFont(a);
	}

, 
	y: function (a) {
		return this.a.measureTextWidth(a);
	}

, 
	z: function (a) {
		this.a.setOpacity(a);
	}

, 
	aa: function (a, b) {
		this.a.applyStyle(a, b);
	}
,
	$type: new $.ig.Type('RenderingContext', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('IOverviewPlusDetailControl', 'Object', {

		$type: new $.ig.Type('IOverviewPlusDetailControl', null)
}, true);

$.ig.util.defType('ISchedulableRender', 'Object', {

		$type: new $.ig.Type('ISchedulableRender', null)
}, true);


$.ig.util.defType('PropertyChangedEventArgs$1', 'PropertyChangedEventArgs', {
	$t: null
, 
		init: function ($t, a, b, c) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.PropertyChangedEventArgs.prototype.init.call(this, a);
						this.oldValue(b);
				this.newValue(c);
		}
, 
	_oldValue: null,
	oldValue: function (a) {
		if (arguments.length === 1) {
			this._oldValue = a;
			return a;
		} else {
			return this._oldValue;
		}
	}

, 
	_newValue: null,
	newValue: function (a) {
		if (arguments.length === 1) {
			this._newValue = a;
			return a;
		} else {
			return this._newValue;
		}
	}
,
	$type: new $.ig.Type('PropertyChangedEventArgs$1', $.ig.PropertyChangedEventArgs.prototype.$type)
}, true);

$.ig.util.defType('XamOverviewPlusDetailPane', 'Control', {

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
		init: function () {

			this.ci = false;
			this.cl = false;

			$.ig.Control.prototype.init.call(this);
						this.c3(new $.ig.XamOverviewPlusDetailPaneView(this));
				this.c3().a8();
				this.a3($.ig.XamOverviewPlusDetailPane.prototype.$type);
				this.dn({__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}, 
	windowChanging: null
, 
	dv: function (a) {
		if (a == null) {
			throw new $.ig.ArgumentNullException("e");
		}
		if (this.c4()) {
			this.c7(a.newValue());
		}
		if (this.windowChanging != null) {
			this.windowChanging(this, a);
		}
	}
, 
	windowChanged: null
, 
	dy: function (a) {
		if (this.windowChanged != null) {
			this.windowChanged(this, a);
		}
	}
, 
	thumbnailSizeChanged: null
, 
	d1: function (a) {
		if (this.thumbnailSizeChanged != null) {
			this.thumbnailSizeChanged(this, a);
		}
	}

, 
	c4: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.b2, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.b2);
		}
	}

, 
	c5: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.b3, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.b3);
		}
	}

, 
	c6: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.b4, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.b4);
		}
	}

, 
	c7: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.b5, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.b5);
		}
	}

, 
	c8: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.b6, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.b6);
		}
	}

, 
	c9: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.b7, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.b7);
		}
	}

, 
	da: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.b8, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.b8);
		}
	}

, 
	db: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.b9, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.b9);
		}
	}

, 
	ei: function (a, b) {
		(a).ej(b.f(), b.e());
	}

, 
	ej: function (a, b) {
		if (b) {
			this.eo($.ig.OverviewPlusDetailPaneMode.prototype.minimal);

		} else {
			this.eo($.ig.OverviewPlusDetailPaneMode.prototype.compact);
		}
	}

, 
	dc: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.ca, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.ca);
		}
	}

, 
	em: function (a, b) {
		(a).en(b.f(), b.e());
	}

, 
	en: function (a, b) {
		this.eo(b);
	}

, 
	eo: function (a) {
		switch (a) {
			case $.ig.OverviewPlusDetailPaneMode.prototype.full:
				this.c3().bo();
				if (this.dj()) {
					this.c3().br();

				} else {
					this.c3().bs();
				}
				break;
			case $.ig.OverviewPlusDetailPaneMode.prototype.compact:
				this.c3().bq();
				if (this.dj()) {
					this.c3().br();

				} else {
					this.c3().bs();
				}
				break;
			case $.ig.OverviewPlusDetailPaneMode.prototype.minimal:
				this.c3().bq();
				this.c3().bs();
				break;
		}
	}

, 
	ep: function () {
		if (this.db()) {
			this.eo($.ig.OverviewPlusDetailPaneMode.prototype.minimal);

		} else {
			this.eo($.ig.OverviewPlusDetailPaneMode.prototype.compact);
		}
	}
, 
	cb: null
, 
	dd: function (a) {
		if (arguments.length === 1) {
			if (this.cb != null) {
				var b = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.cb);
				if (b != null) {
				b.propertyChanged = $.ig.Delegate.prototype.remove(b.propertyChanged, this.es.on(this));
				}
			}
			this.cb = a;
			if (this.cb != null) {
				var c = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.cb);
				if (c != null) {
				c.propertyChanged = $.ig.Delegate.prototype.combine(c.propertyChanged, this.es.on(this));
				}
			}
			this.c3().cd();
			return a;
		} else {
			return this.cb;
		}
	}

, 
	es: function (a, b) {
		switch (b.propertyName()) {
			case "DefaultInteraction":
				this.c3().cs(this.cb.defaultInteraction());
				break;
		}
	}

, 
	de: function () {
			var b = this.ft(this.c5());
			return new $.ig.Rect(0, 0, 0, b.width(), b.height());
	}

, 
	df: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.cc, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.cc);
		}
	}

, 
	dg: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.cd, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.cd);
		}
	}

, 
	dh: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.ce, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.ce);
		}
	}

, 
	di: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamOverviewPlusDetailPane.prototype.cf, a);
			return a;
		} else {
			return this.b($.ig.XamOverviewPlusDetailPane.prototype.cf);
		}
	}
, 
	cg: null
, 
	dj: function (a) {
		if (arguments.length === 1) {
			this.cg = a;
			this.ep();
			return a;
		} else {
			return this.cg;
		}
	}

, 
	dk: function () {
			return this.c3().aq();
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
	e7: function (a) {
		var b = a.c();
		var c = a.d();
		var d = !this.c5().isEmpty() ? this.c5().width() / this.c5().height() : 1;
		if (Number.isInfinity(c)) {
			if (Number.isInfinity(b)) {
				b = 128;
			}
			c = b / d;

		} else {
			if (Number.isInfinity(b)) {
				b = c * d;
			}
		}
		return new $.ig.Size(b, c);
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
	fc: function () {
		if (this.db()) {
			this.eo($.ig.OverviewPlusDetailPaneMode.prototype.full);
		}
	}

, 
	fd: function () {
		if (this.db()) {
			this.eo($.ig.OverviewPlusDetailPaneMode.prototype.minimal);
		}
	}

, 
	fe: function (a) {
		switch (a) {
			case $.ig.Key.prototype.escape:
				if (this.dm()) {
					this.c3().cf();
					this.dm(false);
					this.c9($.ig.Rect.prototype.empty());
					return true;
				}
				break;
		}
		return false;
	}

, 
	ff: function (a) {
		if (!this.cm) {
			this.ci = false;
		}
		this.ch = a;
		var b = this.ft(this.c5());
		if (b.contains1(a) == false) {
			return;
		}
		var c = this.dk();
		var d = !c.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
		var e = !d.isEmpty() ? this.c7() : $.ig.Rect.prototype.empty();
		this.dn(this.fr(a));
		if (e.isEmpty() == false && this.c3().cg()) {
			this.dm(true);
			e = new $.ig.Rect(0, this.dn().__x - 0.5 * e.width(), this.dn().__y - 0.5 * e.height(), e.width(), e.height());
			if (!this.mobileMode()) {
				this.dv(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), e));
			}
		}
	}
, 
	ch: null
, 
	fg: function (a, b, c) {
		if (isNaN(this.dn().__x) || isNaN(this.dn().__y)) {
			this.dn(this.fr(a));
		}
		var d = $.ig.XamOverviewPlusDetailPane.prototype.by;
		if (c) {
			d = $.ig.XamOverviewPlusDetailPane.prototype.bx;
		}
		var e = false;
		var f = this.fs(this.dn());
		var g = new $.ig.Rect(2, f, a);
		if (g.width() > d && g.height() > d) {
			e = true;
		}
		if (!this.cm) {
			if (e) {
				this.ci = false;
			}
		}
		this.ch = a;
		var h = this.dk();
		var i = !h.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
		var j = !i.isEmpty() ? this.c7() : $.ig.Rect.prototype.empty();
		if (this.dm()) {
			var k = this.fr(a);
			j = new $.ig.Rect(0, k.__x - 0.5 * j.width(), k.__y - 0.5 * j.height(), j.width(), j.height());
			this.dv(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), j));
		}
	}

, 
	fh: function (a) {
		this.ch = a;
		var b = this.dk();
		var c = !b.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
		var d = !c.isEmpty() ? this.c7() : $.ig.Rect.prototype.empty();
		if (this.dm() && !this.ci) {
			this.c3().cf();
			this.dm(false);
			var e = this.fr(a);
			d = new $.ig.Rect(0, e.__x - 0.5 * d.width(), e.__y - 0.5 * d.height(), d.width(), d.height());
			if (!this.mobileMode()) {
				this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), d));
			}
			return true;
		}
		return false;
	}

, 
	fi: function (a) {
		var b = this.c7().getCenter();
		var c = 1 - $.ig.MathUtil.prototype.i(a, -0.5, 0.5);
		var d = b.__x - c * (b.__x - this.c7().left());
		var e = b.__y + c * (this.c7().bottom() - b.__y);
		var f = b.__x + c * (this.c7().right() - b.__x);
		var g = b.__y - c * (b.__y - this.c7().top());
		var h = new $.ig.Rect(0, d, g, f - d, e - g);
		this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), h));
		return true;
	}
, 
	ci: null, 
	cj: null
, 
	fj: function (a) {
		this.cm = true;
		this.ci = true;
		this.cj = 1;
	}

, 
	fk: function (a) {
		if (this.c3().a2()) {
			this.fn(a);

		} else {
			this.fm(a);
			this.cj = a;
		}
	}

, 
	fl: function (a) {
		this.cm = false;
		this.ci = false;
		if (this.c3().a2()) {
			this.fn(a);

		} else {
			this.fm(a);
		}
	}

, 
	fm: function (a) {
		var b = a - this.cj;
		if (b != 0) {
			var c = 0.03;
			var d = b < 0 ? 1 + c : 1 - c;
			var e = {__x: this.c7().x() + this.c7().width() / 2, __y: this.c7().y() + this.c7().height() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var f = {__x: this.c7().x() - e.__x, __y: this.c7().y() - e.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var g = new $.ig.Rect(0, f.__x * d + e.__x, f.__y * d + e.__y, this.c7().width() * d, this.c7().height() * d);
			this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), g));
		}
	}

, 
	fn: function (a) {
		var b = 1 / a;
		var c = {__x: this.c7().x() + this.c7().width() / 2, __y: this.c7().y() + this.c7().height() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var d = {__x: this.c7().x() - c.__x, __y: this.c7().y() - c.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var e = new $.ig.Rect(0, d.__x * b + c.__x, d.__y * b + c.__y, this.c7().width() * b, this.c7().height() * b);
		this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), e));
	}
, 
	propertyChanged: null
, 
	fo: function (a, b, c) {
		this.fp(new $.ig.PropertyChangedEventArgs(a));
	}

, 
	fp: function (a) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, a);
		}
		switch (a.propertyName()) {
			case $.ig.XamOverviewPlusDetailPane.prototype.bq:
				this.fu(false);
				break;
			case $.ig.XamOverviewPlusDetailPane.prototype.bs:
				this.fu(false);
				break;
			case $.ig.XamOverviewPlusDetailPane.prototype.bu:
				this.fu(false);
				break;
		}
	}

, 
	fq: function () {
		this.c3().b3();
	}

, 
	fr: function (a) {
		var b = this.dk();
		var c = !b.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
		if (!c.isEmpty()) {
			var d = b.width() / b.height() > c.width() / c.height() ? b.height() / c.height() : b.width() / c.width();
			var e = 0.5 * ((b.left() + b.right()) - (c.left() + c.right()) * d);
			var f = 0.5 * ((b.top() + b.bottom()) - (c.top() + c.bottom()) * d);
			return {__x: (a.__x - e) / d, __y: (a.__y - f) / d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
		return {__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	fs: function (a) {
		var b = this.dk();
		var c = !b.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
		if (!c.isEmpty()) {
			var d = b.width() / b.height() > c.width() / c.height() ? b.height() / c.height() : b.width() / c.width();
			var e = 0.5 * ((b.left() + b.right()) - (c.left() + c.right()) * d);
			var f = 0.5 * ((b.top() + b.bottom()) - (c.top() + c.bottom()) * d);
			return {__x: a.__x * d + e, __y: a.__y * d + f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
		return {__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	ft: function (a) {
		var b = this.dk();
		var c = !b.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
		if (!c.isEmpty() && !a.isEmpty()) {
			var d = b.width() / b.height() > c.width() / c.height() ? b.height() / c.height() : b.width() / c.width();
			var e = 0.5 * ((b.left() + b.right()) - (c.left() + c.right()) * d);
			var f = 0.5 * ((b.top() + b.bottom()) - (c.top() + c.bottom()) * d);
			return new $.ig.Rect(0, a.left() * d + e, a.top() * d + f, a.width() * d, a.height() * d);
		}
		return $.ig.Rect.prototype.empty();
	}

, 
	fu: function (a) {
		var $self = this;
		this.fx();
		if (!a) {
			if (!this.dl()) {
				this.dl(true);
				this.c3().dh(function () { return $self.fu(true)				});
			}
			return;
		}
		this.dl(false);
		var b = this.ft(this.c5());
		var c = this.ft(this.c7());
		var d = this.ft(this.c9());
		if (this.__visibility != $.ig.Visibility.prototype.visible || b.isEmpty() || isNaN(b.x()) || isNaN(b.y())) {
			this.dl(false);
			return;
		}
		this.c3().b8(b);
		this.c3().ch(b);
		this.c3().b9(b, c);
		this.c3().ca(b, d);
		if (this.dd() != null) {
			this.dd().renderPreview();
		}
		this.c3().cn();
	}

, 
	_dp: null,
	dp: function (a) {
		if (arguments.length === 1) {
			this._dp = a;
			return a;
		} else {
			return this._dp;
		}
	}

, 
	fx: function () {
		if (this.__visibility != $.ig.Visibility.prototype.visible || this.dd() == null || !this.c3().ce()) {
			return;
		}
		var a = this.dd().viewportRect();
		var b = this.dd().worldRect();
		if (a.isEmpty() || b.isEmpty()) {
			return;
		}
		this.dp(true);
		var c = this.c3().de();
		var d = this.dd().minimumZoomLevel();
		var e = this.dd().maximumZoomLevel();
		if (isNaN(d)) {
			d = Math.min(a.width() / b.width(), a.height() / b.height());
			d = Math.min(d, 0.5);
			d = Math.min(d, c);
		}
		if (isNaN(e)) {
			e = $.ig.XamOverviewPlusDetailPane.prototype.a7;
			e = Math.max(e, c);
		}
		this.c3().df(d);
		this.c3().dg(e);
		this.dp(false);
	}

, 
	fy: function (a) {
		if (this.dd() != null) {
			this.dd().defaultInteraction(a);
		}
	}

, 
	fz: function () {
		if (this.dd() != null) {
			this.dd().scaleToFit();
		}
	}

, 
	f0: function () {
		if (this.dd() != null) {
			this.dd().zoomTo100();
		}
	}

, 
	f1: function () {
		this.fu(false);
	}

, 
	f2: function (a) {
		this.c3().ct(a);
	}

, 
	f3: function (a) {
		this.c3().ck(a);
	}

, 
	f4: function (a) {
		this.c3().cx(a);
	}
, 
	cl: null
, 
	mobileMode: function (a) {
		if (arguments.length === 1) {
			var b = this.cl;
			this.cl = a;
			if (b != this.cl) {
				this.c3().c0(this.cl);
			}
			return a;
		} else {
			return this.cl;
		}
	}

, 
	f7: function (a) {
		this.c3().c3(a);
	}

, 
	f8: function (a) {
		this.c3().c6(a);
	}

, 
	f9: function () {
		if (this.ch == null) {
			return;
		}
		var a = this.fr(this.ch);
		var b = this.dk();
		var c = !b.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
		var d = !c.isEmpty() ? this.c7() : $.ig.Rect.prototype.empty();
		d = new $.ig.Rect(0, a.__x - 0.5 * d.width(), a.__y - 0.5 * d.height(), d.width(), d.height());
		this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), this.c7()));
	}
, 
	cm: null
, 
	dq: function () {
			return this.cm;
	}

, 
	gb: function (a) {
		this.cm = false;
		this.dn({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}
,
	$type: new $.ig.Type('XamOverviewPlusDetailPane', $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('XamOverviewPlusDetailPaneView', 'Object', {

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
		init: function (a) {

			this.b = null;
			this.c = false;
			this.__loadingEle = null;
			this.__backgroundImage = null;
			this.e = 0;
			this.f = 0;

			$.ig.Object.prototype.init.call(this);
						this.aq($.ig.Rect.prototype.empty());
				this.ad(a);
				this.a1(new $.ig.Size(0, 0));
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
	a8: function () {
		var $self = this;
		this.ah(new $.ig.DoubleAnimator(0, 1, 300));
		this.ah().propertyChanged = $.ig.Delegate.prototype.combine(this.ah().propertyChanged, this.a9.on(this));
		this.ak(true);
		this.ae(new $.ig.XamOverviewPlusDetailPaneViewManager(this));
		var model_ = this.ad();
		var isTouch_ = typeof Modernizr !== 'undefined' && Modernizr.touch || (this.ae().bk() && $.support.touch);
		model_.mobileMode(isTouch_);
		this.am((function () { var $ret = new $.ig.Path();
		$ret.a6(true);
		$ret.bp(new $.ig.RectangleGeometry()); return $ret;}()));
		(this.am().bp()).f($.ig.Rect.prototype.empty());
		this.ap((function () { var $ret = new $.ig.Path();
		$ret.a6(true);
		$ret.bp(new $.ig.RectangleGeometry()); return $ret;}()));
		this.an((function () { var $ret = new $.ig.Path();
		$ret.a6(false);
		$ret.bp(new $.ig.GeometryGroup()); return $ret;}()));
		($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.an().bp())).d().add(new $.ig.PathGeometry());
		($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.an().bp())).d().add(new $.ig.PathGeometry());
		this.ao((function () { var $ret = new $.ig.Path();
		$ret.a6(false);
		$ret.bp(new $.ig.GeometryGroup()); return $ret;}()));
		($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.ao().bp())).d().add(new $.ig.PathGeometry());
		($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.ao().bp())).d().add(new $.ig.PathGeometry());
		this.ai(0);
		this.aj(0);
		this.az(false);
	}

, 
	a9: function (a, b) {
		if (this.al()) {
			this.aj(this.ai() + this.ah().k() * (1 - this.ai()));

		} else {
			this.aj(this.ai() - this.ah().k() * this.ai());
		}
		if (this.aj() >= 1) {
			this.ag(true);
			this.c3(this.ay());
			this.ad().fu(false);
		} else if (this.ag()) {
			this.ag(false);
			this.ae().bg();
			this.c3(this.ay());
			this.ad().fu(false);
		}
		this.cn();
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
	bo: function () {
		if (this.al()) {
			return;
		}
		this.al(true);
		if (this.ak()) {
			this.ai(this.aj());
			this.ah().u();
			this.ah().t();

		} else {
			this.ai(1);
			this.aj(1);
			this.cn();
		}
	}

, 
	bp: function () {
	}

, 
	bq: function () {
		if (!this.al()) {
			return;
		}
		this.al(false);
		if (this.ak()) {
			this.ai(this.aj());
			this.ah().u();
			this.ah().t();

		} else {
			this.ai(1);
			this.aj(1);
			this.cn();
		}
	}

, 
	br: function () {
	}

, 
	bs: function () {
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
	a: null
, 
	aq: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			if (this.ax() != null) {
				this.ax().v(this.a);
			}
			return a;
		} else {
			return this.a;
		}
	}

, 
	b3: function () {
	}

, 
	_ar: null,
	ar: function (a) {
		if (arguments.length === 1) {
			this._ar = a;
			return a;
		} else {
			return this._ar;
		}
	}

, 
	_as: null,
	as: function (a) {
		if (arguments.length === 1) {
			this._as = a;
			return a;
		} else {
			return this._as;
		}
	}

, 
	b8: function (a) {
		this.ar(a);
		if (this.aw() != null) {
			var img_ = this.aw();
			var b = a.width() / this.e;
			var c = a.height() / this.f;
			var d = (b < c) ? b : c;
			var e = this.e * d;
			var f = this.f * d;
			var g = a.width() - e;
			var h = a.height() - f;
			this.as(new $.ig.Rect(0, this.ar().left() + (g / 2), this.ar().top() + (h / 2), e, f));
		}
		(this.am().bp()).f(a);
		this.am().__visibility = a.isEmpty() ? $.ig.Visibility.prototype.collapsed : $.ig.Visibility.prototype.visible;
	}

, 
	b9: function (a, b) {
		((this.an().bp()).d().__inner[0]).d(this.cc(a.inflate11(2)));
		((this.an().bp()).d().__inner[1]).d(this.cb(b));
		this.an().__visibility = b.isEmpty() ? $.ig.Visibility.prototype.collapsed : $.ig.Visibility.prototype.visible;
	}

, 
	ca: function (a, b) {
		((this.ao().bp()).d().__inner[0]).d(this.cc(a.inflate11(2)));
		((this.ao().bp()).d().__inner[1]).d(this.cb(b));
		this.ao().__visibility = b.isEmpty() ? $.ig.Visibility.prototype.collapsed : $.ig.Visibility.prototype.visible;
	}

, 
	cb: function (a) {
		var b = new $.ig.PathFigureCollection();
		var c = new $.ig.PathFigure();
		c.__isClosed = true;
		c.__startPoint = {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.left(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.right(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.right(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		b.add(c);
		return b;
	}

, 
	cc: function (a) {
		var b = new $.ig.PathFigureCollection();
		var c = new $.ig.PathFigure();
		c.__isClosed = true;
		c.__startPoint = {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.right(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.right(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.left(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		b.add(c);
		return b;
	}

, 
	cd: function () {
	}

, 
	ce: function () {
		return this.at() != null;
	}

, 
	cf: function () {
	}

, 
	cg: function () {
		return true;
	}

, 
	ch: function (a) {
		var b = false;
		if (Math.round(this.a1().c()) != Math.round(a.width())) {
			b = true;
			this.ae().a4(a.width());
		}
		if (Math.round(this.a1().d()) != Math.round(a.height())) {
			b = true;
			this.ae().a5(a.height());
		}
		var c = this.a1();
		this.a1(new $.ig.Size(a.width(), a.height()));
		if (b) {
			this.ad().d1(new $.ig.PropertyChangedEventArgs$1($.ig.Size.prototype.$type, "ThumbnailSize", c, this.a1()));
		}
	}

, 
	_at: null,
	at: function (a) {
		if (arguments.length === 1) {
			this._at = a;
			return a;
		} else {
			return this._at;
		}
	}

, 
	ck: function (a) {
		this.at(a);
	}
, 
	b: null
, 
	au: function (a) {
		if (arguments.length === 1) {
			if (this.b != null) {
				this.b.n(this);
			}
			this.b = a;
			if (this.b != null) {
				this.b.m(this);
				this.cn();
			}
			return a;
		} else {
			return this.b;
		}
	}

, 
	cn: function () {
		if (!this.c && this.au() != null) {
			this.c = true;
			this.au().o();
		}
	}
, 
	c: null
, 
	isDirty: function (a) {
		if (arguments.length === 1) {
			this.c = a;
			return a;
		} else {
			return this.c;
		}
	}
, 
	d: null, 
	__loadingEle: null
, 
	av: function (a) {
		if (arguments.length === 1) {
			this.d = a;
			if (this.d != null) {
				this.__loadingEle = $("<img></img>");
				var b = this.__loadingEle[0];
				var self_ = this;
				var ele_ = this.__loadingEle;
				ele_.bind('load readystatechange', function(e) { if (this.complete || (this.readyState == 'complete' && e.type == 'readystatechange')) { self_.downloadCompleted(e) }});
				b.src = this.d;

			} else {
				if (this.__loadingEle != null) {
					var ele_ = this.__loadingEle;
					ele_.unbind("load readystatechange");
					this.__loadingEle = null;
				}
				this.aw(null);
			}
			return a;
		} else {
			return this.d;
		}
	}

, 
	downloadCompleted: function (a) {
		if (!(this.__loadingEle[0]).complete) {
			return;
		}
		this.aw(this.__loadingEle[0]);
	}
, 
	__backgroundImage: null, 
	e: null, 
	f: null
, 
	aw: function (a) {
		if (arguments.length === 1) {
			this.__backgroundImage = a;
			if (this.__backgroundImage != null) {
				var img_ = this.__backgroundImage;
				this.e = img_.width;
				this.f = img_.height;

			} else {
				this.e = 0;
				this.f = 0;
			}
			if (this.ar() != null) {
				this.b8(this.ar());
			}
			this.cn();
			return a;
		} else {
			return this.__backgroundImage;
		}
	}

, 
	undirty: function (a) {
		this.isDirty(false);
		if (this.at() == null) {
			return;
		}
		if (this.ad().__visibility == $.ig.Visibility.prototype.collapsed) {
			return;
		}
		if (this.at().b()) {
			var b = 1;
			var c = 1;
			var d = 1;
			b = 0.6 + this.aj() * (1 - 0.6);
			c = 0.6 + this.aj() * (1 - 0.6);
			d = 0.7 + this.aj() * (1 - 0.7);
			this.ap().__opacity = d;
			this.ap().a7(1);
			this.ae().a6(this.ap());
			this.am().__opacity = d;
			this.am().a7(1);
			this.ae().a7(this.am());
			this.an().__opacity = d;
			this.an().a7(1.5);
			this.ae().a8(this.an());
			this.ao().__opacity = d;
			this.ao().a7(2);
			this.ae().a9(this.ao());
			var e = (this.am().bp()).f();
			if (e.isEmpty()) {
				return;
			}
			this.at().o();
			this.at().s(this.ay().right(), this.ay().bottom());
			this.at().r(b, c);
			this.at().s(-this.ay().right(), -this.ay().bottom());
			this.at().g(this.ap());
			this.ae().ba(this.at(), e);
			this.at().q(e);
			this.at().g(this.am());
			if (this.aw() != null) {
				var f = this.at().c();
				f.globalAlpha = d;
				f.drawImage(this.aw(), this.as().left(), this.as().top(), this.as().width(), this.as().height());
				f.globalAlpha = 1;
			}
			this.at().g(this.ao());
			this.at().g(this.an());
			this.at().p();
		}
	}

, 
	index: function () {
			return 10000;
	}

, 
	postRender: function () {
	}

, 
	cs: function (a) {
	}

, 
	ct: function (a) {
		this.a3(window.navigator.msPointerEnabled);
		if (this.a3()) {
			this.a2(true);
		}
		if (a == null) {
			if (this.ax() != null) {
				this.ax().bf();
			}
			this.ae().an(null);
			this.a0(null);
			this.ax(null);
			return;
		}
		this.ae().an(a);
		this.a0(this.ae().r());
	}

, 
	cu: function (a) {
		if (!this.az()) {
			var val_ = a;
			var obj_ = this.ad().dd();
			obj_.zoomLevel(val_);
		}
	}

, 
	_ax: null,
	ax: function (a) {
		if (arguments.length === 1) {
			this._ax = a;
			return a;
		} else {
			return this._ax;
		}
	}

, 
	cx: function (a) {
		var $self = this;
		if (a == null) {
			return;
		}
		this.ax(a.be());
		this.ax().x(this.cz.on(this));
		this.ax().onMouseWheel = $.ig.Delegate.prototype.combine(this.ax().onMouseWheel, function (b, c) { return $self.ad().fi(c)		});
		this.ax().onPinchDelta = $.ig.Delegate.prototype.combine(this.ax().onPinchDelta, function (d, e) { return $self.ad().fk(e)		});
		this.ax().onPinchStarted = $.ig.Delegate.prototype.combine(this.ax().onPinchStarted, function (f, g) { return $self.ad().fj(f)		});
		this.ax().onGestureCompleted = $.ig.Delegate.prototype.combine(this.ax().onGestureCompleted, function (h, i) { return $self.ad().gb(h)		});
		this.ax().onMouseUp = $.ig.Delegate.prototype.combine(this.ax().onMouseUp, function (j) { return $self.ad().fh(j)		});
		this.ax().onMouseDown = $.ig.Delegate.prototype.combine(this.ax().onMouseDown, this.ad().ff.on(this.ad()));
		this.ax().onMouseEnter = $.ig.Delegate.prototype.combine(this.ax().onMouseEnter, function (k) { return $self.ad().fc()		});
		this.ax().onMouseOver = $.ig.Delegate.prototype.combine(this.ax().onMouseOver, function (l, m, n) { return $self.ad().fg(l, m, n)		});
		this.ax().onKeyDown = $.ig.Delegate.prototype.combine(this.ax().onKeyDown, this.ad().fe.on(this.ad()));
		this.ax().onMouseLeave = $.ig.Delegate.prototype.combine(this.ax().onMouseLeave, this.cy.on(this));
		this.ax().v(this.aq());
		this.ae().w(this.ax());
	}

, 
	cy: function (a) {
		if (!this.cz({__x: this.aq().left() + a.__x, __y: this.aq().top() + a.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})) {
			this.ad().fd();
		}
	}

, 
	cz: function (a) {
		if (a == null) {
			return false;
		}
		if (this.ad().__visibility != $.ig.Visibility.prototype.visible) {
			return false;
		}
		var b = a.__x;
		var c = a.__y;
		if (b >= this.ay().left() && c >= this.ay().top() && b < this.ay().left() + this.ay().width() && c < this.ay().top() + this.ay().height()) {
			return true;
		}
		return false;
	}

, 
	c0: function (a) {
		if (a) {
			this.ak(false);
			if (this.ae() != null && this.ad().__visibility == $.ig.Visibility.prototype.visible) {
				this.ae().bc();
			}

		} else {
			this.ak(true);
			if (this.ae() != null) {
				this.ae().bd();
				this.bq();
				this.aj(0);
				this.ai(0);
				this.ae().bg();
			}
		}
	}

, 
	_ay: null,
	ay: function (a) {
		if (arguments.length === 1) {
			this._ay = a;
			return a;
		} else {
			return this._ay;
		}
	}

, 
	c3: function (a) {
		this.ay(a);
		(this.ap().bp()).f(this.ay());
		var b = a.height() - 4;
		var c = a.width() - 4;
		if (this.aj() >= 1 && !this.ad().mobileMode()) {
			b -= 20;
			this.ae().bb(this.ay(), c, b);
		}
		if (this.ae().u() != null) {
			if (this.af()) {
			this.ae().u().show();

			} else {
			this.ae().bf(true);
			}
		}
		this.aq(new $.ig.Rect(0, this.ay().left() + 2, this.ay().top() + 2, c, b));
		this.cn();
	}

, 
	_az: null,
	az: function (a) {
		if (arguments.length === 1) {
			this._az = a;
			return a;
		} else {
			return this._az;
		}
	}

, 
	c6: function (a) {
		this.az(true);
		this.ae().at(a);
		this.az(false);
	}

, 
	c7: function () {
		this.ad().f0();
	}

, 
	_a0: null,
	a0: function (a) {
		if (arguments.length === 1) {
			this._a0 = a;
			return a;
		} else {
			return this._a0;
		}
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
	dc: function (a) {
	}

, 
	dd: function (a, b) {
		if (!this.cz({__x: a, __y: b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})) {
			this.ad().fd();
		}
	}

, 
	de: function () {
		return this.ae().aw();
	}

, 
	df: function (a) {
		this.ae().ax(a);
	}

, 
	dg: function (a) {
		this.ae().ay(a);
	}

, 
	dh: function (a) {
		this.ae().bj(a);
	}

, 
	di: function () {
		this.ad().f9();
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
	$type: new $.ig.Type('XamOverviewPlusDetailPaneView', $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type])
}, true);

$.ig.util.defType('XamOverviewPlusDetailPaneViewManager', 'Object', {

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
	_sliderEnabled: null,
	sliderEnabled: function (a) {
		if (arguments.length === 1) {
			this._sliderEnabled = a;
			return a;
		} else {
			return this._sliderEnabled;
		}
	}

, 
	_isJqueryMobile: null,
	isJqueryMobile: function (a) {
		if (arguments.length === 1) {
			this._isJqueryMobile = a;
			return a;
		} else {
			return this._isJqueryMobile;
		}
	}
, 
	a: null, 
	b: null, 
	c: null, 
	d: null, 
	e: null, 
	f: null
, 
		init: function (a) {

			this.a = "Overview";
			this.b = "Close";
			this.c = "Zoom In";
			this.d = "Zoom Out";
			this.e = "Reset Zoom";
			this.g = false;

			$.ig.Object.prototype.init.call(this);
						this.f = a;
				this.isJqueryMobile(typeof $.mobile !== 'undefined' && $.mobile !== null);
				var overview_ = null;
				if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.overview) { overview_ = $.ig.Chart.locale.overview };
				var close_ = null;
				if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.close) { close_ = $.ig.Chart.locale.close };
				var zoomIn_ = null;
				if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.zoomIn) { zoomIn_ = $.ig.Chart.locale.zoomIn };
				var zoomOut_ = null;
				if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.zoomOut) { zoomOut_ = $.ig.Chart.locale.zoomOut };
				var resetZoom_ = null;
				if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.resetZoom) { resetZoom_ = $.ig.Chart.locale.resetZoom };
				if (overview_ != null) {
					this.a = overview_;
				}
				if (close_ != null) {
					this.b = close_;
				}
				if (zoomIn_ != null) {
					this.c = zoomIn_;
				}
				if (zoomOut_ != null) {
					this.d = zoomOut_;
				}
				if (resetZoom_ != null) {
					this.e = resetZoom_;
				}
				this.q($("<canvas></canvas>"));
				this.r(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.q()[0]).getContext("2d")));
		}
, 
	an: function (a) {
		if (a == null) {
			this.s(null);
			this.t(null);
			this.v(null);
			return;
		}
		this.s($(a));
		var b = $('<div class=\"ui-chart-toolbar\"></div>');
		b.hide();
		this.t(b);
		this.s().append(b);
		this.ao();
		if (!this.f.ad().mobileMode()) {
			this.bf(true);
		}
		var c = $('<ul class=\"ui-widget\" style=\"margin: 0; padding: 0\"></ul>');
		b.append(c);
		var d = $('<div class=\"ui-chart-slider\"></div>');
		var slider_ = this.isJqueryMobile() ? $('<input type=\'range\' style=\'display:none;\' max=\'100\' min=\'0\' />') : $('<div></div>');
		d.append(slider_);
		this.v(slider_);
		if (slider_.slider) { slider_.slider({mini: true}); this.sliderEnabled(true); };
		if (this.sliderEnabled()) {
			slider_.bind(this.isJqueryMobile() ? "change" : "slide", this.a3.on(this));
		}
		var zoomout_ = $('<button></button>');
		var zoomin_ = $('<button></button>');
		var zoom100_ = $('<button></button>');
		var zoomOutText_ = this.d;
		var zoomInText_ = this.c;
		var resetZoomText_ = this.e;
		if (this.isJqueryMobile()) {
			zoomout_ = $('<div title=' + zoomOutText_ + "></div>");
			zoomout_.buttonMarkup({ iconpos: "notext", icon: "zoomout", mini: true, inline: true, corners: false });
			zoomin_ = $('<div title=' + zoomInText_ + "></div>");
			zoomin_.buttonMarkup({ iconpos: "notext", icon: "zoomin", mini: true, inline: true, corners: false });
			zoom100_ = $('<div title=' + resetZoomText_ + "></div>");
			zoom100_.buttonMarkup({ iconpos: "notext", icon: "reset", mini: true, inline: true, corners: false });

		} else {
			zoomout_.button({ icons: { primary: "ui-icon-zoomout"}, label: zoomOutText_, text: false });
			zoomin_.button({ icons: { primary: "ui-icon-zoomin"}, label: zoomInText_, text: false });
			zoom100_.button({ icons: { primary: "ui-icon-arrow-4-diag"}, label: resetZoomText_, text: false });
		}
		zoomout_.click(this.ar.on(this));
		zoomin_.click(this.as.on(this));
		zoom100_.click(this.au.on(this));
		this.aq(c, zoomout_, true);
		this.aq(c, d, false);
		this.aq(c, zoomin_, true);
		this.aq(c, zoom100_, true);
		b.mouseleave(this.ap.on(this));
	}

, 
	ao: function () {
		var closeIcon_ = $('<button toggle=\"closed\" class=\"ui-chart-opd-button\"></button>');
		var overview_ = this.a;
		if (this.isJqueryMobile()) {
			closeIcon_ = $('<div toggle=\"closed\" class=\"ui-chart-opd-button\"></div>');
			closeIcon_.html(overview_).buttonMarkup({ icon: "arrow-d", iconpos: "left"  });

		} else {
		closeIcon_.button({ icons: { secondary: "ui-icon-carat-1-s"}, label: overview_ });
		}
		if (!this.f.af()) {
			closeIcon_.hide();
		}
		closeIcon_.click(this.av.on(this));
		this.u(closeIcon_);
		this.s().append(closeIcon_);
	}

, 
	ap: function (a) {
		$.ig.DOMEventProxy.prototype.c3(a);
		var b = this.w().by();
		var c = a.pageX - b.__x;
		var d = a.pageY - b.__y;
		this.f.dd(c, d);
	}

, 
	aq: function (a, b, c) {
		var d = "";
		if (c) {
			d = 'class=\"ui-corner-all\" ';
		}
		var e = $("<li></li>");
		if (c) {
			e.mousedown($.ig.XamOverviewPlusDetailPaneViewManager.prototype.az).mouseup($.ig.XamOverviewPlusDetailPaneViewManager.prototype.a0).hover($.ig.XamOverviewPlusDetailPaneViewManager.prototype.a1, $.ig.XamOverviewPlusDetailPaneViewManager.prototype.a2);

		} else {
			e.addClass("ui-chart-slider-holder");
		}
		e.append(b);
		a.append(e);
	}

, 
	ar: function (a) {
		this.at(this.aw() - 0.05);
		this.f.cu(this.aw());
		a.preventDefault();
	}

, 
	as: function (a) {
		this.at(this.aw() + 0.05);
		this.f.cu(this.aw());
		a.preventDefault();
	}

, 
	at: function (zoomLevel_) {
		if (this.sliderEnabled()) {
			var slider_ = this.v();
			if (this.isJqueryMobile()) {
			slider_.slider("refresh", Math.round(zoomLevel_ * 100.0), true, false);

			} else {
			slider_.slider("option", "value", Math.round(zoomLevel_ * 100.0));
			}
		}
	}

, 
	au: function (a) {
		this.f.c7();
		a.preventDefault();
	}

, 
	av: function (a) {
		if (this.u().attr("toggle") == "closed" || (this.isJqueryMobile() && this.u().attr("data-toggle") == "closed")) {
			this.be();

		} else {
			this.bf(false);
		}
		this.f.ad().fu(true);
		a.preventDefault();
	}

, 
	aw: function () {
		if (this.sliderEnabled()) {
			var slider_ = this.v();
			if (this.isJqueryMobile()) {
				return parseInt(slider_.val() || 0) / 100;

			} else {
			return slider_.slider("option", "value") / 100;
			}

		} else {
			return 0;
		}
	}

, 
	ax: function (a) {
		var min_ = Math.round(a * 100);
		if (this.sliderEnabled()) {
			var slider_ = this.v();
			if (this.isJqueryMobile()) {
			slider_.attr("min", min_);

			} else {
			slider_.slider("option", "min", min_);
			}
		}
	}

, 
	ay: function (a) {
		var max_ = Math.round(a * 100);
		if (this.sliderEnabled()) {
			var slider_ = this.v();
			if (this.isJqueryMobile()) {
			slider_.attr("max", max_);

			} else {
			slider_.slider("option", "max", max_);
			}
		}
	}

, 
	az: function (a) {
	}

, 
	a0: function (a) {
	}

, 
	a1: function (a) {
	}

, 
	a2: function (a) {
	}

, 
	a3: function (e_, ui_) {
		var a = (ui_ ? ui_.value : e_.target.value) / 100;
		this.f.cu(a);
	}

, 
	a4: function (a) {
		this.q().attr("width", a.toString());
	}

, 
	a5: function (a) {
		this.q().attr("height", a.toString());
	}

, 
	a6: function (a) {
		var $self = this;
		a.__stroke = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "#AEB8C2"; return $ret;}());
		a.__fill = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "#C6CFD9"; return $ret;}());
	}

, 
	a7: function (a) {
		var $self = this;
		a.__stroke = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "rgba(92,105,124,.4)"; return $ret;}());
		a.__fill = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "rgba(147,159,175,0)"; return $ret;}());
	}

, 
	a8: function (a) {
		var $self = this;
		a.__stroke = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "rgba(68,76,88,.6)"; return $ret;}());
		a.__fill = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "rgba(92,105,118,.1)"; return $ret;}());
	}

, 
	a9: function (a) {
		var $self = this;
		a.__stroke = (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "#2A3037"; return $ret;}());
	}

, 
	ba: function (a, b) {
		a.v(this.q()[0], b.left(), b.top(), b.width(), b.height());
	}

, 
	bb: function (a, b, c) {
		this.t().css("top", (a.top() + 2 + c).toString() + "px");
		this.t().css("left", (a.left() + 2).toString() + "px");
		this.t().css("width", b.toString() + "px");
		this.t().css("height", "20px");
		this.t().show();
	}
, 
	g: null
, 
	bc: function () {
		this.f.ad().dc($.ig.OverviewPlusDetailPaneMode.prototype.full);
		if (this.t() != null) {
			this.t().hide();
		}
	}

, 
	bd: function () {
		this.f.ad().dc($.ig.OverviewPlusDetailPaneMode.prototype.minimal);
	}

, 
	be: function () {
		this.g = true;
		this.f.ad().__visibility = $.ig.Visibility.prototype.visible;
		this.bc();
		var mp_ = this.u();
		var close_ = this.b;
		if (this.isJqueryMobile()) {
			mp_.find(".ui-btn-text").html(close_);
			mp_.find(".ui-icon").removeClass('ui-icon-arrow-d').addClass('ui-icon-delete');

		} else {
			mp_.button("option", "icons", { secondary: "ui-icon-close"});
			mp_.button("option", "label",  close_);
		}
		this.u().attr("toggle", "open").attr("data-toggle", "open");
		this.t().css("left", (this.f.ad().c3().ay().left() + 5).toString() + "px");
		this.t().css("width", (this.f.ad().c3().ay().width() - 10).toString() + "px");
		this.t().css("top", (this.f.ad().c3().ay().height() - this.t().height()).toString() + "px");
		this.t().show();
	}

, 
	bf: function (a) {
		if (this.g) {
			this.g = false;
			this.f.ad().__visibility = $.ig.Visibility.prototype.collapsed;
			var mp_ = this.u();
			var overview_ = this.a;
			if (this.isJqueryMobile()) {
				mp_.find(".ui-btn-text").html(overview_);
				mp_.find(".ui-icon").removeClass('ui-icon-delete').addClass('ui-icon-arrow-d');

			} else {
				mp_.button("option", "icons", { secondary: "ui-icon-carat-1-s"});
				mp_.button("option", "label",  overview_);
			}
			this.u().attr("toggle", "closed").attr("data-toggle", "closed");
			this.f.ad().dc($.ig.OverviewPlusDetailPaneMode.prototype.minimal);
			this.t().hide();
			this.f.di();
		}
		if (a) {
			this.u().hide();
		}
	}

, 
	bg: function () {
		this.t().hide();
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
	bj: function (a) {
		window.setTimeout(a, 0);
	}

, 
	bk: function () {
		return this.isJqueryMobile();
	}
,
	$type: new $.ig.Type('XamOverviewPlusDetailPaneViewManager', $.ig.Object.prototype.$type)
}, true);













$.ig.util.defType('ColorUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	d: function (a) {
		return $.ig.Color.prototype.s(a, $.ig.ColorUtil.prototype.a.c(0, 255), $.ig.ColorUtil.prototype.a.c(0, 255), $.ig.ColorUtil.prototype.a.c(0, 255));
	}

, 
	e: function (a) {
		var b = a.getAHSV();
		return $.ig.ColorUtil.prototype.h(b[0], $.ig.ColorUtil.prototype.a.c(0, 359), b[2], b[3]);
	}

, 
	getInterpolation: function (interpolation_, maximum_, b) {
		var min_ = this;
		switch (b) {
			case $.ig.InterpolationMode.prototype.hSV:
					var c = this.getAHSV();
					var d = maximum_.getAHSV();
					var e = c[1] >= 0 ? c[1] : d[1];
					var f = d[1] >= 0 ? d[1] : c[1];
					if (e >= 0 && f >= 0 && Math.abs(f - e) > 180) {
						if (f > e) {
							e += 360;

						} else {
							f += 360;
						}
					}
					interpolation_ = Math.max(0, Math.min(1, interpolation_));
					return $.ig.ColorUtil.prototype.h(c[0] + interpolation_ * (d[0] - c[0]), e + interpolation_ * (f - e), c[2] + interpolation_ * (d[2] - c[2]), c[3] + interpolation_ * (d[3] - c[3]));
			case $.ig.InterpolationMode.prototype.rGB:
				return $.ig.Color.prototype.s(min_.__a + interpolation_ * (maximum_.__a - min_.__a), min_.__r + interpolation_ * (maximum_.__r - min_.__r), min_.__g + interpolation_ * (maximum_.__g - min_.__g), min_.__b + interpolation_ * (maximum_.__b - min_.__b));
		}
		return this;
	}

, 
	f: function (a, b, c) {
		var d = a[1] >= 0 ? a[1] : c[1];
		var e = c[1] >= 0 ? c[1] : a[1];
		if (d >= 0 && e >= 0 && Math.abs(e - d) > 180) {
			if (e > d) {
				d += 360;

			} else {
				e += 360;
			}
		}
		b = Math.max(0, Math.min(1, b));
		return $.ig.ColorUtil.prototype.h(a[0] + b * (c[0] - a[0]), d + b * (e - d), a[2] + b * (c[2] - a[2]), a[3] + b * (c[3] - a[3]));
	}

, 
	getLightened: function (b) {
		var c = this.getAHSL();
		if (b < 0) {
			return $.ig.ColorUtil.prototype.g(c[0], c[1], c[2], c[3] * (1 - $.ig.MathUtil.prototype.i(-b, 0, 1)));

		} else {
			return $.ig.ColorUtil.prototype.g(c[0], c[1], c[2], c[3] + $.ig.MathUtil.prototype.i(b, 0, 1) * (1 - c[3]));
		}
	}

, 
	getAHSL: function () {
		var b = new Array(4);
		var c = this.c() / 255;
		var d = this.d() / 255;
		var e = this.e() / 255;
		var f = Math.min(Math.min(c, d), e);
		var g = Math.max(Math.max(c, d), e);
		var h = g - f;
		b[0] = this.b() / 255;
		b[3] = (g + f) / 2;
		if (h == 0) {
			b[1] = -1;
			b[2] = 0;

		} else {
			b[1] = $.ig.ColorUtil.prototype.i(g, h, c, d, e);
			b[2] = b[3] < 0.5 ? h / (g + f) : h / (2 - g - f);
		}
		return b;
	}

, 
	getAHSV: function () {
		var b = this.b() / 255;
		var c = this.c() / 255;
		var d = this.d() / 255;
		var e = this.e() / 255;
		var f = Math.min(c, Math.min(d, e));
		var g = Math.max(c, Math.max(d, e));
		var h = g - f;
		var i = new Array(4);
		i[0] = b;
		i[3] = g;
		if (h == 0) {
			i[1] = -1;
			i[2] = 0;

		} else {
			i[1] = $.ig.ColorUtil.prototype.i(g, h, c, d, e);
			i[2] = h / g;
		}
		return i;
	}

, 
	g: function (a, b, c, d) {
		var e;
		var f;
		var g;
		if (c == 0) {
			e = d;
			f = d;
			g = d;

		} else {
			var h = d < 0.5 ? d * (1 + c) : d + c - (d * c);
			var i = 2 * d - h;
			var j = b / 360;
			e = $.ig.ColorUtil.prototype.j(i, h, j + 1 / 3);
			f = $.ig.ColorUtil.prototype.j(i, h, j);
			g = $.ig.ColorUtil.prototype.j(i, h, j - 1 / 3);
		}
		return $.ig.Color.prototype.s((a * 255), (e * 255), (f * 255), (g * 255));
	}

, 
	h: function (a, b, c, d) {
		var e;
		var f;
		var g;
		while (b >= 360) {
			b -= 360;
		}
		if (c == 0) {
			e = d;
			f = d;
			g = d;

		} else {
			b /= 60;
			var h = Math.floor(b);
			var i = b - h;
			var j = d * (1 - c);
			var k = d * (1 - c * i);
			var l = d * (1 - c * (1 - i));
			switch (h) {
				case 0:
					e = d;
					f = l;
					g = j;
					break;
				case 1:
					e = k;
					f = d;
					g = j;
					break;
				case 2:
					e = j;
					f = d;
					g = l;
					break;
				case 3:
					e = j;
					f = k;
					g = d;
					break;
				case 4:
					e = l;
					f = j;
					g = d;
					break;
				default:
					e = d;
					f = j;
					g = k;
					break;
			}
		}
		return $.ig.Color.prototype.s((a * 255), (e * 255), (f * 255), (g * 255));
	}

, 
	i: function (a, b, c, d, e) {
		var f = c == a ? (d - e) / b : d == a ? 2 + (e - c) / b : 4 + (c - d) / b;
		f *= 60;
		if (f < 0) {
			f += 360;
		}
		return f;
	}

, 
	j: function (a, b, c) {
		c = c < 0 ? c + 1 : c > 1 ? c - 1 : c;
		if (c < 1 / 6) {
			return a + ((b - a) * 6 * c);
		}
		if (c < 1 / 2) {
			return b;
		}
		if (c < 2 / 3) {
			return a + ((b - a) * 6 * (2 / 3 - c));
		}
		return a;
	}
, 
	b: null
, 
	c: function () {
			if ($.ig.ColorUtil.prototype.b == null) {
				$.ig.ColorUtil.prototype.b = new Array(100);
				$.ig.ColorUtil.prototype.b[0] = $.ig.Color.prototype.s(255, 70, 130, 180);
				$.ig.ColorUtil.prototype.b[1] = $.ig.Color.prototype.s(255, 65, 105, 225);
				$.ig.ColorUtil.prototype.b[2] = $.ig.Color.prototype.s(255, 100, 149, 237);
				$.ig.ColorUtil.prototype.b[3] = $.ig.Color.prototype.s(255, 176, 196, 222);
				$.ig.ColorUtil.prototype.b[4] = $.ig.Color.prototype.s(255, 123, 104, 238);
				$.ig.ColorUtil.prototype.b[5] = $.ig.Color.prototype.s(255, 106, 90, 205);
				$.ig.ColorUtil.prototype.b[6] = $.ig.Color.prototype.s(255, 72, 61, 139);
				$.ig.ColorUtil.prototype.b[7] = $.ig.Color.prototype.s(255, 25, 25, 112);
				for (var b = 8; b < 100; b++) {
					$.ig.ColorUtil.prototype.b[b] = $.ig.Color.prototype.s(255, $.ig.ColorUtil.prototype.a.b(255), $.ig.ColorUtil.prototype.a.b(255), $.ig.ColorUtil.prototype.a.b(255));
				}
			}
			return $.ig.ColorUtil.prototype.b;
	}

, 
	l: function (a) {
		a %= 100;
		return $.ig.ColorUtil.prototype.c()[a];
	}

, 
	m: function (a) {
		var b = a.b() / 255;
		var c = (a.c() * b);
		var d = (a.d() * b);
		var e = (a.e() * b);
		return a.b() << 24 | c << 16 | d << 8 | e;
	}

, 
	n: function (a) {
		return a.color();
	}
,
	$type: new $.ig.Type('ColorUtil', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DoubleAnimator', 'Object', {
	a: null
, 
	k: function (a) {
		if (arguments.length === 1) {
			this.a = a;
			if (this.propertyChanged != null) {
				this.propertyChanged(this, new $.ig.PropertyChangedEventArgs("TransitionProgress"));
			}
			return a;
		} else {
			return this.a;
		}
	}
, 
	b: null
, 
	l: function (a) {
		if (arguments.length === 1) {
			this.b = a;
			return a;
		} else {
			return this.b;
		}
	}
, 
	c: null, 
	d: null
, 
		init: function (a, b, c) {

			this.c = 0;
			this.d = 0;
			this.e = false;
			this.g = -1;
			this.h = 0;

			$.ig.Object.prototype.init.call(this);
						this.c = a;
				this.d = b;
				this.b = c;
				this.m(window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            });
		}, 
	e: null
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
	t: function () {
		this.a = 0;
		this.h = 0;
		this.f = $.ig.Date.prototype.now();
		if (!this.e) {
			this.e = true;
			this.m()(this.v.on(this));
		}
	}

, 
	u: function () {
		this.e = false;
		this.a = 0;
		this.h = 0;
	}
, 
	f: null, 
	g: null, 
	h: null
, 
	v: function () {
		if (!this.e) {
			this.u();
			return;
		}
		var a = $.ig.Date.prototype.now();
		var b = a.getTime() - this.f.getTime();
		if (b > this.b) {
			b = this.b;
		}
		if (b - this.h < 16 && b != this.b) {
			this.m()(this.v.on(this));
			return;
		}
		var c = (b / this.b);
		var d = this.c + ((this.d - this.c) * c);
		this.k(d);
		this.h = b;
		if (b == this.b) {
			this.u();

		} else {
			this.m()(this.v.on(this));
		}
	}

, 
	w: function () {
		return this.e;
	}
, 
	propertyChanged: null,
	$type: new $.ig.Type('DoubleAnimator', $.ig.Object.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);







$.ig.util.defType('MathUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	e: function (a) {
		return Math.log(a + Math.sqrt(a * a + 1));
	}

, 
	f: function (a, b) {
		return Math.sqrt(a * a + b * b);
	}

, 
	g: function (a) {
		return a * a;
	}

, 
	h: function (a) {
		var $self = this;
		if (a <= 0) {
			return NaN;
		}
		var b = (function () { var $ret = new Array();
$ret.add(57.1562356658629);
$ret.add(-59.5979603554755);
$ret.add(14.1360979747417);
$ret.add(-0.49191381609762);
$ret.add(3.39946499848119E-05);
$ret.add(4.65236289270486E-05);
$ret.add(-9.83744753048796E-05);
$ret.add(0.000158088703224912);
$ret.add(-0.000210264441724105);
$ret.add(0.000217439618115213);
$ret.add(-0.000164318106536764);
$ret.add(8.44182239838528E-05);
$ret.add(-2.61908384015814E-05);
$ret.add(3.68991826595316E-06); return $ret;}());
		var c = a;
		var d = (a + 0.5) * Math.log(a + 5.2421875) - (a + 5.2421875);
		var e = 0.999999999999997;
		for (var f = 0; f < 14; f++) {
			e += b[f] / ++c;
		}
		return d + Math.log(2.506628274631 * e / a);
	}

, 
	i: function (a, b, c) {
		return Math.min(c, Math.max(b, a));
	}

, 
	j: function (a) {
		return Math.PI * a / 180;
	}

, 
	k: function (a) {
		return 180 * a / Math.PI;
	}

, 
	l: function (a, b, c) {
		var d = Math.floor(a) & 255;
		var e = Math.floor(b) & 255;
		var f = Math.floor(c) & 255;
		a -= Math.floor(a);
		b -= Math.floor(b);
		c -= Math.floor(c);
		var g = $.ig.MathUtil.prototype.m(a);
		var h = $.ig.MathUtil.prototype.m(b);
		var i = $.ig.MathUtil.prototype.m(c);
		var j = $.ig.MathUtil.prototype.d[d] + e;
		var k = $.ig.MathUtil.prototype.d[j] + f;
		var l = $.ig.MathUtil.prototype.d[j + 1] + f;
		var m = $.ig.MathUtil.prototype.d[d + 1] + e;
		var n = $.ig.MathUtil.prototype.d[m] + f;
		var o = $.ig.MathUtil.prototype.d[m + 1] + f;
		return $.ig.MathUtil.prototype.n(i, $.ig.MathUtil.prototype.n(h, $.ig.MathUtil.prototype.n(g, $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[k], a, b, c), $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[n], a - 1, b, c)), $.ig.MathUtil.prototype.n(g, $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[l], a, b - 1, c), $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[o], a - 1, b - 1, c))), $.ig.MathUtil.prototype.n(h, $.ig.MathUtil.prototype.n(g, $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[k + 1], a, b, c - 1), $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[n + 1], a - 1, b, c - 1)), $.ig.MathUtil.prototype.n(g, $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[l + 1], a, b - 1, c - 1), $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[o + 1], a - 1, b - 1, c - 1))));
	}

, 
	m: function (a) {
		return a * a * a * (a * (a * 6 - 15) + 10);
	}

, 
	n: function (a, b, c) {
		return b + a * (c - b);
	}

, 
	o: function (a, b, c, d) {
		var e = a & 15;
		var f = e < 8 ? b : c;
		var g = e < 4 ? c : e == 12 || e == 14 ? b : d;
		return ((e & 1) == 0 ? f : -f) + ((e & 2) == 0 ? g : -g);
	}

, 
	p: function (a) {
		if (a == 0) {
			return 0;
		}
		if (a < 0) {
			return -$.ig.MathUtil.prototype.r(-a);
		}
		var b = Math.floor(Math.log10(a));
		var c = a / $.ig.MathUtil.prototype.s(10, b);
		var d = c < 2 ? 1 : (c < 5 ? 2 : (c < 10 ? 5 : 10));
		return d * $.ig.MathUtil.prototype.s(10, b);
	}

, 
	q: function (a) {
		if (a == 0) {
			return 0;
		}
		if (a < 0) {
			return -$.ig.MathUtil.prototype.q(-a);
		}
		var b = Math.floor(Math.log10(a));
		var c = a / $.ig.MathUtil.prototype.s(10, b);
		var d = c < 1 ? 1 : (c < 3 ? 2 : (c < 7 ? 5 : 10));
		return d * $.ig.MathUtil.prototype.s(10, b);
	}

, 
	r: function (a) {
		if (a == 0) {
			return 0;
		}
		if (a < 0) {
			return -$.ig.MathUtil.prototype.p(-a);
		}
		var b = Math.floor(Math.log10(a));
		var c = a / $.ig.MathUtil.prototype.s(10, b);
		var d = c <= 1 ? 1 : (c <= 2 ? 2 : (c <= 5 ? 5 : 10));
		return d * $.ig.MathUtil.prototype.s(10, b);
	}

, 
	s: function (a, b) {
		var c = 1;
		for (; b > 0; --b) {
			c *= a;
		}
		for (; b < 0; ++b) {
			c /= a;
		}
		return c;
	}

, 
	t: function (a, b, c) {
		return Math.min(a, Math.min(b, c));
	}

, 
	u: function (a, b, c) {
		return Math.max(a, Math.max(b, c));
	}

, 
	v: function (a) {
		var b = a[0];
		for (var c = 1; c < a.length; ++c) {
			b = Math.min(b, a[c]);
		}
		return b;
	}

, 
	w: function (a) {
		var b = a[0];
		for (var c = 1; c < a.length; ++c) {
			b = Math.max(b, a[c]);
		}
		return b;
	}
,
	$type: new $.ig.Type('MathUtil', $.ig.Object.prototype.$type)
}, true);






$.ig.util.defType('RectUtil', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	getCenter: function () {
		if (this.isEmpty()) {
			return {__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
		return {__x: 0.5 * (this.left() + this.right()), __y: 0.5 * (this.bottom() + this.top()), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	getArea: function () {
		if (this.isEmpty()) {
			return 0;
		}
		return this.width() * this.height();
	}

, 
	duplicate: function () {
		if (this.isEmpty()) {
			return this;
		}
		return new $.ig.Rect(0, this.left(), this.top(), this.width(), this.height());
	}

, 
	getLeader: function (b) {
		if (this.contains1(b)) {
			return b;
		}
		var c = {__x: this.left() + 0.5 * this.width(), __y: this.top() + 0.5 * this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var d = {__x: b.__x - c.__x, __y: b.__y - c.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var e;
		if (d.__x != 0) {
			e = (this.left() - c.__x) / d.__x;
			var f = c.__y + e * d.__y;
			if (f > this.top() && f < this.bottom()) {
				return e > 0 ? {__x: this.left(), __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName} : {__x: this.right(), __y: c.__y - e * d.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			}
		}
		e = (this.top() - c.__y) / d.__y;
		var g = c.__x + e * d.__x;
		return e > 0 ? {__x: g, __y: this.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName} : {__x: c.__x - e * d.__x, __y: this.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	getDistanceSquared: function (b) {
		if (this.isEmpty()) {
			return NaN;
		}
		return $.ig.RectUtil.prototype.getDistanceSquared22(this, b.__x, b.__y);
	}

, 
	getDistanceSquared11: function (b) {
		if (this.isEmpty()) {
			return Number.POSITIVE_INFINITY;
		}
		var c = $.ig.RectUtil.prototype.getDistanceSquared22(this, b.left(), b.top());
		if (c > 0) {
			c = Math.min(c, $.ig.RectUtil.prototype.getDistanceSquared22(this, b.left(), b.bottom()));
		}
		if (c > 0) {
			c = Math.min(c, $.ig.RectUtil.prototype.getDistanceSquared22(this, b.right(), b.bottom()));
		}
		if (c > 0) {
			c = Math.min(c, $.ig.RectUtil.prototype.getDistanceSquared22(this, b.right(), b.top()));
		}
		if (c > 0) {
			c = Math.min(c, $.ig.RectUtil.prototype.getDistanceSquared22(b, this.left(), this.top()));
		}
		if (c > 0) {
			c = Math.min(c, $.ig.RectUtil.prototype.getDistanceSquared22(b, this.left(), this.bottom()));
		}
		if (c > 0) {
			c = Math.min(c, $.ig.RectUtil.prototype.getDistanceSquared22(b, this.right(), this.bottom()));
		}
		if (c > 0) {
			c = Math.min(c, $.ig.RectUtil.prototype.getDistanceSquared22(b, this.right(), this.top()));
		}
		return c;
	}

, 
	getDistanceSquared22: function (b, c) {
		var d = b - this.left();
		var e = c - this.top();
		var f = this.width() * d;
		var g = this.height() * e;
		if (f > 0) {
			var h = this.width() * this.width();
			if (f < h) {
				d -= (f / h) * this.width();

			} else {
				d -= this.width();
			}
		}
		if (g > 0) {
			var i = this.height() * this.height();
			if (g < i) {
				e -= (g / i) * this.height();

			} else {
				e -= this.height();
			}
		}
		return d * d + e * e;
	}

, 
	contains3: function (b) {
		if (this.isEmpty() || b.isEmpty()) {
			return false;
		}
		if (this.left() > b.left()) {
			return false;
		}
		if (this.right() < b.right()) {
			return false;
		}
		if (this.top() > b.top()) {
			return false;
		}
		if (this.bottom() < b.bottom()) {
			return false;
		}
		return true;
	}

, 
	intersectsWith1: function (b) {
		if (this.isEmpty() || b.isEmpty()) {
			return false;
		}
		if (this.right() < b.left()) {
			return false;
		}
		if (this.left() > b.right()) {
			return false;
		}
		if (this.top() > b.bottom()) {
			return false;
		}
		if (this.bottom() < b.top()) {
			return false;
		}
		return true;
	}

, 
	intersectionArea: function (b) {
		if (this.isEmpty() || b.isEmpty()) {
			return 0;
		}
		var c = Math.min(this.right(), b.right()) - Math.max(this.left(), b.left());
		if (c <= 0) {
			return 0;
		}
		var d = Math.min(this.bottom(), b.bottom()) - Math.max(this.top(), b.top());
		if (d <= 0) {
			return 0;
		}
		return c * d;
	}

, 
	getInflated: function (b, c) {
		if (this.isEmpty()) {
			return this;
		}
		return new $.ig.Rect(0, this.x() - b, this.y() - c, Math.max(0, this.width() + 2 * b), Math.max(0, this.height() + 2 * c));
	}

, 
	inflate: function (b, c) {
		this.x(this.x() - b);
		this.y(this.y() - c);
		var d = this.width() + 2 * b;
		var e = this.height() + 2 * c;
		this.width(d > 1 ? d : 1);
		this.height(e > 1 ? e : 1);
		return this;
	}

, 
	inflate11: function (b) {
		var c = this.x() - b;
		var d = this.y() - b;
		var e = this.width() + b + b;
		var f = this.height() + b + b;
		var g = e > 0 ? e : 0;
		var h = f > 0 ? f : 0;
		return new $.ig.Rect(0, c, d, g, h);
	}

, 
	round: function () {
		this.x(Math.round(this.x()));
		this.y(Math.round(this.y()));
		this.width(Math.round(this.width()));
		this.height(Math.round(this.height()));
		return this;
	}

, 
	isNull: function () {
		return this.x() == 0 && this.y() == 0 && this.width() == 0 && this.height() == 0;
	}
,
	$type: new $.ig.Type('RectUtil', $.ig.Object.prototype.$type)
}, true);











$.ig.InterpolationMode.prototype.rGB = 0;
$.ig.InterpolationMode.prototype.hSV = 1;
$.ig.OverviewPlusDetailPaneMode.prototype.minimal = 0;
$.ig.OverviewPlusDetailPaneMode.prototype.full = 1;
$.ig.OverviewPlusDetailPaneMode.prototype.compact = 2;
$.ig.InteractionState.prototype.none = 0;
$.ig.InteractionState.prototype.dragZoom = 1;
$.ig.InteractionState.prototype.dragPan = 2;
$.ig.InteractionState.prototype.auto = 3;
$.ig.GradientDirection.prototype.topBottom = 0;
$.ig.GradientDirection.prototype.bottomTop = 1;
$.ig.GradientDirection.prototype.leftRight = 2;
$.ig.GradientDirection.prototype.rightLeft = 3;
$.ig.GradientDirection.prototype.radial = 4;
$.ig.FastItemsSourceEventAction.prototype.remove = 0;
$.ig.FastItemsSourceEventAction.prototype.insert = 1;
$.ig.FastItemsSourceEventAction.prototype.replace = 2;
$.ig.FastItemsSourceEventAction.prototype.change = 3;
$.ig.FastItemsSourceEventAction.prototype.reset = 4;
$.ig.TrendLineType.prototype.none = 0;
$.ig.TrendLineType.prototype.linearFit = 1;
$.ig.TrendLineType.prototype.quadraticFit = 2;
$.ig.TrendLineType.prototype.cubicFit = 3;
$.ig.TrendLineType.prototype.quarticFit = 4;
$.ig.TrendLineType.prototype.quinticFit = 5;
$.ig.TrendLineType.prototype.logarithmicFit = 6;
$.ig.TrendLineType.prototype.exponentialFit = 7;
$.ig.TrendLineType.prototype.powerLawFit = 8;
$.ig.TrendLineType.prototype.simpleAverage = 9;
$.ig.TrendLineType.prototype.exponentialAverage = 10;
$.ig.TrendLineType.prototype.modifiedAverage = 11;
$.ig.TrendLineType.prototype.cumulativeAverage = 12;
$.ig.TrendLineType.prototype.weightedAverage = 13;
$.ig.BrushCollection.prototype.ai = new $.ig.Random();
$.ig.DOMEventProxy.prototype.b0 = 0;
$.ig.DOMEventProxy.prototype.bz = -1;
$.ig.XamOverviewPlusDetailPane.prototype.a7 = 2;
$.ig.XamOverviewPlusDetailPane.prototype.a8 = "SizeStates";
$.ig.XamOverviewPlusDetailPane.prototype.a9 = "Full";
$.ig.XamOverviewPlusDetailPane.prototype.ba = "Minimal";
$.ig.XamOverviewPlusDetailPane.prototype.bb = "ZoomableStates";
$.ig.XamOverviewPlusDetailPane.prototype.bc = "ZoomEnabled";
$.ig.XamOverviewPlusDetailPane.prototype.bd = "ZoomDisabled";
$.ig.XamOverviewPlusDetailPane.prototype.be = "Root";
$.ig.XamOverviewPlusDetailPane.prototype.bf = "ContentPresenter";
$.ig.XamOverviewPlusDetailPane.prototype.bg = "ZoomOut";
$.ig.XamOverviewPlusDetailPane.prototype.bh = "ZoomLevel";
$.ig.XamOverviewPlusDetailPane.prototype.bi = "ZoomIn";
$.ig.XamOverviewPlusDetailPane.prototype.bj = "ZoomTo100";
$.ig.XamOverviewPlusDetailPane.prototype.bk = "ScaleToFit";
$.ig.XamOverviewPlusDetailPane.prototype.bl = "ButtonCursor";
$.ig.XamOverviewPlusDetailPane.prototype.bm = "DragPan";
$.ig.XamOverviewPlusDetailPane.prototype.bn = "DragZoom";
$.ig.XamOverviewPlusDetailPane.prototype.bo = "ButtonsGrid";
$.ig.XamOverviewPlusDetailPane.prototype.bp = "Immediate";
$.ig.XamOverviewPlusDetailPane.prototype.bq = "World";
$.ig.XamOverviewPlusDetailPane.prototype.br = "WorldStyle";
$.ig.XamOverviewPlusDetailPane.prototype.bs = "Window";
$.ig.XamOverviewPlusDetailPane.prototype.bt = "WindowStyle";
$.ig.XamOverviewPlusDetailPane.prototype.bu = "Preview";
$.ig.XamOverviewPlusDetailPane.prototype.bv = "PreviewStyle";
$.ig.XamOverviewPlusDetailPane.prototype.bw = "ZoomLevelLargeChange";
$.ig.XamOverviewPlusDetailPane.prototype.bx = 10;
$.ig.XamOverviewPlusDetailPane.prototype.by = 2;
$.ig.XamOverviewPlusDetailPane.prototype.b2 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bp, $.ig.Boolean.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, true, function (a, b) {
	($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, a)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Boolean.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bp, b.f(), b.e()));
}));
$.ig.XamOverviewPlusDetailPane.prototype.b3 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bq, $.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Rect.prototype.empty(), function (a, b) {
	($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, a)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bq, b.f(), b.e()));
}));
$.ig.XamOverviewPlusDetailPane.prototype.b4 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.br, $.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, a)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.br, $.ig.util.cast($.ig.Style.prototype.$type, b.f()), $.ig.util.cast($.ig.Style.prototype.$type, b.e())));
}));
$.ig.XamOverviewPlusDetailPane.prototype.b5 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bs, $.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Rect.prototype.empty(), function (a, b) {
	($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, a)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, b.f(), b.e()));
}));
$.ig.XamOverviewPlusDetailPane.prototype.b6 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bt, $.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, a)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bt, $.ig.util.cast($.ig.Style.prototype.$type, b.f()), $.ig.util.cast($.ig.Style.prototype.$type, b.e())));
}));
$.ig.XamOverviewPlusDetailPane.prototype.b7 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bu, $.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Rect.prototype.empty(), function (a, b) {
	($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, a)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bu, b.f(), b.e()));
}));
$.ig.XamOverviewPlusDetailPane.prototype.b8 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bv, $.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, a)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bv, $.ig.util.cast($.ig.Style.prototype.$type, b.f()), $.ig.util.cast($.ig.Style.prototype.$type, b.e())));
}));
$.ig.XamOverviewPlusDetailPane.prototype.b9 = $.ig.DependencyProperty.prototype.l("ShrinkToThumbnail", $.ig.Boolean.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, true, $.ig.XamOverviewPlusDetailPane.prototype.ei));
$.ig.XamOverviewPlusDetailPane.prototype.ca = $.ig.DependencyProperty.prototype.l("Mode", $.ig.OverviewPlusDetailPaneMode.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.OverviewPlusDetailPaneMode.prototype.minimal, $.ig.XamOverviewPlusDetailPane.prototype.em));
$.ig.XamOverviewPlusDetailPane.prototype.cc = $.ig.DependencyProperty.prototype.l("ZoomTo100ButtonVisibility", $.ig.Visibility.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (a, b) { return (a).fo("ZoomTo100ButtonVisibility", b.f(), b.e())}));
$.ig.XamOverviewPlusDetailPane.prototype.cd = $.ig.DependencyProperty.prototype.l("ScaleToFitButtonVisibility", $.ig.Visibility.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (a, b) { return (a).fo("ScaleToFitButtonVisibility", b.f(), b.e())}));
$.ig.XamOverviewPlusDetailPane.prototype.ce = $.ig.DependencyProperty.prototype.l("InteractionStatesToolVisibility", $.ig.Visibility.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (a, b) { return (a).fo("InteractionStatesToolVisibility", b.f(), b.e())}));
$.ig.XamOverviewPlusDetailPane.prototype.cf = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bw, Number, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (a, b) { return (a).fo($.ig.XamOverviewPlusDetailPane.prototype.bw, b.f(), b.e())}));
$.ig.ColorUtil.prototype.a = new $.ig.Random();
$.ig.MathUtil.prototype.a = Math.PI / 180;
$.ig.MathUtil.prototype.b = (1 + Math.sqrt(5)) / 2;
$.ig.MathUtil.prototype.c = Math.sqrt(2);
$.ig.MathUtil.prototype.d = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180, 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];

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

$.ig.util.defType('WindowResponse', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('WindowResponse', $.ig.Object.prototype.$type)
}, true);





$.ig.util.defType('MarkerType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('MarkerType', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('GridMode', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('GridMode', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AxisOrientation', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('AxisOrientation', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('CategoryMode', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('CategoryMode', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AxisLabelsLocation', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('AxisLabelsLocation', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('ChartContentType', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('ChartContentType', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('NumericScaleMode', 'Enum', {
	init: function () {

		$.ig.Enum.prototype.init.call(this);

	},
	$type: new $.ig.Type('NumericScaleMode', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AxisLabelPanelBaseView', 'Object', {

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
		init: function (a) {

			this.b = $.ig.Rect.prototype.empty();
			this.d = 0;

			$.ig.Object.prototype.init.call(this);
						this.g(a);
		}
, 
	k: function (a, b) {
		var c = $.ig.util.cast($.ig.TextBlock.prototype.$type, a);
		if (c != null) {
			c.__visibility = $.ig.Visibility.prototype.visible;
			if (b.width() == 0 && b.height() == 0) {
				c.__visibility = $.ig.Visibility.prototype.collapsed;
			}
			c.y(b.left() + this.l());
			c.x(b.top() + this.m());
			c.v(b.width());
			c.w(b.height());
		}
		if (c.f() != null) {
			var d = c.f();
			d.i(d.i() + c.y());
			d.j(d.j() + c.x());
		}
	}

, 
	l: function () {
		return this.g().bv().left();
	}

, 
	m: function () {
		return 0;
	}

, 
	n: function (a) {
		var b = a;
		b.f(null);
	}

, 
	o: function (a) {
	}

, 
	p: function (a, b) {
		var $self = this;
		var c = $.ig.util.cast($.ig.FrameworkElement.prototype.$type, a);
		var d = 0		,e = 0;
		var f = (function () { var $ret = new $.ig.RotateTransform();
$ret.h(b);
$ret.i(d);
$ret.j(e); return $ret;}());
		c.f(f);
	}

, 
	q: function (a, b) {
		var c = a.a5().length;
		var d = a.a5();
		while (this.h().y(d) + $.ig.AxisLabelPanelBaseView.prototype.a > b && c > 0) {
			c--;
			d = d.substr(0, c) + "\u2026";
		}
		return d;
	}

, 
	r: function () {
		var a = this.s();
		var c = a.getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			var d = $.ig.util.cast($.ig.FrameworkElement.prototype.$type, b);
			if (d != null) {
				this.g().dp(d);
			}
			this.g().dn(b);
		}
	}

, 
	s: function () {
		var a = this.g().dq();
		var b = this.g().dl();
		if (!this.g().br().da()) {
			return a;

		} else {
			return b;
		}
	}

, 
	t: function (a) {
		return this.d + $.ig.AxisLabelPanelBaseView.prototype.a;
	}

, 
	u: function () {
	}

, 
	v: function (a) {
		var b = $.ig.util.cast($.ig.TextBlock.prototype.$type, a);
		if (b != null && b.a5() != null) {
			return this.h().y(b.a5()) + $.ig.AxisLabelPanelBaseView.prototype.a;
		}
		return 0;
	}

, 
	w: function () {
		this.g().b5(this.g().br().labelSettings().extent());
	}

, 
	x: function () {
		this.ae();
		this.g().dg(new $.ig.Size(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY));
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
	aa: function (a) {
		this.h(a);
	}

, 
	ab: function () {
		if (this.g().bv().isEmpty()) {
			return;
		}
		var a = this.g().b5();
		this.g().de(new $.ig.Size(this.g().bv().width(), this.g().bv().height()));
		if (this.g().b5() != a) {
			this.g().br().chart().ic();
			this.ac();
		}
	}

, 
	ac: function () {
	}
, 
	b: null
, 
	ad: function () {
		if (this.h() == null) {
			return;
		}
		if (this.h().b()) {
			this.ae();
			this.b = this.g().bv();
			var a = this.g().br().chart().iq();
			if (this.g().br().labelSettings() != null && this.g().br().labelSettings().textColor() != null) {
				a = this.g().br().labelSettings().textColor();
			}
			var c = this.s().getEnumerator();
			while (c.moveNext()) {
				var b = c.current();
				var d = $.ig.util.cast($.ig.TextBlock.prototype.$type, b);
				if (d != null) {
					d.a6(a);
					if (d.f() != null) {
						this.h().o();
						this.h().m(d.f());
					}
					this.h().i(d);
					if (d.f() != null) {
						this.h().p();
					}
				}
			}
		}
	}
, 
	c: null
, 
	ae: function () {
		if (this.h() == null) {
			return;
		}
		var a = this.g().br().seriesViewer().ir();
		if (this.g().br().labelSettings() != null && this.g().br().labelSettings().textStyle() != null) {
			a = this.g().br().labelSettings().textStyle();
		}
		if (this.c != a) {
			this.af();
		}
		this.h().x(a);
	}
, 
	d: null
, 
	af: function () {
		if (this.g().br() != null && this.g().br().seriesViewer() != null) {
			if (this.g().br().labelSettings() == null || this.g().br().labelSettings().textStyle() == null) {
				this.d = this.g().br().seriesViewer().fb().ax();
				return;
			}
			if (this.d == 0) {
				this.d = this.g().br().seriesViewer().fb().ax();
			}
			var a = this.d;
			var b = this.g().br().seriesViewer().fb().aq().ax(this.g().br().labelSettings().textStyle());
			this.d = b;
			if (a != this.d) {
				this.g().br().seriesViewer().ic();
			}
		}
	}
,
	$type: new $.ig.Type('AxisLabelPanelBaseView', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('AxisLabelPanelBase', 'Panel', {

	b6: function () {
		return new $.ig.AxisLabelPanelBaseView(this);
	}

, 
	b7: function (a) {
	}

, 
	_bp: null,
	bp: function (a) {
		if (arguments.length === 1) {
			this._bp = a;
			return a;
		} else {
			return this._bp;
		}
	}

, 
		init: function () {


			$.ig.Panel.prototype.init.call(this);
						this.bu($.ig.Rect.prototype.empty());
				this.bv($.ig.Rect.prototype.empty());
				this.bp(this.b6());
				this.b7(this.bp());
				this.bp().u();
				this.by(new $.ig.List$1($.ig.FrameworkElement.prototype.$type, 0));
				this.bt(new $.ig.List$1($.ig.LabelPosition.prototype.$type, 0));
				this.bz(new $.ig.List$1($.ig.Rect.prototype.$type, 0));
				this.b2(false);
				this.b1(false);
				this.b3(false);
				this.b0(false);
		}
, 
	_bq: null,
	bq: function (a) {
		if (arguments.length === 1) {
			this._bq = a;
			return a;
		} else {
			return this._bq;
		}
	}

, 
	_br: null,
	br: function (a) {
		if (arguments.length === 1) {
			this._br = a;
			return a;
		} else {
			return this._br;
		}
	}

, 
	_bs: null,
	bs: function (a) {
		if (arguments.length === 1) {
			this._bs = a;
			return a;
		} else {
			return this._bs;
		}
	}

, 
	_bt: null,
	bt: function (a) {
		if (arguments.length === 1) {
			this._bt = a;
			return a;
		} else {
			return this._bt;
		}
	}

, 
	_bu: null,
	bu: function (a) {
		if (arguments.length === 1) {
			this._bu = a;
			return a;
		} else {
			return this._bu;
		}
	}

, 
	_bv: null,
	bv: function (a) {
		if (arguments.length === 1) {
			this._bv = a;
			return a;
		} else {
			return this._bv;
		}
	}

, 
	_bw: null,
	bw: function (a) {
		if (arguments.length === 1) {
			this._bw = a;
			return a;
		} else {
			return this._bw;
		}
	}
, 
	a7: null
, 
	bx: function (a) {
		if (arguments.length === 1) {
			this.a7 = a;
			return a;
		} else {
			return this.a7;
		}
	}

, 
	_by: null,
	by: function (a) {
		if (arguments.length === 1) {
			this._by = a;
			return a;
		} else {
			return this._by;
		}
	}

, 
	_bz: null,
	bz: function (a) {
		if (arguments.length === 1) {
			this._bz = a;
			return a;
		} else {
			return this._bz;
		}
	}

, 
	_b0: null,
	b0: function (a) {
		if (arguments.length === 1) {
			this._b0 = a;
			return a;
		} else {
			return this._b0;
		}
	}

, 
	_b1: null,
	b1: function (a) {
		if (arguments.length === 1) {
			this._b1 = a;
			return a;
		} else {
			return this._b1;
		}
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
	_b4: null,
	b4: function (a) {
		if (arguments.length === 1) {
			this._b4 = a;
			return a;
		} else {
			return this._b4;
		}
	}

, 
	c4: function (a) {
		for (var b = 0; b < a.count() - 1; b++) {
			for (var c = b; c < a.count() - 1; c++) {
				if (a.__inner[b].intersectsWith(a.__inner[c + 1])) {
					return true;
				}
			}
		}
		return false;
	}

, 
	c5: function (a, b) {
		return {
			ret: 0,
			rectangles: b
		};
		return {
			rectangles: b
		};
	}

, 
	c6: function () {
		return null;
	}

, 
	c7: function () {
	}

, 
	c8: function (a) {
	}

, 
	c9: function () {
		return this.br().labelSettings() != null ? this.br().labelSettings().angle() : 0;
	}

, 
	da: function (a, b) {
		return true;
	}

, 
	db: function (a) {
		return this.bp().v(a);
	}

, 
	dc: function (a) {
		return this.bp().t(a);
	}

, 
	dd: function () {
		if (this.a3().count() < 1 || this.bt().count() == 0) {
			return new $.ig.List$1($.ig.Rect.prototype.$type, 0);
		}
		this.by(new $.ig.List$1($.ig.FrameworkElement.prototype.$type, 0));
		this.bz(new $.ig.List$1($.ig.Rect.prototype.$type, 0));
		this.c7();
		this.bp().r();
		var a = this.c9();
		if (a % 360 == 0) {
			this.b1(false);
		}
		if (this.by().count() == 0) {
			return new $.ig.List$1($.ig.Rect.prototype.$type, 0);
		}
		this.bz(this.c6());
		return this.bz();
	}

, 
	de: function (a) {
		if (this.br() == null || this.a3().count() == 0) {
			return a;
		}
		this.bz(this.dd());
		if (this.by().count() != this.bz().count()) {
			return a;
		}
		if (this.b1()) {
			for (var b = 0; b < this.by().count(); b++) {
				if (this.da(b, this.bz().__inner[b])) {
					this.bp().k(this.by().__inner[b], this.bz().__inner[b]);
				}
				this.df(this.by().__inner[b], this.c9());
			}
		}
		for (var c = 0; c < this.by().count(); c++) {
			if (!this.b1()) {
				this.bp().n(this.by().__inner[c]);
			}
			if (this.da(c, this.bz().__inner[c])) {
				this.bp().k(this.by().__inner[c], this.bz().__inner[c]);

			} else {
				this.bp().k(this.by().__inner[c], new $.ig.Rect(0, 0, 0, 0, 0));
			}
		}
		this.c8(a);
		return a;
	}

, 
	df: function (a, b) {
		var c = this.c9();
		this.bp().p(a, c);
	}

, 
	dg: function (a) {
		var c = this.a3().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			this.bp().o(b);
		}
		var d = (this.br() == null || this.b5() <= 0) ? 50 : this.b5();
		var e = new $.ig.Size(d, d);
		if (Number.isInfinity(e.c())) {
			e.c(50);
		}
		if (Number.isInfinity(e.d())) {
			e.d(50);
		}
		return e;
	}

, 
	b5: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.AxisLabelPanelBase.prototype.a8, a);
			return a;
		} else {
			return this.b($.ig.AxisLabelPanelBase.prototype.a8);
		}
	}

, 
	dj: function () {
		return $.ig.AxisLabelsLocation.prototype.outsideBottom;
	}

, 
	dk: function (a) {
		return true;
	}

, 
	dl: function () {
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
							this.$b = this.$this.a3().getEnumerator();
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
		return new $.ig.GenericEnumerable$1($.ig.Object.prototype.$type, $iter);
	}

, 
	dm: function (a, b, c) {
		var d = this.bp().q(b, c);
		return d;
	}

, 
	dn: function (a) {
		if (this.b4() == null || this.db(this.b4()) < this.db(a)) {
			this.b4(a);
		}
	}

, 
	dp: function (a) {
		this.by().add(a);
	}

, 
	dq: function () {
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
							this.$current =  this.$this.br().df().item(this.$a);
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
							if (this.$a < this.$this.br().df().g()) {
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
		return new $.ig.GenericEnumerable$1($.ig.Object.prototype.$type, $iter);
	}

, 
	dr: function () {
		this.ds();
	}

, 
	ds: function () {
		this.bz(this.dd());
	}

, 
	dt: function () {
		this.bp().x();
	}

, 
	du: function (a) {
		this.bp().aa(a);
	}

, 
	dv: function () {
		this.bp().ab();
	}

, 
	dw: function () {
		this.bp().ad();
	}
,
	$type: new $.ig.Type('AxisLabelPanelBase', $.ig.Panel.prototype.$type)
}, true);


$.ig.util.defType('AutoRangeCalculator', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a) {
		return a.c2().width();
	}

, 
	b: function (a) {
		return a.c2().height();
	}

, 
	c: function (a, b, c, d, e, f, g) {
		f = !isNaN(b) && !Number.isInfinity(b) ? b : Number.POSITIVE_INFINITY;
		g = !isNaN(c) && !Number.isInfinity(c) ? c : Number.NEGATIVE_INFINITY;
		if (Number.isInfinity(f) || Number.isInfinity(g)) {
			if (a != null) {
				var h = a.hj();
				if (h != null) {
					f = Math.min(f, h.c());
					g = Math.max(g, h.d());
				}
			}
		}
		if (!Number.isInfinity(f) && !Number.isInfinity(g)) {
			if (f == g && f != 0) {
				f *= f > 0 ? 0.9 : 1.1;
				g *= g > 0 ? 1.1 : 0.9;
			}
			if (f == g && f == 0) {
				g = 1;
			}
			if (b > c) {
				var i = c;
				c = b;
				b = i;
			}
			var j = isNaN(b) || Number.isInfinity(b) ? f : b;
			var k = isNaN(c) || Number.isInfinity(c) ? g : c;
			if (d) {
				if (j <= 0) {
					if (k > 1) {
						j = 1;

					} else {
						j = Math.pow(e, Math.floor(Math.logBase(k, e)));
					}
				}
				if (isNaN(b) || Number.isInfinity(b)) {
					f = Math.pow(e, Math.floor(Math.logBase(j, e)));

				} else {
					f = j;
				}
				if (isNaN(c) || Number.isInfinity(c)) {
					g = Math.pow(e, Math.ceil(Math.logBase(k, e)));

				} else {
					g = k;
				}

			} else {
				var l = Math.pow(10, Math.floor(Math.log10(k - j)) - 1);
				var m = $.ig.AutoRangeCalculator.prototype.a(a);
				if ($.ig.util.cast($.ig.NumericYAxis.prototype.$type, a) !== null) {
					m = $.ig.AutoRangeCalculator.prototype.b(a);
				}
				if ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, a) !== null && m > 0) {
					var n = (a).im();
					var o = (a).io();
					m = Math.min($.ig.AutoRangeCalculator.prototype.a(a), $.ig.AutoRangeCalculator.prototype.b(a)) * (n - o) / 2;
					m = Math.max(m, 14);
				}
				if (a != null && m > 0 && (!a.hasUserMinimum() && !a.hasUserMaximum())) {
					var p = new $.ig.LinearNumericSnapper(0, f, g, m);
					l = p.h();
				}
				if ((isNaN(b) || Number.isInfinity(b)) && !isNaN(f) && !isNaN(l) && l != 0) {
						f = l * Math.floor(f / l);

				} else {
					f = j;
				}
				if ((isNaN(c) || Number.isInfinity(c)) && !isNaN(g) && !isNaN(l) && l != 0) {
					var q = Math.ceil(g / l);
						g = l * q;

				} else {
					g = k;
				}
			}
		}
		return {
			minimumValue: f,
			maximumValue: g
		};
	}
,
	$type: new $.ig.Type('AutoRangeCalculator', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Axis', 'Control', {

	dl: function () {
		return new $.ig.AxisView(this);
	}

, 
	_cz: null,
	cz: function (a) {
		if (arguments.length === 1) {
			this._cz = a;
			return a;
		} else {
			return this._cz;
		}
	}

, 
	dp: function (a) {
	}

, 
		init: function () {

			var $self = this;
			this.bw = $.ig.Rect.prototype.empty();
			this.bx = false;
			this.b0 = new $.ig.AxisComponentsForView();
			this.b1 = new $.ig.AxisLabelSettings();

			$.ig.Control.prototype.init.call(this);
						this.cz(this.dl());
				this.dp(this.cz());
				this.cz().w();
				this.df((function () { var $ret = new $.ig.Pool$1($.ig.TextBlock.prototype.$type);
				$ret.create($self.cz().ag.on($self.cz()));
				$ret.activate($self.cz().ah.on($self.cz()));
				$ret.disactivate($self.cz().ai.on($self.cz()));
				$ret.destroy($self.cz().aj.on($self.cz())); return $ret;}()));
				this.c3($.ig.Rect.prototype.empty());
				this.c4(new $.ig.List$1($.ig.Object.prototype.$type, 0));
				this.c5(new $.ig.List$1($.ig.LabelPosition.prototype.$type, 0));
				this.c6(this.dr());
				this.c6().br(this);
				this.dc(new $.ig.List$1($.ig.Series.prototype.$type, 0));
				this.a3($.ig.Axis.prototype.$type);
				this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (a, b) { return $self.eg(a, b.propertyName(), b.oldValue(), b.newValue())				});
				this.bu = function (c, d) { return $self.ec(d.oldRect(), d.newRect())				};
				this.cz().a4();
		}
, 
	formatLabel: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.formatLabelProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.formatLabelProperty);
		}
	}

, 
	dq: function (a, b) {
		if (!a.equals(b)) {
			this.d9(a, b);
		}
	}

, 
	dr: function () {
	}

, 
	onApplyTemplate: function () {
		$.ig.Control.prototype.a6.call(this);
		this.cz().ak();
	}

, 
	_rootCanvas: null,
	rootCanvas: function (a) {
		if (arguments.length === 1) {
			this._rootCanvas = a;
			return a;
		} else {
			return this._rootCanvas;
		}
	}

, 
	c0: function (a) {
		if (arguments.length === 1) {
			if (this.c0() != a) {
				var b = this.c0();
				this.bs = a;
				this.ez($.ig.Axis.prototype.a9, b, this.bs);
			}
			return a;
		} else {
			return this.bs;
		}
	}
, 
	bs: null
, 
	seriesViewer: function (a) {
		if (arguments.length === 1) {
			if (this.seriesViewer() != a) {
				var b = this.seriesViewer();
				this.bt = a;
				this.ez($.ig.Axis.prototype.ba, b, this.bt);
			}
			return a;
		} else {
			return this.bt;
		}
	}
, 
	bt: null
, 
	chart: function (a) {
		if (arguments.length === 1) {
			this.seriesViewer(a);
			return a;
		} else {
			return $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
		}
	}
, 
	bu: null
, 
	stroke: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.strokeProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.strokeProperty);
		}
	}

, 
	strokeThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.strokeThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.strokeThicknessProperty);
		}
	}

, 
	strokeDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.strokeDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.strokeDashArrayProperty);
		}
	}

, 
	strip: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.stripProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.stripProperty);
		}
	}

, 
	majorStroke: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.majorStrokeProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.majorStrokeProperty);
		}
	}

, 
	majorStrokeThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.majorStrokeThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.majorStrokeThicknessProperty);
		}
	}

, 
	majorStrokeDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.majorStrokeDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.majorStrokeDashArrayProperty);
		}
	}

, 
	minorStroke: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.minorStrokeProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.minorStrokeProperty);
		}
	}

, 
	minorStrokeThickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.minorStrokeThicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.minorStrokeThicknessProperty);
		}
	}

, 
	minorStrokeDashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.minorStrokeDashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.minorStrokeDashArrayProperty);
		}
	}

, 
	isDisabled: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.isDisabledProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.isDisabledProperty);
		}
	}

, 
	isInverted: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.isInvertedProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.isInvertedProperty);
		}
	}

, 
	_c1: null,
	c1: function (a) {
		if (arguments.length === 1) {
			this._c1 = a;
			return a;
		} else {
			return this._c1;
		}
	}

, 
	labelSettings: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.labelSettingsProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.labelSettingsProperty);
		}
	}

, 
	labelPanelStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.labelPanelStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.labelPanelStyleProperty);
		}
	}

, 
	crossingAxis: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.crossingAxisProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.crossingAxisProperty);
		}
	}

, 
	crossingValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.crossingValueProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.crossingValueProperty);
		}
	}
, 
	rangeChanged: null
, 
	dx: function (a) {
		if (this.rangeChanged != null) {
			this.rangeChanged(this, a);
		}
	}
, 
	bw: null
, 
	c2: function (a) {
		if (arguments.length === 1) {
			this.bw = a;
			return a;
		} else {
			if (this.c3().isEmpty()) {
				return this.bw;
			}
			return this.c3();
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
	d2: function () {
		var a = $.ig.Visibility.prototype.visible;
		var b = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
		if (b != null && b.gridMode() == $.ig.GridMode.prototype.none) {
			a = $.ig.Visibility.prototype.collapsed;
		}
		this.cz().ap(a);
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
	d9: function (a, b) {
		this.c2(b);
		this.c7(true);
		this.updateRange();
		this.es(false);
		if (this.seriesViewer() != null) {
			this.seriesViewer().fc().ag($.ig.ChartContentType.prototype.axis, this, this.c8(), b);
		}
	}
, 
	bx: null
, 
	c7: function (a) {
		if (arguments.length === 1) {
			this.bx = a;
			return a;
		} else {
			return this.bx;
		}
	}

, 
	ec: function (a, b) {
		this.c7(true);
		this.es(true);
	}

, 
	ed: function () {
		this.es(false);
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
	eg: function (a, b, c, d) {
		var $self = this;
		switch (b) {
			case $.ig.Axis.prototype.ba:
				var e = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, c);
				if (e != null) {
					e.windowRectChanged = $.ig.Delegate.prototype.combine(e.windowRectChanged, this.bu);
					e.fc().s($.ig.ChartContentType.prototype.axis, this);
					this.cz().bf(e);
				}
				var f = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, d);
				if (f != null) {
					f.windowRectChanged = $.ig.Delegate.prototype.combine(f.windowRectChanged, this.bu);
					this.c8(f.fc().r($.ig.ChartContentType.prototype.axis, this, this.et.on(this)));
					this.cz().bg(f);
					if (this.db() && !this.c8().m()) {
						this.db(false);
						this.updateRange();
					}
				}
				break;
			case $.ig.Axis.prototype.bl:
				this.es(false);
				break;
			case $.ig.Axis.prototype.bm:
				this.c1(this.isInverted());
				var g = new $.ig.AxisRangeChangedEventArgs(0, 0, 1, 1);
				this.e9(g);
				var i = this.dc().getEnumerator();
				while (i.moveNext()) {
					var h = i.current();
					h.fs();
					if (h.seriesViewer() != null) {
						h.e5();
					}
				}
				break;
			case $.ig.Axis.prototype.br:
				if ($.ig.util.cast($.ig.DataTemplate.prototype.$type, d) !== null) {
					this.da(true);

				} else {
					this.da(false);
				}
				this.c7(true);
				this.ej();
				this.es(false);
				break;
			case $.ig.Axis.prototype.bg:
			case $.ig.Axis.prototype.bj:
			case $.ig.Axis.prototype.bc:
				this.es(false);
				break;
			case $.ig.Axis.prototype.bo:
				this.cz().x(d);
				this.es(false);
				break;
			case $.ig.Axis.prototype.bn:
				var j = $.ig.util.cast($.ig.AxisLabelSettings.prototype.$type, d);
				if (j != null) {
					j.r(this);
					this.b1 = j;

				} else {
					this.b1 = new $.ig.AxisLabelSettings();
				}
				if (this.cz().al()) {
					this.cz().ar(this.b1);
				}
				break;
			case $.ig.Axis.prototype.bi:
				if (d != null) {
					this.c9(true);
					this.es(false);

				} else {
					this.c9(false);
				}
				break;
			case $.ig.Axis.prototype.a7:
			case $.ig.Axis.prototype.bf:
			case $.ig.Axis.prototype.bb:
			case $.ig.Axis.prototype.bd:
			case $.ig.Axis.prototype.bh:
			case $.ig.Axis.prototype.bk:
				this.es(false);
				break;
		}
	}

, 
	_coercionMethods: null,
	coercionMethods: function (a) {
		if (arguments.length === 1) {
			this._coercionMethods = a;
			return a;
		} else {
			return this._coercionMethods;
		}
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
	ej: function () {
		this.df().g(0);
		if (this.cz().al()) {
			this.cz().aq();
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
	em: function (a, b, c, d) {
		var e = Math.min(b, c);
		var f = Math.max(b, c);
		if (e < d.bottom() && f > d.top()) {
			var g = new $.ig.RectangleGeometry();
			g.f(new $.ig.Rect(0, d.left(), e, d.width(), f - e));
			a.add(g);
		}
	}

, 
	en: function (a, b, c) {
		if (b <= c.bottom() && b >= c.top()) {
			var d = new $.ig.LineGeometry();
			d.e({__x: c.left(), __y: b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			d.f({__x: c.right(), __y: b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			a.add(d);
		}
	}

, 
	eo: function (a, b, c, d) {
		var e = Math.min(b, c);
		var f = Math.max(b, c);
		if (f > d.left() && e < d.right()) {
			var g = new $.ig.RectangleGeometry();
			g.f(new $.ig.Rect(0, e, d.top(), f - e, d.height()));
			a.add(g);
		}
	}

, 
	ep: function (a, b, c) {
		if (b >= c.left() && b <= c.right()) {
			var d = new $.ig.LineGeometry();
			d.e({__x: b, __y: c.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			d.f({__x: b, __y: c.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			a.add(d);
		}
	}

, 
	eq: function (a) {
		this.cz().at(a);
	}

, 
	er: function () {
		this.df().g(0);
		this.cz().ao();
		this.c4().clear();
		this.c5().clear();
	}

, 
	renderAxis: function () {
		this.es(false);
	}

, 
	es: function (a) {
		if (this.seriesViewer() != null) {
			this.seriesViewer().fc().u($.ig.ChartContentType.prototype.axis, this, this.c8(), a);
		}
	}

, 
	et: function (a) {
		if (this.cz().bh()) {
			return;
		}
		var b = 0;
		if (this.c5() != null && this.c5().count() > 0) {
			b = this.c5().last$1($.ig.LabelPosition.prototype.$type).b();
		}
		this.ey(a);
		var c = 1;
		if (this.c5() != null && this.c5().count() > 0) {
			c = this.c5().last$1($.ig.LabelPosition.prototype.$type).b();
		}
		if (c != b || this.c7()) {
			this.c7(false);
			if (this.cz().al()) {
				this.cz().am();
			}
		}
		this.cz().be();
		this.eu();
	}

, 
	eu: function () {
		if (!this.cz().al()) {
			return;
		}
		if (!this.e8()) {
			this.cz().an();
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
	updateRange: function () {
		return this.updateRange1(false);
	}

, 
	updateRange1: function (a) {
		if (a || this.seriesViewer() == null) {
			var b = this.ex();
			if (b) {
				this.c7(true);
			}
			this.db(false);
			return b;
		}
		if (!this.db()) {
			this.db(true);
			this.seriesViewer().fc().ah(this, this.c8());
		}
		return false;
	}

, 
	ex: function () {
		return false;
	}

, 
	ey: function (a) {
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	ez: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
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
	registerSeries: function (a) {
		var b = this.dc().contains(a);
		if (!b) {
			this.dc().add(a);
		}
		return !b;
	}

, 
	deregisterSeries: function (a) {
		var b = this.dc().contains(a);
		if (b) {
			this.dc().remove(a);
		}
		return b;
	}

, 
	label: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Axis.prototype.labelProperty, a);
			return a;
		} else {
			return this.b($.ig.Axis.prototype.labelProperty);
		}
	}

, 
	e2: function (a) {
		return this.cz().a5(a);
	}

, 
	getScaledValue: function (a, b) {
		return 0;
	}

, 
	getScaledValue1: function (a, b, c) {
		var d = new $.ig.ScalerParams(b, c, this.isInverted());
		return this.getScaledValue(a, d);
	}

, 
	getScaledValueList: function (a, b, c, d) {
	}

, 
	getUnscaledValue: function (a, b) {
		return 0;
	}

, 
	getUnscaledValue1: function (a, b, c) {
		var d = new $.ig.ScalerParams(b, c, this.isInverted());
		return this.getUnscaledValue(a, d);
	}

, 
	getUnscaledValueList: function (a, b, c, d) {
	}

, 
	scaleValue: function (a) {
		var b = new $.ig.ScalerParams(this.seriesViewer().windowRect(), this.c2(), this.isInverted());
		b.c = this.seriesViewer().effectiveViewport();
		return this.getScaledValue(a, b);
	}

, 
	_dd: null,
	dd: function () {
		return this._dd;	}

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
	e6: function () {
		this.c3(new $.ig.Rect(0, 0, 0, this.de().c(), this.de().d()));
	}
, 
	b0: null
, 
	e7: function () {
		this.b0.b(this.c6());
		return this.b0;
	}

, 
	e8: function () {
		if (this.labelSettings() == null) {
			return false;

		} else {
			return this.labelSettings().z();
		}
	}

, 
	e9: function (a) {
		this.dx(a);
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
	dg: function () {
			return this.fh().e();
	}

, 
	dh: function () {
			return this.fh().f();
	}

, 
	di: function () {
			return this.cz().as().g();
	}

, 
	dj: function () {
			return this.fh().h();
	}

, 
	fg: function () {
		return $.ig.SyncManager.prototype.e(this.bt);
	}

, 
	fh: function () {
		return this.cz().as();
	}
, 
	b1: null
, 
	dk: function () {
			return this.b1;
	}

, 
	fj: function (a, b) {
		if (this.c6() != null) {
			this.c6().du(a);
		}
		this.cz().ba(a, b);
	}

, 
	fk: function () {
		return false;
	}

, 
	exportVisualData: function () {
		var $self = this;
		var a = new $.ig.AxisVisualData();
		a.viewport(this.c2());
		a.type(this.getType().typeName());
		a.name(this.name());
		a.axisLine(new $.ig.PathVisualData(1, "axisLine", this.cz().n()));
		a.minorLines(new $.ig.PathVisualData(1, "minorLines", this.cz().q()));
		a.majorLines(new $.ig.PathVisualData(1, "majorLines", this.cz().o()));
		for (var b = 0; b < this.c6().bt().count(); b++) {
			var c = this.c6().bt().__inner[b];
			var d = this.c6().bs().__inner[b];
			var e = (function () { var $ret = new $.ig.AxisLabelVisualData();
$ret.labelPosition(c.b());
$ret.labelValue(d); return $ret;}());
			e.appearance($.ig.AppearanceHelper.prototype.fromTextElement(this.c6().by().__inner[b]));
			a.labels().add(e);
		}
		return a;
	}

, 
	fl: function () {
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
							this.$b = this.$this.dc().__inner[this.$a];
							this.$current =  this.$b;
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
							if (this.$a < this.$this.dc().count()) {
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
		return new $.ig.GenericEnumerable$1($.ig.Series.prototype.$type, $iter);
	}
,
	$type: new $.ig.Type('Axis', $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('AxisCollection', 'ObservableCollection$1', {

		init: function () {

			var $self = this;

			$.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Axis.prototype.$type);
						this.propertyChanged = $.ig.Delegate.prototype.combine(this.propertyChanged, function (a, b) {
					if (b.propertyName() == "Name") {
						for (var c = 0; c < $self.count(); ++c) {
							if ($self.__inner[c].name() == b.propertyName()) {
								$self.ah(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, $self.__inner[c], $self.__inner[c], c));
							}
						}
					}
				});
		}, 
	collectionResetting: null
, 
	m: function () {
		if (this.collectionResetting != null) {
			this.collectionResetting(this, null);
		}
		$.ig.ObservableCollection$1.prototype.m.call(this);
	}
,
	$type: new $.ig.Type('AxisCollection', $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Axis.prototype.$type))
}, true);

$.ig.util.defType('AxisComponentsForView', 'Object', {
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
	$type: new $.ig.Type('AxisComponentsForView', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AxisComponentsFromView', 'Object', {
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
	$type: new $.ig.Type('AxisComponentsFromView', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('AxisLabelManager', 'Object', {

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
		init: function () {

			var $self = this;

			$.ig.Object.prototype.init.call(this);
						this.k(function (a) {
				});
		}
, 
	w: function (a, b) {
		this.g().clear();
		this.h().clear();
		this.i().br(this.j());
		this.i().bw(a);
		this.i().bu(b);
		if (b.isEmpty() || a.isEmpty()) {
			this.ae(0);
		}
		if (this.j().df().g() == 0) {
			this.i().a3().clear();
		}
	}

, 
	x: function (a, b) {
		this.g().add1(a);
		this.h().add(b);
	}

, 
	y: function () {
		this.i().bs(this.g());
		this.i().bt(this.h());
	}

, 
	z: function (a) {
	}

, 
	aa: function (a) {
		this.i().a3().add(a);
	}

, 
	ab: function (a) {
		this.i().bq(a);
	}

, 
	ac: function (a) {
		this.k()(a);
	}

, 
	ad: function (a) {
		var b = this.j().df().item(a);
		return b;
	}

, 
	ae: function (a) {
		this.j().df().g(a);
	}

, 
	l: function () {
			if (this.j().labelSettings() == null) {
				return false;
			}
			return this.j().labelSettings().visibility() != $.ig.Visibility.prototype.visible;
	}

, 
	ag: function () {
		this.j().df().g(0);
		this.j().c6().by().clear();
	}
,
	$type: new $.ig.Type('AxisLabelManager', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LabelPosition', 'Object', {

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
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.b(a);
		},
	$type: new $.ig.Type('LabelPosition', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AxisLabelSettings', 'Object', {

		init: function () {

			var $self = this;
			this.h = null;
			this.i = $.ig.AxisLabelsLocation.prototype.outsideBottom;
			this.j = $.ig.Visibility.prototype.visible;
			this.k = 0;
			this.l = NaN;

			$.ig.Object.prototype.init.call(this);
						this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (a, b) { return $self.x(a, b.propertyName(), b.oldValue(), b.newValue())				});
		}, 
	g: null
, 
	textStyle: function (a) {
		if (arguments.length === 1) {
			var b = this.g;
			this.g = a;
			this.w($.ig.AxisLabelSettings.prototype.a, b, a);
			return a;
		} else {
			return this.g;
		}
	}
, 
	h: null
, 
	textColor: function (a) {
		if (arguments.length === 1) {
			var b = this.h;
			this.h = a;
			this.w($.ig.AxisLabelSettings.prototype.b, b, a);
			return a;
		} else {
			return this.h;
		}
	}

, 
	location: function (a) {
		if (arguments.length === 1) {
			var b = this.i;
			this.i = a;
			this.w($.ig.AxisLabelSettings.prototype.c, b, a);
			return a;
		} else {
			return this.i;
		}
	}
, 
	i: null
, 
	visibility: function (a) {
		if (arguments.length === 1) {
			var b = this.j;
			this.j = a;
			this.w($.ig.AxisLabelSettings.prototype.d, b, a);
			return a;
		} else {
			return this.j;
		}
	}
, 
	j: null
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
	angle: function (a) {
		if (arguments.length === 1) {
			var b = this.k;
			this.k = a;
			this.w($.ig.AxisLabelSettings.prototype.e, b, a);
			return a;
		} else {
			return this.k;
		}
	}
, 
	k: null
, 
	extent: function (a) {
		if (arguments.length === 1) {
			var b = this.l;
			this.l = a;
			this.w($.ig.AxisLabelSettings.prototype.f, b, a);
			return a;
		} else {
			return this.l;
		}
	}
, 
	l: null, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	w: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}

, 
	x: function (a, b, c, d) {
		switch (b) {
			case $.ig.AxisLabelSettings.prototype.c:
				this.q(this.location());
				break;
		}
		if (this.r() == null || this.r().chart() == null) {
			return;
		}
		switch (b) {
			case $.ig.AxisLabelSettings.prototype.e:
				this.r().c7(true);
				this.r().renderAxis();
				break;
			case $.ig.AxisLabelSettings.prototype.c:
				this.r().c7(true);
				if (this.r().seriesViewer() != null) {
					this.r().seriesViewer().ic();
				}
				this.r().renderAxis();
				break;
			case $.ig.AxisLabelSettings.prototype.f:
				this.r().c7(true);
				if (this.r().seriesViewer() != null) {
					this.r().seriesViewer().ic();
				}
				this.r().renderAxis();
				break;
			case $.ig.AxisLabelSettings.prototype.d:
				this.r().c7(true);
				if (this.r().seriesViewer() != null) {
					this.r().seriesViewer().ic();
				}
				this.r().renderAxis();
				break;
			case $.ig.AxisLabelSettings.prototype.a:
				this.r().c7(true);
				if (this.r().seriesViewer() != null) {
					this.r().seriesViewer().ic();
				}
				this.r().renderAxis();
				break;
			case $.ig.AxisLabelSettings.prototype.b:
				this.r().renderAxis();
				break;
		}
	}

, 
	y: function () {
		return this.k != 0;
	}

, 
	z: function () {
		return !isNaN(this.l);
	}
,
	$type: new $.ig.Type('AxisLabelSettings', $.ig.Object.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('AxisRange', 'Object', {

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
	equals: function (a) {
		return a != null && this.c() == a.c() && this.d() == a.d();
	}

, 
	equals1: function (a) {
		return this.equals($.ig.util.cast($.ig.AxisRange.prototype.$type, a));
	}

, 
	getHashCode: function () {
		return $.ig.Object.prototype.getHashCode.call(this);
	}
,
	$type: new $.ig.Type('AxisRange', $.ig.Object.prototype.$type, [$.ig.IEquatable$1.prototype.$type.specialize($.ig.AxisRange.prototype.$type)])
}, true);

$.ig.util.defType('Snapper', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	b: function (a, b) {
		var c = 1;
		if (b > 0) {
			for (; b > 0; --b) {
				c *= a;
			}

		} else {
			for (; b < 0; ++b) {
				c /= a;
			}
		}
		return c;
	}

, 
	c: function (a, b) {
		var c = Math.floor(Math.log10(a));
		var d = a / Math.pow(10, c);
		if (b) {
			var e = d < 1.5 ? 1 : d < 3 ? 2 : d < 7 ? 5 : 10;
			return e * Math.pow(10, c);

		} else {
			var f = d <= 1 ? 1 : d <= 2 ? 2 : d <= 5 ? 5 : 10;
			return f * Math.pow(10, c);
		}
	}

, 
	d: function (a, b) {
		var c = $.ig.Date.prototype.zero;
		if (a.totalDays() > 1) {
			c = $.ig.Date.prototype.fromDays(Math.ceil(a.totalDays()));
		} else if (a.totalHours() > 1) {
			c = $.ig.Date.prototype.fromHours(Math.ceil(a.totalHours()));
		} else if (a.totalMinutes() > 1) {
			c = $.ig.Date.prototype.fromMinutes(Math.ceil(a.totalMinutes()));
		} else if (a.totalSeconds() > 1) {
			c = $.ig.Date.prototype.fromSeconds(Math.ceil(a.totalSeconds()));
		} else if (a.totalMilliseconds() > 1) {
			c = $.ig.Date.prototype.fromMilliseconds(Math.ceil(a.totalMilliseconds()));
		}
		return c;
	}
,
	$type: new $.ig.Type('Snapper', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LinearNumericSnapper', 'Snapper', {

		init: function (initNumber, a, b, c) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.Snapper.prototype.init.call(this);
						this.k(a, b, c, 10);
		}
, 
		init1: function (initNumber, a, b, c, d) {


			$.ig.Snapper.prototype.init.call(this);
						this.k(a, b, c, d);
		}
, 
	k: function (a, b, c, d) {
		this.h(NaN);
		this.i(0);
		this.j(0);
		var e = Math.min(d, (c / $.ig.LinearNumericSnapper.prototype.a));
		if (e > 0) {
			var f = $.ig.LinearNumericSnapper.prototype.c(b - a, false);
			this.h($.ig.LinearNumericSnapper.prototype.c(f / (e - 1), true));
			var g = Math.floor(a / this.h()) * this.h();
			var h = Math.ceil(b / this.h()) * this.h();
			e = Math.round((h - g) / this.h());
			if (c / e > $.ig.LinearNumericSnapper.prototype.a * 10) {
				this.j(10);

			} else {
				if (c / e > $.ig.LinearNumericSnapper.prototype.a * 5) {
					this.j(5);

				} else {
					if (c / e > $.ig.LinearNumericSnapper.prototype.a * 2) {
						this.j(2);
					}
				}
			}
			this.i(Math.max(-Math.floor(Math.log10(this.h())), 0));
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
	$type: new $.ig.Type('LinearNumericSnapper', $.ig.Snapper.prototype.$type)
}, true);

$.ig.util.defType('LogarithmicNumericSnapper', 'Snapper', {

		init: function (a, b, c, d) {


			$.ig.Snapper.prototype.init.call(this);
						this.g(1);
				this.h(c);
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
	$type: new $.ig.Type('LogarithmicNumericSnapper', $.ig.Snapper.prototype.$type)
}, true);

$.ig.util.defType('LinearCategorySnapper', 'Snapper', {

		init: function (initNumber, a, b, c) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.LinearCategorySnapper.prototype.init1.call(this, 1, a, b, c, NaN, $.ig.CategoryMode.prototype.mode0);
		}
, 
		init1: function (initNumber, a, b, c, d, e) {


			$.ig.Snapper.prototype.init.call(this);
						this.g(d);
				this.h(0);
				var f = Math.min(10, (c / $.ig.LinearCategorySnapper.prototype.a));
				if (f > 0) {
					var g = $.ig.LinearCategorySnapper.prototype.c(b - a, false);
					if (isNaN(this.g())) {
						this.g($.ig.LinearCategorySnapper.prototype.c(g / (f - 1), true));
					}
					if (this.g() < 1) {
						this.g(1);
					}
					var h = Math.floor(a / this.g()) * this.g();
					var i = Math.ceil(b / this.g()) * this.g();
					f = Math.round((i - h) / this.g());
					if (c / f > $.ig.LinearCategorySnapper.prototype.a * 10) {
						this.h(10);

					} else {
						if (c / f > $.ig.LinearCategorySnapper.prototype.a * 5) {
							this.h(5);

						} else {
							if (c / f > $.ig.LinearCategorySnapper.prototype.a * 2) {
								this.h(2);
							}
						}
					}
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
	$type: new $.ig.Type('LinearCategorySnapper', $.ig.Snapper.prototype.$type)
}, true);

$.ig.util.defType('AxisView', 'Object', {

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
		init: function (a) {

			this.a = new $.ig.AxisComponentsFromView();
			this.c = false;
			this.d = $.ig.Rect.prototype.empty();

			$.ig.Object.prototype.init.call(this);
						this.m(a);
				this.b = new $.ig.Rectangle();
		}
, 
	w: function () {
		var $self = this;
		this.n((function () { var $ret = new $.ig.Path();
		$ret.bp(new $.ig.GeometryGroup()); return $ret;}()));
		this.p((function () { var $ret = new $.ig.Path();
		$ret.bp(new $.ig.GeometryGroup());
		$ret.a6(false);
		$ret.__stroke = null; return $ret;}()));
		this.o((function () { var $ret = new $.ig.Path();
		$ret.bp(new $.ig.GeometryGroup());
		$ret.a6(false); return $ret;}()));
		this.q((function () { var $ret = new $.ig.Path();
		$ret.bp(new $.ig.GeometryGroup());
		$ret.a6(false); return $ret;}()));
		this.m().majorStrokeThickness(1);
		this.m().strokeThickness(1);
	}

, 
	x: function (a) {
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
	ag: function () {
		var a = new $.ig.TextBlock();
		return a;
	}

, 
	ah: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
		if (a.aa() == null) {
			this.m().c6().a3().add(a);
		}
	}

, 
	ai: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	aj: function (a) {
		if (this.m().c6().a3().contains(a)) {
			this.m().c6().a3().remove(a);
		}
	}

, 
	ak: function () {
	}

, 
	al: function () {
		return true;
	}

, 
	index: function () {
			var b = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.m().chart());
			var c = 0;
			if (b == null) {
				return 0;
			}
			if (b != null && b.gridMode() == $.ig.GridMode.prototype.beforeSeries) {
				c = b.series().count();
			}
			return c + b.axes().indexOf(this.m());
	}

, 
	am: function () {
		this.r().dt();
		this.r().dv();
	}

, 
	an: function () {
		this.r().dr();
	}

, 
	ao: function () {
		if (this.r() != null) {
			this.r().a3().clear();
		}
		this.at(($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.n().bp())).d());
		this.at(($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.p().bp())).d());
		this.at(($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.o().bp())).d());
		this.at(($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.q().bp())).d());
		this.bb();
	}

, 
	ap: function (a) {
		this.n().__visibility = a;
		this.o().__visibility = a;
		this.p().__visibility = a;
		this.q().__visibility = a;
	}

, 
	aq: function () {
	}

, 
	ar: function (a) {
		this.m().c7(true);
		if (this.m().seriesViewer() != null) {
			this.m().seriesViewer().ic();
		}
		this.m().renderAxis();
	}
, 
	a: null
, 
	as: function () {
		this.a.e(this.n());
		this.a.f(this.o());
		this.a.h(this.q());
		this.a.g(this.p());
		return this.a;
	}

, 
	at: function (a) {
		if (a != null) {
			a.clear();
		}
	}

, 
	au: function () {
		return ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.n().bp())).d();
	}

, 
	av: function () {
		return ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.p().bp())).d();
	}

, 
	aw: function () {
		return ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.o().bp())).d();
	}

, 
	ax: function () {
		return ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.q().bp())).d();
	}

, 
	r: function () {
			return this.m().e7().b();
	}

, 
	az: function (a, b, c) {
		this.r().br(a);
		this.r().bw(b);
		this.r().bu(c);
		this.bb();
	}

, 
	a0: function () {
		this.r().a3().clear();
		this.bb();
	}

, 
	a1: function (a) {
		this.r().bq(a);
		this.bb();
	}

, 
	a2: function (a, b) {
		this.r().bs(a);
		this.r().bt(b);
	}

, 
	a3: function (a) {
		this.r().bx(a);
	}

, 
	a4: function () {
	}

, 
	a5: function (dataItem_) {
		if (this.m().formatLabel() != null) {
			return this.m().formatLabel()(dataItem_);
		}
		var label_ = this.m().label();
		return (typeof dataItem_[label_] != 'undefined') ? dataItem_[label_] : label_;;
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
	ba: function (a, b) {
		this.t(a);
		this.s(b);
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
	bb: function () {
		if (this.m().chart() == null) {
			return;
		}
		if (!this.isDirty()) {
			this.isDirty(true);
			this.m().chart().canvasRenderScheduler().o();
		}
	}

, 
	undirty: function (a) {
		this.isDirty(false);
		this.bc(a);
	}
, 
	b: null, 
	c: null
, 
	bc: function (a) {
		if (this.t() == null) {
			return;
		}
		if (this.t().b()) {
			var b = this.d;
			var c = this.m().chart().getContainerRect();
			if (!b.isEmpty() && a) {
				this.t().t(c.left(), c.top(), c.width(), c.height());
			}
			if (a) {
				if (this.m().seriesViewer().plotAreaBackground() != null) {
					this.b.x(this.m().c2().top());
					this.b.y(this.m().c2().left());
					this.b.v(this.m().c2().width());
					this.b.w(this.m().c2().height());
					this.b.__fill = this.m().seriesViewer().plotAreaBackground();
					if (this.c) {
						this.t().e($.ig.GradientDirection.prototype.bottomTop, this.m().c2());
					}
					this.t().f(this.b);
				}
			}
			this.t().o();
			this.t().q(this.m().c2());
			this.bd();
			this.t().p();
		}
		if (this.s().b()) {
			var d = this.d;
			var e = this.m().chart().getContainerRect();
			if (!d.isEmpty() && a) {
				this.s().t(e.left(), e.top(), e.width(), e.height());
			}
		}
	}

, 
	postRender: function () {
		this.r().dw();
	}
, 
	d: null
, 
	bd: function () {
		if (this.t().b()) {
			if (this.m().stroke() == null) {
				this.n().__stroke = this.m().chart().is();

			} else {
				this.n().__stroke = this.m().stroke();
			}
			this.p().__fill = this.m().strip();
			this.q().__stroke = this.m().minorStroke();
			if (this.m().majorStroke() == null) {
				this.o().__stroke = this.m().chart().is();

			} else {
				this.o().__stroke = this.m().majorStroke();
			}
			this.q().a7(this.m().minorStrokeThickness());
			this.o().a7(this.m().majorStrokeThickness());
			this.n().a7(this.m().strokeThickness());
			this.q().a8(this.m().minorStrokeDashArray());
			this.o().a8(this.m().majorStrokeDashArray());
			this.n().a8(this.m().strokeDashArray());
			this.d = this.m().c2();
			if (this.c) {
				this.t().e($.ig.GradientDirection.prototype.bottomTop, null);
			}
			this.t().g(this.n());
			this.t().g(this.p());
			this.t().g(this.o());
			this.t().g(this.q());
		}
	}

, 
	be: function () {
		this.bb();
	}

, 
	bf: function (a) {
		if (a != null) {
			a.canvasRenderScheduler().n(this);
		}
	}

, 
	bg: function (a) {
		if (a != null) {
			a.canvasRenderScheduler().m(this);
			this.bb();
		}
	}

, 
	bh: function () {
		return this.t() == null;
	}
,
	$type: new $.ig.Type('AxisView', $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type])
}, true);

$.ig.util.defType('IScaler', 'Object', {

		$type: new $.ig.Type('IScaler', null)
}, true);

$.ig.util.defType('ICategoryScaler', 'Object', {

		$type: new $.ig.Type('ICategoryScaler', null, [$.ig.IScaler.prototype.$type])
}, true);

$.ig.util.defType('CategoryAxisBase', 'Axis', {

	dl: function () {
		return new $.ig.CategoryAxisBaseView(this);
	}

, 
	dp: function (a) {
		$.ig.Axis.prototype.dp.call(this, a);
		this.gm(a);
	}

, 
	_gm: null,
	gm: function (a) {
		if (arguments.length === 1) {
			this._gm = a;
			return a;
		} else {
			return this._gm;
		}
	}

, 
		init: function () {

			this.gf = 0;
			this.gg = false;

			$.ig.Axis.prototype.init.call(this);
		}
, 
	gr: function () {
		if (this.gn() != null && this.c0() != null && this.itemsSource() != null) {
			this.gn(this.c0().releaseFastItemsSource(this.itemsSource()));
		}
	}

, 
	gs: function () {
		if (this.gn() == null && this.c0() != null && this.itemsSource() != null) {
			this.gn(this.c0().getFastItemsSource(this.itemsSource()));
		}
	}

, 
	gn: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryAxisBase.prototype.fastItemsSourceProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryAxisBase.prototype.fastItemsSourceProperty);
		}
	}
, 
	gd: null
, 
	itemsSource: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryAxisBase.prototype.itemsSourceProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryAxisBase.prototype.itemsSourceProperty);
		}
	}

, 
	itemsCount: function () {
			return this.gd == null ? 0 : this.gd.g();
	}

, 
	categoryMode: function (a) {
		if (arguments.length === 1) {
			if (this.ge != a) {
				var b = this.ge;
				this.ge = a;
				this.ez($.ig.CategoryAxisBase.prototype.f9, b, a);
			}
			return a;
		} else {
			return this.ge;
		}
	}
, 
	ge: null
, 
	gap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryAxisBase.prototype.gapProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryAxisBase.prototype.gapProperty);
		}
	}

, 
	overlap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryAxisBase.prototype.overlapProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryAxisBase.prototype.overlapProperty);
		}
	}

, 
	go: function (a) {
		if (arguments.length === 1) {
			if (a != this.gf) {
				var b = this.gf;
				this.gf = a;
				this.ez($.ig.CategoryAxisBase.prototype.gc, b, this.gf);
			}
			return a;
		} else {
			return this.gf;
		}
	}
, 
	gf: null
, 
	getUnscaledValue: function (a, b) {
		return NaN;
	}

, 
	gy: function (a, b, c, d) {
		return NaN;
	}

, 
	getCategorySize: function (a, b) {
		return NaN;
	}

, 
	gz: function (a, b) {
		return NaN;
	}

, 
	getGroupCenter: function (a, b, c) {
		return NaN;
	}

, 
	unscaleValue: function (a) {
		var b = this.seriesViewer().windowRect();
		var c = this.c2();
		var d = new $.ig.ScalerParams(b, c, this.isInverted());
		return this.getUnscaledValue(a, d);
	}

, 
	g0: function () {
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
							this.$b = this.$this.dc().getEnumerator();
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
							this.$state = 6;
							break;
						case 6:
							if (this.$this.seriesViewer() != null && this.$this.seriesViewer().fl() && this.$this.g2(this.$this.seriesViewer())) {
								this.$state = 7;
							}
							else {
								this.$state = 20;
							}
							break;

						case 7:
							this.$state = 8;
							break;
						case 8:
							this.$d = this.$this.seriesViewer().h1().getEnumerator();
							this.$state = 18;
							break;
						case 9:
							this.$c = this.$d.current();
							this.$state = 10;
							break;
						case 10:
							if (this.$c != this.$this.seriesViewer()) {
								this.$state = 11;
							}
							else {
								this.$state = 17;
							}
							break;

						case 11:
							this.$state = 12;
							break;
						case 12:
							this.$f = this.$c.series().getEnumerator();
							this.$state = 15;
							break;
						case 13:
							this.$e = this.$f.current();
							this.$current =  this.$e;
							this.$state = 14
							return true;
						case 14:
							this.$state = 15;
							break;
						case 15:
							if (this.$f.moveNext()) {
								this.$state = 13;
							}
							else {
								this.$state = 16;
							}
							break;

						case 16:
							this.$state = 17;
							break;

						case 17:
							this.$state = 18;
							break;
						case 18:
							if (this.$d.moveNext()) {
								this.$state = 9;
							}
							else {
								this.$state = 19;
							}
							break;

						case 19:
							this.$state = 20;
							break;

						case 20:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } () };
		return new $.ig.GenericEnumerable$1($.ig.Series.prototype.$type, $iter);
	}

, 
	g1: function (a) {
		return this.dc().contains(a);
	}

, 
	g2: function (a) {
		return false;
	}

, 
	g3: function () {
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
							this.$a = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.$this.seriesViewer());
							this.$state = 1;
							break;
						case 1:
							if (this.$a != null && this.$a.fl() && this.$this.g2(this.$a)) {
								this.$state = 2;
							}
							else {
								this.$state = 18;
							}
							break;

						case 2:
							this.$state = 3;
							break;
						case 3:
							this.$c = this.$a.h1().getEnumerator();
							this.$state = 16;
							break;
						case 4:
							this.$b = this.$c.current();
							this.$state = 5;
							break;
						case 5:
							if (this.$b != this.$this.seriesViewer()) {
								this.$state = 6;
							}
							else {
								this.$state = 15;
							}
							break;

						case 6:
							this.$state = 7;
							break;
						case 7:
							this.$e = this.$a.axes().getEnumerator();
							this.$state = 13;
							break;
						case 8:
							this.$d = this.$e.current();
							this.$state = 9;
							break;
						case 9:
							if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.$d) !== null) {
								this.$state = 10;
							}
							else {
								this.$state = 12;
							}
							break;

						case 10:
							this.$current =  $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.$d);
							this.$state = 11
							return true;
						case 11:
							this.$state = 12;
							break;

						case 12:
							this.$state = 13;
							break;
						case 13:
							if (this.$e.moveNext()) {
								this.$state = 8;
							}
							else {
								this.$state = 14;
							}
							break;

						case 14:
							this.$state = 15;
							break;

						case 15:
							this.$state = 16;
							break;
						case 16:
							if (this.$c.moveNext()) {
								this.$state = 4;
							}
							else {
								this.$state = 17;
							}
							break;

						case 17:
							this.$state = 18;
							break;

						case 18:
							this.$state = -2;
							break;
						case -2:
							return false;
					}
				} while (this.$state > 0);
			}
		}; } () };
		return new $.ig.GenericEnumerable$1($.ig.CategoryAxisBase.prototype.$type, $iter);
	}
, 
	gg: null
, 
	g4: function () {
		if (this.gg) {
			return;
		}
		try {
				this.gg = true;
				var a = $.ig.CategoryMode.prototype.mode0;
				var b = 0;
				var c = false;
				var e = this.g0().getEnumerator();
				while (e.moveNext()) {
					var d = e.current();
					var f = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, d);
					if (f != null) {
						var g = f.preferredCategoryMode(this);
						if (g == $.ig.CategoryMode.prototype.mode2) {
							a = $.ig.CategoryMode.prototype.mode2;
							c = true;
							if (this.g1(d)) {
								b++;
							}
						}
						if (g == $.ig.CategoryMode.prototype.mode1 && !c) {
							a = $.ig.CategoryMode.prototype.mode1;
						}
					}
				}
				var i = this.g3().getEnumerator();
				while (i.moveNext()) {
					var h = i.current();
					h.g4();
				}
				this.categoryMode(a);
				this.go(b);

		}
		finally {
				this.gg = false;

		}	}

, 
	eg: function (a, b, c, d) {
		var $self = this;
		$.ig.Axis.prototype.eg.call(this, a, b, c, d);
		switch (b) {
			case $.ig.CategoryAxisBase.prototype.a9:
				if (($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, c)) != null) {
					this.gn(($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, c)).releaseFastItemsSource(this.itemsSource()));
				}
				if (($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, d)) != null) {
					this.gn(($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, d)).getFastItemsSource(this.itemsSource()));
				}
				this.g4();
				break;
			case $.ig.CategoryAxisBase.prototype.f7:
				if (this.c0() != null) {
					this.gn(this.c0().getFastItemsSource(this.itemsSource()));
				}
				break;
			case $.ig.CategoryAxisBase.prototype.f6:
				var e = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, c);
				this.g8();
				this.c7(true);
				if (e != null) {
					e.event = $.ig.Delegate.prototype.remove(e.event, this.g5.on(this));
				}
				if (this.gn() != null) {
					this.gn().event = $.ig.Delegate.prototype.combine(this.gn().event, this.g5.on(this));
					this.es(false);
					var g = this.fl().getEnumerator();
					while (g.moveNext()) {
						var f = g.current();
						f.renderSeries(false);
						if (f.seriesViewer() != null) {
							f.e5();
						}
					}

				} else {
					this.er();
					var i = this.fl().getEnumerator();
					while (i.moveNext()) {
						var h = i.current();
						h.eu(true, h.view());
						if (h.seriesViewer() != null) {
							h.e5();
						}
					}
				}
				break;
			case $.ig.CategoryAxisBase.prototype.f8:
				this.dx(new $.ig.AxisRangeChangedEventArgs(0, 0, (c) - 1, (d) - 1));
				this.es(false);
				break;
			case $.ig.CategoryAxisBase.prototype.f9:
				this.c7(true);
				this.es(false);
				this.g7();
				var k = this.fl().getEnumerator();
				while (k.moveNext()) {
					var j = k.current();
					var l = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, j);
					if (l != null && l.preferredCategoryMode(this) == c) {
						j.renderSeries(false);
					}
				}
				break;
			case $.ig.CategoryAxisBase.prototype.gb:
			case $.ig.CategoryAxisBase.prototype.ga:
				this.c7(true);
				var n = this.fl().getEnumerator();
				while (n.moveNext()) {
					var m = n.current();
					m.dv(true);
					var o = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, m);
					if (o != null && o.preferredCategoryMode(this) == $.ig.CategoryMode.prototype.mode2) {
						m.renderSeries(false);
					}
				}
				this.es(false);
				if (this.seriesViewer() != null) {
					this.seriesViewer().i8();
				}
				break;
			case $.ig.CategoryAxisBase.prototype.bq:
			case $.ig.CategoryAxisBase.prototype.bp:
				this.c7(true);
				this.es(true);
				break;
		}
	}

, 
	g5: function (a, b) {
		switch (b.action()) {
			case $.ig.FastItemsSourceEventAction.prototype.change:
			case $.ig.FastItemsSourceEventAction.prototype.remove:
			case $.ig.FastItemsSourceEventAction.prototype.insert:
			case $.ig.FastItemsSourceEventAction.prototype.replace:
			case $.ig.FastItemsSourceEventAction.prototype.reset:
				this.es(false);
				break;
		}
	}

, 
	g6: function () {
		var a = false		,b = false;
		var d = this.dc().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			var e = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, c);
			if (e == null) {
				continue;
			}
			var f = e.preferredCategoryMode(this);
			a |= f == $.ig.CategoryMode.prototype.mode1;
			b |= f == $.ig.CategoryMode.prototype.mode2;
		}
		this.categoryMode(b ? $.ig.CategoryMode.prototype.mode2 : a ? $.ig.CategoryMode.prototype.mode1 : $.ig.CategoryMode.prototype.mode0);
	}

, 
	registerSeries: function (a) {
		var b = $.ig.Axis.prototype.registerSeries.call(this, a);
		if (b) {
			this.g4();
			var c = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, a);
			if (c != null && c.preferredCategoryMode(this) == $.ig.CategoryMode.prototype.mode2) {
				var e = this.fl().getEnumerator();
				while (e.moveNext()) {
					var d = e.current();
					var f = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, d);
					if (f != null && f != c && f.preferredCategoryMode(this) == $.ig.CategoryMode.prototype.mode2) {
						d.renderSeries(false);
					}
				}
			}
			this.es(false);
			this.updateRange();
		}
		return b;
	}

, 
	deregisterSeries: function (a) {
		var b = $.ig.Axis.prototype.deregisterSeries.call(this, a);
		if (b) {
			this.g4();
			var c = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, a);
			if (c != null && c.preferredCategoryMode(this) != $.ig.CategoryMode.prototype.mode0) {
				var e = this.fl().getEnumerator();
				while (e.moveNext()) {
					var d = e.current();
					var f = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, d);
					if (f != null) {
						d.renderSeries(false);
					}
				}
			}
			this.es(false);
		}
		return b;
	}

, 
	g7: function () {
		var a = null;
		var c = this.fl().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			var d = $.ig.util.cast($.ig.CategorySeries.prototype.$type, b);
			if (d != null) {
				var e = d.jb();
				if (e != null && e.crossingAxis() == this) {
					a = e;
				}
			}
		}
		if (a != null) {
			a.renderAxis();
		}
	}



, 
	g8: function () {
		this.gd = this.gn();
	}

, 
	g9: function () {
		var c = this.labelSettings();
		if (c == null) {
			c = new $.ig.AxisLabelSettings();
		}
		if (c.visibility() == $.ig.Visibility.prototype.collapsed) {
			this.df().g(0);

		} else {
			var d = 0;
			d = this.gm().bm(this.c4());
			this.df().g(d);
		}
	}

, 
	handleCollectionChanged: function (e) {
		if (this.gn() != null) {
			this.gn().ae(e);
		}
	}

, 
	notifySetItem: function (f, g, h) {
		this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, h, g, f));
	}

, 
	notifyClearItems: function () {
		this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset));
	}

, 
	notifyInsertItem: function (i, j) {
		this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, j, i));
	}

, 
	notifyRemoveItem: function (k, l) {
		this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, l, k));
	}
,
	$type: new $.ig.Type('CategoryAxisBase', $.ig.Axis.prototype.$type, [$.ig.ICategoryScaler.prototype.$type])
}, true);



$.ig.util.defType('CategoryAxisBaseView', 'AxisView', {

	_bj: null,
	bj: function (a) {
		if (arguments.length === 1) {
			this._bj = a;
			return a;
		} else {
			return this._bj;
		}
	}

, 
		init: function (a) {


			$.ig.AxisView.prototype.init.call(this, a);
						this.bj(a);
		}
, 
	bm: function (a) {
		var b = 0;
		for (var c = 0; c < a.count(); c++) {
			var d = $.ig.util.cast($.ig.FrameworkElement.prototype.$type, a.__inner[c]);
			if (d == null) {
				d = this.m().df().item(c);
				($.ig.util.cast($.ig.TextBlock.prototype.$type, d)).a5(a.__inner[c].toString());
				b++;

			} else {
				this.r().a3().add(d);
			}
		}
		return b;
	}
,
	$type: new $.ig.Type('CategoryAxisBaseView', $.ig.AxisView.prototype.$type)
}, true);


$.ig.util.defType('ISortingAxis', 'Object', {

		$type: new $.ig.Type('ISortingAxis', null)
}, true);



$.ig.util.defType('AxisRenderingParametersBase', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.t(new $.ig.List$1($.ig.RangeInfo.prototype.$type, 0));
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
	$type: new $.ig.Type('AxisRenderingParametersBase', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('CategoryAxisRenderingParameters', 'AxisRenderingParametersBase', {
	init: function () {

		$.ig.AxisRenderingParametersBase.prototype.init.call(this);

	}
, 
	_bl: null,
	bl: function (a) {
		if (arguments.length === 1) {
			this._bl = a;
			return a;
		} else {
			return this._bl;
		}
	}

, 
	_bm: null,
	bm: function (a) {
		if (arguments.length === 1) {
			this._bm = a;
			return a;
		} else {
			return this._bm;
		}
	}

, 
	_bn: null,
	bn: function (a) {
		if (arguments.length === 1) {
			this._bn = a;
			return a;
		} else {
			return this._bn;
		}
	}

, 
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
	_bp: null,
	bp: function (a) {
		if (arguments.length === 1) {
			this._bp = a;
			return a;
		} else {
			return this._bp;
		}
	}
,
	$type: new $.ig.Type('CategoryAxisRenderingParameters', $.ig.AxisRenderingParametersBase.prototype.$type)
}, true);

$.ig.util.defType('AxisRendererBase', 'Object', {

		init: function (a) {

			var $self = this;

			$.ig.Object.prototype.init.call(this);
						this.am(function () {
				});
				this.an(function (b, c) {
					return false;
				});
				this.ao(function () {
				});
				this.ap(function (d, e) {
					return e;
				});
				this.aq(function (f, g, h, i) {
				});
				this.ar(function (j, k, l) {
				});
				this.as(function (m, n) {
					return false;
				});
				this.at(function (o, p) {
					return $self.as()(o, p);
				});
				this.au(function (q) {
				});
				this.av(function (r) {
				});
				this.aw(function (s, t, u) {
					return false;
				});
				this.ax(function (v, w) {
					return new $.ig.LabelPosition(w);
				});
				this.ay(function (x, y) {
					return y;
				});
				this.a0(function (z) { return null				});
				this.a2(function (aa, ab, ac, ad) { return ab				});
				this.a3(function (ae, af, ag, ah) { return af				});
				this.az(a);
				this.a1(function (ai, aj) {
					return null;
				});
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
	_ar: null,
	ar: function (a) {
		if (arguments.length === 1) {
			this._ar = a;
			return a;
		} else {
			return this._ar;
		}
	}

, 
	_as: null,
	as: function (a) {
		if (arguments.length === 1) {
			this._as = a;
			return a;
		} else {
			return this._as;
		}
	}

, 
	_at: null,
	at: function (a) {
		if (arguments.length === 1) {
			this._at = a;
			return a;
		} else {
			return this._at;
		}
	}

, 
	_au: null,
	au: function (a) {
		if (arguments.length === 1) {
			this._au = a;
			return a;
		} else {
			return this._au;
		}
	}

, 
	_av: null,
	av: function (a) {
		if (arguments.length === 1) {
			this._av = a;
			return a;
		} else {
			return this._av;
		}
	}

, 
	_aw: null,
	aw: function (a) {
		if (arguments.length === 1) {
			this._aw = a;
			return a;
		} else {
			return this._aw;
		}
	}

, 
	_ax: null,
	ax: function (a) {
		if (arguments.length === 1) {
			this._ax = a;
			return a;
		} else {
			return this._ax;
		}
	}

, 
	_ay: null,
	ay: function (a) {
		if (arguments.length === 1) {
			this._ay = a;
			return a;
		} else {
			return this._ay;
		}
	}

, 
	_az: null,
	az: function (a) {
		if (arguments.length === 1) {
			this._az = a;
			return a;
		} else {
			return this._az;
		}
	}

, 
	_a0: null,
	a0: function (a) {
		if (arguments.length === 1) {
			this._a0 = a;
			return a;
		} else {
			return this._a0;
		}
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
	ca: function (a, b, c) {
		var $self = this;
		this.cd(c, b);
		if (this.an()(b, c)) {
			this.ao()();
			var d = this.a1()(b, c);
			this.cd(c, b);
			if (d == null) {
				this.cb();
				return;
			}
			if (d.t().count() > 1 && !d.af()) {
				this.cc(d);
			}
			var f = d.t().getEnumerator();
			while (f.moveNext()) {
				var e = f.current();
				d.u(e);
				if (isNaN(e.g()) || Number.isInfinity(e.g()) || isNaN(e.f()) || Number.isInfinity(e.f())) {
					continue;
				}
				if (e.f() == e.g()) {
					continue;
				}
				this.av()(d);
				this.az().ac(d.ac());
				var g = $.ig.CategoryMode.prototype.mode0;
				var h = 0;
				var i = false;
				var k = function (j) { return j};
				if (this.a4() != null) {
					k = this.a5();
				}
				if ($.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, d) !== null) {
					g = (d).bm();
					h = (d).bo();
					i = (d).bp();
				}
				d.v(this.cf(d));
				d.v().o((function () { var $ret = new $.ig.TickmarkValuesInitializationParameters();
				$ret.r(d.u().f());
				$ret.s(d.u().g());
				$ret.t(d.aa());
				$ret.u(d.ab());
				$ret.v(d.u().i());
				$ret.w(d.af());
				$ret.x(d.ae());
				$ret.y(d.u().h());
				$ret.z(d.u().j());
				$ret.aa(g);
				$ret.ab(h);
				$ret.ad(d.s());
				$ret.ac(d.r());
				$ret.ae(i);
				$ret.ah(k); return $ret;}()));
				this.cg(d);
			}
			this.ce();
		}
	}

, 
	cb: function () {
		this.az().ag();
	}

, 
	cc: function (a) {
		var $self = this;
		var b = -Number.MAX_VALUE;
		var c = -Number.MAX_VALUE;
		var d = $.ig.CategoryMode.prototype.mode0;
		var e = 0;
		var f = false;
		var h = function (g) { return g};
		if (this.a4() != null) {
			h = this.a5();
		}
		if ($.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, a) !== null) {
			d = (a).bm();
			e = (a).bo();
			f = (a).bp();
		}
		var j = a.t().getEnumerator();
		while (j.moveNext()) {
			var i = j.current();
			a.u(i);
			a.v().o((function () { var $ret = new $.ig.TickmarkValuesInitializationParameters();
			$ret.r(i.f());
			$ret.s(i.g());
			$ret.t(a.aa());
			$ret.u(a.ab());
			$ret.v(i.i());
			$ret.w(a.af());
			$ret.x(a.ae());
			$ret.y(i.h());
			$ret.z(i.j());
			$ret.aa(d);
			$ret.ab(e);
			$ret.ad(a.s());
			$ret.ac(a.r());
			$ret.ae(f);
			$ret.ah(h); return $ret;}()));
			i.h(a.v().k());
			i.j(a.v().n());
			if (!isNaN(a.v().k())) {
				b = Math.max(b, a.v().k());
				c = Math.max(c, a.v().n());
			}
		}
		var l = a.t().getEnumerator();
		while (l.moveNext()) {
			var k = l.current();
			if (k.h() == b) {
				k.h(-1);
				k.j(-1);

			} else {
				k.h(b);
				k.j(c);
			}
		}
	}

, 
	cd: function (a, b) {
		this.am()();
		this.az().w(a, b);
		this.az().y();
	}

, 
	ce: function () {
		this.az().y();
		if (this.az().l()) {
			this.az().ae(0);

		} else {
			var a = 0;
			var c = this.az().g().getEnumerator();
			while (c.moveNext()) {
				var b = c.current();
				var d = $.ig.util.cast($.ig.FrameworkElement.prototype.$type, b);
				if (d == null) {
					d = this.az().ad(a);
					(d).a5(b.toString());
					a++;

				} else {
					this.az().aa(d);
				}
			}
			this.az().ae(a);
		}
	}

, 
	cf: function (a) {
		var b = $.ig.util.cast($.ig.LogarithmicTickmarkValues.prototype.$type, a.v());
		if (b != null) {
			var c = Math.min(a.u().f(), a.u().g());
			var d = Math.max(a.u().f(), a.u().g());
			var e = Math.floor(Math.logBase(c, b.af()));
			var f = Math.ceil(Math.logBase(d, b.af()));
			if (f - e < 2) {
				return new $.ig.LinearTickmarkValues();
			}
		}
		return a.v();
	}

, 
	cg: function (a) {
		var b = a.v().x().toArray$1(Number);
		var c = a.v().y().toArray$1(Number);
		this.az().ab(this.ap()(a, a.v().k()));
		this.au()(a);
		for (var d = 0; d < b.length; d++) {
			var e = a.v().l() + d;
			var f = b[d];
			var g = f;
			var h = 0;
			if (d < b.length - 1) {
				h = b[d + 1];

			} else {
				h = Number.POSITIVE_INFINITY;
			}
			g = this.a2()(a, g, e, a.v().k());
			h = this.a2()(a, h, e, a.v().k());
			var i = this.ap()(a, g);
			var j = this.ap()(a, h);
			if (this.as()(a, i)) {
				if (e % 2 == 0 && this.at()(a, j) && !Number.isInfinity(j)) {
					this.aq()(a, a.w(), i, j);
				}
				this.ar()(a, a.x(), i);
			}
			i = this.a3()(a, i, e, a.v().k());
			if (!isNaN(i) && !Number.isInfinity(i) && this.aw()(a, i, d == b.length - 1)) {
				var k = this.ch(a, g, e, a.v().k());
				if (k != null) {
					this.az().x(k, this.ax()(a, i));
				}
			}
		}
		if (a.ah()) {
			for (var l = 0; l < c.length; l++) {
				var m = c[l];
				var n = this.ap()(a, m);
				this.ar()(a, a.y(), n);
			}
		}
	}

, 
	ch: function (a, b, c, d) {
		return null;
	}
,
	$type: new $.ig.Type('AxisRendererBase', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('CategoryYAxis', 'CategoryAxisBase', {

	dl: function () {
		return new $.ig.CategoryYAxisView(this);
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

			var $self = this;
			this.hd = 1;
			this.he = 1;

			$.ig.CategoryAxisBase.prototype.init.call(this);
						this.labelSettings((function () { var $ret = new $.ig.AxisLabelSettings();
				$ret.location($.ig.AxisLabelsLocation.prototype.outsideLeft);
				$ret.r($self); return $ret;}()));
		}
, 
	interval: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.CategoryYAxis.prototype.intervalProperty, a);
			return a;
		} else {
			return this.b($.ig.CategoryYAxis.prototype.intervalProperty);
		}
	}
, 
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
	getScaledValue: function (a, b) {
		var c = this.categoryMode() == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
		if (c < 0) {
			c = 0;
		}
		var d = c >= 1 ? (a) / (c) : c == 0 ? 0.5 : NaN;
		if (!this.c1()) {
			d = 1 - d;
		}
		return b.b.top() + b.b.height() * (d - b.a.top()) / b.a.height();
	}

, 
	getUnscaledValue: function (a, b) {
		return this.gy(a, b.a, b.b, this.categoryMode());
	}

, 
	gy: function (a, b, c, d) {
		var e = b.top() + (a - c.top()) * b.height() / c.height();
		if (!this.c1()) {
			e = 1 - e;
		}
		var f = d == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
		if (f < 0) {
			f = 0;
		}
		return e * f;
	}

, 
	dr: function () {
		return new $.ig.VerticalAxisLabelPanel();
	}

, 
	getCategorySize: function (a, b) {
		return b.height() / (this.itemsCount() * a.height());
	}

, 
	gz: function (a, b) {
		var c = 0;
		if (!isNaN(this.gap())) {
			c = $.ig.MathUtil.prototype.i(this.gap(), 0, 1);
		}
		var d = 0;
		if (!isNaN(this.overlap())) {
			d = Math.min(this.overlap(), 1);
		}
		var e = 1 - 0.5 * c;
		var f = this.getCategorySize(a, b) * e / (this.go() - (this.go() - 1) * d);
		return f;
	}

, 
	getGroupCenter: function (a, b, c) {
		var d = 0.5;
		if (this.go() > 1) {
			var e = 0;
			if (!isNaN(this.gap())) {
				e = $.ig.MathUtil.prototype.i(this.gap(), 0, 1);
			}
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
				if (g < b.top() + 0.1 * b.height()) {
					g = g + 0.4 * b.height();
					b.y(g - 0.5 * b.height());
				}
				if (g > b.bottom() - 0.1 * b.height()) {
					g = g - 0.4 * b.height();
					b.y(g - 0.5 * b.height());
				}
			}
			this.seriesViewer().hx(b);
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
	g2: function (a) {
		if (a == null) {
			return false;
		}
		var b = this.fg();
		if (b == null) {
			return false;
		}
		return b.synchronizeVertically();
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
			var i = this.getUnscaledValue(c.top(), d);
			var j = this.getUnscaledValue(c.bottom(), d);
			if (!this.isInverted()) {
				i = Math.ceil(i);
				j = Math.floor(j);

			} else {
				i = Math.floor(i);
				j = Math.ceil(j);
			}
			var k = c.left();
			if (this.crossingAxis() != null) {
				var l = $.ig.util.cast($.ig.NumericXAxis.prototype.$type, this.crossingAxis());
				if (l != null) {
					var m = new $.ig.ScalerParams(b, c, l.isInverted());
					k = this.crossingValue();
					k = l.getScaledValue(k, m);
					if (k < c.left()) {
						k = c.left();
					} else if (k > c.right()) {
						k = c.right();
					}
				}
			}
			this.ep(e, k, c);
			this.cz().a3(k);
			var n = Math.min(i, j);
			var o = Math.max(i, j);
			var p = new $.ig.LinearCategorySnapper(1, n, o, c.height(), this.interval(), this.categoryMode());
			var q = Math.floor((n - 0) / p.g());
			var r = Math.ceil((o - 0) / p.g());
			if (!isNaN(q) && !isNaN(r)) {
				var s = q;
				var t = r;
				var u = this.getScaledValue(0 + s * p.g(), d);
				this.c6().bq(this.getScaledValue(p.g(), d));
				for (var v = s; v <= t; ++v) {
					var w = this.getScaledValue(0 + (v + 1) * p.g(), d);
					if (u <= c.bottom()) {
						if (v % 2 == 0) {
							this.em(f, u, w, c);
						}
						this.en(g, u, c);
						if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0 && this.go() != 0) {
							for (var x = 0; x < p.g(); x++) {
								for (var y = 0; y < this.go(); y++) {
									var z = this.getGroupCenter(y, b, c);
									if (!this.isInverted()) {
									z = -z;
									}
									var aa = this.getScaledValue(x + v * p.g(), d) + z;
									this.en(h, aa, c);
								}
							}
						}
					}
					var ab = u;
					if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
						var ac = this.getScaledValue(v * p.g() + 1, d);
						ab = (u + ac) / 2;
					}
					if (ab <= c.bottom() && ab >= c.top()) {
						var ad = 0;
						if (p.g() >= 1) {
							ad = v * Math.floor(p.g());

						} else {
							if ((v * p.g()) * 2 % 2 == 0) {
								ad = Math.floor(v * p.g());

							} else {
								ad = -1;
							}
						}
						if (this.gn() != null && ad < this.gn().g() && ad >= 0) {
							var ae = this.gn().item(ad);
							var af = this.e2(ae);
							if (!isNaN(ab) && !Number.isInfinity(ab)) {
								this.c4().add1(af);
								this.c5().add(new $.ig.LabelPosition(ab));
							}
						}
					}
					u = w;
				}
			}
			if ((this.labelSettings() == null || this.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && this.crossingAxis() != null) {
				if (this.labelSettings() != null && (this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideLeft || this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideRight)) {
					this.seriesViewer().ic();
				}
			}
			this.cz().a2(this.c4(), this.c5());
			this.g9();
		}
	}

, 
	dd: function () {
			return $.ig.AxisOrientation.prototype.vertical;
	}
,
	$type: new $.ig.Type('CategoryYAxis', $.ig.CategoryAxisBase.prototype.$type)
}, true);

$.ig.util.defType('CategoryYAxisView', 'CategoryAxisBaseView', {

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
	$type: new $.ig.Type('CategoryYAxisView', $.ig.CategoryAxisBaseView.prototype.$type)
}, true);

$.ig.util.defType('HorizontalAxisLabelPanelBase', 'AxisLabelPanelBase', {
	init: function () {

		$.ig.AxisLabelPanelBase.prototype.init.call(this);

	}
, 
	b6: function () {
		return new $.ig.HorizontalAxisLabelPanelBaseView(this);
	}

, 
	b7: function (a) {
		$.ig.AxisLabelPanelBase.prototype.b7.call(this, a);
		this.d0(a);
	}

, 
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
	c7: function () {
		this.d0().ak();
	}

, 
	d6: function () {
		return this.br().labelSettings() != null && this.br().labelSettings().y() && this.c9() % 360 != 0;
	}

, 
	d7: function () {
		return this.b0() && !this.b1();
	}

, 
	c6: function () {
		var $self = this;
		var a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
		this.b2(false);
		this.b1(false);
		this.b3(false);
		var b = Math.abs(this.c9() % 180);
		var c = this.br().labelSettings() != null ? (this.br().labelSettings().angle() * Math.PI / 180) : 0;
		if (this.d6()) {
			this.b1(true);
		}
		this.d0().al(a, c);
		this.b0(this.b0() || this.c4(a));
		if (this.b0()) {
			this.d9(a);

		} else {
			this.ea();
		}
		if (!this.br().e8()) {
			if (!this.b0()) {
				this.b5(this.d1());

			} else {
				var d = this.br().labelSettings() != null && !isNaN(this.br().labelSettings().extent()) ? this.br().labelSettings().extent() : $.ig.AxisLabelSettings.prototype.extentPropertyDefault;
				this.b5(Math.min(d, this.dc(this.b4())));
			}

		} else {
			this.bp().w();
		}
		if (this.b1()) {
			for (var e = 0; e < a.count(); e++) {
				var f = a.__inner[e];
				f.x(this.bt().__inner[e].b());
				a.__inner[e] = f;
			}
		}
		var g = 0;
		if (this.d7()) {
			g = (function () { var $ret = $self.c5($self.d1(), a); a = $ret.rectangles; return $ret.ret; }());
		}
		if (this.b0() && !this.b2()) {
			if (g > 0) {
				if (this.d0().am()) {
					this.b3(true);
				}
			}
		}
		if (this.b0() && this.ec()) {
			var h = this.bv().width();
			var i = this.bt().count() > 1 ? this.bt().__inner[1].b() - this.bt().__inner[0].b() : h;
			var j = Math.abs(i * 0.8);
			var k = 0;
			var l = Math.abs(Math.atan(this.d1() / i) * 180 / Math.PI);
			for (var m = 0; m < a.count(); m++) {
				var n = Math.min(this.db(this.by().__inner[m]), j);
				k = this.b1() ? this.bt().__inner[m].b() : this.bt().__inner[m].b() - n / 2;
				var o = b >= l && b <= 180 - l;
				if (this.b1() && o) {
					var p = this.db(this.by().__inner[m]);
					j = Math.min(this.b5() / Math.abs(Math.sin(c)), p);
				}
				var q = a.__inner[m];
				q.x(k);
				q.width(j);
				a.__inner[m] = q;
				if (!($.ig.util.cast($.ig.TextBlock.prototype.$type, this.by().__inner[m]) !== null)) {
					this.by().__inner[m].v(j);
				}
				var r = $.ig.util.cast($.ig.TextBlock.prototype.$type, this.by().__inner[m]);
				if (r != null) {
					var s = this.dm(m, r, j);
					if (this.b3()) {
						r.w(this.b5());
					} else if (!r.a5().equals(s)) {
						r.a5(s);
						this.by().__inner[m].v(j);
					}
				}
			}
		}
		if (this.eb()) {
			this.d8(a);
		}
		return a;
	}

, 
	d8: function (a) {
		this.d0().an(a);
	}

, 
	d9: function (a) {
	}

, 
	ea: function () {
	}

, 
	df: function (a, b) {
		var $self = this;
		var c = 0;
		var d = this.d1() / 2;
		var e = (function () { var $ret = new $.ig.RotateTransform();
$ret.h($self.c9());
$ret.i(c);
$ret.j(d); return $ret;}());
		a.f(e);
	}

, 
	eb: function () {
		return !this.b2() && !this.b1();
	}

, 
	ec: function () {
		return true;
	}

, 
	c5: function (a, b) {
		var c = 0;
		var d = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
		if (a * 3 <= this.b5()) {
			c = 3;
		} else if (a * 2 <= this.b5()) {
			c = 2;

		} else {
			return {
				ret: c,
				rectangles: b
			};
		}
		for (var e = 0; e < b.count(); e++) {
			var f = b.__inner[e].duplicate();
			if (e % c == 0) {
				f.y(0);
			} else if (e % c == c - 1) {
				f.y(this.b5() - f.height());

			} else {
				f.y(this.b5() / 2 - f.height() / 2);
			}
			d.add(f);
		}
		this.b0(this.c4(d));
		if (!this.b0()) {
			this.b2(true);
			b = d;
		}
		return {
			ret: c,
			rectangles: b
		};
		return {
			rectangles: b
		};
	}
,
	$type: new $.ig.Type('HorizontalAxisLabelPanelBase', $.ig.AxisLabelPanelBase.prototype.$type)
}, true);

$.ig.util.defType('HorizontalAxisLabelPanel', 'HorizontalAxisLabelPanelBase', {
	init: function () {

		$.ig.HorizontalAxisLabelPanelBase.prototype.init.call(this);

	}
, 
	dj: function () {
		return $.ig.AxisLabelsLocation.prototype.outsideBottom;
	}

, 
	dk: function (a) {
		return a == $.ig.AxisLabelsLocation.prototype.insideBottom || a == $.ig.AxisLabelsLocation.prototype.insideTop || a == $.ig.AxisLabelsLocation.prototype.outsideBottom || a == $.ig.AxisLabelsLocation.prototype.outsideTop;
	}
,
	$type: new $.ig.Type('HorizontalAxisLabelPanel', $.ig.HorizontalAxisLabelPanelBase.prototype.$type)
}, true);

$.ig.util.defType('HorizontalAxisLabelPanelBaseView', 'AxisLabelPanelBaseView', {

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
	ak: function () {
	}

, 
	al: function (a, b) {
		this.ah().d1(-Number.MAX_VALUE);
		for (var c = 0; c < this.g().by().count(); c++) {
			if (this.g().bt() == null || c >= this.g().bt().count()) {
			break;
			}
			var d			,e			,f			,g			,h;
			var i = this.g().by().__inner[c];
			h = this.v(i);
			if (this.g().b1()) {
				d = this.g().bt().__inner[c].b();

			} else {
				d = this.g().bt().__inner[c].b() - h / 2;
			}
			e = 0;
			f = this.v(i);
			g = this.t(i);
			this.ah().d1(Math.max(g, this.ah().d1()));
			var j = new $.ig.Rect(0, d, e, f, g);
			a.add(j);
			var k = h * Math.abs(Math.sin(b));
			var l = this.g().bv().height();
			this.g().b0(k > l);
		}
	}

, 
	am: function () {
		return false;
	}

, 
	an: function (a) {
	}

, 
	l: function () {
		return 0;
	}

, 
	m: function () {
		return this.g().bv().top();
	}
,
	$type: new $.ig.Type('HorizontalAxisLabelPanelBaseView', $.ig.AxisLabelPanelBaseView.prototype.$type)
}, true);

$.ig.util.defType('NumericAxisBase', 'Axis', {

	dl: function () {
		return new $.ig.NumericAxisBaseView(this);
	}

, 
	dp: function (a) {
		$.ig.Axis.prototype.dp.call(this, a);
		this.gy(a);
	}

, 
	_gy: null,
	gy: function (a) {
		if (arguments.length === 1) {
			this._gy = a;
			return a;
		} else {
			return this._gy;
		}
	}

, 
		init: function () {


			$.ig.Axis.prototype.init.call(this);
						this.g2(10);
		}
, 
	minimumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericAxisBase.prototype.minimumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericAxisBase.prototype.minimumValueProperty);
		}
	}

, 
	actualMinimumValue: function (a) {
		if (arguments.length === 1) {
			if (this.actualMinimumValue() != a) {
				var b = this.gh;
				this.gh = a;
				this.gz(Math.log(this.actualMinimumValue()));
				this.ez($.ig.NumericAxisBase.prototype.f7, b, this.actualMinimumValue());
			}
			return a;
		} else {
			return this.gh;
		}
	}
, 
	gh: null
, 
	_gz: null,
	gz: function (a) {
		if (arguments.length === 1) {
			this._gz = a;
			return a;
		} else {
			return this._gz;
		}
	}

, 
	maximumValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericAxisBase.prototype.maximumValueProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericAxisBase.prototype.maximumValueProperty);
		}
	}

, 
	actualMaximumValue: function (a) {
		if (arguments.length === 1) {
			if (this.actualMaximumValue() != a) {
				var b = this.gi;
				this.gi = a;
				this.g0(Math.log(this.actualMaximumValue()));
				this.ez($.ig.NumericAxisBase.prototype.f9, b, this.actualMaximumValue());
			}
			return a;
		} else {
			return this.gi;
		}
	}
, 
	gi: null
, 
	_g0: null,
	g0: function (a) {
		if (arguments.length === 1) {
			this._g0 = a;
			return a;
		} else {
			return this._g0;
		}
	}

, 
	interval: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericAxisBase.prototype.intervalProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericAxisBase.prototype.intervalProperty);
		}
	}

, 
	referenceValue: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericAxisBase.prototype.referenceValueProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericAxisBase.prototype.referenceValueProperty);
		}
	}

, 
	isLogarithmic: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericAxisBase.prototype.isLogarithmicProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericAxisBase.prototype.isLogarithmicProperty);
		}
	}
, 
	gj: null
, 
	actualIsLogarithmic: function (a) {
		if (arguments.length === 1) {
			if (this.actualIsLogarithmic() != a) {
				var b = this.gj;
				if (b != a) {
					this.gj = a;
					this.ez($.ig.NumericAxisBase.prototype.gd, b, this.actualIsLogarithmic());
				}
			}
			return a;
		} else {
			return this.gj;
		}
	}

, 
	g1: function () {
			return this.actualIsLogarithmic() && this.actualMinimumValue() > 0 && this.g2() > 1;
	}

, 
	logarithmBase: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericAxisBase.prototype.logarithmBaseProperty, a);
			return a;
		} else {
			return this.b($.ig.NumericAxisBase.prototype.logarithmBaseProperty);
		}
	}

, 
	_g2: null,
	g2: function (a) {
		if (arguments.length === 1) {
			this._g2 = a;
			return a;
		} else {
			return this._g2;
		}
	}

, 
	_g3: null,
	g3: function (a) {
		if (arguments.length === 1) {
			this._g3 = a;
			return a;
		} else {
			return this._g3;
		}
	}

, 
	eg: function (a, b, c, d) {
		var $self = this;
		$.ig.Axis.prototype.eg.call(this, a, b, c, d);
		switch (b) {
			case $.ig.NumericAxisBase.prototype.f6:
				this.updateRange();
				this.es(false);
				break;
			case $.ig.NumericAxisBase.prototype.f8:
				this.updateRange();
				this.es(false);
				break;
			case $.ig.NumericAxisBase.prototype.gc:
				this.actualIsLogarithmic(this.isLogarithmic());
				break;
			case $.ig.Axis.prototype.bq:
			case $.ig.Axis.prototype.bp:
			case $.ig.NumericAxisBase.prototype.ga:
				this.c7(true);
				this.es(false);
				break;
			case $.ig.NumericAxisBase.prototype.ge:
				this.g2(this.logarithmBase());
				if (this.actualIsLogarithmic()) {
					this.updateRange();
					this.hi();
					this.es(false);
				}
				break;
			case $.ig.NumericAxisBase.prototype.gb:
				var e = new $.ig.AxisRangeChangedEventArgs(this.actualMinimumValue(), this.actualMinimumValue(), this.actualMaximumValue(), this.actualMaximumValue());
				this.dx(e);
				this.c7(true);
				this.es(false);
				break;
			case $.ig.NumericAxisBase.prototype.bn:
				this.g3(this.hm());
				this.c7(true);
				this.es(false);
				break;
			case $.ig.NumericAxisBase.prototype.gf:
				this.hs();
				break;
			case $.ig.NumericAxisBase.prototype.gd:
				this.updateRange();
				this.hi();
				this.c7(true);
				this.hs();
				this.es(false);
				break;
			case $.ig.NumericAxisBase.prototype.gg:
				this.c7(true);
				this.es(false);
				break;
		}
	}

, 
	hi: function () {
		var b = this.fl().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.renderSeries(false);
		}
	}

, 
	hj: function () {
		var a = new $.ig.AxisRange(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
		var b = false;
		if (this.seriesViewer() != null) {
			var d = this.fl().getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				var e = c.em(this);
				if (e != null) {
					b = true;
					a = new $.ig.AxisRange(Math.min(a.c(), e.c()), Math.max(a.d(), e.d()));
				}
			}
		}
		if (b) {
			return a;
		}
		return null;
	}

, 
	hk: function (a, b, c, d, e, f, g) {
		var $self = this;
		(function () { var $ret = $.ig.AutoRangeCalculator.prototype.c(a, b, c, d, e, f, g); f = $ret.minimumValue; g = $ret.maximumValue; return $ret.ret; }());
		return {
			actualMinimumValue: f,
			actualMaximumValue: g
		};
	}

, 
	ex: function () {
		var $self = this;
		var a = this.actualIsLogarithmic() && !isNaN(this.logarithmBase()) && !Number.isInfinity(this.logarithmBase()) && this.logarithmBase() > 1;
		var b;
		var c;
		(function () { var $ret = $self.hk($self, $self.minimumValue(), $self.maximumValue(), a, $self.logarithmBase(), b, c); b = $ret.actualMinimumValue; c = $ret.actualMaximumValue; return $ret.ret; }());
		if (b != this.actualMinimumValue() || c != this.actualMaximumValue()) {
			var d = new $.ig.AxisRangeChangedEventArgs(this.actualMinimumValue(), b, this.actualMaximumValue(), c);
			this.actualMinimumValue(b);
			this.actualMaximumValue(c);
			this.dx(d);
			this.hl(d);
			this.es(true);
			return true;
		}
		return false;
	}

, 
	hl: function (a) {
	}

, 
	registerSeries: function (a) {
		var b = $.ig.Axis.prototype.registerSeries.call(this, a);
		if (b) {
			this.updateRange();
		}
		return b;
	}

, 
	deregisterSeries: function (a) {
		var b = $.ig.Axis.prototype.deregisterSeries.call(this, a);
		if (b) {
			this.updateRange();
		}
		return b;
	}

, 
	hm: function () {
		var $self = this;
		var a = (function () { var $ret = new $.ig.AxisLabelManager();
$ret.j($self);
$ret.h($self.c5());
$ret.g($self.c4());
$ret.i($self.c6()); return $ret;}());
		if (this.labelSettings() != null) {
			this.labelSettings().r(this);
		}
		var b = new $.ig.NumericAxisRenderer(a);
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
			return !h.isEmpty() && !g.isEmpty();
		});
		b.a1(function (i, j) {
			return $self.hq(i, j);
		});
		b.a0(function (k) {
			return $self.e2(k);
		});
		return b;
	}

, 
	hn: function () {
		return new $.ig.NumericAxisRenderingParameters();
	}

, 
	ho: function () {
	}

, 
	hp: function () {
		return null;
	}

, 
	hq: function (a, b) {
		var c = this.hn();
		var d = this.cz().au();
		var e = this.cz().av();
		var f = this.cz().aw();
		var g = this.cz().ax();
		c.z(d);
		c.w(e);
		c.x(f);
		c.y(g);
		c.ab(this.actualMaximumValue());
		c.aa(this.actualMinimumValue());
		c.ag(this.hasUserMaximum());
		c.v(this.actualTickmarkValues());
		c.r(a);
		c.s(b);
		c.af(this.hr());
		c.ae(this.interval());
		c.ad(this.label());
		if (this.label() == null && this.formatLabel() != null) {
			c.ad("Format");
		}
		c.ah(this.c9());
		return c;
	}

, 
	unscaleValue: function (a) {
		var b = new $.ig.ScalerParams(this.seriesViewer().windowRect(), this.c2(), this.isInverted());
		b.c = this.seriesViewer().effectiveViewport();
		return this.getUnscaledValue(a, b);
	}

, 
	hr: function () {
		return !isNaN(this.interval());
	}

, 
	hasUserMinimum: function () {
			return !isNaN(this.minimumValue());
	}

, 
	hasUserMaximum: function () {
			return !isNaN(this.maximumValue());
	}

, 
	hs: function () {
		if (this.tickmarkValues() != null) {
			this.actualTickmarkValues(this.tickmarkValues());
		} else if (this.actualIsLogarithmic()) {
			this.actualTickmarkValues(new $.ig.LogarithmicTickmarkValues());
			this.gy().bm();

		} else {
			this.actualTickmarkValues(new $.ig.LinearTickmarkValues());
		}
	}

, 
	tickmarkValues: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericAxisBase.prototype.tickmarkValuesProperty, a);
			return a;
		} else {
			return $.ig.util.cast($.ig.TickmarkValues.prototype.$type, this.b($.ig.NumericAxisBase.prototype.tickmarkValuesProperty));
		}
	}
, 
	gk: null
, 
	actualTickmarkValues: function (a) {
		if (arguments.length === 1) {
			var b = this.gk;
			var c = b != a;
			if (c) {
				this.gk = a;
				this.ez($.ig.NumericAxisBase.prototype.gg, b, a);
			}
			return a;
		} else {
			if (this.gk == null) {
				this.hs();
			}
			return this.gk;
		}
	}
,
	$type: new $.ig.Type('NumericAxisBase', $.ig.Axis.prototype.$type)
}, true);


$.ig.util.defType('NumericAxisBaseView', 'AxisView', {

	_bj: null,
	bj: function (a) {
		if (arguments.length === 1) {
			this._bj = a;
			return a;
		} else {
			return this._bj;
		}
	}

, 
		init: function (a) {


			$.ig.AxisView.prototype.init.call(this, a);
						this.bj(a);
		}
, 
	bm: function () {
	}
,
	$type: new $.ig.Type('NumericAxisBaseView', $.ig.AxisView.prototype.$type)
}, true);


$.ig.util.defType('StraightNumericAxisBase', 'NumericAxisBase', {

		init: function () {


			$.ig.NumericAxisBase.prototype.init.call(this);
						this.im();
		}
, 
	dl: function () {
		return new $.ig.StraightNumericAxisBaseView(this);
	}

, 
	dp: function (a) {
		$.ig.NumericAxisBase.prototype.dp.call(this, a);
		this.h9(a);
	}

, 
	_h9: null,
	h9: function (a) {
		if (arguments.length === 1) {
			this._h9 = a;
			return a;
		} else {
			return this._h9;
		}
	}

, 
	scaleMode: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.StraightNumericAxisBase.prototype.scaleModeProperty, a);
			return a;
		} else {
			return this.b($.ig.StraightNumericAxisBase.prototype.scaleModeProperty);
		}
	}

, 
	scaler: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.StraightNumericAxisBase.prototype.scalerProperty, a);
			return a;
		} else {
			return this.b($.ig.StraightNumericAxisBase.prototype.scalerProperty);
		}
	}

, 
	ie: function (a, b) {
		var c = $.ig.util.cast($.ig.StraightNumericAxisBase.prototype.$type, a);
		c.im();
		c.ez($.ig.StraightNumericAxisBase.prototype.h3, b.f(), b.e());
	}

, 
	ig: function () {
		return null;
	}
, 
	h5: null
, 
	ia: function (a) {
		if (arguments.length === 1) {
			var b = this.h5 != a;
			if (b) {
				var c = this.h5;
				this.h5 = a;
				this.ez($.ig.StraightNumericAxisBase.prototype.h4, c, a);
			}
			return a;
		} else {
			if (this.h5 == null) {
				this.im();
			}
			return this.h5;
		}
	}

, 
	hk: function (a, b, c, d, e, f, g) {
		var $self = this;
		(function () { var $ret = $self.ia().q(a, b, c, f, g); f = $ret.actualMinimumValue; g = $ret.actualMaximumValue; return $ret.ret; }());
		return {
			actualMinimumValue: f,
			actualMaximumValue: g
		};
	}

, 
	ij: function (a) {
		var b = this.ib();
		this.ib(true);
		a.invoke();
		this.ib(b);
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
	im: function () {
		var a = this.scaler();
		if (a == null) {
			a = this.hp();
		}
		this.ia(a);
		if (this.ia() == null) {
			throw new $.ig.ArgumentNullException("ActualScaler");
		}
		this.io();
	}

, 
	io: function () {
		this.h9().br();
	}

, 
	eg: function (a, b, c, d) {
		var $self = this;
		if (this.ib()) {
			return;
		}
		$.ig.NumericAxisBase.prototype.eg.call(this, a, b, c, d);
		switch (b) {
			case $.ig.NumericAxisBase.prototype.ge:
				this.im();
				break;
			case $.ig.NumericAxisBase.prototype.gc:
				this.im();
				break;
			case $.ig.StraightNumericAxisBase.prototype.h2:
				this.im();
				break;
			case $.ig.StraightNumericAxisBase.prototype.h3:
				this.im();
				break;
			case $.ig.StraightNumericAxisBase.prototype.h4:
				this.actualIsLogarithmic($.ig.util.cast($.ig.LogarithmicScaler.prototype.$type, this.ia()) !== null);
				this.io();
				this.updateRange();
				this.es(false);
				break;
			case $.ig.NumericAxisBase.prototype.f9:
				this.iq();
				break;
			case $.ig.NumericAxisBase.prototype.f7:
				this.ip();
				this.im();
				break;
		}
	}

, 
	ip: function () {
		this.ia().v(this.actualMinimumValue());
	}

, 
	iq: function () {
		this.ia().w(this.actualMaximumValue());
	}
,
	$type: new $.ig.Type('StraightNumericAxisBase', $.ig.NumericAxisBase.prototype.$type)
}, true);



$.ig.util.defType('NumericXAxis', 'StraightNumericAxisBase', {

	dl: function () {
		return new $.ig.NumericXAxisView(this);
	}

, 
	dp: function (a) {
		$.ig.StraightNumericAxisBase.prototype.dp.call(this, a);
		this.iv(a);
	}

, 
	_iv: null,
	iv: function (a) {
		if (arguments.length === 1) {
			this._iv = a;
			return a;
		} else {
			return this._iv;
		}
	}

, 
		init: function () {


			$.ig.StraightNumericAxisBase.prototype.init.call(this);
						this.g3(this.hm());
		}
, 
	dr: function () {
		return new $.ig.HorizontalAxisLabelPanel();
	}

, 
	hm: function () {
		var $self = this;
		var a = $.ig.NumericAxisBase.prototype.hm.call(this);
		a.az().k(function (b) {
			if (($self.labelSettings() == null || $self.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && $self.crossingAxis() != null) {
				$self.c6().bx(b);
				if ($self.labelSettings() != null && ($self.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideTop || $self.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
					$self.seriesViewer().ic();
				}
			}
		});
		a.ar(function (c, d, e) {
			$self.ep(d, e, c.r());
		});
		a.aq(function (f, g, h, i) {
			$self.eo(g, h, i, f.r());
		});
		a.ap(function (j, k) {
			var l = new $.ig.ScalerParams(j.s(), j.r(), $self.c1());
			return $self.getScaledValue(k, l);
		});
		a.as(function (m, n) {
			return true;
		});
		a.au(function (o) {
			$self.en(o.z(), o.ac(), o.r());
		});
		a.av(function (p) {
			p.ac(p.r().bottom());
			var q = new $.ig.ScalerParams(p.s(), p.r(), $self.c1());
			if ($self.crossingAxis() != null && $self.crossingAxis().seriesViewer() != null) {
				p.ac($self.crossingValue());
				p.ac($self.crossingAxis().getScaledValue(p.ac(), q));
				var r = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, $self.crossingAxis());
				if (r != null && r.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
					var s = 0.5 * r.getCategorySize(p.s(), p.r());
					if (!r.isInverted()) {
					s = -s;
					}
					p.ac(p.ac() + s);
				}
				if (p.ac() < p.r().top()) {
					p.ac(p.r().top());
				} else if (p.ac() > p.r().bottom()) {
					p.ac(p.r().bottom());
				}
			}
		});
		a.aw(function (t, u, v) {
			var w = Math.round(u);
			return w >= Math.floor(t.r().left()) && w <= Math.ceil(t.r().right());
		});
		return a;
	}

, 
	getScaledValue: function (a, b) {
		if (this.h5 != null) {
			return this.h5.ac(a, b);
		}
		return this.ia().ac(a, b);
	}

, 
	getUnscaledValue: function (a, b) {
		if (this.h5 != null) {
			return this.h5.ab(a, b);
		}
		return this.ia().ab(a, b);
	}

, 
	getScaledValueList: function (a, b, c, d) {
		if (this.h5 != null) {
			this.h5.ae(a, b, c, d);
			return;
		}
		this.ia().ae(a, b, c, d);
	}

, 
	getUnscaledValueList: function (a, b, c, d) {
		if (this.h5 != null) {
			this.h5.ad(a, b, c, d);
			return;
		}
		this.ia().ad(a, b, c, d);
	}

, 
	hq: function (a, b) {
		var $self = this;
		var c = $.ig.NumericAxisBase.prototype.hq.call(this, a, b);
		var d = new $.ig.ScalerParams(b, a, this.isInverted());
		var e = NaN;
		var f = NaN;
		if (!this.isInverted() && b.right() == 1) {
			f = this.actualMaximumValue();
		} else if (this.isInverted() && b.left() == 0) {
			e = this.actualMaximumValue();
		}
		if (isNaN(e)) {
			e = this.getUnscaledValue(a.left(), d);
		}
		if (isNaN(f)) {
			f = this.getUnscaledValue(a.right(), d);
		}
		var g = Math.min(e, f);
		var h = Math.max(e, f);
		c.t().add((function () { var $ret = new $.ig.RangeInfo();
		$ret.f(g);
		$ret.g(h);
		$ret.i(a.width()); return $ret;}()));
		return c;
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
		if (b.height() != a.height()) {
			this.updateRange();
		}
	}

, 
	dd: function () {
			return $.ig.AxisOrientation.prototype.horizontal;
	}

, 
	hp: function () {
		if (this.isLogarithmic()) {
			return new $.ig.HorizontalLogarithmicScaler();
		}
		switch (this.scaleMode()) {
			case $.ig.NumericScaleMode.prototype.linear:
				return new $.ig.HorizontalLinearScaler();
			case $.ig.NumericScaleMode.prototype.logarithmic:
				return new $.ig.HorizontalLogarithmicScaler();
		}
		return null;
	}
,
	$type: new $.ig.Type('NumericXAxis', $.ig.StraightNumericAxisBase.prototype.$type, [$.ig.IScaler.prototype.$type])
}, true);

$.ig.util.defType('StraightNumericAxisBaseView', 'NumericAxisBaseView', {

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
		}
, 
	br: function () {
		this.bo().ia().w(this.bo().actualMaximumValue());
		this.bo().ia().v(this.bo().actualMinimumValue());
	}
,
	$type: new $.ig.Type('StraightNumericAxisBaseView', $.ig.NumericAxisBaseView.prototype.$type)
}, true);

$.ig.util.defType('NumericXAxisView', 'StraightNumericAxisBaseView', {

	_bt: null,
	bt: function (a) {
		if (arguments.length === 1) {
			this._bt = a;
			return a;
		} else {
			return this._bt;
		}
	}

, 
		init: function (a) {


			$.ig.StraightNumericAxisBaseView.prototype.init.call(this, a);
						this.bt(a);
		},
	$type: new $.ig.Type('NumericXAxisView', $.ig.StraightNumericAxisBaseView.prototype.$type)
}, true);

$.ig.util.defType('NumericYAxis', 'StraightNumericAxisBase', {

	dl: function () {
		return new $.ig.NumericYAxisView(this);
	}

, 
		init: function () {


			$.ig.StraightNumericAxisBase.prototype.init.call(this);
						this.g3(this.hm());
		}
, 
	dr: function () {
		return new $.ig.VerticalAxisLabelPanel();
	}

, 
	getScaledValue: function (a, b) {
		if (this.h5 != null) {
			return this.h5.ac(a, b);
		}
		return this.ia().ac(a, b);
	}

, 
	getScaledValueList: function (a, b, c, d) {
		if (this.h5 != null) {
			this.h5.ae(a, b, c, d);
			return;
		}
		this.ia().ae(a, b, c, d);
	}

, 
	getUnscaledValue: function (a, b) {
		if (this.h5 != null) {
			return this.h5.ab(a, b);
		}
		return this.ia().ab(a, b);
	}

, 
	getUnscaledValueList: function (a, b, c, d) {
		if (this.h5 != null) {
			this.h5.ad(a, b, c, d);
			return;
		}
		this.ia().ad(a, b, c, d);
	}

, 
	hm: function () {
		var $self = this;
		var a = $.ig.NumericAxisBase.prototype.hm.call(this);
		a.az().k(function (b) {
			if ($self.labelSettings() == null || $self.labelSettings().visibility() == $.ig.Visibility.prototype.visible) {
				$self.c6().bx(b);
				if ($self.labelSettings() != null && ($self.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideRight || $self.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideLeft)) {
					$self.seriesViewer().ic();
				}
			}
		});
		a.ar(function (c, d, e) {
			$self.en(d, e, c.r());
		});
		a.aq(function (f, g, h, i) {
			$self.em(g, h, i, f.r());
		});
		a.ap(function (j, k) {
			var l = new $.ig.ScalerParams(j.s(), j.r(), $self.c1());
			return $self.getScaledValue(k, l);
		});
		a.as(function (m, n) {
			return true;
		});
		a.au(function (o) {
			$self.ep(o.z(), o.ac(), o.r());
		});
		a.av(function (p) {
			p.ac(p.r().left());
			var q = new $.ig.ScalerParams(p.s(), p.r(), $self.c1());
			if ($self.crossingAxis() != null && $self.crossingAxis().seriesViewer() != null) {
				p.ac($self.crossingValue());
				p.ac($self.crossingAxis().getScaledValue(p.ac(), q));
				var r = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, $self.crossingAxis());
				if (r != null && r.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
					var s = 0.5 * r.getCategorySize(p.s(), p.r());
					if (r.isInverted()) {
					s = -s;
					}
					p.ac(p.ac() + s);
				}
				if (p.ac() < p.r().left()) {
					p.ac(p.r().left());
				} else if (p.ac() > p.r().right()) {
					p.ac(p.r().right());
				}
			}
		});
		a.aw(function (t, u, v) {
			var w = Math.round(u);
			return w >= Math.floor(t.r().top()) && w <= Math.ceil(t.r().bottom());
		});
		return a;
	}

, 
	hq: function (a, b) {
		var $self = this;
		var c = $.ig.NumericAxisBase.prototype.hq.call(this, a, b);
		var d = new $.ig.ScalerParams(b, a, this.isInverted());
		var e = NaN;
		var f = NaN;
		if (!this.isInverted() && b.top() == 0) {
			f = this.actualMaximumValue();
		} else if (this.isInverted() && b.bottom() == 1) {
			e = this.actualMaximumValue();
		}
		if (isNaN(e)) {
			e = this.getUnscaledValue(a.bottom(), d);
		}
		if (isNaN(f)) {
			f = this.getUnscaledValue(a.top(), d);
		}
		var g = Math.min(e, f);
		var h = Math.max(e, f);
		var i = (function () { var $ret = new $.ig.RangeInfo();
$ret.f(g);
$ret.g(h);
$ret.i(a.height()); return $ret;}());
		c.t().add(i);
		return c;
	}

, 
	ey: function (a) {
		var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
		var c = this.c2();
		this.g3().ca(a, c, b);
	}

, 
	d9: function (a, b) {
		$.ig.Axis.prototype.d9.call(this, a, b);
		if (b.height() != a.height()) {
			this.updateRange();
		}
	}

, 
	dd: function () {
			return $.ig.AxisOrientation.prototype.vertical;
	}

, 
	hp: function () {
		if (this.isLogarithmic()) {
			return new $.ig.VerticalLogarithmicScaler();
		}
		switch (this.scaleMode()) {
			case $.ig.NumericScaleMode.prototype.linear:
				return new $.ig.VerticalLinearScaler();
			case $.ig.NumericScaleMode.prototype.logarithmic:
				return new $.ig.VerticalLogarithmicScaler();
		}
		return null;
	}

, 
	ig: function () {
		return new $.ig.VerticalLinearScaler();
	}
,
	$type: new $.ig.Type('NumericYAxis', $.ig.StraightNumericAxisBase.prototype.$type, [$.ig.IScaler.prototype.$type])
}, true);

$.ig.util.defType('NumericYAxisView', 'StraightNumericAxisBaseView', {

		init: function (a) {


			$.ig.StraightNumericAxisBaseView.prototype.init.call(this, a);
						this.bt(a);
		}
, 
	_bt: null,
	bt: function (a) {
		if (arguments.length === 1) {
			this._bt = a;
			return a;
		} else {
			return this._bt;
		}
	}
,
	$type: new $.ig.Type('NumericYAxisView', $.ig.StraightNumericAxisBaseView.prototype.$type)
}, true);




$.ig.util.defType('NumericAxisRenderingParameters', 'AxisRenderingParametersBase', {
	init: function () {

		$.ig.AxisRenderingParametersBase.prototype.init.call(this);

	},
	$type: new $.ig.Type('NumericAxisRenderingParameters', $.ig.AxisRenderingParametersBase.prototype.$type)
}, true);







$.ig.util.defType('NumericAxisRenderer', 'AxisRendererBase', {

		init: function (a) {


			$.ig.AxisRendererBase.prototype.init.call(this, a);
		}
, 
	ch: function (a, b, c, d) {
		var e;
		if (a.ad() != null) {
			e = this.a0()(b);

		} else {
			b = Math.round(b * 1000000) / 1000000;
			e = b.toString();
		}
		return e;
	}
,
	$type: new $.ig.Type('NumericAxisRenderer', $.ig.AxisRendererBase.prototype.$type)
}, true);

$.ig.util.defType('RangeInfo', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.h(-1);
				this.j(-1);
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
	$type: new $.ig.Type('RangeInfo', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('NumericScaler', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

	}
, 
	q: function (a, b, c, d, e) {
		return {
			actualMinimumValue: d,
			actualMaximumValue: e
		};
	}

, 
	n: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericScaler.prototype.g, a);
			return a;
		} else {
			return this.b($.ig.NumericScaler.prototype.g);
		}
	}

, 
	o: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.NumericScaler.prototype.h, a);
			return a;
		} else {
			return this.b($.ig.NumericScaler.prototype.h);
		}
	}
, 
	i: null, 
	j: null
, 
	v: function (a) {
		this.n(a);
	}

, 
	w: function (a) {
		this.o(a);
	}

, 
	x: function (a, b, c) {
		switch (a) {
			case $.ig.NumericScaler.prototype.e:
				this.i = this.n();
				this.y();
				break;
			case $.ig.NumericScaler.prototype.f:
				this.j = this.o();
				this.y();
				break;
		}
	}

, 
	y: function () {
		if (isNaN(this.n()) || isNaN(this.o()) || Number.isInfinity(this.n()) || Number.isInfinity(this.o()) || this.n() < ($.ig.Number.prototype.MIN_VALUE) || this.o() > ($.ig.Number.prototype.MAX_VALUE)) {
			this.p(this.o() - this.n());

		} else {
			this.p(this.o() - this.n());
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
	ab: function (a, b) {
	}

, 
	ac: function (a, b) {
	}

, 
	ad: function (a, b, c, d) {
		var e = new $.ig.List$1(Number, 2, a.count());
		for (var f = b; f < c; f++) {
			e.add(this.ab(a.item(f), d));
		}
		return e;
	}

, 
	ae: function (a, b, c, d) {
		for (var e = b; e < c; e++) {
			a.item(e, this.ac(a.item(e), d));
		}
	}
,
	$type: new $.ig.Type('NumericScaler', $.ig.DependencyObject.prototype.$type)
}, true);

$.ig.util.defType('LinearScaler', 'NumericScaler', {
	init: function () {

		$.ig.NumericScaler.prototype.init.call(this);

	}
, 
	q: function (a, b, c, d, e) {
		var $self = this;
		(function () { var $ret = $.ig.AutoRangeCalculator.prototype.c(a, b, c, false, -1, d, e); d = $ret.minimumValue; e = $ret.maximumValue; return $ret.ret; }());
		return {
			actualMinimumValue: d,
			actualMaximumValue: e
		};
	}
,
	$type: new $.ig.Type('LinearScaler', $.ig.NumericScaler.prototype.$type)
}, true);

$.ig.util.defType('HorizontalLinearScaler', 'LinearScaler', {
	init: function () {

		$.ig.LinearScaler.prototype.init.call(this);

	}
, 
	ab: function (a, b) {
		return this.ah(a, b.a, b.b, b.d);
	}

, 
	ac: function (a, b) {
		return this.ai(a, b.a, b.b, b.d);
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
	$type: new $.ig.Type('HorizontalLinearScaler', $.ig.LinearScaler.prototype.$type)
}, true);

$.ig.util.defType('LogarithmicScaler', 'NumericScaler', {
	init: function () {

		$.ig.NumericScaler.prototype.init.call(this);

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
	x: function (a, b, c) {
		$.ig.NumericScaler.prototype.x.call(this, a, b, c);
		switch (a) {
			case $.ig.LogarithmicScaler.prototype.e:
				this.aj(Math.log(this.n()));
				break;
			case $.ig.LogarithmicScaler.prototype.f:
				this.ak(Math.log(this.o()));
				break;
		}
	}

, 
	q: function (a, b, c, d, e) {
		var $self = this;
		(function () { var $ret = $.ig.AutoRangeCalculator.prototype.c(a, b, c, true, a.logarithmBase(), d, e); d = $ret.minimumValue; e = $ret.maximumValue; return $ret.ret; }());
		return {
			actualMinimumValue: d,
			actualMaximumValue: e
		};
	}
,
	$type: new $.ig.Type('LogarithmicScaler', $.ig.NumericScaler.prototype.$type)
}, true);

$.ig.util.defType('HorizontalLogarithmicScaler', 'LogarithmicScaler', {
	init: function () {

		$.ig.LogarithmicScaler.prototype.init.call(this);

	}
, 
	ab: function (a, b) {
		return this.ap(a, b.a, b.b, b.d);
	}

, 
	ac: function (a, b) {
		return this.aq(a, b.a, b.b, b.d);
	}

, 
	ap: function (a, b, c, d) {
		var e = b.left() + b.width() * (a - c.left()) / c.width();
		if (d) {
			e = 1 - e;
		}
		return Math.exp(e * (this.ak() - this.aj()) + this.aj());
	}

, 
	aq: function (a, b, c, d) {
		if (isNaN(a)) {
			return NaN;
		}
		var e = 0;
		if (a <= 0) {
			e = (Math.log(this.i) - this.aj()) / (this.ak() - this.aj());

		} else {
			e = (Math.log(a) - this.aj()) / (this.ak() - this.aj());
		}
		if (d) {
			e = 1 - e;
		}
		return c.left() + c.width() * (e - b.left()) / b.width();
	}
,
	$type: new $.ig.Type('HorizontalLogarithmicScaler', $.ig.LogarithmicScaler.prototype.$type)
}, true);

$.ig.util.defType('ScalerParams', 'Object', {

		init: function (a, b, c) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = b;
				this.c = $.ig.Rect.prototype.empty();
				this.d = c;
		}, 
	a: null, 
	b: null, 
	c: null, 
	d: null,
	$type: new $.ig.Type('ScalerParams', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('VerticalLinearScaler', 'LinearScaler', {
	init: function () {

		$.ig.LinearScaler.prototype.init.call(this);

	}
, 
	ab: function (a, b) {
		return this.ai(a, b.a, b.b, b.d);
	}

, 
	ac: function (a, b) {
		return this.ah(a, b.a, b.b, b.d);
	}

, 
	ah: function (a, b, c, d) {
		var e = (a - this.i) / (this.p());
		if (!d) {
			e = 1 - e;
		}
		return c.top() + c.height() * (e - b.top()) / b.height();
	}

, 
	ai: function (a, b, c, d) {
		var e = b.top() + b.height() * (a - c.top()) / c.height();
		if (!d) {
			e = 1 - e;
		}
		return this.i + e * (this.p());
	}
,
	$type: new $.ig.Type('VerticalLinearScaler', $.ig.LinearScaler.prototype.$type)
}, true);

$.ig.util.defType('VerticalLogarithmicScaler', 'LogarithmicScaler', {
	init: function () {

		$.ig.LogarithmicScaler.prototype.init.call(this);

	}
, 
	ab: function (a, b) {
		return this.aq(a, b.a, b.b, b.d);
	}

, 
	ac: function (a, b) {
		return this.ap(a, b.a, b.b, b.d);
	}

, 
	ap: function (a, b, c, d) {
		if (isNaN(a)) {
			return NaN;
		}
		var e;
		if (a <= 0) {
			e = (Math.log(this.i) - this.aj()) / (this.ak() - this.aj());

		} else {
			e = (Math.log(a) - this.aj()) / (this.ak() - this.aj());
		}
		if (!d) {
			e = 1 - e;
		}
		return c.top() + c.height() * (e - b.top()) / b.height();
	}

, 
	aq: function (a, b, c, d) {
		var e = b.top() + b.height() * (a - c.top()) / c.height();
		if (!d) {
			e = 1 - e;
		}
		return Math.exp(e * (this.ak() - this.aj()) + this.aj());
	}
,
	$type: new $.ig.Type('VerticalLogarithmicScaler', $.ig.LogarithmicScaler.prototype.$type)
}, true);

$.ig.util.defType('TickmarkValues', 'DependencyObject', {
	init: function () {

		$.ig.DependencyObject.prototype.init.call(this);

	}
, 
	o: function (a) {
		this.j(a.s());
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
	x: function () {
	}

, 
	y: function () {
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
	$type: new $.ig.Type('TickmarkValues', $.ig.DependencyObject.prototype.$type)
}, true);


$.ig.util.defType('LinearTickmarkValues', 'TickmarkValues', {

		init: function () {


			$.ig.TickmarkValues.prototype.init.call(this);
						this.ad(0);
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
	o: function (a) {
		$.ig.TickmarkValues.prototype.o.call(this, a);
		var b;
		if (this.ad() != 0) {
			b = new $.ig.LinearNumericSnapper(1, a.r(), a.s(), a.v(), this.ad());

		} else {
			b = new $.ig.LinearNumericSnapper(0, a.r(), a.s(), a.v());
		}
		this.k(b.h());
		if ((a.w()) && a.x() > 0 && (a.s() - a.r()) / a.x() < 1000) {
			this.k(a.x());
		}
		if (a.y() != -1) {
			this.k(a.y());
		}
		this.l(Math.floor((a.r() - a.t()) / this.k()));
		this.m(Math.ceil((a.s() - a.t()) / this.k()));
		this.n(b.j());
		if (a.z() != -1) {
			this.n(a.z());
		}
		this.ae(a.t());
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
							if (isNaN(this.$this.k())) {
								this.$state = 2;
							}
							else {
								this.$state = 4;
							}
							break;

						case 2:

							this.$state = -2
							return false;
						case 3:
							this.$state = 4;
							break;

						case 4:
							this.$state = 5;
							break;
						case 5:
							this.$a = this.$this.l();
							this.$state = 9;
							break;
						case 6:
							this.$b = this.$this.ae() + this.$a * this.$this.k();
							this.$current =  this.$b;
							this.$state = 7
							return true;
						case 7:
							this.$state = 8;
							break;
						case 8:
							++this.$a;
							this.$state = 9;
							break;
						case 9:
							if (this.$a <= this.$this.m()) {
								this.$state = 6;
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
							this.$state = 13;
							break;
						case 2:
							this.$state = 3;
							break;
						case 3:
							this.$b = 1;
							this.$state = 10;
							break;
						case 4:
							this.$c = this.$this.ae() + this.$a * this.$this.k() + (this.$b * this.$this.k() / this.$this.n());
							this.$state = 5;
							break;
						case 5:
							if (this.$c <= this.$this.j()) {
								this.$state = 6;
							}
							else {
								this.$state = 8;
							}
							break;

						case 6:
							this.$current =  this.$c;
							this.$state = 7
							return true;
						case 7:
							this.$state = 8;
							break;

						case 8:
							this.$state = 9;
							break;
						case 9:
							++this.$b;
							this.$state = 10;
							break;
						case 10:
							if (this.$b < this.$this.n()) {
								this.$state = 4;
							}
							else {
								this.$state = 11;
							}
							break;
						case 11:
							this.$state = 12;
							break;
						case 12:
							++this.$a;
							this.$state = 13;
							break;
						case 13:
							if (this.$a < this.$this.m()) {
								this.$state = 2;
							}
							else {
								this.$state = 14;
							}
							break;
						case 14:
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
	$type: new $.ig.Type('LinearTickmarkValues', $.ig.TickmarkValues.prototype.$type)
}, true);

$.ig.util.defType('LogarithmicTickmarkValues', 'TickmarkValues', {
	init: function () {

		$.ig.TickmarkValues.prototype.init.call(this);

	}
, 
	o: function (a) {
		$.ig.TickmarkValues.prototype.o.call(this, a);
		var b = new $.ig.LogarithmicNumericSnapper(a.r(), a.s(), this.af(), a.v());
		this.k(1);
		this.n(b.h());
		this.l(Math.floor(Math.logBase(Math.max($.ig.LogarithmicTickmarkValues.prototype.ab, a.r()), this.af())));
		this.m(Math.ceil(Math.logBase(Math.max($.ig.LogarithmicTickmarkValues.prototype.ab, a.s()), this.af())));
	}

, 
	af: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.LogarithmicTickmarkValues.prototype.ad, a);
			return a;
		} else {
			return this.b($.ig.LogarithmicTickmarkValues.prototype.ad);
		}
	}

, 
	ai: function (a) {
		var b = a * this.k();
		return Math.pow(this.af(), b);
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
							this.$state = 8;
							break;
						case 2:
							this.$b = this.$this.ai(this.$a);
							this.$state = 3;
							break;
						case 3:
							if (this.$b <= this.$this.j()) {
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
							++this.$a;
							this.$state = 8;
							break;
						case 8:
							if (this.$a <= this.$this.m()) {
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
							this.$state = 13;
							break;
						case 2:
							this.$b = this.$this.ai(this.$a);
							this.$c = Math.pow(this.$this.af(), this.$a);
							this.$state = 3;
							break;
						case 3:
							this.$d = 1;
							this.$state = 10;
							break;
						case 4:
							this.$e = this.$b + this.$d * this.$c;
							this.$state = 5;
							break;
						case 5:
							if (this.$e <= this.$this.j()) {
								this.$state = 6;
							}
							else {
								this.$state = 8;
							}
							break;

						case 6:
							this.$current =  this.$e;
							this.$state = 7
							return true;
						case 7:
							this.$state = 8;
							break;

						case 8:
							this.$state = 9;
							break;
						case 9:
							++this.$d;
							this.$state = 10;
							break;
						case 10:
							if (this.$d < this.$this.n() - 1) {
								this.$state = 4;
							}
							else {
								this.$state = 11;
							}
							break;
						case 11:
							this.$state = 12;
							break;
						case 12:
							++this.$a;
							this.$state = 13;
							break;
						case 13:
							if (this.$a <= this.$this.m()) {
								this.$state = 2;
							}
							else {
								this.$state = 14;
							}
							break;
						case 14:
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
	$type: new $.ig.Type('LogarithmicTickmarkValues', $.ig.TickmarkValues.prototype.$type)
}, true);

$.ig.util.defType('TickmarkValuesInitializationParameters', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('TickmarkValuesInitializationParameters', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('FramePreparer', 'Object', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.FramePreparer.prototype.init1.call(this, 1, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, a), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, a), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, a));
		}
, 
		init1: function (initNumber, a, b, c) {


			$.ig.Object.prototype.init.call(this);
						this.e(new $.ig.DefaultSupportsMarkers());
				this.f(new $.ig.DefaultProvidesViewport());
				this.d(new $.ig.DefaultSupportsErrorBars());
				if (a != null) {
					this.e(a);
				}
				if (b != null) {
					this.f(b);
				}
				if (c != null) {
					this.d(c);
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
	m: function (a, b) {
	}
,
	$type: new $.ig.Type('FramePreparer', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('CategoryFramePreparerBase', 'FramePreparer', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.CategoryFramePreparerBase.prototype.init1.call(this, 1, a, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, a), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, a), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, a), $.ig.util.cast($.ig.IBucketizer.prototype.$type, a));
		}
, 
		init1: function (initNumber, a, b, c, d, e) {


			$.ig.FramePreparer.prototype.init1.call(this, 1, b, c, d);
						this.q(a);
				this.p(e);
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
	v: function (a, b, c, d, e) {
	}

, 
	w: function (a) {
		var $self = this;
		var b = new $.ig.PreparationParams();
		b.r(this.q().scaler());
		b.t(this.q().yScaler());
		b.s($.ig.util.cast($.ig.ISortingAxis.prototype.$type, b.r()));
		b.u($.ig.util.cast($.ig.CategoryFrame.prototype.$type, a));
		if (b.u() == null || b.r() == null || b.t() == null) {
			return null;
		}
		var c;
		var d;
		var e;
		var f;
		(function () { var $ret = $self.p().getBucketInfo(c, d, e, f); c = $ret.firstBucket; d = $ret.lastBucket; e = $ret.bucketSize; f = $ret.resolution; return $ret.ret; }());
		b.l(c);
		b.m(d);
		b.n(e);
		b.o(f);
		if (b.m() < b.l()) {
			return null;
		}
		var g;
		var h;
		(function () { var $ret = $self.f().getViewInfo(h, g); h = $ret.viewportRect; g = $ret.windowRect; return $ret.ret; }());
		b.p(g);
		b.q(h);
		if (b.p() == $.ig.Rect.prototype.empty() || b.q() == $.ig.Rect.prototype.empty()) {
			return null;
		}
		return b;
	}

, 
	x: function (a, b, c) {
		var d = this.q().currentCategoryMode();
		var e = 0;
		if (d == $.ig.CategoryMode.prototype.mode0 && a.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
			d = $.ig.CategoryMode.prototype.mode1;
		}
		switch (d) {
			case $.ig.CategoryMode.prototype.mode0:
				e = 0;
				break;
			case $.ig.CategoryMode.prototype.mode1:
				e = 0.5 * a.getCategorySize(b, c);
				break;
			case $.ig.CategoryMode.prototype.mode2:
				e = a.getGroupCenter(this.q().currentMode2Index(), b, c);
				break;
		}
		if ($.ig.util.cast($.ig.CategoryYAxis.prototype.$type, a) !== null) {
			if (!a.isInverted()) {
			e = -e;
			}
		} else if (a.isInverted()) {
			e = -e;
		}
		return e;
	}

, 
	y: function (a) {
		return this.x(a.r(), a.p(), a.q());
	}

, 
	m: function (a, b) {
		var c = this.w(a);
		if (c == null || this.p() == null) {
			return;
		}
		c.u().d.clear();
		c.u().e.clear();
		c.u().f.clear();
		c.u().g.clear();
		c.u().h.clear();
		c.u().i.clear();
		var d = this.e().shouldDisplayMarkers();
		var e = false;
		var f = this.y(c);
		var g = this.aj(c);
		if (c.s() != null && c.s().sortedIndices().count() != g.e()) {
			return;
		}
		if (c.s() != null && $.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c.s()) !== null) {
			(c.s()).h6();
		}
		this.ai(c, g, f);
		var h = this.ab(c, g, f, d, e);
		this.e().updateMarkerCount(h);
		this.aa($.ig.util.cast($.ig.CategoryFrame.prototype.$type, a), b);
		return;
	}

, 
	z: function (a) {
		return a;
	}

, 
	aa: function (a, b) {
	}

, 
	ab: function (a, b, c, d, e) {
		var $self = this;
		var f = 0;
		var g = false;
		var h = null;
		var i = false;
		var j = a.s() != null;
		var k = a.p();
		var l = a.q();
		var m = $.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a.t()) !== null && ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a.t())).g1();
		var n = this.q().provideCollisionDetector();
		var o = 0;
		var p = new $.ig.ScalerParams(k, l, a.r().isInverted());
		var q = new $.ig.ScalerParams(k, l, a.t().isInverted());
		if (j) {
			o = this.z(a.r().getUnscaledValue(2, p) - a.r().getUnscaledValue(1, p));
			i = this.ac();
		}
		this.p().cacheValues();
		for (var r = a.l(); r <= a.m(); ++r) {
			var s;
			if (!j) {
				s = this.p().getBucket(r);

			} else {
				s = (function () { var $ret = $self.ag(a, r, b, o, g, h, c); r = $ret.currentIndex; g = $ret.isCluster; h = $ret.endBucket; return $ret.ret; }());
			}
			var t = !m || (m && s[1] > 0);
			if (!isNaN(s[0])) {
				this.ah(a, s, c, j, p, q);
				a.u().d.add(s);
				if (g && i) {
					if (h != null) {
						this.ah(a, h, c, j, p, q);
						a.u().d.add(h);
					}
				}
				if (d && t) {
					var u = r * a.n();
					if (j && a.s().sortedIndices() != null && u >= 0 && u < a.s().sortedIndices().count()) {
						u = a.s().sortedIndices().__inner[u];
					}
					if (this.v(a.u(), s, n, Math.min(u, b.e() - 1), f)) {
						++f;
					}
				}
			}
		}
		this.p().unCacheValues();
		return f;
	}

, 
	ac: function () {
		var a = $.ig.util.cast($.ig.LineSeries.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.SplineSeriesBase.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.AreaSeries.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.StepLineSeries.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.StepAreaSeries.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.RangeAreaSeries.prototype.$type, this.q()) !== null;
		return a;
	}

, 
	ad: function (a, b, c, d) {
	}

, 
	ae: function (a, b, c) {
	}

, 
	af: function (a, b) {
	}

, 
	ag: function (a, b, c, d, e, f, g) {
		var $self = this;
		var h;
		f = null;
		e = false;
		var i = $.ig.util.cast($.ig.CategorySeries.prototype.$type, this.q());
		var j = $.ig.util.cast($.ig.RangeCategorySeries.prototype.$type, this.q());
		var k = $.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, this.q());
		var l = a.q();
		var m = a.p();
		var n = new $.ig.ScalerParams(m, l, a.r().isInverted());
		var o = new $.ig.ScalerParams(m, l, a.t().isInverted());
		var p = a.v();
		if (a.s() == null || a.s().sortedIndices() == null || a.s().sortedIndices().count() == 0) {
			return {
				ret: (function () { var $ret = new Array();
				$ret.add(NaN);
				$ret.add(NaN);
				$ret.add(NaN); return $ret;}()),
				currentIndex: b,
				isCluster: e,
				endBucket: f
			};
		}
		if (i != null && i.dx() != null && i.dx().g() < a.s().sortedIndices().count()) {
			return {
				ret: (function () { var $ret = new Array();
				$ret.add(NaN);
				$ret.add(NaN);
				$ret.add(NaN); return $ret;}()),
				currentIndex: b,
				isCluster: e,
				endBucket: f
			};
		}
		var q = a.s().sortedIndices().__inner[b];
		var r = a.s().getUnscaledValueAt(q);
		var s = r;
		this.ad(c, q, false, p);
		while (b < a.m()) {
			q = a.s().sortedIndices().__inner[b + 1];
			s = a.s().getUnscaledValueAt(q);
			this.ad(c, q, true, p);
			if (s - r >= d || isNaN(c.h()) || isNaN(c.i())) {
				if (e) {
					var t = a.s().sortedIndices().__inner[b];
					this.ad(c, t, true, p);
					f = (function () { var $ret = new Array();
					$ret.add(a.r().getScaledValue(r + d, n));
					$ret.add(c.h());
					$ret.add(c.i()); return $ret;}());
				}
				break;
			}
			if (!e && this.ac()) {
				var u = a.s().sortedIndices().__inner[b];
				this.ad(c, u, true, p);
				var v = (function () { var $ret = new Array();
$ret.add(a.r().getScaledValue(r, n));
$ret.add(c.h());
$ret.add(c.i()); return $ret;}());
				if (!isNaN(v[0])) {
					if (!isNaN(v[1]) && !isNaN(v[2])) {
						this.ah(a, v, g, a.s() != null, n, o);
						a.u().d.add(v);
						e = true;

					} else {
						break;
					}
				}
			}
			b++;
			this.ae(c, q, p);
		}
		var w = NaN;
		if (!isNaN(r)) {
			w = a.r().getScaledValue(r, n);
		}
		h = this.af(w, c);
		return {
			ret: h,
			currentIndex: b,
			isCluster: e,
			endBucket: f
		};
		return {
			currentIndex: b,
			isCluster: e,
			endBucket: f
		};
	}

, 
	ah: function (a, b, c, d, e, f) {
	}

, 
	ai: function (a, b, c) {
	}

, 
	aj: function (a) {
	}
,
	$type: new $.ig.Type('CategoryFramePreparerBase', $.ig.FramePreparer.prototype.$type)
}, true);

$.ig.util.defType('CategoryFramePreparer', 'CategoryFramePreparerBase', {

		init: function (initNumber, a) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.CategoryFramePreparer.prototype.init1.call(this, 1, a, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, a), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, a), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, a), $.ig.util.cast($.ig.IBucketizer.prototype.$type, a));
		}
, 
		init1: function (initNumber, a, b, c, d, e) {


			$.ig.CategoryFramePreparerBase.prototype.init1.call(this, 1, a, b, c, d, e);
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
		var h = new $.ig.Rect(0, f - 5, g - 5, 11, 11);
		if (!isNaN(f) && !isNaN(g) && !Number.isInfinity(f) && !Number.isInfinity(g) && c.tryAdd(h)) {
			a.f.add({__x: f, __y: g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			this.e().updateMarkerTemplate(e, d);
			return true;
		}
		return false;
	}

, 
	aj: function (a) {
		var b = new $.ig.SingleValuesHolder();
		var c = this.an().valueColumn();
		b.t(c);
		return b;
	}

, 
	ah: function (a, b, c, d, e, f) {
		if (d) {
			b[0] = (b[0] + c);

		} else {
			b[0] = (a.r().getScaledValue(b[0], e) + c);
		}
		b[1] = a.t().getScaledValue(b[1], f);
		if (a.n() > 1 || d) {
			b[2] = a.t().getScaledValue(b[2], f);

		} else {
			b[2] = b[1];
		}
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
			if ($.ig.util.cast($.ig.IBarSeries.prototype.$type, this.am()) !== null) {
				this.am().trendlinePreparer().prepareLine(a.u().g, this.am().trendLineType(), f, this.am().trendLinePeriod(), function (h) { return a.t().getScaledValue(h, e)				}, function (i) { return a.r().getScaledValue(i, d)				}, g);

			} else {
				this.am().trendlinePreparer().prepareLine(a.u().g, this.am().trendLineType(), f, this.am().trendLinePeriod(), function (j) { return a.r().getScaledValue(j, d)				}, function (k) { return a.t().getScaledValue(k, e)				}, g);
			}
		}
	}

, 
	ad: function (a, b, c, d) {
		var e = a;
		var f = e.t();
		var g = this.z(f.item(b));
		var h = g;
		if (c) {
			e.h(g);
			e.i(h);

		} else {
			e.f(g);
			e.g(h);
		}
	}

, 
	ae: function (a, b, c) {
		var d = a;
		var e = d.t();
		if (b < e.count()) {
			var f;
				f = this.z(e.item(b));
			d.f(Math.min(d.f(), f));
			d.g(Math.max(d.g(), f));
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
	$type: new $.ig.Type('CategoryFramePreparer', $.ig.CategoryFramePreparerBase.prototype.$type)
}, true);




$.ig.util.defType('IPreparesCategoryTrendline', 'Object', {

		$type: new $.ig.Type('IPreparesCategoryTrendline', null)
}, true);




$.ig.util.defType('BrushScale', 'DependencyObject', {

		init: function () {

			var $self = this;
			this.e = null;

			$.ig.DependencyObject.prototype.init.call(this);
						this.i(new $.ig.List$1($.ig.Series.prototype.$type, 0));
				this.brushes(new $.ig.BrushCollection());
				this.brushes().collectionChanged = $.ig.Delegate.prototype.combine(this.brushes().collectionChanged, this.j.on(this));
				this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (a, b) { return $self.o(a, b.propertyName(), b.oldValue(), b.newValue())				});
		}
, 
	j: function (a, b) {
		var d = this.i().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			c.renderSeries(false);
			c.e5();
		}
	}

, 
	brushes: function (a) {
		if (arguments.length === 1) {
			if (this.e != null) {
			this.e.collectionChanged = $.ig.Delegate.prototype.remove(this.e.collectionChanged, this.j.on(this));
			}
			this.e = a;
			if (this.e != null) {
			this.e.collectionChanged = $.ig.Delegate.prototype.combine(this.e.collectionChanged, this.j.on(this));
			}
			var c = this.i().getEnumerator();
			while (c.moveNext()) {
				var b = c.current();
				b.renderSeries(false);
				b.e5();
			}
			return a;
		} else {
			return this.e;
		}
	}
, 
	e: null
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
	registerSeries: function (a) {
		if (!this.i().contains(a)) {
			this.i().add(a);
		}
	}

, 
	unregisterSeries: function (a) {
		if (this.i().contains(a)) {
			this.i().remove(a);
		}
	}

, 
	getBrush: function (a) {
		if (this.brushes() == null || a < 0 || a >= this.brushes().count()) {
			return null;
		}
		return this.brushes().item(a);
	}

, 
	m: function (a) {
		if (this.brushes() == null || this.brushes().count() == 0 || a < 0) {
			return null;
		}
		return this.brushes().ap(a);
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	n: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}

, 
	o: function (a, b, c, d) {
		var f = this.i().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			e.renderSeries(false);
			e.e5();
		}
	}
,
	$type: new $.ig.Type('BrushScale', $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);



$.ig.util.defType('IProvidesViewport', 'Object', {

		$type: new $.ig.Type('IProvidesViewport', null)
}, true);

$.ig.util.defType('Series', 'Control', {

	_view: null,
	view: function (a) {
		if (arguments.length === 1) {
			this._view = a;
			return a;
		} else {
			return this._view;
		}
	}

, 
		init: function () {

			var $self = this;
			this.ce = true;
			this.cp = new $.ig.SeriesComponentsForView();

			$.ig.Control.prototype.init.call(this);
						this.dv(true);
				this.view(this.ed());
				this.view().ab($.ig.Rect.prototype.empty());
				this.ea(this.view());
				this.view().ag();
				this.a3($.ig.Series.prototype.$type);
				this.cj = function (a, b) {
					$self.ey(b.oldRect(), b.newRect());
				};
				this.ci = function (c, d) {
					$self.e6(c, d.propertyName(), d.oldValue(), d.newValue());
				};
				this.cl = function (e, f) {
					if ($self.seriesViewer() != null) {
						$self.dv(true);
						$self.seriesViewer().i7();
					}
					$self.fc(f.action(), f.position(), f.count(), f.propertyName());
				};
				this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (g, h) {
					$self.e6(g, h.propertyName(), h.oldValue(), h.newValue());
				});
				this.rootCanvas(new $.ig.Canvas());
				this.dr(new $.ig.DoubleAnimator(0, 1, this.transitionDuration()));
				this.dr().propertyChanged = $.ig.Delegate.prototype.combine(this.dr().propertyChanged, this.d7.on(this));
				this.d($.ig.Series.prototype.cb, (function () { var $ret = new $.ig.Binding(1, "Visibility");
				$ret.d($self); return $ret;}()));
		}
, 
	d7: function (a, b) {
		this.dz(this.dr().k());
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
	ea: function (a) {
	}

, 
	eb: function () {
		this.gh(this.actualLegend(), this.actualLegend());
		if (this.dx() == null && this.syncLink() != null && this.itemsSource() != null) {
			this.dx(($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, this.syncLink())).getFastItemsSource(this.itemsSource()));
		}
	}

, 
	ec: function () {
		this.gg();
		if (this.dx() != null && this.syncLink() != null && this.itemsSource() != null) {
			this.dx(($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, this.syncLink())).releaseFastItemsSource(this.itemsSource()));
		}
		this.view().ba();
	}

, 
	ed: function () {
		return new $.ig.SeriesView(this);
	}

, 
	_rootCanvas: null,
	rootCanvas: function (a) {
		if (arguments.length === 1) {
			this._rootCanvas = a;
			return a;
		} else {
			return this._rootCanvas;
		}
	}

, 
	ef: function () {
		return false;
	}

, 
	eg: function (a) {
		return -1;
	}

, 
	eh: function (a) {
		return null;
	}

, 
	ei: function (a, b) {
		return a.eh(b);
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	ej: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}

, 
	ds: function () {
			return false;
	}

, 
	el: function (a, b) {
		var c = this.view().bf(a);
		var d = c != null ? c.item() : null;
		if (d == null) {
			var e = this.view().ab();
			var f = this.view().ac();
			var g = {__x: f.left() + f.width() * (b.__x - e.left()) / e.width(), __y: f.top() + f.height() * (b.__y - e.top()) / e.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			d = this.eh(g);
		}
		return d;
	}

, 
	scrollIntoView: function (a) {
		return false;
	}

, 
	em: function (a) {
		return new $.ig.AxisRange(NaN, NaN);
	}

, 
	renderSeries: function (a) {
		if (this.seriesViewer() != null) {
			this.seriesViewer().fc().u($.ig.ChartContentType.prototype.series, this, this.du(), a);
		}
	}

, 
	en: function (a) {
		this.eo(a);
	}

, 
	eo: function (a) {
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
	er: function (a, b) {
		if (this.dt() == null) {
			this.dt(this.ed());
			this.dt().ad(true);
			if (this.seriesViewer() != null) {
				this.seriesViewer().fp().m(this.dt());
			}
			this.dt().ag();
		}
		this.dt().ab(a);
	}

, 
	getViewInfo: function (a, b) {
		a = this.view().ab();
		b = this.view().ac();
		return {
			viewportRect: a,
			windowRect: b
		};
	}

, 
	es: function (a, b, c) {
		return this.__visibility == $.ig.Visibility.prototype.visible;
	}

, 
	et: function (a) {
		this.eu(a, this.view());
	}

, 
	eu: function (a, b) {
		if (a) {
			this.dv(true);
		}
	}

, 
	ev: function () {
		return this.ew(this.view());
	}

, 
	ew: function (a) {
		var b = a.ab();
		var c = a.ac();
		if (!this.es(b, c, a)) {
			this.eu(true, a);
			return true;
		}
		return false;
	}

, 
	ex: function (a, b) {
		this.view().ab(b);
		this.ez(a, b);
		if (this.seriesViewer() != null) {
			this.seriesViewer().fc().ag($.ig.ChartContentType.prototype.series, this, this.du(), b);
		}
	}

, 
	ey: function (a, b) {
	}

, 
	ez: function (a, b) {
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
	ce: null
, 
	dv: function (a) {
		if (arguments.length === 1) {
			this.ce = a;
			return a;
		} else {
			return this.ce;
		}
	}

, 
	e4: function () {
		this.dv(true);
		if (this.seriesViewer() != null) {
			this.seriesViewer().i7();
		}
	}

, 
	e5: function () {
		this.dv(true);
		if (this.seriesViewer() != null) {
			this.seriesViewer().i8();
		}
	}

, 
	e6: function (a, b, c, d) {
		var $self = this;
		switch (b) {
			case $.ig.Series.prototype.bb:
				if ($.ig.util.cast($.ig.SyncLink.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.SyncLink.prototype.$type, c)).propertyUpdated = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.SyncLink.prototype.$type, c)).propertyUpdated, this.ci);
					this.gj($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, c));
				}
				if ($.ig.util.cast($.ig.SyncLink.prototype.$type, d) != null) {
					($.ig.util.cast($.ig.SyncLink.prototype.$type, d)).propertyUpdated = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.SyncLink.prototype.$type, d)).propertyUpdated, this.ci);
					this.gk($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, d));
				}
				if (this.index() == -1) {
					this.index($.ig.XamDataChart.prototype.k1(this));
				}
				break;
			case $.ig.XamDataChart.prototype.kg:
			case $.ig.XamDataChart.prototype.kj:
			case $.ig.XamDataChart.prototype.kh:
			case $.ig.XamDataChart.prototype.ki:
				this.fi();
				break;
			case $.ig.Series.prototype.bc:
				if ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).windowRectChanged = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).windowRectChanged, this.cj);
					($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).series().collectionChanged = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).series().collectionChanged, this.ch);
					($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).propertyUpdated = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).propertyUpdated, this.ci);
					($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).fc().s($.ig.ChartContentType.prototype.series, this);
					this.view().b0(c);
				}
				if ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, d) != null) {
					($.ig.util.cast($.ig.SeriesViewer.prototype.$type, d)).windowRectChanged = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, d)).windowRectChanged, this.cj);
					($.ig.util.cast($.ig.SeriesViewer.prototype.$type, d)).series().collectionChanged = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, d)).series().collectionChanged, this.ch);
					($.ig.util.cast($.ig.SeriesViewer.prototype.$type, d)).propertyUpdated = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, d)).propertyUpdated, this.ci);
					this.du(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, d)).fc().r($.ig.ChartContentType.prototype.series, this, this.en.on(this)));
					this.view().b1(d);
				}
				if (this.index() == -1 || d == null) {
					this.index($.ig.XamDataChart.prototype.k1(this));
				}
				this.actualLegend(this.gl());
				this.gf($.ig.util.cast($.ig.XamDataChart.prototype.$type, c), $.ig.util.cast($.ig.XamDataChart.prototype.$type, d));
				break;
			case $.ig.Series.prototype.bq:
				if (this.view() != null) {
					this.view().cb();
				}
				break;
			case $.ig.Series.prototype.bs:
			case $.ig.Series.prototype.bu:
				this.view().b9();
				break;
			case $.ig.Series.prototype.br:
			case $.ig.Series.prototype.bt:
			case $.ig.Series.prototype.bz:
			case $.ig.Series.prototype.by:
			case $.ig.Series.prototype.bl:
				this.fi();
				this.renderSeries(false);
				break;
			case $.ig.Series.prototype.bd:
				if (this.syncLink() != null) {
					this.gk(this.syncLink());
				}
				break;
			case $.ig.Series.prototype.be:
				this.e4();
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).event = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.FastItemsSource.prototype.$type, c)).event, this.cl);
				}
				if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
					($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d)).event = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d)).event, this.cl);
				}
				break;
			case $.ig.XamDataChart.prototype.a8:
				if (d != null) {
					if (a == this) {
						($.ig.util.cast($.ig.LegendBase.prototype.$type, d)).br(this);
					} else if ($.ig.util.cast($.ig.XamDataChart.prototype.$type, a) !== null) {
						($.ig.util.cast($.ig.LegendBase.prototype.$type, d)).bs(a);
					}
				}
				this.actualLegend(this.gl());
				break;
			case $.ig.Series.prototype.bg:
				this.gh($.ig.util.cast($.ig.LegendBase.prototype.$type, c), $.ig.util.cast($.ig.LegendBase.prototype.$type, d));
				break;
			case $.ig.Series.prototype.bf:
				this.gi($.ig.util.cast($.ig.Control.prototype.$type, c), $.ig.util.cast($.ig.Control.prototype.$type, d));
				break;
			case $.ig.Series.prototype.bh:
				this.view().ca();
				break;
			case $.ig.Series.prototype.b0:
				this.view().a6(this.toolTip());
				break;
			case $.ig.XamDataChart.prototype.a7:
				if (this.seriesViewer() != null) {
					if (!this.dw()) {
						this.seriesViewer().gc(this, this.eh(this.seriesViewer().crosshairPoint()));
					}
				}
				break;
			case $.ig.Series.prototype.bp:
				this.renderSeries(false);
				this.e5();
				break;
			case $.ig.Series.prototype.bx:
				this.view().b9();
				this.renderSeries(false);
				break;
			case $.ig.Series.prototype.bn:
			case $.ig.Series.prototype.bm:
				this.dy(true);
				this.dr().l(this.transitionDuration());
				break;
			case $.ig.Series.prototype.bk:
				this.renderSeries(false);
				break;
			case $.ig.Series.prototype.a9:
				if (c != d) {
					this.renderSeries(false);
				}
				this.e5();
				break;
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
	e9: function (a) {
		a.dw(true);
	}

, 
	syncLink: function (a) {
		if (arguments.length === 1) {
			if (this.syncLink() != a) {
				var b = this.syncLink();
				this.cf = a;
				this.ej($.ig.Series.prototype.bb, b, this.syncLink());
			}
			return a;
		} else {
			return this.cf;
		}
	}
, 
	cf: null
, 
	seriesViewer: function (a) {
		if (arguments.length === 1) {
			if (this.seriesViewer() != a) {
				var b = this.seriesViewer();
				this.cg = a;
				this.ej($.ig.Series.prototype.bc, b, this.cg);
			}
			return a;
		} else {
			return this.cg;
		}
	}
, 
	cg: null
, 
	chart: function (a) {
		if (arguments.length === 1) {
			this.seriesViewer(a);
			return a;
		} else {
			return $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
		}
	}
, 
	ch: null, 
	ci: null, 
	cj: null
, 
	itemsSource: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.itemsSourceProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.itemsSourceProperty);
		}
	}

, 
	dx: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.ck, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.ck);
		}
	}
, 
	cl: null
, 
	fc: function (a, b, c, d) {
	}

, 
	legend: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.legendProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.legendProperty);
		}
	}

, 
	legendItem: function (a) {
		if (arguments.length === 1) {
			if (this.legendItem() != a) {
				var b = this.legendItem();
				this.cm = a;
				this.ej($.ig.Series.prototype.bf, b, this.cm);
			}
			return a;
		} else {
			return this.cm;
		}
	}
, 
	cm: null
, 
	fe: function () {
		return this.ff();
	}

, 
	ff: function () {
		var $self = this;
		var a = $.ig.util.cast($.ig.ContentControl.prototype.$type, this.legendItem());
		var b = this.legendItemTemplate();
		if (b != null) {
			if (a == null) {
				a = new $.ig.ContentControl();
			}
			a.a9((function () { var $ret = new $.ig.DataContext();
			$ret.series($self);
			$ret.item(null); return $ret;}()));
			a.ba(b);

		} else {
			a = null;
		}
		return a;
	}

, 
	actualLegend: function (a) {
		if (arguments.length === 1) {
			if (this.actualLegend() != a) {
				var b = this.cn;
				this.cn = a;
				this.ej($.ig.Series.prototype.bg, b, this.cn);
			}
			return a;
		} else {
			return this.cn;
		}
	}
, 
	cn: null
, 
	legendItemVisibility: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.legendItemVisibilityProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.legendItemVisibilityProperty);
		}
	}

, 
	legendItemBadgeTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.legendItemBadgeTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.legendItemBadgeTemplateProperty);
		}
	}

, 
	legendItemTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.legendItemTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.legendItemTemplateProperty);
		}
	}

, 
	discreteLegendItemTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.discreteLegendItemTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.discreteLegendItemTemplateProperty);
		}
	}

, 
	index: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.indexProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.indexProperty);
		}
	}

, 
	fh: function () {
		this.fj();
	}

, 
	fi: function () {
		this.fj();
	}

, 
	fj: function () {
		this.e5();
		if (this.index() < 0) {
			return;
		}
		if (this.brush() != null) {
			this.view().bb();
			this.view().bc();

		} else {
			this.actualBrush(this.seriesViewer() == null ? null : this.seriesViewer().fx(this.index()));
		}
		if (this.outline() != null) {
			this.view().bd();
			this.view().be();

		} else {
			this.actualOutline(this.seriesViewer() == null ? null : this.seriesViewer().fy(this.index()));
		}
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
	transitionDuration: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.transitionDurationProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.transitionDurationProperty);
		}
	}

, 
	dz: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.co, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.co);
		}
	}

, 
	fo: function () {
		return this.dr().w();
	}

, 
	fp: function () {
		this.dr().t();
	}

, 
	resolution: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.resolutionProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.resolutionProperty);
		}
	}

, 
	title: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.titleProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.titleProperty);
		}
	}

, 
	brush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.brushProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.brushProperty);
		}
	}

, 
	actualBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.actualBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.actualBrushProperty);
		}
	}

, 
	outline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.outlineProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.outlineProperty);
		}
	}

, 
	actualOutline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.actualOutlineProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.actualOutlineProperty);
		}
	}

, 
	miterLimit: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.miterLimitProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.miterLimitProperty);
		}
	}

, 
	thickness: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.thicknessProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.thicknessProperty);
		}
	}

, 
	dashCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.dashCapProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.dashCapProperty);
		}
	}

, 
	dashArray: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.dashArrayProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.dashArrayProperty);
		}
	}

, 
	toolTip: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.toolTipProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.toolTipProperty);
		}
	}

, 
	fs: function () {
	}

, 
	wMA: function (a, b) {
		return $.ig.TrendCalculators.prototype.a(a, b);
	}

, 
	eMA: function (a, b) {
		return $.ig.TrendCalculators.prototype.b(a, b);
	}

, 
	mMA: function (a, b) {
		return $.ig.TrendCalculators.prototype.c(a, b);
	}

, 
	cMA: function (a) {
		return $.ig.TrendCalculators.prototype.d(a);
	}

, 
	sMA: function (a, b) {
		return $.ig.TrendCalculators.prototype.e(a, b);
	}

, 
	movingSum: function (a, b) {
		return $.ig.TrendCalculators.prototype.f(a, b);
	}

, 
	sTDEV: function (a, b) {
		return $.ig.TrendCalculators.prototype.g(a, b);
	}

, 
	toEnumerableRange: function (a, b, c) {
		var $self = this;
		var $iter = function () { return function (a, b, c) { return {
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
							this.$d = b;
							this.$state = 5;
							break;
						case 2:
							this.$current =  a(this.$d);
							this.$state = 3
							return true;
						case 3:
							this.$state = 4;
							break;
						case 4:
							this.$d++;
							this.$state = 5;
							break;
						case 5:
							if (this.$d < c) {
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
		}; } (a, b, c) };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	toEnumerable: function (a, b) {
		return $.ig.Series.prototype.toEnumerableRange(a, 0, b);
	}

, 
	startCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.startCapProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.startCapProperty);
		}
	}

, 
	endCap: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.Series.prototype.endCapProperty, a);
			return a;
		} else {
			return this.b($.ig.Series.prototype.endCapProperty);
		}
	}
, 
	cp: null
, 
	ft: function () {
		return this.cp;
	}

, 
	fu: function (a) {
		this.gq(a);
	}

, 
	fv: function () {
		return this.transitionDuration();
	}

, 
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
	d3: function () {
			return false;
	}
, 
	cq: null
, 
	d4: function (a) {
		if (arguments.length === 1) {
			this.cq = a;
			return a;
		} else {
			return this.cq;
		}
	}
, 
	cr: null
, 
	d5: function (a) {
		if (arguments.length === 1) {
			this.cr = a;
			return a;
		} else {
			return this.cr;
		}
	}

, 
	f7: function (a, b, c) {
		this.view().a3();
		this.d1(true);
		var d = this.el(b, a);
		this.d0(d);
		if (this.seriesViewer() != null && !this.du().j()) {
			this.view().bo(a, d, c);
		}
		this.d4(false);
		if (this.d3() && d == null) {
			this.d4(true);
		}
		if (this.seriesViewer() != null && !this.d4()) {
			if (this.d3()) {
				this.d5(true);
			}
			this.seriesViewer().f5(this, d, c);
		}
	}

, 
	f8: function (a, b, c) {
		this.d1(true);
		var d = this.el(b, a);
		this.view().bo(a, d, c);
		if (d != null) {
			this.d0(d);
		}
		if (this.seriesViewer() != null && d != null && this.d4()) {
			this.d4(false);
			this.d5(true);
			this.seriesViewer().f5(this, d, c);
		}
		if (this.seriesViewer() != null && (!this.d3() || d != null) && !this.d4()) {
			this.seriesViewer().f6(this, d, c);
		}
		if (d == null && !this.d4() && this.d3()) {
			this.seriesViewer().f7(this, this.d0(), c);
			this.d5(false);
			this.d4(true);
		}
	}

, 
	f9: function (a, b, c) {
		this.view().a4();
		this.d1(false);
		var d = this.d0();
		this.view().a5();
		if (this.seriesViewer() != null && (this.d5() || !this.d3())) {
			this.d5(false);
			this.d4(false);
			this.seriesViewer().f7(this, d, c);
		}
	}

, 
	ga: function (a, b, c) {
		this.d2(true);
		if (this.seriesViewer() != null) {
			this.seriesViewer().f8(this, this.el(b, a), c);
		}
	}

, 
	gb: function (a, b, c) {
		this.d2(false);
		if (this.seriesViewer() != null && this.d1()) {
			this.seriesViewer().f9(this, this.el(b, a), c);
		}
	}

, 
	gc: function (a, b, c) {
		if (this.d2()) {
			this.gb(a, b, c);
		}
		if (this.d1()) {
			this.f9(a, b, c);
		}
	}

, 
	gd: function (a, b, c) {
		if (this.seriesViewer() != null) {
			this.seriesViewer().ga(this, this.el(b, a), c);
		}
	}

, 
	ge: function (a, b, c) {
		if (this.seriesViewer() != null) {
			this.seriesViewer().gb(this, this.el(b, a), c);
		}
	}

, 
	gf: function (a, b) {
		if (this.actualLegend() != null && this.legendItem() != null) {
			if (b == null && this.actualLegend().children().contains(this.legendItem())) {
				this.actualLegend().children().remove(this.legendItem());
			}
			if (b != null && !this.actualLegend().children().contains(this.legendItem()) && this.legendItemVisibility() != $.ig.Visibility.prototype.collapsed) {
				this.actualLegend().by(this.legendItem(), this);
			}
		}
	}

, 
	gg: function () {
		if (this.actualLegend() == null || this.legendItem() == null) {
			return;
		}
		this.actualLegend().children().remove(this.legendItem());
	}

, 
	gh: function (a, b) {
		if (this.legendItem() != null) {
			if (a != null && a.children().contains(this.legendItem())) {
				a.children().remove(this.legendItem());
			}
			if (this.seriesViewer() != null && b != null && !b.children().contains(this.legendItem()) && this.legendItemVisibility() != $.ig.Visibility.prototype.collapsed) {
				b.by(this.legendItem(), this);
			}
		}
	}

, 
	gi: function (a, b) {
		if (this.actualLegend() != null && a != null && this.actualLegend().children().contains(a)) {
			this.actualLegend().children().remove(a);
		}
		if (this.seriesViewer() != null && this.actualLegend() != null && b != null && this.legendItemVisibility() != $.ig.Visibility.prototype.collapsed) {
			this.actualLegend().by(b, this);
		}
	}

, 
	gj: function (a) {
		this.dx(a.releaseFastItemsSource(this.itemsSource()));
	}

, 
	gk: function (a) {
		this.dx(a.getFastItemsSource(this.itemsSource()));
	}

, 
	gl: function () {
		if (this.legend() != null) {
			return this.legend();
		}
		if (this.seriesViewer() != null && this.seriesViewer().legend() != null) {
			return this.seriesViewer().legend();
		}
		return null;
	}

, 
	gm: function (a) {
		return (a && this.fv() > 0) || this.fo();
	}

, 
	gn: function (a) {
		if (a != null) {
			a.deregisterSeries(this);
		}
	}

, 
	go: function (a) {
		if (a != null) {
			a.registerSeries(this);
		}
	}

, 
	gp: function () {
		return this.view().a7();
	}

, 
	gq: function (a) {
		this.view().a8(a);
	}

, 
	gr: function (a, b) {
		this.view().bp(a, b);
	}

, 
	provideContext: function (a, b) {
		this.view().bu(a, b);
	}

, 
	provideViewport: function (a) {
		this.ex(this.d6(), a);
	}

, 
	handleCollectionChanged: function (a) {
		if (this.dx() != null) {
			this.dx().ae(a);
		}
	}

, 
	notifySetItem: function (a, b, c) {
		this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, c, b, a));
	}

, 
	notifyClearItems: function () {
		this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset));
	}

, 
	notifyInsertItem: function (a, b) {
		this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, b, a));
	}

, 
	notifyRemoveItem: function (a, b) {
		this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, b, a));
	}

, 
	styleUpdated: function () {
		this.renderSeries(false);
	}
, 
	__coercionMethods: null
, 
	coercionMethods: function (a) {
		if (arguments.length === 1) {
			this.__coercionMethods = a;
			return a;
		} else {
			return this.__coercionMethods;
		}
	}

, 
	getHitDataContext: function (a) {
		return null;
	}

, 
	gs: function (a) {
		if (a == null) {
			return this.dx().ab(null, null);
		}
		var b = null;
		var c = $.ig.SeriesViewer.prototype.getCoercionMethod(a, this.coercionMethods());
		a = c.c();
		b = c.d();
		return this.dx().ab(a, b);
	}

, 
	gt: function (a) {
		if (a == null) {
			return this.dx().aa(null, null);
		}
		var b = null;
		var c = $.ig.SeriesViewer.prototype.getCoercionMethod(a, this.coercionMethods());
		a = c.c();
		b = c.d();
		return this.dx().aa(a, b);
	}

, 
	gu: function (a) {
		if (a == null) {
			return this.dx().z(null, null);
		}
		var b = null;
		var c = $.ig.SeriesViewer.prototype.getCoercionMethod(a, this.coercionMethods());
		a = c.c();
		b = c.d();
		return this.dx().z(a, b);
	}

, 
	d6: function () {
			return this.view() != null ? this.view().ab() : $.ig.Rect.prototype.empty();
	}

, 
	exportVisualData: function () {
		var a = new $.ig.SeriesVisualData();
		a.viewport(this.d6());
		a.type(this.getType().typeName());
		a.name(this.name());
		this.gw(a);
		this.view().b5(a);
		return a;
	}

, 
	gw: function (a) {
	}
,
	$type: new $.ig.Type('Series', $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type, $.ig.IProvidesViewport.prototype.$type])
}, true);

$.ig.util.defType('MarkerSeries', 'Series', {
	init: function () {

		$.ig.Series.prototype.init.call(this);

	}
, 
	_h8: null,
	h8: function (a) {
		if (arguments.length === 1) {
			this._h8 = a;
			return a;
		} else {
			return this._h8;
		}
	}

, 
	ea: function (a) {
		$.ig.Series.prototype.ea.call(this, a);
		this.h8(a);
	}

, 
	ds: function () {
			return true;
	}

, 
	markerType: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.markerTypeProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.markerTypeProperty);
		}
	}

, 
	markerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.markerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.markerTemplateProperty);
		}
	}

, 
	actualMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.actualMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.actualMarkerTemplateProperty);
		}
	}

, 
	markerBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.markerBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.markerBrushProperty);
		}
	}

, 
	actualMarkerBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.actualMarkerBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.actualMarkerBrushProperty);
		}
	}

, 
	markerOutline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.markerOutlineProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.markerOutlineProperty);
		}
	}

, 
	actualMarkerOutline: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.actualMarkerOutlineProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.actualMarkerOutlineProperty);
		}
	}

, 
	markerStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.markerStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.markerStyleProperty);
		}
	}

, 
	useLightweightMarkers: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.MarkerSeries.prototype.useLightweightMarkersProperty, a);
			return a;
		} else {
			return this.b($.ig.MarkerSeries.prototype.useLightweightMarkersProperty);
		}
	}

, 
	ie: function () {
		return this.actualMarkerTemplate() != null && ((this.markerType() != $.ig.MarkerType.prototype.none && this.markerType() != $.ig.MarkerType.prototype.unset) || this.markerTemplate() != null);
	}

, 
	e6: function (a, b, c, d) {
		$.ig.Series.prototype.e6.call(this, a, b, c, d);
		switch (b) {
			case $.ig.MarkerSeries.prototype.hs:
			case $.ig.MarkerSeries.prototype.hp:
			case $.ig.MarkerSeries.prototype.hu:
			case $.ig.MarkerSeries.prototype.hq:
				this.fj();
				break;
			case $.ig.MarkerSeries.prototype.hr:
				if (c == $.ig.MarkerSeries.prototype.nullMarkerTemplate || d == $.ig.MarkerSeries.prototype.nullMarkerTemplate || (c == null || d != null)) {
					this.h8().ck();
					var e = $.ig.util.cast($.ig.MarkerSeriesView.prototype.$type, this.dt());
					if (e != null) {
						e.ck();
					}
					this.renderSeries(false);
				}
				this.e5();
				break;
			case $.ig.MarkerSeries.prototype.hx:
				this.h8().cl(this.useLightweightMarkers());
				this.renderSeries(false);
				break;
		}
	}

, 
	getMarkerTemplatePropertyName: function (a) {
		switch (a) {
			case $.ig.MarkerType.prototype.circle:
				return $.ig.XamDataChart.prototype.b8;
			case $.ig.MarkerType.prototype.triangle:
				return $.ig.XamDataChart.prototype.b9;
			case $.ig.MarkerType.prototype.pyramid:
				return $.ig.XamDataChart.prototype.ca;
			case $.ig.MarkerType.prototype.square:
				return $.ig.XamDataChart.prototype.cb;
			case $.ig.MarkerType.prototype.diamond:
				return $.ig.XamDataChart.prototype.cc;
			case $.ig.MarkerType.prototype.pentagon:
				return $.ig.XamDataChart.prototype.cd;
			case $.ig.MarkerType.prototype.hexagon:
				return $.ig.XamDataChart.prototype.ce;
			case $.ig.MarkerType.prototype.tetragram:
				return $.ig.XamDataChart.prototype.cf;
			case $.ig.MarkerType.prototype.pentagram:
				return $.ig.XamDataChart.prototype.cg;
			case $.ig.MarkerType.prototype.hexagram:
				return $.ig.XamDataChart.prototype.ch;
			default:
			case $.ig.MarkerType.prototype.unset:
			case $.ig.MarkerType.prototype.none:
				return null;
		}
	}

, 
	resolveMarkerType: function (a, b) {
		var $self = this;
		var c = a.seriesViewer() != null ? b : $.ig.MarkerType.prototype.none;
		if (c == $.ig.MarkerType.prototype.automatic) {
			var d = (function () { var $ret = new Array();
$ret.add($.ig.MarkerType.prototype.circle);
$ret.add($.ig.MarkerType.prototype.triangle);
$ret.add($.ig.MarkerType.prototype.pentagon);
$ret.add($.ig.MarkerType.prototype.tetragram);
$ret.add($.ig.MarkerType.prototype.diamond);
$ret.add($.ig.MarkerType.prototype.square);
$ret.add($.ig.MarkerType.prototype.hexagon);
$ret.add($.ig.MarkerType.prototype.pentagram);
$ret.add($.ig.MarkerType.prototype.pyramid);
$ret.add($.ig.MarkerType.prototype.hexagram); return $ret;}());
			c = a.index() >= 0 ? d[a.index() % d.length] : $.ig.MarkerType.prototype.none;
		}
		return c;
	}

, 
	fj: function () {
		$.ig.Series.prototype.fj.call(this);
		if (this.index() < 0) {
			return;
		}
		if (this.h8().ct()) {
			this.h8().cu();
			this.h8().cv();

		} else {
			var a = $.ig.MarkerSeries.prototype.resolveMarkerType(this, this.markerType());
			var b = $.ig.MarkerSeries.prototype.getMarkerTemplatePropertyName(a);
			if (b == null) {
				this.actualMarkerTemplate($.ig.MarkerSeries.prototype.nullMarkerTemplate);

			} else {
				this.h8().cw(b);
			}
		}
		if (this.markerBrush() != null) {
			this.h8().cx();
			this.h8().cy();

		} else {
			this.actualMarkerBrush(this.seriesViewer() == null ? null : this.seriesViewer().getMarkerBrushByIndex(this.index()));
		}
		if (this.markerOutline() != null) {
			this.h8().cz();
			this.h8().c0();

		} else {
			this.actualMarkerOutline(this.seriesViewer() == null ? null : this.seriesViewer().getMarkerOutlineByIndex(this.index()));
		}
	}

, 
	gw: function (a) {
		var $self = this;
		$.ig.Series.prototype.gw.call(this, a);
		this.h8().cp(function (b) {
			var c = new $.ig.MarkerVisualData();
			c.x(b.y());
			c.y(b.x());
			c.index(-1);
			c.contentTemplate(b.ba());
			if (b.a9() != null && $.ig.util.cast($.ig.DataContext.prototype.$type, b.a9()) !== null && b.__visibility == $.ig.Visibility.prototype.visible) {
				var d = b.a9();
				if (d.item() != null) {
					c.index($self.dx().x(d.item()));
				}
			}
			c.visibility(b.__visibility);
			a.markerShapes().add(c);
		});
	}

, 
	getHitDataContext: function (a) {
		var b = this.h8().c4(a);
		var c = null;
		if (b != null) {
			c = b.a9();
		}
		return c;
	}
,
	$type: new $.ig.Type('MarkerSeries', $.ig.Series.prototype.$type)
}, true);

$.ig.util.defType('ISupportsErrorBars', 'Object', {

		$type: new $.ig.Type('ISupportsErrorBars', null)
}, true);



$.ig.util.defType('SeriesView', 'Object', {

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

			this.d = $.ig.Rect.prototype.empty();
			this.e = new $.ig.Brush();
			this.__toolTipObject = null;
			this.f = null;
			this.g = new $.ig.SeriesComponentsFromView();
			this.h = true;
			this.i = false;
			this.j = false;
			this.k = false;

			$.ig.Object.prototype.init.call(this);
						this.u(a);
				this.ad(false);
				this.c = new $.ig.Rectangle();
		}
, 
	ag: function () {
		var $self = this;
		if (!this.ad()) {
			this.u().legendItemTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($self.aj());
			$ret.measure($self.ak()); return $ret;}()));
			this.u().legendItemBadgeTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($self.al());
			$ret.measure($self.am()); return $ret;}()));
			this.u().discreteLegendItemTemplate((function () { var $ret = new $.ig.DataTemplate();
			$ret.render($self.ah());
			$ret.measure($self.ai()); return $ret;}()));
			this.y(new $.ig.DataContext());
			this.y().series(this.u());
		}
	}

, 
	ah: function () {
		return $.ig.LegendTemplates.prototype.b;
	}

, 
	ai: function () {
		return $.ig.LegendTemplates.prototype.j;
	}

, 
	aj: function () {
		return $.ig.LegendTemplates.prototype.a;
	}

, 
	ak: function () {
		return $.ig.LegendTemplates.prototype.i;
	}

, 
	al: function () {
		return $.ig.LegendTemplates.prototype.f;
	}

, 
	am: function () {
		return $.ig.LegendTemplates.prototype.k;
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
	index: function () {
			var b = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.u().chart());
			var c = 0;
			if (b != null) {
				if (b.gridMode() == $.ig.GridMode.prototype.behindSeries || b.gridMode() == $.ig.GridMode.prototype.none) {
					c = b.axes().count();
				}
			}
			return c + this.u().seriesViewer().series().indexOf(this.u());
	}

, 
	an: function () {
		if (this.u().seriesViewer() == null) {
			return;
		}
		if (!this.isDirty()) {
			this.isDirty(true);
			if (this.j) {
				this.u().seriesViewer().fp().p(this.z(), this.aa());

			} else {
				this.u().seriesViewer().canvasRenderScheduler().p(this.z(), this.aa());
			}
		}
	}

, 
	undirty: function (a) {
		this.isDirty(false);
		this.ao(a);
	}
, 
	c: null
, 
	ao: function (a) {
		if (this.z() == null) {
			return;
		}
		if (this.d.isEmpty()) {
			this.d = this.ab();
		}
		var b = this.d;
		var c = this.u().seriesViewer().getContainerRect();
		if (this.z().b()) {
			if (!b.isEmpty() && a) {
				this.z().t(c.left(), c.top(), c.width(), c.height());
			}
			if (a) {
				if (this.u().seriesViewer().plotAreaBackground() != null) {
					this.c.x(this.ab().top());
					this.c.y(this.ab().left());
					this.c.v(this.ab().width());
					this.c.w(this.ab().height());
					this.c.__fill = this.u().seriesViewer().plotAreaBackground();
					if (this.k) {
						this.z().e($.ig.GradientDirection.prototype.bottomTop, this.ab());
					}
					this.z().f(this.c);
				}
			}
		}
		if (this.aa() != null) {
			if (this.aa().b()) {
				if (!b.isEmpty() && a) {
					this.aa().t(b.left(), b.top(), b.width(), b.height());
				}
				this.av(true);
				this.a0(this.aa(), true);
				this.a1(this.aa(), true);
			}
		}
		if (this.z().b()) {
			this.z().o();
			this.z().q(this.ab());
			this.av(false);
			this.a0(this.z(), false);
			this.a1(this.z(), false);
			this.z().p();
		}
	}
, 
	d: null
, 
	ap: function (a, b, c) {
		if (c) {
			this.at(a, b);

		} else {
			this.ar(a, b);
		}
	}

, 
	aq: function (a, b, c) {
		if (c) {
			this.au(a, b);

		} else {
			this.as(a, b);
		}
	}

, 
	ar: function (a, b) {
	}

, 
	as: function (a, b) {
	}

, 
	at: function (a, b) {
	}

, 
	au: function (a, b) {
	}

, 
	av: function (a) {
		if (a) {
			this.ax();

		} else {
			this.aw();
		}
	}

, 
	aw: function () {
	}

, 
	ax: function () {
	}
, 
	e: null
, 
	ay: function (a) {
		return this.az();
	}

, 
	az: function () {
		var a = this.u().index();
		var num_ = (a + 1) * $.ig.SeriesView.prototype.a;
		var b = (num_ & 0x3F) << 2;
		num_ = num_ >> 6;
		var c = (num_ & 0x3F) << 2;
		num_ = num_ >> 6;
		var d = (num_ & 0x3F) << 2;
		this.e.__fill = "rgb(" + b + "," + c + "," + d + ")";
		return this.e;
	}

, 
	a0: function (a, b) {
		this.d = this.ab();
	}

, 
	a1: function (a, b) {
	}

, 
	a2: function () {
	}

, 
	a3: function () {
	}

, 
	a4: function () {
	}

, 
	a5: function () {
		if (this.__toolTipObject != null && this.x()) {
			this.x(false);
			var context_ = this.y();
			if (this.__toolTipObject.hideToolTip) { this.__toolTipObject.hideToolTip(context_); };
		}
	}
, 
	__toolTipObject: null, 
	f: null
, 
	a6: function (a) {
		var b = this.__toolTipObject;
		this.f = null;
		this.__toolTipObject = null;
		if ($.ig.util.cast(String, a) !== null || typeof a === "string") {
			this.f = a;

		} else {
			this.__toolTipObject = a;
			if (this.__toolTipObject != null) {
				this.__toolTipObject.css("position", "absolute");
				this.__toolTipObject.css("top", "0");
				this.__toolTipObject.css("left", "0");
				this.__toolTipObject.css("z-index", "10000");

			} else {
				if (!this.h && b != null) {
					this.u().seriesViewer().iv(b);
					this.h = true;
				}
			}
		}
	}
, 
	g: null
, 
	a7: function () {
		return this.g;
	}

, 
	a8: function (a) {
	}

, 
	a9: function () {
		return true;
	}

, 
	ba: function () {
	}

, 
	bb: function () {
		this.u().actualBrush(null);
	}

, 
	bc: function () {
		this.u().actualBrush(this.u().brush());
	}

, 
	bd: function () {
		this.u().actualOutline(null);
	}

, 
	be: function () {
		this.u().actualOutline(this.u().outline());
	}

, 
	bf: function (a) {
		if ($.ig.util.cast($.ig.DataContext.prototype.$type, a) !== null) {
			return a;
		}
		return null;
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
	h: null, 
	i: null
, 
	bo: function (a, b, c) {
		if (this.u().seriesViewer() == null || this.u().seriesViewer().dragCrosshairActivated()) {
			return;
		}
		this.x(true);
		this.v(a);
		this.w(b);
		this.y().item(b);
		var d = this.u().seriesViewer().getContainerOffsets();
		var pos_ = {__x: a.__x + 15 + d.c(), __y: a.__y + 15 + d.d(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var context_ = this.y();
		if (this.__toolTipObject != null) {
			if (this.i) {
				this.i = false;
				this.__toolTipObject.remove();
				this.__toolTipObject.css("position", "absolute");
				this.__toolTipObject.addClass(this.u().seriesViewer().tooltipStyle());
				this.u().seriesViewer().addTooltipToView(this.__toolTipObject);
				this.__toolTipObject.hide();
			}
			if (this.h) {
				this.u().seriesViewer().addTooltipToView(this.__toolTipObject);
				this.h = false;
			}
			context_.hideOthers = true;
			if (this.__toolTipObject.updateToolTip) { this.__toolTipObject.updateToolTip(context_); };
			if (this.__toolTipObject.offset) { this.__toolTipObject.offset({ left: pos_.__x, top: pos_.__y }); };
		}
	}

, 
	bp: function (a, b) {
		this.x(true);
		var c = {__x: a.__x + this.ab().left(), __y: a.__y + this.ab().top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var d = this.u().el(null, c);
		if (this.y() != null) {
			this.y().series(this.u());
			this.y().item(d);
		}
		var tooltip_ = this.__toolTipObject;
		var context_ = this.y();
		if (context_ != null) {
			context_.hideOthers = false;
		}
		if (!this.i && tooltip_ != null) {
			this.i = true;
			tooltip_.remove();
			tooltip_.css("position", "relative");
			tooltip_.css("top", "");
			tooltip_.css("left", "");
			tooltip_.removeClass(this.u().seriesViewer().tooltipStyle());
		}
		if (this.__toolTipObject != null) {
			if (tooltip_.updateToolTip) { tooltip_.updateToolTip(context_); };
		}
		if (tooltip_ != null) {
			b(tooltip_);
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
	bu: function (a, b) {
		this.z(a);
		this.aa(b);
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
	ac: function () {
			if (this.ad()) {
				return $.ig.XamDataChart.prototype.de;

			} else {
				return this.u().seriesViewer() != null ? this.u().seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
			}
	}
, 
	j: null
, 
	ad: function (a) {
		if (arguments.length === 1) {
			this.j = a;
			return a;
		} else {
			return this.j;
		}
	}

, 
	b0: function (a) {
		if (a != null) {
			a.canvasRenderScheduler().n(this);
			if (this.u().dt() != null) {
				a.fp().n(this.u().dt());
			}
		}
	}

, 
	b1: function (a) {
		if (a != null) {
			a.canvasRenderScheduler().m(this);
			if (this.u().dt() != null) {
				a.fp().m(this.u().dt());
				this.u().dt().an();
			}
			this.an();
		}
	}

, 
	postRender: function () {
		this.b2();
	}

, 
	b2: function () {
	}

, 
	b3: function (a) {
		return null;
	}

, 
	b4: function (a) {
		this.u().dt().z(a.b());
	}

, 
	b5: function (a) {
	}

, 
	b6: function (a, b, c, d, e) {
	}

, 
	b7: function (a) {
	}

, 
	b8: function (a) {
		return $.ig.Rect.prototype.empty();
	}

, 
	b9: function () {
		if (this.u().seriesViewer() != null) {
			var a = (this.u().legend() != null) ? this.u().legend() : this.u().seriesViewer().legend();
			if (a != null && this.u().legendItem() != null && a.children().contains(this.u().legendItem())) {
				a.children().remove(this.u().legendItem());
				var b = this.u().fe();
				(b.a9()).actualItemBrush(this.u().actualBrush());
				(b.a9()).outline(this.u().outline());
				(b.a9()).thickness(this.u().thickness());
				a.by(this.u().legendItem(), this.u());
			}
		}
	}

, 
	ca: function () {
		this.u().gh(this.u().actualLegend(), this.u().actualLegend());
	}

, 
	cb: function () {
		this.u().gh(this.u().actualLegend(), this.u().actualLegend());
	}

, 
	getViewInfo: function (a, b) {
		a = this.ab();
		b = this.ac();
		return {
			viewportRect: a,
			windowRect: b
		};
	}

, 
	cc: function () {
		return this.z() != null;
	}
, 
	k: null,
	$type: new $.ig.Type('SeriesView', $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type, $.ig.IProvidesViewport.prototype.$type])
}, true);

$.ig.util.defType('MarkerSeriesView', 'SeriesView', {

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
						this.cg(a);
		}
, 
	ag: function () {
		var $self = this;
		$.ig.SeriesView.prototype.ag.call(this);
		this.ch(new $.ig.List$1($.ig.Marker.prototype.$type, 0));
		this.cd = (function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.h);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}());
	}

, 
	ck: function () {
		var b = this.ch().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.ba(this.cg().actualMarkerTemplate());
		}
		this.an();
	}

, 
	cl: function (a) {
	}

, 
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
	co: function () {
		var $self = this;
		var a = new $.ig.Marker();
		a.a9((function () { var $ret = new $.ig.DataContext();
		$ret.series($self.u()); return $ret;}()));
		a.ba(this.cg().actualMarkerTemplate());
		this.ch().add(a);
		return a;
	}

, 
	cp: function (a) {
	}

, 
	cq: function (a) {
		a.__visibility = $.ig.Visibility.prototype.visible;
	}

, 
	cr: function (a) {
		a.__visibility = $.ig.Visibility.prototype.collapsed;
	}

, 
	cs: function (a) {
		this.ch().remove(a);
	}

, 
	ct: function () {
		return this.cg().markerTemplate() != null;
	}

, 
	cu: function () {
		this.cg().actualMarkerTemplate(null);
	}

, 
	cv: function () {
		this.cg().actualMarkerTemplate(this.cg().markerTemplate());
	}

, 
	cw: function (a) {
		var $self = this;
		switch (a) {
			case $.ig.XamDataChart.prototype.b8:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().circleMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.b9:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().triangleMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.ca:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().pyramidMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.cb:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().squareMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.cc:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().diamondMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.cd:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().pentagonMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.ce:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().hexagonMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.cf:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().tetragramMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.cg:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().pentagramMarkerTemplate());
				break;
			case $.ig.XamDataChart.prototype.ch:
				this.cg().actualMarkerTemplate(this.cg().seriesViewer().hexagramMarkerTemplate());
				break;
		}
	}

, 
	cx: function () {
		this.cg().actualMarkerBrush(null);
	}

, 
	cy: function () {
		this.cg().actualMarkerBrush(this.cg().markerBrush());
	}

, 
	cz: function () {
		this.cg().actualMarkerOutline(null);
	}

, 
	c0: function () {
		this.cg().actualMarkerOutline(this.cg().markerOutline());
	}

, 
	c1: function () {
		this.an();
	}

, 
	as: function (a, b) {
		$.ig.SeriesView.prototype.as.call(this, a, b);
		var c = a;
		var d = c.a9();
		if (d != null) {
			d.actualItemBrush(this.cg().actualMarkerBrush());
			if (d.itemBrush() != null) {
				d.actualItemBrush(d.itemBrush());
			}
			d.outline(this.cg().actualMarkerOutline());
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
			e.thickness(1 + $.ig.SeriesView.prototype.b);
		}
	}

, 
	b3: function (a) {
		if (a >= 0 && a < this.ch().count()) {
			return this.ch().__inner[a].a9();
		}
		return $.ig.SeriesView.prototype.b3.call(this, a);
	}
, 
	cd: null
, 
	a1: function (a, b) {
		$.ig.SeriesView.prototype.a1.call(this, a, b);
		if (a.b()) {
			var c = new $.ig.DataTemplatePassInfo();
			c.isHitTestRender = b;
			c.context = a.c();
			c.viewportTop = this.ab().top();
			c.viewportLeft = this.ab().left();
			c.viewportWidth = this.ab().width();
			c.viewportHeight = this.ab().height();
			c.passID = "Markers";
			var d = new $.ig.DataTemplateRenderInfo();
			d.isHitTestRender = b;
			d.passInfo = c;
			var e = new $.ig.DataTemplateMeasureInfo();
			e.passInfo = c;
			var f = false;
			var g = a.c();
			e.context = g;
			d.context = g;
			var h = 0;
			var i = 0;
			var j = true;
			if (this.cg().actualMarkerTemplate() != null && this.cg().actualMarkerTemplate().passStarting() != null) {
				this.cg().actualMarkerTemplate().passStarting()(c);
			}
			for (var k = 0; k < this.ch().count(); k++) {
				var l = this.ch().__inner[k];
				if (l.__visibility == $.ig.Visibility.prototype.collapsed) {
					continue;
				}
				this.aq(l, k, b);
				if (!f) {
					e.data = l.a9();
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
			if (this.cg().actualMarkerTemplate() != null && this.cg().actualMarkerTemplate().passCompleted() != null) {
				this.cg().actualMarkerTemplate().passCompleted()(c);
			}
		}
	}

, 
	c2: function (a) {
		a.create(this.co.on(this));
		a.destroy(this.cs.on(this));
		a.activate(this.cq.on(this));
		a.disactivate(this.cr.on(this));
	}

, 
	c3: function (a) {
		a.create(this.co.on(this));
		a.destroy(this.cs.on(this));
		a.activate(this.cq.on(this));
		a.disactivate(this.cr.on(this));
	}

, 
	c4: function (a) {
		var c = this.ch().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			if (b.__visibility == $.ig.Visibility.prototype.collapsed) {
				continue;
			}
			var d = (b.t() / 2) + $.ig.MarkerSeriesView.prototype.b;
			if (b.y() - d <= a.__x && b.y() + d >= a.__x && b.x() - d <= a.__y && b.x() + d >= a.__y) {
				return b;
			}
		}
		return null;
	}
,
	$type: new $.ig.Type('MarkerSeriesView', $.ig.SeriesView.prototype.$type)
}, true);







$.ig.util.defType('IHasCategoryModePreference', 'Object', {

		$type: new $.ig.Type('IHasCategoryModePreference', null, [$.ig.IHasCategoryAxis.prototype.$type])
}, true);

$.ig.util.defType('CategorySeries', 'MarkerSeries', {

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
	ed: function () {
		var a = new $.ig.CategorySeriesView(this);
		return a;
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
		$.ig.MarkerSeries.prototype.ea.call(this, a);
		this.iy(a);
	}

, 
	preferredCategoryMode: function (a) {
		return $.ig.CategoryMode.prototype.mode0;
	}

, 
	categoryAxis: function () {
			return $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.ja());
	}

, 
		init: function () {

			this.ir = new $.ig.CategoryFrame(3);
			this.is = new $.ig.CategoryFrame(3);
			this.it = new $.ig.CategoryFrame(3);
			this.iu = new $.ig.CategoryFrame(3);

			$.ig.MarkerSeries.prototype.init.call(this);
						this.a3($.ig.CategorySeries.prototype.$type);
		}
, 
	onApplyTemplate: function () {
		$.ig.Control.prototype.a6.call(this);
		this.iy().c9().q(this.resolution());
	}

, 
	eu: function (a, b) {
		$.ig.Series.prototype.eu.call(this, a, b);
		if (a) {
			this.i8(b);
		}
	}

, 
	ft: function () {
		var a = $.ig.Series.prototype.ft.call(this);
		return a;
	}

, 
	fs: function () {
		$.ig.Series.prototype.fs.call(this);
		var a = this.ja();
		if (a != null) {
			a.es(false);
		}
		var b = this.jb();
		if (b != null) {
			b.es(false);
		}
	}

, 
	ey: function (a, b) {
		$.ig.Series.prototype.ey.call(this, a, b);
		this.iy().c9().q(this.resolution());
		this.renderSeries(false);
	}

, 
	ez: function (a, b) {
		$.ig.Series.prototype.ez.call(this, a, b);
		this.iy().c9().q(this.resolution());
		this.renderSeries(false);
	}

, 
	e6: function (a, b, c, d) {
		$.ig.MarkerSeries.prototype.e6.call(this, a, b, c, d);
		var e = this.jb();
		var f = this.ja();
		switch (b) {
			case $.ig.Series.prototype.bc:
				if (c != null && d == null) {
					this.gn(f);
					this.gn(e);
				}
				if (c == null && d != null) {
					this.go(f);
					this.go(e);
				}
				this.iy().c9().q(this.resolution());
				this.renderSeries(false);
				break;
			case $.ig.Series.prototype.bb:
				if (this.syncLink() != null && this.seriesViewer() != null) {
					this.iy().c9().q(this.resolution());
				}
				this.renderSeries(false);
				break;
			case $.ig.Series.prototype.bo:
				this.is.a(this.dz(), this.ir, this.it);
				if (this.ew(this.view())) {
					return;
				}
				if (this.dz() == 1) {
					this.i6(this.it, this.iy());

				} else {
					this.i6(this.is, this.iy());
				}
				break;
			case $.ig.CategorySeries.prototype.iq:
				this.e5();
				break;
		}
	}

, 
	i3: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		if (b.isEmpty() || c.isEmpty()) {
			return -1;
		}
		var d = this.ja();
		var e = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, d);
		var f = new $.ig.ScalerParams(b, c, d.isInverted());
		var g = d.getUnscaledValue(c.left(), f);
		var h = d.getUnscaledValue(c.right(), f);
		var i = (a.__x - b.left()) / b.width();
		var j = g + ((h - g) * i);
		var k = e.getIndexClosestToUnscaledValue(j);
		return k;
	}

, 
	eh: function (a) {
		var b = 0;
		var c = this.ja();
		if ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, c) !== null) {
			b = this.i3(a);
			if (b == -1) {
				return null;
			}

		} else {
			b = this.eg(a);
		}
		return b >= 0 && this.dx() != null && b < this.dx().g() ? this.dx().item(b) : null;
	}

, 
	eg: function (a) {
		var b = this.view().ac();
		var c = this.view().ab();
		var d = -1;
		var e = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.ja());
		if (e != null && !b.isEmpty() && !c.isEmpty()) {
			var f = e.gy(c.left(), b, c, e.categoryMode());
			var g = e.gy(c.right(), b, c, e.categoryMode());
			var h = (a.__x - b.left()) / b.width();
			var i = f + (h * (g - f));
			if (e.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
				i -= 0.5;
			}
			var j = Math.round(i);
			d = j;
		}
		return d;
	}
, 
	ir: null, 
	is: null, 
	it: null, 
	iu: null
, 
	es: function (a, b, c) {
		var d = $.ig.Series.prototype.es.call(this, a, b, c);
		d &= this.i4(this.ja());
		d &= this.i4(this.jb());
		var e = c;
		if (!c.cc() || b.isEmpty() || a.isEmpty() || this.dx() == null) {
			d = false;
		}
		if (!d) {
			e.c9().h(0);
		}
		return d;
	}

, 
	i4: function (a) {
		if (a == null || a.seriesViewer() == null) {
			return false;
		}
		var b = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a);
		if (b != null) {
			return b.itemsSource() != null;

		} else {
			var c = $.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a);
			if (c != null) {
				return c.actualMinimumValue() != c.actualMaximumValue();
			}
		}
		return true;
	}

, 
	eo: function (a) {
		$.ig.Series.prototype.eo.call(this, a);
		this.iy().c9().q(this.resolution());
		if (this.ew(this.view())) {
			return;
		}
		if (this.gm(a)) {
			var b = this.ir;
			if (this.fo()) {
				this.ir = this.is;
				this.is = b;

			} else {
				this.ir = this.it;
				this.it = b;
			}
			this.i7(this.it, this.iy());
			this.fp();

		} else {
			this.i7(this.it, this.iy());
			this.i6(this.it, this.iy());
		}
	}

, 
	i5: function () {
		var a = 0;
		var b = this.ja();
		var d = this.seriesViewer().series().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			if (c == this) {
				return a;
			}
			var e = $.ig.util.cast($.ig.CategorySeries.prototype.$type, c);
			if (e != null) {
				var f = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, e.ja());
				if (f == b && e.preferredCategoryMode(f) == $.ig.CategoryMode.prototype.mode2) {
					a++;
				}
			}
		}
		return -1;
	}

, 
	xAxis: function () {
			return this.ja();
	}

, 
	yAxis: function () {
			return this.jb();
	}

, 
	i6: function (a, b) {
	}

, 
	i7: function (a, b) {
	}

, 
	i8: function (a) {
		var b = a;
		b.da().g(0);
	}

, 
	er: function (a, b) {
		$.ig.Series.prototype.er.call(this, a, b);
		if (!this.dv()) {
			this.view().b4(b);
			return;
		}
		var c = $.ig.util.cast($.ig.CategorySeriesView.prototype.$type, this.dt());
		c.c9().q(this.resolution());
		this.view().b4(b);
		if (this.ew(this.dt())) {
			return;
		}
		this.i9();
		this.dv(false);
	}

, 
	i9: function () {
		var a = $.ig.util.cast($.ig.CategorySeriesView.prototype.$type, this.dt());
		this.i7(this.iu, a);
		this.i6(this.iu, a);
	}

, 
	ja: function () {
	}

, 
	jb: function () {
	}

, 
	jc: function () {
	}

, 
	jd: function (a) {
		var b = $.ig.util.cast($.ig.CategorySeriesView.prototype.$type, a);
		if (b != null && b == this.dt()) {
			return new $.ig.CategoryFramePreparer(1, $.ig.util.cast($.ig.IIsCategoryBased.prototype.$type, this), $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, b), this.seriesViewer().fb().aj(), this, b.c9());

		} else {
			return this.ix();
		}
	}
,
	$type: new $.ig.Type('CategorySeries', $.ig.MarkerSeries.prototype.$type, [$.ig.IHasCategoryModePreference.prototype.$type, $.ig.ISupportsErrorBars.prototype.$type])
}, true);

$.ig.util.defType('IIsCategoryBased', 'Object', {

		$type: new $.ig.Type('IIsCategoryBased', null)
}, true);

$.ig.util.defType('IHasSingleValueCategory', 'Object', {

		$type: new $.ig.Type('IHasSingleValueCategory', null)
}, true);

$.ig.util.defType('IHasTrendline', 'Object', {

		$type: new $.ig.Type('IHasTrendline', null)
}, true);

$.ig.util.defType('IHasCategoryTrendline', 'Object', {

		$type: new $.ig.Type('IHasCategoryTrendline', null, [$.ig.IHasTrendline.prototype.$type])
}, true);



$.ig.util.defType('IBarSeries', 'Object', {

		$type: new $.ig.Type('IBarSeries', null)
}, true);


$.ig.util.defType('ISupportsMarkers', 'Object', {

		$type: new $.ig.Type('ISupportsMarkers', null)
}, true);

$.ig.util.defType('CategorySeriesView', 'MarkerSeriesView', {

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
		init: function (a) {

			var $self = this;

			$.ig.MarkerSeriesView.prototype.init.call(this, a);
						this.c8(a);
				this.c9(this.df());
				this.da((function () { var $ret = new $.ig.Pool$1($.ig.Marker.prototype.$type);
				$ret.create($self.co.on($self));
				$ret.activate($self.cq.on($self));
				$ret.disactivate($self.cr.on($self));
				$ret.destroy($self.cs.on($self)); return $ret;}()));
		}
, 
	updateMarkerTemplate: function (a, b) {
		if (!this.cg().useLightweightMarkers()) {
			var c = this.da().item(a);
			($.ig.util.cast($.ig.DataContext.prototype.$type, c.a9())).item(this.u().dx().item(b));
		}
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
	df: function () {
		return new $.ig.CategoryBucketCalculator(this);
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
	shouldDisplayMarkers: function () {
			return this.c8().ie();
	}

, 
	updateMarkerCount: function (a) {
		this.da().g(a);
	}

, 
	cp: function (a) {
		this.da().p(a);
	}

, 
	di: function () {
	}
,
	$type: new $.ig.Type('CategorySeriesView', $.ig.MarkerSeriesView.prototype.$type, [$.ig.ISupportsMarkers.prototype.$type])
}, true);



$.ig.util.defType('IBucketizer', 'Object', {

		$type: new $.ig.Type('IBucketizer', null)
}, true);

$.ig.util.defType('CategoryBucketCalculator', 'Object', {

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
		return null;
	}

, 
	getErrorBucket: function (a, b) {
		return NaN;
	}

, 
	q: function (a) {
		var b = this.e().ac();
		var c = this.e().ab();
		var d = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.e().c8().ja());
		var e = this.e().c8().dx();
		if (b.isEmpty() || c.isEmpty() || d == null || e == null || e.g() == 0) {
			this.h(0);
			return;
		}
		var f = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, d);
		if (f == null || f.sortedIndices() == null) {
			var g = Math.floor(d.gy(c.left(), b, c, $.ig.CategoryMode.prototype.mode0));
			var h = Math.ceil(d.gy(c.right(), b, c, $.ig.CategoryMode.prototype.mode0));
			if (d.isInverted()) {
				h = Math.ceil(d.gy(c.left(), b, c, $.ig.CategoryMode.prototype.mode0));
				g = Math.floor(d.gy(c.right(), b, c, $.ig.CategoryMode.prototype.mode0));
			}
			var i = Math.floor((h - g + 1) * a / c.width());
			this.h(Math.max(1, i));
			this.f(Math.max(0, Math.floor(g / this.h()) - 1));
			this.g(Math.ceil(h / this.h()));

		} else {
			this.f(f.getFirstVisibleIndex(b, c));
			this.g(f.getLastVisibleIndex(b, c));
			this.h(1);
		}
	}

, 
	getBucketInfo: function (a, b, c, d) {
		a = this.f();
		b = this.g();
		c = this.h();
		d = this.e().c8().resolution();
		return {
			firstBucket: a,
			lastBucket: b,
			bucketSize: c,
			resolution: d
		};
	}

, 
	cacheValues: function () {
	}

, 
	unCacheValues: function () {
	}
,
	$type: new $.ig.Type('CategoryBucketCalculator', $.ig.Object.prototype.$type, [$.ig.IBucketizer.prototype.$type])
}, true);














$.ig.util.defType('ValuesHolder', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_e: null,
	e: function () {
		return this._e;	}

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
	$type: new $.ig.Type('ValuesHolder', $.ig.Object.prototype.$type)
}, true);







$.ig.util.defType('VerticalAxisLabelPanel', 'AxisLabelPanelBase', {
	init: function () {

		$.ig.AxisLabelPanelBase.prototype.init.call(this);

	}
, 
	b6: function () {
		return new $.ig.VerticalAxisLabelPanelView(this);
	}

, 
	b7: function (a) {
		$.ig.AxisLabelPanelBase.prototype.b7.call(this, a);
		this.d1(a);
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
	c7: function () {
		this.d1().ak();
	}

, 
	c6: function () {
		var a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
		this.b2(false);
		this.b1(false);
		if (this.br().labelSettings() != null && this.br().labelSettings().y() && this.c9() % 360 != 0) {
			this.b1(true);
		}
		this.d2(-Number.MAX_VALUE);
		this.d3(-Number.MAX_VALUE);
		for (var b = 0; b < this.by().count(); b++) {
			var c = this.by().__inner[b];
			var d = this.dc(c);
			var e = this.db(c);
			var f = 0;
			var g = this.bt().__inner[b].b() - d / 2;
			this.d2(Math.max(e, this.d2()));
			this.d3(Math.max(d, this.d3()));
			var h = new $.ig.Rect(0, f, g, e, d);
			a.add(h);
		}
		var i = 0;
		if (this.b1()) {
			i = this.c9() % 360;
			if (i < 0) {
				i += 360;
			}
		}
		if (!this.br().e8()) {
			if (this.b1()) {
				if (i >= 90 && i <= 270) {
					this.b5(this.d3());

				} else {
					var j = i * (Math.PI / 180);
					var k = Math.abs(this.d2() * Math.cos(j)) + Math.abs(this.d3() * Math.sin(j));
					this.b5(k);
				}

			} else {
				this.b5(this.d2());
			}

		} else {
			this.bp().w();
		}
		if (this.b1()) {
			for (var l = 0; l < a.count(); l++) {
				var m = a.__inner[l];
				m.y(this.bt().__inner[l].b() - this.d3() / 2);
				a.__inner[l] = m;
			}
		}
		var n = false;
		if (!this.b1() && this.d2() <= this.b5()) {
			n = true;
		}
		if (!n) {
			var o = this.bv().height();
			var p = this.b5();
			var q = this.bt().count() > 1 ? Math.abs(this.bt().__inner[1].b() - this.bt().__inner[0].b()) : o;
			var r = Math.abs(Math.asin(q / this.d2()) * (180 / Math.PI));
			var s = (i >= r && i <= 180 - r) || (i - 180 >= r && i - 180 <= 180 - r);
			for (var t = 0; t < a.count(); t++) {
				if (this.b1()) {
					var u = i * (Math.PI / 180);
					var v = this.db(this.by().__inner[t]);
					p = Math.min(this.b5() / Math.abs(Math.cos(u)), v);
					if (s) {
						var w;
						if (i > 0 && i < 90) {
							w = (Math.PI / 180) * (90 - i);
						} else if (i > 270 && i < 360) {
							w = (Math.PI / 180) * (i - 270);

						} else {
							w = 0;
						}
						p = q / Math.cos(w);
					}
				}
				var x = a.__inner[t];
				x.x(0);
				x.width(p);
				a.__inner[t] = x;
				if (!($.ig.util.cast($.ig.TextBlock.prototype.$type, this.by().__inner[t]) !== null)) {
					this.by().__inner[t].v(p);
				}
				var y = $.ig.util.cast($.ig.TextBlock.prototype.$type, this.by().__inner[t]);
				if (y != null) {
					var z = this.dm(t, y, p);
					if (!y.a5().equals(z)) {
						y.a5(z);
						this.by().__inner[t].v(p);
					}
				}
			}
		}
		if (this.eb()) {
			this.ea(a);
		}
		return a;
	}

, 
	ea: function (a) {
		this.d1().al(a, this.d2());
	}

, 
	df: function (a, b) {
		var $self = this;
		var c = 0;
		var d = this.d3() / 2;
		var e = (function () { var $ret = new $.ig.RotateTransform();
$ret.h($self.c9());
$ret.i(c);
$ret.j(d); return $ret;}());
		a.f(e);
	}

, 
	eb: function () {
		return !this.b2() && !this.b1();
	}

, 
	dj: function () {
		return $.ig.AxisLabelsLocation.prototype.outsideLeft;
	}

, 
	dk: function (a) {
		return a == $.ig.AxisLabelsLocation.prototype.outsideLeft || a == $.ig.AxisLabelsLocation.prototype.outsideRight || a == $.ig.AxisLabelsLocation.prototype.insideLeft || a == $.ig.AxisLabelsLocation.prototype.insideRight;
	}
,
	$type: new $.ig.Type('VerticalAxisLabelPanel', $.ig.AxisLabelPanelBase.prototype.$type)
}, true);

$.ig.util.defType('VerticalAxisLabelPanelView', 'AxisLabelPanelBaseView', {

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
	ak: function () {
	}

, 
	al: function (a, b) {
	}
,
	$type: new $.ig.Type('VerticalAxisLabelPanelView', $.ig.AxisLabelPanelBaseView.prototype.$type)
}, true);



$.ig.util.defType('Frame', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b, c) {
	}

, 
	b: function (a, b, c, d) {
		var e = c.count();
		var f = d.count();
		var g = Math.max(e, f);
		var h = 1 - b;
		if (a.count() < g) {
			a.p(a.count(), new Array(g - a.count()));
		}
		if (a.count() > g) {
			a.q(g, a.count() - g);
		}
		for (var i = 0; i < Math.min(e, f); ++i) {
			a.__inner[i] = {__x: c.__inner[i].__x * h + d.__inner[i].__x * b, __y: c.__inner[i].__y * h + d.__inner[i].__y * b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
		if (e < f) {
			var j = e > 0 ? c.__inner[e - 1] : {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			for (var k = e; k < f; ++k) {
				a.__inner[k] = {__x: j.__x * h + d.__inner[k].__x * b, __y: j.__y * h + d.__inner[k].__y * b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			}
		}
		if (e > f) {
			var l = f > 0 ? d.__inner[f - 1] : {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			for (var m = f; m < e; ++m) {
				a.__inner[m] = {__x: c.__inner[m].__x * h + l.__x * b, __y: c.__inner[m].__y * h + l.__y * b, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			}
		}
	}

, 
	c: function (a, b, c, d) {
		var e = c.count();
		var f = d.count();
		var g = Math.max(e, f);
		var h = 1 - b;
		if (a.count() < g) {
			var i = new Array(g - a.count());
			for (var j = 0; j < g - a.count(); j++) {
				i[j] = 0;
			}
			a.p(a.count(), i);
		}
		if (a.count() > g) {
			a.q(g, a.count() - g);
		}
		for (var k = 0; k < Math.min(e, f); ++k) {
			a.__inner[k] = c.__inner[k] * h + d.__inner[k] * b;
		}
		if (e < f) {
			var l = e > 0 ? c.__inner[e - 1] : 0;
			for (var m = e; m < f; ++m) {
				a.__inner[m] = l * h + d.__inner[m] * b;
			}
		}
		if (e > f) {
			var n = f > 0 ? d.__inner[f - 1] : 0;
			for (var o = f; o < e; ++o) {
				a.__inner[o] = c.__inner[o] * h + n * b;
			}
		}
	}
,
	$type: new $.ig.Type('Frame', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('CategoryFrame', 'Frame', {

		init: function (a) {

			this.d = new $.ig.List$1($.ig.Array.prototype.$type, 0);
			this.e = new $.ig.List$1($.ig.Single.prototype.$type, 0);
			this.f = new $.ig.List$1($.ig.Point.prototype.$type, 0);
			this.g = new $.ig.List$1($.ig.Point.prototype.$type, 0);
			this.h = new $.ig.List$1($.ig.Point.prototype.$type, 0);
			this.i = new $.ig.List$1(Number, 0);

			$.ig.Frame.prototype.init.call(this);
						this.j = a;
		}, 
	d: null, 
	e: null, 
	f: null, 
	g: null, 
	h: null, 
	i: null, 
	j: null
, 
	a: function (a, b, c) {
		var d = $.ig.util.cast($.ig.CategoryFrame.prototype.$type, b);
		var e = $.ig.util.cast($.ig.CategoryFrame.prototype.$type, c);
		var f = d.d.count();
		var g = e.d.count();
		var h = Math.max(f, g);
		if (this.d.count() < h) {
			while (this.d.count() < h) {
				this.d.add(new Array(this.j));
			}
		}
		if (this.d.count() > h) {
			this.d.q(h, this.d.count() - h);
		}
		for (var i = 0; i < Math.min(f, g); ++i) {
			var j = this.d.__inner[i];
			for (var k = 0; k < this.j; ++k) {
				j[k] = d.d.__inner[i][k] + a * (e.d.__inner[i][k] - d.d.__inner[i][k]);
			}
		}
		if (f < g) {
			var l = new Array(this.j);
			for (var m = this.j - 1; m >= 0; --m) {
				l[m] = d.d.count() > 0 ? d.d.__inner[d.d.count() - 1][m] : 0;
			}
			for (var n = f; n < g; ++n) {
				var o = this.d.__inner[n];
				for (var p = this.j - 1; p >= 0; --p) {
					o[p] = l[p] + a * (e.d.__inner[n][p] - l[p]);
				}
			}
		}
		if (f > g) {
			var q = new Array(this.j);
			for (var r = this.j - 1; r >= 0; --r) {
				q[r] = e.d.count() > 0 ? e.d.__inner[e.d.count() - 1][r] : 0;
			}
			for (var s = g; s < f; ++s) {
				var t = this.d.__inner[s];
				for (var u = this.j - 1; u >= 0; --u) {
					t[u] = d.d.__inner[s][u] + a * (q[u] - d.d.__inner[s][u]);
				}
			}
		}
		$.ig.CategoryFrame.prototype.b(this.f, a, d.f, e.f);
		$.ig.CategoryFrame.prototype.b(this.g, a, d.g, e.g);
		$.ig.CategoryFrame.prototype.b(this.h, a, d.h, e.h);
		$.ig.CategoryFrame.prototype.c(this.i, a, d.i, e.i);
	}
,
	$type: new $.ig.Type('CategoryFrame', $.ig.Frame.prototype.$type)
}, true);

$.ig.util.defType('SingleValuesHolder', 'ValuesHolder', {
	init: function () {

		$.ig.ValuesHolder.prototype.init.call(this);

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
	e: function () {
			if (this.t() != null) {
				return this.t().count();
			}
			return 0;
	}
,
	$type: new $.ig.Type('SingleValuesHolder', $.ig.ValuesHolder.prototype.$type)
}, true);

$.ig.util.defType('DefaultSingleValueProvider', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	valueColumn: function () {
			return new $.ig.List$1(Number, 0);
	}
,
	$type: new $.ig.Type('DefaultSingleValueProvider', $.ig.Object.prototype.$type, [$.ig.IHasSingleValueCategory.prototype.$type])
}, true);

$.ig.util.defType('PreparationParams', 'Object', {
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
	$type: new $.ig.Type('PreparationParams', $.ig.Object.prototype.$type)
}, true);




$.ig.util.defType('DefaultSupportsMarkers', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	shouldDisplayMarkers: function () {
			return false;
	}

, 
	updateMarkerCount: function (a) {
	}

, 
	updateMarkerTemplate: function (a, b) {
	}
,
	$type: new $.ig.Type('DefaultSupportsMarkers', $.ig.Object.prototype.$type, [$.ig.ISupportsMarkers.prototype.$type])
}, true);

$.ig.util.defType('DefaultProvidesViewport', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	getViewInfo: function (a, b) {
		a = $.ig.Rect.prototype.empty();
		b = $.ig.Rect.prototype.empty();
		return {
			viewportRect: a,
			windowRect: b
		};
	}
,
	$type: new $.ig.Type('DefaultProvidesViewport', $.ig.Object.prototype.$type, [$.ig.IProvidesViewport.prototype.$type])
}, true);

$.ig.util.defType('DefaultSupportsErrorBars', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	xAxis: function () {
			return null;
	}

, 
	yAxis: function () {
			return null;
	}
,
	$type: new $.ig.Type('DefaultSupportsErrorBars', $.ig.Object.prototype.$type, [$.ig.ISupportsErrorBars.prototype.$type])
}, true);













$.ig.util.defType('MarkerTemplates', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
		a.beginPath();
		var c = b.actualItemBrush();
		var d = b.outline();
		if (c != null && a.fillStyle != c.__fill) {
			a.fillStyle = c.__fill;
		}
		if (b.outline() != null && a.strokeStyle != d.__fill) {
			a.strokeStyle = b.outline().__fill;
			a.lineWidth = b.thickness();
		}
	}

, 
	b: function (a, b) {
		if (b.actualItemBrush() != null) {
			a.fill();
		}
		if (b.outline() != null) {
			a.stroke();
		}
		a.closePath();
	}

, 
	c: function (a) {
		a.isConstant = true;
		a.width = 8;
		a.height = 8;
	}

, 
	d: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = Math.min(a.availableWidth, a.availableHeight) / 2;
		b.arc(a.xPosition, a.yPosition, d, 0, (Math.PI * 2), false);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	e: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.moveTo(f, g);
		b.lineTo(f + e, g + a.availableHeight);
		b.lineTo(f + a.availableWidth, g + 0);
		b.lineTo(f, g);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	f: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.moveTo(f, g + a.availableHeight);
		b.lineTo(f + e, g + 0);
		b.lineTo(f + a.availableWidth, g + a.availableHeight);
		b.lineTo(f, g + a.availableHeight);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	g: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.rect(f, g, a.availableWidth, a.availableHeight);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	h: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var left_ = (a.xPosition - e);
		var top_ = (a.yPosition - d);
		b.rect(left_ | 0, top_ | 0, a.availableWidth, a.availableHeight);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	i: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.moveTo(f + 0, g + d);
		b.lineTo(f + e, g + a.availableHeight);
		b.lineTo(f + a.availableWidth, g + d);
		b.lineTo(f + e, g + 0);
		b.lineTo(f + 0, g + d);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	j: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.moveTo(f + ((4 / 8) * a.availableWidth), g + 0);
		b.lineTo(f + ((0.1956 / 8) * a.availableWidth), g + ((2.764 / 8) * a.availableHeight));
		b.lineTo(f + ((1.65 / 8) * a.availableWidth), g + ((7.236 / 8) * a.availableHeight));
		b.lineTo(f + ((6.35 / 8) * a.availableWidth), g + ((7.236 / 8) * a.availableHeight));
		b.lineTo(f + ((7.8044 / 8) * a.availableWidth), g + ((2.764 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + 0);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	k: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.moveTo(f + ((4 / 8) * a.availableWidth), g + 0);
		b.lineTo(f + ((0.356 / 8) * a.availableWidth), g + ((2 / 8) * a.availableHeight));
		b.lineTo(f + ((0.356 / 8) * a.availableWidth), g + ((6 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + (a.availableHeight));
		b.lineTo(f + ((7.464 / 8) * a.availableWidth), g + ((6 / 8) * a.availableHeight));
		b.lineTo(f + ((7.464 / 8) * a.availableWidth), g + ((2 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + 0);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	l: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.moveTo(f + ((4 / 8) * a.availableWidth), g + 0);
		b.lineTo(f + ((2.5856 / 8) * a.availableWidth), g + ((2.5856 / 8) * a.availableHeight));
		b.lineTo(f + ((0 / 8) * a.availableWidth), g + ((4 / 8) * a.availableHeight));
		b.lineTo(f + ((2.5856 / 8) * a.availableWidth), g + ((5.4144 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + ((8 / 8) * a.availableHeight));
		b.lineTo(f + ((5.4144 / 8) * a.availableWidth), g + ((5.4144 / 8) * a.availableHeight));
		b.lineTo(f + ((8 / 8) * a.availableWidth), g + ((4 / 8) * a.availableHeight));
		b.lineTo(f + ((5.4144 / 8) * a.availableWidth), g + ((2.5856 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + 0);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	m: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.moveTo(f + ((4 / 8) * a.availableWidth), g + 0);
		b.lineTo(f + ((2.8244 / 8) * a.availableWidth), g + ((2.382 / 8) * a.availableHeight));
		b.lineTo(f + ((0.1956 / 8) * a.availableWidth), g + ((2.764 / 8) * a.availableHeight));
		b.lineTo(f + ((2.098 / 8) * a.availableWidth), g + ((4.618 / 8) * a.availableHeight));
		b.lineTo(f + ((1.6488 / 8) * a.availableWidth), g + ((7.236 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + ((6 / 8) * a.availableHeight));
		b.lineTo(f + ((6.3512 / 8) * a.availableWidth), g + ((7.236 / 8) * a.availableHeight));
		b.lineTo(f + ((5.902 / 8) * a.availableWidth), g + ((4.618 / 8) * a.availableHeight));
		b.lineTo(f + ((7.8044 / 8) * a.availableWidth), g + ((2.764 / 8) * a.availableHeight));
		b.lineTo(f + ((5.1756 / 8) * a.availableWidth), g + ((2.382 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + 0);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}

, 
	n: function (a) {
		var b = a.context;
		var c = a.data;
		$.ig.MarkerTemplates.prototype.a(b, c);
		var d = (a.availableHeight / 2);
		var e = (a.availableWidth / 2);
		var f = (a.xPosition - e);
		var g = (a.yPosition - d);
		b.moveTo(f + ((4 / 8) * a.availableWidth), g + 0);
		b.lineTo(f + ((3 / 8) * a.availableWidth), g + ((2.268 / 8) * a.availableHeight));
		b.lineTo(f + ((0.536 / 8) * a.availableWidth), g + ((2 / 8) * a.availableHeight));
		b.lineTo(f + ((2 / 8) * a.availableWidth), g + ((4 / 8) * a.availableHeight));
		b.lineTo(f + ((0.536 / 8) * a.availableWidth), g + ((6 / 8) * a.availableHeight));
		b.lineTo(f + ((3 / 8) * a.availableWidth), g + ((5.732 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + ((8 / 8) * a.availableHeight));
		b.lineTo(f + ((5 / 8) * a.availableWidth), g + ((5.732 / 8) * a.availableHeight));
		b.lineTo(f + ((7.464 / 8) * a.availableWidth), g + ((6 / 8) * a.availableHeight));
		b.lineTo(f + ((6 / 8) * a.availableWidth), g + ((4 / 8) * a.availableHeight));
		b.lineTo(f + ((7.464 / 8) * a.availableWidth), g + ((2 / 8) * a.availableHeight));
		b.lineTo(f + ((5 / 8) * a.availableWidth), g + ((2.268 / 8) * a.availableHeight));
		b.lineTo(f + ((4 / 8) * a.availableWidth), g + 0);
		$.ig.MarkerTemplates.prototype.b(b, c);
	}
,
	$type: new $.ig.Type('MarkerTemplates', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('ChartAxisRangeChangedEventArgs', 'EventArgs', {

		init: function (a, b, c, d, e, f) {


			$.ig.EventArgs.prototype.init.call(this);
						this.chart(a);
				this.axis(b);
				this.oldMinimumValue(c);
				this.minimumValue(d);
				this.oldMaximumValue(e);
				this.maximumValue(f);
		}
, 
	_chart: null,
	chart: function (a) {
		if (arguments.length === 1) {
			this._chart = a;
			return a;
		} else {
			return this._chart;
		}
	}

, 
	_axis: null,
	axis: function (a) {
		if (arguments.length === 1) {
			this._axis = a;
			return a;
		} else {
			return this._axis;
		}
	}

, 
	_oldMinimumValue: null,
	oldMinimumValue: function (a) {
		if (arguments.length === 1) {
			this._oldMinimumValue = a;
			return a;
		} else {
			return this._oldMinimumValue;
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
	_oldMaximumValue: null,
	oldMaximumValue: function (a) {
		if (arguments.length === 1) {
			this._oldMaximumValue = a;
			return a;
		} else {
			return this._oldMaximumValue;
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
	$type: new $.ig.Type('ChartAxisRangeChangedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);






























































































$.ig.util.defType('LegendBaseViewManager', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.i(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.JQueryObject.prototype.$type, 0));
		}
, 
	l: function (a) {
		this.h($(a));
		this.g($("<table></table>"));
		this.g().addClass(this.a.j());
		this.h().append(this.g());
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
	q: function (a, b) {
		var c = $.ig.util.cast($.ig.ContentControl.prototype.$type, a);
		var d = $("<tr></tr>");
		d.addClass(this.a.k());
		if (c != null) {
			var e = $.ig.util.cast($.ig.DataContext.prototype.$type, c.a9());
			if (e != null && c.ba() != null) {
				var f = new $.ig.DataTemplatePassInfo();
				f.context = d;
				f.passID = "LegendItem";
				var g = new $.ig.DataTemplateMeasureInfo();
				g.passInfo = f;
				g.width = NaN;
				g.height = NaN;
				g.data = e;
				g.context = d;
				var h = new $.ig.DataTemplateRenderInfo();
				h.passInfo = f;
				if (c.ba().measure() != null) {
					c.ba().measure()(g);
				}
				h.context = d;
				h.availableWidth = g.width;
				h.availableHeight = g.height;
				h.data = e;
				h.xPosition = 0;
				h.yPosition = 0;
				c.ba().render()(h);
				d.find(".ui-legend-item-badge").removeClass("ui-legend-item-badge").addClass(this.a.l());
				d.find(".ui-legend-item-text").removeClass("ui-legend-item-text").addClass(this.a.m());
			}
		}
		return d;
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
	t: function (a, b) {
		var c = this.q(a, this.g());
		c.attr("id", b.toString());
		c.mouseup(this.a.an.on(this.a));
		c.mousedown(this.a.am.on(this.a));
		c.mouseleave(this.a.al.on(this.a));
		c.mousemove(this.a.ak.on(this.a));
		this.i().add(a, c);
		if ((this.g().children().size() == 0) || (b >= this.g().children().size())) {
			this.g().append(c);

		} else {
			var d = this.g().children().eq(b);
			d.after(c);
		}
	}

, 
	u: function (a) {
	}

, 
	v: function (a) {
		var $self = this;
		var b;
		if ((function () { var $ret = $self.i().tryGetValue(a, b); b = $ret.value; return $ret.ret; }())) {
			b.remove();
			this.i().remove(a);
		}
	}

, 
	w: function (a) {
		var c = this.i().keys().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			var d = $.ig.util.cast($.ig.ContentControl.prototype.$type, b);
			if (d != null && d.a9() != null) {
				var e = $.ig.util.cast($.ig.DataContext.prototype.$type, d.a9());
				if (e != null && e.itemLabel() == a.itemLabel() && e.series() == a.series() && e.itemBrush() == a.itemBrush()) {
					return true;
				}
			}
		}
		return false;
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
	ab: function (a) {
		var b = this.h().width();
		var c = this.h().height();
		var d = $('<div style=\"position : relative;\" />');
		this.j($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.h().append(d);
		d.append(this.j());
		this.k(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.j()[0]).getContext("2d")));
		this.j().attr("width", b.toString());
		this.j().attr("height", c.toString());
		return this.k();
	}

, 
	ac: function () {
		return new $.ig.Size(this.h().width(), Math.max(10, this.h().height() - 15));
	}

, 
	ad: function (a, b, c, d) {
		var e = a.c();
		e.beginPath();
		e.moveTo(b.bn().__inner[0].__x, b.bn().__inner[0].__y);
		for (var f = 1; f < b.bn().count(); f++) {
			e.lineTo(b.bn().__inner[f].__x, b.bn().__inner[f].__y);
		}
		e.lineTo(b.bn().__inner[0].__x, b.bn().__inner[0].__y);
		var g = e.createLinearGradient(d.left(), d.top(), d.left(), d.top() + d.height());
		var i = c.b().getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			g.a(h.c(), h.d().__fill);
		}
		e.fillStyle = g;
		e.fill();
	}
,
	$type: new $.ig.Type('LegendBaseViewManager', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LegendBase', 'ContentControl', {

	bu: function () {
		return new $.ig.LegendBaseView(this);
	}

, 
	bv: function (a) {
		this.bq(a);
	}

, 
	_bq: null,
	bq: function (a) {
		if (arguments.length === 1) {
			this._bq = a;
			return a;
		} else {
			return this._bq;
		}
	}

, 
		init: function () {


			$.ig.ContentControl.prototype.init.call(this);
						var a = this.bu();
				this.bv(a);
				a.r();
				this.children(new $.ig.ObservableCollection$1($.ig.UIElement.prototype.$type, 0));
		}
, 
	by: function (a, b) {
	}

, 
	bz: function (a, b) {
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
	_br: null,
	br: function (a) {
		if (arguments.length === 1) {
			this._br = a;
			return a;
		} else {
			return this._br;
		}
	}

, 
	_bs: null,
	bs: function (a) {
		if (arguments.length === 1) {
			this._bs = a;
			return a;
		} else {
			return this._bs;
		}
	}

, 
	bt: function () {
			if (this.br() != null) {
				return this.br();

			} else {
				return this.bs();
			}
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	b6: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}
, 
	legendItemMouseLeftButtonDown: null
, 
	b7: function (a) {
		if (this.legendItemMouseLeftButtonDown != null) {
			this.legendItemMouseLeftButtonDown(this, a);
		}
	}
, 
	legendItemMouseLeftButtonUp: null
, 
	b8: function (a) {
		if (this.legendItemMouseLeftButtonUp != null) {
			this.legendItemMouseLeftButtonUp(this, a);
		}
	}
, 
	legendItemMouseEnter: null
, 
	b9: function (a) {
		if (this.legendItemMouseEnter != null) {
			this.legendItemMouseEnter(this, a);
		}
	}
, 
	legendItemMouseLeave: null
, 
	ca: function (a) {
		if (this.legendItemMouseLeave != null) {
			this.legendItemMouseLeave(this, a);
		}
	}
, 
	legendItemMouseMove: null
, 
	cb: function (a) {
		if (this.legendItemMouseMove != null) {
			this.legendItemMouseMove(this, a);
		}
	}

, 
	provideContainer: function (a) {
		this.bq().z(a);
	}

, 
	legendItemsListStyle: function (a) {
		if (arguments.length === 1) {
			this.bq().j(a);
			return a;
		} else {
			return this.bq().j();
		}
	}

, 
	legendItemStyle: function (a) {
		if (arguments.length === 1) {
			this.bq().k(a);
			return a;
		} else {
			return this.bq().k();
		}
	}

, 
	legendItemBadgeStyle: function (a) {
		if (arguments.length === 1) {
			this.bq().l(a);
			return a;
		} else {
			return this.bq().l();
		}
	}

, 
	legendItemTextStyle: function (a) {
		if (arguments.length === 1) {
			this.bq().m(a);
			return a;
		} else {
			return this.bq().m();
		}
	}
,
	$type: new $.ig.Type('LegendBase', $.ig.ContentControl.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);


$.ig.util.defType('LegendBaseView', 'Object', {

		init: function (a) {

			this.a = false;

			$.ig.Object.prototype.init.call(this);
						this.i(a);
				this.h(new $.ig.LegendBaseViewManager(this));
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
	r: function () {
	}

, 
	s: function (a) {
		var $self = this;
		var b;
		var c;
		var d;
		(function () { var $ret = $self.u(a, b, c, d); b = $ret.chart; c = $ret.series; d = $ret.item; return $ret.ret; }());
		var e = new $.ig.MouseButtonEventArgs();
		var f = new $.ig.DataChartLegendMouseButtonEventArgs(b, c, d, e, a);
		return f;
	}

, 
	t: function (a) {
		var $self = this;
		var b;
		var c;
		var d;
		(function () { var $ret = $self.u(a, b, c, d); b = $ret.chart; c = $ret.series; d = $ret.item; return $ret.ret; }());
		var e = new $.ig.MouseEventArgs();
		var f = new $.ig.ChartLegendMouseEventArgs(b, c, d, e, a);
		return f;
	}

, 
	u: function (a, b, c, d) {
		b = ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, this.i().bt()));
		c = null;
		d = null;
		if (a != null) {
			var e = $.ig.util.cast($.ig.ContentControl.prototype.$type, a);
			if (e != null && e.a9() != null && $.ig.util.cast($.ig.DataContext.prototype.$type, e.a9()) !== null) {
				var f = $.ig.util.cast($.ig.DataContext.prototype.$type, e.a9());
				c = $.ig.util.cast($.ig.Series.prototype.$type, f.series());
				if (c != null) {
					b = c.seriesViewer();
				}
				d = f.item();
			}
		}
		return {
			chart: b,
			series: c,
			item: d
		};
	}

, 
	v: function () {
	}

, 
	w: function () {
		return true;
	}

, 
	x: function (a) {
	}

, 
	y: function (a) {
	}

, 
	z: function (a) {
		this.h().l(a);
	}

, 
	aa: function (a) {
		this.h().v(a);
	}

, 
	ab: function (a) {
		var b = this.i().children().indexOf1(a);
		this.h().t(a, b);
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
	a: null
, 
	ak: function (e_) {
		if (!this.a) {
			this.a = true;
			this.i().b9(this.t(this.ao(e_)));
		}
	}

, 
	al: function (e_) {
		this.a = false;
		this.i().ca(this.t(this.ao(e_)));
	}

, 
	am: function (e_) {
		this.i().b7(this.s(this.ao(e_)));
	}

, 
	an: function (e_) {
		this.i().b8(this.s(this.ao(e_)));
	}

, 
	ao: function (e_) {
		var id_ = null;
		id_ = $(e_.currentTarget).attr('id');
		return this.i().children().__inner[$.ig.Number.prototype.parseInt(id_)];
	}
,
	$type: new $.ig.Type('LegendBaseView', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('GradientData', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.b(new $.ig.List$1($.ig.GradientStopData.prototype.$type, 0));
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
	$type: new $.ig.Type('GradientData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('GradientStopData', 'Object', {
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
	$type: new $.ig.Type('GradientStopData', $.ig.Object.prototype.$type)
}, true);

















$.ig.util.defType('SeriesViewerComponentsForView', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('SeriesViewerComponentsForView', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SeriesViewerComponentsFromView', 'Object', {
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
	$type: new $.ig.Type('SeriesViewerComponentsFromView', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SeriesViewer', 'Control', {

	_fb: null,
	fb: function (a) {
		if (arguments.length === 1) {
			this._fb = a;
			return a;
		} else {
			return this._fb;
		}
	}

, 
		staticInit: function () {


						$.ig.SeriesViewer.prototype.de = new $.ig.Rect(0, 0, 0, 1, 1);
		}
, 
		init: function () {

			var $self = this;
			this.cn = new $.ig.SeriesCollection();
			this.cx = $.ig.Rect.prototype.empty();
			this.cy = $.ig.Rect.prototype.empty();
			this.cz = new $.ig.SeriesViewerComponentsForView();
			this.c0 = false;
			this.c1 = $.ig.InteractionState.prototype.none;
			this.c2 = false;
			this.c3 = false;
			this.c5 = false;
			this.da = 0;
			this.db = false;
			this.dc = $.ig.Rect.prototype.empty();
			this.df = false;
			this.dg = null;
			this.dh = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 0);
			this.di = NaN;
			this.dj = NaN;
			this.dk = NaN;
			this.dl = NaN;
			this.dm = 20;
			this.dn = NaN;
			this.dq = 0;
			this.dr = 0;
			this.ds = 1;
			this.dt = 1;

			$.ig.Control.prototype.init.call(this);
						this.canvasRenderScheduler(new $.ig.CanvasRenderScheduler());
				this.fp(new $.ig.CanvasRenderScheduler());
				$.ig.SeriesViewer.prototype.de = new $.ig.Rect(0, 0, 0, 1, 1);
				this.syncSettings((function () { var $ret = new $.ig.SyncSettings();
				$ret.synchronizeHorizontally(true);
				$ret.synchronizeVertically(true); return $ret;}()));
				this.ff($.ig.Rect.prototype.empty());
				this.fk($.ig.Rect.prototype.empty());
				this.fb(this.io());
				this.ip(this.fb());
				this.fb().a6();
				this.fi(this.crosshairVisibility() == $.ig.Visibility.prototype.visible);
				this.fn().thumbnailSizeChanged = $.ig.Delegate.prototype.combine(this.fn().thumbnailSizeChanged, function (a, b) {
					($self.fn().dd()).u(true);
					var d = $self.series().getEnumerator();
					while (d.moveNext()) {
						var c = d.current();
						c.dv(true);
					}
				});
				this.actualSyncLink(new $.ig.SyncLink());
				this.hv(null, this.actualSyncLink());
				this.fc(new $.ig.ChartContentManager(this));
				this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (e, f) {
					$self.ig(e, f.propertyName(), f.oldValue(), f.newValue());
				});
				this.series().collectionChanged = $.ig.Delegate.prototype.combine(this.series().collectionChanged, this.fs.on(this));
				this.series().collectionResetting = $.ig.Delegate.prototype.combine(this.series().collectionResetting, this.fu.on(this));
				this.fb().bx();
				this.i1();
		}
, 
	series: function () {
			return this.cn;
	}
, 
	cn: null
, 
	fs: function (a, b) {
		if (b.oldItems() != null) {
			var d = b.oldItems().getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				c.syncLink(null);
				c.seriesViewer(null);
				this.ft(c);
				this.fb().bp(c);
			}
		}
		if (b.newItems() != null) {
			var f = b.newItems().getEnumerator();
			while (f.moveNext()) {
				var e = f.current();
				if (!this.fb().br(e)) {
					this.iy(e);
					this.fb().bw(e);
					e.syncLink(this.actualSyncLink());
					e.seriesViewer(this);
					e.fh();
				}
			}
		}
		this.i8();
	}

, 
	ft: function (a) {
		if ($.ig.util.cast($.ig.Series.prototype.$type, a) !== null) {
			(a).itemsSource(null);
		} else if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a) !== null) {
			(a).itemsSource(null);
		}
		this.removeSpecificDataSource((a).name(), true);
	}

, 
	fu: function (a, b) {
		var d = this.series().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			c.syncLink(null);
			c.seriesViewer(null);
			this.ft(c);
			this.fb().bp(c);
		}
	}

, 
	fv: function (a, b, c, d) {
		var e = this.viewportRect();
		var f = e.width();
		var g = e.height();
		var h = f / g;
		var i = a / b;
		if (isNaN(h)) {
			return{
				width: a,
				height: b
			};
		}
		if (isNaN(i) || c || d || Math.abs(h - i) > 0.0001) {
			if (c && d) {
				if (a > b) {
					b = a / h;

				} else {
					a = b * h;
				}
			} else if (c) {
				b = a / h;

			} else {
				a = b * h;
			}
		}
		if (b > 1) {
			var j = 1 / b;
			b = 1;
			a = a * j;
		}
		if (a > 1) {
			var k = 1 / a;
			a = 1;
			b = b * k;
		}
		return {
			width: a,
			height: b
		};
	}

, 
	fw: function () {
		return false;
	}

, 
	fx: function (a) {
		return null;
	}

, 
	fy: function (a) {
		return null;
	}

, 
	getMarkerBrushByIndex: function (a) {
		return null;
	}

, 
	getMarkerOutlineByIndex: function (a) {
		return null;
	}

, 
	_fc: null,
	fc: function (a) {
		if (arguments.length === 1) {
			this._fc = a;
			return a;
		} else {
			return this._fc;
		}
	}

, 
	crosshairPoint: function (a) {
		if (arguments.length === 1) {
			if (this.co != a) {
				var b = this.co;
				this.co = a;
				this.f2($.ig.SeriesViewer.prototype.a7, b, this.co);
			}
			return a;
		} else {
			return this.co;
		}
	}
, 
	co: null
, 
	fd: function () {
			return this.fe() == $.ig.InteractionState.prototype.dragZoom || this.fe() == $.ig.InteractionState.prototype.dragPan;
	}

, 
	legend: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.legendProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.legendProperty);
		}
	}

, 
	animateSeriesWhenAxisRangeChanges: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.animateSeriesWhenAxisRangeChangesProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.animateSeriesWhenAxisRangeChangesProperty);
		}
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	f2: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}

, 
	f3: function () {
		this.f4(this.series());
	}

, 
	f4: function (a) {
		var c = a.getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			var d = b.actualLegend();
			if (d == null) {
				continue;
			}
			var e = b.legendItem();
			if (e == null) {
				continue;
			}
			if (d.children().contains(e)) {
				d.children().remove(e);
			}
			if (!d.children().contains(e) && b.legendItemVisibility() != $.ig.Visibility.prototype.collapsed) {
				d.by(e, b);
			}
		}
	}

, 
	f5: function (a, b, c) {
		this.gg(a, b, $.ig.util.cast($.ig.MouseEventArgs.prototype.$type, c));
	}

, 
	f6: function (a, b, c) {
		this.gf(a, b, $.ig.util.cast($.ig.MouseEventArgs.prototype.$type, c));
	}

, 
	f7: function (a, b, c) {
		this.gh(a, b, $.ig.util.cast($.ig.MouseEventArgs.prototype.$type, c));
	}

, 
	f8: function (a, b, c) {
		this.gd(a, b, $.ig.util.cast($.ig.MouseButtonEventArgs.prototype.$type, c));
	}

, 
	f9: function (a, b, c) {
		var d = $.ig.util.cast($.ig.MouseButtonEventArgs.prototype.$type, c);
		if (d != null) {
			this.ge(a, b, $.ig.util.cast($.ig.MouseButtonEventArgs.prototype.$type, c));
		}
	}

, 
	ga: function (a, b, c) {
	}

, 
	gb: function (a, b, c) {
	}
, 
	seriesCursorMouseMove: null
, 
	gc: function (a, b) {
		if (this.seriesCursorMouseMove != null && this.fi()) {
			this.seriesCursorMouseMove(this, new $.ig.ChartCursorEventArgs(this, a, b));
		}
	}
, 
	seriesMouseLeftButtonDown: null
, 
	gd: function (a, b, c) {
		if (this.seriesMouseLeftButtonDown != null) {
			this.seriesMouseLeftButtonDown(this, new $.ig.DataChartMouseButtonEventArgs(this, a, b, c));
		}
	}
, 
	seriesMouseLeftButtonUp: null
, 
	ge: function (a, b, c) {
		if (this.seriesMouseLeftButtonUp != null) {
			this.seriesMouseLeftButtonUp(this, new $.ig.DataChartMouseButtonEventArgs(this, a, b, c));
		}
	}
, 
	seriesMouseMove: null
, 
	gf: function (a, b, c) {
		if (this.seriesMouseMove != null) {
			this.seriesMouseMove(this, new $.ig.ChartMouseEventArgs(this, a, b, c));
		}
	}
, 
	seriesMouseEnter: null
, 
	gg: function (a, b, c) {
		if (this.seriesMouseEnter != null) {
			this.seriesMouseEnter(this, new $.ig.ChartMouseEventArgs(this, a, b, c));
		}
	}
, 
	seriesMouseLeave: null
, 
	gh: function (a, b, c) {
		if (this.seriesMouseLeave != null) {
			this.seriesMouseLeave(this, new $.ig.ChartMouseEventArgs(this, a, b, c));
		}
	}
, 
	cx: null
, 
	viewportRect: function () {
			return this.cx;
	}
, 
	cy: null
, 
	effectiveViewport: function () {
			return this.cy;
	}

, 
	gi: function (a) {
		return $.ig.Rect.prototype.empty();
	}

, 
	gj: function (a) {
		a.c2(this.viewportRect());
	}

, 
	windowRect: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.windowRectProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.windowRectProperty);
		}
	}

, 
	gk: function (a, b) {
		if (!b.isEmpty()) {
			this.cx = b;
			this.cy = this.gi(this.cx);
			this.fb().ee(this.cx);
		}
		if (this.fw()) {
			if (this.actualSyncLink() != null) {
				this.hx(this.actualWindowRect());
			}
		}
		this.h9(a, b);
	}
, 
	cz: null
, 
	gl: function () {
		return this.cz;
	}

, 
	horizontalZoomable: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.horizontalZoomableProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.horizontalZoomableProperty);
		}
	}

, 
	horizontalZoombarVisibility: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.horizontalZoombarVisibilityProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.horizontalZoombarVisibilityProperty);
		}
	}

, 
	verticalZoomable: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.verticalZoomableProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.verticalZoomableProperty);
		}
	}

, 
	verticalZoombarVisibility: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.verticalZoombarVisibilityProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.verticalZoombarVisibilityProperty);
		}
	}

, 
	gm: function () {
		$.ig.SyncManager.prototype.a(this);
	}

, 
	gn: function () {
		$.ig.SyncManager.prototype.b(this);
	}

, 
	fe: function (a) {
		if (arguments.length === 1) {
			if (this.fe() != a) {
				this.c1 = a;
				switch (this.c1) {
					case $.ig.InteractionState.prototype.none:
						this.fb().bj();
						this.ie();
						this.fb().bk();
						break;
					case $.ig.InteractionState.prototype.dragZoom:
						this.fb().bl();
						this.fb().bm();
						this.ie();
						this.fb().bn();
						break;
					case $.ig.InteractionState.prototype.dragPan:
						this.fb().bl();
						this.fb().bm();
						this.ie();
						this.fb().bo();
						break;
				}
			}
			return a;
		} else {
			return this.c1;
		}
	}
, 
	c0: null, 
	c1: null
, 
	_ff: null,
	ff: function (a) {
		if (arguments.length === 1) {
			this._ff = a;
			return a;
		} else {
			return this._ff;
		}
	}

, 
	_fg: null,
	fg: function (a) {
		if (arguments.length === 1) {
			this._fg = a;
			return a;
		} else {
			return this._fg;
		}
	}

, 
	gu: function (a) {
		this.hw(this.h2(a));
	}

, 
	gv: function (a) {
		this.hw({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}

, 
	gw: function (a, b) {
		var c = this.actualWindowRect().left() + this.actualWindowRect().width() * a.__x / this.viewportRect().width();
		var d = this.actualWindowRect().top() + this.actualWindowRect().height() * a.__y / this.viewportRect().height();
		var e = 1 - $.ig.MathUtil.prototype.i(b, -0.5, 0.5);
		var f = Math.max(0, c - e * (c - this.actualWindowRect().left()));
		var g = Math.min(1, d + e * (this.actualWindowRect().bottom() - d));
		var h = Math.min(1, c + e * (this.actualWindowRect().right() - c));
		var i = Math.max(0, d - e * (d - this.actualWindowRect().top()));
		this.hx(new $.ig.Rect(0, f, i, h - f, g - i));
		return this.horizontalZoomable() || this.verticalZoomable();
	}

, 
	gx: function (a) {
		var b = this.actualWindowRect().left() + this.actualWindowRect().width() * a.__x / this.viewportRect().width();
		var c = this.actualWindowRect().top() + this.actualWindowRect().height() * a.__y / this.viewportRect().height();
		var d = 0.7;
		var e = Math.max(0, b - d * (b - this.actualWindowRect().left()));
		var f = Math.min(1, c + d * (this.actualWindowRect().bottom() - c));
		var g = Math.min(1, b + d * (this.actualWindowRect().right() - b));
		var h = Math.max(0, c - d * (c - this.actualWindowRect().top()));
		this.hx(new $.ig.Rect(0, e, h, g - e, f - h));
	}

, 
	_fh: null,
	fh: function (a) {
		if (arguments.length === 1) {
			this._fh = a;
			return a;
		} else {
			return this._fh;
		}
	}

, 
	onKeyDown: function (a) {
		if (this.fe() == $.ig.InteractionState.prototype.dragPan && a == $.ig.Key.prototype.escape) {
			this.fb().by();
			this.fe($.ig.InteractionState.prototype.none);
			this.hy($.ig.Rect.prototype.empty());
			if (this.windowResponse() == $.ig.WindowResponse.prototype.immediate) {
				this.hx(this.fh());
			}
			return true;
		}
		if (this.fe() == $.ig.InteractionState.prototype.dragZoom && a == $.ig.Key.prototype.escape) {
			this.fb().by();
			this.fe($.ig.InteractionState.prototype.none);
			this.fb().bz();
			this.hy($.ig.Rect.prototype.empty());
			return true;
		}
		var b = $.ig.Rect.prototype.empty();
		var c = false;
		switch (a) {
			case $.ig.Key.prototype.home:
				c = true;
				b = new $.ig.Rect(0, 0, 0, 1, 1);
				break;
			case $.ig.Key.prototype.pageDown:
				c = true;
				b = new $.ig.Rect(0, this.actualWindowRect().left() - 0.1 * this.actualWindowRect().width(), this.actualWindowRect().top() - 0.1 * this.actualWindowRect().height(), 1.2 * this.actualWindowRect().width(), 1.2 * this.actualWindowRect().height());
				break;
			case $.ig.Key.prototype.pageUp:
				c = true;
				b = new $.ig.Rect(0, this.actualWindowRect().left() + 0.1 * this.actualWindowRect().width(), this.actualWindowRect().top() + 0.1 * this.actualWindowRect().height(), 0.8 * this.actualWindowRect().width(), 0.8 * this.actualWindowRect().height());
				break;
			case $.ig.Key.prototype.left:
				c = true;
				b = new $.ig.Rect(0, this.actualWindowRect().left() - 0.1 * this.actualWindowRect().width(), this.actualWindowRect().top(), this.actualWindowRect().width(), this.actualWindowRect().height());
				b.x(b.x() - Math.min(b.left(), 0));
				break;
			case $.ig.Key.prototype.right:
				c = true;
				b = new $.ig.Rect(0, this.actualWindowRect().left() + 0.1 * this.actualWindowRect().width(), this.actualWindowRect().top(), this.actualWindowRect().width(), this.actualWindowRect().height());
				b.x(b.x() - Math.max(b.right() - 1, 0));
				break;
			case $.ig.Key.prototype.up:
				c = true;
				b = new $.ig.Rect(0, this.actualWindowRect().left(), this.actualWindowRect().top() - 0.1 * this.actualWindowRect().height(), this.actualWindowRect().width(), this.actualWindowRect().height());
				b.y(b.y() - Math.min(b.top(), 0));
				break;
			case $.ig.Key.prototype.down:
				c = true;
				b = new $.ig.Rect(0, this.actualWindowRect().left(), this.actualWindowRect().top() + 0.1 * this.actualWindowRect().height(), this.actualWindowRect().width(), this.actualWindowRect().height());
				b.y(b.y() - Math.max(b.bottom() - 1, 0));
				break;
		}
		if (!b.isEmpty() && b != this.actualWindowRect()) {
			this.hx(b);
		}
		return c;
	}
, 
	c2: null
, 
	_fi: null,
	fi: function (a) {
		if (arguments.length === 1) {
			this._fi = a;
			return a;
		} else {
			return this._fi;
		}
	}
, 
	c3: null, 
	c4: null
, 
	g2: function (a) {
		if (a.__x >= 0 && a.__y >= 0 && a.__x <= this.viewportRect().width() && a.__y <= this.viewportRect().height()) {
			this.g3(a);

		} else {
			this.hg();
		}
	}

, 
	g3: function (a) {
		if (this.c3 && this.fi()) {
			var b = this.viewportRect().height() > this.viewportRect().width();
			this.fb().ek(b);
			var d = this.series().getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				if (c.__visibility == $.ig.Visibility.prototype.visible) {
					c.gr(a, this.fb().el.on(this.fb()));
				}
			}
			this.fb().ej();
		}
	}

, 
	dragCrosshairActivated: function () {
			return this.c3;
	}

, 
	_tooltipStyle: null,
	tooltipStyle: function (a) {
		if (arguments.length === 1) {
			this._tooltipStyle = a;
			return a;
		} else {
			return this._tooltipStyle;
		}
	}

, 
	g4: function (a) {
		if (this.fi() || this.isDragCrosshairEnabled()) {
			this.c3 = true;
			this.ff(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
			this.fg(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
			this.fe($.ig.InteractionState.prototype.none);
			this.hw(this.h2(a));
		}
	}

, 
	g5: function (a) {
		this.g4(a);
		this.g3(a);
		this.ie();
	}

, 
	g6: function (a) {
		if (!this.c3) {
			this.hm(a, true);
		}
	}

, 
	g7: function (a) {
		this.fk($.ig.Rect.prototype.empty());
		this.hg();
	}

, 
	fj: function () {
			return this.c2;
	}

, 
	g9: function (a) {
		this.c4 = 1;
		this.c3 = false;
		this.fb().ck();
		this.fb().bz();
		this.fb().ei();
		this.fb().cj();
		this.fb().cg();
		this.fb().bm();
		this.fe($.ig.InteractionState.prototype.none);
		this.c5 = true;
		this.c2 = true;
	}

, 
	ha: function (a) {
		this.fb().cj();
		this.fb().cg();
		if (this.fb().a3()) {
			this.hh(a);

		} else {
			this.hi(a);
			this.c4 = a;
		}
	}

, 
	hb: function (a) {
		this.ff(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
		this.fg(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
	}

, 
	hc: function (a, b) {
		var c = this.actualWindowRect().width();
		var d = this.actualWindowRect().height();
		var e = this.actualWindowRect().left() + c / 2;
		var f = this.actualWindowRect().top() + d / 2;
		c = c / a;
		d = d / a;
		var g = e - c / 2;
		var h = f - d / 2;
		this.hx(new $.ig.Rect(0, g, h, c, d));
	}

, 
	hd: function (a) {
		if (this.fb().a3()) {
			this.hh(a);

		} else {
			this.hi(a);
		}
		this.ff($.ig.Rect.prototype.empty());
		this.c2 = false;
	}

, 
	he: function (a) {
		this.c2 = false;
		this.ff($.ig.Rect.prototype.empty());
		this.hg();
	}

, 
	hf: function (a) {
		this.fb().en(a.d());
	}

, 
	hg: function () {
		if (this.c3) {
			this.hw({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
			this.fb().ei();
		}
		this.c3 = false;
	}

, 
	hh: function (a) {
		var b = 1 / a;
		var c = {__x: this.windowRect().x() + this.windowRect().width() / 2, __y: this.windowRect().y() + this.windowRect().height() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var d = {__x: this.windowRect().x() - c.__x, __y: this.windowRect().y() - c.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		var e = new $.ig.Rect(0, d.__x * b + c.__x, d.__y * b + c.__y, this.windowRect().width() * b, this.windowRect().height() * b);
		this.hx(e);
	}

, 
	hi: function (a) {
		var b = a - this.c4;
		if (b != 0) {
			var c = 0.03;
			var d = b < 0 ? 1 + c : 1 - c;
			var e = {__x: this.windowRect().x() + this.windowRect().width() / 2, __y: this.windowRect().y() + this.windowRect().height() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var f = {__x: this.windowRect().x() - e.__x, __y: this.windowRect().y() - e.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
			var g = new $.ig.Rect(0, f.__x * d + e.__x, f.__y * d + e.__y, this.windowRect().width() * d, this.windowRect().height() * d);
			this.hx(g);
		}
	}

, 
	hj: function (a) {
		this.hy($.ig.Rect.prototype.empty());
		this.hx(a);
	}

, 
	hk: function (a, b) {
		if (!this.c2) {
			this.c5 = false;
		}
		this.hm(a, b);
	}

, 
	hl: function (a) {
		if (this.defaultInteraction() != $.ig.InteractionState.prototype.auto) {
			return this.defaultInteraction();
		}
		return this.fb().eu(a);
	}

, 
	hm: function (a, b) {
		var c;
		var d = this.hl(b);
		if (this.fb().a2() == $.ig.ModifierKeys.prototype.none) {
			switch (d) {
				case $.ig.InteractionState.prototype.dragZoom:
					c = this.horizontalZoomable() || this.verticalZoomable() ? d : $.ig.InteractionState.prototype.none;
					break;
				default:
					c = d;
					break;
			}

		} else {
			if (this.fb().a2() == this.dragModifier()) {
				c = $.ig.InteractionState.prototype.dragZoom;
			} else if (this.fb().a2() == this.panModifier()) {
				c = $.ig.InteractionState.prototype.dragPan;

			} else {
				c = $.ig.InteractionState.prototype.none;
			}
		}
		switch (c) {
			case $.ig.InteractionState.prototype.dragZoom:
			case $.ig.InteractionState.prototype.dragPan:
				this.fb().b0();
				this.fb().b1();
				break;
		}
		this.fe(c);
		switch (this.fe()) {
			case $.ig.InteractionState.prototype.dragZoom:
				this.ff(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
				this.fg(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
				this.fk(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
				this.fb().b6();
				this.fb().b7(this.ff());
				this.hy($.ig.Rect.prototype.empty());
				break;
			case $.ig.InteractionState.prototype.dragPan:
				this.ff(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
				this.fk(new $.ig.Rect(0, a.__x, a.__y, 0, 0));
				break;
		}
		this.fh(this.actualWindowRect());
	}

, 
	_fk: null,
	fk: function (a) {
		if (arguments.length === 1) {
			this._fk = a;
			return a;
		} else {
			return this._fk;
		}
	}

, 
	hp: function () {
		return this.fe() == $.ig.InteractionState.prototype.dragPan;
	}

, 
	hq: function (a) {
		return this.windowResponse() == $.ig.WindowResponse.prototype.immediate || a;
	}

, 
	hr: function () {
		return this.fe() == $.ig.InteractionState.prototype.dragZoom;
	}

, 
	hs: function (a, b) {
		if (this.ff().isEmpty() && b) {
			this.hm(a, b);
		}
		var c = $.ig.SeriesViewer.prototype.bg;
		if (b) {
			c = $.ig.SeriesViewer.prototype.bf;
		}
		var d = false;
		var e = new $.ig.Rect(2, {__x: this.ff().x(), __y: this.ff().y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, a);
		var f = new $.ig.Rect(0, 0, 0, 0, 0);
		if (!this.fk().isEmpty()) {
			f = new $.ig.Rect(2, {__x: this.fk().x(), __y: this.fk().y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, a);
		}
		if (f.width() > c && f.height() > c) {
			d = true;
		}
		if (!this.c2) {
			if (d) {
				this.c5 = false;
			}
		}
		if (!this.c2) {
			this.hw(this.h2(a));
		}
		if (this.hr()) {
			if (d) {
				var g = this.h3(e);
				this.hy(g);

			} else {
				this.hy($.ig.Rect.prototype.empty());
			}
			this.fb().b7(e);
		}
		if (this.hp()) {
			var h = this.viewportRect();
			var i = this.actualWindowRect().left() + this.actualWindowRect().width() * (this.ff().x() - a.__x) / h.width();
			var j = this.actualWindowRect().top() + this.actualWindowRect().height() * (this.ff().y() - a.__y) / h.height();
			var k = new $.ig.Rect(0, i, j, this.actualWindowRect().width(), this.actualWindowRect().height());
			if (this.hq(b)) {
				this.hy($.ig.Rect.prototype.empty());
				this.hx(k);
				this.ff(new $.ig.Rect(3, a, new $.ig.Size(0, 0)));
				this.fg(new $.ig.Rect(3, a, new $.ig.Size(0, 0)));

			} else {
				this.hy(k);
			}
		}
		if (b) {
			this.fg(new $.ig.Rect(3, a, new $.ig.Size(0, 0)));
		}
		this.fb().er(a);
	}
, 
	c5: null
, 
	ht: function (a, b) {
		if (!this.c5) {
			var c = $.ig.SeriesViewer.prototype.bg;
			if (b) {
				c = $.ig.SeriesViewer.prototype.bf;
			}
			var d = false;
			var e = new $.ig.Rect(2, {__x: this.ff().x(), __y: this.ff().y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, a);
			if (e.width() > c && e.height() > c) {
				d = true;
			}
			if (this.fe() == $.ig.InteractionState.prototype.dragZoom) {
				this.fb().b8();
				this.fb().bz();
				if (d) {
					this.hx(this.h3(e));
				}
				this.hy($.ig.Rect.prototype.empty());
			}
			if (this.fe() == $.ig.InteractionState.prototype.dragPan) {
				this.fb().b8();
				var f = this.viewportRect();
				var g = this.actualWindowRect().left() + this.actualWindowRect().width() * (this.ff().x() - a.__x) / f.width();
				var h = this.actualWindowRect().top() + this.actualWindowRect().height() * (this.ff().y() - a.__y) / f.height();
				this.hx(new $.ig.Rect(0, g, h, this.actualWindowRect().width(), this.actualWindowRect().height()));
				this.hy($.ig.Rect.prototype.empty());
			}
		}
		this.fe($.ig.InteractionState.prototype.none);
		this.fb().cj();
		this.fb().cg();
		if (b) {
			this.fb().bm();
			this.fb().ei();
		}
	}

, 
	hu: function (a, b) {
		if (b.propertyName() == $.ig.SyncSettings.prototype.a2) {
			$.ig.SyncManager.prototype.c(this, b.oldValue(), b.newValue());
		}
	}

, 
	hv: function (a, b) {
		if (a != null) {
			a.bb().remove(this);
			a.propertyUpdated = $.ig.Delegate.prototype.remove(a.propertyUpdated, this.propertyUpdated);
		}
		if (b != null) {
			b.bb().add(this);
			b.propertyUpdated = $.ig.Delegate.prototype.combine(b.propertyUpdated, this.propertyUpdated);
		}
		var d = this.series().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			c.syncLink(this.actualSyncLink());
			c.seriesViewer(this);
		}
	}

, 
	hw: function (a) {
		this.actualSyncLink().bn(this, a);
	}

, 
	hx: function (a) {
		this.actualSyncLink().bp(this, a);
	}

, 
	hy: function (a) {
		this.actualSyncLink().bo(this, a);
	}

, 
	hz: function (a) {
		if (this.windowResponse() == $.ig.WindowResponse.prototype.immediate) {
			this.hy($.ig.Rect.prototype.empty());
			this.hx(a);

		} else {
			this.hy(a);
		}
	}

, 
	fl: function () {
			return this.actualSyncLink() != null;
	}

, 
	h1: function () {
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
							if (this.$this.actualSyncLink() == null) {
								this.$state = 2;
							}
							else {
								this.$state = 4;
							}
							break;

						case 2:

							this.$state = -2
							return false;
						case 3:
							this.$state = 4;
							break;

						case 4:
							this.$state = 5;
							break;
						case 5:
							this.$b = this.$this.actualSyncLink().ba().getEnumerator();
							this.$state = 8;
							break;
						case 6:
							this.$a = this.$b.current();
							this.$current =  this.$a;
							this.$state = 7
							return true;
						case 7:
							this.$state = 8;
							break;
						case 8:
							if (this.$b.moveNext()) {
								this.$state = 6;
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
		}; } () };
		return new $.ig.GenericEnumerable$1($.ig.SeriesViewer.prototype.$type, $iter);
	}

, 
	h2: function (a) {
		var b = this.viewportRect();
		var c = this.actualWindowRect().left() + this.actualWindowRect().width() * a.__x / b.width();
		var d = this.actualWindowRect().top() + this.actualWindowRect().height() * a.__y / b.height();
		return {__x: c, __y: d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
	}

, 
	h3: function (a) {
		var b = this.viewportRect();
		var c = this.actualWindowRect().left() + this.actualWindowRect().width() * a.left() / b.width();
		var d = this.actualWindowRect().top() + this.actualWindowRect().height() * a.top() / b.height();
		var e = this.actualWindowRect().left() + this.actualWindowRect().width() * a.right() / b.width();
		var f = this.actualWindowRect().top() + this.actualWindowRect().height() * a.bottom() / b.height();
		return new $.ig.Rect(0, c, d, e - c, f - d);
	}
, 
	windowRectChanged: null
, 
	h4: function (a, b) {
		if (this.windowRectChanged != null && a != b) {
			this.windowRectChanged(this, new $.ig.RectChangedEventArgs(a, b));
		}
	}

, 
	h5: function (a, b) {
		this.h4(a, b);
	}

, 
	h6: function (a, b) {
		if (a.width() != b.width() || a.height() != b.height() || a.x() != b.x() || a.y() != b.y()) {
			return true;
		}
		return false;
	}
, 
	actualWindowRectChanged: null
, 
	h7: function (a, b) {
		if (this.actualWindowRectChanged != null && this.h6(a, b)) {
			this.actualWindowRectChanged(this, new $.ig.RectChangedEventArgs(a, b));
		}
	}

, 
	resetZoom: function () {
		this.fb().cw();
	}
, 
	gridAreaRectChanged: null
, 
	h8: function (a, b) {
		if (this.gridAreaRectChanged != null && a != b) {
			this.gridAreaRectChanged(this, new $.ig.RectChangedEventArgs(a, b));
		}
	}

, 
	h9: function (a, b) {
		this.h8(a, b);
		this.i1();
	}

, 
	windowResponse: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.windowResponseProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.windowResponseProperty);
		}
	}

, 
	_fm: null,
	fm: function (a) {
		if (arguments.length === 1) {
			this._fm = a;
			return a;
		} else {
			return this._fm;
		}
	}

, 
	windowRectMinWidth: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.windowRectMinWidthProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.windowRectMinWidthProperty);
		}
	}

, 
	_syncChannel: null,
	syncChannel: function (a) {
		if (arguments.length === 1) {
			this._syncChannel = a;
			return a;
		} else {
			return this._syncChannel;
		}
	}
, 
	c9: null
, 
	actualSyncLink: function (a) {
		if (arguments.length === 1) {
			var b = this.c9;
			this.c9 = a;
			this.f2($.ig.SeriesViewer.prototype.bj, b, this.c9);
			return a;
		} else {
			return this.c9;
		}
	}

, 
	ic: function () {
		this.fb().ds();
	}

, 
	overviewPlusDetailPaneVisibility: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.overviewPlusDetailPaneVisibilityProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.overviewPlusDetailPaneVisibilityProperty);
		}
	}

, 
	fn: function () {
			return this.fb().cu().b();
	}

, 
	crosshairVisibility: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.crosshairVisibilityProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.crosshairVisibilityProperty);
		}
	}

, 
	isDragCrosshairEnabled: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.isDragCrosshairEnabledProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.isDragCrosshairEnabledProperty);
		}
	}

, 
	plotAreaBorderBrush: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.plotAreaBorderBrushProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.plotAreaBorderBrushProperty);
		}
	}

, 
	plotAreaBackground: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.plotAreaBackgroundProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.plotAreaBackgroundProperty);
		}
	}

, 
	plotAreaMinWidth: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.plotAreaMinWidthProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.plotAreaMinWidthProperty);
		}
	}

, 
	plotAreaMinHeight: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.plotAreaMinHeightProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.plotAreaMinHeightProperty);
		}
	}

, 
	ie: function () {
		var a = this.crosshairPoint();
		var b = this.fe() == $.ig.InteractionState.prototype.none && (this.fi() || this.c3) && !this.c2;
		var c = this.viewportRect();
		if (b && !isNaN(a.__x) && !c.isEmpty()) {
			var d = c.width() * (a.__x - this.actualWindowRect().left()) / this.actualWindowRect().width();
			this.fb().ca(c.left() + d, c.top(), c.left() + d, c.bottom());
			this.fb().cf();
			this.fb().em(d);

		} else {
			this.fb().cg();
		}
		if (b && !isNaN(a.__y) && !c.isEmpty()) {
			var e = c.height() * (a.__y - this.actualWindowRect().top()) / this.actualWindowRect().height();
			this.fb().ch(c.left(), c.top() + e, c.right(), c.top() + e);
			this.fb().ci();

		} else {
			this.fb().cj();
		}
	}
, 
	da: null
, 
	ig: function (a, b, c, d) {
		var $self = this;
		switch (b) {
			case $.ig.SeriesViewer.prototype.bj:
				this.hv($.ig.util.cast($.ig.SyncLink.prototype.$type, c), $.ig.util.cast($.ig.SyncLink.prototype.$type, d));
				break;
			case $.ig.SeriesViewer.prototype.bl:
				if (this.crosshairVisibility() != $.ig.Visibility.prototype.collapsed) {
					this.fi(true);

				} else {
					this.fi(this.mobileMode());
				}
				this.ie();
				break;
			case $.ig.SeriesViewer.prototype.a7:
				this.ie();
				break;
			case $.ig.SeriesViewer.prototype.ba:
				if (this.actualSyncLink() != null) {
					this.da++;
					this.hx(d);
					this.da--;
				}
				if (!this.windowRect().equals(c) && this.da == 0) {
					this.h5(c, this.windowRect());
				}
				this.i1();
				break;
			case $.ig.SeriesViewer.prototype.bx:
				this.actualWindowScaleHorizontal(this.windowScaleHorizontal());
				break;
			case $.ig.SeriesViewer.prototype.by:
				this.actualWindowScaleVertical(this.windowScaleVertical());
				break;
			case $.ig.SeriesViewer.prototype.bv:
				this.actualWindowPositionHorizontal(this.windowPositionHorizontal());
				break;
			case $.ig.SeriesViewer.prototype.bw:
				this.actualWindowPositionVertical(this.windowPositionVertical());
				break;
			case $.ig.SeriesViewer.prototype.cl:
			case $.ig.SeriesViewer.prototype.cm:
			case $.ig.SeriesViewer.prototype.ck:
			case $.ig.SeriesViewer.prototype.cj:
				if (!this.fo()) {
					var e = this.windowRectMinWidth();
					this.windowRect(new $.ig.Rect(0, this.actualWindowPositionHorizontal(), this.actualWindowPositionVertical(), $.ig.MathUtil.prototype.i(this.actualWindowScaleHorizontal(), e, 1), $.ig.MathUtil.prototype.i(this.actualWindowScaleVertical(), e, 1)));
				}
				break;
			case $.ig.SeriesViewer.prototype.bk:
				if (!this.mobileMode()) {
					this.db = this.overviewPlusDetailPaneVisibility() == $.ig.Visibility.prototype.visible;
					this.fn().c3().af(false);
					this.fb().d2();
					this.fb().bd();
					this.ic();

				} else {
					this.db = this.overviewPlusDetailPaneVisibility() == $.ig.Visibility.prototype.visible;
					this.fn().c3().af(this.db);
					this.ic();
				}
				break;
			case $.ig.SeriesViewer.prototype.ci:
				if (c != d) {
					this.ik();
				}
				this.h7(c, d);
				break;
			case $.ig.SeriesViewer.prototype.bp:
				this.fb().eq(d);
				break;
			case $.ig.SeriesViewer.prototype.bb:
			case $.ig.SeriesViewer.prototype.bd:
				this.ih();
				break;
		}
	}

, 
	ih: function () {
		if (this.fn() == null) {
			return;
		}
		this.fn().dj(this.horizontalZoomable() || this.verticalZoomable());
	}
, 
	db: null
, 
	_fo: null,
	fo: function (a) {
		if (arguments.length === 1) {
			this._fo = a;
			return a;
		} else {
			return this._fo;
		}
	}

, 
	defaultInteraction: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.defaultInteractionProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.defaultInteractionProperty);
		}
	}

, 
	dragModifier: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.dragModifierProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.dragModifierProperty);
		}
	}

, 
	panModifier: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.panModifierProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.panModifierProperty);
		}
	}
, 
	dc: null
, 
	previewRect: function (a) {
		if (arguments.length === 1) {
			var b = this.dc;
			this.dc = a;
			if (this.dc.isEmpty()) {
				this.fb().ck();

			} else {
				this.fb().cn(this.viewportRect(), this.il(this.previewRect()));
				this.fb().co();
				this.f2("PreviewRect", b, this.dc);
			}
			return a;
		} else {
			return this.dc;
		}
	}

, 
	ik: function () {
		var a = this.fo();
		this.fo(true);
		this.actualWindowPositionHorizontal(this.actualWindowRect().x());
		this.actualWindowPositionVertical(this.actualWindowRect().y());
		this.actualWindowScaleHorizontal(this.actualWindowRect().width());
		this.actualWindowScaleVertical(this.actualWindowRect().height());
		this.fo(a);
		this.fb().bm();
		this.fb().cp(this.actualWindowRect());
	}

, 
	windowPositionHorizontal: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.windowPositionHorizontalProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.windowPositionHorizontalProperty);
		}
	}

, 
	windowPositionVertical: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.windowPositionVerticalProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.windowPositionVerticalProperty);
		}
	}

, 
	windowScaleHorizontal: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.windowScaleHorizontalProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.windowScaleHorizontalProperty);
		}
	}

, 
	windowScaleVertical: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.windowScaleVerticalProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.windowScaleVerticalProperty);
		}
	}

, 
	il: function (a) {
		if (this.viewportRect().isEmpty()) {
			return $.ig.Rect.prototype.empty();
		}
		var b = this.viewportRect();
		var c = b.left() + (b.width() * (a.left() - this.actualWindowRect().left()) / this.actualWindowRect().width());
		var d = b.top() + (b.height() * (a.top() - this.actualWindowRect().top()) / this.actualWindowRect().height());
		var e = b.left() + (b.width() * (a.right() - this.actualWindowRect().left()) / this.actualWindowRect().width());
		var f = b.top() + (b.height() * (a.bottom() - this.actualWindowRect().top()) / this.actualWindowRect().height());
		return new $.ig.Rect(0, c, d, e - c, f - d);
	}
, 
	refreshCompleted: null
, 
	im: function () {
		if (this.refreshCompleted != null) {
			this.refreshCompleted(this, new $.ig.EventArgs());
		}
	}

, 
	io: function () {
	}

, 
	ip: function (a) {
		this.ih();
	}

, 
	crosshairLineStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.crosshairLineStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.crosshairLineStyleProperty);
		}
	}

, 
	previewPathStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.previewPathStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.previewPathStyleProperty);
		}
	}

, 
	zoombarStyle: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.zoombarStyleProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.zoombarStyleProperty);
		}
	}

, 
	circleMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.circleMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.circleMarkerTemplateProperty);
		}
	}

, 
	triangleMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.triangleMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.triangleMarkerTemplateProperty);
		}
	}

, 
	pyramidMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.pyramidMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.pyramidMarkerTemplateProperty);
		}
	}

, 
	squareMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.squareMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.squareMarkerTemplateProperty);
		}
	}

, 
	diamondMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.diamondMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.diamondMarkerTemplateProperty);
		}
	}

, 
	pentagonMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.pentagonMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.pentagonMarkerTemplateProperty);
		}
	}

, 
	hexagonMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.hexagonMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.hexagonMarkerTemplateProperty);
		}
	}

, 
	tetragramMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.tetragramMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.tetragramMarkerTemplateProperty);
		}
	}

, 
	pentagramMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.pentagramMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.pentagramMarkerTemplateProperty);
		}
	}

, 
	hexagramMarkerTemplate: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewer.prototype.hexagramMarkerTemplateProperty, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewer.prototype.hexagramMarkerTemplateProperty);
		}
	}

, 
	iq: function () {
	}

, 
	ir: function () {
	}

, 
	is: function () {
	}

, 
	provideContainer: function (a) {
		this.fb().c9(a);
	}

, 
	onContainerResized: function (a, b) {
		this.fb().dr(a, b);
	}

, 
	notifyContainerResized: function () {
		this.fb().dq();
	}

, 
	getContainerRect: function () {
		return this.fb().dy();
	}

, 
	getContainerOffsets: function () {
		return this.fb().dz();
	}

, 
	attachSeries: function (a) {
		this.fb().bw(a);
	}

, 
	removeSeries: function (a) {
		this.fb().bp(a);
	}

, 
	_canvasRenderScheduler: null,
	canvasRenderScheduler: function (a) {
		if (arguments.length === 1) {
			this._canvasRenderScheduler = a;
			return a;
		} else {
			return this._canvasRenderScheduler;
		}
	}

, 
	_fp: null,
	fp: function (a) {
		if (arguments.length === 1) {
			this._fp = a;
			return a;
		} else {
			return this._fp;
		}
	}
, 
	df: null
, 
	mobileMode: function (a) {
		if (arguments.length === 1) {
			var b = this.df;
			this.df = a;
			if (b != this.df) {
				this.fb().ef(this.df);
			}
			return a;
		} else {
			return this.df;
		}
	}

, 
	_syncSettings: null,
	syncSettings: function (a) {
		if (arguments.length === 1) {
			this._syncSettings = a;
			return a;
		} else {
			return this._syncSettings;
		}
	}

, 
	addTooltipToView: function (a) {
		this.fb().eo(a);
	}

, 
	iv: function (a) {
		this.fb().ep(a);
	}

, 
	notifySetItem: function (source_, a, b, c) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		var d = this.actualSyncLink().bf(source_);
		if (d == null) {
			return;
		}
		d.ae(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, c, b, a));
	}

, 
	notifyClearItems: function (source_) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		var a = this.actualSyncLink().bf(source_);
		if (a == null) {
			return;
		}
		a.ae(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset));
	}

, 
	notifyInsertItem: function (source_, a, b) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		var c = this.actualSyncLink().bf(source_);
		if (c == null) {
			return;
		}
		c.ae(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, b, a));
	}

, 
	notifyRemoveItem: function (source_, a, b) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		var c = this.actualSyncLink().bf(source_);
		if (c == null) {
			return;
		}
		c.ae(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, b, a));
	}
, 
	dg: null, 
	dh: null
, 
	_manageDataSources: null,
	manageDataSources: function (a) {
		if (arguments.length === 1) {
			this._manageDataSources = a;
			return a;
		} else {
			return this._manageDataSources;
		}
	}

, 
	destroy: function () {
		var a = new $.ig.List$1($.ig.Series.prototype.$type, 0);
		for (var b = 0; b < this.series().count(); b++) {
			a.add(this.series().__inner[b]);
		}
		for (var c = 0; c < a.count(); c++) {
			this.series().remove(a.__inner[c]);
			this.removeSpecificDataSource(a.__inner[c].name(), true);
			a.__inner[c].itemsSource(null);
			a.__inner[c].provideContext(null, null);
		}
		this.iw();
		this.removeWidgetLevelDataSource();
		this.fb().c9(null);
	}

, 
	iw: function () {
	}

, 
	setWidgetLevelDataSource: function (source_) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		this.dg = source_;
		this.iz();
	}

, 
	removeWidgetLevelDataSource: function () {
		this.dg = null;
		this.iz();
	}

, 
	setSpecificDataSource: function (a, source_) {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (!this.dh.containsKey(a)) {
			this.dh.add(a, source_);

		} else {
			this.dh.item(a, source_);
		}
		this.iz();
	}

, 
	removeSpecificDataSource: function (a, b) {
		if (this.dh.containsKey(a)) {
			this.dh.remove(a);
		}
		if (!b) {
			this.iz();
		}
	}

, 
	ix: function (a, b) {
		if (a.itemsSource() != b) {
			a.itemsSource(b);
		}
	}

, 
	iy: function (a) {
		if (!this.manageDataSources()) {
			return;
		}
		if ($.ig.util.cast($.ig.Series.prototype.$type, a) !== null) {
			var b = a;
			if (this.dh.containsKey(b.name())) {
				var c = this.dh.item(b.name());
				this.ix(b, c);

			} else {
				this.ix(b, this.dg);
			}
		}
		if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a) !== null) {
			var d = a;
			if (this.dh.containsKey(d.name())) {
				var e = this.dh.item(d.name());
				if (d.itemsSource() != e) {
					d.itemsSource(e);
				}

			} else {
				if (d.itemsSource() != this.dg) {
					d.itemsSource(this.dg);
				}
			}
		}
	}

, 
	iz: function () {
		if (!this.manageDataSources()) {
			return;
		}
		var b = this.series().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			this.iy(a);
		}
	}
, 
	di: null
, 
	topMargin: function (a) {
		if (arguments.length === 1) {
			this.di = a;
			this.ic();
			return a;
		} else {
			return this.di;
		}
	}
, 
	dj: null
, 
	leftMargin: function (a) {
		if (arguments.length === 1) {
			this.dj = a;
			this.ic();
			return a;
		} else {
			return this.dj;
		}
	}
, 
	dk: null
, 
	rightMargin: function (a) {
		if (arguments.length === 1) {
			this.dk = a;
			this.ic();
			return a;
		} else {
			return this.dk;
		}
	}
, 
	dl: null
, 
	bottomMargin: function (a) {
		if (arguments.length === 1) {
			this.dl = a;
			this.ic();
			return a;
		} else {
			return this.dl;
		}
	}
, 
	dm: null
, 
	autoMarginWidth: function (a) {
		if (arguments.length === 1) {
			this.dm = a;
			this.ic();
			return a;
		} else {
			return this.dm;
		}
	}
, 
	dn: null
, 
	autoMarginHeight: function (a) {
		if (arguments.length === 1) {
			this.dn = a;
			this.ic();
			return a;
		} else {
			return this.dn;
		}
	}

, 
	shouldAddAutoMargins: function () {
		return false;
	}

, 
	getCoercionMethod: function (a, b) {
		var c = new $.ig.CoercionInfo();
		c.c(a);
		c.d(null);
		var d = $.ig.SeriesViewer.prototype.parseMemberPath(a);
		if (d.d() == null) {
			return c;
		}
		if (b != null) {
			var methods_ = b;
			var key_ = d.d();
			var val_ = null;
			if (typeof methods_[key_] != 'undefined') { val_ = methods_[key_]; };
			c.c(d.c());
			c.d(val_);
		}
		return c;
	}

, 
	parseMemberPath: function (a) {
		var b = a.split('!');
		if (b.length == 2) {
			return new $.ig.Tuple$2(String, String, b[0], b[1]);

		} else {
			return new $.ig.Tuple$2(String, String, a, null);
		}
	}

, 
	overviewPlusDetailPaneBackgroundImageUri: function (a) {
		if (arguments.length === 1) {
			this.fn().c3().av(a);
			return a;
		} else {
			return this.fn().c3().av();
		}
	}
, 
	dp: null
, 
	actualWindowRect: function (a) {
		if (arguments.length === 1) {
			var b = this.dp != a;
			if (b) {
				var c = this.dp;
				this.dp = a;
				this.f2($.ig.SeriesViewer.prototype.ci, c, a);
			}
			return a;
		} else {
			return this.dp;
		}
	}

, 
	i1: function () {
		this.actualWindowRect(this.i2());
	}

, 
	i2: function () {
		return new $.ig.Rect(0, Math.min(1, Math.max(0, this.windowRect().left())), Math.min(1, Math.max(0, this.windowRect().top())), Math.min(1, Math.max(0, this.windowRect().width())), Math.min(1, Math.max(0, this.windowRect().height())));
	}
, 
	dq: null
, 
	actualWindowPositionHorizontal: function (a) {
		if (arguments.length === 1) {
			var b = this.dq;
			this.dq = a;
			this.f2($.ig.SeriesViewer.prototype.cj, b, this.dq);
			return a;
		} else {
			return this.dq;
		}
	}
, 
	dr: null
, 
	actualWindowPositionVertical: function (a) {
		if (arguments.length === 1) {
			var b = this.dr;
			this.dr = a;
			this.f2($.ig.SeriesViewer.prototype.ck, b, this.dr);
			return a;
		} else {
			return this.dr;
		}
	}
, 
	ds: null
, 
	actualWindowScaleHorizontal: function (a) {
		if (arguments.length === 1) {
			var b = this.ds;
			this.ds = a;
			this.f2($.ig.SeriesViewer.prototype.cl, b, this.ds);
			return a;
		} else {
			return this.ds;
		}
	}
, 
	dt: null
, 
	actualWindowScaleVertical: function (a) {
		if (arguments.length === 1) {
			var b = this.dt;
			this.dt = a;
			this.f2($.ig.SeriesViewer.prototype.cm, b, this.dt);
			return a;
		} else {
			return this.dt;
		}
	}

, 
	i7: function () {
		if (this.db) {
			(this.fn().dd()).u(true);
			this.fn().fu(false);
		}
	}

, 
	i8: function () {
		if (this.db) {
			(this.fn().dd()).u(true);
			this.fn().fu(false);
		}
	}

, 
	flush: function () {
		this.fc().y();
		this.fb().eh();
		this.fc().y();
		this.canvasRenderScheduler().q();
	}

, 
	useFixedAspectZoom: function () {
		return false;
	}
, 
	du: null, 
	dv: null
, 
	i9: function (a, b) {
		if (this.du != null) {
			this.ja(this.du);
			this.du = null;
			this.dv = null;
		}
		this.du = a;
		this.dv = this.fc().r($.ig.ChartContentType.prototype.background, a, b);
	}

, 
	ja: function (a) {
		this.fc().s($.ig.ChartContentType.prototype.background, a);
		this.du = null;
		this.dv = null;
	}

, 
	jb: function () {
		this.fc().u($.ig.ChartContentType.prototype.background, this.du, this.dv, false);
	}
,
	$type: new $.ig.Type('SeriesViewer', $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('XamDataChart', 'SeriesViewer', {
	kl: null, 
	km: null
, 
		staticInit: function () {


						$.ig.XamDataChart.prototype.kl = -Number.MAX_VALUE;
				$.ig.XamDataChart.prototype.km = Number.MAX_VALUE;
		}
, 
	k1: function (a) {
		var $self = this;
		if (a.seriesViewer() == null) {
		return -1;
		}
		var b = $.ig.XamDataChartView.prototype.cv(a);
		if (b.count$1($.ig.Series.prototype.$type) == 0) {
		return -1;
		}
		var d = b.max$111($.ig.Series.prototype.$type, function (c) { return c.index()}) + 1;
		return d;
	}

, 
		init: function () {

			var $self = this;
			this.kn = new $.ig.AxisCollection();

			$.ig.SeriesViewer.prototype.init.call(this);
						this.a3($.ig.XamDataChart.prototype.$type);
				this.axes().collectionChanged = $.ig.Delegate.prototype.combine(this.axes().collectionChanged, this.k2.on(this));
				this.axes().collectionResetting = $.ig.Delegate.prototype.combine(this.axes().collectionResetting, this.k3.on(this));
		}
, 
	ig: function (a, b, c, d) {
		$.ig.SeriesViewer.prototype.ig.call(this, a, b, c, d);
		switch (b) {
			case $.ig.XamDataChart.prototype.kf:
				(this.fb()).fa(d);
					var f = this.axes().getEnumerator();
					while (f.moveNext()) {
						var e = f.current();
						e.renderAxis();
					}
				break;
		}
	}

, 
	isSquare: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamDataChart.prototype.isSquareProperty, a);
			return a;
		} else {
			return this.b($.ig.XamDataChart.prototype.isSquareProperty);
		}
	}

, 
	gridMode: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamDataChart.prototype.gridModeProperty, a);
			return a;
		} else {
			return this.b($.ig.XamDataChart.prototype.gridModeProperty);
		}
	}

, 
	brushes: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamDataChart.prototype.brushesProperty, a);
			return a;
		} else {
			return this.b($.ig.XamDataChart.prototype.brushesProperty);
		}
	}

, 
	markerBrushes: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamDataChart.prototype.markerBrushesProperty, a);
			return a;
		} else {
			return this.b($.ig.XamDataChart.prototype.markerBrushesProperty);
		}
	}

, 
	outlines: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamDataChart.prototype.outlinesProperty, a);
			return a;
		} else {
			return this.b($.ig.XamDataChart.prototype.outlinesProperty);
		}
	}

, 
	markerOutlines: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamDataChart.prototype.markerOutlinesProperty, a);
			return a;
		} else {
			return this.b($.ig.XamDataChart.prototype.markerOutlinesProperty);
		}
	}

, 
	axes: function () {
			return this.kn;
	}
, 
	kn: null
, 
	k2: function (a, b) {
		if (b.oldItems() != null) {
			var d = b.oldItems().getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				if (c != null) {
					c.c0(null);
					c.seriesViewer(null);
					this.ft(c);
					this.fb().cq(c);
					c.rangeChanged = $.ig.Delegate.prototype.remove(c.rangeChanged, this.k4.on(this));
					this.fb().cr(c);
					if (c.dc() != null) {
						var f = c.fl().getEnumerator();
						while (f.moveNext()) {
							var e = f.current();
							e.renderSeries(false);
						}
					}
				}
			}
			if (this.axes().count() == 0) {
				this.resetZoom();
			}
		}
		if (b.newItems() != null) {
			var h = b.newItems().getEnumerator();
			while (h.moveNext()) {
				var g = h.current();
				if (g != null) {
					this.iy(g);
					g.c0(this.actualSyncLink());
					g.seriesViewer(this);
					this.fb().cs(g);
					g.rangeChanged = $.ig.Delegate.prototype.combine(g.rangeChanged, this.k4.on(this));
					this.fb().ct(g);
				}
			}
		}
		this.i8();
	}

, 
	k3: function (a, b) {
		var c = new $.ig.List$1($.ig.Series.prototype.$type, 0);
		var e = this.axes().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			if (d.dc() != null) {
				var g = d.fl().getEnumerator();
				while (g.moveNext()) {
					var f = g.current();
					if (!c.contains(f)) {
						c.add(f);
					}
				}
			}
			d.c0(null);
			d.seriesViewer(null);
			this.ft(d);
			this.fb().cq(d);
			d.rangeChanged = $.ig.Delegate.prototype.remove(d.rangeChanged, this.k4.on(this));
			this.fb().cr(d);
			this.resetZoom();
		}
		var i = this.series().getEnumerator();
		while (i.moveNext()) {
			var h = i.current();
			if (!c.contains(h)) {
				c.add(h);
			}
		}
		var k = c.getEnumerator();
		while (k.moveNext()) {
			var j = k.current();
			j.renderSeries(false);
		}
	}
, 
	axisRangeChanged: null
, 
	k4: function (a, b) {
		var c = $.ig.util.cast($.ig.Axis.prototype.$type, a);
		if (c == null) {
			return;
		}
		this.i8();
		if (this.axisRangeChanged != null) {
			this.axisRangeChanged(this, new $.ig.ChartAxisRangeChangedEventArgs(this, c, b.oldMinimumValue(), b.minimumValue(), b.oldMaximumValue(), b.maximumValue()));
		}
		if (c.crossingAxis() != null) {
			c.crossingAxis().ed();
		}
		c.ed();
		var d = this.animateSeriesWhenAxisRangeChanges();
		if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, c) !== null) {
			d = true;
		}
		var f = c.fl().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			e.dv(true);
			this.i8();
			e.renderSeries(d);
		}
		var h = c.seriesViewer().series().getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			$.ig.XamDataChart.prototype.k5(c, d, g);
		}
		var j = this.axes().getEnumerator();
		while (j.moveNext()) {
			var i = j.current();
			if (i != c && i.crossingAxis() != null && i.crossingAxis() == c) {
				i.ed();
			}
		}
	}

, 
	k5: function (a, b, c) {
	}

, 
	hv: function (a, b) {
		$.ig.SeriesViewer.prototype.hv.call(this, a, b);
		var d = this.axes().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			c.c0(this.actualSyncLink());
			c.seriesViewer(this);
		}
	}

, 
	gridZIndex: function () {
			return this.gridMode() == $.ig.GridMode.prototype.beforeSeries ? 2 : 1;
	}

, 
	seriesZIndex: function () {
			return this.gridMode() == $.ig.GridMode.prototype.beforeSeries ? 1 : 2;
	}

, 
	styleUpdated: function () {
		this.fb().d1();
		var b = this.axes().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.es(false);
		}
		var d = this.series().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			c.view().b9();
			c.renderSeries(false);
		}
	}

, 
	iq: function () {
		return this.k0().e5();
	}

, 
	iw: function () {
		$.ig.SeriesViewer.prototype.iw.call(this);
		var a = new $.ig.List$1($.ig.Axis.prototype.$type, 0);
		for (var b = 0; b < this.axes().count(); b++) {
			a.add(this.axes().__inner[b]);
		}
		for (var c = 0; c < a.count(); c++) {
			this.axes().remove(a.__inner[c]);
			if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a.__inner[c]) !== null) {
				var d = a.__inner[c];
				this.removeSpecificDataSource(d.name(), true);
				d.itemsSource(null);
			}
			a.__inner[c].fj(null, null);
		}
	}

, 
	ir: function () {
		return this.k0().e7();
	}

, 
	is: function () {
		return this.k0().e6();
	}

, 
	shouldAddAutoMargins: function () {
		return true;
	}

, 
	iz: function () {
		$.ig.SeriesViewer.prototype.iz.call(this);
		if (!this.manageDataSources()) {
			return;
		}
		var b = this.axes().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			this.iy(a);
		}
	}

, 
	fx: function (a) {
		return this.k6(a, this.brushes());
	}

, 
	k6: function (a, b) {
		if (b != null && b.count() > 0) {
			return b.item(a % b.count());

		} else {
			return null;
		}
	}

, 
	getMarkerBrushByIndex: function (a) {
		return this.k6(a, this.markerBrushes());
	}

, 
	getMarkerOutlineByIndex: function (a) {
		return this.k6(a, this.markerOutlines());
	}

, 
	fy: function (a) {
		return this.k6(a, this.outlines());
	}

, 
	fw: function () {
		if (this.isSquare()) {
			return true;
		}
		return this.k7();
	}

, 
	k7: function () {
		var $self = this;
		var b = ((this.series()).where$1($.ig.Series.prototype.$type, function (a) { return $.ig.util.cast($.ig.PolarBase.prototype.$type, a) !== null || $.ig.util.cast($.ig.RadialBase.prototype.$type, a) !== null}));
		if (b.any$1($.ig.Series.prototype.$type)) {
			return true;
		}
		var d = ((this.axes()).where$1($.ig.Series.prototype.$type, function (c) { return $.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, c) !== null || $.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, c) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, c) !== null}));
		if (d.any$1($.ig.Series.prototype.$type)) {
			return true;
		}
		return false;
	}

, 
	io: function () {
		return new $.ig.XamDataChartView(this);
	}

, 
	ip: function (a) {
		$.ig.SeriesViewer.prototype.ip.call(this, a);
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
	plotAreaBackgroundContent: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.XamDataChart.prototype.plotAreaBackgroundContentProperty, a);
			return a;
		} else {
			return this.b($.ig.XamDataChart.prototype.plotAreaBackgroundContentProperty);
		}
	}

, 
	exportVisualData: function () {
		var a = new $.ig.ChartVisualData();
		for (var b = 0; b < this.axes().count(); b++) {
			var c = this.axes().__inner[b].exportVisualData();
			a.axes().add(c);
		}
		for (var d = 0; d < this.series().count(); d++) {
			var e = this.series().__inner[d].exportVisualData();
			a.series().add(e);
		}
		a.name(this.name());
		return a;
	}
,
	$type: new $.ig.Type('XamDataChart', $.ig.SeriesViewer.prototype.$type)
}, true);

$.ig.util.defType('SeriesViewerView', 'Object', {

		init: function (a) {

			var $self = this;
			this.a = new $.ig.SeriesViewerComponentsFromView();
			this.b = $.ig.Rect.prototype.empty();
			this.c = false;
			this.d = $.ig.Rect.prototype.empty();
			this.e = false;
			this.f = false;
			this.g = false;
			this.h = false;

			$.ig.Object.prototype.init.call(this);
						this.ag(a);
				this.ag().crosshairPoint({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				this.ag().windowResponse($.ig.WindowResponse.prototype.immediate);
				this.aq(new $.ig.SeriesViewerViewManager(this));
				this.ap((function () { var $ret = new $.ig.Line();
				$ret.__visibility = $.ig.Visibility.prototype.collapsed; return $ret;}()));
				this.ao((function () { var $ret = new $.ig.Line();
				$ret.__visibility = $.ig.Visibility.prototype.collapsed; return $ret;}()));
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
	a6: function () {
		this.ag().crosshairVisibility($.ig.Visibility.prototype.collapsed);
		var model_ = this.ag();
		var isTouch_ = typeof Modernizr !== 'undefined' && Modernizr.touch || (typeof $.mobile !== 'undefined' && $.mobile !== null && $.support.touch);
		model_.mobileMode(isTouch_);
		this.an(new $.ig.Path());
		this.am(new $.ig.Rectangle());
		this.d0();
		this.ak(new $.ig.SeriesCollection());
		this.al(new $.ig.AxisCollection());
		this.ai(new $.ig.XamOverviewPlusDetailPane());
		this.bd();
		this.ai().c5(new $.ig.Rect(0, 0, 0, 1, 1));
		this.ai().c7(this.ag().windowRect());
		this.ai().dd(new $.ig.SeriesViewerSurfaceViewer(this.ag(), this));
		this.ag().windowRectChanged = $.ig.Delegate.prototype.combine(this.ag().windowRectChanged, this.be.on(this));
		this.ag().gridAreaRectChanged = $.ig.Delegate.prototype.combine(this.ag().gridAreaRectChanged, this.bf.on(this));
		this.aj(new $.ig.OverviewPlusDetailViewportHost(this));
		this.ah(new $.ig.CanvasRenderScheduler());
		this.ah().m(this);
		this.ah().h().add(this.ag().fp());
		if (this.ag().fn() != null) {
			this.ag().fn().c3().au(this.ah());
			this.ai().windowChanging = $.ig.Delegate.prototype.combine(this.ai().windowChanging, this.bb.on(this));
			this.ai().windowChanged = $.ig.Delegate.prototype.combine(this.ai().windowChanged, this.bc.on(this));
		}
		this.d2();
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
	bb: function (a, b) {
		var c = $.ig.SeriesViewerSurfaceViewer.prototype.am(b.oldValue(), b.newValue(), this.ag().horizontalZoomable(), this.ag().verticalZoomable(), this.ai().c5());
		if (c.isEmpty()) {
			this.ai().c7(b.oldValue());
		} else if (!c.equals(b.newValue())) {
			this.ai().c7(c);
		}
		if (this.ag().windowResponse() == $.ig.WindowResponse.prototype.immediate) {
			var d = this.ag().viewportRect().width() / this.ag().viewportRect().height();
			c = new $.ig.Rect(0, c.left() / d, c.top(), c.width() / d, c.height());
			this.ag().windowRect(c);
		}
	}

, 
	bc: function (a, b) {
		var c = $.ig.SeriesViewerSurfaceViewer.prototype.am(b.oldValue(), b.newValue(), this.ag().horizontalZoomable(), this.ag().verticalZoomable(), this.ai().c5());
		if (c.isEmpty()) {
			c = b.oldValue();
		} else if (!c.equals(b.newValue())) {
			this.ai().c7(c);
		}
		var d = this.ag().viewportRect().width() / this.ag().viewportRect().height();
		c = new $.ig.Rect(0, c.left() / d, c.top(), c.width() / d, c.height());
		this.ag().windowRect(c);
	}

, 
	bd: function () {
		if (this.ag().overviewPlusDetailPaneVisibility() != $.ig.Visibility.prototype.visible) {
			return;
		}
		var a = 1;
		if (this.ag().viewportRect().isEmpty() == false) {
			a = this.ag().viewportRect().width() / this.ag().viewportRect().height();
		}
		var b = this.ai().c5();
		var c = new $.ig.Rect(0, 0, 0, a, 1);
		this.ai().c5(c);
		if (b.width() != c.width() || b.height() != c.height() || b.x() != c.x() || b.y() != c.y()) {
			(this.ai().dd()).u(true);
		}
		this.ai().c7(new $.ig.Rect(0, this.ag().windowRect().left() * a, this.ag().windowRect().top(), this.ag().windowRect().width() * a, this.ag().windowRect().height()));
	}

, 
	be: function (a, b) {
		this.bd();
	}

, 
	bf: function (a, b) {
		this.bd();
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
	bi: function (a, b, c) {
		var d = true;
		var f = this.ag().series().getEnumerator();
		while (f.moveNext()) {
			var e = f.current();
			if (d && e.dv()) {
				d = false;
				c.b().t(0, 0, a, b);
			}
			e.er(new $.ig.Rect(0, 0, 0, a, b), c);
		}
	}

, 
	bj: function () {
		this.aq().au();
	}

, 
	bk: function () {
	}

, 
	bl: function () {
		this.aq().av();
	}

, 
	bm: function () {
		for (var a = 0; a < this.ag().series().count(); a++) {
			this.ag().series().__inner[a].view().a5();
		}
	}

, 
	bn: function () {
	}

, 
	bo: function () {
	}

, 
	bp: function (a) {
		var b = this.ak().indexOf(a);
		if (b >= 0) {
			this.ak().removeAt(b);
		}
		a.provideContext(null, null);
		this.bq();
	}

, 
	bq: function () {
	}

, 
	br: function (a) {
		a.ex(a.view().ab(), this.b);
		return this.ak().contains(a);
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
	bw: function (a) {
		if (!this.ak().contains(a)) {
			this.ak().add(a);
		}
		a.provideContext(this.at(), this.au());
	}

, 
	bx: function () {
	}

, 
	by: function () {
		this.bz();
		this.bm();
	}

, 
	bz: function () {
		this.am().__visibility = $.ig.Visibility.prototype.collapsed;
		this.dv();
	}

, 
	b0: function () {
	}

, 
	b1: function () {
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
	b6: function () {
		this.am().__visibility = $.ig.Visibility.prototype.visible;
		this.dv();
	}

, 
	b7: function (a) {
		this.am().x(a.top() + this.ag().viewportRect().top());
		this.am().y(a.left() + this.ag().viewportRect().left());
		this.am().v(a.width());
		this.am().w(a.height());
		this.am().__stroke = this.aq().aw();
		this.am().__fill = null;
		this.am().a7(0.5);
		this.dv();
	}

, 
	b8: function () {
	}

, 
	b9: function () {
	}

, 
	ca: function (a, b, c, d) {
		this.ao().bq(a);
		this.ao().bs(b);
		this.ao().br(c);
		this.ao().bt(d);
		this.dv();
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
	cf: function () {
		this.ao().__visibility = $.ig.Visibility.prototype.visible;
		this.dv();
	}

, 
	cg: function () {
		if (this.ao().__visibility == $.ig.Visibility.prototype.visible) {
			this.ao().__visibility = $.ig.Visibility.prototype.collapsed;
			this.dv();
		}
	}

, 
	ch: function (a, b, c, d) {
		this.ap().bq(a);
		this.ap().bs(b);
		this.ap().br(c);
		this.ap().bt(d);
		this.dv();
	}

, 
	ci: function () {
		this.ap().__visibility = $.ig.Visibility.prototype.visible;
		this.dv();
	}

, 
	cj: function () {
		if (this.ap().__visibility == $.ig.Visibility.prototype.visible) {
			this.ap().__visibility = $.ig.Visibility.prototype.collapsed;
			this.dv();
		}
	}

, 
	ck: function () {
		this.an().__visibility = $.ig.Visibility.prototype.collapsed;
		this.dv();
	}

, 
	cl: function (a) {
		var b = new $.ig.PathFigureCollection();
		var c = new $.ig.PathFigure();
		c.__isClosed = true;
		c.__startPoint = {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.left(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.right(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.right(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		b.add(c);
		return b;
	}

, 
	cm: function (a) {
		var b = new $.ig.PathFigureCollection();
		var c = new $.ig.PathFigure();
		c.__isClosed = true;
		c.__startPoint = {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.right(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.right(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.left(), __y: a.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		c.__segments.add(new $.ig.LineSegment(0, {__x: a.left(), __y: a.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		b.add(c);
		return b;
	}

, 
	cn: function (a, b) {
		b.intersect(a);
		var c = new $.ig.PathGeometry();
		c.d(this.cm(a));
		var d = new $.ig.PathGeometry();
		d.d(this.cl(b));
		var e = new $.ig.GeometryGroup();
		e.d().add(c);
		e.d().add(d);
		this.an().bp(e);
		this.an().__fill = this.aq().aw();
		this.an().__opacity = 0.1;
		this.dv();
	}

, 
	co: function () {
		this.an().__visibility = $.ig.Visibility.prototype.visible;
		this.dv();
	}

, 
	cp: function (a) {
	}

, 
	cq: function (a) {
		var b = this.al().indexOf(a);
		this.al().removeAt(b);
		a.fj(null, null);
		this.dt();
		this.ag().removeSpecificDataSource(a.name(), true);
	}

, 
	cr: function (a) {
	}

, 
	cs: function (a) {
		if (!this.al().contains(a)) {
			this.al().add(a);
		}
		a.fj(this.at(), this.au());
		this.dt();
	}

, 
	ct: function (a) {
	}
, 
	a: null
, 
	cu: function () {
		this.a.b(this.ai());
		return this.a;
	}

, 
	cv: function (a) {
		var b = a.seriesViewer().series();
		return b;
	}

, 
	cw: function () {
		this.ag().windowRect(new $.ig.Rect(0, 0, 0, 1, 1));
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
	_ar: null,
	ar: function (a) {
		if (arguments.length === 1) {
			this._ar = a;
			return a;
		} else {
			return this._ar;
		}
	}

, 
	_as: null,
	as: function (a) {
		if (arguments.length === 1) {
			this._as = a;
			return a;
		} else {
			return this._as;
		}
	}

, 
	_at: null,
	at: function (a) {
		if (arguments.length === 1) {
			this._at = a;
			return a;
		} else {
			return this._at;
		}
	}

, 
	_au: null,
	au: function (a) {
		if (arguments.length === 1) {
			this._au = a;
			return a;
		} else {
			return this._au;
		}
	}

, 
	_av: null,
	av: function (a) {
		if (arguments.length === 1) {
			this._av = a;
			return a;
		} else {
			return this._av;
		}
	}

, 
	c9: function (a) {
		var $self = this;
		if (a == null) {
			if (this.aw() != null) {
				this.aw().bf();
			}
			this.aq().at(null);
			this.ar(null);
			this.as(null);
			this.at(null);
			this.au(null);
			this.aw(null);
			if (this.ag().fn() != null) {
				this.ag().fn().f3(null);
				this.ag().fn().f2(null);
				this.ag().fn().f4(null);
			}
			return;
		}
		this.aq().at(a);
		this.ar(this.aq().r());
		this.as(this.aq().s());
		this.at(this.aq().t());
		this.au(this.aq().u());
		this.av(window.navigator.msPointerEnabled);
		if (this.av()) {
			this.a3(true);
		}
		this.aw(this.aq().v());
		this.aw().v(this.ag().viewportRect());
		this.aw().x(this.d3.on(this));
		this.aw().onContactCompleted = $.ig.Delegate.prototype.combine(this.aw().onContactCompleted, this.dd.on(this));
		this.aw().onContactMoved = $.ig.Delegate.prototype.combine(this.aw().onContactMoved, this.da.on(this));
		this.aw().onContactStarted = $.ig.Delegate.prototype.combine(this.aw().onContactStarted, this.db.on(this));
		this.aw().onDragCompleted = $.ig.Delegate.prototype.combine(this.aw().onDragCompleted, this.ag().g7.on(this.ag()));
		this.aw().onDragDelta = $.ig.Delegate.prototype.combine(this.aw().onDragDelta, this.ag().g2.on(this.ag()));
		this.aw().onDragStarted = $.ig.Delegate.prototype.combine(this.aw().onDragStarted, this.ag().g6.on(this.ag()));
		this.aw().onGestureCompleted = $.ig.Delegate.prototype.combine(this.aw().onGestureCompleted, function (b, c) { return $self.ag().he(b)		});
		this.aw().onKeyDown = $.ig.Delegate.prototype.combine(this.aw().onKeyDown, this.ag().onKeyDown.on(this.ag()));
		this.aw().onMouseDown = $.ig.Delegate.prototype.combine(this.aw().onMouseDown, this.ea.on(this));
		this.aw().onMouseLeave = $.ig.Delegate.prototype.combine(this.aw().onMouseLeave, this.d9.on(this));
		this.aw().onMouseOver = $.ig.Delegate.prototype.combine(this.aw().onMouseOver, this.d8.on(this));
		this.aw().onMouseUp = $.ig.Delegate.prototype.combine(this.aw().onMouseUp, this.eb.on(this));
		this.aw().onMouseWheel = $.ig.Delegate.prototype.combine(this.aw().onMouseWheel, this.ag().gw.on(this.ag()));
		this.aw().onPinchDelta = $.ig.Delegate.prototype.combine(this.aw().onPinchDelta, function (d, e) { return $self.ag().ha(e)		});
		this.aw().onPinchStarted = $.ig.Delegate.prototype.combine(this.aw().onPinchStarted, function (f, g) { return $self.ag().g9(f)		});
		this.aw().onDoubleTap = $.ig.Delegate.prototype.combine(this.aw().onDoubleTap, function (h) { return $self.ag().gx(h)		});
		this.aw().onHold = $.ig.Delegate.prototype.combine(this.aw().onHold, this.dc.on(this));
		if (this.ag().fn() != null) {
			this.ag().fn().f3(this.as());
			this.ag().fn().f2(a);
			this.ag().fn().f4(this.aw());
		}
	}

, 
	da: function (a, b) {
		this.ag().hs(a, b);
	}

, 
	db: function (a, b) {
		if (!b && this.ag().mobileMode()) {
			this.ag().mobileMode(false);
		}
		if (b && !this.ag().mobileMode()) {
			this.ag().mobileMode(true);
		}
		this.ag().hk(a, b);
	}

, 
	dc: function (a) {
		this.ag().g5(a);
	}

, 
	dd: function (a, b) {
		this.ag().ht(a, b);
	}

, 
	de: function (a) {
	}

, 
	_aw: null,
	aw: function (a) {
		if (arguments.length === 1) {
			this._aw = a;
			return a;
		} else {
			return this._aw;
		}
	}

, 
	dh: function () {
		this.ax(this.aq().ax(this.ag().ir()));
	}

, 
	_ax: null,
	ax: function (a) {
		if (arguments.length === 1) {
			this._ax = a;
			return a;
		} else {
			return this._ax;
		}
	}

, 
	dk: function (a, b, c) {
		var d = Math.round(a.__x);
		var e = Math.round(a.__y);
		c = null;
		var f = this.au().w(d, e);
		if ((f[0] > 0 || f[1] > 0 || f[2] > 0) && f[3] == 255) {
			var num2_ = f[2];
			if (num2_ % 4 != 0) {
				num2_ = num2_ + (4 - (num2_ % 4));
			}
			var num1_ = f[1];
			if (num1_ % 4 != 0) {
				num1_ = num1_ + (4 - (num1_ % 4));
			}
			var num0_ = f[0];
			if (num0_ % 4 != 0) {
				num0_ = num0_ + (4 - (num0_ % 4));
			}
			var num_ = 0;
			num_ = num2_ >> 2;
			num_ = num_ << 6;
			num_ = num_ | (num1_ >> 2);
			num_ = num_ << 6;
			num_ = num_ | (num0_ >> 2);
			var g = Math.floor($.ig.intDivide(num_, $.ig.SeriesView.prototype.a));
			g--;
			var h = null;
			var j = this.ak().getEnumerator();
			while (j.moveNext()) {
				var i = j.current();
				if (i.index() == g) {
					h = i;
					break;
				}
			}
			if (h != null) {
				var k = h.getHitDataContext({__x: d, __y: e, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
				if (k != null) {
					c = k;
				}
			}
			return {
				ret: h,
				context: c
			};
		}
		return {
			ret: null,
			context: c
		};
		return {
			context: c
		};
	}

, 
	_ay: null,
	ay: function (a) {
		if (arguments.length === 1) {
			this._ay = a;
			return a;
		} else {
			return this._ay;
		}
	}

, 
	_az: null,
	az: function (a) {
		if (arguments.length === 1) {
			this._az = a;
			return a;
		} else {
			return this._az;
		}
	}
, 
	b: null, 
	c: null
, 
	dq: function () {
		this.aq().ba();
	}

, 
	dr: function (a, b) {
		if (this.ay() != a) {
			this.c = true;
		}
		this.ay(a);
		if (this.az() != b) {
			this.c = true;
		}
		this.az(b);
		this.ds();
	}

, 
	ds: function () {
		this.dt();
	}

, 
	dt: function () {
		var $self = this;
		var a = this.ay();
		var b = this.az();
		var c = this.ag().leftMargin();
		var d = this.ag().rightMargin();
		var e = this.ag().bottomMargin();
		var f = this.ag().topMargin();
		var g = this.ag().autoMarginHeight();
		var h = this.ag().autoMarginWidth();
		if (isNaN(g)) {
			g = this.ax() / 2;
		}
		if (isNaN(h)) {
			h = 0;
		}
		var i = this.ag().shouldAddAutoMargins();
		var j = new $.ig.List$1($.ig.AxisLabelPanelBase.prototype.$type, 0);
		var l = this.al().getEnumerator();
		while (l.moveNext()) {
			var k = l.current();
			if (k.c6() != null) {
				j.add(k.c6());
			}
		}
		if (i) {
			var m = false;
			var n = false;
			var o = false;
			var p = false;
			var r = j.getEnumerator();
			while (r.moveNext()) {
				var q = r.current();
				if ($.ig.LabelPanelArranger.prototype.c(q) == $.ig.AxisLabelsLocation.prototype.outsideLeft && (q.br().labelSettings() == null || q.br().labelSettings().visibility() == $.ig.Visibility.prototype.visible)) {
					m = true;
				}
				if ($.ig.LabelPanelArranger.prototype.c(q) == $.ig.AxisLabelsLocation.prototype.outsideRight && (q.br().labelSettings() == null || q.br().labelSettings().visibility() == $.ig.Visibility.prototype.visible)) {
					n = true;
				}
				if ($.ig.LabelPanelArranger.prototype.c(q) == $.ig.AxisLabelsLocation.prototype.outsideTop && (q.br().labelSettings() == null || q.br().labelSettings().visibility() == $.ig.Visibility.prototype.visible)) {
					o = true;
				}
				if ($.ig.LabelPanelArranger.prototype.c(q) == $.ig.AxisLabelsLocation.prototype.outsideBottom && (q.br().labelSettings() == null || q.br().labelSettings().visibility() == $.ig.Visibility.prototype.visible)) {
					p = true;
				}
			}
			if (m || n) {
				if (!o && isNaN(f)) {
					f = g;
				}
				if (!p && isNaN(e)) {
					e = g;
				}
			}
			if (p || o) {
				if (!m && isNaN(c)) {
					c = h;
				}
				if (!n && isNaN(d)) {
					d = h;
				}
			}
		}
		if (isNaN(f)) {
			f = 0;
		}
		if (isNaN(c)) {
			c = 0;
		}
		if (isNaN(d)) {
			d = 0;
		}
		if (isNaN(e)) {
			e = 0;
		}
		var s = new $.ig.Rect(0, c, f, a - (c + d), b - (f + e));
		s = $.ig.LabelPanelArranger.prototype.a(j, s);
		var t = new $.ig.Size(a - (c + d), b - (f + e));
		if (this.ag().fw() && s.width() != s.height()) {
			if (s.width() < s.height()) {
				f += (s.height() - s.width()) / 2;
				s.top(s.top() + ((s.height() - s.width()) / 2));
				t.d(t.d() - (s.height() - s.width()));
				s.height(s.width());

			} else {
				c += (s.width() - s.height()) / 2;
				s.left(s.left() + ((s.width() - s.height()) / 2));
				t.c(t.c() - (s.width() - s.height()));
				s.width(s.height());
			}
		}
		var u = (function () { var $ret = new $.ig.LabelPanelsArrangeState();
$ret.m(c);
$ret.o(c);
$ret.i(f + t.d());
$ret.k(f + t.d());
$ret.n(c + t.c());
$ret.p(c + t.c());
$ret.j(f);
$ret.l(f); return $ret;}());
		$.ig.LabelPanelArranger.prototype.e(j, u, s, function (v, w) { return v.bv(w)		});
		var x = false;
		if (this.c) {
			this.c = false;
			x = true;
		}
		if (x) {
			this.aq().ay(this.ay(), this.az());
		}
		this.b = s;
		this.ag().gk(this.ag().viewportRect(), s);
		var z = this.al().getEnumerator();
		while (z.moveNext()) {
			var y = z.current();
			y.dq(y.c2(), s);
		}
		var ab = this.ak().getEnumerator();
		while (ab.moveNext()) {
			var aa = ab.current();
			aa.ex(aa.view().ab(), s);
		}
		if (this.ag().fn() != null) {
			var ac = this.ag().fn();
			var ad = (this.ag().mobileMode()) ? s.width() : Number.POSITIVE_INFINITY;
			var ae = (this.ag().mobileMode()) ? s.height() : Number.POSITIVE_INFINITY;
			var af = ac.e7(new $.ig.Size(ad, ae));
			this.ag().fn().f7(new $.ig.Rect(0, s.right() - af.c(), s.bottom() - af.d(), af.c(), af.d()));
		}
		this.du(s);
	}

, 
	du: function (a) {
	}

, 
	dv: function () {
		if (!this.g) {
			this.g = true;
			this.ah().o();
		}
	}
, 
	d: null
, 
	dw: function () {
		if (this.as() == null) {
			return;
		}
		if (this.as().b()) {
			if (!this.d.isEmpty()) {
				this.as().t(this.d.left(), this.d.top(), this.d.width(), this.d.height());
			}
		}
		this.dx();
	}
, 
	e: null
, 
	dx: function () {
		if (this.as().b()) {
			this.d = new $.ig.Rect(0, 0, 0, this.ay(), this.az());
			this.as().n(this.ap());
			this.as().n(this.ao());
			if (this.e) {
				this.as().e($.ig.GradientDirection.prototype.bottomTop, null);
			}
			this.as().g(this.an());
			this.as().f(this.am());
		}
	}

, 
	dy: function () {
		return new $.ig.Rect(0, 0, 0, this.ay(), this.az());
	}

, 
	dz: function () {
		return this.aq().az();
	}

, 
	d0: function () {
		var $self = this;
		this.ag().circleMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.d);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().triangleMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.e);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().pyramidMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.f);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().squareMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.g);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().diamondMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.i);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().pentagonMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.j);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().hexagonMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.k);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().tetragramMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.l);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().pentagramMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.m);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
		this.ag().hexagramMarkerTemplate((function () { var $ret = new $.ig.DataTemplate();
		$ret.render($.ig.MarkerTemplates.prototype.n);
		$ret.measure($.ig.MarkerTemplates.prototype.c); return $ret;}()));
	}

, 
	d1: function () {
		this.ec();
		var a = this.ax();
		this.dh();
		if (a != this.ax()) {
			this.ag().ic();
		}
	}

, 
	d2: function () {
		if (this.ag().fn() != null) {
			this.ag().fn().__visibility = this.ag().overviewPlusDetailPaneVisibility();
			this.ag().fn().fu(false);
		}
	}

, 
	d3: function (a) {
		if (a == null) {
			return false;
		}
		var b = a.__x;
		var c = a.__y;
		if (b >= this.ag().viewportRect().left() && c >= this.ag().viewportRect().top() && b <= this.ag().viewportRect().left() + this.ag().viewportRect().width() && c <= this.ag().viewportRect().top() + this.ag().viewportRect().height()) {
			var d = this.ag().fn();
			if (d != null && d.__visibility == $.ig.Visibility.prototype.visible && b >= d.c3().ay().left() && c >= d.c3().ay().top() && b <= d.c3().ay().left() + d.c3().ay().width() && c <= d.c3().ay().top() + d.c3().ay().height()) {
				return false;
			}
			return true;
		}
		return false;
	}

, 
	_a0: null,
	a0: function (a) {
		if (arguments.length === 1) {
			this._a0 = a;
			return a;
		} else {
			return this._a0;
		}
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
	d8: function (a, b, c) {
		var $self = this;
		if (!c && this.ag().mobileMode()) {
			this.ag().mobileMode(false);
		}
		var d = new $.ig.MouseEventArgs();
		d.position(a);
		if (this.ag().fe() == $.ig.InteractionState.prototype.dragPan || this.ag().fe() == $.ig.InteractionState.prototype.dragZoom || this.ag().fj() || (this.ag().fn() == null || this.ag().fn().dq())) {
			if (this.a0() != null) {
				if (this.f) {
					this.eb(a);
				}
				this.a0().f9(d.position(), this.a1(), d);
				this.a0(null);
			}
			return;
		}
		var e = null;
		var f = (function () { var $ret = $self.dk(a, !b, e); e = $ret.context; return $ret.ret; }());
		this.a1(e);
		if (f != null) {
			var g = false;
			if (this.a0() == null) {
				g = true;
			}
			this.a0(f);
			if (g) {
				f.f7(d.position(), e, d);

			} else {
				f.f8(d.position(), e, d);
			}

		} else {
			if (this.a0() != null) {
				this.a0().f9(d.position(), e, d);
				this.a0(null);
			}
			for (var h = 0; h < this.ag().series().count(); h++) {
				var i = this.ag().series().__inner[h];
				if (i.d5()) {
					i.f9(d.position(), i.d0(), d);
				}
			}
		}
	}

, 
	d9: function (a) {
		if (this.a0() != null) {
			var b = new $.ig.MouseEventArgs();
			b.position(a);
			this.a0().f9(b.position(), null, b);
			this.a0(null);
		}
		this.ag().gv(a);
	}
, 
	f: null
, 
	ea: function (a) {
		if (this.a0() != null) {
			this.f = true;
			var b = new $.ig.MouseButtonEventArgs();
			b.position(a);
			this.a0().ga(b.position(), this.a1(), b);
		}
	}

, 
	eb: function (a) {
		if (this.a0() != null) {
			this.f = false;
			var b = new $.ig.MouseButtonEventArgs();
			b.position(a);
			this.a0().gb(b.position(), this.a1(), b);
		}
	}

, 
	ec: function () {
	}

, 
	a2: function () {
			return this.aw().w();
	}

, 
	ee: function (a) {
		if (this.aw() != null) {
			this.aw().v(this.ag().viewportRect());
		}
	}

, 
	ef: function (a) {
		this.ag().fi(this.ag().mobileMode() || this.ag().crosshairVisibility() == $.ig.Visibility.prototype.visible);
		this.eg(a);
	}

, 
	eg: function (a) {
		if (this.ag().fn() != null) {
			this.ag().fn().mobileMode(a);
			if (!a) {
				this.ag().fn().__visibility = this.ag().overviewPlusDetailPaneVisibility();
				this.ag().fn().c3().af(false);

			} else {
				this.ag().fn().__visibility = $.ig.Visibility.prototype.collapsed;
				this.ag().fn().c3().af(this.ag().overviewPlusDetailPaneVisibility() == $.ig.Visibility.prototype.visible);
			}
			this.ag().ic();
		}
	}
, 
	g: null
, 
	isDirty: function (a) {
		if (arguments.length === 1) {
			this.g = a;
			return a;
		} else {
			return this.g;
		}
	}

, 
	undirty: function (a) {
		this.g = false;
		this.dw();
	}

, 
	index: function () {
			return 10;
	}

, 
	postRender: function () {
	}

, 
	eh: function () {
		this.ds();
	}
, 
	h: null
, 
	ei: function () {
		this.aq().a6();
	}

, 
	ej: function () {
		this.aq().a7();
	}

, 
	ek: function (a) {
		this.aq().a2();
	}

, 
	el: function (a) {
		this.aq().a5(a);
	}

, 
	em: function (a) {
		this.aq().a3(a);
	}

, 
	en: function (a) {
		this.aq().a4(a);
	}

, 
	eo: function (a) {
		this.aq().a8(a);
	}

, 
	ep: function (a) {
		this.aq().a9(a);
	}

, 
	eq: function (a) {
		this.ag().canvasRenderScheduler().o();
	}

, 
	er: function (a) {
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
	eu: function (a) {
		if (this.ag().mobileMode()) {
			return $.ig.InteractionState.prototype.dragPan;

		} else {
			return $.ig.InteractionState.prototype.dragZoom;
		}
	}
,
	$type: new $.ig.Type('SeriesViewerView', $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type])
}, true);

$.ig.util.defType('XamDataChartView', 'SeriesViewerView', {

		init: function (a) {


			$.ig.SeriesViewerView.prototype.init.call(this, a);
						this.e4(a);
		}
, 
	_e4: null,
	e4: function (a) {
		if (arguments.length === 1) {
			this._e4 = a;
			return a;
		} else {
			return this._e4;
		}
	}

, 
	fa: function (a) {
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
		this.e4().brushes(a);
		this.e4().outlines(b);
		this.e4().markerBrushes(a);
		this.e4().markerOutlines(b);
		this.e5(c);
		this.e7(d);
		this.e6(e);
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
	c9: function (a) {
		$.ig.SeriesViewerView.prototype.c9.call(this, a);
	}

, 
	dx: function () {
		this.ap().a7(1);
		this.ao().a7(1);
		this.ap().__stroke = this.e5();
		this.ao().__stroke = this.e5();
		$.ig.SeriesViewerView.prototype.dx.call(this);
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
	$type: new $.ig.Type('XamDataChartView', $.ig.SeriesViewerView.prototype.$type)
}, true);

$.ig.util.defType('ChartCollection', 'ObservableCollection$1', {

		init: function () {


			$.ig.ObservableCollection$1.prototype.init.call(this, $.ig.SeriesViewer.prototype.$type);
		}, 
	collectionResetting: null
, 
	m: function () {
		if (this.collectionResetting != null) {
			this.collectionResetting(this, null);
		}
		$.ig.ObservableCollection$1.prototype.m.call(this);
	}

, 
	item: function (b) {
			var d = this.getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				if (b == c.name()) {
					return c;
				}
			}
			return null;
	}
,
	$type: new $.ig.Type('ChartCollection', $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.SeriesViewer.prototype.$type))
}, true);

$.ig.util.defType('ChartContentManager', 'DependencyObject', {
	e: null, 
	f: null, 
	g: null
, 
	l: function (a) {
		if (arguments.length === 1) {
			this.g = a;
			return a;
		} else {
			return this.g;
		}
	}

, 
		init: function (a) {

			this.e = null;
			this.f = new $.ig.Dictionary$2($.ig.ChartContentType.prototype.$type, $.ig.Dictionary$2.prototype.$type.specialize($.ig.DependencyObject.prototype.$type, $.ig.ContentInfo.prototype.$type), 0);
			this.g = new $.ig.List$1($.ig.Series.prototype.$type, 0);
			this.h = false;

			$.ig.DependencyObject.prototype.init.call(this);
						this.o(true);
				this.n(true);
				this.f.add($.ig.ChartContentType.prototype.series, new $.ig.Dictionary$2($.ig.DependencyObject.prototype.$type, $.ig.ContentInfo.prototype.$type, 0));
				this.f.add($.ig.ChartContentType.prototype.axis, new $.ig.Dictionary$2($.ig.DependencyObject.prototype.$type, $.ig.ContentInfo.prototype.$type, 0));
				this.f.add($.ig.ChartContentType.prototype.background, new $.ig.Dictionary$2($.ig.DependencyObject.prototype.$type, $.ig.ContentInfo.prototype.$type, 0));
				this.e = a;
		}
, 
	r: function (a, b, c) {
		var d = this.x(a, b);
		d.h(c);
		return d;
	}

, 
	s: function (a, b) {
		var c = this.f.item(a);
		if (c.containsKey(b)) {
			c.remove(b);
		}
		var d = $.ig.util.cast($.ig.Series.prototype.$type, b);
		if (d != null && this.l().contains(d)) {
			this.l().remove(d);
		}
	}
, 
	h: null
, 
	t: function () {
		if (!this.h) {
			this.h = true;
			window.setTimeout(this.z.on(this), 0);
		}
	}

, 
	u: function (a, b, c, d) {
		var e = c;
		if (!e.j()) {
			e.i(d);

		} else {
			if (!d) {
				e.i(false);
			}
		}
		if (!e.j()) {
			e.j(true);
			this.t();
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
	x: function (a, b) {
		var $self = this;
		var c = this.f.item(a);
		var d = null;
		if (!(function () { var $ret = c.tryGetValue(b, d); d = $ret.value; return $ret.ret; }())) {
			d = new $.ig.ContentInfo();
			d.g(b);
			c.add(b, d);
			var e = $.ig.util.cast($.ig.Series.prototype.$type, b);
			if (e != null && !this.l().contains(e)) {
					this.l().add(e);
			}
		}
		return d;
	}

, 
	y: function () {
		this.z();
	}

, 
	z: function () {
		if (this.e == null || this.f == null) {
			return;
		}
		if (!this.h) {
			return;
		}
		this.h = false;
		var b = this.aa().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.z();
		}
		if (!this.h) {
			this.e.im();
		}
	}

, 
	aa: function () {
		var $self = this;
		var $iter = function () { return function () { return {
			$state: 0,
			$this: $self,
			$current: null,
			$a : null,
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
							this.$a = null;
							this.$a = this.$this.f.item($.ig.ChartContentType.prototype.axis);
							this.$state = 1;
							break;
						case 1:
							this.$c = this.$a.values().getEnumerator();
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
							this.$a = this.$this.f.item($.ig.ChartContentType.prototype.series);
							this.$d = new $.ig.List$1($.ig.ContentInfo.prototype.$type, 0);
							this.$state = 6;
							break;
						case 6:
							this.$f = this.$this.l().getEnumerator();
							this.$state = 8;
							break;
						case 7:
							this.$e = this.$f.current();
							this.$d.add(this.$a.item(this.$e));
							this.$state = 8;
							break;
						case 8:
							if (this.$f.moveNext()) {
								this.$state = 7;
							}
							else {
								this.$state = 9;
							}
							break;

						case 9:
							this.$state = 10;
							break;
						case 10:
							this.$h = this.$d.getEnumerator();
							this.$state = 13;
							break;
						case 11:
							this.$g = this.$h.current();
							this.$current =  this.$g;
							this.$state = 12
							return true;
						case 12:
							this.$state = 13;
							break;
						case 13:
							if (this.$h.moveNext()) {
								this.$state = 11;
							}
							else {
								this.$state = 14;
							}
							break;

						case 14:
							this.$a = this.$this.f.item($.ig.ChartContentType.prototype.background);
							this.$state = 15;
							break;
						case 15:
							this.$j = this.$a.values().getEnumerator();
							this.$state = 18;
							break;
						case 16:
							this.$i = this.$j.current();
							this.$current =  this.$i;
							this.$state = 17
							return true;
						case 17:
							this.$state = 18;
							break;
						case 18:
							if (this.$j.moveNext()) {
								this.$state = 16;
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
		return new $.ig.GenericEnumerable$1($.ig.ContentInfo.prototype.$type, $iter);
	}

, 
	ab: function (a) {
		var c = this.f.item($.ig.ChartContentType.prototype.axis).values().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			($.ig.util.cast($.ig.Axis.prototype.$type, b.g())).e6();
		}
		var e = this.f.item($.ig.ChartContentType.prototype.axis).values().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			d.z();
		}
		var g = this.f.item($.ig.ChartContentType.prototype.axis).values().getEnumerator();
		while (g.moveNext()) {
			var f = g.current();
			($.ig.util.cast($.ig.Axis.prototype.$type, f.g())).c3($.ig.Rect.prototype.empty());
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
	ag: function (a, b, c, d) {
		c.k(d);
	}

, 
	ah: function (a, b) {
		if (!b.m()) {
			b.m(true);
			this.t();
		}
	}
,
	$type: new $.ig.Type('ChartContentManager', $.ig.DependencyObject.prototype.$type)
}, true);

$.ig.util.defType('ContentInfo', 'Object', {
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
	l: function () {
			if (this.k().isEmpty()) {
				return false;
			}
			if (this.k().width() == 0 && this.k().height() == 0) {
				return false;
			}
			return true;
	}

, 
	y: function () {
		if (this.m() && $.ig.util.cast($.ig.Axis.prototype.$type, this.g()) !== null) {
			this.m(false);
			var a = this.j();
			this.j(true);
			var b = ($.ig.util.cast($.ig.Axis.prototype.$type, this.g())).updateRange1(true);
			if (!b) {
				this.j(a);
			}
		}
	}

, 
	z: function () {
		this.y();
		if ($.ig.util.cast($.ig.Axis.prototype.$type, this.g()) !== null) {
			var a = $.ig.util.cast($.ig.Axis.prototype.$type, this.g());
			if (a.crossingAxis() != null) {
				var b = a.crossingAxis();
				if (b.c8() != null && b.c8().m()) {
					b.c8().y();
				}
			}
		}
		if (this.j()) {
			this.j(false);
			this.h()(this.i());
			this.i(false);
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
	$type: new $.ig.Type('ContentInfo', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DataContext', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_series: null,
	series: function (a) {
		if (arguments.length === 1) {
			this._series = a;
			return a;
		} else {
			return this._series;
		}
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
	_actualItemBrush: null,
	actualItemBrush: function (a) {
		if (arguments.length === 1) {
			this._actualItemBrush = a;
			return a;
		} else {
			return this._actualItemBrush;
		}
	}

, 
	_outline: null,
	outline: function (a) {
		if (arguments.length === 1) {
			this._outline = a;
			return a;
		} else {
			return this._outline;
		}
	}

, 
	_itemLabel: null,
	itemLabel: function (a) {
		if (arguments.length === 1) {
			this._itemLabel = a;
			return a;
		} else {
			return this._itemLabel;
		}
	}

, 
	_itemBrush: null,
	itemBrush: function (a) {
		if (arguments.length === 1) {
			this._itemBrush = a;
			return a;
		} else {
			return this._itemBrush;
		}
	}

, 
	_thickness: null,
	thickness: function (a) {
		if (arguments.length === 1) {
			this._thickness = a;
			return a;
		} else {
			return this._thickness;
		}
	}
,
	$type: new $.ig.Type('DataContext', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('LabelPanelArranger', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a, b) {
		var d = a.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			var e = c.br();
			var f = e.crossingAxis();
			f = $.ig.LabelPanelArranger.prototype.b(c, e, f);
			var g = $.ig.LabelPanelArranger.prototype.c(c);
			var h = 0;
			var i = 0;
			h = c.b5();
			i = c.b5();
			if (c.br().labelSettings() != null && c.br().labelSettings().visibility() != $.ig.Visibility.prototype.visible) {
				i = 0;
				h = 0;
			}
			if ($.ig.util.cast($.ig.HorizontalAxisLabelPanelBase.prototype.$type, c) !== null) {
				switch (g) {
					case $.ig.AxisLabelsLocation.prototype.outsideTop:
						b.y(Math.max(0, b.top() + i));
						b.height(Math.max(0, b.height() - i));
						e.labelSettings().q($.ig.AxisLabelsLocation.prototype.outsideTop);
						break;
					case $.ig.AxisLabelsLocation.prototype.insideTop:
						if (f != null && (c.bx() - b.top() < i && $.ig.util.cast($.ig.HorizontalAxisLabelPanel.prototype.$type, c) !== null)) {
							e.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideBottom);

						} else {
							e.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideTop);
						}
						break;
					case $.ig.AxisLabelsLocation.prototype.insideBottom:
						if (f != null && (b.bottom() - c.bx() < i && $.ig.util.cast($.ig.HorizontalAxisLabelPanel.prototype.$type, c) !== null)) {
							if (e.labelSettings() != null) {
								e.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideTop);
							}

						} else {
							if (e.labelSettings() != null) {
								e.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideBottom);
							}
						}
						break;
					case $.ig.AxisLabelsLocation.prototype.outsideBottom:
					default:
						if (e.labelSettings() != null) {
							e.labelSettings().q($.ig.AxisLabelsLocation.prototype.outsideBottom);
						}
						b.height(Math.max(0, b.height() - i));
						break;
				}
			}
			if ($.ig.util.cast($.ig.VerticalAxisLabelPanel.prototype.$type, c) !== null) {
				switch (g) {
					case $.ig.AxisLabelsLocation.prototype.outsideRight:
						b.width(Math.max(0, b.width() - h));
						e.labelSettings().q($.ig.AxisLabelsLocation.prototype.outsideRight);
						break;
					case $.ig.AxisLabelsLocation.prototype.insideLeft:
						if (f != null && c.bx() - b.left() < h) {
							e.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideRight);

						} else {
							e.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideLeft);
						}
						break;
					case $.ig.AxisLabelsLocation.prototype.insideRight:
						if (f != null && b.right() - c.bx() < h) {
							e.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideLeft);

						} else {
							e.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideRight);
						}
						break;
					case $.ig.AxisLabelsLocation.prototype.outsideLeft:
					default:
						if (e.labelSettings() != null) {
							e.labelSettings().q($.ig.AxisLabelsLocation.prototype.outsideLeft);
						}
						b.x(Math.max(0, b.left() + h));
						b.width(Math.max(0, b.width() - h));
						break;
				}
			}
			if ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, c) !== null) {
				if (e.labelSettings() != null) {
					e.labelSettings().q(g);
				}
			}
		}
		return b;
	}

, 
	b: function (a, b, c) {
		if ($.ig.util.cast($.ig.RadialAxisLabelPanel.prototype.$type, a) !== null && $.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, b) !== null) {
			c = ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, b)).iq();
		}
		if ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, a) !== null && $.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, b) !== null) {
			c = ($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, b)).id();
		}
		if ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, a) !== null && $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, b) !== null) {
			c = ($.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, b)).hq();
		}
		return c;
	}

, 
	c: function (a) {
		if (a == null) {
			return $.ig.AxisLabelsLocation.prototype.outsideBottom;

		} else {
			var b = a.br();
			if (b != null && b.labelSettings() != null) {
				var c = b.labelSettings().q();
				if (!a.dk(c)) {
					return a.dj();
				}
				return c;

			} else {
				return a.dj();
			}
		}
	}

, 
	d: function (a, b, c, d) {
		var e = a.br();
		var f = e.crossingAxis();
		f = $.ig.LabelPanelArranger.prototype.b(a, e, f);
		var g = $.ig.LabelPanelArranger.prototype.c(a);
		var h;
		var i = a.b5();
		var j = a.b5();
		switch (g) {
			case $.ig.AxisLabelsLocation.prototype.outsideRight:
				b.n(b.n() - j);
				b.p(b.p() - j);
				h = new $.ig.Rect(0, b.n(), c.top(), j, c.height());
				d(a, h);
				break;
			case $.ig.AxisLabelsLocation.prototype.outsideLeft:
				h = new $.ig.Rect(0, b.m(), c.top(), j, c.height());
				d(a, h);
				b.m(b.m() + j);
				b.o(b.o() + j);
				break;
			case $.ig.AxisLabelsLocation.prototype.insideRight:
				if (f != null) {
					h = new $.ig.Rect(0, b.m() + a.bx(), c.top(), j, c.height());

				} else {
					b.p(b.p() - j);
					h = new $.ig.Rect(0, b.p(), c.top(), j, c.height());
				}
				d(a, h);
				break;
			case $.ig.AxisLabelsLocation.prototype.insideLeft:
				if (f != null) {
					h = new $.ig.Rect(0, b.m() + a.bx() - j, c.top(), j, c.height());

				} else {
					h = new $.ig.Rect(0, b.o(), c.top(), j, c.height());
					b.o(b.o() + j);
				}
				d(a, h);
				break;
			case $.ig.AxisLabelsLocation.prototype.outsideBottom:
				b.i(b.i() - i);
				b.k(b.k() - i);
				h = new $.ig.Rect(0, c.left(), b.i(), c.width(), i);
				d(a, h);
				break;
			case $.ig.AxisLabelsLocation.prototype.outsideTop:
				h = new $.ig.Rect(0, c.left(), b.j(), c.width(), i);
				d(a, h);
				b.j(b.j() + i);
				b.l(b.l() + i);
				break;
			case $.ig.AxisLabelsLocation.prototype.insideBottom:
				if (f != null) {
					h = new $.ig.Rect(0, c.left(), b.j() + a.bx(), c.width(), i);

				} else {
					b.k(b.k() - i);
					h = new $.ig.Rect(0, c.left(), b.k(), c.width(), i);
				}
				d(a, h);
				break;
			case $.ig.AxisLabelsLocation.prototype.insideTop:
				if (f != null) {
					h = new $.ig.Rect(0, c.left(), b.j() + a.bx() - i, c.width(), i);

				} else {
					h = new $.ig.Rect(0, c.left(), b.l(), c.width(), i);
					b.l(b.l() + i);
				}
				d(a, h);
				break;
		}
		if ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, a) !== null) {
			h = new $.ig.Rect(0, c.left(), c.top(), c.width(), c.height());
			d(a, h);
		}
	}

, 
	e: function (a, b, c, d) {
		var e = new $.ig.List$1($.ig.AxisLabelPanelBase.prototype.$type, 0);
		var f = new $.ig.List$1($.ig.AxisLabelPanelBase.prototype.$type, 0);
		var h = a.getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			var i = $.ig.LabelPanelArranger.prototype.c(g);
			switch (i) {
				case $.ig.AxisLabelsLocation.prototype.outsideBottom:
				case $.ig.AxisLabelsLocation.prototype.outsideLeft:
				case $.ig.AxisLabelsLocation.prototype.outsideTop:
				case $.ig.AxisLabelsLocation.prototype.outsideRight:
					f.add(g);
					break;
				case $.ig.AxisLabelsLocation.prototype.insideBottom:
				case $.ig.AxisLabelsLocation.prototype.insideLeft:
				case $.ig.AxisLabelsLocation.prototype.insideTop:
				case $.ig.AxisLabelsLocation.prototype.insideRight:
					e.add(g);
					break;
			}
		}
		var k = f.getEnumerator();
		while (k.moveNext()) {
			var j = k.current();
			$.ig.LabelPanelArranger.prototype.d(j, b, c, d);
		}
		var m = e.getEnumerator();
		while (m.moveNext()) {
			var l = m.current();
			$.ig.LabelPanelArranger.prototype.d(l, b, c, d);
		}
	}
,
	$type: new $.ig.Type('LabelPanelArranger', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LabelPanelsArrangeState', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('LabelPanelsArrangeState', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LegendTemplates', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a) {
		var b = a.data;
		var c = b.series();
		var d = c.legendItemBadgeTemplate();
		var e = c.title();
		if (e == null) {
			e = "Series Title";
		}
		$.ig.LegendTemplates.prototype.d(a.context, a.xPosition, a.yPosition, a.availableWidth, a.availableHeight, a.data, e.toString(), d, a.passInfo);
	}

, 
	b: function (a) {
		var b = a.data;
		var c = b.series();
		var d = c.legendItemBadgeTemplate();
		var e = b.itemLabel();
		if (e == null) {
			e = "Series Item";
		}
		$.ig.LegendTemplates.prototype.d(a.context, a.xPosition, a.yPosition, a.availableWidth, a.availableHeight, a.data, e.toString(), d, a.passInfo);
	}

, 
	c: function (a) {
		var b = a.data;
		var c = b.series();
		var d = c.legendItemBadgeTemplate();
		var e = b.itemLabel();
		if (e == null) {
			e = "Pie Item";
		}
		$.ig.LegendTemplates.prototype.d(a.context, a.xPosition, a.yPosition, a.availableWidth, a.availableHeight, a.data, e.toString(), d, a.passInfo);
	}

, 
	d: function (a, b, c, d, e, f, g, h, i) {
		var j = a;
		var k = f;
		if (k != null && k.series() != null) {
			if (h != null) {
				var l = $("<canvas></canvas>");
				l.attr("width", "18");
				l.attr("height", "16");
				var m = $("<td class=\'ui-legend-item-badge\'></td>");
				m.append(l);
				var n = (l[0]).getContext("2d");
				var o = new $.ig.DataTemplateMeasureInfo();
				o.passInfo = i;
				o.context = n;
				o.width = 18;
				o.height = 16;
				o.data = k;
				h.measure()(o);
				var p = new $.ig.DataTemplateRenderInfo();
				p.availableWidth = isNaN(o.width) ? 18 : Math.min(o.width, 18);
				p.availableHeight = isNaN(o.height) ? 16 : Math.min(o.height, 16);
				p.passInfo = i;
				p.context = n;
				p.data = k;
				p.xPosition = 0;
				p.yPosition = 0;
				h.render()(p);
				j.append(m);
			}
			var q = $("<td class=\'ui-legend-item-text\'><span>" + g + "</span></td>");
			j.append(q);
		}
	}

, 
	e: function (a) {
		var b = a.data;
		var c = a.context;
		if (b.itemBrush() != null) {
			b.actualItemBrush(b.itemBrush());

		} else {
			b.actualItemBrush(b.itemBrush());
		}
		var d = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), c);
		var e = b.slice();
		var f = new $.ig.Rectangle();
		f.v(a.availableWidth - (e.c2() * 2) - 2);
		f.w(a.availableHeight - (e.c2() * 2));
		f.y(e.c2() + 1);
		f.x(e.c2());
		f.a7(e.c2());
		f.__fill = e.c9();
		f.__stroke = e.da();
		d.f(f);
	}

, 
	f: function (a) {
		var b = a.data;
		var c = a.context;
		var d = b.series();
		if (b.itemBrush() != null) {
			b.actualItemBrush(b.itemBrush());

		} else {
			b.actualItemBrush(d.actualBrush());
		}
		var e = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), c);
		var f = new $.ig.Line();
		f.bq(0);
		f.bs(a.availableHeight / 2);
		f.br(a.availableWidth);
		f.bt(a.availableHeight / 2);
		f.a7(d.thickness());
		f.__stroke = b.actualItemBrush();
		e.n(f);
		var g = $.ig.util.cast($.ig.MarkerSeries.prototype.$type, b.series());
		if (g != null && g.actualMarkerTemplate() != null && g.actualMarkerTemplate().render() != null) {
			b.outline(d.actualOutline());
			$.ig.LegendTemplates.prototype.g(g.actualMarkerTemplate(), a);
		}
	}

, 
	g: function (a, b) {
		var c = new $.ig.DataTemplateMeasureInfo();
		c.passInfo = b.passInfo;
		c.width = 11;
		c.height = 11;
		c.data = b.data;
		c.context = b.context;
		if (a.measure() != null) {
			a.measure()(c);
			if (isNaN(c.width) || Number.isInfinity(c.width) || c.width > 11) {
				c.width = 11;
			}
			if (isNaN(c.height) || Number.isInfinity(c.height) || c.height > 11) {
				c.height = 11;
			}
		}
		var d = new $.ig.DataTemplateRenderInfo();
		d.passInfo = b.passInfo;
		d.availableWidth = c.width;
		d.availableHeight = c.height;
		d.xPosition = b.availableWidth / 2;
		d.yPosition = b.availableHeight / 2;
		d.data = b.data;
		d.context = b.context;
		a.render()(d);
	}

, 
	h: function (a) {
		var b = null;
		if ($.ig.util.cast($.ig.Series.prototype.$type, a.series()) !== null) {
			b = a.series();
		}
		if (a.itemBrush() != null) {
			a.actualItemBrush(a.itemBrush());

		} else {
			if (b != null) {
				a.actualItemBrush(b.actualBrush());

			} else {
				a.actualItemBrush(a.itemBrush());
			}
		}
	}

, 
	i: function (a) {
	}

, 
	j: function (a) {
	}

, 
	k: function (a) {
	}

, 
	l: function (a) {
		var $self = this;
		var b = a.data;
		var c = a.context;
		$.ig.LegendTemplates.prototype.h(b);
		var d = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), c);
		var e = new $.ig.Path();
		var f = new $.ig.PathGeometry();
		var g = new $.ig.PathFigure();
		g.__isFilled = true;
		g.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		g.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		f.d().add(g);
		e.bp(f);
		if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
			e.a7((b.series()).thickness());
			e.__stroke = (b.series()).actualOutline();
		}
		e.__fill = b.actualItemBrush();
		d.g(e);
		var h = $.ig.util.cast($.ig.MarkerSeries.prototype.$type, b.series());
		if (h != null && h.actualMarkerTemplate() != null && h.actualMarkerTemplate().render() != null) {
			if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
				b.outline((b.series()).actualOutline());
			}
			$.ig.LegendTemplates.prototype.g(h.actualMarkerTemplate(), a);
		}
	}

, 
	m: function (a) {
		var $self = this;
		var b = a.data;
		var c = a.context;
		$.ig.LegendTemplates.prototype.h(b);
		var d = new $.ig.Path();
		var e = new $.ig.PathGeometry();
		var f = new $.ig.PathFigure();
		f.__isFilled = true;
		f.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		f.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		f.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		f.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		f.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		f.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		f.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		e.d().add(f);
		d.bp(e);
		if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
			d.a7((b.series()).thickness());
			d.__stroke = (b.series()).actualOutline();
		}
		d.__fill = b.actualItemBrush();
		var g = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), c);
		g.g(d);
	}

, 
	n: function (a) {
		var b = a.data;
		var c = a.context;
		var d = b.series();
		if (b.itemBrush() != null) {
			b.actualItemBrush(b.itemBrush());

		} else {
			b.actualItemBrush(d.actualBrush());
		}
		var e = new $.ig.Line();
		e.bq(0);
		e.bs(a.availableHeight / 2);
		e.br(a.availableWidth);
		e.bt(a.availableHeight / 2);
		e.a7(d.thickness());
		e.__stroke = b.actualItemBrush();
		var f = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), c);
		f.n(e);
	}

, 
	o: function (a) {
		var b = a.data;
		$.ig.LegendTemplates.prototype.h(b);
		var c = $.ig.util.cast($.ig.MarkerSeries.prototype.$type, b.series());
		if (c != null && c.actualMarkerTemplate() != null && c.actualMarkerTemplate().render() != null) {
			if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
				b.outline((b.series()).actualOutline());
			}
			$.ig.LegendTemplates.prototype.g(c.actualMarkerTemplate(), a);
		}
	}

, 
	p: function (a) {
		var $self = this;
		var b = a.data;
		var c = a.context;
		var d = b.series();
		if (b.itemBrush() != null) {
			b.actualItemBrush(b.itemBrush());

		} else {
			b.actualItemBrush(d.actualBrush());
		}
		var e = new $.ig.Path();
		var f = new $.ig.PathGeometry();
		var g = new $.ig.PathFigure();
		g.__isFilled = true;
		g.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		g.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		f.d().add(g);
		e.bp(f);
		if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
			e.a7((b.series()).thickness());
			e.__stroke = (b.series()).actualOutline();
		}
		e.__fill = b.actualItemBrush();
		var h = new $.ig.Path();
		var i = new $.ig.PathGeometry();
		var j = new $.ig.PathFigure();
		j.__isFilled = true;
		j.__startPoint = {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		j.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		j.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		j.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		i.d().add(j);
		h.bp(i);
		if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
			h.a7((b.series()).thickness());
			h.__stroke = (b.series()).actualOutline();
		}
		if ($.ig.util.cast($.ig.WaterfallSeries.prototype.$type, b.series()) !== null) {
			h.__fill = (b.series()).negativeBrush();
		}
		var k = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), c);
		k.g(e);
		k.g(h);
		var l = $.ig.util.cast($.ig.MarkerSeries.prototype.$type, b.series());
		if (l != null && l.actualMarkerTemplate() != null && l.actualMarkerTemplate().render() != null) {
			if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
				b.outline((b.series()).actualOutline());
			}
			$.ig.LegendTemplates.prototype.g(l.actualMarkerTemplate(), a);
		}
	}

, 
	q: function (a) {
		var $self = this;
		var b = a.data;
		var c = a.context;
		var d = b.series();
		if (b.itemBrush() != null) {
			b.actualItemBrush(b.itemBrush());

		} else {
			b.actualItemBrush(d.actualBrush());
		}
		var e = new $.ig.Path();
		var f = new $.ig.PathGeometry();
		var g = new $.ig.PathFigure();
		g.__isFilled = true;
		g.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		g.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		f.d().add(g);
		e.bp(f);
		if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
			e.a7((b.series()).thickness());
			e.__stroke = (b.series()).actualOutline();
		}
		e.__fill = b.actualItemBrush();
		var h = new $.ig.Path();
		var i = new $.ig.PathGeometry();
		var j = new $.ig.PathFigure();
		j.__isFilled = true;
		j.__startPoint = {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		j.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		j.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		j.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		i.d().add(j);
		h.bp(i);
		if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
			h.a7((b.series()).thickness());
			h.__stroke = (b.series()).actualOutline();
		}
		if ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, b.series()) !== null) {
			h.__fill = (b.series()).negativeBrush();
		}
		var k = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), c);
		k.g(e);
		k.g(h);
	}

, 
	r: function (a) {
		var $self = this;
		var b = a.data;
		var c = a.context;
		var d = b.series();
		if (b.itemBrush() != null) {
			b.actualItemBrush(b.itemBrush());

		} else {
			b.actualItemBrush(d.actualBrush());
		}
		var e = new $.ig.Path();
		var f = new $.ig.PathGeometry();
		var g = new $.ig.PathFigure();
		g.__isFilled = true;
		g.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		g.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		g.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		f.d().add(g);
		e.bp(f);
		if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
			e.a7((b.series()).thickness());
			e.__stroke = (b.series()).actualOutline();
		}
		e.__fill = b.actualItemBrush();
		var h = new $.ig.Path();
		var i = new $.ig.PathGeometry();
		var j = new $.ig.PathFigure();
		j.__isFilled = true;
		j.__startPoint = {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		j.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		j.__segments.add((function () { var $ret = new $.ig.ArcSegment();
		$ret.k(new $.ig.Size(5, 5));
		$ret.i(false);
		$ret.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}); return $ret;}()));
		j.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
		i.d().add(j);
		h.bp(i);
		if ($.ig.util.cast($.ig.Series.prototype.$type, b.series()) !== null) {
			h.a7((b.series()).thickness());
			h.__stroke = (b.series()).actualOutline();
		}
		if ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, b.series()) !== null) {
			h.__fill = (b.series()).negativeBrush();
		}
		var k = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), c);
		k.g(e);
		k.g(h);
	}
,
	$type: new $.ig.Type('LegendTemplates', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('Marker', 'ContentControl', {
	init: function () {

		$.ig.ContentControl.prototype.init.call(this);

	}
, 
	_bi: null,
	bi: function (a) {
		if (arguments.length === 1) {
			this._bi = a;
			return a;
		} else {
			return this._bi;
		}
	}

, 
	_bj: null,
	bj: function (a) {
		if (arguments.length === 1) {
			this._bj = a;
			return a;
		} else {
			return this._bj;
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
	$type: new $.ig.Type('Marker', $.ig.ContentControl.prototype.$type)
}, true);








$.ig.util.defType('RenderSurface', 'Object', {
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
	$type: new $.ig.Type('RenderSurface', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SeriesCollection', 'ObservableCollection$1', {

		init: function () {


			$.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Series.prototype.$type);
		}, 
	collectionResetting: null
, 
	m: function () {
		if (this.collectionResetting != null) {
			this.collectionResetting(this, null);
		}
		$.ig.ObservableCollection$1.prototype.m.call(this);
	}
,
	$type: new $.ig.Type('SeriesCollection', $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Series.prototype.$type))
}, true);

$.ig.util.defType('SeriesComponentsForView', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('SeriesComponentsForView', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SeriesComponentsFromView', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	},
	$type: new $.ig.Type('SeriesComponentsFromView', $.ig.Object.prototype.$type)
}, true);



$.ig.util.defType('IFastItemsSourceProvider', 'Object', {

		$type: new $.ig.Type('IFastItemsSourceProvider', null)
}, true);

$.ig.util.defType('SyncLink', 'FrameworkElement', {

		init: function () {

			var $self = this;
			this.a2 = new $.ig.Dictionary$2($.ig.IEnumerable.prototype.$type, $.ig.FastItemsSourceReference.prototype.$type, 0);

			$.ig.FrameworkElement.prototype.init.call(this);
						this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (a, b) {
					$self.be(a, b.propertyName(), b.oldValue(), b.newValue());
				});
				this.bb(new $.ig.ChartCollection());
				this.bb().collectionChanged = $.ig.Delegate.prototype.combine(this.bb().collectionChanged, this.bm.on(this));
				this.a9(new $.ig.Rect(0, 0, 0, 1, 1));
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
	be: function (a, b, c, d) {
	}

, 
	releaseFastItemsSource: function (a) {
		var $self = this;
		if (a != null) {
			var b = null;
			if ((function () { var $ret = $self.a2.tryGetValue(a, b); b = $ret.value; return $ret.ret; }())) {
				--b.b;
				if (b.b == 0) {
					this.a2.remove(a);
				}
			}
		}
		return null;
	}

, 
	getFastItemsSource: function (a) {
		var $self = this;
		var b = null;
		if (a != null) {
			var c = null;
			if (!(function () { var $ret = $self.a2.tryGetValue(a, c); c = $ret.value; return $ret.ret; }())) {
				b = (function () { var $ret = new $.ig.FastItemsSource();
				$ret.f(a); return $ret;}());
				c = new $.ig.FastItemsSourceReference(b);
				this.a2.add(a, c);
			}
			c.b++;
			b = c.a;
		}
		return b;
	}

, 
	bf: function (a) {
		var $self = this;
		var b = null;
		if (a != null) {
			var c = null;
			if (!(function () { var $ret = $self.a2.tryGetValue(a, c); c = $ret.value; return $ret.ret; }())) {
				return null;
			}
			b = c.a;
		}
		return b;
	}
, 
	a2: null
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
	bi: function (a, b, c) {
		var $self = this;
		if (!c.isEmpty()) {
			var d = 0.5 * (c.left() + c.right());
			var e = 0.5 * (c.top() + c.bottom());
			var f = a.windowRectMinWidth();
			if (b == a) {
				if (!b.horizontalZoomable()) {
					c.x(b.windowRect().x());
					c.width(b.windowRect().width());
				}
				if (!b.verticalZoomable()) {
					c.y(b.windowRect().y());
					c.height(b.windowRect().height());
				}

			} else {
				var g = $.ig.SyncManager.prototype.e(b);
				if (g == null || !g.synchronizeHorizontally()) {
					c.x(b.windowRect().x());
					c.width(b.windowRect().width());
				}
				if (g == null || !g.synchronizeVertically()) {
					c.y(b.windowRect().y());
					c.height(b.windowRect().height());
				}
			}
			var h = $.ig.MathUtil.prototype.i(c.width(), f, 1);
			var i = $.ig.MathUtil.prototype.i(c.height(), f, 1);
			if (a.useFixedAspectZoom() && !a.viewportRect().isEmpty()) {
				var j = a.viewportRect();
				var k = j.width() / j.height();
				var l = h * j.width();
				var m = i * j.height();
				var n = l / m;
				if (n != k) {
					if (m * k > l) {
						l = m * k;
						h = l / j.width();

					} else {
						m = l / k;
						i = m / j.height();
					}
				}
			} else if (a.fw()) {
				var o = false;
				var p = false;
				if (Math.abs(h - a.actualWindowRect().width()) > f) {
					o = true;
				}
				if (Math.abs(i - a.actualWindowRect().height()) > f) {
					p = true;
				}
				(function () { var $ret = a.fv(h, i, o, p); h = $ret.width; i = $ret.height; return $ret.ret; }());
				h = $.ig.MathUtil.prototype.i(h, f, 1);
				i = $.ig.MathUtil.prototype.i(i, f, 1);
			}
			var q = d - 0.5 * h;
			var r = e - 0.5 * i;
			var s = d + 0.5 * h;
			var t = e + 0.5 * i;
			if (q < 0) {
				q = 0;
				s = q + h;
			}
			if (s > 1) {
				s = 1;
				q = s - h;
			}
			if (r < 0) {
				r = 0;
				t = r + i;
			}
			if (t > 1) {
				t = 1;
				r = t - i;
			}
			c = new $.ig.Rect(0, q, r, s - q, t - r);
		}
		return c;
	}

, 
	ba: function () {
			return this.bb();
	}

, 
	_bb: null,
	bb: function (a) {
		if (arguments.length === 1) {
			this._bb = a;
			return a;
		} else {
			return this._bb;
		}
	}

, 
	bm: function (a, b) {
		if (b.newItems() != null) {
			var d = b.newItems().getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				if (c.windowRect().isEmpty()) {
					c.windowRect(this.bi(null, c, this.a9()));
				}
			}
		}
	}

, 
	bn: function (a, b) {
		var d = this.ba().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			if (c == a) {
				c.crosshairPoint(b);

			} else {
				var e = b;
				var f = $.ig.SyncManager.prototype.e(c);
				if (f == null || !f.synchronizeHorizontally()) {
					e.__x = NaN;
				}
				if (f == null || !f.synchronizeVertically()) {
					e.__y = NaN;
				}
				c.crosshairPoint(e);
			}
		}
	}

, 
	bo: function (a, b) {
		var d = this.ba().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			c.previewRect(this.bi(a, c, b));
		}
	}

, 
	bp: function (a, b) {
		var c = b.isEmpty() || isNaN(b.x()) || isNaN(b.y()) || isNaN(b.width()) || isNaN(b.height());
		$.ig.Debug.prototype.a(!c, "SyncLink attempted to apply an invalid WindowRect");
		if (!c && !a.fm()) {
			var e = this.ba().getEnumerator();
			while (e.moveNext()) {
				var d = e.current();
				d.fm(true);
				d.windowRect(this.bi(a, d, b));
				d.fm(false);
			}
		}
	}
, 
	propertyChanged: null, 
	propertyUpdated: null
, 
	bs: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}
,
	$type: new $.ig.Type('SyncLink', $.ig.FrameworkElement.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type, $.ig.IFastItemsSourceProvider.prototype.$type])
}, true);

$.ig.util.defType('FastItemsSourceReference', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
				this.b = 0;
		}, 
	a: null, 
	b: null,
	$type: new $.ig.Type('FastItemsSourceReference', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SyncSettings', 'FrameworkElement', {
	init: function () {

		$.ig.FrameworkElement.prototype.init.call(this);

	}
, 
	syncChannel: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SyncSettings.prototype.syncChannelProperty, a);
			return a;
		} else {
			return this.b($.ig.SyncSettings.prototype.syncChannelProperty);
		}
	}

, 
	synchronizeVertically: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SyncSettings.prototype.synchronizeVerticallyProperty, a);
			return a;
		} else {
			return this.b($.ig.SyncSettings.prototype.synchronizeVerticallyProperty);
		}
	}

, 
	synchronizeHorizontally: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SyncSettings.prototype.synchronizeHorizontallyProperty, a);
			return a;
		} else {
			return this.b($.ig.SyncSettings.prototype.synchronizeHorizontallyProperty);
		}
	}

, 
	ba: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(a, b, c));
		}
	}
, 
	propertyChanged: null, 
	propertyUpdated: null,
	$type: new $.ig.Type('SyncSettings', $.ig.FrameworkElement.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);


$.ig.util.defType('SyncLinkManager', 'Object', {
	a: null
, 
	instance: function () {
		if ($.ig.SyncLinkManager.prototype.a == null) {
			$.ig.SyncLinkManager.prototype.a = new $.ig.SyncLinkManager();
		}
		return $.ig.SyncLinkManager.prototype.a;
	}
, 
	b: null
, 
	c: function () {
			return this.b.count();
	}

, 
		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.b = new $.ig.Dictionary$2(String, $.ig.SyncLink.prototype.$type, 0);
		}
, 
	getLink: function (a) {
		var $self = this;
		var b;
		if ((function () { var $ret = $self.b.tryGetValue(a, b); b = $ret.value; return $ret.ret; }())) {
			return b;
		}
		b = new $.ig.SyncLink();
		b.a8(a);
		this.b.add(a, b);
		return b;
	}

, 
	releaseLink: function (a) {
		if (a.ba().count() == 0 && a.a8() != null && this.b.containsKey(a.a8())) {
			this.b.remove(a.a8());
		}
	}
,
	$type: new $.ig.Type('SyncLinkManager', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SyncManager', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	a: function (a) {
		var b = $.ig.SyncManager.prototype.e(a);
		if (b == null) {
			return;
		}
		if (!a.fl()) {
			return;
		}
		if (a.syncChannel() != b.syncChannel()) {
			return;
		}
		$.ig.SyncManager.prototype.c(a, a.syncChannel(), null);
	}

, 
	b: function (a) {
		var b = $.ig.SyncManager.prototype.e(a);
		if (b == null) {
			return;
		}
		if (a.fl() && a.syncChannel() == b.syncChannel()) {
			return;
		}
		var c = null;
		if (a.fl()) {
			c = a.syncChannel();
		}
		$.ig.SyncManager.prototype.c(a, c, b.syncChannel());
	}

, 
	c: function (a, b, c) {
		if (a != null) {
			if (String.isNullOrEmpty(c)) {
				var d = a.actualSyncLink();
				a.actualSyncLink(null);
				a.actualSyncLink(new $.ig.SyncLink());
				if (d != null) {
					$.ig.SyncLinkManager.prototype.instance().releaseLink(d);
				}

			} else {
				if (!String.isNullOrEmpty(b)) {
					var e = a.actualSyncLink();
					a.actualSyncLink(null);
					if (e != null) {
						$.ig.SyncLinkManager.prototype.instance().releaseLink(e);
					}
				}
				a.actualSyncLink($.ig.SyncLinkManager.prototype.instance().getLink(c));
			}
		}
	}

, 
	d: function (a, b) {
		(a).syncSettings(b);
	}

, 
	e: function (a) {
		return (a).syncSettings();
	}
,
	$type: new $.ig.Type('SyncManager', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('DefaultCategoryTrendlineHost', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.DefaultCategoryTrendlinePreparer();
		}, 
	a: null
, 
	trendlinePreparer: function () {
			return this.a;
	}

, 
	trendLineType: function () {
			return $.ig.TrendLineType.prototype.none;
	}

, 
	trendLinePeriod: function () {
			return 1;
	}
,
	$type: new $.ig.Type('DefaultCategoryTrendlineHost', $.ig.Object.prototype.$type, [$.ig.IHasCategoryTrendline.prototype.$type])
}, true);

$.ig.util.defType('DefaultCategoryTrendlinePreparer', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	prepareLine: function (a, b, c, d, e, f, g) {
	}
,
	$type: new $.ig.Type('DefaultCategoryTrendlinePreparer', $.ig.Object.prototype.$type, [$.ig.IPreparesCategoryTrendline.prototype.$type])
}, true);

$.ig.util.defType('TrendResolutionParams', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	$type: new $.ig.Type('TrendResolutionParams', $.ig.Object.prototype.$type)
}, true);











$.ig.util.defType('AxisRangeChangedEventArgs', 'EventArgs', {

		init: function (a, b, c, d) {


			$.ig.EventArgs.prototype.init.call(this);
						this.oldMinimumValue(a);
				this.minimumValue(b);
				this.oldMaximumValue(c);
				this.maximumValue(d);
		}
, 
	_oldMinimumValue: null,
	oldMinimumValue: function (a) {
		if (arguments.length === 1) {
			this._oldMinimumValue = a;
			return a;
		} else {
			return this._oldMinimumValue;
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
	_oldMaximumValue: null,
	oldMaximumValue: function (a) {
		if (arguments.length === 1) {
			this._oldMaximumValue = a;
			return a;
		} else {
			return this._oldMaximumValue;
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
	$type: new $.ig.Type('AxisRangeChangedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);


$.ig.util.defType('DataChartMouseButtonEventArgs', 'EventArgs', {

		init: function (a, b, c, d) {


			$.ig.EventArgs.prototype.init.call(this);
						this.chart(a);
				this.series(b);
				this.item(c);
				this.originalEvent(d);
		}
, 
	toString: function () {
		return this.chart().name() + ", " + this.series().name() + ", " + (this.item() != null ? this.item().toString() : "") + ", " + this.getPosition(null).toString();
	}

, 
	_originalEvent: null,
	originalEvent: function (a) {
		if (arguments.length === 1) {
			this._originalEvent = a;
			return a;
		} else {
			return this._originalEvent;
		}
	}

, 
	handled: function (a) {
		if (arguments.length === 1) {
			this.originalEvent().handled(a);
			return a;
		} else {
			return this.originalEvent().handled();
		}
	}

, 
	getPosition: function (a) {
		return this.originalEvent().getPosition(a);
	}

, 
	originalSource: function () {
			return this.originalEvent().originalSource();
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
	_series: null,
	series: function (a) {
		if (arguments.length === 1) {
			this._series = a;
			return a;
		} else {
			return this._series;
		}
	}

, 
	_chart: null,
	chart: function (a) {
		if (arguments.length === 1) {
			this._chart = a;
			return a;
		} else {
			return this._chart;
		}
	}
,
	$type: new $.ig.Type('DataChartMouseButtonEventArgs', $.ig.EventArgs.prototype.$type)
}, true);


$.ig.util.defType('DataChartLegendMouseButtonEventArgs', 'DataChartMouseButtonEventArgs', {

		init: function (a, b, c, d, e) {


			$.ig.DataChartMouseButtonEventArgs.prototype.init.call(this, a, b, c, d);
						this.legendItem(e);
		}
, 
	_legendItem: null,
	legendItem: function (a) {
		if (arguments.length === 1) {
			this._legendItem = a;
			return a;
		} else {
			return this._legendItem;
		}
	}
,
	$type: new $.ig.Type('DataChartLegendMouseButtonEventArgs', $.ig.DataChartMouseButtonEventArgs.prototype.$type)
}, true);


$.ig.util.defType('ChartMouseEventArgs', 'EventArgs', {

		init: function (a, b, c, d) {


			$.ig.EventArgs.prototype.init.call(this);
						this.chart(a);
				this.series(b);
				this.item(c);
				this.originalEvent(d);
		}
, 
	toString: function () {
		return this.chart().name() + ", " + this.series().name() + ", " + (this.item() != null ? this.item().toString() : "") + ", " + this.getPosition(null).toString();
	}

, 
	_originalEvent: null,
	originalEvent: function (a) {
		if (arguments.length === 1) {
			this._originalEvent = a;
			return a;
		} else {
			return this._originalEvent;
		}
	}

, 
	getPosition: function (a) {
		return this.originalEvent().getPosition(a);
	}

, 
	originalSource: function () {
			return this.originalEvent().originalSource();
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
	_series: null,
	series: function (a) {
		if (arguments.length === 1) {
			this._series = a;
			return a;
		} else {
			return this._series;
		}
	}

, 
	_chart: null,
	chart: function (a) {
		if (arguments.length === 1) {
			this._chart = a;
			return a;
		} else {
			return this._chart;
		}
	}
,
	$type: new $.ig.Type('ChartMouseEventArgs', $.ig.EventArgs.prototype.$type)
}, true);


$.ig.util.defType('ChartLegendMouseEventArgs', 'ChartMouseEventArgs', {

		init: function (a, b, c, d, e) {


			$.ig.ChartMouseEventArgs.prototype.init.call(this, a, b, c, d);
						this.legendItem(e);
		}
, 
	_legendItem: null,
	legendItem: function (a) {
		if (arguments.length === 1) {
			this._legendItem = a;
			return a;
		} else {
			return this._legendItem;
		}
	}
,
	$type: new $.ig.Type('ChartLegendMouseEventArgs', $.ig.ChartMouseEventArgs.prototype.$type)
}, true);


$.ig.util.defType('ChartCursorEventArgs', 'EventArgs', {

		init: function (a, b, c) {


			$.ig.EventArgs.prototype.init.call(this);
						this.seriesViewer(a);
				this.series(b);
				this.item(c);
		}
, 
	toString: function () {
		return this.seriesViewer().name() + ", " + this.series().name() + ", " + (this.item() != null ? this.item().toString() : "");
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
	_series: null,
	series: function (a) {
		if (arguments.length === 1) {
			this._series = a;
			return a;
		} else {
			return this._series;
		}
	}

, 
	_seriesViewer: null,
	seriesViewer: function (a) {
		if (arguments.length === 1) {
			this._seriesViewer = a;
			return a;
		} else {
			return this._seriesViewer;
		}
	}

, 
	chart: function () {
			return $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
	}
,
	$type: new $.ig.Type('ChartCursorEventArgs', $.ig.EventArgs.prototype.$type)
}, true);




$.ig.util.defType('PropertyUpdatedEventArgs', 'EventArgs', {

		init: function (a, b, c) {


			$.ig.EventArgs.prototype.init.call(this);
						this.propertyName(a);
				this.oldValue(b);
				this.newValue(c);
		}
, 
	_propertyName: null,
	propertyName: function (a) {
		if (arguments.length === 1) {
			this._propertyName = a;
			return a;
		} else {
			return this._propertyName;
		}
	}

, 
	_oldValue: null,
	oldValue: function (a) {
		if (arguments.length === 1) {
			this._oldValue = a;
			return a;
		} else {
			return this._oldValue;
		}
	}

, 
	_newValue: null,
	newValue: function (a) {
		if (arguments.length === 1) {
			this._newValue = a;
			return a;
		} else {
			return this._newValue;
		}
	}
,
	$type: new $.ig.Type('PropertyUpdatedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);














$.ig.util.defType('ItemLegend', 'LegendBase', {

	bu: function () {
		return new $.ig.ItemLegendView(this);
	}

, 
	bv: function (a) {
		$.ig.LegendBase.prototype.bv.call(this, a);
		this.cf(a);
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
		init: function () {

			var $self = this;

			$.ig.LegendBase.prototype.init.call(this);
						this.a3($.ig.ItemLegend.prototype.$type);
				this.children().collectionChanged = $.ig.Delegate.prototype.combine(this.children().collectionChanged, function (a, b) {
					if (b.oldItems() != null) {
						var d = b.oldItems().getEnumerator();
						while (d.moveNext()) {
							var c = d.current();
							$self.cf().aa(c);
						}
					}
					if (b.newItems() != null) {
						var f = b.newItems().getEnumerator();
						while (f.moveNext()) {
							var e = f.current();
							$self.cf().ab(e);
						}
					}
				});
		}
, 
	by: function (a, b) {
		if (!this.bq().w()) {
			return;
		}
		this.ck(b);
	}

, 
	bz: function (a, b) {
		this.cl(b);
		if (b == null || a == null || a.count() == 0) {
			return;
		}
		var d = a.getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			var e = $.ig.util.cast($.ig.ContentControl.prototype.$type, c);
			if (e != null && e.a9() != null) {
				var f = $.ig.util.cast($.ig.DataContext.prototype.$type, e.a9());
				if (f != null && !this.cm(f)) {
					this.children().add(c);
				}
			}
		}
	}

, 
	ck: function (a) {
		this.cl(a);
		var b = $.ig.util.cast($.ig.BubbleSeries.prototype.$type, a);
		if (b != null && b.lk() != null && b.li() != null && b.li().count() > 0) {
			var d = b.li().getEnumerator();
			while (d.moveNext()) {
				var c = d.current();
				var e = $.ig.util.cast($.ig.ContentControl.prototype.$type, c);
				if (e != null && e.a9() != null) {
					var f = $.ig.util.cast($.ig.DataContext.prototype.$type, e.a9());
					if (f != null && !this.cm(f)) {
						this.children().add(c);
					}
				}
			}
		}
	}

, 
	cl: function (a) {
		if (a == null || this.children() == null || this.children().count() == 0) {
		return;
		}
		var b = new $.ig.ObservableCollection$1($.ig.UIElement.prototype.$type, 0);
		var d = this.children().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			var e = $.ig.util.cast($.ig.ContentControl.prototype.$type, c);
			if (e != null && e.a9() != null) {
				var f = $.ig.util.cast($.ig.DataContext.prototype.$type, e.a9());
				if (f != null && f.series() == a) {
					b.add(c);
				}
			}
		}
		var h = b.getEnumerator();
		while (h.moveNext()) {
			var g = h.current();
			this.children().remove(g);
		}
	}

, 
	cm: function (a) {
		return this.cf().at(a);
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
	$type: new $.ig.Type('ItemLegend', $.ig.LegendBase.prototype.$type)
}, true);

$.ig.util.defType('ItemLegendView', 'LegendBaseView', {

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
	at: function (a) {
		return this.h().w(a);
	}
,
	$type: new $.ig.Type('ItemLegendView', $.ig.LegendBaseView.prototype.$type)
}, true);



















































$.ig.util.defType('CoercionInfo', 'Object', {
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
	$type: new $.ig.Type('CoercionInfo', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SeriesViewerSurfaceViewer', 'DependencyObject', {

		init: function (a, b) {

			this.h = true;

			$.ig.DependencyObject.prototype.init.call(this);
						if (a == null || b == null) {
					throw new $.ig.ArgumentNullException("model");
				}
				this.s(a);
				this.s().windowRectChanged = $.ig.Delegate.prototype.combine(this.s().windowRectChanged, this.z.on(this));
				this.q(b);
				this.t(new $.ig.Canvas());
				this.ak();
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
	z: function (a, b) {
		var c = this.r();
		this.r(true);
		this.zoomLevel(1 - Math.min(b.newRect().height(), b.newRect().width()));
		this.r(c);
	}
, 
	g: null
, 
	s: function (a) {
		if (arguments.length === 1) {
			if (this.g != null) {
				var b = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.g);
				if (b != null) {
				b.propertyChanged = $.ig.Delegate.prototype.remove(b.propertyChanged, this.ac.on(this));
				}
			}
			this.g = a;
			if (this.g != null) {
				var c = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.g);
				if (c != null) {
				c.propertyChanged = $.ig.Delegate.prototype.combine(c.propertyChanged, this.ac.on(this));
				}
			}
			return a;
		} else {
			return this.g;
		}
	}

, 
	ac: function (a, b) {
		if (b.propertyName() == "DefaultInteraction") {
			this.k = this.s().defaultInteraction();
			this.aj(b.propertyName(), this.defaultInteraction(), this.defaultInteraction());
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
	zoomTo100: function () {
		this.s().windowRect($.ig.XamDataChart.prototype.de);
	}

, 
	scaleToFit: function () {
		this.s().windowRect($.ig.XamDataChart.prototype.de);
	}

, 
	renderPreview: function () {
		if (!this.u()) {
			return;
		}
		var a = new $.ig.RenderSurface();
		a.b(this.q().ai().c3().a0());
		if (a.b() != null && a.b().b()) {
			var b = this.q().ai().c3().a1();
			this.q().bi(b.c(), b.d(), a);
		}
		this.u(false);
	}

, 
	worldRect: function () {
			return $.ig.XamDataChart.prototype.de;
	}

, 
	viewportRect: function () {
			return this.s().viewportRect();
	}

, 
	minimumZoomLevel: function () {
			return 0;
	}

, 
	maximumZoomLevel: function () {
			if (this.s().windowRectMinWidth() == 0.0001) {
				return 0.9;

			} else {
				return 1 - this.s().windowRectMinWidth();
			}
	}
, 
	h: null
, 
	u: function (a) {
		if (arguments.length === 1) {
			this.h = a;
			return a;
		} else {
			return this.h;
		}
	}

, 
	zoomLevel: function (a) {
		if (arguments.length === 1) {
			this.c($.ig.SeriesViewerSurfaceViewer.prototype.i, a);
			return a;
		} else {
			return this.b($.ig.SeriesViewerSurfaceViewer.prototype.i);
		}
	}

, 
	aj: function (a, b, c) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(a));
		}
		switch (a) {
			case $.ig.SeriesViewerSurfaceViewer.prototype.e:
				if (c - this.minimumZoomLevel() < -1E-05) {
					this.zoomLevel(this.minimumZoomLevel());
					return;
				}
				if (c - this.maximumZoomLevel() > 0.0001) {
					this.zoomLevel(this.maximumZoomLevel());
					return;
				}
				var d = this.s() != null && this.s().fn() != null && this.s().fn().dp();
				if (!this.r() && !d) {
					var e = 1 - this.zoomLevel();
					var f = this.s().actualWindowRect().getCenter();
					var g = new $.ig.Rect(0, f.__x - e / 2, f.__y - e / 2, e, e);
					this.s().windowRect($.ig.SeriesViewerSurfaceViewer.prototype.am(this.s().windowRect(), g, this.s().horizontalZoomable(), this.s().verticalZoomable(), this.worldRect()));
				}
				this.ak();
				if (this.s().fn() != null) {
					this.s().fn().f8(this.zoomLevel());
				}
				break;
		}
	}

, 
	ak: function () {
		var a = Math.round(100 * (1 / (1 - this.zoomLevel())));
		if (a <= 1000) {
			this.zoomLevelDisplayText(a.toString());

		} else {
			this.zoomLevelDisplayText("> 1000");
		}
	}
, 
	j: null
, 
	zoomLevelDisplayText: function (a) {
		if (arguments.length === 1) {
			var b = this.zoomLevelDisplayText() != a;
			if (b) {
				var c = this.zoomLevelDisplayText();
				this.j = a;
				this.aj($.ig.SeriesViewerSurfaceViewer.prototype.f, c, a);
			}
			return a;
		} else {
			return this.j;
		}
	}
, 
	k: null
, 
	defaultInteraction: function (a) {
		if (arguments.length === 1) {
			this.k = a;
			this.s().defaultInteraction(a);
			return a;
		} else {
			return this.k;
		}
	}
, 
	propertyChanged: null
, 
	am: function (a, b, c, d, e) {
		var f		,g		,h		,i;
		if (c) {
			f = b.left();
			h = b.width();

		} else {
			f = a.left();
			h = a.width();
		}
		if (d) {
			g = b.top();
			i = b.height();

		} else {
			g = a.top();
			i = a.height();
		}
		var j = f + h;
		var k = g + i;
		var l = Math.max(0, e.left() - f);
		var m = Math.max(0, j - e.right());
		var n = Math.max(0, e.top() - g);
		var o = Math.max(0, k - e.bottom());
		f += l - m;
		g += n - o;
		var p = new $.ig.Rect(0, f, g, h, i);
		p.intersect(e);
		return p;
	}
,
	$type: new $.ig.Type('SeriesViewerSurfaceViewer', $.ig.DependencyObject.prototype.$type, [$.ig.IOverviewPlusDetailControl.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])
}, true);

$.ig.util.defType('OverviewPlusDetailViewportHost', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						if (a == null) {
					throw new $.ig.ArgumentNullException("view");
				}
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
	getViewInfo: function (a, b) {
		a = new $.ig.Rect(0, 0, 0, this.b().ai().c3().ar().width(), this.b().ai().c3().ar().height());
		b = $.ig.SeriesViewer.prototype.de;
		return {
			viewportRect: a,
			windowRect: b
		};
	}
,
	$type: new $.ig.Type('OverviewPlusDetailViewportHost', $.ig.Object.prototype.$type, [$.ig.IProvidesViewport.prototype.$type])
}, true);

$.ig.util.defType('SeriesViewerViewManager', 'Object', {

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
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
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
	at: function (a) {
		if (a == null) {
			if (this.v() != null) {
				this.v().bf();
			}
			this.m(null);
			this.n(null);
			this.o(null);
			this.p(null);
			this.q(null);
			this.r(null);
			this.s(null);
			this.t(null);
			this.u(null);
			this.w(null);
			this.v(null);
			return;
		}
		var b = a;
		this.m($(b));
		this.a.ec();
		this.a.dh();
		this.m().css("position", "relative");
		this.n($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.o($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.p($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.q($('<canvas style=\"position : absolute; top : 0; left : 0\" />'));
		this.m().append(this.n());
		this.m().append(this.p());
		this.m().append(this.o());
		this.r(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.n()[0]).getContext("2d")));
		this.s(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.o()[0]).getContext("2d")));
		this.t(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.p()[0]).getContext("2d")));
		this.u(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.q()[0]).getContext("2d")));
		this.a.de(this.r());
		this.a.dr(this.m().width(), this.m().height());
		this.v(new $.ig.DOMEventProxy(this.o()));
		this.w($('<div></div>'));
		this.w().hide();
		this.w().css("position", "absolute");
		this.w().css("z-index", "10000");
		this.w().addClass(this.a.ag().tooltipStyle());
		this.m().append(this.w());
	}

, 
	au: function () {
		this.o().css("cursor", "default");
	}

, 
	av: function () {
		this.o().css("cursor", "pointer");
	}

, 
	aw: function () {
		var $self = this;
		return (function () { var $ret = new $.ig.Brush();
		$ret.__fill = "#000000"; return $ret;}());
	}

, 
	ax: function (a) {
		var tempSpan_ = $("<span>M</span>");
		var b = $('body');
		b.append(tempSpan_);
		tempSpan_.css("font", a);
		var offset_ = tempSpan_.attr("offsetHeight");
		if (isNaN(offset_)) { offset_ = tempSpan_[0].offsetHeight; };
		tempSpan_.remove();
		return parseInt(offset_);
	}

, 
	ay: function (a, b) {
		this.n().attr("width", a.toString());
		this.n().attr("height", b.toString());
		this.o().attr("width", a.toString());
		this.o().attr("height", b.toString());
		this.o().attr("tabindex", "0");
		this.o().css("outline", "0");
		this.p().attr("width", a.toString());
		this.p().attr("height", b.toString());
		this.q().attr("width", a.toString());
		this.q().attr("height", b.toString());
	}

, 
	az: function () {
		var a = $.ig.DOMEventProxy.prototype.c4(this.m());
		return new $.ig.Size(a.left(), a.top());
	}

, 
	a0: function (a, b) {
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
	a1: function (a, b, c, d, e) {
		a = new $.ig.BrushCollection();
		b = new $.ig.BrushCollection();
		var f = 1;
		var g = true;
		var h = $("<div></div>");
		var i = $.ig.util.getClassCount('.ui-chart-palette-', true);
		if (i == 0) {
			var j = new $.ig.Brush();
			j.__fill = "#B1BFC9";
			var k = new $.ig.Brush();
			k.__fill = "#50a8be";
			var l = new $.ig.Brush();
			l.__fill = "#798995";
			var m = new $.ig.Brush();
			m.__fill = "#fc6754";
			var n = new $.ig.Brush();
			n.__fill = "#4F606C";
			var o = new $.ig.Brush();
			o.__fill = "#fec33c";
			var p = new $.ig.Brush();
			p.__fill = "#374650";
			var q = new $.ig.Brush();
			q.__fill = "#3c6399";
			var r = new $.ig.Brush();
			r.__fill = "#162C3B";
			var s = new $.ig.Brush();
			s.__fill = "#91af49";
			a.add(k);
			a.add(m);
			a.add(o);
			a.add(q);
			a.add(s);
			b.add(j);
			b.add(l);
			b.add(n);
			b.add(p);
			b.add(r);
			f = 6;
			i = 5;
		}
		var t = $.ig.util.getClassCount('.ui-chart-axis', false);
		if (t == 0) {
			g = false;
		}
		this.m().append(h);
		for (var u = f; u <= i; u++) {
			var v = this.a0("ui-chart-palette-" + u, h);
			a.add(v[0]);
			b.add(v[1]);
		}
		if (g) {
			var w = this.a0("ui-chart-axis", h);
			e = w[1];

		} else {
			var x = new $.ig.Brush();
			x.__fill = "#989EA3";
			e = x;
		}
		h.remove();
		c = new $.ig.Brush();
		c.__fill = this.m().css("color");
		var y = this.m().css("font-style");
		var z = this.m().css("font-variant");
		var aa = this.m().css("font-weight");
		var ab = this.m().css("font-size");
		var ac = this.m().css("line-height");
		var ad = this.m().css("font-family");
		d = "";
		var ae = true;
		if (y.length > 0) {
			if (!ae) {
				d += " ";

			} else {
				ae = false;
			}
			d += y;
		}
		if (z.length > 0) {
			if (!ae) {
				d += " ";

			} else {
				ae = false;
			}
			d += z;
		}
		if (aa.length > 0) {
			if (!ae) {
				d += " ";

			} else {
				ae = false;
			}
			d += aa;
		}
		if (ab.length > 0) {
			if (!ae) {
				d += " ";

			} else {
				ae = false;
			}
			d += ab;
		}
		if (ac.length > 0) {
			if (!ae) {
				d += "/";

			} else {
				ae = false;
			}
			d += ac;
		}
		if (ad.length > 0) {
			if (!ae) {
				d += " ";

			} else {
				ae = false;
			}
			d += ad;
		}
		return {
			brushes: a,
			outlines: b,
			fontBrush: c,
			font: d,
			axisLineBrush: e
		};
	}

, 
	a2: function () {
		this.w().children().remove();
	}

, 
	a3: function (x_) {
		var box_ = this.w();
		var offset_ = $.ig.DOMEventProxy.prototype.c4(this.w());
		var a = this.az();
		x_ = a.c() + this.a.ag().viewportRect().left() + x_;
		box_.offset({ left: x_, top: offset_.top});
	}

, 
	a4: function (y_) {
		var box_ = this.w();
		var offset_ = this.w().offset();
		var a = this.az();
		y_ = a.d() + this.a.ag().viewportRect().top() + y_;
		box_.offset({ left: offset_.left, top: y_});
	}

, 
	a5: function (a) {
		var b = a;
		b.show();
		this.w().append(b);
	}

, 
	a6: function () {
		this.w().hide();
	}

, 
	a7: function () {
		this.w().show();
	}

, 
	a8: function (a) {
		$("body").append(a);
	}

, 
	a9: function (a) {
		(a).remove();
	}

, 
	ba: function () {
		this.a.dr(this.m().width(), this.m().height());
	}
,
	$type: new $.ig.Type('SeriesViewerViewManager', $.ig.Object.prototype.$type)
}, true);





$.ig.util.defType('ChartVisualData', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.axes(new $.ig.AxisVisualDataList());
				this.series(new $.ig.SeriesVisualDataList());
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
	_series: null,
	series: function (a) {
		if (arguments.length === 1) {
			this._series = a;
			return a;
		} else {
			return this._series;
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
	_isViewportScaled: null,
	isViewportScaled: function (a) {
		if (arguments.length === 1) {
			this._isViewportScaled = a;
			return a;
		} else {
			return this._isViewportScaled;
		}
	}

, 
	scaleByViewport: function () {
		var b = this.axes().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.h();
		}
		var d = this.series().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			c.f();
		}
	}
,
	$type: new $.ig.Type('ChartVisualData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SeriesVisualDataList', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.SeriesVisualData.prototype.$type);

	},
	$type: new $.ig.Type('SeriesVisualDataList', $.ig.List$1.prototype.$type.specialize($.ig.SeriesVisualData.prototype.$type))
}, true);

$.ig.util.defType('SeriesVisualData', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.shapes(new $.ig.PrimitiveVisualDataList());
				this.markerShapes(new $.ig.MarkerVisualDataList());
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
	_viewport: null,
	viewport: function (a) {
		if (arguments.length === 1) {
			this._viewport = a;
			return a;
		} else {
			return this._viewport;
		}
	}

, 
	_shapes: null,
	shapes: function (a) {
		if (arguments.length === 1) {
			this._shapes = a;
			return a;
		} else {
			return this._shapes;
		}
	}

, 
	_markerShapes: null,
	markerShapes: function (a) {
		if (arguments.length === 1) {
			this._markerShapes = a;
			return a;
		} else {
			return this._markerShapes;
		}
	}

, 
	f: function () {
		var b = this.shapes().getEnumerator();
		while (b.moveNext()) {
			var a = b.current();
			a.scaleByViewport(this.viewport());
		}
		var d = this.markerShapes().getEnumerator();
		while (d.moveNext()) {
			var c = d.current();
			c.f(this.viewport());
		}
	}
,
	$type: new $.ig.Type('SeriesVisualData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('MarkerVisualDataList', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.MarkerVisualData.prototype.$type);

	},
	$type: new $.ig.Type('MarkerVisualDataList', $.ig.List$1.prototype.$type.specialize($.ig.MarkerVisualData.prototype.$type))
}, true);

$.ig.util.defType('MarkerVisualData', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

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
	_index: null,
	index: function (a) {
		if (arguments.length === 1) {
			this._index = a;
			return a;
		} else {
			return this._index;
		}
	}

, 
	_contentTemplate: null,
	contentTemplate: function (a) {
		if (arguments.length === 1) {
			this._contentTemplate = a;
			return a;
		} else {
			return this._contentTemplate;
		}
	}

, 
	_visibility: null,
	visibility: function (a) {
		if (arguments.length === 1) {
			this._visibility = a;
			return a;
		} else {
			return this._visibility;
		}
	}

, 
	f: function (a) {
		this.x((this.x() - a.left()) / a.width());
		this.y((this.y() - a.top()) / a.height());
	}
,
	$type: new $.ig.Type('MarkerVisualData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('AxisVisualDataList', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.AxisVisualData.prototype.$type);

	},
	$type: new $.ig.Type('AxisVisualDataList', $.ig.List$1.prototype.$type.specialize($.ig.AxisVisualData.prototype.$type))
}, true);

$.ig.util.defType('AxisVisualData', 'Object', {

		init: function () {


			$.ig.Object.prototype.init.call(this);
						this.labels(new $.ig.AxisLabelVisualDataList());
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
	_viewport: null,
	viewport: function (a) {
		if (arguments.length === 1) {
			this._viewport = a;
			return a;
		} else {
			return this._viewport;
		}
	}

, 
	_labels: null,
	labels: function (a) {
		if (arguments.length === 1) {
			this._labels = a;
			return a;
		} else {
			return this._labels;
		}
	}

, 
	_axisLine: null,
	axisLine: function (a) {
		if (arguments.length === 1) {
			this._axisLine = a;
			return a;
		} else {
			return this._axisLine;
		}
	}

, 
	_majorLines: null,
	majorLines: function (a) {
		if (arguments.length === 1) {
			this._majorLines = a;
			return a;
		} else {
			return this._majorLines;
		}
	}

, 
	_minorLines: null,
	minorLines: function (a) {
		if (arguments.length === 1) {
			this._minorLines = a;
			return a;
		} else {
			return this._minorLines;
		}
	}

, 
	h: function () {
		var a = true;
		if (this.type() == "NumericYAxis" || this.type() == "CategoryYAxis") {
			a = false;
		}
		var c = this.labels().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			b.d(this.viewport(), a);
		}
		this.axisLine().scaleByViewport(this.viewport());
	}
,
	$type: new $.ig.Type('AxisVisualData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PrimitiveVisualDataList', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.PrimitiveVisualData.prototype.$type);

	}
, 
	containingTag: function (a) {
		var b = new $.ig.PrimitiveVisualDataList();
		for (var c = 0; c < this.count(); c++) {
			var d = this.__inner[c];
			for (var e = 0; e < d.tags().count(); e++) {
				if (d.tags().__inner[e] == a) {
					b.add(d);
					break;
				}
			}
		}
		return b;
	}
,
	$type: new $.ig.Type('PrimitiveVisualDataList', $.ig.List$1.prototype.$type.specialize($.ig.PrimitiveVisualData.prototype.$type))
}, true);

$.ig.util.defType('AxisLabelVisualDataList', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, $.ig.AxisLabelVisualData.prototype.$type);

	},
	$type: new $.ig.Type('AxisLabelVisualDataList', $.ig.List$1.prototype.$type.specialize($.ig.AxisLabelVisualData.prototype.$type))
}, true);

$.ig.util.defType('AxisLabelVisualData', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_labelValue: null,
	labelValue: function (a) {
		if (arguments.length === 1) {
			this._labelValue = a;
			return a;
		} else {
			return this._labelValue;
		}
	}

, 
	_labelPosition: null,
	labelPosition: function (a) {
		if (arguments.length === 1) {
			this._labelPosition = a;
			return a;
		} else {
			return this._labelPosition;
		}
	}

, 
	_appearance: null,
	appearance: function (a) {
		if (arguments.length === 1) {
			this._appearance = a;
			return a;
		} else {
			return this._appearance;
		}
	}

, 
	d: function (a, b) {
		if (b) {
			this.labelPosition((this.labelPosition() - a.left()) / a.width());

		} else {
			this.labelPosition((this.labelPosition() - a.top()) / a.height());
		}
	}
,
	$type: new $.ig.Type('AxisLabelVisualData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LabelAppearanceData', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_text: null,
	text: function (a) {
		if (arguments.length === 1) {
			this._text = a;
			return a;
		} else {
			return this._text;
		}
	}
,
	$type: new $.ig.Type('LabelAppearanceData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PrimitiveAppearanceData', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_stroke: null,
	stroke: function (a) {
		if (arguments.length === 1) {
			this._stroke = a;
			return a;
		} else {
			return this._stroke;
		}
	}

, 
	_fill: null,
	fill: function (a) {
		if (arguments.length === 1) {
			this._fill = a;
			return a;
		} else {
			return this._fill;
		}
	}

, 
	_strokeThickness: null,
	strokeThickness: function (a) {
		if (arguments.length === 1) {
			this._strokeThickness = a;
			return a;
		} else {
			return this._strokeThickness;
		}
	}

, 
	_visibility: null,
	visibility: function (a) {
		if (arguments.length === 1) {
			this._visibility = a;
			return a;
		} else {
			return this._visibility;
		}
	}

, 
	_opacity: null,
	opacity: function (a) {
		if (arguments.length === 1) {
			this._opacity = a;
			return a;
		} else {
			return this._opacity;
		}
	}

, 
	_canvasLeft: null,
	canvasLeft: function (a) {
		if (arguments.length === 1) {
			this._canvasLeft = a;
			return a;
		} else {
			return this._canvasLeft;
		}
	}

, 
	_canvasTop: null,
	canvasTop: function (a) {
		if (arguments.length === 1) {
			this._canvasTop = a;
			return a;
		} else {
			return this._canvasTop;
		}
	}

, 
	_canvaZIndex: null,
	canvaZIndex: function (a) {
		if (arguments.length === 1) {
			this._canvaZIndex = a;
			return a;
		} else {
			return this._canvaZIndex;
		}
	}

, 
	_dashArray: null,
	dashArray: function (a) {
		if (arguments.length === 1) {
			this._dashArray = a;
			return a;
		} else {
			return this._dashArray;
		}
	}

, 
	_dashCap: null,
	dashCap: function (a) {
		if (arguments.length === 1) {
			this._dashCap = a;
			return a;
		} else {
			return this._dashCap;
		}
	}

, 
	k: function (a) {
		this.canvasLeft((this.canvasLeft() - a.left()) / a.width());
		this.canvasTop((this.canvasTop() - a.top()) / a.height());
	}
,
	$type: new $.ig.Type('PrimitiveAppearanceData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('GetPointsSettings', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_ignoreFigureStartPoint: null,
	ignoreFigureStartPoint: function (a) {
		if (arguments.length === 1) {
			this._ignoreFigureStartPoint = a;
			return a;
		} else {
			return this._ignoreFigureStartPoint;
		}
	}
,
	$type: new $.ig.Type('GetPointsSettings', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PrimitiveVisualData', 'Object', {

		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.name(a);
				this.tags(new $.ig.ShapeTags());
				this.appearance(new $.ig.PrimitiveAppearanceData());
		}
, 
	_appearance: null,
	appearance: function (a) {
		if (arguments.length === 1) {
			this._appearance = a;
			return a;
		} else {
			return this._appearance;
		}
	}

, 
	_tags: null,
	tags: function (a) {
		if (arguments.length === 1) {
			this._tags = a;
			return a;
		} else {
			return this._tags;
		}
	}

, 
	_type: null,
	type: function () {
		return this._type;	}

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
	scaleByViewport: function (a) {
		this.appearance().k(a);
	}

, 
	getPoints: function (a) {
		var b = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
		this.getPointsOverride(b, a);
		return b;
	}

, 
	getPointsOverride: function (a, b) {
	}
,
	$type: new $.ig.Type('PrimitiveVisualData', $.ig.Object.prototype.$type)
}, true);


$.ig.util.defType('ShapeTags', 'List$1', {
	init: function () {

		$.ig.List$1.prototype.init.call(this, String);

	},
	$type: new $.ig.Type('ShapeTags', $.ig.List$1.prototype.$type.specialize(String))
}, true);




$.ig.util.defType('PathVisualData', 'PrimitiveVisualData', {

	type: function () {
			return "Path";
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


			$.ig.PrimitiveVisualData.prototype.init.call(this, "path1");
						this.data(new $.ig.List$1($.ig.GeometryData.prototype.$type, 0));
		}
, 
		init1: function (initNumber, a, b) {


			$.ig.PrimitiveVisualData.prototype.init.call(this, a);
						this.data($.ig.AppearanceHelper.prototype.fromGeometry(b.bp()));
				$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), b);
		}
, 
	_data: null,
	data: function (a) {
		if (arguments.length === 1) {
			this._data = a;
			return a;
		} else {
			return this._data;
		}
	}

, 
	scaleByViewport: function (a) {
		$.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, a);
		var c = this.data().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			b.scaleByViewport(a);
		}
	}

, 
	getPointsOverride: function (a, b) {
		for (var c = 0; c < this.data().count(); c++) {
			var d = this.data().__inner[c];
			d.getPointsOverride(a, b);
		}
	}
,
	$type: new $.ig.Type('PathVisualData', $.ig.PrimitiveVisualData.prototype.$type)
}, true);

$.ig.util.defType('GeometryData', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_type: null,
	type: function () {
		return this._type;	}

, 
	scaleByViewport: function (a) {
	}

, 
	getPointsOverride: function (a, b) {
	}
,
	$type: new $.ig.Type('GeometryData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('PathGeometryData', 'GeometryData', {

		init: function () {


			$.ig.GeometryData.prototype.init.call(this);
						this.figures(new $.ig.List$1($.ig.PathFigureData.prototype.$type, 0));
		}
, 
	type: function () {
			return "Path";
	}

, 
	_figures: null,
	figures: function (a) {
		if (arguments.length === 1) {
			this._figures = a;
			return a;
		} else {
			return this._figures;
		}
	}

, 
	scaleByViewport: function (a) {
		var c = this.figures().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			b.c(a);
		}
	}

, 
	getPointsOverride: function (a, b) {
		for (var c = 0; c < this.figures().count(); c++) {
			var d = this.figures().__inner[c];
			d.getPointsOverride(a, b);
		}
	}
,
	$type: new $.ig.Type('PathGeometryData', $.ig.GeometryData.prototype.$type)
}, true);

$.ig.util.defType('LineGeometryData', 'GeometryData', {
	init: function () {

		$.ig.GeometryData.prototype.init.call(this);

	}
, 
	type: function () {
			return "Line";
	}

, 
	_x1: null,
	x1: function (a) {
		if (arguments.length === 1) {
			this._x1 = a;
			return a;
		} else {
			return this._x1;
		}
	}

, 
	_y1: null,
	y1: function (a) {
		if (arguments.length === 1) {
			this._y1 = a;
			return a;
		} else {
			return this._y1;
		}
	}

, 
	_x2: null,
	x2: function (a) {
		if (arguments.length === 1) {
			this._x2 = a;
			return a;
		} else {
			return this._x2;
		}
	}

, 
	_y2: null,
	y2: function (a) {
		if (arguments.length === 1) {
			this._y2 = a;
			return a;
		} else {
			return this._y2;
		}
	}

, 
	scaleByViewport: function (a) {
		this.x1((this.x1() - a.left()) / a.width());
		this.y1((this.y1() - a.top()) / a.height());
		this.x2((this.x2() - a.left()) / a.width());
		this.y2((this.y2() - a.top()) / a.height());
	}

, 
	getPointsOverride: function (a, b) {
		var c = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		a.add(c);
		c.add({__x: this.x1(), __y: this.y1(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		c.add({__x: this.x2(), __y: this.y2(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}
,
	$type: new $.ig.Type('LineGeometryData', $.ig.GeometryData.prototype.$type)
}, true);

$.ig.util.defType('RectangleGeometryData', 'GeometryData', {
	init: function () {

		$.ig.GeometryData.prototype.init.call(this);

	}
, 
	type: function () {
			return "Rectangle";
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
	scaleByViewport: function (a) {
		this.x((this.x() - a.left()) / a.width());
		this.y((this.y() - a.top()) / a.height());
		this.width(this.width() / a.width());
		this.height(this.height() / a.height());
	}

, 
	getPointsOverride: function (a, b) {
		var c = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		a.add(c);
		c.add({__x: this.x(), __y: this.y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		c.add({__x: this.x() + this.width(), __y: this.y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		c.add({__x: this.x() + this.width(), __y: this.y() + this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		c.add({__x: this.x(), __y: this.y() + this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}
,
	$type: new $.ig.Type('RectangleGeometryData', $.ig.GeometryData.prototype.$type)
}, true);

$.ig.util.defType('EllipseGeometryData', 'GeometryData', {
	init: function () {

		$.ig.GeometryData.prototype.init.call(this);

	}
, 
	type: function () {
			return "Ellipse";
	}

, 
	_centerX: null,
	centerX: function (a) {
		if (arguments.length === 1) {
			this._centerX = a;
			return a;
		} else {
			return this._centerX;
		}
	}

, 
	_centerY: null,
	centerY: function (a) {
		if (arguments.length === 1) {
			this._centerY = a;
			return a;
		} else {
			return this._centerY;
		}
	}

, 
	_radiusX: null,
	radiusX: function (a) {
		if (arguments.length === 1) {
			this._radiusX = a;
			return a;
		} else {
			return this._radiusX;
		}
	}

, 
	_radiusY: null,
	radiusY: function (a) {
		if (arguments.length === 1) {
			this._radiusY = a;
			return a;
		} else {
			return this._radiusY;
		}
	}

, 
	scaleByViewport: function (a) {
		this.centerX((this.centerX() - a.left()) / a.width());
		this.centerX((this.centerY() - a.top()) / a.height());
		this.radiusX(this.radiusX() / a.width());
		this.radiusY(this.radiusY() / a.height());
	}

, 
	getPointsOverride: function (a, b) {
		var c = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		a.add(c);
		c.add({__x: this.centerX(), __y: this.centerY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}
,
	$type: new $.ig.Type('EllipseGeometryData', $.ig.GeometryData.prototype.$type)
}, true);

$.ig.util.defType('PathFigureData', 'Object', {

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
						this.segments(new $.ig.List$1($.ig.SegmentData.prototype.$type, 0));
				this.startPoint(new $.ig.Point(0));
		}
, 
		init1: function (initNumber, a) {


			$.ig.Object.prototype.init.call(this);
						this.segments(new $.ig.List$1($.ig.SegmentData.prototype.$type, 0));
				this.startPoint(a.__startPoint);
				for (var b = 0; b < a.__segments.count(); b++) {
					var c = a.__segments.__inner[b];
					var d = null;
					switch (c.a()) {
						case $.ig.PathSegmentType.prototype.line:
							d = new $.ig.LineSegmentData(1, c);
							break;
						case $.ig.PathSegmentType.prototype.polyLine:
							d = new $.ig.PolylineSegmentData(1, c);
							break;
						case $.ig.PathSegmentType.prototype.arc:
							d = new $.ig.ArcSegmentData(1, c);
							break;
					}
					this.segments().add(d);
				}
		}
, 
	_startPoint: null,
	startPoint: function (a) {
		if (arguments.length === 1) {
			this._startPoint = a;
			return a;
		} else {
			return this._startPoint;
		}
	}

, 
	_segments: null,
	segments: function (a) {
		if (arguments.length === 1) {
			this._segments = a;
			return a;
		} else {
			return this._segments;
		}
	}

, 
	c: function (a) {
		this.startPoint({__x: (this.startPoint().__x - a.left()) / a.width(), __y: (this.startPoint().__y - a.top()) / a.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		for (var b = 0; b < this.segments().count(); b++) {
			this.segments().__inner[b].scaleByViewport(a);
		}
	}

, 
	getPointsOverride: function (a, b) {
		var c = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		a.add(c);
		if (!b.ignoreFigureStartPoint()) {
			c.add({__x: this.startPoint().__x, __y: this.startPoint().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
		for (var d = 0; d < this.segments().count(); d++) {
			this.segments().__inner[d].getPointsOverride(c, b);
		}
	}
,
	$type: new $.ig.Type('PathFigureData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('SegmentData', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	_type: null,
	type: function () {
		return this._type;	}

, 
	scaleByViewport: function (a) {
	}

, 
	getPointsOverride: function (a, b) {
	}
,
	$type: new $.ig.Type('SegmentData', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('LineSegmentData', 'SegmentData', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.SegmentData.prototype.init.call(this);
						this.point(new $.ig.Point(0));
		}
, 
		init1: function (initNumber, a) {


			$.ig.SegmentData.prototype.init.call(this);
						this.point(a.d());
		}
, 
	type: function () {
			return "Line";
	}

, 
	_point: null,
	point: function (a) {
		if (arguments.length === 1) {
			this._point = a;
			return a;
		} else {
			return this._point;
		}
	}

, 
	scaleByViewport: function (a) {
		this.point({__x: (this.point().__x - a.left()) / a.width(), __y: (this.point().__y - a.top()) / a.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}

, 
	getPointsOverride: function (a, b) {
		a.add({__x: this.point().__x, __y: this.point().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}
,
	$type: new $.ig.Type('LineSegmentData', $.ig.SegmentData.prototype.$type)
}, true);

$.ig.util.defType('PolylineSegmentData', 'SegmentData', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.SegmentData.prototype.init.call(this);
						this.points(new $.ig.PointCollection(0));
		}
, 
		init1: function (initNumber, a) {


			$.ig.SegmentData.prototype.init.call(this);
						this.points(a.__points);
		}
, 
	type: function () {
			return "Polyline";
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
		for (var b = 0; b < this.points().count(); b++) {
			this.points().__inner[b] = {__x: (this.points().__inner[b].__x - a.left()) / a.width(), __y: (this.points().__inner[b].__y - a.top()) / a.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
		}
	}

, 
	getPointsOverride: function (a, b) {
		for (var c = 0; c < this.points().count(); c++) {
			a.add({__x: this.points().__inner[c].__x, __y: this.points().__inner[c].__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		}
	}
,
	$type: new $.ig.Type('PolylineSegmentData', $.ig.SegmentData.prototype.$type)
}, true);

$.ig.util.defType('ArcSegmentData', 'SegmentData', {

		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
				}
				return;
			}


			$.ig.SegmentData.prototype.init.call(this);
						this.point(new $.ig.Point(0));
				this.isLargeArc(false);
				this.isCounterClockwise(true);
				this.rotationAngle(0);
		}
, 
		init1: function (initNumber, a) {


			$.ig.SegmentData.prototype.init.call(this);
						this.point(a.h());
				this.isLargeArc(a.i());
				this.isCounterClockwise(a.j() == $.ig.SweepDirection.prototype.counterclockwise);
				this.sizeX(a.k().c());
				this.sizeY(a.k().d());
				this.rotationAngle(a.l());
		}
, 
	type: function () {
			return "Arc";
	}

, 
	_point: null,
	point: function (a) {
		if (arguments.length === 1) {
			this._point = a;
			return a;
		} else {
			return this._point;
		}
	}

, 
	_isLargeArc: null,
	isLargeArc: function (a) {
		if (arguments.length === 1) {
			this._isLargeArc = a;
			return a;
		} else {
			return this._isLargeArc;
		}
	}

, 
	_isCounterClockwise: null,
	isCounterClockwise: function (a) {
		if (arguments.length === 1) {
			this._isCounterClockwise = a;
			return a;
		} else {
			return this._isCounterClockwise;
		}
	}

, 
	_sizeX: null,
	sizeX: function (a) {
		if (arguments.length === 1) {
			this._sizeX = a;
			return a;
		} else {
			return this._sizeX;
		}
	}

, 
	_sizeY: null,
	sizeY: function (a) {
		if (arguments.length === 1) {
			this._sizeY = a;
			return a;
		} else {
			return this._sizeY;
		}
	}

, 
	_rotationAngle: null,
	rotationAngle: function (a) {
		if (arguments.length === 1) {
			this._rotationAngle = a;
			return a;
		} else {
			return this._rotationAngle;
		}
	}

, 
	scaleByViewport: function (a) {
		this.point({__x: (this.point().__x - a.left()) / a.width(), __y: (this.point().__y - a.top()) / a.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
		this.sizeX(this.sizeX() / a.width());
		this.sizeY(this.sizeY() / a.height());
	}

, 
	getPointsOverride: function (a, b) {
		a.add({__x: this.point().__x, __y: this.point().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
	}
,
	$type: new $.ig.Type('ArcSegmentData', $.ig.SegmentData.prototype.$type)
}, true);

$.ig.util.defType('AppearanceHelper', 'Object', {
	init: function () {

		$.ig.Object.prototype.init.call(this);

	}
, 
	fromBrush: function (a) {
		if (a == null) {
			return $.ig.Color.prototype.s(0, 0, 0, 0);
		}
		return a.color();
	}

, 
	getCanvasLeft: function (a) {
		return a.y();
	}

, 
	getCanvasTop: function (a) {
		return a.x();
	}

, 
	getCanvasZIndex: function (a) {
		return a.z();
	}

, 
	fromPathData: function (a) {
		return $.ig.AppearanceHelper.prototype.fromGeometry(a.bp());
	}

, 
	fromGeometry: function (a) {
		if (a == null) {
			return new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		}
		if ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, a) !== null) {
			var b = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
			var c = a;
			for (var d = 0; d < c.d().count(); d++) {
				var e = $.ig.AppearanceHelper.prototype.fromGeometry(c.d().__inner[d]);
				for (var f = 0; f < e.count(); f++) {
					b.add(e.__inner[f]);
				}
			}
			return b;
		} else if ($.ig.util.cast($.ig.PathGeometry.prototype.$type, a) !== null) {
			return $.ig.AppearanceHelper.prototype.d(a);
		} else if ($.ig.util.cast($.ig.LineGeometry.prototype.$type, a) !== null) {
			return $.ig.AppearanceHelper.prototype.c(a);
		} else if ($.ig.util.cast($.ig.RectangleGeometry.prototype.$type, a) !== null) {
			return $.ig.AppearanceHelper.prototype.b(a);
		} else if ($.ig.util.cast($.ig.EllipseGeometry.prototype.$type, a) !== null) {
			return $.ig.AppearanceHelper.prototype.a(a);

		} else {
			throw new $.ig.Error(1, "not supported");
		}
	}

, 
	a: function (a) {
		var b = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		var c = new $.ig.EllipseGeometryData();
		b.add(c);
		c.centerX(a.f().__x);
		c.centerY(a.f().__y);
		c.radiusX(a.g());
		c.radiusY(a.h());
		return b;
	}

, 
	b: function (a) {
		var b = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		var c = new $.ig.RectangleGeometryData();
		b.add(c);
		c.x(a.f().x());
		c.y(a.f().y());
		c.width(a.f().width());
		c.height(a.f().height());
		return b;
	}

, 
	c: function (a) {
		var b = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		var c = new $.ig.LineGeometryData();
		b.add(c);
		c.x1(a.e().__x);
		c.y1(a.e().__y);
		c.x2(a.f().__x);
		c.y2(a.f().__y);
		return b;
	}

, 
	d: function (a) {
		var b = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		var c = new $.ig.PathGeometryData();
		b.add(c);
		for (var d = 0; d < a.d().count(); d++) {
			var e = a.d().__inner[d];
			var f = new $.ig.PathFigureData(1, e);
			c.figures().add(f);
		}
		return b;
	}

, 
	getShapeAppearance: function (a, b) {
		a.stroke($.ig.AppearanceHelper.prototype.fromBrush(b.__stroke));
		a.fill($.ig.AppearanceHelper.prototype.fromBrush(b.__fill));
		a.strokeThickness(b.a7());
		a.dashArray(null);
		if (b.a8() != null) {
			a.dashArray(b.a8().asArrayList());
		}
		a.dashCap(b.a9());
		a.visibility(b.__visibility);
		a.opacity(b.__opacity);
		a.canvasLeft($.ig.AppearanceHelper.prototype.getCanvasLeft(b));
		a.canvasTop($.ig.AppearanceHelper.prototype.getCanvasTop(b));
		a.canvaZIndex($.ig.AppearanceHelper.prototype.getCanvasZIndex(b));
	}

, 
	fromTextElement: function (a) {
		var b = new $.ig.LabelAppearanceData();
		var c = a;
		b.text(c.a5());
		return b;
	}
,
	$type: new $.ig.Type('AppearanceHelper', $.ig.Object.prototype.$type)
}, true);

$.ig.util.defType('IDetectsCollisions', 'Object', {

		$type: new $.ig.Type('IDetectsCollisions', null)
}, true);





$.ig.util.defType('Pool$1', 'Object', {
	$t: null
, 
		init: function ($t) {


			this.$t = $t
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
						this.h(new $.ig.List$1(this.$t, 0));
				this.i(new $.ig.List$1(this.$t, 0));
		}
, 
	_create: null,
	create: function (a) {
		if (arguments.length === 1) {
			this._create = a;
			return a;
		} else {
			return this._create;
		}
	}

, 
	_disactivate: null,
	disactivate: function (a) {
		if (arguments.length === 1) {
			this._disactivate = a;
			return a;
		} else {
			return this._disactivate;
		}
	}

, 
	_activate: null,
	activate: function (a) {
		if (arguments.length === 1) {
			this._activate = a;
			return a;
		} else {
			return this._activate;
		}
	}

, 
	_destroy: null,
	destroy: function (a) {
		if (arguments.length === 1) {
			this._destroy = a;
			return a;
		} else {
			return this._destroy;
		}
	}

, 
	item: function (b) {
			if (b >= this.g()) {
				this.g(b + 1);
			}
			return this.h().__inner[b];
	}

, 
	clear: function () {
		this.g(0);
	}

, 
	g: function (a) {
		if (arguments.length === 1) {
			var b = this.h().count();
			while (a > this.h().count() && this.i().count() > 0) {
				var c = this.i().__inner[this.i().count() - 1];
				this.h().add(c);
				this.i().removeAt(this.i().count() - 1);
				if (this.activate() != null) {
					this.activate()(c);
				}
			}
			while (a > this.h().count() && this.i().count() == 0) {
				var d = this.create()();
				this.h().add(d);
				if (this.activate() != null) {
					this.activate()(d);
				}
			}
			var e = 2;
			while (b != 0) {
				b >>= 1;
				e <<= 1;
			}
			while (a < this.h().count()) {
				var f = this.h().__inner[this.h().count() - 1];
				this.h().removeAt(this.h().count() - 1);
				if (this.disactivate() != null) {
					this.disactivate()(f);
				}
				if (this.i().count() < e) {
					this.i().add(f);

				} else {
					if (this.destroy() != null) {
						this.destroy()(f);
					}
				}
			}
			if (e < this.i().count()) {
				for (var g = e; g < this.i().count(); ++g) {
					this.destroy()(this.i().__inner[g]);
				}
				this.i().q(e, this.i().count() - e);
			}
			return a;
		} else {
			return this.h().count();
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
	p: function (a) {
		var c = this.i().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			a(b);
		}
		var e = this.h().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			a(d);
		}
	}
,
	$type: new $.ig.Type('Pool$1', $.ig.Object.prototype.$type, [$.ig.IIndexedPool$1.prototype.$type.specialize(0)])
}, true);


$.ig.util.defType('HashPool$2', 'Object', {
	$tKey: null, 
	$tValue: null
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
		init: function ($tKey, $tValue) {


			this.$tKey = $tKey
			this.$tValue = $tValue
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
			$.ig.Object.prototype.init.call(this);
						this.g(new $.ig.List$1(this.$tValue, 0));
				this.h(new $.ig.Dictionary$2(this.$tKey, this.$tValue, 0));
		}
, 
	_create: null,
	create: function (a) {
		if (arguments.length === 1) {
			this._create = a;
			return a;
		} else {
			return this._create;
		}
	}

, 
	_disactivate: null,
	disactivate: function (a) {
		if (arguments.length === 1) {
			this._disactivate = a;
			return a;
		} else {
			return this._disactivate;
		}
	}

, 
	_activate: null,
	activate: function (a) {
		if (arguments.length === 1) {
			this._activate = a;
			return a;
		} else {
			return this._activate;
		}
	}

, 
	_destroy: null,
	destroy: function (a) {
		if (arguments.length === 1) {
			this._destroy = a;
			return a;
		} else {
			return this._destroy;
		}
	}

, 
	item: function (b) {
			var $self = this;
			var c;
			if (!(function () { var $ret = $self.h().tryGetValue(b, c); c = $ret.value; return $ret.ret; }())) {
				if (this.g().count() > 0) {
					c = this.g().__inner[this.g().count() - 1];
					this.g().removeAt(this.g().count() - 1);

				} else {
					c = this.create()();
				}
				if (this.activate() != null) {
					this.activate()(c);
				}
				this.h().item(b, c);
			}
			return c;
	}

, 
	i: function () {
			return this.h().keys();
	}

, 
	t: function (a) {
		return this.h().containsKey(a);
	}

, 
	u: function (a) {
		var $self = this;
		var b;
		if ((function () { var $ret = $self.h().tryGetValue(a, b); b = $ret.value; return $ret.ret; }())) {
			this.h().remove(a);
			if (this.disactivate() != null) {
				this.disactivate()(b);
			}
			this.g().add(b);
			var c = this.h().count();
			var d = 2;
			while (c != 0) {
				c >>= 1;
				d <<= 1;
			}
			if (d < this.g().count()) {
				for (var e = d; e < this.g().count(); ++e) {
					this.destroy()(this.g().item(e));
				}
				this.g().q(d, this.g().count() - d);
			}
		}
	}

, 
	clear: function () {
		var a = new $.ig.List$1(this.$tKey, 0);
		var c = this.h().keys().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			a.add(b);
		}
		var e = a.getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			this.u(d);
		}
	}

, 
	j: function () {
			return this.h().count();
	}

, 
	w: function (a) {
		var c = this.g().getEnumerator();
		while (c.moveNext()) {
			var b = c.current();
			a(b);
		}
		var e = this.h().values().getEnumerator();
		while (e.moveNext()) {
			var d = e.current();
			a(d);
		}
	}
,
	$type: new $.ig.Type('HashPool$2', $.ig.Object.prototype.$type, [$.ig.IHashPool$2.prototype.$type.specialize(0, 1)])
}, true);

$.ig.util.defType('SafeEnumerable', 'Object', {
	a: null
, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = a;
		}
, 
	b: function (a) {
		if (Number.isInfinity(a) || isNaN(a)) {
			return 0;
		}
		return a;
	}

, 
	c: function () {
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
							if (this.$this.a == null) {
								this.$state = 2;
							}
							else {
								this.$state = 4;
							}
							break;

						case 2:

							this.$state = -2
							return false;
						case 3:
							this.$state = 4;
							break;

						case 4:
							this.$state = 5;
							break;
						case 5:
							this.$b = this.$this.a.getEnumerator();
							this.$state = 8;
							break;
						case 6:
							this.$a = this.$b.current();
							this.$current =  this.$this.b(this.$a);
							this.$state = 7
							return true;
						case 7:
							this.$state = 8;
							break;
						case 8:
							if (this.$b.moveNext()) {
								this.$state = 6;
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
		}; } () };
		return new $.ig.GenericEnumerable$1(Number, $iter);
	}

, 
	getEnumerator: function () {
		return this.c().getEnumerator();
	}
,
	$type: new $.ig.Type('SafeEnumerable', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number)])
}, true);

$.ig.util.defType('SafeReadOnlyDoubleCollection', 'Object', {
	a: null
, 
	b: function (a) {
		if (Number.isInfinity(a) || isNaN(a)) {
			return 0;
		}
		return a;
	}

, 
		init: function (a) {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.ReadOnlyCollection$1(Number, 1, a);
		}
, 
	indexOf: function (a) {
		return this.a.indexOf(a);
	}

, 
	insert: function (a, b) {
		($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).insert(a, b);
	}

, 
	removeAt: function (a) {
		($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).removeAt(a);
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).item(b, a);
			return a;
		} else {
			return this.b(this.a.item(b));
		}
	}

, 
	add: function (a) {
		($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).add(a);
	}

, 
	clear: function () {
		($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).clear();
	}

, 
	contains: function (a) {
		return this.a.contains(a);
	}

, 
	c: function (a, b) {
		for (var c = b; c < a.length; c++) {
			a[c] = this.item(c);
		}
	}

, 
	count: function () {
			return this.a.count();
	}

, 
	isReadOnly: function () {
			return ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).isReadOnly();
	}

, 
	remove: function (a) {
		return ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).remove(a);
	}

, 
	getEnumerator: function () {
		return new $.ig.SafeEnumerable(this.a).getEnumerator();
	}
,
	$type: new $.ig.Type('SafeReadOnlyDoubleCollection', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(Number)])
}, true);

$.ig.util.defType('SafeSortedReadOnlyDoubleCollection', 'Object', {
	a: null, 
	b: null
, 
	c: function (a) {
		if (Number.isInfinity(a) || isNaN(a)) {
			return 0;
		}
		return a;
	}

, 
		init: function (a, b) {


			$.ig.Object.prototype.init.call(this);
						this.a = new $.ig.SafeReadOnlyDoubleCollection(a);
				this.b = b;
		}
, 
	indexOf: function (a) {
		var b = this.a.indexOf(a);
		return this.b.indexOf(b);
	}

, 
	insert: function (a, b) {
		($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).insert(a, b);
	}

, 
	removeAt: function (a) {
		($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).removeAt(a);
	}

, 
	item: function (b, a) {
		if (arguments.length === 2) {
			($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).item(b, a);
			return a;
		} else {
			var c = this.b.item(b);
			return this.c(this.a.item(c));
		}
	}

, 
	add: function (a) {
		($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).add(a);
	}

, 
	clear: function () {
		($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).clear();
	}

, 
	contains: function (a) {
		return this.a.contains(a);
	}

, 
	d: function (a, b) {
		for (var c = b; c < a.length; c++) {
			a[c] = this.item(c);
		}
	}

, 
	count: function () {
			return this.a.count();
	}

, 
	isReadOnly: function () {
			return ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).isReadOnly();
	}

, 
	remove: function (a) {
		return ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).remove(a);
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
							if (this.$a < this.$this.a.count()) {
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
		return new $.ig.GenericEnumerator$1(Number, $iter());
	}
,
	$type: new $.ig.Type('SafeSortedReadOnlyDoubleCollection', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(Number)])
}, true);

$.ig.WindowResponse.prototype.deferred = 0;
$.ig.WindowResponse.prototype.immediate = 1;
$.ig.MarkerType.prototype.unset = 0;
$.ig.MarkerType.prototype.none = 1;
$.ig.MarkerType.prototype.automatic = 2;
$.ig.MarkerType.prototype.circle = 3;
$.ig.MarkerType.prototype.triangle = 4;
$.ig.MarkerType.prototype.pyramid = 5;
$.ig.MarkerType.prototype.square = 6;
$.ig.MarkerType.prototype.diamond = 7;
$.ig.MarkerType.prototype.pentagon = 8;
$.ig.MarkerType.prototype.hexagon = 9;
$.ig.MarkerType.prototype.tetragram = 10;
$.ig.MarkerType.prototype.pentagram = 11;
$.ig.MarkerType.prototype.hexagram = 12;
$.ig.GridMode.prototype.none = 0;
$.ig.GridMode.prototype.beforeSeries = 1;
$.ig.GridMode.prototype.behindSeries = 2;
$.ig.AxisOrientation.prototype.horizontal = 0;
$.ig.AxisOrientation.prototype.vertical = 1;
$.ig.AxisOrientation.prototype.angular = 2;
$.ig.AxisOrientation.prototype.radial = 3;
$.ig.CategoryMode.prototype.mode0 = 0;
$.ig.CategoryMode.prototype.mode1 = 1;
$.ig.CategoryMode.prototype.mode2 = 2;
$.ig.AxisLabelsLocation.prototype.outsideTop = 0;
$.ig.AxisLabelsLocation.prototype.outsideBottom = 1;
$.ig.AxisLabelsLocation.prototype.outsideLeft = 2;
$.ig.AxisLabelsLocation.prototype.outsideRight = 3;
$.ig.AxisLabelsLocation.prototype.insideTop = 4;
$.ig.AxisLabelsLocation.prototype.insideBottom = 5;
$.ig.AxisLabelsLocation.prototype.insideLeft = 6;
$.ig.AxisLabelsLocation.prototype.insideRight = 7;
$.ig.ChartContentType.prototype.series = 0;
$.ig.ChartContentType.prototype.axis = 1;
$.ig.ChartContentType.prototype.background = 2;
$.ig.NumericScaleMode.prototype.linear = 0;
$.ig.NumericScaleMode.prototype.logarithmic = 1;
$.ig.AxisLabelPanelBaseView.prototype.a = 4;
$.ig.AxisLabelPanelBase.prototype.a6 = "Extent";
$.ig.AxisLabelPanelBase.prototype.a8 = $.ig.DependencyProperty.prototype.l($.ig.AxisLabelPanelBase.prototype.a6, Number, $.ig.AxisLabelPanelBase.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (a, b) {
}));
$.ig.Axis.prototype.a7 = "FormatLabel";
$.ig.Axis.prototype.a8 = "RootCanvas";
$.ig.Axis.prototype.a9 = "FastItemsSourceProvider";
$.ig.Axis.prototype.ba = "SeriesViewer";
$.ig.Axis.prototype.bb = "Stroke";
$.ig.Axis.prototype.bc = "StrokeThickness";
$.ig.Axis.prototype.bd = "StrokeDashArray";
$.ig.Axis.prototype.be = "Strip";
$.ig.Axis.prototype.bf = "MajorStroke";
$.ig.Axis.prototype.bg = "MajorStrokeThickness";
$.ig.Axis.prototype.bh = "MajorStrokeDashArray";
$.ig.Axis.prototype.bi = "MinorStroke";
$.ig.Axis.prototype.bj = "MinorStrokeThickness";
$.ig.Axis.prototype.bk = "MinorStrokeDashArray";
$.ig.Axis.prototype.bl = "IsDisabled";
$.ig.Axis.prototype.bm = "IsInverted";
$.ig.Axis.prototype.bn = "LabelSettings";
$.ig.Axis.prototype.bo = "LabelPanelStyle";
$.ig.Axis.prototype.bp = "CrossingAxis";
$.ig.Axis.prototype.bq = "CrossingValue";
$.ig.Axis.prototype.br = "Label";
$.ig.Axis.prototype.formatLabelProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.a7, $.ig.Func$2.prototype.$type.specialize($.ig.Object.prototype.$type, String), $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.a7, b.f(), b.e());
}));
$.ig.Axis.prototype.strokeProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bb, $.ig.Brush.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bb, b.f(), b.e());
}));
$.ig.Axis.prototype.strokeThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bc, Number, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bc, b.f(), b.e());
}));
$.ig.Axis.prototype.strokeDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bd, $.ig.DoubleCollection.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bd, b.f(), b.e());
}));
$.ig.Axis.prototype.stripProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.be, $.ig.Brush.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.be, b.f(), b.e());
}));
$.ig.Axis.prototype.majorStrokeProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bf, $.ig.Brush.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bf, b.f(), b.e());
}));
$.ig.Axis.prototype.majorStrokeThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bg, Number, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bg, b.f(), b.e());
}));
$.ig.Axis.prototype.majorStrokeDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bh, $.ig.DoubleCollection.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bh, b.f(), b.e());
}));
$.ig.Axis.prototype.minorStrokeProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bi, $.ig.Brush.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bi, b.f(), b.e());
}));
$.ig.Axis.prototype.minorStrokeThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bj, Number, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bj, b.f(), b.e());
}));
$.ig.Axis.prototype.minorStrokeDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bk, $.ig.DoubleCollection.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bk, b.f(), b.e());
}));
$.ig.Axis.prototype.isDisabledProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bl, $.ig.Boolean.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bl, b.f(), b.e());
}));
$.ig.Axis.prototype.isInvertedProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bm, $.ig.Boolean.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bm, b.f(), b.e());
}));
$.ig.Axis.prototype.labelSettingsProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bn, $.ig.AxisLabelSettings.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bn, b.f(), b.e());
}));
$.ig.Axis.prototype.labelPanelStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bo, $.ig.Style.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bo, b.f(), b.e());
}));
$.ig.Axis.prototype.crossingAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bp, $.ig.Axis.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bp, b.f(), b.e());
}));
$.ig.Axis.prototype.crossingValueProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bq, $.ig.Object.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.bq, b.f(), b.e());
}));
$.ig.Axis.prototype.labelProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.br, $.ig.Object.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.Axis.prototype.$type, a)).ez($.ig.Axis.prototype.br, b.f(), b.e());
}));
$.ig.AxisLabelSettings.prototype.a = "TextStyle";
$.ig.AxisLabelSettings.prototype.b = "TextColor";
$.ig.AxisLabelSettings.prototype.c = "Location";
$.ig.AxisLabelSettings.prototype.d = "Visibility";
$.ig.AxisLabelSettings.prototype.e = "Angle";
$.ig.AxisLabelSettings.prototype.f = "Extent";
$.ig.AxisLabelSettings.prototype.extentPropertyDefault = 50;
$.ig.Snapper.prototype.a = 7;
$.ig.CategoryAxisBase.prototype.f6 = "FastItemsSource";
$.ig.CategoryAxisBase.prototype.f7 = "ItemsSource";
$.ig.CategoryAxisBase.prototype.f8 = "ItemsCount";
$.ig.CategoryAxisBase.prototype.f9 = "CategoryMode";
$.ig.CategoryAxisBase.prototype.ga = "Gap";
$.ig.CategoryAxisBase.prototype.gb = "Overlap";
$.ig.CategoryAxisBase.prototype.gc = "GroupCount";
$.ig.CategoryAxisBase.prototype.fastItemsSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAxisBase.prototype.f6, $.ig.FastItemsSource.prototype.$type, $.ig.CategoryAxisBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a)).ez($.ig.CategoryAxisBase.prototype.f6, b.f(), b.e());
}));
$.ig.CategoryAxisBase.prototype.itemsSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAxisBase.prototype.f7, $.ig.IEnumerable.prototype.$type, $.ig.CategoryAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	var c = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a);
	if (c.c0() != null) {
		c.c0().releaseFastItemsSource(b.f());
	}
	($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a)).ez($.ig.CategoryAxisBase.prototype.f7, b.f(), b.e());
}));
$.ig.CategoryAxisBase.prototype.gapProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAxisBase.prototype.ga, Number, $.ig.CategoryAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, 0.2, function (a, b) {
	($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a)).ez($.ig.CategoryAxisBase.prototype.ga, b.f(), b.e());
}));
$.ig.CategoryAxisBase.prototype.overlapProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAxisBase.prototype.gb, Number, $.ig.CategoryAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, a)).ez($.ig.CategoryAxisBase.prototype.gb, b.f(), b.e());
}));
$.ig.CategoryYAxis.prototype.hc = "Interval";
$.ig.CategoryYAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryYAxis.prototype.hc, Number, $.ig.CategoryYAxis.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.CategoryYAxis.prototype.$type, a)).ez($.ig.CategoryYAxis.prototype.hc, b.f(), b.e());
	($.ig.util.cast($.ig.CategoryYAxis.prototype.$type, a)).es(false);
}));
$.ig.NumericAxisBase.prototype.f6 = "MinimumValue";
$.ig.NumericAxisBase.prototype.f7 = "ActualMinimumValue";
$.ig.NumericAxisBase.prototype.f8 = "MaximumValue";
$.ig.NumericAxisBase.prototype.f9 = "ActualMaximumValue";
$.ig.NumericAxisBase.prototype.ga = "Interval";
$.ig.NumericAxisBase.prototype.gb = "ReferenceValue";
$.ig.NumericAxisBase.prototype.gc = "IsLogarithmic";
$.ig.NumericAxisBase.prototype.gd = "ActualIsLogarithmic";
$.ig.NumericAxisBase.prototype.ge = "LogarithmBase";
$.ig.NumericAxisBase.prototype.gf = "TickmarkValues";
$.ig.NumericAxisBase.prototype.gg = "ActualTickmarkValues";
$.ig.NumericAxisBase.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.f6, Number, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a)).ez($.ig.NumericAxisBase.prototype.f6, b.f(), b.e());
}));
$.ig.NumericAxisBase.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.f8, Number, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a)).ez($.ig.NumericAxisBase.prototype.f8, b.f(), b.e());
}));
$.ig.NumericAxisBase.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.ga, Number, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a)).ez($.ig.NumericAxisBase.prototype.ga, b.f(), b.e());
}));
$.ig.NumericAxisBase.prototype.referenceValueProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.gb, Number, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a)).ez($.ig.NumericAxisBase.prototype.gb, b.f(), b.e());
}));
$.ig.NumericAxisBase.prototype.isLogarithmicProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.gc, $.ig.Boolean.prototype.$type, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a)).ez($.ig.NumericAxisBase.prototype.gc, b.f(), b.e());
}));
$.ig.NumericAxisBase.prototype.logarithmBaseProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.ge, $.ig.Number.prototype.$type, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (a, b) {
	($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a)).ez($.ig.NumericAxisBase.prototype.ge, b.f(), b.e());
}));
$.ig.NumericAxisBase.prototype.tickmarkValuesProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.gf, $.ig.TickmarkValues.prototype.$type, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, a)).ez($.ig.NumericAxisBase.prototype.gf, b.f(), b.e());
}));
$.ig.StraightNumericAxisBase.prototype.h2 = "ScaleMode";
$.ig.StraightNumericAxisBase.prototype.h3 = "Scaler";
$.ig.StraightNumericAxisBase.prototype.h4 = "ActualScaler";
$.ig.StraightNumericAxisBase.prototype.scaleModeProperty = $.ig.DependencyProperty.prototype.l($.ig.StraightNumericAxisBase.prototype.h2, $.ig.NumericScaleMode.prototype.$type, $.ig.StraightNumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.NumericScaleMode.prototype.linear, function (a, b) {
	($.ig.util.cast($.ig.StraightNumericAxisBase.prototype.$type, a)).ez($.ig.StraightNumericAxisBase.prototype.h2, b.f(), b.e());
}));
$.ig.StraightNumericAxisBase.prototype.scalerProperty = $.ig.DependencyProperty.prototype.l($.ig.StraightNumericAxisBase.prototype.h3, $.ig.NumericScaler.prototype.$type, $.ig.StraightNumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.StraightNumericAxisBase.prototype.ie));
$.ig.NumericScaler.prototype.e = "ActualMinimumValue";
$.ig.NumericScaler.prototype.f = "ActualMaximumValue";
$.ig.NumericScaler.prototype.g = $.ig.DependencyProperty.prototype.l($.ig.NumericScaler.prototype.e, Number, $.ig.NumericScaler.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.NumericScaler.prototype.$type, a)).x($.ig.NumericScaler.prototype.e, b.f(), b.e());
}));
$.ig.NumericScaler.prototype.h = $.ig.DependencyProperty.prototype.l($.ig.NumericScaler.prototype.f, Number, $.ig.NumericScaler.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.NumericScaler.prototype.$type, a)).x($.ig.NumericScaler.prototype.f, b.f(), b.e());
}));
$.ig.LogarithmicTickmarkValues.prototype.ab = 4.94065645841247E-324;
$.ig.LogarithmicTickmarkValues.prototype.ac = "LogarithmBase";
$.ig.LogarithmicTickmarkValues.prototype.ad = $.ig.DependencyProperty.prototype.l($.ig.LogarithmicTickmarkValues.prototype.ac, $.ig.Number.prototype.$type, $.ig.LogarithmicTickmarkValues.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (a, b) {
}));
$.ig.Series.prototype.a7 = "MouseOver";
$.ig.Series.prototype.a8 = "Normal";
$.ig.Series.prototype.a9 = "VisibilityProxy";
$.ig.Series.prototype.ba = "RootCanvas";
$.ig.Series.prototype.bb = "SyncLink";
$.ig.Series.prototype.bc = "SeriesViewer";
$.ig.Series.prototype.bd = "ItemsSource";
$.ig.Series.prototype.be = "FastItemsSource";
$.ig.Series.prototype.bf = "LegendItem";
$.ig.Series.prototype.bg = "ActualLegend";
$.ig.Series.prototype.bh = "LegendItemVisibility";
$.ig.Series.prototype.bi = "LegendItemBadgeTemplate";
$.ig.Series.prototype.bj = "LegendItemTemplate";
$.ig.Series.prototype.bk = "DiscreteLegendItemTemplate";
$.ig.Series.prototype.bl = "Index";
$.ig.Series.prototype.bm = "TransitionEasingFunction";
$.ig.Series.prototype.bn = "TransitionDuration";
$.ig.Series.prototype.bo = "TransitionProgress";
$.ig.Series.prototype.bp = "Resolution";
$.ig.Series.prototype.bq = "Title";
$.ig.Series.prototype.br = "Brush";
$.ig.Series.prototype.bs = "ActualBrush";
$.ig.Series.prototype.bt = "Outline";
$.ig.Series.prototype.bu = "ActualOutline";
$.ig.Series.prototype.bv = "LineJoin";
$.ig.Series.prototype.bw = "MiterLimit";
$.ig.Series.prototype.bx = "Thickness";
$.ig.Series.prototype.by = "DashCap";
$.ig.Series.prototype.bz = "DashArray";
$.ig.Series.prototype.b0 = "ToolTip";
$.ig.Series.prototype.b1 = "StartCap";
$.ig.Series.prototype.b2 = "EndCap";
$.ig.Series.prototype.b3 = "TrendLineDashArray";
$.ig.Series.prototype.b4 = "TrendLineType";
$.ig.Series.prototype.b5 = "TrendLinePeriod";
$.ig.Series.prototype.b6 = "TrendLineBrush";
$.ig.Series.prototype.b7 = "ActualTrendLineBrush";
$.ig.Series.prototype.b8 = "TrendLineThickness";
$.ig.Series.prototype.b9 = "TrendLineDashCap";
$.ig.Series.prototype.ca = "TrendLineZIndex";
$.ig.Series.prototype.cb = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.a9, $.ig.Visibility.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	(a).ej($.ig.Series.prototype.a9, b.f(), b.e());
}));
$.ig.Series.prototype.itemsSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bd, $.ig.IEnumerable.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	var c = $.ig.util.cast($.ig.Series.prototype.$type, a);
	if (c.syncLink() != null) {
		($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, c.syncLink())).releaseFastItemsSource(b.f());
	}
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bd, b.f(), b.e());
}));
$.ig.Series.prototype.ck = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.be, $.ig.FastItemsSource.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.be, b.f(), b.e());
}));
$.ig.Series.prototype.legendProperty = $.ig.DependencyProperty.prototype.l("Legend", $.ig.LegendBase.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	var c = $.ig.util.cast($.ig.Series.prototype.$type, a);
	c.ej($.ig.XamDataChart.prototype.a8, b.f(), b.e());
}));
$.ig.Series.prototype.legendItemVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bh, $.ig.Visibility.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bh, b.f(), b.e());
}));
$.ig.Series.prototype.legendItemBadgeTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bi, $.ig.DataTemplate.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	var c = $.ig.util.cast($.ig.Series.prototype.$type, a);
	c.ej($.ig.Series.prototype.bi, b.f(), b.e());
	c.legendItem(c.ff());
}));
$.ig.Series.prototype.legendItemTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bj, $.ig.DataTemplate.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	var c = $.ig.util.cast($.ig.Series.prototype.$type, a);
	c.ej($.ig.Series.prototype.bj, b.f(), b.e());
	c.legendItem(c.ff());
}));
$.ig.Series.prototype.discreteLegendItemTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bk, $.ig.DataTemplate.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	var c = $.ig.util.cast($.ig.Series.prototype.$type, a);
	c.ej($.ig.Series.prototype.bk, b.f(), b.e());
}));
$.ig.Series.prototype.indexProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bl, $.ig.Number.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, -1, function (a, b) {
	var c = $.ig.util.cast($.ig.Series.prototype.$type, a);
	c.ej($.ig.Series.prototype.bl, b.f(), b.e());
	c.legendItem(c.ff());
}));
$.ig.Series.prototype.transitionDurationProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bn, $.ig.Number.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bn, b.f(), b.e());
}));
$.ig.Series.prototype.co = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bo, Number, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bo, b.f(), b.e());
}));
$.ig.Series.prototype.resolutionProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bp, Number, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bp, b.f(), b.e());
}));
$.ig.Series.prototype.titleProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bq, $.ig.Object.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, "Series Title", function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bq, b.f(), b.e());
}));
$.ig.Series.prototype.brushProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.br, $.ig.Brush.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.br, b.f(), b.e());
}));
$.ig.Series.prototype.actualBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bs, $.ig.Brush.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bs, b.f(), b.e());
}));
$.ig.Series.prototype.outlineProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bt, $.ig.Brush.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bt, b.f(), b.e());
}));
$.ig.Series.prototype.actualOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bu, $.ig.Brush.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bu, b.f(), b.e());
}));
$.ig.Series.prototype.miterLimitProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bw, Number, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bw, b.f(), b.e());
}));
$.ig.Series.prototype.thicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bx, Number, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bx, b.f(), b.e());
}));
$.ig.Series.prototype.dashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.by, $.ig.PenLineCap.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.by, b.f(), b.e());
}));
$.ig.Series.prototype.dashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bz, $.ig.DoubleCollection.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.bz, b.f(), b.e());
}));
$.ig.Series.prototype.toolTipProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.b0, $.ig.Object.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.b0, b.f(), b.e());
}));
$.ig.Series.prototype.startCapProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.b1, $.ig.PenLineCap.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.PenLineCap.prototype.round, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.b1, b.f(), b.e());
}));
$.ig.Series.prototype.endCapProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.b2, $.ig.PenLineCap.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.PenLineCap.prototype.round, function (a, b) {
	($.ig.util.cast($.ig.Series.prototype.$type, a)).ej($.ig.Series.prototype.b2, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.hp = "MarkerType";
$.ig.MarkerSeries.prototype.hq = "MarkerTemplate";
$.ig.MarkerSeries.prototype.hr = "ActualMarkerTemplate";
$.ig.MarkerSeries.prototype.hs = "MarkerBrush";
$.ig.MarkerSeries.prototype.ht = "ActualMarkerBrush";
$.ig.MarkerSeries.prototype.hu = "MarkerOutline";
$.ig.MarkerSeries.prototype.hv = "ActualMarkerOutline";
$.ig.MarkerSeries.prototype.hw = "MarkerStyle";
$.ig.MarkerSeries.prototype.hx = "UseLightweightMarkers";
$.ig.MarkerSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hp, $.ig.MarkerType.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a)).ej($.ig.MarkerSeries.prototype.hp, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hq, $.ig.DataTemplate.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a)).ej($.ig.MarkerSeries.prototype.hq, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.actualMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hr, $.ig.DataTemplate.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a)).ej($.ig.MarkerSeries.prototype.hr, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.nullMarkerTemplate = new $.ig.DataTemplate();
$.ig.MarkerSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hs, $.ig.Brush.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	var c = ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a));
	c.ej($.ig.MarkerSeries.prototype.hs, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.actualMarkerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.ht, $.ig.Brush.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a)).ej($.ig.MarkerSeries.prototype.ht, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hu, $.ig.Brush.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a)).ej($.ig.MarkerSeries.prototype.hu, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.actualMarkerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hv, $.ig.Brush.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a)).ej($.ig.MarkerSeries.prototype.hv, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.markerStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hw, $.ig.Style.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a)).ej($.ig.MarkerSeries.prototype.hw, b.f(), b.e());
}));
$.ig.MarkerSeries.prototype.useLightweightMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hx, $.ig.Boolean.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.MarkerSeries.prototype.$type, a)).ej($.ig.MarkerSeries.prototype.hx, b.f(), b.e());
}));
$.ig.SeriesView.prototype.a = 1000;
$.ig.SeriesView.prototype.b = 3;
$.ig.CategorySeries.prototype.iq = "ErrorBarSettings";
$.ig.SeriesViewer.prototype.a7 = "CrosshairPoint";
$.ig.SeriesViewer.prototype.a8 = "Legend";
$.ig.SeriesViewer.prototype.a9 = "AnimateSeriesWhenAxisRangeChanges";
$.ig.SeriesViewer.prototype.ba = "WindowRect";
$.ig.SeriesViewer.prototype.bb = "HorizontalZoomable";
$.ig.SeriesViewer.prototype.bc = "HorizontalZoombarVisibility";
$.ig.SeriesViewer.prototype.bd = "VerticalZoomable";
$.ig.SeriesViewer.prototype.be = "VerticalZoombarVisibility";
$.ig.SeriesViewer.prototype.bf = 10;
$.ig.SeriesViewer.prototype.bg = 2;
$.ig.SeriesViewer.prototype.bh = "WindowResponse";
$.ig.SeriesViewer.prototype.bi = "WindowRectMinWidth";
$.ig.SeriesViewer.prototype.bj = "ActualSyncLink";
$.ig.SeriesViewer.prototype.bk = "OverviewPlusDetailPaneVisibility";
$.ig.SeriesViewer.prototype.bl = "CrosshairVisibility";
$.ig.SeriesViewer.prototype.bm = "IsDragCrosshairEnabled";
$.ig.SeriesViewer.prototype.bn = "PlotAreaBorderBrush";
$.ig.SeriesViewer.prototype.bo = "PlotAreaBorderThickness";
$.ig.SeriesViewer.prototype.bp = "PlotAreaBackground";
$.ig.SeriesViewer.prototype.bq = "PlotAreaMinWidth";
$.ig.SeriesViewer.prototype.br = "PlotAreaMinHeight";
$.ig.SeriesViewer.prototype.bs = "DefaultInteraction";
$.ig.SeriesViewer.prototype.bt = "DragModifier";
$.ig.SeriesViewer.prototype.bu = "PanModifier";
$.ig.SeriesViewer.prototype.bv = "WindowPositionHorizontal";
$.ig.SeriesViewer.prototype.bw = "WindowPositionVertical";
$.ig.SeriesViewer.prototype.bx = "WindowScaleHorizontal";
$.ig.SeriesViewer.prototype.by = "WindowScaleVertical";
$.ig.SeriesViewer.prototype.bz = "ContentPresenter";
$.ig.SeriesViewer.prototype.b0 = "CrosshairLineStyle";
$.ig.SeriesViewer.prototype.b1 = "Idle";
$.ig.SeriesViewer.prototype.b2 = "Dragging";
$.ig.SeriesViewer.prototype.b3 = "Panning";
$.ig.SeriesViewer.prototype.b4 = "Inking";
$.ig.SeriesViewer.prototype.b5 = "Erasing";
$.ig.SeriesViewer.prototype.b6 = "PreviewPathStyle";
$.ig.SeriesViewer.prototype.b7 = "ZoombarStyle";
$.ig.SeriesViewer.prototype.b8 = "CircleMarkerTemplate";
$.ig.SeriesViewer.prototype.b9 = "TriangleMarkerTemplate";
$.ig.SeriesViewer.prototype.ca = "PyramidMarkerTemplate";
$.ig.SeriesViewer.prototype.cb = "SquareMarkerTemplate";
$.ig.SeriesViewer.prototype.cc = "DiamondMarkerTemplate";
$.ig.SeriesViewer.prototype.cd = "PentagonMarkerTemplate";
$.ig.SeriesViewer.prototype.ce = "HexagonMarkerTemplate";
$.ig.SeriesViewer.prototype.cf = "TetragramMarkerTemplate";
$.ig.SeriesViewer.prototype.cg = "PentagramMarkerTemplate";
$.ig.SeriesViewer.prototype.ch = "HexagramMarkerTemplate";
$.ig.SeriesViewer.prototype.ci = "ActualWindowRect";
$.ig.SeriesViewer.prototype.cj = "ActualWindowPositionHorizontal";
$.ig.SeriesViewer.prototype.ck = "ActualWindowPositionVertical";
$.ig.SeriesViewer.prototype.cl = "ActualWindowScaleHorizontal";
$.ig.SeriesViewer.prototype.cm = "ActualWindowScaleVertical";
$.ig.SeriesViewer.prototype.legendProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.a8, $.ig.LegendBase.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	var c = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, a);
	c.f2($.ig.SeriesViewer.prototype.a8, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.animateSeriesWhenAxisRangeChangesProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.a9, $.ig.Boolean.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	var c = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, a);
	c.f2($.ig.SeriesViewer.prototype.a9, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.windowRectProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.ba, $.ig.Rect.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, new $.ig.Rect(0, 0, 0, 1, 1), function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.ba, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.horizontalZoomableProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bb, $.ig.Boolean.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bb, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.horizontalZoombarVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bc, $.ig.Visibility.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.collapsed, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bc, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.verticalZoomableProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bd, $.ig.Boolean.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bd, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.verticalZoombarVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.be, $.ig.Visibility.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.collapsed, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.be, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.windowResponseProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bh, $.ig.WindowResponse.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.WindowResponse.prototype.deferred, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bh, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.windowRectMinWidthProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bi, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, 0.0001, function (a, b) { return ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bi, b.f(), b.e())}));
$.ig.SeriesViewer.prototype.overviewPlusDetailPaneVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bk, $.ig.Visibility.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.collapsed, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bk, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.crosshairVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bl, $.ig.Visibility.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bl, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.isDragCrosshairEnabledProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bm, $.ig.Boolean.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bm, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.plotAreaBorderBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bn, $.ig.Brush.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bn, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.plotAreaBackgroundProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bp, $.ig.Brush.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bp, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.plotAreaMinWidthProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bq, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bq, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.plotAreaMinHeightProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.br, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.br, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.defaultInteractionProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bs, $.ig.InteractionState.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.InteractionState.prototype.auto, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bs, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.dragModifierProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bt, $.ig.ModifierKeys.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ModifierKeys.prototype.none, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bt, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.panModifierProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bu, $.ig.ModifierKeys.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ModifierKeys.prototype.shift, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bu, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.windowPositionHorizontalProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bv, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bv, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.windowPositionVerticalProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bw, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bw, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.windowScaleHorizontalProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bx, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.bx, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.windowScaleVerticalProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.by, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.by, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.crosshairLineStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b0, $.ig.Style.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.b0, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.previewPathStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b6, $.ig.Style.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.b6, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.de = $.ig.Rect.prototype.empty();
$.ig.SeriesViewer.prototype.zoombarStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b7, $.ig.Style.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(0, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.b7, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.circleMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b8, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.b8, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.triangleMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b9, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.b9, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.pyramidMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.ca, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.ca, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.squareMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cb, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.cb, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.diamondMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cc, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.cc, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.pentagonMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cd, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.cd, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.hexagonMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.ce, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.ce, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.tetragramMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cf, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.cf, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.pentagramMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cg, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.cg, b.f(), b.e());
}));
$.ig.SeriesViewer.prototype.hexagramMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.ch, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewer.prototype.$type, a)).f2($.ig.SeriesViewer.prototype.ch, b.f(), b.e());
}));
$.ig.XamDataChart.prototype.ke = "IsSquare";
$.ig.XamDataChart.prototype.kf = "GridMode";
$.ig.XamDataChart.prototype.kg = "Brushes";
$.ig.XamDataChart.prototype.kh = "MarkerBrushes";
$.ig.XamDataChart.prototype.ki = "Outlines";
$.ig.XamDataChart.prototype.kj = "MarkerOutlines";
$.ig.XamDataChart.prototype.kk = "PlotAreaBackgroundContent";
$.ig.XamDataChart.prototype.isSquareProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.ke, $.ig.Boolean.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, false, function (a, b) {
	($.ig.util.cast($.ig.XamDataChart.prototype.$type, a)).f2($.ig.XamDataChart.prototype.ke, b.f(), b.e());
}));
$.ig.XamDataChart.prototype.gridModeProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kf, $.ig.GridMode.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.GridMode.prototype.behindSeries, function (a, b) {
	($.ig.util.cast($.ig.XamDataChart.prototype.$type, a)).f2($.ig.XamDataChart.prototype.kf, b.f(), b.e());
}));
$.ig.XamDataChart.prototype.brushesProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kg, $.ig.BrushCollection.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.XamDataChart.prototype.$type, a)).f2($.ig.XamDataChart.prototype.kg, b.f(), b.e());
}));
$.ig.XamDataChart.prototype.markerBrushesProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kh, $.ig.BrushCollection.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.XamDataChart.prototype.$type, a)).f2($.ig.XamDataChart.prototype.kh, b.f(), b.e());
}));
$.ig.XamDataChart.prototype.outlinesProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.ki, $.ig.BrushCollection.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.XamDataChart.prototype.$type, a)).f2($.ig.XamDataChart.prototype.ki, b.f(), b.e());
}));
$.ig.XamDataChart.prototype.markerOutlinesProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kj, $.ig.BrushCollection.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.XamDataChart.prototype.$type, a)).f2($.ig.XamDataChart.prototype.kj, b.f(), b.e());
}));
$.ig.XamDataChart.prototype.plotAreaBackgroundContentProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kk, $.ig.FrameworkElement.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.XamDataChart.prototype.$type, a)).f2($.ig.XamDataChart.prototype.kk, b.f(), b.e());
}));
$.ig.SyncSettings.prototype.a2 = "SyncChannel";
$.ig.SyncSettings.prototype.a3 = "SynchronizeVertically";
$.ig.SyncSettings.prototype.a4 = "SynchronizeHorizontally";
$.ig.SyncSettings.prototype.syncChannelProperty = $.ig.DependencyProperty.prototype.l($.ig.SyncSettings.prototype.a2, String, $.ig.SyncSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
	($.ig.util.cast($.ig.SyncSettings.prototype.$type, a)).ba($.ig.SyncSettings.prototype.a2, b.f(), b.e());
}));
$.ig.SyncSettings.prototype.synchronizeVerticallyProperty = $.ig.DependencyProperty.prototype.l($.ig.SyncSettings.prototype.a3, $.ig.Boolean.prototype.$type, $.ig.SyncSettings.prototype.$type, new $.ig.PropertyMetadata(1, true, function (a, b) {
	($.ig.util.cast($.ig.SyncSettings.prototype.$type, a)).ba($.ig.SyncSettings.prototype.a3, b.f(), b.e());
}));
$.ig.SyncSettings.prototype.synchronizeHorizontallyProperty = $.ig.DependencyProperty.prototype.l($.ig.SyncSettings.prototype.a4, $.ig.Boolean.prototype.$type, $.ig.SyncSettings.prototype.$type, new $.ig.PropertyMetadata(1, true, function (a, b) {
	($.ig.util.cast($.ig.SyncSettings.prototype.$type, a)).ba($.ig.SyncSettings.prototype.a4, b.f(), b.e());
}));
$.ig.SeriesViewerSurfaceViewer.prototype.e = "ZoomLevel";
$.ig.SeriesViewerSurfaceViewer.prototype.f = "ZoomLevelDisplayText";
$.ig.SeriesViewerSurfaceViewer.prototype.i = $.ig.DependencyProperty.prototype.l("ZoomLevel", Number, $.ig.SeriesViewerSurfaceViewer.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (a, b) {
	($.ig.util.cast($.ig.SeriesViewerSurfaceViewer.prototype.$type, a)).aj($.ig.SeriesViewerSurfaceViewer.prototype.e, b.f(), b.e());
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









































































$.ig.util.extCopy($.ig.ArrayUtil, [[[$.ig.ShapefileConverter], ['shuffle$1', 'insertionIndex$1', 'insertionIndex$11111', 'binarySearch$1']]]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [[[$.ig.ShapefileConverter], ['flattenTo', 'getBounds2', 'clipTo']], [[$.ig.ShapefileConverter, $.ig.HalfEdgeSet], ['getBounds', 'getBounds11', 'getCentroid', 'toPointCollection', 'toPointList']]]);
$.ig.util.extCopy($.ig.Enumerable, [[[$.ig.ShapefileConverter, $.ig.HalfEdgeSet], ['where$1', 'where$11111', 'select$2', 'selectMany$2', 'last$1', 'first$1', 'firstOrDefault$1', 'orderBy$2', 'toList$1', 'concat$1', 'max', 'max$111', 'min', 'min$111', 'count$1', 'reverse$1', 'take$1', 'skip$1', 'any$1', 'contains$1', 'union$1', 'toArray$1', 'elementAt$1']], [[$.ig.ShapefileConverter, $.ig.HalfEdgeSet], ['ofType$1', 'cast$1']]]);
$.ig.util.extCopy($.ig.Queryable, [[[$.ig.ShapefileConverter, $.ig.HalfEdgeSet], ['asQueryable']]]);

