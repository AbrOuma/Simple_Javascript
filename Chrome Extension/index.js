// The use of the on-click in html has been replace by the use of the eventlistener


//Create two varibles empty array and a myLeads variable

let myLeads = ['abrouma.com','findhousekenya', 'skyblock', 'westernhub']
let ulEl = document.getElementById("ul-el")


const inputEl =document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
//pushing myLead to the array when the input button is clicked
// the value being pushed shpould be what the user had input before clicking the button
    myLeads.push(inputEl.value)
    console.log(myLeads)
    console.log("Content have been pushed to the array")
})

// logging out items in the myLeads array
let listItems = ""
for (i=0; i<myLeads.length; i++){
    console.log(myLeads[i])
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    listItems += "<li>" + myLeads[i] + "</li>"
    console.log(ulEl.textContent)
}

ulEl.innerHTML = listItems

















// use the document.createElement
//create element
//sey text content
//append to ul

// for (i=0; i<myLeads.length; i++){
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)

// }