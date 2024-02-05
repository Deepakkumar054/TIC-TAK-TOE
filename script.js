let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");


// Winning Pattern Array

let winningPattern = [[0, 1, 2], 
    [0, 3, 6], 
    [2, 5, 8], 
    [6, 7, 8], 
    [3, 4, 5], 
    [1, 4, 7], 
    [0, 4, 8], 
    [2, 4, 6],];

//Player 'x plays first

let xTurn = true;
let count = 0;

// Disable All Buttons
const disableButtons = () =>{
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
};

// Enable all buttons (FOR new game and Restart)
const enableButtons = () =>{
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    // disable popup
    popupRef.classList.add("hide");
};

// This function is executed whana player wins
const winFunction = (letter) =>{
    disableButtons();
    if(letter == "X"){
        msgRef.innerHTML = "&#x1F389; <br> 'X' wins";
    }
    else{
        msgRef.innerHTML = "&#x1F389; <br> 'O' wins";
    }
};

// Function for draw

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <BR> It's a Draw";
};

// NEW GAME
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});


// Win logic
const winChecker = () => {
    //Loop through all win patterns
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText, 
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText,
        ];
        //Check if element  are filled
        //3 empty elements are same and would give win as would
        if(element1 != "" && (element2 != "") & (element3 != "")){

            if(element1 == element2 && element2 == element3){
                // if all 3 buttons have same values than pass the value to win function
                winFunction(element1);
            }
        }
    }
};

// Display x/o on click

btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            //Display
            element.innerText = "X";
            element.desabled = true;
        }
        else {
            xTurn = true;
            //Display Y
            element.innerText = "O";
            element.disabled = true;
        }

        // Increment count on each click
        count += 1;
        if (count == 9) {
            drawFunction();

        }
        // Check for  win on every Click
        winChecker();
    });
});
// Enable Buttons and disable popup and page 

window.onload = enableButtons;

