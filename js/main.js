// Perguntas Frequentes

let botaoAccordion = document.getElementsByClassName("perguntas-frequentes__botao");
let i;
let painelResposta = document.getElementsByClassName("perguntas-frequentes__resposta");

for (i = 0; i < botaoAccordion.length; i++) {
    botaoAccordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}