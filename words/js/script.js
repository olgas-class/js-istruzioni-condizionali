// 1. Chiediamo all'utente due parole in successione.
// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

// Chiedere all'utente la prima parola
const firstWord = prompt("Dimmi la prima parola");
// Chiedere all'utente la seconda parola
const secondWord = prompt("Dimmi la seconda parola");
console.log(firstWord, secondWord);

// SE la prima parola è più lunga
//      Messaggio: La prima parola è la più lunga
// Altrimenti SE la seconda parola è più lunga
//      Messaggio: La seconda parola è più lunga
// Altrimenti
//      Messaggio: Le parole hanno lunghezza uguale
const firstLength = firstWord.length;
const secondLength = secondWord.length;

let messageResult = "";

if (firstLength > secondLength) {
  messageResult = "La prima parola è la più lunga";
} else if (firstLength < secondLength) {
  messageResult = "La seconda parola è più lunga";
} else {
  messageResult = "Le parole hanno lunghezza uguale";
}

// OUTPUT
// alert(messageResult);
document.getElementById("result").innerHTML = messageResult;
