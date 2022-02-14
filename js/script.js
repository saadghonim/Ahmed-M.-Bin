$(document).ready(function(){

  // ~~~~~~~~~~~~header~~~~~~~~~~~~
  if ($(window).width() <= 991) {
    $(".bars_").click(function(){
      $("nav").toggle(500);
      $("body").toggleClass("over_");
      $(this).toggleClass("la-times la-bars");
      $(".bars_").toggleClass("bars_dark");

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
        $("nav .ul_nav > li > a, .bars_").addClass("dark");
        $(".dark_img").addClass("dark_img_b");
        $(".img_w").addClass("dark_img_n");
        $(".header").addClass("padd_");
  } else {
      $("header").removeClass("fixed");
      $("nav .ul_nav > li > a, .bars_").removeClass("dark");
      $(".dark_img").removeClass("dark_img_b");
      $(".img_w").removeClass("dark_img_n");
      $(".header").removeClass("padd_");

  };
});
// $(window).on( "load", function() {
//   $(".preloader-sa").fadeOut();
//     $("body").removeClass("over_");
//     });
    $(window).on("scroll", function() {
      $(window).scrollTop() > 100 ? $("header").addClass("fixed") : $("header").removeClass("fixed")
  })
});


var fixedBar = document.getElementById("header_"),
  prevScrollpos = $(window).scrollTop();

window.onscroll = function() {
  var o = $(window).scrollTop();
  prevScrollpos < o && prevScrollpos > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), prevScrollpos = o
}, document.documentElement.style.setProperty("--animate-duration", "5s");

$(document).ready(function (){
  $(window).on( "load", function() {
    $('.preloader-sa').delay(3000).slideUp("500", function () {
      $(".preload_back").delay(200).fadeOut();
      $("body").removeClass("over_");
  });

      });

});


