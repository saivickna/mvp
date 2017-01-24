"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stats = function (_React$Component) {
  _inherits(Stats, _React$Component);

  function Stats(props) {
    _classCallCheck(this, Stats);

    var _this = _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).call(this, props));

    _this.state = {
      matches: [],
      players: []
    };
    return _this;
  }

  _createClass(Stats, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      window.getMatches(function (body) {
        if (body === 'undefined') {} else {
          self.setState({ matches: body });

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
        { className: "row clearfix" },
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

  return Stats;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YXRzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07OztBQUNKLGlCQUFZLEtBQVosRUFBbUI7Ozs4R0FDWCxRQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGVBQVMsRUFBVDtBQUNBLGVBQVMsRUFBVDtLQUZGLENBRmlCOztHQUFuQjs7Ozt5Q0FPcUI7QUFDbkIsVUFBSSxPQUFPLElBQVAsQ0FEZTtBQUVuQixhQUFPLFVBQVAsQ0FBa0IsVUFBQyxJQUFELEVBQVU7QUFDMUIsWUFBSSxTQUFTLFdBQVQsRUFBc0IsRUFBMUIsTUFDTztBQUNMLGVBQUssUUFBTCxDQUFjLEVBQUMsU0FBUyxJQUFULEVBQWYsRUFESzs7QUFHTCxjQUFJLFNBQVMsRUFBVCxDQUhDO0FBSUwsZUFBSyxJQUFJLENBQUosSUFBUyxJQUFkLEVBQW9CO0FBQ2xCLGdCQUFJLENBQUUsT0FBTyxLQUFLLENBQUwsRUFBUSxRQUFSLENBQVQsRUFBNkI7QUFDL0IscUJBQU8sS0FBSyxDQUFMLEVBQVEsUUFBUixDQUFQLEdBQTJCLEVBQUMsTUFBSyxDQUFMLEVBQVEsUUFBTyxDQUFQLEVBQVUsTUFBSyxLQUFLLENBQUwsRUFBUSxPQUFSLENBQWdCLElBQWhCLEVBQXNCLFlBQVksQ0FBWixFQUFlLGFBQWEsQ0FBYixFQUF4RixDQUQrQjthQUFqQztBQUdBLGdCQUFJLEtBQUssQ0FBTCxFQUFRLEtBQVIsQ0FBYyxHQUFkLEtBQXNCLEtBQUssQ0FBTCxFQUFRLFFBQVIsRUFBa0I7QUFDMUMscUJBQU8sS0FBSyxDQUFMLEVBQVEsUUFBUixDQUFQLENBQXlCLElBQXpCLEdBRDBDO0FBRTFDLGtCQUFJLEtBQUssQ0FBTCxFQUFRLFFBQVIsS0FBcUIsQ0FBckIsRUFBd0I7QUFDMUIsdUJBQU8sS0FBSyxDQUFMLEVBQVEsUUFBUixDQUFQLENBQXlCLFVBQXpCLEdBRDBCO2VBQTVCLE1BRU87QUFDTCx1QkFBTyxLQUFLLENBQUwsRUFBUSxRQUFSLENBQVAsQ0FBeUIsV0FBekIsR0FESztlQUZQO2FBRkYsTUFPTztBQUNMLHFCQUFPLEtBQUssQ0FBTCxFQUFRLFFBQVIsQ0FBUCxDQUF5QixNQUF6QixHQURLO2FBUFA7V0FKRjtBQWVBLGNBQUksYUFBYSxFQUFiLENBbkJDO0FBb0JMLGVBQUksSUFBSSxDQUFKLElBQVMsTUFBYixFQUFxQjtBQUNuQix1QkFBVyxJQUFYLENBQWdCLE9BQU8sQ0FBUCxDQUFoQixFQURtQjtXQUFyQjtBQUdBLGVBQUssUUFBTCxDQUFjLEVBQUMsU0FBUyxVQUFULEVBQWYsRUF2Qks7U0FEUDtPQURnQixDQUFsQixDQUZtQjs7Ozs2QkErQlg7QUFDUixhQUNFOztVQUFLLFdBQVUsY0FBVixFQUFMO1FBQ0U7O1lBQUssV0FBVSxrQkFBVixFQUFMO1VBQ0U7O2NBQU8sSUFBRyxTQUFILEVBQWEsV0FBVSxrQ0FBVixFQUE2QyxhQUFZLEdBQVosRUFBZ0IsT0FBTSxNQUFOLEVBQWpGO1lBQ0k7OztjQUNFOzs7Z0JBQ0k7Ozs7aUJBREo7Z0JBRUk7Ozs7aUJBRko7Z0JBR0k7Ozs7aUJBSEo7Z0JBSUk7Ozs7aUJBSko7Z0JBS0k7Ozs7aUJBTEo7ZUFERjthQURKO1lBVUU7OztjQUNHLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBdUI7dUJBQVc7OztrQkFBSTs7O29CQUFLLE9BQU8sSUFBUDttQkFBVDtrQkFBMEI7OztvQkFBSyxPQUFPLElBQVA7bUJBQS9CO2tCQUFnRDs7O29CQUFLLE9BQU8sTUFBUDttQkFBckQ7a0JBQXdFOzs7b0JBQUssT0FBTyxVQUFQO21CQUE3RTtrQkFBb0c7OztvQkFBSyxPQUFPLFdBQVA7bUJBQXpHOztlQUFYLENBRDFCO2FBVkY7V0FERjtTQURGO09BREYsQ0FEUTs7Ozs7RUF2Q1EsTUFBTSxTQUFOIiwiZmlsZSI6IlN0YXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWF0Y2hlczogW10sXG4gICAgICBwbGF5ZXJzOiBbXVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHdpbmRvdy5nZXRNYXRjaGVzKChib2R5KSA9PiB7XG4gICAgICBpZiAoYm9keSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe21hdGNoZXM6IGJvZHl9KTtcblxuICAgICAgICB2YXIgcGxheWVyID0ge307XG4gICAgICAgIGZvciAodmFyIHggaW4gYm9keSkge1xuICAgICAgICAgIGlmICghKHBsYXllcltib2R5W3hdLnBsYXllcklkXSkpIHtcbiAgICAgICAgICAgIHBsYXllcltib2R5W3hdLnBsYXllcklkXSA9IHt3aW5zOjAsIGxvc3NlczowLCBuYW1lOmJvZHlbeF0ucGxheWVycy5uYW1lLCBhcnRodXJXaW5zOiAwLCBtb3JkcmVkV2luczogMH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChib2R5W3hdLmdhbWVzLndpbiA9PT0gYm9keVt4XS5hbGxpYW5jZSkge1xuICAgICAgICAgICAgcGxheWVyW2JvZHlbeF0ucGxheWVySWRdLndpbnMrKztcbiAgICAgICAgICAgIGlmIChib2R5W3hdLmFsbGlhbmNlID09PSAwKSB7XG4gICAgICAgICAgICAgIHBsYXllcltib2R5W3hdLnBsYXllcklkXS5hcnRodXJXaW5zKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwbGF5ZXJbYm9keVt4XS5wbGF5ZXJJZF0ubW9yZHJlZFdpbnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyW2JvZHlbeF0ucGxheWVySWRdLmxvc3NlcysrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcGxheWVyTGlzdCA9IFtdO1xuICAgICAgICBmb3IodmFyIHggaW4gcGxheWVyKSB7XG4gICAgICAgICAgcGxheWVyTGlzdC5wdXNoKHBsYXllclt4XSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7cGxheWVyczogcGxheWVyTGlzdH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNsZWFyZml4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbHVtblwiPlxuICAgICAgICAgIDx0YWJsZSBpZD1cImV4YW1wbGVcIiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlclwiIGNlbGxTcGFjaW5nPVwiMFwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5XaW5zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkxvc3NlczwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Hb29kIEd1eSBXaW5zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkJhZCBHdXkgV2luczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBsYXllcnMubWFwKHBsYXllciA9PiAoPHRyPjx0ZD57cGxheWVyLm5hbWV9PC90ZD48dGQ+e3BsYXllci53aW5zfTwvdGQ+PHRkPntwbGF5ZXIubG9zc2VzfTwvdGQ+PHRkPntwbGF5ZXIuYXJ0aHVyV2luc308L3RkPjx0ZD57cGxheWVyLm1vcmRyZWRXaW5zfTwvdGQ+PC90cj4pKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn0iXX0=