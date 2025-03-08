const button = document.querySelector("button");
const color = document.getElementById("color");
function hexAleatorio() {
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";
    for(let a = 0; a < 6; a++) {
        let indices = Math.floor(Math.random() * 16);
        colorHex += digitos[indices];
    }
    return colorHex;
}
button.addEventListener('click', function() {
    let colorAleatorio = hexAleatorio();
    //esto actualiza el texto de la etiqueta p
    color.textContent = colorAleatorio;
    //esto actualiza el backgroundColor del body
    document.body.style.backgroundColor = colorAleatorio;
});