const fs = require('fs');
const chalk = require('chalk');

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extrairLinks(texto){
    const extrair = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const ArrayLinks = [];
    let temp;
    while((temp = extrair.exec(texto)) !== null){
        ArrayLinks.push({ [temp[1]]: temp[2]})
    }
    //const extrairLinks = texto.match(extrair);
    return ArrayLinks.lenght === 0 ? 'não há links': ArrayLinks;
}


function tratarError(erro){
    throw new Error(erro.code, "this is a new error")
}

async function lerDocumento(arquivo){
    const charsert = 'utf-8';
    try{
        const texto = await fs.promises.readFile(arquivo, charsert);
        return extrairLinks(texto)
    }catch(error){
        tratarError(error);
    }
}


 /** function passarError(error){
    throw new Error(error.code, '..dnt found the path File')
}

async function pegarArquivo(arquivo){
    const charset = 'utf-8';
    try{
        const texto = await fs.promises.readFile(arquivo, charset)
        console.log(texto)
    }catch(error){
        passarError(error);
    }
}

 * method usando o tipo de .then .catch
 * function pegarArquivo(arquivo){
    const parametros = 'utf-8'
    fs.promises
    .readFile(arquivo, parametros)
    .then((texto) => {console.log(texto)})
    .catch((error) => {passarError(error)})
}

metodo comum
function pegaArquivo(arquivo){
    const parametro = 'utf-8'
    fs.readFile(arquivo, parametro, (error, texto) => {
       if(error){
           passarError(error);
       }else{
        console.log(texto)
       }
        
    } )

}
 */
//lerDocumento('./Arquivos/texto1.md')

module.exports = lerDocumento;

