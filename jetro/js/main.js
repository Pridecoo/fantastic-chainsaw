$(function(){

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider__preview',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slick-prev.png" alt="previous slide"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slick-next.png" alt="next slide"></button>',
    appendArrows: '.slider__inner',
  });

  $('.slider__preview').slick({
    slidesToShow: 6,
    asNavFor: '.slider__inner',
    dots: false,
    variablewidth: true,
    focusOnSelect: true,
    
  });

  $('.header__menu-button').on('click', function(){
    $('.header__menu-list').slideToggle();
    

  });

  $(".header__menu-button").on("click", function(){
    $(".header__menu-button").toggleClass("active");
  });
});