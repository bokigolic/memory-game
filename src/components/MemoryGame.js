import { useState } from "react";
import { getMemoryGameShuffledCards } from "../utils/memory-game-utils";
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
  const handleRestart = () => {
    // Writes a new series of 16 shuffled cards in the state
    const freshShuffledSixtinCards = getMemoryGameShuffledCards()
    setState(freshShuffledSixtinCards)
  }

  return (
    <div className="board-for-margin">
      <h1>Memory Game</h1>
      <div className="memory-board">
        {
          state.map((card, index) => {
            return (
              <MemoryGameCard key={index} card={card} />
            )
          })
        }
        <button className="button" onClick={handleRestart}>Reset</button>
      </div>
    </div>
  )
};
export default MemoryGame;