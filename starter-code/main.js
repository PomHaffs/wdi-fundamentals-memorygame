var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} 

var board = document.getElementById('game-board');

function createBoard() {

  for (var x = 0; x < cards.length; x++) {
    
    var cardElement = document.createElement('div');
   
    cardElement.className = 'card';
    
    board.amendChild(cardElement);
 }}
 
console.log(board);