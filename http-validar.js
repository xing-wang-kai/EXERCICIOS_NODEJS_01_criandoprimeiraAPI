
function gerarArrayURLS(arraylink){
   return arraylink.map((objectArray => Object.values(objectArray).join()))
}

function validarURL(arrayLink){
    return gerarArrayURLS(arrayLink);
}


module.exports = validarURL;
