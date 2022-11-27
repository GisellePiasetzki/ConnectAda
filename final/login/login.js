import { dataBase } from "../dataBase/data.js";

// export let thisUser = '';

function logar(event){

  

  event.preventDefault();

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  // const login = "admin@gmail.com"
  // const password = 'asdvads'

  // const validar = dataBase.find((element) => element.email == login && element.password == password);

  // if (validar){
  //    alert("sucesso");
  //     location.href = "../feed/feed.html";
  //     return;
  // } else  alert('Usuário ou senha incorretos')
const index = dataBase.findIndex(item => item.email === login)


  if(dataBase[index].password === password){
      const thisUser = dataBase[index].email;
      // console.log(thisUser)
      alert("sucesso");
      StorageCreator(thisUser)

      location.href = "../feed/feed.html";
      
      return ;
  } else { alert('Usuário ou senha incorretos')
}


};


// logar()


const buttonLogin = document.getElementById('buttonLogin')
buttonLogin.addEventListener("click", function(event){logar(event)});

const StorageCreator = (thisUser) => {
  window.localStorage.setItem('user',JSON.stringify(thisUser) )
}



