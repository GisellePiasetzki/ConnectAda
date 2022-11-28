
import { dataBase } from "../dataBase/data.js";


 export class Post {
    textPost;
    
    constructor(textPost) {
        this.textPost = textPost;
        this.comments=[];
    }

   
    newComment(comment) {
        this.comments.push(comment)
    }

    deletComment(comment){
        const myIndex = this.comments.indexOf(comment); //procura o index do meu amigo na MINHA lista
            this.comments.splice(myIndex, 1);
    }
    

  
}

function postar(event){
    event.preventDefault();

    const postText = document.getElementById("textArea").value;
    
    const usuario = window.localStorage.getItem('user').replaceAll('"','')
    
    // console.log(usuario)

    // console.log(dataBase)
    const index = dataBase.findIndex(item => item.email == usuario)

    // console.log(index)

    const newUserPost = new Post (postText)

    dataBase[index].newPost(newUserPost)

    console.log(dataBase[index])

    location.href = "../feed/feed.html";
    

}

