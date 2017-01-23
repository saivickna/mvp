'use strict';

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
    key: 'changeTabToStats',
    value: function changeTabToStats() {
      this.setState({ statsActive: true, gameActive: false, playerActive: false });
    }
  }, {
    key: 'changeTabToGame',
    value: function changeTabToGame() {
      this.setState({ statsActive: false, gameActive: true, playerActive: false });
    }
  }, {
    key: 'changeTabToPlayer',
    value: function changeTabToPlayer() {
      this.setState({ statsActive: false, gameActive: false, playerActive: true });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('test');
      if (this.state.playerActive) {
        console.log('huh');
        return React.createElement(
          'div',
          null,
          React.createElement(Nav, { statsActive: this.state.statsActive, gameActive: this.state.gameActive, playerActive: this.state.playerActive, changeTabToStats: this.changeTabToStats.bind(this), changeTabToGame: this.changeTabToGame.bind(this), changeTabToPlayer: this.changeTabToPlayer.bind(this) }),
          React.createElement(Player, null)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNOzs7QUFDSixlQUFZLEtBQVosRUFBbUI7OzswR0FDWCxRQURXOztBQUdqQixVQUFLLEtBQUwsR0FBYTtBQUNYLG1CQUFhLElBQWI7QUFDQSxrQkFBWSxLQUFaO0FBQ0Esb0JBQWMsS0FBZDtLQUhGLENBSGlCOztHQUFuQjs7Ozt1Q0FVbUI7QUFDakIsV0FBSyxRQUFMLENBQWMsRUFBQyxhQUFhLElBQWIsRUFBbUIsWUFBWSxLQUFaLEVBQW1CLGNBQWMsS0FBZCxFQUFyRCxFQURpQjs7OztzQ0FJRDtBQUNoQixXQUFLLFFBQUwsQ0FBYyxFQUFDLGFBQWEsS0FBYixFQUFvQixZQUFZLElBQVosRUFBa0IsY0FBYyxLQUFkLEVBQXJELEVBRGdCOzs7O3dDQUlFO0FBQ2xCLFdBQUssUUFBTCxDQUFjLEVBQUMsYUFBYSxLQUFiLEVBQW9CLFlBQVksS0FBWixFQUFtQixjQUFjLElBQWQsRUFBdEQsRUFEa0I7Ozs7NkJBR1g7QUFDUCxjQUFRLEdBQVIsQ0FBWSxNQUFaLEVBRE87QUFFUCxVQUFJLEtBQUssS0FBTCxDQUFXLFlBQVgsRUFBeUI7QUFDM0IsZ0JBQVEsR0FBUixDQUFZLEtBQVosRUFEMkI7QUFFM0IsZUFDRTs7O1VBQ0Usb0JBQUMsR0FBRCxJQUFLLGFBQWEsS0FBSyxLQUFMLENBQVcsV0FBWCxFQUF3QixZQUFZLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBdUIsY0FBYyxLQUFLLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLGtCQUFrQixLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLENBQWxCLEVBQW9ELGlCQUFpQixLQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBakIsRUFBa0QsbUJBQW1CLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBbkIsRUFBMU4sQ0FERjtVQUVFLG9CQUFDLE1BQUQsT0FGRjtTQURGLENBRjJCO09BQTdCLE1BUU87QUFDTCxlQUNFLG9CQUFDLEdBQUQsSUFBSyxhQUFhLEtBQUssS0FBTCxDQUFXLFdBQVgsRUFBd0IsWUFBWSxLQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQXVCLGNBQWMsS0FBSyxLQUFMLENBQVcsWUFBWCxFQUF5QixrQkFBa0IsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixJQUEzQixDQUFsQixFQUFvRCxpQkFBaUIsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCLENBQWpCLEVBQWtELG1CQUFtQixLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQW5CLEVBQTFOLENBREYsQ0FESztPQVJQOzs7OztFQXhCYyxNQUFNLFNBQU47Ozs7OztBQTRDbEIsT0FBTyxHQUFQLEdBQWEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHNBY3RpdmU6IHRydWUsXG4gICAgICBnYW1lQWN0aXZlOiBmYWxzZSxcbiAgICAgIHBsYXllckFjdGl2ZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlVGFiVG9TdGF0cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0c0FjdGl2ZTogdHJ1ZSwgZ2FtZUFjdGl2ZTogZmFsc2UsIHBsYXllckFjdGl2ZTogZmFsc2V9KTtcbiAgfVxuXG4gIGNoYW5nZVRhYlRvR2FtZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0c0FjdGl2ZTogZmFsc2UsIGdhbWVBY3RpdmU6IHRydWUsIHBsYXllckFjdGl2ZTogZmFsc2V9KTtcbiAgfVxuXG4gIGNoYW5nZVRhYlRvUGxheWVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0YXRzQWN0aXZlOiBmYWxzZSwgZ2FtZUFjdGl2ZTogZmFsc2UsIHBsYXllckFjdGl2ZTogdHJ1ZX0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIGlmICh0aGlzLnN0YXRlLnBsYXllckFjdGl2ZSkge1xuICAgICAgY29uc29sZS5sb2coJ2h1aCcpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TmF2IHN0YXRzQWN0aXZlPXt0aGlzLnN0YXRlLnN0YXRzQWN0aXZlfSBnYW1lQWN0aXZlPXt0aGlzLnN0YXRlLmdhbWVBY3RpdmV9IHBsYXllckFjdGl2ZT17dGhpcy5zdGF0ZS5wbGF5ZXJBY3RpdmV9IGNoYW5nZVRhYlRvU3RhdHM9e3RoaXMuY2hhbmdlVGFiVG9TdGF0cy5iaW5kKHRoaXMpfSBjaGFuZ2VUYWJUb0dhbWU9e3RoaXMuY2hhbmdlVGFiVG9HYW1lLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvUGxheWVyPXt0aGlzLmNoYW5nZVRhYlRvUGxheWVyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8UGxheWVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5hdiBzdGF0c0FjdGl2ZT17dGhpcy5zdGF0ZS5zdGF0c0FjdGl2ZX0gZ2FtZUFjdGl2ZT17dGhpcy5zdGF0ZS5nYW1lQWN0aXZlfSBwbGF5ZXJBY3RpdmU9e3RoaXMuc3RhdGUucGxheWVyQWN0aXZlfSBjaGFuZ2VUYWJUb1N0YXRzPXt0aGlzLmNoYW5nZVRhYlRvU3RhdHMuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9HYW1lPXt0aGlzLmNoYW5nZVRhYlRvR2FtZS5iaW5kKHRoaXMpfSBjaGFuZ2VUYWJUb1BsYXllcj17dGhpcy5jaGFuZ2VUYWJUb1BsYXllci5iaW5kKHRoaXMpfS8+XG4gICAgICApO1xuICAgIH1cbiAgXG5cbiAgfVxufVxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LkFwcCA9IEFwcDsiXX0=