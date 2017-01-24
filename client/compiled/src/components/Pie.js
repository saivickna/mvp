"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie = function (_React$Component) {
  _inherits(Pie, _React$Component);

  function Pie(props) {
    _classCallCheck(this, Pie);

    // https://github.com/d3/d3/wiki/Ordinal-Scales#category10
    var _this = _possibleConstructorReturn(this, (Pie.__proto__ || Object.getPrototypeOf(Pie)).call(this, props));

    _this.colorScale = d3.scale.category10();
    _this.renderSlice = _this.renderSlice.bind(_this);
    return _this;
  }

  _createClass(Pie, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          data = _props.data;
      // https://github.com/d3/d3/wiki/Pie-Layout

      var pie = d3.layout.pie();
      return React.createElement(
        "g",
        { transform: "translate(" + x + ", " + y + ")" },
        pie(data).map(this.renderSlice)
      );
    }
  }, {
    key: "renderSlice",
    value: function renderSlice(value, i) {
      // We'll create this component in a minute
      return React.createElement(Slice, { key: i,
        outerRadius: this.props.radius,
        value: value,
        fill: this.colorScale(i) });
    }
  }]);

  return Pie;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BpZS5qc3giXSwibmFtZXMiOlsiUGllIiwicHJvcHMiLCJjb2xvclNjYWxlIiwiZDMiLCJzY2FsZSIsImNhdGVnb3J5MTAiLCJyZW5kZXJTbGljZSIsImJpbmQiLCJ4IiwieSIsImRhdGEiLCJwaWUiLCJsYXlvdXQiLCJtYXAiLCJ2YWx1ZSIsImkiLCJyYWRpdXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBRWpCO0FBRmlCLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxVQUFMLEdBQWtCQyxHQUFHQyxLQUFILENBQVNDLFVBQVQsRUFBbEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBSmlCO0FBS2xCOzs7OzZCQUVRO0FBQUEsbUJBQ1ksS0FBS04sS0FEakI7QUFBQSxVQUNGTyxDQURFLFVBQ0ZBLENBREU7QUFBQSxVQUNDQyxDQURELFVBQ0NBLENBREQ7QUFBQSxVQUNJQyxJQURKLFVBQ0lBLElBREo7QUFFUDs7QUFDQSxVQUFJQyxNQUFNUixHQUFHUyxNQUFILENBQVVELEdBQVYsRUFBVjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUcsMEJBQXdCSCxDQUF4QixVQUE4QkMsQ0FBOUIsTUFBSDtBQUVHRSxZQUFJRCxJQUFKLEVBQVVHLEdBQVYsQ0FBYyxLQUFLUCxXQUFuQjtBQUZILE9BREY7QUFNRDs7O2dDQUVXUSxLLEVBQU9DLEMsRUFBRztBQUNwQjtBQUNBLGFBQ0Usb0JBQUMsS0FBRCxJQUFPLEtBQUtBLENBQVo7QUFDTyxxQkFBYSxLQUFLZCxLQUFMLENBQVdlLE1BRC9CO0FBRU8sZUFBT0YsS0FGZDtBQUdPLGNBQU0sS0FBS1osVUFBTCxDQUFnQmEsQ0FBaEIsQ0FIYixHQURGO0FBTUQ7Ozs7RUE1QmVFLE1BQU1DLFMiLCJmaWxlIjoiUGllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIFBpZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kMy9kMy93aWtpL09yZGluYWwtU2NhbGVzI2NhdGVnb3J5MTBcclxuICAgIHRoaXMuY29sb3JTY2FsZSA9IGQzLnNjYWxlLmNhdGVnb3J5MTAoKTtcclxuICAgIHRoaXMucmVuZGVyU2xpY2UgPSB0aGlzLnJlbmRlclNsaWNlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQge3gsIHksIGRhdGF9ID0gdGhpcy5wcm9wcztcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kMy9kMy93aWtpL1BpZS1MYXlvdXRcclxuICAgIGxldCBwaWUgPSBkMy5sYXlvdXQucGllKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt4fSwgJHt5fSlgfT5cclxuICAgICAgICB7LyogUmVuZGVyIGEgc2xpY2UgZm9yIGVhY2ggZGF0YSBwb2ludCAqL31cclxuICAgICAgICB7cGllKGRhdGEpLm1hcCh0aGlzLnJlbmRlclNsaWNlKX1cclxuICAgICAgPC9nPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclNsaWNlKHZhbHVlLCBpKSB7XHJcbiAgICAvLyBXZSdsbCBjcmVhdGUgdGhpcyBjb21wb25lbnQgaW4gYSBtaW51dGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTbGljZSBrZXk9e2l9XHJcbiAgICAgICAgICAgICBvdXRlclJhZGl1cz17dGhpcy5wcm9wcy5yYWRpdXN9XHJcbiAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICBmaWxsPXt0aGlzLmNvbG9yU2NhbGUoaSl9IC8+XHJcbiAgICApO1xyXG4gIH1cclxufSJdfQ==