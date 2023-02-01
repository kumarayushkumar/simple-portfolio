const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('open-thenav');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.toggle('open-thenav');
    });
});