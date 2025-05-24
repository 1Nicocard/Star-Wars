document.addEventListener("DOMContentLoaded", () => {
  // 1. Tomar el nombre desde la URL
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  // 2. Buscar el usuario en la base de datos (Sesion.js)
  const usuario = usuarios.find(u => u.nombre === nombre);

  // 3. Verificar si el usuario existe y tiene favoritos
  const contenedor = document.getElementById("favoritos-container");

  if (!usuario) {
    contenedor.textContent = "Usuario no encontrado.";
    return;
  }

  if (!usuario.favoritos || usuario.favoritos.length === 0) {
    contenedor.textContent = "No tienes personajes favoritos aún.";
    return;
  }

  // 4. Mostrar los personajes favoritos
  usuario.favoritos.forEach(id => {
    const personaje = personajes.find(p => p.id === id);

    if (personaje) {
      const div = document.createElement("div");
      div.className = "favorito-item";

      div.innerHTML = `
        <img src="${personaje.imagen}" alt="${personaje.nombre}" width="200px">
        <h3>${personaje.nombre}</h3>
        <p>${personaje.descripcion}</p>
      `;

      contenedor.appendChild(div);
    }
  });
});