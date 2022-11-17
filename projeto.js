class Usuario{
    nome;
    senha;

    constructor(
        nome,
        senha
    ) {
        this.nome = nome;
        this.senha = senha;
    }

    get password() {
        return this.senha;
    }

    show() {
        console.log(this.nome+' app '+this.senha)
    }

}

class postagem extends Usuario{
    post;
    static comentarios = '';



    constructor(
        nome,
        senha,
        post,
        comentarios = ''
    ) {
        super(nome,senha);
        this.post = post;
        postagem.comentarios += comentarios;
    }

    // static soma_comentarios() {

    // }

    abre() {
        console.log(this.post+' app '+postagem.comentarios)
    }

}

class comentarios extends postagem{
    // postagem;
    comentarios;

    constructor(
        nome,
        senha,
        post,
        comentarios
    ) {
        super(nome,senha,post);
        // this.postagem = postagem;
        this.comentarios = comentarios;
    }

    exibir() {
        console.log(this.post+' app '+this.comentarios)
    }

}

const pessoa = new Usuario('alexandre','1234')

pessoa.show()

const post_antes = new postagem(pessoa.nome,pessoa.senha,'Essa é minha postagem','')

post_antes.abre()

post_antes.comentarios = 'comentario'

post_antes.abre()

const postic = new postagem(pessoa.nome,pessoa.senha,'Essa é minha postagem',' comentario')

postic.abre()

// const coment = new comentarios(postic.nome,postic.senha,postic.post,'primeiro comentario')

// coment.exibir()

// const coment2 = new comentarios(postic.nome,postic.senha,postic.post,'segundo comentario')

// postic.exibir()
