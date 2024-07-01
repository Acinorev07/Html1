
const d = document;


export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;
    
    //  console.log(`tester1: ${tester}`);
    //Trabajaremos con el evento submit del formulario
    //usando la delegacion de eventos, asocionado al documento el evento submit
    //y posteriormente con la tecnica del e.target.matches vamos a evaluar que quien halla 
    //desencadenado el evento submit sea el formulario y no otra parte del documento, otra forma 
    //aparte de e.target.matches que solo comprueba si el selector es valido o no, es usar 
    // directamente la comparacion entre el e.targete que es quien inicia el evento, contra la variable
    //dom formulario $form que es quien guarda la referencia del lemento html como tal.

    d.addEventListener("click", (e)=>{

        // console.log(`tester2: ${tester}`);
        if(e.target === $form.probar){
            //No necesitamos que el formulario se procese, porque haremos esto con js, 
            //por lo tanto cancelaremos el procesamiento por defecto, y como nuestro formularion en html
            // no tiene el atributo action, no sabe a donde enviar la informacion y lo autoprocesa, para evitar todo esto, usamos:

            e.preventDefault();

            // console.log("e.target",e.target);
            // console.log("$form.probar",$form.probar);

            //alert("Formulario enviado");

            // Ahora, cuando el formulario se procese, o que deseamos es que se abra una ventana con las 
            // caracteristicas que se estan insertando en el formulario.
            // Ahora, para acceder al elemento del formulario donde se esta obteniendo la url, usamos lo siguiente.
            // el segundo valor es un requerimiento, y el tercer valor es para controlar el ancho y el alto con el que se va 
            // a abrir la ventana.
            
            tester = window.open($form.direccion.value, "tester", `innerWidth = ${$form.ancho.value}, innerHeight=${$form.alto.value}`);
            //  console.log(`tester3: ${tester}`);
        }
        // console.log(`tester4: ${tester}`);

        // if(e.target === $form.cerrar){
            
        //     tester.close();
        //     console.log(`tester10: ${tester}`);
        //     console.log("hOLa");
           
        // }

        // if (e.target.name === "cerrar") {
            
          
          
        //             console.log(`tester10: ${tester}`);
        //             tester.close();
        //             console.log("Ventana cerrada");
        
        // }
    });

    // Para cerrar la ventana usaremos lo siguiente
    d.addEventListener("click", (e)=>{
        // console.log("e.target",e.target);
        // console.log("$form.cerrar",$form.cerrar);
        // console.log(`tester5: ${tester}`);
        
        if(e.target === $form.cerrar){
            
            // console.log(`tester10: ${tester}`);
            tester.close();
            console.log("hOLa");
           
        }
         //console.log(`tester: ${tester}`);
        
    });
    // $form.cerrar.addEventListener("button", (e) => {
    //     e.preventDefault();
    //     console.log(`tester5: ${tester}`);
    //     if (tester) {
    //         console.log("hola");
    //         console.log(`tester6: ${tester}`);
    //         tester.close();
    //     }
    // });
}