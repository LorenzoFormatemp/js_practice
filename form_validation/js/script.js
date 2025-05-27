/* 
    mi prendo i vari dati e faccio una serie di controlli:
*/

const form = document.getElementById('regForm');

form.addEventListener("submit", function(e){

    e.preventDefault(); // vado a prevenire il comportamento che avrebbe di default il form

    // prendo i dati
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const feedback = document.getElementById('feedback');

    // 1. dati obbligatori
    if(!name || !email || !password || !confirm){
        feedback.innerHTML = `<div class="alert alert-danger">All fields are required!</div>`
        return;
    }

    /* 2. se la email è effettivamente una mail */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        feedback.innerHTML = `<div class="alert alert-danger">Invalid email format.</div>`
        return;
    }

    /* 3. se la password rispetta x caratteristiche => lunghezza minima 10 caratteri */
    if(password < 10){
        feedback.innerHTML = `<div class="alert alert-warning">Password must be at least 10 characters</div>`
        return;
    }

    /* 4. se le password sono uguali */
    if(password !== confirm){
        feedback.innerHTML = `<div class="alert alert-danger">Passwords must match!</div>`;
        return;
    }

    feedback.innerHTML = `<div class="alert alert-success">Registration successful!</div>`
});


const data = [
    {
        name: 'Lorenzo',
        email: 'fasa',
        provincia : null
    },
    {
        name: null,
        email: 'fasfas',
        provincia: 'Milano'
    }
]

const users = [];

data.forEach((single_obj, index) => {

    // null 
    const user = {
        'name' : single_obj.name ? single_obj.name.trim() : '',
        'provincia': single_obj.provincia ? single_obj.provincia : '',
        'email': single_obj.email ? single_obj.email : '',
    }

    users.push(user);
});


function controls (input){
    // case null
    // case vuoto
    // case undefined
    // case 
}
