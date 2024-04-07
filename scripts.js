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
    let board = []
    const getBoard = () => board

    const setBoard = function () {
    
        board = []
        for (let i = 0; i < rows; i++) {
            board[i] = []
        for (let j = 0; j < columns; j++) {
            board[i].push("-")
        }
    }
}
    return {getBoard,
            setBoard}
}

const currentGameBoard = gameBoard()



function gameController () {

    let activePlayer = ""
    let getActivePlayerObj = () => activePlayer
    let currentGameStatus = ""

    
    // method to choose the tile for the current active player and to check the win condition in between turns.

   const chooseTile = function (row, column) {
        
        if (currentGameBoard.getBoard()[row][column] === "-") {
            currentGameBoard.getBoard()[row][column] = getActivePlayerObj().token
            gameControl.checkWinCondition()
            if (gameControl.currentGameStatus === "gameOver") {
              console.log("Game is over, start a new game.")  
            } else if (gameControl.getGameStatus() === "gameActive") {
            gameControl.switchPlayer()
            console.log(`It is ${getActivePlayerObj().title}'s turn`)
            console.log(currentGameBoard.getBoard()) 
            }
            return currentGameBoard.getBoard()
        } else {
            console.log("Choose a different square")
        }
    }

    // Win condition checker that checks all possible win conditions after each turn and will change the game status to game over if a win condition is met.
    
    const checkWinCondition = function () {
        if ((currentGameBoard.getBoard()[0][0] === currentGameBoard.getBoard()[0][1] && 
        currentGameBoard.getBoard()[0][1] === currentGameBoard.getBoard()[0][2] && currentGameBoard.getBoard()[0][0] != '-') ||
        
        (currentGameBoard.getBoard()[1][0] === currentGameBoard.getBoard()[1][1] && 
        currentGameBoard.getBoard()[1][1] === currentGameBoard.getBoard()[1][2] && currentGameBoard.getBoard()[1][0] != '-') ||

        (currentGameBoard.getBoard()[2][0] === currentGameBoard.getBoard()[2][1] && 
        currentGameBoard.getBoard()[2][1] === currentGameBoard.getBoard()[2][2] && currentGameBoard.getBoard()[2][0] != '-') ||

        (currentGameBoard.getBoard()[0][0] === currentGameBoard.getBoard()[1][0] && 
        currentGameBoard.getBoard()[1][0] === currentGameBoard.getBoard()[2][0] && currentGameBoard.getBoard()[0][0] != '-') ||
        
        (currentGameBoard.getBoard()[0][1] === currentGameBoard.getBoard()[1][1] && 
        currentGameBoard.getBoard()[1][1] === currentGameBoard.getBoard()[2][1] && currentGameBoard.getBoard()[0][1] != '-') ||

        (currentGameBoard.getBoard()[0][2] === currentGameBoard.getBoard()[1][2] && 
        currentGameBoard.getBoard()[1][2] === currentGameBoard.getBoard()[2][2] && currentGameBoard.getBoard()[0][2] != '-') ||

        (currentGameBoard.getBoard()[0][0] === currentGameBoard.getBoard()[1][1] && 
        currentGameBoard.getBoard()[1][1] === currentGameBoard.getBoard()[2][2] && currentGameBoard.getBoard()[0][0] != '-') ||

        (currentGameBoard.getBoard()[0][2] === currentGameBoard.getBoard()[1][1] && 
        currentGameBoard.getBoard()[1][1] === currentGameBoard.getBoard()[2][0] && currentGameBoard.getBoard()[0][2] != '-')) {
            
            gameControl.currentGameStatus = gameControl.gameStatuses.gameOver
            console.log(`${getActivePlayerObj().title} wins!`)
        } 

    }
    
    // method to switch the active player after each turn.

    const switchPlayer = function () {
        if (activePlayer === playerModule.players[0]) {
            activePlayer = playerModule.players[1]
            return activePlayer
        } else {
            activePlayer = playerModule.players[0]
            return activePlayer
        }


    }


    // method to start the game and set the active player to player 1 and the game status to active.

    const startGame = function () {
       activePlayer = playerModule.players[0]
       currentGameStatus = gameControl.gameStatuses.gameActive
       currentGameBoard.setBoard()
    }

    // possible game statuses

    const gameStatuses = {
        gameOver : "gameOver",
        gameActive : "gameActive"
    }

    const getGameStatus = () => currentGameStatus

    return {
    chooseTile,
    switchPlayer,
    currentGameStatus,
    gameStatuses,
    checkWinCondition,
    startGame,
    getActivePlayerObj,
    getGameStatus
}


}

const gameControl = gameController()



