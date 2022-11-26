// const Entidade = require("./Entidade.class.js");
// const {create_UUID} = require ("./utils.js");

import { Entities } from "./Entities.class.js";

export class User extends Entities {
    userName;
    fullName;
    #password;
    email;

    constructor(fullName, password, email, userName){
        super(Entities.id);
        this.fullName = fullName;
        this.#password = password;
        this.email = email;
        this.userName = userName;
    }

    get password () {
        return this.#password;
    }

    set password (newPassword) {
        this.#password = newPassword;
    }


}

// const userTeste = new User ("gabiCeranto", "leaoVerde", "gabiceranto@gmail.com","gaabiceranto")
// console.log(userTeste)

// .module.exports = Usuario;
