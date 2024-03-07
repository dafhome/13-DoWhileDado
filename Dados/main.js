
let ganador = document.getElementById("ganador-turno");
let dadoImg1 = document.getElementById("dado-1");
let dadoImg2 = document.getElementById("dado-2");



const DADOMIN = 1;
const DADOMAX = 6;

let valor1;
let valor2;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let tiradas1 = 0;
let tiradas2 = 0;

function calcularDado(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function animacionUno(){
    if (tiradas1 > 0) {
        ganador.innerHTML = "Le toca tirar al Player1!";
    }
    else {
        dadoImg1.style.backgroundImage = "url(images/animacion-dado-2.gif)";
        setTimeout(tirarDadoUno,2500);
    }
    
}
function animacionDos(){
    if (tiradas2 > 0) {
        ganador.innerHTML = "Deja tirar al Player2!";
    }
    else {
        dadoImg2.style.backgroundImage = "url(images/animacion-dado-3.gif)";
        setTimeout(tirarDadoDos,2500);
    }
    
}
function tirarDadoUno() {

        valor1 = calcularDado(DADOMIN, DADOMAX);
        dadoImg1.style.backgroundImage = "url(images/" + valor1 + ".png)";
        tiradas1++;
        comprobarGanadorAuto()
    
}
function tirarDadoDos() {
        valor2 = calcularDado(DADOMIN, DADOMAX);
        dadoImg2.style.backgroundImage = "url(images/" + valor2 + ".png)";
        tiradas2++;
        comprobarGanadorAuto()
}
function comprobarGanador() {

    if (tiradas1 == tiradas2 && tiradas1 != 0) {
        if (valor1 > valor2) {
            ganador.innerText = "PLAYER1 🎉"
            scorePlayer1++;
            document.getElementById("contUno").innerHTML = scorePlayer1;

        }
        else if (valor1 < valor2) {
            ganador.innerHTML = "🥳 PLAYER2"
            scorePlayer2++;
            document.getElementById("contDos").innerHTML = scorePlayer2;
        }
        else {
            ganador.innerHTML = "🤕 EMPATE 🤕"
            scorePlayer1++;
            scorePlayer2++;
            document.getElementById("contUno").innerHTML = scorePlayer1;
            document.getElementById("contDos").innerHTML = scorePlayer2;
        }
        tiradas1 = 0;
        tiradas2 = 0;
    }
    // else if (tiradas1 == 0 && tiradas2 == 0) {
    //     ganador.innerHTML = "Teneis que volver a tirar";
    // }
    // else if (tiradas1 > tiradas2) {
    //     ganador.innerHTML = "Falta Player2";
    // }
    // else {
    //     ganador.innerHTML = "Falta Player1";
    // }
}

function comprobarGanadorAuto() {
    if (tiradas1 > 0 || tiradas2 > 0) {
        comprobarGanador();
    }
}
