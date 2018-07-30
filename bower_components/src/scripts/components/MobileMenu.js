
export const MobileMenu = function( routes ){	

	jQuery(document).ready(function( $ ) {		

        $("#menu").mmenu({

           	"slidingSubmenus": false,

           	"extensions": [
              	"fx-panels-zoom",
              	"pagedim-black"
           	],

           	"iconPanels": true,

           	"navbars": [

              	{
              	   "position": "top",

              	   "content": [
              	      	"searchfield"
              	   ]

              	},

              	{
              	   "position": "top"
              	}
            ]

        });
				
		let links = document.links;								
		
		Array.from(links).forEach(function(link){
			link.addEventListener('click', function( ev ) {
				ev.preventDefault();
				routes.navigate(this.href);						
			});
		});	

	});
}