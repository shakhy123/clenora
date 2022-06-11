"use strict";

(function ($) {
  "use strict";
  /* ----------------------------------------------------------- */

  /*  Testimonial SLider
  /* ----------------------------------------------------------- */

  $('.testimonials-slides').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    autoplayHoverPause: true,
    autoplay: false,
    autoplayTimeout: 6000,
    responsiveClass: true,
    navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1,
        dots: true,
        nav: false
      },
      768: {
        items: 1,
        dots: true,
        nav: false
      },
      1000: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });
  /* ----------------------------------------------------------- */

  /*  Portfolio single sLider
  /* ----------------------------------------------------------- */

  $('.portfolio-single-gallery').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    autoplayHoverPause: true,
    autoplay: false,
    autoplayTimeout: 6000,
    responsiveClass: true,
    navText: ["<i class='icofont-thin-left'></i><span>prev</span> ", "<i class='icofont-thin-right'></i> "],
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false
      },
      576: {
        items: 1,
        dots: true,
        nav: false
      },
      768: {
        items: 1,
        dots: true,
        nav: false
      },
      1000: {
        items: 1,
        dots: true,
        nav: false
      },
      1200: {
        items: 1
      }
    }
  });
  $('.portfolio-gallery').owlCarousel({
    loop: true,
    dots: true,
    nav: true,
    autoplayHoverPause: true,
    autoplay: false,
    autoplayTimeout: 6000,
    responsiveClass: true,
    navText: ["<i class='icofont-simple-left'></i>", "<i class='icofont-simple-right'></i>"],
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false
      },
      576: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });
  /* ---------------------------------------------
        FAQ COllapse
  --------------------------------------------- */

  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find(".icofont-thin-down").removeClass("icofont-thin-down").addClass("icofont-close-line");
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find(".icofont-close-line").removeClass("icofont-close-line").addClass("icofont-thin-down");
  });
  /* ---------------------------------------------
          Projects filtering
  --------------------------------------------- */

  var $portfolio = $('.portfolio-filter-wrap');

  if ($.fn.imagesLoaded && $portfolio.length > 0) {
    imagesLoaded($portfolio, function () {
      $portfolio.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.portfolio-item',
        filter: '*'
      });
      $(window).trigger("resize");
    });
  }

  $('.portfolio-filter').on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $portfolio.isotope({
      filter: filterValue
    });
  });
  /* ----------------------------------------------------------- */

  /*  Map
  /* ----------------------------------------------------------- */

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(50.97797382271958, -114.107718560791) // styles: style_array_here

    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }

  var google_map_canvas = $('#map-canvas');

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }
  /* ---------------------------------------------
         Contact Form
  --------------------------------------------- */


  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data; // Success function

  function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val('');
  } // fail function


  function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-success');
    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }

  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form_data
    }).done(done_func).fail(fail_func);
  });
})(jQuery);