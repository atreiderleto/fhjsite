//selectores del menu lateral izquierdo
const menuL = document.querySelector('#menul');
const cl = document.querySelector('#cerrarl')

//selectores del menu lateral derecho 
const menuR = document.querySelector('.menumobil');
const menuBtn = document.querySelector('.menu-btn');
const cr = document.querySelector('.cerrar-l');


document.addEventListener('DOMContentLoaded', () => {
    menuL.addEventListener('click', openL);
    cl.addEventListener('click', closeL);

    menuR.addEventListener('click', openR);
    menuBtn.addEventListener('click', openRD);
    cr.addEventListener('click', closeR);
});

//abre el menu lateral izquierdo en mobil y tablet
const openL = () => {
    
    const latertalL = document.querySelector('.lateral-l');
    latertalL.classList.remove('hidden')
    
}

//cierrar el menu lateral izquierdo en mobil y tablet

const closeL = () => {
    
    const latertalL = document.querySelector('.lateral-l');
    latertalL.classList.add('hidden')
    
}

//abre el menu lateral Derecho 

const openR = () => {
    
    const latertalR = document.querySelector('.lateral-r');
    latertalR.classList.remove('hidden')
    
}


//abre el menu lateral Derecho  versino escritorio

const openRD = () => {
    
    const latertalR = document.querySelector('.lateral-r');
    latertalR.classList.remove('hidden')
    
}


//cierrar el menu lateral derecho 

const closeR = () => {
    
    const latertalR = document.querySelector('.lateral-r');
    latertalR.classList.add('hidden')
    
}