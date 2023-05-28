// Create two variables, firstcard and secondcard
//set the value of the cards to a random number between 2-11
//create a variable, sum, and set it to the sum of the two cards



// let firstcard  = 11
let firstcard  = getRandomCard()
let secondcard = getRandomCard()
let sum = firstcard+secondcard

// an array of cards
let cards = [firstcard, secondcard] //array

let hasblackjack = false
let isalive = true
let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum")
// let sumEl = document.querySelector("#sum")
let cardEl = document.getElementById("card-el")

let player = {
    playerName : "Abraham",
    balance: 245,
    newCardCount:2
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = `${player.playerName}: $${player.balance}`




//generate random numbers for the Blackjack cards
// Modifications on the functioning of the function are based on the following instructions
// if the random number returns 1 (A), it has to be replaced with 11
//if the random number function returns 11-13, they will be replaced with 10 for teh King, Queen and that other card
function getRandomCard(){
    let cardNo = Math.floor(Math.random()*13 + 1) // returns a number between 1-13
    if (cardNo > 10){
        return 10
    }
    else if(cardNo === 1){
        return 11
    }
    else{
        return cardNo
    }
}










//start game function
function startGame(){
    renderGame()
}
function renderGame(){
    sumEl.textContent = "Sum: " + sum
    //render out the first and second cards
    // cardEl.textContent = "Cards: " + firstcard+ ";" +secondcard
    // cardEl.textContent = "Cards: " + cards[0] + ";" + cards[1]
    cardEl.textContent = "Cards: "

//using for loop to render the cards to the screen
    for (let i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ";"
    }

    //render all the cards ---> this requires the use of arrays
    if (sum < 21){
        message = "You can draw a new card as you're still in the game"
    }
    else if(sum === 21){
        message = "Wow!! You've got a Blackjack"
        hasblackjack = true
    }
    else {
        message = "Sorry you are out of the game"
        isalive = false
    }
    messageEl.textContent = message
}

function newCard(){
//create a card variable and hard code the values (2-11)
//add the new card to the sum variables
//call startGame
    if (isalive && !hasblackjack){
        console.log("New Card")
        let newcard = getRandomCard()
        sum += newcard
        //push the newcard to the cards array
        cards.push(newcard)
        console.log(cards)
        renderGame()
    }

}





// //Can you enter a night club

// let age = 21
// if (age < 21){
//     console.log("Sorry you cannot enter here")
// }
// else{
//     console.log("You are very lucky; come in")
// }


// NOTES
//the use of booleans
//the use of if(){}... else is () {} and else{} statements
// using the empty string variable assignment for message elimates repetition in the use of console log. It also employs the use of assignment