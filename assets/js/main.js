/* Istuzioni:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti. 
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

/* BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

/**
 * Genera un numero casuale
 */
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)  
}

//Array per le bombe generate casualmente
var bombs = [];
// Ciclo per inserire le bombe nell array 
do {
    numeroRandom(1, 100)
    //Controllo che le bombe non siano uguali
    if (!bombs.includes(numeroRandom(1, 100))){
        bombs.push(numeroRandom(1, 100))
    }
    
} while (bombs.length < 16);
console.log(bombs);

//* Gioco

var punti = 0;
var possibilita = 4;
var disinneschi = [];

do {
    var scelta = Number(prompt("Inserisci un numero"));

    if(!isNaN(scelta)){
        alert("Devi inserire un numero")

    } else if (!(scelta => 1) && !(scelta <= 100)) {
        alert("Devi inserire  un numero compreso tra 1 e 100")

    } else if (bombs.includes(scelta)){
        alert("BOOOOM! Hai disinnescato " + punti " bombe")

    } else if (disinneschi.includes(scelta)){
        alert("Numero già inserito")
    } else {
        disinneschi.push(scelta)
    }

} while (disinneschi.length < possibilita)