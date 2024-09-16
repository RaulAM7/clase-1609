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


/*

Usando funciones dentro de otras funciones

*/


function sumar2 (num1, num2, resultFin){

    console.log('Funcion sumar2 iniciada: ')

    return resultFin(num1 + num2)
}


function logDone (placeholder) {

    console.log('Terminado! El resultado es ' + placeholder)
}



function raiz (placeholder) {

    console.log('Terminado! El resultado es ' + placeholder*placeholder)
}

sumar2(5, 5, logDone)
sumar2(5, 5, raiz)



/* Funciones Anonimas

*/


/* Funcion que recorre un array de nombres y evalua si la primera letra de cada nombre es una letra determinada 
*/

/*
let people = ['raul', 'joseluis', 'marta', 'pepe']

let primeraLetraArrays = function() {

    for (let i = 0 ; i < people.length -1 ; i++) {

        //console.log(people.length)

        if (people[i][0] === "r") {

            return console.log('Primera letra es r, palabra ' + people[i])
            
        } else {

            return console.log(people[i])
        }
    }
}

primeraLetraArrays()
*/



/*

4.- Function Scopes: Global vs local

*/


// Ejemplos para practicar y ver bien el scope de las variables

const myName = 'Raul' // Esta variable es de scope global al estar definida fuera de un bloque

function showSurname () {

    const surname = 'Artiles'
    console.log(surname) // Esta variable es de alcance de bloque, solo existe dentro de la funcion showSurname
}

//console.log(surname)
showSurname()


// SACANDO VARIALBES LOCALES PARA UN NIVEL JERARQUICO SUPERIOR PARA PODER ACCEDER A ELLAS 

const nomnbre = 'Raul'

function muestraApellido () {

    const apellido = 'Mendoza'

    //console.log('Mi edad es: ' + edad)  ---> No puede entrar a la variable edad porque no esta definida, no puede entrar al bloque de edad

    function muestraEdad () {

        const edad = 80 
        //console.log('Mi edad es: ' + edad)

        console.log('Mi apellido es: ' + apellido)
        
        return edad
    
    }   
    
    let age = muestraEdad()  // Llamando a la funcion muestraEdad () y almacenando su return en esta variable podemos trabajar con ella
    console.log('Mi edad es: ' + age)
}

muestraApellido()


// QUIZ FUNCTION SCOPES 


var globalPar = 'I am global'

function declarationBar (string) {

    let  localBar = "blabla"
}


function checkScope () {

    var globalVar = 'I am global'
    console.log(globalVar)    // GlobalPar y Global Var si se pueden acceder aqui, localBar no

}

checkScope()


/* VARIABLE SHADOWING -> Cuando declaramos una variable con un nombre igual que otra variable que tengamos declarada y definida previamente


*/


var a = 1
var b = 2

function innerBlock () {

    a = 4
    var b = 3

}

innerBlock()
console.log(a)  // Esto da 4, aunque el bloque de codigo de la funcion no se llame, como es de ambito global si que se lee esta nueva redefinición
console.log(b)  // Esto da 2, dos lineas atras b tiene un valor de retorno de 3 pero porque se trata de una variable "b" de scope local redeclarada dentro de la función


/* BUSQUEDA DE VARIABLE DECLARATION TRAS REFERENCE -> JS LO HACEN BUSCANDO DEL SCOPE DE LA REFERENCIA Y LUEGO VA SALTANDO A LOS SCOPES PADRES 


*/


var a = 1

function inner() {
    console.log('Llamada 1 inner')

    // 4º ¿Hay alguna variable "a" en este bloque?
    function inner1() {
        console.log('Llamada 1 inner1')

        // 3º ¿Hay alguna variable "a" en este bloque?
        function inner2() {
            console.log('Llamada 1 inner2')

            // 2º ¿Hay alguna variable "a" en este bloque?
            function inner3() {
                console.log('Llamada 1 inner3')

                // 1º Hay alguna variable "a" en este bloque?
                console.log(a)
            }
            inner3()
            console.log('Llamada 2 inner3')
        }
        inner2()
        console.log('Llamada 2 inner2')

    }
    inner1()
    console.log('Llamada 2 inner1')
}
inner()

