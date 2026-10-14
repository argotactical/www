(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open);
      nav.classList.toggle('open', open);
    });
  }

  // events: move any event whose end date has passed into the "past" group
  var up = document.getElementById('upcoming-events'), past = document.getElementById('past-events');
  if (up && past) {
    var today = new Date().toISOString().slice(0, 10);
    Array.prototype.slice.call(up.querySelectorAll('.event[data-end]')).forEach(function (e) {
      if (e.getAttribute('data-end') < today) {
        e.classList.add('past');
        past.insertBefore(e, past.firstChild);
      }
    });
    if (!up.children.length) {
      up.hidden = true;
      document.getElementById('upcoming-heading').hidden = true;
    }
  }
})();
