$(window).on("scroll", function () {
  var height = $(window).scrollTop();
  if (height > 200) {
    $("header").addClass("fixed-header");
  } else {
    $("header").removeClass("fixed-header");
  }
});

let scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  resetNativeScroll: false,
});

$(".outer-wrapper").scroll(function () {
  var aaaa = $(this).scrollTop();
  console.log(aaaa);
});

let tl = gsap.timeline();

const menu = document.querySelector(".menu-wrapper");
let menuOpen = false;
menu.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    tl.to(".line1", {
      duration: 0.2,
      y: 8,
    });
    tl.to(
      ".line3",
      {
        duration: 0.2,
        y: -8,
      },
      "-=0.2"
    );
    tl.to(".line2", {
      opacity: 0,
      visibility: "hidden",
    });
    tl.to(
      ".line1",
      {
        duration: 0.1,
        rotateZ: 45,
      },
      "-=0.5"
    );
    tl.to(
      ".line3",
      {
        duration: 0.1,
        rotateZ: -45,
      },
      "-=0.5"
    );
  } else {
    tl.to(".line1", {
      duration: 0.2,
      rotateZ: 0,
      y: 0,
    });
    tl.to(
      ".line3",
      {
        duration: 0.2,
        rotateZ: 0,
        y: 0,
      },
      "-=0.2"
    );
    tl.to(
      ".line2",
      {
        opacity: 1,
        visibility: "visible",
      },
      "-=0.3"
    );
  }
});

$(document).ready(function () {
  $(".testi-sec .testi-left .testi-left-outer a").click(function () {
    $(".testi-sec .testi-left .testi-left-outer a").removeClass("active");
    $(".testi-sec .testi-left .testi-left-outer").removeClass("active");
    $(this).parent(".testi-left-outer").addClass("active");
  });

  $(
    ".regions-sec .region-inner .region-bottom .region-left .region-left-outer a"
  ).click(function () {
    $(
      ".regions-sec .region-inner .region-bottom .region-left .region-left-outer a"
    ).removeClass("active");
    $(
      ".regions-sec .region-inner .region-bottom .region-left .region-left-outer"
    ).removeClass("active");
    $(this).parent(".region-left-outer").addClass("active");
  });

  var istogglmenu = true;
  /********Menu Toggle**********/
  $(".menu-toggle").click(function () {
    $(".main-menu").fadeToggle();
    $(".outer-wrapper").toggleClass("body-fix");
    $("header").toggleClass("openmenu");
    var headHeight = $("header").height() + 50;
    $(".main-menu").css("padding-top", headHeight);
    if (istogglmenu == true) {
      scroll.stop();
      istogglmenu = false;
      console.log("i am true");
    } else {
      scroll.start();
      istogglmenu = true;
      console.log("i am here");
    }
  });
  //   if ($(window).width() < 768) {

  //       $("#cont-slider").lightSlider({
  //          item: 1,
  //          loop: true,
  //          keyPress: true,
  //          auto: true,
  //          pager: true,
  //          controls: true,
  //          slideMargin: 0,
  //       });
  //   }
  //   else if ($(window).width() > 767 && $(window).width() <= 991) {

  //       $("#cont-slider").lightSlider({
  //          item: 2,
  //          loop: true,
  //          keyPress: true,
  //          auto: true,
  //          pager: true,
  //          slideMargin: 20,
  //       });
  //   }
  //   else if ($(window).width() > 991 && $(window).width() <= 1279) {
  //       $("#cont-slider").lightSlider({
  //          item: 3,
  //          loop: true,
  //          keyPress: true,
  //          auto: true,
  //          pager: true,
  //          slideMargin: 20,
  //       });
  //   }
  //   else if ($(window).width() > 1279 && $(window).width() <= 1440) {

  //       $("#cont-slider").lightSlider({
  //          item: 4,
  //          loop: true,
  //          keyPress: true,
  //          auto: true,
  //          pager: true,
  //          slideMargin: 20,
  //       });
  //   }
  //   else if ($(window).width() > 1440) {

  //       $("#cont-slider").lightSlider({
  //          item: 4,
  //          loop: true,
  //          keyPress: true,
  //          auto: true,
  //          pager: true,
  //          slideMargin: 30,
  //       });

  //   }
});
