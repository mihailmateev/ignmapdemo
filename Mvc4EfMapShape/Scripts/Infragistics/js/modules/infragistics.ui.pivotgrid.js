 /*!
 * Infragistics.Web.ClientUI PivotGrid 12.2.20122.177
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on: 
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.datasource.js
 *  infragistics.ui.shared.js
 *	infragistics.util.js
 *	infragistics.grid.framework.js
 *	infragistics.olapdatasource.js
 *	infragistics.ui.grid.multicolumnheaders.js
 */
/*global jQuery, Modernizr */
(function ($) {
	function Matrix() {
		this[0] = [];
	}
	Matrix.prototype = [];
	Matrix.prototype.set = function (row, column, value) {
		if (this.length < row + 1) {
			this.setRowCount(row + 1);
		}
		if (this[0].length < column + 1) {
			this.setColumnCount(column + 1);
		}
		this[row][column] = value;
	};
	Matrix.prototype.setRowCount = function (rowCount) {
		var i, oldRowCount = this.length;
		this.length = rowCount;
		for (i = oldRowCount; i < rowCount; i++) {
			this[i] = [];
			this[i].length = this[0].length;
		}
	};
	Matrix.prototype.setColumnCount = function (columnCount) {
		var i;
		for (i = 0; i < this.length; i++) {
			this[i].length = columnCount;
		}
	};
	var _aNull = function (val) { return val === null || val === undefined; };
	$.widget("ui.igPivotGrid", {
		css: {
			expandButton: "ui-iggrid-headerbutton ui-icon ui-icon-plus",
			collapseButton: "ui-iggrid-headerbutton ui-iggrid-headerbuttonexpanded ui-icon ui-icon-minus",
			//buttonContainer: "ui-iggrid-headerbuttoncontainer",
			blockArea: "ui-widget-overlay ui-iggrid-blockarea",
			loading: "ui-iggrid-loadingarea",
			buttonContainer: "ui-iggrid-buttoncontainer"
		},
		options: {
			dataSource: null, // instance of $.ig.XmlaDataSource
            isParentInFrontForColumns: false,
            isParentInFrontForRows: true,
            compactColumnHeaders: false,
            compactRowHeaders: true,
			compactHeaderIndentation: 20, // default indentation for every level when rows are rendered in a "tree"-view structure in a compact way
			dataSourceOptions: {
				/* delegates to $.XmlaDataSource.options.serverUrl */
				serverUrl: null,
				/* delegates to $.XmlaDataSource.options.catalog */
				catalog: null,
				/* delegates to $.XmlaDataSource.options.cube */
				cube: null,
				/* delegates to $.XmlaDataSource.options.rows */
				rows: [],
				/* delegates to $.XmlaDataSource.options.columns */
				columns: [],
				/* delegates to $.XmlaDataSource.options.measures */
				measures: []
			},
			gridOptions: { // options specific to the igGrid that will render the pivot grid view 
				/* delegates to $.igGrid.options.width */
				width: null,
				/* delegates to $.igGrid.options.height */
				height: null,
				/* delegates to $.igGrid.options.defaultColumnWidth */
				defaultColumnWidth: null,
				/* delegates to $.igGrid.options.virtualization */
				virtualization: false,
				/* delegates to $.igGrid.options.fixedHeaders */
				fixedHeaders: true,
				/* delegates to $.igGrid.options.fixedFooters */
				fixedFooters: true,
				/* delegates to $.igGrid.options.caption */
				caption: null,
				/* delegates to $.igGrid.options.features */
				features: [

				],
				/* delegates to $.igGrid.options.tabIndex */
				tabIndex: 0,
				/* delegates to $.igGrid.options.autoFormat */
				autoFormat: 'date',
				/* delegates to $.igGrid.options.renderCheckboxes */
				renderCheckboxes: false,
				/* delegates to $.igGrid.options.alternateRowStyles */
				alternateRowStyles: true,
				/* delegates to $.igGrid.options.autofitLastColumn */
				autofitLastColumn: true,
				/* delegates to $.igGrid.options.enableHoverStyles */
				enableHoverStyles: true
			}
			// extra UI goes here 
			/*,
			treeOptions: {
			
			}
			*/
			// events can be bound to by using .grid() 
		},
		events: {
			tupleMemberExpanding: "tupleMemberExpanding",
			tupleMemberExpanded: "tupleMemberExpanded",
			viewUpdating: "viewUpdating",
			viewUpdated: "viewUpdated"
		},
		_create: function () {
			var dataSource = this.options.dataSource, options, $this = this, extraColsCount, colgroup, i, needsInit;
			// there are two cases, the dataSource is set to an already configured $.ig.XmlaDataSource
			// or the developer is passing a dataSourceOptions object, and we are responsible for 
			// instantiating the data source
			if (dataSource === null || !(dataSource instanceof $.ig.XmlaDataSource)) {
				// instantiate an $.ig.XmlaDataSource based on options.dataSourceOptions
				this._ds = new $.ig.XmlaDataSource({
					serverUrl: this.options.dataSourceOptions.serverUrl,
					isRemote: this.options.dataSourceOptions.isRemote,
					catalog: this.options.dataSourceOptions.catalog,
					cube: this.options.dataSourceOptions.cube,
					rows: this.options.dataSourceOptions.rows,
					columns: this.options.dataSourceOptions.columns,
					measures: this.options.dataSourceOptions.measures
				});
				//this._ds.initialize();
				needsInit = true;
			} else {
				this._ds = dataSource;
			}
			// now merge the generated options with the options.gridOptions that are passed in as arguments of the pivotGrid widget 
			// create the block area
			$('<div></div>').appendTo("body").attr('id', this.element.attr('id') + '_container_block')
				.css('position', 'absolute').addClass(this.css.blockArea).data('efh', '1').hide();
			// bind click event for row headers
			this._gridRenderedHandler = function (event, sender) {
				var table = sender.owner.element, col;
				table.find("tbody th > span[data-expand]").bind("click", function (event) {
					var target = $(event.target), axisName, memberIndex, tupleIndex, expand;
					axisName = target.closest("th").attr("data-axis");
					memberIndex = parseInt(target.closest("th").attr("data-member"), 10);
					tupleIndex = parseInt(target.closest("th").attr("data-tuple"), 10);
					expand = target.attr("data-expand") === "true";
					if (expand) {
						$this._ds.expandTupleMember(axisName, tupleIndex, memberIndex);
					} else {
						$this._ds.collapseTupleMember(axisName, tupleIndex, memberIndex);
					}
					$this.updateGrid();
				});
				// set the extra <col> elements to the grid's table, based on the value of rowsMatrix.length
				extraColsCount = $this._rowsMatrix.length > 0 ? $this._rowsMatrix[0].length : 1;
				// find the colgroups
				colgroup = $(this).find("colgroup");
				for (i = 0; i < extraColsCount; i++) {
					col = $("<col></col>").prependTo(colgroup);
					if ($this.options.gridOptions.defaultColumnWidth) {
						col.width($this.options.gridOptions.defaultColumnWidth);
					}
				}
			};
			$(this.element).on("iggridrendered", this._gridRenderedHandler);

			this._headerRenderedHandler = function (event, sender) {
                // iterate through all column headers
                //var headers = sender.owner.options.columns, table = sender.table;
				var headers = sender.owner._oldCols, table = sender.table, first,
					emptyCellColSpan, emptyCellRowSpan;
				if (headers === null || headers === undefined) {
					headers = sender.owner.options.columns;
				}
				// we need to render the extra THs for every row. for that reason we need the row's string before it's passed to the grid for rendering
				// overwrite the renderRecord functionality
				sender.owner._renderRecord = $.proxy($this._renderPivotRecord, sender.owner);
				$this._processHeaderMarkupRecursive(headers);
				// now add the extra cell to the topmost left corner, for the first headers row
				first = table.find("tr").first();
				// now prepend a th with the respective row and colspan
				emptyCellColSpan = $this._rowsMatrix.length > 0 ? $this._rowsMatrix[0].length : 1;
				emptyCellRowSpan = $this._maxLevel + 1;
				if ($("#" + $this.element.attr("id") + "_emptyCell").length === 0) {
					$("<th></th>").prependTo(first).attr("colSpan", emptyCellColSpan)
						.attr("rowSpan", emptyCellRowSpan).addClass("ui-iggrid-header ui-widget-header")
						.attr("id", $this.element.attr("id") + "_emptyCell");
				} else {
					// change the rowspan & colspan
					$("#" + $this.element.attr("id") + "_emptyCell").attr("rowSpan", emptyCellRowSpan)
						.attr("colSpan", emptyCellColSpan);
				}
				// attach events
				// "on" is not supported in earlier jq versions
				table.find("span[data-expand]").bind("click", function (event) {
					var target = $(event.target), axisName, memberIndex, tupleIndex, expand;
					axisName = target.attr("data-axis");
					memberIndex = parseInt(target.attr("data-member"), 10);
					tupleIndex = parseInt(target.attr("data-tuple"), 10);
					expand = target.attr("data-expand") === "true";
					if (expand) {
						$this._ds.expandTupleMember(axisName, tupleIndex, memberIndex);
					} else {
						$this._ds.collapseTupleMember(axisName, tupleIndex, memberIndex);
					}
					$this.updateGrid();
				});
            };
            $(this.element).on("iggridheaderrendered", this._headerRenderedHandler);
			if ($(this.element).data("igGrid") && !needsInit) {
				$(this.element).igGrid("destroy");
				$(this.element).empty();
			}
			// if we didn't pass an instance of $.XmlaDataSource, we need to init it for the first time 
			if (needsInit) {
				this.updateGrid(true);
			} else {
				// assuming the $.ig.XmlaDataSource instance is already filled with data. 
				options = this._configureOptions(this._ds);
				$(this.element).igGrid(options);
			}
		},
		_configureOptions: function (dataSource) {
			var viewSettings, hasColumns, hasRows,
				cols, dataCols, data, settings, gridDataSource, options;
			viewSettings = {
				isParentInFrontForColumns: this.options.isParentInFrontForColumns,
				isParentInFrontForRows: this.options.isParentInFrontForRows,
                compactRowHeaders: this.options.compactRowHeaders,
                compactColumnHeaders: this.options.compactColumnHeaders
			};
			hasColumns = dataSource.columnAxis().length > 0;
			hasRows = dataSource.rowAxis().length > 0;

		    // going to use the TableView in order to populate an $.ig.DataSource
			this._tableView = new $.ig.TableView(dataSource.result(), hasColumns, hasRows, viewSettings);
            this._tableView.initialize();
			this._rowsMatrix = new Matrix();
			this._fillMatrixWithHeaderCells(this._rowsMatrix, this._tableView.rowHeaders(), "No headers");
			this._maxMemberIndex = dataSource.columnAxis().length - 1;
			cols = this._generateAllGridColumns(this._tableView.columnHeaders());
			//rowHeaders = this._generateRowHeaders(tableView.rowHeaders());
			dataCols = this._generateDataColumns(this._tableView.columnHeaders());
			data = this._transformGridData(this._tableView.resultCells(), dataCols, dataCols.length);
			settings = {dataSource: data};
			gridDataSource = new $.ig.DataSource(settings);
			options = {
				//dataSource: gridDataSource,
				//columns: dataCols,
				//columns: cols, // multi-column headers; 
				autoGenerateColumns: false //,
				//features: [
				//	{
				//		name: "MultiColumnHeaders" // multi-column headers is a requirement of the pivot grid 
				//	}
				//]
			};
			// merge with the options.gridOptions (deep)
			$.extend(true, options, this.options.gridOptions);
			// dataSource and cols are set now (i.e. later, after the merge) - in order to ensure we are overwriting anything that the developer has set
			// because the pivot grid doesn't allow any initial columns or data sources to be set in its options.gridOptions
			options.dataSource = gridDataSource;
			options.columns = cols;
			// merge the features. the PivotGrid requires multi-column headers
			$.merge(options.features, [{ name: "MultiColumnHeaders" }]);
			return options;
		},
		grid: function () {
			return this.element.data("igGrid");
		},
		updateGrid: function (init) {
			var ds = this._ds || this.options.dataSource, options, $this = this, done;
			// show progress indicator here. That's the case when the grid has already been created
			// and we've started expanding/collapsing
			if ($(this.element).data("igGrid")) {
				// change loading indicator image (css class)
				$(this.element).data("igGrid")._loadingIndicator.indicatorElement().attr("class", this.css.loading);
				$(this.element).data("igGrid")._loadingIndicator.show();
				// show the block area
				this._showBlockArea();
			}
			done = function (result) {
				// need to reinitialize the widget here. 
				// unbind event handlers 
				//$($this.element).off("iggridheaderrendered", $this._headerRenderedHandler);
				//$($this.element).off("iggridrendered", $this._gridRenderedHandler);
				$($this.element).igGrid("destroy");
				$($this.element).empty();
				options = $this._configureOptions(ds);
				$($this.element).igGrid(options);
				//$($this.element).data("igGrid")._loadingIndicator.indicatorElement().attr("class", $this.css.loading);
				// hide the block area
				$("#" + $this.element.attr("id") + "_container_block").hide();
				// update the rest of the UI here. such as trees, select boxes, etc. 
			};
			if (init) {
				ds.initialize().done(done).fail(function (error) {
					throw error;
				});
			} else {
				ds.update().done(done).fail(function (error) {
					throw error;
				});
			}
		},
		_transformGridData: function (cells, columns, columnsCount) {
            var data = [], maxRowCount = -1, cellOrdinal, i, colIndex, rowIndex;
            for (i = 0; i < cells.length; i++) {
                //data.push({});
                cellOrdinal = cells[i].cellOrdinal();
                rowIndex = Math.floor(cellOrdinal / columnsCount);
                maxRowCount = rowIndex > maxRowCount ? rowIndex : maxRowCount;
            }
            if (maxRowCount >= 0) {
                maxRowCount++;
            }
            for (i = 0; i < maxRowCount; i++) {
                data.push({});
            }
            // now set the data
            for (i = 0; i < cells.length; i++) {
                cellOrdinal = cells[i].cellOrdinal();
                colIndex = cellOrdinal % columnsCount;
                //data[Math.floor(cellOrdinal / columnsCount)][columns[colIndex].key] = cells[i].value();
				// A.T. should we use formatted value or the data value, in  the data source?
				data[Math.floor(cellOrdinal / columnsCount)][columns[colIndex].key] = cells[i].formatedValue();
            }
            return data;
        },
		_generateAllGridColumns: function (headers) {
			// A.T. the headers collection contains a list of all headers
			// some of which are multicolumn headers
			// so whenever we reach a column with a larger 
			var cols = [], levels = [], i;
			for (i = 0; i < headers.length; i++) {
				if (!levels[headers[i].rowIndex()]) {
					levels[headers[i].rowIndex()] = [];
				}
				levels[headers[i].rowIndex()].push(headers[i]);
			}
			this._maxLevel = levels.length;
			cols = this._processHeadersTree(levels);
			//this._processMultiColumnHeadersRecursive(cols, headers, 0, headers.length);
			return cols;
		},
		_processHeadersTree: function (tree) {
			var cols = [], i, j, parent, parents = [];
			for (i = 0; tree.length >= 1 && i < tree[0].length; i++) {
			// push root items
				this._createHeader(cols, tree[0][i]);
			}
			// fill all children items, by finding their parent 
			for (i = 1; i < tree.length; i++) { // process levels
				parents = [];
				// we need to insert the tree[i] items into their respective places in cols
				parents = this._parentsForLevel(i, cols);
				for (j = 0; j < tree[i].length; j++) { // process individual header cells 
		            // we need to find the item's parent
					parent = this._findParent(parents, tree[i][j]);
					if (parent) {
						this._createHeader(parent, tree[i][j]);
					} else {
						// we need to go one level up
						if (i - 1 >= 1) {
							this._findAndCreateUp(i - 1, i, cols, tree, tree[i][j]);
						}
					}
				}
			}
			return cols;
		},
		_findAndCreateUp: function (level, itemsLevel, cols, tree, item) {
			var parents = [], j, currentItem, parent;
			// we need to insert the tree[i] items into their respective places in cols
			parents = this._parentsForLevel(level, cols);
			for (j = 0; j < tree[itemsLevel].length; j++) { // process individual header cells 
				// we need to find the item's parent
				// itemsLevel - level is optional - this is the rowSpan of the potential parent, in case it's not 1
				currentItem = tree[itemsLevel][j];
				if (currentItem.axisName() === item.axisName() && currentItem.columnIndex() === item.columnIndex()
						&& currentItem.memberIndex() === item.memberIndex() && currentItem.tupleIndex() === item.tupleIndex()
						&& currentItem.caption() === item.caption()) {
					parent = this._findParent(parents, currentItem, itemsLevel - level + 1);
					if (parent) {
						this._createHeader(parent, currentItem);
					} else {
						// we need to go one level up
						if (level - 1 >= 1) {
							this._findAndCreateUp(level - 1, itemsLevel, cols, tree, item);
						}
					}
				}
			}
		},
		_parentsForLevel: function (level, root) {
			var parents = [], i;
			for (i = 0; i < root.length; i++) {
				this._parentsForLevelRecursive(parents, root[i], 1, level);
			}
			return parents;
		},
		_parentsForLevelRecursive: function (parents, currentParent, currentLevel, level) {
			var extraLevel = currentParent.rowspan > 1 ? currentParent.rowspan - 1 : 0, i;
			if (currentLevel === level) {
				//for (i = 0; currentParent.group && i < currentParent.group.length; i++) {
				//	if (currentParent.group[i]) {
				parents.push(currentParent);
					//parents.push(currentParent);
				//	}
				//}
			} else if (currentLevel < level && currentParent.group !== null && currentParent.group !== undefined) {
				for (i = 0; i < currentParent.group.length; i++) {
					this._parentsForLevelRecursive(parents, currentParent.group[i], currentLevel + 1 + extraLevel, level);
				}
			}
		},
		_createHeader: function (parent, col) {
			// there is a case where a header can have colSpan of 1, but still have children
			if (col.columnSpan() > 1 || (col.columnSpan() === 1 && col.isExpanded() && col.isExpandable())) {
				// multi
				parent.push({
					headerText: col.caption(),
					rowspan: col.rowSpan(),
					colSpan: col.columnSpan(),
                    colIndex: col.columnIndex(),
					group: [],
					key: col.axisName() + "_" + col.tupleIndex() + "_" + col.memberIndex(),
					expandable: col.isExpandable(),
					expanded: col.isExpanded(),
					axisName: col.axisName(),
					tupleIndex: col.tupleIndex(),
					memberIndex: col.memberIndex()
				});
			} else {
				parent.push({
					headerText: col.caption(),
					key: col.axisName() + "_" + col.tupleIndex() + "_" + col.memberIndex(),
					expandable: col.isExpandable(),
					expanded: col.isExpanded(),
					axisName: col.axisName(),
					colSpan: col.columnSpan(),
					rowspan: col.rowSpan(),
                    colIndex: col.columnIndex(),
					tupleIndex: col.tupleIndex(),
					memberIndex: col.memberIndex()
				});
			}
		},
		_findParent: function (cols, header, rowSpan) {
			// we need to process cols recursively, until level maches, and the header also matches the parent
			// traverse cols
			var i;
			if (!cols || cols.length === undefined || cols.length === null) {
				return null;
			}
			for (i = 0; i < cols.length; i++) {
				if (rowSpan === undefined || (rowSpan !== undefined && cols[i].rowspan === rowSpan)) {
					//if (cols[i].colSpan  >= header.columnSpan() && header.columnIndex() >= cols[i].colIndex) {
					if (cols[i].colSpan + cols[i].colIndex >= header.columnSpan() + header.columnIndex() && cols[i].colIndex <= header.columnIndex()) {
						//return cols[i];
						if (!cols[i].group) {
							cols[i].group = [];
						}
						return cols[i].group;
					}
				}
			}
			return null;
		},
		_processMultiColumnHeadersRecursive: function (parent, headers, start, end) {
			var i, multiHeaderGroup = [], multiHeader;
            for (i = start; i < end; i++) {
                if (headers[i].columnSpan() > 1) {
                   // multiHeaderGroup = [];
                  //  currentHeader = headers[i];
                    multiHeader = {
                        headerText: headers[i].caption(),
						//rowSpan: headers[i].rowSpan(),
                        //colSpan: headers[i].columnSpan(),
                        group: multiHeaderGroup,
                        key: headers[i].axisName() + "_" + headers[i].tupleIndex() + "_" + headers[i].memberIndex(),
                        expandable: headers[i].isExpandable(),
                        expanded: headers[i].isExpanded(),
						axisName: headers[i].axisName(),
						tupleIndex: headers[i].tupleIndex(),
						memberIndex: headers[i].memberIndex()
                    };
                    parent.push(multiHeader);
                  //  parent = multiHeaderGroup;
					this._processMultiColumnHeadersRecursive(multiHeaderGroup, headers, ++i, i + headers[i - 1].columnSpan());
                    i += headers[i - 1].columnSpan() - 1;
                } else {
                    parent.push({
                        headerText: headers[i].caption(),
                        key: headers[i].axisName() + "_" + headers[i].tupleIndex() + "_" + headers[i].memberIndex(),
                        expandable: headers[i].isExpandable(),
                        expanded: headers[i].isExpanded(),
						axisName: headers[i].axisName(),
						tupleIndex: headers[i].tupleIndex(),
						memberIndex: headers[i].memberIndex()
                    });
                }
            }
        },
		_generateDataColumns: function (headers) {
			var cols = [], i;
			for (i = 0; i < headers.length; i++) {
				if (headers[i].memberIndex() !== this._maxMemberIndex) {
					//A.T. skip headers who aren't on the last level - that's the case when we have more than 1 hierarchies for the columns
					continue;
				}
				if (headers[i].columnSpan() === 1 && (headers[i].isExpandable() === false || !headers[i].isExpanded())) {
					cols.push({
						headerText: headers[i].caption(),
						key: headers[i].axisName() + "_" + headers[i].tupleIndex() + "_" + headers[i].memberIndex()
					});
				}
			}
			return cols;
		},
		_processHeaderMarkupRecursive: function (headers) {
			var i, expanded, expandable, expandIcon, collapseIcon, headerCell, markup, button;
			for (i = 0; i < headers.length; i++) {
				expanded = headers[i].expanded;
				expandable = headers[i].expandable;
				expandIcon = "<span data-expand='true' class='" + this.css.expandButton + "'/>";
				collapseIcon = "<span data-expand='false' class='" + this.css.collapseButton + "'/>";
				headerCell = $("#" + this.element.attr("id") + "_" + headers[i].key);
				markup = "";
				if (expandable && !expanded) {
					markup = expandIcon;
				} else if (expanded) {
					markup = collapseIcon;
				}
				if (markup !== "") {
					if (headerCell.find("span[data-expand]").length > 0) {
						headerCell.find("span[data-expand]").remove();
					}
					button = $(markup).prependTo(headerCell)
						.attr("data-axis", headers[i].axisName)
						.attr("data-member", headers[i].memberIndex)
						.attr("data-tuple", headers[i].tupleIndex);
					// wrap the expand/collapse button and the header text span in another span
					//buttonContainer = $("<span></span>").prependTo(headerCell).addClass(this.css.buttonContainer);
					//buttonContainer.append(button).append(headerCell.find(".ui-iggrid-headertext"));
				}
				if (headers[i].group) {
					this._processHeaderMarkupRecursive(headers[i].group);
				}
			}
		},
		_showBlockArea: function () {
			var block, pos, left, top, grid = this.element.data("igGrid");
			block = $('#' + this.element.attr('id') + '_container_block');
			pos = grid.container().offset();
			left = pos.left;
			top = pos.top;
			if (block.outerWidth() !== grid.container().outerWidth()) {
				block.css('width', grid.container().outerWidth());
			}
			if (block.outerHeight() !== grid.container().outerHeight()) {
				block.css('height', grid.container().outerHeight());
			}
			block.css({left: left, top: top}).fadeToggle();
		},
		_fillMatrixWithHeaderCells: function (matrix, headerCells, emptyHeaderMessage) {
			var expandIcon, collapseIcon, headerCell, text, rowSpan, columnSpan, rowIndex, columnIndex,
				axisName, tupleIndex, memberIndex, isExpandable, isExpanded, buttonMarkup = "", indent, i, css;
			if (!headerCells || headerCells.length === 0) {
				matrix.set(0, 0, "<th>" + emptyHeaderMessage + "</th>");
				return;
			}
			expandIcon = "<span data-expand='true' class='" + this.css.expandButton + "' style='margin-left: $$margin$$px;'></span>";
			collapseIcon = "<span data-expand='false' class='" + this.css.collapseButton + "' style='margin-left: $$margin$$px;'></span>";
			for (i = 0; i < headerCells.length; i++) {
				headerCell = headerCells[i];
				text = headerCell.caption();
				rowSpan = headerCell.rowSpan();
				columnSpan = headerCell.columnSpan();
				rowIndex = headerCell.rowIndex();
				columnIndex = headerCell.columnIndex();
				axisName = headerCell.axisName();
				tupleIndex = headerCell.tupleIndex();
				memberIndex = headerCell.memberIndex();
				isExpandable = headerCell.isExpandable();
				isExpanded = headerCell.isExpanded();

				css = "ui-iggrid-header ui-widget-header";

				matrix.set(rowIndex + rowSpan - 1, columnIndex + columnSpan - 1, undefined);
				buttonMarkup = isExpanded ? collapseIcon : expandIcon;
				indent = this.options.compactHeaderIndentation * headerCell.levelNumber();
				buttonMarkup = buttonMarkup.replace("$$margin$$", indent);
				if (!isExpandable) {
					text = "<span style='margin-left:" + this.options.compactHeaderIndentation * headerCell.levelNumber() + "px;'>" + text + "</span>";
				}
				matrix.set(
					rowIndex,
					columnIndex,
					"<th " +
						"class='" + css + "' " +
						"data-skip='true' " + //A.T. important for features 
						"rowspan='" + rowSpan + "' " +
						"colspan='" + columnSpan + "' " +
						"data-axis='" + axisName + "' " +
						"data-tuple='" + tupleIndex + "' " +
						"data-member='" + memberIndex + "'>" +
						(isExpandable ? buttonMarkup : "") +
						text + "</th>"
				);
			}
		},
		_renderPivotRecord: function (data, rowIndex) {
			// generate a Tr and append it to the table
			var i, key = this.options.primaryKey, ar = this.options.accessibilityRendering,
				grid = this, dstr = "", cols = this.options.columns, noVisibleColumns, str = "",
				matrix = this.element.data("igPivotGrid")._rowsMatrix;

			// take into account any offset
			//A.T. TODO: refactor this so that the pivot grid doesn't know about paging
			// there are visualization (misalignment issues with this, so commenting for now)
			//rowIndex += grid.dataSource.pageIndex() * grid.dataSource.pageSize();

			dstr += '<tr';
			if (rowIndex % 2 !== 0 && this.options.alternateRowStyles) {
				dstr += ' class="' + grid.css.recordAltClass + '"';
			}
			if (!_aNull(key)) {
				dstr += ' data-id="' + this._kval_from_key(key, data) + '"';
			} else if (!_aNull(data.ig_pk)) {
				dstr += ' data-id="' + data.ig_pk + '"';
			}
			//data index to which the row is bound
			if (this.options.virtualization && this.options.virtualizationMode === 'continuous') {
			    dstr += ' data-row-idx="' + rowIndex + '"';
            }
			if (ar) {
				dstr += ' role="row">';
			} else {
				dstr += '>';
			}
			//var str = "", matrix = $this.element.data("igPivotGrid")._rowsMatrix;
			for (i = 0; i < matrix[rowIndex].length; i++) {
				if (matrix[rowIndex][i]) {
					str += matrix[rowIndex][i];
				}
			}
			if (str !== "") {
				dstr += str;
			}
			if (cols.length > 0) {
				noVisibleColumns = true;
				$(cols).each(function (colIndex) {
					if (cols[colIndex].hidden) {
						return;
					}
					noVisibleColumns = false;
					if (ar) {
						dstr += '<td role="gridcell" aria-describedby="' + this.key + '"';
					} else {
						dstr += '<td';
					}
					// K.D. March 21st, 2012 Bug #105038 Branching the logic for when a rowTemplate is defined
					if (data[this.key] === undefined) {
						if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
							// K.D. May 8th, 2012 Templated string adds the > to cover templated attributes in the td
							dstr += ' ';
							dstr += grid._renderTemplatedCell(data, this);
						} else {
							dstr += '>';
							dstr += grid._renderCell(data[colIndex], this);
						}
						dstr += '</td>';
					} else {
						if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
							// K.D. May 8th, 2012 Templated string adds the > to cover templated attributes in the td
							dstr += ' ';
							dstr += grid._renderTemplatedCell(data, this);
						} else {
							dstr += '>';
							dstr += grid._renderCell(data[this.key], this);
						}
						dstr += '</td>';
					}
				});
				if (noVisibleColumns) {
					dstr += '<td role="gridcell"></td>';
				}
			} else {
				// check if array
				if ($.type(data) === "array") {
					for (i = 0; i < data.length; i++) {
						if (ar) {
							dstr += '<td role="gridcell">' + data[i] + '</td>';
						} else {
							dstr += '<td>';
							dstr += data[i];
							dstr += '</td>';
						}
					}
				} else {
					for (key in data) {
						if (data.hasOwnProperty(key)) {
							if (ar) {
								dstr += '<td role="gridcell" aria-describedby="' + key + '">' + data[key] + '</td>';
							} else {
								dstr += '<td>';
								dstr += data[key];
								dstr += '</td>';
							}
						}
					}
				}
			}
			dstr += '</tr>';
			return dstr;
		},
		destroy: function () {
			//$(this.element).igGrid("destroy");
			var block = $("#" + this.element.attr("id") + "_container_block");
			block.remove();
			$.Widget.prototype.destroy.call(this);
		}
    });
	$.extend($.ui.igPivotGrid, { version: '12.2.20122.1021' });
}(jQuery));