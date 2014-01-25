/*!
* Infragistics.Web.ClientUI igGrid KnockoutJS extension 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*	jquery-1.7.1.js
*	ig.util.js
*	ig.dataSource.js
*	ig.ui.grid.framework.js
*/

/*global ko, $*/
ko.bindingHandlers.igGrid = {
    'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // get the value accessor
        //var d = ko.mapping.toJS(valueAccessor()), grid = $(element);
        var grid = $(element), gridObj = grid.data('igGrid'), binding, options, key, handler, g, o, d;
        /*
        var od = valueAccessor()(), grid = $(element), d = [];
        for (var i = 0; i < od.length; i++) {
        d.push({});
        for (var x in od[i]) {
        if (od[i].hasOwnProperty(x)) {
        d[i][x] = (od[i][x])(); // unmapping
        }
        }
        }
        */
        if (grid.attr("data-create") !== "false") {
            binding = ko.utils.unwrapObservable(valueAccessor());
            // instantiate the iggrid
            options = {};
            options.dataSource = new $.ig.KnockoutDataSource({ dataSource: binding.dataSource });
            // add the other options which are defined 
            for (key in binding) {
                if (binding.hasOwnProperty(key) && key !== "dataSource") {
                    options[key] = binding[key];
                }
            }
        } else {
			binding = options = gridObj.options;
		}
        //var opts = grid.data("igGrid").options;
        // this must be done after every rowsrendered event such that it works for virtualization and page changes as well
        handler = function (event, args) {
            var opts = args.owner.options, ds, settings;
            ds = ko.isObservable(binding.dataSource) ? binding.dataSource() : binding.dataSource;
			if (ds instanceof $.ig.DataSource) {
				settings = ds.settings;
				ds = ds.kods ? ko.isObservable(ds.kods) ? ds.kods() : ds.kods : ds.data();
				if (settings.responseDataKey) {
					if (ko.isObservable(ds[settings.responseDataKey])) {
						ds = ds[settings.responseDataKey]();
					} else {
						ds = ds[settings.responseDataKey];
					}
				}
			}
            // attach the bindings
            grid.attr("data-bound", true);
            if (!opts.rowVirtualization && !opts.virtualization) {
                args.owner._startRowIndex = 0;
            }
            args.owner.element.children("tbody").children("tr").map(function (i) {
                // for each column apply the text: column name binding
                $(this).children().map(function (j) {
                    //$(this).attr("data-bind", "igCell: {value: " + opts.columns[j].key + "}");
                    //$(this).attr("data-bound", "true");
                    // we don't want this to happen after the initial rendering, for the whole grid ! - i.e. we just want to apply the bindings without rendering
                    // check if we are dealing with observables, and only apply the bindings for them
                    var dataVal = ds[i + args.owner._startRowIndex][opts.columns[j].key];
                    if (ko.isObservable(dataVal)) {
                        ko.applyBindingsToNode(this, { igCell: { value: opts.columns[j].key} }, dataVal);
                    }
                });
            });
            grid.removeAttr("data-bound");
        };
        grid.bind("iggriddatarendered", handler).bind("iggridvirtualrecordsrender", handler);
        if (grid.attr("data-create") !== "false") {
            grid.igGrid(
				options
            /* example configuration */
            /*
            {
            autoCommit: false, // autocommit is behaving strangely (meaning it's really slow... find out why) 
            features: [
            {
            name: 'Updating', 
            editMode: 'cell', 
            enableDeleteRow: false
            }
				
            ],
            }
            */
			);
        } else {
            // just apply the initial bindings
            g = grid.data("igGrid");
            o = g.options;
            d = g.dataSource.kods;
            if (o.responseDataKey && d[o.responseDataKey]) {
                d = d[o.responseDataKey];
            }
            d = ko.isObservable(d) ? d() : d;
            grid.attr("data-bound", true);
            grid.find("tbody").children("tr").map(function (i) {
                // for each column apply the text: column name binding
                $(this).children().map(function (j) {
                    var dataVal = d[i][o.columns[j].key];
                    if (ko.isObservable(dataVal)) {
                        ko.applyBindingsToNode(this, { igCell: { value: o.columns[j].key} }, dataVal);
                    }
                });
            });
            grid.removeAttr("data-bound");
        }
        //grid.find("tbody").attr("data-bind", "foreach: data");
        return { 'controlsDescendantBindings': true };
        //return ko.bindingHandlers.igCell.init(element, newAccessor, allBindingsAccessor, viewModel, bindingContext);
    },
    'update': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // we need to apply the bindings to the respective node. when this is called, it means some observable got updated
        var grid = $(element).data("igGrid"), newds, oldds, updating = $(element).data("igGridUpdating"), i, val, val2, newRec; // newds = ko.mapping.toJS(valueAccessor());
        newds = valueAccessor().dataSource;
        // perform diff on the data source ? one possible way. 
        // rebind grid
        oldds = grid.dataSource.data();
        //var cols = grid.options.columns;
        /*
        var start = new Date().getTime();
        // assuming both are of equal length, no records have been removed or added, for the latter to work
        // we need to subscribe to the observableArray (if it works at all)
        for (var i = 0; i < newds.length; i++) {
        for (var j = 0; j < cols.length; j++) {
        if (newds[i][cols[j].key]() !== oldds[i][cols[j].key]) {
        // update cell with the new val 
        var newFormattedVal = grid._renderCell(newds[i][cols[j].key](), cols[j]);
        // updatecell
        $(grid.cellAt(j, i)).text(newFormattedVal);
        }
        }
        }
        */
        if (updating === null || updating === undefined) {
            throw new Error("two-way adding and deleting of rows with KnockoutJS requires the Updating feature to be defined");
        }
        // data source has changed. We certainly don't want to reset the whole data source, if a single row was removed or added
        // therefore we are going to compare the length , and determine if it's a pop or a push operation (i.e. delete vs. add)
        // inserts aren't supported
        // we can safely assume the diff will be 1, because this function will fire every time a record is pushed or popped. 
        if (typeof (newds) === "function") {
			if (newds().length !== oldds.length) {
				grid.dataSource._koUpdate = true;
			}
            if (newds().length < oldds.length) {
                // a row has been deleted
                // also consider the scenario where a record is removed randomly. 
                val = newds()[newds().length - 1][grid.options.primaryKey];
                val = ko.isObservable(val) ? val() : val;
                if (val === oldds[oldds.length - 1][grid.options.primaryKey]) {
                    for (i = 0; i < oldds.length; i++) {
                        val2 = newds()[i][grid.options.primaryKey];
                        val2 = ko.isObservable(val2) ? val2() : val2;
                        if (oldds[i][grid.options.primaryKey] !== val2) {
                            updating.deleteRow(oldds[i][grid.options.primaryKey]);
                            break;
                        }
                    }
                } else {
                    updating.deleteRow(oldds[oldds.length - 1][grid.options.primaryKey]);
                }
            } else if (newds().length > oldds.length) {
                // a row has been added (always to the end)
                // add the new row to the data source, and render it
                val = newds()[newds().length - 1][grid.options.primaryKey];
                val = ko.isObservable(val) ? val() : val;
                if (val === oldds[oldds.length - 1][grid.options.primaryKey]) {
                    // row was inserted. Find its index
                    for (i = 0; i < oldds.length; i++) {
                        val2 = newds()[i][grid.options.primaryKey];
                        val2 = ko.isObservable(val2) ? val2() : val2;
                        if (oldds[i][grid.options.primaryKey] !== val2) {
                            updating.addRow(ko.mapping.toJS(newds()[i]));
                            break;
                        }
                    }
                } else {
                    // add the new record and the respective node binding
					newRec = ko.mapping.toJS(newds()[newds().length - 1]);
                    updating.addRow(newRec);
                }
            }
        }
    }
};
ko.visitPropertiesOrArrayEntries = function (rootObject, visitorCallback) {
	var i, propertyName;
	if (rootObject instanceof Array) {
		for (i = 0; i < rootObject.length; i++) {
			visitorCallback(i);
		}
	} else {
		for (propertyName in rootObject) {
			if (rootObject.hasOwnProperty(propertyName)) {
				visitorCallback(propertyName);
			}
		}
	}
};
ko.bindingHandlers.igHierarchicalGrid = {
    'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var grid = $(element), binding, options, ds, opts, skip = 0, td, childgridhandler, key;
		// we don't want to "unrap" the observable at once. because this will unwrap the whole hierarchy
		binding = ko.utils.unwrapObservable(valueAccessor());
		options = {};
		ds = ko.isObservable(binding.dataSource) ? binding.dataSource() : binding.dataSource;
		if (ds instanceof $.ig.DataSource) {
			ds = ds.data();
		}
		options.dataSource = new $.ig.KnockoutDataSource({ dataSource: binding.dataSource });
		for (key in binding) {
			if (binding.hasOwnProperty(key) && key !== "dataSource") {
				options[key] = binding[key];
			}
		}
        grid.igHierarchicalGrid(options);
		grid.data("observableDataSource", options.dataSource);
		childgridhandler = function (event, args) {
			var kods, opts = args.options, observableDs;
			//if we are unwrapping everything at once we still need to handle this event in order to find the ko observable
			// create a KO data source here and find the path to the child KO observable
			kods = args.owner.element.data("observableDataSource");
			// find the child data, basically we need at knockoutjs-aware dataAt() implementation
			observableDs = kods.dataAt(args.id, args.path);
			opts.dataSource = new $.ig.KnockoutDataSource({
				primaryKey: opts.primaryKey,
				dataSource: opts.dataSource,
				observableDataSource: observableDs,
				responseDataKey: opts.responseDataKey
			});
			args.element.igGrid(opts);
			opts = args.element.data("igGrid").options;
			args.element.attr("data-create", false);
			// apply bindings
			//separate this 
			// attach the bindings
			/*
			args.element.attr("data-bound", true);
			args.element.children("tbody").children("tr").map(function (i) {
				// for each column apply the text: column name binding
				$(this).children().map(function (j) {
					td = $(this);
					if (!td.attr('data-skip') && !td.hasClass('ui-iggrid-expandcolumn')) {
						ko.applyBindingsToNode(this, { igCell: { value: opts.columns[j - skip].key} }, ds[i][opts.columns[j - skip].key]);
					} else {
						skip++;
					}
				});
				skip = 0;
			});
			args.element.removeAttr("data-bound");
			*/
			ko.applyBindingsToNode(args.element, {igGrid: {} }, observableDs);
		};
		// bind to the childgridcreating event
		grid.delegate("table", "igchildgridcreating", childgridhandler);
        opts = grid.data("igGrid").options;
        // attach the bindings
        grid.attr("data-bound", true);
        grid.children("tbody").children("tr").map(function (i) {
            // for each column apply the text: column name binding
            $(this).children().map(function (j) {
				td = $(this);
				if (!td.attr('data-skip') && !td.hasClass('ui-iggrid-expandcolumn')) {
					ko.applyBindingsToNode(this, { igCell: { value: opts.columns[j - skip].key} }, ds[i][opts.columns[j - skip].key]);
				} else {
					skip++;
				}
            });
			skip = 0;
        });
        grid.removeAttr("data-bound");
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		// we cannot rely on this in order to intercept updates to child data sources, because there is no indication what's the root, parent, etc (at least they are
		// not correct. 
		// the problem here is that if we process the whole hierarchical observable source once, with the intention to reuse it, some children may be modified
		// before we create the child grid at that path. therefore when the child grid is created, we should always re-initialize it at the correct data path, 
		// which would make the processing of the recursive observable in the first time kind of unnecessary, but there is no way with KO to stop this recursion
    }
};
/*
ko.bindingHandlers['igRow'] = {
	'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	
	},
	'update': function (element, valueAccessor, allBindingsAccessor, viewModel) {
	}
};
*/
ko.bindingHandlers.igCell = {
    'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        //return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor, allBindingsAccessor, viewModel) {
        // valueAccessor().value is the column key
        //var start = new Date().getTime();
        var cell = $(element), grid = cell.closest(".ui-iggrid-table"), newFormattedVal, tr, rec, keyVal, col;
        if (grid.attr("data-bound") !== "true") {
            newFormattedVal = grid.data("igGrid")._renderCell(viewModel, valueAccessor().value);
            // updatecell
            cell.text(newFormattedVal);
            // we must also ensure we update the grid's dataSource as well
            // get the closest row
            tr = cell.closest('tr');
            col = grid.data("igGrid").columnByKey(grid.data("igGrid").options.primaryKey);
            if (tr.attr('data-id') !== null && tr.attr('data-id') !== undefined) {
				// we have a primary key defined
				if (col.dataType === "number" || col.dataType === undefined) {
					keyVal = parseInt(tr.attr('data-id'), 10);
				} else {
					keyVal = tr.attr('data-id'); // we are dealing with string primary keys 
				}
				rec = grid.data("igGrid").dataSource.findRecordByKey(keyVal);
				rec[valueAccessor().value] = viewModel;
            } else {
				throw new Error("Updating the data source requires a primary key to be defined");
            }
            // the tricky part here - someone updated the KO data source externally, we need to record a transaction in the data source
            // i.e. we need a way to ensure we recognize internal KO updates vs. external ones ? 
        }
    }
};