class StreetsArea {
  constructor(streetTiles) {
    this._streetTiles = [
      streetTiles[0],
      streetTiles[1],
      streetTiles[2],
      streetTiles[3],
      streetTiles[4],
      streetTiles[5],
      streetTiles[6],
      streetTiles[7],
      streetTiles[8]
    ];
  };
  get streetTiles() {
    return this._streetTiles;
  };
  exchangeTiles(index1, index2) {
    let temp = this._streetTiles[index1];
    this._streetTiles[index1] = this._streetTiles[index2];
    this._streetTiles[index2] = temp;
  }
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleStreets() {
  for (var i = this.streetTiles.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.streetTiles[i];
      this.streetTiles[i] = this.streetTiles[j];
      this.streetTiles[j] = temp;
  }
}
};

module.exports = StreetsArea;