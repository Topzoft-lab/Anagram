import { createContext, useState } from "react";


const GameContext = createContext();

export const GameProvider = ({children})=>{
    const [game, setGame] = useState("my name is bomb");
    return (<GameContext.Provider value={{game,setGame}}>{children}</GameContext.Provider>);    
}

export default GameContext;