$(document).ready(
  function () {
    $(".about-section").waypoint(
      function (direction) {
        if (direction == "down") {
          $("nav").addClass("sticky");
        } else $("nav").removeClass("sticky");
      },
      {
        offset: "500px",
      }
    );
  },
  function () {
    alert("Welcome To Website Landing");
  }
);

$('a[href^="#"]').click(function () {
  var the_id = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(the_id).offset().top,
    },
    "slow"
  );

  return false;
});

$(".mobile-nav").click(function () {
  $(".main-nav").slideToggle(200);
  if ($(".mobile-nav").hasClass("fa-bars")) {
    $(".mobile-nav").addClass("fa-times");
    $(".mobile-nav").removeClass("fa-bars");
  } else {
    $(".mobile-nav").addClass("fa-bars");
    $(".mobile-nav").removeClass("fa-times");
  }
});
