var numOk;
var i;

function preguntarNumero() {
    let comprobacion = false;
    i = 1;
   
    do {
        comprobacion = parseInt(prompt("Indica un número entre 1 y 20. Vamos a ver si aciertas el número aleatorio."));

        if (comprobacion === numOk) {
            comprobacion = true;
        }

        else if (isNaN(comprobacion)) {
            alert("Por favor, introduce un número.");
            comprobacion = false;
        }

        else {    
            comprobacion = false;
            i++;
        }
    }
    while (comprobacion === false);

    document.write("Enhorabuena! El número correcto es " + numOk + " has utilizado " + i + " intentos.")
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

numOk = getRandomIntInclusive(1, 20);
preguntarNumero();

