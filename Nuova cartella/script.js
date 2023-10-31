/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1= parseInt(prompt("inserisci in numero 1"))
const num2= parseInt(prompt("inserisci in numero 2"))

let vincitore

if (num1 > num2) {
    vincitore = num1
}

else if(num2 > num1){
    vincitore = num2}

   alert(vincitore)

   /* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeroDaValutare = prompt("inserisci" )
if(numeroDaValutare <5 ) {
    console.log ("not equal")

}
else if (numeroDaValutare >5 ) {
    console.log ("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = prompt("inserisci un numero")
const numeroDaControllare=num3
if (numeroDaControllare % 5 === 0) {
    console.log("Divisibile per 5");
  } else {
    console.log("Non divisibile per 5");
  }
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const num4= parseInt(prompt("inserisci in numero 1"))
const num5= parseInt(prompt("inserisci in numero 2"))

let numm= num4
let nun= num5

if(numm === 8 || nun=== 8) {
    console.log("uno dei due numeri è uguale a 8")
}

else if (numm + nun ===8 ){
    console.log("l'addizione è =8")
}
else if (numm - nun ===8 ) {
    console.log("l sottrazione è uguale a 8")
}
else {
    console.log("Nessuna delle condizioni è soddisfatta");
  }
    /* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart="saldo totale"

const sconto=50%
if(totalShoppingCart >= %50 )
{console.log ("spedione gratuita")

}
else  {
    costo spedizione a euro 10
}
