"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerTable = function (_React$Component) {
  _inherits(PlayerTable, _React$Component);

  function PlayerTable(props) {
    _classCallCheck(this, PlayerTable);

    return _possibleConstructorReturn(this, (PlayerTable.__proto__ || Object.getPrototypeOf(PlayerTable)).call(this, props));
    // <input type="text" placeholder='Player' className="form-control"/>
  }

  _createClass(PlayerTable, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row clearfix" },
          React.createElement(
            "div",
            { className: "col-md-12 column" },
            React.createElement(
              "table",
              { className: "table table-bordered table-hover", id: "tab_logic" },
              React.createElement(
                "thead",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { className: "text-center" },
                    "Player"
                  ),
                  React.createElement(
                    "th",
                    { className: "text-center" },
                    "Role"
                  )
                )
              ),
              React.createElement(
                "tbody",
                null,
                React.createElement(
                  "tr",
                  { id: "addr0" },
                  React.createElement(
                    "td",
                    null,
                    React.createElement(PlayerOptions, null)
                  ),
                  React.createElement(
                    "td",
                    null,
                    React.createElement(
                      "select",
                      { className: "form-control" },
                      React.createElement(
                        "option",
                        null,
                        "Merlin"
                      ),
                      React.createElement(
                        "option",
                        null,
                        "Mordred"
                      ),
                      React.createElement(
                        "option",
                        null,
                        "Assassin"
                      ),
                      React.createElement(
                        "option",
                        null,
                        "Morgana"
                      ),
                      React.createElement(
                        "option",
                        null,
                        "Oberon"
                      ),
                      React.createElement(
                        "option",
                        null,
                        "Percival"
                      ),
                      React.createElement(
                        "option",
                        null,
                        "Servant of Arthur"
                      ),
                      React.createElement(
                        "option",
                        null,
                        "Minion of Mordred"
                      )
                    )
                  )
                ),
                React.createElement("tr", { id: "addr1" })
              )
            )
          )
        ),
        React.createElement(
          "a",
          { id: "add_row", className: "btn btn-default pull-left" },
          "Add Row"
        ),
        React.createElement(
          "a",
          { id: "delete_row", className: "pull-right btn btn-default" },
          "Delete Row"
        )
      );
    }
  }]);

  return PlayerTable;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllclRhYmxlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07OztBQUNKLHVCQUFZLEtBQVosRUFBbUI7OztxSEFDWDs7QUFEVyxHQUFuQjs7Ozs2QkFJUztBQUNQLGFBQ0U7O1VBQUssV0FBVSxXQUFWLEVBQUw7UUFDRTs7WUFBSyxXQUFVLGNBQVYsRUFBTDtVQUNBOztjQUFLLFdBQVUsa0JBQVYsRUFBTDtZQUNFOztnQkFBTyxXQUFVLGtDQUFWLEVBQTZDLElBQUcsV0FBSCxFQUFwRDtjQUNFOzs7Z0JBQ0U7OztrQkFDRTs7c0JBQUksV0FBVSxhQUFWLEVBQUo7O21CQURGO2tCQUlFOztzQkFBSSxXQUFVLGFBQVYsRUFBSjs7bUJBSkY7aUJBREY7ZUFERjtjQVdFOzs7Z0JBQ0U7O29CQUFJLElBQUcsT0FBSCxFQUFKO2tCQUNFOzs7b0JBQ0Esb0JBQUMsYUFBRCxPQURBO21CQURGO2tCQUlFOzs7b0JBQ0E7O3dCQUFRLFdBQVUsY0FBVixFQUFSO3NCQUNFOzs7O3VCQURGO3NCQUVFOzs7O3VCQUZGO3NCQUdFOzs7O3VCQUhGO3NCQUlFOzs7O3VCQUpGO3NCQUtFOzs7O3VCQUxGO3NCQU1FOzs7O3VCQU5GO3NCQU9FOzs7O3VCQVBGO3NCQVFFOzs7O3VCQVJGO3FCQURBO21CQUpGO2lCQURGO2dCQWtCRSw0QkFBSSxJQUFHLE9BQUgsRUFBSixDQWxCRjtlQVhGO2FBREY7V0FEQTtTQURGO1FBcUNBOztZQUFHLElBQUcsU0FBSCxFQUFhLFdBQVUsMkJBQVYsRUFBaEI7O1NBckNBO1FBcUNpRTs7WUFBRyxJQUFHLFlBQUgsRUFBZ0IsV0FBVSw0QkFBVixFQUFuQjs7U0FyQ2pFO09BREYsQ0FETzs7Ozs7RUFMZSxNQUFNLFNBQU4iLCJmaWxlIjoiUGxheWVyVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXJUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdQbGF5ZXInIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNsZWFyZml4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbHVtblwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlclwiIGlkPVwidGFiX2xvZ2ljXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIFBsYXllclxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBSb2xlXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0ciBpZD0nYWRkcjAnPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8UGxheWVyT3B0aW9ucyAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk1lcmxpbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Nb3JkcmVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkFzc2Fzc2luPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk1vcmdhbmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+T2Jlcm9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPlBlcmNpdmFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlcnZhbnQgb2YgQXJ0aHVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk1pbmlvbiBvZiBNb3JkcmVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyIGlkPSdhZGRyMSc+PC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhIGlkPVwiYWRkX3Jvd1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBwdWxsLWxlZnRcIj5BZGQgUm93PC9hPjxhIGlkPSdkZWxldGVfcm93JyBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IGJ0biBidG4tZGVmYXVsdFwiPkRlbGV0ZSBSb3c8L2E+XG4gICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn0iXX0=