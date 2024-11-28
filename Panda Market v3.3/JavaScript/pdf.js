function generarPDF() {
    onclick=cerrarCarritoModal()
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configuración de fuente y tamaño
    doc.setFont("Courier", "normal");
    doc.setFontSize(10);

    // Obtener la fecha y hora actual
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString(); // Ejemplo: "27/11/2024"
    const hora = ahora.toLocaleTimeString(); // Ejemplo: "14:35:07"

    // Encabezado de la boleta
    doc.text("BOLETA ELECTRONICA", 10, 15);
    doc.text("SUPERMERCADO", 10, 20);
    doc.text("PANDA MARKET", 10, 30);
    doc.text("UNIVERSIDAD DE TARAPACA", 10, 35);
    doc.text("IQUIQUE - CHILE", 10, 40);

    // Fecha y hora de generación
    doc.text(`Fecha: ${fecha}`, 10, 50);
    doc.text(`Hora: ${hora}`, 10, 55);

    // Separador
    doc.line(10, 60, 200, 60);

    // Contenido de los productos
    let lineHeight = 65;
    let total = 0;

    carrito.forEach(item => {
        item.cantidad = 1;
        // Producto con descripción, precio unitario y subtotal
        doc.text(`${item.nombre}`, 10, lineHeight);
        doc.text(`${item.cantidad} x $${item.precio}`, 100, lineHeight);
        const subtotal = item.cantidad * item.precio;
        doc.text(`$${subtotal}`, 180, lineHeight, { align: "right" });
        total += subtotal;
        lineHeight += 10;
    });

    // Subtotal y descuentos
    lineHeight += 10;
    doc.text("SUB TOTAL:", 10, lineHeight);
    doc.text(`$${total}`, 180, lineHeight, { align: "right" });

    lineHeight += 10;
    const descuento = 0; // Simulación de descuento
    doc.text("DESCUENTOS:", 10, lineHeight);
    doc.text(`$${descuento}`, 180, lineHeight, { align: "right" });

    // Total final
    lineHeight += 10;
    const totalFinal = total - descuento;
    doc.text("TOTAL:", 10, lineHeight);
    doc.text(`$${totalFinal}`, 180, lineHeight, { align: "right" });

    // Footer
    lineHeight += 20;
    doc.text("Gracias por su compra", 10, lineHeight);

    // Generar el PDF como Blob
    const pdfBlob = doc.output('blob');

    // Crear un enlace temporal para abrir el PDF en una nueva pestaña
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');

    onclick=carrito = []; // Vaciar el carrito
    actualizarIconoCarrito();
    alert("Gracias por tu compra")
}
