class PlayerOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }
  componentWillMount() {
    var self = this;
    window.getPlayers((body) => {
      if (body === 'undefined') {
      } else {
        this.setState({players: body});
        this.props.setInitial(body[0].name);
      }
    });
  }
  render () {
    return (
      <select onChange={this.props.changePerson} className="form-control">
        {this.state.players.map(player => <option value={player.id}>{player.name}</option>)}
      </select>
    )

  }
}