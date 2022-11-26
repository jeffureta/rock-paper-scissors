const getBody = function () {
    return document.body
}
let getStreak = function () {
    return document.querySelectorAll("span")[0];
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
let roundCount = 0;
let streakCount = 0;
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
    return document.querySelectorAll("div")[4].innerHTML = userPick.emoji
}
function showComPick (comPick) {
    return document.querySelectorAll("div")[6].innerHTML = comPick.emoji
}
function showPreviousResults (outcome, userPick, comPick) {
    const ul = document.querySelectorAll("ul")[0];
    const li = document.createElement("li");
    const div = document.createElement("div");
    const thirdLI = document.querySelectorAll("li")[2];
    if (isTrue(thirdLI) === 0) {
        if (outcome === 1) {
            div. innerText = `${returnRound()}. (W) ${getFirstLetter(userPick)} beats ${getFirstLetter(comPick)}`;
            div.classList.add("win");
            li.append(div);
            ul.append(li);
        }
        if (outcome === -1) {
            div.innerText = `${returnRound()}. (L) ${getFirstLetter(comPick)} beats ${getFirstLetter(userPick)}`;
            div.classList.add("lose");
            li.append(div);
            ul.append(li)
        }
        if (outcome === 0) {
            div.innerText = `${returnRound()}. (D) both picked ${getFirstLetter(userPick)}`;
            div.classList.add("draw");
            li.append(div);
            ul.append(li);
        }
    }
    if (isTrue(thirdLI) === 1) {
        document.querySelectorAll("li")[0].remove();
        if (outcome === 1) {
            div. innerText = `${returnRound()}. (W) ${getFirstLetter(userPick)} beats ${getFirstLetter(comPick)}`;
            div.classList.add("win");
            li.append(div);
            ul.append(li);
        }
        if (outcome === -1) {
            div. innerText = `${returnRound()}. (L) ${getFirstLetter(comPick)} beats ${getFirstLetter(userPick)}`;
            div.classList.add("lose");
            li.append(div);
            ul.append(li);
        }
        if (outcome === 0) {
            div. innerText = `${returnRound()}. (D) both picked ${getFirstLetter(userPick)}`;
            div.classList.add("draw");
            li.append(div);
            ul.append(li);
        }
    }
}
//other functions end//
//Event listeners
queryUserPick().forEach((pick) => {
    pick.addEventListener("click", () => {
        roundCount += 1;
        const pickName = pick.dataset.pick;
        const comPick = getComputerPick();
        const userPick = allPicks().find(i => i.pick === pickName)
        showUserPick(userPick);
        showComPick(comPick);
        const newResult = returnResult(userPick, comPick);
        console.log(`${newResult} this is new result`);
        if (streakCount <= 0 && newResult[0] === 1) {
            streakCount = 0;
            getStreak().innerText = streakCount;
        }
        if (streakCount > 0 && newResult[0] === -1) {
            streakCount = 0;            
            getStreak().innerText = streakCount;
        }
        if (newResult[0] === 1) {
            streakCount++;
            getStreak().innerText = streakCount;
        } else if (newResult[0] === -1) {
            streakCount += -1;
            getStreak().innerText = streakCount;
        } else if (newResult[0] === 0) {
            streakCount += 0;
            getStreak().innerText = streakCount;
        }
        showPreviousResults(newResult[0], userPick.pick, comPick.pick);
        returnRound(roundCount);
    })
})