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
 * Genera un numero casuale tra un min ed  un max
 */
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)  
}


var lvdifficolta = prompt("Scegli tra livello di diffoltà 0,1,2");
var rangebombe ;
if(lvdifficolta == 0){
    rangebombe = 100;
} else if(lvdifficolta == 1){
    rangebombe = 80;
} else if(lvdifficolta == 2){
    rangebombe = 50;
}


//Array per le bombe generate casualmente
var bombs = [];
// Ciclo per inserire le bombe nell array 
do {
    numeroRandom(1, rangebombe)
    //Controllo che le bombe non siano uguali
    if (!bombs.includes(numeroRandom(1, rangebombe))){
        bombs.push(numeroRandom(1, rangebombe))
    }
    
} while (bombs.length < 16);
console.log(bombs);

//* Gioco

var punti = 0;
var possibilita =   (rangebombe - 16);
var disinneschi = [];

do {
    //Chiedere all' utente di inserire un numero tra 1 e 100
    var scelta = Number(prompt("Inserisci un numero comreso tra 1 e " + rangebombe ));

    //Verificare se input può essere inserito nell array disinneschi
    if(isNaN(scelta)){
        alert("Devi inserire un numero");

    } else if (scelta < 1 || scelta > rangebombe) {
        alert("Devi inserire  un numero compreso tra 1 e 100");

    } else if (bombs.includes(scelta)){
        alert("BOOOOM! Hai disinnescato " + punti + " bombe");

    } else if (disinneschi.includes(scelta)){
        alert("Numero già inserito");
    } else {
        disinneschi.push(scelta);
        punti = punti + 1;
    }
    console.log(disinneschi);

} while (disinneschi.length < possibilita && !bombs.includes(scelta) )

if (disinneschi.length == possibilita){
    alert("Complimenti sei un artificiere incredibile!")
}