const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to toggle menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const options = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    };
  
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = "translateY(20px)";
      sectionObserver.observe(section);
    });
  });
  
