const verzendButton = document.getElementById("verzend");
const woonplaats = document.getElementById("woonplaats");
const voornaam = document.getElementById("voornaam");
const Tussenv = document.getElementById("Tussenv");
verzendButton.addEventListener("click", storeItems);

console.log(verzendButton)

function storeItems(){
    localStorage.setItem("woonplaats",woonplaats.value)
    localStorage.setItem("voornaam",voornaam.value)
    localStorage.setItem("Tussenv",Tussenv.value)
}
