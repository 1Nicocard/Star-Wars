// Espera a que el DOM esté completamente cargado________________________________________________________________________________________________________

document.addEventListener("DOMContentLoaded", () => {

  // Obtiene el correo del usuario logueado desde localStorage__________________________________________________________________________________________

  const correoLogueado = localStorage.getItem("correoLogueado");


  // Obtiene los usuarios y personajes desde localStorage o arreglos vacíos si no existen_______________________________________________________________

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const personajes = JSON.parse(localStorage.getItem("personajes")) || [];

  // Busca el usuario que coincide con el correo logueado_____________________________________________________________________________________________

  const usuario = usuarios.find(u => u.correo === correoLogueado);

  // Selecciona el contenedor donde se mostrarán los personajes favoritos_____________________________________________________________________________

  const contenedor = document.getElementById("favoritos-container");

  // Asigna los enlaces con el nombre como parámetro en la URL________________________________________________________________________________________

  aplicarLinksEstáticosConNombre();

  // Si no se encuentra el usuario, muestra un mensaje_________________________________________________________________________________________________

  if (!usuario) {
    contenedor.textContent = "Usuario no encontrado.";
    return;
  }

  // Si el usuario no tiene personajes favoritos, muestra un mensaje_____________________________________________________________________________________

  if (!usuario.favoritos || usuario.favoritos.length === 0) {
    contenedor.textContent = "No tienes personajes favoritos aún.";
    return;
  }

  // Obtiene los datos completos de los personajes favoritos del usuario______________________________________________________________________________

  const favoritosData = usuario.favoritos
    .map(id => personajes.find(p => p.id === Number(id)))  // Busca cada personaje por ID
    .filter(Boolean);                                     // Elimina posibles valores nulos

  // Muestra los personajes favoritos en pantalla____________________________________________________________________________________________________

  mostrarFavoritos(favoritosData);

  // Configura el buscador para filtrar personajes por nombre_______________________________________________________________________________________

  configurarBuscador(favoritosData);
});


// Función que muestra los personajes favoritos en el contenedor________________________________________________________________________________________

function mostrarFavoritos(lista = []) {
  const contenedor = document.getElementById("favoritos-container");
  contenedor.innerHTML = ""; // Limpia el contenido actual__________________________________________________________________________________________

  // Obtiene el nombre desde los parámetros de la URL____________________________________________________________________________________________

  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  // Recorre la lista de personajes y crea las tarjetas__________________________________________________________________________________________

  lista.forEach(personaje => {
    const element = document.createElement("div");
    element.className = "element"; 

    // Estructura HTML de cada tarjeta_______________________________________________________________________________________________________________

    element.innerHTML = `
      <div><img src="${personaje.image}" alt="${personaje.name}" width="340px" height="450px"></div>
      <div id="texto">
        <h2 id="h2b">${personaje.name.toUpperCase()}</h2>
      </div>
      <div id="boto-estrella">
        <div><button id="Boton" onclick="verDetalle(${personaje.id}, '${nombre}')">MÁS DETALLES</button></div>
        <div id="estrella"><img src="../Img/estrella-fav.png" alt="estrella" width="55px"></div>
      </div>
    `;

    contenedor.appendChild(element); // Añade la tarjeta al contenedor_____________________________________________________________________________
  });
}

// Función que redirige al detalle del personaje con ID y nombre en la URL_________________________________________________________________________

function verDetalle(id, nombre) {
  window.location.href = `Element.html?id=${id}&nombre=${encodeURIComponent(nombre)}`;
}

// Función que asigna enlaces con el nombre actual del usuario en las URLs_____________________________________________________________________________

function aplicarLinksEstáticosConNombre() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  if (!nombre) return; // Si no hay nombre, no hace nada________________________________________________________________________________________________

  // Asigna los href a cada enlace de navegación_________________________________________________________________________________________________________

  const catalogo = document.getElementById("link-catalogo");
  const favoritos = document.getElementById("link-favoritos");
  const perfil = document.getElementById("link-perfil");
  const icono = document.getElementById("link-icono");

  if (catalogo) catalogo.href = `Catalogo.html?nombre=${nombre}`;
  if (favoritos) favoritos.href = `Favoritos.html?nombre=${nombre}`;
  if (perfil) perfil.href = `Profile.html?nombre=${nombre}`;
  if (icono) icono.href = `Profile.html?nombre=${nombre}`;
}

// Función que configura el input del buscador para filtrar favoritos___________________________________________________________________________________

function configurarBuscador(favoritosData) {
  const buscador = document.getElementById("input-buscador");

  if (!buscador) return;

  // Evento que se dispara cada vez que el usuario escribe en el buscador______________________________________________________________________________

  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase().trim();

    // Si no hay texto, muestra todos los favoritos______________________________________________________________________________________________________

    if (texto === "") {
      mostrarFavoritos(favoritosData);
    } else {
      // Filtra los personajes cuyo nombre contenga el texto buscado_____________________________________________________________________________________

      const filtrados = favoritosData.filter(p =>
        p.name.toLowerCase().includes(texto)
      );
      mostrarFavoritos(filtrados);
    }
  });
}
