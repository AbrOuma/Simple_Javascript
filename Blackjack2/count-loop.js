//count to ten
//we need to specifiy

//where to start counting
//where to finish
//the step size of teh count

// for (let count = 0; count < 100; count +=20){
//     console.log(count)
// }

// //LOOP
// for (age = 2; age<120; age+=10){
//     console.log(age)
// }

// for (i=20; i<=1000; i+=100){
//     console.log(i)
// }

let experience = ['inter at Siemens', 'intern at REREC', 'Intern at Azubi']
for (i = 0; i <= experience.length; i++){
    console.log(experience[i])
}


let cards = [5,6,7,1,8,0,1,9,11,8,3,6,8,2,4,5]
for(i=0; i<cards.length; i+=1){
    console.log(cards[i])
}

let sentence = ["Hello ", "my ", "name ", "is ", "Ouma "]
greetingEl = document.getElementById("greeting-el")
for (let i=0; i<sentence.length; i++){
    greetingEl.textContent += sentence[i] + " "
}
