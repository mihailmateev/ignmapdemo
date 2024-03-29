﻿/*!
 * Infragistics.Web.ClientUI Util functions 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 * 
 * util functions that extend the jQuery  namespace 
 * if something is not already available in jQuery, please add it here. 
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *
 */

 /* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed. 
 */
// Inspired by base2 and Prototype
/*global xyz */
/*global Class */
/*global define*/
/*global jQuery,$*/
(function () {

    var initializing = false, fnTest = /xyz/.test(function () { xyz(); }) ? /\b_super\b/ : /.*/;
    // The base Class implementation (does nothing)
    this.Class = function () { };

    // Create a new Class that inherits from this class
    Class.extend = function (prop, doAugment) {
        var doSuper = true,
			_super = this.prototype,
			prototype,
			name;

		if (doAugment) {
            doSuper = false;
        }

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        prototype = new this();
        initializing = false;

        function makeFn(name, fn) {
            return function () {
                var tmp = this._super,
					ret;

                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];

                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                ret = fn.apply(this, arguments);
                this._super = tmp;

                return ret;
            };
        }

        // Copy the properties over onto the new prototype
        for (name in prop) {
            if (prop.hasOwnProperty(name)) {
                // Check if we're overwriting an existing function
                prototype[name] = doSuper && typeof prop[name] === "function" &&
					typeof _super[name] === "function" && fnTest.test(prop[name]) ?
							makeFn(name, prop[name]) : prop[name];
            }
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        if (doAugment) {
            Class.typeName = function () {
                return this.prototype.$type;
            };

            Class.baseType = function () {
                return this.$type.baseType;
            };

            Class.prototype.getType = function () {
                return this.$type;
            };

            Class.prototype.getHashCode = function () {
                if (this.$hashCode) {
                    return this.$hashCode;
                }
                this.$hashCode = $.ig.nextHashCode++;
                return this.$hashCode;
            };
        }

        return Class;
    };

	// Expose util as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase ig.util is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.util", [], function () { return Class; });
	}

}());

// K.D. Fix for WinJS dynamic content exceptions.
window.toStaticHTML = window.toStaticHTML || function (s) { return s; };

$.fn.startsWith = function (str) {
	return this[0].innerHTML.indexOf(str) === 0;
};

$.ig = $.ig || {};

$.ajaxQueue = function (queueName, options) {
    var callback;
//        var s = $('#status');
//        s.html(options.url + '<br />' + s.html());

    if (typeof document.ajaxQueue === "undefined") {
        document.ajaxQueue = { queue: {} };
	}
    if (typeof document.ajaxQueue.queue[queueName] === "undefined") {
        document.ajaxQueue.queue[queueName] = [];
	}

    if (typeof options === "undefined") {
        return;
	}

    callback = options.complete; //original callback

    //overwrite complete
    options.complete = function (request, status) {
        document.ajaxQueue.queue[queueName].shift(); //remove the first element from the array
        //we should check if original callbak is defined in options
        if (typeof callback !== "undefined") {
            callback(request, status);
		}

        if (document.ajaxQueue.queue[queueName].length > 0) {
            $.ajax(document.ajaxQueue.queue[queueName][0]);
		}
    };

    document.ajaxQueue.queue[queueName].push(options);
    if (document.ajaxQueue.queue[queueName].length === 1) {
        $.ajax(document.ajaxQueue.queue[queueName][0]);
	}
};

Date.prototype.stdTimezoneOffset = function () {
	var jan, jul, janOffset, julOffset;
	jan = new Date(this.getFullYear(), 0, 1);
	jul = new Date(this.getFullYear(), 6, 1);
	julOffset = jul.getTimezoneOffset();
	janOffset = jan.getTimezoneOffset();
	if (janOffset > 0 && julOffset > 0) {
		return Math.max(janOffset, julOffset);
	} else {
		return Math.min(janOffset, julOffset);
	}
};

Date.prototype.dst = function () {
	return this.getTimezoneOffset() < this.stdTimezoneOffset();
};

$.ig.findPath = function (dsObj, resKey) {
		var resPath, ds = dsObj;
		resPath = resKey.split(".");
		if (resPath.length > 0) {
			for (i = 0; i < resPath.length; i++) {
				if (ds) {
					ds = ds[resPath[i]];
				} else {
					break;
				}
			}
		}
		return ds;
},

