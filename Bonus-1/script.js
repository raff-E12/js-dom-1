// Consegna del bonus-1: Integrazione di testo sul relativo evento.
//Facciamo accendi e spegni:
// - Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// - Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// - E così via..
// Per fare questo bonus potremmo aver bisogno di del metodo string.includes().

//Selezioni dei relativi selettori
let lamp_img = document.getElementById('lamp-sel');
const btn_lamp = document.getElementById('btn-event');
let text_btn = 'Spegni';

//Applicazione dell'evento in questione
btn_lamp.addEventListener('click', ()=>{
    if (!lamp_img.classList.contains('yellow') && !text_btn.includes('Spegni')) {
        lamp_img.classList.add('yellow');
        text_btn = 'Spegni'
        btn_lamp.innerText = text_btn; 
    } else {
        text_btn = 'Accendi'
        btn_lamp.innerText = text_btn; 
        lamp_img.classList.remove('yellow');
    }
})