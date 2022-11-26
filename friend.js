
class User {
    #nome;
    #email;
    user;

    constructor(nome, email, user) {
        this.#nome = nome;
        this.#email = email;
        this.user = user;
        this.friends = []; //lista de amigos vazia para ser preenchida
    }

    newFriendship(friend) {
        if(!this.friends.includes(friend.user)) { // checa se o user do meu amigo existe na minha lista de amigos (! se ele não estiver vai para o if)
            friend.friends.push(this.user); // add eu como amigo dele
            this.friends.push(friend.user); // add ele como meu amigo
        }
        else {
            console.log(`${friend.user} já é seu amigo.`) //se ele já for meu amigo não add novamente
        }
    }

    deleteFriendship(friend) {
        if(this.friends.includes(friend.user)) { // checa se o user do meu amigo existe na minha lista de amigos
            const myIndex = friend.friends.indexOf(this.user); //procura o index do meu amigo na MINHA lista
            friend.friends.splice(myIndex, 1); // deleta meu amigo na minha lista

            const hisIndex = this.friends.indexOf(friend.user); 
            this.friends.splice(hisIndex, 1); // me deleta da lista dele
        }
        else {
            console.log(`${friend.user} não está na sua lista de amigos.`) //se ele não for mais meu amigo aparece essa mensagem
        }
    }
}

const user0 = new User("User0", "user0@gmail.com", "user_0");
const user1 = new User("User1", "user1@gmail.com", "user_1");
const user2 = new User("User2", "user2@gmail.com", "user_2");
const user3 = new User("User3", "user3@gmail.com", "user_3");
const user4 = new User("User4", "user4@gmail.com", "user_4");
const user5 = new User("User5", "user5@gmail.com", "user_5");
const user6 = new User("User6", "user6@gmail.com", "user_6");
const user7 = new User("User7", "user7@gmail.com", "user_7");
const user8 = new User("User8", "user8@gmail.com", "user_8");
const user9 = new User("User9", "user9@gmail.com", "user_9");

console.log(user1.nome)

console.log("Teste Add")
user0.newFriendship(user1)
user0.newFriendship(user2)
user0.newFriendship(user3)
user0.newFriendship(user4)
user1.newFriendship(user0)
// user0.newFriendship(user13)

console.log(`${user0.user}: ${user0.friends}`)
console.log(`${user1.user}: ${user1.friends}`)
console.log(`${user2.user}: ${user2.friends}`)
console.log(`${user3.user}: ${user3.friends}`)
console.log(`${user4.user}: ${user4.friends}`)


console.log("\nTeste Delete")
user0.deleteFriendship(user2)
user1.deleteFriendship(user0)
user1.deleteFriendship(user0)

console.log(`${user0.user}: ${user0.friends}`)
console.log(`${user1.user}: ${user1.friends}`)
console.log(`${user2.user}: ${user2.friends}`)
console.log(`${user3.user}: ${user3.friends}`)
console.log(`${user4.user}: ${user4.friends}`)

// Module.exports = User