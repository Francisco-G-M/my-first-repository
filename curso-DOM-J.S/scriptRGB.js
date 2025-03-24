const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

//Extraemos el valor de value y la asignamos a su color correspondiente
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Actualizamos el texto de la etiqueta p
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

//Actualiza el color de fondo como el texto de las etiquetas p
function actualizarColores(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Actualizamos Rojo
inputRojo.addEventListener('change', (event) => {
    rojo = event.target.value;
    textoRojo.innerText = rojo;
    actualizarColores(rojo, verde, azul);
});
//Actualizamos Verde
inputVerde.addEventListener('change', (event) => {
    verde = event.target.value;
    textoVerde.innerText = verde;
    actualizarColores(rojo, verde, azul);
});
//Actualizamos Azul
inputAzul.addEventListener('change', (event) => {
    azul = event.target.value;
    textoAzul.innerText = azul;
    actualizarColores(rojo, verde, azul);
});
