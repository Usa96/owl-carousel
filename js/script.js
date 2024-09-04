const slides = document.querySelectorAll('.custom-swiper-slide');
let currentSlide = 0;
const totalSlides = slides.length;

document.querySelector('.slide-number-current').textContent = currentSlide + 1;
document.querySelector('.slide-number-total').textContent = totalSlides;

document.querySelector('.slider-arrow-left').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
  slides[currentSlide].classList.add('active');
  document.querySelector('.slide-number-current').textContent = currentSlide + 1;
});

document.querySelector('.slider-arrow-right').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
  slides[currentSlide].classList.add('active');
  document.querySelector('.slide-number-current').textContent = currentSlide + 1;
});
