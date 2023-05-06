let QntP1 = 0;
let QntP2 = 0;
let QntP3 = 0;
let QntP4 = 0;
let total = 0
let PP1 = 1300;
let PP2 = 8050.25;
let PP3 = 4000;
let PP4 = 6000;
let NP1 = "Ingressos para París";
let NP2 = "Ingressos para Tokio";
let NP3 = "Ingressos para Rio de Janeiro";
let NP4 = "Ingressos para Itália";

let username = "";
let useremail = "";
let userpassword = "";

function onload(){
    document.getElementById("tituloP1").innerHTML = NP1;
    document.getElementById("tituloP2").innerHTML = NP2;
    document.getElementById("tituloP3").innerHTML = NP3;
    document.getElementById("tituloP4").innerHTML = NP4;
}

function ProdutoAdicionado(nomeProd){
    document.getElementById("mensagemTexto").innerHTML = nomeProd+" adicionado a lista de desejos!";
    document.getElementById("mensagem").style.display = "block"
    setTimeout(function(){
    document.getElementById("mensagem").style.display = "none"
    },2000);
}

function atualizarTotal(valor){
    total += valor
    document.getElementById("total").innerHTML = "R$: " + total
}

function P1(){
    QntP1 += 1;
    atualizarTotal(PP1)
    ProdutoAdicionado(NP1)
    adicionarItem(NP1, PP1)
}

function P2(){
    QntP2 += 1;
    atualizarTotal(PP2)
    ProdutoAdicionado(NP2)
    adicionarItem(NP2, PP2)
}

function P3(){
    QntP3 += 1;
    atualizarTotal(PP3)
    ProdutoAdicionado(NP3)
    adicionarItem(NP3, PP3)
}

function P4(){
    QntP4 += 1;
    atualizarTotal(PP4)
    ProdutoAdicionado(NP4)
    adicionarItem(NP4, PP4)
}

function adicionarItem(nomeProd, preço) {
  // Obtenha o valor do texto da variável (pode ser uma entrada de usuário, por exemplo)
  var textoVariavel = nomeProd + "   - R$: " + preço; // Substitua pela sua variável real
  
  // Crie um novo elemento <li>
  var novoItem = document.createElement('li');
  
  // Defina o conteúdo do novo item com base na variável
  novoItem.textContent = textoVariavel;
  
  // Anexe o novo item à lista
  document.getElementById('listaItens').appendChild(novoItem);
}

function cadastro(){

    var inputNome = document.querySelector("#Inome");
    var inputEmail = document.querySelector("#Iemail");
    var inputSenha = document.querySelector("#Isenha");
    var username = inputNome.value;
    var useremail = inputEmail.value;
    var userpassword = inputSenha.value;

    document.getElementById("nomeUser").innerHTML = username;
    
    document.getElementById("tituloUserNome").innerHTML = username
    document.getElementById("tituloUserEmail").innerHTML = useremail
    document.getElementById("tituloUserSenha").innerHTML = userpassword
}
