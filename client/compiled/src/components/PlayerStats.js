"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerStats = function (_React$Component) {
  _inherits(PlayerStats, _React$Component);

  function PlayerStats(props) {
    _classCallCheck(this, PlayerStats);

    var _this = _possibleConstructorReturn(this, (PlayerStats.__proto__ || Object.getPrototypeOf(PlayerStats)).call(this, props));

    _this.state = {
      players: []
    };
    return _this;
  }

  _createClass(PlayerStats, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      window.getMatches(function (body) {
        if (body === 'undefined') {} else {
          var player = {};
          for (var x in body) {
            if (!player[body[x].playerId]) {
              player[body[x].playerId] = { wins: 0, losses: 0, name: body[x].players.name, arthurWins: 0, mordredWins: 0 };
            }
            if (body[x].games.win === body[x].alliance) {
              player[body[x].playerId].wins++;
              if (body[x].alliance === 0) {
                player[body[x].playerId].arthurWins++;
              } else {
                player[body[x].playerId].mordredWins++;
              }
            } else {
              player[body[x].playerId].losses++;
            }
          }
          var playerList = [];
          for (var x in player) {
            playerList.push(player[x]);
          }
          self.setState({ players: playerList });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row clearfix playerstats" },
        React.createElement(
          "div",
          { className: "col-md-12 column" },
          React.createElement(
            "table",
            { id: "example", className: "table table-bordered table-hover", cellSpacing: "0", width: "100%" },
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "th",
                  null,
                  "Name"
                ),
                React.createElement(
                  "th",
                  null,
                  "Wins"
                ),
                React.createElement(
                  "th",
                  null,
                  "Losses"
                ),
                React.createElement(
                  "th",
                  null,
                  "Good Guy Wins"
                ),
                React.createElement(
                  "th",
                  null,
                  "Bad Guy Wins"
                )
              )
            ),
            React.createElement(
              "tbody",
              null,
              this.state.players.map(function (player) {
                return React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    null,
                    player.name
                  ),
                  React.createElement(
                    "td",
                    null,
                    player.wins
                  ),
                  React.createElement(
                    "td",
                    null,
                    player.losses
                  ),
                  React.createElement(
                    "td",
                    null,
                    player.arthurWins
                  ),
                  React.createElement(
                    "td",
                    null,
                    player.mordredWins
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return PlayerStats;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllclN0YXRzLmpzeCJdLCJuYW1lcyI6WyJQbGF5ZXJTdGF0cyIsInByb3BzIiwic3RhdGUiLCJwbGF5ZXJzIiwic2VsZiIsIndpbmRvdyIsImdldE1hdGNoZXMiLCJib2R5IiwicGxheWVyIiwieCIsInBsYXllcklkIiwid2lucyIsImxvc3NlcyIsIm5hbWUiLCJhcnRodXJXaW5zIiwibW9yZHJlZFdpbnMiLCJnYW1lcyIsIndpbiIsImFsbGlhbmNlIiwicGxheWVyTGlzdCIsInB1c2giLCJzZXRTdGF0ZSIsIm1hcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FDb0I7QUFDbkIsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGFBQU9DLFVBQVAsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLFlBQUlBLFNBQVMsV0FBYixFQUEwQixDQUN6QixDQURELE1BQ087QUFDTCxjQUFJQyxTQUFTLEVBQWI7QUFDQSxlQUFLLElBQUlDLENBQVQsSUFBY0YsSUFBZCxFQUFvQjtBQUNsQixnQkFBSSxDQUFFQyxPQUFPRCxLQUFLRSxDQUFMLEVBQVFDLFFBQWYsQ0FBTixFQUFpQztBQUMvQkYscUJBQU9ELEtBQUtFLENBQUwsRUFBUUMsUUFBZixJQUEyQixFQUFDQyxNQUFLLENBQU4sRUFBU0MsUUFBTyxDQUFoQixFQUFtQkMsTUFBS04sS0FBS0UsQ0FBTCxFQUFRTixPQUFSLENBQWdCVSxJQUF4QyxFQUE4Q0MsWUFBWSxDQUExRCxFQUE2REMsYUFBYSxDQUExRSxFQUEzQjtBQUNEO0FBQ0QsZ0JBQUlSLEtBQUtFLENBQUwsRUFBUU8sS0FBUixDQUFjQyxHQUFkLEtBQXNCVixLQUFLRSxDQUFMLEVBQVFTLFFBQWxDLEVBQTRDO0FBQzFDVixxQkFBT0QsS0FBS0UsQ0FBTCxFQUFRQyxRQUFmLEVBQXlCQyxJQUF6QjtBQUNBLGtCQUFJSixLQUFLRSxDQUFMLEVBQVFTLFFBQVIsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUJWLHVCQUFPRCxLQUFLRSxDQUFMLEVBQVFDLFFBQWYsRUFBeUJJLFVBQXpCO0FBQ0QsZUFGRCxNQUVPO0FBQ0xOLHVCQUFPRCxLQUFLRSxDQUFMLEVBQVFDLFFBQWYsRUFBeUJLLFdBQXpCO0FBQ0Q7QUFDRixhQVBELE1BT087QUFDTFAscUJBQU9ELEtBQUtFLENBQUwsRUFBUUMsUUFBZixFQUF5QkUsTUFBekI7QUFDRDtBQUNGO0FBQ0QsY0FBSU8sYUFBYSxFQUFqQjtBQUNBLGVBQUksSUFBSVYsQ0FBUixJQUFhRCxNQUFiLEVBQXFCO0FBQ25CVyx1QkFBV0MsSUFBWCxDQUFnQlosT0FBT0MsQ0FBUCxDQUFoQjtBQUNEO0FBQ0RMLGVBQUtpQixRQUFMLENBQWMsRUFBQ2xCLFNBQVNnQixVQUFWLEVBQWQ7QUFDRDtBQUNGLE9BekJEO0FBMEJEOzs7NkJBQ1M7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sSUFBRyxTQUFWLEVBQW9CLFdBQVUsa0NBQTlCLEVBQWlFLGFBQVksR0FBN0UsRUFBaUYsT0FBTSxNQUF2RjtBQUNJO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFERixhQURKO0FBVUU7QUFBQTtBQUFBO0FBQ0csbUJBQUtqQixLQUFMLENBQVdDLE9BQVgsQ0FBbUJtQixHQUFuQixDQUF1QjtBQUFBLHVCQUFXO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFLZCwyQkFBT0s7QUFBWixtQkFBSjtBQUEwQjtBQUFBO0FBQUE7QUFBS0wsMkJBQU9HO0FBQVosbUJBQTFCO0FBQWdEO0FBQUE7QUFBQTtBQUFLSCwyQkFBT0k7QUFBWixtQkFBaEQ7QUFBd0U7QUFBQTtBQUFBO0FBQUtKLDJCQUFPTTtBQUFaLG1CQUF4RTtBQUFvRztBQUFBO0FBQUE7QUFBS04sMkJBQU9PO0FBQVo7QUFBcEcsaUJBQVg7QUFBQSxlQUF2QjtBQURIO0FBVkY7QUFERjtBQURGLE9BREY7QUFvQkQ7Ozs7RUF6RHVCUSxNQUFNQyxTIiwiZmlsZSI6IlBsYXllclN0YXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwbGF5ZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB3aW5kb3cuZ2V0TWF0Y2hlcygoYm9keSkgPT4ge1xyXG4gICAgICBpZiAoYm9keSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcGxheWVyID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgeCBpbiBib2R5KSB7XHJcbiAgICAgICAgICBpZiAoIShwbGF5ZXJbYm9keVt4XS5wbGF5ZXJJZF0pKSB7XHJcbiAgICAgICAgICAgIHBsYXllcltib2R5W3hdLnBsYXllcklkXSA9IHt3aW5zOjAsIGxvc3NlczowLCBuYW1lOmJvZHlbeF0ucGxheWVycy5uYW1lLCBhcnRodXJXaW5zOiAwLCBtb3JkcmVkV2luczogMH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYm9keVt4XS5nYW1lcy53aW4gPT09IGJvZHlbeF0uYWxsaWFuY2UpIHtcclxuICAgICAgICAgICAgcGxheWVyW2JvZHlbeF0ucGxheWVySWRdLndpbnMrKztcclxuICAgICAgICAgICAgaWYgKGJvZHlbeF0uYWxsaWFuY2UgPT09IDApIHtcclxuICAgICAgICAgICAgICBwbGF5ZXJbYm9keVt4XS5wbGF5ZXJJZF0uYXJ0aHVyV2lucysrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHBsYXllcltib2R5W3hdLnBsYXllcklkXS5tb3JkcmVkV2lucysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXJbYm9keVt4XS5wbGF5ZXJJZF0ubG9zc2VzKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwbGF5ZXJMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciB4IGluIHBsYXllcikge1xyXG4gICAgICAgICAgcGxheWVyTGlzdC5wdXNoKHBsYXllclt4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe3BsYXllcnM6IHBsYXllckxpc3R9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjbGVhcmZpeCBwbGF5ZXJzdGF0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbHVtblwiPlxyXG4gICAgICAgICAgPHRhYmxlIGlkPVwiZXhhbXBsZVwiIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXCIgY2VsbFNwYWNpbmc9XCIwXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+V2luczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkxvc3NlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkdvb2QgR3V5IFdpbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5CYWQgR3V5IFdpbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBsYXllcnMubWFwKHBsYXllciA9PiAoPHRyPjx0ZD57cGxheWVyLm5hbWV9PC90ZD48dGQ+e3BsYXllci53aW5zfTwvdGQ+PHRkPntwbGF5ZXIubG9zc2VzfTwvdGQ+PHRkPntwbGF5ZXIuYXJ0aHVyV2luc308L3RkPjx0ZD57cGxheWVyLm1vcmRyZWRXaW5zfTwvdGQ+PC90cj4pKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXX0=