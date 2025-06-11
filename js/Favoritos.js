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
