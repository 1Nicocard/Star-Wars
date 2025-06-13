
// Mostrar la información del usuario que inició sesión________________________________________________________________________________________

document.addEventListener("DOMContentLoaded", () => {
  const correoLogueado = localStorage.getItem("correoLogueado"); // Obtener el correo del usuario que inició sesión
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Obtener todos los usuarios registrados
  const contenedor = document.getElementById("perfil-container"); // Contenedor donde se mostrará la info del perfil

  // Si no hay usuario logueado, mostrar mensaje___________________________________________________________________________________________________
  if (!correoLogueado) {
    contenedor.innerHTML = "<p style='color: white; text-align: center;'>No hay sesión activa.</p>";
    return;
  }

  // Buscar el usuario que coincide con el correo logueado_______________________________________________________________________________________________
  let usuario = usuarios.find(u => u.correo === correoLogueado);
  if (!usuario) {
    contenedor.innerHTML = "<p style='color: white; text-align: center;'>Usuario no encontrado.</p>";
    return;
  }

  // Obtener los elementos del formulario del perfil____________________________________________________________________________________________________
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const cerrarSesionBtn = document.querySelector(".cerrar-button");
  const flecha = document.getElementById("flecha-regreso");

  // Mostrar los datos del usuario en los campos _____________________________________________________________________________________________________
  if (usernameInput) usernameInput.value = usuario.nombre;
  if (emailInput) emailInput.value = usuario.correo;
  if (passwordInput) passwordInput.value = '*'.repeat(usuario.contraseña.length); // Mostrar la contraseña como asteriscos

  // Deshabilitar los campos para que no se puedan editar___________________________________________________________________________________________
  if (usernameInput) usernameInput.disabled = true;
  if (emailInput) emailInput.disabled = true;
  if (passwordInput) passwordInput.disabled = true;

  

  // Eliminar el correo del localStorage y redirigir al inicio__________________________________________________________________________________________
  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("correoLogueado");
      window.location.href = "../Main.html"; 
    });
  }

  // Flecha para regresar al catálogo, manteniendo el correo en la URL___________________________________________________________________________________
  flecha.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `Catalogo.html?correo=${encodeURIComponent(usuario.correo)}`;
  });
});
