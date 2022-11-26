

import Entidade from "/Entidade.class.mjs";
import  create_UUID  from "/utils.mjs";
import GerarIdPostagem from "./idPostagem.mjs"
// const Entidade = require("./Entidade.class.js");
// const {create_UUID} = require ("./utils.js");



export default class Postagem {
    // idUsuario;
    // idForm;
    idTextArea;
    textArea;


    constructor (idUsuario, idForm, idTextArea, idLiPost,textArea ){
        // super(create_UUID());
        // super(create_UUID_Post());
       // this.idUsuario = document.getElementById (idUsuario);
        // this.form = document.getElementById ("formPost");
        this.textArea = textArea;
        this.textArea = document.getElementById ("textArea");
        this.addSubmit();
    }

    storageCreator(){

            //const post = document.getElementById("textArea").value;

            const postStorageContent = {
                "idPost": "testeId",
                "txtPost": "testePost"
                // "idPost": idPost.criarId(),
                // "txtPost": post

            };

            window.localStorage.setItem('key',JSON.stringify(postStorageContent));
    }




    onSubmit(fun){
        this.form.addEventListener('submit',fun)
        //console.log(uuidPost);
    }

    addSubmit(){

        const idPost;
        const post;
        const storageCreator = (event) => {

            const key = window.localStorage.getItem('key');

            if (key){
                const objStorage = JSON.parse(postStorageContent);
                const {idPost,txtPost} = objStorage;

            }

            event.preventDefault();
            idPost = new GerarIdPostagem;
            post = document.getElementById("textArea").value;

            // const postStorageContent = {
            //     "idPost": idPost.criarId(),
            //     "txtPost": post

            // };

            // window.localStorage.setItem('key',JSON.stringify(postStorageContent));
            
            this.onSubmit(storageCreator);


    }



    // apagarComentario(){

    // }
    // modificarTitulo(){


    // }
    // modificarDescricao(){

    // }

}

}


//const postForm = new Postagem('form', 'textArea', 'liPost');

//module.exports = Postagem;

// function salvar (){
//     localStorage.setItem ("postTeste", document.getElementById('textArea').value)
// }

// const criarStorage = () =>{

//     window.localStorage.setItem('video','armazenando dados');

// };

// const funcao = () =>{

// }