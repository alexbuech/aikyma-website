// =======================================================
// SHARED JS — Mobile menu close behavior
// =======================================================
(function () {
  'use strict';

  // Auto-close mobile menu when any link or CTA inside it is clicked
  var toggle = document.getElementById('nav-toggle');
  if (!toggle) return;

  var menu = document.querySelector('.nav-mobile-menu');
  if (!menu) return;

  // Close menu on any clickable element inside
  menu.addEventListener('click', function (e) {
    var clickable = e.target.closest('a');
    if (clickable) {
      // Slight delay so the click action (navigation, Cal popup) registers first
      setTimeout(function () { toggle.checked = false; }, 50);
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.checked) {
      toggle.checked = false;
    }
  });
})();
