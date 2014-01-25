/*!
 * Infragistics.Web.ClientUI Grid Feature Chooser 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */

/*global jQuery, Modernizr*/
if (typeof (jQuery) !== "function") {
    throw new Error("jQuery is undefined");
}

(function ($) {
    $.widget("ui.igGridFeatureChooser", {
		/* igGridSummaries widget -  The widget is pluggable to the element where the grid is instantiated and the actual igGrid object doesn't know about this			
		*/
		/* the instance of the grid to which this feature is going to attach its functionality */
	    css: {
			featureChooserDropDown: 'ui-iggrid-featurechooser-dropdown-dialog ui-widget ui-widget-content ui-corner-all',
            headerButtonIcon: 'ui-iggrid-featurechooserbutton ui-icon ui-icon-gear',
            headerButtonIconMouseOver: 'ui-iggrid-header-icon-mouseover',
            headerButtonIconSelected: 'ui-iggrid-header-icon-selected',
            listClass: 'ui-iggrid-featurechooser-list ui-menu ui-widget ui-widget-content ui-corner-all',
            listItemClass: 'ui-iggrid-featurechooserddlistitemicons ui-state-default',
            itemIconCotainer: 'ui-iggrid-featurechoosericoncontainer',
			itemSecondaryIconContainer: 'ui-iggrid-featurechooser-secondaryicon-container',
            separator: 'ui-iggrid-featurechooser-separator',
            listItemText: 'ui-iggrid-featurechooserddlistitemtext',
            itemSelected: "item-selected",
            dropDownListItemHover: 'ui-iggrid-featurechooser-listitem-hover ui-state-active ui-state-hover',
            dropDownButtonClasses: "ui-igbutton",
            dropDownButtonHoverClasses : "",
            dropDownButtonActiveClasses : "", // when button is clicked 
            dropDownButtonFocusClasses : "", // when button get focus
            dropDownButtonLabelClass : ""
	    },
        options: {
            dropDownWidth: null,
            animationDuration: 400
        },
        events: {
            featureChooserRendering: 'featureChooserRendering',
            featureChooserRendered: 'featureChooserRendered',
            featureChooserDropDownOpening: 'featureChooserDropDownOpening',
            featureChooserDropDownOpened: 'featureChooserDropDownOpened',
            featureToggling: 'featureToggling',
            featureToggled: 'featureToggled'
        },
        _createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			//this.options.columnSettings = [];
            $.Widget.prototype._createWidget.apply(this, arguments);
		},

        _create: function () {
            this.analyzedData = {};
            this.data = {};

            this._features = [];
            this._isFeaturesAnalyzed = false;

            this.isInitialized = false;
            this.grid = this.element.data('igGrid');
            this.gridId = this.element[0].id;

            this._analyzeGridFeaturesOptions();
            this._countRenderedFeatures = 0;

            this._headerRenderedHandler = $.proxy(this._headerRendered, this);
            this.grid.element.bind('iggridheaderrendered', this._headerRenderedHandler);
        },

        _analyzeGridFeaturesOptions: function () {
            /* analyze features and push those which are defined in grid element */
            var i,
                features = this.grid.options.features,
                featuresLength = features.length;

            for (i = 0; i < featuresLength; i++) {
                this._features.push(features[i].name);
            }
        },

        shouldShowFeatureIcon: function (key) {
            if (this.analyzedData[key] !== undefined && this.analyzedData[key] !== null) {
                return (this.analyzedData[key].length <= 1);
            }

            return true;
        },

        _setOption: function (key, value) {
		    // handle new settings and update options hash
			$.Widget.prototype._setOption.apply(this, arguments);
	    },

        _id: function (name, suffix) {
            var res = this.gridId + '_' + name;
            if (suffix !== undefined && suffix !== null && $.type(suffix) === 'string') {
                res += '_' + suffix;
            }
            return res;
        },

        _callFeatureMethod: function (feature, isSelected, columnKey, event) {
            var method,
                $columnCell,
                methodType = $.type(feature.method),
                featureData = this.grid.element.data('igGrid' + feature.name);

            $columnCell = $('#' + this.grid.element[0].id + '_' + columnKey);
            if (methodType === 'string') {
                if (featureData === undefined || featureData === null) {
                    return false;
                }
                method = featureData[feature.method];
            } else if (methodType === 'function') {
                method = feature.method;
            }

            if (method === undefined || method === null) {
                return false;
            }

            // the event should be called from button - e.g. in filtering it tries to get column cell - 
            // which is parent of the target element
            if ($.type(feature.method) === 'string') {
                featureData[feature.method](event, columnKey, isSelected, feature.methodData);
            } else {
                feature.method(event, columnKey, isSelected, feature.methodData);
            }

            return true;
        },

        _getFeatureByKeyName: function (columnKey, featureName) {
			var i,
				feature = null,
				columnData = this.data[columnKey],
                columnDataLength = columnData.length;

			for (i = 0; i < columnDataLength; i++) {
                if (columnData[i].name === featureName) {
                    feature = columnData[i];
                    break;
                }
            }

			return feature;
		},

		_clickFeature: function (event) {
			var i, j,
				$target = ($(event.target).data('data') !== undefined) ? $(event.target) : $(event.currentTarget),
                d = $target.data('data'),
				self = this,
				isSelected = null,
				type = d.type,
                columnKey = d.columnKey,
                featureName = d.featureName,
                columnData = this.data[columnKey],
                columnDataLength = columnData.length,
                feature = null;


			feature = this._getFeatureByKeyName(columnKey, featureName);
			if (feature === null || feature === undefined) {
                return;
            }

			if (type === 'toggle') {
				feature.isSelected = isSelected = !feature.isSelected;
			}

			if (this._trigger(
					this.events.featureToggling,
					null,
					{
						target: $target,
						columnKey: columnKey,
						isToSelect: isSelected,
						featureName: 'igGrid' + feature.name
					}
				) === false) {
				return;
			}


			if (this._callFeatureMethod(feature, isSelected, columnKey, event) === false) {
                return;
            }

			// when updateOnClickAll is true AND isOnBottom is <> true then
            // update the state of this feature in the other feature chooser dropdowns
            if (type === 'toggle') {
				self._setSelectedItem(
					columnKey,
					isSelected,
					$('#' + self._id('featurechooser_dd_li_' + columnKey, featureName))
				);

				if (feature.updateOnClickAll === true) {
					$.each(self.data, function (index, value) {
						if (index !== columnKey) {
							for (j = 0; j < value.length; j++) {
								if (value[j].name === featureName) {
									break;
								}
							}

							if (j === value.length) {
								return true;
							}

							// update isSelected property for other columns specified feature
							columnData = self.data[index];
							if (columnData === null || columnData === undefined) {
								return true;
							}
							columnDataLength = columnData.length;

							for (i = 0; i < columnDataLength; i++) {
								if (columnData[i].name === featureName) {
									columnData[i].isSelected = isSelected;
									break;
								}
							}

							self._setSelectedItem(
								index,
								isSelected,
								$('#' + self._id('featurechooser_dd_li_' + index, value[j].name))
							);
						}
					});
				}
            }

		},
		_setListItemText: function (columnKey, featureName, text) {
			// M.H. 20 March 2012 Fix for bug #105270
			$('#' + this._id('featurechooser_dd_li_' + columnKey, featureName) + ' span.ui-iggrid-featurechooserddlistitemtext').text(text);
		},
		_analyzeFeatures: function () {
            if (this._isFeaturesAnalyzed === true) {
                return;
            }

            var i, k,
                cs = this.grid.options.columns,
                csLength = cs.length,
                featureName,
                featuresLength = this._features.length,
                features = this._features,
                newFeatures = [],
                columnsFeature,
                columnsFeatureLength,
                featureInstance,
                columnKey;

            for (i = 0; i < featuresLength; i++) {
                featureName = features[i];
                featureInstance = this.grid.element.data('igGrid' + featureName);

                if (featureInstance === undefined || featureInstance === null) {
                    continue;
                }

                if (featureInstance.renderInFeatureChooser !== true) {
                    continue;
                }

                if (featureInstance._columnMap === undefined || featureInstance._columnMap === null) {
                    continue;
                }

                columnsFeature = featureInstance._columnMap();
                if (columnsFeature === false || columnsFeature === null || columnsFeature === undefined) {
                    // there is no column settings for specified feature
                    continue;
                }

                columnsFeatureLength = columnsFeature.length;
                if (columnsFeatureLength === 0) {
                    // feature should be shown in all columns
                    for (k = 0; k < csLength; k++) {
                        columnKey = cs[k].key;
                        if (this.analyzedData[columnKey] === undefined || this.analyzedData[columnKey] === null) {
                            this.analyzedData[columnKey] = [];
                        }

						if (this._isFeatureExistByColumnKey(featureName, columnKey) === true) {
							continue;
						}
                        this.analyzedData[columnKey].push(
                            {
                                name: featureName,
                                method: null,
                                text: null,
                                iconClass: null,
                                isSelected: false,
                                columnCell: null,
                                isActive: false
                            }
                        );
                    }
                } else {
                    for (k = 0; k < columnsFeatureLength; k++) {
                        columnKey = columnsFeature[k].columnKey;
                        if (this.analyzedData[columnKey] === undefined
                                || this.analyzedData[columnKey] === null) {
                            this.analyzedData[columnKey] = [];
                        }

                        if (columnsFeature[k].enabled !== true || this._isFeatureExistByColumnKey(featureName, columnKey) === true) {
                            continue;
                        }

                        this.analyzedData[columnKey].push(
                            {
                                name: featureName,
                                method: null,
                                text: null,
                                iconClass: null,
                                isSelected: false,
                                columnCell: null,
                                isActive: false
                            }
                        );
                    }
                }
                newFeatures.push({name: featureName, instance: featureInstance});
            }

            this._features = newFeatures;
            this._isFeaturesAnalyzed = true;
        },

		_isFeatureExistByColumnKey: function (featureName, columnKey) {
			var aData = this.analyzedData[columnKey], ret = false;

			if (aData === null || aData === undefined) {
				return true;
			}

			$.each(aData, function (index, value) {
				if (value.name === featureName) {
					ret = true;
					return false;
				}
			});

			return ret;
		},
        _shouldRenderInFeatureChooser: function (columnKey) {
            // it is called only for the first time when _shouldRenderInFeatureChooser
            this._analyzeFeatures();

            if (this.analyzedData[columnKey] !== undefined && this.analyzedData[columnKey] !== null) {
                return this.analyzedData[columnKey].length > 1;
            }
            return false;
        },
        _headerRendered: function (sender, args) {
            //prevent handling of other grids' events in the case of hierarchical grid
            if (args.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return;
            }
            if (sender.target.id !== this.grid.element[0].id) {
				return;
			}
            var self = this;
            $.each(this.data, function (columnKey, elem) {
                self._initFC(columnKey, elem);
            });

        },

        _initFC: function (columnKey, elem) {
            var j, self = this,
                thead = this.grid.container().find('thead'),
			    $columnCell,
                $theadCell,
                buttonId,
                cancelFunc,
                $button,
                $headerContainer;

            $columnCell = $('#' + self.grid.element[0].id + '_' + columnKey);
            buttonId = self._id('featureChooser_headerButton', columnKey);

            // Cancel rendering is fired only when features are not rendered in feature chooser. 
            // Otherwise this means some features are rendered and then rendering of feature chooser is canceled
            if (elem.isCancelledRendering !== false
                    && self._trigger(self.events.featureChooserRendering,
                                        null,
                                        {owner: self.grid, columnKey: columnKey, columnCell: $columnCell}) === false) {
                elem.isCancelledRendering = true;
                return;
            }
            elem.isCancelledRendering = false;
            $theadCell = thead.find('#' + self.grid.element[0].id + '_' + columnKey);
            $headerContainer = $theadCell.find('.ui-iggrid-indicatorcontainer');
                // it is not set container for feature chooser in the header

            if ($headerContainer.length === 0) {
                $headerContainer = $('<div></div>')
                    .appendTo($theadCell)
                    .addClass('ui-iggrid-indicatorcontainer');
            }
            cancelFunc = function (e) { e.preventDefault(); e.stopPropagation(); };

            $button = $('<span></span>').appendTo($headerContainer).addClass(self.css.headerButtonIcon);
            $button.wrap('<a id="' + buttonId + '" href="#" title=""></a>');
			// M.H. 22 March 2012 Fix for bug #105757
			$button.parent()
				.attr('th-remove-focus', '')
				.bind({
				// M.H. 22 March 2012 Fix for bug #105783
					keydown: function (event) {
						var $item, $nextPrevItem, $dialog = $('#' + self._id('featureChooser_dd', columnKey));

						if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
							$item = $dialog.find('ul li.ui-iggrid-featurechooser-listitem-hover');
							if ($dialog.is(':visible') && $item.length > 0) {
								if ($item.find('*[role="button"]').length) {
									event.target = $item.find('*[role="button"]:eq(0)');
								} else {
									event.target = $item[0];
								}
								self._clickFeature(event);
							}
							self._toggleDropDown(event, columnKey, false);
							cancelFunc(event);
						} else if (event.keyCode === $.ui.keyCode.DOWN || event.keyCode === $.ui.keyCode.UP) {
							if ($dialog.is(':visible')) {
								$item = $dialog.find('ul li.ui-iggrid-featurechooser-listitem-hover');
								if ($item.length > 1) {
									$.each($item, function (index, value) {
										self._removeCssSelectionListItem($(value));
									});
								}
								$nextPrevItem = ((event.keyCode === $.ui.keyCode.DOWN) ? $item.next() : $item.prev());

								if ($nextPrevItem.attr('data-fc-separator')) {
									$nextPrevItem = ((event.keyCode === $.ui.keyCode.DOWN) ? $nextPrevItem.next() : $nextPrevItem.prev());
								}


								if ($item.length === 0) {
									self._addCssSelectionListItem($dialog.find('ul li:eq(0)'));
								} else if ($nextPrevItem.length > 0 && $nextPrevItem.is('li')) {
									self._removeCssSelectionListItem($item);
									self._addCssSelectionListItem($nextPrevItem);
								}
								cancelFunc(event);
							}
						}
					},
					blur: function (e) {
						self._toggleDropDown(e, columnKey, true);
					},
					mousedown: function (event) {
						self._toggleDropDown(event, columnKey, false);
						cancelFunc(event);
					},
					mouseover: function (event) {
						if ($button.hasClass(self.css.headerButtonIconSelected) === false) {
							$button.addClass(self.css.headerButtonIconMouseOver);
						}
					},
					mouseout: function (event) {
						$button.removeClass(self.css.headerButtonIconMouseOver);
					},
					mouseup: cancelFunc,
					click: cancelFunc
				});
            for (j = 0; j < elem.length; j++) {
                self._renderDropDownItem(columnKey, elem[j]);
            }
            self._trigger(
                self.events.featureChooserRendered,
                null,
                {owner: self.grid, columnKey: columnKey, columnCell: $columnCell}
            );
        },


        _renderInFeatureChooser: function (columnKey, data) {
            // render icon of the feature widget ONLY if it the column key exists in the analyzed data with keys
            var i,
                columnData = this.analyzedData[columnKey],
                columnDataLength;

            if (columnData === undefined || columnData === null) {
                // question: throw exception or just return
                return;
            }

			columnDataLength = columnData.length;
            if (columnData.isCancelledRendering === true) {
                return;
            }

            for (i = 0; i < columnDataLength; i++) {
                if (columnData[i].name.toLowerCase() === data.name.toLowerCase()) {
                    this.analyzedData[columnKey][i] = data;
                    break;
                }
            }

            if (i === columnDataLength) {
                this.analyzedData[columnKey].push(data);
            }


            if (this.data[columnKey] === null || this.data[columnKey] === undefined) {
                this.data[columnKey] = [];
            }
            if ($.type(this.data[columnKey].order) !== 'number') {
                this.data[columnKey].order = 0;
            }

			// check whether for this columnKey it is already registered this feature
			// example when autoGenerateColumns is true - _renderInFeatureChooser method is called twice for each feature
			for (i = 0; i < this.data[columnKey].length; i++) {
				if (this.data[columnKey][i].name === data.name && data.name !== undefined) {
					return;
				}
			}
			this.data[columnKey].push(data);
        },

        _renderDropDownItem: function (columnKey, data) {
            var dropDownId = this._id('featureChooser_dd', columnKey),
                $dropDown = $('#' + dropDownId),
                $li,
                $span,
                cssClassIcon = '',
				self = this,
                isSelected = data.isSelected,
				featureName = data.name,
				innerData,
                $button,
				liId = this._id('featurechooser_dd_li_' + columnKey, featureName),
                isOnBottom = data.isOnBottom,
                ddWidth = this.options.dropDownWidth,
				groupName = data.groupName,
				groupOrder = data.groupOrder,
				listId = this._id('featurechooser_dd_list', columnKey),
                $list = $('#' + listId),
				listItemsGroup,// items which belongs to specific group (or does not belong to any group)
				insertElementObj,
				labelText;

			// M.H. 10 Oct. 2011 Fix for bug #89870
			if ($('#' + liId).length > 0) {
				return;
			}

			// for instance default behavior for buttons is to be rendered on bottom of the list
			if (isSelected === undefined || isSelected === null) {
                isSelected = false;
            }

            if ($dropDown.length === 0) {
                // check whether dropdown container is initialized and if not - initialize
                $dropDown = $('<div></div>');
                $dropDown
                    .attr('id', dropDownId).css({'position': 'absolute', 'display': 'none'})
                    .addClass(this.css.featureChooserDropDown).appendTo('body');
                $dropDown.width(ddWidth);

				$list = $('<ul></ul>').attr('id', listId).addClass(this.css.listClass).appendTo($dropDown);
            }
			$li = $('<li></li>');
            $li.addClass(this.css.listItemClass)
                .attr('id', liId)
                .attr('data-fc-order', data.order);

			if (groupName !== undefined && groupName !== null) {
				$li.attr('data-fc-groupname', groupName);
			}

			if (groupOrder !== undefined && groupOrder !== null) {
				$li.attr('data-fc-grouporder', groupOrder);
			}

            if (isOnBottom === undefined || data.isOnBottom === null) {
                if (data.type === 'button') {
                    isOnBottom = true;
                } else {
                    isOnBottom = false;
                }
            }

            // it should not be applied classes for mouseover/mouseout when the list item contains button
            if (data.type !== 'button') {
                $li.bind({
				    //mousedown: $.proxy(this._selectDropDownItem, this),
				    mouseover: $.proxy(this._mouseOverDropDownItem, this),
				    mouseout: $.proxy(this._mouseOutDropDownItem, this)
			    });
            }

            innerData = {
                columnKey: columnKey,
                featureName: featureName,
                updateOnClickAll: data.updateOnClickAll,
                isOnBottom: isOnBottom,
				groupName: groupName,
				groupOrder: groupOrder,
				type: data.type,
				textHide: data.textHide,
				state: data.state,
				text: data.text
            };

			data.isOnBottom = isOnBottom;
			$li.data('data', innerData);

            if (data.type === 'button') {
                $button = $('<a></a>').appendTo($li);
                $button.igButton({
//                    css: {
//                        "buttonClasses"                         : this.css.dropDownButtonClasses,
//                        "buttonHoverClasses"                    : this.css.dropDownButtonHoverClasses,
//                        "buttonActiveClasses"                   : this.css.dropDownButtonActiveClasses, // when button is clicked 
//                        "buttonFocusClasses"                    : this.css.dropDownButtonFocusClasses, // when button get focus
//                        "buttonLabelClass"                      : this.css.dropDownButtonLabelClass
//                    },
                    labelText: data.text,
                    mousedown: function (event) {
                        self._clickFeature(event);
                        self._toggleDropDown(event, columnKey, true);
                    }
                });
                $button.data('data', innerData);
            } else {
                $li.bind({
                    mousedown: function (event) {
                        self._clickFeature(event);
                        self._toggleDropDown(event, columnKey, true);
                    }
                });

                if (data.iconClass !== null && data.iconClass !== undefined && data.iconClass !== '') {
                    cssClassIcon = data.iconClass;
                }

				$span = $('<span></span>').addClass(this.css.itemIconCotainer).appendTo($li);
                $span = $('<span></span>').appendTo($span);
                if (cssClassIcon !== '') {
                    $span.addClass(cssClassIcon);
                }

				labelText = data.text;
				$('<span></span>').text(data.text).addClass(this.css.listItemText).appendTo($li);

				if (data.secondaryIconClass !== undefined && data.secondaryIconClass !== null) {
					$span = $('<span></span>')
						.addClass(this.css.itemSecondaryIconContainer)
						.appendTo($li);
					$('<span></span>')
						.addClass(data.secondaryIconClass)
						.appendTo($span);
				}
            }

			// order by groups
			if (groupName === undefined || groupName === null) {
				// this means item should be located amongst items without groups
				// if there is no such items append to the end of the table
				listItemsGroup = $('#' + listId + ' li:not([data-fc-groupName]):not([data-fc-separator])');
				insertElementObj = this._getInsertElement(listItemsGroup, data.order, 'data-fc-order');
				this._insertElement(insertElementObj, $list, $li, null);
			} else {
				listItemsGroup = $('#' + listId + ' li[data-fc-groupName = ' + groupName + ']');
				if (listItemsGroup.length === 0) {
					// we should add such group
					// first we should find its position - where to insert
					listItemsGroup = $('#' + listId + ' li[data-fc-groupName]');
					insertElementObj = this._getInsertElement(listItemsGroup, groupOrder, 'data-fc-grouporder');
					if (insertElementObj.item !== null) {
						$list = listItemsGroup;
					}
					this._insertElement(insertElementObj, $list, $li, groupName);
				} else {
					// we should find the correct position of element inside the group
					insertElementObj = this._getInsertElement(listItemsGroup, data.order, 'data-fc-order');
					this._insertElement(insertElementObj, listItemsGroup, $li, groupName);
				}
			}

			if (data.type === 'toggle') {
				this._setSelectedItem(columnKey, data.isSelected, $li);
			}
        },

		_getSeparatorItem: function () {
			return $('<li data-fc-separator="1" class="' + this.css.separator + '"></li>');
		},

		_insertElement: function (insertElementObj, $list, $li, groupName) {
			// insert element $li at the correct position in $list
			// insertElementObj - the element before/after the element $li should be inserted - if null insert it at the end of $list
			// groupName - name of the Group of $li
			var $insertElement = insertElementObj.item,
				insertElementPosition = insertElementObj.position,
				$prevElement;

			if ($insertElement === null) {
				$li.appendTo($list);

				// check for separator UP
				$prevElement = $li.prev();
				if ($prevElement !== undefined &&
						$prevElement.length > 0 &&
						$prevElement.attr('data-fc-separator') !== '1' &&
						$prevElement.attr('data-fc-groupname') !== undefined &&
						$prevElement.attr('data-fc-groupname') !== groupName) {
					// add separator
					this._getSeparatorItem().insertBefore($li);
				}
			} else {
				if (insertElementPosition === 'after') {
					$li.insertAfter($insertElement);

					// check for separator UP
					if ($insertElement !== undefined &&
							$insertElement.length > 0 &&
							$insertElement.attr('data-fc-separator') !== '1' &&
							$insertElement.attr('data-fc-groupname') !== undefined &&
							$insertElement.attr('data-fc-groupname') !== groupName) {
						// add separator
						this._getSeparatorItem().insertBefore($li);
					}

				} else {
					$li.insertBefore($insertElement);
					$prevElement = $li.prev();
					// check for separator UP
					if ($prevElement !== undefined &&
							$prevElement.length > 0 &&
							$prevElement.attr('data-fc-separator') !== '1' &&
							$prevElement.attr('data-fc-groupname') !== undefined &&
							$prevElement.attr('data-fc-groupname') !== groupName) {
						// add separator
						this._getSeparatorItem().insertBefore($li);
					} else if ($insertElement !== undefined &&
							$insertElement.length > 0 &&
							$insertElement.attr('data-fc-separator') !== '1' &&
							$insertElement.attr('data-fc-groupname') !== undefined &&
							$insertElement.attr('data-fc-groupname') !== groupName) {
						// add separator
						this._getSeparatorItem().insertAfter($li);
					}

				}
			}
		},


		_getInsertElement: function (listItems, targetOrder, attr) {
			// return from list of items object which is of type {item: $item, position: pos}
			// where $item is jQuery wrapped DOM element or NULL
			// if $item is null insert at the beginning of the list
			// if $item is NOT null then if pos is:
			// 'before' insert element before $item
			// 'after' insert element after $item
            var $item = null, itemOrder, at, i;

			for (i = 0; i < listItems.length; i++) {
                $item = $(listItems[i]);
				at = $item.attr(attr);

				if (at === undefined) {
					continue;
				}
                itemOrder = parseInt(at, 10);
                if (itemOrder > targetOrder) {
                    return {item: $item, position: 'before'};
                }
            }

            return {item: $item, position: 'after'};
        },

        _setSelectedState: function (featureName, columnKey, isSelected, executeCallback) {
            var data = this.data[columnKey], $listItem, self = this;

            if (data === undefined || data === null) {
                return false;
            }
            $.each(data, function (index, value) {
                if (value.name.toLowerCase() === featureName.toLowerCase()) {
                    $listItem = $('#' + self._id('featurechooser_dd_li_' + columnKey, value.name));
                    self._setSelectedItem(columnKey, isSelected, $listItem);
                    self.data[columnKey][index].isSelected = !isSelected;
                    if (executeCallback === true) {
                        self._callFeatureMethod(value, isSelected, columnKey, null);
                    }
					value.isSelected = isSelected;
                    return false;
                }
            });
        },

		_setSelectedItem: function (columnKey, isSelected, $listItem) {
			if ($listItem === null || $listItem === undefined || $listItem.length === 0) {
                return;
            }
			var innerData = $listItem.data('data'),
				textShow,
				textHide,
				$label = null;

			if (innerData !== undefined && innerData !== null) {
				textShow = innerData.text;

				textHide = innerData.textHide;
				$label = $listItem.find('span.ui-iggrid-featurechooserddlistitemtext');
			}

			$listItem.attr('data-fc-selected', isSelected);
			if (isSelected === true) {
				$listItem.addClass(this.css.itemSelected);
				if ($label !== null && textShow !== null && textShow !== undefined) {
					$label.text(textShow);
				}
			} else {
				$listItem.removeClass(this.css.itemSelected);
				if ($label !== null && textHide !== null && textHide !== undefined) {
					$label.text(textHide);
				}
			}
		},
		// M.H. 2 Aug 2012 Fix for bug #118136
		_toggleSelectedItems: function (featureName) {
			var i, $li, columnKey, cols = this.grid.options.columns, colsLength = cols.length, isSelected;

			for (i = 0; i < colsLength; i++) {
				columnKey = cols[i].key;
				$li = $('#' + this._id('featurechooser_dd_li_' + columnKey, featureName));
				if ($li.data('data') === null || $li.data('data') === undefined) {
					continue;
				}

				isSelected = $li.attr('data-fc-selected') === "true";
				this._setSelectedState("Filtering", columnKey, !isSelected);
				//this._setSelectedItem(columnKey, !($li.attr('data-fc-selected') === "true"), $li);
			}
		},
		_toggleDropDown: function (event, columnKey, isCalledFromBlur) {
            // show/hide feature chooser dialog
            var $button = $('#' + this._id('featureChooser_headerButton', columnKey)),
                maxZ,
				left = 0,
                top = 0,
                dropDownId = this._id('featureChooser_dd', columnKey),
                $headerContainer,
                $dropDown = $('#' + dropDownId),
                isVisible = ($dropDown.is(':visible') === true),
                self = this,
				animationDuration = this.options.animationDuration,
                $columnCell = null;

            if (($dropDown.data('isAnimating') === true) ||
                    (isVisible === false && isCalledFromBlur === true)) {
                //|| (isCalledFromButton === true && self._shouldOpen === false && isVisible === false)
                return;
            }

            $columnCell = $('#' + this.grid.element[0].id + '_' + columnKey);
            $headerContainer = $('#' + this._id('featureChooser_headerButton', columnKey)).find('span');//$columnCell.find('.ui-iggrid-featurechooserbutton');
            // when the dropdown is not opened and should be opened
            if (isVisible === false && this._trigger(this.events.featureChooserDropDownOpening,
                    null,
                    {
                        owner: $dropDown,
                        columnKey: columnKey,
                        columnCell: $columnCell,
                        data: this.data[columnKey]
                    }
                    ) === false) {
                return;
            }

            if (!isVisible) {
				// M.H. 10 July 2012 Fix for bug #106407
				maxZ = $.ig.getMaxZIndex(dropDownId);
				$dropDown.css('zIndex', maxZ);

                top = $headerContainer.offset().top + $headerContainer.height();
                left = $headerContainer.offset().left - $dropDown.width() + $headerContainer.width();
				if (left < 0) {
					// when dropdown is not visible show it on the right side
					// even if it is not shown the whole dropdown it will be visible because it will be shown horizontal scrollbar
					left = $headerContainer.offset().left;
				}
				$dropDown.css({'top': top, 'left': left});
            }

            $dropDown.data('isAnimating', true);
            $dropDown.slideToggle(
				animationDuration,
				function () {
					if ($dropDown.is(':visible') === true) {
						$button.focus();
						self._activeDropdown = $dropDown;
						self._trigger(self.events.featureChooserDropDownOpened,
							null,
							{
								owner: $dropDown,
								columnKey: columnKey,
								columnCell: $columnCell,
								data: self.data[columnKey]
							});
						$button.children('span:first').addClass(self.css.headerButtonIconSelected);
					} else {
						self._activeDropdown = null;
						$button.children('span:first').removeClass(self.css.headerButtonIconSelected);
					}
					$dropDown.data('isAnimating', false);
				}
			);
        },

        _mouseOverDropDownItem: function (event) {
            this._addCssSelectionListItem($(event.currentTarget));
		},

		_mouseOutDropDownItem: function (event) {
			this._removeCssSelectionListItem($(event.currentTarget));
		},

		_addCssSelectionListItem: function ($listItem) {
			$listItem.addClass(this.css.dropDownListItemHover);
		},

		_removeCssSelectionListItem: function ($listItem) {
			$listItem.removeClass(this.css.dropDownListItemHover);
		},

        destroy: function () {
			$.Widget.prototype.destroy.apply(this, arguments);
			return this;
        }
    });

    $.extend($.ui.igGridFeatureChooser, {version: '12.2.20122.1021'});
}(jQuery));


