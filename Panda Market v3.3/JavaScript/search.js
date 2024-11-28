function filterProducts() {
    // Obtener el valor de la barra de búsqueda
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let productos = document.querySelectorAll('.producto');

    // Filtrar los productos según el texto ingresado
    productos.forEach(producto => {
        let nombre = producto.querySelector('.producto-nombre').textContent.toLowerCase();
        if (nombre.includes(filter)) {
            producto.style.display = ""; // Mostrar producto
        } else {
            producto.style.display = "none"; // Ocultar producto
        }
    });
}
