let inicial = input[0], restante = input.slice(1);
let inicialEstaMaiuscula, restanteEstaMaiuscula, resultado;

if (inicial === inicial.toUpperCase()) {
    inicialEstaMaiuscula = true;
} else {
    inicialEstaMaiuscula = false;
}

if (restante === restante.toUpperCase()) {
    restanteEstaMaiuscula = true;
} else {
    restanteEstaMaiuscula = false;
}

if (!inicialEstaMaiuscula && restanteEstaMaiuscula) {
    inicial = inicial.toUpperCase();
    restante = restante.toLowerCase();
    resultado = inicial + restante;
} else if (inicialEstaMaiuscula && restanteEstaMaiuscula) {
    resultado = input.toLowerCase();
} else {
    resultado = input;
}

console.log(resultado);