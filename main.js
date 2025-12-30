(function ($) {
  "use strict";

  new WOW().init();

  // ==================== NAVBAR CART TOGGLE ====================
  $(".cart_link > a").on("click", function (e) {
    e.stopPropagation();
    $(".mini_cart").toggleClass("active");
  });

  $(".mini_cart_close > a").on("click", function () {
    $(".mini_cart").removeClass("active");
  });

  // ==================== BACKGROUND IMAGE ====================
  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({ "background-image": "url(" + bgImgUrl + ")" });
    });
  }

  $(window).on("load", function () {
    dataBackgroundImage();
  });

  // ==================== SLIDER CAROUSEL ====================
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
  });

  // ==================== PRODUCT SLIDERS ====================
  $(".product_column3, .product_row1").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    rows: 2,
    prevArrow:
      '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
    responsive: [
      { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    ],
  });

  // ==================== BLOG CAROUSEL ====================
  $(".blog_column3").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 5000,
    items: 3,
    dots: false,
    margin: 30,
    navText: [
      '<i class="ion-chevron-left"></i>',
      '<i class="ion-chevron-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // ==================== PRODUCT NAV ACTIVE ====================
  $(".product_navactive").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="ion-chevron-left arrow-left"></i>',
      '<i class="ion-chevron-right arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      250: { items: 2 },
      480: { items: 3 },
      768: { items: 4 },
    },
  });

  $(".modal").on("shown.bs.modal", function () {
    $(".product_navactive").resize();
  });

  $(".product_navactive a").on("click", function (e) {
    e.preventDefault();
    var $href = $(this).attr("href");
    $(".product_navactive a").removeClass("active");
    $(this).addClass("active");
    $(".product-details-large .tab-pane").removeClass("active show");
    $(".product-details-large " + $href).addClass("active show");
  });

  // ==================== TOOLTIP ====================
  $('[data-toggle="tooltip"]').tooltip();
  $(".action_links ul li a, .quick_button a").tooltip({
    animated: "fade",
    placement: "top",
    container: "body",
  });

  // ==================== BOSS PRO: UNIVERSAL TOGGLE ====================
  $(document).ready(function () {
    // Use event delegation for all toggle points
    $(document).on("click", ".product_item, .mega_menu > li > a, .submenu_toggle", function (e) {
      e.stopPropagation();
      $(this).toggleClass("active");
    });

    // Hide elements on clicking outside where needed
    $(document).on("click", function () {
      // Only hide elements that should hide on outside click
      $(".mega_menu > li > a.active, .submenu_toggle.active").removeClass("active");
      // Product_item buttons remain hover controlled, don't force hide
    });
  });

  // ==================== BOSS PRO: RESET ON BACK/FORWARD ====================
  window.addEventListener("pageshow", function () {
    $(".mini_cart, .mega_menu > li > a, .submenu_toggle").removeClass("active");
    $(".product_thumb img").css("transform", ""); // reset zoom for hover
    $(".product_item").removeClass("active"); // reset click toggle
  });

})(jQuery);