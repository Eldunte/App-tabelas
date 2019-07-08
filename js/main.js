var tableNome= document.querySelector("#NomedaPeca")
var tableValor = document.querySelector("#")
var tableFuncao = //pega a id, ta na id da Th

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