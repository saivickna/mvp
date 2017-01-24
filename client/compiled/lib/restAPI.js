'use strict';

var getHeaders = function getHeaders() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
  myHeaders.append('x-access-token', window.localStorage.getItem('com.avalon'));
  return myHeaders;
};

var postPlayer = function postPlayer(player, callback) {

  // var myHeaders = new Headers();
  // myHeaders.append('Content-Type', 'application/json');
  // myHeaders.append('access-control-allow-origin', '*');
  var myHeaders = getHeaders();
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

var postSignup = function postSignup(user, callback) {

  var myHeaders = getHeaders();
  var myInit = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(user)
  };
  fetch('http://127.0.0.1:4568/signup', myInit).then(function (response) {
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

var postSignin = function postSignin(user, callback) {

  var myHeaders = getHeaders();
  var myInit = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(user)
  };
  fetch('http://127.0.0.1:4568/signin', myInit).then(function (response) {
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
  var myHeaders = getHeaders();
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

var getMatches = function getMatches(callback) {
  var myHeaders = getHeaders();
  var myInit = {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders
  };
  fetch('http://127.0.0.1:4568/matches', myInit).then(function (response) {
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

var getGames = function getGames(callback) {
  var myHeaders = getHeaders();
  var myInit = {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders
  };
  fetch('http://127.0.0.1:4568/games', myInit).then(function (response) {
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
  var myHeaders = getHeaders();
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
window.getMatches = getMatches;
window.getGames = getGames;
window.postSignup = postSignup;
window.postSignin = postSignin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXN0QVBJLmpzIl0sIm5hbWVzIjpbImdldEhlYWRlcnMiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBvc3RQbGF5ZXIiLCJwbGF5ZXIiLCJjYWxsYmFjayIsIm15SW5pdCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsInJlcyIsImNhdGNoIiwicG9zdFNpZ251cCIsInVzZXIiLCJwb3N0U2lnbmluIiwiZ2V0UGxheWVycyIsImdldE1hdGNoZXMiLCJnZXRHYW1lcyIsInBvc3RHYW1lIiwiZ2FtZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLEdBQVk7QUFDM0IsTUFBSUMsWUFBWSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELFlBQVVFLE1BQVYsQ0FBaUIsY0FBakIsRUFBaUMsa0JBQWpDO0FBQ0FGLFlBQVVFLE1BQVYsQ0FBaUIsNkJBQWpCLEVBQWdELEdBQWhEO0FBQ0FGLFlBQVVFLE1BQVYsQ0FBaUIsZ0JBQWpCLEVBQW1DQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixZQUE1QixDQUFuQztBQUNBLFNBQU9MLFNBQVA7QUFDRCxDQU5EOztBQVFBLElBQUlNLGFBQWEsU0FBYkEsVUFBYSxDQUFVQyxNQUFWLEVBQWtCQyxRQUFsQixFQUE0Qjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsTUFBSVIsWUFBWUQsWUFBaEI7QUFDQSxNQUFJVSxTQUFTO0FBQ1hDLFlBQVEsTUFERztBQUVYQyxVQUFNLE1BRks7QUFHWEMsYUFBU1osU0FIRTtBQUlYYSxVQUFNQyxLQUFLQyxTQUFMLENBQWVSLE1BQWY7QUFKSyxHQUFiO0FBTUFTLFFBQU0sK0JBQU4sRUFBdUNQLE1BQXZDLEVB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ZWFkZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgbXlIZWFkZXJzLmFwcGVuZCgnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJywgJyonKTtcclxuICBteUhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tLmF2YWxvbicpKTtcclxuICByZXR1cm4gbXlIZWFkZXJzO1xyXG59XHJcblxyXG52YXIgcG9zdFBsYXllciA9IGZ1bmN0aW9uIChwbGF5ZXIsIGNhbGxiYWNrKSB7XHJcblxyXG4gIC8vIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIC8vIG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgLy8gbXlIZWFkZXJzLmFwcGVuZCgnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJywgJyonKTtcclxuICB2YXIgbXlIZWFkZXJzID0gZ2V0SGVhZGVycygpO1xyXG4gIHZhciBteUluaXQgPSB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIG1vZGU6ICdjb3JzJyxcclxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBsYXllcilcclxuICB9XHJcbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9wbGF5ZXJzJywgbXlJbml0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjYWxsYmFjayhyZXMpOyB9XHJcbiAgICAgICAgKS5jYXRjaChlcnIgPT4ge2NhbGxiYWNrKCd1bmRlZmluZWQnKX0pO1xyXG4gICAgICBjYWxsYmFjayhyZXNwb25zZS5ib2R5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxiYWNrKCd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuICB9KS5jYXRjaCAoZXJyID0+IGNhbGxiYWNrKCd1bmRlZmluZWQnKSk7XHJcbn1cclxuXHJcbnZhciBwb3N0U2lnbnVwID0gZnVuY3Rpb24gKHVzZXIsIGNhbGxiYWNrKSB7XHJcblxyXG4gIHZhciBteUhlYWRlcnMgPSBnZXRIZWFkZXJzKCk7XHJcbiAgdmFyIG15SW5pdCA9IHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICB9XHJcbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9zaWdudXAnLCBteUluaXQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrKHJlcyk7IH1cclxuICAgICAgICApLmNhdGNoKGVyciA9PiB7Y2FsbGJhY2soJ3VuZGVmaW5lZCcpfSk7XHJcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2soJ3VuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gIH0pLmNhdGNoIChlcnIgPT4gY2FsbGJhY2soJ3VuZGVmaW5lZCcpKTtcclxufVxyXG5cclxudmFyIHBvc3RTaWduaW4gPSBmdW5jdGlvbiAodXNlciwgY2FsbGJhY2spIHtcclxuXHJcbiAgdmFyIG15SGVhZGVycyA9IGdldEhlYWRlcnMoKTtcclxuICB2YXIgbXlJbml0ID0ge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBtb2RlOiAnY29ycycsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gIH1cclxuICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0NTY4L3NpZ25pbicsIG15SW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2socmVzKTsgfVxyXG4gICAgICAgICkuY2F0Y2goZXJyID0+IHtjYWxsYmFjaygndW5kZWZpbmVkJyl9KTtcclxuICAgICAgY2FsbGJhY2socmVzcG9uc2UuYm9keSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjaygndW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgfSkuY2F0Y2ggKGVyciA9PiBjYWxsYmFjaygndW5kZWZpbmVkJykpO1xyXG59XHJcblxyXG52YXIgZ2V0UGxheWVycyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gIHZhciBteUhlYWRlcnMgPSBnZXRIZWFkZXJzKCk7XHJcbiAgdmFyIG15SW5pdCA9IHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBtb2RlOiAnY29ycycsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnNcclxuICB9XHJcbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9wbGF5ZXJzJywgbXlJbml0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjYWxsYmFjayhyZXMpOyB9XHJcbiAgICAgICAgKS5jYXRjaChlcnIgPT4ge2NhbGxiYWNrKCd1bmRlZmluZWQnKX0pO1xyXG4gICAgICBjYWxsYmFjayhyZXNwb25zZS5ib2R5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxiYWNrKCd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuICB9KS5jYXRjaCAoZXJyID0+IGNhbGxiYWNrKCd1bmRlZmluZWQnKSk7XHJcbn1cclxuXHJcbnZhciBnZXRNYXRjaGVzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgdmFyIG15SGVhZGVycyA9IGdldEhlYWRlcnMoKTtcclxuICB2YXIgbXlJbml0ID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIG1vZGU6ICdjb3JzJyxcclxuICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gIH1cclxuICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0NTY4L21hdGNoZXMnLCBteUluaXQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrKHJlcyk7IH1cclxuICAgICAgICApLmNhdGNoKGVyciA9PiB7Y2FsbGJhY2soJ3VuZGVmaW5lZCcpfSk7XHJcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2soJ3VuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gIH0pLmNhdGNoIChlcnIgPT4gY2FsbGJhY2soJ3VuZGVmaW5lZCcpKTtcclxufVxyXG5cclxudmFyIGdldEdhbWVzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgdmFyIG15SGVhZGVycyA9IGdldEhlYWRlcnMoKTtcclxuICB2YXIgbXlJbml0ID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIG1vZGU6ICdjb3JzJyxcclxuICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gIH1cclxuICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0NTY4L2dhbWVzJywgbXlJbml0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjYWxsYmFjayhyZXMpOyB9XHJcbiAgICAgICAgKS5jYXRjaChlcnIgPT4ge2NhbGxiYWNrKCd1bmRlZmluZWQnKX0pO1xyXG4gICAgICBjYWxsYmFjayhyZXNwb25zZS5ib2R5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxiYWNrKCd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuICB9KS5jYXRjaCAoZXJyID0+IGNhbGxiYWNrKCd1bmRlZmluZWQnKSk7XHJcbn1cclxuXHJcbnZhciBwb3N0R2FtZSA9IChnYW1lLCBjYWxsYmFjaykgPT4ge1xyXG4gIHZhciBteUhlYWRlcnMgPSBnZXRIZWFkZXJzKCk7XHJcbiAgdmFyIG15SW5pdCA9IHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ2FtZSlcclxuICB9XHJcbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9nYW1lcycsIG15SW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gcmVzcG9uc2UuanNvbi50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAvLyAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xyXG4gICAgfVxyXG4gIH0pLmNhdGNoIChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn1cclxuXHJcbndpbmRvdy5wb3N0UGxheWVyID0gcG9zdFBsYXllcjtcclxud2luZG93LnBvc3RHYW1lID0gcG9zdEdhbWU7XHJcbndpbmRvdy5nZXRQbGF5ZXJzID0gZ2V0UGxheWVycztcclxud2luZG93LmdldE1hdGNoZXMgPSBnZXRNYXRjaGVzO1xyXG53aW5kb3cuZ2V0R2FtZXMgPSBnZXRHYW1lcztcclxud2luZG93LnBvc3RTaWdudXAgPSBwb3N0U2lnbnVwO1xyXG53aW5kb3cucG9zdFNpZ25pbiA9IHBvc3RTaWduaW47Il19