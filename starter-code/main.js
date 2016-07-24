var cards = ['king', 'queen', 'king', 'queen'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {

  for (var x = 0; x < cards.length; x++) {
    
    var cardElement = document.createElement('div');
   
    cardElement.className = 'card';

    cardElement.setAttribute('data-card', cards[x]);
    cardElement.addEventListener('click', isTwoCards);
    
    board.amendChild(cardElement);
    board.amendChild(cardElement);
 }}
 
 function isMatch(cards)	{
 	if (cards[0] === cards[1]) {
 		alert("You have won!");
 	}	else {
 		alert("Sorry, try again.");
 }}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	}	else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];

	}
}
 createBoard();


console.log(board);