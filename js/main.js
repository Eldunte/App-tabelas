var tableNome= document.querySelector("#tabela th")

var inputNome = document.querySelector("#pecaN")

console.log(tableNome)



var pecasNome = [
    "cooler"
]








function RendezirarTableNome() {
    for (nome of pecasNome) {
        tableNome.innerHTML = pecasNome

       

        var colunaNome = document.createElement('td')
        var TextoN = document.createTextNode(nome);

        colunaNome.appendChild(TextoN);
        tableNome.appendChild(colunaNome);
        
       

    }


}

RendezirarTableNome();