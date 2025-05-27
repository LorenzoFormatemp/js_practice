/* 
    mi prendo i vari dati e faccio una serie di controlli:
*/

const form = document.getElementById('regForm');

form.addEventListener("submit", function(e){

    e.preventDefault();

    // prendo i dati
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const feedback = document.getElementById('feedback');

    // dati obbligatori
    if(!name || !email || !password || !confirm){
        feedback.innerHTML = `<div class="alert alert-danger">All fields are required!</div>`
        return;
    }


});
