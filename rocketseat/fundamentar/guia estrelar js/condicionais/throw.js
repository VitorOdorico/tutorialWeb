function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é obrigatório'

    }
    console.error("After the error")
}

try {
    sayMyName('vitor');
} catch (e) {
    console.log(e)
}