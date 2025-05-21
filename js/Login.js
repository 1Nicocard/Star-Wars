// Usuarios registrados en memoria
const usuarios = [
  { nombre: "Luke", contraseña: "1234" },
  { nombre: "Leia", contraseña: "4567" },
  { nombre: "Han", contraseña: "7890" }
];

let usuarioLogueado = null;

// Función para validar login
function iniciarSesion(nombre, contraseña) {
  const usuario = usuarios.find(u => u.nombre === nombre && u.contraseña === contraseña);

  if (!usuario) {
    return { exito: false, mensaje: "❌ Usuario o contraseña incorrectos." };
  }

  usuarioLogueado = usuario;
  return { exito: true, mensaje: `✅ Bienvenido, ${usuario.nombre}` };
}

// Escuchar clic en "ACCEDER"
document.getElementById("btn-login").addEventListener("click", () => {
  const nombre = document.querySelector('input[name="username"]').value;
  const contraseña = document.querySelector('input[name="password"]').value;

  const resultado = iniciarSesion(nombre, contraseña);

  alert(resultado.mensaje);

  if (resultado.exito) {
    window.location.href = "Catalogo.html";
  }
});

