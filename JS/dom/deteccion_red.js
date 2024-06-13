
//Declaramos unas variables globales para el archivo
const d = document, w= window, n= navigator;


// Aqui determinaremos el estado de la red de nuestra conexion
export default function networkStatus(){

    //Ahora crearemos la funcion que mostrara los mensajes en el navegador, si hay internet o no

    const isOnline = ()=>{

        //Creamos un elemento div y en el documento y lo almacenamos en una variable
        const $div = d.createElement("div")

        //Creamos la estructura de control
        if(n.onLine){
            $div.textContent = "Conexion reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent = "Conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        //Ahora agregamos el elemento al documento en el body, como el primer hijo
        
        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(()=>d.body.removeChild($div),2000);
    }

    //Aqui los metodos que llaman a la funcion isOnline
    w.addEventListener("online",(e)=>isOnline());
    w.addEventListener("offline",(e)=>isOnline());


}