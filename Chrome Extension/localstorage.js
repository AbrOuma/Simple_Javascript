// save a key value pair in local storage
// refresh the page and the value and log it out to the console
//clear the localStorage

// localStorage.setItem("name", "Abraham")
// console.log
// let storedItem = localStorage.getItem("name")
// console.log(storedItem)
// localStorage.clear()


//storage arrays in the localStorage
//convert string to list or array
let myLeads = `["www.abrouma.com"]`
myLeads = JSON.parse(myLeads)
myLeads.push("findhousekenya.com")
console.log(myLeads)

//convert list/array to strings

let myLeads1 = ['abrouma.com', 'findhousekenya.com', 'ecomm.com']

myLeads1 = JSON.stringify(myLeads1)
console.log(typeof myLeads1)


// Example for the back and forth coversion between strings and arrays


let myLinks =  `["mubaba.com"]`
//turn the myLinks string into array
//push a value to the array
//turn the array into a string
//console.log the string using typeof to verify the data type

myLinks = JSON.parse(myLinks)
myLinks.push('rutotaxin.com')
console.log(myLinks)

myLinks1 = JSON.stringify(myLinks)
console.log(typeof myLinks1)

// saving myLinks array to the localStorage

//getting myLinks from the localStorage