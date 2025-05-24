
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