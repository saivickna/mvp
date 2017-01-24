

class GameRatio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.colorScale = d3.scale.category10();
  }
  componentWillMount() {
    var data = {arthur: 0, mordred: 0, assassin: 0};
    window.getGames((body) => {
      if (body !== undefined) {
        for (var i = 0; i < body.length; i++) {
          if (body[i].winType === "Servants of Arthur Win") {
            data.arthur++;
          } else if ((body[i].winType === "Minions of Mordred Win")) {
            data.mordred++;
          } else {
            data.assassin++;
          }
        }
        var pieData = [
          data.arthur, data.mordred, data.assassin
        ];
        this.setState({data: pieData});
      }
    })
  }
  render () {
 // For a real world project, use something like
    // https://github.com/digidem/react-dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;
    let minViewportSize = Math.min(width, height);
    // This sets the radius of the pie chart to fit within
    // the current window size, with some additional padding
    let radius = (minViewportSize * .9) / 4;
    // Centers the pie chart
    let x = width / 3;
    let y = height / 4;

    return (
      <div>
        <div>
          <div><div className="leg">Servants of Arthur Win: </div><div className="foo blue"></div></div>
          <div><div className="leg">Minions of Mordred Win: </div><div className="foo orange"></div></div>
          <div><div className="leg">Assassin Kills Merlin: </div><div className="foo green"></div></div>
        </div>
        <svg width="1000px" height="1000px">
          {/* We'll create this component in a minute */}
          <Pie x={x} y={y} radius={radius} data={this.state.data} />
        </svg>
      </div>

    );
  }
}