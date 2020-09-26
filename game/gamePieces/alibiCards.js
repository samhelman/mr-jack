class AlibiCard {
  constructor(Character, hourglasses) {
    this._name = Character.name,
    this._colour = Character.colour,
    this._hourglasses = hourglasses
  };
  get name() {
    return this._name;
  };
  get colour() {
    return this._colour;
  }
  get hourglasses() {
    return this._hourglasses;
  };
};

module.exports = AlibiCard;