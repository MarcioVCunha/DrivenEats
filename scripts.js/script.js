const botaoCinza = document.querySelector(".cinza");
const botaoVerde = document.querySelector(".verde");

let boolComida = false;
let boolRefri = false;
let boolSobremesa = false;

let pedidoComida;
let pedidoRefri;
let pedidoSobremesa;

function selecionarComida(opcaoSelecionada){
    pedidoComida = document.querySelector(".lista-comida .selecionado")    
    
    if(pedidoComida !== null){
        pedidoComida.classList.remove("selecionado")
        pedidoComida.querySelector("ion-icon").classList.add("sumir");
    }

    boolComida = true;

    selecionar(opcaoSelecionada);
}

function selecionarRefri(opcaoSelecionada){
    pedidoRefri = document.querySelector(".lista-refri .selecionado")    
    
    if(pedidoRefri !== null){
        pedidoRefri.classList.remove("selecionado")
        pedidoRefri.querySelector("ion-icon").classList.add("sumir");
    }

    boolRefri = true;

    selecionar(opcaoSelecionada);
}

function selecionarSobremesa(opcaoSelecionada){
    pedidoSobremesa = document.querySelector(".lista-sobremesa .selecionado")    
    
    if(pedidoSobremesa !== null){
        pedidoSobremesa.classList.remove("selecionado")
        pedidoSobremesa.querySelector("ion-icon").classList.add("sumir");
    }

    boolSobremesa = true;

    selecionar(opcaoSelecionada);
}

function selecionar(opcaoSelecionada){
    const checkBox = opcaoSelecionada.querySelector("ion-icon");

    opcaoSelecionada.classList.toggle("selecionado");
    checkBox.classList.remove("sumir");

    if(boolComida && boolRefri && boolSobremesa){
        botaoCinza.classList.add("sumir");

        botaoVerde.classList.remove("sumir");
    }
}

function finalizar(){
    pedidoComida = document.querySelector(".lista-comida .selecionado");
    pedidoRefri = document.querySelector(".lista-refri .selecionado");
    pedidoSobremesa = document.querySelector(".lista-sobremesa .selecionado");

    const nomeComidaSelecionado = pedidoComida.querySelector(".nome-da-opcao").innerHTML;
    const nomeRefriSelecionado = pedidoRefri.querySelector(".nome-da-opcao").innerHTML;
    const nomeSobremesaSelecionado = pedidoSobremesa.querySelector(".nome-da-opcao").innerHTML;

    //Pegando os valores dos pratos de dentro do HTML, removendo os caracteres R$ e a ","
    const valorComidaSelecionada = pedidoComida.querySelector(".preco-da-opcao").innerHTML.replace(/\D+/g, "");
    const valorRefriSelecionada = pedidoRefri.querySelector(".preco-da-opcao").innerHTML.replace(/\D+/g, "");
    const valorSobremesaSelecionada = pedidoSobremesa.querySelector(".preco-da-opcao").innerHTML.replace(/\D+/g, "");

    //Divindo por 100 para criar os centavos e colocando 2 casas decimais
    let totalPedido = (Number(valorComidaSelecionada) + Number(valorRefriSelecionada) + Number(valorSobremesaSelecionada))/100;
    totalPedido = totalPedido.toFixed(2);

    const pedido = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: " + nomeComidaSelecionado + "\n- Bebida: " + nomeRefriSelecionado + "\n- Sobremesa: " + nomeSobremesaSelecionado + "\nTotal: " + totalPedido)

    window.location = 'https://wa.me/5519992732874?text=' + pedido;
}