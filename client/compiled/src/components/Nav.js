"use strict";

var Nav = function Nav(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { className: "title" },
      "Avalon Stats"
    ),
    React.createElement(
      "ul",
      { className: "nav nav-tabs" },
      React.createElement(
        "li",
        { className: props.statsActive ? "active" : "", onClick: props.changeTabToStats },
        React.createElement(
          "a",
          { href: "#" },
          "Stats"
        )
      ),
      React.createElement(
        "li",
        { className: props.gameActive ? "active" : "", onClick: props.changeTabToGame },
        React.createElement(
          "a",
          { href: "#" },
          "Add Game"
        )
      ),
      React.createElement(
        "li",
        { className: props.playerActive ? "active" : "", onClick: props.changeTabToPlayer },
        React.createElement(
          "a",
          { href: "#" },
          "Add Player"
        )
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdi5qc3giXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJzdGF0c0FjdGl2ZSIsImNoYW5nZVRhYlRvU3RhdHMiLCJnYW1lQWN0aXZlIiwiY2hhbmdlVGFiVG9HYW1lIiwicGxheWVyQWN0aXZlIiwiY2hhbmdlVGFiVG9QbGF5ZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEtBQUQ7QUFBQSxTQUNSO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFJLFdBQVUsY0FBZDtBQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVdBLE1BQU1DLFdBQU4sR0FBb0IsUUFBcEIsR0FBK0IsRUFBOUMsRUFBa0QsU0FBU0QsTUFBTUUsZ0JBQWpFO0FBQW1GO0FBQUE7QUFBQSxZQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBbkYsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFJLFdBQVdGLE1BQU1HLFVBQU4sR0FBbUIsUUFBbkIsR0FBOEIsRUFBN0MsRUFBaUQsU0FBU0gsTUFBTUksZUFBaEU7QUFBaUY7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFqRixPQUZGO0FBR0U7QUFBQTtBQUFBLFVBQUksV0FBV0osTUFBTUssWUFBTixHQUFxQixRQUFyQixHQUFnQyxFQUEvQyxFQUFtRCxTQUFTTCxNQUFNTSxpQkFBbEU7QUFBcUY7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFyRjtBQUhGO0FBRkYsR0FEUTtBQUFBLENBQVYiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hdiA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BdmFsb24gU3RhdHM8L2gxPlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5zdGF0c0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifSBvbkNsaWNrPXtwcm9wcy5jaGFuZ2VUYWJUb1N0YXRzfT48YSBocmVmPVwiI1wiPlN0YXRzPC9hPjwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9e3Byb3BzLmdhbWVBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17cHJvcHMuY2hhbmdlVGFiVG9HYW1lfT48YSBocmVmPVwiI1wiPkFkZCBHYW1lPC9hPjwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9e3Byb3BzLnBsYXllckFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifSBvbkNsaWNrPXtwcm9wcy5jaGFuZ2VUYWJUb1BsYXllcn0+PGEgaHJlZj1cIiNcIj5BZGQgUGxheWVyPC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG4pOyJdfQ==