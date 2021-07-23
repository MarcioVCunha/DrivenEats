const opcoesComida = document.getElementsByName("opcaoComida");
const opcoesRefri = document.getElementsByName("opcaoRefri");
const opcoesSobremesa = document.getElementsByName("opcaoSobremesa");
const checkComida = document.getElementsByClassName("checkComida");
const checkRefri = document.getElementsByClassName("checkRefri");
const checkSobremesa = document.getElementsByClassName("checkSobremesa");

const botaoCinza = document.querySelector(".cinza");
const botaoVerde = document.querySelector(".verde");

function selecionar(){
    if(this.getAttribute("name") === "opcaoComida"){
        boolComidaSeleta = true;

        elemento = this.getElementsByClassName("preco-da-opcao");
        valorComida = elemento[0];

        for(i = 0; i < opcoesComida.length; i++){
            opcoesComida[i].classList.remove("borda-verde");
            checkComida[i].classList.add("sumir");
        }
    }

    if(this.getAttribute("name") === "opcaoRefri"){
        boolRefriSeleto = true;

        elemento = this.getElementsByClassName("preco-da-opcao");
        valorRefri = elemento[0];

        for(i = 0; i < opcoesRefri.length; i++){
            opcoesRefri[i].classList.remove("borda-verde");
            checkRefri[i].classList.add("sumir");
        }
    }

    if(this.getAttribute("name") === "opcaoSobremesa"){
        boolSobremesaSelete = true;

        elemento = this.getElementsByClassName("preco-da-opcao");
        valorSobremesa = elemento[0];

        for(i = 0; i < opcoesSobremesa.length; i++){
            opcoesSobremesa[i].classList.remove("borda-verde");
            checkSobremesa[i].classList.add("sumir");
        }
    }

    elemento = this.getElementsByClassName("sumir");
    elemento[0].classList.remove("sumir");

    this.classList.add("borda-verde");
    

    alert(valorComida.innerHTML);
    alert(valorRefri.innerHTML);
    alert(valorSobremesa.innerHTML);

    if(boolComidaSeleta && boolRefriSeleto && boolSobremesaSelete){
        botaoCinza.classList.add("sumir");
        botaoVerde.classList.remove("sumir");
    }
}

for(let i = 0; i < opcoesComida.length; i++){
    opcoesComida[i].addEventListener("click", selecionar);
}

for(i = 0; i < opcoesRefri.length; i++){
    opcoesRefri[i].addEventListener("click", selecionar);
}

for(i = 0; i < opcoesSobremesa.length; i++){
    opcoesSobremesa[i].addEventListener("click", selecionar);
}

let boolComidaSeleta = false;
let boolRefriSeleto = false;
let boolSobremesaSelete = false;
let elemento;
let valorComida;
let valorRefri;
let valorSobremesa;