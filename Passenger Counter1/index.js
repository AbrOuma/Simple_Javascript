//document.getElementById("count-el").innerText = 3

// let count = 0
// count = count + 1
// console.log(count)
// count = count + 50
// console.log(count)

// FUNCTIONS
//Adding the incremental button responsive using js
//initialize the count as 0
//listen to the clicks of the count button
//increment the value count-el on click

// function increment() {
//     console.log("The button was clicked")
// }


// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// // BMI Calculator

// function bmi(){
//     let age = 23
//     let weight = 68
//     let height = 1.81

//     let bmi = weight / (height*height)
//     console.log(bmi)
// }

// bmi()

// let lap1 = 34
// let lap2 = 25
// let lap3 = 27

// function laptime(){
//     console.log(lap1+lap2+lap3)
// }
// laptime()

// LAP COUNTER that INCREMENTS

// let lapsCompleted = 0
// function lapCounter(){
//     lapsCompleted = lapsCompleted + 1
// }
// lapCounter()
// lapCounter()
// lapCounter()
// console.log(lapsCompleted)

// continuation of the people counter

// All these are happening in the console
// Transfer then to the counter

let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function decrement(){
    count = count - 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    console.log(count)
}
save()


// Create a funtion save() that logs out the count when it is called


// STRINGS
// let name = 'Abraham'
// let message = "Hello, You have a new notification"
// let notification = `${name} ${message}`

// notification += "🤨"
// console.log (notification)





