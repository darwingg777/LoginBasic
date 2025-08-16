// ######## FORMAS DE IMPRIMIR JS
console.log("HOLA PROFE")
    // alert("hola profe")
    // document.body.innerHTML = "<h1>HOLA QUERIDO PROFESOR</h1>"
    // document.body.innerText = "<h1>HOLA QUERIDO PROFESOR</h1>"

// ######## VARIABLES EN JS => let, var, const
const edad = 18; // constante que no puede ser alterada
let edad_dos = 18; // variable para bloques
var nombre = "Wilder Duarte" // variable global

// ######## TIPOS DE DATOS entero/decimal, string, booleanos, arrays
var entero = 20;
var decimal = 20.5;
var string = "MI NOMBRE ES: WILDER"
var boolean = true //false
var array_string = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
var array_numerico = [1, 2, 3, 4, 5, 6, 7];
var array_mixto = [1, 2, 3, "Lun", "Mar", "Mié", true, false];

// ######## TIPO DE VARIABLES Pascalcasa, CamelCase, snake_casa 

// ######## OPERADORES ARITMÉTICOS => +, -, /, *, %
var suma = entero + decimal;
var resta = decimal - entero;
var multi = decimal * entero;
var divi = decimal / entero;
var modulo = decimal % 2;

// ######## OPERADORES DE COMPARACIÓN Y CONCATENACIÓN

// ######## ESTRUCTURAS DE CONTROL => de repetición (bucles), de condición (ales)
// inicializador - comparación - contador
console.log(array_string)
console.log(array_string.length)
var impresion = "";
for (let i = 0; i < array_string.length; i++) {
    console.log(array_string[i])
    impresion = impresion + array_string[i]
}
Swal.fire(impresion);




// PARA IMPRIMIR
console.log()