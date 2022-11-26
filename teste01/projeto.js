// class Entidade {
//     id;

// }

// class Usuario extends Entidade {
//     nome;
//     senha;

//     constructor(
//         id,
//         nome,
//         senha
//     ) {
//         super(id);
//         this.nome = nome;
//         this.senha = senha;
//     }

//     get password() {
//         return this.senha;
//     }

//     show() {
//         console.log(this.nome + ' app ' + this.senha)
//     }

// }

// class Postagem {
//     post;
//     static comentarios = '';
//     idUsuario;


//     constructor(
//         post,
//         comentarios = ''
//     ) {
//         this.post = post;
//         post.comentarios += comentarios;
//     }

//     // static soma_comentarios() {

//     // }

//     abre() {
//         console.log(this.post + ' app ' + Postagem.comentarios)
//     }

// }

// class Comentarios {
//     // postagem;
//     comentarios;
//     idPostagem;
//     id;

//     constructor(
//         nome,
//         senha,
//         post,
//         comentarios
//     ) {
        
//         // this.postagem = postagem;
//         this.comentarios = comentarios;
//     }

//     exibir() {
//         console.log(this.post + ' app ' + this.comentarios)
//     }

// }

// const pessoa = new Usuario(1,'alexandre', '1234')

// pessoa.show()



//  const post_antes = new Postagem(pessoa.nome, pessoa.senha, 'Essa é minha postagem', '')

// post_antes.abre()

// // post_antes.comentarios = 'comentario'

// // post_antes.abre()

// // const postic = new postagem(pessoa.nome, pessoa.senha, 'Essa é minha postagem', ' comentario')

// // postic.abre()

// // const coment = new comentarios(postic.nome,postic.senha,postic.post,'primeiro comentario')

// // coment.exibir()

// // const coment2 = new comentarios(postic.nome,postic.senha,postic.post,'segundo comentario')

// // postic.exibir()
