let word = "ola";
let minuscula = word.toLowerCase();
let armazenaPalavra = "";
let letraEspecifica;
for(let i = minuscula.length-1; i>= 0; i--){
    armazenaPalavra += minuscula[i];
}
console.log(armazenaPalavra);