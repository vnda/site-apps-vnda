
export const OwlCarousel = function(){	

	jQuery(document).ready(function( $ ) {

		/* CREATE */		
	 
		$(".owl-banner").owlCarousel({
		 
		    nav:true, 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true,
			items: 1,
			loop: true,
			navClass: ['owl-prev', 'owl-next'],
			navText: ["<img src='static/images/icon-arrow-prev.svg' class='prev banner' />", "<img src='static/images/icon-arrow-next.svg' class='next banner' />"]		 
		 
		});		

		$("#owl-products").owlCarousel({
		 
		    nav : true, 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:false,			
			loop: true,
			navClass: ['owl-prev', 'owl-next'],
			navText: ["<img src='static/images/icon-arrow-prev.svg' class='prev prod' />", "<img src='static/images/icon-arrow-next.svg' class='next prod' />"],
			margin: 10,
			responsiveClass: true,
			responsive: {
                0: {
                    items: 3
                   
                },
                1127: {
                    items: 4
                }
            }	
		 
		});	

		$("#owl-marcas").owlCarousel({
		 
		    nav : true, 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:false,
			items: 6,			
			loop: false,
			navClass: ['owl-prev', 'owl-next'],
			navText: ["<img src='static/images/icon-arrow-prev.svg' class='prev marcas' />", "<img src='static/images/icon-arrow-next.svg' class='next marcas' />"],
			margin: 10			
		 
		});

		$("#owl-instagram").owlCarousel({
		 
		    nav : true, 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:false,			
			loop: true,
			navClass: ['owl-prev', 'owl-next'],
			navText: ["<img src='static/images/icon-arrow-prev.svg' class='prev inst' />", "<img src='static/images/icon-arrow-next.svg' class='next inst' />"],
			margin: 10,
			responsiveClass: true,
			responsive: {
                0: {
                    items: 3
                   
                },
                1127: {
                    items: 4
                }
            }		   
		 
		});

		$("#owl-shop").owlCarousel({		 
		    	   
		    singleItem:false,
			responsiveClass: true,	
			navClass: ['owl-prev', 'owl-next'],
			navText: ["<img src='static/images/icon-arrow-prev.svg' class='prev shop' />", "<img src='static/images/icon-arrow-next.svg' class='next shop' />"],		
			responsive: {
                0: {
					margin: 50,	
					slideSpeed : 300,
		   			paginationSpeed : 400,
					loop: true,
					nav : true, 
                    items: 2,
					mouseDrag: true,
       				touchDrag: true,			
                   
                },
                1127: {
					margin: 10,	
					slideSpeed : 0,
		    		paginationSpeed : 0,
					loop: false,
					nav : false, 
                    items: 3,
					mouseDrag: false,
       				touchDrag: false
                }
            }	
		 
		});				
	 
	});

}