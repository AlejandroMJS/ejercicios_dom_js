/*
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/



 const btnToClick = document.getElementById("btnToClick")

 btnToClick.addEventListener("click", function(evento) {
    console.log("Este es el evento al hacer click", evento)
 })


 const focusInput = document.querySelector(".focus")

 focusInput.addEventListener("focus", function() {

    console.log("El valor del input es:", this.value)
 })


 focusInput.addEventListener("input", function(input) {

    console.log("El valor del input es:", input.target.value)
 })



 /*
 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
*/

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];


  const ul = document.createElement("ul")
  document.body.appendChild(ul)

  albums.forEach(album =>{

    const liGroup = document.createElement("li")
    liGroup.textContent = album
    ul.appendChild(liGroup)

    console.log(liGroup)


  })


