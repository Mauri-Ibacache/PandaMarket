// Obtener elementos del DOM
const cartCounter = document.getElementById('cuenta-carrito');
let cart = []; // Array para almacenar los productos

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, precio, imagen) {
    const producto = { nombre: nombreProducto, precio: precio, imagen: imagen};
    cart.push(producto);

    // Actualizar contador del carrito
    cartCounter.textContent = cart.length;

    // Mostrar mensaje de confirmación
    //alert(`${nombreProducto} ha sido agregado al carrito.`);
}

// Función para obtener los detalles del carrito
function mostrarDetallesCarrito() {
    let detalles = cart.map(p => `${p.nombre} - $${p.precio} ${p.imagen}`).join('\n');
    alert(`Carrito:\n${detalles}`);
}

// Asignar eventos a botones de "Agregar"
document.querySelectorAll('.buy').forEach(button => {
    button.addEventListener('click', (event) => {
        const productoElement = event.target.closest('.producto');
        const nombreProducto = productoElement.querySelector('.producto-nombre').textContent;
        const precioProducto = productoElement.querySelector('.producto-precio').textContent.replace('$', '');
        const imagenProducto = productoElement.querySelector('.producto-imagen').src;
        agregarAlCarrito(nombreProducto, parseFloat(precioProducto), imagenProducto);
    });
});


let carrito = [];

function agregarAlCarrito(nombre, precio, imagen) {
    carrito.push({ nombre, precio, imagen });
    actualizarIconoCarrito();
}

function actualizarIconoCarrito() {
    document.getElementById("cuenta-carrito").innerText = carrito.length;
}

function mostrarCarritoModal() {
    let carritoItems = document.getElementById("carritoItems");
    carritoItems.innerHTML = ""; // Limpiar contenido anterior
    
    let total = 0;
    
    carrito.forEach(item => {
        total += item.precio;

        // Crear los elementos para mostrar los detalles del producto
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("itemCarrito");

        let img = document.createElement("img");
        img.src = item.imagen;
        img.alt = item.nombre;
        img.width = 50;
        img.height = 50;

        let nombre = document.createElement("p");
        nombre.innerText = item.nombre;

        let precio = document.createElement("p");
        precio.innerText = `$${item.precio}`;

        itemDiv.appendChild(img);
        itemDiv.appendChild(nombre);
        itemDiv.appendChild(precio);
        carritoItems.appendChild(itemDiv);
    });

    // Actualizar el total de la compra
    document.getElementById("totalCompra").innerText = `$${total}`;

    // Mostrar el modal
    document.getElementById("carritoModal").style.display = "block";
}

function cerrarCarritoModal() {
    document.getElementById("carritoModal").style.display = "none";
}

function finalizarCompra() {
    alert("Compra finalizada. ¡Gracias por su compra!");
    carrito = []; // Vaciar el carrito
    actualizarIconoCarrito(); // Actualizar el icono del carrito
    cerrarCarritoModal(); // Cerrar el modal
}

