$(document).ready(function() {

// theme based array for game chosen words
var gameWords = ["caddis", "bwo", "adams", "elkhair", "parachute", "cahill", "hopper", "baetis", "midge", "mouse", "beetle", "salmonfly", "drake", "gnat", "pheasant", "flies", "dun", "trico", "mosquito", "damsel", "ant", "emerger", "thorax", "fathead", "compardun"];
// current word field pulled from array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var rand = gameWords[Math.floor(Math.random() * gameWords.length)];
var wordLength = rand.length;
var userGuess = [];
var gameLetters = rand;

console.log(rand);
// console.log(wordLength);
// console.log(userGuess);

// This creates the word written in underscores in the #gameLetters Field
for (var i =0; i < gameLetters.length; i++) {   
        $("#gameLetters").append(wordLength[i] = "_ ");             

                
}
                        
                // This is the user interface/keyboard jquery
for (var j = 0; j < letters.length; j++) {
        
        var letterBtn = $("<button>" + letters[j] + "</button>");
        
        letterBtn.attr("class", "letter-button letter letter-button-color");
        letterBtn.attr("dataletter", letters[j]);

        $("#buttons").append(letterBtn);     
        // $("#buttons").on("click", letters[j]);
        $("button").on("click", function() {
                console.log($(this).text());
        });
        
}

                            
       
        // var userGuess = []; 
        
        //         $("button").on("click", function() {
        //         // console.log($(this).text());
        //         // console.log(userGuess);
        //         // console.log(gameLetters);
                
        //         // console.log(button.val);

                        
        // });

      

        // $("button").on("click", function() {

        //         if (gameLetters[i] != this) {
        //         //        
        //                 console.log("correct guess");
        //         };
        //         // console.log($(this).text());     

       
        // })     // else if ()

                //         $(this).addClass("letter-invis");
                // }        
                
                //         console.log((this).innerHTML);
                        // console.log($(this).text())
                        
});                
        

// buttons need to register a data point or value. Once a value is returned we can compare it to the letters in the "RAND" word 
// (does that mean the data is stored in an empty array?)            
// Need to check for correct characters in word, and then print in the correct position
// is user guess equal to any character in string...show 
// number of failures will be reflected by imgs in gallows section
// letters already guessed
// start over or reset

// 
// });