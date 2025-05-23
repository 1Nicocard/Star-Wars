class Personaje {
  constructor(id, nombre, imagen, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }
}

const personajes = [
  new Personaje(1, "Yoda", "../Assets/yoda.webp", "Maestro Jedi sabio y poderoso."),
  new Personaje(2, "Luke Skywalker", "../Assets/Luke skywalker.png", "Caballero Jedi que lideró la Rebelión."),
  new Personaje(3, "Leia Organa", "../Assets/Leia_Organa.webp", "Princesa, rebelde y símbolo de esperanza."),
  new Personaje(4, "Chewbacca", "../Assets/Chewbacca.webp", "Wookiee guerrero y copiloto del Halcón Milenario."),
  new Personaje(5, "R2-D2", "../Assets/R2-D2.webp", "Droide astromecánico valiente y leal."),
  new Personaje(6, "Palpatine", "../Assets/Emperor_Palpatine.webp", "El Emperador Sith que manipula el Imperio."),
  new Personaje(7, "Darth Vader", "../Assets/DarthVader.webp", "El Sith más temido, antes Anakin Skywalker."),
  new Personaje(8, "Darth Maul", "../Assets/Darth-Maul.webp", "Guerrero Sith con sable doble."),
  new Personaje(9, "BB-8", "../Assets/BB8.webp", "Droide redondo con espíritu aventurero."),
  new Personaje(10, "Han Solo", "../Assets/han.webp", "Contrabandista convertido en héroe rebelde."),
  new Personaje(11, "C-3PO", "../Assets/c3po.webp", "Droide de protocolo muy educado y nervioso."),
  new Personaje(12, "Obi-Wan Kenobi", "../Assets/obiwan.webp", "Jedi mentor de Anakin y Luke."),
  new Personaje(13, "Boba Fett", "../Assets/boba.png", "Cazarrecompensas silencioso y letal."),
  new Personaje(14, "Kylo Ren", "../Assets/kylo.png", "Sensible a la Fuerza, dividido entre luz y oscuridad."),
  new Personaje(15, "Grogu", "../Assets/grogu.webp", "Pequeño ser con la Fuerza, también llamado Baby Yoda.")
];

function mostrarCatalogo() {
  const contenedor = document.getElementById("container-mayor");
  contenedor.innerHTML = "";

  for (let i = 0; i < personajes.length; i += 3) {
    const fila = document.createElement("div");
    fila.className = "container-1";

    for (let j = i; j < i + 3 && j < personajes.length; j++) {
      const p = personajes[j];

      const tarjeta = document.createElement("div");
      tarjeta.className = "element";

      tarjeta.innerHTML = `
        <div><img src="${p.imagen}" alt="${p.nombre}" width="340px" height="450px"></div>
        <div id="texto"><h2 id="h2b">${p.nombre.toUpperCase()}</h2></div>
        <div id="boto-estrella">
          <div><button id="Boton" onclick="verDetalle(${p.id})">MÁS DETALLES</button></div>
          <div id="estrella"><img src="../Assets/estrella.png" alt="favorito" width="55px"></div>
        </div>
      `;

      fila.appendChild(tarjeta);
    }

    contenedor.appendChild(fila);
  }
}


function verDetalle(id) {
  window.location.href = `Element.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", mostrarCatalogo);