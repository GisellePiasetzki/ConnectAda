
function logar(){
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  if(login == "admin" && password == "admin"){
    alert("sucesso");
    location.href = "home.html";
  } else{
    alert('Usuário ou senha incorretos')
  }
  
}
