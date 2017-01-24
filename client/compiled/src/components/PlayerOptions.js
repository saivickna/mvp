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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllck9wdGlvbnMuanN4Il0sIm5hbWVzIjpbIlBsYXllck9wdGlvbnMiLCJwcm9wcyIsInN0YXRlIiwicGxheWVycyIsInNlbGYiLCJ3aW5kb3ciLCJnZXRQbGF5ZXJzIiwiYm9keSIsInNldFN0YXRlIiwiY2hhbmdlUGVyc29uIiwibWFwIiwicGxheWVyIiwiaWQiLCJuYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVM7QUFERSxLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUNvQjtBQUFBOztBQUNuQixVQUFJQyxPQUFPLElBQVg7QUFDQUMsYUFBT0MsVUFBUCxDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUIsWUFBSUEsU0FBUyxXQUFiLEVBQTBCLENBQ3pCLENBREQsTUFDTztBQUNMLGlCQUFLQyxRQUFMLENBQWMsRUFBQ0wsU0FBU0ksSUFBVixFQUFkO0FBQ0Q7QUFDRixPQUxEO0FBTUQ7Ozs2QkFDUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQVEsVUFBVSxLQUFLTixLQUFMLENBQVdRLFlBQTdCLEVBQTJDLFdBQVUsY0FBckQ7QUFDRyxhQUFLUCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJPLEdBQW5CLENBQXVCO0FBQUEsaUJBQVU7QUFBQTtBQUFBLGNBQVEsT0FBT0MsT0FBT0MsRUFBdEI7QUFBMkJELG1CQUFPRTtBQUFsQyxXQUFWO0FBQUEsU0FBdkI7QUFESCxPQURGO0FBTUQ7Ozs7RUF2QnlCQyxNQUFNQyxTIiwiZmlsZSI6IlBsYXllck9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXJPcHRpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGxheWVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgd2luZG93LmdldFBsYXllcnMoKGJvZHkpID0+IHtcclxuICAgICAgaWYgKGJvZHkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyczogYm9keX0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlUGVyc29ufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5wbGF5ZXJzLm1hcChwbGF5ZXIgPT4gPG9wdGlvbiB2YWx1ZT17cGxheWVyLmlkfT57cGxheWVyLm5hbWV9PC9vcHRpb24+KX1cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICApXHJcblxyXG4gIH1cclxufSJdfQ==