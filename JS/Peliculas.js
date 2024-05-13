//Programa una clase llamada pelicula.
//La clase recibira un objeto al momento de instanciarse, con los siguientes datos:
//id-> De la pelicula en IMDB: Validaremos que tenga exactamente 9 caracteres, los primeros 2 son etras y el resto numeros
//Titulo: Validamos que no exeda los 100 caracteres.
//Director: Validamos que no rebase los 50 caracteres.
//Año de estreno: Validamos que sea un numero entero de 4 digitos.
//Pais o paises de origen: Validamos que sean introduciodos en forma de arreglo.
//Genero: - Validamos que sea introducidos en forma de arreglo.
//        - Validamos que los generos introducidos esten entre los generos aceptados.
//        - Creamos un metodo estatico que devuelva los generos aceptados.
//Calificacion: Valida que sea un numero entre 0 y 10 pudiendo tener solo una posicion decimal.
// Todos los datos del objeto son obligatorios
// Crea un metodo que devuelva una ficha tecnica de la pelicula.
// A partir de una arreglo con la informacion de tres películas genere tres instancias de la clase, de forma automatizada
//   e imprime ls ficha tecnica de cada pelicula.
//Generos aceptados: Action, Adult, Adventure, Animation, Biography, comedy, Crime, Documentary, Drama, Family, Fantasy, Film noir, Game-Show, History, Horror, Musical, Music, Mistery, News, Reality -  tv, Romance, Sci-Fi, short, sport, Talk-show, Thriller, war, western. 

//Inciamos creando la clase Pelicula:

class Pelicula {
    constructor(
        {
            id,
            titulo,
            director,
            estreno,
            pais,
            generos,
            calificacion
        }
    ){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        //Instanciamos los metodos
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    //Validaciones genericas
    
      //Creamos una funcion que permita validad cadenas:
      validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, no es una cadena de texto`);
        return true;
      }

      //Validamos que la longitud de la cadena sea especifica
      validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos "${longitud}"`);

        return true;
      }

      //Validamos que el numero del año, no exceda los 4 digitos
      validarNumero(propiedad,valor){
        if(!valor) return console.warn (`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado no es un numerio`);
        return true;
      }

      //Validamos que los valores pasados sean arreglos
      validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" no es un arreglo`);
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
        for (let cadena of valor){
            if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, no es una cadena de texto`);
        }

        return true;
      }

    //id-> De la pelicula en IMDB: Validaremos que tenga exactamente 9 caracteres, los primeros 2 son etras y el resto numeros
    validarIMDB(id){
        if(this.validarCadena("IMDB id", id)){
             if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los primeros 2 letras minusculas, los 7 restantes numeros`);

                return true;
             }
        }
    }

    //Titulo: Validamos que no exeda los 100 caracteres.
    validarTitulo(titulo){
        if(this.validarCadena("Titulo", titulo))
          this.validarLongitudCadena("Titulo", titulo, 100);
    }

    //Director: Validamos que no rebase los 50 caracteres.

    validarDirector(director){
        if(this.validarCadena("Director", director))
          this.validarLongitudCadena("Director", director, 50);
    }

    //Año de estreno: Validamos que sea un numero entero de 4 digitos.
    validarEstreno(estreno){
        if(this.validarNumero("Año de estreno",estreno))
         if(!(/^([0-9]){4}$/.test(estreno))) return console.error(`Año de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`);
    }

    //Pais o paises de origen: Validamos que sean introduciodos en forma de arreglo.
    validarPais(pais){
        this.validarArreglo("Pais", pais);
    }
       
    // Ahora validamos los generos que sean permitidos, que sea un arreglo, y que devuelva una lista de generos
    // Creamos un atributo estatico de tipo contenedor getter y setter
       static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mistery", "News", "Reality -  tv", "Romance", "Sci-Fi", "short", "sport", "Talk-show", "Thriller", "war", "western"];
       }

       static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")} `);
       }

       validarGeneros(generos){
          if(this.validarArreglo("Generos", generos)){
            for (let genero of generos){
                //Para saber si un valor, existe dentro de un arreglo 
                console.log(genero, Pelicula.listaGeneros.includes(genero));
                    if(!Pelicula.listaGeneros.includes(genero)){
                        console.error(`Genero(s) incorrecto(s) "${generos.join(", ")}"`);

                    Pelicula.generosAceptados();
                    }
            }
          }
       }


    // Ahora validamos que la calificacion sea un numero entre 0 y 10 con un decimal
    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion", calificacion)) return (calificacion < 0 || calificacion > 10)
          ? console.log(`La calificacion tiene que estar entre 0 y 10`)
          : this.calificacion = calificacion.toFixed(1);
    }

    //Creamos el metodo que retorna la ficha tecnica, no se añade al constructor
    fichaTecnica(){
          console.info(`Ficha tecnica: \nTitulo: "${this.titulo}" \nDirector: "${this.director}" \nAño: "${this.estreno}" \nPais: "${this.pais.join("-")}" \nGeneros: "${this.generos.join("-")}" \nCalificacion: "${this.calificacion}" \nIMDB id: "${this.id}"`)
    }


}

export const clasePelicula = {
    Pelicula
}