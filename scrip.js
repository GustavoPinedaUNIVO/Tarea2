function obtenerCuadradosDigitos(numero) {
    return Array.from(String(numero), digit => digit * digit);
}

function esNumero(valor) {
    return !Number.isNaN(Number(valor));
}

const numero = prompt('Ingresa un número:');
if (esNumero(numero)) {
    const cuadrados = obtenerCuadradosDigitos(numero);
    console.log('Los cuadrados de los digitos son:', cuadrados);
} else {
    console.log('Este no es un número válido, por favor intenta de nuevo.');
}


