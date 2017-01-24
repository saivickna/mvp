var postPlayer = function (player, callback) {

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
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

var getPlayers = function (callback) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
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

var postGame = (game, callback) => {
  var myInit = {
    method: 'POST',
    headers: (new Headers()).append('Content-Type', 'application/json'),
    body: JSON.stringify(game)
  }
  fetch('http://localhost:4568/games', myInit).then(function(response) {
    if (response.ok) {
      response.json.then(function(data) {
        callback(data);
      });
    } else {
      console.log('Network response was not ok');
    }
  });
}

window.postPlayer = postPlayer;
window.postGame = postGame;
window.getPlayers = getPlayers;