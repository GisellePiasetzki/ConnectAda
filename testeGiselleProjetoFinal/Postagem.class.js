const Entidade = require("./Entidade.class.js");
const {create_UUID} = require ("./utils.js");



class Postagem extends Entidade {
    idUsuario;

    constructor (idUsuario){
        super(create_UUID());
        this.idUsuario = idUsuario;
    }

    apagarComentario(){

    }
    modificarTitulo(){


    }
    modificarDescricao(){

    }

}

module.exports = Postagem;