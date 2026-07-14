// FISH HWB — ambient particles + scroll depth gauge
(function () {
  // ambient bioluminescent particles
  var field = document.querySelector('.particles');
  if (field) {
    var count = window.innerWidth < 700 ? 10 : 22;
    for (var i = 0; i < count; i++) {
      var dot = document.createElement('span');
      dot.style.left = Math.random() * 100 + 'vw';
      dot.style.animationDuration = (14 + Math.random() * 16) + 's';
      dot.style.animationDelay = (Math.random() * 20) + 's';
      dot.style.opacity = (0.25 + Math.random() * 0.4).toFixed(2);
      field.appendChild(dot);
    }
  }

  // depth gauge tracks scroll position down the page
  var marker = document.querySelector('.depth-gauge .marker');
  var label = document.querySelector('.depth-gauge .label');
  var rail = document.querySelector('.depth-gauge .rail');
  if (marker && rail) {
    var zones = [
      { at: 0, name: 'SURFACE \u00B7 0M' },
      { at: 0.25, name: 'TWILIGHT ZONE \u00B7 -200M' },
      { at: 0.55, name: 'MIDNIGHT ZONE \u00B7 -1000M' },
      { at: 0.85, name: 'THE ABYSS \u00B7 -4000M' }
    ];
    var railHeight = rail.offsetHeight;

    function update() {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress = Math.max(0, Math.min(1, progress));
      marker.style.top = (progress * railHeight) + 'px';

      var current = zones[0].name;
      for (var i = 0; i < zones.length; i++) {
        if (progress >= zones[i].at) current = zones[i].name;
      }
      if (label) label.textContent = current;
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', function () {
      railHeight = rail.offsetHeight;
      update();
    });
    update();
  }

  // reveal sections/cards as they enter the viewport
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && !reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
