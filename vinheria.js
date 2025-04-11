//Cadastrando Usuario
alert("Seja Bem-Vindo(a) a Vinharia Agnello")
let nomeUsuario = prompt("Digite seu nome para realizarmos o cadastro")
if (nomeUsuario == ""){
    alert("O nome de usuario nao foi inserido")
}
else{
    alert("Nome de usuario inserido: " + nomeUsuario)
    alert("Cadastro realizado!!, veja os detalhes no console.")
    console.log("Seu cadastro foi realizado com sucesso " + nomeUsuario)
}
