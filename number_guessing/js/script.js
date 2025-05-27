const randomNumber = Math.floor(Math.random() * 100) + 1; // numero random tra 0 e 100
let attempts = 0; // tentativi dell'utente

function checkGuess(){
    // incremento il numero di tentativi
    attempts++;

    // vars
    const guess = parseInt(document.querySelector('#guess').value);
    const message = document.querySelector('#message');

    if(!guess || isNaN(guess)){
        // se il numero inserito dall'utente è uguale a quello randomico
        if(guess === randomNumber){
            message.innerHTML = `<div class="alert alert-success">Correct! Attempts: ${attempts}</div>`;
        } else if (guess < randomNumber){ // se è minore 
            message.innerHTML = `<div class="alert alert-info">Too low! Try again</div>`;
        } else { // se è maggiore
            message.innerHTML = `<div class="alert alert-info">Too high! Try again</div>`;
        }
    }

} 
