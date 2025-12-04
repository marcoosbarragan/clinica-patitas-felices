// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Elementos del formulario
  const producto = document.getElementById("producto");
  const plazo = document.getElementById("plazo");
  const extras = document.querySelectorAll(".extra");
  const resultado = document.getElementById("resultado");

  // Precios base de cada servicio
  const precios = {
    consulta: 25,
    peluqueria: 30,
    vacunas: 20
  };

  // Función para calcular el presupuesto
  function calcular() {
    let total = 0;

    // Solo calcula si hay un producto válido seleccionado
    if (producto.value && precios[producto.value]) {
      total = precios[producto.value];

      // Suma los extras marcados
      extras.forEach(extra => {
        if (extra.checked) {
          total += parseFloat(extra.value);
        }
      });

      // Aplica descuento si el plazo es menor de 5 días
      if (plazo.value && parseInt(plazo.value) < 5) {
        total *= 0.9;
      }
    }

    // Muestra el resultado con dos decimales
    resultado.textContent = `${total.toFixed(2)} €`;
  }

  // Eventos para recalcular cuando cambian los valores
  producto.addEventListener("change", calcular);
  plazo.addEventListener("input", calcular);
  extras.forEach(extra => extra.addEventListener("change", calcular));
});