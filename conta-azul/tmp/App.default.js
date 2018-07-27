"use strict";

import { Router } from "./Core/Router.js";
import { Firebase } from "./Config/Firebase.js";
import { Forms } from "./Utils/Forms.js";
import { Detect } from "./Utils/Detect.js";

class App {

	constructor() {

		//console.log('App => constructor 1');

		this.router = new Router();
		this.router.config({ mode: 'history'});
		
		this.firebase = new Firebase();
		this.firebase.init();

		this.detect = new Detect();
		
		this.templates = [];
		this.components = [];

		this.oldURL = "/";

		/* layout */
		this.contentMenu = "";
		this.overlay = "";

		this.range = document.createRange();
		

		/* loading components */
		this.addImport("component", "header-base-menu", "views/components/header-base-menu.html");
		
		this.addImport("view", "home", "views/pages/home.html");
		this.addImport("view", "about", "views/pages/about.html");
		this.addImport("view", "grids", "views/pages/grids.html");
		this.addImport("view", "blank", "views/pages/blank.html");
		this.addImport("view", "contact", "views/pages/contact.html");	
		
		this.addImport("view", "login", "views/auth/login.html");
		
		this.routes();

		window.addEventListener('load', (e) => {
					
			e.preventDefault();
			this.router.check().listen();

			console.log('path', this.router.path);								
			console.log('hash', this.router.hash);								
			console.log('search', this.router.search);

			//setTimeout(() => {								
				
				//this.oldURL = this.getURL();									
				//this.switchState(this.getURL());
				//this.checkLoginStatus();				
	
			//},200);
	
		});			

		window.addEventListener('WebComponentsReady', (e) => {

			let _root = null;
			let template = null;
			let com = document.querySelector("header-base-menu");

			if(this.detect.browser === "Edge" || this.detect.browser === "Mozilla") {

			 	let registry = Promise.resolve(this.components['header-base-menu']); 
		
			 	registry.then((res) => {				

					_root = res.ownerDocument;					

					template = _root.querySelector('#header-base-menu');					

					let clone = document.importNode(template.content, true);
					com.appendChild(clone);

					this.managerMenu();

			 	});
			}			

			if(this.detect.browser === "Chrome/Opera") {

				setTimeout(() => {	
					
					let com = document.querySelector("header-base-menu");
					let template = this.components['header-base-menu'];
					//console.log('template', template);

					com.appendChild(template);

					this.managerMenu();

			 	},200);				
			}			

		});

		//window.addEventListener('popstate', (e) => {
			//let path = this.router.clearSlashes(e.state);						
			//this.router.render(this.router.templates[path]);
		//});		
	}

	addImport(type, name, url) {		

		const self = this;

      	let link = document.createElement('link');
      	link.rel = 'import';
      	link.href = url;
		link.setAttribute('async', '');			

      	link.onload = function(e) {					
            let template = this.import.querySelector('template');
			let clone = document.importNode(template.content, true);				
			if(type === "view")	self.templates[name] = clone;			
			if(type === "component") self.components[name] = clone;			
      	};
		
		link.onerror = function(e) {
			console.error("error loading template: ", e);
		}; 

		document.head.appendChild(link);
    }

	getURL () {

		let url = null;	
		this.router.mode !== "hash" ? url = window.location.pathname : url = window.location.hash;
		return url;
	}

	supportsImports () {
	  	return 'import' in document.createElement('link');
	}

