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
    
    // controllo che i due valori siano effettivamente dei numeri
    if(isNaN(n1) || isNaN(n2)){
        console.log('Input non validi! Gli input inseriti devono essere numeri');
        return;
    }









}