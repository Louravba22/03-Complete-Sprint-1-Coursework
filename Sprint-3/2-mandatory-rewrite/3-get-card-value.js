
    // replace with your code from key-implement
 


function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (rank === "A") return 11; //rank does not yet exist. Then we declare a variable and at the same time  an assignment.⬆️
  if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  if (!isNaN(rank)) {
    return Number(rank); //If the rank is a number, we can convert it with Number():
  }

  throw new Error("Invalid card rank.");
}
module.exports = getCardValue;