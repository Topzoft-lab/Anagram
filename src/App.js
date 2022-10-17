import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GameProvider } from "./views/GameContext";
import GameMenu from "./views/GameMenu";
import Home from "./views/Home";
import LeaderBoard from "./views/LeaderBoard";
import GameSettings from "./views/Setting";
import {
  Provider as AlertProvider,
  positions,
  transitions
} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
const alertOptions = {
  offset: '25px',
  timeout: 3000,
  transition: transitions.SCALE
}

const App = () => {
  return (
    <AlertProvider
      template={AlertTemplate}
      position={positions.TOP_RIGHT} //default position for all alerts without individual position
      {...alertOptions}
    >
      <GameProvider>
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
      </GameProvider>
    </AlertProvider>
  );
};

export default App;
