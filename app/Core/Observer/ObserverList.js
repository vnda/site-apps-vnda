/*!
*  -- Observer
 * ObserverList v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export class ObserverList {

	/**
	 * Construtor da classe.
	 */
	constructor () {
		
		//console.log('class observer core');
		
		this.observerList = [];	
	}
	
	/**
	 * Add.
	 */	 
	add ( obj ){
	  	return this.observerList.push( obj );
	};
	 
	/**
	 * Count.
	 */
	count (){
	  	return this.observerList.length;
	};

	/**
	 * Get.
	 */	 
	get ( index ){
	  	if( index > -1 && index < this.observerList.length ){
	    	return this.observerList[ index ];
	  	}
	};
	 
	/**
	 * IndexOf.
	 */
	indexOf ( obj, startIndex ){

	  	let i = startIndex;
	 
	  	while( i < this.observerList.length ){
	    	if( this.observerList[i] === obj ){
	      		return i;
	    	}
	    	i++;
	  	}
	 
	  	return -1;
	};
	 
	/**
	 * Remove At.
	 */
	removeAt ( index ){

	  	this.observerList.splice( index, 1 );

	};
	
}