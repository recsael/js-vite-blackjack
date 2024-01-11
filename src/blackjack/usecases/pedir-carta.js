

/**
 * @param {Array<String>} deck
 * @returns {String} Ejemplo: '2C' = 2 Puntos
 */
// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}