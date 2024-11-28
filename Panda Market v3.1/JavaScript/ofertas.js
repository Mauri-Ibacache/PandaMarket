function filtrarOfertas() {
    // Seleccionar todos los productos
    let productos = document.querySelectorAll('.producto');

    // Recorrer los productos y mostrar solo los que tienen la clase "of"
    productos.forEach(producto => {
        let etiquetaOferta = producto.querySelector('.of');
        if (etiquetaOferta) {
            producto.style.display = ""; // Mostrar productos en oferta
        } else {
            producto.style.display = "none"; // Ocultar los demás productos
        }
    });
}