	managerMenu () {

		const self = this;		

		this.contentMenu = document.querySelector(".content-menu");		
		let nav = document.querySelector("nav");			
		this.contentMenu.innerHTML = nav.innerHTML;

		let buttonMenu = document.querySelector(".button-menu");
		buttonMenu.addEventListener('click', () => {			
			this.updateToggleCollapseMenu();
		});	

		let footerLinks = document.querySelector(".list").children;	
		Array.from(footerLinks).forEach(function(link){
			link.addEventListener('click', function( ev ) {
				ev.preventDefault();
				//console.log('hash', this.firstChild.hash);								
				//console.log('path', self.router.path);								
				self.router.navigate(self.router.path + this.firstChild.hash).check();
				console.log('path', self.router.path);								
				console.log('hash', self.router.hash);								
				console.log('search', self.router.search);				
				// self.updateToggleCollapseMenu();										
			});
		});		

		this.overlay = document.querySelector(".overlay");
		this.overlay.addEventListener( 'click', () => {							
			if(this.collapseToggle){
				this.overlay.classList.remove("active");
				this.updateToggleCollapseMenu();
			}				
		});						
					
		let navLinks = document.querySelector("nav").children;	
		Array.from(navLinks).forEach(function(link){
			link.addEventListener('click', function( ev ) {
				ev.preventDefault();
				//if(self.firebase.logged)	
				//link.id != "logout" ? self.switchState(this.pathname) : self.controllerLogout();
				self.router.navigate(this.pathname).check();
				console.log('path', self.router.path);								
				console.log('hash', self.router.hash);								
				console.log('search', self.router.search);
														
			});
		}); 

		let menuLinks = document.querySelector(".content-menu").children;	
		Array.from(menuLinks).forEach(function(link){
			link.addEventListener('click', function( ev ) {
				ev.preventDefault();
				//if(self.firebase.logged)	
				//link.id != "logout" ? self.switchState(this.pathname) : self.controllerLogout();					
				self.router.navigate(this.pathname).check();
				console.log('path', self.router.path);								
				console.log('hash', self.router.hash);								
				console.log('search', self.router.search);
				
				self.updateToggleCollapseMenu();										
			});
		}); 

		let navbrand = document.querySelector(".logo"); 
		navbrand.addEventListener('click', function( ev ) {
			ev.preventDefault();
			//if(self.firebase.logged)	
			self.router.navigate(this.pathname).check();
			console.log('path', self.router.path);								
			console.log('hash', self.router.hash);								
			console.log('search', self.router.search);
														
		});						         
	}

	updateToggleCollapseMenu(){	

		if(!this.collapseToggle){
			this.overlay.classList.add("active");
			this.contentMenu.classList.add("active");
		}else{		
			this.overlay.classList.remove("active");
			this.contentMenu.classList.remove("active");
		}

		this.collapseToggle = !this.collapseToggle;
	}	
	

	checkLoginStatus(){

		let nav = document.querySelector("nav");
		let navLogoutLink = nav.querySelector("#logout");
		let contentMenu = document.querySelector(".content-menu");
		let contentLogoutLink = contentMenu.querySelector("#logout");			

		if(!this.firebase.logged){
			contentLogoutLink ? contentLogoutLink.style.display = "none" : navLogoutLink.style.display = "none";
		}else{			
			contentLogoutLink ? contentLogoutLink.style.display = "block" : navLogoutLink.style.display = "inline-block";
		}
	}


	/* Routes */

	routes(){

		/* VALID EXPRESIONS */
				
		/* ==> /home#carousel
		/* ==> /home#carousel/slide-one
		/* ==> /admin/users
		/* ==> /admin/users/edit/
		/* ==> /admin/users/edit/23
		/* ==> /products/12/edit/22
		/* ==> /home?email=lesign33@gmail.com/

		*/

		const self = this;	
		
		this.router		
		.add(/home/,
			function(){self.controllerHome()}
		)		
		.add(/about/, 
			function(){self.controllerAbout()}
		)
		.add(/grids/,
			function(){self.controllerGrids()}
		)
		.add(/blank/, 
			function(){self.controllerBlank()}
		)
		.add(/contact/,	
			function(){self.controllerContact()}
		)
		.add(/login/,	
			function(){self.controllerLogin()}
		)		
		.add(/admin\/(.*)\/(.*)\/(.*)/,
			function(){self.controllerAdmin(arguments)}
		)
		.add(/admin\/(.*)\/(.*)/,
			function(){self.controllerAdmin(arguments)}
		)
		.add(/admin\/(.*)/,
			function(){self.controllerAdmin(arguments)}
		)				
		.add(/products\/(.*)\/edit\/(.*)/,
			function(){self.controllerProducts(arguments)}
		)		
		.add(function(){self.controllerHome()})	

		//this.router.check().listen();	
		//this.router.navigate('/products/12/edit/22').check('/products/12/edit/22').listen();
		//this.router.navigate('/admin/users/').check().listen();
	}

	/* Controllers */

