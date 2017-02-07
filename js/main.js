

$(function() {
  $('.navigationMenu a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 100);
        return false;
      }
    }
  });
});

$(function() {
$('.carousel').flickity({
      cellAlign: 'center',
	  contain: true,
      percentPosition: false,
      autoPlay: true,
      imagesLoaded: true,
      prevNextButtons: false
 	});
   
});