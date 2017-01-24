"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      statsActive: true,
      gameActive: false,
      playerActive: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "changeTabToStats",
    value: function changeTabToStats() {
      this.setState({ statsActive: true, gameActive: false, playerActive: false });
    }
  }, {
    key: "changeTabToGame",
    value: function changeTabToGame() {
      this.setState({ statsActive: false, gameActive: true, playerActive: false });
    }
  }, {
    key: "changeTabToPlayer",
    value: function changeTabToPlayer() {
      this.setState({ statsActive: false, gameActive: false, playerActive: true });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.playerActive) {
        return React.createElement(
          "div",
          null,
          React.createElement(Nav, { statsActive: this.state.statsActive, gameActive: this.state.gameActive, playerActive: this.state.playerActive, changeTabToStats: this.changeTabToStats.bind(this), changeTabToGame: this.changeTabToGame.bind(this), changeTabToPlayer: this.changeTabToPlayer.bind(this) }),
          React.createElement(Player, null)
        );
      } else if (this.state.gameActive) {
        return React.createElement(
          "div",
          null,
          React.createElement(Nav, { statsActive: this.state.statsActive, gameActive: this.state.gameActive, playerActive: this.state.playerActive, changeTabToStats: this.changeTabToStats.bind(this), changeTabToGame: this.changeTabToGame.bind(this), changeTabToPlayer: this.changeTabToPlayer.bind(this) }),
          React.createElement(Game, null)
        );
      } else {
        return React.createElement(Nav, { statsActive: this.state.statsActive, gameActive: this.state.gameActive, playerActive: this.state.playerActive, changeTabToStats: this.changeTabToStats.bind(this), changeTabToGame: this.changeTabToGame.bind(this), changeTabToPlayer: this.changeTabToPlayer.bind(this) });
      }
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNOzs7QUFDSixlQUFZLEtBQVosRUFBbUI7OzswR0FDWCxRQURXOztBQUdqQixVQUFLLEtBQUwsR0FBYTtBQUNYLG1CQUFhLElBQWI7QUFDQSxrQkFBWSxLQUFaO0FBQ0Esb0JBQWMsS0FBZDtLQUhGLENBSGlCOztHQUFuQjs7Ozt1Q0FVbUI7QUFDakIsV0FBSyxRQUFMLENBQWMsRUFBQyxhQUFhLElBQWIsRUFBbUIsWUFBWSxLQUFaLEVBQW1CLGNBQWMsS0FBZCxFQUFyRCxFQURpQjs7OztzQ0FJRDtBQUNoQixXQUFLLFFBQUwsQ0FBYyxFQUFDLGFBQWEsS0FBYixFQUFvQixZQUFZLElBQVosRUFBa0IsY0FBYyxLQUFkLEVBQXJELEVBRGdCOzs7O3dDQUlFO0FBQ2xCLFdBQUssUUFBTCxDQUFjLEVBQUMsYUFBYSxLQUFiLEVBQW9CLFlBQVksS0FBWixFQUFtQixjQUFjLElBQWQsRUFBdEQsRUFEa0I7Ozs7NkJBR1g7QUFDUCxVQUFJLEtBQUssS0FBTCxDQUFXLFlBQVgsRUFBeUI7QUFDM0IsZUFDRTs7O1VBQ0Usb0JBQUMsR0FBRCxJQUFLLGFBQWEsS0FBSyxLQUFMLENBQVcsV0FBWCxFQUF3QixZQUFZLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBdUIsY0FBYyxLQUFLLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLGtCQUFrQixLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLENBQWxCLEVBQW9ELGlCQUFpQixLQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBakIsRUFBa0QsbUJBQW1CLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBbkIsRUFBMU4sQ0FERjtVQUVFLG9CQUFDLE1BQUQsT0FGRjtTQURGLENBRDJCO09BQTdCLE1BT08sSUFBSSxLQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQXNCO0FBQy9CLGVBQ0U7OztVQUNFLG9CQUFDLEdBQUQsSUFBSyxhQUFhLEtBQUssS0FBTCxDQUFXLFdBQVgsRUFBd0IsWUFBWSxLQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQXVCLGNBQWMsS0FBSyxLQUFMLENBQVcsWUFBWCxFQUF5QixrQkFBa0IsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixJQUEzQixDQUFsQixFQUFvRCxpQkFBaUIsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCLENBQWpCLEVBQWtELG1CQUFtQixLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQW5CLEVBQTFOLENBREY7VUFFRSxvQkFBQyxJQUFELE9BRkY7U0FERixDQUQrQjtPQUExQixNQU9BO0FBQ0wsZUFDRSxvQkFBQyxHQUFELElBQUssYUFBYSxLQUFLLEtBQUwsQ0FBVyxXQUFYLEVBQXdCLFlBQVksS0FBSyxLQUFMLENBQVcsVUFBWCxFQUF1QixjQUFjLEtBQUssS0FBTCxDQUFXLFlBQVgsRUFBeUIsa0JBQWtCLEtBQUssZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBbEIsRUFBb0QsaUJBQWlCLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQixDQUFqQixFQUFrRCxtQkFBbUIsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUFuQixFQUExTixDQURGLENBREs7T0FQQTs7Ozs7RUE5Qk8sTUFBTSxTQUFOOzs7Ozs7QUFpRGxCLE9BQU8sR0FBUCxHQUFhLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXRzQWN0aXZlOiB0cnVlLFxuICAgICAgZ2FtZUFjdGl2ZTogZmFsc2UsXG4gICAgICBwbGF5ZXJBY3RpdmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZVRhYlRvU3RhdHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHNBY3RpdmU6IHRydWUsIGdhbWVBY3RpdmU6IGZhbHNlLCBwbGF5ZXJBY3RpdmU6IGZhbHNlfSk7XG4gIH1cblxuICBjaGFuZ2VUYWJUb0dhbWUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHNBY3RpdmU6IGZhbHNlLCBnYW1lQWN0aXZlOiB0cnVlLCBwbGF5ZXJBY3RpdmU6IGZhbHNlfSk7XG4gIH1cblxuICBjaGFuZ2VUYWJUb1BsYXllcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0c0FjdGl2ZTogZmFsc2UsIGdhbWVBY3RpdmU6IGZhbHNlLCBwbGF5ZXJBY3RpdmU6IHRydWV9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucGxheWVyQWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXYgc3RhdHNBY3RpdmU9e3RoaXMuc3RhdGUuc3RhdHNBY3RpdmV9IGdhbWVBY3RpdmU9e3RoaXMuc3RhdGUuZ2FtZUFjdGl2ZX0gcGxheWVyQWN0aXZlPXt0aGlzLnN0YXRlLnBsYXllckFjdGl2ZX0gY2hhbmdlVGFiVG9TdGF0cz17dGhpcy5jaGFuZ2VUYWJUb1N0YXRzLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvR2FtZT17dGhpcy5jaGFuZ2VUYWJUb0dhbWUuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9QbGF5ZXI9e3RoaXMuY2hhbmdlVGFiVG9QbGF5ZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxQbGF5ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5nYW1lQWN0aXZlKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdiBzdGF0c0FjdGl2ZT17dGhpcy5zdGF0ZS5zdGF0c0FjdGl2ZX0gZ2FtZUFjdGl2ZT17dGhpcy5zdGF0ZS5nYW1lQWN0aXZlfSBwbGF5ZXJBY3RpdmU9e3RoaXMuc3RhdGUucGxheWVyQWN0aXZlfSBjaGFuZ2VUYWJUb1N0YXRzPXt0aGlzLmNoYW5nZVRhYlRvU3RhdHMuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9HYW1lPXt0aGlzLmNoYW5nZVRhYlRvR2FtZS5iaW5kKHRoaXMpfSBjaGFuZ2VUYWJUb1BsYXllcj17dGhpcy5jaGFuZ2VUYWJUb1BsYXllci5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPEdhbWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2IHN0YXRzQWN0aXZlPXt0aGlzLnN0YXRlLnN0YXRzQWN0aXZlfSBnYW1lQWN0aXZlPXt0aGlzLnN0YXRlLmdhbWVBY3RpdmV9IHBsYXllckFjdGl2ZT17dGhpcy5zdGF0ZS5wbGF5ZXJBY3RpdmV9IGNoYW5nZVRhYlRvU3RhdHM9e3RoaXMuY2hhbmdlVGFiVG9TdGF0cy5iaW5kKHRoaXMpfSBjaGFuZ2VUYWJUb0dhbWU9e3RoaXMuY2hhbmdlVGFiVG9HYW1lLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvUGxheWVyPXt0aGlzLmNoYW5nZVRhYlRvUGxheWVyLmJpbmQodGhpcyl9Lz5cbiAgICAgICk7ICAgXG4gICAgfVxuICBcblxuICB9XG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==