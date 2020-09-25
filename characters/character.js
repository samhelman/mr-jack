class Character {
  constructor(name, colour) {
    this._name = name,
    this._colour = colour,
    this._isSuspect = true
  };
  get name() {
    return this._name;
  };
  get colour() {
    return this._colour;
  };
  get isSuspect() {
    return this._isSuspect;
  };
  set isSuspect(bool) {
    this._isSuspect = bool;
  }
};

module.exports = Character;