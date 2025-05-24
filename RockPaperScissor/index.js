const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

const resultE = document.getElementById("result");
const playerScoreE = document.getElementById("user score");
const ComputerScoreE = document.getElementById("computer score");


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = play(button.id, computer());
        resultE.textContent = result;
    });
});

function computer() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function play(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        return "It's a Tie !!";
    else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")) {
        playerScore++;
        playerScoreE.textContent = playerScore;
        return "You win ! " + playerChoice + " beats " + computerChoice;
    }
    else {
        computerScore++;
        ComputerScoreE.textContent = computerScore;
        return "You lose ! " + computerChoice + " beats " + playerChoice;
    }

}