function player () {


    
    let player1 = {
        name: "",
        token : "X",
        title : "Player 1",
        alreadyHadTurn : false
    }
    
    let player2 = {
        name : "",
        token : "O",
        title: "Player 2",
        alreadyHadTurn : false
    }


    const players = [player1, player2]

    function setUpPlayersPrompt () {


        if (players.length < 1) {
            console.log("Player 1, what is your name?")
        } else if (players.length < 2) {
            console.log("Player 2, what is your name?")
        } else {
            console.log("There are already the maximum players in this game.")
        }
    }

    const player1NameSet = function (name) {
        player1.name = name
        return players
    }

    const player2NameSet = function (name) {
        player2.name = name
        return players
    }

    const getPlayerDetails = function (whichPlayer) {
        if (whichPlayer === 1) {
            return players[0]
        } else if (whichPlayer === 2) {
            return players[1]
        } else {
            console.log("There are only two players, pick 1 or 2")
        }
    }

    const displayAllPlayers = function () {

        for (let i = 0; i < players.length; i++) {
            console.log(`${players[i].title} name is ${players[i].name} and their game piece is ${players[i].token}`)
        }
    }


    return {
        setUpPlayersPrompt,
        player1NameSet,
        player2NameSet,
        getPlayerDetails,
        displayAllPlayers,
        players
    }
}

const playerModule = player()


function gameBoard () {

    const rows = 3
    const columns = 3
    const board = []

    for (let i = 0; i < rows; i++) {
        board[i] = []
        for (let j = 0; j < columns; j++) {
            board[i].push("-")
        }
    }
    const getBoard = () => board

    return {getBoard}

}

const currentGameBoard = gameBoard()



function gameController () {

    let activePlayer = ""

   const chooseTile = function (row, column) {
        
        if (currentGameBoard.getBoard()[row][column] === "-") {
            currentGameBoard.getBoard()[row][column] = activePlayerObj.token
            gameControl.switchPlayer()
            console.log(`It is ${activePlayerObj.title}'s turn`)
            console.log(currentGameBoard.getBoard())
        } else {
            console.log("Choose a different square")
        }
    }

    
    let activePlayerObj = () => activePlayer
    
    const checkWinCondition = function () {
        if ((currentGameBoard.getBoard()[0][0] === currentGameBoard.getBoard()[0][1] && 
        currentGameBoard.getBoard()[0][1] === currentGameBoard.getBoard()[0][2] && currentGameBoard.getBoard()[0][0] != '-') ||
        
        (currentGameBoard.getBoard()[1][0] === currentGameBoard.getBoard()[1][1] && 
        currentGameBoard.getBoard()[1][1] === currentGameBoard.getBoard()[1][2] && currentGameBoard.getBoard()[0][0] != '-') ||

        (currentGameBoard.getBoard()[2][0] === currentGameBoard.getBoard()[2][1] && 
        currentGameBoard.getBoard()[2][1] === currentGameBoard.getBoard()[2][2] && currentGameBoard.getBoard()[0][0] != '-') ||

        (currentGameBoard.getBoard()[0][0] === currentGameBoard.getBoard()[1][0] && 
        currentGameBoard.getBoard()[1][0] === currentGameBoard.getBoard()[2][0] && currentGameBoard.getBoard()[0][0] != '-') ||
        
        (currentGameBoard.getBoard()[0][1] === currentGameBoard.getBoard()[1][1] && 
        currentGameBoard.getBoard()[1][1] === currentGameBoard.getBoard()[2][1] && currentGameBoard.getBoard()[0][0] != '-') ||

        (currentGameBoard.getBoard()[0][2] === currentGameBoard.getBoard()[1][2] && 
        currentGameBoard.getBoard()[1][2] === currentGameBoard.getBoard()[2][2] && currentGameBoard.getBoard()[0][0] != '-') ||

        (currentGameBoard.getBoard()[0][0] === currentGameBoard.getBoard()[1][1] && 
        currentGameBoard.getBoard()[1][1] === currentGameBoard.getBoard()[2][2] && currentGameBoard.getBoard()[0][0] != '-') ||

        (currentGameBoard.getBoard()[0][2] === currentGameBoard.getBoard()[1][1] && 
        currentGameBoard.getBoard()[1][1] === currentGameBoard.getBoard()[2][0] && currentGameBoard.getBoard()[0][0] != '-')) {
            gameControl.gameStatus = gameControl.gameStatuses.gameOver
            console.log(`${activePlayerObj.title} wins!`)
        }


    }
    
    const switchPlayer = function () {
        if (activePlayerObj === playerModule.players[0]) {
            activePlayerObj = playerModule.players[1]
            return activePlayerObj
        } else {
            activePlayerObj = playerModule.players[0]
            return activePlayerObj
        }

    const gameStatuses = {
        gameOver : "gameOver",
        gameActive : "gameActive"
    }

    const currentGameStatus = ""

}

return {
    chooseTile,
    activePlayerObj,
    switchPlayer,
    gameStatus,
    gameStatuses,
    checkWinCondition
}
}

const gameControl = gameController()



