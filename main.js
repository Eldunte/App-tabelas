var tableNome= document.querySelector("#NomedaPeca")
var tableValor = document.querySelector("#NumerodoValor")
var tableFuncao = document.querySelector("#Funcao")

var inputNome = document.querySelector("#pecaN");
var inputValor = document.querySelector("#NumerodoValor");
var inputFuncao = document.querySelector("#Funcao")

console.log(inputFuncao)
console.log(inputValor)
console.log



var pecasNome = [
    "cooler"
]

var pecasValor = [
    "1273"
]

var pecasFuncao= [
    "não deixar o processador esquentar muito"
]







function RendezirarTableNome() {
    for (nome of pecasNome) {
       

       

        var colunaNome = document.createElement('td')
        var TextoN = document.createTextNode(nome);

        colunaNome.appendChild(TextoN);
        tableNome.appendChild(colunaNome);
        
       

    }


}

function RendezirarTableValor() {
    for ( valor of pecasValor) {
       
        var colunaValor = document.createElement('td');
        var TextoV = document.createTextNode(valor);

        colunaValor.appendChild(TextoV);
        tableValor.appendChild(colunaValor);
        
       

    }


}

function RendezirarTableFuncao() {
    for (Funcao of pecasFuncao) {
       

       

        var colunaFuncao = document.createElement('td')
        var TextoF = document.createTextNode(Funcao);

        colunaFuncao.appendChild(TextoF);
        tableFuncao.appendChild(colunaFuncao);
        
       

    }


}

function AdicionarPeca(){

    
}


RendezirarTableNome();
RendezirarTableFuncao();
RendezirarTableValor();