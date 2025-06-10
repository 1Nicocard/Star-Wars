// Cargar usuarios desde localStorage
function cargarUsuarios() {
  const datos = localStorage.getItem("usuarios");
  return datos ? JSON.parse(datos) : [];
}

// Guardar el correo del usuario logueado
function guardarSesion(correo) {
  localStorage.setItem("correoLogueado", correo);
}

// Obtener correo del usuario logueado
function obtenerCorreoLogueado() {
  return localStorage.getItem("correoLogueado");
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("correoLogueado");
}

// Verificar login (solo con correo y contraseña)
function iniciarSesion(correo, contraseña) {
  if (!correo || !contraseña) {
    return { exito: false, mensaje: "🌌Correo y contraseña son obligatorios." };
  }

  const usuarios = cargarUsuarios();
  const usuarioEncontrado = usuarios.find(
    (u) =>
      u.correo.trim().toLowerCase() === correo.trim().toLowerCase() &&
      u.contraseña === contraseña
  );

  if (!usuarioEncontrado) {
    return { exito: false, mensaje: "❌Correo o contraseña incorrectos." };
  }

  guardarSesion(usuarioEncontrado.correo);
  return { exito: true, mensaje: "✅Inicio de sesión exitoso" };
}

// Listener para login
document.addEventListener("DOMContentLoaded", () => {
  const botonLogin = document.getElementById("btn-login");

  if (!botonLogin) {
    console.error("No se encontró el botón con id 'btn-login'");
    return;
  }

  botonLogin.addEventListener("click", () => {
    const correo = document.querySelector('input[name="username"]').value;
    const contraseña = document.querySelector('input[name="password"]').value;

    const resultado = iniciarSesion(correo, contraseña);
    alert(resultado.mensaje);

    if (resultado.exito) {
      window.location.href = "Catalogo.html";
    }
  });
});