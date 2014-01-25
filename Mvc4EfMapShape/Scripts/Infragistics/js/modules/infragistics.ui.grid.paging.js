/*!
 * Infragistics.Web.ClientUI Grid Paging 12.2.20122.1021
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
 *  ig.ui.editors.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */

/*global jQuery, toStaticHTML */
if (typeof (jQuery) !== "function") {
	throw new Error("jQuery is undefined");
}

(function ($) {

    // we will define a new widget for paging. That kind of widget is completely independent one and doesn't subclass the grid 
    // it subscribes to grid events such as BodyRendered, and has the grid instance (igGrid) injected into it
    // for paging 
	/*
		igGridPaging widget -  The widget is pluggable to the element where the grid is instantiated and the actual igGrid object doesn't know about this
		the paging widget just attaches its functionality to the grid 
		the paging widget renders most of its UI in the grid footer. Optionally there can be a dropdown to choose the page size, that can be placed above the header
		keyboard navigation inside the pager is supported with TAB & SPACE/ENTER keys 
	*/
    $.widget("ui.igGridPaging", {
	    css : {
			/*  classes applied to the pager area */
		    "pagerClass" : "ui-widget ui-iggrid-pager ui-helper-clearfix ui-corner-bottom ui-widget-header ui-iggrid-footer",
			/* classes applied to a page link that can be clicked with the mouse */
		    "pageLink" : "ui-iggrid-pagelink ui-helper-reset",
			/* classes applied to a page container element (list item) */
			"page" : "ui-iggrid-page ui-state-default ui-corner-all",
			/* classes applied to a page list item when it's hovered */
			"pageHover": "ui-iggrid-page-hover ui-state-hover",
			/* classes applied to the UL list that holds all pages */
			"pageList" : "ui-helper-reset ui-iggrid-pagelist ui-iggrid-paging-item",
			/* classes applied to the anchor of the current page item */
		    "pageLinkCurrent" : "ui-iggrid-pagelinkcurrent",
			/* clases applied to the current page (corresponding to the current page index) */
			"pageCurrent" : "ui-iggrid-pagecurrent ui-state-active ui-corner-all",
			/* classes applied to the current page that has focus (when keyboard anvigation is used) */
			"pageFocused" : "ui-iggrid-pagefocused ui-state-focus",
			/* classes applied to the area where the next page button and label are rendered */
			"nextPage" : "ui-iggrid-nextpage ui-iggrid-paging-item ui-state-default",
			/* classes applied to the area where the prev page button and label are rendered */
			"prevPage" : "ui-iggrid-prevpage ui-iggrid-paging-item ui-state-default",
			/* classes applied to the area where the first page button and label are rendered */
			"firstPage" : "ui-iggrid-firstpage ui-iggrid-paging-item ui-state-default ui-corner-left",
			/* classes applied to the area where the last page button and label are rendered */
			"lastPage" : "ui-iggrid-lastpage ui-iggrid-paging-item ui-state-default ui-corner-right",
			/* classes applied to the next page's label (span) */
			"nextPageLabel" : "ui-iggrid-nextpagelabel",
			/* classes applied to the prev page's label (span) */
			"prevPageLabel" : "ui-iggrid-prevpagelabel",
			/* classes applied to the first page's label (span) */
			"firstPageLabel" : "ui-iggrid-firstpagelabel",
			/* classes applied to the last page's label (span) */
			"lastPageLabel" : "ui-iggrid-lastpagelabel",
			/* classes applied to the next page's label (span) when it's disabled */
			"nextPageLabelDisabled" : "ui-iggrid-nextpagelabeldisabled ui-state-disabled",
			/* classes applied to the prev page's label (span) when it's disabled */
			"prevPageLabelDisabled" : "ui-iggrid-prevpagelabeldisabled ui-state-disabled",
			/* classes applied to the first page's label (span) when it's disabled */
			"firstPageLabelDisabled" : "ui-iggrid-firstpagelabeldisabled ui-state-disabled",
			/* classes applied to the last page's label (span) when it's disabled */
			"lastPageLabelDisabled" : "ui-iggrid-lastpagelabeldisabled ui-state-disabled",
			/* classes applied to the next page area that holds the span for the icon */
			"nextPageImage" : "ui-iggrid-pageimg ui-iggrid-nextpageimg ui-icon ui-icon-triangle-1-e",
			/* classes applied to the prev page area that holds the span for the icon */
			"prevPageImage" : "ui-iggrid-pageimg ui-iggrid-prevpageimg ui-icon ui-icon-triangle-1-w",
			/* classes applied to the first page area that holds the span for the icon */
			"firstPageImage" : "ui-iggrid-pageimg ui-iggrid-firstpageimg ui-icon ui-icon-arrowstop-1-w",
			/* classes applied to the last page area that holds the span for the icon */
			"lastPageImage" : "ui-iggrid-pageimg ui-iggrid-lastpageimg ui-icon ui-icon-arrowstop-1-e",
			/* classes applied to the next page area that holds the span for the icon when it is disabled */
			"nextPageImageDisabled" : "ui-iggrid-pageimg ui-iggrid-nextpageimgdisabled ui-icon ui-state-disabled ui-icon-triangle-1-e",
			/* classes applied to the prev page area that holds the span for the icon when it is disabled */
			"prevPageImageDisabled" : "ui-iggrid-pageimg ui-iggrid-prevpageimgdisabled ui-icon ui-state-disabled ui-icon-triangle-1-w",
			/* classes applied to the first page area that holds the span for the icon when it is disabled */
			"firstPageImageDisabled" : "ui-iggrid-pageimg ui-iggrid-firstpageimgdisabled ui-icon ui-state-disabled ui-icon-arrowstop-1-w",
			/* classes applied to the last page area that holds the span for the icon when it is disabled */
			"lastPageImageDisabled" : "ui-iggrid-pageimg ui-iggrid-lastpageimgdisabled ui-icon ui-state-disabled ui-icon-arrowstop-1-e",
			/* classes applied to the label showing how many records are rendered of some total number */
			"pagerRecordsLabel" : "ui-iggrid-pagerrecordslabel ui-iggrid-results",
			/* classes applied to the editor dropdown label from where page size can be changed */
			"pageSizeLabel" : "ui-iggrid-pagesizelabel",
			/* classes applied to the editor dropdown from where page size can be changed */
			"pageSizeDropDown" : "ui-iggrid-pagesizedropdown",
			/* classes applied to the element that holds the page size dropdown */
			"pageSizeDropDownContainer" : "ui-helper-clearfix ui-iggrid-pagesizedropdowncontainer",
			/* classes applied to the container of the page size dropdown editor, when it is rendered above the header */
			"pageSizeDropDownContainerAbove" : "ui-widget ui-helper-clearfix ui-iggrid-pagesizedropdowncontainerabove ui-iggrid-toolbar ui-widget-header and ui-corner-top",
			/* classes applied to the element holding the editor dropdown from where the page index can be changed */
			"pageDropDownContainer" : "ui-iggrid-pagedropdowncontainer",
			/* classes applied to the spans that are before and after the dropdown editor from where the page index can be changed */
			"pageDropDownLabels" : "ui-iggrid-pagedropdownlabels",
			/* classes applied to the editor dropdown from where the page index can be changed */
			"pageDropDown" : "ui-iggrid-pagedropdown",
			/* classes applied to the area on the right of the footer where first, last, prev, next buttons as well as page links and page index dropdown are rendered */
			"pagerRightAreaContainer": "ui-iggrid-paging",
			/* classes applied around the label showing the currently rendered record indices out of some total value */
			"pagingResults": "ui-iggrid-results"
	    },
	    options: {
			/* type="number" default number of records per page */
		    pageSize: 25,
			/* type="string" the property in the response that will hold the total number of records in the data source */
			recordCountKey: null,
			/* type="string" denotes the name of the encoded URL parameter that will state what is the currently requested page size */
			pageSizeUrlKey: null,
			/* type="string" denotes the name of the encoded URL parameter that will state what is the currently requested page index */
			pageIndexUrlKey: null,
			/* type="number" current page index that's bound and rendered in the UI */
			currentPageIndex: 0,
			/* type="remote|local"
            remote type="string" request
            local type="string" paging on the client-side
            */
			type: null,
			/* type="bool" if false, a dropdown allowing to change the page size will not be rendered in the UI */
			showPageSizeDropDown: true,
			/* type="string" label rendered in front of the page size dropdown */
			pageSizeDropDownLabel: $.ig.GridPaging.locale.pageSizeDropDownLabel,
			/* type="string" Trailing label for the page size dropdown */
			pageSizeDropDownTrailingLabel: $.ig.GridPaging.locale.pageSizeDropDownTrailingLabel,
			/* type="above|inpager"
            above type="string" it will be rendered above the grid header
            inpager type="string" it will be rendered next to page links
            */
			pageSizeDropDownLocation: 'above',
			/* type="bool" option specifying whether to show summary label for the currently rendered records or not */
			showPagerRecordsLabel: true,
			/* type="string" custom pager records label template - in jQuery templating style and syntax */
			pagerRecordsLabelTemplate: $.ig.GridPaging.locale.pagerRecordsLabelTemplate,
			/* type="string" localized text for the next page label */
			nextPageLabelText: $.ig.GridPaging.locale.nextPageLabelText,
			/* type="string" localized text for the prev page label */
			prevPageLabelText: $.ig.GridPaging.locale.prevPageLabelText,
			/* type="string" localized text for the first page label */
			firstPageLabelText: $.ig.GridPaging.locale.firstPageLabelText,
			/* type="string" localized text for the last page label */
			lastPageLabelText: $.ig.GridPaging.locale.lastPageLabelText,
			/* type="bool" option specifying whether to render the first and last page buttons */
			showFirstLastPages: true,
			/* type="bool" option specifying whether to render the previous and next page buttons */
			showPrevNextPages: true,
			/* type="string" leading label for the dropdown from where the page index can be switched */
			currentPageDropDownLeadingLabel: $.ig.GridPaging.locale.currentPageDropDownLeadingLabel,
			/* type="string" localized trailing label for the dropdown from where the page index can be switched */
			currentPageDropDownTrailingLabel: $.ig.GridPaging.locale.currentPageDropDownTrailingLabel,
			/* type="string" custom localized tooltip for the page index dropdown */
			currentPageDropDownTooltip: $.ig.GridPaging.locale.currentPageDropDownTooltip,
			/* type="string" custom localized tooltip for the page size dropdown */
			pageSizeDropDownTooltip: $.ig.GridPaging.locale.pageSizeDropDownTooltip,
			/* type="string" custom localized tooltip for the pager records label */
			pagerRecordsLabelTooltip: $.ig.GridPaging.locale.pagerRecordsLabelTooltip,
			/* type="string" custom localized tooltip for the prev. page button */
			prevPageTooltip: $.ig.GridPaging.locale.prevPageTooltip,
			/* type="string" custom localized tooltip for the next. page button */
			nextPageTooltip: $.ig.GridPaging.locale.nextPageTooltip,
			/* type="string" custom localized tooltip for the first. page button */
			firstPageTooltip: $.ig.GridPaging.locale.firstPageTooltip,
			/* type="string" custom localized tooltip for the last. page button */
			lastPageTooltip: $.ig.GridPaging.locale.lastPageTooltip,
			/* type="string" custom localized format string for tooltips of buttons that directly jump to a particular page. The format string follows the jQuery templating style and syntax. See also the pageCountLimit option.  */
			pageTooltipFormat: $.ig.GridPaging.locale.pageTooltipFormat,
			/* type="array" Default: [5, 10, 20, 25, 50, 75, 100]. contents of the page size dropdown indicating what preconfigured page sizes are available to the end user */
			pageSizeList: [],
			/* type="number" sets gets the number of pages which if exceeded a drop down list of page indices is displayed. If the number of pages is less than or equal to this option then page buttons are displayed. */
			pageCountLimit: 10,
			/* type="number" number of pages that are constantly visible. For the invisible pages, prev and next buttons are used */
			visiblePageCount: 5,
			/* type="number" dropdown width for page size and page index dropdowns */
			defaultDropDownWidth: 70
	    },
		events: {
			/* cancel="true" Event fired before the page index is changed.
			Return false in order to cancel page index changing.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridPaging.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.currentPageIndex to get current page index.
			Use ui.newPageIndex to get new page index.
			*/
			pageIndexChanging: "pageIndexChanging",
			/* Event fired after the page index is changed , but before grid data rebinds 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridPaging.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.pageIndex to get current page index.
			*/
			pageIndexChanged: "pageIndexChanged",
			/* cancel="true" Event fired when the page size is about to be changed from the page size dropdown.
			Return false in order to cancel page size changing.			
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridPaging.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.currentPageSize to get current page size.
			Use ui.newPageSize to get new page size.
			*/
			pageSizeChanging: "pageSizeChanging",
			/* Event fired after the page size is changed from the page size dropdown. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridPaging.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.pageSize to get current page size.
			*/
			pageSizeChanged: "pageSizeChanged",
			/* cancel="true" Event fired before the pager footer is rendered (the whole area below the grid records). 
			Return false in order to cancel pager footer rendering.			
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridPaging.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dataSource to get reference to grid's data source.
			*/
			pagerRendering: "pagerRendering",
			/* Event fired after the pager footer is rendered 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridPaging.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.dataSource to get reference to grid's data source.
			*/
			pagerRendered: "pagerRendered"
		},
		_loadingIndicator: null,
		_isPaging: false,
	    _create: function () {
	    },
		_setOption: function (key, value) {
			var items, label, id, pager;
			id = this.grid.element[0].id;
			pager = $('#' + id + '_pager');
		    // handle new settings and update options hash
			$.Widget.prototype._setOption.apply(this, arguments);
			// options that are supported: pageSize, currentPageIndex, showFirstLastPages, showPrevNextPages, pageSizeList, 
			// nextPageLabelText, prevPageLabelText, firstPageLabelText, lastPageLabelText
			// start by throwing an error for the options that aren't supported
			if (key === 'type' || key === 'showPageSizeDropDown' || key === 'pageSizeDropDownLocation' || key === 'showPagerRecordsLabel' ||
					key === 'visiblePageCount') {
				throw new Error($.ig.Grid.locale.optionChangeNotSupported + ' ' + key);
			}
			if (key === 'pageSize') {
				this.pageSize(value);
			} else if (key === 'currentPageIndex') {
				this.pageIndex(value);
			} else if (key === 'showFirstLastPages') {
				if (value === true) {
					pager.find('.ui-iggrid-firstpage').show();
					pager.find('.ui-iggrid-lastpage').show();
				} else {
					pager.find('.ui-iggrid-firstpage').hide();
					pager.find('.ui-iggrid-lastpage').hide();
				}
			} else if (key === 'showPrevNextPages') {
				if (value === true) {
					pager.find('.ui-iggrid-prevpage').show();
					pager.find('.ui-iggrid-nextpage').show();
				} else {
					pager.find('.ui-iggrid-prevpage').hide();
					pager.find('.ui-iggrid-nextpage').hide();
				}
			} else if (key === 'pageSizeList') {
				if ($.type(value) === 'string') {
					items = value.split(',');
				} else {
					items = value;
				}
				if (this._pageSizeDD) {
					this._pageSizeDD.igEditor('option', 'listItems', items);
				}
			} else if (key === 'nextPageLabelText') {
				label = pager.find('.ui-iggrid-nextpagelabel');
				label = label.length === 0 ? pager.find('.ui-iggrid-nextpagelabeldisabled') : label;
				label.text(value);
			} else if (key === 'prevPageLabelText') {
				label = pager.find('.ui-iggrid-prevpagelabel');
				label = label.length === 0 ? pager.find('.ui-iggrid-prevpagelabeldisabled') : label;
				label.text(value);
			} else if (key === 'firstPageLabelText') {
				label = pager.find('.ui-iggrid-firstpagelabel');
				label = label.length === 0 ? pager.find('.ui-iggrid-firstpagelabeldisabled') : label;
				label.text(value);
			} else if (key === 'lastPageLabelText') {
				label = pager.find('.ui-iggrid-lastpagelabel');
				label = label.length === 0 ? pager.find('.ui-iggrid-nextpagelabeldisabled') : label;
				label.text(value);
			}
	    },
		// Accepts parameters:
		// index - page index to switch to 
		pageIndex: function (index) {
			/* gets /sets the current page index, delegates data binding and paging to $.ig.DataSource 
				paramType="number" optional="true" the page index to go to
				returnType="number" optional="true" if no param is specified, returns the current page index
			*/
			if (index !== null && index !== undefined) {
				this._overrideLabel = true;
				this.options.currentPageIndex = index;
			}
			// fire partial dirty event - currently used only in Selection - cause we just need to call clearSelection without clearing any visual states or reset the whole UI 
			// we cannot use UI Dirty cause if we trigger this event here it means behaviors such as *Sorting* (not Selection!) will reset their whole state, and we want to keep the
			// data sorted (for example) while paging locally
            // L.A. 12 June 2012 - Fixing bug #114318
            // If index is not set then the pageIndex is called as GET index, so it's not necessary to 
            // to call the UIDIRTY function which removes clears the selection
            if (index !== undefined && index !== null) {
			    this.grid.element.trigger('iggriduisoftdirty', {owner: this});
            }
			return this.grid.dataSource.pageIndex(index);
		},
		// Accepts parameters:
		// size - page size 
		pageSize: function (size) {
			/* gets / sets the page Size. if no parameter is specified, just returns the current page size
				paramType="number" optional="true" the page size 
				returnType="number" optional="true" if no param is specified, returns the current page size
			*/
			var noCancel = true;
			if (size) {
				this.grid.dataSource.settings.paging.pageIndex = 0;
				this.options.currentPageIndex = 0;
				// trigger DataBinding / DataBound
				noCancel = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
				if (noCancel) {
					this._showLoading();
					this.grid.dataSource.pageSize(size);
				}
				//A.T. 14 Feb 2011 - fix for bug #65975
				// update page size dropdown
				if (this._pageSizeDD) {
					this._pageSizeDD.igEditor('value', size);
				}
			} else {
				return this.grid.dataSource.pageSize();
			}
		},
		_initLoadingIndicator: function () {
			// attach loading indicator widget
			this._loadingIndicator = this.grid.container().igLoading().data("igLoading").indicator();
		},
		_nextPage: function (event) {
			var noCancel = true, noCancelBinding = true;
			noCancel = this._trigger(this.events.pageIndexChanging, null, {newPageIndex: this.options.currentPageIndex + 1, currentPageIndex: this.options.currentPageIndex, owner: this});
			if (noCancel) {
				if (this.options.currentPageIndex >= this.grid.dataSource.pageCount() - 1) {
					return;
				}
				this.options.currentPageIndex = this.options.currentPageIndex + 1;
				noCancelBinding = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
				this._shouldFirePageIndexChanged = true;
				if (noCancelBinding) {
					this._showLoading();
					this._overrideLabel = true;
					this.grid.dataSource.nextPage();
				}
				// S.S. March 30th, 2012 Bug #99821. Removing triggering of uisoftdirty in this case. If it's triggered Selection
				// clears after paging occurs and therefore makes reselecting checked rows impossible. The bugs this was included for
				// do not reproduce and also _lastPage and _firstPage do not trigger this at all.
				//this.grid.element.trigger('iggriduisoftdirty', {owner: this});
				//this._trigger(this.events.pageIndexChanged, null, {pageIndex: this.options.currentPageIndex, owner: this});
			}
			if (event) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		_prevPage: function (event) {
			var noCancel = true, noCancelBinding = true;
			noCancel = this._trigger(this.events.pageIndexChanging, null, {newPageIndex: this.options.currentPageIndex - 1, currentPageIndex: this.options.currentPageIndex, owner: this});
			if (noCancel) {
				if (this.options.currentPageIndex === 0) {
					return;
				}
				this.options.currentPageIndex = this.options.currentPageIndex - 1;
				noCancelBinding = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
				this._shouldFirePageIndexChanged = true;
				if (noCancelBinding) {
					this._showLoading();
					this._overrideLabel = true;
					this.grid.dataSource.prevPage();
				}
				// S.S. March 30th, 2012 Bug #99821. Removing triggering of uisoftdirty in this case. If it's triggered Selection
				// clears after paging occurs and therefore makes reselecting checked rows impossible. The bugs this was included for
				// do not reproduce and also _lastPage and _firstPage do not trigger this at all.
				//this.grid.element.trigger('iggriduisoftdirty', {owner: this});
				//this._trigger(this.events.pageIndexChanged, null, {pageIndex: this.options.currentPageIndex, owner: this});
			}
			if (event) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		_firstPage: function (event) {
			var noCancel = true, noCancelBinding = true;
			noCancel = this._trigger(this.events.pageIndexChanging, null, {newPageIndex: 0, currentPageIndex: this.options.currentPageIndex, owner: this});
			if (noCancel) {
				noCancelBinding = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
				this._shouldFirePageIndexChanged = true;
				if (noCancelBinding) {
					this._showLoading();
					this.pageIndex(0);
				}
				//this._trigger(this.events.pageIndexChanged, null, {pageIndex: 0, owner: this});
			}
			if (event) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		_lastPage: function (event) {
			var noCancel = true, noCancelBinding = true;
			noCancel = this._trigger(this.events.pageIndexChanging, null, {newPageIndex: this.grid.dataSource.pageCount() - 1, currentPageIndex: this.options.currentPageIndex, owner: this});
			if (noCancel) {
				noCancelBinding = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
				this._shouldFirePageIndexChanged = true;
				if (noCancelBinding) {
					this._showLoading();
					this.pageIndex(this.grid.dataSource.pageCount() - 1);
				}
				//this._trigger(this.events.pageIndexChanged, null, {pageIndex: this.grid.dataSource.pageCount() - 1, owner: this});
			}
			if (event) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		_showLoading: function () {
			this._loadingIndicator.show();
		},
		_hideLoading: function () {
			this._loadingIndicator.hide();
		},
	    _bindEvents: function (pagerElement) {
		    var paging = this, grid = this.grid, noCancel = true, id, noCancelBinding = true;
			id = '#' + grid.element[0].id + '_pager';
		    $(id + ' li a').bind({
			    mousedown: function (event) {
				    // page changed 
					var newIndex = $(event.target).parent().data('pageIndex');
					if ($.type(newIndex) === "number" && newIndex !== paging.options.currentPageIndex) {
						// fire PageIndexChanging
						noCancel = paging._trigger(paging.events.pageIndexChanging, event, {newPageIndex: newIndex, currentPageIndex: paging.options.currentPageIndex, owner: paging});
						paging._shouldFirePageIndexChanged = true;
						if (noCancel) {
							noCancelBinding = paging.grid._trigger(paging.grid.events.dataBinding, null, {owner: paging.grid});
							if (noCancelBinding) {
								paging._showLoading(grid.element.children("tbody"));
								paging.pageIndex(newIndex);
							}
							// decide exactly when should the pageIndexChanged event fire
							//paging._trigger(paging.events.pageIndexChanged, event, {pageIndex: paging.options.currentPageIndex, owner: paging});
						}
					}
			    }
			});
			// hover styles
			$(id + ' li').bind({
				mouseover: function (event) {
					$(event.currentTarget).addClass(paging.css.pageHover);
				},
				mouseout: function (event) {
					$(event.currentTarget).removeClass(paging.css.pageHover);
				}
			});
	    },
		_gridRendered: function (gridContainer) {
			if (this.options.showPageSizeDropDown === true && this.options.pageSizeDropDownLocation === 'above' && !this._pageSizeDropDownRendered) {
				// the second arg means prepend not append if it is true
				this._renderPageSizeDropDown(gridContainer, true);
				if (this.grid.options.autoAdjustHeight) {
					this.grid._initializeHeights();
					this.grid._adjustLastColumnWidth();
				}
				// remove rounded corners from the caption, if any
				if (this.grid.options.caption !== null) {
					$('#' + this.grid.element[0].id + '_caption').removeClass('ui-corner-top');
				}
			}
		},
		_dataRendered: function () {
		    var id = this.grid.element[0].id,
				pageCount,
				i,
				html,
				// construct pager div
				pagerHtml = toStaticHTML('<div id="' + id +  '_pager"></div>'),
				pageLinkHtml = toStaticHTML('<li class="${pageClass}"><a class="${pageLinkClass}" href="javascript:void(0);">${page}</a></li>'),
				pager = null,
				startRecord = 0,
				endRecord = 0,
				recordsCount = 0,
				localRecordsCount = 0,
				noCancel = true,
				pageList,
				pagesArray,
				dropDownContainer,
				startPageIndex = 0,
				endPageIndex = 0,
				template = this.options.pagerRecordsLabelTemplate,
				self = this,
				pagerRight = null,
				vpc = this.options.visiblePageCount,
				val = 0,
				recordsLabel = null;
			this._deleteOld();
			noCancel = this._trigger(this.events.pagerRendering, null, {dataSource: this.grid.dataSource, owner: this});
			if (noCancel) {
				if (this.grid._shouldResetPaging) {
					this.options.currentPageIndex = 0;
					this.grid._shouldResetPaging = false;
				}
				// empty everything but the summary label
				if ($('#' + id + '_pager_label').length > 0) {
					$('#' + id + '_pager .ui-iggrid-paging').remove();
				} else {
					$('#' + id + '_pager').empty();
				}
				this._initLoadingIndicator();
				if (this.grid.dataSource.pageSizeDirty()) {
					this.options.currentPageIndex = this.grid.dataSource.pageIndex();
					this.grid.dataSource.pageSizeDirty(false);
				}
				// check if we have virtualization enabled or not
				if ($('#' + id + '_pager').length === 0) {
					id = this.grid.element[0].id;
					pager = $(pagerHtml).appendTo('#' + id + '_container');
				} else {
					pager = $('#' + id + '_pager');
				}
				// apply pager class
				pager.addClass(this.css.pagerClass);
				if (this.options.showPagerRecordsLabel) {
					// calculate startRecord and endRecord
					recordsCount = this.grid.dataSource.totalRecordsCount() > 0 ? this.grid.dataSource.totalRecordsCount() : this.grid.dataSource.totalLocalRecordsCount();
					startRecord = this.options.currentPageIndex === 0 ? 1 : this.options.currentPageIndex * this.pageSize() + 1;

					// special case when there is filtering (Bug #67998)
					if (this.grid.dataSource._filter) {
						recordsCount = this.grid.dataSource._filteredData.length;
						localRecordsCount = this.grid.dataSource._filteredData.length;
					} else {
						localRecordsCount = this.grid.dataSource.totalLocalRecordsCount();
					}
					endRecord = this.options.currentPageIndex === 0 && this.pageSize() <= recordsCount ?
							this.pageSize() : startRecord + this.pageSize() > recordsCount ? recordsCount : (startRecord - 1) + this.pageSize();

					if (this.grid.dataSource.totalLocalRecordsCount() === 0) {
						// nothing to show
						startRecord = 0;
						endRecord = 0;
					}
					// check if dataView has less records than page size
					if (endRecord > localRecordsCount && this.options.type === "local") {
						endRecord = localRecordsCount;
					}
					// render label
					if (this._overrideLabel || !this.grid.dataSource._filter) {
						$('#' + pager[0].id + '_label').remove();
						template = template.replace('${startRecord}', startRecord).replace('${endRecord}', endRecord).replace('${recordCount}', recordsCount);
						recordsLabel = $('<span>' + template + '</span>').appendTo(pager).attr('id', pager[0].id + '_label').addClass(this.css.pagerRecordsLabel).attr('title', this.options.pagerRecordsLabelTooltip).show();
					} else if ($('#' + pager[0].id + '_label').length === 0) {
						recordsLabel = $('<span></span>').appendTo(pager).attr('id', pager[0].id + '_label').addClass(this.css.pagerRecordsLabel).attr('title', this.options.pagerRecordsLabelTooltip).show();
					}
					if (recordsLabel) {
						recordsLabel.data('hideflag', false);
					}
					$(pager[0].id + '_label').show();
					this._overrideLabel = false;
				}
				// get page count from the data source and render a span for each page index
				pageCount = this.grid.dataSource.pageCount();
				// A.T. render the container for first page, prev page, the page links, next page and last page
				pagerRight = $('<div></div>').appendTo(pager).addClass(this.css.pagerRightAreaContainer);
				if (this.options.showFirstLastPages === true) {
					this._renderFirstPage(pagerRight);
				}
				if (this.options.showPrevNextPages === true) {
					this._renderPrevPage(pagerRight);
				}
				// if the pageCountLimit is exceeded, switch to dropdown rendering automatically ! 
				if (this.grid.dataSource.pageCount() <= this.options.pageCountLimit) {
					pageList = $('<ul></ul>').appendTo(pagerRight).addClass(this.css.pageList);
					$('#' + id + '_pager').delegate("li a", {
						keydown: function (event) {
							if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
                                // L.A. 23 April 2012 Fixed bug #88118 The loading indicator is not displayed when keyboard navigation is used on the page index buttons (remote paging)
                                self._showLoading();
								self.pageIndex($(event.currentTarget).closest('li').data('pageIndex'));
								event.stopPropagation();
								event.preventDefault();
							}
						},
						focus: function (event) {
							$(event.currentTarget).closest('li').addClass(self.css.pageFocused);
						},
						blur: function (event) {
							$(event.currentTarget).closest('li').removeClass(self.css.pageFocused);
						}
					});
					val = Math.floor(parseInt(vpc, 10) / 2);
					// we will render the number of page links specified by visiblePageCount
					startPageIndex = this.options.currentPageIndex - val;
					if (startPageIndex < 0) {
						startPageIndex = 0;
					}
					endPageIndex = this.options.currentPageIndex + val;
					// compensate the indices, so that we always get the same count
					if (this.options.currentPageIndex - startPageIndex < val) {
						endPageIndex += val - (this.options.currentPageIndex - startPageIndex);
					}
					if (this.grid.dataSource.pageCount() - (this.options.currentPageIndex + 1) < val && vpc % 2 !== 0) {
						startPageIndex = startPageIndex - (val - (this.grid.dataSource.pageCount() - (this.options.currentPageIndex + 1)));
					}
					if (endPageIndex >= this.grid.dataSource.pageCount()) {
						endPageIndex = this.grid.dataSource.pageCount() - 1;
					}
					if (startPageIndex < 0) {
						startPageIndex = 0;
					}
					if (vpc % 2 === 0 && endPageIndex - startPageIndex < vpc - 1) {
						startPageIndex -= (vpc - 1) - (endPageIndex - startPageIndex);
					}
					if (startPageIndex < 0) {
						startPageIndex = 0;
					}
					for (i = startPageIndex; i <= endPageIndex && i - startPageIndex < vpc; i++) {
						html = pageLinkHtml.replace('${page}', (i + 1)).replace('${pageLinkClass}', i === this.options.currentPageIndex ? this.css.pageLinkCurrent : this.css.pageLink);
						html = html.replace('${pageClass}', i === this.options.currentPageIndex ? this.css.pageCurrent : this.css.page);
						$(html).appendTo(pageList).attr('title', this.options.pageTooltipFormat.replace('${index}', i + 1)).data('pageIndex', i);
					}
				} else {
					// render dropdown
					pagesArray = [];
					for (i = 1; i <= pageCount; i++) {
						pagesArray.push(i + this._empty());
					}
					// create the igEditor
					dropDownContainer = $('<div></div>').appendTo(pagerRight).addClass(this.css.pageDropDownContainer).attr('title', this.options.currentPageDropDownTooltip);
					$('<span></span>').appendTo(dropDownContainer).text(this.options.currentPageDropDownLeadingLabel).addClass(this.css.pageDropDownLabels);
					// render igEditor now
					this._curPageDD = $('<span />').css('display', 'none').appendTo(dropDownContainer).addClass(this.css.pageDropDownContainer).igEditor({
						listItems: pagesArray,
						readOnly: false,
						listMatchOnly: true,
						width: this.options.defaultDropDownWidth,
						nullable: false,
						listAutoComplete: true,
						button: 'dropdown',
						type: 'text',
						value: this.options.currentPageIndex + 1,
						dropDownTriggers: 'button,focus',
						textChanged: $.proxy(this._dropDownPageIndex, this)
					}).css('display', '');
					// render trailing label
					$('<span></span>').appendTo(dropDownContainer).text(this.options.currentPageDropDownTrailingLabel.replace('${count}', this.grid.dataSource.pageCount())).addClass(this.css.pageDropDownLabels);
				}
				if (this.options.showPrevNextPages === true) {
					this._renderNextPage(pagerRight);
				}
				if (this.options.showFirstLastPages === true) {
					this._renderLastPage(pagerRight);
				}
				if (this.options.showPageSizeDropDown && this.options.pageSizeDropDownLocation === 'inpager') {
					this._renderPageSizeDropDown(pagerRight);
				}
				this._bindEvents(pager);
				// hide loading message
				this._hideLoading(this.grid.element.children("tbody"));
				pager.show();
				// fire pager rendered event 
				this._trigger(this.events.pagerRendered, null, {dataSource: this.grid.dataSource, owner: this});
				if (this._shouldFirePageIndexChanged) {
					this._shouldFirePageIndexChanged = false;
					this._trigger(this.events.pageIndexChanged, null, {pageIndex: this.options.currentPageIndex, owner: this});
				}
			}
	    },
		_dropDownPageIndex: function (event, args) {
			var noCancel = true, noCancelBinding = true;
			noCancel = this._trigger(this.events.pageIndexChanging, null, {newPageIndex: parseInt(args.text, 10) - 1, currentPageIndex: this.options.currentPageIndex, owner: this});
			if (noCancel) {
				noCancelBinding = this.grid._trigger(this.grid.events.dataBinding, null, {owner: this.grid});
				if (noCancelBinding) {
					this._shouldFirePageIndexChanged = true;
					if (args.text) {
						this._showLoading();
						this.pageIndex(parseInt(args.text, 10) - 1);
					}
				}
				this.grid.element.trigger('iggriduisoftdirty', {owner: this});
				//this._trigger(this.events.pageIndexChanged, null, {pageIndex: this.options.currentPageIndex, owner: this});
			}
		},
		_renderPrevPage: function (pager) {
			// we render one div, which has one span for the prev image, and one span for the prev text
			var prev, self = this, imgspan;
			prev = $('<div></div>').appendTo(pager).addClass(this.css.prevPage).attr('title', this.options.prevPageTooltip);
			if (this.options.currentPageIndex === 0) {
				$('<span></span>').appendTo(prev).addClass(this.css.prevPageImageDisabled);
				$('<span></span>').appendTo(prev).addClass(this.css.prevPageLabelDisabled).append(this.options.prevPageLabelText);
			} else {
				prev.bind('mousedown', $.proxy(this._prevPage, this));
				imgspan = $('<span></span>').appendTo(prev).addClass(this.css.prevPageImage);
				$('<span></span>').appendTo(prev).addClass(this.css.prevPageLabel).append(this.options.prevPageLabelText);
				imgspan.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));
				imgspan.parent().bind({
					keydown: function (event) {
						if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
							self._prevPage();
							event.stopPropagation();
							event.preventDefault();
						}
					},
					focus: function (event) {
						$(event.currentTarget).closest('div').removeClass('ui-state-default').addClass('ui-state-focus');
					},
					blur: function (event) {
						$(event.currentTarget).closest('div').removeClass('ui-state-focus').addClass('ui-state-default');
					}
				});
			}
		},
		_renderNextPage: function (pager) {
			// we render one div, which has one span for the next image, and one span for the next text
			var next, recordsCount, self = this, imgspan;
			next = $('<div></div>').appendTo(pager).addClass(this.css.nextPage).attr('title', this.options.nextPageTooltip);
			recordsCount = this.grid.dataSource.totalRecordsCount() > 0 ? this.grid.dataSource.totalRecordsCount() : this.grid.dataSource.data().length;
			if (this.options.currentPageIndex === this.grid.dataSource.pageCount() - 1) {
				$('<span></span>').appendTo(next).addClass(this.css.nextPageLabelDisabled).append(this.options.nextPageLabelText);
				$('<span></span>').appendTo(next).addClass(this.css.nextPageImageDisabled);
			} else {
				next.bind('mousedown', $.proxy(this._nextPage, this));
				$('<span></span>').appendTo(next).addClass(this.css.nextPageLabel).append(this.options.nextPageLabelText);
				imgspan = $('<span></span>').appendTo(next).addClass(this.css.nextPageImage);
				imgspan.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));
				imgspan.parent().bind({
					keydown: function (event) {
						if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
							self._nextPage();
							event.stopPropagation();
							event.preventDefault();
						}
					},
					focus: function (event) {
						$(event.currentTarget).closest('div').removeClass('ui-state-default').addClass('ui-state-focus');
					},
					blur: function (event) {
						$(event.currentTarget).closest('div').removeClass('ui-state-focus').addClass('ui-state-default');
					}
				});
			}
		},
		_renderFirstPage: function (pager) {
			var first, self = this, imgspan;
			first = $('<div></div>').appendTo(pager).addClass(this.css.firstPage).attr('title', this.options.firstPageTooltip);
			if (this.options.currentPageIndex === 0) {
				$('<span></span>').appendTo(first).addClass(this.css.firstPageImageDisabled);
				$('<span></span>').appendTo(first).addClass(this.css.firstPageLabelDisabled).append(this.options.firstPageLabelText);
			} else {
				first.bind('mousedown', $.proxy(this._firstPage, this));
				imgspan = $('<span></span>').appendTo(first).addClass(this.css.firstPageImage);
				$('<span></span>').appendTo(first).addClass(this.css.firstPageLabel).append(this.options.firstPageLabelText);
				imgspan.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));

				imgspan.parent().bind({
					keydown: function (event) {
						if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
							self._firstPage();
							event.stopPropagation();
							event.preventDefault();
						}
					},
					focus: function (event) {
						$(event.currentTarget).closest('div').removeClass('ui-state-default').addClass('ui-state-focus');
					},
					blur: function (event) {
						$(event.currentTarget).closest('div').removeClass('ui-state-focus').addClass('ui-state-default');
					}
				});
			}
		},
		_renderLastPage: function (pager) {
			// we render one div, which has one span for the next image, and one span for the next text
			var last, self = this, imgspan;
			last = $('<div></div>').appendTo(pager).addClass(this.css.lastPage).attr('title', this.options.lastPageTooltip);
			if (this.options.currentPageIndex === this.grid.dataSource.pageCount() - 1) {
				$('<span></span>').appendTo(last).addClass(this.css.lastPageLabelDisabled).append(this.options.lastPageLabelText);
				$('<span></span>').appendTo(last).addClass(this.css.lastPageImageDisabled);
			} else {
				last.bind('mousedown', $.proxy(this._lastPage, this));
				$('<span></span>').appendTo(last).addClass(this.css.lastPageLabel).append(this.options.lastPageLabelText);
				imgspan = $('<span></span>').appendTo(last).addClass(this.css.lastPageImage);
				imgspan.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));
				imgspan.parent().bind({
					keydown: function (event) {
						if (event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.SPACE) {
							self._lastPage();
							event.stopPropagation();
							event.preventDefault();
						}
					},
					focus: function (event) {
						$(event.currentTarget).closest('div').removeClass('ui-state-default').addClass('ui-state-focus');
					},
					blur: function (event) {
						$(event.currentTarget).closest('div').removeClass('ui-state-focus').addClass('ui-state-default');
					}
				});
			}
		},
		_renderPageSizeDropDown: function (parent, prepend) {
			// render label here 
			var editorId = this.grid.id() + '_editor', cClass, items;
			cClass = this.options.pageSizeDropDownLocation === 'above' ? this.css.pageSizeDropDownContainerAbove : this.css.pageSizeDropDownContainer;
			if (prepend) {
				parent = $('<div></div>').prependTo(parent).addClass(cClass);
			} else {
				parent = $('<div></div>').appendTo(parent).addClass(cClass);
			}
			parent.attr('title', this.options.pageSizeDropDownTooltip);
			parent = $('<div></div>').appendTo(parent).addClass(this.css.pagingResults);
			if (prepend) {
				$('<span>' + this.options.pageSizeDropDownTrailingLabel + '</span>').prependTo(parent).addClass(this.css.pageSizeLabel);
				$('<span></span>').prependTo(parent).attr('id', editorId).addClass(this.css.pageSizeDropDown);
				$('<span>' + this.options.pageSizeDropDownLabel + '</span>').prependTo(parent).addClass(this.css.pageSizeLabel);
			} else {
				$('<span>' + this.options.pageSizeDropDownLabel + '</span>').appendTo(parent).addClass(this.css.pageSizeLabel);
				$('<span></span>').appendTo(parent).attr('id', editorId).addClass(this.css.pageSizeDropDown);
				$('<span>' + this.options.pageSizeDropDownTrailingLabel + '</span>').appendTo(parent).addClass(this.css.pageSizeLabel);
			}
			items = (this.options.pageSizeList === null || this.options.pageSizeList.length === 0) ? [5, 10, 20, 25, 50, 75, 100] : this.options.pageSizeList;
			if ($.type(items) === 'string') {
				items = items.split(',');
			}
			this._pageSizeDD = $('#' + editorId).css('display', 'none').igEditor({
				width: this.options.defaultDropDownWidth,
				button: 'dropdown',
				dropDownOnReadOnly: true,
				dropDownTriggers: 'button,focus',
				listItems: items,
				listMatchOnly: true,
				readOnly: true,
				textAlign: 'left',
				type: 'numeric',
				value: this.pageSize(),
				textChanged: $.proxy(this._changePageSize, this)
			}).css('display', '');
			this._pageSizeDropDownRendered = true;
			// S.S. September 21, 2012 - An event after rendering the dropdown container for the paging widget is needed by the Column Moving
			// to recalculate the header cell positions.
			this._trigger("pagingdropdownrendered");
		},
		_changePageSize: function (event, args) {
			var noCancel = true, size =  parseInt(args.text, 10);
			noCancel = this._trigger(this.events.pageSizeChanging, null, {currentPageSize: this.pageSize(), newPageSize: size, owner: this});
			if (noCancel) {
				//A.T. 29 Nov 2011 - Fix for #91994 - moving the dirty event trigger before the page size change
				// that's necessary because if everything is bound remotely, the filtering/sorting/etc params can be encoded
				// in advance, before dirty is triggered, which will result in the filtering or sorting being persisted
				// trigger UI dirty on the grid
                this.grid.element.trigger('iggriduidirty', {owner: this});
				this.pageSize(size);
				this._trigger(this.events.pageSizeChanged, null, {pageSize: size, owner: this});
			}
		},
		_deleteOld: function (destroy) {
			if (this._curPageDD) {
				this._curPageDD.igEditor('destroy');
				delete this._curPageDD;
			}
			if (this._pageSizeDD && (destroy || this.options.pageSizeDropDownLocation === 'inpager')) {
				this._pageSizeDD.igEditor('destroy');
				delete this._pageSizeDD;
			}
		},
	    destroy: function () {
			/*destroys the igGridPaging feature by removing all elements in the pager area, unbinding events, and resetting data to discard data filtering on paging*/
			var pager = $('#' + this.grid.element[0].id + '_pager');
			// rebind the grid by setting pageSize to 0
			this.pageSize(0);
			this._deleteOld(true);
			// unbind events and remove elements
			if (this.options.showPageSizeDropDown === true && this.options.pageSizeDropDownLocation === 'above') {
				$('#' + this.grid.container()[0].id + ' .ui-iggrid-pagesizedropdowncontainerabove').remove();
			}
			// jQuery's remove is recursive and should take care of unregistering all events and removing all child elements
			pager.remove();
			$.Widget.prototype.destroy.call(this);
			return this;
	    },
	    // every grid feature widget should implement this 
	    _injectGrid: function (gridInstance, isRebind) {
		    this.grid = gridInstance;
			if (this.options.type === null) {
				// infer type
				this.options.type = this.grid._inferOpType();
			}
			// delegate to the data source all paging options
			this.grid.dataSource.settings.paging.type = this.options.type || "remote";
			//if (!isRebind) {
			this.grid.dataSource.settings.paging.pageIndex = this.options.currentPageIndex;
			//} else {
			//	this.grid.dataSource.settings.paging.pageIndex = 0;
			//	this.options.currentPageIndex = 0;
			//}
			this.grid.dataSource.settings.paging.pageSize = parseInt(this.options.pageSize, 10);
			if (this.options.pageSizeUrlKey !== null && this.options.pageIndexUrlKey) {
				this.grid.dataSource.settings.paging.pageSizeUrlKey = this.options.pageSizeUrlKey;
				this.grid.dataSource.settings.paging.pageIndexUrlKey = this.options.pageIndexUrlKey;
			}
			if (this.options.recordCountKey !== null) {
				this.grid.dataSource.settings.responseTotalRecCountKey = this.options.recordCountKey;
			}
			this.grid.dataSource.settings.paging.enabled = true;
			//A.T 13 April 2011 - fix for bug #72431
			if (this._pageSizeDD) {
				this._pageSizeDD.igEditor('option', 'value', this.options.pageSize);
			}
	    },
		_empty: function () {
			return "";
		}
    });
    $.extend($.ui.igGridPaging, {version: '12.2.20122.1021'});
}(jQuery));
