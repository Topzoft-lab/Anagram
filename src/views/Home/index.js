import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
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
          {" "}
          <Link to="/score" className="game-list">
            Continue Game
          </Link>
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
