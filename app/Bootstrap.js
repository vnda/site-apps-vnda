/*!
 *   -- Appr 
 * Bootstrap v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

import { Import } from "./Core/Import.js";
import { Routes } from "./Config/Routes.js";
import { Layout } from "./Core/Layout.js";

export class Bootstrap {

	constructor() {	

		/* Import source */
		this.import = new Import();		
		
		/* Masterpage */
		this.layout = new Layout( this.import );		

		/* Routes */
		this.routes = new Routes( this.layout.view, this.import );		

		this.boot();		
	}

	boot () {			

		window.addEventListener("load", () => { 								
									
			this.routes.check().listen();					
									
			this.init();		  		
			
		});

	}

}