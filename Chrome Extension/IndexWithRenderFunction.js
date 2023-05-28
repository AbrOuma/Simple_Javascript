let myLeads = []
let ulEl = document.getElementById("ul-el")
const inputEl =document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

    // // localStorage.setItem("myLeads", "www.abrouma.com")
    // let storedItem = localStorage.getItem("myLeads")
    // console.log(storedItem)

    // localStorage.clear()

// using truthy or falsy to call the render function that displays files from the localStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
//check if the leadFromLocalStorage is truthy
//if no, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderloads()
}

console.log(leadsFromLocalStorage)

//IMPLEMENTATION OF THE DELETE BUTTON
//listen to a double click on the button
//when clicked clear the localStorage, myLEads and the DOM
let deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function(){
    console.log("You double clicked the button")
    localStorage.clear()  //clear the localStorage
    myLeads = [] //clear the leads
    renderloads() //clears the DOM
})


inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        //clear the input field
        inputEl.value = ""
        //call the renderloads() function
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderloads()

        //verify the localStorage aspect works
        console.log(localStorage.getItem("myLeads"))
    })
    
function renderloads(){
    let listItems = ""
    for (i=0; i<myLeads.length; i++){
        console.log(myLeads[i])
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"


        // listItems += "<li><a target = '_blank' href='"+ myLeads[i]+ "'>"+ myLeads[i]+ "</a></li>"

        //the use of template strings
        listItems += `
                        <li>
                            <a target = '_blank' href='${myLeads[i]}'> ${myLeads[i]}
                            </a>
                        </li>
                    `
        console.log(ulEl.textContent)
    }
    ulEl.innerHTML = listItems
}
