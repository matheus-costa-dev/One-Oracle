/*

Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

*/


let tentativas = 3;
const valorMaximo = 10;
const numeroSecreto =Math.round(Math.random() * valorMaximo);
let chute;

console.log(`Jogo do numero secreto de 0 a ${valorMaximo}}`)

while (tentativas > 0) {
    chute = prompt("Digite um numero")

    if (chute == numeroSecreto) {
        console.log("Parabéns você acertou")
        break
    } else {
        let texto = numeroSecreto > chute ? "maior" : "menor"

        console.log(`o numero secreto é ${texto} que ${chute}`)
    }
    console.log(tentativas);
    tentativas = tentativas - 1;
}

console.log(`O numero secreto é ${numeroSecreto}`)
