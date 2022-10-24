// JAVASCRIPT //

/*
~ Mail
Chiedi all’utente la sua email,
controlla che sia già presente nella lista di email per controllare se può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

console.log("Ciao!");

let userMail = ["test", "test", "test", "ciccio@gmail.it", "ydd@gmail.it", "daryan@gmail.it"]
let outputDiv = document.getElementById('outputDiv');
let outputGame = document.getElementById('gameDice');
let linea = document.getElementById('linea');

function checkList()
{
    // Prendo il valore inserito dall'utente & Creo una variabile flag (false)
    let inputUserMail = document.getElementById('inputUserMail').value;
    let check = false;


    // Controllo il vettore con un ciclo for
    for(let i=0; i<userMail.length; i++)
    {
        if(inputUserMail == userMail[i]) check = true;        
    }
    

    // Aggiungo una condizione per l'output
    if(check == true)
    {
        outputDiv.innerHTML += `<p class="bg-success text-white p-3 rounded">L'utente è presente nella lista!</p>`;
        linea.classList.remove('d-none');
        outputGame.classList.remove('d-none');
    }   
    else
    {
        outputDiv.innerHTML += `<p class="bg-danger text-white p-3 rounded">L'utente è inesistente!</p>`;
        linea.classList.remove('d-none');
        userMail.push(inputUserMail);
        outputGame.classList.remove('d-none');
        outputGame.innerHTML += `<p>L'email è stata aggiunta al nostro database! <i class="fa-solid fa-thumbs-up"></i><hr></p>`;
    }
    
}

//----------------------------------------------------//
/*
~ Gioco dei dadi
    -Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    -Stabilire il vincitore, in base a chi fa il punteggio più alto.
    -scrivere quante partite ha vinto il giocatore
    -scrivere quante partite ha vinto il computer
*/

function dicegame()
{
    let userDice = Math.floor(Math.random() * 6) +1;
    let cpuDice = Math.floor(Math.random() * 6) +1;
    
    outputGame.innerHTML = `<h3>Buon divertimento!</h3><button id="diceButton" onclick="dicegame();">Tira!</button>`;

    outputGame.innerHTML += `<p>Utente: ${userDice}</p>`;
    outputGame.innerHTML += `<p>CPU: ${cpuDice}</p>`;


    if(userDice > cpuDice)
    {
        outputGame.innerHTML += `<p>Hai vinto! <i class="fa-solid fa-face-smile"></i></p>`;
    }
    else if(userDice < cpuDice)
    {
        outputGame.innerHTML += `<p>Hai perso <i class="fa-solid fa-face-sad-cry"></i></p>`;
    }
    else
    {
        outputGame.innerHTML += `<p>Pari <i class="fa-solid fa-face-meh"></i></p>`;
    }

}


















// ----- FINE :) -----