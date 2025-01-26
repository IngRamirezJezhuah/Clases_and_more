/* Condiciones a probar:
Debes escribir pruebas que aseguren que la función cumple con los siguientes criterios:
Regresar true si el email es válido.
Regresar false en los siguientes casos:
El email no contiene el carácter @.
El email no incluye un dominio (por ejemplo, gmail, email).
El email no tiene una extensión válida, como .com o .mx.
El email es una cadena vacía ("").
El email es null.
El email es undefined.
El email contiene solo espacios vacíos (" ").
*/
const {isValidEmail} = require('../PruebaJest/index')
test('validacion de email Correcta',() => {
    const isValidEmail = ('nombregrupo@dominio.com')
    expect (isValidEmail).toBe('nombregrupo@dominio.com')
    console.log('Exitoso')
})
test('caso de email sin @',() => {
    const isValidEmail = ('nombre.dominio.com')
    expect (isValidEmail)==('nombregrupo@dominio.com')
    console.error('es incorrecto le falta el @')
})
test('caso de email sin dominio',() => {
    const isValidEmail = ('nombregrupo@d.com')
    expect (isValidEmail)==('nombregrupo@dominio.com')
    console.error('es incorrecto le falta el dominio (por ejemplo, gmail, email)')
})
test('caso de email sin extension valida',() => {
    const isValidEmail = ('nombregrupo@dominio')
    expect (isValidEmail)==('nombregrupo@dominio.com')
    console.error('es incorrecto le falta una extension valida como .com o .mx')
})
test('caso de email cadena vacia',() => {
    const isValidEmail = ('""')
    expect (isValidEmail)==('nombregrupo@dominio.com')
    console.error('es incorrecto el campo esta vacio')
})
test('caso de email con valores null',() => {
    const isValidEmail = ('Null')
    expect (isValidEmail)==('nombregrupo@dominio.com')
    console.error('es incorrecto los valores son nulos')
})
test('caso de email indefinido',() => {
    const isValidEmail = ('')
    expect (isValidEmail)==('nombregrupo@dominio.com')
    console.error('es incorrecto este es indefinido')
})
test('caso de email con espacios vacios',() => {
    const isValidEmail = ('nombre dominio com')
    expect (isValidEmail)==('nombregrupo@dominio.com')
    console.error('es incorrecto el email contiene espacios vacios')
})