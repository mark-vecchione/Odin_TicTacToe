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


//Set win conditions

//Start the game the game

const startGame = (data) => {
    //Pull variables
    initializeVariables(data);
    console.log(data);

    

    // Add event listeners to gameboard

}

//Determine current player 

//After each move, check win conditions, if not met, move to next player




