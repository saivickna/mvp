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
      cohort: "",
      errMsg: "hidden"
    };
    return _this;
  }

  _createClass(Player, [{
    key: "submitPlayer",
    value: function submitPlayer() {
      window.postPlayer(this.state, this.clearForm.bind(this));
    }
  }, {
    key: "clearForm",
    value: function clearForm(body) {
      if (body === 'undefined') {
        this.setState({ errMsg: "shown" });
      } else {
        this.setState({ name: '', cohort: '', errMsg: "hidden" });
      }
    }
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
        ),
        React.createElement(
          "div",
          { className: this.state.errMsg },
          "Failed to add player"
        )
      );
    }
  }]);

  return Player;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNOzs7QUFDSixrQkFBWSxLQUFaLEVBQW1COzs7Z0hBQ1gsUUFEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLEVBQU47QUFDQSxjQUFRLEVBQVI7QUFDQSxjQUFRLFFBQVI7S0FIRixDQUZpQjs7R0FBbkI7Ozs7bUNBUWdCO0FBQ2QsYUFBTyxVQUFQLENBQWtCLEtBQUssS0FBTCxFQUFZLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FBOUIsRUFEYzs7Ozs4QkFHTCxNQUFNO0FBQ2YsVUFBSSxTQUFTLFdBQVQsRUFBc0I7QUFDeEIsYUFBSyxRQUFMLENBQWMsRUFBQyxRQUFRLE9BQVIsRUFBZixFQUR3QjtPQUExQixNQUVRO0FBQ04sYUFBSyxRQUFMLENBQWMsRUFBQyxNQUFLLEVBQUwsRUFBUyxRQUFPLEVBQVAsRUFBVyxRQUFRLFFBQVIsRUFBbkMsRUFETTtPQUZSOzs7O3FDQU1nQixPQUFPO0FBQ3ZCLFdBQUssUUFBTCxDQUFjLEVBQUMsTUFBTSxNQUFNLE1BQU4sQ0FBYSxLQUFiLEVBQXJCLEVBRHVCOzs7O3VDQUdMLE9BQU87QUFDekIsV0FBSyxRQUFMLENBQWMsRUFBQyxRQUFRLE1BQU0sTUFBTixDQUFhLEtBQWIsRUFBdkIsRUFEeUI7Ozs7NkJBR2pCO0FBQ1IsYUFDRTs7O1FBQ0U7Ozs7U0FERjtRQUVFLCtCQUFPLFdBQVUsY0FBVixFQUF5QixNQUFLLE1BQUwsRUFBWSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsVUFBVSxLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLENBQVYsRUFBcEUsQ0FGRjtRQUdFOzs7O1NBSEY7UUFJRSwrQkFBTyxXQUFVLGNBQVYsRUFBeUIsTUFBSyxNQUFMLEVBQVksT0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CLFVBQVUsS0FBSyxrQkFBTCxDQUF3QixJQUF4QixDQUE2QixJQUE3QixDQUFWLEVBQXRFLENBSkY7UUFLRTs7WUFBUSxNQUFLLFFBQUwsRUFBYyxTQUFTLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUFULEVBQXVDLFdBQVUsMkJBQVYsRUFBN0Q7O1NBTEY7UUFNRTs7WUFBSyxXQUFXLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBaEI7O1NBTkY7T0FERixDQURROzs7OztFQXpCUyxNQUFNLFNBQU4iLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBjb2hvcnQ6IFwiXCIsXG4gICAgICBlcnJNc2c6IFwiaGlkZGVuXCJcbiAgICB9XG4gIH1cbiAgc3VibWl0UGxheWVyICgpIHtcbiAgICB3aW5kb3cucG9zdFBsYXllcih0aGlzLnN0YXRlLCB0aGlzLmNsZWFyRm9ybS5iaW5kKHRoaXMpKTtcbiAgfVxuICBjbGVhckZvcm0gKGJvZHkpIHtcbiAgICBpZiAoYm9keSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vyck1zZzogXCJzaG93blwifSlcbiAgICB9IGVsc2UgIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6JycsIGNvaG9ydDonJywgZXJyTXNnOiBcImhpZGRlblwifSk7XG4gICAgfVxuICB9XG4gIHBsYXllck5hbWVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgcGxheWVyQ29ob3J0Q2hhbmdlIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvaG9ydDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5wbGF5ZXJOYW1lQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPGxhYmVsPkNvaG9ydDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvaG9ydH0gb25DaGFuZ2U9e3RoaXMucGxheWVyQ29ob3J0Q2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5zdWJtaXRQbGF5ZXIuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHBsYXllckJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5lcnJNc2d9PkZhaWxlZCB0byBhZGQgcGxheWVyPC9kaXY+XG4gICAgICA8L2Rpdj4gXG4gICAgKTtcbiAgfVxufSJdfQ==