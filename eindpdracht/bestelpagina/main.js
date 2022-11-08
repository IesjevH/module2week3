const verzendButton = document.getElementById("verzend");
const woonplaats = document.getElementById("woonplaats");
verzendButton.addEventListener("click", storeItems);

console.log(verzendButton)

function storeItems(){
    localStorage.setItem("woonplaats",woonplaats.value)
}
