var db = require('../config');
require('./game.js');
require('./player.js');

var Match = db.Model.extend({
  tableName: 'matches',
  hasTimestamps: true,
  games: function() {
    return this.belongsTo('Game', 'gameId');
  },
  players: function() {
    return this.belongsTo('Player', 'playerId');
  },
  initialize: function() {

  }
});

module.exports = db.model('Match', Match);