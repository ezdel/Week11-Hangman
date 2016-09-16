var letter = require('./letter.js');
// var wordBank = require('./game.js');

var WordConstructor = function(word){
	this.word = word;
	this.lets = [];
	this.found = false;
	this.getLets = function(word){
		this.word.toUpperCase().split('');
		this.lets.push(this.word);
	};
	this.didWeFindTheWord = function(){
		//if each letter in word has true in their appear property, set this to true
		//else, false
	};
	this.checkIfLetterFound = function(letter, lets){
		for (i=0;i<lets.length;i++){
			if (lets[i] == letter){
				console.log(letter);
			};
		};
	};
	this.wordRender = function(lets){
		//render the word
	};

};
