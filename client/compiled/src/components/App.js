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
      // if (this.state.playerActive) {
      //   return (
      //     <div>
      //       <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
      //       <Player />

      //     </div>
      //   );
      // } else if (this.state.gameActive){
      //   return (
      //     <div>
      //       <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
      //       <Game />
      //     </div>
      //   );
      // } else {
      //   return (
      //     <div>
      //       <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
      //       <Stats />
      //     </div>
      //   );   
      // }
      return React.createElement(
        "div",
        null,
        React.createElement(Nav, { statsActive: this.state.statsActive, gameActive: this.state.gameActive, playerActive: this.state.playerActive, changeTabToStats: this.changeTabToStats.bind(this), changeTabToGame: this.changeTabToGame.bind(this), changeTabToPlayer: this.changeTabToPlayer.bind(this) }),
        this.state.playerActive ? React.createElement(Player, null) : this.state.gameActive ? React.createElement(Game, null) : React.createElement(Stats, null)
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInN0YXRzQWN0aXZlIiwiZ2FtZUFjdGl2ZSIsInBsYXllckFjdGl2ZSIsInNldFN0YXRlIiwiY2hhbmdlVGFiVG9TdGF0cyIsImJpbmQiLCJjaGFuZ2VUYWJUb0dhbWUiLCJjaGFuZ2VUYWJUb1BsYXllciIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLElBREY7QUFFWEMsa0JBQVksS0FGRDtBQUdYQyxvQkFBYztBQUhILEtBQWI7QUFIaUI7QUFRbEI7Ozs7dUNBRWtCO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxhQUFhLElBQWQsRUFBb0JDLFlBQVksS0FBaEMsRUFBdUNDLGNBQWMsS0FBckQsRUFBZDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxhQUFhLEtBQWQsRUFBcUJDLFlBQVksSUFBakMsRUFBdUNDLGNBQWMsS0FBckQsRUFBZDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxhQUFhLEtBQWQsRUFBcUJDLFlBQVksS0FBakMsRUFBd0NDLGNBQWMsSUFBdEQsRUFBZDtBQUNEOzs7NkJBQ1E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLEdBQUQsSUFBSyxhQUFhLEtBQUtILEtBQUwsQ0FBV0MsV0FBN0IsRUFBMEMsWUFBWSxLQUFLRCxLQUFMLENBQVdFLFVBQWpFLEVBQTZFLGNBQWMsS0FBS0YsS0FBTCxDQUFXRyxZQUF0RyxFQUFvSCxrQkFBa0IsS0FBS0UsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQXRJLEVBQXdLLGlCQUFpQixLQUFLQyxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUF6TCxFQUEwTixtQkFBbUIsS0FBS0UsaUJBQUwsQ0FBdUJGLElBQXZCLENBQTRCLElBQTVCLENBQTdPLEdBREY7QUFFRyxhQUFLTixLQUFMLENBQVdHLFlBQVgsR0FBMEIsb0JBQUMsTUFBRCxPQUExQixHQUF1QyxLQUFLSCxLQUFMLENBQVdFLFVBQVgsR0FBd0Isb0JBQUMsSUFBRCxPQUF4QixHQUFvQyxvQkFBQyxLQUFEO0FBRjlFLE9BREY7QUFVSDs7OztFQXhEZU8sTUFBTUMsUzs7QUEyRHhCO0FBQ0E7OztBQUNBQyxPQUFPYixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGF0c0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgZ2FtZUFjdGl2ZTogZmFsc2UsXHJcbiAgICAgIHBsYXllckFjdGl2ZTogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWJUb1N0YXRzKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHNBY3RpdmU6IHRydWUsIGdhbWVBY3RpdmU6IGZhbHNlLCBwbGF5ZXJBY3RpdmU6IGZhbHNlfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWJUb0dhbWUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0c0FjdGl2ZTogZmFsc2UsIGdhbWVBY3RpdmU6IHRydWUsIHBsYXllckFjdGl2ZTogZmFsc2V9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRhYlRvUGxheWVyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHNBY3RpdmU6IGZhbHNlLCBnYW1lQWN0aXZlOiBmYWxzZSwgcGxheWVyQWN0aXZlOiB0cnVlfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIGlmICh0aGlzLnN0YXRlLnBsYXllckFjdGl2ZSkge1xyXG4gICAgLy8gICByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxkaXY+XHJcbiAgICAvLyAgICAgICA8TmF2IHN0YXRzQWN0aXZlPXt0aGlzLnN0YXRlLnN0YXRzQWN0aXZlfSBnYW1lQWN0aXZlPXt0aGlzLnN0YXRlLmdhbWVBY3RpdmV9IHBsYXllckFjdGl2ZT17dGhpcy5zdGF0ZS5wbGF5ZXJBY3RpdmV9IGNoYW5nZVRhYlRvU3RhdHM9e3RoaXMuY2hhbmdlVGFiVG9TdGF0cy5iaW5kKHRoaXMpfSBjaGFuZ2VUYWJUb0dhbWU9e3RoaXMuY2hhbmdlVGFiVG9HYW1lLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvUGxheWVyPXt0aGlzLmNoYW5nZVRhYlRvUGxheWVyLmJpbmQodGhpcyl9Lz5cclxuICAgIC8vICAgICAgIDxQbGF5ZXIgLz5cclxuXHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZ2FtZUFjdGl2ZSl7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPGRpdj5cclxuICAgIC8vICAgICAgIDxOYXYgc3RhdHNBY3RpdmU9e3RoaXMuc3RhdGUuc3RhdHNBY3RpdmV9IGdhbWVBY3RpdmU9e3RoaXMuc3RhdGUuZ2FtZUFjdGl2ZX0gcGxheWVyQWN0aXZlPXt0aGlzLnN0YXRlLnBsYXllckFjdGl2ZX0gY2hhbmdlVGFiVG9TdGF0cz17dGhpcy5jaGFuZ2VUYWJUb1N0YXRzLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvR2FtZT17dGhpcy5jaGFuZ2VUYWJUb0dhbWUuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9QbGF5ZXI9e3RoaXMuY2hhbmdlVGFiVG9QbGF5ZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgLy8gICAgICAgPEdhbWUgLz5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPGRpdj5cclxuICAgIC8vICAgICAgIDxOYXYgc3RhdHNBY3RpdmU9e3RoaXMuc3RhdGUuc3RhdHNBY3RpdmV9IGdhbWVBY3RpdmU9e3RoaXMuc3RhdGUuZ2FtZUFjdGl2ZX0gcGxheWVyQWN0aXZlPXt0aGlzLnN0YXRlLnBsYXllckFjdGl2ZX0gY2hhbmdlVGFiVG9TdGF0cz17dGhpcy5jaGFuZ2VUYWJUb1N0YXRzLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvR2FtZT17dGhpcy5jaGFuZ2VUYWJUb0dhbWUuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9QbGF5ZXI9e3RoaXMuY2hhbmdlVGFiVG9QbGF5ZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgLy8gICAgICAgPFN0YXRzIC8+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgICk7ICAgXHJcbiAgICAvLyB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxOYXYgc3RhdHNBY3RpdmU9e3RoaXMuc3RhdGUuc3RhdHNBY3RpdmV9IGdhbWVBY3RpdmU9e3RoaXMuc3RhdGUuZ2FtZUFjdGl2ZX0gcGxheWVyQWN0aXZlPXt0aGlzLnN0YXRlLnBsYXllckFjdGl2ZX0gY2hhbmdlVGFiVG9TdGF0cz17dGhpcy5jaGFuZ2VUYWJUb1N0YXRzLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvR2FtZT17dGhpcy5jaGFuZ2VUYWJUb0dhbWUuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9QbGF5ZXI9e3RoaXMuY2hhbmdlVGFiVG9QbGF5ZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUucGxheWVyQWN0aXZlID8gPFBsYXllciAvPiA6IHRoaXMuc3RhdGUuZ2FtZUFjdGl2ZSA/IDxHYW1lIC8+IDogIDxTdGF0cyAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuXHJcblxyXG4gIFxyXG5cclxuICB9XHJcbn1cclxuXHJcbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcclxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcclxud2luZG93LkFwcCA9IEFwcDsiXX0=