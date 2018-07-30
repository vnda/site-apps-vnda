
"use strict";

export class Event {
	
	constructor () {	
		return this;
	}

	addEventHandler (oTarget, sEventType, fnHandler) {	
	    if (oTarget.addEventListener) {	
	        oTarget.addEventListener(sEventType, fnHandler, false);	
	    } else if (oTarget.attachEvent) {	
	        oTarget.attachEvent("on" + sEventType, fnHandler);
	    } else {
	        oTarget["on" + sEventType] = fnHandler;
	    }
	}
	        
	removeEventHandler (oTarget, sEventType, fnHandler) {
	    if (oTarget.removeEventListener) {
	        oTarget.removeEventListener(sEventType, fnHandler, false);
	    } else if (oTarget.detachEvent) {
	        oTarget.detachEvent("on" + sEventType, fnHandler);
	    } else { 
	        oTarget["on" + sEventType] = null;
	    }
	}

	formatEvent (oEvent) {
	    if (isIE && isWin) {
	        oEvent.charCode = (oEvent.type == "keypress") ? oEvent.keyCode : 0;
	        oEvent.eventPhase = 2;
	        oEvent.isChar = (oEvent.charCode > 0);
	        oEvent.pageX = oEvent.clientX + document.body.scrollLeft;
	        oEvent.pageY = oEvent.clientY + document.body.scrollTop;
	        oEvent.preventDefault = function () {
	            this.returnValue = false;
	        };

	        if (oEvent.type == "mouseout") {
	            oEvent.relatedTarget = oEvent.toElement;
	        } else if (oEvent.type == "mouseover") {
	            oEvent.relatedTarget = oEvent.fromElement;
	        }

	        oEvent.stopPropagation = function () {
	            this.cancelBubble = true;
	        };

	        oEvent.target = oEvent.srcElement;
	        oEvent.time = (new Date).getTime();
	    }
	    return oEvent;
	}

	getEvent () {
	    if (window.event) {
	        return this.formatEvent(window.event);
	    } else {
	        return this.getEvent.caller.arguments[0];
	    }
	}
}
