// Ejercicio 1
function holaMundo() {
    console.log("¡Hola, mundo!");
}
holaMundo();
// Ejercicio 2
function holaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
holaNombre("David");
// Ejercicio 3
function dobleNumero(numero) {
    return numero * 2;
}
console.log(dobleNumero(4));
// Ejercicio 4
function promedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
console.log(promedio(4, 6, 10));
// Ejercicio 5
function mayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else if (numero1 < numero2) {
        return numero2;
    } else {
        return numero1;
    }
}
console.log(mayor(5, 6));
// Ejercicio 6
function multiplicar(numero) {
    return numero * numero;
}
console.log(multiplicar(4));