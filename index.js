const form = document.getElementById('form-contato')

const Nome = []
const numero = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumContato = document.getElementById('num-contato')
    

    let linha = '<tr>';
    linha += `<th>Nome: </th>`
    linha += `<td> ${inputNomeContato.value}</td> `;
    linha += `<th>Numero:</th>`
    linha += `<td> ${inputNumContato.value} </td>`;
    linha += '</tr>';

   linhas += linha

    const corpoTabela = document.querySelector('table');
    corpoTabela.innerHTML = linhas

    inputNomeContato.value = ''
    inputNumContato.value = ''

   


})

