/*!
* Infragistics.Web.ClientUI Upload localization resources 12.2.20122.1021
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Upload) {
	$.ig.Upload = {};

	$.extend($.ig.Upload, {

		locale: {
			labelUploadButton: "Upload File",
			labelAddButton: "Add",
			labelClearAllButton: "Clear Uploaded",
			// M.H. 13 May 2011 - fix bug 75042
			labelSummaryTemplate: "{0} of {1} uploaded",
			labelSummaryProgressBarTemplate: "{0}/{1}",
			labelShowDetails: "Show Details",
			labelHideDetails: "Hide Details",
			labelSummaryProgressButtonCancel: "Cancel",
			// M.H. 1 June 2011 Fix bug #77532
			labelSummaryProgressButtonContinue: "Upload",
			labelSummaryProgressButtonDone: "Done",
			labelProgressBarFileNameContinue: "...",

			//error messages
			errorMessageFileSizeExceeded: "Max file size exceeded.",
			errorMessageGetFileStatus: "Could not get your current file status! Probably connection dropped.",
			errorMessageCancelUpload: "Could not send to server command to cancel upload! Probably connection dropped.",
			errorMessageNoSuchFile: "The file you requested could not be found. Probably this file is too big.",
			errorMessageOther: "There is internal error uploading file. Error code: {0}.",
			errorMessageValidatingFileExtension: "File extension validation failed.",
			errorMessageAJAXRequestFileSize: "AJAX error while trying to get file size.",
			errorMessageMaxUploadedFiles: "Maximum count of uploading files exceeded.",
			errorMessageMaxSimultaneousFiles: "Value of maxSimultaneousFilesUploads is incorrect. It should be more than 0 or null.",
			errorMessageTryToRemoveNonExistingFile: "You are trying to remove non-existing file with id {0}.",
			errorMessageTryToStartNonExistingFile: "You are trying to start non-existing file with id {0}.",

			// M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			// title attributes            
			titleUploadFileButtonInit: "Upload File",
			titleAddFileButton: "Add",
			titleCancelUploadButton: "Cancel",
			// M.H. 1 June 2011 Fix bug #77532
			titleSummaryProgressButtonContinue: "Upload",
			titleClearUploaded: "Clear Uploaded",
			titleShowDetailsButton: "Show Details",
			titleHideDetailsButton: "Hide Details",
			titleSummaryProgressButtonCancel: "Cancel",
			titleSummaryProgressButtonDone: "Done",
			// M.H. 1 June 2011 Fix bug #77532
			titleSingleUploadButtonContinue: "Upload",
			titleClearAllButton: "Clear Uploaded"
		}
	});

}



/*!
 * Infragistics.Web.ClientUI jQuery File Upload 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.2.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  infragistics.util.js
 *  infragistics.ui.shared.js
 */

/*global jQuery */
if (typeof jQuery !== "function") {
	throw new Error("jQuery is undefined");
}

