/*!
 *  -- Observer
 * Subject v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

import { ObserverList } from "./ObserverList.js";

export class Subject {

	/**
	 * Construtor da classe.
	 */
	constructor () {
		
		//console.log('class subject core');
		
		this.observers = new ObserverList();
	}
	
	addObserver ( observer ){

	  	this.observers.add( observer );

	};
	 
	removeObserver ( observer ){

	  	this.observers.removeAt( this.observers.indexOf( observer, 0 ) );

	};
	 
	notify ( context ){

	  	let observerCount = this.observers.count();

	  	for(let i=0; i < observerCount; i++){

	    	this.observers.get(i).update( context );
	  	}

	};

	
}