// Harenmos uso del objeto match media que cuelga del window
const d= document, w = window;
//creamos una funcion que recibira los siguiente parametros:
//id: El identificado de los divs que la funcion va a estar revisando.
//md: Es donde se pasa del enlace para dispositivos moviles y el codigo envebido del contenido para escritorio valida en css.
//mobileContent: El contenido html que queremos ver a nivel mobil.
//desktopContent: El codigo que se estara insertando dinamicamente que hace referiencia al contenido para escritorio.
//

export default function responsiveMedia(id,mq,mobileContent,desktopContent){
    // Creamos una variable que almacenara la media query que el usuario pasa en el md
    let breakpoint= w.matchMedia(mq);
    //Nosotros podemos asignar un listener al objeto window matchMedia para que este revisando que la md
    // de 1024 px sea la que es, si esta llegase a cambiar pues hace el cambio de contenido
    // La funcion responsive que recibe el escuchador de la media query es la que va a estar evaluando 
    // que sucede con la informacion.
    const responsive = (e)=>{
        if(e.matches){
            //si el id en question y si la media quiery cunple la minima altura es 1024 px y de hay para arriba es escritorio por eso es true
            // por eso agregamos al div la informacion en la variable desktopContent.
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            // Aqui se supone que la media query no cumple el tamaño minimo de 1024 pixeles por lo tanto
            // estamos en un dispositivo mobile.
            d.getElementById(id).innerHTML = mobileContent;

        }

        //console.log("mq", e.matches);
    };
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}