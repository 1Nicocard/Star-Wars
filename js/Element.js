//Flecha ____________________________________________________________________________________________________________________
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  const flecha = document.getElementById("flecha-regreso");
  if (nombre && flecha) {
    flecha.href = `Catalogo.html?nombre=${nombre}`;
  }
});


// Función para obtener datos de los personajes desde la API _________________________________________________________________
async function obtenerPersonajes() {
  try {
    const respuesta = await fetch("https://akabab.github.io/starwars-api/api/all.json");
    const personajes = await respuesta.json(); // Obtener los datos de la API
    return personajes;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return [];
  }
}

// Redirige al detalle del personaje con la información del id_________________________________________________________________________
document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // Obtener los personajes desde la API y buscar el personaje con el id proporcionado ________________________________________________
  obtenerPersonajes().then(personajes => {
    const personaje = personajes.find(p => p.id === id);

    if (!personaje) {

      document.getElementById("detalle-personaje").innerHTML = "<p>Personaje no encontrado</p>";
      return;
    }

    // Mostrar los detalles del personaje ________________________________________________________________________________________
    const contenedor = document.getElementById("detalle-personaje");
    contenedor.innerHTML = `
      <div class="image-container">
        <img src="${personaje.image}" alt="${personaje.name}" class="character-image">
      </div>

      <div class="info">
        <h2 class="name">${personaje.name}</h2>
        <p><strong>Altura:</strong> ${personaje.height}</p>
        <p><strong>Masa:</strong> ${personaje.mass}</p>
        <p><strong>Género:</strong> ${personaje.gender}</p>
        <p><strong>Planeta:</strong> ${personaje.homeworld}</p>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <p><strong>Año de nacimiento:</strong> ${personaje.born}</p>
        <p><strong>Ubicación de nacimiento:</strong> ${personaje.bornLocation}</p>
        <p><strong>Ubicación de muerte:</strong> ${personaje.diedLocation}</p>
      </div>
    `;
  });
});
