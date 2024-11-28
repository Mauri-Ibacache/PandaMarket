window.onscroll = function() {
    const footer = document.getElementById("footer");
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    // Verifica si se ha llegado al final de la página
    if (scrollY + windowHeight >= documentHeight - 10) { // 10px de margen
        footer.classList.add("visible"); // Muestra el footer
    } else {
        footer.classList.remove("visible"); // Oculta el footer
    }
};