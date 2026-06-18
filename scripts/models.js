// ════════════════════════════════════════════
//  MODELS CATALOG PAGE - VEHICLE DATABASE FIX
// ════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {

    // ── 1. AUTOMATICALLY ASSIGN VEHICLE IMAGES FROM CDN ──
    const modelCards = document.querySelectorAll('.model-card');

    modelCards.forEach(card => {
        const carId = card.getAttribute('data-id') || '';
        const titleElement = card.querySelector('h3');
        const carModel = titleElement ? titleElement.textContent.trim() : '';

        // Dynamically extract the brand name from the start of the data-id string
        let brandName = "car";
        const idParts = carId.split('-');
        if (idParts.length > 0 && idParts[0]) {
            brandName = idParts[0].toLowerCase(); // "bmw", "audi", "mercedes", etc.
        }

        // Clean up the model name for a precise database index search term
        const modelQuery = carModel.toLowerCase().replace(/\s+/g, '-');

        // This public endpoint directly takes standard automotive model names
        // and returns a matching clean asset profile view of that specific car type.
        const vehicleDbUrl = `https://cdn.imagin.studio/getCastImage?customer=carwow&make=${brandName}&modelFamily=${modelQuery}&angle=01`;

        // Check if an image wrapper already exists, if not, create one at the top of the card
        let imgWrapper = card.querySelector('.card-image-wrapper');
        if (!imgWrapper) {
            imgWrapper = document.createElement('div');
            imgWrapper.className = 'card-image-wrapper';
            card.prepend(imgWrapper);
        }

        // Inject the image tag with a safe fallback configuration if a model code doesn't exist yet
        imgWrapper.innerHTML = `
            <img src="${vehicleDbUrl}" 
                 alt="${brandName} ${carModel}" 
                 class="catalog-car-img" 
                 loading="lazy"
                 onerror="this.onerror=null; this.src='https://placehold.co/600x400/161616/8c8c8c?text=${brandName.toUpperCase()}+${encodeURIComponent(carModel)}';">
        `;
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