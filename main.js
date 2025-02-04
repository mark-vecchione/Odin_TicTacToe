// Attach event listener to form

const form = document.querySelector("#myForm");

form.addEventListener('submit', (event) => {
    //prevent refresh
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    document.querySelector(".modal-wrapper").setAttribute('hidden',true);
    console.log(data);
    startGame(data);    
})

// set win conditions
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//Initialize object variables 

const initializeVariables = (data) => {
    data.board = [0,1,2,3,4,5,6,7,8];
    data.player1 = "X";
    data.player2 = "O";
    data.round = 0;
    data.currentPlayer = "X";
    data.gameOver = false; 
}

const box = document.querySelector(".box");


//Start the game 

const startGame = (data) => {
    //Adjust for player1 name to start
    adjustDom('displayTurn', `${data.player1Name}'s turn`);
    //Pull variables
    initializeVariables(data);   

    // Call event listeners

    const gameBoardEventListener = (data) => {
        document.querySelectorAll(".box").forEach(box =>{
            box.addEventListener('click', (event) =>{
                playMove(event.target,data);
            })
        })
    };

    gameBoardEventListener(data);

};


//play move

const playMove = (box, data) => {
    //check game over conditions, if true do nothing
    if(data.gameOver) {
        return;
    }
    
    // check if box has letter in it, if so do nothing
    if(data.board[box.id] === "X" || data.board[box.id] === "O") {
        return;
    }

    //check for tie
    if(data.round > 8){
        return;
    }

    //Adjust DOM for player move
    data.board[box.id] = data.currentPlayer;
    box.textContent = data.currentPlayer;
    box.className = data.currentPlayer === "X" ? "box player 1" : "box player 2";
    // increase the round 
    data.round++;

    //check end conditions 
    if(endConditions(data)) {
        return;
    }

    // change the current player: DOM and data.currentPlayer
    changePlayer(data);
};

//Set end conditions

const endConditions = (data) => {
    //win, tie, or game still on
    if(checkWinner(data)) {
        // adjust dom
        let winnerName = data.currentPlayer === "X" ? data.player1Name : data.player2Name;
        adjustDom('displayTurn', winnerName + " has won the game");
        data.gameOver = true;
        return true
    } else if (data.round ===9) {
        //adjust dom
        adjustDom('displayTurn'), "It's a tie!";
        data.gameOver = true;
        return true
    }
    else {
        return false
    }
};

// check winner

const checkWinner = (data) => {
    let result = false;
    winConditions.forEach(condition => {
        if(
            data.board[condition[0]] === data.board[condition[1]] && 
            data.board[condition[1]] === data.board[condition[2]]
        ) {
            console.log("player has won");
            data.gameOver = true;
            result = true;
        }
    })
    return result;
}

//adjust DOM for end conditions

const adjustDom = (className, textContent) => {
    const elem = document.querySelector(`.${className}`);
    elem.textContent = textContent;
};

//Change current player function

const changePlayer = (data) => {
    data.currentPlayer = data.currentPlayer === "X" ? "O" : "X";
    let displayTurnText = data.currentPlayer === "X" ? data.player1Name : data.player2Name;
    adjustDom('displayTurn', `${displayTurnText}'s turn`);
}




