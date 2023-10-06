$(function() {

  // Toggle sticky button visibility
  const introHeight = document.querySelector('.contact').offsetTop;
  const $ws = $('#whatsapp-button');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $ws.css('opacity', 0);
      } else {
        $ws.css('opacity', 1);
      }
    },
    false
  );

  // Toggle mobile menu
  var $toggleButton = $('#toggle');
  var $overlay = $('#overlay');

  $toggleButton.click(function() {
    $toggleButton.toggleClass('active');
    $overlay.toggleClass('open');
  });

  $overlay.click(function() {
    $toggleButton.removeClass('active');
    $overlay.removeClass('open');
  });

  // ScrollReveal
  window.sr = ScrollReveal({
    reset: false,
    duration: 800,
    origin: 'bottom',
    distance: '2%',
    opacity: 0,
    easing: 'cubic-bezier(.694,0,.335,1)',
    viewFactor: 0.3,
  });
  sr.reveal('.hero', { distance: 0 });
  sr.reveal('.services', { viewFactor: 0.1 });
  sr.reveal('.team__content');
  sr.reveal('.about', { viewFactor: 0.2 });
  sr.reveal('.contact', { viewFactor: 0.1 });
});
