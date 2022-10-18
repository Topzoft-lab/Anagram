import "./setting.css";
import {FaArrowLeft,
FaArrowRight} from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import GameContext from "../GameContext";
import {ucWord} from "../../helperFunction";

const GameSettings = () => {
  const {setGame}= useContext(GameContext)

  const [name, setName] = useState("");
  const history= useNavigate();

  const [level, setLevel] = useState("Easy");
  console.log(level);

  const [playerInput, setPlayerInput] = useState({style:"player-name", message: ""});
  setTimeout(() => setPlayerInput({style:"player-name", message: ""}),4000);


  return (
    <div className="main">
      <div className="game-setting">
      <h1 className="setting">
        <i className="fa-solid fa-gear"></i>Settings
      </h1>

      <h3 className="name">Player Name:</h3>
      <div className="player-input">
        <input type="text" className={playerInput.style} placeholder="Enter name..." onChange={(e)=>{
          setName(ucWord(e.target.value));
        }}/>
        <label htmlFor="text" className="label">{playerInput.message}</label>
      </div>

      <h3 className="name">Levels:</h3>
      <div className="radio-group">
        <input type="radio" name="rad" defaultChecked onChange={(e) => {
          setLevel("Easy")
        }}/>
        <label htmlFor="easy" className="radio-label">Easy</label>

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
      <Link to="/" className="arr"><FaArrowLeft /></Link>
      < ><FaArrowRight className="arr" onClick={(e) => {
        if (name === "") {
         setPlayerInput({style:"player-name-error", message: "*Fill in this field"})
        } else {
          setGame({
            playerName: name,
            lvl: level,
            lives: [0, 0, 0],
            word: [{easy:["name", "barn", "root", "ram", "doe", "sun", "tan", "rue", "sue", "come"],
                    hard:["senior", "nobody", "intense","diverse","unknown", "implode", "spoilt", "injury"],
                    difficult:[ "raining", "sugarcoat",  "impeccable", "reassurance", "orangutan", "compound"]}],
            score: 1000
          });
          history("/menu");
        }
        
      }}/></>

      </div>
    </div>
    </div>
    
  );
};
export default GameSettings;
