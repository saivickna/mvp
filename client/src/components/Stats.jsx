class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      players: []
    }
  }
  componentWillMount() {
    var self = this;
    window.getMatches((body) => {
      if (body === 'undefined') {
      } else {
        self.setState({matches: body});

        var player = {};
        for (var x in body) {
          if (!(player[body[x].playerId])) {
            player[body[x].playerId] = {wins:0, losses:0, name:body[x].players.name, arthurWins: 0, mordredWins: 0};
          }
          if (body[x].games.win === body[x].alliance) {
            player[body[x].playerId].wins++;
            if (body[x].alliance === 0) {
              player[body[x].playerId].arthurWins++;
            } else {
              player[body[x].playerId].mordredWins++;
            }
          } else {
            player[body[x].playerId].losses++;
          }
        }
        var playerList = [];
        for(var x in player) {
          playerList.push(player[x]);
        }
        self.setState({players: playerList});
      }
    });
  }
  render () {
    return (
      <div className="row clearfix">
        <div className="col-md-12 column">
          <table id="example" className="table table-bordered table-hover" cellSpacing="0" width="100%">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Good Guy Wins</th>
                    <th>Bad Guy Wins</th>
                </tr>
            </thead>
            <tbody>
              {this.state.players.map(player => (<tr><td>{player.name}</td><td>{player.wins}</td><td>{player.losses}</td><td>{player.arthurWins}</td><td>{player.mordredWins}</td></tr>))}
            </tbody>
          </table>
        </div>
      </div>
      );
  }
}