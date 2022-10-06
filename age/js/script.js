// 2. età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// Chiedere all'utente età della prima persona
const firstAge = parseInt(prompt("Quanti hanni ha la prima persona?"));
// Chiedere all'utente l'età della seconda persona
const secondAge = parseInt(prompt("Quanti hanni ha la seconda persona?"));
// Convertire i due valori in numeri interi
console.log(firstAge, typeof(firstAge));
console.log(secondAge, typeof(secondAge));


// SE l'età della prima persona è maggiore della seconda
    // Messaggio: la prima persona è la più grande
// ALTRIMETI SE l'età della seconda persona è maggiore della prima
    // MEssaggio: la seconda persona è la più grande
//ALTRIMETI
    // Le due persone hanno la stessa età
let message = ""; 
if (firstAge > secondAge) {
    message = "la prima persona è la più grande";
} else if (secondAge > firstAge) {
    message = "la seconda persona è la più grande";
} else {
    message = "Le due persone hanno la stessa età"
}

// OUTPUT
alert(message);
