// Coge todos los links con "#"
jQuery('a[href*="#"]')
  // Elimina los links para que no se actualice la pagina
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Guarda el elemento para hacer scroll
      var target = $(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Si existe el ancla
      if (target.length) {
        // Animación
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top-120 //Ajusta el alto al que se queda la animación
        }, 1000, function() {
          // Debe cambiar el focus
          var $target = jQuery(target);
          $target.focus();
          if ($target.is(":focus")) { // Comprueba si el elemento esta en focus
            return false;
          } else {
            $target.attr('tabindex','-1'); // Añade tabindex a los elementos que no son focus
            $target.focus(); // Establece focus nuevo
          };
        });
      }
    }
  });