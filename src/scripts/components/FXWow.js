
export const FXWow = function(){

	let wow = new WOW(
    {
	    boxClass:     'wow',      
	    animateClass: 'animated', 
	    offset:       0,          
	    mobile:       false,       
	    live:         true        
	});

    return wow.init();

}