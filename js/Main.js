// Definicion del integrante___________________________________________________________________________________________________________

class Integrante {
  constructor(nombre, rol, imagen, info) {
    this.nombre = nombre;
    this.rol = rol;
    this.imagen = imagen;
    this.info = info;

  }

  // Mostrar el integrante en HTML____________________________________________________________________________________________________

  render() {
    return `
      <div class="integrante">
        <img src="${this.imagen}" alt="Foto de ${this.nombre}" />
        <h4>${this.nombre}</h4>
        <p>${this.rol}</p>
        <p>${this.info}</p>
        <a href="https://www.behance.net/nicolascardena/${this.nombre.split(' ').join('_')}" target="_blank">
          <button class="botones2">VER MAS</button>
        </a>


      </div>
    `;
  }
}

// Arreglo de 2 integrantes________________________________________________________________________________________________________

const equipo = [
  new Integrante("Hanna Muriel", "Maestra de teorías", "../Assets/hannaa.jpg", "Diseñadora UI", ""),
  new Integrante("Nicolas Cardenas", "Cazador de easter eggs", "../Assets/nicoo.jpg", "Diseñador UX",),
];


const contenedor = document.getElementById("contenedor-integrantes");


contenedor.innerHTML = equipo.map(integrante => integrante.render()).join("");
