// 3D Animation Interaction
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to toggle menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});







const hero = document.querySelector('.hero-animation');
const products = document.querySelectorAll('.product');

hero.addEventListener('mousemove', (e) => {
  let x = (e.clientX / window.innerWidth) - 0.5;
  let y = (e.clientY / window.innerHeight) - 0.5;

  products.forEach((product) => {
    product.style.transform = `rotateY(${x * 20}deg) rotateX(${y * 20}deg)`;
  });
});

// Filter Products by Category
function filterCategory(category) {
  const allCategories = document.querySelectorAll('.category-container');
  allCategories.forEach((cat) => {
    if (cat.id === category) {
      cat.style.display = 'block';
    } else {
      cat.style.display = 'none';
    }
  });
}
// Get elements for the hamburger menu and navigation links


