// Risoluzione esercizio 1


const form=[ "Mario", "Rossi", "22", "Fruttivendolo"];

console.log(form);

// Risoluzione esercizio 2


const removeAge= form.splice(2,1,"20/12/2000")

console.log(form);

form[0,1]= form[0,1].toUpperCase();
console.log(form);

form[0]= form[0].toUpperCase();
console.log(form);

// Risoluzione esercizio 3

let n = 7
let str = "";

for (let i = 0; i < n; i++) {
    for(let j = 0; j < n - i; j++) {
        str +="#";
 }
 str += "\n";

}
console.log(str);