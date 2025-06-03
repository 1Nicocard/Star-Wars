// Usuarios para iniciar sesion _____________________________________________________________________________________________________________________________

const usuarios = [
  {
    nombre: "Luke",
    contraseña: "1234",
    correo: "luke@jedi.com",
    favoritos: [1, 3, 12], // Yoda, Leia, Obi-Wan
    foto: "../Assets/../Img/Foto de perfil.jpg"
  },
  {
    nombre: "Leia",
    contraseña: "4567",
    correo: "leia@rebeldes.com",
    favoritos: [2, 10, 15], // Luke Skywalker, Han Solo, Grogu
    foto: "../Assets/../Img/Foto de perfil2.jpg"
  },
  {
    nombre: "Han",
    contraseña: "7890",
    correo: "han@falcon.com",
    favoritos: [4, 11, 5], // Chewbacca, C-3PO, R2-D2
    foto: "../Assets/../Img/Foto de perfil3.jpg"
  },
  {
    nombre: "Yoda",
    contraseña: "1011",
    correo: "yoda@kiut.com",
    favoritos: [15], //Grogu
    foto: "../Assets/../Img/Foto de perfil4.jpg"
  },

  {
    nombre: "Obi",
    contraseña: "1213",
    correo: "obi@wan.com",
    favoritos: [], //No tiene favoritos
    foto: "../Assets/../Img/Foto de perfil5.jpg"
  },
];

// Variable que guarda el usuario activo ___________________________________________________________________________________________________

let usuarioLogueado = null;

// Iniciar sesión _____________________________________________________________________________________________________________________________

function iniciarSesion(nombre, contraseña) {
  const usuario = usuarios.find(u => u.nombre === nombre && u.contraseña === contraseña);
  if (usuario) {
    usuarioLogueado = usuario;
    return { exito: true, mensaje: `✅ Bienvenido, ${usuario.nombre}` };
  } else {
    return { exito: false, mensaje: "❌ Usuario o contraseña incorrectos." };
  }
}

// Cerrar sesión _____________________________________________________________________________________________________________________________

function cerrarSesion() {
  usuarioLogueado = null;
  window.location.href = "Login.html";
}

// Obtener usuario activo _____________________________________________________________________________________________________________________
function obtenerUsuarioLogueado() {
  return usuarioLogueado;
}
