const button = document.querySelector("button");
const header = document.querySelector("header");


// hamburgertje
button.onclick = toggleMenu;

function toggleMenu (){
  header.classList.toggle("showMenu")
}
