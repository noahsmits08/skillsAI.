// ── Active nav link ──
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// ── Hero scroll blur (only runs if hero exists on the page) ──
const heroContent = document.querySelector('.hero-content');
const heroImages = document.querySelector('.hero-images');

if (heroContent && heroImages) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = 400;
        const progress = Math.min(scrollY / maxScroll, 1);

        const blur = progress * 12;
        const opacity = 1 - progress;
        const translateY = progress * -40;

        heroContent.style.filter = `blur(${blur}px)`;
        heroContent.style.opacity = opacity;
        heroContent.style.transform = `translateY(${translateY}px)`;

        heroImages.style.filter = `blur(${blur}px)`;
        heroImages.style.opacity = opacity;
        heroImages.style.transform = `translateY(${translateY}px)`;
    });
}