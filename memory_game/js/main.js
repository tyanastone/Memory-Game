

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch () {
    if(cardsInPlay[0] === cardsInPlay[1]){
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard (cardId){

        checkForMatch();
    if (cardsInPlay.length === 2){
        cardsInPlay[0]
        alert("You found a match!");
    }
    else {
        cardsInPlay[2]
        alert("Sorry, try again");
    }
    console.log("User flipped" + cards[cardId]);
}

flipCard(0);
flipCard(2);