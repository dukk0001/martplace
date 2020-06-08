$(function(){
    

    $('.product-slider__inner').slick({

        dots: true
    })

    $(".rate-star").rateYo({
        rating: 5,
        readOnly:false,
        starWidth: "15px"
      });


    
 $('.slider__inner-display').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider__inner-arrows'
  });
  $('.slider__inner-arrows').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider__inner-display',
    arrows: true,
    dots:false,
    centerMode: true,
    focusOnSelect: true
  });



 

var mixer = mixitup ('.products__inner-box');
});