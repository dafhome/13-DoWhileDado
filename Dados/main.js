function calcularDado(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// function generarDados(){
//     let dadoMin = 1;
//     let dadoMax = 6;
//     dado1Dom = document.getElementById("dado1");
//     dado2Dom = document.getElementById("dado2");

//     let valor1 = getRandomIntInclusive(dadoMin,dadoMax);
//     let valor2 = getRandomIntInclusive(dadoMin,dadoMax);
//     // console.log(valor1);
//     // console.log(valor2);
//     // dado1Dom.innerText = valor1;
//     // dado2Dom.innerText = valor2;

//     dado1Img = document.getElementById("dado-1");
//     dado2Img = document.getElementById("dado-2");

//     dado1Img.style.backgroundImage = "url(images/"+valor1+".png)";
//     dado2Img.style.backgroundImage = "url(images/"+valor2+".png)";
// }

const DADOMIN = 1;
const DADOMAX = 6;

var valor1;
var valor2;

var scorePlayer1 = 0;
var scorePlayer2 = 0;

var tiradas1 = 0;
var tiradas2 = 0;

function tirarDadoUno() {
    valor1 = calcularDado(DADOMIN, DADOMAX);
    let dadoImg = document.getElementById("dado-1");
    dadoImg.style.backgroundImage = "url(images/" + valor1 + ".png)";
    tiradas1++;
}

function tirarDadoDos() {
    valor2 = calcularDado(DADOMIN, DADOMAX);
    let dadoImg = document.getElementById("dado-2");
    dadoImg.style.backgroundImage = "url(images/" + valor2 + ".png)";
    tiradas2++;
}

function comprobarGanador() {
    let ganador = document.getElementById("ganador-turno");

    if (tiradas1 == tiradas2 && tiradas1!=0) {
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
    else if (tiradas1 == 0 && tiradas2 == 0){
        ganador.innerHTML = "Teneis que volver a tirar";
    }
    else if (tiradas1 > tiradas2) {
        ganador.innerHTML = "Falta Player2";
    }
    else {
        ganador.innerHTML = "Falta Player1";
    }
}