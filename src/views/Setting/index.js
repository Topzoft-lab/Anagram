import "./setting.css";
import {FaArrowLeft,
FaArrowRight} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import GameContext from "../GameContext";
import {ucWord} from "../../helperFunction";

const GameSettings = () => {
  const {setGame}= useContext(GameContext)

  const [name, setName] = useState("");

  const [level, setLevel] = useState("Easy");
  console.log(level);


  return (
    <div className="main">
      <div className="game-setting">
      <h1 className="setting">
        <i className="fa-solid fa-gear"></i>Settings
      </h1>

      <h3 className="name">Player Name:</h3>
      <div className="player-input">
        <input type="text" className="player-name" placeholder="Enter name..." onChange={(e)=>{
          setName(ucWord(e.target.value));
        }}/>
      </div>

      <h3 className="name">Levels:</h3>
      <div className="radio-group">

        {/* <input type="checkbox" className="radio-input" />
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
        </label> */}

        <input type="radio" name="rad" defaultChecked onChange={(e) => {
          setLevel("Easy")
        }}/>
        <label htmlFor="asy" className="radio-label">Easy</label>

        <input type="radio" name="rad" onChange={(e) => {
          setLevel("Hard")
        }}/>
        <label htmlFor="hard" className="radio-label">Hard</label>

        <input type="radio" name="rad" onChange={(e) => {
          setLevel("Difficult")
        }}/>
        <label htmlFor="difficult" className="radio-label">Difficult</label>

      </div>
      <div className="arrow">
      <Link to="/"><FaArrowLeft /></Link>
      <Link to="/menu"><FaArrowRight onClick={(e) => {
        setGame({
          playerName: name,
          lvl: level,
          lives: [0, 0, 0],
          word: [{easy:["name", "barn", "root", "ram", "doe", "sun", "tan", "rue", "sue", "come"],
                  hard:["senior", "nobody", "intense","diverse","unknown", "implode", "spoilt", "injury"],
                  difficult:[ "raining", "sugarcoat",  "impeccable", "reassurance", "oragutan", "compound"]}],
          score: 0
        })
      }}/></Link>

      </div>
    </div>
    </div>
    
  );
};
export default GameSettings;
