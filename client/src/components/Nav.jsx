var Nav = (props) => (
  <div>
    <h1 className="title">Avalon Stats</h1>
    <ul className="nav nav-tabs">
      <li className={props.statsActive ? "active" : ""} onClick={props.changeTabToStats}><a href="#">Stats</a></li>
      <li className={props.gameActive ? "active" : ""} onClick={props.changeTabToGame}><a href="#">Add Game</a></li>
      <li className={props.playerActive ? "active" : ""} onClick={props.changeTabToPlayer}><a href="#">Add Player</a></li>
    </ul>
  </div>
);