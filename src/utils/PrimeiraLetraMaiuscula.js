/*
    Transformar a primeira letra da palavra em maiuscula.
    Ex: ricardo => Ricardo
*/
const  PrimeiraLetraMaiuscula = string => {
    return string[0].toUpperCase() + string.slice(1);
}

export default PrimeiraLetraMaiuscula;