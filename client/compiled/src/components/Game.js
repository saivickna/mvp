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

      // console.log('test');
      if (this.state.players.length === 0) {
        alert('Please add players');
      } else {
        var game = {};
        game.win = this.state.arthur ? 0 : 1;
        game.winType = this.state.arthur ? 'Servants of Arthur Win' : this.state.mordred ? 'Minions of Mordred Win' : 'Assassin Kills Merlin';
        game.players = this.state.players;
        // console.log(game);
        window.postGame(game, function () {
          console.log('came back');
          // this.forceUpdate();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dhbWUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTTs7O0FBQ0osZ0JBQVksS0FBWixFQUFtQjs7OzRHQUNYLFFBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsY0FBUSxJQUFSO0FBQ0EsZUFBUyxLQUFUO0FBQ0EsaUJBQVcsS0FBWDtBQUNBLG1CQUFhLEtBQWI7QUFDQSxlQUFTLEVBQVQ7S0FMRixDQUZpQjs7R0FBbkI7Ozs7aUNBVWE7Ozs7QUFFWCxVQUFJLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsTUFBbkIsS0FBOEIsQ0FBOUIsRUFBaUM7QUFDbkMsY0FBTSxvQkFBTixFQURtQztPQUFyQyxNQUVPO0FBQ0wsWUFBSSxPQUFPLEVBQVAsQ0FEQztBQUVMLGFBQUssR0FBTCxHQUFXLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsQ0FBcEIsR0FBd0IsQ0FBeEIsQ0FGTjtBQUdMLGFBQUssT0FBTCxHQUFlLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0Isd0JBQXBCLEdBQStDLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsd0JBQXJCLEdBQWdELHVCQUFoRCxDQUh6RDtBQUlMLGFBQUssT0FBTCxHQUFlLEtBQUssS0FBTCxDQUFXLE9BQVg7O0FBSlYsY0FNTCxDQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsRUFBc0IsWUFBTTtBQUMxQixrQkFBUSxHQUFSLENBQVksV0FBWjs7QUFEMEIsZ0JBRzFCLENBQUssUUFBTCxDQUFjLEVBQUMsU0FBUyxFQUFULEVBQWYsRUFIMEI7U0FBTixDQUF0QixDQU5LO09BRlA7Ozs7bUNBaUJhO0FBQ2IsV0FBSyxRQUFMLENBQWMsRUFBQyxRQUFRLElBQVIsRUFBYyxTQUFTLEtBQVQsRUFBZ0IsV0FBVyxLQUFYLEVBQTdDLEVBRGE7Ozs7b0NBR0M7QUFDZCxXQUFLLFFBQUwsQ0FBYyxFQUFDLFFBQVEsS0FBUixFQUFlLFNBQVMsSUFBVCxFQUFlLFdBQVcsS0FBWCxFQUE3QyxFQURjOzs7O3FDQUdDO0FBQ2YsV0FBSyxRQUFMLENBQWMsRUFBQyxRQUFRLEtBQVIsRUFBZSxTQUFTLEtBQVQsRUFBZ0IsV0FBVyxJQUFYLEVBQTlDLEVBRGU7Ozs7OEJBR1AsUUFBUTs7O0FBR2hCLFVBQUksYUFBYSxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBSEQ7QUFJaEIsaUJBQVcsSUFBWCxDQUFnQixNQUFoQixFQUpnQjtBQUtoQixXQUFLLFFBQUwsQ0FBYyxFQUFDLFNBQVMsVUFBVCxFQUFmLEVBTGdCOzs7O21DQU9IO0FBQ2IsVUFBSSxhQUFhLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FESjtBQUViLGlCQUFXLEdBQVgsR0FGYTtBQUdiLFdBQUssUUFBTCxDQUFjLEVBQUMsU0FBUyxVQUFULEVBQWYsRUFIYTs7Ozs2QkFLTDtBQUNSLGFBQ0U7OztRQUNFOztZQUFNLFdBQVUseUJBQVYsRUFBTjtVQUNFOztjQUFPLFdBQVUsY0FBVixFQUFQO1lBQWdDLCtCQUFPLE1BQUssT0FBTCxFQUFhLFVBQVUsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQVYsRUFBd0MsU0FBUyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CLE1BQUssVUFBTCxFQUF4RixDQUFoQzs7V0FERjtVQUVFOztjQUFPLFdBQVUsY0FBVixFQUFQO1lBQWdDLCtCQUFPLE1BQUssT0FBTCxFQUFhLFVBQVUsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQVYsRUFBeUMsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLE1BQUssVUFBTCxFQUExRixDQUFoQzs7V0FGRjtVQUdFOztjQUFPLFdBQVUsY0FBVixFQUFQO1lBQWdDLCtCQUFPLE1BQUssT0FBTCxFQUFhLFVBQVUsS0FBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLElBQXpCLENBQVYsRUFBMEMsU0FBUyxLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLE1BQUssVUFBTCxFQUE3RixDQUFoQzs7V0FIRjtTQURGO1FBTUUsb0JBQUMsV0FBRCxJQUFhLFdBQVcsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixJQUFwQixDQUFYLEVBQXNDLGNBQWMsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQWQsRUFBNEMsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLFlBQVksS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBQVosRUFBNUgsQ0FORjtPQURGLENBRFE7Ozs7O0VBbkRPLE1BQU0sU0FBTiIsImZpbGUiOiJHYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhcnRodXI6IHRydWUsXG4gICAgICBtb3JkcmVkOiBmYWxzZSxcbiAgICAgIGFzc2Fzc2FpbjogZmFsc2UsXG4gICAgICBwbGF5ZXJUYWJsZTogZmFsc2UsXG4gICAgICBwbGF5ZXJzOiBbXVxuICAgIH1cbiAgfVxuICBzdWJtaXRHYW1lKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgaWYgKHRoaXMuc3RhdGUucGxheWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgYWRkIHBsYXllcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGdhbWUgPSB7fTtcbiAgICAgIGdhbWUud2luID0gdGhpcy5zdGF0ZS5hcnRodXIgPyAwIDogMTtcbiAgICAgIGdhbWUud2luVHlwZSA9IHRoaXMuc3RhdGUuYXJ0aHVyID8gJ1NlcnZhbnRzIG9mIEFydGh1ciBXaW4nIDogdGhpcy5zdGF0ZS5tb3JkcmVkID8gJ01pbmlvbnMgb2YgTW9yZHJlZCBXaW4nIDogJ0Fzc2Fzc2luIEtpbGxzIE1lcmxpbic7XG4gICAgICBnYW1lLnBsYXllcnMgPSB0aGlzLnN0YXRlLnBsYXllcnM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhnYW1lKTtcbiAgICAgIHdpbmRvdy5wb3N0R2FtZShnYW1lLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYW1lIGJhY2snKTtcbiAgICAgICAgLy8gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJzOiBbXX0pO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgfVxuICBjaGFuZ2VBcnRodXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJ0aHVyOiB0cnVlLCBtb3JkcmVkOiBmYWxzZSwgYXNzYXNzYWluOiBmYWxzZX0pO1xuICB9XG4gIGNoYW5nZU1vcmRyZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJ0aHVyOiBmYWxzZSwgbW9yZHJlZDogdHJ1ZSwgYXNzYXNzYWluOiBmYWxzZX0pO1xuICB9IFxuICBjaGFuZ2VBc3Nhc3NpbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHthcnRodXI6IGZhbHNlLCBtb3JkcmVkOiBmYWxzZSwgYXNzYXNzYWluOiB0cnVlfSk7XG4gIH1cbiAgYWRkUGVyc29uKHBsYXllcikge1xuXG4gICAgLy92YXIgcGxheWVyID0ge2lkOiB0aGlzLnN0YXRlLnBlcnNvbklELCBuYW1lOiB0aGlzLnN0YXRlLnBlcnNvbk5hbWUsIGFsbGlhbmNlOiB0aGlzLnN0YXRlLnJvbGVJZCwgYWxsaWFuY2VSb2xlOiB0aGlzLnN0YXRlLnJvbGV9XG4gICAgdmFyIGN1clBsYXllcnMgPSB0aGlzLnN0YXRlLnBsYXllcnM7XG4gICAgY3VyUGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyczogY3VyUGxheWVyc30pXG4gIH1cbiAgcmVtb3ZlUGVyc29uKCkge1xuICAgIHZhciBjdXJQbGF5ZXJzID0gdGhpcy5zdGF0ZS5wbGF5ZXJzO1xuICAgIGN1clBsYXllcnMucG9wKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyczogY3VyUGxheWVyc30pXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgd2luQ3JpdGVyaWFcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUFydGh1ci5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLmFydGh1cn0gbmFtZT1cIm9wdHJhZGlvXCIvPlNlcnZhbnRzIG9mIEFydGh1ciBXaW48L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMuY2hhbmdlTW9yZHJlZC5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLm1vcmRyZWR9IG5hbWU9XCJvcHRyYWRpb1wiLz5NaW5pb25zIG9mIE1vcmRyZWQgV2luPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUFzc2Fzc2luLmJpbmQodGhpcyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuYXNzYXNzYWlufSBuYW1lPVwib3B0cmFkaW9cIi8+QXNzYXNzaW4gS2lsbHMgTWVybGluPC9sYWJlbD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8UGxheWVyVGFibGUgYWRkUGVyc29uPXt0aGlzLmFkZFBlcnNvbi5iaW5kKHRoaXMpfSByZW1vdmVQZXJzb249e3RoaXMucmVtb3ZlUGVyc29uLmJpbmQodGhpcyl9IHBsYXllcnM9e3RoaXMuc3RhdGUucGxheWVyc30gc3VibWl0R2FtZT17dGhpcy5zdWJtaXRHYW1lLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19