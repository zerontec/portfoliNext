

function MaxValue(shares){


var maximo = shares[1] - shares[0];
/* let minimo = shares[0] */

for(let x=1; x<shares.length; x++){
    for(let j=x+ 1; j <shares.l; j++){

        let gananciaPotencial = shares[j] -shares[x]
        maximo = gananciaPotencial > maximo ? ganancia : mximo
    //condicion  ? true hace esto : false hace esto otro
    //          pregunta
//  ? = if , : else 
}
}
return maximo

}
//   x
//         j   
//  [4,2,5,9,5]


//opcion optima  
function MaxvalueA(shares){

let maximo = shares[1]- shares[0]

for(let x=1; x< shares.length; x++){
let gananciaPotencial = shares[x] - minimo
maximo = Math.max(maximo,gananciaPotencial)
minimo = Math.min(minimo,shares[x])


}

return maximo 

}   


//function palindrome 
function reverse (string){

var re = /[\W_]/g;
var lowRegStr = str.toLowerCase().replace(re, '');
var reverseStr = lowRegStr.split('').reverse().join('');
return reverseStr = lowRegStr;



}

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindrome("A man, a plan, a canal. Panama");