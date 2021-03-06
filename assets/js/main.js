
$(function () {
  dynamicBackground();
  tabs();
  countDown();
  slickInit();
  mainNav();
});

$.exists = function (selector) {
  return $(selector).length > 0;
};






function mainNav() {
  $(".cs_nav").append('<span class="cs_menu_toggle"><span></span></span>');
  $(".menu-item-has-children").append('<span class="cs_menu_dropdown_toggle"></span>');
  $(".cs_menu_toggle").on("click", function () {
    $(this)
      .toggleClass("cs_toggle_active")
      .siblings(".cs_nav_list")
      .slideToggle();
  });
  $(".cs_menu_dropdown_toggle").on("click", function () {
    $(this).toggleClass("active").siblings("ul").slideToggle();
    $(this).parent().toggleClass("active");
  });
}



















/*--------------------------------------------------------------
   #. Dynamic Background
 --------------------------------------------------------------*/
function dynamicBackground() {
  $("[data-src]").each(function () {
    var src = $(this).attr("data-src");
    $(this).css({
      "background-image": "url(" + src + ")",
    });
  });
}

/*--------------------------------------------------------------
  #. Slick Slider
--------------------------------------------------------------*/
// $('.cs_slider_wrapper').slick({
//   autoplay: true,
//   autoplaySpeed: 10000,
//   infinite: true,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   dots:false,
//   prevArrow: "<i class='fa-solid fa-chevron-left'></i>",
//   nextArrow: "<i class='fa-solid fa-chevron-right'></i>"
// });

  /*--------------------------------------------------------------
    #. Tabs
  --------------------------------------------------------------*/
  function tabs() {
    $(".cs_tabs .cs_tab_links a").on("click", function (e) {
      const currentAttrValue = $(this).attr("href");
      $(".cs_tabs " + currentAttrValue)
        .fadeIn(400)
        .siblings()
        .hide();
      $(this).parents("li").addClass("active").siblings().removeClass("active");
      e.preventDefault();
    });
  }



function slickInit() {
  if ($.exists(".cs_slider")) {
    $(".cs_slider").each(function () {
      // Slick Variable
      var $ts = $(this).find(".cs_slider_container");
      var $slickActive = $(this).find(".cs_slider_wrapper");
      var $sliderNumber = $(this).siblings(".slider_number");

      // Auto Play
      var autoPlayVar = parseInt($ts.attr("data-autoplay"), 10);
      // Auto Play Time Out
      var autoplaySpdVar = 3000;
      if (autoPlayVar > 1) {
        autoplaySpdVar = autoPlayVar;
        autoPlayVar = 1;
      }
      // Slide Change Speed
      var speedVar = parseInt($ts.attr("data-speed"), 10);
      // Slider Loop
      var loopVar = Boolean(parseInt($ts.attr("data-loop"), 10));
      // Slider Center
      var centerVar = Boolean(parseInt($ts.attr("data-center"), 10));
      // Slider Center
      var variableWidthVar = Boolean(
        parseInt($ts.attr("data-variable-width"), 10)
      );
      // Pagination
      var paginaiton = $(this).children().hasClass("cs_pagination");
      // Slide Per View
      var slidesPerView = $ts.attr("data-slides-per-view");
      if (slidesPerView == 1) {
        slidesPerView = 1;
      }
      if (slidesPerView == "responsive") {
        var slidesPerView = parseInt($ts.attr("data-add-slides"), 10);
        var lgPoint = parseInt($ts.attr("data-lg-slides"), 10);
        var mdPoint = parseInt($ts.attr("data-md-slides"), 10);
        var smPoint = parseInt($ts.attr("data-sm-slides"), 10);
        var xsPoing = parseInt($ts.attr("data-xs-slides"), 10);
      }
      // Fade Slider
      var fadeVar = parseInt($($ts).attr("data-fade-slide"));
      fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

      // Slick Active Code
      $slickActive.slick({
        autoplay: autoPlayVar,
        dots: paginaiton,
        centerPadding: "0",
        speed: speedVar,
        infinite: loopVar,
        autoplaySpeed: autoplaySpdVar,
        centerMode: centerVar,
        fade: fadeVar,
        prevArrow: $(this).find(".cs_left_arrow"),
        nextArrow: $(this).find(".cs_right_arrow"),
        appendDots: $(this).find(".cs_pagination"),
        slidesToShow: slidesPerView,
        variableWidth: variableWidthVar,
        // slidesToScroll: slidesPerView,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: lgPoint,
              // slidesToScroll: lgPoint,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: mdPoint,
              // slidesToScroll: mdPoint,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: smPoint,
              // slidesToScroll: smPoint,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: xsPoing,
              // slidesToScroll: xsPoing,
            },
          },
        ],
      });
    });
  }
}


/*--------------------------------------------------------------
  19. CountDown
--------------------------------------------------------------*/
function countDown() {
  if ($.exists(".cs_countdown")) {
    $(".cs_countdown").each(function () {
      var _this = this;
      var el = $(_this).data("countdate");
      var countDownDate = new Date(el).getTime();
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $(_this).find(".cs_count_days").html(days);
        $(_this).find(".cs_count_hours").html(hours);
        $(_this).find(".cs_count_minutes").html(minutes);
        $(_this).find(".cs_count_seconds").html(seconds);

        if (distance < 0) {
          clearInterval(x);
          $(_this).html("<div class='cs_token_expired'>TOKEN EXPIRED<div>");
        }
      }, 1000);
    });
  }
}