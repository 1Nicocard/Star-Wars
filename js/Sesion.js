const usuarios = [
  {
    nombre: "Luke",
    contraseña: "1234",
    correo: "luke@jedi.com",
    favoritos: [1, 3, 12] // Yoda, Leia, Obi-Wan
  },
  {
    nombre: "Leia",
    contraseña: "4567",
    correo: "leia@rebeldes.com",
    favoritos: [2, 10, 15] // Luke Skywalker, Han Solo, Grogu
  },
  {
    nombre: "Han",
    contraseña: "7890",
    correo: "han@falcon.com",
    favoritos: [4, 11, 5, 6] // Chewbacca, C-3PO, R2-D2, Palpatine
  },
  {
    nombre: "Yoda",
    contraseña: "1011",
    correo: "yoda@kiut.com",
    favoritos: [15] //Grogu
  },

  {
    nombre: "Obi",
    contraseña: "1213",
    correo: "obi@wan.com",
    favoritos: [] //No tiene favoritos
  },
];

// Variable que guarda el usuario activo
let usuarioLogueado = null;

// Iniciar sesión
function iniciarSesion(nombre, contraseña) {
  const usuario = usuarios.find(u => u.nombre === nombre && u.contraseña === contraseña);
  if (usuario) {
    usuarioLogueado = usuario;
    return { exito: true, mensaje: `✅ Bienvenido, ${usuario.nombre}` };
  } else {
    return { exito: false, mensaje: "❌ Usuario o contraseña incorrectos." };
  }
}

// Cerrar sesión
function cerrarSesion() {
  usuarioLogueado = null;
  window.location.href = "Login.html";
}

// Obtener usuario activo
function obtenerUsuarioLogueado() {
  return usuarioLogueado;
}
