// Función para cargar la lista de usuarios almacenados en localStorage__________________________________________________________________________________

function cargarUsuarios() {
  const datos = localStorage.getItem("usuarios");
  return datos ? JSON.parse(datos) : []; // Si hay datos, los convierte a objeto. Si no, devuelve una lista vacía.
}

// Función para guardar en localStorage el correo del usuario que ha iniciado sesión___________________________________________________________________

function guardarSesion(correo) {
  localStorage.setItem("correoLogueado", correo);
}

// Función para obtener el correo del usuario que tiene la sesión activa______________________________________________________________________________

function obtenerCorreoLogueado() {
  return localStorage.getItem("correoLogueado");
}

// Función para cerrar la sesión eliminando el correo guardado del usuario logueado_____________________________________________________________________

function cerrarSesion() {
  localStorage.removeItem("correoLogueado");
}

// Función para iniciar sesión verificando correo y contraseña_________________________________________________________________________________________


function iniciarSesion(correo, contraseña) {
  // Validar que ambos campos estén llenos
  if (!correo || !contraseña) {
    return { exito: false, mensaje: "🌌Correo y contraseña son obligatorios" };
  }

  const usuarios = cargarUsuarios();

  // Buscar un usuario que su correo y contraseña coincidan__________________________________________________________________________________________

  const usuarioEncontrado = usuarios.find(
    (u) =>
      u.correo.trim().toLowerCase() === correo.trim().toLowerCase() &&
      u.contraseña === contraseña
  );

  // Si no se encuentra, retornar error______________________________________________________________________________________________________________

  if (!usuarioEncontrado) {
    return { exito: false, mensaje: "❌Correo o contraseña incorrectos" };
  }

  // Si se encuentra, guardar su sesión y retornar éxito___________________________________________________________________________________________

  guardarSesion(usuarioEncontrado.correo);
  return { exito: true, mensaje: "✅Inicio de sesión exitoso" };
}

// Esperar a que cargue todo el documento para asociar eventos_______________________________________________________________________________________

document.addEventListener("DOMContentLoaded", () => {
  const botonLogin = document.getElementById("btn-login");

  // Validar que el botón exista_________________________________________________________________________________________________________________________

  if (!botonLogin) {
    console.error("No se encontró el botón con id 'btn-login'");
    return;
  }

  // Agregar el evento al botón iniciar sesión__________________________________________________________________________________________________________________

  botonLogin.addEventListener("click", () => {
    // Obtener los valores de correo y contraseña ingresados
    const correo = document.querySelector('input[name="username"]').value;
    const contraseña = document.querySelector('input[name="password"]').value;

    // Llamar a la función de inicio de sesión y mostrar el mensaje_______________________________________________________________________________________

    const resultado = iniciarSesion(correo, contraseña);
    alert(resultado.mensaje);

    // Si el inicio de sesión fue exitoso, redirigir al catálogo________________________________________________________________________________________

    if (resultado.exito) {
      window.location.href = "Catalogo.html";
    }
  });
});
