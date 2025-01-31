// Variáveis para controle do carrossel
let currentIndex = 0;
const carrossel = document.querySelector('.carrossel');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const visibleCards = 3.8; // Define quantos cards aparecem por vez

// Função para mover o carrossel
function moveSlide(direction) {
    const maxIndex = totalCards - visibleCards; // Índice máximo permitido

    currentIndex += direction;

    // Impedir que o carrossel ultrapasse os limites
    if (currentIndex < 0) {
        currentIndex = 0; // Volta ao início
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex; // Para no final
    }

    updateCarousel();
}

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const cardWidth = cards[0].clientWidth; // Obtém largura do card
    const offset = -(currentIndex * (cardWidth + 10)); // Ajusta espaçamento
    carrossel.style.transform = `translateX(${offset}px)`;
}
