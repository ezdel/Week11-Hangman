var promptly = require('promptly');
var letter = require('./word.js');
var wordBank = require('./game.js');

// var guesses = 9;

// var guessLetter = function() {
// 	promptly.prompt("Guess a Letter", function(err, guess){
// 		console.log(guess);
// 	});
// };

var game = {
	wordBank: wordBank.words,
	wordsWon: 0,
	guessesRemaining: 9,
	word: wordConstructor.word, //word object
	startGame: function(word){
		resetGuessRemaing();
		var chosen = words[Math.floor(Math.random() * words.length)];
		chosen = chosen.toUpperCase().split('');
	},
	resetGuessRemaing: function(guessesRemaining){
		guessesRemaining = 9;
	},
	keepPromptingUser: function(){
		promptly.prompt("Guess a Letter", function(err, guess){
			console.log(guess);
		});
		checkIfLetterFound(guess, lets);
	}

}
