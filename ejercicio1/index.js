/*
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con 
	la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
*/

const showMe = document.querySelector(".showme")
console.log(showMe)

const h1 = document.querySelector("#pillado")
console.log(h1)

const p = document.querySelectorAll("p")
console.log(p)

const pokemon = document.querySelectorAll(".pokemon")
console.log(pokemon)

const testMe = document.querySelectorAll(`[data-function="testMe"]`)
console.log(testMe)

for (let i = 0; i < testMe.length; i++) {

    if (i === 2) {
        console.log(testMe[i])
        break
    }


}