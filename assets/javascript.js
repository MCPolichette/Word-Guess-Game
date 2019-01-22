

// list of words in an Array to use for hangman game
var wordList = [
    "headset",
    "chain",
    "bottom bracket",
    "wheel hub",
    "tire",
    "fork",
    "derailleur",
    "brake pad",
    "disk brake",
    "bike frame",
    "wheels",
    "shifter",
    "brake cable",
    "shifter cable",
    "spokes",
    "saddle",
    "seat tube",
    "head tube",
    "down tube",
    "top tube",
    "seat stays",
    "suspension",
    "chain stays",
    "bicycle",
    "helmet",
    "hand grips",
    "handle bars",
    "pedals",
    "cranks"

];

// variables I think I'll need
var win = 0;
var loss = 0;
var guessesLeft = 12;
// var wordLength = unsolvedWord.length;
var displayArray = [splitLetters];

var remainingLetters = 20;
var wrongLetters = [];
var splitLetters = 8
var unsolvedWord = "TEST";

function winGame() {
    win++;
    alert("YOU WON!!!")
};
function loseGame() {
    alert("YOU LOST! reload the page to try a new word");
    loss++;
};
function winLose() {
    if (remainingLetters = 0) {
        winGame()
        gameBegins()
        win = win + win;
    }
    if (guessesLeft = 0) {
        loseGame();
        gameBegins();
        loss--;
    }
}
//Start game by on window loading
window.onload = function gameBegins() {

    // Randomly chooses a choice from the options array.
    unsolvedWord = wordList[Math.floor(Math.random() * wordList.length)];
    unsolvedWord = unsolvedWord.toUpperCase();

    // game mechanices set up
    document.getElementById("guesses_left").innerHTML = guessesLeft;

    // document.getElementById("wrong_letters").innerHTML = wrongLetter;

    // splits the unsovledWord into individual letters and creates an underline displayArray
    var splitLetters = unsolvedWord.split('');
    for (i = 0; i < splitLetters.length; i++) {
        displayArray[i] = " _ "
    }
    // taking out the SPACES
    for (i = 0; i < splitLetters.length; i++) {
        if (splitLetters[i] === " ") {
            (displayArray[i] = '&nbsp;');
            remainingLetters = remainingLetters - 1;
            document.getElementById("under_scores").innerHTML = (displayArray.join(' '));
        }
    } remainingLetters = splitLetters.length;


    // user input event = letter 
    document.onkeyup = function (event) {
        // check if letters has been typed already

        var letterChoice = (event.key);
        letterChoice = letterChoice.toUpperCase();
        if (wrongLetters.indexOf(letterChoice) >= 0 || splitLetters.indexOf(letterChoice) >= 0) { }
        else {
            guessesLeft = guessesLeft - 1;
            wrongLetters.push(letterChoice);
            wrongLetters.sort();
            document.getElementById("wrong_letters").innerHTML = wrongLetters.join(" ");
        }
        // if letter matches in word - write it down
        for (i = 0; i < splitLetters.length; i++) {
            if (splitLetters[i] === letterChoice) {
                (displayArray[i] = letterChoice + " ");
                remainingLetters - remainingLetters - 1;
                console.log("remaining", remainingLetters);
                document.getElementById("under_scores").innerHTML = (displayArray.join(" "));
            }
        }
        document.getElementById("guesses_left").innerHTML = guessesLeft;
        winLose();

        // end game protocalls.... Not working........  i treid triggering them.. not  sure

    }

    console.log("guesses left", guessesLeft, wrongLetters);
    console.log(wrongLetters.length);
    console.log(displayArray);
    console.log("------------");

    // WIN OR LOSE THE GAME

    // // // Function for game end


}


