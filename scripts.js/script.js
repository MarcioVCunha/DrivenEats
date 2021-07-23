const opcaoComida1 = document.querySelector(".opcaoComida1");
const checkBoxComida1 = document.querySelector(".checkBoxComida1");
const opcaoComida2 = document.querySelector(".opcaoComida2");
const checkBoxComida2 = document.querySelector(".checkBoxComida2");
const opcaoComida3 = document.querySelector(".opcaoComida3");
const checkBoxComida3 = document.querySelector(".checkBoxComida3");
const opcaoComida4 = document.querySelector(".opcaoComida4");
const checkBoxComida4 = document.querySelector(".checkBoxComida4");

const opcaoRefri1 = document.querySelector(".opcaoRefri1");
const checkBoxRefri1 = document.querySelector(".checkBoxRefri1");
const opcaoRefri2 = document.querySelector(".opcaoRefri2");
const checkBoxRefri2 = document.querySelector(".checkBoxRefri2");
const opcaoRefri3 = document.querySelector(".opcaoRefri3");
const checkBoxRefri3 = document.querySelector(".checkBoxRefri3");
const opcaoRefri4 = document.querySelector(".opcaoRefri4");
const checkBoxRefri4 = document.querySelector(".checkBoxRefri4");

const opcaoSobremesa1 = document.querySelector(".opcaoSobremesa1");
const checkBoxSobremesa1 = document.querySelector(".checkBoxSobremesa1");
const opcaoSobremesa2 = document.querySelector(".opcaoSobremesa2");
const checkBoxSobremesa2 = document.querySelector(".checkBoxSobremesa2");
const opcaoSobremesa3 = document.querySelector(".opcaoSobremesa3");
const checkBoxSobremesa3 = document.querySelector(".checkBoxSobremesa3");
const opcaoSobremesa4 = document.querySelector(".opcaoSobremesa4");
const checkBoxSobremesa4 = document.querySelector(".checkBoxSobremesa4");

const botaoCinza = document.querySelector(".cinza");
const botaoVerde = document.querySelector(".verde");

let boolComida = false;
let boolRefri = false;
let boolSobremesa = false;


function selecionarComida(opcaoSelecionada){
    opcaoComida1.classList.remove("selecionado");
    checkBoxComida1.classList.add("sumir");
    opcaoComida2.classList.remove("selecionado");
    checkBoxComida2.classList.add("sumir");
    opcaoComida3.classList.remove("selecionado");
    checkBoxComida3.classList.add("sumir");
    opcaoComida4.classList.remove("selecionado");
    checkBoxComida4.classList.add("sumir");

    boolComida = true;

    selecionar(opcaoSelecionada);
}

function selecionarRefri(opcaoSelecionada){
    opcaoRefri1.classList.remove("selecionado");
    checkBoxRefri1.classList.add("sumir");
    opcaoRefri2.classList.remove("selecionado");
    checkBoxRefri2.classList.add("sumir");
    opcaoRefri3.classList.remove("selecionado");
    checkBoxRefri3.classList.add("sumir");
    opcaoRefri4.classList.remove("selecionado");
    checkBoxRefri4.classList.add("sumir");

    boolRefri = true;

    selecionar(opcaoSelecionada);
}

function selecionarSobremesa(opcaoSelecionada){
    opcaoSobremesa1.classList.remove("selecionado");
    checkBoxSobremesa1.classList.add("sumir");
    opcaoSobremesa2.classList.remove("selecionado");
    checkBoxSobremesa2.classList.add("sumir");
    opcaoSobremesa3.classList.remove("selecionado");
    checkBoxSobremesa3.classList.add("sumir");
    opcaoSobremesa4.classList.remove("selecionado");
    checkBoxSobremesa4.classList.add("sumir");

    boolSobremesa = true;

    selecionar(opcaoSelecionada);
}

function selecionar(opcaoSelecionada){
    let checkBox = opcaoSelecionada.querySelector("ion-icon");

    opcaoSelecionada.classList.toggle("selecionado");

    checkBox.classList.remove("sumir");

    if(boolComida && boolRefri && boolSobremesa){
        botaoCinza.classList.add("sumir");

        botaoVerde.classList.remove("sumir");
    }
}

let mensagem = encodeURI('Teste 1234');
let link = 'https://wa.me/5519992732874text=' + mensagem;

function finalizar(){
    botaoVerde.innerHTML = '<a><button class="roboto">Fechar pedido</button></a>';
    botaoVerde.querySelector("a").setAttribute("href", );
    botaoVerde.querySelector("a").setAttribute("target", "_blank")
}