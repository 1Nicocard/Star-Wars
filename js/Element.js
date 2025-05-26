// Detalle del elemento __________________________________________________________________________________________

const personajes = [
  {
    id: 1,
    nombre: "YODA",
    altura: "66 cm",
    masa: "17 kg",
    cabello: "Blanco",
    piel: "Verde",
    ojos: "Marrón",
    nacimiento: "896 BBY",
    genero: "Masculino",
    planeta: "Desconocido",
    imagen: "../Assets/yoda.webp",
    peliculas: [
      "../Assets/2.jpeg",
      "../Assets/3.jpeg",
      "../Assets/4.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg"
    ]
  },

  {
    id: 2,
    nombre: "LUKE SKYWALKER",
    altura: "172 cm",
    masa: "77 kg",
    cabello: "Rubio",
    piel: "Clara",
    ojos: "Azul",
    nacimiento: "19 BBY",
    genero: "Masculino",
    planeta: "Tatooine",
    imagen: "../Assets/Luke skywalker.png",
    peliculas: [
      "../Assets/4.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg",
      "../Assets/7.webp",
      "../Assets/8.webp",
      "../Assets/9.webp"
    ]
  },

  {
    id: 3,
    nombre: "LEIA ORGANA",
    altura: "150 cm",
    masa: "49 kg",
    cabello: "Castaño",
    piel: "Clara",
    ojos: "Marrón",
    nacimiento: "19 BBY",
    genero: "Femenino",
    planeta: "Alderaan",
    imagen: "../Assets/Leia_Organa.webp",
    peliculas: [
      "../Assets/4.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg",
      "../Assets/7.webp",
      "../Assets/8.webp",
      "../Assets/9.webp"
    ]
  },
  {
    id: 4,
    nombre: "WHEWBACCA",
    altura: "228 cm",
    masa: "112 kg",
    cabello: "Marrón",
    piel: "Desconocido",
    ojos: "Azul",
    nacimiento: "200 BBY",
    genero: "Masculino",
    planeta: "Kashyyyk",
    imagen: "../Assets/Chewbacca.webp",
    peliculas: [
      "../Assets/3.jpeg",
      "../Assets/4.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg",
      "../Assets/7.webp",
      "../Assets/8.webp",
      "../Assets/9.webp"
    ]
  },
  {
    id: 5,
    nombre: "R2-D2",
    altura: "96 cm",
    masa: "32 kg",
    cabello: "N/A",
    piel: "Blanco y azul",
    ojos: "Rojo",
    nacimiento: "33 BBY",
    genero: "Desconocido",
    planeta: "Naboo",
    imagen: "../Assets/R2-D2.webp",
    peliculas: [
      "../Assets/1.webp",
      "../Assets/2.jpeg",
      "../Assets/3.jpeg",
      "../Assets/4.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg",
      "../Assets/7.webp"
    ]
  },
  {
    id: 6,
    nombre: "PALPATINE",
    altura: "170 cm",
    masa: "75 kg",
    cabello: "Gris",
    piel: "Pálida",
    ojos: "Amarillo",
    nacimiento: "82 BBY",
    genero: "Masculino",
    planeta: "Naboo",
    imagen: "../Assets/Emperor_Palpatine.webp",
    peliculas: [
      "../Assets/1.webp",
      "../Assets/2.jpeg",
      "../Assets/3.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg",
      "../Assets/9.webp"
    ]
  },
  {
    id: 7,
    nombre: "DARTH VADER",
    altura: "202 cm",
    masa: "136 kg",
    cabello: "Ninguno",
    piel: "Pálida",
    ojos: "Amarillo",
    nacimiento: "41.9 BBY",
    genero: "Masculino",
    planeta: "Tatooine",
    imagen: "../Assets/DarthVader.webp",
    peliculas: [
      "../Assets/3.jpeg",
      "../Assets/4.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg"
    ]
  },
  {
    id: 8,
    nombre: "DARTH MAUL",
    altura: "175 cm",
    masa: "80 kg",
    cabello: "Ninguno",
    piel: "Rojo y negro",
    ojos: "Amarillo",
    nacimiento: "54 BBY",
    genero: "Masculino",
    planeta: "Dathomir",
    imagen: "../Assets/Darth-Maul.webp",
    peliculas: [
      "../Assets/1.webp"
    ]
  },
  {
    id: 9,
    nombre: "BB-8",
    altura: "67 cm",
    masa: "18 kg",
    cabello: "N/A",
    piel: "Blanco y naranja",
    ojos: "Negro",
    nacimiento: "Desconocido",
    genero: "Desconocido",
    planeta: "Desconocido",
    imagen: "../Assets/BB8.webp",
    peliculas: [
      "../Assets/7.webp",
      "../Assets/8.webp",
      "../Assets/9.webp"
    ]
  },
  {
    id: 10,
    nombre: "HAN SOLO",
    altura: "180 cm",
    masa: "80 kg",
    cabello: "Castaño",
    piel: "Clara",
    ojos: "Marrón",
    nacimiento: "29 BBY",
    genero: "Masculino",
    planeta: "Corellia",
    imagen: "../Assets/han.webp",
    peliculas: [
      "../Assets/4.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg",
      "../Assets/7.webp"
    ]
  },
  {
    id: 11,
    nombre: "C-3PO",
    altura: "167 cm",
    masa: "75 kg",
    cabello: "N/A",
    piel: "Dorado",
    ojos: "Amarillo",
    nacimiento: "112 BBY",
    genero: "Masculino",
    planeta: "Tatooine",
    imagen: "../Assets/c3po.webp",
    peliculas: [
      "../Assets/1.webp",
      "../Assets/2.jpeg",
      "../Assets/3.jpeg",
      "../Assets/4.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg",
      "../Assets/7.webp",
      "../Assets/8.webp",
      "../Assets/9.webp"
    ]
  },
  {
    id: 12,
    nombre: "OBI-WAN KENOBI",
    altura: "182 cm",
    masa: "77 kg",
    cabello: "Castaño",
    piel: "Clara",
    ojos: "Azul",
    nacimiento: "57 BBY",
    genero: "Masculino",
    planeta: "Stewjon",
    imagen: "../Assets/obiwan.webp",
    peliculas: [
      "../Assets/1.webp",
      "../Assets/2.jpeg",
      "../Assets/3.jpeg",
      "../Assets/4.jpeg"
    ]
  },
  {
    id: 13,
    nombre: "BOBA FETT",
    altura: "183 cm",
    masa: "78 kg",
    cabello: "Negro",
    piel: "Clara",
    ojos: "Marrón",
    nacimiento: "31.5 BBY",
    genero: "Masculino",
    planeta: "Kamino",
    imagen: "../Assets/boba.png",
    peliculas: [
      "../Assets/2.jpeg",
      "../Assets/5.jpeg",
      "../Assets/6.jpeg"
    ]
  },
  {
    id: 14,
    nombre: "KYLO REN",
    altura: "189 cm",
    masa: "89 kg",
    cabello: "Negro",
    piel: "Clara",
    ojos: "Marrón",
    nacimiento: "5 ABY",
    genero: "Masculino",
    planeta: "Chandrila",
    imagen: "../Assets/kylo.png",
    peliculas: [
      "../Assets/7.webp",
      "../Assets/8.webp",
      "../Assets/9.webp"
    ]
  },
  {
    id: 15,
    nombre: "GROGU",
    altura: "42 cm",
    masa: "Desconocido",
    cabello: "Blanco",
    piel: "Verde",
    ojos: "Negro",
    nacimiento: "41 BBY",
    genero: "Masculino",
    planeta: "Desconocido",
    imagen: "../Assets/grogu.webp",
    peliculas: ["../Assets/serie1.webp"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const personaje = personajes.find(p => p.id === id);

  if (!personaje) {
    document.getElementById("detalle-personaje").innerHTML = "<p>Personaje no encontrado</p>";
    return;
  }

  const contenedor = document.getElementById("detalle-personaje");

  contenedor.innerHTML = `
    <!-- Imagen del personaje -->
    <div class="image-container">
      <img src="${personaje.imagen}" alt="${personaje.nombre}" class="character-image">
    </div>

    <!-- Información -->
    <div class="info">
      <h2 class="name">${personaje.nombre}</h2>

      <div class="info-section">
        <div class="h3"><h3>Información</h3></div>
        <div class="info-grid">
          <p><span>Nombre:</span> <strong>${personaje.nombre}</strong></p>
          <p><span>Altura:</span> <strong>${personaje.altura}</strong></p>
          <p><span>Masa:</span> <strong>${personaje.masa}</strong></p>
          <p><span>Color de cabello:</span> <strong>${personaje.cabello}</strong></p>
          <p><span>Color de piel:</span> <strong>${personaje.piel}</strong></p>
          <p><span>Color de ojos:</span> <strong>${personaje.ojos}</strong></p>
          <p><span>Año de nacimiento:</span> <strong>${personaje.nacimiento}</strong></p>
          <p><span>Género:</span> <strong>${personaje.genero}</strong></p>
          <p><span>Mundo natal:</span> <strong>${personaje.planeta}</strong></p>
        </div>
      </div>

      <div class="linea-section">
        <div class="h3"><h3>Películas</h3></div>
        <div class="movies">
          ${personaje.peliculas.map(peli => `<img src="${peli}" alt="Película">`).join('')}
        </div>
      </div>
    </div>
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  const flecha = document.getElementById("flecha-regreso");
  if (nombre && flecha) {
    flecha.href = `Catalogo.html?nombre=${nombre}`;
  }
});