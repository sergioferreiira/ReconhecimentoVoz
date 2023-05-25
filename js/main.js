
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

const menorValor = 1;
const maiorValor = 100;

const saida = document.querySelector('.box');
const numAleatorio = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
 return parseInt(Math.random(menorValor) * maiorValor + 1);
 
}

console.log(numAleatorio);



elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;