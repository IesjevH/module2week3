const verzendButton = document.getElementById("verzend");
const voornaam = document.getElementById("voornaam");
const tussenv = document.getElementById("tussenv");
const achternaam = document.getElementById("achternaam");
const straat = document.getElementById("straat");
const huisnummer = document.getElementById("huisnummer");
const toev = document.getElementById("toev");
const postcode = document.getElementById("postcode");
const woonplaats = document.getElementById("woonplaats");
const emailadres = document.getElementById("emailadres");
const Rekeningnummer = document.getElementById("Rekeningnummer");

verzendButton.addEventListener("click", storeItems);

console.log(verzendButton)

function storeItems(){
    localStorage.setItem("voornaam",voornaam.value)
    localStorage.setItem("tussenv",tussenv.value)
    localStorage.setItem("achternaam",achternaam.value)
    localStorage.setItem("straat",straat.value)
    localStorage.setItem("huisnummer",huisnummer.value)
    localStorage.setItem("toev",toev.value)
    localStorage.setItem("postcode",postcode.value)
    localStorage.setItem("woonplaats",woonplaats.value)
    localStorage.setItem("emailadres",emailadres.value)
    localStorage.setItem("Rekeningnummer",Rekeningnummer.value)
}
