let count0 = 0, count1 = 0;
let vencedor = 'NINGUEM';

for (let jogador of jogadores) {
    if (jogador.jogada === 0) {
        count0++;
    } else {
        count1++;
    }
}

if (count0 === 1) {
    const i = jogadores.findIndex((jogadorAtual) => {
        return jogadorAtual.jogada === 0;
    })
    vencedor = jogadores[i].nome;

} else if (count1 === 1) {
    const i = jogadores.findIndex((jogadorAtual) => {
        return jogadorAtual.jogada === 1;
    })
    vencedor = jogadores[i].nome;
}

console.log(vencedor);