/* 
    1. prendo gli input dell'utente
    2. controllo la sua età:
            => se l'età >= 18 ---> Maggiorenne
            => se l'età < 18 ---> Minorenne

    3. gestire casi in cui, ad esempio:
            - mi passa un testo vuoto
            - mi passa l'età come testo
*/

// METODO 1

// seleziono gli elementi del dom che poi mi servono
/* const nameEl = document.getElementById('name');
const ageEl = document.getElementById('age');
const resultEl = document.getElementById('result');
const checkAgeBtn = document.getElementById("checkAge");
let response = '';


checkAgeBtn.addEventListener('click', function(){

    // prendo i valori degli elementi selezionati
    const name = nameEl.value;
    const age = parseInt(ageEl.value);

    // se il nome è vuoto o l'età non è un numero
    if(name == "" || isNaN(age)){
        response = "Enter both name and age";
        resultEl.innerText = response;
        return;
    }

    // controllo l'età
    if(age < 18){ // se l'età è inferiore a 18
        response = `Hi ${name}, you're under 18`;
        resultEl.innerText = response;
    } else {
        response = `Hi ${name}, you're an adult`;
        resultEl.innerText = response;
    }
}); */


/* 
 METODO 2
*/
function checkAge(){
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const resultEl = document.getElementById('result');
    let response = "";

    if(name == "" || isNaN(age)){
        response = "Enter both name and age";
        resultEl.innerText = response;
        return;
    }

    if(age < 18){ // se l'età è inferiore a 18
        response = `Hi ${name}, you're under 18`;
        resultEl.innerText = response;
    } else {
        response = `Hi ${name}, you're an adult`;
        resultEl.innerText = response;
    }
}