function mudarBorda(){
    if(this.style.border === "5px solid rgb(50, 183, 47)"){
        this.style.border = "none";
    } else {
        this.style.border = "5px solid rgb(50, 183, 47)"
    }
}

const opcoes = document.getElementsByName("opcao");


for(let i = 0; i < opcoes.length; i++){
    opcoes[i].addEventListener("click", mudarBorda);
}