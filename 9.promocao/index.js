let menorPreco = 0, total = 0, desconto = 0;

for (let preco of precos) {
    total += preco;
}

if (precos.length >= 3) {
    menorPreco = precos[0];
    for (let i = 1; i < precos.length; i++) {
        if (precos[i] < menorPreco) {
            menorPreco = precos[i];
        }
    }
    desconto = menorPreco / 2;
}

console.log(total - desconto);