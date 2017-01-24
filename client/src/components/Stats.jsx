class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStats: true,
      gameRatio: true
    }
  }
  changeStats (e) {
    if (e.target.value === 'Player Table Stats') {
      this.setState({playerStats: true, gameRatio: false});
    } else {
      this.setState({playerStats: false, gameRatio: true});
    }
  }

  render () {
    return (
      <div>
        <select onChange={this.changeStats.bind(this)} className="form-control selectstats">
          <option>Player Table Stats</option>
          <option>Win Ratio</option>
        </select>
        {this.state.playerStats ? <PlayerStats /> : <GameRatio />}
      </div>
    );
  }
}