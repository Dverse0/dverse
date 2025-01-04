
// Select the hamburger menu and navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to toggle menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Scroll-triggered fade-in effect
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

    const serviceBoxes = document.querySelectorAll('.service-box');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0
        );
    };

    const handleScrollAnimation = () => {
        serviceBoxes.forEach((box) => {
            if (isInViewport(box)) {
                box.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    document.addEventListener('DOMContentLoaded', handleScrollAnimation); // Trigger on load


    const aboutImage = document.querySelector('.about-image');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0
        );
    };

    const handleScrollAnimation = () => {
        if (isInViewport(aboutImage)) {
            aboutImage.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleScrollAnimation);
    document.addEventListener('DOMContentLoaded', handleScrollAnimation); // Trigger on load


    const blogCards = document.querySelectorAll('.blog-card');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const handleScrollAnimation = () => {
        blogCards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    document.addEventListener('DOMContentLoaded', handleScrollAnimation); // Trigger on load


// Add this to your CSS

