// Mostrar los personajes en el catálogo ____________________________________________________________________________________________
async function mostrarCatalogo(lista = []) {
  const contenedor = document.getElementById("container-mayor");
  contenedor.innerHTML = "";

  // Creacion de filas de tarjetas y su contenido __________________________________________________________________________________
  for (let i = 0; i < lista.length; i += 3) {
    const fila = document.createElement("div");
    fila.className = "container-1";

    for (let j = i; j < i + 3 && j < lista.length; j++) {
      const p = lista[j];

      const tarjeta = document.createElement("div");
      tarjeta.className = "element";

      tarjeta.innerHTML = `
        <div><img src="${p.image}" alt="${p.name}" width="340px" height="450px"></div>
        <div id="texto"><h2 id="h2b">${p.name.toUpperCase()}</h2></div>
        <div id="boto-estrella">
          <div><button id="Boton" onclick="verDetalle(${p.id})">MÁS DETALLES</button></div>
          <div id="estrella"><img src="../Img/estrella.png" alt="favorito" width="55px"></div>
        </div>
      `;

      fila.appendChild(tarjeta);
    }

    contenedor.appendChild(fila);
  }
}

// Redirige al detalle del personaje___________________________________________________________________________________________________
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
function aplicarLinksEstáticosConNombre() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  if (!nombre) return;

  const favoritos = document.getElementById("link-favoritos");
  const perfil = document.getElementById("link-perfil");
  const icono = document.getElementById("link-icono");
  const imagenPerfil = document.getElementById("imagenperfil");

  if (favoritos) favoritos.href = `Favoritos.html?nombre=${nombre}`;
  if (perfil) perfil.href = `Profile.html?nombre=${nombre}`;
  if (icono) icono.href = `Profile.html?nombre=${nombre}`;

  // Cambiar la imagen de perfil si el usuario tiene foto __________________________________________________________________________________
  const usuario = usuarios.find(u => u.nombre === nombre);
  if (usuario && usuario.foto && imagenPerfil) {
    imagenPerfil.src = usuario.foto;
    imagenPerfil.alt = `Foto de perfil de ${nombre}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerPersonajes().then(personajes => {
    mostrarCatalogo(personajes);
  });

  aplicarLinksEstáticosConNombre();
});

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