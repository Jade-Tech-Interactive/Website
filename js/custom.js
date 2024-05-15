
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // $('.slick-slideshow').slick({
    //   autoplay: true,
    //   infinite: true,
    //   arrows: false,
    //   fade: true,
    //   dots: true,
    // });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);


// Share nav

let shareCard = document.getElementById('share-nav');
let shareButton = document.querySelector('#share-nav button');

shareButton.addEventListener('click', function(event) {
  event.preventDefault();

  shareCard.classList.toggle('open');
});