(function ($) {
  "use strict";

  /* ================= WOW ================= */
  new WOW().init();

  /* ================= HELPER ================= */
  function closeAll() {
    $(".mini_cart").removeClass("active");
    $(".dropdown_search").removeClass("active");
    $(".product_item").removeClass("active");
    $(".mega_menu, .submenu").removeClass("active");
  }

  /* ================= CART ================= */
  $(".cart_link > a").on("click", function (e) {
    e.stopPropagation();
    closeAll();
    $(".mini_cart").toggleClass("active");
  });

  $(".mini_cart").on("click", function (e) {
    e.stopPropagation();
  });

  $(".mini_cart_close a").on("click", function () {
    $(".mini_cart").removeClass("active");
  });

  /* ================= SEARCH ================= */
  $(".search_btn > a").on("click", function (e) {
    e.stopPropagation();
    closeAll();
    $(this).siblings(".dropdown_search").toggleClass("active");
  });

  $(".dropdown_search").on("click", function (e) {
    e.stopPropagation();
  });

  /* ================= PRODUCT CARD TOGGLE ================= */
  $(".product_item").on("click", function (e) {
    // allow toggle only when clicking card itself
    if ($(e.target).closest(".wishlist, .compare, .add_to_cart, .quick_view").length) {
      return;
    }

    e.stopPropagation();

    const $this = $(this);

    if ($this.hasClass("active")) {
      $this.removeClass("active");
    } else {
      $(".product_item").removeClass("active");
      $this.addClass("active");
    }
  });

  /* Keep product active when clicking buttons */
  $(".wishlist, .compare, .add_to_cart, .quick_view").on("click", function (e) {
    e.stopPropagation();
  });

  /* ================= GLOBAL OUTSIDE CLICK ================= */
  $(document).on("click", function () {
    closeAll();
  });

  /* ================= SLIDERS (UNCHANGED) ================= */
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
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
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  /* ================= TOOLTIP ================= */
  $('[data-toggle="tooltip"]').tooltip();

})(jQuery);