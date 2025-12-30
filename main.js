(function ($) {
  "use strict";

  new WOW().init();

  // ==================== BACKGROUND IMAGE ====================
  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({
        "background-image": "url(" + bgImgUrl + ")",
      });
    });
  }

  $(window).on("load", function () {
    dataBackgroundImage();
  });

  // ==================== SLIDERS ====================
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

  // ==================== HEADER TOGGLES ====================
  $(document).ready(function () {
    // Cart toggle
    $(".cart_link > a").on("click", function (e) {
      e.stopPropagation();
      $(".mini_cart").toggleClass("active");
      $(".dropdown_search, .wishlist_btn_active, .mega_menu, .product_item").removeClass(
        "active"
      );
    });

    $(".mini_cart_close > a").on("click", function (e) {
      e.stopPropagation();
      $(".mini_cart").removeClass("active");
    });

    // Search toggle
    $(".search_btn > a").on("click", function (e) {
      e.stopPropagation();
      $(".dropdown_search").toggleClass("active");
      $(".mini_cart, .wishlist_btn_active, .mega_menu, .product_item").removeClass(
        "active"
      );
    });

    // Wishlist toggle in header
    $(".wishlist_btn > a").on("click", function (e) {
      e.stopPropagation();
      $(".wishlist_btn_active").toggleClass("active");
      $(".mini_cart, .dropdown_search, .mega_menu, .product_item").removeClass(
        "active"
      );
    });

    // Mega menu toggle (if any)
    $(".mega_menu_parent > a").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $parent = $(this).siblings(".mega_menu");
      $(".mega_menu").not($parent).removeClass("active");
      $parent.toggleClass("active");
      $(".mini_cart, .dropdown_search, .wishlist_btn_active, .product_item").removeClass(
        "active"
      );
    });

    // ==================== PRODUCT CARD TOGGLE ====================
    $(".product_item").on("click", function (e) {
      e.stopPropagation();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(".product_item").removeClass("active"); // hide others
        $(this).addClass("active");
      }
    });

    // Click outside closes all toggles
    $(document).on("click", function () {
      $(".mini_cart, .dropdown_search, .wishlist_btn_active, .mega_menu, .product_item").removeClass(
        "active"
      );
    });

    // Prevent product action buttons from closing toggle
    $(".product_item .wishlist, .product_item .compare, .product_item .add_to_cart, .product_item .quick_view").on(
      "click",
      function (e) {
        e.stopPropagation();
      }
    );
  });

  // ==================== RESET ON BACK/FORWARD ====================
  window.addEventListener("pageshow", function () {
    $(".mini_cart, .dropdown_search, .wishlist_btn_active, .mega_menu, .product_item").removeClass(
      "active"
    );
    $(".product_item img").css("transform", "scale(1)");
  });
})(jQuery);