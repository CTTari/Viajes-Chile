//Smooth scrolling para secciones de la página
$(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        window.location.hash = hash;
      });
    }
  });
});

//Tooltips habilitados para toda la página
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
