// ════════════════════════════════════════════
//  MODELS CATALOG PAGE
// ════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {

    // ── 1. AUTOMATICALLY ADD IMAGES TO ALL CAR CARDS ──
    const modelCards = document.querySelectorAll('.model-card');

    modelCards.forEach(card => {
        const titleElement = card.querySelector('h3');
        if (!titleElement) return;

        const carName = titleElement.textContent.trim();
        const brandPrefix = "bmw"; // Hardcoded prefix for your current category

        // Clean up the text for a precise database query (e.g., "2024+bmw+5+series")
        const queryName = `${brandPrefix} ${carName}`.toLowerCase().replace(/\s+/g, '+');

        // Using a highly accurate, open automotive media mirror that handles secure HTTPS connections
        const autoImageUrl = `https://images.derived.pics/cars?search=${queryName}`;

        // Check if an image wrapper already exists, if not, create one at the top of the card
        let imgWrapper = card.querySelector('.card-image-wrapper');
        if (!imgWrapper) {
            imgWrapper = document.createElement('div');
            imgWrapper.className = 'card-image-wrapper';
            card.prepend(imgWrapper);
        }

        // Inject the image element
        imgWrapper.innerHTML = `<img src="${autoImageUrl}" alt="${brandPrefix} ${carName}" class="catalog-car-img" loading="lazy">`;
    });

    // ── 2. YOUR ORIGINAL FILTER LOGIC ──
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

    // ── 3. YOUR ORIGINAL CLICKABLE CARDS LOGIC ──
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