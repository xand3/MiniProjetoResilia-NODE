const readLineSync = require("readline-sync");

function organiza() {
    console.clear();
    propriedades.pop();
    propriedades.sort();
}
function instrucoes() {
    console.log("=============================");
    console.log("DIGITE AS PROPRIEDADES CSS");
    console.log("para ver o resultado digite SAIR");
}

let propriedades = [];
let resposta = "";
instrucoes()
for (let i = 0; resposta != "SAIR"; i++) {
    resposta = readLineSync.question(">");
    propriedades[i] = resposta;
}

organiza()

for (let j = 0; j < propriedades.length; j++) {
    console.log(propriedades[j]);
}

