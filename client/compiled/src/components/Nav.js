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
      ),
      React.createElement(
        "li",
        { onClick: props.loggingOut },
        React.createElement(
          "a",
          { href: "#" },
          "Log Out"
        )
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdi5qc3giXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJzdGF0c0FjdGl2ZSIsImNoYW5nZVRhYlRvU3RhdHMiLCJnYW1lQWN0aXZlIiwiY2hhbmdlVGFiVG9HYW1lIiwicGxheWVyQWN0aXZlIiwiY2hhbmdlVGFiVG9QbGF5ZXIiLCJsb2dnaW5nT3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxLQUFEO0FBQUEsU0FDUjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBSSxXQUFVLGNBQWQ7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFXQSxNQUFNQyxXQUFOLEdBQW9CLFFBQXBCLEdBQStCLEVBQTlDLEVBQWtELFNBQVNELE1BQU1FLGdCQUFqRTtBQUFtRjtBQUFBO0FBQUEsWUFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQW5GLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBSSxXQUFXRixNQUFNRyxVQUFOLEdBQW1CLFFBQW5CLEdBQThCLEVBQTdDLEVBQWlELFNBQVNILE1BQU1JLGVBQWhFO0FBQWlGO0FBQUE7QUFBQSxZQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBakYsT0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFJLFdBQVdKLE1BQU1LLFlBQU4sR0FBcUIsUUFBckIsR0FBZ0MsRUFBL0MsRUFBbUQsU0FBU0wsTUFBTU0saUJBQWxFO0FBQXFGO0FBQUE7QUFBQSxZQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBckYsT0FIRjtBQUlFO0FBQUE7QUFBQSxVQUFJLFNBQVNOLE1BQU1PLFVBQW5CO0FBQStCO0FBQUE7QUFBQSxZQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBL0I7QUFKRjtBQUZGLEdBRFE7QUFBQSxDQUFWIiwiZmlsZSI6Ik5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYXYgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXZhbG9uIFN0YXRzPC9oMT5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMuc3RhdHNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17cHJvcHMuY2hhbmdlVGFiVG9TdGF0c30+PGEgaHJlZj1cIiNcIj5TdGF0czwvYT48L2xpPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5nYW1lQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9e3Byb3BzLmNoYW5nZVRhYlRvR2FtZX0+PGEgaHJlZj1cIiNcIj5BZGQgR2FtZTwvYT48L2xpPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5wbGF5ZXJBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17cHJvcHMuY2hhbmdlVGFiVG9QbGF5ZXJ9PjxhIGhyZWY9XCIjXCI+QWRkIFBsYXllcjwvYT48L2xpPlxyXG4gICAgICA8bGkgb25DbGljaz17cHJvcHMubG9nZ2luZ091dH0+PGEgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG4pOyJdfQ==