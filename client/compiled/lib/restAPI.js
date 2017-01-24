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

var getMatches = function getMatches(callback) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
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
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('access-control-allow-origin', '*');
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
window.getMatches = getMatches;
window.getGames = getGames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXN0QVBJLmpzIl0sIm5hbWVzIjpbInBvc3RQbGF5ZXIiLCJwbGF5ZXIiLCJjYWxsYmFjayIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJteUluaXQiLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJyZXMiLCJjYXRjaCIsImdldFBsYXllcnMiLCJnZXRNYXRjaGVzIiwiZ2V0R2FtZXMiLCJwb3N0R2FtZSIsImdhbWUiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGFBQWEsU0FBYkEsVUFBYSxDQUFVQyxNQUFWLEVBQWtCQyxRQUFsQixFQUE0Qjs7QUFFM0MsTUFBSUMsWUFBWSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELFlBQVVFLE1BQVYsQ0FBaUIsY0FBakIsRUFBaUMsa0JBQWpDO0FBQ0FGLFlBQVVFLE1BQVYsQ0FBaUIsNkJBQWpCLEVBQWdELEdBQWhEO0FBQ0EsTUFBSUMsU0FBUztBQUNYQyxZQUFRLE1BREc7QUFFWEMsVUFBTSxNQUZLO0FBR1hDLGFBQVNOLFNBSEU7QUFJWE8sVUFBTUMsS0FBS0MsU0FBTCxDQUFlWCxNQUFmO0FBSkssR0FBYjtBQU1BWSxRQUFNLCtCQUFOLEVBQXVDUCxNQUF2QyxFQUErQ1EsSUFBL0MsQ0FBb0QsVUFBU0MsUUFBVCxFQUFtQjtBQUNyRSxRQUFJQSxTQUFTQyxFQUFiLEVBQWlCO0FBQ2ZELGVBQVNFLElBQVQsR0FBZ0JILElBQWhCLENBQXFCLGVBQU87QUFDMUJaLGlCQUFTZ0IsR0FBVDtBQUFnQixPQURsQixFQUVJQyxLQUZKLENBRVUsZUFBTztBQUFDakIsaUJBQVMsV0FBVDtBQUFzQixPQUZ4QztBQUdBQSxlQUFTYSxTQUFTTCxJQUFsQjtBQUNELEtBTEQsTUFLTztBQUNMUixlQUFTLFdBQVQ7QUFDRDtB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LFdBQU9qQixTQUFTLFdBQVQsQ0FBUDtBQUFBLEdBVFY7QUFVRCxDQW5CRDs7QUFxQkEsSUFBSXFCLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQU90QixRQUFQLEVBQW9CO0FBQ2pDLE1BQUlDLFlBQVksSUFBSUMsT0FBSixFQUFoQjtBQUNBRCxZQUFVRSxNQUFWLENBQWlCLGNBQWpCLEVBQWlDLGtCQUFqQztBQUNBRixZQUFVRSxNQUFWLENBQWlCLDZCQUFqQixFQUFnRCxHQUFoRDtBQUNBLE1BQUlDLFNBQVM7QUFDWEMsWUFBUSxNQURHO0FBRVhDLFVBQU0sTUFGSztBQUdYQyxhQUFTTixTQUhFO0FBSVhPLFVBQU1DLEtBQUtDLFNBQUwsQ0FBZVksSUFBZjtBQUpLLEdBQWI7QUFNQVgsUUFBTSw2QkFBTixFQUFxQ1AsTUFBckMsRUFBNkNRLElBQTdDLENBQWtELFVBQVNDLFFBQVQsRUFBbUI7QUFDbkUsUUFBSUEsU0FBU0MsRUFBYixFQUFpQjtBQUNiO0FBQ0E7QUFDQTtBQUNGZDtBQUNELEtBTEQsTUFLTztBQUNMdUIsY0FBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0Q7QUFDRixHQVRELEVBU0dQLEtBVEgsQ0FTVTtBQUFBLFdBQU9NLFFBQVFDLEdBQVIsQ0FBWUMsR0FBWixDQUFQO0FBQUEsR0FUVjtBQVVELENBcEJEOztBQXNCQUMsT0FBTzVCLFVBQVAsR0FBb0JBLFVBQXBCO0FBQ0E0QixPQUFPTCxRQUFQLEdBQWtCQSxRQUFsQjtBQUNBSyxPQUFPUixVQUFQLEdBQW9CQSxVQUFwQjtBQUNBUSxPQUFPUCxVQUFQLEdBQW9CQSxVQUFwQjtBQUNBTyxPQUFPTixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJyZXN0QVBJLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBvc3RQbGF5ZXIgPSBmdW5jdGlvbiAocGxheWVyLCBjYWxsYmFjaykge1xyXG5cclxuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICBteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gIG15SGVhZGVycy5hcHBlbmQoJ2FjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbicsICcqJyk7XHJcbiAgdmFyIG15SW5pdCA9IHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGxheWVyKVxyXG4gIH1cclxuICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0NTY4L3BsYXllcnMnLCBteUluaXQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrKHJlcyk7IH1cclxuICAgICAgICApLmNhdGNoKGVyciA9PiB7Y2FsbGJhY2soJ3VuZGVmaW5lZCcpfSk7XHJcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2soJ3VuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gIH0pLmNhdGNoIChlcnIgPT4gY2FsbGJhY2soJ3VuZGVmaW5lZCcpKTtcclxufVxyXG5cclxudmFyIGdldFBsYXllcnMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICBteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gIG15SGVhZGVycy5hcHBlbmQoJ2FjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbicsICcqJyk7XHJcbiAgdmFyIG15SW5pdCA9IHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBtb2RlOiAnY29ycycsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnNcclxuICB9XHJcbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9wbGF5ZXJzJywgbXlJbml0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjYWxsYmFjayhyZXMpOyB9XHJcbiAgICAgICAgKS5jYXRjaChlcnIgPT4ge2NhbGxiYWNrKCd1bmRlZmluZWQnKX0pO1xyXG4gICAgICBjYWxsYmFjayhyZXNwb25zZS5ib2R5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxiYWNrKCd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuICB9KS5jYXRjaCAoZXJyID0+IGNhbGxiYWNrKCd1bmRlZmluZWQnKSk7XHJcbn1cclxuXHJcbnZhciBnZXRNYXRjaGVzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgbXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICBteUhlYWRlcnMuYXBwZW5kKCdhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4nLCAnKicpO1xyXG4gIHZhciBteUluaXQgPSB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzXHJcbiAgfVxyXG4gIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjQ1NjgvbWF0Y2hlcycsIG15SW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2socmVzKTsgfVxyXG4gICAgICAgICkuY2F0Y2goZXJyID0+IHtjYWxsYmFjaygndW5kZWZpbmVkJyl9KTtcclxuICAgICAgY2FsbGJhY2socmVzcG9uc2UuYm9keSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjaygndW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgfSkuY2F0Y2ggKGVyciA9PiBjYWxsYmFjaygndW5kZWZpbmVkJykpO1xyXG59XHJcblxyXG52YXIgZ2V0R2FtZXMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICBteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gIG15SGVhZGVycy5hcHBlbmQoJ2FjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbicsICcqJyk7XHJcbiAgdmFyIG15SW5pdCA9IHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBtb2RlOiAnY29ycycsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnNcclxuICB9XHJcbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9nYW1lcycsIG15SW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2socmVzKTsgfVxyXG4gICAgICAgICkuY2F0Y2goZXJyID0+IHtjYWxsYmFjaygndW5kZWZpbmVkJyl9KTtcclxuICAgICAgY2FsbGJhY2socmVzcG9uc2UuYm9keSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjaygndW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgfSkuY2F0Y2ggKGVyciA9PiBjYWxsYmFjaygndW5kZWZpbmVkJykpO1xyXG59XHJcblxyXG52YXIgcG9zdEdhbWUgPSAoZ2FtZSwgY2FsbGJhY2spID0+IHtcclxuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICBteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gIG15SGVhZGVycy5hcHBlbmQoJ2FjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbicsICcqJyk7XHJcbiAgdmFyIG15SW5pdCA9IHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ2FtZSlcclxuICB9XHJcbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2OC9nYW1lcycsIG15SW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gcmVzcG9uc2UuanNvbi50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAvLyAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xyXG4gICAgfVxyXG4gIH0pLmNhdGNoIChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn1cclxuXHJcbndpbmRvdy5wb3N0UGxheWVyID0gcG9zdFBsYXllcjtcclxud2luZG93LnBvc3RHYW1lID0gcG9zdEdhbWU7XHJcbndpbmRvdy5nZXRQbGF5ZXJzID0gZ2V0UGxheWVycztcclxud2luZG93LmdldE1hdGNoZXMgPSBnZXRNYXRjaGVzO1xyXG53aW5kb3cuZ2V0R2FtZXMgPSBnZXRHYW1lczsiXX0=