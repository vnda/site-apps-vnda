/*!
 *   -- Main
 * App v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */
"use strict";

import { Bootstrap } from "./../../app/Bootstrap.js";
// import { FXPageTransitions } from "./components/FXPageTransitions.js";
import { HeaderBaseMenu } from "./components/HeaderBaseMenu.js";
import { FooterBaseMenu } from "./components/HeaderBaseMenu.js";
import { MobileMenu } from "./components/MobileMenu.js";
import { OwlCarousel } from "./components/OwlCarousel.js";
import { Slick } from "./components/Slick.js";

class App extends Bootstrap {

	constructor() {

		super();

		// this.layout.include('header-base-menu', HeaderBaseMenu, [this.routes]);
		this.layout.include('mobile-menu', MobileMenu, [this.routes]);
		this.layout.include('footer-base-menu');			
		this.layout.yeld('view-router');

		// this.layout.efects( FXPageTransitions );				
	}

	init() {		

		//setTimeout(function(){
			document.querySelector(".loader").style.display = "none";
			document.querySelector("main").style.display = "block";						
			// this.layout.addPlugin('owlCarousel', OwlCarousel);			
			// this.layout.addPlugin('slick', Slick);
		//}, 1000);	
	}	
}

/* App */

const app = new App();





