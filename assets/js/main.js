(function($){

	"use strict";

	$(document).ready(function() {
      // mobile menu slide from the left
     console.log("hi");
      $('[data-toggle="slide-collapse"]').on('click', function () {
         console.log("clicked");
          // show the sidebar
          $('#sidebar').addClass('active');
          // fade in the overlay
          $('.overlay').fadeIn();

      });

      $('.overlay,.mobile-nav-close,.close-nav').on('click', function () {
          // hide the sidebar
          $('#sidebar').removeClass('active');
          // fade out the overlay
          $('.overlay').fadeOut();
      });
     
    })
});

