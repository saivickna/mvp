class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <form className="form-inline winCriteria">
          <label className="radio-inline"><input type="radio" name="optradio"/>Servants of Arthur Win</label>
          <label className="radio-inline"><input type="radio" name="optradio"/>Minions of Mordred Win</label>
          <label className="radio-inline"><input type="radio" name="optradio"/>Assassin Kills Merlin</label>
        </form>
        <PlayerTable />
      </div>
    )
  }
}