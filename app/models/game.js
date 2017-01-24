var db = require('../config');
require('./match.js');
require('./user.js');

var Game = db.Model.extend({
  tableName: 'games',
  hasTimestamps: true,
  matches: function () {
    return this.hasMany('Match');
  },
  user: function() {
    return this.belongsTo('User', 'userId');
  },
  initialize: function() {
    
  }
});

module.exports = db.model('Game', Game);
