var db = require('../config');
require('./match.js');
require('./user.js');

var Player = db.Model.extend({
  tableName: 'players',
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

module.exports = db.model('Player', Player);