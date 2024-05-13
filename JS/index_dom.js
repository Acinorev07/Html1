import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock,alarm} from "./dom/reloj.js";
import { moveBall } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";




const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{

    hamburguerMenu(".panel-btn",".panel",".menu a")

    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

    alarm("assets/trailer-sport-stylish-16073.mp3","#activar-alarma","#desactivar-alarma");

    countdown("countdown", "May 10, 2024 6:00:00", "a trabajar");

    scrollTopButton(".scroll-top-btn");


});



d.addEventListener("keydown",(e)=>{
    
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
