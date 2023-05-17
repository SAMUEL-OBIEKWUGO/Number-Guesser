let min = 1;
let max = 5;
let winningNum = Math.ceil(Math.random() * max);
let guessesLeft = 3;

const game = document.getElementById('game');
const minNum = document.getElementsByClassName('min-num');
const MaxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
MaxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, `green`);
    }

    if(guess === winningNum){
       gameWon()
    } else{
        guessesLeft -= 1;

        if(guessesLeft === 0){
            gameOver()
        }else{
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct ${guessesLeft} guesses left`, 'red');
        }
    }
})

function gameOver() {
    message.innerHTML = `${guessInput.value} is wrong. You lose!`
    message.style.color = "red"
}


function gameWon(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disable = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(`${winningNum} is correct, YOU WIN`, 'green'); 
    guessBtn.value = 'Play again';
    guessBtn.className += 'Play again';
}

guessBtn.addEventListener('click', ()=> {
    window.location.reload
})

// function getRandomNum(){
//   return Math.floor(Math.round()*(max-min+1)+min);
// }

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}