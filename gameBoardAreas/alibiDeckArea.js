class AlibiDeck {
  constructor(alibiCards) {
    this._alibiCards = alibiCards;
    this._numOfCardsInDeck = alibiCards.length
  };
  get alibiCards() {
    return this._alibiCards;
  };
  drawAlibiCard() {
    if (this._numOfCardsInDeck > 0) {
      const index = Math.floor(Math.random() * this._numOfCardsInDeck);
      const cardDrawn = this._alibiCards[index];
      this._alibiCards.splice(index, 1);
      this._numOfCardsInDeck -= 1;
      return cardDrawn;
    } else {
      return null;
    };
  };
};

module.exports = AlibiDeck;