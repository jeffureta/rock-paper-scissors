function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}
function playerSelection(option) {
    return option.toLowerCase()
}
//you're working on this
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && getComputerChoice() === "rock") return "draw"
}