document.addEventListener("DOMContentLoaded", () => {
  const correoLogueado = localStorage.getItem("correoLogueado");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (!correoLogueado) {
    alert("⚠️ No hay sesión activa. Inicia sesión para ver tu catálogo.");
    window.location.href = "Login.html";
    return;
  }

  const usuario = usuarios.find(u => u.correo === correoLogueado);
  if (!usuario) {
    alert("❌ Usuario no encontrado.");
    return;
  }

  // Mostrar bienvenida solo si no se ha mostrado aún en esta sesión
if (localStorage.getItem("mostrarSaludo") === "true") {
  alert(`👋 ¡Bienvenido, ${usuario.nombre}!`);
  localStorage.removeItem("mostrarSaludo");
}

  // Asegurar que el nombre esté en la URL
  const params = new URLSearchParams(window.location.search);
  const yaTieneNombreEnURL = params.get("nombre");

  if (!yaTieneNombreEnURL) {
    window.location.search = `?nombre=${encodeURIComponent(usuario.nombre)}`;
    return;
  }

  aplicarLinksEstáticosConNombre(usuario.nombre);
  obtenerPersonajes().then(personajes => {
    mostrarCatalogo(personajes);
  });
});







// Establece los enlaces de la nav con el nombre del usuario ________________________________________________________________________________________

function aplicarLinksEstáticosConNombre() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  if (!nombre) return;

  const favoritos = document.getElementById("link-favoritos");
  const perfil = document.getElementById("link-perfil");
  const icono = document.getElementById("link-icono");
  const imagenPerfil = document.getElementById("imagenperfil");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (favoritos) favoritos.href = `Favoritos.html?nombre=${nombre}`;
  if (perfil) perfil.href = `Profile.html?nombre=${nombre}`;
  if (icono) icono.href = `Profile.html?nombre=${nombre}`;



}


