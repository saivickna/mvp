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
      playerStats: true,
      gameRatio: true
    };
    return _this;
  }

  _createClass(Stats, [{
    key: "changeStats",
    value: function changeStats(e) {
      if (e.target.value === 'Player Table Stats') {
        this.setState({ playerStats: true, gameRatio: false });
      } else {
        this.setState({ playerStats: false, gameRatio: true });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "select",
          { onChange: this.changeStats.bind(this), className: "form-control selectstats" },
          React.createElement(
            "option",
            null,
            "Player Table Stats"
          ),
          React.createElement(
            "option",
            null,
            "Win Ratio"
          )
        ),
        this.state.playerStats ? React.createElement(PlayerStats, null) : React.createElement(GameRatio, null)
      );
    }
  }]);

  return Stats;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YXRzLmpzeCJdLCJuYW1lcyI6WyJTdGF0cyIsInByb3BzIiwic3RhdGUiLCJwbGF5ZXJTdGF0cyIsImdhbWVSYXRpbyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiY2hhbmdlU3RhdHMiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLElBREY7QUFFWEMsaUJBQVc7QUFGQSxLQUFiO0FBRmlCO0FBTWxCOzs7O2dDQUNZQyxDLEVBQUc7QUFDZCxVQUFJQSxFQUFFQyxNQUFGLENBQVNDLEtBQVQsS0FBbUIsb0JBQXZCLEVBQTZDO0FBQzNDLGFBQUtDLFFBQUwsQ0FBYyxFQUFDTCxhQUFhLElBQWQsRUFBb0JDLFdBQVcsS0FBL0IsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtJLFFBQUwsQ0FBYyxFQUFDTCxhQUFhLEtBQWQsRUFBcUJDLFdBQVcsSUFBaEMsRUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQVEsVUFBVSxLQUFLSyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFsQixFQUErQyxXQUFVLDBCQUF6RDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixTQURGO0FBS0csYUFBS1IsS0FBTCxDQUFXQyxXQUFYLEdBQXlCLG9CQUFDLFdBQUQsT0FBekIsR0FBMkMsb0JBQUMsU0FBRDtBQUw5QyxPQURGO0FBU0Q7Ozs7RUExQmlCUSxNQUFNQyxTIiwiZmlsZSI6IlN0YXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwbGF5ZXJTdGF0czogdHJ1ZSxcclxuICAgICAgZ2FtZVJhdGlvOiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoYW5nZVN0YXRzIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICdQbGF5ZXIgVGFibGUgU3RhdHMnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllclN0YXRzOiB0cnVlLCBnYW1lUmF0aW86IGZhbHNlfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJTdGF0czogZmFsc2UsIGdhbWVSYXRpbzogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VTdGF0cy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgc2VsZWN0c3RhdHNcIj5cclxuICAgICAgICAgIDxvcHRpb24+UGxheWVyIFRhYmxlIFN0YXRzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uPldpbiBSYXRpbzwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnBsYXllclN0YXRzID8gPFBsYXllclN0YXRzIC8+IDogPEdhbWVSYXRpbyAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSJdfQ==