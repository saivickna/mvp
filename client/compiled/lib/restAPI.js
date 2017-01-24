'use strict';

var postPlayer = function postPlayer(player, callback) {

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
  var myInit = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(player)
  };
  fetch('http://127.0.0.1:4568/players', myInit).then(function (response) {
    if (response.ok) {
      response.json().then(function (res) {
        callback(res);
      }).catch(function (err) {
        callback('undefined');
      });
      callback(response.body);
    } else {
      callback('undefined');
    }
  }).catch(function (err) {
    return callback('undefined');
  });
};

var getPlayers = function getPlayers(callback) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
  var myInit = {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders
  };
  fetch('http://127.0.0.1:4568/players', myInit).then(function (response) {
    if (response.ok) {
      response.json().then(function (res) {
        callback(res);
      }).catch(function (err) {
        callback('undefined');
      });
      callback(response.body);
    } else {
      callback('undefined');
    }
  }).catch(function (err) {
    return callback('undefined');
  });
};

var postGame = function postGame(game, callback) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
  var myInit = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(game)
  };
  fetch('http://127.0.0.1:4568/games', myInit).then(function (response) {
    if (response.ok) {
      // response.json.then(function(data) {
      //   callback(data);
      // });
      callback();
    } else {
      console.log('Network response was not ok');
    }
  }).catch(function (err) {
    return console.log(err);
  });
};

window.postPlayer = postPlayer;
window.postGame = postGame;
window.getPlayers = getPlayers;
//# sourceMappingURL=data:application/json;base64,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R0FBUCxDQVRWLENBVmlDO0NBQXBCOztBQXNCZixPQUFPLFVBQVAsR0FBb0IsVUFBcEI7QUFDQSxPQUFPLFFBQVAsR0FBa0IsUUFBbEI7QUFDQSxPQUFPLFVBQVAsR0FBb0IsVUFBcEIiLCJmaWxlIjoicmVzdEFQSS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwb3N0UGxheWVyID0gZnVuY3Rpb24gKHBsYXllciwgY2FsbGJhY2spIHtcblxuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgbXlIZWFkZXJzLmFwcGVuZCgnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJywgJyonKTtcbiAgdmFyIG15SW5pdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBsYXllcilcbiAgfVxuICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0NTY4L3BsYXllcnMnLCBteUluaXQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHJlcyk7IH1cbiAgICAgICAgKS5jYXRjaChlcnIgPT4ge2NhbGxiYWNrKCd1bmRlZmluZWQnKX0pO1xuICAgICAgY2FsbGJhY2socmVzcG9uc2UuYm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCd1bmRlZmluZWQnKTtcbiAgICB9XG4gIH0pLmNhdGNoIChlcnIgPT4gY2FsbGJhY2soJ3VuZGVmaW5lZCcpKTtcbn1cblxudmFyIGdldFBsYXllcnMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIG15SGVhZGVycy5hcHBlbmQoJ2FjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbicsICcqJyk7XG4gIHZhciBteUluaXQgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczogbXlIZWFkZXJzXG4gIH1cbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9wbGF5ZXJzJywgbXlJbml0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbihyZXMgPT4ge1xuICAgICAgICBjYWxsYmFjayhyZXMpOyB9XG4gICAgICAgICkuY2F0Y2goZXJyID0+IHtjYWxsYmFjaygndW5kZWZpbmVkJyl9KTtcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmJvZHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygndW5kZWZpbmVkJyk7XG4gICAgfVxuICB9KS5jYXRjaCAoZXJyID0+IGNhbGxiYWNrKCd1bmRlZmluZWQnKSk7XG59XG5cbnZhciBwb3N0R2FtZSA9IChnYW1lLCBjYWxsYmFjaykgPT4ge1xuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgbXlIZWFkZXJzLmFwcGVuZCgnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJywgJyonKTtcbiAgdmFyIG15SW5pdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGdhbWUpXG4gIH1cbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9nYW1lcycsIG15SW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAvLyByZXNwb25zZS5qc29uLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAvLyB9KTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG4gIH0pLmNhdGNoIChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG59XG5cbndpbmRvdy5wb3N0UGxheWVyID0gcG9zdFBsYXllcjtcbndpbmRvdy5wb3N0R2FtZSA9IHBvc3RHYW1lO1xud2luZG93LmdldFBsYXllcnMgPSBnZXRQbGF5ZXJzOyJdfQ==