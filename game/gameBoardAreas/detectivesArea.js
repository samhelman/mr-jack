class DetectivesArea {
  constructor() {
    this._positions = {
      watson: 3,
      dog: 7,
      sherlock: 11
    };
  };
  get positions() {
    return this._positions;
  };
  moveDetective(detective, distance) {
    this._positions[detective] += distance;
    this._positions[detective] %= 12;
  }
};

module.exports = DetectivesArea;