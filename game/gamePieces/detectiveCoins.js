class DetectiveCoin {
  constructor(name, colour) {
    this._name = name,
    this._colour = colour
  };
  get name() {
    return this._name;
  };
  get colour() {
    return this._colour;
  };
};

module.exports = DetectiveCoin;