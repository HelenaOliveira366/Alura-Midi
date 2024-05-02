//Função que toca o som
function playSound(idSound){
    //captura o id do som e toca com .play()
    //O id especificado deve ser dinâmico e será especificado através do parâmetro da função 'idSound'
    document.querySelector(idSound).play(); //querySelector retorna o primeiro elemento que tenha o seletor especificado
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
}