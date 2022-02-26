### EXERCICIOS_NODEJS-CriandoAPI
 Criando a Primeira API com nodejs
 ##npm inity

 ##npm install
    - para instalar a pasta com os arquivos nescessários para o projeto
----------------------------------------------------------------------------------
##Promessas com Async e Await ou 
    ###.then() e .catch() ~ encadeamento de funções
    #async and await e Promises
    EXEMPLO:

    function pegarArquivo(arquivo){
    const parametros = 'utf-8'
        fs.promises
        .readFile(arquivo, parametros)
        .then((texto) => {console.log(texto)})
        .catch((error) => {passarError(error)})
    }
----------------------------------------------------------------------------------
###PEGAR CAMINHO DO nodejs

    -[para pegar um caminho quando executamos o código no nodejs basta criar uma const chamadada
    caminho e então atribuir process.argv ex.:]
    
    const caminho = process.argv;
    
    caso seja o caminho da palavra node = caminho[0]
    nome do app caminho[1] paramentros caminho[3..]
----------------------------------------------------------------------------------

###install Chalk
    [biliotéca que grifa com cores os código caso seja Chalk.bgColor será o background ou então ChalkColor]
    -npm install Chalk@version (precisa informar a versão)
----------------------------------------------------------------------------------
###Install node-fetch
    [bibliotéca usada para validar alguns links]
    -npm install node-fetch

    Para este projeto tive que ultilizar a versão npm install node-fetch@2
    
    para demais bibliotécas: 

    "chalk": "^2.4.1",
    "node-fetch": "^2.6.7"

----------------------------------------------------------------------------------
### mudando o executavel no node js.
    [basta ir em scripts e então formar uma nova váriavel no js e depois dos : escrever o caminho desejado]
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "cli": "node cli.js ./Arquivos/texto1.md"
    },
----------------------------------------------------------------------------------
