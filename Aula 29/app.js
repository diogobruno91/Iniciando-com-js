function executaFormulario() {

	if(validacao()) {
		return;
	}

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

function escolheEstado() {
	let lista = [
		{
			"estado": "RS",
			"cidades": [
				{"nome":"Santa Cruz do Sul","valor":"santacruz"},
				{"nome":"Porto Alegre","valor":"portoalegre"}, 
			]
		},
		{
			"estado": "SC",
			"cidades": [
				{"nome":"Florianópolis","valor":"floripa"},
				{"nome":"Blumenau","valor":"blumenau"}, 
			]
		}
	];

	let estado = document.getElementById('estado').value;
	let cidade = document.getElementById('cidade');
	let existeEstado = false;

	for(let item of lista) {
		if(item.estado == estado) {
			existeEstado = true;
			let option = "";
			for(let item2 of item.cidades) {
				option += `<option value="${item2.valor}">${item2.nome}</option>`;
			}
			cidade.style.display = "initial";
			cidade.innerHTML = option; 
		} 
	}

	if(!existeEstado) {
		cidade.style.display = "none";
	}
}

function validacao() {
	let temError = false;
	let nome = document.getElementById('nome').value;

	let elementoNome = document.getElementById('nome');

	let nodePai = elementoNome.parentNode;
	if(!document.getElementById('nomeError')) {
		nodePai.innerHTML += `<span id="nomeError" style="display: none;"></span>`;
		document.getElementById('nome').value = nome;
	}

	let nomeError = document.getElementById('nomeError');

	if(nome == "") {
		nomeError.innerHTML = "Preencha com um nome válido!";
		nomeError.style.display = "initial";
		temError = true;
	} else{
		nomeError.style.display = "none";
	}
	return temError;

}