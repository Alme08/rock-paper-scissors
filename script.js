// AUDIOS
const enterAudio = new Audio('audios/enter.wav')
const laughAudio = new Audio('audios/laugh.wav')
const winAudio = new Audio('audios/win.wav')

// START GAME SCREEN
const startGame = document.querySelector('.start-game')
const gameUi = document.querySelector('.game-ui')

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

// GAME SCREEN

let getComputerChoice = () => Math.floor(Math.random()*3) // computer choice: returns a random number between 0 and 2

let pUserScore = document.querySelector('.user .score');//User data
let userImg = document.querySelector('.userImg');
let userBoard = document.querySelector('.user .board')

let pVs = document.querySelector('.vs')

let pPcScore = document.querySelector('.pc .score');//Pc data
let pcImg = document.querySelector('.pcImg');
let pcBoard = document.querySelector('.pc .board')

let options = document.querySelector('.options')
let buttons = document.querySelectorAll('.choice');
let divResult = document.querySelector('.div-result')
let pResult = document.querySelector('.game-result')
let retry = document.querySelector('.retry')


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
        winAudio.currentTime = 0;
        winAudio.play();
        
        pcImg.setAttribute('src', 'images/pc_dead.png')
        
        options.classList.add('display-none')
        divResult.classList.remove('display-none')
        pVs.classList.add('display-none')
        retry.classList.remove('display-none')
        pResult.textContent = 'You win the game'

    }else if(computerScore == 5){
        laughAudio.currentTime = 0;
        laughAudio.play();
        
        userImg.setAttribute('src', 'images/user_dead.png')

        options.classList.add('display-none')
        divResult.classList.remove('display-none')
        pVs.classList.add('display-none')
        retry.classList.remove('display-none')
        pResult.textContent = 'You lose the game'
    }
}));

retry.addEventListener('click', e => {
    computerScore = 0;
    userScore = 0;
    pUserScore.textContent = userScore
    pPcScore.textContent = computerScore
    userImg.setAttribute('src', 'images/user.png')
    pcImg.setAttribute('src', 'images/pc.png')

    options.classList.remove('display-none')
    divResult.classList.add('display-none')
    pVs.classList.remove('display-none')
    retry.classList.add('display-none')

    pVs.textContent = 'VS'
    userBoard.innerHTML = ``;
    pcBoard.innerHTML = ``;
})


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
