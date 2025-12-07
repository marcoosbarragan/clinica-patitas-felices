// Esperamos a que la página esté lista
document.addEventListener("DOMContentLoaded", () => {
  const galeria = document.getElementById("galeria");

  if (!galeria) {
    console.warn("No se encontró el espacio para la galería.");
    return;
  }

  // Lista de imágenes con ruta, nombre y dimensiones originales
  const imagenes = [
    { src: "../images/perro1.jpeg", alt: "Rufo, Yorkshire", caption: "Rufo, nuestro paciente Yorkshire Terrier", width: 400, height: 300 },
    { src: "../images/gata1.jpeg", alt: "Lola, Gata Común", caption: "Lola, una gata común muy cariñosa", width: 400, height: 300 },
    { src: "../images/perra2.jpeg", alt: "Felipe, Cane Corso", caption: "Felipe, un Cane Corso fuerte y noble", width: 400, height: 300 },
    { src: "../images/gato2.jpg", alt: "Rosario, Gata Bombay", caption: "Rosario, elegante gata Bombay", width: 400, height: 300 },
    { src: "../images/ninfa1.jpeg", alt: "Paquito, Ninfa", caption: "Paquito, nuestra ninfa alegre", width: 400, height: 300 },
    { src: "../images/tortuga1.jpeg", alt: "Nelson, Tortuga", caption: "Nelson, la tortuga tranquila", width: 400, height: 300 },
    { src: "../images/conejo1.jpeg", alt: "Bimba, Conejo", caption: "Bimba, conejo curioso y simpático", width: 400, height: 300 },
    { src: "../images/inseparable1.jpeg", alt: "Manguito, Inseparable", caption: "Manguito, inseparable lleno de color", width: 400, height: 300 },
    { src: "../images/iguana1.jpeg", alt: "Isidro, Iguana", caption: "Isidro, iguana exótica y tranquila", width: 400, height: 300 },
    { src: "../images/cobaya1.jpeg", alt: "Miguel, Cobaya Peruana", caption: "Miguel, cobaya peruana adorable", width: 400, height: 300 },
    { src: "../images/caballo1.jpeg", alt: "Poderoso, Caballo", caption: "Poderoso, un caballo majestuoso", width: 400, height: 300 },
    { src: "../images/vibora1.jpeg", alt: "Nagini, Víbora", caption: "Nagini, víbora misteriosa", width: 400, height: 300 },
  ];

  // Para cada imagen de la lista
  imagenes.forEach(({ src, alt, caption, width, height }) => {
    const figura = document.createElement("figure");
    figura.className = "galeria-item";

    const imagen = document.createElement("img");
    imagen.src = src;
    imagen.alt = alt;          // Texto breve y funcional
    imagen.width = width;      // Dimensiones originales
    imagen.height = height;    // Dimensiones originales

    const pie = document.createElement("figcaption");
    pie.textContent = caption; // Texto narrativo o descriptivo

    figura.append(imagen, pie);
    galeria.appendChild(figura);
  });
});