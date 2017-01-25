"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerOptions = function (_React$Component) {
  _inherits(PlayerOptions, _React$Component);

  function PlayerOptions(props) {
    _classCallCheck(this, PlayerOptions);

    var _this = _possibleConstructorReturn(this, (PlayerOptions.__proto__ || Object.getPrototypeOf(PlayerOptions)).call(this, props));

    _this.state = {
      players: []
    };
    return _this;
  }

  _createClass(PlayerOptions, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var self = this;
      window.getPlayers(function (body) {
        if (body === 'undefined') {} else {
          _this2.setState({ players: body });
          _this2.props.setInitial(body[0].name);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "select",
        { onChange: this.props.changePerson, className: "form-control" },
        this.state.players.map(function (player) {
          return React.createElement(
            "option",
            { value: player.id },
            player.name
          );
        })
      );
    }
  }]);

  return PlayerOptions;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllck9wdGlvbnMuanN4Il0sIm5hbWVzIjpbIlBsYXllck9wdGlvbnMiLCJwcm9wcyIsInN0YXRlIiwicGxheWVycyIsInNlbGYiLCJ3aW5kb3ciLCJnZXRQbGF5ZXJzIiwiYm9keSIsInNldFN0YXRlIiwic2V0SW5pdGlhbCIsIm5hbWUiLCJjaGFuZ2VQZXJzb24iLCJtYXAiLCJwbGF5ZXIiLCJpZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FDb0I7QUFBQTs7QUFDbkIsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGFBQU9DLFVBQVAsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLFlBQUlBLFNBQVMsV0FBYixFQUEwQixDQUN6QixDQURELE1BQ087QUFDTCxpQkFBS0MsUUFBTCxDQUFjLEVBQUNMLFNBQVNJLElBQVYsRUFBZDtBQUNBLGlCQUFLTixLQUFMLENBQVdRLFVBQVgsQ0FBc0JGLEtBQUssQ0FBTCxFQUFRRyxJQUE5QjtBQUNEO0FBQ0YsT0FORDtBQU9EOzs7NkJBQ1M7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFRLFVBQVUsS0FBS1QsS0FBTCxDQUFXVSxZQUE3QixFQUEyQyxXQUFVLGNBQXJEO0FBQ0csYUFBS1QsS0FBTCxDQUFXQyxPQUFYLENBQW1CUyxHQUFuQixDQUF1QjtBQUFBLGlCQUFVO0FBQUE7QUFBQSxjQUFRLE9BQU9DLE9BQU9DLEVBQXRCO0FBQTJCRCxtQkFBT0g7QUFBbEMsV0FBVjtBQUFBLFNBQXZCO0FBREgsT0FERjtBQU1EOzs7O0VBeEJ5QkssTUFBTUMsUyIsImZpbGUiOiJQbGF5ZXJPcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyT3B0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsYXllcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHdpbmRvdy5nZXRQbGF5ZXJzKChib2R5KSA9PiB7XHJcbiAgICAgIGlmIChib2R5ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllcnM6IGJvZHl9KTtcclxuICAgICAgICB0aGlzLnByb3BzLnNldEluaXRpYWwoYm9keVswXS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZVBlcnNvbn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUucGxheWVycy5tYXAocGxheWVyID0+IDxvcHRpb24gdmFsdWU9e3BsYXllci5pZH0+e3BsYXllci5uYW1lfTwvb3B0aW9uPil9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgKVxyXG5cclxuICB9XHJcbn0iXX0=