$.ig.formatter = function (val, type, format, notTemplate, enableUTCDates) {
	var min, y, h, m, s, ms, am, e, pattern, len, n, dot, gr, gr0, grps, curS, percS, cur, perc, prefix, i, d = val && val.getTime, reg = $.ig.regional.defaults;
	if (format === 'checkbox' && notTemplate) {
		s = '<span style="width:100%;display:inline-block;overflow:hidden;text-align:center;">';
		s += '<span class="ui-state-default ui-corner-all ui-igcheckbox-small" style="display:inline-block">';
		s += '<span style="display:block" class="' + (val ? '' : 'ui-igcheckbox-small-off ');
		return s + 'ui-icon ui-icon-check ui-igcheckbox-small-on"></span></span></span>';
	}
	if (!val && val !== 0 && val !== false) {
		return '&nbsp;';
	}
	if (type === 'date' || d) {
		if (!val) {
			return '&nbsp;';
		}
		if (!d) {
			return val;
		}
		pattern = reg[(format && format !== 'null' && format !== 'undefined') ? format + 'Pattern' : 'datePattern'] || format;
		if (enableUTCDates) {
			y = val.getUTCFullYear();
			m = val.getUTCMonth() + 1;
			d = val.getUTCDate();
			h = val.getUTCHours();
			min = val.getUTCMinutes();
			s = val.getUTCSeconds();
			ms = val.getUTCMilliseconds();
		} else {
			y = val.getFullYear();
			m = val.getMonth() + 1;
			d = val.getDate();
			h = val.getHours();
			min = val.getMinutes();
			s = val.getSeconds();
			ms = val.getMilliseconds();
		}
		// remove MMMM, MMM, dddd, ddd, tt, t
		pattern = pattern.replace('MMMM', '\x01').replace('MMM', '\x02').replace('dddd', '\x03').replace('ddd', '\x04');
		if (pattern.indexOf('t') >= 0) {
			am = (h >= 12) ? reg.pm : reg.am;
			am = am || ' ';
			if (pattern.indexOf('tt') >= 0) {
				pattern = pattern.replace('tt', 't');
			} else if (am.length > 1) {
				am = am.substring(0, 1);
			}
			pattern = pattern.replace('t', '\x05');
		}
		if (pattern.indexOf('h') >= 0 && h > 12) {
			h -= 12;
		}
		pattern = pattern.replace(/H/g, 'h');
		pattern = pattern.replace('yyyy', y).replace('yy', ((y = y % 100) < 10) ? '0' + y : y).replace('y', y % 100).replace('MM', (m < 10) ? '0' + m : m).replace('M', m);
		pattern = pattern.replace('dd', (d < 10) ? '0' + d : d).replace('d', d);
		pattern = pattern.replace('hh', (h < 10) ? '0' + h : h).replace('h', h).replace('mm', (min < 10) ? '0' + min : min).replace('m', min).replace('ss', (s < 10) ? '0' + s : s).replace('s', s);
		pattern = pattern.replace('fff', (ms < 10) ? '00' + ms : ((ms < 100) ? '0' + ms : ms)).replace('ff', ((ms = Math.round(ms / 10)) < 10) ? '0' + ms : ms).replace('f', Math.round(ms / 100));
		pattern = pattern.replace('\x01', reg.monthNames[m - 1]).replace('\x02', reg.monthNamesShort[m - 1]).replace('\x05', am);
		pattern = pattern.replace('\x03', reg.dayNames[val.getDay()]).replace('\x04', reg.dayNamesShort[val.getDay()]);
		return pattern;
	}
	d = format === 'double';
	if (!d) {
		cur = format === (curS = 'currency');
		if (!cur) {
			perc = format === (percS = 'percent');
			if (!perc) {
				i = format === 'int';
			}
		}
	}
	n = typeof val === 'number';
	if (d || n || i || cur || perc || type === 'number') {
		if (!n) {
			// keep only e, E, -, +, . and digits
			val = parseFloat(val.replace('(', '-').replace(/[^0-9\-eE\.\+]/gm, ''));
		}
		if (isNaN(val)) {
			return '&nbsp;';
		}
		prefix = cur ? curS : (perc ? percS : 'numeric');
		pattern = reg[prefix + ((val < 0) ? 'Negative' : 'Positive') + 'Pattern'] || 'n';
		len = format ? format.length : 0;
		// calculate maximum number of decimals
		if (len > 0 && ((s = format.charAt(0)) === '0' || s === '#')) {
			min = m = 0;
			dot = format.indexOf('.');
			if (dot > 0) {
				m = len - 1 - dot;
				while (++dot < len) {
					if (format.charAt(dot) !== '0') {
						break;
					}
					min++;
				}
			}
		} else {
			min = reg[prefix + 'MinDecimals'] || 0;
			if (d) {
				m = 999;
			} else {
				m = reg[prefix + 'MaxDecimals'];
				m = (m && !i) ? m : 0;
			}
		}
		if (val < 0) {
			val = -val;
		}
		val = (m === 999) ? val.toString(10) : val.toFixed(m);
		if ((i = val.indexOf('E')) < 0) {
			i = val.indexOf('e');
		}
		// cut-off E-power (e)
		e = '';
		if (i > 0) {
			e = val.substring(i);
			val = val.substring(0, i);
		}
		dot = val.indexOf('.');
		len = val.length;
		i = 0;
		// remove trailing 0s
		while (dot > 0 && m > min + i && val.charAt(len - 1 - i) === '0') {
			i++;
		}
		if (i > 0) {
			val = val.substring(0, len -= i);
		}
		// remove trailing .
		if (dot === len - 1) {
			val = val.substring(0, dot);
		}
		if (dot > 0) {
			len = dot;
		}
		// replace decimal separator
		s = reg[prefix + 'DecimalSeparator'];
		if (s) {
			val = val.replace('.', s);
		}
		// insert group separators
		s = reg[prefix + 'GroupSeparator'];
		grps = s ? reg[prefix + 'Groups'] : '';
		gr = gr0 = (grps.length > 0) ? grps[i = 0] : 0;
		while (gr > 0 && --len > 0) {
			if (--gr === 0) {
				val = val.substring(0, len) + s + val.substring(len);
				gr = grps[++i];
				if (!gr || gr < 1) {
					gr = gr0;
				} else {
					gr0 = gr;
				}
			}
		}
		// replace 'n' by number, '$' by symbol and '-' by negative sign
		s = reg[prefix + 'Symbol'] || '';
		return pattern.replace('-', reg.negativeSign).replace('n', val + e).replace('$', s);
	}
	if (format) {
		if (format.indexOf(s = '{0}') >= 0) {
			return format.replace(s, val);
		}
		if (format.indexOf(s = '[0]') >= 0) {
			return format.replace(s, val);
		}
	}
	return (val || val === 0) ? val : '&nbsp;';
};
$.ig._regional = {
	monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	am: 'AM',
	pm: 'PM',
	datePattern: 'M/d/yyyy',
	dateLongPattern: 'dddd, MMMM dd, yyyy',
	dateTimePattern: 'M/d/yyyy h:mm tt',
	timePattern: 'h:mm tt',
	timeLongPattern: 'h:mm:ss tt',
	negativeSign: '-',
	numericNegativePattern: '-$n',
	numericDecimalSeparator: '.',
	numericGroupSeparator: ',',
	numericGroups: [3],
	numericMaxDecimals: 2,
	numericMinDecimals: 0,
	currencyPositivePattern: '$n',
	currencyNegativePattern: '$(n)',
	currencySymbol: '$',
	currencyDecimalSeparator: '.',
	currencyGroupSeparator: ',',
	currencyGroups: [3],
	currencyMaxDecimals: 2,
	currencyMinDecimals: 2,
	percentPositivePattern: 'n$',
	percentNegativePattern: '-n$',
	percentSymbol: '%',
	percentDecimalSeparator: '.',
	percentGroupSeparator: ',',
	percentGroups: [3],
	percentDisplayFactor: 100,
	percentMaxDecimals: 2,
	percentMinDecimals: 2
};
$.ig.regional = $.ig.regional || {};
$.ig.regional.defaults = $.ig._regional;
$.ig.setRegionalDefault = function (regional) {
	if ($.ui && $.ui.igEditor) {
		$.ui.igEditor.setDefaultCulture(regional);
	} else {
		$.ig.regional.defaults = $.extend($.ig._regional, (typeof regional === 'string') ? $.ig.regional[regional] : regional);
	}
};
$.ig.calcSummaries = function (summaryFunction, data, caller, dataType) {
	var sum = function (data) {
		var sum = 0,
			i;
		for (i = 0; i < data.length; i++) {
			sum += data[i];
		}
		return sum;
	};

	// M.H. 16 Nov. 2011 Fix for bug 97886
	summaryFunction = summaryFunction.toLowerCase();
	if (summaryFunction.startsWith('custom')) {
		summaryFunction = 'custom';
	}

	switch (summaryFunction) {
	case "min":
		if (data.length === 0) {
			if (dataType === 'date') {
				return null;
			}
			return 0;
		}
		return Math.min.apply(Math, data);
	case "max":
		if (data.length === 0) {
			if (dataType === 'date') {
				return null;
			}
			return 0;
		}
		return Math.max.apply(Math, data);
	case "sum":
		return sum(data);
	case "avg":
		if (data.length === 0) {
			return 0;
		}
		return sum(data) / data.length;
	case "count":
		return data.length;
	case "custom":
		// M.H. 30 Sept. 2011 Fix for bug #88717 - fix when caller is string
		if (caller !== undefined && caller !== null) {
			if ($.type(caller) === 'function') {
				return caller(data);
			}
			if ($.type(caller) === 'string') {
				caller = eval(caller);
				return caller(data);
			}
		} else {
			return null;
		}
		break;
	}
};
// get max zIndex of ui-dialogs - method is usually called by feautures for configuring zIndex of modal dialogs(like filtering, feature chooser, hiding, etc.)
$.ig.getMaxZIndex = function (id) {
	var maxZ = 10000, thisZ;
	$('.ui-dialog').each(function () {
		if (!id || $(this)[0].id !== id) {
			thisZ = $(this).css('z-index');
			if (!isNaN(thisZ)) {
				maxZ = Math.max(maxZ, thisZ);
			}
		}
	});
	return maxZ;
};
// generate unique identifiers 
$.ig.uid = function () {
	return ((1 + Math.random()) * parseInt('10000', 16)).toString(16).substring(1, 5);
};

