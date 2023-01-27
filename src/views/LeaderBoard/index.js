import "./leaderboard.css";
import {FaArrowLeft} from 'react-icons/fa';
  import { Link } from "react-router-dom";

const LeaderBoard = () => {
  return (
    <div className="main">
      <div class="leader-board">
      <h1 class="board-header">Leaderboard</h1>
      <div class="leader-detail">
        <div class="leader-name">Samuel</div>
        <div class="leader-score">1000</div>
      </div>
      <div class="leader-detail">
        <div class="leader-name">Samuel</div>
        <div class="leader-score">0</div>
      </div>
      <div class="leader-detail">
        <div class="leader-name">Samuel</div>
        <div class="leader-score">0</div>
      </div>
      <div className="arrow"><Link to="/"><FaArrowLeft /></Link></div>
    </div>
    </div>
    
  );
};
export default LeaderBoard;
