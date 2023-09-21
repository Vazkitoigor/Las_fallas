let conmutador = document.getElementsByClassName("conmutador")[0];
let menu = document.getElementsByClassName("navegador")[0];

function conmutar() {
    menu.classList.toggle("desplegado");
    


}

conmutador.addEventListener("click", conmutar);