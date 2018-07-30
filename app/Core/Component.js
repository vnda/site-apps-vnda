/*!
 *  -- MVVM
 * View v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export class Component {

	constructor( Import ) {		

		/* Imports */
		this._import = Import;

		this.stage = [];		

		this.range = document.createRange();
	}

	add ( el, f, args  ) {					

		this._import.setPath( "src/views/components/" );
		this._import.create( el );			

		const _root = document.querySelector(el);		
		let template = null;			

		window.addEventListener('WebComponentsReady', ( e ) => {			

			setTimeout(() => {	
									
				template = this._import._imports[ el ];				
	
				this.range.selectNodeContents( _root );
				this.range.insertNode( template );											

				if( f != undefined ){ 
					if(args == undefined) args = null;
					f.apply( null, args );					
				}		 	
			
			}, 200);							

		});

	}


	addStage ( el, f, args  ) {					

		this._import.setPath( "src/views/components/" );
		this._import.create( el );			

		const _root = document.querySelector(el);		
		let template = null;					

		setTimeout(() => {	
								
			template = this._import._imports[ el ];				

			this.range.selectNodeContents( _root );
			this.range.insertNode( template );											

			if( f != undefined ){ 
				if(args == undefined) args = null;
				f.apply( null, args );					
			}		 	
		
		}, 200);		

	}


	addFX (  f ) {	

		setTimeout(() => {	

			f.apply( null, null );

		}, 200);	

	}

}