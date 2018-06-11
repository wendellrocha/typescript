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
  while (x <= y) {
    if (x % 2 == 0) {
      console.log(x);
    }
    x++;
  }
}

pares(32, 321);

// exercício 3
var skills = ["ReactJS", "Javascript", "React Native"];
function temHabilidade(skills) {
  /* for(var i = 0; i <= skills.length; i++) {
        if(skills[i] === 'Javascript') {
            return true;
        }
    } */
  // OU
  if (skills.indexOf("Javascript") != -1) {
    return true;
  } else {
    return false;
  }
  // OU
  // return skills.includes("Javascript");
}

var habilidade = temHabilidade(skills);
console.log(habilidade);

// exercício 4
function experiencia(anos) {
  if (anos >= 0 && anos < 1) {
    console.log("Iniciante");
  } else if (anos >= 1 && anos < 3) {
    console.log("Intermediário");
  } else if (anos >= 3 && anos <= 6) {
    console.log("Avançado");
  } else {
    console.log("Jedi Master");
  }
}

experiencia(2);

// exercício 5
var usuarios = [
  {
    nome: "Diego",
    habilidade: ["Javascript", "ReactJs", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidade: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

for (let usuario of usuarios) {
    console.log("O " + usuario.nome + " possui as habilidades: " + usuario.habilidade.join(', '));
}
