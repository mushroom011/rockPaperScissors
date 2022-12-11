const OPTIONS = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const getComputerChoice = (options) => {
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}
const playSingleRound = (playerSelection, computerSelection) => {
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    if(computerSelection === lowerCasePlayerSelection) return 'Draw!';

    if(computerSelection === 'rock' && lowerCasePlayerSelection === 'paper'){
        playerScore++;
        return 'You Win! Paper beats Rock';
    } else if(computerSelection === 'rock' && lowerCasePlayerSelection === 'scissors'){
        computerScore++;
        return 'You Lose! Rock beats Scissors';
    } else if(computerSelection === 'paper' && lowerCasePlayerSelection === 'scissors'){
        playerScore++;
        return 'You Win! Scissors beats Paper';
    } else if(computerSelection === 'paper' && lowerCasePlayerSelection === 'rock'){
        computerScore++;
        return 'You Lose! Paper beats Rock';
    } else if(computerSelection === 'scissors' && lowerCasePlayerSelection === 'rock'){
        playerScore++;
        return 'You Win! Rock beats Scissors';
    } else if(computerSelection === 'scissors' && lowerCasePlayerSelection === 'paper'){
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    }
}

const game = () => {
    let playerSelection;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt('Rock! Paper! Scissors!');
        console.log(playSingleRound(playerSelection, getComputerChoice(OPTIONS)));
    }

    const result = (playerScore > computerScore) ? 'Win' : 'Lose';
    console.log(`You ${result}! Your score is ${playerScore}`);
}

game();
