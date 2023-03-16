document.getElementById('btnGameStart').addEventListener('click', () => {
    let resultsArray = oddEvenGame(document.querySelector('input').value, document.getElementById('gameOption').value)
    const gameInfo = document.querySelectorAll('h4')
    console.log(gameInfo)
    gameInfo[0].innerHTML = `My number was ${resultsArray[0]}`
    gameInfo[1].innerHTML = `My number was ${document.querySelector('input').value}`
    gameInfo[2].innerHTML = `The total is ${resultsArray[1]}`
    if (resultsArray[2]){
        document.getElementById('gameWinner').innerHTML = `The winner is YOU :(`
    }else{
        document.getElementById('gameWinner').innerHTML = `I won!! You stupid Looser`

    }
    giveVisibility('resultDetails')
})

