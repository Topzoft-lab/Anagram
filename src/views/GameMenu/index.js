import { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import PopupModal from "../../Components/popupModal";
import { shuffle } from "../../helperFunction";
import GameContext from "../GameContext";
import "./game.css";

let sadGif = require("../../assets/sad-gif.gif");
let wellDoneGif = require("../../assets/well-done-emoji.gif");



const GameMenu = () => {
  const {game,setGame} = useContext(GameContext);
  const [counter, setCounter] = useState(60);
  const [counterStyle, setCounterStyle] = useState("lvl-counter")
 

  const [randLetters, setRandLetters] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [heart, setHeart] = useState([]);

  const [subMsg, setSubMsg] = useState("");
  
  const [score, setScore] = useState("");

  const [alert, setAlert] = useState({
      style : "alert-none",
      message: ""});

  setTimeout(()=>setAlert({style:"alert-none",message:""}),4000);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter < 11 && setTimeout(() => setCounterStyle("lvl-counter-blink"), 500);

    // counter === 0 && alert("timeout") 

  }, [counter]);


  const processGame = () => {
    let word ;
    
    if(game.lvl === "Easy") {
      word = game.word[0].easy
      setCounter(30);
    } else if(game.lvl === "Hard") {
      word = game.word[0].hard
      setCounter(45);
    } else {
      word = game.word[0].difficult;
      setCounter(60);
    }

    //Gets the index of the random word
    let random = Math.floor(Math.random()*word.length);
    //removes word that was played
   
    
    //Converting the random word into an array
    let guessWord = word[random].split("")

    //Hides the word
    let hiddenGuessWord = guessWord.map(()=> {
      return "";
    })

  

    //Creating random letters
    let random2, random3, random4, random5;

    if(game.lvl === 'Easy') {
      random2 =word[ Math.floor(Math.random()*word.length)].split("");
      random3 = word[Math.floor(Math.random()*word.length)].split("");
      random4 = word[Math.floor(Math.random()*word.length)].split("");
      random5 = [];
    } else if (game.lvl === 'Hard') {
      random2 =word[ Math.floor(Math.random()*word.length)].split("");
      random3 = word[Math.floor(Math.random()*word.length)].split("");
      random4 = word[Math.floor(Math.random()*word.length)].split("");
      random5 = [];
    } else {
      random2 =word[ Math.floor(Math.random()*word.length)].split("");
      random3 = word[Math.floor(Math.random()*word.length)].split("");
      random4 = word[Math.floor(Math.random()*word.length)].split("");
      random5 = word[Math.floor(Math.random()*word.length)].split("");
    }

     

    //Turning them into one array
    let randomLetters = [...random2, ...random3, ...random4, ...random5, ...guessWord];

    //Shuffle the array
    let shuffledArr = shuffle(randomLetters)

    let newGame ={...game, guessWord, hiddenGuessWord} ;
    console.log(shuffledArr)  
    setGame(newGame);
    setRandLetters(shuffledArr);

  }

  const guess = (letter) => {
    let guessedWord = game.guessWord;
    let lives = game.lives;
    let hiddenGuessWord = game.hiddenGuessWord;


    if(guessedWord.includes(letter)) {
      //Looping through the guess word
      for (let i = 0; i <guessedWord.length; i++) {
        if (guessedWord[i] === letter) {
          hiddenGuessWord[i] = letter;
        }
      }
      //To display message
      setAlert({
        style: "alert-success",
        message: "Correct. Good Job!"
      })

      


    } else {
      lives.pop();
      let newHeart =heart;
      newHeart.push(0)
      setHeart(newHeart)
      setAlert({
        style: "alert-error",
        message: "Wrong guess. Try again!"
      });
    }

    let newGame = {...game, lives, hiddenGuessWord};
    setGame(newGame);
  }



  useEffect(() => {
    processGame();
  },[])
  

  return (
    <div className="container">
      <div className="exit"><Link to="/"><FaArrowLeft /></Link></div>

      <div className="header">
        <div className="scores">
          <h4 className="top">Score</h4>
          <span className="value"> {game.score} </span>
        </div>
        <div className="level">
        <div  className={counterStyle}> {counter}</div>
          <h4 className="lvl-type">
            {game.lvl}
          </h4>
        </div>
        <div className="player">
          <h4 className="top">
            {game.playerName}
          </h4>
          <span className="value">
              {game.lives && game.lives.map((live) => {
                return <FaHeart className="heart"/>
              })}
               {heart && heart.map((live) => {
                return <FaHeart className="heart-empty"/>
              })}
  
            </span>
        </div>
      </div>
      <div className={alert.style}>{alert.message}</div>
      <div className="guess-word">
        {game.hiddenGuessWord  && game.hiddenGuessWord.map((letter) => {
          return <div className="word">{letter}</div>
        }) }
        
      </div>

      <div className="guess_letters">
        <div className="letters">
          {randLetters && randLetters.map((arr) => {
            return  <div className="input" onClick={() => {
              guess(arr);
            }}>{arr}</div>
          })}
        </div>
      </div>
      <div onClick={() => setOpenModal(true)}>sad</div>
      <div onClick={() => setOpenModal2(true)}>Happy</div>

      <PopupModal isOpen={openModal} modalGif={sadGif} subMsg={subMsg} msg="Game Over" score={score} nextLabel="Try Again" nextAction={()=>console.log("click")}/>
      <PopupModal isOpen={openModal2} modalGif={wellDoneGif} subMsg={subMsg} msg="Amazing!" score={score} nextLabel="Next" nextAction={()=>console.log("click")}/>
    </div>
  );
};
export default GameMenu;
