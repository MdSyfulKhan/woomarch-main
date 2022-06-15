
$(function () {
  dynamicBackground();
});






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
$('.st_slider_wrapper').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  dots:false
});




function slickInit() {
  if ($.exists(".cs-slider")) {
    $(".cs-slider").each(function () {
      // Slick Variable
      var $ts = $(this).find(".cs-slider_container");
      var $slickActive = $(this).find(".cs-slider_wrapper");
      var $sliderNumber = $(this).siblings(".slider-number");

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
      var paginaiton = $(this).children().hasClass("cs-pagination");
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
        prevArrow: $(this).find(".cs-left_arrow"),
        nextArrow: $(this).find(".cs-right_arrow"),
        appendDots: $(this).find(".cs-pagination"),
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

  if ($.exists(".cs-slider_for")) {
    $(".cs-slider_for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".cs-slider_nav",
    });
    $(".cs-slider_nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".cs-slider_for",
      dots: false,
      prevArrow: false,
      nextArrow: false,
      focusOnSelect: true,
      vertical: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });
  }

  if ($.exists(".cs-slider_for_1")) {
    $(".cs-slider_for_1").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".cs-slider_nav_1",
    });
    $(".cs-slider_nav_1").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".cs-slider_for_1",
      dots: false,
      prevArrow: false,
      nextArrow: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });
  }
}


