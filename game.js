let computerScore = 0;
let humanScore = 0;
let roundCount = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    return (random === 0) ? `rock` : (random === 1) ? `paper` : `scissors`;
}

function getHumanChoice() {
    return prompt(`Make a choice: (rock / paper / scissors)`, ``).toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    const acceptableValues = [`rock`, `paper`, `scissors`];
    
    if (computerChoice === humanChoice) {
        alert(`Your choice: ${humanChoice.toUpperCase()}.\nComputer choice: ${computerChoice.toUpperCase()}.\nDraw!`)
        alert(`Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);

    } else if (computerChoice === `rock` && humanChoice === `paper` || 
                computerChoice === `paper` && humanChoice === `scissors` || 
                computerChoice === `scissors` && humanChoice === `rock`) {
                    humanScore++;
                    alert(`Your choice: ${humanChoice.toUpperCase()}.\nComputer choice: ${computerChoice.toUpperCase()}.\n🎉 You won the round! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
                    alert(`Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);

                } else if (acceptableValues.includes(humanChoice)) {
                    computerScore++;
                    alert(`Your choice: ${humanChoice.toUpperCase()}.\nComputer choice: ${computerChoice.toUpperCase()}.\n😭 You lost the round! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`);
                    alert(`Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);

                } else {
                    roundCount--;
                    alert(`Please enter the correct word.`)

                }
}

function playGame() {
    let numberRounds = prompt(`Rock-Paper-Scissors game!\nHow many rounds?`,`5`);

    while (isNaN(numberRounds) || numberRounds.trim() === "" || numberRounds === `0`) {
        numberRounds = prompt(`Please enter the number of rounds.`,``);
    }

    for (roundCount = 1; roundCount <= numberRounds; roundCount++) {   
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
     }

     (humanScore > computerScore) ? alert(`Total Scores:\nYou: ${humanScore}\nComputer: ${computerScore}\nYOU WIN! 🎉🎉🎉`) : 
     (humanScore < computerScore) ? alert(`Total Scores:\nYou: ${humanScore}\nComputer: ${computerScore}\nYou lost the game. 😭`) : 
     (humanScore === computerScore) ? alert(`The game ended in a draw! 😊`) : null;
}

playGame();