// Función para obtener la lista de usuarios guardados en localStorage_______________________________________________________________________________________

function cargarUsuarios() {
  const datos = localStorage.getItem("usuarios");
  return datos ? JSON.parse(datos) : []; // Si no hay datos, retorna una lista vacía
}

// Función para guardar una lista actualizada de usuarios en localStorage_________________________________________________________________________________

function guardarUsuarios(listaUsuarios) {
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}

// Función principal para registrar un nuevo usuario_________________________________________________________________________________________________

function registrarUsuario(nombre, correo, contraseña, confirmar) {
  // Validar que ningún campo esté vacío
  if (!nombre || !correo || !contraseña || !confirmar) {
    return { exito: false, mensaje: "🪐Todos los campos son obligatorios" };
  }

  // Validar que el correo contenga "@" y termine en ".com"
  const correoValido = correo.includes("@") && correo.endsWith(".com");
  if (!correoValido) {
    return { exito: false, mensaje: "📧 Ingresa un correo válido que contenga '@' y termine en '.com'" };
  }

  const usuarios = cargarUsuarios();

  // Verificar si el correo ya está registrado________________________________________________________________________________________________________

  const yaExiste = usuarios.some((u) => u.correo === correo);
  if (yaExiste) {
    return { exito: false, mensaje: "✨Este correo ya está registrado" };
  }

  // Verificar que las contraseñas coincidan__________________________________________________________________________________________________________

  if (contraseña !== confirmar) {
    return { exito: false, mensaje: "💥Las contraseñas no coinciden" };
  }

  // Agregar el nuevo usuario al arreglo y guardar en localStorage_______________________________________________________________________________________

  usuarios.push({ nombre, correo, contraseña });
  guardarUsuarios(usuarios);

  return { exito: true, mensaje: "🚀Usuario registrado correctamente" };
}

// Capturar el evento de clic en el botón de registro__________________________________________________________________________________________________

document.getElementById("btn-registrar").addEventListener("click", () => {
  // Obtener los valores ingresados en el formulario
  const nombre = document.querySelector('input[name="nombre"]').value;
  const correo = document.querySelector('input[name="email"]').value;
  const contraseña = document.querySelector('input[name="password"]').value;
  const confirmar = document.querySelector('input[name="confirm-password"]').value;

  // Registrar el usuario y guardar el resultado______________________________________________________________________________________________________

  const resultado = registrarUsuario(nombre, correo, contraseña, confirmar);

  // Mostrar el mensaje correspondiente_____________________________________________________________________________________________________________

  alert(resultado.mensaje);

  const btnIrLogin = document.getElementById("btn-ir-login");

  if (resultado.exito) {
    // Si el registro fue exitoso, mostrar el botón para ir al login_______________________________________________________________________________

    btnIrLogin.style.display = "inline";

    // Al hacer clic en ese botón, redirigir a la página de login_____________________________________________________________________________

    btnIrLogin.addEventListener("click", () => {
      window.location.href = "Login.html";
    });
  } else {
    // Si hubo error, ocultar el botón de ir al login_________________________________________________________________________________________________
    btnIrLogin.style.display = "none";
  }
});
