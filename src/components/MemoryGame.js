import { useEffect, useState } from "react";
import { getMemoryGameShuffledCards } from "../utils/memory-game-utils";
import MemoryGameCard from "./MemoryGameCard";

const MemoryGame = () => {
  const initialState = [
    null,
    null,
    'ball',
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
  const [state, setState] = useState(initialState);;
  const [firstOpenedCardIndex, setFirstCardOpenedIndex] = useState(null);
  const [secondOpenedCardIndex, setSecondCardOpenedIndex] = useState(5);


  useEffect(() => {
    if (firstOpenedCardIndex !== null && secondOpenedCardIndex !== null) {
      // 2 card are oppened

      //... close bouth
      setFirstCardOpenedIndex(null)
      setSecondCardOpenedIndex(null)

    }


  }, [firstOpenedCardIndex, secondOpenedCardIndex])




  const handleRestart = () => {
    // Writes a new series of 16 shuffled cards in the state
    const freshShuffledSixtinCards = getMemoryGameShuffledCards()
    setState(freshShuffledSixtinCards)
  }

  const clickOnCard = (index) => {
    console.log("click on card", index)

  }
  return (
    <div className="board-for-margin">
      <h1>Memory Game</h1>
      <div className="memory-board">
        {
          state.map((card, index) => {
            return (
              <MemoryGameCard key={index} card={card} index={index} clickOnCard={clickOnCard} />
            )
          })
        }
        <button className="button" onClick={handleRestart}>Reset</button>
      </div>
    </div>
  )
};
export default MemoryGame;