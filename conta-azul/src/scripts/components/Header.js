
/*!
 * Import v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export const Header = function( ) {  

    // document.querySelector(".button-menu").addEventListener('click', function( ev ) {       
    //    console.log("menu mobile");         
    // });    

    window.onscroll = scroll;

    function scroll () {       

      if( window.pageYOffset > 200 ){
        
        console.log( window.pageYOffset );
      } 

      if( window.pageYOffset < 200 ){
        // document.querySelector(".header").classList.remove("collapse");
      } 

    }

}