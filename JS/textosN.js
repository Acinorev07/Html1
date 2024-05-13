function tamanioTexto(texto) {
    try {
      
        return texto.length;
    } catch (error) {
        
        console.error(`Se produjo un error: ${error.message}`);
        console.error(`Tipo de error: ${error.name}`);
        // Puedes decidir qué hacer en caso de error.
        // Por ejemplo, podrías devolver null o undefined,
        // o podrías terminar la ejecución de la función aquí.
        return undefined;
    }
}

function recortarTexto(texto){
    let tijera = 9;
    let textoCortado = texto.slice(texto.length - tijera);

    return textoCortado;
}

function repetirTexto(texto, contador, limite, caso){

    switch(caso){
        case 0:
            console.log("caso 0: ciclo while");
            while(contador < limite){
                
                console.log(texto);
                contador++;
            }
            break;
        case 1:
            console.log("Caso 1: ciclo do-while");
            do{
                
                console.log(texto);
                contador++;
            } while(contador<limite);   
            break;
        case 2: 

            console.log("caso 2: ciclo for");
            for(contador; contador<limite; contador++){

                console.log(texto);

            }
            break;

        default: 
        console.log("El caso no se encuentra");
        break;    
    }

    

}

const vectorTextos = (texto, caracter) => {
    const vPalabras = []; // Arreglo para almacenar las palabras resultantes
    let palabraActual = ""; // Variable temporal para construir cada palabra
  
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === caracter) {
        // Si encontramos el carácter separador
        if (palabraActual !== "") {
          // Agregamos la palabra actual al arreglo (si no está vacía)
          vPalabras.push(palabraActual);
          palabraActual = ""; // Reiniciamos la variable temporal
        }
      } else {
        // Si no es el carácter separador, construimos la palabra actual
        palabraActual += texto[i];
      }
    }
  
    // Agregamos la última palabra (si existe) al arreglo
    if (palabraActual !== "") {
      vPalabras.push(palabraActual);
    }
  
    return vPalabras;
  };

//   const invertirTexto = (texto)=>{
//     console.log("Entramos a la funcion invertirTexto");
//     let nuevoTexto = " ";
    

//     for(let i=0; i < texto.length; i++){
        
        
//         console.log(texto[texto.length - (i+1)]);
   
//         nuevoTexto += (texto[texto.length - ( i + 1)]);
        
//     }

//     console.log(nuevoTexto);
    
//   }
  const invertirTexto = (texto) => {
    let nuevoTexto = "";
  
    for (let i = texto.length - 1; i >= 0; i--) {
      nuevoTexto += texto[i];
    }
    console.log(nuevoTexto);
    return nuevoTexto;
   };

  const contarPalabras= (texto, palabra)=>{
     console.log("Entramos en la funcion contar palabras");
    let separador = " ";
    let contador = 0;
    let vectorPalabras = vectorTextos(texto, separador);

    console.log(vectorPalabras);

    vectorPalabras.forEach(
        
        function(el){
          if(el === palabra){
             contador ++;
            }
        }
    )

    console.log(contador);
  }

  const polindromos = (texto) => {
    let nuevaPalabra = invertirTexto(texto);
    console.log(nuevaPalabra);
    console.log(texto);
    if(texto === nuevaPalabra){
        console.log("true");

        return true;
    }else{
        console.log("false");

        return false;
    }

    
  }

//   const removerCaracterTexto= (texto, caracter) => {
//     let resultado = '';  // 1
//     let indice = 0;  // 2
//     while (indice < texto.length) {  // 3
//         if (texto.substring(indice, indice + caracter.length) === caracter) {  // 4
//             indice += caracter.length;  // 5
//         } else {
//             resultado += texto[indice];  // 6
//             indice++;  // 7
//         }
//     }
//     console.log(resultado);

//     return resultado;  // 8
// };
const removerCaracterTexto = (texto, caracter) => {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        if (!caracter.includes(texto[i])) {
            resultado += texto[i];
        }
    }

    console.log(resultado);
    return resultado;
};

