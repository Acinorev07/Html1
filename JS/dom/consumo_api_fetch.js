const d = document;

export default function apiFetch(){

    const $fetch = d.getElementById("fetch"),
    $fragment = d.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp)=>{
        return resp.ok ? resp.json(): Promise.reject(resp);
    })
    .then(json=>{
        json.forEach((el)=>{
            const $li = d.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;

            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch((err)=>{
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(()=> console.log("Esto se ejecutara independientemente del resultado de la promesa fetch"));

}