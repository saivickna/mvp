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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQU0sU0FBTixHQUFNLENBQUMsS0FBRDtTQUNSOzs7SUFDRTs7UUFBSSxXQUFVLE9BQVYsRUFBSjs7S0FERjtJQUVFOztRQUFJLFdBQVUsY0FBVixFQUFKO01BQ0U7O1VBQUksV0FBVyxNQUFNLFdBQU4sR0FBb0IsUUFBcEIsR0FBK0IsRUFBL0IsRUFBbUMsU0FBUyxNQUFNLGdCQUFOLEVBQTNEO1FBQW1GOztZQUFHLE1BQUssR0FBTCxFQUFIOztTQUFuRjtPQURGO01BRUU7O1VBQUksV0FBVyxNQUFNLFVBQU4sR0FBbUIsUUFBbkIsR0FBOEIsRUFBOUIsRUFBa0MsU0FBUyxNQUFNLGVBQU4sRUFBMUQ7UUFBaUY7O1lBQUcsTUFBSyxHQUFMLEVBQUg7O1NBQWpGO09BRkY7TUFHRTs7VUFBSSxXQUFXLE1BQU0sWUFBTixHQUFxQixRQUFyQixHQUFnQyxFQUFoQyxFQUFvQyxTQUFTLE1BQU0saUJBQU4sRUFBNUQ7UUFBcUY7O1lBQUcsTUFBSyxHQUFMLEVBQUg7O1NBQXJGO09BSEY7S0FGRjs7Q0FEUSIsImZpbGUiOiJOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTmF2ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXZhbG9uIFN0YXRzPC9oMT5cbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5zdGF0c0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifSBvbkNsaWNrPXtwcm9wcy5jaGFuZ2VUYWJUb1N0YXRzfT48YSBocmVmPVwiI1wiPlN0YXRzPC9hPjwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5nYW1lQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9e3Byb3BzLmNoYW5nZVRhYlRvR2FtZX0+PGEgaHJlZj1cIiNcIj5BZGQgR2FtZTwvYT48L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGxheWVyQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9e3Byb3BzLmNoYW5nZVRhYlRvUGxheWVyfT48YSBocmVmPVwiI1wiPkFkZCBQbGF5ZXI8L2E+PC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7Il19