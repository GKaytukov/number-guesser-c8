/*
create a program that guess a number from 1 to 10 
then ask us to guess that number.
if it is higher say "too high" and ask again.
if it is lower say "too low" and ask again.
if it is the right number say "congratulations" and exit. 

*/
// import readline from "readline-sync"

// let userGuessesRight = false

// //while(true){
// //guess a number from 1-10 

// let NumberChosen = Math.ceil(Math.random() * 10)
//console.log(NumberChosen)
// while (!userGuessesRight) {
// let guess = readline.question("What is your guess?")
// if (guess == NumberChosen)
//     {
//         console.log("Congratulations")
//         userGuessesRight = true
//     }

// //console.log(guess)
// }

// while (!userGuessedRight) {
//      console.log("What is your guess?")
// }

//if it is higher say "too high" and ask again.
//if it is lower say "too low" and ask again.

import readline from "readline-sync"

let userGuessesRight = false

//while(true){
//guess a number from 1-10 

let NumberChosen = Math.ceil(Math.random() * 10)
while (!userGuessesRight) {
    let guess = readline.question("What is your guess?")
    if (guess == NumberChosen) { //it is equal 

        console.log("Congratulations")
        userGuessesRight = true //get out
    }
    if (guess > NumberChosen) {
        console.log("Too High! Try Again")
        //userGuessesRight = true
    }
    if (guess < NumberChosen) {
        console.log("Too Low! Try Again")
        //userGuessesRight = true
    }
}