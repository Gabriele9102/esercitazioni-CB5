// required 
"use strict"
//--------------------------------------------Funzioni del nostro programma--------------------------------------
function sum(a,b){
    return "the result of your sum is = "+ (a + b);
}

function sub(a,b){
    return "the result of your subtraction is = "+ (a - b);
}

function mult(a,b){
    return "the result of your multiplication is = "+ (a * b);
}

function div(a,b){
    return  "the result of your division is = "+ (a / b);
}
//------------------------------------------Dichiarazioni costanti-----------------------------------------------
const args = process.argv.slice(2);
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
//----------------------------------------------------Switch----------------------------------------------------
switch (myArgs[0]) {
  case 'sum':
    let _sum = sum( parseInt(myArgs[1]), parseInt(myArgs[2]));
    console.log(_sum)
    break;

    case 'sub':
    let _sub = sub( parseInt(myArgs[1]),parseInt (myArgs[2]));
    console.log(_sub)
    break;
    case 'mult':
    let _mult = mult( parseInt(myArgs[1]), parseInt(myArgs[2]));
    console.log(_mult)
    break;
    case 'div':
    let _div = div( parseInt(myArgs[1]),parseInt (myArgs[2]));
    console.log(_div)
    break;
  default:
    console.log('Error');
    break
}
