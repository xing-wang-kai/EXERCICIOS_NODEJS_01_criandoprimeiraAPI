const lerDocumento = require('./index')

const caminho = process.argv;


async function pegaArquivo(caminhoArq){
    const resultado = await lerDocumento(caminhoArq[2]);
    console.log('Os links extraidos são:: ', resultado);

}
console.log(pegaArquivo(caminho))