import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GameMenu from "./views/GameMenu";
import Home from "./views/Home";
import LeaderBoard from "./views/LeaderBoard";
import GameSettings from "./views/Setting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              <Home />
            </div>
          }
        />
        <Route
          path="/setting"
          element={
            <div className="main">
              <GameSettings />
            </div>
          }
        />
        <Route
          path="/score"
          element={
            <div className="main">
              <LeaderBoard />
            </div>
          }
        />
        <Route
          path="/menu"
          element={
            <div className="main">
              <GameMenu />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
