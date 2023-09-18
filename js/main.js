function nombre() {
    let nombreCliente = '';

    while (nombreCliente === '') {

        nombreCliente = prompt('Por favor, ingresa tu nombre:');

        nombreCliente = nombreCliente.trim();
    }

    alert('¡Hola, ' + nombreCliente + " !");
}

nombre();

let edadCliente;
let afirmacion = false;

do {

    edadCliente = prompt('¿Cuántos años tienes?');

    edadCliente = parseInt(edadCliente);

    if (edadCliente >= 18) {
        afirmacion = true;
    } else {
        alert('Debes tener al menos 18 años para continuar.');
    }
} while (!afirmacion);

console.log('¡Bienvenido/a! Puedes continuar con la acción deseada.');

class Producto {
    constructor(nombre, precio, porcentajeDeAlcohol, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.porcentajeDeAlcohol = porcentajeDeAlcohol;
        this.tipo = tipo;
    }
}
const carrito = [];
const lista = [];

lista.push(new Producto("sprite", "900", "0%", "6a"));
lista.push(new Producto("gancia", "1350", "17%", "5a"));
lista.push(new Producto("campari", "2500", "27%", "5a"));
lista.push(new Producto("cepita", "600", "0%", "6a"));
lista.push(new Producto("coca cola", "900", "0%", "6a"));
lista.push(new Producto("fernet", "3600", "36%", "5a"));

console.log(lista);

let respuesta = prompt("Esta noche vas a manejar?").toUpperCase();

if (respuesta === "SI") {
    console.log("Genial, eres el conductor designado");
    const resultado = lista.filter((producto) => producto.porcentajeDeAlcohol === "0%");
    console.log("Estas son las opciones que tenemos para ti: " + resultado.map(p => p.nombre).join(', '));
} else if (respuesta === "NO") {
    console.log("Entonces hoy puedes tomar alcohol si lo deseas");
    const resultado1 = lista.filter((producto) => producto.porcentajeDeAlcohol !== "0%");
    console.log("Estas son las opciones que tenemos para ti: " + resultado1.map(p => p.nombre).join(', '));
}

let agregarCarrito = prompt("¿Quieres agregar productos al carrito?").toUpperCase();

if (agregarCarrito === "SI") {
    while (true) {
        let productoSeleccionado = prompt("Ingresa el nombre del producto que deseas agregar al carrito (Escribe 'FIN' para finalizar)").toLowerCase();
        if (productoSeleccionado === 'fin') {
            break;
        } else {
            let productoEncontrado = lista.find(producto => producto.nombre.toLowerCase() === productoSeleccionado);
            if (productoEncontrado) {
                carrito.push(productoEncontrado);
                console.log(`${productoEncontrado.nombre} ha sido agregado al carrito.`);
            } else {
                console.log("Producto no encontrado. Inténtalo de nuevo.");
            }
        }
    }
}
console.log("Productos en el carrito:");
carrito.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
});