$.ig.nextHashCode = 0;
$.ig.util = $.ig.util || {};
$.ig.util.ensureUniqueId = function (obj) {
	if (!obj.getHashCode) {
		var code = $.ig.nextHashCode++;
		obj.getHashCode = function () {
			return code;
		};
	}
};

$.ig.getColType = function (o) {
	var t = typeof o;
	if (t === "undefined") {
		return "string";
	} else if (t === "object" && o instanceof Date) {
		return "date";
	} else if (t === "boolean") {
		return "bool";
	} else if (t === "number") {
		return t;
	} else if (t === "object") {
		return "object";
	} else {
		return "string";
	}

};

$.ig.typeIdentifierCache = {};
$.ig.nextTypeIdentifier = 0;
$.ig.Type = Class.extend({
    init: function (identifier, baseType, interfaces) {
        this.specializationCache = {};
        this.name = identifier; 
        this.typeArguments = null;
        this.baseType = null;
        this.interfaces = null;
        if (baseType) {
            this.baseType = baseType;
        }
        if (interfaces) {
            this.interfaces = interfaces;
        }

        if ($.ig.typeIdentifierCache[identifier]) {
            this.identifier = $.ig.typeIdentifierCache[identifier];
        } else {
            this.identifier = $.ig.nextTypeIdentifier++;
            $.ig.typeIdentifierCache[identifier] = this.identifier;
        }
    },
    typeName: function() {
        return this.name;
    },
    getSpecId: function(types) {
        if (types.length === 1) {
            if (!types[0]) {
                return "undef";
            } else if (!types[0].typeName) {
                return types[0].toString();
            } else if (types[0].stringId) {
                return types[0].stringId;
            } else {
                return types[0].identifier.toString();
            }
        }

        var ret = "";
        for (var i = 0; i < types.length; i++) {
            var type = types[i];
            if (!types[0]) {
                ret += "undef";
            } else if (!types[0].typeName) {
                ret += types[0].toString();
            } else if (types[0].stringId) {
                ret += types[0].stringId;
            } else {
                ret += types[0].identifier.toString();
            }
        }
        return ret;
    },
    specializationCache: null,
    specialize: function () {
        var specId = this.getSpecId(arguments);
        var ret = this.specializationCache[specId];
        if (ret) {
            return ret;
        }
        ret = new $.ig.Type(this.name, this.baseType, this.interfaces);
            
        var placeholders = this.typeArguments;
        var hasPlaceholders = false;
        if (placeholders) {
            hasPlaceholders = true;
        }

        ret.typeArguments = [];
        if (hasPlaceholders) {
            for (var i = 0; i < placeholders.length; i++) {
                ret.typeArguments[i] = arguments[placeholders[i]];
            }
        } 
        else {
            for (var i = 0; i < arguments.length; i++) {
                ret.typeArguments[i] = arguments[i];
            }
        }

        if (this.baseType && this.baseType.typeArguments) {
            ret.baseType = this.baseType.specialize(arguments);
        }

        if (this.interfaces) {
            for (var i = 0; i < this.interfaces.length; i++) {
                ret.interfaces[i] = this.interfaces[i].specialize(arguments);
            }
        }

        this.specializationCache[specId] = ret;
        ret.stringId = ret.generateString();
        return ret;
    },
    equals: function (other) {
        if (!(other instanceof $.ig.Type)) {
            return false;
        }
        if (this.identifier !== other.identifier) {
            return false;
        }
        if (this.typeArguments === null && other.typeArguments === null) {
            return true;
        }
        if (this.typeArguments === null && other.typeArguments !== null) {
            return false;
        }
        if (this.typeArguments !== null && other.typeArguments === null) {
            return false;
        }
        if (this.typeArguments.length !== other.typeArguments.length) {
            return false;
        }
        for (var i = 0; i < this.typeArguments.Length; i++) {
            if (!(this.typeArguments[i].equals(other.typeArguements[i]))) {
                return false;
            }
        }

        return true;
    },
    checkEquals: function (type1, type2) {
        if (type1 instanceof $.ig.Type) {
            return type1.equals(type2);
        } else if (type2 instanceof $.ig.Type) {
            return type2.equals(type1);
        } else {
            return type1 == type2;
        }
    },
    op_Equality: function (type1, type2) {
        return type1.equals(other);
    },
    op_Inequality: function (type1, type2) {
        return !type1.equals(type2);
    },
    generateString: function() {
        if (!this.typeArguments || this.typeArguments.length == 0) {
            return this.identifier.toString();
        } else {
            var ret = this.identifier.toString() + "[";
            var first = true;
            for (var i = 0; i < this.typeArguments.count; i++) {
                if (first) { first = false; } else { ret += ","; }
                ret += this.typeArguments[i].toString();
            }
            ret += "]";
            return ret;
        }
    }   
}, true);

