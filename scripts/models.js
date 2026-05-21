const filterBtns = document.querySelectorAll('.filter-btn');
const categories = document.querySelectorAll('.model-category');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide categories
        categories.forEach(cat => {
            if (filter === 'all' || cat.getAttribute('data-category') === filter) {
                cat.classList.remove('hidden');
            } else {
                cat.classList.add('hidden');
            }
        });
    });
});

// Make cards clickable
const cards = document.querySelectorAll('.model-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (id) {
            window.location.href = `model.html?id=${id}`;
        }
    });
});