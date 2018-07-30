
"use strict";

export class Detect {
	
	constructor () {

		this.browser = "";
		this.browserVersion = "";
		this.OS = "";

		this.userAgent = navigator.userAgent;
		this.browserAppVersion = parseFloat(navigator.appVersion);

		this.name = window.navigator.appName;
		this.codeName = window.navigator.appCodeName;
		this.version = navigator.appVersion;
		this.plataform = navigator.platform;
		this.agent = window.navigator.userAgent;
		this.connection = navigator.connection;

		//console.log(navigator.userAgent);

		this.isChrome = this.userAgent.indexOf("Chrome") > -1;
		//console.log('isChrome', this.isChrome);

		this.isMozilla = this.userAgent.indexOf("Mozilla") > -1;
		//console.log('isMozilla', this.isMozilla);

		this.isEdge = this.userAgent.indexOf("Edge") > -1;
		//console.log('isEdge', this.isEdge);

		this.isIE = this.userAgent.indexOf("compatible") && this.userAgent.indexOf("IE") > -1
					|| this.userAgent.indexOf("compatible") && this.userAgent.indexOf("MSIE") > -1;
		//console.log('isIE', this.isIE);

		this.isOpera = this.userAgent.indexOf("Opera") > -1;
		//console.log('isOpera', this.isOpera);

		this.isSafari = this.userAgent.indexOf("Safari") > -1;
		//console.log('isSafari', this.isSafari);

		if(!this.isChrome && this.isMozilla) this.browser = "Mozilla";
		if(this.isChrome && !this.isEdge) this.browser = "Chrome/Opera";
		if(this.isIE) this.browser = "Internet Explorer";
		if(this.isEdge) this.browser = "Edge";
		if(this.isSafari && !this.isMozilla && !this.isEdge) this.browser = "Safari";		

		//console.log(this.browser);
		
	}
	
	
}