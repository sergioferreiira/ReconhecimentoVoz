function verificaChuteValorValido (chute) {
    const numero = + chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>';
    }
    if (numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor invalido o valor deve ser entre: ${menorValor} e ${maiorValor}</div>`;
    }
    if (acertaNumero(numero)){
        if (numero >= numAleatorio){
            elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>';
        }
        if (numero <= numAleatorio){
            elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>';
        }
        if (numero == numAleatorio)
        elementoChute.innerHTML += `<div>Você acertou o numero secreto era ${numAleatorio}</div>`
    }
}
function acertaNumero(numero){
    return numero;
}
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < elementoMenorValor;
}
