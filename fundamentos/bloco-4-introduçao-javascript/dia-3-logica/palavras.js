let bigger = "";
let array = ['java', 'javascript', 'python', 'html', 'css'];
for (let i=0; i <= array.length; i+= 1){
    if(array[i]>bigger){
        bigger = array[i];
    }
}
console.log(bigger);