// Esperamos a que la página esté lista
document.addEventListener("DOMContentLoaded", () => {
  const galeria = document.getElementById("galeria");

  if (!galeria) {
    console.warn("No se encontró el espacio para la galería.");
    return;
  }

  // Lista de imágenes con ruta, nombre y dimensiones originales
  const imagenes = [
    { src: "../images/perro1.jpeg", alt: "Rufo, Yorkshire", width: 400, height: 300 },
    { src: "../images/gata1.jpeg", alt: "Lola, Gata Común", width: 400, height: 300 },
    { src: "../images/perra2.jpeg", alt: "Felipe, Cane Corso", width: 400, height: 300 },
    { src: "../images/gato2.jpg", alt: "Rosario, Gata Bombay", width: 400, height: 300 },
    { src: "../images/ninfa1.jpeg", alt: "Paquito, Ninfa", width: 400, height: 300 },
    { src: "../images/tortuga1.jpeg", alt: "Nelson, Tortuga", width: 400, height: 300 },
    { src: "../images/conejo1.jpeg", alt: "Bimba, Conejo", width: 400, height: 300 },
    { src: "../images/inseparable1.jpeg", alt: "Manguito, Inseparable", width: 400, height: 300 },
    { src: "../images/iguana1.jpeg", alt: "Isidro, Iguana", width: 400, height: 300 },
    { src: "../images/cobaya1.jpeg", alt: "Miguel, Cobaya Peruana", width: 400, height: 300 },
    { src: "../images/caballo1.jpeg", alt: "Poderoso, Caballo", width: 400, height: 300 },
    { src: "../images/vibora1.jpeg", alt: "Nagini, Vibora", width: 400, height: 300 },
  ];

  // Para cada imagen de la lista
  imagenes.forEach(({ src, alt, width, height }) => {
    const figura = document.createElement("figure");
    figura.className = "galeria-item";

    const imagen = document.createElement("img");
    imagen.src = src;
    imagen.alt = alt;
    imagen.width = width;
    imagen.height = height;

    const pie = document.createElement("figcaption");
    pie.textContent = alt;

    figura.append(imagen, pie);
    galeria.appendChild(figura);
  });
});