const numAleat = (limInfe, limSuper)=>{
    console.log(Math.round(Math.random()*1000));

    if(!limInfe) return console.warn("No ingresaste ningun numero limite inferior");
    if(!limSuper) return console.warn("No ingresaste ningun numero limite Superior");

    if(isNaN(limInfe)) return console.warn("Solo se reciben caracteres numericos");
    if(isNaN(limSuper)) return console.warn("Solo se reciben caracteres numericos");
    
    let resultado1 = Math.round(Math.random()*100)+limInfe;
    let resultado2 = "";

    if(resultado1>limSuper){
        console.log(`El resultado no puede ser superior a: "${limSuper}"` );

        resultado2 = resultado1 - limSuper;

        resultado1 = limSuper -resultado2;

        console.log(resultado2);
    }

    console.log(resultado1);


}

const capicua = (numero)=>{
     
    console.log(numero);
    // Creamos una variable de tipo arreglo para almacenar el numero recibido
    let vNumero = [];

    //Agregamos el numero al vector
    vNumero.push(numero);
     
    //Creamos una variable para almacenar el numero convertido a texto
    let numTexto = "";

    //Creamos el texto 
    numTexto += vNumero;

    //Ahora usamos la funcion que retorna si es polindromo
    //Creamos una variable para almacenar el retorno
    let capTF = "";

    capTF = polindromos(numTexto);

    console.log(vNumero);
    console.log(vNumero.length);

    console.log(numTexto);

    console.log(capTF);

}

const factorial = (numero)=>{

    console.log(numero);
    let secuencia = [];


    //Creamos una varible para almacenar la respuesta.
    let resultado= 1;

    for(let i=1; i<=numero;i++){

       secuencia.push(i);
    }

    for(let j= 0; j<secuencia.length;j++){

        resultado *= secuencia[j];
    }
    
    console.log("esta es la secuencia " + secuencia);
    console.log("este es el resultado " + resultado);

   
}

const numPrimo = (numero = undefined)=>{

    if(numero === undefined) return console.warn("No ingresaste un numero");
    if(numero === 0) return console,error("El numero no puede ser cero");

    if(typeof numero !== "number") console.error(`El valor "${numero}" ingresado no es un numero`);

    //Creamos una variable de tipo arreglo para almacenar una secuencia de numeros
    const divisores = [];
     
    let division = 1;
    //Creamos una variable de tipo arreglo para almacenar los resultados de la division
    const result = [];

    //Creamos un ciclo for para almacenar los valores de los divisores en su arreglo
    for (let i = 1; i<=numero; i++){
        divisores.push(i);
    }

    console.log(`La secuencia de los divisores es: "${divisores}`)

    //Creamos un ciclo for solo para buscar y almacenar los valores de la division que sean enteros
    
    divisores.forEach(
        function(el){
         
            division = numero / el;

            if(Number.isInteger(division)){
                result.push(division);
            }

        }
    )
    console.log(`Estos son los resultados enteros "${result}"`);

    if(result.length > 2){
        console.log("false");
    }else{
        console.log("true");
    }
}

const esParImpar = (numero)=>{
    let result = "";

    result = numero / 2;

    

    if(Number.isInteger(result)){


        
        console.log(`El numero "${numero}" es par "${result}"`);
    }else{
        
        console.log(`El numero "${numero}" es impar "${result}"`);
    }
}

