// exercício 1
// https://github.com/RocketSeat/curso-javascript-do-zero/blob/master/tarefas/modulo01.md
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

console.log(
  "O usuário mora em " +
    endereco.cidade +
    "/" +
    endereco.uf +
    ", no bairro" +
    endereco.bairro +
    "na rua '" +
    endereco.rua +
    "' com nº " +
    endereco.numero
);

// exercício 2
function pares(x, y) {
    while(x <= y) {
        if((x % 2) == 0) {
            console.log(x);
        }
        x++;
    }
}

pares(32, 321);

// exercício 3