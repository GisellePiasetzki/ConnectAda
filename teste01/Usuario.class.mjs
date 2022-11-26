// const Entidade = require("./Entidade.class.js");
// const {create_UUID} = require ("./utils.js");

import { Entidade } from "./Entidade.class.mjs";
import { create_UUID } from "./utils.mjs";

export default class Usuario extends Entidade {
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

// .module.exports = Usuario;
