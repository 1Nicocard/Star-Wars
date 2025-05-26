document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  const usuario = usuarios.find(u => u.nombre === nombre);

  if (!usuario) return;

  // Mostrar los datos del usuario en los campos del formulario___________________________________________________________________________________________________________
  document.getElementById("username").value = usuario.nombre;
  document.getElementById("email").value = usuario.correo;
  document.getElementById("password").value = usuario.contraseña;

  // Mostrar la imagen del perfil___________________________________________________________________________________________________________
const profileImage = document.querySelector(".profile-picture img");
if (usuario.foto && profileImage) {
  profileImage.src = usuario.foto;
}
// Redireccionar la flecha al perfil___________________________________________________________________________________________________________
const flecha = document.querySelector(".back-arrow");
if (flecha) {
  flecha.href = `Profile.html?nombre=${encodeURIComponent(nombre)}`;
}

  // Función del botón "GUARDAR"___________________________________________________________________________________________________________
  const guardarBtn = document.querySelector(".edit-button");
  if (guardarBtn) {
    guardarBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Obtener valores actualizados
      const nuevoNombre = document.getElementById("username").value;
      const nuevoCorreo = document.getElementById("email").value;
      const nuevaContraseña = document.getElementById("password").value;

      // Actualizar los datos en el array de usuarios (esto no es permanente)___________________________________________________________________________________________________________
      const index = usuarios.findIndex(u => u.nombre === nombre);
      if (index !== -1) {
        usuarios[index].nombre = nuevoNombre;
        usuarios[index].correo = nuevoCorreo;
        usuarios[index].contraseña = nuevaContraseña;
      }

      // Redirigir al perfil con el nuevo nombre___________________________________________________________________________________________________________
      window.location.href = `Profile.html?nombre=${encodeURIComponent(nuevoNombre)}`;
    });
  }
});
