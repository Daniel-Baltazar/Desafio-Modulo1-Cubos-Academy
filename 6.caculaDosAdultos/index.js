let menorPossivel = 0;

for (let idade of lista) {
    if (idade >= 18) {
        if (menorPossivel === 0) {
            menorPossivel = idade;
        } else if (idade < menorPossivel) {
            menorPossivel = idade;
        }
    }
}
if (menorPossivel === 0) {
    console.log("CRESCA E APARECA");
} else {
    console.log(menorPossivel);
}