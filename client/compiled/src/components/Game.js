'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.state = {
      arthur: true,
      mordred: false,
      assassain: false,
      playerTable: false,
      players: []
    };
    return _this;
  }

  _createClass(Game, [{
    key: 'submitGame',
    value: function submitGame() {
      var _this2 = this;

      if (this.state.players.length === 0) {
        alert('Please add players');
      } else {
        var game = {};
        game.win = this.state.arthur ? 0 : 1;
        game.winType = this.state.arthur ? 'Servants of Arthur Win' : this.state.mordred ? 'Minions of Mordred Win' : 'Assassin Kills Merlin';
        game.players = this.state.players;
        window.postGame(game, function () {
          _this2.setState({ players: [] });
        });
      }
    }
  }, {
    key: 'changeArthur',
    value: function changeArthur() {
      this.setState({ arthur: true, mordred: false, assassain: false });
    }
  }, {
    key: 'changeMordred',
    value: function changeMordred() {
      this.setState({ arthur: false, mordred: true, assassain: false });
    }
  }, {
    key: 'changeAssassin',
    value: function changeAssassin() {
      this.setState({ arthur: false, mordred: false, assassain: true });
    }
  }, {
    key: 'addPerson',
    value: function addPerson(player) {

      //var player = {id: this.state.personID, name: this.state.personName, alliance: this.state.roleId, allianceRole: this.state.role}
      var curPlayers = this.state.players;
      curPlayers.push(player);
      this.setState({ players: curPlayers });
    }
  }, {
    key: 'removePerson',
    value: function removePerson() {
      var curPlayers = this.state.players;
      curPlayers.pop();
      this.setState({ players: curPlayers });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { className: 'form-inline winCriteria' },
          React.createElement(
            'label',
            { className: 'radio-inline' },
            React.createElement('input', { type: 'radio', onChange: this.changeArthur.bind(this), checked: this.state.arthur, name: 'optradio' }),
            'Servants of Arthur Win'
          ),
          React.createElement(
            'label',
            { className: 'radio-inline' },
            React.createElement('input', { type: 'radio', onChange: this.changeMordred.bind(this), checked: this.state.mordred, name: 'optradio' }),
            'Minions of Mordred Win'
          ),
          React.createElement(
            'label',
            { className: 'radio-inline' },
            React.createElement('input', { type: 'radio', onChange: this.changeAssassin.bind(this), checked: this.state.assassain, name: 'optradio' }),
            'Assassin Kills Merlin'
          )
        ),
        React.createElement(PlayerTable, { addPerson: this.addPerson.bind(this), removePerson: this.removePerson.bind(this), players: this.state.players, submitGame: this.submitGame.bind(this) })
      );
    }
  }]);

  return Game;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dhbWUuanN4Il0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsInN0YXRlIiwiYXJ0aHVyIiwibW9yZHJlZCIsImFzc2Fzc2FpbiIsInBsYXllclRhYmxlIiwicGxheWVycyIsImxlbmd0aCIsImFsZXJ0IiwiZ2FtZSIsIndpbiIsIndpblR5cGUiLCJ3aW5kb3ciLCJwb3N0R2FtZSIsInNldFN0YXRlIiwicGxheWVyIiwiY3VyUGxheWVycyIsInB1c2giLCJwb3AiLCJjaGFuZ2VBcnRodXIiLCJiaW5kIiwiY2hhbmdlTW9yZHJlZCIsImNoYW5nZUFzc2Fzc2luIiwiYWRkUGVyc29uIiwicmVtb3ZlUGVyc29uIiwic3VibWl0R2FtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLElBREc7QUFFWEMsZUFBUyxLQUZFO0FBR1hDLGlCQUFXLEtBSEE7QUFJWEMsbUJBQWEsS0FKRjtBQUtYQyxlQUFTO0FBTEUsS0FBYjtBQUZpQjtBQVNsQjs7OztpQ0FDWTtBQUFBOztBQUNYLFVBQUksS0FBS0wsS0FBTCxDQUFXSyxPQUFYLENBQW1CQyxNQUFuQixLQUE4QixDQUFsQyxFQUFxQztBQUNuQ0MsY0FBTSxvQkFBTjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlDLE9BQU8sRUFBWDtBQUNBQSxhQUFLQyxHQUFMLEdBQVcsS0FBS1QsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLENBQXBCLEdBQXdCLENBQW5DO0FBQ0FPLGFBQUtFLE9BQUwsR0FBZSxLQUFLVixLQUFMLENBQVdDLE1BQVgsR0FBb0Isd0JBQXBCLEdBQStDLEtBQUtELEtBQUwsQ0FBV0UsT0FBWCxHQUFxQix3QkFBckIsR0FBZ0QsdUJBQTlHO0FBQ0FNLGFBQUtILE9BQUwsR0FBZSxLQUFLTCxLQUFMLENBQVdLLE9BQTFCO0FBQ0FNLGVBQU9DLFFBQVAsQ0FBZ0JKLElBQWhCLEVBQXNCLFlBQU07QUFDMUIsaUJBQUtLLFFBQUwsQ0FBYyxFQUFDUixTQUFTLEVBQVYsRUFBZDtBQUNELFNBRkQ7QUFHRDtBQUdGOzs7bUNBQ2M7QUFDYixXQUFLUSxRQUFMLENBQWMsRUFBQ1osUUFBUSxJQUFULEVBQWVDLFNBQVMsS0FBeEIsRUFBK0JDLFdBQVcsS0FBMUMsRUFBZDtBQUNEOzs7b0NBQ2U7QUFDZCxXQUFLVSxRQUFMLENBQWMsRUFBQ1osUUFBUSxLQUFULEVBQWdCQyxTQUFTLElBQXpCLEVBQStCQyxXQUFXLEtBQTFDLEVBQWQ7QUFDRDs7O3FDQUNnQjtBQUNmLFdBQUtVLFFBQUwsQ0FBYyxFQUFDWixRQUFRLEtBQVQsRUFBZ0JDLFNBQVMsS0FBekIsRUFBZ0NDLFdBQVcsSUFBM0MsRUFBZDtBQUNEOzs7OEJBQ1NXLE0sRUFBUTs7QUFFaEI7QUFDQSxVQUFJQyxhQUFhLEtBQUtmLEtBQUwsQ0FBV0ssT0FBNUI7QUFDQVUsaUJBQVdDLElBQVgsQ0FBZ0JGLE1BQWhCO0FBQ0EsV0FBS0QsUUFBTCxDQUFjLEVBQUNSLFNBQVNVLFVBQVYsRUFBZDtBQUNEOzs7bUNBQ2M7QUFDYixVQUFJQSxhQUFhLEtBQUtmLEtBQUwsQ0FBV0ssT0FBNUI7QUFDQVUsaUJBQVdFLEdBQVg7QUFDQSxXQUFLSixRQUFMLENBQWMsRUFBQ1IsU0FBU1UsVUFBVixFQUFkO0FBQ0Q7Ozs2QkFDUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSx5QkFBaEI7QUFDRTtBQUFBO0FBQUEsY0FBTyxXQUFVLGNBQWpCO0FBQWdDLDJDQUFPLE1BQUssT0FBWixFQUFvQixVQUFVLEtBQUtHLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQTlCLEVBQTRELFNBQVMsS0FBS25CLEtBQUwsQ0FBV0MsTUFBaEYsRUFBd0YsTUFBSyxVQUE3RixHQUFoQztBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFPLFdBQVUsY0FBakI7QUFBZ0MsMkNBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsS0FBS21CLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBQTlCLEVBQTZELFNBQVMsS0FBS25CLEtBQUwsQ0FBV0UsT0FBakYsRUFBMEYsTUFBSyxVQUEvRixHQUFoQztBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQSxjQUFPLFdBQVUsY0FBakI7QUFBZ0MsMkNBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsS0FBS21CLGNBQUwsQ0FBb0JGLElBQXBCLENBQXlCLElBQXpCLENBQTlCLEVBQThELFNBQVMsS0FBS25CLEtBQUwsQ0FBV0csU0FBbEYsRUFBNkYsTUFBSyxVQUFsRyxHQUFoQztBQUFBO0FBQUE7QUFIRixTQURGO0FBTUUsNEJBQUMsV0FBRCxJQUFhLFdBQVcsS0FBS21CLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQixDQUF4QixFQUFtRCxjQUFjLEtBQUtJLFlBQUwsQ0FBa0JKLElBQWxCLENBQXVCLElBQXZCLENBQWpFLEVBQStGLFNBQVMsS0FBS25CLEtBQUwsQ0FBV0ssT0FBbkgsRUFBNEgsWUFBWSxLQUFLbUIsVUFBTCxDQUFnQkwsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBeEk7QUFORixPQURGO0FBVUQ7Ozs7RUExRGdCTSxNQUFNQyxTIiwiZmlsZSI6IkdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYXJ0aHVyOiB0cnVlLFxyXG4gICAgICBtb3JkcmVkOiBmYWxzZSxcclxuICAgICAgYXNzYXNzYWluOiBmYWxzZSxcclxuICAgICAgcGxheWVyVGFibGU6IGZhbHNlLFxyXG4gICAgICBwbGF5ZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBzdWJtaXRHYW1lKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucGxheWVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgYWxlcnQoJ1BsZWFzZSBhZGQgcGxheWVycycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdhbWUgPSB7fTtcclxuICAgICAgZ2FtZS53aW4gPSB0aGlzLnN0YXRlLmFydGh1ciA/IDAgOiAxO1xyXG4gICAgICBnYW1lLndpblR5cGUgPSB0aGlzLnN0YXRlLmFydGh1ciA/ICdTZXJ2YW50cyBvZiBBcnRodXIgV2luJyA6IHRoaXMuc3RhdGUubW9yZHJlZCA/ICdNaW5pb25zIG9mIE1vcmRyZWQgV2luJyA6ICdBc3Nhc3NpbiBLaWxscyBNZXJsaW4nO1xyXG4gICAgICBnYW1lLnBsYXllcnMgPSB0aGlzLnN0YXRlLnBsYXllcnM7XHJcbiAgICAgIHdpbmRvdy5wb3N0R2FtZShnYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyczogW119KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcbiAgY2hhbmdlQXJ0aHVyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJ0aHVyOiB0cnVlLCBtb3JkcmVkOiBmYWxzZSwgYXNzYXNzYWluOiBmYWxzZX0pO1xyXG4gIH1cclxuICBjaGFuZ2VNb3JkcmVkKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJ0aHVyOiBmYWxzZSwgbW9yZHJlZDogdHJ1ZSwgYXNzYXNzYWluOiBmYWxzZX0pO1xyXG4gIH0gXHJcbiAgY2hhbmdlQXNzYXNzaW4oKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHthcnRodXI6IGZhbHNlLCBtb3JkcmVkOiBmYWxzZSwgYXNzYXNzYWluOiB0cnVlfSk7XHJcbiAgfVxyXG4gIGFkZFBlcnNvbihwbGF5ZXIpIHtcclxuXHJcbiAgICAvL3ZhciBwbGF5ZXIgPSB7aWQ6IHRoaXMuc3RhdGUucGVyc29uSUQsIG5hbWU6IHRoaXMuc3RhdGUucGVyc29uTmFtZSwgYWxsaWFuY2U6IHRoaXMuc3RhdGUucm9sZUlkLCBhbGxpYW5jZVJvbGU6IHRoaXMuc3RhdGUucm9sZX1cclxuICAgIHZhciBjdXJQbGF5ZXJzID0gdGhpcy5zdGF0ZS5wbGF5ZXJzO1xyXG4gICAgY3VyUGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJzOiBjdXJQbGF5ZXJzfSlcclxuICB9XHJcbiAgcmVtb3ZlUGVyc29uKCkge1xyXG4gICAgdmFyIGN1clBsYXllcnMgPSB0aGlzLnN0YXRlLnBsYXllcnM7XHJcbiAgICBjdXJQbGF5ZXJzLnBvcCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyczogY3VyUGxheWVyc30pXHJcbiAgfVxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIHdpbkNyaXRlcmlhXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUFydGh1ci5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLmFydGh1cn0gbmFtZT1cIm9wdHJhZGlvXCIvPlNlcnZhbnRzIG9mIEFydGh1ciBXaW48L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17dGhpcy5jaGFuZ2VNb3JkcmVkLmJpbmQodGhpcyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUubW9yZHJlZH0gbmFtZT1cIm9wdHJhZGlvXCIvPk1pbmlvbnMgb2YgTW9yZHJlZCBXaW48L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17dGhpcy5jaGFuZ2VBc3Nhc3Npbi5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLmFzc2Fzc2Fpbn0gbmFtZT1cIm9wdHJhZGlvXCIvPkFzc2Fzc2luIEtpbGxzIE1lcmxpbjwvbGFiZWw+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxQbGF5ZXJUYWJsZSBhZGRQZXJzb249e3RoaXMuYWRkUGVyc29uLmJpbmQodGhpcyl9IHJlbW92ZVBlcnNvbj17dGhpcy5yZW1vdmVQZXJzb24uYmluZCh0aGlzKX0gcGxheWVycz17dGhpcy5zdGF0ZS5wbGF5ZXJzfSBzdWJtaXRHYW1lPXt0aGlzLnN1Ym1pdEdhbWUuYmluZCh0aGlzKX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19