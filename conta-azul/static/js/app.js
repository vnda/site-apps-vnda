
window.addEventListener("load", () => { 

	document.querySelector(".loader").classList.add("tween__in-out", "hidden");
	document.querySelector("main").classList.add("wow", "fadeIn");

	let links = document.links; 
	window.onscroll = scroll;           
	    
    Array.from(links).forEach(function(link){
	    link.addEventListener('click', function( ev ) {

	      	ev.preventDefault();	          

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


	let header = document.querySelector(".header"); 

    function scroll () {       

        if( window.pageYOffset > 100 ){
        
          header.classList.add("collapse");     

        }else {

          header.classList.remove("collapse");           
       } 
    }

    window.onscroll = scroll;

	let wow = new WOW({
	    boxClass:     'wow',      
	    animateClass: 'animated', 
	    offset:       0,          
	    mobile:       false,       
	    live:         true        
	});

    wow.init(); 
	
});

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

	$("#owl-panels").owlCarousel({
				 		
	    nav:true, 
	    slideSpeed : 300,
	    paginationSpeed : 400,
	    singleItem:true,
		  items: 1,
		  loop: true,
		  navClass: ['owl-prev', 'owl-next'],
		  navText: ["<i class='icon-prev'></i>", "<i class='icon-next'></i>"]
		  // navText: ["<img src='static/images/left.png' class='prev banner' />", "<img src='static/images/right.png' class='next banner' />"]		 		 
	 
	});	

});