

// list of words in an Array to use for hangman game
var wordList = ["one", "two", "three", "four", "five"];

// variables I think I'll need
var win = 0;
var loss = 0;
// var wordLength = unsolvedWord.length;
var display = [underScores];
var guessesLeft = 12;

var wrongLetter = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var underScores = 8
var guess = " ";
var output = " ";
var unsolvedWord = "TEST";
// Elements are the the places where my Javascript is shown in HTML
var showGuessesLeft = document.getElementById("guesses-left");
var showWrongLetters = document.getElementById("wrongLetters");
var showUnderscores = document.getElementById("under_scores");



//Start game by pressing a key?
window.onload = function (event) {

    // Randomly chooses a choice from the options array.

    unsolvedWord = wordList[Math.floor(Math.random() * wordList.length)];

    // splits the unsovledWord into individual letters and creates an underline display

    var underScores = unsolvedWord.split('');
    for (i = 0; i < underScores.length; i++) {
        display[i] = "_  "
        output = output + display[i];


        document.getElementById("under_scores").innerHTML = (output);


    }
    console.log(display);
    console.log(output);
    console.log(underScores);
    console.log("-------------------------");

    // other game setup mechanics

    document.getElementById("guesses-left").innerHTML =
        (guessesLeft);






}

// var guess = onkeyup

// var gameBegins = function () {
//     for (var i = 0; i < unsolvedWord.length; i++) {
//         showUnderscores[i] = "_ ";
//         output = output + showUnderscores[i];

//     }
//     document.getElementById("underScores").innerHTML = output;
//     output = " ";
// }






    // computer uses chosen word to setup game
    // document.getElementById(showGuessesLeft) = guessesLeft








// document.getElementById(guessesLeft) =
//     "The text from the intro paragraph is " + myElement.innerHTML;

// var myElement = document.getElementById("intro");
// document.getElementById("demo").innerHTML =
//     "The text from the intro paragraph is " + myElement.innerHTML;

// computer takes word, and breaks it down into letters displaying them in box



// user types letters / function searches chosen word for that letter
// document.onkeyup = function (event) {
    // if letter matches letters in the choice, display it;  
    // if no match occurs display letter in missed section, and count misses
    // 


