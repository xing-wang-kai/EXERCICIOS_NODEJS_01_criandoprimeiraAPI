const lerDocumento = require('./index')
const validarURL = require('./http-validar.js')
const chalk = require('chalk')

const caminho = process.argv;


async function pegaArquivo(caminhoArq){
    const resultado = await lerDocumento(caminhoArq[2]);
    if(caminho[3] === 'validar'){
        console.log(chalk.bgYellow.black('[---------> LINKS VALIDOS!!<---------]'), validarURL(resultado));
    }else{
        console.log(chalk.bgWhite.black('   Os links extraidos são::   '), resultado);
    }
    

}
console.log(pegaArquivo(caminho))