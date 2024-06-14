const d = document;

export default function slider() {
    // Capturamos en variables los elementos del DOM que vamos a utilizar
    // const $nextBtn = d.querySelector("#seccion12 > div > div.slider-btns > a.next"),
    //     $prevBtn = d.querySelector("#seccion12 > div > div.slider-btns > a.prev"),
    //     $slides = d.querySelectorAll("#seccion12 > div > div.slider-slide");

    const $nextBtn = d.querySelector(".slider-btns > a.next"),
        $prevBtn = d.querySelector(".slider-btns > a.prev"),
        $slides = d.querySelectorAll(".slider-slide");
    let currentIndex = 0;

   

    d.addEventListener("click", (e) => {

        console.log(`e.target:  ${e.target}`);
        console.log(`next:  ${$nextBtn}`);
        console.log(`prev:  ${$prevBtn}`);
        console.log(`slides: ${$slides}`);
        
        console.log(currentIndex);

        // Si el objeto que originó el evento "e.target" es igual a algún botón entonces
        if (e.target === $prevBtn) {
            e.preventDefault();
            console.log(`currentIndex_prev_1 :  ${currentIndex}`);
            // Removemos la clase active del slide actual
            $slides[currentIndex].classList.remove("active");//.remove("active");
            // Decrementamos el índice
            currentIndex--;

            console.log(`currentIndex_prev_2 :  ${currentIndex}`);
            // Si el índice es menor a 0, lo establecemos al último slide
            if (currentIndex < 0) {
                currentIndex = $slides.length - 1;
            }

            console.log(`currentIndex_prev_3 :  ${currentIndex}`);
            // Añadimos la clase active al nuevo slide
            $slides[currentIndex].classList.add("active");
        }

        if (e.target === $nextBtn) {
            e.preventDefault();

            // Removemos la clase active del slide actual
            $slides[currentIndex].classList.remove("active");
            // Incrementamos el índice
            currentIndex++;
            // Si el índice es mayor o igual a la longitud de slides, lo establecemos al primer slide
            if (currentIndex >= $slides.length) {
                currentIndex = 0;
            }
            // Añadimos la clase active al nuevo slide
            $slides[currentIndex].classList.add("active");
        }
    });
}

