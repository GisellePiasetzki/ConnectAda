class postagemmae {
    #postagem;
    #allcoments = [{usuario:'user0',comentario:'segue o baile',likes:0}];

    constructor(postagem) {
        this.#postagem = postagem;
    }

    newComent(user,coment) {
            const add = {usuario:user,comentario:coment,likes:0}
            this.#allcoments.push(add)
            console.log(this.#allcoments)
    }

    deleteComent(user,coment) {
        this.#allcoments.forEach((element,i) => {
            if(element.usuario == user && element.comentario == coment){
                this.#allcoments.splice(i,1)
            }
        });
        console.log(this.#allcoments)
    }

    Like(user,coment) {
        this.#allcoments.forEach((element) => {
            if(element.usuario == user && element.comentario == coment){
                element.likes = element.likes + 1
            }
        });
        console.log(this.#allcoments)

    }
    
}

const primeiro = new postagemmae('Postando algo aqui')
primeiro.newComent('user32','segue o baile')
primeiro.newComent('user1','segue o baile')
primeiro.newComent('user0','segue os bailes')

// console.log('\nAqui comeca o delete')
primeiro.deleteComent('user0','segue o baile')
primeiro.Like('user0','segue os bailes')