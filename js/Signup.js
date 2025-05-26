// Arreglo de 5 usuarios registrados_____________________________________________________________________________________________________

const usuarios = [
  { nombre: "Luke", correo: "luke@jedi.com", contraseña: "1234" },
  { nombre: "Leia", correo: "leia@rebeldes.com", contraseña: "4567" },
  { nombre: "Han", correo: "han@falcon.com", contraseña: "7890" },
  { nombre: "Yoda", correo: "yoda@kiut.com", contraseña: "1011" },
  { nombre: "Obi", correo: "obi@wan.com", contraseña: "1213" }

];

// Funciones y mensajes_____________________________________________________________________________________________________

function registrarUsuario(nombre, correo, contraseña, confirmar) {
  if (!nombre || !correo || !contraseña || !confirmar) {
    return { exito: false, mensaje: "🪐Todos los campos son obligatorios." };
  }

  const yaExiste = usuarios.some((u) => u.correo === correo);
  if (yaExiste) {
    return { exito: false, mensaje: "✨Este correo ya está registrado." };
  }

  if (contraseña !== confirmar) {
    return { exito: false, mensaje: "💥Las contraseñas no coinciden." };
  }

  usuarios.push({ nombre, correo, contraseña });
  return { exito: true, mensaje: "🚀Usuario registrado correctamente." };
}

// Evento del boton registrarse________________________________________________________________________________________________________

document.getElementById("btn-registrar").addEventListener("click", () => {
  const nombre = document.querySelector('input[name="nombre"]').value;
  const correo = document.querySelector('input[name="email"]').value;
  const contraseña = document.querySelector('input[name="password"]').value;
  const confirmar = document.querySelector('input[name="confirm-password"]').value;

  const resultado = registrarUsuario(nombre, correo, contraseña, confirmar);


  // Mostrar mensaje____________________________________________________________________________________________________________________

  alert(resultado.mensaje);

  const btnIrLogin = document.getElementById("btn-ir-login");
  if (resultado.exito) {
    btnIrLogin.style.display = "inline";
  } else {
    btnIrLogin.style.display = "none";
  }
});

// Evento del boton ir al login______________________________________________________________________________________________________

document.getElementById("btn-ir-login").addEventListener("click", () => {
  window.location.href = "Login.html";
});
