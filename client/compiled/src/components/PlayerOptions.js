'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerOptions = function (_React$Component) {
  _inherits(PlayerOptions, _React$Component);

  function PlayerOptions(props) {
    _classCallCheck(this, PlayerOptions);

    var _this = _possibleConstructorReturn(this, (PlayerOptions.__proto__ || Object.getPrototypeOf(PlayerOptions)).call(this, props));

    _this.state = {
      players: []
    };
    return _this;
  }

  _createClass(PlayerOptions, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var self = this;
      window.getPlayers(function (body) {
        if (body === 'undefined') {
          console.log('Failure');
        } else {
          _this2.setState({ players: body });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'select',
        { className: 'form-control' },
        this.state.players.map(function (player) {
          return React.createElement(
            'option',
            null,
            player.name
          );
        })
      );
    }
  }]);

  return PlayerOptions;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllck9wdGlvbnMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTTs7O0FBQ0oseUJBQVksS0FBWixFQUFtQjs7OzhIQUNYLFFBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsZUFBUyxFQUFUO0tBREYsQ0FGaUI7O0dBQW5COzs7O3lDQU1xQjs7O0FBQ25CLFVBQUksT0FBTyxJQUFQLENBRGU7QUFFbkIsYUFBTyxVQUFQLENBQWtCLFVBQUMsSUFBRCxFQUFVO0FBQzFCLFlBQUksU0FBUyxXQUFULEVBQXNCO0FBQ3hCLGtCQUFRLEdBQVIsQ0FBWSxTQUFaLEVBRHdCO1NBQTFCLE1BRU87QUFDTCxpQkFBSyxRQUFMLENBQWMsRUFBQyxTQUFTLElBQVQsRUFBZixFQURLO1NBRlA7T0FEZ0IsQ0FBbEIsQ0FGbUI7Ozs7NkJBVVg7QUFDUixhQUNFOztVQUFRLFdBQVUsY0FBVixFQUFSO1FBQ0csS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixHQUFuQixDQUF1QjtpQkFBVTs7O1lBQVMsT0FBTyxJQUFQOztTQUFuQixDQUQxQjtPQURGLENBRFE7Ozs7O0VBakJnQixNQUFNLFNBQU4iLCJmaWxlIjoiUGxheWVyT3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllck9wdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWVyczogW11cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB3aW5kb3cuZ2V0UGxheWVycygoYm9keSkgPT4ge1xuICAgICAgaWYgKGJvZHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWlsdXJlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJzOiBib2R5fSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAge3RoaXMuc3RhdGUucGxheWVycy5tYXAocGxheWVyID0+IDxvcHRpb24+e3BsYXllci5uYW1lfTwvb3B0aW9uPil9XG4gICAgICA8L3NlbGVjdD5cbiAgICApXG5cbiAgfVxufSJdfQ==