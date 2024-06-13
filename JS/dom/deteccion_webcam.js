
const d = document, n = navigator;

export default function webCam(id){

    const $video = d.getElementById(id);

    //Comprobamos si existe la funcion getUserMedia en el navegador en que se abre la pagina

    if (n.mediaDevices.getUserMedia){
        //Si la validacion es true, osea que la funcion existe, entonces ejecutamos la funcion que recibe varios
        //parametros, para activar audio, video.

        n.mediaDevices.getUserMedia({video:true, audio: false})
        .then(
            (stream)=> {
                console.log(stream);
            $video.srcObject = stream;

            $video.play();
    })
    .catch(
        (err)=>{

            $video.insertAdjacentHTML("beforebegin",`<p>¡Sucedio el siguiente error!: <mark>${err}</mark></p>`);

            console.log(`¡Sucedio el siguiente error!: ${err}`);
        }
    );
    }

}