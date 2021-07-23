const opcaoComida1 = document.querySelector(".opcaoComida1");
const opcaoComida2 = document.querySelector(".opcaoComida2");
const opcaoComida3 = document.querySelector(".opcaoComida3");
const opcaoComida4 = document.querySelector(".opcaoComida4");

const opcaoRefri1 = document.querySelector(".opcaoRefri1");
const opcaoRefri2 = document.querySelector(".opcaoRefri2");
const opcaoRefri3 = document.querySelector(".opcaoRefri3");
const opcaoRefri4 = document.querySelector(".opcaoRefri4");

const opcaoSobremesa1 = document.querySelector(".opcaoSobremesa1");
const opcaoSobremesa2 = document.querySelector(".opcaoSobremesa2");
const opcaoSobremesa3 = document.querySelector(".opcaoSobremesa3");
const opcaoSobremesa4 = document.querySelector(".opcaoSobremesa4");

const botaoCinza = document.querySelector(".cinza");
const botaoVerde = document.querySelector(".verde");

let boolComida = false;
let boolRefri = false;
let boolSobremesa = false;


function selecionarComida(opcaoSelecionada){
    opcaoComida1.classList.remove("selecionado");
    opcaoComida2.classList.remove("selecionado");
    opcaoComida3.classList.remove("selecionado");
    opcaoComida4.classList.remove("selecionado");

    boolComida = true;

    selecionar(opcaoSelecionada);
}

function selecionarRefri(opcaoSelecionada){
    opcaoRefri1.classList.remove("selecionado");
    opcaoRefri2.classList.remove("selecionado");
    opcaoRefri3.classList.remove("selecionado");
    opcaoRefri4.classList.remove("selecionado");

    boolRefri = true;

    selecionar(opcaoSelecionada);
}

function selecionarSobremesa(opcaoSelecionada){
    opcaoSobremesa1.classList.remove("selecionado");
    opcaoSobremesa2.classList.remove("selecionado");
    opcaoSobremesa3.classList.remove("selecionado");
    opcaoSobremesa4.classList.remove("selecionado");

    boolSobremesa = true;

    selecionar(opcaoSelecionada);
}

function selecionar(opcaoSelecionada){
    opcaoSelecionada.classList.toggle("selecionado");

    if(boolComida && boolRefri && boolSobremesa){
        botaoCinza.classList.add("sumir");

        botaoVerde.classList.remove("sumir");
    }
}