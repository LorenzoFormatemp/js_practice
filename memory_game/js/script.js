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
    console.log(symbols);
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

    // genero le card
    symbols.forEach((sym, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.symbol = sym;
        card.dataset.index = index;
        
        // TODO: aggiungere alla card la funzione flip
        card.onclick = () => flip(card);
        
        board.appendChild(card);
    });
}


function flip(card){}




setup();

