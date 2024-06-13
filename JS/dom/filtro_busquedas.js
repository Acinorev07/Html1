 const d = document;

 export default function searchFilters(input, selector){

    d.addEventListener("keyup",(e)=>{
        //Si el objeto que origino el evento, su selector coincide con lo que viene en la variable input, entonces
        if(e.target.matches(input)){

            if(e.key==="Escape") e.target.value = "";

            d.querySelectorAll(selector).forEach(el=>{
                
                el.textContent.toLowerCase().includes(e.target.value)?el.classList.remove("filter"):el.classList.add("filter")
            });
        }
    });
 }