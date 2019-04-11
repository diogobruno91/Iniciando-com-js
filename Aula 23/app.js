function pegaNome(){
	let nome = document.getElementById('nome').value;
	document.getElementById('nomeInput').innerHTML = nome;
}

var btnTeste = document.getElementById('btnTeste');

btnTeste.addEventListener('click', function(){
		let nome = document.getElementById('nome').value;
		document.getElementById('nomeInput').innerHTML = nome;	
});

/*
btnTeste.onclick = function(){
		let nome = document.getElementById('nome').value;
		document.getElementById('nomeInput').innerHTML = nome;	
};
*/

document.getElementById('nome').addEventListener('keyup', function(){
		let nome = document.getElementById('nome').value;
		document.getElementById('nomeInput').innerHTML = nome;	
});