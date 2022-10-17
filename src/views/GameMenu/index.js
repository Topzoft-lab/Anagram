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

  setTimeout(()=>setAlert({style:"alert-none",message:""}),4000);
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
          <h4 className="top">
            {game.lvl}
          </h4>
        </div>
        <div className="player">
          <h4>
            {game.playerName}
          </h4>
          <span className="value">
              {game.lives && game.lives.map((live) => {
                return <FaHeart className="heart"/>
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
    </div>
  );
};
export default GameMenu;