	controllerHome() {
		//console.log('controller home');		
	}

	controllerHomeGetHash(_arguments) {
		console.log('controller home get hash', _arguments);
	}

	controllerAbout() {
		//console.log('controller about');		
	}

	controllerGrids() {
		//console.log('controller grids');		
	}

	controllerBlank() {
		//console.log('controller blank');		
	}


	controllerContact () {
		//console.log('controller contact');		

		// let inputs = {
		// 	first_name : 'Leandro',
		// 	last_name : 'Santos',
		// 	email : 'lesign33@gmail.com',
		// 	country : 'Portugal',
		// 	bio : '123',
		// 	phone : '(51) 98119-3147',
		// 	affiliations : '123',
		// 	occupation : 'frontend',			
		// 	birthday : '2018-03-04',
		// 	gagdet : 'cat',
		// 	talent : 'sumopower',
		// 	drink : 'coffee',
		// 	power : 'just',
		// 	weapon : 'web',
		// 	comments : '123'			
		// }

		// let me = Promise.resolve(this.router.view); 		
		// me.then((res) => {			

		// 	let occupation = res.querySelector("#occupation");	
		// 	let talent = res.querySelector("#talent");
		// 	let form = res.querySelector("form");

		// 	this.form = new Forms(form, occupation, talent, inputs);		
		// 	this.form.setInputData();
		// 	this.form.bindInputData();

		// 	form.addEventListener("submit", function (ev) {			
		// 		ev.preventDefault();
		// 		let result = this.form.getInputData();
		// 		//console.log(result);			
		// 	});	

		// });				
	}

	controllerAdmin (_arguments) {
		console.log('admin controller', _arguments);

		// firebase.auth().onAuthStateChanged((user) => {
	
		// 	if (user) {	

		// 		this.firebase.user = user;
		// 		this.firebase.logged = true;					
		// 		// this.switchState(this.getURL());
		// 		//console.log('im logged');
			
		//   	} else {
				
		// 		this.firebase.logged = false;
		// 		this.switchState("login");	
		
		//   	}

		// 	this.checkLoginStatus();
	
		// });			
	}

	controllerLogin () {
		//console.log('login');

		let inputs = {			
			email : 'lesign33@gmail.com',
			password : 'g@m3d3sign'
		}

		let me = Promise.resolve(this.router.view); 		
		me.then((res) => {	
			
			let form = res.querySelector("form");

			this.form = new Forms(form, null, null, inputs);		
			this.form.setInputData();
			this.form.bindInputData();

			let input = form.querySelector('.input-pass');
			let img = form.querySelector('#eye');	
			img.addEventListener('click', function () {				
			  	input.type == 'password' ? input.type = "text" : input.type = "password";				
			});

			form.addEventListener("submit", (ev) => {		
	
				ev.preventDefault();
				let loading = form.querySelectorAll('.loading-bar'); 
				Array.from(loading).forEach(function(bar){
					bar.style.display = "block";
				}); 

				let result = this.form.getInputData();	

				firebase.auth().signInWithEmailAndPassword(result.email, result.password)
				.then((user) => {

					if(this.oldURL == "/" || this.oldURL == "/login")this.oldURL = "/home";
					this.firebase.user = user;
					this.firebase.logged = true;
					this.checkLoginStatus();	
					this.switchState(this.oldURL);
       				
   				}).catch(function(error) {

					let loading = form.querySelectorAll('.loading-bar'); 
					Array.from(loading).forEach(function(bar){
						bar.style.display = "none";
					}); 
					
					let response = form.querySelector('#response');
					response.className = "error active";
					response.innerHTML = error.message;
				});			
				
			});	
		});
	}

	controllerLogout () {
		//console.log('logout');				

		firebase.auth().signOut()
	  	.then(() => {
			this.oldURL = this.getURL();
			this.firebase.user = null;
			this.firebase.logged = false;
			this.switchState('login');
	
	  	}, function(error) {

	    	console.error( error );
			alert(error.message);

		});		
	}

	controllerProducts(_arguments) {
		console.log('test controller', _arguments);		
	}	

	controllerSearch(_arguments) {
		console.log('search controller', _arguments);		
	}	
}

/* App */

const app = new App();