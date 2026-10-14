(function () {
  var c = document.querySelector('.carousel');
  if (!c) return;
  var s = c.querySelector('.slides'),
      dots = c.querySelectorAll('.dots button'),
      status = c.querySelector('.sr'),
      n = dots.length,
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function idx() { return Math.round(s.scrollLeft / s.clientWidth); }
  function go(i) {
    s.scrollTo({ left: ((i + n) % n) * s.clientWidth, behavior: reduce.matches ? 'auto' : 'smooth' });
  }
  function mark() {
    var i = idx();
    dots.forEach(function (d, k) {
      if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
    });
    status.textContent = 'image ' + (i + 1) + ' of ' + n;
  }

  c.querySelector('.prev').addEventListener('click', function () { go(idx() - 1); });
  c.querySelector('.next').addEventListener('click', function () { go(idx() + 1); });
  dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
  c.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { go(idx() - 1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { go(idx() + 1); e.preventDefault(); }
  });
  s.addEventListener('scroll', mark);
  window.addEventListener('resize', mark);
})();
