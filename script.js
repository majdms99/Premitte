$(document).ready(function () {
  console.log("hi");
  $(".slider-item").slick({
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '<i class="fas fa-arrow-circle-right slick-next"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left slick-prev"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".icone-toggel i").click(function () {
    $(".menu-responsive ").addClass("active-menu ");
  });
  $(".icone-close ").click(function () {
    $(".menu-responsive ").removeClass("active-menu ");
  });
});
