// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});


// Search Functionality
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const posts = document.querySelectorAll('.post'); // Assuming all posts are in the .post class

searchForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  
  const query = searchInput.value.toLowerCase().trim();
  let noResults = true;

  posts.forEach(post => {
    const title = post.querySelector('h3').textContent.toLowerCase();
    const description = post.querySelector('p').textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      post.style.display = 'block'; // Show post
      noResults = false;
    } else {
      post.style.display = 'none'; // Hide post
    }
  });

  if (noResults) {
    alert('No matching blog posts found.');
  }
});

// -------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}