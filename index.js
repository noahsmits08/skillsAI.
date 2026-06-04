// ── Hero scroll blur (only runs if hero exists on the page) ──
const heroContent = document.querySelector('.hero-content');
const heroImages = document.querySelector('.hero-images');

if (heroContent && heroImages) {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const heroHeight = hero.offsetHeight;
        const scrollY = window.scrollY;

        // Only start blurring in the last 300px of the hero
        const blurStart = heroHeight - 300;
        const blurRange = 300;

        const progress = Math.max(0, Math.min((scrollY - blurStart) / blurRange, 1));

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