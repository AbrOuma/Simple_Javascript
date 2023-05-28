let myLeads = []
let ulEl = document.getElementById("ul-el")
const inputEl =document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//get and display the linkedIn url in the console
//use localStorage to get and display the tabs in the console
tabBtn = document.getElementById("tab-btn")
tabBtn.addEventListener("click", function(){
    // console.log(tabs[0].url)
    //get url of the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //since only one tab should be active and in the current window at once
        //the return variable should only have ine entry
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })




    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})




function render(leads){
    let listItems = ""
    for (i=0; i<leads.length; i++){
        listItems += `
                        <li>
                            <a target = '_blank' href='${leads[i]}'> ${leads[i]}
                            </a>
                        </li>
                    `
    }
    ulEl.innerHTML = listItems
}

let deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()  //clear the localStorage
    myLeads = [] //clear the leads
    render(myLeads) //clears the DOM
})


inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

