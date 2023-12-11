let total = 0;
const quantidade = numeros.length;

for (let numero of numeros) {
    total += numero;
}

if (total % quantidade === 0) {
    console.log(quantidade);
} else {
    console.log(total % quantidade);
}
