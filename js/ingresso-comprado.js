const dadosIngresso = document.querySelector('.card__ingresso-comprado--textos');

const nomeIngresso = localStorage.getItem('nome');
const tipoIngresso = localStorage.getItem('selecaoIngresso');

document.getElementById('nome').innerHTML = `${nomeIngresso}`;
document.getElementById('categoria-ingresso').innerHTML = "Ingresso Cortesia";
document.getElementById('tipo-ingresso').innerHTML = `${tipoIngresso}`;
document.getElementById('data-ingresso').innerHTML = "Data: 11/03";
document.getElementById('local-ingresso').innerHTML = "Local: São Paulo - SP";