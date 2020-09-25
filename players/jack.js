const Player = require('./players.js')

class Jack extends Player {
  constructor() {
    super("jack"),
    this._alibiCards = [],
    this._hourglasses = 0
  };
  get alias() {
    return this._alias;
  };
  get alibiCards() {
    return this._alibiCards;
  }
  get hourglasses() {
    return this._hourglasses;
  };
  set alias(alias) {
    this._alias = alias;
  };
  addAlibiCard(alibiCard) {
    this._alibiCards.push(alibiCard);
    this._hourglasses += alibiCard.hourglasses;
  };
};

module.exports = Jack;