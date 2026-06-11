// ════════════════════════════════════════════
//  COMPARE PAGE
// ════════════════════════════════════════════

// Index 0 is ignored so that indices 1, 2, and 3 match slots 1, 2, and 3 directly
const selectedCars = [null, null, null, null];

const compareBtn = document.getElementById('compare-btn');
const resetBtn   = document.getElementById('reset-btn');
const results    = document.getElementById('compare-results');
const grid       = document.getElementById('compare-grid');
const table      = document.getElementById('compare-table');

// ── Populate model dropdown when brand is chosen ──
[1, 2, 3].forEach(slot => {
    const brandSel = document.getElementById(`brand-${slot}`);
    const modelSel = document.getElementById(`model-${slot}`);

    // Safety check in case a slot element isn't rendered in the HTML
    if (!brandSel || !modelSel) return;

    brandSel.addEventListener('change', () => {
        const brand = brandSel.value;
        modelSel.innerHTML = '<option value="">Select Model</option>';
        modelSel.disabled = !brand;
        selectedCars[slot] = null;
        updatePreview(slot, null);
        updateCompareBtn();

        if (!brand) return;

        // Filter and sort matching vehicles from cardata.js (case-insensitive brand check)
        const matching = Object.entries(carData)
            .filter(([, car]) => car.brand.toLowerCase() === brand.toLowerCase())
            .sort((a, b) => a[1].name.localeCompare(b[1].name) || a[1].year - b[1].year);

        matching.forEach(([id, car]) => {
            const opt = document.createElement('option');
            opt.value = id;
            opt.textContent = `${car.year} ${car.name}`;
            modelSel.appendChild(opt);
        });
    });

    modelSel.addEventListener('change', () => {
        const id = modelSel.value;
        selectedCars[slot] = id || null;
        updatePreview(slot, id || null);
        updateCompareBtn();
        if (results) results.style.display = 'none';
    });
});

// ── Update slot preview card ──
function updatePreview(slot, id) {
    const preview = document.getElementById(`preview-${slot}`);
    if (!preview) return; // Safety check

    if (!id || !carData[id]) {
        preview.innerHTML = `
            <div class="slot-empty">
                <span class="slot-plus">+</span>
                <span>Choose a car</span>
            </div>`;
        return;
    }
    const car = carData[id];
    preview.innerHTML = `
        <div class="slot-filled">
            <div class="slot-filled-brand">${car.brand}</div>
            <div class="slot-filled-name">${car.name}</div>
            <div class="slot-filled-year">${car.year}</div>
            <div class="slot-filled-category">${car.category}</div>
        </div>`;
}

// ── Enable compare button when 2+ cars selected ──
function updateCompareBtn() {
    if (!compareBtn) return;
    const filled = selectedCars.filter(Boolean).length;
    compareBtn.disabled = filled < compareConfig.minCars;
}

// ── Build comparison results ──
if (compareBtn) {
    compareBtn.addEventListener('click', () => {
        const ids = selectedCars.filter(Boolean);
        if (ids.length < compareConfig.minCars) return;

        if (!grid || !table || !results) return;

        // Summary cards
        grid.innerHTML = '';
        ids.forEach(id => {
            const car = carData[id];
            const div = document.createElement('div');
            div.className = 'compare-card';
            div.innerHTML = `
                <div class="compare-card-brand">${car.brand}</div>
                <div class="compare-card-name">${car.name}</div>
                <div class="compare-card-meta">${car.year} · ${car.category}</div>
                <div class="compare-card-overview">${car.overview}</div>
            `;
            grid.appendChild(div);
        });

        // Table header
        let thead = '<thead><tr><th class="th-spec">Spec</th>';
        ids.forEach(id => {
            const car = carData[id];
            thead += `<th>${car.year} ${car.brand} ${car.name}</th>`;
        });
        thead += '</tr></thead>';

        // Table body — spec rows
        let tbody = '<tbody>';
        compareConfig.specRows.forEach(row => {
            tbody += `<tr><td class="td-label">${row.label}</td>`;
            const values = ids.map(id => {
                const s = specsData[id];
                return s ? s[row.key] : '—';
            });
            values.forEach(val => {
                const highlight = row.key === 'range' && val !== '—';
                tbody += `<td class="${highlight ? 'td-best' : ''}">${val}</td>`;
            });
            tbody += '</tr>';
        });

        // Highlights row
        tbody += `<tr><td class="td-label">Highlights</td>`;
        ids.forEach(id => {
            const car = carData[id];
            const items = car.highlights.map(h => `<li>${h}</li>`).join('');
            tbody += `<td><ul class="compare-highlights">${items}</ul></td>`;
        });
        tbody += '</tr></tbody>';

        table.innerHTML = thead + tbody;

        results.style.display = 'block';
        results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ── Reset ──
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        [1, 2, 3].forEach(slot => {
            const brandSel = document.getElementById(`brand-${slot}`);
            const modelSel = document.getElementById(`model-${slot}`);

            if (brandSel) brandSel.value = '';
            if (modelSel) {
                modelSel.innerHTML = '<option value="">Select Model</option>';
                modelSel.disabled = true;
            }
            selectedCars[slot] = null;
            updatePreview(slot, null);
        });
        if (compareBtn) compareBtn.disabled = true;
        if (results) results.style.display = 'none';
    });
}

// ── Nav active link ──
const navLinks    = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});