/*
 * Infragistics.Web.ClientUI Grid Modal Dialog 12.2.20122.1021
 *
 * Copyright (c) 2011 Infragistics Inc.
 * <Licensing info>
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *	ig.ui.shared.js
 *	ig.util.js
 */

/*global jQuery, window, document */
if (typeof (jQuery) !== "function") {
	throw new Error("jQuery is undefined");
}
(function ($) {
	/*
		igGridModalDialog summary
		Modal dialog will show content for advanced group by, column chooser and multiple sorting
	*/
	$.widget("ui.igGridModalDialog", {
		options: {
			buttonApplyText: "Apply",
			buttonCancelText: "Cancel",
			modalDialogCaptionText: 'Header',
			/* type="number" The default modal dialog width in pixels. */
			modalDialogWidth: 250,
			/* type="number" The default modal dialog height in pixels. */
			modalDialogHeight: '',
			renderFooterButtons: true,
			animationDuration: 200
		},
		css: {
			/* Classes applied to the modal dialog element */
			"modalDialog": "ui-dialog ui-draggable ui-resizable ui-iggrid-dialog ui-widget ui-widget-content ui-corner-all",
			/* Classes applied to the modal dialog dialog header caption area */
			"modalDialogHeaderCaption": "ui-dialog-titlebar ui-widget-header ui-corner-top ui-helper-reset ui-corner-all ui-helper-clearfix",
			/* Classes applied to the modal dialog dialog header caption title */
			"modalDialogHeaderCaptionTitle": "ui-dialog-title",
			/* Classes applied to the modal dialog dialog content */
			"modalDialogContent": "ui-dialog-content ui-widget-content",
			/* Classes applied to the modal dialog handlebar at the bottom */
			"modalDialogHandleBar": "",
			/* Classes applied to button container at the caption */
			"captionButtonContainer": "ui-iggrid-modaldialog-caption-buttoncontainer",
			/* Classes applied to the footer container at the bottom */
			"modalDialogFooter": "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix",
			/* Classes applied to button set in the footer */
			"buttonset": "ui-dialog-buttonset",
			/* Classes applied to block area over which it is shown modal dialog */
			"blockArea": "ui-widget-overlay ui-iggrid-blockarea"
		},
		events: {
			/* cancel="true" event fired before the modal dialog is opened.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridModalDialog widget.
			Use ui.owner.grid to get the reference to the igGrid widget.
			*/
			modalDialogOpening: "modalDialogOpening",
			/* event fired after the modal dialog is already opened.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridModalDialog widget.
			Use ui.modalDialog to get the reference to the igGridModalDialog element
			*/
			modalDialogOpened: "modalDialogOpened",
			/* event fired every time the modal dialog changes its position.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridModalDialog widget.
			Use ui.modalDialog to get the reference to the igGridModalDialog element
			Use ui.originalPosition to get the original position of the modal dialog div as { top, left } object, relative to the page.
			Use ui.position to get the current position of the modal dialog div as { top, left } object, relative to the page.
			*/
			modalDialogMoving: "modalDialogMoving",
			/* cancel="true" event fired before the modal dialog is closed.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridModalDialog widget.
			Use ui.modalDialog to get the reference to the igGridModalDialog element
			*/
			modalDialogClosing: "modalDialogClosing",
			/* event fired after the modal dialog has been closed.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridModalDialog widget.
			Use ui.modalDialog to get the reference to the igGridModalDialog element
			*/
			modalDialogClosed: "modalDialogClosed",
			/* cancel="true" event fired before the contents of the modal dialog are rendered.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridModalDialog widget.
			Use ui.modalDialog to get the reference to the igGridModalDialog element
			*/
			modalDialogContentsRendering: "modalDialogContentsRendering",
			/* event fired after the contents of the modal dialog are rendered.
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridModalDialog widget.
			Use ui.modalDialog to get the reference to the igGridModalDialog element
			*/
			modalDialogContentsRendered: "modalDialogContentsRendered",
			/* cancel="true" event fired when the button OK/Apply is clicked
			The handler function takes arguments evt and ui.
			Use ui.owner to get the reference to the igGridModalDialog widget.
			Use ui.modalDialog to get the reference to the igGridModalDialog element
			*/
			buttonOKClick: "buttonOKClick"
		},
		_createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			//this.options.columnSettings = [];
			// M.H. 8 May 2012 Fix for bug #110344
			this.gridContainer = options.gridContainer;
			this.containment = options.containment || options.gridContainer;
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
		_create: function () {
			this._setGridWidthHeight();
			this._renderModalDialog();
		},

		_setGridWidthHeight: function () {
			this.element
				.css('width', this.options.modalDialogWidth)
				.css('height', this.options.modalDialogHeight);
		},

		openModalDialog: function () {
			var maxZ = 10000,
				scrollLeft,
				scrollTop,
				pageLeft,
				pageTop,
				pageRight,
				pageBottom,
				pos,
				h,
				w,
				bh,
				bw,
				mdW,
				mdH,
				caption,
				content,
				handlebar,
				modalDialogTop,
				modalDialogLeft,
				noCancel = true,
				modalDialog = this.element,
				modalDialogBody,
				block,
				animationDuration = this._getAnimationDuration(),
				blockId = this._id('_modaldialog_block');

			if (this._modalDialogOpened) {
				return;
			}
			noCancel = this._trigger(this.events.modalDialogOpening, null, {modalDialog: modalDialog, owner: this});
			if (noCancel) {
				// M.H. 21 March 2012 Fix for bug #105213
				$('#' + blockId).remove();
				this._setGridWidthHeight();
				modalDialogBody = modalDialog.find("table tbody");
				modalDialogBody.empty();
				pos = this.gridContainer.offset();
				w = this.gridContainer.outerWidth();
				h = this.gridContainer.outerHeight();
				scrollLeft = $(window).scrollLeft();
				scrollTop = $(window).scrollTop();
				pageLeft = pos.left - scrollLeft;
				pageTop = pos.top - scrollTop;
				pageRight = pageLeft + w;
				pageBottom = pageTop + h;
				// M.H. 21 March 2012 Fix for bug #105447
				mdW = parseInt(this.options.modalDialogWidth, 10);
				mdH = parseInt(this.options.modalDialogHeight, 10);
				// M.H. 21 March 2012 Fix for bug #105213
				block = $('<div></div>')
					.appendTo("body")
					.attr('id', blockId)
					.css('position', 'absolute')
					.addClass(this.css.blockArea).hide();

				if (block.outerWidth() !== this.gridContainer.outerWidth()) {
					block.css('width', this.gridContainer.outerWidth());
				}
				if (block.outerHeight() !== this.gridContainer.outerHeight()) {
					block.css('height', this.gridContainer.outerHeight());
				}
				block.css({left: pos.left, top: pos.top}).fadeToggle(animationDuration);

				if (!mdW) {
					mdW = this.element.width();
				}
				if (!mdH) {
					mdH = this.element.height();
				}
				if (pageLeft < 0) {
					pageLeft = 0;
				}
				if (pageTop < 0) {
					pageTop = 0;
				}

				bw = $(window).width();
				bh = $(window).height();
				if (pageRight > bw) {
					pageRight = bw;
				}
				if (pageBottom > bh) {
					pageBottom = bh;
				}

				modalDialogTop = pageTop + scrollTop + (pageBottom - pageTop) / 2 - mdH / 2;
				modalDialogLeft = pageLeft + scrollLeft + (pageRight - pageLeft) / 2 - mdW / 2;
				// M.H. 13 March 2012 Fix for bug #104443
				if (modalDialogTop < 0) {
					modalDialogTop = pageTop;
				}

				if (modalDialogLeft < 0) {
					modalDialogLeft = pageLeft;
				}
				// M.H. 10 July 2012 Fix for bug #106407
				maxZ = $.ig.getMaxZIndex(this.element[0].id);
				modalDialog
					.css({
						left: modalDialogLeft,
						top: modalDialogTop,
						zIndex: maxZ + 2
					})
					.fadeToggle(animationDuration);
				block.css({zIndex: maxZ + 1});
				//add a fixed height to the content div so that it overflows and shows a scrollbar,
				//this height should be calculated as the space left after the caption and resizing handles are taken into account
				caption = modalDialog.children('div').eq(0);
				content = modalDialog.children('div').eq(1);
				handlebar = modalDialog.children('div').eq(2);
				content.css('height', modalDialog.height() - caption.outerHeight() - (content.outerHeight() - content.height()) - handlebar.outerHeight());
				// M.H. 9 March 2012 Fix for bug #104366
				$('#' + this._id('content')).css({width: ''});
				this._modalDialogOpened = true;
				this._trigger(this.events.modalDialogOpened, null, {modalDialogElement: modalDialog, owner: this});
				// focus modal dialog so it can be closed with the ESCAPE key 
				modalDialog.focus();
			}
		},
		_getAnimationDuration: function () {
			var animationDuration = this.options.animationDuration;

			if (animationDuration === null || animationDuration === undefined) {
				animationDuration = 200;
			}
			return animationDuration;
		},
		_setOption: function (key, value) {
		    // M.H. 14 March 2012 Fix for bug #104700
			// handle new settings and update options hash
			$.Widget.prototype._setOption.apply(this, arguments);
			switch (key) {
			case 'buttonApplyText':
				$('#' + this._id('footer_buttonok')).igButton('option', 'labelText', value);
				break;
			case 'buttonCancelText':
				$('#' + this._id('footer_buttoncancel')).igButton('option', 'labelText', value);
				break;
			case 'modalDialogCaptionText':
				this.element.find('span.ui-dialog-title:eq(0)').html(value);
				break;
			case 'modalDialogWidth':
				this.element
					.css('width', value);
				break;
			case 'modalDialogHeight':
				this.element
					.css('height', value);
				break;
			case 'renderFooterButtons':
				// dialog should be re-rendered
				if (this.element.is(':visible')) {
					this.closeModalDialog();
				}
				this.element.empty();
				this._renderModalDialog();
				break;
			default:
				break;
			}
	    },
		closeModalDialog: function () {
			var noCancel = true,
				modalDialog = this.element,
				animationDuration = this._getAnimationDuration();

			if (!this._modalDialogOpened) {
				return;
			}
			noCancel = this._trigger(this.events.modalDialogClosing, null, {modalDialog: modalDialog, owner: this});
			if (noCancel) {
				modalDialog.fadeToggle(animationDuration);
				// M.H. 21 March 2012 Fix for bug #105213
				$('#' + this._id('_modaldialog_block')).fadeToggle(animationDuration);
				this._modalDialogOpened = false;
				this._trigger(this.events.modalDialogClosed, null, {modalDialog: modalDialog, owner: this});
			}
		},
		_modalDialogMove: function (e, ui) {
			this._trigger(this.events.modalDialogMoving, null,
				{
					modalDialog: e.target,
					owner: this,
					originalPosition: ui.originalPosition,
					position: ui.position
				});
		},

		/********* Getter methods ********/
		getCaptionButtonContainer: function () {
			return $('#' + this._id('caption_button_container'));
		},
		getFooter: function () {
			return $('#' + this._id('footer'));
		},
		getContent: function () {
			return $('#' + this._id('content'));
		},
		/********* //Getter methods ********/

		_renderModalDialog: function () {
			var self = this,
				css = this.css,
				modalDialog = this.element,
				caption,
				modalDialogContent,
				footer,
				o = this.options,
				$buttonSet,
				$buttonOK,
				$buttonCancel,
				noCancel = true;

			modalDialog.css('position', 'absolute')
				.addClass(this.css.modalDialog)
				.hide();
			noCancel = this._trigger(this.events.modalDialogContentsRendering, null, {modalDialog: modalDialog, owner: this});
			if (noCancel) {
				caption = $('<div></div>').addClass(this.css.modalDialogHeaderCaption).appendTo(modalDialog);
				$('<span></span>')
					.text(this.options.modalDialogCaptionText)
					.addClass(this.css.modalDialogHeaderCaptionTitle)
					.appendTo(caption);
				$('<div></div>')
					.attr('id', this._id('caption_button_container'))
					.addClass(css.captionButtonContainer)
					.appendTo(caption);
				modalDialogContent =
					$("	<div></div>")
					.css('overflow', 'auto')
					.addClass(this.css.modalDialogContent)
					.attr('id', this._id('content'))
					.appendTo(modalDialog);
				if (o.renderFooterButtons === true) {
					footer = $('<div></div>')
						.addClass(this.css.modalDialogFooter)
						.attr('id', this._id('footer'))
						.appendTo(modalDialog);
					$buttonSet = $('<div></div>')
						.addClass(this.css.buttonset)
						.appendTo(footer);
					$buttonCancel = $('<button></button>')
						.attr('id', this._id('footer_buttoncancel'))
						.appendTo($buttonSet);
					$buttonOK = $('<button></button>')
						.attr('id', this._id('footer_buttonok'))
						.appendTo($buttonSet);
					$buttonOK.igButton({
						labelText: o.buttonApplyText
					});
					$buttonCancel.igButton({
						labelText: o.buttonCancelText
					});
					$buttonCancel.bind({
						click: function (e, args) {
							var noCancel;
							noCancel = self._trigger(self.events.buttonCancelClick, e, {modalDialog: modalDialog, owner: self});
							if (noCancel) {
								self.closeModalDialog();
								e.preventDefault();
								e.stopPropagation();
							}
						}
					});
				}
				//$('<div></div>').addClass(this.css.modalDialogHandleBar).appendTo(modalDialog);
				// M.H. 23 March 2012 Fix for bug #106009
				modalDialog
					.bind({
						keydown: function (e) { if (e.keyCode === $.ui.keyCode.ESCAPE) { self.closeModalDialog(); } }
					})
					.draggable({containment: this.containment, handle: caption, drag: $.proxy(this._modalDialogMove, this)})
					.attr('role', 'dialog')
					.attr('tabIndex', -1);

				// M.H. 20 April 2012 Fix for bug #104800
				if (typeof Modernizr !== "object" || Modernizr.touch === false) {
					modalDialog.resizable({
						containment: "parent",
						alsoResize: modalDialogContent,
						minHeight: modalDialog.outerHeight() / 4,
						minWidth: modalDialog.outerWidth() / 2
					});
				}
				this._trigger(this.events.modalDialogContentsRendered, null, {modalDialog: modalDialog, owner: this});
			}
		},
		// helper methods
		_id: function () {
			var i, ar = arguments, res = this.element[0].id;

			for (i = 0; i < ar.length; i++) {
				res += '_' + ar[i];
			}
			return res;
		},

		destroy: function () {
			// M.H. 10 May 2012 Fix for bug #111002
			$('#' + this._id('_modaldialog_block')).remove();
			$.Widget.prototype.destroy.apply(this, arguments);
			return this;
        }
	});

	$.extend($.ui.igGridModalDialog, {version: '12.2.20122.1021'});
}(jQuery));
