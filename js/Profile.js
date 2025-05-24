document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener el nombre desde la URL
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  // 2. Buscar el usuario correspondiente
  const usuario = usuarios.find(u => u.nombre === nombre);

  // 3. Mostrar los datos en el perfil
  if (!usuario) {
    document.getElementById("perfil-container").innerHTML = "<p>Usuario no encontrado.</p>";
    return;
  }

  const contenedor = document.getElementById("perfil-container");

  contenedor.innerHTML = `
    <h2>Mi Perfil</h2>
    <p><strong>Nombre:</strong> ${usuario.nombre}</p>
    <p><strong>Correo:</strong> ${usuario.correo}</p>
    <p><strong>Contraseña:</strong> ${usuario.contraseña}</p>
  `;
});