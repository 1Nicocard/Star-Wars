// Clase que define la estructura de un integrante del equipo
class Integrante {
  constructor(nombre, rol, imagen, nacionalidad, acerca) {
    this.nombre = nombre;
    this.rol = rol;
    this.imagen = imagen;
    this.nacionalidad = nacionalidad;

  }

  // Método que devuelve el HTML para mostrar el integrante
  render() {
    return `
      <div class="integrante">
        <img src="${this.imagen}" alt="Foto de ${this.nombre}" />
        <h4>${this.nombre}</h4>
        <p>${this.rol}</p>
        <p>${this.nacionalidad}</p>
        <a href="https://www.behance.net/nicolascardena/${this.nombre.split(' ').join('_')}" target="_blank">
          <button class="botones2">VER MAS</button>
        </a>


      </div>
    `;
  }
}

// Creamos un arreglo con 3 integrantes de Star Wars (datos dummy)
const equipo = [
  new Integrante("Hanna Muriel", "Maestra de teorías", "../Assets/lukenico.jpg", "Diseñadora UI", ""),
  new Integrante("Nicolas Cardenas", "Cazador de easter eggs", "../Assets/leiahanna.jpg", "Diseñador UX",),
];

// Seleccionamos el contenedor en el DOM
const contenedor = document.getElementById("contenedor-integrantes");

// Insertamos en el contenedor el HTML generado dinámicamente con map + join
contenedor.innerHTML = equipo.map(integrante => integrante.render()).join("");
