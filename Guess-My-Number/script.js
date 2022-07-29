'use strict'


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20
let highscore = 0

document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value)
    console.log(guessNumber, typeof guessNumber)

    if (!guessNumber) {
        document.querySelector('.message').textContent = 'No number!'
    }

    else if (guessNumber === secretNumber) {
        console.log(document.querySelector('.message').textContent = "Correct Number!")
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.number').style.width = "30rem"

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore

        }
    }

    else if (guessNumber !== secretNumber) {
        if (score > 1) {
            console.log(document.querySelector('.message').textContent = guessNumber > secretNumber ? "To High!" : "To Low!")
            score -= 1
            document.querySelector('.score').textContent = score
            document.querySelector('body').style.backgroundColor = "#8B0000"
        }
        else {
            console.log(document.querySelector('.message').textContent = "You lost the game!")
            document.querySelector('.score').textContent = 0
        }
    }



    // else if (guessNumber > secretNumber) {
    //     if (score > 1) {
    //         console.log(document.querySelector('.message').textContent = "To High!")
    //         score -= 1
    //         document.querySelector('.score').textContent = score
    //         document.querySelector('body').style.backgroundColor = "#8B0000"
    //     }
    //     else {
    //         console.log(document.querySelector('.message').textContent = "You lost the game!")
    //         document.querySelector('.score').textContent = 0
    //     }
    // }

    // else {
    //     if (score > 1) {
    //         console.log(document.querySelector('.message').textContent = "To Low!")
    //         score -= 1
    //         document.querySelector('.score').textContent = score
    //         document.querySelector('body').style.backgroundColor = "#8B0000"
    //     }
    //     else {
    //         console.log(document.querySelector('.message').textContent = "You lost the game!")
    //         document.querySelector('.score').textContent = 0
    //     }
    // }

})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})



