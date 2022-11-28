var g_MinimalDownload, g_WebServerRelativeUrl, _spFullDownloadList, g_clientIdDeltaPlaceHolderMain, g_clientIdDeltaPlaceHolderPageTitleInTitleArea, _spFormDigestRefreshInterval, callBackFrameUrl;
function afterLoadMacket(){
    ExecuteOrDelayUntilScriptLoaded(
        function(){SP.Ribbon.PageState.PageStateHandler.EnableSaveBeforeNavigate(false);},"sp.ribbon.js"
        );
    if(typeof(_spWikiPageNameEditorFlag)=='undefined'||!_spWikiPageNameEditorFlag){
        _spWikiPageNameEditorFlag=true;
        _spWikiPageNameDisplayElemId='ctl00_PlaceHolderMain_wikiPageNameDisplay';
        _spWikiPageNameEditElemId='ctl00_PlaceHolderMain_wikiPageNameEdit';
        _spWikiPageNameEditTextBoxId='ctl00_PlaceHolderMain_wikiPageNameEditTextBox';
    }
    _spFormDigestRefreshInterval=1440000;
    callBackFrameUrl='/WebResource.axd?d=7HpnB_zUpcfozvHozlmntxsTOtfJk_51afRIXdF1mO87SxF56_bfsquePnlqRNucyXLRh-QVr7TBq3e8p3SLmJfZElKk1aXZEI1dLe0Wryk1&t=637100914445053551';WebForm_InitCallback();
    ExecuteOrDelayUntilScriptLoaded(
        function(){
            var initInfo={
                itemPermMasks:{High:2147483647,Low:4294967295},listPermMasks:{High:2147483647,Low:4294967295},
                listId:"d31b7df0-0f9a-455f-91e9-2d8872835a13",
                itemId:12,
                editable:true,
                editMode:false,
                postbackScript:"__doPostBack\u0028\u0027__Page\u0027,\u0027PageCommand\u0027\u0029",
                missingRequiredFields:false,
                conflictMergeTargetStatusHtml:null
            };
            SP.Ribbon.WikiPageComponent.registerWithPageManager(initInfo);
        },"sp.ribbon.js");
    function _wikiCallback(arg,successCallback,context,errorCallback){
        __theFormPostData="";
        __theFormPostCollection=new Array();
        WebForm_OnSubmit();
        WebForm_InitCallback();
        _spResetFormOnSubmitCalledFlag();
        WebForm_DoCallback('__Page',arg,successCallback,context,errorCallback,true);
    }
    if(typeof(Sys)!='undefined'&&Sys.Browser.agent==Sys.Browser.Safari&&navigator.userAgent.indexOf('AppleWebKit/')>-1){
        Sys.Browser.AppleWebKit={};
        Sys.Browser.version=parseFloat(navigator.userAgent.match(/ AppleWebKit\/(\d+(\.\d+)?)/)[1]);Sys.Browser.agent=Sys.Browser.AppleWebKit;}var _fV4UI=true;function _RegisterWebPartPageCUI(){var initInfo={editable:true,isEditMode:false,allowWebPartAdder:false,listId:"{d31b7df0-0f9a-455f-91e9-2d8872835a13}",itemId:12,recycleBinEnabled:true,enableMinorVersioning:false,enableModeration:false,forceCheckout:false,rootFolderUrl:"\u002fApplication\u002fSitePages",itemPermissions:{High:2147483647,Low:4294967295}};SP.Ribbon.WebPartComponent.registerWithPageManager(initInfo);var wpcomp=SP.Ribbon.WebPartComponent.get_instance();var hid;hid=document.getElementById("_wpSelected");if(hid!=null){var wpid=hid.value;if(wpid.length>0){var zc=document.getElementById(wpid);if(zc!=null)wpcomp.selectWebPart(zc,false);}}hid=document.getElementById("_wzSelected");if(hid!=null){var wzid=hid.value;if(wzid.length>0){wpcomp.selectWebPartZone(null,wzid);}}};function __RegisterWebPartPageCUI(){ExecuteOrDelayUntilScriptLoaded(_RegisterWebPartPageCUI,"sp.ribbon.js");}_spBodyOnLoadFunctionNames.push("__RegisterWebPartPageCUI");var __wpmExportWarning='Данная страница для веб-части была персонализирована. В результате одно или более свойств веб-части могут содержать конфиденциальную информацию. Убедитесь, что свойства содержат безопасную информацию. После экспорта этой веб-части, просмотрите свойства в файле описания веб-части (.WebPart) с помощью текстового редактора типа Блокнот.';var __wpmCloseProviderWarning='Вы закрываете эту веб-часть.  В данный момент она предоставляет данные другим веб-частям, и эти подключения будут удалены, если данная веб-часть будет закрыта.  Для того чтобы закрыть эту веб-часть, нажмите OK.  Для сохранения веб-части, нажмите Отмена.';var __wpmDeleteWarning='Вы хотите окончательно удалить данную Веб-часть.  Вы уверены?  Для удаления данной Веб-части, нажмите OK.  Для сохранения Веб-части, нажмите Отмена.';ExecuteOrDelayUntilScriptLoaded(function(){var initInfo={itemPermMasks:{High:2147483647,Low:4294967295},listPermMasks:{High:2147483647,Low:4294967295},listId:"d31b7df0-0f9a-455f-91e9-2d8872835a13",itemId:12,workflowsAssociated:false,editable:true,doNotShowProperties:false,enableVersioning:true};SP.Ribbon.DocLibAspxPageComponent.registerWithPageManager(initInfo);},"sp.ribbon.js");var g_disableCheckoutInEditMode=false;var _spWebPermMasks={High:2147483647,Low:4294967295};var _spPageStateActionControlId='ctl00_PageStateActionButton';var slNavUrl='\u002fApplication';_spBodyOnLoadFunctionNames.push('_cUpdonetidProjectPropertyTitleGraphic');function _cUpdonetidProjectPropertyTitleGraphic(){var myd=null;if(typeof(dataonetidProjectPropertyTitleGraphic)!='undefined'){myd=dataonetidProjectPropertyTitleGraphic;}var myc=document.getElementById('ctl00_onetidProjectPropertyTitleGraphic');_cUpdconetidProjectPropertyTitleGraphic(myd,myc);}function _cUpdconetidProjectPropertyTitleGraphic(data,ctrl){ctrl.href=slNavUrl;}function _cUpdonetidHeadbnnr2(){var myd=null;if(typeof(dataonetidHeadbnnr2)!='undefined'){myd=dataonetidHeadbnnr2;}var myc=document.getElementById('ctl00_onetidHeadbnnr2');_cUpdconetidHeadbnnr2(myd,myc);}function _cUpdconetidHeadbnnr2(data,ctrl){SiteLogoImagePageUpdate(ctrl,data);}if(typeof(_v_rg_spbutton)=='undefined')var _v_rg_spbutton=new Array();_v_rg_spbutton['Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.Edit']='ctl00_PlaceHolderMain_btnWikiEdit';if(typeof(_v_rg_spbutton)=='undefined')var _v_rg_spbutton=new Array();_v_rg_spbutton['Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.SaveAndStop']='ctl00_PlaceHolderMain_btnWikiSave';if(typeof(_v_rg_spbutton)=='undefined')var _v_rg_spbutton=new Array();_v_rg_spbutton['Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.Revert']='ctl00_PlaceHolderMain_btnWikiRevert';var PageState={};var PageStateEnabledHandler={};var PageStateCommandHandler={};PageState={'ItemIsWikiPage':'1','ItemIsInLibrary':'1','UserHasManageWebRights':'1','ItemHasCustomizableZones':'1','ItemHasFieldControls':'1','UserHasOverrideCheckoutRights':'1','ItemHasCheckedInVersion':'1','UserHasApproverRights':'1','UserHasDeleteRights':'1','ItemIsMajorVersion':'1','ItemIsInSharedView':'1','ItemHasPersonalizableZones':'1','UserHasContributorRights':'1'};PageStateEnabledHandler={'PageStateGroupSave':'SP.Ribbon.PageState.Handlers.isSaveEnabled\u0028\u0029;','PageStateSaveBeforeNavigate':'','PageStateGroupSaveAndStop':'SP.Ribbon.PageState.Handlers.isSaveAndStopEditEnabled\u0028\u0029;','PageStateGroupEdit':'SP.Ribbon.PageState.Handlers.isEditEnabled\u0028\u0029;','PageStateGroupDontSaveAndStop':'SP.Ribbon.PageState.Handlers.isDontSaveAndStopEnabled\u0028\u0029;','PageStateGroupCheckin':'SP.Ribbon.PageState.Handlers.isCheckinEnabled\u0028\u0029;','PageStateGroupCheckout':'SP.Ribbon.PageState.Handlers.isCheckoutEnabled\u0028\u0029;','PageStateGroupOverrideCheckout':'SP.Ribbon.PageState.Handlers.isOverrideCheckoutEnabled\u0028\u0029;','PageStateGroupDiscardCheckout':'SP.Ribbon.PageState.Handlers.isDiscardCheckoutEnabled\u0028\u0029;','PageStateGroupSubmitForApproval':'SP.Ribbon.PageState.Handlers.isSubmitForApprovalEnabled\u0028\u0029;','PageStateGroupCancelApproval':'SP.Ribbon.PageState.Handlers.isCancelApprovalEnabled\u0028\u0029;','PageStateGroupPublish':'SP.Ribbon.PageState.Handlers.isPublishEnabled\u0028\u0029;','PageStateGroupUnpublish':'SP.Ribbon.PageState.Handlers.isUnpublishEnabled\u0028\u0029;','PageStateGroupApprove':'SP.Ribbon.PageState.Handlers.isApproveEnabled\u0028\u0029;','PageStateGroupReject':'SP.Ribbon.PageState.Handlers.isRejectEnabled\u0028\u0029;','DeletePage':'SP.Ribbon.PageState.Handlers.isDeleteEnabled\u0028\u0029;','PageStateUpdatePageState':'true;','PageStateGroupSaveAndPublish':'SP.Ribbon.PageState.Handlers.isSaveAndPublishEnabled\u0028\u0029;'};PageStateCommandHandler={'PageStateGroupSave':'__doPostBack\u0028\u0027ctl02\u0027,\u0027PageStateGroupSave\u0027\u0029','PageStateSaveBeforeNavigate':'__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl03\u0027,\u0027PageStateSaveBeforeNavigate\u0027,SP.Ribbon.PageState.PageStateHandler.SaveBeforeNavigateCallback,SP.Ribbon.PageState.SaveBeforeNavigateCallback,null,true\u0029','PageStateGroupSaveAndStop':'SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;__doPostBack\u0028\u0027ctl04\u0027,\u0027PageStateGroupSaveAndStop\u0027\u0029','PageStateGroupEdit':'if \u0028document.forms[\u0027aspnetForm\u0027][\u0027MSOLayout_InDesignMode\u0027] != null\u0029 document.forms[\u0027aspnetForm\u0027][\u0027MSOLayout_InDesignMode\u0027].value = 1;if \u0028document.forms[\u0027aspnetForm\u0027][\u0027MSOAuthoringConsole_FormContext\u0027] != null\u0029 document.forms[\u0027aspnetForm\u0027][\u0027MSOAuthoringConsole_FormContext\u0027].value = 1;if \u0028document.forms[\u0027aspnetForm\u0027][\u0027MSOSPWebPartManager_DisplayModeName\u0027] != null\u0029 document.forms[\u0027aspnetForm\u0027][\u0027MSOSPWebPartManager_DisplayModeName\u0027].value = \u0027Design\u0027;__doPostBack\u0028\u0027ctl05\u0027,\u0027edit\u0027\u0029','PageStateGroupDontSaveAndStop':'if \u0028confirm\u0028\u0027\\u0414\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u0432\\u044B\\u0439\\u0442\\u0438 \\u0431\\u0435\\u0437 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u044F? \\u0412\\u0441\\u0435 \\u043D\\u0435\\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043F\\u043E\\u0442\\u0435\\u0440\\u044F\\u043D\\u044B.\u0027\u0029\u0029 {__doPostBack\u0028\u0027ctl06\u0027,\u0027PageStateGroupDontSaveAndStop\u0027\u0029}','PageStateGroupCheckin':'__doPostBack\u0028\u0027ctl07\u0027,\u0027PageStateGroupCheckin\u0027\u0029','PageStateGroupCheckout':'SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u0418\\u0437\\u0432\\u043B\\u0435\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl08\u0027,\u0027PageStateGroupCheckout\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericError,null,true\u0029','PageStateGroupOverrideCheckout':'SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u041E\\u043F\\u0435\\u0440\\u0430\\u0446\\u0438\\u044F \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u044F\\u0435\\u0442\\u0441\\u044F\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl09\u0027,\u0027PageStateGroupOverrideCheckout\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericError,null,true\u0029','PageStateGroupDiscardCheckout':'if \u0028confirm\u0028\u0027\\u0414\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u0432\\u044B\\u0439\\u0442\\u0438 \\u0431\\u0435\\u0437 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u044F? \\u0412\\u0441\\u0435 \\u043D\\u0435\\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043F\\u043E\\u0442\\u0435\\u0440\\u044F\\u043D\\u044B.\u0027\u0029\u0029 {__doPostBack\u0028\u0027ctl10\u0027,\u0027PageStateGroupDiscardCheckout\u0027\u0029}','PageStateGroupSubmitForApproval':'if \u0028PageState[\u0027ViewModeIsEdit\u0027] != null\u0029 {SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;__doPostBack\u0028\u0027ctl11\u0027,\u0027PageStateGroupSubmitForApproval\u0027\u0029}else{SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043A\\u0430 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \\u043D\\u0430 \\u0443\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0435\\u043D\\u0438\\u0435\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl11\u0027,\u0027PageStateGroupSubmitForApproval\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericErrorHandler,null,true\u0029}','PageStateGroupCancelApproval':'WebForm_DoCallback\u0028\u0027ctl12\u0027,\u0027PageStateGroupCancelApproval\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericError,null,true\u0029','PageStateGroupPublish':'if \u0028PageState[\u0027ViewModeIsEdit\u0027] != null\u0029 {SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;__doPostBack\u0028\u0027ctl13\u0027,\u0027PageStateGroupPublish\u0027\u0029}else{SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u041F\\u0443\\u0431\\u043B\\u0438\\u043A\\u0430\\u0446\\u0438\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl13\u0027,\u0027PageStateGroupPublish\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericErrorHandler,null,true\u0029}','PageStateGroupUnpublish':'SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u041E\\u0442\\u043C\\u0435\\u043D\\u0430 \\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u0430\\u0446\\u0438\\u0438 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl14\u0027,\u0027PageStateGroupUnpublish\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericError,null,true\u0029','PageStateGroupApprove':'SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u0423\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0435\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl15\u0027,\u0027PageStateGroupApprove\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericError,null,true\u0029','PageStateGroupReject':'SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u041E\\u0442\\u043A\\u043B\\u043E\\u043D\\u0435\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl16\u0027,\u0027PageStateGroupReject\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericError,null,true\u0029','DeletePage':'if \u0028confirm\u0028\u0027\\u0414\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C \\u044D\\u0442\\u0443 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0443 \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443 \\u0441\\u0430\\u0439\\u0442\\u0430?\u0027\u0029\u0029 {__doPostBack\u0028\u0027ctl17\u0027,\u0027DeletePage\u0027\u0029}','PageStateUpdatePageState':'SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u041E\\u043F\\u0435\\u0440\\u0430\\u0446\\u0438\\u044F \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u044F\\u0435\\u0442\\u0441\\u044F\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl18\u0027,\u0027PageStateUpdatePageState\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericError,null,true\u0029','PageStateGroupSaveAndPublish':'if \u0028PageState[\u0027ViewModeIsEdit\u0027] != null\u0029 {SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;__doPostBack\u0028\u0027ctl19\u0027,\u0027PageStateGroupSaveAndPublish\u0027\u0029}else{SP.Ribbon.PageState.PageStateHandler.popupWaitScreen\u0028\u0027\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027,\u0027\\u041F\\u0443\\u0431\\u043B\\u0438\\u043A\\u0430\\u0446\\u0438\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\u0027\u0029;__theFormPostData = \u0022\u0022;__theFormPostCollection=new Array\u0028\u0029; WebForm_OnSubmit\u0028\u0029;WebForm_InitCallback\u0028\u0029;_spResetFormOnSubmitCalledFlag\u0028\u0029;WebForm_DoCallback\u0028\u0027ctl19\u0027,\u0027PageStateGroupSaveAndPublish\u0027,SP.Ribbon.PageState.Handlers.GenericCompleteHandler,SP.Ribbon.PageState.Handlers.GenericErrorHandler,null,true\u0029}'};var Notification={};var PageErrorState={};PageErrorState={'Message':'','Title':'','ButtonCount':0};function InitPageStateHandler(){SP.Ribbon.PageState.ImportedNativeData=function SP_Ribbon_PageStateHandler_ImportedNativeData(){}
  SP.Ribbon.PageState.NativeErrorState=function SP_Ribbon_PageStateHandler_NativeErrorState(){}
  SP.Ribbon.PageState.ImportedNativeData.PageState=PageState;SP.Ribbon.PageState.ImportedNativeData.CommandHandlers=PageStateCommandHandler;SP.Ribbon.PageState.ImportedNativeData.EnabledHandlers=PageStateEnabledHandler;SP.Ribbon.PageState.NativeErrorState=PageErrorState;SP.Ribbon.PageState.ImportedNativeData.StatusTitle=['\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435:'];SP.Ribbon.PageState.ImportedNativeData.StatusBody=['\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430 \u0438 \u0432\u0438\u0434\u043D\u0430 \u0432\u0441\u0435\u043C \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F\u043C'];SP.Ribbon.PageState.ImportedNativeData.StatusPriority='blue';SP.Ribbon.PageState.CallNativeFunction=function SP_Ribbon_PageState_PageStateHandler_CallNativeFunction(fnName){return eval(fnName);}
  pm=SP.Ribbon.PageManager.get_instance();var psh=new SP.Ribbon.PageState.PageStateHandler();pm.addPageComponent(psh);SP.Ribbon.PageState.Handlers.registerCommentsHandler();pm.get_commandDispatcher().executeCommand(Commands.CommandIds.ApplicationStateChanged,null)}function DelayUntilRibbonLoaded(){ExecuteOrDelayUntilScriptLoaded(InitPageStateHandler,"sp.ribbon.js");}_spBodyOnLoadFunctionNames.push("DelayUntilRibbonLoaded")
  ExecuteOrDelayUntilScriptLoaded(
    function(){
      Srch.ScriptApplicationManager.get_current().states={
        "browserLanguage":1049,
        "webUILanguageName":"ru-RU",
        "webDefaultLanguageName":"ru-RU",
        "contextUrl":"https://dw.chsu.ru/Application",
        "contextTitle":"Заявки",
        "supportedLanguages":[{"id":1025,"label":"арабский"},
          {"id":1093,"label":"бенгали"},
          {"id":1026,"label":"болгарский"},
          {"id":1027,"label":"каталанский"},
          {"id":2052,"label":"китайский (упрощенное письмо)"},
          {"id":1028,"label":"китайский (традиционное письмо)"},
          {"id":1050,"label":"хорватский"},
          {"id":1029,"label":"чешский"},
          {"id":1030,"label":"датский"},
          {"id":1043,"label":"нидерландский"},
          {"id":1033,"label":"английский"},
          {"id":1035,"label":"финский"},
          {"id":1036,"label":"французский"},
          {"id":1031,"label":"немецкий"},
          {"id":1032,"label":"греческий"},
          {"id":1095,"label":"гуджарати"},
          {"id":1037,"label":"иврит"},
          {"id":1081,"label":"хинди"},
          {"id":1038,"label":"венгерский"},
          {"id":1039,"label":"исландский"},{"id":1057,"label":"индонезийский"},
          {"id":1040,"label":"итальянский"},{"id":1041,"label":"японский"},{"id":1099,"label":"каннада"},
          {"id":1042,"label":"корейский"},{"id":1062,"label":"латышский"},
          {"id":1063,"label":"литовский"},{"id":1086,"label":"малайский"},{"id":1100,"label":"малаялам"},
          {"id":1102,"label":"маратхи"},{"id":1044,"label":"норвежский"},{"id":1045,"label":"польский"},{"id":1046,"label":"португальский (Бразилия)"},
          {"id":2070,"label":"португальский (Португалия)"},{"id":1094,"label":"панджаби"},{"id":1048,"label":"румынский"},{"id":1049,"label":"русский"},
          {"id":3098,"label":"сербский (кириллица)"},{"id":2074,"label":"сербский (латиница)"},{"id":1051,"label":"словацкий"},{"id":1060,"label":"словенский"},
          {"id":3082,"label":"испанский (Испания)"},{"id":2058,"label":"испанский (Мексика)"},{"id":1053,"label":"шведский"},{"id":1097,"label":"тамильский"},
          {"id":1098,"label":"телугу"},{"id":1054,"label":"тайский"},{"id":1055,"label":"турецкий"},{"id":1058,"label":"украинский"},{"id":1056,"label":"урду"},
          {"id":1066,"label":"вьетнамский"}
        ],
        "navigationNodes":[{"id":0,"name":"этом сайте","url":"~site/_layouts/15/osssearchresults.aspx?u={contexturl}","promptString":"Поиск на этом сайте"}],
        "showAdminDetails":true,
        "defaultPagesListName":"Pages",
        "isSPFSKU":true,
        "userAdvancedLanguageSettingsUrl":"/Application/_layouts/15/regionalsetng.aspx?type=user\u0026Source=https%3A%2F%2Fdw%2Echsu%2Eru%2FApplication%2FSitePages%2FAuditori%2Easpx\u0026ShowAdvLang=1",
        "defaultQueryProperties":{
          "culture":1049,
          "uiLanguage":1049,
          "summaryLength":180,
          "desiredSnippetLength":90,
          "enableStemming":true,
          "enablePhonetic":false,
          "enableNicknames":false,
          "trimDuplicates":true,
          "bypassResultTypes":false,
          "enableInterleaving":true,
          "enableQueryRules":true,
          "processBestBets":true,
          "enableOrderingHitHighlightedProperty":false,
          "hitHighlightedMultivaluePropertyLimit":-1,
          "processPersonalFavorites":true
        }
      };
      Srch.U.trace(null,'SerializeToClient','ScriptApplicationManager state initialized.');},'Search.ClientControls.js');
      g_MinimalDownload=true;
      g_WebServerRelativeUrl="/Application";
      _spFullDownloadList=[
        'closeconnection',
        'download',
        'signout',
        'xlviewer',
        'wordviewer',
        'wordeditor',
        'powerpoint',
        'powerpointframe',
        'onenote',
        'visiowebaccess',
        'storefront',
        'wopiframe',
        'appredirect',
        'wfstart'
      ];
      g_clientIdDeltaPlaceHolderMain="DeltaPlaceHolderMain";
      g_clientIdDeltaPlaceHolderPageTitleInTitleArea="DeltaPlaceHolderPageTitleInTitleArea";
      var g_clientIdDeltaPlaceHolderUtilityContent="DeltaPlaceHolderUtilityContent";
      theForm.oldSubmit=theForm.submit;theForm.submit=WebForm_SaveScrollPositionSubmit;
      theForm.oldOnSubmit=theForm.onsubmit;
      theForm.onsubmit=WebForm_SaveScrollPositionOnSubmit;
      function _ribbonInitFunc1(){
        EnsureScriptParams('core.js',
        '_ribbonInitFunc1Wrapped',
        '',
        '',
        '\u002fApplication\u002f_layouts\u002f15\u002fcommandui.ashx',
        '2130333900',
        '1049',
        'RibbonContainer',
        {
          'Ribbon.EditingTools.CPEditTab':true,
          'Ribbon.Table.Design':true,
          'Ribbon.EditingTools.CPInsert':true,
          'Ribbon.Link.Link':true,
          'Ribbon.WikiPageTab':true,
          'Ribbon.WebPartOption':true,
          'Ribbon.Image.Image':true,
          'Ribbon.Table.Layout':true,
          'Ribbon.Read':true
        },
        null,
        {
          'Ribbon.WebPartPage':true,
          'Ribbon.WikiPageTab.EditAndCheckout.SaveAndPublish':true,
          'Ribbon.WebPartInsert.InsertRelatedDataToListForm':true,
          'Ribbon.WikiPageTab.LibrarySettings.LibraryPermissions':true,
          'Ribbon.PublishTab':true,'Ribbon.EditingTools.CPEditTab.EditAndCheckout.SaveAndPublish':true
        },
        {'PublishTabTrimmingVisibilityContext':true,'WSSWikiPage':true},
        false,0,false,'SP.Ribbon.PageManager.get_instance()',false,null,null,null,'-27108161',1,',');
      }
      function _ribbonStartInit(initialTabId,buildMinimized,e){
        EnsureScriptParams('core.js',
        '_ribbonStartInitWrapped',
        initialTabId,buildMinimized,e,true,
        'EnsureScriptParams("core.js", "RibbonControlInitWrapped");EnsureScriptFunc("ribbon", "SP.Ribbon.PageManager", function () { _registerCUIEComponentWrapped( "\u002fApplication\u002f_layouts\u002f15\u002fcommandui.ashx", "1049", "2130333900");});EnsureScriptFunc("ribbon", "SP.Ribbon.PageManager", _ribbonInitFunc1);');
      }
      function _ribbonKeyboardTitleShortcut(e){
        EnsureScriptParams('core.js','_ribbonKeyboardTitleShortcutWrapped',e,'tff[','Ribbon.Read-title');
      }
      function _ribbonDataInit(p6,p7){
        _ribbon=new Object();
        _ribbon.initialTabId=p6;
        _ribbon.buildMinimized=p7;
        _ribbon.initStarted=false;_ribbon.initialTabSelectedByUser=false;_ribbon.launchedByKeyboard=false;
      }
      function _ribbonWaitForBodyEvent(){
        if(false)_ribbonStartInit();
        function _ribbonOnWindowResizeForHeaderScaling(evt){_ribbonOnWindowResizeForHeaderScalingWrapped(evt,'RibbonContainer',false);}
        EnsureScriptParams('core.js','_ribbonInitResizeHandlers',_ribbonOnWindowResizeForHeaderScaling,'RibbonContainer',true,false);
        EnsureScriptParams('core.js','_ribbonAddEventListener',_ribbonKeyboardTitleShortcut);
      }
      _ribbonDataInit('Ribbon.Read',true);
      if(SP.SOD.get_prefetch()==0){
        ExecuteOrDelayUntilScriptLoaded(_ribbonWaitForBodyEvent,'sp.ribbon.js');
      }else{
        EnsureScriptFunc('ribbon','SP.Ribbon.PageStateActionButton',_ribbonWaitForBodyEvent);
      }
      var g_commandUIHandlers={"name":"CommandHandlers","attrs":{},"children":[]};g_QuickLaunchControlIds.push("zz13_TopNavigationMenu");
      _spBodyOnLoadFunctionNames.push('QuickLaunchInitDroppable');
      var g_zz13_TopNavigationMenu=null;
      function init_zz13_TopNavigationMenu(){
        if(g_zz13_TopNavigationMenu==null)g_zz13_TopNavigationMenu=$create(SP.UI.AspMenu,null,null,null,$get('zz13_TopNavigationMenu'));
      }
      ExecuteOrDelayUntilScriptLoaded(init_zz13_TopNavigationMenu,'SP.Core.js');
      ExecuteOrDelayUntilScriptLoaded(
        function(){
          if($isNull($find('ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr'))){
            var sb=$create(
              Srch.SearchBox,
              {
                "delayLoadTemplateScripts":true,
                "initialPrompt":"Поиск на этом сайте",
                "messages":[],
                "navigationNodes":[
                  {"id":0,"name":"этом сайте","url":"~site/_layouts/15/osssearchresults.aspx?u={contexturl}","promptString":"Поиск на этом сайте"}
                ],
                "queryGroupNames":["MasterPage"],
                "renderTemplateId":"~sitecollection/_catalogs/masterpage/Display Templates/Search/Control_SearchBox_Compact.js",
                "resultsPageAddress":"~site/_layouts/15/osssearchresults.aspx?u={contexturl}",
                "serverInitialRender":true,
                "showDataErrors":true,
                "showNavigation":true,
                "states":{},
                "tryInplaceQuery":false
              },
              null,
              null,
              $get("ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr")
            );
            sb.activate(
              '\u041F\u043E\u0438\u0441\u043A \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0430\u0439\u0442\u0435',
              'ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox',
              'ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sboxdiv',
              'ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_NavButton',
              'ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_AutoCompList',
              'ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_NavDropdownList',
              'ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_SearchLink',
              'ms-srch-sbprogress','ms-srch-sb-prompt ms-helperText'
            );
          }
        },
        'Search.ClientControls.js'
      );
      g_QuickLaunchControlIds.push("zz15_V4QuickLaunchMenu");
      _spBodyOnLoadFunctionNames.push('QuickLaunchInitDroppable');
      _spBodyOnLoadFunctionNames.push('QuickLaunchInitDroppable');
      function zz15_V4QuickLaunchMenu_Callback(data,errorHandlerName){
        WebForm_DoCallback('ctl00$PlaceHolderLeftNavBar$V4QuickLaunchMenu',data,AspMenuHandleDataRefresh,g_QuickLaunchMenu.Id,errorHandlerName,true);
      }
      var g_zz15_V4QuickLaunchMenu=null;
      function init_zz15_V4QuickLaunchMenu(){
        if(g_zz15_V4QuickLaunchMenu==null)g_zz15_V4QuickLaunchMenu=$create(SP.UI.AspMenu,null,null,null,$get('zz15_V4QuickLaunchMenu'));
      }
      ExecuteOrDelayUntilScriptLoaded(init_zz15_V4QuickLaunchMenu,'SP.Core.js');
      function RelatedAdder_addWebPartToRTECore(adder,relatedWeb,relatedList,relatedField,sourceWebPart){var range=RTE.Cursor.get_range();range.collapse(false);var targetWebPartId=adder._createWebpartPlaceholderInRte(range);if(targetWebPartId==null)return false;if(IsFullNameDefined('SP.UI.ModalDialog.showWaitScreenWithNoClose')){SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.genericLoading,SP.Res.genericLoading,76,290);}__doPostBack('ctl00$ctl46','addItemAndConnect&wpz&'+relatedWeb+'&'+relatedList+'&'+relatedField+'&'+sourceWebPart+'&'+targetWebPartId);}function RelatedAdder_addWebPartToRTE(relatedWeb,relatedList,relatedField,sourceWebPart){var editableRegion=RTE.Canvas.currentEditableRegion();if(!RTE.Canvas.getRestriction(editableRegion,RTE.Canvas.allowWebParts,false)){return false;}var adder=window.WPAdder;if(!adder){LoadWPAdderOnDemand();ExecuteOrDelayUntilEventNotified(function(){var adder=window.WPAdder;if(!adder){return false;}RelatedAdder_addWebPartToRTECore(adder,relatedWeb,relatedList,relatedField,sourceWebPart);},"_spEventWebPartAdderReady");}else{RelatedAdder_addWebPartToRTECore(adder,relatedWeb,relatedList,relatedField,sourceWebPart);}}function RelatedAdder_addItemAndConnect(zone,relatedWeb,relatedList,relatedField,sourceWebPart,bAddToWikiZone){if(bAddToWikiZone){ExecuteOrDelayUntilScriptLoaded(function(){RelatedAdder_addWebPartToRTE(relatedWeb,relatedList,relatedField,sourceWebPart);},"sp.ui.rte.js");}else{__doPostBack('ctl00$ctl46','addItemAndConnect&'+zone+'&'+relatedWeb+'&'+relatedList+'&'+relatedField+'&'+sourceWebPart+'&');}}
  
}

