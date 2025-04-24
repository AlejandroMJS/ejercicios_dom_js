/*
2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here
    */

    const primerDiv = document.createElement("div")
    document.body.appendChild(primerDiv)
    const primerParrafo = document.createElement(`p`)
    primerDiv.appendChild(primerParrafo)
    //console.log(primerDiv)




    const secondDiv = document.createElement('div')
    document.body.appendChild(secondDiv)
    if (secondDiv) {
      for (let i = 0; i < 6; i++) {
        const segundoParrafo = document.createElement('p')
        segundoParrafo.textContent = `Este es el párrafo número ${i + 1}`
        secondDiv.appendChild(segundoParrafo)
      }
    }  
    //console.log(secondDiv)  


    const tercerParrafo = document.createElement("p")
    tercerParrafo.textContent = "Soy dinámico!"
    //console.log(tercerParrafo)


    const h2 = document.querySelector(".fn-insert-here")
    h2.textContent = "Wubba Lubba dub dub"
    //console.log(h2)




    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
    const listaUl = document.createElement('ul')

    apps.forEach(app => {
    const elementoLi = document.createElement('li')
    elementoLi.textContent = app
    listaUl.appendChild(elementoLi)
    })

    document.body.appendChild(listaUl)
    //console.log(listaUl)

    

    const elementsToRemove = document.querySelectorAll(".fn-remove-me")
    elementsToRemove.forEach(element => {
        element.remove()
    })



    const cuartoParrafo = document.createElement("p")
    cuartoParrafo.textContent = "Voy en medio!"
    document.body.insertBefore(cuartoParrafo, secondDiv)
    //console.log(cuartoParrafo)



   const quintoParrafo = document.createElement("p")
   quintoParrafo.textContent = 'Voy dentro!'
   const allDivs = document.querySelectorAll(".fn-insert-here")

   allDivs.forEach(div => {
    div.appendChild(quintoParrafo.cloneNode(true))

   })
   
