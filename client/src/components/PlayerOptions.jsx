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
        console.log('Failure');
      } else {
        this.setState({players: body});
      }
    });
  }
  render () {
    return (
      <select className="form-control">
        {this.state.players.map(player => <option>{player.name}</option>)}
      </select>
    )

  }
}