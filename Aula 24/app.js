function pegaNome(){
	let nome = document.getElementById('nome').value;
	document.getElementById('nomeInput').innerHTML = nome;
}

var btnTeste1 = document.getElementById('btnTeste1');

btnTeste1.addEventListener('click', function(){
		let nome = document.getElementById('nome').value;
		document.getElementById('nomeInput').innerHTML = nome;

		document.getElementById('btnTeste1').style.display = "none";
		document.getElementById('btnTeste2').style.display = "initial";

		setTimeout(function() {
			document.getElementById('btnTeste1').style.display = "initial";
			document.getElementById('btnTeste2').style.display = "none";
		}, 3000);

});


/*
btnTeste.onclick = function(){
		let nome = document.getElementById('nome').value;
		document.getElementById('nomeInput').innerHTML = nome;	
};

document.getElementById('nome').addEventListener('keyup', function(){
		let nome = document.getElementById('nome').value;
		document.getElementById('nomeInput').innerHTML = nome;	
});

*/