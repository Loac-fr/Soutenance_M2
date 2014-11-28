console.log('\'Allo \'Allo!');

//WOW js init
wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       500          // default
    }
  );
wow.init();

// Glide js init
 $('.slider').glide({
        autoplay: false,
        arrows: '.slider',
        navigation: '.slider',
        arrowRightText : "",
        arrowLeftText   : ""
    }).data('api_glide');


//scrollsnap init
$(document).ready(function() {
	$(document).scrollsnap({
	snaps: '.snap',
	proximity: 300,
	duration: 500
	});

	initSlider();
});