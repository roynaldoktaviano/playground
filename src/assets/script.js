let cover = document.querySelector('#cover');
let cont = document.querySelector('#content');

let btn = document.querySelector('#cover button');


btn.addEventListener('click', ()=>{
    cover.classList.add('hidden');
    cont.classList.remove('hidden');
})


const carousel = document.getElementById('carousel');
const images = carousel.querySelector('.carousel-images');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const totalImages = images.children.length;

function updateCarousel() {
  const offset = -currentIndex * 100;
  images.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});
