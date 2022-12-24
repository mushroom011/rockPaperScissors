const OPTIONS = ['rock', 'paper', 'scissors'];
const POINTS = 5;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const getComputerChoice = (options) => {
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const getTheWinner = () => {
    const winner = (playerScore > computerScore) ? 'You are' : 'Computer is';
    return `${winner} the winner!`;
}

const playSingleRound = (playerSelection, computerSelection) => {
    if((playerScore === POINTS) || (computerScore === POINTS)){
        gameOver = true;
        togglePlayAgainButton();
        return getTheWinner();
    }

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

const showResult = (result) => {
    const resultDiv = document.querySelector('#result');
    resultDiv.textContent = result;
}

const showScore = () => {
    const playerPoints = document.querySelector('#player-points');
    const computerPoints = document.querySelector('#computer-points');
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
}

const buttons = document.querySelectorAll('.buttons .btn');
buttons.forEach(btn => btn.addEventListener('click', (e) => {
    if(gameOver) return;
    showScore();
    showResult(playSingleRound(e.target.dataset.option, getComputerChoice(OPTIONS)));
}));

const resetTheGame = () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    showScore();
    showResult('');
    togglePlayAgainButton();
}

const playAgainButton = document.querySelector('#playAgain');
playAgainButton.addEventListener('click', resetTheGame);

const togglePlayAgainButton = () => {
    playAgainButton.classList.toggle('hidden');
}
