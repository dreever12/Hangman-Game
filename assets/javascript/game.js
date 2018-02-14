// Globa Variables
// ==========================================================
// Create an array of words
const word = ['mockingjay', 'katniss', 'district', 'capital', 'victors'];
// Chose word randomly
var chosenWord;
var underscoreWord;
var guessedLetters = []

// Dom Manipulation
var wins = 0;
var wrongGuessRemaining = 15;
var docWins = document.getElementById("wins")
let docUnderScore = document.getElementById("rightWordUnderscore");
let docWrongGuess = document.getElementById("wrongGuessRemaining");
let docWrongLetters = document.getElementById("wrongLetters");


// Main
// ==========================================================
// reset game
function restGame () {
	// wrongGuessRemaining = 15;
	underscoreWord[i] = userGuess;
}
// Create underscores based on length of word 


function newWord() {
	chosenWord = word[Math.floor(Math.random() * word.length)];
	underscoreWord = [];
	for(i = 0; i < chosenWord.length; i++) {
		underscoreWord[i] = "_";
	}
	guessedLetters = [];
	wrongGuessRemaining = 15;
}
// display updates on page 
function updatePage () {
	docWins.textContent = wins;
	docUnderScore.textContent = underscoreWord.join(" ");
	docWrongGuess.textContent = wrongGuessRemaining;
	docWrongLetters.textContent = guessedLetters.join(" ");
	// ...update the page
}

newWord();
updatePage();

	// Gets users guess
	document.onkeyup = function (event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// look through the array to check if the key pressed is within the array
		var validGuess = false;
		for (i=0; i < chosenWord.length; i++) {
			if(chosenWord.charAt(i) === userGuess) {
				validGuess = true;
				underscoreWord[i] = userGuess; 
			}
	}
// update wins when user completes a word
	if(underscoreWord.join("") === chosenWord) {
		wins ++;
		alert ("You Win!"); newWord();
	}
// update wrong guess and wrong letters 
	if(validGuess === false) {
		docwrongGuess = wrongGuessRemaining --;
		guessedLetters[guessedLetters.length] = userGuess
	}  

	updatePage(); 
}

