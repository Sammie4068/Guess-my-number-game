let secretNumber = Math.floor(Math.random()*20)+1;
let score = 5;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value);
// when there is no input
    if(!guess){
        displayMessage("No number");
//when player wins
    }else if(guess == secretNumber){
        displayMessage("Correct number");
        document.querySelector("h1").textContent = "Congratulations!"
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
     if(score > highScore){
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
     }

// when guess is wrong
     } else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber? "Too high!": "Too low!")
           score--;
           document.querySelector(".score").textContent = score;
        }else{
            displayMessage("You lost!")
            document.querySelector("h1").textContent = "Game Over!"
            document.querySelector(".score").textContent = 0;
            document.querySelector(".number").textContent = secretNumber;
            document.querySelector("body").style.backgroundColor = "#880808";
            document.querySelector(".number").style.width = "30rem";
        }
     }
});

document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage("start guessing...")
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?';
});