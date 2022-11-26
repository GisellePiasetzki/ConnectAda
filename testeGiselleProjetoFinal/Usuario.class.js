// const Entidade = require("./Entidade.class.js");
// const {create_UUID} = require ("./utils.js");

import { Entidade } from "./Entidade.class";
import { create_UUID } from "./utils";

export  class Usuario extends Entidade {
    nome;
    senha;

    constructor(nome, senha){
        super(create_UUID());
        this.nome = nome;
        this.senha = senha;
    }

    // comentarPostagem(){

    // }
}

// .module.exports = Usuario;
