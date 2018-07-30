/*!
 *  -- MVVM
 * View v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export class View {
	
	constructor () {		
		this.elView = null;		
		//this.range = document.createRange();	
	}	

	setElementView ( el ) {		
		this.elView = el;					
		//this.range.selectNodeContents( el );
	}

	getElementView () {		
		return this.elView;
	}

	render ( template ) {			

		if( this.elView.innerHTML == "" ){	
			this.create( template );	
				
		}else{			
			this.update( template );
		}				
	}	

	create ( template ) {		
		this.elView.appendChild( template );					
		//this.range.insertNode(template);
		this.posTop();
	}

	update ( template ) {			
		this.elView.replaceChild( template, this.elView.querySelector('.content') );				
		//this.range.deleteContents();
		//this.range.insertNode(template);
		this.posTop();
	}

	posTop (){
		// this changes the scrolling behavior to "smooth"
		window.scrollTo({
		    top: 0,
		    behavior: "smooth"
		});
	}

	ready ( f ){
		f.apply(null, arguments);
	}
	
}