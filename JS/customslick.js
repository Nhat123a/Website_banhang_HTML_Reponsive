$('.Slider_banner').slick({
   dots: true,
   infinite: true,
   speed: 700,
   fade: true,
   autoplay: true,
   autoplaySpeed: 3000,
   cssEase: 'linear',
   responsive: [
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1
         }
      }
   ]
});
// -----------Modal---------
$('.modal_image').slick({
   dots: true,
   infinite: true,
   speed: 500,
   fade: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   cssEase: 'linear'
});
// ==========product deltail

$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   autoplay: true,
   autoplaySpeed: 5000,
   centerMode: true,
   focusOnSelect: true,
   centerPadding: '0'

});
//  sản phẩm liên quan
$('.product_moreview').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: true,
   autoplay: false,
   autoplaySpeed: 3500,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 4,

         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }

   ]
});



