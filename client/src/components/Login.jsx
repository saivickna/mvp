class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      headerText: 'Create an account',
      footerText: 'Not registered? ',
      buttonText: 'login',
      errMsg: '',
      signup: 0
    };
  }
  changeUser(e) {
    this.setState({username: e.target.value});
  }
  changePW(e) {
    this.setState({password: e.target.value});
  }
  changeType() {
    if (this.state.headerText === 'Sign In') {
      this.setState({headerText: 'Create an account', footerText: 'Not registered? ', signup: 0, buttonText: 'login'});      
    } else {
      this.setState({headerText: 'Sign In', footerText: 'Already registered? ', signup: 1, buttonText: 'create'});
    }
  }
  submitLogin() {
    var user = {username: this.state.username, password: this.state.password};
    if (this.state.signup) {
      window.postSignup(user, (body) => {
        if (body === 'undefined') {
          this.setState({username: '', password: '', errMsg: 'Username already exists'})
        } else {
          window.localStorage.setItem('com.avalon', body.token);
          this.props.loggingIn();
          this.setState({username: '', password: '', errMsg: ''});
        }
      });
    } else {
      window.postSignin(user, (body) => {
        console.log(body);
        if (body === 'undefined') {
          this.setState({username: '', password: '', errMsg: 'Invalid username/password'})
        } else {
          if (body.token) {
            window.localStorage.setItem('com.avalon', body.token);
            this.props.loggingIn();
            this.setState({username: '', password: '', errMsg: ''});
          }
          
        }
        
      });
    }
  }

  render () {
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

    return (


      <div className="login-page">
        <div className="formLogin">
          <form className="login-form">
            <input type="text" value={this.state.username} onChange={this.changeUser.bind(this)} placeholder="name"/>
            <input type="password" value={this.state.password} onChange={this.changePW.bind(this)} placeholder="password"/>
            <button onClick={this.submitLogin.bind(this)}>{this.state.buttonText}</button>
            <p className="message">{this.state.footerText}<a href="#" onClick={this.changeType.bind(this)}>{this.state.headerText}</a></p>
          </form>
          <p className="errorMessage">{this.state.errMsg}</p>
        </div>
      </div>
      )


  }
}