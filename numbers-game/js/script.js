// 3. pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 10. Generare un numero casuale compreso tra 1 e 10, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
/*
 pari
 2

 6

 somma = 8 --> pari, vinto utente

 ________________

 dispari

 5

 7

 somme = 12 --> pari --> ha vinto il computer
*/

// chiedere all'utente pari o dispari
const userChoice = prompt("Dimmi pari o dispari");
// chiedere all'utente un numero da 1 a 10. Convertire la risposta in number
const userNumber = parseInt(prompt("Dimmi un numero da 1 a 10"));
console.log(userChoice, userNumber);

// generare il numero casuale
const computerNumber = (Math.floor(Math.random() * 10)) + 1;
console.log(computerNumber);

// calcolo la somma dei due numeri
const numberSum = userNumber + computerNumber;
console.log(numberSum);

console.log(numberSum % 2 === 0);

// SE somma è pari AND utente ha detto pari OPPURE somma è dispari e l'utente ha detto dispari 
//      Vinto l'utente
// ALTRIMENTI
        // Ha vinto il computer

// if (
//     (numberSum % 2 === 0 && userChoice === "pari") || 
//     (numberSum % 2 !== 0 && userChoice === "dispari")
// ) {
//     console.log("Utente ha vinto");
// } else {
//     console.log("Utente ha perso");
// }

// Definisco se il risultato è "pari" o "dispari"
let oddEvenResult = "";
if (numberSum % 2 === 0) {
    oddEvenResult = "pari";
} else {
    oddEvenResult = "dispari";
}

// Se il risultato è uguale alla scelta dell'utente
//      Utente ha vinto
// Altrimenti 
//      Utente ha perso

if (oddEvenResult === userChoice) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}