document.addEventListener("DOMContentLoaded", () => {
  const correoLogueado = localStorage.getItem("correoLogueado");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const contenedor = document.getElementById("perfil-container");

  if (!correoLogueado) {
    contenedor.innerHTML = "<p style='color: white; text-align: center;'>No hay sesión activa.</p>";
    return;
  }

  let usuario = usuarios.find(u => u.correo === correoLogueado);
  if (!usuario) {
    contenedor.innerHTML = "<p style='color: white; text-align: center;'>Usuario no encontrado.</p>";
    return;
  }

  // Elementos
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const profileImage = document.querySelector(".profile-picture img");
  const cerrarSesionBtn = document.querySelector(".cerrar-button");
  const flecha = document.getElementById("flecha-regreso");

  // Mostrar datos
  if (usernameInput) usernameInput.value = usuario.nombre;
  if (emailInput) emailInput.value = usuario.correo;
  if (passwordInput) passwordInput.value = '*'.repeat(usuario.contraseña.length);

  if (usernameInput) usernameInput.disabled = true;
  if (emailInput) emailInput.disabled = true;
  if (passwordInput) passwordInput.disabled = true;

  if (usuario.foto && profileImage) {
    profileImage.src = usuario.foto;
  }

  // Cerrar sesión
  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("correoLogueado");
      window.location.href = "../Main.html";
    });
  }

  // Flecha de regreso
  flecha.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `Catalogo.html?correo=${encodeURIComponent(usuario.correo)}`;
});
});
