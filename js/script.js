let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Esconde todas as slides
    slides.forEach(slide => {
        slide.style.opacity = "0";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

showSlides(); // Inicia o carrossel
