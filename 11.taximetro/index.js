let valorPorMinuto = 0, valorPorKm = 0;
let diferenca, total;

if (min <= 20) {
    valorPorMinuto = 50 * min;
} else {
    diferenca = min - 20;

    valorPorMinuto = 50 * 20;
    valorPorMinuto += 30 * diferenca;
}

if (km <= 10) {
    valorPorKm = 70 * km;
} else {
    diferenca = km - 10;

    valorPorKm = 70 * 10;
    valorPorKm += 50 * diferenca;
}
total = valorPorMinuto + valorPorKm;
total = Math.floor(total);

console.log(total);