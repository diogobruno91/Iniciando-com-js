function executaFormulario() {
	let nome = document.getElementById('nome').value;
	let sobrenome = document.getElementById('sobrenome').value;
	let estado = document.getElementById('estado').value;
	let cidade = document.getElementById('cidade').value;

	let exibeDados = document.getElementById('exibeDados');
	exibeDados.innerHTML += `<p>Nome: ${nome} </p>`;
	exibeDados.innerHTML += `<p>Sobrenome: ${sobrenome} </p>`;
	exibeDados.innerHTML += `<p>Estado: ${estado} </p>`;
	exibeDados.innerHTML += `<p>Cidade: ${cidade} </p>`;

}