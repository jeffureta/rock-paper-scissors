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
function updateStreak() {
    return returnResult(userPick, comPick)
}
function getFirstLetter(pick) {
    return pick.charAt(0).toUpperCase(); 
}
function addOne(roundCount) {
    return roundCount +1
}
function returnRound() {
    console.log(roundCount)
    return roundCount
}
function isTrue (element) { 
    //This function is used to know if section three has 3 results
    //If it has 3 results already it will remove the oldest result
    //And will add the new result on top of the stack
    if (typeof element != "undefined" && element != null) return 1;
    else return 0;
}
function showUserPick (userPick) {
    return document.querySelectorAll("div")[6].innerHTML = userPick.emoji
}
function showComPick (comPick) {
    return document.querySelectorAll("div")[8].innerHTML = comPick.emoji
}
function showPreviousResults (outcome, userPick, comPick) {
    const sectionTwo = document.getElementsByClassName("section-two")[0];
    const ul = document.querySelectorAll("ul")[0];
    const li = document.createElement("li");
    const div = document.createElement("div");
    const thirdLI = document.querySelectorAll("li")[2];
    if (isTrue(thirdLI) === 0) {
        sectionTwo.style.borderBottom = "0.1px solid black";
        li.style.borderBottom = "0.5px solid black";
        if (outcome === 1) {
            div. innerHTML = `&nbsp;${returnRound()}.(W)${getFirstLetter(userPick)} beats ${getFirstLetter(comPick)}`;
            div.classList.add("win");
            li.append(div);
            ul.append(li);
        }
        if (outcome === -1) {
            div.innerHTML = `&nbsp;${returnRound()}.(L)${getFirstLetter(comPick)} beats ${getFirstLetter(userPick)}`;
            div.classList.add("lose");
            li.append(div);
            ul.append(li)
        }
        if (outcome === 0) {
            div.innerHTML = `&nbsp;${returnRound()}.(D)both picked ${getFirstLetter(userPick)}`;
            div.classList.add("draw");
            li.append(div);
            ul.append(li);
        }
    }
    if (isTrue(thirdLI) === 1) {
        document.querySelectorAll("li")[0].remove();
        li.style.borderBottom = "0.5px solid black";
        if (outcome === 1) {
            div. innerHTML = `&nbsp;${returnRound()}.(W)${getFirstLetter(userPick)} beats ${getFirstLetter(comPick)}`;
            div.classList.add("win");
            li.append(div);
            ul.append(li);
        }
        if (outcome === -1) {
            div. innerHTML = `&nbsp;${returnRound()}.(L)${getFirstLetter(comPick)} beats ${getFirstLetter(userPick)}`;
            div.classList.add("lose");
            li.append(div);
            ul.append(li);
        }
        if (outcome === 0) {
            div. innerHTML = `&nbsp;${returnRound()}.(D)both picked ${getFirstLetter(userPick)}`;
            div.classList.add("draw");
            li.append(div);
            ul.append(li);
        }
    }
}    
//other functions end//
