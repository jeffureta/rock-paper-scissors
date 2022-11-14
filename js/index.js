function getPicks() {
    return document.querySelectorAll("[data-selection]")
}
getPicks().forEach((pick) => {
    pick.addEventListener("click", (e) => {
        const pickName = pick.dataset.selection;
        makeSelection(pickName);
    })
})
function makeSelection(selection) {
    console.log(selection)
}
function getComputerPick() {
    let picksArray = ["✊","🖐️","✌️"];
    return picksArray[Math.floor(Math.random() * picksArray.length)]
}
function getUserPick(pick) {
    return pick
}
//you're working on this
function playRound(playerSelection, getComputerChoice) {
    //outcomes where player wins
    // if (playerSelection === "rock" && getComputerChoice === "scissors") return `you win ${playerSelection} beats ${getComputerChoice}`
    // if (playerSelection === "paper" && getComputerChoice === "rock") return `you win ${playerSelection} beats ${getComputerChoice}`
    // if (playerSelection === "scissors" && getComputerChoice === "paper") return `you win ${playerSelection} beats ${getComputerChoice}`
    // //outcomes where computer wins
    // if (getComputerChoice === "rock" && playerSelection === "scissors") return `you lose ${getComputerChoice} beats ${playerSelection}`
    // if (getComputerChoice === "paper" && playerSelection === "rock") return `you lose ${getComputerChoice} beats ${playerSelection}`
    // if (getComputerChoice === "scissors" && playerSelection === "paper") return `you lose ${getComputerChoice} beats ${playerSelection}`
    // //outcomes where it's a draw
    // else return `draw computer picked ${getComputerChoice}`
}