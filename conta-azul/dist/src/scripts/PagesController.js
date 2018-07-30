/*!
 *   -- Main
 * PagesController v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

import { ViewModel } from "./../../app/Core/ViewModel.js";
import { Forms } from "./../../app/Utils/Forms.js";

export const PagesController = {

	viewModel : new ViewModel(),

	add ( view, _import ) {	
	
		this.viewModel.includeView ( view );
		this.viewModel.includeImport ( _import );
	},

	/* PAGES CONTROLLERS */	

	home () {
		
		this.viewModel.page("home");		
	},

	about () {
			
		this.viewModel.page("about");
	},

	grids () {
		
		this.viewModel.page("grids");
	},

	blank () {
		
		this.viewModel.page("blank");
	},

	contact () {

		this.viewModel.page("contact");	

		let inputs = {
			first_name : 'Leandro',
			last_name : 'Santos',
			email : 'lesign33@gmail.com',
			country : 'Portugal',
			bio : '123',
			phone : '(51) 98119-3147',
			affiliations : '123',
			occupation : 'frontend',			
			birthday : '2018-03-04',
			gagdet : 'cat',
			talent : 'sumopower',
			drink : 'coffee',
			power : 'just',
			weapon : 'web',
			comments : '123'			
		}

		let me = Promise.resolve( this.viewModel.currentView() ); 		
		me.then((res) => {			

			setTimeout(() => {						
										
				let occupation = res.querySelector("#occupation");	
				let talent = res.querySelector("#talent");
				let form = res.querySelector("form");

				this.form = new Forms(form, occupation, talent, inputs);		
				this.form.setInputData();
				this.form.bindInputData();

				form.addEventListener("submit", (ev) => {			
					ev.preventDefault();
					let result = this.form.getInputData();
					//console.log(result);			
				});	

			}, 200);				

		});
		
	},

	search ( args ) {
		console.log("hello here is search page with arguments : ", args);
	},

	slug ( args ) {
		console.log("hello here is slug page with arguments: ", args);
	}

}	