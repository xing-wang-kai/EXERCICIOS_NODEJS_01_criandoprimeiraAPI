const fetch = require('node-fetch');

function tratarError(erro){
    throw new Error(erro.menssage)
}

async function urlStatus(arrayUrl){
    try{
        const ArrayStatus = await Promise.all(arrayUrl.map(async url => {
            const res = await fetch(url);
            return res.status
        }))
        return ArrayStatus

    }catch(error){
        return tratarError(error)
    }
    
}


function gerarArrayURLS(arraylink){
   return arraylink.map((objectArray => Object.values(objectArray).join()))
}

async function validarURL(arrayLink){
    const links = gerarArrayURLS(arrayLink);
    const statusLinks = await urlStatus(links);
    const objUrl = arrayLink.map((obj, index) => ({
        ...obj, status: statusLinks[index]
    }))
    return objUrl;
}


module.exports = validarURL;
