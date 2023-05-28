// use .innerHTML to render a BUy button in a the div of a html container
const buttonEl = document.getElementById("container")
buttonEl.innerHTML = "<button onclick='buy()'>BUY!</button>"

function buy(){
    buttonEl.innerHTML += "<p> Thank You for Shopping with us </p>"
}
