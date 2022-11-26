// import { dataBase } from "../dataBase/data.js";

function logar(){

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  // console.log('teste')

  // const login = 'admin'
  // const password = 'admin'
  console.log(login)
  console.log(password)

  // if(login == "admin" && password == "admin"){
  //   alert("sucesso");
  //   // location.href = "/front-Gabi/feed.html";
  // } else{
  //   alert('Usuário ou senha incorretos')
  // }
  
//   dataBase.forEach((element) => {
//     console.log(element.email,element.password)
//     if(element.email == login && element.password == password){
//       alert("sucesso");
//       // location.href = "../feed/feed.html";
//     } else {
//       alert('Usuário ou senha incorretos')
//     }

// })
  // return false
};

//console.log(dataBase[0].email)

const botao = document.getElementById('botaogo')
botao.addEventListener("click", function(){logar()});

// logar();
