const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.site-menu');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-contents');
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

menuToggle?.addEventListener('click', () => {
    const isOpen = siteMenu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

siteMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        siteMenu.classList.remove('is-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
        menuToggle?.setAttribute('aria-label', 'Open menu');
    });
});

tabLinks.forEach((link) => {
    link.addEventListener('click', () => {
        tabLinks.forEach((tab) => {
            const active = tab === link;
            tab.classList.toggle('active-link', active);
            tab.setAttribute('aria-selected', String(active));
        });
        tabContents.forEach((content) => {
            content.classList.toggle('active-tab', content.id === link.dataset.tab);
        });
    });
});

contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    formStatus.textContent = `Thanks, ${name}. Your message is ready to send.`;
    contactForm.reset();
});