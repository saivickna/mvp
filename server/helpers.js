var jwt = require('jwt-simple');
var User = require('../app/models/user');
var Users = require('../app/collections/users');
module.exports = {
  errorLogger: function (error, req, res, next) {
    // log the error then send it to the next middleware in
    console.error(error.stack);
    next(error);
  },
  errorHandler: function (error, req, res, next) {
    // send error message to client
    // message for gracefull error handling on app
    res.status(500).send({error: error.message});
  },

  decode: function (req, res, next) {
    var token = req.headers['x-access-token'];
    var user;

    if (!token) {
      return res.send(403); // send forbidden if a token is not provided
    }

    try {
      // decode token and attach user to the request
      // for use inside our controllers
      user = jwt.decode(token, 'secret');
      req.user = user;
      next();
    } catch (error) {
      return next(error);
    }

  },

  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.query(function (qb) {
     qb.where({'username': username});
    }).fetch()
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePassword(password)
            .then(function (foundUser) {
              if (foundUser) {
                var token = jwt.encode(user, 'secret');
                res.json({token: token});
              } else {
                return next(new Error('No user'));
              }
            });
        }
      })
      .catch(function (error) {
        next(error);
      });
  },

  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // check to see if user already exists
    User.query(function (qb) {
     qb.where({'username': username});
    }).fetch()
      .then(function (user) {
        if (user) {
          next(new Error('User already exist!'));
        } else {
          // make a new user if not one
          return Users.create({username: username, password: password});
        }
      })
      .then(function (user) {
        // create token to send back for auth
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
      })
      .catch(function (error) {
        next(error);
      });
  },

  checkAuth: function (req, cb) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if ((token !== undefined) && (token !== 'undefined')) {
      var user = jwt.decode(token, 'secret');
      User.query(function (qb) {
           qb.where({'username': user.username});
          }).fetch()
        .then(function (foundUser) {
          cb(foundUser);
        });
    } else {
      cb(null);
    }
  }
};