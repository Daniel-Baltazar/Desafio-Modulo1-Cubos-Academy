const linhas = input.trim().split("\n");
const quantidade = parseInt(linhas.shift());
let cordenadas = [], xy;

let distanciaAtual, maiorDistancia, difX, difY;
let primeiraVez = true;

for (let linha of linhas) {
    xy = linha.split(" ");

    cordenadas.push({
        x: parseFloat(xy[0]),
        y: parseFloat(xy[1])
    })
}
let xa, ya, xb, yb;

for (let i = 0; i < quantidade; i++) {
    xa = cordenadas[i].x;
    ya = cordenadas[i].y;
    for (let j = i + 1; j < quantidade; j++) {
        xb = cordenadas[j].x;
        yb = cordenadas[j].y;

        difX = (xb - xa) ** 2
        difY = (yb - ya) ** 2;

        distanciaAtual = Math.sqrt(difX + difY);

        if (primeiraVez) {
            maiorDistancia = distanciaAtual;
            primeiraVez = false;
        } else if (distanciaAtual > maiorDistancia) {
            maiorDistancia = distanciaAtual;
        }
    }
}

console.log(maiorDistancia);