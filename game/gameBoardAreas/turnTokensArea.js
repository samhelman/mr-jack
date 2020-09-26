class TurnTokenDeck {
  constructor(turnTokens) {
    this._turnTokens = turnTokens
  };
  get turnTokens() {
    return this._turnTokens;
  };
  drawToken() {
    if (this._turnTokens) {
      const token = this._turnTokens[0];
      this._turnTokens.splice(0,1);
      return token;
    }
    return false;
  };
};

module.exports = TurnTokenDeck;