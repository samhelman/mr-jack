class AlibiCard {
  constructor(name, colour, hourglasses) {
    this._name = name,
    this._colour = colour,
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

module.exports = AlibiCard