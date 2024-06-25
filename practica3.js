// Ejercicio 1
let listaGenerica = [];
// Ejercicio 2
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// Ejercicio 3
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
// Ejercicio 4
function mostrarlenguagesDeProgramacion() {
    console.log(lenguagesDeProgramacion);
    return;
}
mostrarlenguagesDeProgramacion();
// Ejercicio 5
function mostrarlenguagesDeProgramacionReversa() {
    console.log(lenguagesDeProgramacion.reverse());
    return;
}
mostrarlenguagesDeProgramacionReversa();
// Ejercicio 6
let listaNumeros = [4, 1, 3, 8, 5, 6, 7];
function promedio() {
    let suma = 0;
    let resultado = 0;
    for (let index = 0; index < listaNumeros.length; index++) {
        let element = array[index];
        suma = suma + element;
    }
    resultado = suma / listaNumeros.length;
    return resultado;
}
console.log(promedio());
// Ejercicio 7
function numeroMasGrandeYPequeño() {
    console.log(Math.max(...listaNumeros));
    console.log(Math.min(...listaNumeros));
}
numeroMasGrandeYPequeño();
// Ejercicio 8
function sumaLista() {
    for (let index = 0; index < listaNumeros.length; index++) {
        let element = array[index];
        suma = suma + element;
    }
    return suma;
}
console.log(sumaLista());
// Ejercicio 9
function posicion(numero) {
    return listaNumeros.indexOf(numero);
}
console.log(posicion());
// Ejercicio 10
let listaNumeros2 = [10, 11, 12, 13, 14, 15, 17];
function sumaListas(listaNumeros, listaNumeros2) {
    let nuevaLista = [];
    let indice = 0;
    let numeroLista1 = 0;
    let numeroLista2 = 0;
    while (indice < listaNumeros.length) {
        numeroLista1 = listaNumeros[indice];
        numeroLista2 = listaNumeros2[indice];
        nuevaLista.push(numeroLista1 + numeroLista2);
        indice++; 
    }
    console.log(nuevaLista);
}
// Ejercicio 11
function cuadradoLista(listaNumeros) {
    let nuevaLista = [];
    let indice = 0;
    let numeroLista = 0;
    while (indice < listaNumeros.length) {
        numeroLista = listaNumeros[indice];
        nuevaLista.push(numeroLista * numeroLista);
        indice++;
    }
}