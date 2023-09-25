ScrollReveal().reveal(".cards", {reset: true})

const header = document.querySelector('.header-com-transicao');
const images = ['img/media-2.jpg', 'img/media-3.jpg', 'img/media-1.jpg']; // Substitua com os caminhos das suas imagens
let currentImageIndex = 0;

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    header.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0.964), rgb(0, 0, 0, 0)), url('${images[currentImageIndex]}')`;
}

setInterval(changeBackground, 10000); // Muda a imagem a cada 10 segundos (10000 milissegundos)

// menu hamburguer

const hamburguerButton = document.querySelector('.hamburguer');
  const menuList = document.querySelector('.ul');
  const menu = document.querySelector('.menu');
  
  hamburguerButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });