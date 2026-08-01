document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const accordion = document.querySelector('[data-accordion]');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (accordion) {
    const items = accordion.querySelectorAll('.accordion__item');
    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        const panel = item.nextElementSibling;
        const expanded = item.getAttribute('aria-expanded') === 'true';

        items.forEach(other => {
          other.setAttribute('aria-expanded', 'false');
          const otherPanel = other.nextElementSibling;
          if (otherPanel) otherPanel.hidden = true;
          const icon = other.querySelector('.accordion__icon');
          if (icon) icon.textContent = '+';
        });

        if (!expanded && panel) {
          item.setAttribute('aria-expanded', 'true');
          panel.hidden = false;
          const icon = item.querySelector('.accordion__icon');
          if (icon) icon.textContent = '–';
        }
      });

      if (index === 0) {
        item.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
