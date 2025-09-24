document.addEventListener("DOMContentLoaded", () => {
	console.log("document successfully loaded")

	const randomDeckOfCards = makeDeckOfCards();
	console.log("random Deck: ", makeDeckOfCards());

	//TODO: make them random

	console.log(Math.floor(Math.random() * 52));

	randomDeckOfCards.forEach((card) => {
	let cardP = document.createElement('P');
	cardP.ClassName("text-wrap");
	cardP.innerText(card);
	console.log(cardP);
	document.getElementById('stackOfCards').append(card[4])
}
);


}
);

function makeDeckOfCards() {

	//make 52 cards, 4 suits, 13 per

	//var = ... let or const

	// hard code = const deck = [[kheart, qheart, jheart], [kspades...]]

	const suits = ["♥️", "♠️", "♣️", "♦️"]
	let deckOfCards = []; //initialize empty array

	for (i = 0; i <= 13; i++) {
		suits.forEach((suit) => {
			//console.log(suit, i);
			deckOfCards.push(suit + i);
		});
	}
}

