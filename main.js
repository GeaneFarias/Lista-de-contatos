const form = document.getElementById('form-contato')

const Nome = []
const numero = []

let linhas = ''

form.addEventListener('submit', function(e){

    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumContato = document.getElementById('num-contato')
    

    let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value}</td> `;
    linha += `<td> ${inputNumContato.value} </td>`;
    linha += '</tr>';

    linhas += linha

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas

    inputNomeContato.value = ''
    inputNumContato.value = ''




})

