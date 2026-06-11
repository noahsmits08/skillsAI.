// Build the specs table from carData + specsData
const tbody = document.getElementById('specs-tbody');
const emptyMsg = document.getElementById('specs-empty');
const searchInput = document.getElementById('specs-search');
const filterBtns = document.querySelectorAll('.specs-filter-btn');

let activeBrand = 'all';
let searchQuery = '';

// Brand accent colours matching the site palette
const brandColors = {
    'BMW': '#c0392b',
    'Audi': '#c0392b',
    'Mercedes-Benz': '#c0392b',
    'Volkswagen': '#c0392b',
    'Volvo': '#c0392b'
};

function buildRows() {
    tbody.innerHTML = '';
    let count = 0;

    for (const [id, car] of Object.entries(carData)) {
        const specs = specsData[id];
        if (!specs) continue;

        // Brand filter
        if (activeBrand !== 'all' && car.brand !== activeBrand) continue;

        // Search filter
        const query = searchQuery.toLowerCase();
        if (query) {
            const searchable = `${car.brand} ${car.name} ${car.year} ${car.category}`.toLowerCase();
            if (!searchable.includes(query)) continue;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="col-brand">
                <span class="brand-badge brand-${car.brand.replace(/[^a-zA-Z]/g, '').toLowerCase()}">${car.brand}</span>
            </td>
            <td class="col-model">
                <a href="model.html?id=${id}" class="model-link">${car.name}</a>
            </td>
            <td class="col-year">${car.year}</td>
            <td class="col-category">
                <span class="category-tag">${car.category}</span>
            </td>
            <td class="col-engine">${specs.engine}</td>
            <td class="col-power">${specs.power}</td>
            <td class="col-drive">${specs.drive}</td>
            <td class="col-acceleration">${specs.acceleration}</td>
            <td class="col-range ${specs.range !== '—' ? 'has-range' : ''}">${specs.range}</td>
        `;

        // Click row to go to model page
        tr.addEventListener('click', () => {
            window.location.href = `model.html?id=${id}`;
        });

        tbody.appendChild(tr);
        count++;
    }

    emptyMsg.style.display = count === 0 ? 'block' : 'none';
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeBrand = btn.getAttribute('data-brand');
        buildRows();
    });
});

// Search
searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    buildRows();
});

// Init
buildRows();