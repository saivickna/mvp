'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      username: '',
      password: '',
      headerText: 'Create an account',
      footerText: 'Not registered? ',
      buttonText: 'login',
      errMsg: '',
      signup: 0
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'changeUser',
    value: function changeUser(e) {
      this.setState({ username: e.target.value });
    }
  }, {
    key: 'changePW',
    value: function changePW(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: 'changeType',
    value: function changeType() {
      if (this.state.headerText === 'Sign In') {
        this.setState({ headerText: 'Create an account', footerText: 'Not registered? ', signup: 0, buttonText: 'login' });
      } else {
        this.setState({ headerText: 'Sign In', footerText: 'Already registered? ', signup: 1, buttonText: 'create' });
      }
    }
  }, {
    key: 'submitLogin',
    value: function submitLogin() {
      var _this2 = this;

      var user = { username: this.state.username, password: this.state.password };
      if (this.state.signup) {
        window.postSignup(user, function (body) {
          if (body === 'undefined') {
            _this2.setState({ username: '', password: '', errMsg: 'Username already exists' });
          } else {
            window.localStorage.setItem('com.avalon', body.token);
            _this2.props.loggingIn();
            _this2.setState({ username: '', password: '', errMsg: '' });
          }
        });
      } else {
        window.postSignin(user, function (body) {
          console.log(body);
          if (body === 'undefined') {
            _this2.setState({ username: '', password: '', errMsg: 'Invalid username/password' });
          } else {
            if (body.token) {
              window.localStorage.setItem('com.avalon', body.token);
              _this2.props.loggingIn();
              _this2.setState({ username: '', password: '', errMsg: '' });
            }
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // return (
      //   <div>
      //   <h3>{this.state.headerText}</h3>
      //   <form>
      //     <label>Username: </label><input type="text" value={this.state.username} onChange={this.changeUser.bind(this)}/>
      //     <label>Password: </label><input type="text" value={this.state.password} onChange={this.changePW.bind(this)}/>
      //   </form>
      //   <a href="#" onClick={this.changeType.bind(this)}>{this.state.footerText}</a>
      //   </div>
      //   )

      return React.createElement(
        'div',
        { className: 'login-page' },
        React.createElement(
          'div',
          { className: 'formLogin' },
          React.createElement(
            'form',
            { className: 'login-form' },
            React.createElement('input', { type: 'text', value: this.state.username, onChange: this.changeUser.bind(this), placeholder: 'name' }),
            React.createElement('input', { type: 'password', value: this.state.password, onChange: this.changePW.bind(this), placeholder: 'password' }),
            React.createElement(
              'button',
              { onClick: this.submitLogin.bind(this) },
              this.state.buttonText
            ),
            React.createElement(
              'p',
              { className: 'message' },
              this.state.footerText,
              React.createElement(
                'a',
                { href: '#', onClick: this.changeType.bind(this) },
                this.state.headerText
              )
            )
          ),
          React.createElement(
            'p',
            { className: 'errorMessage' },
            this.state.errMsg
          )
        )
      );
    }
  }]);

  return Login;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGVhZGVyVGV4dCIsImZvb3RlclRleHQiLCJidXR0b25UZXh0IiwiZXJyTXNnIiwic2lnbnVwIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VyIiwid2luZG93IiwicG9zdFNpZ251cCIsImJvZHkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJsb2dnaW5nSW4iLCJwb3N0U2lnbmluIiwiY29uc29sZSIsImxvZyIsImNoYW5nZVVzZXIiLCJiaW5kIiwiY2hhbmdlUFciLCJzdWJtaXRMb2dpbiIsImNoYW5nZVR5cGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGtCQUFZLG1CQUhEO0FBSVhDLGtCQUFZLGtCQUpEO0FBS1hDLGtCQUFZLE9BTEQ7QUFNWEMsY0FBUSxFQU5HO0FBT1hDLGNBQVE7QUFQRyxLQUFiO0FBSGlCO0FBWWxCOzs7OytCQUNVQyxDLEVBQUc7QUFDWixXQUFLQyxRQUFMLENBQWMsRUFBQ1IsVUFBVU8sRUFBRUUsTUFBRixDQUFTQyxLQUFwQixFQUFkO0FBQ0Q7Ozs2QkFDUUgsQyxFQUFHO0FBQ1YsV0FBS0MsUUFBTCxDQUFjLEVBQUNQLFVBQVVNLEVBQUVFLE1BQUYsQ0FBU0MsS0FBcEIsRUFBZDtBQUNEOzs7aUNBQ1k7QUFDWCxVQUFJLEtBQUtYLEtBQUwsQ0FBV0csVUFBWCxLQUEwQixTQUE5QixFQUF5QztBQUN2QyxhQUFLTSxRQUFMLENBQWMsRUFBQ04sWUFBWSxtQkFBYixFQUFrQ0Ms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QUFLeEIsS0FBTCxDQUFXRztBQUE3RDtBQUE5QztBQUpGLFdBREY7QUFPRTtBQUFBO0FBQUEsY0FBRyxXQUFVLGNBQWI7QUFBNkIsaUJBQUtILEtBQUwsQ0FBV007QUFBeEM7QUFQRjtBQURGLE9BSEY7QUFpQkQ7Ozs7RUF0RmlCc0IsTUFBTUMsUyIsImZpbGUiOiJMb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgaGVhZGVyVGV4dDogJ0NyZWF0ZSBhbiBhY2NvdW50JyxcclxuICAgICAgZm9vdGVyVGV4dDogJ05vdCByZWdpc3RlcmVkPyAnLFxyXG4gICAgICBidXR0b25UZXh0OiAnbG9naW4nLFxyXG4gICAgICBlcnJNc2c6ICcnLFxyXG4gICAgICBzaWdudXA6IDBcclxuICAgIH07XHJcbiAgfVxyXG4gIGNoYW5nZVVzZXIoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG4gIGNoYW5nZVBXKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuICBjaGFuZ2VUeXBlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaGVhZGVyVGV4dCA9PT0gJ1NpZ24gSW4nKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlclRleHQ6ICdDcmVhdGUgYW4gYWNjb3VudCcsIGZvb3RlclRleHQ6ICdOb3QgcmVnaXN0ZXJlZD8gJywgc2lnbnVwOiAwLCBidXR0b25UZXh0OiAnbG9naW4nfSk7ICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJUZXh0OiAnU2lnbiBJbicsIGZvb3RlclRleHQ6ICdBbHJlYWR5IHJlZ2lzdGVyZWQ/ICcsIHNpZ251cDogMSwgYnV0dG9uVGV4dDogJ2NyZWF0ZSd9KTtcclxuICAgIH1cclxuICB9XHJcbiAgc3VibWl0TG9naW4oKSB7XHJcbiAgICB2YXIgdXNlciA9IHt1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmR9O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2lnbnVwKSB7XHJcbiAgICAgIHdpbmRvdy5wb3N0U2lnbnVwKHVzZXIsIChib2R5KSA9PiB7XHJcbiAgICAgICAgaWYgKGJvZHkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJywgZXJyTXNnOiAnVXNlcm5hbWUgYWxyZWFkeSBleGlzdHMnfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb20uYXZhbG9uJywgYm9keS50b2tlbik7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmxvZ2dpbmdJbigpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJycsIGVyck1zZzogJyd9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LnBvc3RTaWduaW4odXNlciwgKGJvZHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICBpZiAoYm9keSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnLCBlcnJNc2c6ICdJbnZhbGlkIHVzZXJuYW1lL3Bhc3N3b3JkJ30pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChib2R5LnRva2VuKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tLmF2YWxvbicsIGJvZHkudG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvZ2dpbmdJbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJywgZXJyTXNnOiAnJ30pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICA8ZGl2PlxyXG4gICAgLy8gICA8aDM+e3RoaXMuc3RhdGUuaGVhZGVyVGV4dH08L2gzPlxyXG4gICAgLy8gICA8Zm9ybT5cclxuICAgIC8vICAgICA8bGFiZWw+VXNlcm5hbWU6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVVzZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgLy8gICAgIDxsYWJlbD5QYXNzd29yZDogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlUFcuYmluZCh0aGlzKX0vPlxyXG4gICAgLy8gICA8L2Zvcm0+XHJcbiAgICAvLyAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5jaGFuZ2VUeXBlLmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLmZvb3RlclRleHR9PC9hPlxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vICAgKVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1wYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtTG9naW5cIj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVVzZXIuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJuYW1lXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVBXLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRMb2dpbi5iaW5kKHRoaXMpfT57dGhpcy5zdGF0ZS5idXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e3RoaXMuc3RhdGUuZm9vdGVyVGV4dH08YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuY2hhbmdlVHlwZS5iaW5kKHRoaXMpfT57dGhpcy5zdGF0ZS5oZWFkZXJUZXh0fTwvYT48L3A+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57dGhpcy5zdGF0ZS5lcnJNc2d9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG5cclxuXHJcbiAgfVxyXG59Il19