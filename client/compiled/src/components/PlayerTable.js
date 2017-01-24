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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllclRhYmxlLmpzeCJdLCJuYW1lcyI6WyJQbGF5ZXJUYWJsZSIsInByb3BzIiwic3RhdGUiLCJwZXJzb25JRCIsInBlcnNvbk5hbWUiLCJyb2xlIiwicm9sZUlkIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaW5kZXgiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInBsYXllciIsImlkIiwibmFtZSIsImFsbGlhbmNlIiwiYWxsaWFuY2VSb2xlIiwiYWRkUGVyc29uIiwicmVtb3ZlUGVyc29uIiwic3VibWl0R2FtZSIsInBsYXllcnMiLCJtYXAiLCJjaGFuZ2VQZXJzb24iLCJiaW5kIiwiY2hhbmdlUm9sZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxDQURDO0FBRVhDLGtCQUFZLEVBRkQ7QUFHWEMsWUFBTSxRQUhLO0FBSVhDLGNBQVE7QUFKRyxLQUFiO0FBTUE7QUFSaUI7QUFTbEI7Ozs7aUNBRVlDLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ0wsVUFBVUksTUFBTUUsTUFBTixDQUFhQyxLQUF4QixFQUFkO0FBQ0EsVUFBSUMsUUFBUUosTUFBTUUsTUFBTixDQUFhRyxhQUF6QjtBQUNBLFdBQUtKLFFBQUwsQ0FBYyxFQUFDSixZQUFZRyxNQUFNRSxNQUFOLENBQWFFLEtBQWIsRUFBb0JFLElBQWpDLEVBQWQ7QUFDRDs7OytCQUNVTixLLEVBQU87QUFDaEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNILE1BQU1FLE1BQU1FLE1BQU4sQ0FBYUMsS0FBcEIsRUFBMkJKLFFBQVNDLE1BQU1FLE1BQU4sQ0FBYUcsYUFBYixHQUE2QixDQUE5QixHQUFtQyxDQUFuQyxHQUF1QyxDQUExRSxFQUFkO0FBQ0Q7OztnQ0FDVzs7QUFFVixVQUFJRSxTQUFTLEVBQUNDLElBQUksS0FBS2IsS0FBTCxDQUFXQyxRQUFoQixFQUEwQmEsTUFBTSxLQUFLZCxLQUFMLENBQVdFLFVBQTNDLEVBQXVEYSxVQUFVLEtBQUtmLEtBQUwsQ0FBV0ksTUFBNUUsRUFBb0ZZLGNBQWMsS0FBS2hCLEtBQUwsQ0FBV0csSUFBN0csRUFBYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFLSixLQUFMLENBQVdrQixTQUFYLENBQXFCTCxNQUFyQjtBQUNEOzs7bUNBQ2M7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFLYixLQUFMLENBQVdtQixZQUFYO0FBQ0Q7OztpQ0FDYTtBQUNaLFdBQUtuQixLQUFMLENBQVdvQixVQUFYO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLGtDQUFqQixFQUFvRCxJQUFHLFdBQXZEO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLHNCQUFJLFdBQVUsYUFBZDtBQUFBO0FBQUEsbUJBREY7QUFJRTtBQUFBO0FBQUEsc0JBQUksV0FBVSxhQUFkO0FBQUE7QUFBQTtBQUpGO0FBREYsZUFERjtBQVdFO0FBQUE7QUFBQTtBQUNHLHFCQUFLcEIsS0FBTCxDQUFXcUIsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUI7QUFBQSx5QkFBVztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBS1QsNkJBQU9FO0FBQVoscUJBQUo7QUFBMEI7QUFBQTtBQUFBO0FBQUtGLDZCQUFPSTtBQUFaO0FBQTFCLG1CQUFYO0FBQUEsaUJBQXZCLENBREg7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDQSx3Q0FBQyxhQUFELElBQWUsY0FBYyxLQUFLTSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUE3QjtBQURBLG1CQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLHdCQUFRLFVBQVUsS0FBS0MsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEIsRUFBOEMsV0FBVSxjQUF4RDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFEQTtBQUpGLGlCQUZGO0FBbUJFLDRDQUFJLElBQUcsT0FBUDtBQW5CRjtBQVhGO0FBREY7QUFEQSxTQURGO0FBc0NBO0FBQUE7QUFBQSxZQUFHLElBQUcsU0FBTixFQUFnQixTQUFTLEtBQUtOLFNBQUwsQ0FBZU0sSUFBZixDQUFvQixJQUFwQixDQUF6QixFQUFvRCxXQUFVLDJCQUE5RDtBQUFBO0FBQUEsU0F0Q0E7QUFzQ3FHO0FBQUE7QUFBQSxZQUFHLElBQUcsWUFBTixFQUFtQixTQUFTLEtBQUtMLFlBQUwsQ0FBa0JLLElBQWxCLENBQXVCLElBQXZCLENBQTVCLEVBQTBELFdBQVUsaUJBQXBFO0FBQUE7QUFBQSxTQXRDckc7QUFzQ3lNO0FBQUE7QUFBQSxZQUFHLElBQUcsYUFBTixFQUFvQixTQUFTLEtBQUtKLFVBQUwsQ0FBZ0JJLElBQWhCLENBQXFCLElBQXJCLENBQTdCLEVBQXlELFdBQVUsNEJBQW5FO0FBQUE7QUFBQTtBQXRDek0sT0FERjtBQTBDRDs7OztFQWpGdUJFLE1BQU1DLFMiLCJmaWxlIjoiUGxheWVyVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXJUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBlcnNvbklEOiAwLFxyXG4gICAgICBwZXJzb25OYW1lOiAnJyxcclxuICAgICAgcm9sZTogJ01lcmxpbicsXHJcbiAgICAgIHJvbGVJZDogMFxyXG4gICAgfVxyXG4gICAgLy8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1BsYXllcicgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGVyc29uKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwZXJzb25JRDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB2YXIgaW5kZXggPSBldmVudC50YXJnZXQuc2VsZWN0ZWRJbmRleDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3BlcnNvbk5hbWU6IGV2ZW50LnRhcmdldFtpbmRleF0udGV4dH0pO1xyXG4gIH1cclxuICBjaGFuZ2VSb2xlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiBldmVudC50YXJnZXQudmFsdWUsIHJvbGVJZDogKGV2ZW50LnRhcmdldC5zZWxlY3RlZEluZGV4IDwgMykgPyAwIDogMX0pO1xyXG4gIH1cclxuICBhZGRQZXJzb24oKSB7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IHtpZDogdGhpcy5zdGF0ZS5wZXJzb25JRCwgbmFtZTogdGhpcy5zdGF0ZS5wZXJzb25OYW1lLCBhbGxpYW5jZTogdGhpcy5zdGF0ZS5yb2xlSWQsIGFsbGlhbmNlUm9sZTogdGhpcy5zdGF0ZS5yb2xlfVxyXG4gICAgLy8gdmFyIGN1clBsYXllcnMgPSB0aGlzLnN0YXRlLnBsYXllcnM7XHJcbiAgICAvLyBjdXJQbGF5ZXJzLnB1c2gocGxheWVyKTtcclxuXHJcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtwbGF5ZXJzOiBjdXJQbGF5ZXJzfSlcclxuICAgIHRoaXMucHJvcHMuYWRkUGVyc29uKHBsYXllcik7XHJcbiAgfVxyXG4gIHJlbW92ZVBlcnNvbigpIHtcclxuICAgIC8vIHZhciBjdXJQbGF5ZXJzID0gdGhpcy5zdGF0ZS5wbGF5ZXJzO1xyXG4gICAgLy8gY3VyUGxheWVycy5wb3AoKTtcclxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe3BsYXllcnM6IGN1clBsYXllcnN9KVxyXG4gICAgdGhpcy5wcm9wcy5yZW1vdmVQZXJzb24oKTtcclxuICB9XHJcbiAgc3VibWl0R2FtZSAoKSB7XHJcbiAgICB0aGlzLnByb3BzLnN1Ym1pdEdhbWUoKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjbGVhcmZpeFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbHVtblwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXCIgaWQ9XCJ0YWJfbG9naWNcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBQbGF5ZXJcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgUm9sZVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMucGxheWVycy5tYXAocGxheWVyID0+ICg8dHI+PHRkPntwbGF5ZXIubmFtZX08L3RkPjx0ZD57cGxheWVyLmFsbGlhbmNlUm9sZX08L3RkPjwvdHI+KSl9XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPFBsYXllck9wdGlvbnMgY2hhbmdlUGVyc29uPXt0aGlzLmNoYW5nZVBlcnNvbi5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VSb2xlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk1lcmxpbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPlBlcmNpdmFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+U2VydmFudCBvZiBBcnRodXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Nb3JkcmVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+QXNzYXNzaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Nb3JnYW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+T2Jlcm9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+TWluaW9uIG9mIE1vcmRyZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBpZD0nYWRkcjEnPjwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGEgaWQ9XCJhZGRfcm93XCIgb25DbGljaz17dGhpcy5hZGRQZXJzb24uYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtbGVmdFwiPkFkZCBSb3c8L2E+PGEgaWQ9J2RlbGV0ZV9yb3cnIG9uQ2xpY2s9e3RoaXMucmVtb3ZlUGVyc29uLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPkRlbGV0ZSBSb3c8L2E+PGEgaWQ9J3N1Ym1pdF9nYW1lJyBvbkNsaWNrPXt0aGlzLnN1Ym1pdEdhbWUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwicHVsbC1yaWdodCBidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQgR2FtZTwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgfVxyXG59Il19