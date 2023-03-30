const formulario = document.getElementsByClassName("formulario");

formulario[0].addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome-completo').value;
    const email = document.getElementById('email').value;
    const selecaoIngresso = document.getElementById('selecao-ingresso').value;
    const dataNascimento = document.getElementById('data-nascimento').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('selecaoIngresso', selecaoIngresso);
    localStorage.setItem('dataNascimento', dataNascimento);
    
    window.location.href="ingresso-comprado.html";
})