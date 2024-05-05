//Função que toca o som
function playSound(selectorSound){
    //captura o elemento digitado e recebido pela função
    const element = document.querySelector(selectorSound);

    //se o elemento não for nulo e for do tipo audio (localName identifica como sendo audio ou não), o som é executado através da função play(), caso contrário, é exibido mensagem de erro
    if(element != null && element.localName === 'audio'){
        element.play();
    }
    else{
        console.log("Elemento não encontrado ou seletor inválido!")
    }
}

// Constante armazena todas as teclas que contém a classe .tecla - querySelectorAll seleciona todos os elementos com o seletor especificado entre parenteses e retorna uma lista com estes elementos
const  keyList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < keyList.length; counter++){
    //Referência constante key recebe o valor tual do contador, que equivale a tecla atual - o trecho a ser atribuido se repetirá mais tarde para o clique do botão, então atribuí-lo a uma constante reduz repetição de código e deixa mais legível
    const key = keyList[counter];

    //Contante instrument recebe a classe tecla_x dos botões - recebe a classe
    const instrument = key.classList[1];
    //Gerando o id dinâmicos de acordo com a classe dos botões através de template string - textos são manipuláveis - gera o id conforme a classe recebida do elemento
    const idSound = `#som_${instrument}`;

    /*
    playSound é uma referência da função, por isso está sem parênteses, se colocar parenteses ocorrerá erro pois a função será executada sem a ação do usuário e o navegador bloqueia isso - keyList[counter].onclick = playSound; - mas ainda não está automatizada*/
    /*Por esse motivo, usamos a função anônima que são usadas no contexto em que é valor de algum atributo ou estão sendo armazenadas dentro de uma referência constante ou variável - no nosso caso, para chamá-la, será pelo clique no botão*/
    key.onclick = function(){
        //.classList retorna uma lista com todas as clases que o elemento especificado possui - classes são representadas dentro de '', ou seja é um texto e podemos manipular esses texto conforme nossa preferência - vc pode testar no console: keyList[indiceElemento].classList[indiceClasse]
        playSound(idSound);
    }

    //Adicionar a classe "ativa" nos botões quando a tecla espaço ou enter for clicada - propriedade 'onkeydown' é usado juntamente com uma função para identificar a tecla pressionada capturado pelo parâmetro da função e o atributo code identifica o nome da tecla, usada na condição if
    key.onkeydown = function(eventClick){
        if(eventClick.code === 'Space' || eventClick.code === 'Enter'){
            key.classList.add('ativa');
        }
    }

    //Remover a classe das teclas quando soltadas
    key.onkeyup = function(){
        key.classList.remove('ativa');
    }
}
