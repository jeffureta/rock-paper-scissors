function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}
function playerSelection(option) {
    return option.toLowerCase()
}
//you're working on this
function playRound(playerSelection, getComputerChoice) {
    //outcomes where player wins
    if (playerSelection === "rock" && getComputerChoice === "scissors") return `you win ${playerSelection} beats ${getComputerChoice}`
    if (playerSelection === "paper" && getComputerChoice === "rock") return `you win ${playerSelection} beats ${getComputerChoice}`
    if (playerSelection === "scissors" && getComputerChoice === "paper") return `you win ${playerSelection} beats ${getComputerChoice}`
    // //outcomes where computer wins
    if (getComputerChoice === "rock" && playerSelection === "scissors") return `you lose ${getComputerChoice} beats ${playerSelection}`
    if (getComputerChoice === "paper" && playerSelection === "rock") return `you lose ${getComputerChoice} beats ${playerSelection}`
    if (getComputerChoice === "scissors" && playerSelection === "paper") return `you lose ${getComputerChoice} beats ${playerSelection}`
    // //outcomes where it's a draw
    else return `draw computer picked ${getComputerChoice}`
}