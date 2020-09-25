class TurnTokenDeck {
  constructor(turnTokens) {
    this._turnTokens = turnTokens
  };
  get turnTokens() {
    return this._turnTokens;
  };
  get drawTurnToken() {
    const token = this._turnTokens[0];
    this._turnTokens.splice(0,1);
    return token;
  };
};

module.exports = TurnTokenDeck;