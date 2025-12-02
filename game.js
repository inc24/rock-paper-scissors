let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    switch (true) {
        case random === 0:
            return `rock`
        
        case random === 1:
            return `paper`

        case random === 2:
            return `scissors`
    }
}

function getHumanChoice() {
    return prompt(`Rock-Paper-Scissors game! Make choice: (rock/paper/scissors)`, ``);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const winString = `You win`;
    const loseString = `You lose`;
    const drawString = `Draw`;
    
    const result = 
    (humanChoice === `rock` && computerChoice == `paper`) ? `❌ You lose! Paper beats Rock` : 
    (humanChoice === `rock` && computerChoice == `scissors`) ? `🎉 You win! Rock beats Scissors` : 
    (humanChoice === `rock` && computerChoice == `rock`) ? `Draw!` : 
    
    (humanChoice === `paper` && computerChoice == `paper`) ? `Draw!` : 
    (humanChoice === `paper` && computerChoice == `scissors`) ? `❌ You lose! Scissors beats Paper` : 
    (humanChoice === `paper` && computerChoice == `rock`) ? `🎉 You win! Paper beats Rock` : 

    (humanChoice === `scissors` && computerChoice == `paper`) ? `🎉 You win! Scissors beats Paper` : 
    (humanChoice === `scissors` && computerChoice == `scissors`) ? `Draw!` : 
    (humanChoice === `scissors` && computerChoice == `rock`) ? `❌ You lose! Rock beats Scissors` : 
    null;

    (result != null) ? alert(`Your choice: ${humanChoice}.\nComputer choice: ${computerChoice}.\n${result}`) : alert(`Try again!`);

    switch (true) {
        case result.includes(winString):
            humanScore++;
            break;

        case result.includes(loseString):
            computerScore++;
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

alert(`Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`)