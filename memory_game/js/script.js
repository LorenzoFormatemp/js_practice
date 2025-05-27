/* 
    1- Mischiare le carte
    2- Giro carte
    3- restart del gioco (la invocherò quando si rcarica la pagina e ogni volta che clicco su restart)
*/

// vars
const symbols = ["😀","🎉","🚀","🌟","🍕","🍔","🍎","🍓","😀","🎉","🚀","🌟","🍕","🍔","🍎","🍓"];
let moves = 0;
let matches = 0;


// restituire l'array di partenza modificata => la stessa array con i simboli in posizione diversa
function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
        // generare un indice casuale
        const randomIndex = Math.floor(Math.random() * (i + 1)); 
        // riassegnare la posizione usando il nuovo indice
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
}

