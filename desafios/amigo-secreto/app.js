let amigos = [];

function adicionarAmigo(){

    removerResultado()
    listaAmigosVisibilidade(true)

    let amigo = document.querySelector("#amigo");

    if (amigo.value == ""){
        alert("Por favor, insira um nome.");
        return null;
    }

    amigos.push(amigo.value);
    amigo.value = "";

    arrayAmigos()
}


function arrayAmigos(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ''; 

    let listaSemDuplicatas = [...new Set(amigos)]; 

    listaSemDuplicatas.forEach(amigo => {
        let li = document.createElement("li");
        li.innerHTML = amigo;
        listaAmigos.appendChild(li);
    });
}

function numeroAleatorio(listaTamanho){
    let aleatorio = Math.floor(Math.random() * listaTamanho)
    return aleatorio
}

function sortearAmigo(){

    listaAmigosVisibilidade(false)

    let listaAmigos = document.querySelectorAll("#listaAmigos > li");

    if (listaAmigos.length == 0) {
        alert("A lista de amigos está vazia, por favor insira os nomes")
        return null
    }

    let aleatorio = numeroAleatorio(listaAmigos.length)
    let amigoSorteado = listaAmigos[aleatorio]
    let elementoAmigo = document.createElement("li")
    elementoAmigo.innerHTML = amigoSorteado  
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = "";

    resultado.appendChild(amigoSorteado.cloneNode(true))
    

}


function removerResultado(){
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = "";
}

function listaAmigosVisibilidade(visivel){

    let listaAmigos = document.querySelector("#listaAmigos")

    
    visivel ? listaAmigos.removeAttribute("hidden") : listaAmigos.setAttribute("hidden", "")
    
}