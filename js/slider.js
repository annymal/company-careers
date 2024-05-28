const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}
 
prevBtn.addEventListener('click', () => {
    console.log('clik')
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    showSlide(currentIndex)
})

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex)
})

showSlide(currentIndex);