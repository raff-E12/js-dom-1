// Consegna dell'esercizio:
// Inseriamo in pagina l’immagine della lampadina spenta 
// che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi 
// (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

//Selezioni dei relativi selettori
let lamp_img = document.getElementById('lamp-sel');
const btn_lamp = document.getElementById('btn-event');


//Applicazione dell'evento in questione
btn_lamp.addEventListener('click', ()=>{
    if (!lamp_img.classList.contains('yellow')) {
        lamp_img.classList.add('yellow');
    } else {
        lamp_img.classList.remove('yellow');
    }
})