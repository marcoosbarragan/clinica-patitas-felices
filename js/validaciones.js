// Esperamos a que la página esté lista
document.addEventListener("DOMContentLoaded", () => {
  // Cuando se escribe el nombre, se revisa si tiene entre 1 y 15 letras
  document.getElementById("nombre").addEventListener("input", e => {
    e.target.setCustomValidity(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,15}$/.test(e.target.value) ? "" : "Máx 15 letras.");
  });

  // Cuando se escriben los apellidos, se revisa si tiene entre 1 y 40 letras
  document.getElementById("apellidos").addEventListener("input", e => {
    e.target.setCustomValidity(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,40}$/.test(e.target.value) ? "" : "Máx 40 letras.");
  });

  // Cuando se escribe el teléfono, se revisa si tiene hasta 9 números
  document.getElementById("telefono").addEventListener("input", e => {
    e.target.setCustomValidity(/^\d{1,9}$/.test(e.target.value) ? "" : "Máximo 9 números.");
  });

  // Cuando se escribe el correo, se revisa si tiene el formato correcto
  document.getElementById("email").addEventListener("input", e => {
    e.target.setCustomValidity(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(e.target.value) ? "" : "Formato inválido.");
  });
});