$.ig.Object = Class.extend({
    init: function () {

    },
    $type: new $.ig.Type('Object')
}, true);

$.ig.Enum = Class.extend({
	$type: new $.ig.Type('Enum', $.ig.Object.prototype.$type)
}, true);

$.ig.ValueType = Class.extend({
	init: function () {

    },
	$type: new $.ig.Type('ValueType', $.ig.Object.prototype.$type)
}, true);

$.ig.INotifyPropertyChanged = Class.extend({
    init: function () {

    },
    _PropertyChanged: function () {

    },
    $type: new $.ig.Type('INotifyPropertyChanged')
}, true);

$.ig.PropertyChangedEventArgs = $.ig.Object.extend({
    init: function(propertyName) {
        this._propertyName = propertyName;
    },
    _propertyName: null,
    propertyName: function (value) {
        if (arguments.length === 0) {
            return this._propertyName;
        }
        else {
            this._propertyName = value;
        }
    },
    $type: new $.ig.Type('PropertyChangedEventArgs', $.ig.Object.$type)
}, true);

$.ig.XmlNodeType = Class.extend({
    _Attribute:2,
    _CDATA:4,
    _Comment:8,
    _Document:9,
    _DocumentFragment:11,
    _DocumentType:10,
    _Element:1,
    _Entity:6,
    _EntityReference:5,
    _Notation:12,
    _ProcessingInstruction:7,
    _Text:3,

    element: 1,
    attribute: 2,
    text: 3,
    cDATA: 4,
    entityReference: 5,
    entity: 6,
    processingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12

}, true);

$.ig.XmlDocumentParser = Class.extend({
	parse: function (markup) {
		if (!window.DOMParser) {
			var parsers = [ 'Msxml2.DOMDocument.3.0', 'Msxml2.DOMDocument' ];

			for (var i = 0; i < parsers.length; i++) {
				try {
					var xmlDOM = new ActiveXObject(progIDs[i]);
					xmlDOM.async = false;
					xmlDOM.loadXML(markup);
					xmlDOM.setProperty('SelectionLanguage', 'XPath');
						
					return xmlDOM;
				}
				catch (ex) {
				}
			}
		} else {
			try {
				var domParser = new DOMParser();
				return domParser.parseFromString(markup, 'text/xml');
			}
			catch (ex) {
			}
		}
		return null;
	}
}, true);

$.ig.Array = Array;

$.ig.Array.prototype.add = function (item) {
    this[this.length] = item;
};

$.ig.Array.prototype.indexOf = function (item) {
	for (var i=0; i<this.length; i++)
	{
		if (this[i] == item)
			return i;			
	}
	return -1;
};

$.ig.Array.prototype.copy = function (source, sourceIndex, dest, destIndex, count) {
    for (i = 0; i < count; i++) {
        dest[destIndex + i] = source[sourceIndex + i];
    }
};

$.ig.removeFromArray = function (arr, from, to) {
	var rest = arr.slice((to || from) + 1 || arr.length);
	arr.length = from < 0 ? arr.length + from : from;
	return arr.push.apply(arr, rest);
};

$.ig.Array.prototype.contains =  function (item) {
    var index = this.indexOf(item);
    return (index >= 0);
};

$.ig.Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

$.ig.Array.prototype.removeAt = function (i) {
    this.splice(i, 1);
};

$.ig.Array.prototype.removeItem = function (item) {
    var index = this.indexOf(item);
    if (index >= 0) {
        this.splice(index, 1);
        return true;
    }
    return false;
};

$.ig.Array.prototype.getEnumerator = function () {
        return new $.ig.ArrayEnumerator(this);
};

$.ig.Array.prototype.count = function () {
    return this.length;
};

$.ig.Array.prototype.item = function (index, value) {
    if (arguments.length === 2) {
        this[index] = value;
        return value;
    } else {
        return this[index];
    }
};

$.ig.Array.prototype.getLength = function (dimension) {
	if (dimension === 0) {
		return this.length;
	}
	else {
		return this.dimensionLength[dimension - 1];
	}
};

$.ig.Array.prototype.clear = function () {
    this.length = 0;
};

$.ig.ArrayEnumerator = Class.extend({
 
    init: function (array) {
        this._array = array;
        this._index = -1;
    },
    current: function() {
        return this._array[this._index];
    },
    moveNext: function() {
        this._index++;
        return (this._index < this._array.length);
    },
    reset: function() {
        this._index = -1;
    }
}, true);

$.ig.Date = Class.extend({init: function () {

    },
    $type: new $.ig.Type('Date', $.ig.Object.$type)
}, true);
$.ig.Date.prototype.now = function () {
	return new Date();
};
$.ig.Date.prototype.fromMilliseconds = function (value) {
	return value;
};

// implement casting
$.ig.util.canAssign = function(targetType, type) {
    if ($.ig.Type.prototype.checkEquals(targetType, type)) {
        return true;
    }
    if (type.interfaces) {
        for (var i = 0; i < type.interfaces.length; i++) {
            if ($.ig.util.canAssign(targetType, type.interfaces[i])) {
                return true;
            }
        }
    }
    if (type.baseType) {
        return $.ig.util.canAssign(targetType, type.baseType);
    }

    return false;
};

$.ig.util.cast = function (targetType, obj) {
    if (obj == null) {
        return null;
    }
       
    var type = obj;
        
    if (obj.$type) {
        type = obj.$type;
    }
       
    if ($.ig.util.canAssign(targetType, type)) {
        return obj;
    } else {
        return null;
    }
};

$.ig.Dictionary = Class.extend({
    init: function () {
        this.proxy = {};
        this.keysHolder = this.proxy;
        this._count = 0;
    },
    $type: new $.ig.Type('Dictionary', $.ig.Object.prototype.$type),
    proxy: null
}, true);

