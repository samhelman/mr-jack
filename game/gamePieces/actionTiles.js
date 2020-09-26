class ActionTile {
  constructor(actions) {
    this._actions = actions,
    this._side = 0
  };
  get side() {
    return this._side;
  };
  get actions() {
    return this._actions;
  };
  set side(side) {
    this._side = side;
  };
  get availableAction() {
    return this._actions[this._side];
  };
};

module.exports = ActionTile;