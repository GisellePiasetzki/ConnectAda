// import { User } from "../login/login.js";
import { dataBase } from "../dataBase/data.js";



// export  class Post extends User {
//     texto;

//     constructor(texto) {
//         this.texto = texto;
//     }

//     newPost(post){
//         this.post.push(post)
//     }
// }


 class Post {
    texto;

    constructor(texto) {
        this.texto = texto;
    }
    

  
    // showPost(){
    //     console.log(this.postagem,this.userName)
    // }

    // newComent(user,coment) {
    //         const add = {usuario:user,comentario:coment,likes:0}
    //         this.allcoments.push(add)
    //         console.log(this.allcoments)
    // }

    // deleteComent(user,coment) {
    //     this.allcoments.forEach((element,i) => {
    //         if(element.usuario == user && element.comentario == coment){
    //             this.allcoments.splice(i,1)
    //         }
    //     });
    //     console.log(this.allcoments)
    // }

    // editComent(user,old_coment,new_coment) {
    //     this.allcoments.forEach((element,i) => {
    //         if(element.usuario == user && element.comentario == old_coment){
    //             this.allcoments[i].comentario = new_coment
    //         }
    //     });
    //     console.log(this.allcoments)
    // }

    // Like(user,coment) {
    //     this.allcoments.forEach((element) => {
    //         if(element.usuario == user && element.comentario == coment){
    //             element.likes = element.likes + 1
    //         }
    //     });
    //     console.log(this.allcoments)
    // }

    // desLike(user,coment) {
    //     this.allcoments.forEach((element) => {
    //         if(element.usuario == user && element.comentario == coment){
    //             element.likes = element.likes - 1
    //         }
    //     });
    //     console.log(this.allcoments)
    // }
    
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
    
    // onSubmit(fun){
    //     this.form.addEventListener('submit',fun)
    // }

    // addSubmit(){
    //     const handleSubimit = (evento) => {
    //         evento.preventDefault();
    //         console.log('add evento')

    //     }
    //     this.onSubmit(handleSubimit)
    // }

}

const btnPost = document.getElementById('btnPost')
btnPost.addEventListener("click", function(event){postar(event)});