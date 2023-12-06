$(function() {
  // Toggle fixed button visibility
  const footer = document.querySelector('.footer');
  const fixedButton = document.getElementById('whatsapp-button');

  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fixedButton.style.opacity = 0;
      } else {
        fixedButton.style.opacity = 1;
      }
    });
  };

  const observer = new IntersectionObserver(callback);
  observer.observe(footer);

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
  sr.reveal('.services', { viewFactor: 0 });
  sr.reveal('.team__content');
  sr.reveal('.about__content', { viewFactor: 0.2 });
  sr.reveal('.about__2 .wrapper', { delay:250, interval: 500  });
  sr.reveal('.contact', { viewFactor: 0.1 });
  sr.reveal('.team_member__header');
  sr.reveal('.team_member__description', { viewFactor: 0 });
});
