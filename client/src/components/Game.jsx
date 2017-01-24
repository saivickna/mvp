class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arthur: true,
      mordred: false,
      assassain: false,
      playerTable: false,
      players: []
    }
  }
  submitGame() {
    if (this.state.players.length === 0) {
      alert('Please add players');
    } else {
      var game = {};
      game.win = this.state.arthur ? 0 : 1;
      game.winType = this.state.arthur ? 'Servants of Arthur Win' : this.state.mordred ? 'Minions of Mordred Win' : 'Assassin Kills Merlin';
      game.players = this.state.players;
      window.postGame(game, () => {
        this.setState({players: []});
      });
    }


  }
  changeArthur() {
    this.setState({arthur: true, mordred: false, assassain: false});
  }
  changeMordred() {
    this.setState({arthur: false, mordred: true, assassain: false});
  } 
  changeAssassin() {
    this.setState({arthur: false, mordred: false, assassain: true});
  }
  addPerson(player) {

    //var player = {id: this.state.personID, name: this.state.personName, alliance: this.state.roleId, allianceRole: this.state.role}
    var curPlayers = this.state.players;
    curPlayers.push(player);
    this.setState({players: curPlayers})
  }
  removePerson() {
    var curPlayers = this.state.players;
    curPlayers.pop();
    this.setState({players: curPlayers})
  }
  render () {
    return (
      <div>
        <form className="form-inline winCriteria">
          <label className="radio-inline"><input type="radio" onChange={this.changeArthur.bind(this)} checked={this.state.arthur} name="optradio"/>Servants of Arthur Win</label>
          <label className="radio-inline"><input type="radio" onChange={this.changeMordred.bind(this)} checked={this.state.mordred} name="optradio"/>Minions of Mordred Win</label>
          <label className="radio-inline"><input type="radio" onChange={this.changeAssassin.bind(this)} checked={this.state.assassain} name="optradio"/>Assassin Kills Merlin</label>
        </form>
        <PlayerTable addPerson={this.addPerson.bind(this)} removePerson={this.removePerson.bind(this)} players={this.state.players} submitGame={this.submitGame.bind(this)}/>
      </div>
    )
  }
}
