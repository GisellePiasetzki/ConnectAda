// const Usuario = require("./Usuário.class");
// const Postagem = require("./Postagem.class");

// import { Usuario } from "./Usuario.class.mjs";
// import { Postagem } from "./Postagem.class.js";


// //teste
// const pessoa = new Usuario("giselle", 'saasas');
// console.log(pessoa);

// const postagem = new Postagem(pessoa.id)
// console.log(postagem);

import Postagem from "./Postagem.class.js"


class NewPostFeed {

 

    CreatorNewPostFeed () {

        localStorage.getItem(postStorageContent);

    if (storageCreator){
        const objStorageCreator = JSON.parse(storageCreator);
        const {idPost,txtPost} = objStorageCreator;
        
        const liContent = document.creatorElement('li');
        liContent.setAttribute("id","liPost");
        liContent.innerHTML = `
        <div class="postContainer">
                    <div class="avatarIcon">
                        <img src="/front-Gabi/assets-front/user-profile.svg" alt="">
                    </div>
                    <div class="userNameAndPostContainer">
                        <div>
                            <div class="userNameAndHour">
                                <strong>Robson Otavio</strong>
                                <span>@robson_otavio</span>
                                <span>·</span>
                                <span>21h</span>
                            </div>
                            <div class="btnEditAndDeletPost">
                                <button>
                                    <img src="/front-Gabi/assets-front/three-dots.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>${txtPost}</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="post">
                <div class="postContainer">
                    <div class="avatarIcon">
                        <img src="/front-Gabi/assets-front/user-profile.svg" alt="">
                    </div>
                    <div class="userNameAndPostContainer">
                        <div>
                            <div class="userNameAndHour">
                                <strong>Robson Otavio</strong>
                                <span>@robson_otavio</span>
                                <span>·</span>
                                <span>21h</span>
                            </div>
                            <div class="btnEditAndDeletPost">
                                <button>
                                    <img src="/front-Gabi/assets-front/three-dots.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dignissimos consectetur.</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="post">
                <div class="postContainer">
                    <div class="avatarIcon">
                        <img src="/front-Gabi/assets-front/user-profile.svg" alt="">
                    </div>
                    <div class="userNameAndPostContainer">
                        <div>
                            <div class="userNameAndHour">
                                <strong>Robson Otavio</strong>
                                <span>@robson_otavio</span>
                                <span>·</span>
                                <span>21h</span>
                            </div>
                            <div class="btnEditAndDeletPost">
                                <button>
                                    <img src="/front-Gabi/assets-front/three-dots.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dignissimos consectetur.</p>
                        </div>
                    </div>
                </div>
                `



        



        

    
    }





}




    

} 