const cartas = ['Q', 'J', 'K', 'A', '2', '3'];
let pos;

for (let i = 0; i < cartas.length; i++) {
    if (carta === cartas[i]) {
        pos = i + 1;
        break;
    }
}
if (pos == cartas.length) {
    console.log(cartas[0]);
} else {
    console.log(cartas[pos]);
}