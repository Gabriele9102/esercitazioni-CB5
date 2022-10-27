//Risoluzione esercizio 1-----------------------------------------------------

function Switch( a, b){
  switch(operation){
    case "+":
        alert( aParseInt + bParseInt );
        return aParseInt + bParseInt;
    case "-":
        alert( aParseInt - bParseInt );
        return aParseInt - bParseInt;;
    case "*":
        alert( aParseInt * bParseInt );
        return aParseInt * bParseInt;
    case "/":
        alert( aParseInt / bParseInt );
        return aParseInt / bParseInt

        default:
        alert("Wrong way. Try again!")
    }
}

 let a = prompt("write the first number");
 let b = prompt("write the second number");

    let aParseInt=parseInt(a);
    let bParseInt=parseInt(b);
let operation= prompt("choose the operator" + "+, -, *, /");

const result = Switch(aParseInt, bParseInt)
console.log(result);


// Risoluzione esercizio 2------------------------------------------------------------


const PerfectWizardWithPipe = {

    name: "Gandalf",
    surname: "Il Grigio",
    class: "wizard",
    age: "7000",
    beard: true,
    ring: "none",
    lives: "+1",
    hobbies: ["smoking", "fireworks"],
}
console.log(PerfectWizardWithPipe);
console.log(PerfectWizardWithPipe.age);
console.log(PerfectWizardWithPipe.beard);
console.log(Object.keys(PerfectWizardWithPipe));
console.log(Object.values(PerfectWizardWithPipe));
console.log(PerfectWizardWithPipe.hobbies[1]);
console.log(Object.toString(PerfectWizardWithPipe));

const Revive = {
    isDead: false,
    printWords: function() {
      console.log(`My name is ${this.name} and i'am ${this.true}, where is the ring,Frodo?`);
    }
  };

const newWizardIsReborn = Object.create(Revive);
Revive.name = "WhiteGandalf";
Revive.true = "Reborn"

newWizardIsReborn.printWords();
