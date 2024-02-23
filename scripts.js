function player () {


    
    let player1 = {
        name: "",
        token : "X",
        title : "Player 1"
    }
    let player2 = {
        name : "",
        token : "O",
        title: "Player 2"
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

    let activePlayer = playerModule.players[0]

    function chooseTile (row, column, currentPlayer) {
        if (currentGameBoard.getBoard()[row][column] === "-") {
            activePlayer = playerModule.players[currentPlayer]
            currentGameBoard.getBoard()[row][column] = activePlayer.token
            console.log(currentGameBoard.getBoard())
        }
    }
    
    const active = () => activePlayer
    function switchTurn () {

    }
    
    return {
        chooseTile,
        active
    }

}


const gameControl = gameController()



