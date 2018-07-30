
export const Slick = function(){	

	jQuery(document).ready(function( $ ) {

		console.log("slick here");


		$('#slick-instagram').slick({

		  	infinite: false,
		  	slidesToShow: 4,
		  	slidesToScroll: 4,
			adaptiveHeight:true,
			responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: false,
			        dots: false
			      }
			    }
			]

		});

	});

}