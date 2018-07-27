/*!
 * Import v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export const HeaderBaseMenu = function( routes ) {	

	let collapseToggle = false;

	let overlay = document.querySelector(".overlay");
	let buttonMenu = document.querySelector(".button-menu");
	let brand = document.querySelector(".logo");	

	let nav = document.querySelector("nav");	
	let navLinks = nav.children;	

	let contentMenu = document.querySelector(".content-menu");
	contentMenu.innerHTML = nav.innerHTML;	
	let menuLinks = contentMenu.children;
					
	
	Array.from(navLinks).forEach(function(link){
		link.addEventListener('click', function( ev ) {
			ev.preventDefault();
			routes.navigate(this.href);						
		});
	});	
	
	
	Array.from(menuLinks).forEach(function(link){
		link.addEventListener('click', function( ev ) {
			ev.preventDefault();								
			updateToggleCollapseMenu();	
			setTimeout(() => {
				routes.navigate(this.href);	
		 	},200);															
		});
	});	


	overlay.addEventListener( 'click', () => {							
		if(collapseToggle){
			overlay.classList.remove("active");	
			updateToggleCollapseMenu();
		}			
	});	
	

	buttonMenu.addEventListener('click', (ev) => {					
		updateToggleCollapseMenu();
		ev.preventDefault();		
	});	


	brand.addEventListener('click', (ev) => {	
		ev.preventDefault();
		console.log( this );
		//routes.navigate(this.href);			
	});	
		

	function updateToggleCollapseMenu () {	
		if(!collapseToggle){
			overlay.classList.add("active");	
			contentMenu.classList.add("active");
		}else{
			overlay.classList.remove("active");
			contentMenu.classList.remove("active");
		}
		collapseToggle = !collapseToggle;			
	}

}			