$.ig.Dictionary.prototype.getDictionary = function (o) {
    var dict = new $.ig.Dictionary();
    dict.proxy = o;
    dict.keysHolder = o;
    return dict;
};

$.ig.Dictionary.prototype.containsKey = function (key) {
	return this.proxy[key] !== undefined;
};

$.ig.Dictionary.prototype.count = function () {
	return this._count;
};

$.ig.Dictionary.prototype.item = function (key, value) {
	if (arguments.length === 1) {
		return this.proxy[key];
	}
	else {
		if (!this.proxy[key]) {
			this._count++;
		}
		this.proxy[key] = value;
	}
};

$.ig.Dictionary.prototype.add = function (key, value) {
	if (!this.proxy[key]) {
		this._count++;
	}
	this.proxy[key] = value;
};

$.ig.Dictionary.prototype.remove = function (key) {
	delete this.proxy[key];
	this._count--;
};

$.ig.Dictionary.prototype.keys = function () {
	return new $.ig.KeyEnumerator(this);
};

$.ig.Dictionary.prototype.values = function () {
	return new $.ig.ValueEnumerator(this);
};

$.ig.Dictionary.prototype.clear = function () {
	this.proxy = {};
	this.keysHolder = this.proxy;
	this._count = 0;
};

$.ig.EventArgs  = $.ig.Object.extend({
    init: function () {

    }
}, true);

$.ig.Number = Class.extend({
    $type: new $.ig.Type('Number', $.ig.Object.prototype.$type)
}, true);

$.ig.Number.prototype.parseInt = function (a,b) {
    return parseInt(a,b);
};

$.ig.Number.prototype.log10 = function (x) {
	return Math.log(x) / Math.log(10);
};

$.ig.Single = Class.extend({

}, true);

$.ig.Single.prototype.parseFloat = function (s) {
    return parseFloat(s);
};

$.ig.Single.prototype.isInfinity = function (s) {
    return s === Infinity || s === -Infinity;
};

$.ig.Int32 = Class.extend({
    $type: new $.ig.Type('Int32', $.ig.Object.prototype.$type)
}, true);

$.ig.Double = Class.extend({
    $type: new $.ig.Type('Double', $.ig.Object.prototype.$type)
}, true);

$.ig.Delegate = Class.extend({
    $type: new $.ig.Type('Delegate', $.ig.Object.prototype.$type)
}, true);

$.ig.Delegate.prototype.combine = function (del1, del2) {
	if (!del1) {
		return del2;
	}

	if (!del2) {
		return del1;
	}

	var ret = function () {
		del1.apply(null, arguments);
		return del2.apply(null, arguments);
	}
	ret.enumerate = function (arr) {
		if (del1) {
			if (del1.enumerate) {
				del1.enumerate(arr);
			} else {
				arr.push(del1);
			}
		}
		if (del2) {
			if (del2.enumerate) {
				del2.enumerate(arr);
			} else {
				arr.push(del2);
			}
		}
	}

	return ret;
};

$.ig.Delegate.prototype.remove = function (del1, del2) {
	if (!del1) {
		return null;
	}
	if (!del2) {
		return del1;
	}

	var arr = [];
	var del = null;
	if (del1.enumerate) {
		del1.enumerate(arr);
	} else {
		arr.push(del1);
	}

	for (var i = 0; i < arr.length; i++) {
		if (del2.original) {
			if (arr[i].original == del2.original &&
                arr[i].target == del2.target) {
				continue;
			}
		}

		if (arr[i] == del2) {
			continue;
		}

		del = $.ig.Delegate.prototype.combine(del, arr[i]);
	}

	return del;
};

$.ig.ReflectionUtil = Class.extend({
    $type: new $.ig.Type('ReflectionUtil', $.ig.Object.prototype.$type)
}, true);

$.ig.ReflectionUtil.prototype.getPropertyGetter = function (type, propertyName) {
	if (typeof type.prototype[propertyName] === "function") {
		return function (instance) {
			return type.prototype[propertyName].apply(instance, arguments);
		};
	}

	return function (instance) {
		return instance[propertyName];
	}
};

$.ig.IEnumerable = Class.extend({
	$type: new $.ig.Type('IEnumerable', null)
}, true);

$.ig.IEnumerator = Class.extend({
	$type: new $.ig.Type('IEnumerator', null)
}, true);

$.ig.IEqualityComparer$1 = Class.extend({
    $type: new $.ig.Type('IEqualityComparer', $.ig.Object.prototype.$type)
}, true);

$.ig.IList = Class.extend({
	$type: new $.ig.Type('IList', null, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.Error = Class.extend({
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
		this.__message = null;
		this.__innerException = null;
	},
	init1: function (initNumber, message) {
		this.__message = message;
	},
	init2: function (initNumber, message, innerException) {
		this.__message = message;
		this.__innerException = innerException;
	},
    $type: new $.ig.Type('Error', $.ig.Object.prototype.$type)
}, true);

$.ig.Error.prototype.message = function () {
	return this.__message;
};

$.ig.Error.prototype.innerException = function () {
	return this.__innerException;
};

$.ig.IDictionary = Class.extend({
    $type: new $.ig.Type('IDictionary', null)
}, true);

$.ig.ValueEnumerator = Class.extend({
    init: function (dict) {
        this._dict = dict;
        this._index = -1;
        this._count = 0;
        this._values = [];
        for (var item in this._dict.proxy) {
            this._values[this._count] = this._dict.proxy[item];
            this._count++;
        }
    },
    current: function() {
        return this._values[this._index];
    },
    moveNext: function() {
        this._index++;
        return (this._index < this._count);
    },
    reset: function() {
        this._index = -1;
    },
    getEnumerator: function() {
        this.reset();
        return this;
    },
    $type: new $.ig.Type('ValueEnumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.KeyEnumerator = Class.extend({
 
    init: function (dict) {
        this._dict = dict;
        this._index = -1;
        this._count = 0;
        this._keys = [];
        for (var item in this._dict.proxy) {
            this._keys[this._count] = item;
            this._count++;
        }
    },
    current: function() {
        return this._keys[this._index];
    },
    moveNext: function() {
        this._index++;
        return (this._index < this._count);
    },
    reset: function() {
        this._index = -1;
    },
    getEnumerator: function() {
        this.reset();
        return this;
    },
    $type: new $.ig.Type('KeyEnumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.intDivide = function (int1, int2) {
	var result = int1 / int2;
	if (result >= 0) {
		return Math.floor(result);
	} else {
		return Math.ceil(result)
	}
};

$.ig.Nullable$1 = Class.extend({
    $t: null,
    init: function($t, value) {
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);

        this._value = value;
    },
    hasValue: function() {
        return this._value !== null;
    },
    _value: null,
    value: function(value) {
        if (arguments.length === 1) {
            this._value = value;
        } else {
            return this._value;
        }
    },
    getValueOrDefault: function() {
        if (this.hasValue()) {
            return this._value;
        } else {
            return getDefaultValue();
        }
    },
    getDefaultValue: function() { 
        if ($.ig.util.canAssign($.ig.Number.prototype.$type, $t)) {
            return 0;
        } else if ($.ig.util.canAssign($.ig.Boolean.prototype.$type, $t)) {
            return false;
        } else {
            return null;
        }
    },
    getValueOrDefault1: function(defaultValue) {
        if (this.hasValue()) {
            return this._value;
        } else {
            return defaultValue;
        }
    },
    isNullable: true,
    $type: new $.ig.Type('Nullable$1', $.ig.Object.prototype.$type)
}, true);

$.ig.util.toNullable = function (t, value) {
	if (value && value.isNullable) {
		return value;
	}

	var ret = new $.ig.Nullable$1(t, value);
	return ret;
};

$.ig.util.nullableAdd = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 + val2);
};

$.ig.util.nullableSubtract = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 - val2);
};

