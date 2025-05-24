document.addEventListener("DOMContentLoaded", () => {
  const botonLogin = document.getElementById("btn-login");

  if (!botonLogin) {
    console.error("No se encontró el botón con id 'btn-login'");
    return;
  }

  botonLogin.addEventListener("click", () => {
    const nombre = document.querySelector('input[name="username"]').value;
    const contraseña = document.querySelector('input[name="password"]').value;

    const resultado = iniciarSesion(nombre, contraseña); // viene de Sesion.js

    alert(resultado.mensaje);

    if (resultado.exito) {
      // Redirigir al catálogo con el nombre en la URL
      const usuario = obtenerUsuarioLogueado(); // ya quedó guardado internamente en iniciarSesion
      const query = `?nombre=${encodeURIComponent(usuario.nombre)}`;
      window.location.href = "Catalogo.html" + query;
    }
  });
});
