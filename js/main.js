// Comentario de una linea 
/*
multiple linea 
...
..
*/
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

    if (edadCliente >= 16) {
        afirmacion = true;
    } else {
        alert('Debes tener al menos 16 años para continuar.');
    }
} while (!afirmacion);

console.log('¡Bienvenido/a! Puedes continuar con la acción deseada.');

let opcion = prompt(`Que producto deseas comprar?
\n 1- Hoodie
\n 2- Remera
\n 3- Pantalon
\n Escribe "ESC" para salir`).toUpperCase()

while (opcion != "ESC") {
    switch (opcion) {
        case "1":
            alert("El precio Actual es de $20.000")
            break
        case "2":
            alert("El precio actual es de $8.200")
            break
        case "3":
            alert("El precio Actual es de $18.000")
            break
        default: alert("Opcion no valida ")
    }
}