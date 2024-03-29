/*!
* Infragistics.Web.ClientUI HTML Editor localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.HtmlEditor) {
	$.ig.HtmlEditor = {};

	$.extend($.ig.HtmlEditor, {

		locale: {
			boldButtonTitle: 'Bold',
			italicButtonTitle: 'Italic',
			underlineButtonTitle: 'Underline',
			strikethroughButtonTitle: 'Strikethrough',
			increaseFontSizeButtonTitle: 'Increase Font Size',
			decreaseFontSizeButtonTitle: 'Decrease Font Size',
			alignTextLeftButtonTitle: 'Align Text Left',
			alignTextRightButtonTitle: 'Align Text Right',
			alignTextCenterButtonTitle: 'Center',
			justifyButtonTitle: 'Justify',
			bulletsButtonTitle: 'Bullets',
			numberingButtonTitle: 'Numbering',
			decreaseIndentButtonTitle: 'Decrease Indent',
			increaseIndentButtonTitle: 'Increase Indent',
			insertPictureButtonTitle: 'Insert Picture',
			fontColorButtonTitle: 'Font Color',
			textHighlightButtonTitle: 'Text Highlight Color',
			insertLinkButtonTitle: 'Insert Hyperlink',
			insertTableButtonTitle: 'Table',
			addRowButtonTitle: 'Add Row',
			removeRowButtonTitle: 'Remove Row',
			addColumnButtonTitle: 'Add Column',
			removeColumnButtonTitle: 'Remove Column',
			inserHRButtonTitle: 'Insert Horizontal Rule',
			viewSourceButtonTitle: 'View Source',
			cutButtonTitle: 'Cut',
			copyButtonTitle: 'Copy',
			pasteButtonTitle: 'Paste',
			undoButtonTitle: 'Undo',
			redoButtonTitle: 'Redo',
			imageUrlDialogText: 'Image URL:',
			imageAlternativeTextDialogText: 'Alternative Text:',
			imageWidthDialogText: 'Image Width:',
			imageHeihgtDialogText: 'Image Height:',
			linkNavigateToUrlDialogText: 'Navigate to URL:',
			linkDisplayTextDialogText: 'Display Text:',
			linkOpenInDialogText: 'Open In:',
			linkTargetNewWindowDialogText: 'New Window',
			linkTargetSameWindowDialogText: 'Same Window',
			linkTargetParentWindowDialogText: 'Parent Window',
			linkTargetTopmostWindowDialogText: 'Topmost Window',
			applyButtonTitle: 'Apply',
			cancelButtonTitle: 'Cancel',
			collapseButtonTitle: 'Collapse',
			expandButtonTitle: 'Expand',
			fontNames: {
				win: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Lucida Console", value: "Lucida Console" },
						{ text: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
						{ text: "Palatino Linotype", value: "Palatino Linotype" },
						{ text: "Tahoma", value: "Tahoma" },
						{ text: "Trebuchet MS", value: "Trebuchet MS" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Wingdings", value: "Wingdings" },
						{ text: "MS Sans Serif", value: "MS Sans Serif" },
						{ text: "MS Serif", value: "MS Serif" }
					],
				mac: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Monaco", value: "Monaco" },
						{ text: "Lucida Grande", value: "Lucida Grande" },
						{ text: "Book Antiqua", value: "Book Antiqua" },
						{ text: "Geneva", value: "Geneva" },
						{ text: "Trebuchet MS", value: "Trebuchet" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Zapf Dingbats", value: "Zapf Dingbats" },
						{ text: "New York", value: "New York" }
					]
			},
			fontSizes: [
				{ text: "1", value: "1 (8pt)", style: "xx-small"},
				{ text: "2", value: "2 (9pt)", style: "x-small" },
				{ text: "3", value: "3 (10pt)", style: "small" },
				{ text: "4", value: "4 (12pt)", style: "medium" },
				{ text: "5", value: "5 (14pt)", style: "large" },
				{ text: "6", value: "6 (16pt)", style: "x-large" },
				{ text: "7", value: "7 (18pt)", style: "xx-large" }
			],
			formatsList: [
					{ text: "h1", value: "Heading 1" },
					{ text: "h2", value: "Heading 2" },
					{ text: "h3", value: "Heading 3" },
					{ text: "h4", value: "Heading 4" },
					{ text: "h5", value: "Heading 5" },
					{ text: "h6", value: "Heading 6" }
				]
		}

	});
}

/*!
 * Infragistics.Web.ClientUI HtmlEditor 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 * <Licensing info>
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *   jquery-1.4.4.js
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 *   ig.ui.shared.js
 *   ig.dataSource.js
 *   ig.ui.combo.js
 *   ig.ui.dialog.js
 *   ig.util.js
 *   ig.ui.htmleditor-en.js
 */

/*global jQuery, window, document, Class, $ */
if (typeof jQuery !== "function") {
	throw new Error("jQuery is undefined");
}

