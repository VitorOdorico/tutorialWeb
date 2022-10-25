const hora = '';

if (hora <= 11){
    console.log('bom dia');
}else if(hora === 12 || hora <= 17){
    console.log("boa tarde");
}else if(hora >= 18 || hora <= 23 ){
    console.log("boa noite");
}else{
    console.log("valor digitado incorreto")
}