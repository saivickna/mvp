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
  var myInit = {
    method: 'POST',
    headers: new Headers().append('Content-Type', 'application/json'),
    body: JSON.stringify(game)
  };
  fetch('http://localhost:4568/games', myInit).then(function (response) {
    if (response.ok) {
      response.json.then(function (data) {
        callback(data);
      });
    } else {
      console.log('Network response was not ok');
    }
  });
};

window.postPlayer = postPlayer;
window.postGame = postGame;
window.getPlayers = getPlayers;
//# sourceMappingURL=data:application/json;base64,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QUFsQjtBQUNBLE9BQU8sVUFBUCxHQUFvQixVQUFwQiIsImZpbGUiOiJyZXN0QVBJLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBvc3RQbGF5ZXIgPSBmdW5jdGlvbiAocGxheWVyLCBjYWxsYmFjaykge1xuXG4gIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBteUhlYWRlcnMuYXBwZW5kKCdhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4nLCAnKicpO1xuICB2YXIgbXlJbml0ID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGxheWVyKVxuICB9XG4gIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjQ1NjgvcGxheWVycycsIG15SW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY2FsbGJhY2socmVzKTsgfVxuICAgICAgICApLmNhdGNoKGVyciA9PiB7Y2FsbGJhY2soJ3VuZGVmaW5lZCcpfSk7XG4gICAgICBjYWxsYmFjayhyZXNwb25zZS5ib2R5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soJ3VuZGVmaW5lZCcpO1xuICAgIH1cbiAgfSkuY2F0Y2ggKGVyciA9PiBjYWxsYmFjaygndW5kZWZpbmVkJykpO1xufVxuXG52YXIgZ2V0UGxheWVycyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgbXlIZWFkZXJzLmFwcGVuZCgnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJywgJyonKTtcbiAgdmFyIG15SW5pdCA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnNcbiAgfVxuICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0NTY4L3BsYXllcnMnLCBteUluaXQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHJlcyk7IH1cbiAgICAgICAgKS5jYXRjaChlcnIgPT4ge2NhbGxiYWNrKCd1bmRlZmluZWQnKX0pO1xuICAgICAgY2FsbGJhY2socmVzcG9uc2UuYm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCd1bmRlZmluZWQnKTtcbiAgICB9XG4gIH0pLmNhdGNoIChlcnIgPT4gY2FsbGJhY2soJ3VuZGVmaW5lZCcpKTtcbn1cblxudmFyIHBvc3RHYW1lID0gKGdhbWUsIGNhbGxiYWNrKSA9PiB7XG4gIHZhciBteUluaXQgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogKG5ldyBIZWFkZXJzKCkpLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShnYW1lKVxuICB9XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQ1NjgvZ2FtZXMnLCBteUluaXQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJlc3BvbnNlLmpzb24udGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG4gIH0pO1xufVxuXG53aW5kb3cucG9zdFBsYXllciA9IHBvc3RQbGF5ZXI7XG53aW5kb3cucG9zdEdhbWUgPSBwb3N0R2FtZTtcbndpbmRvdy5nZXRQbGF5ZXJzID0gZ2V0UGxheWVyczsiXX0=