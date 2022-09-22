let getComputerChoice = () =>{ // computer choice: returns a random number between 0 and 2
    return Math.floor(Math.random()*3)
}
let getPlayerChoice = () =>{ // answer the user choice
    let choice = prompt('Rock, paper or scissors... one, two, three!');
    if ((choice.trim()).toLowerCase() == 'rock') {
        return 0;
    }else if((choice.trim()).toLowerCase() == 'paper'){
        return 1;
    }else if((choice.trim()).toLowerCase() == 'scissors'){
        return 2;
    }else{
        return
    }
}

// rock wins scissors, paper wins rock, scissors wins paper
// rock = 0, paper = 1, scissors = 2

const playRound = (a, b) =>{ // a round of the game
    console.log(a, b);
    if (b == 0) {
        return (a == 1) ? 'You Lose! Paper beats rock' : 
               (a == 2) ? 'You Win! Rock beats scissors' : 'It\'s a tie!';
    }else if (b == 1) {
        return (a == 0) ? 'You Win! Paper beats rock' : 
               (a == 2) ? 'You Lose! Scissors beats paper' : 'It\'s a tie!';
    }else if (b == 2) {
        return (a == 0) ? 'You Lose! Rock beats scissors' : 
               (a == 1) ? 'You Win! Scissors beats paper' : 'It\'s a tie!';
    }else{
        return 'please select a valid option'
    }
    
}

const game = () =>{ //the function game, better of five
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
}

console.log(game());