// CUSTOM SCRIPTS

$('#products').owlCarousel ({
  items: 5,
  autoplay: true,
  smartSpeed: 2000,
  loop: true,
  autoplayHover: true,
  dots: false,
  navText:['<i class= "fa fa-chevron-left fa-2x"></i>','<i class "fa fa-chevron-right fa-2x"></i>'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2
    },
    780: {
      items: 3
    }
    1024: {
      items: 5
    }
  }
});

$('.dropdown').hover(function(){
  $(this).toggleClass('open');
});
