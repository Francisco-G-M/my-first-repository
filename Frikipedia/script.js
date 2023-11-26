function clasificarValor(valor) {
  var respuesta;
  switch(valor) {
    case 1:
      respuesta ="Alpha";
    break;
    case 2:
       respuesta ="Beta";
    break;
    case 3:
      respuesta ="Gamma";
      break;
      case 4:
          respuesta ="Delta";
          break;
  }
  return respuesta;
}
console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));
function seleccionarIdioma(valor) {
switch(valor) {
  case 1:
    idioma ="Español";
    break;
    case 2:
    idioma ="Francés";
    break;
    case 3:
      idioma ="Italiano";
      break;
      default:
        idioma ="Ingles";
        break;
}
return idioma;
}
console.log(seleccionarIdioma(4));
function clasificarVolumen(valor) {
switch(valor) {
  case 1:
    volumen ="Bajo";
    break;
    case 2:
    case 3:
      volumen ="Intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen ="Alto";
      break;
      default:
        volumen ="Super alto";
        break;
}
return volumen;
}
console.log(clasificarVolumen(2));
console.log(clasificarVolumen(3));
console.log(clasificarVolumen(6));
console.log(clasificarVolumen(5));
console.log(clasificarVolumen(4));
console.log(clasificarVolumen(8));
function esMenorQue(a, b) {
return a<=b;
}
console.log(esMenorQue(3, 3));
function calcularRaizCuadrada(num) {
if (num < 0) {
  return undefined;
}
return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(100));
var conteo =0;
function contarCartas(cartas) {
var desicion;
switch (cartas) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    conteo++;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      conteo--;
      break;
}
if (conteo > 0) {
  desicion ="Apostar";
}else {
  desicion ="Esperar";
}
return conteo + " " + desicion;
}
console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(4));
console.log(contarCartas(5));
console.log(contarCartas(6));
console.log(contarCartas(7));
console.log(contarCartas(8));
console.log(contarCartas(10));
console.log(contarCartas("K"));
console.log(contarCartas("Q"));
console.log(contarCartas("J"));
console.log(contarCartas("A"));
console.log(contarCartas("K"));
var razasDePerros = {
"raza": "pastor aleman",
"peso promedio": "22kg-40kg",
"altura maxima registrada": "65cm"
};
console.log(razasDePerros.raza);
console.log(razasDePerros["peso promedio"]);
console.log(razasDePerros["altura maxima registrada"]);
var resultados = {
1: "nora256",
2:"gino577",
3:"estef543",
4:"kiara566"
};
var posicion =1;
console.log(resultados[posicion]);
var posicion =2;
console.log(resultados[posicion]);
var posicion =3;
console.log(resultados[posicion]);
var posicion =4;
console.log(resultados[posicion]);
var cartuchera = {
"color": "verde",
"tamaño": "medio",
"contenido": ["goma de borrar", "lapiz", "lapicera"]
};
console.log(cartuchera.color);
cartuchera.color ="rojo";
console.log(cartuchera.color);
cartuchera.contenido.push("corrector");
console.log(cartuchera.contenido);
cartuchera.contenido.shift();
console.log(cartuchera.contenido);
cartuchera.contenido.unshift("saca puntas")
console.log(cartuchera.contenido);
cartuchera.contenido =["utiles escolares"];
console.log(cartuchera.contenido);
function verificarPropiedad(obj, propiedad) {
if (obj.hasOwnProperty(propiedad)) {
  return "Propiedad: " + obj[propiedad];
}else {
  return "El objeto no tiene esta propiedad."
}
}
var comprasDelSuper = {
"cantidad": 4,
"cosas": ["Botella de agua", "Bolsa de Manzanas", "Bananas", "y Paquete de Macucas."]
};
console.log(verificarPropiedad(comprasDelSuper, "cantidad"));
console.log(verificarPropiedad(comprasDelSuper, "cosas"));
comprasDelSuper.costos =13.24;
console.log(comprasDelSuper.costos);
delete comprasDelSuper.cantidad;
console.log(comprasDelSuper.cosas);
function propiedades (obj, propiedad) {
if (obj.hasOwnProperty(propiedad)) {
  return "propiedad: " + obj[propiedad];
}else {
  return "El objeto no tiene esta propiedad";
}
}
var docenaDeEmpanadas = {
"precio": 100,
"tipoDeEmpanadas": "carne"
};
console.log(propiedades(docenaDeEmpanadas, "precio"));
console.log(propiedades(docenaDeEmpanadas, "tipoDeEmpanadas"));
var ordenesParaLlevar = [
{
  "comida": "Hamburguesa",
  "precio": "10 pesos",
  "ingredientes": [
    "pan integral",
    "chedar",
    "anillo de carne",
    "cebolla",
    "ketchup"
  ],
  "paraLlevar": true
},
{
 "comida": "Pizza cuatro quesos",
  "precio": "15 pesos",
  "ingredientes": [
    "Mozzarela",
    "Queso Azul",
    "Chedar"
  ],
},
{
  "comida": "combo del dia",
  "precio": "12 pesos",
  "contenido":[
    "1 Sandwich de Pechuga de pollo,lechuga,tomate y huevo",
    "1 lata de Pepsi",
    "1 cono de papas fritas"
  ],
}
];
console.log(ordenesParaLlevar[0].comida);
console.log(ordenesParaLlevar[0].precio);
console.log(ordenesParaLlevar[0].ingredientes);
console.log(ordenesParaLlevar[1].comida);
console.log(ordenesParaLlevar[1].precio);
console.log(ordenesParaLlevar[1].ingredientes);
console.log(ordenesParaLlevar[1]);
console.log(ordenesParaLlevar[2]);
console.log(ordenesParaLlevar[2].contenido);
var receta = {
"nombre": "Budin",
"ingredientes": {
  "masa": {
    "chocolate": "50%",
    "vainilla": "50%"
  },
  "decorado": {
    "almendras": "10",
    "manis": "15"
  }
}
};
console.log(receta["nombre"]);
console.log(receta.ingredientes["masa"]);
console.log(receta.ingredientes["masa"]);
console.log(receta.ingredientes["masa"].chocolate);
console.log(receta.ingredientes["masa"].vainilla);
var plantas = [
{
  "tipo": "frlores",
  "lista": [
    "rosa",
    "diente de leon"
  ]
},
{
  "tipo": "arboles",
  "lista": [
    "abedul",
    "cerezo"
  ]
}
];
var primeraFlor = plantas[0].lista[1];
console.log(primeraFlor);
var primerArbol = plantas[1].lista[1];
console.log(primerArbol);
var coleccionDeDiscos = {
7853: {
  tituloDelAlbum: "Bee Gees Greatest",
  artista: "Bee Gees",
  canciones: ["Stayin Alive"]
},
5439: {
  tituloDelAlbum: "ABBA Gold"
}
};
function actualizarDiscos(discos, id, propiedad, valor) {
if (valor === "") {
delete discos[id][propiedad];
}else if (propiedad === "artista") { 
discos[id][propiedad] = discos[id][propiedad] || [];
discos[id][propiedad].push(valor);
}else {
discos[id][propiedad] = valor;
}
}
console.log(coleccionDeDiscos[5439]["artista"]);
actualizarDiscos(coleccionDeDiscos, 5439, ["artista"], "Wolti");
console.log(coleccionDeDiscos[5439]["artista"]);
var i=1;
while (i<=3) {
console.log("hello world");
i++;
}
var Arreglo = [];
var i = 1;
console.log(Arreglo);
while (i<=10) {
  Arreglo.push(i);
  i+=1;
}
console.log(Arreglo);
var numeros = [2, 3, 4, 5, 6, 8, 9, 34];
while (numeros.length>4) {
  numeros.pop();
}
console.log(numeros);
var Arreglo2 = [];
for (var i=0; i<10; i+=2) {
  Arreglo2.push(i);
}
console.log(Arreglo2);
var Arreglo3 = [];
for (i=1; i<50; i+=2) {
Arreglo3.push(i);
}
console.log(Arreglo3);
for (i=20; i>=10; i--) {
console.log(i);
}
var Arreglo4 = [];
for (i=10; i>0; i-=2) {
Arreglo4.push(i);
}
console.log(Arreglo4);
var ejemploArreglo = [4, 6, 8, 2];
var total = 0;
for (var i = 0; i<ejemploArreglo.length; i++) {
  console.log("avance" + i);
  console.log(ejemploArreglo[i]);
total+=ejemploArreglo[i];
}
console.log(total);
var lenguajes = ["JavaScript", "HTML", "Java", "CSS"];
for (var i = 0; i < lenguajes.length; i++) {
console.log(lenguajes[i].toUpperCase());
}
function contarNumerosPares(arreglo) {
  var total = 0;
  for (var i = 0; i < arreglo.length; i++) {
if (arreglo[i] % 2 == 0) {
total++;
}
  }
  return total;
}
console.log(contarNumerosPares([2, 2, 2, 2, 4, 6, 8]));
var arregloPrincipal = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (var i = 0; i < arregloPrincipal.length; i++) {
  console.log(">Nueva Interaccion");
var arregloAnidado = arregloPrincipal[i];//arreglo
console.log("Arreglo: " + arregloAnidado);
for (var j = 0; j < arregloAnidado.length; j++) {
  console.log(">>>Ciclo Anidado");
  console.log("Elemento :" + arregloAnidado[j]);
  console.log(arregloAnidado[j]);//elemento
  }
}
var mercado = [["Galletas", "Gaseosas", "Papas Fritas"], ["Arroz", "Avena", "Cereales"], ["Zanahorias", "Papas", "Cebolla"]];
for (var y = 0; y < mercado.length; y++) {
console.log("Nuevas Compras");
var compras = mercado[y];
console.log("Consumibles Comprados: " + compras);
for (var h = 0; h < compras.length; h++ ) {
console.log("Consumible: " + compras[h]);
console.log(compras[h]);
}
}
var x = 16;
do {
  console.log(x);
  x++;
}while (x<10);
x = 8;
while (x<10) {
  console.log(x);
  x++;
}
var contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
     "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwars", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos Interesantes", "Violín"]
  }
]
function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      return contactos[i][propiedad] || "La propiedad no existe.";
    }
  }
  return "El constacto no existe";
}
console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Sherlock", "numero"));
function generarFraccionAleatoria() {
  return Math.random();
}
console.log(generarFraccionAleatoria());
var numeroAleatorio = Math.random();
console.log(numeroAleatorio);
console.log(Math.random());
var numeroAleatorioEntre0y19 = Math.floor(Math.random()*20);
console.log(numeroAleatorioEntre0y19);
function generarEnteroAleatorio(limiteSuperior) {
  return Math.floor(Math.random()*limiteSuperior);
}
console.log(generarEnteroAleatorio(5));
for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5));
}
function rangoAleatorio (limiteInferior, limiteSuperior) {
  return Math.floor(Math.random()*(limiteSuperior - limiteInferior + 1)) + limiteInferior;
}
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));
for (var i = 0; i < 15; i++) {
  console.log(rangoAleatorio(10, 15));
}
console.log(parseInt("5"));
console.log(parseInt("0"));
console.log(parseInt("-40"));
var a = parseInt("5"); 
var b = parseInt("7");
console.log(a + b);
var a = parseInt("2"); 
var b = parseInt("2");
console.log(a * b);
var a = parseInt("4"); 
var b = parseInt("4");
console.log(a / b);
var a = parseInt("4"); 
var b = parseInt("4");
console.log(a % b);
var a = parseInt("4"); 
var b = parseInt("3");
console.log(a - b);
console.log(parseInt("110111", 2));
console.log(parseInt("3e0a", 16));
console.log(parseInt("0"));
console.log(parseInt("15,99", 10));
function retornarMinimo (j, k) {
  console.log(j<k ? j : k);
}
retornarMinimo(1, 5);
retornarMinimo(4, 5);
retornarMinimo(5, 2);
retornarMinimo(9, 9);
var m = 10;
var n = 11;
console.log(m<n ? m : n);
m = 12;
console.log(m<n ? m : n);
n = 12;
console.log(m<n ? m : n);
function compararNumeros (a, b) {
  return a == b ? "A y B son iguales"
       : a > b ? "A es mayor que B"
       : "b es mayor que A";
}
console.log(compararNumeros(11, 11));
console.log(compararNumeros(2, 1));
console.log(compararNumeros(1, 2));
function opcionesDeCompra (madera, hierro) {
  return madera > hierro ? "Has comprado 64 de Madera."
       : madera < hierro ? "Has comprado 32 lingotes de Hierro."
       :"No compraste nada.";
}
console.log(opcionesDeCompra(2, 1));
console.log(opcionesDeCompra(1, 2));
console.log(opcionesDeCompra());
const MI_ARREGLO = [1, 2, 3, 4];
console.log(MI_ARREGLO);
MI_ARREGLO[0] = 10;
MI_ARREGLO[1] = 9;
MI_ARREGLO[2] = 8;
MI_ARREGLO[3] = 7;
console.log(MI_ARREGLO);
let colores = {
  "verde": "#10e04b",
  "azul": "#1b50e0",
  "negro": "#000000",
  "blanco": "#ffffff"
}
Object.freeze(colores);
colores.verde = "#abhgfd";
console.log(colores);
const fecha = () => new Date();
console.log(fecha);
const sumarTres = (x) => x + 3;
console.log(sumarTres(4));
const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarArreglos([1, 2], [3, 4, 5]));
const sumar = (a, b, c) => {
  let num = 6;
  return a * b + num - c ;
};
console.log(sumar(2, 2, 8));
const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(1));
console.log(incrementar(2, 2));