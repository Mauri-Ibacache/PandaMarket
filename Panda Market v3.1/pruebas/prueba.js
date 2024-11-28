document.getElementById('miBoton').addEventListener('click', function() {
    const button = this;

    // Añadir la clase "explode"
    button.classList.add('explode');

    // Opcional: eliminar el botón después de un tiempo
    setTimeout(() => {
        button.style.display = 'none'; // Ocultar el botón
    }, 500); // Tiempo igual a la duración de la animación
});