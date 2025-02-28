/*
Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

Hoje você vai desenvolver um exemplo assim com Javascript!

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.

Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

*/

let gameStatus = "running";
let escolhas = new Map();
let resposta;


while (gameStatus === "running") {
    
    resposta = prompt("Quer seguir para área de Front-End ou seguir para a área de Back-End? Digite 1 para Front-End e 2 para Back-End")

    if (resposta === null) {
        gameStatus = "stop"
        break
    }

    if (resposta === "1") {
        escolhas.set("Side", "Front-End" )


        resposta = prompt("Quer aprender React ou aprender Vue? Digite 1 para React e 2 para Vue")

        resposta === "1" ? escolhas.set("Linguagem", "React") : escolhas.set("Linguagem", "Vue") 
       
    }

    
    if (resposta === "2") {
        escolhas.set("Side", "Back-End" )
        resposta = prompt("Quer aprender C# ou aprender Java? DIgite 1 para C# e 2 para Java")

        resposta === "1" ? escolhas.set("Linguagem", "C#") : escolhas.set("Linguagem", "Java")         

    }
    

    resposta = prompt("seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite 1 para se especializar e 2 Full stack")
    
    resposta === "1" ? escolhas.set("Final", "especializar") : escolhas.set("Final", "Full stack")

    escolhas.set("Desejos", [])
    do {
        resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
        escolhas.get("Desejos").push(resposta)
    } while (resposta != null)

    console.log(`Parabéns, otimas escolhas!. Você será um incrível ${escolhas.get("Side")}, com ${escolhas.get("Linguagem")} como ferramenta. a final o caminho ${escolhas.get("Final")} te levará para grandes desafios que serão recompensatórios. Se aprofunde ${escolhas.get("Desejos")} e logo se tornará invencível` )

    escolhas.clear()
}

console.log("Game finalizado")