class DetectivePosition {
  constructor(detective) {
    if (detective) {
      this._detective = detective;
    } else {
      this._detective = false;
    }
  };
  get potentiallyVisiblePositions() {
    return this._potentiallyVisiblePositions;
  };
  set moveDetectiveInToPosition(detective) {
    this._detective = detective;
  };
};

class DetectivesArea {
  constructor(sherlockCoin, watsonCoin, dogCoin) {
    this._positions = [
      new DetectivePosition(false),
      new DetectivePosition(false),
      new DetectivePosition(false),
      new DetectivePosition(watsonCoin),
      new DetectivePosition(false),
      new DetectivePosition(false),
      new DetectivePosition(false),
      new DetectivePosition(dogCoin),
      new DetectivePosition(false),
      new DetectivePosition(false),
      new DetectivePosition(false),
      new DetectivePosition(sherlockCoin)
    ];
  };
  get positions() {
    return this._positions;
  };
};

module.exports = DetectivesArea;