// const d = document, n = navigator;

// export default function getGeolocation(id) {
//     // Capturamos en una variable el id donde se mostrará toda la información
//     const $id = d.getElementById(id);

//     // Opciones para la geolocalización
//     const options = {
//         enableHighAccuracy: true,
//         timeout: 10000, // Aumenta el tiempo de espera para obtener una señal más precisa
//         maximumAge: 0
//     }

//     const success = (position) => {
//         // En caso de tener éxito manda una lista con la info del GPS y un enlace a Google Maps
//         let coords = position.coords;

//         $id.innerHTML = `
//         <p>Tu posición actual es:</p>
//         <ul>
//             <li>Latitud: <b>${coords.latitude}</b></li>
//             <li>Longitud: <b>${coords.longitude}</b></li>
//             <li>Precisión: <b>${coords.accuracy}</b> metros</li>
//         </ul>
//         <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
//         `;
//     }

//     const error = (err) => {
//         $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
//     }

//     // Llamada a la función de geolocalización
//     n.geolocation.getCurrentPosition(success, error, options);
// }

const d = document, n = navigator;

export default function getGeolocation(id) {
    const $id = d.getElementById(id);

    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };

    let bestPosition = null;

    const success = (position) => {
        if (!bestPosition || position.coords.accuracy < bestPosition.coords.accuracy) {
            bestPosition = position;
        }

        // Actualiza el contenido con la mejor posición hasta el momento
        updateDisplay(bestPosition);

        // Si la precisión es suficiente, deja de intentar obtener nuevas posiciones
        if (bestPosition.coords.accuracy <= 20) {
            n.geolocation.clearWatch(watchId);
        }
    };

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    };

    const updateDisplay = (position) => {
        let coords = position.coords;
        $id.innerHTML = `
            <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b> metros</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    };

    // Usa watchPosition para intentar obtener varias lecturas y encontrar la más precisa
    const watchId = n.geolocation.watchPosition(success, error, options);
}