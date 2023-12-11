const linhas = input.trim().split("\n");
let senhaCorreta = linhas[0], tentativa = linhas[1];

senhaCorreta = senhaCorreta.split("");
tentativa = tentativa.split("");

let auxIndex = 0, auxSenha = [], incorreta = false;

for (let i = 0; i < senhaCorreta.length; i++) {
    for (let j = auxIndex; j < tentativa.length; j++) {
        if (senhaCorreta[i] === tentativa[j]) {
            auxSenha.push(tentativa[j]);
            auxIndex = j + 1;
            break;
        }
        if (j + 1 === tentativa.length) {
            incorreta = true;
        }
    }
    if (incorreta) {
        break;
    }
}
if (!incorreta) {
    for (let i = 0; i < senhaCorreta.length; i++) {
        if (senhaCorreta[i] !== auxSenha[i]) {
            incorreta = true;
            break;
        }
    }
}
const resposta = incorreta ? "NAO" : "SIM"
console.log(resposta);