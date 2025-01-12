const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to toggle menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const colors = ['#f9f4f0', '#fff8e1', '#f7ebe1'];
    let currentColorIndex = 0;

    setInterval(() => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        container.style.backgroundColor = colors[currentColorIndex];
    }, 3000);
});
