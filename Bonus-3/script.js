//Bonus-3: Creazione dello switch nella versione 2.0

//Creazione delle seguenti variabili

let btn_switch = document.getElementById('btn-switch');
let text = document.querySelectorAll('.text-switch');
let box_light = document.querySelector('.body-bg.light');
let box_dark = document.querySelector('.body-bg.dark');
let switch_line = document.querySelector('.btn-box');

//Funzione di interazione sul tipo di evento

function SwitchHandle(){
    if (!btn_switch.classList.contains('dark')) {
        btn_switch.classList.add('dark');
        switch_line.classList.add('dark');
        switch_line.classList.remove('light');
        for (let index = 0; index < text.length; index++) {
            text[index].classList.add('dark');
        }
        btn_switch.classList.remove('light');
        box_light.classList.add('missing');
        box_dark.classList.remove('missing');
    } else {
        btn_switch.classList.add('light');
        btn_switch.classList.remove('dark');
        box_dark.classList.add('missing');
        box_light.classList.remove('missing');
        switch_line.classList.add('light');
        switch_line.classList.remove('dark');
        for (let index = 0; index < text.length; index++) {
            text[index].classList.remove('dark');
        }
    }
}

//Aggiunta del tipo di evento al bottone
btn_switch.addEventListener('click', SwitchHandle);