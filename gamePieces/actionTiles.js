class ActionTile {
  constructor(actions) {
    this._actions = actions,
    this._side = 0,
    this._actionUsed = false
  };
  get side() {
    return this._side;
  };
  get actionUsed() {
    return this._actionUsed;
  };
  get availableAction() {
    return this._actions[this._side];
  };
  set side(side) {
    this._side = side;
  };
  set actionUsed(actionUsed) {
    this._actionUsed = actionUsed;
  };
};

module.exports = ActionTile;