// Obtener el usuario logueado desde localStorage
const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

// Verificamos si hay un usuario logueado
if (usuario) {
  // Insertamos los datos en los elementos del perfil
  document.getElementById("username").textContent = usuario.nombre;
  document.getElementById("password").textContent = "**********"; // no mostramos la contraseña real
  document.getElementById("email").textContent = usuario.correo;
} else {
  // Si no hay usuario, redirigimos al login
  alert("Debes iniciar sesión para ver tu perfil.");
  window.location.href = "Login.html";
}

document.querySelector(".cerrar-button").addEventListener("click", () => {
  localStorage.removeItem("usuarioLogueado");
});