"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player(props) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

    _this.state = {
      name: "",
      cohort: ""
    };
    return _this;
  }

  _createClass(Player, [{
    key: "submitPlayer",
    value: function submitPlayer() {}
  }, {
    key: "playerNameChange",
    value: function playerNameChange(event) {
      this.setState({ name: event.target.value });
    }
  }, {
    key: "playerCohortChange",
    value: function playerCohortChange(event) {
      this.setState({ cohort: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "label",
          null,
          "Name"
        ),
        React.createElement("input", { className: "form-control", type: "text", value: this.state.name, onChange: this.playerNameChange.bind(this) }),
        React.createElement(
          "label",
          null,
          "Cohort"
        ),
        React.createElement("input", { className: "form-control", type: "text", value: this.state.cohort, onChange: this.playerCohortChange.bind(this) }),
        React.createElement(
          "button",
          { type: "submit", onClick: this.submitPlayer.bind(this), className: "btn btn-primary playerBtn" },
          "Submit"
        )
      );
    }
  }]);

  return Player;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNOzs7QUFDSixrQkFBWSxLQUFaLEVBQW1COzs7Z0hBQ1gsUUFEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLEVBQU47QUFDQSxjQUFRLEVBQVI7S0FGRixDQUZpQjs7R0FBbkI7Ozs7bUNBT2dCOzs7cUNBR0UsT0FBTztBQUN2QixXQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sTUFBTSxNQUFOLENBQWEsS0FBYixFQUFyQixFQUR1Qjs7Ozt1Q0FHTCxPQUFPO0FBQ3pCLFdBQUssUUFBTCxDQUFjLEVBQUMsUUFBUSxNQUFNLE1BQU4sQ0FBYSxLQUFiLEVBQXZCLEVBRHlCOzs7OzZCQUdqQjtBQUNSLGFBQ0U7OztRQUNFOzs7O1NBREY7UUFFRSwrQkFBTyxXQUFVLGNBQVYsRUFBeUIsTUFBSyxNQUFMLEVBQVksT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLFVBQVUsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixJQUEzQixDQUFWLEVBQXBFLENBRkY7UUFHRTs7OztTQUhGO1FBSUUsK0JBQU8sV0FBVSxjQUFWLEVBQXlCLE1BQUssTUFBTCxFQUFZLE9BQU8sS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFtQixVQUFVLEtBQUssa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBVixFQUF0RSxDQUpGO1FBS0U7O1lBQVEsTUFBSyxRQUFMLEVBQWMsU0FBUyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBVCxFQUF1QyxXQUFVLDJCQUFWLEVBQTdEOztTQUxGO09BREYsQ0FEUTs7Ozs7RUFqQlMsTUFBTSxTQUFOIiwiZmlsZSI6IlBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgY29ob3J0OiBcIlwiXG4gICAgfVxuICB9XG4gIHN1Ym1pdFBsYXllciAoKSB7XG5cbiAgfVxuICBwbGF5ZXJOYW1lQ2hhbmdlIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIHBsYXllckNvaG9ydENoYW5nZSAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb2hvcnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMucGxheWVyTmFtZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDxsYWJlbD5Db2hvcnQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb2hvcnR9IG9uQ2hhbmdlPXt0aGlzLnBsYXllckNvaG9ydENoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0UGxheWVyLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwbGF5ZXJCdG5cIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PiBcbiAgICApO1xuICB9XG59Il19