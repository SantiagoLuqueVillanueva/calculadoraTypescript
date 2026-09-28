"use strict";
const boton1 = document.getElementById('btn1');
const boton2 = document.getElementById('btn2');
const boton3 = document.getElementById('btn3');
const boton4 = document.getElementById('btn4');
const boton5 = document.getElementById('btn5');
const boton6 = document.getElementById('btn6');
const boton7 = document.getElementById('btn7');
const boton8 = document.getElementById('btn8');
const boton9 = document.getElementById('btn9');
const boton0 = document.getElementById('btn0');
const botonDecimal = document.getElementById('decimal');
const botonDivision = document.getElementById('division');
const botonMultiplicacion = document.getElementById('multiplicar');
const botonResta = document.getElementById('restar');
const botonSuma = document.getElementById('sumar');
const botonIgual = document.getElementById('igual');
const botonLimpiar = document.getElementById('limpiar');
const display = document.getElementById('display');
var valorActual = '0';
var valorAnterior = null;
var operacion = null;
function limpiar(res) {
    display.textContent = res;
    valorActual = '0';
    valorAnterior = null;
}
function mostrarNumero(res) {
    display.textContent = res;
}
function anadirNumero(num) {
    if (valorActual === '0') {
        valorActual = num;
    }
    else {
        valorActual += num;
    }
    mostrarNumero(valorActual);
}
function seleccionarOperacion(op) {
    switch (op) {
        case '+':
            if (valorAnterior == null)
                valorAnterior = Number(valorActual);
            else
                valorAnterior += Number(valorActual);
            mostrarNumero(valorAnterior.toString());
            valorActual = '0';
            break;
        case '-':
            if (valorAnterior == null)
                valorAnterior = Number(valorActual);
            else
                valorAnterior -= Number(valorActual);
            mostrarNumero(valorAnterior.toString());
            valorActual = '0';
            break;
        case '×':
            if (valorAnterior == null)
                valorAnterior = Number(valorActual);
            else
                valorAnterior *= Number(valorActual);
            mostrarNumero(valorAnterior.toString());
            valorActual = '0';
            break;
        case '÷':
            if (valorAnterior == null)
                valorAnterior = Number(valorActual);
            else
                valorAnterior /= Number(valorActual);
            mostrarNumero(valorAnterior.toString());
            valorActual = '0';
            break;
        default:
            break;
    }
}
boton1.addEventListener('click', () => anadirNumero('1'));
boton2.addEventListener('click', () => anadirNumero('2'));
boton3.addEventListener('click', () => anadirNumero('3'));
boton4.addEventListener('click', () => anadirNumero('4'));
boton5.addEventListener('click', () => anadirNumero('5'));
boton6.addEventListener('click', () => anadirNumero('6'));
boton7.addEventListener('click', () => anadirNumero('7'));
boton8.addEventListener('click', () => anadirNumero('8'));
boton9.addEventListener('click', () => anadirNumero('9'));
boton0.addEventListener('click', () => anadirNumero('0'));
botonLimpiar.addEventListener('click', () => limpiar('0'));
botonSuma.addEventListener('click', () => seleccionarOperacion('+'));
botonResta.addEventListener('click', () => seleccionarOperacion('-'));
botonMultiplicacion.addEventListener('click', () => seleccionarOperacion('×'));
botonDivision.addEventListener('click', () => seleccionarOperacion('÷'));
