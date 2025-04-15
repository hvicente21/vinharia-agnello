window.onload = function () {
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
//Informaçoes sobre os vinhos
    alert("A seguir, veja os detalhes do vinho do console")
    let vinho1 = "Catena Malbec"
    let vinho2 = "Sassoalloro"
    let vinho3 = "Amancaya"
    let vinho4 = "Promis"
    classV1 = "Seu vinho escolhido é um vinho tinto, e é da safra de 2022 (Vinho Jovem)."
    classV2 = "Seu vinho escolhido é um vinho branco, e é da safra de 2018 (Vinho Amadurecido)."
    classV3 = "Seu vinho escolhido é um vinho rosé, e é da safra de 2014 (Vinho Antigo)."
    classV4 = "Seu vinho escolhido é um vinho meio-seco, e é da safra de 2011 (Vinho Antigo)."
    qntdV1 = 4
    qntdV2 = 7
    qntdV3 = 6
    qntdV4 = 1 

    console.log("Esses são os vinhos no nosso estoque: " + vinho1 + ", " + vinho2 + ", " + vinho3 + ", " + vinho4 + ".")
    //Verificação de estoque
    nomeDoVinho = prompt("Qual vinho você gostaria? ")
    if (nomeDoVinho == vinho1){
        console.log(classV1 + "Quantidade em estoque: " + qntdV1 + " (Estoque baixo!!)" )
    }
    else if(nomeDoVinho == vinho2){
        console.log(classV2 + "Quantidade em estoque: " + qntdV2)
    }
    else if(nomeDoVinho == vinho3){
        console.log(classV3 + "Quantidade em estoque: " + qntdV3)
    }
    else if(nomeDoVinho == vinho4){
        console.log(classV4 + "Quantidade em estoque: " + qntdV4 + " (Estoque baixo!!)" )
    }
    else{
        console.log("Você não escolheu nenhum vinho.")
    }
    }

};

