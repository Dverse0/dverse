const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to toggle menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});