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
            streakElement.innerText = streakCount;
        }
        if (streakCount > 0 && newResult[0] === -1) {
            streakCount = 0;            
            streakElement.innerText = streakCount;
        }
        if (newResult[0] === 1) {
            streakCount++;
            streakElement.innerText = streakCount;
        } else if (newResult[0] === -1) {
            streakCount += -1;
            streakElement.innerText = streakCount;
        } else if (newResult[0] === 0) {
            streakCount += 0;
            streakElement.innerText = streakCount;
        }
        showPreviousResults(newResult[0], userPick.pick, comPick.pick);
        returnRound(roundCount);
    })
})