import "./game.css";

const GameMenu = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="scores">
          <h4>
            Score
            <span className="value"> 0 </span>
          </h4>
        </div>
        <div className="level">
          <h4>
            Level
            <span className="value"> 1</span>
          </h4>
        </div>
        <div className="player">
          <h4>
            Samuel
            <span className="value">
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
            </span>
          </h4>
        </div>
      </div>
      <div className="alert">Alert!</div>
      <div className="guess-word">
        <div className="word">C</div>
        <div className="word">O</div>
        <div className="word">M</div>
        <div className="word">P</div>
        <div className="word">A</div>
        <div className="word">C</div>
        <div className="word">T</div>
      </div>

      <div className="guess_letters">
        <div className="letters">
          <div className="input">A</div>
          <div className="input">E</div>
          <div className="input">I</div>
          <div className="input">O</div>
          <div className="input">U</div>
        </div>

        <div className="letters">
          <div className="input">P</div>
          <div className="input">C</div>
          <div className="input">D</div>
          <div className="input">M</div>
          <div className="input">T</div>
        </div>
      </div>
    </div>
  );
};
export default GameMenu;
