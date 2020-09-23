class StreetTile {
  constructor(name, colour, initialPosition) {
    this._name = name,
    this._colour = colour,
    this._position = initialPosition,
    this._orientation = 'N',
    this._streetEdges = ['N', 'W', 'E'],
    this._isSuspect = true
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
  get orientation() {
    return this._orientation;
  };
  get streetEdges() {
    return this._streetEdges;
  };
  get isSuspect() {
    return this._isSuspect;
  };
  set position(position) {
    this._position = position;
  };
  set orientation(direction) {
    this._orientation = direction;
  };
  set streetEdges(streetEdge) {
    this._streetEdges.push(streetEdge);
  };
  set isSuspect(boolean) {
    this._isSuspect = boolean;
  };
};

module.exports = StreetTile;