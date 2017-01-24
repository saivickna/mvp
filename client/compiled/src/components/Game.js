"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { className: "form-inline winCriteria" },
          React.createElement(
            "label",
            { className: "radio-inline" },
            React.createElement("input", { type: "radio", name: "optradio" }),
            "Servants of Arthur Win"
          ),
          React.createElement(
            "label",
            { className: "radio-inline" },
            React.createElement("input", { type: "radio", name: "optradio" }),
            "Minions of Mordred Win"
          ),
          React.createElement(
            "label",
            { className: "radio-inline" },
            React.createElement("input", { type: "radio", name: "optradio" }),
            "Assassin Kills Merlin"
          )
        ),
        React.createElement(PlayerTable, null)
      );
    }
  }]);

  return Game;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dhbWUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTTs7O0FBQ0osZ0JBQVksS0FBWixFQUFtQjs7OzRHQUNYLFFBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhLEVBQWIsQ0FGaUI7O0dBQW5COzs7OzZCQUtVO0FBQ1IsYUFDRTs7O1FBQ0U7O1lBQU0sV0FBVSx5QkFBVixFQUFOO1VBQ0U7O2NBQU8sV0FBVSxjQUFWLEVBQVA7WUFBZ0MsK0JBQU8sTUFBSyxPQUFMLEVBQWEsTUFBSyxVQUFMLEVBQXBCLENBQWhDOztXQURGO1VBRUU7O2NBQU8sV0FBVSxjQUFWLEVBQVA7WUFBZ0MsK0JBQU8sTUFBSyxPQUFMLEVBQWEsTUFBSyxVQUFMLEVBQXBCLENBQWhDOztXQUZGO1VBR0U7O2NBQU8sV0FBVSxjQUFWLEVBQVA7WUFBZ0MsK0JBQU8sTUFBSyxPQUFMLEVBQWEsTUFBSyxVQUFMLEVBQXBCLENBQWhDOztXQUhGO1NBREY7UUFNRSxvQkFBQyxXQUFELE9BTkY7T0FERixDQURROzs7OztFQU5PLE1BQU0sU0FBTiIsImZpbGUiOiJHYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIHdpbkNyaXRlcmlhXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIi8+U2VydmFudHMgb2YgQXJ0aHVyIFdpbjwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIi8+TWluaW9ucyBvZiBNb3JkcmVkIFdpbjwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIi8+QXNzYXNzaW4gS2lsbHMgTWVybGluPC9sYWJlbD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8UGxheWVyVGFibGUgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==