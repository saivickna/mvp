"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameRatio = function (_React$Component) {
  _inherits(GameRatio, _React$Component);

  function GameRatio(props) {
    _classCallCheck(this, GameRatio);

    var _this = _possibleConstructorReturn(this, (GameRatio.__proto__ || Object.getPrototypeOf(GameRatio)).call(this, props));

    _this.state = {
      data: []
    };
    _this.colorScale = d3.scale.category10();
    return _this;
  }

  _createClass(GameRatio, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var data = { arthur: 0, mordred: 0, assassin: 0 };
      window.getGames(function (body) {
        if (body !== undefined) {
          for (var i = 0; i < body.length; i++) {
            if (body[i].winType === "Servants of Arthur Win") {
              data.arthur++;
            } else if (body[i].winType === "Minions of Mordred Win") {
              data.mordred++;
            } else {
              data.assassin++;
            }
          }
          var pieData = [data.arthur, data.mordred, data.assassin];
          _this2.setState({ data: pieData });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      // For a real world project, use something like
      // https://github.com/digidem/react-dimensions
      var width = window.innerWidth;
      var height = window.innerHeight;
      var minViewportSize = Math.min(width, height);
      // This sets the radius of the pie chart to fit within
      // the current window size, with some additional padding
      var radius = minViewportSize * .9 / 4;
      // Centers the pie chart
      var x = width / 3;
      var y = height / 4;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "leg" },
              "Servants of Arthur Win: "
            ),
            React.createElement("div", { className: "foo blue" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "leg" },
              "Minions of Mordred Win: "
            ),
            React.createElement("div", { className: "foo orange" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "leg" },
              "Assassin Kills Merlin: "
            ),
            React.createElement("div", { className: "foo green" })
          )
        ),
        React.createElement(
          "svg",
          { width: "1000px", height: "1000px" },
          React.createElement(Pie, { x: x, y: y, radius: radius, data: this.state.data })
        )
      );
    }
  }]);

  return GameRatio;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dhbWVSYXRpby5qc3giXSwibmFtZXMiOlsiR2FtZVJhdGlvIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb2xvclNjYWxlIiwiZDMiLCJzY2FsZSIsImNhdGVnb3J5MTAiLCJhcnRodXIiLCJtb3JkcmVkIiwiYXNzYXNzaW4iLCJ3aW5kb3ciLCJnZXRHYW1lcyIsImJvZHkiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwid2luVHlwZSIsInBpZURhdGEiLCJzZXRTdGF0ZSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibWluVmlld3BvcnRTaXplIiwiTWF0aCIsIm1pbiIsInJhZGl1cyIsIngiLCJ5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU07QUFESyxLQUFiO0FBR0EsVUFBS0MsVUFBTCxHQUFrQkMsR0FBR0MsS0FBSCxDQUFTQyxVQUFULEVBQWxCO0FBTGlCO0FBTWxCOzs7O3lDQUNvQjtBQUFBOztBQUNuQixVQUFJSixPQUFPLEVBQUNLLFFBQVEsQ0FBVCxFQUFZQyxTQUFTLENBQXJCLEVBQXdCQyxVQUFVLENBQWxDLEVBQVg7QUFDQUMsYUFBT0MsUUFBUCxDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDeEIsWUFBSUEsU0FBU0MsU0FBYixFQUF3QjtBQUN0QixlQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0csTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDLGdCQUFJRixLQUFLRSxDQUFMLEVBQVFFLE9BQVIsS0FBb0Isd0JBQXhCLEVBQWtEO0FBQ2hEZCxtQkFBS0ssTUFBTDtBQUNELGFBRkQsTUFFTyxJQUFLSyxLQUFLRSxDQUFMLEVBQVFFLE9BQVIsS0FBb0Isd0JBQXpCLEVBQW9EO0FBQ3pEZCxtQkFBS00sT0FBTDtBQUNELGFBRk0sTUFFQTtBQUNMTixtQkFBS08sUUFBTDtBQUNEO0FBQ0Y7QUFDRCxjQUFJUSxVQUFVLENBQ1pmLEtBQUtLLE1BRE8sRUFDQ0wsS0FBS00sT0FETixFQUNlTixLQUFLTyxRQURwQixDQUFkO0FBR0EsaUJBQUtTLFFBQUwsQ0FBYyxFQUFDaEIsTUFBTWUsT0FBUCxFQUFkO0FBQ0Q7QUFDRixPQWhCRDtBQWlCRDs7OzZCQUNTO0FBQ1g7QUFDRztBQUNBLFVBQUlFLFFBQVFULE9BQU9VLFVBQW5CO0FBQ0EsVUFBSUMsU0FBU1gsT0FBT1ksV0FBcEI7QUFDQSxVQUFJQyxrQkFBa0JDLEtBQUtDLEdBQUwsQ0FBU04sS0FBVCxFQUFnQkUsTUFBaEIsQ0FBdEI7QUFDQTtBQUNBO0FBQ0EsVUFBSUssU0FBVUgsa0JBQWtCLEVBQW5CLEdBQXlCLENBQXRDO0FBQ0E7QUFDQSxVQUFJSSxJQUFJUixRQUFRLENBQWhCO0FBQ0EsVUFBSVMsSUFBSVAsU0FBUyxDQUFqQjs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFBQTtBQUFBLGFBQUw7QUFBd0QseUNBQUssV0FBVSxVQUFmO0FBQXhELFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQUE7QUFBQSxhQUFMO0FBQXdELHlDQUFLLFdBQVUsWUFBZjtBQUF4RCxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUFBO0FBQUEsYUFBTDtBQUF1RCx5Q0FBSyxXQUFVLFdBQWY7QUFBdkQ7QUFIRixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssT0FBTSxRQUFYLEVBQW9CLFFBQU8sUUFBM0I7QUFFRSw4QkFBQyxHQUFELElBQUssR0FBR00sQ0FBUixFQUFXLEdBQUdDLENBQWQsRUFBaUIsUUFBUUYsTUFBekIsRUFBaUMsTUFBTSxLQUFLekIsS0FBTCxDQUFXQyxJQUFsRDtBQUZGO0FBTkYsT0FERjtBQWNEOzs7O0VBdkRxQjJCLE1BQU1DLFMiLCJmaWxlIjoiR2FtZVJhdGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jbGFzcyBHYW1lUmF0aW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBbXVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvclNjYWxlID0gZDMuc2NhbGUuY2F0ZWdvcnkxMCgpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB2YXIgZGF0YSA9IHthcnRodXI6IDAsIG1vcmRyZWQ6IDAsIGFzc2Fzc2luOiAwfTtcclxuICAgIHdpbmRvdy5nZXRHYW1lcygoYm9keSkgPT4ge1xyXG4gICAgICBpZiAoYm9keSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoYm9keVtpXS53aW5UeXBlID09PSBcIlNlcnZhbnRzIG9mIEFydGh1ciBXaW5cIikge1xyXG4gICAgICAgICAgICBkYXRhLmFydGh1cisrO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgoYm9keVtpXS53aW5UeXBlID09PSBcIk1pbmlvbnMgb2YgTW9yZHJlZCBXaW5cIikpIHtcclxuICAgICAgICAgICAgZGF0YS5tb3JkcmVkKys7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmFzc2Fzc2luKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwaWVEYXRhID0gW1xyXG4gICAgICAgICAgZGF0YS5hcnRodXIsIGRhdGEubW9yZHJlZCwgZGF0YS5hc3Nhc3NpblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcGllRGF0YX0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICByZW5kZXIgKCkge1xyXG4gLy8gRm9yIGEgcmVhbCB3b3JsZCBwcm9qZWN0LCB1c2Ugc29tZXRoaW5nIGxpa2VcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kaWdpZGVtL3JlYWN0LWRpbWVuc2lvbnNcclxuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGxldCBtaW5WaWV3cG9ydFNpemUgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgIC8vIFRoaXMgc2V0cyB0aGUgcmFkaXVzIG9mIHRoZSBwaWUgY2hhcnQgdG8gZml0IHdpdGhpblxyXG4gICAgLy8gdGhlIGN1cnJlbnQgd2luZG93IHNpemUsIHdpdGggc29tZSBhZGRpdGlvbmFsIHBhZGRpbmdcclxuICAgIGxldCByYWRpdXMgPSAobWluVmlld3BvcnRTaXplICogLjkpIC8gNDtcclxuICAgIC8vIENlbnRlcnMgdGhlIHBpZSBjaGFydFxyXG4gICAgbGV0IHggPSB3aWR0aCAvIDM7XHJcbiAgICBsZXQgeSA9IGhlaWdodCAvIDQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj48ZGl2IGNsYXNzTmFtZT1cImxlZ1wiPlNlcnZhbnRzIG9mIEFydGh1ciBXaW46IDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZm9vIGJsdWVcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PGRpdiBjbGFzc05hbWU9XCJsZWdcIj5NaW5pb25zIG9mIE1vcmRyZWQgV2luOiA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZvbyBvcmFuZ2VcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PGRpdiBjbGFzc05hbWU9XCJsZWdcIj5Bc3Nhc3NpbiBLaWxscyBNZXJsaW46IDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZm9vIGdyZWVuXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMDBweFwiIGhlaWdodD1cIjEwMDBweFwiPlxyXG4gICAgICAgICAgey8qIFdlJ2xsIGNyZWF0ZSB0aGlzIGNvbXBvbmVudCBpbiBhIG1pbnV0ZSAqL31cclxuICAgICAgICAgIDxQaWUgeD17eH0geT17eX0gcmFkaXVzPXtyYWRpdXN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuICB9XHJcbn0iXX0=