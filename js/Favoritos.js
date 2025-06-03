document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  aplicarLinksEstáticosConNombre();

  const usuario = usuarios.find(u => u.nombre === nombre);
  const contenedor = document.getElementById("favoritos-container");

  if (!usuario) {
    contenedor.textContent = "Usuario no encontrado.";
    return;
  }

  if (!usuario.favoritos || usuario.favoritos.length === 0) {
    contenedor.textContent = "No tienes personajes favoritos aún.";
    return;
  }

  favoritosData = usuario.favoritos.map(id => personajes.find(p => p.id === id)).filter(Boolean);
  mostrarFavoritos(favoritosData);
});

function verDetalle(id, nombre) {
  window.location.href = `Element.html?id=${id}&nombre=${encodeURIComponent(nombre)}`;
}

// Muestra los personajes __________________________________________________________________________________________________________________________________

function mostrarFavoritos(lista = []) {
  const contenedor = document.getElementById("favoritos-container");
  contenedor.innerHTML = "";

  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  lista.forEach(personaje => {
    const element = document.createElement("div");
    element.className = "element";

    element.innerHTML = `
      <div><img src="${personaje.imagen}" alt="${personaje.nombre}" width="340px" height="450px"></div>
      <div id="texto">
        <h2 id="h2b">${personaje.nombre.toUpperCase()}</h2>
      </div>
      <div id="boto-estrella">
        <div><button id="Boton" onclick="verDetalle(${personaje.id}, '${nombre}')">MÁS DETALLES</button></div>
        <div id="estrella"><img src="../Img/estrella-fav.png" alt="estrella" width="55px"></div>
      </div>
    `;

    contenedor.appendChild(element);
  });
}

// Establece los enlaces de la nav con el nombre del usuario ________________________________________________________________________________________

function aplicarLinksEstáticosConNombre() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  if (!nombre) return;

  const catalogo = document.getElementById("link-catalogo");
  const favoritos = document.getElementById("link-favoritos");
  const perfil = document.getElementById("link-perfil");
  const icono = document.getElementById("link-icono");
  const imagenPerfil = document.getElementById("imagenperfil");

  if (catalogo) catalogo.href = `Catalogo.html?nombre=${nombre}`;
  if (favoritos) favoritos.href = ` Catalogo.html?nombre=${nombre}`;
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
    mostrarFavoritos(favoritosData);
  } else {
    const filtrados = favoritosData.filter(p =>
      p.nombre.toLowerCase().includes(texto)
    );
    mostrarFavoritos(filtrados);
  }
});

