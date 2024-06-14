const d = document;

export default function draw(btn, selector){

    const getWinner = (selector) => {
        //Traemos todos los selectores que coincidan con el selector
        const $players = document.querySelectorAll(selector);
      
        // Verificar si se encontraron elementos
        if ($players.length === 0) {
          console.error("No se encontraron elementos con el selector proporcionado.");
          return null;
        }
      
        const random = Math.floor(Math.random() * $players.length);
        const winner = $players[random];
      
        // Verificar si el elemento ganador es válido
        if (!winner) {
          console.error("No se pudo seleccionar un ganador.");
          return null;
        }
      
        return `El ganador es: ${winner.textContent}`;
      };

      d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            let result = getWinner(selector)

            alert(result);
        }
      });
}