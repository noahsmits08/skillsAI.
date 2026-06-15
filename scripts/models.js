// ════════════════════════════════════════════
//  MODELS CATALOG PAGE
// ════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {

    // ── 1. AUTOMATICALLY ADD PLACEHOLDER IMAGES TO ALL CAR CARDS ──
    const modelCards = document.querySelectorAll('.model-card');

    modelCards.forEach(card => {
        const titleElement = card.querySelector('h3');
        if (!titleElement) return;

        const carName = titleElement.textContent.trim();

        // This generates a secure, styled box containing the car's title text automatically
        // Format: https://placehold.co/WIDTHxHEIGHT/BACKGROUND_COLOR/TEXT_COLOR?text=YOUR+TEXT
        const fallbackBoxUrl = `https://placehold.co/600x400/161616/8c8c8c?text=${encodeURIComponent(carName)}`;

        // Check if an image wrapper already exists, if not, create one at the top of the card
        let imgWrapper = card.querySelector('.card-image-wrapper');
        if (!imgWrapper) {
            imgWrapper = document.createElement('div');
            imgWrapper.className = 'card-image-wrapper';
            card.prepend(imgWrapper); // Places the frame at the top of the card
        }

        // Inject the bulletproof placeholder image
        imgWrapper.innerHTML = `<img src="${fallbackBoxUrl}" alt="${carName}" class="catalog-car-img" loading="lazy">`;
    });

    // ── 2. YOUR ORIGINAL FILTER LOGIC (UNCHANGED) ──
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.model-category');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            categories.forEach(cat => {
                if (filter === 'all' || cat.getAttribute('data-category') === filter) {
                    cat.classList.remove('hidden');
                } else {
                    cat.classList.add('hidden');
                }
            });
        });
    });

    // ── 3. YOUR ORIGINAL CLICKABLE CARDS LOGIC (UNCHANGED) ──
    const cards = document.querySelectorAll('.model-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            if (id) {
                window.location.href = `model.html?id=${id}`;
            }
        });
    });
});