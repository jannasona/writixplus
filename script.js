
javascript
// Book carousel functionality
const bookCarousel = document.querySelector('.book-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const books = document.querySelectorAll('.book-item');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 300; // Adjust based on book item width
  bookCarousel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? books.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === books.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();


});


