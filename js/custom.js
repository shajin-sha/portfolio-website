(function ($) {
  let width = screen.width;

  ("use strict");

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  if (width < 740) {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
    });
  } else {
    $(".owl-carousel").owlCarousel({
      items: 2,
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
