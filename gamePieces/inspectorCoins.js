class InspectorCoin {
  constructor(name, colour, initialPosition) {
    this._name = name,
    this._colour = colour,
    this._position = initialPosition
  };
  get name() {
    return this._name;
  };
  get colour() {
    return this._colour;
  };
  get position() {
    return this._position;
  };
  set position(position) {
    this._position = position;
  };
};

module.exports = InspectorCoin;