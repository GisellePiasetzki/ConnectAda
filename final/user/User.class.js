// const Entidade = require("./Entidade.class.js");
// const {create_UUID} = require ("./utils.js");

import { Entities } from "./Entities.class.js";
// import { Post } from "../newPost/newpost.js";

export  class User extends Entities {
    userName;
    fullName;
    password;
    email;

    constructor(fullName, password, email, userName){
        super(Entities.id);
        this.fullName = fullName;
        this.password = password;
        this.email = email;
        this.userName = userName;
        this.post=[];
        this.friends=[];

    }

    get password () {
        return this.password;
    }

    set password (newPassword) {
        this.password = newPassword;
    }

    newPost(post){
        this.post.push(post)
    }

    newFriendship(friend) {
        if(!this.friends.includes(friend)) { // checa se o user do meu amigo existe na minha lista de amigos (! se ele não estiver vai para o if)
            // friend.friends.push(friend); // add eu como amigo dele
            this.friends.push(friend); // add ele como meu amigo
        }
        else {
            console.log(`${friend} já é seu amigo.`) //se ele já for meu amigo não add novamente
        }
    }

    deleteFriendship(friend) {
        // if(this.friends.includes(friend)) { // checa se o user do meu amigo existe na minha lista de amigos
            const myIndex = this.friends.indexOf(friend); //procura o index do meu amigo na MINHA lista
            this.friends.splice(myIndex, 1); // deleta meu amigo na minha lista

        //     // const hisIndex = this.friends.indexOf(friend); 
        //     // this.friends.splice(hisIndex, 1); // me deleta da lista dele
        // }
        // else {
        //     console.log(`${friend} não está na sua lista de amigos.`) //se ele não for mais meu amigo aparece essa mensagem
        // }
    }

    deletePost(text){
        const index = this.post.indexOf(text) //procura o index do meu amigo na MINHA lista
        console.log(index)
        this.post.splice(index, 1); // deleta meu amigo na minha lista
    }

    editPost(old_post,new_post) {
        this.post.forEach((element,i) => {
            if( element == old_post){
                this.post[i].textPost = new_post
            }
        });
        console.log(this.post)
    }




}

// export  class Post {
//     texto;

//     constructor(texto) {
//         this.texto = texto;
//     }
// }

// const userTeste = new User ("gabiCeranto", "leaoVerde", "gabiceranto@gmail.com","gaabiceranto")
// console.log(userTeste)

// .module.exports = Usuario;
