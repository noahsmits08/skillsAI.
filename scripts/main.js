// ── Second-to-last Section (Brands) Dynamic Scroll Blur ──
const targetSection = document.querySelector('.brands-section');
const targetInner = document.querySelector('.brands-inner');

if (targetSection && targetInner) {
    // Add performance and smooth transition optimizations dynamically
    targetInner.style.transition = 'filter 0.1s ease-out, opacity 0.1s ease-out, transform 0.1s ease-out';
    targetInner.style.willChange = 'filter, opacity, transform';

    window.addEventListener('scroll', () => {
        const rect = targetSection.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        // Calculate the center point of the section relative to the viewport
        const sectionCenter = rect.top + (rect.height / 2);
        const screenCenter = viewHeight / 2;

        // How far away is the section center from the screen center?
        const distanceFromCenter = Math.abs(sectionCenter - screenCenter);

        // Define the window of focus (e.g., within 400px of center, it looks normal)
        const totalRange = viewHeight * 0.8; // Maximum boundary for effect to start

        // Calculate progress: 0 when perfectly centered, 1 when completely off-screen
        let progress = Math.max(0, Math.min(distanceFromCenter / (totalRange / 2), 1));

        // Invert it so it is crisp in the center, and blurs as it leaves the center zone
        // If you want it to ONLY blur when leaving the top, remove "Math.abs" logic.
        const blur = progress * 12; // Maximum blur intensity
        const opacity = 1 - (progress * 0.8); // Drop down to 20% visibility at max distance
        const translateY = (sectionCenter > screenCenter ? 1 : -1) * (progress * 30);

        // Apply styles dynamically
        targetInner.style.filter = `blur(${blur}px)`;
        targetInner.style.opacity = opacity;
        targetInner.style.transform = `translateY(${translateY}px)`;
    });
}