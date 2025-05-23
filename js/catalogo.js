// Mostrar los personajes en filas de 3
function mostrarCatalogo() {
  const contenedor = document.getElementById("container-mayor");
  contenedor.innerHTML = "";

  for (let i = 0; i < personajes.length; i += 3) {
    const fila = document.createElement("div");
    fila.className = "container-1";

    for (let j = i; j < i + 3 && j < personajes.length; j++) {
      const p = personajes[j];

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

// Redirige al detalle del personaje
function verDetalle(id) {
  window.location.href = `Element.html?id=${id}`;
}

// Establece los enlaces de navegación con el nombre del usuario desde la URL
function aplicarLinksEstáticosConNombre() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  if (!nombre) return;

  const favoritos = document.getElementById("link-favoritos");
  const perfil = document.getElementById("link-perfil");
  const icono = document.getElementById("link-icono");

  if (favoritos) favoritos.href = `Favoritos.html?nombre=${nombre}`;
  if (perfil) perfil.href = `Profile.html?nombre=${nombre}`;
  if (icono) icono.href = `Profile.html?nombre=${nombre}`;
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarCatalogo();
  aplicarLinksEstáticosConNombre();
});