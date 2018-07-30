/*!
 *   -- Router 
 * Routes v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

import { Router } from "./../Core/Router.js";
import { PagesController } from "./../../src/scripts/PagesController.js";

export class Routes extends Router  {
	
	/**
	 * Construtor da classe.
	 */
	constructor ( View, Import ) {	

		super();

		this.config({ mode: 'history'});

		PagesController.add( View, Import );			
		
		this
		/* frontend */
		/* search */		
		.add(/(.*)\?(.*)=(.*)?/, 
			function(){	
				PagesController.search(arguments)
			}
		)
		/* hash */	
		.add(/(.*)#(.*)\/(.*)/,
			function(){				
				PagesController.slug(arguments)
			}
		)
		.add(/(.*)#(.*)/, 
			function(){				
				PagesController.slug(arguments)
			}
		)

		/* public pages */
		.add(/home/,
			function(){	  
				PagesController.home()
			}
		)
		
		.add(/about/, 
			function(){								
				PagesController.about()
			}
		)
		.add(/grids/,
			function(){							
				PagesController.grids()
			}
		)
		.add(/blank/, 
			function(){								
				PagesController.blank()
			}
		)
		.add(/contact/,	
			function(){								
				PagesController.contact()
			}
		)		
		/* auth */		
		.add(/login/, 
			function(){							
				console.log("login"); // => AuthController
			}
		)
		/* backend/private pages */						
		.add(/products\/(.*)\/edit\/(.*)/,
			function(){				
				console.log(arguments);
			}
		)
		.add(/admin\/(.*)\/(.*)\/(.*)/,
			function(){				
				console.log(arguments);
			}
		)
		.add(/admin\/(.*)\/(.*)/,
			function(){				
				console.log(arguments);
			}
		)
		.add(/admin\/(.*)/, 
			function(){				
				console.log(arguments);
			}
		)	
		.add(/admin/, 
			function(){
				console.log("admin");
			}
		)				
		/* not found */
		.add(/404/,
			function(){							
				console.log("404");
			}
		)

		/* default */		
		.add(function(){ PagesController.home() });	
			
		
		return this;		
	}	

}


/* VALID EXPRESIONS */
				
/* ==> /home#carousel
/* ==> /home#carousel/slide-one
/* ==> /admin/users
/* ==> /admin/users/edit/
/* ==> /admin/users/edit/23
/* ==> /products/12/edit/22
/* ==> /home?email=lesign33@gmail.com/

*/
