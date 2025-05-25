document.addEventListener("DOMContentLoaded", () => {
  // Tomar el nombre desde la URL
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  // Establecer enlaces de navegación
  aplicarLinksEstáticosConNombre();

  // Buscar el usuario
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

  // Mostrar personajes favoritos
  usuario.favoritos.forEach(id => {
    const personaje = personajes.find(p => p.id === id);

    if (personaje) {
      const div = document.createElement("div");
      div.className = "favorito-item";

      div.innerHTML = `
      <div><img src="${personaje.imagen}" alt="${personaje.nombre}" width="340px" height="450px"></div>
      <div id="texto"><h2 id="h2b">${personaje.nombre.toUpperCase()}</h2></div>
      <div id="boto-estrella">
        <div><button id="Boton" onclick="verDetalle(${personaje.id})">MÁS DETALLES</button></div>
      <div id="estrella"><img src="../Assets/estrella.png" alt="favorito" width="55px"></div>
      </div>
      `;


      contenedor.appendChild(div);
    }
  });
});

// Establece los enlaces de navegación con el nombre del usuario desde la URL

function aplicarLinksEstáticosConNombre() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  if (!nombre) return;

  const favoritos = document.getElementById("link-favoritos");
  const perfil = document.getElementById("link-perfil");
  const icono = document.getElementById("link-icono");
  const catalogo = document.getElementById("link-catalogo") 

  if (favoritos) favoritos.href = `Favoritos.html?nombre=${nombre}`;
  if (perfil) perfil.href = `Profile.html?nombre=${nombre}`;
  if (icono) icono.href = `Profile.html?nombre=${nombre}`;
  if (catalogo) catalogo.href = `Catalogo.html?nombre=${nombre}`; 
}

