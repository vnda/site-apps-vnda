/*!
 *   -- Main
 * App v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */
"use strict";

import { Bootstrap } from "./../../app/Bootstrap.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { MobileMenu } from "./components/MobileMenu.js";
import { FXWow } from "./components/FXWow.js";

class App extends Bootstrap {

	constructor() {

		super();
	
		this.layout.include('mobile-menu', MobileMenu, [this.routes]);
		this.layout.include('footer-base-menu', Footer);			
		this.layout.yeld('view-router');								
	}

	init() {

		const self = this;		

		setTimeout(function(){
		
			document.querySelector(".loader").classList.add("tween__in-out", "hidden");
			document.querySelector("main").classList.add("wow", "fadeIn");	
		
			self.layout.efects( FXWow );
			self.layout.efects( Header );

		}, 1200);	
	}	
}

/* App */
const app = new App();
