/*Con el metodo que veremos ahora podremos detectar el dispositivos
desde el cual nos visita el usuario, tendremos la posibilidad de manipular el diseño de la pagina
basados en los datos del dispositivos del usuraio. */

const d = document, n = navigator, ua = n.userAgent;
export default function userDeviceInfo(id){
//Muestra una cadena de texto con toda la informacion del dispositivo desde el que nos visita el usuario
    // console.log(ua);
//Guardamos el id del div donde mostraremos la informacion.
const $id = d.getElementById(id);
//Variables de objeto para detectar desde que dispositivo nos visitan.
const isMobile = {
    //4 propiedades: 3 Declaradas en arrow function; y any en funcion anonima, para que el contexto de this sea isMobile, sino seria el contexto de la funcion donde se a creado  userDevice.
    // con la exprecion regurar /android/i, la funcion trata de buscar dentro de la cadena ua, si existe la palabra android, la i al final es
    //   una bandera que no toma en cuenta mayusculas y minusculas.
android: ()=> ua.match(/android/i),
ios: ()=> ua.match(/iphone|ipad|ipod/i),
windows:()=> ua.match(/windows phone/i),
// Con any no nos importa desde que dispositivo nos visiten, se aplica para todos
any: function(){
    return this.android()||this.ios()||this.windows();
}
},
isDesktop = {
linux: ()=> ua.match(/linux/i),
mac: ()=> ua.match(/mac os/i),
windows: () => ua.match(/windows nt/i),
any: function(){
    return this.linux()||this.mac() ||this.windows();
}
},
isBrowser ={
chrome:()=> ua.match(/chrome/i),
safari:()=> ua.match(/safari/i),
firefox: ()=> ua.match(/firefox/i),
opera: ()=> ua.match(/opera|opera mini|opr/i),
ie: ()=> ua.match(/msie|iemobile/i),
edge:()=> ua.match(/edge|edg/i),
any:function(){
    return(
        this.ie()||
        this.edge()||
        this.chrome()||
        this.safari()||
        this.firefox()||
        this.opera()
    );
}
};

// Agregamos la informacion al div
$id.innerHTML = `
<ul>
   <li>User Agent: <b>${ua}</b></li>
   <li>Plataforma: <b>${
    isMobile.any() ? isDesktop.any() : isBrowser.any()
   }</b></li>
   <li>Navegador: <b>${isBrowser.any()}</b></li>
</ul>
`;

//Para crear contenido exclusivo para ciertos navegadores
//Contenido exclusivo para chrome

if(isBrowser.chrome()){
    $id.innerHTML += `<p><mark>Este contenido es exclusivo para Chrome</mark></p>`;
}
//Contenido exclusivo para firefox
if(isBrowser.firefox()){
    $id.innerHTML += `<p><mark>Este contenido es exclusivo para Firefox</mark></p>`;
}

//Para redirigir a una pagina si estamos en un dispositivo android

if(isMobile.android()){
    window.location.href = "https://www.youtube.com/channel/UCGT-O9XnpwcYp7YtYLbN8uA";
}

}