const Player = require('./players.js')

class Detective extends Player {
  constructor() {
    super("detective")
  };
};

module.exports = Detective;