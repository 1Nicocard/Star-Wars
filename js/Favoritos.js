document.addEventListener("DOMContentLoaded", () => {
  const correoLogueado = localStorage.getItem("correoLogueado");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const personajes = JSON.parse(localStorage.getItem("personajes")) || [];

  const usuario = usuarios.find(u => u.correo === correoLogueado);
  const contenedor = document.getElementById("favoritos-container");

  aplicarLinksEstáticosConNombre();

  if (!usuario) {
    contenedor.textContent = "Usuario no encontrado.";
    return;
  }

  if (!usuario.favoritos || usuario.favoritos.length === 0) {
    contenedor.textContent = "No tienes personajes favoritos aún.";
    return;
  }

  const favoritosData = usuario.favoritos
    .map(id => personajes.find(p => p.id === Number(id)))
    .filter(Boolean);

  mostrarFavoritos(favoritosData);
  configurarBuscador(favoritosData);
});


  // Creación de filas de tarjetas y su contenido __________________________________________________________________________________
  for (let i = 0; i < lista.length; i += 3) {
    const fila = document.createElement("div");
    fila.className = "container-1"; // Clase para cada fila de 3 elementos

    for (let j = i; j < i + 3 && j < lista.length; j++) {
      const p = lista[j];

      const tarjeta = document.createElement("div");
      tarjeta.className = "element"; // Clase para cada tarjeta

      // Verificar si el personaje está en favoritos
      const estaEnFavoritos = favoritos.includes(p.id);

      // Cambiar la imagen de la estrella
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


function verDetalle(id, nombre) {
  window.location.href = `Element.html?id=${id}&nombre=${encodeURIComponent(nombre)}`;
}

function mostrarFavoritos(lista = []) {
  const contenedor = document.getElementById("favoritos-container");
  contenedor.innerHTML = "";

  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  lista.forEach(personaje => {
    const element = document.createElement("div");
    element.className = "element";

    element.innerHTML = `
      <div><img src="${personaje.image}" alt="${personaje.name}" width="340px" height="450px"></div>
<div id="texto">
  <h2 id="h2b">${personaje.name.toUpperCase()}</h2>
</div>

      <div id="boto-estrella">
        <div><button id="Boton" onclick="verDetalle(${personaje.id}, '${nombre}')">MÁS DETALLES</button></div>
        <div id="estrella"><img src="../Img/estrella-fav.png" alt="estrella" width="55px"></div>
      </div>
    `;

    contenedor.appendChild(element);
  });
}

function aplicarLinksEstáticosConNombre() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  if (!nombre) return;

  const catalogo = document.getElementById("link-catalogo");
  const favoritos = document.getElementById("link-favoritos");
  const perfil = document.getElementById("link-perfil");
  const icono = document.getElementById("link-icono");

  if (catalogo) catalogo.href = `Catalogo.html?nombre=${nombre}`;
  if (favoritos) favoritos.href = `Favoritos.html?nombre=${nombre}`;
  if (perfil) perfil.href = `Profile.html?nombre=${nombre}`;
  if (icono) icono.href = `Profile.html?nombre=${nombre}`;
}

function configurarBuscador(favoritosData) {
  const buscador = document.getElementById("input-buscador");

  if (!buscador) return;

  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase().trim();

    if (texto === "") {
      mostrarFavoritos(favoritosData);
    } else {
      const filtrados = favoritosData.filter(p =>
  p.name.toLowerCase().includes(texto)
);

      mostrarFavoritos(filtrados);
    }
  });
}
