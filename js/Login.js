// Arreglo de 3 usuarios________________________________________________________________________________________________________________

const usuarios = [
  { nombre: "Luke", contraseña: "1234" },
  { nombre: "Leia", contraseña: "4567" },
  { nombre: "Han", contraseña: "7890" }
];

let usuarioLogueado = null;



// Funcion validar usuario______________________________________________________________________________________________________________

function iniciarSesion(nombre, contraseña) {
  const usuario = usuarios.find(u => u.nombre === nombre && u.contraseña === contraseña);
  if (!usuario) {
    return { exito: false, mensaje: "❌Usuario o contraseña incorrectos." };
  }
  return { exito: true, mensaje: `✅Bienvenido, ${usuario.nombre}`, usuario };
}

document.getElementById("btn-login").addEventListener("click", () => {
  const nombre = document.querySelector('input[name="username"]').value;
  const contraseña = document.querySelector('input[name="password"]').value;

  const resultado = iniciarSesion(nombre, contraseña);

  alert(resultado.mensaje);

  if (resultado.exito) {
  const u = resultado.usuario;
  // Guardar usuario en localStorage
  localStorage.setItem("usuarioLogueado", JSON.stringify(u));
  // Redirigir al catálogo
  window.location.href = `Catalogo.html?nombre=${u.nombre}&correo=${u.correo}&contraseña=${u.contraseña}`;
}
});

