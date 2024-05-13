
function cadenaTexto(dato) {
    if (typeof dato !== 'string') {
        throw new TypeError('El argumento proporcionado debe ser una cadena de texto');
    }
    return dato;
}

export const error = {
    cadenaTexto
};