$.ig.util.nullableMultiply = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 * val2);
};

$.ig.util.nullableDivide = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 / val2);
};

$.ig.util.nullableModulus = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 % val2);
};

$.ig.util.nullableGreaterThan = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 > val2;
};

$.ig.util.nullableGreaterThanOrEqual = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 >= val2;
};

$.ig.util.nullableLessThan = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 < val2;
};

$.ig.util.nullableLessThanOrEqual = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 <= val2;
};

$.ig.util.nullableEquals = function (v1, v2) {
	var v1IsNull = (v1 == null) || (v1.IsNullable && !v1.hasValue());
	var v2IsNull = (v2 == null) || (v2.IsNullable && !v2.hasValue());

	if (v1IsNull && v2IsNull) {
		return true;
	}
	if (v1IsNull != v2IsNull) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 == val2;
};

$.ig.util.nullableNotEquals = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 != val2;
};

$.ig.util.wellKnownColors = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dodgerblue: '1e90ff',
    feldspar: 'd19275',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred : 'cd5c5c',
    indigo : '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgrey: 'd3d3d3',
    lightgreen: '90ee90',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslateblue: '8470ff',
    lightslategray: '778899',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '00ff00',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'ff00ff',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370d8',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'd87093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    red: 'ff0000',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    violetred: 'd02090',
    wheat: 'f5deb3',
    white: 'ffffff',
    whitesmoke: 'f5f5f5',
    yellow: 'ffff00',
    yellowgreen: '9acd32'
};

$.ig.util.stringToColor = function (str) {
    var ret = {
        a: 255,
        r: 0,
        g: 0,
        b: 0
    }

    var asColorName = str.replace(' ', '').toLowerCase();
    if ($.ig.util.wellKnownColors[asColorName] !== undefined) {
        str = $.ig.util.wellKnownColors[asColorName];
    }

    if (str.lastIndexOf("rgb", 0) === 0) {
        str = str.replace('rgb', '').replace(' ', '').replace('(', '').replace(')', '');
        var parts = str.split(',');
        ret.r = parseInt(parts[0]);
        ret.g = parseInt(parts[1]);
        ret.b = parseInt(parts[2]);
    } else if (str.lastIndexOf("rgba", 0) === 0) {
        str = str.replace('rgba', '').replace(' ', '').replace('(', '').replace(')', '');
        var parts = str.split(',');
        ret.r = parseInt(parts[0]);
        ret.g = parseInt(parts[0]);
        ret.b = parseInt(parts[1]);
        ret.a = parseFloat(parts[2]) * 255.0;
    } else {
        str = str.replace('#', '').replace(' ', '');
        if (str.length === 6) {
            ret.r = parseInt(str.substr(0, 2), 16);
            ret.g = parseInt(str.substr(2, 2), 16);
            ret.b = parseInt(str.substr(4, 2), 16);
        } else if (str.length === 3) {
            ret.r = parseInt(str.substr(0, 1) + str.substr(0, 1), 16);
            ret.g = parseInt(str.substr(1, 1) + str.substr(1, 1), 16);
            ret.b = parseInt(str.substr(2, 1) + str.substr(2, 1), 16);
        } 
    }
    return ret;
};


$.ig.util.getBinary = function (url, callback, error) {
	var data, ret, req, useVbArray = false;

	if (typeof XMLHttpRequest == "undefined") {
		try { req = ActiveXObject("Msxml2.XMLHTTP.6.0"); }
		catch (e) { }
		try { req = ActiveXObject("Msxml2.XMLHTTP.3.0"); }
		catch (e) { }
		req = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		req = new XMLHttpRequest();
	}

	if (req.overrideMimeType) {
		req.overrideMimeType('text/plain; charset=x-user-defined');
	} else {
		if (typeof VBArray != "undefined") {
			useVbArray = true;
		}
	}

	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.status == 200) {
				if (useVbArray) {
					data = new VBArray(req.responseBody).toArray();
					for (var i = 0; i < data.length; i++) {
						data[i] = String.fromCharCode(data[i]);
					}
					ret = data.join('');
					callback(ret);
				} else {
					callback(req.responseText);
				}
			} else {
				error(req.error);
			}
		}
	}

	req.open('GET', url, true);
	req.send(null);
};

$.ig.util.extCopy = function (source, bindings) {
	var i, j, k;
	for (j = 0; j < bindings.length; j++) {
		var dests = bindings[j][0];
		var meths = bindings[j][1];
		for (k = 0; k < dests.length; k++) {
			for (i = 0; i < meths.length; i++) {
				dests[k].prototype[meths[i]] = source.prototype[meths[i]];
			}
		}
	}
};

