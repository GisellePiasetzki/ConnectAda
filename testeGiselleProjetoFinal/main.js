const Usuario = require("./Usuário.class");
const Postagem = require("./Postagem.class");


//teste
const pessoa = new Usuario("giselle", 'saasas');
console.log(pessoa);

const postagem = new Postagem(pessoa.id)
console.log(postagem);