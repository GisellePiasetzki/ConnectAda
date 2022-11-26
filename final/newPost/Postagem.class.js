import Entidade from "/Entidade.class";
import create_UUID from "/utils";
// const Entidade = require("./Entidade.class.js");
// const {create_UUID} = require ("./utils.js");


class idPost extends create_UUID {
    constructor(){
        
    }
}


export class Postagem extends Entidade {
    idUsuario;
    idForm;
    idTextArea;
    idLiPost;


    constructor (idUsuario, idForm, idTextArea, idLiPost ){
        super(create_UUID());
        this.idUsuario = document.getElementById (idUsuario);
        this.form = document.getElementById = (idForm);
        this.textArea = document.getElementById = (idTextArea);
        this.liPost = document.getElementById = (idLiPost);
        this.addSubmit();
    }


    onSubmit(fun){
        this.form.addEventListener('submit',fun)
    }

    addSubmit(){
        const handleSubimit = (evento) => {
            evento.preventDefault();
            console.log('add evento')

        }
        this.onSubmit(handleSubimit)
    }



    apagarComentario(){

    }
    modificarTitulo(){


    }
    modificarDescricao(){

    }

}


const postForm = new FormPost('formPost', 'textArea', 'liPost');

//module.exports = Postagem;