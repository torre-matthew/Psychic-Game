
// Variables
// --------------------------------------------------------
let letters = ["A","B","C", "D","E","F","G", "H","I","J","K", "L","M","N","O", "P", "Q","R","S", "T","U","V","W", "X","Y","Z"];
let numberOfWins = document.getElementById("wins");
let numberOfLosses = document.getElementById("losses");
let guessesLeft = document.getElementById("guessesleft");
let usedLetters = document.getElementById("usedletters");
let wins = 0;
let losses = 0;
let totalGuesses = 0;
let remainingGuesses = 10;
let indexNum = Math.floor(Math.random() * 25);
let compGuess = letters[indexNum];

// Functions(s)
// --------------------------------------------------------------------

function initDisplay () {
    
    guessesLeft.textContent = "Remaining Guesses: " + remainingGuesses;
    numberOfWins.textContent = "Number of Wins:" + wins;             
}

function winStartOver (){
    wins++;
    numberOfWins.textContent = "Number of Wins: " + wins;
    usedLetters.textContent = "";  
    guessesLeft.textContent = "Remaining Guesses: " + remainingGuesses;
    indexNum = Math.floor(Math.random() * 25);
    compGuess = letters[indexNum];
    
}

function lossStartOver (){
    losses++;
    numberOfLosses.textContent = "Losses: " + losses;
    usedLetters.textContent = "";
    remainingGuesses = 10;  
    guessesLeft.textContent = "Remaining Guesses: " + remainingGuesses;
    indexNum = Math.floor(Math.random() * 25);
    compGuess = letters[indexNum];
    
}

// Calls
// -------------------------------------------------------------------------------------------

initDisplay();

document.onkeyup = function (event) {
    
    let userGuess = event.key.toUpperCase();           

if (compGuess != userGuess) {
    remainingGuesses--;
    guessesLeft.textContent = "Remaining Guesses: " + remainingGuesses;
    usedLetters.textContent += userGuess + ", ";
    console.log(compGuess);
}else {
    confirm("Great job. I was thinking " + userGuess + ". Play another round?");
    winStartOver();
}

if ((userGuess != compGuess) && (remainingGuesses == 0)) {
        confirm("Nope! Try Again?");
        lossStartOver();
}

}


// 