class PlayerTable extends React.Component {
  constructor(props) {
    super(props);
    // <input type="text" placeholder='Player' className="form-control"/>
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
              <tr id='addr0'>
                <td>
                <PlayerOptions />
                </td>
                <td>
                <select className="form-control">
                  <option>Merlin</option>
                  <option>Mordred</option>
                  <option>Assassin</option>
                  <option>Morgana</option>
                  <option>Oberon</option>
                  <option>Percival</option>
                  <option>Servant of Arthur</option>
                  <option>Minion of Mordred</option>
                </select>
                </td>
              </tr>
              <tr id='addr1'></tr>
            </tbody>
          </table>
        </div>
      </div>
      <a id="add_row" className="btn btn-default pull-left">Add Row</a><a id='delete_row' className="pull-right btn btn-default">Delete Row</a>
    </div>
      )
  }
}