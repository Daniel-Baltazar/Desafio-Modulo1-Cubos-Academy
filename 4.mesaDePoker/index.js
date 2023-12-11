
let autorizados = [];

for (let valor of valores) {
    if (valor >= min && valor <= max) {
        autorizados.push(valor);
    }
}

console.log(autorizados);