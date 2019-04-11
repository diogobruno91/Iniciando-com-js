	class Util {
		static lista(lista){
			let html = '<ul>';

			for(let item of lista){
				html += `
				<li>${item}</li>

				`;
			}
			html += '</u>';
			return html;
		}
	}

	let lista = ["Diogo", "Camila", "Gustavo"];
	document.getElementById('listaUsuarios').innerHTML = Util.lista(lista);
