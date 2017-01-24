"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slice = function (_React$Component) {
  _inherits(Slice, _React$Component);

  function Slice() {
    _classCallCheck(this, Slice);

    return _possibleConstructorReturn(this, (Slice.__proto__ || Object.getPrototypeOf(Slice)).apply(this, arguments));
  }

  _createClass(Slice, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          fill = _props.fill,
          _props$innerRadius = _props.innerRadius,
          innerRadius = _props$innerRadius === undefined ? 0 : _props$innerRadius,
          outerRadius = _props.outerRadius;
      // https://github.com/d3/d3/wiki/SVG-Shapes#arc

      var arc = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
      return React.createElement("path", { d: arc(value), fill: fill });
    }
  }]);

  return Slice;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NsaWNlLmpzeCJdLCJuYW1lcyI6WyJTbGljZSIsInByb3BzIiwidmFsdWUiLCJmaWxsIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsImFyYyIsImQzIiwic3ZnIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSxtQkFDMkMsS0FBS0MsS0FEaEQ7QUFBQSxVQUNGQyxLQURFLFVBQ0ZBLEtBREU7QUFBQSxVQUNLQyxJQURMLFVBQ0tBLElBREw7QUFBQSxzQ0FDV0MsV0FEWDtBQUFBLFVBQ1dBLFdBRFgsc0NBQ3lCLENBRHpCO0FBQUEsVUFDNEJDLFdBRDVCLFVBQzRCQSxXQUQ1QjtBQUVQOztBQUNBLFVBQUlDLE1BQU1DLEdBQUdDLEdBQUgsQ0FBT0YsR0FBUCxHQUNQRixXQURPLENBQ0tBLFdBREwsRUFFUEMsV0FGTyxDQUVLQSxXQUZMLENBQVY7QUFHQSxhQUNFLDhCQUFNLEdBQUdDLElBQUlKLEtBQUosQ0FBVCxFQUFxQixNQUFNQyxJQUEzQixHQURGO0FBR0Q7Ozs7RUFWaUJNLE1BQU1DLFMiLCJmaWxlIjoiU2xpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTbGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHt2YWx1ZSwgZmlsbCwgaW5uZXJSYWRpdXMgPSAwLCBvdXRlclJhZGl1c30gPSB0aGlzLnByb3BzO1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2QzL2QzL3dpa2kvU1ZHLVNoYXBlcyNhcmNcclxuICAgIGxldCBhcmMgPSBkMy5zdmcuYXJjKClcclxuICAgICAgLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzKVxyXG4gICAgICAub3V0ZXJSYWRpdXMob3V0ZXJSYWRpdXMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHBhdGggZD17YXJjKHZhbHVlKX0gZmlsbD17ZmlsbH0gLz5cclxuICAgICk7XHJcbiAgfVxyXG59Il19