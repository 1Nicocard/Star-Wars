// Definicion del integrante___________________________________________________________________________________________________________

class Integrante {
  constructor(nombre, rol, imagen, info, linkBehance) {
    this.nombre = nombre;
    this.rol = rol;
    this.imagen = imagen;
    this.info = info;
    this.linkBehance = linkBehance;

  }

  // Mostrar el integrante en HTML____________________________________________________________________________________________________

  render() {
    return `
      <div class="integrante">
        <img src="${this.imagen}" alt="Foto de ${this.nombre}" />
        <h4>${this.nombre}</h4>
        <p>${this.rol}</p>
        <p>${this.info}</p>
        <a href="${this.linkBehance}" target="_blank">
          <button class="botones2">VER MAS</button>
        </a>


      </div>
    `;
  }
}

// Arreglo de 2 integrantes________________________________________________________________________________________________________

const equipo = [
  new Integrante("Hanna Muriel", "Maestra de teorías", "../Assets/hannaa.jpg", "Diseñadora UI", "https://www.behance.net/hannamuriel"),
  new Integrante("Nicolas Cardenas", "Cazador de easter eggs", "../Assets/nicoo.jpg", "Diseñador UX", "https://www.behance.net/nicolascardena8"),
];



const contenedor = document.getElementById("contenedor-integrantes");


contenedor.innerHTML = equipo.map(integrante => integrante.render()).join("");
