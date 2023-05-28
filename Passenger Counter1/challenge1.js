//output first and last name in the console
let firstName = "Abraham"
let lastName= "Ouma"
let fullname = `${firstName} ${lastName}`
console.log(fullname)

//a function that output greetings in the console

let name = "Linda"
let greeting = "Hello there"
function greetings(){
    console.log(`${greeting} ${name}!`)
}

greetings()


//Incrementing and decrementing skills

let mypoints = 3

function add3points(){
    mypoints +=3
    console.log(mypoints)
}

add3points()
add3points()
add3points()
function remove1point(){
    mypoints -=1
    console.log(mypoints)
}
remove1point()
remove1point()