document.addEventListener("DOMContentLoaded", () => {
  const correoLogueado = localStorage.getItem("correoLogueado");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (!correoLogueado) {
    alert("⚠️ No hay sesión activa. Inicia sesión para ver tu catálogo.");
    window.location.href = "Login.html";
    return;
  }

  const usuario = usuarios.find(u => u.correo === correoLogueado);
  if (!usuario) {
    alert("❌ Usuario no encontrado.");
    return;
  }

  // Mostrar bienvenida solo si no se ha mostrado aún en esta sesión____________________________________________________________________
  if (!sessionStorage.getItem("saludoMostrado")) {
    alert(`👋 ¡Bienvenido, ${usuario.nombre}!`);
    sessionStorage.setItem("saludoMostrado", "true");
  }

  // Asegurar que el nombre esté en la URL
  const params = new URLSearchParams(window.location.search);
  const yaTieneNombreEnURL = params.get("nombre");

  if (!yaTieneNombreEnURL) {
    window.location.search = `?nombre=${encodeURIComponent(usuario.nombre)}`;
    return;
  }

  aplicarLinksEstáticosConNombre(usuario.nombre);
  obtenerPersonajes().then(personajes => {
    mostrarCatalogo(personajes);
  });
});



// Mostrar los personajes en el catálogo ____________________________________________________________________________________________
async function mostrarCatalogo(lista = []) {
  const contenedor = document.getElementById("container-mayor");
  contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

  // Recuperar los favoritos del localStorage
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Creación de filas de tarjetas y su contenido __________________________________________________________________________________
  for (let i = 0; i < lista.length; i += 3) {
    const fila = document.createElement("div");
    fila.className = "container-1"; 

    for (let j = i; j < i + 3 && j < lista.length; j++) {
      const p = lista[j];

      const tarjeta = document.createElement("div");
      tarjeta.className = "element"; 

      // Verificar si el personaje está en favoritos
      const estaEnFavoritos = favoritos.some(f => f.id === p.id);

      //cambiar la imagen de la estrella
      const estrellaImagen = estaEnFavoritos ? "../Img/estrella-fav.png" : "../Img/estrella.png";

      tarjeta.innerHTML = `
        <div><img src="${p.image}" alt="${p.name}" width="340px" height="450px"></div>
        <div id="texto"><h2 id="h2b">${p.name.toUpperCase()}</h2></div>
        <div id="boto-estrella">
          <div><button id="Boton" onclick="verDetalle(${p.id})">MÁS DETALLES</button></div>
          <div id="estrella">
            <img src="${estrellaImagen}" alt="favorito" width="55px" onclick="agregarOEliminarDeFavoritos(${p.id}, '${p.name}', '${p.image}', this)">
          </div>
        </div>
      `;

      fila.appendChild(tarjeta);
    }

    contenedor.appendChild(fila);
  }
}

// Función para agregar o eliminar un personaje de los favoritos
function agregarOEliminarDeFavoritos(id, name, image, estrellaElement) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Verificar si el personaje ya está en los favoritos
  const personajeYaFavorito = favoritos.some(p => p.id === id);

  if (personajeYaFavorito) {
    // Eliminar del array de favoritos
    const favoritosActualizados = favoritos.filter(p => p.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(favoritosActualizados));

    // Cambiar la imagen de la estrella a la de "estrella.png"
    estrellaElement.src = "../Img/estrella.png"; // Imagen de estrella desmarcada

    alert(`${name} ha sido eliminado de tus favoritos.`);
  } else {
    // Si no está en favoritos, agregarlo
    const nuevoFavorito = { id, name, image };
    favoritos.push(nuevoFavorito);

    // Guardar los favoritos en localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // Cambiar la imagen de la estrella a la de "estrella-fav.png"
    estrellaElement.src = "../Img/estrella-fav.png"; // Imagen de estrella seleccionada

    alert(`${name} ha sido añadido a tus favoritos.`);
  }
}

// Redirige al detalle del personaje _____________________________________________________________________________________________________
function verDetalle(id) {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");
  window.location.href = `Element.html?id=${id}&nombre=${nombre}`;
}


// Función para obtener los personajes desde la API_______________________________________________________________________________________
async function obtenerPersonajes() {
  try {
    const respuesta = await fetch("https://akabab.github.io/starwars-api/api/all.json");
    const personajes = await respuesta.json();


    return personajes;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return [];
  }
}

// Establece los enlaces de la nav con el nombre del usuario ____________________________________________________________________________
function aplicarLinksEstáticosConNombre(nombre) {
  if (!nombre) return;

  const favoritos = document.getElementById("link-favoritos");
  const perfil = document.getElementById("link-perfil");
  const icono = document.getElementById("link-icono");
  const imagenPerfil = document.getElementById("imagenperfil");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (favoritos) favoritos.href = `Favoritos.html?nombre=${nombre}`;
  if (perfil) perfil.href = `Profile.html?nombre=${nombre}`;
  if (icono) icono.href = `Profile.html?nombre=${nombre}`;

  const usuario = usuarios.find(u => u.nombre === nombre);
  if (usuario && usuario.foto && imagenPerfil) {
    imagenPerfil.src = usuario.foto;
    imagenPerfil.alt = `Foto de perfil de ${nombre}`;
  }
}


// Buscador _____________________________________________________________________________________________________________________________
document.getElementById("input-buscador").addEventListener("input", () => {
  const texto = document.getElementById("input-buscador").value.toLowerCase().trim();

  if (texto === "") {
    obtenerPersonajes().then(personajes => mostrarCatalogo(personajes));
  } else {
    obtenerPersonajes().then(personajes => {
      const personajesFiltrados = personajes.filter(p =>
        p.name.toLowerCase().includes(texto)
      );
      mostrarCatalogo(personajesFiltrados);
    });
  }
});