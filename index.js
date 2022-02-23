
const fs = require('fs');

function passarError(error){
    throw new Error(error.code, '..dnt found the path File')
}
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

pegaArquivo('./Arquivos/texto1.md')