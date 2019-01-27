(function ($) {
  Drupal.behaviors.craft_central = {
    attach: function (context, settings) {
      $('.menu-toggle, .menu-close').on('click', function () {
        $('#main-nav').toggleClass('active');
        console.log('active');
      });

      $('.side-nav').on('click', function (e) {
        if (e.offsetX > $(e.target).outerWidth()) {
          $(e.target).toggleClass('active');
          console.log('active');
        }
      });
    }
  };
}(jQuery));
