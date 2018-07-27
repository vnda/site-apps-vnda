
/*!
 * Router v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export class Request {

	/**
	 * Construtor da classe.
	 */
	constructor() {	

		// helper functions 
		this.request = new XMLHttpRequest();		
	}

	/**
	 * Requisição GET.	 
	 */	
	get (url, callback) {
		
		this.request.open("GET", url, true);

		this.request.addEventListener("load", function(evt) {
			if (this.request.status < 400){			
				callback(evt.loaded, this.request.responseText, null);

			}else{
				callback(null, null, new Error("this.requestuest failed: " + this.request.statusText));
			}
		});

		this.request.addEventListener("error", function() {
			callback(null, null, new Error("Network error"));
		});

		this.request.send(null);
	}


}