// JAVASCRIPT //

/*
~ Mail
Chiedi all’utente la sua email,
controlla che sia già presente nella lista di email per controllare se può accedere,
stampa un messaggio appropriato sull’esito del controllo.

~ Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
scrivere quante partite ha vinto il giocatore
scrivere quante partite ha vinto il computer
*/

console.log("Ciao!");

let userMail = ["test", "test", "test", "ciccio@gmail.it", "ydd@gmail.it", "daryan@gmail.it"]
let outputDiv = document.getElementById('outputDiv');



function checkList()
{
    // Prendo il valore inserito dall'utente
    let inputUserMail = document.getElementById('inputUserMail').value;
    // Creo una variabile flag
    let check = false;


    // Controllo il vettore con un ciclo for
    for(let i=0; i<userMail.length; i++)
    {
        // outputDiv.innerHTML += `<p>Utente: ${userMail[i]}</p>`;
        if(inputUserMail == userMail[i])
        {
            check = true;
        }
    }
    

    // Aggiungo una condizione èer l'output
    if(check == true)
    {
        outputDiv.innerHTML += `<p>L'utente è presente nella lista!</p>`;
    }
    else
    {
        outputDiv.innerHTML += `<p>L'utente è inesistente!</p>`;
    }
}




















// ----- FINE :) -----