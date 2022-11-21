function getBody () {
    return document.body
}
function queryUL () {
    return document.querySelectorAll("ul");
}
//game functions start//
function allPicks () {
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
function queryUserPick () {
    return document.querySelectorAll("[data-pick]")
}
function getComputerPick () {
    return allPicks()[Math.floor(Math.random() * allPicks().length)]
}
function returnResult (userPick, comPick) {
    let result = undefined;
    //outcomes where user loses
    if (userPick.pick === comPick.beats) result = -1;
    //outcomes where user wins
    if (comPick.pick === userPick.beats) result = 1;
    //outcomes where it's a draw
    if (userPick.pick === comPick.pick) result =  0;
    return [result, userPick, comPick];
}
//game functions end//
//other functions start//
function showUserPick (userPick) {
    return document.querySelectorAll("div")[4].innerHTML = userPick.emoji
}
function showComPick (comPick) {
    return document.querySelectorAll("div")[6].innerHTML = comPick.emoji
}
function showPreviousResults (outcome, userPick, comPick) {
    const ul = document.querySelectorAll("ul")[0];
    const li = document.createElement("li");
    const div = document.createElement("div");
    if (document.querySelectorAll("ul")[0].childElementCount < 3) {
        if (outcome === 1) {
            div. innerText = `(W) ${userPick} beats ${comPick}`;
            div.classList.add("win");
            li.append(div);
            queryUL()[0].append(li);
        }
        if (outcome === -1) {
            div.innerText = `(L) ${comPick} beats ${userPick}`;
            div.classList.add("lose");
            li.append(div);
            queryUL()[0].append(li)
        }
    }
    //You're working on this
    // if (document.querySelectorAll("ul")[0].childElementCount > 3) {

    // }
}
//other functions end//
//Event listeners
queryUserPick().forEach((pick) => {
    pick.addEventListener("click", () => {
        let count = getCount() + 1;
        const pickName = pick.dataset.pick;
        const comPick = getComputerPick();
        const userPick = allPicks().find(i => i.pick === pickName)
        showUserPick(userPick);
        showComPick(comPick);
        const NewResult = returnResult(userPick, comPick);
        showPreviousResults(NewResult[0], userPick.pick, comPick.pick);
        console.log([NewResult, count]);
    })
})