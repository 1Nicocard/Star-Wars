let marca = prompt("Ingresa la marca de la moto")
let precio = prompt("Ingresa el precio de la moto")
let descuento = 0


if (marca == "Honda") {
    descuento = 0.05 // 5%
} else if (marca == "Yamaha"){
    descuentto = 0.08;
}

let descuentoAplicado = precio * descuento
let precioFinal = precio - descuentoAplicado

console.log("Marca" + marca)
console.log("Precio : 5" + precio)
console.log("Descuento aplicado : %" + descuento * 100)
console.log("Precio final: $" + precioFinal)