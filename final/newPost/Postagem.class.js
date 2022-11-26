import { User } from "../user/User.class.js";

export class MainPost extends User {
    postagem;
    allcoments = [];

    constructor(email,userName,fullName,postagem) {
        super(email,userName,fullName,);
        this.postagem = postagem;
    }
  

    showPost(){
        console.log(this.postagem,this.userName)
    }

    newComent(user,coment) {
            const add = {usuario:user,comentario:coment,likes:0}
            this.allcoments.push(add)
            console.log(this.allcoments)
    }

    deleteComent(user,coment) {
        this.allcoments.forEach((element,i) => {
            if(element.usuario == user && element.comentario == coment){
                this.allcoments.splice(i,1)
            }
        });
        console.log(this.allcoments)
    }

    editComent(user,old_coment,new_coment) {
        this.allcoments.forEach((element,i) => {
            if(element.usuario == user && element.comentario == old_coment){
                this.allcoments[i].comentario = new_coment
            }
        });
        console.log(this.allcoments)
    }

    Like(user,coment) {
        this.allcoments.forEach((element) => {
            if(element.usuario == user && element.comentario == coment){
                element.likes = element.likes + 1
            }
        });
        console.log(this.allcoments)
    }

    desLike(user,coment) {
        this.allcoments.forEach((element) => {
            if(element.usuario == user && element.comentario == coment){
                element.likes = element.likes - 1
            }
        });
        console.log(this.allcoments)
    }
    
}

const primeiro = new MainPost('xandesantucci@gmail.com','Xande','Alexandre Oliveira','Postando algo aqui')
primeiro.showPost()
// primeiro.newComent('user32','segue o baile')
// primeiro.newComent('user1','segue o baile')
// primeiro.newComent('user0','segue os bailes')

// // console.log('\nAqui comeca o delete')
// primeiro.deleteComent('user0','segue o baile')
// primeiro.Like('user0','segue os bailes')
// primeiro.editComent('user0','segue os bailes','comentario editado')
// primeiro.showPost()
// primeiro.Like('user0','comentario editado')
// primeiro.desLike('user0','comentario editado')

