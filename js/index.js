function allPicks() {
    return [
        {pick: "rock",
        emoji: "✊",
        beats: "scissors"
    },
    {
        pick: "paper",
        emoji: "🖐",
        beats: "rock"
    },
    {
        pick: "scissors",
        emoji: "✌️",
        beats: "paper"
    }
    ]
}
function queryUserPick() {
    return document.querySelectorAll("[data-pick]")
}
function getComputerPick() {
    return allPicks()[Math.floor(Math.random() * allPicks().length)]
}
function returnResult(userPick, comPick) {
    let result = undefined;
    //outcomes where user loses
    if (userPick.pick === comPick.beats) result = -1;
    //outcomes where user wins
    if (comPick.pick === userPick.beats) result = 1;
    //outcomes where it's a draw
    if (userPick.pick === comPick.pick) result =  0;
    console.log(result);
    return result;
}
//Event listeners
queryUserPick().forEach((pick) => {
    pick.addEventListener("click", () => {
        const pickName = pick.dataset.pick;
        const comPick = getComputerPick();
        const userPick = allPicks().find(i => i.pick === pickName);
        console.log(userPick, comPick);
        returnResult(userPick, comPick)
    })
})