
let operation= prompt("Selecting your operation from:\n1=addiction, \n2=subtraction,\n 3=multiplication,\n 4=division,\n 5=rest");

let firstString= prompt("choose the first number");
firstNum= parseInt(firstString);


let secondString= prompt("choose the second number");
secondNum= parseInt(secondString);



switch(operation){
    case "1":
        console.log( firstNum + secondNum );
        alert( firstNum + secondNum );
        break;
    case "2":
        console.log( firstNum - secondNum );
        alert( firstNum - secondNum );
        break;
    case "3":
        console.log( firstNum * secondNum );
        alert( firstNum * secondNum );
        break;
    case "4":
        console.log( firstNum / secondNum );
        alert( firstNum / secondNum );
        break;
    case "4":
        console.log( firstNum % secondNum );
        alert( firstNum % secondNum );
        break;
        
        default:
        alert("Wrong way. Try again!")
    }