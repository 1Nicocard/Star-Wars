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
  new Integrante("Hanna Muriel", "Maestra de teorías", "Img/hannaa.jpg", "Diseñadora UI", "https://www.behance.net/hannamuriel"),
  new Integrante("Nicolas Cardenas", "Cazador de easter eggs", "Img/nicoo.jpg", "Diseñador UX", "https://www.behance.net/nicolascardena8"),
];

const contenedor = document.getElementById("contenedor-integrantes");

contenedor.innerHTML = equipo.map(integrante => integrante.render()).join("");

//Contacto________________________________________________________________________________________________________


window.onload = function () {
  var boton = document.getElementById("Botondentro");

  boton.onclick = function (evento) {
    evento.preventDefault();

    var correo = document.getElementsByName("email")[0].value.trim();
    var mensaje = document.getElementsByName("password")[0].value.trim();

    var correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
      alert("⚠️ Por favor ingresa tu correo.");
    } else if (!correoValido.test(correo)) {
      alert("⚠️ Por favor ingresa un correo válido (ej: nombre@dominio.com).");
    } else {
      // Guardar el mensaje en localStorage
      let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

      comentarios.push({
        correo: correo,
        mensaje: mensaje,
        fecha: new Date().toLocaleString()
      });

      localStorage.setItem("comentarios", JSON.stringify(comentarios));

      alert("✨✨✨ ¡Tu mensaje fue enviado con éxito! ✨✨✨");
      document.forms[0].reset();
    }
  };
};

