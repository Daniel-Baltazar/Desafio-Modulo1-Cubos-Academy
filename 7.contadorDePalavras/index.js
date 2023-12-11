let i;
const novo = texto.trim().split(" ");

while (novo.includes("")) {
    i = novo.indexOf("");
    novo.splice(i, 1);
}

console.log(novo.length);