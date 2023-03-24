const botoes = document.getElementsByClassName("perguntas-frequentes__botao--icone");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        let temClasseAtivo = this.classList.contains('active');
        resetaBotoes();
        if (!temClasseAtivo) {
            this.classList.toggle("active");
        }
    })
}

function resetaBotoes() {
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList['remove']('active');
    }
}