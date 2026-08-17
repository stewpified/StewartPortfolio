// Mobile sidebar toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.topbar__toggle');
  const sidebar = document.querySelector('.sidebar');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close sidebar when a nav link is clicked (mobile)
    sidebar.querySelectorAll('.sidebar__link').forEach((link) => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Work page: filter cards by tag
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card[data-tags]');

  if (filterButtons.length && cards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filter = btn.dataset.filter;
        cards.forEach((card) => {
          const tags = card.dataset.tags.split(',');
          const show = filter === 'all' || tags.includes(filter);
          card.closest('.card-wrap').style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Image carousels (Behind the Scenes / Gameplay, etc.)
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const slides = carousel.querySelectorAll('.carousel__slide');
    if (!slides.length) return; // empty-state carousel, nothing to wire up

    const dotsContainer = carousel.querySelector('[data-carousel-dots]');
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    let current = 0;

    // build dots to match slide count
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Go to image ${i + 1}`);
        if (i === 0) dot.classList.add('is-active');
        dot.addEventListener('click', () => show(i));
        dotsContainer.appendChild(dot);
      });
    }

    function show(index) {
      slides[current].classList.remove('is-active');
      if (dotsContainer) dotsContainer.children[current].classList.remove('is-active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      if (dotsContainer) dotsContainer.children[current].classList.add('is-active');
    }

    if (prevBtn) prevBtn.addEventListener('click', () => show(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => show(current + 1));
  });
});
