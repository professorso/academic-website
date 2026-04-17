// scroll-inversion.js — Intersection Observer for section theme transitions + navbar adaptation

(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Reset stale classes that may have been carried over by a view
  // transition from the previous page. Defaults the navbar back to its
  // base dark state until an observed section decides otherwise.
  navbar.classList.remove('navbar--on-light', 'navbar--on-dark');

  // Observe both interior `.section` blocks and the subpage `.page-header`
  // (which sits at the top on non-home pages). Skip the homepage hero so
  // the navbar stays dark over the hero image instead of flashing to
  // light on initial load.
  const sections = document.querySelectorAll(
    '.section[data-theme]:not(.hero), .page-header[data-theme]'
  );
  if (!sections.length) return;

  // Track which section is most visible behind the navbar
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const theme = entry.target.getAttribute('data-theme');
        if (!theme) return;

        // Update navbar appearance based on section behind it
        if (theme === 'dark') {
          navbar.classList.add('navbar--on-dark');
          navbar.classList.remove('navbar--on-light');
        } else {
          navbar.classList.add('navbar--on-light');
          navbar.classList.remove('navbar--on-dark');
        }
      });
    },
    {
      // Observe when sections cross the top of the viewport (where the navbar is)
      rootMargin: '-1px 0px -95% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  // Add entrance animations for sections
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section--visible');
        }
      });
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    section.classList.add('section--animate');
    sectionObserver.observe(section);
  });
})();
