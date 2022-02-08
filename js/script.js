$(document).ready(function(){

  // ~~~~~~~~~~~~header~~~~~~~~~~~~
  if ($(window).width() <= 991) {
    $(".bars_").click(function(){
      $("nav").toggle(500);
      $(".moboverlay").toggle(500);
      $("body").addClass("over_");

    });
    $(".close_,.moboverlay").click(function(){
      $("nav").toggle(500);
      $(".moboverlay").toggle(500);
      $("body").removeClass("over_");

    });
    $(".hover_menu>a").click(function(){
      $(".ul_menu").slideToggle(500);
    });
  }
  $(".drag_down_parant ").click(function () {
    $('html, body').animate({
        scrollTop: $(".about_us_parant").offset().top -1
    }, 1000);
  });

  // ~~~~~~~~~~clients~~~~~~~~~~~~~~~~~~
  /*~~~~~~~~~~~~~~~~~~start new~~~~~~~~~~~~~~~~~~ */
if ($(window).width() <= 767 ){
  $(".add_c").addClass("owl-carousel")
  $('.clients .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive:{
        0:{
            items:3,
            margin:15
        },
        600:{
            items:3
        }
    }
  });

}
$(window).on('scroll', function() {
  if($(window).scrollTop() > 20) {
        $("header").addClass("fixed");
        $("nav .ul_nav > li > a").addClass("dark");
        $(".dark_img").addClass("dark_img_b");
        $(".img_w").addClass("dark_img_n");
        $(".header").addClass("padd_");


  } else {
      $("header").removeClass("fixed");
      $("nav .ul_nav > li > a").removeClass("dark");
      $(".dark_img").removeClass("dark_img_b");
      $(".img_w").removeClass("dark_img_n");
      $(".header").removeClass("padd_");

  };
});

$(window).on( "load", function() {
  $(".preloader-sa").fadeOut();

});

});

var fixedBar = document.getElementById("header_");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    fixedBar.style.cssText = 
    'top: 0; transition: .3s;'
  } else {
    fixedBar.style.cssText = 
    'top: -130px; transition:.3s;'

  }
  prevScrollpos = currentScrollPos;
}
