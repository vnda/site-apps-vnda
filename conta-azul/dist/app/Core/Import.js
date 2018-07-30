/*!
 * Import v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export class Import {

	/**
	 * Construtor da classe.
	 */
	constructor () {
		
		this._path = "";
		this._ext = ".html";
		this._imports = [];		
	}

	/**
	 * Configuração.	 
	 */	
	setPath ( path ){
		this._path = path;
	}

	setExt ( ext ) {
		this._ext = ext;
	}

	/**
	 * Criando importação.
	*/	
	create ( _name ) {

		const self  = this;				

      	let link = document.createElement('link');
      	link.rel = 'import';

      	link.href = this._path + _name + this._ext;
		link.setAttribute('async', '');											

      	link.onload = function( e ) {								
			//this => e.path[0].import;	
   			let template = this.import.querySelector('template');   			
			let clone = document.importNode(template.content, true);
			self._imports[ _name ] = clone;
      	}
		
		link.onerror = function(e) {
			console.error("error loading template: ", e);
		}			
			
		document.head.appendChild(link);						
	}	

	/**
	 * Retornando todas as importações.	 
	 */	
	getImports ( _name ){ 
			
		return this._imports[ _name ];				
	}	
}
