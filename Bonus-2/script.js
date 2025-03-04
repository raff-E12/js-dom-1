//Bonus-3: Integrazione Css di Base.

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