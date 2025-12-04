// Cargar noticias desde el archivo JSON en la carpeta datos
fetch("datos/noticias.json")
  .then(response => response.json())
  .then(noticias => {
    const contenedor = document.getElementById("contenedorNoticias");

    // recorrer cada noticia y mostrarla
    noticias.forEach(noticia => {
      const noticiaDiv = document.createElement("div");
      noticiaDiv.classList.add("noticia");

      const titulo = document.createElement("h3");
      titulo.textContent = noticia.titulo;

      const contenido = document.createElement("p");
      contenido.textContent = noticia.contenido;

      noticiaDiv.appendChild(titulo);
      noticiaDiv.appendChild(contenido);
      contenedor.appendChild(noticiaDiv);
    });
  })
  .catch(error => console.error("Error cargando noticias:", error));