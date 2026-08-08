const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.site-menu');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-contents');
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

const orbitCard = document.querySelector('.work-card-large');
if (orbitCard) {
    const orbitImage = orbitCard.querySelector('.work-image');
    orbitImage.innerHTML = '<a class="preview-link" href="https://code-orbit-three.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Open Code Orbit project"><img src="images/Orbit.png" alt="Code Orbit workspace dashboard preview"></a><span class="work-index">01 / Featured</span>';
    orbitCard.querySelector('.work-meta > a')?.remove();
}

const apexCard = document.querySelector('.work-card:nth-child(2)');
if (apexCard) {
    apexCard.classList.add('apex-card');
    const apexImage = apexCard.querySelector('.work-image');
    apexImage.innerHTML = '<img src="images/Apex.png" alt="Apex Studio product design portfolio preview"><span class="work-index">02 / New</span>';
    apexCard.querySelector('.project-type').textContent = 'Product design · Development';
    apexCard.querySelector('h3').textContent = 'Apex Studio';
    const apexLink = apexCard.querySelector('.work-meta > a');
    apexLink.href = 'https://nova-stack-psi.vercel.app/';
    apexLink.setAttribute('aria-label', 'View Apex Studio project');
}

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