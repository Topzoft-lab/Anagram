import { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { shuffle } from "../../helperFunction";
import GameContext from "../GameContext";
import "./game.css";


const GameMenu = () => {
  const {game,setGame} = useContext(GameContext);
 

  const [randLetters, setRandLetters] = useState([])


  const [alert, setAlert] = useState({
      style : "alert-none",
      message: ""});

  const processGame = () => {
    let word ;
    
    if(game.lvl === "Easy") {
      word = game.word[0].easy
    } else if(game.lvl === "Hard") {
      word = game.word[0].hard
    } else {
      word = game.word[0].difficult;
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
    let random2 =word[ Math.floor(Math.random()*word.length)].split("");
    let random3 = word[Math.floor(Math.random()*word.length)].split("");

    //Turning them into one array
    let randomLetters = [...random2, ...random3, ...guessWord];

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
        style: "alert",
        message: "Correct. Good Job!"
      })


    } else {
      lives.pop();
      setAlert({
        style: "alert",
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
          <h4>
            Score
            <span className="value"> {game.score} </span>
          </h4>
        </div>
        <div className="level">
          <h4>
            {game.lvl}
          </h4>
        </div>
        <div className="player">
          <h4>
            {game.playerName}
            <span className="heart">
              {game.lives && game.lives.map((live) => {
                return <FaHeart/>
              })}
            {/* <FaHeart/>
            <FaHeart/>
            <FaHeart/> */}
            </span>
          </h4>
        </div>
      </div>
      <div className={alert.style}>{alert.message}</div>
      <div className="guess-word">
        {game.hiddenGuessWord  && game.hiddenGuessWord.map((letter) => {
          return <div className="word">{letter}</div>
        }) }
        {/* <div className="word">C</div>
        <div className="word">O</div>
        <div className="word">M</div>
        <div className="word">P</div>
        <div className="word">A</div>
        <div className="word">C</div>
        <div className="word">T</div> */}

      </div>

      <div className="guess_letters">
        <div className="letters">
          {randLetters && randLetters.map((arr) => {
            return  <div className="input" onClick={() => {
              guess(arr);
            }}>{arr}</div>
          })}
          {/* <div className="input">A</div>
          <div className="input">E</div>
          <div className="input">I</div>
          <div className="input">O</div>
          <div className="input">U</div> */}
        </div>

        {/* <div className="letters">
          <div className="input">P</div>
          <div className="input">C</div>
          <div className="input">D</div>
          <div className="input">M</div>
          <div className="input">T</div>
        </div> */}
      </div>
    </div>
  );
};
export default GameMenu;
