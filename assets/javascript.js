

// list of words in an Array to use for hangman game
var wordList = ["one", "two", "three", "four", "five"];

// variables I think I'll need
var win = 0;
var loss = 0;
// var wordLength = unsolvedWord.length;
var displayArray = [splitLetters];
var guessesLeft = 12;
var remainingLetters = 0;
var wrongLetters = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var splitLetters = 8
var guess = " ";

var unsolvedWord = "TEST";
// var remainingLetters = splitLetters.length;

// Elements are the the places where my Javascript is shown in HTML
var showGuessesLeft = document.getElementById("guesses_left");
var showWrongLetters = document.getElementById("wrong_letters");
var showsplitLetters = document.getElementById("under_scores");

//Start game by on window loading
window.onload = function (gameBegins) {

    // Randomly chooses a choice from the options array.
    unsolvedWord = wordList[Math.floor(Math.random() * wordList.length)];

    // game mechanices set up
    document.getElementById("guesses_left").innerHTML = guessesLeft;

    // document.getElementById("wrong_letters").innerHTML = wrongLetter;

    // splits the unsovledWord into individual letters and creates an underline displayArray
    var splitLetters = unsolvedWord.split('');
    for (i = 0; i < splitLetters.length; i++) {
        displayArray[i] = "_  "
        // output = output + displayArray[i];
    }
    document.getElementById("under_scores").innerHTML = (displayArray.join(" "));
    remainingLetters = splitLetters.length;

    // user input event = letter 
    document.onkeyup = function (event) {
        if (event.key === wrongLetters[]) {
            alert(POOP);
        }

        var letterChoice = (event.key);
        for (i = 0; i < splitLetters.length; i++) {
            // if letter matches in word - write it down

            if (splitLetters[i] === event.key) {
                (displayArray[i] = event.key + " ");
                remainingLetters--;
                guessesLeft++
                document.getElementById("under_scores").innerHTML = (displayArray.join(" "));
            }




        } wrongLetters.push(event.key);
        wrongLetters.sort;
        document.getElementById("wrong_letters").innerHTML = wrongLetters.join(" ")

        document.getElementById("guesses_left").innerHTML = guessesLeft;

        guessesLeft--;
        console.log("guesses left", guessesLeft, remainingLetters);
        console.log(letterChoice, wrongLetters.length);
        console.log(displayArray);
        console.log("------------");


        console.log("displayArray, output, splitLetters, ");
    }



}



        // check string - if letter is already been chosen - do nothing
        // put chosen letter into a string

        // if letter is in word array - 









    // CONSOLE TEST 






    // other game setup mechanics









// var guess = onkeyup

// var gameBegins = function () {
//     for (var i = 0; i < unsolvedWord.length; i++) {
//         showsplitLetters[i] = "_ ";
//         output = output + showsplitLetters[i];

//     }
//     document.getElementById("splitLetters").innerHTML = output;
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


