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

    console.log(box,data);

    //

};

//Set win conditions

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

//Determine current player 

//After each move, check win conditions, if not met, move to next player




