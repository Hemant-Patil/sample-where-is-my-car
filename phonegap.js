/*
 * Copyright (c) 2012, Intel Corporation
 * File revision: 04 October 2012
 * Please see http://software.intel.com/html5/license/samples 
 * and the included README.md file for license terms and conditions.
 */
 
 
/* 
    This is a dummy stub replacement for cordova.js.fireEvent
    
    Its purpose is so that an app that might be a web app or a mobile PhoneGap app can always 
    register for the deviceready event and know that it will be called regardless of context. 
    
*/



function fireEvent(obj,evt)
{

    var fireOnThis = obj;
    var evObj;
    if( document.createEvent ) {
      evObj = document.createEvent('CustomEvent');
      evObj.initEvent( evt, true, false );
      fireOnThis.dispatchEvent( evObj );

    } else if( document.createEventObject ) {
      evObj = document.createEventObject();
      fireOnThis.fireEvent( 'on' + evt, evObj );
    }
}
 
if(document.readyState !== "complete")
{
    document.addEventListener("DOMContentLoaded", 
                              function(){ fireEvent(document, "deviceready"); }, 
                              false);
}else{ fireEvent(document, "deviceready"); }