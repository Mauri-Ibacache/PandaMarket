const botonesBuy = document.querySelectorAll('.buy');

botonesBuy.forEach(boton => {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  boton.appendChild(loader);

  boton.addEventListener('click', () => {
    boton.textContent = '.....'; // Ocultar texto del botón
    boton.style.position = 'relative'; // Asegurar posicionamiento relativo
    loader.style.display = 'block'; // Mostrar loader

    // Simular una carga (puedes reemplazar esto con una función real)
    setTimeout(() => {
      loader.style.display = 'none';
      boton.textContent = 'Agregar';
      boton.style.position = ''; // Restaurar posición original (opcional)
    }, 1000);
  });
});

