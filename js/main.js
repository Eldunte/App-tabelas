var tableElement= document.querySelector("#tabela table")

var inputNome = document.querySelector("#pecaN")

console.log(tableElement)



var pecasNome = "cooler";







function RendezirarTableNome() {
    for (nome of pecasNome) {
        tableElement.innerHTML = ""
        var colunaNome = document.createElement('td')
        var TextoN = document.createTextNode(nome);

        colunaNome.appendChild(TextoN);
        tableElement.appendChild(colunaNome);
       

    }


}

RendezirarTableNome();