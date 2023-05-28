const welcomeEl = document.getElementById("welcome-el")

function greetUser(time, name){
    welcomeEl.textContent = `Good ${time} Welcome back ${name}`
}
greetUser("morning","Ouma")
console.log(name)

// arguments and parameters
// greetUser is the parameter
// morning and Ouma are arguments