$.ig.util.bulkDefine = function (toDefine) {
	var i = 0, curr = null, els = null;
	for (i = 0; i < toDefine.length; i++) {
		curr = toDefine[i];
		els = curr.split(':');
		$.ig[curr] = $.ig[curr] || Class.extend({ $type: new $.ig.Type(curr, $.ig.Object.prototype.$type), $placeholder: true }, true);
	}
};

$.ig.util.defType = function (name, baseName, definition) {
	var define = true;
	if ($.ig[name] && !$.ig[name].prototype.$placeholder) {
		define = false;
	}
	if (define) {
		$.ig[name] = $.ig[baseName].extend(definition);
	}
};

$.ig.util.getClassCount = function (classNamePrefix, isPrefix) {
	var styleSheets = document.styleSheets, numFound = 0, currSheet, rules, currSelector, currVal;
	classNamePrefix = classNamePrefix.toLowerCase();
	if (!styleSheets) {
		return 0;
	}
	for (var i = 0; i < styleSheets.length; i++) {
        try {
			currSheet = styleSheets[i];
			rules = currSheet.rules ? currSheet.rules : currSheet.cssRules;
			if (!rules) {
				continue;
			}
			for (var j = 0; j < rules.length; j++) {
				currSelector = rules[j].selectorText;
				if (currSelector) {
					currSelector = currSelector.toLowerCase();
					if (isPrefix) {
						if (currSelector.indexOf(classNamePrefix) == 0) {
							currVal = parseInt(currSelector.replace(classNamePrefix, ""));
							numFound = Math.max(numFound, currVal);
						}
					} else {
						if (currSelector == classNamePrefix) {
							numFound++;
						}
					}
				}
			}
        } catch (e) {
            //ignore cross domain sheets.
        }
	}
	return numFound;
};

(function ($) {

    $.ig.util.profiler = {};
    
    var methods = {};
    
    $.ig.util.profiler.recordTime = function(methodName, time) {
        var key = "meth: " + methodName;
        if (!methods[key]) {
            methods[key] = [];
        }
        methods[key][methods[key].length] = time;
    }

    $.ig.util.profiler.reset = function () {
        methods = {};
    }

    $.ig.util.profiler.logReport = function () {
        var meths = [];
        var j = 0;
        var sum = 0;
        var avg = 0;
        for (var prop in methods) {
            if (prop.indexOf('meth:') === 0) {
                var meth = {};
                meth.name = prop.substr(5);

                sum = 0;
                for (var i = 0; i < methods[prop].length; i++) {
                    sum = sum + methods[prop][i];
                }
                var avg = sum / methods[prop].length;
                meth.avg = avg;
                meth.callCount = methods[prop].length;
                meths[j] = meth;
                j++;
            }
        }

        meths.sort(function (m1, m2) {
            if (m1.avg < m2.avg) {
                return 1;
            }
            if (m1.avg > m2.avg) {
                return -1;
            }
            if (m1.avg == m2.avg) {
                return 0;
            }
        });

        for (var k = 0; k < Math.min(200, meths.length); k++) {
            console.log(meths[k].name + " avg: " + meths[k].avg + " callCount: " + meths[k].callCount);
        }
    }
}(jQuery));

Function.prototype.invoke = function () {
	return this.apply(null, arguments);
};

Function.prototype.on = function (target) {
	var self = this;
	var ret = function () {
		return self.apply(target, arguments);
	};
	ret.original = this;
	ret.target = target;
	return ret;
};

String.prototype.startsWith = function (s) {
	return this.indexOf(s) === 0;
};

String.prototype.endsWith = function (s) {
	var offset = this.length - s.length;
	return offset >= 0 && this.lastIndexOf(s) === offset;
};

String.prototype.remove = function (index, count) {
	if (!count || ((index + count) > this.length)) {
		return this.substr(0, index);
	}
	return this.substr(0, index) + this.substr(index + count);
};

String.prototype.compareTo = function (other) {
	if (this == other) {
		return 0;
	}
	if (this < other) {
		return -1;
	}
	return 1;
};

if (!String.prototype.trim)  {
	//String.trim() was added natively in JavaScript 1.8.1 / ECMAScript 5
	//supported in: Firefox 3.5+, Chrome/Safari 5+, IE9+ (in Standards mode only!)
	String.prototype.trim = function () {
		return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	};
}

String.getHashCode = function () { return this; }
String.isNullOrEmpty = function (s) { return !s || s.length < 1; }
String.empty = function () { return ""; };
String.concat = function () { return [].join.call(arguments, ""); };
String.concat1 = function (o1, o2) { return [].join.call(arguments, ""); };
String.concat2 = function (s1, s2) { return [].join.call(arguments, ""); };
String.concat3 = function () { return [].join.call(arguments, ""); };
String.concat4 = function (o1, o2, o3) { return [].join.call(arguments, ""); };
String.concat5 = function (s1, s2, s3) { return [].join.call(arguments, ""); };
String.concat6 = function (o1, o2, o3, o4) { return [].join.call(arguments, ""); };
String.concat7 = function (s1, s2, s3, s4) { return [].join.call(arguments, ""); };

String.prototype.equals = function (other) {
	return this == other;
};

Array.prototype.insertRange = function (index, items) {
	var i = 0;
	if (this.length == 0) {
		for (i = 0; i < items.length; i++) {
			this[index++] = items[i];
		}
	} else {
		for (i = 0; i < items.length; i++) {
			this.splice(index++, 0, items[i]);
		}
	}
};

Array.prototype.clone = function () {
	return $.extend(true, [], this);
};

Array.prototype.clear = function () {
	this.length = 0;
};

Math.log10 = function (n) {
	return Math.log(n) / Math.log(10);
};

Math.logBase = function (n, n2) {
	return Math.log(n) / Math.log(n2);
};

Math.sign = function (n) {
	if (n < 0) {
		return -1;
	} else if (n > 0) {
		return 1;
	}
	else {
		return 0;
	}
};

Number.getHashCode = function () { return this; };
//Number.isNaN = function(n) { return isNaN(n); }
Number.isInfinity = function(n) { return n === Infinity || n === -Infinity; };

/*
// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};
*/

$.ig.util.isIE7 = $.browser.msie && parseInt($.browser.version, 10) === 7;
$.ig.util.isIE8 = $.browser.msie && parseInt($.browser.version, 10) === 8;
$.ig.util.isIE9 = $.browser.msie && parseInt($.browser.version, 10) === 9;

