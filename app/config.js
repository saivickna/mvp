var bcrypt = require('bcrypt-nodejs');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'avalon',
    charset  : 'utf8'
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);
db.plugin('registry');

db.knex.schema.hasTable('players').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('players', function (player) {
      player.increments('id').primary();
      player.string('name', 255);
      player.string('cohort', 255);
      player.integer('userId');
      player.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('games').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('games', function (game) {
      game.increments('id').primary();
      game.boolean('win');
      game.string('winType');
      game.integer('userId');
      game.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('matches').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('matches', function (match) {
      match.increments('id').primary();
      match.integer('gameId');
      match.integer('playerId');
      match.boolean('alliance');
      match.string('allianceRole');
      match.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (link) {
      link.increments('id').primary();
      link.string('username');
      link.string('password');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;