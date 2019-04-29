function scrollTo() {
  const navHeight = $('nav').outerHeight();
  $(".header-button").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $(".about").offset().top
      }, 1500);
  });
}

$(scrollTo())
