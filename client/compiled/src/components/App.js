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
      playerActive: false,
      loggedIn: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // console.log(window.localStorage.getItem('com.avalon'));
      if (window.localStorage.getItem('com.avalon') !== null) {
        this.setState({ loggedIn: true });
      }
    }
  }, {
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
    key: 'loggingIn',
    value: function loggingIn() {
      this.setState({ loggedIn: true });
    }
  }, {
    key: 'loggingOut',
    value: function loggingOut() {
      window.localStorage.removeItem('com.avalon');
      this.setState({ loggedIn: false });
    }
  }, {
    key: 'render',
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
      // return (
      //   <div>
      //     <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
      //     {this.state.playerActive ? <Player /> : this.state.gameActive ? <Game /> :  <Stats />}
      //   </div>
      // );
      if (this.state.loggedIn) {
        return React.createElement(
          'div',
          null,
          React.createElement(Nav, { loggingOut: this.loggingOut.bind(this), statsActive: this.state.statsActive, gameActive: this.state.gameActive, playerActive: this.state.playerActive, changeTabToStats: this.changeTabToStats.bind(this), changeTabToGame: this.changeTabToGame.bind(this), changeTabToPlayer: this.changeTabToPlayer.bind(this) }),
          this.state.playerActive ? React.createElement(Player, null) : this.state.gameActive ? React.createElement(Game, null) : React.createElement(Stats, null)
        );
      } else {
        return React.createElement(Login, { loggingIn: this.loggingIn.bind(this) });
      }
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInN0YXRzQWN0aXZlIiwiZ2FtZUFjdGl2ZSIsInBsYXllckFjdGl2ZSIsImxvZ2dlZEluIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFN0YXRlIiwicmVtb3ZlSXRlbSIsImxvZ2dpbmdPdXQiLCJiaW5kIiwiY2hhbmdlVGFiVG9TdGF0cyIsImNoYW5nZVRhYlRvR2FtZSIsImNoYW5nZVRhYlRvUGxheWVyIiwibG9nZ2luZ0luIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsSUFERjtBQUVYQyxrQkFBWSxLQUZEO0FBR1hDLG9CQUFjLEtBSEg7QUFJWEMsZ0JBQVU7QUFKQyxLQUFiO0FBSGlCO0FBU2xCOzs7O3lDQUNvQjtBQUNuQjtBQUNBLFVBQUdDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFlBQTVCLE1BQThDLElBQWpELEVBQ0E7QUFDRSxhQUFLQyxRQUFMLENBQWMsRUFBQ0osVUFBVSxJQUFYLEVBQWQ7QUFDRDtBQUNGOzs7dUNBQ2tCO0FBQ2pCLFdBQUtJLFFBQUwsQ0FBYyxFQUFDUCxhQUFhLElBQWQsRUFBb0JDLFlBQVksS0FBaEMsRUFBdUNDLGNBQWMsS0FBckQsRUFBZDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUtLLFFBQUwsQ0FBYyxFQUFDUCxhQUFhLEtBQWQsRUFBcUJDLFlBQVksSUFBakMsRUFBdUNDLGNBQWMsS0FBckQsRUFBZDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtLLFFBQUwsQ0FBYyxFQUFDUCxhQUFhLEtBQWQsRUFBcUJDLFlBQVksS0FBakMsRUFBd0NDLGNBQWMsSUFBdEQsRUFBZDtBQUNEOzs7Z0NBQ1k7QUFDWCxXQUFLSyxRQUFMLENBQWMsRUFBQ0osVUFBVSxJQUFYLEVBQWQ7QUFDRDs7O2lDQUNhO0FBQ1pDLGFBQU9DLFlBQVAsQ0FBb0JHLFVBQXBCLENBQStCLFlBQS9CO0FBQ0EsV0FBS0QsUUFBTCxDQUFjLEVBQUNKLFVBQVUsS0FBWCxFQUFkO0FBQ0Q7Ozs2QkFDUTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUksS0FBS0osS0FBTCxDQUFXSSxRQUFmLEVBQXlCO0FBQ3ZCLGVBQ0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsR0FBRCxJQUFLLFlBQVksS0FBS00sVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBakIsRUFBNkMsYUFBYSxLQUFLWCxLQUFMLENBQVdDLFdBQXJFLEVBQWtGLFlBQVksS0FBS0QsS0FBTCxDQUFXRSxVQUF6RyxFQUFxSCxjQUFjLEtBQUtGLEtBQUwsQ0FBV0csWUFBOUksRUFBNEosa0JBQWtCLEtBQUtTLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQUE5SyxFQUFnTixpQkFBaUIsS0FBS0UsZUFBTCxDQUFxQkYsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBak8sRUFBa1EsbUJBQW1CLEtBQUtHLGlCQUFMLENBQXVCSCxJQUF2QixDQUE0QixJQUE1QixDQUFyUixHQURGO0FBRUcsZUFBS1gsS0FBTCxDQUFXRyxZQUFYLEdBQTBCLG9CQUFDLE1BQUQsT0FBMUIsR0FBdUMsS0FBS0gsS0FBTCxDQUFXRSxVQUFYLEdBQXdCLG9CQUFDLElBQUQsT0FBeEIsR0FBb0Msb0JBQUMsS0FBRDtBQUY5RSxTQURGO0FBTUQsT0FQRCxNQU9PO0FBQ0wsZUFDRSxvQkFBQyxLQUFELElBQU8sV0FBVyxLQUFLYSxTQUFMLENBQWVKLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEIsR0FERjtBQUdEO0FBS0o7Ozs7RUFsRmVLLE1BQU1DLFM7O0FBcUZ4QjtBQUNBOzs7QUFDQVosT0FBT1AsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIFxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3RhdHNBY3RpdmU6IHRydWUsXHJcbiAgICAgIGdhbWVBY3RpdmU6IGZhbHNlLFxyXG4gICAgICBwbGF5ZXJBY3RpdmU6IGZhbHNlLFxyXG4gICAgICBsb2dnZWRJbjogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tLmF2YWxvbicpKTtcclxuICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tLmF2YWxvbicpICE9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VUYWJUb1N0YXRzKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHNBY3RpdmU6IHRydWUsIGdhbWVBY3RpdmU6IGZhbHNlLCBwbGF5ZXJBY3RpdmU6IGZhbHNlfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWJUb0dhbWUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0c0FjdGl2ZTogZmFsc2UsIGdhbWVBY3RpdmU6IHRydWUsIHBsYXllckFjdGl2ZTogZmFsc2V9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRhYlRvUGxheWVyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHNBY3RpdmU6IGZhbHNlLCBnYW1lQWN0aXZlOiBmYWxzZSwgcGxheWVyQWN0aXZlOiB0cnVlfSk7XHJcbiAgfVxyXG4gIGxvZ2dpbmdJbiAoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogdHJ1ZX0pO1xyXG4gIH1cclxuICBsb2dnaW5nT3V0ICgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29tLmF2YWxvbicpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9nZ2VkSW46IGZhbHNlfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIGlmICh0aGlzLnN0YXRlLnBsYXllckFjdGl2ZSkge1xyXG4gICAgLy8gICByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxkaXY+XHJcbiAgICAvLyAgICAgICA8TmF2IHN0YXRzQWN0aXZlPXt0aGlzLnN0YXRlLnN0YXRzQWN0aXZlfSBnYW1lQWN0aXZlPXt0aGlzLnN0YXRlLmdhbWVBY3RpdmV9IHBsYXllckFjdGl2ZT17dGhpcy5zdGF0ZS5wbGF5ZXJBY3RpdmV9IGNoYW5nZVRhYlRvU3RhdHM9e3RoaXMuY2hhbmdlVGFiVG9TdGF0cy5iaW5kKHRoaXMpfSBjaGFuZ2VUYWJUb0dhbWU9e3RoaXMuY2hhbmdlVGFiVG9HYW1lLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvUGxheWVyPXt0aGlzLmNoYW5nZVRhYlRvUGxheWVyLmJpbmQodGhpcyl9Lz5cclxuICAgIC8vICAgICAgIDxQbGF5ZXIgLz5cclxuXHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZ2FtZUFjdGl2ZSl7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPGRpdj5cclxuICAgIC8vICAgICAgIDxOYXYgc3RhdHNBY3RpdmU9e3RoaXMuc3RhdGUuc3RhdHNBY3RpdmV9IGdhbWVBY3RpdmU9e3RoaXMuc3RhdGUuZ2FtZUFjdGl2ZX0gcGxheWVyQWN0aXZlPXt0aGlzLnN0YXRlLnBsYXllckFjdGl2ZX0gY2hhbmdlVGFiVG9TdGF0cz17dGhpcy5jaGFuZ2VUYWJUb1N0YXRzLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvR2FtZT17dGhpcy5jaGFuZ2VUYWJUb0dhbWUuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9QbGF5ZXI9e3RoaXMuY2hhbmdlVGFiVG9QbGF5ZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgLy8gICAgICAgPEdhbWUgLz5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPGRpdj5cclxuICAgIC8vICAgICAgIDxOYXYgc3RhdHNBY3RpdmU9e3RoaXMuc3RhdGUuc3RhdHNBY3RpdmV9IGdhbWVBY3RpdmU9e3RoaXMuc3RhdGUuZ2FtZUFjdGl2ZX0gcGxheWVyQWN0aXZlPXt0aGlzLnN0YXRlLnBsYXllckFjdGl2ZX0gY2hhbmdlVGFiVG9TdGF0cz17dGhpcy5jaGFuZ2VUYWJUb1N0YXRzLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvR2FtZT17dGhpcy5jaGFuZ2VUYWJUb0dhbWUuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9QbGF5ZXI9e3RoaXMuY2hhbmdlVGFiVG9QbGF5ZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgLy8gICAgICAgPFN0YXRzIC8+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgICk7ICAgXHJcbiAgICAvLyB9XHJcbiAgICAgIC8vIHJldHVybiAoXHJcbiAgICAgIC8vICAgPGRpdj5cclxuICAgICAgLy8gICAgIDxOYXYgc3RhdHNBY3RpdmU9e3RoaXMuc3RhdGUuc3RhdHNBY3RpdmV9IGdhbWVBY3RpdmU9e3RoaXMuc3RhdGUuZ2FtZUFjdGl2ZX0gcGxheWVyQWN0aXZlPXt0aGlzLnN0YXRlLnBsYXllckFjdGl2ZX0gY2hhbmdlVGFiVG9TdGF0cz17dGhpcy5jaGFuZ2VUYWJUb1N0YXRzLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvR2FtZT17dGhpcy5jaGFuZ2VUYWJUb0dhbWUuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9QbGF5ZXI9e3RoaXMuY2hhbmdlVGFiVG9QbGF5ZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgICAvLyAgICAge3RoaXMuc3RhdGUucGxheWVyQWN0aXZlID8gPFBsYXllciAvPiA6IHRoaXMuc3RhdGUuZ2FtZUFjdGl2ZSA/IDxHYW1lIC8+IDogIDxTdGF0cyAvPn1cclxuICAgICAgLy8gICA8L2Rpdj5cclxuICAgICAgLy8gKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubG9nZ2VkSW4pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdiBsb2dnaW5nT3V0PXt0aGlzLmxvZ2dpbmdPdXQuYmluZCh0aGlzKX0gc3RhdHNBY3RpdmU9e3RoaXMuc3RhdGUuc3RhdHNBY3RpdmV9IGdhbWVBY3RpdmU9e3RoaXMuc3RhdGUuZ2FtZUFjdGl2ZX0gcGxheWVyQWN0aXZlPXt0aGlzLnN0YXRlLnBsYXllckFjdGl2ZX0gY2hhbmdlVGFiVG9TdGF0cz17dGhpcy5jaGFuZ2VUYWJUb1N0YXRzLmJpbmQodGhpcyl9IGNoYW5nZVRhYlRvR2FtZT17dGhpcy5jaGFuZ2VUYWJUb0dhbWUuYmluZCh0aGlzKX0gY2hhbmdlVGFiVG9QbGF5ZXI9e3RoaXMuY2hhbmdlVGFiVG9QbGF5ZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wbGF5ZXJBY3RpdmUgPyA8UGxheWVyIC8+IDogdGhpcy5zdGF0ZS5nYW1lQWN0aXZlID8gPEdhbWUgLz4gOiAgPFN0YXRzIC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExvZ2luIGxvZ2dpbmdJbj17dGhpcy5sb2dnaW5nSW4uYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICB9XHJcbn1cclxuXHJcbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcclxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcclxud2luZG93LkFwcCA9IEFwcDsiXX0=