const temCF = (temperatura = undefined, escala= undefined)=>{

    let c = "c";
    let f = "f";
    //Aqui realizamos todas las validaciones
    if(temperatura === undefined) return console.warn("No ingresaste una temperatura");
    if(escala === undefined) return console.warn("No ingresaste una escala para la temperatura");

    if(typeof temperatura !== "number") return console.error(`El valor "${temperatura}" no es un numero.`);

    if(typeof escala !== "string") return console.error(`El valor "${escala}" no es un caracter valido`);

    console.log("1" + c);
    console.log("2" + f);

    if(escala !== c && escala !== f ) return console.warn(`La escala "${escala}", no es una escala valida, solo se permite los caracteres "C" y "F"`);
    //if( ) return console.warn(`La escala "${escala}", no es una escala valida, solo se permite los caracteres "C" y "F"`);

    //Creamos una variable para almacenar las opciones

    let opcion = "";

    if(escala === "c"){
         opcion = 1;
    }else{
         opcion = 2;
    }


    //Creamos 2 variable que guardaran el valor en la escala a transformar
     let temCelcius = "";
     let temFahren = "";

     switch(opcion){
        case 1 : 
           temFahren = (temperatura * 1.8)+32;

           console.log(`La temperatura en fahreheit es: "${temFahren}".`);

        break;
        case 2:
            temCelcius =(temperatura - 32)/1.8;

            console.log(`La temperatura en celsius es: "${temCelcius}".`);

        break;
        
        default: 
            console.log("no se reconoce la opcion.");
            break;




     }

}

const convertirBinarioDecimal = (numero =undefined, unidad= undefined)=>{

    //Aqui realizamos todas las validaciones
    if(numero === undefined) return console.warn("Debes ingrsar un valor para el numero a convertir");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, no es un numero`);

    if(unidad === undefined) return console.warn("Debes ingresar un valor de caracter typo texto para designar la unidad en la que esta el numero");
    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, no es un parametro de typo cadena de texto`);

    if(unidad.length !== 1 || !/(B|D)/.test(unidad)) return console.warn("Valor de unidad no reconocido solo se permite D para Decimal y B para Binario");


    //Aqui creamos la ecuacion para convertir entre unidades

    //Creamos dos variables que guardaran el valor de la unidad a trasformar
    let aBinario = "";
    let aDecimal = "";

    //Creamos una varible para almacenar las opciones
     let opcion = "";

     if (unidad === "B"){
        opcion = 1;
        console.log("Transformaremos este numero binario a decimal");

     }else if(unidad === "D"){
        opcion = 2;
        console.log("Transformaremos este numero decimal a binario");
     }

     switch (opcion){

        case 1:
        console.log(numero);
        const arregloBinario = [];
        //Convertimos el numero a una cadena de texto
        let numeroTexto = "";
        numeroTexto = numero.toString();
        // Damos vuelta al los caracteres del numero convertido en texto, esto devido a que se empieza de derecha a izquierda
        let numeroReves = numeroTexto.split("").reverse().join("");
        console.log(`Este es el numero texto: "${numeroTexto}".`);
        console.log(`Este es el numero al Reves: "${numeroReves}".`);
        //Creamos una variable para almacenar el resultado de la operacion:
        let resultado = 0;
        //Agregamos cada elemento de esta cadena de texto al arreglo
        for (let i=0;i<numeroReves.length;i++){
            arregloBinario.push(numeroReves[i]);
        }
        //Hacemos la comprobacion de que sea un numero binario
        arregloBinario.forEach(
            function(el,index){
                if (!/(1|0)/.test(el)) return console.error(`El valor "${numero}" ingresado, no es un numero binario`);

                console.info(`<li id = "${index}"> ${el}</li>`);

                resultado += el * Math.pow(2,index);
                console.info("----------------------")
                console.info(`<li elemento = "${el}"> ${resultado}</li>`);

            }
        )
        console.log(`El resultado es: "${resultado}".`);
        console.log("Arreglo binario " + arregloBinario);
        break;

        case 2:

            console.log(numero);

            // Creamos la constante del arreglo donde estara los modulos de los numeros
            const residuos = [];

            //creamos una vatiable para almacenar el resultado de la division:
            let resulDivision = 0;

            //Creamos una variable para almacenar el texto a convertir
            let resulTexto="";
            
            // Cambiamos el numero de varible para la definicion

            let numeroOperacion = numero;

            do{

                resulDivision  = numeroOperacion / 2;
                residuos.push(numeroOperacion % 2);

                numeroOperacion = parseInt(resulDivision);

                console.log("El numero dentro del do-while es: " + numeroOperacion);
                

            }while(numeroOperacion !== 0);

            residuos.forEach(
                function(el,index){
    
                    resulTexto += el;
    
                }
            )

            console.log("El arreglo es: " + residuos);
            console.log("El texto es: " + resulTexto);
            console.log("El typo de variable es: " + typeof resulTexto);

            let numeroReves2 = resulTexto.split("").reverse().join("");
            
            console.log("El texto 2 es: " + numeroReves2);

            let resultadoFinalBinario = parseInt(numeroReves2);
            console.log(`El numero "${numero}" se combierte a binario asi: "${resultadoFinalBinario}".`);
            console.log("El typo de variable es: " + typeof resultadoFinalBinario);
        break;


     }

}

