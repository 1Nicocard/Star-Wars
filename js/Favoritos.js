document.addEventListener("DOMContentLoaded", () => {

// Tomar el nombre desde la URL

  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

// Establecer enlaces de navegación

  aplicarLinksEstáticosConNombre();

 // Buscar el usuario

  const usuario = usuarios.find(u => u.nombre === nombre);
  const contenedor = document.getElementById("carrusel-dinamico");

  if (!usuario) {
    document.getElementById("favoritos-container").textContent = "Usuario no encontrado.";
    return;
  }

  if (!usuario.favoritos || usuario.favoritos.length === 0) {
    document.getElementById("favoritos-container").textContent = "No tienes personajes favoritos aún.";
    return;
  }

  // Mostrar personajes favoritos

  usuario.favoritos.forEach(id => {
    const personaje = personajes.find(p => p.id === id);

    if (personaje) {
      const element = document.createElement("div");
      element.className = "element";

      element.innerHTML = `
        <div><img src="${personaje.imagen}" alt="${personaje.nombre}" width="340px" height="450px"></div>
        <div id="texto">
          <h2 id="h2b">${personaje.nombre.toUpperCase()}</h2>
        </div>
        <div id="boto-estrella">
          <div><button id="Boton" onclick="verDetalle(${personaje.id})">MÁS DETALLES</button></div>
          <div id="estrella"><img src="../Assets/estrella-fav.png" alt="estrella" width="55px"></div>
        </div>
      `;

      contenedor.appendChild(element);
    }
  });

  // Lógica de navegación con botones
  let currentIndex = 0;
  const total = usuario.favoritos.length;

  document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < total - 1) {
      currentIndex++;
      contenedor.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      contenedor.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });
});

  // Guardamos los personajes favoritos en la variable global
  favoritosData = usuario.favoritos.map(id => personajes.find(p => p.id === id)).filter(Boolean);

  mostrarFavoritos(favoritosData);
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

// Buscador funcionando
document.getElementById("input-buscador").addEventListener("input", () => {
  const texto = document.getElementById("input-buscador").value.toLowerCase().trim();

  if (texto === "") {
    mostrarFavoritos(); // Muestra todos
  } else {
    const filtrados = favoritosData.filter(p =>
      p.nombre.toLowerCase().includes(texto)
    );
    mostrarFavoritos(filtrados); // Muestra solo los que coincidan
  }
});