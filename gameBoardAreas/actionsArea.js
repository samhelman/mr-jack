class ActionPosition {
  constructor(actionTile) {
    this._actionTile = actionTile
  };
  get actionTile() {
    return this._actionTile;
  };
};

class ActionsArea {
  constructor(actionTiles) {
    this._positions = [
      new ActionPosition(actionTiles[0]),
      new ActionPosition(actionTiles[1]),
      new ActionPosition(actionTiles[2]),
      new ActionPosition(actionTiles[3])
    ]
  };
  get positions() {
    return this._positions;
  };
};

module.exports = ActionsArea;