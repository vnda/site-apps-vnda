
export const MobileMenu = function( routes ){	

	$(document).ready(function() {		

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

	});

  let links = document.links; 
  window.onscroll = scroll;           
    
  Array.from(links).forEach(function(link){
    link.addEventListener('click', function( ev ) {

      ev.preventDefault();
      //routes.navigate(this.href);       

      let anchor = this.hash.replace("#", "");        

      if(anchor == "recursos"){
        window.scrollTo({
            top: 1029,
            behavior: "smooth"
        });
      }

      if(anchor == "artigos"){
        window.scrollTo({
            top: 1957,
            behavior: "smooth"
        });
      }

      if(anchor == "faq"){
        window.scrollTo({
            top: 2350,
            behavior: "smooth"
        });          
      }

      if(anchor == "info"){
        window.scrollTo({
            top: 2441,
            behavior: "smooth"
        });          
      }

    });

  }); 

  document.querySelector(".logo").addEventListener('click', function( ev ) {   

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
     
  }); 


  
}