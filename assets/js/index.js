// Precio base del producto
let precio = 800000;

// Referencias a elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");

// Mostrar precio base
precioSpan.innerHTML = precio;

// Variable para cantidad de productos
let cantidad = 0;

// Función para actualizar el total
function actualizarTotal() {
  totalSpan.innerHTML = precio * cantidad;
  cantidadSpan.innerHTML = cantidad;
}

// Evento click para el botón "+"
btnSumar.onclick = function () {
  cantidad++;
  actualizarTotal();
};

// Evento click para el botón "-"
btnRestar.onclick = function () {
  if (cantidad > 0) {
    cantidad--;
    actualizarTotal();
  }
};

// Inicializar valores en pantalla
actualizarTotal();
