const credits =0
if (credits > 0){
    console.log("let's play")
} else {
    console.log("Sorry you have no credits")
}

// difference between false and truthy values
// falsy values include


//They signalize emptiness
//false
//0
//""
//undefined - Used by js to signal emptiness
//NaN
//null - used by developed to signal emptiness

//EXAMPLE

let currentviewers = null
currentviewers = ["jane", "john"]
currentviewers = null

if (currentviewers){
    console.log("We have viewers waiting for your")
}


// checking if a value is a truthy or a falsy

let truthyorFalsy = Boolean("Abraham")
let truthyorFalsy1 = Boolean("")
let truthyorFalsy2 = Boolean(null)
console.log(truthyorFalsy)
console.log(truthyorFalsy1)
console.log(truthyorFalsy2)