var tableNome= document.querySelector("#tabela th")

var inputNome = document.querySelector("#pecaN")

console.log(tableNome)


function NomedaPeca(pecaNome) {
    this.NomedaPeca = pecaNome ;
    
  }
  
  var pecasNome = new NomedaPeca("cooler");
  








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