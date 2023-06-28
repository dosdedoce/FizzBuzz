// export const fizzBuzz=(numero) => { //? NO usar en JavaScript en test falla
const fizzBuzz=(numero) => { //# Usar para los test
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero;
    }
}

//! Para los test con Jest
module.exports = { fizzBuzz }; //% Usar parar los test
