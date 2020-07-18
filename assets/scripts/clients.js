var nome = 'Cliente Exemplo';
var email= 'teste@teste.com';
var cpf= '555.555.555-55';
var data= '18/07/2020';


var corpoTabela = document.querySelector('tbody');

var tr = document.createElement('tr');
var tdNome = document.createElement('td');
var tdEmail = document.createElement('td');
var tdCPF = document.createElement('td');
var tdData = document.createElement('td');

tdNome.textContent = nome;
tdEmail.textContent = email;
tdCPF.textContent = cpf;
tdData.textContent = data;

tr.appendChild(tdNome);
tr.appendChild(tdEmail);
tr.appendChild(tdCPF);
tr.appendChild(tdData);
corpoTabela.appendChild(tr);