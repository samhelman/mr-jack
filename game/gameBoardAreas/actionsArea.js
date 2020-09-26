class ActionsArea {
  constructor(actionTokens) {
    this._actionTokens = actionTokens;
  };
  get actionTokens() {
    return this._actionTokens;
  };
  get availableActions() {
    let availableActions = [
      this._actionTokens[0].availableAction,
      this._actionTokens[1].availableAction,
      this._actionTokens[2].availableAction,
      this._actionTokens[3].availableAction
    ]
    return availableActions;
  };

  flipTokens() {
    this._actionTokens.forEach(token => {
      token.side = Math.floor(Math.random() * 2);
    });
  };
  
  toggleTokens() {
    this._actionTokens.forEach(token => {
      if (token.side == 1) {
        token.side = 0;
      } else {
        token.side = 1;
      };
    });
  };
};

module.exports = ActionsArea;