const {fizzBuzz} = require('../src/fizzBuzz');

// test('No es un numero', () => {
//     const cadena='hola';
//     expect(fizzBuzz(cadena)).toBe("No es un numero");//toBe comprueba el return de la function
// });

test('Es un numero no divisible', () => {
    const numero=7;
    expect(fizzBuzz(numero)).toBe(numero);
});
test('Es un Fizz numero divisible por 3', () => {
    const numero=3;
    expect(fizzBuzz(numero)).toBe('Fizz');
});
test('Es un Buzz numero divisible 5', () => {
    const numero=20;
    expect(fizzBuzz(numero)).toBe('Buzz');
});
test('Es un FizzBuzz numero divisible por 3 y 5', () => {
    const numero=60;
    expect(fizzBuzz(numero)).toBe('FizzBuzz');
});
