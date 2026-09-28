const boton1 = document.getElementById('btn1') as HTMLButtonElement;
const boton2 = document.getElementById('btn2') as HTMLButtonElement;
const boton3 = document.getElementById('btn3') as HTMLButtonElement;
const boton4 = document.getElementById('btn4') as HTMLButtonElement;
const boton5 = document.getElementById('btn5') as HTMLButtonElement;
const boton6 = document.getElementById('btn6') as HTMLButtonElement;
const boton7 = document.getElementById('btn7') as HTMLButtonElement;
const boton8 = document.getElementById('btn8') as HTMLButtonElement;
const boton9 = document.getElementById('btn9') as HTMLButtonElement;
const boton0 = document.getElementById('btn0') as HTMLButtonElement;
const botonDecimal = document.getElementById('decimal') as HTMLButtonElement;
const botonDivision = document.getElementById('division') as HTMLButtonElement;
const botonMultiplicacion = document.getElementById('multiplicar') as HTMLButtonElement;
const botonResta = document.getElementById('restar') as HTMLButtonElement;
const botonSuma = document.getElementById('sumar') as HTMLButtonElement;
const botonIgual = document.getElementById('igual') as HTMLButtonElement;
const botonLimpiar = document.getElementById('limpiar') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLDivElement;

var valorActual = '0';
var valorAnterior: number | null  = null;
var operacion = null;

function limpiar(res : string) {
    display.textContent = res
    valorActual = '0';
    valorAnterior = null;
}

function mostrarNumero(res : string) {
    display.textContent = res
}

function anadirNumero(num : string) {
    if (valorActual==='0') {
        valorActual = num
    } else{
        valorActual += num
    }
    mostrarNumero(valorActual)
}

function seleccionarOperacion(op : string) {
    switch (op) {
        case '+':
            if (valorAnterior == null)
                valorAnterior = Number(valorActual);
            else
                valorAnterior += Number(valorActual)
            mostrarNumero(valorAnterior.toString())
            valorActual = '0'
            break;
        case '-':
            if (valorAnterior == null)
                valorAnterior = Number(valorActual);
            else
                valorAnterior -= Number(valorActual)
            mostrarNumero(valorAnterior.toString())
            valorActual = '0'
            break;
        case '×':
            if (valorAnterior == null)
                valorAnterior = Number(valorActual);
            else
                valorAnterior *= Number(valorActual)
            mostrarNumero(valorAnterior.toString())
            valorActual = '0'
            break;
        case '÷':
            if (valorAnterior == null)
                valorAnterior = Number(valorActual);
            else
                valorAnterior /= Number(valorActual)
            mostrarNumero(valorAnterior.toString())
            valorActual = '0'
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
