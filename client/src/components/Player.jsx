class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cohort: "",
      errMsg: "hidden"
    }
  }
  submitPlayer () {
    window.postPlayer(this.state, this.clearForm.bind(this));
  }
  clearForm (body) {
    if (body === 'undefined') {
      this.setState({errMsg: "shown"})
    } else  {
      this.setState({name:'', cohort:'', errMsg: "hidden"});
    }
  }
  playerNameChange (event) {
    this.setState({name: event.target.value});
  }
  playerCohortChange (event) {
    this.setState({cohort: event.target.value});
  }
  render () {
    return (
      <div>
        <label>Name</label>
        <input className="form-control" type="text" value={this.state.name} onChange={this.playerNameChange.bind(this)}/>
        <label>Cohort</label>
        <input className="form-control" type="text" value={this.state.cohort} onChange={this.playerCohortChange.bind(this)}/>
        <button type="submit" onClick={this.submitPlayer.bind(this)} className="btn btn-primary playerBtn">Submit</button>
        <div className={this.state.errMsg}>Failed to add player</div>
      </div> 
    );
  }
}