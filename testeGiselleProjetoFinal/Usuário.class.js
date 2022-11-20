const Entidade = require("./Entidade.class.js");
const {create_UUID} = require ("./utils.js")

class Usuario extends Entidade {
    nome;
    senha;

    constructor(nome, senha){
        super(create_UUID());
        this.nome = nome;
        this.senha = senha;
    }

    criarPostagem(){

    }
    comentarPostagem(){

    }
}

module.exports = Usuario;
