/*!
* Infragistics.Web.ClientUI Grid Editing 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.4.4.js
* jquery.ui.core.js
* jquery.ui.widget.js
* ig.ui.grid.framework.js
* ig.ui.editors.js
* ig.ui.validator.js
* ig.ui.combo.js
* ig.ui.rating.js
* ig.ui.shared.js
* ig.dataSource.js
* ig.util.js
*/

/*global jQuery, window, document, setTimeout, Class */
(function ($) {
	var _aNull = function (v, nan) {
		return v === null || v === undefined || (nan && isNaN(v));
	}, _int = function (e, val) {
		val = e ? e.css(val) : 0;
		try {
			val = parseInt(val, 10);
		} catch (ex) { }
		return (val && !isNaN(val)) ? val : 0;
	}, _filter = function (elem, name, p1, p2) {
		elem = elem.data('igEditorFilter');
		return elem ? elem.options.provider[name](p1, p2) : null;
	}, _now = function () {
		return new Date().getTime();
	}, _throw = function (def) {
		var str = $.ig.GridUpdating && $.ig.GridUpdating.locale ? $.ig.GridUpdating.locale[def] : def;
		throw new Error(str || def);
	}, _stop = function (e) {
		if (e && e !== 1) {
			try {
				e.preventDefault();
				e.stopPropagation();
			} catch (ex) { }
		}
	};
	/*
	igGridUpdating is a widget based on jQuery UI that provides support for functionality related to data updates of igGrid.
	That implements following features:
	- row or cell editing
	- row deleting
	- adding new row
	*/
	$.widget('ui.igGridUpdating', {
		grid: null,
		options: {
			/* type="array" Sets gets array of settings for each column. */
			columnSettings: [{
				/* type="string" Sets gets identifier for column. That value should correspond to the "key" of a column in the "columns" of igGrid. */
				columnKey: null,
				/* type="text|0|mask|1|date|2|datepicker|3|numeric|4|currency|5|percent|6|combo|rating" Sets type of editor.
				Note: the css and js files used by ui.igEditor should be available.
				text type="string" the igEditor with type text is created
				0 type="number" the igEditor with type text is created (same as 'text')
				mask type="string" the igEditor with type mask is created
				1 type="number" the igEditor with type mask is created (same as 'mask')
				date type="string" the igEditor with type date editor is created
				2 type="number" the igEditor with type date editor is created (same as 'date')
				datepicker type="string" the igEditor with type datepicker is created. Note: the css and js files used by jquery.ui.datepicker should be available.
				3 type="number" the igEditor with type datepicker is created (same as 'datepicker')
				numeric type="string" the igEditor with type numeric is created
				4 type="number" the igEditor with type numeric is created (same as 'numeric')
				currency type="string" the igEditor with type currency is created
				5 type="number" the igEditor with type currency is created (same as 'currency')
				percent type="string" the igEditor with type percent is created
				6 type="number" the igEditor with type percent is created (same as 'percent')
				combo type="string" the igCombo editor is created. Note: the css and js files used by ui.igCombo should be available.
				rating type="string" the igRating editor is created. Note: the css and js files used by ui.igRating should be available.
				*/
				editorType: null,
				/* type="object" Sets gets custom editor provider. It should extend $.ig.EditorProviderDefault or it should have definitions of all its methods. */
				editorProvider: null,
				/* type="object" Sets gets options supported by corresponding editor such as igEditor, igCombo, or custom editor defined by editorProvider option.
					In addition to specific editor options, it may contain the member "id", which will be set to the element of editor.
					That "id" can be usefull to link cascading igCombo editors.
				*/
				editorOptions: null,
				/* type="bool" Sets gets validation for required entry. */
				required: null,
				/* type="bool" Sets gets read only. If option is enabled, then editor is not used and cells in column are excluded from editing. */
				readOnly: null,
				/* type="bool" Enables disables validation of editor value.
				Value true: enable validation according to rules of igEditor.
				In case of numeric editors, the validation occurs for min/maxValue including range of values for dataMode, illegal number like "." or "-".
				In case of date editors, the validation occurs for min/maxValue and missing fields in "dateInputFormat".
				In case of mask editors, the validation occurs for not filled required positions in inputMask.
				If "editorOptions" enables "required", then validation for all types of editor has effect.
				Value false: do not enable validation. */
				validation: null,
				/* type="object" Sets gets default value in cell for add-new-row. That can be string, number, Date or boolean. */
				defaultValue: null
			}],
			/* type="row|cell|rowedittemplate|none|null" Sets gets edit mode.
			row type="string" editors in all cells in a row are displayed. Editor under clicked cell should get input focus. Optional Done/Cancel buttons can be displayed.
			cell type="string" editor only for clicked cell is displayed. The Done/Cancel buttons are not supported.
			rowedittemplate type="string" editor for all cells will be rendered as popup dialog
			none type="string" editing of grid-cells is disabled
			null type="object" editing of grid-cells is disabled
			*/
			editMode: 'row', //'cell', 'none', null
			/* 
			type="bool" Used when editing is disabled for a particular column
			Value true: disabled columns are rendered as disabled
			Value false: disabled columns are not rendered in the editors
			*/
			showReadonlyEditors: true,
			/* type="bool" Sets gets delete-row functionality.
			Value true: the "Delete" button is displayed on mouse-over a row and all selected rows are deleted by Delete-key.
			Value false: delete-row is disabled.
			*/
			enableDeleteRow: true,
			/* type="bool" Sets gets add-new-row functionality.
			Notes: If igGrid has primaryKey, then application should process generatePrimaryKeyValue event and provide value for a cell.
			It is also recommended to set readOnly:true for the column (within columnSettings) with the primaryKey or to use editorOptions:{readOnly:true}.
			By default the value of a cell with primary key is generated automatically and its value is equal to number of rows in grid plus 1.
			Value true: the "Add Row" button is displayed on header, click on that button shows editors in all columns and new row inserted at the end of editing.
			Value false: add-row functionality is disabled.
			*/
			enableAddRow: true,
			/* type="bool" Sets gets option to enable validation for all columns. */
			validation: false,
			/* type="string" Sets gets text for Done editing button. If that is not set, then $.ig.GridUpdating.locale.doneLabel is used. */
			doneLabel: null,
			/* type="string" Sets gets text for title of Done editing button. If that is not set, then $.ig.GridUpdating.locale.doneTooltip is used. */
			doneTooltip: null,
			/* type="string" Sets gets text for Cancel editing button. If that is not set, then $.ig.GridUpdating.locale.cancelLabel is used. */
			cancelLabel: null,
			/* type="string" Sets gets text for title of Cancel editing button. If that is not set, then $.ig.GridUpdating.locale.cancelTooltip is used. */
			cancelTooltip: null,
			/* type="string" Sets gets text for add-new-row button. If that is not set, then $.ig.GridUpdating.locale.addRowLabel is used. */
			addRowLabel: null,
			/* type="string" Sets gets text for title of add-new-row button. If that is not set, then $.ig.GridUpdating.locale.addRowTooltip is used. */
			addRowTooltip: null,
			/* type="string" Sets gets text for Delete row button. If that is not set, then $.ig.GridUpdating.locale.deleteRowLabel is used. */
			deleteRowLabel: null,
			/* type="string" Sets gets text for title of Delete row button. If that is not set, then $.ig.GridUpdating.locale.deleteRowTooltip is used. */
			deleteRowTooltip: null,
			/* type="bool" Sets gets visibility of the end-edit pop-up dialog with Done/Cancel buttons. */
			showDoneCancelButtons: true,
			/* type="bool" Sets gets ability to enable or disable exception, which is raised when grid has pending transaction and may fail to render data correctly. */
			enableDataDirtyException: true,
			/* type="string|number" maximum row edit dialog height 
				string The dialog window height in pixels (350px).
				number The dialog window height as a number (350).
			*/
			rowEditDialogMaxHeight: 150,
			/* type="number" width of the row edit dialog fields
				number The width as a number (0)
			*/
			rowEditDialogFieldWidth: 140,
			/* type="string|number" default row edit dialog width
				string The dialog window width in pixels (370px).
				number The dialog window width as a number (370).
			*/
			rowEditDialogWidth: 370,
			/* type="string|number" default row edit dialog height
				string The dialog window height in pixels (350px).
				number The dialog window height as a number (350).
			*/
			rowEditDialogHeight: '350',
			/* type="string" Sets gets triggers for start edit mode.
			Possible values: "click", "dblclick", "F2", "enter" and their combinations separated by coma.
			Notes:
			The array of strings similar to ['dblclick', 'f2'] is also supported.
			The keyboard triggers have effect only when "Selection" feature of grid is enabled.
			If the 'dblclick' is included, then 'click' has no effect.
			*/
			startEditTriggers: 'click,F2,enter',
			/* type="string" Controls containment behavior. 
				owner type="string" The row edit dialog will be draggable only in the grid area
				window type="string" The row edit dialog will be draggable in the whole window area
			*/
			rowEditDialogContainment: "owner",
			/* type="string|number" Width of the Ok and Cancel buttons in the row edit dialogs 
				string The advanced row edit dialog Ok and Cancel buttons width in pixels (100px).
				number The advanced row edit dialog Ok and Cancel buttons width as a number (100).
			*/
			rowEditDialogOkCancelButtonWidth: 120,
			/* type="string" Custom template for rows in row edit dialog */
			rowEditDialogRowTemplate: "<tr><td>${headerText}</td><td data-key='${dataKey}'><input /></td></tr>",
			/* type="string" ID to x-jquery-tmpl template. If both rowEditDialogRowTemplate and rowEditDialogRowTemplateID are
				specified, then rowEditDialogRowTemplateID will be used */
			rowEditDialogRowTemplateID: null,
			/* type="bool" Enables horizontal move to the right on Enter while editing a cell.
			Value true: Pressing Enter will move the focus to the next edited cell on the right
			Value false: Pressing Enter will move the focus to the next edited cell on the row below
			*/
			horizontalMoveOnEnter: false,
			/* type="bool" Enables excel navigating style while editing a cell
			Value true: Arrows will not navigate inside the edited cell, but will exit the edit mode
			and move the focus to the nearest cell.
			Value false: Arrows will navigate the cursor inside the edited cell
			*/
			excelNavigationMode: false,
			/* A list of configurable and localized labels that will be used for the row edit dialog. */
			labels: {
				rowEditDialogCaptionLabel: $.ig.GridUpdating.locale.rowEditDialogCaptionLabel,
				cancelLabel: $.ig.GridUpdating.locale.cancelLabel,
				doneLabel: $.ig.GridUpdating.locale.doneLabel
			}
		},
		events: {
			/* cancel="true" Event which is raised before start row editing.
			Return false in order to cancel editing and do not show editors in row.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.rowID to get key or index of row.
			Use ui.rowAdding to check if that event is raised while new-row-adding.
			*/
			editRowStarting: null,
			/* Event which is raised after start row editing.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.rowID to get key or index of row.
			Use ui.rowAdding to check if that event is raised while new-row-adding.
			*/
			editRowStarted: null,
			/* cancel="true" Event which is raised before end row editing.
			Return false in order to cancel update of data source.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.rowID to get key or index of row.
			Use ui.keepEditing=true in order to keep editing. It has effect only when evt.originalEvent is defined.
			Use ui.update to check if value of any cell was modified and data source will be updated.
			Use ui.rowAdding to check if that event is raised while new-row-adding.
			Use ui.values[key] to get value of cell in column with the key. That is available only when ui.update is true.
			Use ui.oldValues[key] to get old value of cell in column with the key. That is available only when ui.update is true.
			*/
			editRowEnding: null,
			/* Event which is raised after end row editing.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.rowID to get key or index of row.
			Use ui.update to check if value of any cell was modified and data source will be updated.
			Use ui.rowAdding to check if that event is raised while new-row-adding.
			Use ui.values[key] to get value of cell in column with the key. That is available only when ui.update is true.
			Use ui.oldValues[key] to get old value of cell in column with the key. That is available only when ui.update is true.
			*/
			editRowEnded: null,
			/* cancel="true" Event which is raised before start cell editing.
			Return false in order to cancel start editing and do not show editors.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.rowID to get key or index of row.
			Use ui.columnIndex to get index of column.
			Use ui.columnKey to get key of column.
			Use ui.editor to get reference to igEditor.
			Use ui.value to get or set value of editor.
			Use ui.rowAdding to check if that event is raised while new-row-adding.
			*/
			editCellStarting: null,
			/* Event which is raised after start cell editing.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.rowID to get key or index of row.
			Use ui.columnIndex to get index of column.
			Use ui.columnKey to get key of column.
			Use ui.editor to get reference to igEditor.
			Use ui.value to get value of editor.
			Use ui.rowAdding to check if that event is raised while new-row-adding.
			*/
			editCellStarted: null,
			/* cancel="true" Event which is raised before end cell editing.
			Return false in order to cancel update of data source.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.rowID to get key or index of row.
			Use ui.columnIndex to get index of column.
			Use ui.columnKey to get key of column.
			Use ui.keepEditing=true in order to keep editing. It has effect only when evt.originalEvent is defined and only when editMode is "cell".
			Use ui.editor to get reference to igEditor.
			Use ui.value to get value of cell/editor. That value can be modified and it will be used to update data source.
			Use ui.oldValue to get old value.
			Use ui.update to check if value was modified and data source will be updated.
			Use ui.rowAdding to check if that event is raised while new-row-adding.
			*/
			editCellEnding: null,
			/* Event which is raised after end cell editing.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.rowID to get key or index of row.
			Use ui.columnIndex to get index of column.
			Use ui.columnKey to get key of column.
			Use ui.editor to get reference to igEditor.
			Use ui.value to get value of cell.
			Use ui.oldValue to get old value.
			Use ui.update to check if cell was modified and data source will be updated.
			Use ui.rowAdding to check if that event is raised while new-row-adding.
			*/
			editCellEnded: null,
			/* cancel="true" Event which is raised before adding new row.
			Return false in order to cancel adding new row to data source.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.values[key] to get new value of cell in column with the key.
			Use ui.oldValues[key] to get default value (before editing) of cell in column with the key.
			*/
			rowAdding: null,
			/* Event which is raised after adding new row.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.values[key] to get new value of cell in column with the key.
			Use ui.oldValues[key] to get default value (before editing) of cell in column with the key.
			*/
			rowAdded: null,
			/* cancel="true" Event which is raised before row deleting.
			Return false in order to cancel.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.element to get reference to jquery object which represents TR of row to delete.
			Use ui.rowID to get key or index of row to delete.
			*/
			rowDeleting: null,
			/* Event which is raised after row deleting.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.element to get reference to jquery object which represents TR of row to delete.
			Use ui.rowID to get key or index of row to delete.
			*/
			rowDeleted: null,
			/* cancel="true" Event which is raised when autoCommit of grid is not enabled and grid has pending transaction which may fail to be correctly rendered.
			Application should process that event and it may trigger commit of grid.
			Return false in order to prevent exception.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			*/
			dataDirty: null,
			/* cancel="false" Event which is raised before adding new row to get value of cell for primaryKey column.
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.owner.grid to get reference to igGrid.
			Use ui.value to set unique record-key-identifier for new row. It is prefilled with suggested value (defaultValue of column or number of rows in data source)
			*/
			generatePrimaryKeyValue: null,
			/* cancel="false" Event fired before the row edit dialog is opened. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.dialogElement to get reference to row edit dialog DOM element.
			*/
			rowEditDialogOpening: null,
			/* cancel="false" Event fired after the row edit dialog is opened. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.dialogElement to get reference to row edit dialog DOM element.
			*/
			rowEditDialogOpened: null,
			/* cancel="false" Event fired before the contents of the row edit dialog are rendered. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.dialogElement to get reference to row edit dialog DOM element.
			*/
			rowEditDialogContentsRendering: null,
			/* cancel="false" Event fired after the contents of the row edit dialog are rendered. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.dialogElement to get reference to row edit dialog DOM element.
			*/
			rowEditDialogContentsRendered: null,
			/* cancel="false" Event fired before the row edit dialog is closed. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.dialogElement to get reference to row edit dialog DOM element.
			*/
			rowEditDialogClosing: null,
			/* cancel="false" Event fired after the row edit dialog is closed. 
			Function takes arguments evt and ui.
			Use ui.owner to get reference to igGridUpdating.
			Use ui.dialogElement to get reference to row edit dialog DOM element.
			*/
			rowEditDialogClosed: null
		},
		css: {
			/* Classes applied to the container of Done and Cancel editing buttons. Default value is 'ui-iggrid-buttoncontainer ui-widget-content' */
			buttonContainer: 'ui-iggrid-buttoncontainer ui-widget-content ui-corner-all',
			/* Classes applied to the buttons. Default value is 'ui-iggrid-button ui-state-default' */
			button: 'ui-iggrid-button ui-state-default ui-corner-all',
			/* Classes applied to the Done button. Default value is 'ui-iggrid-donebutton ui-priority-primary' */
			doneButton: 'ui-iggrid-donebutton ui-priority-primary ui-corner-all',
			/* Class applied to the Cancel button. Default value is 'ui-iggrid-cancelbutton' */
			cancelButton: 'ui-iggrid-cancelbutton ui-corner-all',
			/* Classes applied to the Delete button. Default value is 'ui-iggrid-deletebutton ui-state-default' */
			deleteButton: 'ui-iggrid-deletebutton ui-state-default ui-corner-all',
			/* Classes applied to buttons in mouse-over state. Default value is 'ui-iggrid-buttonhover ui-state-hover' */
			buttonHover: 'ui-iggrid-buttonhover ui-state-hover',
			/* Classes applied to buttons in disabled state. Default value is 'ui-iggrid-buttondisabled ui-state-disabled' */
			buttonDisabled: 'ui-iggrid-buttondisabled ui-state-disabled',
			/* Classes applied to buttons in active/focus state. Default value is 'ui-iggrid-buttonactive ui-state-active' */
			buttonActive: 'ui-iggrid-buttonactive ui-state-active',
			/* Classes applied to the icon on Done button. Default value is 'ui-iggrid-doneicon ui-icon ui-icon-check' */
			doneIcon: 'ui-iggrid-doneicon ui-icon ui-icon-check',
			/* Classes applied to the icon on Done button. Default value is 'ui-iggrid-cancelicon ui-icon ui-icon-cancel' */
			cancelIcon: 'ui-iggrid-cancelicon ui-icon ui-icon-cancel',
			/* Class applied to Done and Cangel buttons when they have no text. Default value is 'ui-iggrid-button-icon-only' */
			buttonIconOnly: 'ui-iggrid-button-icon-only',
			/* Classes applied to the editing cells. Default value is 'ui-iggrid-editingcell' */
			editingCell: 'ui-iggrid-editingcell',
			/* Classes applied to the add-new-row button. Default value is 'ui-iggrid-addrow ui-widget-header' */
			addRow: 'ui-iggrid-addrow ui-widget-header',
			/* Classes applied to the add-new-row button in mouse-over state. Default value is 'ui-iggrid-addrowhover ui-state-hover' */
			addRowHover: 'ui-iggrid-addrowhover ui-state-hover',
			/* Classes applied to the add-new-row button in active/focus state. Default value is 'ui-iggrid-addrowactive ui-state-active' */
			addRowActive: 'ui-iggrid-addrowactive ui-state-active',
			/* Classes applied to the icon on add-new-row button. Default value is 'ui-iggrid-addrowicon ui-icon ui-icon-circle-plus' */
			addRowIcon: 'ui-iggrid-addrowicon ui-icon ui-icon-circle-plus',
			/* Classes applied to the icon on Delete button. Default value is 'ui-iggrid-deleteicon ui-icon ui-icon-circle-close' */
			deleteIcon: 'ui-iggrid-deleteicon ui-icon ui-icon-circle-close',
			/* Class applied to editors. Default value is 'ui-iggrid-editor' */
			editor: 'ui-iggrid-editor',
			/* Class applied to editors.  */
			rowEditDialogHeaderCaption: "ui-dialog-titlebar ui-iggrid-filterdialogcaption ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",
			/* Class applied to editors.  */
			rowEditDialogHeaderCaptionTitle: "ui-dialog-title",
			/* Classes applied to the row edit dialog element */
			"rowEditDialog": "ui-dialog ui-draggable ui-resizable ui-iggrid-dialog ui-widget ui-widget-content ui-corner-all",
			/* Classes applied to the filtering block area, when the advanced row edit dialog is opened and the area behind it is grayed out (that's the block area) */
			"blockArea": "ui-widget-overlay ui-iggrid-blockarea",
			/* Classes applied to the row edit dialog OK and Cancel buttons. */
			"rowEditDialogOkCancelButton": "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix ui-iggrid-filterdialogokcancelbuttoncontainer",
			/* Classes applied to the row edit dialog table */
			"rowEditDialogTable": "ui-iggrid-filtertable ui-helper-reset"
		},
		setCellValue: function (rowId, colKey, value, tr) {
			/* Sets a cell value for the specified cell. It also creates a transaction and updates the UI. Functionality depends on autoCommit option of igGrid.
			paramType="object" identifier of row such as value at primaryKey-column of igGrid or if it is not used, then index or row within dataSource of grid
			paramType="string" column key
			paramType="object" the new cell value
			paramType="dom" optional="true" reference to the TR-row where TD-cell is located
			*/
			if (!_aNull(rowId) && typeof colKey === 'string') {
				tr = tr || this.grid.element.children('tbody').find('[data-id="' + rowId + '"]')[0] || 1;
				this._update(rowId, tr, value, colKey);
			}
		},
		updateRow: function (rowId, values, tr) {
			/* Set values for all cells in a row. It also creates a transaction and updates the UI. Functionality depends on autoCommit option of igGrid.
			paramType="object" identifier of row such as value at primaryKey-column of igGrid or if it is not used, then index or row within dataSource of grid
			paramType="object" pairs of values in the format { column1Key: value1, column2Key: value2, ... }
			paramType="dom" optional="true" reference to the TR element which represents row
			*/
			if (!_aNull(rowId) && values) {
				tr = tr || this.grid.element.children('tbody').find('[data-id="' + rowId + '"]')[0] || 1;
				this._update(rowId, tr, values);
			}
		},
		addRow: function (values) {
			/* Adds a new row to the grid. It also creates a transaction and updates the UI. Functionality depends on autoCommit option of igGrid.
			paramType="object" pairs of values in the format { column1Key: value1, column2Key: value2, ... }
			*/
			this._update(values || {});
		},
		deleteRow: function (rowId, tr) {
			/* Deletes a row from the grid. It also creates a transaction and updates the UI. Functionality depends on autoCommit option of igGrid.
			paramType="object" identifier of row such as value at primaryKey-column of igGrid or if it is not used, then index or row within dataSource of grid
			paramType="dom" optional="true" reference to the TR element which represents row
			*/
			if (!_aNull(rowId)) {
				tr = tr || this.grid.element.children('tbody').find('[data-id="' + rowId + '"]')[0] || 1;
				this._update(rowId, tr);
			}
		},
		startEdit: function (row, col, e) {
			/* Start editing.
			paramType="number" Index of row.
			paramType="number" Index of column.
			paramType="object" optional="true" Browser event. If it is defined, then events are raised.
			returnType="bool" Returns true in case of success or current editing is continued.
			*/
			var td = this.grid.cellAt(col, row), tr;
			if (this.options.editMode === 'rowedittemplate') {
				tr = this.grid.rowAt(row);
				return this._startEditRowTemplate(e, $(tr));
			}

			if (td) {
				td = this._startEdit($(td), e || 1, 1) === 1;
			}
			return !!td;
		},
		startAddRowEdit: function (e) {
			/* Start row editing.
			paramType="object" optional="true" Browser event. If it is defined, then events are raised.
			returnType="bool" Returns true in case of success or current editing is continued.
			*/
			var tr = this._newTR;
			if (this.options.editMode === 'rowedittemplate') {
				return this._startEditRowTemplate(e);
			}
			if (tr) {
				tr = this._startEdit($(tr.children()[0]), e || 1, 1, 1, this._addTR.children()[0].offsetHeight) === 1;
			}
			return !!tr;
		},
		endEdit: function (update, e) {
			/* End row editing.
			paramType="bool" optional="true" Request to update grid with new values.
			paramType="object" optional="true" Browser event. If it is defined, then events are raised.
			returnType="bool" Returns false if request failed and editing is continued.
			*/
			if (this.options.editMode === 'rowedittemplate') {
				return update ? this._rowEditDialogDoUpdate(e) : this._closeRowEditDialog(e);
			}
			return !this._endEdit(e || 1, update);
		},
		findInvalid: function () {
			/* Find column-key which editor has invalid value.
			returnType="string|number" Return null or key of column which editor has invalid value and validation of column is enabled.
			*/
			var key, all = this._editors;
			for (key in all) {
				if (all.hasOwnProperty(key) && all[key] && !_filter(all[key], 'isValid')) {
					return key;
				}
			}
			return null;
		},
		isEditing: function () {
			/* Check if editing is on.
			returnType="bool" Returns true if editing is on.
			*/
			return !!this._tds;
		},
		editorForKey: function (key) {
			/* Find editor for a column with key. That method can be used only after editor was already created.
			paramType="object" Key of column. That can be string or number depending on structure of data in dataSource of grid.
			returnType="object" Returns reference to igEditor or null.
			*/
			var e = this._editors;
			return e ? e[key] : null;
		},
		editorForCell: function (td, add) {
			/* Find or create editor which is used for a cell in igGrid.
			paramType="$" Reference to jquery TD object in igGrid.
			paramType="bool" optional="true" Request to create editor. That parameter was designed for internal use and first td parameter must contain valid cell in grid.
			returnType="object" Returns reference to igEditor or null.
			*/
			var e, key = this._key(td), edits = this._editors;
			if (!edits) {
				edits = this._editors = {};
			}
			e = edits[key];
			if (!e && add) {
				e = edits[key] = this._createEditor(td, key);
			}
			return e;
		},
		_setOption: function (key, value) {
			var o = this.options;
			if (o[key] === value) {
				return this;
			}
			this._endEdit();
			// 2-remove buttons
			this._doButtons(2);
			o[key] = value;
			if (key.indexOf('ddRow') > 0) {
				this._headerRendered();
				this.grid._initializeHeights();
			}
			return this;
		},
		_fire: function (name, e, a) {
			if (a && e && e !== 1) {
				a.owner = this;
				return this._trigger(name, e, a);
			}
			return 1;
		},
		// get localized string from: options or $.ig.GridUpdating.locale
		_loc: function (prop, title) {
			if (_aNull(title = this.options[prop += title ? 'Tooltip' : 'Label'])) {
				title = $.ig.GridUpdating && $.ig.GridUpdating.locale ? $.ig.GridUpdating.locale[prop] : null;
			}
			return title || '';
		},
		_div: function () {
			return this.grid.container();
		},
		_hscroll: function (scroller) {
			if (!this._hscr1) {
				var grid = this.grid.element;
				this._hscr1 = $("#" + grid[0].id + "_hscroller");
				this._hscr2 = this._hscr1.length ? this._hscr1 : grid.parent();
			}
			return scroller ? this._hscr1 : this._hscr2;
		},
		_groupedColumnsChanged: function (args) {
			this._groupCols = args.groupedColumns.length;
			this._hidingFinishing();
			this._headerRendered();
		},
		//i=1: flag to destroy
		_headerRendered: function (i) {
			// render the filter row
			var th, plus, td, col, colSet, txt, title, me = this, css = me.css, shift = me._addTrShift, colSpan = 0,
				tr = me._addTR, o = me.options, grid = me.grid, cols = grid.options.columns, len = cols.length;
			if (!o.enableAddRow || i === 1) {
				if (tr) {
					tr.remove();
					me._newTR.remove();
					me._hierTD = me._newTR = me._addTR = null;
				}
				return;
			}
			txt = me._loc('addRow') || '&nbsp;';
			title = me._loc('addRow', 1);
			if (tr) {
				tr.find('.anr_t').html(txt);
				tr.find('.ui-iggrid-addrow').attr('title', title);
				tr.find('.anr_i').css('display', 'inline-block');
			}
			th = me._div().find('thead');
			if (!th || tr) {
				return;
			}
			plus = o.showPlusIcon;
			tr = me._addTR = $('<tr />').addClass(css.addRow).attr('data-skip', 'true').appendTo(th);
			// insert leading TDs/THs which existed before _hidingFinishing
			if (shift) {
				for (i = 0; i < shift.length; i++) {
					$(shift[i]).appendTo(tr);
				}
			} else {
				me._hierOn = _now();
				// insert hierarchical grid cell
				grid._headerInit(tr);
				// flag that hierarchical TD was created
				me._hierTD = tr.children().length;
			}
			// skip hidden columns
			for (i = 0; i < len; i++) {
				if (!cols[i].hidden) {
					colSpan++;
				}
			}
			// if grid has grouped columns, then insert extra TD to match with number columns in headers
			if (me._groupCols) {
				// save reference in order to remove it if group or hidden columns are changed
				me._groupTD1 = $('<td />').addClass('ui-iggrid-rowselector-header').attr('data-skip', 'true').appendTo(tr);
			}
			td = $('<td colspan="' + colSpan + '"></td>').attr('title', title).addClass(css.addRow).appendTo(tr);
			// initial shift of AddNewRow content from left edge of table
			me._addLeft = _int(td, 'paddingLeft');
			$('<span />').css('display', 'inline-block').addClass(css.addRowIcon).addClass('anr_i').appendTo(td);
			// notes: do not use tabIndex for TD, to get around bug in IE which scrolls header
			// use _ti+1, because editors should get focus on external Tab before buttons/addNewRow
			$('<span>' + txt + '</span>').addClass('anr_t').css('outline', 0).attr('tabIndex', me._ti + 1).focus(function (e) { me._onEvt(e, 5); }).blur(function (e) { me._onEvt(e, 6); }).appendTo(td);
			// render (hidden) cells
			tr = me._newTR = $('<tr />').attr('data-skip', 'true').appendTo(th).hide();
			// insert leading TDs/THs which existed before _hidingFinishing
			shift = this._newTrShift;
			if (shift) {
				for (i = 0; i < shift.length; i++) {
					$(shift[i]).appendTo(tr);
				}
			} else {
				// insert hierarchical grid cell
				grid._headerInit(tr);
			}
			if (me._groupCols) {
				me._groupTD2 = $('<td />').addClass('ui-iggrid-rowselector-header').attr('data-skip', 'true').appendTo(tr);
			}
			for (i = 0; i < len; i++) {
				col = cols[i];
				// skip hidden columns
				if (!col.hidden) {
					colSet = me._colSet(0, col ? col.key : null);
					plus = colSet && colSet.readOnly;
					txt = _aNull(txt = plus ? colSet.defaultValue : null) ? '&nbsp;' : grid._renderCell(txt, col);
					td = $('<td>' + txt + '</td>').addClass(css.editingCell).appendTo(tr);
					if (plus && col && col.key === grid.options.primaryKey) {
						me._tdAddPrime = td;
					}
				}
			}
		},
		// check if number of leading extra header cells in updating-rows is the same as number of extra cells in any other header row.
		_hierGridInDiv: function () {
			var css, kids, len, elem,
				extra = 0,
				i = -1,
				tr = this._newTR,
				trA = this._addTR;
			// number of rows in header
			kids = tr.parent().children();
			// find any not _newTR/_addTR row in header
			while (++i < kids.length) {
				if (kids[i] !== trA[0] && kids[i] !== tr[0]) {
					break;
				}
			}
			if (i > kids.length) {
				return;
			}
			// find number of leading special/dummy cells in not-updating-row
			kids = kids[i].childNodes;
			len = kids.length;
			for (i = 0; i < len; i++) {
				elem = kids[i];
				// test for extra leading cells in header
				css = elem.getAttribute('data-skip') ? elem.className : null;
				if (css && (css.indexOf('-expand') >= 0 || css.indexOf('-rowselector') >= 0)) {
					extra++;
				} else {
					break;
				}
			}
			// adjust for existing leading special/dummy cells in updating-row
			kids = tr.children();
			len = kids.length;
			for (i = 0; i < len; i++) {
				elem = kids[i];
				if (elem.getAttribute('data-skip')) {
					extra--;
				} else {
					break;
				}
			}
			// add missing leading special/dummy cells
			while (extra-- > 0) {
				this.grid._headerInit(tr, null, true);
				this.grid._headerInit(trA, null, true);
			}
		},
		// ensure that hierarchical TD was created (96606: base of grid is DIV)
		_hierHeaderInit: function () {
			var i, me = this, on = me._hierOn, tr = me._addTR;
			// process that event only when it is called straight after _headerRendered (97984: group by)
			if (!tr || !on || _now() - on > 200) {
				return;
			}
			// VS 08/24/2012: 118538
			// Notes: when base element of hierarchical grid is DIV, then order of rendering events is swapped.
			// _headerRendered is hit before heirarchical grid header-rendering: that breaks calculation of leading extra cells.
			// At the time of this method, there are no extra cells in header yet, therefore validation for number of extra cells
			// can not be performed here.
			// Also, extra cells can not be inserted without validations, because that may double them: delay is required.
			//
			// _hierTD: flag that hierarchical extra TD was probably created, though that can be invalid: read notes above.
			if (me._hierTD) {
				setTimeout(function () { me._hierGridInDiv(); }, 0);
				// repeat: if something will fail or still too early
				setTimeout(function () { me._hierGridInDiv(); }, 200);
				return;
			}
			i = tr.children().length;
			me.grid._headerInit(tr, null, true);
			me.grid._headerInit(me._newTR, null, true);
			// flag that hierarchical TD was created
			me._hierTD = tr.children().length - i;
		},
		_dataRendered: function () {
			if (this._wasInit) {
				return;
			}
			// enable processing scroll events
			this._scrollDiv();
			this._div().bind(this._evts);
			this._wasInit = true;
		},
		_findCell: function (e) {
			var i = 0, td = $(e), grid = this.grid.element[0];
			if (!td.is('td')) {
				td = td.closest('td');
			}
			e = td;
			while (e && i++ < 5) {
				e = e.parent();
				if (e && e[0] === grid) {
					break;
				}
			}
			return (i === 3 && this._col(td) >= 0 && this._row(td) >= 0) ? td : null;
		},
		_td: function () {
			var i, tds = this._tds;
			if (tds) {
				for (i in tds) {
					if (tds.hasOwnProperty(i) && tds[i]) {
						return tds[i];
					}
				}
			}
		},
		_row: function (td) {
			return td ? td.parent().index() : -1;
		},
		_idForCol: function (id, shift) {
			var last = -1, map = this._col(1), i = map ? map.length : 0;
			while ((i -= 1) >= 0) {
				if (map[i] < 0) {
					continue;
				}
				// request to return first valid column
				if (shift === -2) {
					return i;
				}
				if (map[i] === id) {
					// flag to return next valid column
					if (shift === 1) {
						return last;
					}
					// set flag to return first valid column
					if (shift === -1) {
						shift = -2;
					} else {
						break;
					}
				}
				last = i;
			}
			return i;
		},
		// check if td belongs to addNewRow-TR or to data-TR
		_isAdd: function (td) {
			return (td === 1) ? this._adding : (this._isSrc(this._addTR, td) || this._isSrc(this._newTR, td));
		},
		// get column index within grid columns for TD	
		_col: function (td) {
			var shift, len, cols, id, i, add = this._isAdd(td),
			// add-row and data-row may have different leading extra TDs, so, maps should be different
				map = add ? this._mapAdd : this._map;
			if (!map) {
				shift = this._colShift(td);
				map = [];
				id = i = -1;
				while (shift-- > 0) {
					map[i += 1] = -1;
				}
				cols = this.grid.options.columns;
				len = cols.length;
				while ((id += 1) < len) {
					if (cols[id] && !cols[id].hidden) {
						map[i += 1] = id;
					}
				}
				if (add) {
					this._mapAdd = map;
				} else {
					this._map = map;
				}
			}
			if (td === 1) {
				return map;
			}
			id = td.index() + (this.grid._startColIndex || 0);
			return (td && id < map.length) ? map[id] : -1;
		},
		_colSet: function (td, key) {
			var i, cols = this.options.columnSettings;
			if (!key) {
				key = this._key(td);
			}
			i = (cols && key) ? cols.length : 0;
			while (i-- > 0) {
				if (cols[i].columnKey === key) {
					return cols[i];
				}
			}
		},
		_isSame: function (td1, td2) {
			return this._row(td1) === this._row(td2) && this._col(td1) === this._col(td2);
		},
		_gridCol: function (key, id) {
			var i = -1, cols = this.grid.options.columns;
			while (++i < cols.length) {
				if (cols[i].key === key) {
					return id ? i : cols[i];
				}
			}
		},
		// return value of cell in primary-column for a row or index of row (if grid does not have primary key)
		_prime: function (td) {
			var key = td.parent().attr('data-id');
			return _aNull(key) ? this._row(td) : this._fixPrime(key);
		},
		_defVal: function (key, fire) {
			var col;
			if (key) {
				col = this._colSet(null, key);
				col = col ? col.defaultValue : null;
				if (fire && key === this.grid.options.primaryKey) {
					col = this._defValue;
					if (!col) {
						col = { value: col || this._addRowNum };
						this._fire('generatePrimaryKeyValue', this._evt || {}, col);
						this._defValue = col = col.value;
					}
				}
			}
			return col;
		},
		// fill defaultValue for readOnly columns, because there are no editors for them and grid will not be updated with defaults
		_addReadOnly: function (add) {
			var v, key, cols = this.options.columnSettings, vals = {};
			for (key in cols) {
				if (cols.hasOwnProperty(key)) {
					v = cols[key];
					key = v.columnKey;
					if (v.readOnly) {
						if (!add) {
							// get value from possible transactions (like editing of already added row)
							vals[key] = this._getVal(this._row_, key);
						} else if (!_aNull(v = this._defVal(key, 1))) {
							vals[key] = v;
						}
					}
				}
			}
			return vals;
		},
		_key: function (td) {
			var cols = this.grid.options.columns, col = this._col(td);
			col = (cols && col >= 0) ? cols[col] : null;
			return col ? col.key : null;
		},
		_equals: function (v1, v2) {
			return v1 === v2 || (v1 && v2 && v1.getTime && v2.getTime && v1.getTime() === v2.getTime());
		},
		// get/set value of cell in grid
		// if set and edit mode is row, then update vals[key] with new value and return "not undefined"
		_val: function (td, arg, vals) {
			var val, add = this._adding, row = this._row_, key = this._key(td);
			if (add) {
				val = this._defVal(key, vals && _aNull(vals[key]));
			} else {
				val = this._getVal(row, key);
			}
			// set cell value
			if (arg) {
				if (add || !this._equals(val, arg.value)) {
					// row update container
					if (vals) {
						return arg.value;
					}
					// cell update
					this._update(row, td.parent()[0], arg.value, key);
				}
				return undefined;
			}
			// get cell value
			return val;
		},
		// returns number of TDs in front of 1st addNewRow-TD or dataRow-TD
		_colShift: function (td, tr) {
			var i, add, shift = this._cShift, shiftAdd = this._cShiftAdd;
			if (!tr && td) {
				tr = td.parent()[0];
			}
			if (!tr) {
				return (shift < 0) ? 0 : shift;
			}
			add = this._isAdd(tr);
			if (add) {
				if (shiftAdd >= 0) {
					return shiftAdd;
				}
			} else if (shift >= 0) {
				return shift;
			}
			tr = tr ? tr.childNodes : null;
			if (!tr) {
				return 0;
			}
			shift = 0;
			for (i = 0; i < tr.length - 1; i++) {
				td = tr[i].className;
				if ((td && (td.indexOf('-expandcolumn') >= 0 || td.indexOf('-rowselector') >= 0)) || tr[i].getAttribute('data-skip')) {
					shift++;
				} else {
					break;
				}
			}
			if (add) {
				this._cShiftAdd = shift;
			} else {
				this._cShift = shift;
			}
			return shift;
		},
		// return object which holds reference to TABLE and row/col edit-indexes of cell: to restore TD after update by autoCommit
		_cur: function (td, i) {
			return { tbl: td.parent().parent().parent(), row: i ? this._rowIndex : this._row(td), col: this._col(td) };
		},
		// find next TD which should go in edit mode
		// shift: 0-next TR, 1-next TD, -1-previous TD, -tr1 same TD on the previous row
		//	cur: {tbl: TABLE, row: TD_rowIndex, col: TD_colIndex}
		_nextTD: function (cur, shift, edit) {
			// L.A. 26 September 2012 - Fixing bug #122667
			// Pressing the Enter key while editing in the Add Row causes JS errors
			/* VS 09/26/2012: cur.tbl.children('tbody')[0].childNodes should be used, but not cur.tbl.children('tbody').childNodes */
			var i, tds, len, tr, td, map,
				tbody = cur.tbl.children('tbody')[0],
				rows = tbody ? tbody.childNodes : 0,
				rowsLen = rows ? rows.length : 0,
				row = cur.row;
			if (rowsLen < 1 || row < 0 || row >= rowsLen) {
				return;
			}
			tr = rows[row];
			if (!tr) {
				return;
			}
			// TDs in current row
			tds = tr.childNodes;
			map = this._col(1);
			len = tds.length;
			// index of next TR
			if (shift === '-tr1') {
				tr = row - 1 < 0 ? rowsLen : row - 1;
			} else {
				tr = row + (shift || 1);
			}
			// index of next TD
			i = this._idForCol(cur.col, shift);
			// tab key: next/prev TD in TR
			if (shift && shift !== '-tr1') {
				if (i >= 0) {
					// find next/prev column in same row
					cur.col = map[i];
					td = tds[i];
				}
				if (!td && edit) {
					if (tr >= 0 && tr < rowsLen) {
						// find first column in next row
						if (shift > 0) {
							i = (map[0] >= 0) ? 0 : 1;
						} else {
							// find last column in prev row
							i = map.length;
							while ((i -= 1) >= 0) {
								if (map[i] >= 0) {
									break;
								}
							}
						}
						if (i >= 0) {
							cur.col = map[i];
							td = rows[cur.row = tr].childNodes[i];
						}
					}
				}
				// enter key: next TR
			} else {
				td = (tr < rowsLen) ? rows[cur.row = tr].childNodes[i] : null;
			}
			cur.td = td ? $(td) : null;
			return td ? cur : null;
		},
		// find next editor in row
		_nextEditor: function (key, shift) {
			var e, col, ok = null, edits = this._editors;
			for (col in edits) {
				if (edits.hasOwnProperty(col)) {
					if (shift && key === col) {
						return ok;
					}
					if (col) {
						e = edits[col];
						if (e && e[0] && e[0].offsetWidth > 0) {
							if (key === null) {
								return e;
							}
							ok = e;
						}
					}
					if (key === col) {
						key = null;
					}
				}
			}
		},
		// start edit mode for next cell/row
		// shift: 0-next TR, 1-next TD in TR, -1-previous TD in TR
		_nextEdit: function (e, shift) {
			var cur, td = this._td();
			if (!td) {
				return;
			}
			cur = this._cur(td, true);
			while (this._nextTD(cur, shift, 1)) {
				if (this._startEdit(cur.td, e, 1)) {
					return;
				}
			}
			this._endEdit(e, 1);
		},
		_createEditor: function (td, key) {
			var v, oValid, elem,
				oEdit = {},
				me = this,
				gridCol = me._gridCol(key) || {},
				format = gridCol.format,
				css = me.css.editor,
				xy = me._xy,
				col = me._colSet(td, key),
				provider = col ? col.editorProvider : null,
				topBorder = me._tdBdrTop;
			if (col && col.readOnly) {
				return null;
			}
			// measure attributes of editor class
			if (!xy) {
				topBorder = me._tdBdrTop = _int(td, 'borderTopWidth');
				v = $('<span />').addClass(css).prependTo(td);
				// shift of editor relative to the left-top corner of cell
				me._xy = xy = { x: _int(v, 'marginLeft'), y: _int(v, 'marginTop') };
				// reduction of editor width/height
				xy.dx = xy.x + _int(v, 'marginRight');
				xy.dy = xy.y + _int(v, 'marginBottom');
				v.remove();
			}
			v = null;
			if (col) {
				oEdit = col.editorOptions || oEdit;
				oValid = oEdit.validatorOptions;
				v = col.required;
				if (!oValid && (col.validation || v)) {
					oValid = {};
				}
				if (v) {
					oValid.required = oEdit.required = true;
				}
			}
			if (me.options.validation && !oValid) {
				oValid = {};
			}
			if (oValid) {
				if (!me.grid.element.igValidator) {
					_throw('igValidatorException');
				}
				if (col) {
					col.editorOptions = oEdit;
				}
				oEdit.validatorOptions = oValid;
				oValid.bodyAsParent = false;
				oValid.keepFocus = 2;
				oValid.errorHidden = function () {
					// remove current-error flag
					me._error = null;
					if (me._butDone) {
						/* OK 12 OCT 2011 - Fixed <91232> - When a column has combo editor and deleted its value then select new button Done is still dissabled */
						me._butDone.removeClass(me.css.buttonDisabled);
					}
				};
				oValid.errorShowing = function () {
					// do not show error message if another editor has it
					if (!_aNull(me._error) && me._error !== key) {
						return false;
					}
				};
				oValid.errorShown = function (evt, ui) {
					// set current-error flag
					me._error = key;
					if (me._butDone) {
						me._butDone.addClass(me.css.buttonDisabled);
					}
					ui = ui.owner._lbl;
					if (ui) {
						ui.css('zIndex', 99999);
					}
					me._scrollTo(key);
				};
			}
			if (!provider) {
				if (gridCol.dataType === 'bool' && (format === 'checkbox' || (!format && me.grid.options.renderCheckboxes))) {
					provider = new $.ig.EditorProviderCheckbox();
				} else if (col && col.editorType === 'combo') {
					provider = new $.ig.EditorProviderCombo();
				} else if (col && col.editorType === 'rating') {
					provider = new $.ig.EditorProviderRating();
				} else {
					provider = new $.ig.EditorProviderDefault();
				}
			}
			elem = provider.createEditor(me, key, col, me._ti, format, gridCol.dataType, me._val(td));
			elem.addClass(css).css({ marginLeft: (xy.x - _int(td, 'paddingLeft')) + 'px', marginTop: (xy.y - topBorder - _int(td, 'paddingTop')) + 'px' });
			v = elem.igEditorFilter({ 'provider': provider });
			return v;
		},
		_notifyChanged: function () {
			/* Notification about changed value in editor. That should be called by $.ig.EditorProvider
			in order to enable Done button and update data.
			*/
			var e = this._butDone;
			if (e) {
				if (this.findInvalid()) {
					e.addClass(this.css.buttonDisabled);
				} else {
					e.removeClass(this.css.buttonDisabled);
				}
			}
			this._modified = 1;
		},
		// process esc, enter tab keys of igEditor
		_notifyEditorKey: function (e, colKey) {
			/* Notification about keydown event in editor. That should be called by $.ig.EditorProvider
			in order to correctly process Esc, Enter and Tab keys.
			paramType="object" Browser event.
			paramType="string" Key of column. That can be string or number.
			*/
			var but, old, val, next, cur,
				key = e.keyCode,
				esc = key === 27,
				o = this.options, shift;
			if (key !== 9 && key !== 13 && !esc) {
				return;
			}
			cur = this._editors[colKey];
			// _13: skip enter/13 key
			if (!cur || (key === 13 && (e.shiftKey || e.ctrlKey || this._13))) {
				return;
			}
			if (esc) {
				old = cur._oldCellVal;
				val = _filter(cur, 'getValue');
				if (!this._equals(old, val)) {
					_filter(cur, 'setValue', old);
					// revalidate value again: editors like dateEditor may remove some fields (hours, minuted) not exposed in pattern
					if (!this._equals(_filter(cur, 'getValue'), val)) {
						_filter(cur, 'validate');
						// get around bugs in Firefox
						_stop(e);
						return;
					}
				}
				// Note: if focus is set to grid and it is tall, then browser may scroll it to the top!!
				//return this._endEdit(e, null, 200);
				return this._endEdit(e);
			}
			// enter key or cell-edit mode
			if (key === 13 || (!this._adding && o.editMode === 'cell')) {
				if (this.options.horizontalMoveOnEnter) {
					shift = 1;
				} else {
					shift = (key === 9) ? (e.shiftKey ? -1 : 1) : 0;
				}
				return this._nextEdit(e, shift);
			}
			// tab key + row-editing
			next = this._nextEditor(colKey, e.shiftKey);
			if (!_filter(cur, 'validate')) {
				_stop(e);
				return;
			}
			_stop(e);
			try {
				// check if add-new-row in virtual grid and grid failed to render all tds in a row
				if (next && this._adding && !_aNull(this.grid._startColIndex) && !this.grid.cellAt(this._col(next.parent()), 0)) {
					next = null;
				}
			} catch (ex) { next = null; }
			if (next) {
				// scroll to and edit next cell in row
				this._scrollTo(next.parent(), next);
				return;
			}
			but = this._butDone;
			// if no Done/Cancel buttons, then start edit cell in another row
			if (!but || but[0].offsetWidth === 0) {
				return this._nextEdit(e, 0);
			}
			// if Done button is disabled, then set focus to Cancel button
			if (but.hasClass(this.css.buttonDisabled)) {
				but = this._butCancel;
			}
			but[0].focus();
			// used by shift+tab keys
			this._prevEdit = cur;
		},
		_evtArg: function (td, editor, val) {
			var arg = { rowAdding: !!this._adding, columnIndex: this._col(td), rowID: this._row_, columnKey: this._key(td), editor: editor };
			arg.value = _aNull(val) ? null : val;
			return arg;
		},
		// check hidden columns
		// add default values for hidden columns
		_checkHidden: function (vals) {
			var col, key, colG, cols = this.grid.options.columns, i = cols.length;
			while (i-- > 0) {
				colG = cols[i];
				if (colG && colG.hidden) {
					col = this._colSet(null, colG ? (key = colG.key) : null);
					col = (col && _aNull(vals[key])) ? col.defaultValue : null;
					if (col !== null) {
						vals[key] = col;
					}
				}
			}
		},
		// check if mouse was clicked within checkbox image
		_isToggle: function (e) {
			e = e && e.type && e.type.indexOf('click') >= 0 ? e.target : null;
			return e && e.className && e.className.indexOf('ui-icon-check') >= 0;
		},
		// Reduce width of last cell in row for scrollbar width, which may overlap grid.
		// igGrid currently may set paddingRight to large value ~20px for (asuming partially) visible cell, but fully visible cell also may have that large padding.
		// There are also many possible cases, which may require that.
		// Changesets:276093,277095 and Bugs:101650,115607,118770
		_lastTDWidth: function (td, width) {
			// check for padding
			var pad = _int(td, 'paddingRight') > 12,
				// check if cell is last
				div = (pad || !td.next()[0]) ? td.closest('div')[0] : null,
				// check if cell fits in container div
				v = div && td[0].offsetLeft + td[0].offsetWidth > div.clientWidth + 5 ? div.offsetWidth - div.clientWidth : 0;
			if (v > 10) {
				// if horizontal scroller is active, then no need for fix
				div = pad ? null : this._hscroll(1)[0];
				if (!div || div.offsetWidth < div.clientWidth + 3) {
					width -= Math.min(18, v);
				}
			}
			return width;
		},
		// return 1: success or keep editing
		// td: jquery TD, e: event, foc: setFocus, add:addNewRow, height:height of row
		// e: browser event, null, or 1-flag from startEdit
		// foc: request to set focus
		// add: add row
		// height: height of td
		// toggle: request to toggle checkbox
		_startEdit: function (td, e, foc, add, height, toggle) {
			var i, tds, width, arg, editor, val,
				grid = this.grid, prime = grid.options.primaryKey,
				td0 = td ? td[0] : null, but = null, v = false, o = this.options;
			if (!td0) {
				return;
			}
			if (e) {
				// reset temporary automatic primary key to prevent raising multiple events
				delete this._defValue;
				this._delHover();
				// ensure end-edit
				if (this._tds) {
					// after _endEdit grid can be modified, so, reference to td will be wrong
					// save props of td and restore it after _endEdit
					if (!add) {
						td = this._cur(td);
					}
					if (this._endEdit(e, 1)) {
						return 1;
					}
					if (!add) {
						i = this._idForCol(td.col);
						// restore td after _endEdit
						tds = (td.row < 0 || td.col < 0 || i < 0) ? null : td.tbl.children('tbody')[0];
						td = tds ? tds.childNodes[td.row] : null;
						if (td) {
							td = td.childNodes[i];
						}
						if (!td) {
							return;
						}
						td = $(td);
					}
				}
				if (!add && !this._checkRow(td.parent())) {
					return;
				}
				this._row_ = add ? -1 : this._prime(td);
				this._rowIndex = add ? -1 : this._row(td);
				if (!height) {
					height = td[0].offsetHeight;
				}
				if (add || o.editMode === 'row') {
					if (!this._fire('editRowStarting', e, arg = { rowAdding: !!add, rowID: this._row_ })) {
						this._row_ = null;
						this._rowIndex = -3;
						return;
					}
					if (add) {
						this._adding = add;
						if (this._tdAddPrime) {
							i = this._gridCol(prime);
							val = this._defVal(prime, 1);
							this._tdAddPrime.html(i ? grid._renderCell(val, i) : val);
						}
						this._addTR.hide();
						this._newTR.show();
						// synchronize horizontal scroll of header with horizontal scroll of grid-cells
						if (!this._addFixScroll) {
							this._addFixScroll = {
								scroll: function () {
									var cont = grid.scrollContainer()[0], left1 = cont ? cont.scrollLeft : -1, left2 = this.scrollLeft;
									if (!_aNull(left2) && left1 >= 0 && left1 !== left2) {
										cont.scrollLeft = left2;
									}
								}
							};
						}
						this._addTR.closest('div').bind(this._addFixScroll);
					}
					tds = td.parent().children();
					this._evt = e;
					for (i = 0; i < tds.length; i++) {
						td = $(tds[i]);
						if (this._col(td) < 0 || tds[i].offsetWidth < 3) {
							continue;
						}
						td.addClass(this.css.editingCell);
						but = but || td;
						// set focus to TD under mouse
						if (this._startEdit(td, null, foc === 1 || (e && td[0] === td0), add, height, this._isToggle(e) && td[0] === td0)) {
							v = 1;
							foc = null;
						}
					}
					delete this._evt;
					if (v && but && o.showDoneCancelButtons) {
						this._doButtons(but);
					}
					if (v) {
						_stop(e);
						this._fire('editRowStarted', e, arg);
					} else {
						tds.removeClass(this.css.editingCell);
					}
					// change active row and disable selection
					this._sel('act', but);
					// add-new-row may reduce height of TR: ensure that it is not less than height of editor
					if (add && v) {
						// note: Firefox fails to adjust its offsetHeight for padding and border??
						// so, use loop instead of if...
						while (height - this._newTR[0].offsetHeight > 0) {
							if (v) {
								v = null;
								td = $(tds[0]);
								// maximum adjustment/shift for height
								add = _int(td, 'paddingTop') + _int(td, 'paddingBottom') + _int(td, 'borderTopWidth') + _int(td, 'borderBottomWidth') + 1;
							}
							// for Firefox
							if ((add -= 1) < 0) {
								break;
							}
							td.css('height', height - add);
						}
						v = 1;
					}
					return v;
				}
				// cell
				toggle = toggle || this._isToggle(e);
			}
			editor = this.editorForCell(td, 1);
			if (_aNull(this._row_) || !editor) {
				return;
			}
			width = td.outerWidth();
			if (!height) {
				height = td[0].offsetHeight;
			}
			if (!width || !height || !this._fire('editCellStarting', e || this._evt, arg = this._evtArg(td, editor, this._val(td, null, 1)))) {
				return;
			}
			width = this._lastTDWidth(td, width);
			// adjust width/height for shift of editor relative to the left-top corner of cell
			width -= this._xy.dx + 2;
			height -= this._xy.dy;
			if (e) {
				_stop(e);
				td.addClass(this.css.editingCell);
			}
			editor.prependTo(td);
			_filter(editor, 'setSize', Math.max(8, width), Math.max(10, height));
			if (!this._tds) {
				this._tds = {};
			}
			this._tds[this._key(td)] = td;
			v = _filter(editor, 'validator');
			if (v && v._setOption) {
				v._setOption('bodyAsParent', grid.options.fixedHeaders !== false && this._adding);
			}
			_filter(editor, 'setValue', arg.value);
			editor._oldCellVal = _filter(editor, 'getValue');
			this._fire('editCellStarted', e || this._evt, arg);
			if (foc) {
				// scroll to and edit cell, delay of 100 ms can be not enough: request double setFocus in 300ms
				this._scrollTo(td, editor, false, 300, toggle);
			}
			if (e) {
				// change active row and disable selection
				this._sel('act', td);
			}
			return 1;
		},
		// return 1: keep editing
		// e: browser event, null, or 1-flag from endEdit
		// update: request to update grid
		// foc: request to set focus to grid with delay in ms (removed because, if focus is set to grid and it is tall, then browser may scroll it to the top!!)
		//_endEdit: function (e, update, foc) {
		_endEdit: function (e, update) {
			var i, editor, val, key, td, arg, oldVals, stop,
				oldUpdate = update,
				eArg = e || 'undefined',
				add = this._adding,
				tr = null,
				argR = null,
				vals = null,
				tds = this._tds,
				o = this.options;
			// prevent double processing of same event (user showed alert!)
			if (!tds || this._skip) {
				return;
			}
			if (e && e.type !== 'mousedown') {
				_stop(stop = e);
			}
			// flag for row-editing and request to remove editingCell css
			i = add || o.editMode === 'row';
			if (!this._modified && !add) {
				update = false;
			}
			if (i) {
				// check if there is already error message
				for (key in tds) {
					if (tds.hasOwnProperty(key) && e && !_aNull(td = tds[key])) {
						if (oldUpdate && !_aNull(editor = this.editorForCell(td)) && editor[0] && editor[0].offsetWidth && editor.igEditorFilter('hasInvalidMessage')) {
							if (!stop) {
								_stop(stop = e);
							}
							// scroll to and set focus to editor
							this._scrollTo(td, editor, 1);
							return 1;
						}
					}
				}
				// vals=object is a flag that instead of setCellValue, "vals"-container of changes should be filled
				// fill defaultValues for readOnly columns, because there are no editors for them and grid will not be updated with defaults
				vals = this._addReadOnly(add);
				oldVals = {};
				// trigger validation and check if values are valid
				for (key in tds) {
					if (tds.hasOwnProperty(key) && oldUpdate && !_aNull(td = tds[key]) && !_aNull(editor = this.editorForCell(td))) {
						vals[key] = _filter(editor, 'getValue');
						oldVals[key] = editor._oldCellVal;
						// true for 2nd param will prevent showing error message
						if (e && editor[0] && editor[0].offsetWidth && !_filter(editor, 'validate', !o)) {
							if (!stop) {
								_stop(stop = e);
							}
							if (o) {
								// scroll to and set focus to editor
								this._scrollTo(td, editor, 1);
							}
							// flag for failed validation
							o = null;
						}
					}
				}
				// row validation failed
				if (e && !o) {
					return 1;
				}
				if (add) {
					this._checkHidden(vals);
				}
				// prevent double processing of same event (user showed alert!)
				this._skip = 1;
				if (!this._fire('editRowEnding', eArg, argR = { oldValues: oldVals, values: vals, rowID: this._row_, keepEditing: false, update: !!update, rowAdding: !!add })) {
					argR.update = update = oldUpdate = false;
				}
				delete this._skip;
				if (e && argR.keepEditing) {
					return 1;
				}
			}
			// remove editingCell from all TDs in editing row
			if (i) {
				this._td().parent().children().removeClass(this.css.editingCell);
			}
			// tr-flag reference to TR if value of cell in row was modified
			tr = null;
			for (key in tds) {
				if (tds.hasOwnProperty(key) && !_aNull(td = tds[key]) && !_aNull(editor = this.editorForCell(td))) {
					// cell editing
					if (!vals) {
						if (e && oldUpdate && !_filter(editor, 'validate')) {
							if (!stop) {
								_stop(stop = e);
							}
							// scroll to and set focus to editor
							this._scrollTo(td, editor, 1);
							return 1;
						}
						td.removeClass(this.css.editingCell);
					}
					// prevent double processing of same event (user showed alert!)
					this._skip = 1;
					// 1-hide buttons
					this._doButtons(1);
					val = _filter(editor, 'getValue');
					arg = this._evtArg(td, editor, val);
					arg.update = !!update;
					arg.oldValue = editor._oldCellVal;
					if (!vals) {
						arg.keepEditing = false;
					}
					if (!this._fire('editCellEnding', eArg, arg)) {
						arg.value = editor._oldCellVal;
					}
					if (oldUpdate && !vals && e && arg.keepEditing) {
						_stop(e);
						// scroll to and set focus to editor
						this._scrollTo(td, editor, 1);
						delete this._skip;
						return 1;
					}
					editor.igEditorFilter('remove');
					val = arg.value;
					if (update && vals) {
						vals[key] = val;
					}
					// (tr!=null) flag that at least 1 cell in row was modified
					// _val will update vals: must keep it as 1st condition
					if (update && this._val(td, arg, vals) !== undefined && !tr && !this._equals(val, editor._oldCellVal)) {
						tr = td.parent()[0];
					}
					delete tds[key];
					this._fire('editCellEnded', eArg, arg);
					delete this._skip;
				}
			}
			// prevent double processing of same event (user showed alert!)
			this._skip = 1;
			this._modified = this._prevEdit = this._tds = this._error = null;
			if (add) {
				this._addTR.closest('div').unbind(this._addFixScroll);
				this._addTR.show();
				this._newTR.hide();
				this._adding = null;
				if (update && this._fire('rowAdding', eArg, argR)) {
					this._update(vals);
					// refresh selection
					this._sel('refresh');
					this._fire('rowAdded', eArg, argR);
					// prepare default value of primaryKey for next add
					this._addRowNum++;
				}
			} else if (tr) {
				this._update(this._row_, tr, vals);
			}
			this._fire('editRowEnded', eArg, argR);
			// remove pointers to currently editing rowIndex and rowKey
			this._rowIndex = -3;
			this._row_ = null;
			// enable selection
			this._sel('end', e);
			// Note: if focus is set to grid and it is tall, then browser may scroll it to the top!!
			//this._focusGrid(foc);
			delete this._skip;
		},
		_scrollDiv: function () {
			var me = this, div = me._scrl, tbl = me.grid.element;
			if (div && me._sEvts) {
				return div;
			}
			me._scrl = div = tbl ? tbl.parent() : null;
			if (div && !me._sEvts && div.is('div')) {
				me._scrollX = div.scrollLeft;
				div.bind(me._sEvts = {
					scroll: function (e) {
						me._onEvt(e, 9);
					}
				});
			}
			return div;
		},
		// td: reference to TD or column key
		// editor: reference to igEditor (null if td is key)
		// checkError: false/null/undefined-skip validation/adjustments for error message
		// delay: undefined or extra milliseconds to repeat set focus
		// toggle: request to toggle checkbox
		_scrollTo: function (td, editor, checkError, delay, toggle) {
			var cur, rect, div, x, y, lbl, xy, shift, add = this._adding, errorWidth = 0, errorHeight = 0, foc = editor;
			// check if instead of td the column key is used and find td and editor
			if (!editor && typeof td === 'string') {
				td = this._tds ? this._tds[td] : null;
				if (!td) {
					return;
				}
				editor = this.editorForCell(td);
				if (!editor) {
					return;
				}
				checkError = 1;
			}
			// request to set focus to editor
			if (foc) {
				editor.igEditorFilter('setFocus', 100, toggle);
				// delay of 100 ms can be not enough: request to repeat setFocus
				if (delay) {
					editor.igEditorFilter('setFocus', delay);
				}
			}
			if (editor && checkError) {
				// get reference to error label used by validator
				lbl = _filter(editor, 'validator');
				lbl = lbl ? lbl._lbl : null;
				// if validator is external to td, then skip error label adjustments
				// validator._lbl._width0 contains offsetWidth of label before animation
				if (lbl && (add || td.has(lbl).length !== 0)) {
					errorWidth = lbl._width0;
					errorHeight = lbl._height0;
					cur = this._cur(td);
				}
			}
			div = this._scrollDiv();
			xy = td.offset();
			rect = div.offset();
			div = div[0];
			rect.w = div.clientWidth;
			rect.h = div.clientHeight;
			xy.w = td.outerWidth();
			xy.h = td.outerHeight();
			x = xy.left - rect.left;
			y = xy.top - rect.top;
			// adjust for width of validion error message
			if (errorWidth > xy.w) {
				// save original index of column
				delay = cur.col;
				shift = xy.w;
				xy.w = (errorWidth += 5);
				// _nextTD sets "cur.td" to the TD located on right side from current td
				while (shift < errorWidth && this._nextTD(cur, 1)) {
					shift += cur.td[0].offsetWidth;
				}
				// condition when right edge of error label is outside of table
				if ((shift -= errorWidth) < 0) {
					// do not allow left edge of error message outside of table
					if ((xy.x += shift) < 0 && !add) {
						shift -= xy.x;
						xy.x = 0;
					}
					// shift error message to right
					lbl.css('marginLeft', shift + 'px');
				}
			}
			// do not allow validion error message below table
			if (!add && errorHeight > 1 && cur.row > 1) {
				// restore original index of column
				cur.col = delay;
				shift = errorHeight += 3;
				// _nextTD sets "cur.td" to the TD located below current td
				while (shift > 0 && this._nextTD(cur, 0)) {
					shift -= cur.td[0].offsetHeight;
				}
				if (shift > 0) {
					// shift error message above cell
					lbl.css('marginTop', '-' + errorHeight + 'px');
					y -= errorHeight;
				}
			}
			if (div.nodeName !== 'DIV') {
				return;
			}
			if (x > 0) {
				if ((x += xy.w - rect.w) < 0) {
					x = 0;
				}
			}
			// check vertical visibility
			if (y > 0) {
				if ((y += errorHeight + xy.h - rect.h) < 0) {
					y = 0;
				}
			}
			// adjust scroll
			if (x !== 0) {
				this._hscroll()[0].scrollLeft += x;
			}
			if (!add && y !== 0) {
				div.scrollTop += y;
			}
		},
		// return 1: drop down (single row), -1: drop up (last row), 0: use calculations
		_upDown: function (td) {
			td = td.parent();
			// down
			if (td.prev().length < 1) {
				return 1;
			}
			// use calculations
			if (td.next().length > 0) {
				return 0;
			}
			td = this.grid.element;
			var par = td.parent()[0];
			// use calculations or up
			return (par && par.clientHeight - td[0].offsetHeight > 25) ? 0 : -1;
		},
		// minimum width of container where delete/done/cancel buttons are located (to calculate marginLeft of button)
		_minWidth: function (td, div) {
			var par = div[0];
			// if div a child of grid, then validate width of parent
			if (par.id.indexOf('_container') < 0 && div.parents('.ui-iggrid').length > 0) {
				par = div.parent()[0];
			}
			div = Math.min(div[0].clientWidth || div[0].offsetWidth, par.clientWidth || par.offsetWidth);
			return td ? Math.min(div, td.closest('table')[0].clientWidth) : div;
		},
		// td: 1-hide buttons, 2-remove buttons, [object]-parent TD for buttons, null-adjust scroll
		_doButtons: function (td) {
			var xyTD, xyBut, htBut, htTD, txt, div, cont, scroll, down, x,
				oldOverflow = this._oldOverflow,
				add = this._adding,
				css = this.css,
				grid = this.grid.element,
				buts = this._buts;
			if (td === 1 || td === 2) {
				if (oldOverflow) {
					delete this._oldOverflow;
					oldOverflow.e.css('overflowX', oldOverflow.x).css('overflowY', oldOverflow.y);
				}
				if (buts) {
					buts.hide();
					if (td === 2) {
						buts.remove();
						this._buts = null;
					}
				}
				if (td === 2 && this._delBut) {
					this._delHover();
					delete this._delBut;
				}
				return;
			}
			if (td) {
				cont = grid.parent();
				/* Bug 122934: temporary disable overflow of container */
				x = cont[0] ? Math.max(cont[0].scrollHeight, cont[0].offsetHeight) : -1;
				if (x >= 0 && x < 20) {
					this._oldOverflow = { e: cont, x: cont.css('overflowX'), y: cont.css('overflowY') };
					cont.css('overflowX', 'visible').css('overflowY', 'visible');
				}
				if (!buts) {
					buts = this._buts = $('<div />').css('position', 'absolute').addClass(css.buttonContainer).attr('unselectable', 'on').prependTo(cont);
					// note: use _ti+1, because editors should get focus on external Tab before buttons
					this._butDone = x = $('<span />').addClass('done_id').addClass(css.button).addClass(css.doneButton).attr('unselectable', 'on').attr('tabIndex', this._ti + 1).attr('title', this._loc('done', 1)).appendTo(buts).bind(this._evts);
					$('<span />').css('display', 'inline-block').addClass(css.doneIcon).attr('unselectable', 'on').appendTo(x);
					txt = this._loc('done');
					if (txt) {
						$('<span />').css('display', 'inline-block').attr('unselectable', 'on').html(txt).appendTo(x);
					} else {
						x.addClass(css.buttonIconOnly);
					}
					this._butCancel = x = $('<span />').addClass(css.button).addClass(css.cancelButton).attr('unselectable', 'on').attr('tabIndex', this._ti + 1).attr('title', this._loc('cancel', 1)).appendTo(buts).bind(this._evts);
					$('<span />').css('display', 'inline-block').addClass(css.cancelIcon).attr('unselectable', 'on').appendTo(x);
					txt = this._loc('cancel');
					if (txt) {
						$('<span />').css('display', 'inline-block').attr('unselectable', 'on').html(txt).appendTo(x);
					} else {
						x.addClass(css.buttonIconOnly);
					}
					buts._height = buts[0].offsetHeight;
					buts.css('width', Math.max(buts[0].clientWidth + 1, (buts._width = buts[0].offsetWidth) - 3));
				}
			}
			if (!buts) {
				return;
			}
			div = this._scrollDiv();
			// reset x/y location and adjust y location
			if (td) {
				x = Math.max(grid[0].offsetHeight, grid.parent()[0].offsetHeight);
				buts.show();
				if (add && this.findInvalid() === null) {
					this._butDone.removeClass(css.buttonDisabled);
				} else {
					this._butDone.addClass(css.buttonDisabled);
				}
				buts.css({ marginLeft: (this._butsX = 0) + 'px', marginTop: '0px' });
				xyBut = buts.offset();
				htBut = buts[0].offsetHeight;
				xyTD = td.offset();
				htTD = td[0].offsetHeight;
				xyTD.top -= xyBut.top;
				scroll = div[0].scrollTop;
				// compare available space below and above row
				// if (down>0), then dropDown, else dropUp
				down = add ? 1 : this._upDown(td);
				if (!down) {
					down = div[0].clientHeight + scroll - xyTD.top - htTD - 5 - htBut;
					if (down < 1 && down > xyTD.top - htBut - scroll - 5) {
						down = 1;
					}
				}
				down = down > 0 ? (xyTD.top + htTD + 5) : (xyTD.top - htBut - 5);
				// ensure that buttons do not overflow bounds of grid
				if (down + htBut > x) {
					if (down + htBut < x + 6) {
						down = x - htBut - 2;
					} else {
						down -= 10 + htBut + htTD;
					}
					down = Math.max(0, down);
				}
				buts.css({ marginTop: down + 'px' });
				// add-button and data are located in same TABLE
				this._butsY = (add && grid.has(this._addTR).length === 1) ? down : 0;
			}
			// adjust x location
			if ((x = this._minWidth(td, div) - (buts.offset().left + buts._width + 3 - div.offset().left)) !== 0) {
				buts.css('marginLeft', (this._butsX += x) + 'px');
			}
			if (add && this.grid.options.fixedHeaders !== false) {
				buts.css('marginTop', (this._butsY + div[0].scrollTop + 2) + 'px');
			}

		},
		_isEditor: function (e) {
			var end, el, editor, key, td, tds = this._tds, o = this.options;
			if (!tds) {
				return;
			}
			td = this._findCell(e);
			if (td && o.editMode === 'row' && (this._row(td) === this._rowIndex)) {
				return 1;
			}
			end = this.grid.element[0];
			for (key in tds) {
				if (tds.hasOwnProperty(key)) {
					td = tds[key];
					if (td) {
						editor = this.editorForCell(td);
						if (editor) {
							el = e;
							editor = editor[0];
							while (el && el !== end) {
								if (el === editor) {
									return 1;
								}
								el = el.parentNode;
							}
						}
					}
				}
			}
		},
		// return jquery TD for active cell to start edit
		_aCell: function () {
			var td, i = -1, sel = this._sel('get');
			td = sel ? sel.activeCell() : null;
			if (td) {
				return td.element;
			}
			td = sel ? sel.activeRow() : null;
			if (td) {
				td = td.element[0].childNodes;
				while (++i < td.length) {
					if (td[i].offsetWidth > 0) {
						return $(td[i]);
					}
				}
			}
		},
		// flag: "get"-return igGridSelection,
		//   "refresh"-refresh selection
		//   "wait"-return 1 if selection is enabled and td is not selected
		//   "end"-enable selection and raise sel._mouseDown(td)
		//   "act"-disable selection and activate selection
		// td: [object]-reference to jquery-TD (request to change active row/cell in selection)
		_sel: function (flag, td) {
			var i, obj, elem, sel = this.grid.element.data('igGridSelection');
			if (!sel || flag === 'get') {
				return sel;
			}
			if (flag === 'end') {
				delete sel._suspend;
				if (td && td.type === 'mousedown') {
					sel._mouseDown(td);
				}
				return;
			}
			if (flag === 'wait') {
				obj = sel.selectedRows();
				i = obj ? obj.length : 0;
				while (i-- > 0) {
					elem = obj[i].element;
					if (elem && elem.has(td).length) {
						return;
					}
				}
				obj = sel.selectedCells();
				i = obj ? obj.length : 0;
				while (i-- > 0) {
					elem = obj[i].element;
					if (elem && elem[0] === td[0]) {
						return;
					}
				}
				obj = sel.selectedRow();
				elem = obj ? obj.element : null;
				if (elem && elem.has(td).length) {
					return;
				}
				obj = sel.selectedCell();
				elem = obj ? obj.element : null;
				if (elem && elem[0] === td[0]) {
					return;
				}
				return 1;
			}
			if (flag === 'refresh') {
				return sel._refresh();
			}
			if (flag === 'act') {
				sel._suspend = 1;
				if (!td) {
					return;
				}
				if (sel.options.mode === 'row') {
					return sel._activateRow(sel._realActiveRow = { element: td.parent(), index: this._row(td) });
				}
				td = sel._cellFromElement(td[0], this._row(td), this._col(td));
				return sel._activateCell(td);
			}
		},
		_doDelete: function (e, tr) {
			var i, sel, arg;
			// delete-key
			if (!tr) {
				sel = this._sel('get');
				arg = sel ? sel.selectedRows() : null;
				for (i = 0; i < (arg ? arg.length : 0); i++) {
					this._doDelete(e, arg[i].element);
				}
				arg = sel ? sel.selectedRow() : null;
				if (arg) {
					this._doDelete(e, arg.element);
				}
			}
			if (!tr || tr[0]._deleted || !this._fire('rowDeleting', e, arg = { element: tr, rowID: this._prime($(tr.children()[0])) })) {
				return;
			}
			tr[0]._deleted = 1;
			this._delHover();
			this._update(arg.rowID, tr[0]);
			if (e) {
				// refresh selection
				this._sel('refresh');
			}
			this._fire('rowDeleted', e, arg);
			return 1;
		},
		_checkRow: function (tr) {
			tr = (tr && tr.index() < this.grid.rows().length) ? tr[0] : null;
			/* OK 10/11/2011 90312 - added a check got the 'data-grouprow' addtribute to avoid updating on a group row. */
			/* DAY 10/11/2011 91369, 90338 - Making sure row is in tbody so summary and header rows don't show delete button */
			/* DAY 10/11/2011 90340 - TR should only be returned if event source is part of this grid's table. */
			return (tr && tr.className.indexOf(this.grid.css.deletedRecord) < 0 && !$(tr).attr('data-grouprow') && $(tr).parent().is("tbody") && $(tr).parent()[0] === this.grid.element.find('tbody')[0]) ? tr : null;
		},
		_delHover: function (src) {
			var i, v, left, iBut, iTD, iDiv, iScroll, shift, xyBut, xyTD, div, tds, td, down,
				but = this._delBut,
				tr = this._delTR,
				css = this.css;
			if (but) {
				this._doHov(this._isSrc(but, src) ? but[0] : null, css.buttonHover);
			}
			src = src ? this._checkRow($(src).closest('tr')) : null;
			if (src === tr || (!tr && !src)) {
				return;
			}
			this._delTR = src;
			if (!but) {
				this._delBut = but = $('<span />').css('position', 'absolute').addClass(css.deleteButton).attr('unselectable', 'on').attr('title', this._loc('deleteRow', 1));
				$('<span />').css('display', 'inline-block').addClass(css.deleteIcon).attr('unselectable', 'on').appendTo(but);
				v = this._loc('deleteRow');
				if (v) {
					$('<span />').css('display', 'inline-block').attr('unselectable', 'on').html(v).appendTo(but);
				}
			}
			// remove delete-button from old hover-td
			if (tr) {
				but.remove();
			}
			// insert delete-button into new hover-td
			if (!src) {
				return;
			}
			i = this._colShift(null, src) - 1;
			tds = src.childNodes;
			while ((i += 1) < tds.length) {
				if (tds[i].offsetWidth > 0) {
					break;
				}
			}
			src = tds[i];
			if (!src) {
				return;
			}
			td = $(src);
			// attempt to get around Android when child in TD never gets its own events,
			// append delete-button to top DIV and use left/top instead of marginTop/Left
			div = this.grid.element.parent();
			// mouseup: get around failure of igGridSelection to check for delete-button
			but.css({ marginLeft: '0px', marginTop: '0px' }).prependTo(div).bind(this._evts).mouseup(function (e) { _stop(e); });
			xyBut = but.offset();
			xyTD = td.offset();
			iBut = but[0].offsetHeight;
			iTD = src.offsetHeight;
			shift = xyTD.top - xyBut.top;
			down = shift + Math.round((iTD - iBut) / 2);
			iScroll = div[0].scrollLeft;
			iDiv = this._minWidth(td, div);
			iBut = but[0].offsetWidth;
			left = iDiv + iScroll - iBut - _int(td, 'paddingLeft') - _int(td, 'borderLeftWidth') - 5;
			but.css({ marginTop: down + 'px', marginLeft: left + 'px' });
			// get around bugs in IE, if text-align is not left
			if ((shift = iBut + but.offset().left - xyTD.left - iScroll - iDiv + 5) > 0) {
				but.css('marginLeft', (left - shift) + 'px');
			}
		},
		_isSrc: function (e, src) {
			if (e && src && (e[0] === src || e[0] === src[0] || e.has(src).length > 0)) {
				return e;
			}
		},
		_doHov: function (e, css) {
			var hov = this._hov;
			if (hov && css && hov.e[0] === e) {
				return 1;
			}
			if (hov) {
				hov.e.removeClass(hov.css);
			}
			if (css) {
				this._hov = { e: e = $(e), css: css };
				return e.addClass(css);
			}
			delete this._hov;
		},
		// attempt to get around fantom scrolling in Android and other touch
		// check(bool): return true if move is not allowed
		_noMove: function (check) {
			var x, y, div, e, id, noMove = this._nm;
			if (noMove === 1 || (check && !noMove)) {
				return;
			}
			if (!noMove) {
				id = this.grid.element[0].id;
				// scroll container
				div = $('#' + id + '_scroll');
				if (div.length !== 1) {
					div = $('#' + id + '_displayContainer');
				}
				if (!div.length) {
					this._nm = 1;
					return;
				}
			}
			// noMove.div/ex/ey used to speed up codes
			noMove = this._nm = this._nm || { x: 0, y: 0, div: div[0] };
			// possible horizontal scroller
			e = noMove.ex = noMove.ex || $('#' + id + '_hscroller')[0] || $('#' + id + '_horizontalScrollContainer')[0] || noMove.div;
			x = noMove.ex.scrollLeft;
			// possible vertical scroller
			noMove.ey = noMove.ey || $('#' + id + '_scrollContainer')[0] || noMove.div;
			y = noMove.ey.scrollTop;
			if (check) {
				// if grid was scrolled, then return true
				return Math.abs(noMove.x - x) > 1 || Math.abs(noMove.y - y) > 1;
			}
			noMove.x = x;
			noMove.y = y;
		},
		// process events
		// type: 1-mousedown, 2-click, 3-dblclick, 4-keydown, 5-focus, 6-blur, 7-mousemove, 8-mouseleave, 9-scroll, 11-touch
		_onEvt: function (e, type) {
			var td, cancel, done, addTD, tbody,
				me = this,
				now = _now(),
				touch = me._hovTouch,
				src = e ? e.target : null,
				k = e ? e.keyCode : 0,
				x = me._lastEvt,
				css = me.css,
				delBut = me._delBut,
				newTR = me._newTR,
				addTR = me._addTR,
				tbl = me.grid.element,
				o = me.options, tr, editor;

			if (o.excelNavigationMode === true && this._isEditor(src)) {
				td = this._findCell(src);
				if (td) {
					editor = this.editorForCell(td).data('igEditor');
					if ([39, 37].indexOf(k) >= 0) {
						if ((editor._old === null && editor.value() === null) ||
								(editor._old !== null && editor.value() !== null && editor._old.toString() === editor.value().toString())) {
							//Left arrow, to the left cell
							if (k === 37) {
								this._nextEdit(e, -1);
							}
							//Right arrow, to the right cell
							if (k === 39) {
								this._nextEdit(e, 1);
							}
							return;
						}
					}
					//Arrow up, go on the upper row
					if (k === 38) {
						this._nextEdit(e, '-tr1');
						return;
					}
					//Arrow down, go on the next row
					if (k === 40) {
						this._nextEdit(e, 0);
						return;
					}
				}
			}
			// _13: skip enter/13 key
			if (!tbl || !src || ((type < 4 || k === 13) && (e.shiftKey || e.ctrlKey)) || (k === 13 && me._13)) {
				return;
			}
			// Do not process same event twice.
			// Same events are attached to DIV and its children (buttons) and _onEvt can be called twice.
			// Some browsers (Android) may fail to process button events attached to DIV or to child, so, both handlers are needed.
			if (type !== 9 && x && x.src === src && x.type === type && x.x === e.pageX && x.y === e.pageY && now < x.now + 500) {
				return;
			}
			me._lastEvt = { src: src, now: now, type: type, x: e.pageX, y: e.pageY };
			// touchstart or MSPointerDown
			if (type === 11) {
				// MSPointerDown pointerType=2: touch event
				touch = e.originalEvent.pointerType;
				if (!me._tds && !(touch && touch !== 2)) {
					me._hovTouch = (o.enableDeleteRow && o.editMode === 'row') ? (me._delTR || 1) : null;
					me._noMove();
				}
				return;
			}
			// 8-mouseleave
			if (type === 8) {
				if (touch) {
					return;
				}
				this._delHover();
				return this._doHov();
			}
			x = delBut ? me._isSrc(delBut, src) : null;
			tbody = tbl.find('tbody');
			// mousemove
			if (type === 7) {
				if (o.enableDeleteRow) {
					if (x) {
						delBut.addClass(me.css.buttonHover);
					} else {
						if (delBut) {
							delBut.removeClass(me.css.buttonHover);
						}
						this._delHover((this._tds || !this._isSrc(tbody, src) || this._noMove(true)) ? null : src);
					}
				}
				return;
			}
			if (x && type < 4) {
				if (type === 2) {
					_stop(e);
					if (this._doDelete(e, $(this._delTR))) {
						delete this._delTR;
					}
				}
				return;
			}
			addTD = addTR ? addTR.children()[addTR.children().length - 1] : null;
			if (k === 46) {
				return o.enableDeleteRow ? this._doDelete(e) : null;
			}
			// 9-scroll
			if (type === 9) {
				if (this._nm && !this._noMove(true)) {
					return;
				}
				this._delHover();
				x = src.scrollLeft;
				if (this._tds) {
					this._doButtons();
				}
				if (addTR && x !== this._scrollX) {
					$(addTD).css('paddingLeft', (this._addLeft + x) + 'px');
				}
				this._scrollX = x;
				return;
			}
			if (this._isSrc(addTR, src)) {
				if (!this._isSrc($(addTD), src)) {
					return;
				}
				this._delHover();
				src = addTD;
				if (type === 5) {
					return $(src).addClass(css.addRowActive);
				}
				if (type === 6) {
					return $(src).removeClass(css.addRowActive);
				}
				if (type === 7) {
					return this._doHov(src, css.addRowHover);
				}
				if (k === 32 || k === 13) {
					// add-new-row
					return this.startAddRowEdit(e);
				}
			}
			// 27-esc keydown
			if (k === 27) {
				// Note: if focus is set to grid and it is tall, then browser may scroll it to the top!!
				//return this._endEdit(e, null, 50);
				return this._endEdit(e);
			}
			// check if it is event coming from Done/Cancel buttons or their container
			done = this._isSrc(this._butDone, src);
			cancel = this._isSrc(this._butCancel, src);
			td = this._isSrc(this._buts, src);
			if (td || done || cancel) {
				// check for Done/Cancel buttons
				if (done || cancel) {
					if (type < 5) {
						_stop(e);
					}
					src = done || cancel;
					// type: 1-mousedown, 2-click, 3-dblclick, 4-keydown, 5-focus, 6-blur, 7-mousemove, 8-mouseleave, 9-scroll
					if (type === 2) {
						if (src.hasClass(css.buttonDisabled)) {
							return;
						}
						// Note: if focus is set to grid and it is tall, then browser may scroll it to the top!!
						//this._endEdit(e, done, 1);
						this._endEdit(e, done);
					} else if (type === 7 && !src.hasClass(css.buttonDisabled)) {
						this._doHov(src[0], css.buttonHover);
					} else if (type === 5) {
						src.addClass(css.buttonActive);
					} else if (type === 6) {
						src.removeClass(css.buttonActive);
					} else if (k === 13 || k === 32) {
						// Note: if focus is set to grid and it is tall, then browser may scroll it to the top!!
						//this._endEdit(e, done, 1);
						this._endEdit(e, done);
					} else if (k === 9) {
						if (e.shiftKey) {
							td = (done || this._butDone.hasClass(css.buttonDisabled)) ? null : this._butDone;
						} else {
							if (!td) {
								return;
							}
							td = this._butCancel;
						}
						if (td) {
							td[0].focus();
							return;
						}
						src = this._lastEditor();
						td = src ? src.parent() : null;
						if (td) {
							this._scrollTo(td, src);
						}
					}
				}
				return;
			}
			// newTR-flag to trigger addNewRow action
			// mouse events
			if (newTR && type < 4) {
				// mouse on add-row while editing
				if (this._isSrc(newTR, src)) {
					return;
				}
				// inside of AddNewRow label
				if (this._isSrc(addTR, src)) {
					// only click on AddNewRow can start edit mode
					if (type === 2) {
						if (o.editMode === 'rowedittemplate') {
							this._startEditRowTemplate(e, tr, td, 1);
						} else {
							this.startAddRowEdit(e);
						}
					}
					return;
				}
			}
			// mousedown outside of grid-table
			if (type < 4 && !this._isSrc(tbody, src)) {
				// check for DIV
				if (this._tds && src !== tbl.parent()[0] && src !== this._div()[0] && src !== this._hscroll(1)[0]) {
					// header, footer, etc.
					this._endEdit(e);
				}
				return;
			}
			// 13-enter keydown
			if (k === 13) {
				this._nextEdit(e, 0);
				if (this._tds) {
					return;
				}
			}
			if (this._isEditor(src)) {
				return;
			}
			td = this._findCell(src);
			// stop editing
			// 1-mousedown, 2-click, 3-dblclick
			if (this._tds && type < 4 && (type > 1 || td)) {
				if (this._endEdit(e, this._adding ? null : 1)) {
					return;
				}
			}
			// mousedown
			if (type === 1) {
				// check if td is selected
				if (td && this._sel('get')) {
					this._waitSel = this._sel('wait', td);
				}
				return;
			}
			// start editing
			// 2-click, 3-dblclick
			x = o.editMode === 'cell';
			src = o.startEditTriggers;
			if (src && !this._tds && (x || (o.editMode === 'row' || o.editMode === 'rowedittemplate'))) {
				if (!src.toLowerCase) {
					src = src.toString();
				}
				src = src.toLowerCase();
				if ((k === 113 && src.indexOf('f2') >= 0) || (k === 13 && src.indexOf('enter') >= 0)) {
					td = this._aCell();
				} else if (src.indexOf(e.type) < 0 || (type === 2 && src.indexOf('dbl') >= 0)) {
					td = null;
				}
				if (touch && type < 3 && touch !== me._delTR) {
					// edit only row which has "delete" button
					return;
				}
				// if td is not require selection, then start editing

				if (td && (this._isToggle(e) || ((!this._waitSel || type === 4) && !this._sel('wait', td)))) {
					if (o.editMode === 'rowedittemplate' && td.parent().attr('data-grouprow') !== "true") {
						this._startEditRowTemplate(e, tr, td);
						return;
					}
					if (this._startEdit(td, e, x)) {
						return;
					}
				}
			}
		},
		_startEditRowTemplate: function (e, tr, td, addNewRow) {
			var dialog = $('#' + this.grid.container().attr('id') + '_ret');
			tr = !_aNull(td) && td.parent().length > 0 ? td.parent() : tr;
			if (this._checkRow(tr) || addNewRow) {
				if (dialog[0] === undefined) {
					this._renderRowEditDialog(e, tr);
				}
				return this._openRowEditDialog(e, tr);
			}
			return 0;
		},
		_calcRowDialogLeftTop: function (dialog) {
			var left, top, pos, h, w, bh, dh, dw, bw,
				block = $('#' + this.grid.container().attr('id') + '_block_ret'),
				rootContainer;
			if (this.element.closest(".ui-iggrid-root").data('igHierarchicalGrid')) {
				rootContainer = this.element.closest(".ui-iggrid-root").data('igHierarchicalGrid').rootWidget().container();
			} else {
				rootContainer = this.grid.container();
			}
			pos = rootContainer.offset();
			left = pos.left;
			top = pos.top;
			if (block.outerWidth() !== rootContainer.outerWidth()) {
				block.css('width', rootContainer.outerWidth());
			}
			if (block.outerHeight() !== rootContainer.outerHeight()) {
				block.css('height', rootContainer.outerHeight());
			}
			// hide any error messages that are shown
			$('#' + this.grid.container().attr('id') + '_dialog_error').hide();
			block.css({left: left, top: top}).fadeToggle();
			// show the actual dialog
			w = rootContainer.outerWidth();
			h = rootContainer.outerHeight();
			// calculate browser height and width, and if the grid's w  & h exceed the browser ones,
			// position the advanced filtering dialog
			// so that it can be seen on screen
			bw = $(window).width();
			bh = $(window).height();
			if (w + left > bw) {
				w = w - (w + left - bw);
			}
			if (w <= 0) {
				w = rootContainer.outerWidth();
			}
			if (h + top > bh) {
				h = h - (h + top - bh);
			}
			if (h <= 0) {
				h = rootContainer.outerHeight();
			}
			dh = parseInt(this.options.rowEditDialogHeight, 10);
			dw = parseInt(this.options.rowEditDialogWidth, 10);
			if (isNaN(dh) || dh <= 0) {
				dh = dialog.outerHeight();
			}
			if (isNaN(dw) || dw <= 0) {
				dw = dialog.outerWidth();
			}
			top = top + parseInt(h / 2, 10) - dh / 2;
			left = left + parseInt(w / 2, 10) - dw / 2;
			top = top < 0 ? pos.top : top;
			left = left < 0 ? pos.left : left;
			dialog
				.css({left: left,
					top: top})
				.fadeToggle($.proxy(this._setResizableEnv, this));
		},
		_getColumnSettingsByKey: function (colKey) {
			var i;
			for (i = 0; i < this.options.columnSettings.length; ++i) {
				if (this.options.columnSettings[i].columnKey === colKey) {
					return this.options.columnSettings[i];
				}
			}
			return null;
		},
		_doType: function (type, val) {
			if (type === 'text') {
				type = 0;
			}
			if (type === 'mask') {
				type = 1;
			}
			if (type === 'date') {
				type = 2;
			}
			if (type === 'datepicker') {
				type = 3;
			}
			if (type === 'numeric') {
				type = 4;
			}
			if (type === 'currency') {
				type = 5;
			}
			if (type === 'percent') {
				type = 6;
			}
			if (typeof type !== 'number' || type < 0 || type > 6) {
				if (typeof val === 'number') {
					type = 4;
				} else if (val && val.getMonth) {
					type = 2;
				} else {
					type = 0;
				}
			}
			this._type = type;
			return type;
		},
		_fillRowEditDialogTable: function (event_tr) {
			var tableBody, cols = this.grid.options.columns, i, tr, input, colVal, colSettings,
				newColSettings, colKey, templateData, editorOptions,
				rowEditDialogRowTemplateID = this.options.rowEditDialogRowTemplateID, f = this,
				valChanged,
				buttonId = '#' + this.grid.container().attr('id') + '_igButton', parent;

			tableBody = $('#' + this.grid.container().attr('id') + '_ret table tbody');
			tableBody.empty();
			valChanged = function (evt, ui) {
				setTimeout(function () {
					f._rowEditDialogValidatorsChanged(evt);
				}, 50);
			};
			for (i = 0; i < cols.length; ++i) {
				templateData = [];
				colKey = cols[i].key;
				colSettings = this._getColumnSettingsByKey(colKey);
				if (colSettings) {
					editorOptions = colSettings.editorOptions;
				}
				if (event_tr) {
					colVal = this._getVal(event_tr.data().id, colKey);
				} else {
					colVal = this._defVal(colKey, true);
				}
				//Do not render columns when showReadonlyEditors is FALSE and the column is read only
				if ((colSettings && colSettings.readOnly && !this.options.showReadonlyEditors) || (cols[i].hidden)) {
					continue;
				}
				templateData.push({headerText: cols[i].headerText, dataKey: colKey});
				if (rowEditDialogRowTemplateID) {
					tr = $($.ig.tmpl($('#' + rowEditDialogRowTemplateID).html(), templateData));
				} else {
					tr = $($.ig.tmpl(this.options.rowEditDialogRowTemplate, templateData));
				}
				tr.appendTo(tableBody);
				input = $(tr.find('>td[data-key] input')[0]);
				//If no column settings, then create editors based on the datatype
				if (colSettings === null || colSettings === undefined) {
					if (cols[i].dataType === "date") {
						colSettings = {
							dateInputFormat: cols[i].format,
							dateDisplayFormat: cols[i].format
						};
					} else if (cols[i].dataType === "bool" && input[0] &&
							(input[0].type === "checkbox" || this.grid.options.renderCheckboxes)) {
						colSettings = {};
						// IE8 does not support dynamic change of input type
						parent = input.parent();
						input.remove();
						input = $('<input type="checkbox" />');
						input.appendTo(parent);
					} else if (cols[i].dataType === "bool") {
						colSettings = {
							listItems: [true, false],
							button: "dropdown"
						};
					} else {
						colSettings = {};
					}
				}

				newColSettings = $.extend({}, colSettings, colSettings.editorOptions);
				if (!newColSettings.readOnly) {
					newColSettings.keydown = valChanged;
				}
				if (input[0].type === "checkbox") {
					newColSettings.mousedown = valChanged;
				}
				newColSettings.textChanged = valChanged;
				newColSettings.value = newColSettings.value || colVal;
				newColSettings.type = newColSettings.type || this._doType(cols[i].dataType, colVal);
				newColSettings.width = newColSettings.width || this.options.rowEditDialogFieldWidth;
				newColSettings.enableUTCDates = this.grid.options.enableUTCDates;
				if (colSettings.editorType === "datepicker" || (!colSettings.editorType &&
						cols[i].dataType === "date")) {
					newColSettings.enableUTCDates = this.grid.options.enableUTCDates;
					input.igDatePicker(newColSettings);
				} else if (colSettings.editorType === "date" || (!colSettings.editorType &&
						cols[i].dataType === "date")) {
					newColSettings.enableUTCDates = this.grid.options.enableUTCDates;
					input.igDateEditor(newColSettings);
				} else if (colSettings.editorType === "string" || (!colSettings.editorType &&
						cols[i].dataType === "string")) {
					input.igTextEditor(newColSettings);
				} else if (colSettings.editorType === "numeric" || (!colSettings.editorType &&
						cols[i].dataType === "number")) {
					input.igNumericEditor(newColSettings);
				} else if (colSettings.editorType === "percent") {
					input.igPercentEditor(newColSettings);
				} else if (colSettings.editorType === "mask") {
					input.igMaskEditor(newColSettings);
				} else if (colSettings.editorType === "currency") {
					input.igCurrencyEditor(newColSettings);
				} else if (colSettings.editorType === "combo") {
					input.igCombo(newColSettings);
				} else {
					input.igEditor(newColSettings);
				}
			}
			$(buttonId).igButton('option', 'disabled', true);
		},
		_openRowEditDialog: function (event, tr) {
			var dialog = $('#' + this.grid.container().attr('id') + '_ret'), noCancel, arg;
			noCancel = this._fire('rowEditDialogOpening', event,
				arg = {dialogElement: dialog, owner: this});
			if (noCancel) {
				dialog.data('tr', tr);
				this._fillRowEditDialogTable(tr);
				this._calcRowDialogLeftTop(dialog);
				// focus dialog so that the dropdown closes (on blur), and the advanced dialog 
				//can be closed with the ESCAPE key 
				//This focus magic is needed for Chrome - Bug 121920
				setTimeout(function () {
					if (dialog.find('input')[0]) {
						dialog.find('input')[0].focus();
					}
					dialog.focus();
				}, 100);
				if (event !== null && event !== undefined) {
					event.preventDefault();
					event.stopPropagation();
				}
				// fire opened event
				this._fire('rowEditDialogOpened', event,
					{dialogElement: dialog, owner: this}
					);
				return 1;
			}
			return 0;
		},
		_renderRowEditDialog: function (e, tr) {
			var dialog, caption, dialogContent, noCancel, limit, f = this, okCancelContainer;
			dialog = $('<div></div>')
				.appendTo("body")
				.attr('id', this.grid.container().attr('id') + '_ret')
				.css('position', 'absolute')
				.addClass(this.css.rowEditDialog)
				.data('efh', '1')
				.hide();
			dialog.data('tr', tr);
			noCancel = this._fire('rowEditDialogContentsRendering', e,
				{dialogElement: dialog, owner: f}
				);
			if (noCancel) {
				$('<div></div>')
					.appendTo("body")
					.attr('id', this.grid.container().attr('id') + '_block_ret')
					.css('position', 'absolute')
					.addClass(this.css.blockArea)
					.data('efh', '1')
					.hide();

				// add caption to the dialog
				$('<span></span>')
					.appendTo(caption = $('<div></div>')
						.appendTo(dialog).addClass(this.css.rowEditDialogHeaderCaption))
					.text(this.options.labels.rowEditDialogCaptionLabel)
					.addClass(this.css.rowEditDialogHeaderCaptionTitle);

				//Add close button
				$('<span></span>')
					.appendTo($('<a></a>')
						.appendTo(caption)
						.attr('href', '#')
						.attr('role', 'button')
						.addClass('ui-dialog-titlebar-close ui-corner-all'))
						.bind({click: $.proxy(this._closeRowEditDialog, this)})
						.addClass('ui-icon ui-icon-closethick');

				// L.A. 20 June 2012 Fixing bug #114456 Adding more filtering criteria forces the 
				//advanced search dialog to expand rather than show scrollbars
				dialogContent = $('<div></div>')
					.appendTo(dialog)
					.addClass('ui-dialog-content')
					.css('overflow', 'auto')
					.css('height', this.options.rowEditDialogMaxHeight);


				$('<table><tbody></tbody></table>')
					.appendTo(dialogContent)
					.addClass(this.css.rowEditDialogTable);
				okCancelContainer = $('<div></div>')
					.appendTo($('<div></div>')
						.appendTo(dialog)
						.addClass(this.css.rowEditDialogOkCancelButton))
					.addClass('ui-dialog-buttonset');
				//Add Cancel button
				$('<button/>').appendTo(okCancelContainer)
					.igButton({labelText: this._loc('cancel'),
						width: this.options.rowEditDialogOkCancelButtonWidth}).bind({
						mousedown: $.proxy(this._closeRowEditDialog, this)
					});
				// Add Ok button
				$('<button/>').appendTo(okCancelContainer).igButton({labelText: this._loc('done'),
					disabled: true,
					width: this.options.rowEditDialogOkCancelButtonWidth}).bind({
					click: $.proxy(this._rowEditDialogDoUpdate, this)
				}).attr('id', this.grid.container().attr('id') + '_igButton');


				//A.T. 14 Feb 2011 - Fix for #64483
				// L.A. 13 June 2012 Fixing bug #114457 Advanced search filtering dialog cannot be 
				// dragged outside of the grid
				if (this._hc === true) {
					limit = $('#' + this.grid.element[0].id.split('_')[0] + '_container');
				} else if (this.options.rowEditDialogContainment === "owner") {
					limit = this.grid.container();
				} else {
					limit = 'window';
				}

				dialog.bind({
					keydown: function (e) {
						if (e.keyCode === $.ui.keyCode.ESCAPE) {
							f._closeRowEditDialog(e);
						}
					}
				}).draggable({containment: limit,
					handle: caption,
					drag: $.proxy(this._rowEditDialogMove, this)
					})
					.resizable({ minHeight: dialog.outerHeight() / 4,
						minWidth: dialog.outerWidth() / 2,
						containment: "parent",
						resize: $.proxy(this._resizeHandler, this) })
					.attr('role', 'dialog').attr('tabIndex', -1);
				this._fire('rowEditDialogContentsRendered', e,
					{dialogElement: dialog, owner: this});
			}
		},
		_allRowEditDialogValidatorsPassed: function (e) {
			var tableBody = $('#' + this.grid.container().attr('id') + '_ret table tbody'),
				tds = tableBody.find('[data-key]'),
				input,
				i,
				allEditorsValid = true,
				colKey,
				col,
				colSettings,
				validator;
			for (i = 0; i < tds.length; ++i) {
				input = $(tds[i]).find('input');
				colKey = $(tds[i]).attr('data-key');
				col = this.grid.columnByKey(colKey);
				colSettings = this._getColumnSettingsByKey(colKey);
				validator = this._getValidator(input, col, colSettings);
				if (validator && validator.isValidState && !validator.isValidState()) {
					allEditorsValid = false;
					break;
				}
			}
			return allEditorsValid;
		},
		_rowEditDialogValidatorsChanged: function (e) {
			var buttonId = '#' + this.grid.container().attr('id') + '_igButton';
			if (this._allRowEditDialogValidatorsPassed()) {
				$(buttonId).igButton('option', 'disabled', false);
			} else {
				$(buttonId).igButton('option', 'disabled', true);
			}
		},
		_setResizableEnv: function () {
			var e = $("#" + this.grid.container().attr('id') + "_ret"),
				rCont = e.find(">.ui-dialog-content"),
				hCont = e.find(">.ui-dialog-titlebar"),
				bCont = e.find(">.ui-dialog-buttonpane"),
				pad = rCont.outerHeight() - rCont.height();
			this._resizeCont = rCont;
			this._heightDifference = hCont.outerHeight(true) + bCont.outerHeight(true) + pad;
		},
		_resizeHandler: function (event, ui) {
			var u = ui.originalElement;
			//	rCont = u.find(".ui-dialog-content");
			this._resizeCont.css({
				height: (u.height() - this._heightDifference) + "px"
			});
		},
		_rowEditDialogMove: function (e) {
		},
		_getValidator: function (input, col, colSettings) {
			var autoDetect = !colSettings || !colSettings.editorType, editor;
			if (!colSettings) {
				colSettings = {};
			}
			if (colSettings.editorType === "datepicker"
					|| (autoDetect && col.dataType === "date")) {
				editor = input.igDatePicker('validator');
			} else if (colSettings.editorType === "date"
					|| (autoDetect && col.dataType === "date")) {
				editor = input.igDateEditor('validator');
			} else if (colSettings.editorType === "string" ||
					(autoDetect && (col.dataType === "string" || col.dataType === "text"))) {
				editor = input.igTextEditor('validator');
			} else if (colSettings.editorType === "numeric"
					|| (autoDetect && col.dataType === "number")) {
				editor = input.igNumericEditor('validator');
			} else if (colSettings.editorType === "percent") {
				editor = input.igPercentEditor('validator');
			} else if (colSettings.editorType === "mask") {
				editor = input.igMaskEditor('validator');
			} else if (colSettings.editorType === "currency") {
				editor = input.igCurrencyEditor('validator');
			} else if (colSettings.editorType === "combo") {
				editor = input.igCombo('validator');
			} else {
				editor = input.igEditor('validator');
			}
			return editor;
		},
		_getEditorValue: function (input, col, colSettings) {
			var autoDetect = !colSettings || !colSettings.editorType, editorValue;
			if (!colSettings) {
				colSettings = {};
			}
			if (colSettings.editorType === "datepicker"
					|| (autoDetect && col.dataType === "date")) {
				editorValue = this.grid._fixDate(input.igDatePicker('value'), this._gridCol(col.key));
			} else if (colSettings.editorType === "date"
					|| (autoDetect && col.dataType === "date")) {
				editorValue = this.grid._fixDate(input.igDateEditor('value'), this._gridCol(col.key));
			} else if (colSettings.editorType === "string"
					|| (autoDetect && (col.dataType === "string" || col.dataType === "text"))) {
				editorValue = input.igTextEditor('value');
			} else if (colSettings.editorType === "numeric"
					|| (autoDetect && col.dataType === "number")) {
				editorValue = input.igNumericEditor('value');
			} else if (colSettings.editorType === "bool"
					|| (autoDetect && col.dataType === "bool")) {
				if (typeof (input.igEditor('value')) === "boolean") {
					editorValue = input.igEditor('value');
				} else {
					editorValue = input.igEditor('value').toLowerCase() === "true";
				}
			} else if (colSettings.editorType === "percent") {
				editorValue = input.igPercentEditor('value');
			} else if (colSettings.editorType === "mask") {
				editorValue = input.igMaskEditor('value');
			} else if (colSettings.editorType === "currency") {
				editorValue = input.igCurrencyEditor('value');
			} else if (colSettings.editorType === "combo") {
				editorValue = input.igCombo('value');
			} else {
				editorValue = input.igEditor('value');
			}
			return editorValue;
		},
		_rowEditDialogDoUpdate: function (e) {
			var tr = $('#' + this.grid.container().attr('id') + '_ret').data('tr'),
				tableBody = $('#' + this.grid.container().attr('id') + '_ret table tbody'),
				tds = tableBody.find('[data-key]'),
				td,
				input,
				i,
				vals = {},
				col,
				colSettings,
				colKey,
				validator;
			for (i = 0; i < tds.length; ++i) {
				td = $(tds[i]);
				colKey = td.attr('data-key');
				col = this.grid.columnByKey(colKey);
				input = $(tds[i]).find('input');
				colSettings = this._getColumnSettingsByKey(colKey);
				validator = this._getValidator(input, col, colSettings);
				if (validator && validator.isValidState && !validator.isValidState()) {
					return 0;
				}
				vals[td.attr('data-key')] = this._getEditorValue(input, col, colSettings);
			}
			//Edit row
			if (tr !== null && tr !== undefined && tr.length > 0) {
				this._update(tr.data().id, tr[0], vals);
			//Add new row
			} else {
				this._update(vals);
			}
			this._closeRowEditDialog(e);
			return 1;
		},
		_closeRowEditDialog: function (e) {
			var noCancel = true, dialog = $('#' + this.grid.container().attr('id') + '_ret'), arg;
			noCancel = this._fire('rowEditDialogClosing', e,
				arg = {dialogElement: dialog, owner: this});
			if (noCancel) {
				$('#' + this.grid.container().attr('id') + '_block_ret').fadeToggle();
				$('#' + this.grid.container().attr('id') + '_ret').data('tr', null).fadeToggle();
				delete this._defValue;
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
				this._fire('rowEditDialogClosed', e,
					{dialogElement: dialog, owner: this});
				return 1;
			}
			return 0;
		},
		_lastEditor: function () {
			var key, last = this._prevEdit, all = this._editors;
			if (!last) {
				for (key in all) {
					if (all.hasOwnProperty(key)) {
						last = all[key] || last;
					}
				}
			}
			return last;
		},
		_end: function () {
			this._delHover();
			this._endEdit();
		},
		destroy: function () {
			/* Destroys igGridUpdating
			returnType="object" Returns reference to this igGridUpdating.
			*/
			var div = this._div(), grid = this.grid, el = grid.element;
			if (!this._evts || !el || !div) {
				return this;
			}
			// 2-remove buttons
			this._doButtons(2);
			div.unbind(this._evts);
			if (this._sEvts) {
				el.parent().unbind(this._sEvts);
			}
			el.unbind(this._gEvts);
			this._end();
			// remove addNewRow from header
			this._headerRendered(1);
			this._evts = this._sEvts = this._gEvts = null;
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		_hidingFinished: function () {
			this._headerRendered();
		},
		_hidingFinishing: function () {
			var key, shift, tr = this._addTR, grid = this.grid, edits = this._editors;
			if (!grid._initialized) {
				return;
			}
			this._endEdit();
			// 2-remove buttons
			this._doButtons(2);
			if (this._groupTD1) {
				this._groupTD1.remove();
				this._groupTD2.remove();
				delete this._groupTD1;
				delete this._groupTD2;
				// reset short-cut shifts in order properly calculate _colShift below
				this._cShift = this._cShiftAdd = -1;
			}
			if (tr) {
				shift = this._colShift(null, tr[0]);
				this._addTrShift = [];
				this._newTrShift = [];
				// save leading TRs/THs not related to columns
				while (shift-- > 0) {
					this._addTrShift[shift] = tr.children()[shift];
					this._newTrShift[shift] = this._newTR.children()[shift];
				}
				tr.remove();
				this._newTR.remove();
			}
			for (key in edits) {
				if (edits.hasOwnProperty(key) && edits[key]) {
					edits[key].remove();
				}
			}
			this._newTR = this._addTR = this._editors = this._mapAdd = this._map = null;
			this._cShiftAdd = this._cShift = -1;
		},
		// rerender modified cells
		_rerender: function (args) {
			var iTD, val, ta, row, cell, col, td, tds, key, grid = this.grid,
				tx = grid.pendingTransactions(), i = tx ? tx.length : 0,
				tbody = grid.element.children('tbody'), tmpl = grid.options.jQueryTemplating;
			/* DAY 17 OCT 2011 Fixed <90918> - When update a row in parent layout, rows in child layout are changed */
			if (args && args.owner && args.owner.id() !== grid.id()) {
				return;
			}
			while (i-- > 0) {
				ta = tx[i];
				cell = ta.type === 'cell';
				row = tbody.find('[data-id="' + ta.rowId + '"]');
				if (ta.type === 'row' || ta.type === 'newrow' || cell) {
					row.addClass(grid.css.modifiedRecord);
					tds = (row.length && !tmpl) ? row.children('td') : null;
					iTD = tds ? tds.length : 0;
					while (iTD-- > 0) {
						key = this._key(td = $(tds[iTD]));
						val = undefined;
						if (ta.row) {
							val = ta.row[key];
						} else if (cell && key === ta.col) {
							val = ta.value;
						}
						if (val !== undefined) {
							col = _aNull(key) ? null : this._gridCol(key);
							val = col ? grid._renderCell(val, col) : $.ig.formatter(val);
							td.html(val);
						}
					}
				}
				if (ta.type === 'deleterow' || ta.type === 'insertrow') {
					row.addClass(grid.css.deletedRecord);
				}
			}
		},
		// ensure that data has primary identifier
		// raise dataDirty event
		_bind: function (args) {
			var t1, t2, grid = this.grid, data = grid.dataSource._data, i = data ? data.length : 0,
				txNew = this.grid.dataSource.pendingTransactions(), len = txNew ? txNew.length : 0,
				txLast = this._txLast, lenLast = txLast ? txLast.length : 0;
			this._addRowNum = Math.max(this._addRowNum || 1, i + 1);
			this._endEdit();
			if (!args) {
				if (i && _aNull(grid.options.primaryKey) && _aNull(data[0].ig_pk)) {
					while (i-- > 0) {
						data[i].ig_pk = i;
					}
				}
				// databind for wrong/child/parent grid
			} else if (args.owner && args.owner.id() !== this.grid.id()) {
				return;
			}
			// no pending transactions
			if (len < 1) {
				return;
			}
			// check if event with current pending transactions was already once raised
			if (len === lenLast) {
				while (lenLast-- > 0) {
					t1 = txNew[lenLast];
					t2 = txLast[lenLast];
					if (t1.tid !== t2.tid || t1.value !== t2.value || t1.row !== t2.row) {
						break;
					}
				}
				// same transactions
				if (lenLast < 0) {
					return;
				}
			}
			// save current transactions
			txLast = this._txLast = [];
			while (len-- > 0) {
				txLast[len] = { tid: txNew[len].tid, value: txNew[len].value, row: txNew[len].row };
			}
			if (this._fire('dataDirty', this._evt || {}, {}) && this.options.enableDataDirtyException) {
				_throw('dataDirtyException');
			}
		},
		// replace number-string by number
		// if (ds), then it is request to return prime key for new row, in this case "key" is record with members
		_fixPrime: function (key, ds) {
			var grid = this.grid, o = grid.options, prime = o.primaryKey,
				col = _aNull(prime) ? null : this._gridCol(prime), data = grid.dataSource._data;
			if (ds) {
				if (!col) {
					key.ig_pk = ds = data.length;
					return ds;
				}
				// primary column can be hidden
				if (_aNull(ds = key[prime])) {
					ds = key[prime] = this._defVal(prime, 1);
				}
				key = ds;
			}
			key = (col && col.dataType !== 'number' && col.dataType !== 'numeric') ? key : parseInt(key, 10);
			if (!col && (!data[key] || data[key].ig_pk !== key)) {
				_throw('noPrimaryKeyException');
			}
			return key;
		},
		// get reference to data[id]
		_getRecord: function (id) {
			var i = -1, data = this.grid.dataSource._data, len = data.length, prime = this.grid.options.primaryKey;
			id = this._fixPrime(id);
			if (_aNull(prime)) {
				prime = 'ig_pk';
			}
			while (++i < len) {
				if (data[i][prime] === id) {
					return data[i];
				}
			}
		},
		// get value of cell including transactions
		_getVal: function (rowId, key) {
			var val, ta, grid = this.grid, tx = grid.dataSource.pendingTransactions(), i = tx ? tx.length : 0;
			while (i-- > 0 && val === undefined) {
				ta = tx[i];
				if (ta.rowId === rowId) {
					if (ta.row) {
						val = ta.row[key];
					} else if (ta.type === 'cell' && ta.col === key) {
						val = ta.value;
					}
				}
			}
			if (val === undefined) {
				rowId = this._getRecord(rowId);
				val = rowId ? rowId[key] : null;
			}
			return grid._fixDate(val, this._gridCol(key));
		},
		// update grid with modified cell or row, delete row
		// if(col) set cell value
		// if(val) set cell or row value
		// if(!val) delete row
		// if(!tr) add row
		_update: function (rowId, tr, val, col) {
			var tx, i, vDiv, vScroll,
				del = val === undefined,
				grid = this.grid,
				oGrid = grid.options,
				autoCommit = oGrid.autoCommit,
				ds = grid.dataSource,
				key = this._fixPrime(rowId, tr ? null : ds),
				virt = grid._virtualDom;
			// note assignement to val is a dummy work around for jslint
			i = tr ? (del ? ds.deleteRow(rowId, autoCommit) : (col ? ds.setCellValue(key, col, val, autoCommit) : ds.updateRow(key, val, autoCommit))) : ds.addRow(key, rowId, autoCommit);
			// get around dataSource mixing of cell and row transactions
			tx = ds.pendingTransactions();
			i = tx ? tx.length : 0;
			while (i-- > 0) {
				if (rowId === tx[i].rowId) {
					// copy cell transaction to row
					if (tx[i].row && col) {
						tx[i].row[col] = val;
					}
					break;
				}
			}
			// note: if grid is virtual, then this._renderRow can not be used, because of virtually scrolled columns
			// L.A. 28 August 2012 - Fixing bug #118740 Scrolling position and state of expanded rows are not 
			// retained if grid is updated when columns are grouped by.
			if (virt) {
				vDiv = $('#' + grid.id() + (virt ? '_scrollContainer' : '_scroll'))[0];
				vScroll = vDiv ? vDiv.scrollTop : 0;
				// VS 08/14/2012 Bug 118764: igGridSelection fails after _rerenderVirtualRecordsContinuous
				// flag to call _renderData
				i = true;
				if (virt && oGrid.virtualizationMode === 'continuous') {
					grid._rerenderVirtualRecordsContinuous();
					i = false;
				}
				if (i || this._sel('get')) {
					grid._renderData();
				}
				if (vScroll) {
					vDiv.scrollTop = vScroll;
				}
				if (virt) {
					grid._onVirtualVerticalScroll();
				}
				return;
			}
			if (!tr) {
				grid.renderNewRow(rowId, key);
				tr = grid.element.children('tbody').children('tr');
				tr = tr[tr.length - 1];
			} else {
				if (del) {
					return $(tr).addClass(grid.css.deletedRecord);
				}
				// get latest values for a row
				val = {};
				col = oGrid.columns;
				i = col.length;
				while (i-- > 0) {
					val[key = col[i].key] = this._getVal(rowId, key);
				}
				// update the UI (DOM), rowId is a request to fix css
				// if tr==1, then row is out of view: do not repaint
				if (tr !== 1 && !_aNull(val = grid._renderRow(val, tr, rowId))) {
					tr = val;
				}
			}
			// if tr==1, then row is out of view: do not repaint
			// L.A. 28 August 2012 - Fixing bug #118740 Scrolling position and state of expanded rows are not 
			// retained if grid is updated when columns are grouped by.
			if (tr && tr !== 1 && !autoCommit) {
				$(tr).addClass(grid.css.modifiedRecord);
			}
		},
		// every grid feature widget should implement this 
		_injectGrid: function (grid) {
			var me = this;
			// initialize options.css
			me.grid = grid;
			me._cShiftAdd = me._cShift = -1;
			// process iggridheaderrendered and headerRendered events of grid
			me._gEvts = {
				iggridvirtualrendering: function () { me._end(); },
				ighierarchicalgridrowexpanded: function () { me._end(); },
				iggriddatabinding: function (e, args) { me._bind(args); },
				iggriddatarendering: function () { me._bind(); },
				iggridrowsrendering: function () { me._bind(); },
				iggriduidirty: function () { me._end(); },
				iggridresizingcolumnresizing: function () { me._end(); },
				iggridvirtualrecordsrender: function (e, args) { me._rerender(args); },
				iggridrowsrendered: function (e, args) { me._rerender(args); }
			};
			if (this.options.enableAddRow) {
				me._gEvts.iggridheaderrenderedinternal = function () { me._headerRendered(); };
				me._gEvts.iggridheaderextracellsmodified = function () { me._hierHeaderInit(); };
			}
			// L.A. 12 June 2012 Fixing bug #113919 The columns shift to the left on edit mode.
			me._gEvts.iggridgroupbygroupedcolumnschanged = function (e, args) { me._groupedColumnsChanged(args); };
			grid.element.bind(this._gEvts);
			me._ti = parseInt(grid.options.tabIndex || 1, 10);
			me._evts = {
				// igGridSelection may suppress mousedown event
				iggridselectionmousedown: function (e) { me._onEvt(e, 1); },
				mousedown: function (e) { me._onEvt(e, 1); },
				click: function (e) { me._onEvt(e, 2); },
				dblclick: function (e) { me._onEvt(e, 3); },
				touchstart: function (e) { me._onEvt(e, 11); },
				MSPointerDown: function (e) { me._onEvt(e, 11); },
				keydown: function (e) { me._onEvt(e, 4); },
				focus: function (e) { me._onEvt(e, 5); },
				blur: function (e) { me._onEvt(e, 6); },
				mousemove: function (e) { me._onEvt(e, 7); },
				mouseleave: function (e) { me._onEvt(e, 8); }
			};
			/* DAY 18 OCT 2011 90177- When call saveChanges the rows should not be marked as dirty */
			me.grid.dataSource._addChangesSuccessHandler(function (data) {
				if (data.Success) {
					// if there are deleted rows, then whole grid should be repainted, because of zebra styles
					if (grid.rows().parent().find('.' + grid.css.deletedRecord).length) {
						grid._renderData();
					}
					grid.rows().removeClass(grid.css.modifiedRecord);
				}
			});
		}
	});
	$.extend($.ui.igGridUpdating, { version: '12.2.20122.1021' });

	$.widget('ui.igEditorFilter', {
		setFocus: function (delay, toggle) {
			var provider = this.options.provider;
			setTimeout(function () { provider.setFocus(toggle); }, delay);
		},
		remove: function () {
			if (!this.options.provider.removeFromParent()) {
				var p, e = this.element;
				p = e[0].parentNode;
				if (p && p.tagName) {
					p.removeChild(e[0]);
				}
				e = this.validator();
				if (e) {
					e.hide();
				}
			}
		},
		validator: function () {
			return this.options.provider.validator();
		},
		hasInvalidMessage: function () {
			var validator = this.validator();
			return validator ? validator.isMessageDisplayed() : false;
		},
		destroy: function () {
			this.options.provider.destroy();
		}
	});
	$.extend($.ui.igEditorFilter, { version: '12.2.20122.1021' });
	// editor providers
	$.ig.EditorProvider = $.ig.EditorProvider || Class.extend({
		createEditor: function (updating, key, columnSetting, tabIndex, format, dataType, cellValue) { },
		getValue: function () { },
		setValue: function (val) { },
		setFocus: function () { },
		setSize: function (width, height) { },
		removeFromParent: function () { return false; },
		destroy: function () { },
		validator: function () { },
		validate: function (noLabel) {
			var validator = this.validator();
			return validator ? !validator.validate() : true;
		},
		isValid: function () {
			var validator = this.validator();
			return validator ? validator.isValidState() : true;
		}
	});
	$.ig.EditorProviderDefault = $.ig.EditorProviderDefault || $.ig.EditorProvider.extend({
		createEditor: function (updating, key, columnSetting, tabIndex, format, dataType, cellValue) {
			var v, o = {};
			if (columnSetting) {
				o = columnSetting.editorOptions || o;
				o.type = columnSetting.editorType || o.type;
			}
			v = o.type;
			//A.T. make sure we pass the value of enableUTCDates to any editors that updating & its editor providers create
			if (o.enableUTCDates !== false && updating.grid.options.enableUTCDates) {
				o.enableUTCDates = true;
			}
			if (!v) {
				if (dataType === 'bool') {
					o.listItems = ['true', 'false'];
					o.button = 'dropdown';
					this._bool = o.readOnly = o.dropDownOnReadOnly = o.spinOnReadOnly = o.spinWrapAround = true;
				} else if (format === 'currency' || format === 'percent' || format === 'date') {
					v = format;
					o.displayFactor = o.displayFactor || 1;
				} else if (dataType === 'number') {
					v = 'numeric';
				} else if (dataType === 'date') {
					v = 'date';
				} else if (!dataType) {
					v = cellValue;
					v = (typeof v === 'number') ? 'numeric' : ((v && v.getTime) ? 'date' : null);
				}
				o.type = v;
			}
			if (format === 'int') {
				o.maxDecimals = 0;
			} else if (format === 'double' && !o.maxDecimals) {
				o.maxDecimals = 100;
			} else if (format && v && v.toString().indexOf('date') === 0 && !o.dateInputFormat) {
				o.dateInputFormat = format;
			}
			if ((v === 'datepicker' || v === 3) && !o.button) {
				o.button = 'dropdown';
			}
			o.tabIndex = tabIndex;
			o.textChanged = function () {
				updating._notifyChanged();
			};
			// editor cancels esc, tab and enter keys, so, they can not be processed by grid
			o.keydown = function (e) {
				// flag to skip enter/13 key for multiline editor with disabled hideEnterKey
				updating._13 = o.textMode && !o.hideEnterKey;
				updating._notifyEditorKey(e, key);
			};
			v = $('<span />');
			if (!v.igEditor) {
				_throw('igEditorException');
			}
			if (o.id) {
				v.attr('id', o.id);
			}
			o.excelNavigationMode = updating.options.excelNavigationMode;
			v = v.igEditor(o);
			this.editor = v.data('igEditor');
			return v;
		},
		getValue: function () {
			var val = this.editor.value();
			return this._bool ? (val === 'true') : val;
		},
		setValue: function (val) {
			return this.editor.value(this._bool ? ((val && val !== 'false') ? 'true' : 'false') : val);
		},
		setSize: function (width, height) {
			this.editor._listRemove();
			this.editor._width(width);
			this.editor._height(height);
		},
		setFocus: function () {
			this.editor.setFocus(-1);
		},
		removeFromParent: function () {
			return this.editor.remove();
		},
		destroy: function () {
			this.editor.destroy();
		},
		validator: function () {
			return this.editor.validator();
		},
		validate: function (noLabel) {
			return this.editor.validate(noLabel);
		},
		isValid: function () {
			return this.editor.isValid();
		}
	});
	$.ig.EditorProviderCombo = $.ig.EditorProviderCombo || $.ig.EditorProvider.extend({
		createEditor: function (updating, key, columnSetting, tabIndex) {
			var v, o = {};
			if (columnSetting) {
				o = columnSetting.editorOptions || o;
			}
			o.tabIndex = tabIndex;
			o.textChanged = function () {
				updating._notifyChanged();
			};
			// editor cancels esc, tab and enter keys, so, they can not be processed by grid
			o.keydown = function (e, ui) {
				if (!ui || !ui.owner || !ui.owner._ddOn) {
					updating._notifyEditorKey(e, key);
				}
			};
			v = $('<span />');
			if (!v.igCombo) {
				_throw('igComboException');
			}
			if (o.id) {
				v.attr('id', o.id);
			}
			v = v.igCombo(o);
			this.editor = v.data('igCombo');
			return v;
		},
		getValue: function () {
			return this.editor.options.allowCustomValue ? this.editor.text() : this.editor.value();
		},
		setValue: function (val) {
			var combo = this.editor, o = combo.options;
			if (o.filteringType) {
				combo.selectedIndex(-1);
				combo.activeIndex(-1);
				combo.dataBind();
			}
			return o.allowCustomValue ? combo.text((val === null ? (o.nullText || "") : val)) : combo.value(val);
		},
		setSize: function (width, height) {
			this.editor.options.width = width;
			this.editor.options.height = height;
			this.editor._doSize();
		},
		setFocus: function () {
			this.editor.setFocus(-1);
		},
		removeFromParent: function () {
			return this.editor.remove();
		},
		validator: function () {
			return this.editor.validator();
		},
		destroy: function () {
			this.editor.destroy();
		}
	});
	$.ig.EditorProviderRating = $.ig.EditorProviderRating || $.ig.EditorProvider.extend({
		createEditor: function (updating, key, columnSetting, tabIndex) {
			var foc, v, o = {};
			if (columnSetting) {
				o = columnSetting.editorOptions || o;
			}
			o.valueChange = function () {
				updating._notifyChanged();
			};
			v = $('<div />');
			if (!v.igRating) {
				_throw('igRatingException');
			}
			if (o.id) {
				v.attr('id', o.id);
			}
			v = v.igRating(o);
			this.editor = v.data('igRating');
			foc = this.editor._foc;
			if (foc) {
				foc.attr('tabIndex', tabIndex);
				foc.keydown(function (e) {
					updating._notifyEditorKey(e, key);
				});
			}
			return v;
		},
		getValue: function () {
			return this.editor.value();
		},
		setValue: function (val) {
			return this.editor.value(val || 0);
		},
		setSize: function (width, height) {
			if (!this._once) {
				this.editor._doVotes(this.editor.options);
			}
			this._once = 1;
			var back = this.editor.element.parent().css('backgroundColor');
			// adjust 2px for borders
			this.editor.element.css({ width: width, height: height, backgroundColor: back });
		},
		setFocus: function () {
			this.editor.focus();
		},
		validator: function () {
			return this.editor.validator();
		},
		destroy: function () {
			this.editor.destroy();
		}
	});
	$.ig.EditorProviderCheckbox = $.ig.EditorProviderCheckbox || $.ig.EditorProvider.extend({
		createEditor: function (updating, key, columnSetting, tabIndex, format, dataType) {
			var elem, me = this, o = columnSetting;
			me.updating = updating;
			me.none = dataType === 'bool' ? false : null;
			me.element = elem = $('<span tabindex="' + tabIndex + '"/>').addClass('ui-igedit-field ui-state-default ui-corner-all').css({
				overflow: 'hidden',
				textAlign: 'center',
				outline: 0,
				background: '#ffffff',
				display: 'block'
			}).click(function () {
				me.setValue(0, updating);
			}).focus(function () {
				me.css(true, true);
			}).blur(function () {
				me.css(true);
			}).mouseover(function () {
				me.css(null, true);
			}).mouseleave(function () {
				me.css();
			}).keydown(function (e) {
				updating._notifyEditorKey(e, key);
				if (e && e.keyCode === 32) {
					_stop(e);
					me.setValue(0, updating);
				}
			});
			o = o ? o.editorOptions : null;
			if (o && o.id) {
				elem.attr('id', o.id);
			}
			elem = $('<span class="ui-state-default ui-corner-all ui-igcheckbox-small" />').css('display', 'inline-block').appendTo(elem);
			$('<span class="ui-icon ui-icon-check ui-igcheckbox-small-on" />').css('display', 'block').appendTo(elem);
			return this.element;
		},
		// get reference to element: 0-main, 1-checkbox, 2-icon
		el: function (depth) {
			var e = this.element;
			while (depth-- > 0) {
				e = $(e.children()[0]);
			}
			return e;
		},
		getValue: function () {
			return this.value;
		},
		setValue: function (val, updating) {
			var css = 'ui-igcheckbox-small-off';
			if (updating) {
				val = !this.value;
			}
			this.value = (val || val === false) ? val : this.none;
			if (val) {
				this.el(2).removeClass(css);
			} else {
				this.el(2).addClass(css);
			}
			if (updating) {
				updating._notifyChanged();
			}
		},
		// configure focus/hover appearance
		css: function (foc, on) {
			var i = 2, css = foc ? 'ui-state-focus' : 'ui-state-hover';
			while (i-- > 0) {
				if (on) {
					this.el(i).addClass(css);
				} else {
					this.el(i).removeClass(css);
				}
			}
		},
		setSize: function (width, height) {
			var elem = this.el(0);
			this.el(1).css('marginTop', Math.floor((height - 15) / 2) + 'px');
			this.css();
			this.css(true);
			elem.css({ width: width - _int(elem, 'borderLeftWidth') - _int(elem, 'borderRightWidth'),
				height: height - _int(elem, 'borderTopWidth') - _int(elem, 'borderBottomWidth') });
		},
		setFocus: function (toggle) {
			this.el(0).focus();
			if (toggle) {
				this.setValue(0, this.updating);
			}
		}
	});
}(jQuery));