//A CommonJS Promises/A implementation that will be used with jquery versions prior to 1.5
//that do not have a $.Deferred implementation

// String to Object flags format cache
$.ig.util.jqueryFlagsCache = {};

// Convert String-formatted flags into Object-formatted ones and store in cache
$.ig.util.jqueryCreateFlags = function ( flags ) {
	var object = $.ig.util.jqueryFlagsCache[ flags ] = {},
		i, length;
	flags = flags.split( /\s+/ );
	for ( i = 0, length = flags.length; i < length; i++ ) {
		object[ flags[i] ] = true;
	}
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	flags:	an optional list of space-separated flags that will change how
 *			the callback list behaves
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible flags:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
$.ig.util.jqueryCallbacks = function( flags ) {

	// Convert flags from String-formatted to Object-formatted
	// (we check in cache first)
	flags = flags ? ( $.ig.util.jqueryFlagsCache[ flags ] || $.ig.util.jqueryCreateFlags( flags ) ) : {};

	var // Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = [],
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Add one or several callbacks to the list
		add = function( args ) {
			var i,
				length,
				elem,
				type,
				actual;
			for ( i = 0, length = args.length; i < length; i++ ) {
				elem = args[ i ];
				type = jQuery.type( elem );
				if ( type === "array" ) {
					// Inspect recursively
					add( elem );
				} else if ( type === "function" ) {
					// Add if not in unique mode and callback is not in
					if ( !flags.unique || !self.has( elem ) ) {
						list.push( elem );
					}
				}
			}
		},
		// Fire callbacks
		fire = function( context, args ) {
			args = args || [];
			memory = !flags.memory || [ context, args ];
			fired = true;
			firing = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
					memory = true; // Mark as halted
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( !flags.once ) {
					if ( stack && stack.length ) {
						memory = stack.shift();
						self.fireWith( memory[ 0 ], memory[ 1 ] );
					}
				} else if ( memory === true ) {
					self.disable();
				} else {
					list = [];
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					var length = list.length;
					add( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away, unless previous
					// firing was halted (stopOnFalse)
					} else if ( memory && memory !== true ) {
						firingStart = length;
						fire( memory[ 0 ], memory[ 1 ] );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					var args = arguments,
						argIndex = 0,
						argLength = args.length;
					for ( ; argIndex < argLength ; argIndex++ ) {
						for ( var i = 0; i < list.length; i++ ) {
							if ( args[ argIndex ] === list[ i ] ) {
								// Handle firingIndex and firingLength
								if ( firing ) {
									if ( i <= firingLength ) {
										firingLength--;
										if ( i <= firingIndex ) {
											firingIndex--;
										}
									}
								}
								// Remove the element
								list.splice( i--, 1 );
								// If we have some unicity property then
								// we only need to do this once
								if ( flags.unique ) {
									break;
								}
							}
						}
					}
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function( fn ) {
				if ( list ) {
					var i = 0,
						length = list.length;
					for ( ; i < length; i++ ) {
						if ( fn === list[ i ] ) {
							return true;
						}
					}
				}
				return false;
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory || memory === true ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( stack ) {
					if ( firing ) {
						if ( !flags.once ) {
							stack.push( [ context, args ] );
						}
					} else if ( !( flags.once && memory ) ) {
						fire( context, args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

$.ig.util.jqueryDeferred = function( func ) {
    var doneList = $.ig.util.jqueryCallbacks( "once memory" ),
        failList = $.ig.util.jqueryCallbacks( "once memory" ),
        progressList = $.ig.util.jqueryCallbacks( "memory" ),
        state = "pending",
        lists = {
            resolve: doneList,
            reject: failList,
            notify: progressList
        },
        promise = {
            done: doneList.add,
            fail: failList.add,
            progress: progressList.add,

            state: function() {
                return state;
            },

            // Deprecated
            isResolved: doneList.fired,
            isRejected: failList.fired,

            then: function( doneCallbacks, failCallbacks, progressCallbacks ) {
                deferred.done( doneCallbacks ).fail( failCallbacks ).progress( progressCallbacks );
                return this;
            },
            always: function() {
                deferred.done.apply( deferred, arguments ).fail.apply( deferred, arguments );
                return this;
            },
            pipe: function( fnDone, fnFail, fnProgress ) {
                return $.ig.util.jqueryDeferred(function( newDefer ) {
                    jQuery.each( {
                        done: [ fnDone, "resolve" ],
                        fail: [ fnFail, "reject" ],
                        progress: [ fnProgress, "notify" ]
                    }, function( handler, data ) {
                        var fn = data[ 0 ],
                            action = data[ 1 ],
                            returned;
                        if ( jQuery.isFunction( fn ) ) {
                            deferred[ handler ](function() {
                                returned = fn.apply( this, arguments );
                                if ( returned && jQuery.isFunction( returned.promise ) ) {
                                    returned.promise().then( newDefer.resolve, newDefer.reject, newDefer.notify );
                                } else {
                                    newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
                                }
                            });
                        } else {
                            deferred[ handler ]( newDefer[ action ] );
                        }
                    });
                }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function( obj ) {
                if ( obj == null ) {
                    obj = promise;
                } else {
                    for ( var key in promise ) {
                        obj[ key ] = promise[ key ];
                    }
                }
                return obj;
            }
        },
        deferred = promise.promise({}),
        key;

    for ( key in lists ) {
        deferred[ key ] = lists[ key ].fire;
        deferred[ key + "With" ] = lists[ key ].fireWith;
    }

    // Handle state
    deferred.done( function() {
        state = "resolved";
    }, failList.disable, progressList.lock ).fail( function() {
        state = "rejected";
    }, doneList.disable, progressList.lock );

    // Call given func if any
    if ( func ) {
        func.call( deferred, deferred );
    }

    // All done!
    return deferred;
};

$.ig.util.deferred = function () {
    if ($.Deferred !== undefined) {
        return $.Deferred();
    } else {
        return $.ig.util.jqueryDeferred();
    }
};

$.ig.util.ajax = function (url, contentType, data, method) {
    var deferred = $.ig.util.deferred();
        
    $.ajax({
        url: url,
        contentType: contentType,
        data: data,
        type: method,
        dataType: 'text',
        success: function (data, textStatus, jqXHR) {
            deferred.resolve(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            deferred.reject(errorThrown);
        }
    });

    return deferred.promise();
};