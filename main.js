(function ($) {
  "use strict";

  new WOW().init();

  // ==================== NAVBAR CART ====================
  $(".cart_link > a").on("click", function (e) {
    e.stopPropagation();
    $(".mini_cart").toggleClass("active");
  });

  $(".mini_cart_close > a").on("click", function (e) {
    e.stopPropagation();
    $(".mini_cart").removeClass("active");
  });

  // ==================== SEARCH TOGGLE ====================
  $(".search_btn > a").on("click", function (e) {
    e.stopPropagation();
    $(".dropdown_search").toggleClass("active");
  });

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

  // ==================== PRODUCT CARD TOGGLE ====================
  $(document).ready(function () {
    $(".product_item").on("click", function (e) {
      e.stopPropagation();

      var $this = $(this);
      if ($this.hasClass("active")) {
        $this.removeClass("active");
      } else {
        $(".product_item").removeClass("active");
        $this.addClass("active");
      }
    });

    // Click outside: hide all toggles
    $(document).on("click", function () {
      $(".product_item, .mini_cart, .dropdown_search, .mega_menu, .submenu").removeClass(
        "active"
      );
    });

    // Prevent clicks inside buttons from closing the card
    $(".product_thumb a").on("click", function (e) {
      e.stopPropagation();
    });

    // Wishlist, Compare, Add to Cart, Quick View click simulation
    $(".wishlist").on("click", function () {
      alert("Wishlist clicked!");
    });
    $(".compare").on("click", function () {
      alert("Compare clicked!");
    });
    $(".add_to_cart").on("click", function () {
      alert("Added to Cart!");
    });
    $(".quick_view").on("click", function () {
      $("#quickview_modal").modal("show");
    });
  });

  // ==================== RESET ON BACK/FORWARD ====================
  window.addEventListener("pageshow", function () {
    $(".mini_cart, .product_item, .dropdown_search, .mega_menu, .submenu").removeClass(
      "active"
    );
    $(".product_item img").css("transform", "scale(1)");
  });
})(jQuery);