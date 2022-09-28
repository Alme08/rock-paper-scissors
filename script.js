const startGame = document.querySelector('.start-game')
const gameUi = document.querySelector('.game-ui')
const enterAudio = new Audio('audios/enter.wav')

const removeStartScreen = (e) =>{
    if (e.key === 'Enter') {
        document.removeEventListener('keydown', removeStartScreen);
        enterAudio.currentTime = 0;
        enterAudio.play()
        
        startGame.classList.add('hide')
        setTimeout(() => {
            startGame.classList.add('display-none')
            gameUi.classList.remove('display-none')
        }, 500);
        setTimeout(() => {
            gameUi.classList.remove('hide')
        }, 600);
    }
}
document.addEventListener('keydown', removeStartScreen)


let getComputerChoice = () => Math.floor(Math.random()*3) // computer choice: returns a random number between 0 and 2

let buttons = document.querySelectorAll('button');
let pUserScore = document.querySelector('.user .score')
let pPcScore = document.querySelector('.pc .score')
let userBoard = document.querySelector('.user .board')
let pcBoard = document.querySelector('.pc .board')
let pVs = document.querySelector('.vs')
let options = document.querySelector('.options')
let divResult = document.querySelector('.div-result')
let pResult = document.querySelector('.game-result')

let computerScore = 0;
let userScore = 0;



buttons.forEach(button => button.addEventListener('click', e=>{
    let choice = button.dataset.choice;

    result = playRound(getComputerChoice(), choice);
    console.log(result);
    if (result == 'Win') {
        userScore++
    }else if(result == 'Lose'){
        computerScore++
    }
    pVs.textContent = result
    pUserScore.textContent = userScore
    pPcScore.textContent = computerScore

    if(userScore == 5){
        options.classList.add('display-none')
        divResult.classList.remove('display-none')
        pResult.textContent = 'You win the game'
    }
}));


 
// rock wins scissors, paper wins rock, scissors wins paper
// rock = 0, paper = 1, scissors = 2

 const playRound = (pc, player) =>{ // a round of the game
    console.log(pc, player);
    userBoard.innerHTML = `<img src="images/user_${player}.png">`;
    pcBoard.innerHTML = `<img src="images/pc_${pc}.png">`;

    if (player == 0) {
        return (pc == 1) ? 'Lose' : 
               (pc == 2) ? 'Win' : 'Tie';
    }else if (player == 1) {
        return (pc == 0) ? 'Win' : 
               (pc == 2) ? 'Lose' : 'Tie';
    }else if (player == 2) {
        return (pc == 0) ? 'Lose' : 
               (pc == 1) ? 'Win' : 'Tie';
    }
}

/* const game = () =>{ //the function game, better of five
    let computerScore = 0;
    let userScore = 0;

    for (let i = 0; i < 5; i++) {
        result = playRound(getComputerChoice(), getPlayerChoice());
        console.log(result);
        if (result.substring(4, 7) == 'Win') {
            userScore++
        } else if(result.substring(4, 8) == 'Lose'){
            computerScore++
        }

        console.log(`User score: ${userScore}, Computer Score: ${computerScore}`);
    }

    return (userScore > computerScore) ? 'You win the game!' : (computerScore > userScore) ? 'The computer wins the game...' : 'It\'s a tie! nobody wins!';   
} */

//console.log(game());