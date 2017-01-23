class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      statsActive: true,
      gameActive: false,
      playerActive: false
    };
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
  render() {
    console.log('test');
    if (this.state.playerActive) {
      console.log('huh');
      return (
        <div>
          <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
          <Player />
        </div>
      );
    } else {
      return (
        <Nav statsActive={this.state.statsActive} gameActive={this.state.gameActive} playerActive={this.state.playerActive} changeTabToStats={this.changeTabToStats.bind(this)} changeTabToGame={this.changeTabToGame.bind(this)} changeTabToPlayer={this.changeTabToPlayer.bind(this)}/>
      );
    }
  

  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;