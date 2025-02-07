// Скрипт для анимации текста при загрузке
window.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.text');
    text.classList.add('fade-in');
});

// Смена цвета кнопки при наведении
const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
navbarLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#48D1CC';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});