(function ($) {

	/*
		The igHtmlEditor is a jQuery based widget which allow you to convert a simple html element into a rich text area.
	*/
	$.widget("ui.igHtmlEditor", {
		options: {
			/* type="boolean" Shows/hides the "Formating" toolbar. */
			showFormattingToolbar: true,
			/* type="boolean" Shows/hides the "Text" toolbar. */
			showTextToolbar: true,
			/* type="boolean" Shows/hides the "Insert Object" toolbar. */
			showInsertObjectToolbar: true,
			/* type="boolean" Shows/hides the "Copy Paste" toolbar. */
			showCopyPasteToolbar: true,
			/* type="numeric" Set or get the widget width.*/
			width: 725,
			/* type="numeric" Set or get the widget height.*/
			height: 350,
			/* type="array" The html editor toolbars list. */
			toolbarSettings: [],
			/* type="array" The html editor custom toolbars list. */
			customToolbars: [],
			inputName: ""
		},
		events: {
			/* cancel="false" Event fired after the whole html editor widget has been rendered. */
			rendered: "rendered",
			/* cancel="false" Event fired before the html editor widget has been rendered. */
			rendering: "rendering",
			/* cancel="true" Event fired before a toolbar item is clicked. */
			actionExecuting: "actionExecuting",
			/* cancel="false" Event fired after a toolbar item is clicked. */
			actionExecuted: "actionExecuted",
			/* cancel="true" Event fired before a toolbar is collapsed. */
			toolbarCollapsing: "toolbarCollapsing",
			/* cancel="false" Event fired after a toolbar is collapsed. */
			toolbarCollapsed: "toolbarCollapsed",
			/* cancel="true" Event fired before a toolbar is expanded. */
			toolbarExpanding: "toolbarExpanding",
			/* cancel="false" Event fired after a toolbar is expanded. */
			toolbarExpanded: "toolbarExpanded",
			/* cancel="false" Event is fired on keyboard cut action. */
			cut: "cut",
			/* cancel="false" Event is fired on keyboard copy action. */
			copy: "copy",
			/* cancel="false" Event is fired on keyboard paste action. */
			paste: "paste",
			/* cancel="false" Event is fired on keyboard undo action. */
			undo: "undo",
			/* cancel="false" Event is fired on keyboard redo action. */
			redo: "redo"
		},
		css: {
			/* The widget base class css. */
			htmlEditor: "ui-widget ui-widget-content ui-corner-all ui-ightmleditor ui-helper-clearfix",
			/* The html editor content styles. */
			htmlEditorContent: "ui-ightmleditor-content",
			/* The html editor toolbars style. */
			toolbarsContainer: "ui-igtoolbars-holder",
			/* The html editor dom navigation toolbar css. */
			pathFinder: "ui-igPathFinder",
			/* The workspace css. */
			workspaceIframe: "ui-widget-content"
		},
		defaultToolbars: [
			{
				name: "textToolbar",
				displayName: "text manipulation toolbar",
				expanded: true,
				collapseButtonIcon: "ui-igbutton-collapse",
				expandButtonIcon: "ui-igbutton-expand",
				items: [
					{
						name: "Bold",
						type: "button",
						scope: null,
						props: {
							allowToggling: {
								value: true
							},
							isBold: {
								value: false,
								action: '_isSelectedAction'
							},
							boldButtonTooltip: {
								value: $.ig.HtmlEditor.locale.boldButtonTitle,
								action: '_tooltipAction'
							},
							boldButtonIcon: {
								value: "ui-igbutton-bold",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "Italic",
						type: "button",
						props: {
							isItalic: {
								value: false,
								action: '_isSelectedAction'
							},
							italicButtonTooltip: {
								value: $.ig.HtmlEditor.locale.italicButtonTitle,
								action: '_tooltipAction'
							},
							italicButtonIcon: {
								value: "ui-igbutton-italic",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "Underline",
						type: "button",
						props: {
							isUnderline: {
								value: false,
								action: '_isSelectedAction'
							},
							underlineButtonTooltip: {
								value: $.ig.HtmlEditor.locale.underlineButtonTitle,
								action: '_tooltipAction'
							},
							underlineButtonIcon: {
								value: "ui-igbutton-underline",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "Strikethrough",
						type: "button",
						props: {
							isStrikethrough: {
								value: false,
								action: '_isSelectedAction'
							},
							strikethroughButtonTooltip: {
								value: $.ig.HtmlEditor.locale.strikethroughButtonTitle,
								action: '_tooltipAction'
							},
							strikethroughButtonIcon: {
								value: "ui-igbutton-strikethrough",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "increasefontsize",
						type: "button",
						handler: "_increaseFontSize",
						props: {
							allowToggling: {
								value: false
							},
							isIncreaseFont: {
								value: false,
								action: '_isSelectedAction'
							},
							increaseFontButtonTooltip: {
								value: $.ig.HtmlEditor.locale.increaseFontSizeButtonTitle,
								action: '_tooltipAction'
							},
							increaseFontButtonIcon: {
								value: "ui-igbutton-increasefontsize",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "decreasefontsize",
						type: "button",
						handler: "_decreaseFontSize",
						props: {
							allowToggling: {
								value: false
							},
							isDecreaseFont: {
								value: false,
								action: '_isSelectedAction'
							},
							decreaseFontButtonTooltip: {
								value: $.ig.HtmlEditor.locale.decreaseFontSizeButtonTitle,
								action: '_tooltipAction'
							},
							decreaseFontButtonIcon: {
								value: "ui-igbutton-decreasefontsize",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "fontFamily",
						type: "combo",
						scope: null,
						handler: "_fontNamePlg",
						props: {
							fontFamilyComboWidth: {
								value: 135,
								action: "_comboWidthAction"
							},
							fontFamilyComboHeight: {
								value: "",
								action: "_comboHeightAction"
							},
							fontFamilies: {
								value: $.ig.HtmlEditor.locale.fontNames[/^win/gi.test(navigator.platform) ? 'win' : 'mac'],
								action: "_comboDataSourceAction"
							},
							selectedFontFamily: {
								value: "Times New Roman",
								action: "_comboSelectedItem"
							}
						}
					},
					{
						type: "combo",
						name: "fontSize",
						scope: null,
						handler: "_fontSizePlg",
						props: {
							fontSizeComboWidth: {
								value: 75,
								action: "_comboWidthAction"
							},
							fontSizeComboHeight: {
								value: "",
								action: "_comboHeightAction"
							},
							fontSizes: {
								value: $.ig.HtmlEditor.locale.fontSizes,
								action: "_comboDataSourceAction"
							},
							selectedFontSize: {
								value: "1",
								action: "_comboSelectedItem"
							},
							fontSizeItemsListWidth: {
								value: 115,
								action: "_comboDropDownListWidth"
							}
						}
					},
					{
						type: "combo",
						name: "formatsList",
						scope: null,
						handler: "_formatsListPlg",
						props: {
							formatsListComboWidth: {
								value: 120,
								action: "_comboWidthAction"
							},
							formatsListComboHeight: {
								value: "",
								action: "_comboHeightAction"
							},
							formatsList: {
								value: $.ig.HtmlEditor.locale.formatsList,
								action: "_comboDataSourceAction"
							},
							selectedFormat: {
								value: "h1",
								action: "_comboSelectedItem"
							}
						}
					}
				]
			},
			{
				name: "formattingToolbar",
				displayName: "text formatting toolbar",
				expanded: true,
				collapseButtonIcon: "ui-igbutton-collapse",
				expandButtonIcon: "ui-igbutton-expand",
				items: [
					{
						name: "justifyleft",
						type: "button",
						props: {
							isJustifyleft: {
								value: false,
								action: '_isSelectedAction'
							},
							justifyleftButtonTooltip: {
								value: $.ig.HtmlEditor.locale.alignTextLeftButtonTitle,
								action: '_tooltipAction'
							},
							justifyleftButtonIcon: {
								value: "ui-igbutton-justifyleft",
								action: '_buttonIconAction'
							}
						}

					},
					{
						name: "justifycenter",
						type: "button",
						props: {
							isJustifycenter: {
								value: false,
								action: '_isSelectedAction'
							},
							justifycenterButtonTooltip: {
								value: $.ig.HtmlEditor.locale.alignTextCenterButtonTitle,
								action: '_tooltipAction'
							},
							justifycenterButtonIcon: {
								value: "ui-igbutton-justifycenter",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "justifyright",
						type: "button",
						props: {
							isJustifyright: {
								value: false,
								action: '_isSelectedAction'
							},
							justifyrightButtonTooltip: {
								value: $.ig.HtmlEditor.locale.alignTextRightButtonTitle,
								action: '_tooltipAction'
							},
							justifyrightButtonIcon: {
								value: "ui-igbutton-justifyright",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "justifyfull",
						type: "button",
						props: {
							isJustifyfull: {
								value: false,
								action: '_isSelectedAction'
							},
							justifyfullButtonTooltip: {
								value: $.ig.HtmlEditor.locale.justifyButtonTitle,
								action: '_tooltipAction'
							},
							justifyfullButtonIcon: {
								value: "ui-igbutton-justifyfull",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "bullets",
						type: "splitButton",
						props: {
							items: {
								value: [
									{
										name: "InsertUnorderedList",
										label: $.ig.HtmlEditor.locale.bulletsButtonTitle,
										icon: "ui-igbutton-unorderedlist"
									},
									{
										name: "InsertOrderedList",
										label: $.ig.HtmlEditor.locale.numberingButtonTitle,
										icon: "ui-igbutton-orderedlist"
									}
								]
							},
							defaultItemName: {
								value: "InsertUnorderedList"
							}
						}
					},
					{
						name: "indents",
						type: "splitButton",
						props: {
							items: {
								value: [
									{
										name: "indent",
										label: $.ig.HtmlEditor.locale.increaseIndentButtonTitle,
										icon: "ui-igbutton-indent"
									},
									{
										name: "outdent",
										label: $.ig.HtmlEditor.locale.decreaseIndentButtonTitle,
										icon: "ui-igbutton-removeindent"
									}
								]
							},
							defaultItemName: {
								value: "indent"
							}
						}
					},
					{
						name: "textColor",
						type: "splitButtonColor",
						handler: "_fontColorPlg",
						props: {
							items: {
								value: [
									{
										name: "textColor",
										label: $.ig.HtmlEditor.locale.fontColorButtonTitle,
										icon: "ui-igbutton-forecolor"
									}
								]
							},
							defaultItemName: {
								value: "textColor"
							},
							selectedTextColor: {
								value: "red",
								action: "_spltButtonColorAction"
							}
						}
					},
					{
						name: "backgroundTextColor",
						type: "splitButtonColor",
						handler: "_fontBackgroundColorPlg",
						props: {
							items: {
								value: [
									{
										name: "backgroundTextColor",
										label: $.ig.HtmlEditor.locale.textHighlightButtonTitle,
										icon: "ui-igbutton-backcolor"
									}
								]
							},
							defaultItemName: {
								value: "backgroundTextColor"
							},
							selectedTextBackgroundColor: {
								value: "",
								action: "_spltButtonColorAction"
							}
						}
					}
				]
			},
			{
				name: "insertObjectToolbar",
				displayName: "objects insertion toolbar",
				expanded: true,
				collapseButtonIcon: "ui-igbutton-collapse",
				expandButtonIcon: "ui-igbutton-expand",
				items: [
					{
						name: "image",
						type: "button",
						handler: "_insertImageDialogPlg",
						props: {
							isImage: {
								value: false,
								action: '_isSelectedAction'
							},
							imageButtonTooltip: {
								value: $.ig.HtmlEditor.locale.insertPictureButtonTitle,
								action: '_tooltipAction'
							},
							imageButtonIcon: {
								value: "ui-igbutton-addimage",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "link",
						type: "button",
						handler: "_insertLinkPlg",
						props: {
							isLink: {
								value: false,
								action: '_isSelectedAction'
							},
							linkButtonTooltip: {
								value: $.ig.HtmlEditor.locale.insertLinkButtonTitle,
								action: '_tooltipAction'
							},
							linkButtonIcon: {
								value: "ui-igbutton-addlink",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "table",
						type: "button",
						handler: "_insertTablePlg",
						props: {
							isTable: {
								value: false,
								action: '_isSelectedAction'
							},
							tableButtonTooltip: {
								value: $.ig.HtmlEditor.locale.insertTableButtonTitle,
								action: '_tooltipAction'
							},
							tableButtonIcon: {
								value: "ui-igbutton-table",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "addRow",
						type: "button",
						handler: "_addTableRowPlg",
						props: {
							allowToggling: {
								value: false
							},
							isAddRow: {
								value: false,
								action: '_isSelectedAction'
							},
							addRowButtonTooltip: {
								value: $.ig.HtmlEditor.locale.addRowButtonTitle,
								action: '_tooltipAction'
							},
							addRowButtonIcon: {
								value: "ui-igbutton-addrow",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "addColumn",
						type: "button",
						handler: "_addTableColumnPlg",
						props: {
							allowToggling: {
								value: false
							},
							isAddColumn: {
								value: false,
								action: '_isSelectedAction'
							},
							addColumnButtonTooltip: {
								value: $.ig.HtmlEditor.locale.addColumnButtonTitle,
								action: '_tooltipAction'
							},
							addColumnButtonIcon: {
								value: "ui-igbutton-addcolumn",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "removeRow",
						type: "button",
						handler: "_removeTableRowPlg",
						props: {
							allowToggling: {
								value: false
							},
							isRemoveRow: {
								value: false,
								action: '_isSelectedAction'
							},
							removeRowButtonTooltip: {
								value: $.ig.HtmlEditor.locale.removeRowButtonTitle,
								action: '_tooltipAction'
							},
							removeRowButtonIcon: {
								value: "ui-igbutton-removerow",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "removeColumn",
						type: "button",
						handler: "_removeTableColumnPlg",
						props: {
							allowToggling: {
								value: false
							},
							isRemoveColumn: {
								value: false,
								action: '_isSelectedAction'
							},
							removeColumnButtonTooltip: {
								value: $.ig.HtmlEditor.locale.removeColumnButtonTitle,
								action: '_tooltipAction'
							},
							removeColumnButtonIcon: {
								value: "ui-igbutton-removecolumn",
								action: '_buttonIconAction'
							}
						}
					}
				]
			},
			{
				name: "copyPasteToolbar",
				displayName: "copy/paste toolbar",
				expanded: true,
				collapseButtonIcon: "ui-igbutton-collapse",
				expandButtonIcon: "ui-igbutton-expand",
				items: [
					{
						name: "copy",
						type: "button",
						scope: null,
						props: {
							isCopy: {
								value: false,
								action: '_isSelectedAction'
							},
							copyButtonTooltip: {
								value: $.ig.HtmlEditor.locale.copyButtonTitle,
								action: '_tooltipAction'
							},
							copyButtonIcon: {
								value: "ui-igbutton-copy",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "cut",
						type: "button",
						scope: null,
						props: {
							isCut: {
								value: false,
								action: '_isSelectedAction'
							},
							cutButtonTooltip: {
								value: $.ig.HtmlEditor.locale.cutButtonTitle,
								action: '_tooltipAction'
							},
							cutButtonIcon: {
								value: "ui-igbutton-cut",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "paste",
						type: "button",
						scope: null,
						props: {
							isPaste: {
								value: false,
								action: '_isSelectedAction'
							},
							pasteButtonTooltip: {
								value: $.ig.HtmlEditor.locale.pasteButtonTitle,
								action: '_tooltipAction'
							},
							pasteButtonIcon: {
								value: "ui-igbutton-paste",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "undo",
						type: "button",
						scope: null,
						props: {
							allowToggling: {
								value: false
							},
							isUndo: {
								value: false,
								action: '_isSelectedAction'
							},
							undoButtonTooltip: {
								value: $.ig.HtmlEditor.locale.undoButtonTitle,
								action: '_tooltipAction'
							},
							undoButtonIcon: {
								value: "ui-igbutton-undo",
								action: '_buttonIconAction'
							}
						}
					},
					{
						name: "redo",
						type: "button",
						scope: null,
						props: {
							allowToggling: {
								value: false
							},
							isRedo: {
								value: false,
								action: '_isSelectedAction'
							},
							redoButtonTooltip: {
								value: $.ig.HtmlEditor.locale.redoButtonTitle,
								action: '_tooltipAction'
							},
							redoButtonIcon: {
								value: "ui-igbutton-redo",
								action: '_buttonIconAction'
							}
						}
					}
				]
			}
		],
		NODE: new $.ig.XmlNodeType(),
		//This is property is populated by initToolabrs method in the following format.
		// The state of the toolbars (visible/hidden) is set by _setActiveToolbars method.
		_toolbarsActiveState: {
			// show[ToolbarName]: {name: '[ToolbarName]', value: true},
		},
		_toolbarItemsDescriptors: {
			button: $.ig.igToolbarButtonDescriptor,
			"0": $.ig.igToolbarButtonDescriptor,
			combo: $.ig.igToolbarComboDescriptor,
			"1": $.ig.igToolbarComboDescriptor,
			splitButton: $.ig.igToolbarSplitButtonDescriptor,
			"2": $.ig.igToolbarSplitButtonDescriptor,
			splitButtonColor: $.ig.igToolbarSplitButtonDescriptor,
			"3": $.ig.igToolbarSplitButtonDescriptor,
			custom: $.ig.igToolbarItemBaseDescriptor
		},
		_isDirty: false,
		_createWidget: function () {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			this._allToolbars = [];
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
		_id: function (id) {
			return this.element[0].id + id;
		},
		widget: function () {
		/*
			Returns the element on which the widget was instantiated
		*/
			return this.element;
		},
		_render: function () {
			var html = "",
				inputName = this.options.inputName || "source";
			// K.D. July 16th, 2012 Bug #101208 Removing the code that initially creates a paragraph
			this.element.addClass(this.css.htmlEditor);
			html += '	<div id="' + this._id('_toolbars') + '" class="' + this.css.toolbarsContainer + '"></div>';
			html += '	<div id="' + this._id("_content") + '" class="' + this.css.htmlEditorContent + '">';
			html += '		<iframe class="' + this.css.workspaceIframe + '" id="' + this._id("_editor") + '"></iframe>';
			html += '		<textarea name="' + inputName + '" id="' + this._id("_source") + '"></textarea>';
			html += '	</div>';

			$(html).appendTo(this.element);
			// K.D. July 26th, 2012 Bug #113717 The height is applied to the iframe and not to the element. Now the height is correctly
			// calculated relatively to the total height.
			this.element.height(this.options.height);
			this.element.width(this.options.width);
		},
		_createWorkspace: function (content) {
			var iFrameContent = '<' + '!' + 'DOCTYPE ' + '>'
				+ '<html>'
				+ '<head xmlns="http:\/\/www.w3.org\/1999\/xhtml">'
				+ '<title>igHtmlEditor<\/title>'
				+ '<\/head>'
				// K.D. September 12th, 2012 Bug #120892 adding spellcheck="false" to disable firefox spellchecker
				+ '<body contentEditable="true" spellcheck="false" style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);">'
				+ '<p>';
			if (!document.all) {
				iFrameContent += '<br \/>';
			}
			// K.D. July 17th, 2012 Bug #113728 Extracting any initial content and rendering it as content in the iframe workspace
			if (content && content.length > 0) {
				iFrameContent += content;
			}
			iFrameContent += '<\/p><\/body>'
				+ '<\/html>';

			this.workspace = this.element.find("#" + this._id("_editor"))[0];

			this.workspace.contentWindow.document.open("text/html", "replace");
			this.workspace.contentWindow.document.write(iFrameContent);
			this.workspace.contentWindow.document.close();

			if ($.browser.webkit) {
				this.workspace.contentWindow.document.body.contentEditable = true;
			}
			if (!document.all) {
				this.workspace.contentWindow.document.execCommand('styleWithCSS', false, true);
			}
		},
		_getToolbar: function (index) {
			if (!isNaN(parseInt(index, 10))) {
				return this._toolbars.eq(index);
			}
			if (typeof index === "string") {
				return this._toolbars.find('#' + this._id('_toolbars_' + index));
			}
		},
		_getFirefoxVersion: function () {
			if ($.browser.mozilla) {
				return parseInt(window.navigator.userAgent.match(/\bFirefox\/[0-9\.]+\b/)[0].split("/").reverse()[0], 10);
			}
		},
		_create: function () {
			var noCancel = this._trigger(this.events.rendering, null, {owner: this}),
				content = this.element.html();
			// K.D. July 17th, 2012 Bug #113728 Extracting any initial content and rendering it as content in the iframe workspace
			this.element.empty();
			this._allToolbars = $.extend(true, [], this.defaultToolbars.concat(this.options.customToolbars));

			this._initToolabrs();
			this._setActiveToolbars();

			if (noCancel) {
				this._render();
				this._createToolbars();
				// K.D. July 17th, 2012 Bug #113728 Extracting any initial content and rendering it as content in the iframe workspace
				this._createWorkspace(content);
				this._domPathToolbar();
				// K.D. July 26th, 2012 Bug #113717 The height is applied to the iframe and not to the element. Now the height is correctly
				// calculated relatively to the total height.
				this._resizeWorkspace();
				this._trigger(this.events.rendered, null, {owner: this});
			}
		},
		_resizeWorkspace: function () {
			// K.D. July 26th, 2012 Bug #113717 The height is applied to the iframe and not to the element. Now the height is correctly
			// calculated relatively to the total height.
			var height = this.element.height();
			height -= $('#' + this._id('_toolbars')).outerHeight(true);
			height -= $('.ui-igbutton-viewsource').outerHeight(true);
			$('#' + this._id('_editor')).height(height - 2); // Remove the borders from the height
			$('#' + this._id('_source')).height(height);
		},
		_init: function () {
			this._bindToToolbarEvents();
			this._bindWorkspaceEvents();
			this.sourceWindow = this.element.find("#" + this._id('_source'));
			//TODO: the new content is not wrap in <p> on enter.
			// $(this.workspace).contents().find('body').html(this.sourceWindow.val());
			this._initFontsCombos();
			this._initFormatsListCombo();
			this._initFontSizeCombo();
			//TODO: the new content is not wrap in <p> on enter.
			// this.setContent(this.options.value, "html");
			this._analyser = new $.ig.ToolbarHelper(this.workspace.contentWindow, this._toolbars.children());

			var self = this;
			this._onSelectionChange(function () {
				self._initialWorkspaceFormatting();
			});
		},
		_initFontsCombos: function () {
			var fontFamiliesCombo = this._getToolbar("textToolbar")
				.igToolbar("getItem", "fontFamily")
				.addClass("ui-combo-fontfamily");

			fontFamiliesCombo.igCombo("option", {
				// K.D. July 24th, 2012 Bug #111689 Combo items with item template cannot be selected under IE7/IE8
				// Combo bug #113720
				itemTemplate: '<span style="font-family: ${value}" unselectable="on">${text}</span>'
			});
		},
		_initFormatsListCombo: function () {
			var formatsListCombo = this._getToolbar("textToolbar").igToolbar("getItem", "formatsList");
			// K.D. July 24th, 2012 Bug #111689 Combo items with item template cannot be selected under IE7/IE8
			// Combo bug #113720
			formatsListCombo.igCombo("option", "itemTemplate", '<${text} unselectable="on">${value}</${text}>');
		},
		_initFontSizeCombo: function () {
			var fontSizesCombo = this._getToolbar("textToolbar").igToolbar("getItem", "fontSize");

			fontSizesCombo.igCombo("option", {
				// K.D. July 24th, 2012 Bug #111689 Combo items with item template cannot be selected under IE7/IE8
				// Combo bug #113720
				itemTemplate: '<span style="font-size: ${style}; line-height: ${style}" unselectable="on">${value}</span>'
			});
		},
		_setOption: function (name, value) {
			var self = this,
				updatedItems = [];

			if (name === undefined || value === undefined) {
				return;
			}
			if (name === "toolbarSettings") {
				$.each(value, function (index, toolbar) {
					$.each(toolbar, function (tbPropName, tbPropVal) {
						if (tbPropName !== "name") {
							self._tbHash[toolbar.name][tbPropName].updateProperty(tbPropName, tbPropVal);
							updatedItems.push(self._tbHash[toolbar.name][tbPropName]);
						}
					});
					self._getToolbar(self._allToolbars[index].name).igToolbar("option", "items", updatedItems);
				});
			} else if (this._toolbarsActiveState[name]) {
				this._showToolbar(this._toolbarsActiveState[name].name, value);
			} else if (name === "width") {
				this.element.width(value);
			} else if (name === "height") {
				this.element.find("#" + this._id("_editor")).height(value);
			}

			$.Widget.prototype._setOption.apply(this, arguments);

		},
		_showToolbar: function (name, show) {
			if (show) {
				this._getToolbar(name).show();
			} else {
				this._getToolbar(name).hide();
			}
		},
		_setActiveToolbars: function () {
			var self = this,
				o = this.options;

			$.each(o, function (name, value) {
				if (self._toolbarsActiveState[name]) {
					self._toolbarsActiveState[name].value = value;
					o[name] = value;
				}
			});
		},
		_initToolabrs: function () {
			var o = this.options,
				toolbar,
				item,
				itemDescriptor,
				i,
				j,
				toolbarName,
				showToolbar,
				property;
			this._wrappedToolbars = [];
			this._tbHash = {};
			for (i = 0; i < this._allToolbars.length; i++) {
				toolbar = this._allToolbars[i];

				this._tbHash[toolbar.name] = {"toolbarOpts": toolbar};
				this._tbHash[toolbar.name].expanded = false;
				this._wrappedToolbars[i] = toolbar;

				for (j = 0; j < toolbar.items.length; j++) {
					item = toolbar.items[j];
					if (!item.type) {
						item.type = "custom";
					}

					itemDescriptor = this._wrappedToolbars[i].items[j] = this._getToolbarItemDescriptor(item);

					for (property in itemDescriptor.getProperties()) {
						if (itemDescriptor.getProperties().hasOwnProperty(property)) {
							if (this._tbHash[toolbar.name] === undefined) {
								this._tbHash[toolbar.name] = {};
							}
							this._tbHash[toolbar.name][property] = itemDescriptor;
						}
					}
				}
				showToolbar = $.camelCase("show-" + toolbar.name);
				this._toolbarsActiveState[showToolbar] = {name: toolbar.name, value: true};
			}
			for (i = 0; i < o.toolbarSettings.length; i++) {
				toolbar = o.toolbarSettings[i];
				for (property in toolbar) {
					if (toolbar.hasOwnProperty(property)) {
						toolbarName = toolbar.name;
						if (this._tbHash[toolbarName].toolbarOpts[property] !== undefined && property !== "name") {
							this._tbHash[toolbarName].toolbarOpts[property] = toolbar[property];
							continue;
						}
						if (this._tbHash[toolbarName][property] === undefined || this._tbHash[toolbarName] === undefined) {
							continue;
						}

						this._tbHash[toolbarName][property].getProperty(property).value = toolbar[property];
					}
				}
			}
		},
		_getToolbarItemDescriptor: function (item) {
			return new this._toolbarItemsDescriptors[item.type](item);
		},
		_createToolbars: function () {
			var i,
				toolbar;

			this._toolbars = this.element.find("#" + this._id('_toolbars'));

			for (i = 0; i < this._wrappedToolbars.length; i++) {
				toolbar = $('<span id="' + this._id('_toolbars') + '_' + this._wrappedToolbars[i].name + '"></span>')
					.appendTo(this._toolbars)
					.igToolbar(this._wrappedToolbars[i]);
				if (!this._isToolbarActive(this._wrappedToolbars[i].name)) {
					toolbar.hide();
				}
			}
		},
		_initialWorkspaceFormatting: function () {
			var o = this.options, i, toolbar, property,
				commands = {
					isBold: "bold",
					isItalic: "italic",
					isUnderline: "underline",
					isStrikethrough: "strikethrough"
				};

			for (i = 0; i < o.toolbarSettings.length; i++) {
				toolbar = o.toolbarSettings[i];
				for (property in toolbar) {
					if (toolbar.hasOwnProperty(property) && commands.hasOwnProperty(property)) {
						this._execCommand(commands[property]);
					}
				}
			}
		},
		_isToolbarActive: function (tbName) {
			var key;
			for (key in this._toolbarsActiveState ) {
				if (this._toolbarsActiveState.hasOwnProperty(key)) {
					if (this._toolbarsActiveState[key].name === tbName) {
						return this._toolbarsActiveState[key].value;
					}
				}
			}
		},
		_execCommand: function (name, args) {
			this._selectionWrapperSaved.focus();
			this._selectionWrapperSaved.execCommand(name.toLowerCase(), args);
			this._onSelectionChange();
		},
		_bindToToolbarEvents: function () {
			var self = this,
				events = "igtoolbartoolbarbuttonclick igtoolbartoolbarcomboselected igtoolbartoolbarcustomitemclick igtoolbarcollapsing igtoolbarcollapsed igtoolbarexpanding igtoolbarexpanded",
				toolbarEvents = {
					igtoolbarcollapsing: this.events.toolbarCollapsing,
					igtoolbarcollapsed: this.events.toolbarCollapsed,
					igtoolbarexpanding: this.events.toolbarExpanding,
					igtoolbarexpanded: this.events.toolbarExpanded
				};

			this._toolbars
				.delegate(":ui-igToolbar", events, function _onToolbarItemClick(e, ui) {
					var scope = ui.scope,
						handler = ui.handler,
						noCancel;
					delete ui.scope;
					delete ui.handler;

					if (toolbarEvents.hasOwnProperty(e.type)) {
						self._trigger(toolbarEvents[e.type], e, ui);
						return;
					}

					ui.selectedItem = self._selectionWrapperSaved && self._selectionWrapperSaved.getSelectedItem();
					noCancel = self._trigger(self.events.actionExecuting, e, {
						owner: self,
						toolbar: ui.toolbarName,
						actionName: ui.name
					});
					if (noCancel) {
						if (!handler && !scope) {
							self._execCommand(ui.name, ui.value);
						} else if (handler && !scope) {
							self[handler](self.workspace.contentWindow.document, ui);
						} else if (handler && scope) {
							handler.call(ui.scope, self.workspace.contentWindow.document, ui);
						}
						self._trigger(self.events.actionExecuted, e, {
							// K.D. July 17th, 2012 Bug #113736 ui.owner needs to be the HTML editor itself
							owner: self,
							toolbar: ui.toolbarName,
							actionName: ui.name
						});
						e.stopImmediatePropagation();
					}
				});
			$(this.element)
				.delegate(".ui-ightmleditor-dialog-container", "iglinkpropertiesdialogshow igtablepropertiesdialogshow igimagepropertiesdialogshow", function (e) {
					$(".ui-ightmleditor-dialog-container").not(e.currentTarget)
						.filter(":ui-igLinkPropertiesDialog").igLinkPropertiesDialog("hide").end()
						.filter(":ui-igTablePropertiesDialog").igTablePropertiesDialog("hide").end()
						.filter(":ui-igImagePropertiesDialog").igImagePropertiesDialog("hide").end();
				});
		},
		_bindWorkspaceEvents: function () {
			var self = this,
				workSpaceBody = $(this.workspace).contents().find('body'),
				KEYS = {
					webKitIE: {
						CTRLZ: 122,
						CTRLY: 121
					},
					moz: {
						CTRLZ: 26,
						CTRLY: 25
					}
				};

			$(this.workspace.contentWindow.document).find("html").live("click", function (e) {
				var target = $(e.target);

				if (target.is("html")) {
					// self._selectionWrapperSaved.focus();
					self.workspace.contentWindow.document.body.focus();
				}
				self.sourceWindow.val(workSpaceBody.html());
				self._isDirty = true;
				self.element.find(":ui-igSplitButton").igSplitButton("collapse");
				self.element.find(":ui-igColorPickerSplitButton").igColorPickerSplitButton("collapse");
				self.element.find(":ui-igLinkPropertiesDialog").igLinkPropertiesDialog("hide");
				self.element.find(":ui-igTablePropertiesDialog").igTablePropertiesDialog("hide");
				self.element.find(":ui-igImagePropertiesDialog").igImagePropertiesDialog("hide");
				e.stopPropagation();
			}).live("mouseup", function (e) {
					self._onSelectionChange();
				});
			// K.D. July 17th, 2012 Bug #112076 Need to bind on keydown not keypress in order for it to work in IE/Webkit
			$(this.workspace.contentWindow.document).bind("keydown", function (e) {
				self.sourceWindow.val(workSpaceBody.html());
				self._isDirty = true;

				if (e.ctrlKey && (e.which === KEYS.webKitIE.CTRLZ || e.which === KEYS.moz.CTRLZ)) {
					self._trigger(self.events.undo, e, {owner: self});
				}

				if (e.ctrlKey && (e.which === KEYS.webKitIE.CTRLY || e.which === KEYS.moz.CTRLY)) {
					self._trigger(self.events.redo, e, {owner: self});
				}
				self._onSelectionChange();
			});

			$(this.workspace.contentWindow.document).bind("cut copy paste", function (e) {
				self._trigger(e.type, e, {owner: self});
			});
			this.element.bind("ightmleditoractionexecuted", function (e, ui) {
				if (ui.actionName.toLowerCase() === self.events.undo || ui.actionName.toLowerCase() === self.events.redo) {
					self._trigger(ui.actionName.toLowerCase(), e, {owner: self});
					e.stopImmediatePropagation();
				}
			});
		},
		_viewSource: function () {
			var workspace = $(this.workspace),
				workSpaceBody = workspace.contents().find('body');

			if (workspace.is(':visible')) {
				workSpaceBody.attr("contentEditable", false);
				this.sourceWindow.val(workSpaceBody.html());
				workspace.hide();
				this.sourceWindow.show();
			} else {
				workSpaceBody.attr("contentEditable", true);
				workSpaceBody.empty().append($(this.sourceWindow.val()));
				workspace.show();
				this.sourceWindow.hide();
			}
		},
		_viewSourcePlg: function (ui) {
			this._viewSource();
		},
		_insertImageDialogPlg: function (workspace, plgUI) {
			var image = $("<img>", this.workspace.contentWindow.document),
				self = this;

			if (plgUI.selectedItem.is("img")) {
				image = plgUI.selectedItem;
			}
			this._imageDialog = $("#" + this._id('_imageDialog'));

			if (!this._imageDialog.length) {
				this._imageDialog = $('<div id="' + this._id('_imageDialog') + '"></div>') //????
					.appendTo(this.element)
					.igImagePropertiesDialog({
						item: image,
						target: plgUI.toolbarItem,
						applyform: function (e, ui) {
							self._selectionWrapperSaved.focus();
							self._selectionWrapperSaved.replaceNode(ui.image);
						}
					});
			} else {
				if (this._imageDialog.igImagePropertiesDialog("option", 'isHidden')) {
					this._imageDialog.igImagePropertiesDialog("show", image);
				} else {
					this._imageDialog.igImagePropertiesDialog("hide", image);
				}
			}
		},
		_insertLinkPlg : function (workspace, ui) {
			var selectionWrapper = this._selectionWrapperSaved,
				selectedItem = selectionWrapper.getSelectedItem(),
				selectedItemNodeType = selectedItem[0].nodeType,
				anchor = $("<a></a>", this.workspace.contentWindow.document);

			if (selectedItem.parent().is("a")) {
				anchor = selectedItem.parent();
			} else if ((selectedItemNodeType === this.NODE._Text) || (selectedItemNodeType === this.NODE._Element)) {
				anchor.html(selectionWrapper.getSelectionAsText());
			}

			if (!this._insertLinkDialog) {
				this._insertLinkDialog = $('<div id="' + this._id('_linkDialog') + '"></div>')
					.appendTo(this.element)
					.igLinkPropertiesDialog({
						item: anchor,
						target: ui.toolbarItem,
						applyform: function (e, ui) {
							selectionWrapper.focus();
							selectionWrapper.replaceNode(ui.anchor);
						}
					});
			} else {
				if (this._insertLinkDialog.igLinkPropertiesDialog("option", 'isHidden')) {
					this._insertLinkDialog.igLinkPropertiesDialog("show", anchor);
				} else {
					this._insertLinkDialog.igLinkPropertiesDialog("hide", anchor);
				}
			}
		},
		_increaseFontSize: function () {
			this._selectionWrapperSaved.focus();
			this._execCommand("increasefontsize");
			this._onSelectionChange();
		},
		_decreaseFontSize: function () {
			this._selectionWrapperSaved.focus();
			this._execCommand("decreasefontsize");
			this._onSelectionChange();
		},
		_fontNamePlg: function (workspace, ui) {
			this._execCommand("fontname", ui.value);
		},
		_fontSizePlg: function (workspace, ui) {
			this._execCommand("fontsize", ui.value);
		},
		_formatsListPlg: function (workspace, ui) {
			this._execCommand("formatBlock", "<" + ui.value + ">");
		},
		_insertTablePlg: function (workspace, plgUI) {
			var table = $("<table></table>", this.workspace.contentWindow.document),
				self = this;
			if (plgUI.selectedItem.is("table")) {
				table = plgUI.selectedItem;
			}
			if (!this.insertTableDialog) {
				this.insertTableDialog = $("<div id='" + this._id('_tableDialog') + "'</div>")
					.appendTo(this.element)
					.igTablePropertiesDialog({
						item: table,
						target: plgUI.toolbarItem,
						applyform: function (e, ui) {
							self._selectionWrapperSaved.insertTable(ui.table);
						}
					});
				return;
			}
			if (this.insertTableDialog.igTablePropertiesDialog("option", "isHidden")) {
				this.insertTableDialog.igTablePropertiesDialog("show", table);
				return;
			}
			if (!this.insertTableDialog.igTablePropertiesDialog("option", "isHidden")) {
				this.insertTableDialog.igTablePropertiesDialog("hide");
			}
		},
		_addTableRowPlg: function () {
			var selectedItem = this._selectionWrapperSaved.getSelectedItem();
			if (selectedItem.is("table")) {
				selectedItem.tableManipulator("addRow");
			} else if (selectedItem.is("td")) {
				selectedItem.parents("table").tableManipulator("addRow", selectedItem.parent().index());
			}
		},
		_removeTableRowPlg: function () {
			var selectedItem = this._selectionWrapperSaved.getSelectedItem();
			if (selectedItem.is("table")) {
				selectedItem.tableManipulator("removeRow");
			} else if (selectedItem.is("td")) {
				selectedItem.parents("table").tableManipulator("removeRow", selectedItem.parent().index());
			}
		},
		_addTableColumnPlg: function () {
			var selectedItem = this._selectionWrapperSaved.getSelectedItem();
			if (selectedItem.is("table")) {
				selectedItem.tableManipulator("addColumn");
			} else if (selectedItem.is("td")) {
				selectedItem.parents("table").tableManipulator("addColumn", selectedItem.index());
			}
		},
		_removeTableColumnPlg: function () {
			var selectedItem = this._selectionWrapperSaved.getSelectedItem();
			if (selectedItem.is("table")) {
				selectedItem.tableManipulator("removeColumn");
			} else if (selectedItem.is("td")) {
				selectedItem.parents("table").tableManipulator("removeColumn", selectedItem.index());
			}
		},
		_fontColorPlg: function (workspace, ui) {
			this._execCommand("forecolor", ui.value);
		},
		_fontBackgroundColorPlg: function (workspace, ui) {
			var command = this._getFirefoxVersion() ? "hilitecolor" : "backcolor";
			this._execCommand(command, ui.value);
		},
		_domPathToolbar: function () {
			var self = this;
			this._viewSourceBtn = $('<div class="ui-igbutton-viewsource"></div>').appendTo(this.element)
				.igButton({
					labelText: '&nbsp;',
					title: $.ig.HtmlEditor.locale.viewSourceButtonTitle,
					icons: {
						primary: "ui-igbutton-viewsource-icon"
					},
					onlyIcons: true,
					click: function () {
						self._viewSourcePlg();
						if (self._domPathToolbar.igPathFinder("option", "disabled")) {
							self._domPathToolbar.igPathFinder("option", "disabled", false);
							self._toolbars.find(":ui-igToolbarButton").igToolbarButton("option", "disabled", false).end()
								.find(":ui-igCombo").igCombo("enable").end();
							// K.D. July 17th, 2012 Bug #113713 In Chrome Cut/Copy/Paste buttons are enabled after switching between design view and source view
							self._analyser._disableUnsupportedItems();
						} else {
							self._domPathToolbar.igPathFinder("option", "disabled", true);
							self._toolbars.find(":ui-igToolbarButton").igToolbarButton("option", "disabled", true).end()
								.find(":ui-igCombo").igCombo("disable").end();
						}
					}
				});
			this._domPathToolbar = $('<div id="' + this._id('_domPathToolbar') + '" style="display: inline-block"></div>')
				.appendTo(this.element)
				.igPathFinder({
					click: function (e, ui) {
						var selectionWrapper = self._selectionWrapperSaved;
						self.workspace.contentWindow.document.body.focus();
						if (self._domPathToolbar.igPathFinder("option", "disabled")) {
							return;
						}
						e.preventDefault();
						if (ui.item.is("html")) {
							selectionWrapper.select(ui.item.children("body"));
						} else if (ui.item.is("body")) {
							selectionWrapper.select(ui.item);
						} else {
							selectionWrapper.select(ui.item);
						}
					}
				});
		},
		_cutPlg: function () {
			this._execCommand("cut");
		},
		_copyPlg: function () {
			this._execCommand("copy");
		},
		_pastePlg: function () {
			this._execCommand("paste");
		},
		_onSelectionChange: function (callback) {
			var self = this,
				selectionWrapper,
				selectionCallback = callback || function () {
					var selectedItem = this.getSelectedItem();
					// K.D. September 12th, 2012 Bug #120891 We need to return the span/font from the selection
					// wrapper in order to correctly analyze the styles
					if (selectedItem && (selectedItem.is('p') || selectedItem.is(':header')) && selectedItem.children('span').length > 0) {
						selectedItem = selectedItem.children('span').first();
					} else if (selectedItem && (selectedItem.is('p') || selectedItem.is(':header')) && selectedItem.children('font').length > 0) {
						selectedItem = selectedItem.children('font').first();
					}
					if (selectedItem[0].nodeType === self.NODE._Text) {
						selectedItem = selectedItem.parent();
					}

					self._analyser.analyse(selectedItem);

					if (selectedItem.length) {
						self._domPathToolbar.igPathFinder("option", "items", $.merge(selectedItem, selectedItem.parents()));
					}

				};
			selectionWrapper = new $.ig.SelectionWrapper(this.workspace.contentWindow, function () {
				self._selectionWrapperSaved = this;
				selectionCallback.call(this);
			});
		},
		getContent: function (format) {
			/*
				Gets the content of the html editor.
				paramType="text|html" optional="false" Returns the content as html or plain text.
				text type="string"
				html type="string"
				returnType="string" The editor content.
			*/
			if (format === "text") {
				return $(this.workspace).contents().find('body').text();
			}
			if (format === "html") {
				return $(this.workspace).contents().find('body').html();
			}
		},
		setContent: function (content, format) {
		/* 
			Sets the content of the html editor.
			paramType="string" optional="false" The content which will be set.
			paramType="text|html". The content type.
			text type="string"
			html type="string"
		*/
			if (format === "text") {
				$(this.workspace).contents().find('body').text(content);
			} else if (format === "html") {
				$(this.workspace).contents().find('body').html(content);
			}
			// K.D. October 2nd, 2012 Bug #123366 Encoding the content before setting the value
			this.sourceWindow.val(encodeURI(content));
		},
		destroy: function () {
		/* Destroys the widget. */
			$.Widget.prototype.destroy.apply(this, arguments);
			$(this.workspace.contentWindow).undelegate();
			this.element.removeClass(this.css.htmlEditor)
				.find("#" + this._id("_content")).removeClass(this.css.htmlEditorContent).end()
				.find("#" + this._id("_domPathToolbar")).removeClass(this.css.pathFinder).end()
				.find("#" + this._id("_toolbars")).removeClass(this.css.toolbarsContainer).end()
				.find(":ui-igToolbar").igToolbar("destroy").end()
				.empty();
			this._viewSourceBtn.igButton("destroy");
		},
		executeAction: function (actionName, args) {
		/*
			Executes htmleditor commands.
			paramType="string" optional="false" The command name.
			paramType="object" optional="true" Additional paramaterd for the command.
		*/
			this._selectionWrapperSaved.focus();
			this._selectionWrapperSaved.select();
			this._selectionWrapperSaved.execCommand(actionName.toLowerCase(), args);
			this._onSelectionChange();
		},
		isDirty: function () {
		/*
			Returns true/false if the editor contents were modified or not.
			returnType="boolean"
		*/
			return this._isDirty;
		}
	});

	$.widget("ui.igPathFinder", {
		options: {
			items: null
		},
		css: {
			button: "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-igbutton ui-widget-content",
			buttonLabel: "ui-button-text"
		},
		_create: function () {
			this._addStyles();
		},
		_addStyles: function () {
			this.element.addClass('ui-igPathFinder');
		},
		_setOption: function (name, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
			switch (name) {
			case "items":
				this._updateToolbar();
				break;
			case "disabled":
				// K.D. July 13th, 2012 Bug #114609 The buttons in the path finder submit the page if the path finder is disabled
				this.element.find('button').attr('disabled', value).attr('aria-disabled', value);
				break;
			default:
				break;
			}
		},
		_updateToolbar: function () {
			var self = this,
				o = this.options,
				path = [],
				parents,
				html = '',
				buttonsList;

			if (o.items.length) {
				o.items.each(function (index, element) {
					html = '<button aria-disabled="false" role="button" class="' + self.css.button + '">'
						+ '	<span class="' + self.css.buttonLabel + '">'
						+ element.nodeName
						+ '	</span>'
						+ '</button>';
					path.push(html);
				});

				parents = $(o.items.toArray().reverse());

				buttonsList = $(path.reverse().join('<span> &gt; </span>'))
					.appendTo(this.element.empty())
					.filter("button")
					.attr('disabled', o.disabled)
					.attr('aria-disabled', o.disabled);
				buttonsList
					.mouseover(function (e) {
						if (!o.disabled) {
							$(this).addClass("ui-state-hover");
						}
					})
					.mouseleave(function (e) {
						if (!o.disabled) {
							$(this).removeClass("ui-state-hover");
						}
					})
					.click(function (e) {
						if (!o.disabled) {
							$(this).siblings(".ui-state-active").removeClass('ui-state-active');
							$(this).addClass("ui-state-active");

							self._trigger("click", e, {item: parents.eq(buttonsList.index(this))});
						}
					});
			}
		}
	});
	$.widget("ui.igHtmlEditorPopover", {
		options: {
			item: null,
			target: null,
			isHidden: true
		},
		css: {
			igHtmlEditorPropertiesDialog: "ui-ightmleditor-dialog",
			igHtmlEditorPropertiesDialogContainer: "ui-ightmleditor-dialog-container"
		},
		events: {
			apply: "applyform",
			cancel: "cancelform",
			show: "show",
			hide: "hide"
		},
		_id: function (id) {
			return this.element[0].id + id;
		},
		_create: function () {
			this.element.igPopover({
				closeOnBlur: false,
				position: "balanced",
				direction: "bottom",
				renderCloseButton: false,
				target: this.options.target
			});
			this.poContent = this.element.igPopover("container");
			this._createForm();
		},
		_init: function () {
			var o = this.options;
			this._item = o.item;
			this.poContent.addClass(this.css.igHtmlEditorPropertiesDialog);
			this.element.addClass(this.css.igHtmlEditorPropertiesDialogContainer);

			this._attachFormEvents();
			this.show(this._item);
		},
		_setOption: function (name, val) {
			var o = this.options;
			$.Widget.prototype._setOption.apply(this, arguments);
			switch (name) {
			case 'isHidden':
				this.element.igDialog('option', 'visible', o.isHidden);
				break;
			}
		},
		_createForm: function () {},
		_attachFormEvents: function () {},
		_dataBind: function (item) {},
		show: function (item) {
			this._item = item;
			this._dataBind(item);
			this.options.isHidden = false;
			$('#' + this._id().split('_')[0]).find(":ui-igSplitButton").igSplitButton("collapse");
			$('#' + this._id().split('_')[0]).find(":ui-igColorPickerSplitButton").igColorPickerSplitButton("collapse");
			this.element.igPopover("show");
			this._trigger(this.events.show);
		},
		hide: function () {
			this.options.isHidden = true;
			if (this.options.target.igToolbarButton('option', 'isSelected')) {
				this.options.target.igToolbarButton("toggle");
			}
			this.element.igPopover("hide");
			this._trigger(this.events.hide);
		}
	});
	$.widget("ui.igLinkPropertiesDialog", $.ui.igHtmlEditorPopover, {
		_txtUrl: "",
		_cbTarget: "",
		_attachFormEvents: function () {
			var self = this;

			this.poContent.find("#" + this._id('_cmbOpenIn')).igCombo({
				selectedItems: [{index: 0}],
				enableClearButton: false,
				width: 155
			});
			this.poContent.find("#" + this._id('_btnCancel')).igButton({
				click: function () {
					self.hide();
				}
			});
			this.poContent.find("#" + this._id('_btnApply')).igButton({
				click: function (e) {
					e.stopImmediatePropagation();
					// K.D. September 13th, 2012 Bug #120906 Applying the href as text if no text is specified.
					self._item.attr({
						href: self._txtUrl.val(),
						target: self._cbTarget.val()
					}).html(self._displayText.val().length > 0 ? self._displayText.val() : self._txtUrl.val());
					self._trigger("applyform", e, {anchor: self._item});
					self.hide();
				}
			});
			this.poContent.bind("keypress", function (e) {
				if (e.keyCode === $.ui.keyCode.ESCAPE) {
					self.hide();
				}
			});
			this.element.bind("igpopoverpopovershown", function (e) {
				self.poContent.find("#" + self._id('_linkHref')).focus();
			});
		},
		_createForm: function () {
			var html;

			html += '<div class="' + this.css.igLinkPropertiesDialogContent + '">';
			html += '	<div>';
			html += '		<ol class="layoutList">';
			html += '			<li>';
			html += '				<label for="' + this._id('_linkHref') + '">' + $.ig.HtmlEditor.locale.linkNavigateToUrlDialogText + '</label>';
			html += '				<input autocomplete="off" id="' + this._id('_linkHref') + '" name="href" type="text" value="" />';
			html += '			</li>';
			html += '			<li>';
			html += '				<label for="' + this._id('_linkDisplayText') + '">' + $.ig.HtmlEditor.locale.linkDisplayTextDialogText + '</label>';
			html += '				<input autocomplete="off" id="' + this._id('_linkDisplayText') + '" name="href" type="text" value="" />';
			html += '			</li>';
			html += '			<li>';
			html += '				<label for="' + this._id('_cmbOpenIn') + '">' + $.ig.HtmlEditor.locale.linkOpenInDialogText + '</label>';
			html += '				<select id="' + this._id('_cmbOpenIn') + '" name="target">';
			html += '					<option value="_blank">' + $.ig.HtmlEditor.locale.linkTargetNewWindowDialogText + '</option>';
			html += '					<option value="_self">' + $.ig.HtmlEditor.locale.linkTargetSameWindowDialogText + '</option>';
			html += '					<option value="_parent">' + $.ig.HtmlEditor.locale.linkTargetParentWindowDialogText + '</option>';
			html += '					<option value="_top">' + $.ig.HtmlEditor.locale.linkTargetTopmostWindowDialogText + '</option>';
			html += '				</select>';
			html += '			</li>';
			html += '			<li style="text-align:right">';
			html += '				<button aria-disabled="false" id="' + this._id('_btnApply') + '" name="insertLink" role="button" title="' +  $.ig.HtmlEditor.locale.applyButtonTitle + '" type="button">' +  $.ig.HtmlEditor.locale.applyButtonTitle + '</button>';
			html += '				<button aria-disabled="false" id="' + this._id('_btnCancel') + '" role="button" title="' +  $.ig.HtmlEditor.locale.cancelButtonTitle + '" type="button">' +  $.ig.HtmlEditor.locale.cancelButtonTitle + '</button>';
			html += '			</li>';
			html += '		</ol>';
			html += '	</div>';
			html += '</div>';

			$(html).appendTo(this.poContent);
		},
		_dataBind: function (anchor) {
			this._txtUrl = this.poContent.find("#" + this._id('_linkHref')).val(anchor.attr("href"));
			this._cbTarget = this.poContent.find("#" + this._id('_cmbOpenIn')).val(anchor.attr("target"));
			this._displayText = this.poContent.find("#" + this._id('_linkDisplayText')).val(anchor.html());
		}
	});
	$.widget("ui.igTablePropertiesDialog", $.ui.igHtmlEditorPopover, {
		_init: function () {
			this.rowsNumField = this.element.find('#' + this._id('_tableRows'));
			this.columnsNumField = this.element.find('#' + this._id('_tableColumns'));
			this.widthNumField = this.element.find('#' + this._id('_tableWidth')); //???
			this.heightNumField = this.element.find('#' + this._id('_tableHeight')); //???

			$.ui.igHtmlEditorPopover.prototype._init.apply(this, arguments);
		},
		_createForm: function () {
			var html = '<div>'
				+ '<div>'
				+ '<ol class="layoutList">'
				+ '<li>'
				+ '</li>'
				+ '<li>'
				+ '<div class="ui-igtablepropertiesdialog-cols-rows-num">'
				+ '<input type="hidden" id="' + this._id('_tableRows') + '" name="tableRows" readonly="readonly" value="">'
				+ '<input type="hidden" id="' + this._id('_tableColumns') + '" name="tableColumns" readonly="readonly" value="">'
				+ '</div>'
				+ '</li>'
				+ '</ol>'
				+ '</div>'
				+ '</div>';
			$(html).appendTo(this.poContent);
			this._sampleTable = $('<table "' + this._id('_tableModel') + '" class="ui-igtablepropertiesdialog-sample-table"></table>')
				.tableManipulator({rows: 8, columns: 6})
				.appendTo(this.poContent.find(".layoutList li:first"));
		},
		_attachFormEvents: function () {
			var tablePreview = this.poContent.find("table"),
				cells = tablePreview.find("td").addClass("ui-state-default"),
				rows = tablePreview.find("tr"),
				self = this;

			tablePreview.delegate("td", "mouseover click", function (e) {
				var target = $(e.target),
					currentRowNumber = target.parent().index() + 1,
					currentColumnNumber = $(this).index() + 1,
					i;

				if (e.type === 'mouseover') {
					cells.removeClass("ui-state-hover");

					for (i = 0; i < currentRowNumber; i++) {
						$(rows.get(i)).find("td:lt(" + (currentColumnNumber) + ")").addClass("ui-state-hover");
					}

					self.rowsNumField.val(currentRowNumber);
					self.columnsNumField.val(currentColumnNumber);
				}

				if (e.type === 'click') {
					self._item.tableManipulator({rows: currentRowNumber, columns: currentColumnNumber, addSpacingChar: true});
					self._trigger("applyform", e, {table: self._item.attr("border", 1)});
					self.hide();
				}
			});
			tablePreview.bind('mouseout', function () {
				cells.removeClass("ui-state-hover");
				self.rowsNumField.val(null);
				self.columnsNumField.val(null);
			});
		},
		_dataBind: function (table) {
			this.rowsNumField.val();
			this.columnsNumField.val();
			this.widthNumField.val();
			this.heightNumField.val();
		}
	});
	$.widget("ui.igImagePropertiesDialog", $.ui.igHtmlEditorPopover, {
		_init: function () {
			this._imgSrcFld = this.poContent.find("#" + this._id('_imgSrc'));
			this._imgAltFld = this.poContent.find("#" + this._id('_imgAlt'));
			this._imgWidthFld = this.poContent.find("#" + this._id('_imgWidth')).igNumericEditor({minValue: 0, button: 'spin', maxDecimals: 0});
			this._imgHeightFld = this.poContent.find("#" + this._id('_imgHeight')).igNumericEditor({minValue: 0, button: 'spin', maxDecimals: 0});

			$.ui.igHtmlEditorPopover.prototype._init.apply(this, arguments);
		},
		_createForm: function () {
			var html = '';
			html += '<div class="' + this.css.igImagePropertiesDialogContent + '">';
			html += '	<div>';
			html += '		<ol class="layoutList">';
			html += '			<li>';
			html += '				<label for="' + this._id('_imgSrc') + '">' + $.ig.HtmlEditor.locale.imageUrlDialogText + '</label>';
			html += '				<input autocomplete="off" id="' + this._id('_imgSrc') + '" name="src" type="text" value="" />';
			html += '			</li>';
			html += '			<li>';
			html += '				<label for="' + this._id('_imgAlt') + '">' + $.ig.HtmlEditor.locale.imageAlternativeTextDialogText + '</label>';
			html += '				<input autocomplete="off" id="' + this._id('_imgAlt') + '" name="altText" type="text" value="" />';
			html += '			</li>';
			html += '			<li style="display:' + (this._item && this._item.width() ? 'block' : 'none') + ';">';
			html += '				<label for="' + this._id('_imgWidth') + '">' + $.ig.HtmlEditor.locale.imageWidthDialogText + '</label>';
			html += '				<input autocomplete="off" id="' + this._id('_imgWidth') + '" name="width" type="text" value="" />';
			html += '			</li>';
			html += '			<li style="display:' + (this._item && this._item.height() ? 'block' : 'none') + ';">';
			html += '				<label for="' + this._id('_imgHeight') + '">' + $.ig.HtmlEditor.locale.imageHeihgtDialogText + '</label>';
			html += '				<input autocomplete="off" id="' + this._id('_imgHeight') + '" name="height" type="text" value="" />';
			html += '			</li>';
			html += '			<li style="text-align:right">';
			html += '				<button aria-disabled="false" id="' + this._id('_btnApply') + '" name="insertLink" role="button" title="' + $.ig.HtmlEditor.locale.applyButtonTitle + '" type="button">' + $.ig.HtmlEditor.locale.applyButtonTitle + '</button>';
			html += '				<button aria-disabled="false" id="' + this._id('_btnCancel') + '" role="button" title="' + $.ig.HtmlEditor.locale.cancelButtonTitle + '" type="button">' + $.ig.HtmlEditor.locale.cancelButtonTitle + '</button>';
			html += '			</li>';
			html += '		</ol>';
			html += '	</div>';
			html += '</div>';

			this.poContent.append(html);
		},
		_attachFormEvents: function () {
			var self = this;

			this.poContent.find("#" + this._id('_btnApply')).igButton({
				click: function (e) {
					self._item.attr({
						src: self._imgSrcFld.val(),
						alt: self._imgAltFld.val()
						// width: (parseInt(self._imgWidthFld.val(), 10) === 0) ? null : self._imgWidthFld.val(),
						// height: (parseInt(self._imgHeightFld.val(), 10) === 0) ? null : self._imgHeightFld.val()
					});

					self._trigger(self.events.apply, e, {image: self._item});
					self.hide();
				}
			}).end()
				.find("#" + this._id('_btnCancel')).igButton({
					click: function (e) {
						self._trigger(self.events.cancel, e);
						self.hide();
					}
				}).end();
			// self._aspectRatio();
		},
		_dataBind: function (image) {
			this._imgSrcFld.val(image.attr("src"));
			this._imgAltFld.val(image.attr("alt"));
			if (image.width() === 0 || image.height() === 0) {
				return;
			}
			this._imgWidthFld.igNumericEditor("value", image.width());
			this._imgHeightFld.igNumericEditor("value", image.height());
			this.poContent.find(":hidden").show();
		},
		_aspectRatio: function () {
			var aspectRatioBtn = this.poContent.find('#' + this._id('_imgAspectRatio')),
				o = this.options;

			aspectRatioBtn.igButton({
				height: 13,
				width: 18,
				icons: {
					primary: 'ui-igbutton-unlink'
				},
				css: {
					buttonPrimaryIconClass: "ui-icon"
				},
				click: function (e, ui) {
					var thisEl = $(this),
						elIcon = "ui-igbutton-link",
						preserveAspRatio = true;

					if (thisEl.data("preserveAspRatio")) {
						elIcon = "ui-igbutton-unlink";
						preserveAspRatio = false;
					}

					thisEl.igButton("option", "icons", {primary: elIcon})
						.data("preserveAspRatio", preserveAspRatio);
				}
			});

			if (this._imgSrcFld.val()) {
				if (o.image.width() !== 0 && o.image.height() !== 0) {
					this._imgWidthFld.igNumericEditor("value", o.image.width())
						.bind("ignumericeditorspin", function (e, ui) {
							if (aspectRatioBtn.data("preserveAspRatio")) {
								//original height / original width x new width = new height
								this._imgHeightFld.val(Math.round((o.image.height() / o.image.width()) * ui.value + ui.delta));
							}
						});
					this._imgHeightFld.igNumericEditor("value", o.image.height())
						.bind("ignumericeditorspin", function (e, ui) {
							this._imgWidthFld.val(Math.round((o.image.width() / o.image.height()) * ui.value + ui.delta));
						});
				}
			} else {
				this._imgWidthFld.igNumericEditor("value", 0);
				this._imgHeightFld.igNumericEditor("value", 0);
			}
		}
	});

	//tableManipulator plugin
	var table,
		tableNumRows = 0,
		tableNumCols = 0,
		settings = {
			document: document,
			rows: 0,
			columns: 0,
			addSpacingChar: false
		},
		spacingChar = "",
		methods = {
			init: function (options) {
				// var self = this;

				return this.each(function () {
					$.extend(settings, options);

					if (this.nodeName.toLowerCase() !== "table") {
						return;
					}

					if (settings.addSpacingChar) {
						spacingChar = "&nbsp;";
					}

					table = $(this);

					if (settings.rows && settings.rows > 0) {
						tableNumRows = settings.rows;
					} else {
						tableNumRows = table.find("tr").length;
					}
					if (settings.columns && settings.columns > 0) {
						tableNumCols = settings.columns;
					} else if (table.find("tr")[0]) {
						tableNumCols = table.find("tr")[0].cells.length;
					}
					if (!table.children().length) {
						methods.create();
					}
				});
			},
			create: function () {
				var newRow,
					i,
					j;
				table.empty();
				for (i = 0; i < tableNumRows; i++) {
					newRow = $("<tr></tr>", settings.document).appendTo(table);
					for (j = 0; j < tableNumCols; j++) {
						$("<td>" + spacingChar + "</td>", settings.document).appendTo(newRow);
					}
				}
			},
			addRow: function (position) {
				var newRow = $("<tr></tr>", settings.document),
					j;
				if (position) {
					newRow.insertAfter(table.find("tr").eq(position));
				} else {
					newRow.appendTo(table);
				}

				for (j = 0; j < tableNumCols; j++) {
					$("<td>" + spacingChar + "</td>", settings.document).appendTo(newRow);
				}
				tableNumRows++;
				return newRow;
			},
			removeRow: function (position) {
				var rows = table.find("tr"),
					removedRow;
				if (position) {
					removedRow = rows.eq(position).remove();
				} else {
					removedRow = rows.last().remove();
				}
				tableNumRows--;
				return removedRow;
			},
			addColumn: function (position) {
				var columnCellsArr = [];

				table.find('tbody tr').each(function (idx, el) {
					var row = $(el),
						columns = row.find('td'),
						newColumn = $('<td>' + spacingChar + '</td>', settings.document);
					if (position && columns.length) {
						columnCellsArr.push(newColumn.insertAfter(columns.eq(position))[0]);
						return true;
					}
					columnCellsArr.push(newColumn.appendTo(row)[0]);
				});
				tableNumCols++;
				return $([]).pushStack(columnCellsArr);
			},
			removeColumn: function (position) {
				var removedRowsArr = [];

				table.find("tr").each(function (idx, el) {
					var row = $(el);
					if (position) {
						removedRowsArr.push(row.find("td").eq(position).remove());
						return true;
					}
					removedRowsArr.push(row.find("td:last").remove());
				});
				tableNumCols--;
				return $([]).pushStack(removedRowsArr);
			},
			getRowsNum: function () {
				return tableNumRows;
			},
			getColumnsNum: function () {
				return tableNumCols;
			}
		};
	$.fn.tableManipulator = function (method) {
		if (methods[method]) {
			if (this !== table[0]) {
				table = $(this);
			}
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}
		$.error('Method ' +  method + ' does not exist on jQuery.tableManipulator');
	};
	$.ig.SelectionWrapper = $.ig.SelectionWrapper || Class.extend({
		_selection: null,
		_range: null,
		_isIeOld: false,
		_document: null,
		_commands: {
			insertunorderedlist: {name: "_insertList", browsers: null, args: ["insertunorderedlist"]},
			insertorderedlist: {name: "_insertList", browsers: null, args: ["insertorderedlist"]},
			increasefontsize: {name: "increaseFontSize", browsers: ["msie", "safari"], args: []},
			decreasefontsize: {name: "decreaseFontSize", browsers: ["msie", "safari"], atgs: [true]}
		},
		NODE: new $.ig.XmlNodeType(),
		init: function (window, callback) {
			var self = this;
			this._window = window;
			this._document = this._window.document;

			if (!this._document.getSelection) {
				this._isIeOld = true;
			}
			if (this._isIeOld) {
				// K.D. July 18th, 2012 If we don't focus the selection with IE <= 8, then executing an action on the window
				// will incorrectly fire on the top-most parent window.
				this.focus();
				this._selection = this._document.selection;
				this._window.setTimeout(function () {
					self._range = self._selection.createRange();
					if ($.isFunction(callback)) {
						callback.call(self);
					}
				}, 50);
			} else {
				this._selection = this._window.getSelection();
				this._window.setTimeout(function () {
					self._range = (self._getSelection().rangeCount === 0) ? self._document.createRange() : self._selection.getRangeAt(0);
					if ($.isFunction(callback)) {
						callback.call(self);
					}
				}, 50);
			}
		},
		_getSelection: function () {
			return this._selection;
		},
		_getRange: function () {
			return this._range;
		},
		_isCommandSupportedByBrowser: function (command) {
			var supportedBrowsers, i;
			if (command === null || !this._commands.hasOwnProperty(command.toLowerCase())) {
				return;
			}
			if (this._commands[command].browsers === null) {
				return;
			}
			supportedBrowsers = this._commands[command].browsers;
			for (i = 0; i < supportedBrowsers.length; i++) {
				if ($.browser.hasOwnProperty(supportedBrowsers[i])) {
					return true;
				}
			}
		},
		surroundContents: function (wrapEl) {
			var range = this._getRange();
			if (this._isIeOld) {
				range.pasteHTML(wrapEl.html(range.text).get(0).outerHTML);
			} else {
				this._surroundContents($(range.commonAncestorContainer), $(range.startContainer), $(range.endContainer), wrapEl);
			}

			return wrapEl;
		},
		getSelectedItem: function () {
			var range = this._getRange(),
				rangeParent = $(range.commonAncestorContainer);

			if (!this._isIeOld) {
				if (range.collapsed && (range.endContainer.nodeType === this.NODE._Text)) {
					if (rangeParent.parent().is("img") || rangeParent.parent().is("td")) {
						return rangeParent.parent();
					}
					return $(range.startContainer);
				}
				if (range.collapsed) {
					return $(range.commonAncestorContainer);
				}
				if (range.collapsed && (range.endContainer.nodeType === this.NODE._Element)) {
					return $(range.commonAncestorContainer.childNodes[range.endOffset - range.startOffset]);
				}
				return $(range.commonAncestorContainer);
			}
			// K.D. July 18th, 2012 Bug #117375 Exception is thrown when trying to edit the content in Editing Content demo in IE7 or IE8
			if (range.parentElement !== undefined) {
				return $(range.parentElement());
			}
			if (range.commonParentElement !== undefined) {
				return $(range.commonParentElement());
			}
		},
		getSelectionAsText: function () {
			if (this._getRange().text !== undefined) {
				return this._getRange().text;
			}
			return this._getRange().toString();
		},
		select: function (element) {
			var selectedItem = element || this.getSelectedItem(),
				newRange;

			if (!this._isIeOld) {
				this._range.selectNodeContents(selectedItem[0]);
				this._selection.removeAllRanges();
				this._selection.addRange(this._range);
			} else {
				newRange = this._document.body.createTextRange();
				if (selectedItem.length === 1) {
					newRange.moveToElementText(selectedItem[0]);
				}
				newRange.select();
			}
		},
		insertElement: function (element) {
			if (!this._isIeOld) {
				this._getRange().insertNode(element.get(0));
			} else {
				this._getRange().pasteHTML(element.get(0).outerHTML);
			}
		},
		applyStyle: function () {

		},
		execCommand: function (name, args) {
			var range = this._getRange(),
				customCommand = this._commands[name] ? this[this._commands[name].name] : null,
				customCommandArgs = this._commands[name] ? this._commands[name].args : null,
				browser = this._commands[name] ? this._commands[name].browsers : null,
				startEl,
				endEl,
				p,
				isCommandSupported = this._isCommandSupportedByBrowser(name),
				shouldExit = false;

			if (this._isIeOld) {
				range.select();
				range.execCommand(name, false, args);
			} else {
				p = $('<p><br /></p>', this._document);

				if (this._selection.isCollapsed && range.collapsed) {
					if ($(range.startContainer).is("body")) {
						startEl = $(range.startContainer).find(":first");
						range.selectNodeContents(startEl[0]);
					} else if (range.startContainer.nodeType === this.NODE._Document) {
						startEl = $(range.startContainer.body).find(":first");
						range.selectNodeContents(startEl[0]);
					} else if (range.startContainer.nodeType === this.NODE._Text) {
						this._updateSelection(range);
						this._document.execCommand(name, false, args);
						shouldExit = true;
					} else {
						startEl = $(range.startContainer);
						range.selectNodeContents(startEl[0]);
					}
					if (shouldExit) {
						return;
					}

					if (startEl.is("br") && endEl.is("br")) {
						startEl.replaceWith(p);
						range.selectNodeContents(p[0]);
						this._updateSelection(range);
					}
				}
				if (($.browser.msie && $.browser.version === "9.0") || $.browser.opera) {
					this._updateSelection(range);
				}
				if ($.isFunction(customCommand) && browser === null) {
					customCommand.call(this, name, args);
				} else if ($.isFunction(customCommand) && isCommandSupported) {
					customCommand.apply(this, customCommandArgs);
				} else {
					this._document.execCommand(name, false, args);
				}
			}
		},
		_insertList: function (listType, args) {
			var self = this,
				textNodes;
			this._document.execCommand(listType, false, args);

			//queryCommandState returnes true if the command is executed on the object
			// and false if the command is not executed on the object.
			if (!this._document.queryCommandState(listType)) {
				if (this._selection.anchorNode && this._selection.anchorNode.nodeType === this.NODE._Text && $(this._selection.focusNode).is("body")) {
					textNodes = $(this._selection.focusNode).contents().filter(function () {
						if ($(this).is("br")) {
							$(this).remove();
							return false;
						}
						return this.nodeType === self.NODE._Text;
					});
					// K.D. July 16th, 2012 Bug #101208 Removing the code that initially creates a paragraph
					// wrappedEl = textNodes.wrap(p[0]);
					// this._range.selectNodeContents(wrappedEl[0]);
					// this._updateSelection(this._range);
				}
			}
			// K.D. July 16th, 2012 Bug #101208 Removing the code that initially creates a paragraph
			// if ($(this._selection.anchorNode).is("body")) { //Only in FF
				// wrappedEl = $(this._selection.anchorNode).children().eq(this._selection.anchorOffset).wrap(p[0]).parent();
				// this._range.selectNodeContents(wrappedEl[0]);
				// this._updateSelection(this._range);
			// }
		},
		_getTextNodesOnlyCallback: function () {
			return this.nodeType === this.NODE._Text;
		},
		increaseFontSize: function (toDecrease) {
			var newTextNode,
				rangeStartEl = this._range.startContainer,
				rangeEndEl = this._range.endContainer,
				rangeStartOffset = this._range.startOffset,
				rangeEndOffset = this._range.endOffset,
				big = $("<big></big>", this._document),
				small = $("<small></small>", this._document),
				unWrapEl = toDecrease ? small : big,
				unWrapOpositeType = toDecrease ? big[0].nodeName.toLowerCase() : small[0].nodeName.toLowerCase(),
				rangeStartElParent,
				rangeEndElParent,
				wrapInnerCallback = function (index) {
					var t = $(this);
					if (toDecrease && $(rangeStartEl).parent().is(unWrapOpositeType)) {
						t.unwrap();
						return true;
					}
					t.wrapInner(unWrapEl);
				};

			if (rangeStartEl === rangeEndEl && rangeStartEl.nodeType === this.NODE._Text) {
				if ($(rangeStartEl).parent().is(unWrapOpositeType)) {
					this._range.selectNodeContents($(rangeStartEl).unwrap()[0]);
					this._updateSelection(this._range);
					return;
				}
				newTextNode = this._wrapPartialString(rangeStartEl.data, rangeStartOffset, rangeEndOffset, unWrapEl);
				$(rangeStartEl).replaceWith(newTextNode);
				this._range.selectNodeContents(unWrapEl.contents(":first")[0]);
				this._updateSelection(this._range);
				return;
			}

			if (rangeStartEl.nodeType === this.NODE._Text && rangeEndEl.nodeType === this.NODE._Text) {
				rangeStartElParent = this._getLastParentUntil($(rangeStartEl), $(this._range.commonAncestorContainer));
				rangeEndElParent = this._getLastParentUntil($(rangeEndEl), $(this._range.commonAncestorContainer));
				$(rangeStartEl).wrap(unWrapEl);
				// K.D. September 14th, 2012 Bug #121013 IE9,Chrome: Increase/decrease font size on words with different font sizes makes the browser hang
				while (rangeStartElParent.next().length > 0 && rangeStartElParent.next()[0] !== rangeEndElParent[0]) {
					rangeStartElParent = rangeStartElParent.next().wrapInner(wrapInnerCallback);
				}
				$(rangeEndEl).wrap(unWrapEl);
				return;
			}
			// K.D. September 14th, 2012 Bug #121013 IE9,Chrome: Increase/decrease font size on words with different font sizes makes the browser hang
			if (rangeStartEl.nodeType === this.NODE._Element && rangeEndEl.nodeType === this.NODE._Element) {
				$(this._range.commonAncestorContainer).wrapInner(unWrapEl);
				return;
			}

			if (rangeStartOffset === rangeEndOffset && rangeStartEl.nodeType === this.NODE._Text) {
				newTextNode = this._wrapPartialString(rangeStartEl.data, 0, rangeStartEl.data.length, big);
				$(rangeStartEl).replaceWith(newTextNode);
				this._range.selectNodeContents(newTextNode.filter(big)[0]);
				this._updateSelection(this._range);
			}

		},
		decreaseFontSize: function () {
			this.increaseFontSize(true);
		},
		//Returns a text node.
		_wrapPartialString: function (string, start, end, wrapElName) {
			var stack = [];
			stack.push(this._document.createTextNode(string.slice(0, start)));
			stack.push(wrapElName.text(string.substring(start, end))[0]);
			stack.push(this._document.createTextNode(string.slice(end)));
			return $(stack);
		},
		_updateSelection: function (range) {
			this._selection.removeAllRanges();
			this._selection.addRange(range);
		},
		_surroundContents: function (commonParrent, startEl, endEl, wrapEl, wholeElement) {
			var self = this, startOffset, endOffset,
				rangeStart, rangeEnd, startElPar, endElPar,
				selection = this._getSelection(),
				range = this._getRange(),
				startElSiblings;

			if (startEl[0] === endEl[0]) {
				range.surroundContents(wrapEl.get(0));
				return wrapEl;
			}

			startOffset = range.startOffset;
			endOffset = range.endOffset;
			rangeStart = this._document.createRange();

			rangeStart.setStart(startEl.get(0), startOffset);
			rangeStart.setEnd(startEl.get(0), startEl.text().length);
			rangeStart.surroundContents(wrapEl.clone().get(0));
			selection.addRange(rangeStart);

			startElPar = this._getLastParentUntil(startEl, commonParrent);
			endElPar = this._getLastParentUntil(endEl, commonParrent);

			startElSiblings = startElPar.siblings();

			startElPar.siblings().each(function (i, el) {
				if (startElPar[0] === endElPar[0]) {
					return;
				}

				var rangeClone = self._document.createRange();
				rangeClone.setStartBefore(el);
				rangeClone.setEndAfter(el);
				rangeClone.surroundContents(wrapEl.clone().get(0));
				selection.addRange(rangeClone);
			});

			rangeEnd = this._document.createRange();
			rangeEnd.setStart(endEl.get(0), 0);
			rangeEnd.setEnd(endEl.get(0), endOffset);
			rangeEnd.surroundContents(wrapEl.clone().get(0));
			selection.addRange(rangeEnd);

		},
		_getLastParentUntil: function (root, target) {
			while (root.parent().length) {
				if (root.parent()[0] === target[0]) {
					return root;
				}
				root = root.parent();
			}
		},
		replaceNode: function (newNode) {
			var range = this._getRange();
			if (range.startOffset !== range.endOffset) {
				range.deleteContents();
			}
			if (range.insertNode !== undefined) {
				range.insertNode(newNode[0]);
			} else if (range.pasteHTML !== undefined) {
				range.pasteHTML(newNode[0].outerHTML);
			}
		},
		insertTable: function (table) {
			var selItem = this.getSelectedItem(),
				br = $('<br>', this._document);
			if (selItem[0].nodeType === this.NODE._Document) {
				this._range.selectNodeContents(selItem.find("body > p:first")[0]);
				this._range.insertNode(table[0]);
			} else if (selItem.is("td")) {
				table.appendTo(selItem);
			} else if (selItem.is("table")) {
				selItem.replaceWith(table);
			} else if (selItem.is("br")) {
				selItem.replaceWith(table);
			} else {
				// K.D. July 19th, 2012 Bug #117424 Exception is thrown when inserting a table in IE7 or IE8
				if (this._range.insertNode !== undefined) {
					this._range.insertNode(table[0]);
				} else if (this._range.pasteHTML !== undefined) {
					// This case is IE7/IE8
					this._range.select();
					this._range.pasteHTML(table[0].outerHTML);
				}
			}
			if (this._range.selectNodeContents !== undefined) {
				this._range.selectNodeContents(br.insertAfter(table)[0]);
			}
		},
		focus: function () {
			var focusTarget = $(this._document.body).find(":not(br):first");
			if (this._isIeOld) {
				this._document.body.focus();
				return;
			}
			if (this._range.startContainer.nodeType !== this.NODE._Document && !$(this._range.startContainer).is("body")) {
				return;
			}
			if (this._range.startContainer.nodeType === this.NODE._Text) {
				this._document.body.focus();
				return;
			}
			if (focusTarget.length === 0) {
				return;
			}
			this._range.setStart(focusTarget[0], 0);
			this._range.setEnd(focusTarget[0], 0);
			this._document.body.focus();
		}
	});

	$.extend($.ui.HtmlEditor, {version: '12.2.20122.1021'});
	/* Split button widget */
	$.widget("ui.igSplitButton", {
		options: {
			items: [
				{
					name: "",
					label: "",
					icon: ""
				}
			],
			defaultItemName: ""
		},
		_isExpanded: false,
		events: {
			click: "click",
			expand: "expand",
			expanding: "expanding",
			collapse: "collapse",
			collapsing: "collapsing"
		},
		css: {
			arrow: "ui-splitbutton-arrow",
			splitButtonConrnersLeft: "ui-corner-left",
			splitButtonConrnersRight: "ui-corner-right"
		},
		_id: function (id) {
			return this.element[0].id + id;
		},
		widget: function () {
			return this.element;
		},
		_create: function () {
			var o = this.options,
				defaultItem = this._getDefaultItem(o.defaultItemName),
				self = this;

			this.defaultButton = $('<div id="' + this._id("_" + o.defaultItemName) + '"></div>').appendTo(this.element)
				.igToolbarButton({
					"onlyIcons": true,
					"labelText": "&nbsp;",
					"title": defaultItem.label,
					"icons": {
						"primary": defaultItem.icon
					},
					name: o.defaultItemName
				})
				.addClass("ui-splitbutton-cleargaps")
				.removeClass("ui-corner-all")
				.addClass(this.css.splitButtonConrnersLeft);
			this.defaultButton.bind("igtoolbarbuttonclick", function (e) {
				e.stopPropagation();
				self._trigger(self.events.click, e, {name: $(this).igToolbarButton("option").name, item: self.element});
			});
			this._expandButton = $("<div id='" + this._id("_arrow") + "' class='" + this.css.arrow + "'></div>").igToolbarButton({
				"onlyIcons": true,
				"labelText": "&nbsp;",
				"icons": {
					"primary": "ui-icon-triangle-1-s"
				}
			})
				.addClass("ui-splitbutton-cleargaps")
				.removeClass("ui-corner-all")
				.addClass(this.css.splitButtonConrnersRight)
				.appendTo(this.element);

			this._createSplitButtonItemsList();
			// K.D. July 19th, 2012 Bug #113715 Removing the focus element and reworking the entire logic around it
			//this._focusEl = $('<input type="button" class="ui-splitbutton-hidden-input">').appendTo(this.element);
		},
		_hideButtonsList: function (buttonsList, e) {
			var isSelected = this._expandButton.igToolbarButton("option", "isSelected"),
				isVisible = buttonsList.is(":visible"),
				self = this;

			if (isVisible && isSelected) {
				buttonsList.effect("blind", {direction: 'vertical'}, 250, function () {
					self._expandButton.igToolbarButton("toggle");
					self._trigger(self.events.collapse, e);
				});
			}
		},
		_init: function () {
			this.element.addClass("ui-splitbutton ui-widget");
			this.element.attr("tabIndex", 0);

			this._attachEvents();
		},
		_attachEvents: function () {
			var self = this;

			this._expandButton.bind("igtoolbarbuttonclick", $.proxy(this._onShowHidePopover, this));

			this.element.bind(self.widgetEventPrefix.toLowerCase() + "expanding", $.proxy(this._onExpand, this));
			this.element.bind(self.widgetEventPrefix.toLowerCase() + "collapsing", $.proxy(this._onCollapse, this));

			this._splitButtonItemsList.delegate("a", "igtoolbarbuttonclick", $.proxy(this._onItemsListClick, this));

			//this._expandButton.children('span').first().bind("blur", $.proxy(this._onSplitButtonBlur, this));

			this.element.bind("keypress", $.proxy(this._onEnterKeypress, this));
		},
		_onExpand: function (e) {
			var self = this;
			this._splitButtonItemsList.effect("blind", {direction: 'vertical', mode: "show"}, 250, function () {
				self._isExpanded = true;
				self._trigger(self.events.expand, e);
				//Bug #105185. Pressing the igSplitVutton expanding button several times very fast will continue to expand and collapse for every click even if you stop pressing the button.
				// $(this).dequeue();
			});
		},
		_onCollapse: function (e) {
			var self = this;
			this._splitButtonItemsList.effect("blind", {direction: 'vertical', mode: "hide"}, 250, function () {
				self._isExpanded = false;
				self._trigger(self.events.collapse, e);
				//Bug #105185.
				// $(this).dequeue();
			});
		},
		_onShowHidePopover: function (e) {
			var self = this;
			if (e) {
				e.stopPropagation();
			}

			if (this._isExpanded) {
				this._shouldClose = true;
				setTimeout(function () {
					self._isExpanded = false;
					self._shouldClose = false;
					self._trigger("collapsing", e);
				}, 150);
			} else {
				// K.D. September 17th, 2012 Bug #120914 Collapse all expanded elements
				$('#' + this._id().split('_')[0]).find(":ui-igSplitButton").igSplitButton("collapse");
				$('#' + this._id().split('_')[0]).find(":ui-igColorPickerSplitButton").igColorPickerSplitButton("collapse");
				$('#' + this._id().split('_')[0]).find(":ui-igLinkPropertiesDialog").igLinkPropertiesDialog("hide");
				$('#' + this._id().split('_')[0]).find(":ui-igTablePropertiesDialog").igTablePropertiesDialog("hide");
				$('#' + this._id().split('_')[0]).find(":ui-igImagePropertiesDialog").igImagePropertiesDialog("hide");
				if (!this._shouldClose) {
					this._isExpanded = true;
					this._trigger("expanding", e);
				}
			}

		},
		_onItemsListClick: function (e, ui) {
			var targetButtonName = $(e.currentTarget).igToolbarButton("option", "name");

			this.switchToButton($(e.currentTarget));

			e.stopImmediatePropagation();

			if (ui && ui.onlySwithButtons) {
				this.defaultButton.igToolbarButton("toggle");
			} else {
				this._trigger(this.events.click, e, {name: targetButtonName});
			}
		},
		_onSplitButtonBlur: function (e) {
			var self = this;
			this._expandButton.removeClass("ui-state-focus");
			this.defaultButton.removeClass("ui-state-focus");
			if (this._isExpanded) {
				this._shouldClose = true;
				setTimeout(function () {
					self._isExpanded = false;
					self._shouldClose = false;
					self._trigger("collapsing", e);
				}, 150);
			}
		},
		_onEnterKeypress: function (e) {
			if (e.which === 13) {
				this._expandButton.trigger("igtoolbarbuttonclick");
			}
		},
		_getDefaultItem: function (name) {
			var o = this.options,
				i;
			for (i = 0; i < o.items.length; i++) {
				if (o.items[i].name === name) {
					return o.items[i];
				}
			}
		},
		_createSplitButtonItemsList: function () {
			var list = $("<ul class='ui-splitbutton-list ui-menu ui-widget ui-widget-content ui-corner-all'></ul>"),
				o = this.options,
				i,
				splBtnItm;

			for (i = 0; i < o.items.length; i++) {
				if (o.items[i].name === o.defaultItemName) {
					continue;
				}
				splBtnItm = $('<a id="' + this._id("_" + o.items[i].name) + '" class="ui-corner-all" tabindex="-1"></a>').igToolbarButton({
					onlyIcons: true,
					labelText: "",
					title: o.items[i].label,
					icons: {
						primary: o.items[i].icon
					},
					name: o.items[i].name
				})
					.addClass("ui-splitbutton-cleargaps");
				$('<li class="ui-menu-item" role="menuitem"></li>').appendTo(list).append(splBtnItm);
			}
			// this._splitButtonItemsList = list.appendTo("body");
			this._splitButtonItemsList = list.appendTo(this.element);
		},
		switchToButton: function (button) {
			var targetButton = (typeof button === "string") ? $("#" + this._id("_" + button)) : button,
				defBtnOpts = this.defaultButton.igToolbarButton("option"),
				defBtnId = this.defaultButton.attr("id"),
				targetBtnOpts = targetButton.igToolbarButton("option"),
				targetBtnId = targetButton.attr("id");

			delete defBtnOpts.click;
			targetButton.igToolbarButton("option", defBtnOpts).attr("id", defBtnId);
			this.defaultButton.igToolbarButton("option", targetBtnOpts);
			this.defaultButton.attr("id", targetBtnId);
			this.defaultButton.igToolbarButton("toggle");
		},
		collapse: function () {
			if (!this._isExpanded) {
				return;
			}
			this._expandButton.trigger("igtoolbarbuttonclick");
			this._expandButton.igToolbarButton('toggle');
		},
		expand: function () {
			if (this._isExpanded) {
				return;
			}
			this._expandButton.trigger("igtoolbarbuttonclick");
		},
		destroy: function () {
			$.Widget.prototype.destroy.apply(this, arguments);

			this.element.unbind();
			this._splitButtonItemsList.undelegate();
			this.element.find(":ui-igToolbarButton").igToolbarButton("destroy").end()
				.removeClass("ui-splitbutton ui-widget")
				.empty();
			delete this._expandButton;
			delete this._splitButtonItemsList;
		}
	});
	$.widget("ui.igColorPickerSplitButton", $.ui.igSplitButton, {
		options: {
			items: [],
			defaultColor: "#000"
		},
		_create: function () {
			$.ui.igSplitButton.prototype._create.call(this);
		},
		_init: function () {
			this.element.addClass("ui-splitbutton ui-widget");
			this._setButtonColorIndicator(this.options.defaultColor);
			this._attachEvents();
		},
		_createSplitButtonItemsList: function () {
			var popoverCont;
			this._popover = $('<div id="' + this._id("_popover") + '"></div>').appendTo(this.element)
				.igPopover({
					renderCloseButton: false,
					direction: "bottom",
					closeOnBlur: false,
					width: 220,
					defaultMaxWidth: null
				});
			popoverCont = this._popover.igPopover("container");
			this._splitButtonItemsList = popoverCont.igColorPicker();
		},
		_attachEvents: function () {
			$.ui.igSplitButton.prototype._attachEvents.call(this);
			this._splitButtonItemsList.bind("igcolorpickercolorselected", $.proxy(this._onColorSelect, this));
			this.defaultButton.bind("igtoolbarbuttonclick", $.proxy(this._onDefaultButtonClick, this));
			this.element.bind(this.widgetEventPrefix.toLowerCase() + "expanding", $.proxy(this._onExpand, this));
			this.element.bind(this.widgetEventPrefix.toLowerCase() + "collapsing", $.proxy(this._onCollapse, this));
		},
		_onExpand: function (e) {
			this._popover.igPopover("show", this.element);
		},
		_onCollapse: function (e) {
			this._popover.igPopover("hide");
		},
		_onItemsListClick: function (e) {
			return false;
		},
		_onColorSelect: function (e, ui) {
			this._expandButton.igToolbarButton("toggle");
			this._setButtonColorIndicator(ui.color);
			this.options.defaultColor = ui.color;
			this._trigger("colorSelected", e, {value: ui.color, item: this.element});
			this.collapse();
		},
		_onDefaultButtonClick: function (e, ui) {
			e.stopPropagation();
			this._trigger("colorSelected", e, {value: this.options.defaultColor, item: this.element});
		},
		_setButtonColorIndicator: function (color) {
			this.defaultButton.children(":first").css("border-bottom-color", color);
		},
		destroy: function () {
			$.ui.igSplitButton.prototype.destroy.apply(this, arguments);
		}
	});
	$.widget("ui.igColorPicker", {
		options: {
			colors: [
				["#ffffff", "#000000", "#EEECE1", "#1F497D", "#4F81BD", "#C0504D", "#9BBB59", "#8064A2", "#4BACC6", "#F79646"],
				["#F2F2F2", "#7F7F7F", "#DDD9C3", "#C6D9F0", "#DBE5F1", "#F2DCDB", "#EBF1DD", "#E5E0EC", "#DBEEF3", "#FDEADA"],
				["#D8D8D8", "#595959", "#C4BD97", "#8DB3E2", "#B8CCE4", "#E5B9B7", "#D7E3BC", "#CCC1D9", "#B7DDE8", "#FAC08F"],
				["#BFBFBF", "#3F3F3F", "#938953", "#548DD4", "#95B3D7", "#D99694", "#C3D69B", "#B2A1C7", "#92CDDC", "#FAC08F"],
				["#A5A5A5", "#262626", "#494429", "#17365D", "#366092", "#953734", "#76923C", "#5F497A", "#31859B", "#E36C09"],
				["7F7F7F#", "#0C0C0C", "#1D1B10", "#0F243E", "#244061", "#632423", "#4F6128", "#3F3151", "#205867", "#974806"]
			],
			standartColors: ["#C00000", "#FF0000", "#FFC000", "#FFFF00", "#92D050", "#00B050", "#00B0F0", "#0070C0", "#002060", "#7030A0"]
		},
		events: {
			colorSelected: "colorSelected"
		},
		css: {
			sntandartColorsRow: "ui-colorpicker-standardcolors"
		},
		_create: function () {
			var o = this.options,
				cols,
				rows,
				colorTable = $('<ul class="color-table"></ul>'),
				row,
				color,
				i,
				j;
			o.colors.push(o.standartColors);
			rows = o.colors.length;

			for (i = 0; i < rows; i++) {
				row = $('<li><ul></ul></li>').appendTo(colorTable).children();
				cols = o.colors[i].length;
				if (i === (rows - 1)) { //array last row
					row.addClass("ui-colorpicker-standardcolors");
				}
				for (j = 0; j < cols; j++) {
					color = $('<a href="#"><span class="color" style="background-color: ' + o.colors[i][j] + ';"></span></a>');
					color.children().data("color", o.colors[i][j]);

					$('<li class="color-item"></li>').appendTo(row).append(color);
				}
			}
			this._colorTable = colorTable.appendTo(this.element);
		},
		_init: function () {
			var self = this;
			this.element.addClass(this.widgetBaseClass);
			this._colorTable.children().first().addClass("color-table-first-row");

			this._colorTable.delegate("a", "click", function (e) {
				var target = $(e.target);
				e.preventDefault();

				self._colorTable.find("span.selected-color").removeClass("selected-color");
				if (target.is("a")) {
					target = target.children();
				}
				target.addClass("selected-color");
				self._trigger(self.events.colorSelected, e, {color: target.data("color")});
			});
		}
	});
}(jQuery));

$.ig.ToolbarHelper = $.ig.ToolbarHelper || Class.extend({
	_toolbarsItemsLocation: {
		textToolbar: {
			name: "textToolbar",
			bold: {name: "bold"},
			italic: {name: "Italic"},
			underline: {name: "Underline"},
			strikethrough: {name: "Strikethrough"},
			increasefontsize: {name: "increasefontsize"},
			decreasefontsize: {name: "decreasefontsize"},
			fontFamily: {name: "fontFamily"},
			fontSize: {name: "fontSize"},
			formatsList: {name: "formatsList"}
		},
		formattingToolbar: {
			name: "formattingToolbar",
			justifyleft: {name: "justifyleft"},
			justifycenter: {name: "justifycenter"},
			justifyright: {name: "justifyright"},
			justifyfull: {name: "justifyfull"},
			bullets: {name: "bullets"},
			indents: {name: "indents"},
			textColor: {name: "textColor"},
			backgroundTextColor: {name: "backgroundTextColor"}
		},
		insertObjectToolbar: {
			name: "insertObjectToolbar",
			image: {name: "image"},
			link: {name: "link"},
			table: {name: "table"},
			addRow: {name: "addRow"},
			addColumn: {name: "addColumn"},
			removeRow: {name: "removeRow"},
			removeColumn: {name: "removeColumn"}
		},
		copyPasteToolbar: {
			name: "copyPasteToolbar",
			copy: {name: "copy"},
			cut: {name: "cut"},
			paste: {name: "paste"},
			undo: {name: "undo"},
			redo: {name: "redo"}
		}
	},
	init: function (window, toolbars) {
		this._toolbars = {};
		this._w = window;
		this._d = window.document;
		var self = this;

		toolbars.each(function (idx, el) {
			var igToolbarName = $(el).igToolbar("option", "name");
			self._toolbars[igToolbarName] = $(el);
		});

		this._initAlignButtons(toolbars);
		this._disableUnsupportedItems();
		this._disableTableControls(true);
	},
	_initAlignButtons: function (toolbars) {
		var alignButtonsToolbar = this._toolbars.formattingToolbar,
			alignButtons = {
				justifyleft:  alignButtonsToolbar.igToolbar("getItem", "justifyleft"),
				justifycenter: alignButtonsToolbar.igToolbar("getItem", "justifycenter"),
				justifyright: alignButtonsToolbar.igToolbar("getItem", "justifyright"),
				justifyfull:  alignButtonsToolbar.igToolbar("getItem", "justifyfull")
			};

		toolbars.bind("igtoolbartoolbarbuttonclick", function (e, ui) {
			if (alignButtons.hasOwnProperty(ui.name)) {
				$.each(alignButtons, function (buttonName, button) {
					if (buttonName !== ui.name && button.igToolbarButton("option", "isSelected")) {
						button.igToolbarButton("toggle");
						return;
					}
				});
			}
		});
	},

	_disableUnsupportedItems: function () {
		var copyPasteToolbar = this._toolbars.copyPasteToolbar;
		if (!$.browser.msie) {
			copyPasteToolbar.igToolbar('disableItem', 'cut', true);
			copyPasteToolbar.igToolbar('disableItem', 'copy', true);
			copyPasteToolbar.igToolbar('disableItem', 'paste', true);
		}
	},
	_disableTableControls: function (toDisable) {
		var insertObjectToolbar = this._toolbars.insertObjectToolbar;
		if (!toDisable && this._isTableControlsDisabled) {
			insertObjectToolbar.igToolbar('disableItem', 'addColumn', false);
			insertObjectToolbar.igToolbar('disableItem', 'removeColumn', false);
			insertObjectToolbar.igToolbar('disableItem', 'addRow', false);
			insertObjectToolbar.igToolbar('disableItem', 'removeRow', false);
			this._isTableControlsDisabled = false;
		} else if (toDisable && !this._isTableControlsDisabled) {
			insertObjectToolbar.igToolbar('disableItem', 'addColumn', true);
			insertObjectToolbar.igToolbar('disableItem', 'removeColumn', true);
			insertObjectToolbar.igToolbar('disableItem', 'addRow', true);
			insertObjectToolbar.igToolbar('disableItem', 'removeRow', true);
			this._isTableControlsDisabled = true;
		}
	},
	_callbackMap: {
		_isBold: "_onBold",
		_isItalic: "_onItalic",
		_isUnderlined: "_onUnderlined",
		_isLineThrough: "_onLineThrough",
		// _isAligned: "_onAlign",
		_isJustifyCenter: "_onAlign",
		_isJustifyFull: "_onAlign",
		_isJustifyLeft: "_onAlign",
		_isJustifyRight: "_onAlign",
		_isOrderedList: "_onList",
		_isUnorderedList: "_onList",
		_hasFontName: "_onFontName",
		_hasFontSize: "_onFontSize",
		_isTable: "_onTable"
	},
	analyse: function (el) {
		var self = this;
		this._resetToolbars();

		if (el[0].nodeType === 9) {
			this._computedStyles = (this._w.getComputedStyle && this._w.getComputedStyle(this._d.body)) || this._d.body.currentStyle;
		} else {
			this._computedStyles = (this._w.getComputedStyle && this._w.getComputedStyle(el[0])) || el[0].currentStyle;
		}

		$.each(this._callbackMap, function (isTrueFunc, callback) {
			var isTrueRes = self[isTrueFunc](el);
			if ($.isFunction(self[isTrueFunc]) && isTrueRes && $.isFunction(self[callback])) {
				self[callback](el, isTrueRes);
			}
		});
		if (!el.is("table") && !el.is("td")) {
			this._disableTableControls(true);
		}
	},
	_isBold: function () {
		return this._d.queryCommandState("bold") || this._computedStyles.fontWeight >= 700;
	},
	_isItalic: function () {
		return this._d.queryCommandState("italic") || this._computedStyles.fontStyle.toLowerCase() === "italic";
	},
	_isUnderlined: function () {
		return this._d.queryCommandState("underline") || (this._computedStyles.textDecoration.toLowerCase().indexOf("underline") !== -1);
	},
	_isLineThrough: function () {
		return this._d.queryCommandState("strikethrough") || (this._computedStyles.textDecoration.toLowerCase().indexOf("line-through") !== -1);
	},
	_isJustifyCenter: function () {
		if (this._d.queryCommandState("justifycenter")) {
			return "justifycenter";
		}
	},
	_isJustifyFull: function () {
		if (this._d.queryCommandState("justifyfull")) {
			return "justifyfull";
		}
	},
	_isJustifyLeft: function () {
		if (this._d.queryCommandState("justifyleft")) {
			return "justifyleft";
		}
	},
	_isJustifyRight: function () {
		if (this._d.queryCommandState("justifyright")) {
			return "justifyright";
		}
	},
	_isOrderedList: function () {
		if (this._d.queryCommandState("insertorderedlist")) {
			return "InsertOrderedList";
		}
	},
	_isUnorderedList: function () {
		if (this._d.queryCommandState("insertunorderedlist")) {
			return "InsertUnorderedList";
		}
	},
	_isTable: function (el) {
		if (el.is("table") || el.is("td")) {
			return true;
		}
	},
	_checkParents: function (el, wanted) {
		while (el.parent()) {
			if (el.parent().is(wanted)) {
				return true;
			}
			if (el.is("body")) {
				return;
			}
			el = el.parent();
		}
	},
	_hasFontName: function () {
		var fontName = this._getFontFamily();
		if (fontName === "serif") {
			fontName = "Times New Roman";
		}
		return fontName;
	},
	_getFontFamily: function () {
		return this._computedStyles.fontFamily;
	},
	_hasFontSize: function () {
		return this._computedStyles.fontSize;
	},
	_onBold: function (el) {
		this._toolbars.textToolbar.igToolbar("getItem", "Bold").igToolbarButton("toggle");
	},
	_onItalic: function (el) {
		this._toolbars.textToolbar.igToolbar("getItem", "Italic").igToolbarButton("toggle");
	},
	_onUnderlined: function (el) {
		this._toolbars.textToolbar.igToolbar("getItem", "Underline").igToolbarButton("toggle");
	},
	_onLineThrough: function (el) {
		this._toolbars.textToolbar.igToolbar("getItem", "Strikethrough").igToolbarButton("toggle");
	},
	_onAlign: function (el, dir) {
		this._toolbars.textToolbar.igToolbar("getItem", dir).igToolbarButton("toggle");
	},
	_onList: function (el, listType) {
		this._toolbars.formattingToolbar.each(function (i, tb) {
			var bulletsSpltBttn = $(tb).igToolbar("getItem", "bullets");

			if (bulletsSpltBttn.data("igSplitButton") !== undefined) {
				bulletsSpltBttn.igSplitButton("switchToButton", listType);
				return;
			}
		});
	},
	_onFontName: function (el, fontName) {
		var combo = this._toolbars.textToolbar.igToolbar("getItem", "fontFamily");
		this._setComboValue(combo, $.ig.HtmlEditor.locale.fontNames[/^win/gi.test(navigator.platform) ? 'win' : 'mac'], fontName);
	},
	_onFontSize: function (el) {
		var pxTbl = {
				"11px": 1,
				"13px": 3,
				"16px": 4,
				"19px": 5,
				"18px": 7,
				"24px": 7
			},
			fontSizeUnits = this._d.queryCommandValue("fontsize") || pxTbl[this._computedStyles.fontSize],
			fontSizeUnitsStr = fontSizeUnits ? fontSizeUnits.toString() : "",
			combo = this._toolbars.textToolbar.igToolbar("getItem", "fontSize");
		this._setComboValue(combo, $.ig.HtmlEditor.locale.fontSizes, fontSizeUnitsStr);
	},
	_onTable: function () {
		this._disableTableControls(false);
	},
	_setComboValue: function (combo, values, newValue, valueKey) {
		var i,
			dsValueKey = valueKey || "text",
			currentValue = values[combo.igCombo("selectedIndex")][dsValueKey],
			dataSourceValue;

		if (newValue === currentValue) {
			return;
		}
		for (i = 0; i < values.length; i++) {
			dataSourceValue = values[i][dsValueKey];
			if (newValue === dataSourceValue) {
				combo.igCombo("selectedIndex", i);
				break;
			}
		}
	},
	_resetToolbars: function () {
		$.each(this._toolbars, function (idx, el) {
			$(el).igToolbar("deactivateAll");
		});
	}
});



