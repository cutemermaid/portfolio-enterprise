$(document).ready(function() {
  $(".main").height($(window).height());
});

$(".menu").click(function() {
  $(".menu-items-wrapper")
    .css("display", "flex")
    .addClass("slideInDown animated");
});

$(".cross").click(function() {
  $(".menu-items-wrapper").addClass("slideOutUp animated");
  window.setTimeout(function() {
    $(".menu-items-wrapper")
      .removeAttr("style")
      .removeClass("slideInDown slideOutUp animated");
  }, 1000);
});

// $(".card").hover(function() {
//   $(".card-logo").slideUp(1000);
// });
window.addEventListener("scroll", function(t) {
  var e = window.pageYOffset,
    t = document.getElementById("company-wave").getBoundingClientRect(),
    i = t.top + t.height + 200,
    r = 70 - Math.min(23, (e / i) * 23);
  document.getElementById("company-wave").style.backgroundPositionY = r + "%";
});

$(".dots img").click(function() {
  $(".dots img").removeClass("active");
  $(this).addClass("active");
  $(".carosal-slide")
    .removeClass("fadeIn")
    .addClass("fadeOut animated");
  setTimeout(
    $.proxy(function() {
      $(".carosal-slide").hide();
      $("#" + $(this).attr("data-id"))
        .removeClass("fadeOut")
        .addClass("fadeIn animated")
        .show();
    }, this),
    500
  );
});
var slideIndex = 0;
slide();
function slide() {
  var slides = $(".carosal-slide");

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 0;
  }

  $(".dots")
    .find("img:eq(" + slideIndex + ")")
    .trigger("click");
  setTimeout(slide, 2000); // Change image every 2 seconds
}
// $(".dots").find("img:eq(1)").trigger("click");
