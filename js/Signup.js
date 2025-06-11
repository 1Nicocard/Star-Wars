// Funciones para manejar usuarios en localStorage____________________________________________________________

function cargarUsuarios() {
  const datos = localStorage.getItem("usuarios");
  return datos ? JSON.parse(datos) : [];
}

function guardarUsuarios(listaUsuarios) {
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}

function registrarUsuario(nombre, correo, contraseña, confirmar) {
  if (!nombre || !correo || !contraseña || !confirmar) {
    return { exito: false, mensaje: "🪐Todos los campos son obligatorios" };
  }

  const usuarios = cargarUsuarios();
  const yaExiste = usuarios.some((u) => u.correo === correo);
  if (yaExiste) {
    return { exito: false, mensaje: "✨Este correo ya está registrado" };
  }

  if (contraseña !== confirmar) {
    return { exito: false, mensaje: "💥Las contraseñas no coinciden" };
  }

  usuarios.push({ nombre, correo, contraseña });
  guardarUsuarios(usuarios);
  return { exito: true, mensaje: "🚀Usuario registrado correctamente" };
}

document.getElementById("btn-registrar").addEventListener("click", () => {
  const nombre = document.querySelector('input[name="nombre"]').value;
  const correo = document.querySelector('input[name="email"]').value;
  const contraseña = document.querySelector('input[name="password"]').value;
  const confirmar = document.querySelector('input[name="confirm-password"]').value;

  const resultado = registrarUsuario(nombre, correo, contraseña, confirmar);

  alert(resultado.mensaje);

  const btnIrLogin = document.getElementById("btn-ir-login");

if (resultado.exito) {
  btnIrLogin.style.display = "inline";

  //Redirige al hacer clic
  btnIrLogin.addEventListener("click", () => {
    window.location.href = "Login.html";
  });

} else {
  btnIrLogin.style.display = "none";
}
});