const descuento = (precio = undefined, descuento = undefined)=>{

    //Realizamos las comprobacione para solo admitir numeros
    if(precio === undefined) return console.warn("Ingresa un precio al que vas a aplicar descuento");

    if(typeof precio !== "number") return console.error(`El valor "${precio}" ingresado no es un numero`);

    if(descuento === undefined) return console.warn("Ingresa un valor para el descuento");

    if(typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado no es un numero`);
    console.log (precio);
    if(Math.sign(precio) === -1 || precio === 0) return console.warn("El precio debe ser un numero mayor que cero");
    console.log (descuento);
    if(Math.sign(descuento)=== -1 || descuento > 100) return console.warn("El desucento debe ser un numero mayor que cero y menor a 100");

    //Creamos una varible para almacenar el resultado
     let resultado = 0;

    //Desarrollamos la operacion

    resultado = precio - (precio*(descuento/100));

    //Verifica el resultado
    console.log("El resultado es: "+resultado);


    console.log("Entramos a la funcion descuento")
}

const cantidadAños = (fecha = undefined)=> {

    if(fecha === undefined) return console.warn("Ingrese un valor para la fecha");

    if(!(fecha instanceof Date)) return console.error(`El valor "${fecha}" ingresado no es una fecha valida`);
    // if(typeof fecha !== "object") return console.error(`El valor "${fecha}" ingresado no es una fecha valida`);

    // console.log("Entramos a la funcion cantidad años");

    // console.log(fecha);

    // // Creamos una variable para almacenar el año de la fecha ingresada
    // let año1 = fecha.getFullYear();

    // //Cramos la fecha actual
    // let fechaActual = new Date();

    // //Cramos una variable para almacenar el año actual
    // let añoActual = fechaActual.getFullYear();

    // //Creamos una variable para almacenar los años hasta hoy
    // let año2 = añoActual - año1;

    // console.log("Año ingresado " + año1);
    // console.log("Año actual " + añoActual);
    // console.log("Años transcurridos " + año2);
    
console.log(fecha);
//let milisegundosFechaActual = new Date(fecha).getTime();

let hoyMenosFecha = new Date().getTime() - fecha.getTime();
console.log(hoyMenosFecha);

let aniosEnMS = 1000*60*60*24*365;

console.log(aniosEnMS);

let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);
console.log(aniosHumanos);

if(Math.sign(aniosHumanos)===-1){
    console.info(`Faltan "${Math.abs(aniosHumanos)}" años para el "${fecha.getFullYear()}".`);
}else if(Math.sign(aniosHumanos)===1){
    console.info(`Han pasado "${aniosHumanos}" años desde el "${fecha.getFullYear()}".`);
}
}

const tipoLetra = (texto = undefined)=>{

    if(texto === undefined) return console.warn("Ingrese un texto por favor");

    if(typeof texto !== "string") return console.error(`El valor "${texto}" ingresado no es un tipo de texto`);

    // Creamos una variable tipo arreglo para igresar las vocales 
    const arrVocales =[];
    // Creamos una variable tipo arreglo para igresar las consonantes
    const arrConsonantes =[];

    //Creamos un bucle que recorra cada letra del texto y defina a que tipo pertenece

    for (let i=0; i<texto.length;i++){
        if(!/(a|e|i|o|u| )/.test(texto[i])){
            //Agregamos las consonantes al arreglo
            arrConsonantes.push(texto[i]);

            //Imprimimos el arreglo y su tamaño
            console.info(`Las consonantes del texto son "${arrConsonantes}", en total: "${arrConsonantes.length}" `);
        }else {
                 //Agregamos las vocales al arreglo
                 arrVocales.push(texto[i]);

                 //Imprimimos el arreglo y su tamaño
                 console.info(`Las vocales del texto son "${arrVocales}", en total: "${arrVocales.length}" `);
        }
    }
    
}

//21
const elevarAlCuadrado = (array = undefined)=>{

    if(array === undefined) return console.warn("Ingresa una secuencia de numeros en una cadena de texto");

    if(typeof array !== "string") return console.error(`El valor "${array}" ingresado no es una cadena de texto`);

    console.log("estamos antes de for");
    for(let i = 0; i<array.length; i++){
           
        if(!/([0-9\.\,])/.test(array[i])) return console.error(`El valor "${array}" ingresado no es una cadena de texto compuesta de numeros`);

        console.log("estamos dentro de for");
    }

    console.log(`Este es el texto array : ${array}`);
    console.log(`Este es el texto array : ${typeof array}`);
    console.log(`Este es el texto array : ${array instanceof Array}`);

    const nuevoArray = vectorTextos(array, ",");
    //const nuevoArray = new Array(array);
   
    console.log(`Este es el array nuevo : ${nuevoArray}`);
    console.log(`Este es el array nuevo : ${typeof nuevoArray}`);
    console.log(`Este es el array nuevo : ${nuevoArray instanceof Array}`);
    console.log(`Esta es la cantidad del array nuevo: ${nuevoArray.length}`);
    //Creamos una variable para almacenar la respuesta de elevar cada elemento al cuadrado
    let respuesta = "";
    //Creamos una variable que almacene los elementos del primero arreglo, elevados al cuadrado
    const arrayElevado = [];

    nuevoArray.forEach(
        function(el){
            console.log(`el "${el}"`);
           respuesta = Math.pow(el,2);
           console.log(`respuesta "${respuesta}"`);
           arrayElevado.push(respuesta);

        }
    )


    console.log("estamos despues de for");

    console.log(`Este es el array de elementos elevado al cuadrado "${arrayElevado}"`);

}

//22
const numMaxMin = (array = undefined)=>{

    if(array === undefined) return console.warn("Ingresa una secuencia de numeros en una cadena de texto");

    if(typeof array !== "string") return console.error(`El valor "${array}" ingresado no es una cadena de texto`);

    console.log("estamos antes de for");
    for(let i = 0; i<array.length; i++){
           
        if(!/([0-9-\.\,])/.test(array[i])) return console.error(`El valor "${array}" ingresado no es una cadena de texto compuesta de numeros`);

        console.log("estamos dentro de for");
    }

    console.log(`Este es el texto array : ${array}`);
    console.log(`Este es el texto array : ${typeof array}`);
    console.log(`Este es el texto array : ${array instanceof Array}`);

    const nuevoArray2 = vectorTextos(array, ",")
    
    console.log(`Este es el array nuevo : ${nuevoArray2}`);
    console.log(`Este es el array nuevo : ${typeof nuevoArray2}`);
    console.log(`Este es el array nuevo : ${nuevoArray2 instanceof Array}`);
    console.log(`Esta es la cantidad del array nuevo: ${nuevoArray2.length}`);

    //creamos una variable para almacenar el valor mas grande que valla apareciendo mientras se itera por el arreglo
    let maximo = 0;
    let numero = "";
    nuevoArray2.forEach(
        function(el, index){
         console.info(`<li id = "${index}"> ${el}</li>`);
          numero = parseFloat(el);
         if(numero>maximo){
            maximo = el;
         }
         
         console.log(`maximo1 "${maximo}"`);
        }
    )
    console.log(`maximo2 "${maximo}"`);

    //Aqui hallamos el valor minimo
    let minimo = 0;
    let numero2 = "";
    nuevoArray2.forEach(
        function(el, index){
         console.info(`<li id = "${index}"> ${el}</li>`);
          numero2 = parseFloat(el);
         if(numero2<minimo){
            minimo = el;
         }
         
         console.log(`minimo1 "${minimo}"`);
        }
    )
    console.log(`minimo2 "${minimo}"`);

    //Creamos un arreglo que retorne los valores maximo y minimo 

    let arregloMaxMin = [maximo,minimo];

    console.log(`los valores maximo y minimo  del arreglo: "${nuevoArray2}" son respectivamente "${arregloMaxMin}"`);

}

//Crear una funcion que dado un array de numeros devuelva un objeto con dos arreglos, en el primero almacene los numeros pares, y en el segundo los impares.
const paresImpares = (array = undefined)=>{
    if(array === undefined) return console.warn("Ingresa una secuencia de numeros en una cadena de texto");

    if(typeof array !== "string") return console.error(`El valor "${array}" ingresado no es una cadena de texto`);

    console.log("estamos antes de for");
    for(let i = 0; i<array.length; i++){
           
        if(!/([0-9-\.\,])/.test(array[i])) return console.error(`El valor "${array}" ingresado no es una cadena de texto compuesta de numeros`);

        console.log("estamos dentro de for");
    }

    console.log(`Este es el texto array : ${array}`);
    console.log(`Este es el texto array : ${typeof array}`);
    console.log(`Este es el texto array : ${array instanceof Array}`);


    //Creamos los arreglos para almacenar los numeros si son par o impar
    const esPar =[];
    const esImpar = [];

    const nuevoArray3 = vectorTextos(array, ",");
    // Aqui determinamos si el numero es par o impar
    let result = "";

    nuevoArray3.forEach(
        function(el){
            result = el / 2;

            if(Number.isInteger(result)){
        
        
                return esPar.push(el);
              
            }else{

               return esImpar.push(el);
                
            }
        }
    )
   
    console.log(`El arreglo "${esPar}" de pares`);
    
    console.log(`El arreglo "${esImpar}" de impares `);
    //Creamos un objeto y agregamos los arreglos 

    //Almacenamos los arreglos en variables

    let espar = esPar;
    let esimpar = esImpar;

    let diario = [];

    const añadirEntrada = (eventos,ardilla)=>{
        diario.push({eventos, ardilla});
    }
    añadirEntrada(espar,esimpar)
   

    console.log(`Este es el objeto "${diario}"`);

}

const cuadradoCallback = (value,callback)=>{

    console.log(`Antes del setTimeout "${new Date().toLocaleTimeString()}"`)
    setTimeout(()=>{
        callback(value, value*value);
        console.log(`Dentro del setTimeout "${new Date().toLocaleTimeString()}"`);
    },0|Math.random()*10000);

    console.log(`Despues del setTimeout "${new Date().toLocaleTimeString()}"`)
}

export const textosPrueba = {
    tamanioTexto,
    recortarTexto,
    repetirTexto,
    vectorTextos,
    invertirTexto,
    contarPalabras,
    polindromos,
    removerCaracterTexto,
    numAleat,
    capicua,
    factorial,
    numPrimo,
    esParImpar,
    temCF,
    convertirBinarioDecimal,
    descuento,
    cantidadAños,
    tipoLetra,
    elevarAlCuadrado,
    numMaxMin,
    paresImpares,
    cuadradoCallback
};