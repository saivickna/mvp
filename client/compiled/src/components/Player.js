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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllci5qc3giXSwibmFtZXMiOlsiUGxheWVyIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJjb2hvcnQiLCJlcnJNc2ciLCJ3aW5kb3ciLCJwb3N0UGxheWVyIiwiY2xlYXJGb3JtIiwiYmluZCIsImJvZHkiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwbGF5ZXJOYW1lQ2hhbmdlIiwicGxheWVyQ29ob3J0Q2hhbmdlIiwic3VibWl0UGxheWVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxjQUFRLEVBRkc7QUFHWEMsY0FBUTtBQUhHLEtBQWI7QUFGaUI7QUFPbEI7Ozs7bUNBQ2U7QUFDZEMsYUFBT0MsVUFBUCxDQUFrQixLQUFLTCxLQUF2QixFQUE4QixLQUFLTSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBOUI7QUFDRDs7OzhCQUNVQyxJLEVBQU07QUFDZixVQUFJQSxTQUFTLFdBQWIsRUFBMEI7QUFDeEIsYUFBS0MsUUFBTCxDQUFjLEVBQUNOLFFBQVEsT0FBVCxFQUFkO0FBQ0QsT0FGRCxNQUVRO0FBQ04sYUFBS00sUUFBTCxDQUFjLEVBQUNSLE1BQUssRUFBTixFQUFVQyxRQUFPLEVBQWpCLEVBQXFCQyxRQUFRLFFBQTdCLEVBQWQ7QUFDRDtBQUNGOzs7cUNBQ2lCTyxLLEVBQU87QUFDdkIsV0FBS0QsUUFBTCxDQUFjLEVBQUNSLE1BQU1TLE1BQU1DLE1BQU4sQ0FBYUMsS0FBcEIsRUFBZDtBQUNEOzs7dUNBQ21CRixLLEVBQU87QUFDekIsV0FBS0QsUUFBTCxDQUFjLEVBQUNQLFFBQVFRLE1BQU1DLE1BQU4sQ0FBYUMsS0FBdEIsRUFBZDtBQUNEOzs7NkJBQ1M7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLHVDQUFPLFdBQVUsY0FBakIsRUFBZ0MsTUFBSyxNQUFyQyxFQUE0QyxPQUFPLEtBQUtaLEtBQUwsQ0FBV0MsSUFBOUQsRUFBb0UsVUFBVSxLQUFLWSxnQkFBTCxDQUFzQk4sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBOUUsR0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIRjtBQUlFLHVDQUFPLFdBQVUsY0FBakIsRUFBZ0MsTUFBSyxNQUFyQyxFQUE0QyxPQUFPLEtBQUtQLEtBQUwsQ0FBV0UsTUFBOUQsRUFBc0UsVUFBVSxLQUFLWSxrQkFBTCxDQUF3QlAsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBaEYsR0FKRjtBQUtFO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLEtBQUtRLFlBQUwsQ0FBa0JSLElBQWxCLENBQXVCLElBQXZCLENBQS9CLEVBQTZELFdBQVUsMkJBQXZFO0FBQUE7QUFBQSxTQUxGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVyxLQUFLUCxLQUFMLENBQVdHLE1BQTNCO0FBQUE7QUFBQTtBQU5GLE9BREY7QUFVRDs7OztFQXBDa0JhLE1BQU1DLFMiLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgY29ob3J0OiBcIlwiLFxyXG4gICAgICBlcnJNc2c6IFwiaGlkZGVuXCJcclxuICAgIH1cclxuICB9XHJcbiAgc3VibWl0UGxheWVyICgpIHtcclxuICAgIHdpbmRvdy5wb3N0UGxheWVyKHRoaXMuc3RhdGUsIHRoaXMuY2xlYXJGb3JtLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBjbGVhckZvcm0gKGJvZHkpIHtcclxuICAgIGlmIChib2R5ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJNc2c6IFwic2hvd25cIn0pXHJcbiAgICB9IGVsc2UgIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTonJywgY29ob3J0OicnLCBlcnJNc2c6IFwiaGlkZGVuXCJ9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcGxheWVyTmFtZUNoYW5nZSAoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuICBwbGF5ZXJDb2hvcnRDaGFuZ2UgKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjb2hvcnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMucGxheWVyTmFtZUNoYW5nZS5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgPGxhYmVsPkNvaG9ydDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuY29ob3J0fSBvbkNoYW5nZT17dGhpcy5wbGF5ZXJDb2hvcnRDaGFuZ2UuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0UGxheWVyLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwbGF5ZXJCdG5cIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5lcnJNc2d9PkZhaWxlZCB0byBhZGQgcGxheWVyPC9kaXY+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICk7XHJcbiAgfVxyXG59Il19