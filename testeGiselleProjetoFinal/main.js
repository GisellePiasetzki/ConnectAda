// const Usuario = require("./Usuário.class");
// const Postagem = require("./Postagem.class");

import { Usuario } from "./Usuario.class";
import { Postagem } from "./Postagem.class";


//teste
const pessoa = new Usuario("giselle", 'saasas');
console.log(pessoa);

const postagem = new Postagem(pessoa.id)
console.log(postagem);