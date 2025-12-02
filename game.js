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

console.log(getComputerChoice());

function getHumanChoice() {
    return prompt(`Rock-Paper-Scissors game! Make choice: (rock/paper/scissors)`, ``);
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
