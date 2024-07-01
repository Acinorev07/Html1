const d = document;

export default function consumo_api_xhr() {
    const xhr = new XMLHttpRequest(),
        $xhr = d.getElementById("xhr"),
        $fragment = d.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        // console.log(xhr);
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            console.log(json);
            json.forEach(el => {
                const $li = d.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();  // Asegúrate de enviar la solicitud
}
