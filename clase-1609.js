/*

CLASE 16-09

-----Table of Contents

0.- Declaración de funciones
1.- 2 formas de declarar funciones: Function Declaration pure vs Function expresions
2.- Funcion constructor -> FALTA

3.- Common Use Cases


4.- Function Scopes


5.- Shadowing


6.- Hoisting

*/

/* 0.- Declaración de funciones

Con la sintaxis que ya sabemos

*/

function sum1 (num1, num2) {

    let resultado1 = num1 + num2
    return console.log(resultado1)
}
sum1(5, 5)


//1.- 2 formas de declarar funciones: Function Declaration pure vs Function expresions

function mult1 (num1, num2) {

    let resultado2 = num1 * num2
    return resultado2
}

console.log('Esta es la funcion multi1 declarada: ' + mult1(5, 5))



let multiplicacion = function (num1, num2) {

    let resultado2A = num1 * num2
    return resultado2A
}

console.log('Esta es la funcion multi pero en forma de expresion: ' + multiplicacion(5, 5))


//Ejemplo de addOne

function addONe (num) {

    return num ++
}

console.log('Funcion addOne de forma declarada: ' + addONe(2))


let addUno = function (num) {

    return num++
}

console.log('Esta es la función añadir uno de forma expresion: ' + addUno(8))


/* Funcion de countDown desde n hasta 0

si es 0
    para
si no es 0
    print n
    return n--
*/
 
function countDown (num) {

    if (num === 0) {

        return console.log('Cuenta atrás declarada: ' + num)
    
    } else {

        console.log('Cuenta atrás declarada: ' + num)

        return countDown(num-1)

    }
}

countDown(5)

let cuentAtras = function (num) {

    if (num === 0) {

        return console.log('Cuenta atrás expresion: ' + num)
    
    } else {

        console.log('Cuenta atrás expresion: ' + num)

        return cuentAtras(num -1)
    }
}

cuentAtras(5)