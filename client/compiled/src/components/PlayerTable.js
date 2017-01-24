'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerTable = function (_React$Component) {
  _inherits(PlayerTable, _React$Component);

  function PlayerTable(props) {
    _classCallCheck(this, PlayerTable);

    var _this = _possibleConstructorReturn(this, (PlayerTable.__proto__ || Object.getPrototypeOf(PlayerTable)).call(this, props));

    _this.state = {
      personID: 0,
      personName: '',
      role: 'Merlin',
      roleId: 0
    };
    // <input type="text" placeholder='Player' className="form-control"/>
    return _this;
  }

  _createClass(PlayerTable, [{
    key: 'changePerson',
    value: function changePerson(event) {
      this.setState({ personID: event.target.value });
      var index = event.target.selectedIndex;
      this.setState({ personName: event.target[index].text });
    }
  }, {
    key: 'changeRole',
    value: function changeRole(event) {
      this.setState({ role: event.target.value, roleId: event.target.selectedIndex < 3 ? 0 : 1 });
    }
  }, {
    key: 'addPerson',
    value: function addPerson() {

      var player = { id: this.state.personID, name: this.state.personName, alliance: this.state.roleId, allianceRole: this.state.role };
      // var curPlayers = this.state.players;
      // curPlayers.push(player);

      // this.setState({players: curPlayers})
      this.props.addPerson(player);
    }
  }, {
    key: 'removePerson',
    value: function removePerson() {
      // var curPlayers = this.state.players;
      // curPlayers.pop();
      // this.setState({players: curPlayers})
      this.props.removePerson();
    }
  }, {
    key: 'submitGame',
    value: function submitGame() {
      this.props.submitGame();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row clearfix' },
          React.createElement(
            'div',
            { className: 'col-md-12 column' },
            React.createElement(
              'table',
              { className: 'table table-bordered table-hover', id: 'tab_logic' },
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'th',
                    { className: 'text-center' },
                    'Player'
                  ),
                  React.createElement(
                    'th',
                    { className: 'text-center' },
                    'Role'
                  )
                )
              ),
              React.createElement(
                'tbody',
                null,
                this.props.players.map(function (player) {
                  return React.createElement(
                    'tr',
                    null,
                    React.createElement(
                      'td',
                      null,
                      player.name
                    ),
                    React.createElement(
                      'td',
                      null,
                      player.allianceRole
                    )
                  );
                }),
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'td',
                    null,
                    React.createElement(PlayerOptions, { changePerson: this.changePerson.bind(this) })
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'select',
                      { onChange: this.changeRole.bind(this), className: 'form-control' },
                      React.createElement(
                        'option',
                        null,
                        'Merlin'
                      ),
                      React.createElement(
                        'option',
                        null,
                        'Percival'
                      ),
                      React.createElement(
                        'option',
                        null,
                        'Servant of Arthur'
                      ),
                      React.createElement(
                        'option',
                        null,
                        'Mordred'
                      ),
                      React.createElement(
                        'option',
                        null,
                        'Assassin'
                      ),
                      React.createElement(
                        'option',
                        null,
                        'Morgana'
                      ),
                      React.createElement(
                        'option',
                        null,
                        'Oberon'
                      ),
                      React.createElement(
                        'option',
                        null,
                        'Minion of Mordred'
                      )
                    )
                  )
                ),
                React.createElement('tr', { id: 'addr1' })
              )
            )
          )
        ),
        React.createElement(
          'a',
          { id: 'add_row', onClick: this.addPerson.bind(this), className: 'btn btn-default pull-left' },
          'Add Row'
        ),
        React.createElement(
          'a',
          { id: 'delete_row', onClick: this.removePerson.bind(this), className: 'btn btn-default' },
          'Delete Row'
        ),
        React.createElement(
          'a',
          { id: 'submit_game', onClick: this.submitGame.bind(this), className: 'pull-right btn btn-primary' },
          'Submit Game'
        )
      );
    }
  }]);

  return PlayerTable;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllclRhYmxlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07OztBQUNKLHVCQUFZLEtBQVosRUFBbUI7OzswSEFDWCxRQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGdCQUFVLENBQVY7QUFDQSxrQkFBWSxFQUFaO0FBQ0EsWUFBTSxRQUFOO0FBQ0EsY0FBUSxDQUFSO0tBSkY7O0FBRmlCO0dBQW5COzs7O2lDQVdhLE9BQU87QUFDbEIsV0FBSyxRQUFMLENBQWMsRUFBQyxVQUFVLE1BQU0sTUFBTixDQUFhLEtBQWIsRUFBekIsRUFEa0I7QUFFbEIsVUFBSSxRQUFRLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FGTTtBQUdsQixXQUFLLFFBQUwsQ0FBYyxFQUFDLFlBQVksTUFBTSxNQUFOLENBQWEsS0FBYixFQUFvQixJQUFwQixFQUEzQixFQUhrQjs7OzsrQkFLVCxPQUFPO0FBQ2hCLFdBQUssUUFBTCxDQUFjLEVBQUMsTUFBTSxNQUFNLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLFFBQVEsS0FBQyxDQUFNLE1BQU4sQ0FBYSxhQUFiLEdBQTZCLENBQTdCLEdBQWtDLENBQW5DLEdBQXVDLENBQXZDLEVBQWpELEVBRGdCOzs7O2dDQUdOOztBQUVWLFVBQUksU0FBUyxFQUFDLElBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQixNQUFNLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBdUIsVUFBVSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CLGNBQWMsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUEzRzs7Ozs7QUFGTSxVQU9WLENBQUssS0FBTCxDQUFXLFNBQVgsQ0FBcUIsTUFBckIsRUFQVTs7OzttQ0FTRzs7OztBQUliLFdBQUssS0FBTCxDQUFXLFlBQVgsR0FKYTs7OztpQ0FNRDtBQUNaLFdBQUssS0FBTCxDQUFXLFVBQVgsR0FEWTs7Ozs2QkFHTDtBQUNQLGFBQ0U7O1VBQUssV0FBVSxXQUFWLEVBQUw7UUFDRTs7WUFBSyxXQUFVLGNBQVYsRUFBTDtVQUNBOztjQUFLLFdBQVUsa0JBQVYsRUFBTDtZQUNFOztnQkFBTyxXQUFVLGtDQUFWLEVBQTZDLElBQUcsV0FBSCxFQUFwRDtjQUNFOzs7Z0JBQ0U7OztrQkFDRTs7c0JBQUksV0FBVSxhQUFWLEVBQUo7O21CQURGO2tCQUlFOztzQkFBSSxXQUFVLGFBQVYsRUFBSjs7bUJBSkY7aUJBREY7ZUFERjtjQVdFOzs7Z0JBQ0csS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixHQUFuQixDQUF1Qjt5QkFBVzs7O29CQUFJOzs7c0JBQUssT0FBTyxJQUFQO3FCQUFUO29CQUEwQjs7O3NCQUFLLE9BQU8sWUFBUDtxQkFBL0I7O2lCQUFYLENBRDFCO2dCQUVFOzs7a0JBQ0U7OztvQkFDQSxvQkFBQyxhQUFELElBQWUsY0FBYyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBZCxFQUFmLENBREE7bUJBREY7a0JBSUU7OztvQkFDQTs7d0JBQVEsVUFBVSxLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBVixFQUFzQyxXQUFVLGNBQVYsRUFBOUM7c0JBQ0U7Ozs7dUJBREY7c0JBRUU7Ozs7dUJBRkY7c0JBR0U7Ozs7dUJBSEY7c0JBSUU7Ozs7dUJBSkY7c0JBS0U7Ozs7dUJBTEY7c0JBTUU7Ozs7dUJBTkY7c0JBT0U7Ozs7dUJBUEY7c0JBUUU7Ozs7dUJBUkY7cUJBREE7bUJBSkY7aUJBRkY7Z0JBbUJFLDRCQUFJLElBQUcsT0FBSCxFQUFKLENBbkJGO2VBWEY7YUFERjtXQURBO1NBREY7UUFzQ0E7O1lBQUcsSUFBRyxTQUFILEVBQWEsU0FBUyxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCLENBQVQsRUFBb0MsV0FBVSwyQkFBVixFQUFwRDs7U0F0Q0E7UUFzQ3FHOztZQUFHLElBQUcsWUFBSCxFQUFnQixTQUFTLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUFULEVBQXVDLFdBQVUsaUJBQVYsRUFBMUQ7O1NBdENyRztRQXNDeU07O1lBQUcsSUFBRyxhQUFILEVBQWlCLFNBQVMsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBQVQsRUFBcUMsV0FBVSw0QkFBVixFQUF6RDs7U0F0Q3pNO09BREYsQ0FETzs7Ozs7RUF0Q2UsTUFBTSxTQUFOIiwiZmlsZSI6IlBsYXllclRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGVyc29uSUQ6IDAsXG4gICAgICBwZXJzb25OYW1lOiAnJyxcbiAgICAgIHJvbGU6ICdNZXJsaW4nLFxuICAgICAgcm9sZUlkOiAwXG4gICAgfVxuICAgIC8vIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdQbGF5ZXInIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgfVxuXG4gIGNoYW5nZVBlcnNvbihldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3BlcnNvbklEOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB2YXIgaW5kZXggPSBldmVudC50YXJnZXQuc2VsZWN0ZWRJbmRleDtcbiAgICB0aGlzLnNldFN0YXRlKHtwZXJzb25OYW1lOiBldmVudC50YXJnZXRbaW5kZXhdLnRleHR9KTtcbiAgfVxuICBjaGFuZ2VSb2xlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogZXZlbnQudGFyZ2V0LnZhbHVlLCByb2xlSWQ6IChldmVudC50YXJnZXQuc2VsZWN0ZWRJbmRleCA8IDMpID8gMCA6IDF9KTtcbiAgfVxuICBhZGRQZXJzb24oKSB7XG5cbiAgICB2YXIgcGxheWVyID0ge2lkOiB0aGlzLnN0YXRlLnBlcnNvbklELCBuYW1lOiB0aGlzLnN0YXRlLnBlcnNvbk5hbWUsIGFsbGlhbmNlOiB0aGlzLnN0YXRlLnJvbGVJZCwgYWxsaWFuY2VSb2xlOiB0aGlzLnN0YXRlLnJvbGV9XG4gICAgLy8gdmFyIGN1clBsYXllcnMgPSB0aGlzLnN0YXRlLnBsYXllcnM7XG4gICAgLy8gY3VyUGxheWVycy5wdXNoKHBsYXllcik7XG5cbiAgICAvLyB0aGlzLnNldFN0YXRlKHtwbGF5ZXJzOiBjdXJQbGF5ZXJzfSlcbiAgICB0aGlzLnByb3BzLmFkZFBlcnNvbihwbGF5ZXIpO1xuICB9XG4gIHJlbW92ZVBlcnNvbigpIHtcbiAgICAvLyB2YXIgY3VyUGxheWVycyA9IHRoaXMuc3RhdGUucGxheWVycztcbiAgICAvLyBjdXJQbGF5ZXJzLnBvcCgpO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe3BsYXllcnM6IGN1clBsYXllcnN9KVxuICAgIHRoaXMucHJvcHMucmVtb3ZlUGVyc29uKCk7XG4gIH1cbiAgc3VibWl0R2FtZSAoKSB7XG4gICAgdGhpcy5wcm9wcy5zdWJtaXRHYW1lKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjbGVhcmZpeFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2x1bW5cIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXJcIiBpZD1cInRhYl9sb2dpY1wiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBQbGF5ZXJcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgUm9sZVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wbGF5ZXJzLm1hcChwbGF5ZXIgPT4gKDx0cj48dGQ+e3BsYXllci5uYW1lfTwvdGQ+PHRkPntwbGF5ZXIuYWxsaWFuY2VSb2xlfTwvdGQ+PC90cj4pKX1cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8UGxheWVyT3B0aW9ucyBjaGFuZ2VQZXJzb249e3RoaXMuY2hhbmdlUGVyc29uLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVJvbGUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk1lcmxpbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5QZXJjaXZhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZXJ2YW50IG9mIEFydGh1cjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Nb3JkcmVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkFzc2Fzc2luPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk1vcmdhbmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+T2Jlcm9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk1pbmlvbiBvZiBNb3JkcmVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyIGlkPSdhZGRyMSc+PC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhIGlkPVwiYWRkX3Jvd1wiIG9uQ2xpY2s9e3RoaXMuYWRkUGVyc29uLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBwdWxsLWxlZnRcIj5BZGQgUm93PC9hPjxhIGlkPSdkZWxldGVfcm93JyBvbkNsaWNrPXt0aGlzLnJlbW92ZVBlcnNvbi5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5EZWxldGUgUm93PC9hPjxhIGlkPSdzdWJtaXRfZ2FtZScgb25DbGljaz17dGhpcy5zdWJtaXRHYW1lLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0IEdhbWU8L2E+XG4gICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn0iXX0=