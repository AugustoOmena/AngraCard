// JavaScript para alternar imagens de fundo a cada 10 segundos
const header = document.getElementById('header');
const images = header.querySelectorAll('.bg-image');
let currentImageIndex = 0;

function changeBackground() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}
