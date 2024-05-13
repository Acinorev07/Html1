const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("href","https://www.youtube.com/channel/UCGT-O9XnpwcYp7YtYLbN8uA")

//$linkDOM.setAttribute("rel","noopener");

$linkDOM.setAttribute("style","background-color: #F7DF1E; color: #222");
$linkDOM.setAttribute("data-id","1");
$linkDOM.setAttribute("data-description","Document Object Model");
$linkDOM.style.setProperty("text-decoration","none");

console.log($linkDOM);
console.log(document.documentElement);

let elementos = document.querySelectorAll(".card");

// // Luego, obtén los atributos del elemento.
// let atributos = elemento.attributes;

// let $img = elemento.children[0];
// $img.setAttribute("width","200");
// $img.setAttribute("height","200");
// console.log($img);

elementos.forEach((elemento) => {
    let $img = elemento.children[0];
    $img.setAttribute("width","200");
    $img.setAttribute("height","200");
    console.log($img);
  });

  const $html = document.documentElement,
        $body = document.body;

   let varDarkColor = getComputedStyle($html).getPropertyValue ("--dark-color");
   let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

  // $body.style.backgroundColor = varDarkColor;
   //$body.style.color = varYellowColor;

   //$html.style.setProperty("--dark-color","red");
   varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

   //$body.style.setProperty("background-color", varDarkColor);

   const $card = document.querySelector(".card");

   console.log($card);

   //$card.classList.add("rotate-45");

   const $cards = document.querySelector(".cards");

   //Crear elementos dinamicamente en javascript
   //Para crear la tarjeta #6
   const $figure = document.createElement("figure"),
         $figure2 = document.createElement("figure"),
         $img = document.createElement("img"),
         $img2 = document.createElement("img"),
         $figcaption = document.createElement("figcaption"),
         $figcaption2 = document.createElement("figcaption"),
         $figcaptionText = document.createTextNode("Animals"),
         $figcaptionText2 = document.createTextNode("Animals");

         //Asi va el orden

         $img.setAttribute("src","imagenes//Screenshot_20240118-124556.png");
         $img.setAttribute("alt","Rick");
         $img.setAttribute("width",200);
         $img.setAttribute("height",200);
         $figure.classList.add("card");
         $figcaption.appendChild($figcaptionText);
         $figure.appendChild($img);
         $figure.appendChild($figcaption);
         //$cards.appendChild($figure);

         //2

         $img2.setAttribute("src","imagenes//Prueba1.jpg");
         $img2.setAttribute("alt","Rick");
         $img2.setAttribute("width",200);
         $img2.setAttribute("height",200);
         $figure2.classList.add("card");
         $figcaption2.appendChild($figcaptionText2);
         $figure2.appendChild($img2);
         $figure2.appendChild($figcaption2);
         //$cards.appendChild($figure2);

        

       

//Vamos a agregar estaciones del año

const estaciones = ["Primavera","Verano","Otoño","Invierno"],
       $ul = document.createElement("ul");

       document.body.appendChild($ul);

       estaciones.push("diciembre");

       estaciones.forEach(el => {
        const $li = document.createElement("li");
        $li.textContent = el;
        $ul.appendChild($li);
       }
    )

    //Crearemos fragmentos
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre"],
          $ul3 = document.createElement("ul"),
          $fragment = document.createDocumentFragment();
          let mes = "Diciembre";
          meses.push(mes);
          meses.forEach((el)=>{
            const $li = document.createElement("li");
            $li.textContent = el;
            $fragment.appendChild($li)
          });

          document.write("<h3>Meses del año</h3>");

          $ul3.appendChild($fragment);

          document.body.appendChild($ul3);


          const $template = document.getElementById("template-card").content,
                cardContent = [
                    {
                        title : "Tecnologia",
                        img : "imagenes//LogoEmpresa.png",
                        width: 200,
                        height: 200
                    },
                    {
                        title : "Tecnologia",
                        img : "imagenes//LogoEmpresa.png",
                        width: 200,
                        height: 200
                    },
                    {
                        title : "Tecnologia",
                        img : "imagenes//LogoEmpresa.png",
                        width: 200,
                        height: 200
                    },
                    {
                        title : "Tecnologia",
                        img : "imagenes//LogoEmpresa.png",
                        width: 200,
                        height: 200
                    },
                    {
                        title : "Tecnologia",
                        img : "imagenes//LogoEmpresa.png",
                        width: 200,
                        height: 200
                    }   
                ];

                cardContent.forEach(el=>{


                    $template.querySelector("img").setAttribute("src",el.img);
                    $template.querySelector("img").setAttribute("alt",el.title);
                    $template.querySelector("img").setAttribute("width",el.width);
                    $template.querySelector("img").setAttribute("height",el.height);
                    $template.querySelector("figcaption").textContent = el.title;

                    let $clone = document.importNode($template, true);

                    $fragment.appendChild($clone)

                });

                 $cards.appendChild($fragment);


                //$cards.insertBefore($figure, $cards.firstElementChild);

                //$cards.insertBefore($figure2, $cards.firstElementChild);

                $cards.insertAdjacentElement("afterbegin",$figure);
                $cards.insertAdjacentElement("afterbegin",$figure2);
                 



         
         