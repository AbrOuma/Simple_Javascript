// let count = 0
// let name = " Abraham"
// console.log(count + name)

// let age = 20
// console.log(age*count)

// count +=1
// console.log(count)
// count +=1
// console.log(count)
// console.log(count)

//STRINGS; NUMBERS; FLOAT

// let message = "Hello Good morning"
// let name = "Abraham"
// console.log(`${message} ${name}. It is good to see you today`)

// let age = 20
// let teeth = 28
// console.log(age+teeth)
// console.log("Abraham" + 256)


let count = 0
countEl = document.getElementById("count")
function countup() {
    count +=1
    countEl.innerText = count
}


function countdown() {
    count -=1
    countEl.innerText = count
}
function reset(){
    count = 0
    countEl.innerHTML = count
}


//operation of the save function
// create a variable tha contains both the count and the dash separator
// Render the variable in the saveEl using innerText
// Make sure not to delete the current set elements


saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + ' ; '
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
    console.log(count)
}