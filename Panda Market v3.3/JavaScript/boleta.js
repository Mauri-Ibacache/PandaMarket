function finalizarCompra() {
    onclick=cerrarCarritoModal()
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let boletaHTML = '<h2>Boleta de Compra</h2><ul>';
    let total = 0;

    carrito.forEach(item => {
        boletaHTML += `<li>${item.nombre} - $${item.precio}</li>`;
        total += item.precio;
    });

    boletaHTML += `</ul><p>Total: $${total}</p>`;


    // Mostrar la boleta en un modal
    const boletaModal = document.getElementById('boletaModal');
    boletaModal.querySelector('.boleta-content').innerHTML = boletaHTML;
    boletaModal.style.display = 'block';
}

function cerrarBoleta() {
    const boletaModal = document.getElementById('boletaModal');
    boletaModal.style.display = 'none';
    carrito = []; // Vaciar el carrito
    actualizarIconoCarrito();
    actualizarCarrito(); // Actualizar la vista del carrito
}