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
});
