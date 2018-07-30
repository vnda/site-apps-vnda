
export const OwlCarousel = function(){	

	jQuery(document).ready(function( $ ) {

    console.log("owlcarousel ok");

		/* CREATE */		
	 
		$("#owl-panels").owlCarousel({
		 
		    nav:true, 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true,
			  items: 1,
			  loop: true,
			  navClass: ['owl-prev', 'owl-next'],
			  navText: ["<img src='static/images/icon-arrow-prev.svg' class='prev banner' />", "<img src='static/images/icon-arrow-next.svg' class='next banner' />"]		 
		 
		});				
	 
	});

}


