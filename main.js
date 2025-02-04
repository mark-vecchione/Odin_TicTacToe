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

//Attach event listener to game box 

const box = document.querySelector(".box");


//Set win conditions

//Start the game the game


//Determine current player 

//After each move, check win conditions, if not met, move to next player




