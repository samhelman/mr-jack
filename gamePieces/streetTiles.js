class StreetTile {
  constructor(Character) {
    this._character = Character,
    //tile sides are indexed starting from the top of the tile and incrementing clockwise.
    this._orientation = 0,
    this._streetEdges = [0, 1, 3]
  };
  get character() {
    return this._character;
  }
  get orientation() {
    return this._orientation;
  };
  get streetEdges() {
    return this._streetEdges;
  };
  set orientation(direction) {
    this._orientation = direction;
  };
  set streetEdges(streetEdge) {
    this._streetEdges.push(streetEdge);
  };
  randomiseOrientation() {
    this._orientation = Math.floor(Math.random() * 4)
    return this._orientation
  }
};

module.exports = StreetTile;