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