(function ($) {

    $.widget("ui.igBrowseButton", $.ui.igButton, {
        // this class should be general for igBrowseButton - to work properly widget do not change it
        _const: {
            filePickerWidth: '220px',
            filePickerHeight: '30px'
        },
        css: {
            "filePickerClass": "ui-igbrowsebutton-filepicker"
        },
        options: {
	        autoselect: true,
	        multiplefiles: false
	    },
        _id: function (id) {
            return this.element[0].id + id;
        },
        _create: function () {
            var filepickerId = this._id('_fp');
            $.extend($.ui.igBrowseButton.prototype.options, $.ui.igButton.prototype.options);
            $.extend($.ui.igBrowseButton.prototype.css, $.ui.igButton.prototype.css);
            //$.extend($.ui.igBrowseButton.prototype, $.ui.igButton.prototype);
            $.ui.igButton.prototype._create.apply(this);

            this._createFilePicker(filepickerId);

            this._attachBrowseButtonEvents();
            if (this.options.disabled === true) {
                this._enableFilePicker(true);
            } else {
                this.element.bind({
                    // M.H. 27 Jul 2011 - fix bug 77323
                    click: function (e) {
						e.preventDefault();
                    }
                });
            }
        },
        _createFilePicker: function (filepickerId) {
			// M.H. 1 Nov. 2011 Fix for bug #83439 - when the control is in UpdatePanel filePicker is attached to body and on async postback it is not removed 
			// each time when it is added filepicker it should be checked whether such DOM element with this ID exist and if so - to remove it.
			$('#' + filepickerId).remove();
			this.filePicker = $('<input type="file" id="' + filepickerId + '" />').appendTo($(document.body));
            this.filePicker.css({
                'position' : 'absolute',
	            'margin': '-5px 0 0 -175px',
	            'padding': '0',
	            'width': '1px',
	            'height': '1px',
	            'fontSize': '14px',
	            'opacity': '0',
	            'cursor': 'pointer',
	            'display': 'block',
				// M.H. 30 March 2012 Fix for bug #104044
	            'zIndex':  '1000000',
	            'filter': 'alpha(opacity=0)'
            });
            // M.H. 12 May 2011 - fix bug 74763
            this._setTitle(this.options.title);
        },

        _setTitle: function (title) {
            // M.H. 12 May 2011 - fix bug 74763: add method which adds/remove attribute to file picker
            var filePicker = $('#' + this._id('_fp'));

            if (title === false) {
                filePicker.removeAttr('title');
            } else {
                filePicker.attr('title', title);
            }
        },

        _attachBrowseButtonEvents: function () {
            var self = this;
            this.mouseMoveEvent = {
                mousemove: function (event) {
                    self._mousemove(event);
                }
            };

            this._internalEvents = {
                mouseover: function () {
                    self._attachMouseMove(true);
                }
            };
            self.element.bind(this._internalEvents);
            //attach onchange property to input type="file" element
            self._filePickerBindChange();
        },

        //event fired when autoselect option is true attach onchange event in input
        _filePickerBindChange: function () {
            var self = this, filePath,
                filePicker = $('#' + this._id('_fp'));
            self.tempClicked = false;
            self._filePickerEvents = {
                change: function (event) {
                    filePath = self._fileFromPath(filePicker.val());

                    if (!self._trigger('fileselect', event, { filePath: filePath })) {
                        return;
                    }
                },
                click: function (event) {
                    if (!self._trigger('click', event)) {
                        // M.H. 11 May 2011 - fix bug 74553 - allow to cancel file selecting
                        return false;
                    }
                }
            };
            filePicker.bind(self._filePickerEvents);
        },

        attachFilePicker: function (e, isHidden) {
            var self = this, right, bottom,
                fileUploadButton = self.element,
				filePicker = this.filePicker,
                offset = fileUploadButton.offset(),
                left = parseInt(offset.left, 10),
                top = parseInt(offset.top, 10),
                filePickerDOM = filePicker[0];
            right = parseInt(left + fileUploadButton[0].offsetWidth, 10);
            bottom = parseInt(top + fileUploadButton[0].offsetHeight, 10);
            //$('#status2').text(e.pageX);
            if (e.pageX >= left && e.pageX <= right &&
			            e.pageY >= top && e.pageY <= bottom) {
                filePickerDOM.style.top = e.pageY + 'px';
                filePickerDOM.style.left = e.pageX + 'px';
                //if (!self.isVisibleFilePicker) {
                if (isHidden === true) {
                    filePicker.css({
                        width: '1px',
                        height: '1px'
                    });
                } else {
                    self.isVisibleFilePicker = true;
                    filePicker.css({
                        width: self._const.filePickerWidth,
                        height: self._const.filePickerHeight
                    });
                }

                //}
                filePickerDOM.style.display = 'block';
                //filePickerDOM.style.visibility = 'visible';
                //we should call prototype mousein event because when moving cursor it has attached another DOM element and mousein is not called
                self._onMouseOver(e);
            }
        },
        getFilePicker: function () {
            var filepickerId = this._id('_fp'),
                filePicker = $('#' + filepickerId);

            filePicker.attr('id', '').css({ 'display': 'none' });
            this._createFilePicker(filepickerId);
            this._filePickerBindChange();
            return filePicker;
        },

        _mousemove: function (e) {
            //attach//dettach <input type="file"> to the cursor
            var self = this, right, bottom,
                fileUploadButton = self.element,
				filePicker = this.filePicker,
                offset = fileUploadButton.offset(),
                left = parseInt(offset.left, 10),
                top = parseInt(offset.top, 10),
                filePickerDOM = filePicker[0];
            right = parseInt(left + fileUploadButton[0].offsetWidth, 10);
            bottom = parseInt(top + fileUploadButton[0].offsetHeight, 10);
            //$('#status2').text(e.pageX);
            if (e.pageX >= left && e.pageX <= right &&
			            e.pageY >= top && e.pageY <= bottom) {
                filePickerDOM.style.top = e.pageY + 'px';
                filePickerDOM.style.left = e.pageX + 'px';
                if (!self.isVisibleFilePicker) {
                    filePicker.css({
                        width: self._const.filePickerWidth,
                        height: self._const.filePickerHeight
                    });
                    self.isVisibleFilePicker = true;
                }
                filePickerDOM.style.display = 'block';
                //filePickerDOM.style.visibility = 'visible';
                //we should call prototype mousein event because when moving cursor it has attached another DOM element and mousein is not called
                self._onMouseOver(e);
            } else {
                if (self.isVisibleFilePicker) {
                    filePicker.css({
                        width: '1px',
                        height: '1px'
                    });
                    self.isVisibleFilePicker = false;
                }
                self._attachMouseMove(false);
                //filePickerDOM.style.display = 'none';
                //filePickerDOM.style.visibility = 'hidden';
                self._onMouseOut(e);
            }
        },
        _attachMouseMove: function (isToAttach) {
            if (isToAttach) {
                $(document).bind(this.mouseMoveEvent);
            } else {
                $(document).unbind(this.mouseMoveEvent);
            }
        },
        _setOption: function (key, value) {
			$.ui.igButton.prototype._setOption.apply(this, arguments);
            $.Widget.prototype._setOption.apply(this, arguments);

            switch (key) {
			case "disabled":
				this._enableFilePicker(value);
				$.ui.igButton.prototype._setOption.apply(this, arguments);
				break;
            // M.H. 12 May 2011 - fix bug 74763
            case "title":
                this._setTitle(value);
                break;
			default:
				break;
            }
        },
        _enableFilePicker: function (isDisabled) {
            var filePicker = $('#' + this._id('_fp'));

            if (isDisabled === false) {
                this.isVisibleFilePicker = false;
                //filePicker.removeAttr('disabled');
                this._attachMouseMove(true);
                // IE9 fix - unbind mouse over event
                this.element.bind(this._internalEvents).mouseover();
            } else {
                //filePicker.attr('disabled', 'true');
                this._attachMouseMove(false);
                filePicker.css({
                    width: '1px',
                    height: '1px'
                });
                this.element.unbind(this._internalEvents);
            }
        },

        destroy: function () {
            this.element.unbind(this._internalEvents);
            this.element.unbind(this.mouseMoveEvent);
            $.Widget.prototype.destroy.apply(this, arguments);
            // M.H. 10 May 2011 - fix bug 75039: remove unnecessary comment and unnecessary line of code
            $.ui.igButton.prototype.destroy.apply(this);

            // M.H. 12 May 2011 - fix bug 74966
            $('#' + this._id('_fp')).remove();
        },

        /*************** HELPER FUNCTION ********************/
        _fileFromPath: function (file) {
            return file.replace(/(\/|\\)$/, "");
        }
        /*************** //HELPER FUNCTION ********************/
    });
    $.extend($.ui.igBrowseButton, { version: '12.2.20122.1021' });

    $.widget("ui.igUpload", {
        _const: {
            fileNameLimit: 100,
            AjaxQueueName: 'uploadrequestsqueue',
            debug: true,
            isProgressBarAnimationEnabled: true,
            isProgressBarRange: false,
            timeoutGetFileSize: 1000,
            status: {
                NotStarted: 0, // only used in Client UI
                Started: 1,
                Finished: 2,
                NoSuchFile: 3, // when client tries to request file information wiht key which does not exist in the server
                Canceled: 4 // only used in Client UI                
            },
            // M.H. 11 May 2011 - fix bug 74621: Add error codes for most common errors
            errorCode: {
                MimeTypeValidation: 1,
                FileSizeExceeded: 2
            },
            clientSideErrorCode: {
                maxAllowedUploadingFiles: 1,
                extensionValidation: 2,
                startUpload: 3,
                ajaxErrorGetFileStatus: 4,
                ajaxErrorCancelUpload: 5,
                removeFileUpload: 6,
                ajaxErrorRequestFileSize: 7,
                checkCanUpload: 8
            },
            fileStatusNoError: -1,
            progressUpdateInterval: 800,
            animateProgressBarInterval: 200,
            showHideDetailsAnimationTimeout: 500,
            doubleCheckRequestInterval: 1000,
            removeSingleUploadAnimationTimeout: 300,
            maxUploadFilesDefault: -1
        },
        // M.H. 27 Jul 2011 - fix bug 77162 - set default file extension icons array
        defaultFileExtensionIcons: [
            // good practice is to set at the beginning of array default classes
            {
                /* type="string" Array of string for file extensions */
                ext: [],
                /* type="string" Css classes which sets icon. */
                css: 'ui-icon ui-icon-document ui-igupload-progressbar-icon ui-igupload-progressbar-icon-default',
                /* type="bool" Default icons when the file extension is not found. It is taken only the first item which have def set to true, other are ignored. */
                def: true
            },
            {
                ext: ['exe', 'app'],
                css: 'ui-icon ui-icon-gear ui-igupload-progressbar-icon ui-igupload-progressbar-icon-exe',
                def: false
            },
            {
                ext: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'yuv', 'tif', 'thm', 'psd'],
                css: 'ui-icon ui-icon-image ui-igupload-progressbar-icon ui-igupload-progressbar-icon-images',
                def: false
            },
            {
                ext: ['mp3', 'wav', 'mp4', 'aac', 'mid', 'wma', 'ra', 'iff', 'aif', 'm3u', 'mpa'],
                css: 'ui-icon ui-icon-volume-on ui-icon ui-icon-image ui-igupload-progressbar-icon ui-igupload-progressbar-icon-music',
                def: false
            },
            {
                ext: ['doc', 'docx', 'xls', 'xlsx', 'txt', 'ppt', 'pptx', 'pdf'],
                css: 'ui-icon ui-icon-document ui-igupload-progressbar-icon ui-igupload-progressbar-icon-docs',
                def: false
            },
            {
                ext: ['3gp', 'asf', 'asx', 'avi', 'flv', 'mov', 'mp4', 'mpg', 'rm', 'swf', 'vob', 'wmv'],
                css: 'ui-icon ui-icon-video ui-igupload-progressbar-icon ui-igupload-progressbar-icon-video',
                def: false
            }
        ],
        css: {
            /* Helper classes */
            /* clear class */
            "clearClass": "ui-helper-clearfix",
            /* hide element */
            "hiddenClass": "ui-helper-hidden",
            /* // Helper classes */
            /* class for IE6 */
            "baseClassIE6": "ui-ie6",
            /* class for IE7 */
            "baseClassIE7": "ui-ie7",
            /* class for FF */
            "baseClassMoz": "ui-moz",
            /* class for Opera */
            "baseClassOpera": "ui-opera",
            // M.H. 29 May 2011 - fix bug 80546: add class for webkit
			/* class for Webkit powered browsers */
            "baseClassWebkit": "ui-webkit",
            /* class for startup browse button */
            "startupBrowseButtonClasses": "ui-igstartupbrowsebutton",
            /* css class for the container */
            "baseClass": "ui-widget ui-widget ui-widget-content ui-corner-all ui-igupload",
            /* css classes applied to main container in single/multiple mode */
            "baseMainContainerClass": "ui-igupload-basemaincontainer",
            /* css classes applied to main container when multiple file upload mode is selected */
            "multipleDialogClasses": "ui-iguploadmultiple",
            /* css classes applied to main container when multiple file upload mode is selected */
            "singleDialogClass" : "ui-iguploadsingle",
            /* css classes applied on browse button - button in main container */
            "browseButtonClass": "ui-igupload-browsebutton",
            /*css classes applied to DOM element containing all file upload progress bars */
            "containerClass": "ui-igupload-container ui-widget-content",
            /* div containing separate individual file upload */
            "uploadProgressClass": "ui-igupload-uploadprogress",
            /* css class applied on div which contains add button, clear button and progress details of the files */
            "fileInfoMainContainer": "ui-igupload-fimaincontainer",
            /* css class container for each file */
            "progressContainer": "ui-helper-clearfix",
            /* css class applied on single progressbar */
            "progressBarUploadClass": "ui-igupload-progressbar-upload ui-igupload-progressbar-upload-single ui-helper-clearfix",
            /* css classes applied to file name DOM element in the summary progress bar */
            "progressBarFileNameClass": "ui-igupload-progressbar-filename",
            /* css classes applied to file size DOM element in the summary progress bar */
            "progressBarFileSizeClass": "ui-igupload-progressbar-filesize",
            /* css classes of the container of the filename DOM element and file size DOM element inside each of the progressbar */
            "progressBarInnerHTMLContainerClass": "ui-igupload-progressbar-container ui-helper-clearfix",
            /* css classes for container of the cancel/done button near the progress bar */
            "containerButtonCancelClass": "ui-container-button-cancel-class  ui-helper-clearfix",
            /* css classes applied to summary progressbar */
            "summaryProgressBarClass": "ui-igupload-summaryprogressbar",
            /* css classes applied to container of summary progress bar */
            "summaryProgressContainerClass": "ui-igupload-summaryprogresscontainer",
            /* css classes of label of the summary progress bar */
            "summaryProgressbarLabelClass": "ui-igupload-summaryprogress-label",
            /* css classes of container in summary progress area - contains label for summary progress and show/hide details button */
            "summaryInformationContainerClass": "ui-igupload-summaryinformation-container ui-helper-clearfix",
            /* css classes applied to DOM element showing status of summary progress */
            "summaryUploadedFilesLabelClass": "ui-igupload-summaryuploadedfiles-label",
            /* css classes of show/hide details button in summary progress area */
            "summaryShowHideDetailsButtonClass": "ui-igupload-showhidedetails-button",
            /* css classes which are set to the cancel button */
            "summaryButtonClass": "ui-igupload-summary-button",
            /* css classes set inside progress div */
            "summaryProgressBarInnerProgress": "ui-igupload-summaryprogres_summpbar_progress",
            /* css class for the second label in summary progress bar */
            "summaryProgressBarSecondaryLabel": "ui-igupload-summaryprogress-label ui-igupload-summaryprogress-secondary-label",
            /* Css class for container of each individual file - including progress bar, file info, cancel button, etc. */
            "containerFUS": "ui-widget-content ui-igupload-progress-container ui-corner-all ui-helper-clearfix"
        },
        options: {
            /* type="number" Get or set width of the main container of the file upload control. Main container contains all buttons, progressbar, etc.*/
	        width: '',
            /* type="number" Get or set height of the main container of the file upload control. Main container contains all buttons, progressbar, etc. */
	        height: '',
            /* type="bool" Get or set whether the file start upload automatically when it is selected. Default is false. */
            autostartupload: false,

            /* type="string" Get or set label for the first shown browse button. When file is selected for the first time this button is hidden. */
            labelUploadButton: $.ig.Upload.locale.labelUploadButton,
            /* type="string" Get or set label for browse button in main container. */
            labelAddButton: $.ig.Upload.locale.labelAddButton,
            /* type="string" Get or set label for summary Clear all button. It will be shown only in multiple upload mode. */
            labelClearAllButton: $.ig.Upload.locale.labelClearAllButton,
            /* type="string" Get or set template for showing summary template. {0} is count of uploaded files. {1} is total count of file to be uploaded. */
            labelSummaryTemplate: $.ig.Upload.locale.labelSummaryTemplate,
            // M.H. 13 May 2011 - fix bug 75042
            /* type="string" Get or set template for showing uploading information in summary progress bar. It will be shown only in multiple upload mode. {0} uploaded filesize. {1} - total file size. */
            labelSummaryProgressBarTemplate: $.ig.Upload.locale.labelSummaryProgressBarTemplate,
            /* type="string" Get or set label for show/hide details button when main container is hidden. */
            labelShowDetails: $.ig.Upload.locale.labelShowDetails,
            /* type="string" Get or set label for show/hide details button when main container is shown. */
            labelHideDetails: $.ig.Upload.locale.labelHideDetails,
            /* type="string" Get or set label for button cancelling all files. Shown only in multiple upload mode. */
            labelSummaryProgressButtonCancel: $.ig.Upload.locale.labelSummaryProgressButtonCancel,
            /* type="string" Get or set label for start upload batch files. Shown only in multiple upload mode and autostartupload is false. */
            labelSummaryProgressButtonContinue: $.ig.Upload.locale.labelSummaryProgressButtonContinue,
            /* type="string" Get or set label when upload is finished. Shown only in multiple upload mode. */
            labelSummaryProgressButtonDone: $.ig.Upload.locale.labelSummaryProgressButtonDone,
            /* type="string" Get or set filename when it could not be shown the whole file name and should be shorten. */
            labelProgressBarFileNameContinue:  $.ig.Upload.locale.labelProgressBarFileNameContinue,
            // Error Messages
            // M.H. 11 May 2011 - fix bug 74621: remove unused property errorMessageMaxFileSizeExceeded
            /* type="string" Get or set message shown when max file size of the uploaded file exceeds the limit. */
            errorMessageMaxFileSizeExceeded: $.ig.Upload.locale.errorMessageFileSizeExceeded,
            /* type="string" Get or set error message when ajax call to get file status throws error. */
            errorMessageGetFileStatus: $.ig.Upload.locale.errorMessageGetFileStatus,
            /* type="string" Get or set error message when ajax call to send cancel upload command. */
            errorMessageCancelUpload: $.ig.Upload.locale.errorMessageCancelUpload,
            /* type="string" Get or set error message when file is not found. */
            errorMessageNoSuchFile: $.ig.Upload.locale.errorMessageNoSuchFile,
            /* type="string" Get or set error message different from the other messages. */
            errorMessageOther: $.ig.Upload.locale.errorMessageOther,
            /* type="string" Get or set error message when file extension validation failed. */
            errorMessageValidatingFileExtension: $.ig.Upload.locale.errorMessageValidatingFileExtension,
            /* type="string" Get or set error message when AJAX Request to get file size throws error. */
            errorMessageAJAXRequestFileSize: $.ig.Upload.locale.errorMessageAJAXRequestFileSize,
            /* type="string" Get or set error message when trying to remove non existing file. */
            errorMessageTryToRemoveNonExistingFile: $.ig.Upload.locale.errorMessageTryToRemoveNonExistingFile,
            /* type="string" Get or set error message when trying to start non existing file. */
            errorMessageTryToStartNonExistingFile: $.ig.Upload.locale.errorMessageTryToStartNonExistingFile,
            /* type="string" Get or set error message when maximum allowed files exceeded. */
            errorMessageMaxUploadedFiles: $.ig.Upload.locale.errorMessageMaxUploadedFiles,
            /* type="string" Get or set error message when maximum simultaneous files is less or equal to 0. */
            errorMessageMaxSimultaneousFiles: $.ig.Upload.locale.errorMessageMaxSimultaneousFiles,

            /* type="string" Get or set URL for uploading. */
            uploadUrl: "ig_fua34sf345sdf13sdf3454erdsf2345asd3425df5235d54df345.aspx",
            /* type="string" Get or set URL of HTTPHandler to get information about file upload, current size and also to get commands */
            progressUrl: "IGUploadStatusHandler.ashx",

            /* type="string" Get or set file allowed file extensions. When this array is empty - it is not made such validation. Example ["gif", "jpg", "bmp"]. */
            allowedExtensions: [],
            /* type="bool" Get or set whether to show File Extension icon */
            showFileExtensionIcon: true,
            /* Get or set control specific CSS options. For example you can override specific control classes with custom ones. */
            css: null,

            /* Set icon css classes for specified file extension */
            // M.H. 27 Jul 2011 - fix bug 77162
            fileExtensionIcons: [
                // good practice is to set at the beginning of array default classes
                {
                    /* type="string" Array of string for file extensions */
                    ext: [],
                    /* type="string" Css classes which sets icon. */
                    css: '',
                    /* type="bool" Default icons when the file extension is not found. It is taken only the first item which have def set to true, other are ignored. */
                    def: false
                }
            ],
            /* type="single|multiple" Get or set multiple or single file upload. In single upload it is possible to upload only one file at the same time. */
            mode: 'single',
            /* type="number" Get or set the maximum number of allowed files to upload. */
            maxUploadedFiles: -1,
            /* type="number" Get or set count of files that could be uploaded at the same time. */
            maxSimultaneousFilesUploads: 1, // Fix bug 77030 M.H. 27 May 2011         
            /* type="bytes|kbytes|mbytes|gbytes|auto" Get or set file size metrics how to be shown files size. */
            fileSizeMetric: 'auto',
            // multiUploadView: $.ig.Constants.Upload.MultipleViewLayout.Block,
            /* type="string" UniqueId of the control - should not be changed by developer. Set from server-side wrapper. */
            controlId: '',
            /* type="int" The number of digits after the decimal point. */
            fileSizeDecimalDisplay: 2
	    },
        events: {
            /* Defines the name of the file upload selecting event. Fired when browse button is pressed. */
            fileSelecting: 'fileSelecting',
            /* Defines the name of the file upload selected event. Fired when file is selected from browse dialog. */
            fileSelected: 'fileSelected',
            /* Defines the name of the file uploading event. Fired every time when fileuploader get status for the upload. */
            fileUploading: 'fileUploading',
            /* Defines the name of the uploaded event. Fired when the file is uploaded */
            fileUploaded: 'fileUploaded',
            /* Defines the name of the file upload cancel event. Fired when the server responses that the file is canceled. */
            fileUploadAborted: 'fileUploadAborted',
            /* Defines the name of the cancel all button event click. Fired when cancel all button in summary is clicked. Fired only in multiple upload mode. */
            cancelAllClicked: 'cancelAllClicked',
            /* Defines the name of the file upload error event. Fired when error is occurred. */
            onError: 'onError'
        },
        summaryButtonModes: {
            cancel: 1,
            startupload: 2,
            done: 3
        },
		container: function () {
            // M.H. 25 Jul 2011 - fix bug 78056: add description about this function
            /*
            Return jquery object of fileupload container - html DOM element
            */
			return $('#' + this.element[0].id + "_wrprinit");
		},
        widget: function () {
            /*
            Returns the current widget element
            */
            return this.element;
        },

        _id: function (suffix, formNumber) {
            var id = this.element[0].id;

            if (formNumber !== undefined) {
                return id + '_' + formNumber + '_' + suffix;
            }

            return id + suffix;
        },

        _create: function () {
            /* create file upload element */
            var data = {
                    formNumber: 0, //current form number - we use it to generate form ids
                    iframe: {ids: []},
                    pendingQueueIDs: [], // maxSimultaneousFilesUploads feature - keep IDs
                    uploadingIDs: [], // maxSimultaneousFilesUploads feature 
                    batch: [], // maxSimultaneousFilesUploads feature 
                    lastId: -1,

                    //////////////////////////////////////////////////////////////
                    filesInfo: [],// Format fileInfo: {path:"", key: "", sizeBytes: "", uploadedBytes: "", status: self._const.status.NotStarted, checksNoSuchFile: 0}
                    countUploadingFiles: 0,
                    countTotalFiles: 0,
                    fileSizeUploaded: 0,
                    fileSizeTotal: 0
                };
            this.allCancelled = false;
            this.fileInfoData = data;
            this._renderStartupBrowseButton();
            this.container().width(this.options.width).height(this.options.height);
            this._attachFakeIframe();
            // M.H. 27 Jul 2011 - fix bug 77162 - analyze file extension icons array
            this._analyzeFileExtensionIcons();
        },

        // M.H. 27 Jul 2011 - fix bug 77162
        _analyzeFileExtensionIcons: function () {
            // analyze file extension icons array
            // check extensions as each object in array has different and unique values for ext array
            // This method is created because jQuery widget factory extends default array
            var i, j,
                arrIconExtensions = this.options.fileExtensionIcons,
                lengthIconExtensions,
                defIconExtensions = $.extend(true, [], this.defaultFileExtensionIcons),
                lengthDefaultIconExtensions = defIconExtensions.length,
                resArr = [], isDefaultDefined = false;

            if (arrIconExtensions === undefined || arrIconExtensions === null) {
                // M.H. 1 Aug 2011 - fix bug 83355
                this.options.fileExtensionIcons = defIconExtensions;
                return;
            }

            lengthIconExtensions = arrIconExtensions.length;
            if (lengthIconExtensions === 1 && arrIconExtensions[0].css === '') {
                this.options.fileExtensionIcons = defIconExtensions;
                return;
            }

            for (j = 0; j < lengthIconExtensions; j++) {
                for (i = 0; i < lengthDefaultIconExtensions; i++) {
                    defIconExtensions[i].ext = this._removeCommonElementsInArrays(defIconExtensions[i].ext, arrIconExtensions[j].ext);
                }
				// M.H. 8 Nov. 2011 Fix for bug #77162
				if (arrIconExtensions[j].def === true) {
					isDefaultDefined = true;
				}

                resArr.push(arrIconExtensions[j]);
            }

            for (i = 0; i < lengthDefaultIconExtensions; i++) {
				// M.H. 8 Nov. 2011 Fix for bug #77162
                if (defIconExtensions[i].ext.length > 0
						|| (isDefaultDefined === false && defIconExtensions[i].def === true)) {
                    resArr.push(defIconExtensions[i]);
                }
            }

            this.options.fileExtensionIcons = resArr;

        },

        _removeCommonElementsInArrays: function (arr1, arr2) {
            // remove from arr1 all common elements with arr2
            return $.grep(arr1, function (n) {
                return $.inArray(n, arr2) === -1;
            });
        },

        _attachFakeIframe: function () {
            var idTempIframe = this._id('_tempIframe'),
                browserVersion = $.browser.version.slice(0, 1);

            // fix bug with status toolbar in IE as adding blank iframe
            if ($.browser.msie === true && (browserVersion === "6" || browserVersion === "7" || browserVersion === "8")) {
                $('#' + idTempIframe).remove();
                setTimeout($('<iframe src="javascript:false;" id="' + idTempIframe + '" style="display: none;"></iframe>').appendTo($('#' + this._id('_fu'))), 300);
            }
        },

        _renderStartupBrowseButton: function () {
            /* render the button at the startup */
            var self = this,
                css = self.css,
                e = self.element,
                o = self.options,
                bbId = this._id('_ibb'),
                wrapperElementId = this._id('_wrprinit'),
                containerDiv,
                //divElement = e,
                button;

            this.originalElement = e;

            // M.H. 10 May 2011 - fix bug 75039: remove unnecessary comment and unnecessary spacing
			// K.D. May 18, 2011 Bug #75049 The ID of the elements concatenates twice as this._id is called
			// above in the definition of the variables
            containerDiv = '<div id="' + wrapperElementId + '"></div>';
            e.wrap(containerDiv);
            e.hide();
            e  = $('#' + wrapperElementId);
            // we should re-initialize the id of browse button
            bbId = this._id('_ibb');
            // M.H. 10 May 2011 - fix bug 75039: remove unnecessary comment and unnecessary spacing

            if ($.browser.msie === true && $.browser.version.slice(0, 1) === "6") {
                e.addClass(css.baseClassIE6);
            } else if ($.browser.msie === true && $.browser.version.slice(0, 1) === "7") {
                e.addClass(css.baseClassIE7);
            } else if ($.browser.opera === true) {
                e.addClass(css.baseClassOpera);
            } else if ($.browser.mozilla === true) {
                e.addClass(css.baseClassMoz);
            } else if ($.browser.webkit === true) {
                // M.H. 29 May 2011 - fix bug 80546: add check for webkit browser
                e.addClass(css.baseClassWebkit);
            }
            button = $('<button></button>').appendTo(e).attr('id', bbId).addClass(css.startupBrowseButtonClasses);
            button.igBrowseButton({
                labelText: o.labelUploadButton,
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                // Fix bug #76995 M.H. 25 May 2011
                title: $.ig.Upload.locale.titleUploadFileButtonInit,
                fileselect: function (event) {
                    $(this).css({'display': 'none'});
                    self._HTMLUpload();
                    self._onBrowseButtonFileSelected(event, true);
                    //$(this).remove();//fix for IE7 because when set css to be with display none the css is not updated
                },
                // M.H. 26 Jul 2011 - fix bug 82062 - set disabled of the init browse button
                disabled: o.disabled,
                click: function (event) {
                    // M.H. 11 May 2011 - fix bug 74553 - allow to cancel file selecting
                    var isCancelEvent = false;
                    if (self._trigger(self.events.fileSelecting, event) === false) {
                        isCancelEvent = true;
                    }

                    return !isCancelEvent;
                }
            });
        },

        _HTMLUpload: function () {
            /* render html at the beginning for the main container  */
            var uploaderId = this._id('_fu'),
                baseMainContainerId = this._id('_bmncntr'),
                o = this.options,
                e = this.container(),
                self = this,
                css = self.css,
                fileContainerId = this._id('_fc'),
                browseButtonId = this._id('_bb'),
                clearAllButtonId = this._id('_clrabtn'),
                uploaderContainerId = this._id('_fi_main_cntnr'),
                clearAllButton,
                html = '';

            if (o.mode === 'single') {
                html += '<div  class="' + css.singleDialogClass + '" id="$baseMainContainerId">';
                html += '   <div id="$uploaderId$" class="$baseMainContainerClass">';
                html += '       <div id="$fileContainerId$"></div>';
                html += '       <button id="$browseButtonId$" class="$browseButtonClass$"></button>';
                html += '   </div>';
                html += '</div>';
            } else if (o.mode === 'multiple') {
                html =  '<div class="' + css.multipleDialogClasses + '" id="$baseMainContainerId">';
                html +=  '   <div  id="$uploaderId$" class="$baseMainContainerClass">';
                html += '       <div id="$uploaderFilesContainer" class="$fuMainContainerClass">';
                html += '           <button id="$browseButtonId$" class="$browseButtonClass$"></button>';
                html += '           <button id="$clearAllButtonId$"></button>';
                html += '           <div id="$fileContainerId$"></div>';
                html += '       </div>';
                html += '   </div>';
                html += '</div>';
            }
            html = html.replace('$uploaderId$', uploaderId).replace("$browseButtonId$", browseButtonId).replace("$baseMainContainerId", baseMainContainerId).replace("$browseButtonClass$", css.browseButtonClass).replace("$fileContainerId$", fileContainerId).replace("$clearAllButtonId$", clearAllButtonId).replace("$uploaderFilesContainer", uploaderContainerId).replace("$fuMainContainerClass", css.fileInfoMainContainer).replace("$baseMainContainerClass", css.baseMainContainerClass);

            $(html).appendTo(e).css({width: o.width, height: o.height}).addClass(css.baseClass);

            // Fix bug 77116 M.H. remove draggable feature
            // Draggable feature
            //$('#' + baseMainContainerId).draggable({ cancel: '#' + uploaderContainerId});
            // End of draggable feature
            clearAllButton = $('#' + clearAllButtonId);
            if (clearAllButton.length > 0) {
                clearAllButton.igButton({
                    // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                    title: $.ig.Upload.locale.titleClearAllButton,
                    labelText: o.labelClearAllButton,
                    disabled: true,
                    click: function (event) {
                        event.preventDefault();
                        self.clearAll();
                    },
                    css: {
                        "buttonClasses"                         : "ui-igbutton ui-igupload-button-clear-all",
                        "buttonHoverClasses"                    : "",
                        "buttonActiveClasses"                   : "", // when button is clicked 
                        "buttonFocusClasses"                    : "", // when button get focus
                        "buttonLabelClass"                      : ""
                    }
                });
            }

            $('#' + browseButtonId).igBrowseButton({
                labelText: this.options.labelAddButton,
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                title: $.ig.Upload.locale.titleAddFileButton,
                //icons: {primary: "ui-icon-plusthick"}
                fileselect: function (event) {
                    self._onBrowseButtonFileSelected(event, false);
                },
                click: function (event) {
                    // M.H. 11 May 2011 - fix bug 74553 - allow to cancel file selecting
                    var isCancelEvent = false;

                    if (self._trigger(self.events.fileSelecting, event) === false) {
                        isCancelEvent = true;
                    }
                    return !isCancelEvent;
                }
            });

            $('#' + fileContainerId).addClass(css.containerClass);

            if (o.mode === 'multiple') {
                self._spbRenderInit();
            }
        },

        _disableBrowseButton: function (isToDisable) {
            $('#' + this._id('_bb')).igBrowseButton('option', 'disabled', isToDisable);
            $('#' + this._id('_ibb')).igBrowseButton('option', 'disabled', isToDisable);
        },

        _checkMaxUploadingFilesCount: function () {
            var o = this.options,
                allowUpload = true,
                totalFiles = this.fileInfoData.countTotalFiles + 1;
            //totalFiles= (beforeUpload === true)? totalFiles + 1: totalFiles;
            if (o.maxUploadedFiles !== this._const.maxUploadFilesDefault && o.maxUploadedFiles !== null && totalFiles > o.maxUploadedFiles) {
                allowUpload = false;
            }

            return allowUpload;
        },

        _onBrowseButtonFileSelected: function (event, isInitBrowseButton) {
            // Event handler when file is selected
            // event - event object of click
            // isInitBrowseButton - bool parameter indicates whether the method is called by browsebutton in main container or at the startup
            var self = this, data = this.fileInfoData,
                o = self.options,
                uploader = $('#' + this._id('_fu'));

            if (self._checkMaxUploadingFilesCount() === false) {
                // check maximum allowed uploading files                                
                self._setError(o.errorMessageMaxUploadedFiles, self._const.clientSideErrorCode.maxAllowedUploadingFiles, 'clientside');
                self._disableBrowseButton(true);
                return;
            }
			if (o.maxUploadedFiles !== null && o.maxUploadedFiles !== this._const.maxUploadFilesDefault && o.maxUploadedFiles === (data.countTotalFiles + 1)) {
                self._disableBrowseButton(true);
            }
            if (o.mode === 'single') {
                // check if previous file(if exists) is uploaded                
                if (data.iframe.ids.length === 0) {
                    self._removeSingleUpload(data.lastId);
                    if (self._attachIframe(event, uploader, isInitBrowseButton) === true) {
                        self._disableBrowseButton(true);
                    }
                }
            } else if (o.mode === 'multiple') {
                // attach Iframe
                // M.H. 2 June 2011 - fix bug 77157
                if (self._attachIframe(event, uploader, isInitBrowseButton) === false) {
                    self._disableBrowseButton(false); // enable browse button if could not attach iframe - e.g. validation is not correct
                }
            }
        },

        clearAll: function () {
            /*
            Hide finished files
            */
            var e = this.container(), arr = e.data('finishedIDs'), id, l;

            if (arr === undefined) {
                return;
            }
            l = arr.length;
            for (id = 0; id < l; id++) {
                this._removeSingleUpload(arr[id]);
            }

            arr = [];
            e.data('finishedIDs', arr);
            this._disableClearAllButton();
        },

        _enableClearAllButton: function () {
            $('#' + this._id('_clrabtn')).igButton({disabled: false});
        },

        _disableClearAllButton: function () {
            $('#' + this._id('_clrabtn')).igButton('option', 'disabled', true);
        },

        _attachIframe: function (event, uploader, isInitBrowseButton) {
            var self = this, o = self.options,
                data = this.fileInfoData,
                browseButtonId = this._id('_bb'),
                browse = $('#' + browseButtonId),
                fileId = data.formNumber++,
                iframeId = this._id('_ifrm', fileId),
                formId = this._id('_frm', fileId),
                filePicker, // represents DOM element <input type=file />
                fileData = this.fileInfoData,
                iframe, form,
                key = self._randomString(30),
                status = self._const.status.Started,
                cid = o.controlId,
                uploadUrl = o.uploadUrl + '?key=' + key + '&cid=' + cid;
            if (isInitBrowseButton === true) {
                filePicker = $('#' + this._id('_ibb')).igBrowseButton('getFilePicker');
            } else {
                filePicker = browse.igBrowseButton('getFilePicker');
            }

            if (self._validateFileExtension(filePicker[0].value) === false) {
                // we need to remove DOM element( <input type=file />) because we don't need of it anymore
                filePicker.remove();
                self._setError(o.errorMessageValidatingFileExtension, self._const.clientSideErrorCode.extensionValidation, 'clientside');

                // when validation failed it should be shown properly summary progress bar information
                if (o.mode === 'multiple') {
                    self._spbRenderProgress();
                }
                // M.H. Fix bug 77157 - when validation failed check count of max uploaded files is greater or equal than current files count - if so enable browse button
                if (o.maxUploadedFiles !== null && o.maxUploadedFiles >= (data.countTotalFiles + 1)) {
                    self._disableBrowseButton(false);
                }

                return false;
            }
            // _spb feature
            // checksNoSuchFile - count of requests to the handler if it returns no such file status
            fileData.filesInfo[fileId] = {path: filePicker.val(), key: key, sizeBytes: 0, uploadedBytes: 0, status: self._const.status.NotStarted, checksNoSuchFile: 0, innerStatus: self._const.status.NotStarted};

            fileData.countTotalFiles++;
            self._spbRenderProgress();
            // //end of _spb feature

            // DO NOT set id and name as attribute because in IE7 does not work properly - on start upload opens new browser
            iframe = $('<iframe src="javascript:false;" id="' + iframeId + '" name="' + iframeId + '"></iframe>').appendTo($(document.body)).css({'display': 'none'});
            form = $('<form method="post" enctype="multipart/form-data"></form>').attr('id', formId).attr('target', iframeId).attr("action", uploadUrl).appendTo($(document.body));

            filePicker.attr('name', formId + '_if').attr('id', formId + '_if').appendTo(form);
            self._HTMLSingleUpload(fileId);
//            if (o.mode === 'single') {
//                self.startUpload(fileId);
//            } else {
            if (o.autostartupload === true) {
                // in multiple upload mode - if we can upload - check the number for maxSimultaneousFilesUploads
                if (self._checkCanUpload() === true) {
                    self.startUpload(fileId);
                    // M.H. 27 Jul 2011 - fix bug 77339
                    //self._addUploadingID(fileId);
                } else {
                    self._addPendingId(fileId);
                    status = self._const.status.NotStarted;
                    // if could not start upload because maxSimultaneousFilesUploads then get file size
                    self._getFileSize(fileId, key);
                }
            } else {
                if (o.mode === 'single') {
                    self._showSingleUploadStartUpload(true, fileId);
                    self._getFileSize(fileId, key);
                } else {
                    // autostartupload is false - then add to pending IDs
                    self._addIDBatch(fileId);
                    status = self._const.status.NotStarted;
                    self._getFileSize(fileId, key);
                }
                // _spb feature batch
            }

            data.iframe.ids[data.iframe.ids.fileId] = {id: fileId, status: status};
            if (o.mode === 'multiple') {
                self._spbCheckModeButton();
            }

            self._trigger(self.events.fileSelected, event, {fileId: fileId, filePath: self._getOnlyFileName(filePicker.val())});
            return true;
        },

        _showSingleUploadStartUpload: function () {
            // check if exists such button
            // if not exists add to markup
            var self = this,
                o = self.options,
                startUploadButtonId = '_strtuplbtn',
                startUploadButton = $('#' + this._id(startUploadButtonId)),
                browseButton = $('#' + this._id('_bb'));

            if (startUploadButton.length === 0) {
                // add the button to markup
                $('<button id="' + self._id(startUploadButtonId) + '"></button>').appendTo($('#' + self._id('_fu'))).igButton({
                    labelText: o.labelSummaryProgressButtonContinue,
                    // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                    title: $.ig.Upload.locale.titleSingleUploadButtonContinue,
                    click: function (e) {
                        e.preventDefault();
                        self.startUpload((self.fileInfoData.formNumber - 1), e);
                        // M.H. 27 Jul 2011 - fix bug 77339
                        // it should be called because bug 72252
                        browseButton.igBrowseButton('attachFilePicker', e, true);
                    }
                });
                startUploadButton = $('#' + this._id(startUploadButtonId));
            }
            browseButton.hide();
            startUploadButton.show();
        },

        _removeIframe: function (iframeNumber) {
            var self = this,
                data = this.fileInfoData,
                iframeId = this._id('_ifrm', iframeNumber),
                formId = this._id('_frm', iframeNumber),
                browseButton = $('#' + self._id('_bb'));

            $('#' + iframeId).remove();
            $('#' + formId).remove();
            data.iframe.ids = self._removeElementArrayById(data.iframe.ids, iframeNumber);
            if (self.options.mode === 'single') {
                browseButton.igBrowseButton('option', 'disabled', false);
                data.lastId = iframeNumber;
            }
            this._attachFakeIframe();
        },
        _HTMLSingleUpload: function (formNumber) {
            var self = this,
                o = this.options,
                css = self.css,
                fileContainerId = self._id('_fc'),
                fileUploadStatusId =  self._id('_fus', formNumber),
                singleProgressBarId =  self._id('_snglpbar', formNumber),
                iconId =  self._id('_icn', formNumber),
                formId = self._id('_frm', formNumber),
                cancelButtonId = self._id('_cbtn', formNumber),
                filePickerId = formId + '_if',
                fileContainer = $('#' + fileContainerId),
                filePicker = $('#' + filePickerId),
                fileUploadStatus,
                fileName = filePicker.val(),
                html,
                progressBarFileNameId = self._id('_pbrflnm', formNumber),
                progressBarFileSizeId = self._id('_pbrflsz', formNumber),
                progressBarFileName,
                progressBarFileSize,
                singleProgressBar,
                iconClass = self._getFileExtensionIconPath(self._getFileExtension(fileName));// progressbar inner html

            html =      '<div id="' + fileUploadStatusId + '">';
            html +=     '   <div class="' + css.containerFUS + '">';
            html +=     '       <div class="' + css.containerButtonCancelClass + '">';
            html +=     '           <button id="' + cancelButtonId + '"></button>';
            html +=     '       </div>';
            html +=     '       <div class="' + css.progressContainer + '">';
			// M.H. 8 Nov. 2011 Fix for bug #77166
            html +=     '           <div class="' + css.progressBarInnerHTMLContainerClass + '" title="' + fileName + '">';
            html +=     '               <span id="' + iconId + '" class="' + iconClass + '"></span>';
            html +=     '               <span class="' + css.progressBarFileNameClass + '" id="' + progressBarFileNameId + '"></span>';
            html +=     '               <span class="' + css.progressBarFileSizeClass + '" id="' + progressBarFileSizeId + '"></span>';
            html +=     '           </div>';
            html +=     '           <div id="' + singleProgressBarId + '" class="' + css.progressBarUploadClass + '"></div>';
            html +=     '       </div>';
            html +=     '   </div>';
            html +=     '</div>';


            $(html).appendTo(fileContainer);
            fileUploadStatus = $('#' + fileUploadStatusId).addClass(css.uploadProgressClass + ' ' + css.clearClass);
            singleProgressBar = $('#' + singleProgressBarId);
            $('#' + cancelButtonId).igButton({
                onlyIcons: true,
                icons: {primary: 'ui-icon-closethick'},
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                title: $.ig.Upload.locale.titleCancelUploadButton,
                click: function (event) {
                    // M.H. 11 May 2011 - fix bug 75137 - prevent default
                    event.preventDefault();
                    self.cancelUpload(formNumber);
                    $('#' + cancelButtonId).igButton('option', 'disabled', true).igButton('option', 'icons', {primary: 'ui-icon-check', secondary: null});
                },
                css: {
                    "buttonClasses"                         : "ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-igbutton ui-igupload-cancel-button",
                    "buttonHoverClasses"                    : "ui-state-hover",
                    "buttonActiveClasses"                   : "ui-state-active", // when button is clicked 
                    "buttonFocusClasses"                    : "ui-state-focus", // when button get focus
                    "buttonLabelClass"                      : "ui-button-text",
                    "buttonDisabledClass"                   : "ui-state-disabled",
                    "buttonPrimaryIconClass"                : "ui-button-icon-primary ui-icon",
                    "buttonMainElementPrimaryIconClass"     : " ui-button-text-icon-primary",
                    "buttonMainElementSecondaryIconClass"   : " ui-button-text-icon-secondary",
                    "buttonSecondaryIconClass"              : "ui-button-icon-secondary ui-icon",
                    "buttonIconsOnly"                       : "ui-button-icons-only",
                    "buttonIconOnly"                        : "ui-button-icon-only",
                    "buttonIcons"                           : "ui-button-text-icons",
                    "buttonTextOnlyClass"                   : "ui-button-text-only"
                }
            });

            singleProgressBar.igProgressBar({
                animate: self._const.isProgressBarAnimationEnabled,
                animateTimeout: self._const.animateProgressBarInterval,
                range: self._const.isProgressBarRange,
                value: 0
            });

            if (!o.showFileExtensionIcon) {
                $('#' + iconId).css('display', 'none');
            }

            progressBarFileName = $('#' + progressBarFileNameId);
            progressBarFileSize = $('#' + progressBarFileSizeId);

            fileName = self._getOnlyFileName(fileName);
            singleProgressBar.data('originalFileName', fileName);

            if (fileName.length > self._const.fileNameLimit) {
                fileName = fileName.substr(0, self._const.fileNameLimit);
            }
            progressBarFileName.text(self._formatFilePath(fileName));
            // M.H. 10 May 2011 - fix bug 74272
            self._renderFileName(formNumber, 0, fileName);
        },

        // M.H. 10 May 2011 - fix bug 74272: add method to render FileName properly in file upload info
        _renderFileName: function (formNumber, fileSize, fn) {
            var self = this,
                o = self.options,
                fileName = fn,
                previousFileName = '',
                originalFileSize,
                progressBarFileName = $('#' + self._id('_pbrflnm', formNumber)),
                progressBarFileSize = $('#' + self._id('_pbrflsz', formNumber)),
                singleProgressBarWidth = $('#' + self._id('_snglpbar', formNumber)).width(),
                singleProgressBar = $('#' + self._id('_snglpbar', formNumber)),
                progressBarFileSizeWidth = progressBarFileSize.width();

			// M.H. 22 Aug 2012 Fix for bug #119469
			if (progressBarFileName.length === 0) {
				return;
			}
            if (fileName === undefined || fileName === null) {
                fileName = singleProgressBar.data('fileName');
            }
            // autotrim - check for the size
            if (singleProgressBarWidth <= 0) {
                fileName = o.labelProgressBarFileNameContinue;
                progressBarFileName.text(fileName);
            } else {
                if (fileSize !== 0 && fileSize !== undefined && fileSize !== null) {
                    originalFileSize = progressBarFileSize.text();
                    progressBarFileSizeWidth = progressBarFileSize.text(self._formatFileSize(fileSize) + '/' + self._formatFileSize(fileSize)).width();
                    progressBarFileSize.text(originalFileSize);
                }

                while (progressBarFileName.position().left + progressBarFileName.width() + progressBarFileSizeWidth >= singleProgressBarWidth && (previousFileName !== fileName)) {
                    previousFileName = fileName;
                    fileName = fileName.substr(0, fileName.length / 2);
                    if (previousFileName === fileName && fileName.length - 1 > 1) {
                        fileName = fileName.substr(0, (fileName.length - 1) / 2);
                    }
                    progressBarFileName.text(fileName + o.labelProgressBarFileNameContinue);
                }

                if (progressBarFileName.position().left + progressBarFileName.width() + progressBarFileSize.width() >= singleProgressBarWidth) {
                    fileName = o.labelProgressBarFileNameContinue;
                }
            }
            singleProgressBar.data('fileName', fileName);
        },

        _removeSingleUpload: function (formNumber) {
            var self = this,
                fileUploadStatusId =  self._id('_fus', formNumber),
                fileUploadStatusTmpId = fileUploadStatusId + '_' + self._randomString(20);
            if (self.options.mode === 'multiple') {
                $('#' + fileUploadStatusId).attr('id', fileUploadStatusTmpId);
                self._renderAnimatedRemovingUpload(fileUploadStatusTmpId);
            } else if (self.options.mode === 'single') {
                $('#' + fileUploadStatusId).hide().remove();
                //self._renderAnimatedRemovingUpload(fileUploadStatusId);
            }
        },

        _renderAnimatedRemovingUpload: function (id) {
            $('#' + id).slideUp(this._const.removeSingleUploadAnimationTimeout, function () {
                $(this).remove();
            });
        },

        startUpload: function (formNumber) {
            /* Start uploading file as submitting form with the specified formNumber.
             paramType="number" id of the upload form
             */
            var self = this,
                formId = self._id('_frm', formNumber),
                fileData = this.fileInfoData;

            if (formNumber === null || fileData.filesInfo[formNumber] === null || fileData.filesInfo[formNumber] === undefined) {
                self._setError(self.options.errorMessageTryToStartNonExistingFile.replace('{0}', formNumber), self._const.clientSideErrorCode.startUpload, 'clientside');
                return;
            }

            // M.H. 10 May 2011 - fix bug 74258: check file is with status NotStarted
            if (fileData.filesInfo[formNumber].status !== self._const.status.NotStarted) {
                return;
            }

            $('#' + formId).submit();
            // M.H. 27 Jul 2011 - fix bug 77339
            self._addUploadingID(formNumber);
            self._removeIDBatch(formNumber);
            self._spbCheckModeButton();
            // summary progress bar
            fileData.filesInfo[formNumber].status = self._const.status.Started;
            fileData.filesInfo[formNumber].innerStatus = self._const.status.Started;
            self._spbRenderProgress();

            // M.H. 27 Jul 2011 - fix bug 77339
            if (this.options.mode === 'single') {
                $('#' + self._id('_strtuplbtn')).hide();
                $('#' + self._id('_bb')).igBrowseButton('option', 'disabled', true).show();
            }

            setTimeout(
                function () {
                    self._getFileStatus(formNumber, true);
                },
                self._const.progressUpdateInterval
            );
        },

        _getFileStatus: function (formNumber, isNewFile) {
            var self = this, o = self.options,
                formId = self._id('_frm', formNumber),
                filePickerId = formId + '_if',
                isFinishUpload = false,
                status = '', bytesUploaded = 0, fileSize = 0,
                filePicker = $('#' + filePickerId),
                singleFileData = this._getFileInfo(formNumber),
                fileData = this.fileInfoData,
                key = self._getKey(formNumber),
                fileDetails = fileData.filesInfo[formNumber],
                error, isError,
                serverMessage = '';

            if (key === null || key  === undefined) {
                return;
            }

            key = key.replace('-$#', '').replace('#$-', '');
            $.ajaxQueue('uploadrequestsqueue', {
                url: self._formatURL(o.progressUrl, $.param({'key': key, 'command': 'status'})),
                dataType: 'json',
                cache: false,
                success: function (data) {
                    bytesUploaded = parseInt(data.bytesUploaded, 10);
                    status = parseInt(data.status, 10);
                    fileSize = parseInt(data.size, 10);
                    serverMessage = data.serverMessage;
                    isFinishUpload = (status === self._const.status.Finished);
                    error = parseInt(data.error, 10);
                    isError = (!isNaN(error) && error !== self._const.fileStatusNoError);
                    // _spb feature

                    if (fileDetails.innerStatus === self._const.status.Canceled && isError) {
                        return;
                    }

                    if (isError === true && status !== self._const.status.NoSuchFile) {
                        self._removeUploadSetError(formNumber, o.errorMessageOther.replace("{0}", error), error, 'serverside', serverMessage);
                        return;
                    }

                    if (singleFileData !== null && singleFileData.status !== self._const.status.Canceled) {
                        fileData.fileSizeUploaded -= singleFileData.uploadedBytes;
                        if (singleFileData.sizeBytes === 0 || singleFileData.sizeBytes === null) {
                            singleFileData.sizeBytes = fileSize;
                            fileData.fileSizeTotal += fileSize;
                        } else if (singleFileData.sizeBytes !== fileSize) {
                            // show in the right way file size when file size is taken first from getFileSize and then file is started
                            // it is used the value taken from server from getFileSize
                            fileSize = singleFileData.sizeBytes;
                        }
                        if (isFinishUpload) {
                            fileData.countUploadingFiles++;
                        }
                        singleFileData.uploadedBytes = bytesUploaded;
                        singleFileData.status = status;

                        fileData.fileSizeUploaded += singleFileData.uploadedBytes;
                        self._spbRenderProgress();
                        // M.H. 11 May 2011 - fix bug 74553: enable to cancel upload through event handler of fileUploading
                        if (self._trigger(self.events.fileUploading, null, {fileId: formNumber, filePath: self._getOnlyFileName(filePicker.val()), totalSize: fileSize, uploadedBytes: bytesUploaded, fileStatus: status}) === false) {
                            self.cancelUpload(formNumber);
                        }
                    }
	                // // end of _spb feature

                    if (isFinishUpload || status === self._const.status.Started) {
                        if (isFinishUpload) {
                            // SimultaneousFilesUploads feature
                            self._removeUploadingID(formNumber);

                            if (o.mode === 'multiple') {
                                self._spbCheckModeButton();
                                self._submitNextPendingId();
                            }
                        }

                        self._renderStatus(formNumber, bytesUploaded, fileSize, isFinishUpload, isNewFile);
                        if (!isFinishUpload) {
                            setTimeout(function () {
                                self._getFileStatus(formNumber, false);
                            }, self._const.progressUpdateInterval);
                        }
                    } else if (status === self._const.status.NoSuchFile) {
                        // double check - if it is not found file with such key send again request to the server

                        if (fileDetails !== null && fileDetails !== undefined && fileDetails.checksNoSuchFile === 0) {
                            fileDetails.checksNoSuchFile++;

                            setTimeout(function () {
                                self._getFileStatus(formNumber, false);
                            }, self._const.doubleCheckRequestInterval);
                        } else {
                            self._removeUploadSetError(formNumber, o.errorMessageNoSuchFile, 'nosuchfilekeyid', 'serverside', serverMessage);
                        }
                    }
                },
                error: function () {
                    self._setError(o.errorMessageGetFileStatus, self._const.clientSideErrorCode.ajaxErrorGetFileStatus, 'clientside');
                    // self._removeUploadSetError(formNumber, o.errorMessageGetFileStatus);
                }
            });
        },

        _removeUploadSetError: function (formNumber, errorMessage, errorCode, errorType, serverMessage) {
            var self = this, o = this.options;

            self._removeIframe(formNumber);
            self._removeFileUpload(formNumber);
            self._setError(errorMessage, errorCode, errorType, serverMessage);
            if (o.mode === 'multiple') {
                self._spbCheckModeButton();
                self._submitNextPendingId();
            }
        },

        cancelUpload: function (formNumber) {
            /* Cancel upload for the specified file id
             formNumber - id of the file to be canceled
             paramType="number" id of the form which should be cancelled
             */
            var self = this,
                o = self.options,
                continueButton = null,
                singleProgressBarId =  self._id('_snglpbar', formNumber),
                singleProgressBar = $('#' + singleProgressBarId),
                filePicker = $('#' + self._id('_frm', formNumber) + '_if'),
                fileName = filePicker.val(),
                totalSize = 0,
                bytesUploaded = 0,
                allIds = null,
                key = this._getKey(formNumber),
                singleFileInfo = this._getFileInfo(formNumber);

            totalSize = singleProgressBar.data('totalSize');
            bytesUploaded = singleProgressBar.data('bytesUploaded');
            if (totalSize === undefined) {
                totalSize = 0;
            }
            if (bytesUploaded === undefined) {
                bytesUploaded = 0;
            }

            //self._trigger(self.events.fileUploadCancelClick, null, {fileId: formNumber, filePath: self._getOnlyFileName(fileName), uploadedBytes: bytesUploaded, totalSize: totalSize});
            // _spb feature
            if (singleFileInfo !== null) {
                if (singleFileInfo.status === self._const.status.Started) {
                    singleFileInfo.innerStatus = self._const.status.Canceled;
                    $.ajaxQueue('uploadrequestsqueue', {
                        url: self._formatURL(o.progressUrl, $.param({'key': key, 'command': 'cancel'})),
                        dataType: 'json',

                        cache: false,
                        success: function () {
                            // all submit upload feature
                            if (o.autostartupload === false && o.mode === 'multiple') {
                                continueButton = $('#' + self._id('_spbtncncl'));
                                allIds = continueButton.data('ids');
                                allIds = self._removeElementFromArray(allIds, formNumber);
                                continueButton.data('ids', allIds);
                            }
                            self._trigger(self.events.fileUploadAborted, null, {fileId: formNumber, filePath: self._getOnlyFileName(fileName), uploadedBytes: bytesUploaded, totalSize: totalSize, status: self._const.status.Canceled });
                            self._removeFileUpload(formNumber);
                        },
                        error: function () {
                            self._setError(o.errorMessageCancelUpload, self._const.clientSideErrorCode.ajaxErrorCancelUpload, 'clientside');
                            self._removeFileUpload(formNumber);
                        }
                    });

                    // end of _spb feature                
                } else if (singleFileInfo.status === self._const.status.NotStarted) {
                    if (o.mode === 'single') {
                        $('#' + this._id('_strtuplbtn')).hide();
                        $('#' + this._id('_bb')).igBrowseButton('option', 'disabled', 'false').show();
                    }
                    self._trigger(self.events.fileUploadAborted, null, {fileId: formNumber, filePath: self._getOnlyFileName(fileName), uploadedBytes: 0, totalSize: totalSize, status: self._const.status.NotStarted });
                    self._removeFileUpload(formNumber);
                }

                // M.H. 27 Jul 2011 - fix bug77257: check whether to disable browse button when countTotalFiles is updated - remove check for disabling browse button
            }
        },

        _removeFileUpload: function (formNumber) {
            var self = this,
                o = self.options,
                cancelButtonId = self._id('_cbtn', formNumber),
                singleProgressBarId =  self._id('_snglpbar', formNumber),
                singleProgressBar = $('#' + singleProgressBarId),
                totalSize = 0,
                bytesUploaded = 0,
                fileData = this.fileInfoData,
                singleFileInfo = this._getFileInfo(formNumber);

            if (singleFileInfo === null) {
                self._setError(o.errorMessageTryToRemoveNonExistingFile.replace('{0}', formNumber), self._const.clientSideErrorCode.removeFileUpload, 'clientside');
                return;
            }

            totalSize = singleProgressBar.data('totalSize');
            bytesUploaded = singleProgressBar.data('bytesUploaded');
            if (totalSize === undefined) {
                totalSize = 0;
            }
            if (bytesUploaded === undefined) {
                bytesUploaded = 0;
            }

            // show summary progress
            fileData.countTotalFiles--;
            // if the file is started but not finished

            singleFileInfo.status = self._const.status.Canceled;
            fileData.fileSizeUploaded -= singleFileInfo.uploadedBytes;

            fileData.fileSizeTotal -= singleFileInfo.sizeBytes;
	        self._spbRenderProgress();

            if (o.mode === 'multiple') {
                // maxSimultaneousFilesUploads feature
                self._removeUploadingID(formNumber);
                self._removePendingId(formNumber);
                self._removeIDBatch(formNumber);

                if (this.allCancelled === false) {
                    self._submitNextPendingId();
                }
                self._spbCheckModeButton();
            }

            $('#' + cancelButtonId).remove();
            self._removeIframe(formNumber);
            self._removeSingleUpload(formNumber);

            // M.H. 27 Jul 2011 - fix bug77257: check whether to disable browse button when countTotalFiles is updated
            // check maximum allowed uploading files
            self._disableBrowseButton(!self._checkMaxUploadingFilesCount());
        },

        _getKey: function (formNumber) {
            var a = this.fileInfoData.filesInfo[formNumber];
            if (a !== null && a !== undefined) {
                return a.key;
            }
            return null;
        },

        _singleFileUploadFinished: function (formNumber) {
            var e = this.container(), self = this, arr;

            $('#' + self._id('_cbtn', formNumber)).igButton('option', 'disabled', true).igButton('option', 'icons', {primary: 'ui-icon-check', secondary: null});

            self._removeIframe(formNumber);

            if (self.options.mode === 'multiple') {
                self._enableClearAllButton();
                arr = e.data('finishedIDs');
                if (arr === undefined) {
                    arr = [];
                }
                arr.push(formNumber);
                e.data('finishedIDs', arr);
            }
        },

        _renderStatus: function (formNumber, bytesUploaded, fileSize, isFinished) {
            var self = this,
                fileName,
                originalFileName,
                statusLabel = $('#' + self._id('_pbrflsz', formNumber)),
                singleProgressBarId =  self._id('_snglpbar', formNumber),
                singleProgressBar = $('#' + singleProgressBarId),
                percentUploaded = 0,
                fileNameRendered;

            if (isFinished) {
                bytesUploaded = fileSize;
                self._singleFileUploadFinished(formNumber);
            }
            if (fileSize !== 0 && isNaN(bytesUploaded) === false && isNaN(fileSize) === false) {
                percentUploaded = (bytesUploaded / fileSize) * 100;
            }

            singleProgressBar.data('totalSize', fileSize);
            singleProgressBar.data('bytesUploaded', bytesUploaded);
            // M.H. 10 May 2011 - fix bug 74272
            fileNameRendered = singleProgressBar.data('isFileNameRendered');
            fileName = singleProgressBar.data('fileName');
            originalFileName = singleProgressBar.data('originalFileName');
            singleProgressBar.igProgressBar('option', 'value', percentUploaded);
            statusLabel.text(self._formatFileSize(bytesUploaded) + '/' + self._formatFileSize(fileSize)); // + ' (' + percentUploaded.toFixed(3) + '%)'

            // M.H. 10 May 2011 - fix bug 74272            
            if (fileNameRendered !== true) {
                singleProgressBar.data('isFileNameRendered', true);
                self._renderFileName(formNumber, fileSize);
            }

            if (isFinished) {
                self._trigger(self.events.fileUploaded, null, {fileId: formNumber, filePath: originalFileName, totalSize: bytesUploaded});
                if (self._checkMaxUploadingFilesCount() === false) {
                    // check maximum allowed uploading files
                    self._disableBrowseButton(true);
                    return;
                }
            }
        },

        _formatURL: function (url, args) {
            // check if url contains ? - if not add, else add
            if (url.indexOf('?') === -1) {
                url += '?';
            }

            url += args;
            return url;
        },

        _showHideIcons: function (properties) {
            var files = this.fileInfoData.filesInfo, i;

            for (i in files) {
                if (files[i] !== undefined) {
                    $('#' + this._id('_icn', i)).css(properties);
                }
            }
        },

        _setWidthHeightAllUploads: function (value, isHeight) {
            var files = this.fileInfoData.filesInfo,
                option = ((isHeight) ? 'height' : 'width'),
				i;

			for (i in files) {
                if (files[i] !== undefined) {
                    $('#' + this._id('_snglpbar', i)).igProgressBar('option', option, value);
                }
            }
        },

        _setOption: function (key, value) {
            var originalMode = this.options.mode,
				originalAutoStartUpload = this.options.autostartupload;

            $.Widget.prototype._setOption.apply(this, arguments);
            switch (key) {
            case "width":
                this.container().width(value);
                $('#' + this._id('_bmncntr')).width(value);
                // Fix bug #75939 M.H. 27 May 2011
                this._reRenderFileSizeMetrics();

                // Fix bug #77383 M.H. 27 Jul 2011
                this._reRenderFileNames();
                break;
            case "height":
                this.container().height(value);
                $('#' + this._id('_bmncntr')).height(value);
                break;
            case "labelUploadButton":
                $('#' + this._id('_ibb')).igBrowseButton('option', 'labelText', value);
                break;
            case "labelAddButton":
                $('#' + this._id('_bb')).igBrowseButton('option', 'labelText', value);
                break;
            case "labelClearAllButton":
                $('#' + this._id('_clrabtn')).igButton('option', 'labelText', value);
                break;
            case "labelSummaryTemplate":
            case "labelSummaryProgressBarTemplate":
                // it is set option and it should be refreshed template for summary progress
                this._spbRenderProgress();
                break;
            case "labelShowDetails":
            case "labelHideDetails":
                this._setShowHideDetailsButtonText($('#' + this._id('_shdbtn')).is('hidden'));
                $('#' + this._id('_shdbtn')).text(value);
                break;
            case "labelSummaryProgressButtonCancel":
                if (this.spbButtonMode === this.summaryButtonModes.cancel) {
                    $('#' + this._id('_spbtncncl')).igButton('option', 'labelText', value);
                }
                break;
            case "labelSummaryProgressButtonContinue":
                if (this.spbButtonMode === this.summaryButtonModes.startupload) {
                    $('#' + this._id('_spbtncncl')).igButton('option', 'labelText', value);
                }
                break;
            case "labelSummaryProgressButtonDone":
                if (this.spbButtonMode === this.summaryButtonModes.done) {
                    $('#' + this._id('_spbtncncl')).igButton('option', 'labelText', value);
                }
                break;
            case "showFileExtensionIcon":
                this._showHideIcons({'display': ((!value) ? 'none' : 'block')});
                break;
            // M.H. 10 May 2011 - fix bug 74174: change fileSize Metric for all items that are displayed
            case "fileSizeMetric":
                this._reRenderFileSizeMetrics();
                break;
            // M.H. 10 May 2011 - fix bug 74172: change add in setOption case for fileSizeDecimalDisplay
            case "fileSizeDecimalDisplay":
                this._reRenderFileSizeMetrics();
                break;
            // M.H. 11 May 2011 - fix bug 74305:
            case "maxUploadedFiles":
                this._disableBrowseButton(!this._checkMaxUploadingFilesCount());
                break;
            // M.H. 11 May 2011 - fix bug 77331: add option for mode. When changing mode re-create widget(first destroy it) 
            case "mode":
                if (originalMode !== value) {
                    // M.H. 28 Jul 2011 - fix bug 77183 - remove html markup - it should not be used destroy method
                    this._destroyMarkup();
                    this._create();
                }
                break;
            // M.H. 26 Jul 2011 - fix bug 82062 - set disabled of the init browse button
            case "disabled":
                this._disableBrowseButton(value);
                break;
			// M.H. 9 Nov. 2011 - fix bug 77279 - when value is set to true then all pending files are submitted
			case "autostartupload":
				if (value === true && value !== originalAutoStartUpload) {
					this._spbSubmitAllButton();
				}
				break;
            }
        },

        // M.H. 10 May 2011 - fix bug 74174: change fileSize Metric for all items that are displayed, add method
        _reRenderFileSizeMetrics: function () {
            var data = this.fileInfoData.filesInfo,
                l = data.length,
                i,
                // M.H. 1 June 2011 Fix bug #77180
                bytesUploaded = 0,
                self = this,
                fileSize,
                fileName,
                originalFileName,
                statusLabel,
                singleProgressBar,
                percentUploaded = 0;

            for (i = 0; i < l; i++) {
                // check if exist summary progress bar as DOM element
                // Fix bug #76775 M.H. 26 May 2011
                // M.H. 1 June 2011 Fix bug #77180
                statusLabel = $('#' + self._id('_pbrflsz', i));
                if (statusLabel.length === 0) {
                    continue;
                }

                fileSize = data[i].sizeBytes;
                bytesUploaded = data[i].uploadedBytes;
                singleProgressBar = $('#' + self._id('_snglpbar', i));

                if (fileSize !== 0 && isNaN(bytesUploaded) === false && isNaN(fileSize) === false) {
                    percentUploaded = (bytesUploaded / fileSize) * 100;
                }

                fileName = singleProgressBar.data('fileName');
                originalFileName = singleProgressBar.data('originalFileName');

                statusLabel.text(self._formatFileSize(bytesUploaded) + '/' + self._formatFileSize(fileSize)); // + ' (' + percentUploaded.toFixed(3) + '%)'

                singleProgressBar.data('isFileNameRendered', true);
                self._renderFileName(i, fileSize);
                $('#' + self._id('_summpbrlbl_1')).width($('#' + this._id('_summpbar')).width());
            }

            this._spbRenderProgress();
        },

        _destroyMarkup: function () {
            // M.H. 28 Jul 2011 - fix bug 77183 - set logic for removing html markup into separate function
            /* 
            Destroy the widget
            */
            // M.H. 12 May 2011 - fix bug 74966
            var startupButton = $('#' + this._id('_ibb')),
                browseButton = $('#' + this._id('_bb')),
                baseMainContainer = $('#' + this._id('_bmncntr'));

            this.originalElement.show().unwrap();
            // M.H. 12 May 2011 - fix bug 74966
            startupButton.igBrowseButton('destroy');
            browseButton.igBrowseButton('destroy');

            startupButton.remove();
            baseMainContainer.remove();
            //  this.container() = this.originalElement;

            this.container().remove();
        },

        destroy: function () {
            /*
             Destroy the widget
            */
            // M.H. 28 Jul 2011 - fix bug 77183 - set logic for removing html markup into separate function
            this._destroyMarkup();
            $.Widget.prototype.destroy.apply(this, arguments);
        },

        /* Get file Size Before Start Upload */
        _getFileSize: function (formNumber, key) {
            // adds iframe and submits form with specific query string and the server should return the size of fileupload
            // this method is called only when option autostartupload = false
            var self = this,
                o = this.options,
                formId =  this._id('_fszfrm', formNumber),
                filePicker = $('#' + self._id('_frm', formNumber) + '_if'),
                iframeId = this._id('_fszifrm', formNumber),
                form,
                url = self._formatURL(o.uploadUrl, $.param({'key': key, 'command': 'fileSize'}));

            $('<iframe src="javascript:false;" id="' + iframeId + '" name="' + iframeId + '"></iframe>').appendTo($(document.body)).css({'display': 'none'});
            $('<form method="post" id="' + formId + '" target="' + iframeId + '" enctype="multipart/form-data"></form>').appendTo($(document.body)).css({'display': 'none'}).attr('action', url);
            form = $('#' + formId);
            filePicker.appendTo(form);
            form.submit();
            form.remove();

            $('#' + iframeId).ready(function () {
                setTimeout(function () {self._sendRequestFileSize(formNumber, key); }, self._const.timeoutGetFileSize);
            });

            filePicker.appendTo($('#' + self._id('_frm', formNumber)));
        },

        _removeGetFileSizeHTML: function (formNumber) {
            var iframeGetFileSize = $('#' + this._id('_fszifrm', formNumber)),
                formGetFileSize =  $('#' + this._id('_fszfrm', formNumber));

            iframeGetFileSize.remove();
            formGetFileSize.remove();
        },

        _sendRequestFileSize: function (formNumber, key) {
            // called only in multiple upload mode when autostartupload is false
            var self = this,
                singleProgressBarId =  self._id('_snglpbar', formNumber),
                singleProgressBar = $('#' + singleProgressBarId),
                o = this.options,
                fileSize = 0,
                fileData = this.fileInfoData,
                singleFileData = this._getFileInfo(formNumber);

            // check singleFileData is initialized - this means that it is sent request to server            
            if (singleFileData.sizeBytes !== 0) {
                return;
            }

            $.ajaxQueue('uploadrequestsqueue', {
                url: self._formatURL(o.progressUrl, $.param({'key': key, 'command': 'fileSize'})),
                dataType: 'json',
                cache: false,
                success: function (data) {
                    fileSize = parseInt(data.fileSize, 10);
                    if (isNaN(fileSize) === true) {
                        return;
                    }
                    singleProgressBar.data('totalSize', fileSize);
                    // _spb feature
                    if (singleFileData !== null) {
                        singleFileData.sizeBytes = fileSize;
                        fileData.fileSizeTotal += fileSize;
                        self._spbRenderProgress();
                    }
                    // end of _spb feature                    
                    self._renderStatus(formNumber, 0, fileSize, false, false);
                    self._removeGetFileSizeHTML(formNumber);
                },
                error: function () {
                    self._setError(o.errorMessageAJAXRequestFileSize, self._const.clientSideErrorCode.ajaxErrorRequestFileSize, 'clientside');
                    self._removeGetFileSizeHTML(formNumber);
                }
            });
        },
        /* END OF Get file Size Before Start Upload */

        _onShowHideDetailsClick: function () {
            var self = this,
                fileContainer = $('#' + self._id('_fc')),
                marginTop = fileContainer.css('margin-top'),
                marginBottom = fileContainer.css('margin-bottom');

            // Fix bug #73126 M.H. 27 May 2011
            if (($.browser.msie === true && $.browser.version.slice(0, 1) === "6") || ($.browser.msie === true && $.browser.version.slice(0, 1) === "7")) {
                self._setShowHideDetailsButtonText(fileContainer.is(':hidden'));
                if (fileContainer.is(':hidden')) {
					fileContainer.show();
					// M.H. 23 March 2012 Fix for bug #103089
					self._reRenderFileNames();
                } else {
                    fileContainer.hide();
                }
				// M.H. 26 March 2012 Fix for bug #103086
				self._setShowHideDetailsButtonText(fileContainer.is(':hidden'));
            } else {
                // M.H. 11 May 2011 - fix bug 74559: When it is set height which is near the height of the whole widget - there is flicker effect because it is shown scrollbar
                // Fix it as remove margin-top, bottom - if set
                fileContainer.css({'margin-top': 0, 'margin-bottom': 0});
                fileContainer.slideToggle(
                    self._const.showHideDetailsAnimationTimeout,
                    function () {
                        // M.H. 11 May 2011 - fix bug 74559: When it is set height which is near the height of the whole widget - there is flicker effect because it is shown scrollbar
                        // Fix it as remove margin-top, bottom - if set and when slideToggle finishes rollback original values                    
                        fileContainer.css({'margin-top': marginTop, 'margin-bottom': marginBottom});
                        self._setShowHideDetailsButtonText(fileContainer.is(':hidden'));

                        // M.H. 27 Jul 2011 - fix bug 74266 - reRender FileNames when show details is clicked
                        if (fileContainer.is(':hidden') === false) {
                            self._reRenderFileNames();
                        }
                    }
                );
            }
        },

        // M.H. 27 Jul 2011 - fix bug 74266 - reRender FileNames
        _reRenderFileNames: function () {
            var data = this.fileInfoData.filesInfo,
                l = data.length,
				i,
				originalFileName;

			for (i = 0; i < l; i++) {
                originalFileName = $('#' + this._id('_snglpbar', i)).data('originalFileName');
                // first it should be set the original filename
                $('#' + this._id('_pbrflnm', i)).text(originalFileName);
                this._renderFileName(i, 0, originalFileName);
            }
        },


        _setShowHideDetailsButtonText: function (isHidden) {
            var o = this.options,
                showHideDetailsButton = $('#' + this._id('_shdbtn'));

            if (isHidden) {
                showHideDetailsButton.text(o.labelShowDetails);
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                showHideDetailsButton.attr('title', $.ig.Upload.locale.titleShowDetailsButton);
            } else {
                showHideDetailsButton.text(o.labelHideDetails);
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                showHideDetailsButton.attr('title', $.ig.Upload.locale.titleHideDetailsButton);
            }
        },

        getFileInfoData: function () {
            /*
            Returns the information about uploading files - all files uploaded/uploading/pending
            returnType="object" Returns the information about uploading files
            */
            return this.fileInfoData;
        },

        cancelAll: function () {
            /* Cancel all uploading and pending files
            */
            var i, data = this.fileInfoData,
                uploadingIDs = data.uploadingIDs,
                luploadingIDs = uploadingIDs.length,
                pendingIDs = data.pendingQueueIDs,
                lpendingIDs = pendingIDs.length,
                batch = data.batch,
                lbatch = batch.length;

            this.allCancelled = true;
            for (i = 0; i < luploadingIDs; i++) {
                if (uploadingIDs[i] !== undefined) {
                    this.cancelUpload(uploadingIDs[i]);
                }
            }

            for (i = 0; i < lpendingIDs; i++) {
                if (pendingIDs[i] !== undefined) {
                    this.cancelUpload(pendingIDs[i]);
                }
            }

            for (i = 0; i < lbatch; i++) {
                if (batch[i] !== undefined) {
                    this.cancelUpload(batch[i]);
                }
            }

            uploadingIDs = [];
            pendingIDs = [];
            batch = [];
            $('#' + this._id('_spbtncncl')).data('ids', []);

            this.allCancelled = false;
        },

        _submitAllFormsUpload: function () {
            var self = this, i, id,
                idsToSubmit = this.fileInfoData.batch,
                l = idsToSubmit.length, pendingIDs = [];

            for (i = 0; i < l; i++) {
                id = idsToSubmit[i];
                if (self._checkCanUpload()) {
                    // M.H. 27 Jul 2011 - fix bug 77339
                    //self._addUploadingID(id);
                    self.startUpload(id);
                    //submittedIDs.push(id);
                } else {
                    self._addPendingId(id);
                    pendingIDs.push(id);
                }
            }
            this.fileInfoData.batch = [];
            //self._trigger(self.events.batchFileStartUpload, null, {submittedIDs: submittedIDs, pendingIDs: pendingIDs});
            // we should clear ids array once we have submitted forms            
        },


        // summaryProgressBar Initialization
        _spbRenderInit: function () {
            var self = this, o = this.options,
                css = self.css,
                uploaderId = this._id('_fu'), labelSummaryButton = o.labelSummaryProgressButtonContinue,
	            summaryProgressContainerId = this._id('_spbcntr'),
	            summaryProgressBarLabelId = this._id('_summpbrlbl'),
	            summaryProgressBarId = this._id('_summpbar'),
	            summaryProgressLabelId = this._id('_summplbl'),
	            showHideDetailsId = this._id('_shdbtn'),
	            summaryProgressButtonCancelId = this._id('_spbtncncl'),
	            summaryProgressDetailsButtonId = this._id('_spdtlbtn'),
                summaryProgressBar,
	            html = '',
                data,
	            progressData = 'progressData',
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                titleSummaryButton = $.ig.Upload.locale.titleSummaryProgressButtonContinue;

            html +=     '<div id="$summaryProgressContainerId$">';
		    html +=     '   <div  class="' + css.summaryInformationContainerClass + '">';
		    html +=     '       <span id="$summaryProgressLabelId$" class="' + css.summaryUploadedFilesLabelClass + '"></span><a href="javascript:void(0);" id="$showHideDetailsId$" class="' + css.summaryShowHideDetailsButtonClass + '">$labelShowHideDetails$</a>';
		    html +=     '   </div>';
            html +=     '   <div class="' + css.clearClass + '">';
            html +=     '       <button id="$summaryProgressButtonCancelId$"></button>';
		    html +=     '       <div id="$summaryProgressBarId$"></div>';
            html +=     '   </div>';
		    html +=     '</div>';
            html = html.replace('$summaryProgressContainerId$', summaryProgressContainerId).replace('$summaryProgressLabelId$', summaryProgressLabelId).replace('$summaryProgressDetailsButtonId$', summaryProgressDetailsButtonId).replace('$summaryProgressBarId$', summaryProgressBarId).replace('$showHideDetailsId$', showHideDetailsId).replace('$labelShowHideDetails$', o.labelHideDetails).replace('$labelSummaryProgressButtonCancel$', o.labelSummaryProgressButtonCancel).replace('$summaryProgressButtonCancelId$', summaryProgressButtonCancelId);
            $(html).appendTo($('#' + uploaderId));

            // data which keeps IDs of forms
            data = {IDs: {}, CurrentUploadedFiles: 0, CurrentUploadedSize: 0, TotalFileSize: 0, TotalFiles: 0, UploadingFiles: 0};

            $('#' + summaryProgressContainerId).data(progressData, data).addClass(css.summaryProgressContainerClass + ' ' + css.clearClass);
            summaryProgressBar = $('#' + summaryProgressBarId);
            $('<span id="' + summaryProgressBarLabelId + '"></span>').addClass(css.summaryProgressbarLabelClass).appendTo(
	            summaryProgressBar.igProgressBar({
		            animate: self._const.isProgressBarAnimationEnabled,
		            animateTimeout: self._const.animateProgressBarInterval,
		            range: self._const.isProgressBarRange,
		            value: 0
	            }).addClass(css.summaryProgressBarClass)
            );


            // Add second span so when progress is over the label text to show specific color and those part of the labe to be in other color
            $('<div id="' + summaryProgressBarLabelId + '_1"></div>').width(summaryProgressBar.width()).addClass(css.summaryProgressBarSecondaryLabel).appendTo($('#' + this._id('_summpbar_progress')).addClass(css.summaryProgressBarInnerProgress));

            $('#' + showHideDetailsId).bind({
	            click: function (event) {
                    event.preventDefault();
		            self._onShowHideDetailsClick();
	            }
            });
            // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
            if ($.ig.Upload.locale.titleHideDetailsButton !== false) {
                $('#' + showHideDetailsId).attr('title', $.ig.Upload.locale.titleHideDetailsButton);
            }
            // if autostartupload is false then bind onclick to submit all forms otherwise to cancel all upload forms

            if (o.autostartupload) {
                labelSummaryButton = o.labelSummaryProgressButtonCancel;
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                titleSummaryButton = $.ig.Upload.locale.titleSummaryProgressButtonCancel;
                this.spbButtonMode = this.summaryButtonModes.cancel;
            }

            $('#' + summaryProgressButtonCancelId).igButton({
                labelText: labelSummaryButton,
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                title: titleSummaryButton,
                disabled: false,
                click: function (event) {
                    event.preventDefault();
                    self._spbOnClickButton(event);
                }
            }).addClass(css.summaryButtonClass);
        },

        _spbRenderProgress: function () {
            var o = this.options,
                summaryProgressBar = $('#' + this._id('_summpbar')),
                summaryProgressLabel = $('#' + this._id('_summplbl')),
                summaryProgressBarLabel = $('#' + this._id('_summpbrlbl')),
                summaryProgressBarLabel_1 = $('#' + this._id('_summpbrlbl_1')),
                textSummaryProgressBarLabel = "",
                value = 0,
                data = this.fileInfoData,
                fileSizeTotal = data.fileSizeTotal,
                fileSizeUploaded = data.fileSizeUploaded;

            if (fileSizeTotal !== 0 && isNaN(fileSizeTotal) === false) {
                value = (fileSizeUploaded / fileSizeTotal) * 100;
            } else if (fileSizeTotal === 0) {
                value = 0;
            }

            if (data.countUploadingFiles === data.countTotalFiles) {
                if (data.countTotalFiles === 0) {
                    value = 0;
                } else {
                    value = 100;
                }
                fileSizeUploaded = fileSizeTotal;
            }

            summaryProgressBar.igProgressBar('option', 'value', value);
            // M.H. 13 May 2011 - fix bug 75042
            textSummaryProgressBarLabel = o.labelSummaryProgressBarTemplate.replace('{0}', this._formatFileSize(fileSizeUploaded)).replace('{1}', this._formatFileSize(fileSizeTotal)).replace('{2}', value);
            summaryProgressLabel.html(o.labelSummaryTemplate.replace('{0}', data.countUploadingFiles).replace('{1}', data.countTotalFiles));
            summaryProgressBarLabel.text(textSummaryProgressBarLabel);
            summaryProgressBarLabel_1.text(textSummaryProgressBarLabel);
        },

        _spbOnClickButton: function (event) {
            var modes = this.summaryButtonModes, m = this.spbButtonMode;
            event.preventDefault();
            if (m === modes.cancel) {
                this._trigger(this.events.cancelAllClicked, event);
                this.cancelAll();
            } else if (m === modes.startupload) {
                this._spbSubmitAllButton();
            }
        },

        _spbSubmitAllButton: function () {
            this._submitAllFormsUpload();
            // then bind to button cancel action
            this._spbCheckModeButton();
            //this._spbSetCancelButton();
        },

        _spbCheckModeButton: function () {
            var fileData = this.fileInfoData;

            if (this.options.autostartupload) {
                if (fileData.pendingQueueIDs.length > 0 || fileData.uploadingIDs.length > 0) {
                    this._spbSetCancelButton();
                } else {
                    this._spbSetButtonDone();
                }
            } else {
                if (fileData.pendingQueueIDs.length === 0 && fileData.uploadingIDs.length === 0) {
                    if (fileData.batch.length > 0) {
                        this._spbSetContinueButton();
                    } else {
                        this._spbSetButtonDone();
                    }
                } else {
                    this._spbSetCancelButton();
                }
            }
        },

        // Set different Modes for the Summary Button - Cancel, Done, Submit
        _spbSetButtonDone: function () {
            // submit all forms and enable cancel action
            var o = this.options,
                button = $('#' + this._id('_spbtncncl'));
            this.spbButtonMode = this.summaryButtonModes.done;
            // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
            button.igButton('option', 'labelText', o.labelSummaryProgressButtonDone).igButton('option', 'title', $.ig.Upload.locale.titleSummaryProgressButtonDone).igButton('option', 'disabled', true);
        },

        _spbSetContinueButton: function () {
            // submit all forms and enable cancel action
            var o = this.options,
                button = $('#' + this._id('_spbtncncl'));
            this.spbButtonMode = this.summaryButtonModes.startupload;
            button.igButton({
                // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
                title: $.ig.Upload.locale.titleSummaryProgressButtonContinue,
                labelText: o.labelSummaryProgressButtonContinue,
                disabled: false
            });
        },

        _spbSetCancelButton: function () {
            var cancelButton = $('#' + this._id('_spbtncncl'));

            this.spbButtonMode = this.summaryButtonModes.cancel;
            // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
            cancelButton.igButton('option', 'labelText', this.options.labelSummaryProgressButtonCancel).igButton('option', 'title', $.ig.Upload.locale.titleSummaryProgressButtonCancel).igButton('option', 'disabled', false);
        },

        /* // End of Summary Functions */
        /*************** HELPER FUNCTION ********************/

        /**************** FILE INFO ********************/
        _getFileInfo: function (length) {
            var fid = this.fileInfoData.filesInfo[length];
            if (fid === undefined || fid === null) {
                return null;
            }

            return fid;
        },

		/**************** // FILE INFO ********************/

        _formatFilePath: function (file) {
            var ind = file.lastIndexOf('/');

            file = file.replace(/(\/|\\)$/, "");
            if (ind === -1) {
                ind = file.lastIndexOf('\\');
            }
            return file.substring(ind + 1);
        },

        // async Simultaneously upload
        _checkCanUpload: function () {
            var o = this.options,
                data = this.fileInfoData,
                canUpload = true,
                maxSimultaneousFilesUploads = o.maxSimultaneousFilesUploads;

            if (o.mode === 'multiple' && maxSimultaneousFilesUploads !== null && data.uploadingIDs.length >= maxSimultaneousFilesUploads) {
                canUpload = false;
                if (maxSimultaneousFilesUploads <= 0) {
                    this._setError(o.errorMessageMaxSimultaneousFiles, this._const.clientSideErrorCode.checkCanUpload, 'clientside');
                }
            }

            return canUpload;
        },

        _addPendingId: function (id) {
            this.fileInfoData.pendingQueueIDs.push(id);
        },

        _removePendingId: function (formNumber) {
            var pendingIDs = this.fileInfoData.pendingQueueIDs, id;

            if (formNumber !== undefined && formNumber !== null) {
                id = formNumber;
                this.fileInfoData.pendingQueueIDs = this._removeElementFromArray(pendingIDs, id);
            } else {
                id = pendingIDs.shift();
                if (id === undefined) {
                    id = null;
                }
            }
            return id;
        },

        _addUploadingID: function (id) {
            this.fileInfoData.uploadingIDs.push(id);
        },

        _removeUploadingID: function (id) {
            this.fileInfoData.uploadingIDs = this._removeElementFromArray(this.fileInfoData.uploadingIDs, id);
        },

        _addIDBatch: function (id) {
            this.fileInfoData.batch.push(id);
        },
        _removeIDBatch: function (id) {
            this.fileInfoData.batch = this._removeElementFromArray(this.fileInfoData.batch, id);
        },

        _submitNextPendingId: function () {
            var self = this, nextFormToSubmitId;

            if (self._checkCanUpload() === true) {
                nextFormToSubmitId = self._removePendingId();
                if (nextFormToSubmitId !== null) {
                    // M.H. 27 Jul 2011 - fix bug 77339
                    //self._addUploadingID(nextFormToSubmitId);
                    self.startUpload(nextFormToSubmitId);
                }
            }
        },
        // End of async Simultaneously upload
        _randomString: function (string_length) {
	        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", randomstring = '', i, rnum;
	        for (i = 0; i < string_length; i++) {
		        rnum = Math.floor(Math.random() * chars.length);
		        randomstring += chars.substring(rnum, rnum + 1);
	        }
	        return randomstring;
        },
        _cutFilePath: function (fileName, length) {
            var fileNameSize = fileName.length;
            if (fileNameSize <= length) {
                return fileName;
            }
        },

        _getOnlyFileName: function (fileName) {
            var delimeter = '';

            if (fileName === null || fileName === undefined) {
                return '';
            }

            if (fileName.indexOf('/') !== -1) {
                delimeter = '/';
            } else if (fileName.indexOf('\\') !== -1) {
                delimeter = '\\';
            }

            if (delimeter !== '') {
                fileName = fileName.substr(fileName.lastIndexOf(delimeter) + 1);
            }

            return fileName;
        },

        _getFileExtension: function (fileName) {
            return fileName.substring(fileName.lastIndexOf('.') + 1);
        },

        _validateFileExtension: function (fileName) {
            var ext = '', arrE = this.options.allowedExtensions;

            // if the array with extension is empty than validation always returns true
            if (arrE.length === 0) {
                return true;
            }
            ext = fileName.substring(fileName.lastIndexOf('.') + 1);
            return $.inArray(ext, arrE) >= 0;
        },

        _getFileExtensionIconPath: function (ext) {
            // search array for the specified extension, if could not find search for default
            // even if ext is empty the function will return again default icon(if specified)            
            var arrIE = this.options.fileExtensionIcons, i, icon = '', l = arrIE.length;

			ext = String(ext).toLowerCase();
            for (i = 0; i < l; i++) {
                if (arrIE[i].ext !== undefined && (arrIE[i].ext === ext || $.inArray(ext, arrIE[i].ext) !== -1)) {
                    icon = arrIE[i].css;
                    break;
                } else if (icon === '' && (arrIE[i].def === true || ($.isArray(arrIE[i].ext) && arrIE[i].ext.length === 0))) {
					// M.H. 27 Jul 2011 - fix bug 77162 - Default icon could be those which has property def true OR ext.length is 0
                    icon = arrIE[i].css;
                }
            }
            return icon;
        },

        _setError: function (message, errorCode, errorType, serverMessage) {
            // error handling
            // error message, errorCode - type int, errorType - serverside|clientside            
            var o = this.options,
                errC = this._const.errorCode;

            if (serverMessage === undefined) {
                serverMessage = '';
            }

            if (errorType === 'serverside') {
                // M.H. 11 May 2011 - fix bug 74621: Add messages for most common errors
                switch (errorCode) {
                case errC.MimeTypeValidation:
                    message = o.errorMessageValidatingFileExtension;
                    break;
                case errC.FileSizeExceeded:
                    message = o.errorMessageMaxFileSizeExceeded;
                    break;
                }
            }
            this._trigger(this.events.onError, null, {errorCode: errorCode, errorMessage: message, errorType: errorType, serverMessage: serverMessage });
        },

        /* convert functions */
        _formatFileSize: function (val) {
            // val in bytes
            var fsm = this.options.fileSizeMetric, res = val;

            switch (fsm) {
            case 'bytes':
                res = val + 'B';
                break;
            case 'kbytes':
                res = this._convertToKBytes(val);
                break;
            case 'mbytes':
                res = this._convertToMBytes(val);
                break;
            case 'gbytes':
                res = this._convertToGBytes(val);
                break;
            case 'auto':
                if (val < 1024) {
                    res = val + 'B';
                } else if (val < 1024 * 1024) { //1MB
                    res = this._convertToKBytes(val);
                } else if (val < 1024 * 1024 * 1024) { //1GB
                    res = this._convertToMBytes(val);
                } else {
                    res = this._convertToGBytes(val);
                }
                break;
            default:
                break;
            }

            return res;
        },

        _convertToKBytes: function (val) {
            var res = val / 1024;
            return res.toFixed(this.options.fileSizeDecimalDisplay) + 'KB';
        },

        _convertToMBytes: function (val) {
            var res = val / (1024 * 1024);

            return res.toFixed(this.options.fileSizeDecimalDisplay) + 'MB';
        },

        _convertToGBytes: function (val) {
            var res = val / (1024 * 1024 * 1024);

            return res.toFixed(this.options.fileSizeDecimalDisplay) + 'GB';
        },

        /* end of convert functions */

        // Array Functions
        _removeElementArrayById: function (array, keyValue) {
            if (array === undefined || array === null) {
                return [];
            }

            return $.grep(array, function (n) {
                return (n.id !== keyValue);
            });
        },

        _removeElementFromArray: function (array, keyValue) {
            if (array === undefined || array === null) {
                return [];
            }
            return $.grep(array, function (n) {
                return (n !== keyValue);
            });
        }

        /*************** // HELPER FUNCTION ********************/
    });
    $.extend($.ui.igUpload, { version: '12.2.20122.1021' });
}(jQuery));



