export function corPrimaria(cor){
    cor = cor.toLowerCase();
    return cor = 'azul' || cor == 'amarelo' || cor == 'vermelho';
}



export function frequenciaCaractere(texto, caractere){
    let qtd = 0;
    for (let letra of texto) {
        if (letra == caractere)
        qtd++;
    }
}



export function ingresso (qtd, qtdM, dia, nacionalidade) {

if (nacionalidade.toLowerCase() == 'brasileiro')
    return (qtd + qtdM) * 5; 

    else if (dia.toLowerCase() == 'quarta')
    return (qtd , qtdM) * 14.25;

    else 
        return (qtd * 28.5/ + (qtdM * 14.25));
    
}


export function maiorNumero (numeros){
    let maior = Number.MIN_VALUE;
    for (let item of numeros) {
        if (item > maior)
        maior = item;
    }
    return maior;
}