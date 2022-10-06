// let userInput = parseInt(prompt("Dammi da 0 a 10"));
// console.log(userInput, typeof(userInput));
// 
//                         // true
// const relationResult = userInput !== 3;
// console.log(relationResult);
// 
// if (userInput === 2 || userInput === 3) {
//     alert("Bene")
// } else if (userInput > 1) {
//     alert("Ok, hai inserito numero maggiore di 3");
// } else {
//     alert("Numero sbagliato");
//     // faccio calcoli e mostro output
// }
// 
// // 12
// //                  true
// //      true                false
// if (userInput >= 0 && userInput <= 10) {
//     alert("Ottimo!");
// } else {
//     alert("Numero sbagliato");
// }
// 
// // altro codice...
// console.log("Altro codice");
// 
// 
// if (userInput === 3) {
//     alert("Il numero è 3");
// }
// 
// if (userInput === 5) {
//     alert("Il numero è 5")
// }
// 
// // NOT
// const userIsLogged = false;
// 
// 
// // Utente è loggato
// //     true
// if (userIsLogged) {
//     // 500 righe di codice per gestire il login...
// 
// } 
// 
// // Gestisco utente non loggato
// //        true
// //      !false
// if (!userIsLogged) {
//     alert("Fai login");
// }


// Scope delle variabili
// let myNumber = 3;
// let message = "Ciao";
// 
// if (myNumber === 3) {
//     // fare qualcosa
//     let ifMessage = "Ciao, sono messaggio dentro if";
//     console.log(ifMessage);
//     message = "Ciao, il numero è 3";
//     console.log("Dentro if", message);
// }
// 
// console.log(ifMessage);
// 
// console.log("fuori dall if", message);

// let validation = true;
// const wordA = "Word A";
// const wordB = "Word B";
// 
// if ( validation === true) {
//     let wordC = "Word C";
//     // console.log(wordB); // ---> Word B
//     const wordB = "Word custom B";
//     console.log(wordA); // ---> Word A
//     console.log(wordB); // ---> Word custom B
//     console.log(wordC); // ---> Word C
// }
// 
// console.log(wordA); // --> Word A
// console.log(wordB); // --> Word B
// console.log(wordC); // --> Error

// Math
const myNumber = 19.4532323;
console.log(Math.round(myNumber));

const rndNumber = Math.floor(Math.random() * 10) + 1;
console.log(rndNumber);