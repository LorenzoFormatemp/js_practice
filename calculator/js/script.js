/* 
    Basic calculator:
        - somma
        - differenza
        - moltiplicazione
        - divisione
*/

function calculate(operation){    
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let response;

    // controllo che i due valori siano effettivamente dei numeri
    if(isNaN(n1) || isNaN(n2)){
        console.log('Input non validi! Gli input inseriti devono essere numeri');
        return;
    }

    // serie di condizioni
    switch (operation) {
        case '+': response = n1 + n2; break;
        case '-': response = n1 - n2; break;
        case '*': response = n1 * n2; break;
        case '/': response = n2 !== 0 ? n1 / n2 : 'Non puoi dividere per zero'; break;
    }

    document.getElementById("result").innerText = `Il risultato è: ${response}`;
}