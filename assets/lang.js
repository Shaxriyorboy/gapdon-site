// Language switcher: shows one [data-lang] block at a time, remembers the choice.
(function () {
  var KEY = 'gapdon_site_lang';
  var SUPPORTED = ['en', 'uz', 'ru'];

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('on', el.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.langs button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.set === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
  }

  var saved;
  try { saved = localStorage.getItem(KEY); } catch (e) { saved = null; }
  apply(saved || (navigator.language || 'en').slice(0, 2).toLowerCase());

  document.querySelectorAll('.langs button').forEach(function (btn) {
    btn.addEventListener('click', function () { apply(btn.dataset.set); });
  });
})();
