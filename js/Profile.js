document.addEventListener("DOMContentLoaded", () => {
  const correoLogueado = localStorage.getItem("correoLogueado");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const contenedor = document.getElementById("perfil-container");

  if (!correoLogueado) {
    contenedor.innerHTML = "<p style='color: white; text-align: center;'>No hay sesión activa.</p>";
    return;
  }

  let usuario = usuarios.find(u => u.correo === correoLogueado);
  if (!usuario) {
    contenedor.innerHTML = "<p style='color: white; text-align: center;'>Usuario no encontrado.</p>";
    return;
  }

  // Elementos
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const profileImage = document.querySelector(".profile-picture img");
  const fotoInput = document.getElementById("fotoInput");
  const editarBtn = document.getElementById("editarBtn");
  const guardarBtn = document.getElementById("guardarBtn");
  const cerrarSesionBtn = document.querySelector(".cerrar-button");
  const flecha = document.getElementById("flecha-regreso");

  let modoEdicion = false;

  // Mostrar datos
  usernameInput.value = usuario.nombre;
  emailInput.value = usuario.correo;
  passwordInput.value = "********";
  usernameInput.disabled = true;
  emailInput.disabled = true;
  passwordInput.disabled = true;

  fotoInput.style.display = "none";
  guardarBtn.style.display = "none";

  if (usuario.foto && profileImage) {
    profileImage.src = usuario.foto;
  }

  // Activar edición
  editarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modoEdicion = true;
    usernameInput.disabled = false;
    emailInput.disabled = false;
    passwordInput.disabled = false;
    passwordInput.value = usuario.contraseña;

    fotoInput.style.display = "block";
    guardarBtn.style.display = "inline-block";
    editarBtn.style.display = "none";
  });

  // Cambiar imagen al hacer clic
  profileImage.addEventListener("click", () => {
    if (modoEdicion) {
      fotoInput.click();
    }
  });

  // Previsualización de la imagen
  fotoInput.addEventListener("change", () => {
    const archivo = fotoInput.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = () => {
        profileImage.src = reader.result;
        usuario.foto = reader.result;
      };
      reader.readAsDataURL(archivo);
    }
  });

  // Guardar cambios
  guardarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nuevoNombre = usernameInput.value.trim();
    const nuevoCorreo = emailInput.value.trim().toLowerCase();
    const nuevaContraseña = passwordInput.value;

    if (!nuevoNombre || !nuevoCorreo || !nuevaContraseña) {
      alert("❌ Todos los campos son obligatorios.");
      return;
    }

    const otroUsuario = usuarios.find(u =>
      u.correo === nuevoCorreo && u.correo !== usuario.correo
    );

    if (otroUsuario) {
      alert("❌ Ya existe un usuario con ese correo.");
      return;
    }

    // Actualizar datos
    usuario.nombre = nuevoNombre;
    usuario.correo = nuevoCorreo;
    usuario.contraseña = nuevaContraseña;

    const index = usuarios.findIndex(u => u.correo === correoLogueado);
    usuarios[index] = usuario;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("correoLogueado", nuevoCorreo);

    // Actualizar referencia al nuevo usuario
    usuario = usuarios[index];

    // Desactivar edición
    modoEdicion = false;
    usernameInput.disabled = true;
    emailInput.disabled = true;
    passwordInput.disabled = true;
    passwordInput.value = "********";

    fotoInput.style.display = "none";
    guardarBtn.style.display = "none";
    editarBtn.style.display = "inline-block";

    alert("✅ Perfil actualizado correctamente.");
  });

  // Cerrar sesión
  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("correoLogueado");
      window.location.href = "../Main.html";
    });
  }

  // Flecha de regreso
  if (flecha) {
    flecha.href = "Catalogo.html";
  }
});
