var game = require('./game.js');

var letterSelected = function(letter){
	this.letter = letter;
	this.letterAppear = false;
	this.letterCheck = function(){
		if (letterAppear = false){
			console.log('_');
		}
		else {
			console.log(letter);
		};
	};
};

// var Blanks = function (length, chosen){
// 	this.chosen = chosen,
// 	this.length = length,
// 	this.blankCreator = function(){
// 		for (i=0; i<this.length; i++){
// 			var blanks = this.chosen[i].replace('_');
// 		};
// 	};
// };
//console.log(Blanks.blankCreator);
module.exports = letterSelected;