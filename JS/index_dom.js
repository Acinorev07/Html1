import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import {digitalClock,alarm} from "./dom/reloj.js";
import { moveBall } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import gruposFacebook from "./dom/Obtener_grupos.js";
import smartVideo from "./dom/video_inteligente.js";



const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{

    hamburguerMenu(".panel-btn",".panel",".menu a")

    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

    alarm("assets/trailer-sport-stylish-16073.mp3","#activar-alarma","#desactivar-alarma");

    countdown("countdown", "May 10, 2024 6:00:00", "a trabajar");

    scrollTopButton(".scroll-top-btn");
    // media query:(min-width:1024px): cuando la anchura minima sean 1024 pixeles
    //responsiveMedia("youtube","(min-width:1024px)","Contenido Movil","Contenido Escritorio");
     responsiveMedia(
        "youtube",
        "(min-width:1024px)",
        `<a href ="https://youtu.be/DR1zFggjyMg?si=H-3ug-kQbu6g8nq3" target = "_blank" rel= "noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/DR1zFggjyMg?si=g9asiZ3vHg7dQECB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        );
     responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        `<a href ="https://maps.app.goo.gl/tFbv9As6B6KT53CKA" target = "_blank" rel= "noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31700.311682735373!2d-72.72980685000009!3d6.7038751500000044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69aa18a8b7dc07%3A0x9d6020771b8cf78c!2sM%C3%A1laga%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1715568080050!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );

    // Aqui se le pasa a la variable form solo el nombre del id sin el simbolo #, por lo tanto no es un selector
    // valido, pero como en la funcion responsiveTester estamos usando el metodo getElementById, el selector no requiere el simbolo #.

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    gruposFacebook();
    smartVideo();
});



d.addEventListener("keydown",(e)=>{
    
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");

networkStatus();

