import { User } from "../user/User.class.js";

export const dataBase = [];

function referencia(id,fullName,password,email,userName){
    const add = {id:id,
                fullName:fullName,
                password:password,
                email:email,
                userName:userName}
    
    dataBase.push(add)
}

let user1 = new User ("gabiCeranto", "admin", "admin","gaabiceranto")

referencia(user1.id,user1.fullName,user1.password,user1.email,user1.userName)

user1 = new User ("Alexandre Oliveira", "macacoamarelo", "xandesantucci@gmail.com","xandes")

referencia(user1.id,user1.fullName,user1.password,user1.email,user1.userName)

console.log(dataBase)


