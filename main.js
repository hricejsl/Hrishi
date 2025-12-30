(function ($) {
  "use strict";

  new WOW().init();

  // ==================== BACKGROUND IMAGE ====================
  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({ "background-image": "url(" + bgImgUrl + ")" });
    });
  }
  $(window).on("load", function () { dataBackgroundImage(); });

  // ==================== NAVBAR CART TOGGLE ====================
  $(".cart_link > a").on("click", function (e) {
    e.stopPropagation();
    $(".mini_cart").toggleClass("active");
  });

  $(".mini_cart_close > a").on("click", function () {
    $(".mini_cart").removeClass("active");
  });

  // ==================== SEARCH TOGGLE ====================
  $(".search_toggle").on("click", function (e) {
    e.stopPropagation();
    $(".search_box").toggleClass("active");
  });

  // ==================== MEGA MENU & SUBMENU TOGGLE ====================
  $(".mega_menu > li > a").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);
    $this.parent().siblings().find("a").removeClass("active");
    $this.toggleClass("active");
  });

  $(".submenu_toggle").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("active");
    $(this).siblings(".submenu").slideToggle(200);
  });

  // ==================== PRODUCT BUTTONS TOGGLE ====================
  $(document).on("click", ".product_item", function (e) {
    e.stopPropagation();
    var $card = $(this);
    $card.toggleClass("active");
  });

  // Prevent buttons inside product from closing the toggle
  $(document).on("click", ".product_item .wishlist, .product_item .compare, .product_item .add_to_cart, .product_item .quick_view", function (e) {
    e.stopPropagation();
  });

  // ==================== CLICK OUTSIDE HANDLER ====================
  $(document).on("click", function () {
    // Hide mega menu / submenu / search / mini cart on outside click
    $(".mega_menu > li > a.active, .submenu_toggle.active, .search_box.active, .mini_cart.active").removeClass("active");
    $(".submenu").slideUp(200);
    // Product buttons remain controlled by hover + click toggle
  });

  // ==================== SLIDERS / CAROUSEL ====================
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
  });

  $(".product_column3, .product_row1").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    rows: 2,
    prevArrow: '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
    responsive: [
      { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    ],
  });

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
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
  });

  $(".product_navactive").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: ['<i class="ion-chevron-left arrow-left"></i>', '<i class="ion-chevron-right arrow-right"></i>'],
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 250: { items: 2 }, 480: { items: 3 }, 768: { items: 4 } },
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

  // ==================== BACK/FORWARD RESET ====================
  window.addEventListener("pageshow", function () {
    $(".mini_cart, .mega_menu > li > a, .submenu_toggle, .search_box").removeClass("active");
    $(".submenu").slideUp(0);
    $(".product_thumb img").css("transform", "");
    $(".product_item").removeClass("active");
  });

})(jQuery);