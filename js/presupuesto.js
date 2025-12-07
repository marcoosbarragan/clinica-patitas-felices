// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Elementos del formulario
  const producto = document.getElementById("producto");
  const plazo = document.getElementById("plazo");
  const extras = document.querySelectorAll(".extra");
  const resultado = document.getElementById("resultado");
  const formulario = document.getElementById("formularioPresupuesto");

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

  // Validaciones de los campos de contacto
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");

  nombre.addEventListener("input", e => {
    const valido = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]{2,15}$/.test(e.target.value);
    e.target.setCustomValidity(valido ? "" : "Introduce entre 2 y 15 letras.");
  });

  apellidos.addEventListener("input", e => {
    const valido = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]{2,40}$/.test(e.target.value);
    e.target.setCustomValidity(valido ? "" : "Introduce entre 2 y 40 letras.");
  });

  telefono.addEventListener("input", e => {
    const valido = /^\d{7,9}$/.test(e.target.value);
    e.target.setCustomValidity(valido ? "" : "Introduce entre 7 y 9 números.");
  });

  email.addEventListener("input", e => {
    const valido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value);
    e.target.setCustomValidity(valido ? "" : "Formato de email inválido.");
  });

  // Validación final al enviar el formulario
  formulario.addEventListener("submit", e => {
    if (!formulario.checkValidity()) {
      e.preventDefault();
      alert("Por favor, revisa los datos del formulario. Hay campos con formato incorrecto.");
    } else {
      calcular(); // asegura que el cálculo esté actualizado
    }
  });
});