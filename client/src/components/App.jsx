class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      statsActive: true,
      gameActive: false,
      playerActive: false,
      loggedIn: false
    };
  }
  componentWillMount() {
    // console.log(window.localStorage.getItem('com.avalon'));
    if(window.localStorage.getItem('com.avalon') !== null)
    {
      this.setState({loggedIn: true});
    }
  }
  changeTabToStats() {
    this.setState({statsActive: true, gameActive: false, playerActive: false});
  }

  changeTabToGame() {
    this.setState({statsActive: false, gameActive: true, playerActive: false});
  }

  changeTabToPlayer() {
    this.setState({statsActive: false, gameActive: false, playerActive: true});
  }
  loggingIn () {
    this.setState({loggedIn: true});
  }
  loggingOut () {
    window.localStorage.removeItem('com.avalon');
    this.setState({loggedIn: false});
  }
  render() {
    // if (this.state.playerActive) {
    //   return (
    //     <div>
    //       <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
    //       <Player />

    //     </div>
    //   );
    // } else if (this.state.gameActive){
    //   return (
    //     <div>
    //       <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
    //       <Game />
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
    //       <Stats />
    //     </div>
    //   );   
    // }
      // return (
      //   <div>
      //     <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
      //     {this.state.playerActive ? <Player /> : this.state.gameActive ? <Game /> :  <Stats />}
      //   </div>
      // );
      if (this.state.loggedIn) {
        return (
          <div>
            <Nav loggingOut={this.loggingOut.bind(this)} statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
            {this.state.playerActive ? <Player /> : this.state.gameActive ? <Game /> :  <Stats />}
          </div>
        );
      } else {
        return (
          <Login loggingIn={this.loggingIn.bind(this)}/>
        );
      }


  

  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;