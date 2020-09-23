class TurnToken {
  constructor(icon, turnNumber) {
    this._icon = icon,
    this._turnNumber = turnNumber,
    this._hourglasses = 1
  };
  get icon() {
    return this._icon;
  };
  get turnNumber() {
    return this._turnNumber;
  };
  get hourglasses() {
    return this._hourglasses;
  };
};

module.exports = TurnToken;