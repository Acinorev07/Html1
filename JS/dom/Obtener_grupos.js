


//import * as XLSX from 'xlsx';

const d = document;


export default function gruposFacebook() {
    // Función para obtener los datos guardados en localStorage
    const obtenerDatosLocalStorage = () => {
        const datos = localStorage.getItem('gruposFacebook');
        if (datos) {
            return JSON.parse(datos);
        } else {
            console.error("No se encontraron datos en localStorage.");
            return null;
        }

        
    };

    // Función para exportar a Excel
    // const exportarAExcel = (data) => {
    //     const wb = XLSX.utils.book_new();

    //     const ws_data = [["Nombre del Grupo", "Link del Grupo"], ...data];
    //     const ws = XLSX.utils.aoa_to_sheet(ws_data);

    //     XLSX.utils.book_append_sheet(wb, ws, "Grupos");

    //     XLSX.writeFile(wb, "grupos_facebook.xlsx");
    // };

    // Evento para el botón de exportar
    document.getElementById("exportar-excel").addEventListener("click", () => {
        const resultado = obtenerDatosLocalStorage();

        // if (resultado) {
        //     const data = resultado.nombres.map((nombre, index) => [nombre, resultado.links[index]]);
        //     exportarAExcel(data);
        // }

        console.log(resultado)
    });
}
