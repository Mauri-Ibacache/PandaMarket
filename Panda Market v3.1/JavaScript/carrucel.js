let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide img");
    const totalSlides = slides.length;

    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    const offset = -currentIndex * 100;
    document.querySelector(".carousel-slide").style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Inicializa el carrusel
showSlide(currentIndex);