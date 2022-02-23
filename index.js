
const fs = require('fs');


 function passarError(error){
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
/**
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
pegarArquivo('./Arquivos/texto1.md')

