var getHeaders = function () {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
  myHeaders.append('x-access-token', window.localStorage.getItem('com.avalon'));
  return myHeaders;
}

var postPlayer = function (player, callback) {

  // var myHeaders = new Headers();
  // myHeaders.append('Content-Type', 'application/json');
  // myHeaders.append('access-control-allow-origin', '*');
  var myHeaders = getHeaders();
  var myInit = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(player)
  }
  fetch('http://127.0.0.1:4568/players', myInit).then(function(response) {
    if (response.ok) {
      response.json().then(res => {
        callback(res); }
        ).catch(err => {callback('undefined')});
      callback(response.body);
    } else {
      callback('undefined');
    }
  }).catch (err => callback('undefined'));
}

var postSignup = function (user, callback) {

  var myHeaders = getHeaders();
  var myInit = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(user)
  }
  fetch('http://127.0.0.1:4568/signup', myInit).then(function(response) {
    if (response.ok) {
      response.json().then(res => {
        callback(res); }
        ).catch(err => {callback('undefined')});
      callback(response.body);
    } else {
      callback('undefined');
    }
  }).catch (err => callback('undefined'));
}

var postSignin = function (user, callback) {

  var myHeaders = getHeaders();
  var myInit = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(user)
  }
  fetch('http://127.0.0.1:4568/signin', myInit).then(function(response) {
    if (response.ok) {
      response.json().then(res => {
        callback(res); }
        ).catch(err => {callback('undefined')});
      callback(response.body);
    } else {
      callback('undefined');
    }
  }).catch (err => callback('undefined'));
}

var getPlayers = function (callback) {
  var myHeaders = getHeaders();
  var myInit = {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders
  }
  fetch('http://127.0.0.1:4568/players', myInit).then(function(response) {
    if (response.ok) {
      response.json().then(res => {
        callback(res); }
        ).catch(err => {callback('undefined')});
      callback(response.body);
    } else {
      callback('undefined');
    }
  }).catch (err => callback('undefined'));
}

var getMatches = function (callback) {
  var myHeaders = getHeaders();
  var myInit = {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders
  }
  fetch('http://127.0.0.1:4568/matches', myInit).then(function(response) {
    if (response.ok) {
      response.json().then(res => {
        callback(res); }
        ).catch(err => {callback('undefined')});
      callback(response.body);
    } else {
      callback('undefined');
    }
  }).catch (err => callback('undefined'));
}

var getGames = function (callback) {
  var myHeaders = getHeaders();
  var myInit = {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders
  }
  fetch('http://127.0.0.1:4568/games', myInit).then(function(response) {
    if (response.ok) {
      response.json().then(res => {
        callback(res); }
        ).catch(err => {callback('undefined')});
      callback(response.body);
    } else {
      callback('undefined');
    }
  }).catch (err => callback('undefined'));
}

var postGame = (game, callback) => {
  var myHeaders = getHeaders();
  var myInit = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(game)
  }
  fetch('http://127.0.0.1:4568/games', myInit).then(function(response) {
    if (response.ok) {
        // response.json.then(function(data) {
        //   callback(data);
        // });
      callback();
    } else {
      console.log('Network response was not ok');
    }
  }).catch (err => console.log(err));
}

window.postPlayer = postPlayer;
window.postGame = postGame;
window.getPlayers = getPlayers;
window.getMatches = getMatches;
window.getGames = getGames;
window.postSignup = postSignup;
window.postSignin = postSignin;