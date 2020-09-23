class TilePosition {
  constructor(tile, visiblePositions) {
    this._tile = tile,
    this._visiblePositions
  };
  get tile() {
    return this._tile;
  };
  get visiblePositions() {
    return this._visiblePositions;
  };
  set tile(newTile) {
    this._tile = newTile;
  };
};

class StreetArea {
  constructor(streetTiles) {
    this._positions = {
      1: new TilePosition(streetTiles[0], [2,3,4,7]),
      2: new TilePosition(streetTiles[1], [1,3,5,8]),
      3: new TilePosition(streetTiles[2], [2,3,6,9]),
      4: new TilePosition(streetTiles[3], [1,5,6,7]),
      5: new TilePosition(streetTiles[4], [2,4,6,8]),
      6: new TilePosition(streetTiles[5], [3,4,5,9]),
      7: new TilePosition(streetTiles[6], [1,4,8,9]),
      8: new TilePosition(streetTiles[7], [2,5,7,9]),
      9: new TilePosition(streetTiles[8], [3,6,7,8])
    };
  };
  get positions() {
    return this._positions;
  };
};

module.exports = StreetArea;