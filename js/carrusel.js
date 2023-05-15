// Obtenemos los elementos del carrusel
var carrusel = document.querySelector('#carrusel');
var imagenes = carrusel.querySelectorAll("#carrusel div");

var indiceImagenActual = 0 // Inicializamos el índice de la imagen actual en 0

// Función para mostrar la imagen actual
function mostrarImagenActual(indice) {  
  // Quitamos la clase "visible" de la imagen actual
  if (indice !== indiceImagenActual) {
    imagenes[indiceImagenActual].classList.remove('visible');
    imagenes[indiceImagenActual].classList.add('invisible');
  }

  // Agregamos la clase "visible" a la nueva imagen
  imagenes[indice].classList.remove('invisible');
  imagenes[indice].classList.add('visible');
  // Actualizamos el índice de la imagen actual
  indiceImagenActual = indice
}

// Evento click del botón "Anterior"
function mostrarAnterior() {
  // Obtenemos el índice de la imagen anterior (o la última si estamos en la primera)
  indice =
    indiceImagenActual === 0 ? imagenes.length - 1 : indiceImagenActual - 1;
  // Mostramos la imagen anterior
  mostrarImagenActual(indice);
}

// Evento click del botón "Siguiente"
function mostrarSiguiente() {
  // Obtenemos el índice de la imagen siguiente (o la primera si estamos en la última)
  indice =
    indiceImagenActual === imagenes.length - 1 ? 0 : indiceImagenActual + 1;
  // Mostramos la imagen siguiente
  mostrarImagenActual(indice);
}

// Mostramos la primera imagen al cargar la página
mostrarImagenActual(indiceImagenActual);
