
/*!
 * Import v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export const Header = function( ) {  

    let header = document.querySelector(".header"); 

    function scroll () {       

      if( window.pageYOffset > 100 ){
        
          header.classList.add("collapse");     

      }else {

          header.classList.remove("collapse");  
          
      } 

    }

    window.onscroll = scroll;

}