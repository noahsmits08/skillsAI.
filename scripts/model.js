const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const car = carData[id];

if (car) {
    document.title = `${car.year} ${car.brand} ${car.name} — CarDetails`;
    document.getElementById('detail-year').textContent = car.year;
    document.getElementById('detail-name').textContent = `${car.brand} ${car.name}`;
    document.getElementById('detail-category').textContent = car.category;
    document.getElementById('detail-overview').textContent = car.overview;

    const list = document.getElementById('detail-highlights');
    car.highlights.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
} else {
    document.querySelector('.model-detail-page').innerHTML = `
        <a href="models.html" class="back-link">← Back to Models</a>
        <p style="color:#888; margin-top: 2rem;">Model not found. Please go back and select a valid model.</p>
    `;
}