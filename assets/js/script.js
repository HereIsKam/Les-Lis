$(document).ready(function(){
    $('.slider1').slick({
    autoplay: true,
    autoplaySpeed: 300000,
    arrows: false,
    dots: true,
    });

    $('.slider2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 300000,
      variableWidth: true,
    });

    $('.slider3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 300000,
      variableWidth: true,
    });


  });