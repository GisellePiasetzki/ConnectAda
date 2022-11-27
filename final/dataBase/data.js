import { User } from "../user/User.class.js";
import { Admin } from "../user/Admin.class.js";
// import { MainPost } from "../newPost/Postagem.class.js";
// import { Post } from "../newPost/newpost.js";

export const dataBase = [];

// function referencia(id,fullName,password,email,userName){
//     const add = {id:id,
//                 fullName:fullName,
//                 password:password,
//                 email:email,
//                 userName:userName}
    
//     dataBase.push(add)
// }

// let user1 = new User ("gabiCeranto", "admin", "admin","gaabiceranto")
// dataBase.push(user1)

//referencia(user1.id,user1.fullName,user1.password,user1.email,user1.userName)

// user1 = new User ("Alexandre Oliveira", "macacoamarelo", "xandesantucci@gmail.com","xandes")
// dataBase.push(user1)



// const admin1 = new Admin ("Gabriel", "senha", "gabriel@gmail.com","Gab")
// dataBase.push(admin1)

// const post1 = new MainPost ("gabi@gmail.com","gabiCeranto","gabi Ceranto","Primeiro Post")

const user0 = new User ("gabiCeranto", "admin", "gabi@gmail.com","gaabiceranto")
const user1 = new User ("Alexandre Oliveira", "macacoAmarelo", "xandesantucci@gmail.com","xandes")
const user2 = new User ("Adriana Yamashita", "formigaVermelha", "dri@gmail.com","drib")
const admin3 = new Admin ("Gabriel", "senha", "gabriel@gmail.com","Gab")
const user4 = new User ("testUser", "admin", "admin@gmail.com", "userAdmin")


// const post00 = new Post ("texto0 user 0")
// user0.newPost(post00)

dataBase.push(user0, user1, user2, admin3, user4)

// console.log(dataBase[0])

user0.newFriendship(user1)
console.log(dataBase[0])

// user0.deleteFriendship(user1)
// console.log(dataBase[0])



// dataBase[3].deleteUser(dataBase,'xandesantucci@gmail.com')

// console.log(dataBase)




