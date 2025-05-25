document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  const usuario = usuarios.find(u => u.nombre === nombre);

  if (!usuario) {
    const contenedor = document.getElementById("perfil-container");
    contenedor.innerHTML = "<p style='color: white; text-align: center;'>Usuario no encontrado.</p>";
    return;
  }

  document.getElementById("username").value = usuario.nombre;
  document.getElementById("email").value = usuario.correo;
  document.getElementById("password").value = usuario.contraseña.replace(/./g, "*");

  // Mostrar la imagen del perfil
  const profileImage = document.querySelector(".profile-picture img");
  if (usuario.foto && profileImage) {
    profileImage.src = usuario.foto;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cerrarSesionBtn = document.getElementById("cerrarSesionBtn");

  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener("click", () => {


      window.location.href = "../Pages/Main.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const editarBtn = document.getElementById("editarBtn");

  if (editarBtn) {
    editarBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const params = new URLSearchParams(window.location.search);
      const nombre = params.get("nombre");

      // Redirigir a PerfilEdicion.html con el nombre como parámetro
      if (nombre) {
        window.location.href = `../Pages/Profile edition.html?nombre=${encodeURIComponent(nombre)}`;
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  const flecha = document.getElementById("flecha-regreso");
  if (nombre && flecha) {
    flecha.href = `Catalogo.html?nombre=${encodeURIComponent(nombre)}`;
  }
});

