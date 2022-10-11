import "./setting.css";

const GameSettings = () => {
  return (
    <div className="game-setting">
      <h1 className="setting">
        <i className="fa-solid fa-gear"></i>Settings
      </h1>
      <h3 className="name">Player Name</h3>
      <div className="player-input">
        <input type="text" className="player-name" placeholder="Enter Name" />
      </div>

      <h3 className="name">Levels</h3>
      <div className="radio-group">
        <input type="checkbox" className="radio-input" />
        <label for="easy" className="radio-label">
          Easy
        </label>
        <input type="checkbox" className="radio-input" />
        <label for="hard" className="radio-label">
          Hard
        </label>
        <input type="checkbox" className="radio-input" />
        <label for="difficult" className="radio-label">
          Difficult
        </label>
      </div>
      <div className="arrow">
        <i className="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
  );
};
export default GameSettings;
