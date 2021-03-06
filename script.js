/* MENU */

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

let nav = document.getElementById("nav");

let background_menu = document.getElementById("back_menu");

function mostrar_menu(){
    nav.style.transform = "translateX(0)";
    nav.style.transition = "all 500ms"
    background_menu.style.display = "block";

}

function ocultar_menu(){
    nav.style.transform = "translateX(100%)";
    background_menu.style.display = "none";
}

background_menu.addEventListener("click", ocultar_menu);

/* PORTAFOLIOS */
const portafolios    = document.querySelector('.portafolio-elementos');
const puntos     = document.querySelectorAll('.punto');


puntos.forEach( ( element , i )=> {

    puntos[i].addEventListener('click',()=>{
        
        let posicion  = i;
        let operacion = posicion * -33;

        portafolios.style.transform = `translateX(${ operacion }%)`

        puntos.forEach( ( element , i )=>{
            puntos[i].classList.remove('activo')
        })

        puntos[i].classList.add('activo')
    })
})