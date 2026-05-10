const visor = document.getElementById("current-operation");
const botoesNumeros = document.querySelectorAll(".number");
const botoesOperadores = document.querySelectorAll(".operator");

const btnClear = document.getElementById("clear");
const btnDelete = document.getElementById("delete");
const btnEquals = document.getElementById("equals");

let expressao = "";

// BOTÕES DE NÚMEROS
for (let i = 0; i < botoesNumeros.length; i++) {

    botoesNumeros[i].addEventListener("click", function () {

        const numero = botoesNumeros[i].dataset.number;

        if (visor.innerText === "0" && numero !== ".") {
            visor.innerText = numero;
            expressao = numero;
        } else {
            visor.innerText += numero;
            expressao += numero;
        }

    });

}

// BOTÕES DE OPERADORES
for (let i = 0; i < botoesOperadores.length; i++) {

    botoesOperadores[i].addEventListener("click", function () {

        const operador = botoesOperadores[i].dataset.operator;

        visor.innerText += operador;
        expressao += operador;

    });

}

// BOTÃO =
btnEquals.addEventListener("click", function () {

    try {

        const resultado = eval(expressao);

        visor.innerText = resultado;
        expressao = resultado.toString();

    } catch {

        visor.innerText = "Erro";
        expressao = "";

    }

});

// BOTÃO C
btnClear.addEventListener("click", function () {

    visor.innerText = "0";
    expressao = "";

});

// BOTÃO DEL
btnDelete.addEventListener("click", function () {

    expressao = expressao.slice(0, -1);

    if (expressao === "") {
        visor.innerText = "0";
    } else {
        visor.innerText = expressao;
    }

});