/* 
    1- Mischiare le carte
    2- Giro carte
    3- restart del gioco (la invocherò quando si rcarica la pagina e ogni volta che clicco su restart)
*/

// vars
const symbols = ["😀","🎉","🚀","🌟","🍕","🍔","🍎","🍓","😀","🎉","🚀","🌟","🍕","🍔","🍎","🍓"];
let moves = 0;
let matches = 0;
let lockBoard = false;
let first = null;
let second = null;

// restituire l'array di partenza modificata => la stessa array con i simboli in posizione diversa
function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
        // generare un indice casuale
        const randomIndex = Math.floor(Math.random() * (i + 1)); 
        // riassegnare la posizione usando il nuovo indice
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
}

// lancio al caricamento
function setup(){
    // mischio l'array
    shuffle(symbols);
    const board = document.getElementById('gameBoard');
    
    /* 
        RESET CAMPO DA GIOCO
    */
    board.innerHTML = ''; // svuoto il campo
    moves = 0; // resetto le mosse
    matches = 0; // resetto il numero di match
    document.getElementById('matches').innerText = matches; // rimetto a 0 lo span col contatore dei match
    document.getElementById('moves').innerText = moves; // rimetto a 0 lo span col contatore delle mosse
    document.getElementById('feedback').innerHTML = `
        <div class="alert alert-info">Game started! Try to match all pairs.</div>
    `; // mostro a schermo che il gioco è ricominciato
    lockBoard = false; // sblocco la scacchiera

    //ciclo i simboli
    symbols.forEach((sym, index) => {
        const card = document.createElement('div'); // creo l'elemento
        card.className = 'card'; // gli aggiungo la classe card
        card.dataset.symbol = sym; // gli setto un attributo data-symbol
        card.dataset.index = index; // gli setto un attributo data-index
        card.onclick = () => flip(card); // aggiungo la funzione di flip all'onclick sulla card
        board.appendChild(card); // appendo la card nel dom
    });
}


function flip(card){

    if(lockBoard || card.classList.contains("flipped")){
        return;
    }
    
    card.innerText = card.dataset.symbol; // sfrutto il data-symbol per metterglielo come simbolo quando flippo
    card.classList.add("flipped"); // aggiungo questa classe per modificare il colore

    if(!first){ // così mi assicuro di avere sempre una prima card da confrontare
        first = card;
        return;
    }

    second = card;
    lockBoard = true;
    moves++;
    document.getElementById("moves").innerText = moves;

    if(first.dataset.symbol === second.dataset.symbol){ // entra solo se c'è il match
        matches++; // incremento i match
        document.getElementById("matches").innerText = matches;// scrivo dentro ai match il nuovo valore
        document.getElementById('feedback').innerHTML = `
            <div class="alert alert-success">Congratulations! It's a match</div>
        `;//informo l'utente
        resetSelection();
        
        if(matches === (symbols.length / 2)){
            document.getElementById('feedback').innerHTML = `<div class="alert alert-success">Congratulations! You completed the game in ${moves} moves.</div>`
        } 



    } else { // entra quando non c'è il match
        document.getElementById('feedback').innerHTML = `<div class="alert alert-danger">No match! Try again</div>`;

        setTimeout(() => {
            first.innerText = '';
            second.innerText = '';
            first.classList.remove("flipped");
            second.classList.remove("flipped");
            resetSelection();
        }, 1000);
    }

}

function resetSelection(){
    /* first = null;
    second = null; */
    [first, second] = [null, null];
    lockBoard = false;
}

setup();

