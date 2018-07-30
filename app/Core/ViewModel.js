/*!
 *  -- MVVM
 * ViewModel v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

import { Model } from "./Model.js";

export class ViewModel {

	constructor () {		
		
		this._import = null;
		this._view = null;		
		this.templates = [];
	}	

	includeImport ( Import ) {
		this._import = Import;		
	}

	includeView ( View ) {
		this._view = View;		
	}

	currentView (){
		return this._view.getElementView();
	}	

	page ( state  ) {		

		let template = null;

		// new load
		if( this._import._imports[ state ] == undefined ) {

			//console.log('new load');

			this._import.setPath( "src/views/pages/" );
			this._import.create( state );

			setTimeout(() => {						
										
				template = this._import._imports[ state ];
				let content = template.querySelector(".content");
				this.templates[ state ] = content;				
				this._view.render( content );

			}, 200);	

		// preCache
		}else{	

			//console.log('precache');
			
			this._view.render( this.templates[ state ] );
			
		}
	}		
}
