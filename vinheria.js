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
    tipoV1 = "Ele é um vinho tinto"
    tipoV2 = "Ele é um vinho branco"
    tipoV3 = "Ele é um vinho rosé"
    tipoV4 = "Ele é um vinho meio-seco"
    safraV1 = "e é da safra de 2022 (Vinho Jovem)"
    safraV2 = "e é da safra de 2018 (Vinho Amadurecido)"
    safraV3 = "e é da safra de 2014 (Vinho Antigo)"
    safraV4 = "e é da safra de 2011 (Vinho Antigo)"
    qntdV1 = 4
    qntdV2 = 9
    qntdV3 = 6
    qntdV4 = 11

    
    console.log("Esses sao os vinhos no nosso estoque: " + vinho1 + ", " + vinho2 + ", " + vinho3 + ", " + vinho4 + ".")
   
    
nomeDoVinho = prompt("Qual vinho você gostaria? ")
    //Verificação de estoque
    if (nomeDoVinho == vinho1)
    console.log(tipoV1 + ", " + safraV1 + ", " + "Quantidade en estoque: " + qntdV1 )
else if (qntdV1<5)
    console.log("QUANTIDADE EM ESTOQUE BAIXA!!!")

else if (nomeDoVinho == vinho2)
    console.log(tipoV1 + ", " + safraV1 + ", " + "Quantidade em estoque: " + qntdV2 )
else if (qntdV2<5)
    console.log("QUANTIDADE EM ESTOQUE BAIXA!!!")

else if (nomeDoVinho == vinho3)
    console.log(tipoV1 + ", " + safraV1 + ", " + "Quantidade em estoque: " + qntdV3 )
else if (qntdV3<5)
    console.log("QUANTIDADE EM ESTOQUE BAIXA!!!")

else if (nomeDoVinho == vinho4)
    console.log(tipoV1 + ", " + safraV1 + ", " + "Quantidade em estoque: " + qntdV4 )
else (qntdV4<5)
    console.log("QUANTIDADE EM ESTOQUE BAIXA!!!")
    
}




