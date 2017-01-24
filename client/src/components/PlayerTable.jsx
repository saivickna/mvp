class PlayerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personID: 0,
      personName: '',
      role: 'Merlin',
      roleId: 0
    }
    // <input type="text" placeholder='Player' className="form-control"/>
  }

  changePerson(event) {
    this.setState({personID: event.target.value});
    var index = event.target.selectedIndex;
    this.setState({personName: event.target[index].text});
  }
  changeRole(event) {
    this.setState({role: event.target.value, roleId: (event.target.selectedIndex < 3) ? 0 : 1});
  }
  addPerson() {

    var player = {id: this.state.personID, name: this.state.personName, alliance: this.state.roleId, allianceRole: this.state.role}
    // var curPlayers = this.state.players;
    // curPlayers.push(player);

    // this.setState({players: curPlayers})
    this.props.addPerson(player);
  }
  removePerson() {
    // var curPlayers = this.state.players;
    // curPlayers.pop();
    // this.setState({players: curPlayers})
    this.props.removePerson();
  }
  submitGame () {
    this.props.submitGame();
  }
  render() {
    return (
      <div className="container">
        <div className="row clearfix">
        <div className="col-md-12 column">
          <table className="table table-bordered table-hover" id="tab_logic">
            <thead>
              <tr>
                <th className="text-center">
                  Player
                </th>
                <th className="text-center">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.players.map(player => (<tr><td>{player.name}</td><td>{player.allianceRole}</td></tr>))}
              <tr>
                <td>
                <PlayerOptions changePerson={this.changePerson.bind(this)}/>
                </td>
                <td>
                <select onChange={this.changeRole.bind(this)} className="form-control">
                  <option>Merlin</option>
                  <option>Percival</option>
                  <option>Servant of Arthur</option>
                  <option>Mordred</option>
                  <option>Assassin</option>
                  <option>Morgana</option>
                  <option>Oberon</option>
                  <option>Minion of Mordred</option>
                </select>
                </td>
              </tr>
              <tr id='addr1'></tr>
            </tbody>
          </table>
        </div>
      </div>
      <a id="add_row" onClick={this.addPerson.bind(this)} className="btn btn-default pull-left">Add Row</a><a id='delete_row' onClick={this.removePerson.bind(this)} className="btn btn-default">Delete Row</a><a id='submit_game' onClick={this.submitGame.bind(this)} className="pull-right btn btn-primary">Submit Game</a>
    </div>
      )
  }
}