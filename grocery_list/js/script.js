/* 
    1) aggiungere elementi alla lista
    2) aggiornare la lista => mostrarla
    3) cancellare la lista
*/

const items = []; // ad esempio dati da un servizio esterno

// 1- aggiungere gli elementi alla lista
function addItem(){
    //prendere il valore dell'input
    const item = document.querySelector('#itemInput').value;
    // se item esiste
    if(item){
      items.push(item); // metto il nuovo elemento in fondo all'array
      displayList();
    }
}

// 2- mostrare la lista
function displayList(){
    // seleziono il tag lista dove appenderò i miei items
    const list = document.getElementById('list');

    // svuotare la lista
    list.innerHTML = "";

    //appendo gli elementi della lista
    for(let i = 0; i < items.length; i++){
        // creo un nuovo elemento del dom
        const li = document.createElement("li");
        // gli aggiungo lo stile di bootstrap
        li.className = "list-group-item";
        // gli scrivo dentro il mio item
        li.innerText = items[i];
        //appendo il mio tag li alla lista a cui appartiene
        list.append(li);
    }
}