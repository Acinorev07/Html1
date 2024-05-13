
import {error} from "./errores.js";
import {textosPrueba} from "./textosN.js";
import { clasePelicula } from "./Peliculas.js";

console.log("Archivo Modulos");
// let texto = "xyz1, xyz2, xyz3 y xyz4";
// let numero = 3;
// let caracter = "x";
// let cadenaTexto = error.cadenaTexto(texto);

//let tamanioTexto = textosPrueba.tamanioTexto(cadenaTexto);

//let nuevoTexto = textosPrueba.recortarTexto(cadenaTexto);

// let contador = 0;
// let limite = 5;
// let caso = 2;

// let numeros = 501;
// let palabra = "mundo";
//console.log(tamanioTexto);
//console.log(nuevoTexto);

//textosPrueba.repetirTexto(cadenaTexto,contador,limite, caso);


//let arregloNuevo = textosPrueba.vectorTextos(cadenaTexto, caracter);


//console.log(arregloNuevo);

// let c = "c";
// let f = "f";
// let fecha = new Date("02/03/1984");


// textosPrueba.invertirTexto("Hola mundo putos");

// textosPrueba.contarPalabras(cadenaTexto, palabra);

// textosPrueba.polindromos("salas");

// textosPrueba.removerCaracterTexto("xyz1, xyz2, xyz3 y xyz4", "xyz");

// textosPrueba.numAleat(530,600);

// textosPrueba.capicua(2003);

// textosPrueba.factorial(13);

// textosPrueba.numPrimo(23);

// textosPrueba.esParImpar(13);

// textosPrueba.temCF(13,f);

//textosPrueba.convertirBinarioDecimal(10101,"D");

//textosPrueba.convertirBinarioDecimal(10011101110101,"B");

//textosPrueba.descuento(1000,19);

//textosPrueba.cantidadAños(new Date(2028,4,6));

//textosPrueba.tipoLetra("Hola mundo");

//textosPrueba.elevarAlCuadrado("1,22,3,4");

//textosPrueba.numMaxMin("5251,3,22,6,7,-1,-21892");

//textosPrueba.paresImpares("5251,3,22,6,7,-1,-21892");

// const paresImpares = (array = undefined)=>{
//     if(array === undefined) return console.warn("Ingresa una secuencia de numeros en una cadena de texto");

//     if(typeof array !== "string") return console.error(`El valor "${array}" ingresado no es una cadena de texto`);

//     console.log("estamos antes de for");
//     for(let i = 0; i<array.length; i++){
           
//         if(!/([0-9-\.\,])/.test(array[i])) return console.error(`El valor "${array}" ingresado no es una cadena de texto compuesta de numeros`);

//         console.log("estamos dentro de for");
//     }

//     console.log(`Este es el texto array : ${array}`);
//     console.log(`Este es el texto array : ${typeof array}`);
//     console.log(`Este es el texto array : ${array instanceof Array}`);


//     //Creamos los arreglos para almacenar los numeros si son par o impar
//     const esPar =[];
//     const esImpar = [];

//     const nuevoArray3 = textosPrueba.vectorTextos(array, ",");
//     // Aqui determinamos si el numero es par o impar
//     let result = "";

//     nuevoArray3.forEach(
//         function(el){
//             result = el / 2;

//             if(Number.isInteger(result)){
        
        
//                 return esPar.push(el);
              
//             }else{

//                return esImpar.push(el);
                
//             }
//         }
//     )
   
//     console.log(`El arreglo "${esPar}" de pares"`);
    
//     console.log(`El arreglo "${esImpar}" de impares `);
//     //Creamos un objeto y agregamos los arreglos 

//     //Almacenamos los arreglos en variables

//     let espar = esPar;
//     let esimpar = esImpar;

//     // const arrayParImpar = {
//     //     esPar:espar,
//     //     esImpar:[esimpar]
//     // }

//     // console.log(`Este es el objeto "${arrayParImpar}"`);

// }
// const arrayParImpar = {
//     espar:[],
//     esimpar:[]
// }

// arrayParImpar.espar=paresImpares.esPar;
// arrayParImpar.esimpar=paresImpares.esImpar;

// paresImpares("5251,3,22,6,7,-1,-21892");

// console.log(`Este es el objeto "${arrayParImpar}"`);
// console.log(arrayParImpar);

//const peli = 

// clasePelicula.Pelicula = new Pelicula({
//     id: ""
// });
// let codigo = "tt1234567";
// // let titulo = "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901";
// let titulo = "La niebla";
// let director  = "Guillermo del toro";
// let estreno = 1234;
// let pais = ["Colombia"];
// let generos = ["Action"];
// let calificacion = 2.33;

// // Creamos un arreglo con tres objetos pelicula
// const misPelis = [
//     {
//         id: codigo,
//         titulo: titulo,
//         director: director,
//         estreno: estreno,
//         pais: pais,
//         generos: generos,
//         calificacion: calificacion

//     },
//     {
//         id: "tt1234567",
//         titulo: "La casa en la colina",
//         director: "Un man por hay",
//         estreno: 2022,
//         pais: ["italia"],
//         generos: ["Horror", "Comedy"],
//         calificacion: 2.345

//     },
//     {
//         id: "tt7654321",
//         titulo: "La cosa",
//         director: "Una mujer por hay",
//         estreno: 2023,
//         pais: ["colombia"],
//         generos: ["Horror", "Comedy"],
//         calificacion: 2.345

//     }
// ];

// Ahora creamos una ficha tecnica por cada objeto:
//let pelicula = misPelis.forEach(el=> new clasePelicula.Pelicula(el).fichaTecnica());


// let pelicula = new clasePelicula.Pelicula({
//     id: codigo,
//     titulo: titulo,
//     director: director,
//     estreno: estreno,
//     pais: pais,
//     generos: generos,
//     calificacion: calificacion
// });

textosPrueba.cuadradoCallback(3,(value, result)=>{

    console.log("Inicia callback 1");
    console.log(`callback "${value} ","${result}"`);
    textosPrueba.cuadradoCallback(6,(value, result)=>{

        console.log("Inicia callback 2");
        console.log(`callback "${value} ","${result}"`);
    
    });

});
