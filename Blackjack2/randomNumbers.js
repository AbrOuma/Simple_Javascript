let player1 = 102
let player2 = 121

function getFastestPlayer(){
    if(player1 < player2){
        return player1
    }
    else if(player2 < player1){
        return player2
    }
    else{
        return player1
    }
}
let fastestRace = getFastestPlayer()
console.log(fastestRace)

function totalRacetime(){
    let totaltime = player1 + player2
    return totaltime
}

let racetime = totalRacetime()
console.log(racetime)


//RANDOM NUMBERS

let randomNumber = Math.random()
//Math.random generates a random number between 0 and 1 (not inclusive of both numbers)
console.log(randomNumber)

//Create a dice function*6

let randomN = Math.random()*6
//generate a random number between 0 and 5.999999
console.log(randomN)

//floating number with random Numbers

let floorNumber = Math.floor(3.74342)
console.log(floorNumber)

// use Math random and Math floor to generate dice values

let randomNo = Math.floor(Math.random()*6)
//outputs range from 0-5 integers
console.log(randomNo)

// completing the dice function (1-6)
let randomNos = Math.floor(Math.random()*6)+1
//outputs range from 1-6 integers
console.log(randomNos)


function randomNumbers(){
    let diceNo = Math.floor(Math.random()*6 + 1)
    return diceNo
}
console.log(randomNumbers())
