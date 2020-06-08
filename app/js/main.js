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
  prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
  nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
  appendArrows: '.slider__inner-arrows'
  });
 



 

var mixer = mixitup ('.release__inner-items');
});