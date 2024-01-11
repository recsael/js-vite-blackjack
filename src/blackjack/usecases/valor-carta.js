
/**
 * Esta funcion valora el valor de una carta
 * @param {String} carta Ejemplo: '2D'  
 * @returns {Number} Ejemplo: '2D' = 2 Puntos
 */

export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}