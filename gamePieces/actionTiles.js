class ActionTile {
  constructor(actions) {
    this._actions = actions
    this._side = 0,
    this._actionUsed = false
  };
  get side() {
    return this._side;
  };
  get actions() {
    return this._actions;
  };
  get actionUsed() {
    return this._actionUsed;
  };
  set side(side) {
    this._side = side;
  };
  actionUsed() {
    this._actionUsed = true;
  };
  resetActions() {
    this._actionsUsed = false;
  };
  availableAction() {
    return this._actions[this._side];
  };
};

module.exports = ActionTile;