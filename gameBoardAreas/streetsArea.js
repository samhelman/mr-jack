class TilePosition {
  constructor(tile) {
    this._tile = tile
  };
  get tile() {
    return this._tile;
  };
};

class StreetsArea {
  constructor(streetTiles) {
    this._positions = [
      new TilePosition(streetTiles[0]),
      new TilePosition(streetTiles[1]),
      new TilePosition(streetTiles[2]),
      new TilePosition(streetTiles[3]),
      new TilePosition(streetTiles[4]),
      new TilePosition(streetTiles[5]),
      new TilePosition(streetTiles[6]),
      new TilePosition(streetTiles[7]),
      new TilePosition(streetTiles[8])
    ];
  };
  get positions() {
    return this._positions;
  };
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleStreets() {
  for (var i = this.positions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.positions[i];
      this.positions[i] = this.positions[j];
      this.positions[j] = temp;
  }
}
};

module.exports = StreetsArea;