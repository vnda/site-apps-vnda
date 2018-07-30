/*!
 *   -- Layout 
 * Bootstrap v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */
"use strict";

import { Component } from "./Component.js";
import { View } from "./View.js";

export class Layout {

	constructor( Import ) {

		this._import = Import;

		/* Include elements */
		this.elements = new Component( this._import );

		/* Content Pages */
		this.view = new View();	
		this.elView = this.view.elView;						
	}

	/*
 	* Add includes tio page (widgets, components, elements).
 	*/
	include (el, f , args) {
		this.elements.add(el, f, args);	
	}

	/*
 	* Add includes tio page (widgets, components, elements).
 	*/
	stage ( el, f, args ) {	
		this.elements.addStage(el, f, args);	
	}


	/*
 	* Add includes tio page (widgets, components, elements).
 	*/
	efects ( f ) {	
		this.elements.addFX ( f );	
	}


	yeld ( name ) {

		this.elView = document.querySelector( name );
		this.view.elView = this.elView;
	}
}