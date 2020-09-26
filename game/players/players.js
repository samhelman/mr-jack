class Player {
  constructor(role) {
    this._role = role
  };
  get name() {
    return this._name;
  };
  get role() {
    return this._role;
  };
  set name(name) {
    this._name = name;
  };
};

module.exports = Player;