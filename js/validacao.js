function verificaChuteValorValido (chute) {
    const numero = + chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>';
        return
    }
    if (numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor invalido o valor deve ser entre: ${menorValor} e ${maiorValor}</div>`;
        return
    }
    if (acertaNumero(numero)){
        if (numero >= numAleatorio){
            elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>';
        } else {
            elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>';
        }
        if (numero === numAleatorio)
        document.body.innerHTML = 
        `
        
        <h2>Acertou o numero secreto era ${numero}. </h2>

        <button id ='jogar-novamente' class= 'btn-jogar'>Recomeçar jogo</button>
        
        `
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

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        location.reload();
    }
})