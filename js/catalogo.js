// Mostrar los personajes____________________________________________________________________________________________________________________________

function mostrarCatalogo(lista = personajes) {
  const contenedor = document.getElementById("container-mayor");
  contenedor.innerHTML = "";

  for (let i = 0; i < lista.length; i += 3) {
    const fila = document.createElement("div");
    fila.className = "container-1";

    for (let j = i; j < i + 3 && j < lista.length; j++) {
      const p = lista[j];

      const tarjeta = document.createElement("div");
      tarjeta.className = "element";

      tarjeta.innerHTML = `
        <div><img src="${p.imagen}" alt="${p.nombre}" width="340px" height="450px"></div>
        <div id="texto"><h2 id="h2b">${p.nombre.toUpperCase()}</h2></div>
        <div id="boto-estrella">
          <div><button id="Boton" onclick="verDetalle(${p.id})">MÁS DETALLES</button></div>
          <div id="estrella"><img src="../Assets/estrella.png" alt="favorito" width="55px"></div>
        </div>
      `;

      fila.appendChild(tarjeta);
    }

    contenedor.appendChild(fila);
  }
}

// Redirige al detalle del personaje _____________________________________________________________________________________________________________

function verDetalle(id) {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");
  window.location.href = `Element.html?id=${id}&nombre=${nombre}`;
}


// Establece los enlaces de la nav con el nombre del usuario ________________________________________________________________________________________

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


  const usuario = usuarios.find(u => u.nombre === nombre);

  // Cambiar la imagen si el usuario existe y tiene foto _________________________________________________________________________________________________

  if (usuario && usuario.foto && imagenPerfil) {
    imagenPerfil.src = usuario.foto;
    imagenPerfil.alt = `Foto de perfil de ${nombre}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarCatalogo();
  aplicarLinksEstáticosConNombre();
});

// Buscador _________________________________________________________________________________________________________________________________________________

document.getElementById("input-buscador").addEventListener("input", () => {
  const texto = document.getElementById("input-buscador").value.toLowerCase().trim();

  if (texto === "") {
    mostrarCatalogo();
  } else {
    const personajesFiltrados = personajes.filter(p =>
      p.nombre.toLowerCase().includes(texto)
    );
    mostrarCatalogo(personajesFiltrados);
  }
});

window.addEventListener("DOMContentLoaded", aplicarLinksEstáticosConNombre);