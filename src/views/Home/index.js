import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import GameContext from "../GameContext";
import { useContext } from "react";
import { useState } from "react";

const Home = () => {
  const { setGame } = useContext(GameContext);
  const [continueStyle, setContinueStyle] = useState(() => {
    if (localStorage.getItem("ongoingGame") === null) {
      return "";
    }
    return "game-list";
  });

  let navigate = useNavigate();
  const continueGame = () => {
    let newGame = localStorage.getItem("ongoingGame");
    console.log(newGame);
    setGame(newGame);
    navigate("/menu");
  };

  return (
    <div className="container">
      <div className="logo">
        <div className="first">A</div>
        <div className="second">B</div>
        <div className="third">C</div>
      </div>
      <h1 className="anagram">Anagrams</h1>
      <ul className="list">
        <li className="innerList">
          <Link to="/setting" className="game-list">
            New Game
          </Link>
        </li>
        <li className="innerList">
          <span className={continueStyle} onClick={continueGame}>
            {" "}
            Continue
          </span>
        </li>
        <li className="innerList">
          {" "}
          <Link to="/score" className="game-list">
            High Score
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
