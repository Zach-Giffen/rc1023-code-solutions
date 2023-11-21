const carouselImages = document.querySelectorAll('.carousel-image');
const circles = document.querySelectorAll('.fa-circle');
let currentIndex = 0;
const left = document.querySelector('.fas.fa-chevron-left.fa-2x.previous');
const right = document.querySelector('.fas.fa-chevron-right.fa-2x.next');
let timer; // Define the timer variable

function changeImg() {
  carouselImages[currentIndex].classList.add('hidden');
  circles[currentIndex].classList.remove('fas');
  circles[currentIndex].classList.add('far');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.remove('hidden');
  circles[currentIndex].classList.remove('far');
  circles[currentIndex].classList.add('fas');
}

function leftClick() {
  clearInterval(timer);
  carouselImages[currentIndex].classList.add('hidden');
  circles[currentIndex].classList.remove('fas');
  circles[currentIndex].classList.add('far');
  currentIndex =
    (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  carouselImages[currentIndex].classList.remove('hidden');
  circles[currentIndex].classList.remove('far');
  circles[currentIndex].classList.add('fas');
  timer = setInterval(changeImg, 3000); // Restart the interval
}

function rightClick() {
  clearInterval(timer);
  carouselImages[currentIndex].classList.add('hidden');
  circles[currentIndex].classList.remove('fas');
  circles[currentIndex].classList.add('far');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.remove('hidden');
  circles[currentIndex].classList.remove('far');
  circles[currentIndex].classList.add('fas');
  timer = setInterval(changeImg, 3000); // Restart the interval
}

function selector(event) {
  clearInterval(timer);
  carouselImages[currentIndex].classList.add('hidden');
  circles[currentIndex].classList.remove('fas');
  circles[currentIndex].classList.add('far');
  currentIndex = Array.from(circles).indexOf(event.target);
  console.log(event);
  carouselImages[currentIndex].classList.remove('hidden');
  circles[currentIndex].classList.remove('far');
  circles[currentIndex].classList.add('fas');
  timer = setInterval(changeImg, 3000);
}
left.addEventListener('click', leftClick);
right.addEventListener('click', rightClick);

circles[0].addEventListener('click', selector);
circles[1].addEventListener('click', selector);
circles[2].addEventListener('click', selector);
circles[3].addEventListener('click', selector);
circles[4].addEventListener('click', selector);

timer = setInterval(changeImg, 3000);
