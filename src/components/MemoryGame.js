import { useState } from "react";
import MemoryGameCard from "./MemoryGameCard";

const MemoryGame = () => {

  const initialState = [
    null,
    null,
    "boll",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]

  const [state, setState] = useState(initialState)


  return (
    <div className="board-for-margin">
      <h1>Memory Game</h1>
      <div className="memory-board">
        {
          state.map((card, index) => {
            return (
              <MemoryGameCard  key={index} card={card}/>
            )
          })
        }
      </div>
    </div>
  )
};
export default MemoryGame;