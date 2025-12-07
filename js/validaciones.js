document.addEventListener("DOMContentLoaded", () => {
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");

  // Nombre: entre 2 y 15 letras
  nombre.addEventListener("input", e => {
    const valido = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]{2,15}$/.test(e.target.value);
    e.target.setCustomValidity(valido ? "" : "Introduce entre 2 y 15 letras.");
  });

  // Apellidos: entre 2 y 40 letras
  apellidos.addEventListener("input", e => {
    const valido = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]{2,40}$/.test(e.target.value);
    e.target.setCustomValidity(valido ? "" : "Introduce entre 2 y 40 letras.");
  });

  // Teléfono: entre 7 y 9 números
  telefono.addEventListener("input", e => {
    const valido = /^\d{7,9}$/.test(e.target.value);
    e.target.setCustomValidity(valido ? "" : "Introduce entre 7 y 9 números.");
  });

  // Email: formato correcto
  email.addEventListener("input", e => {
    const valido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value);
    e.target.setCustomValidity(valido ? "" : "Formato de email inválido.");
  });
});