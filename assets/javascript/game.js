$(document).ready(function() {

// theme based array for game chosen words
var gameWords = ["caddis", "bwo", "adams", "elkhair", "parachute", "cahill", "hopper", "baetis", "midge", "mouse", "beetle", "salmonfly", "drake", "gnat", "pheasant", "flies", "dun", "trico", "mosquito", "damsel", "ant", "emerger", "thorax", "fathead", "compardun"];
// current word field pulled from array
var rand = gameWords[Math.floor(Math.random() * gameWords.length)];
var wordLength = rand.length;
var gameLetters= [];
var splitArray = rand.split("");
var correctGuess = 0;
var userGuess = [];
var wrongGuess = [];
var guessesLeft = 6;

//These are DOM Element variables
var gamePlaySpan = document.getElementById("gameLetters")
var keyboardButtons = $(".letter")
// console.log(document.getElementById("gameLetters"));
console.log(rand);
// console.log(splitArray);
// console.log(keyboardButtons);

//This for loop creates the underscores for all the random words.
for (var i =0; i < wordLength; i++) {   
        gameLetters[i] = "_ "; 
             
}


gamePlaySpan.innerHTML=gameLetters.join("");


var userGuess = keyboardButtons.click(function() {
        var userGuess = this.id;
        
        
        var correctLetter =false;
               
        
                for (var j = 0; j < wordLength; j++) {

                        if (splitArray[j] === userGuess) {
                               gameLetters[j] = userGuess; 
                               correctLetter = true;    
                               correctGuess++;                           
                                $(this).addClass("letter-invis");


                        }
                        else {
        
                              
                        }

                }

                //This is the win case
                if (correctGuess === wordLength) {
                        $(keyboardButtons).addClass("letter-invis");
                        $(".titleHead").addClass("winTitleHead").text("You Win!");

                }
                
                //This starts the false or wrong guess functionality
                var addGallows = {
                        5: function() {
                                return document.getElementById("gallows").src="assets/images/Gallows/1head.png";
                        },
                        4: function() {
                                return document.getElementById("gallows").src="assets/images/Gallows/2torso.png";
                        },
                        3: function() {
                                return document.getElementById("gallows").src="assets/images/Gallows/3left-arm.png";
                        },
                        2: function() {
                                return document.getElementById("gallows").src="assets/images/Gallows/4right-arm.png";
                        },
                        1: function() {
                                return document.getElementById("gallows").src="assets/images/Gallows/5left-leg.png";
                        },
                        0: function() {
                                
                                $(keyboardButtons).addClass("letter-invis");
                                //write on screen that loss has occured and display Rand
                                $(".titleHead").addClass("lossTitleHead").text("You Lose! Word was " + rand); 
                                // console.log("You Lose!");                               
                                return document.getElementById("gallows").src="assets/images/Gallows/6right-leg-END.png";
                                
                        },

                } 
                
                if (!correctLetter) {
                        guessesLeft--;
                        $(this).addClass("letter-invis");
                        // console.log(guessesLeft);
                        addGallows[guessesLeft]();
                }               
                gamePlaySpan.innerHTML = gameLetters.join("");        
        });


});












// add a function titled new game here that initializes variables except score counter. This function will also replace the restart button.

// function newGame() {
//         rand = gameWords[Math.floor(Math.random() * gameWords.length)];
//         wordLength = rand.length;
//         gameLetters= [];
//         splitArray = rand.split("");
//         wrongLetter =true;
// }



// buttons need to register a data point or value. Once a value is returned we can compare it to the letters in the "RAND" word 
// (does that mean the data is stored in an empty array?)            
// Need to check for correct characters in word, and then print in the correct position
// is user guess equal to any character in string...show 
// number of failures will be reflected by imgs in gallows section
// letters already guessed
// start over or reset 
