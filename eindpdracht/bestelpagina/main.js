const verzendButton = document.getElementById("verzend");
const woonplaats = document.getElementById("woonplaats");
const voornaam = document.getElementById("voornaam");
const tussenv = document.getElementById("tussenv");
verzendButton.addEventListener("click", storeItems);

console.log(verzendButton)

function storeItems(){
    localStorage.setItem("woonplaats",woonplaats.value)
    localStorage.setItem("voornaam",voornaam.value)
    localStorage.setItem("tussenv",tussenv.value)
}
