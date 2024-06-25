// Ejercicio 1
function imc(altura, peso) {
    return peso / (altura * altura);
}
console.log(imc(165, 69));
// Ejercicio 2
function factorial(numero) {
    let resultado = 1
    while (numero > 1) {
        resultado = resultado * numero--;
    }
    return resultado;
}
console.log(factorial(5));
// Ejercicio 3
function conversorDolarAPesoColombiano(dolar) {
    return dolar * 4200;
}
console.log(conversorDolarAPesoColombiano(5));
// Ejercicio 4
function perimetroYareaDeRectangulo(altura, anchura) {
    alert(`Área = ${altura * anchura} y Perímetro = ${2 * (altura + anchura)}`);
    return;
}
console.log(perimetroYareaDeRectangulo(4, 6));
// Ejercicio 5
function perimetroYareaDeCirculo(radio) {
    const pi = 3.14;
    alert(`Área = ${pi * (radio * radio)} y Perímetro = ${2 * pi * radio}`);
    return;
}
console.log(perimetroYareaDeCirculo(4));
// Ejercicio 6
function tablaMultiplicar(numero) {
    let indice = 1;
    while (indice <= 10) {
        console.log(`${numero} x ${indice} = ${numero * indice}`);
        indice++;
    }
    return;
}
tablaMultiplicar();