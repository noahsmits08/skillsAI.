const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});