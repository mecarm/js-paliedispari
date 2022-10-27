// Esercizio N-1 (Palindromo)
/*
-Chiedere all’utente di inserire una parola.
-Creare una funzione per capire se la parola inserita è palindroma
*/

function palindromo(){
    let parola = document.getElementById('parola').value.toLowerCase();
    let revParola = ''
    for(let i = parola.length - 1; i >= 0; i--){
        revParola += parola[i];
        if(revParola == parola){
        document.getElementById('print').innerText = `${parola} è un palindromo!`
        }
        else{
        document.getElementById('print').innerText = `${parola} non è un palindromo!`
        }
    }
}

// Esercizio N-2 (Pari e dispari)
/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
let choice;

function pariDispari(){
    let scelta = prompt('Pari o dispari?');
    let num = parseInt(prompt('Scrivi un numero da 1 a 5'));
    let numBot = parseInt(Math.floor(Math.random()* 6)+1);
    console.log(`numero utente è ${num}`);
    console.log(`numero pc è ${numBot}`);
    let addnum = num + numBot;
    console.log(addnum);
    sommaNumeri(addnum);
    victory(scelta, choice);  
}

function sommaNumeri(param1){
    if(param1 % 2 == 0){
        choice = 'pari'
        console.log('pari')
    }
    else{
        choice = 'dispari'
        console.log('dispari')
    }
}


function victory(par1, par2){
    if(par1 == par2 ){
        document.getElementById('risultato').innerText = `Hai scelto ${par1} è hai vinto`;
    }
    else{
        document.getElementById('risultato').innerText = `Hai scelto ${par1} è hai perso`;
    }
}