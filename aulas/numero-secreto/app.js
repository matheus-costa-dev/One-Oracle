let numeroLimite = 100
let tentativas = 1;
let listaNumerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
};

function exibirMensagemInicial(){
    
    exibirTexto("h1", "jogo do numero secreto");
    exibirTexto("p", `Escolha um numero de 1 a ${numeroLimite}`);
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector("input").value

    if (chute == numeroAleatorio) {

        exibirTexto("h1", "Acertou")
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativa = `Parabéns você descobriu o numero secreto em ${tentativas} ${palavraTentativa}`
        exibirTexto("p", mensagemTentativa)

        document.querySelector("#reiniciar").removeAttribute("disabled")

    } else {
        if (chute > numeroAleatorio) {
            exibirTexto("p", `O numero secreto é menor que ${chute}`)
        } else {
            exibirTexto("p", `O numero secreto é maior que ${chute}`)
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let listaNumerosSorteadosTamanho = listaNumerosSorteados.length
    if (listaNumerosSorteadosTamanho == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }

}

function limparCampo(){
    chute = document.querySelector("input")
    chute.value = ""
}

function novoJogo(){
    numeroAleatorio = gerarNumeroAleatorio()
    tentativas = 1
    document.querySelector("#reiniciar").setAttribute("disabled", true)
    exibirMensagemInicial()
    limparCampo()
}