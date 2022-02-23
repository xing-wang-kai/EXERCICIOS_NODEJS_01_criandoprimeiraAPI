
const fs = require('fs');




 function passarError(error){
    throw new Error(error.code, '..dnt found the path File')
}
function pegarArquivo(arquivo){
    const parametros = 'utf-8'
    fs.promises
    .readFile(arquivo, parametros)
    .then((texto) => {console.log(texto)})
    .catch((error) => {passarError(error)})
}
/**function pegaArquivo(arquivo){
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

