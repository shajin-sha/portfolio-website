(function ($) {
  let width = screen.width;
  $("body").toggleClass("dark-mode");

  // Scroll a bit down
  $(window).on("load", function () {
    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $("#about").offset().top - 10,
        },
        1000
      );
    }, 100);  
  });

  ("use strict");

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  // $(".navbar").headroom();

  // // PROJECT CAROUSEL
  if (width < 740) {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
    });
  } else {
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 0,
    });
  }

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);
