// DADOS INGRESSO
const formulario = document.getElementsByClassName("formulario");

formulario[0].addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = evento.target.elements['nome-completo'];
    const email = evento.target.elements['email'];
    const selecaoIngresso = evento.target.elements['selecao-ingresso'];
    const dataNascimento = evento.target.elements['data-nascimento'];
    
    criaElemento(nome.value, email.value, selecaoIngresso.value, dataNascimento.value);
});

function criaElemento(nomeCompleto, email, selecaoIngresso, dataNascimento) {
    console.log(nomeCompleto);
    console.log(email);
    console.log(selecaoIngresso);
    console.log(dataNascimento);

    window.open("ingresso-comprado.html", target="_self")
}